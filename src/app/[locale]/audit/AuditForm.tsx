"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui";

const FORM_NAME = "audit_form";

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

function pushDataLayer(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

export function AuditForm({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const [adSpend, setAdSpend] = useState("");
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
      ad_spend: adSpend,
    });
    try {
      sessionStorage.setItem("dj_lead_form", FORM_NAME);
      sessionStorage.setItem("dj_lead_ad_spend", adSpend || "unknown");
      sessionStorage.setItem("dj_lead_pending", "1");
    } catch {
      // Ignore sessionStorage errors (private mode etc.)
    }
  };

  return (
    <form
      action="https://formsubmit.co/info@slobodan-jelisavac.com"
      method="POST"
      className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 space-y-4"
      onSubmit={handleSubmit}
    >
      {/* FormSubmit config */}
      <input
        type="hidden"
        name="_subject"
        value={isEn ? "Audit Application — slobodan-jelisavac.com" : "Prijava za Audit — slobodan-jelisavac.com"}
      />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value={`https://www.slobodan-jelisavac.com/${locale === "en" ? "en/contact/thank-you" : "sr/kontakt/hvala"}`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-gray-900 block mb-1.5">
            {isEn ? "Full name" : "Ime i prezime"} *
          </label>
          <input
            type="text"
            name="name"
            required
            onFocus={handleFieldInteraction}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
            placeholder={isEn ? "Jane Doe" : "Marko Marković"}
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-900 block mb-1.5">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            onFocus={handleFieldInteraction}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
            placeholder="you@brand.com"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-gray-900 block mb-1.5">
          {isEn ? "Company website" : "Website firme"} *
        </label>
        <input
          type="url"
          name="website"
          required
          onFocus={handleFieldInteraction}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
          placeholder="https://"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-gray-900 block mb-1.5">
            {isEn ? "Business type" : "Tip biznisa"} *
          </label>
          <select
            name="business_type"
            required
            onChange={handleFieldInteraction}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
          >
            <option value="">— {isEn ? "Select" : "Izaberi"} —</option>
            <option>eCommerce</option>
            <option>B2B / Lead Gen</option>
            <option>SaaS</option>
            <option>Local Service</option>
            <option>{isEn ? "Other" : "Drugo"}</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-900 block mb-1.5">
            {isEn ? "Monthly ad spend" : "Mesečni ad spend"} *
          </label>
          <select
            name="monthly_ad_spend"
            required
            value={adSpend}
            onChange={(e) => {
              handleFieldInteraction();
              setAdSpend(e.target.value);
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
          >
            <option value="">— {isEn ? "Select" : "Izaberi"} —</option>
            <option>{isEn ? "< $500/mo (not qualified yet)" : "< €500/mes (nije još kvalifikovan)"}</option>
            <option>{isEn ? "$500 – $1,500/mo" : "€500 – €1.500/mes"}</option>
            <option>{isEn ? "$1,500 – $3,000/mo ✓" : "€1.500 – €3.000/mes ✓"}</option>
            <option>{isEn ? "$3,000 – $10,000/mo ✓" : "€3.000 – €10.000/mes ✓"}</option>
            <option>{isEn ? "$10,000+/mo ✓" : "€10.000+/mes ✓"}</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-gray-900 block mb-1.5">
          {isEn ? "Biggest pain right now" : "Najveći problem trenutno"}
        </label>
        <textarea
          name="biggest_pain"
          rows={4}
          onFocus={handleFieldInteraction}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
          placeholder={
            isEn
              ? "e.g., 'ROAS dropped 30% in Q1, can't figure out why' or 'scaling is stuck at $3k/mo'"
              : "npr. 'ROAS pao 30% u Q1, ne znam zašto' ili 'stopirali smo rast na €3k/mes'"
          }
        />
      </div>

      <Button type="submit" variant="secondary" className="w-full justify-center">
        {isEn ? "Submit application →" : "Pošalji prijavu →"}
      </Button>
    </form>
  );
}
