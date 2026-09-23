import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";
import { RelatedGlossaryTerms } from "@/components/RelatedGlossaryTerms";
import { buildMetadata } from "@/lib/metadata";
import { PERSON_REF } from "@/lib/brand";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "Deep Audit + Action Plan | Slobodan Jelisavac — PPC Analysis"
      : "Deep Audit + Action Plan - Google Ads Audit | Slobodan Jelisavac",
    description: isEn
      ? "Deep Audit + Action Plan reveals where you're losing money and how to improve ROAS. I analyze every campaign personally — 10+ years of senior experience, prioritized recommendations. £750 (UK), €750 (EU), $1,500 (US)."
      : "Deep Audit + Action Plan: profesionalni audit koji otkriva gde gubite novac u Google oglašavanju i kako poboljšati ROAS. Detaljnu analizu radim lično - 10+ godina iskustva, cena €450.",
    locale,
    path: "/services/google-ads-audit",
    srPath: "/usluge/google-ads-audit",
  });
}

export default async function GoogleAdsAuditPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";

  const ctaLabel = isEn ? "Schedule a Deep Audit" : "Zakažite Deep Audit";

  // Cene audita po regionu, odluka Slobe 13.9.2026 (potvrđena 22.9.2026).
  // SR ostaje jedinstveno €450 (routing.pathnames drži /sr i /en odvojeno).
  const regionPrices = [
    { region: "UK", price: "£750" },
    { region: "EU", price: "€750" },
    { region: "AUS", price: "$1,200 AUD" },
    { region: "US", price: "$1,500" }
  ];

  const problems = isEn ? [
    {
      title: "Not sure the account is actually working",
      description:
        "Reports arrive, but they don't tell you what the metrics mean for profit or what needs to change."
    },
    {
      title: "Costs rising, results stagnating",
      description:
        "CPC is climbing, ROAS is falling, and neither the cause nor the fix are clear. Campaigns run, but profit doesn't follow."
    },
    {
      title: "You need a second opinion",
      description:
        "Planning a bigger budget or a switch in agencies, and want a check before you decide."
    }
  ] : [
    {
      title: "Ne znate da li nalog stvarno radi kako treba",
      description:
        "Izveštaji stižu, ali vam ne daju jasnu sliku šta metrike znače za profit ni šta bi trebalo da se promeni."
    },
    {
      title: "Troškovi rastu, rezultati stagniraju",
      description:
        "CPC raste, ROAS pada, a uzrok i rešenje nisu jasni. Kampanje rade, ali profit ne prati."
    },
    {
      title: "Treba vam second opinion",
      description:
        "Planirate veći budžet ili promenu agencije i želite proveru pre nego što odlučite."
    }
  ];

  const deliverables = isEn ? [
    "Prioritized recommendations - Quick Wins and Long-term, ranked by impact on profit, not alphabetically.",
    "Analysis of account structure, bidding strategies, conversion tracking and, for eCommerce, the Shopping/PMax feed.",
    "Screenshots of the actual issues and concrete action items - not generic advice you already know.",
    "A video walkthrough (optional) and a live call for questions."
  ] : [
    "Prioritizovane preporuke - Quick Wins i Long-term, rangirano po uticaju na profit, ne po abecedi.",
    "Analizu strukture naloga, bidding strategija, conversion trackinga i, za eCommerce, Shopping/PMax feed-a.",
    "Screenshot-ove problema i konkretne action items - ne opšte savete koje već znate.",
    "Video walkthrough (opciono) i live poziv za pitanja i nejasnoće."
  ];

  const processSteps = isEn ? [
    {
      number: 1,
      title: "Access and kickoff call",
      description:
        "Read-only access to Google Ads and GA4, plus a short call about goals and priorities."
    },
    {
      number: 2,
      title: "In-depth analysis",
      description:
        "I go through structure, search terms, bidding, tracking, and competition myself - not an automated tool that just spits out numbers."
    },
    {
      number: 3,
      title: "Report and presentation",
      description:
        "A written, prioritized plan, plus an optional video walkthrough and live Q&A call."
    }
  ] : [
    {
      number: 1,
      title: "Pristup i kickoff poziv",
      description:
        "Read-only pristup Google Ads i GA4 nalogu, plus kratak poziv o ciljevima i prioritetima."
    },
    {
      number: 2,
      title: "Dubinska analiza",
      description:
        "Prolazim strukturu, search termine, bidding, tracking i konkurenciju lično - ne automatizovan alat koji samo izbacuje brojke."
    },
    {
      number: 3,
      title: "Izveštaj i prezentacija",
      description:
        "Pisan plan sa prioritetima, uz opcioni video walkthrough i live poziv za pitanja."
    }
  ];

  const faqs = isEn ? [
    {
      question: "Do you need access to my Google Ads account?",
      answer:
        "Yes, I need read-only access (Viewer role). I don't change anything in your account without your approval — the audit is purely analytical."
    },
    {
      question: "How much does the Deep Audit + Action Plan cost?",
      answer:
        "£750 (UK), €750 (EU), $1,200 AUD (Australia), or $1,500 (US) — for accounts spending upward of roughly $5,000/month. Larger or multi-channel accounts get custom pricing on request. It's a one-time fee, credited toward your first month of management if we start within 30 days."
    },
    {
      question: "What if I want you to take over management after the audit?",
      answer:
        "The audit fee is credited toward your first month of management if we decide to work together within 30 days. The audit gives me a complete picture of your account before taking over."
    },
    {
      question: "What's the difference between an audit from an agency and an independent consultant?",
      answer:
        "An agency audit often doubles as a sales pitch for their own management service. My audit is independent — I have no incentive to recommend unnecessary changes, and you can take the report to any agency or your in-house team."
    },
    {
      question: "Do you audit accounts with small ad budgets?",
      answer:
        "The audit pays off from roughly $5,000 in monthly spend upward. For smaller budgets, a consultation session is usually the better starting point — I'll tell you honestly which fits."
    },
    {
      question: "What if I just want a quick check before a full audit?",
      answer:
        "There's a free 15-minute video review for qualified accounts — a lighter, teaser-level look, not a full plan."
    }
  ] : [
    {
      question: "Da li mi treba pristup Google Ads nalogu?",
      answer:
        "Da, treba mi read-only pristup (Viewer role). Ne menjam ništa u nalogu bez vašeg odobrenja - audit je čisto analitički."
    },
    {
      question: "Koliko košta Deep Audit + Action Plan?",
      answer:
        "€450, za naloge sa mesečnim spend-om od oko €5.000 naviše. Veći ili multi-channel nalozi dobijaju cenu na upit. Jednokratna je i uračunava se u prvi mesec upravljanja ako krenemo u saradnju u roku od 30 dana."
    },
    {
      question: "Šta ako želim da preuzmete upravljanje posle audita?",
      answer:
        "Cena audita se uračunava u prvi mesec upravljanja ako se odlučite za saradnju u roku od 30 dana. Audit mi daje kompletnu sliku vašeg naloga pre preuzimanja."
    },
    {
      question: "Koja je razlika između audita od agencije i nezavisnog konsultanta?",
      answer:
        "Audit od agencije često je i prodajni pitch za njihovu uslugu upravljanja. Moj audit je nezavisan - nemam interes da preporučim nepotrebne izmene, a izveštaj možete odneti bilo kojoj agenciji ili internom timu."
    },
    {
      question: "Da li radite audit i za male ad budžete?",
      answer:
        "Audit se isplati od oko €5.000 mesečnog spend-a naviše. Za manje budžete konsultacija je obično isplativiji početak - reći ću vam iskreno šta vam više odgovara."
    },
    {
      question: "Šta ako mi treba samo brza provera pre punog audita?",
      answer:
        "Za to postoji besplatan 15-minutni video pregled za kvalifikovane naloge - lakši, teaser nivo, ne kompletan plan."
    }
  ];

  const serviceSchema = isEn ? {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Deep Audit + Action Plan",
    description:
      "Professional Google Ads account audit with prioritized recommendations for performance improvement. Analysis of structure, bidding strategies, conversion tracking, and identification of opportunities to increase ROAS.",
    provider: PERSON_REF,
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Germany" }
    ],
    serviceType: "Google Ads Audit",
    offers: [
      {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "1500",
        eligibleRegion: { "@type": "Country", name: "United States" },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "1500",
          priceCurrency: "USD",
          description: "Deep Audit + Action Plan, $1,500 (US), credited toward your first month of management if we start within 30 days."
        }
      },
      {
        "@type": "Offer",
        priceCurrency: "GBP",
        price: "750",
        eligibleRegion: { "@type": "Country", name: "United Kingdom" },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "750",
          priceCurrency: "GBP",
          description: "Deep Audit + Action Plan, £750 (UK), credited toward your first month of management if we start within 30 days."
        }
      },
      {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "750",
        eligibleRegion: { "@type": "Country", name: "Germany" },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "750",
          priceCurrency: "EUR",
          description: "Deep Audit + Action Plan, €750 (EU), credited toward your first month of management if we start within 30 days."
        }
      },
      {
        "@type": "Offer",
        priceCurrency: "AUD",
        price: "1200",
        eligibleRegion: { "@type": "Country", name: "Australia" },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "1200",
          priceCurrency: "AUD",
          description: "Deep Audit + Action Plan, $1,200 AUD (Australia), credited toward your first month of management if we start within 30 days."
        }
      }
    ]
  } : {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Deep Audit + Action Plan",
    description:
      "Profesionalni audit Google Ads naloga sa prioritetnim preporukama za poboljšanje performansi. Analiza strukture, bidding strategija, conversion tracking-a i identifikacija prilika za povećanje ROAS-a.",
    provider: PERSON_REF,
    areaServed: [
      { "@type": "Country", name: "Serbia" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Croatia" }
    ],
    serviceType: "Google Ads Audit",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "450",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "450",
        priceCurrency: "EUR",
        description: "Deep Audit + Action Plan od €450, uračunava se u prvi mesec upravljanja ako krenemo u saradnju u roku od 30 dana."
      }
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEn ? "Home" : "Početna",
        item: "https://www.slobodan-jelisavac.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEn ? "Services" : "Usluge",
        item: isEn ? "https://www.slobodan-jelisavac.com/en/services" : "https://www.slobodan-jelisavac.com/sr/usluge"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Deep Audit + Action Plan",
        item: isEn ? "https://www.slobodan-jelisavac.com/en/services/google-ads-audit" : "https://www.slobodan-jelisavac.com/sr/usluge/google-ads-audit"
      }
    ]
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero — kome je namenjeno, šta se dešava kad me angažujete, jedan dokaz */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {isEn ? "Home" : "Početna"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/usluge" className="hover:text-white transition-colors">
                  {isEn ? "Services" : "Usluge"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-accent font-medium">Deep Audit + Action Plan</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                {isEn
                  ? "Deep Audit + Action Plan — I'll find where your account is losing money"
                  : "Deep Audit + Action Plan - pronaći ću gde vaš nalog gubi novac"}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                {isEn ? (
                  <>
                    If you&apos;re spending more than $5,000 a month on Google Ads and can&apos;t
                    tell where the budget disappears, this is for you — below that spend, a
                    consultation session is usually the better start. You get read-only access to
                    the account and a short call about goals, then I go through structure, search
                    terms, tracking, and margins myself — not a tool that just spits out metrics.
                    What comes back is a written, prioritized plan: what to kill, what to scale,
                    and what actually moves profit. Across the accounts I manage, average ROAS
                    runs at 3.7x for eCommerce — the audit applies the same lens to yours.
                  </>
                ) : (
                  <>
                    Ako mesečno trošite više od €5.000 na Google Ads i niste sigurni gde tačno
                    odlazi budžet, audit je za vas - ispod te cifre se obično više isplati
                    konsultacija. Angažovanjem dobijate read-only pristup nalogu i kratak poziv o
                    ciljevima, pa lično prolazim strukturu, search termine, tracking i marže - ne
                    alat koji samo izbacuje metrike. Rezultat je pisan plan sa prioritetima: šta
                    gasiti, šta pojačati, šta zapravo pomera profit. U nalozima koje vodim
                    prosečan ROAS je 3.7x za eCommerce - audit primenjuje istu logiku na vaš nalog.
                  </>
                )}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/kontakt" variant="secondary">
                  {ctaLabel}
                </Button>
                <Link
                  href="/usluge/google-ads-upravljanje"
                  className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
                >
                  {isEn ? "Or check out management services →" : "Ili pogledajte uslugu upravljanja →"}
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
                <span>{isEn ? "10+ years of experience" : "10+ godina iskustva"}</span>
                <span>3x UK Search Awards</span>
                <span>{isEn ? "50+ brands across 6+ countries" : "50+ brendova iz 6+ zemalja"}</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/foto/slobodan-jelisavac-google-ads-audit.webp"
                  alt={isEn ? "Slobodan Jelisavac taking a close look at where an account loses money" : "Slobodan Jelisavac izbliza traži gde nalog gubi novac"}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem — tri stavke */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Why owners ask for an independent audit" : "Zašto vlasnici traže nezavisan audit"}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <Card key={problem.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">{problem.title}</h3>
              <p className="text-gray-600 text-base">{problem.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Šta dobijate — numerisano */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "What you get" : "Šta dobijate"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isEn
              ? "A complete report you can implement yourself or hand to your team:"
              : "Kompletan izveštaj koji možete sami da implementirate ili predate timu:"}
          </p>
        </div>
        <ol className="max-w-2xl mx-auto space-y-4">
          {deliverables.map((item, index) => (
            <li key={item} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-card">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold font-heading">
                {index + 1}
              </span>
              <p className="text-gray-700 text-base">{item}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Dokaz — slučaj iz prakse (NDA: bez imena i apsolutnih cifara) */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {isEn ? "Proof from the field" : "Dokaz iz prakse"}
          </h2>
          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 md:p-8 text-left">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {isEn ? (
                <>
                  For one UK Shopping client, the audit uncovered structural issues in the feed
                  and bidding logic. After the changes, POAS held at <strong>1.78x</strong> across
                  more than <strong>two years</strong> of work together, on{" "}
                  <strong>six-figure revenue (GBP)</strong>. I don&apos;t share the client&apos;s name or
                  exact revenue publicly — NDA — but I apply the same approach to every account I
                  analyze.
                </>
              ) : (
                <>
                  Kod jednog UK Shopping klijenta audit je otkrio strukturne probleme u feedu i
                  bidding logici. Posle promena POAS je držan na <strong>1.78x</strong> kroz više
                  od <strong>dve godine</strong> saradnje, uz <strong>šestocifren prihod u
                  funtama</strong>. Ime klijenta i tačnu cifru prihoda ne delim javno - NDA - ali
                  istu logiku primenjujem na svaki nalog koji analiziram.
                </>
              )}
            </p>
          </div>
        </div>
      </Section>

      {/* Cena i proces — vidljivo */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Pricing and how the process works" : "Cena i kako izgleda proces"}
          </h2>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <div className="bg-white border-2 border-accent rounded-lg p-6 md:p-8 shadow-card">
            <h3 className="text-xl font-heading font-bold mb-2">Deep Audit + Action Plan</h3>
            {isEn ? (
              <div className="mb-4">
                <ul className="divide-y divide-gray-100 border border-gray-200 rounded-lg overflow-hidden">
                  {regionPrices.map((r) => (
                    <li key={r.region} className="flex items-center justify-between px-4 py-2.5">
                      <span className="text-sm font-medium text-gray-500">{r.region}</span>
                      <span className="text-lg font-heading font-bold text-primary">{r.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-3xl font-heading font-bold text-primary mb-4">€450</p>
            )}
            <p className="text-gray-600 text-base mb-4">
              {isEn ? (
                <>
                  For accounts spending upward of roughly $5,000 a month. Larger or multi-channel
                  accounts get custom pricing on request. The fee is credited toward your first
                  month of management if we start working together within 30 days. Price applies
                  to the market your business bills from.
                </>
              ) : (
                <>
                  Za naloge sa mesečnim spend-om od oko €5.000 naviše. Veći ili multi-channel
                  nalozi dobijaju cenu na upit. Cena se uračunava u prvi mesec upravljanja ako
                  krenemo u saradnju u roku od 30 dana.
                </>
              )}
            </p>
            <Button href="/kontakt" variant="secondary" className="w-full">
              {ctaLabel}
            </Button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-card"
            >
              <span
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-heading ${
                  index === processSteps.length - 1
                    ? "bg-accent text-gray-900"
                    : "bg-slate-900 text-white"
                }`}
              >
                {step.number}
              </span>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-gray-600 text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <RelatedGlossaryTerms
        slugs={["quality-score", "ad-rank", "landing-page-experience", "gtm", "ga4", "attribution-model", "conversion"]}
        locale={locale}
      />

      {/* Pitanja koja se stvarno postavljaju */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Questions people actually ask" : "Pitanja koja se stvarno postavljaju"}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="bg-white border-2 border-gray-200 rounded-xl group"
              open={index === 0 ? true : undefined}
            >
              <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
                {faq.question}
                <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
                  &#9660;
                </span>
              </summary>
              <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
                {faq.answer}
                {index === faqs.length - 1 && (
                  <>
                    {" "}
                    <Link href="/audit" className="text-primary underline">
                      {isEn ? "Book the free video review →" : "Zakažite besplatan video pregled →"}
                    </Link>
                  </>
                )}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Final CTA — dark, isti poziv na akciju treći put */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            {isEn ? "Find out exactly where you're losing money" : "Saznajte tačno gde gubite novac"}
          </h2>
          <p className="text-slate-300 mb-8">
            {isEn
              ? "Schedule a Deep Audit + Action Plan and get a written plan with concrete recommendations. No obligations."
              : "Zakažite Deep Audit + Action Plan i dobijte pisan plan sa konkretnim preporukama. Bez obaveza."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              {ctaLabel}
            </Button>
            <Link
              href="/usluge/google-ads-upravljanje"
              className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
            >
              {isEn ? "Or check out management services →" : "Ili pogledajte uslugu upravljanja →"}
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
            <Link href="/usluge/google-ads-agencija" className="hover:text-white transition-colors underline">
              {isEn ? "Google Ads Agency" : "Google Ads agencija"}
            </Link>
            <Link href="/usluge/google-ads-upravljanje" className="hover:text-white transition-colors underline">
              {isEn ? "Google Ads Account Management" : "Upravljanje Google Ads nalogom"}
            </Link>
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: isEn ? "google-ads-audit-checklist" : "google-ads-audit-vodic" } }}
              className="hover:text-white transition-colors underline"
            >
              {isEn ? "Google Ads Audit Guide" : "Google Ads audit vodič"}
            </Link>
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: isEn ? "google-ads-mistakes" : "google-ads-greske" } }}
              className="hover:text-white transition-colors underline"
            >
              {isEn ? "Common Google Ads Mistakes" : "Najčešće Google Ads greške"}
            </Link>
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: isEn ? "what-is-roas" : "sta-je-roas" } }}
              className="hover:text-white transition-colors underline"
            >
              {isEn ? "What is ROAS?" : "Šta je ROAS i kako ga meriti?"}
            </Link>
            <Link href="/" className="hover:text-white transition-colors underline">
              {isEn ? "Google Ads Consulting" : "Google Ads Srbija"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
