import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/metadata";
import {
  glossaryTerms,
  glossaryCategoryLabels,
  getGlossaryByCategory,
  type GlossaryCategory,
  type GlossaryTerm,
} from "./glossary-data";
import { GlossarySearch } from "./GlossarySearch";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "PPC Glossary — 50 Google Ads Terms Explained [2026] | Slobodan Jelisavac"
      : "PPC Rečnik — 50 Google Ads Termina Objašnjenih [2026] | Slobodan Jelisavac",
    description: isEn
      ? "PPC glossary with 50 essential Google Ads terms — from CTR, CPC, ROAS, POAS to Performance Max, Smart Bidding, and Quality Score. Definitions, formulas, examples, and Serbian market benchmarks."
      : "PPC rečnik sa 50 osnovnih Google Ads termina — od CTR, CPC, ROAS, POAS do Performance Max, Smart Bidding i Quality Score. Definicije, formule, primeri i benchmarks za srpsko tržište.",
    locale,
    path: "/glossary",
    srPath: "/recnik",
    ogImage: "/blog/recnik.webp",
  });
}

const CATEGORY_ORDER: GlossaryCategory[] = [
  "basics",
  "bidding",
  "tracking",
  "optimization",
  "advanced",
];

const baseUrl = "https://www.slobodan-jelisavac.com";

