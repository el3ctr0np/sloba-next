import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title:
      "Google Search kampanje Srbija | Stručnjak za PPC - Slobodan Jelisavac",
    description:
      "Profesionalne Google Search kampanje za B2B i eCommerce. Keyword strategija, ad copy, bid optimizacija. Besplatna konsultacija."
  };
}

const problems = [
  {
    title: "Pogrešna struktura kampanja",
    description:
      "Sve ključne reči u jednoj ad grupi dovode do niskog Quality Score-a i visokog CPC-a."
  },
  {
    title: "Broad match bez kontrole",
    description:
      "Bez negativne liste trošite budžet na irelevantne pretrage."
  },
  {
    title: "Generic ad copy",
    description:
      "Isti oglas za sve ključne reči znači nizak CTR i slabu relevantnost."
  },
  {
    title: "Set and forget mentalitet",
    description:
      "Kampanja je podešena pre meseci i niko je ne optimizuje."
  }
];

const inclusions = [
  {
    title: "Setup i struktura",
    items: [
      "Keyword istraživanje",
      "Campaign i ad group struktura",
      "Negative keywords",
      "Ad copy pisanje",
      "Extensions setup"
    ]
  },
  {
    title: "Ongoing optimizacija",
    items: [
      "Search terms review",
      "Bid adjustments",
      "Ad copy A/B testiranje",
      "Quality Score optimizacija"
    ]
  },
  {
    title: "Reporting",
    items: [
      "Ključne metrike",
      "Search terms insights",
      "Preporuke za sledeći period"
    ]
  }
];

const campaignTypes = [
  {
    title: "Brand Search",
    description: "Zaštita brenda, jeftin CPC, visok ROAS."
  },
  {
    title: "Generic / Non-Brand Search",
    description: "Akvizicija novih kupaca koji vas još ne poznaju."
  },
  {
    title: "Competitor Search",
    description: "Presretanje kupaca koji razmatraju konkurenciju."
  },
  {
    title: "High-Intent / Bottom Funnel",
    description: "Ključne reči sa jasnom kupovnom namerom."
  }
];

const idealClients = [
  "Ljudi aktivno pretražuju ono što nudite",
  "Imate jasno definisanu ponudu (proizvod/usluga)",
  "Možete pratiti konverzije (online ili offline)",
  "Budžet je minimum EUR 500/mesec za Search"
];

const industries = [
  "B2B usluge i softver",
  "eCommerce (kao komplement Shopping-u)",
  "Lokalne usluge",
  "SaaS proizvodi",
  "Professional services"
];

const faqs = [
  {
    question: "Koliko ključnih reči treba za početak?",
    answer:
      "Kvalitet preko kvantiteta. Počinjemo sa 20-50 pažljivo odabranih reči i širimo na osnovu podataka."
  },
  {
    question: "Koliko traje da se vide rezultati?",
    answer:
      "Prva optimizacija unutar nedelju dana, stabilni rezultati nakon 4-6 nedelja."
  },
  {
    question: "Da li pišete vi ad copy?",
    answer:
      "Da, pisanje oglasa je deo usluge. Fokus na best practices i poruke koje konvertuju."
  },
  {
    question: "Šta je Quality Score i zašto je bitan?",
    answer:
      "Quality Score (1-10) određuje poziciju i CPC. Viši QS znači bolji položaj i nižu cenu."
  },
  {
    question: "Da li mogu da kombinujem Search sa drugim kampanjama?",
    answer:
      "Da, i preporučujem to. Search + Shopping za eCommerce, Search + Remarketing za B2B."
  }
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Slobodan Jelisavac",
  url: "https://www.slobodan-jelisavac.com",
  jobTitle: "Google Ads Strategist"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Početna",
      item: "https://www.slobodan-jelisavac.com"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Usluge",
      item: "https://www.slobodan-jelisavac.com/usluge"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Search kampanje",
      item: "https://www.slobodan-jelisavac.com/usluge/search-kampanje"
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

export default function SearchKampanjePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Dark Hero with Breadcrumb */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 text-sm text-slate-400">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Početna
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/usluge"
                  className="hover:text-white transition-colors"
                >
                  Usluge
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">Search kampanje</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Google Search kampanje - dođite do kupaca kada vas traže
          </h1>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>10+ godina iskustva</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Quality Score optimizacija</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>B2B i eCommerce</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt" variant="secondary">
              Zakažite besplatnu konsultaciju
            </Button>
            <Button href="/usluge/google-ads-upravljanje" variant="primary">
              Google Ads upravljanje
            </Button>
          </div>
        </div>
        </div>
      </section>

      {/* SEO Intro Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            Google Search kampanje su najdirektniji način da dođete do kupaca u
            trenutku kada aktivno traže vaše proizvode ili usluge. Za razliku
            od display ili social oglašavanja, Search oglasi se prikazuju
            ljudima sa jasnom namerom. Sa 10+ godina iskustva u kreiranju i
            optimizaciji Search kampanja, pomažem kompanijama da maksimiziraju
            ROI kroz keyword strategiju, ad copy i bid optimizaciju.
          </p>
        </div>
      </section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Zašto Search kampanje ne ostvaruju puni potencijal
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <Card key={problem.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600">{problem.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Kompletna Search kampanje usluga
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
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

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Tipovi Search kampanja
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaignTypes.map((campaign) => (
            <Card key={campaign.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {campaign.title}
              </h3>
              <p className="text-gray-600">{campaign.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Za koga su Search kampanje
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
              Search kampanje funkcionišu za: {industries.join(", ")}.
            </div>
          </Card>
        </div>
      </Section>

      {/* FAQ Accordion Section */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Često postavljana pitanja
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="bg-white rounded-lg shadow-sm overflow-hidden group"
            >
              <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-heading font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <svg
                  className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Dark CTA Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4 text-white">
            Spremni da dođete do kupaca koji vas traže?
          </h2>
          <p className="text-slate-300 mb-8">
            Zakažite besplatnu konsultaciju i razgovarajmo kako Search kampanje
            mogu doneti kvalitetne leadove i prodaju.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakažite besplatnu konsultaciju
            </Button>
            <Button href="/case-studies" variant="primary">
              Pogledajte rezultate
            </Button>
          </div>
          <div className="text-sm text-slate-400 mt-8 space-y-2">
            <div>
              <Link
                href="/usluge/google-shopping"
                className="underline hover:text-white transition-colors"
              >
                Google Shopping kampanje
              </Link>{" "}
              |{" "}
              <Link
                href="/usluge/remarketing"
                className="underline hover:text-white transition-colors"
              >
                Remarketing
              </Link>
            </div>
            <div>
              <Link
                href="/blog/kljucne-reci-vodic"
                className="underline hover:text-white transition-colors"
              >
                Ključne reči vodič
              </Link>{" "}
              |{" "}
              <Link
                href="/blog/negativne-kljucne-reci"
                className="underline hover:text-white transition-colors"
              >
                Negativne ključne reči
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
