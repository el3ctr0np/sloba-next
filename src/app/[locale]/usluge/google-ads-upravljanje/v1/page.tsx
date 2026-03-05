import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { Button, AnimateOnScroll, CounterAnimation } from "@/components/ui";
import { Banknote, Clock, Frown, BarChart3, Check, ChevronRight, ArrowRight, Zap, Target, LineChart, BarChart2, Shield, Users, Building2, ShoppingCart, Globe, Star, CheckCircle2 } from "lucide-react";

/**
 * V1 — "Modern SaaS" Design — ENHANCED
 *
 * Enhancements applied:
 * 1. Animated counters in hero
 * 2. AnimateOnScroll on all sections
 * 3. Improved hero readability (bigger text, better contrast)
 * 4. Consistent CTA button styling throughout
 * 5. Uniform pricing buttons
 * 6. Social proof / client logos section
 * 7. "Who is this for?" section
 * 8. Two-column FAQ layout on desktop
 * 9. Sticky mobile CTA
 * 10. Comparison table (DIY vs managed)
 */

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function V1Page({ params }: Props) {
  const { locale } = await params;

  const problems: { icon: ReactNode; title: string; description: string }[] = [
    {
      icon: <Banknote size={24} strokeWidth={1.5} />,
      title: locale === "en" ? "Budget waste without results" : "Bacanje novca bez rezultata",
      description: locale === "en"
        ? "Campaigns are burning through your budget, but conversions are missing or too expensive."
        : "Kampanje troše budžet, ali konverzije izostaju ili su preskupe."
    },
    {
      icon: <Clock size={24} strokeWidth={1.5} />,
      title: locale === "en" ? "No time or expertise" : "Nedostatak vremena i ekspertize",
      description: locale === "en"
        ? "Google Ads requires constant monitoring and optimization, but you have a business to run."
        : "Google Ads zahteva stalno praćenje i optimizaciju, a vi imate biznis koji vodite."
    },
    {
      icon: <Frown size={24} strokeWidth={1.5} />,
      title: locale === "en" ? "Bad past experiences" : "Prethodna loša iskustva",
      description: locale === "en"
        ? "Agencies just set up campaigns without real strategy. You never saw genuine ROI."
        : "Agencije su samo podešavale kampanje bez stvarne strategije. Niste videli pravi ROI."
    },
    {
      icon: <BarChart3 size={24} strokeWidth={1.5} />,
      title: locale === "en" ? "Growth has stalled" : "Rast je stao",
      description: locale === "en"
        ? "Campaigns work okay, but you don't know how to scale them without inflating costs."
        : "Kampanje rade solidno, ali ne znate kako da ih skalirate bez povećanja troškova."
    }
  ];

  const solutions = [
    {
      icon: <Target size={20} />,
      title: locale === "en" ? "Deep analysis before launch" : "Dubinska analiza pre početka",
      description: locale === "en"
        ? "Understanding your business model, margins, ideal customers, and competition — before spending a single euro on ads."
        : "Razumevanje vašeg biznis modela, marži, idealnih kupaca i konkurencije — pre nego što potrošim i jedan dinar na oglase."
    },
    {
      icon: <Zap size={20} />,
      title: locale === "en" ? "Custom campaign structure" : "Struktura kampanja po meri",
      description: locale === "en"
        ? "Campaigns tailored to your goals, whether the focus is ROAS, CPA, lead quality, or brand awareness."
        : "Kampanje prilagođene vašim ciljevima, bilo da je fokus na ROAS, CPA, lead quality ili brand awareness."
    },
    {
      icon: <LineChart size={20} />,
      title: locale === "en" ? "Proactive optimization" : "Proaktivna optimizacija",
      description: locale === "en"
        ? "I track signals and react before they impact performance. Daily analysis, not monthly."
        : "Pratim signale i reagujem pre nego što utiču na performanse. Svakodnevna analiza, ne mesečna."
    },
    {
      icon: <Shield size={20} />,
      title: locale === "en" ? "Transparent reporting" : "Transparentan reporting",
      description: locale === "en"
        ? "You know exactly where every euro goes and what you get in return. No hidden metrics or vague reports."
        : "Tačno znate gde ide svaki EUR i šta dobijate zauzvrat. Bez skrivenih metrika ili nejasnih izveštaja."
    }
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
        { title: "Search campaigns", description: "Direct targeting of users actively searching for your products or services.", href: "/usluge/search-kampanje" },
        { title: "Shopping campaigns", description: "Feed optimization and bid strategies for maximum ROAS in eCommerce.", href: "/usluge/google-shopping" },
        { title: "Performance Max", description: "Strategic PMax with control, clear audience signals, and transparent results.", href: "/usluge/performance-max" },
        { title: "Display and remarketing", description: "Precise targeting to bring back visitors and increase conversions.", href: "/usluge/remarketing" },
        { title: "YouTube ads", description: "Video advertising for awareness and direct response.", href: "/usluge/youtube-oglasi" }
      ] as const)
    : ([
        { title: "Search kampanje", description: "Direktno targetiranje korisnika koji aktivno traže vaše proizvode ili usluge.", href: "/usluge/search-kampanje" },
        { title: "Shopping kampanje", description: "Optimizacija feed-a i bid strategije za maksimalan ROAS u eCommerce-u.", href: "/usluge/google-shopping" },
        { title: "Performance Max", description: "Strateški PMax uz kontrolu, jasne audience signale i transparentne rezultate.", href: "/usluge/performance-max" },
        { title: "Display i remarketing", description: "Precizno targetiranje za povratak posetilaca i povećanje konverzija.", href: "/usluge/remarketing" },
        { title: "YouTube oglasi", description: "Video oglašavanje za awareness i direct response.", href: "/usluge/youtube-oglasi" }
      ] as const);

  const processSteps = locale === "en"
    ? [
        { number: 1, title: "Free consultation", description: "30-minute call about your goals, current campaign status, and challenges." },
        { number: 2, title: "Audit and strategy", description: "Detailed analysis of existing account and strategy development with clear projections." },
        { number: 3, title: "Onboarding", description: "Access setup, communication channels definition, and reporting agreement." },
        { number: 4, title: "Implementation", description: "Restructuring or creating campaigns according to agreed strategy." },
        { number: 5, title: "Optimization and scaling", description: "Continuous performance improvement and scaling of winning campaigns." }
      ]
    : [
        { number: 1, title: "Besplatna konsultacija", description: "30-minutni poziv o vašim ciljevima, trenutnom stanju kampanja i izazovima." },
        { number: 2, title: "Audit i strategija", description: "Detaljna analiza postojećeg naloga i izrada strategije sa jasnim projekcijama." },
        { number: 3, title: "Onboarding", description: "Setup pristupa, definisanje komunikacionih kanala i dogovor oko reportinga." },
        { number: 4, title: "Implementacija", description: "Restruktuiranje ili kreiranje kampanja prema dogovorenoj strategiji." },
        { number: 5, title: "Optimizacija i skaliranje", description: "Kontinuirano poboljšanje performansi i skaliranje pobedničkih kampanja." }
      ];

  const faqs = locale === "en"
    ? [
        { question: "How long does it take to see results?", answer: "I implement first optimizations immediately after taking over the account. Significant improvements come after 4-6 weeks, and for full optimization expect 2-3 months." },
        { question: "Do you need access to my Google Ads account?", answer: "Yes, admin access is required so I can implement all necessary changes. The account remains under your ownership — I get access through MCC." },
        { question: "What if I already have campaigns that work?", answer: "I start with an audit of the current state and identify opportunities for improvement before making major changes. I never tear down what's working — I build on it." },
        { question: "Do you work with small budgets?", answer: "For monthly ad spend budgets below €800, I recommend the Starter package or one-time consultations where I train you to manage campaigns yourself." },
        { question: "How often will we communicate?", answer: "Minimum one monthly call plus written report. For urgent questions, I'm available via Slack or email within 24 hours." },
        { question: "What's the minimum contract length?", answer: "I recommend a minimum of 3 months for testing and optimization. No long-term contracts — results keep me, not contracts." }
      ]
    : [
        { question: "Koliko vremena treba da se vide rezultati?", answer: "Prve optimizacije sprovodim odmah po preuzimanju naloga. Značajna poboljšanja dolaze nakon 4-6 nedelja, a za punu optimizaciju računajte 2-3 meseca." },
        { question: "Da li morate imati pristup mom Google Ads nalogu?", answer: "Da, potreban je admin pristup kako bih mogao da sprovodim sve neophodne izmene. Nalog ostaje u vašem vlasništvu — ja dobijam pristup kroz MCC." },
        { question: "Šta ako već imam kampanje koje rade?", answer: "Počinjem auditom postojećeg stanja i identifikujem prilike za poboljšanje pre većih promena. Nikada ne rušim ono što funkcioniše — nadograđujem." },
        { question: "Da li radite i sa malim budžetima?", answer: "Za mesečne ad spend budžete ispod €800 preporučujem Starter paket ili jednokratne konsultacije gde vas obučim da sami vodite kampanje." },
        { question: "Koliko često ćemo komunicirati?", answer: "Minimum jedan mesečni call plus pisani report. Za hitna pitanja dostupan sam putem Slack-a ili email-a u roku od 24h." },
        { question: "Koja je minimalna dužina saradnje?", answer: "Preporučujem minimum 3 meseca za testiranje i optimizaciju. Nema dugoročnih ugovora — rezultati me zadržavaju, ne ugovori." }
      ];

  const whoIsThisFor = locale === "en"
    ? [
        { icon: <ShoppingCart size={24} />, title: "eCommerce businesses", description: "Online stores looking to scale revenue through Shopping, PMax, and Search campaigns with strong ROAS." },
        { icon: <Building2 size={24} />, title: "B2B & SaaS companies", description: "Companies that need high-quality leads at efficient CPA, not just clicks." },
        { icon: <Globe size={24} />, title: "International brands", description: "Businesses targeting multiple markets (UK, EU, US) who need localized campaign strategy." },
        { icon: <Users size={24} />, title: "Local service providers", description: "Service businesses that rely on phone calls and form submissions from local customers." }
      ]
    : [
        { icon: <ShoppingCart size={24} />, title: "eCommerce biznisi", description: "Online prodavnice koje žele da skaliraju prihod kroz Shopping, PMax i Search kampanje sa jakim ROAS-om." },
        { icon: <Building2 size={24} />, title: "B2B i SaaS kompanije", description: "Kompanije kojima trebaju kvalitetni leadovi po efikasnom CPA, ne samo klikovi." },
        { icon: <Globe size={24} />, title: "Međunarodni brendovi", description: "Biznisi koji ciljaju više tržišta (UK, EU, US) i kojima treba lokalizovana strategija kampanja." },
        { icon: <Users size={24} />, title: "Lokalni servisni provajderi", description: "Servisni biznisi koji se oslanjaju na telefonske pozive i forme od lokalnih kupaca." }
      ];

  const comparisonRows = locale === "en"
    ? [
        { feature: "Campaign strategy", diy: "Generic / template-based", managed: "Custom, data-driven strategy" },
        { feature: "Optimization frequency", diy: "When you remember", managed: "Daily monitoring & weekly optimization" },
        { feature: "Bid management", diy: "Set and forget", managed: "Dynamic bid adjustments by device, time, location" },
        { feature: "Reporting", diy: "Basic Google Ads dashboard", managed: "Custom reports with insights & recommendations" },
        { feature: "Wasted spend", diy: "High (no negative keywords)", managed: "Minimized with proactive exclusions" },
        { feature: "Scaling", diy: "Trial and error", managed: "Systematic testing and controlled scaling" }
      ]
    : [
        { feature: "Strategija kampanja", diy: "Generička / po šablonu", managed: "Custom, data-driven strategija" },
        { feature: "Učestalost optimizacije", diy: "Kad se setite", managed: "Dnevni monitoring i nedeljne optimizacije" },
        { feature: "Upravljanje bidovima", diy: "Podesi i zaboravi", managed: "Dinamičke bid korekcije po uređaju, vremenu, lokaciji" },
        { feature: "Reporting", diy: "Osnovni Google Ads dashboard", managed: "Custom reporti sa insightima i preporukama" },
        { feature: "Bačen budžet", diy: "Visok (bez negativnih ključnih reči)", managed: "Minimizovan proaktivnim isključenjima" },
        { feature: "Skaliranje", diy: "Pokušaj i greška", managed: "Sistematsko testiranje i kontrolisano skaliranje" }
      ];

  return (
    <>
      {/* V1 BADGE */}
      <div className="fixed top-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
        V1 — Modern SaaS
      </div>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-24 md:py-36 px-4 md:px-8">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        {/* Gradient orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-10 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-slate-500">
              <li><Link href="/" className="hover:text-slate-300 transition-colors">{locale === "en" ? "Home" : "Početna"}</Link></li>
              <li><ChevronRight size={14} /></li>
              <li><Link href="/usluge" className="hover:text-slate-300 transition-colors">{locale === "en" ? "Services" : "Usluge"}</Link></li>
              <li><ChevronRight size={14} /></li>
              <li className="text-blue-400">{locale === "en" ? "Google Ads Management" : "Google Ads upravljanje"}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-sm text-blue-300 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {locale === "en" ? "Currently accepting new clients" : "Trenutno primam nove klijente"}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-[1.1] tracking-tight">
                {locale === "en"
                  ? <>Google Ads that <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">actually delivers</span> results</>
                  : <>Google oglašavanje koje <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">zaista donosi</span> rezultate</>
                }
              </h1>

              <p className="text-xl md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                {locale === "en"
                  ? "Complete Google Ads account management — from strategy and campaign structure to daily optimization. Focus on ROAS, CPA, and real revenue growth."
                  : "Kompletno upravljanje Google Ads nalogom — od strategije i strukture kampanja do svakodnevne optimizacije. Fokus na ROAS, CPA i realan rast prihoda."
                }
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:brightness-105 hover:shadow-lg hover:-translate-y-0.5"
                >
                  {locale === "en" ? "Book a free consultation" : "Zakažite besplatnu konsultaciju"}
                  <ArrowRight size={18} />
                </Link>
                <Link href="/usluge/google-ads-audit" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm px-4 py-4">
                  {locale === "en" ? "Or get an account audit" : "Ili zakažite audit"} <ArrowRight size={16} />
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-400" />{locale === "en" ? "9+ years of experience" : "10+ godina iskustva"}</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-400" />3x UK Search Awards</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-400" />{locale === "en" ? "50+ brands" : "50+ brendova"}</span>
              </div>
            </div>

            {/* Results cards — animated counters */}
            <div className="hidden lg:flex flex-col gap-4">
              <AnimateOnScroll animation="fade-up" delay={0}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-300">
                  <p className="text-3xl font-heading font-bold text-blue-400 mb-1"><CounterAnimation end={180} suffix="%+" duration={2000} /></p>
                  <p className="text-sm text-slate-400">{locale === "en" ? "average ROAS improvement in first 90 days" : "prosečno poboljšanje ROAS-a u prvih 90 dana"}</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={150}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-300" style={{ marginLeft: "20px" }}>
                  <p className="text-3xl font-heading font-bold text-blue-400 mb-1"><CounterAnimation end={35} prefix="-" suffix="%" duration={2000} /></p>
                  <p className="text-sm text-slate-400">{locale === "en" ? "CPA reduction through continuous optimization" : "smanjenje CPA kroz kontinuiranu optimizaciju"}</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={300}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-300" style={{ marginLeft: "40px" }}>
                  <p className="text-3xl font-heading font-bold text-blue-400 mb-1">€<CounterAnimation end={2} suffix="M+" duration={2000} /></p>
                  <p className="text-sm text-slate-400">{locale === "en" ? "managed ad spend annually" : "upravljanog ad spend-a godišnje"}</p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Mobile results — animated counters */}
          <div className="grid grid-cols-3 gap-4 mt-12 lg:hidden">
            <div className="text-center">
              <p className="text-2xl font-heading font-bold text-blue-400"><CounterAnimation end={180} suffix="%+" duration={2000} /></p>
              <p className="text-xs text-slate-500 mt-1">{locale === "en" ? "ROAS improvement" : "poboljšanje ROAS-a"}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-heading font-bold text-blue-400"><CounterAnimation end={35} prefix="-" suffix="%" duration={2000} /></p>
              <p className="text-xs text-slate-500 mt-1">{locale === "en" ? "CPA reduction" : "smanjenje CPA"}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-heading font-bold text-blue-400">€<CounterAnimation end={2} suffix="M+" duration={2000} /></p>
              <p className="text-xs text-slate-500 mt-1">{locale === "en" ? "ad spend managed" : "upravljan ad spend"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SOCIAL PROOF / TRUST BAR ═══════════════ */}
      <section className="py-10 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-gray-400 uppercase tracking-wider mb-6">
            {locale === "en" ? "Trusted by brands across the UK, EU, and US" : "Brendovi iz UK, EU i US-a mi veruju"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-40 grayscale">
            {["Chelleon", "Perun Moto", "Pickbox", "Hydroclean", "YMCA", "Cambridge Science", "Best at Printing"].map((brand) => (
              <span key={brand} className="text-lg font-heading font-bold text-gray-600">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PROBLEMS ═══════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                {locale === "en" ? "The Challenge" : "Izazov"}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight">
                {locale === "en" ? "Do you recognize these challenges?" : "Da li prepoznajete ove izazove?"}
              </h2>
              <p className="text-gray-500 text-lg">
                {locale === "en"
                  ? "Most companies that come to me have similar campaign issues."
                  : "Većina kompanija koje dolaze do mene ima slične probleme sa kampanjama."}
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, i) => (
              <AnimateOnScroll key={problem.title} animation="fade-up" delay={i * 100}>
                <div className="group relative h-full">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-red-400 text-sm font-bold opacity-60">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 h-full hover:bg-gray-100 transition-colors">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 text-gray-700 shadow-sm">
                      {problem.icon}
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{problem.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SOLUTIONS ═══════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                {locale === "en" ? "The Approach" : "Pristup"}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight">
                {locale === "en" ? "What you get with professional management" : "Šta dobijate sa profesionalnim upravljanjem"}
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {solutions.map((solution, i) => (
              <AnimateOnScroll key={solution.title} animation="fade-up" delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-5">
                    {solution.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{solution.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{solution.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHO IS THIS FOR ═══════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                {locale === "en" ? "Ideal Clients" : "Idealni klijenti"}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                {locale === "en" ? "Who is this for?" : "Za koga je ovo?"}
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whoIsThisFor.map((item, i) => (
              <AnimateOnScroll key={item.title} animation="fade-up" delay={i * 100}>
                <div className="text-center p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ INCLUSIONS — Bento grid ═══════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                {locale === "en" ? "What's Included" : "Šta je uključeno"}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                {locale === "en" ? "Complete Google Ads service" : "Kompletna Google Ads usluga"}
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {inclusions.map((block, i) => (
              <AnimateOnScroll key={block.title} animation="fade-up" delay={i * 80}>
                <div
                  className={`rounded-2xl p-6 h-full ${
                    i === 0
                      ? "bg-slate-900 text-white md:col-span-2 lg:col-span-1 lg:row-span-2"
                      : "bg-white hover:shadow-md transition-shadow"
                  }`}
                >
                  <h3 className={`font-heading font-semibold text-lg mb-4 ${i === 0 ? "text-white" : ""}`}>
                    {block.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {block.items.map((item) => (
                      <li key={item} className={`flex items-start gap-2.5 text-sm ${i === 0 ? "text-slate-300" : "text-gray-600"}`}>
                        <Check size={16} className={`mt-0.5 flex-shrink-0 ${i === 0 ? "text-blue-400" : "text-green-500"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CAMPAIGN TYPES ═══════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                {locale === "en" ? "Campaign Types" : "Tipovi kampanja"}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                {locale === "en" ? "Google Ads campaigns I manage" : "Google Ads kampanje koje vodim"}
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-3 max-w-3xl mx-auto">
            {campaignTypes.map((campaign, i) => (
              <AnimateOnScroll key={campaign.title} animation="fade-up" delay={i * 60}>
                <Link
                  href={campaign.href}
                  className="group flex items-center justify-between bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1 group-hover:text-blue-600 transition-colors">
                      {campaign.title}
                    </h3>
                    <p className="text-sm text-gray-500">{campaign.description}</p>
                  </div>
                  <ArrowRight size={20} className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ DIY vs MANAGED COMPARISON ═══════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                {locale === "en" ? "Comparison" : "Poređenje"}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                {locale === "en" ? "DIY vs. professionally managed" : "Samostalno vs. profesionalno upravljanje"}
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left p-4 font-heading font-semibold text-gray-700">{locale === "en" ? "Feature" : "Funkcija"}</th>
                      <th className="text-left p-4 font-heading font-semibold text-gray-400">{locale === "en" ? "DIY" : "Samostalno"}</th>
                      <th className="text-left p-4 font-heading font-semibold text-blue-600">{locale === "en" ? "Managed" : "Profesionalno"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={row.feature} className={i < comparisonRows.length - 1 ? "border-b border-gray-100" : ""}>
                        <td className="p-4 font-medium text-gray-700">{row.feature}</td>
                        <td className="p-4 text-gray-400">{row.diy}</td>
                        <td className="p-4 text-gray-700 font-medium">{row.managed}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════ PROCESS ═══════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                {locale === "en" ? "The Process" : "Proces"}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                {locale === "en" ? "How the collaboration works" : "Kako izgleda proces saradnje"}
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="max-w-2xl mx-auto relative">
            {/* Connecting line */}
            <div className="absolute left-[23px] top-8 bottom-8 w-px bg-gradient-to-b from-blue-200 via-blue-300 to-blue-500 hidden md:block" />

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <AnimateOnScroll key={step.title} animation="fade-up" delay={index * 100}>
                  <div className="flex items-start gap-6 relative">
                    <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold font-heading ${
                      index === processSteps.length - 1
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                        : "bg-white border-2 border-gray-200 text-gray-600"
                    }`}>
                      {step.number}
                    </div>
                    <div className="pb-2">
                      <h3 className="font-heading font-semibold text-lg mb-1">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PRICING — Uniform buttons ═══════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                {locale === "en" ? "Pricing" : "Cene"}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                {locale === "en" ? "Choose your plan" : "Izaberite model saradnje"}
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                {locale === "en"
                  ? "Transparent pricing with no hidden costs."
                  : "Transparentne cene bez skrivenih troškova."}
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter */}
            <AnimateOnScroll animation="fade-up" delay={0}>
              <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">{locale === "en" ? "Start with the basics" : "Počnite sa osnovom"}</p>
                <h3 className="text-xl font-heading font-bold mb-1">{locale === "en" ? "Starter" : "Starter"}</h3>
                <p className="text-3xl font-heading font-bold mb-1">{locale === "en" ? "€500" : "€350"}<span className="text-sm text-gray-400 font-normal">/{locale === "en" ? "mo" : "mes"}</span></p>
                <p className="text-xs text-gray-400 mb-6">{locale === "en" ? "starting from" : "počev od"}</p>
                <ul className="space-y-3 text-sm text-gray-600 mb-8 flex-grow">
                  {[
                    locale === "en" ? "Complete analysis and campaign setup" : "Kompletna analiza i setup kampanja",
                    locale === "en" ? "Biweekly optimization" : "Biweekly optimizacija",
                    locale === "en" ? "Monthly report with key metrics" : "Mesečni report sa ključnim metrikama",
                    locale === "en" ? "Focus on what delivers ROI" : "Fokus na ono što donosi ROI"
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-gray-800 hover:shadow-md hover:-translate-y-0.5 w-full"
                >
                  {locale === "en" ? "Get started" : "Započnite"} <ArrowRight size={16} />
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Standard — Popular */}
            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-white rounded-2xl p-8 ring-2 ring-blue-600 relative hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <span className="absolute -top-3 left-8 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {locale === "en" ? "Most popular" : "Najpopularniji"}
                </span>
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">{locale === "en" ? "For stable growth" : "Za stabilan rast"}</p>
                <h3 className="text-xl font-heading font-bold mb-1">{locale === "en" ? "Standard" : "Standard"}</h3>
                <p className="text-3xl font-heading font-bold mb-1">{locale === "en" ? "€750" : "€500"}<span className="text-sm text-gray-400 font-normal">/{locale === "en" ? "mo" : "mes"}</span></p>
                <p className="text-xs text-gray-400 mb-6">{locale === "en" ? "starting from" : "počev od"}</p>
                <ul className="space-y-3 text-sm text-gray-600 mb-8 flex-grow">
                  {[
                    locale === "en" ? "Weekly campaign optimizations" : "Nedeljne optimizacije kampanja",
                    locale === "en" ? "Monthly report + strategic call" : "Mesečni report + strategijski call",
                    locale === "en" ? "A/B testing and smart scaling" : "A/B testiranje i pametno skaliranje",
                    locale === "en" ? "Quarterly strategic analysis" : "Kvartalna strategijska analiza",
                    locale === "en" ? "No long-term contracts" : "Bez dugoročnih ugovora"
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5 w-full"
                >
                  {locale === "en" ? "Get started" : "Započnite"} <ArrowRight size={16} />
                </Link>
              </div>
            </AnimateOnScroll>

            {/* Premium */}
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="bg-slate-900 text-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">{locale === "en" ? "Multi-channel" : "Multi-channel"}</p>
                <h3 className="text-xl font-heading font-bold mb-1">Performance Marketing</h3>
                <p className="text-xs text-slate-400 italic mb-6">Powered by Funky Enterprises</p>
                <p className="text-slate-300 text-sm mb-6">
                  {locale === "en"
                    ? "Google Ads + Meta + SEO + CRO. Complete performance team for market leaders."
                    : "Google Ads + Meta + SEO + CRO. Kompletni performance tim za tržišne lidere."}
                </p>
                <ul className="space-y-3 text-sm text-slate-300 mb-8 flex-grow">
                  {[
                    locale === "en" ? "Omnichannel strategy and execution" : "Omnichannel strategija i egzekucija",
                    locale === "en" ? "Senior-led expert team" : "Senior-led tim eksperata",
                    locale === "en" ? "Measurable growth across all channels" : "Merljiv rast kroz sve kanale"
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://www.funky.enterprises/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 w-full">
                  {locale === "en" ? "Learn more" : "Saznajte više"} <ArrowRight size={16} />
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ — Two column on desktop ═══════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">
                {locale === "en" ? "Frequently asked questions" : "Često postavljana pitanja"}
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-3">
            {faqs.map((faq, index) => (
              <AnimateOnScroll key={faq.question} animation="fade-up" delay={index * 60}>
                <details
                  className="group bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  open={index === 0 ? true : undefined}
                >
                  <summary className="cursor-pointer p-5 font-heading font-medium text-sm list-none flex items-center justify-between">
                    {faq.question}
                    <ChevronRight size={18} className="text-gray-400 group-open:rotate-90 transition-transform duration-200 flex-shrink-0 ml-3" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIAL ═══════════════ */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-heading text-gray-700 mb-6 leading-relaxed italic">
                {locale === "en"
                  ? "\"Slobodan transformed our Google Ads from a cost center into our primary growth engine. ROAS improved significantly within the first 90 days.\""
                  : "\"Slobodan je transformisao naše Google Ads iz troška u primarni motor rasta. ROAS se značajno poboljšao u prvih 90 dana.\""}
              </blockquote>
              <div>
                <p className="font-heading font-semibold text-gray-900">
                  {locale === "en" ? "Grant & Chelcie" : "Grant i Chelcie"}
                </p>
                <p className="text-sm text-gray-500">Chelleon — UK Skincare Brand</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-20 md:py-28 px-4 md:px-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight">
              {locale === "en" ? "Ready to grow?" : "Spremni za rast?"}
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              {locale === "en"
                ? "Book a free 30-minute consultation. No obligations."
                : "Zakažite besplatnu 30-minutnu konsultaciju. Bez obaveza."}
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-accent text-gray-900 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:brightness-105 hover:shadow-lg hover:-translate-y-0.5"
            >
              {locale === "en" ? "Book a free consultation" : "Zakažite besplatnu konsultaciju"}
              <ArrowRight size={18} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════ STICKY MOBILE CTA ═══════════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 md:hidden">
        <Link
          href="/kontakt"
          className="flex items-center justify-center gap-2 bg-accent text-gray-900 w-full py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:brightness-105"
        >
          {locale === "en" ? "Book a free consultation" : "Zakažite besplatnu konsultaciju"}
          <ArrowRight size={16} />
        </Link>
      </div>
    </>
  );
}
