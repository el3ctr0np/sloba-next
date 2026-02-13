"use client";

import { useLocale } from "next-intl";
import { Button } from "@/components/ui";

export function ContactForm() {
  const locale = useLocale();

  return (
    <form
      action="https://formsubmit.co/info@slobodan-jelisavac.com"
      method="POST"
      className="space-y-4"
    >
      {/* FormSubmit config */}
      <input type="hidden" name="_subject" value="Nova poruka sa sajta" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value={`https://slobodan-jelisavac.com/${locale}/kontakt/hvala`}
      />

      <input
        type="text"
        name="name"
        placeholder="Ime"
        required
        className="w-full p-3 border-2 border-gray-900 rounded-md"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full p-3 border-2 border-gray-900 rounded-md"
      />
      <textarea
        name="message"
        placeholder="Poruka"
        rows={5}
        required
        className="w-full p-3 border-2 border-gray-900 rounded-md"
      />
      <Button type="submit" variant="secondary" className="w-full">
        Pošalji
      </Button>
    </form>
  );
}
