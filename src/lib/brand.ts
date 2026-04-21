/**
 * Canonical brand identifiers — single source of truth for Person/Organization
 * schema sameAs references across the site.
 *
 * Linking to the Wikidata Q-entity gives AI search engines (ChatGPT, Claude,
 * Perplexity, Gemini) a verified entity identifier they can trust. This is
 * the "bidirectional verification" signal: the website tells AI that this
 * Person is Wikidata Q139494210, and Wikidata tells AI that this entity's
 * official website is slobodan-jelisavac.com.
 */

/** Wikidata Q-number for Slobodan Jelisavac (published 2026-04-20) */
export const WIKIDATA_QID = "Q139494210";

/** Wikidata canonical URL */
export const WIKIDATA_URL = `https://www.wikidata.org/wiki/${WIKIDATA_QID}`;

/**
 * sameAs array for Person / Organization / ProfessionalService schema.
 * Order matters: Wikidata first (highest authority), then owned profiles.
 */
export const PERSON_SAME_AS = [
  WIKIDATA_URL,
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
