import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui";
import {
  Target,
  ShoppingCart,
  ClipboardCheck,
  UserCheck,
  Sparkles,
} from "lucide-react";

const iconProps = { size: 28, strokeWidth: 1.5 } as const;

/**
 * Pet usluga, koliko ih je i ostalo posle konsolidacije 12.9.2026
 * (Q4_SAJT_SPEC.md, talas 4). Ranije je ovde stajalo sest kartica, od kojih je
 * pet vodilo na stranice tipova kampanja (Performance Max, Shopping, YouTube,
 * remarketing, performance marketing). To su tipovi kampanja, ne usluge.
 */
export function ServicesPreview() {
  const t = useTranslations("ServicesPreview");

  const services: {
    icon: ReactNode;
    title: string;
    href:
      | "/usluge/google-ads-upravljanje"
      | "/usluge/google-ads-za-ecommerce"
      | "/usluge/google-ads-audit"
      | "/usluge/konsultacije"
      | "/usluge/chatgpt-ads";
  }[] = [
    { icon: <Target {...iconProps} />, title: t("services.googleAds"), href: "/usluge/google-ads-upravljanje" },
    { icon: <ShoppingCart {...iconProps} />, title: t("services.ecommerce"), href: "/usluge/google-ads-za-ecommerce" },
    { icon: <ClipboardCheck {...iconProps} />, title: t("services.audit"), href: "/usluge/google-ads-audit" },
    { icon: <UserCheck {...iconProps} />, title: t("services.consultations"), href: "/usluge/konsultacije" },
    { icon: <Sparkles {...iconProps} />, title: t("services.aiAds"), href: "/usluge/chatgpt-ads" },
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <Card className="text-center h-full">
                <span className="mb-3 block">{service.icon}</span>
                <h3 className="font-heading font-semibold">{service.title}</h3>
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
