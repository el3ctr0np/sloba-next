import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title: "Google Ads Starter paket od EUR 300 | Slobodan Jelisavac",
    description:
      "Google Ads setup za početnike. Profesionalna struktura kampanja, tracking, edukacija za samostalno vođenje. Od EUR 300."
  };
}

const idealFor = [
  "Tek počinjete sa Google Ads",
  "Budžet za ads je EUR 500-800/mesečno",
  "Imate vremena da sami pratite kampanje",
  "Zelite da naučite kako Google Ads funkcionise",
  "Planirate sami voditi kampanje"
];

const notFor = [
  "Budžet za ads je preko EUR 1,500/mesečno (potreban je ongoing management)",
  "Nemate vremena za pracenje kampanja",
  "Ne zelite da učite, ve? samo rezultate"
];

const inclusions = [
  {
    title: "Google Ads setup",
    items: [
      "Profesionalna struktura kampanja",
      "Search kampanja sa 20-50 ključnih reči",
      "Responsive Search Ads (2-3 po ad grupi)",
      "Extensions setup",
      "Negative keywords početna lista",
      "Basic remarketing setup"
    ]
  },
  {
    title: "Conversion tracking",
    items: [
      "GTM setup",
      "2-3 conversion actions (purchase, lead, call)",
      "GA4 linking"
    ]
  },
  {
    title: "Edukacija",
    items: [
      "1-on-1 training session (45-60 min)",
      "Pisana dokumentacija za nalog",
      "Checklist za nedeljnu optimizaciju"
    ]
  },
  {
    title: "Follow-up podrška",
    items: ["30 dana email podrške za pitanja"]
  }
];

const packages = [
  {
    title: "Basic Starter - EUR 300",
    subtitle: "Za jednostavne usluge, lokalni biznis, manja predužeca",
    items: [
      "1 Search kampanja (do 3 ad grupe)",
      "Do 30 ključnih reči",
      "Basic conversion tracking",
      "45-min training",
      "2 nedelje email support"
    ]
  },
  {
    title: "Standard Starter - EUR 500",
    subtitle: "Za većinu malih biznisa i lead generation",
    items: [
      "2 Search kampanje (do 6 ad grupa)",
      "Do 50 ključnih reči",
      "Basic remarketing setup",
      "Full conversion tracking",
      "60-min training",
      "30 dana email support",
      "Kompletna dokumentacija"
    ],
    highlight: "Najpopularnija opcija"
  },
  {
    title: "eCommerce Starter - EUR 700",
    subtitle: "Za male online prodavnice",
    items: [
      "Search + Shopping kampanja (basic setup)",
      "Basic feed review i preporuke",
      "Remarketing setup",
      "eCommerce tracking",
      "90-min training (2 sesije)",
      "30 dana email support"
    ]
  }
];

const nextSteps = [
  {
    title: "Nemate vremena za optimizaciju?",
    linkText: "Google Ads upravljanje",
    href: "/usluge/google-ads-upravljanje"
  },
  {
    title: "Imate pitanja nakon support perioda?",
    linkText: "1-on-1 konsultacija",
    href: "/usluge/konsultacije"
  },
  {
    title: "Kampanje rastu i treba skaliranje?",
    linkText: "Razgovarajmo o ongoing partnership-u",
    href: "/kontakt"
  }
];

const faqs = [
  {
    question: "Da li mi treba iskustvo sa Google Ads?",
    answer:
      "Ne. Starter paket je dizajniran za potpune početnike, a training sesija pokriva osnove."
  },
  {
    question: "Koliki budžet za ads treba da imam?",
    answer:
      "Preporucujem minimum EUR 500/mesečno za ads. EUR 800-1,000 je idealno za početak."
  },
  {
    question: "Da li mogu da nadogradim na full management kasnije?",
    answer:
      "Da. Mnogi klijenti krenu sa Starter paketom pa predju na ongoing management."
  },
  {
    question: "Koliko vremena nedeljno treba za održavanje?",
    answer: "Za basic maintenance racunajte na 30-60 minuta nedeljno."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads Starter paket",
  description:
    "Starter paket za početnike sa profesionalnim setup-om, trackingom i edukacijom.",
  provider: {
    "@type": "Organižation",
    name: "Slobodan Jelisavac",
    url: "https://slobodan-jelisavac.com"
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

export default function StarterPaketPage() {
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

      <Section background="gray">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Starter paket - profesionalni Google Ads setup za samostalno vođenje
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Zelite da pokrenete Google Ads, ali nemate budžet za ongoing management?
            Starter paket donosi profesionalnu strukturu kampanja, pravilno
            podešen tracking i edukaciju za samostalno vođenje. Umesto da učite
            metodom pokušaja i greške, dobijate proven setup koji možete
            održavati i optimizovati.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt" variant="secondary">
              Zatražite Starter paket
            </Button>
            <Button href="/usluge/konsultacije" variant="primary">
              1-na-1 konsultacije
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Da li je Starter paket za vas?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="h-full">
            <h3 className="text-lg font-heading font-semibold mb-4">
              Starter paket je idealan ako
            </h3>
            <ul className="space-y-2 text-gray-600">
              {idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <Card className="h-full">
            <h3 className="text-lg font-heading font-semibold mb-4">
              Starter paket nije za vas ako
            </h3>
            <ul className="space-y-2 text-gray-600">
              {notFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Sta je uključeno u Starter paket
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {inclusions.map((block) => (
            <Card key={block.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-4">
                {block.title}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Starter paket opcije
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Card key={pkg.title} className="h-full">
              <h3 className="text-xl font-heading font-bold mb-2">
                {pkg.title}
              </h3>
              <p className="text-gray-600 mb-4">{pkg.subtitle}</p>
              {pkg.highlight && (
                <div className="inline-block text-xs uppercase tracking-wide text-primary mb-4">
                  {pkg.highlight}
                </div>
              )}
              <ul className="space-y-2 text-gray-600">
                {pkg.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Sta kada kampanje porastu?
          </h2>
          <p className="text-gray-600">
            Starter paket vas osposobljava za samostalno vođenje, a kada zatreba
            pomoć, dostupne su sledece opcije.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {nextSteps.map((step) => (
            <Card key={step.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-3">
                {step.title}
              </h3>
              <Link href={step.href} className="text-primary font-semibold">
                {step.linkText}
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Često postavljana pitanja
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <Card key={faq.question} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Spremni da pokrenete Google Ads na pravi nacin?
          </h2>
          <p className="text-gray-600 mb-8">
            Popunite formular i javite mi koji paket vas zanima.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zatražite Starter paket
            </Button>
            <Button href="/kontakt" variant="primary">
              Zakažite 15-min konsultaciju
            </Button>
          </div>
          <div className="text-sm text-gray-500 mt-6">
            <Link href="/blog/google-ads-za-početnike" className="underline">
              Google Ads za početnike
            </Link>{" "}
            -{" "}
            <Link href="/blog/google-ads-cena" className="underline">
              Google Ads cena
            </Link>{" "}
            -{" "}
            <Link href="/usluge/google-ads-upravljanje" className="underline">
              Google Ads upravljanje
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
