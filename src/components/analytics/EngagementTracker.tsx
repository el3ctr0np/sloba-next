"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Engagement micro-events → dataLayer → GTM (GTM-PJ4B5QP) → GA4.
 *
 * Events pushed (one GA4 event tag in GTM picks them all up):
 * - engagement_time  {seconds}                 active-tab time milestones (30/60/120/300s)
 * - read_complete    {active_seconds, scroll_percent}  blog post consumed (>=60s active + >=75% scroll)
 * - toc_click        {target_id, link_text}    in-page anchor navigation
 * - faq_toggle       {question}                <details> accordion opened
 * - cta_click        {cta_text, link_url}      clicks toward kontakt/usluge/audit/konsultacije
 *
 * Scroll depth is intentionally NOT tracked here — the GTM container already
 * has a native scrollDepth trigger (10/25/50/75/90%) firing the "scroll" event.
 *
 * Active time is accumulated via performance.now() deltas while the tab is
 * visible, so browser timer throttling can only delay a milestone, never
 * inflate or lose time. All state resets on route change (App Router SPA).
 */

const TIME_MILESTONES = [30, 60, 120, 300];
const READ_MIN_SECONDS = 60;
const READ_MIN_SCROLL = 75;
const CTA_PATH_RE = /\/(kontakt|contact|usluge|services|audit|konsultacije)(\/|$|\?|#)/;

function push(event: string, params: Record<string, unknown>) {
  const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

function cleanText(raw: string | null | undefined, max: number): string {
  return (raw || "").replace(/[▼▲▾▸+›»→]/g, "").replace(/\s+/g, " ").trim().slice(0, max);
}

function maxScrollPercent(): number {
  const doc = document.documentElement;
  if (doc.scrollHeight <= window.innerHeight) return 100;
  return Math.min(100, Math.round(((window.scrollY + window.innerHeight) / doc.scrollHeight) * 100));
}

export function EngagementTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const isBlogPost = /\/blog\/[^/]+\/?$/.test(pathname);
    let scrollPercent = 0;
    let readCompleteFired = false;
    const firedMilestones = new Set<number>();

    // active-time accounting: accumulated ms + running segment start
    let accumulatedMs = 0;
    let visibleSince: number | null =
      document.visibilityState === "visible" ? performance.now() : null;

    const activeSeconds = () => {
      const running = visibleSince === null ? 0 : performance.now() - visibleSince;
      return Math.floor((accumulatedMs + running) / 1000);
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        if (visibleSince === null) visibleSince = performance.now();
      } else if (visibleSince !== null) {
        accumulatedMs += performance.now() - visibleSince;
        visibleSince = null;
      }
    };

    const onScroll = () => {
      const p = maxScrollPercent();
      if (p > scrollPercent) scrollPercent = p;
    };

    const check = () => {
      const secs = activeSeconds();
      for (const m of TIME_MILESTONES) {
        if (secs >= m && !firedMilestones.has(m)) {
          firedMilestones.add(m);
          push("engagement_time", { seconds: m });
        }
      }
      if (
        isBlogPost &&
        !readCompleteFired &&
        secs >= READ_MIN_SECONDS &&
        scrollPercent >= READ_MIN_SCROLL
      ) {
        readCompleteFired = true;
        push("read_complete", { active_seconds: secs, scroll_percent: scrollPercent });
      }
    };

    const tick = window.setInterval(check, 1000);

    const onClick = (e: MouseEvent) => {
      const el = e.target as Element | null;
      if (!el) return;

      const summary = el.closest("summary");
      if (summary) {
        const details = summary.closest("details");
        // click on an open <details> is a close — track opens only
        if (details && !details.open) {
          const question = cleanText(summary.textContent, 100);
          if (question) push("faq_toggle", { question });
        }
        return;
      }

      const link = el.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const text = cleanText(link.textContent, 80);

      if (href.startsWith("#")) {
        push("toc_click", { target_id: href.slice(1), link_text: text });
        return;
      }
      if (CTA_PATH_RE.test(href)) {
        push("cta_click", { cta_text: text, link_url: href });
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    document.addEventListener("click", onClick);

    return () => {
      window.clearInterval(tick);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      document.removeEventListener("click", onClick);
    };
  }, [pathname]);

  return null;
}
