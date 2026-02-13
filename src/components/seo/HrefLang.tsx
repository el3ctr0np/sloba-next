"use client";

import { usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { slugMap, enToSrMap } from "@/app/[locale]/blog/[slug]/posts/slug-map";

const BASE_URL = "https://www.slobodan-jelisavac.com";

export function HrefLang() {
  const pathname = usePathname();
  const locale = useLocale();

  // Skip rendering on dynamic routes where usePathname returns the pattern (e.g. /blog/[slug])
  // generateMetadata handles hreflang for these pages instead
  if (pathname.includes("[")) return null;

  let srPath: string = pathname;
  let enPath: string = pathname;

  // Translate blog slugs between locales
  const blogMatch = pathname.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    if (locale === "en" && enToSrMap[slug]) {
      srPath = `/blog/${enToSrMap[slug]}`;
    } else if (locale === "sr" && slugMap[slug]) {
      enPath = `/blog/${slugMap[slug]}`;
    }
  }

  const srUrl = `${BASE_URL}/sr${srPath === "/" ? "" : srPath}`;
  const enUrl = `${BASE_URL}/en${enPath === "/" ? "" : enPath}`;
  const defaultUrl = srUrl;

  return (
    <>
      <link rel="alternate" hrefLang="sr" href={srUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={defaultUrl} />
    </>
  );
}
