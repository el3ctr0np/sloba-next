import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";
import { caseStudies } from "./data";

export function generateMetadata(): Metadata {
  return {
    title: "Case Studies | Google Ads Rezultati — Slobodan Jelisavac",
    description:
      "Realni Google Ads rezultati: 3.7x ROI za luksuzni nameštaj, 12x rast prihoda za naočare, 3x više leadova za akustične kabine. Pogledajte case studies."
  };
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Slobodan Jelisavac",
  url: "https://www.slobodan-jelisavac.com",
  jobTitle: "Google Ads Strategist",
  knowsAbout: [
    "Google Ads",
    "eCommerce PPC",
    "B2B Lead Generation",
    "Performance Max"
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
      name: "Case Studies",
      item: "https://www.slobodan-jelisavac.com/case-studies"
    }
  ]
};

export default function CaseStudiesPage() {
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
                <li className="text-white">Case Studies</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Case Studies — realni rezultati za realne biznise
            </h1>

            <p className="text-lg text-slate-300 mb-8">
              Iza svake brojke stoji strategija, testiranje i meseci
              optimizacije. Pogledajte kako sam pomogao eCommerce i B2B
              kompanijama da skaliraju Google Ads profitabilno.
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
                <span>eCommerce & B2B</span>
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
                <span>UK, EU & Skandinavija</span>
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
                <span>Višegodišnja saradnja</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group"
            >
              <Card className="h-full transition-shadow group-hover:shadow-lg">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    {study.category}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    {study.industry}
                  </span>
                  <span className="text-xs text-gray-400">{study.market}</span>
                </div>
                <h2 className="text-2xl font-heading font-bold mb-1">
                  {study.company}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{study.niche}</p>
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Primarni rezultat</p>
                    <p className="text-2xl font-bold text-slate-900">
                      {study.highlight}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Budžet</p>
                    <p className="text-lg font-semibold text-slate-700">
                      {study.results[1]?.value}
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{study.period}</span>
                  <span className="text-slate-900 font-semibold group-hover:underline">
                    Pogledajte →
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Dark CTA */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4 text-white">
            Želite slične rezultate za vaš biznis?
          </h2>
          <p className="text-slate-300 mb-8">
            Zakažite besplatnu konsultaciju i razgovarajmo o tome kako Google
            Ads može raditi za vas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakažite konsultaciju
            </Button>
            <Button href="/usluge" variant="primary">
              Pogledajte usluge
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
