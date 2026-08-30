/**
 * The teaching layer for PMax Check.
 *
 * data/pmax-check.ts is auto-generated and holds the checkpoint text verbatim
 * from the guide. This file is hand-authored and holds everything that makes a
 * checkpoint answerable by someone who is not a PPC specialist: a plain-language
 * question, a concrete good/bad example, why it matters, and the two links we
 * want every checkpoint to carry — Google's own documentation, and our guide.
 *
 * Keyed by checkpoint id, so it can be filled in gradually. A checkpoint with no
 * entry here simply renders in its original, technical form.
 *
 * Every googleDoc id below was checked to resolve (200) before being added.
 * Do not add one without opening it.
 */

/** Google's help centre serves Serbian in Cyrillic, using Serbian interface
 *  terms. Our own copy deliberately keeps the English interface names, because
 *  that is what Serbian advertisers actually see in their account, so we send
 *  both locales to the English article. Flip this one constant to change that. */
const GOOGLE_DOC_LOCALE = "en";

/** Google splits its documentation across help centres; feed and product-data
 *  articles live under Merchant Center, not Google Ads. */
export type GoogleProduct = "google-ads" | "merchants";

export function googleDocUrl(
  id: string,
  product: GoogleProduct = "google-ads",
): string {
  return `https://support.google.com/${product}/answer/${id}?hl=${GOOGLE_DOC_LOCALE}`;
}

/**
 * One "read more" link.
 * - google:   Google's own documentation, by Help Centre article id
 * - industry: an independent PPC publication (never a competing agency)
 * - internal: one of our own posts, by this locale's slug
 */
export type Resource =
  | {
      kind: "google";
      docId: string;
      label: string;
      /** Defaults to the Google Ads help centre. */
      product?: GoogleProduct;
    }
  | { kind: "industry"; url: string; label: string; source: string }
  | { kind: "internal"; slug: string; label: string };

export type Teaching = {
  /** Plain-language version of the checkpoint, phrased as a question. */
  question: string;
  /** What a good answer looks like, concretely. */
  exampleGood: string;
  /** What a bad answer looks like, concretely. */
  exampleBad: string;
  /** Why this matters and when it bites. */
  why: string;
  /** Where to go deeper. Google first, then industry, then us. */
  resources: Resource[];
};

