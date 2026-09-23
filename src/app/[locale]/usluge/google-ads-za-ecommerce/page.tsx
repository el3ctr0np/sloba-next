import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";
import { PERSON_REF } from "@/lib/brand";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "Google Ads for eCommerce | Shopping & PMax - Slobodan Jelisavac"
      : "Google Ads za eCommerce | Shopping i Performance Max - Slobodan Jelisavac",
    description: isEn
      ? "10+ years running Google Ads for online stores. Shopping, Performance Max, and Search, structured by margin - not just revenue. Management from $2,500/mo, minimum $10,000+/mo ad spend."
      : "10+ godina vodim Google Ads za online prodavnice. Shopping, Performance Max i Search, strukturirani po marži - ne samo po prihodu. Vođenje od €700/mes, uslov €1.500+/mes ad spend-a.",
    locale,
    path: "/services/google-ads-for-ecommerce",
    srPath: "/usluge/google-ads-za-ecommerce",
  });
}

export default async function GoogleAdsZaEcommercePage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";

  const shoppingGuideSlug = isEn ? "google-shopping-guide" : "google-shopping-vodic";
  const pmaxGuideSlug = isEn ? "performance-max-guide" : "performance-max-vodic";

  const challenges = isEn
    ? [
        {
          title: "The feed blocks visibility",
          description:
            "Weak titles, incomplete attributes, and wrong categories push products out of the auction before bidding even matters."
        },
        {
          title: "ROAS doesn't cover margin",
          description:
            "Revenue climbs, but without margin data per product you don't know how much of it actually stays in the business."
        },
        {
          title: "Performance Max without insight",
          description:
            "Automation spends budget across channels and segments you can't see, turning optimization into guesswork."
        }
      ]
    : [
        {
          title: "Feed koči vidljivost",
          description:
            "Loši naslovi, nepotpuni atributi i pogrešne kategorije guraju proizvode van aukcije pre nego što bid uopšte dođe na red."
        },
        {
          title: "ROAS ne pokriva maržu",
          description:
            "Prihod raste, ali bez podataka o marži po proizvodu ne znate koji deo tog prihoda zaista ostaje u biznisu."
        },
        {
          title: "Performance Max bez uvida",
          description:
            "Automatizacija troši budžet po kanalima i segmentima koje ne vidite, pa optimizacija liči na nagađanje."
        }
      ];

  const deliverables = isEn
    ? [
        {
          title: "Feed audit",
          description:
            "Titles, attributes, categories, and images get aligned with Merchant Center requirements before bids get touched."
        },
        {
          title: "Shopping, Performance Max, and Search structure",
          description:
            "Campaigns are split by margin and seasonality, with remarketing signals folded into PMax."
        },
        {
          title: "Custom label segmentation",
          description:
            "Best sellers, new arrivals, and seasonal items get separate budget and bids instead of one blanket treatment."
        },
        {
          title: "Margin-based conversion tracking",
          description:
            "Tracking is set up to capture margin where possible, not just revenue - the foundation for POAS optimization."
        },
        {
          title: "Monthly optimization for profit",
          description:
            "Priority goes to products and campaigns that protect margin, not the ones with the highest raw revenue."
        }
      ]
    : [
        {
          title: "Feed audit",
          description:
            "Naslovi, atributi, kategorije i slike se usklađuju sa Merchant Center zahtevima pre nego što se dirne bid."
        },
        {
          title: "Struktura Shopping, Performance Max i Search",
          description:
            "Kampanje se raspoređuju po marži i sezoni proizvoda, sa remarketing signalima uključenim u PMax."
        },
        {
          title: "Custom labels segmentacija",
          description:
            "Best seller, novi proizvodi i sezonski artikli dobijaju odvojen budžet i bid, ne isti tretman kao ceo katalog."
        },
        {
          title: "Conversion tracking na maržu",
          description:
            "Tracking se podešava da hvata maržu gde je moguće, ne samo prihod - osnova za POAS optimizaciju."
        },
        {
          title: "Mesečna optimizacija na profit",
          description:
            "Prioritet imaju proizvodi i kampanje koje čuvaju profit, ne oni sa najvećim golim prihodom."
        }
      ];

  const processSteps = isEn
    ? [
        { number: 1, title: "Audit", description: "I review the feed, campaign structure, and tracking before the first recommendation." },
        { number: 2, title: "Restructure", description: "Shopping, PMax, and Search get aligned by margin and season, and custom labels come into play." },
        { number: 3, title: "Optimize for profit", description: "Bids and budget follow POAS, not raw revenue, week over week." }
      ]
    : [
        { number: 1, title: "Audit", description: "Pregledam feed, strukturu kampanja i tracking pre prvog predloga." },
        { number: 2, title: "Restrukturiranje", description: "Shopping, PMax i Search se slažu po marži i sezoni, custom labels ulaze u igru." },
        { number: 3, title: "Optimizacija na profit", description: "Bidovi i budžet prate POAS, ne goli prihod, iz nedelje u nedelju." }
      ];

  const faqs = isEn
    ? [
        {
          question: "Which platform is best for eCommerce Google Ads?",
          answer:
            "I work with Shopify, WooCommerce, and Magento accounts. What matters more than the platform is whether you can pull a quality product feed from it."
        },
        {
          question: "What's a good ROAS for eCommerce?",
          answer:
            "It depends on margin - at a 50% margin, break-even ROAS is 2x. That's why I optimize for POAS instead of raw ROAS; average ROAS across the accounts I run is 3.7x, but that figure alone says nothing about profit."
        },
        {
          question: "Do you manage the product feed too?",
          answer:
            "Yes, feed management is part of the service - titles, attributes, and custom labels change alongside the campaign structure."
        },
        {
          question: "When do I see the first results?",
          answer:
            "Auction changes show up within a few weeks of feed and structure optimization. A meaningful POAS shift depends on the catalog, season, and budget, so I don't promise a timeline upfront."
        },
        {
          question: "My budget or catalog is smaller - is this for me?",
          answer:
            "Not if ad spend is under $10,000/month. For that range, an audit or a consulting call is a better starting point, laying the groundwork before full management."
        },
        {
          question: "Do you run Meta ads too?",
          answer:
            "My focus is Google Ads. For an omnichannel approach - Google, Meta, SEO, and CRO together - that work runs through Funky Enterprises, a team I work with regularly."
        }
      ]
    : [
        {
          question: "Koja platforma je najbolja za eCommerce Google Ads?",
          answer:
            "Radim sa Shopify, WooCommerce i Magento nalozima. Bitnije od same platforme je da iz nje možete izvući kvalitetan product feed."
        },
        {
          question: "Šta je dobar ROAS za eCommerce?",
          answer:
            "Zavisi od marže - ako je marža 50%, break-even ROAS je 2x. Zato optimizujem POAS umesto golog ROAS-a; u nalozima koje vodim prosečan ROAS je 3.7x, ali ta brojka sama po sebi ne kaže ništa o profitu."
        },
        {
          question: "Da li vodite i product feed?",
          answer:
            "Da, feed management je deo usluge - naslovi, atributi i custom labels se menjaju zajedno sa strukturom kampanja."
        },
        {
          question: "Kada se vide prvi rezultati?",
          answer:
            "Prve promene u aukciji se vide posle nekoliko nedelja optimizacije feed-a i strukture. Ozbiljniji pomak u POAS-u zavisi od kataloga, sezone i budžeta, pa ga ne obećavam unapred."
        },
        {
          question: "Imam manji budžet ili manji katalog - da li je ovo za mene?",
          answer:
            "Ne ako je ad spend ispod €1.500 mesečno. Za taj raspon Deep Audit ili konsultacije su bolji početak, gde postavljamo osnovu pre punog vođenja."
        },
        {
          question: "Da li radite i Meta oglase?",
          answer:
            "Fokus mi je Google Ads. Za omnichannel pristup - Google, Meta, SEO i CRO zajedno - saradnja ide preko Funky Enterprises, tima sa kojim redovno radim."
        }
      ];

  const ctaLabel = isEn ? "Book a free 20-minute call" : "Zakažite besplatnih 20 minuta";


  const serviceSchema = isEn
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Google Ads for eCommerce",
        description: "Monthly Google Ads management for eCommerce - from $2,500/mo.",
        provider: PERSON_REF,
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Australia" },
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "Serbia" },
          { "@type": "Country", name: "Croatia" }
        ],
        offers: {
          "@type": "Offer",
          price: "2500",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "2500",
            priceCurrency: "USD",
            unitText: "MONTH"
          }
        }
      }
    : {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Google Ads za eCommerce",
        description: "Mesečno Google Ads vođenje za eCommerce - od €700/mes.",
        provider: PERSON_REF,
        areaServed: [
          { "@type": "Country", name: "Serbia" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Germany" },
          { "@type": "Country", name: "Croatia" }
        ],
        offers: {
          "@type": "Offer",
          price: "700",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "700",
            priceCurrency: "EUR",
            unitText: "MONTH"
          }
        }
      };

  const breadcrumbSchema = isEn
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.slobodan-jelisavac.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.slobodan-jelisavac.com/en/services" },
          { "@type": "ListItem", position: 3, name: "Google Ads for eCommerce", item: "https://www.slobodan-jelisavac.com/en/services/google-ads-for-ecommerce" }
        ]
      }
    : {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Početna", item: "https://www.slobodan-jelisavac.com" },
          { "@type": "ListItem", position: 2, name: "Usluge", item: "https://www.slobodan-jelisavac.com/sr/usluge" },
          { "@type": "ListItem", position: 3, name: "Google Ads za eCommerce", item: "https://www.slobodan-jelisavac.com/sr/usluge/google-ads-za-ecommerce" }
        ]
      };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. Hero - kome je namenjeno, sta se desava kad me angazujem, jedan dokaz */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">{isEn ? "Home" : "Početna"}</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/usluge" className="hover:text-white transition-colors">{isEn ? "Services" : "Usluge"}</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-accent font-medium">{isEn ? "Google Ads for eCommerce" : "Google Ads za eCommerce"}</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              {isEn ? "Google Ads for eCommerce" : "Google Ads za eCommerce"}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {isEn
                ? "I run Shopping, Performance Max, and Search campaigns for online stores that care about profit, not just revenue."
                : "Vodim Shopping, Performance Max i Search kampanje za online prodavnice koje gledaju na profit, ne samo na prihod."}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300">{isEn ? "10+ years experience" : "10+ godina iskustva"}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300">
                  {isEn ? "POAS 1.78x on a UK Shopping account, 2+ years" : "POAS 1.78x na UK Shopping nalogu, 2+ godine"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300">
                  {isEn ? "For accounts spending $10,000+/mo" : "Za naloge sa ad spend-om €1.500+/mes"}
                </span>
              </div>
            </div>

            <p className="text-base text-slate-400 mb-8 max-w-2xl">
              {isEn
                ? <>Smaller budget? An <Link href="/usluge/google-ads-audit" className="text-accent underline">audit</Link> or a <Link href="/usluge/konsultacije" className="text-accent underline">consulting call</Link> is a better first step.</>
                : <>Manji budžet? <Link href="/usluge/google-ads-audit" className="text-accent underline">Deep Audit</Link> ili <Link href="/usluge/konsultacije" className="text-accent underline">konsultacije</Link> su bolji prvi korak.</>}
            </p>

            <Button href="/kontakt" variant="secondary">{ctaLabel}</Button>
          </div>
        </div>
      </section>

      {/* 2. Problem - tri stavke */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {isEn ? "Why eCommerce accounts stall" : "Zašto eCommerce nalozi stanu u mestu"}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {challenges.map((challenge) => (
            <Card key={challenge.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 3. Sta dobijate - numerisano */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {isEn ? "What you get" : "Šta dobijate"}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {deliverables.map((item, index) => (
              <div key={item.title} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-card">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold font-heading">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6 text-center">
            {isEn ? "Deeper dives: " : "Detaljnije: "}
            <Link href={{ pathname: "/blog/[slug]", params: { slug: shoppingGuideSlug } }} className="text-primary underline">
              {isEn ? "Google Shopping guide" : "Google Shopping vodič"}
            </Link>
            {" · "}
            <Link href={{ pathname: "/blog/[slug]", params: { slug: pmaxGuideSlug } }} className="text-primary underline">
              {isEn ? "Performance Max guide" : "Performance Max vodič"}
            </Link>
          </p>
        </div>
      </Section>

      {/* 4. Dokaz */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            {isEn ? "Proof from the field" : "Dokaz iz prakse"}
          </h2>
          <Card className="text-left">
            <p className="text-gray-700 text-lg leading-relaxed">
              {isEn
                ? "The clearest proof I have is a UK online store I've managed for over two years - six-figure annual revenue in GBP, POAS holding at 1.78x. Average ROAS across the eCommerce accounts I run is 3.7x, but that number alone says nothing about margin - which is why I track POAS, not raw ROAS."
                : "Najjasniji dokaz koji imam je UK online prodavnica koju vodim više od dve godine - šestocifren godišnji prihod u funtama, POAS na 1.78x. Prosečan ROAS u eCommerce nalozima koje vodim je 3.7x, ali ta brojka sama po sebi ne govori ništa o marži - zato pratim POAS, ne goli ROAS."}
            </p>
            <Link href="/case-studies" className="text-primary underline text-sm mt-4 inline-block">
              {isEn ? "See the case studies →" : "Pogledajte case studies →"}
            </Link>
          </Card>
        </div>
      </Section>

      {/* 5. Cena i proces */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {isEn ? "Price and process" : "Cena i proces"}
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            {isEn
              ? <>Monthly management starts from <strong>$2,500/mo</strong>, with a minimum of <strong>$10,000+/mo</strong> ad spend - eCommerce optimization needs time for the feed and bidding strategies to mature, so I don&apos;t take on short, single-month engagements.</>
              : <>Mesečno vođenje kreće od <strong>€700</strong>, uz uslov od <strong>€1.500+</strong> mesečnog ad spend-a - eCommerce optimizacija traži vreme da feed i bidding strategije sazru, pa ne radim kratke, jednomesečne angažmane.</>}
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {processSteps.map((step) => (
            <div key={step.title} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-card">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-accent text-gray-900 flex items-center justify-center text-sm font-bold font-heading">
                {step.number}
              </span>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-gray-600 text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-8 text-center">
          <p className="text-base text-gray-600 mb-6">
            {isEn
              ? <>Smaller budget or catalog? <Link href="/usluge/google-ads-audit" className="text-primary underline">Audit ($1,500 US / £750 UK)</Link> or <Link href="/usluge/konsultacije" className="text-primary underline">consulting ($200/hr)</Link> is a better starting point.</>
              : <>Manji budžet ili katalog? <Link href="/usluge/google-ads-audit" className="text-primary underline">Deep Audit (€450)</Link> ili <Link href="/usluge/konsultacije" className="text-primary underline">konsultacije (€150/sat)</Link> su bolji početak.</>}
          </p>
          <Button href="/kontakt" variant="primary">{ctaLabel}</Button>
        </div>
      </Section>

      {/* 6. FAQ */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {isEn ? "Questions I actually get" : "Pitanja koja dobijam"}
          </h2>
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
              <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* 7. Zatvaranje - isti CTA treci put */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            {isEn ? "Ready to scale your eCommerce account?" : "Spremni da skalirate eCommerce nalog?"}
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            {isEn
              ? "On the call we go through your feed, current campaign structure, and tracking, and I'll tell you honestly whether full management is the right next step or something smaller fits better."
              : "Na pozivu prolazimo kroz feed, trenutnu strukturu kampanja i tracking, pa vam iskreno kažem da li je puno vođenje sledeći korak ili vam treba nešto manje."}
          </p>
          <div className="mb-8">
            <Button href="/kontakt" variant="secondary">{ctaLabel}</Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <Link href="/usluge/google-ads-upravljanje" className="hover:text-accent transition-colors underline">
              {isEn ? "Management" : "Vođenje kampanja"}
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/usluge/google-ads-audit" className="hover:text-accent transition-colors underline">
              {isEn ? "Deep Audit" : "Deep Audit"}
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/usluge/konsultacije" className="hover:text-accent transition-colors underline">
              {isEn ? "Consulting" : "Konsultacije"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
