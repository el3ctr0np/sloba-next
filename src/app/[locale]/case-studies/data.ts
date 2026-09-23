export type CaseStudy = {
  slug: string;
  company: string;
  category: "eCommerce" | "B2B" | "SaaS" | "Lead Generation" | "Local";
  industry: string;
  niche: string;
  market: string;
  period: string;
  website?: string;
  heroImage?: string;
  resultsImage?: string;
  brandIntro: string;
  challenge: string;
  strategy: string;
  tactics: { title: string; description: string }[];
  results: { label: string; value: string }[];
  highlight: string;
  // Explicit <title> tag text, <= 60 chars, a complete thought built only
  // from words already in company/highlight. Falls back to a mechanical
  // truncation of "company: highlight" when absent, which can cut a phrase
  // mid-word - checker rule, 23.9.
  seoTitle?: string;
  testimonial?: { quote: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "uk-skincare-ecommerce-poas",
    company: "UK eCommerce brend, premium nega kože",
    category: "eCommerce",
    industry: "Premium kozmetika",
    niche: "Premium nega kože",
    market: "Ujedinjeno Kraljevstvo",
    period: "2+ godine saradnje",
    brandIntro:
      "UK eCommerce brend iz segmenta premium nege kože. Prodaje preko sopstvene online prodavnice, primarno na britanskom tržištu. Nalog vodim više od dve godine.",
    challenge:
      "Proizvodi u katalogu imaju vrlo različitu maržu: paketi nose znatno više od pojedinačnih artikala. Kad je signal za licitiranje prihod, algoritam isto vrednuje porudžbinu sa niskom i sa visokom maržom. Posle jakog prazničnog perioda profitabilnost je padala nekoliko meseci zaredom, a uzrok nije bio jedan: remarketing koji hrani brendiranu pretragu bio je tehnički pokvaren, jedna kategorija proizvoda je stalno bila ispod praga isplativosti, a test novog tržišta nije doneo nijednu konverziju.",
    strategy:
      "Prvo sam zaustavio curenje, pa tek onda tražio rast. Uradio sam pun audit naloga i analizu povratnih posetilaca za poslednjih 120 dana. Licitiranje se oslanja na bruto profit po porudžbini (POAS), ne na prihod. Test novog tržišta sam pauzirao, budžet neisplative kategorije sveo na najprodavanije artikle, a prednost u budžetu dao paketima proizvoda. Kampanje nisam delio po publici, jer bi svaka dobila premalo podataka. Umesto toga, Shopping struktura na nivou proizvoda daje višu ponudu povratnim kupcima nego novima.",
    tactics: [
      {
        title: "Stabilizacija: zaustavljanje curenja",
        description:
          "Pun audit naloga pokazao je grupu kampanja koje su stalno ispod praga isplativosti. Pauzirao sam test novog tržišta koji nije doneo nijednu konverziju i sveo budžet neisplative kategorije na najprodavanije artikle."
      },
      {
        title: "Efikasnost: profit kao signal",
        description:
          "Licitiranje se oslanja na bruto profit po porudžbini, ne na prihod. Paketi proizvoda nose višu maržu od pojedinačnih artikala, pa dobijaju prednost u budžetu."
      },
      {
        title: "Efikasnost: povratni kupci kao osnova",
        description:
          "Analiza 120 dana pokazala je da povratni posetioci donose znatno veći povraćaj od proseka naloga. Shopping struktura na nivou proizvoda daje im višu ponudu nego novim kupcima, a nova publika ima smisla jer iz nje kasnije nastaju povratni kupci."
      }
    ],
    results: [
      { label: "Prosečan POAS (12 meseci)", value: "1.78x" },
      { label: "Saradnja", value: "2+ godine" }
    ],
    highlight: "Prosečan POAS 1.78x za 12 meseci",
    seoTitle: "UK eCommerce brend: prosečan POAS 1.78x za 12 meseci"
  },
  {
    slug: "dach-edtech-saas-tracking",
    company: "EdTech SaaS, DACH region",
    category: "SaaS",
    industry: "EdTech",
    niche: "Alat za učenje za studente medicine",
    market: "Nemačka, Austrija, Švajcarska",
    period: "3 meseca saradnje",
    brandIntro:
      "SaaS proizvod za učenje, namenjen studentima medicine u Nemačkoj, Austriji i Švajcarskoj. Prodaje se kao pretplata, uz besplatan probni period.",
    challenge:
      "Kad sam preuzeo nalog, merenje nije razlikovalo besplatnu registraciju od plaćene pretplate, pa je algoritam učio na pogrešnom signalu. Brendirana i nebrendirana pretraga bile su pomešane, a cena akvizicije previsoka za proizvod sa niskom životnom vrednošću korisnika.",
    strategy:
      "Radio sam u tri koraka. Prvo merenje: postavio sam mikro i makro događaje (registracija, početak probnog perioda, pretplata) i kao primarnu konverziju ostavio samo plaćenu pretplatu. Zatim struktura: brendiranu pretragu sam izdvojio radi kontrole udela prikazivanja, a nebrendiranu spojio u manje kampanja da svaka ima dovoljno podataka. Na kraju nov kanal: Demand Gen kampanja sa uskim geografskim ciljanjem oko medicinskih fakulteta u sve tri zemlje. Performance Max sam testirao za prikupljanje leadova.",
    tactics: [
      {
        title: "Stabilizacija: merenje",
        description:
          "Mikro i makro događaji za registraciju, početak probnog perioda i pretplatu. Primarna konverzija je samo plaćena pretplata, pa algoritam uči na onome što donosi prihod."
      },
      {
        title: "Efikasnost: struktura",
        description:
          "Brendirana pretraga u posebnoj kampanji radi kontrole udela prikazivanja. Nebrendirana spojena u manje kampanja, da svaka ima dovoljno podataka za odluke."
      },
      {
        title: "Ekspanzija: nov kanal",
        description:
          "Demand Gen kampanja sa uskim geografskim ciljanjem oko medicinskih fakulteta u Nemačkoj, Austriji i Švajcarskoj, uz liste za ponovno obraćanje."
      }
    ],
    results: [
      { label: "Primarna konverzija", value: "Samo plaćena pretplata" },
      { label: "Saradnja", value: "3 meseca" }
    ],
    highlight: "Merenje prebačeno sa registracije na plaćenu pretplatu",
    seoTitle: "EdTech SaaS, DACH: merenje prebačeno na plaćenu pretplatu"
  },
  {
    slug: "tech-startup-launch-serbia",
    company: "Tehnološki startup, Srbija",
    category: "SaaS",
    industry: "Tehnologija",
    niche: "SaaS proizvod u fazi lansiranja",
    market: "Srbija i region",
    period: "Kampanja za lansiranje brenda",
    brandIntro:
      "Domaći SaaS proizvod u novoj kategoriji, u fazi lansiranja. Tržište tek uči šta takav proizvod može da uradi za firmu, pa je prvi zadatak bila vidljivost, a merenje je moralo da postoji od prvog dana.",
    challenge:
      "Nov brend, bez ikakvog merenja i bez istorijskih podataka. Više kanala bez zajedničkog plana značilo bi rasut budžet bez merljivog efekta.",
    strategy:
      "Pre prvog oglasa postavio sam merenje u GTM-u: 10+ prilagođenih događaja koji prate interakciju sa proizvodom i ključne signale angažovanja. Na toj osnovi pokrenuo sam plaćene kampanje za prepoznatljivost brenda na više kanala, uz objave u medijima koje ciljna publika čita.",
    tactics: [
      {
        title: "Stabilizacija: merenje od nule",
        description:
          "10+ prilagođenih događaja u GTM-u: interakcija sa proizvodom, dubina sesije i ključne tačke toka. Kampanje su od prvog dana imale podatke za odluke."
      },
      {
        title: "Efikasnost: jedan plan za više kanala",
        description:
          "Google Ads kampanje za prepoznatljivost brenda, usklađene sa ostalim kanalima, sa balansom dometa i učestalosti da se budžet ne rasipa."
      },
      {
        title: "Ekspanzija: prisustvo u medijima",
        description:
          "Objave u tehnološkim medijima u regionu, da plaćene kampanje imaju kredibilitet iza sebe i da brend gradi organsku vidljivost."
      }
    ],
    results: [
      { label: "Prilagođeni događaji u merenju", value: "10+" },
      { label: "Merenje", value: "Postavljeno pre prvog oglasa" }
    ],
    highlight: "Merenje postavljeno pre prvog oglasa",
    seoTitle: "Tehnološki startup: merenje postavljeno pre prvog oglasa"
  },
  {
    slug: "finance-consulting-audit-serbia",
    company: "Firma za finansijski konsalting, Srbija",
    category: "Lead Generation",
    industry: "Finansijski konsalting",
    niche: "Računovodstvo i konsalting za mala preduzeća",
    market: "Srbija",
    period: "Jednokratni audit Google Ads naloga",
    brandIntro:
      "Domaća firma za finansijski konsalting i računovodstvo za mala i srednja preduzeća. Google Ads im je bio glavni izvor upita, ali bez jasne slike gde budžet odlazi.",
    challenge:
      "Merenje nije bilo pouzdano, ključne reči su privlačile nebitne pretrage, i nije se znalo koje kampanje donose stvarne upite za konsalting, a koje samo troše.",
    strategy:
      "Ovo je bila dijagnoza, ne implementacija. Proverio sam merenje i atribuciju, strukturu kampanja, tipove podudaranja i negativne ključne reči, pa rangirao mesta gde budžet odlazi bez upita. Isporuka je bio akcioni plan za 30 dana, poređan po prioritetu.",
    tactics: [
      {
        title: "Dijagnoza: merenje i atribucija",
        description:
          "Proverio sam da li sistem broji prave akcije (pozive, upite, kontakt forme) ili sitne događaje koji nisu upit. To direktno određuje šta pametno licitiranje uči."
      },
      {
        title: "Dijagnoza: struktura i ključne reči",
        description:
          "Preklapanje ključnih reči između kampanja, strategije licitiranja koje ne odgovaraju cilju i ad grupe bez jasnog fokusa."
      },
      {
        title: "Isporuka: plan za 30 dana",
        description:
          "Ključne reči, kampanje i segmenti bez upita, rangirani po tome koliko troše, uz redosled izmena za prvih 30 dana."
      }
    ],
    results: [
      { label: "Vrsta posla", value: "Audit, bez implementacije" },
      { label: "Isporuka", value: "Akcioni plan za 30 dana" }
    ],
    highlight: "Gde budžet odlazi bez upita, i redosled izmena za 30 dana",
    seoTitle: "Finansijski konsalting, Srbija: gde budžet odlazi bez upita"
  }
];

