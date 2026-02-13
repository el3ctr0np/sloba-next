import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return locale === "en"
    ? {
        title: "Google Ads for eCommerce | Shopping & PMax Campaign Management — Slobodan Jelisavac",
        description:
          "Drive profitable growth for your online store with expert eCommerce Google Ads strategies. Shopping campaigns, Performance Max, and remarketing for fashion, home & garden, and other verticals. 9+ years experience, 5x+ ROAS in 90 days."
      }
    : {
        title: "Google Ads za eCommerce | Online prodavnice - Slobodan Jelisavac",
        description:
          "Povećajte prihod i ROAS vaše online prodavnice sa specijalizovanim Google Ads strategijama za eCommerce. Shopping, Performance Max i remarketing kampanje za fashion, home & garden i druge vertikale."
      };
}

export default async function GoogleAdsZaEcommercePage({ params }: Props) {
  const { locale } = await params;

  const challenges = locale === "en"
    ? [
        {
          title: "Poor product feed quality",
          description:
            "Weak titles, incomplete attributes, and incorrect categories block product visibility and limit campaign performance."
        },
        {
          title: "ROAS doesn't cover costs",
          description:
            "Campaigns drive sales, but margins aren't sufficient for profitability without feed and bid optimization."
        },
        {
          title: "Performance Max without insights",
          description:
            "No control means you don't know where budget is going or what's actually driving results."
        },
        {
          title: "Seasonality and inventory issues",
          description:
            "Campaigns promote out-of-stock products or miss peak season opportunities due to poor feed management."
        },
        {
          title: "Competition with bigger budgets",
          description:
            "Large retailers dominate the auction, requiring smarter targeting and segmentation strategies."
        }
      ]
    : [
        {
          title: "Feed kvalitet koji koči kampanje",
          description:
            "Loši naslovi, nepotpuni atributi i pogrešne kategorije blokiraju vidljivost proizvoda."
        },
        {
          title: "ROAS ne pokriva troškove",
          description:
            "Kampanje donose prodaju, ali marže nisu dovoljne za profitabilnost."
        },
        {
          title: "Performance Max bez uvida",
          description:
            "Bez kontrole ne znate gde ide budžet i šta zapravo donosi rezultate."
        },
        {
          title: "Sezonalnost i inventory",
          description:
            "Kampanje promovišu proizvode kojih nema na stanju ili propuštate peak season."
        },
        {
          title: "Konkurencija sa većim budžetima",
          description:
            "Veliki retaileri dominiraju aukcijom, pa je potrebna pametna strategija."
        }
      ];

  const idealClients = locale === "en"
    ? [
        "Minimum 100 products in your catalog",
        "Ad spend minimum $1,000/month (€800+)",
        "Defined margins by product or category",
        "Functional tracking setup (GA4, purchase events)",
        "Ready for minimum 3-month engagement"
      ]
    : [
        "Minimum 100 proizvoda u ponudi",
        "Ad spend minimum EUR 800/mesečno",
        "Definisane marže po proizvodima ili kategorijama",
        "Funkcionalan tracking (GA4, purchase events)",
        "Spremni ste na minimum 3 meseca saradnje"
      ];

  const industries = locale === "en"
    ? [
        "Fashion & Apparel",
        "Home & Garden",
        "Electronics & Gadgets",
        "Beauty & Personal Care",
        "Sports & Outdoor",
        "Pet Supplies"
      ]
    : [
        "Fashion i apparel",
        "Home and Garden",
        "Electronics and Gadgets",
        "Beauty and Personal Care",
        "Sports and Outdoor",
        "Pet Supplies"
      ];

  const platforms = ["Shopify", "WooCommerce", "Magento", "Custom solutions"];

  const results = locale === "en"
    ? [
        {
          title: "UK Skincare Brand",
          items: [
            "From 2.8x to 5.2x POAS in 90 days",
            "Tiered Shopping + PMax restructuring",
            "£80k+ annual revenue from Google Ads"
          ]
        },
        {
          title: "Home & Garden (Croatia)",
          items: [
            "320% ROAS improvement",
            "Custom labels by season",
            "PMax and Standard Shopping combo"
          ]
        }
      ]
    : [
        {
          title: "Fashion Brand (Srbija)",
          items: [
            "Od 2x do 5x ROAS u 90 dana",
            "Feed reoptimizacija i campaign restructuring",
            "EUR 150k+ godišnji prihod iz Google Ads"
          ]
        },
        {
          title: "Home and Garden (Hrvatska)",
          items: [
            "320% poboljšanje ROAS-a",
            "Custom labels po sezonama",
            "PMax i Standard Shopping kombinacija"
          ]
        }
      ];

  const faqs = locale === "en"
    ? [
        {
          question: "Which platform is best for eCommerce Google Ads?",
          answer:
            "I work with Shopify, WooCommerce, and Magento platforms. The key is that you can generate a quality product feed with all required attributes."
        },
        {
          question: "What's a good ROAS for eCommerce?",
          answer:
            "It depends on margins. If your margin is 50%, ROAS 3x is break-even. For profitability, you need higher. I optimize for POAS (Profit on Ad Spend) to ensure real business growth."
        },
        {
          question: "Do you manage product feeds?",
          answer:
            "Yes, feed management is part of the service, including title optimization, custom labels, and attribute enhancement for better visibility."
        },
        {
          question: "How long until I see results?",
          answer:
            "First improvements in 2-3 weeks, stabilization and serious growth in 6-8 weeks. eCommerce requires feed optimization and audience learning time."
        },
        {
          question: "Do you run Meta ads too?",
          answer:
            "My focus is Google Ads, but for omnichannel performance marketing, I offer comprehensive services through Funky Enterprises."
        }
      ]
    : [
        {
          question: "Koja platforma je najbolja za eCommerce?",
          answer:
            "Radim sa Shopify, WooCommerce i Magento platformama. Bitno je da možete generisati kvalitetan product feed."
        },
        {
          question: "Šta je dobar ROAS za eCommerce?",
          answer:
            "Zavisi od marži. Ako je marža 50%, ROAS 3x je break-even. Za profitabilnost treba više."
        },
        {
          question: "Da li upravljate i feed-om?",
          answer:
            "Da, feed management je deo usluge, uključujući optimizaciju naslova i custom labels."
        },
        {
          question: "Koliko traje da se vide rezultati?",
          answer:
            "Prva poboljšanja za 2-3 nedelje, stabilizacija i ozbiljniji rast za 6-8 nedelja."
        },
        {
          question: "Da li radite i Meta oglase?",
          answer:
            "Fokus je na Google Ads, ali za omnichannel pristup nudim Performance Marketing kroz Funky Enterprises."
        }
      ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle: locale === "en" ? "Google Ads Strategist & eCommerce PPC Consultant" : "Google Ads Strategist"
  };

  const serviceSchema = locale === "en"
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Google Ads for eCommerce",
        description:
          "Expert Google Ads strategies for eCommerce stores with Shopping campaigns, Performance Max, and remarketing to drive profitable growth for fashion, home & garden, electronics, and other verticals.",
        provider: {
          "@type": "Person",
          name: "Slobodan Jelisavac",
          url: "https://www.slobodan-jelisavac.com",
          jobTitle: "Google Ads Strategist & eCommerce PPC Consultant",
          knowsAbout: ["Google Ads", "eCommerce Advertising", "Google Shopping", "Performance Max", "Product Feed Optimization"]
        },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Australia" },
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "Serbia" },
          { "@type": "Country", name: "Croatia" }
        ]
      }
    : {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Google Ads za eCommerce",
        description:
          "Google Ads strategije za eCommerce prodavnice uz Shopping, Performance Max i remarketing kampanje.",
        provider: {
          "@type": "Person",
          name: "Slobodan Jelisavac",
          url: "https://www.slobodan-jelisavac.com",
          jobTitle: "Google Ads Strategist",
          knowsAbout: ["Google Ads", "eCommerce Advertising", "Google Shopping", "Performance Max"]
        },
        areaServed: [
          { "@type": "Country", name: "Serbia" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "Croatia" }
        ]
      };

  const breadcrumbSchema = locale === "en"
    ? {
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
            name: "Google Ads for eCommerce",
            item: "https://www.slobodan-jelisavac.com/en/usluge/google-ads-za-ecommerce"
          }
        ]
      }
    : {
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
            name: "Google Ads za eCommerce",
            item: "https://www.slobodan-jelisavac.com/usluge/google-ads-za-ecommerce"
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

      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">{locale === "en" ? "Home" : "Početna"}</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/usluge" className="hover:text-white transition-colors">{locale === "en" ? "Services" : "Usluge"}</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-yellow-400 font-medium">{locale === "en" ? "Google Ads for eCommerce" : "Google Ads za eCommerce"}</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              {locale === "en"
                ? "Google Ads for eCommerce - maximize your online store revenue"
                : "Google Ads za eCommerce - maksimizujte prihod vaše online prodavnice"}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {locale === "en"
                ? "Expert Google Ads strategies for online stores that drive profitable growth. Shopping campaigns, Performance Max, and remarketing for fashion, home & garden, electronics, and other verticals."
                : "Specijalizovane Google Ads strategije za online prodavnice koje generišu profitabilan rast. Shopping kampanje, Performance Max i remarketing za fashion, home & garden, electronics i druge vertikale."}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300">{locale === "en" ? "9+ years experience" : "10+ godina iskustva"}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300">{locale === "en" ? "5x+ ROAS in 90 days" : "5x+ ROAS u 90 dana"}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300">Shopify, WooCommerce, Magento</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                {locale === "en" ? "Book a free consultation" : "Zakažite besplatnu konsultaciju"}
              </Button>
              <Button href="/usluge/google-shopping" variant="primary">
                {locale === "en" ? "Google Shopping campaigns" : "Google Shopping kampanje"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100 py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            {locale === "en"
              ? "Google Ads for eCommerce is the most effective channel for scaling online stores. Shopping campaigns display products directly in search results with images, prices, and names, while Performance Max reaches customers across all Google platforms - YouTube, Display, Search, and Discover. With a properly optimized product feed, campaign structure, and bidding strategy, Google Ads can drive profitable growth for fashion, home & garden, electronics, beauty, and other verticals. The key to success is combining quality product feed optimization, performance-based segmentation (best sellers, new arrivals, seasonal), and continuous ROAS and margin-driven optimization."
              : "Google Ads za eCommerce je najefikasniji kanal za skaliranje online prodavnice. Shopping kampanje prikazuju proizvode direktno u pretraži sa slikom, cenom i nazivom, dok Performance Max dostiže kupce na svim Google platformama - YouTube, Display, Search i Discover. Sa pravilno podešenim feed-om, strukturom kampanja i bid strategijom, Google Ads može doneti profitabilan rast za fashion, home and garden, electronics, beauty i druge vertikale. Ključ uspeha je u kombinaciji kvalitetnog product feed-a, segmentacije po performance-u (best sellers, new arrivals, seasonal), i kontinuirane optimizacije zasnovane na ROAS-u i marži."}
          </p>
        </div>
      </section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {locale === "en" ? "eCommerce advertising challenges" : "Izazovi eCommerce oglašavanja"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Common problems online store owners face with Google Ads"
              : "Ovo su najčešći problemi sa kojima se susreću vlasnici online prodavnica"}
          </p>
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {locale === "en" ? "Who is eCommerce Google Ads for" : "Za koga je eCommerce Google Ads usluga"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "This service is designed for serious eCommerce stores ready for growth"
              : "Ova usluga je dizajnirana za ozbiljne eCommerce prodavnice spremne za rast"}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-3 text-gray-700">
              {idealClients.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-sm text-gray-600 mt-6 pt-6 border-t border-gray-200">
              <strong className="font-semibold text-gray-900">
                {locale === "en" ? "Industries I work best with:" : "Industrije sa kojima najbolje radim:"}
              </strong>
              <p className="mt-2">{industries.join(", ")}</p>
            </div>
            <div className="text-sm text-gray-600 mt-4">
              <strong className="font-semibold text-gray-900">
                {locale === "en" ? "Platforms:" : "Platforme:"}
              </strong>
              <p className="mt-2">{platforms.join(", ")}</p>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {locale === "en" ? "eCommerce results" : "eCommerce rezultati"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Examples of client performance transformations"
              : "Primeri transformacije performansi klijenata"}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {results.map((result) => (
            <Card key={result.title} className="h-full">
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                {result.title}
              </h3>
              <ul className="space-y-3">
                {result.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/case-studies" variant="primary">
            {locale === "en" ? "All eCommerce case studies" : "Svi eCommerce case studies"}
          </Button>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {locale === "en" ? "Frequently asked questions" : "Često postavljana pitanja"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Answers to common questions about eCommerce Google Ads"
              : "Odgovori na najčešća pitanja o Google Ads za eCommerce"}
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="bg-white border-2 border-gray-200 rounded-xl group"
              open={index === 0 ? true : undefined}
            >
              <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
                {faq.question}
                <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Section>

      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            {locale === "en"
              ? "Ready to scale your online store?"
              : "Spremni da skalirate vašu online prodavnicu?"}
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            {locale === "en"
              ? "Book a free consultation and let's discuss how Google Ads can increase your eCommerce store revenue. I'll analyze your current setup, product feed quality, and identify quick wins for growth."
              : "Zakažite besplatnu konsultaciju i razgovarajmo kako Google Ads može povećati prihod vaše eCommerce prodavnice. Analiziraćemo trenutno stanje, feed kvalitet i identifikovati brze pobede za rast."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="/kontakt" variant="secondary">
              {locale === "en" ? "Book a free consultation" : "Zakažite besplatnu konsultaciju"}
            </Button>
            <Button href="/usluge/performance-marketing" variant="primary">
              {locale === "en" ? "Performance Marketing" : "Performance Marketing"}
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <Link href="/usluge/google-shopping" className="hover:text-yellow-400 transition-colors underline">
              {locale === "en" ? "Google Shopping campaigns" : "Google Shopping kampanje"}
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/usluge/performance-max" className="hover:text-yellow-400 transition-colors underline">
              {locale === "en" ? "Performance Max" : "Performance Max"}
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/usluge/remarketing" className="hover:text-yellow-400 transition-colors underline">
              {locale === "en" ? "Remarketing" : "Remarketing"}
            </Link>
            <span aria-hidden="true">•</span>
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="hover:text-yellow-400 transition-colors underline">
              {locale === "en" ? "Google Shopping guide" : "Google Shopping vodič"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
