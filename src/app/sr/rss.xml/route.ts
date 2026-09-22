import { rssResponse } from "@/lib/rss";

// Literal top-level segment (sibling of src/app/[locale]), not a page under
// [locale]: the middleware matcher excludes any path with a dot
// (`.*\.\ .*` — see middleware.ts), so /sr/rss.xml never reaches next-intl
// and needs its own physical route to resolve at all (scan finding N3/H1,
// 22.9.2026).
export async function GET() {
  return rssResponse("sr");
}
