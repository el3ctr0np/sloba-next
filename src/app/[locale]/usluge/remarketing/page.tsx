import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title:
      "Remarketing Kampanje Srbija | Google, Meta, Pinterest — Slobodan Jelisavac",
    description:
      "Profesionalne remarketing kampanje koje vraćaju posetioce i povećavaju konverzije. Google Display, YouTube, RLSA, Meta, Pinterest. Zakažite konsultaciju."
  };
}

const reasons = [
  {
    title: "Kupovina nije linearna",
    description:
      "Većina kupaca istražuje više opcija pre odluke. Bez prisustva u tom procesu gubite priliku."
  },
  {
    title: "Pažnja je kratka",
    description:
      "Korisnik je bio zainteresovan, ali se nešto desilo i zaboravio je vašu ponudu."
  },
  {
    title: "Poverenje zahteva vreme",
    description:
      "Za veće kupovine ili B2B usluge potreban je veći broj kontakt tačaka pre odluke."
  },
  {
    title: "Bez remarketinga plaćate dva puta",
    description:
      "Doveli ste posetioca, a ako se ne vrati — taj trošak akvizicije je izgubljen."
  }
];

const remarketingTypes = [
  {
    title: "Display remarketing (Google Ads)",
    description:
      "Baneri koji prate posetioce na sajtovima u Google Display mreži."
  },
  {
    title: "Video remarketing (YouTube)",
    description:
      "Video oglasi za posetioce sajta, idealni za edukaciju i izgradnju poverenja."
  },
  {
    title: "Search remarketing (RLSA)",
    description:
      "Prilagođeni Search oglasi za warm audience uz agresivnije bidovanje."
  },
  {
    title: "Dinamički remarketing",
    description:
      "Personalizovani oglasi sa proizvodima koje je korisnik gledao na vašem sajtu."
  },
  {
    title: "Meta remarketing (Facebook i Instagram)",
    description:
      "Dodatni reach izvan Google ekosistema, posebno za vizuelne proizvode."
  },
  {
    title: "Pinterest remarketing",
    description:
      "Za fashion, home decor, food i lifestyle brendove gde Pinterest ima snažnu publiku."
  }
];

const inclusions = [
  {
    title: "Audience setup",
    items: [
      "Remarketing tag implementacija",
      "Segmentacija po ponašanju korisnika",
      "Membership duration strategija"
    ]
  },
  {
    title: "Kreiranje kampanja",
    items: [
      "Kampanje po kanalima (Google, Meta, Pinterest)",
      "Prilagođeni formati oglasa",
      "Frequency capping strategija"
    ]
  },
  {
    title: "Optimizacija",
    items: [
      "Frequency capping podešavanje",
      "Placement exclusions",
      "Bid optimizacija po segmentima"
    ]
  },
  {
    title: "Reporting",
    items: [
      "Segment performance analiza",
      "Assisted conversions praćenje",
      "View-through conversions"
    ]
  }
];

const idealClients = [
  "Imate postojeći saobraćaj na sajtu (minimum 1.000 posetilaca mesečno)",
  "Sales cycle nije instant — korisnici istražuju pre kupovine",
  "Želite da maksimizujete ROI iz postojećih kampanja",
  "Imate budžet za remarketing od minimum €300/mesečno"
];

const bestFor = [
  "eCommerce (dinamički remarketing)",
  "B2B sa dužim sales cycle-om",
  "Veće kupovine gde ljudi istražuju pre odluke"
];

