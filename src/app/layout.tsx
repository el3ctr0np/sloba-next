import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Header, Footer } from "@/components/layout";
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
  description: "Google Ads strategist sa decenijom iskustva. Performance Max, Shopping i Search kampanje. AI-first optimizacije.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
