import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ChatgptAdsChart } from "./ChatgptAdsChart";
import { PERSON_REF } from "@/lib/brand";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

const SLUG = "chatgpt-ads-search-demand-2026";
const BASE_URL = "https://www.slobodan-jelisavac.com";
const CANONICAL = `${BASE_URL}/en/insights/${SLUG}`;
const RAW_DATA_PATH = `/insights/${SLUG}/keyword-planner-48m-2026-09-17.json`;
const RAW_DATA_URL = `${BASE_URL}${RAW_DATA_PATH}`;

// Talas 6, samo EN: jedan izvestaj za sada, generateStaticParams vraca samo
// njega + en. SR se preusmerava na next.config.ts nivou, notFound() ispod je
// fallback ako nesto promasi preusmerenje.
export function generateStaticParams() {
  return [{ locale: "en", slug: SLUG }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== SLUG) return {};

  const title = "ChatGPT Ads Searches Rose At Least 13x In A Year (US/UK/DE)";
  const description =
    'Keyword Planner, US, UK and Germany: "chatgpt ads" searches rose at least 13-fold in a year, while "chatgpt" itself rose about 2-fold or less.';

  return {
    title,
    description,
    alternates: {
      canonical: CANONICAL,
      languages: {
        en: CANONICAL,
        "x-default": CANONICAL
      }
    },
    openGraph: {
      title,
      description,
      url: CANONICAL,
      siteName: "Slobodan Jelisavac",
      locale: "en_US",
      type: "article",
      publishedTime: "2026-09-17",
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

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    'Google Searches For "ChatGPT Ads" Rose At Least 13-Fold In A Year. Searches For "ChatGPT" Rose About 2-Fold Or Less.',
  datePublished: "2026-09-17",
  dateModified: "2026-09-17",
  author: PERSON_REF,
  publisher: PERSON_REF,
  mainEntityOfPage: CANONICAL
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: '"chatgpt ads" search volume proof that ChatGPT Ads work?',
      acceptedAnswer: {
        "@type": "Answer",
        text: 'No. It shows that more people are searching the phrase. See "What this does not show" above for what it can\'t tell you.'
      }
    },
    {
      "@type": "Question",
      name: 'Why compare against "chatgpt" and not something else?',
      acceptedAnswer: {
        "@type": "Answer",
        text: '"chatgpt" separates general interest in the product from interest in advertising on it. If both grew at the same rate, the "ads" queries would just be riding the topic\'s own growth, at roughly the multiplier "chatgpt" itself shows: about 1.2x to 2.0x. Instead, "chatgpt ads" grew 13x to 31x depending on market and method, well outside that range.'
      }
    },
    {
      "@type": "Question",
      name: 'Why include "google ads" in the table?',
      acceptedAnswer: {
        "@type": "Answer",
        text: 'As a control: a stable, high-volume query with no obvious reason to move. Its median stayed in the same bucket in every market, and on the sum method it fell in the US and the UK. That argues against a tool-wide rise in high-volume queries, though small queries could still have moved for tool reasons.'
      }
    },
    {
      "@type": "Question",
      name: "When did ChatGPT Ads launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT Ads started as a US pilot on 9 February 2026 (timeline in my ChatGPT Ads guide on this site). Search growth in this data started before that date and continued after it; part of the earlier volume may reflect a different meaning of the phrase."
      }
    }
  ]
};

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: 'Google Keyword Planner search volume: "chatgpt ads" and related queries, US/UK/DE, Sep 2022-Aug 2026',
  description:
    'Monthly Google Keyword Planner search volume for "chatgpt ads", "chatgpt advertising", "openai ads", "advertise on chatgpt", "chatgpt" and "google ads" (control), in the US, UK and Germany, September 2022 through August 2026.',
  temporalCoverage: "2022-09/2026-08",
  spatialCoverage: ["US", "GB", "DE"],
  creator: PERSON_REF,
  isAccessibleForFree: true,
  measurementTechnique: "Google Keyword Planner API, GenerateKeywordHistoricalMetrics",
  distribution: {
    "@type": "DataDownload",
    encodingFormat: "application/json",
    contentUrl: RAW_DATA_URL
  }
};

const serifStyle = { fontFamily: "var(--font-source-serif-4), Georgia, serif" };

