import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title:
        "Google Ads Management Services | PPC Account Management — Slobodan Jelisavac",
      description:
        "Professional Google Ads management for eCommerce and B2B companies. 180%+ ROAS improvement, 9+ years of experience. Book your free consultation today."
    };
  }

  return {
    title:
      "Google Oglašavanje Srbija | Upravljanje Google Ads Nalogom — Slobodan Jelisavac",
    description:
      "Profesionalno upravljanje Google oglašavanjem za eCommerce i B2B. 180%+ poboljšanje ROAS-a, 10+ godina iskustva. Zakažite besplatnu konsultaciju."
  };
}

export default async function GoogleAdsUpravljanjePage({ params }: Props) {
  const { locale } = await params;

  const problems =
    locale === "en"
      ? [
          {
            icon: "💸",
            title: "Budget waste without results",
            description:
              "Campaigns are burning through your budget, but conversions are missing or too expensive. You lack clear visibility into what's working."
          },
          {
            icon: "⏰",
            title: "No time or expertise",
            description:
              "Google Ads requires constant monitoring and optimization, but you have a business to run."
          },
          {
            icon: "😤",
            title: "Bad past experiences",
            description:
              "Agencies just set up campaigns without real strategy. You never saw genuine ROI."
          },
          {
            icon: "📊",
            title: "Growth has stalled",
            description:
              "Campaigns work okay, but you don't know how to scale them without inflating costs."
          }
        ]
      : [
          {
            icon: "💸",
            title: "Bacanje novca bez rezultata",
            description:
              "Kampanje troše budžet, ali konverzije izostaju ili su preskupe. Nemate jasnu sliku šta funkcioniše."
          },
          {
            icon: "⏰",
            title: "Nedostatak vremena i ekspertize",
            description:
              "Google Ads zahteva stalno praćenje i optimizaciju, a vi imate biznis koji vodite."
          },
          {
            icon: "😤",
            title: "Prethodna loša iskustva",
            description:
              "Agencije su samo podešavale kampanje bez stvarne strategije. Niste videli pravi ROI."
          },
          {
            icon: "📊",
            title: "Rast je stao",
            description:
              "Kampanje rade solidno, ali ne znate kako da ih skalirate bez povećanja troškova."
          }
        ];

  const solutions =
    locale === "en"
      ? [
          {
            title: "Deep analysis before launch",
            description:
              "Understanding your business model, margins, ideal customers, and competition — before spending a single dollar on ads."
          },
          {
            title: "Custom campaign structure",
            description:
              "Campaigns tailored to your goals, whether the focus is ROAS, CPA, lead quality, or brand awareness."
          },
          {
            title: "Proactive optimization",
            description:
              "I track signals and react before they impact performance. Daily analysis, not monthly."
          },
          {
            title: "Transparent reporting",
            description:
              "You know exactly where every euro goes and what you get in return. No hidden metrics or vague reports."
          }
        ]
      : [
          {
            title: "Dubinska analiza pre početka",
            description:
              "Razumevanje vašeg biznis modela, marži, idealnih kupaca i konkurencije — pre nego što potrošim i jedan dinar na oglase."
          },
          {
            title: "Struktura kampanja po meri",
            description:
              "Kampanje prilagođene vašim ciljevima, bilo da je fokus na ROAS, CPA, lead quality ili brand awareness."
          },
          {
            title: "Proaktivna optimizacija",
            description:
              "Pratim signale i reagujem pre nego što utiču na performanse. Svakodnevna analiza, ne mesečna."
          },
          {
            title: "Transparentan reporting",
            description:
              "Tačno znate gde ide svaki EUR i šta dobijate zauzvrat. Bez skrivenih metrika ili nejasnih izveštaja."
          }
        ];

  const inclusions =
    locale === "en"
      ? [
          {
            title: "Strategy and planning",
            items: [
              "Goal and KPI definition",
              "Keyword and competitor research",
              "Campaign structure creation",
              "Budget allocation planning"
            ]
          },
          {
            title: "Setup and implementation",
            items: [
              "Campaign creation or restructuring",
              "Ad copywriting (responsive search & display)",
              "Bid strategy configuration",
              "Audience targeting and remarketing lists"
            ]
          },
          {
            title: "Campaign optimization",
            items: [
              "Daily performance monitoring",
              "A/B testing of ads",
              "Bid adjustments by device, location, and time",
              "Negative keywords and placement exclusions"
            ]
          },
          {
            title: "Tracking and analytics",
            items: [
              "Google Analytics 4 integration",
              "Conversion tracking setup",
              "Custom reporting dashboards",
              "Attribution modeling"
            ]
          },
          {
            title: "Monthly reporting",
            items: [
              "Key metrics and trends overview",
              "Analysis of actions taken",
              "Plan and recommendations for next period",
              "Live call to discuss results"
            ]
          }
        ]
      : [
          {
            title: "Strategija i planiranje",
            items: [
              "Definisanje ciljeva i KPI-jeva",
              "Istraživanje ključnih reči i konkurencije",
              "Kreiranje strukture kampanja",
              "Planiranje budžeta po kampanjama"
            ]
          },
          {
            title: "Setup i implementacija",
            items: [
              "Kreiranje ili restruktuiranje kampanja",
              "Pisanje oglasa (responsive search i display)",
              "Podešavanje bid strategija",
              "Audience targeting i remarketing liste"
            ]
          },
          {
            title: "Optimizacija kampanja",
            items: [
              "Svakodnevno praćenje performansi",
              "A/B testiranje oglasa",
              "Bid adjustments po uređaju, lokaciji i vremenu",
              "Negativne ključne reči i placement exclusions"
            ]
          },
          {
            title: "Tracking i analitika",
            items: [
              "Google Analytics 4 integracija",
              "Conversion tracking podešavanje",
              "Custom reporting dashboards",
              "Attribution modeling"
            ]
          },
          {
            title: "Mesečni reporting",
            items: [
              "Pregled ključnih metrika i trendova",
              "Analiza sprovedenih akcija",
              "Plan i preporuke za sledeći period",
              "Live poziv za diskusiju rezultata"
            ]
          }
        ];

  const campaignTypes =
    locale === "en"
      ? ([
          {
            title: "Search campaigns",
            description:
              "Direct targeting of users actively searching for your products or services on Google search.",
            href: "/usluge/search-kampanje",
            cta: "Learn more about Search campaigns"
          },
          {
            title: "Shopping campaigns",
            description:
              "Feed optimization, campaign structure, and bid strategies for maximum ROAS in eCommerce.",
            href: "/usluge/google-shopping",
            cta: "Learn more about Shopping campaigns"
          },
          {
            title: "Performance Max",
            description:
              "Strategic PMax with control, clear audience signals, and transparent results.",
            href: "/usluge/performance-max",
            cta: "Learn more about Performance Max"
          },
          {
            title: "Display and remarketing",
            description:
              "Precise targeting to bring back visitors and increase conversions.",
            href: "/usluge/remarketing",
            cta: "Learn more about remarketing"
          },
          {
            title: "YouTube ads",
            description:
              "Video advertising for awareness and direct response through skippable and bumper formats.",
            href: "/usluge/youtube-oglasi",
            cta: "Learn more about YouTube ads"
          }
        ] as const)
      : ([
          {
            title: "Search kampanje",
            description:
              "Direktno targetiranje korisnika koji aktivno traže vaše proizvode ili usluge na Google pretrazi.",
            href: "/usluge/search-kampanje",
            cta: "Više o Search kampanjama"
          },
          {
            title: "Shopping kampanje",
            description:
              "Optimizacija feed-a, struktura kampanja i bid strategije za maksimalan ROAS u eCommerce-u.",
            href: "/usluge/google-shopping",
            cta: "Više o Shopping kampanjama"
          },
          {
            title: "Performance Max",
            description:
              "Strateški PMax uz kontrolu, jasne audience signale i transparentne rezultate.",
            href: "/usluge/performance-max",
            cta: "Više o Performance Max"
          },
          {
            title: "Display i remarketing",
            description:
              "Precizno targetiranje za povratak posetilaca i povećanje konverzija.",
            href: "/usluge/remarketing",
            cta: "Više o remarketingu"
          },
          {
            title: "YouTube oglasi",
            description:
              "Video oglašavanje za awareness i direct response kroz skippable i bumper formate.",
            href: "/usluge/youtube-oglasi",
            cta: "Više o YouTube oglasima"
          }
        ] as const);

  const processSteps =
    locale === "en"
      ? [
          {
            number: 1,
            title: "Free consultation",
            description:
              "30-minute call about your goals, current campaign status, and challenges."
          },
          {
            number: 2,
            title: "Audit and strategy",
            description:
              "Detailed analysis of existing account and strategy development with clear projections."
          },
          {
            number: 3,
            title: "Onboarding",
            description:
              "Access setup, communication channels definition, and reporting agreement."
          },
          {
            number: 4,
            title: "Implementation",
            description:
              "Restructuring or creating campaigns according to agreed strategy."
          },
          {
            number: 5,
            title: "Optimization and scaling",
            description:
              "Continuous performance improvement and scaling of winning campaigns."
          }
        ]
      : [
          {
            number: 1,
            title: "Besplatna konsultacija",
            description:
              "30-minutni poziv o vašim ciljevima, trenutnom stanju kampanja i izazovima."
          },
          {
            number: 2,
            title: "Audit i strategija",
            description:
              "Detaljna analiza postojećeg naloga i izrada strategije sa jasnim projekcijama."
          },
          {
            number: 3,
            title: "Onboarding",
            description:
              "Setup pristupa, definisanje komunikacionih kanala i dogovor oko reportinga."
          },
          {
            number: 4,
            title: "Implementacija",
            description:
              "Restruktuiranje ili kreiranje kampanja prema dogovorenoj strategiji."
          },
          {
            number: 5,
            title: "Optimizacija i skaliranje",
            description:
              "Kontinuirano poboljšanje performansi i skaliranje pobedničkih kampanja."
          }
        ];

  const results =
    locale === "en"
      ? [
          {
            value: "180%+",
            label: "average ROAS improvement in first 90 days"
          },
          { value: "−35%", label: "CPA reduction through continuous optimization" },
          { value: "€2M+", label: "managed ad spend annually" }
        ]
      : [
          {
            value: "180%+",
            label: "prosečno poboljšanje ROAS-a u prvih 90 dana"
          },
          { value: "−35%", label: "smanjenje CPA kroz kontinuiranu optimizaciju" },
          { value: "€2M+", label: "upravljanog ad spend-a godišnje" }
        ];

  const faqs =
    locale === "en"
      ? [
          {
            question: "How long does it take to see results?",
            answer:
              "I implement first optimizations immediately after taking over the account. Significant improvements come after 4-6 weeks, and for full optimization expect 2-3 months. Reason: Google's algorithm needs time to learn and adjust."
          },
          {
            question: "Do you need access to my Google Ads account?",
            answer:
              "Yes, admin access is required so I can implement all necessary changes. The account remains under your ownership — I get access through MCC (My Client Center)."
          },
          {
            question: "What if I already have campaigns that work?",
            answer:
              "I start with an audit of the current state and identify opportunities for improvement before making major changes. I never tear down what's working — I build on it."
          },
          {
            question: "Do you work with small budgets?",
            answer:
              "For monthly ad spend budgets below €800, I recommend the Starter package or one-time consultations where I train you to manage campaigns yourself."
          },
          {
            question: "How often will we communicate?",
            answer:
              "Minimum one monthly call plus written report. For urgent questions, I'm available via Slack or email within 24 hours."
          },
          {
            question: "What's the minimum contract length?",
            answer:
              "I recommend a minimum of 3 months for testing and optimization. No long-term contracts — results keep me, not contracts."
          },
          {
            question: "How much does Google Ads cost?",
            answer:
              "The cost of Google Ads depends on industry, competition, and goals. Average CPC varies from €0.10-0.80 in emerging markets to €1-5+ in competitive Western markets. My management services start at €750/month, and recommended minimum ad spend is from €500/month for visible results."
          },
          {
            question: "Does Google Ads work for small businesses?",
            answer:
              "Absolutely. Google Ads is ideal for small businesses because you only pay when someone clicks on your ad. The key is proper campaign structure, smart targeting, and eliminating unnecessary costs through negative keywords."
          }
        ]
      : [
          {
            question: "Koliko vremena treba da se vide rezultati?",
            answer:
              "Prve optimizacije sprovodim odmah po preuzimanju naloga. Značajna poboljšanja dolaze nakon 4-6 nedelja, a za punu optimizaciju računajte 2-3 meseca. Razlog: Google-ovom algoritmu treba vreme da nauči i prilagodi se."
          },
          {
            question: "Da li morate imati pristup mom Google Ads nalogu?",
            answer:
              "Da, potreban je admin pristup kako bih mogao da sprovodim sve neophodne izmene. Nalog ostaje u vašem vlasništvu — ja dobijam pristup kroz MCC (My Client Center)."
          },
          {
            question: "Šta ako već imam kampanje koje rade?",
            answer:
              "Počinjem auditom postojećeg stanja i identifikujem prilike za poboljšanje pre većih promena. Nikada ne rušim ono što funkcioniše — nadograđujem."
          },
          {
            question: "Da li radite i sa malim budžetima?",
            answer:
              "Za mesečne ad spend budžete ispod €800 preporučujem Starter paket ili jednokratne konsultacije gde vas obučim da sami vodite kampanje."
          },
          {
            question: "Koliko često ćemo komunicirati?",
            answer:
              "Minimum jedan mesečni call plus pisani report. Za hitna pitanja dostupan sam putem Slack-a ili email-a u roku od 24h."
          },
          {
            question: "Koja je minimalna dužina saradnje?",
            answer:
              "Preporučujem minimum 3 meseca za testiranje i optimizaciju. Nema dugoročnih ugovora — rezultati me zadržavaju, ne ugovori."
          },
          {
            question: "Koliko košta Google oglašavanje u Srbiji?",
            answer:
              "Cena Google oglašavanja zavisi od industrije, konkurencije i ciljeva. Prosečan CPC u Srbiji je €0,10-0,80. Moje usluge upravljanja počinju od €350/mesečno, a preporučeni minimalni ad spend je od €500/mesečno za vidljive rezultate."
          },
          {
            question: "Da li Google oglašavanje funkcioniše za malu firmu?",
            answer:
              "Apsolutno. Google oglašavanje je idealno za male firme jer plaćate samo kada neko klikne na vaš oglas. Ključ je pravilna struktura kampanja, pametno targetiranje i eliminacija nepotrebnih troškova kroz negativne ključne reči."
          }
        ];

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle: "Google Ads Strategist"
  };

  const serviceSchema =
    locale === "en"
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Google Ads Management Services",
          description:
            "Professional Google Ads management and PPC account management for eCommerce and B2B companies globally. Search, Shopping, Performance Max, Display, and YouTube campaigns with proven results.",
          provider: {
            "@type": "Person",
            name: "Slobodan Jelisavac",
            url: "https://www.slobodan-jelisavac.com",
            jobTitle: "Google Ads Strategist",
            knowsAbout: [
              "Google Ads",
              "Performance Marketing",
              "eCommerce Advertising",
              "B2B Lead Generation"
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
          serviceType: "Google Ads Management",
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "750",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "750",
              priceCurrency: "EUR",
              unitText: "monthly",
              description: "Pricing starts at €750/month for Standard package"
            }
          }
        }
      : {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Google oglašavanje — upravljanje Google Ads nalogom",
          description:
            "Profesionalno Google oglašavanje i upravljanje Google Ads nalogom za eCommerce i B2B kompanije u Srbiji, UK i EU. Search, Shopping, Performance Max, Display i YouTube kampanje.",
          provider: {
            "@type": "Person",
            name: "Slobodan Jelisavac",
            url: "https://www.slobodan-jelisavac.com",
            jobTitle: "Google Ads Strategist",
            knowsAbout: [
              "Google Ads",
              "Performance Marketing",
              "eCommerce Advertising",
              "B2B Lead Generation"
            ]
          },
          areaServed: [
            { "@type": "Country", name: "Serbia" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Germany" },
            { "@type": "Country", name: "Croatia" }
          ],
          serviceType: "Google Ads Management",
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: "350",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "350",
              priceCurrency: "EUR",
              unitText: "mesečno",
              description: "Cene počinju od €350/mesečno za Starter paket"
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

  const breadcrumbSchema =
    locale === "en"
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
              item: "https://www.slobodan-jelisavac.com/usluge"
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Google Ads Management",
              item: "https://www.slobodan-jelisavac.com/usluge/google-ads-upravljanje"
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
              name: "Google Ads upravljanje",
              item: "https://www.slobodan-jelisavac.com/usluge/google-ads-upravljanje"
            }
          ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero — dark, impact-driven */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
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
                {locale === "en" ? "Google Ads Management" : "Google Ads upravljanje"}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {locale === "en"
                ? "Google Ads management that delivers measurable results"
                : "Google oglašavanje koje donosi merljive rezultate"}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {locale === "en" ? (
                <>
                  Looking for professional <strong className="text-white">Google Ads management</strong> that
                  actually delivers results? I handle complete management of your Google Ads
                  account — from strategy and campaign structure to daily optimization.
                  Focus: <strong className="text-white">ROAS, CPA, and real revenue growth</strong> for
                  eCommerce and B2B companies globally.
                </>
              ) : (
                <>
                  Tražite profesionalno <strong className="text-white">Google oglašavanje</strong> koje
                  zaista donosi rezultate? Preuzimam kompletno upravljanje vašim Google Ads
                  nalogom — od strategije i strukture kampanja do svakodnevne optimizacije.
                  Fokus: <strong className="text-white">ROAS, CPA i realan rast prihoda</strong> za
                  eCommerce i B2B kompanije u Srbiji i širom Evrope.
                </>
              )}
            </p>

            {/* Results — social proof odmah u heroju */}
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-lg">
              {results.map((result) => (
                <div key={result.label}>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">
                    {result.value}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    {result.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                {locale === "en"
                  ? "Book a free consultation"
                  : "Zakažite besplatnu konsultaciju"}
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
              <span>{locale === "en" ? "9+ years of experience" : "10+ godina iskustva"}</span>
              <span>3x UK Search Awards{locale === "en" ? " winner" : ""}</span>
              <span>{locale === "en" ? "50+ brands across 6+ countries" : "50+ brendova iz 6+ zemalja"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Intro */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            {locale === "en" ? (
              <>
                <strong>Google Ads</strong> is the fastest way to reach customers who are
                actively searching for your products or services. But without proper strategy,
                campaign structure, and continuous optimization — it easily turns into wasted money.
                That's where I come in.
              </>
            ) : (
              <>
                <strong>Google oglašavanje</strong> je najbrži način da dođete do kupaca koji
                aktivno traže vaše proizvode ili usluge. Ali bez pravilne strategije, strukture
                kampanja i kontinuirane optimizacije — lako se pretvori u bacanje novca.
                Upravo tu ulazim ja.
              </>
            )}
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {locale === "en" ? (
              <>
                With over a decade of experience managing Google Ads campaigns for brands
                across the UK, Germany, US, and beyond, I help companies turn ad spend into
                measurable revenue. No cookie-cutter approaches — every strategy is tailored
                to your business, industry, and goals.
              </>
            ) : (
              <>
                Sa preko decenije iskustva u vođenju Google Ads kampanja za brendove
                u Srbiji, UK, Nemačkoj i Hrvatskoj, pomažem kompanijama da pretvore
                ad spend u merljiv prihod. Bez generičkih pristupa — svaka strategija
                je prilagođena vašem biznisu, industriji i ciljevima.
              </>
            )}
          </p>
        </div>
      </section>

      {/* Problem — PAS framework */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Do you recognize these challenges?"
              : "Da li prepoznajete ove izazove?"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Most companies that come to me for Google Ads management have similar campaign issues."
              : "Većina kompanija koje dolaze do mene za upravljanje Google oglašavanjem ima slične probleme sa kampanjama."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <Card key={problem.title} className="h-full">
              <div className="text-3xl mb-3">{problem.icon}</div>
              <h3 className="text-lg font-heading font-semibold mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-sm">{problem.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Solution */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "What you get with professional Google Ads management"
              : "Šta dobijate sa profesionalnim Google oglašavanjem"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Strategic approach to campaigns, not just account setup. Every decision is data-driven and aligned with your business goals."
              : "Strategijski pristup kampanjama, ne samo podešavanja u nalogu. Svaka odluka je zasnovana na podacima i vašim poslovnim ciljevima."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution) => (
            <Card key={solution.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-600">{solution.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* What's included */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "What's included in Google Ads management"
              : "Šta uključuje upravljanje Google Ads nalogom"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Complete Google Ads service — from research and setup to optimization and monthly reporting."
              : "Kompletna usluga Google oglašavanja — od istraživanja i postavljanja do optimizacije i mesečnog reportinga."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inclusions.map((block) => (
            <Card key={block.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-4">
                {block.title}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Campaign types */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Google Ads campaign types I manage"
              : "Tipovi Google Ads kampanja koje vodim"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Each campaign type requires a specific approach. I choose the right combination based on your goals, industry, and budget."
              : "Svaki tip kampanje zahteva specifičan pristup. Biram pravu kombinaciju na osnovu vaših ciljeva, industrije i budžeta."}
          </p>
          <p className="text-sm text-gray-500 mt-3">
            {locale === "en" ? (
              <>
                Read detailed information about each campaign type in the{" "}
                <Link href="/blog" className="text-primary underline">
                  Google Ads guide
                </Link>
              </>
            ) : (
              <>
                Detaljno o svakom tipu kampanje čitajte u{" "}
                <Link href="/blog" className="text-primary underline">
                  Google Ads vodiču
                </Link>
              </>
            )}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaignTypes.map((campaign) => (
            <Card key={campaign.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {campaign.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {campaign.description}
              </p>
              <Link
                href={campaign.href}
                className="text-primary font-semibold text-sm"
              >
                {campaign.cta} →
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Who is this for — ICP targeting */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Who is this service for"
              : "Za koga je ova usluga"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Google Ads works best for businesses with a clear product or service and commitment to long-term growth."
              : "Google oglašavanje najbolje funkcioniše za biznise sa jasnim proizvodom ili uslugom i spremnošću za dugoročan rast."}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white border-2 border-gray-900 rounded-xl p-6 shadow-card">
            <h3 className="font-heading font-bold text-lg mb-4">
              {locale === "en" ? "eCommerce brands" : "eCommerce brendovi"}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Online stores looking for higher ROAS from Google Shopping and PMax"
                  : "Online prodavnice koje žele veći ROAS iz Google Shopping-a i PMax-a"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Brands with 50+ products that need structured feed optimization"
                  : "Brendovi sa 50+ proizvoda koji trebaju strukturiranu feed optimizaciju"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Companies with ad spend budget of minimum €500/month"
                  : "Firme sa ad spend budžetom od minimum €500/mesečno"}
              </li>
            </ul>
          </div>
          <div className="bg-white border-2 border-gray-900 rounded-xl p-6 shadow-card">
            <h3 className="font-heading font-bold text-lg mb-4">
              {locale === "en" ? "B2B & service companies" : "B2B i uslužne firme"}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Companies generating leads through Search campaigns"
                  : "Kompanije koje generišu leadove putem Search kampanja"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Service companies with high customer lifetime value (LTV)"
                  : "Uslužne firme sa visokom vrednošću po klijentu (LTV)"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "SaaS companies targeting specific niches"
                  : "SaaS kompanije koje targetiraju specifične niše"}
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            {locale === "en" ? (
              <>
                I work with clients from the UK, US, Germany, Australia, and beyond.{" "}
                <Link href={{ pathname: "/blog/[slug]", params: { slug: "ecommerce-vs-b2b" } }} className="text-primary underline">
                  Read about differences between eCommerce and B2B strategies →
                </Link>
              </>
            ) : (
              <>
                Radim sa klijentima iz Srbije, UK, Nemačke i Hrvatske.{" "}
                <Link href={{ pathname: "/blog/[slug]", params: { slug: "ecommerce-vs-b2b" } }} className="text-primary underline">
                  Pročitajte razlike između eCommerce i B2B strategija →
                </Link>
              </>
            )}
          </p>
        </div>
      </Section>

      {/* Process — sequential, not grid */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "How the collaboration process works"
              : "Kako izgleda proces saradnje"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "From first call to measurable results — simple and transparent process in 5 steps."
              : "Od prvog poziva do merljivih rezultata — jednostavan i transparentan proces u 5 koraka."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex items-start gap-4 bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card"
              >
                <span
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-heading ${
                    index === processSteps.length - 1
                      ? "bg-yellow-400 text-gray-900"
                      : "bg-gray-900 text-white"
                  }`}
                >
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Choose your plan"
              : "Izaberite model saradnje"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Transparent pricing with no hidden costs. Each package includes complete Google Ads account management."
              : "Transparentne cene bez skrivenih troškova. Svaki paket uključuje kompletno upravljanje Google Ads nalogom."}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Starter */}
          <Card className="h-full">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              {locale === "en" ? "Start with the basics" : "Počnite sa osnovom"}
            </p>
            <h3 className="text-xl font-heading font-bold mb-1">
              {locale === "en" ? "Starter Package" : "Starter paket"}
            </h3>
            <p className="text-2xl font-heading font-bold text-primary mb-3">
              {locale === "en" ? "from €500" : "od €350"}<span className="text-sm text-gray-500 font-normal">{locale === "en" ? "/mo" : "/mes"}</span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {locale === "en"
                ? "For companies starting with Google Ads or looking to achieve better results with existing campaigns. Focus on fundamentals that deliver measurable ROI."
                : "Za firme koje tek počinju sa Google oglašavanjem ili žele da ostvare bolje rezultate. Fokus na osnovu i ono što donosi realne rezultate — bez komplikovanja."}
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Complete analysis and campaign setup"
                  : "Kompletna analiza i setup kampanja"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en" ? "Biweekly optimization" : "Biweekly optimizacija"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Monthly report with key metrics"
                  : "Mesečni report sa ključnim metrikama"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Focus on what delivers ROI"
                  : "Fokus na ono što donosi ROI"}
              </li>
            </ul>
            <Button href="/kontakt" variant="primary">
              {locale === "en" ? "Schedule a consultation" : "Zakažite konsultaciju"}
            </Button>
          </Card>

          {/* Standardna */}
          <div className="bg-white border-2 border-yellow-400 rounded-lg p-6 shadow-card relative">
            <span className="absolute -top-3 left-6 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded">
              {locale === "en" ? "Most Popular" : "Najpopularniji"}
            </span>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              {locale === "en" ? "For stable growth" : "Za stabilan rast"}
            </p>
            <h3 className="text-xl font-heading font-bold mb-1">
              {locale === "en" ? "Standard Service" : "Standardna usluga"}
            </h3>
            <p className="text-2xl font-heading font-bold text-primary mb-3">
              {locale === "en" ? "from €750" : "od €500"}<span className="text-sm text-gray-500 font-normal">{locale === "en" ? "/mo" : "/mes"}</span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {locale === "en"
                ? "Everything from Starter, plus strategic scaling approach. Monthly and quarterly analysis, reduced error margin, smart testing, and focus on maximizing return on investment."
                : "Sve iz Starter paketa, plus strateški pristup skaliranju. Mesečne i kvartalne analize, smanjenje prostora za greške, pametno testiranje i fokus na visok povrat investicije."}
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Weekly campaign optimizations"
                  : "Nedeljne optimizacije kampanja"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Monthly report + strategic call"
                  : "Mesečni report + strategijski call"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "A/B testing and smart scaling"
                  : "A/B testiranje i pametno skaliranje"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Quarterly strategic analysis"
                  : "Kvartalna strategijska analiza"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "No long-term contracts"
                  : "Bez dugoročnih ugovora"}
              </li>
            </ul>
            <Button href="/kontakt" variant="secondary">
              {locale === "en" ? "Schedule a consultation" : "Zakažite konsultaciju"}
            </Button>
          </div>

          {/* Premium — Funky Enterprises */}
          <div className="bg-slate-900 text-white border-2 border-slate-700 rounded-lg p-6 shadow-card relative">
            <span className="absolute -top-3 left-6 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded">
              {locale === "en" ? "Premium tier" : "Premium tim"}
            </span>
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-2">
              {locale === "en" ? "Multi-channel approach" : "Multi-channel pristup"}
            </p>
            <h3 className="text-xl font-heading font-bold mb-1">
              Performance Marketing
            </h3>
            <p className="text-sm text-slate-400 mb-4 italic">
              Powered by Funky Enterprises
            </p>
            <p className="text-slate-300 text-sm mb-4">
              {locale === "en"
                ? "For market leaders and brands aspiring to be. Complete performance team — Google Ads + Meta + SEO + CRO. I operate as a partner with the Funky Enterprises team."
                : "Za tržišne lidere i brendove koji žele da to postanu. Kompletni performance tim — Google Ads + Meta + SEO + CRO. Nastupam kao partner Funky Enterprises tima."}
            </p>
            <ul className="space-y-2 text-sm text-slate-300 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Omnichannel strategy and execution"
                  : "Omnichannel strategija i egzekucija"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Senior-led expert team"
                  : "Senior-led tim eksperata"}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 flex-shrink-0">✓</span>
                {locale === "en"
                  ? "Measurable growth across all channels"
                  : "Merljiv rast kroz sve kanale"}
              </li>
            </ul>
            <a
              href="https://www.funky.enterprises/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block text-center w-full"
            >
              {locale === "en"
                ? "Learn more about Funky Enterprises"
                : "Saznajte više o Funky Enterprises"}
            </a>
          </div>
        </div>
      </Section>

      {/* FAQ — proper accordion */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Frequently asked questions about Google Ads"
              : "Često postavljana pitanja o Google oglašavanju"}
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
              <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Ready for Google Ads that actually works?"
              : "Spremni za Google oglašavanje koje zaista radi?"}
          </h2>
          <p className="text-slate-300 mb-8">
            {locale === "en"
              ? "Book a free 30-minute consultation and let's see if it makes sense to work together. No obligations."
              : "Zakažite besplatnu 30-minutnu konsultaciju i proverimo da li ima smisla da radimo zajedno. Bez obaveza."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              {locale === "en"
                ? "Book a free consultation"
                : "Zakažite besplatnu konsultaciju"}
            </Button>
            <Link
              href="/usluge/google-ads-audit"
              className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
            >
              {locale === "en"
                ? "Or schedule a Google Ads audit →"
                : "Ili zakažite Google Ads audit →"}
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }}
              className="hover:text-white transition-colors underline"
            >
              {locale === "en"
                ? "How much does Google Ads cost?"
                : "Koliko košta Google Ads?"}
            </Link>
            <Link
              href="/blog"
              className="hover:text-white transition-colors underline"
            >
              {locale === "en"
                ? "Google Ads guide for beginners"
                : "Google Ads vodič za početnike"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
