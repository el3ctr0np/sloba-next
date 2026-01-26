import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Section, Card, Button } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title: "Google Ads i Performance Marketing usluge | Slobodan Jelisavac",
    description:
      "Profesionalne Google Ads usluge za eCommerce, B2B i SaaS kompanije. 10+ godina iskustva, UK Search Awards. Zakažite besplatnu konsultaciju."
  };
}

const coreServices = [
  {
    title: "Google Ads upravljanje",
    href: "/usluge/google-ads-upravljanje",
    desc: "Strategija, setup i svakodnevna optimizacija naloga sa fokusom na rast."
  },
  {
    title: "Google Ads audit",
    href: "/usluge/google-ads-audit",
    desc: "Detaljna analiza naloga sa jasnim preporukama za poboljšanje."
  },
  {
    title: "Google Shopping kampanje",
    href: "/usluge/google-shopping",
    desc: "Feed optimizacija, struktura kampanja i bid strategije za bolji ROAS."
  },
  {
    title: "Performance Max",
    href: "/usluge/performance-max",
    desc: "Kontrola asset grupa, audience signala i transparentno praćenje performansi."
  },
  {
    title: "Search kampanje",
    href: "/usluge/search-kampanje",
    desc: "Keyword strategija, ad copy i landing page optimizacija za visoku nameru."
  },
  {
    title: "Remarketing",
    href: "/usluge/remarketing",
    desc: "Povratak posetilaca kroz Display, YouTube i Search remarketing."
  },
  {
    title: "YouTube oglasi",
    href: "/usluge/youtube-oglasi",
    desc: "Video kampanje za awareness i direct response ciljeve."
  }
];

const industryServices = [
  {
    title: "Google Ads za B2B",
    href: "/usluge/google-ads-za-b2b",
    desc: "Lead generation strategije, account-based targeting i CRM integracije."
  },
  {
    title: "Google Ads za eCommerce",
    href: "/usluge/google-ads-za-ecommerce",
    desc: "Shopping, Performance Max i full-funnel pristup za veći prihod."
  },
  {
    title: "Google Ads za SaaS",
    href: "/usluge/google-ads-za-saas",
    desc: "Akvizicija trial korisnika i demo zahteva uz kontrolu CAC-a."
  }
];

const consultationOffers = [
  {
    title: "1-na-1 konsultacije (EUR 80/sat)",
    href: "/usluge/konsultacije",
    desc: "Direktna konsultacija za strategiju, konkretne izazove ili second opinion."
  },
  {
    title: "Starter paket za početnike (od EUR 300)",
    href: "/usluge/starter-paket",
    desc: "Setup naloga, osnovna struktura i edukacija za samostalno vođenje."
  },
  {
    title: "Usluge za lokalne firme",
    href: "/kontakt",
    desc: "Prilagođen pristup za manje budžete sa fokusom na merljiv ROI."
  }
];

const problemPoints = [
  "Visok CPC bez proporcionalnog broja konverzija",
  "Kampanje koje troše budžet bez vidljivih rezultata",
  "Nedostatak uvida u to sta zaista funkcionise",
  "Performance Max koji troši na irelevantne plasmane",
  "Shopping feed bez optimizacije za maksimalni reach"
];

const stats = [
  { value: "EUR 2M+", label: "Upravljanog ad spend-a godišnje" },
  { value: "180%+", label: "Prosecno poboljšanje ROAS-a" },
  { value: "10+", label: "Godina iskustva" },
  { value: "UK Search Awards", label: "Dobitnik nagrade" },
  { value: "50+", label: "Zadovoljnih klijenata" }
];

const processSteps = [
  {
    title: "Besplatna konsultacija",
    desc: "30-minutni poziv gde razumem ciljeve, trenutno stanje i izazove."
  },
  {
    title: "Strategija i ponuda",
    desc: "Detaljna strategija i transparentna ponuda zasnovana na analizi."
  },
  {
    title: "Implementacija",
    desc: "Setup ili preuzimanje naloga, strategija i tracking podešavanje."
  },
  {
    title: "Kontinuirana optimizacija",
    desc: "Mesečni reporting, A/B testiranje i skaliranje pobednickih kampanja."
  }
];

