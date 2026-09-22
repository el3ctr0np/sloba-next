import { srPosts, enPosts, type PostData } from "@/app/[locale]/blog/[slug]/posts";

const BASE_URL = "https://www.slobodan-jelisavac.com";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822(dateStr: string): string {
  // Post dates are stored as "YYYY-MM-DD" (no time-of-day) — noon UTC avoids
  // the date shifting to the previous day for readers west of UTC.
  return new Date(`${dateStr}T12:00:00Z`).toUTCString();
}

type FeedLocale = "sr" | "en";

const CHANNEL_META: Record<FeedLocale, { title: string; description: string; language: string }> = {
  sr: {
    title: "Google Ads Blog | Slobodan Jelisavac",
    description:
      "Vodiči, checkliste i beleške iz naloga koje vodim - Google Ads Search, Shopping, Performance Max i ChatGPT Ads.",
    language: "sr",
  },
  en: {
    title: "Google Ads Blog | Slobodan Jelisavac",
    description:
      "Guides, checklists and notes from the accounts I run - Google Ads Search, Shopping, Performance Max and ChatGPT Ads.",
    language: "en",
  },
};

/** Builds the RSS 2.0 XML for one locale's blog posts, newest first. */
export function buildRssFeed(locale: FeedLocale): string {
  const posts: PostData[] = locale === "sr" ? srPosts : enPosts;
  const meta = CHANNEL_META[locale];
  const blogPath = locale === "sr" ? "/sr/blog" : "/en/blog";
  const feedPath = locale === "sr" ? "/sr/rss.xml" : "/en/rss.xml";

  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const items = sorted
    .map((post) => {
      const url = `${BASE_URL}${blogPath}/${post.slug}`;
      // pubDate = original publish date, matching the sort key above. Using
      // dateModified here instead would desync the two: a feed reader that
      // re-sorts items by its own pubDate would then show a different order
      // than this feed's <item> sequence.
      const pubDate = toRfc822(post.date);
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <description>${escapeXml(post.metaDescription)}</description>
    </item>`;
    })
    .join("");

  const lastBuildDate = sorted.length
    ? toRfc822(sorted[0].date)
    : new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(meta.title)}</title>
    <link>${BASE_URL}${blogPath}</link>
    <atom:link href="${BASE_URL}${feedPath}" rel="self" type="application/rss+xml"/>
    <description>${escapeXml(meta.description)}</description>
    <language>${meta.language}</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>${items}
  </channel>
</rss>`;
}

export function rssResponse(locale: FeedLocale): Response {
  return new Response(buildRssFeed(locale), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
