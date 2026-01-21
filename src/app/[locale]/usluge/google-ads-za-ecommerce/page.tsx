import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export function generateMetadata(): Metadata {
  return {
    title: "Google Ads za eCommerce | Slobodan Jelisavac",
    description:
      "eCommerce Google Ads strategije za skaliranje prodaje i stabilan profit."
  };
}

const problems = [
  {
    title: "Rast prodaje bez kontrole profita",
    description: "Prihod raste, ali profit ne prati zbog lose optimizacije."
  },
  {
    title: "Shopping i PMax bez jasne strategije",
    description: "Kampanje rade izolovano i ne donose stabilan ROAS."
  },
  {
    title: "Sezonalnost i nagli skokovi budzeta",
    description: "Bez prilagodjavanja sezoni, rezultati osciliraju."
  }
];

const solutions = [
  {
    title: "Google Shopping",
    description:
      "Product feed optimizacija, struktura kampanja i kontrola budzeta."
  },
  {
    title: "Performance Max",
    description:
      "AI-powered kampanje za skaliranje preko svih Google kanala."
  },
  {
    title: "Search kampanje",
    description: "Brand, category i competitor targeting."
  },
  {
    title: "Dynamic remarketing",
    description: "Personalizovani oglasi sa proizvodima koje su gledali."
  },
  {
    title: "Profit-based optimizacija",
    description: "POAS umesto ROAS - fokus na profit, ne samo prihod."
  }
];

const pricing = [
  {
    name: "Starter",
    price: "Od €300/mes",
    description: "Za testiranje i manje online prodavnice.",
    features: [
      "Osnovni setup kampanja",
      "Shopping ili Search fokus",
      "Mesecni izvestaj"
    ],
    ctaText: "Posalji Upit"
  },
  {
    name: "Standard",
    price: "Na upit",
    description: "Za rastuce eCommerce brendove.",
    features: [
      "Shopping + PMax strategija",
      "Remarketing",
      "Kontinuirana optimizacija"
    ],
    highlight: true,
    ctaText: "Posalji Upit"
  },
  {
    name: "Premium",
    price: "Na upit",
    description: "Za premium brendove sa vecim budzetima.",
    features: [
      "Profit-based optimizacija",
      "Napredna analitika",
      "Prioritetna podrska"
    ],
    ctaText: "Posalji Upit"
  }
];

const faqs = [
  {
    question: "Koja platforma je potrebna?",
    answer:
      "Radim sa Shopify, WooCommerce, Magento i custom resenjima - bilo koja platforma."
  },
  {
    question: "Koji minimum budzet za eCommerce?",
    answer:
      "Za ozbiljne rezultate minimum €1500/mes, ali postoji Starter od €300 za testiranje."
  },
  {
    question: "Shopping vs Performance Max?",
    answer:
      "Hibridni pristup - Shopping za kontrolu, PMax za skaliranje."
  },
  {
    question: "Kako radite sa sezonalnoscu?",
    answer:
      "Budget pacing, bid adjustments i kreative prilagodjene sezoni."
  }
];

export default function GoogleAdsZaEcommercePage() {
  return (
    <ServicePageTemplate
      title="Google Ads za eCommerce - Skalirajte Prodaju Vase Online Prodavnice"
      subtitle="Od malih webshop-ova do premium brendova sa €85k+ mesecnog budzeta. eCommerce Google Ads strategije koje donose merljive rezultate."
      problems={problems}
      solutions={solutions}
      pricing={pricing}
      faqs={faqs}
    />
  );
}
