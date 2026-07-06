import { Card, Button } from "@/components/ui";

interface WhatYouNeedProps {
  locale: string;
}

export function WhatYouNeed({ locale }: WhatYouNeedProps) {
  const content =
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
              title: "Full campaign management",
              subtitle: "I personally run your account.",
              items: [
                "eCommerce Growth — from $2,500/mo, for brands spending $10k–100k/month (scope and fee scale with spend)",
                "Performance Marketing — full omnichannel team (Google + Meta + SEO + CRO + tracking), for brands investing $20k+/month per channel — Powered by Funky Enterprises",
              ],
              ctaText: "Get in touch",
              ctaHref: "/kontakt",
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
                "1-na-1 konsultacije — €150/sat",
                "Deep Audit + Action Plan — od €450",
                "Kickstart projekat — od €690",
              ],
              ctaText: "Pogledajte usluge",
              ctaHref: "/usluge",
            },
            {
              title: "Kompletno vođenje kampanja",
              subtitle: "Ja lično vodim vaš nalog.",
              items: [
                "eCommerce Growth — od €700/mes (za budžete €1.500+/mes)",
                "Performance Marketing — Powered by Funky Enterprises",
              ],
              ctaText: "Kontaktirajte me",
              ctaHref: "/kontakt",
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
              <p className="text-gray-500 mb-4">{card.subtitle}</p>
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
              <Button href={card.ctaHref} variant="secondary" className="w-full mt-auto">
                {card.ctaText}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
