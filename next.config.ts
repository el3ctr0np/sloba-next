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
      {
        source: "/:locale/usluge/meta-oglasavanje",
        destination: "/:locale/usluge",
        permanent: true
      }
    ];
  }
};

export default withNextIntl(nextConfig);
