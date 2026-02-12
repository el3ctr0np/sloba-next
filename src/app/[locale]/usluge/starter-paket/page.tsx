import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title:
      "Google Ads Starter Paket od €300 | Profesionalni Setup — Slobodan Jelisavac",
    description:
      "Profesionalni Google Ads setup za početnike. Kampanje koje rade od prvog dana + edukacija za samostalno vođenje. Paketi od €300."
  };
}

const idealFor = [
  "Tek počinjete sa Google Ads-om",
  "Želite profesionalnu strukturu kampanja bez mesečnog ugovora",
  "Imate vremena da sami pratite i optimizujete kampanje",
  "Želite da naučite kako Google Ads funkcioniše",
  "Planirate sami voditi kampanje nakon početnog setup-a"
];

const notFor = [
  "Nemate vremena za praćenje kampanja (potreban vam je ongoing management)",
  "Budžet za ads je preko €1,500 mesečno (bolje vam je full upravljanje)",
  "Ne želite da učite već samo rezultate",
  "Tražite agenciju koja će sve voditi umesto vas"
];

const problems = [
  {
    icon: "🤷",
    title: "Ne znate odakle da počnete",
    description:
      "Google Ads interfejs je konfuzan. Kampanje, ad grupe, ključne reči, bidding — sve izgleda komplikovano."
  },
  {
    icon: "💸",
    title: "Strah od bacanja budžeta",
    description:
      "Plaši vas da pokrenete kampanje koje će spaliti budžet bez rezultata. Čitali ste priče o neuspesima."
  },
  {
    icon: "📚",
    title: "Previše YouTube tutorijala",
    description:
      "Svaki tutorial kaže nešto različito. Ne znate šta zaista funkcioniše a šta je već zastarelo."
  },
  {
    icon: "⏰",
    title: "Agencija je preskupa",
    description:
      "€500+ mesečno za upravljanje je van budžeta, ali želite profesionalan pristup."
  }
];

const solutions = [
  {
    title: "Proven struktura kampanja",
    description:
      "Dobijate kampanje postavljene prema best practice-ima koji se dokazano pokazuju u realnim nalozima — ne prema generičkim YouTube tutorijalima."
  },
  {
    title: "Pravilno podešen tracking",
    description:
      "GTM, conversion tracking, GA4 linking — sve pravilno setup-ovano da tačno znate šta radi i šta ne."
  },
  {
    title: "Live edukacija sa proverom razumevanja",
    description:
      "45-60 minuta 1-on-1 training gde ne samo objašnjavam kako šta radi, već proveravamo da razumete i možete sami dalje."
  },
  {
    title: "30 dana podrške za pitanja",
    description:
      "Nakon setup-a dobijate email podršku za pitanja dok se ne osposobite da samostalno vodite kampanje."
  }
];

const inclusions = [
  {
    title: "Google Ads setup",
    items: [
      "Profesionalna struktura kampanja prilagođena vašem biznisu",
      "Search kampanja sa 20-50 ključnih reči",
      "Responsive Search Ads (2-3 po ad grupi)",
      "Extensions setup (sitelinks, callouts, structured snippets)",
      "Početna lista negativnih ključnih reči",
      "Basic remarketing setup"
    ]
  },
  {
    title: "Conversion tracking",
    items: [
      "Google Tag Manager setup",
      "2-3 conversion actions (purchase, lead, phone call)",
      "Google Analytics 4 integracija",
      "Provera da tracking tačno radi"
    ]
  },
  {
    title: "Edukacija i dokumentacija",
    items: [
      "1-on-1 live training session (45-60 min)",
      "Pisana dokumentacija specifična za vaš nalog",
      "Checklist za nedeljnu optimizaciju",
      "Video snimak training sesije (za podsetnik)"
    ]
  },
  {
    title: "Follow-up podrška",
    items: [
      "30 dana email podrške za pitanja",
      "Odgovori u roku od 24h radnim danima"
    ]
  }
];

