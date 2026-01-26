import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";

function KolikoKostaGoogleAdsPost() {
  return (
    <>
      <p>
        &quot;Koliko koÃ…Â¡ta Google Ads?&quot; Ovo je prvo pitanje koje Ã„Âujem od
        svakog direktora marketinga ili vlasnika firme koji razmiÃ…Â¡lja o plaÃ„â€¡enom
        oglaÃ…Â¡avanju. I razumem frustraciju Ã¢â‚¬â€ Google vam neÃ„â€¡e dati jasan odgovor,
        a veÃ„â€¡ina sadrÃ…Â¾aja na ovu temu dolazi iz SAD-a gde su cene potpuno
        drugaÃ„Âije.
      </p>
      <p>
        Cena Google Ads-a zavisi od industrije, konkurencije i kvaliteta vaÃ…Â¡ih
        kampanja. U ovom vodiÃ„Âu dobijate realan okvir za planiranje budÃ…Â¾eta i
        procenu oÃ„Âekivanja pre nego Ã…Â¡to potroÃ…Â¡ite prvi dinar.
      </p>
      <ul>
        <li>Kako Google Ads naplaÃ„â€¡uje (i zaÃ…Â¡to je to vaÃ…Â¾no)</li>
        <li>Realne CPC cene po industrijama u Srbiji i regionu</li>
        <li>Minimalni budÃ…Â¾et koji ima smisla</li>
        <li>TroÃ…Â¡kovi agencije vs. freelancer vs. in-house</li>
        <li>Kako izraÃ„Âunati ROI pre pokretanja kampanja</li>
        <li>Skriveni troÃ…Â¡kovi koje mnogi zaborave</li>
      </ul>

      <h2>Kako Google Ads naplaÃ„â€¡uje?</h2>
      <p>
        Google Ads koristi aukcijski sistem. Svaki put kada neko ukuca pretragu,
        deÃ…Â¡ava se mini-aukcija izmeÃ„â€˜u oglaÃ…Â¡ivaÃ„Âa koji ciljaju tu kljuÃ„Ânu reÃ„Â. Vi
        plaÃ„â€¡ate samo kada neko klikne na vaÃ…Â¡ oglas Ã¢â‚¬â€ pay-per-click (PPC).
      </p>

      <h3>Cena po kliku (CPC)</h3>
      <ul>
        <li>Konkurencija Ã¢â‚¬â€ viÃ…Â¡e oglaÃ…Â¡ivaÃ„Âa znaÃ„Âi viÃ…Â¡u cenu.</li>
        <li>Quality Score Ã¢â‚¬â€ viÃ…Â¡i skor smanjuje cenu klika.</li>
        <li>Pozicija oglasa Ã¢â‚¬â€ viÃ…Â¡a pozicija koÃ…Â¡ta viÃ…Â¡e.</li>
        <li>Industrija Ã¢â‚¬â€ osiguranje i advokati su skuplji od eCommerce-a.</li>
        <li>Geografija Ã¢â‚¬â€ Srbija je jeftinija od NemaÃ„Âke ili UK.</li>
      </ul>

      <h3>Ã…Â ta plaÃ„â€¡ate pored klikova</h3>
      <ul>
        <li>CPC Ã¢â‚¬â€ plaÃ„â€¡ate po kliku (Search, Shopping).</li>
        <li>CPM Ã¢â‚¬â€ plaÃ„â€¡ate po 1.000 prikaza (Display, YouTube).</li>
        <li>CPV Ã¢â‚¬â€ plaÃ„â€¡ate po pregledu videa (YouTube).</li>
        <li>CPA Ã¢â‚¬â€ plaÃ„â€¡ate po konverziji (napredne strategije).</li>
      </ul>

      <h2>Realne CPC cene po industrijama u Srbiji</h2>
      <p>ProseÃ„Âne vrednosti koje viÃ„â€˜am kod klijenata u regionu (2025Ã¢â‚¬â€œ2026):</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Industrija</th>
              <th className="py-2 pr-4">ProseÃ„Âan CPC (EUR)</th>
              <th className="py-2">Raspon</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce - moda</td>
              <td className="py-2 pr-4">Ã¢â€šÂ¬0.15 - Ã¢â€šÂ¬0.40</td>
              <td className="py-2">Ã¢â€šÂ¬0.08 - Ã¢â€šÂ¬0.80</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce - elektronika</td>
              <td className="py-2 pr-4">Ã¢â€šÂ¬0.20 - Ã¢â€šÂ¬0.50</td>
              <td className="py-2">Ã¢â€šÂ¬0.10 - Ã¢â€šÂ¬1.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">NameÃ…Â¡taj</td>
              <td className="py-2 pr-4">Ã¢â€šÂ¬0.25 - Ã¢â€šÂ¬0.60</td>
              <td className="py-2">Ã¢â€šÂ¬0.15 - Ã¢â€šÂ¬1.20</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">B2B usluge</td>
              <td className="py-2 pr-4">Ã¢â€šÂ¬0.40 - Ã¢â€šÂ¬1.20</td>
              <td className="py-2">Ã¢â€šÂ¬0.20 - Ã¢â€šÂ¬3.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">SaaS (regionalni)</td>
              <td className="py-2 pr-4">Ã¢â€šÂ¬0.80 - Ã¢â€šÂ¬2.50</td>
              <td className="py-2">Ã¢â€šÂ¬0.30 - Ã¢â€šÂ¬5.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Nekretnine</td>
              <td className="py-2 pr-4">Ã¢â€šÂ¬0.30 - Ã¢â€šÂ¬0.80</td>
              <td className="py-2">Ã¢â€šÂ¬0.15 - Ã¢â€šÂ¬1.50</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Turizam</td>
              <td className="py-2 pr-4">Ã¢â€šÂ¬0.20 - Ã¢â€šÂ¬0.60</td>
              <td className="py-2">Ã¢â€šÂ¬0.10 - Ã¢â€šÂ¬1.20</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Finansije/Osiguranje</td>
              <td className="py-2 pr-4">Ã¢â€šÂ¬1.00 - Ã¢â€šÂ¬4.00</td>
              <td className="py-2">Ã¢â€šÂ¬0.50 - Ã¢â€šÂ¬8.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Zdravstvo/Klinike</td>
              <td className="py-2 pr-4">Ã¢â€šÂ¬0.50 - Ã¢â€šÂ¬1.50</td>
              <td className="py-2">Ã¢â€šÂ¬0.25 - Ã¢â€šÂ¬3.00</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Obrazovanje</td>
              <td className="py-2 pr-4">Ã¢â€šÂ¬0.30 - Ã¢â€šÂ¬0.90</td>
              <td className="py-2">Ã¢â€šÂ¬0.15 - Ã¢â€šÂ¬2.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500">
        Napomena: ovo su cene za srpsko trÃ…Â¾iÃ…Â¡te. Za NemaÃ„Âku ili UK, raÃ„Âunajte
        3Ã¢â‚¬â€œ5x viÃ…Â¡e.
      </p>
      <h3>ZaÃ…Â¡to je raspon toliko Ã…Â¡irok?</h3>
      <ul>
        <li>KljuÃ„Âne reÃ„Âi Ã¢â‚¬â€ branded termini su jeftiniji od generiÃ„Âkih.</li>
        <li>Namera pretrage Ã¢â‚¬â€ Ã¢â‚¬Å“kupiÃ¢â‚¬Â koÃ…Â¡ta viÃ…Â¡e od Ã¢â‚¬Å“informiÃ…Â¡i seÃ¢â‚¬Â.</li>
        <li>Kvalitet naloga Ã¢â‚¬â€ optimizovan nalog plaÃ„â€¡a i do 50% manje.</li>
        <li>Sezona Ã¢â‚¬â€ Black Friday nije isto Ã…Â¡to i februar.</li>
      </ul>

      <h2>Minimalni budÃ…Â¾et koji ima smisla</h2>
      <p>
        TehniÃ„Âki moÃ…Â¾ete krenuti sa Ã¢â€šÂ¬100 meseÃ„Âno, ali praktiÃ„Âno to retko daje
        dovoljno podataka za optimizaciju.
      </p>
      <div className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50">
        <p className="font-semibold">
          Minimalni meseÃ„Âni budÃ…Â¾et = (ciljani broj klikova) Ãƒâ€” (proseÃ„Âan CPC) Ãƒâ€” 30
          dana
        </p>
        <ul className="mt-3 text-gray-600">
          <li>eCommerce (CPC Ã¢â€šÂ¬0.30): Ã¢â€šÂ¬90Ã¢â‚¬â€œ135 meseÃ„Âno minimum</li>
          <li>B2B usluge (CPC Ã¢â€šÂ¬0.80): Ã¢â€šÂ¬240Ã¢â‚¬â€œ360 meseÃ„Âno minimum</li>
          <li>SaaS (CPC Ã¢â€šÂ¬1.50): Ã¢â€šÂ¬450Ã¢â‚¬â€œ675 meseÃ„Âno minimum</li>
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
              <th className="py-2">PreporuÃ„Âeni meseÃ„Âni budÃ…Â¾et</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Lokalni biznis</td>
              <td className="py-2">Ã¢â€šÂ¬300 - Ã¢â€šÂ¬800</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce (manji)</td>
              <td className="py-2">Ã¢â€šÂ¬500 - Ã¢â€šÂ¬1,500</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce (srednji)</td>
              <td className="py-2">Ã¢â€šÂ¬1,500 - Ã¢â€šÂ¬5,000</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">B2B usluge</td>
              <td className="py-2">Ã¢â€šÂ¬800 - Ã¢â€šÂ¬2,500</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">SaaS</td>
              <td className="py-2">Ã¢â€šÂ¬1,500 - Ã¢â€šÂ¬5,000+</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>ZaÃ…Â¡to ne preporuÃ„Âujem mikro-budÃ…Â¾ete</h3>
      <ul>
        <li>Nema dovoljno podataka za optimizaciju.</li>
        <li>Algoritmi nemaju Ã…Â¡ta da nauÃ„Âe.</li>
        <li>Ne moÃ…Â¾ete testirati razliÃ„Âite pristupe.</li>
        <li>ROI je teÃ…Â¡ko pouzdano meriti.</li>
      </ul>

      <h2>TroÃ…Â¡kovi upravljanja: agencija vs. freelancer vs. in-house</h2>
      <h3>1. Agencija</h3>
      <p className="font-semibold">TipiÃ„Âni modeli naplate:</p>
      <ul>
        <li>Procenat od ad spend-a: 10Ã¢â‚¬â€œ20%</li>
        <li>Fiksna meseÃ„Âna naknada: Ã¢â€šÂ¬500Ã¢â‚¬â€œ2,500</li>
        <li>Hibrid: manja fiksna + procenat</li>
      </ul>
      <p className="font-semibold">Prednosti:</p>
      <ul>
        <li>Tim struÃ„Ânjaka i alati.</li>
        <li>Kontinuitet i iskustvo iz viÃ…Â¡e industrija.</li>
      </ul>
      <p className="font-semibold">Mane:</p>
      <ul>
        <li>Skuplje za manje budÃ…Â¾ete.</li>
        <li>Manje personalizovana paÃ…Â¾nja.</li>
      </ul>

      <h3>2. Freelancer/Konsultant</h3>
      <p className="font-semibold">TipiÃ„Âni modeli naplate:</p>
      <ul>
        <li>Fiksna meseÃ„Âna naknada: Ã¢â€šÂ¬300Ã¢â‚¬â€œ1,200</li>
        <li>Satnica: Ã¢â€šÂ¬30Ã¢â‚¬â€œ80/sat</li>
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
        <li>OgraniÃ„Âen kapacitet.</li>
      </ul>

      <h3>3. In-house</h3>
      <p className="font-semibold">TroÃ…Â¡kovi:</p>
      <ul>
        <li>Plata: Ã¢â€šÂ¬800Ã¢â‚¬â€œ2,500 meseÃ„Âno (Srbija)</li>
        <li>Alati: Ã¢â€šÂ¬100Ã¢â‚¬â€œ500 meseÃ„Âno</li>
        <li>Obuke: Ã¢â€šÂ¬500Ã¢â‚¬â€œ2,000 godiÃ…Â¡nje</li>
      </ul>
      <p className="font-semibold">Prednosti:</p>
      <ul>
        <li>Potpuna kontrola i brzo donoÃ…Â¡enje odluka.</li>
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
              <th className="py-2 pr-4">MeseÃ„Âni ad spend</th>
              <th className="py-2">PreporuÃ„Âena opcija</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Do Ã¢â€šÂ¬1,000</td>
              <td className="py-2">Freelancer ili DIY sa konsultacijama</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Ã¢â€šÂ¬1,000 - Ã¢â€šÂ¬5,000</td>
              <td className="py-2">Freelancer/konsultant</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Ã¢â€šÂ¬5,000 - Ã¢â€šÂ¬20,000</td>
              <td className="py-2">Specijalizovana agencija ili senior freelancer</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Ã¢â€šÂ¬20,000+</td>
              <td className="py-2">Agencija + in-house koordinator</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Kako izraÃ„Âunati ROI pre nego Ã…Â¡to potroÃ…Â¡ite prvi dinar</h2>
      <ol>
        <li>Poznajte proseÃ„Ânu vrednost kupca (AOV, marÃ…Â¾a, LTV).</li>
        <li>
          DefiniÃ…Â¡ite maksimalni CPA koji moÃ…Â¾ete da platite a da ostanete
          profitabilni.
        </li>
        <li>Procenite conversion rate za vaÃ…Â¡ sajt.</li>
        <li>
          IzraÃ„Âunajte break-even CPC:{" "}
          <span className="font-semibold">Maksimalni CPA Ãƒâ€” Conversion Rate</span>
        </li>
      </ol>
      <p>
        Ako je proseÃ„Âan CPC niÃ…Â¾i od break-even vrednosti, imate prostora za
        profit. Ako je viÃ…Â¡i, morate poveÃ„â€¡ati conversion rate ili AOV.
      </p>

      <h2>Skriveni troÃ…Â¡kovi o kojima niko ne priÃ„Âa</h2>
      <h3>1. Landing page-ovi</h3>
      <ul>
        <li>Ã…Â ablonski: Ã¢â€šÂ¬200Ã¢â‚¬â€œ500 (jednokratno)</li>
        <li>Custom dizajn: Ã¢â€šÂ¬500Ã¢â‚¬â€œ2,000 (jednokratno)</li>
        <li>A/B testiranje: ongoing troÃ…Â¡ak</li>
      </ul>
      <h3>2. Kreative i content</h3>
      <ul>
        <li>Product feed optimizacija: Ã¢â€šÂ¬200Ã¢â‚¬â€œ500</li>
        <li>Ad copy: Ã¢â€šÂ¬100Ã¢â‚¬â€œ300 meseÃ„Âno</li>
        <li>Slike za Display/YouTube: Ã¢â€šÂ¬100Ã¢â‚¬â€œ500</li>
      </ul>
      <h3>3. Alati</h3>
      <ul>
        <li>Keyword research: Ã¢â€šÂ¬50Ã¢â‚¬â€œ200 meseÃ„Âno</li>
        <li>Competitor analysis: Ã¢â€šÂ¬50Ã¢â‚¬â€œ150 meseÃ„Âno</li>
        <li>Reporting: Ã¢â€šÂ¬30Ã¢â‚¬â€œ100 meseÃ„Âno</li>
      </ul>
      <h3>4. Conversion tracking setup</h3>
      <ul>
        <li>GA4 + GTM setup: Ã¢â€šÂ¬200Ã¢â‚¬â€œ500</li>
        <li>Enhanced conversions: Ã¢â€šÂ¬100Ã¢â‚¬â€œ300</li>
        <li>Server-side tracking: Ã¢â€šÂ¬300Ã¢â‚¬â€œ800</li>
      </ul>
      <h3>5. Vreme za uÃ„Âenje</h3>
      <p>
        Ako radite sami, raÃ„Âunajte na 3Ã¢â‚¬â€œ6 meseci pre nego Ã…Â¡to uÃ„â€˜ete u stabilan
        ritam optimizacije.
      </p>

      <h2>Kada Google Ads nije pravi izbor</h2>
      <ul>
        <li>Nemate jasno definisan proizvod/uslugu.</li>
        <li>MarÃ…Â¾e su ispod 20%.</li>
        <li>Nema potraÃ…Â¾nje za onim Ã…Â¡to nudite.</li>
        <li>Website nije spreman (UX i ponuda nisu dovoljno jasni).</li>
        <li>Nemate budÃ…Â¾et za 3Ã¢â‚¬â€œ6 meseci testiranja.</li>
      </ul>

      <h2>SledeÃ„â€¡i koraci</h2>
      <ol>
        <li>IzraÃ„Âunajte maksimalni CPA.</li>
        <li>Proverite CPC u Keyword Planner-u.</li>
        <li>DefiniÃ…Â¡ite realan test budÃ…Â¾et za minimum 3 meseca.</li>
        <li>OdluÃ„Âite da li radite sami, sa freelancerom ili agencijom.</li>
      </ol>
      <p>
        Ako vam treba pomoÃ„â€¡ oko analize ili strategije, pogledajte{" "}
        <Link href="/usluge/google-ads-upravljanje" className="underline">
          Google Ads upravljanje
        </Link>{" "}
        ili{" "}
        <Link href="/kontakt" className="underline">
          zakaÃ…Â¾ite besplatne konsultacije
        </Link>
        .
      </p>

      <h2>FAQ</h2>
      <h3>Koliko minimalno treba uloÃ…Â¾iti u Google Ads?</h3>
      <p>
        TehniÃ„Âki minimum je Ã¢â€šÂ¬1 dnevno, ali za smislene rezultate raÃ„Âunajte na
        Ã¢â€šÂ¬300Ã¢â‚¬â€œ500 meseÃ„Âno za lokalne biznise i Ã¢â€šÂ¬1,000+ za eCommerce ili B2B.
      </p>
      <h3>Da li se Google Ads isplati za mali biznis?</h3>
      <p>
        Da, ako imate jasnu vrednost po kupcu i konkurentne marÃ…Â¾e. Male firme
        su Ã„Âesto fleksibilnije i brÃ…Â¾e optimizuju kampanje.
      </p>
      <h3>Koliko vremena treba da Google Ads donese rezultate?</h3>
      <p>
        Prve indikacije su vidljive za 2Ã¢â‚¬â€œ4 nedelje, dok stabilne performanse
        dolaze nakon 2Ã¢â‚¬â€œ3 meseca.
      </p>
      <h3>ZaÃ…Â¡to su cene toliko razliÃ„Âite po industrijama?</h3>
      <p>
        Zbog konkurencije i vrednosti konverzije. Advokat moÃ…Â¾e platiti Ã¢â€šÂ¬50 po
        kliku jer jedan klijent vredi Ã¢â€šÂ¬5,000.
      </p>
      <h3>Da li Google Ads koÃ…Â¡ta viÃ…Â¡e nego Facebook Ads?</h3>
      <p>
        Generalno da, CPC je viÃ…Â¡i. Ali intent korisnika je jaÃ„Âi Ã¢â‚¬â€ pretraga
        &quot;kupi X&quot; je bliÃ…Â¾a kupovini od scrollovanja feed-a.
      </p>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje aÃ…Â¾uriranje: Januar 2026
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
        Google oglaÃ…Â¡avanje je najmoÃ„â€¡niji kanal za biznise koji Ã…Â¾ele da dosegnu
        kupce sa namerom kupovine. Za razliku od druÃ…Â¡tvenih mreÃ…Â¾a gde &quot;upadate&quot;
        ljude dok skroluju, na Google-u doseÃ…Â¾ete ljude koji aktivno traÃ…Â¾e vaÃ…Â¡
        proizvod ili uslugu. Ta razlika u nameri je kljuÃ„Âna.
      </p>
      <p>
        Google Ads nije jedinstven sistem Ã¢â‚¬â€ to je ekosistem razliÃ„Âitih tipova
        kampanja, mreÃ…Â¾a i strategija. Ono Ã…Â¡to radi za eCommerce ne radi uvek za
        B2B. Ono Ã…Â¡to ima smisla za lokalni biznis nema smisla za meÃ„â€˜unarodni
        brend.
      </p>
      <ul>
        <li>Kako Google oglaÃ…Â¡avanje funkcioniÃ…Â¡e</li>
        <li>Sve tipove kampanja i kada koji koristiti</li>
        <li>SpecifiÃ„Âne strategije za eCommerce i B2B</li>
        <li>Kako postaviti temelje za uspeÃ…Â¡ne kampanje</li>
        <li>NajÃ„ÂeÃ…Â¡Ã„â€¡e greÃ…Â¡ke koje vidim kod firmi u Srbiji</li>
      </ul>

      <h2>Kako Google oglaÃ…Â¡avanje funkcioniÃ…Â¡e</h2>
      <h3>Aukcijski model</h3>
      <p>
        Google Ads radi na principu aukcije u realnom vremenu. Svaki put kada
        neko ukuca pretragu, deÃ…Â¡ava se aukcija meÃ„â€˜u oglaÃ…Â¡ivaÃ„Âima koji ciljaju tu
        kljuÃ„Ânu reÃ„Â. Pobednik (ili viÃ…Â¡e njih) dobija prikaz oglasa.
      </p>
      <p>
        Google koristi formulu:{" "}
        <span className="font-semibold">
          Ad Rank = Bid Ãƒâ€” Quality Score Ãƒâ€” OÃ„Âekivani uticaj ekstenzija
        </span>
        . To znaÃ„Âi da oglaÃ…Â¡ivaÃ„Â sa boljim Quality Score-om moÃ…Â¾e da plati manje i
        da bude iznad konkurenta koji plaÃ„â€¡a viÃ…Â¡e.
      </p>

      <h3>Quality Score: vaÃ…Â¡ skriveni adut</h3>
      <p>Quality Score (1-10) zavisi od:</p>
      <ul>
        <li>CTR (Click-Through Rate) Ã¢â‚¬â€ koliko Ã„Âesto ljudi kliknu na oglas</li>
        <li>Relevantnosti oglasa Ã¢â‚¬â€ koliko oglas odgovara pretrazi</li>
        <li>Landing page iskustva Ã¢â‚¬â€ brzina, relevantnost, mobilna optimizacija</li>
      </ul>
      <p>Visok Quality Score znaÃ„Âi niÃ…Â¾u cenu po kliku i bolje pozicije.</p>

      <h3>MreÃ…Â¾e i gde se prikazuju oglasi</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">MreÃ…Â¾a</th>
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
              <td className="py-2 pr-4">Pre/tokom/posle video sadrÃ…Â¾aja</td>
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
        izbor kada korisnici aktivno traÃ…Â¾e ono Ã…Â¡to nudite.
      </p>
      <p className="font-semibold">Za koga:</p>
      <ul>
        <li>Ã¢Å“â€œ B2B usluge</li>
        <li>Ã¢Å“â€œ Lokalni biznisi</li>
        <li>Ã¢Å“â€œ SaaS</li>
        <li>Ã¢Å“â€œ eCommerce (uz Shopping)</li>
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
        svim mreÃ…Â¾ama.
      </p>
      <ul>
        <li>Ã¢Å“â€œ eCommerce sa dokazanim proizvodima</li>
        <li>Ã¢Å“â€œ Lead gen sa volumenom</li>
        <li>Ã¢Å¡Â Ã¯Â¸Â Oprezno za manje budÃ…Â¾ete</li>
      </ul>

      <h3>4. Display kampanje</h3>
      <p>
        Banner oglasi na web sajtovima, aplikacijama i YouTube-u. NajÃ„ÂeÃ…Â¡Ã„â€¡e za
        brand awareness i remarketing.
      </p>

      <h3>5. Video kampanje (YouTube)</h3>
      <p>
        Video oglasi na YouTube-u (pre-roll, mid-roll, in-feed). Dobri za
        proizvode koji zahtevaju objaÃ…Â¡njenje.
      </p>

      <h3>6. Demand Gen</h3>
      <p>
        Vizuelni oglasi za Discover, Gmail i YouTube. Dobra alternativa Meta
        Ads-u kada imate jak vizuelni content.
      </p>

      <h2>Google oglaÃ…Â¡avanje za eCommerce</h2>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>
          Brand Search (brand kljuÃ„Âne reÃ„Âi){"\n"}
          Standard Shopping (kontrolisane kampanje){"\n"}
          Performance Max (skaliranje){"\n"}
          Search Generic (non-brand pretrage){"\n"}
          Remarketing (povratak posetilaca)
        </code>
      </pre>

      <h3>Product feed: temelj svega</h3>
      <p>KljuÃ„Âni atributi:</p>
      <ul>
        <li>Title Ã¢â‚¬â€ kljuÃ„Âne reÃ„Âi, brand, atributi (boja, veliÃ„Âina)</li>
        <li>Description Ã¢â‚¬â€ detaljan opis sa relevantnim terminima</li>
        <li>Product Type Ã¢â‚¬â€ precizna kategorija</li>
        <li>GTIN/MPN Ã¢â‚¬â€ jedinstveni identifikatori proizvoda</li>
        <li>Custom Labels Ã¢â‚¬â€ segmentacija po marÃ…Â¾i, sezoni, performansama</li>
      </ul>

      <h3>Shopping vs Performance Max</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border-2 border-gray-900 rounded-lg p-4">
          <p className="font-semibold mb-2">Standard Shopping</p>
          <ul className="text-gray-700">
            <li>ViÃ…Â¡e kontrole nad bidovima</li>
            <li>Jasniji uvid u search terms</li>
            <li>Bolji za testiranje novih proizvoda</li>
          </ul>
        </div>
        <div className="border-2 border-gray-900 rounded-lg p-4">
          <p className="font-semibold mb-2">Performance Max</p>
          <ul className="text-gray-700">
            <li>Doseg na svim mreÃ…Â¾ama</li>
            <li>Bolje za skaliranje dokazanih proizvoda</li>
            <li>Manje ruÃ„Ânog rada</li>
          </ul>
        </div>
      </div>
      <p>
        Moja preporuka: hibridni pristup Ã¢â‚¬â€ Standard Shopping za kontrolu, PMax
        za skaliranje.
      </p>

      <h3>Remarketing za eCommerce</h3>
      <ul>
        <li>Cart abandoners Ã¢â‚¬â€ dodali u korpu, nisu kupili (1-7 dana)</li>
        <li>Product viewers Ã¢â‚¬â€ gledali proizvod, nisu dodali (3-14 dana)</li>
        <li>Past customers Ã¢â‚¬â€ kupili, potencijal za repeat (30-180 dana)</li>
        <li>High-value customers Ã¢â‚¬â€ kupili viÃ…Â¡e puta</li>
      </ul>

      <h2>Google oglaÃ…Â¡avanje za B2B</h2>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>
          Brand Search (zaÃ…Â¡tita brenda){"\n"}
          Solution Search (&quot;CRM softver&quot;){"\n"}
          Problem Search (&quot;kako automatizovati procese&quot;){"\n"}
          Competitor Search (imena konkurenata){"\n"}
          Remarketing (nurturing)
        </code>
      </pre>

      <h3>KljuÃ„Âne razlike od B2C</h3>
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
              <td className="py-2 pr-4">Ã…Â irok</td>
              <td className="py-2">UÃ…Â¾i, specifiÃ„Âniji</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Keywords</td>
              <td className="py-2 pr-4">Transakcioni</td>
              <td className="py-2">Informativni + transakcioni</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">CPC</td>
              <td className="py-2 pr-4">ObiÃ„Âno niÃ…Â¾i</td>
              <td className="py-2">ObiÃ„Âno viÃ…Â¡i</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Volume</td>
              <td className="py-2 pr-4">VeÃ„â€¡i</td>
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
        <li>Top of funnel Ã¢â‚¬â€ blog Ã„Âitaoci Ã¢â€ â€™ lead magnet</li>
        <li>Middle of funnel Ã¢â‚¬â€ lead magnet Ã¢â€ â€™ case study, webinar</li>
        <li>Bottom of funnel Ã¢â‚¬â€ pricing/demo Ã¢â€ â€™ direktna ponuda</li>
      </ol>

      <h2>Postavljanje temelja za uspeÃ…Â¡ne kampanje</h2>
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
        <li>Ko se oglaÃ…Â¡ava na vaÃ…Â¡e kljuÃ„Âne reÃ„Âi?</li>
        <li>Kakve oglase koriste?</li>
        <li>Na koje landing pages vode?</li>
        <li>Koji su im USP-ovi?</li>
      </ul>

      <h2>NajÃ„ÂeÃ…Â¡Ã„â€¡e greÃ…Â¡ke koje vidim</h2>
      <ol>
        <li>Nedostatak tracking-a</li>
        <li>LoÃ…Â¡a struktura naloga</li>
        <li>Ignorisanje negativnih kljuÃ„Ânih reÃ„Âi</li>
        <li>Slanje saobraÃ„â€¡aja na homepage</li>
        <li>Nerealna oÃ„Âekivanja</li>
        <li>Set-and-forget mentalitet</li>
      </ol>

      <h2>Kako meriti uspeh</h2>
      <h3>KljuÃ„Âni KPI-jevi</h3>
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
              <td className="py-2 pr-4">Ã¢â€šÂ¬0.20-0.60</td>
              <td className="py-2">Ã¢â€šÂ¬0.50-2.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">ROAS (cilj)</td>
              <td className="py-2 pr-4">3-5x</td>
              <td className="py-2">-</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">CPL (cilj)</td>
              <td className="py-2 pr-4">-</td>
              <td className="py-2">Ã¢â€šÂ¬10-50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>SledeÃ„â€¡i koraci</h2>
      <ol>
        <li>Postavite tracking (nulti korak).</li>
        <li>DefiniÃ…Â¡ite ciljeve (ROAS, CPL, broj prodaja).</li>
        <li>Pripremite landing pages.</li>
        <li>Krenite sa Search kampanjama.</li>
        <li>Budite strpljivi (2-3 meseca pre evaluacije).</li>
      </ol>
      <p>
        Ako vam treba pomoÃ„â€¡ sa setup-om ili specifiÃ„Ânim pitanjima,{" "}
        <Link href="/kontakt" className="underline">
          zakaÃ…Â¾ite konsultacije
        </Link>
        .
      </p>

      <h2>FAQ</h2>
      <h3>Koliko koÃ…Â¡ta Google oglaÃ…Â¡avanje?</h3>
      <p>
        U Srbiji, proseÃ„Âan CPC je Ã¢â€šÂ¬0.15-1.50. PreporuÃ„Âeni minimalni meseÃ„Âni
        budÃ…Â¾et je Ã¢â€šÂ¬500-1,000 za manje biznise, Ã¢â€šÂ¬2,000+ za ozbiljnije kampanje.
      </p>
      <h3>Da li Google oglaÃ…Â¡avanje radi za B2B?</h3>
      <p>
        Da. B2B ima duÃ…Â¾i sales cycle i manji volume, ali Google Ads je i dalje
        jedan od najefikasnijih kanala za B2B lead generation.
      </p>
      <h3>Koliko vremena treba da vidim rezultate?</h3>
      <p>
        Prve indikacije za 2-4 nedelje. Prave rezultate za 2-3 meseca. Stabilan
        nalog za 4-6 meseci.
      </p>
      <h3>Da li mi treba agencija za Google oglaÃ…Â¡avanje?</h3>
      <p>
        Ne obavezno. Za manje budÃ…Â¾ete (do Ã¢â€šÂ¬2,000), kvalitetan freelancer ili
        DIY sa edukacijom moÃ…Â¾e biti dovoljan. Za veÃ„â€¡e budÃ…Â¾ete i kompleksnije
        kampanje, agencija ima smisla.
      </p>
      <h3>Ã…Â ta je bolje: Google Ads ili Facebook Ads?</h3>
      <p>
        Google Ads hvata ljude sa namerom (&quot;hoÃ„â€¡u da kupim X&quot;), Facebook Ads
        hvata ljude po interesovanjima i demografiji. Za direktne prodaje,
        obiÃ„Âno Google. Za brand awareness, obiÃ„Âno Facebook. Najbolje: kombinacija.
      </p>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje aÃ…Â¾uriranje: Januar 2026
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
        Performance Max (PMax) je Google-ova kampanja koja obeÃ„â€¡ava jednostavnost:
        dajte algoritmu kreativu, budÃ…Â¾et i cilj Ã¢â‚¬â€ on Ã„â€¡e naÃ„â€¡i kupce na svim Google
        mreÃ…Â¾ama. ZvuÃ„Âi idealno, ali realnost je komplikovanija.
      </p>
      <p>
        PMax moÃ…Â¾e biti izuzetno efikasan kanal, ali moÃ…Â¾e biti i crna rupa koja
        guta budÃ…Â¾et bez jasnog uvida kuda odlazi novac. Razlika je u pristupu.
      </p>
      <ul>
        <li>Kako PMax funkcioniÃ…Â¡e</li>
        <li>Kada ima smisla koristiti PMax (i kada ne)</li>
        <li>Struktura i asset grupe</li>
        <li>SpecifiÃ„Ânosti za eCommerce vs B2B</li>
        <li>Kako optimizovati ono nad Ã„Âim nemate potpunu kontrolu</li>
        <li>Realni rezultati i oÃ„Âekivanja</li>
      </ul>

      <h2>Kako Performance Max funkcioniÃ…Â¡e</h2>
      <h3>Osnove</h3>
      <p>
        PMax je automatizovana kampanja koja koristi machine learning da prikaÃ…Â¾e
        vaÃ…Â¡e oglase na svim Google mreÃ…Â¾ama:
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
        <li>Ciljeve Ã¢â‚¬â€ konverzije koje Ã…Â¾elite</li>
        <li>BudÃ…Â¾et Ã¢â‚¬â€ koliko ste spremni da troÃ…Â¡ite</li>
        <li>Asset-e Ã¢â‚¬â€ slike, video, tekstove, logoe</li>
        <li>Audience signale Ã¢â‚¬â€ ko je vaÃ…Â¡a ciljna publika</li>
        <li>Product feed Ã¢â‚¬â€ za eCommerce</li>
      </ul>
      <p className="font-semibold">Google radi:</p>
      <ul>
        <li>Kombinuje asset-e u razliÃ„Âite formate oglasa</li>
        <li>OdluÃ„Âuje gde i kada prikazati oglase</li>
        <li>Automatski bidduje za konverzije</li>
      </ul>

      <h3>ZaÃ…Â¡to je PMax &quot;crna kutija&quot;</h3>
      <ul>
        <li>Ne vidite search terms u potpunosti</li>
        <li>Ne znate taÃ„Âno koliko ide na koji kanal</li>
        <li>Ne moÃ…Â¾ete iskljuÃ„Âiti veÃ„â€¡inu placements</li>
        <li>Ne kontroliÃ…Â¡ete bid po keyword-u</li>
      </ul>
      <p>
        Dobijate agregirane podatke i morate verovati algoritmu.
      </p>

      <h2>Kada koristiti Performance Max</h2>
      <h3>PMax ima smisla kada</h3>
      <ul>
        <li>Imate proven conversion history (minimum 30 meseÃ„Âno, idealno 50+)</li>
        <li>Ã…Â½elite skaliranje nakon plafona na Search/Shopping</li>
        <li>Imate kvalitetne asset-e</li>
        <li>Spremni ste na manje kontrole i learning period</li>
      </ul>
      <h3>PMax nema smisla kada</h3>
      <ul>
        <li>Tek poÃ„Âinjete sa Google Ads</li>
        <li>BudÃ…Â¾et je ispod Ã¢â€šÂ¬1,000-1,500 meseÃ„Âno</li>
        <li>Potrebna vam je granularna kontrola</li>
        <li>Conversion tracking nije 100% taÃ„Âan</li>
      </ul>

      <h2>Struktura Performance Max kampanje</h2>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>
          PMax Kampanja{"\n"}
          Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ Cilj kampanje (konverzija){"\n"}
          Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ BudÃ…Â¾et (dnevni){"\n"}
          Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ Bid strategija (Maximize / Target CPA / Target ROAS){"\n"}
          Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ Asset Grupa 1{"\n"}
          Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ Asset-i (slike, video, tekst){"\n"}
          Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ Audience Signals{"\n"}
          Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ Listing Group (proizvodi){"\n"}
          Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ Asset Grupa 2{"\n"}
          Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ URL Expansion (on/off)
        </code>
      </pre>

      <h3>Asset grupe</h3>
      <p>
        Asset grupa je tematska celina. SadrÃ…Â¾i finale URL, slike, logoe, video,
        kratke i duge headline-ove, opise, audience signale i listing grupu.
      </p>
      <h3>Koliko asset grupa treba?</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Tip biznisa</th>
              <th className="py-2">PreporuÃ„Âen broj AG</th>
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
              <td className="py-2 pr-4">B2B (viÃ…Â¡e usluga)</td>
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
        Za eCommerce, product feed je najvaÃ…Â¾niji element. PMax bez feed-a je
        Display kampanja u novom pakovanju.
      </p>
      <p className="font-semibold">Optimizacija feed-a:</p>
      <ul>
        <li>Title Ã¢â‚¬â€ brand, tip, boja, veliÃ„Âina</li>
        <li>Description Ã¢â‚¬â€ detaljan opis sa kljuÃ„Ânim reÃ„Âima</li>
        <li>Product Type Ã¢â‚¬â€ segmentacija po kategorijama</li>
        <li>Custom Labels Ã¢â‚¬â€ marÃ…Â¾a, performanse, sezona, cenovni rang</li>
      </ul>

      <h3>Segmentacija asset grupa</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>
          PMax Kampanja{"\n"}
          Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ AG 1: Best Sellers{"\n"}
          Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ AG 2: MuÃ…Â¡ka obuÃ„â€¡a{"\n"}
          Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ AG 3: Ã…Â½enska obuÃ„â€¡a{"\n"}
          Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ AG 4: Accessories{"\n"}
          Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ AG 5: Sale Items
        </code>
      </pre>
      <ul>
        <li>RazliÃ„Âite poruke za razliÃ„Âite kategorije</li>
        <li>RazliÃ„Âiti audience signals</li>
        <li>LakÃ…Â¡e praÃ„â€¡enje performansi</li>
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
              <td className="py-2">Sve mreÃ…Â¾e</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Bidding</td>
              <td className="py-2 pr-4">Manual ili Smart</td>
              <td className="py-2">Automated</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Search Terms</td>
              <td className="py-2 pr-4">Potpun uvid</td>
              <td className="py-2">DelimiÃ„Âan</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Learning</td>
              <td className="py-2 pr-4">BrÃ…Â¾i</td>
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
        imate stabilan conversion history. Hibridni pristup Ã„Âesto daje najbolje
        rezultate.
      </p>

      <h2>PMax za B2B</h2>
      <p>
        B2B je izazovniji: manji volume, duÃ…Â¾i sales cycle i potreba za lead
        quality.
      </p>
      <h3>Kada PMax funkcioniÃ…Â¡e za B2B</h3>
      <ul>
        <li>Minimum 15-20 konverzija meseÃ„Âno</li>
        <li>Konzistentan lead-to-sale rate</li>
        <li>MoguÃ„â€¡ offline conversion import</li>
      </ul>
      <h3>Struktura za B2B</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>
          PMax Kampanja{"\n"}
          Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ AG 1: Primary Service{"\n"}
          Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ AG 2: Secondary Service{"\n"}
          Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ AG 3: Industry-Specific
        </code>
      </pre>

      <h3>KljuÃ„Âne strategije</h3>
      <p className="font-semibold">1. Offline conversion import</p>
      <p>
        PMax optimizuje ka onome Ã…Â¡to mu kaÃ…Â¾ete da je konverzija. Ako optimizujete
        ka form fills, dobiÃ„â€¡ete volumen form fills Ã¢â‚¬â€ ne nuÃ…Â¾no kvalitetne.
        ReÃ…Â¡enje: importujte SQL ili Won deals nazad u Google Ads.
      </p>
      <p className="font-semibold">2. Audience signals</p>
      <ul>
        <li>Customer Match liste</li>
        <li>Website visitors (specifiÃ„Âne stranice)</li>
        <li>In-market audiences</li>
        <li>Custom segments</li>
      </ul>
      <p className="font-semibold">3. Negativne kljuÃ„Âne reÃ„Âi</p>
      <ul>
        <li>Job-related termini (posao, karijera, plata)</li>
        <li>Student termini (seminarski, zavrÃ…Â¡ni rad)</li>
        <li>Free-seeker termini (besplatno, free, crack)</li>
        <li>Competitor employee searches</li>
      </ul>

      <h2>Optimizacija Performance Max</h2>
      <h3>Ã…Â ta moÃ…Â¾ete kontrolisati</h3>
      <ol>
        <li>Asset kvalitet (osveÃ…Â¾avanje i A/B test)</li>
        <li>Audience signals (testiranje i refinisanje)</li>
        <li>Product feed (title, custom labels, listing segmenti)</li>
        <li>Bid strategija i ciljevi</li>
        <li>URL Expansion (preporuka: OFF za veÃ„â€¡inu naloga)</li>
      </ol>

      <h3>Asset performance ratings</h3>
      <ul>
        <li>Low Ã¢â‚¬â€ zamenite asset</li>
        <li>Good Ã¢â‚¬â€ testirajte alternative</li>
        <li>Best Ã¢â‚¬â€ zadrÃ…Â¾ite, ali nastavite testiranje</li>
      </ul>

      <h3>Bid strategije</h3>
      <ul>
        <li>Maximize Conversions Ã¢â‚¬â€ za poÃ„Âetak</li>
        <li>Target CPA Ã¢â‚¬â€ kada znate ciljnu cenu</li>
        <li>Target ROAS Ã¢â‚¬â€ za eCommerce sa vrednostima porudÃ…Â¾bina</li>
      </ul>
      <p>
        Preporuka: startujte sa Maximize Conversions 2-4 nedelje, zatim preÃ„â€˜ite
        na Target CPA/ROAS uz target 10-20% iznad trenutnog.
      </p>

      <h2>Insights i reporting</h2>
      <p className="font-semibold">Gde traÃ…Â¾iti podatke</p>
      <ul>
        <li>PMax Insights tab (search terms, audience, assets)</li>
        <li>Campaign reports po asset grupama</li>
        <li>Placement reports (nakon filtriranja)</li>
      </ul>
      <p className="font-semibold">KljuÃ„Âne metrike</p>
      <ul>
        <li>Nedeljno: spend, conversions, ROAS/CPA, asset performance</li>
        <li>MeseÃ„Âno: trends, audience insights, placement review</li>
      </ul>

      <h2>Ã„Å’este greÃ…Â¡ke sa PMax</h2>
      <ol>
        <li>Pokretanje bez dovoljno conversion data</li>
        <li>Jedan asset set za sve</li>
        <li>Ignorisanje audience signals</li>
        <li>Set-and-forget mentalitet</li>
        <li>LoÃ…Â¡ tracking</li>
      </ol>

      <h2>Realna oÃ„Âekivanja</h2>
      <h3>Learning period</h3>
      <p>
        PMax treba 4-6 nedelja za poÃ„Âetno uÃ„Âenje. Ne menjajte drastiÃ„Âno i
        obezbedite dovoljno budÃ…Â¾eta za 50+ konverzija.
      </p>
      <h3>TipiÃ„Âni rezultati</h3>
      <p className="font-semibold">eCommerce:</p>
      <ul>
        <li>ROAS 3-6x za optimizovane kampanje</li>
        <li>Porast revenue-a 20-40% vs samo Search/Shopping</li>
        <li>VeÃ„â€¡i reach uz niÃ…Â¾i intent na nekim mreÃ…Â¾ama</li>
      </ul>
      <p className="font-semibold">B2B:</p>
      <ul>
        <li>CPL varira u odnosu na Search</li>
        <li>Lead quality zavisi od offline import-a</li>
        <li>Volume moÃ…Â¾e znaÃ„Âajno porasti</li>
      </ul>
      <h3>Kada odustati</h3>
      <p>
        Ako posle 8-10 nedelja i 100+ konverzija ROAS ostaje ispod cilja, CPA
        iznad prihvatljivog ili lead quality nije dobra, PMax moÃ…Â¾da nije pravi
        izbor.
      </p>

      <h2>ZakljuÃ„Âak</h2>
      <p>
        Performance Max je moÃ„â€¡an alat, ali nije magija. Najbolje radi kada imate
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
        Ne nuÃ…Â¾no. Mnogi koriste oba Ã¢â‚¬â€ Standard Shopping za kontrolu, PMax za
        prospecting. Shopping i dalje funkcioniÃ…Â¡e.
      </p>
      <h3>Koliki budÃ…Â¾et treba za PMax?</h3>
      <p>
        Minimum Ã¢â€šÂ¬50-100 dnevno za smislene rezultate. Ispod toga, algoritam nema
        dovoljno podataka.
      </p>
      <h3>ZaÃ…Â¡to ne vidim sve search terms?</h3>
      <p>
        Google ograniÃ„Âava search terms insights za PMax. Vidite samo kategorije
        i top termine, ne sve.
      </p>
      <h3>Da li PMax kanibalizuje druge kampanje?</h3>
      <p>
        MoÃ…Â¾e. Pratite account-level performanse, ne samo PMax.
      </p>
      <h3>Kada treba iskljuÃ„Âiti PMax?</h3>
      <p>
        Kada konstantno underperformuje posle 8+ nedelja, lead quality je loÃ…Â¡a i
        ne poboljÃ…Â¡ava se, ili ne odgovara vaÃ…Â¡em modelu.
      </p>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje aÃ…Â¾uriranje: Januar 2026
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
        Google Shopping je najvaÅ¾niji kanal za veÄ‡inu eCommerce biznisa. Vizuelni
        format sa slikom, cenom i imenom prodavnice filtrira nekvalifikovan
        saobraÄ‡aj i dovodi ljude koji su spremni da kupe.
      </p>
      <p>
        Shopping kampanje su onoliko dobre koliko je dobar product feed i
        struktura kampanja. LoÅ¡ feed = loÅ¡i rezultati, bez obzira koliko troÅ¡ite.
      </p>
      <ul>
        <li>Kako Google Shopping funkcioniÅ¡e</li>
        <li>Product feed optimizacija (najvaÅ¾niji deo)</li>
        <li>Struktura kampanja za kontrolu i skaliranje</li>
        <li>Bidding strategije</li>
        <li>Taktike za poveÄ‡anje ROAS-a</li>
        <li>ÄŒeste greÅ¡ke i kako ih izbeÄ‡i</li>
      </ul>

      <h2>Kako Google Shopping funkcioniÅ¡e</h2>
      <h3>Osnove</h3>
      <p>
        Za razliku od Search kampanja gde birate kljuÄne reÄi, Google Shopping
        koristi product feed da odredi kada prikazati oglase. Proces izgleda
        ovako:
      </p>
      <ol>
        <li>Kreirate product feed u Google Merchant Center</li>
        <li>PoveÅ¾ete Merchant Center sa Google Ads</li>
        <li>Kreirate Shopping kampanju</li>
        <li>Google matchuje proizvode sa pretragama</li>
        <li>PlaÄ‡ate po kliku (CPC model)</li>
      </ol>
      <p>
        Shopping je efikasan jer je format vizuelan, cena je vidljiva pre klika,
        a intent je visok.
      </p>

      <h2>Product feed: temelj svega</h2>
      <p>
        Product feed je XML ili TXT fajl sa podacima o proizvodima. Google na
        osnovu feed-a odluÄuje za koje pretrage prikazuje oglase.
      </p>
      <h3>Obavezni atributi</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Atribut</th>
              <th className="py-2 pr-4">Å ta je</th>
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
              <td className="py-2">Nike Air Max 90 MuÅ¡ke Bele</td>
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
        Formula: [Brand] + [Tip proizvoda] + [KljuÄni atributi] + [Model/Varijanta]
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border-2 border-gray-900 rounded-lg p-4">
          <p className="font-semibold">LoÅ¡e</p>
          <ul className="text-gray-700">
            <li>Patike muÅ¡ke</li>
            <li>Laptop HP</li>
          </ul>
        </div>
        <div className="border-2 border-gray-900 rounded-lg p-4">
          <p className="font-semibold">Dobro</p>
          <ul className="text-gray-700">
            <li>Nike Air Max 90 MuÅ¡ke Patike Bele Broj 43</li>
            <li>HP Pavilion 15 Laptop i5 16GB RAM 512GB SSD 15.6 inch</li>
          </ul>
        </div>
      </div>
      <p>
        Limit je 150 karaktera, ali prvih 70 je najvaÅ¾nije.
      </p>

      <h3>Description optimizacija</h3>
      <ul>
        <li>PoÄnite sa najvaÅ¾nijim informacijama</li>
        <li>UkljuÄite kljuÄne reÄi prirodno</li>
        <li>Navedite specifikacije</li>
        <li>Izbegavajte promotivni copy</li>
        <li>500-1000 karaktera je optimalno</li>
      </ul>

      <h3>Product Type vs Google Product Category</h3>
      <p>
        Google Product Category je Google-ova taksonomija, a Product Type je
        vaÅ¡a kategorija i moÄ‡nija je za segmentaciju.
      </p>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>
          ObuÄ‡a &gt; MuÅ¡ka ObuÄ‡a &gt; Patike &gt; Running Patike &gt; Nike
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
              <td className="py-2 pr-4">MarÅ¾a</td>
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
          â”œâ”€â”€ Brand Campaign{"\n"}
          â”œâ”€â”€ High Priority (generic, low bid){"\n"}
          â”œâ”€â”€ Medium Priority (filtered){"\n"}
          â””â”€â”€ Low Priority (exact, high bid)
        </code>
      </pre>
      <h3>Priority bidding strategija</h3>
      <ul>
        <li>High Priority + Low Bid â€” Å¡iroke pretrage</li>
        <li>Medium Priority + Medium Bid â€” specifiÄnije pretrage</li>
        <li>Low Priority + High Bid â€” high-intent pretrage</li>
      </ul>

      <h3>Single Product Ad Groups (SPAGs)</h3>
      <ul>
        <li>Precizna kontrola bidova</li>
        <li>ÄŒistiji podaci</li>
        <li>LakÅ¡e testiranje</li>
      </ul>
      <p>
        Koristite SPAGs za top 20% proizvoda po prihodu i proizvode sa visokom
        marÅ¾om.
      </p>

      <h2>Bidding strategije</h2>
      <h3>Manual CPC</h3>
      <p>
        Prednosti: potpuna kontrola i odmah primenljive promene. Mana: zahteva
        vreme.
      </p>
      <h3>Target ROAS</h3>
      <p>
        Automatska optimizacija ka cilju, ali traÅ¾i learning period i 50+
        konverzija meseÄno.
      </p>
      <h3>Maximize Clicks / Maximize Conversion Value</h3>
      <p>
        Maximize Clicks sluÅ¾i za skupljanje podataka, Maximize Conversion Value
        kada imate dovoljno konverzija.
      </p>

      <h2>Taktike za poveÄ‡anje ROAS-a</h2>
      <h3>1. Feed optimizacija</h3>
      <ul>
        <li>Audit title-ova</li>
        <li>Dodajte brand gde nedostaje</li>
        <li>Optimizujte description za top proizvode</li>
        <li>Postavite custom labels</li>
      </ul>
      <p>OÄekivani rezultat: 10-30% bolji CTR i conversion rate.</p>

      <h3>2. Negative keywords</h3>
      <ul>
        <li>Informational: &quot;kako&quot;, &quot;Å¡ta je&quot;, &quot;recenzija&quot;</li>
        <li>Free seekers: &quot;besplatno&quot;, &quot;free&quot;, &quot;jeftino&quot;</li>
        <li>Job related: &quot;posao&quot;, &quot;zaposlenje&quot;</li>
        <li>DIY: &quot;sam napravi&quot;, &quot;uradi sam&quot;</li>
      </ul>

      <h3>3. Bid adjustments</h3>
      <ul>
        <li>Device: desktop Äesto konvertuje bolje od mobile</li>
        <li>Location: Beograd vs ostatak Srbije moÅ¾e varirati 20-50%</li>
        <li>Time: prilagodite bidove po satu i danu</li>
      </ul>

      <h3>4. RLSA (remarketing liste)</h3>
      <ul>
        <li>Past purchasers (+50-100%)</li>
        <li>Cart abandoners (+30-50%)</li>
        <li>Product viewers (+20-30%)</li>
      </ul>

      <h3>5. IskljuÄivanje loÅ¡ih proizvoda</h3>
      <ul>
        <li>Bez konverzija posle 100+ klikova</li>
        <li>Low margin proizvodi</li>
        <li>Out of stock</li>
      </ul>

      <h3>6. Konkurentnost cena</h3>
      <p>
        Ako ste 30% skuplji od konkurencije, CTR Ä‡e patiti. Koristite Merchant
        Center Price Competitiveness report.
      </p>

      <h2>ÄŒeste greÅ¡ke</h2>
      <ol>
        <li>Neoptimizovan feed</li>
        <li>Jedna kampanja za sve proizvode</li>
        <li>Ignorisanje search terms reporta</li>
        <li>LoÅ¡e slike</li>
        <li>NepraÄ‡enje konkurentnosti cena</li>
      </ol>

      <h2>Shopping vs Performance Max</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border-2 border-gray-900 rounded-lg p-4">
          <p className="font-semibold">Standard Shopping</p>
          <ul className="text-gray-700">
            <li>Potpuna kontrola bidova</li>
            <li>Jasan uvid u search terms</li>
            <li>Predvidljivije ponaÅ¡anje</li>
            <li>BrÅ¾i learning</li>
          </ul>
        </div>
        <div className="border-2 border-gray-900 rounded-lg p-4">
          <p className="font-semibold">Performance Max for Shopping</p>
          <ul className="text-gray-700">
            <li>Svi Google placements</li>
            <li>Automatska optimizacija</li>
            <li>Manje ruÄnog rada</li>
            <li>OgraniÄen uvid</li>
          </ul>
        </div>
      </div>
      <p>
        Preporuka: hibridni pristup â€” Standard Shopping za kontrolu, PMax za
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
      <h3>ÄŒesti razlozi za disapproval</h3>
      <ul>
        <li>Cena mismatch</li>
        <li>Dostupnost mismatch</li>
        <li>Missing GTIN/brand/slika</li>
        <li>Policy violation</li>
      </ul>

      <h2>ZakljuÄak</h2>
      <p>
        Google Shopping moÅ¾e biti najprofitabilniji kanal, ali profit ne dolazi
        automatski. Fokus na feed, strukturu, monitoring i testiranje.
      </p>
      <p>
        Ako troÅ¡ite na Shopping a nemate ROAS koji Å¾elite, prvo proverite feed.
        80% problema je tamo.
      </p>

      <h2>FAQ</h2>
      <h3>Koliko proizvoda treba za Shopping kampanje?</h3>
      <p>
        Minimum 10-20, idealno 50+. Sa viÅ¡e proizvoda imate viÅ¡e prilika za
        impressions i konverzije.
      </p>
      <h3>Da li mogu koristiti Shopping bez GTIN-a?</h3>
      <p>
        Da, ali performanse mogu biti loÅ¡ije. Ako nemate GTIN, popunite brand +
        MPN.
      </p>
      <h3>Koliki budÅ¾et treba za Shopping?</h3>
      <p>
        Minimum â‚¬500-1,000 meseÄno za smislene rezultate. Za ozbiljno
        testiranje i optimizaciju, â‚¬1,500-2,000+.
      </p>
      <h3>ZaÅ¡to moji proizvodi nisu prikazani?</h3>
      <p>
        NajÄeÅ¡Ä‡i razlozi: disapproved feed, prenizak bid, loÅ¡ Quality Score, ili
        issue sa dostupnoÅ¡Ä‡u.
      </p>
      <h3>Shopping ili Search za eCommerce?</h3>
      <p>
        Oba. Shopping za vizuelni, product-focused saobraÄ‡aj. Search za branded i
        specifiÄne pretrage koje Shopping ne hvata dobro.
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

function AgencijaVsFreelancerPost() {
  return (
    <>
      <p>
        Odlučili ste da koristite Google Ads. Odlično. Sada dolazi pitanje koje
        muči svakog marketing menadžera: ko će upravljati kampanjama? Imate tri
        opcije: agencija, freelancer/konsultant ili in-house tim.
      </p>
      <p>
        Ne postoji univerzalno najbolje rešenje, ali postoji pravo rešenje za
        vašu specifičnu situaciju. Ovaj vodič pomaže da ga prepoznate.
      </p>

      <h2>Brzi pregled: tri opcije</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Kriterijum</th>
              <th className="py-2 pr-4">Agencija</th>
              <th className="py-2 pr-4">Freelancer</th>
              <th className="py-2">In-House</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Mesečni trošak</td>
              <td className="py-2 pr-4">€500-3,000+</td>
              <td className="py-2 pr-4">€300-1,200</td>
              <td className="py-2">€1,000-2,500 (plata)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Brzina početka</td>
              <td className="py-2 pr-4">1-2 nedelje</td>
              <td className="py-2 pr-4">Odmah</td>
              <td className="py-2">1-3 meseca</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Ekspertiza</td>
              <td className="py-2 pr-4">Široka</td>
              <td className="py-2 pr-4">Duboka, specifična</td>
              <td className="py-2">Zavisi od osobe</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Skalabilnost</td>
              <td className="py-2 pr-4">Visoka</td>
              <td className="py-2 pr-4">Ograničena</td>
              <td className="py-2">Srednja</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Komunikacija</td>
              <td className="py-2 pr-4">Formalnija</td>
              <td className="py-2 pr-4">Direktna</td>
              <td className="py-2">Potpuna kontrola</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Rizik</td>
              <td className="py-2 pr-4">Niži</td>
              <td className="py-2 pr-4">Srednji</td>
              <td className="py-2">Viši</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Opcija 1: Google Ads agencija</h2>
      <h3>Kako agencije naplaćuju</h3>
      <ul>
        <li>Procenat od ad spend-a: 10-20% (najčešće 12-15%)</li>
        <li>Fiksna mesečna naknada: €500-3,000</li>
        <li>Hibrid: manja fiksna + procenat iznad spend-a</li>
        <li>Performance-based: retko, obično uz fiksnu</li>
      </ul>
      <p className="font-semibold">Primer:</p>
      <ul>
        <li>Ad spend €5,000: 15% model = €750</li>
        <li>Fiksni model: €800-1,200</li>
        <li>Hibrid (€400 + 8% iznad €3,000): €560</li>
      </ul>

      <h3>Prednosti agencije</h3>
      <ul>
        <li>Tim umesto pojedinca</li>
        <li>Šira ekspertiza iz više industrija</li>
        <li>Alati i resursi uključeni</li>
        <li>Skalabilnost kada budžet raste</li>
        <li>Jasna struktura odgovornosti</li>
      </ul>

      <h3>Mane agencije</h3>
      <ul>
        <li>Niste jedini klijent</li>
        <li>Šablonski pristup kod nekih agencija</li>
        <li>Skuplje za manje budžete</li>
        <li>Sporija komunikacija</li>
        <li>Lock-in efekat (proverite ugovor)</li>
      </ul>

      <h3>Kada izabrati agenciju</h3>
      <ul>
        <li>Ad spend preko €5,000 mesečno</li>
        <li>Potreban multi-channel pristup</li>
        <li>Nemate vreme za duboku uključenost</li>
        <li>Želite strukturu i redovne izveštaje</li>
        <li>Planirate brzo skaliranje</li>
      </ul>

      <h2>Opcija 2: Freelancer / konsultant</h2>
      <h3>Kako freelanceri naplaćuju</h3>
      <ul>
        <li>Fiksna mesečna naknada: €300-1,500</li>
        <li>Satnica: €25-80/sat</li>
        <li>Project-based: €500-3,000</li>
        <li>Retainer + performance bonus</li>
      </ul>

      <h3>Prednosti freelancera</h3>
      <ul>
        <li>Personalizovana pažnja</li>
        <li>Direktna komunikacija</li>
        <li>Fleksibilnost u saradnji</li>
        <li>Specijalizacija</li>
        <li>Bolja vrednost za manje budžete</li>
      </ul>

      <h3>Mane freelancera</h3>
      <ul>
        <li>Zavisnost od jedne osobe</li>
        <li>Ograničen kapacitet</li>
        <li>Varijabilna profesionalnost</li>
        <li>Uža ekspertiza</li>
        <li>Upitan kontinuitet na duže staze</li>
      </ul>

      <h3>Crvene zastavice kod freelancera</h3>
      <ul>
        <li>Ne želi da vam da pristup nalogu</li>
        <li>Nema reference ili portfolio</li>
        <li>Garantuje rezultate pre audita</li>
        <li>Spor i nejasan u komunikaciji</li>
        <li>Nejasan scope saradnje</li>
      </ul>

      <h3>Kada izabrati freelancera</h3>
      <ul>
        <li>Ad spend €1,000-10,000 mesečno</li>
        <li>Fokus na jednom kanalu</li>
        <li>Želite duboku specijalizaciju</li>
        <li>Bitna vam je direktna komunikacija</li>
        <li>Imate nekog ko može nadgledati rad</li>
      </ul>

      <h2>Opcija 3: In-house tim</h2>
      <h3>Troškovi in-house tima</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Pozicija</th>
              <th className="py-2">Bruto mesečna plata</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Junior PPC Specialist</td>
              <td className="py-2">€800-1,200</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Mid-Level PPC Specialist</td>
              <td className="py-2">€1,200-1,800</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Senior PPC Specialist</td>
              <td className="py-2">€1,800-2,500</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Head of Performance Marketing</td>
              <td className="py-2">€2,500-4,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500">
        Dodatni troškovi: alati (€100-400), obuke (€500-2,000 godišnje),
        infrastruktura i vreme za recruitment.
      </p>

      <h3>Prednosti in-house tima</h3>
      <ul>
        <li>Potpuna kontrola nad prioritetima</li>
        <li>Duboko razumevanje biznisa</li>
        <li>Instant komunikacija</li>
        <li>Dugoročna isplativost za velike budžete</li>
        <li>Znanje ostaje u firmi</li>
      </ul>

      <h3>Mane in-house tima</h3>
      <ul>
        <li>Teško je naći dobre ljude</li>
        <li>Rizik od odlaska i gubitka znanja</li>
        <li>Rizik od stagnacije</li>
        <li>Skupo za manje firme</li>
        <li>Jedna osoba ne može pokriti sve kanale</li>
      </ul>

      <h3>Kada izabrati in-house</h3>
      <ul>
        <li>Ad spend preko €15,000-20,000 mesečno</li>
        <li>Marketing je core funkcija</li>
        <li>Imate resurse za recruitment i razvoj</li>
        <li>Planirate dugoročno (3+ godine)</li>
        <li>Potrebna vam je potpuna kontrola nad podacima</li>
      </ul>

      <h2>Hibridni modeli</h2>
      <p>Najčešće kombinacije:</p>
      <ul>
        <li>In-house + konsultant (strategija i mentorstvo)</li>
        <li>Agencija + in-house koordinator</li>
        <li>Strateški konsultant + taktička agencija</li>
      </ul>

      <h2>Kako doneti odluku: praktični framework</h2>
      <ol>
        <li>
          Definišite mesečni ad spend i mapirajte opcije (do €2k, €2-10k,
          €10-30k, €30k+).
        </li>
        <li>
          Procenite interne resurse: ko nadgleda partnera i koliko vremena imate?
        </li>
        <li>
          Rangirajte prioritete: cena, kontrola, ekspertiza, skalabilnost,
          brzina.
        </li>
        <li>
          Evaluirajte 2-3 partnera po opciji i postavite prava pitanja.
        </li>
      </ol>

      <h2>Crvene zastavice (za bilo koju opciju)</h2>
      <ul>
        <li>Garantuju rezultate pre audita</li>
        <li>Ne daju pristup nalogu</li>
        <li>Insistiraju na dugim ugovorima bez izlaza</li>
        <li>Ne mogu jasno objasniti šta rade</li>
        <li>Sporo komuniciraju od starta</li>
        <li>Nema referenci u vašoj industriji</li>
        <li>Cena je previše dobra da bi bila istinita</li>
      </ul>

      <h2>Zaključak</h2>
      <p>
        Agencija je za vas ako želite strukturu i skalabilnost, freelancer ako
        želite personalizaciju i direktnu komunikaciju, a in-house ako imate
        resurse i potrebna vam je potpuna kontrola. Najvažnije je da partner
        razume biznis i komunicira transparentno.
      </p>

      <h2>FAQ</h2>
      <h3>Da li mala firma treba Google Ads agenciju?</h3>
      <p>
        Ne obavezno. Za budžete do €2,000-3,000 mesečno, kvalitetan freelancer
        je često bolja vrednost.
      </p>
      <h3>Koliko košta Google Ads agencija u Srbiji?</h3>
      <p>
        Cene variraju od €400-500 za manje agencije do €1,500-3,000+ za veće.
      </p>
      <h3>Može li freelancer da vodi veliki budžet?</h3>
      <p>
        Može, ali treba da ima kapacitet i iskustvo. Za budžete preko €20,000
        razmotrite vrlo iskusnog freelancera ili agenciju.
      </p>
      <h3>Šta je bolje za eCommerce?</h3>
      <p>
        Za fokus na Google Shopping + Search, specijalizovani freelancer može
        biti odličan. Za multi-channel, agencija ima više smisla.
      </p>
      <h3>Kako proveriti kvalitet partnera?</h3>
      <p>
        Tražite reference, pitajte za proces rada i gledajte komunikaciju pre
        angažovanja.
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
    title: "Koliko KoÃ…Â¡ta Google Ads? Cene, BudÃ…Â¾eti i ROI u Srbiji [2026]",
    date: "2026-01-26",
    category: "Google Ads",
    metaDescription:
      "Koliko zaista koÃ…Â¡ta Google Ads u Srbiji? Detaljni pregled cena po industrijama, minimalni budÃ…Â¾eti, troÃ…Â¡kovi agencija i kako izraÃ„Âunati ROI pre nego Ã…Â¡to potroÃ…Â¡ite prvi dinar.",
    content: <KolikoKostaGoogleAdsPost />
  },
  {
    slug: "google-oglasavanje-za-firme",
    title: "Google OglaÃ…Â¡avanje za Firme: Kompletan VodiÃ„Â za B2B i eCommerce [2026]",
    date: "2026-01-26",
    category: "Google oglaÃ…Â¡avanje",
    metaDescription:
      "Kompletan vodiÃ„Â za Google oglaÃ…Â¡avanje prilagoÃ„â€˜en firmama. Strategije za B2B i eCommerce, tipovi kampanja, budÃ…Â¾etiranje i merenje rezultata Ã¢â‚¬â€ sve na jednom mestu.",
    content: <GoogleOglasavanjeZaFirmePost />
  },
    {
    slug: "performance-max-vodic",
    title: "Performance Max Kampanje: VodiÃ„Â za eCommerce i B2B [2026]",
    date: "2026-01-26",
    category: "Performance Max",
    metaDescription:
      "Sve o Performance Max kampanjama Ã¢â‚¬â€ kako rade, kada ih koristiti, struktura, asset grupe, i strategije optimizacije. VodiÃ„Â baziran na realnim rezultatima iz regiona.",
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
    title: "Google Shopping Kampanje: Kako PoveÄ‡ati ROAS [VodiÄ 2026]",
    date: "2026-01-26",
    category: "Google Shopping",
    metaDescription:
      "Kompletan vodiÄ za Google Shopping kampanje. Product feed optimizacija, struktura kampanja, bidding strategije i taktike za poveÄ‡anje ROAS-a â€” sve bazirano na realnim rezultatima.",
    content: <GoogleShoppingVodicPost />
  },
  {
    slug: "agencija-vs-freelancer",
    title: "Google Ads Agencija vs Freelancer vs In-House: Kako Izabrati Pravu Opciju",
    date: "2026-01-26",
    category: "Google Ads",
    metaDescription:
      "Agencija, freelancer ili in-house tim za Google Ads? Detaljno poređenje troškova, prednosti i mana svake opcije. Saznajte koja je prava za vaš budžet i ciljeve.",
    content: <AgencijaVsFreelancerPost />
  }
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

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

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="section-padding">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-12">
        <article className="lg:col-span-2">
          <div className="text-sm text-gray-500 mb-3">
            {post.category} Ã‚Â· {post.date}
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
