import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";
import { RelatedGlossaryTerms } from "@/components/RelatedGlossaryTerms";
import { buildMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "Google Ads Consulting | Price from $200/hr — Slobodan Jelisavac"
      : "Google Ads Konsultacije - Cena od €150/sat | Slobodan Jelisavac",
    description: isEn
      ? "Google Ads consulting from $200/hr (3h package $600), directly with me — Slobodan Jelisavac. Strategic advice, second opinions, and problem-solving for your PPC campaigns. No long-term commitment."
      : "Google Ads konsultacije direktno sa mnom - Slobodanom Jelisavcem, cena od €150/sat (paket 3h €450). Strategija, second opinion, problem solving. Bez dugoročne obaveze. Zakažite konsultaciju.",
    locale,
    path: "/services/consultations",
    srPath: "/usluge/konsultacije",
  });
}

export default async function KonsultacijePage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";

  const ctaLabel = isEn ? "Book a free 20-minute call" : "Zakažite besplatnih 20 minuta";

  const problems = isEn
    ? [
        {
          title: "You need a second opinion before you commit",
          description:
            "An agency proposed something, or your team wants to change direction, and you want independent verification before the budget moves.",
        },
        {
          title: "Something is broken and you don't know why",
          description:
            "Performance dropped, a change didn't do what you expected, and you need someone to find the actual cause, not guess at it.",
        },
        {
          title: "You have people who execute, not who decide",
          description:
            "Your team runs the account day to day, but nobody on it is setting the strategy or catching the mistakes before they cost money.",
        },
      ]
    : [
        {
          title: "Trebate drugo mišljenje pre nego što potrošite budžet",
          description:
            "Agencija je predložila nešto, ili vaš tim želi da menja pravac, a vi želite nezavisnu proveru pre nego što se budžet pomeri.",
        },
        {
          title: "Nešto ne radi kako treba, a ne znate zašto",
          description:
            "Performanse su pale ili izmena nije dala očekivano, a treba vam neko ko će naći pravi uzrok, ne nagađati.",
        },
        {
          title: "Imate ljude koji izvršavaju, ne koji odlučuju",
          description:
            "Vaš tim svakodnevno vodi nalog, ali niko u njemu ne postavlja strategiju niti hvata greške pre nego što koštaju.",
        },
      ];

  const benefits = isEn
    ? [
        "An independent assessment of your current strategy or an agency's proposal, without a sales motive on either side.",
        "A direct answer to the technical question you're stuck on — bidding, PMax setup, feed structure, or tracking.",
        "A written summary with concrete action items after every session, not just verbal advice you have to remember.",
        "A conversation with someone who has run accounts across 50+ brands, not a generic playbook.",
      ]
    : [
        "Nezavisnu procenu vaše strategije ili agencijskog predloga, bez prodajnog interesa ni na jednoj strani.",
        "Direktan odgovor na tehničko pitanje u kom ste zaglavljeni - bidding, PMax setup, struktura feeda ili tracking.",
        "Pisani rezime sa konkretnim koracima posle svake sesije, ne samo usmeni savet koji morate da pamtite.",
        "Razgovor sa nekim ko je vodio naloge kroz 50+ brendova, ne generički priručnik.",
      ];

  const faqs = isEn
    ? [
        {
          question: "How much does Google Ads consulting cost?",
          answer:
            "A Standard Session is $200/hr, or $600 for a 3-hour package. Deep Dive (2 hours plus prep, detailed account review) is $600. No hidden fees — you pay only for the time booked, no retainer required.",
        },
        {
          question: "Is there a minimum ad spend budget for consulting?",
          answer:
            "No minimum ad spend is required. Consulting is priced per session, not tied to your budget, so it works whether you're spending $500/month or $50,000/month.",
        },
        {
          question: "Consulting or full management — which do I need?",
          answer:
            "Consulting is for situations where your team (or you) already runs the account and needs expert input on demand. If nobody runs the account day to day and you need someone to take over execution, that's Google Ads management, not consulting.",
        },
        {
          question: "What's the difference between a consultant and an agency?",
          answer:
            "An agency takes over full execution monthly. A consultant gives you expert input on demand — strategy, second opinion, or problem-solving — while your team stays in control of day-to-day execution.",
        },
        {
          question: "What if I decide to work together long-term?",
          answer:
            "The consultation fee is deducted from the first month if you decide on management or a Kickstart project within 30 days.",
        },
        {
          question: "How far in advance should I book?",
          answer:
            "Ideally 3-5 business days. For urgent cases, contact me directly and we'll see if I can adjust my schedule.",
        },
      ]
    : [
        {
          question: "Koliko koštaju Google Ads konsultacije?",
          answer:
            "Standardna sesija je €150/sat, ili €450 za paket od 3 sata. Deep Dive (2 sata plus priprema, detaljan account review) je €450. Nema skrivenih troškova, plaćate samo zakazano vreme, bez mesečnog ugovora.",
        },
        {
          question: "Da li postoji minimalni budžet za oglašavanje da bi konsultacija imala smisla?",
          answer:
            "Ne, nema minimalnog ad spend budžeta. Cena je po sesiji, ne vezuje se za vaš budžet, pa funkcioniše bez obzira da li trošite €300 ili €30.000 mesečno.",
        },
        {
          question: "Konsultacije ili vođenje kampanja - šta mi treba?",
          answer:
            "Konsultacije su za situacije kada vaš tim (ili vi) već vodi nalog, a treba vam ekspertski input po potrebi. Ako niko svakodnevno ne vodi nalog i tražite nekoga ko preuzima kompletno izvršenje, to je Google Ads upravljanje, ne konsultacija.",
        },
        {
          question: "Koja je razlika između konsultanta i agencije?",
          answer:
            "Agencija preuzima kompletnu izvedbu mesečno. Konsultant daje ekspertski input po potrebi - strategiju, second opinion ili rešavanje problema - dok vaš tim zadržava kontrolu nad svakodnevnim izvršenjem.",
        },
        {
          question: "Šta ako odlučim da radimo zajedno dugoročno?",
          answer:
            "Cena konsultacije se odbija od prvog meseca ukoliko se odlučite za upravljanje ili Kickstart projekat u roku od 30 dana.",
        },
        {
          question: "Koliko unapred treba zakazati termin?",
          answer:
            "Idealno 3-5 radnih dana. Za urgentne slučajeve, kontaktirajte me direktno i videćemo da li mogu da prilagodim raspored.",
        },
      ];

  const serviceSchema = isEn ? {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Ads Consulting",
    description:
      "Expert 1-on-1 Google Ads consulting. Strategy, audit, second opinion and problem solving. Flexible support without long-term commitment.",
    provider: {
      "@type": "Person",
      name: "Slobodan Jelisavac",
      url: "https://www.slobodan-jelisavac.com",
      jobTitle: "Google Ads Consultant",
      knowsAbout: [
        "Google Ads",
        "Google Ads Consulting",
        "PPC Strategy",
        "Performance Marketing"
      ]
    },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Germany" }
    ],
    serviceType: "Google Ads Consulting",
    offers: {
      "@type": "Offer",
      price: "200",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "200",
        priceCurrency: "USD",
        unitText: "hour"
      }
    }
  } : {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Ads konsultacije",
    description:
      "Ekspertske 1-na-1 Google Ads konsultacije. Strategija, audit, second opinion i problem solving. Fleksibilna podrška bez dugoročne obaveze.",
    provider: {
      "@type": "Person",
      name: "Slobodan Jelisavac",
      url: "https://www.slobodan-jelisavac.com",
      jobTitle: "Google Ads Konsultant",
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
      price: "150",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "150",
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
        name: locale === "en" ? "Home" : "Početna",
        item: "https://www.slobodan-jelisavac.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: locale === "en" ? "Services" : "Usluge",
        item: locale === "en" ? "https://www.slobodan-jelisavac.com/en/services" : "https://www.slobodan-jelisavac.com/sr/usluge"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: locale === "en" ? "Consultations" : "Konsultacije",
        item: locale === "en" ? "https://www.slobodan-jelisavac.com/en/services/consultations" : "https://www.slobodan-jelisavac.com/sr/usluge/konsultacije"
      }
    ]
  };

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

      {/* 1. Hero — kome je namenjeno, šta se dešava kad me angažujete, jedan dokaz */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {isEn ? "Home" : "Početna"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/usluge" className="hover:text-white transition-colors">
                  {isEn ? "Services" : "Usluge"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-accent font-medium">
                {isEn ? "Consultations" : "Konsultacije"}
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                {isEn
                  ? "For teams that already run campaigns and need a second opinion"
                  : "Za timove koji već vode kampanje, a treba im drugo mišljenje"}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-4 leading-relaxed">
                {isEn ? (
                  <>
                    Consulting is for marketing managers, in-house PPC specialists and
                    agency owners who already run Google Ads but need independent input
                    before a decision. You book a call, send materials ahead of time,
                    and leave the session with a written summary and concrete next steps.
                  </>
                ) : (
                  <>
                    Konsultacije su za marketing managere, in-house PPC specijaliste i
                    vlasnike agencija koji već vode Google Ads, a treba im nezavisan
                    input pre odluke. Zakažete poziv, pošaljete materijal unapred, a
                    sesiju napuštate sa pisanim rezimeom i konkretnim sledećim koracima.
                  </>
                )}
              </p>
              <p className="text-base text-slate-400 mb-8">
                {isEn
                  ? "I've run Google Ads accounts for 10+ years, including 3 international agencies, and carry 3x UK Search Awards recognition for the work."
                  : "Google Ads radim 10+ godina, uključujući 3 inostrane agencije, i nosim 3x UK Search Awards priznanje za taj rad."}
              </p>

              <Button href="/kontakt" variant="secondary">
                {ctaLabel}
              </Button>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/foto/slobodan-jelisavac-google-ads-konsultacije.webp"
                  alt={isEn ? "Slobodan Jelisavac during a consultation" : "Slobodan Jelisavac na konsultacijama"}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem u tri stavke */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "The situations I get called into" : "Situacije zbog kojih me ljudi zovu"}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <Card key={problem.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-base">{problem.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 3. Šta dobijate, numerisano */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "What you get out of a session" : "Šta dobijate iz sesije"}
          </h2>
        </div>
        <ol className="max-w-3xl mx-auto space-y-4">
          {benefits.map((benefit, index) => (
            <li key={benefit} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-card">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold font-heading">
                {index + 1}
              </span>
              <p className="text-gray-700 text-base leading-relaxed">{benefit}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 4. Dokaz — slučaj iz prakse, NDA-usklađen */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            {isEn ? "A case from practice" : "Jedan slučaj iz prakse"}
          </h2>
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10">
            <p className="text-lg md:text-xl leading-relaxed">
              {isEn ? (
                <>
                  A UK Shopping client has worked with me for <strong className="text-accent">2+ years</strong>.
                  The account currently holds a <strong className="text-accent">1.78x POAS</strong> and
                  generates <strong className="text-accent">six-figure revenue (GBP)</strong>. No client
                  name or absolute revenue figure is shared here — that's the NDA I keep on every account.
                </>
              ) : (
                <>
                  Jedan UK Shopping klijent radi sa mnom već <strong className="text-accent">2+ godine</strong>.
                  Nalog trenutno drži <strong className="text-accent">POAS 1.78x</strong> i generiše{" "}
                  <strong className="text-accent">šestocifren prihod (GBP)</strong>. Ime klijenta ni
                  apsolutnu cifru prihoda ovde ne otkrivam - to je NDA koji držim na svakom nalogu.
                </>
              )}
            </p>
          </div>
        </div>
      </Section>

      {/* 5. Cena i proces, vidljivo */}
      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Price and process" : "Cena i proces"}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          <div className="bg-white border-2 border-accent rounded-lg p-6 shadow-card relative">
            <span className="absolute -top-3 left-6 bg-accent text-gray-900 text-xs font-bold px-3 py-1 rounded-md">
              {isEn ? "Most Popular" : "Najpopularniji"}
            </span>
            <h3 className="text-xl font-heading font-bold mb-1">Standard Session</h3>
            <p className="text-2xl font-heading font-bold text-primary mb-3">
              {isEn ? "$200" : "€150"}
              <span className="text-sm text-gray-500 font-normal">/{isEn ? "hr" : "sat"}</span>
              <span className="block text-sm text-gray-500 font-normal mt-0.5">
                {isEn ? "3h package — $600" : "paket 3h: €450"}
              </span>
            </p>
            <p className="text-gray-600 text-base">
              {isEn
                ? "1-hour live call: campaign review, strategic questions, second opinion. Written summary after."
                : "1 sat live poziva: campaign review, strategijska pitanja, second opinion. Pisani rezime posle."}
            </p>
          </div>

          <Card className="h-full">
            <h3 className="text-xl font-heading font-bold mb-1">Deep Dive</h3>
            <p className="text-2xl font-heading font-bold text-primary mb-3">
              {isEn ? "$600" : "€450"}
              <span className="text-sm text-gray-500 font-normal">
                /{isEn ? "2 hours + prep" : "2 sata + priprema"}
              </span>
            </p>
            <p className="text-gray-600 text-base">
              {isEn
                ? "Detailed account review, complex strategy discussion, or team training. Session recording included."
                : "Detaljan account review, kompleksna diskusija o strategiji ili team training. Snimak sesije uključen."}
            </p>
          </Card>
        </div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-sm">
          {isEn
            ? "Need ongoing, allocated hours instead of a single session? Ongoing Advisory is scoped and priced on request — ask when you book."
            : "Treba vam kontinuirana podrška umesto jedne sesije? Ongoing Advisory se dogovara i cenu formiramo na upit - pitajte kad zakazujete."}
        </p>

        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-4 mb-10">
          {(isEn
            ? [
                { n: 1, title: "Book", description: "Fill out the contact form with your topic. I send available time slots." },
                { n: 2, title: "Prepare", description: "Send screenshots, access, or questions a day before the call." },
                { n: 3, title: "Call + summary", description: "We work through the problem live, then you get a written summary." },
              ]
            : [
                { n: 1, title: "Zakazivanje", description: "Popunite kontakt formu sa temom. Šaljem dostupne termine." },
                { n: 2, title: "Priprema", description: "Pošaljete screenshot-ove, pristup ili pitanja dan pre poziva." },
                { n: 3, title: "Poziv + rezime", description: "Rešavamo problem uživo, a posle dobijate pisani rezime." },
              ]
          ).map((step) => (
            <div key={step.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-card text-center">
              <span className="inline-flex w-8 h-8 rounded-full bg-slate-900 text-white items-center justify-center text-sm font-bold font-heading mb-3">
                {step.n}
              </span>
              <h3 className="font-heading font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/kontakt" variant="primary">
            {ctaLabel}
          </Button>
        </div>
      </Section>

      <RelatedGlossaryTerms
        slugs={["google-ads", "quality-score", "poas", "roas", "conversion"]}
        locale={locale}
      />

      {/* 6. Pitanja koja se stvarno postavljaju */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {isEn ? "Questions people actually ask" : "Pitanja koja se stvarno postavljaju"}
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
              <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* 7. Final CTA — isti poziv treći put */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            {isEn ? "Have a question? Book a consultation" : "Imate pitanje? Zakažite konsultaciju"}
          </h2>
          <p className="text-slate-300 mb-8">
            {isEn
              ? "Fill out the contact form with the topic you want to cover and I'll get back with available time slots. No commitment, no automatic renewals."
              : "Popunite kontakt formu sa temom koju želite pokriti i javiću se sa dostupnim terminima. Bez obaveza, bez automatskih produženja."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              {ctaLabel}
            </Button>
            <Link
              href="/usluge/google-ads-audit"
              className="text-slate-300 hover:text-white underline text-sm self-center transition-colors"
            >
              {isEn ? "Or book a Google Ads audit →" : "Ili zakažite Google Ads audit →"}
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
            <Link href="/usluge/google-ads-upravljanje" className="hover:text-white transition-colors underline">
              {isEn ? "Google Ads Management" : "Google Ads upravljanje"}
            </Link>
            <Link href="/usluge/starter-paket" className="hover:text-white transition-colors underline">
              {isEn ? "Kickstart" : "Kickstart paket"}
            </Link>
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: isEn ? "how-to-choose-google-ads-consultant" : "kako-izabrati-google-ads-konsultanta" } }}
              className="hover:text-white transition-colors underline"
            >
              {isEn ? "How to Choose a Google Ads Consultant" : "Kako izabrati Google Ads konsultanta"}
            </Link>
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: isEn ? "google-ads-agency-vs-freelancer" : "agencija-vs-freelancer" } }}
              className="hover:text-white transition-colors underline"
            >
              {isEn ? "Agency vs Freelancer" : "Agencija vs Freelancer"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