export default async function InsightsReportPage({ params }: Props) {
  const { locale, slug } = await params;
  if (locale !== "en" || slug !== SLUG) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <p className="text-sm text-gray-500 mb-3">
            <Link href="/insights" className="hover:text-primary underline">
              Insights
            </Link>
          </p>

          <h1 className="text-2xl md:text-4xl font-heading font-bold leading-tight mb-4">
            Google Searches For &quot;ChatGPT Ads&quot; Rose At Least 13-Fold In A Year. Searches For &quot;ChatGPT&quot;
            Rose About 2-Fold Or Less.
          </h1>

          <p className="text-sm text-gray-500 mb-1">
            <strong>US, UK, DE. September 2022 to August 2026. Google Keyword Planner. 17 September 2026.</strong>
          </p>
          <p className="text-sm text-gray-500 italic mb-8">Published 17 September 2026 by Slobodan Jelisavac</p>

          <article style={serifStyle} className="text-gray-800 lg:max-w-[57ch] mx-auto">
            <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 mb-10 not-italic" style={{ fontFamily: "inherit" }}>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3" style={{ fontFamily: "var(--font-inter)" }}>
                Key finding
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-0">
                Comparing September 2025-August 2026 to the twelve months before it, Google searches for &quot;chatgpt
                ads&quot; rose at least 13-fold in the US, the UK and Germany: 18.9x in the US, 24.0x in the UK, 13.4x in
                Germany, the lowest of three counting methods I ran in each market. Searches for &quot;chatgpt&quot;
                itself rose at most about 2-fold over the same period: 2.0x in the US, 1.8x in the UK, 1.5x in
                Germany.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">The numbers</h2>
            <p className="mb-5 leading-[1.75]">
              Three markets. For each one, each table shows the multiplier for the median method (M1), plus the
              range across all three methods I ran (M1, M2, M3 - see Methodology).
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">US</h3>
            <div className="overflow-x-auto my-6 not-italic" style={{ fontFamily: "var(--font-inter)" }}>
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-900 bg-gray-50">
                    <th className="py-3 px-3 font-heading font-semibold">Query</th>
                    <th className="py-3 px-3 font-heading font-semibold">Median/mo, Sep24-Aug25</th>
                    <th className="py-3 px-3 font-heading font-semibold">Median/mo, Sep25-Aug26</th>
                    <th className="py-3 px-3 font-heading font-semibold">Multiplier (M1)</th>
                    <th className="py-3 px-3 font-heading font-semibold">Range across M1-M3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3">chatgpt ads</td>
                    <td className="py-3 px-3">800</td>
                    <td className="py-3 px-3">15,100</td>
                    <td className="py-3 px-3">18.9x</td>
                    <td className="py-3 px-3">18.9x-20.6x</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="py-3 px-3">openai ads</td>
                    <td className="py-3 px-3">260</td>
                    <td className="py-3 px-3">3,900</td>
                    <td className="py-3 px-3">15.0x</td>
                    <td className="py-3 px-3">14.6x-25.4x</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3">advertise on chatgpt</td>
                    <td className="py-3 px-3">90</td>
                    <td className="py-3 px-3">1,150</td>
                    <td className="py-3 px-3">12.8x</td>
                    <td className="py-3 px-3">8.8x-14.4x</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="py-3 px-3">chatgpt</td>
                    <td className="py-3 px-3">61,800,000</td>
                    <td className="py-3 px-3">124,000,000</td>
                    <td className="py-3 px-3">2.0x</td>
                    <td className="py-3 px-3">1.2x-2.0x</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3">google ads (control)</td>
                    <td className="py-3 px-3">550,000</td>
                    <td className="py-3 px-3">550,000</td>
                    <td className="py-3 px-3">1.0x</td>
                    <td className="py-3 px-3">0.7x-1.0x</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-5 leading-[1.75]">
              &quot;chatgpt ads&quot; grew at least 18.9x on every method I ran. &quot;chatgpt&quot; grew at most 2.0x.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">UK</h3>
            <div className="overflow-x-auto my-6 not-italic" style={{ fontFamily: "var(--font-inter)" }}>
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-900 bg-gray-50">
                    <th className="py-3 px-3 font-heading font-semibold">Query</th>
                    <th className="py-3 px-3 font-heading font-semibold">Median/mo, Sep24-Aug25</th>
                    <th className="py-3 px-3 font-heading font-semibold">Median/mo, Sep25-Aug26</th>
                    <th className="py-3 px-3 font-heading font-semibold">Multiplier (M1)</th>
                    <th className="py-3 px-3 font-heading font-semibold">Range across M1-M3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3">chatgpt ads</td>
                    <td className="py-3 px-3">100</td>
                    <td className="py-3 px-3">2,400</td>
                    <td className="py-3 px-3">24.0x</td>
                    <td className="py-3 px-3">24.0x-31.4x</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="py-3 px-3">openai ads</td>
                    <td className="py-3 px-3">30</td>
                    <td className="py-3 px-3">480</td>
                    <td className="py-3 px-3">16.0x</td>
                    <td className="py-3 px-3">12.8x-18.0x</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3">advertise on chatgpt</td>
                    <td className="py-3 px-3">20</td>
                    <td className="py-3 px-3">140</td>
                    <td className="py-3 px-3">7.0x</td>
                    <td className="py-3 px-3">6.5x-7.6x</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="py-3 px-3">chatgpt</td>
                    <td className="py-3 px-3">15,100,000</td>
                    <td className="py-3 px-3">27,650,000</td>
                    <td className="py-3 px-3">1.8x</td>
                    <td className="py-3 px-3">1.2x-1.8x</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3">google ads (control)</td>
                    <td className="py-3 px-3">165,000</td>
                    <td className="py-3 px-3">165,000</td>
                    <td className="py-3 px-3">1.0x</td>
                    <td className="py-3 px-3">0.9x-1.0x</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-5 leading-[1.75]">
              &quot;chatgpt ads&quot; grew at least 24.0x on every method I ran. &quot;chatgpt&quot; grew at most 1.8x.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">DE</h3>
            <div className="overflow-x-auto my-6 not-italic" style={{ fontFamily: "var(--font-inter)" }}>
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-900 bg-gray-50">
                    <th className="py-3 px-3 font-heading font-semibold">Query</th>
                    <th className="py-3 px-3 font-heading font-semibold">Median/mo, Sep24-Aug25</th>
                    <th className="py-3 px-3 font-heading font-semibold">Median/mo, Sep25-Aug26</th>
                    <th className="py-3 px-3 font-heading font-semibold">Multiplier (M1)</th>
                    <th className="py-3 px-3 font-heading font-semibold">Range across M1-M3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3">chatgpt ads</td>
                    <td className="py-3 px-3">70</td>
                    <td className="py-3 px-3">940</td>
                    <td className="py-3 px-3">13.4x</td>
                    <td className="py-3 px-3">13.4x-19.5x</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="py-3 px-3">chatgpt werbung</td>
                    <td className="py-3 px-3">40</td>
                    <td className="py-3 px-3">210</td>
                    <td className="py-3 px-3">5.3x</td>
                    <td className="py-3 px-3">5.2x-13.7x</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3">openai ads</td>
                    <td className="py-3 px-3">20</td>
                    <td className="py-3 px-3">260</td>
                    <td className="py-3 px-3">13.0x</td>
                    <td className="py-3 px-3">13.0x-13.7x</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50/50">
                    <td className="py-3 px-3">chatgpt</td>
                    <td className="py-3 px-3">18,500,000</td>
                    <td className="py-3 px-3">24,900,000</td>
                    <td className="py-3 px-3">1.3x</td>
                    <td className="py-3 px-3">1.2x-1.5x</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3">google ads (control)</td>
                    <td className="py-3 px-3">135,000</td>
                    <td className="py-3 px-3">135,000</td>
                    <td className="py-3 px-3">1.0x</td>
                    <td className="py-3 px-3">flat (0% on M1, M2 and M3)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-5 leading-[1.75]">
              &quot;chatgpt ads&quot; grew at least 13.4x on every method I ran (the lowest figure of all three
              markets). &quot;chatgpt&quot; grew at most 1.5x.
            </p>

            <p className="mb-5 leading-[1.75]">
              On the lowest of the three methods in each market, &quot;chatgpt ads&quot; still rose 18.9x in the US,
              24.0x in the UK and 13.4x in Germany. On the highest, &quot;chatgpt&quot; rose 2.0x, 1.8x and 1.5x.
            </p>

            <ChatgptAdsChart />

            <p className="mb-5 leading-[1.75]">
              &quot;google ads&quot; sits in the table as a control: a mature, high-volume query with no obvious
              reason to move. Its median stayed inside the same volume bucket in all three markets on M1 and M2. On
              the sum method (M3) it fell 31% in the US and 10% in the UK, and stayed flat in Germany. That argues
              against a tool-wide rise in high-volume queries, though small queries could still have moved for tool
              reasons.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">What this means</h2>
            <p className="mb-5 leading-[1.75]">
              <strong>If you own a business:</strong> people are typing &quot;chatgpt ads&quot; into Google far more
              than a year ago. That&apos;s a sign of curiosity about the channel, across three markets. Whether it
              fits your product and margin is something only a test in your own market would show.
            </p>
            <p className="mb-5 leading-[1.75]">
              <strong>If you run ads for a living:</strong> the volume is still small next to Google Ads itself.
              15,100 median monthly searches for &quot;chatgpt ads&quot; in the US against 550,000 for &quot;google
              ads&quot; is under 3% of it. What moved is the slope, not the size. A pattern like this, holding across
              three markets and three counting methods, is worth tracking before it shows up in a client brief.
            </p>
            <p className="mb-5 leading-[1.75]">
              Neither reading is a service recommendation, and this report doesn&apos;t price a pilot or promise a
              return.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">What this does not show</h2>
            <p className="mb-5 leading-[1.75]">
              Someone searching &quot;chatgpt ads&quot; might be planning a campaign. They might also be asking
              whether ChatGPT itself carries ads, looking up a competitor&apos;s spend, or researching a blog post
              like this one. Keyword Planner counts the query, not the intent behind it.
            </p>
            <p className="mb-5 leading-[1.75]">
              Before February 2026 there was no ads product to search for, so part of the earlier volume in this
              data is likely people looking for ads made with ChatGPT, or for ChatGPT&apos;s own marketing. The
              comparison mixes both meanings, and this report can&apos;t separate them.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Methodology</h2>
            <p className="mb-5 leading-[1.75]">
              Three ways of cutting the same 24 months, so the result doesn&apos;t depend on one choice of statistic
              or window:
            </p>
            <ul className="list-disc pl-5 mb-5 leading-[1.75] space-y-2">
              <li>
                <strong>M1 (median, Sep-Aug):</strong> median monthly volume for September 2024 through August
                2025, against September 2025 through August 2026.
              </li>
              <li>
                <strong>M2 (median, Dec-Aug):</strong> the same comparison starting in December, so the three
                months around the September-October 2025 jump don&apos;t pull the medians (see Limitations for what
                this jump is and isn&apos;t).
              </li>
              <li>
                <strong>M3 (sum, Sep-Aug):</strong> the twelve-month total for each window, same boundaries as M1,
                to check the median isn&apos;t hiding a skewed distribution.
              </li>
            </ul>
            <p className="mb-5 leading-[1.75]">
              The three cuts show the direction holds whichever statistic you pick. Bucket noise stays in all three.
              Read M2 as a sensitivity check on M1 and M3 (see Limitations).
            </p>
            <p className="mb-5 leading-[1.75]">
              Keyword Planner reports volume as bucketed ranges. Above about 100 searches a month, one bucket step
              is roughly 20 to 25%. Below that, steps are as small as 10 searches, so a move from 20 to 30 shows as
              +50% on paper. The rows with the lowest starting volume - UK &quot;advertise on chatgpt&quot;, UK
              &quot;openai ads&quot;, DE &quot;openai ads&quot;, DE &quot;chatgpt werbung&quot; - carry the most of
              that noise.
            </p>
            <p className="mb-5 leading-[1.75]">
              &quot;chatgpt advertising&quot; returned numbers identical to &quot;chatgpt ads&quot; in the US and the
              UK (not pulled for Germany). Keyword Planner treats them as the same demand bucket, so this report
              states the finding once, with this note about the merge, instead of double-counting it.
            </p>
            <p className="mb-5 leading-[1.75]">
              All queries pulled from one Google Ads account (CID 1649397392), Keyword Planner network, Google
              Search only. Geo and language: US (geo 2840, English), UK (geo 2826, English), Germany (geo 2276,
              German). Pull date: 17 September 2026.
            </p>
            <p className="mb-5 leading-[1.75]">
              <a href={RAW_DATA_PATH} className="underline hover:text-primary">
                Download the raw data (JSON)
              </a>
              : the full 48-month series behind every number on this page, one query per key, per market.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Limitations</h2>
            <p className="mb-5 leading-[1.75]">
              <strong>Why this report says nothing about agency searches.</strong> I first tried to measure searches
              for &quot;chatgpt ads agency&quot; and similar phrases; the pattern failed to hold: it broke on exact
              phrasing, shifted when a close variant like &quot;ppc company&quot; was added, and depended on which
              twelve-month window was chosen. Underneath that sits a step change in September and October 2025 that
              hit the agency-related queries I tested, in all three markets, at the same time. That pattern points
              to a change inside the tool. I&apos;m not publishing conclusions about agency-related searches until
              that pattern is confirmed against a source outside Keyword Planner.
            </p>
            <p className="mb-5 leading-[1.75]">
              That same jump sits between the two windows compared here, and &quot;chatgpt ads&quot; moves through
              it: from August to October 2025 it went from 1,000 to 4,400 in the US, 260 to 1,300 in the UK and 140
              to 390 in Germany. A tool change can inflate the multiples in this report, but the rise had started
              well before the jump: between September 2024 and August 2025, &quot;chatgpt ads&quot; already went
              from 210 to 1,000 in the US, 30 to 260 in the UK and 20 to 140 in Germany. M2 keeps September to
              November 2025 out of both medians, but its two windows still sit on either side of the jump, so any
              tool change shows up in M2 too.
            </p>
            <p className="mb-5 leading-[1.75]">
              Queries under 100 searches a month carry more bucket noise than the headline numbers, on all three
              cuts.
            </p>
            <p className="mb-5 leading-[1.75]">
              <strong>Disclosure:</strong> I manage Google Ads accounts for clients and offer ChatGPT Ads
              management, so I have a commercial interest in this channel. This report counts searches and
              recommends neither service.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Full data</h2>
            <div className="overflow-x-auto my-6 not-italic" style={{ fontFamily: "var(--font-inter)" }}>
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-900 bg-gray-50">
                    <th className="py-3 px-3 font-heading font-semibold">Market</th>
                    <th className="py-3 px-3 font-heading font-semibold">Query</th>
                    <th className="py-3 px-3 font-heading font-semibold">Avg/mo (48-month mean, Sep22-Aug26)</th>
                    <th className="py-3 px-3 font-heading font-semibold">M1 change</th>
                    <th className="py-3 px-3 font-heading font-semibold">M2 change</th>
                    <th className="py-3 px-3 font-heading font-semibold">M3 change</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["US", "chatgpt ads", "3,722", "+1,788%", "+1,957%", "+1,837%"],
                    ["US", "openai ads", "1,102", "+1,400%", "+2,439%", "+1,363%"],
                    ["US", "advertise on chatgpt", "279", "+1,178%", "+1,344%", "+777%"],
                    ["US", "chatgpt", "58,631,808", "+101%", "+23%", "+68%"],
                    ["US", "google ads", "550,188", "0%", "0%", "-31%"],
                    ["UK", "chatgpt ads", "906", "+2,300%", "+3,043%", "+2,427%"],
                    ["UK", "openai ads", "168", "+1,500%", "+1,700%", "+1,179%"],
                    ["UK", "advertise on chatgpt", "68", "+600%", "+550%", "+661%"],
                    ["UK", "chatgpt", "13,444,898", "+83%", "+22%", "+74%"],
                    ["UK", "google ads", "165,000", "0%", "0%", "-10%"],
                    ["DE", "chatgpt ads", "406", "+1,243%", "+1,344%", "+1,847%"],
                    ["DE", "chatgpt werbung", "173", "+425%", "+420%", "+1,265%"],
                    ["DE", "openai ads", "92", "+1,200%", "+1,200%", "+1,266%"],
                    ["DE", "chatgpt", "13,768,373", "+35%", "+22%", "+54%"],
                    ["DE", "google ads", "127,292", "0%", "0%", "0%"]
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-gray-200 ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                      {row.map((cell, j) => (
                        <td key={j} className="py-3 px-3">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mb-5 leading-[1.75]">
              <strong>Ratio of query growth to &quot;chatgpt&quot; growth (% change of the query divided by % change
              of &quot;chatgpt&quot;, same method):</strong>
            </p>
            <div className="overflow-x-auto my-6 not-italic" style={{ fontFamily: "var(--font-inter)" }}>
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-900 bg-gray-50">
                    <th className="py-3 px-3 font-heading font-semibold">Market</th>
                    <th className="py-3 px-3 font-heading font-semibold">Query</th>
                    <th className="py-3 px-3 font-heading font-semibold">M1</th>
                    <th className="py-3 px-3 font-heading font-semibold">M2</th>
                    <th className="py-3 px-3 font-heading font-semibold">M3</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["US", "chatgpt ads", "17.8x", "85.9x (see note)", "27.0x"],
                    ["US", "openai ads", "13.9x", "107.1x (see note)", "20.0x"],
                    ["US", "advertise on chatgpt", "11.7x", "59.0x (see note)", "11.4x"],
                    ["UK", "chatgpt ads", "27.7x", "137.9x (see note)", "33.0x"],
                    ["UK", "openai ads", "18.0x", "77.1x (see note)", "16.0x"],
                    ["UK", "advertise on chatgpt", "7.2x", "24.9x (see note)", "9.0x"],
                    ["DE", "chatgpt ads", "35.9x", "60.9x (see note)", "34.1x"],
                    ["DE", "chatgpt werbung", "12.3x", "19.0x (see note)", "23.3x"],
                    ["DE", "openai ads", "34.7x", "54.4x (see note)", "23.3x"]
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-gray-200 ${i % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                      {row.map((cell, j) => (
                        <td key={j} className="py-3 px-3">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mb-5 leading-[1.75]">
              Note on M2 ratios: on M2, &quot;chatgpt&quot; itself grows by close to one bucket step in every market
              (US +22.8%, UK +22.1%, DE +22.1%, all driven by the same single Keyword Planner bucket move). Dividing
              by a number that small inflates the ratio. The M2 ratios above are a sensitivity artifact of that
              denominator. None of them appear in the title, key finding or meta tags.
            </p>
            <p className="mb-5 leading-[1.75]">
              Full monthly series, 48 months per query:{" "}
              <a href={RAW_DATA_PATH} className="underline hover:text-primary">
                download JSON
              </a>
              .
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6" id="faq">
              FAQ
            </h2>

            <div className="space-y-3 my-6 not-italic" style={{ fontFamily: "var(--font-inter)" }}>
              <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
                <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
                  Is &quot;chatgpt ads&quot; search volume proof that ChatGPT Ads work?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
                </summary>
                <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
                  <p className="mb-0">
                    No. It shows that more people are searching the phrase. See &quot;What this does not show&quot;
                    above for what it can&apos;t tell you.
                  </p>
                </div>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-xl group">
                <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
                  Why compare against &quot;chatgpt&quot; and not something else?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
                </summary>
                <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
                  <p className="mb-0">
                    &quot;chatgpt&quot; separates general interest in the product from interest in advertising on it.
                    If both grew at the same rate, the &quot;ads&quot; queries would just be riding the topic&apos;s
                    own growth, at roughly the multiplier &quot;chatgpt&quot; itself shows: about 1.2x to 2.0x.
                    Instead, &quot;chatgpt ads&quot; grew 13x to 31x depending on market and method, well outside
                    that range.
                  </p>
                </div>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-xl group">
                <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
                  Why include &quot;google ads&quot; in the table?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
                </summary>
                <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
                  <p className="mb-0">
                    As a control: a stable, high-volume query with no obvious reason to move. Its median stayed in
                    the same bucket in every market, and on the sum method it fell in the US and the UK. That
                    argues against a tool-wide rise in high-volume queries, though small queries could still have
                    moved for tool reasons.
                  </p>
                </div>
              </details>

              <details className="bg-white border-2 border-gray-200 rounded-xl group">
                <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
                  When did ChatGPT Ads launch?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
                </summary>
                <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
                  <p className="mb-0">
                    ChatGPT Ads started as a US pilot on 9 February 2026 (timeline in my{" "}
                    <Link
                      href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-guide" } }}
                      className="underline hover:text-primary"
                    >
                      ChatGPT Ads guide
                    </Link>{" "}
                    on this site). Search growth in this data started before that date and continued after it; part
                    of the earlier volume may reflect a different meaning of the phrase (see &quot;What this does
                    not show&quot;).
                  </p>
                </div>
              </details>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
