import { rssResponse } from "@/lib/rss";

// Unprefixed /rss.xml — the URL AI tools and feed readers try first (scan
// finding H1/N3, 22.9.2026). Serves the EN feed: x-default across the site
// is EN (routing.ts, 15.9.2026 decision), and the foreign market (UK/US) is
// the primary audience for a generic, locale-less URL. SR readers use the
// explicit /sr/rss.xml.
export async function GET() {
  return rssResponse("en");
}
