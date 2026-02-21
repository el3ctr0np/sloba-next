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
      <textarea
        name="message"
        placeholder={t("messagePlaceholder")}
        rows={5}
        required
        className="w-full p-3 border-2 border-gray-900 rounded-md"
      />
      <Button type="submit" variant="secondary" className="w-full">
        {t("submit")}
      </Button>
    </form>
  );
}
