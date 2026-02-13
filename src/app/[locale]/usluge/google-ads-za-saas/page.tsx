import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title: "Google Ads za SaaS | Customer acquisition - Slobodan Jelisavac",
    description:
      "Smanjite CAC i skalirajte SaaS acquisition kroz Google Ads. Fokus na trial-to-paid konverzije i metrike koje donose rast. 10+ godina iskustva sa B2B SaaS kompanijama."
  };
}

const challenges = [
  {
    title: "Visok CAC",
    description:
      "Plaćate previše po trial signup-u, a mali procenat postaje paying."
  },
  {
    title: "Optimizacija ka pogrešnim metrikama",
    description:
      "Broj signups-a ne znači kvalitet. Potreban je fokus na trial-to-paid."
  },
  {
    title: "Competitor bidding war",
    description:
      "Svi targetiraju iste high-intent reči, pa CPC postaje previsok."
  },
  {
    title: "Attribution kompleksnost",
    description:
      "B2B SaaS ima dug sales cycle, pa konverzije dolaze mesecima nakon klika."
  }
];

const idealClients = [
  "Imate product-market fit (ljudi plaćaju i ostaju)",
  "MRR minimum EUR 10k+ ili ARR EUR 120k+",
  "Možete pratiti downstream konverzije (trial-to-paid)",
  "Budžet za paid acquisition minimum EUR 2,000/mesečno"
];

const industries = [
  "B2B SaaS",
  "Productivity tools",
  "Marketing i Sales software",
  "HR tech",
  "Project management",
  "Developer tools"
];

const results = [
  {
    title: "B2B SaaS (Germany)",
    items: [
      "Demo request kampanje",
      "EUR 85 CPA (industry benchmark EUR 150+)",
      "35% reduction u CAC nakon 6 meseci"
    ]
  },
  {
    title: "HR Tech Startup",
    items: [
      "Sa EUR 200 CAC na EUR 95 CAC",
      "180% povećanje qualified demo zahteva"
    ]
  }
];

