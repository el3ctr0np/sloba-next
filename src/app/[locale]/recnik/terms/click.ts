import type { TermPage } from "./types";

export const term: TermPage = {
  slug: "click",
  definitionSr:
    "Klik je naplativa interakcija korisnika sa oglasom - na naslov, sliku, sitelink ili dugme za poziv - koju Google Ads registruje kao trošak. Google filtrira 'nevažeće klikove' (bot saobraćaj, duplikati, slučajni klikovi) i njih ne naplaćuje.",
  definitionEn:
    "A click is a billable user interaction with an ad - on the headline, image, sitelink, or call button - that Google Ads records as a cost. Google filters out 'invalid clicks' (bot traffic, duplicates, accidental clicks) and doesn't charge for them.",
  takeSr:
    "Ja nikad ne poredim broj klikova iz Google Ads-a direktno sa brojem sesija u GA4 - to su dva različita merenja (klik naspram GA4 'session start'), pa razlika od desetak procenata ne znači da tracking ne radi.",
  takeEn:
    "I never compare Google Ads click counts directly against GA4 sessions - they're two different measurements (a click versus GA4's 'session start'), so a gap of ten-odd percent doesn't mean tracking is broken.",
  exampleSr:
    "Kampanja u jednom danu dobije 800 klikova u Google Ads-u, a GA4 za isti period pokaže 690 sesija - razlika od 14% je unutar normalnog raspona i ne znači da je merenje pokvareno.",
  exampleEn:
    "A campaign gets 800 clicks in Google Ads in a single day, while GA4 shows 690 sessions for the same period - a 14% gap that's within the normal range and doesn't mean the measurement is broken.",
  guideSlug: "conversion-tracking-vodic",
  guideLabelSr: "Conversion tracking za Google Ads: zašto vaše kampanje ne rade",
  guideLabelEn: "Conversion Tracking for Google Ads: Why Your Campaigns Aren't Working",
  metaTitleSr: "Klik u Google Ads-u: šta se naplaćuje, a šta ne | Slobodan Jelisavac",
  metaTitleEn: "Click in Google Ads: What Gets Charged and What Doesn't | Slobodan Jelisavac",
  metaDescriptionSr:
    "Šta je klik u Google Ads-u, koji klikovi se ne naplaćuju i zašto se broj klikova ne poklapa sa GA4 sesijama. Definicija, primer i moj stav iz prakse.",
  metaDescriptionEn:
    "What counts as a click in Google Ads, which clicks aren't billed, and why click counts don't match GA4 sessions. Definition, example, and my practical take.",
};
