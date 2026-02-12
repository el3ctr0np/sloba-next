import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title: "YouTube oglasi Srbija | Video oglašavanje sa merljivim rezultatima",
    description:
      "Profesionalno upravljanje YouTube oglasima. Brand awareness i direktne konverzije kroz targetirano video oglašavanje. Minimalni budžet €1,000/mesečno."
  };
}

const problems = [
  {
    title: "Nemamo video",
    description:
      "Mnogi misle da je potrebna skupa produkcija, a i jednostavni formati mogu raditi odlično."
  },
  {
    title: "YouTube je samo za awareness",
    description:
      "Uz pravo targetiranje i format, YouTube može doneti direktne konverzije i merljiv ROI."
  },
  {
    title: "Previše komplikovano",
    description:
      "Google Ads interface i različiti formati mogu delovati konfuzno bez iskustva."
  },
  {
    title: "Želim samo YouTube",
    description:
      "Nekim brendovima treba fokusirano video oglašavanje bez kompletnog Google Ads setup-a."
  }
];

const adFormats = [
  {
    title: "Skippable In-Stream Ads",
    description:
      "Oglasi pre/tokom videa koji se mogu preskočiti nakon 5 sekundi. Plaćanje po view-u (CPV model)."
  },
  {
    title: "Non-Skippable In-Stream Ads",
    description:
      "15-20 sekundi video koji se ne može preskočiti, plaćanje po CPM-u. Idealan za kratke poruke."
  },
  {
    title: "Bumper Ads",
    description:
      "6 sekundi non-skippable format za kratke, memorable poruke. Odličan za brand recall."
  },
  {
    title: "In-Feed Video Ads",
    description:
      "Thumbnail + tekst u YouTube search rezultatima i suggested videos, plaćanje po kliku."
  },
  {
    title: "Shorts Ads",
    description:
      "Vertikalni video oglasi u YouTube Shorts feedu za mlađe demografije i mobile-first publiku."
  }
];

const targetingOptions = [
  "✓ Demographic targeting (starost, pol, parental status, household income)",
  "✓ Affinity audiences (interesovanja i lifestyle kategorije)",
  "✓ In-Market audiences (ljudi koji aktivno istražuju kupovinu)",
  "✓ Custom Intent audiences (na osnovu ključnih reči i konkurentskih kanala)",
  "✓ Remarketing (posetioci sajta, gledaoci prethodnih videa, YouTube subscriber liste)",
  "✓ Placement targeting (specifični kanali ili videi)"
];

const idealClients = [
  "✓ Želite samo YouTube oglašavanje bez kompletnog Google Ads managementa",
  "✓ Imate video content ili ste spremni da ga napravite (preporučujem producente)",
  "✓ Cilj je brand awareness, direktne konverzije ili oboje (hybrid pristup)",
  "✓ Budžet za YouTube je minimum EUR 1,000/mesečno za smislene rezultate",
  "✓ Ciljna grupa provodi vreme na YouTube-u (90%+ internet korisnika u Srbiji)"
];

const faqs = [
  {
    question: "Koliki budžet treba za YouTube oglašavanje?",
    answer:
      "Minimum je EUR 1,000/mesečno za smislene rezultate i dovoljno podataka za optimizaciju. Za ozbiljnije awareness kampanje računajte na EUR 3,000+. Za performance-driven kampanje sa tracking-om, EUR 2,000+ omogućava brže učenje i skaliranje."
  },
  {
    question: "Da li mogu meriti ROI na YouTube oglasima?",
    answer:
      "Da, uz pravilno podešavanje conversion tracking-a i Google Analytics integraciju. View-through conversions i assisted conversions daju uvid u puni doprinos YouTube oglasa u customer journey-u. Koristim advanced attribution modele za transparentan reporting."
  },
  {
    question: "Nemam video - šta sad?",
    answer:
      "Mogu dati creative brief ili preporučiti lokalne producente sa kojima radim. Postoje i opcije sa stock footage-om, animacijama ili slideshow formatima. Za početak je dovoljan i iPhone sa dobrom pričom i hook-om."
  },
  {
    question: "Da li mogu targetirati konkurentske kanale?",
    answer:
      "Da, placement targeting omogućava prikazivanje na specifičnim kanalima, uključujući konkurenciju. To je moćna strategija za 'presretanje' publike koja gleda slične brendove. Koristim i konkurentske keyword liste za In-Market audience kreiranje."
  },
  {
    question: "Koliko traje kampanja da pokaže rezultate?",
    answer:
      "Za awareness efekti se grade tokom vremena (4-8 nedelja za brand lift). Za direct response, prvi podaci su vidljivi nakon nedelju dana, ali za optimalan performance learning phase traje 2-4 nedelje. Ključ je postepeno skaliranje nakon što identifikujem winning kombinacije."
  },
  {
    question: "Koji je idealan video za YouTube oglase?",
    answer:
      "Zavisi od cilja. Najbitniji su strong hook u prvih 5 sekundi (pre skip opcije), jasan CTA na kraju, i usklađenost poruke sa landing page-om. Za skippable format: 15-30 sekundi je sweet spot. Za non-skippable: maksimalno 15 sekundi sa jednom porukom."
  }
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Slobodan Jelisavac",
  url: "https://www.slobodan-jelisavac.com",
  jobTitle: "Google Ads Strategist",
  knowsAbout: ["YouTube Ads", "Video Advertising", "Google Ads", "PPC Strategy", "Performance Marketing"],
  areaServed: [
    { "@type": "Country", name: "Serbia" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Croatia" }
  ]
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
      name: "YouTube oglasi",
      item: "https://www.slobodan-jelisavac.com/usluge/youtube-oglasi"
    }
  ]
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

