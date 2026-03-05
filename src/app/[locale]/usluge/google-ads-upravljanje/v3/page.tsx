import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";
import { Banknote, Clock, Frown, BarChart3, Check, ArrowRight, Star, TrendingUp, Search, ShoppingCart, MonitorPlay, Repeat, Youtube } from "lucide-react";

/**
 * V3 — "Industry Standard" (What top PPC agencies use)
 *
 * Inspired by: KlientBoost, Directive, Single Grain, Hawke Media
 *
 * Key design decisions:
 * - Bold hero with social proof numbers front and center
 * - Alternating dark/light sections for visual rhythm
 * - Results/numbers prominently displayed throughout
 * - Icons with colored backgrounds for each campaign type
 * - Strong visual hierarchy with large headings
 * - Trust-building elements (badges, star ratings)
 * - More aggressive CTAs and urgency elements
 */

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function V3Page({ params }: Props) {
  const { locale } = await params;

  const problems: { icon: ReactNode; title: string; description: string }[] = [
    { icon: <Banknote size={24} strokeWidth={1.5} />, title: locale === "en" ? "Budget waste without results" : "Bacanje novca bez rezultata", description: locale === "en" ? "Campaigns burn through your budget, but conversions are missing or too expensive." : "Kampanje troše budžet, ali konverzije izostaju ili su preskupe." },
    { icon: <Clock size={24} strokeWidth={1.5} />, title: locale === "en" ? "No time or expertise" : "Nedostatak vremena i ekspertize", description: locale === "en" ? "Google Ads requires constant monitoring, but you have a business to run." : "Google Ads zahteva stalno praćenje, a vi imate biznis koji vodite." },
    { icon: <Frown size={24} strokeWidth={1.5} />, title: locale === "en" ? "Bad past experiences" : "Prethodna loša iskustva", description: locale === "en" ? "Agencies set up campaigns without real strategy. You never saw genuine ROI." : "Agencije podešavale kampanje bez strategije. Niste videli pravi ROI." },
    { icon: <BarChart3 size={24} strokeWidth={1.5} />, title: locale === "en" ? "Growth has stalled" : "Rast je stao", description: locale === "en" ? "Campaigns work okay, but you can't scale without inflating costs." : "Kampanje rade, ali ne znate kako da skalirate bez povećanja troškova." }
  ];

  const solutions = [
    { title: locale === "en" ? "Deep analysis before launch" : "Dubinska analiza pre početka", description: locale === "en" ? "Understanding your business model, margins, customers, and competition first." : "Razumevanje vašeg biznis modela, marži, kupaca i konkurencije." },
    { title: locale === "en" ? "Custom campaign structure" : "Struktura kampanja po meri", description: locale === "en" ? "Campaigns tailored to your goals — ROAS, CPA, leads, or awareness." : "Kampanje prilagođene ciljevima — ROAS, CPA, leadovi ili awareness." },
    { title: locale === "en" ? "Proactive optimization" : "Proaktivna optimizacija", description: locale === "en" ? "I track signals and react before they impact performance. Daily." : "Pratim signale i reagujem pre uticaja na performanse. Svakodnevno." },
    { title: locale === "en" ? "Transparent reporting" : "Transparentan reporting", description: locale === "en" ? "You know exactly where every euro goes and what you get in return." : "Tačno znate gde ide svaki EUR i šta dobijate zauzvrat." }
  ];

  const inclusions = locale === "en"
    ? [
        { title: "Strategy and planning", items: ["Goal and KPI definition", "Keyword and competitor research", "Campaign structure creation", "Budget allocation planning"] },
        { title: "Setup and implementation", items: ["Campaign creation or restructuring", "Ad copywriting (search & display)", "Bid strategy configuration", "Audience targeting and remarketing"] },
        { title: "Campaign optimization", items: ["Daily performance monitoring", "A/B testing of ads", "Bid adjustments (device, location, time)", "Negative keywords and exclusions"] },
        { title: "Tracking and analytics", items: ["GA4 integration", "Conversion tracking setup", "Custom dashboards", "Attribution modeling"] },
        { title: "Monthly reporting", items: ["Metrics and trends overview", "Actions taken analysis", "Recommendations for next period", "Live call to discuss results"] }
      ]
    : [
        { title: "Strategija i planiranje", items: ["Definisanje ciljeva i KPI-jeva", "Istraživanje ključnih reči i konkurencije", "Kreiranje strukture kampanja", "Planiranje budžeta"] },
        { title: "Setup i implementacija", items: ["Kreiranje ili restruktuiranje kampanja", "Pisanje oglasa (search i display)", "Podešavanje bid strategija", "Audience targeting i remarketing"] },
        { title: "Optimizacija kampanja", items: ["Svakodnevno praćenje performansi", "A/B testiranje oglasa", "Bid adjustments (uređaj, lokacija, vreme)", "Negativne ključne reči i exclusions"] },
        { title: "Tracking i analitika", items: ["GA4 integracija", "Conversion tracking podešavanje", "Custom dashboards", "Attribution modeling"] },
        { title: "Mesečni reporting", items: ["Pregled metrika i trendova", "Analiza sprovedenih akcija", "Preporuke za sledeći period", "Live poziv za diskusiju"] }
      ];

  const campaignTypes = locale === "en"
    ? ([
        { icon: <Search size={20} />, title: "Search", description: "Target users actively searching for your products.", href: "/usluge/search-kampanje" as const, color: "bg-blue-500" },
        { icon: <ShoppingCart size={20} />, title: "Shopping", description: "Feed optimization for maximum eCommerce ROAS.", href: "/usluge/google-shopping" as const, color: "bg-green-500" },
        { icon: <TrendingUp size={20} />, title: "Performance Max", description: "Strategic PMax with control and transparency.", href: "/usluge/performance-max" as const, color: "bg-purple-500" },
        { icon: <Repeat size={20} />, title: "Remarketing", description: "Bring back visitors and increase conversions.", href: "/usluge/remarketing" as const, color: "bg-orange-500" },
        { icon: <Youtube size={20} />, title: "YouTube", description: "Video ads for awareness and direct response.", href: "/usluge/youtube-oglasi" as const, color: "bg-red-500" }
      ])
    : ([
        { icon: <Search size={20} />, title: "Search", description: "Targetiranje korisnika koji aktivno traže vaše proizvode.", href: "/usluge/search-kampanje" as const, color: "bg-blue-500" },
        { icon: <ShoppingCart size={20} />, title: "Shopping", description: "Optimizacija feed-a za maksimalan ROAS.", href: "/usluge/google-shopping" as const, color: "bg-green-500" },
        { icon: <TrendingUp size={20} />, title: "Performance Max", description: "Strateški PMax uz kontrolu i transparentnost.", href: "/usluge/performance-max" as const, color: "bg-purple-500" },
        { icon: <Repeat size={20} />, title: "Remarketing", description: "Povratak posetilaca i povećanje konverzija.", href: "/usluge/remarketing" as const, color: "bg-orange-500" },
        { icon: <Youtube size={20} />, title: "YouTube", description: "Video oglašavanje za awareness i direct response.", href: "/usluge/youtube-oglasi" as const, color: "bg-red-500" }
      ]);

  const processSteps = locale === "en"
    ? [
        { number: 1, title: "Free consultation", description: "30-minute call about your goals and challenges." },
        { number: 2, title: "Audit and strategy", description: "Detailed analysis and strategy with clear projections." },
        { number: 3, title: "Onboarding", description: "Access setup, communication, reporting agreement." },
        { number: 4, title: "Implementation", description: "Creating campaigns according to agreed strategy." },
        { number: 5, title: "Optimization and scaling", description: "Continuous improvement and scaling of winners." }
      ]
    : [
        { number: 1, title: "Besplatna konsultacija", description: "30-minutni poziv o ciljevima i izazovima." },
        { number: 2, title: "Audit i strategija", description: "Detaljna analiza i strategija sa projekcijama." },
        { number: 3, title: "Onboarding", description: "Setup pristupa, komunikacija, reporting dogovor." },
        { number: 4, title: "Implementacija", description: "Kreiranje kampanja prema strategiji." },
        { number: 5, title: "Optimizacija i skaliranje", description: "Kontinuirano poboljšanje i skaliranje." }
      ];

  const faqs = locale === "en"
    ? [
        { question: "How long does it take to see results?", answer: "First optimizations immediately. Significant improvements after 4-6 weeks, full optimization in 2-3 months." },
        { question: "Do you need access to my account?", answer: "Yes, admin access through MCC. The account remains under your ownership." },
        { question: "What if I already have working campaigns?", answer: "I audit first and build on what's working. I never tear down good performance." },
        { question: "Do you work with small budgets?", answer: "For budgets below €800, I recommend the Starter package or consultations." },
        { question: "How often will we communicate?", answer: "Minimum monthly call + report. Available via Slack/email within 24h." },
        { question: "What's the minimum contract length?", answer: "3 months recommended. No long-term contracts — results keep me." }
      ]
    : [
        { question: "Koliko vremena treba da se vide rezultati?", answer: "Prve optimizacije odmah. Značajna poboljšanja nakon 4-6 nedelja, puna optimizacija za 2-3 meseca." },
        { question: "Da li morate imati pristup mom nalogu?", answer: "Da, admin pristup kroz MCC. Nalog ostaje u vašem vlasništvu." },
        { question: "Šta ako već imam kampanje koje rade?", answer: "Počinjem auditom i nadograđujem ono što funkcioniše." },
        { question: "Da li radite i sa malim budžetima?", answer: "Za budžete ispod €800 preporučujem Starter paket ili konsultacije." },
        { question: "Koliko često ćemo komunicirati?", answer: "Minimum mesečni call + report. Dostupan putem Slack/email u roku od 24h." },
        { question: "Koja je minimalna dužina saradnje?", answer: "Preporučujem 3 meseca. Nema dugoročnih ugovora." }
      ];

  return (
    <>
      {/* V3 BADGE */}
      <div className="fixed top-4 right-4 z-50 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
        V3 — Industry Standard
      </div>

      {/* HERO — Bold, numbers-forward, social proof heavy */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        {/* Gradient accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-primary to-cyan-400" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-600">
              <li><Link href="/" className="hover:text-gray-300 transition-colors">{locale === "en" ? "Home" : "Početna"}</Link></li>
              <li>/</li>
              <li><Link href="/usluge" className="hover:text-gray-300 transition-colors">{locale === "en" ? "Services" : "Usluge"}</Link></li>
              <li>/</li>
              <li className="text-primary">{locale === "en" ? "Google Ads" : "Google Ads"}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
            <div>
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-3 py-1.5 text-sm mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#EAB308" className="text-yellow-500" />
                  ))}
                </div>
                <span className="text-yellow-500 font-medium">
                  {locale === "en" ? "Rated 5/5 by clients" : "Ocena 5/5 od klijenata"}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-[1.08] tracking-tight">
                {locale === "en"
                  ? <>Stop Wasting Ad Spend.<br /><span className="text-primary">Start Scaling Revenue.</span></>
                  : <>Prestanite da bacate budžet.<br /><span className="text-primary">Počnite da rastete.</span></>
                }
              </h1>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
                {locale === "en"
                  ? "I manage Google Ads accounts for eCommerce and B2B companies that want real growth — not vanity metrics."
                  : "Vodim Google Ads naloge za eCommerce i B2B kompanije koje žele realan rast — ne samo lepe brojke."}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button href="/kontakt" variant="secondary">
                  {locale === "en" ? "Get your free strategy call" : "Zakažite besplatni strategijski poziv"}
                </Button>
                <Link href="/usluge/google-ads-audit" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm px-4 py-3 border border-gray-700 rounded-md hover:border-gray-500">
                  {locale === "en" ? "Free account audit" : "Besplatni audit naloga"} <ArrowRight size={16} />
                </Link>
              </div>

              <p className="text-xs text-gray-600">
                {locale === "en" ? "No contracts. Cancel anytime. Results or you walk." : "Bez ugovora. Otkažite kad hoćete. Rezultati ili odlazite."}
              </p>
            </div>

            {/* Stats card — floating */}
            <div className="hidden lg:block bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 min-w-[280px]">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-6 font-semibold">
                {locale === "en" ? "Proven Results" : "Dokazani rezultati"}
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-heading font-bold text-primary">180%+</p>
                  <p className="text-sm text-gray-400 mt-1">{locale === "en" ? "avg. ROAS improvement" : "prosečno poboljšanje ROAS-a"}</p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="text-4xl font-heading font-bold text-green-400">-35%</p>
                  <p className="text-sm text-gray-400 mt-1">{locale === "en" ? "CPA reduction" : "smanjenje CPA"}</p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="text-4xl font-heading font-bold text-yellow-400">€2M+</p>
                  <p className="text-sm text-gray-400 mt-1">{locale === "en" ? "ad spend managed/year" : "ad spend godišnje"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 lg:hidden border-t border-white/10 pt-8">
            <div className="text-center"><p className="text-2xl font-heading font-bold text-primary">180%+</p><p className="text-xs text-gray-500 mt-1">ROAS</p></div>
            <div className="text-center"><p className="text-2xl font-heading font-bold text-green-400">-35%</p><p className="text-xs text-gray-500 mt-1">CPA</p></div>
            <div className="text-center"><p className="text-2xl font-heading font-bold text-yellow-400">€2M+</p><p className="text-xs text-gray-500 mt-1">Ad spend</p></div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="bg-gray-100 py-5 px-4 md:px-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm text-gray-500">
          <span className="font-semibold text-gray-700">{locale === "en" ? "Trusted by:" : "Veruju mi:"}</span>
          <span>{locale === "en" ? "50+ brands" : "50+ brendova"}</span>
          <span>{locale === "en" ? "6+ countries" : "6+ zemalja"}</span>
          <span>{locale === "en" ? "9+ years" : "10+ godina"}</span>
          <span>3x UK Search Awards</span>
        </div>
      </section>

      {/* PROBLEMS — Two-column with large number */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 tracking-tight">
              {locale === "en" ? "Sound familiar?" : "Zvuči poznato?"}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              {locale === "en" ? "These are the most common problems I solve for clients." : "Ovo su najčešći problemi koje rešavam za klijente."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {problems.map((problem, i) => (
              <div key={problem.title} className="flex gap-5 items-start bg-red-50/50 rounded-2xl p-6 border border-red-100">
                <span className="text-3xl font-heading font-bold text-red-200 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{problem.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS — Dark section, two columns */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              {locale === "en" ? "My Approach" : "Moj pristup"}
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
              {locale === "en" ? "Here's how I fix it" : "Evo kako to rešavam"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {solutions.map((solution, i) => (
              <div key={solution.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary text-sm font-bold">{i + 1}</span>
                  <h3 className="font-heading font-semibold">{solution.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGN TYPES — Colored icon cards */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 tracking-tight">
              {locale === "en" ? "Campaign types I manage" : "Tipovi kampanja koje vodim"}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {campaignTypes.map((campaign) => (
              <Link key={campaign.title} href={campaign.href} className="group text-center p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 ${campaign.color} rounded-xl flex items-center justify-center text-white mx-auto mb-3`}>
                  {campaign.icon}
                </div>
                <h3 className="font-heading font-semibold mb-1">{campaign.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{campaign.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUSIONS — Checklist style, alternating */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 tracking-tight">
              {locale === "en" ? "Everything that's included" : "Sve što je uključeno"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {inclusions.map((block) => (
              <div key={block.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-heading font-semibold text-lg mb-4 pb-3 border-b border-gray-100">{block.title}</h3>
                <ul className="space-y-2.5">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
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

      {/* PROCESS — Horizontal steps on desktop */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 tracking-tight">
              {locale === "en" ? "How it works" : "Kako funkcioniše"}
            </h2>
            <p className="text-gray-500">{locale === "en" ? "From first call to results in 5 simple steps" : "Od prvog poziva do rezultata u 5 koraka"}</p>
          </div>

          {/* Desktop: Horizontal */}
          <div className="hidden md:grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={step.title} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="absolute top-6 left-[60%] right-0 h-px bg-gray-200 hidden md:block" />
                )}
                <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold font-heading mx-auto mb-4 ${
                  index === processSteps.length - 1
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-gray-100 text-gray-600"
                }`}>
                  {step.number}
                </div>
                <h3 className="font-heading font-semibold text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile: Vertical */}
          <div className="md:hidden space-y-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  index === processSteps.length - 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-600"
                }`}>{step.number}</span>
                <div>
                  <h3 className="font-heading font-semibold text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING — Industry standard 3-column */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
              {locale === "en" ? "Simple, transparent pricing" : "Jednostavne, transparentne cene"}
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">{locale === "en" ? "Basics" : "Osnova"}</p>
              <h3 className="text-xl font-heading font-bold mb-1">Starter</h3>
              <p className="text-3xl font-heading font-bold mb-1">{locale === "en" ? "€500" : "€350"}<span className="text-sm text-gray-500 font-normal">/{locale === "en" ? "mo" : "mes"}</span></p>
              <p className="text-xs text-gray-600 mb-6">{locale === "en" ? "starting from" : "počev od"}</p>
              <ul className="space-y-2.5 text-sm text-gray-400 mb-8">
                {[locale === "en" ? "Complete analysis + setup" : "Analiza + setup", locale === "en" ? "Biweekly optimization" : "Biweekly optimizacija", locale === "en" ? "Monthly report" : "Mesečni report", locale === "en" ? "ROI-focused" : "Fokus na ROI"].map(item => (
                  <li key={item} className="flex items-start gap-2"><Check size={16} className="text-green-400 mt-0.5 flex-shrink-0" />{item}</li>
                ))}
              </ul>
              <a href="/kontakt" className="block text-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors">
                {locale === "en" ? "Get started" : "Započnite"}
              </a>
            </div>

            {/* Standard — highlighted */}
            <div className="bg-primary rounded-2xl p-7 relative ring-2 ring-primary ring-offset-2 ring-offset-gray-950">
              <span className="absolute -top-3 left-6 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                {locale === "en" ? "Best value" : "Najbolja vrednost"}
              </span>
              <p className="text-xs uppercase tracking-wider text-blue-200 mb-2">{locale === "en" ? "Growth" : "Rast"}</p>
              <h3 className="text-xl font-heading font-bold mb-1">Standard</h3>
              <p className="text-3xl font-heading font-bold mb-1">{locale === "en" ? "€750" : "€500"}<span className="text-sm text-blue-200 font-normal">/{locale === "en" ? "mo" : "mes"}</span></p>
              <p className="text-xs text-blue-200 mb-6">{locale === "en" ? "starting from" : "počev od"}</p>
              <ul className="space-y-2.5 text-sm text-blue-100 mb-8">
                {[locale === "en" ? "Weekly optimizations" : "Nedeljne optimizacije", locale === "en" ? "Monthly report + call" : "Report + call", locale === "en" ? "A/B testing + scaling" : "A/B + skaliranje", locale === "en" ? "Quarterly analysis" : "Kvartalna analiza", locale === "en" ? "No contracts" : "Bez ugovora"].map(item => (
                  <li key={item} className="flex items-start gap-2"><Check size={16} className="text-white mt-0.5 flex-shrink-0" />{item}</li>
                ))}
              </ul>
              <a href="/kontakt" className="block text-center bg-white text-primary px-6 py-3 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors">
                {locale === "en" ? "Get started" : "Započnite"}
              </a>
            </div>

            {/* Premium */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Enterprise</p>
              <h3 className="text-xl font-heading font-bold mb-1">Performance Marketing</h3>
              <p className="text-xs text-gray-500 italic mb-6">Powered by Funky Enterprises</p>
              <p className="text-gray-400 text-sm mb-6">
                {locale === "en"
                  ? "Google Ads + Meta + SEO + CRO. Complete performance team for market leaders."
                  : "Google Ads + Meta + SEO + CRO. Kompletni performance tim za lidere."}
              </p>
              <ul className="space-y-2.5 text-sm text-gray-400 mb-8">
                {[locale === "en" ? "Omnichannel strategy" : "Omnichannel strategija", locale === "en" ? "Senior-led team" : "Senior-led tim", locale === "en" ? "Measurable growth" : "Merljiv rast"].map(item => (
                  <li key={item} className="flex items-start gap-2"><Check size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />{item}</li>
                ))}
              </ul>
              <a href="https://www.funky.enterprises/" target="_blank" rel="noopener noreferrer" className="block text-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors">
                {locale === "en" ? "Learn more" : "Saznajte više"} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-3 tracking-tight sticky top-8">
                {locale === "en" ? "Got questions?" : "Imate pitanja?"}
              </h2>
              <p className="text-gray-500 text-sm">
                {locale === "en" ? "Here are the most common ones." : "Evo najčešćih."}
              </p>
            </div>

            <div className="space-y-2">
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
        </div>
      </section>

      {/* FINAL CTA — Bold, industry standard */}
      <section className="relative bg-primary text-white py-20 md:py-28 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-primary" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight">
            {locale === "en" ? "Ready to stop guessing and start growing?" : "Spremni da prestanete da nagađate i počnete da rastete?"}
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            {locale === "en"
              ? "Book a free 30-minute strategy call. No obligations, no sales pitch — just an honest assessment."
              : "Zakažite besplatni 30-minutni strategijski poziv. Bez obaveza, bez prodaje — samo iskrena procena."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/kontakt" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              {locale === "en" ? "Book your free call" : "Zakažite besplatni poziv"} <ArrowRight size={18} />
            </a>
          </div>
          <p className="text-xs text-blue-200 mt-6">
            {locale === "en" ? "Average response time: under 4 hours" : "Prosečno vreme odgovora: manje od 4 sata"}
          </p>
        </div>
      </section>
    </>
  );
}
