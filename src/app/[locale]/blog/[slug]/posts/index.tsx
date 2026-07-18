import type { ReactNode } from "react";
import { slugMap, enToSrMap } from "./slug-map";

// Re-export slug utilities
export { slugMap, getCanonicalSlug, getEnSlug, getAlternateSlug } from "./slug-map";

// Serbian post imports
import GoogleApiPristupiZaAgencijeSR from "./google-api-pristupi-za-agencije/sr";
import GoogleApiAccessGuideForAgenciesEN from "./google-api-pristupi-za-agencije/en";
import GoogleAdsApiBasicAccessVodicSR from "./google-ads-api-basic-access-vodic/sr";
import GoogleAdsApiBasicAccessGuideEN from "./google-ads-api-basic-access-vodic/en";
import MicrosoftAdsVsGoogleAdsSR from "./microsoft-ads-vs-google-ads/sr";
import MicrosoftAdsVsGoogleAdsEN from "./microsoft-ads-vs-google-ads/en";
import SmartBiddingVodicSR from "./smart-bidding-vodic/sr";
import SmartBiddingGuideEN from "./smart-bidding-vodic/en";
import GoogleAdsZaEcommerceSrbija2026SR from "./google-ads-za-ecommerce-srbija-2026/sr";
import GoogleAdsForEcommerceSerbia2026EN from "./google-ads-za-ecommerce-srbija-2026/en";
import GoogleAdsNovosti2026SR from "./google-ads-novosti-2026/sr";
import GoogleAdsUpdates2026EN from "./google-ads-novosti-2026/en";
import YouTubeOglasavanjeVodicSR from "./youtube-oglasavanje-vodic/sr";
import YouTubeAdvertisingGuideEN from "./youtube-oglasavanje-vodic/en";
import GoogleShoppingSrbija2026SR from "./google-shopping-srbija-2026/sr";
import GoogleShoppingSerbiaLaunch2026EN from "./google-shopping-srbija-2026/en";
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
import KakoPocetiGoogleAdsSR from "./kako-poceti-google-ads/sr";
import RsaVodicSR from "./rsa-vodic/sr";
import RsaGuideEN from "./rsa-vodic/en";
import CtrVodicSR from "./ctr-vodic/sr";
import CtrGuideEN from "./ctr-vodic/en";
import GoogleAdsAuditChecklistSrbijaSR from "./google-ads-audit-checklist-srbija/sr";
import GoogleAdsAuditChecklistSerbia2026EN from "./google-ads-audit-checklist-srbija/en";
import GA4GoogleAdsIntegracijaSR from "./ga4-google-ads-integracija/sr";
import GA4GoogleAdsIntegrationEN from "./ga4-google-ads-integracija/en";
import StaJeRoasSR from "./sta-je-roas/sr";
import WhatIsRoasEN from "./sta-je-roas/en";
import MerchantCenterSrbijaSetupSR from "./merchant-center-srbija-setup/sr";
import MerchantCenterSerbiaSetupEN from "./merchant-center-srbija-setup/en";
import ProductFeedSrpskiEcommerceSR from "./product-feed-srpski-ecommerce/sr";
import ProductFeedSerbianEcommerceEN from "./product-feed-srpski-ecommerce/en";
import KolikoKostaGoogleAdsKonsultantSR from "./koliko-kosta-google-ads-konsultant/sr";
import GoogleAdsConsultantCostEN from "./koliko-kosta-google-ads-konsultant/en";
import KakoIzabratiGoogleAdsKonsultantaSR from "./kako-izabrati-google-ads-konsultanta/sr";
import HowToChooseGoogleAdsConsultantEN from "./kako-izabrati-google-ads-konsultanta/en";
import PoasVsRoasSR from "./poas-vs-roas/sr";
import PoasVsRoasEN from "./poas-vs-roas/en";
import PreuzimanjeGoogleAdsNalogaSR from "./preuzimanje-google-ads-naloga/sr";
import GoogleAdsAccountTakeoverChecklistEN from "./preuzimanje-google-ads-naloga/en";
import OfflineConversionImportB2BSR from "./offline-conversion-import-b2b/sr";
import OfflineConversionImportB2BEN from "./offline-conversion-import-b2b/en";

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
import KakoPocetiGoogleAdsEN from "./kako-poceti-google-ads/en";

export type PostData = {
  slug: string;
  title: string;
  date: string;
  dateModified: string;
  category: string;
  metaDescription: string;
  featuredImage?: string;
  readingTime?: string;
  content: ReactNode;
};

