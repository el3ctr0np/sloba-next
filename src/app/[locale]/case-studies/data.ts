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
  testimonial?: { quote: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ankibuddy",
    company: "AnkiBuddy",
    category: "SaaS",
    industry: "EdTech",
    niche: "AI alat za učenje za medicinske studente",
    market: "Nemačka (DACH region)",
    period: "3 meseca saradnje",
    website: "https://ankibuddy.de",
    heroImage: "/case-studies/ankibuddy-hero.png",
    brandIntro:
      "AnkiBuddy je nemački EdTech SaaS koji koristi AI da automatski generiše Anki kartice za učenje iz PDF predavanja. Primarno tržište su medicinski studenti u DACH regionu. Marketing strategija obuhvata Google Ads, Meta, Email marketing i Campus Ambassador program.",
    challenge:
      "Kada sam preuzeo Google Ads nalog, konverzijski tracking nije razlikovao besplatan signup od plaćene pretplate — što je značilo da smart bidding nije imao tačne signale. Kampanje nisu imale jasnu strukturu za razdvajanje branded od non-branded saobraćaja, a CPA je bio izuzetno visok. Dodatni izazov bio je SaaS model sa niskom životnom vrednošću korisnika, što je zahtevalo drastično smanjenje troškova akvizicije za profitabilnost.",
    strategy:
      "Kompletna rekonstrukcija Google Ads naloga u tri faze. Prvo: tracking — implementirani micro i macro eventi, primary konverzija prebačena isključivo na plaćenu pretplatu. Drugo: struktura — branded i non-branded search razdvojeni, kampanje konsolidovane za bolje smart bidding signale. Treće: ekspanzija — remarketing Demand Gen kampanja i precizno geo-targetiranje medicinskih fakulteta širom DACH regiona. Testiran PMax za LeadGen.",
    tactics: [
      {
        title: "Tracking rekonstrukcija",
        description:
          "Implementirani micro i macro eventi (signup, trial start, subscription). Primary konverzija prebačena na plaćenu pretplatu — smart bidding je konačno dobio tačne signale za optimizaciju."
      },
      {
        title: "Konsolidacija + Branded razdvajanje",
        description:
          "Branded keywords izdvojeni u zasebnu kampanju za kontrolu impression share-a. Non-branded konsolidovan u jednu kampanju za maksimalne podatke i bolje algoritamske odluke."
      },
      {
        title: "University geo-targeting — DACH medicinski fakulteti",
        description:
          "Demand Gen kampanja sa preciznim geo-targetiranjem (1km radius) oko medicinskih fakulteta u Nemačkoj, Austriji i Švajcarskoj. Custom affinity segmenti za medicinske studente kombinovani sa remarketing listama."
      }
    ],
    results: [
      { label: "CPA", value: "-86%" },
      { label: "Pretplate (WoW)", value: "+1.200%" },
      { label: "Conv. Rate", value: "Preko 15%" },
      { label: "Struktura", value: "Aktivna i danas" }
    ],
    highlight: "CPA: -86% za 6 nedelja"
  },
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
  },
  {
    slug: "chelleon",
    company: "Chelleon",
    category: "eCommerce",
    industry: "Premium kozmetika",
    niche: "Premium nega kože — Environ & Jane Iredale",
    market: "Ujedinjeno Kraljevstvo",
    period: "2+ godine saradnje (od feb 2023)",
    website: "https://chelleon.co.uk",
    brandIntro:
      "Chelleon je porodični UK eCommerce brend specijalizovan za premium proizvode za negu kože, pre svega Environ i Jane Iredale linije. Porodično preduzeće koje vode Grant i kćerka Chelcie, prodaje kroz Shopify, a email marketing vodi kroz Klaviyo. Tržište je visoko segmentirano po demografiji, uređaju i dobu dana — što je zahtevalo precizno optimizovanu Google Ads strategiju.",
    challenge:
      "Standardna Revenue-based optimizacija nije uzimala u obzir razlike u marži između proizvoda — singl proizvodi i bundle paketi imali su drastično različitu profitabilnost, a pametno licitiranje je tretiralo sve konverzije jednako. Osim toga, nalog nije imao uvid u to koje demografske grupe, uređaji ili termini u toku dana zaista donose profit, a ne samo prihod. Bez server-side tracking-a, Google Ads algoritam je donosio odluke na osnovu pogrešnih signala.",
    strategy:
      "Implementacija ProfitMetrics server-side tracking-a zamenila je Revenue optimizaciju POAS (Profit on Ad Spend) optimizacijom — čime je algoritam po prvi put dobio tačne profitabilne signale. Duboka demografska i bihejvioralna analiza otkrila je da žene 55-64 i 65+ imaju POAS 2.12x i 2.18x respektivno, da desktop konvertuje 60% bolje od mobilnog (POAS 2.69x vs 1.68x), i da su četvrtkom vrhunski rezultati. Na osnovu ovih uvida, kampanje su restruktuirane oko bundle proizvoda kao prioriteta, sa Shopping kampanjama organizovanim po brendu za Environ liniju. Bid adjustments za uređaj, dan i sat su implementirani metodično. Paralelno, Klaviyo email sinergija je izgrađena kao kanal koji amplifikuje Google Ads saobraćaj.",
    tactics: [
      {
        title: "ProfitMetrics POAS tracking",
        description:
          "Server-side implementacija koja zamenjuje revenue-based tracking merenjem stvarnog profita po narudžbini. Algoritam za licitiranje konačno dobija tačne signale — bundle proizvodi, koji imaju 50-100% veću maržu od singla, sada dobijaju prioritet u optimizaciji."
      },
      {
        title: "Demografsko targetiranje zasnovano na podacima",
        description:
          "Analiza 12 meseci podataka otkrila je žene 55+ kao najprofitabilniji segment (POAS 2.12x-2.18x). Desktop prioritet nad mobilnim (POAS 2.69x vs 1.68x) i Thursday peak optimizacija implementirani kao bid adjustments — ne pretpostavke, već mereni uvidi."
      },
      {
        title: "Bundle-first Shopping strategija",
        description:
          "Restruktuirane Shopping kampanje daju prioritet bundle paketima nad singl proizvodima, jer je marža 50-100% viša. Brend-nivo kampanjska struktura za Environ produktnu liniju osigurava kontrolu impression share-a i precizno licitiranje."
      }
    ],
    results: [
      { label: "Prosečni POAS (12 meseci)", value: "1.78x" },
      { label: "Rekordni POAS", value: "2.22x (Black Friday 2025)" },
      { label: "Ukupni praćeni prihod", value: "£290.000+" },
      { label: "Klaviyo email prihod", value: "£90.000+" }
    ],
    highlight: "£290.000+ ukupnog prihoda uz 1.78x prosečni POAS"
  },
  {
    slug: "uk-agency-partnership",
    company: "UK Digital Agency",
    category: "B2B",
    industry: "Digitalni marketing / Agencija",
    niche: "White-label Google Ads menadžment",
    market: "Ujedinjeno Kraljevstvo",
    period: "24 meseca saradnje",
    brandIntro:
      "UK Digital Agency je britanska digitalna agencija koja je eksternalizovala kompletno Google Ads upravljanje za portfolio od 8 klijentskih naloga. Vertikale su obuhvatale eCommerce, neprofitni sektor, nakit, turizam i lead generation — svaki sa različitim KPI-jevima, budžetima i ciljevima.",
    challenge:
      "Agencija je imala rastuće klijentske zahteve koje nije mogla da podrži internim kapacitetima. Osam naloga iz potpuno različitih industrija zahtevalo je specijalizovano PPC znanje, dosledno izveštavanje i procese koji se mogu replicirati — a da se pritom svi deliverables-i prezentuju pod brendom agencije. Svaki klijent je imao drugačiji model konverzije, tržište i nivo sofisticiranosti kampanja.",
    strategy:
      "Izgrađen je white-label operativni sistem koji je agenciji omogućio da skalira bez angažovanja in-house PPC tima. Svaki od 8 naloga dobio je prilagođenu strategiju kampanja, ali je sve funkcionisalo kroz jedinstven okvir za tracking, optimizaciju i izveštavanje. Znanje stečeno u jednoj vertikali sistematski se primenjivalo na ostale — insights iz eCommerce-a poboljšavali su lead gen kampanje, a iskustvo iz neprofitnog sektora unapređivalo je pristup nišnim tržištima.",
    tactics: [
      {
        title: "Multi-nalog procesni okvir",
        description:
          "Razvijene standardne operativne procedure za tracking setup, nedeljnu optimizaciju i mesečno izveštavanje — primenljive na svih 8 naloga bez obzira na vertikalu. Procesi su osmišljeni tako da ih agencija može koristiti i nakon završetka saradnje."
      },
      {
        title: "Cross-industry optimizacija",
        description:
          "Uvidi iz eCommerce kampanja (nameštaj, pokloni, kafa) primenjivani su na lead gen i neprofitne naloge. Svaki nalog je profitirao od znanja celokupnog portfolija — ne samo sopstvenih podataka."
      },
      {
        title: "White-label sistem izveštavanja",
        description:
          "Kreirani brendirani reporting template-ovi koje je agencija koristila kao sopstveni deliverable prema klijentima. Konzistentnost formata izgradila je poverenje kod krajnjih klijenata agencije."
      }
    ],
    results: [
      { label: "Naloga pod upravljanjem", value: "8 istovremeno" },
      { label: "Vertikale", value: "5+ različitih industrija" },
      { label: "Trajanje", value: "24 meseca" },
      { label: "Procesi", value: "Preuzeti i aktivni i danas" }
    ],
    highlight: "8 UK naloga, 5 vertikala — jedan tim"
  },
  {
    slug: "mbfinance",
    company: "MBFinance",
    category: "Lead Generation",
    industry: "Finansijski konsalting",
    niche: "Finansijski konsalting i računovodstvo za mala preduzeća",
    market: "Srbija",
    period: "Jednokratni Google Ads audit",
    website: "https://mbfinancekonsalting.rs",
    brandIntro:
      "MBFinance je srpska firma za finansijski konsalting i računovodstvo, fokusirana na mala i srednja preduzeća. Kao lead gen biznis u lokalnom tržištu, Google Ads je bio primarni akvizicioni kanal — ali bez jasnog uvida u to gde odlazi budžet i šta zaista donosi klijente.",
    challenge:
      "Nalog je trošio budžet bez jasne strukture: tracking nije bio ispravan, ključne reči su privlačile irrelevantne pretrage, a ne postoje podaci o tome koje kampanje donose stvarne upite za konsalting. Klijent nije znao koliki procenat budžeta ide na otpad i da li su konverzije koje beleži sistem zaista relevantni leadovi.",
    strategy:
      "Sproveden je sveobuhvatni Google Ads audit koji je analizirao kompletnu strukturu naloga — od tracking setupa i atribucije, kroz kampanjsku arhitekturu i keyword strategiju, do identifikacije konkretnih oblasti rasipanja budžeta. Rezultat audita bio je prioritizovani akcioni plan sa jasnim koracima za implementaciju u narednih 30 dana.",
    tactics: [
      {
        title: "Audit tracking-a i atribucije",
        description:
          "Verifikacija tačnosti konverzijskog tracking-a i atribucijskog modela. Identifikovano da li sistem beleži prave akcije (pozivi, upiti, kontakt forme) ili broji irelevantne mikro-eventi kao konverzije — što direktno utiče na to kako smart bidding optimizuje nalog."
      },
      {
        title: "Analiza strukture kampanja i keyword strategije",
        description:
          "Detaljna analiza kampanjske organizacije, match tipova i liste negativnih ključnih reči. Identifikovano preklapanje keyword-a između kampanja, neadekvatni bid strategije i ad grupe bez jasnog fokusa — svaka od ovih stavki troši budžet bez proporcionalne vrednosti."
      },
      {
        title: "Identifikacija rasipanja budžeta i plan realokacije",
        description:
          "Konkretne ključne reči, kampanje i segmenti koji troše budžet bez konverzija identifikovani su i rangirani po obimu rasipanja. Priložen je 30-dnevni akcioni plan sa preporučenim realokacijama i prioritizovanim izmenama za maksimizaciju ROI-ja."
      }
    ],
    results: [
      { label: "Potencijalna ušteda budžeta", value: "20-30%" },
      { label: "Identifikovanih ključnih problema", value: "4 oblasti" },
      { label: "Akcioni plan", value: "30-dnevni roadmap" },
      { label: "Tačnost tracking-a", value: "Verifikovana i ispravljena" }
    ],
    highlight: "4 ključne oblasti za optimizaciju — 20-30% potencijalne uštede"
  },
  {
    slug: "chatislav",
    company: "Chatislav",
    category: "SaaS",
    industry: "AI / Tehnologija",
    niche: "AI chatbot platforma za srpsko i regionalno tržište",
    market: "Srbija / Ex-Yu region",
    period: "Brand awareness kampanja — launch faza",
    website: "https://chatislav.ai",
    brandIntro:
      "Chatislav je AI chatbot platforma razvijena za srpsko i Ex-Yu tržište — region gde je AI adopcija tek u ranom stadijumu, a lokalizovana rešenja retka. Kao novi igrač u emerging kategoriji, Chatislav nije imao problem sa potrošnjom — imao je problem sa vidljivošću i merenjem. Kampanja je trebalo da izgradi brend svest u tržištu koje još uvek uči šta AI chatbot može da uradi za biznis.",
    challenge:
      "Lansiranje potpuno novog AI brenda na tržištu bez uspostavljenih benchmark-ova zahtevalo je dve stvari istovremeno: izgradnju brand awareness-a i uspostavljanje mernog okvira od nule. Nije postojao tracking, nije bilo podataka o angažovanju korisnika sa AI produktom, a multi-channel pristup bez koordinisane strategije bi disperzovao budžet bez merljivog efekta.",
    strategy:
      "Pre bilo kakvog oglašavanja, izgrađen je kompletan GTM tracking framework koji je pratio 10+ custom eventi specifičnih za AI produkt — od prvog interakcije sa chatbotom do ključnih engagement signala. Na ovoj mernoj osnovi lansirana je multi-channel paid advertising strategija fokusirana na brand awareness, kombinovana sa media link strategijom za izgradnju kredibiliteta AI brenda u regionu.",
    tactics: [
      {
        title: "GTM strategija i tracking framework",
        description:
          "Implementirano 10+ custom event-a za praćenje engagement signala specifičnih za AI produkt — interakcije sa chatbotom, dubina sesije, ključne tačke konverzijskog toka. GTM setup je stvorio mernu infrastrukturu koja omogućava data-driven optimizaciju kampanja i jasniji uvid u ponašanje korisnika na platformi."
      },
      {
        title: "Multi-channel paid advertising launch",
        description:
          "Google Ads kampanje za brand awareness kombinovane sa komplementarnim kanalima, prilagođene tržištu u kome AI alati još uvek grade svest o sopstvenoj kategoriji. Strategija je balansirala reach i frekvenciju kako bi Chatislav pozicionirala kao pouzdan AI partner za biznise u regionu."
      },
      {
        title: "Media link strategija",
        description:
          "Strateško plasiranje medijskog sadržaja i link building targeting AI i tech publikacije u regionu — za izgradnju brand kredibiliteta u tržištu gde su lokalizovana AI rešenja novost. Media prisustvo je ojačavalo plaćene kampanje i dugoročno gradilo organsku vidljivost brenda."
      }
    ],
    results: [
      { label: "Custom tracking eventi", value: "10+ implementiranih" },
      { label: "Kampanjski framework", value: "Izgrađen od nule" },
      { label: "Tržište", value: "Prva AI chatbot brand awareness kampanja u Srbiji" },
      { label: "Infrastruktura", value: "Measurement-ready launch platforma" }
    ],
    highlight: "Prva AI chatbot brand awareness kampanja u Srbiji — izgrađena od nule"
  }
];

