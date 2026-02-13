import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title:
      "Google Ads Audit Srbija | Profesionalna Analiza Google Ads Kampanja — Slobodan Jelisavac",
    description:
      "Profesionalni Google Ads audit otkriva gde gubite novac i kako poboljšati ROAS. Detaljna analiza kampanja sa konkretnim preporukama. Od €200."
  };
}

const problems = [
  {
    title: "Ne znate da li kampanje rade kako treba",
    description:
      "Bez dubinskog razumevanja Google Ads-a teško je proceniti potencijal za bolje rezultate i šta menjati."
  },
  {
    title: "Izveštaji koje ne razumete",
    description:
      "Dobijate metrike, ali nemate jasnu sliku šta to znači za vaš biznis i profitabilnost."
  },
  {
    title: "Troškovi rastu, rezultati stagniraju",
    description:
      "CPC raste, ROAS pada, a uzrok i rešenje nisu jasni. Kampanje rade ali nisu profitabilne."
  },
  {
    title: "Treba vam second opinion",
    description:
      "Planirate veću investiciju i želite proveru pre skaliranja budžeta ili prelaska na novu agenciju."
  }
];

const auditAreas = [
  {
    title: "Struktura naloga",
    description:
      "Analiza kampanja, ad grupa, ključnih reči, match types i negativnih reči. Identifikacija strukturnih problema koji povećavaju CPC."
  },
  {
    title: "Oglasi i ekstenzije",
    description:
      "Pregled ad copy-ja, responsive search ads varijacija, ad extensions i alignment sa landing stranicama."
  },
  {
    title: "Bid strategije i budžet",
    description:
      "Usklađenost bid strategija sa ciljevima, budget pacing, dnevni limiti i njihov uticaj na performanse."
  },
  {
    title: "Conversion tracking",
    description:
      "Provera da li se prate prave konverzije, duplikati, propusti u praćenju i attribution model."
  },
  {
    title: "Audience i targeting",
    description:
      "Remarketing liste, demografski targeting, geo targeting, targeting podešavanja i audience signali."
  },
  {
    title: "Shopping / Performance Max",
    description:
      "Feed kvalitet, asset grupe, audience signali, optimizacija proizvoda i bid strategije za eCommerce."
  }
];

const deliverables = [
  {
    title: "PDF ili Google Doc izveštaj",
    items: [
      "Prioritizovane preporuke (Quick Wins vs Long-term)",
      "Konkretni action items sa objašnjenjima",
      "Executive summary sa ključnim nalazima",
      "Screenshot-ovi problema i primerih"
    ]
  },
  {
    title: "Video walkthrough (opciono)",
    items: [
      "Snimak prolaska kroz izveštaj (15-20min)",
      "Live Q&A poziv za pitanja i nejasnoće",
      "Implementacione smernice po koracima"
    ]
  }
];

const processSteps = [
  {
    number: 1,
    title: "Pristup i kickoff poziv",
    description:
      "Dobijam read-only pristup Google Ads i GA4, plus kratak poziv o ciljevima, prioritetima i kontekstu poslovanja."
  },
  {
    number: 2,
    title: "Dubinska analiza (3-5 dana)",
    description:
      "Detaljan pregled naloga, identifikacija problema i prilika. Analiza uključuje strukturu, bidding, tracking, konkurenciju."
  },
  {
    number: 3,
    title: "Izveštaj i prezentacija",
    description:
      "Kompletan PDF izveštaj sa prioritetnim preporukama, uz opcioni video walkthrough ili live poziv za Q&A."
  }
];

