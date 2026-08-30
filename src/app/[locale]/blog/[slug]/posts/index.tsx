import type { ReactNode } from "react";
import { slugMap, enToSrMap } from "./slug-map";

// Re-export slug utilities
export { slugMap, getCanonicalSlug, getEnSlug, getAlternateSlug } from "./slug-map";

// Serbian post imports
import PmaxAuditChecklistSR from "./pmax-audit-checklist/sr";
import PerformanceMaxAuditChecklistEN from "./pmax-audit-checklist/en";
import GoogleAdsBudzetSR from "./google-ads-budzet/sr";
import GoogleAdsBudgetPlanningEN from "./google-ads-budzet/en";
import GaqlReportingVodicSR from "./gaql-reporting-vodic/sr";
import GoogleAdsApiReportingGaqlEN from "./gaql-reporting-vodic/en";
import ListaNegativnihKljucnihReciSR from "./lista-negativnih-kljucnih-reci/sr";
import NegativeKeywordsListEN from "./lista-negativnih-kljucnih-reci/en";
import GoogleAdsApiAutentifikacijaSR from "./google-ads-api-autentifikacija/sr";
import GoogleAdsApiAuthenticationGuideEN from "./google-ads-api-autentifikacija/en";
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
import GoogleSearchKampanjeVodicSR from "./google-search-kampanje-vodic/sr";
import GoogleSearchCampaignsGuideEN from "./google-search-kampanje-vodic/en";
import DemandGenVodicSR from "./demand-gen-vodic/sr";
import DemandGenGuideEN from "./demand-gen-vodic/en";
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
import GoogleShoppingVsSearchKampanjeSR from "./google-shopping-vs-search-kampanje/sr";
import GoogleShoppingVsSearchCampaignsEN from "./google-shopping-vs-search-kampanje/en";
import GA4PublikeFrameworkSR from "./ga4-publike-ecommerce-framework/sr";
import GA4AudienceFrameworkEN from "./ga4-publike-ecommerce-framework/en";
import PerformanceMaxVsStandardShoppingSR from "./performance-max-vs-standard-shopping/sr";
import PerformanceMaxVsStandardShoppingEN from "./performance-max-vs-standard-shopping/en";
import MerchantCenterFeedScorecardSR from "./merchant-center-feed-scorecard/sr";
import MerchantCenterFeedScorecardEN from "./merchant-center-feed-scorecard/en";

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
  /**
   * Blog CTA segmentation by post intent.
   * "consult": low-commitment enquiry/consultation (TOFU / educational / beginner posts) -> /kontakt
   * "audit": the paid audit service page (BOFU / strategy / audit posts) -> /audit
   * Only meaningful on SR (canonical) post entries — getBlogCtaTarget() below is always
   * called with the canonical SR slug, so EN entries don't need this field set.
   * Omit to fall back to "consult" (the original default).
   */
  ctaTarget?: "audit" | "consult";
};

