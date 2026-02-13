import type { ReactNode } from "react";

// Serbian post imports
import KolikoKostaGoogleAdsSR from "./koliko-kosta-google-ads/sr";
import GoogleOglasavanjeZaFirmeSR from "./google-oglasavanje-za-firme/sr";
import PerformanceMaxVodicSR from "./performance-max-vodic/sr";
import GoogleShoppingVodicSR from "./google-shopping-vodic/sr";
import AgencijaVsFreelancerSR from "./agencija-vs-freelancer/sr";
import ConversionTrackingVodicSR from "./conversion-tracking-vodic/sr";
import GoogleAdsGreskeSR from "./google-ads-greske/sr";
import GoogleAdsNeDonosiRezultateSR from "./zasto-nema-rezultata/sr";
import EcommerceVsB2BSR from "./ecommerce-vs-b2b/sr";
import GoogleAdsVsMetaAdsSR from "./google-ads-vs-meta/sr";
import GoogleAdsAuditSR from "./google-ads-audit-vodic/sr";
import KljucneReciVodicSR from "./kljucne-reci-vodic/sr";
import NegativeKeywordsVodicSR from "./negativne-kljucne-reci/sr";
import QualityScoreVodicSR from "./quality-score-vodic/sr";
import GoogleAdsOptimizacijaSR from "./google-ads-optimizacija/sr";
import RemarketingVodicSR from "./remarketing-vodic/sr";

// English post imports
import HowMuchDoesGoogleAdsCostEN from "./koliko-kosta-google-ads/en";
import GoogleAdvertisingForBusinessesEN from "./google-oglasavanje-za-firme/en";
import PerformanceMaxGuideEN from "./performance-max-vodic/en";
import GoogleAdsOptimizationEN from "./google-ads-optimizacija/en";
import GoogleShoppingGuideEN from "./google-shopping-vodic/en";
import AgencyVsFreelancerEN from "./agencija-vs-freelancer/en";
import ConversionTrackingGuideEN from "./conversion-tracking-vodic/en";
import GoogleAdsMistakesEN from "./google-ads-greske/en";
import WhyGoogleAdsNotWorkingEN from "./zasto-nema-rezultata/en";
import EcommerceVsB2BEN from "./ecommerce-vs-b2b/en";
import GoogleAdsVsMetaAdsEN from "./google-ads-vs-meta/en";
import GoogleAdsAuditGuideEN from "./google-ads-audit-vodic/en";
import KeywordGuideEN from "./kljucne-reci-vodic/en";
import NegativeKeywordsGuideEN from "./negativne-kljucne-reci/en";
import QualityScoreGuideEN from "./quality-score-vodic/en";
import RemarketingGuideEN from "./remarketing-vodic/en";

export type PostData = {
  slug: string;
  title: string;
  date: string;
  category: string;
  metaDescription: string;
  content: ReactNode;
};

