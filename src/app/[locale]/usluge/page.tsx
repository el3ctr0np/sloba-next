import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Section, Card, Button } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title: "Google Ads Usluge Srbija | Performance Marketing — Slobodan Jelisavac",
    description:
      "Profesionalne Google Ads usluge za eCommerce i B2B: upravljanje, audit, Shopping, PMax, remarketing. 10+ godina iskustva, 180%+ poboljšanje ROAS-a."
  };
}

const coreServices = [
  {
    title: "Google Ads upravljanje",
    href: "/usluge/google-ads-upravljanje",
    desc: "Strategija, setup i svakodnevna optimizacija naloga sa fokusom na ROAS i realan rast prihoda.",
    badge: "Najpopularnija"
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
  }
];

const industryServices = [
  {
    title: "Google Ads za eCommerce",
    href: "/usluge/google-ads-za-ecommerce",
    desc: "Shopping, Performance Max i full-funnel pristup za online prodavnice koje žele veći prihod i bolji ROAS.",
    icon: "🛒"
  },
  {
    title: "Google Ads za B2B",
    href: "/usluge/google-ads-za-b2b",
    desc: "Lead generation strategije, account-based targeting i kvalifikacija leadova za B2B kompanije.",
    icon: "🏢"
  },
  {
    title: "Google Ads za SaaS",
    href: "/usluge/google-ads-za-saas",
    desc: "Akvizicija trial korisnika i demo zahteva uz kontrolu CAC-a za SaaS platforme.",
    icon: "💻"
  }
];

const entryPoints = [
  {
    title: "Starter paket",
    price: "od €300",
    desc: "Profesionalni setup kampanja, tracking i edukacija za samostalno vođenje. Idealno za firme koje tek počinju sa Google Ads.",
    href: "/usluge/starter-paket",
    cta: "Saznajte više"
  },
  {
    title: "Google Ads audit",
    price: "od €200",
    desc: "Nezavisna analiza naloga sa konkretnim preporukama. Bez obaveze za dalju saradnju.",
    href: "/usluge/google-ads-audit",
    cta: "Saznajte više"
  },
  {
    title: "1-na-1 konsultacije",
    price: "€80/sat",
    desc: "Ekspertski savet za konkretna pitanja, second opinion ili strategijsku pomoć bez dugoročne obaveze.",
    href: "/usluge/konsultacije",
    cta: "Saznajte više"
  }
];

const results = [
  { value: "180%+", label: "Prosečno poboljšanje ROAS-a" },
  { value: "−35%", label: "Smanjenje CPA" },
  { value: "€2M+", label: "Upravljanog ad spend-a godišnje" },
  { value: "10+", label: "Godina iskustva" }
];