export default async function GlossaryPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";
  const loc: "sr" | "en" = isEn ? "en" : "sr";

  // Build DefinedTermSet JSON-LD schema
  const glossaryUrl = `${baseUrl}/${loc}${isEn ? "/glossary" : "/recnik"}`;
  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": glossaryUrl,
    name: isEn
      ? "PPC Glossary — Slobodan Jelisavac"
      : "PPC Rečnik — Slobodan Jelisavac",
    description: isEn
      ? "Complete glossary of PPC and Google Ads terms in Serbian and English."
      : "Kompletan rečnik PPC i Google Ads termina na srpskom i engleskom.",
    url: glossaryUrl,
    inLanguage: isEn ? "en" : "sr",
    hasDefinedTerm: glossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${glossaryUrl}#${t.slug}`,
      name: t.term,
      alternateName: t.aliases ?? [],
      description: isEn ? t.shortDefinitionEn : t.shortDefinitionSr,
      inDefinedTermSet: glossaryUrl,
      url: `${glossaryUrl}#${t.slug}`,
      termCode: t.slug,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500" />
        <div className="container-custom px-4 py-12 md:py-16">
          <nav className="text-xs text-gray-500 mb-4 uppercase tracking-wider">
            <Link href="/" className="hover:text-primary">
              {isEn ? "Home" : "Početna"}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-semibold">
              {isEn ? "Glossary" : "Rečnik"}
            </span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-4 leading-[1.1]">
            {isEn
              ? "PPC Glossary — 50 Google Ads Terms"
              : "PPC Rečnik — 50 Google Ads Termina"}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8 leading-relaxed">
            {isEn
              ? "From CTR and CPC to POAS and Performance Max — everything you need to understand in one place. Definitions, formulas, examples, and real Serbian market benchmarks."
              : "Od CTR-a i CPC-a do POAS-a i Performance Max-a — sve što treba da razumete na jednom mestu. Definicije, formule, primeri i realni benchmarks za srpsko tržište."}
          </p>

          <GlossarySearch locale={loc} />

          <div className="flex flex-wrap gap-2 mt-6 justify-center">
            {CATEGORY_ORDER.map((cat) => {
              const label = glossaryCategoryLabels[cat];
              const count = getGlossaryByCategory(cat).length;
              return (
                <a
                  key={cat}
                  href={`#cat-${cat}`}
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm hover:border-primary hover:bg-primary/5 transition-colors shadow-sm"
                >
                  <span>{label.emoji}</span>
                  <span className="font-semibold text-gray-900">
                    {isEn ? label.en : label.sr}
                  </span>
                  <span className="text-gray-500">({count})</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 md:py-16">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
            {/* Sticky nav sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2">
                <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-bold mb-3">
                  {isEn ? "Contents" : "Sadržaj"}
                </p>
                <nav className="space-y-6">
                  {CATEGORY_ORDER.map((cat) => {
                    const label = glossaryCategoryLabels[cat];
                    const terms = getGlossaryByCategory(cat);
                    return (
                      <div key={cat}>
                        <a
                          href={`#cat-${cat}`}
                          className="flex items-center gap-2 text-sm font-heading font-bold text-slate-900 mb-2 hover:text-primary"
                        >
                          <span>{label.emoji}</span>
                          <span>{isEn ? label.en : label.sr}</span>
                          <span className="text-gray-400 font-normal">
                            ({terms.length})
                          </span>
                        </a>
                        <ul className="space-y-1 pl-6 border-l border-gray-200">
                          {terms.map((t) => (
                            <li key={t.slug}>
                              <a
                                href={`#${t.slug}`}
                                className="block text-sm text-gray-600 hover:text-primary py-0.5"
                              >
                                {t.term}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Terms list */}
            <div className="space-y-6 min-w-0">
              {CATEGORY_ORDER.map((cat) => {
                const label = glossaryCategoryLabels[cat];
                const terms = getGlossaryByCategory(cat);
                return (
                  <section key={cat} id={`cat-${cat}`} className="scroll-mt-24">
                    <div className="mb-6 pb-3 border-b-2 border-gray-900 flex items-baseline gap-3">
                      <span className="text-3xl">{label.emoji}</span>
                      <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-0">
                        {isEn ? label.en : label.sr}
                      </h2>
                      <span className="text-sm text-gray-500">
                        ({terms.length} {isEn ? "terms" : "termina"})
                      </span>
                    </div>
                    <div className="space-y-6">
                      {terms.map((t) => (
                        <GlossaryEntry key={t.slug} term={t} locale={loc} />
                      ))}
                    </div>
                  </section>
                );
              })}

              {/* CTA */}
              <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 mt-12">
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">
                  {isEn
                    ? "Still have a term to add?"
                    : "Imate termin koji fali?"}
                </h3>
                <p className="text-slate-300 mb-4">
                  {isEn
                    ? "This glossary is maintained monthly. Suggest a term or a correction — I respond within 48 hours."
                    : "Rečnik se ažurira mesečno. Predložite termin ili ispravku — odgovaram u roku od 48h."}
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-5 py-2.5 rounded-lg font-semibold hover:brightness-105 transition-all"
                >
                  {isEn ? "Suggest a term" : "Predloži termin"}
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Single glossary entry card.
 * Renders term, aliases, definition, formula, example, benchmarks, related.
 */
function GlossaryEntry({
  term: t,
  locale,
}: {
  term: GlossaryTerm;
  locale: "sr" | "en";
}) {
  const isEn = locale === "en";
  const definition = isEn ? t.definitionEn : t.definitionSr;
  const example = isEn ? t.exampleEn : t.exampleSr;
  const relatedPost = isEn ? t.relatedPostEn : t.relatedPostSr;
  const categoryLabel = glossaryCategoryLabels[t.category];

  return (
    <article
      id={t.slug}
      className="scroll-mt-24 bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 shadow-card"
    >
      {/* Header: term + aliases + category tag */}
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900 mb-0">
          {t.term}
        </h3>
        {t.termSr && t.termSr !== t.term && (
          <span className="text-sm text-gray-500">({t.termSr})</span>
        )}
        <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          <span>{categoryLabel.emoji}</span>
          <span>{isEn ? categoryLabel.en : categoryLabel.sr}</span>
        </span>
        <a
          href={`#${t.slug}`}
          className="ml-auto text-xs text-gray-400 hover:text-primary"
          title={isEn ? "Copy link" : "Kopiraj link"}
          aria-label={isEn ? "Copy link to term" : "Kopiraj link ka terminu"}
        >
          🔗
        </a>
      </header>

      {/* Aliases */}
      {t.aliases && t.aliases.length > 0 && (
        <p className="text-xs text-gray-500 italic mb-3">
          {isEn ? "Aliases: " : "Aliasi: "}
          {t.aliases.join(" · ")}
        </p>
      )}

      {/* Short definition (featured-snippet formatted) */}
      <p className="text-base text-gray-900 font-medium border-l-4 border-yellow-400 pl-4 py-2 bg-yellow-50/50 mb-4 leading-relaxed">
        {isEn ? t.shortDefinitionEn : t.shortDefinitionSr}
      </p>

      {/* Full definition */}
      <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
        {definition}
      </p>

      {/* Formula */}
      {t.formula && (
        <div className="bg-slate-900 text-yellow-400 rounded-lg px-4 py-2.5 font-mono text-sm mb-3 inline-block">
          {t.formula}
        </div>
      )}

      {/* Example */}
      {example && (
        <div className="bg-blue-50 border-l-3 border-blue-400 rounded-r-lg px-4 py-3 mb-3">
          <p className="text-sm text-blue-900 mb-0">
            <strong>{isEn ? "Example: " : "Primer: "}</strong>
            {example}
          </p>
        </div>
      )}

      {/* Benchmarks */}
      {t.benchmarks && t.benchmarks.length > 0 && (
        <div className="mb-3">
          <p className="text-xs uppercase tracking-wide font-bold text-gray-500 mb-2">
            {isEn ? "Benchmarks:" : "Benchmarks:"}
          </p>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            {t.benchmarks.map((b) => (
              <li key={b.label}>
                <strong>{b.label}:</strong> {b.range}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Related terms + blog link */}
      <footer className="mt-4 pt-3 border-t border-gray-100 text-sm text-gray-600">
        {t.relatedTerms && t.relatedTerms.length > 0 && (
          <div className="mb-2">
            <span className="font-semibold">
              {isEn ? "Related: " : "Povezano: "}
            </span>
            {t.relatedTerms.map((slug, i) => (
              <span key={slug}>
                <a href={`#${slug}`} className="text-primary hover:underline">
                  {slug.toUpperCase()}
                </a>
                {i < t.relatedTerms!.length - 1 && ", "}
              </span>
            ))}
          </div>
        )}
        {relatedPost && (
          <div>
            <span className="font-semibold">
              {isEn ? "Deep dive: " : "Pročitaj više: "}
            </span>
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: relatedPost } }}
              className="text-primary hover:underline"
            >
              {isEn ? "Full guide →" : "Kompletan vodič →"}
            </Link>
          </div>
        )}
      </footer>
    </article>
  );
}
