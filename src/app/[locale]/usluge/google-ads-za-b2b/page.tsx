import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export function generateMetadata(): Metadata {
  return {
    title: "Google Ads za B2B | Slobodan Jelisavac",
    description:
      "B2B Google Ads strategije za kvalitetne leadove i duge prodajne cikluse."
  };
}

const problems = [
  {
    title: "Dug sales cycle i vise decision makera",
    description: "B2B zahteva strpljenje, precizan targeting i kvalitetne leadove."
  },
  {
    title: "Mali volume, ali visok intent",
    description: "Potreban je fokus na kljucne reci koje signaliziraju kupovnu nameru."
  },
  {
    title: "Tezak ROI zbog dugog prodajnog procesa",
    description: "Bez offline podataka, optimizacija se radi na pogresnim signalima."
  }
];

const solutions = [
  {
    title: "Intent-based targeting",
    description: "Fokus na high-intent kljucne reci, ne samo awareness."
  },
  {
    title: "Account-Based Marketing",
    description: "Targetiranje kompanija i decision makera kroz Customer Match."
  },
  {
    title: "Full-funnel strategija",
    description: "TOFU awareness, MOFU remarketing, BOFU high-intent kampanje."
  },
  {
    title: "Offline conversion import",
    description: "CRM podaci povezani sa Google Ads za realnu optimizaciju."
  },
  {
    title: "LinkedIn + Google sinergija",
    description: "LinkedIn za targeting, Google za intent i konverzije."
  }
];

const pricing = [
  {
    name: "Starter",
    price: "Na upit",
    description: "Za manje B2B timove i pocetne kampanje.",
    features: [
      "Intent keyword strategija",
      "Osnovni lead gen setup",
      "Mesecni izvestaj"
    ],
    ctaText: "Posalji Upit"
  },
  {
    name: "Standard",
    price: "Na upit",
    description: "Za rastuce B2B kompanije.",
    features: [
      "ABM i custom audijence",
      "Offline conversions",
      "Kontinuirana optimizacija"
    ],
    highlight: true,
    ctaText: "Posalji Upit"
  },
  {
    name: "Premium",
    price: "Na upit",
    description: "Za kompleksne B2B prodajne procese.",
    features: [
      "Full-funnel strategija",
      "LinkedIn + Google integracija",
      "Prioritetna podrska"
    ],
    ctaText: "Posalji Upit"
  }
];

const faqs = [
  {
    question: "Google Ads ili LinkedIn za B2B?",
    answer:
      "Oba imaju svoje mesto. Google hvata intent, LinkedIn omogucava precizan targeting. Najbolje rezultate daje kombinacija."
  },
  {
    question: "Kako merim ROI sa dugim sales cycle-om?",
    answer:
      "Offline conversion import, CRM integracija i multi-touch attribution daju realnu sliku rezultata."
  },
  {
    question: "Koji je tipican CPL za B2B?",
    answer:
      "Zavisi od industrije, ali €20-100+ za kvalifikovane leadove nije neuobicajeno."
  },
  {
    question: "Da li Performance Max radi za B2B?",
    answer:
      "Moze uz kvalitetne signale. Ipak, Search ostaje primarni kanal za high-intent B2B pretrage."
  }
];

export default function GoogleAdsZaB2BPage() {
  return (
    <ServicePageTemplate
      title="Google Ads za B2B - Strategije za Kvalitetne Leadove"
      subtitle="B2B zahteva drugaciji pristup. Dugi sales cycle, vise decision makera i veca vrednost po klijentu zahtevaju preciznu strategiju."
      problems={problems}
      solutions={solutions}
      pricing={pricing}
      faqs={faqs}
    />
  );
}
