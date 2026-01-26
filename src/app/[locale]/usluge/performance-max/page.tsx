import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title:
      "Performance Max kampanje Srbija | PMax specijalist - Slobodan Jelisavac",
    description:
      "Profesionalno upravljanje Performance Max kampanjama. Za firme koje žele konsolidovano oglašavanje sa jednim budžetom."
  };
}

const reasons = [
  "Zelite jednu konsolidovanu kampanju umesto više kompleksnih",
  "Imate ograničen budžet i zelite pokrivanje svih kanala",
  "Nemate vremena za kompleksno upravljanje više tipova kampanja",
  "Zelite da neko iskusan vodi kampanju umesto da je sami podešavate",
  "Va? biznis ne zahteva granularnu kontrolu nad svakim kanalom"
];

const challenges = [
  {
    title: "Black box sindrom",
    description:
      "Google ne pokazuje gde ide budžet, pa bez pravilnog setup-a nema jasnog uvida."
  },
  {
    title: "Kanibalizacija brand pretrage",
    description:
      "PMax preuzima konverzije od Search kampanja i pripisuje ih sebi."
  },
  {
    title: "Losi asset-i znace los rezultat",
    description:
      "Automatizacija zaviši od kvaliteta slika, tekstova i videa."
  },
  {
    title: "Pogrešni audience signali",
    description:
      "Signali su sugestije, ne targeting. Bez strategije privlačite pogrešnu publiku."
  }
];

const approach = [
  {
    title: "Transparentnost pre svega",
    description:
      "Koristim skripte i tehnike za izvore podataka, uključujući search terms i kanal breakdown."
  },
  {
    title: "Strategijska asset grupa struktura",
    description:
      "Segmentacija po kategorijama, intentu ili funnel fazama za bolju kontrolu."
  },
  {
    title: "Pravilni audience signali",
    description:
      "Signale postavljam kao smernice za automatizaciju, ne kao naslepo targetiranje."
  },
  {
    title: "Search themes za kontrolu",
    description:
      "Koristim search themes kako bi pretrage bile blize vašim ključnim fokusima."
  },
  {
    title: "Kombinacija sa drugim kampanjama",
    description:
      "Kada ima smisla, PMax kombinujem sa Search i Standard Shopping kampanjama."
  }
];

const idealClients = [
  "Manja i srednja predužeca sa budžetom od EUR 800-3,000/mesečno",
  "Firme koje žele jednostavnost umesto kompleksnosti",
  "Biznisi bez internog Google Ads specijaliste",
  "Kompanije koje žele da testiraju oglašavanje sa jednom kampanjom"
];

const faqs = [
  {
    question: "Da li PMax zamenjuje sve ostale kampanje?",
    answer:
      "Ne nuzno. Za neke biznise da, za druge je hibridni pristup bolji. Analiziramo situaciju i predlazemo pravo rešenje."
  },
  {
    question: "Mogu li videti za koje ključne reči se prikazujem?",
    answer:
      "Delimicno. Google prikazuje Search Themes insights, a koristim i skripte za priblizne search terms."
  },
  {
    question: "Koliko budžeta treba za PMax?",
    answer: "Minimum preporučujem EUR 800/mesečno samo za PMax kampanju."
  },
  {
    question: "Koliko traje učenje PMax kampanje?",
    answer: "Realno 4-6 nedelja za stabilizaciju."
  },
  {
    question: "Mogu li koristiti PMax za lead generation?",
    answer:
      "Da, ali uz oprez. Lead quality može varirati, zato pratim downstream metrike."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Performance Max kampanje",
  description:
    "Upravljanje Performance Max kampanjama za firme koje žele konsolidovano oglašavanje.",
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

export default function PerformanceMaxPage() {
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
            Performance Max - upravljanje kampanjama za manji i srednji biznis
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Performance Max kampanje kombinuju Search, Shopping, Display, YouTube,
            Gmail i Discover u jednoj automatizovanoj kampanji. Ova usluga je
            nastala nakon velikog broja upita od manjih i srednjih predužeca koja
            žele konsolidovano oglašavanje u jednoj kampanji i pravilno upravljanje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt" variant="secondary">
              Kontaktirajte me
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
            Za koga je Performance Max usluga
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nekad je ovaj pristup pravi, nekad nije. Za mnoge firme jednostavno
            funkcionise - zato je ova usluga i napravljena.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-2 text-gray-600">
              {reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Izazovi sa Performance Max kampanjama
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge) => (
            <Card key={challenge.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {challenge.title}
              </h3>
              <p className="text-gray-600">{challenge.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Kako radim sa Performance Max kampanjama
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {approach.map((item) => (
            <Card key={item.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Idealni klijenti
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-2 text-gray-600">
              {idealClients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <p className="text-sm text-gray-500 mt-6">
            Napomena: Za budžete preko EUR 5,000/mesečno i potrebu za granularnom
            kontrolom, preporučujem{" "}
            <Link href="/usluge/google-ads-upravljanje" className="underline">
              kompletno Google Ads upravljanje
            </Link>{" "}
            sa kombinacijom više tipova kampanja.
          </p>
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
            Zainteresovani za Performance Max upravljanje?
          </h2>
          <p className="text-gray-600 mb-8">
            Kontaktirajte me za više informacija i da vidimo da li je ovaj pristup
            pravi izbor za vaš biznis.
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
            <Link href="/usluge/google-shopping" className="underline">
              Google Shopping kampanje
            </Link>{" "}
            -{" "}
            <Link href="/usluge/search-kampanje" className="underline">
              Search kampanje
            </Link>{" "}
            -{" "}
            <Link href="/blog/performance-max-vodic" className="underline">
              Performance Max vodic
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