const faqs = [
  {
    question: "Koliko traje kompletan audit?",
    answer:
      "Od dobijanja pristupa do finalnog izveštaja obično prođe 5-7 radnih dana. Za složenije naloge (preko €5,000 spend-a) može trajati do 10 dana."
  },
  {
    question: "Da li mi treba pristup Google Ads-u?",
    answer:
      "Da, potreban mi je read-only pristup (Viewer role). Ne menjam ništa u nalogu bez vašeg odobrenja — audit je čisto analitički."
  },
  {
    question: "Da li mogu sam da implementiram preporuke?",
    answer:
      "Apsolutno. Izveštaj je napisan tako da vi ili vaš tim možete samostalno da implementirate preporuke, korak po korak. Uključuje i prioritet po impact-u."
  },
  {
    question: "Šta ako želim da preuzmete upravljanje nakon audita?",
    answer:
      "Cena audita se odbija od prvog meseca upravljanja ako se odlučite za saradnju u roku od 30 dana. Audit mi daje kompletnu sliku vašeg naloga pre preuzimanja."
  },
  {
    question: "Radim sa agencijom - da li oni treba da znaju za audit?",
    answer:
      "To je vaša odluka. Neki klijenti koriste audit kao osnovu za razgovor sa agencijom, drugi kao pripremu za promenu. Audit je neutralan i data-driven."
  },
  {
    question: "Šta ako nemam aktivne kampanje već?",
    answer:
      "Audit je namenjen postojećim nalozima sa aktivnim kampanjama. Za nove naloge preporučujem direktno strategiju i setup kroz uslugu upravljanja."
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
  name: "Google Ads audit",
  description:
    "Profesionalni audit Google Ads naloga sa prioritetnim preporukama za poboljšanje performansi. Analiza strukture, bidding strategija, conversion tracking-a i identifikacija prilika za povećanje ROAS-a.",
  provider: {
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle: "Google Ads Strategist",
    knowsAbout: [
      "Google Ads",
      "Google Ads Audit",
      "Performance Marketing",
      "eCommerce Advertising"
    ]
  },
  areaServed: [
    { "@type": "Country", name: "Serbia" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Croatia" }
  ],
  serviceType: "Google Ads Audit",
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "200",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "200",
      priceCurrency: "EUR",
      description:
        "Standardni audit od €200. Za velike i složene naloge (preko €3,000 mesečno) cena na upit."
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
      name: "Google Ads audit",
      item: "https://www.slobodan-jelisavac.com/usluge/google-ads-audit"
    }
  ]
};