const faqs = [
  {
    question: "Da li je remarketing previše napadan?",
    answer:
      "Može biti ako se radi pogrešno. Uz frequency capping i relevantne poruke, remarketing je koristan i nenametljiv. Preporučujem 3-5 prikazivanja dnevno."
  },
  {
    question: "Koliko dugo targetirati ljude?",
    answer:
      "Zavisi od sales cycle-a. eCommerce: 7-30 dana. B2B sa dužim ciklusom: do 90 dana. Podešavam membership duration prema vašem biznisu."
  },
  {
    question: "Mogu li raditi remarketing sa malim budžetom?",
    answer:
      "Da. Remarketing je odličan za manje budžete jer targetira warm audience sa visokim potencijalom konverzije. Od €300/mesečno možete videti rezultate."
  },
  {
    question: "Da li remarketing radi za B2B?",
    answer:
      "Apsolutno. B2B sales cycle je duži, pa remarketing pomaže da ostanete top of mind tokom celokupnog procesa donošenja odluke."
  },
  {
    question: "Šta su view-through konverzije?",
    answer:
      "Konverzije gde je korisnik video remarketing oglas, nije kliknuo, ali je kasnije došao na sajt i konvertovao. Važan pokazatelj uticaja remarketinga."
  },
  {
    question: "Koja je razlika između Google i Meta remarketinga?",
    answer:
      "Google pokriva Display, YouTube i Gmail, dok Meta pokriva Facebook i Instagram. Kombinacija oba kanala daje najbolji reach i učestalost kontakta."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Remarketing kampanje",
  description:
    "Profesionalne remarketing kampanje koje vraćaju posetioce kroz Google, Meta i Pinterest kanale za povećanje konverzija.",
  provider: {
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle: "Google Ads Strategist",
    knowsAbout: [
      "Google Ads",
      "Remarketing",
      "Display Advertising",
      "RLSA"
    ]
  },
  areaServed: [
    { "@type": "Country", name: "Serbia" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Croatia" }
  ],
  serviceType: "Remarketing Campaigns"
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
      name: "Remarketing",
      item: "https://www.slobodan-jelisavac.com/usluge/remarketing"
    }
  ]
};

export default function RemarketingPage() {
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

      {/* Hero — dark */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
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
              <li className="text-yellow-400 font-medium">Remarketing</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Remarketing kampanje — vratite posetioce koji su otišli bez
              kupovine
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Samo 2-3% posetilaca konvertuje pri prvoj poseti. Bez{" "}
              <strong className="text-white">remarketing kampanja</strong>,
              ostalih 97% odlazi i možda se nikad ne vrati. Remarketing vam
              omogućava da pratite posetioce na sajtovima, YouTube-u, Gmail-u,
              Facebooku, Instagramu i Pinterest-u — i da ih podsetite zašto su
              došli na vaš sajt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                Zakažite besplatnu konsultaciju
              </Button>
              <Button href="/usluge/google-ads-upravljanje" variant="primary">
                Google Ads upravljanje
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
              <span>10+ godina iskustva</span>
              <span>Google, Meta, Pinterest</span>
              <span>97% posetilaca se vraća</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Intro */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            <strong>Remarketing</strong> je jedna od najefikasnijih strategija u
            digital marketingu — targetirate ljude koji su već pokazali
            interesovanje za vaš proizvod ili uslugu. Umesto hladnog saobraćaja,
            komunicirate sa warm audience koja vas poznaje.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Sa pravilnom segmentacijom, relevantnim porukama i frequency
            capping-om, remarketing kampanje značajno povećavaju konverzije uz
            niži CPA od prospecting kampanja.
          </p>
        </div>
      </section>

      {/* Why remarketing */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Zašto gubite potencijalne kupce
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bez remarketing kampanja, većina vašeg saobraćaja odlazi bez konverzije.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <Card key={reason.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Types of remarketing */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Tipovi remarketing kampanja koje vodim
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Biram pravi kanal i format na osnovu vašeg biznisa, publike i ciljeva.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remarketingTypes.map((item) => (
            <Card key={item.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* What's included */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Šta je uključeno u remarketing uslugu
          </h2>
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

      {/* Ideal clients */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Za koga je remarketing usluga
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-2 text-gray-600">
              {idealClients.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-sm text-gray-500 mt-6">
              Posebno efikasno za: {bestFor.join(", ")}.
            </div>
          </Card>
        </div>
      </Section>

      {/* FAQ — accordion */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Često postavljana pitanja o remarketingu
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

      {/* Dark CTA */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Spremni da vratite izgubljene posetioce?
          </h2>
          <p className="text-slate-300 mb-8">
            Zakažite konsultaciju i razgovarajmo kako remarketing može povećati
            konverzije iz vašeg postojećeg saobraćaja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakažite besplatnu konsultaciju
            </Button>
            <Link
              href="/case-studies"
              className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
            >
              Pogledajte rezultate →
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
            <Link
              href="/usluge/youtube-oglasi"
              className="hover:text-white transition-colors underline"
            >
              YouTube oglasi
            </Link>
            <Link
              href="/usluge/performance-marketing"
              className="hover:text-white transition-colors underline"
            >
              Performance Marketing
            </Link>
            <Link
              href="/blog/remarketing-vodic"
              className="hover:text-white transition-colors underline"
            >
              Remarketing vodič
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
