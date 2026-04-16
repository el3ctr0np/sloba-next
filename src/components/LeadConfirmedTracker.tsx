"use client";

import { useEffect } from "react";

/**
 * Fires `lead_confirmed` event to GTM dataLayer when /kontakt/hvala mounts.
 * Used by GTM workspace 17 (container GTM-PJ4B5QP):
 *   - GA4 - lead_confirmed [PRIMARY CONV]
 *   - UET - Lead Conv
 *   - Meta Pixel - Lead [PRIMARY]  (will be added once code-side MetaPixel is unmounted)
 *
 * Dedup pattern (sessionStorage):
 *   - MultiStepForm sets `dj_lead_pending=1` + `dj_lead_tier=<tier>` on submit success
 *   - This component reads tier, fires lead_confirmed once per session, sets
 *     `dj_lead_confirmed_fired=1` flag to prevent double-fire on hvala refresh
 *   - If user lands on hvala WITHOUT pending flag (direct hit, refresh later, bookmark),
 *     still fires lead_confirmed once with tier=unknown — captures organic conversions
 *     without losing them
 */
export default function LeadConfirmedTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Dedup: only fire once per session
    let alreadyFired = false;
    try {
      alreadyFired = sessionStorage.getItem("dj_lead_confirmed_fired") === "1";
    } catch {
      // sessionStorage unavailable (private mode etc.) — proceed and fire
    }
    if (alreadyFired) return;

    // Read tier stashed by MultiStepForm (if available)
    let leadTier = "unknown";
    let isPending = false;
    try {
      leadTier = sessionStorage.getItem("dj_lead_tier") || "unknown";
      isPending = sessionStorage.getItem("dj_lead_pending") === "1";
    } catch {
      // ignore
    }

    const w = window as Window & {
      dataLayer?: Array<Record<string, unknown>>;
    };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "lead_confirmed",
      form_name: "multistep_lp_google_ads",
      lead_tier: leadTier,
      // false = direct/refresh hit (organic), true = arrived via form submit redirect
      from_form_submit: isPending,
    });

    // Set dedup flag and clean up tier/pending markers
    try {
      sessionStorage.setItem("dj_lead_confirmed_fired", "1");
      sessionStorage.removeItem("dj_lead_pending");
      // keep dj_lead_tier in case page is reopened in same session — harmless
    } catch {
      // ignore
    }
  }, []);

  return null;
}