const processSteps = [
  {
    number: 1,
    title: "Kickoff poziv i discovery",
    description:
      "15-30 min razgovor o vašem biznisu, ciljevima, budžetu i trenutnom stanju (ako već imate kampanje)."
  },
  {
    number: 2,
    title: "Istraživanje i planiranje",
    description:
      "Keyword research, analiza konkurencije i kreiranje strukture kampanja prilagođene vašoj industriji."
  },
  {
    number: 3,
    title: "Setup kampanja i trackinga",
    description:
      "Kreiranje kampanja, ad grupa, oglasa, extensions-a i podešavanje conversion trackinga."
  },
  {
    number: 4,
    title: "Live training session",
    description:
      "45-60 min 1-on-1 edukacija gde prolazimo kroz nalog, objašnjavam šta je urađeno i kako dalje optimizovati."
  },
  {
    number: 5,
    title: "Kampanje live + 30 dana podrške",
    description:
      "Kampanje su aktivne, vi pratite performanse. Dostupan sam za pitanja putem email-a narednih mesec dana."
  }
];

const results = [
  {
    value: "€300",
    label: "od — ulazna tačka u Google Ads sa profesionalnim pristupom"
  },
  { value: "45-60min", label: "live edukacije prilagođene vašem nalogu" },
  { value: "30 dana", label: "email podrške nakon setup-a" }
];

const faqs = [
  {
    question: "Da li mi treba prethodno iskustvo sa Google Ads-om?",
    answer:
      "Ne. Starter paket je dizajniran za potpune početnike. Training sesija pokriva osnove potrebne za vođenje kampanja, a pisana dokumentacija ostaje uz vas kao referenca."
  },
  {
    question: "Koliki budžet za oglase treba da imam?",
    answer:
      "Preporučujem minimum €500 mesečno za ad spend. Idealno je €800-1,000 za početak kako bi Google-ov algoritam imao dovoljno podataka za učenje. Starter paket je jednokratna cena — ovo je vaš ad spend budžet."
  },
  {
    question: "Da li mogu kasnije da nadogradim na full management?",
    answer:
      "Da. Mnogi klijenti počnu sa Starter paketom, a kada kampanje porastu ili im zatreba više vremena, pređu na ongoing upravljanje. Setup koji radim ostaje — samo nadograđujemo."
  },
  {
    question: "Koliko vremena nedeljno treba za održavanje kampanja?",
    answer:
      "Za basic maintenance računajte na 30-60 minuta nedeljno. To uključuje proveru performansi, dodavanje negativnih ključnih reči i minor bid adjustments."
  },
  {
    question: "Šta ako mi kampanje ne donesu rezultate?",
    answer:
      "Google Ads nije magija — rezultati zavise od proizvoda, ponude, cena, konkurencije i budžeta. Moj zadatak je da postavim strukturu koja eliminiše najčešće greške i daje vam najbolje šanse za uspeh. Training sesija pokriva šta da pratite i kako da optimizujete."
  },
  {
    question: "Da li radite i eCommerce kampanje?",
    answer:
      "Da. eCommerce Starter paket (€700) uključuje Search + Shopping kampanju, basic feed review i preporuke za optimizaciju feed-a."
  },
  {
    question: "Koliko traje proces od početka do live kampanja?",
    answer:
      "Obično 5-7 radnih dana od kickoff poziva do live kampanja. Zavisi od toga koliko brzo možete da obezbedite pristup nalogu i dodatne informacije ako zatreba."
  },
  {
    question: "Šta ako već imam kampanje koje rade loše?",
    answer:
      "Počinjem sa quick auditom postojećeg stanja. Ako struktura može da se popravi, radim optimizaciju. Ako je bolje krenuti iznova, kreiramo nove kampanje sa pravilnom strukturom. U oba slučaja dobijate čist setup i razumevanje šta dalje."
  }
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Slobodan Jelisavac",
  url: "https://www.slobodan-jelisavac.com",
  jobTitle: "Google Ads Strategist"
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads Starter paket",
  description:
    "Starter paket za početnike sa profesionalnim Google Ads setup-om, conversion trackingom i edukacijom za samostalno vođenje kampanja. Tri paketa: Basic €300, Standard €500, eCommerce €700.",
  provider: {
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle: "Google Ads Strategist",
    knowsAbout: [
      "Google Ads",
      "Google Ads Setup",
      "Conversion Tracking",
      "Campaign Structure"
    ]
  },
  areaServed: [
    { "@type": "Country", name: "Serbia" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Croatia" }
  ],
  serviceType: "Google Ads Setup and Training",
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "300",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "300",
      priceCurrency: "EUR",
      unitText: "jednokratno",
      description: "Cene počinju od €300 za Basic Starter paket"
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Početna",
      item: "https://www.slobodan-jelisavac.com/sr"
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
      name: "Starter paket",
      item: "https://www.slobodan-jelisavac.com/sr/usluge/starter-paket"
    }
  ]
};

