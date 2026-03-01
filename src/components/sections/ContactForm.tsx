"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui";

export function ContactForm() {
  const locale = useLocale();
  const t = useTranslations("ContactForm");

  return (
    <form
      action="https://formsubmit.co/info@slobodan-jelisavac.com"
      method="POST"
      className="space-y-4"
    >
      {/* FormSubmit config */}
      <input type="hidden" name="_subject" value={t("subject")} />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value={`https://www.slobodan-jelisavac.com/${locale}/kontakt/hvala`}
      />

      <input
        type="text"
        name="name"
        placeholder={t("namePlaceholder")}
        required
        className="w-full p-3 border-2 border-gray-900 rounded-md"
      />
      <input
        type="email"
        name="email"
        placeholder={t("emailPlaceholder")}
        required
        className="w-full p-3 border-2 border-gray-900 rounded-md"
      />
      <input
        type="url"
        name="website"
        placeholder={locale === "sr" ? "Website URL (opciono)" : "Website URL (optional)"}
        className="w-full p-3 border-2 border-gray-900 rounded-md"
      />
      <select
        name="budget"
        className="w-full p-3 border-2 border-gray-900 rounded-md text-gray-500 bg-white"
        defaultValue=""
      >
        <option value="" disabled>
          {locale === "sr" ? "Mesečni budžet za oglašavanje" : "Monthly ad budget"}
        </option>
        <option value="<500">
          {locale === "sr" ? "Do €500/mesec" : "Under €500/month"}
        </option>
        <option value="500-1500">€500 – €1,500/{locale === "sr" ? "mesec" : "month"}</option>
        <option value="1500-5000">€1,500 – €5,000/{locale === "sr" ? "mesec" : "month"}</option>
        <option value="5000+">€5,000+/{locale === "sr" ? "mesec" : "month"}</option>
        <option value="not-sure">
          {locale === "sr" ? "Nisam siguran/na" : "Not sure yet"}
        </option>
      </select>
      <textarea
        name="message"
        placeholder={t("messagePlaceholder")}
        rows={4}
        required
        className="w-full p-3 border-2 border-gray-900 rounded-md"
      />
      <Button type="submit" variant="secondary" className="w-full">
        {t("submit")}
      </Button>
    </form>
  );
}
