import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title: "Hvala na upitu | Slobodan Jelisavac",
    description:
      "Primili smo vaš upit. Zakažite termin za besplatnu Google Ads konsultaciju."
  };
}

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
      name: "Kontakt",
      item: "https://www.slobodan-jelisavac.com/kontakt"
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hvala",
      item: "https://www.slobodan-jelisavac.com/kontakt/hvala"
    }
  ]
};

const callBenefits = [
  {
    title: "Tačna procena za vaš biznis",
    description:
      "Umesto generičnih saveta, analiziramo vašu konkretnu situaciju — industriju, budžet i ciljeve."
  },
  {
    title: "Konkretne preporuke odmah",
    description:
      "Na kraju poziva imaćete jasan plan šta treba uraditi, čak i ako ne nastavimo saradnju."
  },
  {
    title: "Bez obaveze, bez pritiska",
    description:
      "Ovo je razgovor, ne prodajni pitch. Samo iskren pogled na vaše mogućnosti."
  }
];

const callSteps = [
  "Brzi pregled vašeg trenutnog stanja (ili ciljeva ako tek počinjete)",
  "Analiza ključnih prilika i problema u vašim kampanjama",
  "Konkretne preporuke i predlog strategije",
  "Odgovori na sva vaša pitanja"
];

const faqs = [
  {
    question: "Koliko traje poziv?",
    answer:
      "20-30 minuta. Dovoljno da razumem vaš biznis i dam konkretne preporuke, a dovoljno kratko da ne gubimo vreme."
  },
  {
    question: "Da li moram nešto pripremiti?",
    answer:
      "Nije obavezno, ali ako imate pristup Google Ads nalogu, to će pomoći. Ako nemate, razgovaraćemo o vašim ciljevima i budžetu."
  },
  {
    question: "Da li ću biti pod pritiskom da kupim nešto?",
    answer:
      "Ne. Ovo je razgovor, ne prodajni poziv. Mnogi klijenti koriste konsultaciju samo za second opinion — i to je potpuno u redu."
  },
  {
    question: "Šta ako još nisam spreman za saradnju?",
    answer:
      "Nema problema. Dobićete korisne savete koji važe bez obzira da li nastavimo saradnju ili ne."
  }
];

export default function ThankYouPage() {
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

      {/* Dark Hero - Confirmation */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-slate-400">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition-colors"
                  >
                    Početna
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/kontakt"
                    className="hover:text-white transition-colors"
                  >
                    Kontakt
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white">Hvala</li>
              </ol>
            </nav>

            {/* Success indicator */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-green-400 font-semibold">
                Upit primljen
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Zakažite vaš besplatni Google Ads Strategy Call
            </h1>

            <p className="text-lg text-slate-300 mb-8">
              Primili smo vaš upit — javim se u roku od 24h. Ali ako želite da
              ubrzate proces, zakažite termin odmah i preskočite čekanje.
            </p>

            {/* Primary CTA - Calendar booking */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {/* TODO: Replace with actual Calendly/Cal.com link */}
              <Button href="/kontakt" variant="secondary">
                Zakažite termin odmah
              </Button>
              <Button href="/case-studies" variant="primary">
                Pogledajte rezultate dok čekate
              </Button>
            </div>

            <p className="text-sm text-slate-400">
              Bez obaveze. Bez pritiska. Samo iskren razgovor.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of the Call */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Zašto da zakažete poziv odmah
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {callBenefits.map((benefit) => (
            <Card key={benefit.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* What Happens on the Call */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Šta ćete dobiti na pozivu
          </h2>
          <div className="space-y-6">
            {callSteps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-lg pt-0.5">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Who You'll Speak With */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6 text-center">
            Sa kim ćete razgovarati
          </h2>
          <Card>
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              {/* Photo placeholder */}
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-slate-400 text-xs">Foto</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold mb-1">
                  Slobodan Jelisavac
                </h3>
                <p className="text-yellow-600 font-semibold text-sm mb-3">
                  Google Ads Strategist — 9+ godina iskustva
                </p>
                <p className="text-gray-600">
                  Razgovaraćete direktno sa mnom — ne sa account managerom ili
                  junior zaposlenim. Isti čovek koji analizira vaše kampanje
                  je i onaj koji ih optimizuje. UK Search Awards winner, 50+
                  brendova u 6+ zemalja.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Proof Strip */}
      <Section background="gray">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-heading font-bold text-slate-900 mb-1">
              9+
            </div>
            <p className="text-gray-500 text-sm">godina iskustva</p>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-slate-900 mb-1">
              3.7x
            </div>
            <p className="text-gray-500 text-sm">prosečan ROI</p>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-slate-900 mb-1">
              50+
            </div>
            <p className="text-gray-500 text-sm">brendova</p>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-slate-900 mb-1">
              6+
            </div>
            <p className="text-gray-500 text-sm">zemalja</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Pitanja pre poziva
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="bg-white rounded-lg shadow-sm overflow-hidden group border border-gray-100"
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

      {/* Bottom CTA */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4 text-white">
            Ne čekajte — zakažite termin odmah
          </h2>
          <p className="text-slate-300 mb-8">
            Svaki dan bez optimizacije je propušten budžet. Zakažite besplatan
            poziv i dobijte jasan plan za vaše kampanje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* TODO: Replace with actual Calendly/Cal.com link */}
            <Button href="/kontakt" variant="secondary">
              Zakažite termin odmah
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
            <Link
              href="/usluge"
              className="hover:text-white transition-colors underline"
            >
              Usluge
            </Link>
            <Link
              href="/case-studies"
              className="hover:text-white transition-colors underline"
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="hover:text-white transition-colors underline"
            >
              Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
