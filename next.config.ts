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
  }
};

export default withNextIntl(nextConfig);
