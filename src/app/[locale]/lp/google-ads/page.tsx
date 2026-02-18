import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { MultiStepForm } from "./MultiStepForm";
import { AnimatedCounter } from "./AnimatedCounter";
import { SocialProofToast } from "./SocialProofToast";
import {
  Banknote,
  Frown,
  Clock,
  BarChart3,
  Target,
  Search,
  Microscope,
  Building2,
  Zap,
  TrendingUp,
  ShoppingCart,
  Rocket,
  Play,
  Monitor,
  Handshake,
  DoorOpen,
  MessageCircle,
  Trophy,
  Globe,
  Bot,
  Check,
  Lightbulb,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string }>;
};

// noindex, nofollow - ovo je paid landing page, ne indeksiramo
export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Google Ads ekspert | Oglašavanje koje donosi rezultate — Slobodan Jelisavac",
    description:
      "Google kampanje za eCommerce i B2B koje donose kupce, ne samo klikove. Decenija iskustva, 50+ brendova. Zakažite besplatan razgovor.",
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title:
        "Google Ads ekspert | Oglašavanje koje donosi rezultate — Slobodan Jelisavac",
      description:
        "Google kampanje za eCommerce i B2B koje donose kupce, ne samo klikove. Decenija iskustva, 50+ brendova. Zakažite besplatan razgovor.",
      url: "https://www.slobodan-jelisavac.com/sr/lp/google-ads",
      siteName: "Slobodan Jelisavac",
      locale: "sr_RS",
      type: "website",
    },
  };
}