export default function GoogleAdsAuditPage() {
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

      {/* Hero — dark with breadcrumb */}
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
              <li className="text-yellow-400 font-medium">
                Google Ads audit
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Google Ads audit — otkrijte gde gubite novac
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Niste sigurni da li vaše Google Ads kampanje rade optimalno?{" "}
              <strong className="text-white">Profesionalni Google Ads audit</strong> pokazuje
              gde gubite novac, koje prilike propuštate i šta konkretno treba promeniti.
              Analiza uključuje strategijski pregled koji uzima u obzir vaš biznis model,
              marže i ciljeve — ne samo tehničke metrike.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                Zakažite Google Ads audit
              </Button>
              <Link
                href="/usluge/google-ads-upravljanje"
                className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
              >
                Ili pogledajte uslugu upravljanja →
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
              <span>10+ godina iskustva</span>
              <span>€2M+ audit-ovanih budžeta</span>
              <span>50+ brendova iz 6+ zemalja</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Intro */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            <strong>Google Ads audit</strong> je dubinska analiza vašeg naloga koja
            identifikuje probleme, propuštene prilike i konkretne akcije za poboljšanje
            performansi. Za razliku od automatizovanih alata koji samo izbacuju metrike,
            profesionalni audit uzima u obzir vaš biznis model, industriju i ciljeve.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Sa preko decenije iskustva u vođenju Google Ads kampanja za brendove
            u Srbiji, UK, Nemačkoj i Hrvatskoj, pomažem kompanijama da identifikuju
            tačno gde se troši novac bez rezultata — i kako to popraviti. Audit je
            idealan za one koji žele second opinion, pripremaju skaliranje ili traže
            razlog za loše performanse.
          </p>
        </div>
      </section>

      {/* Problems — PAS framework */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Zašto vam treba nezavisan Google Ads audit
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Većina kompanija koje dolaze do mene za audit imaju slične
            izazove sa kampanjama.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <Card key={problem.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-sm">{problem.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Audit areas */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Šta pokriva Google Ads audit
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fokus na ključne delove naloga koji direktno utiču na ROAS, CPA i
            profitabilnost kampanja.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auditAreas.map((area) => (
            <Card key={area.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm">{area.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Deliverables */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Šta dobijate nakon audita
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kompletan izveštaj sa prioritetnim preporukama i konkretnim action
            items koje možete implementirati odmah.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {deliverables.map((block) => (
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

      {/* Process — sequential vertical stack */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Kako izgleda proces audita
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Od pristupa do finalnog izveštaja — jednostavan i transparentan
            proces u 3 koraka.
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
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Cena Google Ads audita
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparentne cene zasnovane na složenosti naloga i mesečnom ad
            spend-u. Audit je <strong>low-ticket entry point</strong> — simbolično
            precenjen kako bi otvorio vrata saradnji.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Standard audit */}
          <div className="bg-white border-2 border-yellow-400 rounded-lg p-6 shadow-card relative">
            <span className="absolute -top-3 left-6 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded">
              Najpopularniji
            </span>
            <h3 className="text-xl font-heading font-bold mb-2">
              Standardni Google Ads audit
            </h3>
            <p className="text-2xl font-heading font-bold text-primary mb-3">
              ~€200
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Za naloge do ~€3,000 mesečnog spend-a. Kompletan pregled strukture,
              oglasa, bidding strategija, tracking-a, audience-a i Shopping/PMax
              kampanja. Izveštaj u PDF formatu + video walkthrough.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Analiza svih relevantnih oblasti naloga
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Prioritizovane preporuke (Quick Wins + Long-term)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                PDF izveštaj sa screenshot-ovima i action items
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Video walkthrough (15-20min)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Isporuka za 5-7 radnih dana
              </li>
            </ul>
            <Button href="/kontakt" variant="secondary" className="w-full">
              Zakažite standardni audit
            </Button>
          </div>

          {/* Custom audit */}
          <div className="bg-slate-900 text-white border-2 border-slate-700 rounded-lg p-6 shadow-card">
            <h3 className="text-xl font-heading font-bold mb-2">
              Custom audit (na upit)
            </h3>
            <p className="text-2xl font-heading font-bold text-yellow-400 mb-3">
              Cena na upit
            </p>
            <p className="text-slate-300 text-sm mb-4">
              Za velike i složene naloge sa ad spend-om preko €3,000/mesečno.
              Multi-channel audit (Google + Meta + Microsoft), dublja analiza,
              strategijske preporuke za skaliranje. Premium reporting i live
              Q&A sesija.
            </p>
            <ul className="space-y-2 text-sm text-slate-300 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 flex-shrink-0">✓</span>
                Multi-channel analiza (Google, Meta, Microsoft)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 flex-shrink-0">✓</span>
                Dublja analiza konkurencije i tržišta
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 flex-shrink-0">✓</span>
                Strategijske preporuke za skaliranje
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 flex-shrink-0">✓</span>
                Live prezentacija + Q&A sesija
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 flex-shrink-0">✓</span>
                Premium reporting sa detaljnim grafovima
              </li>
            </ul>
            <Button href="/kontakt" variant="primary" className="w-full">
              Kontaktirajte me za custom audit
            </Button>
          </div>
        </div>

        {/* Discount note */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5">
            <p className="text-sm text-gray-700 font-medium">
              <span className="font-heading font-bold text-gray-900">
                Bonus:
              </span>{" "}
              Cena audita se odbija od prvog meseca upravljanja ako se odlučite
              za saradnju u roku od 30 dana. Audit mi daje kompletnu sliku vašeg
              naloga pre preuzimanja, pa ga koristim kao osnovu za strategiju.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ — accordion */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Često postavljana pitanja o Google Ads auditu
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

      {/* Final CTA — dark */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Saznajte tačno gde gubite novac
          </h2>
          <p className="text-slate-300 mb-8">
            Zakažite Google Ads audit i dobijte jasnu sliku performansi kampanja
            sa konkretnim preporukama za poboljšanje. Bez obaveza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakažite Google Ads audit
            </Button>
            <Link
              href="/usluge/google-ads-upravljanje"
              className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
            >
              Ili pogledajte uslugu upravljanja →
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
            <Link
              href="/usluge/google-ads-upravljanje"
              className="hover:text-white transition-colors underline"
            >
              Upravljanje Google Ads nalogom
            </Link>
            <Link
              href="/blog/google-ads-audit-vodic"
              className="hover:text-white transition-colors underline"
            >
              Google Ads audit vodič
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
