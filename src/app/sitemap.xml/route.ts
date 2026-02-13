import { routing } from "@/i18n/routing";
import { slugMap } from "@/app/[locale]/blog/[slug]/posts/slug-map";

const baseUrl = "https://www.slobodan-jelisavac.com";

// Extract EN pathname map from routing config
const enPathMap: Record<string, string> = {};
for (const [canonical, localized] of Object.entries(routing.pathnames)) {
  if (typeof localized === "object" && "en" in localized) {
    enPathMap[canonical] = localized.en;
  }
}

// SR routes (canonical paths)
const routes = [
  "",
  "/o-meni",
  "/kontakt",
  "/kontakt/hvala",
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
  "/usluge/google-ads-za-saas",
  "/usluge/konsultacije",
  "/usluge/performance-marketing",
  "/usluge/starter-paket",
  "/case-studies",
  "/case-studies/mobelaris",
  "/case-studies/designerglasses",
  "/case-studies/soundboxstore",
  "/blog",
  "/blog/koliko-kosta-google-ads",
  "/blog/google-oglasavanje-za-firme",
  "/blog/performance-max-vodic",
  "/blog/google-ads-optimizacija",
  "/blog/google-shopping-vodic",
  "/blog/agencija-vs-freelancer",
  "/blog/conversion-tracking-vodic",
  "/blog/google-ads-greske",
  "/blog/zasto-nema-rezultata",
  "/blog/ecommerce-vs-b2b",
  "/blog/google-ads-vs-meta",
  "/blog/google-ads-audit-vodic",
  "/blog/kljucne-reci-vodic",
  "/blog/negativne-kljucne-reci",
  "/blog/quality-score-vodic",
  "/blog/remarketing-vodic"
];

/** Translate a canonical (SR) route to the EN equivalent */
function toEnRoute(route: string): string {
  // Direct match in routing pathnames (service pages, about, contact)
  if (enPathMap[route]) return enPathMap[route];

  // Blog posts: translate slug
  const blogMatch = route.match(/^\/blog\/(.+)$/);
  if (blogMatch && slugMap[blogMatch[1]]) {
    return `/blog/${slugMap[blogMatch[1]]}`;
  }

  // Unchanged (homepage, case-studies, etc.)
  return route;
}

const priorityForRoute = (route: string) => {
  if (route === "") return "1.0";
  const segments = route.split("/").filter(Boolean);
  if (segments.length === 1) return "0.8";
  if (segments.length === 2) return "0.7";
  return "0.6";
};

export async function GET() {
  const now = new Date().toISOString();

  const urls = routes.flatMap((route) => {
    const srPath = route;
    const enPath = toEnRoute(route);
    const priority = priorityForRoute(route);

    return [
      `
  <url>
    <loc>${baseUrl}/sr${srPath}</loc>
    <lastmod>${now}</lastmod>
    <priority>${priority}</priority>
  </url>`,
      `
  <url>
    <loc>${baseUrl}/en${enPath}</loc>
    <lastmod>${now}</lastmod>
    <priority>${priority}</priority>
  </url>`
    ];
  });

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
