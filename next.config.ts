import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { routing } from "./src/i18n/routing";

// Putanja sa segmentom drugog jezika (/en/usluge, /sr/services) next-intl
// preusmerava sa 307, pa Google taj URL drzi kao zaseban i daje mu impresije
// (GSC 13-14.9.2026: /en/usluge). Ovde isti parovi idu kao 308, izvedeni iz
// routing.pathnames da nova stranica ne trazi rucno pravilo.
function crossLocaleRedirects() {
  const out: { source: string; destination: string; permanent: true }[] = [];
  for (const localized of Object.values(routing.pathnames)) {
    if (typeof localized !== "object") continue;
    const { sr, en } = localized as { sr: string; en: string };
    if (sr === en) continue;
    const toParam = (p: string) => p.replace(/\[(\w+)\]/g, ":$1");
    out.push({ source: `/en${toParam(sr)}`, destination: `/en${toParam(en)}`, permanent: true });
    out.push({ source: `/sr${toParam(en)}`, destination: `/sr${toParam(sr)}`, permanent: true });
  }
  return out;
}

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    // Optimised images (/_next/image) default to a 60s cache; every hero and
    // logo came back with a short TTL in PageSpeed. Source files rarely change
    // and are content-addressed by URL params anyway.
    minimumCacheTTL: 2592000
  },
  async redirects() {
    return [
      // Stari slug vodica za pocetnike sa prefiksom jezika. Bez prefiksa je vec
      // pokriven nize; GA4 je 14.8-12.9 zabelezio organski ulaz na EN varijantu (404).
      {
        source: "/sr/blog/google-ads-za-pocetnike-vodic",
        destination: "/sr/blog/kako-poceti-google-ads",
        permanent: true
      },
      {
        source: "/sr/blog/google-ads-za-pocetnike",
        destination: "/sr/blog/kako-poceti-google-ads",
        permanent: true
      },
      {
        source: "/en/blog/google-ads-za-pocetnike-vodic",
        destination: "/en/blog/how-to-start-google-ads",
        permanent: true
      },
      {
        source: "/en/blog/google-ads-za-pocetnike",
        destination: "/en/blog/how-to-start-google-ads",
        permanent: true
      },
      // Deleted pages → redirect to relevant sections. `:locale` is pinned to
      // sr|en: an unpinned param swallowed /google-ads-usluge/cenovnik as
      // locale="google-ads-usluge" and sent it to /google-ads-usluge/usluge.
      {
        source: "/sr/cenovnik",
        destination: "/sr/usluge",
        permanent: true
      },
      // EN direktno na /services: preko /en/usluge bio bi lanac od dva skoka.
      {
        source: "/en/cenovnik",
        destination: "/en/services",
        permanent: true
      },
      // GA4 Audience Framework moved under the /resursi tools hub Aug 30 2026.
      // Locale-specific because the EN path differs (/resources/ga4-framework).
      {
        source: "/sr/ga4-audiences",
        destination: "/sr/resursi/ga4-framework",
        permanent: true
      },
      {
        source: "/en/ga4-audiences",
        destination: "/en/resources/ga4-framework",
        permanent: true
      },
      {
        source: "/ga4-audiences",
        destination: "/sr/resursi/ga4-framework",
        permanent: true
      },
      // Profit-Leak Check retired Aug 2026 — replaced by the GA4 Audience
      // Framework download as the free front-door. Keeps LinkedIn links alive.
      // Points straight at the new URL: chaining through /ga4-audiences would
      // make these two hops instead of one.
      {
        source: "/sr/profit-provera",
        destination: "/sr/resursi/ga4-framework",
        permanent: true
      },
      {
        source: "/en/profit-provera",
        destination: "/en/resources/ga4-framework",
        permanent: true
      },
      {
        source: "/sr/profit-leak-check",
        destination: "/sr/resursi/ga4-framework",
        permanent: true
      },
      {
        source: "/en/profit-leak-check",
        destination: "/en/resources/ga4-framework",
        permanent: true
      },
      {
        source: "/profit-provera",
        destination: "/sr/resursi/ga4-framework",
        permanent: true
      },
      {
        source: "/profit-leak-check",
        destination: "/en/resources/ga4-framework",
        permanent: true
      },
      // Methodology page retired Jul 2026 — folded into service pages
      {
        source: "/sr/metodologija",
        destination: "/sr/usluge",
        permanent: true
      },
      // EN direktno na /services: preko /en/usluge bio bi lanac od dva skoka.
      {
        source: "/en/metodologija",
        destination: "/en/services",
        permanent: true
      },
      {
        source: "/sr/methodology",
        destination: "/sr/usluge",
        permanent: true
      },
      // EN direktno na /services: preko /en/usluge bio bi lanac od dva skoka.
      {
        source: "/en/methodology",
        destination: "/en/services",
        permanent: true
      },
      {
        source: "/sr/usluge/seo",
        destination: "/sr/usluge",
        permanent: true
      },
      // EN direktno na /services: preko /en/usluge bio bi lanac od dva skoka.
      {
        source: "/en/usluge/seo",
        destination: "/en/services",
        permanent: true
      },
      // meta-oglasavanje redirect removed — LP page now exists at /lp/google-ads

      // ─── Konsolidacija usluga, 12.9.2026 (Q4_SAJT_SPEC.md, talas 4) ───
      // Sest stranica pod /usluge/ bilo je opisi tipova kampanja, ne usluga, i
      // vodici ih pokrivaju bolje. Zajedno su za tri meseca dale 122 impresije i
      // 4 klika. Svaki unutrasnji link na njih prevezan je PRE gasenja, pa ova
      // preusmerenja hvataju samo spoljne linkove i indeks.
      // SR i EN putanje se razlikuju, zato dva pravila po stranici plus varijanta
      // bez prefiksa jezika za stare linkove.
      {
        source: "/sr/usluge/search-kampanje",
        destination: "/sr/usluge/google-ads-upravljanje",
        permanent: true
      },
      {
        source: "/en/services/search-campaigns",
        destination: "/en/services/google-ads-management",
        permanent: true
      },
      {
        source: "/usluge/search-kampanje",
        destination: "/sr/usluge/google-ads-upravljanje",
        permanent: true
      },
      {
        source: "/sr/usluge/performance-max",
        destination: "/sr/usluge/google-ads-upravljanje",
        permanent: true
      },
      {
        source: "/en/services/performance-max",
        destination: "/en/services/google-ads-management",
        permanent: true
      },
      {
        source: "/usluge/performance-max",
        destination: "/sr/usluge/google-ads-upravljanje",
        permanent: true
      },
      // Shopping ide na eCommerce Growth, jer je to jedina preostala stranica
      // koja stvarno pokriva prodavnicu i feed.
      {
        source: "/sr/usluge/google-shopping",
        destination: "/sr/usluge/google-ads-za-ecommerce",
        permanent: true
      },
      {
        source: "/en/services/google-shopping",
        destination: "/en/services/google-ads-for-ecommerce",
        permanent: true
      },
      {
        source: "/usluge/google-shopping",
        destination: "/sr/usluge/google-ads-za-ecommerce",
        permanent: true
      },
      {
        source: "/sr/usluge/remarketing",
        destination: "/sr/usluge/google-ads-upravljanje",
        permanent: true
      },
      {
        source: "/en/services/remarketing",
        destination: "/en/services/google-ads-management",
        permanent: true
      },
      {
        source: "/usluge/remarketing",
        destination: "/sr/usluge/google-ads-upravljanje",
        permanent: true
      },
      {
        source: "/sr/usluge/youtube-oglasi",
        destination: "/sr/usluge/google-ads-upravljanje",
        permanent: true
      },
      {
        source: "/en/services/youtube-ads",
        destination: "/en/services/google-ads-management",
        permanent: true
      },
      {
        source: "/usluge/youtube-oglasi",
        destination: "/sr/usluge/google-ads-upravljanje",
        permanent: true
      },
      // performance-marketing je od sest imala jedina klikove (4 klika, 30
      // impresija, pozicija 27,5), zato ide na konkretnu stranicu a ne na hub:
      // hub slabije rangira na te opste upite.
      {
        source: "/sr/usluge/performance-marketing",
        destination: "/sr/usluge/google-ads-upravljanje",
        permanent: true
      },
      {
        source: "/en/services/performance-marketing",
        destination: "/en/services/google-ads-management",
        permanent: true
      },
      {
        source: "/usluge/performance-marketing",
        destination: "/sr/usluge/google-ads-upravljanje",
        permanent: true
      },

      // ─── Old WordPress URLs → New Next.js equivalents (301) ───
      // Blog posts (old WP slugs → new Next.js slugs)
      {
        source: "/blog/google-ads-quality-score-ocena-kvaliteta",
        destination: "/sr/blog/quality-score-vodic",
        permanent: true
      },
      {
        source: "/blog/google-ads-quality-score-ocena-kvaliteta/",
        destination: "/sr/blog/quality-score-vodic",
        permanent: true
      },
      {
        source: "/blog/google-oglasavanje-u-2025-kompletan-vodic-za-uspesne-google-ads-kampanje/:path*",
        destination: "/sr/blog/google-oglasavanje-za-firme",
        permanent: true
      },
      {
        source: "/blog/google-oglasavanje-u-2025-kompletan-vodic-za-uspesne-google-ads-kampanje",
        destination: "/sr/blog/google-oglasavanje-za-firme",
        permanent: true
      },
      {
        source: "/blog/kako-optimizovati-mali-google-ads-budzet",
        destination: "/sr/blog/google-ads-optimizacija",
        permanent: true
      },
      {
        source: "/blog/kako-optimizovati-mali-google-ads-budzet/",
        destination: "/sr/blog/google-ads-optimizacija",
        permanent: true
      },
      {
        source: "/blog/razumevanje-google-ads-metrika-sta-pratiti-za-uspeh-kampanje-ctr/:path*",
        destination: "/sr/blog/google-ads-optimizacija",
        permanent: true
      },
      {
        source: "/blog/razumevanje-google-ads-metrika-sta-pratiti-za-uspeh-kampanje-ctr",
        destination: "/sr/blog/google-ads-optimizacija",
        permanent: true
      },
      {
        source: "/blog/google-ads-pvc-stolarija-srbija",
        destination: "/sr/blog",
        permanent: true
      },
      {
        source: "/blog/google-ads-pvc-stolarija-srbija/",
        destination: "/sr/blog",
        permanent: true
      },
      // Old WP pages → new equivalents (second batch from GSC "Not found" list,
      // Sep 2026 — each one has a real successor, so 301 rather than 410)
      {
        source: "/google-ads-usluge",
        destination: "/sr/usluge",
        permanent: true
      },
      {
        source: "/google-ads-usluge/:path*",
        destination: "/sr/usluge",
        permanent: true
      },
      {
        source: "/blog/google-ads-za-pocetnike",
        destination: "/sr/blog/kako-poceti-google-ads",
        permanent: true
      },
      {
        source: "/blog/google-ads-za-pocetnike-vodic",
        destination: "/sr/blog/kako-poceti-google-ads",
        permanent: true
      },
      {
        source: "/blog/google-oglasavanje-vodic-2025",
        destination: "/sr/blog/google-oglasavanje-za-firme",
        permanent: true
      },
      {
        source: "/blog/pisanje-google-ads-oglasa",
        destination: "/sr/blog/rsa-vodic",
        permanent: true
      },
      {
        source: "/about-us",
        destination: "/sr/o-meni",
        permanent: true
      },
      {
        source: "/our-team",
        destination: "/sr/o-meni",
        permanent: true
      },
      {
        source: "/privacy-policy",
        destination: "/sr/privatnost",
        permanent: true
      },
      // Old WP pages → new equivalents
      {
        source: "/author/:path*",
        destination: "/sr/o-meni",
        permanent: true
      },
      {
        source: "/careers",
        destination: "/sr/o-meni",
        permanent: true
      },
      {
        source: "/careers/",
        destination: "/sr/o-meni",
        permanent: true
      },
      {
        source: "/google-ads-expert",
        destination: "/sr/o-meni",
        permanent: true
      },
      {
        source: "/google-ads-expert/",
        destination: "/sr/o-meni",
        permanent: true
      },
      {
        source: "/kontakt/",
        destination: "/sr/kontakt",
        permanent: true
      },
      {
        source: "/services/",
        destination: "/sr/usluge",
        permanent: true
      },
      {
        source: "/services",
        destination: "/sr/usluge",
        permanent: true
      },
      // Old education/glossary pages → blog
      {
        source: "/edukacija",
        destination: "/sr/blog",
        permanent: true
      },
      {
        source: "/edukacija/",
        destination: "/sr/blog",
        permanent: true
      },
      // Old glossary entries → the glossary that exists now (was /sr/blog
      // before /recnik shipped; GSC still lists 7 of these as redirects)
      {
        source: "/edukacija/recnik/:path*",
        destination: "/sr/recnik",
        permanent: true
      },
      // Old category pages → blog
      {
        source: "/category/:path*",
        destination: "/sr/blog",
        permanent: true
      },
      // Old service posts → services
      {
        source: "/service-post/shopping-campaign",
        destination: "/sr/usluge/google-ads-za-ecommerce",
        permanent: true
      },
      {
        source: "/service-post/shopping-campaign/",
        destination: "/sr/usluge/google-ads-za-ecommerce",
        permanent: true
      },
      {
        source: "/service-post/:path*",
        destination: "/sr/usluge",
        permanent: true
      },
      // /klijenti parent route is not implemented (only /klijenti/[slug] for portal)
      // Redirect to public case studies hub — consolidates authority signals
      {
        source: "/sr/klijenti",
        destination: "/sr/case-studies",
        permanent: true
      },
      {
        source: "/en/klijenti",
        destination: "/en/case-studies",
        permanent: true
      },

      // Old case studies (without locale) → case studies hub (studies removed, single hop)
      {
        source: "/case-studies/designerglasses/",
        destination: "/sr/case-studies",
        permanent: true
      },
      {
        source: "/case-studies/mobelaris/",
        destination: "/sr/case-studies",
        permanent: true
      },
      {
        source: "/case-studies/soundboxstore/",
        destination: "/sr/case-studies",
        permanent: true
      },

      // NDA faza 2b (23.9.2026): 4 case study slug-ovi renameovani (anonimizacija),
      // 4 uklonjeni → hub. Jedan skok, oba jezika.
      {
        source: "/sr/case-studies/chelleon",
        destination: "/sr/case-studies/uk-skincare-ecommerce-poas",
        permanent: true
      },
      {
        source: "/en/case-studies/chelleon",
        destination: "/en/case-studies/uk-skincare-ecommerce-poas",
        permanent: true
      },
      {
        source: "/sr/case-studies/ankibuddy",
        destination: "/sr/case-studies/dach-edtech-saas-tracking",
        permanent: true
      },
      {
        source: "/en/case-studies/ankibuddy",
        destination: "/en/case-studies/dach-edtech-saas-tracking",
        permanent: true
      },
      {
        source: "/sr/case-studies/mbfinance",
        destination: "/sr/case-studies/finance-consulting-audit-serbia",
        permanent: true
      },
      {
        source: "/en/case-studies/mbfinance",
        destination: "/en/case-studies/finance-consulting-audit-serbia",
        permanent: true
      },
      {
        source: "/sr/case-studies/chatislav",
        destination: "/sr/case-studies/tech-startup-launch-serbia",
        permanent: true
      },
      {
        source: "/en/case-studies/chatislav",
        destination: "/en/case-studies/tech-startup-launch-serbia",
        permanent: true
      },
      {
        source: "/sr/case-studies/mobelaris",
        destination: "/sr/case-studies",
        permanent: true
      },
      {
        source: "/en/case-studies/mobelaris",
        destination: "/en/case-studies",
        permanent: true
      },
      {
        source: "/sr/case-studies/designerglasses",
        destination: "/sr/case-studies",
        permanent: true
      },
      {
        source: "/en/case-studies/designerglasses",
        destination: "/en/case-studies",
        permanent: true
      },
      {
        source: "/sr/case-studies/soundboxstore",
        destination: "/sr/case-studies",
        permanent: true
      },
      {
        source: "/en/case-studies/soundboxstore",
        destination: "/en/case-studies",
        permanent: true
      },
      {
        source: "/sr/case-studies/uk-agency-partnership",
        destination: "/sr/case-studies",
        permanent: true
      },
      {
        source: "/en/case-studies/uk-agency-partnership",
        destination: "/en/case-studies",
        permanent: true
      },

      // Insights (talas 6c) — samo EN, /sr/insights nema svoju stranicu, pa
      // ide direktno na /en/insights umesto 404.
      {
        source: "/sr/insights",
        destination: "/en/insights",
        permanent: true
      },
      {
        source: "/sr/insights/:slug",
        destination: "/en/insights/:slug",
        permanent: true
      },

      // Kickstart skinut sa sajta (odluka 13.9.2026, izvrseno 22-23.9) — ostaje
      // samo kao privatna ponuda na pozivu. GSC 90 dana: 0 impresija na obe
      // jezicke verzije starter-paket stranice, pa ide direktno na vodjenje.
      {
        source: "/sr/usluge/starter-paket",
        destination: "/sr/usluge/google-ads-upravljanje",
        permanent: true
      },
      {
        source: "/en/services/starter-package",
        destination: "/en/services/google-ads-management",
        permanent: true
      },

      // Parovi jezika iz routing.pathnames idu POSLE svih eksplicitnih pravila:
      // prvo poklapanje pobedjuje, a eksplicitno pravilo (npr. profit-provera)
      // vodi direktno na krajnju stranicu.
      ...crossLocaleRedirects(),

      // ─── Non-www → www canonical redirect ───
      {
        source: "/:path*",
        has: [{ type: "host", value: "slobodan-jelisavac.com" }],
        destination: "https://www.slobodan-jelisavac.com/:path*",
        permanent: true
      },
    ];
  },

  async headers() {
    // Security headers applied site-wide. Full script-src CSP is ENFORCED
    // (flipped from Report-Only Jul 9 2026 after a static audit of every
    // loaded resource — no legitimate resource is blocked).
    //
    // Allowlist notes:
    //  - GTM / GA4 / Google Ads / Meta Pixel / YouTube / Vercel: analytics
    //    and embeds fire through googletagmanager, google-analytics,
    //    googleadservices, doubleclick, connect.facebook.net, youtube, vercel.
    //  - pagead2.googlesyndication.com + doubleclick in connect-src: modern
    //    gtag posts conversions and remarketing to /ccm/collect via fetch, not
    //    an image pixel. Missing it silently killed every Google Ads signal
    //    (GA4 page_view + AW-11116427812 enhanced conversions) until Aug 6 2026.
    //  - bat.bing.com (Microsoft UET) + clarity.ms (Clarity p9emdujpy4): both
    //    fire from GTM container GTM-PJ4B5QP, not from site code, so they are
    //    invisible to a source grep — verify in the browser console after any
    //    CSP change.
    //  - img-src is already `https:`, so tracking pixels need no per-host entry;
    //    only script-src and connect-src are allowlisted per host.
    //  - formsubmit.co: contact + audit forms POST natively (form-action),
    //    LP multi-step + profit-leak calculators POST via fetch (connect-src).
    //  - *.sanity.io + wss://*.sanity.io: embedded Sanity Studio at /studio
    //    needs data + realtime WebSocket; worker-src blob: for its web workers.
    //  - Fonts are self-hosted via next/font, so font-src 'self' covers them.
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), browsing-topics=()"
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload"
      },
      { key: "X-DNS-Prefetch-Control", value: "on" },
      {
        key: "Content-Security-Policy",
        value:
          "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com https://www.google.com https://connect.facebook.net https://*.vercel-scripts.com https://bat.bing.com https://www.clarity.ms https://*.clarity.ms; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://pagead2.googlesyndication.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://td.doubleclick.net https://www.google.com https://connect.facebook.net https://www.facebook.com https://*.vercel-insights.com https://formsubmit.co https://*.sanity.io wss://*.sanity.io https://bat.bing.com https://www.clarity.ms https://*.clarity.ms; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.googletagmanager.com https://td.doubleclick.net https://www.facebook.com; worker-src 'self' blob:; object-src 'none'; base-uri 'self'; form-action 'self' https://formsubmit.co; frame-ancestors 'self'; upgrade-insecure-requests"
      }
    ];

    const noindex = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];

    // Files under /public are served by Vercel with `max-age=0, must-revalidate`
    // (every repeat view re-validates every logo and photo). /_next/static is
    // already immutable; this covers the raw public images. 30 days, not a
    // year: blog covers and photos get replaced under the same filename.
    const staticImageCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=2592000, stale-while-revalidate=86400"
      }
    ];

    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)",
        headers: staticImageCache
      },
      // Private surfaces: robots.txt disallows crawling, but add a header-level
      // noindex so a linked URL can never be URL-indexed either.
      { source: "/studio/:path*", headers: noindex },
      { source: "/portal/:path*", headers: noindex },
      { source: "/klijenti-login/:path*", headers: noindex },
      { source: "/klijenti-login", headers: noindex }
    ];
  }
};

export default withNextIntl(nextConfig);
