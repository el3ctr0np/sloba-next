/**
 * Pojedinacna stranica pojma pod /recnik/<pojam> (EN: /glossary/<term>).
 *
 * Zbirna stranica /recnik nosi svih 64 pojma i ostaje kako jeste. Svoju
 * stranicu dobija samo pojam koji ima stvarnu pretragu u Srbiji i koji ne
 * konkurise postojecem blog postu (Q4_SAJT_SPEC.md, talas 3).
 *
 * Ocekivanje je jasno zapisano u specu: ovo nece doneti saobracaj, srpsko
 * trziste je premalo. Vrednost je u unutrasnjem povezivanju i u tome sto AI
 * asistenti citiraju definicije.
 *
 * Sva cetiri dela su obavezna. Bez "Slobinog stava" stranica je jedna od
 * hiljadu istih definicija i nema razlog da postoji.
 */
export type TermPage = {
  /** Mora da odgovara slug-u istog pojma u glossary-data.ts */
  slug: string;

  /** 1. Definicija u dve recenice. */
  definitionSr: string;
  definitionEn: string;

  /** 2. Slobin stav, jedna recenica. Prvo lice jednine, bez obecanja rezultata. */
  takeSr: string;
  takeEn: string;

  /** 3. Konkretan primer sa brojkom. */
  exampleSr: string;
  exampleEn: string;

  /** 4. Link ka dubinskom vodicu: kanonski (SR) slug blog posta. */
  guideSlug: string;
  /** Tekst linka ka vodicu, po jeziku. */
  guideLabelSr: string;
  guideLabelEn: string;

  /** Meta naslov i opis za pretragu. */
  metaTitleSr: string;
  metaTitleEn: string;
  metaDescriptionSr: string;
  metaDescriptionEn: string;
};
