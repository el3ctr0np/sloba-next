// Canonical (SR) slug → EN slug mapping
export const slugMap: Record<string, string> = {
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
  "kljucne-reci-vodic": "google-ads-keyword-guide",
  "negativne-kljucne-reci": "negative-keywords-guide",
  "quality-score-vodic": "quality-score-guide",
  "remarketing-vodic": "remarketing-guide",
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
