/**
 * Registar pojmova koji imaju svoju stranicu pod /recnik/<pojam>.
 *
 * Zbirna stranica /recnik i dalje nosi svih 64 pojma. Svoju stranicu dobija
 * samo pojam koji ima stvarnu mesecnu pretragu u Srbiji (Keyword Planner,
 * 12.9.2026) i koji NE konkurise postojecem blog postu. Zato ovde nema ROAS,
 * CTR, POAS, Demand Gen ni negativnih kljucnih reci: svaki od njih vec ima
 * svoj tekst koji rangira, pa bi stranica pojma bila konkurencija samom sebi.
 *
 * Izvor: Q4_SAJT_SPEC.md, talas 3.
 */
import type { TermPage } from "./types";

import { term as aov } from "./aov";
import { term as bidding } from "./bidding";
import { term as bingAds } from "./bing-ads";
import { term as click } from "./click";
import { term as cogs } from "./cogs";
import { term as conversionRate } from "./conversion-rate";
import { term as cpc } from "./cpc";
import { term as cpm } from "./cpm";
import { term as cpv } from "./cpv";
import { term as impressionShare } from "./impression-share";
import { term as impressions } from "./impressions";
import { term as landingPage } from "./landing-page";
import { term as ltv } from "./ltv";
import { term as serp } from "./serp";

export const termPages: TermPage[] = [
  cpc,
  cpv,
  cpm,
  cogs,
  ltv,
  aov,
  serp,
  impressions,
  impressionShare,
  conversionRate,
  landingPage,
  bidding,
  bingAds,
  click,
];

/** Slugovi pojmova koji imaju svoju stranicu. */
export const termPageSlugs: string[] = termPages.map((t) => t.slug);

/** Brza pretraga po slug-u. undefined znaci: pojam zivi samo na zbirnoj stranici. */
export function getTermPage(slug: string): TermPage | undefined {
  return termPages.find((t) => t.slug === slug);
}

/** Da li pojam ima svoju stranicu (koristi zbirna stranica za linkovanje). */
export function hasTermPage(slug: string): boolean {
  return termPages.some((t) => t.slug === slug);
}

export type { TermPage };
