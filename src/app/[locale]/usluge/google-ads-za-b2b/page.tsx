import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title:
      "Google Ads za B2B kompanije | Lead generation Srbija - Slobodan Jelisavac",
    description:
      "Google Ads strategije za B2B lead generation. 180% više kvalifikovanih leadova, CRM integracija (HubSpot, Salesforce), niži CPA. Zakažite konsultaciju."
  };
}

const challenges = [
  {
    title: "Duži sales cycle",
    description:
      "Od prvog kontakta do zatvaranja posla mogu proći meseci, pa je teško meriti uspeh kratkoročno."
  },
  {
    title: "Više decision maker-a",
    description:
      "Potrebno je uveriti ceo tim, od end user-a do C-level-a."
  },
  {
    title: "Kvalitet vs kvantitet leadova",
    description:
      "Lako je dobiti mnogo leadova, a teško one koji postaju stvarni kupci."
  },
  {
    title: "Offline konverzije",
    description:
      "Pravi zatvaranje posla se dešava offline, pa je ključno povezati Google Ads sa CRM podacima."
  },
  {
    title: "Viši CPC",
    description:
      "B2B ključne reči su skupe jer je vrednost konverzije visoka."
  }
];

const idealClients = [
  "Imate definisan sales proces i koristite CRM",
  "Fokusirani ste na lead generation (demo, kontakt forme, pozivi)",
  "Želite da pratite leadove do zatvorenog posla",
  "Budžet za ads je minimum EUR 1,500/mesečno",
  "Prosečna vrednost deal-a je EUR 1,000+"
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
      "Prvi leadovi u prve 2 nedelje, a optimizacija ka kvalitetu traje 2-3 meseca uz praćenje full funnel-a."
  },
  {
    question: "Da li je Google Ads bolji od LinkedIn za B2B?",
    answer:
      "Zavisi. Google hvata intent, LinkedIn hvata profile. Najbolje rezultate daje kombinacija."
  },
  {
    question: "Kako znamo da li je lead kvalitetan?",
    answer:
      "Definišemo MQL i SQL kriterijume i postavljamo tracking za downstream metrike."
  },
  {
    question: "Šta ako nemamo puno search volume-a?",
    answer:
      "Za niche B2B kombinujemo exact match sa širim intent kampanjama i remarketingom."
  }
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Slobodan Jelisavac",
  url: "https://www.slobodan-jelisavac.com",
  jobTitle: "Google Ads Strategist"
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads za B2B kompanije",
  description:
    "Google Ads strategije za B2B lead generation sa fokusom na kvalitet leadova i CRM integraciju.",
  provider: {
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle: "Google Ads Strategist",
    knowsAbout: ["Google Ads", "B2B Lead Generation", "CRM Integration", "Performance Marketing"]
  },
  areaServed: [
    { "@type": "Country", name: "Serbia" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Croatia" }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Početna",
      item: "https://www.slobodan-jelisavac.com/sr/"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Usluge",
      item: "https://www.slobodan-jelisavac.com/sr/usluge"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Google Ads za B2B",
      item: "https://www.slobodan-jelisavac.com/sr/usluge/google-ads-za-b2b"
    }
  ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Dark Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Početna</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/usluge" className="hover:text-white transition-colors">Usluge</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-yellow-400 font-medium">Google Ads za B2B</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Google Ads za B2B - kvalitetni leadovi, ne samo klikovi
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Google Ads za B2B zahteva drugačiji pristup od eCommerce oglašavanja.
              Cilj je generisanje kvalitetnih leadova koji prolaze kroz sales proces,
              a ne samo broj prijava. Pomažem da dođete do decision maker-a koji su
              spremni za razgovor i da merite uspeh prema kvalitetu leadova.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <div className="text-yellow-400 font-bold text-2xl mb-1">10+</div>
                <div className="text-sm text-slate-400">godina iskustva</div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <div className="text-yellow-400 font-bold text-2xl mb-1">180%</div>
                <div className="text-sm text-slate-400">više kvalifikovanih leadova</div>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                <div className="text-yellow-400 font-bold text-2xl mb-1">HubSpot</div>
                <div className="text-sm text-slate-400">Salesforce integracija</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                Zakažite besplatnu konsultaciju
              </Button>
              <Button href="/usluge/search-kampanje" variant="primary">
                Search kampanje
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Intro Section */}
      <section className="bg-white border-b border-gray-100 py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            B2B Google Ads kampanje su fundamentalno različite od eCommerce oglašavanja.
            Dok kod eCommerce praćenje ROI-a ide od klika do kupovine, kod B2B lead generation
            pravi posao počinje tek kada lead uđe u CRM. Zato je ključno postaviti praćenje
            koje povezuje Google Ads sa vašim sales pipeline-om - od prvog klika do zatvorenog posla.
          </p>
        </div>
      </section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Izazovi B2B oglašavanja
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            B2B marketing ima specifične izazove koje ne možete rešiti standardnim eCommerce pristupom
          </p>
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Za kogo je B2B Google Ads usluga
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Idealan profil klijenta za B2B Google Ads kampanje
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-3 text-gray-700">
              {idealClients.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-sm text-gray-500 mt-6 pt-6 border-t border-gray-200">
              <strong className="text-gray-700">Posebno dobro radim sa:</strong> {industries.join(", ")}.
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            B2B kampanje rezultati
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Studije slučaja sa pravim klijentima i merljivim rezultatima
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {results.map((result) => (
            <Card key={result.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-4 text-gray-900">
                {result.title}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {result.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">→</span>
                    <span>{item}</span>
                  </li>
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

      {/* FAQ as Accordion */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Često postavljana pitanja
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Odgovori na najčešća pitanja o Google Ads kampanjama za B2B
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="bg-white border-2 border-gray-200 rounded-xl group"
              open={index === 0 ? true : undefined}
            >
              <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
                {faq.question}
                <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
                  &#9660;
                </span>
              </summary>
              <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Dark CTA Section */}
      <section className="bg-slate-900 text-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Spremni da generiš ete kvalitetnije B2B leadove?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
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

          {/* Internal Links Footer */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <p className="text-sm text-slate-400 mb-4">Povezane usluge:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/usluge/remarketing" className="text-yellow-400 hover:text-yellow-300 underline">
                Remarketing
              </Link>
              <span className="text-slate-600">•</span>
              <Link href="/usluge/google-ads-za-saas" className="text-yellow-400 hover:text-yellow-300 underline">
                Google Ads za SaaS
              </Link>
              <span className="text-slate-600">•</span>
              <Link href="/usluge/search-kampanje" className="text-yellow-400 hover:text-yellow-300 underline">
                Search kampanje
              </Link>
              <span className="text-slate-600">•</span>
              <Link href="/blog/ecommerce-vs-b2b" className="text-yellow-400 hover:text-yellow-300 underline">
                eCommerce vs B2B
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
