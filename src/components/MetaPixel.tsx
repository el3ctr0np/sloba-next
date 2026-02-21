"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  initMetaPixel,
  trackPageView,
  trackViewContent,
  trackFormStart,
  trackLead,
} from "@/lib/meta-tracking";

export default function MetaPixel() {
  const pathname = usePathname();
  const scrollTracked = useRef(false);
  const formStartTracked = useRef(false);

  // PageView + reset flags na svaki route change
  useEffect(() => {
    initMetaPixel();
    trackPageView();
    scrollTracked.current = false;
    formStartTracked.current = false;
  }, [pathname]);

  // Thank you page auto-detection → Lead event
  useEffect(() => {
    if (
      pathname?.includes("/kontakt/hvala") ||
      pathname?.includes("/contact/thank-you")
    ) {
      trackLead();
    }
  }, [pathname]);

  // Scroll tracking — ViewContent na 90% scroll
  useEffect(() => {
    function handleScroll() {
      if (scrollTracked.current) return;
      const scrollPercent =
        (window.scrollY + window.innerHeight) /
        document.documentElement.scrollHeight;
      if (scrollPercent >= 0.9) {
        trackViewContent();
        scrollTracked.current = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Form start tracking — InitiateCheckout na focus u formi
  useEffect(() => {
    function handleFocusIn(e: FocusEvent) {
      if (formStartTracked.current) return;
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const tagName = target.tagName;
      if (
        (tagName === "INPUT" ||
          tagName === "TEXTAREA" ||
          tagName === "SELECT") &&
        target.closest("form")
      ) {
        trackFormStart();
        formStartTracked.current = true;
      }
    }

    document.addEventListener("focusin", handleFocusIn);
    return () => document.removeEventListener("focusin", handleFocusIn);
  }, [pathname]);

  return null;
}