const faqs = [
  {
    q: "Koja je minimalna investicija za saradnju?",
    a: "Radim sa kompanijama koje imaju minimum EUR 800 mesečnog ad spend-a. Za manje budžete preporučujem Starter paket ili 1-na-1 konsultacije."
  },
  {
    q: "Da li radite samo sa kompanijama iz Srbije?",
    a: "Ne, radim sa klijentima iz cele Evrope, uključujući UK, Nemačku, Hrvatsku i Srbiju."
  },
  {
    q: "Koliko traje minimalna saradnja?",
    a: "Preporucujem minimum 3 meseca za upravljanje kampanjama. Za audit i konsultacije nema minimalnog perioda."
  },
  {
    q: "Kako izgleda mesečni reporting?",
    a: "Svakog meseca dobijate izveštaj sa ključnim metrikama, sprovedenim akcijama i preporukama."
  },
  {
    q: "Da li mogu da vidim primer vašeg rada?",
    a: "Da, pogledajte case studies sekciju sa konkretnim rezultatima za različite industrije."
  }
];

export default function ServicesPage() {
  return (
    <>
      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Google Ads i Performance Marketing usluge
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Tražite pouzdanog partnera za Google Ads usluge koji donosi merljive
            rezultate? Sa preko 10 godina iskustva u upravljanju kampanjama za
            eCommerce, B2B i SaaS kompanije širom Evrope, pomažem brendovima da
            ostvare rast kroz strateški pristup plaćenom oglašavanju. Kao dobitnik
            UK Search Awards, prenosim međunarodno iskustvo lokalnim i regionalnim
            klijentima.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakažite besplatnu konsultaciju
            </Button>
            <Button href="/case-studies" variant="primary">
              Pogledajte rezultate
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Prestanite da bacate novac na oglase koji ne konvertuju
          </h2>
          <p className="text-gray-600">
            Loše strukturirane kampanje, pogrešno targetiranje i manjak
            optimizacije najčešće dovode do slabog povrata investicije.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemPoints.map((item) => (
            <Card key={item} className="h-full">
              <p className="text-gray-700">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Kompletne Google Ads i Performance Marketing usluge
          </h2>
          <p className="text-gray-600">
            Od strategije do svakodnevne optimizacije, pokrivam sve ključne delove
            naloga za stabilan rast.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service) => (
            <Link key={service.href} href={service.href}>
              <Card className="h-full">
                <h3 className="font-heading font-bold text-xl mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
                <span className="mt-4 inline-block text-primary font-semibold">
                  Saznajte više
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">Usluge po industriji</h2>
          <p className="text-gray-600">
            Strategije prilagođene kompleksnosti prodajnog procesa i ciljevima
            vaše industrije.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {industryServices.map((service) => (
            <Link key={service.href} href={service.href}>
              <Card className="h-full">
                <h3 className="font-heading font-bold text-xl mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
                <span className="mt-4 inline-block text-primary font-semibold">
                  Detalji usluge
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Performance Marketing - premium usluga
          </h2>
          <p className="text-gray-700 mb-6">
            Za kompanije koje žele kompletan omnichannel pristup (Google Ads + Meta
            + SEO + CRO), nudim premium paket kroz partnerstvo sa Funky Enterprises
            timom.
          </p>
          <Button href="/usluge/performance-marketing" variant="secondary">
            Saznajte više o Performance Marketing paketu
          </Button>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Konsultacije i edukacija
          </h2>
          <p className="text-gray-600">
            Direktna podrška za timove koji žele jasnu strategiju i brže
            preporuke.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {consultationOffers.map((offer) => (
            <Link key={offer.href} href={offer.href}>
              <Card className="h-full">
                <h3 className="font-heading font-bold text-xl mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600">{offer.desc}</p>
                <span className="mt-4 inline-block text-primary font-semibold">
                  Kontaktirajte me
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Rezultati koje ostvarujem za klijente
          </h2>
          <p className="text-gray-600">
            Fokus na stabilan rast, transparentno izvestavanje i jasne KPI-jeve.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center h-full">
              <div className="text-2xl font-heading font-bold mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/case-studies" variant="primary">
            Pogledajte case studies
          </Button>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Jednostavan proces u 4 koraka
          </h2>
          <p className="text-gray-600">
            Jasno definisani koraci za brzu implementaciju i kontinuiranu
            optimizaciju.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <Card key={step.title} className="h-full">
              <div className="text-primary font-heading font-bold text-xl mb-2">
                {index + 1}. {step.title}
              </div>
              <p className="text-gray-600">{step.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Često postavljana pitanja
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <Card key={faq.q} className="h-full">
              <h3 className="font-heading font-bold text-lg mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Spremni da poboljšate svoje Google Ads rezultate?
          </h2>
          <p className="text-gray-600 mb-8">
            Zakažite besplatnu 30-minutnu konsultaciju i saznajte kako mogu
            pomoći vašem biznisu da ostvari bolje rezultate kroz strateški
            pristup plaćenom oglašavanju.
          </p>
          <Button href="/kontakt" variant="secondary">
            Zakažite besplatnu konsultaciju
          </Button>
        </div>
      </Section>
    </>
  );
}
