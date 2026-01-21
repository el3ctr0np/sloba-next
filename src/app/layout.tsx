import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Slobodan Jelisavac - Google Ads Strategist",
  description:
    "Google Ads strategist sa decenijom iskustva. Performance Max, Shopping i Search kampanje. AI-first optimizacije.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = (await headers()).get("x-next-intl-locale") ?? "sr";

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
