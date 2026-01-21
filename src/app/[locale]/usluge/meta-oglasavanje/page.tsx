import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export function generateMetadata(): Metadata {
  return {
    title: "Meta Oglasavanje | Slobodan Jelisavac",
    description:
      "Facebook i Instagram kampanje za awareness i konverzije."
  };
}

const problems = [
  {
    title: "Slab reach i awareness na Meta platformama",
    description: "Bez jasne strategije, oglasi ne dopiru do prave publike."
  },
  {
    title: "Neadekvatan targeting i kreative",
    description: "Kampanje ne prate user intent ni funnel fazu."
  },
  {
    title: "Nedovoljno sinergije sa Google Ads",
    description: "Meta i Google rade odvojeno umesto kao full-funnel sistem."
  }
];

const solutions = [
  {
    title: "Facebook Ads",
    description: "Feed, Stories, Marketplace i Messenger formati."
  },
  {
    title: "Instagram Ads",
    description: "Feed, Stories, Reels i Explore placementi."
  },
  {
    title: "Meta Audience Network",
    description: "Prosireni reach van Meta platformi."
  },
  {
    title: "Full-funnel strategija",
    description: "Discovery + intent pristup kroz Meta i Google kombinaciju."
  }
];

const pricing = [
  {
    name: "Starter",
    price: "Od €300/mes",
    description: "Za manji obim i osnovne kampanje.",
    features: [
      "Setup i osnovna optimizacija",
      "Kreative smernice",
      "Mesecni izvestaj"
    ],
    ctaText: "Posalji Upit"
  },
  {
    name: "Standard",
    price: "Na upit",
    description: "Za rastuce brendove i veci reach.",
    features: [
      "Napredni targeting",
      "Retargeting strategija",
      "Kontinuirana optimizacija"
    ],
    highlight: true,
    ctaText: "Posalji Upit"
  },
  {
    name: "Premium",
    price: "Na upit",
    description: "Za brendove sa omnichannel pristupom.",
    features: [
      "Full-funnel kampanje",
      "Cross-channel sinergija",
      "Prioritetna podrska"
    ],
    ctaText: "Posalji Upit"
  }
];

const faqs = [
  {
    question: "Da li Meta oglasavanje moze da zameni Google Ads?",
    answer:
      "Ne. Meta je discovery kanal, Google je intent kanal. Zajedno daju najbolje rezultate."
  },
  {
    question: "Koji format radi najbolje?",
    answer:
      "Zavisi od cilja. Za awareness Bumper/Story formati, za konverzije Video Action i retargeting."
  },
  {
    question: "Da li nudite izradu kreativa?",
    answer:
      "Mogu dati smernice i koordinaciju, a realizacija ide kroz Funky Enterprises tim."
  },
  {
    question: "Kako merite uspeh kampanja?",
    answer:
      "Pratim reach, CTR, CPA/ROAS i doprinose kroz full-funnel metrike."
  }
];

export default function MetaOglasavanjePage() {
  return (
    <ServicePageTemplate
      title="Meta Oglasavanje - Facebook i Instagram Kampanje Koje Konvertuju"
      subtitle="Meta oglasavanje realizujem u saradnji sa specijalistom u okviru Funky Enterprises tima za omnichannel pristup."
      problems={problems}
      solutions={solutions}
      pricing={pricing}
      faqs={faqs}
    />
  );
}
