"use client";

import { usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const BASE_URL = "https://www.slobodan-jelisavac.com";

export function HrefLang() {
  const pathname = usePathname();
  const locale = useLocale();

  const srUrl = `${BASE_URL}/sr${pathname === "/" ? "" : pathname}`;
  const enUrl = `${BASE_URL}/en${pathname === "/" ? "" : pathname}`;
  const defaultUrl = srUrl;

  return (
    <>
      <link rel="alternate" hrefLang="sr" href={srUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={defaultUrl} />
    </>
  );
}
