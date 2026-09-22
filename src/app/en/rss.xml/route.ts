import { rssResponse } from "@/lib/rss";

// Literal top-level segment — see src/app/sr/rss.xml/route.ts for why this
// can't live under [locale].
export async function GET() {
  return rssResponse("en");
}
