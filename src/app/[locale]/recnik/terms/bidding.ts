import type { TermPage } from "./types";

export const term: TermPage = {
  slug: "bidding",
  definitionSr:
    "Bidding je proces licitiranja u Google Ads aukciji koja se pokreće svaki put kad neka pretraga odgovori vašim ključnim rečima - vaš bid se kombinuje sa Quality Score-om kroz Ad Rank formulu koja određuje poziciju oglasa, a plaćate samo onoliko koliko je potrebno da pobedite sledeću poziciju. Postoje dva pristupa: Manual, gde sami određujete iznos za svaku ključnu reč, i Smart Bidding, gde algoritam sam podešava bid u realnom vremenu prema cilju kao što je tCPA ili tROAS.",
  definitionEn:
    "Bidding is the auction process that fires every time a search matches your keywords - your bid combines with Quality Score through the Ad Rank formula that sets your ad's position, and you only pay as much as it takes to beat the next position. There are two approaches: Manual, where you set the amount for each keyword yourself, and Smart Bidding, where an algorithm adjusts the bid in real time toward a goal like tCPA or tROAS.",
  takeSr:
    "Kad preuzmem nalog, najčešća greška koju vidim u bidding-u nije loš izbor strategije nego menjanje strategije svake nedelje ili postavljanje tCPA cilja prenisko od prvog dana, zato svakoj strategiji dajem minimum 3-4 nedelje i prvi tCPA cilj postavljam 20-30% iznad istorijskog proseka.",
  takeEn:
    "When I take over an account, the bidding mistake I see most often isn't a wrong strategy choice but switching strategy every week or setting a tCPA goal too low from day one, so I give every strategy a minimum of 3-4 weeks and set the first tCPA target 20-30% above the historical average.",
  exampleSr:
    "Nalog sa istorijskim prosekom CPA od 15 evra: ako odmah postavim tCPA cilj na 5 evra, algoritam ne nalazi dovoljno aukcija po toj ceni i potrošnja padne na minimum. Zato prvi cilj postavljam 20-30% iznad proseka, znači na 18-19,50 evra, i svake 2 nedelje ga spuštam za 10-15% dok ne stignem do željenog nivoa.",
  exampleEn:
    "Account with a historical average CPA of 15 EUR: if I set the tCPA goal to 5 EUR right away, the algorithm can't find enough auctions at that price and spend drops to a trickle. So I set the first target 20-30% above the average, meaning 18-19.50 EUR, and lower it by 10-15% every 2 weeks until it reaches the level I want.",
  guideSlug: "smart-bidding-vodic",
  guideLabelSr: "Kompletan vodič kroz Smart Bidding strategije",
  guideLabelEn: "The complete guide to Smart Bidding strategies",
  metaTitleSr: "Bidding: šta je i kako funkcioniše licitiranje",
  metaTitleEn: "Bidding: What It Is and How the Auction Works | Slobodan Jelisavac",
  metaDescriptionSr:
    "Bidding u Google Ads objašnjen: kako radi aukcija, razlika između Manual i Smart Bidding pristupa, i najčešća greška koju vidim kad preuzmem nov nalog.",
  metaDescriptionEn:
    "Bidding in Google Ads explained: how the auction works, Manual vs Smart Bidding, and the most common mistake I see when I take over a new account.",
};
