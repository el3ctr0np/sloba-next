"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyTopBanner } from "../blog/StickyTopBanner";

/**
 * LayoutShell - conditionally renders Header/Footer
 * Landing pages under /lp/ routes get a clean layout without navigation
 * Sticky top banner only on blog post pages (not homepage/services)
 */
export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname.includes("/lp/");
  const isPortal = pathname.includes("/portal");
  const isClientReport = pathname.includes("/klijenti");
  const locale = pathname.startsWith("/en") ? "en" : "sr";
  const isBlogPost = /\/(sr|en)\/blog\/.+/.test(pathname);

  if (isLandingPage || isPortal || isClientReport) {
    return <>{children}</>;
  }

  return (
    <>
      {isBlogPost && <StickyTopBanner locale={locale} />}
      <div className={isBlogPost ? "mt-[42px]" : ""}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
