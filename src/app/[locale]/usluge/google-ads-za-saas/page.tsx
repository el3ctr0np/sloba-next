import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title: "Google Ads za SaaS | Customer acquisition - Slobodan Jelisavac",
    description:
      "Google Ads strategije za SaaS kompanije. Trial signups, demo requests, smanjenje CAC. Zakažite konsultaciju."
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
      "Broj signups-a ne znaci kvalitet. Potreban je fokus na trial-to-paid."
  },
  {
    title: "Competitor bidding war",
    description:
      "Svi targetiraju iste high-intent reči, pa CPC postaje astronomskim."
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
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads za SaaS",
  description:
    "Google Ads strategije za SaaS kompanije fokusirane na trial-to-paid i smanjenje CAC-a.",
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

export default function GoogleAdsZaSaasPage() {
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
            Google Ads za SaaS - smanjite CAC i skalirajte acquisition
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Google Ads za SaaS kompanije zahteva pristup koji razume SaaS economics.
            Cilj nije samo dovesti korisnike, ve? dovesti one koji postaju paying
            customers sa visokim LTV-om. Fokus je na metrikama koje zaista matter:
            trial-to-paid conversion, CAC payback i customer quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt" variant="secondary">
              Zakažite besplatnu konsultaciju
            </Button>
            <Button href="/usluge/google-ads-za-b2b" variant="primary">
              Google Ads za B2B
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            SaaS acquisition izazovi
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
            Za koga je SaaS Google Ads usluga
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
              Napomena: Za very early stage startup-e koji još testiraju PMF,
              Google Ads možda nije pravi kanal.
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            SaaS kampanje rezultati
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
            Svi SaaS case studies
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
            Spremni da optimizujete SaaS acquisition?
          </h2>
          <p className="text-gray-600 mb-8">
            Zakažite besplatnu konsultaciju i razgovarajmo kako Google Ads može
            smanjiti CAC i skalirati growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakažite besplatnu konsultaciju
            </Button>
            <Button href="/usluge/search-kampanje" variant="primary">
              Search kampanje
            </Button>
          </div>
          <div className="text-sm text-gray-500 mt-6">
            <Link href="/usluge/remarketing" className="underline">
              Remarketing
            </Link>{" "}
            -{" "}
            <Link href="/usluge/google-ads-za-b2b" className="underline">
              Google Ads za B2B
            </Link>{" "}
            -{" "}
            <Link href="/case-studies" className="underline">
              Rezultati
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