const srPosts: PostData[] = [
  {
    slug: "google-api-pristupi-za-agencije",
    title: "Google API Pristupi za PPC Agencije — Kompletan Setup Vodič [2026]",
    date: "2026-07-11",
    dateModified: "2026-07-11",
    category: "Automatizacija",
    metaDescription:
      "Kompletan setup vodič za Google API pristupe u PPC agenciji: Ads, GA4, Search Console, Tag Manager, Merchant Center i Data Manager API. Jedan Cloud projekat, OAuth scope-ovi i ključna lekcija o Testing modu koji gasi refresh token za 7 dana.",
    featuredImage: "/blog/google-api-pristupi-za-agencije.webp",
    readingTime: "13 min",
    content: <GoogleApiPristupiZaAgencijeSR />
  },
  {
    slug: "google-ads-api-basic-access-vodic",
    title: "Google Ads API Basic Access: Vodič Korak po Korak [2026]",
    date: "2026-07-11",
    dateModified: "2026-07-11",
    category: "Automatizacija",
    metaDescription:
      "Kako do Google Ads API Basic Access nivoa u 2026: developer token, aplikacija koja prolazi iz prve, povezivanje sa Cloud projektom i novi brand verification pilot koji skraćuje review sa nedelja na par sati. Iz ličnog iskustva.",
    featuredImage: "/blog/google-ads-api-basic-access-vodic.webp",
    readingTime: "12 min",
    content: <GoogleAdsApiBasicAccessVodicSR />
  },
  {
    slug: "offline-conversion-import-b2b",
    title: "Offline Conversion Import za B2B: Povežite Google Ads sa CRM-om",
    date: "2026-07-06",
    dateModified: "2026-07-06",
    category: "Tracking",
    metaDescription:
      "Kako da Google Ads algoritam uči na zatvorenim poslovima umesto na formama: GCLID vs Enhanced Conversions for Leads, setup za HubSpot, Salesforce i Pipedrive, vrednovanje MQL/SQL/Closed-won faza i česte greške.",
    featuredImage: "/blog/offline-conversion-import-b2b.webp",
    readingTime: "13 min",
    content: <OfflineConversionImportB2BSR />
  },
  {
    slug: "koliko-kosta-google-ads-konsultant",
    title: "Koliko košta Google Ads konsultant u 2026? (senior vs agencija vs junior)",
    date: "2026-07-06",
    dateModified: "2026-07-06",
    category: "Google Ads",
    metaDescription:
      "Transparentna cenovnica: junior freelancer €200-400/mes, senior konsultant €700-2.000/mes (€120-200/sat), agencija €500-2.000+ uz % od spend-a. Modeli naplate, tržišni benchmark i crvene zastavice kod jeftinih ponuda.",
    featuredImage: "/blog/koliko-kosta-google-ads-konsultant.webp",
    readingTime: "14 min",
    content: <KolikoKostaGoogleAdsKonsultantSR />
  },
  {
    slug: "kako-izabrati-google-ads-konsultanta",
    title: "Kako izabrati Google Ads konsultanta: 12 pitanja pre potpisivanja ugovora",
    date: "2026-07-06",
    dateModified: "2026-07-06",
    category: "Google Ads",
    metaDescription:
      "12 konkretnih pitanja za proveru Google Ads konsultanta ili agencije pre potpisivanja: ko radi na nalogu, vlasništvo naloga, tracking, naplata. Zelene i crvene zastavice iz prakse.",
    featuredImage: "/blog/kako-izabrati-google-ads-konsultanta.webp",
    readingTime: "16 min",
    content: <KakoIzabratiGoogleAdsKonsultantaSR />
  },
  {
    slug: "poas-vs-roas",
    title: "POAS umesto ROAS: Kako Profit-Based Bidding Menja eCommerce Oglašavanje",
    date: "2026-07-06",
    dateModified: "2026-07-06",
    category: "Metrike",
    metaDescription:
      "POAS (Profit on Ad Spend) = profit ÷ spend. Zašto ROAS od 4x može biti gubitak, break-even matematika, praktična implementacija (feed, custom columns) i kada POAS nije potreban.",
    featuredImage: "/blog/poas-vs-roas.webp",
    readingTime: "14 min",
    content: <PoasVsRoasSR />
  },
  {
    slug: "preuzimanje-google-ads-naloga",
    title: "Preuzimanje Google Ads Naloga od Agencije: Šta Proveriti u Prvoj Nedelji",
    date: "2026-07-06",
    dateModified: "2026-07-06",
    category: "Audit",
    metaDescription:
      "Menjate Google Ads agenciju? Checklist šta proveriti PRE prekida (vlasništvo naloga, pristupi, izvoz istorije) i šta raditi u prvoj nedelji preuzimanja — bez naglih promena koje ugrožavaju rezultate.",
    featuredImage: "/blog/preuzimanje-google-ads-naloga.webp",
    readingTime: "14 min",
    content: <PreuzimanjeGoogleAdsNalogaSR />
  },
  {
    slug: "product-feed-srpski-ecommerce",
    title: "Product Feed za Srpski eCommerce — Kompletan Vodič [2026]",
    date: "2026-07-04",
    dateModified: "2026-07-04",
    category: "Google Shopping",
    metaDescription:
      "Product feed vodič za srpski eCommerce: 8 obaveznih atributa, title optimizacija, custom labels za bidding, feed po platformi (Shopify, WooCommerce, custom XML) i najčešće greške. Iz prakse sa globalnim Shopping nalozima.",
    featuredImage: "/blog/product-feed-srpski-ecommerce.webp",
    readingTime: "15 min",
    content: <ProductFeedSrpskiEcommerceSR />
  },
  {
    slug: "merchant-center-srbija-setup",
    title: "Google Merchant Center za Srbiju — Kompletan Setup Vodič [2026]",
    date: "2026-07-03",
    dateModified: "2026-07-03",
    category: "Google Shopping",
    metaDescription:
      "Google Merchant Center setup vodič za srpsko tržište: kreiranje naloga, verifikacija, product feed atributi, metode dostave feed-a, česte greške i disapproval razlozi, shipping/tax settings. Iz prakse sa 10+ Shopping naloga.",
    featuredImage: "/blog/merchant-center-srbija-setup.webp",
    readingTime: "14 min",
    content: <MerchantCenterSrbijaSetupSR />
  },
  {
    slug: "google-ads-audit-checklist-srbija",
    title: "Google Ads Audit Checklist 2026 — 50 Stavki [Srbija]",
    date: "2026-05-09",
    dateModified: "2026-05-09",
    category: "Google Ads Audit",
    metaDescription:
      "Konkretan checklist od 50 stavki za audit Google Ads naloga u Srbiji. 10 kategorija sa primerima iz prakse — eCommerce, B2B, lead-gen. Scoring sistem i 30-min brzi audit.",
    featuredImage: "/blog/google-ads-audit-checklist-srbija.webp",
    readingTime: "18 min",
    content: <GoogleAdsAuditChecklistSrbijaSR />
  },
  {
    slug: "ga4-google-ads-integracija",
    title: "GA4 + Google Ads Integracija: Kompletan Setup Vodič [2026]",
    date: "2026-04-26",
    dateModified: "2026-04-26",
    category: "Tracking",
    metaDescription:
      "Kompletan 7-koračni vodič za GA4 + Google Ads integraciju u 2026: linkovanje property-ja, import key events kao konverzija, Primary/Secondary setup, Consent Mode v2 i troubleshooting. HowTo schema + realne lekcije iz 10+ naloga.",
    featuredImage: "/blog/ga4-google-ads-integracija.webp",
    readingTime: "18 min",
    content: <GA4GoogleAdsIntegracijaSR />
  },
  {
    slug: "sta-je-roas",
    title: "Šta je ROAS i Kako se Računa? [sa Kalkulatorom] [2026]",
    date: "2026-04-26",
    dateModified: "2026-04-26",
    category: "Metrike",
    metaDescription:
      "Šta je ROAS (Return on Ad Spend)? Formula: ROAS = Prihod ÷ Potrošnja. Interaktivni kalkulator, industrijski benchmarks, razlika ROAS vs POAS i 6 taktika za poboljšanje. Bazirano na realnim nalozima.",
    featuredImage: "/blog/sta-je-roas.webp",
    readingTime: "8 min",
    content: <StaJeRoasSR />
  },
  {
    slug: "microsoft-ads-vs-google-ads",
    title: "Microsoft Ads vs Google Ads: Kompletno Poređenje za 2026 [Iz Prakse]",
    date: "2026-04-19",
    dateModified: "2026-04-23",
    category: "Strategija",
    metaDescription:
      "Microsoft Ads vs Google Ads u 2026: market share, CPC razlike, kada koristiti koju platformu, LinkedIn targeting prednost. Iz 2 godine rada sa Chelleon UK na obe platforme istovremeno.",
    featuredImage: "/blog/microsoft-ads-vs-google-ads.webp",
    readingTime: "14 min",
    content: <MicrosoftAdsVsGoogleAdsSR />
  },
  {
    slug: "google-ads-za-ecommerce-srbija-2026",
    title: "Google Ads za eCommerce u Srbiji: Kompletna Strategija za 2026 [sa Zvaničnim Podacima]",
    date: "2026-04-14",
    dateModified: "2026-04-19",
    category: "eCommerce",
    metaDescription:
      "Data-driven vodič za Google Ads eCommerce strategiju u Srbiji 2026: 110.6M internet kupovina, €3.61B tržište, rast 34%, top kategorije, benchmarks i taktike. Bazirano na podacima NBS-a i iskustvu sa 10+ naloga.",
    featuredImage: "/blog/google-ads-za-ecommerce-srbija-2026.webp",
    readingTime: "17 min",
    content: <GoogleAdsZaEcommerceSrbija2026SR />
  },
  {
    slug: "smart-bidding-vodic",
    title: "Smart Bidding Strategije za Google Ads: Kompletan Vodič za 2026",
    date: "2026-04-19",
    dateModified: "2026-04-23",
    category: "Optimizacija",
    metaDescription:
      "Smart Bidding strategije u Google Ads-u 2026: 6 strategija (Maximize Conversions, tCPA, tROAS i ostale) sa decision tree-jem, conversion volume requirements, i lekcijama iz 10+ naloga.",
    featuredImage: "/blog/smart-bidding-vodic.webp",
    readingTime: "16 min",
    content: <SmartBiddingVodicSR />
  },
  {
    slug: "google-ads-novosti-2026",
    title: "Google Ads Novosti i Promene 2026 [Ažurirano Mesečno]",
    date: "2026-04-13",
    dateModified: "2026-04-13",
    category: "Google Ads",
    metaDescription:
      "Sve Google Ads promene i novosti za 2026 na jednom mestu. Shopping lansiranje u Srbiji, AI Max Text Guidelines, PMax transparentnost, Editor 2.12. Ažurirano mesečno.",
    featuredImage: "/blog/google-ads-novosti-2026.webp",
    readingTime: "12 min",
    content: <GoogleAdsNovosti2026SR />
  },
  {
    slug: "youtube-oglasavanje-vodic",
    title: "YouTube Oglašavanje: Kompletan Vodič za Video Kampanje [2026]",
    date: "2026-04-13",
    dateModified: "2026-04-13",
    category: "YouTube Ads",
    metaDescription:
      "Kompletan vodič za YouTube oglašavanje u 2026: 6 formata oglasa (Skippable, Bumper, Shorts, In-Feed), targeting opcije, troškovi (CPV €0.02-0.03), i strategije za eCommerce i B2B. Bazirano na iskustvu sa 10+ naloga.",
    featuredImage: "/blog/youtube-oglasavanje-vodic.webp",
    readingTime: "16 min",
    content: <YouTubeOglasavanjeVodicSR />
  },
  {
    slug: "google-shopping-srbija-2026",
    title: "Google Shopping Dolazi u Srbiju Novembar 2026: Kompletan Vodič za Pripremu",
    date: "2026-04-09",
    dateModified: "2026-07-12",
    category: "Google Shopping",
    metaDescription:
      "Google Shopping Ads stiže u Srbiju novembra 2026 i u Hrvatsku Q4 2026. Kompletan vodič sa 15-korak checklist-om, Merchant Center setup, product feed optimizacija, i lekcije iz 2+ godine UK iskustva (Chelleon, £290k+ revenue).",
    featuredImage: "/blog/google-shopping-srbija-2026.webp",
    readingTime: "18 min",
    content: <GoogleShoppingSrbija2026SR />
  },
  {
    slug: "koliko-kosta-google-ads",
    title: "Koliko zapravo košta Google oglašavanje u Srbiji? CPC po Industrijama + Budžeti od 200€ do 5.000€ [2026]",
    date: "2026-01-26",
    dateModified: "2026-05-14",
    category: "Google Ads",
    metaDescription:
      "Google oglašavanje cena u Srbiji: realni CPC po industrijama (15-50 RSD), minimalni budžeti od €200/mes, agencijske takse, i ROI okvir koji koristim sa 20+ klijenata. Sve cifre iz 2026, sa konkretnim primerima.",
    featuredImage: "/blog/koliko-kosta-google-ads.webp",
    readingTime: "12 min",
    content: <KolikoKostaGoogleAdsSR />
  },
  {
    slug: "google-oglasavanje-za-firme",
    title: "Google Oglašavanje za Firme: Kompletan Vodič za B2B i eCommerce [2026]",
    date: "2026-01-26",
    dateModified: "2026-07-18",
    category: "Google oglašavanje",
    metaDescription:
      "Google oglašavanje za firme: kako funkcioniše, koliko košta i koji tip kampanje bira za B2B ili eCommerce. CPC benchmark za Srbiju, budžeti i strategije za profitabilne kampanje, iz iskustva sa 50+ klijenata.",
    featuredImage: "/blog/google-oglasavanje-za-firme.webp",
    readingTime: "15 min",
    content: <GoogleOglasavanjeZaFirmeSR />
  },
  {
    slug: "performance-max-vodic",
    title: "Performance Max (PMax) Vodič za 2026: Struktura, Asset Grupe + Template koji daje bolji ROAS",
    date: "2026-01-26",
    dateModified: "2026-04-27",
    category: "Performance Max",
    metaDescription:
      "Performance Max kampanje u 2026: kompletna struktura asset grupa, search themes, exclusions, i 5 najčešćih grešaka koje koštaju 30-50% ROAS-a. Uključuje gotov PMax Asset Grupa template + lekcije iz 10+ naloga.",
    featuredImage: "/blog/performance-max-vodic.webp",
    readingTime: "14 min",
    content: <PerformanceMaxVodicSR />
  },
  {
    slug: "google-ads-optimizacija",
    title: "Google Ads Optimizacija: +20 Taktika za bolje rezultate [2026]",
    date: "2026-01-17",
    dateModified: "2026-07-12",
    category: "Optimizacija",
    metaDescription:
      "Preko +20 taktika za bolje rezultate. Kompletan vodič — bid strategije, negativne ključne reči, Quality Score, landing page i A/B testiranje. Iz prakse sa 20+ klijenata.",
    featuredImage: "/blog/google-ads-optimizacija.webp",
    readingTime: "18 min",
    content: <GoogleAdsOptimizacijaSR />
  },
  {
    slug: "google-shopping-vodic",
    title: "Google Shopping Kampanje: Kompletan Vodič + 2026 Srbija Launch Priprema",
    date: "2026-01-26",
    dateModified: "2026-04-19",
    category: "Google Shopping",
    metaDescription:
      "Google Shopping vodič sa 2+ godine UK iskustva (Chelleon £290k+): product feed optimizacija, 10 obaveznih atributa, struktura kampanja, i priprema za lansiranje u Srbiji novembar 2026.",
    featuredImage: "/blog/google-shopping-vodic.webp",
    readingTime: "16 min",
    content: <GoogleShoppingVodicSR />
  },
  {
    slug: "agencija-vs-freelancer",
    title: "Google Ads Agencija vs Freelancer vs In-House: Koju Opciju Izabrati u 2026? [€200–€2K+/mes]",
    date: "2026-01-26",
    dateModified: "2026-04-27",
    category: "Google Ads",
    metaDescription:
      "Google Ads agencija, freelancer ili in-house tim u 2026? Detaljno poređenje troškova (€200–€2.000+/mes), prednosti i mana svake opcije. Decision framework za biznise iz Srbije, regiona i EU. 67% kompanija menja partnera u prvoj godini — kako da izaberete prvi put kako treba.",
    featuredImage: "/blog/agencija-vs-freelancer.webp",
    readingTime: "11 min",
    content: <AgencijaVsFreelancerSR />
  },
  {
    slug: "conversion-tracking-vodic",
    title: "Conversion Tracking za Google Ads: Zašto Vaše Kampanje Ne Rade",
    date: "2026-01-26",
    dateModified: "2026-02-05",
    category: "Google Ads",
    metaDescription:
      "Loš conversion tracking je razlog #1 zašto Google Ads kampanje ne donose rezultate. Vodič za pravilno postavljanje tracking-a, enhanced conversions i server-side implementaciju.",
    featuredImage: "/blog/conversion-tracking-vodic.webp",
    readingTime: "13 min",
    content: <ConversionTrackingVodicSR />
  },
  {
    slug: "google-ads-greske",
    title: "Google Ads Greške: 20 Skupih Propusta u Kampanjama [2026]",
    date: "2026-01-27",
    dateModified: "2026-02-12",
    category: "Google Ads optimizacija",
    metaDescription:
      "20 najčešćih Google Ads grešaka koje koštaju novac — od loše strukture, preko bidding grešaka, do propuštenih prilika. Proverite da li pravite neku od njih.",
    featuredImage: "/blog/google-ads-greske.webp",
    readingTime: "14 min",
    content: <GoogleAdsGreskeSR />
  },
  {
    slug: "zasto-nema-rezultata",
    title: "Zašto Google Ads Kampanje Ne Donose Rezultate (i Kako to Popraviti)",
    date: "2026-01-27",
    dateModified: "2026-01-30",
    category: "Google Ads",
    metaDescription:
      "Vaše Google Ads kampanje troše budžet ali ne donose rezultate? Evo 12 najčešćih razloga zašto kampanje ne rade i konkretna rešenja za svaki problem.",
    featuredImage: "/blog/zasto-nema-rezultata.webp",
    readingTime: "10 min",
    content: <GoogleAdsNeDonosiRezultateSR />
  },
  {
    slug: "ecommerce-vs-b2b",
    title: "Google Ads za eCommerce vs B2B: Ključne Razlike u Strategiji",
    date: "2026-01-27",
    dateModified: "2026-02-08",
    category: "Google Ads",
    metaDescription:
      "Google Ads strategija za eCommerce nije ista kao za B2B. Kompletan vodič o razlikama u kampanjama, targetingu, bidding-u i merenju uspeha za oba modela poslovanja.",
    featuredImage: "/blog/ecommerce-vs-b2b.webp",
    readingTime: "13 min",
    content: <EcommerceVsB2BSR />
  },
  {
    slug: "google-ads-vs-meta",
    title: "Google Ads vs Meta Ads: Šta je Bolje za Vaš Biznis?",
    date: "2026-02-11",
    dateModified: "2026-02-14",
    category: "Google Ads",
    metaDescription:
      "Google Ads hvata kupce sa namerom, Meta Ads gradi svest. Poređenje po intent-u, CPC, conversion rate-u i ROI-u. Kada koristiti šta + kako ih kombinovati za maksimalan efekat.",
    featuredImage: "/blog/google-ads-vs-meta.webp",
    readingTime: "15 min",
    content: <GoogleAdsVsMetaAdsSR />
  },
  {
    slug: "google-ads-audit-vodic",
    title: "Google Ads Audit: Kompletan Checklist [2026]",
    date: "2026-01-27",
    dateModified: "2026-07-12",
    category: "Google Ads audit",
    metaDescription:
      "Detaljni Google Ads audit checklist sa 80+ tačaka za proveru. Pronađite probleme, optimizujte kampanje, i poboljšajte ROI.",
    featuredImage: "/blog/google-ads-audit-vodic.webp",
    readingTime: "16 min",
    content: <GoogleAdsAuditSR />
  },
  {
    slug: "kljucne-reci-vodic",
    title: "Koje ključne reči zapravo donose rezultate, a koje samo troše budžete",
    date: "2026-01-27",
    dateModified: "2026-04-27",
    category: "Google Ads keywords",
    metaDescription:
      "Ključne reči za Google Ads: tipovi po intentu (transactional, commercial, informational), match types (broad/phrase/exact), negative keywords, 7 besplatnih alata za istraživanje i šablon za organizaciju 100+ keyword-a. Koraci koje koristim sa 20+ klijenata.",
    featuredImage: "/blog/kljucne-reci-vodic.webp",
    readingTime: "14 min",
    content: <KljucneReciVodicSR />
  },
  {
    slug: "negativne-kljucne-reci",
    title: "Negative Keywords: Kompletna Lista + Strategija [2026]",
    date: "2026-01-27",
    dateModified: "2025-12-28",
    category: "Google Ads",
    metaDescription:
      "Kompletan vodič za negative keywords u Google Ads — gotove liste po industrijama, strategija dodavanja i kako sprečiti bacanje budžeta na pogrešne pretrage.",
    featuredImage: "/blog/negativne-kljucne-reci.webp",
    readingTime: "12 min",
    content: <NegativeKeywordsVodicSR />
  },
  {
    slug: "quality-score-vodic",
    title: "Quality Score: Šta Je i Kako Ga Poboljšati [2026]",
    date: "2026-01-27",
    dateModified: "2026-01-04",
    category: "Google Ads",
    metaDescription:
      "Kompletan vodič za Google Ads Quality Score — šta je, kako se računa i konkretne taktike za poboljšanje. Smanjite CPC i poboljšajte pozicije sa boljim QS.",
    featuredImage: "/blog/quality-score-vodic.webp",
    readingTime: "11 min",
    content: <QualityScoreVodicSR />
  },
  {
    slug: "remarketing-vodic",
    title: "Google Ads Remarketing Vodič 2026: 7 Audience Lista koje Smanje CPA za 50–70%",
    date: "2026-01-27",
    dateModified: "2026-04-27",
    category: "Google Ads",
    metaDescription:
      "Remarketing kampanje u Google Ads-u 2026: 7 proverenih audience lista (cart abandoners 7d, product viewers 30d, video viewers, customer match, lookalikes), GA4 integracija, i konkretan setup koji smanji CPA za 50–70% u prosečnom eCommerce nalogu.",
    featuredImage: "/blog/remarketing-vodic.webp",
    readingTime: "15 min",
    content: <RemarketingVodicSR />
  },
  {
    slug: "kako-poceti-google-ads",
    title: "Kako početi sa Google oglašavanjem: Vodič za početnike [2026]",
    date: "2026-03-01",
    dateModified: "2026-07-12",
    category: "Google Ads",
    metaDescription:
      "Kako početi sa Google oglašavanjem od nule? Korak po korak vodič za početnike — tipovi kampanja, budžet, ključne reči i najčešće greške. Sve što treba da znate pre prve kampanje.",
    featuredImage: "/blog/kako-poceti-google-ads.webp",
    readingTime: "14 min",
    content: <KakoPocetiGoogleAdsSR />
  },
  {
    slug: "rsa-vodic",
    title: "Responsive Search Ads (RSA): Character Limits + 15 Headline Primera [2026]",
    date: "2026-03-14",
    dateModified: "2026-04-09",
    category: "Google Ads",
    metaDescription:
      "Kompletan vodič za RSA oglase u Google Ads: character limit-i za headlines (30) i descriptions (90), 15 headline primera koji rade, i zašto 7-8 bolje od 15. Realni podaci iz 50+ naloga.",
    featuredImage: "/blog/rsa-vodic.webp",
    readingTime: "14 min",
    content: <RsaVodicSR />
  },
  {
    slug: "ctr-vodic",
    title: "Šta je CTR (Click-Through Rate) i Kako Ga Podići sa 2% na 8% [2026]",
    date: "2026-03-24",
    dateModified: "2026-04-17",
    category: "Google Ads",
    metaDescription:
      "Šta je CTR (Click-Through Rate)? To je procenat ljudi koji kliknu na oglas nakon što ga vide. Formula, realni benchmarks za Srbiju (Search 5-10%, Display 0.5-1%) i 7 taktika za 4x poboljšanje iz 30 naloga.",
    featuredImage: "/blog/ctr-vodic.webp",
    readingTime: "12 min",
    content: <CtrVodicSR />
  }
];

