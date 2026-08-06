import type { Metadata } from "next";
// NOTE: <MetaPixel /> deprecated Apr 16, 2026 — Meta Pixel now managed via
// GTM container GTM-PJ4B5QP (workspace 17, pixel 1794545094595591).
// Old client-side pixel was firing 978584014430413 (wrong account).
// Files src/components/MetaPixel.tsx + src/lib/meta-tracking.ts kept in repo
// for reference / potential CAPI revival, but no longer mounted.
import "./globals.css";

// This root layout is deliberately a pass-through: it renders no <html>/<body>.
//
// It used to call headers() to read the locale for <html lang>. A single
// headers() call in the ROOT layout opts every route in the app into dynamic
// rendering — every page, including blog posts that never change, returned
// `cache-control: private, no-cache, no-store` and missed the CDN on every
// request (measured Aug 6 2026: x-vercel-cache MISS on 100% of pages, compute
// running in iad1 while traffic entered at fra1).
//
// <html>/<body> now live in the layouts that already know their locale:
//   src/app/[locale]/layout.tsx  — the whole public site
//   src/app/not-found.tsx        — global 404 for unmatched URLs
//   src/app/studio/[[...tool]]/layout.tsx — Sanity Studio (already did)
export const metadata: Metadata = {
  title: "Slobodan Jelisavac - Google Ads Strategist",
  description:
    "Google Ads strategist sa decenijom iskustva. Performance Max, Shopping i Search kampanje. AI-first optimizacije.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
