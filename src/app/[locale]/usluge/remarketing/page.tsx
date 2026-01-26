import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title:
      "Remarketing kampanje Srbija | Google, Meta, Pinterest - Slobodan Jelisavac",
    description:
      "Profesionalne remarketing kampanje koje vracaju posetioce. Google Display, YouTube, Meta, Pinterest remarketing."
  };
}

const reasons = [
  {
    title: "Kupovina nije linearna",
    description:
      "Vecina kupaca istrazuje vise opcija pre odluke. Bez prisustva u tom procesu gubite priliku."
  },
  {
    title: "Paznja je kratka",
    description:
      "Korisnik je bio zainteresovan, ali se nesto desilo i zaboravio je ponudu."
  },
  {
    title: "Trust treba vremena",
    description:
      "Za vece kupovine ili B2B usluge potreban je veci broj touchpoints."
  },
  {
    title: "Bez remarketinga placate dva puta",
    description:
      "Doveli ste posetioca, a ako se ne vrati, taj trosak je izgubljen."
  }
];

const remarketingTypes = [
  {
    title: "Display remarketing (Google Ads)",
    description:
      "Baneri koji prate posetioce na sajtovima u Google Display mrezi."
  },
  {
    title: "Video remarketing (YouTube)",
    description:
      "Video oglasi za posetioce sajta, idealni za edukaciju i trust."
  },
  {
    title: "Search remarketing (RLSA)",
    description:
      "Prilagodjeni Search oglasi za warm audience uz agresivnije bidovanje."
  },
  {
    title: "Dinamicki remarketing",
    description:
      "Personalizovani oglasi sa proizvodima koje je korisnik gledao."
  },
  {
    title: "Meta remarketing (Facebook i Instagram)",
    description:
      "Dodatni reach izvan Google ekosistema, posebno za vizuelne proizvode."
  },
  {
    title: "Pinterest remarketing",
    description:
      "Za fashion, home decor, food i lifestyle brendove gde Pinterest ima snagu."
  }
];

const inclusions = [
  {
    title: "Audience setup",
    items: [
      "Remarketing tag implementacija",
      "Segmentacija po ponasanju",
      "Membership duration strategija"
    ]
  },
  {
    title: "Campaign setup",
    items: [
      "Kreiranje kampanja po kanalima",
      "Google, Meta i Pinterest gde ima smisla",
      "Prilagodjeni formati oglasa"
    ]
  },
  {
    title: "Ongoing optimizacija",
    items: [
      "Frequency capping",
      "Placement exclusions",
      "Bid optimizacija po segmentima"
    ]
  },
  {
    title: "Reporting",
    items: [
      "Segment performance",
      "Assisted conversions",
      "View-through conversions"
    ]
  }
];

const idealClients = [
  "Imate postojeci traffic na sajtu (minimum 1,000 posetilaca mesecno)",
  "Sales cycle nije instant, korisnici istrazuju pre kupovine",
  "Zelite da maksimizujete ROI iz postojecih kampanja",
  "Imate budzet za remarketing od minimum EUR 300/mesecno"
];

const bestFor = [
  "eCommerce (dinamicki remarketing)",
  "B2B sa duzim sales cycle-om",
  "Vece kupovine gde ljudi istrazuju"
];

const faqs = [
  {
    question: "Da li je remarketing previse napadan?",
    answer:
      "Moze biti ako se radi pogresno. Uz frequency capping i relevantne poruke, remarketing je koristan i nenametljiv."
  },
  {
    question: "Koliko dugo targetirati ljude?",
    answer:
      "Zavisi od sales cycle-a. eCommerce: 7-30 dana. B2B sa duzim ciklusom: do 90 dana."
  },
  {
    question: "Mogu li raditi remarketing sa malim budzetom?",
    answer:
      "Da. Remarketing je odlican za manje budzete jer targetira warm audience sa visokim potencijalom konverzije."
  },
  {
    question: "Da li remarketing radi za B2B?",
    answer:
      "Da. B2B sales cycle je duzi, pa remarketing pomaze da ostanete top of mind."
  },
  {
    question: "Sta su view-through conversions?",
    answer:
      "Konverzije gde je korisnik video remarketing oglas, nije kliknuo, ali je kasnije dosao i konvertovao."
  },
  {
    question: "Koja je razlika izmedju Google i Meta remarketinga?",
    answer:
      "Google pokriva Display, YouTube i Gmail, dok Meta pokriva Facebook i Instagram. Kombinacija daje najbolji reach."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Remarketing kampanje",
  description:
    "Profesionalne remarketing kampanje koje vracaju posetioce kroz Google, Meta i Pinterest kanale.",
  provider: {
    "@type": "Organization",
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

      <Section background="gray">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Remarketing kampanje - vratite posetioce koji su otisli bez kupovine
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Samo 2-3% posetilaca konvertuje pri prvoj poseti. Bez remarketing
            kampanja, ostalih 97% odlazi i mozda se nikad ne vrati. Remarketing
            vam omogucava da pratite posetioce na sajtovima, YouTube-u, u Gmail-u,
            na Facebooku, Instagramu i Pinterest-u i da ih podsetite zasto su dosli
            na vas sajt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt" variant="secondary">
              Zakazite besplatnu konsultaciju
            </Button>
            <Button href="/usluge/google-ads-upravljanje" variant="primary">
              Google Ads upravljanje
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Zasto gubite potencijalne kupce
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <Card key={reason.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Tipovi remarketing kampanja koje vodim
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remarketingTypes.map((item) => (
            <Card key={item.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Sta je ukljuceno u remarketing uslugu
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
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="text-sm text-gray-500 mt-6">
              Posebno efikasno za: {bestFor.join(", ")}.
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Cesto postavljana pitanja
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
            Spremni da vratite izgubljene posetioce?
          </h2>
          <p className="text-gray-600 mb-8">
            Zakazite konsultaciju i razgovarajmo kako remarketing moze povecati
            konverzije iz vaseg postojeceg traffic-a.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakazite besplatnu konsultaciju
            </Button>
            <Button href="/case-studies" variant="primary">
              Pogledajte rezultate
            </Button>
          </div>
          <div className="text-sm text-gray-500 mt-6">
            <Link href="/usluge/youtube-oglasi" className="underline">
              YouTube oglasi
            </Link>{" "}
            -{" "}
            <Link href="/usluge/meta-oglasavanje" className="underline">
              Meta oglasavanje
            </Link>{" "}
            -{" "}
            <Link href="/usluge/google-shopping" className="underline">
              Google Shopping kampanje
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
