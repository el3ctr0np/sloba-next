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
    ];
  }
};

export default withNextIntl(nextConfig);
