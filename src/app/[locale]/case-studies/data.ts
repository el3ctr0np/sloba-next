export type CaseStudy = {
  slug: string;
  company: string;
  category: "eCommerce" | "B2B" | "SaaS" | "Lead Generation" | "Local";
  industry: string;
  niche: string;
  market: string;
  period: string;
  website?: string;
  brandIntro: string;
  challenge: string;
  strategy: string;
  tactics: { title: string; description: string }[];
  results: { label: string; value: string }[];
  highlight: string;
  testimonial?: { quote: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mobelaris",
    company: "Mobelaris",
    category: "eCommerce",
    industry: "Nameštaj i enterijer",
    niche: "Luksuzni nameštaj",
    market: "EU & UK",
    period: "2-3 godine saradnje",
    website: "https://mobelaris.com",
    brandIntro:
      "Mobelaris je eCommerce brend specijalizovan za luksuzni nameštaj, prisutan na celom EU i UK tržištu. CEO Jason je tražio Google Ads konsultanta koji može da skalira prodaju i maksimizira profit u izuzetno konkurentnoj niši.",
    challenge:
      "Kada sam preuzeo nalog, postojalo je preko 300 različitih kampanja, sa preko 900 ad grupa i 10.000 ključnih reči. ROI je bio svega 1.8 uz mesečni budžet od €30k. Dodatni izazov bio je što Google Merchant Centre nije bio dostupan jer je bio pod policy restrikcijom, tako da se uspeh zasnivao isključivo na Search i PMax kampanjama.",
    strategy:
      "Primenjena je napredna konverzijska tracking implementacija. ProfitMetrics je implementiran za serverside tracking i merenje isključivo profita. Koristili smo broad match u kombinaciji sa PMax kampanjama jer je proizvod bio vizuelno atraktivan i zahtevao prikazivanje. 300 kampanja je simplifikovano na samo 90. Radilo se sukcesivno svaki mesec na novim implementacijama uz veliki broj eksperimenata.",
    tactics: [
      {
        title: "ProfitMetrics serverside tracking",
        description:
          "Implementacija serverside tracking-a za merenje stvarnog profita umesto prihoda. Svaka optimizacija zasnovana na profitabilnosti."
      },
      {
        title: "Broad match + PMax kombinacija",
        description:
          "Vizuelno atraktivni proizvodi zahtevali su prikazivanje. PMax kampanje su omogućile prisustvo na svim Google kanalima bez Merchant Centre-a."
      },
      {
        title: "Konsolidacija 300 → 90 kampanja",
        description:
          "Drastično pojednostavljena struktura naloga. Manje kampanja = više podataka po kampanji = bolje odluke algoritma."
      }
    ],
    results: [
      { label: "ROI", value: "1.8x → 3.7x" },
      { label: "Mesečni budžet", value: "€30k → €85k" },
      { label: "Kampanje", value: "300 → 90" },
      { label: "Saradnja", value: "2-3 godine" }
    ],
    highlight: "ROI: 1.8x → 3.7x",
    testimonial: {
      quote:
        "With Slobodan's help, we successfully scaled our accounts across additional markets. We managed to cover all products in our range, maximizing profit while reducing unnecessary spend.",
      name: "Jason",
      role: "CEO, Mobelaris"
    }
  },
  {
    slug: "designerglasses",
    company: "DesignerGlasses",
    category: "eCommerce",
    industry: "Moda i aksesoari",
    niche: "Premium dizajnerske naočare",
    market: "UK & Skandinavija",
    period: "2 godine saradnje",
    website: "https://www.designerglasses.co.uk",
    brandIntro:
      "DesignerGlasses je jedan od najstarijih online prodavaca dizajnerskih naočara u UK. Nude brendirane naočare za vid i sunčane naočare poznatih brendova kao što su Gucci, Burberry, Hugo Boss, Oakley, Dolce & Gabbana i mnogi drugi. Imaju Excellent rejting na Trustpilotu i opslužuju klijente iz UK-a i širom sveta.",
    challenge:
      "Jako konkurentna industrija na UK tržištu. Kada su me kontaktirali, tek su počinjali sa Google Ads oglašavanjem sa vrlo malim budžetom od £3-5k mesečno i ROI-jem od svega 1.5. DesignerGlasses je jedan od najstarijih online prodavaca dizajnerskih naočara u UK, sa brendovima kao što su Gucci, Burberry, Hugo Boss, Oakley i drugi, i Excellent rejtingom na Trustpilotu.",
    strategy:
      "Dobili smo pristup beta PMax programu i testirali PMax kampanje protiv Smart Shopping-a. PMax je pokazivao neverovatne rezultate i od tada smo razvili kampanje tako da svaki brend ima svoju PMax kampanju — kako bismo slikama, videima i oglasima targetirali i BOFU i TOFU publiku kroz remarketing i new customer acquisition. Izuzetno smo posvetili pažnju optimizaciji shopping product feed-a. Takođe smo testirali skandinavska tržišta koja su rado kupovala određene brendove.",
    tactics: [
      {
        title: "PMax beta testiranje vs Smart Shopping",
        description:
          "Rani pristup beta PMax programu. Testirali smo PMax protiv tada popularnog Smart Shopping-a i dokazali superiornost na ovom nalogu."
      },
      {
        title: "Brend-po-brend PMax struktura",
        description:
          "Svaki brend (Gucci, Burberry, Oakley...) ima sopstvenu PMax kampanju sa prilagođenim kreativama za BOFU i TOFU publiku."
      },
      {
        title: "Feed optimizacija + skandinavska ekspanzija",
        description:
          "Detaljna optimizacija product feed-a i testiranje novih tržišta. Skandinavska tržišta su pokazala odličnu tražnju za premium brendovima."
      }
    ],
    results: [
      { label: "ROI", value: "1.5x → 3.9x" },
      { label: "Mesečni budžet", value: "£3-5k → £62k" },
      { label: "Rast prihoda", value: "12x" },
      { label: "Ekspanzija", value: "UK → Skandinavija & EU" }
    ],
    highlight: "12x rast prihoda"
  },
  {
    slug: "soundboxstore",
    company: "SoundBox Store",
    category: "B2B",
    industry: "Kancelarijski nameštaj",
    niche: "Akustične kabine i meeting podovi",
    market: "UK & 8+ EU tržišta",
    period: "24 meseca saradnje",
    website: "https://soundboxstore.com",
    brandIntro:
      "SoundBox Store je specijalizovan za akustične kabine, meeting podove i office phone booth rešenja za B2B klijente širom Evrope. Nastao je iz višegodišnjeg iskustva u komercijalnim prostorima, prepoznajući potrebu za kvalitetnim akustičnim rešenjima u modernim kancelarijama.",
    challenge:
      "SoundBox Store je nastao iz višegodišnjeg iskustva u komercijalnim prostorima, prepoznajući potrebu za kvalitetnim akustičnim rešenjima u modernim kancelarijama. Izazov je bio u skaliranju B2B prodaje akustičnog nameštaja na više evropskih tržišta, uz održavanje kvaliteta leadova i troškovno efikasnog oglašavanja. Početni mesečni budžet bio je £50k sa ROAS-om od 2.1.",
    strategy:
      "Implementirane su napredne Google Ads strategije uključujući Performance Max kampanje, detaljnu optimizaciju search kampanja i sistematičnu ekspanziju na nova EU tržišta. Fokus je bio na kvalitetu leadova, ne samo na količini klikova.",
    tactics: [
      {
        title: "Performance Max za B2B",
        description:
          "PMax kampanje prilagođene B2B ciklusu kupovine sa fokusom na kvalitetne leadove umesto volumena."
      },
      {
        title: "Search kampanje optimizacija",
        description:
          "Detaljna optimizacija search kampanja sa fokusom na high-intent ključne reči za akustična rešenja."
      },
      {
        title: "Sistematična EU ekspanzija",
        description:
          "Postepeno otvaranje novih tržišta — od UK baze ka 8+ evropskih zemalja sa lokalizovanim kampanjama."
      }
    ],
    results: [
      { label: "ROAS", value: "2.1 → 4.3" },
      { label: "Mesečni budžet", value: "£50k → £150k" },
      { label: "Kvalitetni leadovi", value: "3x više" },
      { label: "CPA", value: "-50%" }
    ],
    highlight: "ROAS: 2.1 → 4.3"
  }
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
