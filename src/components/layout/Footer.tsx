"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";

const trustLogos = [
  { src: "/client-logos/designerglasses-uk-logo.svg.webp", alt: "DesignerGlasses UK" },
  { src: "/client-logos/pickbox-hrvatska-logo.svg.webp", alt: "Pickbox" },
  { src: "/client-logos/everfun.hr-logo74.webp", alt: "Everfun" },
  { src: "/client-logos/bestatprinting.co.uk-logo9.webp", alt: "Best at Printing" },
  { src: "/client-logos/perun-moto-oprema-logo.svg.webp", alt: "Perun Moto Oprema" },
];

export function Footer() {
  const t = useTranslations("Footer");

  const footerLinks = {
    usluge: [
      { label: t("services.googleAdsManagement"), href: "/usluge/google-ads-upravljanje" as const },
      { label: t("services.starterPackage"), href: "/usluge/starter-paket" as const },
      { label: t("services.consultations"), href: "/usluge/konsultacije" as const },
      { label: t("services.googleAdsAudit"), href: "/usluge/google-ads-audit" as const },
      { label: t("services.googleShopping"), href: "/usluge/google-shopping" as const },
      { label: t("services.performanceMax"), href: "/usluge/performance-max" as const },
      { label: t("services.searchCampaigns"), href: "/usluge/search-kampanje" as const },
      { label: t("services.remarketing"), href: "/usluge/remarketing" as const },
      { label: t("services.youtubeAds"), href: "/usluge/youtube-oglasi" as const },
      { label: t("services.performanceMarketing"), href: "/usluge/performance-marketing" as const },
      { label: t("services.chatgptAds"), href: "/usluge/chatgpt-ads" as const }
    ],
    industrije: [
      { label: t("industries.ecommerce"), href: "/usluge/google-ads-za-ecommerce" as const },
      { label: t("industries.b2b"), href: "/usluge/google-ads-za-b2b" as const },
      { label: t("industries.saas"), href: "/usluge/google-ads-za-saas" as const }
    ],
    resursi: [
      { label: t("resources.blog"), href: "/blog" as const },
      { label: t("resources.caseStudies"), href: "/case-studies" as const },
      { label: t("resources.glossary"), href: "/recnik" as const },
      { label: t("resources.profitLeakCheck"), href: "/profit-provera" as const },
      { label: t("resources.methodology"), href: "/metodologija" as const },
      { label: t("resources.about"), href: "/o-meni" as const },
      { label: t("resources.contact"), href: "/kontakt" as const }
    ]
  };

  return (
    <footer className="bg-slate-900 text-white">
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
            <div className="flex flex-col items-center md:items-end gap-2">
              <Button href="/kontakt" variant="secondary">
                {t("cta")}
              </Button>
              <p className="text-sm text-white/60">
                {t("ctaMicroTrust")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Trust Row */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8">
            <p className="text-xs uppercase tracking-wide text-gray-500 whitespace-nowrap">
              {t("trustLine")}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3">
              {trustLogos.map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={32}
                  loading="lazy"
                  className="h-6 md:h-8 w-auto object-contain grayscale opacity-60"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-heading font-bold text-xl mb-4">
              Digital Jelisavac
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {t("brandDescription")}
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <a
                  href="mailto:info@slobodan-jelisavac.com"
                  className="hover:text-white transition-colors"
                  onClick={() => {
                    // GTM contact_email micro conversion (CE - contact_email trigger)
                    if (typeof window !== "undefined") {
                      const w = window as Window & {
                        dataLayer?: Array<Record<string, unknown>>;
                      };
                      w.dataLayer = w.dataLayer || [];
                      w.dataLayer.push({
                        event: "contact_email",
                        contact_method: "footer_email",
                      });
                    }
                  }}
                >
                  info@slobodan-jelisavac.com
                </a>
              </p>
              <p>{t("location")}</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/slobodanjelisavac/"
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

            {/* Mini-CTA — Google Ads insights */}
            <div className="mt-6 pt-4 border-t border-gray-800">
              <h4 className="font-heading font-semibold text-sm text-gray-300 mb-2">
                {t("insights.heading")}
              </h4>
              <p className="text-gray-500 text-xs mb-3">
                {t("insights.description")}
              </p>
              <div className="flex flex-col gap-1.5">
                <Link
                  href="/blog"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t("insights.blogLink")}
                </Link>
                <a
                  href="https://www.linkedin.com/in/slobodanjelisavac/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {t("insights.linkedinLink")}
                </a>
              </div>
            </div>
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
            <Link
              href="/privatnost"
              className="hover:text-white transition-colors"
            >
              {t("privacyPolicy")}
            </Link>
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