export const pmaxTeachingSR: Record<string, Teaching> = {
  "pmax-1": {
    question: "Da li su proizvodi ili usluge u jednoj asset grupi jedna tema?",
    exampleGood:
      "Zimske jakne u jednoj asset grupi, patike u drugoj, rančevi u trećoj.",
    exampleBad:
      "Jakne, patike i rančevi zajedno u jednoj grupi, jer je tako bilo brže.",
    why: "Performance Max od naslova, opisa i slika iz iste asset grupe sam sklapa oglase. Ako su u grupi nespojive stvari, sklopiće oglas u kom naslov govori o jaknama a slika pokazuje patike, i vi to nigde ne vidite kao grešku. Google preporučuje da asset grupe delite po kategoriji, temi, jeziku ili publici.",
    resources: [
      {
        kind: "google",
        docId: "14528220",
        label: "Najbolje prakse za asset grupe u PMax kampanjama",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/how-campaign-structure-shapes-google-ads-performance-481332",
        source: "Search Engine Land",
        label: "Kako struktura naloga oblikuje učinak",
      },
      {
        kind: "internal",
        slug: "performance-max-vodic",
        label: "Kako je Performance Max sastavljen",
      },
    ],
  },
  "pmax-2": {
    question: "Da li broj asset grupa prati koliko različitih stvari zaista prodajete?",
    exampleGood:
      "Prodavnica sa četiri kategorije ima četiri asset grupe, po jednu za svaku.",
    exampleBad:
      "Jedna asset grupa pokriva 500 artikala, ili dvanaest grupa deli budžet od 300 evra mesečno.",
    why: "Svaka asset grupa mora da dobije dovoljno saobraćaja da Google nauči šta u njoj radi. Previše grupa na malom budžetu znači da nijedna ne skupi dovoljno podataka. Jedna grupa preko celog kataloga znači suprotno: sve radi, ali ne vidite šta od toga zapravo prodaje. Google savetuje da grupe pravite po sekcijama i kategorijama koje već postoje na vašem sajtu.",
    resources: [
      { kind: "google", docId: "10724748", label: "Kako asset grupe funkcionišu" },
      {
        kind: "industry",
        url: "https://searchengineland.com/top-performance-max-optimization-tips-461913",
        source: "Search Engine Land",
        label: "Saveti za optimizaciju PMax kampanja u 2026.",
      },
      {
        kind: "internal",
        slug: "performance-max-vodic",
        label: "Struktura PMax naloga",
      },
    ],
  },
  "pmax-3": {
    question: "Znate li da li vam je URL expansion uključen, i da li ste tako hteli?",
    exampleGood:
      "Isključen je, jer hoćete da saobraćaj ide tačno na stranice koje ste izabrali.",
    exampleBad:
      "Uključen je zato što je tako podrazumevano, a niko nikad nije proverio gde ljudi zapravo sleću.",
    why: "Kad je uključen, Google sme da zameni vašu odabranu stranicu drugom sa istog domena, onom za koju proceni da bolje odgovara pretrazi. To ume da radi u vašu korist, ali ume i da šalje kupce na blog tekst umesto na stranicu proizvoda. Podrazumevano je uključen, pa je i odluka da ga ostavite uključenog isto odluka, samo je niko nije doneo.",
    resources: [
      {
        kind: "google",
        docId: "15995647",
        label: "Najbolje prakse za URL expansion",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/the-parts-of-performance-max-you-can-actually-control-472523",
        source: "Search Engine Land",
        label: "Šta u Performance Max-u zaista možete da kontrolišete",
      },
      {
        kind: "internal",
        slug: "performance-max-vodic",
        label: "Šta u PMax-u možete da kontrolišete",
      },
    ],
  },
  "pmax-4": {
    question: "Da li svaka asset grupa vodi na svoju stranicu, a ne na početnu?",
    exampleGood:
      "Asset grupa za zimske jakne vodi pravo na stranicu sa zimskim jaknama.",
    exampleBad:
      "Sve asset grupe vode na početnu stranu, pa kupac sam traži ono zbog čega je kliknuo.",
    why: "Svaki dodatni klik posle dolaska na sajt je mesto gde se ljudi gube. Uz to, redirekcija usput ume da pojede UTM parametre, pa vam se i merenje raspadne, a to se otkrije tek kad počnete da tražite odakle je došla prodaja.",
    resources: [
      {
        kind: "google",
        docId: "16176749",
        label: "URL opcije na nivou asset grupe",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-url-contains-targeting-functionality-performance-max-431572",
        source: "Search Engine Land",
        label: "URL pravila i isključivanje stranica u PMax-u",
      },
      {
        kind: "internal",
        slug: "zasto-nema-rezultata",
        label: "Zašto kampanja ne daje rezultate",
      },
    ],
  },
  "pmax-5": {
    question: "Da li kampanja optimizuje ka akciji koja vam zaista donosi novac?",
    exampleGood:
      "Cilj kampanje je kupovina, ili popunjena forma za ponudu koja se pretvara u posao.",
    exampleBad:
      "Cilj kampanje je klik na dugme, pregled stranice ili prijava na newsletter.",
    why: "Performance Max gura budžet ka onome što ste mu rekli da je cilj i u tome je vrlo uspešan. Ako mu je cilj klik na dugme, dobićete mnogo klikova na dugme i malo prodaje. Ovo je jedno od retkih podešavanja gde pogrešan izbor ne pokvari kampanju vidljivo, nego je tiho vodi u pogrešnom smeru mesecima.",
    resources: [
      {
        kind: "google",
        docId: "9143218",
        label: "Konverzioni ciljevi na nivou kampanje",
      },
      {
        kind: "google",
        docId: "11461796",
        label: "Primarne i sekundarne konverzione radnje",
      },
      {
        kind: "internal",
        slug: "conversion-tracking-vodic",
        label: "Praćenje konverzija od nule",
      },
    ],
  },
  "pmax-6": {
    question:
      "Da li Google broji kao konverziju samo ono što vam zaista donosi novac?",
    exampleGood:
      "Kupovina i popunjena forma za ponudu su primarne. Pregled stranice, klik na broj telefona i prijava na newsletter su sekundarne.",
    exampleBad:
      "Sve što se meri je primarno, pa Google podjednako juri kupovinu i klik na dugme Kontakt.",
    why: "PMax licitira na osnovu onoga što je označeno kao primarno, i sve u tom košu smatra jednako vrednim. Ako se u istom košu nađu kupovina od 20.000 dinara i klik na broj telefona, budžet oteče ka onome čega ima više, a to je skoro uvek jeftinija akcija. Google izričito razdvaja primarne akcije, koje ulaze u licitiranje, od sekundarnih, koje su samo za posmatranje.",
    resources: [
      {
        kind: "google",
        docId: "11461796",
        label: "Primarne i sekundarne konverzione radnje",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/auditing-the-performance-max-black-box-a-strategic-approach-457732",
        source: "Search Engine Land",
        label: "Kako se auditira PMax crna kutija",
      },
      {
        kind: "internal",
        slug: "conversion-tracking-vodic",
        label: "Praćenje konverzija od nule",
      },
    ],
  },
  "pmax-7": {
    question:
      "Da li svaka porudžbina šalje svoju stvarnu vrednost, a ne istu cifru za sve?",
    exampleGood:
      "Porudžbina od 3.000 dinara šalje 3000, porudžbina od 25.000 šalje 25000.",
    exampleBad:
      "Svaka porudžbina šalje istu vrednost, pa Google misli da je jeftina i skupa kupovina isto.",
    why: "Target ROAS je odnos vrednosti i potrošnje. Ako svaka konverzija šalje istu cifru, taj odnos je izmišljen, a Google optimizuje ka broju porudžbina umesto ka prihodu. Kampanja onda lepo izgleda u izveštaju, a prodaje uglavnom najjeftinije artikle. Google to zove transaction-specific vrednosti, nasuprot fiksnoj.",
    resources: [
      {
        kind: "google",
        docId: "6095947",
        label: "Praćenje vrednosti konverzije po transakciji",
      },
      {
        kind: "industry",
        url: "https://www.searchenginejournal.com/how-max-conversion-value-troas-bidding/494355/",
        source: "Search Engine Journal",
        label: "Max Conversion Value i tROAS bidding",
      },
      { kind: "internal", slug: "sta-je-roas", label: "Šta je ROAS" },
    ],
  },
  "pmax-8": {
    question:
      "Da li Google i dalje prepoznaje vaše kupce kad im pregledač obriše kolačiće?",
    exampleGood:
      "Enhanced conversions je uključen i status pokazuje da podaci stižu.",
    exampleBad:
      "Isključen je, a najveći deo budžeta ide kroz Smart Bidding koji se oslanja baš na te podatke.",
    why: "Kad kolačić otpadne, deo konverzija se izgubi i Google ne zna da je klik doveo do kupovine. Enhanced conversions šalje heširanu email adresu ili telefon kupca, jednosmerno šifrovanu i nečitljivu, da bi se to poklapanje ipak desilo. Smart Bidding donosi odluke na osnovu tih podataka, pa svaka izgubljena konverzija znači odluku donetu na manje podataka.",
    resources: [
      {
        kind: "google",
        docId: "15712870",
        label: "Enhanced conversions za web",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/in-google-ads-automation-everything-is-a-signal-in-2026-468218",
        source: "Search Engine Land",
        label: "U Google Ads automatizaciji je sve signal",
      },
      {
        kind: "internal",
        slug: "ga4-google-ads-integracija",
        label: "GA4 i Google Ads integracija",
      },
    ],
  },
  "pmax-9": {
    question:
      "Da li Google zna koji od vaših upita se pretvorio u posao, a koji nije?",
    exampleGood:
      "Iz CRM-a se vraća podatak koji lid je postao kupac, pa PMax uči da traži takve.",
    exampleBad:
      "PMax broji sve popunjene forme jednako, pa optimizuje ka onome ko najlakše popuni formu.",
    why: "Kod lead gena Google vidi samo da je forma popunjena. Ne zna da li je iza toga bio ozbiljan upit ili neko ko je tražio posao. Bez povratnog signala iz CRM-a algoritam juri broj lidova, ne kvalitet. Google kao jednostavniju zamenu za klasičan GCLID uvoz navodi Enhanced conversions for leads, i navodi da od 15. juna 2026. offline uvoz prelazi na Data Manager API.",
    resources: [
      { kind: "google", docId: "2998031", label: "O uvozu offline konverzija" },
      {
        kind: "industry",
        url: "https://searchengineland.com/why-performance-max-lead-generation-fails-make-it-work-393038",
        source: "Search Engine Land",
        label: "Zašto PMax za lead gen često ne uspe",
      },
      {
        kind: "internal",
        slug: "offline-conversion-import-b2b",
        label: "Uvoz offline konverzija za B2B",
      },
    ],
  },
  "pmax-10": {
    question: "Da li je prozor za konverziju duži od vašeg prodajnog ciklusa?",
    exampleGood: "B2B sa ciklusom od dva meseca ima prozor od 90 dana.",
    exampleBad:
      "Podrazumevanih 30 dana na poslu gde se odluka donosi tromesečno.",
    why: "Konverzija koja se desi posle isteka prozora se ne broji. Ne kasni, nego je nema. Google onda uči na nepotpunoj slici i potcenjuje kanale koji donose spore ali vredne kupce. Podrazumevano je 30 dana, a može se podesiti od 1 do 90.",
    resources: [
      { kind: "google", docId: "3123169", label: "O prozorima za konverziju" },
      {
        kind: "industry",
        url: "https://searchengineland.com/ppc-errors-b2b-audits-479726",
        source: "Search Engine Land",
        label: "11 PPC gresaka nadjenih u B2B auditima",
      },
      {
        kind: "internal",
        slug: "ecommerce-vs-b2b",
        label: "eCommerce naspram B2B",
      },
    ],
  },
  "pmax-21": {
    question:
      "Postoji li spisak pretraga na koje se nikad ne oglašavate, i da li ga je iko skoro pogledao?",
    exampleGood:
      "Lista na nivou naloga postoji i redovno se dopunjava terminima tipa besplatno, posao, iskustva, reklamacija.",
    exampleBad:
      "Lista ne postoji, ili stoji netaknuta od kad je nalog otvoren.",
    why: "Negativne reči na nivou naloga se automatski primenjuju na sav Search i Shopping inventar, uključujući i onaj unutar PMax kampanja. To znači da jedno mesto pokriva ceo nalog i da vas jedno održavanje štiti svuda. Google navodi ograničenje od 1.000 negativnih reči na nivou naloga i do 20 lista sa po 5.000 reči.",
    resources: [
      { kind: "google", docId: "11396330", label: "Negativne ključne reči na nivou naloga" },
      { kind: "google", docId: "2453983", label: "O listama negativnih ključnih reči" },
      { kind: "internal", slug: "negativne-kljucne-reci", label: "Negativne ključne reči" },
    ],
  },
  "pmax-22": {
    question: "Da li ste PMax kampanji rekli na koje pretrage ne sme da troši?",
    exampleGood:
      "Kampanja ima svoj spisak negativnih reči, dopunjen na osnovu izveštaja o pretragama.",
    exampleBad:
      "Nula negativnih reči na kampanji koja troši budžet već mesec dana i više.",
    why: "Limit je podignut sa 100 na 10.000 po kampanji, pa izgovora više nema. Bitna ograda: ove reči važe samo za Search i Shopping inventar unutar PMax-a, ne i za Display, YouTube, Gmail i Discover. Znači, štite vas tamo gde ide najskuplji klik, ali ne svuda.",
    resources: [
      { kind: "google", docId: "15726455", label: "Negativne ključne reči u PMax kampanjama" },
      { kind: "google", docId: "6372658", label: "Ograničenja Google Ads naloga" },
      { kind: "internal", slug: "lista-negativnih-kljucnih-reci", label: "Gotova lista negativnih ključnih reči" },
    ],
  },
  "pmax-23": {
    question:
      "Da li PMax kupuje klikove na vaše ime koje biste ionako dobili besplatno?",
    exampleGood:
      "Sopstveni brend je isključen iz PMax-a jer ga već pokriva zasebna Search brand kampanja, gde vidite i kontrolišete cenu.",
    exampleBad:
      "PMax i brand kampanja licitiraju na isto ime, a niko nije svesno tako odlučio.",
    why: "Brand pretrage su najjeftinije konverzije u nalogu i zato lepo ulepšaju PMax izveštaj, a to su ljudi koji su vas ionako tražili po imenu. Google kaže da su brand isključenja potpunije rešenje od negativnih reči, jer sama hvataju i česte greške u kucanju i povezane podbrendove. Važe za Search, Shopping i YouTube search inventar.",
    resources: [
      { kind: "google", docId: "14505308", label: "Brand isključenja u PMax i Search kampanjama" },
      {
        kind: "industry",
        url: "https://searchengineland.com/performance-max-brand-exclusions-395439",
        source: "Search Engine Land",
        label: "Kako razmišljati o brand isključenjima za PMax",
      },
      { kind: "internal", slug: "performance-max-vodic", label: "Performance Max vodič" },
    ],
  },
  "pmax-24": {
    question:
      "Ako tražite nove kupce, da li ste rekli Google-u da prestane da plaća za stare?",
    exampleGood:
      "Customer Match lista postojećih kupaca je isključena, ili je uključen New customer acquisition cilj.",
    exampleBad:
      "Budžet za akviziciju odlazi na ljude koji su već kupovali, pa remarketing izgleda kao rast.",
    why: "Postojeći kupci konvertuju najlakše, pa algoritam prirodno klizi ka njima ako mu se ne kaže drugačije. Izveštaj onda pokazuje odličan ROAS, a broj novih kupaca stoji. Google nudi dva rešenja: isključenje publike, i New customer acquisition cilj koji ili licitira više za nove ili isključivo za nove. Google upozorava da tačnost zavisi od toga koliko je vaša lista kupaca sveža.",
    resources: [
      { kind: "google", docId: "2549058", label: "Isključivanje segmenata publike" },
      {
        kind: "industry",
        url: "https://searchengineland.com/performance-max-net-new-customers-480802",
        source: "Search Engine Land",
        label: "Kako naterati PMax da gleda samo nove kupce",
      },
      { kind: "internal", slug: "remarketing-vodic", label: "Remarketing vodič" },
    ],
  },
  "pmax-25": {
    question:
      "Znate li pored kakvog sadržaja se vaš oglas pojavljivao prošlog meseca?",
    exampleGood:
      "Placement izveštaj se otvara redovno, a lista isključenja na nivou naloga postoji.",
    exampleBad:
      "Placement izveštaj nikad otvoren, pa se ne zna ni na kojim kanalima ni aplikacijama je oglas išao.",
    why: "PMax prikazuje oglase i na YouTube-u, Display mreži, Gmail-u i u Discover feed-u, a tamo se ne bira sajt po sajt. Kontrole koje Google daje su placement isključenja, content labels za nivo zrelosti sadržaja, inventory type i osetljive kategorije. Isključenja na nivou naloga se primenjuju kroz PMax, Demand Gen, YouTube i Display.",
    resources: [
      { kind: "google", docId: "13607727", label: "Brand suitability kontrole u PMax-u" },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-ads-rolls-out-account-level-placement-exclusions-467569",
        source: "Search Engine Land",
        label: "Isključenja plasmana na nivou naloga",
      },
      { kind: "internal", slug: "youtube-oglasavanje-vodic", label: "YouTube oglašavanje" },
    ],
  },
  "pmax-30": {
    question:
      "Da li ste tražili od Google-a da pogodi cilj pre nego što je uopšte imao na čemu da uči?",
    exampleGood:
      "Kampanja kreće na Maximize Conversions, pa se prelazi na Target CPA ili ROAS kad se skupi istorija.",
    exampleBad:
      "Target ROAS uključen prvog dana, na nalogu koji još nema nijednu konverziju.",
    why: "Target strategije rade tako što gledaju šta se do sada dešavalo i pokušavaju to da ponove po zadatoj ceni. Bez istorije nemaju šta da gledaju, pa kampanja ili ne troši ili troši nasumično. Google izričito savetuje da se za Target ROAS krene sa Maximize Conversions ili Target CPA, pa da se pređe kad ima dovoljno konverzija.",
    resources: [
      { kind: "google", docId: "7065882", label: "O Smart Bidding-u" },
      {
        kind: "industry",
        url: "https://searchengineland.com/your-guide-to-google-ads-smart-bidding-453765",
        source: "Search Engine Land",
        label: "Vodič kroz Google Ads Smart Bidding",
      },
      { kind: "internal", slug: "smart-bidding-vodic", label: "Smart Bidding vodič" },
    ],
  },
  "pmax-31": {
    question:
      "Da li je cilj koji ste zadali blizu onoga što nalog već postiže, ili je to želja?",
    exampleGood:
      "Cilj postavljen na nivou prošlih 30 dana, ili malo ispod, pa se zateže kad se stabilizuje.",
    exampleBad:
      "Nalog vozi ROAS 2x, a cilj je postavljen na 5x jer toliko treba da bude.",
    why: "Previše agresivan cilj ne tera Google da se potrudi više. Tera ga da prestane da licitira na sve što ne može da isporuči po toj ceni, pa kampanja utihne i troši sve manje. To liči na to da ništa ne radi, a zapravo radi tačno ono što ste tražili. Preporuka iz industrije je da se krene na nivou stvarnog ROAS-a iz prošlih 30 dana ili malo ispod.",
    resources: [
      { kind: "google", docId: "6268637", label: "O Target ROAS licitiranju" },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-ads-target-roas-454747",
        source: "Search Engine Land",
        label: "Google Ads target ROAS, sve što treba da znate",
      },
      { kind: "internal", slug: "smart-bidding-vodic", label: "Smart Bidding vodič" },
    ],
  },
  "pmax-32": {
    question:
      "Kad menjate cilj, da li ga pomerate malo po malo ili ga svaki put prepolovite?",
    exampleGood:
      "Pomeranje za 10 do 20 odjednom, pa se čeka da se skupe konverzije pre sledeće izmene.",
    exampleBad:
      "Cilj se menja svake nedelje u velikim skokovima jer brojke ne izgledaju dobro.",
    why: "Svaka izmena cilja vraća strategiju u fazu učenja, pa nalog koji se stalno dira nikad ne izađe iz nje. Google savetuje da se izbegava više izmena unutar jednog konverzionog ciklusa i da se sačeka jedan do dva ciklusa pre ocene, jer konverzije kasne. Industrijska preporuka je pomeranje od 10 do 20 odjednom.",
    resources: [
      {
        kind: "google",
        docId: "10433846",
        label: "Kako se podešavaju ciljevi kod Smart Biddinga",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-ai-bidding-breaks-take-control-466251",
        source: "Search Engine Land",
        label: "Kad Google-ov AI bidding pukne",
      },
      { kind: "internal", slug: "smart-bidding-vodic", label: "Smart Bidding vodič" },
    ],
  },
  "pmax-33": {
    question:
      "Ima li nalog dovoljno konverzija mesečno da Google uopšte ima na čemu da uči?",
    exampleGood:
      "Dovoljan i stabilan broj konverzija mesečno, pa target strategija ima od čega da računa.",
    exampleBad:
      "Target ROAS na nalogu sa svega nekoliko konverzija mesečno, gde jedna kupovina više ili manje pomeri celu sliku.",
    why: "Smart Bidding je statistika. Na malom broju konverzija je šum veći od signala, pa strategija reaguje na slučajnost. Google za Search i Shopping navodi minimum od 15 konverzija u prethodnih 30 dana za Target ROAS, ali minimum za uključivanje i broj na kom se rezultat može pouzdano čitati nisu isto.",
    resources: [
      { kind: "google", docId: "6268637", label: "O Target ROAS licitiranju" },
      { kind: "google", docId: "7065882", label: "O Smart Bidding-u" },
      { kind: "internal", slug: "smart-bidding-vodic", label: "Smart Bidding vodič" },
    ],
  },
  "pmax-34": {
    question:
      "Da li vam najbolja kampanja svaki dan udara u budžet dok slabija troši koliko hoće?",
    exampleGood:
      "Kampanja koja donosi profit ima prostora da ga donese više, a budžet se skida sa slabije.",
    exampleBad:
      "Limited by budget stoji mesecima na najboljoj kampanji, a niko ne preraspoređuje.",
    why: "Ovo je jedina tačka u listi gde ne popravljate grešku nego propuštate zaradu. Kampanja koja pogađa cilj i udara u plafon je kampanja kojoj ste vi postavili plafon. Napomena koja je sad aktuelna: Google je od 17. avgusta 2026. menjao kako bidding radi kod kampanja ograničenih budžetom, pa kod Target CPA i ROAS strategija mogu da se jave privremena kolebanja.",
    resources: [
      { kind: "google", docId: "6385220", label: "Kako rešiti status Limited by budget" },
      { kind: "google", docId: "17061251", label: "Promene kod target bidding strategija" },
      {
        kind: "industry",
        url: "https://searchengineland.com/how-google-ads-paces-caps-and-recalculates-spend-when-budgets-change-467149",
        source: "Search Engine Land",
        label: "Kako Google Ads raspoređuje potrošnju kad se budžet menja",
      },
    ],
  },
  "pmax-16": {
    question:
      "Da li naslov proizvoda liči na ono što kupac stvarno ukuca u Google?",
    exampleGood: "Nike Air Max 90 muške patike za trčanje, crne, 43",
    exampleBad: "Air Max 90, ili Patike model 4471",
    why: "Kod Shopping-a i PMax-a nema ključnih reči, pa Google spaja pretragu sa vašim proizvodom uglavnom preko naslova. Ono što nije u naslovu praktično ne postoji. Google savetuje da najvažnije ide na početak, jer se naslov skraćuje, i da se brend dodaje kad je bitan za prepoznavanje. Takođe upozorava da se u naslov ne trpaju sinonimi ni reklamni tekst.",
    resources: [
      {
        kind: "google",
        product: "merchants",
        docId: "6324415",
        label: "Atribut title i strukturirani naslov",
      },
      {
        kind: "google",
        product: "merchants",
        docId: "7380908",
        label: "Saveti za optimizaciju podataka o proizvodu",
      },
      {
        kind: "internal",
        slug: "product-feed-optimizacija-scorecard",
        label: "Scorecard za kvalitet feed-a",
      },
    ],
  },
  "pmax-17": {
    question:
      "Da li Google zna koji tačno proizvod prodajete, ili samo pogađa iz naziva?",
    exampleGood:
      "Brendirani proizvodi imaju tačan GTIN, po jedan za svaku varijantu boje i veličine.",
    exampleBad:
      "GTIN fali na brendiranoj robi, ili je popunjen izmišljenom vrednošću da bi polje bilo puno.",
    why: "GTIN je ono što Google koristi da poveže vaš oglas sa istim proizvodom kod drugih prodavaca, pa i sa recenzijama i poređenjem cena. Google izričito kaže da proizvodi kojima je GTIN dodeljen, a poslati su bez njega, mogu imati ograničenu vidljivost, i da netačan identifikator vodi u odbijanje. Isto tako kaže da GTIN ne treba nagađati ni izmišljati.",
    resources: [
      {
        kind: "google",
        product: "merchants",
        docId: "160161",
        label: "O jedinstvenim identifikatorima proizvoda",
      },
      {
        kind: "google",
        product: "merchants",
        docId: "13693497",
        label: "Kako popraviti odbijanja zbog kvaliteta podataka",
      },
      {
        kind: "internal",
        slug: "product-feed-srpski-ecommerce",
        label: "Product feed za srpski eCommerce",
      },
    ],
  },
  "pmax-18": {
    question:
      "Da li iz feed-a možete da izdvojite proizvode na kojima zarađujete od onih na kojima ne zarađujete?",
    exampleGood:
      "custom_label_0 nosi maržu (visoka, srednja, niska), custom_label_1 sezonu, pa se po tome deli budžet.",
    exampleBad:
      "Polja su prazna, ili su popunjena pa ih nijedna listing grupa ne koristi.",
    why: "Google vidi prihod, ne vidi vašu maržu. Bez custom label-a ne postoji način da mu kažete da je jedan proizvod vredniji od drugog uz isti prihod. Google dozvoljava pet oznaka po proizvodu i do 1.000 različitih vrednosti po oznaci, i navodi da se koriste baš za grupisanje u kampanjama i izveštavanju.",
    resources: [
      {
        kind: "google",
        product: "merchants",
        docId: "6324473",
        label: "Custom label 0-4",
      },
      {
        kind: "google",
        docId: "6275295",
        label: "Kako se custom labels koriste u Shopping oglasima",
      },
      { kind: "internal", slug: "google-shopping-vodic", label: "Google Shopping vodič" },
    ],
  },
  "pmax-19": {
    question:
      "Da li unutar kampanje možete da vidite koja grupa proizvoda zarađuje, a koja troši?",
    exampleGood:
      "Podela po custom label-u ili tipu proizvoda, taman toliko da se vidi šta radi.",
    exampleBad:
      "Jedna listing grupa za ceo katalog, ili stotine grupa koje niko nikad ne otvori.",
    why: "Listing grupa je jedino mesto gde u PMax-u vidite učinak po grupi proizvoda. Jedna grupa preko celog kataloga znači da imate samo jedan prosek, a prosek krije i najbolje i najgore. Suprotna krajnost je isto loša: Google navodi ograničenje od 1.000 listing grupa po asset grupi i kaže da veliki broj nije dobra praksa.",
    resources: [
      {
        kind: "google",
        docId: "11596074",
        label: "Upravljanje PMax kampanjom kroz listing grupe",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/margin-based-tracking-advanced-strategies-google-shopping-profitability-430162",
        source: "Search Engine Land",
        label: "Praćenje po marži za profitabilnost u Shopping-u",
      },
      { kind: "internal", slug: "google-shopping-vodic", label: "Google Shopping vodič" },
    ],
  },
  "pmax-20": {
    question: "Koliko vaših proizvoda trenutno uopšte ne može da se prikaže?",
    exampleGood:
      "Odbijeni artikli se drže na minimumu, a cena i dostupnost u feed-u se poklapaju sa sajtom.",
    exampleBad:
      "Odbijeni i artikli na čekanju prelaze nekoliko procenata kataloga, a niko ne otvara Diagnostics.",
    why: "Odbijen proizvod ne troši budžet, ali ni ne prodaje, i to se u izveštaju kampanje ne vidi kao problem nego kao tišina. Najčešći uzrok je neslaganje cene ili dostupnosti između feed-a i sajta, što se dešava samo od sebe kad se menja cena na sajtu. Ovo je tačka koja se kvari bez ijedne vaše izmene, pa traži ritam a ne jednokratnu popravku.",
    resources: [
      {
        kind: "google",
        product: "merchants",
        docId: "13693497",
        label: "Kako popraviti odbijanja zbog kvaliteta podataka",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/data-feed-errors-report-387598",
        source: "Search Engine Land",
        label: "5 grešaka u feed-u koje ruše eCommerce kampanje",
      },
      {
        kind: "internal",
        slug: "merchant-center-srbija-setup",
        label: "Merchant Center setup za Srbiju",
      },
    ],
  },
  "pmax-11": {
    question:
      "Znate li koji vaš naslov i koja slika zapravo rade, a koji samo stoje?",
    exampleGood:
      "Ocene se otvaraju bar jednom u kvartalu, a ono što stoji na Low duže vreme se menja.",
    exampleBad: "Ad Strength proveren jednom na lansiranju i nikad više.",
    why: "PMax sam bira koje sredstvo prikazuje, ali bira iz onoga što ste mu dali. Ako je pola seta slabo, on i dalje mora nečim da popuni format, pa se slabo prikazuje. Google savetuje da se sredstvima ostavi tri do četiri nedelje da se razrade pre nego što se sude, i da se ocene proveravaju otprilike jednom kvartalno.",
    resources: [
      { kind: "google", docId: "14143250", label: "O Ad Strength-u u Performance Max-u" },
      { kind: "google", docId: "10725056", label: "Izveštavanje o sredstvima u PMax-u" },
      { kind: "internal", slug: "google-ads-optimizacija", label: "Optimizacija Google Ads naloga" },
    ],
  },
  "pmax-12": {
    question:
      "Da li ste Google-u dali dovoljno materijala da sastavi oglas za svaki format?",
    exampleGood:
      "Popunjeni svi slotovi za tekst, slike u sva tri odnosa (pejzaž, kvadrat, portret) i bar jedan video.",
    exampleBad:
      "Tri naslova, dve slike, nijedan video, pa Ad Strength stoji na Poor.",
    why: "PMax od vaših delova sastavlja oglase za Search, Shopping, Display, YouTube, Gmail i Discover. Format za koji nema materijala se ili ne prikazuje ili se popunjava automatski generisanom verzijom. Google za najbolji učinak navodi 15 naslova, 5 opisa, bar 7 slika (3 pejzaž, 3 kvadrat, 1 portret) i bar jedan video.",
    resources: [
      { kind: "google", docId: "14528221", label: "Najbolje prakse za kreativu u PMax-u" },
      { kind: "google", docId: "10724492", label: "Napravite asset grupu" },
      { kind: "internal", slug: "rsa-vodic", label: "RSA i pisanje oglasa" },
    ],
  },
  "pmax-13": {
    question:
      "Da li vaš video oglas prikazuje vaš proizvod, ili je Google sklopio slajdšou od vaših slika?",
    exampleGood: "Uploadovan bar jedan pravi video, u više odnosa stranica.",
    exampleBad:
      "Nijedan video, pa Google sam sklopi video od statičnih slika i to ide na YouTube pod vašim imenom.",
    why: "Ako ne date video, PMax ga generiše sam, i to je ono što će ljudi videti kao vaš brend na YouTube-u. Google navodi da se za ocenu Excellent traži baš uploadovan video, a ne automatski generisan. Limit je podignut na 15 videa po asset grupi, pa ima mesta i za više odnosa stranica.",
    resources: [
      { kind: "google", docId: "14528532", label: "Video sredstva za PMax kampanje" },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-tests-expanded-video-limits-in-performance-max-467301",
        source: "Search Engine Land",
        label: "Google testira proširene limite za video u PMax-u",
      },
      { kind: "internal", slug: "youtube-oglasavanje-vodic", label: "YouTube oglašavanje" },
    ],
  },
  "pmax-14": {
    question:
      "Da li znate da je vaša trenutna kreativa bolja od one koju niste probali?",
    exampleGood:
      "Pokrenut asset test tamo gde ima dovoljno saobraćaja da se rezultat pročita.",
    exampleBad:
      "Isti set stoji godinu dana, a radi dobro znači samo da nije poređen ni sa čim.",
    why: "Bez testa ne znate da li kreativa radi ili je samo jedina koju ste probali. PMax sada ima ugrađeno testiranje sredstava unutar jedne kampanje, gde se saobraćaj deli, pa se ne prave dve odvojene kampanje. Google preporučuje da test traje najmanje četiri do šest nedelja zbog faze učenja.",
    resources: [
      {
        kind: "google",
        docId: "16030588",
        label: "Optimizacioni eksperimenti u PMax-u, testiranje sredstava",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-adds-new-performance-max-asset-testing-tools-479667",
        source: "Search Engine Land",
        label: "Novi alati za testiranje sredstava u PMax-u",
      },
      { kind: "internal", slug: "rsa-vodic", label: "RSA i pisanje oglasa" },
    ],
  },
  "pmax-15": {
    question: "Koliko dugo isti ljudi gledaju iste vaše slike?",
    exampleGood:
      "Set se osvežava po ritmu, na dva do tri meseca, a ne tek kad brojke padnu.",
    exampleBad:
      "Sredstva nedirnuta šest meseci i više, a niko ne zna kad su poslednji put menjana.",
    why: "Ovo je jedina tačka koja se kvari sama od sebe, bez ijedne vaše greške. Ista publika vidi istu sliku dovoljno puta da prestane da je primećuje, i to se u brojkama vidi kao spor pad koji se lako pripiše nečem drugom. Zato je odgovor ritam, a ne reakcija.",
    resources: [
      { kind: "google", docId: "11385582", label: "Saveti za optimizaciju PMax kampanja" },
      {
        kind: "industry",
        url: "https://searchengineland.com/dying-ads-creative-fatigue-463690",
        source: "Search Engine Land",
        label: "Kako prepoznati i zaustaviti zamor kreative",
      },
      { kind: "internal", slug: "google-ads-optimizacija", label: "Optimizacija Google Ads naloga" },
    ],
  },
  "pmax-26": {
    question:
      "Znate li koliko vašeg budžeta ide na Search, a koliko na YouTube i Display?",
    exampleGood:
      "Channel performance izveštaj se otvara, pa se zna gde novac stvarno odlazi.",
    exampleBad:
      "Zna se samo ukupan CPA, a podela po kanalima nikad nije otvorena.",
    why: "Ovo je funkcija koja je stigla tek 2026. i baš ona je PMax izvadila iz statusa crne kutije. Do tada ste zaista mogli samo da nagađate gde budžet ide. Sad se vidi. Google uz to izričito upozorava da se ne juri ROI po pojedinačnom kanalu, jer PMax optimizuje ukupan rezultat, pa marginalni doprinos jednog kanala ume da prevari.",
    resources: [
      { kind: "google", docId: "16260130", label: "Izveštaj o učinku po kanalu za PMax" },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-channel-performance-report-pmax-campaigns-466298",
        source: "Search Engine Land",
        label: "Kako se koristi Channel Performance izveštaj",
      },
      { kind: "internal", slug: "performance-max-vodic", label: "Performance Max vodič" },
    ],
  },
  "pmax-27": {
    question:
      "Da li se podela budžeta po kanalima menjala u poslednja tri meseca, i da li ste to primetili?",
    exampleGood:
      "Kanali se gledaju kroz vreme, pa se pomeranje uhvati dok je malo.",
    exampleBad: "Otvoreno jednom, zaključeno da je u redu, i nikad više.",
    why: "PMax sam preraspoređuje budžet između kanala i to radi stalno. Jedan pogled vam kaže kako je bilo tog dana, ne kakav je pravac. Klizanje ka jeftinijem inventaru se dešava postepeno, pa se u ukupnom CPA vidi tek kad je već poodmaklo. Google za to ima poseban prikaz kroz vreme.",
    resources: [
      { kind: "google", docId: "17116084", label: "Učinak po kanalu kroz vreme" },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-tests-channel-prioritization-controls-for-performance-max-485825",
        source: "Search Engine Land",
        label: "Google testira kontrole prioriteta kanala u PMax-u",
      },
      { kind: "internal", slug: "google-ads-optimizacija", label: "Optimizacija Google Ads naloga" },
    ],
  },
  "pmax-28": {
    question: "Kad CPA poraste, znate li koja grupa i koji kanal su ga podigli?",
    exampleGood:
      "Kad brojka odstupi, ulazi se u razlaganje po asset grupi i kanalu pre nego što se bilo šta dira.",
    exampleBad:
      "Reaguje se na ukupan broj, pa se menja cilj ili budžet cele kampanje napamet.",
    why: "Ukupan CPA je prosek, a prosek krije. Kampanja koja izgleda osrednje često ima jednu grupu koja odlično radi i jednu koja je vuče dole. Ako se reaguje na prosek, gasi se i ono što radi. Ovo je razlika između podešavanja i nagađanja.",
    resources: [
      { kind: "google", docId: "16279166", label: "Kako se ocenjuju rezultati PMax-a" },
      {
        kind: "industry",
        url: "https://searchengineland.com/performance-max-reporting-ecommerce-smx-next-465948",
        source: "Search Engine Land",
        label: "Šta PMax izveštavanje pokazuje a šta ne",
      },
      { kind: "internal", slug: "gaql-reporting-vodic", label: "GAQL izveštavanje" },
    ],
  },
  "pmax-29": {
    question:
      "Ako imate fizičku radnju, znate li da li vam se oglas prikazuje i u Waze-u?",
    exampleGood:
      "Za store-goal kampanju se proverilo šta je uključeno i da li sredstva koja se tamo prikazuju imaju smisla.",
    exampleBad:
      "Kampanja cilja posete radnji, a niko nije gledao gde se sve prikazuje.",
    why: "Ovo je najuža tačka u celoj listi i odnosi se samo na kampanje sa store ciljevima i fizičkom lokacijom. Ako nemate radnju, mirne duše stavite N/A, to nije rupa nego uredan odgovor. Ako imate, vredi znati da se inventar širi bez vašeg pitanja.",
    resources: [
      { kind: "google", docId: "14005976", label: "New customer acquisition cilj uz store ciljeve" },
      { kind: "google", docId: "11465047", label: "Placement izveštaji za PMax kampanje" },
      { kind: "internal", slug: "google-oglasavanje-za-firme", label: "Google oglašavanje za firme" },
    ],
  },
  "pmax-35": {
    question:
      "Da li ste Google-u rekli kojim rečima vas ljudi traže, ili čekate da sam pogodi?",
    exampleGood:
      "Search teme popunjene rečima koje kupci stvarno koriste, do 50 po asset grupi.",
    exampleBad:
      "Prazno na lead gen kampanji koja ima asset grupe i imala bi koristi od njih.",
    why: "Search teme su najbliže tome da PMax-u kažete na šta da cilja. To nisu ključne reči i ne rade kao one, ali su vaš način da unesete ono što znate o svom kupcu. Bitna ograda: teme žive na nivou asset grupe, pa PMax koji radi čisto na feed-u nema gde da ih upiše. To je očekivano, ne propust.",
    resources: [
      { kind: "google", docId: "14767319", label: "Search teme u PMax kampanjama" },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-ads-pmax-audience-signals-search-themes-463329",
        source: "Search Engine Land",
        label: "Istina o audience signalima i search temama",
      },
      { kind: "internal", slug: "kljucne-reci-vodic", label: "Istraživanje ključnih reči" },
    ],
  },
  "pmax-36": {
    question:
      "Da li Google kreće od onoga što vi znate o svojim kupcima, ili od nule?",
    exampleGood:
      "Signal sadrži vaše liste kupaca i posetioce sajta, i osvežava se.",
    exampleBad: "Nijedan signal, pa algoritam svaki put kreće iz početka.",
    why: "Audience signal nije targetiranje. Ne ograničava kome se prikazujete, nego daje polaznu tačku od koje Google traži slične ljude. Bez njega faza učenja traje duže i skuplja je. Google navodi da signali nastavljaju da hrane sistem kroz ceo život kampanje, ne samo na startu.",
    resources: [
      { kind: "google", docId: "14530785", label: "O audience signalima za PMax" },
      { kind: "google", docId: "14753570", label: "Dodavanje audience signala" },
      {
        kind: "internal",
        slug: "ga4-publike-ecommerce-framework",
        label: "GA4 publike za eCommerce",
      },
    ],
  },
  "pmax-37": {
    question:
      "Da li je u signalu vaša lista kupaca, ili samo gotove Googleove publike?",
    exampleGood:
      "Prvo Customer Match lista i posetioci sajta, pa tek onda in-market segmenti kao dopuna.",
    exampleBad:
      "Samo generičke in-market publike, koje ima i svaki vaš konkurent.",
    why: "In-market segmente Google daje svima podjednako, pa oni ne govore ništa što je specifično za vas. Vaša lista kupaca je jedina stvar u celom nalogu koju konkurencija ne može da preslika. Ograda koju i Google i praksa pominju: signal vredi koliko i podaci u njemu, pa zastarela lista ne pomaže.",
    resources: [
      { kind: "google", docId: "14530785", label: "O audience signalima za PMax" },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-ads-pmax-audience-signals-search-themes-463329",
        source: "Search Engine Land",
        label: "Istina o audience signalima i search temama",
      },
      {
        kind: "internal",
        slug: "ga4-publike-ecommerce-framework",
        label: "GA4 publike za eCommerce",
      },
    ],
  },
  "pmax-38": {
    question:
      "Da li ste ikad otvorili karticu koja vam kaže šta je Google naučio o vašim kupcima?",
    exampleGood:
      "Insights se gleda redovno, pa se odatle vuku ideje za teme, kreativu i nove proizvode.",
    exampleBad: "Nikad otvoreno od lansiranja kampanje.",
    why: "Ovo je jedina tačka u listi koja ne popravlja štetu nego traži priliku, i zato uvek ispadne poslednja. Insights pokazuje kategorije pretrage i segmente publike koji su doveli do konverzija, dakle stvari koje niste znali da tražite. To je najjeftinije istraživanje tržišta koje imate, a već ste ga platili.",
    resources: [
      { kind: "google", docId: "16279166", label: "Kako se ocenjuju rezultati PMax-a" },
      {
        kind: "industry",
        url: "https://searchengineland.com/performance-max-reporting-ecommerce-smx-next-465948",
        source: "Search Engine Land",
        label: "Šta PMax izveštavanje pokazuje a šta ne",
      },
      {
        kind: "internal",
        slug: "ga4-publike-ecommerce-framework",
        label: "GA4 publike za eCommerce",
      },
    ],
  },
};