const srPosts: PostData[] = [
  {
    slug: "pmax-audit-checklist",
    title: "PMax Audit Checklist: 35+ Tačaka za Proveru [2026]",
    date: "2026-08-29",
    dateModified: "2026-08-29",
    category: "Performance Max",
    metaDescription:
      "Performance Max audit checklist: 38 tačaka u 8 grupa (struktura, merenje, feed, brand safety, kanali, bidding, signali) - gde proveriti i šta je crveni signal.",
    featuredImage: "/blog/pmax-audit-checklist-sr.webp",
    readingTime: "14 min",
    content: <PmaxAuditChecklistSR />,
    ctaTarget: "audit"
  },
  {
    slug: "google-ads-budzet",
    title: "Google Ads Budžet: Koliko Vam Realno Treba i Kako Ga Rasporediti [2026]",
    date: "2026-08-29",
    dateModified: "2026-08-29",
    category: "Google Ads",
    metaDescription:
      "Koliki budžet vam treba za Google Ads i kako ga rasporediti kroz faze test, optimizacija, skaliranje. Formula, pragovi i 3 računska primera.",
    featuredImage: "/blog/google-ads-budzet-sr.webp",
    readingTime: "9 min",
    content: <GoogleAdsBudzetSR />
  },
  {
    slug: "gaql-reporting-vodic",
    title: "GAQL Reporting: Google Ads API Upiti Korak po Korak [2026]",
    date: "2026-08-29",
    dateModified: "2026-08-29",
    category: "Automatizacija",
    metaDescription:
      "GAQL nije SQL - anatomija upita, search() naspram searchStream(), 12 gotovih izveštaja za copy-paste i zamke zbog kojih upiti padaju na validaciji.",
    featuredImage: "/blog/gaql-reporting-vodic-sr.webp",
    readingTime: "9 min",
    content: <GaqlReportingVodicSR />
  },
  {
    slug: "lista-negativnih-kljucnih-reci",
    title: "Lista Negativnih Ključnih Reči 2026: 400+ Termina po Kategorijama",
    date: "2026-08-29",
    dateModified: "2026-08-29",
    category: "Google Ads",
    metaDescription:
      "Lista od 400+ negativnih ključnih reči za Google Ads u 15 kategorija, sa srpskim terminima, brand safety blokom i AI promptom za prilagođavanje vašem biznisu.",
    featuredImage: "/blog/lista-negativnih-kljucnih-reci-sr.webp",
    readingTime: "12 min",
    content: <ListaNegativnihKljucnihReciSR />,
    ctaTarget: "audit"
  },
  {
    slug: "google-ads-api-autentifikacija",
    title: "Google Ads API Autentifikacija: OAuth, Service Account i Developer Token [2026]",
    date: "2026-08-29",
    dateModified: "2026-08-29",
    category: "Automatizacija",
    metaDescription:
      "Google Ads API autentifikacija bez lutanja: OAuth2 tok korak po korak, refresh token zamka od 7 dana, service account pravila i tabela čestih grešaka sa rešenjima.",
    featuredImage: "/blog/google-ads-api-autentifikacija-sr.webp",
    readingTime: "11 min",
    content: <GoogleAdsApiAutentifikacijaSR />
  },
  {
    slug: "google-search-kampanje-vodic",
    title: "Google Search kampanje: kompletan vodič [2026]",
    date: "2026-08-28",
    dateModified: "2026-08-28",
    category: "Search",
    metaDescription:
      "Kompletan vodič za Google Search kampanje 2026: AI Max suita, septembarska migracija DSA i broad match kampanja, struktura po nameri i marži, negativne ključne reči i merenje pre skaliranja.",
    featuredImage: "/blog/google-search-kampanje-vodic.webp",
    readingTime: "12 min",
    content: <GoogleSearchKampanjeVodicSR />,
    ctaTarget: "audit"
  },
  {
    slug: "demand-gen-vodic",
    title: "Demand Gen kampanje: kompletan vodič [2026]",
    date: "2026-08-28",
    dateModified: "2026-08-28",
    category: "Demand Gen",
    metaDescription:
      "Demand Gen kampanje 2026: gde se prikazuju, šta je novo (view-through optimizacija, inkrementalnost), kome imaju smisla, kreativa, publike i setup korak po korak. Poređenje sa PMax i YouTube kampanjama.",
    featuredImage: "/blog/demand-gen-vodic.webp",
    readingTime: "12 min",
    content: <DemandGenVodicSR />
  },
  {
    slug: "product-feed-optimizacija-scorecard",
    title: "Merchant Center Feed Scorecard: Ocenite i Popravite Feed",
    date: "2026-08-06",
    dateModified: "2026-08-06",
    category: "Google Shopping",
    metaDescription:
      "Ocenio sam product feed po 34 polja i dobio 33 od 100. Metod koji sami izvedete za pola sata, tri sloja feeda i pet popravki od kojih se kreće.",
    featuredImage: "/blog/gmc-feed-scorecard/fig-00-cover-sr.png",
    readingTime: "~15 min",
    content: <MerchantCenterFeedScorecardSR />
  },
  {
    slug: "ga4-publike-ecommerce-framework",
    title: "GA4 Audience Framework za eCommerce: 25 Lista, 6 Stubova, 3 Ograničenja API-ja",
    date: "2026-08-01",
    dateModified: "2026-08-01",
    category: "Tracking",
    metaDescription:
      "Kompletan GA4 audience framework za ecommerce sa ponovljenom kupovinom: svih 25 lista sa tačnom konfiguracijom, naming konvencija, pragovi aktivacije (Search 1.000 / Display 100), replenishment prozori i tri ograničenja Admin API-ja koja ruše pola win-back ideja, sa zaobilaznicama.",
    featuredImage: "/blog/ga4-publike-ecommerce-framework.webp",
    readingTime: "~16 min",
    content: <GA4PublikeFrameworkSR />
  },
  {
    slug: "performance-max-vs-standard-shopping-vodic",
    title: "Performance Max vs Standard Shopping: Šta Radi u 2026",
    date: "2026-07-19",
    dateModified: "2026-07-24",
    category: "Google Shopping",
    metaDescription:
      "Performance Max vs Standard Shopping u 2026: gde PMax pobeđuje a gde te sprži (kanibalizacija brenda, skok CPC-a), gde Standard i dalje vodi, promena iz oktobra 2024. koja je srušila stari savet i hibrid koji stvarno radi. Iz UK prakse (skincare brend, šestocifren Shopping prihod).",
    featuredImage: "/blog/performance-max-vs-standard-shopping.webp",
    readingTime: "~13 min",
    content: <PerformanceMaxVsStandardShoppingSR />
  },
  {
    slug: "google-shopping-vs-search-kampanje",
    title: "Google Shopping vs Search: Koju Kampanju za eCommerce [2026]",
    date: "2026-07-19",
    dateModified: "2026-07-24",
    category: "Google Shopping",
    metaDescription:
      "Google Shopping vs Search kampanje za eCommerce: kada koju biraš, zašto Shopping ima niži CPC, kada Search pobeđuje i zašto najjači nalozi u 2026. voze oba. Budžet split, PMax pragovi i Srbija launch (druga polovina 2026, Q3 ili Q4).",
    featuredImage: "/blog/google-shopping-vs-search-kampanje.webp",
    readingTime: "~14 min",
    content: <GoogleShoppingVsSearchKampanjeSR />
  },
  {
    slug: "google-api-pristupi-za-agencije",
    title: "Google API Pristupi za PPC Agencije - Kompletan Setup Vodič [2026]",
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
    dateModified: "2026-07-24",
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
    dateModified: "2026-07-24",
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
    content: <PoasVsRoasSR />,
    ctaTarget: "audit"
  },
  {
    slug: "preuzimanje-google-ads-naloga",
    title: "Preuzimanje Google Ads Naloga od Agencije: Šta Proveriti u Prvoj Nedelji",
    date: "2026-07-06",
    dateModified: "2026-07-06",
    category: "Audit",
    metaDescription:
      "Menjate Google Ads agenciju? Checklist šta proveriti PRE prekida (vlasništvo naloga, pristupi, izvoz istorije) i šta raditi u prvoj nedelji preuzimanja - bez naglih promena koje ugrožavaju rezultate.",
    featuredImage: "/blog/preuzimanje-google-ads-naloga.webp",
    readingTime: "14 min",
    content: <PreuzimanjeGoogleAdsNalogaSR />,
    ctaTarget: "audit"
  },
  {
    slug: "product-feed-srpski-ecommerce",
    title: "Product Feed za Srpski eCommerce - Kompletan Vodič [2026]",
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
    title: "Google Merchant Center za Srbiju - Kompletan Setup Vodič [2026]",
    date: "2026-07-03",
    dateModified: "2026-07-24",
    category: "Google Shopping",
    metaDescription:
      "Google Merchant Center setup vodič za srpsko tržište: kreiranje naloga, verifikacija, product feed atributi, metode dostave feed-a, česte greške i disapproval razlozi, shipping/tax settings. Iz prakse sa 10+ Shopping naloga.",
    featuredImage: "/blog/merchant-center-srbija-setup.webp",
    readingTime: "14 min",
    content: <MerchantCenterSrbijaSetupSR />
  },
  {
    slug: "google-ads-audit-checklist-srbija",
    title: "Google Ads Audit Checklist 2026 - 50 Stavki [Srbija]",
    date: "2026-05-09",
    dateModified: "2026-07-24",
    category: "Google Ads Audit",
    metaDescription:
      "Konkretan checklist od 50 stavki za audit Google Ads naloga u Srbiji. 10 kategorija sa primerima iz prakse - eCommerce, B2B, lead-gen. Scoring sistem i 30-min brzi audit.",
    featuredImage: "/blog/google-ads-audit-checklist-srbija.webp",
    readingTime: "18 min",
    content: <GoogleAdsAuditChecklistSrbijaSR />,
    ctaTarget: "audit"
  },
  {
    slug: "ga4-google-ads-integracija",
    title: "GA4 + Google Ads Integracija: Kompletan Setup Vodič [2026]",
    date: "2026-04-26",
    dateModified: "2026-07-24",
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
    dateModified: "2026-07-24",
    category: "Strategija",
    metaDescription:
      "Microsoft Ads vs Google Ads u 2026: market share, CPC razlike, kada koristiti koju platformu, LinkedIn targeting prednost. Iz 2 godine rada sa UK skincare brendom na obe platforme istovremeno.",
    featuredImage: "/blog/microsoft-ads-vs-google-ads.webp",
    readingTime: "14 min",
    content: <MicrosoftAdsVsGoogleAdsSR />
  },
  {
    slug: "google-ads-za-ecommerce-srbija-2026",
    title: "Google Ads za eCommerce u Srbiji: Kompletna Strategija za 2026 [sa Zvaničnim Podacima]",
    date: "2026-04-14",
    dateModified: "2026-07-24",
    category: "eCommerce",
    metaDescription:
      "Data-driven vodič za Google Ads eCommerce strategiju u Srbiji 2026: 110.6M internet kupovina, €3.61B tržište, rast 34%, top kategorije, benchmarks i taktike. Bazirano na podacima NBS-a i iskustvu sa 10+ naloga.",
    featuredImage: "/blog/google-ads-za-ecommerce-srbija-2026.webp",
    readingTime: "17 min",
    content: <GoogleAdsZaEcommerceSrbija2026SR />,
    ctaTarget: "audit"
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
    content: <SmartBiddingVodicSR />,
    ctaTarget: "audit"
  },
  {
    slug: "google-ads-novosti-2026",
    title: "Google Ads Novosti i Promene 2026 [Ažurirano Mesečno]",
    date: "2026-04-13",
    dateModified: "2026-07-24",
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
    title: "Google Shopping Dolazi u Srbiju: Kompletan Vodič za Pripremu",
    date: "2026-04-09",
    dateModified: "2026-08-28",
    category: "Google Shopping",
    metaDescription:
      "Google Shopping Ads stiže u Srbiju u drugoj polovini 2026 (Q3 ili Q4) i u Hrvatsku Q4 2026. Kompletan vodič sa 15-korak checklist-om, Merchant Center setup, product feed optimizacija, i lekcije iz 2+ godine UK iskustva (skincare brend, šestocifren prihod u funtama).",
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
    dateModified: "2026-08-28",
    category: "Performance Max",
    metaDescription:
      "Performance Max kampanje u 2026: kompletna struktura asset grupa, search themes, exclusions, i 5 najčešćih grešaka koje koštaju 30-50% ROAS-a. Uključuje gotov PMax Asset Grupa template + lekcije iz 10+ naloga.",
    featuredImage: "/blog/performance-max-vodic.webp",
    readingTime: "14 min",
    content: <PerformanceMaxVodicSR />,
    ctaTarget: "audit"
  },
  {
    slug: "google-ads-optimizacija",
    title: "Google Ads Optimizacija: +20 Taktika za bolje rezultate [2026]",
    date: "2026-01-17",
    dateModified: "2026-07-12",
    category: "Optimizacija",
    metaDescription:
      "Preko +20 taktika za bolje rezultate. Kompletan vodič - bid strategije, negativne ključne reči, Quality Score, landing page i A/B testiranje. Iz prakse sa 20+ klijenata.",
    featuredImage: "/blog/google-ads-optimizacija.webp",
    readingTime: "18 min",
    content: <GoogleAdsOptimizacijaSR />,
    ctaTarget: "audit"
  },
  {
    slug: "google-shopping-vodic",
    title: "Google Shopping Kampanje: Kompletan Vodič + 2026 Srbija Launch Priprema",
    date: "2026-01-26",
    dateModified: "2026-07-24",
    category: "Google Shopping",
    metaDescription:
      "Google Shopping vodič sa 2+ godine UK iskustva (skincare brend, šestocifren prihod): product feed optimizacija, 10 obaveznih atributa, struktura kampanja, i priprema za lansiranje u Srbiji u drugoj polovini 2026 (Q3 ili Q4).",
    featuredImage: "/blog/google-shopping-vodic.webp",
    readingTime: "16 min",
    content: <GoogleShoppingVodicSR />
  },
  {
    slug: "agencija-vs-freelancer",
    title: "Google Ads Agencija vs Freelancer vs In-House: Koju Opciju Izabrati u 2026? [€300-2.500+/mes]",
    date: "2026-01-26",
    dateModified: "2026-07-24",
    category: "Google Ads",
    metaDescription:
      "Google Ads agencija, freelancer ili in-house tim u 2026? Detaljno poređenje troškova (€300-2.500+/mes), prednosti i mana svake opcije. Decision framework za biznise iz Srbije, regiona i EU. Kako da izaberete partnera prvi put kako treba.",
    featuredImage: "/blog/agencija-vs-freelancer.webp",
    readingTime: "11 min",
    content: <AgencijaVsFreelancerSR />,
    ctaTarget: "audit"
  },
  {
    slug: "conversion-tracking-vodic",
    title: "Conversion Tracking za Google Ads: Zašto Vaše Kampanje Ne Rade",
    date: "2026-01-26",
    dateModified: "2026-08-28",
    category: "Google Ads",
    metaDescription:
      "Loš conversion tracking je razlog #1 zašto Google Ads kampanje ne donose rezultate. Vodič za pravilno postavljanje GTM, GA4 i Google Ads tagova, Consent Mode v2 i Enhanced Conversions.",
    featuredImage: "/blog/conversion-tracking-vodic.webp",
    readingTime: "13 min",
    content: <ConversionTrackingVodicSR />,
    ctaTarget: "audit"
  },
  {
    slug: "google-ads-greske",
    title: "Google Ads Greške: 20 Skupih Propusta u Kampanjama [2026]",
    date: "2026-01-27",
    dateModified: "2026-07-24",
    category: "Google Ads optimizacija",
    metaDescription:
      "20 najčešćih Google Ads grešaka koje koštaju novac - od loše strukture, preko bidding grešaka, do propuštenih prilika. Proverite da li pravite neku od njih.",
    featuredImage: "/blog/google-ads-greske.webp",
    readingTime: "14 min",
    content: <GoogleAdsGreskeSR />,
    ctaTarget: "audit"
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
    content: <GoogleAdsNeDonosiRezultateSR />,
    ctaTarget: "audit"
  },
  {
    slug: "ecommerce-vs-b2b",
    title: "Google Ads za eCommerce vs B2B: Ključne Razlike u Strategiji",
    date: "2026-01-27",
    dateModified: "2026-07-24",
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
    dateModified: "2026-08-29",
    category: "Google Ads audit",
    metaDescription:
      "Google Ads audit checklist sa 100+ tačaka u 12 kategorija + template za preuzimanje (Excel/Google Sheets). Pronađite gde curi budžet pre nego što platite audit.",
    featuredImage: "/blog/google-ads-audit-vodic.webp",
    readingTime: "19 min",
    content: <GoogleAdsAuditSR />,
    ctaTarget: "audit"
  },
  {
    slug: "kljucne-reci-vodic",
    title: "Koje ključne reči zapravo donose rezultate, a koje samo troše budžete",
    date: "2026-01-27",
    dateModified: "2026-07-24",
    category: "Google Ads keywords",
    metaDescription:
      "Ključne reči za Google Ads: tipovi po intentu (transactional, commercial, informational), match types (broad/phrase/exact), negative keywords, 7 besplatnih alata za istraživanje i šablon za organizaciju 100+ keyword-a. Koraci koje koristim sa 20+ klijenata.",
    featuredImage: "/blog/kljucne-reci-vodic.webp",
    readingTime: "14 min",
    content: <KljucneReciVodicSR />
  },
  {
    slug: "negativne-kljucne-reci",
    title: "Negativne Ključne Reči: Strategija, Match Tipovi i Organizacija [2026]",
    date: "2026-01-27",
    dateModified: "2026-08-29",
    category: "Google Ads",
    metaDescription:
      "Kako rade negativne ključne reči u Google Ads: match tipovi, 5 metoda pronalaženja, organizacija po nivoima i najčešće greške koje troše budžet na pogrešne pretrage.",
    featuredImage: "/blog/negativne-kljucne-reci.webp",
    readingTime: "12 min",
    content: <NegativeKeywordsVodicSR />
  },
  {
    slug: "quality-score-vodic",
    title: "Quality Score: Šta Je i Kako Ga Poboljšati [2026]",
    date: "2026-01-27",
    dateModified: "2026-07-24",
    category: "Google Ads",
    metaDescription:
      "Kompletan vodič za Google Ads Quality Score - šta je, kako se računa i konkretne taktike za poboljšanje. Smanjite CPC i poboljšajte pozicije sa boljim QS.",
    featuredImage: "/blog/quality-score-vodic.webp",
    readingTime: "11 min",
    content: <QualityScoreVodicSR />
  },
  {
    slug: "remarketing-vodic",
    title: "Google Ads Remarketing Vodič 2026: 7 Audience Lista koje Smanje CPA za 50-70%",
    date: "2026-01-27",
    dateModified: "2026-04-27",
    category: "Google Ads",
    metaDescription:
      "Remarketing kampanje u Google Ads-u 2026: 7 proverenih audience lista (cart abandoners 7d, product viewers 30d, video viewers, customer match, lookalikes), GA4 integracija, i konkretan setup koji smanji CPA za 50-70% u prosečnom eCommerce nalogu.",
    featuredImage: "/blog/remarketing-vodic.webp",
    readingTime: "15 min",
    content: <RemarketingVodicSR />
  },
  {
    slug: "kako-poceti-google-ads",
    title: "Kako početi sa Google oglašavanjem: Vodič za početnike [2026]",
    date: "2026-03-01",
    dateModified: "2026-08-18",
    category: "Google Ads",
    metaDescription:
      "Kako početi sa Google oglašavanjem od nule? Korak po korak vodič za početnike - tipovi kampanja, budžet, ključne reči i najčešće greške. Sve što treba da znate pre prve kampanje.",
    featuredImage: "/blog/kako-poceti-google-ads.webp",
    readingTime: "14 min",
    content: <KakoPocetiGoogleAdsSR />
  },
  {
    slug: "rsa-vodic",
    title: "Responsive Search Ads (RSA): Character Limits + 15 Headline Primera [2026]",
    date: "2026-03-14",
    dateModified: "2026-07-24",
    category: "Google Ads",
    metaDescription:
      "Kompletan vodič za RSA oglase u Google Ads: character limit-i za headlines (30) i descriptions (90), 15 headline primera koji rade, i zašto 7-8 bolje od 15. Realni podaci iz 50+ naloga.",
    featuredImage: "/blog/rsa-vodic.webp",
    readingTime: "14 min",
    content: <RsaVodicSR />
  },
  {
    slug: "ctr-vodic",
    title: "Šta je CTR (Click-Through Rate) i Kako Ga Podići [2026]",
    date: "2026-03-24",
    dateModified: "2026-07-24",
    category: "Google Ads",
    metaDescription:
      "Šta je CTR (Click-Through Rate)? To je procenat ljudi koji kliknu na oglas nakon što ga vide. Formula, benchmarks po tipu kampanje (Search 5-10%, prosek 2-3%, Display 0.5-1%) i 7 taktika za podizanje CTR-a iz naloga koje vodim.",
    featuredImage: "/blog/ctr-vodic.webp",
    readingTime: "12 min",
    content: <CtrVodicSR />
  }
];

