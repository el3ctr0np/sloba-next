import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Header, Footer } from "@/components/layout";
import { HrefLang } from "@/components/seo/HrefLang";
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

  const messages = await getMessages({ locale: typedLocale });

  return (
    <NextIntlClientProvider messages={messages}>
      <HrefLang />
      <Header />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
