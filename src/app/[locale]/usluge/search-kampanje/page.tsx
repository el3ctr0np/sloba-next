import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export function generateMetadata(): Metadata {
  return {
    title: "Search Kampanje | Slobodan Jelisavac",
    description:
      "Google Search kampanje za vidljivost i konverzije kada vas klijenti traze."
  };
}

const problems = [
  {
    title: "Ciljate pogresne kljucne reci",
    description: "Nerelevantne pretrage trose budzet bez konverzija."
  },
  {
    title: "Oglasi nisu relevantni za intent",
    description: "Poruke ne prate ono sto korisnici traze."
  },
  {
    title: "Visok CPC zbog niskog Quality Score",
    description: "Placate vise jer oglas i landing page nisu dovoljno relevantni."
  }
];

const solutions = [
  {
    title: "Keyword strategija",
    description:
      "Detaljan research, match type strategija, negativne reci i long-tail prilike."
  },
  {
    title: "Ad copy optimizacija",
    description:
      "RSA best practices, A/B testiranje poruka i dynamic keyword insertion."
  },
  {
    title: "Quality Score fokus",
    description:
      "Relevantnost oglasa i landing page-a, uz optimizaciju expected CTR."
  },
  {
    title: "Bidding i budget kontrola",
    description:
      "Smart Bidding, portfolio strategije i budget pacing za stabilan rast."
  }
];

const pricing = [
  {
    name: "Starter",
    price: "Od €300/mes",
    description: "Za manje naloge i fokusirane kampanje.",
    features: [
      "Keyword research",
      "RSA optimizacija",
      "Mesecni izvestaj"
    ],
    ctaText: "Posalji Upit"
  },
  {
    name: "Standard",
    price: "Na upit",
    description: "Za biznise koji zele stabilan rast.",
    features: [
      "Napredna struktura kampanja",
      "Kontinuirana optimizacija",
      "Strategy pozivi"
    ],
    highlight: true,
    ctaText: "Posalji Upit"
  },
  {
    name: "Premium",
    price: "Na upit",
    description: "Za vece naloge sa ambicioznim ciljevima.",
    features: [
      "Full-funnel pristup",
      "Napredna analitika",
      "Prioritetna podrska"
    ],
    ctaText: "Posalji Upit"
  }
];

const faqs = [
  {
    question: "Search ili Performance Max?",
    answer:
      "Zavisi. Search daje vise kontrole, PMax vise automatizacije. Cesto kombinujem oba."
  },
  {
    question: "Koliko kljucnih reci mi treba?",
    answer:
      "Kvalitet je vazniji od kvantiteta. Bolje 50 relevantnih nego 500 nasumicnih."
  },
  {
    question: "RSA vs stari format oglasa?",
    answer:
      "RSA je standard. Fokus je na razlicitim headline-ovima i porukama."
  },
  {
    question: "Kako poboljsati Quality Score?",
    answer:
      "Kroz relevantnost (keyword → oglas → landing page), bolji CTR i korisnicko iskustvo."
  }
];

export default function SearchKampanjePage() {
  return (
    <ServicePageTemplate
      title="Google Search Kampanje - Budite Vidljivi Kada Vas Klijenti Traze"
      subtitle="Strategijski pristup Search oglasavanju za maksimalne konverzije. Od keyword research-a do kontinuirane optimizacije."
      problems={problems}
      solutions={solutions}
      pricing={pricing}
      faqs={faqs}
    />
  );
}
