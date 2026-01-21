import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://slobodan-jelisavac.com";

  const locales = ["sr", "en"];
  const routes = [
    "",
    "/o-meni",
    "/kontakt",
    "/usluge",
    "/usluge/google-ads-upravljanje",
    "/usluge/google-ads-audit",
    "/usluge/google-shopping",
    "/usluge/performance-max",
    "/usluge/search-kampanje",
    "/usluge/remarketing",
    "/usluge/youtube-oglasi",
    "/usluge/google-ads-za-b2b",
    "/usluge/google-ads-za-ecommerce",
    "/usluge/seo",
    "/usluge/meta-oglasavanje",
    "/usluge/performance-marketing",
    "/case-studies",
    "/case-studies/mobelaris",
    "/case-studies/designerglasses",
    "/case-studies/soundboxstore",
    "/blog",
    "/blog/performance-max-vodic",
    "/blog/google-ads-optimizacija",
    "/blog/google-shopping-vodic",
    "/cenovnik"
  ];

  const now = new Date();

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: now
    }))
  );
}
