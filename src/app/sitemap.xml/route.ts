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

// Static lastmod dates for non-blog routes (last meaningful content update)
const routeLastmod: Record<string, string> = {
  "": "2026-02-27",
  "/o-meni": "2026-02-10",
  "/kontakt": "2026-01-26",
  "/kontakt/hvala": "2026-01-26",
  "/usluge": "2026-02-10",
  "/usluge/google-ads-upravljanje": "2026-02-10",
  "/usluge/google-ads-audit": "2026-02-10",
  "/usluge/google-shopping": "2026-02-10",
  "/usluge/performance-max": "2026-02-10",
  "/usluge/search-kampanje": "2026-02-10",
  "/usluge/remarketing": "2026-02-10",
  "/usluge/youtube-oglasi": "2026-02-10",
  "/usluge/google-ads-za-b2b": "2026-02-10",
  "/usluge/google-ads-za-ecommerce": "2026-02-10",
  "/usluge/google-ads-za-saas": "2026-02-10",
  "/usluge/konsultacije": "2026-02-10",
  "/usluge/performance-marketing": "2026-02-10",
  "/usluge/starter-paket": "2026-02-10",
  "/case-studies": "2026-01-26",
  "/case-studies/mobelaris": "2026-01-26",
  "/case-studies/designerglasses": "2026-01-26",
  "/case-studies/soundboxstore": "2026-01-26",
  "/blog": "2026-02-27",
};

// Blog post dateModified values (from posts/index.tsx)
const blogLastmod: Record<string, string> = {
  "/blog/koliko-kosta-google-ads": "2026-02-10",
  "/blog/google-oglasavanje-za-firme": "2026-02-07",
  "/blog/performance-max-vodic": "2026-01-31",
  "/blog/google-ads-optimizacija": "2025-12-18",
  "/blog/google-shopping-vodic": "2026-02-03",
  "/blog/agencija-vs-freelancer": "2026-01-28",
  "/blog/conversion-tracking-vodic": "2026-02-05",
  "/blog/google-ads-greske": "2026-02-12",
  "/blog/zasto-nema-rezultata": "2026-01-30",
  "/blog/ecommerce-vs-b2b": "2026-02-08",
  "/blog/google-ads-vs-meta": "2026-02-14",
  "/blog/google-ads-audit-vodic": "2025-12-22",
  "/blog/kljucne-reci-vodic": "2026-01-29",
  "/blog/negativne-kljucne-reci": "2025-12-28",
  "/blog/quality-score-vodic": "2026-01-04",
  "/blog/remarketing-vodic": "2026-02-11",
};

// All SR routes (canonical paths)
const routes = [
  ...Object.keys(routeLastmod),
  ...Object.keys(blogLastmod),
];

function getLastmod(route: string): string {
  return blogLastmod[route] || routeLastmod[route] || "2026-01-26";
}

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
  const urls = routes.flatMap((route) => {
    const srPath = route;
    const enPath = toEnRoute(route);
    const priority = priorityForRoute(route);
    const lastmod = getLastmod(route);

    const srUrl = `${baseUrl}/sr${srPath}`;
    const enUrl = `${baseUrl}/en${enPath}`;

    const alternates = `
    <xhtml:link rel="alternate" hreflang="sr" href="${srUrl}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${srUrl}"/>`;

    return [
      `
  <url>
    <loc>${srUrl}</loc>${alternates}
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`,
      `
  <url>
    <loc>${enUrl}</loc>${alternates}
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`
    ];
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