export const caseStudiesEn: CaseStudy[] = [
  {
    slug: "uk-skincare-ecommerce-poas",
    company: "UK premium skincare eCommerce brand",
    category: "eCommerce",
    industry: "Premium skincare",
    niche: "Premium skincare",
    market: "United Kingdom",
    period: "2+ year partnership",
    brandIntro:
      "A UK eCommerce brand in premium skincare, selling through its own online store, mainly to the British market. I have run the account for more than two years.",
    challenge:
      "Margins across the catalogue vary a lot: bundles earn far more than single products. When revenue is the bidding signal, the algorithm values a low-margin order the same as a high-margin one. After a strong holiday season, profitability fell for several months in a row, and there was no single cause: the remarketing that feeds branded search was technically broken, one product category sat below break-even month after month, and a new-market test produced zero conversions.",
    strategy:
      "I stopped the leaks first and only then looked for growth. I ran a full account audit and a 120-day analysis of returning visitors. Bidding runs on gross profit per order (POAS), not revenue. I paused the new-market test, cut the unprofitable category down to its best sellers, and gave bundles priority in the budget. I did not split campaigns by audience, because each would get too little data. Instead, a product-level Shopping structure bids higher for returning customers than for new ones.",
    tactics: [
      {
        title: "Stabilisation: stopping the leaks",
        description:
          "A full account audit surfaced a group of campaigns that kept falling below break-even. I paused the new-market test that had produced zero conversions and cut the unprofitable category down to its best sellers."
      },
      {
        title: "Efficiency: profit as the signal",
        description:
          "Bidding runs on gross profit per order, not revenue. Bundles carry a higher margin than single products, so they get priority in the budget."
      },
      {
        title: "Efficiency: returning customers as the base",
        description:
          "A 120-day analysis showed returning visitors deliver a much higher return than the account average. The product-level Shopping structure bids higher for them than for new customers, and new audiences still matter because that is where future returning customers come from."
      }
    ],
    results: [
      { label: "Average POAS (12 months)", value: "1.78x" },
      { label: "Partnership", value: "2+ years" }
    ],
    highlight: "1.78x average POAS over 12 months",
    seoTitle: "UK skincare eCommerce brand: 1.78x POAS over 12 months"
  },
  {
    slug: "dach-edtech-saas-tracking",
    company: "EdTech SaaS, DACH region",
    category: "SaaS",
    industry: "EdTech",
    niche: "Study tool for medical students",
    market: "Germany, Austria, Switzerland",
    period: "3 month partnership",
    brandIntro:
      "A SaaS study tool for medical students in Germany, Austria and Switzerland, sold as a subscription with a free trial.",
    challenge:
      "When I took over the account, tracking did not tell a free sign-up apart from a paid subscription, so the algorithm was learning from the wrong signal. Branded and non-branded search were mixed together, and acquisition cost was too high for a product with low customer lifetime value.",
    strategy:
      "I worked in three steps. Tracking first: I set up micro and macro events (sign-up, trial start, subscription) and kept only the paid subscription as the primary conversion. Then structure: I moved branded search into its own campaign to control impression share, and consolidated non-branded into fewer campaigns so each had enough data. Finally a new channel: a Demand Gen campaign with tight geo-targeting around medical faculties in all three countries. I also tested Performance Max for lead generation.",
    tactics: [
      {
        title: "Stabilisation: tracking",
        description:
          "Micro and macro events for sign-up, trial start and subscription. The paid subscription is the only primary conversion, so the algorithm learns from what brings in revenue."
      },
      {
        title: "Efficiency: structure",
        description:
          "Branded search in its own campaign to control impression share. Non-branded consolidated into fewer campaigns so each has enough data to decide."
      },
      {
        title: "Expansion: a new channel",
        description:
          "A Demand Gen campaign with tight geo-targeting around medical faculties in Germany, Austria and Switzerland, combined with remarketing lists."
      }
    ],
    results: [
      { label: "Primary conversion", value: "Paid subscription only" },
      { label: "Partnership", value: "3 months" }
    ],
    highlight: "Tracking rebuilt around paid subscriptions, not sign-ups",
    seoTitle: "EdTech SaaS, DACH: tracking rebuilt around subscriptions"
  },
  {
    slug: "tech-startup-launch-serbia",
    company: "Tech startup, Serbia",
    category: "SaaS",
    industry: "Technology",
    niche: "SaaS product at launch",
    market: "Serbia and the region",
    period: "Brand launch campaign",
    brandIntro:
      "A Serbian SaaS product in a new category, at launch. The market was still learning what this kind of product can do for a business, so the first job was visibility, and tracking had to exist from day one.",
    challenge:
      "A new brand with no tracking and no historical data. Several channels without a shared plan would have scattered the budget with no measurable effect.",
    strategy:
      "Before the first ad went live, I set up tracking in GTM: 10+ custom events covering product interaction and the key engagement signals. On that base I launched paid brand-awareness campaigns across several channels, backed by coverage in media the target audience reads.",
    tactics: [
      {
        title: "Stabilisation: tracking from zero",
        description:
          "10+ custom events in GTM: product interaction, session depth and the key steps in the flow. Campaigns had decision data from day one."
      },
      {
        title: "Efficiency: one plan across channels",
        description:
          "Google Ads brand-awareness campaigns aligned with the other channels, balancing reach and frequency so the budget was not scattered."
      },
      {
        title: "Expansion: media presence",
        description:
          "Coverage in regional tech media, so the paid campaigns had credibility behind them and the brand built organic visibility."
      }
    ],
    results: [
      { label: "Custom tracking events", value: "10+" },
      { label: "Tracking", value: "Live before the first ad" }
    ],
    highlight: "Tracking live before the first ad",
    seoTitle: "Tech startup: tracking live before the first ad"
  },
  {
    slug: "finance-consulting-audit-serbia",
    company: "Financial consulting firm, Serbia",
    category: "Lead Generation",
    industry: "Financial consulting",
    niche: "Accounting and consulting for small businesses",
    market: "Serbia",
    period: "One-time Google Ads audit",
    brandIntro:
      "A Serbian financial consulting and accounting firm serving small and mid-sized businesses. Google Ads was their main source of enquiries, with no clear view of where the budget went.",
    challenge:
      "Tracking was unreliable, keywords pulled in irrelevant searches, and nobody knew which campaigns brought real consulting enquiries and which only spent money.",
    strategy:
      "This was a diagnosis, not an implementation. I checked tracking and attribution, campaign structure, match types and negative keywords, then ranked where budget was going without producing enquiries. The deliverable was a 30-day action plan in priority order.",
    tactics: [
      {
        title: "Diagnosis: tracking and attribution",
        description:
          "I checked whether the account counted real actions (calls, enquiries, contact forms) or minor events that are not enquiries. That directly decides what smart bidding learns."
      },
      {
        title: "Diagnosis: structure and keywords",
        description:
          "Keyword overlap between campaigns, bid strategies that did not match the goal, and ad groups without a clear focus."
      },
      {
        title: "Deliverable: a 30-day plan",
        description:
          "Keywords, campaigns and segments with no enquiries, ranked by how much they spend, plus the order of changes for the first 30 days."
      }
    ],
    results: [
      { label: "Type of work", value: "Audit, no implementation" },
      { label: "Deliverable", value: "30-day action plan" }
    ],
    highlight: "Where the budget leaks, and the order of fixes for 30 days",
    seoTitle: "Financial consulting firm, Serbia: where the budget leaks"
  }
];

export function getCaseStudiesByLocale(locale: string): CaseStudy[] {
  return locale === "en" ? caseStudiesEn : caseStudies;
}

export function getCaseStudy(slug: string, locale?: string): CaseStudy | undefined {
  const studies = locale === "en" ? caseStudiesEn : caseStudies;
  return studies.find((cs) => cs.slug === slug);
}
