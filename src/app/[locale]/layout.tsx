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
        <link rel="preload" href="/hero.webp" as="image" type="image/webp" />
        <HeadScripts />
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