export default async function GoogleAdsLandingPage({ params }: Props) {
  const { locale } = await params;

  // =============================================
  // CONTENT DATA — SR ONLY
  // =============================================

  const heroStats = [
    { value: "180%+", label: "Prosečno poboljšanje ROAS-a" },
    { value: "-35%", label: "Smanjenje CPA" },
    { value: "50+", label: "Brendova u portfoliju" },
  ];

  const iconProps = { size: 28, strokeWidth: 1.5 } as const;

  const problems: { icon: ReactNode; title: string; description: string }[] = [
    {
      icon: <Banknote {...iconProps} className="text-gray-900" />,
      title: "Budžet nestaje bez rezultata",
      description:
        "Ulažete u Google Ads svaki mesec, ali konverzije izostaju ili su preskupe. Nemate jasnu sliku šta funkcioniše a šta ne.",
    },
    {
      icon: <Frown {...iconProps} className="text-gray-900" />,
      title: "Loša iskustva sa agencijama",
      description:
        "Agencije su podešavale kampanje bez stvarne strategije. Dobijali ste generičke reportove, ali nikada niste videli pravi ROI.",
    },
    {
      icon: <Clock {...iconProps} className="text-gray-900" />,
      title: "Nemate vremena da se time bavite",
      description:
        "Google Ads zahteva svakodnevno praćenje i optimizaciju. Vi imate biznis koji vodite — ne možete ceo dan da sedite u ads dashboard-u.",
    },
    {
      icon: <BarChart3 {...iconProps} className="text-gray-900" />,
      title: "Rast je stao",
      description:
        "Kampanje rade solidno, ali ne znate kako da ih skalirate a da troškovi ne izmaknu kontroli.",
    },
    {
      icon: <Target {...iconProps} className="text-gray-900" />,
      title: "Niste sigurni da li Google Ads uopšte radi za vas",
      description:
        "Čuli ste priče o uspehu ali i o bacanju novca. Treba vam ekspertsko mišljenje pre nego što uložite više.",
    },
    {
      icon: <Search {...iconProps} className="text-gray-900" />,
      title: "Konkurencija vas nadmašuje",
      description:
        "Konkurenti se pojavljuju iznad vas u pretrazi i kradu vaše potencijalne kupce.",
    },
  ];

  const solutions: { icon: ReactNode; title: string; description: string }[] = [
    {
      icon: <Microscope {...iconProps} className="text-gray-900" />,
      title: "Dubinska analiza pre bilo kakve potrošnje",
      description:
        "Razumem vaš biznis model, marže, idealne kupce i konkurenciju — pre nego što potrošim i jedan dinar na oglase.",
    },
    {
      icon: <Building2 {...iconProps} className="text-gray-900" />,
      title: "Struktura kampanja po meri",
      description:
        "Kampanje dizajnirane specifično za vaše ciljeve. Bilo da je fokus ROAS, CPA, kvalitet leadova ili brand awareness — svaka struktura ima svrhu.",
    },
    {
      icon: <Zap {...iconProps} className="text-gray-900" />,
      title: "Proaktivna svakodnevna optimizacija",
      description:
        "Pratim signale i reagujem pre nego što utiču na performanse. Svakodnevna analiza, ne mesečne provere. Problemi se rešavaju pre nego što vas koštaju.",
    },
    {
      icon: <TrendingUp {...iconProps} className="text-gray-900" />,
      title: "Transparentni rezultati koje možete proveriti",
      description:
        "Tačno znate gde ide svaki EUR i šta dobijate zauzvrat. Jasni dashboard-ovi, pošteni reportovi, realni brojevi.",
    },
  ];

  const processSteps = [
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

  const services: { icon: ReactNode; title: string; description: string }[] = [
    {
      title: "Search kampanje",
      icon: <Search {...iconProps} className="text-gray-900" />,
      description:
        "Targetirajte korisnike koji aktivno pretražuju vaše proizvode ili usluge na Google-u.",
    },
    {
      title: "Shopping kampanje",
      icon: <ShoppingCart {...iconProps} className="text-gray-900" />,
      description:
        "Optimizacija feed-a i bid strategije za maksimalan eCommerce ROAS.",
    },
    {
      title: "Performance Max",
      icon: <Rocket {...iconProps} className="text-gray-900" />,
      description:
        "Strateški PMax uz kontrolu, jasne audience signale i transparentne rezultate.",
    },
    {
      title: "Remarketing",
      icon: <Target {...iconProps} className="text-gray-900" />,
      description:
        "Vratite posetioce koji su otišli bez konverzije i zatvorite prodaju.",
    },
    {
      title: "YouTube oglasi",
      icon: <Play {...iconProps} className="text-gray-900" />,
      description: "Video oglašavanje za awareness i direct response.",
    },
    {
      title: "Display mreža",
      icon: <Monitor {...iconProps} className="text-gray-900" />,
      description:
        "Vizuelni oglasi na milionima sajtova za izgradnju brend svesti.",
    },
  ];

  const inclusions = [
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

  const comparisonData = {
    headers: ["", "Slobodan J.", "Tipična agencija", "Zaposleni", "Sam/a"],
    rows: [
      [
        "Mesečna cena",
        "Od €350",
        "€300-500+",
        "€1.000+ plata",
        "Besplatno (vaše vreme)",
      ],
      [
        "Iskustvo",
        "Senior — decenija rada, 50+ brendova",
        "Junior koji vežba na vašim nalozima",
        "Varira zavisno od iskustva",
        "Kriva učenja",
      ],
      [
        "Vreme odgovora",
        "U roku od 24h",
        "Oko nedelju dana",
        "Odmah vam je pri ruci",
        "N/A",
      ],
      [
        "Strategija",
        "Senior znanje, custom i prema podacima",
        "Template pristupi — juniori uče",
        "Ograničena perspektiva",
        "Pokušaj-greška",
      ],
      [
        "PPC i AI alati",
        "Napredni — custom skripte, AI monitoring",
        "Retko ili osnovni alati",
        "Skupo za jedan nalog",
        "Samo besplatni osnovi",
      ],
      [
        "Ugovori",
        "Mesec za mesec",
        "Mesec za mesec",
        "Ugovor o radu",
        "N/A",
      ],
      [
        "Direktan pristup",
        "Uvek — pričate direktno sa mnom",
        "Junior ili treće lice",
        "Da — vaš je zaposleni",
        "N/A",
      ],
    ],
  };

  const pricingTiers = [
    {
      name: "Starter paket",
      price: "Od €350",
      period: "/mes",
      subtitle:
        "Sve što vam treba za početak — pravilna struktura, ključne reči i optimizacija koja donosi rezultate.",
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
      price: "Od €500",
      period: "/mes",
      subtitle:
        "Za brendove i kompanije koje već planiraju veće budžete. Fokus na dugoročne, stabilne rezultate i pametno skaliranje.",
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
      subtitle:
        "Za tržišne lidere — ili one koji to žele da postanu. Funky Enterprises donosi senior tim kroz sve digitalne kanale i gradi jedinstveni revenue engine za vaš brend.",
      features: [
        "Paid Search + Paid Social + SEO + CRO",
        "Demand generation i pipeline arhitektura",
        "Senior operatori — ne junior account manageri",
        "Kompletne marketing operacije pod jednim krovom",
        "Strateško usklađivanje svih kanala",
        "Merljiv rast fokusiran na prihod",
      ],
      popular: false,
      cta: "Zatražite Premium ponudu",
      funkyBadge: true,
    },
  ];

  const guarantees: { icon: ReactNode; title: string; description: string }[] = [
    {
      icon: <Handshake {...iconProps} className="text-gray-900" />,
      title: "Bez dugoročnih ugovora",
      description:
        "Mesec za mesec saradnja. Rezultati me zadržavaju, ne ugovori. Otkažite u bilo kom trenutku sa 30 dana najave.",
    },
    {
      icon: <DoorOpen {...iconProps} className="text-gray-900" />,
      title: "Izlazna garancija",
      description:
        "Bez obaveza, bez penala. Ako niste zadovoljni — odlazite sa kompletnim nalogom, kampanjama i svim što smo izgradili. Sve je vaše.",
    },
    {
      icon: <MessageCircle {...iconProps} className="text-gray-900" />,
      title: "Direktan pristup ekspertu — uvek",
      description:
        "Uvek pričate direktno sa mnom. Bez juniora, bez posrednika. Direktan Slack/email pristup sa odgovorom u roku od 24h.",
    },
  ];

  const faqs = [
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
        "U agenciji obično dobijete junior account managera. Sa mnom dobijate deceniju direktnog iskustva na svakom nalogu. Bez slojeva, bez delegiranja juniorima, bez generičkih playbook-ova.",
    },
    {
      question: "Zašto ste skuplji od nekih agencija?",
      answer:
        "Zato što ne dobijate juniora koji uči na vašem nalogu. Dobijate senior stratega sa decenijom iskustva, custom skripte, AI monitoring i direktan pristup — bez posrednika. Kvalitet košta manje od lošeg rada koji troši vaš budžet.",
    },
    {
      question: "Da li radite sa malim firmama?",
      answer:
        "Apsolutno. Google oglašavanje je idealno za male firme jer plaćate samo kada neko klikne. Ključ je pravilna struktura, pametno targetiranje i eliminacija nepotrebnih troškova.",
    },
    {
      question: "Sa kojim industrijama radite?",
      answer:
        "Specijalizujem se za eCommerce (Shopping, PMax) i B2B lead generation (Search). Radio sam sa audio opremom, auto delovima, printing-om, streaming servisima, AI platformama, zdravstvom i još mnogo toga.",
    },
    {
      question: "Da li postoji minimalan period saradnje?",
      answer:
        "Preporučujem minimum 3 meseca za pravilno testiranje i optimizaciju, ali nema lock-in ugovora. Saradnja je mesec za mesec. Ako želite da prestanete, samo 30 dana najave.",
    },
    {
      question: "Šta se dešava na besplatnom razgovoru?",
      answer:
        "Pregledam vašu trenutnu Google Ads situaciju (ili vaše tržište ako ste novi), identifikujem najveće prilike i probleme, i dajem vam iskren feedback o tome šta je realno. Bez prodajnog pitch-a — samo podaci.",
    },
  ];

  const clientLogos = [
    { name: "Soundbox Store", src: "/client-logos/soundbox-store.svg", width: 160, height: 56, context: "UK · Akustična rešenja" },
    { name: "Chatislav", src: "/client-logos/chatislav.svg", width: 48, height: 45, context: "Srbija · AI platforma" },
    { name: "Pickbox", src: "/client-logos/pickbox-hrvatska-logo.svg.webp", width: 120, height: 40, context: "Hrvatska · Video On Demand" },
    { name: "DC Gaj", src: "/client-logos/dc-gaj.png", width: 120, height: 40, context: "Beograd · Poliklinika" },
    { name: "Chelleon", src: null, width: 0, height: 0, context: "UK · Skincare eCommerce" },
    { name: "Best at Printing", src: "/client-logos/bestatprinting.co.uk-logo9.webp", width: 120, height: 40, context: "UK · Custom Printing" },
    { name: "Merrythought", src: "/client-logos/merrythought.co.uk-logo9.webp", width: 120, height: 40, context: "UK · Heritage Teddy Bears" },
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
          Zakažite besplatan razgovor
        </a>
      </div>

      {/* ============================================= */}
      {/* MINI HEADER — Logo + CTA only */}
      {/* ============================================= */}
      <header className="bg-white border-b border-gray-100 py-3 px-4 md:px-8 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="font-heading font-bold text-lg text-gray-900"
          >
            Slobodan Jelisavac
          </Link>
          <a
            href="#contact-form"
            className="btn-primary text-sm hidden md:inline-block"
          >
            Zakažite besplatan razgovor
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
              Google Ads ekspert — decenija iskustva u digitalnom oglašavanju
            </p>

            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-300 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400"></span>
              </span>
              Primam samo 2 nova klijenta mesečno
            </div>

            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Google oglašavanje koje{" "}
              <span className="text-yellow-400">zapravo donosi rezultate</span>
              {" "}— a ne samo klikove
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Vodim Google kampanje za eCommerce i B2B kompanije koje žele
              predvidljiv rast. Decenija iskustva, 50+ brendova iz 6 zemalja, i
              pristup koji se zasniva na podacima — ne na nagađanju. Vi se
              fokusirate na biznis, ja se brinem da vam Google dovodi kupce.
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
                Zakažite besplatan razgovor
              </a>
              <a
                href="#how-it-works"
                className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
              >
                Pogledajte kako funkcioniše ↓
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Trophy size={14} strokeWidth={1.5} className="text-slate-400" />
                3x UK Search Awards
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe size={14} strokeWidth={1.5} className="text-slate-400" />
                50+ brendova, 6+ zemalja
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Handshake size={14} strokeWidth={1.5} className="text-slate-400" />
                Bez dugoročnih ugovora
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECTION 2: CLIENT LOGOS — Scrolling Social Proof */}
      {/* ============================================= */}
      <section className="py-10 md:py-12 bg-gray-50 border-b border-gray-100 overflow-hidden">
        <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wider px-4">
          Brendovi koji su mi ukazali poverenje — UK, EU, Srbija, Ex-Yu
        </p>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          {/* Scrolling track */}
          <div className="flex" style={{ animation: "marquee 30s linear infinite" }}>
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex-shrink-0 flex items-center gap-4 px-6 md:px-8 border-r border-gray-200 last:border-r-0"
              >
                {/* Logo or text fallback */}
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                  {logo.src ? (
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={logo.width}
                      height={logo.height}
                      className="max-h-10 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-xl font-heading font-bold text-gray-800">
                      {logo.name.split(" ").map((w) => w[0]).join("")}
                    </span>
                  )}
                </div>
                {/* Name + context */}
                <div className="whitespace-nowrap">
                  <p className="font-heading font-semibold text-sm text-gray-800">
                    {logo.name}
                  </p>
                  <p className="text-xs text-gray-500">{logo.context}</p>
                </div>
              </div>
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
              Problemi koje ignorišete — a koštaju vas svaki dan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Većina biznisa sa kojima radim dolazi mi sa istim frustracijama.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="bg-white border-2 border-gray-900 rounded-lg p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:translate-x-[5px] hover:translate-y-[5px]"
              >
                <div className="mb-3">{problem.icon}</div>
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
            Ako ste se prepoznali u bilo čemu od ovoga — mogu da pomognem.
          </p>
          <a href="#contact-form" className="btn-secondary inline-block">
            Zakažite besplatan razgovor
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
              Kako izgleda saradnja sa mnom
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strateški pristup kampanjama, ne samo podešavanja. Svaka odluka je
              zasnovana na podacima.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="bg-white border-2 border-gray-900 rounded-lg p-6 shadow-card"
              >
                <div className="mb-3">{solution.icon}</div>
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
              Realni rezultati, realni klijenti
            </h2>
          </div>

          {/* Case study card — Soundbox Store */}
          <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-xl p-8 md:p-12 mb-10">
            <p className="text-yellow-400 text-sm font-semibold mb-2 uppercase tracking-wider">
              Case Study — Soundbox Store
            </p>
            <h3 className="text-2xl font-heading font-bold mb-4">
              Od nule do £170k ad spend-a — i širenje na celu Evropu
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-sm text-slate-400 mb-1">Početak</p>
                <p className="text-2xl font-heading font-bold text-red-400">
                  £0
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Bez Google Ads prisustva
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Skalirano na</p>
                <p className="text-2xl font-heading font-bold text-green-400">
                  £170k+
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Mesečni ad spend
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Ekspanzija</p>
                <p className="text-2xl font-heading font-bold text-yellow-400">
                  UK → EU
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Rast na više tržišta
                </p>
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              UK B2B eCommerce u visoko specijalizovanoj niši akustičnih rešenja
              sa prosečnim narudžbinama u hiljadama funti. Google Ads izgrađen od
              nule — Search, Shopping i Performance Max. Stabilizovan rast
              prihoda u UK, zatim ekspanzija na EU tržišta sa lokalizovanim
              kampanjama.
            </p>
          </div>

          {/* Testimonial */}
          <div className="max-w-3xl mx-auto bg-gray-50 border-2 border-gray-200 rounded-xl p-8 text-center mb-12">
            <div className="text-4xl mb-4">&ldquo;</div>
            <p className="text-gray-700 text-lg italic mb-4">
              Slobodan nam je pomogao da značajno povećamo prodaju, stabilizujemo
              ulaganja u oglašavanje i proširimo se sa UK tržišta na više
              evropskih zemalja. Proaktivan je, transparentan i iskreno uložen u
              naš uspeh.
            </p>
            <p className="font-heading font-semibold">
              Jason — Owner, Soundbox Store
            </p>
            <p className="text-sm text-gray-500">
              B2B eCommerce — Akustična rešenja (UK)
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
                Zašto da poverite budžet meni?
              </h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  Ja sam Slobodan Jelisavac — Google Ads strateg sa decenijom
                  iskustva u vođenju kampanja za brendove u UK, USA, Nemačkoj,
                  Australiji, Hrvatskoj i Srbiji.
                </p>
                <p>
                  Radio sam u agencijama uključujući Exposure Ninja (UK) kao Head
                  of PPC, upravljao sa €2M+ godišnjim ad spend-om i osvojio 3x
                  UK Search Awards. Sada radim nezavisno — što znači da uvek
                  dobijate senior-level ekspertizu direktno.
                </p>
                <p className="font-semibold">
                  Namerno ograničavam broj klijenata kako bi svaki nalog dobio
                  pažnju koju zaslužuje.
                </p>
              </div>
              {/* Authority badges */}
              <div className="flex flex-wrap gap-4 mt-6">
                <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  <Trophy size={16} strokeWidth={1.5} className="text-gray-500" />
                  3x UK Search Awards
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  <BarChart3 size={16} strokeWidth={1.5} className="text-gray-500" />
                  €2M+ Ad Spend
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  <Globe size={16} strokeWidth={1.5} className="text-gray-500" />
                  6+ Zemalja
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  <Bot size={16} strokeWidth={1.5} className="text-gray-500" />
                  AI-Powered
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
            Pogledajte kako radim — za 60 sekundi
          </h2>
          <p className="text-gray-600 mb-8 text-sm">
            Kratki uvod o mom pristupu i šta možete očekivati.
          </p>
          {/* Video placeholder — replace with actual video embed */}
          <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden group cursor-pointer shadow-xl">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <svg
                  className="w-8 h-8 text-gray-900 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-slate-300 text-sm">Video uskoro</p>
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
              Tipovi kampanja koje vodim
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Biram pravu kombinaciju na osnovu vaših ciljeva, industrije i
              budžeta.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:border-gray-900 hover:shadow-md transition-all"
              >
                <div className="mb-1">{service.icon}</div>
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
              Sve što je uključeno
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kompletna Google Ads usluga — od istraživanja i setup-a do
              optimizacije i reportinga.
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
      <section
        id="how-it-works"
        className="py-16 md:py-24 px-4 md:px-8 bg-white"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Kako funkcioniše — 3 jednostavna koraka
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Od prvog kontakta do merljivih rezultata — jasno i transparentno.
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
            Spremni da prestanete sa nagađanjem i počnete sa rastom?
          </p>
          <a href="#contact-form" className="btn-secondary inline-block">
            Zakažite besplatan razgovor
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
              Kako se poredim sa alternativama
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
              Transparentne cene
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bez skrivenih troškova, bez iznenađenja. Izaberite plan koji vam
              odgovara.
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
                    Najpopularniji
                  </span>
                )}
                <h3 className="text-xl font-heading font-bold mb-1">
                  {tier.name}
                </h3>
                <p
                  className={`text-2xl font-heading font-bold mb-1 ${
                    tier.name.includes("Premium")
                      ? "text-yellow-400"
                      : "text-primary"
                  }`}
                >
                  {tier.price}
                  <span
                    className={`text-sm font-normal ${
                      tier.name.includes("Premium")
                        ? "text-slate-400"
                        : "text-gray-500"
                    }`}
                  >
                    {tier.period}
                  </span>
                </p>
                <p
                  className={`text-sm mb-4 ${
                    tier.name.includes("Premium")
                      ? "text-slate-300"
                      : "text-gray-600"
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
                      <span
                        className={
                          tier.name.includes("Premium")
                            ? "text-slate-300"
                            : "text-gray-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                {tier.funkyBadge && (
                  <div className="flex items-center justify-center gap-2 mb-4 py-2 px-3 rounded-md bg-slate-800 border border-slate-600">
                    <span className="text-xs text-slate-400">Isporučuje</span>
                    <span className="text-sm font-semibold text-yellow-400">
                      Funky Enterprises
                    </span>
                  </div>
                )}
                <a
                  href="#contact-form"
                  className={`block text-center mt-auto ${
                    tier.popular ? "btn-secondary" : "btn-primary"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
          {/* Cost comparison note */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 inline-flex items-center gap-1.5 justify-center w-full">
              <Lightbulb size={16} strokeWidth={1.5} className="text-gray-400 flex-shrink-0" />
              U poređenju sa zapošljavanjem in-house PPC specijaliste
              (€2.000-4.000+/mes), dobijate senior-level ekspertizu za deo cene.
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
              Nula rizika za vas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Verujem u zarađivanje vašeg poverenja kroz rezultate — ne kroz
              ugovore.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((guarantee) => (
              <div
                key={guarantee.title}
                className="bg-white border-2 border-gray-900 rounded-xl p-6 shadow-card text-center"
              >
                <div className="mb-4">{guarantee.icon}</div>
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
              Često postavljana pitanja
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
              Zakažite besplatan razgovor
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto">
              Popunite formular i ja ću lično pregledati vašu situaciju u roku
              od 48 sati. Bez prodajnog pitch-a — samo iskren feedback i
              konkretne preporuke.
            </p>
          </div>

          {/* Multi-Step Contact Form */}
          <MultiStepForm locale={locale} />

          {/* Trust badges below form */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Trophy size={14} strokeWidth={1.5} className="text-slate-400" />
              3x UK Search Awards
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BarChart3 size={14} strokeWidth={1.5} className="text-slate-400" />
              €2M+ Ad Spend
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Globe size={14} strokeWidth={1.5} className="text-slate-400" />
              50+ Brendova
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Handshake size={14} strokeWidth={1.5} className="text-slate-400" />
              Bez ugovora
            </span>
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
          &copy; {new Date().getFullYear()} Slobodan Jelisavac — Google Ads
          Strategist
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/kontakt" className="hover:text-white transition-colors">
            Kontakt
          </Link>
          <Link href="/o-meni" className="hover:text-white transition-colors">
            O meni
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
