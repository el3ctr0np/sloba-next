"use client";

import { useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui";

const FORM_NAME = "contact_form";

// Mapiraj budžet bucket iz forme u kvalifikacioni tier koji GTM prosleđuje
// u GA4 (dimenzija lead_tier). high/mid = spreman za veći angažman, low =
// mali budžet, unknown = neodlučen. Koristi se za conversion value + bidding.
function budgetToTier(budget: string): "high" | "mid" | "low" | "unknown" {
  if (budget === "5000+" || budget === "1500-5000") return "high";
  if (budget === "500-1500") return "mid";
  if (budget === "<500") return "low";
  return "unknown";
}

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

export function ContactForm() {
  const locale = useLocale();
  const t = useTranslations("ContactForm");
  const [budget, setBudget] = useState("");
  const formStartedRef = useRef(false);
  const sr = locale === "sr";

  const handleFieldInteraction = () => {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    pushDataLayer("form_start", { form_name: FORM_NAME });
  };

  const handleSubmit = () => {
    // Fires synchronously before the native form submit navigates away to
    // formsubmit.co — do NOT preventDefault, this is a native POST + _next redirect.
    const lead_tier = budgetToTier(budget);
    pushDataLayer("lead_submit", {
      form_name: FORM_NAME,
      budget,
      lead_tier,
    });
    try {
      sessionStorage.setItem("dj_lead_form", FORM_NAME);
      sessionStorage.setItem("dj_lead_budget", budget || "unknown");
      sessionStorage.setItem("dj_lead_tier", lead_tier);
      sessionStorage.setItem("dj_lead_pending", "1");
    } catch {
      // Ignore sessionStorage errors (private mode etc.)
    }
  };

  return (
    <form
      action="https://formsubmit.co/info@slobodan-jelisavac.com"
      method="POST"
      className="bg-white rounded-2xl border border-gray-200 shadow-card p-6 md:p-8 space-y-5"
      onSubmit={handleSubmit}
    >
      {/* FormSubmit config */}
      <input type="hidden" name="_subject" value={t("subject")} />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value={`https://www.slobodan-jelisavac.com/${locale === "en" ? "en/contact/thank-you" : "sr/kontakt/hvala"}`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className="text-sm font-semibold text-gray-900 block mb-1.5">
            {sr ? "Ime i prezime" : "Full name"} *
          </label>
          <input
            id="cf-name"
            type="text"
            name="name"
            placeholder={t("namePlaceholder")}
            required
            onFocus={handleFieldInteraction}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="text-sm font-semibold text-gray-900 block mb-1.5">
            Email *
          </label>
          <input
            id="cf-email"
            type="email"
            name="email"
            placeholder={t("emailPlaceholder")}
            required
            onFocus={handleFieldInteraction}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-website" className="text-sm font-semibold text-gray-900 block mb-1.5">
            Website <span className="font-normal text-gray-400">({sr ? "opciono" : "optional"})</span>
          </label>
          <input
            id="cf-website"
            type="url"
            name="website"
            placeholder="https://"
            onFocus={handleFieldInteraction}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-budget" className="text-sm font-semibold text-gray-900 block mb-1.5">
            {sr ? "Mesečni budžet za oglašavanje" : "Monthly ad budget"}
          </label>
          <select
            id="cf-budget"
            name="budget"
            value={budget}
            onChange={(e) => {
              handleFieldInteraction();
              setBudget(e.target.value);
            }}
            className={`${inputClass} ${budget ? "text-gray-900" : "text-gray-400"}`}
          >
            <option value="" disabled>
              {sr ? "— Izaberite —" : "— Select —"}
            </option>
            <option value="<500">{sr ? "Do €500/mesec" : "Under $500/month"}</option>
            <option value="500-1500">{sr ? "€500 – €1.500/mesec" : "$500 – $1,500/month"}</option>
            <option value="1500-5000">{sr ? "€1.500 – €5.000/mesec" : "$1,500 – $5,000/month"}</option>
            <option value="5000+">{sr ? "€5.000+/mesec" : "$5,000+/month"}</option>
            <option value="not-sure">{sr ? "Nisam siguran/na" : "Not sure yet"}</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="text-sm font-semibold text-gray-900 block mb-1.5">
          {sr ? "Poruka" : "Message"} *
        </label>
        <textarea
          id="cf-message"
          name="message"
          placeholder={t("messagePlaceholder")}
          rows={4}
          required
          onFocus={handleFieldInteraction}
          className={`${inputClass} resize-y min-h-[110px]`}
        />
      </div>

      <Button type="submit" variant="secondary" className="w-full !py-3.5 text-base">
        {t("submit")} →
      </Button>

      <p className="text-xs text-gray-400 text-center mb-0">
        {sr
          ? "Odgovaram u roku od 24h radnim danima. Bez spama, bez liste."
          : "I reply within 24h on weekdays. No spam, no mailing list."}
      </p>
    </form>
  );
}
