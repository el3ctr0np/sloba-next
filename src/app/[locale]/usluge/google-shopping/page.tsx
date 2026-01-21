import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export function generateMetadata(): Metadata {
  return {
    title: "Google Shopping Kampanje | Slobodan Jelisavac",
    description:
      "Upravljanje Google Shopping kampanjama za eCommerce rast i bolji ROAS."
  };
}

const problems = [
  {
    title: "Shopping kampanje ne donose ocekivani ROAS",
    description:
      "Proizvodi se prikazuju, ali konverzije izostaju i profit nije stabilan."
  },
  {
    title: "Merchant Center problemi i suspenzije",
    description:
      "Policy violations blokiraju oglase i gubite prodaju."
  },
  {
    title: "Ne znate kako skalirati profitabilno",
    description:
      "Povecanje budzeta dovodi do pada ROI i gubitka kontrole."
  }
];

const solutions = [
  {
    title: "Feed optimizacija",
    description:
      "Naslovi, opisi i atributi optimizovani za maksimalnu vidljivost."
  },
  {
    title: "Struktura kampanja",
    description:
      "Segmentacija po kategorijama, best-seller prioriteti i kontrola budzeta."
  },
  {
    title: "Performance Max integracija",
    description:
      "Kontrolisan prelaz na PMax uz jasne audience signale i asset optimizaciju."
  },
  {
    title: "Profit-based optimizacija",
    description:
      "Optimizacija prema profitu, marginama i realnom ROAS-u."
  }
];

const pricing = [
  {
    name: "Starter",
    price: "Od €400/mes",
    description: "Za manje eCommerce brendove.",
    features: [
      "Osnovna optimizacija feed-a",
      "1-2 Shopping kampanje",
      "Mesecni izvestaj"
    ],
    ctaText: "Posalji Upit"
  },
  {
    name: "Standard",
    price: "Na upit",
    description: "Za rastuce eCommerce brendove.",
    features: [
      "Napredna segmentacija",
      "Bidding strategija",
      "Redovne optimizacije"
    ],
    highlight: true,
    ctaText: "Posalji Upit"
  },
  {
    name: "Premium",
    price: "Na upit",
    description: "Za brendove sa vecim katalozima i budzetima.",
    features: [
      "PMax + Shopping hibrid",
      "Profit-based bidding",
      "Prioritetna podrska"
    ],
    ctaText: "Posalji Upit"
  }
];

const faqs = [
  {
    question: "Da li radite sa Merchant Center suspenzijama?",
    answer:
      "Da, pomazem sa policy violations i vracanjem naloga u funkciju."
  },
  {
    question: "Koji ROAS mogu ocekivati?",
    answer:
      "Zavisi od industrije i margina. Tipicno ciljam 3-5x ROAS za eCommerce brendove."
  },
  {
    question: "Standard Shopping ili Performance Max?",
    answer:
      "Zavisi od situacije. Cesto koristim hibridni pristup - Standard za kontrolu, PMax za skaliranje."
  },
  {
    question: "Da li mi treba server-side tracking?",
    answer:
      "Za ozbiljnije brendove - da. Poboljsava tacnost podataka i profit-based optimizaciju."
  },
  {
    question: "Koliki minimum budzet preporucujete?",
    answer:
      "Za Shopping kampanje minimum €1000-1500/mes kako bi bilo dovoljno podataka za optimizaciju."
  }
];

export default function GoogleShoppingPage() {
  return (
    <ServicePageTemplate
      title="Google Shopping Kampanje - Maksimizujte Prodaju Vase Online Prodavnice"
      subtitle="Specijalizovan za eCommerce Google Shopping strategije koje donose merljive rezultate. Od feed optimizacije do skaliranja prodaje."
      problems={problems}
      solutions={solutions}
      pricing={pricing}
      faqs={faqs}
    />
  );
}