const enPosts: PostData[] = [
  {
    slug: "google-api-access-guide-for-agencies",
    title: "Google API Access for PPC Agencies: Complete Setup Guide [2026]",
    date: "2026-07-11",
    dateModified: "2026-07-11",
    category: "Automation",
    metaDescription:
      "Complete setup guide to Google API access for PPC agencies: Ads, GA4, Search Console, Tag Manager, Merchant Center, and Data Manager API. One Cloud project, OAuth scopes, and the key lesson about Testing mode killing refresh tokens after 7 days.",
    featuredImage: "/blog/google-api-pristupi-za-agencije.webp",
    readingTime: "13 min",
    content: <GoogleApiAccessGuideForAgenciesEN />
  },
  {
    slug: "google-ads-api-basic-access-guide",
    title: "Google Ads API Basic Access: Step-by-Step Guide [2026]",
    date: "2026-07-11",
    dateModified: "2026-07-11",
    category: "Automation",
    metaDescription:
      "How to get Google Ads API Basic Access in 2026: developer token setup, an application that gets approved on the first try, Cloud project linking, and the new brand verification pilot that cuts review time from weeks to hours. First-hand guide.",
    featuredImage: "/blog/google-ads-api-basic-access-vodic.webp",
    readingTime: "12 min",
    content: <GoogleAdsApiBasicAccessGuideEN />
  },
  {
    slug: "offline-conversion-import-b2b",
    title: "Offline Conversion Import for B2B: Connect Google Ads to Your CRM",
    date: "2026-07-06",
    dateModified: "2026-07-06",
    category: "Tracking",
    metaDescription:
      "Make the Google Ads algorithm learn from closed deals instead of form fills: GCLID vs Enhanced Conversions for Leads, setup for HubSpot, Salesforce and Pipedrive, MQL/SQL/Closed-won valuation, and common mistakes.",
    featuredImage: "/blog/offline-conversion-import-b2b.webp",
    readingTime: "13 min",
    content: <OfflineConversionImportB2BEN />
  },
  {
    slug: "google-ads-consultant-cost-2026",
    title: "How Much Does a Google Ads Consultant Cost in 2026? (Senior vs Agency vs Junior)",
    date: "2026-07-06",
    dateModified: "2026-07-06",
    category: "Google Ads",
    metaDescription:
      "A transparent cost breakdown: junior freelancer $250-500/mo, senior consultant $800-2,500/mo ($150-250/hr), agency $600-2,500+ plus % of spend. Pricing models, market benchmarks, and red flags in cheap offers.",
    featuredImage: "/blog/koliko-kosta-google-ads-konsultant.webp",
    readingTime: "14 min",
    content: <GoogleAdsConsultantCostEN />
  },
  {
    slug: "how-to-choose-google-ads-consultant",
    title: "How to Choose a Google Ads Consultant: 12 Questions to Ask Before Signing",
    date: "2026-07-06",
    dateModified: "2026-07-06",
    category: "Google Ads",
    metaDescription:
      "12 vetting questions to ask a Google Ads consultant or agency before signing: who actually works on the account, account ownership, tracking, billing models. Green and red flags from practice.",
    featuredImage: "/blog/kako-izabrati-google-ads-konsultanta.webp",
    readingTime: "16 min",
    content: <HowToChooseGoogleAdsConsultantEN />
  },
  {
    slug: "poas-vs-roas",
    title: "POAS vs ROAS: Why Profit-Based Bidding Changes eCommerce Advertising",
    date: "2026-07-06",
    dateModified: "2026-07-06",
    category: "Metrics",
    metaDescription:
      "POAS (Profit on Ad Spend) = profit ÷ spend. Why a 4x ROAS can still be a loss, break-even math, practical implementation (feed, custom columns), and when POAS isn't needed.",
    featuredImage: "/blog/poas-vs-roas.webp",
    readingTime: "14 min",
    content: <PoasVsRoasEN />
  },
  {
    slug: "google-ads-account-takeover-checklist",
    title: "Taking Over a Google Ads Account from an Agency: First-Week Checklist",
    date: "2026-07-06",
    dateModified: "2026-07-06",
    category: "Audit",
    metaDescription:
      "Switching Google Ads agencies? What to verify BEFORE you cut ties (account ownership, access, history export) and exactly what to do in your first week — without sudden changes that put results at risk.",
    featuredImage: "/blog/preuzimanje-google-ads-naloga.webp",
    readingTime: "16 min",
    content: <GoogleAdsAccountTakeoverChecklistEN />
  },
  {
    slug: "product-feed-serbian-ecommerce",
    title: "Product Feed for Serbian eCommerce — Complete Guide [2026]",
    date: "2026-07-04",
    dateModified: "2026-07-04",
    category: "Google Shopping",
    metaDescription:
      "Product feed guide for Serbian eCommerce: 8 required attributes, title optimization, custom labels for bidding, feed delivery by platform, and common feed errors.",
    featuredImage: "/blog/product-feed-srpski-ecommerce.webp",
    readingTime: "15 min",
    content: <ProductFeedSerbianEcommerceEN />
  },
  {
    slug: "merchant-center-serbia-setup",
    title: "Google Merchant Center for Serbia — Complete Setup Guide [2026]",
    date: "2026-07-03",
    dateModified: "2026-07-03",
    category: "Google Shopping",
    metaDescription:
      "Google Merchant Center setup guide for the Serbian market: account creation, verification, product feed attributes, feed delivery methods, common disapproval reasons, shipping/tax settings.",
    featuredImage: "/blog/merchant-center-srbija-setup.webp",
    readingTime: "14 min",
    content: <MerchantCenterSerbiaSetupEN />
  },
  {
    slug: "google-ads-audit-checklist-serbia-2026",
    title: "Google Ads Audit Checklist 2026 — 50 Points [Serbia]",
    date: "2026-05-09",
    dateModified: "2026-05-09",
    category: "Google Ads Audit",
    metaDescription:
      "A concrete 50-item checklist for auditing Google Ads accounts in Serbia. 10 categories with real examples — eCommerce, B2B, lead-gen. Scoring system and a 30-minute quick audit.",
    featuredImage: "/blog/google-ads-audit-checklist-srbija.webp",
    readingTime: "18 min",
    content: <GoogleAdsAuditChecklistSerbia2026EN />
  },
  {
    slug: "ga4-google-ads-integration",
    title: "GA4 + Google Ads Integration: Complete Setup Guide [2026]",
    date: "2026-04-26",
    dateModified: "2026-04-26",
    category: "Tracking",
    metaDescription:
      "Complete 7-step GA4 + Google Ads integration guide for 2026: link property, import key events as conversions, Primary/Secondary setup, Consent Mode v2, and troubleshooting. HowTo schema + lessons from 10+ accounts.",
    featuredImage: "/blog/ga4-google-ads-integracija.webp",
    readingTime: "18 min",
    content: <GA4GoogleAdsIntegrationEN />
  },
  {
    slug: "what-is-roas",
    title: "What is ROAS and How to Calculate It? [with Calculator] [2026]",
    date: "2026-04-26",
    dateModified: "2026-04-26",
    category: "Metrics",
    metaDescription:
      "What is ROAS (Return on Ad Spend)? Formula: ROAS = Revenue ÷ Spend. Interactive calculator, industry benchmarks, ROAS vs POAS, and 6 tactics to improve. Based on real account data.",
    featuredImage: "/blog/sta-je-roas.webp",
    readingTime: "8 min",
    content: <WhatIsRoasEN />
  },
  {
    slug: "microsoft-ads-vs-google-ads-comparison",
    title: "Microsoft Ads vs Google Ads: Complete 2026 Comparison [From the Trenches]",
    date: "2026-04-19",
    dateModified: "2026-04-23",
    category: "Strategija",
    metaDescription:
      "Microsoft Ads vs Google Ads in 2026: market share, CPC differences, when to use which platform, LinkedIn targeting advantage. From 2 years running Chelleon UK on both platforms simultaneously.",
    featuredImage: "/blog/microsoft-ads-vs-google-ads.webp",
    readingTime: "14 min",
    content: <MicrosoftAdsVsGoogleAdsEN />
  },
  {
    slug: "google-ads-for-ecommerce-serbia-2026",
    title: "Google Ads for eCommerce in Serbia: Complete 2026 Strategy [with Official Data]",
    date: "2026-04-14",
    dateModified: "2026-04-14",
    category: "eCommerce",
    metaDescription:
      "Data-driven Google Ads eCommerce strategy for Serbia 2026: 110.6M internet purchases, €3.61B market, 34% growth, top categories and tactics.",
    featuredImage: "/blog/google-ads-za-ecommerce-srbija-2026.webp",
    readingTime: "17 min",
    content: <GoogleAdsForEcommerceSerbia2026EN />
  },
  {
    slug: "smart-bidding-guide",
    title: "Smart Bidding Strategies for Google Ads: Complete 2026 Guide",
    date: "2026-04-19",
    dateModified: "2026-04-23",
    category: "Optimizacija",
    metaDescription:
      "Smart Bidding strategies in Google Ads 2026: 6 strategies (Maximize Conversions, tCPA, tROAS, more) with decision tree, conversion volume requirements, and lessons from managing 10+ accounts across UK, Serbia, and EU markets.",
    featuredImage: "/blog/smart-bidding-vodic.webp",
    readingTime: "16 min",
    content: <SmartBiddingGuideEN />
  },
  {
    slug: "google-ads-updates-2026",
    title: "Google Ads News & Updates 2026 [Updated Monthly]",
    date: "2026-04-13",
    dateModified: "2026-04-13",
    category: "Google Ads",
    metaDescription:
      "All major Google Ads changes in 2026 in one place. Shopping launch in Serbia, AI Max Text Guidelines, PMax Channel Performance, Editor 2.12. Updated monthly.",
    featuredImage: "/blog/google-ads-novosti-2026.webp",
    readingTime: "12 min",
    content: <GoogleAdsUpdates2026EN />
  },
  {
    slug: "youtube-advertising-guide",
    title: "YouTube Advertising: Complete Guide to Video Campaigns [2026]",
    date: "2026-04-13",
    dateModified: "2026-04-13",
    category: "YouTube Ads",
    metaDescription:
      "Complete YouTube advertising guide for 2026: 6 ad formats, targeting options, costs (CPV benchmarks), and strategies for eCommerce and B2B. Based on experience managing 10+ accounts.",
    featuredImage: "/blog/youtube-oglasavanje-vodic.webp",
    readingTime: "16 min",
    content: <YouTubeAdvertisingGuideEN />
  },
  {
    slug: "google-shopping-serbia-2026",
    title: "Google Shopping Launches in Serbia November 2026: Complete Preparation Guide",
    date: "2026-04-09",
    dateModified: "2026-07-12",
    category: "Google Shopping",
    metaDescription:
      "Google Shopping Ads launches in Serbia in November 2026 and across Croatia, BiH and Slovenia in Q4 2026. Full guide with 15-step checklist, Merchant Center setup, product feed optimisation, and lessons from 2+ years of UK Shopping campaigns (Chelleon, £290k+ revenue).",
    featuredImage: "/blog/google-shopping-srbija-2026.webp",
    readingTime: "18 min",
    content: <GoogleShoppingSerbiaLaunch2026EN />
  },
  {
    slug: "how-much-does-google-ads-cost",
    title: "How Much Does Google Ads Cost in 2026? Real CPCs + Budget Guide ($500–$50K/mo)",
    date: "2026-01-26",
    dateModified: "2026-04-22",
    category: "Google Ads",
    metaDescription:
      "Google Ads costs $0.50–$5 per click on average — but your real spend depends on industry, competition, and goals. Actual CPC data across 10+ industries, minimum budgets from $500/mo, and the ROI framework 20+ clients use to scale profitably.",
    featuredImage: "/blog/koliko-kosta-google-ads.webp",
    readingTime: "12 min",
    content: <HowMuchDoesGoogleAdsCostEN />
  },
  {
    slug: "google-advertising-for-businesses",
    title: "Google Ads for Businesses: B2B & eCommerce Guide [2026]",
    date: "2026-01-26",
    dateModified: "2026-02-07",
    category: "Google Advertising",
    metaDescription:
      "Complete Google Ads guide for businesses. B2B and eCommerce strategies, campaign types, budgeting and measuring results — all in one place.",
    readingTime: "15 min",
    content: <GoogleAdvertisingForBusinessesEN />
  },
  {
    slug: "performance-max-guide",
    title: "Performance Max Campaigns: Guide for eCommerce and B2B [2026]",
    date: "2026-01-26",
    dateModified: "2026-01-31",
    category: "Performance Max",
    metaDescription:
      "Everything about Performance Max campaigns — how they work, when to use them, structure, asset groups, and optimization strategies. Guide based on real results.",
    readingTime: "14 min",
    content: <PerformanceMaxGuideEN />
  },
  {
    slug: "google-ads-optimization",
    title: "Google Ads Optimization 2026: 30 Tactics to Lift ROAS 40%",
    date: "2026-01-17",
    dateModified: "2026-07-12",
    category: "Optimization",
    metaDescription:
      "30 Google Ads optimization tactics tested on 20+ eCommerce and B2B accounts — Smart Bidding, negative keywords, Quality Score, landing pages. Average 40% ROAS lift in 90 days.",
    readingTime: "18 min",
    content: <GoogleAdsOptimizationEN />
  },
  {
    slug: "google-shopping-guide",
    title: "Google Shopping Campaigns: How to Increase ROAS [Guide 2026]",
    date: "2026-01-26",
    dateModified: "2026-02-03",
    category: "Google Shopping",
    metaDescription:
      "Complete guide to Google Shopping campaigns. Product feed optimization, campaign structure, bidding strategies and tactics for increasing ROAS — based on real results.",
    readingTime: "16 min",
    content: <GoogleShoppingGuideEN />
  },
  {
    slug: "google-ads-agency-vs-freelancer",
    title: "Google Ads Agency vs Freelancer vs In-House — Which Should You Hire in 2026?",
    date: "2026-01-26",
    dateModified: "2026-04-17",
    category: "Google Ads",
    metaDescription:
      "Google Ads agency vs freelancer vs in-house team: detailed cost comparison ($200–$2,000+/mo), pros and cons, and a decision framework. 67% of companies switch partners in year 1 — here's how to pick right the first time.",
    featuredImage: "/blog/agencija-vs-freelancer.webp",
    readingTime: "11 min",
    content: <AgencyVsFreelancerEN />
  },
  {
    slug: "conversion-tracking-guide",
    title: "Conversion Tracking for Google Ads: Why Your Campaigns Aren't Working",
    date: "2026-01-26",
    dateModified: "2026-02-05",
    category: "Google Ads",
    metaDescription:
      "Poor conversion tracking is the #1 reason Google Ads campaigns fail. Guide to proper tracking setup, enhanced conversions, and server-side implementation.",
    readingTime: "13 min",
    content: <ConversionTrackingGuideEN />
  },
  {
    slug: "google-ads-mistakes",
    title: "Google Ads Mistakes: 20 Costly Errors in Your Campaigns [2026]",
    date: "2026-01-27",
    dateModified: "2026-02-12",
    category: "Google Ads Optimization",
    metaDescription:
      "20 most common Google Ads mistakes that cost money — from poor structure, through bidding errors, to missed opportunities. Check if you're making any of them.",
    readingTime: "14 min",
    content: <GoogleAdsMistakesEN />
  },
  {
    slug: "why-google-ads-not-working",
    title: "Why Google Ads Isn't Working: Fixes That Work [2026]",
    date: "2026-01-27",
    dateModified: "2026-01-30",
    category: "Google Ads",
    metaDescription:
      "Google Ads spending budget but no results? 12 most common reasons campaigns fail and concrete solutions for each problem.",
    readingTime: "10 min",
    content: <WhyGoogleAdsNotWorkingEN />
  },
  {
    slug: "google-ads-ecommerce-vs-b2b",
    title: "Google Ads for eCommerce vs B2B: Key Strategy Differences",
    date: "2026-01-27",
    dateModified: "2026-02-08",
    category: "Google Ads",
    metaDescription:
      "Google Ads for eCommerce vs B2B: key differences in campaigns, targeting, bidding, and measuring success. Choose the right strategy for your business.",
    readingTime: "13 min",
    content: <EcommerceVsB2BEN />
  },
  {
    slug: "google-ads-vs-meta-ads",
    title: "Google Ads vs Meta Ads: Which Is Better for Your Business?",
    date: "2026-02-11",
    dateModified: "2026-02-14",
    category: "Google Ads",
    metaDescription:
      "Google Ads vs Meta Ads: comparison by intent, CPC, conversion rates, and ROI. When to use which and how to combine them for maximum results.",
    readingTime: "15 min",
    content: <GoogleAdsVsMetaAdsEN />
  },
  {
    slug: "google-ads-audit-checklist",
    title: "Google Ads Audit Checklist 2026: 80+ Points, 1-Hour Audit",
    date: "2026-01-27",
    dateModified: "2026-07-12",
    category: "Google Ads Audit",
    metaDescription:
      "Free 80+ point Google Ads audit checklist for 2026. Find wasted spend in 60 minutes — conversion tracking, Smart Bidding, Quality Score, negatives. Tested on 20+ accounts.",
    readingTime: "16 min",
    content: <GoogleAdsAuditGuideEN />
  },
  {
    slug: "google-ads-keyword-guide",
    title: "Which Keywords Actually Bring Customers — And Which Ones Just Burn Your Budget",
    date: "2026-01-27",
    dateModified: "2026-05-25",
    category: "Google Ads Keywords",
    metaDescription:
      "What separates Google Ads keywords that bring paying customers from those that just drain your budget. Match types, intent classification, negative keywords, and lessons from 20+ accounts I've personally managed.",
    readingTime: "14 min",
    content: <KeywordGuideEN />
  },
  {
    slug: "negative-keywords-guide",
    title: "Comprehensive Negative Keywords List for Google Ads: 200+ Universal + 7 Industry Lists [2026]",
    date: "2026-01-27",
    dateModified: "2026-04-27",
    category: "Google Ads",
    metaDescription:
      "Complete negative keywords list for Google Ads (200+ entries across 7 categories): universal negatives, eCommerce, B2B, SaaS, Local Service, Lead Gen + competitor blocks. Strategy and match types that cut wasted spend by 20-40% in 30 days.",
    readingTime: "12 min",
    content: <NegativeKeywordsGuideEN />
  },
  {
    slug: "quality-score-guide",
    title: "Quality Score: What It Is and How to Improve It [2026]",
    date: "2026-01-27",
    dateModified: "2026-01-04",
    category: "Google Ads",
    metaDescription:
      "Google Ads Quality Score guide — what it is, how it's calculated, and proven tactics to improve it. Lower CPC and boost ad positions.",
    readingTime: "11 min",
    content: <QualityScoreGuideEN />
  },
  {
    slug: "remarketing-guide",
    title: "Google Ads Remarketing: Complete Guide [2026]",
    date: "2026-01-27",
    dateModified: "2026-02-11",
    category: "Google Ads",
    metaDescription:
      "Learn how to launch Google Ads remarketing campaigns that bring back visitors and reduce CPA by 50-70%. Guide with segmentation, strategies, and real examples.",
    readingTime: "15 min",
    content: <RemarketingGuideEN />
  },
  {
    slug: "how-to-start-google-ads",
    title: "How to Start with Google Ads: Beginner's Guide [2026]",
    date: "2026-03-01",
    dateModified: "2026-07-12",
    category: "Google Ads",
    metaDescription:
      "How to start Google Ads from scratch? Step-by-step beginner guide — campaign types, budget, keywords, and common mistakes. Everything you need before your first campaign.",
    readingTime: "14 min",
    content: <KakoPocetiGoogleAdsEN />
  },
  {
    slug: "responsive-search-ads-guide",
    title: "RSA Guide: Responsive Search Ads Framework That Actually Works [2026]",
    date: "2026-03-14",
    dateModified: "2026-03-14",
    category: "Google Ads",
    metaDescription:
      "Responsive Search Ads framework with 7-8 headlines instead of 15, angle-based slot distribution, testing and optimisation. Guide backed by State of PPC 2026 data and real campaign results.",
    readingTime: "14 min",
    content: <RsaGuideEN />
  },
  {
    slug: "ctr-guide",
    title: "CTR (Click-Through Rate): What It Is, Formula & How to Improve [2026]",
    date: "2026-03-24",
    dateModified: "2026-03-24",
    category: "Google Ads",
    metaDescription:
      "What is CTR (Click-Through Rate) in Google Ads? Formula, benchmarks by campaign type, diagnosing low CTR, and 7 proven tactics to improve your click-through rate.",
    readingTime: "12 min",
    content: <CtrGuideEN />
  }
];

// Export raw arrays for sitemap and other consumers that need full metadata
export { srPosts, enPosts };

export function getPost(slug: string, locale: string): PostData | undefined {
  const posts = locale === "en" ? enPosts : srPosts;
  return posts.find((p) => p.slug === slug);
}

/** Get all slugs for a specific locale (or SR by default) */
export function getAllSlugs(locale?: string): string[] {
  if (locale === "en") {
    return enPosts.map((p) => p.slug);
  }
  return srPosts.map((p) => p.slug);
}

/** Get the next post in the list (for "Read Next" navigation) */
export function getNextPost(slug: string, locale: string): PostData | undefined {
  const posts = locale === "en" ? enPosts : srPosts;
  const idx = posts.findIndex((p) => p.slug === slug);
  if (idx === -1 || idx >= posts.length - 1) return posts[0]; // wrap to first
  return posts[idx + 1];
}

/** Check if a slug is a valid SR slug that has an EN equivalent */
export function isCanonicalSlug(slug: string): boolean {
  return slug in slugMap;
}
