import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";

type Props = {
  params: Promise<{ locale: string }>;
};

// Talas 6, samo EN: nema SR verzije ove sekcije, /sr/insights se preusmerava
// u next.config.ts pre nego ova stranica i probni notFound() ovde dodju u igru.
export function generateStaticParams() {
  return [{ locale: "en" }];
}

const BASE_URL = "https://www.slobodan-jelisavac.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};

  const title = "Insights | Slobodan Jelisavac";
  const description =
    "Original data reports on search demand and Google Ads, built from raw Keyword Planner and account data, with every number sourced.";

  return {
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/en/insights`,
      languages: {
        en: `${BASE_URL}/en/insights`,
        "x-default": `${BASE_URL}/en/insights`
      }
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/en/insights`,
      siteName: "Slobodan Jelisavac",
      locale: "en_US",
      type: "website",
      images: [{ url: `${BASE_URL}/og/homepage.png`, width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/og/homepage.png`]
    }
  };
}

const reports = [
  {
    slug: "chatgpt-ads-search-demand-2026",
    title:
      'Google Searches For "ChatGPT Ads" Rose At Least 13-Fold In A Year. Searches For "ChatGPT" Rose About 2-Fold Or Less.',
    date: "2026-09-17",
    dateLabel: "17 September 2026",
    keyFinding:
      'Comparing September 2025-August 2026 to the twelve months before it, Google searches for "chatgpt ads" rose at least 13-fold in the US, the UK and Germany, while searches for "chatgpt" itself rose at most about 2-fold over the same period.'
  }
];

export default async function InsightsIndexPage({ params }: Props) {
  const { locale } = await params;
  if (locale !== "en") notFound();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Insights</h1>
        <p className="text-gray-700 text-base md:text-lg mb-10 leading-relaxed">
          Original data reports built from raw Keyword Planner and Google Ads account data. Every
          number has a source, and every report says plainly what it does not show.
        </p>

        <div className="space-y-6">
          {reports.map((report) => (
            <Link
              key={report.slug}
              href={{ pathname: "/insights/[slug]", params: { slug: report.slug } }}
              className="block bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
            >
              <p className="text-sm text-gray-500 mb-2">{report.dateLabel}</p>
              <h2 className="text-xl md:text-2xl font-heading font-semibold mb-3 text-gray-900">
                {report.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-0">{report.keyFinding}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