export default function YouTubeOglasiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Početna
                  </Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li>
                  <Link
                    href="/usluge"
                    className="hover:text-white transition-colors"
                  >
                    Usluge
                  </Link>
                </li>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-white">YouTube oglasi</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              YouTube oglasi - video oglašavanje na najvećoj video platformi
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              YouTube je druga najveća pretraživačka platforma na svetu i mesto
              gde ljudi provode sate gledajući sadržaj. YouTube oglasi omogućavaju
              da dovedete poruku pred precizno targetiranu publiku kroz video
              format koji je engaging i memorable. Ova usluga je namenjena
              brendovima koji žele samo YouTube oglašavanje, bez kompletnog Google
              Ads upravljanja.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-300">
                  7+ godina iskustva
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-300">
                  Video kampanje za UK i RS tržište
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-300">
                  ROI tracking i attribution
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                Kontaktirajte me za više informacija
              </Button>
              <Button href="/usluge/google-ads-upravljanje" variant="primary">
                Google Ads upravljanje
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO intro section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            YouTube oglasi omogućavaju da prikažete video reklame targetiranoj
            publici dok gleda omiljeni sadržaj. Za razliku od tradicionalnog TV
            oglašavanja, YouTube nudi precizno targetiranje, fleksibilne budžete
            i potpunu merljivost rezultata. Bilo da želite brand awareness ili
            direktne konverzije, YouTube kao deo Google Ads ekosistema pruža alate
            za postizanje merljivih rezultata kroz video oglašavanje.
          </p>
        </div>
      </section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Zašto kompanije okleva sa YouTube oglašavanjem
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <Card key={problem.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600">{problem.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            YouTube ad formati - ukratko
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            YouTube nudi različite ad formate za različite ciljeve. Svaki format
            ima svoje prednosti i optimalne use case-ove.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adFormats.map((format) => (
            <Card key={format.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {format.title}
              </h3>
              <p className="text-gray-600">{format.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Opcije targetiranja na YouTube-u
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            YouTube kao deo Google Ads mreže nudi napredne targeting opcije koje
            omogućavaju prikazivanje poruke pravoj publici u pravo vreme.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-3 text-gray-700">
              {targetingOptions.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Za koga je YouTube oglašavanje usluga
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ova usluga je dizajnirana za kompanije koje žele da iskoriste moć
            video oglašavanja bez kompletnog Google Ads managementa.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-3 text-gray-700 mb-6">
              {idealClients.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-sm text-gray-500 pt-4 border-t border-gray-200">
              Ako vam treba kompletno Google Ads upravljanje sa svim tipovima
              kampanja, pogledajte{" "}
              <Link
                href="/usluge/google-ads-upravljanje"
                className="text-blue-600 hover:underline"
              >
                Google Ads upravljanje
              </Link>
              .
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Često postavljana pitanja
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="bg-white rounded-lg shadow-sm overflow-hidden group"
            >
              <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-heading font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <svg
                  className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Dark CTA section */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Zainteresovani za YouTube oglašavanje?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Kontaktirajte me za više informacija o YouTube oglašavanju i da
              vidimo da li je pravi kanal za vaš biznis. Radim sa klijentima iz
              Srbije, UK, Nemačke i regiona na video kampanjama koje donose
              merljive rezultate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button href="/kontakt" variant="secondary">
                Kontaktirajte me za više informacija
              </Button>
              <Button href="/case-studies" variant="primary">
                Pogledajte rezultate
              </Button>
            </div>
            <div className="text-sm text-gray-400 space-x-4">
              <Link
                href="/usluge/remarketing"
                className="hover:text-white transition-colors"
              >
                Remarketing
              </Link>
              <span>·</span>
              <Link
                href="/usluge/performance-max"
                className="hover:text-white transition-colors"
              >
                Performance Max
              </Link>
              <span>·</span>
              <Link
                href="/usluge/google-ads-upravljanje"
                className="hover:text-white transition-colors"
              >
                Google Ads upravljanje
              </Link>
              <span>·</span>
              <Link
                href="/blog/remarketing-vodic"
                className="hover:text-white transition-colors"
              >
                Remarketing vodič
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
