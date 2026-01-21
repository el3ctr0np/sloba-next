import type { Metadata } from "next";
import Link from "next-intl/link";
import { Section, Card } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title: "Usluge | Slobodan Jelisavac",
    description:
      "Specijalizovane strategije za Google Ads, SEO i performance marketing."
  };
}

const services = [
  { title: "Google Ads Upravljanje", href: "/usluge/google-ads-upravljanje", desc: "Kompletno upravljanje kampanjama" },
  { title: "Performance Max", href: "/usluge/performance-max", desc: "AI-powered kampanje" },
  { title: "Google Shopping", href: "/usluge/google-shopping", desc: "eCommerce optimizacija" },
  { title: "SEO", href: "/usluge/seo", desc: "Organski rast" },
  { title: "Meta Oglašavanje", href: "/usluge/meta-oglasavanje", desc: "Facebook & Instagram" },
  { title: "YouTube Oglasi", href: "/usluge/youtube-oglasi", desc: "Video marketing" },
];

export default function ServicesPage() {
  return (
    <Section>
      <h1 className="text-4xl font-heading font-bold mb-4 text-center">Usluge</h1>
      <p className="text-gray-600 text-center mb-12">Specijalizovane strategije za digitalno oglašavanje</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Link key={s.href} href={s.href}>
            <Card className="h-full"><h3 className="font-heading font-bold text-xl mb-2">{s.title}</h3><p className="text-gray-600">{s.desc}</p></Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
