import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/metadata";
import { AuditWizard } from "@/components/audit/AuditWizard";
import { pmaxCopyEN, pmaxCopySR } from "@/lib/audit-engine/copy";
import { pmaxCheckEN, pmaxCheckSR } from "@/lib/audit-engine/data/pmax-check";
import {
  pmaxTeachingEN,
  pmaxTeachingSR,
} from "@/lib/audit-engine/data/pmax-check-teaching";

type Props = {
  params: Promise<{ locale: string }>;
};

const BASE_URL = "https://www.slobodan-jelisavac.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return buildMetadata({
      title: "PMax Check — Free Performance Max Audit Tool | Slobodan Jelisavac",
      description:
        "Work through 38 Performance Max checkpoints and get a weighted score per group and overall, plus the order to fix things in. Free, runs in the browser, no email required.",
      locale,
      path: "/resources/pmax-check",
      srPath: "/resursi/pmax-check",
    });
  }

  return buildMetadata({
    title: "PMax Check - besplatan Performance Max audit alat | Slobodan Jelisavac",
    description:
      "Prođite kroz 38 tačaka provere Performance Max kampanje i dobijte ponderisan skor po grupi i ukupno, plus redosled popravki. Besplatno, radi u pregledaču, bez ostavljanja emaila.",
    locale,
    path: "/resources/pmax-check",
    srPath: "/resursi/pmax-check",
  });
}

export default async function PmaxCheckPage({ params }: Props) {
  const { locale } = await params;
  const sr = locale !== "en";
  const copy = sr ? pmaxCopySR : pmaxCopyEN;
  const definition = sr ? pmaxCheckSR : pmaxCheckEN;
  const teaching = sr ? pmaxTeachingSR : pmaxTeachingEN;
  const guideSlug = sr ? "pmax-audit-checklist" : "performance-max-audit-checklist";

  // Structured data: a free tool, not an article.
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PMax Check",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${BASE_URL}/${sr ? "sr/resursi/pmax-check" : "en/resources/pmax-check"}`,
    inLanguage: sr ? "sr-RS" : "en",
    description: sr
      ? "Interaktivna provera Performance Max kampanje kroz 38 tačaka, sa ponderisanim skorom po grupi i ukupno."
      : "Interactive 38-checkpoint Performance Max review with a weighted score per group and overall.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: sr ? "EUR" : "USD",
    },
    author: {
      "@type": "Person",
      name: "Slobodan Jelisavac",
      url: `${BASE_URL}/${sr ? "sr/o-meni" : "en/about"}`,
    },
  };

  return (
    <main className="min-h-[80vh] bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3">
          {copy.intro.eyebrow}
        </p>
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
          {sr
            ? "PMax Check: provera Performance Max kampanje"
            : "PMax Check: a Performance Max review"}
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-3xl">{copy.intro.lead}</p>

        {/* Headline numbers, same convention as the guide */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-900 text-white rounded-xl p-5 md:p-6 mb-8 max-w-3xl">
          {[
            { value: "38", label: sr ? "tačaka provere" : "checkpoints" },
            { value: "8", label: sr ? "grupa" : "groups" },
            { value: "0-100", label: sr ? "skor po grupi" : "score per group" },
            { value: sr ? "0 €" : "$0", label: sr ? "i bez emaila" : "and no email" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-heading font-bold text-accent mb-0">
                {stat.value}
              </p>
              <p className="text-xs text-slate-400 mt-1 mb-0">{stat.label}</p>
            </div>
          ))}
        </div>

        <AuditWizard
          definition={definition}
          copy={copy}
          eventPrefix="pmax_check"
          locale={locale}
          report={{
            formName: "pmax_check_report",
            subject: sr ? "PMax Check izveštaj" : "PMax Check report",
            nextUrl: `${BASE_URL}/${
              sr ? "sr/resursi/pmax-check/hvala" : "en/resources/pmax-check/thank-you"
            }`,
          }}
          guideSlug={guideSlug}
          teaching={teaching}
          guideHref={
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: guideSlug } }}
              className="block bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-900 transition-colors no-underline"
            >
              <p className="font-heading font-semibold text-gray-900 mb-1">
                {copy.cta.guideTitle}
              </p>
              <p className="text-sm text-gray-500 mb-0">{copy.cta.guideBody}</p>
            </Link>
          }
        />
      </div>
    </main>
  );
}
