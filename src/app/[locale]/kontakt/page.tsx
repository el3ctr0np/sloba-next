import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";
import { ContactForm } from "@/components/sections/ContactForm";

export function generateMetadata(): Metadata {
  return {
    title:
      "Kontakt | Besplatna Google Ads Konsultacija — Slobodan Jelisavac",
    description:
      "Zakažite besplatnu Google Ads konsultaciju. Bez obaveze, bez pritiska — samo konkretan razgovor o tome kako poboljšati vaše kampanje."
  };
}

const steps = [
  {
    number: "1",
    title: "Pošaljite upit",
    description: "Popunite formu sa osnovnim informacijama o vašem biznisu."
  },
  {
    number: "2",
    title: "Zakažemo poziv",
    description:
      "Javim vam se u roku od 24h da dogovorimo termin koji vam odgovara."
  },
  {
    number: "3",
    title: "Razgovaramo o strategiji",
    description:
      "Besplatan poziv gde analiziramo vaše kampanje i definišemo sledeće korake."
  }
];

const faqs = [
  {
    question: "Koliko traje konsultacija?",
    answer:
      "Početni poziv traje 20-30 minuta. Dovoljno da razumem vaš biznis i dam konkretne preporuke."
  },
  {
    question: "Da li je konsultacija zaista besplatna?",
    answer:
      "Da. Bez skrivenih troškova, bez obaveze. Cilj je da vidimo da li ima smisla da sarađujemo."
  },
  {
    question: "Da li moram imati postojeći Google Ads nalog?",
    answer:
      "Ne. Radim i sa kompanijama koje tek počinju sa Google Ads-om i sa onima koje žele da optimizuju postojeće kampanje."
  },
  {
    question: "Koliko brzo ću dobiti odgovor?",
    answer:
      "U roku od 24 sata radnim danom. Obično istog dana."
  }
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Slobodan Jelisavac",
  url: "https://www.slobodan-jelisavac.com",
  jobTitle: "Google Ads Strategist",
  email: "info@slobodan-jelisavac.com"
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

export default function ContactPage() {
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

      {/* Dark Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
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
                <li className="text-white">Kontakt</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Zakažite besplatnu konsultaciju
            </h1>

            <p className="text-lg text-slate-300 mb-8">
              Bez obaveze, bez pritiska — samo konkretan razgovor o tome kako
              Google Ads može raditi za vaš biznis.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
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
                <span>Odgovor u roku od 24h</span>
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
                <span>Besplatno, bez obaveze</span>
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
                <span>20-30 minuta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Trust Sidebar */}
      <Section>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Form - 2 columns */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-heading font-bold mb-6">
              Pošaljite upit
            </h2>
            <ContactForm />
          </div>

          {/* Trust Sidebar - 1 column */}
          <div className="space-y-6">
            <Card>
              <h3 className="font-heading font-semibold mb-3">
                Šta dobijate na pozivu
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  Analiza trenutnog stanja vaših kampanja
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  Konkretne preporuke za poboljšanje
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  Procena budžeta i očekivanih rezultata
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  Jasan predlog sledećih koraka
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="font-heading font-semibold mb-3">Dokazi</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <p className="font-semibold text-slate-900">9+ godina</p>
                  <p>iskustva u Google Ads-u</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    UK Search Awards
                  </p>
                  <p>nagrađivane kampanje</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">50+ brendova</p>
                  <p>u 6+ zemalja</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">3.7x</p>
                  <p>prosečno poboljšanje ROI-a</p>
                </div>
              </div>
            </Card>

            <div className="text-sm text-gray-500">
              <p className="font-semibold text-gray-700 mb-1">
                Direktan kontakt:
              </p>
              <p>info@slobodan-jelisavac.com</p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
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
    </>
  );
}
