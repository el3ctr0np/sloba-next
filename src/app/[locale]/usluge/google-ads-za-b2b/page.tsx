import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title:
      "Google Ads za B2B kompanije | Lead generation Srbija - Slobodan Jelisavac",
    description:
      "Google Ads strategije za B2B lead generation. Kvalitetni leadovi, CRM integracija, niži CPA. Zakažite konsultaciju."
  };
}

const challenges = [
  {
    title: "Duzi sales cycle",
    description:
      "Od prvog kontakta do zatvaranja posla mogu proci meseci, pa je tesko meriti uspeh kratkorocno."
  },
  {
    title: "Više decision maker-a",
    description:
      "Potrebno je uveriti ceo tim, od end user-a do C-level-a."
  },
  {
    title: "Kvalitet vs kvantitet leadova",
    description:
      "Lako je dobiti mnogo leadova, a tesko one koji postaju stvarni kupci."
  },
  {
    title: "Offline konverzije",
    description:
      "Pravi cloše se desava offline, pa je ključno povezati Google Ads sa CRM podacima."
  },
  {
    title: "Visi CPC",
    description:
      "B2B ključne reči su skupe jer je vrednost konverzije visoka."
  }
];

const idealClients = [
  "Imate definisan sales proces i koristite CRM",
  "Fokusirani ste na lead generation (demo, kontakt forme, pozivi)",
  "Zelite da pratite leadove do clošed deal-a",
  "Budžet za ads je minimum EUR 1,500/mesečno",
  "Prosecna vrednost deal-a je EUR 1,000+"
];

const industries = [
  "SaaS kompanije",
  "Professional services (consulting, agencies)",
  "Tech i IT kompanije",
  "Manufacturing B2B",
  "Education i training kompanije"
];

const results = [
  {
    title: "Tech Company (UK)",
    items: [
      "180% povećanje qualified leads",
      "42% smanjenje CPA",
      "Offline conversion tracking implementacija"
    ]
  },
  {
    title: "SaaS Company (Germany)",
    items: ["Demo request kampanje", "EUR 85 CPA (industry average EUR 150+)"]
  }
];

const faqs = [
  {
    question: "Koji CRM koristite za integraciju?",
    answer:
      "Radim sa HubSpot, Salesforce, Pipedrive i Zoho sistemima. Bitno je da možete pratiti lead stages."
  },
  {
    question: "Koliko traje da se vide rezultati?",
    answer:
      "Prvi leadovi u prve 2 nedelje, a optimizacija ka kvalitetu traje 2-3 meseca uz pracenje full funnel-a."
  },
  {
    question: "Da li je Google Ads bolji od LinkedIn za B2B?",
    answer:
      "Zavisi. Google hvata intent, LinkedIn hvata profile. Najbolje rezultate daje kombinacija."
  },
  {
    question: "Kako znamo da li je lead kvalitetan?",
    answer:
      "Definisemo MQL i SQL kriterijume i postavljamo tracking za downstream metrike."
  },
  {
    question: "Sta ako nemamo puno search volume-a?",
    answer:
      "Za niche B2B kombinujemo exact match sa sirim intent kampanjama i remarketingom."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads za B2B kompanije",
  description:
    "Google Ads strategije za B2B lead generation sa fokusom na kvalitet leadova i CRM integraciju.",
  provider: {
    "@type": "Organižation",
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

export default function GoogleAdsZaB2BPage() {
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
            Google Ads za B2B - kvalitetni leadovi, ne samo klikovi
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Google Ads za B2B zahteva drugačiji pristup od eCommerce oglašavanja.
            Cilj je generisanje kvalitetnih leadova koji prolaze kroz sales proces,
            a ne samo broj prijava. Pomazem da dođete do decision maker-a koji su
            spremni za razgovor i da merite uspeh prema kvalitetu leadova.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt" variant="secondary">
              Zakažite besplatnu konsultaciju
            </Button>
            <Button href="/usluge/search-kampanje" variant="primary">
              Search kampanje
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Izazovi B2B oglašavanja
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
            Za koga je B2B Google Ads usluga
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
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            B2B kampanje rezultati
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
            Više B2B case studies
          </Button>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Često postavljana pitanja
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
            Spremni da generisete kvalitetnije B2B leadove?
          </h2>
          <p className="text-gray-600 mb-8">
            Zakažite besplatnu konsultaciju i razgovarajmo kako Google Ads može
            doprineti vašem B2B pipeline-u.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakažite besplatnu konsultaciju
            </Button>
            <Button href="/usluge/google-ads-upravljanje" variant="primary">
              Google Ads upravljanje
            </Button>
          </div>
          <div className="text-sm text-gray-500 mt-6">
            <Link href="/usluge/remarketing" className="underline">
              Remarketing
            </Link>{" "}
            -{" "}
            <Link href="/usluge/google-ads-za-saas" className="underline">
              Google Ads za SaaS
            </Link>{" "}
            -{" "}
            <Link href="/usluge/search-kampanje" className="underline">
              Search kampanje
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
