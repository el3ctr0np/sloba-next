import type { Metadata } from "next";

const BASE_URL = "https://www.slobodan-jelisavac.com";

type MetadataInput = {
  title: string;
  description: string;
  locale: string;
  path: string; // e.g. "/services/google-ads-management" (without locale prefix)
  srPath?: string; // if SR path differs from EN path (e.g. "/usluge/google-ads-upravljanje")
  ogImage?: string; // e.g. "/og/homepage.png" or "/blog/koliko-kosta-google-ads.png"
};

/**
 * Generates complete metadata with OG tags, canonical URL, and hreflang alternates.
 */
export function buildMetadata({
  title,
  description,
  locale,
  path,
  srPath,
  ogImage,
}: MetadataInput): Metadata {
  const enPath = path;
  const srPathFinal = srPath || path;
  const ogImageUrl = ogImage
    ? `${BASE_URL}${ogImage}`
    : `${BASE_URL}/og/homepage.png`;

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/${locale}${path}`,
      languages: {
        sr: `${BASE_URL}/sr${srPathFinal}`,
        en: `${BASE_URL}/en${enPath}`,
        "x-default": `${BASE_URL}/sr${srPathFinal}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}${path}`,
      siteName: "Slobodan Jelisavac",
      locale: locale === "en" ? "en_US" : "sr_RS",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}
