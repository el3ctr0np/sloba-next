import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { LayoutShell } from "@/components/layout";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { EngagementTracker } from "@/components/analytics/EngagementTracker";
import { HeadScripts, GtmNoScript } from "@/components/analytics/HeadScripts";
import { inter, fontVariables } from "@/lib/fonts";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Root cause of scan finding H1 (22.9.2026): `[locale]` is a single dynamic
// segment, so it matches ANY unprefixed root path with one segment —
// /llms-full.txt, /rss2.xml, /humans.txt, /wp-login.php — with "locale" set
// to that literal string. `dynamicParams` defaults to true, so Next tries to
// render this already-fully-static route on demand for a param value outside
// generateStaticParams; that on-demand render (which immediately calls
// notFound() below because the value isn't "sr"/"en") is what throws "Page
// changed from static to dynamic at runtime ... reason: headers" and
// surfaces as a 500 instead of a 404. Setting this to false makes Next 404
// at the router level for any locale value it didn't prebuild, before ever
// entering this component.
export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as (typeof routing.locales)[number];

  if (!routing.locales.includes(typedLocale)) {
    notFound();
  }

  // Opts this subtree into static rendering. Without it next-intl falls back to
  // dynamic rendering for every page that reads a translation.
  setRequestLocale(typedLocale);
  const messages = await getMessages();

  // <html> renders here rather than in the root layout so `lang` comes from the
  // route params instead of headers(). See the note in src/app/layout.tsx.
  return (
    <html lang={typedLocale} className={fontVariables}>
      <head>
        <HeadScripts />
        {/* RSS autodiscovery (scan finding N3, 22.9.2026) — locale-specific
            feed so an SR reader's feed reader doesn't get EN items. */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title={typedLocale === "sr" ? "Google Ads Blog | Slobodan Jelisavac" : "Google Ads Blog | Slobodan Jelisavac (EN)"}
          href={`https://www.slobodan-jelisavac.com/${typedLocale}/rss.xml`}
        />
      </head>
      <body className={inter.className}>
        <GtmNoScript />
        <NextIntlClientProvider locale={typedLocale} messages={messages}>
          <LocalBusinessSchema locale={typedLocale} />
          <EngagementTracker />
          <LayoutShell>{children}</LayoutShell>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
