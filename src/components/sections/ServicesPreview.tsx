import Link from "next-intl/link";
import { Card } from "@/components/ui";

const services = [
  { icon: "🎯", title: "Google Ads", href: "/usluge/google-ads-upravljanje" },
  { icon: "⚡", title: "Performance Max", href: "/usluge/performance-max" },
  { icon: "🛒", title: "Google Shopping", href: "/usluge/google-shopping" },
  { icon: "🔍", title: "SEO", href: "/usluge/seo" },
  { icon: "📱", title: "Meta Oglašavanje", href: "/usluge/meta-oglasavanje" },
  { icon: "📺", title: "YouTube Oglasi", href: "/usluge/youtube-oglasi" },
  { icon: "📊", title: "Tracking Setup", href: "/usluge/conversion-tracking" },
  { icon: "🚀", title: "Performance Marketing", href: "/usluge/performance-marketing", featured: true },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Usluge koje Donose Rezultate
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Specijalizovane strategije za svaki aspekt digitalnog oglašavanja.
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
            Sve usluge →
          </Link>
        </div>
      </div>
    </section>
  );
}
