import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { MultiStepForm } from "./MultiStepForm";
import { AnimatedCounter } from "./AnimatedCounter";
import { SocialProofToast } from "./SocialProofToast";

type Props = {
  params: Promise<{ locale: string }>;
};

// noindex, nofollow - ovo je paid landing page, ne indeksiramo
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "en"
      ? "Google Ads Expert | Get More Customers From Google — Slobodan Jelisavac"
      : "Google Ads ekspert | Dobijte više kupaca sa Google-a — Slobodan Jelisavac";

  const description =
    locale === "en"
      ? "Stop wasting budget on Google Ads. 180%+ ROAS improvement, 9+ years experience, 50+ brands. Get a free account analysis."
      : "Prestanite da bacate budžet na Google Ads. 180%+ poboljšanje ROAS-a, 10+ godina iskustva, 50+ brendova. Dobijte besplatnu analizu naloga.";

  return {
    title,
    description,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title,
      description,
      url: `https://www.slobodan-jelisavac.com/${locale}/lp/google-ads`,
      siteName: "Slobodan Jelisavac",
      locale: locale === "en" ? "en_US" : "sr_RS",
      type: "website",
    },
  };
}

export default async function GoogleAdsLandingPage({ params }: Props) {
  const { locale } = await params;

  // =============================================
  // CONTENT DATA
  // =============================================

  const heroStats =
    locale === "en"
      ? [
          { value: "180%+", label: "Average ROAS improvement" },
          { value: "-35%", label: "CPA reduction" },
          { value: "50+", label: "Brands managed" },
        ]
      : [
          { value: "180%+", label: "Prosečno poboljšanje ROAS-a" },
          { value: "-35%", label: "Smanjenje CPA" },
          { value: "50+", label: "Brendova u portfoliju" },
        ];

  const problems =
    locale === "en"
      ? [
          {
            icon: "💸",
            title: "Budget disappears without results",
            description:
              "You invest in Google Ads every month, but conversions are missing or too expensive. You have no clear picture of what works and what doesn't.",
          },
          {
            icon: "😤",
            title: "Bad agency experiences",
            description:
              "Agencies set up campaigns without a real strategy. You get generic reports, but you never saw true ROI from your investment.",
          },
          {
            icon: "⏰",
            title: "No time to manage it properly",
            description:
              "Google Ads requires daily monitoring and optimization. You have a business to run — you can't sit in the ads dashboard all day.",
          },
          {
            icon: "📊",
            title: "Growth has plateaued",
            description:
              "Campaigns work okay, but you don't know how to scale them without costs spiraling out of control.",
          },
          {
            icon: "🎯",
            title: "Not sure if Google Ads even works for you",
            description:
              "You've heard success stories but also horror stories. You need an expert opinion before investing more.",
          },
          {
            icon: "🔍",
            title: "Competition is outbidding you",
            description:
              "Competitors are showing up above you in search results and stealing your potential customers.",
          },
        ]
      : [
          {
            icon: "💸",
            title: "Budžet nestaje bez rezultata",
            description:
              "Ulažete u Google Ads svaki mesec, ali konverzije izostaju ili su preskupe. Nemate jasnu sliku šta funkcioniše a šta ne.",
          },
          {
            icon: "😤",
            title: "Loša iskustva sa agencijama",
            description:
              "Agencije su podešavale kampanje bez stvarne strategije. Dobijali ste generičke reportove, ali nikada niste videli pravi ROI.",
          },
          {
            icon: "⏰",
            title: "Nemate vremena da se time bavite",
            description:
              "Google Ads zahteva svakodnevno praćenje i optimizaciju. Vi imate biznis koji vodite — ne možete ceo dan da sedite u ads dashboard-u.",
          },
          {
            icon: "📊",
            title: "Rast je stao",
            description:
              "Kampanje rade solidno, ali ne znate kako da ih skalirate a da troškovi ne izmaknu kontroli.",
          },
          {
            icon: "🎯",
            title: "Niste sigurni da li Google Ads uopšte radi za vas",
            description:
              "Čuli ste priče o uspehu ali i o bacanju novca. Treba vam ekspertsko mišljenje pre nego što uložite više.",
          },
          {
            icon: "🔍",
            title: "Konkurencija vas nadmašuje",
            description:
              "Konkurenti se pojavljuju iznad vas u pretrazi i kradu vaše potencijalne kupce.",
          },
        ];

  const solutions =
    locale === "en"
      ? [
          {
            icon: "🔬",
            title: "Deep analysis before any spending",
            description:
              "I understand your business model, margins, ideal customers, and competition — before spending a single euro on ads.",
          },
          {
            icon: "🏗️",
            title: "Custom campaign architecture",
            description:
              "Campaigns designed specifically for your goals. Whether it's ROAS, CPA, lead quality, or brand awareness — every structure is purpose-built.",
          },
          {
            icon: "⚡",
            title: "Proactive daily optimization",
            description:
              "I track signals and react before they impact performance. Daily analysis, not monthly check-ins. Problems get fixed before they cost you money.",
          },
          {
            icon: "📈",
            title: "Transparent results you can verify",
            description:
              "You know exactly where every euro goes and what you get in return. Clear dashboards, honest reports, real numbers.",
          },
        ]
      : [
          {
            icon: "🔬",
            title: "Dubinska analiza pre bilo kakve potrošnje",
            description:
              "Razumem vaš biznis model, marže, idealne kupce i konkurenciju — pre nego što potrošim i jedan dinar na oglase.",
          },
          {
            icon: "🏗️",
            title: "Struktura kampanja po meri",
            description:
              "Kampanje dizajnirane specifično za vaše ciljeve. Bilo da je fokus ROAS, CPA, kvalitet leadova ili brand awareness — svaka struktura ima svrhu.",
          },
          {
            icon: "⚡",
            title: "Proaktivna svakodnevna optimizacija",
            description:
              "Pratim signale i reagujem pre nego što utiču na performanse. Svakodnevna analiza, ne mesečne provere. Problemi se rešavaju pre nego što vas koštaju.",
          },
          {
            icon: "📈",
            title: "Transparentni rezultati koje možete proveriti",
            description:
              "Tačno znate gde ide svaki EUR i šta dobijate zauzvrat. Jasni dashboard-ovi, pošteni reportovi, realni brojevi.",
          },
        ];

  const processSteps =
    locale === "en"
      ? [
          {
            step: "01",
            title: "Free account analysis",
            description:
              "Fill out the form below. I'll review your current Google Ads situation and tell you honestly if I can help and what results are realistic.",
            duration: "24-48h response",
          },
          {
            step: "02",
            title: "Strategy & setup",
            description:
              "Detailed audit, keyword research, campaign structure creation, and implementation according to agreed goals and KPIs.",
            duration: "Week 1-2",
          },
          {
            step: "03",
            title: "Optimization & results",
            description:
              "Daily performance monitoring, A/B testing, bid adjustments, and continuous improvement. Monthly reports with clear metrics.",
            duration: "Ongoing",
          },
        ]
      : [
          {
            step: "01",
            title: "Besplatna analiza naloga",
            description:
              "Popunite formular ispod. Pregledam vašu trenutnu Google Ads situaciju i kažem vam iskreno da li mogu da pomognem i koji su realni rezultati.",
            duration: "Odgovor za 24-48h",
          },
          {
            step: "02",
            title: "Strategija i setup",
            description:
              "Detaljan audit, istraživanje ključnih reči, kreiranje strukture kampanja i implementacija prema dogovorenim ciljevima i KPI-jevima.",
            duration: "Nedelja 1-2",
          },
          {
            step: "03",
            title: "Optimizacija i rezultati",
            description:
              "Svakodnevno praćenje performansi, A/B testiranje, bid adjustments i kontinuirano poboljšanje. Mesečni reportovi sa jasnim metrikama.",
            duration: "Kontinuirano",
          },
        ];

  const services =
    locale === "en"
      ? [
          {
            title: "Search Campaigns",
            icon: "🔍",
            description: "Target users actively searching for your products or services on Google.",
          },
          {
            title: "Shopping Campaigns",
            icon: "🛒",
            description: "Feed optimization and bid strategies for maximum eCommerce ROAS.",
          },
          {
            title: "Performance Max",
            icon: "🚀",
            description: "Strategic PMax with control, clear audience signals, and transparent results.",
          },
          {
            title: "Remarketing",
            icon: "🎯",
            description: "Bring back visitors who left without converting and close the sale.",
          },
          {
            title: "YouTube Ads",
            icon: "▶️",
            description: "Video advertising for awareness and direct response.",
          },
          {
            title: "Display Network",
            icon: "🖥️",
            description: "Visual ads across millions of websites to build brand awareness.",
          },
        ]
      : [
          {
            title: "Search kampanje",
            icon: "🔍",
            description: "Targetirajte korisnike koji aktivno pretražuju vaše proizvode ili usluge na Google-u.",
          },
          {
            title: "Shopping kampanje",
            icon: "🛒",
            description: "Optimizacija feed-a i bid strategije za maksimalan eCommerce ROAS.",
          },
          {
            title: "Performance Max",
            icon: "🚀",
            description: "Strateški PMax uz kontrolu, jasne audience signale i transparentne rezultate.",
          },
          {
            title: "Remarketing",
            icon: "🎯",
            description: "Vratite posetioce koji su otišli bez konverzije i zatvorite prodaju.",
          },
          {
            title: "YouTube oglasi",
            icon: "▶️",
            description: "Video oglasavanje za awareness i direct response.",
          },
          {
            title: "Display mreža",
            icon: "🖥️",
            description: "Vizuelni oglasi na milionima sajtova za izgradnju brend svesti.",
          },
        ];

  const inclusions =
    locale === "en"
      ? [
          "Goal and KPI definition",
          "Keyword and competitor research",
          "Campaign structure creation",
          "Ad creation — RSA headlines, descriptions & extensions",
          "AI tools for campaign progress monitoring",
          "Monthly and quarterly experiments & A/B testing",
          "Custom scripts for automation & alerts",
          "Negative keywords management",
          "Google Analytics 4 integration",
          "Conversion tracking setup",
          "Monthly report + strategy call",
          "Direct email access",
        ]
      : [
          "Definisanje ciljeva i KPI-jeva",
          "Istraživanje ključnih reči i konkurencije",
          "Kreiranje strukture kampanja",
          "Kreiranje oglasa — RSA naslovi, opisi i ekstenzije",
          "AI alati za praćenje napretka kampanja",
          "Mesečni i kvartalni eksperimenti i A/B testiranja",
          "Custom skripte za automatizaciju i alerte",
          "Upravljanje negativnim ključnim rečima",
          "Google Analytics 4 integracija",
          "Conversion tracking podešavanje",
          "Mesečni report + strategijski call",
          "Direktan email pristup",
        ];

  const comparisonData =
    locale === "en"
      ? {
          headers: ["", "Me (Expert)", "Typical Agency", "In-House Hire", "DIY"],
          rows: [
            ["Monthly cost", "From €350", "€300-500+", "€1,000+ salary", "Free (your time)"],
            ["Experience level", "Senior — 10+ years, 50+ brands", "Junior practicing on your accounts", "Varies by experience", "Learning curve"],
            ["Response & planning", "Within 24h", "~1 week", "Immediately available", "N/A"],
            ["Strategy", "Senior knowledge, custom & data-driven", "Template approaches — juniors learning", "Limited perspective", "Trial & error"],
            ["PPC & AI tools", "Advanced — custom scripts, AI monitoring", "Rarely or basic tools", "Expensive for one account", "Free basics only"],
            ["Contracts", "Month-to-month", "Month-to-month", "Employment contract", "N/A"],
            ["Direct access", "Always — you talk directly to me", "Junior or third party assigned", "Yes — they're your employee", "N/A"],
          ],
        }
      : {
          headers: ["", "Ja (ekspert)", "Tipična agencija", "Zaposleni", "Sam/a"],
          rows: [
            ["Mesečna cena", "Od €350", "€300-500+", "€1.000+ plata", "Besplatno (vaše vreme)"],
            ["Iskustvo", "Senior — 10+ godina, 50+ brendova", "Junior koji vežba na vašim nalozima", "Varira zavisno od iskustva", "Kriva učenja"],
            ["Vreme odgovora i planiranja", "U roku od 24h", "Oko nedelju dana", "Odmah vam je pri ruci", "N/A"],
            ["Strategija", "Senior znanje, custom i prema podacima", "Template pristupi — juniori uče", "Ograničena perspektiva", "Pokušaj-greška"],
            ["PPC i AI alati", "Napredni — custom skripte, AI monitoring", "Retko ili osnovni alati", "Skupo za jedan nalog", "Samo besplatni osnovi"],
            ["Ugovori", "Mesec za mesec", "Mesec za mesec", "Ugovor o radu", "N/A"],
            ["Direktan pristup", "Uvek — pričate direktno sa mnom", "Junior ili treće lice dodeljen vama", "Da — vaš je zaposleni", "N/A"],
          ],
        };

  const pricingTiers =
    locale === "en"
      ? [
          {
            name: "Starter Plan",
            price: "€500",
            period: "/mo",
            subtitle: "Just starting out or have a limited budget? Get expert setup and better results without overspending.",
            features: [
              "Complete analysis and campaign setup",
              "Biweekly optimization",
              "Monthly report with key metrics",
              "Email support",
              "Up to 2 campaign types",
            ],
            popular: false,
            cta: "Start With Starter",
            funkyBadge: false,
          },
          {
            name: "Standard Plan",
            price: "€750",
            period: "/mo",
            subtitle: "For brands and companies already planning bigger budgets. Focus on long-term, stable results and smart scaling.",
            features: [
              "Everything from Starter",
              "Weekly campaign optimizations",
              "Monthly report + strategy call",
              "A/B testing and smart scaling",
              "Quarterly strategic analysis",
              "Slack/email support — 24h response",
              "No long-term contracts",
            ],
            popular: true,
            cta: "Choose Standard",
            funkyBadge: false,
          },
          {
            name: "Premium Plan",
            price: "Let's Talk",
            period: "",
            subtitle: "For market leaders ready to dominate every channel. I assemble a senior specialist team under my coordination — Google Ads, Meta Ads, SEO, CRO — all managed through one point of contact: me.",
            features: [
              "Everything from Standard",
              "Google Ads + Meta Ads + SEO + CRO",
              "Senior-led team of specialists",
              "Omnichannel strategy & execution",
              "Measurable growth across all channels",
              "One point of contact — full accountability",
            ],
            popular: false,
            cta: "Get Premium Quote",
            funkyBadge: true,
          },
        ]
      : [
          {
            name: "Starter paket",
            price: "€350",
            period: "/mes",
            subtitle: "Tek počinjete ili imate ograničen budžet? Dobijte ekspertski setup i bolje rezultate bez preterane potrošnje.",
            features: [
              "Kompletna analiza i setup kampanja",
              "Biweekly optimizacija",
              "Mesečni report sa ključnim metrikama",
              "Email podrška",
              "Do 2 tipa kampanja",
            ],
            popular: false,
            cta: "Počnite sa Starter-om",
            funkyBadge: false,
          },
          {
            name: "Standard paket",
            price: "€500",
            period: "/mes",
            subtitle: "Za brendove i kompanije koje već planiraju veće budžete. Fokus na dugoročne, stabilne rezultate i pametno skaliranje.",
            features: [
              "Sve iz Starter paketa",
              "Nedeljne optimizacije kampanja",
              "Mesečni report + strategijski call",
              "A/B testiranje i pametno skaliranje",
              "Kvartalna strategijska analiza",
              "Slack/email podrška — odgovor za 24h",
              "Bez dugoročnih ugovora",
            ],
            popular: true,
            cta: "Izaberite Standard",
            funkyBadge: false,
          },
          {
            name: "Premium paket",
            price: "Po dogovoru",
            period: "",
            subtitle: "Za tržišne lidere koji žele da dominiraju na svim kanalima. Okupljam senior tim specijalista pod mojom koordinacijom — Google Ads, Meta Ads, SEO, CRO — sve kroz jednu tačku kontakta: mene.",
            features: [
              "Sve iz Standard paketa",
              "Google Ads + Meta Ads + SEO + CRO",
              "Senior-led tim specijalista",
              "Omnichannel strategija i egzekucija",
              "Merljiv rast kroz sve kanale",
              "Jedna tačka kontakta — puna odgovornost",
            ],
            popular: false,
            cta: "Zatražite Premium ponudu",
            funkyBadge: true,
          },
        ];

  const guarantees =
    locale === "en"
      ? [
          {
            icon: "🤝",
            title: "No long-term contracts",
            description: "Month-to-month service. Results keep me, not contracts. Cancel anytime with 30 days notice.",
          },
          {
            icon: "📊",
            title: "90-day performance system",
            description:
              "My proven system has been refined over 10+ years and 50+ brands. You'll see measurable improvement in the first 90 days or we re-evaluate the strategy together — at no extra cost.",
          },
          {
            icon: "💬",
            title: "Direct expert access — always",
            description:
              "You always talk to me directly. No junior staff, no middleman. Direct Slack/email access with 24h response time.",
          },
        ]
      : [
          {
            icon: "🤝",
            title: "Bez dugoročnih ugovora",
            description:
              "Mesec za mesec saradnja. Rezultati me zadržavaju, ne ugovori. Otkažite u bilo kom trenutku sa 30 dana najave.",
          },
          {
            icon: "📊",
            title: "90-dnevni sistem za rezultate",
            description:
              "Moj provereni sistem usavršen je kroz 10+ godina i 50+ brendova. Videćete merljivo poboljšanje u prvih 90 dana ili zajedno re-evaluiramo strategiju — bez dodatnih troškova.",
          },
          {
            icon: "💬",
            title: "Direktan pristup ekspertu — uvek",
            description:
              "Uvek pričate direktno sa mnom. Bez juniora, bez posrednika. Direktan Slack/email pristup sa odgovorom u roku od 24h.",
          },
        ];

  const faqs =
    locale === "en"
      ? [
          {
            question: "How quickly will I see results?",
            answer:
              "First optimizations start immediately. Significant improvements come after 4-6 weeks, and for full optimization expect 2-3 months. Google's algorithm needs time to learn and adjust to your specific audience.",
          },
          {
            question: "What's the minimum ad spend budget you work with?",
            answer:
              "I recommend a minimum of €500/month in ad spend for visible results. For budgets below that, I offer one-time consultations where I train you to manage campaigns yourself.",
          },
          {
            question: "What if I already have campaigns that work?",
            answer:
              "I start with an audit of the current state and identify opportunities for improvement. I never tear down what's working — I build on it and look for missed opportunities.",
          },
          {
            question: "How is this different from hiring an agency?",
            answer:
              "With an agency, you typically get a junior account manager. With me, you get 10+ years of direct experience on every account. No layers, no delegation to juniors, no generic playbooks.",
          },
          {
            question: "Do you work with small businesses?",
            answer:
              "Absolutely. Google Ads is ideal for small businesses because you only pay when someone clicks. The key is proper structure, smart targeting, and eliminating wasted spend through negative keywords.",
          },
          {
            question: "What industries do you work with?",
            answer:
              "I specialize in eCommerce (Shopping, PMax) and B2B lead generation (Search). I've worked across skincare, auto parts, printing, cleaning services, streaming, and more.",
          },
          {
            question: "Is there a minimum contract period?",
            answer:
              "I recommend minimum 3 months for proper testing and optimization, but there are no lock-in contracts. It's month-to-month. If you want to stop, just give 30 days notice.",
          },
          {
            question: "What happens during the free analysis?",
            answer:
              "I review your current Google Ads account (or your market if you're new), identify the biggest opportunities and problems, and give you honest feedback about what's realistic. No sales pitch — just data.",
          },
        ]
      : [
          {
            question: "Koliko brzo ću videti rezultate?",
            answer:
              "Prve optimizacije počinju odmah. Značajna poboljšanja dolaze nakon 4-6 nedelja, a za punu optimizaciju računajte 2-3 meseca. Google-ovom algoritmu treba vreme da nauči i prilagodi se vašoj specifičnoj publici.",
          },
          {
            question: "Koji je minimalan budžet za oglašavanje?",
            answer:
              "Preporučujem minimum €500/mesečno za ad spend za vidljive rezultate. Za budžete ispod toga nudim jednokratne konsultacije gde vas obučim da sami vodite kampanje.",
          },
          {
            question: "Šta ako već imam kampanje koje rade?",
            answer:
              "Počinjem auditom postojećeg stanja i identifikujem prilike za poboljšanje. Nikada ne rušim ono što funkcioniše — nadograđujem i tražim propuštene prilike.",
          },
          {
            question: "Po čemu se razlikujete od agencije?",
            answer:
              "U agenciji obično dobijete junior account managera. Sa mnom dobijate 10+ godina direktnog iskustva na svakom nalogu. Bez slojeva, bez delegiranja juniorima, bez generičkih playbook-ova.",
          },
          {
            question: "Da li radite sa malim firmama?",
            answer:
              "Apsolutno. Google oglašavanje je idealno za male firme jer plaćate samo kada neko klikne. Ključ je pravilna struktura, pametno targetiranje i eliminacija nepotrebnih troškova.",
          },
          {
            question: "Sa kojim industrijama radite?",
            answer:
              "Specijalizujem se za eCommerce (Shopping, PMax) i B2B lead generation (Search). Radio sam sa skincare, auto delovi, printing, cleaning services, streaming i još mnogo toga.",
          },
          {
            question: "Da li postoji minimalan period saradnje?",
            answer:
              "Preporučujem minimum 3 meseca za pravilno testiranje i optimizaciju, ali nema lock-in ugovora. Saradnja je mesec za mesec. Ako želite da prestanete, samo 30 dana najave.",
          },
          {
            question: "Šta se dešava na besplatnoj analizi?",
            answer:
              "Pregledam vaš trenutni Google Ads nalog (ili vaše tržište ako ste novi), identifikujem najveće prilike i probleme, i dajem vam iskren feedback o tome šta je realno. Bez prodajnog pitch-a — samo podaci.",
          },
        ];

  const clientLogos = [
    "Chelleon",
    "DesignerGlasses UK",
    "Soundbox Store",
    "Perun Moto",
    "JustRecliners",
    "Cambridge Science",
    "Merrythought",
    "YMCA",
    "Pickbox",
  ];

  // =============================================
  // RENDER
  // =============================================

  return (
    <div className="bg-white">
      {/* ============================================= */}
      {/* STICKY CTA BAR — Mobile only */}
      {/* ============================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700 p-3 md:hidden">
        <a
          href="#contact-form"
          className="btn-secondary block text-center text-sm"
        >
          {locale === "en" ? "Get Free Analysis" : "Besplatna analiza"}
        </a>
      </div>

      {/* ============================================= */}
      {/* MINI HEADER — Logo + CTA only */}
      {/* ============================================= */}
      <header className="bg-white border-b border-gray-100 py-3 px-4 md:px-8 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-lg text-gray-900">
            Slobodan Jelisavac
          </Link>
          <a
            href="#contact-form"
            className="btn-primary text-sm hidden md:inline-block"
          >
            {locale === "en" ? "Get Free Analysis" : "Besplatna analiza naloga"}
          </a>
        </div>
      </header>

      {/* ============================================= */}
      {/* SECTION 1: HERO */}
      {/* ============================================= */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Micro-label */}
            <p className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-wider">
              Google Ads {locale === "en" ? "Expert" : "ekspert"} — {locale === "en" ? "9+ Years Experience" : "10+ godina iskustva"}
            </p>

            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-300 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400"></span>
              </span>
              {locale === "en"
                ? "Only accepting 2 new clients per month"
                : "Primam samo 2 nova klijenta mesečno"}
            </div>

            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {locale === "en"
                ? "Stop Wasting Money on Google Ads That Don't Convert"
                : "Prestanite da bacate novac na Google Ads koji ne konvertuju"}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {locale === "en" ? (
                <>
                  I help eCommerce and B2B companies turn Google Ads into a{" "}
                  <strong className="text-white">predictable revenue machine</strong>.
                  No junior staff, no long-term contracts, no generic strategies.
                  Just <strong className="text-white">data-driven results</strong> from someone
                  who&apos;s managed €2M+ in ad spend across 50+ brands.
                </>
              ) : (
                <>
                  Pomažem eCommerce i B2B kompanijama da pretvore Google Ads u{" "}
                  <strong className="text-white">predvidljiv izvor prihoda</strong>.
                  Bez juniora, bez dugoročnih ugovora, bez generičkih strategija.
                  Samo <strong className="text-white">rezultati zasnovani na podacima</strong> od
                  nekoga ko je upravljao sa €2M+ ad spend-a za 50+ brendova.
                </>
              )}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-10 max-w-lg">
              {heroStats.map((stat) => (
                <div key={stat.value}>
                  <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact-form" className="btn-secondary text-center">
                {locale === "en"
                  ? "Get Free Account Analysis"
                  : "Zatražite besplatnu analizu naloga"}
              </a>
              <a
                href="#how-it-works"
                className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
              >
                {locale === "en" ? "See how it works ↓" : "Pogledajte kako funkcioniše ↓"}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
              <span>3x UK Search Awards</span>
              <span>{locale === "en" ? "50+ brands, 6+ countries" : "50+ brendova, 6+ zemalja"}</span>
              <span>{locale === "en" ? "No long-term contracts" : "Bez dugoročnih ugovora"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 2: CLIENT LOGOS — Social Proof Strip */}
      {/* ============================================= */}
      <section className="py-8 px-4 md:px-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-gray-500 mb-4 uppercase tracking-wider">
            {locale === "en"
              ? "Trusted by brands across UK, USA, EU, and Serbia"
              : "Brendovi iz UK, USA, EU i Srbije koji mi veruju"}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="text-gray-400 font-heading font-semibold text-sm md:text-base"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 3: PROBLEM AGITATION */}
      {/* ============================================= */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {locale === "en"
                ? "Does This Sound Familiar?"
                : "Da li vam je ovo poznato?"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {locale === "en"
                ? "Most businesses I work with come to me with the same frustrations."
                : "Većina biznisa sa kojima radim dolazi mi sa istim frustracijama."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="bg-white border-2 border-gray-900 rounded-lg p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:translate-x-[5px] hover:translate-y-[5px]"
              >
                <div className="text-3xl mb-3">{problem.icon}</div>
                <h3 className="text-lg font-heading font-semibold mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* MID-PAGE CTA 1 */}
      {/* ============================================= */}
      <section className="py-10 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl font-heading font-semibold mb-4">
            {locale === "en"
              ? "If you recognized yourself in any of these — I can help."
              : "Ako ste se prepoznali u bilo čemu od ovoga — mogu da pomognem."}
          </p>
          <a href="#contact-form" className="btn-secondary inline-block">
            {locale === "en" ? "Get Free Analysis" : "Besplatna analiza"}
          </a>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 4: SOLUTION — What You Get */}
      {/* ============================================= */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {locale === "en"
                ? "What Changes When You Work With Me"
                : "Šta se menja kad radite sa mnom"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {locale === "en"
                ? "Strategic approach to campaigns, not just account setup. Every decision is data-driven."
                : "Strateški pristup kampanjama, ne samo podešavanja. Svaka odluka je zasnovana na podacima."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="bg-white border-2 border-gray-900 rounded-lg p-6 shadow-card"
              >
                <div className="text-2xl mb-3">{solution.icon}</div>
                <h3 className="text-lg font-heading font-semibold mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 5: CASE STUDY / SOCIAL PROOF */}
      {/* ============================================= */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {locale === "en" ? "Real Results, Real Clients" : "Realni rezultati, realni klijenti"}
            </h2>
          </div>

          {/* Case study card */}
          <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-xl p-8 md:p-12 mb-10">
            <p className="text-yellow-400 text-sm font-semibold mb-2 uppercase tracking-wider">
              Case Study — Soundbox Store
            </p>
            <h3 className="text-2xl font-heading font-bold mb-4">
              {locale === "en"
                ? "From zero to £170k ad spend — and expanding across Europe"
                : "Od nule do £170k ad spend-a — i širenje na celu Evropu"}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-sm text-slate-400 mb-1">
                  {locale === "en" ? "Starting point" : "Početak"}
                </p>
                <p className="text-2xl font-heading font-bold text-red-400">£0</p>
                <p className="text-xs text-slate-500 mt-1">
                  {locale === "en" ? "No Google Ads presence" : "Bez Google Ads prisustva"}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">
                  {locale === "en" ? "Scaled to" : "Skalirano na"}
                </p>
                <p className="text-2xl font-heading font-bold text-green-400">£170k+</p>
                <p className="text-xs text-slate-500 mt-1">
                  {locale === "en" ? "Annual ad spend" : "Godišnji ad spend"}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">
                  {locale === "en" ? "Expansion" : "Ekspanzija"}
                </p>
                <p className="text-2xl font-heading font-bold text-yellow-400">UK → EU</p>
                <p className="text-xs text-slate-500 mt-1">
                  {locale === "en" ? "Multi-market growth" : "Rast na više tržišta"}
                </p>
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              {locale === "en"
                ? "UK-based B2B eCommerce in a highly specialized acoustic solutions niche with average order values in the thousands. Built Google Ads from scratch — Search, Shopping, and Performance Max. Stabilized revenue growth in UK, then expanded into EU markets with localized campaigns."
                : "UK B2B eCommerce u visoko specijalizovanoj niši akustičnih rešenja sa prosečnim narudžbinama u hiljadama funti. Google Ads izgrađen od nule — Search, Shopping i Performance Max. Stabilizovan rast prihoda u UK, zatim ekspanzija na EU tržišta sa lokalizovanim kampanjama."}
            </p>
          </div>

          {/* Testimonial */}
          <div className="max-w-3xl mx-auto bg-gray-50 border-2 border-gray-200 rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">&ldquo;</div>
            <p className="text-gray-700 text-lg italic mb-4">
              {locale === "en"
                ? "Slobodan helped us grow our sales significantly, stabilize our ad investment, and expand from UK into multiple European markets. He's proactive, transparent, and genuinely invested in our success."
                : "Slobodan nam je pomogao da značajno povećamo prodaju, stabilizujemo ulaganja u oglašavanje i proširimo se sa UK tržišta na više evropskih zemalja. Proaktivan je, transparentan i iskreno uložen u naš uspeh."}
            </p>
            <p className="font-heading font-semibold">Jason — Owner, Soundbox Store</p>
            <p className="text-sm text-gray-500">
              {locale === "en" ? "B2B eCommerce — Acoustic Solutions (UK)" : "B2B eCommerce — Akustična rešenja (UK)"}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 6: EXPERT INTRO — About Me */}
      {/* ============================================= */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="md:flex md:items-start md:gap-10">
            {/* Photo placeholder */}
            <div className="w-32 h-32 md:w-48 md:h-48 bg-slate-900 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-4xl mb-6 md:mb-0">
              {/* Replace with actual Image component when photo is ready */}
              SJ
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold mb-4">
                {locale === "en"
                  ? "Why Trust Your Budget To Me?"
                  : "Zašto da poverite budžet meni?"}
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  {locale === "en"
                    ? "I'm Slobodan Jelisavac — Google Ads strategist with 10+ years of experience managing campaigns for brands across UK, US, Germany, Australia, Croatia, and Serbia."
                    : "Ja sam Slobodan Jelisavac — Google Ads strateg sa 10+ godina iskustva u vođenju kampanja za brendove u UK, USA, Nemačkoj, Australiji, Hrvatskoj i Srbiji."}
                </p>
                <p>
                  {locale === "en"
                    ? "I've worked at agencies including Exposure Ninja (UK) as Head of PPC, managed €2M+ in annual ad spend, and won 3x UK Search Awards. Now I work independently — which means you always get senior-level expertise directly."
                    : "Radio sam u agencijama uključujući Exposure Ninja (UK) kao Head of PPC, upravljao sa €2M+ godišnjem ad spend-u i osvojio 3x UK Search Awards. Sada radim nezavisno — što znači da uvek dobijate senior-level ekspertizu direktno."}
                </p>
                <p className="font-semibold">
                  {locale === "en"
                    ? "I deliberately limit the number of clients so every account gets the attention it deserves."
                    : "Namerno ograničavam broj klijenata kako bi svaki nalog dobio pažnju koju zaslužuje."}
                </p>
              </div>
              {/* Authority badges */}
              <div className="flex flex-wrap gap-4 mt-6">
                <span className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  🏆 3x UK Search Awards
                </span>
                <span className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  📊 €2M+ Ad Spend
                </span>
                <span className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  🌍 {locale === "en" ? "6+ Countries" : "6+ Zemalja"}
                </span>
                <span className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  🤖 AI-Powered
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* VIDEO INTRO SECTION */}
      {/* ============================================= */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
            {locale === "en"
              ? "See how I work — in 60 seconds"
              : "Pogledajte kako radim — za 60 sekundi"}
          </h2>
          <p className="text-gray-600 mb-8 text-sm">
            {locale === "en"
              ? "A quick intro on my approach and what you can expect."
              : "Kratki uvod o mom pristupu i šta možete očekivati."}
          </p>
          {/* Video placeholder — replace with actual video embed */}
          <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden group cursor-pointer shadow-xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-slate-300 text-sm">
                {locale === "en" ? "Video coming soon" : "Video uskoro"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 7: SERVICES — Campaign Types */}
      {/* ============================================= */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {locale === "en"
                ? "Campaign Types I Manage"
                : "Tipovi kampanja koje vodim"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {locale === "en"
                ? "I choose the right combination based on your goals, industry, and budget."
                : "Biram pravu kombinaciju na osnovu vaših ciljeva, industrije i budžeta."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-900 hover:shadow-md transition-all"
              >
                <span className="text-2xl">{service.icon}</span>
                <h3 className="font-heading font-semibold mt-2 mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 8: WHAT'S INCLUDED */}
      {/* ============================================= */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {locale === "en"
                ? "Everything That's Included"
                : "Sve što je uključeno"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {locale === "en"
                ? "Complete Google Ads service — from research and setup to optimization and reporting."
                : "Kompletna Google Ads usluga — od istraživanja i setup-a do optimizacije i reportinga."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {inclusions.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100"
              >
                <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">
                  ✓
                </span>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 9: HOW IT WORKS — Process */}
      {/* ============================================= */}
      <section id="how-it-works" className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {locale === "en"
                ? "How It Works — 3 Simple Steps"
                : "Kako funkcioniše — 3 jednostavna koraka"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {locale === "en"
                ? "From first contact to measurable results — clear and transparent."
                : "Od prvog kontakta do merljivih rezultata — jasno i transparentno."}
            </p>
          </div>
          <div className="space-y-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="flex items-start gap-5 bg-white border-2 border-gray-900 rounded-xl p-6 shadow-card"
              >
                <span className="flex-shrink-0 w-14 h-14 rounded-full bg-yellow-400 text-gray-900 flex items-center justify-center text-xl font-heading font-bold">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {step.description}
                  </p>
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* MID-PAGE CTA 2 */}
      {/* ============================================= */}
      <section className="py-10 px-4 md:px-8 bg-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl font-heading font-semibold mb-4">
            {locale === "en"
              ? "Ready to stop guessing and start growing?"
              : "Spremni da prestanete sa nagađanjem i počnete sa rastom?"}
          </p>
          <a href="#contact-form" className="btn-secondary inline-block">
            {locale === "en" ? "Get Free Analysis" : "Besplatna analiza naloga"}
          </a>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 10: COMPARISON TABLE */}
      {/* ============================================= */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {locale === "en"
                ? "How I Compare"
                : "Kako se poredim sa alternativama"}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border-2 border-gray-900 rounded-xl overflow-hidden text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  {comparisonData.headers.map((header, i) => (
                    <th
                      key={header || "category"}
                      className={`px-4 py-3 text-left font-heading font-semibold ${
                        i === 1 ? "bg-yellow-500 text-gray-900" : ""
                      }`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.rows.map((row) => (
                  <tr key={row[0]} className="border-t border-gray-200">
                    {row.map((cell, i) => (
                      <td
                        key={`${row[0]}-${i}`}
                        className={`px-4 py-3 ${
                          i === 0
                            ? "font-semibold text-gray-900"
                            : i === 1
                              ? "bg-yellow-50 font-medium text-gray-900"
                              : "text-gray-600"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 11: PRICING */}
      {/* ============================================= */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {locale === "en" ? "Transparent Pricing" : "Transparentne cene"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {locale === "en"
                ? "No hidden costs, no surprises. Choose the plan that fits your needs."
                : "Bez skrivenih troškova, bez iznenađenja. Izaberite plan koji vam odgovara."}
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-lg p-6 relative flex flex-col ${
                  tier.popular
                    ? "bg-white border-2 border-yellow-400 shadow-card"
                    : tier.name.includes("Premium")
                      ? "bg-slate-900 text-white border-2 border-slate-700 shadow-card"
                      : "bg-white border-2 border-gray-900 shadow-card"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-6 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded">
                    {locale === "en" ? "Most Popular" : "Najpopularniji"}
                  </span>
                )}
                <h3 className="text-xl font-heading font-bold mb-1">
                  {tier.name}
                </h3>
                <p
                  className={`text-2xl font-heading font-bold mb-1 ${
                    tier.name.includes("Premium") ? "text-yellow-400" : "text-primary"
                  }`}
                >
                  {tier.price}
                  <span
                    className={`text-sm font-normal ${
                      tier.name.includes("Premium") ? "text-slate-400" : "text-gray-500"
                    }`}
                  >
                    {tier.period}
                  </span>
                </p>
                <p
                  className={`text-sm mb-4 ${
                    tier.name.includes("Premium") ? "text-slate-300" : "text-gray-600"
                  }`}
                >
                  {tier.subtitle}
                </p>
                <ul className="space-y-2 text-sm mb-5 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span
                        className={`flex-shrink-0 ${
                          tier.name.includes("Premium")
                            ? "text-yellow-400"
                            : "text-green-600"
                        }`}
                      >
                        ✓
                      </span>
                      <span className={tier.name.includes("Premium") ? "text-slate-300" : "text-gray-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                {tier.funkyBadge && (
                  <div className="flex items-center justify-center gap-2 mb-4 py-2 px-3 rounded-md bg-slate-800 border border-slate-600">
                    <span className="text-xs text-slate-400">
                      {locale === "en" ? "Delivered with" : "U saradnji sa"}
                    </span>
                    <span className="text-sm font-semibold text-yellow-400">Funky Enterprises</span>
                  </div>
                )}
                <a
                  href="#contact-form"
                  className={`block text-center mt-auto ${
                    tier.popular
                      ? "btn-secondary"
                      : "btn-primary"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
          {/* Cost comparison note */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              {locale === "en"
                ? "💡 Compared to hiring an in-house PPC specialist (€2,000-4,000+/mo), you get senior-level expertise at a fraction of the cost."
                : "💡 U poređenju sa zapošljavanjem in-house PPC specijaliste (€2.000-4.000+/mes), dobijate senior-level ekspertizu za deo cene."}
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 12: RISK REVERSAL / GUARANTEES */}
      {/* ============================================= */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {locale === "en" ? "Zero Risk For You" : "Nula rizika za vas"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {locale === "en"
                ? "I believe in earning your trust through results — not contracts."
                : "Verujem u zarađivanje vašeg poverenja kroz rezultate — ne kroz ugovore."}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((guarantee) => (
              <div
                key={guarantee.title}
                className="bg-white border-2 border-gray-900 rounded-xl p-6 shadow-card text-center"
              >
                <div className="text-4xl mb-4">{guarantee.icon}</div>
                <h3 className="font-heading font-bold text-lg mb-2">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600 text-sm">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 13: FAQ */}
      {/* ============================================= */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {locale === "en"
                ? "Frequently Asked Questions"
                : "Često postavljana pitanja"}
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="bg-white border-2 border-gray-200 rounded-xl group"
                open={index === 0 ? true : undefined}
              >
                <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
                  {faq.question}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2 flex-shrink-0">
                    &#9660;
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 14: FINAL CTA + CONTACT FORM */}
      {/* ============================================= */}
      <section
        id="contact-form"
        className="py-16 md:py-24 px-4 md:px-8 bg-slate-900 text-white"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {locale === "en"
                ? "Get Your Free Google Ads Analysis"
                : "Dobijte besplatnu analizu Google Ads naloga"}
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto">
              {locale === "en"
                ? "Fill out this form and I'll personally review your situation within 48 hours. No sales pitch — just honest feedback and actionable recommendations."
                : "Popunite formular i ja ću lično pregledati vašu situaciju u roku od 48 sati. Bez prodajnog pitch-a — samo iskren feedback i konkretne preporuke."}
            </p>
          </div>

          {/* Multi-Step Contact Form */}
          <MultiStepForm locale={locale} />

          {/* Trust badges below form */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-400">
            <span>🏆 3x UK Search Awards</span>
            <span>📊 €2M+ Ad Spend</span>
            <span>🌍 50+ {locale === "en" ? "Brands" : "Brendova"}</span>
            <span>🤝 {locale === "en" ? "No contracts" : "Bez ugovora"}</span>
          </div>
        </div>
      </section>

      {/* Social Proof Toast Notifications */}
      <SocialProofToast locale={locale} />

      {/* ============================================= */}
      {/* MINIMAL FOOTER */}
      {/* ============================================= */}
      <footer className="bg-gray-900 text-slate-400 py-6 px-4 md:px-8 text-center text-sm border-t border-slate-800">
        <p>
          &copy; {new Date().getFullYear()} Slobodan Jelisavac — Google Ads Strategist
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/kontakt" className="hover:text-white transition-colors">
            {locale === "en" ? "Contact" : "Kontakt"}
          </Link>
          <Link href="/o-meni" className="hover:text-white transition-colors">
            {locale === "en" ? "About" : "O meni"}
          </Link>
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
        </div>
      </footer>

      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-16 md:hidden" />
    </div>
  );
}
