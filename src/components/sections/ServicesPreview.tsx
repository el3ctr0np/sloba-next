"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui";

export function ServicesPreview() {
  const t = useTranslations("ServicesPreview");

  const services = [
    { icon: "🎯", title: t("services.googleAds"), href: "/usluge/google-ads-upravljanje" },
    { icon: "⚡", title: t("services.performanceMax"), href: "/usluge/performance-max" },
    { icon: "🛒", title: t("services.googleShopping"), href: "/usluge/google-shopping" },
    { icon: "📺", title: t("services.youtubeAds"), href: "/usluge/youtube-oglasi" },
    { icon: "🔄", title: t("services.remarketing"), href: "/usluge/remarketing" },
    { icon: "🚀", title: t("services.performanceMarketing"), href: "/usluge/performance-marketing", featured: true },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          {t("heading")}
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {t("description")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <Card className={`text-center h-full ${service.featured ? 'border-primary' : ''}`}>
                <span className="text-3xl mb-3 block">{service.icon}</span>
                <h3 className="font-heading font-semibold">
                  {service.title}
                </h3>
                {service.featured && (
                  <span className="text-xs text-primary mt-2 block">⭐ Premium</span>
                )}
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/usluge" className="text-primary font-semibold hover:underline">
            {t("allServices")}
          </Link>
        </div>
      </div>
    </section>
  );
}