const enPosts: PostData[] = [
  {
    slug: "performance-max-audit-checklist",
    title: "Performance Max Audit Checklist: 35+ Checkpoints [2026]",
    date: "2026-08-29",
    dateModified: "2026-08-29",
    category: "Performance Max",
    metaDescription:
      "Performance Max audit checklist: 38 checkpoints across 8 groups — asset groups, feed quality, negative keywords, brand exclusions, and channel reporting.",
    featuredImage: "/blog/pmax-audit-checklist-en.webp",
    readingTime: "15 min",
    content: <PerformanceMaxAuditChecklistEN />,
    ctaTarget: "audit"
  },
  {
    slug: "google-ads-budget-planning",
    title: "Google Ads Budget: How Much You Actually Need [2026]",
    date: "2026-08-29",
    dateModified: "2026-08-29",
    category: "Google Ads",
    metaDescription:
      "Google Ads budget in three phases (test, optimize, scale): the max-CPA formula, spend by phase, when to increase, and worked examples with transparent math.",
    featuredImage: "/blog/google-ads-budzet-en.webp",
    readingTime: "13 min",
    content: <GoogleAdsBudgetPlanningEN />
  },
  {
    slug: "google-ads-api-reporting-gaql",
    title: "Google Ads API Reporting with GAQL: Anatomy + Copy-Paste Queries [2026]",
    date: "2026-08-29",
    dateModified: "2026-08-29",
    category: "Automation",
    metaDescription:
      "GAQL explained: query anatomy, search() vs searchStream(), 12 copy-paste Google Ads API reports, and the metrics/segments and micros traps that break queries.",
    featuredImage: "/blog/gaql-reporting-vodic-en.webp",
    readingTime: "11 min",
    content: <GoogleAdsApiReportingGaqlEN />
  },
  {
    slug: "negative-keywords-list",
    title: "Negative Keywords List 2026: 400+ Terms by Category (Copy-Paste)",
    date: "2026-08-29",
    dateModified: "2026-08-29",
    category: "Google Ads",
    metaDescription:
      "400+ copy-paste negative keywords across 15 categories, with brand-safety and adult blocks plus a ready AI prompt to generate a custom list for your business.",
    featuredImage: "/blog/lista-negativnih-kljucnih-reci-en.webp",
    readingTime: "12 min",
    content: <NegativeKeywordsListEN />,
    ctaTarget: "audit"
  },
  {
    slug: "google-ads-api-authentication-guide",
    title: "Google Ads API Authentication: OAuth, Service Accounts & Developer Token (2026)",
    date: "2026-08-29",
    dateModified: "2026-08-29",
    category: "Automation",
    metaDescription:
      "Google Ads API authentication explained: OAuth2 desktop vs. web flow, the 7-day refresh token trap, service account rules, and a table of common errors with fixes.",
    featuredImage: "/blog/google-ads-api-autentifikacija-en.webp",
    readingTime: "11 min",
    content: <GoogleAdsApiAuthenticationGuideEN />
  },
  {
    slug: "google-search-campaigns-guide",
    title: "Google Search Campaigns: The Complete Guide [2026]",
    date: "2026-08-28",
    dateModified: "2026-08-28",
    category: "Search",
    metaDescription:
      "The complete 2026 guide to Google Search campaigns: the AI Max suite, September migration of DSA and broad match campaigns, intent-and-margin structure, negative keywords, and measurement before scaling.",
    featuredImage: "/blog/google-search-kampanje-vodic.webp",
    readingTime: "12 min",
    content: <GoogleSearchCampaignsGuideEN />,
    ctaTarget: "audit"
  },
  {
    slug: "demand-gen-guide",
    title: "Demand Gen Campaigns: The Complete Guide [2026]",
    date: "2026-08-28",
    dateModified: "2026-08-28",
    category: "Demand Gen",
    metaDescription:
      "Demand Gen campaigns in 2026: where they show, what's new (view-through optimization, incrementality testing), who they make sense for, creative requirements, audiences, and step-by-step setup.",
    featuredImage: "/blog/demand-gen-vodic.webp",
    readingTime: "12 min",
    content: <DemandGenGuideEN />
  },
  {
    slug: "merchant-center-feed-scorecard",
    title: "Merchant Center Feed Scorecard: How to Grade a Product Feed",
    date: "2026-08-06",
    dateModified: "2026-08-06",
    category: "Google Shopping",
    metaDescription:
      "I scored a product feed across 34 attributes and got 33 out of 100. Run the same method yourself in half an hour, and see the five fixes that move first.",
    featuredImage: "/blog/gmc-feed-scorecard/fig-00-cover-en.png",
    readingTime: "~15 min",
    content: <MerchantCenterFeedScorecardEN />
  },
  {
    slug: "ga4-audiences-ecommerce-framework",
    title: "The GA4 Audience Framework for Repeat-Purchase Ecommerce: 25 Lists, 6 Layers, 3 API Limits",
    date: "2026-08-01",
    dateModified: "2026-08-01",
    category: "Tracking",
    metaDescription:
      "The complete GA4 audience framework for repeat-purchase ecommerce: all 25 lists with exact configuration, the naming convention, delivery thresholds (Search 1,000 / Display 100), replenishment windows, and the three Admin API limits that break most win-back setups, with the workaround for each.",
    featuredImage: "/blog/ga4-publike-ecommerce-framework.webp",
    readingTime: "~16 min",
    content: <GA4AudienceFrameworkEN />
  },
  {
    slug: "performance-max-vs-standard-shopping",
    title: "Performance Max vs Standard Shopping: What Works in 2026",
    date: "2026-07-19",
    dateModified: "2026-07-24",
    category: "Google Shopping",
    metaDescription:
      "Performance Max vs Standard Shopping in 2026: where PMax wins and where it burns you (brand cannibalization, CPC jumps), where Standard still wins, the October 2024 change that rewrote the old advice, and the hybrid that actually works. From UK practice (a skincare brand, six-figure Shopping revenue).",
    featuredImage: "/blog/performance-max-vs-standard-shopping.webp",
    readingTime: "~13 min",
    content: <PerformanceMaxVsStandardShoppingEN />
  },
  {
    slug: "google-shopping-vs-search-campaigns",
    title: "Google Shopping vs Search: Which to Pick for eCommerce [2026]",
    date: "2026-07-19",
    dateModified: "2026-07-24",
    category: "Google Shopping",
    metaDescription:
      "Google Shopping vs Search campaigns for eCommerce: when to pick each, why Shopping has a lower CPC, when Search wins, and why the strongest accounts in 2026 run both. Budget split, PMax thresholds, and the Serbia launch.",
    featuredImage: "/blog/google-shopping-vs-search-kampanje.webp",
    readingTime: "~14 min",
    content: <GoogleShoppingVsSearchCampaignsEN />
  },
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
    dateModified: "2026-07-24",
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
    dateModified: "2026-07-24",
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
    dateModified: "2026-07-24",
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
    dateModified: "2026-07-24",
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
    dateModified: "2026-07-24",
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
    dateModified: "2026-07-24",
    category: "Strategija",
    metaDescription:
      "Microsoft Ads vs Google Ads in 2026: market share, CPC differences, when to use which platform, LinkedIn targeting advantage. From 2 years running a UK skincare brand on both platforms simultaneously.",
    featuredImage: "/blog/microsoft-ads-vs-google-ads.webp",
    readingTime: "14 min",
    content: <MicrosoftAdsVsGoogleAdsEN />
  },
  {
    slug: "google-ads-for-ecommerce-serbia-2026",
    title: "Google Ads for eCommerce in Serbia: Complete 2026 Strategy [with Official Data]",
    date: "2026-04-14",
    dateModified: "2026-07-24",
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
    dateModified: "2026-07-24",
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
    title: "Google Shopping Launches in Serbia: Complete Preparation Guide",
    date: "2026-04-09",
    dateModified: "2026-08-28",
    category: "Google Shopping",
    metaDescription:
      "Google Shopping Ads launches in Serbia in the second half of 2026 (Q3 or Q4) and across Croatia, BiH and Slovenia in Q4 2026. Full guide with 15-step checklist, Merchant Center setup, product feed optimisation, and lessons from 2+ years of UK Shopping campaigns (a skincare brand, six-figure Shopping revenue).",
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
    dateModified: "2026-08-28",
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
    dateModified: "2026-07-24",
    category: "Google Ads",
    metaDescription:
      "Google Ads agency vs freelancer vs in-house team: detailed cost comparison ($300–$3,000+/mo), pros and cons, and a decision framework. How to pick the right partner the first time.",
    featuredImage: "/blog/agencija-vs-freelancer.webp",
    readingTime: "11 min",
    content: <AgencyVsFreelancerEN />
  },
  {
    slug: "conversion-tracking-guide",
    title: "Conversion Tracking for Google Ads: Why Your Campaigns Aren't Working",
    date: "2026-01-26",
    dateModified: "2026-08-28",
    category: "Google Ads",
    metaDescription:
      "Poor conversion tracking is the #1 reason Google Ads campaigns fail. Guide to proper GTM, GA4, and Google Ads tag setup, Consent Mode v2, and Enhanced Conversions.",
    readingTime: "13 min",
    content: <ConversionTrackingGuideEN />
  },
  {
    slug: "google-ads-mistakes",
    title: "Google Ads Mistakes: 20 Costly Errors in Your Campaigns [2026]",
    date: "2026-01-27",
    dateModified: "2026-07-24",
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
    dateModified: "2026-07-24",
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
    title: "Google Ads Audit Checklist 2026: 100+ Points, Free Template",
    date: "2026-01-27",
    dateModified: "2026-08-29",
    category: "Google Ads Audit",
    metaDescription:
      "Free 100+ point Google Ads audit checklist for 2026, plus a downloadable Excel/Google Sheets template. Find wasted spend — tracking, Smart Bidding, negatives, PMax.",
    readingTime: "19 min",
    content: <GoogleAdsAuditGuideEN />
  },
  {
    slug: "google-ads-keyword-guide",
    title: "Which Keywords Actually Bring Customers — And Which Ones Just Burn Your Budget",
    date: "2026-01-27",
    dateModified: "2026-07-24",
    category: "Google Ads Keywords",
    metaDescription:
      "What separates Google Ads keywords that bring paying customers from those that just drain your budget. Match types, intent classification, negative keywords, and lessons from 20+ accounts I've personally managed.",
    readingTime: "14 min",
    content: <KeywordGuideEN />
  },
  {
    slug: "negative-keywords-guide",
    title: "Negative Keywords Strategy for Google Ads: Match Types, Organization & Process [2026]",
    date: "2026-01-27",
    dateModified: "2026-08-29",
    category: "Google Ads",
    metaDescription:
      "How negative keywords actually work in Google Ads: match type behavior, 5 methods for finding them, a tiered organization system, and the mistakes that waste budget.",
    readingTime: "12 min",
    content: <NegativeKeywordsGuideEN />
  },
  {
    slug: "quality-score-guide",
    title: "Quality Score: What It Is and How to Improve It [2026]",
    date: "2026-01-27",
    dateModified: "2026-07-24",
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
    dateModified: "2026-07-24",
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
    dateModified: "2026-07-24",
    category: "Google Ads",
    metaDescription:
      "What is CTR (Click-Through Rate) in Google Ads? Formula, benchmarks by campaign type (Search 5-10%, average 2-3%, Display 0.5-1%), diagnosing low CTR, and 7 tactics to improve your click-through rate.",
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

/**
 * Segment the blog CTA by post intent.
 * TOFU / educational / beginner posts -> low-commitment consultation (/kontakt).
 * BOFU / strategy / audit posts -> the paid audit service page (/audit).
 * Always called with the canonical (SR) slug so SR and EN variants resolve identically —
 * see PostData.ctaTarget above, set only on the SR (canonical) post entries.
 * Posts without the field (or an unrecognized slug) fall back to "consult".
 */
export function getBlogCtaTarget(canonicalSlug: string): "audit" | "consult" {
  const post = srPosts.find((p) => p.slug === canonicalSlug);
  return post?.ctaTarget ?? "consult";
}
