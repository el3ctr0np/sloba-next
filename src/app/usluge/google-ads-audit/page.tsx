import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

const problems = [
  {
    title: "Sumnjate da trosite novac uzalud",
    description:
      "Mnogi nalozi imaju skriveno curenje budzeta koje vlasnici ne vide."
  },
  {
    title: "Rezultati stagniraju ili opadaju",
    description:
      "Bez redovnog audita, performance polako degradira iz meseca u mesec."
  },
  {
    title: "Nemate uvid sta agencija radi",
    description:
      "Second opinion cesto otkrije propuste i prilike za brz napredak."
  }
];

const solutions = [
  {
    title: "Analiza strukture naloga",
    description:
      "Pregled kampanja, ad grupa i oglasa uz preporuke za reorganizaciju."
  },
  {
    title: "Keyword analiza",
    description:
      "Match types, negativne reci i identifikacija propustenih prilika."
  },
  {
    title: "Budget i bidding analiza",
    description:
      "Provera raspodele budzeta, bidding strategija i budget waste tacaka."
  },
  {
    title: "Performance pregled",
    description: "Quality Score, CTR, Conversion Rate, ROAS i CPA analiza."
  },
  {
    title: "Tracking verifikacija",
    description:
      "Provera conversion tracking-a, GA4 povezivanja i attribution modela."
  },
  {
    title: "Akcioni plan",
    description:
      "Prioritizovana lista preporuka, quick wins i dugorocne smernice."
  }
];

const pricing = [
  {
    name: "Besplatan Audit",
    price: "0 EUR",
    description: "Za kvalifikovane brendove sa aktivnim nalozima.",
    features: [
      "Detaljna analiza naloga",
      "Prioritizovane preporuke",
      "30-min prezentacija nalaza"
    ],
    ctaText: "Zatrazi Audit"
  },
  {
    name: "Placeni Audit",
    price: "Na upit",
    description: "Za brendove koji ne ispunjavaju kriterijume.",
    features: [
      "Kompletan izvestaj",
      "Akcioni plan",
      "Follow-up podrska"
    ],
    highlight: true,
    ctaText: "Posalji Upit"
  },
  {
    name: "Audit + Implementacija",
    price: "Na upit",
    description: "Audit uz dodatnu pomoc u implementaciji promena.",
    features: [
      "Audit naloga",
      "Implementacija kljucnih optimizacija",
      "Monitoring rezultata"
    ],
    ctaText: "Posalji Upit"
  }
];

const faqs = [
  {
    question: "Koliko traje audit?",
    answer:
      "Kompletan audit zavrsavam u roku od 3-5 radnih dana nakon dobijanja pristupa."
  },
  {
    question: "Da li je audit zaista besplatan?",
    answer:
      "Da, za brendove koji ispunjavaju kriterijume. Nema skrivenih troskova."
  },
  {
    question: "Sta ako ne ispunjavam kriterijume?",
    answer:
      "U tom slucaju nudim placeni audit sa kompletnim izvestajem i akcionim planom."
  },
  {
    question: "Da li imate pristup mojim podacima?",
    answer:
      "Trazi se samo Viewer pristup, bez mogucnosti bilo kakvih izmena."
  },
  {
    question: "Sta se desava nakon audita?",
    answer:
      "Dobijate preporuke koje mozete sami implementirati ili nastaviti saradnju."
  }
];

export default function GoogleAdsAuditPage() {
  return (
    <ServicePageTemplate
      title="Google Ads Audit - Otkrijte Skrivene Prilike u Vasem Nalogu"
      subtitle="Besplatna detaljna analiza vaseg Google Ads naloga. Saznajte sta ne radi, gde gubite novac i kako poboljsati rezultate."
      problems={problems}
      solutions={solutions}
      pricing={pricing}
      faqs={faqs}
    />
  );
}
