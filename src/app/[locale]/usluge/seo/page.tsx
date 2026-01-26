import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export function generateMetadata(): Metadata {
  return {
    title: "SEO Usluge | Slobodan Jelisavac",
    description:
      "SEO optimizacija za dugoročni organski rast i bolje rangiranje."
  };
}

const problems = [
  {
    title: "Slab organski saobracaj",
    description: "Bez SEO optimizacije, vaš sajt ne dolazi do pravih korisnika."
  },
  {
    title: "Tehnicki problemi blokiraju rast",
    description: "Spor sajt, index problemi i loše strukture ograničavaju rezultate."
  },
  {
    title: "Content bez strategije",
    description: "Sadržaj se objavljuje bez jasnog plana i ciljanih ključnih reči."
  }
];

const solutions = [
  {
    title: "Tehnicki SEO",
    description: "Site audit, Core Web Vitals i resavanje indexing problema."
  },
  {
    title: "On-Page SEO",
    description: "Meta tagovi, struktura sajta i internal linking."
  },
  {
    title: "Content strategija",
    description: "Keyword research, plan sadržaja i optimizacija postova."
  },
  {
    title: "Link building",
    description: "Outreach, guest posting i digital PR."
  },
  {
    title: "Analitika",
    description: "GSC monitoring, tracking rankinga i izvestavanje."
  },
  {
    title: "SEO + PPC sinergija",
    description: "PPC podaci za SEO strategiju i budžet optimizaciju."
  }
];

const pricing = [
  {
    name: "Starter",
    price: "Od €300/mes",
    description: "Za manje biznise i početni SEO rast.",
    features: [
      "Osnovni audit",
      "On-page optimizacija",
      "Mesečni izveštaj"
    ],
    ctaText: "Posalji Upit"
  },
  {
    name: "Standard",
    price: "Na upit",
    description: "Za ozbiljniji organski rast.",
    features: [
      "Tehnicki SEO",
      "Content strategija",
      "Kontinuirana optimizacija"
    ],
    highlight: true,
    ctaText: "Posalji Upit"
  },
  {
    name: "Premium",
    price: "Na upit",
    description: "Za brendove koji žele dominaciju u SERP-u.",
    features: [
      "Link building i PR",
      "Napredna analitika",
      "Prioritetna podrška"
    ],
    ctaText: "Posalji Upit"
  }
];

const faqs = [
  {
    question: "Koliko traje da se vide SEO rezultati?",
    answer:
      "Prvi pomaci se vide u roku od 2-3 meseca, a ozbiljniji rast obicno nakon 4-6 meseci."
  },
  {
    question: "Da li radite samo SEO ili i PPC?",
    answer:
      "Radim i SEO i Google Ads. Kombinacija ova dva kanala daje najbolje rezultate."
  },
  {
    question: "Da li mogu kombinovati SEO i Performance Marketing?",
    answer:
      "Da, SEO usluge realizujem samostalno ili kroz Performance Marketing paket sa Funky Enterprises timom."
  },
  {
    question: "Da li nudite content plan?",
    answer:
      "Da, radim keyword research i plan sadržaja prilagođen vasoj industriji."
  }
];

export default function SeoPage() {
  return (
    <ServicePageTemplate
      title="SEO Usluge - Dugoročni Organski Rast za Vas Biznis"
      subtitle="SEO optimizacija za dugoročni rast. On-page, tehnicki SEO i content strategija, samostalno ili u paketu sa Google Ads."
      problems={problems}
      solutions={solutions}
      pricing={pricing}
      faqs={faqs}
    />
  );
}
