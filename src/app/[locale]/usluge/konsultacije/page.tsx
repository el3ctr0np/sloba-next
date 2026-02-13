import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title:
      "Google Ads Konsultacije €80/sat | Ekspertski Savet — Slobodan Jelisavac",
    description:
      "Ekspertske Google Ads konsultacije €80/sat. Strategija, second opinion, problem solving. Fleksibilna podrška bez dugoročne obaveze. Zakažite konsultaciju."
  };
}

const reasons = [
  {
    title: "Imate interni tim, treba vam ekspertska podrška",
    description:
      "Vaš tim vodi kampanje, a treba im eksterni ekspert za teža pitanja i validaciju strategije."
  },
  {
    title: "Razmišljate o Google Ads, ali niste sigurni",
    description:
      "Želite da razumete da li je Google Ads pravi kanal pre nego što investirate."
  },
  {
    title: "Trebate second opinion",
    description:
      "Agencija predlaže nešto, a vi želite proveru pre donošenja odluke."
  },
  {
    title: "Imate specifičan problem",
    description:
      "Performance je pao ili nešto ne radi kako treba — potreban vam je debugging."
  },
  {
    title: "Želite strategiju, ne execution",
    description:
      "Vaš tim implementira, a vi trebate nekoga ko postavlja pravac i donosi strateške odluke."
  }
];

const topics = [
  {
    title: "Google Ads strategija",
    description:
      "Izbor tipova kampanja, alokacija budžeta, targeting pristup, struktura naloga."
  },
  {
    title: "Campaign review i dijagnostika",
    description:
      "Pregled performansi, identifikacija problema, brza analiza šta funkcioniše i šta ne."
  },
  {
    title: "Technical pitanja",
    description:
      "Bid strategije, PMax setup, Shopping feed optimizacija, conversion tracking."
  },
  {
    title: "Second opinion",
    description:
      "Validacija agencijske strategije, provera predloženih izmena, nezavisna procena."
  },
  {
    title: "Training i edukacija",
    description:
      "Obuka internog tima, best practices, Q&A sesije, transfer znanja."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Zakažite termin",
    description:
      "Popunite kontakt formu sa temom i izaberite format konsultacije. Dobiću vam dostupne termine."
  },
  {
    number: 2,
    title: "Pripremite materijal",
    description:
      "Pošaljite screenshot-ove, pristup nalogu (opciono) ili specificna pitanja dan pre poziva."
  },
  {
    number: 3,
    title: "Live konsultacija",
    description:
      "Video poziv gde pregledamo problem, odgovorim na pitanja i dam konkretne preporuke."
  },
  {
    number: 4,
    title: "Pisani summary",
    description:
      "Nakon sesije dobijate pisani rezime sa action items-ima i preporukama."
  }
];

const audiences = [
  {
    icon: "👨‍💼",
    title: "Marketing manageri",
    description:
      "Validacija strategije, budget justification, evaluacija agencija."
  },
  {
    icon: "🎯",
    title: "In-house PPC specijalisti",
    description:
      "Rešavanje kompleksnih problema, second opinion, optimizacija kampanja."
  },
  {
    icon: "🏢",
    title: "Agency owners",
    description:
      "Konsultacije za klijentske projekte, specialist input, white label podrška."
  },
  {
    icon: "💼",
    title: "Founders i CEOs",
    description:
      "Razumevanje Google Ads-a, evaluacija performansi, strateške odluke."
  }
];

