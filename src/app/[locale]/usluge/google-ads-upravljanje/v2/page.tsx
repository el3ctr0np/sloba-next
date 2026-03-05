import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";
import { Banknote, Clock, Frown, BarChart3, Check, ArrowRight } from "lucide-react";

/**
 * V2 — "Clean Minimal Fix"
 *
 * Key design decisions:
 * - Keeps the SAME overall structure as original
 * - Removes neo-brutalist (no thick borders, no hard shadows)
 * - Adds subtle borders (1px), soft shadows, larger radius
 * - Better spacing and typography weight
 * - Same grid patterns but refined — feels like a "polish"
 * - Monochrome + single accent color
 */

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function V2Page({ params }: Props) {
  const { locale } = await params;

  const iconProps = { size: 24, strokeWidth: 1.5 } as const;

  const problems: { icon: ReactNode; title: string; description: string }[] = [
    { icon: <Banknote {...iconProps} />, title: locale === "en" ? "Budget waste without results" : "Bacanje novca bez rezultata", description: locale === "en" ? "Campaigns are burning through your budget, but conversions are missing or too expensive." : "Kampanje troše budžet, ali konverzije izostaju ili su preskupe." },
    { icon: <Clock {...iconProps} />, title: locale === "en" ? "No time or expertise" : "Nedostatak vremena i ekspertize", description: locale === "en" ? "Google Ads requires constant monitoring and optimization, but you have a business to run." : "Google Ads zahteva stalno praćenje i optimizaciju, a vi imate biznis koji vodite." },
    { icon: <Frown {...iconProps} />, title: locale === "en" ? "Bad past experiences" : "Prethodna loša iskustva", description: locale === "en" ? "Agencies just set up campaigns without real strategy. You never saw genuine ROI." : "Agencije su samo podešavale kampanje bez stvarne strategije. Niste videli pravi ROI." },
    { icon: <BarChart3 {...iconProps} />, title: locale === "en" ? "Growth has stalled" : "Rast je stao", description: locale === "en" ? "Campaigns work okay, but you don't know how to scale them without inflating costs." : "Kampanje rade solidno, ali ne znate kako da ih skalirate bez povećanja troškova." }
  ];

  const solutions = [
    { title: locale === "en" ? "Deep analysis before launch" : "Dubinska analiza pre početka", description: locale === "en" ? "Understanding your business model, margins, ideal customers, and competition — before spending a single euro on ads." : "Razumevanje vašeg biznis modela, marži, idealnih kupaca i konkurencije — pre nego što potrošim i jedan dinar na oglase." },
    { title: locale === "en" ? "Custom campaign structure" : "Struktura kampanja po meri", description: locale === "en" ? "Campaigns tailored to your goals, whether the focus is ROAS, CPA, lead quality, or brand awareness." : "Kampanje prilagođene vašim ciljevima, bilo da je fokus na ROAS, CPA, lead quality ili brand awareness." },
    { title: locale === "en" ? "Proactive optimization" : "Proaktivna optimizacija", description: locale === "en" ? "I track signals and react before they impact performance. Daily analysis, not monthly." : "Pratim signale i reagujem pre nego što utiču na performanse. Svakodnevna analiza, ne mesečna." },
    { title: locale === "en" ? "Transparent reporting" : "Transparentan reporting", description: locale === "en" ? "You know exactly where every euro goes and what you get in return." : "Tačno znate gde ide svaki EUR i šta dobijate zauzvrat." }
  ];

  const inclusions = locale === "en"
    ? [
        { title: "Strategy and planning", items: ["Goal and KPI definition", "Keyword and competitor research", "Campaign structure creation", "Budget allocation planning"] },
        { title: "Setup and implementation", items: ["Campaign creation or restructuring", "Ad copywriting (responsive search & display)", "Bid strategy configuration", "Audience targeting and remarketing lists"] },
        { title: "Campaign optimization", items: ["Daily performance monitoring", "A/B testing of ads", "Bid adjustments by device, location, and time", "Negative keywords and placement exclusions"] },
        { title: "Tracking and analytics", items: ["Google Analytics 4 integration", "Conversion tracking setup", "Custom reporting dashboards", "Attribution modeling"] },
        { title: "Monthly reporting", items: ["Key metrics and trends overview", "Analysis of actions taken", "Plan and recommendations for next period", "Live call to discuss results"] }
      ]
    : [
        { title: "Strategija i planiranje", items: ["Definisanje ciljeva i KPI-jeva", "Istraživanje ključnih reči i konkurencije", "Kreiranje strukture kampanja", "Planiranje budžeta po kampanjama"] },
        { title: "Setup i implementacija", items: ["Kreiranje ili restruktuiranje kampanja", "Pisanje oglasa (responsive search i display)", "Podešavanje bid strategija", "Audience targeting i remarketing liste"] },
        { title: "Optimizacija kampanja", items: ["Svakodnevno praćenje performansi", "A/B testiranje oglasa", "Bid adjustments po uređaju, lokaciji i vremenu", "Negativne ključne reči i placement exclusions"] },
        { title: "Tracking i analitika", items: ["Google Analytics 4 integracija", "Conversion tracking podešavanje", "Custom reporting dashboards", "Attribution modeling"] },
        { title: "Mesečni reporting", items: ["Pregled ključnih metrika i trendova", "Analiza sprovedenih akcija", "Plan i preporuke za sledeći period", "Live poziv za diskusiju rezultata"] }
      ];

  const campaignTypes = locale === "en"
    ? ([
        { title: "Search campaigns", description: "Direct targeting of users actively searching for your products or services.", href: "/usluge/search-kampanje", cta: "Learn more" },
        { title: "Shopping campaigns", description: "Feed optimization and bid strategies for maximum ROAS.", href: "/usluge/google-shopping", cta: "Learn more" },
        { title: "Performance Max", description: "Strategic PMax with control and transparent results.", href: "/usluge/performance-max", cta: "Learn more" },
        { title: "Display and remarketing", description: "Precise targeting to bring back visitors.", href: "/usluge/remarketing", cta: "Learn more" },
        { title: "YouTube ads", description: "Video advertising for awareness and direct response.", href: "/usluge/youtube-oglasi", cta: "Learn more" }
      ] as const)
    : ([
        { title: "Search kampanje", description: "Direktno targetiranje korisnika koji aktivno traže vaše proizvode ili usluge.", href: "/usluge/search-kampanje", cta: "Više" },
        { title: "Shopping kampanje", description: "Optimizacija feed-a i bid strategije za maksimalan ROAS.", href: "/usluge/google-shopping", cta: "Više" },
        { title: "Performance Max", description: "Strateški PMax uz kontrolu i transparentne rezultate.", href: "/usluge/performance-max", cta: "Više" },
        { title: "Display i remarketing", description: "Precizno targetiranje za povratak posetilaca.", href: "/usluge/remarketing", cta: "Više" },
        { title: "YouTube oglasi", description: "Video oglašavanje za awareness i direct response.", href: "/usluge/youtube-oglasi", cta: "Više" }
      ] as const);

  const processSteps = locale === "en"
    ? [
        { number: 1, title: "Free consultation", description: "30-minute call about your goals and challenges." },
        { number: 2, title: "Audit and strategy", description: "Detailed analysis and strategy with clear projections." },
        { number: 3, title: "Onboarding", description: "Access setup, communication channels, reporting agreement." },
        { number: 4, title: "Implementation", description: "Creating campaigns according to agreed strategy." },
        { number: 5, title: "Optimization and scaling", description: "Continuous improvement and scaling of winning campaigns." }
      ]
    : [
        { number: 1, title: "Besplatna konsultacija", description: "30-minutni poziv o vašim ciljevima i izazovima." },
        { number: 2, title: "Audit i strategija", description: "Detaljna analiza i izrada strategije sa jasnim projekcijama." },
        { number: 3, title: "Onboarding", description: "Setup pristupa, komunikacioni kanali, dogovor oko reportinga." },
        { number: 4, title: "Implementacija", description: "Kreiranje kampanja prema dogovorenoj strategiji." },
        { number: 5, title: "Optimizacija i skaliranje", description: "Kontinuirano poboljšanje i skaliranje kampanja." }
      ];

  const results = locale === "en"
    ? [
        { value: "180%+", label: "average ROAS improvement" },
        { value: "-35%", label: "CPA reduction" },
        { value: "€2M+", label: "managed ad spend/year" }
      ]
    : [
        { value: "180%+", label: "poboljšanje ROAS-a" },
        { value: "-35%", label: "smanjenje CPA" },
        { value: "€2M+", label: "ad spend godišnje" }
      ];

  const faqs = locale === "en"
    ? [
        { question: "How long does it take to see results?", answer: "First optimizations happen immediately. Significant improvements come after 4-6 weeks, full optimization in 2-3 months." },
        { question: "Do you need access to my Google Ads account?", answer: "Yes, admin access through MCC. The account remains under your ownership." },
        { question: "What if I already have campaigns that work?", answer: "I start with an audit and build on what's working. I never tear down good performance." },
        { question: "Do you work with small budgets?", answer: "For budgets below €800, I recommend the Starter package or one-time consultations." },
        { question: "How often will we communicate?", answer: "Minimum one monthly call plus written report. Available via Slack/email within 24h." },
        { question: "What's the minimum contract length?", answer: "3 months recommended. No long-term contracts — results keep me." }
      ]
    : [
        { question: "Koliko vremena treba da se vide rezultati?", answer: "Prve optimizacije odmah. Značajna poboljšanja nakon 4-6 nedelja, puna optimizacija za 2-3 meseca." },
        { question: "Da li morate imati pristup mom nalogu?", answer: "Da, admin pristup kroz MCC. Nalog ostaje u vašem vlasništvu." },
        { question: "Šta ako već imam kampanje koje rade?", answer: "Počinjem auditom i nadograđujem ono što funkcioniše." },
        { question: "Da li radite i sa malim budžetima?", answer: "Za budžete ispod €800 preporučujem Starter paket ili konsultacije." },
        { question: "Koliko često ćemo komunicirati?", answer: "Minimum mesečni call + pisani report. Dostupan putem Slack/email u roku od 24h." },
        { question: "Koja je minimalna dužina saradnje?", answer: "Preporučujem 3 meseca. Nema dugoročnih ugovora." }
      ];

  return (
    <>
      {/* V2 BADGE */}
      <div className="fixed top-4 right-4 z-50 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
        V2 — Clean Minimal
      </div>

      {/* HERO — Same dark hero, refined typography */}
      <section className="bg-gray-950 text-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-10 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-500">
              <li><Link href="/" className="hover:text-gray-300 transition-colors">{locale === "en" ? "Home" : "Početna"}</Link></li>
              <li>/</li>
              <li><Link href="/usluge" className="hover:text-gray-300 transition-colors">{locale === "en" ? "Services" : "Usluge"}</Link></li>
              <li>/</li>
              <li className="text-white">{locale === "en" ? "Google Ads Management" : "Google Ads upravljanje"}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight leading-[1.1]">
              {locale === "en"
                ? "Google Ads management that delivers measurable results"
                : "Google oglašavanje koje donosi merljive rezultate"}
            </h1>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl">
              {locale === "en"
                ? "Complete Google Ads account management — from strategy and campaign structure to daily optimization. Focus: ROAS, CPA, and real revenue growth."
                : "Kompletno upravljanje Google Ads nalogom — od strategije i strukture kampanja do svakodnevne optimizacije. Fokus: ROAS, CPA i realan rast prihoda."}
            </p>

            <div className="grid grid-cols-3 gap-8 mb-10 max-w-md">
              {results.map((result) => (
                <div key={result.label}>
                  <p className="text-3xl font-heading font-bold text-white">{result.value}</p>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">{result.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                {locale === "en" ? "Book a free consultation" : "Zakažite besplatnu konsultaciju"}
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-gray-600">
              <span>{locale === "en" ? "9+ years of experience" : "10+ godina iskustva"}</span>
              <span>3x UK Search Awards</span>
              <span>{locale === "en" ? "50+ brands across 6+ countries" : "50+ brendova iz 6+ zemalja"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS — Refined cards, no thick borders */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 tracking-tight">
              {locale === "en" ? "Do you recognize these challenges?" : "Da li prepoznajete ove izazove?"}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {locale === "en"
                ? "Most companies that come to me have similar campaign issues."
                : "Većina kompanija koje dolaze do mene ima slične probleme."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {problems.map((problem) => (
              <div key={problem.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-gray-700">
                  {problem.icon}
                </div>
                <h3 className="font-heading font-semibold mb-2">{problem.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS — Same 2x2 grid, cleaner cards */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 tracking-tight">
              {locale === "en" ? "What you get with professional management" : "Šta dobijate sa profesionalnim upravljanjem"}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {locale === "en"
                ? "Strategic approach to campaigns, not just account setup."
                : "Strategijski pristup kampanjama, ne samo podešavanja u nalogu."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {solutions.map((solution) => (
              <div key={solution.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <h3 className="font-heading font-semibold text-lg mb-2">{solution.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUSIONS — Same grid, refined */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 tracking-tight">
              {locale === "en" ? "What's included" : "Šta je uključeno"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {inclusions.map((block) => (
              <div key={block.title} className="border border-gray-200 rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <h3 className="font-heading font-semibold text-lg mb-4">{block.title}</h3>
                <ul className="space-y-2.5">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGN TYPES — Refined grid */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 tracking-tight">
              {locale === "en" ? "Campaign types I manage" : "Tipovi kampanja koje vodim"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {campaignTypes.map((campaign) => (
              <Link key={campaign.title} href={campaign.href} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 block">
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{campaign.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{campaign.description}</p>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                  {campaign.cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — Clean steps */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 tracking-tight">
              {locale === "en" ? "How the collaboration works" : "Kako izgleda proces saradnje"}
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {processSteps.map((step, index) => (
              <div key={step.title} className="flex items-start gap-5 border border-gray-200 rounded-xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-heading ${
                  index === processSteps.length - 1
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600"
                }`}>
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING — Subtle cards */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 tracking-tight">
              {locale === "en" ? "Choose your plan" : "Izaberite model saradnje"}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {locale === "en" ? "Transparent pricing. No hidden costs." : "Transparentne cene. Bez skrivenih troškova."}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-white border border-gray-200 rounded-xl p-7 hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">{locale === "en" ? "Start with the basics" : "Počnite sa osnovom"}</p>
              <h3 className="text-xl font-heading font-bold mb-1">{locale === "en" ? "Starter" : "Starter"}</h3>
              <p className="text-3xl font-heading font-bold mb-6">{locale === "en" ? "€500" : "€350"}<span className="text-sm text-gray-400 font-normal">/{locale === "en" ? "mo" : "mes"}</span></p>
              <ul className="space-y-2.5 text-sm text-gray-600 mb-8">
                {[locale === "en" ? "Complete analysis and setup" : "Kompletna analiza i setup", locale === "en" ? "Biweekly optimization" : "Biweekly optimizacija", locale === "en" ? "Monthly report" : "Mesečni report", locale === "en" ? "Focus on ROI" : "Fokus na ROI"].map(item => (
                  <li key={item} className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />{item}</li>
                ))}
              </ul>
              <Button href="/kontakt" variant="primary">{locale === "en" ? "Get started" : "Započnite"}</Button>
            </div>

            {/* Standard */}
            <div className="bg-white border-2 border-primary rounded-xl p-7 relative hover:shadow-md transition-shadow">
              <span className="absolute -top-3 left-6 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                {locale === "en" ? "Most popular" : "Najpopularniji"}
              </span>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">{locale === "en" ? "For stable growth" : "Za stabilan rast"}</p>
              <h3 className="text-xl font-heading font-bold mb-1">{locale === "en" ? "Standard" : "Standard"}</h3>
              <p className="text-3xl font-heading font-bold mb-6">{locale === "en" ? "€750" : "€500"}<span className="text-sm text-gray-400 font-normal">/{locale === "en" ? "mo" : "mes"}</span></p>
              <ul className="space-y-2.5 text-sm text-gray-600 mb-8">
                {[locale === "en" ? "Weekly optimizations" : "Nedeljne optimizacije", locale === "en" ? "Monthly report + call" : "Mesečni report + call", locale === "en" ? "A/B testing and scaling" : "A/B testiranje i skaliranje", locale === "en" ? "Quarterly analysis" : "Kvartalna analiza", locale === "en" ? "No long-term contracts" : "Bez dugoročnih ugovora"].map(item => (
                  <li key={item} className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />{item}</li>
                ))}
              </ul>
              <Button href="/kontakt" variant="secondary">{locale === "en" ? "Get started" : "Započnite"}</Button>
            </div>

            {/* Premium */}
            <div className="bg-gray-950 text-white rounded-xl p-7 hover:shadow-md transition-shadow">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">{locale === "en" ? "Multi-channel" : "Multi-channel"}</p>
              <h3 className="text-xl font-heading font-bold mb-1">Performance Marketing</h3>
              <p className="text-xs text-gray-500 italic mb-6">Powered by Funky Enterprises</p>
              <p className="text-gray-400 text-sm mb-6">
                {locale === "en"
                  ? "Google Ads + Meta + SEO + CRO. Complete performance team."
                  : "Google Ads + Meta + SEO + CRO. Kompletni performance tim."}
              </p>
              <ul className="space-y-2.5 text-sm text-gray-400 mb-8">
                {[locale === "en" ? "Omnichannel strategy" : "Omnichannel strategija", locale === "en" ? "Senior-led team" : "Senior-led tim", locale === "en" ? "Measurable growth" : "Merljiv rast"].map(item => (
                  <li key={item} className="flex items-start gap-2"><Check size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />{item}</li>
                ))}
              </ul>
              <a href="https://www.funky.enterprises/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors w-full">
                {locale === "en" ? "Learn more" : "Saznajte više"} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 tracking-tight">
              {locale === "en" ? "Frequently asked questions" : "Često postavljana pitanja"}
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-2">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group border border-gray-200 rounded-xl" open={index === 0 ? true : undefined}>
                <summary className="cursor-pointer p-5 font-heading font-medium list-none flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors">
                  {faq.question}
                  <span className="text-gray-300 group-open:rotate-180 transition-transform ml-3 text-sm">&#9660;</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-950 text-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight">
            {locale === "en" ? "Ready for results?" : "Spremni za rezultate?"}
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            {locale === "en"
              ? "Book a free 30-minute consultation. No obligations."
              : "Zakažite besplatnu 30-minutnu konsultaciju. Bez obaveza."}
          </p>
          <Button href="/kontakt" variant="secondary">
            {locale === "en" ? "Book a free consultation" : "Zakažite besplatnu konsultaciju"}
          </Button>
        </div>
      </section>
    </>
  );
}
