import Link from "next/link";
import { inter, fontVariables } from "@/lib/fonts";
import { HeadScripts, GtmNoScript } from "@/components/analytics/HeadScripts";

// Renders its own <html>/<body>: the root layout is a pass-through so that the
// site can be statically rendered. See the note in src/app/layout.tsx.
//
// force-dynamic: without this, `next build` prerenders this page once as
// static HTML (no dynamic segments feed it). Any request for a root-level
// path that isn't a real route or a static asset — e.g. /llms-full.txt,
// /rss.xml, /humans.txt — still has to be served by this page at runtime,
// and Next has to fall back to rendering it dynamically for a URL it never
// saw at build time. That "static at build, dynamic at request" mismatch
// throws ("Page changed from static to dynamic at runtime ... reason:
// headers") and surfaces as a 500 instead of a clean 404 (scan finding H1,
// 22.9.2026) — AI crawlers hit this on almost every first request, since
// /llms-full.txt and /rss.xml are exactly the paths they probe first.
// Forcing this page dynamic up front removes the mismatch.
export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <html lang="sr" className={fontVariables}>
      <head>
        <HeadScripts />
      </head>
      <body className={inter.className}>
        <GtmNoScript />
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
              404
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Stranica nije pronađena
            </h1>
            <p className="text-slate-400 mb-8">
              Stranica koju tražite ne postoji ili je premeštena.
              <br />
              The page you are looking for does not exist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sr"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Početna stranica
              </Link>
              <Link
                href="/en"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:border-white transition-colors"
              >
                Homepage (EN)
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-4 justify-center text-sm text-slate-500">
              <Link href="/sr/usluge" className="hover:text-white transition-colors">
                Usluge
              </Link>
              <Link href="/sr/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <Link
                href="/sr/case-studies"
                className="hover:text-white transition-colors"
              >
                Case Studies
              </Link>
              <Link href="/sr/kontakt" className="hover:text-white transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
