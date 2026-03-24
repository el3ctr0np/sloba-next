import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio", "/portal"]
    },
    sitemap: "https://www.slobodan-jelisavac.com/sitemap.xml"
  };
}
