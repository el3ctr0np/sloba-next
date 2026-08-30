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

export function googleDocUrl(id: string): string {
  return `https://support.google.com/google-ads/answer/${id}?hl=${GOOGLE_DOC_LOCALE}`;
}

/**
 * One "read more" link.
 * - google:   Google's own documentation, by Help Centre article id
 * - industry: an independent PPC publication (never a competing agency)
 * - internal: one of our own posts, by this locale's slug
 */
export type Resource =
  | { kind: "google"; docId: string; label: string }
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
};
