import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";

function KolikoKostaGoogleAdsPost() {
  return (
    <>
      <p>
        &quot;Koliko koÅ¡ta Google Ads?&quot; Ovo je prvo pitanje koje Äujem od
        svakog direktora marketinga ili vlasnika firme koji razmiÅ¡lja o plaÄ‡enom
        oglaÅ¡avanju. I razumem frustraciju â€” Google vam neÄ‡e dati jasan odgovor,
        a veÄ‡ina sadrÅ¾aja na ovu temu dolazi iz SAD-a gde su cene potpuno
        drugaÄije.
      </p>
      <p>
        Cena Google Ads-a zavisi od industrije, konkurencije i kvaliteta vaÅ¡ih
        kampanja. U ovom vodiÄu dobijate realan okvir za planiranje budÅ¾eta i
        procenu oÄekivanja pre nego Å¡to potroÅ¡ite prvi dinar.
      </p>
      <ul>
        <li>Kako Google Ads naplaÄ‡uje (i zaÅ¡to je to vaÅ¾no)</li>
        <li>Realne CPC cene po industrijama u Srbiji i regionu</li>
        <li>Minimalni budÅ¾et koji ima smisla</li>
        <li>TroÅ¡kovi agencije vs. freelancer vs. in-house</li>
        <li>Kako izraÄunati ROI pre pokretanja kampanja</li>
        <li>Skriveni troÅ¡kovi koje mnogi zaborave</li>
      </ul>

      <h2>Kako Google Ads naplaÄ‡uje?</h2>
      <p>
        Google Ads koristi aukcijski sistem. Svaki put kada neko ukuca pretragu,
        deÅ¡ava se mini-aukcija izmeÄ‘u oglaÅ¡ivaÄa koji ciljaju tu kljuÄnu reÄ. Vi
        plaÄ‡ate samo kada neko klikne na vaÅ¡ oglas â€” pay-per-click (PPC).
      </p>

      <h3>Cena po kliku (CPC)</h3>
      <ul>
        <li>Konkurencija â€” viÅ¡e oglaÅ¡ivaÄa znaÄi viÅ¡u cenu.</li>
        <li>Quality Score â€” viÅ¡i skor smanjuje cenu klika.</li>
        <li>Pozicija oglasa â€” viÅ¡a pozicija koÅ¡ta viÅ¡e.</li>
        <li>Industrija â€” osiguranje i advokati su skuplji od eCommerce-a.</li>
        <li>Geografija â€” Srbija je jeftinija od NemaÄke ili UK.</li>
      </ul>

      <h3>Å ta plaÄ‡ate pored klikova</h3>
      <ul>
        <li>CPC â€” plaÄ‡ate po kliku (Search, Shopping).</li>
        <li>CPM â€” plaÄ‡ate po 1.000 prikaza (Display, YouTube).</li>
        <li>CPV â€” plaÄ‡ate po pregledu videa (YouTube).</li>
        <li>CPA â€” plaÄ‡ate po konverziji (napredne strategije).</li>
      </ul>

      <h2>Realne CPC cene po industrijama u Srbiji</h2>
      <p>ProseÄne vrednosti koje viÄ‘am kod klijenata u regionu (2025â€“2026):</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Industrija</th>
              <th className="py-2 pr-4">ProseÄan CPC (EUR)</th>
              <th className="py-2">Raspon</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce - moda</td>
              <td className="py-2 pr-4">â‚¬0.15 - â‚¬0.40</td>
              <td className="py-2">â‚¬0.08 - â‚¬0.80</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce - elektronika</td>
              <td className="py-2 pr-4">â‚¬0.20 - â‚¬0.50</td>
              <td className="py-2">â‚¬0.10 - â‚¬1.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">NameÅ¡taj</td>
              <td className="py-2 pr-4">â‚¬0.25 - â‚¬0.60</td>
              <td className="py-2">â‚¬0.15 - â‚¬1.20</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">B2B usluge</td>
              <td className="py-2 pr-4">â‚¬0.40 - â‚¬1.20</td>
              <td className="py-2">â‚¬0.20 - â‚¬3.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">SaaS (regionalni)</td>
              <td className="py-2 pr-4">â‚¬0.80 - â‚¬2.50</td>
              <td className="py-2">â‚¬0.30 - â‚¬5.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Nekretnine</td>
              <td className="py-2 pr-4">â‚¬0.30 - â‚¬0.80</td>
              <td className="py-2">â‚¬0.15 - â‚¬1.50</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Turizam</td>
              <td className="py-2 pr-4">â‚¬0.20 - â‚¬0.60</td>
              <td className="py-2">â‚¬0.10 - â‚¬1.20</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Finansije/Osiguranje</td>
              <td className="py-2 pr-4">â‚¬1.00 - â‚¬4.00</td>
              <td className="py-2">â‚¬0.50 - â‚¬8.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Zdravstvo/Klinike</td>
              <td className="py-2 pr-4">â‚¬0.50 - â‚¬1.50</td>
              <td className="py-2">â‚¬0.25 - â‚¬3.00</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Obrazovanje</td>
              <td className="py-2 pr-4">â‚¬0.30 - â‚¬0.90</td>
              <td className="py-2">â‚¬0.15 - â‚¬2.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500">
        Napomena: ovo su cene za srpsko trÅ¾iÅ¡te. Za NemaÄku ili UK, raÄunajte
        3â€“5x viÅ¡e.
      </p>
      <h3>ZaÅ¡to je raspon toliko Å¡irok?</h3>
      <ul>
        <li>KljuÄne reÄi â€” branded termini su jeftiniji od generiÄkih.</li>
        <li>Namera pretrage â€” â€œkupiâ€ koÅ¡ta viÅ¡e od â€œinformiÅ¡i seâ€.</li>
        <li>Kvalitet naloga â€” optimizovan nalog plaÄ‡a i do 50% manje.</li>
        <li>Sezona â€” Black Friday nije isto Å¡to i februar.</li>
      </ul>

      <h2>Minimalni budÅ¾et koji ima smisla</h2>
      <p>
        TehniÄki moÅ¾ete krenuti sa â‚¬100 meseÄno, ali praktiÄno to retko daje
        dovoljno podataka za optimizaciju.
      </p>
      <div className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50">
        <p className="font-semibold">
          Minimalni meseÄni budÅ¾et = (ciljani broj klikova) Ã— (proseÄan CPC) Ã— 30
          dana
        </p>
        <ul className="mt-3 text-gray-600">
          <li>eCommerce (CPC â‚¬0.30): â‚¬90â€“135 meseÄno minimum</li>
          <li>B2B usluge (CPC â‚¬0.80): â‚¬240â€“360 meseÄno minimum</li>
          <li>SaaS (CPC â‚¬1.50): â‚¬450â€“675 meseÄno minimum</li>
        </ul>
      </div>
      <p>
        Za stabilne rezultate i optimizaciju, realnije preporuke su:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Tip biznisa</th>
              <th className="py-2">PreporuÄeni meseÄni budÅ¾et</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Lokalni biznis</td>
              <td className="py-2">â‚¬300 - â‚¬800</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce (manji)</td>
              <td className="py-2">â‚¬500 - â‚¬1,500</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce (srednji)</td>
              <td className="py-2">â‚¬1,500 - â‚¬5,000</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">B2B usluge</td>
              <td className="py-2">â‚¬800 - â‚¬2,500</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">SaaS</td>
              <td className="py-2">â‚¬1,500 - â‚¬5,000+</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>ZaÅ¡to ne preporuÄujem mikro-budÅ¾ete</h3>
      <ul>
        <li>Nema dovoljno podataka za optimizaciju.</li>
        <li>Algoritmi nemaju Å¡ta da nauÄe.</li>
        <li>Ne moÅ¾ete testirati razliÄite pristupe.</li>
        <li>ROI je teÅ¡ko pouzdano meriti.</li>
      </ul>

      <h2>TroÅ¡kovi upravljanja: agencija vs. freelancer vs. in-house</h2>
      <h3>1. Agencija</h3>
      <p className="font-semibold">TipiÄni modeli naplate:</p>
      <ul>
        <li>Procenat od ad spend-a: 10â€“20%</li>
        <li>Fiksna meseÄna naknada: â‚¬500â€“2,500</li>
        <li>Hibrid: manja fiksna + procenat</li>
      </ul>
      <p className="font-semibold">Prednosti:</p>
      <ul>
        <li>Tim struÄnjaka i alati.</li>
        <li>Kontinuitet i iskustvo iz viÅ¡e industrija.</li>
      </ul>
      <p className="font-semibold">Mane:</p>
      <ul>
        <li>Skuplje za manje budÅ¾ete.</li>
        <li>Manje personalizovana paÅ¾nja.</li>
      </ul>

      <h3>2. Freelancer/Konsultant</h3>
      <p className="font-semibold">TipiÄni modeli naplate:</p>
      <ul>
        <li>Fiksna meseÄna naknada: â‚¬300â€“1,200</li>
        <li>Satnica: â‚¬30â€“80/sat</li>
        <li>Retainer + procenat</li>
      </ul>
      <p className="font-semibold">Prednosti:</p>
      <ul>
        <li>Direktna komunikacija i fleksibilnost.</li>
        <li>Personalizovaniji pristup.</li>
      </ul>
      <p className="font-semibold">Mane:</p>
      <ul>
        <li>Zavisnost od jedne osobe.</li>
        <li>OgraniÄen kapacitet.</li>
      </ul>

      <h3>3. In-house</h3>
      <p className="font-semibold">TroÅ¡kovi:</p>
      <ul>
        <li>Plata: â‚¬800â€“2,500 meseÄno (Srbija)</li>
        <li>Alati: â‚¬100â€“500 meseÄno</li>
        <li>Obuke: â‚¬500â€“2,000 godiÅ¡nje</li>
      </ul>
      <p className="font-semibold">Prednosti:</p>
      <ul>
        <li>Potpuna kontrola i brzo donoÅ¡enje odluka.</li>
        <li>Duboko razumevanje biznisa.</li>
      </ul>
      <p className="font-semibold">Mane:</p>
      <ul>
        <li>Skupo za manje kompanije.</li>
        <li>Rizik od stagnacije znanja.</li>
      </ul>

      <h3>Moja preporuka</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">MeseÄni ad spend</th>
              <th className="py-2">PreporuÄena opcija</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Do â‚¬1,000</td>
              <td className="py-2">Freelancer ili DIY sa konsultacijama</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">â‚¬1,000 - â‚¬5,000</td>
              <td className="py-2">Freelancer/konsultant</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">â‚¬5,000 - â‚¬20,000</td>
              <td className="py-2">Specijalizovana agencija ili senior freelancer</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">â‚¬20,000+</td>
              <td className="py-2">Agencija + in-house koordinator</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Kako izraÄunati ROI pre nego Å¡to potroÅ¡ite prvi dinar</h2>
      <ol>
        <li>Poznajte proseÄnu vrednost kupca (AOV, marÅ¾a, LTV).</li>
        <li>
          DefiniÅ¡ite maksimalni CPA koji moÅ¾ete da platite a da ostanete
          profitabilni.
        </li>
        <li>Procenite conversion rate za vaÅ¡ sajt.</li>
        <li>
          IzraÄunajte break-even CPC:{" "}
          <span className="font-semibold">Maksimalni CPA Ã— Conversion Rate</span>
        </li>
      </ol>
      <p>
        Ako je proseÄan CPC niÅ¾i od break-even vrednosti, imate prostora za
        profit. Ako je viÅ¡i, morate poveÄ‡ati conversion rate ili AOV.
      </p>

      <h2>Skriveni troÅ¡kovi o kojima niko ne priÄa</h2>
      <h3>1. Landing page-ovi</h3>
      <ul>
        <li>Å ablonski: â‚¬200â€“500 (jednokratno)</li>
        <li>Custom dizajn: â‚¬500â€“2,000 (jednokratno)</li>
        <li>A/B testiranje: ongoing troÅ¡ak</li>
      </ul>
      <h3>2. Kreative i content</h3>
      <ul>
        <li>Product feed optimizacija: â‚¬200â€“500</li>
        <li>Ad copy: â‚¬100â€“300 meseÄno</li>
        <li>Slike za Display/YouTube: â‚¬100â€“500</li>
      </ul>
      <h3>3. Alati</h3>
      <ul>
        <li>Keyword research: â‚¬50â€“200 meseÄno</li>
        <li>Competitor analysis: â‚¬50â€“150 meseÄno</li>
        <li>Reporting: â‚¬30â€“100 meseÄno</li>
      </ul>
      <h3>4. Conversion tracking setup</h3>
      <ul>
        <li>GA4 + GTM setup: â‚¬200â€“500</li>
        <li>Enhanced conversions: â‚¬100â€“300</li>
        <li>Server-side tracking: â‚¬300â€“800</li>
      </ul>
      <h3>5. Vreme za uÄenje</h3>
      <p>
        Ako radite sami, raÄunajte na 3â€“6 meseci pre nego Å¡to uÄ‘ete u stabilan
        ritam optimizacije.
      </p>

      <h2>Kada Google Ads nije pravi izbor</h2>
      <ul>
        <li>Nemate jasno definisan proizvod/uslugu.</li>
        <li>MarÅ¾e su ispod 20%.</li>
        <li>Nema potraÅ¾nje za onim Å¡to nudite.</li>
        <li>Website nije spreman (UX i ponuda nisu dovoljno jasni).</li>
        <li>Nemate budÅ¾et za 3â€“6 meseci testiranja.</li>
      </ul>

      <h2>SledeÄ‡i koraci</h2>
      <ol>
        <li>IzraÄunajte maksimalni CPA.</li>
        <li>Proverite CPC u Keyword Planner-u.</li>
        <li>DefiniÅ¡ite realan test budÅ¾et za minimum 3 meseca.</li>
        <li>OdluÄite da li radite sami, sa freelancerom ili agencijom.</li>
      </ol>
      <p>
        Ako vam treba pomoÄ‡ oko analize ili strategije, pogledajte{" "}
        <Link href="/usluge/google-ads-upravljanje" className="underline">
          Google Ads upravljanje
        </Link>{" "}
        ili{" "}
        <Link href="/kontakt" className="underline">
          zakaÅ¾ite besplatne konsultacije
        </Link>
        .
      </p>

      <h2>FAQ</h2>
      <h3>Koliko minimalno treba uloÅ¾iti u Google Ads?</h3>
      <p>
        TehniÄki minimum je â‚¬1 dnevno, ali za smislene rezultate raÄunajte na
        â‚¬300â€“500 meseÄno za lokalne biznise i â‚¬1,000+ za eCommerce ili B2B.
      </p>
      <h3>Da li se Google Ads isplati za mali biznis?</h3>
      <p>
        Da, ako imate jasnu vrednost po kupcu i konkurentne marÅ¾e. Male firme
        su Äesto fleksibilnije i brÅ¾e optimizuju kampanje.
      </p>
      <h3>Koliko vremena treba da Google Ads donese rezultate?</h3>
      <p>
        Prve indikacije su vidljive za 2â€“4 nedelje, dok stabilne performanse
        dolaze nakon 2â€“3 meseca.
      </p>
      <h3>ZaÅ¡to su cene toliko razliÄite po industrijama?</h3>
      <p>
        Zbog konkurencije i vrednosti konverzije. Advokat moÅ¾e platiti â‚¬50 po
        kliku jer jedan klijent vredi â‚¬5,000.
      </p>
      <h3>Da li Google Ads koÅ¡ta viÅ¡e nego Facebook Ads?</h3>
      <p>
        Generalno da, CPC je viÅ¡i. Ali intent korisnika je jaÄi â€” pretraga
        &quot;kupi X&quot; je bliÅ¾a kupovini od scrollovanja feed-a.
      </p>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje aÅ¾uriranje: Januar 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}

function GoogleOglasavanjeZaFirmePost() {
  return (
    <>
      <p>
        Google oglaÅ¡avanje je najmoÄ‡niji kanal za biznise koji Å¾ele da dosegnu
        kupce sa namerom kupovine. Za razliku od druÅ¡tvenih mreÅ¾a gde &quot;upadate&quot;
        ljude dok skroluju, na Google-u doseÅ¾ete ljude koji aktivno traÅ¾e vaÅ¡
        proizvod ili uslugu. Ta razlika u nameri je kljuÄna.
      </p>
      <p>
        Google Ads nije jedinstven sistem â€” to je ekosistem razliÄitih tipova
        kampanja, mreÅ¾a i strategija. Ono Å¡to radi za eCommerce ne radi uvek za
        B2B. Ono Å¡to ima smisla za lokalni biznis nema smisla za meÄ‘unarodni
        brend.
      </p>
      <ul>
        <li>Kako Google oglaÅ¡avanje funkcioniÅ¡e</li>
        <li>Sve tipove kampanja i kada koji koristiti</li>
        <li>SpecifiÄne strategije za eCommerce i B2B</li>
        <li>Kako postaviti temelje za uspeÅ¡ne kampanje</li>
        <li>NajÄeÅ¡Ä‡e greÅ¡ke koje vidim kod firmi u Srbiji</li>
      </ul>

      <h2>Kako Google oglaÅ¡avanje funkcioniÅ¡e</h2>
      <h3>Aukcijski model</h3>
      <p>
        Google Ads radi na principu aukcije u realnom vremenu. Svaki put kada
        neko ukuca pretragu, deÅ¡ava se aukcija meÄ‘u oglaÅ¡ivaÄima koji ciljaju tu
        kljuÄnu reÄ. Pobednik (ili viÅ¡e njih) dobija prikaz oglasa.
      </p>
      <p>
        Google koristi formulu:{" "}
        <span className="font-semibold">
          Ad Rank = Bid Ã— Quality Score Ã— OÄekivani uticaj ekstenzija
        </span>
        . To znaÄi da oglaÅ¡ivaÄ sa boljim Quality Score-om moÅ¾e da plati manje i
        da bude iznad konkurenta koji plaÄ‡a viÅ¡e.
      </p>

      <h3>Quality Score: vaÅ¡ skriveni adut</h3>
      <p>Quality Score (1-10) zavisi od:</p>
      <ul>
        <li>CTR (Click-Through Rate) â€” koliko Äesto ljudi kliknu na oglas</li>
        <li>Relevantnosti oglasa â€” koliko oglas odgovara pretrazi</li>
        <li>Landing page iskustva â€” brzina, relevantnost, mobilna optimizacija</li>
      </ul>
      <p>Visok Quality Score znaÄi niÅ¾u cenu po kliku i bolje pozicije.</p>

      <h3>MreÅ¾e i gde se prikazuju oglasi</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">MreÅ¾a</th>
              <th className="py-2 pr-4">Gde se prikazuju</th>
              <th className="py-2">Tip kampanja</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Search</td>
              <td className="py-2 pr-4">Google.com rezultati pretrage</td>
              <td className="py-2">Search, Shopping</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Display</td>
              <td className="py-2 pr-4">2+ miliona web sajtova i aplikacija</td>
              <td className="py-2">Display, Remarketing</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">YouTube</td>
              <td className="py-2 pr-4">Pre/tokom/posle video sadrÅ¾aja</td>
              <td className="py-2">Video kampanje</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Discover</td>
              <td className="py-2 pr-4">Google Discover feed, Gmail</td>
              <td className="py-2">Demand Gen</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Maps</td>
              <td className="py-2 pr-4">Google Maps rezultati</td>
              <td className="py-2">Local kampanje</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Tipovi Google Ads kampanja</h2>
      <h3>1. Search kampanje</h3>
      <p>
        Tekstualni oglasi koji se prikazuju na vrhu Google pretrage. Najbolji
        izbor kada korisnici aktivno traÅ¾e ono Å¡to nudite.
      </p>
      <p className="font-semibold">Za koga:</p>
      <ul>
        <li>âœ“ B2B usluge</li>
        <li>âœ“ Lokalni biznisi</li>
        <li>âœ“ SaaS</li>
        <li>âœ“ eCommerce (uz Shopping)</li>
      </ul>

      <h3>2. Shopping kampanje</h3>
      <p>
        Vizuelni oglasi sa slikom proizvoda, cenom i nazivom prodavnice. Idealno
        za online prodavnice.
      </p>
      <p className="font-semibold">Zahtevi:</p>
      <ul>
        <li>Google Merchant Center nalog</li>
        <li>Product feed</li>
        <li>Povezan Google Ads nalog</li>
      </ul>

      <h3>3. Performance Max (PMax)</h3>
      <p>
        Google-ova &quot;sve u jednom&quot; kampanja koja automatski prikazuje oglase na
        svim mreÅ¾ama.
      </p>
      <ul>
        <li>âœ“ eCommerce sa dokazanim proizvodima</li>
        <li>âœ“ Lead gen sa volumenom</li>
        <li>âš ï¸ Oprezno za manje budÅ¾ete</li>
      </ul>

      <h3>4. Display kampanje</h3>
      <p>
        Banner oglasi na web sajtovima, aplikacijama i YouTube-u. NajÄeÅ¡Ä‡e za
        brand awareness i remarketing.
      </p>

      <h3>5. Video kampanje (YouTube)</h3>
      <p>
        Video oglasi na YouTube-u (pre-roll, mid-roll, in-feed). Dobri za
        proizvode koji zahtevaju objaÅ¡njenje.
      </p>

      <h3>6. Demand Gen</h3>
      <p>
        Vizuelni oglasi za Discover, Gmail i YouTube. Dobra alternativa Meta
        Ads-u kada imate jak vizuelni content.
      </p>

      <h2>Google oglaÅ¡avanje za eCommerce</h2>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>
          Brand Search (brand kljuÄne reÄi){"\n"}
          Standard Shopping (kontrolisane kampanje){"\n"}
          Performance Max (skaliranje){"\n"}
          Search Generic (non-brand pretrage){"\n"}
          Remarketing (povratak posetilaca)
        </code>
      </pre>

      <h3>Product feed: temelj svega</h3>
      <p>KljuÄni atributi:</p>
      <ul>
        <li>Title â€” kljuÄne reÄi, brand, atributi (boja, veliÄina)</li>
        <li>Description â€” detaljan opis sa relevantnim terminima</li>
        <li>Product Type â€” precizna kategorija</li>
        <li>GTIN/MPN â€” jedinstveni identifikatori proizvoda</li>
        <li>Custom Labels â€” segmentacija po marÅ¾i, sezoni, performansama</li>
      </ul>

      <h3>Shopping vs Performance Max</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border-2 border-gray-900 rounded-lg p-4">
          <p className="font-semibold mb-2">Standard Shopping</p>
          <ul className="text-gray-700">
            <li>ViÅ¡e kontrole nad bidovima</li>
            <li>Jasniji uvid u search terms</li>
            <li>Bolji za testiranje novih proizvoda</li>
          </ul>
        </div>
        <div className="border-2 border-gray-900 rounded-lg p-4">
          <p className="font-semibold mb-2">Performance Max</p>
          <ul className="text-gray-700">
            <li>Doseg na svim mreÅ¾ama</li>
            <li>Bolje za skaliranje dokazanih proizvoda</li>
            <li>Manje ruÄnog rada</li>
          </ul>
        </div>
      </div>
      <p>
        Moja preporuka: hibridni pristup â€” Standard Shopping za kontrolu, PMax
        za skaliranje.
      </p>

      <h3>Remarketing za eCommerce</h3>
      <ul>
        <li>Cart abandoners â€” dodali u korpu, nisu kupili (1-7 dana)</li>
        <li>Product viewers â€” gledali proizvod, nisu dodali (3-14 dana)</li>
        <li>Past customers â€” kupili, potencijal za repeat (30-180 dana)</li>
        <li>High-value customers â€” kupili viÅ¡e puta</li>
      </ul>

      <h2>Google oglaÅ¡avanje za B2B</h2>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>
          Brand Search (zaÅ¡tita brenda){"\n"}
          Solution Search (&quot;CRM softver&quot;){"\n"}
          Problem Search (&quot;kako automatizovati procese&quot;){"\n"}
          Competitor Search (imena konkurenata){"\n"}
          Remarketing (nurturing)
        </code>
      </pre>

      <h3>KljuÄne razlike od B2C</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Aspekt</th>
              <th className="py-2 pr-4">B2C</th>
              <th className="py-2">B2B</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Sales cycle</td>
              <td className="py-2 pr-4">Kratak (minuti-dani)</td>
              <td className="py-2">Dug (nedelje-meseci)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Konverzija</td>
              <td className="py-2 pr-4">Direktna kupovina</td>
              <td className="py-2">Lead (forma, demo)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Targeting</td>
              <td className="py-2 pr-4">Å irok</td>
              <td className="py-2">UÅ¾i, specifiÄniji</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Keywords</td>
              <td className="py-2 pr-4">Transakcioni</td>
              <td className="py-2">Informativni + transakcioni</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">CPC</td>
              <td className="py-2 pr-4">ObiÄno niÅ¾i</td>
              <td className="py-2">ObiÄno viÅ¡i</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Volume</td>
              <td className="py-2 pr-4">VeÄ‡i</td>
              <td className="py-2">Manji</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Lead quality vs quantity</h3>
      <ul>
        <li>Offline conversion tracking iz CRM-a</li>
        <li>Lead scoring i segmentacija</li>
        <li>Agresivne negative keywords liste</li>
      </ul>

      <h3>Remarketing za B2B</h3>
      <ol>
        <li>Top of funnel â€” blog Äitaoci â†’ lead magnet</li>
        <li>Middle of funnel â€” lead magnet â†’ case study, webinar</li>
        <li>Bottom of funnel â€” pricing/demo â†’ direktna ponuda</li>
      </ol>

      <h2>Postavljanje temelja za uspeÅ¡ne kampanje</h2>
      <h3>1. Conversion tracking</h3>
      <ul>
        <li>Google Tag Manager</li>
        <li>GA4</li>
        <li>Google Ads conversion tag</li>
        <li>Enhanced conversions</li>
      </ul>
      <p>
        Pratite primarne konverzije (kupovina, lead), sekundarne konverzije i
        micro konverzije (scroll, video view, vreme na sajtu).
      </p>

      <h3>2. Landing pages</h3>
      <ul>
        <li>Jasan headline koji odgovara oglasu</li>
        <li>Benefit-focused copy</li>
        <li>Social proof (testimonijali, logoi klijenata)</li>
        <li>Jedan CTA</li>
        <li>Brzina ispod 3 sekunde</li>
      </ul>

      <h3>3. Keyword research</h3>
      <ul>
        <li>Google Keyword Planner</li>
        <li>Semrush/Ahrefs</li>
        <li>Google Search Console</li>
      </ul>

      <h3>4. Competitor analysis</h3>
      <ul>
        <li>Ko se oglaÅ¡ava na vaÅ¡e kljuÄne reÄi?</li>
        <li>Kakve oglase koriste?</li>
        <li>Na koje landing pages vode?</li>
        <li>Koji su im USP-ovi?</li>
      </ul>

      <h2>NajÄeÅ¡Ä‡e greÅ¡ke koje vidim</h2>
      <ol>
        <li>Nedostatak tracking-a</li>
        <li>LoÅ¡a struktura naloga</li>
        <li>Ignorisanje negativnih kljuÄnih reÄi</li>
        <li>Slanje saobraÄ‡aja na homepage</li>
        <li>Nerealna oÄekivanja</li>
        <li>Set-and-forget mentalitet</li>
      </ol>

      <h2>Kako meriti uspeh</h2>
      <h3>KljuÄni KPI-jevi</h3>
      <p className="font-semibold">Za eCommerce:</p>
      <ul>
        <li>ROAS</li>
        <li>CPA</li>
        <li>Conversion Rate</li>
        <li>AOV</li>
      </ul>
      <p className="font-semibold">Za B2B:</p>
      <ul>
        <li>CPL</li>
        <li>Lead Quality Score</li>
        <li>SQL Rate</li>
        <li>Pipeline Value</li>
      </ul>

      <h3>Benchmark-ovi za region</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Metrika</th>
              <th className="py-2 pr-4">eCommerce</th>
              <th className="py-2">B2B</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">CTR</td>
              <td className="py-2 pr-4">2-4%</td>
              <td className="py-2">3-6%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Conversion Rate</td>
              <td className="py-2 pr-4">1-3%</td>
              <td className="py-2">2-8%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">CPC (prosek)</td>
              <td className="py-2 pr-4">â‚¬0.20-0.60</td>
              <td className="py-2">â‚¬0.50-2.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">ROAS (cilj)</td>
              <td className="py-2 pr-4">3-5x</td>
              <td className="py-2">-</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">CPL (cilj)</td>
              <td className="py-2 pr-4">-</td>
              <td className="py-2">â‚¬10-50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>SledeÄ‡i koraci</h2>
      <ol>
        <li>Postavite tracking (nulti korak).</li>
        <li>DefiniÅ¡ite ciljeve (ROAS, CPL, broj prodaja).</li>
        <li>Pripremite landing pages.</li>
        <li>Krenite sa Search kampanjama.</li>
        <li>Budite strpljivi (2-3 meseca pre evaluacije).</li>
      </ol>
      <p>
        Ako vam treba pomoÄ‡ sa setup-om ili specifiÄnim pitanjima,{" "}
        <Link href="/kontakt" className="underline">
          zakaÅ¾ite konsultacije
        </Link>
        .
      </p>

      <h2>FAQ</h2>
      <h3>Koliko koÅ¡ta Google oglaÅ¡avanje?</h3>
      <p>
        U Srbiji, proseÄan CPC je â‚¬0.15-1.50. PreporuÄeni minimalni meseÄni
        budÅ¾et je â‚¬500-1,000 za manje biznise, â‚¬2,000+ za ozbiljnije kampanje.
      </p>
      <h3>Da li Google oglaÅ¡avanje radi za B2B?</h3>
      <p>
        Da. B2B ima duÅ¾i sales cycle i manji volume, ali Google Ads je i dalje
        jedan od najefikasnijih kanala za B2B lead generation.
      </p>
      <h3>Koliko vremena treba da vidim rezultate?</h3>
      <p>
        Prve indikacije za 2-4 nedelje. Prave rezultate za 2-3 meseca. Stabilan
        nalog za 4-6 meseci.
      </p>
      <h3>Da li mi treba agencija za Google oglaÅ¡avanje?</h3>
      <p>
        Ne obavezno. Za manje budÅ¾ete (do â‚¬2,000), kvalitetan freelancer ili
        DIY sa edukacijom moÅ¾e biti dovoljan. Za veÄ‡e budÅ¾ete i kompleksnije
        kampanje, agencija ima smisla.
      </p>
      <h3>Å ta je bolje: Google Ads ili Facebook Ads?</h3>
      <p>
        Google Ads hvata ljude sa namerom (&quot;hoÄ‡u da kupim X&quot;), Facebook Ads
        hvata ljude po interesovanjima i demografiji. Za direktne prodaje,
        obiÄno Google. Za brand awareness, obiÄno Facebook. Najbolje: kombinacija.
      </p>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje aÅ¾uriranje: Januar 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}

function PerformanceMaxVodicPost() {
  return (
    <>
      <p>
        Performance Max (PMax) je Google-ova kampanja koja obeÄ‡ava jednostavnost:
        dajte algoritmu kreativu, budÅ¾et i cilj â€” on Ä‡e naÄ‡i kupce na svim Google
        mreÅ¾ama. ZvuÄi idealno, ali realnost je komplikovanija.
      </p>
      <p>
        PMax moÅ¾e biti izuzetno efikasan kanal, ali moÅ¾e biti i crna rupa koja
        guta budÅ¾et bez jasnog uvida kuda odlazi novac. Razlika je u pristupu.
      </p>
      <ul>
        <li>Kako PMax funkcioniÅ¡e</li>
        <li>Kada ima smisla koristiti PMax (i kada ne)</li>
        <li>Struktura i asset grupe</li>
        <li>SpecifiÄnosti za eCommerce vs B2B</li>
        <li>Kako optimizovati ono nad Äim nemate potpunu kontrolu</li>
        <li>Realni rezultati i oÄekivanja</li>
      </ul>

      <h2>Kako Performance Max funkcioniÅ¡e</h2>
      <h3>Osnove</h3>
      <p>
        PMax je automatizovana kampanja koja koristi machine learning da prikaÅ¾e
        vaÅ¡e oglase na svim Google mreÅ¾ama:
      </p>
      <ul>
        <li>Google Search</li>
        <li>Google Shopping</li>
        <li>Display Network</li>
        <li>YouTube</li>
        <li>Gmail</li>
        <li>Discover</li>
        <li>Maps</li>
      </ul>
      <p className="font-semibold">Vi dajete:</p>
      <ul>
        <li>Ciljeve â€” konverzije koje Å¾elite</li>
        <li>BudÅ¾et â€” koliko ste spremni da troÅ¡ite</li>
        <li>Asset-e â€” slike, video, tekstove, logoe</li>
        <li>Audience signale â€” ko je vaÅ¡a ciljna publika</li>
        <li>Product feed â€” za eCommerce</li>
      </ul>
      <p className="font-semibold">Google radi:</p>
      <ul>
        <li>Kombinuje asset-e u razliÄite formate oglasa</li>
        <li>OdluÄuje gde i kada prikazati oglase</li>
        <li>Automatski bidduje za konverzije</li>
      </ul>

      <h3>ZaÅ¡to je PMax &quot;crna kutija&quot;</h3>
      <ul>
        <li>Ne vidite search terms u potpunosti</li>
        <li>Ne znate taÄno koliko ide na koji kanal</li>
        <li>Ne moÅ¾ete iskljuÄiti veÄ‡inu placements</li>
        <li>Ne kontroliÅ¡ete bid po keyword-u</li>
      </ul>
      <p>
        Dobijate agregirane podatke i morate verovati algoritmu.
      </p>

      <h2>Kada koristiti Performance Max</h2>
      <h3>PMax ima smisla kada</h3>
      <ul>
        <li>Imate proven conversion history (minimum 30 meseÄno, idealno 50+)</li>
        <li>Å½elite skaliranje nakon plafona na Search/Shopping</li>
        <li>Imate kvalitetne asset-e</li>
        <li>Spremni ste na manje kontrole i learning period</li>
      </ul>
      <h3>PMax nema smisla kada</h3>
      <ul>
        <li>Tek poÄinjete sa Google Ads</li>
        <li>BudÅ¾et je ispod â‚¬1,000-1,500 meseÄno</li>
        <li>Potrebna vam je granularna kontrola</li>
        <li>Conversion tracking nije 100% taÄan</li>
      </ul>

      <h2>Struktura Performance Max kampanje</h2>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>
          PMax Kampanja{"\n"}
          â”œâ”€â”€ Cilj kampanje (konverzija){"\n"}
          â”œâ”€â”€ BudÅ¾et (dnevni){"\n"}
          â”œâ”€â”€ Bid strategija (Maximize / Target CPA / Target ROAS){"\n"}
          â”œâ”€â”€ Asset Grupa 1{"\n"}
          â”‚   â”œâ”€â”€ Asset-i (slike, video, tekst){"\n"}
          â”‚   â”œâ”€â”€ Audience Signals{"\n"}
          â”‚   â””â”€â”€ Listing Group (proizvodi){"\n"}
          â”œâ”€â”€ Asset Grupa 2{"\n"}
          â””â”€â”€ URL Expansion (on/off)
        </code>
      </pre>

      <h3>Asset grupe</h3>
      <p>
        Asset grupa je tematska celina. SadrÅ¾i finale URL, slike, logoe, video,
        kratke i duge headline-ove, opise, audience signale i listing grupu.
      </p>
      <h3>Koliko asset grupa treba?</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Tip biznisa</th>
              <th className="py-2">PreporuÄen broj AG</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce (mali)</td>
              <td className="py-2">2-4</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce (srednji)</td>
              <td className="py-2">4-8</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce (veliki)</td>
              <td className="py-2">8-15+</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">B2B (jedna usluga)</td>
              <td className="py-2">1-2</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">B2B (viÅ¡e usluga)</td>
              <td className="py-2">3-6</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Princip: svaka asset grupa mora imati tematsku povezanost poruke,
        proizvoda i landing page-a.
      </p>

      <h2>PMax za eCommerce</h2>
      <h3>Feed-first pristup</h3>
      <p>
        Za eCommerce, product feed je najvaÅ¾niji element. PMax bez feed-a je
        Display kampanja u novom pakovanju.
      </p>
      <p className="font-semibold">Optimizacija feed-a:</p>
      <ul>
        <li>Title â€” brand, tip, boja, veliÄina</li>
        <li>Description â€” detaljan opis sa kljuÄnim reÄima</li>
        <li>Product Type â€” segmentacija po kategorijama</li>
        <li>Custom Labels â€” marÅ¾a, performanse, sezona, cenovni rang</li>
      </ul>

      <h3>Segmentacija asset grupa</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>
          PMax Kampanja{"\n"}
          â”œâ”€â”€ AG 1: Best Sellers{"\n"}
          â”œâ”€â”€ AG 2: MuÅ¡ka obuÄ‡a{"\n"}
          â”œâ”€â”€ AG 3: Å½enska obuÄ‡a{"\n"}
          â”œâ”€â”€ AG 4: Accessories{"\n"}
          â””â”€â”€ AG 5: Sale Items
        </code>
      </pre>
      <ul>
        <li>RazliÄite poruke za razliÄite kategorije</li>
        <li>RazliÄiti audience signals</li>
        <li>LakÅ¡e praÄ‡enje performansi</li>
      </ul>

      <h3>PMax vs Standard Shopping</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Aspekt</th>
              <th className="py-2 pr-4">Standard Shopping</th>
              <th className="py-2">PMax</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Kontrola</td>
              <td className="py-2 pr-4">Visoka</td>
              <td className="py-2">Niska</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Reach</td>
              <td className="py-2 pr-4">Shopping only</td>
              <td className="py-2">Sve mreÅ¾e</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Bidding</td>
              <td className="py-2 pr-4">Manual ili Smart</td>
              <td className="py-2">Automated</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Search Terms</td>
              <td className="py-2 pr-4">Potpun uvid</td>
              <td className="py-2">DelimiÄan</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Learning</td>
              <td className="py-2 pr-4">BrÅ¾i</td>
              <td className="py-2">Sporiji</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Skaliranje</td>
              <td className="py-2 pr-4">Manuelno</td>
              <td className="py-2">Automatsko</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Preporuka: krenite sa Standard Shopping za kontrolu, dodajte PMax kada
        imate stabilan conversion history. Hibridni pristup Äesto daje najbolje
        rezultate.
      </p>

      <h2>PMax za B2B</h2>
      <p>
        B2B je izazovniji: manji volume, duÅ¾i sales cycle i potreba za lead
        quality.
      </p>
      <h3>Kada PMax funkcioniÅ¡e za B2B</h3>
      <ul>
        <li>Minimum 15-20 konverzija meseÄno</li>
        <li>Konzistentan lead-to-sale rate</li>
        <li>MoguÄ‡ offline conversion import</li>
      </ul>
      <h3>Struktura za B2B</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>
          PMax Kampanja{"\n"}
          â”œâ”€â”€ AG 1: Primary Service{"\n"}
          â”œâ”€â”€ AG 2: Secondary Service{"\n"}
          â””â”€â”€ AG 3: Industry-Specific
        </code>
      </pre>

      <h3>KljuÄne strategije</h3>
      <p className="font-semibold">1. Offline conversion import</p>
      <p>
        PMax optimizuje ka onome Å¡to mu kaÅ¾ete da je konverzija. Ako optimizujete
        ka form fills, dobiÄ‡ete volumen form fills â€” ne nuÅ¾no kvalitetne.
        ReÅ¡enje: importujte SQL ili Won deals nazad u Google Ads.
      </p>
      <p className="font-semibold">2. Audience signals</p>
      <ul>
        <li>Customer Match liste</li>
        <li>Website visitors (specifiÄne stranice)</li>
        <li>In-market audiences</li>
        <li>Custom segments</li>
      </ul>
      <p className="font-semibold">3. Negativne kljuÄne reÄi</p>
      <ul>
        <li>Job-related termini (posao, karijera, plata)</li>
        <li>Student termini (seminarski, zavrÅ¡ni rad)</li>
        <li>Free-seeker termini (besplatno, free, crack)</li>
        <li>Competitor employee searches</li>
      </ul>

      <h2>Optimizacija Performance Max</h2>
      <h3>Å ta moÅ¾ete kontrolisati</h3>
      <ol>
        <li>Asset kvalitet (osveÅ¾avanje i A/B test)</li>
        <li>Audience signals (testiranje i refinisanje)</li>
        <li>Product feed (title, custom labels, listing segmenti)</li>
        <li>Bid strategija i ciljevi</li>
        <li>URL Expansion (preporuka: OFF za veÄ‡inu naloga)</li>
      </ol>

      <h3>Asset performance ratings</h3>
      <ul>
        <li>Low â€” zamenite asset</li>
        <li>Good â€” testirajte alternative</li>
        <li>Best â€” zadrÅ¾ite, ali nastavite testiranje</li>
      </ul>

      <h3>Bid strategije</h3>
      <ul>
        <li>Maximize Conversions â€” za poÄetak</li>
        <li>Target CPA â€” kada znate ciljnu cenu</li>
        <li>Target ROAS â€” za eCommerce sa vrednostima porudÅ¾bina</li>
      </ul>
      <p>
        Preporuka: startujte sa Maximize Conversions 2-4 nedelje, zatim preÄ‘ite
        na Target CPA/ROAS uz target 10-20% iznad trenutnog.
      </p>

      <h2>Insights i reporting</h2>
      <p className="font-semibold">Gde traÅ¾iti podatke</p>
      <ul>
        <li>PMax Insights tab (search terms, audience, assets)</li>
        <li>Campaign reports po asset grupama</li>
        <li>Placement reports (nakon filtriranja)</li>
      </ul>
      <p className="font-semibold">KljuÄne metrike</p>
      <ul>
        <li>Nedeljno: spend, conversions, ROAS/CPA, asset performance</li>
        <li>MeseÄno: trends, audience insights, placement review</li>
      </ul>

      <h2>ÄŒeste greÅ¡ke sa PMax</h2>
      <ol>
        <li>Pokretanje bez dovoljno conversion data</li>
        <li>Jedan asset set za sve</li>
        <li>Ignorisanje audience signals</li>
        <li>Set-and-forget mentalitet</li>
        <li>LoÅ¡ tracking</li>
      </ol>

      <h2>Realna oÄekivanja</h2>
      <h3>Learning period</h3>
      <p>
        PMax treba 4-6 nedelja za poÄetno uÄenje. Ne menjajte drastiÄno i
        obezbedite dovoljno budÅ¾eta za 50+ konverzija.
      </p>
      <h3>TipiÄni rezultati</h3>
      <p className="font-semibold">eCommerce:</p>
      <ul>
        <li>ROAS 3-6x za optimizovane kampanje</li>
        <li>Porast revenue-a 20-40% vs samo Search/Shopping</li>
        <li>VeÄ‡i reach uz niÅ¾i intent na nekim mreÅ¾ama</li>
      </ul>
      <p className="font-semibold">B2B:</p>
      <ul>
        <li>CPL varira u odnosu na Search</li>
        <li>Lead quality zavisi od offline import-a</li>
        <li>Volume moÅ¾e znaÄajno porasti</li>
      </ul>
      <h3>Kada odustati</h3>
      <p>
        Ako posle 8-10 nedelja i 100+ konverzija ROAS ostaje ispod cilja, CPA
        iznad prihvatljivog ili lead quality nije dobra, PMax moÅ¾da nije pravi
        izbor.
      </p>

      <h2>ZakljuÄak</h2>
      <p>
        Performance Max je moÄ‡an alat, ali nije magija. Najbolje radi kada imate
        dobar tracking, kvalitetne asset-e i strpljenje. Koristite ga kao deo
        strategije: Search za kontrolu, Shopping za proizvode, PMax za
        skaliranje.
      </p>
      <p>
        Povezani resursi:{" "}
        <Link href="/usluge/performance-max" className="underline">
          Performance Max upravljanje
        </Link>
        ,{" "}
        <Link href="/usluge/google-shopping" className="underline">
          Google Shopping kampanje
        </Link>
        ,{" "}
        <Link href="/usluge/search-kampanje" className="underline">
          Search kampanje
        </Link>
        ,{" "}
        <Link href="/usluge/google-ads-upravljanje" className="underline">
          Google Ads upravljanje
        </Link>
        .
      </p>

      <h2>FAQ</h2>
      <h3>Da li PMax zamenjuje Shopping kampanje?</h3>
      <p>
        Ne nuÅ¾no. Mnogi koriste oba â€” Standard Shopping za kontrolu, PMax za
        prospecting. Shopping i dalje funkcioniÅ¡e.
      </p>
      <h3>Koliki budÅ¾et treba za PMax?</h3>
      <p>
        Minimum â‚¬50-100 dnevno za smislene rezultate. Ispod toga, algoritam nema
        dovoljno podataka.
      </p>
      <h3>ZaÅ¡to ne vidim sve search terms?</h3>
      <p>
        Google ograniÄava search terms insights za PMax. Vidite samo kategorije
        i top termine, ne sve.
      </p>
      <h3>Da li PMax kanibalizuje druge kampanje?</h3>
      <p>
        MoÅ¾e. Pratite account-level performanse, ne samo PMax.
      </p>
      <h3>Kada treba iskljuÄiti PMax?</h3>
      <p>
        Kada konstantno underperformuje posle 8+ nedelja, lead quality je loÅ¡a i
        ne poboljÅ¡ava se, ili ne odgovara vaÅ¡em modelu.
      </p>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje aÅ¾uriranje: Januar 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}

function GoogleShoppingVodicPost() {
  return (
    <>
      <p>
        Google Shopping je najvažniji kanal za većinu eCommerce biznisa. Vizuelni
        format sa slikom, cenom i imenom prodavnice filtrira nekvalifikovan
        saobraćaj i dovodi ljude koji su spremni da kupe.
      </p>
      <p>
        Shopping kampanje su onoliko dobre koliko je dobar product feed i
        struktura kampanja. Loš feed = loši rezultati, bez obzira koliko trošite.
      </p>
      <ul>
        <li>Kako Google Shopping funkcioniše</li>
        <li>Product feed optimizacija (najvažniji deo)</li>
        <li>Struktura kampanja za kontrolu i skaliranje</li>
        <li>Bidding strategije</li>
        <li>Taktike za povećanje ROAS-a</li>
        <li>Česte greške i kako ih izbeći</li>
      </ul>

      <h2>Kako Google Shopping funkcioniše</h2>
      <h3>Osnove</h3>
      <p>
        Za razliku od Search kampanja gde birate ključne reči, Google Shopping
        koristi product feed da odredi kada prikazati oglase. Proces izgleda
        ovako:
      </p>
      <ol>
        <li>Kreirate product feed u Google Merchant Center</li>
        <li>Povežete Merchant Center sa Google Ads</li>
        <li>Kreirate Shopping kampanju</li>
        <li>Google matchuje proizvode sa pretragama</li>
        <li>Plaćate po kliku (CPC model)</li>
      </ol>
      <p>
        Shopping je efikasan jer je format vizuelan, cena je vidljiva pre klika,
        a intent je visok.
      </p>

      <h2>Product feed: temelj svega</h2>
      <p>
        Product feed je XML ili TXT fajl sa podacima o proizvodima. Google na
        osnovu feed-a odlučuje za koje pretrage prikazuje oglase.
      </p>
      <h3>Obavezni atributi</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Atribut</th>
              <th className="py-2 pr-4">Šta je</th>
              <th className="py-2">Primer</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">id</td>
              <td className="py-2 pr-4">Jedinstveni ID</td>
              <td className="py-2">SKU-12345</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">title</td>
              <td className="py-2 pr-4">Naziv proizvoda</td>
              <td className="py-2">Nike Air Max 90 Muške Bele</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">description</td>
              <td className="py-2 pr-4">Opis proizvoda</td>
              <td className="py-2">Detaljni opis sa specifikacijama</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">link</td>
              <td className="py-2 pr-4">URL proizvoda</td>
              <td className="py-2">https://shop.rs/product/12345</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">image_link</td>
              <td className="py-2 pr-4">URL slike</td>
              <td className="py-2">https://shop.rs/images/12345.jpg</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">price</td>
              <td className="py-2 pr-4">Cena</td>
              <td className="py-2">12990.00 RSD</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">availability</td>
              <td className="py-2 pr-4">Dostupnost</td>
              <td className="py-2">in stock</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">brand</td>
              <td className="py-2 pr-4">Brend</td>
              <td className="py-2">Nike</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">gtin</td>
              <td className="py-2 pr-4">Barkod</td>
              <td className="py-2">1234567890123</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">condition</td>
              <td className="py-2 pr-4">Stanje</td>
              <td className="py-2">new</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Title optimizacija</h3>
      <p className="font-semibold">
        Formula: [Brand] + [Tip proizvoda] + [Ključni atributi] + [Model/Varijanta]
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border-2 border-gray-900 rounded-lg p-4">
          <p className="font-semibold">Loše</p>
          <ul className="text-gray-700">
            <li>Patike muške</li>
            <li>Laptop HP</li>
          </ul>
        </div>
        <div className="border-2 border-gray-900 rounded-lg p-4">
          <p className="font-semibold">Dobro</p>
          <ul className="text-gray-700">
            <li>Nike Air Max 90 Muške Patike Bele Broj 43</li>
            <li>HP Pavilion 15 Laptop i5 16GB RAM 512GB SSD 15.6 inch</li>
          </ul>
        </div>
      </div>
      <p>
        Limit je 150 karaktera, ali prvih 70 je najvažnije.
      </p>

      <h3>Description optimizacija</h3>
      <ul>
        <li>Počnite sa najvažnijim informacijama</li>
        <li>Uključite ključne reči prirodno</li>
        <li>Navedite specifikacije</li>
        <li>Izbegavajte promotivni copy</li>
        <li>500-1000 karaktera je optimalno</li>
      </ul>

      <h3>Product Type vs Google Product Category</h3>
      <p>
        Google Product Category je Google-ova taksonomija, a Product Type je
        vaša kategorija i moćnija je za segmentaciju.
      </p>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>
          Obuća &gt; Muška Obuća &gt; Patike &gt; Running Patike &gt; Nike
        </code>
      </pre>

      <h3>Custom Labels</h3>
      <p>Custom labels su tajni alat za segmentaciju:</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Label</th>
              <th className="py-2 pr-4">Svrha</th>
              <th className="py-2">Vrednosti</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">custom_label_0</td>
              <td className="py-2 pr-4">Marža</td>
              <td className="py-2">high_margin, medium_margin, low_margin</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">custom_label_1</td>
              <td className="py-2 pr-4">Performanse</td>
              <td className="py-2">best_seller, standard, slow_mover</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">custom_label_2</td>
              <td className="py-2 pr-4">Sezona</td>
              <td className="py-2">spring, summer, fall, winter</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">custom_label_3</td>
              <td className="py-2 pr-4">Cenovni rang</td>
              <td className="py-2">under_50, 50_100, over_100</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">custom_label_4</td>
              <td className="py-2 pr-4">Promo status</td>
              <td className="py-2">on_sale, full_price</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Struktura Shopping kampanja</h2>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>
          Account{"\n"}
          ├── Brand Campaign{"\n"}
          ├── High Priority (generic, low bid){"\n"}
          ├── Medium Priority (filtered){"\n"}
          └── Low Priority (exact, high bid)
        </code>
      </pre>
      <h3>Priority bidding strategija</h3>
      <ul>
        <li>High Priority + Low Bid — široke pretrage</li>
        <li>Medium Priority + Medium Bid — specifičnije pretrage</li>
        <li>Low Priority + High Bid — high-intent pretrage</li>
      </ul>

      <h3>Single Product Ad Groups (SPAGs)</h3>
      <ul>
        <li>Precizna kontrola bidova</li>
        <li>Čistiji podaci</li>
        <li>Lakše testiranje</li>
      </ul>
      <p>
        Koristite SPAGs za top 20% proizvoda po prihodu i proizvode sa visokom
        maržom.
      </p>

      <h2>Bidding strategije</h2>
      <h3>Manual CPC</h3>
      <p>
        Prednosti: potpuna kontrola i odmah primenljive promene. Mana: zahteva
        vreme.
      </p>
      <h3>Target ROAS</h3>
      <p>
        Automatska optimizacija ka cilju, ali traži learning period i 50+
        konverzija mesečno.
      </p>
      <h3>Maximize Clicks / Maximize Conversion Value</h3>
      <p>
        Maximize Clicks služi za skupljanje podataka, Maximize Conversion Value
        kada imate dovoljno konverzija.
      </p>

      <h2>Taktike za povećanje ROAS-a</h2>
      <h3>1. Feed optimizacija</h3>
      <ul>
        <li>Audit title-ova</li>
        <li>Dodajte brand gde nedostaje</li>
        <li>Optimizujte description za top proizvode</li>
        <li>Postavite custom labels</li>
      </ul>
      <p>Očekivani rezultat: 10-30% bolji CTR i conversion rate.</p>

      <h3>2. Negative keywords</h3>
      <ul>
        <li>Informational: &quot;kako&quot;, &quot;šta je&quot;, &quot;recenzija&quot;</li>
        <li>Free seekers: &quot;besplatno&quot;, &quot;free&quot;, &quot;jeftino&quot;</li>
        <li>Job related: &quot;posao&quot;, &quot;zaposlenje&quot;</li>
        <li>DIY: &quot;sam napravi&quot;, &quot;uradi sam&quot;</li>
      </ul>

      <h3>3. Bid adjustments</h3>
      <ul>
        <li>Device: desktop često konvertuje bolje od mobile</li>
        <li>Location: Beograd vs ostatak Srbije može varirati 20-50%</li>
        <li>Time: prilagodite bidove po satu i danu</li>
      </ul>

      <h3>4. RLSA (remarketing liste)</h3>
      <ul>
        <li>Past purchasers (+50-100%)</li>
        <li>Cart abandoners (+30-50%)</li>
        <li>Product viewers (+20-30%)</li>
      </ul>

      <h3>5. Isključivanje loših proizvoda</h3>
      <ul>
        <li>Bez konverzija posle 100+ klikova</li>
        <li>Low margin proizvodi</li>
        <li>Out of stock</li>
      </ul>

      <h3>6. Konkurentnost cena</h3>
      <p>
        Ako ste 30% skuplji od konkurencije, CTR će patiti. Koristite Merchant
        Center Price Competitiveness report.
      </p>

      <h2>Česte greške</h2>
      <ol>
        <li>Neoptimizovan feed</li>
        <li>Jedna kampanja za sve proizvode</li>
        <li>Ignorisanje search terms reporta</li>
        <li>Loše slike</li>
        <li>Nepraćenje konkurentnosti cena</li>
      </ol>

      <h2>Shopping vs Performance Max</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border-2 border-gray-900 rounded-lg p-4">
          <p className="font-semibold">Standard Shopping</p>
          <ul className="text-gray-700">
            <li>Potpuna kontrola bidova</li>
            <li>Jasan uvid u search terms</li>
            <li>Predvidljivije ponašanje</li>
            <li>Brži learning</li>
          </ul>
        </div>
        <div className="border-2 border-gray-900 rounded-lg p-4">
          <p className="font-semibold">Performance Max for Shopping</p>
          <ul className="text-gray-700">
            <li>Svi Google placements</li>
            <li>Automatska optimizacija</li>
            <li>Manje ručnog rada</li>
            <li>Ograničen uvid</li>
          </ul>
        </div>
      </div>
      <p>
        Preporuka: hibridni pristup — Standard Shopping za kontrolu, PMax za
        prospecting.
      </p>

      <h2>Merchant Center setup checklist</h2>
      <ul>
        <li>Verifikovan i claimovan website</li>
        <li>Shipping settings konfigurisani</li>
        <li>Tax settings (ako primenjivo)</li>
        <li>Return policy linkovan</li>
        <li>Business information kompletna</li>
        <li>Feed uploadovan i approved</li>
        <li>Povezano sa Google Ads</li>
      </ul>
      <h3>Česti razlozi za disapproval</h3>
      <ul>
        <li>Cena mismatch</li>
        <li>Dostupnost mismatch</li>
        <li>Missing GTIN/brand/slika</li>
        <li>Policy violation</li>
      </ul>

      <h2>Zaključak</h2>
      <p>
        Google Shopping može biti najprofitabilniji kanal, ali profit ne dolazi
        automatski. Fokus na feed, strukturu, monitoring i testiranje.
      </p>
      <p>
        Ako trošite na Shopping a nemate ROAS koji želite, prvo proverite feed.
        80% problema je tamo.
      </p>

      <h2>FAQ</h2>
      <h3>Koliko proizvoda treba za Shopping kampanje?</h3>
      <p>
        Minimum 10-20, idealno 50+. Sa više proizvoda imate više prilika za
        impressions i konverzije.
      </p>
      <h3>Da li mogu koristiti Shopping bez GTIN-a?</h3>
      <p>
        Da, ali performanse mogu biti lošije. Ako nemate GTIN, popunite brand +
        MPN.
      </p>
      <h3>Koliki budžet treba za Shopping?</h3>
      <p>
        Minimum €500-1,000 mesečno za smislene rezultate. Za ozbiljno
        testiranje i optimizaciju, €1,500-2,000+.
      </p>
      <h3>Zašto moji proizvodi nisu prikazani?</h3>
      <p>
        Najčešći razlozi: disapproved feed, prenizak bid, loš Quality Score, ili
        issue sa dostupnošću.
      </p>
      <h3>Shopping ili Search za eCommerce?</h3>
      <p>
        Oba. Shopping za vizuelni, product-focused saobraćaj. Search za branded i
        specifične pretrage koje Shopping ne hvata dobro.
      </p>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Januar 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}

type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  metaDescription: string;
  content: ReactNode;
};

const posts: Post[] = [
  {
    slug: "koliko-kosta-google-ads",
    title: "Koliko KoÅ¡ta Google Ads? Cene, BudÅ¾eti i ROI u Srbiji [2026]",
    date: "2026-01-26",
    category: "Google Ads",
    metaDescription:
      "Koliko zaista koÅ¡ta Google Ads u Srbiji? Detaljni pregled cena po industrijama, minimalni budÅ¾eti, troÅ¡kovi agencija i kako izraÄunati ROI pre nego Å¡to potroÅ¡ite prvi dinar.",
    content: <KolikoKostaGoogleAdsPost />
  },
  {
    slug: "google-oglasavanje-za-firme",
    title: "Google OglaÅ¡avanje za Firme: Kompletan VodiÄ za B2B i eCommerce [2026]",
    date: "2026-01-26",
    category: "Google oglaÅ¡avanje",
    metaDescription:
      "Kompletan vodiÄ za Google oglaÅ¡avanje prilagoÄ‘en firmama. Strategije za B2B i eCommerce, tipovi kampanja, budÅ¾etiranje i merenje rezultata â€” sve na jednom mestu.",
    content: <GoogleOglasavanjeZaFirmePost />
  },
    {
    slug: "performance-max-vodic",
    title: "Performance Max Kampanje: VodiÄ za eCommerce i B2B [2026]",
    date: "2026-01-26",
    category: "Performance Max",
    metaDescription:
      "Sve o Performance Max kampanjama â€” kako rade, kada ih koristiti, struktura, asset grupe, i strategije optimizacije. VodiÄ baziran na realnim rezultatima iz regiona.",
    content: <PerformanceMaxVodicPost />
  },
  {
    slug: "google-ads-optimizacija",
    title: "Google Ads optimizacija - 30 taktika",
    date: "2026-01-17",
    category: "Optimizacija",
    metaDescription: "Prakticne taktike za Google Ads optimizaciju.",
    content: <p>Placeholder content for Google Ads optimizacija.</p>
  },
    {
    slug: "google-shopping-vodic",
    title: "Google Shopping Kampanje: Kako Povećati ROAS [Vodič 2026]",
    date: "2026-01-26",
    category: "Google Shopping",
    metaDescription:
      "Kompletan vodič za Google Shopping kampanje. Product feed optimizacija, struktura kampanja, bidding strategije i taktike za povećanje ROAS-a — sve bazirano na realnim rezultatima.",
    content: <GoogleShoppingVodicPost />
  }
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Slobodan Jelisavac",
      description: "Trazeni blog post nije pronadjen."
    };
  }

  return {
    title: `${post.title} | Slobodan Jelisavac`,
    description: post.metaDescription
  };
}

export default function BlogPostPage({
  params
}: {
  params: { slug: string };
}) {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="section-padding">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-12">
        <article className="lg:col-span-2">
          <div className="text-sm text-gray-500 mb-3">
            {post.category} Â· {post.date}
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {post.title}
          </h1>
          <div className="prose max-w-none text-gray-700">
            {post.content}
          </div>
        </article>
        <aside className="border-2 border-gray-900 rounded-lg p-6 h-fit">
          <h2 className="text-xl font-heading font-semibold mb-4">Sidebar</h2>
          <p className="text-gray-600 mb-4">
            Placeholder for related posts, newsletter signup, or CTA.
          </p>
          <Link href="/blog" className="text-primary font-semibold">
            Nazad na Blog
          </Link>
        </aside>
      </div>
    </div>
  );
}