export const caseStudiesEn: CaseStudy[] = [
  {
    slug: "ankibuddy",
    company: "AnkiBuddy",
    category: "SaaS",
    industry: "EdTech",
    niche: "AI-powered study tool for medical students",
    market: "Germany (DACH region)",
    period: "3 month partnership",
    website: "https://ankibuddy.de",
    heroImage: "/case-studies/ankibuddy-hero.png",
    brandIntro:
      "AnkiBuddy is a German EdTech SaaS that uses AI to automatically generate Anki flashcards from lecture PDFs. The primary market is medical students across the DACH region. The marketing strategy spans Google Ads, Meta, Email marketing, and a Campus Ambassador program.",
    challenge:
      "When I took over the Google Ads account, conversion tracking didn't differentiate between free signups and paid subscriptions — meaning smart bidding had no accurate signals. Campaigns lacked a clear structure to separate branded from non-branded traffic, and CPA was extremely high. The additional challenge was a SaaS model with low customer lifetime value, requiring a drastic cost-per-acquisition reduction for profitability.",
    strategy:
      "Complete Google Ads account reconstruction in three phases. First: tracking — implemented micro and macro events, switched primary conversion exclusively to paid subscriptions. Second: structure — separated branded and non-branded search, consolidated campaigns for better smart bidding signals. Third: expansion — remarketing Demand Gen campaign and precision geo-targeting of medical faculties across the DACH region. Tested PMax for LeadGen.",
    tactics: [
      {
        title: "Tracking reconstruction",
        description:
          "Implemented micro and macro events (signup, trial start, subscription). Primary conversion switched to paid subscription — smart bidding finally received accurate optimization signals."
      },
      {
        title: "Consolidation + Branded separation",
        description:
          "Branded keywords isolated into a separate campaign for impression share control. Non-branded consolidated into a single campaign for maximum data and better algorithmic decisions."
      },
      {
        title: "University geo-targeting — DACH medical faculties",
        description:
          "Demand Gen campaign with precision geo-targeting (1km radius) around medical faculties in Germany, Austria, and Switzerland. Custom affinity segments for medical students combined with remarketing lists."
      }
    ],
    results: [
      { label: "CPA", value: "-86%" },
      { label: "Subscriptions", value: "+1,200% growth" },
      { label: "Conv. Rate", value: "Above 15%" },
      { label: "Structure", value: "Still active today" }
    ],
    highlight: "CPA: -86% in 6 weeks"
  },
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
  },
  {
    slug: "chelleon",
    company: "Chelleon",
    category: "eCommerce",
    industry: "Premium Skincare",
    niche: "Premium skincare — Environ & Jane Iredale",
    market: "United Kingdom",
    period: "2+ year partnership (since Feb 2023)",
    website: "https://chelleon.co.uk",
    brandIntro:
      "Chelleon is a family-run UK eCommerce brand specialising in premium skincare, primarily Environ and Jane Iredale product lines. The business is operated by Grant and his daughter Chelcie, selling through Shopify with Klaviyo powering their email marketing. The market is highly segmented by demographics, device, and time of day — requiring a precisely optimised Google Ads strategy to turn data into profit.",
    challenge:
      "Standard revenue-based optimisation ignored the significant margin difference between product types — bundle packages and single products had drastically different profitability, yet smart bidding treated all conversions equally. The account lacked visibility into which demographic groups, devices, or hours of the day actually drove profit rather than just revenue. Without server-side tracking, the Google Ads algorithm was making decisions based on the wrong signals.",
    strategy:
      "Implementing ProfitMetrics server-side tracking replaced revenue optimisation with POAS (Profit on Ad Spend) optimisation — giving the algorithm accurate profitability signals for the first time. Deep demographic and behavioural analysis revealed that women aged 55-64 and 65+ deliver POAS of 2.12x and 2.18x respectively, that desktop converts 60% better than mobile (POAS 2.69x vs 1.68x), and that Thursday drives peak performance. Based on these insights, campaigns were restructured to prioritise bundle products, with Shopping campaigns organised at brand level for the Environ range. Bid adjustments for device, day of week, and hour of day were implemented methodically. In parallel, Klaviyo email synergy was built as a channel that amplifies Google Ads traffic — with returning visitors delivering 79% higher ROAS than new visitors.",
    tactics: [
      {
        title: "ProfitMetrics POAS tracking",
        description:
          "Server-side implementation replacing revenue-based tracking with actual per-order profit measurement. The bidding algorithm finally receives accurate signals — bundle products, which carry 50-100% higher margins than singles, now receive priority in optimisation."
      },
      {
        title: "Data-driven demographic targeting",
        description:
          "Analysis of 12 months of data identified women 55+ as the most profitable segment (POAS 2.12x-2.18x). Desktop priority over mobile (POAS 2.69x vs 1.68x) and Thursday peak optimisation implemented as bid adjustments — measured insights, not assumptions."
      },
      {
        title: "Bundle-first Shopping strategy",
        description:
          "Restructured Shopping campaigns prioritise bundle packages over single products, where margins are 50-100% higher. Brand-level campaign structure for the Environ product line ensures impression share control and precise bidding across the catalogue."
      }
    ],
    results: [
      { label: "Average POAS (12 months)", value: "1.78x" },
      { label: "Peak POAS", value: "2.22x (Black Friday 2025)" },
      { label: "Total tracked revenue", value: "£290,000+" },
      { label: "Klaviyo email revenue", value: "£90,000+" }
    ],
    highlight: "£290,000+ total revenue at 1.78x average POAS"
  },
  {
    slug: "uk-agency-partnership",
    company: "UK Digital Agency",
    category: "B2B",
    industry: "Digital Marketing / Agency",
    niche: "White-label Google Ads management",
    market: "United Kingdom",
    period: "24 month partnership",
    brandIntro:
      "UK Digital Agency is a British digital agency that outsourced complete Google Ads management across a portfolio of 8 client accounts. Verticals spanned eCommerce, nonprofit, jewellery, heritage tourism, and lead generation — each with distinct KPIs, budgets, and objectives.",
    challenge:
      "The agency faced growing client demands that couldn't be supported by internal capacity. Eight accounts across entirely different industries required specialist PPC expertise, consistent reporting, and replicable processes — all while presenting every deliverable under the agency's own brand. Each client operated on a different conversion model, market, and campaign maturity level.",
    strategy:
      "A white-label operating system was built that allowed the agency to scale without hiring an in-house PPC team. Each of the 8 accounts received a tailored campaign strategy, but all ran through a unified framework for tracking, optimization, and reporting. Knowledge gained in one vertical was systematically applied to others — eCommerce insights sharpened lead gen campaigns, and nonprofit experience refined the approach to niche audiences.",
    tactics: [
      {
        title: "Multi-account process framework",
        description:
          "Developed standard operating procedures for tracking setup, weekly optimization, and monthly reporting — applicable across all 8 accounts regardless of vertical. Processes were designed to remain usable by the agency after the partnership concluded."
      },
      {
        title: "Cross-industry optimization",
        description:
          "Insights from eCommerce campaigns (furniture, gifts, coffee) were applied to lead gen and nonprofit accounts. Every account benefited from the intelligence of the full portfolio — not just its own data."
      },
      {
        title: "White-label reporting system",
        description:
          "Branded reporting templates were created that the agency delivered to their end clients as their own work product. Consistent format and quality built trust with the agency's client base across all eight accounts."
      }
    ],
    results: [
      { label: "Accounts managed", value: "8 simultaneously" },
      { label: "Verticals", value: "5+ different industries" },
      { label: "Duration", value: "24 months" },
      { label: "Processes", value: "Adopted and still in use" }
    ],
    highlight: "8 UK accounts, 5 verticals — one specialist"
  },
  {
    slug: "mbfinance",
    company: "MBFinance",
    category: "Lead Generation",
    industry: "Financial Consulting",
    niche: "Financial consulting and accounting for small businesses",
    market: "Serbia",
    period: "One-time Google Ads audit",
    website: "https://mbfinancekonsalting.rs",
    brandIntro:
      "MBFinance is a Serbian financial consulting and accounting firm focused on small and medium-sized businesses. As a lead generation business in a local market, Google Ads was the primary acquisition channel — but without clear visibility into where budget was going or what was actually bringing in clients.",
    challenge:
      "The account was spending budget without a clear structure: tracking was misconfigured, keywords were attracting irrelevant searches, and there was no reliable data on which campaigns were generating actual consulting enquiries. The client had no way to determine what percentage of their budget was wasted or whether the conversions the system reported were genuinely relevant leads.",
    strategy:
      "A comprehensive Google Ads audit was conducted covering the full account structure — from tracking setup and attribution, through campaign architecture and keyword strategy, to identifying specific budget waste areas. The audit output was a prioritised action plan with concrete implementation steps for the following 30 days.",
    tactics: [
      {
        title: "Tracking and attribution audit",
        description:
          "Verification of conversion tracking accuracy and attribution model integrity. Identified whether the system was recording the right actions (calls, enquiries, contact form submissions) or counting irrelevant micro-events as conversions — which directly affects how smart bidding optimises the account."
      },
      {
        title: "Campaign structure and keyword strategy analysis",
        description:
          "Detailed analysis of campaign organisation, match types, and negative keyword lists. Identified keyword overlap between campaigns, inadequate bid strategies, and ad groups without clear focus — each of these was consuming budget without proportional value."
      },
      {
        title: "Budget waste identification and reallocation plan",
        description:
          "Specific keywords, campaigns, and segments consuming budget without conversions were identified and ranked by waste volume. A 30-day action plan with recommended reallocations and prioritised changes was delivered to maximise ROI."
      }
    ],
    results: [
      { label: "Potential budget savings", value: "20-30%" },
      { label: "Key problem areas identified", value: "4 areas" },
      { label: "Action plan", value: "30-day roadmap" },
      { label: "Tracking accuracy", value: "Verified and corrected" }
    ],
    highlight: "4 key optimisation areas — 20-30% potential savings identified"
  },
  {
    slug: "chatislav",
    company: "Chatislav",
    category: "SaaS",
    industry: "AI / Technology",
    niche: "AI chatbot platform for the Serbian and regional market",
    market: "Serbia / Ex-Yu region",
    period: "Brand awareness campaign — launch phase",
    website: "https://chatislav.ai",
    brandIntro:
      "Chatislav is an AI chatbot platform built for the Serbian and Ex-Yu market — a region where AI adoption is still in its early stages and localised solutions are rare. As a new entrant in an emerging category, Chatislav's challenge wasn't budget — it was visibility and measurement. The campaign needed to build brand awareness in a market still learning what an AI chatbot can do for a business.",
    challenge:
      "Launching a completely new AI brand in a market without established benchmarks required two things simultaneously: building brand awareness and establishing a measurement framework from scratch. There was no tracking in place, no data on how users engaged with an AI product, and a multi-channel approach without a coordinated strategy would have dispersed the budget without measurable impact.",
    strategy:
      "Before any advertising was launched, a complete GTM tracking framework was built to capture 10+ custom events specific to the AI product — from first chatbot interaction to key engagement signals further down the funnel. On top of this measurement foundation, a multi-channel paid advertising strategy focused on brand awareness was launched, combined with a media link strategy to build credibility for an AI brand entering a new regional market.",
    tactics: [
      {
        title: "GTM strategy and tracking framework",
        description:
          "Implemented 10+ custom events to track AI product-specific engagement signals — chatbot interactions, session depth, and key conversion funnel touchpoints. The GTM setup created a measurement infrastructure enabling data-driven campaign optimisation and clear visibility into user behaviour on the platform."
      },
      {
        title: "Multi-channel paid advertising launch",
        description:
          "Google Ads brand awareness campaigns combined with complementary channels, tailored to a market where AI tools are still building category awareness. The strategy balanced reach and frequency to position Chatislav as a credible AI partner for businesses across the region."
      },
      {
        title: "Media link strategy",
        description:
          "Strategic media content placement and link building targeting AI and tech publications in the region — to build brand credibility in a market where localised AI solutions are a novelty. Media presence amplified paid campaigns and laid the groundwork for long-term organic brand visibility."
      }
    ],
    results: [
      { label: "Custom tracking events", value: "10+ implemented" },
      { label: "Campaign framework", value: "Built from scratch" },
      { label: "Market", value: "First AI chatbot brand awareness campaign in Serbia" },
      { label: "Infrastructure", value: "Measurement-ready launch platform" }
    ],
    highlight: "First AI chatbot brand awareness campaign in Serbia — built from scratch"
  }
];

export function getCaseStudiesByLocale(locale: string): CaseStudy[] {
  return locale === "en" ? caseStudiesEn : caseStudies;
}

export function getCaseStudy(slug: string, locale?: string): CaseStudy | undefined {
  const studies = locale === "en" ? caseStudiesEn : caseStudies;
  return studies.find((cs) => cs.slug === slug);
}
