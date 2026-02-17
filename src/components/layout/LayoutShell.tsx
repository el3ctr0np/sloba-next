"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";

/**
 * LayoutShell - conditionally renders Header/Footer
 * Landing pages under /lp/ routes get a clean layout without navigation
 */
export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname.includes("/lp/");

  if (isLandingPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
