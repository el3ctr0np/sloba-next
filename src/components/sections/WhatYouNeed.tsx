import { Card, Button } from "@/components/ui";

interface PackageCard {
  title: string;
  subtitle?: string;
  items?: string[];
  description?: string;
  price?: string;
  ctaText?: string;
  ctaHref?: string;
}

interface WhatYouNeedProps {
  locale: string;
}

export function WhatYouNeed({ locale }: WhatYouNeedProps) {
  const content: { heading: string; cards: PackageCard[] } =
    locale === "en"
      ? {
          heading: "What do you need?",
          cards: [
            {
              title: "Strategy & support",
              subtitle: "You execute, I guide.",
              items: [
                "1-on-1 consulting — $200/hour",
                "Deep Audit + Action Plan — $500 (credited toward first month)",
                "Kickstart project — from $990",
              ],
              ctaText: "View services",
              ctaHref: "/usluge",
            },
            {
              title: "Full project management",
              subtitle: "I personally run your account.",
              ctaText: "Get in touch",
              ctaHref: "/kontakt",
            },
            {
              title: "eCommerce Growth (100% owned)",
              description:
                "For stores spending $10,000+/month on ads. I personally build and run the whole project: campaigns, feed, measurement, scaling.",
              price: "From $2,500/mo.",
            },
            {
              title: "Performance Marketing (omnichannel)",
              description:
                "When you need more than Google Ads: Meta, SEO, CRO, and creative under one strategy — powered by Funky Enterprises.",
              ctaText: "Learn more",
              ctaHref: "/usluge/performance-marketing",
            },
          ],
        }
      : {
          heading: "Šta vam treba?",
          cards: [
            {
              title: "Strategija i podrška",
              subtitle: "Vi izvršavate, ja usmeravam.",
              items: [
                "1-na-1 konsultacije - €150/sat",
                "Deep Audit + Action Plan - od €450",
                "Kickstart projekat - od €690",
              ],
              ctaText: "Pogledajte usluge",
              ctaHref: "/usluge",
            },
            {
              title: "Kompletno vođenje projekta",
              subtitle: "Ja lično vodim vaš nalog.",
              ctaText: "Kontaktirajte me",
              ctaHref: "/kontakt",
            },
            {
              title: "eCommerce Growth (100% owned)",
              description:
                "Za biznise sa budžetom od €1.500+ mesečno. Lično gradim i vodim ceo projekat: kampanje, feed, merenje, skaliranje.",
              price: "Od €700/mes.",
            },
            {
              title: "Performance Marketing (omnichannel)",
              description:
                "Kad vam treba više od Google Ads-a: Meta, SEO, CRO i kreativa pod jednom strategijom - powered by Funky Enterprises.",
              ctaText: "Pogledajte više",
              ctaHref: "/usluge/performance-marketing",
            },
          ],
        };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          {content.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {content.cards.map((card) => (
            <Card key={card.title} className="flex flex-col h-full">
              <h3 className="text-xl font-heading font-semibold mb-1">
                {card.title}
              </h3>
              {card.subtitle && (
                <p className="text-gray-500 mb-4">{card.subtitle}</p>
              )}
              {card.description && (
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {card.description}
                </p>
              )}
              {card.items && (
                <ul className="space-y-2 mb-6">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                      <svg
                        className="w-4 h-4 text-primary mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {card.price && (
                <p className="text-slate-900 font-heading font-semibold mb-6">
                  {card.price}
                </p>
              )}
              {card.ctaText && card.ctaHref && (
                <Button href={card.ctaHref} variant="secondary" className="w-full mt-auto">
                  {card.ctaText}
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
