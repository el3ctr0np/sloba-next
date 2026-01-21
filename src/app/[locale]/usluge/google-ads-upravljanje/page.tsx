import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export function generateMetadata(): Metadata {
  return {
    title: "Google Ads Upravljanje | Slobodan Jelisavac",
    description:
      "Ekspertsko upravljanje Google Ads kampanjama za stabilan ROI i rast."
  };
}

const problems = [
  {
    title: "Trosite budzet bez jasnih rezultata",
    description:
      'Kampanje "rade" ali ne znate da li su zaista profitabilne.'
  },
  {
    title: "Nemate vremena za svakodnevnu optimizaciju",
    description:
      "Google Ads zahteva konstantnu paznju koju nemate u svakodnevnom poslu."
  },
  {
    title: "Konkurencija vas je prestigla",
    description:
      "CPC raste, konverzije padaju, a ne znate sta da promenite."
  }
];

const solutions = [
  {
    title: "Kompletno upravljanje nalogom",
    description:
      "Svakodnevni monitoring, optimizacija bid-ova i A/B testiranje."
  },
  {
    title: "Data-driven odluke",
    description: "Odluke bazirane na podacima, ne pretpostavkama."
  },
  {
    title: "Transparentni izvestaji",
    description: "Mesecni izvestaji sa jasnim metrikama i preporukama."
  },
  {
    title: "Direktna komunikacija",
    description: "Bez posrednika - direktno sa ekspertom."
  },
  {
    title: "Fokus na profit",
    description: "Optimizacija za ROAS/profit, ne samo klikove i impresije."
  }
];

const pricing = [
  {
    name: "Starter",
    price: "Od €300/mes",
    description: "Za mala preduzeca i budzete do €1k.",
    features: [
      "Osnovna optimizacija kampanja",
      "Mesecni izvestaji",
      "Email podrska"
    ],
    ctaText: "Posalji Upit"
  },
  {
    name: "Standard",
    price: "Na upit",
    description: "Za etablirane biznise i ozbiljniji rast.",
    features: [
      "Strategija i skaliranje",
      "Napredna optimizacija",
      "Redovni strategy pozivi"
    ],
    highlight: true,
    ctaText: "Posalji Upit"
  },
  {
    name: "Premium",
    price: "Na upit",
    description: "Za market lidere i kompleksne naloge.",
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
    question: "Koliko traje da vidim rezultate?",
    answer:
      "Prve optimizacije implementiram u prvih 7-14 dana. Znacajniji rezultati su vidljivi nakon 30-60 dana, u zavisnosti od stanja naloga i industrije."
  },
  {
    question: "Da li radite samo sa velikim budzetima?",
    answer:
      "Ne. Starter paket od €300/mes je namenjen manjim preduzecima sa budzetima do €1000. Vece budzete resavamo kroz prilagodjenu ponudu."
  },
  {
    question: "Kako izgleda komunikacija?",
    answer:
      "Direktna komunikacija putem email-a, Slack-a ili dogovorenog kanala. Mesecni strategy call i izvestaj, uz dostupnost za hitna pitanja."
  },
  {
    question: "Da li mogu da prekinem saradnju?",
    answer:
      "Da. Za Starter paket radimo mesec za mesec. Za vece projekte uobicajen je test period od 90 dana pa prelazak na duzi ugovor."
  },
  {
    question: "Sta ako vec imam agenciju?",
    answer:
      "Mozemo uraditi audit naloga i dati second opinion. Mnogi klijenti prelaze nakon losih iskustava sa agencijama."
  },
  {
    question: "Da li garantujete rezultate?",
    answer:
      "Ne dajem nerealne garancije. Digitalni marketing zavisi od mnogo faktora, ali garantujem transparentnost, ekspertizu i maksimalan trud."
  }
];

export default function GoogleAdsUpravljanjePage() {
  return (
    <ServicePageTemplate
      title="Google Ads Upravljanje - Ekspertsko Vodjenje Vasih Kampanja"
      subtitle="Prepustite optimizaciju kampanja ekspertu sa decenijom iskustva. Fokusirajte se na biznis dok ja maksimizujem vas ROI."
      problems={problems}
      solutions={solutions}
      pricing={pricing}
      faqs={faqs}
    />
  );
}
