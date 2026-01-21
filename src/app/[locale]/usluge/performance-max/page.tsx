import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export function generateMetadata(): Metadata {
  return {
    title: "Performance Max Kampanje | Slobodan Jelisavac",
    description:
      "AI-powered Performance Max strategije za skaliranje prodaje i leadova."
  };
}

const problems = [
  {
    title: "PMax deluje kao crna kutija",
    description: "Ne znate gde se trosi budzet i zasto."
  },
  {
    title: "Kanibalizacija Search kampanja",
    description: "PMax preuzima branded traffic i kvari atribuciju."
  },
  {
    title: "Losi asset-i i signali",
    description: "AI je dobar koliko i input koji dobije."
  }
];

const solutions = [
  {
    title: "Strategija pre implementacije",
    description:
      "Definisanje ciljeva, analiza postojecih kampanja i izbor pravog PMax modela."
  },
  {
    title: "Asset group arhitektura",
    description:
      "Segmentacija po proizvodima/uslugama, naslovima, opisima i vizualima."
  },
  {
    title: "Audience signals optimizacija",
    description:
      "Custom segments, first-party data i competitor targeting."
  },
  {
    title: "Feed optimizacija za eCommerce",
    description:
      "Custom labels, supplemental feeds i priprema feed-a za bolji ucinak."
  },
  {
    title: "Kontinuirana optimizacija",
    description:
      "Asset performance analiza, search terms insights i budget alokacija."
  },
  {
    title: "AI-first pristup",
    description:
      "Gemini za asset kreiranje, napredna analitika i prediktivno bidding."
  }
];

const pricing = [
  {
    name: "Starter",
    price: "Na upit",
    description: "Za manje eCommerce i lead gen naloge.",
    features: [
      "PMax setup i inicijalna optimizacija",
      "Asset i signal strategija",
      "Mesecni izvestaj"
    ],
    ctaText: "Posalji Upit"
  },
  {
    name: "Standard",
    price: "Na upit",
    description: "Za rastuce naloge i ozbiljnije ciljeve.",
    features: [
      "Napredna segmentacija",
      "Search terms i placement analiza",
      "Kontinuirana optimizacija"
    ],
    highlight: true,
    ctaText: "Posalji Upit"
  },
  {
    name: "Premium",
    price: "Na upit",
    description: "Za market lidere i vecu kompleksnost.",
    features: [
      "AI-first optimizacije",
      "First-party data integracija",
      "Prioritetna podrska"
    ],
    ctaText: "Posalji Upit"
  }
];

const faqs = [
  {
    question: "Da li PMax zamenjuje sve druge kampanje?",
    answer:
      "Ne nuzno. Cesto koristim hibridni pristup - PMax za skaliranje, Search za kontrolu i Shopping za specificne kategorije."
  },
  {
    question: "Kako spreciti kanibalizaciju branded traffica?",
    answer:
      "Koristim brand exclusion liste, negativne kljucne reci na account nivou i pravilnu strukturu kampanja."
  },
  {
    question: "Koliko vremena treba PMax da nauci?",
    answer:
      "Learning period je tipicno 2-4 nedelje. U tom periodu ne pravim velike promene."
  },
  {
    question: "Mogu li da vidim gde se prikazuju oglasi?",
    answer:
      "Delimicno. Google daje Insights, a ja koristim dodatne skripte za dublje uvide."
  },
  {
    question: "Da li PMax radi za Lead Generation?",
    answer:
      "Da, ali zahteva kvalitetne conversion signale. Preporucujem offline conversion import za B2B."
  },
  {
    question: "Sta je AI Max i kako se razlikuje?",
    answer:
      "AI Max je novija iteracija sa jos vise automatizacije. Pratim beta program i implementiram novosti cim budu dostupne."
  }
];

export default function PerformanceMaxPage() {
  return (
    <ServicePageTemplate
      title="Performance Max Kampanje - AI-Powered Oglasavanje za Maksimalne Rezultate"
      subtitle="Iskoristite punu snagu Google AI sa strategijskim pristupom Performance Max kampanjama. Od setup-a do skaliranja."
      problems={problems}
      solutions={solutions}
      pricing={pricing}
      faqs={faqs}
    />
  );
}