const srPosts: PostData[] = [
  {
    slug: "koliko-kosta-google-ads",
    title: "Koliko Košta Google Ads? Cene, Budžeti i ROI u Srbiji [2026]",
    date: "2026-01-26",
    category: "Google Ads",
    metaDescription:
      "Koliko zaista košta Google Ads u Srbiji? Detaljni pregled cena po industrijama, minimalni budžeti, troškovi agencija i kako izračunati ROI pre nego što potrošite prvi dinar.",
    content: <KolikoKostaGoogleAdsSR />
  },
  {
    slug: "google-oglasavanje-za-firme",
    title: "Google Oglašavanje za Firme: Kompletan Vodič za B2B i eCommerce [2026]",
    date: "2026-01-26",
    category: "Google oglašavanje",
    metaDescription:
      "Kompletan vodič za Google oglašavanje prilagođen firmama. Strategije za B2B i eCommerce, tipovi kampanja, budžetiranje i merenje rezultata — sve na jednom mestu.",
    content: <GoogleOglasavanjeZaFirmeSR />
  },
  {
    slug: "performance-max-vodic",
    title: "Performance Max Kampanje: Vodič za eCommerce i B2B [2026]",
    date: "2026-01-26",
    category: "Performance Max",
    metaDescription:
      "Sve o Performance Max kampanjama — kako rade, kada ih koristiti, struktura, asset grupe, i strategije optimizacije. Vodič baziran na realnim rezultatima iz regiona.",
    content: <PerformanceMaxVodicSR />
  },
  {
    slug: "google-ads-optimizacija",
    title: "Google Ads optimizacija - 30 taktika",
    date: "2026-01-17",
    category: "Optimizacija",
    metaDescription:
      "30 proverenih taktika za optimizaciju Google Ads kampanja. Bid strategije, negativne ključne reči, Quality Score, landing page, A/B testiranje — sve iz prakse sa realnim klijentima.",
    content: <GoogleAdsOptimizacijaSR />
  },
  {
    slug: "google-shopping-vodic",
    title: "Google Shopping Kampanje: Kako Povećati ROAS [Vodič 2026]",
    date: "2026-01-26",
    category: "Google Shopping",
    metaDescription:
      "Kompletan vodič za Google Shopping kampanje. Product feed optimizacija, struktura kampanja, bidding strategije i taktike za povećanje ROAS-a — sve bazirano na realnim rezultatima.",
    content: <GoogleShoppingVodicSR />
  },
  {
    slug: "agencija-vs-freelancer",
    title: "Google Ads Agencija vs Freelancer vs In-House: Kako Izabrati Pravu Opciju",
    date: "2026-01-26",
    category: "Google Ads",
    metaDescription:
      "Agencija, freelancer ili in-house tim za Google Ads Detaljno poređenje troškova, prednosti i mana svake opcije. Saznajte koja je prava za vaš budžet i ciljeve.",
    content: <AgencijaVsFreelancerSR />
  },
  {
    slug: "conversion-tracking-vodic",
    title: "Conversion Tracking za Google Ads: Zašto Vaše Kampanje Ne Rade",
    date: "2026-01-26",
    category: "Google Ads",
    metaDescription:
      "Loš conversion tracking je razlog #1 zašto Google Ads kampanje ne donose rezultate. Vodič za pravilno postavljanje tracking-a, enhanced conversions i server-side implementaciju.",
    content: <ConversionTrackingVodicSR />
  },
  {
    slug: "google-ads-greske",
    title: "Google Ads Optimizacija: 20 Grešaka Koje Vas Koštaju Novca",
    date: "2026-01-27",
    category: "Google Ads optimizacija",
    metaDescription:
      "20 najčešćih Google Ads grešaka koje koštaju novac — od loše strukture, preko bidding grešaka, do propuštenih prilika. Proverite da li pravite neku od njih.",
    content: <GoogleAdsGreskeSR />
  },
  {
    slug: "zasto-nema-rezultata",
    title: "Zašto Google Ads Kampanje Ne Donose Rezultate (i Kako to Popraviti)",
    date: "2026-01-27",
    category: "Google Ads",
    metaDescription:
      "Vaše Google Ads kampanje troše budžet ali ne donose rezultate? Evo 12 najčešćih razloga zašto kampanje ne rade i konkretna rešenja za svaki problem.",
    content: <GoogleAdsNeDonosiRezultateSR />
  },
  {
    slug: "ecommerce-vs-b2b",
    title: "Google Ads za eCommerce vs B2B: Ključne Razlike u Strategiji",
    date: "2026-01-27",
    category: "Google Ads",
    metaDescription:
      "Google Ads strategija za eCommerce nije ista kao za B2B. Kompletan vodič o razlikama u kampanjama, targetingu, bidding-u i merenju uspeha za oba modela poslovanja.",
    content: <EcommerceVsB2BSR />
  },
  {
    slug: "google-ads-vs-meta",
    title: "Google Ads vs Meta Ads: Šta je Bolje za Vaš Biznis?",
    date: "2026-02-11",
    category: "Google Ads",
    metaDescription:
      "Google Ads hvata kupce sa namerom, Meta Ads gradi svest. Poređenje po intent-u, CPC, conversion rate-u i ROI-u. Kada koristiti šta + kako ih kombinovati za maksimalan efekat.",
    content: <GoogleAdsVsMetaAdsSR />
  },
  {
    slug: "google-ads-audit-vodic",
    title: "Google Ads Audit: Kompletan Checklist [2026]",
    date: "2026-01-27",
    category: "Google Ads audit",
    metaDescription:
      "Detaljni Google Ads audit checklist sa 80+ tačaka za proveru. Pronađite probleme, optimizujte kampanje, i poboljšajte ROI.",
    content: <GoogleAdsAuditSR />
  },
  {
    slug: "kljucne-reci-vodic",
    title: "Ključne Reči za Google Ads: Kompletan Vodič [2026]",
    date: "2026-01-27",
    category: "Google Ads keywords",
    metaDescription:
      "Sve o ključnim rečima za Google Ads — istraživanje, selekcija, organizacija i optimizacija. Naučite kako da pronađete keywords koji donose konverzije, ne samo klikove.",
    content: <KljucneReciVodicSR />
  },
  {
    slug: "negativne-kljucne-reci",
    title: "Negative Keywords: Kompletna Lista + Strategija [2026]",
    date: "2026-01-27",
    category: "Google Ads",
    metaDescription:
      "Kompletan vodič za negative keywords u Google Ads — gotove liste po industrijama, strategija dodavanja i kako sprečiti bacanje budžeta na pogrešne pretrage.",
    content: <NegativeKeywordsVodicSR />
  },
  {
    slug: "quality-score-vodic",
    title: "Quality Score: Šta Je i Kako Ga Poboljšati [2026]",
    date: "2026-01-27",
    category: "Google Ads",
    metaDescription:
      "Kompletan vodič za Google Ads Quality Score — šta je, kako se računa i konkretne taktike za poboljšanje. Smanjite CPC i poboljšajte pozicije sa boljim QS.",
    content: <QualityScoreVodicSR />
  },
  {
    slug: "remarketing-vodic",
    title: "Google Ads Remarketing: Kompletan Vodič [2026]",
    date: "2026-01-27",
    category: "Google Ads",
    metaDescription:
      "Naučite kako da pokrenete Google Ads remarketing kampanje koje vraćaju posetioce i smanjuju CPA za 50-70%. Vodič sa segmentacijom, strategijama i realnim primerima.",
    content: <RemarketingVodicSR />
  }
];

