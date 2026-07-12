import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Section, Card, Button, AnimateOnScroll } from "@/components/ui";
import { ShoppingCart, Building2, Monitor, Settings, ClipboardCheck, Search, Eye, PlayCircle, BarChart3, MessageSquare } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "Google Ads Services | Digital Jelisavac — Senior PPC Agency"
      : "Google Ads Usluge | Digital Jelisavac - Senior PPC Agencija",
    description: isEn
      ? "Digital Jelisavac is a senior-led boutique Google Ads agency: management, audit, Shopping, PMax and remarketing for eCommerce and B2B. Led personally by Slobodan Jelisavac (10+ years, 3.7x average ROAS, 3x UK Search Awards)."
      : "Digital Jelisavac je senior-led boutique Google Ads agencija: upravljanje, audit, Shopping, PMax i remarketing za eCommerce i B2B. Vodi lično Slobodan Jelisavac (10+ godina, 3.7x prosečan ROAS, 3x UK Search Awards).",
    locale,
    path: "/services",
    srPath: "/usluge",
  });
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;

  const coreServices = locale === "en" ? ([
    {
      title: "Google Ads Management",
      href: "/usluge/google-ads-upravljanje",
      desc: "Strategy, setup, and daily optimization focused on ROAS and real revenue growth.",
      badge: "Most Popular"
    },
    {
      title: "Google Ads Agency",
      href: "/usluge/google-ads-agencija",
      desc: "Senior-led boutique agency — no junior account managers, transparent reporting, and you own your account.",
      badge: null
    },
    {
      title: "Google Ads Audit",
      href: "/usluge/google-ads-audit",
      desc: "In-depth account analysis with prioritized recommendations — discover where you're losing money and how to fix it.",
      badge: null
    },
    {
      title: "Google Shopping Campaigns",
      href: "/usluge/google-shopping",
      desc: "Feed optimization, campaign structure, and bidding strategies for maximum eCommerce ROAS.",
      badge: null
    },
    {
      title: "Performance Max",
      href: "/usluge/performance-max",
      desc: "Control over asset groups, audience signals, and transparent performance tracking across all Google channels.",
      badge: null
    },
    {
      title: "Search Campaigns",
      href: "/usluge/search-kampanje",
      desc: "Keyword strategy, ad copy, and landing page optimization for high-intent users.",
      badge: null
    },
    {
      title: "Remarketing",
      href: "/usluge/remarketing",
      desc: "Re-engage visitors through Display, YouTube, and Search remarketing — increase conversions.",
      badge: null
    },
    {
      title: "YouTube Ads",
      href: "/usluge/youtube-oglasi",
      desc: "Video campaigns for awareness and direct response goals using skippable and bumper formats.",
      badge: null
    },
    {
      title: "ChatGPT Ads",
      href: "/usluge/chatgpt-ads",
      desc: "Early-access advertising inside ChatGPT — sponsored placements captured at peak intent, before your competition arrives.",
      badge: "New"
    }
  ] as const) : ([
    {
      title: "Google Ads upravljanje",
      href: "/usluge/google-ads-upravljanje",
      desc: "Strategija, setup i svakodnevna optimizacija naloga sa fokusom na ROAS i realan rast prihoda.",
      badge: "Najpopularnija"
    },
    {
      title: "Google Ads agencija",
      href: "/usluge/google-ads-agencija",
      desc: "Senior-led boutique agencija - bez junior account managera, transparentan izveštaj, i vi ste vlasnik naloga.",
      badge: null
    },
    {
      title: "Google Ads audit",
      href: "/usluge/google-ads-audit",
      desc: "Detaljna analiza naloga sa prioritetnim preporukama — otkrijte gde gubite novac i kako popraviti.",
      badge: null
    },
    {
      title: "Google Shopping kampanje",
      href: "/usluge/google-shopping",
      desc: "Feed optimizacija, struktura kampanja i bid strategije za maksimalan ROAS u eCommerce-u.",
      badge: null
    },
    {
      title: "Performance Max",
      href: "/usluge/performance-max",
      desc: "Kontrola asset grupa, audience signala i transparentno praćenje performansi kroz sve Google kanale.",
      badge: null
    },
    {
      title: "Search kampanje",
      href: "/usluge/search-kampanje",
      desc: "Keyword strategija, ad copy i landing page optimizacija za korisnike sa visokom namerom kupovine.",
      badge: null
    },
    {
      title: "Remarketing",
      href: "/usluge/remarketing",
      desc: "Povratak posetilaca kroz Display, YouTube i Search remarketing — povećajte konverzije.",
      badge: null
    },
    {
      title: "YouTube oglasi",
      href: "/usluge/youtube-oglasi",
      desc: "Video kampanje za awareness i direct response ciljeve kroz skippable i bumper formate.",
      badge: null
    },
    {
      title: "ChatGPT Ads",
      href: "/usluge/chatgpt-ads",
      desc: "Early-access oglašavanje unutar ChatGPT-a - sponzorisana mesta u trenutku najveće namere, pre nego što konkurencija stigne.",
      badge: "Novo"
    }
  ] as const);

  const iconProps = { size: 28, strokeWidth: 1.5 } as const;

  type ServiceHref = "/usluge/google-ads-za-ecommerce" | "/usluge/google-ads-za-b2b" | "/usluge/google-ads-za-saas";
  const industryServices: { title: string; href: ServiceHref; desc: string; icon: ReactNode }[] = locale === "en" ? [
    {
      title: "Google Ads for eCommerce",
      href: "/usluge/google-ads-za-ecommerce",
      desc: "Shopping, Performance Max, and full-funnel approach for online stores seeking higher revenue and better ROAS.",
      icon: <ShoppingCart {...iconProps} className="text-gray-900" />
    },
    {
      title: "Google Ads for B2B",
      href: "/usluge/google-ads-za-b2b",
      desc: "Lead generation strategies, account-based targeting, and lead qualification for B2B companies.",
      icon: <Building2 {...iconProps} className="text-gray-900" />
    },
    {
      title: "Google Ads for SaaS",
      href: "/usluge/google-ads-za-saas",
      desc: "Trial user acquisition and demo requests with controlled CAC for SaaS platforms.",
      icon: <Monitor {...iconProps} className="text-gray-900" />
    }
  ] : [
    {
      title: "Google Ads za eCommerce",
      href: "/usluge/google-ads-za-ecommerce",
      desc: "Shopping, Performance Max i full-funnel pristup za online prodavnice koje žele veći prihod i bolji ROAS.",
      icon: <ShoppingCart {...iconProps} className="text-gray-900" />
    },
    {
      title: "Google Ads za B2B",
      href: "/usluge/google-ads-za-b2b",
      desc: "Lead generation strategije, account-based targeting i kvalifikacija leadova za B2B kompanije.",
      icon: <Building2 {...iconProps} className="text-gray-900" />
    },
    {
      title: "Google Ads za SaaS",
      href: "/usluge/google-ads-za-saas",
      desc: "Akvizicija trial korisnika i demo zahteva uz kontrolu CAC-a za SaaS platforme.",
      icon: <Monitor {...iconProps} className="text-gray-900" />
    }
  ];

  const strategySupport = locale === "en" ? ([
    {
      title: "1-on-1 Consultations",
      price: "$200/hour",
      desc: "Expert advice for specific questions, second opinions, or strategic help without long-term commitment.",
      href: "/usluge/konsultacije",
      cta: "Learn more"
    },
    {
      title: "Deep Audit + Action Plan",
      price: "from $500",
      desc: "Independent account analysis with a written, prioritized action plan. No commitment for ongoing work required.",
      href: "/usluge/google-ads-audit",
      cta: "Learn more"
    },
    {
      title: "Kickstart",
      price: "from $990",
      desc: "Senior account setup for teams with an in-house owner who takes it from there. No monthly retainer.",
      href: "/usluge/starter-paket",
      cta: "Learn more"
    }
  ] as const) : ([
    {
      title: "Konsultacije",
      price: "€150/sat",
      desc: "Ekspertski savet za konkretna pitanja, second opinion ili strategijsku pomoć bez dugoročne obaveze.",
      href: "/usluge/konsultacije",
      cta: "Saznajte više"
    },
    {
      title: "Deep Audit + Action Plan",
      price: "od €450",
      desc: "Nezavisna analiza naloga sa pisanim, prioritizovanim akcionim planom. Bez obaveze za dalju saradnju.",
      href: "/usluge/google-ads-audit",
      cta: "Saznajte više"
    },
    {
      title: "Kickstart",
      price: "od €690",
      desc: "Senior setup naloga za timove koji imaju in-house osobu za dalje vođenje. Bez mesečnog retainera.",
      href: "/usluge/starter-paket",
      cta: "Saznajte više"
    }
  ] as const);

  const fullManagement = locale === "en" ? ([
    {
      title: "eCommerce Growth",
      price: "from $2,500/mo",
      note: "For brands spending $10k–100k/month — scope and fee scale with spend.",
      desc: "Complete Google Ads management for online stores — weekly optimization, Shopping feed management, monthly reporting.",
      href: "/usluge/google-ads-upravljanje",
      cta: "Learn more"
    },
    {
      title: "Performance Marketing",
      price: "Powered by Funky Enterprises",
      note: null,
      desc: "For brands aiming for the leading position in their category — investing $20k+/month per channel. Complete omnichannel team: Google Ads + Meta + SEO + CRO + tracking.",
      href: "/usluge/google-ads-upravljanje",
      cta: "Learn more"
    }
  ] as const) : ([
    {
      title: "eCommerce Growth",
      price: "od €700/mes",
      note: "Za budžete €1.500+/mes ad spend-a.",
      desc: "Kompletno Google Ads upravljanje za online prodavnice — nedeljna optimizacija, Shopping feed upravljanje, mesečni reporting.",
      href: "/usluge/google-ads-upravljanje",
      cta: "Saznajte više"
    },
    {
      title: "Performance Marketing",
      price: "Powered by Funky Enterprises",
      note: null,
      desc: "Za brendove koji ciljaju lidersku poziciju u svojoj kategoriji. Kompletan omnichannel tim — Google Ads + Meta + SEO + CRO.",
      href: "/usluge/google-ads-upravljanje",
      cta: "Saznajte više"
    }
  ] as const);

  const routingRows = locale === "en" ? [
    { range: "Under $5k/mo or just starting", fit: "Consulting or Kickstart" },
    { range: "$10k–100k/mo Google Ads spend", fit: "eCommerce Growth" },
    { range: "Omnichannel (Google + Meta + SEO + CRO) — $20k+/mo per channel", fit: "Performance Marketing (Funky)" }
  ] : [
    { range: "Ispod €1.000/mes ili tek počinjete", fit: "Konsultacije / Kickstart" },
    { range: "€1.500–5.000/mes eCommerce ad spend", fit: "Growth" },
    { range: "€5.000+/mes ili multi-channel", fit: "Performance (Funky)" }
  ];

  const results = locale === "en" ? [
    { value: "3.7x", label: "Average ROAS (eCommerce)" },
    { value: "−35%", label: "CPA reduction" },
    { value: "3x", label: "UK Search Awards" },
    { value: "10+", label: "Years of experience" }
  ] : [
    { value: "3.7x", label: "Prosečan ROAS (eCommerce)" },
    { value: "−35%", label: "Smanjenje CPA" },
    { value: "3x", label: "UK Search Awards" },
    { value: "10+", label: "Godina iskustva" }
  ];

  const processSteps = locale === "en" ? [
    {
      number: 1,
      title: "Free consultation",
      description:
        "20-minute call where I understand your goals, current state, and challenges."
    },
    {
      number: 2,
      title: "Analysis & strategy",
      description:
        "Detailed analysis of your current state and strategy development with clear projections."
    },
    {
      number: 3,
      title: "Implementation",
      description:
        "Account setup or takeover, tracking configuration, and campaign launch."
    },
    {
      number: 4,
      title: "Optimization & growth",
      description:
        "Continuous performance improvement, monthly reporting, and scaling winning campaigns."
    }
  ] : [
    {
      number: 1,
      title: "Besplatna konsultacija",
      description:
        "20-minutni poziv gde razumem vaše ciljeve, trenutno stanje i izazove."
    },
    {
      number: 2,
      title: "Analiza i strategija",
      description:
        "Detaljna analiza postojećeg stanja i izrada strategije sa jasnim projekcijama."
    },
    {
      number: 3,
      title: "Implementacija",
      description:
        "Setup ili preuzimanje naloga, podešavanje trackinga i pokretanje kampanja."
    },
    {
      number: 4,
      title: "Optimizacija i rast",
      description:
        "Kontinuirano poboljšanje performansi, mesečni reporting i skaliranje pobedničkih kampanja."
    }
  ];

  const faqs = locale === "en" ? [
    {
      q: "How much does a Google Ads consultant cost?",
      a: "Pricing depends on account scope and budget. A one-off consultation is $200/hour. A deep audit with a written action plan starts from $500. Monthly account management starts from $2,500/month, scaling with ad spend and complexity. No hidden fees — you get an exact number after I've reviewed the account, not a promised outcome upfront."
    },
    {
      q: "What's the difference between a consultant and an agency?",
      a: "You work directly with a senior expert who personally runs your account — no juniors learning on your budget, no account manager acting as a go-between. There's no long-term lock-in contract tying you down if the collaboration isn't working. Fewer layers means faster decisions and direct accountability for the results."
    },
    {
      q: "What is POAS and why track it instead of ROAS?",
      a: "POAS (profit on ad spend) accounts for margin and cost of goods (COGS), unlike ROAS, which only measures revenue. An account can show a great ROAS while losing money on low-margin products. I optimize campaigns for profit, not for a revenue number that looks good in a report but doesn't move your bottom line."
    },
    {
      q: "Is there a contract or minimum term?",
      a: "No long-term contracts — the collaboration runs month-to-month, with no onboarding fees. For ongoing campaign management I recommend a minimum of 3 months to gather enough data for real optimization, but that's a recommendation, not a requirement. Audits and consultations are one-off services with no minimum term at all."
    },
    {
      q: "Which markets and industries do you work with?",
      a: "I work with clients in Serbia, the wider region (Croatia, Slovenia), the UK, the EU, and the US. My focus is eCommerce brands, B2B lead generation companies, and SaaS platforms — industries where results can be clearly measured through revenue, leads, or trial conversions, not vanity metrics."
    },
    {
      q: "What does monthly reporting look like?",
      a: "Each month you receive a report with key metrics, actions taken, and recommendations for the next period, plus a live call to discuss results. I focus on actionable insights rather than vanity metrics — you'll know exactly what's working, what's not, and what we're doing about it."
    },
    {
      q: "Can I see examples of your work?",
      a: "Yes — check out the case studies section with specific results for eCommerce, B2B, and local campaigns. I've worked with brands across 6+ countries, with a 3.7x average ROAS (eCommerce) and campaigns that won 3 UK Search Awards."
    }
  ] : [
    {
      q: "Koliko košta Google Ads konsultant?",
      a: "Cena zavisi od obima naloga i budžeta. Jednokratna konsultacija je €150 po satu. Deep audit sa akcionim planom kreće od €450. Mesečno vođenje naloga počinje od €700, u zavisnosti od ad spend-a i kompleksnosti. Bez skrivenih troškova - tačnu cifru dobijate posle uvida u nalog, ne unapred obećanih rezultata."
    },
    {
      q: "Koja je razlika između konsultanta i agencije?",
      a: "Radite direktno sa senior ekspertom koji lično vodi vaš nalog - nema juniora koji uči na vašem budžetu, nema account managera kao posrednika između vas i osobe koja stvarno radi optimizaciju. Nema ni dugoročnog lock-in ugovora koji vas vezuje ako saradnja ne funkcioniše. Manje slojeva znači brže odluke i direktnu odgovornost."
    },
    {
      q: "Šta je POAS i zašto ga pratite umesto ROAS-a?",
      a: "POAS (profit on ad spend) računa stvarni profit posle marže i troška robe (COGS), za razliku od ROAS-a koji meri samo prihod. Nalog može imati odličan ROAS a da gubi novac na proizvodima sa niskom maržom. Optimizujem kampanje na profit, ne na prihod koji dobro izgleda u reportu ali ne znači ništa za vaš bilans."
    },
    {
      q: "Da li postoji ugovor ili minimalni period?",
      a: "Ne radim sa dugoročnim ugovorima - saradnja je mesec-po-mesec, bez onboarding naknada. Za upravljanje kampanjama preporučujem minimum 3 meseca da se prikupi dovoljno podataka za pravu optimizaciju, ali to je preporuka, ne obaveza. Audit i konsultacije su jednokratne usluge bez ikakvog perioda vezivanja."
    },
    {
      q: "Sa kojim tržištima i industrijama radite?",
      a: "Radim sa klijentima iz Srbije, regiona (Hrvatska, Slovenija), UK-a, EU i USA. Fokus je na eCommerce brendovima, B2B lead generation kompanijama i SaaS platformama - industrijama gde se rezultat može jasno meriti kroz prihod, lead-ove ili trial konverzije, a ne kroz vanity metrike."
    },
    {
      q: "Kako izgleda mesečni reporting?",
      a: "Svakog meseca dobijate izveštaj sa ključnim metrikama, sprovedenim akcijama i preporukama za sledeći period, plus live poziv za diskusiju rezultata."
    },
    {
      q: "Da li mogu da vidim primere vašeg rada?",
      a: "Da - pogledajte case studies sekciju sa konkretnim rezultatima za eCommerce, B2B i lokalne kampanje."
    }
  ];

  const serviceSchema = locale === "en" ? {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Ads Services — Slobodan Jelisavac",
    description:
      "Professional Google Ads services for eCommerce and B2B companies: management, audit, Shopping, Performance Max, remarketing, YouTube, consultations.",
    provider: {
      "@type": "Person",
      name: "Slobodan Jelisavac",
      url: "https://www.slobodan-jelisavac.com",
      jobTitle: locale === "en" ? "Google Ads Consultant" : "Google Ads Konsultant",
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
    serviceType: "Google Ads Management"
  } : {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Ads usluge — Slobodan Jelisavac",
    description:
      "Profesionalne Google Ads usluge za eCommerce i B2B kompanije: upravljanje, audit, Shopping, Performance Max, remarketing, YouTube, konsultacije.",
    provider: {
      "@type": "Person",
      name: "Slobodan Jelisavac",
      url: "https://www.slobodan-jelisavac.com",
      jobTitle: locale === "en" ? "Google Ads Consultant" : "Google Ads Konsultant",
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
    serviceType: "Google Ads Management"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
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
        item: "https://www.slobodan-jelisavac.com/en/services"
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
        item: "https://www.slobodan-jelisavac.com/sr/usluge"
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
              <li className="text-accent font-medium">
                {locale === "en" ? "Services" : "Usluge"}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {locale === "en"
                ? "Google Ads services for eCommerce and B2B companies"
                : "Google Ads usluge za eCommerce i B2B kompanije"
              }
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {locale === "en" ? (
                <>
                  <strong className="text-white">Digital Jelisavac</strong> is a
                  senior-led boutique Google Ads agency — management, audit, and
                  consulting for companies that want measurable results from paid
                  advertising. Your account is run by a senior specialist, not a
                  junior learning on your budget. From strategy to daily optimization,
                  everything you need for stable revenue growth.
                </>
              ) : (
                <>
                  <strong className="text-white">Digital Jelisavac</strong> je
                  senior-led boutique Google Ads agencija: upravljanje, audit i
                  konsultacije za kompanije koje žele merljive rezultate iz plaćenog
                  oglašavanja. Vaš nalog vodi senior stručnjak lično, ne junior koji
                  uči na vašem budžetu. Od strategije do svakodnevne optimizacije, sve
                  što vam treba za stabilan rast prihoda.
                </>
              )}
            </p>

            {/* Results */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {results.map((result) => (
                <div key={result.label}>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-accent">
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
                {locale === "en" ? "Book a free 20-minute call" : "Zakažite besplatnih 20 minuta"}
              </Button>
              <Button href="/case-studies" variant="primary">
                {locale === "en" ? "View Results" : "Pogledajte rezultate"}
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
              {locale === "en" ? (
                <>
                  <span>10+ years of experience</span>
                  <span>3x UK Search Awards</span>
                  <span>50+ brands across 6+ countries</span>
                </>
              ) : (
                <>
                  <span>10+ godina iskustva</span>
                  <span>3x UK Search Awards</span>
                  <span>50+ brendova iz 6+ zemalja</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Intro */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          {locale === "en" ? (
            <>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                <strong>Google Ads</strong> is the fastest way to reach customers actively
                searching for your products or services. But without proper strategy,
                campaign structure, and continuous optimization — it easily becomes
                wasted spend.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                With over 10 years of experience managing campaigns for brands in Serbia,
                the UK, Germany, and Croatia, I offer complete Google Ads services
                tailored to your goals — whether you're an eCommerce business seeking
                better ROAS or a B2B company generating qualified leads.
              </p>
            </>
          ) : (
            <>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                <strong>Google Ads</strong> je najbrži način da dođete do kupaca koji
                aktivno traže vaše proizvode ili usluge. Ali bez pravilne strategije,
                strukture kampanja i kontinuirane optimizacije — lako se pretvori u
                nepotrebni trošak.
              </p>
              <p className="text-gray-600 text-base leading-relaxed">
                Sa preko decenije iskustva u vođenju kampanja za brendove u Srbiji,
                UK, Nemačkoj i Hrvatskoj, nudim kompletne Google Ads usluge
                prilagođene vašim ciljevima — bilo da ste eCommerce koji traži bolji
                ROAS ili B2B firma koja generiše kvalifikovane leadove.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Core services */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Google Ads services by campaign type"
              : "Google Ads usluge po tipu kampanje"
            }
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Each campaign type requires a specific approach. I choose the right combination based on your goals, industry, and budget."
              : "Svaki tip kampanje zahteva specifičan pristup. Biram pravu kombinaciju na osnovu vaših ciljeva, industrije i budžeta."
            }
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, index) => {
            const icons = [Settings, Building2, ClipboardCheck, ShoppingCart, BarChart3, Search, Eye, PlayCircle, MessageSquare];
            const Icon = icons[index] || Settings;
            return (
              <AnimateOnScroll key={service.href} delay={index * 100}>
                <Link href={service.href} className="group block h-full">
                  <Card className="h-full relative hover:border-primary hover:shadow-[5px_5px_0_0_#1a73e8] transition-all duration-300">
                    {service.badge && (
                      <span className="absolute -top-3 left-6 bg-accent text-gray-900 text-xs font-bold px-3 py-1 rounded-md">
                        {service.badge}
                      </span>
                    )}
                    <div className="mb-3 text-gray-400 group-hover:text-primary transition-colors">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base">{service.desc}</p>
                    <span className="mt-4 inline-block text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      {locale === "en" ? "Learn more →" : "Saznajte više →"}
                    </span>
                  </Card>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Section>

      {/* Industry services */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Specialized Google Ads services by industry"
              : "Specijalizovane Google Ads usluge po industriji"
            }
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Strategies tailored to the complexity of your sales process and specific industry goals."
              : "Strategije prilagođene kompleksnosti prodajnog procesa i specifičnim ciljevima vaše industrije."
            }
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {industryServices.map((service) => (
            <Link key={service.href} href={service.href} className="group">
              <Card className="h-full">
                <div className="mb-3">{service.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base">{service.desc}</p>
                <span className="mt-4 inline-block text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  {locale === "en" ? "Service details →" : "Detalji usluge →"}
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Premium — Funky Enterprises */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 text-white border-2 border-slate-700 rounded-xl p-6 md:p-10 shadow-card relative">
            <span className="absolute -top-3 left-6 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-md">
              {locale === "en" ? "Premium team" : "Premium tim"}
            </span>
            <div className="md:flex items-center gap-10">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-slate-400 mb-2">
                  {locale === "en" ? "Multi-channel approach" : "Multi-channel pristup"}
                </p>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                  Performance Marketing
                </h2>
                <p className="text-sm text-slate-400 mb-4 italic">
                  Powered by Funky Enterprises
                </p>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {locale === "en"
                    ? "For market leaders and brands aspiring to become one. Complete performance team — Google Ads + Meta + SEO + CRO. I partner with the Funky Enterprises team."
                    : "Za tržišne lidere i brendove koji žele da to postanu. Kompletni performance tim — Google Ads + Meta + SEO + CRO. Nastupam kao partner Funky Enterprises tima."
                  }
                </p>
                <ul className="space-y-2 text-sm text-slate-300 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✓</span>
                    {locale === "en" ? "Omnichannel strategy and execution" : "Omnichannel strategija i egzekucija"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✓</span>
                    {locale === "en" ? "Senior-led team of experts" : "Senior-led tim eksperata"}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent flex-shrink-0">✓</span>
                    {locale === "en" ? "Measurable growth across all channels" : "Merljiv rast kroz sve kanale"}
                  </li>
                </ul>
                <a
                  href="https://www.funky.enterprises/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-block text-center"
                >
                  {locale === "en" ? "Learn more about Funky Enterprises" : "Saznajte više o Funky Enterprises"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What do you need — dva bloka */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "What do you need?" : "Šta vam treba?"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "Two ways to work together — strategic support you or your team execute, or complete campaign management."
              : "Dva načina saradnje — strategijska podrška koju vi ili vaš tim izvršavate, ili kompletno vođenje kampanja."
            }
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-heading font-bold mb-6 text-center">
            {locale === "en" ? "Strategy & support" : "Strategija i podrška"}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {strategySupport.map((entry) => (
              <Card key={entry.title} className="h-full flex flex-col">
                <h3 className="text-xl font-heading font-bold mb-1">
                  {entry.title}
                </h3>
                <p className="text-lg font-heading font-bold text-primary mb-3">
                  {entry.price}
                </p>
                <p className="text-gray-600 text-base mb-5 flex-1">
                  {entry.desc}
                </p>
                <Link
                  href={entry.href}
                  className="text-primary font-semibold text-sm"
                >
                  {entry.cta} →
                </Link>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold mb-6 text-center">
            {locale === "en" ? "Complete campaign management" : "Kompletno vođenje kampanja"}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {fullManagement.map((entry) => (
              <Card key={entry.title} className="h-full flex flex-col">
                <h3 className="text-xl font-heading font-bold mb-1">
                  {entry.title}
                </h3>
                <p className="text-lg font-heading font-bold text-primary mb-1">
                  {entry.price}
                </p>
                {entry.note && (
                  <p className="text-sm text-gray-500 mb-3">{entry.note}</p>
                )}
                <p className={`text-gray-600 text-base mb-5 flex-1 ${entry.note ? "" : "mt-2"}`}>
                  {entry.desc}
                </p>
                <Link
                  href={entry.href}
                  className="text-primary font-semibold text-sm"
                >
                  {entry.cta} →
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Gde spadate — routing table */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en" ? "Where do you fit?" : "Gde spadate?"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "A quick guide based on monthly ad spend."
              : "Brzi vodič na osnovu mesečnog ad spend-a."
            }
          </p>
        </div>
        <div className="max-w-2xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-heading font-semibold text-gray-900">
                  {locale === "en" ? "Ad spend" : "Ad spend"}
                </th>
                <th className="text-left py-3 px-4 text-sm font-heading font-semibold text-gray-900">
                  {locale === "en" ? "Best fit" : "Odgovara vam"}
                </th>
              </tr>
            </thead>
            <tbody>
              {routingRows.map((row) => (
                <tr key={row.range} className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm text-gray-600">{row.range}</td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">{row.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Simple 4-step process"
              : "Jednostavan proces u 4 koraka"
            }
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {locale === "en"
              ? "From first call to measurable results — transparent process with no surprises."
              : "Od prvog poziva do merljivih rezultata — transparentan proces bez iznenađenja."
            }
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

      {/* FAQ — proper accordion */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Frequently asked questions about Google Ads services"
              : "Često postavljana pitanja o Google Ads uslugama"
            }
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              className="bg-white border-2 border-gray-200 rounded-xl group"
              open={index === 0 ? true : undefined}
            >
              <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
                {faq.q}
                <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
                  &#9660;
                </span>
              </summary>
              <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Final CTA — dark */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            {locale === "en"
              ? "Ready to improve your Google Ads results?"
              : "Spremni da poboljšate rezultate iz Google Ads?"
            }
          </h2>
          <p className="text-slate-300 mb-8">
            {locale === "en"
              ? "Book a free 20-minute consultation and let's see if it makes sense to work together. No obligation."
              : "Zakažite besplatnu 20-minutnu konsultaciju i proverimo da li ima smisla da radimo zajedno. Bez obaveza."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              {locale === "en" ? "Book a free 20-minute call" : "Zakažite besplatnih 20 minuta"}
            </Button>
            <Link
              href="/case-studies"
              className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
            >
              {locale === "en" ? "View case studies →" : "Pogledajte case studies →"}
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }}
              className="hover:text-white transition-colors underline"
            >
              {locale === "en" ? "How much does Google Ads cost?" : "Koliko košta Google Ads?"}
            </Link>
            <Link
              href="/blog"
              className="hover:text-white transition-colors underline"
            >
              {locale === "en" ? "Google Ads guide for beginners" : "Google Ads vodič za početnike"}
            </Link>
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }}
              className="hover:text-white transition-colors underline"
            >
              {locale === "en" ? "Most common Google Ads mistakes" : "Najčešće Google Ads greške"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
