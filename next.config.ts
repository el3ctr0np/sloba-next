import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Deleted pages → redirect to relevant sections
      {
        source: "/:locale/cenovnik",
        destination: "/:locale/usluge",
        permanent: true
      },
      {
        source: "/:locale/usluge/seo",
        destination: "/:locale/usluge",
        permanent: true
      },
      // meta-oglasavanje redirect removed — LP page now exists at /lp/google-ads

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
      {
        source: "/edukacija/recnik/:path*",
        destination: "/sr/blog",
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
        destination: "/sr/usluge/google-shopping",
        permanent: true
      },
      {
        source: "/service-post/shopping-campaign/",
        destination: "/sr/usluge/google-shopping",
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

      // Old case studies (without locale) → new with locale
      {
        source: "/case-studies/designerglasses/",
        destination: "/sr/case-studies/designerglasses",
        permanent: true
      },
      {
        source: "/case-studies/mobelaris/",
        destination: "/sr/case-studies/mobelaris",
        permanent: true
      },
      {
        source: "/case-studies/soundboxstore/",
        destination: "/sr/case-studies/soundboxstore",
        permanent: true
      },

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
    // Security headers applied site-wide. The CSP is intentionally minimal —
    // it sets only directives that CANNOT block scripts/styles/fonts/images
    // (so GTM, GA4, Meta Pixel, fonts and Vercel keep working). A full
    // script-src CSP needs to be tested against those third parties before
    // shipping — tracked as a follow-up, not set here.
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
      {
        key: "Content-Security-Policy",
        value:
          "base-uri 'self'; object-src 'none'; frame-ancestors 'self'; upgrade-insecure-requests"
      },
      { key: "X-DNS-Prefetch-Control", value: "on" },
      // FULL CSP in REPORT-ONLY mode — blocks NOTHING, only reports violations
      // to the browser console. TEST: deploy this branch to a Vercel preview,
      // open the site (clicking around so GTM/GA/Meta/YouTube all fire), and
      // read the console for "Content-Security-Policy-Report-Only" violations.
      // Once no legitimate resource is flagged, rename the key below to
      // "Content-Security-Policy" to ENFORCE, and delete the minimal CSP above.
      {
        key: "Content-Security-Policy-Report-Only",
        value:
          "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://connect.facebook.net https://*.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' https://fonts.gstatic.com data:; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://www.google.com https://connect.facebook.net https://www.facebook.com https://*.vercel-insights.com; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.googletagmanager.com https://td.doubleclick.net https://www.facebook.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests"
      }
    ];

    const noindex = [{ key: "X-Robots-Tag", value: "noindex, nofollow" }];

    return [
      { source: "/:path*", headers: securityHeaders },
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