const faqs = [
  {
    question: "Da li mogu da snimim poziv?",
    answer:
      "Da, nema problema. Poziv možete snimiti za internu upotrebu i edukaciju tima."
  },
  {
    question: "Šta ako mi treba više vremena?",
    answer:
      "Možemo produžiti sesiju ako sam dostupan ili zakazati follow-up konsultaciju za dodatna pitanja."
  },
  {
    question: "Koliko unapred treba zakazati?",
    answer:
      "Idealno 3-5 radnih dana. Za urgentne slučajeve, kontaktirajte me direktno i videćemo da li mogu da prilagodim raspored."
  },
  {
    question: "Šta ako odlučim da radimo zajedno dugotrajno?",
    answer:
      "Cena konsultacije se odbija od prvog meseca ukoliko se odlučite za upravljanje ili starter paket u roku od 30 dana."
  },
  {
    question: "Da li radite i za konkurentske agencije?",
    answer:
      "Da, radim white label konsultacije za agencije. Sve informacije ostaju strogo poverljive."
  },
  {
    question: "Koji alati koristimo tokom konsultacije?",
    answer:
      "Google Meet ili Zoom za poziv. Ako želite screen share i pregled naloga, potreban je pristup Google Ads nalogu (read-only dovoljan)."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads konsultacije",
  description:
    "Ekspertske 1-na-1 Google Ads konsultacije. Strategija, audit, second opinion i problem solving. Fleksibilna podrška bez dugoročne obaveze.",
  provider: {
    "@type": "Person",
    name: "Slobodan Jelisavac",
    url: "https://www.slobodan-jelisavac.com",
    jobTitle: "Google Ads Strategist",
    knowsAbout: [
      "Google Ads",
      "Google Ads Consulting",
      "PPC Strategy",
      "Performance Marketing"
    ]
  },
  areaServed: [
    { "@type": "Country", name: "Serbia" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Croatia" }
  ],
  serviceType: "Google Ads Consulting",
  offers: {
    "@type": "Offer",
    price: "80",
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "80",
      priceCurrency: "EUR",
      unitText: "sat"
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
      name: "Konsultacije",
      item: "https://www.slobodan-jelisavac.com/usluge/konsultacije"
    }
  ]
};

export default function KonsultacijePage() {
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
              <li>
                <Link
                  href="/usluge"
                  className="hover:text-white transition-colors"
                >
                  Usluge
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-yellow-400 font-medium">Konsultacije</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ekspertski savet kada vam treba — bez dugoročne obaveze
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Ponekad vam ne treba full management, već samo ekspertski savet.
              Google Ads konsultacije su idealne kada imate konkretna pitanja,
              trebate <strong className="text-white">second opinion</strong> ili želite{" "}
              <strong className="text-white">strategijsku pomoć</strong> bez dugoročne obaveze.
              Za <strong className="text-white">€80/sat</strong> dobijate punu pažnju i
              ekspertizu iz 10+ godina rada sa Google Ads platformom.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                Zakažite konsultaciju
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
            <strong>Google Ads konsultacije</strong> su fleksibilna alternativa full
            upravljanju. Idealne za kompanije sa internim timom koji vodi kampanje,
            ali treba im ekspertska podrška za specifična pitanja, validaciju strategije
            ili rešavanje kompleksnih problema.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Radim sa marketing managerima, in-house PPC specijalistima, agency owners-ima
            i osnivačima kompanija koji žele nezavisnu procenu, strateški savet ili
            tehničku pomoć — bez obaveze na dugotrajnu saradnju.
          </p>
        </div>
      </section>

      {/* When to choose consulting */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Kada je konsultacija pravi izbor
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Google Ads konsultacije najbolje funkcionišu u ovim situacijama.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Topics */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Teme koje možemo pokriti
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Od strategije i strukture kampanja do tehničkih pitanja i
            optimizacije performansi.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Card key={topic.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {topic.title}
              </h3>
              <p className="text-gray-600 text-sm">{topic.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pricing — 3 formats */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Formati konsultacija
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Izaberite format koji odgovara vašim potrebama — od brze sesije do
            detaljnog account review-a.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Standard Session */}
          <div className="bg-white border-2 border-yellow-400 rounded-lg p-6 shadow-card relative">
            <span className="absolute -top-3 left-6 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded">
              Najpopularniji
            </span>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Za većinu potreba
            </p>
            <h3 className="text-xl font-heading font-bold mb-1">
              Standard Session
            </h3>
            <p className="text-2xl font-heading font-bold text-primary mb-3">
              €80<span className="text-sm text-gray-500 font-normal">/sat</span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Pregled kampanja, strategijska pitanja, training sesija ili second
              opinion. Idealno za validaciju pristupa i brzu dijagnostiku problema.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                1 sat live video poziva
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Campaign review i analiza performansi
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Odgovori na strategijska pitanja
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Second opinion na predložene izmene
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Pisani summary sa preporukama
              </li>
            </ul>
            <Button href="/kontakt" variant="secondary">
              Zakažite konsultaciju
            </Button>
          </div>

          {/* Deep Dive */}
          <Card className="h-full">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
              Za kompleksne potrebe
            </p>
            <h3 className="text-xl font-heading font-bold mb-1">Deep Dive</h3>
            <p className="text-2xl font-heading font-bold text-primary mb-3">
              €150<span className="text-sm text-gray-500 font-normal">/2 sata</span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Detaljan account review, kompleksna diskusija o strategiji ili team
              training. Za situacije kada treba dublja analiza i više vremena.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                2 sata detaljnog pregleda i diskusije
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Kompletan account audit
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Strategijska roadmap za naredni period
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Team training i Q&A sesija
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 flex-shrink-0">✓</span>
                Detaljan pisani report sa action items-ima
              </li>
            </ul>
            <Button href="/kontakt" variant="primary">
              Zakažite Deep Dive
            </Button>
          </Card>

          {/* Retainer */}
          <div className="bg-slate-900 text-white border-2 border-slate-700 rounded-lg p-6 shadow-card relative">
            <p className="text-xs uppercase tracking-wider text-slate-400 mb-2">
              Za kontinuiranu podršku
            </p>
            <h3 className="text-xl font-heading font-bold mb-1">
              Ongoing Retainer
            </h3>
            <p className="text-2xl font-heading font-bold text-yellow-400 mb-3">
              na upit
            </p>
            <p className="text-slate-300 text-sm mb-4">
              Za in-house timove koji vode kampanje ali trebaju regularnu ekspertsku
              podršku. Prilagođen scope i cena prema vašim potrebama.
            </p>
            <ul className="space-y-2 text-sm text-slate-300 mb-5">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 flex-shrink-0">✓</span>
                Mesečno alocirana sata
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 flex-shrink-0">✓</span>
                Priority scheduling
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 flex-shrink-0">✓</span>
                Slack/email pristup za brza pitanja
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 flex-shrink-0">✓</span>
                Ad-hoc konsultacije po potrebi
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 flex-shrink-0">✓</span>
                Fleksibilno produženje po potrebi
              </li>
            </ul>
            <Button href="/kontakt" variant="secondary">
              Kontaktirajte me za detalje
            </Button>
          </div>
        </div>
      </Section>

      {/* Process — sequential */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Kako izgleda proces
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Od zakazivanja termina do pisanog summary-ja — jednostavan proces u 4 koraka.
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

      {/* Who uses consulting */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ko najčešće koristi konsultacije
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Google Ads konsultacije idealne su za različite profile — od
            marketara do osnivača kompanija.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => (
            <Card key={audience.title} className="h-full text-center">
              <div className="text-4xl mb-3">{audience.icon}</div>
              <h3 className="text-lg font-heading font-semibold mb-2">
                {audience.title}
              </h3>
              <p className="text-gray-600 text-sm">{audience.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ — proper accordion */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Često postavljana pitanja o konsultacijama
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
            Imate pitanje? Zakažite konsultaciju
          </h2>
          <p className="text-slate-300 mb-8">
            Popunite kontakt formu sa temom koju želite pokriti i javiću se sa
            dostupnim terminima. Bez obaveza, bez automatskih produženja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakažite konsultaciju
            </Button>
            <Link
              href="/usluge/google-ads-audit"
              className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
            >
              Ili zakažite Google Ads audit →
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
              href="/usluge/google-ads-audit"
              className="hover:text-white transition-colors underline"
            >
              Google Ads audit
            </Link>
            <Link
              href="/usluge/starter-paket"
              className="hover:text-white transition-colors underline"
            >
              Starter paket
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
