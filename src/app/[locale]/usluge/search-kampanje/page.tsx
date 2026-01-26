import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title:
      "Google Search kampanje Srbija | Strucnjak za PPC - Slobodan Jelisavac",
    description:
      "Profesionalne Google Search kampanje za B2B i eCommerce. Keyword strategija, ad copy, bid optimizacija. Besplatna konsultacija."
  };
}

const problems = [
  {
    title: "Pogresna struktura kampanja",
    description:
      "Sve kljucne reci u jednoj ad grupi dovode do niskog Quality Score-a i visokog CPC-a."
  },
  {
    title: "Broad match bez kontrole",
    description:
      "Bez negativne liste trosite budzet na irelevantne pretrage."
  },
  {
    title: "Generic ad copy",
    description:
      "Isti oglas za sve kljucne reci znaci nizak CTR i slabu relevantnost."
  },
  {
    title: "Set and forget mentalitet",
    description:
      "Kampanja je podesena pre meseci i niko je ne optimizuje."
  }
];

const inclusions = [
  {
    title: "Setup i struktura",
    items: [
      "Keyword istrazivanje",
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
      "Kljucne metrike",
      "Search terms insights",
      "Preporuke za sledeci period"
    ]
  }
];

const campaignTypes = [
  {
    title: "Brand Search",
    description: "Zastita brenda, jeftin CPC, visok ROAS."
  },
  {
    title: "Generic / Non-Brand Search",
    description: "Akvizicija novih kupaca koji vas jos ne poznaju."
  },
  {
    title: "Competitor Search",
    description: "Presretanje kupaca koji razmatraju konkurenciju."
  },
  {
    title: "High-Intent / Bottom Funnel",
    description: "Kljucne reci sa jasnom kupovnom namerom."
  }
];

const idealClients = [
  "Ljudi aktivno pretrazuju ono sto nudite",
  "Imate jasno definisanu ponudu (proizvod/usluga)",
  "Mozete pratiti konverzije (online ili offline)",
  "Budzet je minimum EUR 500/mesec za Search"
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
    question: "Koliko kljucnih reci treba za pocetak?",
    answer:
      "Kvalitet preko kvantiteta. Pocinjemo sa 20-50 pazljivo odabranih reci i sirimo na osnovu podataka."
  },
  {
    question: "Koliko traje da se vide rezultati?",
    answer:
      "Prva optimizacija unutar nedelju dana, stabilni rezultati nakon 4-6 nedelja."
  },
  {
    question: "Da li pisete vi ad copy?",
    answer:
      "Da, pisanje oglasa je deo usluge. Fokus na best practices i poruke koje konvertuju."
  },
  {
    question: "Sta je Quality Score i zasto je bitan?",
    answer:
      "Quality Score (1-10) odredjuje poziciju i CPC. Visi QS znaci bolji polozaj i nizu cenu."
  },
  {
    question: "Da li mogu da kombinujem Search sa drugim kampanjama?",
    answer:
      "Da, i preporucujem to. Search + Shopping za eCommerce, Search + Remarketing za B2B."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Search kampanje",
  description:
    "Profesionalne Google Search kampanje sa fokusom na keyword strategiju, ad copy i optimizaciju.",
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

export default function SearchKampanjePage() {
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
            Google Search kampanje - dodjite do kupaca kada vas traze
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Google Search kampanje su najdirektniji nacin da dodjete do kupaca u
            trenutku kada aktivno traze vase proizvode ili usluge. Za razliku od
            display ili social oglasavanja, Search oglasi se prikazuju ljudima sa
            jasnom namerom. Sa 10+ godina iskustva u kreiranju i optimizaciji
            Search kampanja, pomazem kompanijama da maksimiziraju ROI kroz keyword
            strategiju, ad copy i bid optimizaciju.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt" variant="secondary">
              Zakazite besplatnu konsultaciju
            </Button>
            <Button href="/usluge/google-ads-upravljanje" variant="primary">
              Google Ads upravljanje
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Zasto Search kampanje ne ostvaruju puni potencijal
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

      <Section background="gray">
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

      <Section>
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

      <Section background="gray">
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
              Search kampanje funkcionisu za: {industries.join(", ")}.
            </div>
          </Card>
        </div>
      </Section>

      <Section>
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

      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Spremni da dodjete do kupaca koji vas traze?
          </h2>
          <p className="text-gray-600 mb-8">
            Zakazite besplatnu konsultaciju i razgovarajmo kako Search kampanje
            mogu doneti kvalitetne leadove i prodaju.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakazite besplatnu konsultaciju
            </Button>
            <Button href="/case-studies" variant="primary">
              Pogledajte rezultate
            </Button>
          </div>
          <div className="text-sm text-gray-500 mt-6">
            <Link href="/usluge/google-shopping" className="underline">
              Google Shopping kampanje
            </Link>{" "}
            -{" "}
            <Link href="/usluge/remarketing" className="underline">
              Remarketing
            </Link>{" "}
            -{" "}
            <Link href="/blog/google-search-ads-vodic" className="underline">
              Google Search vodic
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
