import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "Google Search Ads Management | High-Intent PPC Campaigns — Slobodan Jelisavac"
      : "Google Search kampanje Srbija | Stručnjak za PPC - Slobodan Jelisavac",
    description: isEn
      ? "Expert Google Search campaign management for B2B and eCommerce. High-intent keyword strategy, conversion-focused ad copy, and Quality Score optimization. Free consultation."
      : "Profesionalne Google Search kampanje za B2B i eCommerce. Keyword strategija, ad copy, bid optimizacija. Besplatna konsultacija.",
    locale,
    path: "/services/search-campaigns",
    srPath: "/usluge/search-kampanje",
  });
}

export default async function SearchKampanjePage({ params }: Props) {
  const { locale } = await params;

  const problems = locale === "en" ? [
    {
      title: "Poor campaign structure",
      description:
        "All keywords in one ad group lead to low Quality Score and high CPC."
    },
    {
      title: "Uncontrolled broad match",
      description:
        "Without negative keywords, you're wasting budget on irrelevant searches."
    },
    {
      title: "Generic ad copy",
      description:
        "Same ad for all keywords means low CTR and poor relevance."
    },
    {
      title: "Set and forget mentality",
      description:
        "Campaign was set up months ago and nobody is optimizing it."
    }
  ] : [
    {
      title: "Pogrešna struktura kampanja",
      description:
        "Sve ključne reči u jednoj ad grupi dovode do niskog Quality Score-a i visokog CPC-a."
    },
    {
      title: "Broad match bez kontrole",
      description:
        "Bez negativne liste trošite budžet na irelevantne pretrage."
    },
    {
      title: "Generic ad copy",
      description:
        "Isti oglas za sve ključne reči znači nizak CTR i slabu relevantnost."
    },
    {
      title: "Set and forget mentalitet",
      description:
        "Kampanja je podešena pre meseci i niko je ne optimizuje."
    }
  ];

  const inclusions = locale === "en" ? [
    {
      title: "Setup & structure",
      items: [
        "Keyword research",
        "Campaign and ad group structure",
        "Negative keywords",
        "Ad copy writing",
        "Extensions setup"
      ]
    },
    {
      title: "Ongoing optimization",
      items: [
        "Search terms review",
        "Bid adjustments",
        "Ad copy A/B testing",
        "Quality Score optimization"
      ]
    },
    {
      title: "Reporting",
      items: [
        "Key metrics",
        "Search terms insights",
        "Recommendations for next period"
      ]
    }
  ] : [
    {
      title: "Setup i struktura",
      items: [
        "Keyword istraživanje",
        "Campaign i ad group struktura",
        "Negative keywords",
        "Ad copy pisanje",
        "Extensions setup"
      ]
    },
    {
      title: "Ongoing optimizacija",
      items: [
        "Search terms review",
        "Bid adjustments",
        "Ad copy A/B testiranje",
        "Quality Score optimizacija"
      ]
    },
    {
      title: "Reporting",
      items: [
        "Ključne metrike",
        "Search terms insights",
        "Preporuke za sledeći period"
      ]
    }
  ];

  const campaignTypes = locale === "en" ? [
    {
      title: "Brand Search",
      description: "Brand protection, low CPC, high ROAS."
    },
    {
      title: "Generic / Non-Brand Search",
      description: "Acquire new customers who don't know you yet."
    },
    {
      title: "Competitor Search",
      description: "Intercept customers considering competitors."
    },
    {
      title: "High-Intent / Bottom Funnel",
      description: "Keywords with clear purchase intent."
    }
  ] : [
    {
      title: "Brand Search",
      description: "Zaštita brenda, jeftin CPC, visok ROAS."
    },
    {
      title: "Generic / Non-Brand Search",
      description: "Akvizicija novih kupaca koji vas još ne poznaju."
    },
    {
      title: "Competitor Search",
      description: "Presretanje kupaca koji razmatraju konkurenciju."
    },
    {
      title: "High-Intent / Bottom Funnel",
      description: "Ključne reči sa jasnom kupovnom namerom."
    }
  ];

  const idealClients = locale === "en" ? [
    "People actively search for what you offer",
    "You have a clearly defined offer (product/service)",
    "You can track conversions (online or offline)",
    "Budget is minimum €500/month for Search"
  ] : [
    "Ljudi aktivno pretražuju ono što nudite",
    "Imate jasno definisanu ponudu (proizvod/usluga)",
    "Možete pratiti konverzije (online ili offline)",
    "Budžet je minimum EUR 500/mesec za Search"
  ];

  const industries = locale === "en" ? [
    "B2B services and software",
    "eCommerce (as complement to Shopping)",
    "Local services",
    "SaaS products",
    "Professional services"
  ] : [
    "B2B usluge i softver",
    "eCommerce (kao komplement Shopping-u)",
    "Lokalne usluge",
    "SaaS proizvodi",
    "Professional services"
  ];

  const faqs = locale === "en" ? [
    {
      question: "How many keywords do I need to start?",
      answer:
        "Quality over quantity. We start with 20-50 carefully selected keywords and expand based on data."
    },
    {
      question: "How long until I see results?",
      answer:
        "First optimization within a week, stable results after 4-6 weeks."
    },
    {
      question: "Do you write the ad copy?",
      answer:
        "Yes, ad copywriting is part of the service. Focus on best practices and messages that convert."
    },
    {
      question: "What is Quality Score and why does it matter?",
      answer:
        "Quality Score (1-10) determines ad position and CPC. Higher QS means better placement and lower cost."
    },
    {
      question: "Can I combine Search with other campaigns?",
      answer:
        "Yes, and I recommend it. Search + Shopping for eCommerce, Search + Remarketing for B2B."
    }
  ] : [
    {
      question: "Koliko ključnih reči treba za početak?",
      answer:
        "Kvalitet preko kvantiteta. Počinjemo sa 20-50 pažljivo odabranih reči i širimo na osnovu podataka."
    },
    {
      question: "Koliko traje da se vide rezultati?",
      answer:
        "Prva optimizacija unutar nedelju dana, stabilni rezultati nakon 4-6 nedelja."
    },
    {
      question: "Da li pišete vi ad copy?",
      answer:
        "Da, pisanje oglasa je deo usluge. Fokus na best practices i poruke koje konvertuju."
    },
    {
      question: "Šta je Quality Score i zašto je bitan?",
      answer:
        "Quality Score (1-10) određuje poziciju i CPC. Viši QS znači bolji položaj i nižu cenu."
    },
    {
      question: "Da li mogu da kombinujem Search sa drugim kampanjama?",
      answer:
        "Da, i preporučujem to. Search + Shopping za eCommerce, Search + Remarketing za B2B."
    }
  ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle: locale === "en" ? "Google Ads Strategist" : "Google Ads Strategist"
  };

  const breadcrumbSchema = locale === "en" ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.slobodan-jelisavac.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.slobodan-jelisavac.com/en/usluge"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Search Campaigns",
        item: "https://www.slobodan-jelisavac.com/en/usluge/search-kampanje"
      }
    ]
  } : {
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
        name: "Usluge",
        item: "https://www.slobodan-jelisavac.com/usluge"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Search kampanje",
        item: "https://www.slobodan-jelisavac.com/usluge/search-kampanje"
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

  const serviceSchema = locale === "en" ? {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Google Search Ads Management",
    provider: {
      "@type": "Person",
      name: "Slobodan Jelisavac"
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Serbia" },
      { "@type": "Country", name: "Croatia" }
    ],
    description: "Expert Google Search campaign management with focus on high-intent keywords, conversion-focused ad copy, and Quality Score optimization."
  } : {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Google Search kampanje",
    provider: {
      "@type": "Person",
      name: "Slobodan Jelisavac"
    },
    areaServed: [
      { "@type": "Country", name: "Serbia" },
      { "@type": "Country", name: "Croatia" },
      { "@type": "Country", name: "Bosnia and Herzegovina" }
    ],
    description: "Profesionalne Google Search kampanje za B2B i eCommerce. Keyword strategija, ad copy, bid optimizacija."
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Dark Hero with Breadcrumb */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Breadcrumb Navigation */}
          <nav className="mb-6 text-sm text-slate-400">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {locale === "en" ? "Home" : "Početna"}
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/usluge"
                  className="hover:text-white transition-colors"
                >
                  {locale === "en" ? "Services" : "Usluge"}
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">{locale === "en" ? "Search campaigns" : "Search kampanje"}</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            {locale === "en" ? "Google Search campaigns - reach customers when they search for you" : "Google Search kampanje - dođite do kupaca kada vas traže"}
          </h1>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-300">
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
              <span>{locale === "en" ? "9+ years experience" : "10+ godina iskustva"}</span>
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
              <span>{locale === "en" ? "Quality Score optimization" : "Quality Score optimizacija"}</span>
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
              <span>{locale === "en" ? "B2B & eCommerce" : "B2B i eCommerce"}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt" variant="secondary">
              {locale === "en" ? "Book a free consultation" : "Zakažite besplatnu konsultaciju"}
            </Button>
            <Button href="/usluge/google-ads-upravljanje" variant="primary">
              {locale === "en" ? "Google Ads management" : "Google Ads upravljanje"}
            </Button>
          </div>
        </div>
        </div>
      </section>

      {/* SEO Intro Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            {locale === "en" ? (
              <>
                Google Search campaigns are the most direct way to reach customers when they actively search for your products or services. Unlike display or social advertising, Search ads target people with clear intent. With 9+ years of experience creating and optimizing Search campaigns for 50+ brands across 6+ countries, I help companies maximize ROI through high-intent keyword strategy, conversion-focused ad copy, and bid optimization.
              </>
            ) : (
              <>
                Google Search kampanje su najdirektniji način da dođete do kupaca u
                trenutku kada aktivno traže vaše proizvode ili usluge. Za razliku
                od display ili social oglašavanja, Search oglasi se prikazuju
                ljudima sa jasnom namerom. Sa 10+ godina iskustva u kreiranju i
                optimizaciji Search kampanja, pomažem kompanijama da maksimiziraju
                ROI kroz keyword strategiju, ad copy i bid optimizaciju.
              </>
            )}
          </p>
        </div>
      </section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "Why Search campaigns don't reach full potential" : "Zašto Search kampanje ne ostvaruju puni potencijal"}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <Card key={problem.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600">{problem.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "Complete Search campaign service" : "Kompletna Search kampanje usluga"}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {inclusions.map((block) => (
            <Card key={block.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-4">
                {block.title}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "Types of Search campaigns" : "Tipovi Search kampanja"}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {campaignTypes.map((campaign) => (
            <Card key={campaign.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {campaign.title}
              </h3>
              <p className="text-gray-600">{campaign.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "Who Search campaigns are for" : "Za koga su Search kampanje"}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-2 text-gray-600">
              {idealClients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="text-sm text-gray-500 mt-6">
              {locale === "en" ? (
                <>Search campaigns work for: {industries.join(", ")}.</>
              ) : (
                <>Search kampanje funkcionišu za: {industries.join(", ")}.</>
              )}
            </div>
          </Card>
        </div>
      </Section>

      {/* FAQ Accordion Section */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "Frequently asked questions" : "Često postavljana pitanja"}
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

      {/* Dark CTA Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4 text-white">
            {locale === "en" ? "Ready to reach customers who are searching for you?" : "Spremni da dođete do kupaca koji vas traže?"}
          </h2>
          <p className="text-slate-300 mb-8">
            {locale === "en" ? (
              <>Book a free consultation and let's discuss how Search campaigns can drive quality leads and sales.</>
            ) : (
              <>Zakažite besplatnu konsultaciju i razgovarajmo kako Search kampanje mogu doneti kvalitetne leadove i prodaju.</>
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              {locale === "en" ? "Book a free consultation" : "Zakažite besplatnu konsultaciju"}
            </Button>
            <Button href="/case-studies" variant="primary">
              {locale === "en" ? "View case studies" : "Pogledajte rezultate"}
            </Button>
          </div>
          <div className="text-sm text-slate-400 mt-8 space-y-2">
            <div>
              <Link
                href="/usluge/google-shopping"
                className="underline hover:text-white transition-colors"
              >
                {locale === "en" ? "Google Shopping campaigns" : "Google Shopping kampanje"}
              </Link>{" "}
              |{" "}
              <Link
                href="/usluge/remarketing"
                className="underline hover:text-white transition-colors"
              >
                {locale === "en" ? "Remarketing" : "Remarketing"}
              </Link>
            </div>
            <div>
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }}
                className="underline hover:text-white transition-colors"
              >
                {locale === "en" ? "Keyword research guide" : "Ključne reči vodič"}
              </Link>{" "}
              |{" "}
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }}
                className="underline hover:text-white transition-colors"
              >
                {locale === "en" ? "Negative keywords guide" : "Negativne ključne reči"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
