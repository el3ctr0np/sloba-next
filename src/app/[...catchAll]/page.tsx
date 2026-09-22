import { notFound } from "next/navigation";

// Root-level catch-all for any path that isn't a real route or literal file
// and has no [locale] prefix — e.g. /llms-full.txt, /rss2.xml, /humans.txt,
// /wp-login.php. Before this existed, such a request had NO matching segment
// anywhere in the app tree, so Next fell back to its implicit global 404
// path, which in production throws "Page changed from static to dynamic at
// runtime ... reason: headers" and surfaces as a 500 (scan finding H1,
// 22.9.2026) — AI crawlers hit this almost immediately, since /llms-full.txt
// and /rss.xml are exactly what they probe first.
//
// A prefixed 404 (e.g. /sr/foo.txt) never had this problem: it already
// matches the real, statically-known [locale] segment one level up, so it
// gets a normal notFound() instead of the implicit fallback. This route
// gives unprefixed paths that same "real route" treatment: it's matched
// explicitly (see next.js route priority: literal > dynamic > catch-all, so
// every actual page/file route still wins), and calling notFound() from
// inside a matched route is the well-supported path — no static/dynamic
// mismatch.
export default function CatchAll(): never {
  notFound();
}
