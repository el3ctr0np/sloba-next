import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "en") {
    return {
      title:
        "Google Shopping Campaign Management | eCommerce PPC Services — Slobodan Jelisavac",
      description:
        "Expert Google Shopping campaign management for eCommerce brands. Product feed optimization, bid strategies, campaign structure. Maximize ROAS and sell more products."
    };
  }
  return {
    title:
      "Google Shopping kampanje Srbija | eCommerce specijalist - Slobodan Jelisavac",
    description:
      "Specijalizovane Google Shopping kampanje za eCommerce. Feed optimizacija, bid strategije, struktura kampanja. Povećajte ROAS i prodajte više proizvoda."
  };
}

export default async function GoogleShoppingPage({ params }: Props) {
  const { locale } = await params;

  const challenges = locale === "en" ? [
    {
      title: "Non-optimized product feed",
      description:
        "Poor titles, incomplete attributes, and wrong categories block growth."
    },
    {
      title: "Everything in one campaign",
      description:
        "Without segmentation by performance and profitability, budget gets wasted without control."
    },
    {
      title: "Performance Max as a black box",
      description:
        "Without proper setup and tracking you don't know what's actually working."
    },
    {
      title: "Competition outbidding you",
      description:
        "Bigger players dominate the auction and you lack a smart bidding strategy."
    },
    {
      title: "ROAS declining without clear reason",
      description:
        "Costs rising, conversions stagnating, and no insight into what needs fixing."
    }
  ] : [
    {
      title: "Feed koji nije optimizovan",
      description:
        "Loši naslovi, nepotpuni atributi i pogrešne kategorije blokiraju rast."
    },
    {
      title: "Sve u jednoj kampanji",
      description:
        "Bez segmentacije po performansama i profitabilnosti, budžet se troši bez kontrole."
    },
    {
      title: "Performance Max kao black box",
      description:
        "Bez pravilnog setup-a i praćenja ne znate šta zaista radi."
    },
    {
      title: "Konkurencija vas nadmašuje",
      description:
        "Veći igrači dominiraju aukcijom, a vi nemate strategiju za pametno nadmetanje."
    },
    {
      title: "ROAS pada bez jasnog razloga",
      description:
        "Troškovi rastu, konverzije stagniraju i nema uvida šta treba menjati."
    }
  ];

  const inclusions = locale === "en" ? [
    {
      title: "Feed management",
      items: [
        "Audit and optimization of titles and descriptions",
        "Custom labels and feed rules",
        "Ongoing maintenance and quality control"
      ]
    },
    {
      title: "Campaign setup and structure",
      items: [
        "Product assortment analysis",
        "Structure by categories and margins",
        "Bid strategies per segment"
      ]
    },
    {
      title: "Ongoing optimization",
      items: [
        "Performance monitoring",
        "Bid adjustments",
        "Search terms analysis",
        "Seasonal adjustments"
      ]
    },
    {
      title: "Reporting and analytics",
      items: [
        "Product-level performance",
        "Category analysis",
        "ROAS by segments"
      ]
    }
  ] : [
    {
      title: "Feed management",
      items: [
        "Audit i optimizacija naslova i opisa",
        "Custom labels i feed rules",
        "Ongoing održavanje i kontrola kvaliteta"
      ]
    },
    {
      title: "Setup i struktura kampanja",
      items: [
        "Analiza asortimana",
        "Struktura po kategorijama i maržama",
        "Bid strategije po segmentima"
      ]
    },
    {
      title: "Ongoing optimizacija",
      items: [
        "Performance monitoring",
        "Bid adjustments",
        "Analiza search terms",
        "Sezonske prilagodbe"
      ]
    },
    {
      title: "Reporting i analitika",
      items: [
        "Product-level performance",
        "Category analysis",
        "ROAS po segmentima"
      ]
    }
  ];

  const results = locale === "en" ? [
    {
      title: "Mobelaris - Furniture",
      items: ["320% ROAS improvement", "Feed optimization and campaign restructuring"]
    },
    {
      title: "Fashion Brand - Serbia",
      items: ["From 2x to 5x ROAS in 90 days", "Custom labels by seasons and margins"]
    }
  ] : [
    {
      title: "Mobelaris - Namestaj",
      items: ["320% poboljšanje ROAS-a", "Feed optimizacija i restruktuiranje kampanja"]
    },
    {
      title: "Fashion Brand - Srbija",
      items: ["Od 2x do 5x ROAS u 90 dana", "Custom labels po sezonama i maržama"]
    }
  ];

  const idealClients = locale === "en" ? [
    "You have an online store with minimum 50 products",
    "Current ad spend is minimum $1,000/month",
    "You have defined margins per product",
    "You want to scale eCommerce revenue",
    "You're ready for long-term partnership (minimum 3 months)"
  ] : [
    "Imate online prodavnicu sa minimum 50 proizvoda",
    "Trenutni ad spend je minimum EUR 800/mesečno",
    "Imate definisane marže po proizvodima",
    "Želite da skalirate eCommerce prihode",
    "Spremni ste za dugoročnu saradnju (minimum 3 meseca)"
  ];

  const industries = locale === "en" ? [
    "Fashion and footwear",
    "Home and Garden",
    "Electronics",
    "Beauty and Personal Care",
    "Sports and Outdoor"
  ] : [
    "Fashion i obuća",
    "Home and Garden",
    "Electronics",
    "Beauty and Personal Care",
    "Sports and Outdoor"
  ];

  const platforms = locale === "en" ? [
    "Shopify",
    "WooCommerce",
    "Magento",
    "Custom solutions"
  ] : [
    "Shopify",
    "WooCommerce",
    "Magento",
    "Custom solutions"
  ];

  const faqs = locale === "en" ? [
    {
      question: "Which eCommerce platform do I need?",
      answer:
        "I work with all platforms including Shopify, WooCommerce, Magento, and custom solutions. The key requirement is that you can generate a product feed."
    },
    {
      question: "Do I need Google Merchant Center?",
      answer:
        "Yes, Merchant Center is mandatory for Shopping campaigns. If you don't have one, I'll help with the setup."
    },
    {
      question: "How many products do I need for Shopping campaigns?",
      answer: "For serious results I recommend a minimum of 50+ products."
    },
    {
      question: "How long until I see results?",
      answer:
        "First improvements are visible after 2-3 weeks. For stable results, expect 6-8 weeks."
    },
    {
      question: "Can I combine Shopping and Search campaigns?",
      answer:
        "Yes, and I recommend it. A full-funnel approach delivers the best results for eCommerce."
    }
  ] : [
    {
      question: "Koja platforma za online prodavnicu je potrebna?",
      answer:
        "Radim sa svim platformama, uključujući Shopify, WooCommerce, Magento i custom rešenja. Bitno je da možete generisati product feed."
    },
    {
      question: "Da li je potreban Google Merchant Center?",
      answer:
        "Da, Merchant Center je obavezan za Shopping kampanje. Ako ga nemate, pomažem sa setup-om."
    },
    {
      question: "Koliko proizvoda je potrebno za Shopping kampanje?",
      answer: "Za ozbiljne rezultate preporučujem minimum 50+ proizvoda."
    },
    {
      question: "Koliko traje da se vide rezultati?",
      answer:
        "Prva poboljšanja su vidljiva nakon 2-3 nedelje. Za stabilne rezultate računajte na 6-8 nedelja."
    },
    {
      question: "Mogu li kombinovati Shopping i Search kampanje?",
      answer:
        "Da, i preporučujem to. Full-funnel pristup daje najbolje rezultate za eCommerce."
    }
  ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle: locale === "en" ? "Google Ads Strategist" : "Google Ads Strategist"
  };

  const serviceSchema = locale === "en" ? {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Shopping Campaigns",
    description:
      "Specialized Shopping campaigns for eCommerce brands with focus on ROAS and profitable growth.",
    provider: {
      "@type": "Person",
      name: "Slobodan Jelisavac",
      url: "https://www.slobodan-jelisavac.com"
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Serbia" },
      { "@type": "Country", name: "Croatia" }
    ]
  } : {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Shopping kampanje",
    description:
      "Specijalizovane Shopping kampanje za eCommerce brendove sa fokusom na ROAS i profitabilan rast.",
    provider: {
      "@type": "Person",
      name: "Slobodan Jelisavac",
      url: "https://www.slobodan-jelisavac.com"
    }
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
        name: "Google Shopping Campaigns",
        item: "https://www.slobodan-jelisavac.com/en/usluge/google-shopping"
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
        name: "Google Shopping kampanje",
        item: "https://www.slobodan-jelisavac.com/usluge/google-shopping"
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Dark Hero with Breadcrumb */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {locale === "en" ? "Home" : "Početna"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/usluge"
                  className="hover:text-white transition-colors"
                >
                  {locale === "en" ? "Services" : "Usluge"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-yellow-400 font-medium">
                {locale === "en" ? "Google Shopping Campaigns" : "Google Shopping kampanje"}
              </li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {locale === "en" ? "Google Shopping Campaigns — Your Products at the Top of Google Search" : "Google Shopping kampanje - vaši proizvodi na vrhu Google pretrage"}
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              {locale === "en" ? (
                <>
                  Google Shopping campaigns are the most effective way to put your products in front of buyers ready to purchase. Shopping ads display product images, prices, and names directly in search results, giving shoppers all the information before they click. I specialize in eCommerce advertising and help online stores maximize ROAS through strategic Shopping campaign management.
                </>
              ) : (
                <>
                  Google Shopping kampanje su najefikasniji način da vaši proizvodi dođu pred kupce koji su spremni da kupe. Shopping oglasi prikazuju sliku, cenu i naziv proizvoda direktno u rezultatima pretrage, što daje kupcima sve informacije pre klika. Specijalizovan sam za eCommerce oglašavanje i pomažem online prodavnicama da maksimiziraju ROAS kroz strateški pristup Shopping kampanjama.
                </>
              )}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg">
                <span className="text-yellow-400 text-xl">✓</span>
                <span className="text-sm text-slate-200">
                  {locale === "en" ? "9+ years experience" : "10+ godina iskustva"}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg">
                <span className="text-yellow-400 text-xl">✓</span>
                <span className="text-sm text-slate-200">
                  {locale === "en" ? "5x+ ROAS improvement" : "5x+ ROAS poboljšanje"}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg">
                <span className="text-yellow-400 text-xl">✓</span>
                <span className="text-sm text-slate-200">
                  {locale === "en" ? "Shopify, WooCommerce, Magento" : "Shopify, WooCommerce, Magento"}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                {locale === "en" ? "Schedule a free consultation" : "Zakažite besplatnu konsultaciju"}
              </Button>
              <Button href="/case-studies" variant="primary">
                {locale === "en" ? "View results" : "Pogledajte rezultate"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO intro section */}
      <section className="bg-white border-b border-gray-100 py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            {locale === "en" ? (
              <>
                Google Shopping campaigns enable online stores to display their products with images, prices, and names directly in Google search results. Unlike text ads, Shopping ads give buyers a visual preview of products before they click, resulting in higher-quality clicks and better conversion rates. However, for Shopping campaigns to deliver results, you need expert product feed optimization, proper campaign structure, and continuous performance monitoring. I specialize in Google Shopping advertising for eCommerce brands across the US, UK, Europe, and beyond, with a focus on maximizing ROAS through data-driven optimizations.
              </>
            ) : (
              <>
                Google Shopping kampanje omogućavaju online prodavnicama da prikažu svoje proizvode sa slikom, cenom i nazivom direktno u Google rezultatima pretrage. Za razliku od tekstualnih oglasa, Shopping oglasi daju kupcima vizuelni pregled proizvoda pre nego što kliknu, što rezultuje kvalitetnijim klikom i višim stopama konverzije. Međutim, da bi Shopping kampanje donele rezultate, potrebna je stručna optimizacija product feed-a, pravilna struktura kampanja i kontinuirano praćenje performansi. Specijalizovan sam za Google Shopping oglašavanje za eCommerce brendove u Srbiji i regionu, sa fokusom na maksimizaciju ROAS-a kroz data-driven optimizacije.
              </>
            )}
          </p>
        </div>
      </section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "Challenges eCommerce Brands Face" : "Izazovi sa kojima se eCommerce brendovi suočavaju"}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <Card key={challenge.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {challenge.title}
              </h3>
              <p className="text-gray-600">{challenge.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "Complete Shopping Campaign Service" : "Kompletna Shopping kampanje usluga"}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
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

      <Section>
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "Standard Shopping vs Performance Max" : "Standard Shopping vs Performance Max"}
          </h2>
          <p className="text-gray-600">
            {locale === "en" ? (
              <>
                Before making a decision, I conduct an audit and analysis of your situation. Some brands benefit from the control of Standard Shopping, while others see better results with Performance Max. It all depends on your creative assets, video materials, and product assortment structure.
              </>
            ) : (
              <>
                Pre odluke radim audit i analizu vaše situacije. Nekim brendovima Standard Shopping donosi više kontrole, dok drugima Performance Max daje bolje rezultate. Sve zavisi od kreativa, video materijala i strukture asortimana.
              </>
            )}
          </p>
          <p className="text-gray-600 mt-4">
            {locale === "en" ? "My approach is individualized — the goal is what works for your specific business." : "Moj pristup je individualan - cilj je ono što radi za vaš konkretan biznis."}
          </p>
        </div>
        <div className="text-center">
          <Button href="/usluge/performance-max" variant="secondary">
            {locale === "en" ? "More about Performance Max" : "Više o Performance Max"}
          </Button>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "Results for eCommerce Clients" : "Rezultati za eCommerce klijente"}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {results.map((result) => (
            <Card key={result.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-4">
                {result.title}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {result.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button href="/case-studies" variant="primary">
            {locale === "en" ? "View case studies" : "Pogledajte case studies"}
          </Button>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "Ideal Clients" : "Idealni klijenti"}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-2 text-gray-600">
              {idealClients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-gray-500">
              {locale === "en" ? "I work particularly well with: " : "Posebno dobro radim sa: "}
              {industries.join(", ")}.
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {locale === "en" ? "Platforms: " : "Platforme: "}
              {platforms.join(", ")}.
            </div>
          </Card>
        </div>
      </Section>

      {/* FAQ Accordion section */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "Frequently Asked Questions" : "Često postavljana pitanja"}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 font-heading font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                <span>{faq.question}</span>
                <svg
                  className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-4 pt-2 text-gray-600 border-t border-gray-100">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Dark CTA section */}
      <section className="bg-slate-900 text-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {locale === "en" ? "Ready to Get Your Products in Front of the Right Buyers?" : "Spremni da vaši proizvodi dostignu prave kupce?"}
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            {locale === "en" ? "Schedule a free consultation and learn how Shopping campaigns can increase your eCommerce revenue." : "Zakažite besplatnu konsultaciju i saznajte kako Shopping kampanje mogu povećati eCommerce prihod."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              {locale === "en" ? "Schedule a free consultation" : "Zakažite besplatnu konsultaciju"}
            </Button>
            <Button href="/usluge" variant="primary">
              {locale === "en" ? "View all services" : "Pogledajte sve usluge"}
            </Button>
          </div>

          {/* Internal links in footer */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <p className="text-sm text-slate-400 mb-3">
              {locale === "en" ? "Related services and resources:" : "Povezane usluge i resursi:"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/usluge/google-ads-za-ecommerce"
                className="text-slate-300 hover:text-yellow-400 transition-colors underline"
              >
                {locale === "en" ? "Google Ads for eCommerce" : "Google Ads za eCommerce"}
              </Link>
              <span className="text-slate-600">•</span>
              <Link
                href="/usluge/remarketing"
                className="text-slate-300 hover:text-yellow-400 transition-colors underline"
              >
                {locale === "en" ? "Remarketing" : "Remarketing"}
              </Link>
              <span className="text-slate-600">•</span>
              <Link
                href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }}
                className="text-slate-300 hover:text-yellow-400 transition-colors underline"
              >
                {locale === "en" ? "Google Shopping Guide" : "Google Shopping vodič"}
              </Link>
              <span className="text-slate-600">•</span>
              <Link
                href="/usluge/performance-max"
                className="text-slate-300 hover:text-yellow-400 transition-colors underline"
              >
                {locale === "en" ? "Performance Max" : "Performance Max"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