const faqs = [
  {
    question: "Kada je pravo vreme za SaaS da krene sa Google Ads?",
    answer:
      "Kada imate product-market fit i možete trackati full funnel. Retention preko 80% nakon 3 meseca je dobar signal."
  },
  {
    question: "Koliko traje da se vidi ROI?",
    answer:
      "High-intent search daje prve rezultate u 2-4 nedelje, dok full CAC optimizacija traje 2-3 meseca."
  },
  {
    question: "Da li radite i sa freemium modelima?",
    answer:
      "Da, ali fokus je na activated users i eventual conversion, ne samo na signups."
  },
  {
    question: "Kako se nosite sa visokim CPC-om?",
    answer:
      "Kombinujem quality score optimizaciju, long-tail keywords, competitor targeting i remarketing za niži blended CAC."
  },
  {
    question: "Šta je idealan budžet za početak?",
    answer:
      "Minimum EUR 2,000 mesečno za testiranje i optimizaciju. To omogućava dovoljno podataka za donošenje odluka o skaliranju."
  },
  {
    question: "Kako merite uspeh kampanja?",
    answer:
      "Fokusiram se na metrikama koje su zaista bitne: CAC, trial-to-paid conversion rate, CAC payback period i customer LTV. Broj signups-a je samo vanity metrika."
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
  name: "Google Ads za SaaS",
  description:
    "Google Ads strategije za SaaS kompanije fokusirane na trial-to-paid i smanjenje CAC-a.",
  provider: {
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle: "Google Ads Strategist",
    knowsAbout: [
      "Google Ads",
      "SaaS Customer Acquisition",
      "B2B Marketing",
      "Performance Marketing"
    ]
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
      name: "Google Ads za SaaS",
      item: "https://www.slobodan-jelisavac.com/usluge/google-ads-za-saas"
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

export default function GoogleAdsZaSaasPage() {
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
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Početna
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/usluge"
                  className="hover:text-white transition-colors"
                >
                  Usluge
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-yellow-400 font-medium">
                Google Ads za SaaS
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Google Ads za SaaS - smanjite CAC i skalirajte acquisition
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Google Ads za SaaS kompanije zahteva pristup koji razume SaaS
              economics. Cilj nije samo dovesti korisnike, već dovesti one koji
              postaju paying customers sa visokim LTV-om. Fokus je na metrikama
              koje su zaista bitne: trial-to-paid conversion, CAC payback i
              customer quality.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800 px-4 py-3 rounded-lg border border-slate-700">
                <div className="text-yellow-400 font-semibold text-sm">
                  10+ godina iskustva
                </div>
                <div className="text-slate-400 text-xs mt-1">
                  Google Ads specijalizacija
                </div>
              </div>
              <div className="bg-slate-800 px-4 py-3 rounded-lg border border-slate-700">
                <div className="text-yellow-400 font-semibold text-sm">
                  −35% smanjenje CAC-a
                </div>
                <div className="text-slate-400 text-xs mt-1">
                  Prosečan rezultat u 6 meseci
                </div>
              </div>
              <div className="bg-slate-800 px-4 py-3 rounded-lg border border-slate-700">
                <div className="text-yellow-400 font-semibold text-sm">
                  B2B SaaS specijalizacija
                </div>
                <div className="text-slate-400 text-xs mt-1">
                  Od HR tech do Dev tools
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                Zakažite besplatnu konsultaciju
              </Button>
              <Button href="/usluge/google-ads-za-b2b" variant="primary">
                Google Ads za B2B
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Intro Section */}
      <section className="bg-white border-b border-gray-100 py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              SaaS kompanije imaju jedinstvene izazove kada je u pitanju paid
              acquisition. Za razliku od tradicionalnog eCommerce-a gde se
              konverzija dešava odmah, B2B SaaS ima dug sales cycle, besplatne
              trial periode i kompleksne decision-making procese. Google Ads
              strategija mora biti prilagođena ovim realnostima.
            </p>
            <p>
              Moj pristup fokusira se na downstream metrike - ne samo koliko
              trial signups imate, već koliko njih postaje paying customers sa
              dobrim retention-om. To znači integraciju Google Ads podataka sa
              vašim CRM-om, praćenje trial-to-paid conversion rate-a po
              kampanjama i optimizaciju ka CAC-u koji ima smisla za vaš LTV.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            SaaS acquisition izazovi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            B2B SaaS kompanije se susreću sa specifičnim izazovima koje
            tradicionalne Google Ads strategije ne rešavaju.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Ideal Clients Section */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Za kogo je SaaS Google Ads usluga
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ova usluga nije za sve. Najbolje funkcioniše sa SaaS kompanijama
            koje već imaju osnovu i spremne su da skaliraju.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-3 text-gray-700">
              {idealClients.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-yellow-600 mt-1 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-sm text-gray-500 mt-6 pt-6 border-t border-gray-200">
              <strong>Posebno dobro radim sa:</strong> {industries.join(", ")}.
            </div>
            <div className="text-sm text-gray-500 mt-3 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <strong>Napomena:</strong> Za very early stage startup-e koji još
              testiraju PMF, Google Ads možda nije pravi kanal. Prvo validujte
              product-market fit, pa onda krećite sa paid acquisition.
            </div>
          </Card>
        </div>
      </Section>

      {/* Results Section */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            SaaS kampanje rezultati
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Primeri rezultata koje sam postigao sa B2B SaaS kompanijama kroz
            fokusiranu Google Ads optimizaciju.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {results.map((result) => (
            <Card key={result.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-4 text-yellow-700">
                {result.title}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {result.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1 flex-shrink-0">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button href="/case-studies" variant="primary">
            Svi SaaS case studies
          </Button>
        </div>
      </Section>

      {/* FAQ Section - Accordion Style */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Često postavljana pitanja
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Odgovori na najčešća pitanja o Google Ads strategijama za SaaS
            kompanije.
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
            Spremni da optimizujete SaaS acquisition?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Zakažite besplatnu konsultaciju i razgovarajmo kako Google Ads može
            smanjiti CAC i skalirati growth za vaš SaaS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="/kontakt" variant="secondary">
              Zakažite besplatnu konsultaciju
            </Button>
            <Button href="/usluge/search-kampanje" variant="primary">
              Search kampanje
            </Button>
          </div>
          <div className="text-sm text-slate-400 space-x-4">
            <Link
              href="/usluge/remarketing"
              className="hover:text-yellow-400 transition-colors underline"
            >
              Remarketing
            </Link>
            <span className="text-slate-600">·</span>
            <Link
              href="/usluge/google-ads-za-b2b"
              className="hover:text-yellow-400 transition-colors underline"
            >
              Google Ads za B2B
            </Link>
            <span className="text-slate-600">·</span>
            <Link
              href="/usluge/search-kampanje"
              className="hover:text-yellow-400 transition-colors underline"
            >
              Search kampanje
            </Link>
            <span className="text-slate-600">·</span>
            <Link
              href="/case-studies"
              className="hover:text-yellow-400 transition-colors underline"
            >
              Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
