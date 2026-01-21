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

const priorityForRoute = (route: string) => {
  if (route === "") return "1.0";
  const segments = route.split("/").filter(Boolean);
  if (segments.length === 1) return "0.8";
  if (segments.length === 2) return "0.7";
  return "0.6";
};

export async function GET() {
  const now = new Date().toISOString();
  const urls = locales.flatMap((locale) =>
    routes.map((route) => {
      const loc = `${baseUrl}/${locale}${route}`;
      const priority = priorityForRoute(route);
      return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <priority>${priority}</priority>
  </url>`;
    })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
