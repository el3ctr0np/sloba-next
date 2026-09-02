"use client";

import { useRef } from "react";
import { useLocale } from "next-intl";

const FORM_NAME = "audit_checklist_download";

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

function pushDataLayer(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

const inputClass =
  "w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors";

/**
 * Gated download form for the Google Ads audit checklist template.
 * Same native formsubmit.co POST + _next redirect pattern as ContactForm.
 * Deliberately does NOT set dj_lead_pending — downloads must not fire
 * lead_confirmed; the thank-you page fires its own checklist_download event.
 */
export function ChecklistDownloadForm() {
  const locale = useLocale();
  const sr = locale === "sr";
  const formStartedRef = useRef(false);

  const handleFieldInteraction = () => {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    pushDataLayer("form_start", { form_name: FORM_NAME });
  };

  const handleSubmit = () => {
    // Native POST navigates to formsubmit.co, then redirects to _next.
    pushDataLayer("checklist_download_submit", { form_name: FORM_NAME });
    try {
      sessionStorage.setItem("dj_checklist_pending", "1");
    } catch {
      // sessionStorage unavailable (private mode etc.)
    }
  };

  return (
    <form
      action="https://formsubmit.co/info@slobodan-jelisavac.com"
      method="POST"
      className="space-y-4"
      onSubmit={handleSubmit}
    >
      <input
        type="hidden"
        name="_subject"
        value={sr ? "Audit checklist preuzimanje" : "Audit checklist download"}
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="source" value={FORM_NAME} />
      <input
        type="hidden"
        name="_next"
        value={`https://www.slobodan-jelisavac.com/${
          locale === "en"
            ? "en/resources/audit-checklist/thank-you"
            : "sr/resursi/audit-checklist/hvala"
        }`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="cdf-name"
            className="text-sm font-semibold text-gray-900 block mb-1.5"
          >
            {sr ? "Ime" : "First name"} *
          </label>
          <input
            id="cdf-name"
            type="text"
            name="name"
            placeholder={sr ? "Vaše ime" : "Your name"}
            required
            onFocus={handleFieldInteraction}
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="cdf-email"
            className="text-sm font-semibold text-gray-900 block mb-1.5"
          >
            Email *
          </label>
          <input
            id="cdf-email"
            type="email"
            name="email"
            placeholder={sr ? "vas@email.com" : "you@email.com"}
            required
            onFocus={handleFieldInteraction}
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-secondary w-full !py-3.5 text-base font-semibold"
      >
        {sr ? "Preuzmite checklistu" : "Get the checklist"} →
      </button>

      <p className="text-xs text-gray-500 text-center mb-0">
        {sr
          ? "Odmah dobijate link za preuzimanje. Bez spama, bez liste."
          : "You get the download link immediately. No spam, no mailing list."}
      </p>
    </form>
  );
}
