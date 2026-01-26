import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title: "Google Ads za eCommerce | Online prodavnice - Slobodan Jelisavac",
    description:
      "Google Ads strategije za eCommerce i webshop. Shopping, Performance Max, remarketing. Povecajte ROAS i prihod."
  };
}

const challenges = [
  {
    title: "Feed kvalitet koji koci kampanje",
    description:
      "Losi naslovi, nepotpuni atributi i pogresne kategorije blokiraju vidljivost proizvoda."
  },
  {
    title: "ROAS ne pokriva troskove",
    description:
      "Kampanje donose prodaju, ali marze nisu dovoljne za profitabilnost."
  },
  {
    title: "Performance Max bez uvida",
    description:
      "Bez kontrole ne znate gde ide budzet i sta zapravo donosi rezultate."
  },
  {
    title: "Sezonalnost i inventory",
    description:
      "Kampanje promovisu proizvode kojih nema na stanju ili propustate peak season."
  },
  {
    title: "Konkurencija sa vecim budzetima",
    description:
      "Veliki retaileri dominiraju aukcijom, pa je potrebna pametna strategija."
  }
];

const idealClients = [
  "Minimum 100 proizvoda u ponudi",
  "Ad spend minimum EUR 800/mesecno",
  "Definisane marze po proizvodima ili kategorijama",
  "Funkcionalan tracking (GA4, purchase events)",
  "Spremni ste na minimum 3 meseca saradnje"
];

const industries = [
  "Fashion i apparel",
  "Home and Garden",
  "Electronics and Gadgets",
  "Beauty and Personal Care",
  "Sports and Outdoor",
  "Pet Supplies"
];

const platforms = ["Shopify", "WooCommerce", "Magento", "Custom solutions"];

const results = [
  {
    title: "Fashion Brand (Srbija)",
    items: [
      "Od 2x do 5x ROAS u 90 dana",
      "Feed reoptimizacija i campaign restructuring",
      "EUR 150k+ godisnji prihod iz Google Ads"
    ]
  },
  {
    title: "Home and Garden (Hrvatska)",
    items: [
      "320% poboljsanje ROAS-a",
      "Custom labels po sezonama",
      "PMax i Standard Shopping kombinacija"
    ]
  }
];

const faqs = [
  {
    question: "Koja platforma je najbolja za eCommerce?",
    answer:
      "Radim sa Shopify, WooCommerce i Magento platformama. Bitno je da mozete generisati kvalitetan product feed."
  },
  {
    question: "Sta je dobar ROAS za eCommerce?",
    answer:
      "Zavisi od marzi. Ako je marza 50%, ROAS 3x je break-even. Za profitabilnost treba vise."
  },
  {
    question: "Da li upravljate i feed-om?",
    answer:
      "Da, feed management je deo usluge, ukljucujuci optimizaciju naslova i custom labels."
  },
  {
    question: "Koliko traje da se vide rezultati?",
    answer:
      "Prva poboljsanja za 2-3 nedelje, stabilizacija i ozbiljniji rast za 6-8 nedelja."
  },
  {
    question: "Da li radite i Meta oglase?",
    answer:
      "Fokus je na Google Ads, ali za omnichannel pristup nudim Performance Marketing kroz Funky Enterprises."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads za eCommerce",
  description:
    "Google Ads strategije za eCommerce prodavnice uz Shopping, Performance Max i remarketing kampanje.",
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

export default function GoogleAdsZaEcommercePage() {
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
            Google Ads za eCommerce - maksimizujte prihod vase online prodavnice
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Google Ads za eCommerce je najefikasniji kanal za skaliranje online
            prodavnice. Shopping kampanje prikazuju proizvode direktno u pretrazi,
            dok Performance Max dostize kupce na svim Google platformama. Uz pravo
            podesavanje, kampanje mogu doneti profitabilan rast za fashion, home
            and garden, electronics i druge vertikale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt" variant="secondary">
              Zakazite besplatnu konsultaciju
            </Button>
            <Button href="/usluge/google-shopping" variant="primary">
              Google Shopping kampanje
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Izazovi eCommerce oglasavanja
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
            Za koga je eCommerce Google Ads usluga
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-2 text-gray-600">
              {idealClients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="text-sm text-gray-500 mt-6">
              Posebno dobro radim sa: {industries.join(", ")}.
            </div>
            <div className="text-sm text-gray-500 mt-2">
              Platforme: {platforms.join(", ")}.
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            eCommerce rezultati
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
            Svi eCommerce case studies
          </Button>
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
            Spremni da skalirate vasu online prodavnicu?
          </h2>
          <p className="text-gray-600 mb-8">
            Zakazite besplatnu konsultaciju i razgovarajmo kako Google Ads moze
            povecati prihod vase eCommerce prodavnice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakazite besplatnu konsultaciju
            </Button>
            <Button href="/usluge/performance-marketing" variant="primary">
              Performance Marketing
            </Button>
          </div>
          <div className="text-sm text-gray-500 mt-6">
            <Link href="/usluge/performance-max" className="underline">
              Performance Max
            </Link>{" "}
            -{" "}
            <Link href="/usluge/remarketing" className="underline">
              Remarketing
            </Link>{" "}
            -{" "}
            <Link href="/usluge/google-shopping" className="underline">
              Google Shopping kampanje
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
