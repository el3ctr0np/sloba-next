import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title: "Google oglašavanje Srbija | Upravljanje nalogom - Slobodan Jelisavac",
    description:
      "Profesionalno upravljanje Google oglašavanjem za eCommerce i B2B. 10+ godina iskustva, UK Search Awards. Besplatna konsultacija."
  };
}

const problems = [
  {
    title: "Bacanje novca bez rezultata",
    description:
      "Kampanje troše budžet, ali konverzije izostaju ili su preskupe."
  },
  {
    title: "Nedostatak vremena i ekspertize",
    description:
      "Google Ads zahteva stalno pracenje, a vi imate biznis koji vodite."
  },
  {
    title: "Prethodna losa iskustva",
    description:
      "Agencije su samo podešavale kampanje bez stvarne strategije."
  },
  {
    title: "Rast je stao",
    description:
      "Kampanje rade solidno, ali ne znate kako da ih skalirate."
  }
];

const solutions = [
  {
    title: "Dubinska analiza pre početka",
    description:
      "Razumevanje biznis modela, marži, idealnih kupaca i konkurencije."
  },
  {
    title: "Customizovana struktura kampanja",
    description:
      "Struktura prilagođena vašim ciljevima, bilo da je fokus na ROAS ili lead quality."
  },
  {
    title: "Proaktivna optimizacija",
    description:
      "Pratim signale i reagujem pre nego sto uticu na performanse."
  },
  {
    title: "Transparentan reporting",
    description:
      "Tacno znate gde ide svaki EUR i sta dobijate zauzvrat."
  }
];

const inclusions = [
  {
    title: "Strategija i planiranje",
    items: [
      "Definisanje ciljeva i KPI-a",
      "Istraživanje ključnih reči i konkurencije",
      "Kreiranje strukture kampanja",
      "Planiranje budžeta po kampanjama"
    ]
  },
  {
    title: "Setup i implementacija",
    items: [
      "Kreiranje ili restruktuiranje kampanja",
      "Pisanje oglasa (responsive search i display ads)",
      "Podešavanje bid strategija",
      "Audience targeting i remarketing liste"
    ]
  },
  {
    title: "Optimizacija kampanja",
    items: [
      "Dnevno pracenje performansi",
      "A/B testiranje oglasa",
      "Bid adjustments",
      "Negativne ključne reči",
      "Placement exclusions"
    ]
  },
  {
    title: "Tracking i analitika",
    items: [
      "Google Analytics 4 integracija",
      "Conversion tracking podešavanje",
      "Custom reporting dashboards",
      "Attribution modeling"
    ]
  },
  {
    title: "Mesečni reporting",
    items: [
      "Pregled ključnih metrika",
      "Analiza trendova",
      "Sprovedene akcije",
      "Preporuke za sledeci period"
    ]
  }
];

const campaignTypes = [
  {
    title: "Search kampanje",
    description:
      "Direktno targetiranje korisnika koji aktivno traže vaše proizvode ili usluge.",
    href: "/usluge/search-kampanje",
    cta: "Više o Search kampanjama"
  },
  {
    title: "Shopping kampanje",
    description:
      "Optimizacija feed-a, struktura kampanja i bid strategije za maksimalan ROAS.",
    href: "/usluge/google-shopping",
    cta: "Više o Shopping kampanjama"
  },
  {
    title: "Performance Max",
    description:
      "Strateški PMax uz kontrolu, jasne signale i transparentne rezultate.",
    href: "/usluge/performance-max",
    cta: "Više o Performance Max"
  },
  {
    title: "Display i remarketing",
    description:
      "Precizno targetiranje za povratak posetilaca i rast brand awareness-a.",
    href: "/usluge/remarketing",
    cta: "Više o remarketingu"
  },
  {
    title: "YouTube oglasi",
    description:
      "Video oglašavanje za awareness i direct response kroz skippable i bumper formate.",
    href: "/usluge/youtube-oglasi",
    cta: "Više o YouTube oglasima"
  }
];

const processSteps = [
  {
    title: "Besplatna konsultacija",
    description:
      "30-minutni poziv o ciljevima, trenutnom stanju kampanja i izazovima."
  },
  {
    title: "Audit i strategija",
    description:
      "Analiza postojećeg naloga i izrada strategije sa projekcijama."
  },
  {
    title: "Onboarding",
    description:
      "Setup pristupa, definisanje komunikacije i dogovor oko reportinga."
  },
  {
    title: "Implementacija",
    description:
      "Restruktuiranje ili kreiranje kampanja prema dogovorenoj strategiji."
  },
  {
    title: "Optimizacija i skaliranje",
    description:
      "Kontinuirano poboljšanje performansi i skaliranje pobednickih kampanja."
  }
];

const results = [
  { value: "180%+", label: "prosečno poboljšanje ROAS-a u prvih 90 dana" },
  { value: "-35%", label: "smanjenje CPA kroz kontinuiranu optimizaciju" },
  { value: "EUR 2M+", label: "upravljanog ad spend-a godišnje" }
];

