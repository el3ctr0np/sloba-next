import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title:
      "Google Ads audit Srbija | Detaljna analiza kampanja - Slobodan Jelisavac",
    description:
      "Profesionalni Google Ads audit sa konkretnim preporukama. Otkrijte gde gubite novac i kako poboljšati ROAS. Zakažite analizu."
  };
}

const problems = [
  {
    title: "Ne znate da li kampanje rade kako treba",
    description:
      "Bez dubinskog razumevanja Google Ads-a tesko je proceniti potencijal za bolje rezultate."
  },
  {
    title: "Izvestaji koje ne razumete",
    description:
      "Dobijate metrike, ali nemate jasnu sliku sta to znaci za vaš biznis."
  },
  {
    title: "Troskovi rastu, rezultati stagniraju",
    description:
      "CPC raste, ROAS pada, a uzrok i rešenje nisu jasni."
  },
  {
    title: "Treba vam second opinion",
    description:
      "Planirate veću investiciju i zelite proveru pre skaliranja budžeta."
  }
];

const auditAreas = [
  "Analiza strukture naloga: kampanje, ad grupe, ključne reči, match types, negativne reči",
  "Analiza oglasa: ad copy, extensions, landing page alignment",
  "Bid strategije i budžet: uskladjenost sa ciljevima, budget pacing",
  "Conversion tracking: prave konverzije, duplikati, propusti",
  "Audience i targeting: remarketing liste, demografija, targeting podešavanja",
  "Shopping / Performance Max: feed kvalitet, asset grupe, audience signali"
];

const deliverables = [
  {
    title: "Detaljan izveštaj u PDF ili Google Doc formatu",
    items: [
      "Prioritizovane preporuke (Quick Wins vs Long-term)",
      "Konkretni action items sa objasnjenjima",
      "Executive summary sa ključnim nalazima"
    ]
  },
  {
    title: "Opciono: video walkthrough",
    items: [
      "Snimak prolaska kroz izveštaj",
      "Live Q&A poziv za pitanja i nejasnoce"
    ]
  }
];

const processSteps = [
  {
    title: "Pristup i kickoff",
    description:
      "Dobijam pristup Google Ads i GA4, plus kratak poziv o ciljevima i kontekstu."
  },
  {
    title: "Dubinska analiza",
    description:
      "Nekoliko dana detaljnog pregleda naloga uz identifikaciju problema i prilika."
  },
  {
    title: "Izvestaj i prezentacija",
    description:
      "Kompletan izveštaj sa preporukama, uz opciono video ili live call."
  }
];

const packages = [
  {
    title: "Audit za lokalne firme",
    subtitle: "Za naloge do EUR 600-700 mesečnog spend-a",
    items: [
      "Manji nalozi sa par kampanja",
      "Fokus na osnovne stvari koje donose brže rezultate"
    ],
    cta: "Kontaktirajte me",
    href: "/kontakt"
  },
  {
    title: "Standard audit",
    subtitle: "Za naloge od EUR 700 do EUR 3,000 mesečnog spend-a",
    items: [
      "Search i/ili Shopping kampanje",
      "Kompletan pregled svih oblasti",
      "Detaljan izveštaj sa prioritetima"
    ],
    cta: "Zakažite standard audit",
    href: "/kontakt",
    highlight: true
  },
  {
    title: "Advanced audit",
    subtitle: "Za naloge od EUR 3,000 do EUR 10,000 mesečnog spend-a",
    items: [
      "PMax, Shopping, Search, YouTube strukture",
      "Dublja analiza i više preporuka",
      "Video walkthrough uključen"
    ],
    cta: "Zakažite advanced audit",
    href: "/kontakt"
  },
  {
    title: "Enterprise audit (Funky Enterprises)",
    subtitle: "Za naloge preko EUR 10,000/mesec",
    items: [
      "Google Ads, Meta oglašavanje, SEO",
      "Kvalitet sajta i landing stranica",
      "Conversion tracking kompletna provera",
      "Kreativa i messaging",
      "Preporuke klju? u ruke"
    ],
    cta: "Kontaktirajte me za Enterprise audit",
    href: "/kontakt"
  }
];

const faqs = [
  {
    question: "Koliko traje kompletan audit?",
    answer:
      "Od dobijanja pristupa do finalnog izveštaja obicno prodje 5-7 radnih dana."
  },
  {
    question: "Da li mi treba pristup Google Ads-u?",
    answer:
      "Da, potreban mi je read-only pristup (Viewer role). Ne menjam nista bez odobrenja."
  },
  {
    question: "Da li mogu sam da implementiram preporuke?",
    answer:
      "Da. Izvestaj je napisan tako da vi ili vaš tim možete samostalno da implementirate preporuke."
  },
  {
    question: "Sta ako zelim da preuzmete upravljanje nakon audita?",
    answer:
      "Cena audita se odbija od prvog meseca upravljanja ako se odlučite za saradnju u roku od 30 dana."
  },
  {
    question: "Radim sa agencijom - da li oni treba da znaju za audit?",
    answer:
      "To je vaša odluka. Neki klijenti koriste audit kao osnovu za razgovor, drugi kao pripremu za promenu."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads audit",
  description:
    "Profesionalni audit Google Ads naloga sa prioritetnim preporukama za poboljšanje performansi.",
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

export default function GoogleAdsAuditPage() {
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
            Google Ads audit - otkrijte gde gubite novac
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Niste sigurni da li vaše Google Ads kampanje rade optimalno?
            Profesionalni Google Ads audit pokazuje gde gubite novac, koje prilike
            propustate i sta konkretno treba promeniti. Analiza uključuje
            strategijski pregled koji uzima u obzir vaš biznis model, marže i
            ciljeve - ne samo tehnicke metrike.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt" variant="secondary">
              Zakažite Google Ads audit
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
            Zašto vam treba nezavišan audit
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
            Oblasti koje pokriva audit
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fokus na ključne delove naloga koji direktno uticu na ROAS i rast.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {auditAreas.map((area) => (
            <Card key={area} className="h-full">
              <p className="text-gray-700">{area}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Sta dobijate nakon audita
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {deliverables.map((block) => (
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
            Kako izgleda proces
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
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

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Izaberite pravi audit za vasu situaciju
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {packages.map((pkg) => (
            <Card
              key={pkg.title}
              className={`h-full ${pkg.highlight ? "border-primary" : ""}`}
            >
              <h3 className="text-xl font-heading font-bold mb-2">{pkg.title}</h3>
              <p className="text-gray-600 mb-4">{pkg.subtitle}</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                {pkg.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Button href={pkg.href} variant="secondary" className="w-full">
                {pkg.cta}
              </Button>
            </Card>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-6">
          Napomena: Ako nakon audita odlučite da radimo zajedno na upravljanju,
          cena audita se odbija od prvog meseca.
        </p>
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
            Saznajte tacno gde gubite novac
          </h2>
          <p className="text-gray-600 mb-8">
            Zakažite Google Ads audit i dobijte jasnu sliku performansi kampanja
            sa konkretnim preporukama za poboljšanje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakažite Google Ads audit
            </Button>
            <Button href="/case-studies" variant="primary">
              Pogledajte rezultate
            </Button>
          </div>
          <div className="text-sm text-gray-500 mt-6">
            <Link href="/usluge/performance-max" className="underline">
              Performance Max
            </Link>{" "}
            -{" "}
            <Link href="/usluge/google-shopping" className="underline">
              Shopping kampanje
            </Link>{" "}
            -{" "}
            <Link href="/blog/google-ads-greške" className="underline">
              Najcesce Google Ads greške
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
