import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";
import { RelatedGlossaryTerms } from "@/components/RelatedGlossaryTerms";
import { buildMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "Google Ads for SaaS | PPC Lead Generation — Digital Jelisavac"
      : "Google Ads za SaaS | Niži CAC, brže skaliranje - Digital Jelisavac",
    description: isEn
      ? "Digital Jelisavac helps reduce CAC and scale SaaS customer acquisition with Google Ads. Focus on trial-to-paid conversions, demo bookings, and metrics that drive growth. 10+ years working with B2B SaaS companies."
      : "Digital Jelisavac smanjuje CAC i skalira SaaS acquisition kroz Google Ads. Fokus na trial-to-paid konverzije i metrike koje donose rast. 10+ godina iskustva sa B2B SaaS kompanijama.",
    locale,
    path: "/services/google-ads-for-saas",
    srPath: "/usluge/google-ads-za-saas",
  });
}

export default async function GoogleAdsZaSaasPage({ params }: Props) {
  const { locale } = await params;

  const challenges = locale === "en"
    ? [
        {
          title: "High CAC",
          description:
            "You're paying too much per trial signup, and only a small percentage converts to paying customers."
        },
        {
          title: "Optimizing to the wrong metrics",
          description:
            "Signup volume doesn't equal quality. You need to focus on trial-to-paid conversion."
        },
        {
          title: "Competitor bidding wars",
          description:
            "Everyone targets the same high-intent keywords, driving CPC sky-high."
        },
        {
          title: "Attribution complexity",
          description:
            "B2B SaaS has long sales cycles—conversions can happen months after the initial click."
        }
      ]
    : [
        {
          title: "Visok CAC",
          description:
            "Plaćate previše po trial signup-u, a mali procenat postaje paying."
        },
        {
          title: "Optimizacija ka pogrešnim metrikama",
          description:
            "Broj signups-a ne znači kvalitet. Potreban je fokus na trial-to-paid."
        },
        {
          title: "Competitor bidding war",
          description:
            "Svi targetiraju iste high-intent reči, pa CPC postaje previsok."
        },
        {
          title: "Attribution kompleksnost",
          description:
            "B2B SaaS ima dug sales cycle, pa konverzije dolaze mesecima nakon klika."
        }
      ];

  const processSteps = locale === "en"
    ? [
        {
          number: 1,
          title: "Trial/demo tracking",
          description:
            "Before any campaign changes, I set up tracking for the actions that actually matter — trial starts, demo bookings, and the events that precede a paid conversion."
        },
        {
          number: 2,
          title: "Attribution across a long cycle",
          description:
            "SaaS conversions often happen weeks after the first click, so attribution needs to account for the full trial or sales cycle, not just last-click data."
        },
        {
          number: 3,
          title: "Segmentation by plan",
          description:
            "Campaigns are segmented by the plan tier a lead is likely to land on, since a self-serve signup and an enterprise demo request have very different value and CAC tolerance."
        },
        {
          number: 4,
          title: "CAC:LTV monitoring",
          description:
            "Once trial-to-paid data starts flowing, I track CAC against LTV by campaign and keyword, not just at the account level."
        },
        {
          number: 5,
          title: "Optimization on CAC payback",
          description:
            "Budget shifts toward the campaigns with the fastest CAC payback period — the metric that actually determines whether growth is sustainable."
        }
      ]
    : [
        {
          number: 1,
          title: "Trial/demo tracking",
          description:
            "Pre bilo kakvih izmena u kampanjama, postavljam tracking za akcije koje su zaista bitne — trial start, demo booking i evente koji prethode plaćenoj konverziji."
        },
        {
          number: 2,
          title: "Atribucija kroz dug ciklus",
          description:
            "SaaS konverzije se često dešavaju nedeljama nakon prvog klika, pa atribucija mora da uzme u obzir ceo trial ili sales ciklus, ne samo last-click podatke."
        },
        {
          number: 3,
          title: "Segmentacija po planovima",
          description:
            "Kampanje se segmentiraju prema plan tier-u na koji lead verovatno spada, jer self-serve signup i enterprise demo zahtev imaju vrlo različitu vrednost i CAC toleranciju."
        },
        {
          number: 4,
          title: "CAC:LTV monitoring",
          description:
            "Kada trial-to-paid podaci počnu da pristižu, pratim CAC naspram LTV-a po kampanji i ključnoj reči, ne samo na nivou naloga."
        },
        {
          number: 5,
          title: "Optimizacija na CAC payback",
          description:
            "Budžet se pomera ka kampanjama sa najbržim CAC payback periodom — metrikom koja zaista određuje da li je rast održiv."
        }
      ];

  const idealClients = locale === "en"
    ? [
        "You have product-market fit (people pay and stay)",
        "MRR minimum $10k+ or ARR $120k+",
        "You can track downstream conversions (trial-to-paid)",
        "Budget for paid acquisition minimum $10,000/month for paid acquisition (management from $2,500/mo)"
      ]
    : [
        "Imate product-market fit (ljudi plaćaju i ostaju)",
        "MRR minimum EUR 10k+ ili ARR EUR 120k+",
        "Možete pratiti downstream konverzije (trial-to-paid)",
        "Budžet za paid acquisition minimum €1.500/mesečno (mesečno vođenje od €700/mes)"
      ];

  const industries = locale === "en"
    ? [
        "B2B SaaS",
        "Productivity tools",
        "Marketing & Sales software",
        "HR tech",
        "Project management",
        "Developer tools"
      ]
    : [
        "B2B SaaS",
        "Productivity tools",
        "Marketing i Sales software",
        "HR tech",
        "Project management",
        "Developer tools"
      ];

  const results = locale === "en"
    ? [
        {
          title: "B2B SaaS (Germany)",
          items: [
            "Demo request campaigns",
            "$95 CPA (industry benchmark $150+)",
            "35% reduction in CAC after 6 months"
          ]
        },
        {
          title: "HR Tech Startup",
          items: [
            "From $220 CAC to $105 CAC",
            "180% increase in qualified demo requests"
          ]
        }
      ]
    : [
        {
          title: "B2B SaaS (Germany)",
          items: [
            "Demo request kampanje",
            "EUR 85 CPA (industry benchmark EUR 140+)",
            "35% reduction u CAC nakon 6 meseci"
          ]
        },
        {
          title: "HR Tech Startup",
          items: [
            "Sa EUR 200 CAC na EUR 95 CAC",
            "180% povećanje qualified demo zahteva"
          ]
        }
      ];

  const faqs = locale === "en"
    ? [
        {
          question: "When is the right time for SaaS to start Google Ads?",
          answer:
            "When you have product-market fit and can track the full funnel. Retention above 80% after 3 months is a good signal that you're ready to invest in paid acquisition."
        },
        {
          question: "How long does it take to see ROI?",
          answer:
            "High-intent search delivers initial results in 2-4 weeks, while full CAC optimization takes 2-3 months as we gather data on trial-to-paid conversion rates."
        },
        {
          question: "Do you work with freemium models?",
          answer:
            "Yes, but the focus is on activated users and eventual conversion to paid plans, not just signup volume."
        },
        {
          question: "How do you handle high CPC?",
          answer:
            "I combine quality score optimization, long-tail keywords, competitor targeting, and remarketing to achieve a lower blended CAC."
        },
        {
          question: "What's the ideal starting budget?",
          answer:
            "Minimum $2,000 per month for testing and optimization. This allows enough data to make informed decisions about scaling."
        },
        {
          question: "How do you measure campaign success?",
          answer:
            "I focus on metrics that truly matter: CAC, trial-to-paid conversion rate, CAC payback period, and customer LTV. Signup volume is just a vanity metric."
        }
      ]
    : [
        {
          question: "Kada je pravo vreme za SaaS da krene sa Google Ads?",
          answer:
            "Kada imate product-market fit i možete trackati full funnel. Retention preko 80% nakon 3 meseca je dobar signal."
        },
        {
          question: "Koliko traje da se vidi ROI?",
          answer:
            "High-intent search daje prve rezultate u 2-4 nedelje, dok full CAC optimizacija traje 2-3 meseca."
        },
        {
          question: "Da li radite i sa freemium modelima?",
          answer:
            "Da, ali fokus je na activated users i eventual conversion, ne samo na signups."
        },
        {
          question: "Kako se nosite sa visokim CPC-om?",
          answer:
            "Kombinujem quality score optimizaciju, long-tail keywords, competitor targeting i remarketing za niži blended CAC."
        },
        {
          question: "Šta je idealan budžet za početak?",
          answer:
            "Minimum EUR 2,000 mesečno za testiranje i optimizaciju. To omogućava dovoljno podataka za donošenje odluka o skaliranju."
        },
        {
          question: "Kako merite uspeh kampanja?",
          answer:
            "Fokusiram se na metrikama koje su zaista bitne: CAC, trial-to-paid conversion rate, CAC payback period i customer LTV. Broj signups-a je samo vanity metrika."
        }
      ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle:
      locale === "en" ? "Google Ads Consultant" : "Google Ads Konsultant"
  };

  const serviceSchema = locale === "en"
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Google Ads for SaaS",
        description:
          "Monthly Google Ads management for SaaS — from $2,500/mo.",
        provider: {
          "@type": "Person",
          name: "Slobodan Jelisavac",
          url: "https://www.slobodan-jelisavac.com",
          jobTitle: locale === "en" ? "Google Ads Consultant" : "Google Ads Konsultant",
          knowsAbout: [
            "Google Ads",
            "SaaS Customer Acquisition",
            "B2B Marketing",
            "Performance Marketing"
          ]
        },
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
        name: "Google Ads za SaaS",
        description:
          "Mesečno Google Ads vođenje za SaaS — od €700/mes.",
        provider: {
          "@type": "Person",
          name: "Slobodan Jelisavac",
          url: "https://www.slobodan-jelisavac.com",
          jobTitle: locale === "en" ? "Google Ads Consultant" : "Google Ads Konsultant",
          knowsAbout: [
            "Google Ads",
            "SaaS Customer Acquisition",
            "B2B Marketing",
            "Performance Marketing"
          ]
        },
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
            item: "https://www.slobodan-jelisavac.com/en/services"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Google Ads for SaaS",
            item: "https://www.slobodan-jelisavac.com/en/services/google-ads-for-saas"
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
            item: "https://www.slobodan-jelisavac.com/sr/usluge"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Google Ads za SaaS",
            item: "https://www.slobodan-jelisavac.com/sr/usluge/google-ads-za-saas"
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

      {/* Dark Hero Section */}
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
              <li className="text-accent font-medium">
                {locale === "en" ? "Google Ads for SaaS" : "Google Ads za SaaS"}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {locale === "en"
                ? "Google Ads for SaaS — Reduce CAC and Scale Customer Acquisition"
                : "Google Ads za SaaS - smanjite CAC i skalirajte acquisition"}
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              {locale === "en"
                ? "Google Ads for SaaS companies requires an approach that understands SaaS economics. The goal isn't just to drive users—it's to acquire customers who convert to paid plans with high LTV. Focus on metrics that truly matter: trial-to-paid conversion, CAC payback, and customer quality."
                : "Google Ads za SaaS kompanije zahteva pristup koji razume SaaS economics. Cilj nije samo dovesti korisnike, već dovesti one koji postaju paying customers sa visokim LTV-om. Fokus je na metrikama koje su zaista bitne: trial-to-paid conversion, CAC payback i customer quality."}
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800 px-4 py-3 rounded-lg border border-slate-700">
                <div className="text-accent font-semibold text-sm">
                  {locale === "en"
                    ? "10+ years experience"
                    : "10+ godina iskustva"}
                </div>
                <div className="text-slate-400 text-xs mt-1">
                  {locale === "en"
                    ? "Google Ads specialization"
                    : "Google Ads specijalizacija"}
                </div>
              </div>
              <div className="bg-slate-800 px-4 py-3 rounded-lg border border-slate-700">
                <div className="text-accent font-semibold text-sm">
                  {locale === "en"
                    ? "−35% CAC reduction"
                    : "−35% smanjenje CAC-a"}
                </div>
                <div className="text-slate-400 text-xs mt-1">
                  {locale === "en"
                    ? "Average result in 6 months"
                    : "Prosečan rezultat u 6 meseci"}
                </div>
              </div>
              <div className="bg-slate-800 px-4 py-3 rounded-lg border border-slate-700">
                <div className="text-accent font-semibold text-sm">
                  {locale === "en"
                    ? "B2B SaaS specialization"
                    : "B2B SaaS specijalizacija"}
                </div>
                <div className="text-slate-400 text-xs mt-1">
                  {locale === "en"
                    ? "From HR tech to Dev tools"
                    : "Od HR tech do Dev tools"}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                {locale === "en"
                  ? "Book a free 20-minute call"
                  : "Zakažite besplatnih 20 minuta"}
              </Button>
              <Button href="/usluge/google-ads-za-b2b" variant="primary">
                {locale === "en"
                  ? "Google Ads for B2B"
                  : "Google Ads za B2B"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 md:px-8 pt-8 md:pt-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-primary rounded-xl p-5 md:p-6 shadow-card">
            <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
              {locale === "en" ? "Quick answer" : "Brzi odgovor"}
            </p>
            <p className="text-base text-gray-800 mb-0 leading-relaxed">
              {locale === "en"
                ? "Google Ads for SaaS works best for companies with MRR $10k+ (ARR $120k+), product-market fit, and 80%+ retention after 3 months. The focus is CAC and trial-to-paid conversion, not signup count. Monthly management starts from $2,500/mo."
                : "Google Ads za SaaS radi najbolje za kompanije sa MRR €10k+ (ARR €120k+), product-market fit-om i retencijom 80%+ posle 3 meseca. Fokus je na CAC-u i trial-to-paid konverziji, ne na broju signup-ova. Mesečno vođenje od €700/mes."}
            </p>
          </div>
        </div>
      </section>

      {/* SEO Intro Section */}
      <section className="bg-white border-b border-gray-100 py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              {locale === "en"
                ? "SaaS companies face unique challenges when it comes to paid acquisition. Unlike traditional eCommerce where conversions happen immediately, B2B SaaS involves long sales cycles, free trial periods, and complex decision-making processes. Your Google Ads strategy must be tailored to these realities."
                : "SaaS kompanije imaju jedinstvene izazove kada je u pitanju paid acquisition. Za razliku od tradicionalnog eCommerce-a gde se konverzija dešava odmah, B2B SaaS ima dug sales cycle, besplatne trial periode i kompleksne decision-making procese. Google Ads strategija mora biti prilagođena ovim realnostima."}
            </p>
            <p>
              {locale === "en"
                ? "My approach focuses on downstream metrics—not just how many trial signups you get, but how many convert to paying customers with strong retention. This means integrating Google Ads data with your CRM, tracking trial-to-paid conversion rates by campaign, and optimizing toward a CAC that makes sense for your LTV."
                : "Moj pristup fokusira se na downstream metrike - ne samo koliko trial signups imate, već koliko njih postaje paying customers sa dobrim retention-om. To znači integraciju Google Ads podataka sa vašim CRM-om, praćenje trial-to-paid conversion rate-a po kampanjama i optimizaciju ka CAC-u koji ima smisla za vaš LTV."}
            </p>
            <p className="text-base text-gray-500">
              {locale === "en"
                ? <>If you're looking for lead generation for other B2B services outside of software, see <Link href="/usluge/google-ads-za-b2b" className="text-primary underline">Google Ads for B2B</Link>.</>
                : <>Ako tražite lead generation za druge B2B usluge van softvera, pogledajte <Link href="/usluge/google-ads-za-b2b" className="text-primary underline">Google Ads za B2B</Link>.</>}
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "SaaS Acquisition Challenges"
              : "SaaS acquisition izazovi"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "B2B SaaS companies face specific challenges that traditional Google Ads strategies don't address."
              : "B2B SaaS kompanije se susreću sa specifičnim izazovima koje tradicionalne Google Ads strategije ne rešavaju."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Ideal Clients Section */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Who This Service Is For"
              : "Za kogo je SaaS Google Ads usluga"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "This service isn't for everyone. It works best with SaaS companies that already have a solid foundation and are ready to scale."
              : "Ova usluga nije za sve. Najbolje funkcioniše sa SaaS kompanijama koje već imaju osnovu i spremne su da skaliraju."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-3 text-gray-700">
              {idealClients.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent mt-1 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-base text-gray-500 mt-6 pt-6 border-t border-gray-200">
              <strong>
                {locale === "en"
                  ? "I work particularly well with:"
                  : "Posebno dobro radim sa:"}
              </strong>{" "}
              {industries.join(", ")}.
            </div>
            <div className="text-base text-gray-500 mt-3 bg-yellow-50 border-l-4 border-accent p-4 rounded">
              <strong>
                {locale === "en" ? "Note:" : "Napomena:"}
              </strong>{" "}
              {locale === "en"
                ? "For very early-stage startups still testing PMF, Google Ads may not be the right channel yet. First validate product-market fit, then invest in paid acquisition."
                : "Za very early stage startup-e koji još testiraju PMF, Google Ads možda nije pravi kanal. Prvo validujte product-market fit, pa onda krećite sa paid acquisition."}
            </div>
          </Card>
        </div>
      </Section>

      {/* Process — SaaS setup */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "SaaS setup process" : "SaaS setup proces"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "From trial/demo tracking to optimization on CAC payback — a 5-step process."
              : "Od trial/demo trackinga do optimizacije na CAC payback — proces u 5 koraka."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
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
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CAC and LTV definition box */}
      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 shadow-card">
            <h2 className="text-2xl font-heading font-bold mb-4">
              {locale === "en"
                ? "CAC and LTV in a Google Ads context"
                : "CAC i LTV u Google Ads kontekstu"}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              {locale === "en"
                ? "CAC (Customer Acquisition Cost) is what it costs to turn a click into a paying customer, and LTV (Lifetime Value) is what that customer is worth over the full relationship. In Google Ads, every bid decision is really a bet on this ratio — if CAC creeps above what LTV supports, growth stops being profitable no matter how many trials you generate."
                : "CAC (Customer Acquisition Cost) je trošak pretvaranja klika u plaćajućeg korisnika, a LTV (Lifetime Value) je vrednost tog korisnika tokom celog odnosa sa vama. U Google Ads-u je svaka odluka o bidu zapravo opklada na ovaj odnos — ako CAC prevaziđe ono što LTV podržava, rast prestaje da bude profitabilan bez obzira na broj generisanih trial-ova."}
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {locale === "en"
                ? "The formula is straightforward: CAC = total acquisition cost / number of new customers. As a rule of thumb, a healthy LTV:CAC ratio target is 3:1 or higher — below that, the economics of paid acquisition become fragile."
                : "Formula je jednostavna: CAC = ukupan trošak akvizicije / broj novih kupaca. Kao orijentir, zdrav cilj za LTV:CAC odnos je 3:1 ili viši — ispod toga, ekonomija paid acquisition-a postaje krhka."}
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm text-gray-800">
              CAC = {locale === "en" ? "total acquisition cost" : "ukupan trošak akvizicije"} / {locale === "en" ? "number of new customers" : "broj novih kupaca"}
              <br />
              LTV:CAC {locale === "en" ? "target" : "cilj"} = 3:1+
            </div>
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "SaaS Campaign Results"
              : "SaaS kampanje rezultati"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Examples of results I've achieved with B2B SaaS companies through focused Google Ads optimization."
              : "Primeri rezultata koje sam postigao sa B2B SaaS kompanijama kroz fokusiranu Google Ads optimizaciju."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {results.map((result) => (
            <Card key={result.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-4 text-yellow-700">
                {result.title}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {result.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent mt-1 flex-shrink-0">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="max-w-4xl mx-auto mt-8">
          <Card className="h-full">
            <h3 className="text-lg font-heading font-semibold mb-3 text-yellow-700">
              {locale === "en" ? "HR Tech Startup — mini case" : "HR Tech Startup — mini case"}
            </h3>
            <p className="text-gray-600 text-base">
              {locale === "en"
                ? "This HR tech startup had demo request campaigns running, but CAC was climbing and there was no clear read on which channels produced demos that converted to paid seats. After tightening targeting toward higher-intent search terms and connecting demo-to-paid data back into the account, CAC dropped from $220 to $105 while qualified demo requests grew 180% — proof that a lower CAC and higher lead quality can move together when the account optimizes on the right signal."
                : "Ovaj HR tech startup je imao demo request kampanje, ali CAC je rastao i nije bilo jasnog uvida u to koji kanali donose demo zahteve koji konvertuju u plaćene korisnike. Nakon sužavanja targetiranja ka high-intent search terminima i povezivanja demo-to-paid podataka nazad u nalog, CAC je pao sa EUR 200 na EUR 95, dok su kvalifikovani demo zahtevi porasli 180% — dokaz da niži CAC i veći kvalitet leadova mogu ići zajedno kada nalog optimizuje ka pravom signalu."}
            </p>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Button href="/case-studies" variant="primary">
            {locale === "en"
              ? "All SaaS case studies"
              : "Svi SaaS case studies"}
          </Button>
        </div>
      </Section>

      <RelatedGlossaryTerms
        slugs={["ltv", "conversion-rate", "ga4", "remarketing", "first-party-data"]}
        locale={locale}
      />

      {/* FAQ Section - Accordion Style */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Frequently Asked Questions"
              : "Često postavljana pitanja"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Answers to common questions about Google Ads strategies for SaaS companies."
              : "Odgovori na najčešća pitanja o Google Ads strategijama za SaaS kompanije."}
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
                <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
                  &#9660;
                </span>
              </summary>
              <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "What's your next step?" : "Koji je vaš sledeći korak?"}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-base">
          <Link href="/usluge/google-ads-upravljanje" className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-card transition">
            {locale === "en" ? "Ready for management → eCommerce Growth (from $2,500/mo)" : "Spremni za vođenje → eCommerce Growth (od €700/mes)"}
          </Link>
          <Link href="/usluge/starter-paket" className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-card transition">
            {locale === "en" ? "Just setting up your account → Kickstart (from $990)" : "Tek postavljate nalog → Kickstart (od €690)"}
          </Link>
          <Link href="/usluge/google-ads-audit" className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-card transition">
            {locale === "en" ? "Diagnosis first → Deep Audit + Action Plan (from $500)" : "Prvo dijagnostika → Deep Audit + Action Plan (od €450)"}
          </Link>
          <Link href="/usluge/konsultacije" className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-card transition">
            {locale === "en" ? "Smaller budget or a quick answer → Consulting ($200/hr)" : "Manji budžet ili brzi savet → Konsultacije (€150/sat)"}
          </Link>
        </div>
      </Section>

      {/* Dark CTA Section */}
      <section className="bg-slate-900 text-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Ready to Optimize Your SaaS Acquisition?"
              : "Spremni da optimizujete SaaS acquisition?"}
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            {locale === "en"
              ? "Book a free consultation and let's discuss how Google Ads can reduce CAC and scale growth for your SaaS."
              : "Zakažite besplatnu konsultaciju i razgovarajmo kako Google Ads može smanjiti CAC i skalirati growth za vaš SaaS."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="/kontakt" variant="secondary">
              {locale === "en"
                ? "Book a free 20-minute call"
                : "Zakažite besplatnu konsultaciju"}
            </Button>
            <Button href="/usluge/search-kampanje" variant="primary">
              {locale === "en" ? "Search campaigns" : "Search kampanje"}
            </Button>
          </div>
          <div className="text-sm text-slate-400 space-x-4">
            <Link
              href="/usluge/remarketing"
              className="hover:text-accent transition-colors underline"
            >
              {locale === "en" ? "Remarketing" : "Remarketing"}
            </Link>
            <span className="text-slate-600">·</span>
            <Link
              href="/usluge/google-ads-za-b2b"
              className="hover:text-accent transition-colors underline"
            >
              {locale === "en" ? "Google Ads for B2B" : "Google Ads za B2B"}
            </Link>
            <span className="text-slate-600">·</span>
            <Link
              href="/usluge/search-kampanje"
              className="hover:text-accent transition-colors underline"
            >
              {locale === "en" ? "Search campaigns" : "Search kampanje"}
            </Link>
            <span className="text-slate-600">·</span>
            <Link
              href="/usluge/google-ads-audit"
              className="hover:text-accent transition-colors underline"
            >
              {locale === "en" ? "Deep Audit" : "Deep Audit"}
            </Link>
            <span className="text-slate-600">·</span>
            <Link
              href="/usluge/starter-paket"
              className="hover:text-accent transition-colors underline"
            >
              {locale === "en" ? "Kickstart" : "Kickstart"}
            </Link>
            <span className="text-slate-600">·</span>
            <Link
              href="/case-studies"
              className="hover:text-accent transition-colors underline"
            >
              {locale === "en" ? "Case Studies" : "Case Studies"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
