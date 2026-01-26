import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title: "Google Ads konsultacije EUR 80/sat | Slobodan Jelisavac",
    description:
      "1-na-1 Google Ads konsultacije sa sertifikovanim stručnjakom. Strategija, audit, second opinion. EUR 80/sat. Zakažite termin."
  };
}

const reasons = [
  {
    title: "Imate interni tim, treba vam ekspertska podrška",
    description:
      "Va? tim vodi kampanje, a treba im external expert za teza pitanja i validaciju."
  },
  {
    title: "Razmisljate o Google Ads, ali niste sigurni",
    description:
      "Zelite da razumete da li je Google Ads pravi kanal pre nego sto investirate."
  },
  {
    title: "Trebate second opinion",
    description:
      "Agencija predlaze nesto, a vi zelite proveru pre odluke."
  },
  {
    title: "Imate specifican problem",
    description:
      "Performance je pao ili nesto ne radi, pa vam treba debugging."
  },
  {
    title: "Zelite strategiju, ne execution",
    description:
      "Va? tim implementira, a vi trebate nekoga ko postavlja pravac."
  }
];

const topics = [
  "Google Ads strategija (kanal, tipovi kampanja, budžet)",
  "Campaign review i brza dijagnostika problema",
  "Technical pitanja: bid strategije, PMax setup, Shopping feed, tracking",
  "Second opinion na agencijsku strategiju",
  "Training i edukacija tima, best practices, Q&A"
];

const formats = [
  {
    title: "Quick Call (30 min) - EUR 50",
    description: "Jedno konkretno pitanje, brza validacija, intro razgovor."
  },
  {
    title: "Standard Session (1 sat) - EUR 80",
    description:
      "Pregled kampanja, strategijska pitanja, training sesija, second opinion. Uključuje pisani summary."
  },
  {
    title: "Deep Dive (2 sata) - EUR 150",
    description:
      "Detaljan account review, kompleksna diskusija, team training. Uključuje detaljan pisani report."
  },
  {
    title: "Retainer (4 sata/mesečno) - EUR 280",
    description:
      "Ongoing podrška za in-house timove. Priority scheduling i Slack pristup."
  }
];

const audiences = [
  "Marketing manageri (validacija strategije, budget justification)",
  "In-house PPC specijalisti (kompleksni problemi, second opinion)",
  "Agency owners (konsultacije za klijente, specialist input)",
  "Founders i CEOs (evaluacija agencija, razumevanje kanala)"
];

const faqs = [
  {
    question: "Da li mogu da snimim poziv?",
    answer: "Da, nema problema."
  },
  {
    question: "Sta ako mi treba više vremena?",
    answer:
      "Možemo produžiti ako sam dostupan ili zakazati follow-up."
  },
  {
    question: "Koliko unapred treba zakazati?",
    answer:
      "Idealno 3-5 radnih dana. Za urgentne slucajeve, kontaktirajte me."
  },
  {
    question: "Sta ako odlucim da radimo zajedno?",
    answer:
      "Cena konsultacije se odbija od prvog meseca ako se odlučite u roku od 30 dana."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads konsultacije",
  description:
    "1-na-1 konsultacije za Google Ads strategiju, audit i second opinion.",
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

      <Section background="gray">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            1-na-1 konsultacije - ekspertski savet za vaša specificna pitanja
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Ponekad vam ne treba full management, ve? samo ekspertski savet.
            Google Ads konsultacije su idealne kada imate konkretna pitanja,
            trebate second opinion ili zelite strategijsku pomoć bez dugoročne
            obaveze. Za EUR 80/sat dobijate punu pažnju i ekspertizu iz 10+
            godina rada sa Google Ads platformom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/kontakt" variant="secondary">
              Zakažite konsultaciju
            </Button>
            <Button href="/usluge/google-ads-audit" variant="primary">
              Google Ads audit
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Kada je konsultacija pravi izbor
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            Teme koje možemo pokriti
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-2 text-gray-600">
              {topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Formati konsultacija
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {formats.map((format) => (
            <Card key={format.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {format.title}
              </h3>
              <p className="text-gray-600">{format.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ko najčešće koristi konsultacije
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-2 text-gray-600">
              {audiences.map((audience) => (
                <li key={audience}>{audience}</li>
              ))}
            </ul>
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
            Imate pitanje? Zakažite konsultaciju
          </h2>
          <p className="text-gray-600 mb-8">
            Popunite kratak formular sa temom koju zelite pokriti i javicu se sa
            dostupnim terminima.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakažite konsultaciju
            </Button>
            <Button href="/usluge/starter-paket" variant="primary">
              Starter paket
            </Button>
          </div>
          <div className="text-sm text-gray-500 mt-6">
            <Link href="/usluge/google-ads-upravljanje" className="underline">
              Google Ads upravljanje
            </Link>{" "}
            -{" "}
            <Link href="/o-meni" className="underline">
              O meni
            </Link>{" "}
            -{" "}
            <Link href="/usluge/google-ads-audit" className="underline">
              Google Ads audit
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
