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
          "Svaki brend (Gucci, Burberry, Oakley...) ima sopstvenu PMax kampanju sa prilagođenim kreativima za BOFU i TOFU publiku."
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

export const caseStudiesEn: CaseStudy[] = [
  {
    slug: "mobelaris",
    company: "Mobelaris",
    category: "eCommerce",
    industry: "Furniture & Interior Design",
    niche: "Luxury furniture",
    market: "EU & UK",
    period: "2-3 year partnership",
    website: "https://mobelaris.com",
    brandIntro:
      "Mobelaris is an eCommerce brand specializing in luxury furniture, serving customers across the EU and UK. CEO Jason needed a Google Ads consultant who could scale revenue and maximize profitability in a highly competitive niche.",
    challenge:
      "When I took over the account, there were over 300 different campaigns, 900+ ad groups, and 10,000 keywords. ROI was only 1.8 on a €30k monthly budget. An additional challenge was that Google Merchant Centre was unavailable due to policy restrictions, so success relied exclusively on Search and PMax campaigns.",
    strategy:
      "Advanced conversion tracking implementation was applied. ProfitMetrics was implemented for server-side tracking and measuring pure profit. We used broad match combined with PMax campaigns because the product was visually attractive and required display placements. 300 campaigns were simplified to just 90. We worked successively each month on new implementations with extensive experimentation.",
    tactics: [
      {
        title: "ProfitMetrics server-side tracking",
        description:
          "Server-side tracking implementation to measure actual profit instead of revenue. Every optimization based on profitability."
      },
      {
        title: "Broad match + PMax combination",
        description:
          "Visually attractive products required display placements. PMax campaigns enabled presence across all Google channels without Merchant Centre."
      },
      {
        title: "Consolidation 300 → 90 campaigns",
        description:
          "Drastically simplified account structure. Fewer campaigns = more data per campaign = better algorithm decisions."
      }
    ],
    results: [
      { label: "ROI", value: "1.8x → 3.7x" },
      { label: "Monthly budget", value: "€30k → €85k" },
      { label: "Campaigns", value: "300 → 90" },
      { label: "Partnership", value: "2-3 years" }
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
    industry: "Fashion & Accessories",
    niche: "Premium designer eyewear",
    market: "UK & Scandinavia",
    period: "2 year partnership",
    website: "https://www.designerglasses.co.uk",
    brandIntro:
      "DesignerGlasses is one of the UK's oldest online designer eyewear retailers. They offer branded prescription and sunglasses from renowned brands such as Gucci, Burberry, Hugo Boss, Oakley, Dolce & Gabbana, and many others. They have an Excellent Trustpilot rating and serve customers throughout the UK and worldwide.",
    challenge:
      "Extremely competitive industry in the UK market. When they contacted me, they were just starting with Google Ads with a very small budget of £3-5k monthly and an ROI of only 1.5. As one of the UK's oldest online designer eyewear retailers with brands like Gucci, Burberry, Hugo Boss, and Oakley, they needed to compete effectively despite their excellent Trustpilot rating.",
    strategy:
      "We gained access to the beta PMax program and tested PMax campaigns against Smart Shopping. PMax showed incredible results, and from then on we developed campaigns so that each brand had its own PMax campaign — allowing us to target both BOFU and TOFU audiences with images, videos, and ads through remarketing and new customer acquisition. We paid exceptional attention to shopping product feed optimization. We also tested Scandinavian markets which showed strong demand for certain brands.",
    tactics: [
      {
        title: "PMax beta testing vs Smart Shopping",
        description:
          "Early access to the beta PMax program. We tested PMax against the then-popular Smart Shopping and proved superiority on this account."
      },
      {
        title: "Brand-by-brand PMax structure",
        description:
          "Each brand (Gucci, Burberry, Oakley...) has its own PMax campaign with tailored creatives for BOFU and TOFU audiences."
      },
      {
        title: "Feed optimization + Scandinavian expansion",
        description:
          "Detailed product feed optimization and testing new markets. Scandinavian markets showed excellent demand for premium brands."
      }
    ],
    results: [
      { label: "ROI", value: "1.5x → 3.9x" },
      { label: "Monthly budget", value: "£3-5k → £62k" },
      { label: "Revenue growth", value: "12x" },
      { label: "Expansion", value: "UK → Scandinavia & EU" }
    ],
    highlight: "12x revenue growth"
  },
  {
    slug: "soundboxstore",
    company: "SoundBox Store",
    category: "B2B",
    industry: "Office Furniture",
    niche: "Acoustic pods & meeting booths",
    market: "UK & 8+ EU markets",
    period: "24 month partnership",
    website: "https://soundboxstore.com",
    brandIntro:
      "SoundBox Store specializes in acoustic pods, meeting booths, and office phone booth solutions for B2B clients across Europe. Born from years of experience in commercial spaces, they recognized the need for quality acoustic solutions in modern offices.",
    challenge:
      "Born from years of experience in commercial spaces and recognizing the need for quality acoustic solutions in modern offices, the challenge was scaling B2B sales of acoustic furniture across multiple European markets while maintaining lead quality and cost-effective advertising. The initial monthly budget was £50k with a ROAS of 2.1.",
    strategy:
      "Advanced Google Ads strategies were implemented including Performance Max campaigns, detailed search campaign optimization, and systematic expansion to new EU markets. The focus was on lead quality, not just click volume.",
    tactics: [
      {
        title: "Performance Max for B2B",
        description:
          "PMax campaigns tailored to the B2B buying cycle with a focus on quality leads over volume."
      },
      {
        title: "Search campaign optimization",
        description:
          "Detailed optimization of search campaigns focused on high-intent keywords for acoustic solutions."
      },
      {
        title: "Systematic EU expansion",
        description:
          "Gradual opening of new markets — from UK base to 8+ European countries with localized campaigns."
      }
    ],
    results: [
      { label: "ROAS", value: "2.1 → 4.3" },
      { label: "Monthly budget", value: "£50k → £150k" },
      { label: "Quality leads", value: "3x more" },
      { label: "CPA", value: "-50%" }
    ],
    highlight: "ROAS: 2.1 → 4.3"
  }
];

export function getCaseStudiesByLocale(locale: string): CaseStudy[] {
  return locale === "en" ? caseStudiesEn : caseStudies;
}

export function getCaseStudy(slug: string, locale?: string): CaseStudy | undefined {
  const studies = locale === "en" ? caseStudiesEn : caseStudies;
  return studies.find((cs) => cs.slug === slug);
}
