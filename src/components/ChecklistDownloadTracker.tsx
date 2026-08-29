"use client";

import { useEffect } from "react";

/**
 * Fires `checklist_download` to the GTM dataLayer when the audit-checklist
 * thank-you page mounts. Separate event from lead_confirmed on purpose:
 * a template download is a micro-conversion, not a lead, and must not
 * pollute the lead_confirmed conversion used for bidding.
 *
 * Dedup mirrors LeadConfirmedTracker: ChecklistDownloadForm sets
 * dj_checklist_pending=1 on submit; this fires once per session and sets
 * dj_checklist_fired=1 so a refresh of the thank-you page does not double-fire.
 */
export default function ChecklistDownloadTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let alreadyFired = false;
    try {
      alreadyFired = sessionStorage.getItem("dj_checklist_fired") === "1";
    } catch {
      // sessionStorage unavailable — proceed and fire
    }
    if (alreadyFired) return;

    let isPending = false;
    try {
      isPending = sessionStorage.getItem("dj_checklist_pending") === "1";
    } catch {
      // ignore
    }

    const w = window as Window & {
      dataLayer?: Array<Record<string, unknown>>;
    };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "checklist_download",
      form_name: "audit_checklist_download",
      confirmed_via: isPending ? "form_redirect" : "direct_visit",
    });

    try {
      sessionStorage.setItem("dj_checklist_fired", "1");
      sessionStorage.removeItem("dj_checklist_pending");
    } catch {
      // ignore
    }
  }, []);

  return null;
}
