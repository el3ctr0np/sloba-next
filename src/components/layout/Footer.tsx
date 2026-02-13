"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";

export function Footer() {
  const t = useTranslations("Footer");

  const footerLinks = {
    usluge: [
      { label: t("services.googleAdsManagement"), href: "/usluge/google-ads-upravljanje" as const },
      { label: t("services.googleAdsAudit"), href: "/usluge/google-ads-audit" as const },
      { label: t("services.googleShopping"), href: "/usluge/google-shopping" as const },
      { label: t("services.performanceMax"), href: "/usluge/performance-max" as const },
      { label: t("services.searchCampaigns"), href: "/usluge/search-kampanje" as const },
      { label: t("services.remarketing"), href: "/usluge/remarketing" as const },
      { label: t("services.youtubeAds"), href: "/usluge/youtube-oglasi" as const },
      { label: t("services.performanceMarketing"), href: "/usluge/performance-marketing" as const }
    ],
    industrije: [
      { label: t("industries.ecommerce"), href: "/usluge/google-ads-za-ecommerce" as const },
      { label: t("industries.b2b"), href: "/usluge/google-ads-za-b2b" as const },
      { label: t("industries.saas"), href: "/usluge/google-ads-za-saas" as const },
      { label: t("industries.starterPackage"), href: "/usluge/starter-paket" as const },
      { label: t("industries.consultations"), href: "/usluge/konsultacije" as const }
    ],
    resursi: [
      { label: t("resources.blog"), href: "/blog" as const },
      { label: t("resources.caseStudies"), href: "/case-studies" as const },
      { label: t("resources.about"), href: "/o-meni" as const },
      { label: t("resources.contact"), href: "/kontakt" as const }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Footer CTA */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">
                {t("ctaHeading")}
              </h3>
              <p className="text-gray-400">
                {t("ctaDescription")}
              </p>
            </div>
            <Button href="/kontakt" variant="secondary">
              {t("cta")}
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-heading font-bold text-xl mb-4">
              Slobodan Jelisavac
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {t("brandDescription")}
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <a
                  href="mailto:info@slobodan-jelisavac.com"
                  className="hover:text-white transition-colors"
                >
                  info@slobodan-jelisavac.com
                </a>
              </p>
              <p>{t("location")}</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/slobodan-jelisavac/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Usluge */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wide text-gray-300">
              {t("sectionServices")}
            </h4>
            <ul className="space-y-2">
              {footerLinks.usluge.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industrije + Paketi */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wide text-gray-300">
              {t("sectionIndustries")}
            </h4>
            <ul className="space-y-2">
              {footerLinks.industrije.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resursi */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wide text-gray-300">
              {t("sectionResources")}
            </h4>
            <ul className="space-y-2">
              {footerLinks.resursi.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
            <p>
              {t("copyright")}
            </p>
            <p className="md:flex-1 md:text-center">
              {t("partner")}{" "}
              <a
                href="https://funky.enterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Funky Enterprises
              </a>
            </p>
            <p>
              {t("designCredit")}{" "}
              <a
                href="https://www.asarum-tech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Asarum Tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
