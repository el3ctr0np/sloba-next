import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

const problems = [
  {
    title: "Nizak awareness i slab reach",
    description: "Tesko dopirete do publike koja aktivno gleda video sadrzaj."
  },
  {
    title: "Nedefinisane video poruke",
    description: "Poruke nisu prilagodjene formatu i publici na YouTube-u."
  },
  {
    title: "Nema jasnog plana optimizacije",
    description: "Bez strategije, budzet se trosi bez merljivog efekta."
  }
];

const solutions = [
  {
    title: "TrueView In-Stream",
    description: "Placate samo kada gledaoci pogledaju 30+ sekundi."
  },
  {
    title: "Bumper Ads",
    description: "Kratke i nezaboravne poruke za brzo podizanje awareness-a."
  },
  {
    title: "Video Action Campaigns",
    description: "Kampanje fokusirane na konverzije uz CTA overlay."
  },
  {
    title: "Video Discovery",
    description: "Oglasi u YouTube pretrazi i related videos."
  }
];

const pricing = [
  {
    name: "Starter",
    price: "Od €300/mes",
    description: "Za brendove koji tek ulaze u video oglasavanje.",
    features: [
      "Setup i osnovna optimizacija",
      "TrueView i Bumper formati",
      "Mesecni izvestaj"
    ],
    ctaText: "Posalji Upit"
  },
  {
    name: "Standard",
    price: "Na upit",
    description: "Za brendove koji zele skaliranje reach-a.",
    features: [
      "Video Action kampanje",
      "Segmentacija publike",
      "Kontinuirana optimizacija"
    ],
    highlight: true,
    ctaText: "Posalji Upit"
  },
  {
    name: "Premium",
    price: "Na upit",
    description: "Za vece kampanje i full-funnel strategiju.",
    features: [
      "Napredna analitika",
      "Cross-channel sinergija",
      "Prioritetna podrska"
    ],
    ctaText: "Posalji Upit"
  }
];

const faqs = [
  {
    question: "Koliko kosta YouTube oglasavanje?",
    answer:
      "CPV (cost per view) je tipicno €0.01-0.05 u zavisnosti od targetiranja."
  },
  {
    question: "Da li mi treba profesionalni video?",
    answer:
      "Pomaze, ali i smartphone video moze raditi za odredjene formate."
  },
  {
    question: "YouTube ili TV oglasavanje?",
    answer:
      "YouTube nudi preciznije targetiranje i merljivost po nizoj ceni."
  }
];

export default function YouTubeOglasiPage() {
  return (
    <ServicePageTemplate
      title="YouTube Oglasi - Dosegnite Publiku Tamo Gde Provodi Vreme"
      subtitle="YouTube oglasavanje za brand awareness i konverzije. TrueView, Bumper Ads i Video Action kampanje za publiku koja gleda video sadrzaj."
      problems={problems}
      solutions={solutions}
      pricing={pricing}
      faqs={faqs}
    />
  );
}
