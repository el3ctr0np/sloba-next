"use client";

import { useEffect } from "react";

/**
 * Fires `lead_confirmed` event to GTM dataLayer when /kontakt/hvala mounts.
 * Used by GTM workspace 17 (container GTM-PJ4B5QP):
 *   - GA4 - lead_confirmed [PRIMARY CONV]
 *   - UET - Lead Conv
 *   - Meta Pixel - Lead [PRIMARY]
 *
 * Dedup pattern (sessionStorage):
 *   - MultiStepForm sets `dj_lead_pending=1` + `dj_lead_tier=<tier>` + `dj_lead_form`
 *     + `dj_lead_source=<slug>` + `dj_lead_budget=<monthlyBudget>` on submit success
 *   - ContactForm sets `dj_lead_pending=1` + `dj_lead_form=contact_form` +
 *     `dj_lead_budget=<budget>` + `dj_lead_source=<slug>`
 *   - AuditForm sets `dj_lead_pending=1` + `dj_lead_form=audit_form` +
 *     `dj_lead_ad_spend=<spend>` + `dj_lead_budget=<spend>` (alias, same value) +
 *     `dj_lead_source=<slug>`
 *   - `dj_lead_source` values: google | ai_assistant | linkedin | referral | other |
 *     not_specified (added Sep 2026, task 1218761766603573 — "kako ste me našli?")
 *   - This component reads whichever markers are present, fires lead_confirmed
 *     once per session, and sets `dj_lead_confirmed_fired=1` to prevent
 *     double-fire on hvala refresh
 *   - If user lands on hvala WITHOUT pending flag (direct hit, refresh later, bookmark),
 *     still fires lead_confirmed once with fallback "unknown" values — captures
 *     organic conversions without losing them
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

    // Read markers stashed by MultiStepForm / ContactForm / AuditForm (if available)
    let leadTier = "unknown";
    let leadForm = "unknown";
    let leadBudget = "unknown";
    let leadAdSpend = "unknown";
    let leadSource = "not_specified";
    let isPending = false;
    try {
      leadTier = sessionStorage.getItem("dj_lead_tier") || "unknown";
      leadForm = sessionStorage.getItem("dj_lead_form") || "unknown";
      leadBudget = sessionStorage.getItem("dj_lead_budget") || "unknown";
      leadAdSpend = sessionStorage.getItem("dj_lead_ad_spend") || "unknown";
      leadSource = sessionStorage.getItem("dj_lead_source") || "not_specified";
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
      form_name: leadForm !== "unknown" ? leadForm : "multistep_lp_google_ads",
      lead_tier: leadTier,
      lead_form: leadForm,
      lead_budget: leadBudget,
      lead_ad_spend: leadAdSpend,
      lead_source: leadSource,
      // false = direct/refresh hit (organic), true = arrived via form submit redirect
      from_form_submit: isPending,
    });

    // Set dedup flag and clean up pending/form markers
    try {
      sessionStorage.setItem("dj_lead_confirmed_fired", "1");
      sessionStorage.removeItem("dj_lead_pending");
      // keep dj_lead_tier/dj_lead_form/dj_lead_budget/dj_lead_ad_spend/dj_lead_source
      // in case page is reopened in same session — harmless
    } catch {
      // ignore
    }
  }, []);

  return null;
}
