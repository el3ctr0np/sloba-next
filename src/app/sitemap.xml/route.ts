import { routing } from "@/i18n/routing";
import { srPosts, enPosts, slugMap } from "@/app/[locale]/blog/[slug]/posts";
import { caseStudies } from "@/app/[locale]/case-studies/data";
import { termPageSlugs } from "@/app/[locale]/recnik/terms";

const baseUrl = "https://www.slobodan-jelisavac.com";

// Extract EN pathname map from routing config
const enPathMap: Record<string, string> = {};
for (const [canonical, localized] of Object.entries(routing.pathnames)) {
  if (typeof localized === "object" && "en" in localized) {
    enPathMap[canonical] = localized.en;
  }
}

// Static lastmod dates for non-blog, non-case-study routes (last meaningful update)
const routeLastmod: Record<string, string> = {
  "": "2026-08-27",
  "/o-meni": "2026-08-27",
  "/kontakt": "2026-08-27",
  "/usluge": "2026-09-23",
  "/usluge/google-ads-upravljanje": "2026-09-23",
  "/usluge/google-ads-agencija": "2026-09-23",
  "/usluge/google-ads-audit": "2026-09-23",
  "/usluge/chatgpt-ads": "2026-07-09",
  "/usluge/google-ads-za-b2b": "2026-09-23",
  "/usluge/google-ads-za-ecommerce": "2026-09-23",
  "/usluge/google-ads-za-saas": "2026-09-23",
  "/usluge/konsultacije": "2026-09-23",
  "/case-studies": "2026-03-05",
  "/blog": "2026-04-17",
  "/recnik": "2026-04-23",
  "/audit": "2026-04-23",
  "/resursi": "2026-08-30",
  "/resursi/ga4-framework": "2026-08-01",
  "/resursi/pmax-check": "2026-08-30",
  "/resursi/budzet-kalkulator": "2026-07-12",
  "/industrije/medicina": "2026-09-17",
  "/insights": "2026-09-17",
  "/insights/chatgpt-ads-search-demand-2026": "2026-09-17",
};

// Insights (talas 6c): samo EN, nema SR par ni hreflang. GET() ispod ove rute
// emituje kao samostalan <url> bez xhtml:link alternates.
const enOnlyRoutes = new Set<string>(["/insights", "/insights/chatgpt-ads-search-demand-2026"]);

// Build blog lastmod map dynamically from posts/index.tsx (single source of truth)
const blogLastmod: Record<string, string> = {};
for (const post of srPosts) {
  blogLastmod[`/blog/${post.slug}`] = post.dateModified || post.date;
}

// Build case study lastmod map (use static dates per slug — case studies don't have
// dateModified field; use the most recent meaningful update we know about)
const caseStudyLastmod: Record<string, string> = {
  "uk-skincare-ecommerce-poas": "2026-09-23",
  "dach-edtech-saas-tracking": "2026-09-23",
  "tech-startup-launch-serbia": "2026-09-23",
  "finance-consulting-audit-serbia": "2026-09-23",
};
for (const cs of caseStudies) {
  if (caseStudyLastmod[cs.slug]) {
    routeLastmod[`/case-studies/${cs.slug}`] = caseStudyLastmod[cs.slug];
  } else {
    routeLastmod[`/case-studies/${cs.slug}`] = "2026-01-26";
  }
}

// Build EN-only blog slugs map (for posts that exist in enPosts but not in slugMap)
const enOnlySlugs = new Set<string>();
const knownEnSlugs = new Set(Object.values(slugMap));
for (const post of enPosts) {
  if (!knownEnSlugs.has(post.slug)) {
    enOnlySlugs.add(post.slug);
  }
}

// Pojedinacne stranice pojmova recnika. Slug je isti na oba jezika, samo se
// segment ispred prevodi (/recnik/cpc -> /glossary/cpc), sto toEnRoute resava.
const glossaryTermLastmod: Record<string, string> = {};
for (const slug of termPageSlugs) {
  glossaryTermLastmod[`/recnik/${slug}`] = "2026-09-12";
}

// All canonical (SR) routes
const routes = [
  ...Object.keys(routeLastmod),
  ...Object.keys(blogLastmod),
  ...Object.keys(glossaryTermLastmod),
];

function getLastmod(route: string): string {
  return (
    blogLastmod[route] ||
    routeLastmod[route] ||
    glossaryTermLastmod[route] ||
    "2026-01-26"
  );
}

/** Translate a canonical (SR) route to the EN equivalent */
function toEnRoute(route: string): string {
  // Direct match in routing pathnames (service pages, about, contact)
  if (enPathMap[route]) return enPathMap[route];

  // Pojmovi recnika: samo segment ispred slug-a je drugaciji
  const termMatch = route.match(/^\/recnik\/(.+)$/);
  if (termMatch) return `/glossary/${termMatch[1]}`;

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
  // Pillar / news posts get higher priority
  if (route.includes("google-shopping-srbija-2026") || route.includes("google-ads-za-ecommerce-srbija-2026") || route.includes("google-shopping-vs-search")) return "0.9";
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
    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>`;

    const srEntry = `
  <url>
    <loc>${srUrl}</loc>${alternates}
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`;

    // EN stranice pojmova recnika su van sitemap-a od 15.9.2026 do checkpointa
    // 12.12. Google na EN strani vec ne indeksira oko polovine URL-ova, a vrednost
    // recnika je u SR trzistu. Stranice i dalje postoje i imaju hreflang.
    if (glossaryTermLastmod[route]) return [srEntry];

    // Insights (talas 6c): samo EN postoji, /sr/insights je 308 redirect na
    // /en/insights (next.config.ts), pa ovde nema SR par i nema hreflang.
    if (enOnlyRoutes.has(route)) {
      return [
        `
  <url>
    <loc>${enUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`
      ];
    }

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
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
}
