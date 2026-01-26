import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title:
      "Google Shopping kampanje Srbija | eCommerce specijalist - Slobodan Jelisavac",
    description:
      "Specijalizovane Google Shopping kampanje za eCommerce. Feed optimizacija, bid strategije, struktura kampanja. Povecajte ROAS."
  };
}

const challenges = [
  {
    title: "Feed koji nije optimizovan",
    description:
      "Losi naslovi, nepotpuni atributi i pogresne kategorije blokiraju rast."
  },
  {
    title: "Sve u jednoj kampanji",
    description:
      "Bez segmentacije po performansama i profitabilnosti, budzet se trosi bez kontrole."
  },
  {
    title: "Performance Max kao black box",
    description:
      "Bez pravilnog setup-a i pracenja ne znate sta zaista radi."
  },
  {
    title: "Konkurencija vas nadmasuje",
    description:
      "Veci igraci dominiraju aukcijom, a vi nemate strategiju za pametno nadmetanje."
  },
  {
    title: "ROAS pada bez jasnog razloga",
    description:
      "Troskovi rastu, konverzije stagniraju i nema uvida sta treba menjati."
  }
];

const inclusions = [
  {
    title: "Feed management",
    items: [
      "Audit i optimizacija naslova i opisa",
      "Custom labels i feed rules",
      "Ongoing odrzavanje i kontrola kvaliteta"
    ]
  },
  {
    title: "Setup i struktura kampanja",
    items: [
      "Analiza asortimana",
      "Struktura po kategorijama i marzama",
      "Bid strategije po segmentima"
    ]
  },
  {
    title: "Ongoing optimizacija",
    items: [
      "Performance monitoring",
      "Bid adjustments",
      "Analiza search terms",
      "Sezonske prilagodbe"
    ]
  },
  {
    title: "Reporting i analitika",
    items: [
      "Product-level performance",
      "Category analysis",
      "ROAS po segmentima"
    ]
  }
];

const results = [
  {
    title: "Mobelaris - Namestaj",
    items: ["320% poboljsanje ROAS-a", "Feed optimizacija i restruktuiranje kampanja"]
  },
  {
    title: "Fashion Brand - Srbija",
    items: ["Od 2x do 5x ROAS u 90 dana", "Custom labels po sezonama i marzama"]
  }
];

const idealClients = [
  "Imate online prodavnicu sa minimum 50 proizvoda",
  "Trenutni ad spend je minimum EUR 800/mesecno",
  "Imate definisane marze po proizvodima",
  "Zelite da skalirate eCommerce prihode",
  "Spremni ste za dugorocnu saradnju (minimum 3 meseca)"
];

const industries = [
  "Fashion i obuca",
  "Home and Garden",
  "Electronics",
  "Beauty and Personal Care",
  "Sports and Outdoor"
];

const platforms = ["Shopify", "WooCommerce", "Magento", "Custom solutions"];

const faqs = [
  {
    question: "Koja platforma za online prodavnicu je potrebna?",
    answer:
      "Radim sa svim platformama, ukljucujuci Shopify, WooCommerce, Magento i custom resenja. Bitno je da mozete generisati product feed."
  },
  {
    question: "Da li je potreban Google Merchant Center?",
    answer:
      "Da, Merchant Center je obavezan za Shopping kampanje. Ako ga nemate, pomazem sa setup-om."
  },
  {
    question: "Koliko proizvoda je potrebno za Shopping kampanje?",
    answer: "Za ozbiljne rezultate preporucujem minimum 50+ proizvoda."
  },
  {
    question: "Koliko traje da se vide rezultati?",
    answer:
      "Prva poboljsanja su vidljiva nakon 2-3 nedelje. Za stabilne rezultate racunajte na 6-8 nedelja."
  },
  {
    question: "Mogu li kombinovati Shopping i Search kampanje?",
    answer:
      "Da, i preporucujem to. Full-funnel pristup daje najbolje rezultate za eCommerce."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Shopping kampanje",
  description:
    "Specijalizovane Shopping kampanje za eCommerce brendove sa fokusom na ROAS i profitabilan rast.",
  provider: {
    "@type": "Organization",
    name: "Slobodan Jelisavac",
    url: "https://slobodan-jelisavac.com"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function GoogleShoppingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Section background="gray">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Google Shopping kampanje - vasi proizvodi na vrhu Google pretrage
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Google Shopping kampanje su najefikasniji nacin da vasi proizvodi dodju
            pred kupce koji su spremni da kupe. Shopping oglasi prikazuju sliku,
            cenu i naziv proizvoda direktno u rezultatima pretrage, sto daje kupcima
            sve informacije pre klika. Specijalizovan sam za eCommerce oglasavanje
            i pomazem online prodavnicama da maksimiziraju ROAS kroz strateski
            pristup Shopping kampanjama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt" variant="secondary">
              Zakazite besplatnu konsultaciju
            </Button>
            <Button href="/case-studies" variant="primary">
              Pogledajte rezultate
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Izazovi sa kojima se eCommerce brendovi suocavaju
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <Card key={challenge.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {challenge.title}
              </h3>
              <p className="text-gray-600">{challenge.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Kompletna Shopping kampanje usluga
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {inclusions.map((block) => (
            <Card key={block.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-4">
                {block.title}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Standard Shopping vs Performance Max
          </h2>
          <p className="text-gray-600">
            Pre odluke radim audit i analizu vase situacije. Nekim brendovima
            Standard Shopping donosi vise kontrole, dok drugima Performance Max
            daje bolje rezultate. Sve zavisi od kreativa, video materijala i
            strukture asortimana.
          </p>
          <p className="text-gray-600 mt-4">
            Moj pristup je individualan - cilj je ono sto radi za vas konkretan
            biznis.
          </p>
        </div>
        <div className="text-center">
          <Button href="/usluge/performance-max" variant="secondary">
            Vise o Performance Max
          </Button>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Rezultati za eCommerce klijente
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {results.map((result) => (
            <Card key={result.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-4">
                {result.title}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {result.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button href="/case-studies" variant="primary">
            Pogledajte case studies
          </Button>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Idealni klijenti
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-2 text-gray-600">
              {idealClients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-gray-500">
              Posebno dobro radim sa: {industries.join(", ")}.
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Platforme: {platforms.join(", ")}.
            </div>
          </Card>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Cesto postavljana pitanja
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <Card key={faq.question} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Spremni da vasi proizvodi dostignu prave kupce?
          </h2>
          <p className="text-gray-600 mb-8">
            Zakazite besplatnu konsultaciju i saznajte kako Shopping kampanje mogu
            povecati eCommerce prihod.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakazite besplatnu konsultaciju
            </Button>
            <Button href="/cenovnik" variant="primary">
              Pogledajte cenovnik
            </Button>
          </div>
          <div className="text-sm text-gray-500 mt-6">
            <Link href="/usluge/google-ads-za-ecommerce" className="underline">
              Google Ads za eCommerce
            </Link>{" "}
            -{" "}
            <Link href="/usluge/remarketing" className="underline">
              Remarketing
            </Link>{" "}
            -{" "}
            <Link href="/blog/google-shopping-vodic" className="underline">
              Google Shopping vodic
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