const faqs = [
  {
    question: "Koliko vremena treba da se vide rezultati?",
    answer:
      "Prve optimizacije rade se odmah, a znacajna poboljšanja dolaze nakon 4-6 nedelja. Za punu optimizaciju racunajte 2-3 meseca."
  },
  {
    question: "Da li morate imati pristup mom Google Ads nalogu?",
    answer:
      "Da, potreban je admin pristup kako bih mogao da sprovodim sve neophodne izmene."
  },
  {
    question: "Sta ako ve? imam kampanje koje rade?",
    answer:
      "Počinjem auditom postojećeg stanja i identifikujem prilike za poboljšanje pre većih promena."
  },
  {
    question: "Da li radite i sa malim budžetima?",
    answer:
      "Za budžete ispod EUR 800/mesečno preporučujem Starter paket ili 1-na-1 konsultacije."
  },
  {
    question: "Koliko Često cemo komunicirati?",
    answer:
      "Minimum jedan mesečni call plus pisani report. Za hitna pitanja dostupan sam putem Slack-a ili email-a."
  },
  {
    question: "Koja je minimalna dužina saradnje?",
    answer:
      "Preporucujem minimum 3 meseca za testiranje i optimizaciju, bez dugoročnih ugovora."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google oglašavanje - upravljanje nalogom",
  description:
    "Profesionalno upravljanje Google oglašavanjem za eCommerce i B2B kompanije.",
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

export default function GoogleAdsUpravljanjePage() {
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
            Google oglašavanje - kampanje koje donose rezultate
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Potrebno vam je profesionalno Google oglašavanje koje donosi rezultate?
            Sa preko 10 godina iskustva u vodjenju kampanja za eCommerce, B2B i SaaS
            kompanije širom Evrope, preuzimam kompletan menadžment vašeg Google Ads
            naloga - od strategije do svakodnevne optimizacije. Fokus je na podacima,
            transparentnosti i kontinuiranom poboljšanju performansi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt" variant="secondary">
              Zakažite besplatnu konsultaciju
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
            Da li prepoznajete ove izazove?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Većina kompanija koje dolaze do mene ima slicne probleme sa kampanjama.
          </p>
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

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Sta dobijate sa mojim upravljanjem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strategijski pristup, a ne samo podešavanja u nalogu.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution) => (
            <Card key={solution.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-600">{solution.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Kompletno upravljanje Google Ads nalogom
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            Tipovi kampanja koje vodim
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaignTypes.map((campaign) => (
            <Card key={campaign.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {campaign.title}
              </h3>
              <p className="text-gray-600 mb-4">{campaign.description}</p>
              <Link href={campaign.href} className="text-primary font-semibold">
                {campaign.cta}
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Kako izgleda saradnja
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <Card key={step.title} className="h-full">
              <div className="text-primary font-heading font-bold text-xl mb-2">
                Korak {index + 1}
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Izaberite paket koji vam odgovara
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="h-full">
            <h3 className="text-xl font-heading font-bold mb-3">
              Lokalne firme i manja predužeca
            </h3>
            <p className="text-gray-600 mb-6">
              Za biznise sa budžetom do EUR 700 mesečno nudim prilagođenu uslugu
              i jasnu strukturu za početak.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/usluge/starter-paket" variant="secondary">
                Starter paket
              </Button>
              <Button href="/usluge/konsultacije" variant="primary">
                Zakažite konsultaciju
              </Button>
            </div>
          </Card>
          <Card className="h-full">
            <h3 className="text-xl font-heading font-bold mb-3">
              Standardna usluga (EUR 800+/mesečno)
            </h3>
            <p className="text-gray-600 mb-4">
              Idealno za kompanije koje žele dugoročno, ozbiljno upravljanje.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>Minimum EUR 800-900 mesečnog ad spend-a</li>
              <li>Dugoročna saradnja i stabilan rast</li>
              <li>Profesionalan pristup kanalu</li>
              <li>Ozbiljan partner za skaliranje</li>
              <li>Proizvod/usluga sa potvrdjenim trzisnim fitom</li>
            </ul>
          </Card>
        </div>
        <div className="mt-8">
          <Card className="h-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h3 className="text-xl font-heading font-bold mb-2">
                  Premium usluga - Performance Marketing
                </h3>
                <p className="text-gray-600">
                  Omnichannel pristup sa dedicated timom (Google Ads + Meta + SEO
                  + CRO) kroz Funky Enterprises partnerstvo.
                </p>
              </div>
              <Button href="/usluge/performance-marketing" variant="secondary">
                Saznajte više
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Rezultati koje ostvarujem
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {results.map((result) => (
            <Card key={result.label} className="text-center h-full">
              <div className="text-3xl font-heading font-bold mb-2">
                {result.value}
              </div>
              <p className="text-gray-600">{result.label}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button href="/case-studies" variant="primary">
            Pogledajte detaljne case studies
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
            Spremni da preuzmemo kontrolu nad vašim Google Ads?
          </h2>
          <p className="text-gray-600 mb-8">
            Zakažite besplatnu 30-minutnu konsultaciju i proverimo da li ima
            smisla da radimo zajedno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakažite besplatnu konsultaciju
            </Button>
            <Button href="/usluge/google-ads-audit" variant="primary">
              Zakažite Google Ads audit
            </Button>
          </div>
          <div className="text-sm text-gray-500 mt-6">
            <Link href="/blog/google-ads-cena" className="underline">
              Koliko košta Google Ads?
            </Link>{" "}
            -{" "}
            <Link href="/blog/google-ads-za-početnike" className="underline">
              Google Ads za početnike
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
