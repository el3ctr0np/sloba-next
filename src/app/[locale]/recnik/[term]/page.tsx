import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/metadata";
import { getGlossaryTerm, glossaryCategoryLabels } from "../glossary-data";
import { getTermPage, termPageSlugs, hasTermPage } from "../terms";

type Props = { params: Promise<{ locale: string; term: string }> };

const baseUrl = "https://www.slobodan-jelisavac.com";

export function generateStaticParams() {
  // Slug pojma je isti na oba jezika (cpc, aov, serp), pa nema prevodjenja.
  return termPageSlugs.map((term) => ({ term }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, term: slug } = await params;
  const page = getTermPage(slug);
  if (!page) return { title: "404" };
  const isEn = locale === "en";

  return buildMetadata({
    title: isEn ? page.metaTitleEn : page.metaTitleSr,
    description: isEn ? page.metaDescriptionEn : page.metaDescriptionSr,
    locale,
    path: `/glossary/${slug}`,
    srPath: `/recnik/${slug}`,
    ogImage: "/blog/recnik.webp",
  });
}

export default async function TermPageView({ params }: Props) {
  const { locale, term: slug } = await params;
  const page = getTermPage(slug);
  const data = getGlossaryTerm(slug);
  if (!page || !data) notFound();

  const isEn = locale === "en";
  const loc = isEn ? "en" : "sr";
  const glossaryPath = isEn ? "/glossary" : "/recnik";
  const pageUrl = `${baseUrl}/${loc}${glossaryPath}/${slug}`;
  const glossaryUrl = `${baseUrl}/${loc}${glossaryPath}`;
  const categoryLabel = glossaryCategoryLabels[data.category];

  const definition = isEn ? page.definitionEn : page.definitionSr;
  const take = isEn ? page.takeEn : page.takeSr;
  const example = isEn ? page.exampleEn : page.exampleSr;
  const guideLabel = isEn ? page.guideLabelEn : page.guideLabelSr;

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": pageUrl,
    name: data.term,
    alternateName: data.aliases ?? [],
    description: isEn ? page.definitionEn : page.definitionSr,
    url: pageUrl,
    termCode: slug,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": glossaryUrl,
      name: isEn
        ? "PPC Glossary - Slobodan Jelisavac"
        : "PPC Rečnik - Slobodan Jelisavac",
      url: glossaryUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEn ? "Home" : "Početna",
        item: `${baseUrl}/${loc}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEn ? "Glossary" : "Rečnik",
        item: glossaryUrl,
      },
      { "@type": "ListItem", position: 3, name: data.term, item: pageUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500" />
        <div className="container-custom px-4 py-10 md:py-14">
          <nav className="text-xs text-gray-500 mb-4 uppercase tracking-wider">
            <Link href="/" className="hover:text-primary">
              {isEn ? "Home" : "Početna"}
            </Link>
            <span className="mx-2">/</span>
            <Link href="/recnik" className="hover:text-primary">
              {isEn ? "Glossary" : "Rečnik"}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-semibold">{data.term}</span>
          </nav>

          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-0 leading-[1.1]">
              {data.term}
            </h1>
            {data.termSr && data.termSr !== data.term && (
              <span className="text-lg text-gray-500">({data.termSr})</span>
            )}
            <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
              <span>{categoryLabel.emoji}</span>
              <span>{isEn ? categoryLabel.en : categoryLabel.sr}</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-900 font-medium border-l-4 border-yellow-400 pl-4 py-2 bg-yellow-50/60 max-w-3xl leading-relaxed">
            {isEn ? data.shortDefinitionEn : data.shortDefinitionSr}
          </p>

          {data.aliases && data.aliases.length > 0 && (
            <p className="text-xs text-gray-500 italic mt-3">
              {isEn ? "Aliases: " : "Aliasi: "}
              {data.aliases.join(" · ")}
            </p>
          )}
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container-custom px-4">
          <div className="max-w-3xl space-y-8">
            {/* 1. Definicija */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-3">
                {isEn ? "What it is" : "Šta je"}
              </h2>
              <p className="text-[17px] md:text-lg text-gray-700 leading-[1.75] mb-0">
                {definition}
              </p>
            </div>

            {/* Formula, ako pojam ima racunicu */}
            {data.formula && (
              <div className="bg-slate-900 text-yellow-400 rounded-lg px-5 py-3 font-mono text-sm md:text-base inline-block">
                {data.formula}
              </div>
            )}

            {/* 2. Slobin stav - jedini razlog zasto ova stranica postoji */}
            <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-yellow-400 font-bold mb-3">
                {isEn ? "My take" : "Moj stav"}
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-0">{take}</p>
            </div>

            {/* 3. Primer sa brojkom */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-slate-900 mb-3">
                {isEn ? "Example" : "Primer"}
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg px-5 py-4">
                <p className="text-[17px] text-blue-900 leading-relaxed mb-0">
                  {example}
                </p>
              </div>
            </div>

            {/* Benchmarks, ako postoje za srpsko trziste */}
            {data.benchmarks && data.benchmarks.length > 0 && (
              <div>
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-3">
                  Benchmarks
                </h2>
                <ul className="text-[17px] text-gray-700 space-y-1.5 mb-0">
                  {data.benchmarks.map((b) => (
                    <li key={b.label}>
                      <strong className="text-slate-900">{b.label}:</strong>{" "}
                      {b.range}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 4. Link ka dubinskom vodicu */}
            <div className="border-2 border-gray-200 rounded-xl p-5 md:p-6 bg-white shadow-card">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">
                {isEn ? "Read in depth" : "Pročitajte detaljno"}
              </p>
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: page.guideSlug } }}
                className="text-lg md:text-xl font-heading font-semibold text-primary hover:underline"
              >
                {guideLabel} →
              </Link>
            </div>

            {/* Povezani pojmovi */}
            {data.relatedTerms && data.relatedTerms.length > 0 && (
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900 mb-3">
                  {isEn ? "Related terms" : "Povezani pojmovi"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.relatedTerms.map((rel) => {
                    const relData = getGlossaryTerm(rel);
                    if (!relData) return null;
                    return hasTermPage(rel) ? (
                      <Link
                        key={rel}
                        href={{ pathname: "/recnik/[term]", params: { term: rel } }}
                        className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3.5 py-1.5 text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors"
                      >
                        {relData.term}
                      </Link>
                    ) : (
                      <a
                        key={rel}
                        href={`${glossaryPath === "/glossary" ? "/en/glossary" : "/sr/recnik"}#${rel}`}
                        className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3.5 py-1.5 text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors"
                      >
                        {relData.term}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Nazad na ceo recnik */}
            <div className="pt-2">
              <Link
                href="/recnik"
                className="text-sm text-gray-600 hover:text-primary"
              >
                {isEn
                  ? "← All 64 terms in the glossary"
                  : "← Svih 64 pojma u rečniku"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
