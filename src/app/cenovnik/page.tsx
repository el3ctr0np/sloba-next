import { Section, Card, Button } from "@/components/ui";

const tiers = [
  {
    name: "Starter",
    price: "€300/mes",
    description: "Za mala preduzeca i nove biznise.",
    features: [
      "Istrazivanje trzista",
      "Setup kampanja",
      "Osnovna optimizacija"
    ]
  },
  {
    name: "Standard",
    price: "Na upit",
    description: "Za etablirane biznise i stabilan rast.",
    features: [
      "Napredna strategija",
      "Kontinuirana optimizacija",
      "Mesecni izvestaji"
    ]
  },
  {
    name: "Premium",
    price: "Na upit",
    description: "Za market lidere i kompleksne naloge.",
    features: [
      "Full-funnel pristup",
      "Prioritetna podrska",
      "Kvartalni strategy review"
    ]
  }
];

const additionalServices = [
  { name: "1:1 Konsultacija", price: "€80/sat" },
  { name: "Google Ads Audit", price: "Besplatno*" },
  { name: "Placeni Audit", price: "TBD" }
];

export default function CenovnikPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Cenovnik
          </h1>
          <p className="text-gray-600">
            Transparentne cene za svaki nivo biznisa i budzeta.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <Card key={tier.name} className="h-full">
              <h2 className="text-2xl font-heading font-bold mb-2">
                {tier.name}
              </h2>
              <p className="text-3xl font-bold text-primary mb-2">
                {tier.price}
              </p>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Button href="/kontakt" variant="secondary" className="w-full">
                Zakazite Konsultaciju
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Dodatne Usluge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <Card key={service.name} className="h-full">
                <h3 className="font-heading font-semibold mb-2">
                  {service.name}
                </h3>
                <p className="text-2xl font-bold text-primary">
                  {service.price}
                </p>
              </Card>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            *Besplatan audit za brendove koji ispunjavaju kriterijume.
          </p>
        </div>
      </Section>

      <Section className="bg-primary text-white text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Spremni da krenemo?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Kontaktirajte me za prilagodjenu ponudu i plan rasta.
        </p>
        <Button
          href="/kontakt"
          className="bg-white text-primary hover:bg-gray-100 border-white"
        >
          Zakazite Konsultaciju
        </Button>
      </Section>
    </>
  );
}
