import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

const problems = [
  {
    title: "Potrebna je dominacija na svim kanalima",
    description: "Jedan kanal vise nije dovoljan za market lidere."
  },
  {
    title: "Prevelika fragmentacija marketinga",
    description: "SEO, Meta i Google Ads rade izolovano bez zajednicke strategije."
  },
  {
    title: "Potrebna je jedna tacka kontakta",
    description: "Kompleksan sistem zahteva jasno vodjenje i koordinaciju."
  }
];

const solutions = [
  {
    title: "Strategija i planiranje",
    description:
      "Audit aktivnosti, konkurentska analiza, marketing plan i KPI definisanje."
  },
  {
    title: "Google Ads (Paid Search)",
    description:
      "Search, Shopping, PMax i YouTube sa full-funnel strategijom."
  },
  {
    title: "SEO",
    description:
      "Tehnicki SEO, on-page optimizacija, content strategija i link building."
  },
  {
    title: "Meta Advertising",
    description:
      "Facebook i Instagram kampanje, audience building i retargeting."
  },
  {
    title: "Analitika i izvestavanje",
    description:
      "Unified dashboard, mesecni izvestaji i kvartalni strategy review."
  },
  {
    title: "Funky Enterprises tim",
    description:
      "Partnerstvo sa specijalistima za svaku disciplinu digitalnog marketinga."
  }
];

const pricing = [
  {
    name: "Starter",
    price: "Na upit",
    description: "Za brendove koji tek ulaze u full-service pristup.",
    features: [
      "Osnovni audit i plan",
      "Kanal fokus po prioritetu",
      "Mesecni izvestaj"
    ],
    ctaText: "Posalji Upit"
  },
  {
    name: "Standard",
    price: "Na upit",
    description: "Za rastuce brendove sa vise kanala.",
    features: [
      "Full-funnel strategija",
      "SEO + Google Ads + Meta",
      "Unified izvestavanje"
    ],
    highlight: true,
    ctaText: "Posalji Upit"
  },
  {
    name: "Premium",
    price: "Na upit",
    description: "Za market lidere i premium brendove.",
    features: [
      "Omnichannel dominacija",
      "Prioritetna podrska",
      "Kvartalni strategy review"
    ],
    ctaText: "Posalji Upit"
  }
];

const faqs = [
  {
    question: "Koliki je minimum budzet za Performance Marketing?",
    answer:
      "Ova premium usluga je za brendove sa minimum €10k mesecno za sve kanale zajedno."
  },
  {
    question: "Da li moram uzeti sve usluge?",
    answer:
      "Ne. Mozete poceti samo sa Google Ads, pa kasnije prosiriti na full Performance Marketing."
  },
  {
    question: "Kako funkcionise komunikacija sa timom?",
    answer:
      "Imate jednu tacku kontakta. Interno koordiniramo, vi dobijate unified izvestaje i strategy calls."
  },
  {
    question: "Koliko traje ugovor?",
    answer:
      "Minimum 6 meseci zbog vremena potrebnog za full-funnel rezultate."
  }
];

export default function PerformanceMarketingPage() {
  return (
    <ServicePageTemplate
      title="Performance Marketing - Sveobuhvatni Digitalni Nastup za Market Lidere"
      subtitle="Za brendove kojima nije dovoljan samo Google Ads. Kombinujemo SEO, Meta oglasavanje i Google Ads u jedinstven omnichannel pristup u saradnji sa Funky Enterprises timom."
      problems={problems}
      solutions={solutions}
      pricing={pricing}
      faqs={faqs}
    />
  );
}