const processSteps = [
  {
    number: 1,
    title: "Besplatna konsultacija",
    description:
      "30-minutni poziv gde razumem vaše ciljeve, trenutno stanje i izazove."
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

const faqs = [
  {
    q: "Koja je minimalna investicija za saradnju?",
    a: "Upravljanje Google Ads nalogom počinje od €350/mesečno. Za manje budžete preporučujem Starter paket (od €300) ili jednokratne konsultacije (€80/sat)."
  },
  {
    q: "Da li radite samo sa kompanijama iz Srbije?",
    a: "Ne — radim sa klijentima iz cele Evrope, uključujući UK, Nemačku, Hrvatsku i Srbiju. Komunikacija na srpskom ili engleskom jeziku."
  },
  {
    q: "Koliko traje minimalna saradnja?",
    a: "Preporučujem minimum 3 meseca za upravljanje kampanjama. Za audit i konsultacije nema minimalnog perioda — to su jednokratne usluge."
  },
  {
    q: "Kako izgleda mesečni reporting?",
    a: "Svakog meseca dobijate izveštaj sa ključnim metrikama, sprovedenim akcijama i preporukama za sledeći period, plus live poziv za diskusiju rezultata."
  },
  {
    q: "Da li mogu da vidim primere vašeg rada?",
    a: "Da — pogledajte case studies sekciju sa konkretnim rezultatima za eCommerce, B2B i lokalne kampanje."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads usluge — Slobodan Jelisavac",
  description:
    "Profesionalne Google Ads usluge za eCommerce i B2B kompanije: upravljanje, audit, Shopping, Performance Max, remarketing, YouTube, konsultacije.",
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
    }
  ]
};

export default function ServicesPage() {
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
                  Početna
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-yellow-400 font-medium">Usluge</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Google Ads usluge za eCommerce i B2B kompanije
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Profesionalno <strong className="text-white">Google Ads upravljanje</strong>,
              audit i konsultacije za kompanije koje žele merljive rezultate iz
              plaćenog oglašavanja. Od strategije do svakodnevne optimizacije —
              sve što vam treba za stabilan rast prihoda.
            </p>

            {/* Results */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
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
                Zakažite besplatnu konsultaciju
              </Button>
              <Button href="/case-studies" variant="primary">
                Pogledajte rezultate
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
              <span>10+ godina iskustva</span>
              <span>3x UK Search Awards</span>
              <span>50+ brendova iz 6+ zemalja</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Intro */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            <strong>Google Ads</strong> je najbrži način da dođete do kupaca koji
            aktivno traže vaše proizvode ili usluge. Ali bez pravilne strategije,
            strukture kampanja i kontinuirane optimizacije — lako se pretvori u
            nepotrebni trošak.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Sa preko decenije iskustva u vođenju kampanja za brendove u Srbiji,
            UK, Nemačkoj i Hrvatskoj, nudim kompletne Google Ads usluge
            prilagođene vašim ciljevima — bilo da ste eCommerce koji traži bolji
            ROAS ili B2B firma koja generiše kvalifikovane leadove.
          </p>
        </div>
      </section>

      {/* Core services */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Google Ads usluge po tipu kampanje
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Svaki tip kampanje zahteva specifičan pristup. Biram pravu
            kombinaciju na osnovu vaših ciljeva, industrije i budžeta.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service) => (
            <Link key={service.href} href={service.href} className="group">
              <Card className="h-full relative">
                {service.badge && (
                  <span className="absolute -top-3 left-6 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded">
                    {service.badge}
                  </span>
                )}
                <h3 className="font-heading font-bold text-xl mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
                <span className="mt-4 inline-block text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Saznajte više →
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Industry services */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Specijalizovane Google Ads usluge po industriji
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strategije prilagođene kompleksnosti prodajnog procesa i specifičnim
            ciljevima vaše industrije.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {industryServices.map((service) => (
            <Link key={service.href} href={service.href} className="group">
              <Card className="h-full">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-heading font-bold text-xl mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
                <span className="mt-4 inline-block text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Detalji usluge →
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
            <span className="absolute -top-3 left-6 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded">
              Premium tim
            </span>
            <div className="md:flex items-center gap-10">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-slate-400 mb-2">
                  Multi-channel pristup
                </p>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                  Performance Marketing
                </h2>
                <p className="text-sm text-slate-400 mb-4 italic">
                  Powered by Funky Enterprises
                </p>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Za tržišne lidere i brendove koji žele da to postanu. Kompletni
                  performance tim — Google Ads + Meta + SEO + CRO. Nastupam kao
                  partner Funky Enterprises tima.
                </p>
                <ul className="space-y-2 text-sm text-slate-300 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 flex-shrink-0">✓</span>
                    Omnichannel strategija i egzekucija
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 flex-shrink-0">✓</span>
                    Senior-led tim eksperata
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 flex-shrink-0">✓</span>
                    Merljiv rast kroz sve kanale
                  </li>
                </ul>
                <a
                  href="https://www.funky.enterprises/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-block text-center"
                >
                  Saznajte više o Funky Enterprises
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Entry points — kako početi */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Kako da počnete sa Google Ads
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bez obzira na budžet i iskustvo, postoji pravi ulazni put za vas.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {entryPoints.map((entry) => (
            <Card key={entry.title} className="h-full flex flex-col">
              <h3 className="text-xl font-heading font-bold mb-1">
                {entry.title}
              </h3>
              <p className="text-lg font-heading font-bold text-primary mb-3">
                {entry.price}
              </p>
              <p className="text-gray-600 text-sm mb-5 flex-1">
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
      </Section>

      {/* Process */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Jednostavan proces u 4 koraka
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Od prvog poziva do merljivih rezultata — transparentan proces
            bez iznenađenja.
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

      {/* FAQ — proper accordion */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Često postavljana pitanja o Google Ads uslugama
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
              <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
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
            Spremni da poboljšate rezultate iz Google Ads?
          </h2>
          <p className="text-slate-300 mb-8">
            Zakažite besplatnu 30-minutnu konsultaciju i proverimo da li ima
            smisla da radimo zajedno. Bez obaveza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakažite besplatnu konsultaciju
            </Button>
            <Link
              href="/case-studies"
              className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
            >
              Pogledajte case studies →
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
            <Link
              href="/blog/koliko-kosta-google-ads"
              className="hover:text-white transition-colors underline"
            >
              Koliko košta Google Ads?
            </Link>
            <Link
              href="/blog"
              className="hover:text-white transition-colors underline"
            >
              Google Ads vodič za početnike
            </Link>
            <Link
              href="/blog/google-ads-greske"
              className="hover:text-white transition-colors underline"
            >
              Najčešće Google Ads greške
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
