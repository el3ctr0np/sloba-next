import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { LayoutShell } from "@/components/layout";
import { HrefLang } from "@/components/seo/HrefLang";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
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

  setRequestLocale(typedLocale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={typedLocale} messages={messages}>
      <HrefLang />
      <LocalBusinessSchema locale={typedLocale} />
      <LayoutShell>{children}</LayoutShell>
    </NextIntlClientProvider>
  );
}