const enPosts: PostData[] = [
  {
    slug: "koliko-kosta-google-ads",
    title: "How Much Does Google Ads Cost? Prices, Budgets & ROI [2026]",
    date: "2026-01-26",
    category: "Google Ads",
    metaDescription:
      "How much does Google Ads really cost? Detailed CPC breakdown by industry, minimum budgets, agency fees, and how to calculate ROI before spending your first dollar.",
    content: <HowMuchDoesGoogleAdsCostEN />
  },
  {
    slug: "google-oglasavanje-za-firme",
    title: "Google Advertising for Businesses: Complete Guide for B2B and eCommerce [2026]",
    date: "2026-01-26",
    category: "Google Advertising",
    metaDescription:
      "Complete Google Ads guide for businesses. B2B and eCommerce strategies, campaign types, budgeting and measuring results — all in one place.",
    content: <GoogleAdvertisingForBusinessesEN />
  },
  {
    slug: "performance-max-vodic",
    title: "Performance Max Campaigns: Guide for eCommerce and B2B [2026]",
    date: "2026-01-26",
    category: "Performance Max",
    metaDescription:
      "Everything about Performance Max campaigns — how they work, when to use them, structure, asset groups, and optimization strategies. Guide based on real results.",
    content: <PerformanceMaxGuideEN />
  },
  {
    slug: "google-ads-optimizacija",
    title: "Google Ads Optimization: 30 Proven Tactics [2026]",
    date: "2026-01-17",
    category: "Optimization",
    metaDescription:
      "30 proven Google Ads optimization tactics. Bid strategies, negative keywords, Quality Score, landing pages, A/B testing — all from real client experience.",
    content: <GoogleAdsOptimizationEN />
  },
  {
    slug: "google-shopping-vodic",
    title: "Google Shopping Campaigns: How to Increase ROAS [Guide 2026]",
    date: "2026-01-26",
    category: "Google Shopping",
    metaDescription:
      "Complete guide to Google Shopping campaigns. Product feed optimization, campaign structure, bidding strategies and tactics for increasing ROAS — based on real results.",
    content: <GoogleShoppingGuideEN />
  },
  {
    slug: "agencija-vs-freelancer",
    title: "Google Ads Agency vs Freelancer vs In-House: How to Choose the Right Option",
    date: "2026-01-26",
    category: "Google Ads",
    metaDescription:
      "Agency, freelancer or in-house team for Google Ads? Detailed cost comparison, pros and cons of each option. Find out which is right for your budget and goals.",
    content: <AgencyVsFreelancerEN />
  },
  {
    slug: "conversion-tracking-vodic",
    title: "Conversion Tracking for Google Ads: Why Your Campaigns Aren't Working",
    date: "2026-01-26",
    category: "Google Ads",
    metaDescription:
      "Poor conversion tracking is the #1 reason Google Ads campaigns fail. Guide to proper tracking setup, enhanced conversions, and server-side implementation.",
    content: <ConversionTrackingGuideEN />
  },
  {
    slug: "google-ads-greske",
    title: "Google Ads Optimization: 20 Mistakes Costing You Money",
    date: "2026-01-27",
    category: "Google Ads Optimization",
    metaDescription:
      "20 most common Google Ads mistakes that cost money — from poor structure, through bidding errors, to missed opportunities. Check if you're making any of them.",
    content: <GoogleAdsMistakesEN />
  },
  {
    slug: "zasto-nema-rezultata",
    title: "Why Your Google Ads Campaigns Aren't Getting Results (and How to Fix It)",
    date: "2026-01-27",
    category: "Google Ads",
    metaDescription:
      "Your Google Ads campaigns are spending budget but not delivering results? Here are the 12 most common reasons why campaigns fail and concrete solutions for each problem.",
    content: <WhyGoogleAdsNotWorkingEN />
  },
  {
    slug: "ecommerce-vs-b2b",
    title: "Google Ads for eCommerce vs B2B: Key Strategy Differences",
    date: "2026-01-27",
    category: "Google Ads",
    metaDescription:
      "Google Ads strategy for eCommerce is not the same as for B2B. Complete guide to differences in campaigns, targeting, bidding, and measuring success for both business models.",
    content: <EcommerceVsB2BEN />
  },
  {
    slug: "google-ads-vs-meta",
    title: "Google Ads vs Meta Ads: Which Is Better for Your Business?",
    date: "2026-02-11",
    category: "Google Ads",
    metaDescription:
      "Google Ads captures buyers with intent, Meta Ads builds awareness. Comparison by intent, CPC, conversion rate and ROI. When to use which + how to combine them for maximum impact.",
    content: <GoogleAdsVsMetaAdsEN />
  },
  {
    slug: "google-ads-audit-vodic",
    title: "Google Ads Audit: Complete Checklist [2026]",
    date: "2026-01-27",
    category: "Google Ads Audit",
    metaDescription:
      "Detailed Google Ads audit checklist with 80+ checkpoints. Find problems, optimize campaigns, and improve ROI.",
    content: <GoogleAdsAuditGuideEN />
  },
  {
    slug: "kljucne-reci-vodic",
    title: "Keywords for Google Ads: Complete Guide [2026]",
    date: "2026-01-27",
    category: "Google Ads Keywords",
    metaDescription:
      "Everything about keywords for Google Ads — research, selection, organization and optimization. Learn how to find keywords that drive conversions, not just clicks.",
    content: <KeywordGuideEN />
  },
  {
    slug: "negativne-kljucne-reci",
    title: "Negative Keywords: Complete List + Strategy [2026]",
    date: "2026-01-27",
    category: "Google Ads",
    metaDescription:
      "Complete guide to negative keywords in Google Ads — ready-made lists by industry, addition strategy, and how to prevent wasting budget on wrong searches.",
    content: <NegativeKeywordsGuideEN />
  },
  {
    slug: "quality-score-vodic",
    title: "Quality Score: What It Is and How to Improve It [2026]",
    date: "2026-01-27",
    category: "Google Ads",
    metaDescription:
      "Complete Google Ads Quality Score guide — what it is, how it's calculated, and concrete tactics for improvement. Lower your CPC and improve positions with better QS.",
    content: <QualityScoreGuideEN />
  },
  {
    slug: "remarketing-vodic",
    title: "Google Ads Remarketing: Complete Guide [2026]",
    date: "2026-01-27",
    category: "Google Ads",
    metaDescription:
      "Learn how to launch Google Ads remarketing campaigns that bring back visitors and reduce CPA by 50-70%. Guide with segmentation, strategies, and real examples.",
    content: <RemarketingGuideEN />
  }
];

export function getPost(slug: string, locale: string): PostData | undefined {
  const posts = locale === "en" ? enPosts : srPosts;
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return srPosts.map((p) => p.slug);
}
