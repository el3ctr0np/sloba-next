"use client";

import { useEffect } from "react";

/**
 * Fires `<prefix>_report_requested` when the tool's thank-you page mounts.
 *
 * Deliberately a separate event from lead_confirmed: asking for a tool report
 * is a micro-conversion, and letting it into lead_confirmed would pollute the
 * conversion the campaigns bid on.
 *
 * Dedup mirrors ChecklistDownloadTracker: the form sets dj_<prefix>_pending on
 * submit; this fires once per session and sets dj_<prefix>_fired so a refresh
 * of the thank-you page does not double-fire.
 */
export default function AuditReportTracker({
  eventPrefix,
  formName,
}: {
  eventPrefix: string;
  formName: string;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const firedKey = `dj_${eventPrefix}_fired`;
    const pendingKey = `dj_${eventPrefix}_pending`;

    let alreadyFired = false;
    try {
      alreadyFired = sessionStorage.getItem(firedKey) === "1";
    } catch {
      // sessionStorage unavailable — proceed and fire
    }
    if (alreadyFired) return;

    let isPending = false;
    try {
      isPending = sessionStorage.getItem(pendingKey) === "1";
    } catch {
      // ignore
    }

    const w = window as Window & { dataLayer?: Array<Record<string, unknown>> };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: `${eventPrefix}_report_requested`,
      form_name: formName,
      confirmed_via: isPending ? "form_redirect" : "direct_visit",
    });

    try {
      sessionStorage.setItem(firedKey, "1");
      sessionStorage.removeItem(pendingKey);
    } catch {
      // ignore
    }
  }, [eventPrefix, formName]);

  return null;
}