export default function StarterPaketPage() {
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
                  Početna
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/usluge"
                  className="hover:text-white transition-colors"
                >
                  Usluge
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-yellow-400 font-medium">Starter paket</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Google Ads Starter paket — profesionalni setup za samostalno vođenje
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Želite da pokrenete <strong className="text-white">Google Ads</strong> ali nemate budžet za mesečno
              upravljanje? Starter paket donosi profesionalnu strukturu kampanja, pravilno
              podešen tracking i edukaciju za samostalno vođenje. Umesto učenja metodom
              pokušaja i greške, dobijate <strong className="text-white">proven setup koji funkcioniše od prvog dana</strong>.
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
                Zatražite Starter paket
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
              <span>10+ godina iskustva</span>
              <span>3x UK Search Awards</span>
              <span>50+ setup-ovanih kampanja</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Intro */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            <strong>Google Ads Starter paket</strong> je dizajniran za vlasnike preduzeća i
            marketare koji žele da pokrenu Google oglašavanje profesionalno — bez mesečnih
            ugovora za upravljanje. Dobijate kompletno podešene kampanje, conversion tracking
            i edukaciju za samostalno vođenje.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Ovo je vaša ulazna tačka u Google Ads. Umesto da gubite vreme i budžet na
            eksperimentisanje, počinjete sa strukturom koja se dokazala u stvarnim
            kampanjama — od lokalne uslužne delatnosti do eCommerce prodavnica.
          </p>
        </div>
      </section>

      {/* Problem — PAS framework */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Prepoznajete li se u ovome?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Većina ljudi koji krenu sami sa Google Ads-om nailazi na iste
            prepreke. Ne gubite vreme i budžet — krenite odmah sa pravilnim
            pristupom.
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
            Šta dobijate sa Starter paketom
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proven pristup setup-u kampanja koji eliminiše najčešće greške
            početnika i postavlja vas na put uspeha.
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
            Šta je uključeno u Starter paket
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sve što vam treba da pokrenete Google Ads na pravi način — od setup-a
            kampanja do edukacije i podrške.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
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

      {/* Who is this for — ICP targeting */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Da li je Starter paket za vas?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Starter paket najbolje funkcioniše za određene profile klijenata.
            Proverite da li odgovarate pre nego što zatražite.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white border-2 border-gray-900 rounded-xl p-6 shadow-card">
            <h3 className="font-heading font-bold text-lg mb-4">
              Starter paket je idealan ako
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {idealFor.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-600 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border-2 border-gray-900 rounded-xl p-6 shadow-card">
            <h3 className="font-heading font-bold text-lg mb-4">
              Starter paket nije za vas ako
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {notFor.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Ako vam treba ongoing upravljanje, pogledajte{" "}
            <Link
              href="/usluge/google-ads-upravljanje"
              className="text-primary underline"
            >
              Google Ads upravljanje →
            </Link>
          </p>
        </div>
      </Section>

      {/* Process — sequential, not grid */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Kako izgleda proces Starter paketa
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Od prvog poziva do live kampanja — transparentan proces u 5 koraka.
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
            Izaberite paket koji vam odgovara
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparentne cene bez skrivenih troškova. Sve opcije uključuju
            kompletno podešene kampanje, tracking i edukaciju.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Basic Starter */}
          <Card className="h-full">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Za lokalni biznis
            </p>
            <h3 className="text-xl font-heading font-bold mb-1">
              Basic Starter
            </h3>
            <p className="text-2xl font-heading font-bold text-primary mb-3">
              €300<span className="text-sm text-gray-500 font-normal"> jednokratno</span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Za jednostavne usluge, lokalni biznis i manja preduzeća koja žele
              jednostavan setup bez komplikovanja.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                1 Search kampanja (do 3 ad grupe)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Do 30 ključnih reči
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Basic conversion tracking
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                45-min training session
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                2 nedelje email support
              </li>
            </ul>
            <Button href="/kontakt" variant="primary">
              Zatražite Basic paket
            </Button>
          </Card>

          {/* Standard Starter */}
          <div className="bg-white border-2 border-yellow-400 rounded-lg p-6 shadow-card relative">
            <span className="absolute -top-3 left-6 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded">
              Najpopularniji
            </span>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Za većinu malih biznisa
            </p>
            <h3 className="text-xl font-heading font-bold mb-1">
              Standard Starter
            </h3>
            <p className="text-2xl font-heading font-bold text-primary mb-3">
              €500<span className="text-sm text-gray-500 font-normal"> jednokratno</span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Za većinu malih biznisa i lead generation. Profesionalan setup sa
              svim potrebnim komponentama za uspešan start.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                2 Search kampanje (do 6 ad grupa)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Do 50 ključnih reči
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Basic remarketing setup
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Full conversion tracking + GA4 linking
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                60-min training session
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                30 dana email support
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Kompletna dokumentacija
              </li>
            </ul>
            <Button href="/kontakt" variant="secondary">
              Zatražite Standard paket
            </Button>
          </div>

          {/* eCommerce Starter */}
          <Card className="h-full">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Za online prodavnice
            </p>
            <h3 className="text-xl font-heading font-bold mb-1">
              eCommerce Starter
            </h3>
            <p className="text-2xl font-heading font-bold text-primary mb-3">
              €700<span className="text-sm text-gray-500 font-normal"> jednokratno</span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Za male online prodavnice koje žele profesionalan setup Search +
              Shopping kampanja sa osnovnom feed optimizacijom.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Search + Shopping kampanja (basic setup)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Basic feed review i preporuke
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Remarketing setup
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                eCommerce tracking (purchase, add to cart)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                90-min training (2 sesije)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                30 dana email support
              </li>
            </ul>
            <Button href="/kontakt" variant="primary">
              Zatražite eCommerce paket
            </Button>
          </Card>
        </div>
      </Section>

      {/* What happens after */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Šta kada kampanje porastu?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Starter paket vas osposobljava za samostalno vođenje. Kada zatreba
            pomoć ili kampanje prerastu vaše vreme, dostupne su sledeće opcije.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="h-full">
            <h3 className="text-lg font-heading font-semibold mb-3">
              Nemate vremena za optimizaciju?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Pređite na mesečno upravljanje gde preuzimam sve optimizacije,
              reporting i skaliranje.
            </p>
            <Link
              href="/usluge/google-ads-upravljanje"
              className="text-primary font-semibold text-sm"
            >
              Google Ads upravljanje →
            </Link>
          </Card>
          <Card className="h-full">
            <h3 className="text-lg font-heading font-semibold mb-3">
              Imate pitanja nakon support perioda?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Zakažite 1-on-1 konsultaciju za specifična pitanja, audit ili
              pomoć oko optimizacija.
            </p>
            <Link
              href="/usluge/konsultacije"
              className="text-primary font-semibold text-sm"
            >
              1-on-1 konsultacije →
            </Link>
          </Card>
          <Card className="h-full">
            <h3 className="text-lg font-heading font-semibold mb-3">
              Kampanje rastu i treba skaliranje?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Razgovarajmo o ongoing partnership-u — setup ostaje, samo
              nadograđujemo strategiju.
            </p>
            <Link href="/kontakt" className="text-primary font-semibold text-sm">
              Razgovarajmo o partnerstvu →
            </Link>
          </Card>
        </div>
      </Section>

      {/* FAQ — proper accordion */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Često postavljana pitanja o Starter paketu
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
            Spremni da pokrenete Google Ads na pravi način?
          </h2>
          <p className="text-slate-300 mb-8">
            Zakažite besplatnu konsultaciju i proverimo koji Starter paket vam
            odgovara. Bez obaveza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zatražite Starter paket
            </Button>
            <Link
              href="/usluge/konsultacije"
              className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
            >
              Ili zakažite konsultaciju →
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
            <Link
              href="/usluge/google-ads-upravljanje"
              className="hover:text-white transition-colors underline"
            >
              Google Ads upravljanje
            </Link>
            <Link
              href="/usluge/konsultacije"
              className="hover:text-white transition-colors underline"
            >
              1-on-1 konsultacije
            </Link>
            <Link
              href="/blog/koliko-kosta-google-ads"
              className="hover:text-white transition-colors underline"
            >
              Koliko košta Google Ads?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
