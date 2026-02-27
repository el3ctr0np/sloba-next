import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["sr", "en"],
  defaultLocale: "sr",
  localePrefix: "always",
  localeDetection: false,
  pathnames: {
    "/": "/",

    // Services
    "/usluge": {
      sr: "/usluge",
      en: "/services"
    },
    "/usluge/google-ads-upravljanje": {
      sr: "/usluge/google-ads-upravljanje",
      en: "/services/google-ads-management"
    },
    "/usluge/google-ads-audit": {
      sr: "/usluge/google-ads-audit",
      en: "/services/google-ads-audit"
    },
    "/usluge/konsultacije": {
      sr: "/usluge/konsultacije",
      en: "/services/consultations"
    },
    "/usluge/starter-paket": {
      sr: "/usluge/starter-paket",
      en: "/services/starter-package"
    },
    "/usluge/google-shopping": {
      sr: "/usluge/google-shopping",
      en: "/services/google-shopping"
    },
    "/usluge/performance-max": {
      sr: "/usluge/performance-max",
      en: "/services/performance-max"
    },
    "/usluge/search-kampanje": {
      sr: "/usluge/search-kampanje",
      en: "/services/search-campaigns"
    },
    "/usluge/remarketing": {
      sr: "/usluge/remarketing",
      en: "/services/remarketing"
    },
    "/usluge/youtube-oglasi": {
      sr: "/usluge/youtube-oglasi",
      en: "/services/youtube-ads"
    },
    "/usluge/google-ads-za-ecommerce": {
      sr: "/usluge/google-ads-za-ecommerce",
      en: "/services/google-ads-for-ecommerce"
    },
    "/usluge/google-ads-za-b2b": {
      sr: "/usluge/google-ads-za-b2b",
      en: "/services/google-ads-for-b2b"
    },
    "/usluge/google-ads-za-saas": {
      sr: "/usluge/google-ads-za-saas",
      en: "/services/google-ads-for-saas"
    },
    "/usluge/performance-marketing": {
      sr: "/usluge/performance-marketing",
      en: "/services/performance-marketing"
    },

    // Contact
    "/kontakt": {
      sr: "/kontakt",
      en: "/contact"
    },
    "/kontakt/hvala": {
      sr: "/kontakt/hvala",
      en: "/contact/thank-you"
    },

    // About
    "/o-meni": {
      sr: "/o-meni",
      en: "/about"
    },

    // Blog
    "/blog": "/blog",
    "/blog/[slug]": "/blog/[slug]",

    // Landing Pages (Meta Ads - noindex)
    "/lp/google-ads": {
      sr: "/lp/google-ads",
      en: "/lp/google-ads"
    },

    // Case Studies
    "/case-studies": "/case-studies",
    "/case-studies/[slug]": "/case-studies/[slug]"
  }
});
