import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

const problems = [
  {
    title: "Veliki deo posetilaca odlazi bez kupovine",
    description: "Vecina korisnika napusti sajt bez konverzije."
  },
  {
    title: "Izgubljeni potencijal ponovnih poseta",
    description: "Ne koristite priliku da vratite zainteresovane korisnike."
  },
  {
    title: "Nedovoljno personalizovane poruke",
    description: "Oglasi nisu prilagodjeni ponasanju posetilaca."
  }
];

const solutions = [
  {
    title: "Standard remarketing",
    description: "Display oglasi posetiocima vaseg sajta."
  },
  {
    title: "Dynamic remarketing",
    description: "Personalizovani oglasi sa proizvodima koje su gledali."
  },
  {
    title: "RLSA",
    description: "Prilagodjeni Search oglasi za prethodne posetioce."
  },
  {
    title: "Video remarketing",
    description: "YouTube oglasi za website posetioce."
  },
  {
    title: "Customer Match",
    description: "Targetiranje postojecih kupaca sa novim ponudama."
  }
];

const pricing = [
  {
    name: "Starter",
    price: "Od €250/mes",
    description: "Za manje naloge i osnovni remarketing.",
    features: [
      "Standard remarketing",
      "Osnovna segmentacija",
      "Mesecni izvestaj"
    ],
    ctaText: "Posalji Upit"
  },
  {
    name: "Standard",
    price: "Na upit",
    description: "Za biznise koji zele veci povrat posetilaca.",
    features: [
      "Dynamic remarketing",
      "RLSA strategija",
      "Optimizacija poruka"
    ],
    highlight: true,
    ctaText: "Posalji Upit"
  },
  {
    name: "Premium",
    price: "Na upit",
    description: "Za vece naloge i full-funnel remarketing.",
    features: [
      "Video remarketing",
      "Customer Match",
      "Napredna analitika"
    ],
    ctaText: "Posalji Upit"
  }
];

const faqs = [
  {
    question: "Da li remarketing deluje previse napadno?",
    answer:
      "Kada se radi pravilno uz frequency capping, korisnici dobijaju relevantne oglase bez preterivanja."
  },
  {
    question: "Koliko lista mi je potrebno?",
    answer:
      "Minimum tri: svi posetioci, korisnici koji su napustili korpu i postojeci kupci."
  },
  {
    question: "Remarketing i GDPR?",
    answer:
      "Potpuno je kompatibilno uz pravilno postavljanje i consent management."
  }
];

export default function RemarketingPage() {
  return (
    <ServicePageTemplate
      title="Google Remarketing - Vratite Posetioce i Pretvorite Ih u Kupce"
      subtitle="97% posetilaca napusti sajt bez kupovine. Remarketing vam omogucava da ih pratite i vratite kada su spremni za akciju."
      problems={problems}
      solutions={solutions}
      pricing={pricing}
      faqs={faqs}
    />
  );
}