export const pmaxTeachingEN: Record<string, Teaching> = {
  "pmax-1": {
    question: "Are the products or services in one asset group a single theme?",
    exampleGood:
      "Winter coats in one asset group, trainers in another, backpacks in a third.",
    exampleBad:
      "Coats, trainers and backpacks together in one group, because that was quicker.",
    why: "Performance Max assembles ads itself from the headlines, descriptions and images inside one asset group. Put unrelated things in the same group and it will build an ad whose headline talks about coats while the image shows trainers, and nothing flags that as a mistake. Google recommends splitting asset groups by content category, theme, language or target audience.",
    resources: [
      {
        kind: "google",
        docId: "14528220",
        label: "Best practices for asset groups in Performance Max",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/how-campaign-structure-shapes-google-ads-performance-481332",
        source: "Search Engine Land",
        label: "How campaign structure shapes performance",
      },
      {
        kind: "internal",
        slug: "performance-max-guide",
        label: "How Performance Max is put together",
      },
    ],
  },
  "pmax-2": {
    question: "Does the number of asset groups match how many different things you actually sell?",
    exampleGood:
      "A shop with four categories has four asset groups, one per category.",
    exampleBad:
      "One asset group covering 500 SKUs, or twelve groups splitting a small monthly budget.",
    why: "Every asset group needs enough traffic for Google to learn what works inside it. Too many groups on a small budget means none of them gathers enough data. One group across the whole catalogue is the opposite problem: everything runs, but you cannot see what is actually selling. Google suggests basing groups on the sections and categories that already exist on your site.",
    resources: [
      { kind: "google", docId: "10724748", label: "How asset groups work" },
      {
        kind: "industry",
        url: "https://searchengineland.com/top-performance-max-optimization-tips-461913",
        source: "Search Engine Land",
        label: "Performance Max optimization tips for 2026",
      },
      {
        kind: "internal",
        slug: "performance-max-guide",
        label: "PMax account structure",
      },
    ],
  },
  "pmax-3": {
    question: "Do you know whether Final URL expansion is on, and did you mean it to be?",
    exampleGood:
      "It is off, because you want traffic landing exactly on the pages you picked.",
    exampleBad:
      "It is on because that is the default, and nobody has ever checked where people actually land.",
    why: "When it is on, Google may swap your chosen page for a different one on the same domain, whichever it judges a better match for the search. That can work in your favour, and it can equally send buyers to a blog post instead of a product page. It is on by default, so leaving it on is a decision too. It is just one nobody made.",
    resources: [
      {
        kind: "google",
        docId: "15995647",
        label: "Best practices for URL expansion",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/the-parts-of-performance-max-you-can-actually-control-472523",
        source: "Search Engine Land",
        label: "The parts of Performance Max you can actually control",
      },
      {
        kind: "internal",
        slug: "performance-max-guide",
        label: "What you can actually control in PMax",
      },
    ],
  },
  "pmax-4": {
    question: "Does each asset group lead to its own page rather than the homepage?",
    exampleGood:
      "The winter coats asset group lands straight on the winter coats page.",
    exampleBad:
      "Every asset group lands on the homepage, so the buyer has to go looking for the thing they clicked on.",
    why: "Every extra click after arriving is somewhere people drop out. A redirect on the way can also eat your UTM parameters, which breaks your measurement, and you only find that out when you start asking where a sale came from.",
    resources: [
      { kind: "google", docId: "16176749", label: "Asset group URL options" },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-url-contains-targeting-functionality-performance-max-431572",
        source: "Search Engine Land",
        label: "URL rules and page exclusions in PMax",
      },
      {
        kind: "internal",
        slug: "why-google-ads-not-working",
        label: "Why a campaign is not delivering",
      },
    ],
  },
  "pmax-5": {
    question: "Is the campaign optimizing toward the action that actually makes you money?",
    exampleGood:
      "The campaign goal is a purchase, or a quote request that turns into business.",
    exampleBad:
      "The campaign goal is a button click, a pageview, or a newsletter signup.",
    why: "Performance Max pushes budget toward whatever you told it the goal is, and it is very good at that. Tell it the goal is a button click and you will get plenty of button clicks and few sales. This is one of the few settings where the wrong choice does not break the campaign visibly. It quietly steers it in the wrong direction for months.",
    resources: [
      {
        kind: "google",
        docId: "9143218",
        label: "Campaign-specific conversion goals",
      },
      {
        kind: "google",
        docId: "11461796",
        label: "Primary and secondary conversion actions",
      },
      {
        kind: "internal",
        slug: "conversion-tracking-guide",
        label: "Conversion tracking from scratch",
      },
    ],
  },
  "pmax-6": {
    question:
      "Does Google count only the things that actually make you money as conversions?",
    exampleGood:
      "Purchases and quote requests are primary. Pageviews, phone-number clicks and newsletter signups are secondary.",
    exampleBad:
      "Everything measured is primary, so Google chases a purchase and a click on the Contact button with equal effort.",
    why: "PMax bids on whatever is marked primary, and treats everything in that bucket as equally valuable. Put a $300 purchase and a click on your phone number in the same bucket and budget drains toward whichever there is more of, which is almost always the cheaper action. Google explicitly separates primary actions, which feed bidding, from secondary ones, which are for observation only.",
    resources: [
      {
        kind: "google",
        docId: "11461796",
        label: "Primary and secondary conversion actions",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/auditing-the-performance-max-black-box-a-strategic-approach-457732",
        source: "Search Engine Land",
        label: "Auditing the Performance Max black box",
      },
      {
        kind: "internal",
        slug: "conversion-tracking-guide",
        label: "Conversion tracking from scratch",
      },
    ],
  },
  "pmax-7": {
    question:
      "Does every order send its own real value rather than the same number every time?",
    exampleGood: "A $40 order sends 40, a $300 order sends 300.",
    exampleBad:
      "Every order sends the same value, so Google thinks a cheap sale and an expensive one are the same thing.",
    why: "Target ROAS is a ratio of value to spend. If every conversion sends the same figure that ratio is fiction, and Google optimizes toward order count instead of revenue. The campaign then looks fine in the report while selling mostly your cheapest items. Google calls this transaction-specific values, as opposed to a fixed one.",
    resources: [
      {
        kind: "google",
        docId: "6095947",
        label: "Track transaction-specific conversion values",
      },
      {
        kind: "industry",
        url: "https://www.searchenginejournal.com/how-max-conversion-value-troas-bidding/494355/",
        source: "Search Engine Journal",
        label: "Max Conversion Value and tROAS bidding",
      },
      { kind: "internal", slug: "what-is-roas", label: "What ROAS actually is" },
    ],
  },
  "pmax-8": {
    question:
      "Does Google still recognize your customers once their browser drops the cookie?",
    exampleGood:
      "Enhanced conversions is on and the status shows data coming through.",
    exampleBad:
      "It is off, while most of the budget runs through Smart Bidding, which leans on exactly that data.",
    why: "When a cookie drops out, some conversions go missing and Google never learns the click led to a sale. Enhanced conversions sends a hashed email address or phone number, one-way encrypted and unreadable, so the match can still happen. Smart Bidding decides on the back of that data, so every lost conversion is a decision made on less of it.",
    resources: [
      {
        kind: "google",
        docId: "15712870",
        label: "About enhanced conversions for web",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/in-google-ads-automation-everything-is-a-signal-in-2026-468218",
        source: "Search Engine Land",
        label: "In Google Ads automation, everything is a signal",
      },
      {
        kind: "internal",
        slug: "ga4-google-ads-integration",
        label: "GA4 and Google Ads integration",
      },
    ],
  },
  "pmax-9": {
    question:
      "Does Google know which of your enquiries turned into business and which did not?",
    exampleGood:
      "The CRM sends back which lead became a customer, so PMax learns to look for more like them.",
    exampleBad:
      "PMax counts every form fill the same, so it optimizes toward whoever fills a form most easily.",
    why: "On lead gen, Google only sees that a form was submitted. It has no idea whether that was a serious enquiry or somebody looking for a job. Without a signal coming back from the CRM the algorithm chases lead volume, not lead quality. Google points to Enhanced conversions for leads as the simpler replacement for a classic GCLID import, and states that from 15 June 2026 offline imports move to the Data Manager API.",
    resources: [
      {
        kind: "google",
        docId: "2998031",
        label: "About offline conversion imports",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/why-performance-max-lead-generation-fails-make-it-work-393038",
        source: "Search Engine Land",
        label: "Why Performance Max for lead gen often fails",
      },
      {
        kind: "internal",
        slug: "offline-conversion-import-b2b",
        label: "Offline conversion import for B2B",
      },
    ],
  },
  "pmax-10": {
    question: "Is your conversion window longer than your sales cycle?",
    exampleGood: "A B2B account with a two-month cycle runs a 90-day window.",
    exampleBad:
      "The default 30 days on a business where the decision takes a quarter.",
    why: "A conversion that happens after the window closes is not counted late, it is not counted at all. Google then learns from an incomplete picture and undervalues the channels bringing slow but valuable buyers. The default is 30 days and it can be set anywhere from 1 to 90.",
    resources: [
      { kind: "google", docId: "3123169", label: "About conversion windows" },
      {
        kind: "industry",
        url: "https://searchengineland.com/ppc-errors-b2b-audits-479726",
        source: "Search Engine Land",
        label: "11 PPC errors uncovered in recent B2B audits",
      },
      {
        kind: "internal",
        slug: "google-ads-ecommerce-vs-b2b",
        label: "eCommerce versus B2B",
      },
    ],
  },
  "pmax-21": {
    question:
      "Is there a list of searches you never advertise on, and has anyone looked at it lately?",
    exampleGood:
      "An account-level list exists and gets topped up with terms like free, jobs, reviews, complaint.",
    exampleBad: "No list at all, or one untouched since the account was opened.",
    why: "Account-level negatives apply automatically to all Search and Shopping inventory, including the inventory inside Performance Max campaigns. One place covers the whole account, so one round of maintenance protects you everywhere. Google states a limit of 1,000 account-level negatives, and up to 20 lists of 5,000 each.",
    resources: [
      { kind: "google", docId: "11396330", label: "About account-level negative keywords" },
      { kind: "google", docId: "2453983", label: "About negative keyword lists" },
      { kind: "internal", slug: "negative-keywords-guide", label: "Negative keywords" },
    ],
  },
  "pmax-22": {
    question:
      "Have you told the PMax campaign which searches it must not spend on?",
    exampleGood:
      "The campaign has its own negative list, topped up from the search terms report.",
    exampleBad:
      "Zero campaign-level negatives on a campaign that has been spending for a month or more.",
    why: "The cap went from 100 to 10,000 per campaign, so there is no excuse left. One important caveat: these apply only to the Search and Shopping inventory inside PMax, not to Display, YouTube, Gmail or Discover. They protect you where the click costs most, not everywhere.",
    resources: [
      { kind: "google", docId: "15726455", label: "Negative keywords in Performance Max campaigns" },
      { kind: "google", docId: "6372658", label: "About your Google Ads account limits" },
      { kind: "internal", slug: "negative-keywords-list", label: "A ready-made negative keyword list" },
    ],
  },
  "pmax-23": {
    question:
      "Is PMax buying clicks on your own name that you would have got anyway?",
    exampleGood:
      "Your own brand is excluded from PMax because a separate Search brand campaign already covers it, where you see and control the price.",
    exampleBad:
      "PMax and the brand campaign bid on the same name, and nobody decided that on purpose.",
    why: "Brand searches are the cheapest conversions in the account, which is exactly why they flatter a PMax report, and those are people who were already looking for you by name. Google says brand exclusions are a more complete solution than negative keywords, because they catch common misspellings and related sub-brands on their own. They apply to Search, Shopping and YouTube search inventory.",
    resources: [
      { kind: "google", docId: "14505308", label: "Apply brand exclusions to Performance Max or Search" },
      {
        kind: "industry",
        url: "https://searchengineland.com/performance-max-brand-exclusions-395439",
        source: "Search Engine Land",
        label: "How to think about brand exclusions for Performance Max",
      },
      { kind: "internal", slug: "performance-max-guide", label: "The Performance Max guide" },
    ],
  },
  "pmax-24": {
    question:
      "If you are after new customers, have you told Google to stop paying for the old ones?",
    exampleGood:
      "The Customer Match list of existing buyers is excluded, or the New customer acquisition goal is on.",
    exampleBad:
      "Acquisition budget goes to people who have already bought, so remarketing looks like growth.",
    why: "Existing customers convert most easily, so the algorithm drifts toward them unless told otherwise. The report then shows a great ROAS while the new-customer count stands still. Google offers two answers: audience exclusions, and the New customer acquisition goal, which either bids higher for new customers or bids only for them. Google warns that accuracy depends on how fresh your customer list is.",
    resources: [
      { kind: "google", docId: "2549058", label: "Exclude specific audience segments" },
      {
        kind: "industry",
        url: "https://searchengineland.com/performance-max-net-new-customers-480802",
        source: "Search Engine Land",
        label: "How to make Performance Max focus on net new customers",
      },
      { kind: "internal", slug: "remarketing-guide", label: "Remarketing guide" },
    ],
  },
  "pmax-25": {
    question:
      "Do you know what kind of content your ad appeared next to last month?",
    exampleGood:
      "The placement report gets opened regularly and an account-level exclusion list exists.",
    exampleBad:
      "The placement report has never been opened, so nobody knows which channels or apps the ad ran on.",
    why: "PMax also serves on YouTube, the Display network, Gmail and the Discover feed, and there you do not pick site by site. The controls Google gives you are placement exclusions, content labels for content maturity, inventory type, and sensitive categories. Account-level exclusions apply across PMax, Demand Gen, YouTube and Display.",
    resources: [
      { kind: "google", docId: "13607727", label: "How to use brand suitability features in Performance Max" },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-ads-rolls-out-account-level-placement-exclusions-467569",
        source: "Search Engine Land",
        label: "Google Ads rolls out account-level placement exclusions",
      },
      { kind: "internal", slug: "youtube-advertising-guide", label: "YouTube advertising" },
    ],
  },
  "pmax-30": {
    question:
      "Did you ask Google to hit a target before it had anything to learn from?",
    exampleGood:
      "The campaign starts on Maximize Conversions and moves to Target CPA or ROAS once there is history.",
    exampleBad:
      "Target ROAS switched on day one, on an account with no conversions yet.",
    why: "Target strategies work by looking at what has happened so far and trying to repeat it at the price you set. With no history there is nothing to look at, so the campaign either does not spend or spends at random. Google explicitly advises starting Target ROAS from Maximize Conversions or Target CPA and switching once you have enough conversions.",
    resources: [
      { kind: "google", docId: "7065882", label: "About Smart Bidding" },
      {
        kind: "industry",
        url: "https://searchengineland.com/your-guide-to-google-ads-smart-bidding-453765",
        source: "Search Engine Land",
        label: "Your guide to Google Ads Smart Bidding",
      },
      { kind: "internal", slug: "smart-bidding-guide", label: "Smart Bidding guide" },
    ],
  },
  "pmax-31": {
    question:
      "Is the target you set close to what the account already achieves, or is it a wish?",
    exampleGood:
      "The target is set at the last 30 days' level or slightly below, then tightened once it settles.",
    exampleBad:
      "The account runs at 2x ROAS and the target is set to 5x because that is what it ought to be.",
    why: "An over-aggressive target does not make Google try harder. It makes Google stop bidding on everything it cannot deliver at that price, so the campaign goes quiet and spends less and less. That looks like nothing is working, when in fact it is doing exactly what you asked. The industry recommendation is to start at your actual ROAS from the last 30 days, or a little below.",
    resources: [
      { kind: "google", docId: "6268637", label: "About Target ROAS bidding" },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-ads-target-roas-454747",
        source: "Search Engine Land",
        label: "Google Ads target ROAS: everything you need to know",
      },
      { kind: "internal", slug: "smart-bidding-guide", label: "Smart Bidding guide" },
    ],
  },
  "pmax-32": {
    question:
      "When you change the target, do you nudge it or halve it every time?",
    exampleGood:
      "Moves of 10 to 20 at a time, then waiting for conversions to accumulate before the next change.",
    exampleBad:
      "The target changes every week in big jumps because the numbers do not look good.",
    why: "Every target change puts the strategy back into learning, so an account that is constantly poked never comes out of it. Google advises avoiding multiple changes within a single conversion cycle and waiting one to two cycles before judging, because conversions lag. The industry recommendation is moves of 10 to 20 at a time.",
    resources: [
      {
        kind: "google",
        docId: "10433846",
        label: "How to make target adjustments with Smart Bidding",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-ai-bidding-breaks-take-control-466251",
        source: "Search Engine Land",
        label: "When Google's AI bidding breaks",
      },
      { kind: "internal", slug: "smart-bidding-guide", label: "Smart Bidding guide" },
    ],
  },
  "pmax-33": {
    question:
      "Does the account have enough monthly conversions for Google to have anything to learn from?",
    exampleGood:
      "A steady monthly conversion count, so the target strategy has something to calculate from.",
    exampleBad:
      "Target ROAS on an account with a handful of conversions a month, where one sale either way moves the whole picture.",
    why: "Smart Bidding is statistics. At low conversion counts the noise is bigger than the signal, so the strategy reacts to randomness. Google states a minimum of 15 conversions in the past 30 days for Target ROAS on Search and Shopping, but the minimum to switch it on and the volume at which you can read a result reliably are not the same thing.",
    resources: [
      { kind: "google", docId: "6268637", label: "About Target ROAS bidding" },
      { kind: "google", docId: "7065882", label: "About Smart Bidding" },
      { kind: "internal", slug: "smart-bidding-guide", label: "Smart Bidding guide" },
    ],
  },
  "pmax-34": {
    question:
      "Does your best campaign hit its budget ceiling every day while a weaker one spends freely?",
    exampleGood:
      "The campaign that turns a profit has room to turn more, and budget comes off the weaker one.",
    exampleBad:
      "Limited by budget has sat on the best campaign for months and nobody has reallocated.",
    why: "This is the one checkpoint on the list where you are not fixing a mistake but leaving money on the table. A campaign that hits its target and then hits a ceiling is a campaign you put a ceiling on. One current note: from 17 August 2026 Google changed how bidding behaves on budget-constrained campaigns, so Target CPA and ROAS strategies may show temporary fluctuations.",
    resources: [
      { kind: "google", docId: "6385220", label: "Fix the Limited by budget status" },
      { kind: "google", docId: "17061251", label: "Changes to target based bid strategies" },
      {
        kind: "industry",
        url: "https://searchengineland.com/how-google-ads-paces-caps-and-recalculates-spend-when-budgets-change-467149",
        source: "Search Engine Land",
        label: "How Google Ads paces and recalculates spend when budgets change",
      },
    ],
  },
  "pmax-16": {
    question:
      "Does the product title look like what a buyer actually types into Google?",
    exampleGood: "Nike Air Max 90 Men's Running Shoes, Black, UK 9",
    exampleBad: "Air Max 90, or Trainers model 4471",
    why: "Shopping and PMax have no keywords, so Google matches a search to your product largely through the title. What is not in the title effectively does not exist. Google advises putting the most important details first because titles get truncated, and adding the brand where it helps people recognise the product. It also warns against stuffing synonyms or promotional text into the title.",
    resources: [
      {
        kind: "google",
        product: "merchants",
        docId: "6324415",
        label: "Title and structured title attributes",
      },
      {
        kind: "google",
        product: "merchants",
        docId: "7380908",
        label: "Tips to optimize your product data",
      },
      {
        kind: "internal",
        slug: "merchant-center-feed-scorecard",
        label: "A scorecard for feed quality",
      },
    ],
  },
  "pmax-17": {
    question:
      "Does Google know exactly which product you are selling, or is it guessing from the name?",
    exampleGood:
      "Branded products carry the correct GTIN, one per colour and size variant.",
    exampleBad:
      "GTIN missing on branded goods, or filled with a made-up value just to populate the field.",
    why: "The GTIN is what Google uses to tie your listing to the same product at other retailers, and to reviews and price comparison. Google states plainly that products which have an assigned GTIN but are submitted without one may get limited visibility, and that an incorrect identifier leads to disapproval. It also says not to guess or invent a GTIN.",
    resources: [
      {
        kind: "google",
        product: "merchants",
        docId: "160161",
        label: "About unique product identifiers",
      },
      {
        kind: "google",
        product: "merchants",
        docId: "13693497",
        label: "Fixing disapprovals for product data quality",
      },
      {
        kind: "internal",
        slug: "product-feed-serbian-ecommerce",
        label: "Product feed fundamentals",
      },
    ],
  },
  "pmax-18": {
    question:
      "Can you pull the products you make money on apart from the ones you do not?",
    exampleGood:
      "custom_label_0 carries margin (high, medium, low), custom_label_1 carries season, and budget follows that split.",
    exampleBad:
      "The fields are empty, or filled in and then never used by a single listing group.",
    why: "Google sees revenue, not your margin. Without custom labels there is no way to tell it that one product is worth more than another at the same revenue. Google allows five labels per product and up to 1,000 distinct values per label, and says they exist precisely for grouping in campaigns and reporting.",
    resources: [
      {
        kind: "google",
        product: "merchants",
        docId: "6324473",
        label: "Custom label 0-4",
      },
      {
        kind: "google",
        docId: "6275295",
        label: "Use custom labels for Shopping ads",
      },
      { kind: "internal", slug: "google-shopping-guide", label: "Google Shopping guide" },
    ],
  },
  "pmax-19": {
    question:
      "Inside the campaign, can you see which group of products earns and which one just spends?",
    exampleGood:
      "Split by custom label or product type, just enough to see what is working.",
    exampleBad:
      "One listing group for the whole catalogue, or hundreds of groups nobody ever opens.",
    why: "The listing group is the only place in PMax where you see performance by product group. One group across the whole catalogue means you have a single average, and an average hides both the best and the worst. The opposite extreme is no better: Google states a limit of 1,000 listing groups per asset group and says a large number is not a best practice.",
    resources: [
      {
        kind: "google",
        docId: "11596074",
        label: "Manage a Performance Max campaign with listing groups",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/margin-based-tracking-advanced-strategies-google-shopping-profitability-430162",
        source: "Search Engine Land",
        label: "Margin-based tracking for Shopping profitability",
      },
      { kind: "internal", slug: "google-shopping-guide", label: "Google Shopping guide" },
    ],
  },
  "pmax-20": {
    question: "How many of your products currently cannot show at all?",
    exampleGood:
      "Disapproved items are kept to a minimum, and feed price and availability match the site.",
    exampleBad:
      "Disapproved and pending items run to several percent of the catalogue, and nobody opens Diagnostics.",
    why: "A disapproved product spends nothing, but it also sells nothing, and in the campaign report that shows up as quiet rather than as a problem. The most common cause is a price or availability mismatch between the feed and the site, which happens by itself whenever a price changes on the site. This is a checkpoint that breaks without you touching anything, so it needs a rhythm rather than a one-off fix.",
    resources: [
      {
        kind: "google",
        product: "merchants",
        docId: "13693497",
        label: "Fixing disapprovals for product data quality",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/data-feed-errors-report-387598",
        source: "Search Engine Land",
        label: "Top 5 data feed errors that sabotage ecommerce campaigns",
      },
      {
        kind: "internal",
        slug: "merchant-center-serbia-setup",
        label: "Merchant Center setup",
      },
    ],
  },
  "pmax-11": {
    question:
      "Do you know which of your headlines and images actually work, and which just sit there?",
    exampleGood:
      "Ratings get opened at least once a quarter, and anything sitting on Low for a while gets replaced.",
    exampleBad: "Ad Strength checked once at launch and never again.",
    why: "PMax picks which asset to show, but it picks from what you gave it. If half the set is weak it still has to fill the format with something, so the weak thing shows. Google advises giving assets three to four weeks to ramp before judging them, and checking ratings roughly once a quarter.",
    resources: [
      { kind: "google", docId: "14143250", label: "About Performance Max Ad Strength" },
      { kind: "google", docId: "10725056", label: "About asset reporting in Performance Max" },
      { kind: "internal", slug: "google-ads-optimization", label: "Google Ads optimization" },
    ],
  },
  "pmax-12": {
    question:
      "Have you given Google enough material to build an ad for every format?",
    exampleGood:
      "Every text slot filled, images in all three ratios (landscape, square, portrait) and at least one video.",
    exampleBad:
      "Three headlines, two images, no video, and Ad Strength stuck on Poor.",
    why: "PMax assembles ads for Search, Shopping, Display, YouTube, Gmail and Discover out of your parts. A format with no material either does not show or gets filled with an auto-generated version. For best performance Google lists 15 headlines, 5 descriptions, at least 7 images (3 landscape, 3 square, 1 portrait) and at least one video.",
    resources: [
      { kind: "google", docId: "14528221", label: "Best practices for Performance Max creative assets" },
      { kind: "google", docId: "10724492", label: "Build an asset group" },
      { kind: "internal", slug: "responsive-search-ads-guide", label: "Writing responsive search ads" },
    ],
  },
  "pmax-13": {
    question:
      "Does your video ad show your product, or did Google stitch a slideshow out of your images?",
    exampleGood: "At least one real uploaded video, in more than one aspect ratio.",
    exampleBad:
      "No video at all, so Google assembles one from static images and that runs on YouTube under your name.",
    why: "If you do not supply a video, PMax generates one, and that is what people will see as your brand on YouTube. Google states that an Excellent rating requires an uploaded video rather than an auto-generated one. The cap was raised to 15 videos per asset group, so there is room for several aspect ratios.",
    resources: [
      { kind: "google", docId: "14528532", label: "About video assets for Performance Max" },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-tests-expanded-video-limits-in-performance-max-467301",
        source: "Search Engine Land",
        label: "Google tests expanded video limits in Performance Max",
      },
      { kind: "internal", slug: "youtube-advertising-guide", label: "YouTube advertising" },
    ],
  },
  "pmax-14": {
    question:
      "Do you know your current creative beats the version you never tried?",
    exampleGood:
      "An asset test running wherever there is enough traffic to read a result.",
    exampleBad:
      "The same set for a year, where works well only means it was never compared to anything.",
    why: "Without a test you do not know whether the creative works or is simply the only one you tried. PMax now has built-in asset testing inside a single campaign, splitting traffic rather than running two separate campaigns. Google recommends running the test for at least four to six weeks because of the learning period.",
    resources: [
      {
        kind: "google",
        docId: "16030588",
        label: "Performance Max optimization experiments: asset testing",
      },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-adds-new-performance-max-asset-testing-tools-479667",
        source: "Search Engine Land",
        label: "Google adds new Performance Max asset testing tools",
      },
      { kind: "internal", slug: "responsive-search-ads-guide", label: "Writing responsive search ads" },
    ],
  },
  "pmax-15": {
    question: "How long have the same people been looking at the same images?",
    exampleGood:
      "The set is refreshed on a rhythm, every two to three months, rather than when the numbers drop.",
    exampleBad:
      "Assets untouched for six months or more, and nobody knows when they were last changed.",
    why: "This is the one checkpoint that breaks on its own, without any mistake on your part. The same audience sees the same image often enough to stop noticing it, and in the numbers that shows up as a slow decline that is easy to blame on something else. So the answer is a rhythm, not a reaction.",
    resources: [
      { kind: "google", docId: "11385582", label: "Optimization tips for Performance Max campaigns" },
      {
        kind: "industry",
        url: "https://searchengineland.com/dying-ads-creative-fatigue-463690",
        source: "Search Engine Land",
        label: "How to spot and stop creative fatigue",
      },
      { kind: "internal", slug: "google-ads-optimization", label: "Google Ads optimization" },
    ],
  },
  "pmax-26": {
    question:
      "Do you know how much of your budget goes to Search versus YouTube and Display?",
    exampleGood:
      "The channel performance report gets opened, so you know where the money actually goes.",
    exampleBad:
      "You only know the blended CPA, and the channel split has never been opened.",
    why: "This feature only arrived in 2026, and it is the thing that took PMax out of black-box territory. Before it you genuinely could only guess where the budget went. Now you can see. Google does warn against chasing ROI on any single channel, because PMax optimizes the overall result and one channel's marginal contribution can mislead.",
    resources: [
      { kind: "google", docId: "16260130", label: "About the channel performance report" },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-channel-performance-report-pmax-campaigns-466298",
        source: "Search Engine Land",
        label: "How to use the Channel Performance report",
      },
      { kind: "internal", slug: "performance-max-guide", label: "The Performance Max guide" },
    ],
  },
  "pmax-27": {
    question:
      "Has the channel split moved over the last three months, and did you notice?",
    exampleGood:
      "Channels are viewed over time, so a drift gets caught while it is still small.",
    exampleBad: "Opened once, judged fine, and never looked at again.",
    why: "PMax reallocates budget between channels constantly. A single look tells you how it was that day, not which way it is heading. Drift toward cheaper inventory happens gradually, so it only shows in the blended CPA once it is well under way. Google has a dedicated over-time view for this.",
    resources: [
      { kind: "google", docId: "17116084", label: "About channel performance over time" },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-tests-channel-prioritization-controls-for-performance-max-485825",
        source: "Search Engine Land",
        label: "Google tests channel prioritization controls for PMax",
      },
      { kind: "internal", slug: "google-ads-optimization", label: "Google Ads optimization" },
    ],
  },
  "pmax-28": {
    question:
      "When the CPA goes up, do you know which group and which channel pushed it?",
    exampleGood:
      "When a number moves, you drill into the asset-group and channel breakdown before touching anything.",
    exampleBad:
      "You react to the blended number and change the target or budget of the whole campaign on a hunch.",
    why: "A blended CPA is an average, and averages hide things. A campaign that looks mediocre often has one group doing very well and one dragging it down. React to the average and you switch off the part that works too. This is the difference between tuning and guessing.",
    resources: [
      { kind: "google", docId: "16279166", label: "Evaluate Performance Max results" },
      {
        kind: "industry",
        url: "https://searchengineland.com/performance-max-reporting-ecommerce-smx-next-465948",
        source: "Search Engine Land",
        label: "What PMax reporting shows and what it does not",
      },
      { kind: "internal", slug: "google-ads-api-reporting-gaql", label: "GAQL reporting" },
    ],
  },
  "pmax-29": {
    question:
      "If you have a physical shop, do you know whether your ad also shows inside Waze?",
    exampleGood:
      "For a store-goal campaign, somebody checked what is switched on and whether the assets showing there make sense.",
    exampleBad:
      "The campaign targets store visits and nobody has looked at where it actually appears.",
    why: "This is the narrowest checkpoint on the list and applies only to campaigns with store goals and a physical location. If you have no shop, mark it N/A with a clear conscience: that is a tidy answer, not a gap. If you do, it is worth knowing the inventory expands without asking you.",
    resources: [
      { kind: "google", docId: "14005976", label: "New customer acquisition goal with store goals" },
      { kind: "google", docId: "11465047", label: "Placement reports for Performance Max" },
      { kind: "internal", slug: "google-advertising-for-businesses", label: "Google advertising for businesses" },
    ],
  },
  "pmax-35": {
    question:
      "Have you told Google the words people use to find you, or are you waiting for it to guess?",
    exampleGood:
      "Search themes filled with the words customers actually use, up to 50 per asset group.",
    exampleBad:
      "Empty on a lead gen campaign that does have asset groups and would benefit from them.",
    why: "Search themes are the closest thing to telling PMax what to target. They are not keywords and do not behave like them, but they are your way of putting in what you know about your buyer. One important caveat: themes live at the asset-group level, so a feed-only PMax campaign has nowhere to put them. That is expected, not an omission.",
    resources: [
      { kind: "google", docId: "14767319", label: "Use search themes with Performance Max" },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-ads-pmax-audience-signals-search-themes-463329",
        source: "Search Engine Land",
        label: "The truth about audience signals and search themes",
      },
      { kind: "internal", slug: "google-ads-keyword-guide", label: "Keyword research" },
    ],
  },
  "pmax-36": {
    question:
      "Does Google start from what you know about your customers, or from nothing?",
    exampleGood:
      "The signal contains your customer lists and site visitors, and it gets refreshed.",
    exampleBad: "No signal at all, so the algorithm starts cold every time.",
    why: "An audience signal is not targeting. It does not limit who you show to; it gives Google a starting point from which to look for similar people. Without one the learning period runs longer and costs more. Google notes that signals keep feeding the system across the campaign's whole life, not just at the start.",
    resources: [
      { kind: "google", docId: "14530785", label: "About audience signals for Performance Max" },
      { kind: "google", docId: "14753570", label: "Add audience signals" },
      { kind: "internal", slug: "ga4-audiences-ecommerce-framework", label: "GA4 audiences for ecommerce" },
    ],
  },
  "pmax-37": {
    question:
      "Is your own customer list in the signal, or only Google's off-the-shelf audiences?",
    exampleGood:
      "Customer Match list and site visitors first, with in-market segments as a supplement.",
    exampleBad:
      "Only generic in-market audiences, which every one of your competitors also has.",
    why: "Google hands in-market segments to everyone equally, so they say nothing that is specific to you. Your customer list is the one thing in the whole account a competitor cannot copy. The caveat both Google and practice raise: a signal is only worth the data in it, so a stale list does not help.",
    resources: [
      { kind: "google", docId: "14530785", label: "About audience signals for Performance Max" },
      {
        kind: "industry",
        url: "https://searchengineland.com/google-ads-pmax-audience-signals-search-themes-463329",
        source: "Search Engine Land",
        label: "The truth about audience signals and search themes",
      },
      { kind: "internal", slug: "ga4-audiences-ecommerce-framework", label: "GA4 audiences for ecommerce" },
    ],
  },
  "pmax-38": {
    question:
      "Have you ever opened the tab that tells you what Google learned about your customers?",
    exampleGood:
      "Insights gets checked regularly, and ideas for themes, creative and new products come out of it.",
    exampleBad: "Never opened since the campaign launched.",
    why: "This is the one checkpoint on the list that does not fix damage but looks for opportunity, which is exactly why it always ends up last. Insights shows the search categories and audience segments that led to conversions, meaning things you did not know to look for. It is the cheapest market research you have, and you already paid for it.",
    resources: [
      { kind: "google", docId: "16279166", label: "Evaluate Performance Max results" },
      {
        kind: "industry",
        url: "https://searchengineland.com/performance-max-reporting-ecommerce-smx-next-465948",
        source: "Search Engine Land",
        label: "What PMax reporting shows and what it does not",
      },
      { kind: "internal", slug: "ga4-audiences-ecommerce-framework", label: "GA4 audiences for ecommerce" },
    ],
  },
};
