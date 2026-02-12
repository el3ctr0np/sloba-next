import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";
import { caseStudies, getCaseStudy } from "../data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Case Study Not Found" };

  return {
    title: `${cs.company} Case Study | ${cs.highlight} — Slobodan Jelisavac`,
    description: `${cs.category} case study: ${cs.niche} (${cs.market}). ${cs.highlight}. ${cs.results[1]?.label}: ${cs.results[1]?.value}. Pogledajte kako.`
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const otherStudies = caseStudies.filter((s) => s.slug !== slug);

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
        name: "Case Studies",
        item: "https://www.slobodan-jelisavac.com/case-studies"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cs.company,
        item: `https://www.slobodan-jelisavac.com/case-studies/${cs.slug}`
      }
    ]
  };

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

      {/* Dark Hero - Two Column */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
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
                      href="/case-studies"
                      className="hover:text-white transition-colors"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-white">{cs.company}</li>
                </ol>
              </nav>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full">
                  {cs.category}
                </span>
                <span className="inline-block bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full">
                  {cs.industry}
                </span>
                <span className="inline-block bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full">
                  {cs.market}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                {cs.company}
              </h1>
              <p className="text-xl text-yellow-400 font-semibold mb-4">
                {cs.niche} — {cs.highlight}
              </p>
              <p className="text-slate-300 mb-8">{cs.period}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/kontakt" variant="secondary">
                  Želim slične rezultate
                </Button>
                <Button href="/case-studies" variant="primary">
                  Svi case studies
                </Button>
              </div>
            </div>

            {/* Right: Image Placeholder */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full aspect-[4/3] max-w-lg rounded-2xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center">
                <span className="text-slate-500 text-sm">
                  {cs.company} — slika ovde
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-heading font-bold mb-4">
            O kompaniji {cs.company}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {cs.brandIntro}
          </p>
          {cs.website && (
            <a
              href={cs.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-slate-900 font-semibold hover:underline"
            >
              Posetite {cs.company} →
            </a>
          )}
        </div>
      </section>

      {/* Key Metrics Strip */}
      <Section background="gray">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cs.results.map((result) => (
            <div key={result.label} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-1">
                {result.value}
              </div>
              <p className="text-gray-500 text-sm">{result.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Izazov */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">Izazov</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {cs.challenge}
          </p>
        </div>
      </Section>

      {/* Strategija + Taktike */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-heading font-bold mb-6">Strategija</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {cs.strategy}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cs.tactics.map((tactic) => (
            <Card key={tactic.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {tactic.title}
              </h3>
              <p className="text-gray-600">{tactic.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Rezultati */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">Rezultati</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cs.results.map((result) => (
            <Card key={result.label} className="text-center">
              <p className="text-sm text-gray-500 mb-2">{result.label}</p>
              <p className="text-2xl md:text-3xl font-bold text-slate-900">
                {result.value}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonial (if exists) */}
      {cs.testimonial && (
        <Section background="gray">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white">
              <svg
                className="w-10 h-10 text-yellow-400 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                {cs.testimonial.quote}
              </p>
              <div>
                <p className="font-heading font-semibold">
                  {cs.testimonial.name}
                </p>
                <p className="text-gray-500 text-sm">{cs.testimonial.role}</p>
              </div>
            </Card>
          </div>
        </Section>
      )}

      {/* Other Case Studies */}
      <Section background={cs.testimonial ? undefined : "gray"}>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ostali case studies
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {otherStudies.map((other) => (
            <Link
              key={other.slug}
              href={`/case-studies/${other.slug}`}
              className="group"
            >
              <Card className="h-full transition-shadow group-hover:shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    {other.category}
                  </span>
                  <span className="text-xs text-gray-400">{other.market}</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-1">
                  {other.company}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{other.niche}</p>
                <p className="text-lg font-bold text-slate-900">
                  {other.highlight}
                </p>
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
