"use client";

import { useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui";

const FORM_NAME = "contact_form";

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

function pushDataLayer(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

export function ContactForm() {
  const locale = useLocale();
  const t = useTranslations("ContactForm");
  const [budget, setBudget] = useState("");
  const formStartedRef = useRef(false);

  const handleFieldInteraction = () => {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    pushDataLayer("form_start", { form_name: FORM_NAME });
  };

  const handleSubmit = () => {
    // Fires synchronously before the native form submit navigates away to
    // formsubmit.co — do NOT preventDefault, this is a native POST + _next redirect.
    pushDataLayer("lead_submit", {
      form_name: FORM_NAME,
      budget,
    });
    try {
      sessionStorage.setItem("dj_lead_form", FORM_NAME);
      sessionStorage.setItem("dj_lead_budget", budget || "unknown");
      sessionStorage.setItem("dj_lead_pending", "1");
    } catch {
      // Ignore sessionStorage errors (private mode etc.)
    }
  };

  return (
    <form
      action="https://formsubmit.co/info@slobodan-jelisavac.com"
      method="POST"
      className="space-y-4"
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

      <input
        type="text"
        name="name"
        placeholder={t("namePlaceholder")}
        required
        onFocus={handleFieldInteraction}
        className="w-full p-3 border border-gray-300 rounded-md"
      />
      <input
        type="email"
        name="email"
        placeholder={t("emailPlaceholder")}
        required
        onFocus={handleFieldInteraction}
        className="w-full p-3 border border-gray-300 rounded-md"
      />
      <input
        type="url"
        name="website"
        placeholder={locale === "sr" ? "Website URL (opciono)" : "Website URL (optional)"}
        onFocus={handleFieldInteraction}
        className="w-full p-3 border border-gray-300 rounded-md"
      />
      <select
        name="budget"
        value={budget}
        onChange={(e) => {
          handleFieldInteraction();
          setBudget(e.target.value);
        }}
        className="w-full p-3 border border-gray-300 rounded-md text-gray-500 bg-white"
      >
        <option value="" disabled>
          {locale === "sr" ? "Mesečni budžet za oglašavanje" : "Monthly ad budget"}
        </option>
        <option value="<500">
          {locale === "sr" ? "Do €500/mesec" : "Under $500/month"}
        </option>
        <option value="500-1500">{locale === "sr" ? "€500 – €1.500/mesec" : "$500 – $1,500/month"}</option>
        <option value="1500-5000">{locale === "sr" ? "€1.500 – €5.000/mesec" : "$1,500 – $5,000/month"}</option>
        <option value="5000+">{locale === "sr" ? "€5.000+/mesec" : "$5,000+/month"}</option>
        <option value="not-sure">
          {locale === "sr" ? "Nisam siguran/na" : "Not sure yet"}
        </option>
      </select>
      <textarea
        name="message"
        placeholder={t("messagePlaceholder")}
        rows={4}
        required
        onFocus={handleFieldInteraction}
        className="w-full p-3 border border-gray-300 rounded-md"
      />
      <Button type="submit" variant="secondary" className="w-full">
        {t("submit")}
      </Button>
    </form>
  );
}
