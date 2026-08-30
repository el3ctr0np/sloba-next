import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["sr", "en"],
  defaultLocale: "sr",
  localePrefix: "always",
  // On: an unprefixed entry (/, or the apex domain) is routed by the
  // NEXT_LOCALE cookie first, then Accept-Language, so an English browser lands
  // on /en instead of always getting Serbian. Googlebot sends no
  // Accept-Language, so crawlers still get the x-default (/sr). Only affects
  // unprefixed paths — a shared /sr/... link still opens in Serbian.
  localeDetection: true,
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
    "/usluge/google-ads-agencija": {
      sr: "/usluge/google-ads-agencija",
      en: "/services/google-ads-agency"
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
    "/usluge/chatgpt-ads": {
      sr: "/usluge/chatgpt-ads",
      en: "/services/chatgpt-ads"
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

    // Budget mini calculator (linked from google-ads-budzet post)
    "/resursi/budzet-kalkulator": {
      sr: "/resursi/budzet-kalkulator",
      en: "/resources/budget-calculator"
    },

    // PMax Check (interactive 38-checkpoint Performance Max audit tool)
    "/resursi/pmax-check": {
      sr: "/resursi/pmax-check",
      en: "/resources/pmax-check"
    },
    "/resursi/pmax-check/hvala": {
      sr: "/resursi/pmax-check/hvala",
      en: "/resources/pmax-check/thank-you"
    },

    // Audit checklist download thank-you (gated Google Sheet/XLSX template)
    "/resursi/audit-checklist/hvala": {
      sr: "/resursi/audit-checklist/hvala",
      en: "/resources/audit-checklist/thank-you"
    },

    // PPC Glossary / Rečnik
    "/recnik": {
      sr: "/recnik",
      en: "/glossary"
    },

    // Privacy Policy
    "/privatnost": {
      sr: "/privatnost",
      en: "/privacy"
    },

    // Video Audit (free for qualified prospects)
    "/audit": {
      sr: "/audit",
      en: "/audit"
    },

    // Free tools hub — every lead magnet lives under /resursi so one link in the
    // header and nav covers all of them, present and future.
    "/resursi": {
      sr: "/resursi",
      en: "/resources"
    },

    // GA4 Audience Framework — lead magnet front-door (replaced /profit-provera
    // Aug 2026). Moved under /resursi Aug 30 2026; old URL 301s in next.config.
    "/resursi/ga4-framework": {
      sr: "/resursi/ga4-framework",
      en: "/resources/ga4-framework"
    },

    // Profit-Leak Check (interactive scored diagnostic front-door)
    "/profit-provera": {
      sr: "/profit-provera",
      en: "/profit-leak-check"
    },

    // Landing Pages (Meta Ads - noindex)
    "/lp/google-ads": {
      sr: "/lp/google-ads",
      en: "/lp/google-ads"
    },

    // Case Studies
    "/case-studies": "/case-studies",
    "/case-studies/[slug]": "/case-studies/[slug]",

    // Portal
    "/portal": "/portal",
    "/portal/dashboard": "/portal/dashboard",
    "/portal/reports": "/portal/reports",
    "/portal/history": "/portal/history",
    "/portal/unos": "/portal/unos",

    // Client Reports
    "/klijenti-login": "/klijenti-login",
    "/klijenti/[slug]": "/klijenti/[slug]"
  }
});
