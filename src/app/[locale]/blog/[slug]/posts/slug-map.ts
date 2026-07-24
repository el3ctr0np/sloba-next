// Canonical (SR) slug → EN slug mapping
export const slugMap: Record<string, string> = {
  "google-api-pristupi-za-agencije": "google-api-access-guide-for-agencies",
  "google-ads-api-basic-access-vodic": "google-ads-api-basic-access-guide",
  "offline-conversion-import-b2b": "offline-conversion-import-b2b",
  "koliko-kosta-google-ads-konsultant": "google-ads-consultant-cost-2026",
  "kako-izabrati-google-ads-konsultanta": "how-to-choose-google-ads-consultant",
  "poas-vs-roas": "poas-vs-roas",
  "preuzimanje-google-ads-naloga": "google-ads-account-takeover-checklist",
  "microsoft-ads-vs-google-ads": "microsoft-ads-vs-google-ads-comparison",
  "youtube-oglasavanje-vodic": "youtube-advertising-guide",
  "koliko-kosta-google-ads": "how-much-does-google-ads-cost",
  "google-oglasavanje-za-firme": "google-advertising-for-businesses",
  "performance-max-vodic": "performance-max-guide",
  "google-ads-optimizacija": "google-ads-optimization",
  "google-shopping-vodic": "google-shopping-guide",
  "agencija-vs-freelancer": "google-ads-agency-vs-freelancer",
  "conversion-tracking-vodic": "conversion-tracking-guide",
  "google-ads-greske": "google-ads-mistakes",
  "zasto-nema-rezultata": "why-google-ads-not-working",
  "ecommerce-vs-b2b": "google-ads-ecommerce-vs-b2b",
  "google-ads-vs-meta": "google-ads-vs-meta-ads",
  "google-ads-audit-vodic": "google-ads-audit-checklist",
  "google-ads-audit-checklist-srbija": "google-ads-audit-checklist-serbia-2026",
  "kljucne-reci-vodic": "google-ads-keyword-guide",
  "negativne-kljucne-reci": "negative-keywords-guide",
  "quality-score-vodic": "quality-score-guide",
  "remarketing-vodic": "remarketing-guide",
  "kako-poceti-google-ads": "how-to-start-google-ads",
  "rsa-vodic": "responsive-search-ads-guide",
  "ctr-vodic": "ctr-guide",
  "google-shopping-srbija-2026": "google-shopping-serbia-2026",
  "google-ads-novosti-2026": "google-ads-updates-2026",
  "google-ads-za-ecommerce-srbija-2026": "google-ads-for-ecommerce-serbia-2026",
  "smart-bidding-vodic": "smart-bidding-guide",
  "ga4-google-ads-integracija": "ga4-google-ads-integration",
  "sta-je-roas": "what-is-roas",
  "merchant-center-srbija-setup": "merchant-center-serbia-setup",
  "product-feed-srpski-ecommerce": "product-feed-serbian-ecommerce",
  "google-shopping-vs-search-kampanje": "google-shopping-vs-search-campaigns",
};

// Reverse map: EN slug → SR (canonical) slug
export const enToSrMap: Record<string, string> = Object.fromEntries(
  Object.entries(slugMap).map(([sr, en]) => [en, sr])
);

/** Get the canonical (SR) slug from any slug */
export function getCanonicalSlug(slug: string): string {
  return enToSrMap[slug] || slug;
}

/** Get the EN slug from a canonical (SR) slug */
export function getEnSlug(srSlug: string): string {
  return slugMap[srSlug] || srSlug;
}

/** Get the alternate locale's slug */
export function getAlternateSlug(
  slug: string,
  targetLocale: string
): string {
  if (targetLocale === "en") {
    return slugMap[slug] || slug;
  }
  return enToSrMap[slug] || slug;
}
