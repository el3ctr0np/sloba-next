/**
 * Canonical brand identifiers — single source of truth for Person/Organization
 * schema sameAs references across the site.
 *
 * NOTE: Wikidata entity Q139494210 (published 2026-04-20) was deleted by
 * Wikidata moderators on 2026-05-17 (notability policy — self-created entry).
 * Do NOT re-add a Wikidata sameAs link until an entity is re-established
 * through independent sources (press mentions, Clutch profile, directories).
 * A sameAs pointing to a deleted/dead URL is a negative trust signal for AI
 * search engines, worse than no Wikidata link at all.
 */

/**
 * sameAs array for Person / Organization / ProfessionalService schema.
 * Owned, verifiable profiles only.
 */
export const PERSON_SAME_AS = [
  "https://www.linkedin.com/in/slobodanjelisavac/",
  "https://www.youtube.com/channel/UCpmzFFo5olyqxfAxfzjvoDg",
  "https://www.facebook.com/jelisavacs",
  "https://x.com/bbn4SUM",
];

/** Full Person schema object — reusable for JSON-LD where a Person is referenced */
export const PERSON_SCHEMA = {
  "@type": "Person",
  "@id": "https://www.slobodan-jelisavac.com/#person",
  name: "Slobodan Jelisavac",
  alternateName: "Sloba Jelisavac",
  jobTitle: "Google Ads Strategist",
  url: "https://www.slobodan-jelisavac.com",
  image: "https://www.slobodan-jelisavac.com/sloba.webp",
  worksFor: {
    "@type": "Organization",
    name: "Funky Enterprises",
  },
  knowsAbout: [
    "Google Ads",
    "PPC",
    "Google Shopping",
    "Performance Max",
    "Microsoft Ads",
    "eCommerce Marketing",
    "Conversion Tracking",
  ],
  sameAs: PERSON_SAME_AS,
} as const;
