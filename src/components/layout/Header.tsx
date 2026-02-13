"use client";

import { useState, useMemo } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const locale = useLocale();
  const t = useTranslations("Header");
  const rawPathname = usePathname();

  // Strip locale prefix if present to avoid /sr/en issues
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pathname = (rawPathname.replace(/^\/(sr|en)/, "") || "/") as any;

  const navItems = useMemo(() => [
    { label: t("nav.home"), href: "/" as const },
    { label: t("nav.services"), href: "/usluge" as const, hasServiceMenu: true },
    { label: t("nav.caseStudies"), href: "/case-studies" as const },
    { label: t("nav.blog"), href: "/blog" as const },
    { label: t("nav.about"), href: "/o-meni" as const },
    { label: t("nav.contact"), href: "/kontakt" as const },
  ], [t]);

  const serviceGroups = useMemo(() => [
    {
      title: t("serviceGroups.googleAds"),
      items: [
        { label: t("services.googleAdsManagement"), href: "/usluge/google-ads-upravljanje" as const },
        { label: t("services.googleAdsAudit"), href: "/usluge/google-ads-audit" as const },
        { label: t("services.searchCampaigns"), href: "/usluge/search-kampanje" as const },
        { label: t("services.googleShopping"), href: "/usluge/google-shopping" as const },
        { label: t("services.performanceMax"), href: "/usluge/performance-max" as const },
        { label: t("services.remarketing"), href: "/usluge/remarketing" as const },
        { label: t("services.youtubeAds"), href: "/usluge/youtube-oglasi" as const },
      ]
    },
    {
      title: t("serviceGroups.byIndustry"),
      items: [
        { label: t("services.b2b"), href: "/usluge/google-ads-za-b2b" as const },
        { label: t("services.ecommerce"), href: "/usluge/google-ads-za-ecommerce" as const },
        { label: t("services.saas"), href: "/usluge/google-ads-za-saas" as const },
      ]
    },
    {
      title: t("serviceGroups.other"),
      items: [
        { label: t("services.performanceMarketing"), href: "/usluge/performance-marketing" as const },
        { label: t("services.consultations"), href: "/usluge/konsultacije" as const },
        { label: t("services.starterPackage"), href: "/usluge/starter-paket" as const },
      ]
    }
  ], [t]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-900">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link href="/" className="font-heading font-bold text-xl">
            Slobodan Jelisavac
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative pb-2"
                onMouseEnter={() => item.hasServiceMenu && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                  {item.hasServiceMenu && (
                    <span className="ml-1">▼</span>
                  )}
                </Link>

                {/* Services Mega Menu */}
                {item.hasServiceMenu && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white border-2 border-gray-900 rounded-lg shadow-card p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {serviceGroups.map((group) => (
                        <div key={group.title}>
                          <h4 className="font-heading font-semibold text-sm text-gray-500 mb-3 uppercase tracking-wide">
                            {group.title}
                          </h4>
                          <ul className="space-y-2">
                            {group.items.map((service) => (
                              <li key={service.href}>
                                <Link
                                  href={service.href}
                                  className="block text-sm hover:text-primary transition-colors"
                                >
                                  {service.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Link href="/usluge" className="text-primary font-semibold text-sm hover:underline">
                        {t("allServices")}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button + Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-semibold border-2 border-gray-900 rounded-full px-3 py-1">
              <Link
                href={pathname}
                locale="sr"
                className={locale === "sr" ? "text-primary" : "text-gray-600"}
              >
                SR
              </Link>
              <span className="text-gray-400">/</span>
              <Link
                href={pathname}
                locale="en"
                className={locale === "en" ? "text-primary" : "text-gray-600"}
              >
                EN
              </Link>
            </div>
            <Button href="/kontakt" variant="secondary">
              {t("cta")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            {mobileMenuOpen ? (
              <span className="text-2xl">✖</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t-2 border-gray-900 py-4 px-4 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <Link
                  href={item.href}
                  className="font-medium block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.hasServiceMenu && (
                  <div className="pl-4">
                    {serviceGroups.map((group) => (
                      <div key={group.title} className="mb-3">
                        <span className="text-xs text-gray-500 uppercase tracking-wide">{group.title}</span>
                        {group.items.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block py-1.5 text-gray-600 text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4">
              <Button href="/kontakt" variant="secondary" className="w-full text-center">
                {t("cta")}
              </Button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold border-2 border-gray-900 rounded-full px-3 py-2">
              <Link
                href={pathname}
                locale="sr"
                className={locale === "sr" ? "text-primary" : "text-gray-600"}
                onClick={() => setMobileMenuOpen(false)}
              >
                SR
              </Link>
              <span className="text-gray-400">/</span>
              <Link
                href={pathname}
                locale="en"
                className={locale === "en" ? "text-primary" : "text-gray-600"}
                onClick={() => setMobileMenuOpen(false)}
              >
                EN
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}
