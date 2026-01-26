import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title: "YouTube oglasi Srbija | Video oglašavanje - Slobodan Jelisavac",
    description:
      "YouTube oglašavanje i video reklame. Brand awareness i direct response kampanje. Upravljanje bez Google Ads."
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
      "Uz pravo targetiranje i format, YouTube može doneti direktne konverzije."
  },
  {
    title: "Previše komplikovano",
    description:
      "Google Ads interface i različiti formati mogu delovati konfuzno."
  },
  {
    title: "Zelim samo YouTube",
    description:
      "Nekim brendovima treba fokusirano video oglašavanje bez kompletnog Google Ads setup-a."
  }
];

const adFormats = [
  {
    title: "Skippable In-Stream Ads",
    description:
      "Oglasi pre/tokom videa koji se mogu preskočiti nakon 5 sekundi. Plaćanje po view-u."
  },
  {
    title: "Non-Skippable In-Stream Ads",
    description:
      "15-20 sekundi video koji se ne može preskočiti, plaćanje po CPM-u."
  },
  {
    title: "Bumper Ads",
    description:
      "6 sekundi non-skippable format za kratke, memorable poruke."
  },
  {
    title: "In-Feed Video Ads",
    description:
      "Thumbnail + tekst u YouTube search rezultatima, plaćanje po kliku."
  },
  {
    title: "Shorts Ads",
    description:
      "Vertikalni video oglasi u YouTube Shorts feedu za mladje demografije."
  }
];

const targetingOptions = [
  "Demographic targeting (starost, pol, parental status, household income)",
  "Affinity audiences (interesovanja i lifestyle kategorije)",
  "In-Market audiences (ljudi koji aktivno istražuju kupovinu)",
  "Custom Intent audiences (na osnovu ključnih reči)",
  "Remarketing (posetioci sajta, gledaoci videa)",
  "Placement targeting (specifični kanali ili videi)"
];

const idealClients = [
  "Zelite samo YouTube oglašavanje bez kompletnog Google Ads",
  "Imate video content ili ste spremni da ga napravite",
  "Cilj je brand awareness ili direct response",
  "Budžet za YouTube je minimum EUR 1,000/mesečno",
  "Ciljna grupa provodi vreme na YouTube-u"
];

const faqs = [
  {
    question: "Koliki budžet treba za YouTube?",
    answer:
      "Minimum je EUR 1,000/mesečno za smislene rezultate. Za ozbiljnije awareness kampanje racunajte na EUR 3,000+."
  },
  {
    question: "Da li mogu meriti ROI na YouTube?",
    answer:
      "Da, uz pravilno podešavanje trackinga. View-through i assisted conversions daju uvid u doprinos."
  },
  {
    question: "Nemam video - sta sad?",
    answer:
      "Mogu dati creative brief ili preporučiti lokalne producente. Postoje i opcije sa stock footage-om."
  },
  {
    question: "Da li mogu targetirati konkurentske kanale?",
    answer:
      "Da, placement targeting omogućava prikazivanje na specifičnim kanalima, uključujući konkurenciju."
  },
  {
    question: "Koliko traje kampanja da pokaze rezultate?",
    answer:
      "Za awareness efekti se grade tokom vremena. Za direct response, prvi podaci su vidljivi nakon nedelju dana."
  },
  {
    question: "Koji je idealan video za oglase?",
    answer:
      "Zavisi od cilja. Najbitniji su strong hook u prvih 5 sekundi i jasan CTA."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "YouTube oglasi",
  description:
    "YouTube oglašavanje i video reklame za brand awareness i direct response kampanje.",
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

export default function YouTubeOglasiPage() {
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
            YouTube oglasi - video oglašavanje na najvecoj video platformi
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            YouTube je druga najvea pretraživaška platforma na svetu i mesto gde
            ljudi provode sate gledajuci sadržaj. YouTube oglasi omogućavaju da
            dovedete poruku pred precizno targetiranu publiku kroz video format koji
            je engaging i memorable. Ova usluga je namenjena brendovima koji žele
            samo YouTube oglašavanje, bez kompletnog Google Ads upravljanja.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt" variant="secondary">
              Kontaktirajte me za više informacija
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
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-2 text-gray-600">
              {targetingOptions.map((item) => (
                <li key={item}>{item}</li>
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
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-2 text-gray-600">
              {idealClients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="text-sm text-gray-500 mt-6">
              Ako vam treba kompletno Google Ads upravljanje, pogledajte{" "}
              <Link href="/usluge/google-ads-upravljanje" className="underline">
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
            Zainteresovani za YouTube oglašavanje
          </h2>
          <p className="text-gray-600 mb-8">
            Kontaktirajte me za više informacija o YouTube oglašavanju i da vidimo
            da li je pravi kanal za vaš biznis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Kontaktirajte me za više informacija
            </Button>
            <Button href="/case-studies" variant="primary">
              Pogledajte rezultate
            </Button>
          </div>
          <div className="text-sm text-gray-500 mt-6">
            <Link href="/usluge/remarketing" className="underline">
              Remarketing
            </Link>{" "}
            -{" "}
            <Link href="/usluge/performance-max" className="underline">
              Performance Max
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
