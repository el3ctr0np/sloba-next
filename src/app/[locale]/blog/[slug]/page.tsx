import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";

function KolikoKostaGoogleAdsPost() {
  return (
    <>
      <h2>Uvod</h2>
      <p>"Koliko košta Google Ads?"</p>
      <p>Ovo je prvo pitanje koje čujem od svakog direktora marketinga ili vlasnika firme koji razmišlja o plaćenom oglašavanju. I razumem frustraciju — Google vam neće dati jasan odgovor, a većina sadržaja na ovu temu dolazi iz SAD-a gde su cene potpuno drugačije.</p>
      <p>Problem je što na ovo pitanje ne postoji jednostavan odgovor tipa "košta X dinara mesečno". Cena Google Ads-a zavisi od desetak faktora — od vaše industrije, preko konkurencije, do kvaliteta vaših kampanja.</p>
      <p>Ali nakon skoro decenije rada sa Google Ads-om i stotina naloga u regionu, mogu vam dati konkretan okvir koji će vam pomoći da planirate budžet i razumete šta očekivati.</p>
      <p>U ovom vodiču pokrivam:</p>
      <ul>
        <li>Kako Google Ads zapravo naplaćuje (i zašto to morate razumeti)</li>
        <li>Realne CPC cene po industrijama u Srbiji i regionu</li>
        <li>Minimalni budžet koji ima smisla</li>
        <li>Troškovi agencije vs. in-house tim</li>
        <li>Kako izračunati ROI pre nego što potrošite prvi dinar</li>
        <li>Skriveni troškovi o kojima niko ne priča</li>
      </ul>
      <p>---</p>
      <h2>Kako Google Ads Naplaćuje?</h2>
      <p>Pre nego što pričamo o konkretnim ciframa, morate razumeti osnovni model naplate.</p>
      <p>Google Ads koristi <strong>aukcijski sistem</strong>. Svaki put kada neko ukuca pretragu na Google-u, dešava se mini-aukcija između oglašivača koji ciljaju tu ključnu reč. Pobednik aukcije (odnosno više pobednika) dobija prikaz oglasa.</p>
      <p>Vi plaćate samo kada neko klikne na vaš oglas — otuda naziv "pay-per-click" ili PPC.</p>
      <h3>Cena po kliku (CPC)</h3>
      <p>CPC zavisi od:</p>
      <ul>
        <li><strong>Konkurencije</strong> — što više oglašivača cilja istu ključnu reč, veća je cena</li>
        <li><strong>Quality Score</strong> — Google ocenjuje relevantnost vašeg oglasa i landing page-a (1-10). Viši skor = niža cena</li>
        <li><strong>Pozicija oglasa</strong> — prva pozicija košta više od četvrte</li>
        <li><strong>Industrija</strong> — osiguranje i advokati plaćaju 10x više od prodavnica odeće</li>
        <li><strong>Geografija</strong> — Srbija je jeftinija od Nemačke, ali skuplja od Makedonije</li>
      </ul>
      <h3>Šta plaćate pored klikova</h3>
      <p>Google Ads ima više modela naplate:</p>
      <ul>
        <li><strong>CPC</strong> — plaćate po kliku (Search, Shopping)</li>
        <li><strong>CPM</strong> — plaćate po 1000 prikaza (Display, YouTube)</li>
        <li><strong>CPV</strong> — plaćate po pregledu videa (YouTube)</li>
        <li><strong>CPA</strong> — plaćate po konverziji (napredne strategije)</li>
      </ul>
      <p>Za većinu biznisa u Srbiji, CPC model na Search mreži je polazna tačka.</p>
      <p>---</p>
      <h2>Realne CPC Cene po Industrijama u Srbiji</h2>
      <p>Evo prosečnih CPC cena koje vidim kod klijenata u regionu (2025-2026):</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Industrija</th>
              <th className="py-2 pr-4">Prosečan CPC (EUR)</th>
              <th className="py-2 pr-4">Raspon</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce - moda</td>
              <td className="py-2 pr-4">€0.15 - €0.40</td>
              <td className="py-2 pr-4">€0.08 - €0.80</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce - elektronika</td>
              <td className="py-2 pr-4">€0.20 - €0.50</td>
              <td className="py-2 pr-4">€0.10 - €1.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Nameštaj</td>
              <td className="py-2 pr-4">€0.25 - €0.60</td>
              <td className="py-2 pr-4">€0.15 - €1.20</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">B2B usluge</td>
              <td className="py-2 pr-4">€0.40 - €1.20</td>
              <td className="py-2 pr-4">€0.20 - €3.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">SaaS (regionalni)</td>
              <td className="py-2 pr-4">€0.80 - €2.50</td>
              <td className="py-2 pr-4">€0.30 - €5.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Nekretnine</td>
              <td className="py-2 pr-4">€0.30 - €0.80</td>
              <td className="py-2 pr-4">€0.15 - €1.50</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Turizam</td>
              <td className="py-2 pr-4">€0.20 - €0.60</td>
              <td className="py-2 pr-4">€0.10 - €1.20</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Finansije/Osiguranje</td>
              <td className="py-2 pr-4">€1.00 - €4.00</td>
              <td className="py-2 pr-4">€0.50 - €8.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Zdravstvo/Klinike</td>
              <td className="py-2 pr-4">€0.50 - €1.50</td>
              <td className="py-2 pr-4">€0.25 - €3.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Obrazovanje</td>
              <td className="py-2 pr-4">€0.30 - €0.90</td>
              <td className="py-2 pr-4">€0.15 - €2.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><strong>Napomena:</strong> Ove cene su za srpsko tržište. Za targeting Nemačke ili UK, pomnožite sa 3-5x.</p>
      <h3>Zašto je raspon toliko širok?</h3>
      <p>CPC od €0.08 do €3.00 u istoj industriji deluje apsurdno. Ali razlika je u:</p>
      <ul>
        <li><strong>Ključnim rečima</strong> — branded termini su jeftiniji od generičkih</li>
        <li><strong>Nameri pretrage</strong> — "kupi patike online" košta više od "koje patike su u modi"</li>
        <li><strong>Kvalitetu naloga</strong> — optimizovan nalog plaća i 50% manje</li>
        <li><strong>Vremenu</strong> — Black Friday vs. februar</li>
      </ul>
      <p>---</p>
      <h2>Minimalni Budžet Koji Ima Smisla</h2>
      <p>Pitanje koje čujem stalno: "Mogu li da počnem sa €100 mesečno?"</p>
      <p>Tehnički — da. Praktično — zavisi.</p>
      <h3>Formula za minimalni budžet</h3>
      <p>Minimalni mesečni budžet = (Ciljani broj klikova) × (Prosečan CPC) × 30 dana</p>
      <p>Za smislene rezultate vam treba <strong>minimum 10-15 klikova dnevno</strong>. To znači:</p>
      <ul>
        <li><strong>eCommerce (CPC €0.30):</strong> €90-135/mesečno minimum</li>
        <li><strong>B2B usluge (CPC €0.80):</strong> €240-360/mesečno minimum</li>
        <li><strong>SaaS (CPC €1.50):</strong> €450-675/mesečno minimum</li>
      </ul>
      <p>Ali ovo je <strong>apsolutni minimum</strong> za testiranje. Za stabilne rezultate i optimizaciju, preporučujem:</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Tip biznisa</th>
              <th className="py-2 pr-4">Preporučeni mesečni budžet</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Lokalni biznis</td>
              <td className="py-2 pr-4">€300 - €800</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce (manji)</td>
              <td className="py-2 pr-4">€500 - €1,500</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce (srednji)</td>
              <td className="py-2 pr-4">€1,500 - €5,000</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">B2B usluge</td>
              <td className="py-2 pr-4">€800 - €2,500</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">SaaS</td>
              <td className="py-2 pr-4">€1,500 - €5,000+</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Zašto ne preporučujem mikro-budžete</h3>
      <p>Sa €100-200 mesečno:</p>
      <ul>
        <li>Nemate dovoljno podataka za optimizaciju</li>
        <li>Algoritmi nemaju šta da nauče</li>
        <li>Ne možete testirati različite pristupe</li>
        <li>ROI je nemoguće pouzdano meriti</li>
      </ul>
      <p>To je kao da otvorite restoran i reklamirate se samo jednom nedeljno. Tehnički radite marketing, ali bez efekta.</p>
      <p>---</p>
      <h2>Troškovi Upravljanja: Agencija vs. Freelancer vs. In-House</h2>
      <p>Pored budžeta za oglase, imate troškove upravljanja. Tri opcije:</p>
      <h3>1. Agencija</h3>
      <p><strong>Tipični modeli naplate:</strong></p>
      <ul>
        <li>Procenat od ad spend-a: 10-20%</li>
        <li>Fiksna mesečna naknada: €500-2,500</li>
        <li>Hibrid: manja fiksna + procenat</li>
      </ul>
      <p><strong>Prednosti:</strong></p>
      <ul>
        <li>Tim stručnjaka</li>
        <li>Alati i resursi</li>
        <li>Kontinuitet (nema zavisnosti od jedne osobe)</li>
        <li>Iskustvo iz različitih industrija</li>
      </ul>
      <p><strong>Mane:</strong></p>
      <ul>
        <li>Skuplje za manje budžete</li>
        <li>Manje personalizovana pažnja</li>
        <li>Moguća "šablonska" rešenja</li>
      </ul>
      <h3>2. Freelancer/Konsultant</h3>
      <p><strong>Tipični modeli naplate:</strong></p>
      <ul>
        <li>Fiksna mesečna naknada: €300-1,200</li>
        <li>Satnica: €30-80/sat</li>
        <li>Retainer + procenat</li>
      </ul>
      <p><strong>Prednosti:</strong></p>
      <ul>
        <li>Personalizovaniji pristup</li>
        <li>Direktna komunikacija</li>
        <li>Često fleksibilniji</li>
        <li>Bolje za specifične potrebe</li>
      </ul>
      <p><strong>Mane:</strong></p>
      <ul>
        <li>Zavisnost od jedne osobe</li>
        <li>Ograničen kapacitet</li>
        <li>Može nedostajati širina znanja</li>
      </ul>
      <h3>3. In-House</h3>
      <p><strong>Troškovi:</strong></p>
      <ul>
        <li>Plata: €800-2,500 mesečno (Srbija)</li>
        <li>Alati: €100-500 mesečno</li>
        <li>Obuke: €500-2,000 godišnje</li>
      </ul>
      <p><strong>Prednosti:</strong></p>
      <ul>
        <li>Potpuna kontrola</li>
        <li>Duboko razumevanje biznisa</li>
        <li>Brza komunikacija</li>
        <li>Dugoročno jeftinije za velike budžete</li>
      </ul>
      <p><strong>Mane:</strong></p>
      <ul>
        <li>Skup za manje kompanije</li>
        <li>Rizik od stagnacije znanja</li>
        <li>Teško naći kvalitetne ljude</li>
      </ul>
      <h3>Moja preporuka</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Mesečni ad spend</th>
              <th className="py-2 pr-4">Preporučena opcija</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Do €1,000</td>
              <td className="py-2 pr-4">Freelancer ili DIY sa konsultacijama</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">€1,000 - €5,000</td>
              <td className="py-2 pr-4">Freelancer/konsultant</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">€5,000 - €20,000</td>
              <td className="py-2 pr-4">Specijalizovana agencija ili senior freelancer</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">€20,000+</td>
              <td className="py-2 pr-4">Agencija + in-house koordinator</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>---</p>
      <h2>Kako Izračunati ROI Pre Nego Što Potrošite Prvi Dinar</h2>
      <p>Ovde većina preskače, a tu se donose najvažnije odluke.</p>
      <h3>Korak 1: Poznajte svoju prosečnu vrednost kupca</h3>
      <p>Za eCommerce:</p>
      <ul>
        <li>Prosečna vrednost porudžbine (AOV)</li>
        <li>Marža po porudžbini</li>
        <li>Lifetime value (LTV) ako imate povratne kupce</li>
      </ul>
      <p>Za B2B/usluge:</p>
      <ul>
        <li>Vrednost prosečnog ugovora</li>
        <li>Marža</li>
        <li>LTV klijenta</li>
      </ul>
      <h3>Korak 2: Definišite maksimalni CPA</h3>
      <p>Koliko možete da platite za jednu konverziju (kupovinu, lead) i da ostanete profitabilni?</p>
      <p><strong>Formula:</strong> Maksimalni CPA = (Prosečna vrednost × Marža) × Procenat koji ste spremni da investirate</p>
      <p>Primer za eCommerce:</p>
      <ul>
        <li>AOV: €80</li>
        <li>Marža: 40% = €32</li>
        <li>Spremni da investirate 50% marže u akviziciju</li>
        <li>Maksimalni CPA = €16</li>
      </ul>
      <h3>Korak 3: Procenite conversion rate</h3>
      <p>Tipični conversion rate-ovi:</p>
      <ul>
        <li>eCommerce: 1-3%</li>
        <li>Lead gen: 2-8%</li>
        <li>B2B: 2-5%</li>
      </ul>
      <h3>Korak 4: Izračunajte break-even CPC</h3>
      <p><strong>Formula:</strong> Break-even CPC = Maksimalni CPA × Conversion Rate</p>
      <p>Primer:</p>
      <ul>
        <li>Maksimalni CPA: €16</li>
        <li>Conversion rate: 2%</li>
        <li>Break-even CPC = €16 × 0.02 = €0.32</li>
      </ul>
      <p>Ako je prosečan CPC u vašoj industriji €0.25, imate prostora za profit. Ako je €0.50, moraćete da radite na conversion rate-u ili AOV-u.</p>
      <p>---</p>
      <h2>Skriveni Troškovi o Kojima Niko Ne Priča</h2>
      <h3>1. Landing page-ovi</h3>
      <p>Ako šaljete saobraćaj na homepage, bacate novac. Kvalitetan landing page košta:</p>
      <ul>
        <li>Šablonski: €200-500 (jednokratno)</li>
        <li>Custom dizajn: €500-2,000 (jednokratno)</li>
        <li>A/B testiranje: ongoing trošak</li>
      </ul>
      <h3>2. Kreative i content</h3>
      <ul>
        <li>Product feed optimizacija: €200-500</li>
        <li>Ad copy pisanje: €100-300 mesečno</li>
        <li>Slike za Display/YouTube: €100-500</li>
      </ul>
      <h3>3. Alati</h3>
      <ul>
        <li>Keyword research: €50-200 mesečno</li>
        <li>Competitor analysis: €50-150 mesečno</li>
        <li>Reporting: €30-100 mesečno</li>
      </ul>
      <h3>4. Conversion tracking setup</h3>
      <p>Jednom, ali neophodno:</p>
      <ul>
        <li>GA4 + GTM setup: €200-500</li>
        <li>Enhanced conversions: €100-300</li>
        <li>Server-side tracking: €300-800</li>
      </ul>
      <h3>5. Vreme za učenje</h3>
      <p>Ako radite sami, računajte na 3-6 meseci pre nego što stvarno naučite. To vreme ima cenu.</p>
      <p>---</p>
      <h2>Kada Google Ads Nije Pravi Izbor</h2>
      <p>Iskreno, Google Ads nije za svakoga. Ne preporučujem ako:</p>
      <ul>
        <li><strong>Nemate jasno definisan proizvod/uslugu</strong> — Google Ads ne popravlja loš product-market fit</li>
        <li><strong>Marže su premale</strong> — ispod 20% je teško biti profitabilan</li>
        <li><strong>Nema potražnje</strong> — niko ne pretražuje ono što nudite</li>
        <li><strong>Website nije spreman</strong> — loš UX ubija i najbolje kampanje</li>
        <li><strong>Nemate budžet za 3-6 meseci</strong> — rezultati ne dolaze preko noći</li>
      </ul>
      <p>---</p>
      <h2>Sledeći Koraci</h2>
      <p>Ako ste pročitali do ovde, verovatno imate bolju sliku o tome šta vas očekuje.</p>
      <p>Evo šta preporučujem:</p>
      <ol>
        <li><strong>Izračunajte svoj maksimalni CPA</strong> koristeći formulu iznad</li>
        <li><strong>Proverite CPC u vašoj industriji</strong> kroz Keyword Planner (besplatan u Google Ads)</li>
        <li><strong>Definišite realan test budžet</strong> za minimum 3 meseca</li>
        <li><strong>Odlučite</strong> da li ćete raditi sami, sa freelancerom ili agencijom</li>
      </ol>
      <p>Ako vam treba pomoć sa analizom ili imate pitanja specifična za vaš biznis, <Link href="/kontakt/">zakažite besplatne konsultacije →</Link></p>
      <p>---</p>
      <h2>FAQ</h2>
      <h3>Koliko minimalno treba uložiti u Google Ads?</h3>
      <p>Tehnički minimum je €1 dnevno, ali za smislene rezultate računajte na minimum €300-500 mesečno za lokalne biznise i €1,000+ za eCommerce ili B2B.</p>
      <h3>Da li se Google Ads isplati za mali biznis?</h3>
      <p>Da, ako imate jasnu vrednost po kupcu i konkurentne marže. Male firme često imaju prednost jer su fleksibilnije i mogu brže optimizovati.</p>
      <h3>Koliko vremena treba da Google Ads počne da donosi rezultate?</h3>
      <p>Prve indikacije vidite za 2-4 nedelje. Prave rezultate i optimizovan nalog za 2-3 meseca. Stabilne performanse za 4-6 meseci.</p>
      <h3>Zašto su cene toliko različite po industrijama?</h3>
      <p>Zbog konkurencije i vrednosti konverzije. Advokat može da plati €50 za klik jer jedan klijent vredi €5,000. Prodavnica majica ne može.</p>
      <h3>Da li Google Ads košta više nego Facebook Ads?</h3>
      <p>Generalno da, CPC na Google-u je viši. Ali intent korisnika je jači — neko ko pretražuje "kupi X" je bliži kupovini od nekoga ko scrolla Instagram.</p>
      <p>---</p>
      <p>*Poslednje ažuriranje: Januar 2026*</p>
      <p>*<Link href="/o-meni/">Autor: Slobodan Jelisavac, Google Ads Consultant</Link>*</p>
      <div className="mt-10 text-sm text-gray-500">
        Poslednje a?uriranje: Januar 2026
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
      <h2>Uvod</h2>
      <p>Google oglašavanje je najmoćniji kanal za biznise koji žele da dosegnu kupce sa namerom kupovine.</p>
      <p>Za razliku od društvenih mreža gde "upadate" ljude dok skroluju, na Google-u dosežete ljude koji aktivno traže vaš proizvod ili uslugu. Ta razlika u nameri je ključna.</p>
      <p>Ali Google Ads nije jedinstven sistem — to je ekosistem različitih tipova kampanja, mreža, i strategija. Ono što radi za eCommerce neće raditi za B2B SaaS. Ono što ima smisla za lokalni biznis nema smisla za međunarodni brend.</p>
      <p>U ovom vodiču pokrivam:</p>
      <ul>
        <li>Kako Google oglašavanje zapravo funkcioniše</li>
        <li>Sve tipove kampanja i kada koji koristiti</li>
        <li>Specifične strategije za eCommerce i B2B</li>
        <li>Kako postaviti temelje za uspešne kampanje</li>
        <li>Najčešće greške koje vidim kod firmi u Srbiji</li>
      </ul>
      <p>Vodič je napisan za vlasnike firmi i marketing menadžere koji žele da razumeju sistem pre nego što investiraju — ili pre nego što evaluiraju rad postojećeg partnera.</p>
      <p>---</p>
      <h2>Kako Google Oglašavanje Funkcioniše</h2>
      <h3>Aukcijski model</h3>
      <p>Google Ads radi na principu aukcije u realnom vremenu.</p>
      <p>Svaki put kada neko ukuca pretragu, dešava se aukcija među oglašivačima koji ciljaju tu ključnu reč. Pobednik (ili više njih) dobija prikaz oglasa.</p>
      <p>Ali nije najvažniji ko plati najviše. Google koristi formulu:</p>
      <p><strong>Ad Rank = Bid × Quality Score × Očekivani uticaj ekstenzija</strong></p>
      <p>Ovo znači da oglašivač sa boljim Quality Score-om može da plati manje i da bude iznad konkurenta koji plaća više.</p>
      <h3>Quality Score: Vaš skriveni adut</h3>
      <p>Quality Score (1-10) meri koliko je vaš oglas relevantan za korisnika. Zavisi od:</p>
      <ul>
        <li><strong>CTR (Click-Through Rate)</strong> — koliko često ljudi kliknu na vaš oglas</li>
        <li><strong>Relevantnost oglasa</strong> — koliko oglas odgovara pretrazi</li>
        <li><strong>Landing page iskustvo</strong> — brzina, relevantnost, mobilna optimizacija</li>
      </ul>
      <p>Visok Quality Score = niža cena po kliku, bolje pozicije, više konverzija za isti budžet.</p>
      <h3>Mreže i gde se prikazuju oglasi</h3>
      <p>Google Ads ima više mreža:</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Mreža</th>
              <th className="py-2 pr-4">Gde se prikazuju</th>
              <th className="py-2 pr-4">Tip kampanja</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Search</td>
              <td className="py-2 pr-4">Google.com rezultati pretrage</td>
              <td className="py-2 pr-4">Search, Shopping</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Display</td>
              <td className="py-2 pr-4">2+ miliona web sajtova i aplikacija</td>
              <td className="py-2 pr-4">Display, Remarketing</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">YouTube</td>
              <td className="py-2 pr-4">Pre/tokom/posle video sadržaja</td>
              <td className="py-2 pr-4">Video kampanje</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Discover</td>
              <td className="py-2 pr-4">Google Discover feed, Gmail</td>
              <td className="py-2 pr-4">Demand Gen</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Maps</td>
              <td className="py-2 pr-4">Google Maps rezultati</td>
              <td className="py-2 pr-4">Local kampanje</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>---</p>
      <h2>Tipovi Google Ads Kampanja</h2>
      <h3>1. Search Kampanje</h3>
      <p><strong>Šta su:</strong> Tekstualni oglasi koji se prikazuju na vrhu Google pretrage.</p>
      <p><strong>Kada koristiti:</strong></p>
      <ul>
        <li>Proizvod/usluga sa jasnom potražnjom</li>
        <li>Ljudi aktivno traže ono što nudite</li>
        <li>Želite visok intent saobraćaj</li>
      </ul>
      <p><strong>Za koga:</strong></p>
      <ul>
        <li>✅ B2B usluge</li>
        <li>✅ Lokalni biznisi</li>
        <li>✅ SaaS</li>
        <li>✅ eCommerce (uz Shopping)</li>
      </ul>
      <p><strong>Primer:</strong> Korisnik traži "CRM softver za mala preduzeća" → vaš oglas se prikazuje → klik → landing page.</p>
      <h3>2. Shopping Kampanje</h3>
      <p><strong>Šta su:</strong> Vizuelni oglasi sa slikom proizvoda, cenom i nazivom prodavnice.</p>
      <p><strong>Kada koristiti:</strong></p>
      <ul>
        <li>Imate online prodavnicu</li>
        <li>Prodajete fizičke proizvode</li>
        <li>Imate konkurentne cene</li>
      </ul>
      <p><strong>Za koga:</strong></p>
      <ul>
        <li>✅ eCommerce</li>
        <li>❌ B2B usluge</li>
        <li>❌ Digitalni proizvodi</li>
      </ul>
      <p><strong>Zahtevi:</strong></p>
      <ul>
        <li>Google Merchant Center nalog</li>
        <li>Product feed (lista proizvoda)</li>
        <li>Povezan sa Google Ads-om</li>
      </ul>
      <h3>3. Performance Max (PMax)</h3>
      <p><strong>Šta su:</strong> Google-ova "sve u jednom" kampanja koja automatski prikazuje oglase na svim mrežama.</p>
      <p><strong>Kada koristiti:</strong></p>
      <ul>
        <li>Imate dovoljno conversion data (50+ mesečno idealno)</li>
        <li>Želite skaliranje uz manje ručnog rada</li>
        <li>Spremni ste da prepustite kontrolu algoritmu</li>
      </ul>
      <p><strong>Za koga:</strong></p>
      <ul>
        <li>✅ eCommerce sa dokazanim proizvodima</li>
        <li>✅ Lead gen sa volumenom</li>
        <li>⚠️ Oprezno za manje budžete</li>
      </ul>
      <p><strong>Upozorenje:</strong> PMax je "crna kutija" — imate manje kontrole i uvida. Ne preporučujem kao prvu kampanju.</p>
      <h3>4. Display Kampanje</h3>
      <p><strong>Šta su:</strong> Banner oglasi na web sajtovima, aplikacijama, i YouTube-u.</p>
      <p><strong>Kada koristiti:</strong></p>
      <ul>
        <li>Brand awareness</li>
        <li>Remarketing</li>
        <li>Dosezanje šire publike</li>
      </ul>
      <p><strong>Za koga:</strong></p>
      <ul>
        <li>✅ Branding kampanje</li>
        <li>✅ Remarketing za sve</li>
        <li>⚠️ Slabije za direktan response</li>
      </ul>
      <h3>5. Video Kampanje (YouTube)</h3>
      <p><strong>Šta su:</strong> Video oglasi na YouTube-u (pre-roll, mid-roll, in-feed).</p>
      <p><strong>Kada koristiti:</strong></p>
      <ul>
        <li>Imate video content</li>
        <li>Želite brand awareness</li>
        <li>Kompleksniji proizvod koji zahteva objašnjenje</li>
      </ul>
      <p><strong>Za koga:</strong></p>
      <ul>
        <li>✅ B2C brendovi</li>
        <li>✅ SaaS sa demo video-ima</li>
        <li>✅ Remarketing</li>
      </ul>
      <h3>6. Demand Gen</h3>
      <p><strong>Šta su:</strong> Vizuelni oglasi za Discover, Gmail, i YouTube.</p>
      <p><strong>Kada koristiti:</strong></p>
      <ul>
        <li>Želite da dosegnete ljude rano u purchase journey-u</li>
        <li>Imate jak vizuelni content</li>
        <li>Želite alternativu Meta Ads-u</li>
      </ul>
      <p><strong>Za koga:</strong></p>
      <ul>
        <li>✅ eCommerce (prospect kampanje)</li>
        <li>✅ B2C sa životnim stilom</li>
        <li>⚠️ Eksperimentalno za B2B</li>
      </ul>
      <p>---</p>
      <h2>Google Oglašavanje za eCommerce</h2>
      <p>Ako prodajete fizičke proizvode online, ovo su ključni elementi.</p>
      <h3>Osnovna struktura</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`├── Brand Search (brand ključne reči)
├── Standard Shopping (kontrolisane kampanje)
├── Performance Max (skaliranje)
├── Search Generic (non-brand pretrage)
└── Remarketing (povratak posetilaca)`}</code>
      </pre>
      <h3>Product Feed: Temelj svega</h3>
      <p>Vaš product feed u Merchant Center-u je najvažniji element. Loš feed = loše kampanje, bez izuzetka.</p>
      <p><strong>Ključni atributi:</strong></p>
      <ul>
        <li><strong>Title</strong> — uključite ključne reči, brand, atribute (boja, veličina)</li>
        <li><strong>Description</strong> — detaljan opis sa relevantnim terminima</li>
        <li><strong>Product Type</strong> — vaša kategorija (npr. &quot;Obuća &gt; Muške Patike &gt; Running&quot;)</li>
        <li><strong>GTIN/MPN</strong> — jedinstveni identifikatori proizvoda</li>
        <li><strong>Custom Labels</strong> — za segmentaciju po marži, sezoni, performansama</li>
      </ul>
      <h3>Shopping vs Performance Max</h3>
      <p>Pitanje koje čujem stalno: "Da li da koristim Standard Shopping ili PMax?"</p>
      <p><strong>Standard Shopping:</strong></p>
      <ul>
        <li>Više kontrole nad bidovima</li>
        <li>Jasniji uvid u search terms</li>
        <li>Bolji za testiranje novih proizvoda</li>
        <li>Preporučujem za početak</li>
      </ul>
      <p><strong>Performance Max:</strong></p>
      <ul>
        <li>Doseg na svim mrežama</li>
        <li>Bolje za skaliranje dokazanih proizvoda</li>
        <li>Manje ručnog rada</li>
        <li>Preporučujem kada imate conversion history</li>
      </ul>
      <p><strong>Moja preporuka:</strong> Hibridni pristup — Standard Shopping za kontrolu, PMax za skaliranje.</p>
      <h3>Remarketing za eCommerce</h3>
      <p>Tipovi remarketing publika:</p>
      <ul>
        <li><strong>Cart abandoners</strong> — dodali u korpu, nisu kupili (1-7 dana)</li>
        <li><strong>Product viewers</strong> — gledali proizvod, nisu dodali (3-14 dana)</li>
        <li><strong>Past customers</strong> — kupili, potencijal za repeat (30-180 dana)</li>
        <li><strong>High-value customers</strong> — kupili više puta (personalizovane ponude)</li>
      </ul>
      <p>---</p>
      <h2>Google Oglašavanje za B2B</h2>
      <p>B2B ima specifične izazove: duži sales cycle, više decision maker-a, manji volume pretrage.</p>
      <h3>Osnovna struktura</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`├── Brand Search (zaštita brenda)
├── Solution Search ("CRM softver", "ERP sistem")
├── Problem Search ("kako automatizovati procese")
├── Competitor Search (imena konkurenata)
└── Remarketing (nurturing)`}</code>
      </pre>
      <h3>Ključne razlike od B2C</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Aspekt</th>
              <th className="py-2 pr-4">B2C</th>
              <th className="py-2 pr-4">B2B</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Sales cycle</td>
              <td className="py-2 pr-4">Kratak (minuti-dani)</td>
              <td className="py-2 pr-4">Dug (nedelje-meseci)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Konverzija</td>
              <td className="py-2 pr-4">Direktna kupovina</td>
              <td className="py-2 pr-4">Lead (forma, demo)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Targeting</td>
              <td className="py-2 pr-4">Širok</td>
              <td className="py-2 pr-4">Uži, specifičniji</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Keywords</td>
              <td className="py-2 pr-4">Transakcioni</td>
              <td className="py-2 pr-4">Informativni + transakcioni</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">CPC</td>
              <td className="py-2 pr-4">Obično niži</td>
              <td className="py-2 pr-4">Obično viši</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Volume</td>
              <td className="py-2 pr-4">Veći</td>
              <td className="py-2 pr-4">Manji</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Lead Quality vs Quantity</h3>
      <p>Najveća greška u B2B Google Ads: fokus na broj lead-ova umesto na kvalitet.</p>
      <p>100 loših lead-ova košta više nego 10 kvalitetnih:</p>
      <ul>
        <li>Vreme sales tima se troši na kvalifikaciju</li>
        <li>Pipeline se zagušuje</li>
        <li>Moral pada</li>
      </ul>
      <p><strong>Rešenje:</strong></p>
      <ul>
        <li>Offline conversion tracking — importujte prodaje iz CRM-a nazad u Google Ads</li>
        <li>Lead scoring — ne tretirajte sve konverzije isto</li>
        <li>Negative keywords agresivno — izbacite studente, job seekers, DIY-ere</li>
      </ul>
      <h3>Remarketing za B2B</h3>
      <p>B2B remarketing je drugačiji jer:</p>
      <ul>
        <li>Dužи consideration period</li>
        <li>Više stakeholder-a u odluci</li>
        <li>Content mora da edukuje</li>
      </ul>
      <p><strong>Strategija:</strong></p>
      <ol>
        <li><strong>Top of funnel</strong> — blog čitaoci → lead magnet ponude</li>
        <li><strong>Middle of funnel</strong> — lead magnet preuzimači → case study, webinar</li>
        <li><strong>Bottom of funnel</strong> — stranica sa cenama, demo stranica → direktna ponuda</li>
      </ol>
      <p>---</p>
      <h2>Postavljanje Temelja za Uspešne Kampanje</h2>
      <p>Pre nego što pokrenete prvu kampanju, ove stvari moraju biti na mestu.</p>
      <h3>1. Conversion Tracking</h3>
      <p>Bez tracking-a letite slepo. Setup uključuje:</p>
      <ul>
        <li><strong>Google Tag Manager</strong> — centralno upravljanje tagovima</li>
        <li><strong>GA4</strong> — analitika i atribucija</li>
        <li><strong>Google Ads conversion tag</strong> — direktno praćenje</li>
        <li><strong>Enhanced conversions</strong> — bolje matchovanje korisnika</li>
      </ul>
      <p>Pratite:</p>
      <ul>
        <li>Primarne konverzije (kupovina, lead)</li>
        <li>Sekundarne konverzije (add to cart, stranica sa cenama)</li>
        <li>Micro konverzije (scroll, video view, vreme na sajtu)</li>
      </ul>
      <h3>2. Landing Pages</h3>
      <p>Pravilo: svaka kampanja treba svoj landing page.</p>
      <p>Homepage nije landing page.</p>
      <p>Landing page treba da ima:</p>
      <ul>
        <li><strong>Jasan headline</strong> koji odgovara oglasu</li>
        <li><strong>Benefit-focused copy</strong> — šta korisnik dobija</li>
        <li><strong>Social proof</strong> — testimonijali, logoi klijenata</li>
        <li><strong>Jedan CTA</strong> — ne zbunjujte sa previše opcija</li>
        <li><strong>Brzina</strong> — pod 3 sekunde load time</li>
      </ul>
      <h3>3. Keyword Research</h3>
      <p>Alati:</p>
      <ul>
        <li><strong>Google Keyword Planner</strong> — besplatan, osnovni</li>
        <li><strong>Semrush/Ahrefs</strong> — premium, detaljan</li>
        <li><strong>Google Search Console</strong> — šta vam već donosi organic</li>
      </ul>
      <p>Fokus na:</p>
      <ul>
        <li><strong>Intent</strong> — šta korisnik želi da postigne</li>
        <li><strong>Volume</strong> — koliko ljudi traži</li>
        <li><strong>Competition</strong> — koliko je skupo</li>
        <li><strong>Relevantnost</strong> — da li možete isporučiti</li>
      </ul>
      <h3>4. Competitor Analysis</h3>
      <p>Pre početka, proverite:</p>
      <ul>
        <li>Ko se oglašava na vaše ključne reči?</li>
        <li>Kakve oglase koriste?</li>
        <li>Na koje landing pages vode?</li>
        <li>Koji su im USP-ovi?</li>
      </ul>
      <p>Alati: Semrush, SpyFu, ili jednostavno — pretražite kao korisnik.</p>
      <p>---</p>
      <h2>Najčešće Greške Koje Vidim</h2>
      <h3>1. Nedostatak tracking-a</h3>
      <p>Neverovatno koliko firmi troši hiljade evra bez pravilnog tracking-a. Ako ne znate šta konvertuje, ne možete optimizovati.</p>
      <h3>2. Loša struktura naloga</h3>
      <p>Sve u jednoj kampanji, sve ključne reči u jednoj ad grupi. Nemoguće optimizovati, nemoguće razumeti šta radi.</p>
      <h3>3. Ignorisanje negativnih ključnih reči</h3>
      <p>Plaćate za "besplatno", "kako napraviti sam", "posao" i slično. Novac bačen.</p>
      <h3>4. Slanje saobraćaja na homepage</h3>
      <p>Homepage nije dizajniran za konverziju. Landing page jeste.</p>
      <h3>5. Nerealna očekivanja</h3>
      <p>"Želim rezultate za nedelju dana sa budžetom od €300." Google Ads zahteva vreme za optimizaciju. Minimum 2-3 meseca za stabilne rezultate.</p>
      <h3>6. Set-and-forget mentalitet</h3>
      <p>Google Ads nije "postavi i zaboravi". Zahteva kontinuiranu optimizaciju: bid adjustments, negative keywords, ad testing, landing page testiranje.</p>
      <p>---</p>
      <h2>Kako Meriti Uspeh</h2>
      <h3>Ključni KPI-jevi</h3>
      <p><strong>Za eCommerce:</strong></p>
      <ul>
        <li><strong>ROAS</strong> (Return on Ad Spend) — prihod ÷ trošak oglasa</li>
        <li><strong>CPA</strong> (Cost per Acquisition) — trošak po kupovini</li>
        <li><strong>Conversion Rate</strong> — procenat posetilaca koji kupe</li>
        <li><strong>AOV</strong> (Average Order Value) — prosečna vrednost porudžbine</li>
      </ul>
      <p><strong>Za B2B:</strong></p>
      <ul>
        <li><strong>CPL</strong> (Cost per Lead) — trošak po lead-u</li>
        <li><strong>Lead Quality Score</strong> — procenat kvalifikovanih lead-ova</li>
        <li><strong>SQL Rate</strong> — procenat lead-ova koji postanu sales qualified</li>
        <li><strong>Pipeline Value</strong> — vrednost potencijalnih dealova</li>
      </ul>
      <h3>Benchmark-ovi za region</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Metrika</th>
              <th className="py-2 pr-4">eCommerce</th>
              <th className="py-2 pr-4">B2B</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">CTR</td>
              <td className="py-2 pr-4">2-4%</td>
              <td className="py-2 pr-4">3-6%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Conversion Rate</td>
              <td className="py-2 pr-4">1-3%</td>
              <td className="py-2 pr-4">2-8%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">CPC (prosek)</td>
              <td className="py-2 pr-4">€0.20-0.60</td>
              <td className="py-2 pr-4">€0.50-2.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">ROAS (cilj)</td>
              <td className="py-2 pr-4">3-5x</td>
              <td className="py-2 pr-4">-</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">CPL (cilj)</td>
              <td className="py-2 pr-4">-</td>
              <td className="py-2 pr-4">€10-50</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>---</p>
      <h2>Sledeći Koraci</h2>
      <p>Ako ste spremni da počnete sa Google oglašavanjem:</p>
      <ol>
        <li><strong>Postavite tracking</strong> — ovo je nulti korak, ne preskačite</li>
        <li><strong>Definišite ciljeve</strong> — šta je uspeh za vas (ROAS, CPL, broj prodaja)</li>
        <li><strong>Pripremite landing pages</strong> — barem jedan per kampanja</li>
        <li><strong>Krenite sa Search</strong> — najlakše za početak, najviši intent</li>
        <li><strong>Budite strpljivi</strong> — minimum 2-3 meseca pre evaluacije</li>
      </ol>
      <p>Ako vam treba pomoć sa setup-om ili imate specifična pitanja, <Link href="/kontakt/">zakažite konsultacije →</Link></p>
      <p>---</p>
      <h2>FAQ</h2>
      <h3>Koliko košta Google oglašavanje?</h3>
      <p>Zavisi od industrije i konkurencije. U Srbiji, prosečan CPC je €0.15-1.50. Preporučeni minimalni mesečni budžet je €500-1,000 za manje biznise, €2,000+ za ozbiljnije kampanje.</p>
      <h3>Da li Google oglašavanje radi za B2B?</h3>
      <p>Apsolutno. B2B ima specifičnosti (duži sales cycle, manji volume), ali Google Ads je i dalje jedan od najefikasnijih kanala za B2B lead generation.</p>
      <h3>Koliko vremena treba da vidim rezultate?</h3>
      <p>Prve indikacije za 2-4 nedelje. Prave rezultate za 2-3 meseca. Optimizovan, stabilan nalog za 4-6 meseci.</p>
      <h3>Da li mi treba agencija za Google oglašavanje?</h3>
      <p>Ne obavezno. Za manje budžete (do €2,000), kvalitetan freelancer ili čak DIY sa edukacijom može biti dovoljan. Za veće budžete i kompleksnije kampanje, agencija ima smisla.</p>
      <h3>Šta je bolje: Google Ads ili Facebook Ads?</h3>
      <p>Zavisi od cilja. Google Ads hvata ljude sa namerom ("hoću da kupim X"). Facebook Ads hvata ljude po interesovanjima i demografiji. Za direktne prodaje, obično Google. Za brand awareness, obično Facebook. Najbolje: kombinacija.</p>
      <p>---</p>
      <p>*Poslednje ažuriranje: Januar 2026*</p>
      <p>*<Link href="/o-meni/">Autor: Slobodan Jelisavac, Google Ads Consultant</Link>*</p>
      <div className="mt-10 text-sm text-gray-500">
        Poslednje a?uriranje: Januar 2026
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
        Performance Max (PMax) je Google-ova kampanja koja obećava jednostavnost:
        dajte algoritmu kreativu, budžet i cilj — on će naći kupce na svim
        Google mrežama.
      </p>
      <p>
        Zvuči idealno. Ali realnost je komplikovanija. PMax može biti izuzetno
        efikasan kanal, ali može biti i crna rupa koja guta budžet bez jasnog
        uvida kuda odlazi novac. Razlika je u pristupu.
      </p>
      <p>U ovom vodiču pokrivam:</p>
      <ul>
        <li>Kako PMax zapravo funkcioniše</li>
        <li>Kada ima smisla koristiti PMax (i kada ne)</li>
        <li>Struktura i asset grupe</li>
        <li>Specifičnosti za eCommerce vs B2B</li>
        <li>Kako optimizovati ono nad čim nemate potpunu kontrolu</li>
        <li>Realni rezultati i očekivanja</li>
      </ul>

      <h2>Kako Performance Max funkcioniše</h2>
      <h3>Osnove</h3>
      <p>
        PMax je automatizovana kampanja koja koristi machine learning da prikaže
        vaše oglase na svim Google mrežama:
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
      <p>Vi dajete:</p>
      <ul>
        <li>
          <strong>Ciljeve</strong> — konverzije koje želite
        </li>
        <li>
          <strong>Budžet</strong> — koliko ste spremni da trošite
        </li>
        <li>
          <strong>Asset-e</strong> — slike, video, tekstove, logoe
        </li>
        <li>
          <strong>Audience signale</strong> — ko je vaša ciljna publika
        </li>
        <li>
          <strong>Product feed</strong> — za eCommerce
        </li>
      </ul>
      <p>Google radi:</p>
      <ul>
        <li>Kombinuje asset-e u različite formate oglasa</li>
        <li>Odlučuje gde i kada prikazati oglase</li>
        <li>Automatski bidduje za konverzije</li>
      </ul>

      <h3>Zašto je PMax “crna kutija”</h3>
      <p>
        PMax vam ne daje detaljan uvid koji ste imali sa Search ili Shopping
        kampanjama:
      </p>
      <ul>
        <li> Ne vidite search terms (potpuno)</li>
        <li> Ne znate tačno koliko ide na koji kanal</li>
        <li> Ne možete isključiti specifične placements (većinu)</li>
        <li> Ne kontrolišete bid per keyword</li>
      </ul>
      <p>Dobijate agregirane podatke i morate verovati algoritmu.</p>

      <h2>Kada koristiti Performance Max</h2>
      <h3>PMax ima smisla kada:</h3>
      <ul>
        <li>
           <strong>Imate proven conversion history</strong>
          <ul>
            <li>Minimum 30 konverzija mesečno, idealno 50+</li>
            <li>Algoritam uči iz vaših podataka — treba mu data</li>
          </ul>
        </li>
        <li>
           <strong>Želite skaliranje</strong>
          <ul>
            <li>Dostigli ste plafon sa Search/Shopping</li>
            <li>Želite da dosegnete korisnike na drugim mestima</li>
          </ul>
        </li>
        <li>
           <strong>Imate kvalitetne asset-e</strong>
          <ul>
            <li>Dobre slike, video, compelling copy</li>
            <li>Loši asset-i = loši rezultati</li>
          </ul>
        </li>
        <li>
           <strong>Spremni ste za manje kontrole</strong>
          <ul>
            <li>Verujete podacima više nego intuiciji</li>
            <li>Imate strpljenja za learning period</li>
          </ul>
        </li>
      </ul>

      <h3>PMax nema smisla kada:</h3>
      <ul>
        <li>
           <strong>Tek počinjete sa Google Ads</strong>
          <ul>
            <li>Nemate conversion data za učenje</li>
            <li>Ne znate šta funkcioniše</li>
          </ul>
        </li>
        <li>
           <strong>Imate mali budžet</strong>
          <ul>
            <li>Ispod €1,000–1,500 mesečno</li>
            <li>Algoritam nema dovoljno podataka za optimizaciju</li>
          </ul>
        </li>
        <li>
           <strong>Potrebna vam je granularna kontrola</strong>
          <ul>
            <li>Specifična brand vs non-brand alokacija</li>
            <li>Striktna kontrola troškova po proizvodu</li>
          </ul>
        </li>
        <li>
           <strong>Conversion tracking nije 100%</strong>
          <ul>
            <li>Loši podaci = loše odluke algoritma</li>
            <li>Najpre popravite tracking</li>
          </ul>
        </li>
      </ul>

      <h2>Struktura Performance Max kampanje</h2>
      <h3>Osnovni elementi</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`PMax Kampanja
|-- Cilj kampanje (konverzija)
|-- Budžet (dnevni)
|-- Bid strategija (Maximize conversions / Target CPA / Target ROAS)
|-- Asset Grupa 1
|   |-- Asset-i (slike, video, tekst)
|   |-- Audience Signals
|   |-- Listing Group (proizvodi)
|-- Asset Grupa 2
|   |-- ...
|-- URL Expansion (on/off)`}</code>
      </pre>

      <h3>Asset grupe</h3>
      <p>
        Asset grupa je tematska celina unutar PMax kampanje. Sadrži:
      </p>
      <ul>
        <li>
          <strong>Final URL</strong> — gde vodite saobraćaj
        </li>
        <li>
          <strong>Slike</strong> — landscape, square, portrait
        </li>
        <li>
          <strong>Logoi</strong> — square i landscape
        </li>
        <li>
          <strong>Video</strong> — YouTube video (ili će Google napraviti
          automatski)
        </li>
        <li>
          <strong>Headlines</strong> — kratki (30 chars) i dugi (90 chars)
        </li>
        <li>
          <strong>Descriptions</strong> — kratki i dugi opisi
        </li>
        <li>
          <strong>Audience Signals</strong> — sugestije za targeting
        </li>
        <li>
          <strong>Listing Group</strong> — koji proizvodi idu u ovu grupu
        </li>
      </ul>

      <h3>Koliko asset grupa treba</h3>
      <p>Zavisi od kompleksnosti biznisa:</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Tip biznisa</th>
              <th className="py-2">Preporučen broj AG</th>
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
              <td className="py-2 pr-4">B2B (više usluga)</td>
              <td className="py-2">3-6</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>Princip:</strong> svaka asset grupa treba imati tematsku
        povezanost — proizvodi, poruka, landing page i publika treba da budu
        usklađeni.
      </p>

      <h2>PMax za eCommerce</h2>
      <h3>Feed-first pristup</h3>
      <p>
        Za eCommerce, vaš product feed je najvažniji element. PMax bez feed-a
        je Display kampanja u novom pakovanju.
      </p>
      <p className="font-semibold">Optimizacija feed-a za PMax:</p>
      <ol>
        <li>
          <strong>Title</strong> — uključite ključne atribute (brand, tip, boja,
          veličina)
        </li>
        <li>
          <strong>Description</strong> — detaljna, sa ključnim rečima
        </li>
        <li>
          <strong>Product Type</strong> — vaša kategorija za segmentaciju
        </li>
        <li>
          <strong>Custom Labels</strong> — za grupisanje po:
          <ul>
            <li>Marži (high margin, low margin)</li>
            <li>Performansama (best sellers, slow movers)</li>
            <li>Sezoni (leto, zima)</li>
            <li>Cenovnom rangu</li>
          </ul>
        </li>
      </ol>

      <h3>Segmentacija asset grupa</h3>
      <p className="font-semibold">Primer za fashion eCommerce:</p>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`PMax Kampanja
|-- AG 1: Best Sellers (Custom Label: "best_seller")
|-- AG 2: Muška Obuća
|-- AG 3: Ženska Obuća
|-- AG 4: Accessories
|-- AG 5: Sale Items`}</code>
      </pre>
      <p>Zašto segmentacija:</p>
      <ul>
        <li>Različite poruke za različite kategorije</li>
        <li>Različiti audience signals</li>
        <li>Lakše praćenje performansi</li>
        <li>Mogućnost različitih bid strategija (kroz kampanje)</li>
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
              <td className="py-2">Sve mreže</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Bidding</td>
              <td className="py-2 pr-4">Manual ili Smart</td>
              <td className="py-2">Samo automated</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Search Terms</td>
              <td className="py-2 pr-4">Potpun uvid</td>
              <td className="py-2">Delimičan</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Learning</td>
              <td className="py-2 pr-4">Brži</td>
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
      <p className="font-semibold">Moja preporuka:</p>
      <p>
        Počnite sa Standard Shopping za kontrolu i učenje. Dodajte PMax kada
        imate stabilan conversion history. Hibridni pristup — Standard za brand
        i kontrolu, PMax za prospecting i skaliranje.
      </p>

      <h2>PMax za B2B</h2>
      <p>
        B2B sa PMax-om je izazovniji nego eCommerce. Manji volume, duži sales
        cycles i potreba za lead quality.
      </p>
      <h3>Kada PMax funkcioniše za B2B</h3>
      <ul>
        <li>Imate minimum 15-20 konverzija mesečno</li>
        <li>Lead-to-sale rate je konzistentan</li>
        <li>Možete importovati offline konverzije</li>
      </ul>

      <h3>Struktura za B2B</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`PMax Kampanja
|-- AG 1: Primary Service (main offering)
|-- AG 2: Secondary Service
|-- AG 3: Industry-Specific (ako target specifične industrije)`}</code>
      </pre>

      <h3>Ključne strategije</h3>
      <h4>1. Offline conversion import</h4>
      <p>
        PMax optimizuje ka onome što mu kažete da je konverzija. Ako optimizujete
        ka form fills, dobićete volume form fills — ali ne nužno kvalitetne.
      </p>
      <p>
        Rešenje: importujte SQL (Sales Qualified Lead) ili Won deals nazad u
        Google Ads. PMax će učiti šta pravi lead izgleda.
      </p>

      <h4>2. Audience signals su kritični</h4>
      <p>Za B2B, audience signals su važniji nego za eCommerce:</p>
      <ul>
        <li>Customer Match liste (postojeći klijenti)</li>
        <li>Website visitors (specifične stranice)</li>
        <li>In-market audiences (business services, software)</li>
        <li>Custom segments (search behavior related to your solution)</li>
      </ul>

      <h4>3. Negativne ključne reči na nalogu</h4>
      <p>
        PMax dozvoljava samo account-level negative keywords. Koristite ih
        agresivno:
      </p>
      <ul>
        <li>Job-related terms ("posao", "karijera", "plata")</li>
        <li>Student terms ("seminarski", "završni rad")</li>
        <li>Free-seeker terms ("besplatno", "free", "crack")</li>
        <li>Competitor employee searches ("[competitor] kontakt")</li>
      </ul>

      <h2>Optimizacija Performance Max</h2>
      <h3>Šta možete kontrolisati</h3>
      <ol>
        <li>
          <strong>Asset kvalitet</strong>
          <ul>
            <li>Redovno osvežavajte kreativu</li>
            <li>A/B testirajte različite poruke</li>
            <li>Pratite asset performance ratings</li>
          </ul>
        </li>
        <li>
          <strong>Audience signals</strong>
          <ul>
            <li>Dodajte, testirajte, refinirajte</li>
            <li>First-party data je najvažniji signal</li>
          </ul>
        </li>
        <li>
          <strong>Product feed</strong> (eCommerce)
          <ul>
            <li>Title optimizacija</li>
            <li>Custom label strategija</li>
            <li>Listing group segmentacija</li>
          </ul>
        </li>
        <li>
          <strong>Bid strategija i ciljevi</strong>
          <ul>
            <li>Target ROAS vs Target CPA</li>
            <li>Prilagođavanje targeta bazirano na rezultatima</li>
          </ul>
        </li>
        <li>
          <strong>URL Expansion</strong>
          <ul>
            <li>Preporučujem OFF za većinu</li>
            <li>Google može slati saobraćaj na stranice koje ne želite</li>
          </ul>
        </li>
      </ol>

      <h3>Asset performance ratings</h3>
      <p>Google daje ocene: Low, Good, Best.</p>
      <ul>
        <li>
          <strong>Low</strong> — zameni asset
        </li>
        <li>
          <strong>Good</strong> — OK, ali testiraj alternative
        </li>
        <li>
          <strong>Best</strong> — zadrži
        </li>
      </ul>
      <p className="text-sm text-gray-600">
        Upozorenje: “Best” ne znači da je objektivno najbolji, znači da Google
        preferira da ga koristi. Testirajte i dalje.
      </p>

      <h3>Bid strategije</h3>
      <p className="font-semibold">Maximize Conversions</p>
      <ul>
        <li>Za početak, dok skupljate data</li>
        <li>Nema target, samo maksimizuje</li>
      </ul>

      <p className="font-semibold">Target CPA</p>
      <ul>
        <li>Kada znate koliko možete platiti po konverziji</li>
        <li>Postavite realan CPA baziran na historijskim podacima</li>
      </ul>

      <p className="font-semibold">Target ROAS</p>
      <ul>
        <li>Za eCommerce sa različitim vrednostima porudžbina</li>
        <li>Zahteva Conversion Value tracking</li>
      </ul>

      <p className="font-semibold">Moja preporuka:</p>
      <ol>
        <li>Počnite sa Maximize Conversions (2-4 nedelje)</li>
        <li>Pređite na Target CPA/ROAS kada imate 30+ konverzija</li>
        <li>Postavite target 10-20% iznad trenutnog — dajte prostora algoritmu</li>
      </ol>

      <h2>Insights i reporting</h2>
      <h3>Gde tražiti podatke</h3>
      <p className="font-semibold">PMax Insights Tab:</p>
      <ul>
        <li>Search terms insights (ograničeno)</li>
        <li>Audience insights</li>
        <li>Asset performance</li>
      </ul>
      <p className="font-semibold">Campaign reports:</p>
      <ul>
        <li>Conversions by campaign/asset group</li>
        <li>Spend by asset group</li>
      </ul>
      <p className="font-semibold">Placement reports:</p>
      <ul>
        <li>Automatski placements (nakon filtriranja)</li>
      </ul>

      <h3>Ključne metrike za praćenje</h3>
      <p className="font-semibold">Nedeljno:</p>
      <ul>
        <li>Spend vs Budget</li>
        <li>Conversions / Conv. Rate</li>
        <li>ROAS ili CPA</li>
        <li>Asset performance changes</li>
      </ul>
      <p className="font-semibold">Mesečno:</p>
      <ul>
        <li>Search terms trends</li>
        <li>Audience insights review</li>
        <li>Placement review (isključivanje loših)</li>
        <li>Asset refresh needs</li>
      </ul>

      <h2>Česte greške sa PMax</h2>
      <h3>1. Pokretanje bez dovoljno conversion data</h3>
      <p>
        PMax bez istorije = random distribucija budžeta. Prvo izgradite history
        sa Search/Shopping.
      </p>
      <h3>2. Jedan asset set za sve</h3>
      <p>
        Generički asset-i = generički rezultati. Segmentujte po relevantnosti.
      </p>
      <h3>3. Ignorisanje audience signals</h3>
      <p>
        Audience signals nisu targeting — ali pomažu algoritmu. Što bolji
        signali, brže učenje.
      </p>
      <h3>4. Postavi i zaboravi</h3>
      <p>PMax zahteva manje dnevnog rada, ali ne nula. Nedeljne provere su minimum.</p>
      <h3>5. Loš tracking</h3>
      <p>
        Ako trackujete pogrešne konverzije ili nemate vrednosti, PMax optimizuje
        ka pogrešnom cilju.
      </p>

      <h2>Realna očekivanja</h2>
      <h3>Learning period</h3>
      <p>PMax treba 4-6 nedelja za početno učenje. U tom periodu:</p>
      <ul>
        <li>Ne menjajte ništa drastično</li>
        <li>Očekujte varijabilnost</li>
        <li>Fokus na dovoljno budžeta za 50+ konverzija</li>
      </ul>

      <h3>Tipični rezultati</h3>
      <p className="font-semibold">eCommerce:</p>
      <ul>
        <li>ROAS 3-6x je realan za optimizovane kampanje</li>
        <li>Porast revenue-a 20-40% vs samo Search/Shopping</li>
        <li>Veći reach, ali niži intent na nekim mrežama</li>
      </ul>
      <p className="font-semibold">B2B:</p>
      <ul>
        <li>CPL može biti viši ili niži vs Search — zavisi</li>
        <li>Lead quality zahteva offline conversion import</li>
        <li>Volume može značajno porasti</li>
      </ul>

      <h3>Kada odustati</h3>
      <p>Ako posle 8-10 nedelja i 100+ konverzija:</p>
      <ul>
        <li>ROAS konstantno ispod cilja</li>
        <li>CPA konstantno iznad prihvatljivog</li>
        <li>Lead quality je neprihvatljiva</li>
      </ul>
      <p>
        ...možda PMax nije za vaš biznis u ovom trenutku. Vratite se osnovama.
      </p>

      <h2>Zaključak</h2>
      <p>Performance Max je moćan alat — ali nije magija.</p>
      <p>Funkcioniše najbolje kada:</p>
      <ul>
        <li>Imate solid conversion tracking</li>
        <li>Dajete kvalitetne asset-e</li>
        <li>Imate strpljenja za learning period</li>
        <li>Kombinujete sa drugim kampanjama za kontrolu</li>
      </ul>
      <p>Ne funkcioniše dobro kada:</p>
      <ul>
        <li>Nemate dovoljno konverzija</li>
        <li>Tracking nije pouzdan</li>
        <li>Želite potpunu kontrolu</li>
        <li>Budžet je premali</li>
      </ul>
      <p>
        Moj savet: koristite PMax kao deo strategije, ne kao jedinu kampanju.
        Search za kontrolu, Shopping za proizvode, PMax za skaliranje.
      </p>
      <p>
        Ako želite da proverimo da li je PMax pravi izbor za vaš biznis, pogledajte{" "}
        <Link href="/usluge/performance-max" className="underline">
          Performance Max upravljanje
        </Link>{" "}
        ili{" "}
        <Link href="/kontakt" className="underline">
          zakažite konsultacije
        </Link>
        .
      </p>

      <h2>FAQ</h2>
      <h3>Da li PMax zamenjuje Shopping kampanje</h3>
      <p>
        Ne nužno. Mnogi oglašivači koriste oba — Standard Shopping za brand i
        kontrolu, PMax za prospecting. Google gura PMax, ali Shopping i dalje
        funkcioniše.
      </p>
      <h3>Koliki budžet treba za PMax</h3>
      <p>
        Minimum €50-100 dnevno za smislene rezultate. Ispod toga, algoritam nema
        dovoljno podataka.
      </p>
      <h3>Zašto ne vidim sve search terms</h3>
      <p>
        Google ograničava search terms insights za PMax. Vidite samo kategorije i
        top terme, ne sve. Ovo je legitimna kritika PMax-a.
      </p>
      <h3>Da li PMax kanibalizuje moje druge kampanje</h3>
      <p>
        Može. PMax ima prioritet za Shopping queries. Pratite ukupne rezultate,
        ne samo PMax. Account-level performance je ono što se računa.
      </p>
      <h3>Kada treba isključiti PMax</h3>
      <p>
        Kada konstantno underperformuje vs vaši ciljevi posle 8+ nedelja, kada je
        lead quality neprihvatljiva i ne poboljšava se, ili kada jednostavno ne
        odgovara vašem poslovnom modelu.
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

function GoogleShoppingVodicPost() {
  return (
    <>
      <p>
        Google Shopping je najvažniji kanal za većinu eCommerce biznisa. Vizuelni
        format sa slikom, cenom i imenom prodavnice stavlja proizvod na vrh
        pretrage. Korisnici vide proizvod pre nego što kliknu, što filtrira
        nekvalifikovan saobraćaj i dovodi ljude koji su spremni da kupe.
      </p>
      <p>
        Shopping kampanje su samo onoliko dobre koliko je dobar vaš product feed
        i struktura kampanja. Loš feed znači loše rezultate, bez obzira koliko
        trošite.
      </p>
      <p>U ovom vodiču pokrivam:</p>
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
        koristi vaš <strong>product feed</strong> da odredi kada prikazati oglase.
      </p>
      <p>Proces:</p>
      <ol>
        <li>Kreirate product feed u Google Merchant Center</li>
        <li>Povezujete Merchant Center sa Google Ads</li>
        <li>Kreirate Shopping kampanju</li>
        <li>Google matchuje proizvode sa pretragama korisnika</li>
        <li>Plaćate po kliku (CPC model)</li>
      </ol>

      <h3>Zašto je Shopping efikasan</h3>
      <ul>
        <li>
          <strong>Vizuelni format</strong> — korisnik vidi šta kupuje
        </li>
        <li>
          <strong>Pre-kvalifikacija</strong> — cena je vidljiva pre klika
        </li>
        <li>
          <strong>Visok intent</strong> — ljudi pretražuju specifične proizvode
        </li>
        <li>
          <strong>Manje konkurencije</strong> za setup — mnoge prodavnice ne
          optimizuju feed
        </li>
      </ul>

      <h2>Product feed: temelj svega</h2>
      <p>
        Vaš product feed je XML ili TXT fajl koji sadrži sve informacije o
        proizvodima. Google koristi ove podatke da odluči:
      </p>
      <ul>
        <li>Za koje pretrage prikazati vaš proizvod</li>
        <li>Kako rangirati vaš oglas u odnosu na konkurenciju</li>
        <li>Da li je proizvod uopšte eligible za prikaz</li>
      </ul>

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
      <p>
        Title je najvažniji atribut. Google ga koristi za matching sa
        pretragama.
      </p>
      <p className="font-semibold">Formula za efikasan title:</p>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`[Brand] + [Tip proizvoda] + [Ključni atributi] + [Model/Varijanta]`}</code>
      </pre>
      <p className="font-semibold">Primeri:</p>
      <ul>
        <li> Loše: "Patike muške"</li>
        <li> Dobro: "Nike Air Max 90 Muške Patike Bele Broj 43"</li>
        <li> Loše: "Laptop HP"</li>
        <li> Dobro: "HP Pavilion 15 Laptop i5 16GB RAM 512GB SSD 15.6 inch"</li>
      </ul>
      <p className="font-semibold">Šta uključiti u title:</p>
      <ol>
        <li>Brand (ako je poznat)</li>
        <li>Tip proizvoda (ne samo kategorija)</li>
        <li>Ključni atributi (boja, veličina, materijal)</li>
        <li>Model ili serija</li>
        <li>Namena (ako relevantno)</li>
      </ol>
      <p className="text-sm text-gray-600">
        Limit: 150 karaktera, ali prvih 70 je najvažnije (vidljivo u oglasu).
      </p>

      <h3>Description optimizacija</h3>
      <p>
        Description pomaže Google-u da razume proizvod i utiče na relevantnost.
      </p>
      <p className="font-semibold">Best practices:</p>
      <ul>
        <li>Počnite sa najvažnijim informacijama</li>
        <li>Uključite ključne reči prirodno</li>
        <li>Navedite specifikacije</li>
        <li>Izbegavajte promotional copy ("Najbolja ponuda!")</li>
        <li>500-1000 karaktera je optimalno</li>
      </ul>

      <h3>Product Type vs Google Product Category</h3>
      <p>
        <strong>Google Product Category</strong> — Google-ova taksonomija,
        ograničen izbor.
      </p>
      <p>
        <strong>Product Type</strong> — vaša kategorija, potpuna sloboda.
      </p>
      <p>Product Type je moćniji za segmentaciju:</p>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Obuća > Muška Obuća > Patike > Running Patike > Nike`}</code>
      </pre>
      <p>Omogućava vam da:</p>
      <ul>
        <li>Kreirate specifične ad grupe</li>
        <li>Postavite različite bidove po kategoriji</li>
        <li>Bolje pratite performanse</li>
      </ul>

      <h3>Custom labels</h3>
      <p>
        Custom Labels (0-4) su vaš tajni alat za segmentaciju.
      </p>
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
      <p className="font-semibold">Zašto su važni:</p>
      <ul>
        <li>Možete kreirati kampanje/ad grupe po labelima</li>
        <li>Različiti bidovi za različite margine</li>
        <li>Isključivanje low-performers</li>
        <li>Sezonska kontrola</li>
      </ul>

      <h2>Struktura Shopping kampanja</h2>
      <h3>Osnovna struktura</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Account
|-- Brand Campaign (brand searches)
|   |-- All Products
|-- High Priority Campaign (generic searches, low bid)
|   |-- All Products
|-- Medium Priority Campaign (filtered searches, medium bid)
|   |-- Kategorija 1
|   |-- Kategorija 2
|-- Low Priority Campaign (exact matches, high bid)
|   |-- Best Performers`}</code>
      </pre>

      <h3>Priority bidding strategija</h3>
      <p>Google dozvoljava 3 nivoa prioriteta: High, Medium, Low.</p>
      <p className="font-semibold">Kontraintuitivan pristup koji funkcioniše:</p>
      <ul>
        <li><strong>High Priority + Low Bid</strong> — široke, generičke pretrage</li>
        <li><strong>Medium Priority + Medium Bid</strong> — specifičnije pretrage</li>
        <li><strong>Low Priority + High Bid</strong> — high-intent pretrage</li>
      </ul>
      <p>
        Kako radi: negativne ključne reči guraju saobraćaj dole kroz kampanje.
      </p>

      <h3>Single Product Ad Groups (SPAGs)</h3>
      <p>Za top performere, kreirajte ad grupe sa jednim proizvodom.</p>
      <p className="font-semibold">Prednosti:</p>
      <ul>
        <li>Precizna kontrola bidova</li>
        <li>Čistiji podaci</li>
        <li>Lakše testiranje</li>
      </ul>
      <p className="font-semibold">Kada koristiti:</p>
      <ul>
        <li>Top 20% proizvoda po prihodu</li>
        <li>Proizvodi sa visokom maržom</li>
        <li>Sezonski prioriteti</li>
      </ul>

      <h2>Bidding strategije</h2>
      <h3>Manual CPC</h3>
      <p className="font-semibold">Prednosti:</p>
      <ul>
        <li>Potpuna kontrola</li>
        <li>Odmah primenljive promene</li>
        <li>Nema learning perioda</li>
      </ul>
      <p className="font-semibold">Mane:</p>
      <ul>
        <li>Vremenski zahtevno</li>
        <li>Ne koristi signale koje algoritam ima</li>
      </ul>
      <p className="font-semibold">Kada koristiti:</p>
      <ul>
        <li>Nova kampanja, skupljanje podataka</li>
        <li>Mali budžet</li>
        <li>Potreba za preciznom kontrolom</li>
      </ul>

      <h3>Target ROAS</h3>
      <p className="font-semibold">Prednosti:</p>
      <ul>
        <li>Automatska optimizacija ka cilju</li>
        <li>Koristi signale (device, location, time, audience)</li>
        <li>Manje ručnog rada</li>
      </ul>
      <p className="font-semibold">Mane:</p>
      <ul>
        <li>Learning period (2-3 nedelje)</li>
        <li>Potrebno 50+ konverzija mesečno</li>
        <li>Manje kontrole</li>
      </ul>
      <p className="font-semibold">Kada koristiti:</p>
      <ul>
        <li>Stabilna kampanja sa conversion history</li>
        <li>Budžet €2,000+ mesečno</li>
        <li>Jasne vrednosti konverzija</li>
      </ul>

      <h3>Maximize Clicks / Maximize Conversion Value</h3>
      <p><strong>Maximize Clicks</strong> — za skupljanje podataka na početku.</p>
      <p><strong>Maximize Conversion Value</strong> — kada imate dovoljno konverzija, bez target-a.</p>

      <h2>Taktike za povećanje ROAS-a</h2>
      <h3>1. Feed optimizacija</h3>
      <p>Najveći impact za najmanji effort.</p>
      <p className="font-semibold">Akcije:</p>
      <ul>
        <li>Audit svih title-ova</li>
        <li>Dodaj brand gde nedostaje</li>
        <li>Optimizuj description za top 100 proizvoda</li>
        <li>Postavi custom labels</li>
      </ul>
      <p className="text-sm text-gray-600">
        Očekivani rezultat: 10-30% poboljšanje CTR i Conversion Rate.
      </p>

      <h3>2. Negative keywords</h3>
      <p>
        Shopping koristi feed za targeting, ali možete dodati negative keywords.
      </p>
      <p className="font-semibold">Obavezne negative lists:</p>
      <ul>
        <li>Informational ("kako", "šta je", "recenzija")</li>
        <li>Free seekers ("besplatno", "free", "jeftino")</li>
        <li>Job related ("posao", "zaposlenje")</li>
        <li>DIY ("sam napravi", "uradi sam")</li>
      </ul>
      <p className="font-semibold">Pro tip:</p>
      <p>Redovno pregledajte Search Terms report i dodajte negative.</p>

      <h3>3. Bid adjustments</h3>
      <p className="font-semibold">Device:</p>
      <ul>
        <li>Desktop obično konvertuje bolje</li>
        <li>Mobile za research, desktop za purchase</li>
        <li>Testirajte i prilagodite</li>
      </ul>
      <p className="font-semibold">Location:</p>
      <ul>
        <li>Različiti regioni = različite performanse</li>
        <li>Beograd vs ostatak Srbije može varirati 20-50%</li>
      </ul>
      <p className="font-semibold">Time:</p>
      <ul>
        <li>Analizirajte performanse po satu/danu</li>
        <li>Smanjite bidove kada je conversion rate nizak</li>
      </ul>

      <h3>4. Remarketing Lists for Shopping Ads (RLSA)</h3>
      <p>Dodajte audience liste i podignite bidove za:</p>
      <ul>
        <li>Past purchasers (+50-100%)</li>
        <li>Cart abandoners (+30-50%)</li>
        <li>Product viewers (+20-30%)</li>
      </ul>
      <p>Ovi korisnici već znaju vaš brend — vredi platiti više.</p>

      <h3>5. Isključivanje loših proizvoda</h3>
      <p>Ne svi proizvodi zaslužuju budžet.</p>
      <p className="font-semibold">Isključite:</p>
      <ul>
        <li>Proizvode bez konverzija posle 100+ klikova</li>
        <li>Low margin proizvode koji ne konvertuju</li>
        <li>Out of stock (automatski, ali proverite)</li>
      </ul>
      <p>Koristite custom labels da lakše segmentirate i isključujete.</p>

      <h3>6. Konkurentnost cena</h3>
      <p>
        Google prikazuje cenu u oglasu. Ako ste 30% skuplji od konkurencije, CTR
        će patiti.
      </p>
      <p className="font-semibold">Opcije:</p>
      <ul>
        <li>Price competitiveness report u Merchant Center</li>
        <li>Prilagodite cene ili</li>
        <li>Fokusirajte se na proizvode gde ste konkurentni</li>
      </ul>

      <h2>Česte greške</h2>
      <h3>1. Neoptimizovan feed</h3>
      <p>
        Feed direktno iz shopa, bez prilagođavanja. Title "Proizvod 123",
        description copy-paste.
      </p>
      <p className="font-semibold">Rešenje:</p>
      <p>Investirajte vreme ili koristite feed management tool.</p>

      <h3>2. Jedna kampanja za sve</h3>
      <p>Svi proizvodi u jednoj kampanji, jedan bid. Nemoguće optimizovati.</p>
      <p className="font-semibold">Rešenje:</p>
      <p>Segmentacija po kategoriji, marži ili performansama.</p>

      <h3>3. Ignorisanje search terms</h3>
      <p>Plaćate za pretrage koje nemaju veze sa vašim proizvodima.</p>
      <p className="font-semibold">Rešenje:</p>
      <p>Nedeljni review search terms, agresivno dodavanje negatives.</p>

      <h3>4. Loše slike</h3>
      <p>Blurry, nekonzistentne, loša pozadina. CTR pada, Quality Score pada.</p>
      <p className="font-semibold">Rešenje:</p>
      <ul>
        <li>Čista bela pozadina</li>
        <li>Konzistentan stil</li>
        <li>High resolution</li>
        <li>Više slika (additional_image_link)</li>
      </ul>

      <h3>5. Nepraćenje konkurentnosti</h3>
      <p>Vaše cene su 25% više, ali ne znate jer ne pratite.</p>
      <p className="font-semibold">Rešenje:</p>
      <p>Merchant Center Price Competitiveness report.</p>

      <h2>Shopping vs Performance Max</h2>
      <p>Pitanje koje se često postavlja.</p>

      <h3>Standard Shopping</h3>
      <p className="font-semibold">Prednosti:</p>
      <ul>
        <li>Potpuna kontrola nad bidovima</li>
        <li>Jasan uvid u search terms</li>
        <li>Predvidljivije ponašanje</li>
        <li>Brži learning</li>
      </ul>
      <p className="font-semibold">Mane:</p>
      <ul>
        <li>Samo Shopping placements</li>
        <li>Više ručnog rada</li>
        <li>Ne koristi sve signale</li>
      </ul>

      <h3>Performance Max for Shopping</h3>
      <p className="font-semibold">Prednosti:</p>
      <ul>
        <li>Svi Google placements</li>
        <li>Automatska optimizacija</li>
        <li>Manje ručnog rada</li>
      </ul>
      <p className="font-semibold">Mane:</p>
      <ul>
        <li>Manje kontrole</li>
        <li>Ograničen uvid</li>
        <li>Može kanibalizovati Search</li>
      </ul>

      <h3>Moja preporuka</h3>
      <p className="font-semibold">Hibridni pristup:</p>
      <ol>
        <li>Standard Shopping za brand — kontrola, jasan ROAS</li>
        <li>Standard Shopping za top kategorije — granularna optimizacija</li>
        <li>PMax za prospecting — širi reach, nove audience</li>
      </ol>
      <p>Pratite account-level performance, ne samo pojedinačne kampanje.</p>

      <h2>Merchant Center setup checklist</h2>
      <p>Pre pokretanja kampanja, proverite:</p>
      <ul>
        <li>Verifikovan i claimovan website</li>
        <li>Shipping settings konfigurisani za Srbiju</li>
        <li>Tax settings (ako primenjivo)</li>
        <li>Return policy linkovan</li>
        <li>Business information kompletna</li>
        <li>Feed uploadovan i approved</li>
        <li>Povezano sa Google Ads</li>
      </ul>

      <h3>Česti razlozi za disapproval</h3>
      <ul>
        <li><strong>Cena mismatch</strong> — cena u feed-u ≠ cena na sajtu</li>
        <li><strong>Dostupnost mismatch</strong> — in stock u feed-u, out of stock na sajtu</li>
        <li><strong>Missing information</strong> — nedostaje GTIN, brand ili slika</li>
        <li><strong>Policy violation</strong> — zabranjeni proizvodi ili claims</li>
      </ul>

      <h2>Zaključak</h2>
      <p>
        Google Shopping je potencijalno vaš najprofitabilniji kanal, ali profit
        ne dolazi automatski. Ključ uspeha:
      </p>
      <ol>
        <li><strong>Feed first</strong> — optimizacija feed-a pre svega</li>
        <li><strong>Struktura</strong> — logična segmentacija za kontrolu</li>
        <li><strong>Monitoring</strong> — redovni review search terms i performansi</li>
        <li><strong>Testiranje</strong> — bid strategije, strukture, creative</li>
      </ol>
      <p>
        Ako trošite na Shopping a nemate ROAS koji želite, prvo proverite feed.
        80% problema je tamo.
      </p>
      <p>
        Povezani resursi:{" "}
        <Link href="/usluge/google-shopping" className="underline">
          Google Shopping kampanje
        </Link>
        ,{" "}
        <Link href="/usluge/performance-max" className="underline">
          Performance Max kampanje
        </Link>
        ,{" "}
        <Link href="/usluge/google-ads-upravljanje" className="underline">
          Google Ads upravljanje
        </Link>
        .
      </p>

      <h2>FAQ</h2>
      <h3>Koliko proizvoda treba za Shopping kampanje</h3>
      <p>
        Minimum 10-20, ali idealno 50+. Sa više proizvoda imate više prilike za
        impressions i konverzije.
      </p>
      <h3>Da li mogu koristiti Shopping bez GTIN-a</h3>
      <p>
        Da, ali performanse mogu biti lošije. Google preferira proizvode sa GTIN
        za matching. Ako nemate GTIN, obavezno popunite brand + MPN.
      </p>
      <h3>Koliki budžet treba za Shopping</h3>
      <p>
        Minimum €500-1,000 mesečno za smislene rezultate. Za ozbiljno testiranje
        i optimizaciju, €1,500-2,000+.
      </p>
      <h3>Zašto moji proizvodi nisu prikazani</h3>
      <p>
        Najčešći razlozi su disapproved feed (proverite Merchant Center),
        prenizak bid, loš Quality Score ili issue sa dostupnošću.
      </p>
      <h3>Shopping ili Search za eCommerce</h3>
      <p>
        Oba. Shopping za vizuelni, product-focused saobraćaj. Search za branded
        i specifične pretrage koje Shopping ne hvata dobro.
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

function AgencijaVsFreelancerPost() {
  return (
    <>
      <p>
        Odlučili ste da koristite Google Ads. Odlično. Sada dolazi pitanje koje
        muči svakog marketing menadžera: ko će zapravo upravljati tim kampanjama
      </p>
      <p>
        Imate tri opcije: angažujete agenciju, radite sa freelancerom/konsultantom,
        ili gradite in-house tim. Svaka ima svoje prednosti i mane. I svaka je
        prava — za određenu situaciju.
      </p>
      <p>
        Nakon godina rada na obe strane (kao in-house, kao freelancer i sarađujući
        sa agencijama) mogu vam reći da ne postoji univerzalno „najbolje“ rešenje.
        Ali postoji pravo rešenje za vašu specifičnu situaciju. U ovom vodiču ću
        vam pomoći da to otkrijete.
      </p>

      <h2>Brzi pregled: tri opcije</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Kriterijum</th>
              <th className="py-2 pr-4">Agencija</th>
              <th className="py-2 pr-4">Freelancer</th>
              <th className="py-2">In-house</th>
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
      <p>Tipični modeli:</p>
      <ul>
        <li><strong>Procenat od ad spend-a:</strong> 10-20% (najčešće 12-15%)</li>
        <li><strong>Fiksna mesečna naknada:</strong> €500-3,000 zavisno od obima</li>
        <li><strong>Hibrid:</strong> manja fiksna + procenat iznad određenog spend-a</li>
        <li><strong>Performance-based:</strong> ređe, obično kombinovano sa fiksnom</li>
      </ul>
      <p className="font-semibold">Primer kalkulacije:</p>
      <ul>
        <li>Ad spend: €5,000/mesečno</li>
        <li>Model procenta (15%): €750/mesečno</li>
        <li>Fiksni model: €800-1,200/mesečno</li>
        <li>Hibrid (€400 + 8% iznad €3,000): €560/mesečno</li>
      </ul>

      <h3>Prednosti rada sa agencijom</h3>
      <ol>
        <li>
          <strong>Tim umesto pojedinca</strong> — account manager, PPC specijalista,
          često i copywriter/dizajner.
        </li>
        <li>
          <strong>Šira ekspertiza</strong> — iskustvo iz više industrija i situacija.
        </li>
        <li>
          <strong>Alati i resursi</strong> — premium alati koje ne morate posebno
          plaćati.
        </li>
        <li>
          <strong>Skalabilnost</strong> — lakše podnosi rast budžeta.
        </li>
        <li>
          <strong>Accountability</strong> — ugovori, KPI-jevi, redovni izveštaji.
        </li>
      </ol>

      <h3>Mane rada sa agencijom</h3>
      <ol>
        <li><strong>Niste jedini klijent</strong> — delite pažnju tima.</li>
        <li><strong>Šablonski pristup</strong> — copy-paste strategije.</li>
        <li><strong>Skuplje za manje budžete</strong> — matematički nije isplativo.</li>
        <li><strong>Sporija komunikacija</strong> — posrednici usporavaju.</li>
        <li><strong>Lock-in efekat</strong> — proverite pristupe i ugovore.</li>
      </ol>

      <h3>Kada izabrati agenciju</h3>
      <ul>
        <li> Ad spend preko €5,000 mesečno</li>
        <li> Potreban multi-channel pristup (Google + Meta + LinkedIn)</li>
        <li> Nemate vremena za duboku uključenost</li>
        <li> Želite strukturu i redovne izveštaje</li>
        <li> Planirate brzo skaliranje</li>
      </ul>

      <h2>Opcija 2: Freelancer / konsultant</h2>
      <h3>Kako freelanceri naplaćuju</h3>
      <ul>
        <li><strong>Fiksna mesečna naknada:</strong> €300-1,500 (u regionu)</li>
        <li><strong>Satnica:</strong> €25-80/sat</li>
        <li><strong>Project-based:</strong> €500-3,000 za audit, setup ili migraciju</li>
        <li><strong>Retainer + performance bonus:</strong> kombinacija</li>
      </ul>

      <h3>Prednosti rada sa freelancerom</h3>
      <ol>
        <li><strong>Personalizovana pažnja</strong> — manje klijenata, više fokusa.</li>
        <li><strong>Direktna komunikacija</strong> — nema posrednika.</li>
        <li><strong>Fleksibilnost</strong> — lakši dogovor oko scope-a.</li>
        <li><strong>Specijalizacija</strong> — često duboko znanje jedne oblasti.</li>
        <li><strong>Isplativost</strong> — bolja vrednost za male/srednje budžete.</li>
      </ol>

      <h3>Mane rada sa freelancerom</h3>
      <ol>
        <li><strong>Zavisnost od jedne osobe</strong> — nema backup-a.</li>
        <li><strong>Ograničen kapacitet</strong> — teže skaliranje.</li>
        <li><strong>Varijabilna profesionalnost</strong> — kvalitet varira.</li>
        <li><strong>Uža ekspertiza</strong> — često fokus samo na jedan kanal.</li>
        <li><strong>Kontinuitet</strong> — freelanceri menjaju prioritete.</li>
      </ol>

      <h3>Crvene zastavice kod freelancera</h3>
      <ul>
        <li>Ne želi da vam da pristup nalogu</li>
        <li>Nema reference ili portfolio</li>
        <li>Garantuje rezultate pre analize</li>
        <li>Komunicira sporo i nejasno od starta</li>
        <li>Insistira na kratkim ugovorima bez jasnog scope-a</li>
      </ul>

      <h3>Kada izabrati freelancera</h3>
      <ul>
        <li> Ad spend €1,000-10,000 mesečno</li>
        <li> Fokus na jednom kanalu (samo Google Ads)</li>
        <li> Želite duboku specijalizaciju</li>
        <li> Važna vam je direktna komunikacija</li>
        <li> Imate nekog ko može nadgledati rad</li>
      </ul>

      <h2>Opcija 3: In-house tim</h2>
      <h3>Troškovi in-house tima</h3>
      <p className="font-semibold">Srbija (2025-2026 procene):</p>
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
      <p className="font-semibold">Dodatni troškovi:</p>
      <ul>
        <li>Alati: €100-400 mesečno</li>
        <li>Obuke i sertifikacije: €500-2,000 godišnje</li>
        <li>Oprema i infrastruktura</li>
        <li>Vreme za recruitment (1-3 meseca)</li>
      </ul>

      <h3>Prednosti in-house tima</h3>
      <ol>
        <li><strong>Potpuna kontrola</strong> — prioriteti i brzina su u vašim rukama.</li>
        <li><strong>Duboko razumevanje biznisa</strong> — kontekst je jači nego spolja.</li>
        <li><strong>Instant komunikacija</strong> — brže odluke i manje frikcije.</li>
        <li><strong>Dugoročna isplativost</strong> — isplativo za velike budžete.</li>
        <li><strong>Kumulativno znanje</strong> — know-how ostaje u firmi.</li>
      </ol>

      <h3>Mane in-house tima</h3>
      <ol>
        <li><strong>Teško naći dobre ljude</strong> — recruitment traje dugo.</li>
        <li><strong>Rizik od odlaska</strong> — gubite znanje kada osoba ode.</li>
        <li><strong>Rizik od stagnacije</strong> — manje izloženosti novim praksama.</li>
        <li><strong>Skupo za manje firme</strong> — fiksni trošak bez obzira na spend.</li>
        <li><strong>Jednodimenzionalnost</strong> — jedna osoba ne pokriva sve kanale.</li>
      </ol>

      <h3>Kada izabrati in-house</h3>
      <ul>
        <li> Ad spend preko €15,000-20,000 mesečno</li>
        <li> Marketing je core funkcija biznisa</li>
        <li> Imate resurse za recruitment i razvoj</li>
        <li> Planirate dugoročno (3+ godine)</li>
        <li> Važna vam je potpuna kontrola nad podacima</li>
      </ul>

      <h2>Hibridni modeli</h2>
      <p>Sve češće vidim kompanije koje kombinuju pristupe.</p>
      <h3>Model 1: In-house + konsultant</h3>
      <p>
        Junior/mid PPC specijalista vodi day-to-day, a senior konsultant dolazi
        2-4 puta mesečno za strategiju, audit i mentorstvo.
      </p>
      <p className="font-semibold">Za koga:</p>
      <p>Mid-size kompanije sa budžetom €5,000-20,000.</p>

      <h3>Model 2: Agencija + in-house koordinator</h3>
      <p>
        Agencija vodi kampanje, in-house osoba koordiniše, nadgleda i služi kao
        spona sa ostatkom tima.
      </p>
      <p className="font-semibold">Za koga:</p>
      <p>Veće kompanije sa kompleksnim zahtevima.</p>

      <h3>Model 3: Strateški konsultant + taktička agencija</h3>
      <p>
        Nezavisni konsultant definiše strategiju i KPI-jeve, agencija egzekutira.
      </p>
      <p className="font-semibold">Za koga:</p>
      <p>Kompanije koje žele nezavisnu kontrolu kvaliteta.</p>

      <h2>Kako doneti odluku: praktični framework</h2>
      <h3>Korak 1: Definišite mesečni ad spend</h3>
      <ul>
        <li>Do €2,000 → Freelancer ili DIY sa konsultacijama</li>
        <li>€2,000-10,000 → Freelancer ili manja agencija</li>
        <li>€10,000-30,000 → Specijalizovana agencija ili hibrid</li>
        <li>€30,000+ → Agencija + in-house ili full in-house</li>
      </ul>

      <h3>Korak 2: Procenite resurse</h3>
      <ul>
        <li>Imate li nekoga ko može nadgledati eksternog partnera</li>
        <li>Koliko vremena možete posvetiti koordinaciji</li>
        <li>Imate li budžet za 6+ meseci eksperimentisanja</li>
      </ul>

      <h3>Korak 3: Definišite prioritete</h3>
      <p>Rangirajte po važnosti:</p>
      <ol>
        <li>Cena</li>
        <li>Kontrola</li>
        <li>Ekspertiza</li>
        <li>Skalabilnost</li>
        <li>Brzina</li>
      </ol>

      <h3>Korak 4: Evaluirajte opcije</h3>
      <p>Razgovarajte sa 2-3 potencijalna partnera u svakoj kategoriji. Pitajte:</p>
      <ul>
        <li>Koji su vaši slični klijenti</li>
        <li>Kako izgleda prva 3 meseca</li>
        <li>Šta se dešava kada nešto krene po zlu</li>
        <li>Ko konkretno radi na mom nalogu</li>
        <li>Kako merite uspeh</li>
      </ul>

      <h2>Crvene zastavice (za bilo koju opciju)</h2>
      <ul>
        <li> Garantuju specifične rezultate pre audita</li>
        <li> Ne žele da vam daju pristup nalogu</li>
        <li> Insistiraju na dugim ugovorima bez izlazne klauzule</li>
        <li> Ne mogu objasniti šta konkretno rade</li>
        <li> Komuniciraju sporo od prvog kontakta</li>
        <li> Nemaju reference u vašoj industriji (ili sličnoj)</li>
        <li> Cena je previše dobra da bi bila istinita</li>
      </ul>

      <h2>Zaključak</h2>
      <p>Ne postoji univerzalno najbolja opcija.</p>
      <ul>
        <li>
          <strong>Agencija</strong> je za vas ako želite strukturu, skalabilnost i veći budžet.
        </li>
        <li>
          <strong>Freelancer</strong> je za vas ako želite personalizaciju, direktnu
          komunikaciju i specifičnu ekspertizu.
        </li>
        <li>
          <strong>In-house</strong> je za vas ako imate resurse, dugoročnu viziju i
          potpunu kontrolu.
        </li>
      </ul>
      <p>
        Najvažnije je da izaberete partnera (ili zaposlenog) koji razume vaš
        biznis, komunicira transparentno i čiji su podsticaji usklađeni sa vašim
        ciljevima.
      </p>
      <p>
        Cena je važna, ali jeftin partner koji ne donosi rezultate je najskuplja
        opcija od svih.
      </p>
      <p>
        Ako želite nezavisno mišljenje o strukturi i izboru partnera, pogledajte{" "}
        <Link href="/usluge/google-ads-upravljanje" className="underline">
          Google Ads upravljanje
        </Link>
        ,{" "}
        <Link href="/kontakt" className="underline">
          ili zakažite konsultacije
        </Link>
        .
      </p>

      <h2>FAQ</h2>
      <h3>Da li mala firma treba Google Ads agenciju</h3>
      <p>
        Ne obavezno. Za budžete do €2,000-3,000 mesečno, kvalitetan freelancer je
        često bolja vrednost — više personalizovane pažnje za istu ili nižu cenu.
      </p>
      <h3>Koliko košta Google Ads agencija u Srbiji</h3>
      <p>
        Cene variraju od €400-500 za manje agencije do €1,500-3,000+ za veće.
        Procenat od ad spend-a je obično 10-20%.
      </p>
      <h3>Može li freelancer da vodi veliki budžet</h3>
      <p>
        Da, ali treba da ima kapacitet i iskustvo. Za budžete preko €20,000
        mesečno, razmotrite ili veoma iskusnog freelancera ili agenciju.
      </p>
      <h3>Šta je bolje za eCommerce</h3>
      <p>
        Zavisi od kompleksnosti. Za čist Google Shopping + Search, specijalizovani
        freelancer može biti odličan. Za multi-channel (Google + Meta + email),
        agencija ima više smisla.
      </p>
      <h3>Kako proveriti kvalitet agencije/freelancera</h3>
      <p>
        Tražite reference iz vaše industrije, pitajte za konkretan proces rada i
        proverite kako komuniciraju pre angažovanja. Kvalitet pre-sales
        komunikacije obično odražava kvalitet buduće saradnje.
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

function ConversionTrackingVodicPost() {
  return (
    <>
      <p>
        Svake nedelje vidim istu situaciju. Firma troši €2,000-5,000 mesečno na
        Google Ads. Kampanje su aktivne, klikova ima, ali rezultata nema ili su
        nepouzdani. Kada pogledam nalog, problem je skoro uvek isti: conversion
        tracking ne radi kako treba.
      </p>
      <p>
        Loš tracking je tihi ubica Google Ads performansi. Bez pouzdanih podataka
        o konverzijama ne znate šta funkcioniše, algoritmi optimizuju ka pogrešnim
        signalima i donosite odluke na osnovu lažnih podataka.
      </p>
      <p>U ovom vodiču pokrivam:</p>
      <ul>
        <li>Zašto je conversion tracking kritičan</li>
        <li>Tipove konverzija i kada koji koristiti</li>
        <li>Kako pravilno postaviti tracking (korak po korak)</li>
        <li>Enhanced Conversions — šta je i zašto vam treba</li>
        <li>Server-side tracking — sledeći nivo</li>
        <li>Najčešće greške i kako ih otkriti</li>
      </ul>

      <h2>Zašto je conversion tracking kritičan</h2>
      <h3>Algoritmi zavise od vaših podataka</h3>
      <p>
        Google Ads Smart Bidding (Target CPA, Target ROAS, Maximize Conversions)
        koristi machine learning. Ali ML je dobar koliko i podaci.
      </p>
      <p className="font-semibold">Sa lošim tracking-om:</p>
      <ul>
        <li>Algoritam uči pogrešne signale</li>
        <li>Biduje previše za loš saobraćaj</li>
        <li>Biduje premalo za dobar saobraćaj</li>
        <li>Budžet ide u vetar</li>
      </ul>
      <p className="font-semibold">Sa dobrim tracking-om:</p>
      <ul>
        <li>Algoritam razume šta je prava konverzija</li>
        <li>Biduje agresivnije kada su signali dobri</li>
        <li>Štedi budžet kada signali nisu perspektivni</li>
        <li>ROAS raste</li>
      </ul>

      <h3>Optimizacija bez podataka je nagađanje</h3>
      <p>
        Ako ne znate koja ključna reč, oglas ili audience donosi konverzije, kako
        ćete optimizovati
      </p>
      <p>
        Bez tracking-a: “Mislim da ova kampanja radi dobro.” Sa tracking-om:
        “Ova kampanja donosi 47 konverzija po €12.50, a ova 3 konverzije po €180.”
      </p>

      <h2>Tipovi konverzija</h2>
      <h3>Primarne vs sekundarne</h3>
      <p className="font-semibold">Primarne konverzije:</p>
      <ul>
        <li>Kupovina (eCommerce)</li>
        <li>Lead form submission (B2B)</li>
        <li>Poziv (lokalni biznis)</li>
        <li>Registracija (SaaS)</li>
      </ul>
      <p className="font-semibold">Sekundarne konverzije:</p>
      <ul>
        <li>Add to cart</li>
        <li>Poseta stranici sa cenama</li>
        <li>Video view</li>
        <li>Preuzimanje sadržaja</li>
      </ul>
      <p>
        Preporuka: primarne konverzije za bid optimization, sekundarne za
        observation i analizu.
      </p>

      <h3>Online vs offline</h3>
      <p className="font-semibold">Online konverzije:</p>
      <ul>
        <li>Dešavaju se na sajtu</li>
        <li>Automatski trackable</li>
        <li>Form submissions, purchases, pozivi</li>
      </ul>
      <p className="font-semibold">Offline konverzije:</p>
      <ul>
        <li>Dešavaju se van sajta</li>
        <li>Zahtevaju import iz CRM-a</li>
        <li>Sales calls, in-store purchases, potpisani ugovori</li>
      </ul>
      <p>Za B2B: offline conversion import je ključan za kvalitet lead-ova.</p>

      <h3>Micro vs macro</h3>
      <p>
        Macro konverzije su krajnji cilj, micro konverzije su signali ka cilju.
      </p>
      <p className="font-semibold">Primer za eCommerce:</p>
      <ul>
        <li>Micro: product view, add to cart, checkout initiated</li>
        <li>Macro: purchase completed</li>
      </ul>
      <p>
        Micro konverzije pomažu algoritmu da uči kada je volume macro konverzija
        nizak.
      </p>

      <h2>Postavljanje conversion tracking-a (korak po korak)</h2>
      <h3>Metod 1: Google Ads Tag (direktno)</h3>
      <p className="font-semibold">Prednosti:</p>
      <p>Jednostavno, direktno u Google Ads.</p>
      <p className="font-semibold">Mane:</p>
      <p>Manje fleksibilno, teže za kompleksne setup-e.</p>
      <p className="font-semibold">Koraci:</p>
      <ol>
        <li>Tools &amp; Settings → Conversions</li>
        <li>+ New conversion action</li>
        <li>Izaberite tip (Website, App, Phone calls, Import)</li>
        <li>Unesite URL, kategoriju i vrednost</li>
        <li>Kopirajte tag i stavite na confirmation page</li>
      </ol>

      <h3>Metod 2: Google Tag Manager (preporučeno)</h3>
      <p className="font-semibold">Prednosti:</p>
      <p>Fleksibilno, centralizovano, lakše održavanje.</p>
      <p className="font-semibold">Mane:</p>
      <p>Zahteva inicijalni setup GTM-a.</p>
      <p className="font-semibold">Koraci:</p>
      <ol>
        <li>Postavite GTM container na sve stranice</li>
        <li>Kreirajte Conversion Linker tag (obavezno)</li>
        <li>Kreirajte Google Ads Conversion Tracking tag</li>
        <li>Postavite trigger (form submission, purchase)</li>
        <li>Testirajte u Preview mode</li>
        <li>Publish</li>
      </ol>
      <p className="font-semibold">GTM setup za form submission:</p>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Tag: Google Ads Conversion Tracking
- Conversion ID: [vaš ID]
- Conversion Label: [vaš label]
- Conversion Value: [ako imate]

Trigger: Form Submission
- Trigger type: Form Submission
- Fire on: Page URL contains "thank-you" ili Form ID equals "contact-form"`}</code>
      </pre>

      <h3>Metod 3: Import iz GA4</h3>
      <p className="font-semibold">Prednosti:</p>
      <p>Unified reporting, koristi GA4 events.</p>
      <p className="font-semibold">Mane:</p>
      <p>Attribution može biti drugačija.</p>
      <p className="font-semibold">Koraci:</p>
      <ol>
        <li>Kreirajte event u GA4 (ili koristite postojeći)</li>
        <li>Markirajte event kao conversion u GA4</li>
        <li>U Google Ads: Tools → Conversions → Import → Google Analytics 4</li>
        <li>Izaberite property i konverzije za import</li>
      </ol>

      <h2>Enhanced Conversions: šta je i zašto vam treba</h2>
      <h3>Problem</h3>
      <p>
        Zbog privacy promena (iOS 14+, cookie restrictions, browser tracking
        prevention), Google Ads gubi podatke. Konverzije se ne pripisuju
        pravilno.
      </p>

      <h3>Rešenje: Enhanced Conversions</h3>
      <p>
        Enhanced Conversions šalje hash-ovane (šifrovane) first-party podatke
        korisnika nazad Google-u: email, telefon, ime i adresa.
      </p>
      <p>
        Google ove podatke koristi da matchuje konverzije sa klikovima, čak i
        kada cookies ne rade.
      </p>

      <h3>Tipovi Enhanced Conversions</h3>
      <p className="font-semibold">Enhanced Conversions for Web:</p>
      <ul>
        <li>Za online konverzije (kupovine, lead-ove)</li>
        <li>Šalje podatke sa thank-you stranice</li>
      </ul>
      <p className="font-semibold">Enhanced Conversions for Leads:</p>
      <ul>
        <li>Za offline konverzije</li>
        <li>Import iz CRM-a sa customer data</li>
      </ul>

      <h3>Kako postaviti (GTM metod)</h3>
      <ol>
        <li>Conversions → Settings → Enhanced conversions → Turn on</li>
        <li>Izaberite metod: Google Tag Manager</li>
        <li>U GTM: Edit conversion tag</li>
        <li>Enable Include user-provided data</li>
        <li>Mapirajte data layer varijable</li>
        <li>Kreirajte data layer push na conversion page</li>
      </ol>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`dataLayer.push({
  'event': 'purchase',
  'user_data': {
    'email': 'customer@email.com',
    'phone_number': '+381601234567',
    'address': {
      'first_name': 'Marko',
      'last_name': 'Marković',
      'city': 'Beograd',
      'country': 'RS'
    }
  }
});`}</code>
      </pre>

      <h3>Očekivani rezultati</h3>
      <ul>
        <li>5-15% više pripisanih konverzija</li>
        <li>Bolja Smart Bidding optimizacija</li>
        <li>Poboljšan audience matching za remarketing</li>
      </ul>

      <h2>Server-side tracking: sledeći nivo</h2>
      <h3>Šta je server-side tracking</h3>
      <p>
        Umesto da browser šalje podatke direktno Google-u, podaci idu na vaš
        server (ili cloud container), pa odatle Google-u.
      </p>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Standardno: Browser → Google
Server-side: Browser → Vaš Server → Google`}</code>
      </pre>

      <h3>Zašto server-side</h3>
      <ol>
        <li>Zaobilazi ad blockere — podaci idu sa vašeg domena</li>
        <li>Bolja kontrola podataka — vi odlučujete šta se šalje</li>
        <li>Poboljšana brzina sajta — manje JavaScript-a na frontendu</li>
        <li>GDPR compliance — lakše upravljanje consent-om</li>
      </ol>

      <h3>Kako implementirati</h3>
      <p className="font-semibold">Opcija 1: Google Tag Manager Server Container</p>
      <ul>
        <li>Google Cloud Run hosting</li>
        <li>Zahteva tehničko znanje</li>
        <li>Mesečni trošak ~€50-200 zavisno od volumena</li>
      </ul>
      <p className="font-semibold">Opcija 2: Third-party rešenja (Stape.io, Elevar)</p>
      <ul>
        <li>Managed hosting</li>
        <li>Lakši setup</li>
        <li>Mesečni trošak €50-500</li>
      </ul>

      <h3>Da li vam treba server-side</h3>
      <p className="font-semibold">DA, ako:</p>
      <ul>
        <li>Ad spend €5,000+ mesečno</li>
        <li>Značajan deo saobraćaja koristi ad blockere (10%+)</li>
        <li>GDPR/Privacy su prioritet</li>
        <li>Imate tehničke resurse</li>
      </ul>
      <p className="font-semibold">NE NUŽNO, ako:</p>
      <ul>
        <li>Mali budžet</li>
        <li>Jednostavan setup</li>
        <li>Nemate tehničku podršku</li>
      </ul>

      <h2>Najčešće greške sa tracking-om</h2>
      <h3>1. Tag na pogrešnoj stranici</h3>
      <p>
        Conversion tag je na svim stranicama, ne samo confirmation page.
        Rezultat: lažne konverzije, nemoguća optimizacija.
      </p>
      <p className="font-semibold">Kako proveriti:</p>
      <p>Google Tag Assistant, GTM Preview mode.</p>

      <h3>2. Dupli tagovi</h3>
      <p>
        I Google Ads tag i GA4 import za istu konverziju. Rezultat: duplo brojanje.
      </p>
      <p className="font-semibold">Rešenje:</p>
      <p>Koristite jedno ili drugo, ne oba.</p>

      <h3>3. Conversion Linker nedostaje</h3>
      <p>
        Bez Conversion Linker taga, cross-domain i cross-device tracking ne radi.
      </p>
      <p className="font-semibold">Rešenje:</p>
      <p>Uvek postavite Conversion Linker u GTM (fire on All Pages).</p>

      <h3>4. Attribution model ne odgovara biznisu</h3>
      <p>
        Default: Last Click. Ali možda Data-Driven ili Position-Based ima više
        smisla za vaš sales cycle.
      </p>
      <p className="font-semibold">Rešenje:</p>
      <p>Razmislite o customer journey i izaberite odgovarajući model.</p>

      <h3>5. Ne trackujete vrednost</h3>
      <p>
        Sve konverzije su “1” — ne znate da li je to kupovina od €50 ili €500.
      </p>
      <p className="font-semibold">Rešenje:</p>
      <p>Dynamic conversion values — šaljite stvarnu vrednost transakcije.</p>

      <h3>6. Samo makro konverzije</h3>
      <p>
        Trackujete samo purchase/lead, ništa pre toga. Algoritam nema dovoljno
        signala.
      </p>
      <p className="font-semibold">Rešenje:</p>
      <p>Dodajte micro konverzije (add to cart, pricing page) kao observation.</p>

      <h2>Dijagnostika: da li vaš tracking radi</h2>
      <h3>Koraci za proveru</h3>
      <ol>
        <li>Google Tag Assistant: prođite kroz conversion flow i proverite tag</li>
        <li>Google Ads → Conversions: status “Recording conversions” je zelen</li>
        <li>Real-time provera u GA4 i Google Ads reports</li>
        <li>Cross-check sa CRM/backend podacima</li>
      </ol>
      <p className="font-semibold">Red flags:</p>
      <ul>
        <li>Conversion rate iznenada skače/pada bez razloga</li>
        <li>Konverzije ne odgovaraju prodaji u CRM-u</li>
        <li>Smart Bidding ne daje rezultate iako ima dovoljno data</li>
        <li>Tag status pokazuje grešku u Conversions panelu</li>
      </ul>

      <h2>B2B specifičnosti: offline conversion import</h2>
      <p>
        Za B2B, lead form submission nije prava konverzija. Prava konverzija je
        potpisan ugovor.
      </p>
      <h3>Zašto je offline import važan</h3>
      <p>
        Bez njega Google optimizuje ka form submissions. Dobijate volume, ali ne
        kvalitet. Sa importom, Google uči koji tip lead-ova se zatvara.
      </p>
      <h3>Kako implementirati</h3>
      <ol>
        <li>GCLID capture</li>
        <li>CRM tracking kroz pipeline</li>
        <li>Regular import (nedeljno)</li>
        <li>Upload u Google Ads</li>
      </ol>
      <p className="font-semibold">Format za upload:</p>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Google Click ID, Conversion Name, Conversion Time, Conversion Value
Abc123xyz..., Offline Sale, 2026-01-15 14:30:00, 5000`}</code>
      </pre>
      <p className="font-semibold">Best practices:</p>
      <ul>
        <li>Upload minimalno nedeljno</li>
        <li>Vreme konverzije = vreme zatvaranja deala</li>
        <li>Uključite vrednost deala</li>
        <li>Click-to-conversion window: do 90 dana</li>
      </ul>

      <h2>Zaključak</h2>
      <p>
        Conversion tracking nije “nice to have”. To je fundament na kojem se
        gradi sve ostalo.
      </p>
      <p>Bez pouzdanog tracking-a:</p>
      <ul>
        <li>Algoritmi ne mogu da rade svoj posao</li>
        <li>Ne možete da donosite informisane odluke</li>
        <li>Novac se troši bez jasnog ROI-a</li>
      </ul>
      <p className="font-semibold">Akcioni plan:</p>
      <ol>
        <li>Audit postojeći setup</li>
        <li>Implementirajte Enhanced Conversions</li>
        <li>Dodajte micro konverzije</li>
        <li>Za B2B: offline import</li>
        <li>Redovna mesečna provera</li>
      </ol>
      <p>
        Ako trošite više od €1,000 mesečno i niste sigurni u tracking, to je prvi
        problem koji treba rešiti.
      </p>

      <h2>FAQ</h2>
      <h3>Koliko vremena treba da se konverzija pojavi u Google Ads</h3>
      <p>
        Obično 3-6 sati za online konverzije. Može biti i do 24 sata. Offline
        import zavisi od frekvencije uploada.
      </p>
      <h3>Zašto se broj konverzija u GA4 i Google Ads razlikuje</h3>
      <p>
        Različiti attribution modeli, različiti conversion windows i način
        brojanja. Razlika 10-20% je normalna.
      </p>
      <h3>Da li mi treba developer za postavljanje tracking-a</h3>
      <p>
        Za osnovni setup sa GTM — ne obavezno. Za Enhanced Conversions i
        server-side — verovatno da.
      </p>
      <h3>Šta ako nemam thank-you stranicu</h3>
      <p>
        Koristite event-based tracking: form submission event, AJAX response ili
        redirect URL parameters.
      </p>
      <h3>Koliko konverzija treba za Smart Bidding</h3>
      <p>
        Minimum 15 u poslednjih 30 dana za Target CPA/ROAS. Idealno 30-50 za
        stabilnije rezultate.
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

function GoogleAdsGreskePost() {
  return (
    <>
      <h2>Uvod</h2>
      <p>
        Svaki Google Ads nalog koji auditujem ima barem 5-6 grešaka koje aktivno
        koštaju novac.
      </p>
      <p>
        Neke su očigledne — čim pogledam, vidim problem. Druge su suptilnije —
        izgledaju ok na prvi pogled, ali dublja analiza otkriva propuštene
        prilike.
      </p>
      <p>
        Posle stotina audita, sastavio sam listu{" "}
        <strong>20 najčešćih grešaka</strong> koje vidim ponovo i ponovo.
        Greške su rangirane po učestalosti i uticaju na performanse.
      </p>
      <p>Za svaku grešku dajem:</p>
      <ul>
        <li>Opis problema</li>
        <li>Kako ga prepoznati</li>
        <li>Kako ga ispraviti</li>
        <li>Procenjen uticaj</li>
      </ul>
      <p>Koristite ovo kao checklist za vaš nalog.</p>
      <p>---</p>

      <h2>Setup i Strukturalne Greške</h2>

      <h3>1. Sve u Jednoj Kampanji</h3>
      <p>
        <strong>Problem:</strong> Svi keywords, sve teme, svi proizvodi — u
        jednoj kampanji. Nemoguće je razumeti šta radi i šta ne radi.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Imate 1-2 kampanje sa 20+ ad grupa i
        500+ keywords.
      </p>
      <p>
        <strong>Rešenje:</strong> Restrukturiranje po logičnim celinama:
      </p>
      <ul>
        <li>Brand vs Non-brand</li>
        <li>Kategorije proizvoda</li>
        <li>Intencija korisnika (research vs purchase)</li>
      </ul>
      <p>
        <strong>Impact:</strong> Omogućava pravilnu optimizaciju i alokaciju
        budžeta.
      </p>
      <p>---</p>

      <h3>2. Previše Keywords po Ad Grupi</h3>
      <p>
        <strong>Problem:</strong> 50-100 keywords u jednoj ad grupi. Oglasi ne
        mogu biti relevantni za sve, Quality Score pada.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Prosečan broj keywords po ad grupi je
        preko 20.
      </p>
      <p>
        <strong>Rešenje:</strong> Tematske ad grupe sa 10-20 srodnih keywords.
        Za top performers, razmatrajte SKAGs (Single Keyword Ad Groups).
      </p>
      <p>
        <strong>Impact:</strong> Bolji Quality Score, viši CTR, niži CPC.
      </p>
      <p>---</p>

      <h3>3. Mešanje Search i Display u Istoj Kampanji</h3>
      <p>
        <strong>Problem:</strong> Google defaultno uključuje Display Network u
        Search kampanje. Display ima potpuno drugačije karakteristike.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Campaign settings → Networks →
        Display Network je čekiran.
      </p>
      <p>
        <strong>Rešenje:</strong> Isključite Display Network iz Search
        kampanja. Kreirajte zasebne Display kampanje sa specifičnim
        targetingom.
      </p>
      <p>
        <strong>Impact:</strong> Čistiji podaci, bolja kontrola nad budžetom.
      </p>
      <p>---</p>

      <h3>4. Pogrešan Location Targeting</h3>
      <p>
        <strong>Problem:</strong> Location option je "People in, or who show
        interest in" umesto "People in". Rezultat: klikovi iz lokacija koje ne
        servirate.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Campaign settings → Locations →
        Location options.
      </p>
      <p>
        <strong>Rešenje:</strong> Postavite na "Presence: People in or regularly
        in your targeted locations".
      </p>
      <p>
        <strong>Impact:</strong> 10-30% relevantnije saobraćaja, manje bačenog
        budžeta.
      </p>
      <p>---</p>

      <h3>5. Nedostaje Conversion Linker Tag</h3>
      <p>
        <strong>Problem:</strong> Cross-domain tracking ne radi pravilno.
        Konverzije se gube.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> GTM → nema Conversion Linker taga
        koji puca na All Pages.
      </p>
      <p>
        <strong>Rešenje:</strong> Dodajte Conversion Linker tag u GTM, trigger
        na All Pages.
      </p>
      <p>
        <strong>Impact:</strong> 5-15% više pripisanih konverzija.
      </p>
      <p>
        Detaljan vodič je u{" "}
        <Link href="/blog/conversion-tracking-vodic" className="underline">
          conversion tracking vodiču
        </Link>
        .
      </p>
      <p>---</p>

      <h2>Keyword Greške</h2>

      <h3>6. Samo Broad Match Keywords</h3>
      <p>
        <strong>Problem:</strong> Broad match daje Google-u previše slobode.
        Vaši oglasi se prikazuju za nebitne pretrage.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Keywords tab → Match type kolona →
        većina je Broad.
      </p>
      <p>
        <strong>Rešenje:</strong> Za proven keywords, koristite Phrase ili Exact
        match. Broad samo za discovery sa jakom negative listom.
      </p>
      <p>
        <strong>Impact:</strong> 20-40% efikasniji spend.
      </p>
      <p>---</p>

      <h3>7. Nula ili Minimum Negative Keywords</h3>
      <p>
        <strong>Problem:</strong> Plaćate za "besplatno", "posao", "DIY" i
        slične pretrage bez kupovne namere.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Imate manje od 100 negative keywords
        na nalogu.
      </p>
      <p>
        <strong>Rešenje:</strong>
      </p>
      <ul>
        <li>Kreirajte starter liste (free, job, DIY, how to)</li>
        <li>Nedeljni Search Terms review</li>
        <li>Account-level negativne liste</li>
      </ul>
      <p>
        <strong>Impact:</strong> 15-35% ušteda budžeta.
      </p>
      <p>---</p>

      <h3>8. Nikad Ne Gledate Search Terms Report</h3>
      <p>
        <strong>Problem:</strong> Ne znate za šta zapravo plaćate. Nemate uvid u
        real queries.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Poslednji review Search Terms-a je pre
        mesec dana ili nikad.
      </p>
      <p>
        <strong>Rešenje:</strong> Nedeljni ritual:
      </p>
      <ol>
        <li>Proverite Search Terms za prethodnu nedelju</li>
        <li>Dodajte nebitne kao negatives</li>
        <li>Extractujte dobre kao nove keywords</li>
      </ol>
      <p>
        <strong>Impact:</strong> Kontinuirano poboljšanje kvaliteta saobraćaja.
      </p>
      <p>---</p>

      <h3>9. Duplicate Keywords Across Campaigns</h3>
      <p>
        <strong>Problem:</strong> Isti keyword u više kampanja. Konkurišete sami
        sebi, zbunjujete algoritam.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Tools → Keyword Planner → Find
        duplicate keywords.
      </p>
      <p>
        <strong>Rešenje:</strong> Jedna "kuća" za svaki keyword. Koristite
        negative keywords za razdvajanje.
      </p>
      <p>
        <strong>Impact:</strong> Čistiji podaci, lakša optimizacija.
      </p>
      <p>---</p>

      <h2>Bidding Greške</h2>

      <h3>10. Prerano Korišćenje Smart Bidding</h3>
      <p>
        <strong>Problem:</strong> Aktivirate Target CPA ili Target ROAS bez
        dovoljno conversion podataka. Algoritam nema od čega da uči.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Smart Bidding aktivan, a imate manje
        od 30 konverzija mesečno.
      </p>
      <p>
        <strong>Rešenje:</strong>
      </p>
      <ul>
        <li>Minimum 30 konverzija mesečno za Smart Bidding</li>
        <li>Počnite sa Manual CPC ili Maximize Clicks</li>
        <li>Pređite na Smart kada imate dovoljno data</li>
      </ul>
      <p>
        <strong>Impact:</strong> Izbegavanje learning period koji nikad ne
        završi.
      </p>
      <p>---</p>

      <h3>11. Postavljanje Nerealnog Target CPA/ROAS</h3>
      <p>
        <strong>Problem:</strong> Target CPA €5 kada vam je prosečni CPA €25.
        Algoritam nikada neće dostići taj cilj, i nećete dobiti saobraćaj.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Target je 50%+ niži od aktuelnog
        proseka.
      </p>
      <p>
        <strong>Rešenje:</strong> Postavite target 10-20% iznad trenutnog
        proseka. Postepeno snižavajte dok ne dostignete cilj.
      </p>
      <p>
        <strong>Impact:</strong> Više saobraćaja i konverzija, realnija
        optimizacija.
      </p>
      <p>---</p>

      <h3>12. Ignorisanje Bid Adjustments</h3>
      <p>
        <strong>Problem:</strong> Isti bid za desktop i mobile, za Beograd i
        Zaječar, za ponedeljak i subotu. A performanse su drastično različite.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Svi bid adjustments su na 0%.
      </p>
      <p>
        <strong>Rešenje:</strong>
      </p>
      <ul>
        <li>Analizirajte performanse po: device, location, day, hour</li>
        <li>Povećajte bidove gde je ROI dobar</li>
        <li>Smanjite gde je loš</li>
      </ul>
      <p>
        <strong>Impact:</strong> 15-25% bolja efikasnost istog budžeta.
      </p>
      <p>---</p>

      <h2>Ad Copy i Creative Greške</h2>

      <h3>13. Generic Ad Copy bez Diferencijacije</h3>
      <p>
        <strong>Problem:</strong> Vaši oglasi su isti kao konkurentski.
        "Kvalitet", "Najpovoljnije", "Brza dostava" — to svi kažu.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Pročitajte svoje oglase i
        konkurentske. Da li možete razlikovati?
      </p>
      <p>
        <strong>Rešenje:</strong>
      </p>
      <ul>
        <li>Konkretne brojke ("98% zadovoljnih kupaca")</li>
        <li>Unique benefits ("Besplatna montaža u Beogradu")</li>
        <li>Social proof ("1,000+ prodatih komada")</li>
      </ul>
      <p>
        <strong>Impact:</strong> 15-40% bolji CTR vs generic copy.
      </p>
      <p>---</p>

      <h3>14. Nedostaju Ad Extensions</h3>
      <p>
        <strong>Problem:</strong> Tekstualni oglas bez ekstenzija. Manji
        vizuelni footprint, niži CTR.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Ads &amp; extensions → Extensions →
        poluprazno.
      </p>
      <p>
        <strong>Rešenje:</strong> Dodajte minimum:
      </p>
      <ul>
        <li>Sitelinks (4-6)</li>
        <li>Callouts (4)</li>
        <li>Structured Snippets (2)</li>
        <li>Call extension (ako imate telefon)</li>
      </ul>
      <p>
        <strong>Impact:</strong> 10-20% bolji CTR, bolji Ad Rank.
      </p>
      <p>---</p>

      <h3>15. Samo Jedan Oglas po Ad Grupi</h3>
      <p>
        <strong>Problem:</strong> Nema A/B testiranja. Ne znate da li možete
        bolje.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Ad grupe imaju po 1 oglas.
      </p>
      <p>
        <strong>Rešenje:</strong> Minimum 2-3 oglasa po ad grupi. Testirajte:
      </p>
      <ul>
        <li>Različite headlines</li>
        <li>Različite benefits</li>
        <li>Različite CTAs</li>
      </ul>
      <p>
        <strong>Impact:</strong> Kontinuirano poboljšanje kroz testiranje.
      </p>
      <p>---</p>

      <h2>Landing Page Greške</h2>

      <h3>16. Slanje Saobraćaja na Homepage</h3>
      <p>
        <strong>Problem:</strong> Generički homepage nije optimizovan za
        konverziju. Korisnik mora da traži šta mu treba.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Većina Final URLs vodi na homepage
        (/).
      </p>
      <p>
        <strong>Rešenje:</strong> Dedicirani landing pages per campaign/ad
        group. Message match: oglas → landing page.
      </p>
      <p>
        <strong>Impact:</strong> 2-5x bolji conversion rate.
      </p>
      <p>---</p>

      <h3>17. Spor Landing Page</h3>
      <p>
        <strong>Problem:</strong> Sajt se učitava 5+ sekundi. Korisnici odlaze
        pre nego što vide sadržaj.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Google PageSpeed Insights &lt; 50
        mobile score.
      </p>
      <p>
        <strong>Rešenje:</strong>
      </p>
      <ul>
        <li>Kompresija slika</li>
        <li>Minifikacija CSS/JS</li>
        <li>CDN</li>
        <li>Bolji hosting</li>
      </ul>
      <p>
        <strong>Impact:</strong> Svaka sekunda iznad 3 = 10-20% manje
        konverzija.
      </p>
      <p>---</p>

      <h2>Tracking i Merenje Greške</h2>

      <h3>18. Pogrešno Definisane Konverzije</h3>
      <p>
        <strong>Problem:</strong> Trackujete page views kao konverzije. Ili
        trackujete nevažne akcije.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Suspiciously high conversion rates
        (20%+) ili konverzije koje ne odgovaraju prodajama.
      </p>
      <p>
        <strong>Rešenje:</strong>
      </p>
      <ul>
        <li>
          Primarna konverzija = stvarna vredna akcija (purchase, qualified
          lead)
        </li>
        <li>Sekundarne = micro-konverzije (add to cart, pricing page view)</li>
        <li>Proverite da tag puca samo na pravoj strani</li>
      </ul>
      <p>
        <strong>Impact:</strong> Fundamentalno — bez ovoga, sve odluke su
        pogrešne.
      </p>
      <p>---</p>

      <h3>19. Attribution Model ne Odgovara Biznisu</h3>
      <p>
        <strong>Problem:</strong> Koristite Last Click za B2B sa 60-dnevnim
        sales cycle-om. Prvi touchpoints ne dobijaju kredit.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Tools → Attribution → Model
        Comparison. Veliko raskorače između modela.
      </p>
      <p>
        <strong>Rešenje:</strong>
      </p>
      <ul>
        <li>B2C kratkog ciklusa: Last Click ili Data-Driven</li>
        <li>B2B dugog ciklusa: Position-Based ili Data-Driven</li>
        <li>Testirajte i uporedite</li>
      </ul>
      <p>
        <strong>Impact:</strong> Bolja alokacija budžeta ka pravim kampanjama.
      </p>
      <p>---</p>

      <h2>Propuštene Prilike</h2>

      <h3>20. Ne Koristite Remarketing</h3>
      <p>
        <strong>Problem:</strong> 97% posetilaca ne konvertuje prvi put. Bez
        remarketing-a, plaćate da ih dovedete — i nikad ih više ne vidite.
      </p>
      <p>
        <strong>Kako prepoznati:</strong> Nemate remarketing kampanje ili
        audience liste.
      </p>
      <p>
        <strong>Rešenje:</strong>
      </p>
      <ul>
        <li>Kreirajte audience liste u GA4 i importujte</li>
        <li>Segmentirajte: all visitors, product viewers, cart abandoners</li>
        <li>Kreirajte Display i Search remarketing kampanje</li>
      </ul>
      <p>
        <strong>Impact:</strong> Remarketing ima tipično 2-3x bolji ROI od cold
        traffic-a.
      </p>
      <p>
        Detaljan vodič:{" "}
        <Link href="/blog/remarketing-vodic" className="underline">
          remarketing vodič
        </Link>
        .
      </p>
      <p>---</p>

      <h2>Optimizacioni Checklist</h2>
      <p>Koristite ovo kao mesečni audit:</p>

      <h3>Setup</h3>
      <ul>
        <li>Kampanje logički struktuirane</li>
        <li>Maksimum 15-20 keywords po ad grupi</li>
        <li>Display isključen iz Search kampanja</li>
        <li>Location targeting: "People in" only</li>
        <li>Conversion Linker aktivan</li>
      </ul>

      <h3>Keywords</h3>
      <ul>
        <li>Balans match types (ne samo Broad)</li>
        <li>Negative keyword liste postoje i ažurirane</li>
        <li>Search Terms pregledan ove nedelje</li>
        <li>Nema duplicate keywords</li>
      </ul>

      <h3>Bidding</h3>
      <ul>
        <li>Bid strategija odgovara volumenu konverzija</li>
        <li>Target CPA/ROAS realan</li>
        <li>Bid adjustments za devices/locations/time</li>
      </ul>

      <h3>Ads</h3>
      <ul>
        <li>Minimum 2 oglasa po ad grupi</li>
        <li>Svi mogući extensions aktivni</li>
        <li>Ad copy diferenciran od konkurencije</li>
      </ul>

      <h3>Landing Pages</h3>
      <ul>
        <li>Dedicirani LP-ovi (ne homepage)</li>
        <li>Mobile-friendly</li>
        <li>Load time pod 3 sekunde</li>
      </ul>

      <h3>Tracking</h3>
      <ul>
        <li>Konverzije pravilno definisane</li>
        <li>Attribution model odgovara biznisu</li>
        <li>Enhanced Conversions aktivirane</li>
      </ul>

      <h3>Growth</h3>
      <ul>
        <li>Remarketing kampanje postoje</li>
        <li>Audience liste kreirane i pune se</li>
      </ul>
      <p>---</p>

      <h2>Prioritizacija: Odakle Početi</h2>
      <p>Ako pronađete više grešaka, prioritizujte ovim redosledom:</p>
      <ol>
        <li>
          <strong>Tracking greške</strong> (18, 5) — bez ovoga, ništa drugo nema
          smisla
        </li>
        <li>
          <strong>Fundamentalne strukture greške</strong> (1, 2, 4) — postavljaju
          temelje
        </li>
        <li>
          <strong>Keyword greške</strong> (6, 7, 8) — direktan uticaj na budget
          waste
        </li>
        <li>
          <strong>Landing page greške</strong> (16, 17) — uticaj na conversion
          rate
        </li>
        <li>
          <strong>Bidding greške</strong> (10, 11, 12) — optimizacija
          efikasnosti
        </li>
        <li>
          <strong>Ad copy i extensions</strong> (13, 14, 15) — marginalna
          poboljšanja
        </li>
      </ol>
      <p>---</p>

      <h2>Zaključak</h2>
      <p>
        Nema naloga bez grešaka. Čak i najbolje optimizovani nalozi imaju
        prostora za poboljšanje.
      </p>
      <p>Ključ je u sistematskom pristupu:</p>
      <ol>
        <li>
          <strong>Audit</strong> — identifikujte greške
        </li>
        <li>
          <strong>Prioritizacija</strong> — rešavajte najvažnije prvo
        </li>
        <li>
          <strong>Implementacija</strong> — napravite promene
        </li>
        <li>
          <strong>Merenje</strong> — pratite uticaj
        </li>
        <li>
          <strong>Ponavljanje</strong> — optimizacija nikad ne staje
        </li>
      </ol>
      <p>
        Ako prepoznajete više od 5-6 grešaka sa ove liste u vašem nalogu, vreme
        je za ozbiljan audit i restrukturiranje.
      </p>
      <p>---</p>

      <h2>FAQ</h2>
      <h3>Koliko često treba raditi optimizaciju?</h3>
      <p>
        Nedeljno: Search Terms, bid adjustments, basic monitoring. Mesečno:
        Detaljniji audit, ad testing review, struktura provera. Kvartalno:
        Kompletni audit i strateški review.
      </p>
      <h3>Da li mogu sve ovo da uradim sam?</h3>
      <p>
        Da, ako imate vreme i želju za učenjem. Ali ako vam je vreme vredno
        i/ili imate značajan budžet, ekspertska pomoć će se isplatiti brže.
      </p>
      <h3>Koja greška ima najveći impact?</h3>
      <p>Tracking greške (#18, #5). Ako ne merite pravilno, sve ostalo je nagađanje.</p>
      <h3>Koliko vremena treba da se vide rezultati posle popravki?</h3>
      <p>
        Neke promene (negative keywords) imaju instant efekat. Druge (Smart
        Bidding, struktura) trebaju 2-4 nedelje za learning. Generalno,
        očekujte 30-60 dana za jasnu sliku.
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

function GoogleAdsNeDonosiRezultatePost() {
  return (
    <>
      <h2>Uvod</h2>
      <p>"Google Ads nam ne radi."</p>
      <p>
        Ovu rečenicu čujem bar jednom nedeljno. Od vlasnika firmi koji su
        probali sami. Od marketing menadžera koji su angažovali agenciju. Od
        freelancera koji su preuzeli nalog od nekog drugog.
      </p>
      <p>
        I skoro uvek, problem nije u tome da "Google Ads ne radi". Google Ads
        radi za milione biznisa širom sveta. Problem je specifičan — i skoro
        uvek rešiv.
      </p>
      <p>
        U ovom vodiču prolazim kroz <strong>12 najčešćih razloga</strong> zašto
        Google Ads kampanje ne donose rezultate. Za svaki razlog dajem
        dijagnostiku i konkretno rešenje.
      </p>
      <p>
        Ako vaše kampanje ne rade, odgovor je verovatno negde na ovoj listi.
      </p>
      <p>---</p>

      <h2>1. Loš ili Nepostojeći Conversion Tracking</h2>
      <p className="font-semibold">Simptomi:</p>
      <ul>
        <li>Ne znate koliko konverzija imate</li>
        <li>Smart Bidding ne donosi rezultate</li>
        <li>Odluke donosite na osnovu "osećaja"</li>
      </ul>
      <p className="font-semibold">Dijagnostika:</p>
      <ul>
        <li>Proverite Google Ads → Conversions → da li ima podataka</li>
        <li>Test konverzija — prođite ceo flow i proverite da li se registruje</li>
      </ul>
      <p className="font-semibold">Rešenje:</p>
      <ul>
        <li>Postavite pravilno conversion tracking (GTM preporuka)</li>
        <li>Aktivirajte Enhanced Conversions</li>
        <li>Proverite da svaka kampanja ima conversion action</li>
      </ul>
      <p>
        <strong>Procenjen impact:</strong> Ogroman — ovo je #1 razlog za loše
        performanse.
      </p>
      <p>
        Detaljan vodič:{" "}
        <Link href="/blog/conversion-tracking-vodic" className="underline">
          conversion tracking za Google Ads
        </Link>
        .
      </p>
      <p>---</p>

      <h2>2. Slanje Saobraćaja na Homepage</h2>
      <p className="font-semibold">Simptomi:</p>
      <ul>
        <li>Visok bounce rate (70%+)</li>
        <li>Nizak conversion rate (&lt;1%)</li>
        <li>Ljudi dolaze ali brzo odlaze</li>
      </ul>
      <p className="font-semibold">Dijagnostika:</p>
      <ul>
        <li>Proverite Final URLs u kampanjama</li>
        <li>Analizirajte landing pages u GA4</li>
      </ul>
      <p className="font-semibold">Rešenje:</p>
      <ul>
        <li>Kreirajte dedicirane landing pages za svaku kampanju</li>
        <li>Matching: oglas govori o X → landing page govori o X</li>
        <li>Clear CTA, benefit-focused copy, social proof</li>
      </ul>
      <p>
        <strong>Procenjen impact:</strong> 2-5x poboljšanje conversion rate.
      </p>
      <p>---</p>

      <h2>3. Previše Široke Ključne Reči</h2>
      <p className="font-semibold">Simptomi:</p>
      <ul>
        <li>Visoki troškovi, malo konverzija</li>
        <li>Search Terms report pun nebitnih pretrage</li>
        <li>CPC je "normalan" ali ROI loš</li>
      </ul>
      <p className="font-semibold">Dijagnostika:</p>
      <ul>
        <li>Search Terms report — koliko je relevantnih?</li>
        <li>Proverite match types — imate li samo Broad?</li>
      </ul>
      <p className="font-semibold">Rešenje:</p>
      <ul>
        <li>Pređite na Phrase i Exact match za proven keywords</li>
        <li>Agresivna negative keyword strategija</li>
        <li>Regular Search Terms audit (nedeljno)</li>
      </ul>
      <p>
        <strong>Procenjen impact:</strong> 20-50% ušteda budžeta, bolji kvalitet
        saobraćaja.
      </p>
      <p>---</p>

      <h2>4. Nedostatak Negative Keywords</h2>
      <p className="font-semibold">Simptomi:</p>
      <ul>
        <li>Plaćate za "besplatno", "posao", "kako" pretrage</li>
        <li>Search Terms report pokazuje non-buyer intent</li>
        <li>Visoki troškovi bez konverzija</li>
      </ul>
      <p className="font-semibold">Dijagnostika:</p>
      <ul>
        <li>Search Terms report — pronađite irrelevantne</li>
        <li>Koliko negative keywords imate? (ako &lt;50, premalo)</li>
      </ul>
      <p className="font-semibold">Rešenje:</p>
      <ul>
        <li>Informational (kako, šta je, tutorial)</li>
        <li>Job seekers (posao, karijera, plata)</li>
        <li>Free seekers (besplatno, free, jeftino)</li>
        <li>Competitors (ako ne želite)</li>
        <li>Nedeljni audit i dodavanje novih</li>
      </ul>
      <p>
        <strong>Procenjen impact:</strong> 15-30% ušteda, bolji ROI.
      </p>
      <p>---</p>

      <h2>5. Loša Struktura Naloga</h2>
      <p className="font-semibold">Simptomi:</p>
      <ul>
        <li>Sve u jednoj kampanji</li>
        <li>50+ keywords u jednoj ad grupi</li>
        <li>Nemoguće razumeti šta funkcioniše</li>
      </ul>
      <p className="font-semibold">Dijagnostika:</p>
      <ul>
        <li>Koliko imate kampanja? Ad grupa? Keywords po ad grupi?</li>
        <li>Da li imate logičnu segmentaciju?</li>
      </ul>
      <p className="font-semibold">Rešenje:</p>
      <ul>
        <li>Restrukturiranje po tematskim celinama</li>
        <li>Idealno: 10-20 keywords po ad grupi, tematski povezani</li>
        <li>Razdvojite: Brand vs Non-brand, High intent vs Research</li>
      </ul>
      <p>
        <strong>Procenjen impact:</strong> Lakša optimizacija, bolji Quality
        Score.
      </p>
      <p>
        Pogledajte i{" "}
        <Link href="/blog/google-ads-greske" className="underline">
          najčešće Google Ads greške
        </Link>
        .
      </p>
      <p>---</p>

      <h2>6. Nizak Quality Score</h2>
      <p className="font-semibold">Simptomi:</p>
      <ul>
        <li>Quality Score ispod 5-6 za većinu keywords</li>
        <li>Visok CPC za poziciju</li>
        <li>Ad Rank problems</li>
      </ul>
      <p className="font-semibold">Dijagnostika:</p>
      <ul>
        <li>Keywords tab → dodajte Quality Score kolonu</li>
        <li>Proverite komponente: CTR, Ad Relevance, Landing Page</li>
      </ul>
      <p className="font-semibold">Rešenje:</p>
      <ul>
        <li>
          <strong>Za CTR:</strong> Bolji ad copy, više relevantnih ekstenzija
        </li>
        <li>
          <strong>Za Ad Relevance:</strong> Keywords u headline, tighter ad
          groups
        </li>
        <li>
          <strong>Za Landing Page:</strong> Brži sajt, relevantni sadržaj,
          mobile-friendly
        </li>
      </ul>
      <p>
        <strong>Procenjen impact:</strong> 20-40% niži CPC za istu poziciju.
      </p>
      <p>---</p>

      <h2>7. Nerealna Očekivanja (i Premali Budžet)</h2>
      <p className="font-semibold">Simptomi:</p>
      <ul>
        <li>Budžet €300, očekivanja €30,000 revenue</li>
        <li>"Želimo rezultate za nedelju dana"</li>
        <li>Konstantno nezadovoljstvo bez jasnog razloga</li>
      </ul>
      <p className="font-semibold">Dijagnostika:</p>
      <ul>
        <li>
          Izračunajte: sa vašim CPC i conv rate, koliko konverzija možete
          očekivati?
        </li>
        <li>Learning period: da li ste dali dovoljno vremena?</li>
      </ul>
      <p className="font-semibold">Rešenje:</p>
      <ul>
        <li>Postavite realistične KPI-jeve bazirane na matematici</li>
        <li>Minimum 2-3 meseca za pravu evaluaciju</li>
        <li>Budžet koji dozvoljava minimum 10-15 konverzija mesečno</li>
      </ul>
      <p>
        <strong>Procenjen impact:</strong> Bolje donošenje odluka, manje
        frustracije.
      </p>
      <p>---</p>

      <h2>8. Loši Oglasi (Ad Copy)</h2>
      <p className="font-semibold">Simptomi:</p>
      <ul>
        <li>Nizak CTR (&lt;2% za Search)</li>
        <li>Oglasi govore o vama, ne o korisniku</li>
        <li>Nema diferencijacije od konkurencije</li>
      </ul>
      <p className="font-semibold">Dijagnostika:</p>
      <ul>
        <li>Proverite CTR vs industry benchmark</li>
        <li>Pročitajte oglase kao da ste korisnik — da li biste kliknuli?</li>
      </ul>
      <p className="font-semibold">Rešenje:</p>
      <ul>
        <li>Benefit-focused copy (šta korisnik dobija)</li>
        <li>Uključite keyword u headline</li>
        <li>Clear CTA (Pozovite, Kupite, Zakažite)</li>
        <li>Testirajte varijacije (minimum 2-3 oglasa po ad grupi)</li>
      </ul>
      <p>
        <strong>Procenjen impact:</strong> 20-50% bolji CTR.
      </p>
      <p>---</p>

      <h2>9. Ignorisanje Mobile Korisnika</h2>
      <p className="font-semibold">Simptomi:</p>
      <ul>
        <li>Mobile traffic visok, mobile conversions niski</li>
        <li>Desktop konvertuje 3x bolje</li>
        <li>Mobile bounce rate preko 80%</li>
      </ul>
      <p className="font-semibold">Dijagnostika:</p>
      <ul>
        <li>Segment by Device u Google Ads/GA4</li>
        <li>Testirajte sajt na mobilnom</li>
      </ul>
      <p className="font-semibold">Rešenje:</p>
      <ul>
        <li>Mobile-first landing pages</li>
        <li>Brži load time (pod 3 sekunde)</li>
        <li>Jednostavni forms (manje polja)</li>
        <li>Click-to-call opcija</li>
      </ul>
      <p>
        <strong>Procenjen impact:</strong> Može udvostručiti mobile konverzije.
      </p>
      <p>---</p>

      <h2>10. Pogrešan Targeting (Geografija, Jezik, Vreme)</h2>
      <p className="font-semibold">Simptomi:</p>
      <ul>
        <li>Konverzije iz lokacija koje ne servirate</li>
        <li>Saobraćaj u 3 ujutru kada ne radite</li>
        <li>Korisnici koji ne govore vaš jezik</li>
      </ul>
      <p className="font-semibold">Dijagnostika:</p>
      <ul>
        <li>Location report — odakle dolaze klikovi?</li>
        <li>Hour/Day report — kada su konverzije?</li>
        <li>Language settings — šta je podešeno?</li>
      </ul>
      <p className="font-semibold">Rešenje:</p>
      <ul>
        <li>Precizan geo targeting (gradovi, regioni, radius)</li>
        <li>Ad schedule — koncentracija budžeta na profitabilne periode</li>
        <li>Location option: "People in" ne "People interested in"</li>
      </ul>
      <p>
        <strong>Procenjen impact:</strong> 10-30% bolja efikasnost budžeta.
      </p>
      <p>---</p>

      <h2>11. Konkurencija Vas je Prestigla</h2>
      <p className="font-semibold">Simptomi:</p>
      <ul>
        <li>Nekada je radilo, sada ne</li>
        <li>CPC se povećao značajno</li>
        <li>Impression share pada</li>
      </ul>
      <p className="font-semibold">Dijagnostika:</p>
      <ul>
        <li>Auction Insights — ko su konkurenti, kakav im je share?</li>
        <li>Proverite competitor ads i landing pages</li>
      </ul>
      <p className="font-semibold">Rešenje:</p>
      <ul>
        <li>Diferencirajte se (unique value proposition)</li>
        <li>Pronađite manje konkurentne keywords</li>
        <li>Poboljšajte landing page experience</li>
        <li>Razmotrite brand bidding zaštitu</li>
      </ul>
      <p>
        <strong>Procenjen impact:</strong> Zavisi od industrije.
      </p>
      <p>---</p>

      <h2>12. Proizvod/Usluga Nije Konkurentna</h2>
      <p className="font-semibold">Simptomi:</p>
      <ul>
        <li>Dobar saobraćaj, nula konverzija</li>
        <li>Ljudi gledaju, upoređuju, kupuju drugde</li>
        <li>Problem nije u kampanjama</li>
      </ul>
      <p className="font-semibold">Dijagnostika:</p>
      <ul>
        <li>Poredite cene sa konkurencijom</li>
        <li>Pročitajte reviews — šta ljudi kažu?</li>
        <li>User research — zašto ne kupuju?</li>
      </ul>
      <p className="font-semibold">Rešenje:</p>
      <ul>
        <li>Ovo nije Google Ads problem</li>
        <li>Radite na ponudi: cena, USP, social proof</li>
        <li>Možda Google Ads nije pravi kanal (još)</li>
      </ul>
      <p>
        <strong>Procenjen impact:</strong> Google Ads ne može popraviti loš
        proizvod.
      </p>
      <p>---</p>

      <h2>Dijagnostički Framework: Gde Početi?</h2>
      <p>Ako ne znate gde je problem, idite ovim redosledom:</p>

      <h3>Korak 1: Tracking</h3>
      <p>Da li znate koliko konverzija imate i odakle dolaze?</p>
      <ul>
        <li>NE → Rešite tracking PRVO</li>
      </ul>

      <h3>Korak 2: Landing Pages</h3>
      <p>Da li šaljete ljude na relevantne stranice?</p>
      <ul>
        <li>NE → Kreirajte landing pages</li>
      </ul>

      <h3>Korak 3: Keywords &amp; Search Terms</h3>
      <p>Da li plaćate za relevantan saobraćaj?</p>
      <ul>
        <li>NE → Negative keywords, match types</li>
      </ul>

      <h3>Korak 4: Quality Score</h3>
      <p>Da li je QS iznad 6 za većinu keywords?</p>
      <ul>
        <li>NE → Radite na CTR, relevantnosti, landing pages</li>
      </ul>

      <h3>Korak 5: Budget &amp; Expectations</h3>
      <p>Da li imate dovoljno data za optimizaciju?</p>
      <ul>
        <li>NE → Povećajte budžet ili snizite očekivanja</li>
      </ul>
      <p>---</p>

      <h2>Case Study: Kako Smo Popravili Kampanje Koje "Nisu Radile"</h2>
      <p className="font-semibold">Situacija:</p>
      <p>
        eCommerce prodavnica nameštaja. €3,000 mesečno Google Ads, ROAS 1.2x
        (jedva break-even). Vlasnik: "Google Ads ne radi za nas."
      </p>
      <p className="font-semibold">Dijagnostika:</p>
      <ol>
        <li>
          Conversion tracking — radio buton na svim stranicama, brojao page
          views kao konverzije
        </li>
        <li>Landing pages — sav saobraćaj na homepage</li>
        <li>Keywords — samo Broad match, 100+ irrelevantnih search terms</li>
        <li>Struktura — jedna kampanja za sve</li>
      </ol>
      <p className="font-semibold">Akcije:</p>
      <ol>
        <li>Popravljen tracking — samo purchase kao primarna konverzija</li>
        <li>
          Kreirane kategorijske landing pages (stolice, ormari, stolovi)
        </li>
        <li>
          Negative keyword lista (500+ termina), prelazak na Phrase/Exact
        </li>
        <li>Restrukturiranje u 5 kampanja po kategoriji</li>
      </ol>
      <p className="font-semibold">Rezultat:</p>
      <ul>
        <li>Mesec 1: ROAS 2.1x (učenje novog setup-a)</li>
        <li>Mesec 2: ROAS 2.8x</li>
        <li>Mesec 3: ROAS 3.4x sa istim budžetom</li>
      </ul>
      <p>
        Problem nije bio "Google Ads ne radi". Problem je bio u implementaciji.
      </p>
      <p>---</p>

      <h2>Kada Google Ads Zaista Nije Pravi Kanal</h2>
      <p>
        Iskreno, nekad Google Ads nije odgovor. Znači da je možda vreme za
        drugi pristup:
      </p>
      <p>❌ <strong>Nema potražnje</strong> — niko ne pretražuje vaš proizvod/uslugu</p>
      <p>❌ <strong>Margine su premale</strong> — ne možete biti profitabilni sa CPC-om u vašoj industriji</p>
      <p>❌ <strong>Proizvod je nov</strong> — ljudi ne znaju da ga traže</p>
      <p>❌ <strong>Target audience nije na Google-u</strong> — teens, neke specifične niše</p>
      <p>U tim slučajevima, razmotrite:</p>
      <ul>
        <li>Content marketing i SEO (kreiranje potražnje)</li>
        <li>Social media ads (awareness, demand generation)</li>
        <li>Influencer marketing</li>
        <li>Partnerships</li>
      </ul>
      <p>---</p>

      <h2>Zaključak</h2>
      <p>"Google Ads ne radi" je simptom, ne dijagnoza.</p>
      <p>Pravi uzrok je gotovo uvek nešto specifično:</p>
      <ul>
        <li>Loš tracking</li>
        <li>Pogrešne landing pages</li>
        <li>Previše široke ključne reči</li>
        <li>Nedostatak negative keywords</li>
        <li>Loša struktura</li>
        <li>Nizak Quality Score</li>
      </ul>
      <p>
        Svaki od ovih problema je rešiv. Pitanje je samo da li imate vreme,
        znanje, i strpljenje da ih rešite.
      </p>
      <p>
        Ako ste probali sve iz ovog vodiča i još uvek ne radi — vreme je za
        ekspertsku pomoć. Jer problem postoji, samo ga niste pronašli.
      </p>
      <p>---</p>

      <h2>FAQ</h2>
      <h3>Koliko vremena treba da Google Ads počne da radi?</h3>
      <p>
        Minimum 2-4 nedelje za početne podatke. 2-3 meseca za stabilne,
        optimizovane rezultate. Nemojte odustati pre toga.
      </p>
      <h3>Da li je problem u agenciji/freelanceru?</h3>
      <p>
        Možda. Tražite transparentnost: pristup nalogu, mesečne izveštaje, jasno
        objašnjenje akcija. Ako dobijate samo "radimo na tome", to je crvena
        zastava.
      </p>
      <h3>Koliko budžeta treba da bude dovoljno?</h3>
      <p>
        Zavisi od industrije i ciljeva. Ali ako imate manje od 10-15 konverzija
        mesečno, nemate dovoljno podataka za pravu optimizaciju.
      </p>
      <h3>Šta ako konkurencija ima mnogo veći budžet?</h3>
      <p>
        Fokusirajte se na niše: long-tail keywords, specifične lokacije,
        vremenske periode kada konkurencija spava. Quality Score može
        izjednačiti teren.
      </p>
      <h3>Da li da odustanem od Google Ads?</h3>
      <p>
        Pre nego što odustanete, probajte audit od nezavisne strane. Svež
        pogled često otkrije probleme koje vi ne vidite.
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

function EcommerceVsB2BPost() {
  return (
    <>
      <h2>Uvod</h2>
      <p>"Radimo Google Ads, ali ne vidimo rezultate."</p>
      <p>
        Kada čujem ovu rečenicu, prvo pitanje je: da li je strategija
        prilagođena vašem poslovnom modelu?
      </p>
      <p>
        eCommerce i B2B imaju fundamentalno različite karakteristike. Customer
        journey, decision making process, vrednost konverzije, metrics koje
        pratite — sve je različito.
      </p>
      <p>
        A opet, vidim isti pristup primenjivan na oba: iste vrste kampanja, isti
        KPI-jevi, ista očekivanja.
      </p>
      <p>
        U ovom vodiču pokrivam ključne razlike i specifične strategije za svaki
        model.
      </p>
      <p>---</p>

      <h2>Fundamentalne Razlike</h2>

      <h3>Sales Cycle</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Aspekt</th>
              <th className="py-2 pr-4">eCommerce</th>
              <th className="py-2 pr-4">B2B</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Dužina</td>
              <td className="py-2 pr-4">Minuti do dana</td>
              <td className="py-2 pr-4">Nedelje do meseci</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Decision makers</td>
              <td className="py-2 pr-4">1 osoba</td>
              <td className="py-2 pr-4">2-10 osoba</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Touchpoints do konverzije</td>
              <td className="py-2 pr-4">1-5</td>
              <td className="py-2 pr-4">10-50+</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Impulse factor</td>
              <td className="py-2 pr-4">Visok</td>
              <td className="py-2 pr-4">Nizak</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Konverzija</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Aspekt</th>
              <th className="py-2 pr-4">eCommerce</th>
              <th className="py-2 pr-4">B2B</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Primarna konverzija</td>
              <td className="py-2 pr-4">Kupovina</td>
              <td className="py-2 pr-4">Lead (forma, demo, poziv)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Vrednost</td>
              <td className="py-2 pr-4">€10 - €500 (tipično)</td>
              <td className="py-2 pr-4">€1,000 - €100,000+</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Volume</td>
              <td className="py-2 pr-4">Visok</td>
              <td className="py-2 pr-4">Nizak</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Repeat rate</td>
              <td className="py-2 pr-4">Zavisi od kategorije</td>
              <td className="py-2 pr-4">Obično jednokratno</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Buyer Intent</h3>
      <p>
        <strong>eCommerce:</strong> Korisnik zna šta želi, traži gde da kupi.
        "Kupi Nike Air Max 90 bele" — intent je jasan.
      </p>
      <p>
        <strong>B2B:</strong> Korisnik ima problem, traži rešenje. "Kako
        automatizovati fakturisanje" — tek istražuje opcije.
      </p>
      <p>---</p>

      <h2>Google Ads Strategija za eCommerce</h2>
      <h3>Ključne Kampanje</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`eCommerce Account Structure
├── Brand Search (zaštita brenda)
├── Google Shopping
│   ├── Standard Shopping (kontrola)
│   └── Performance Max (skaliranje)
├── Non-Brand Search (generičke pretrage)
├── Dynamic Search Ads (catch-all)
└── Remarketing
    ├── Cart Abandoners
    ├── Product Viewers
    └── Past Customers`}</code>
      </pre>

      <h3>Shopping: Srce eCommerce Strategije</h3>
      <p>
        Za većinu eCommerce biznisa, Shopping kampanje donose 60-80% prihoda iz
        Google Ads.
      </p>
      <p className="font-semibold">Zašto Shopping dominira:</p>
      <ul>
        <li>Vizuelni format (slika, cena, ime prodavnice)</li>
        <li>Pre-kvalifikacija (korisnik vidi cenu pre klika)</li>
        <li>Visok intent (traži specifičan proizvod)</li>
        <li>Niži CPC nego Search za mnoge kategorije</li>
      </ul>
      <p className="font-semibold">Optimizacija:</p>
      <ul>
        <li>Feed quality je #1 prioritet</li>
        <li>Title optimizacija sa ključnim atributima</li>
        <li>Custom labels za segmentaciju po marži/performansama</li>
        <li>Negative keywords za irrelevantne pretrage</li>
      </ul>
      <p>
        Pročitajte i{" "}
        <Link href="/blog/google-shopping-vodic" className="underline">
          vodič za Google Shopping
        </Link>
        .
      </p>

      <h3>Bidding za eCommerce</h3>
      <p className="font-semibold">Preporučena strategija: Target ROAS</p>
      <p>
        Različiti proizvodi imaju različite vrednosti. Patike od €150 vs čarape
        od €5 — ne želite isti bid.
      </p>
      <p className="font-semibold">Setup:</p>
      <ol>
        <li>Dynamic conversion values (šaljite stvarnu vrednost transakcije)</li>
        <li>Minimum 50 konverzija mesečno za stabilnost</li>
        <li>Počnite sa ROAS ciljem 10-20% iznad trenutnog</li>
        <li>Postepeno povećavajte target</li>
      </ol>

      <h3>KPI-jevi za eCommerce</h3>
      <p className="font-semibold">Primarni:</p>
      <ul>
        <li>
          <strong>ROAS</strong> (Return on Ad Spend) — prihod / trošak
        </li>
        <li>
          <strong>Revenue</strong> — ukupan prihod iz kampanja
        </li>
        <li>
          <strong>Conversion Rate</strong> — procenat posetilaca koji kupe
        </li>
      </ul>
      <p className="font-semibold">Sekundarni:</p>
      <ul>
        <li>AOV (Average Order Value)</li>
        <li>CPA (Cost per Acquisition)</li>
        <li>New vs Returning customer ratio</li>
        <li>Cart abandonment rate</li>
      </ul>

      <h3>Remarketing za eCommerce</h3>
      <p>Remarketing je obavezan. 97% posetilaca ne kupi prvi put.</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Segment</th>
              <th className="py-2 pr-4">Window</th>
              <th className="py-2 pr-4">Pristup</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Cart Abandoners</td>
              <td className="py-2 pr-4">1-7 dana</td>
              <td className="py-2 pr-4">Agresivan, možda sa incentive</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Product Viewers</td>
              <td className="py-2 pr-4">3-14 dana</td>
              <td className="py-2 pr-4">Dinamički product ads</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Past Customers</td>
              <td className="py-2 pr-4">30-180 dana</td>
              <td className="py-2 pr-4">Cross-sell, upsell</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">High-Value Customers</td>
              <td className="py-2 pr-4">90-365 dana</td>
              <td className="py-2 pr-4">VIP tretman, early access</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>---</p>

      <h2>Google Ads Strategija za B2B</h2>
      <h3>Ključne Kampanje</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`B2B Account Structure
├── Brand Search (zaštita + authority)
├── Solution Search ("CRM softver", "ERP sistem")
├── Problem Search ("kako automatizovati X")
├── Competitor Search (imena konkurenata)
├── Remarketing
│   ├── Website Visitors
│   ├── Content Consumers
│   └── Demo/Pricing Page Visitors
└── Display (selektivno)
    └── Industry-specific placements`}</code>
      </pre>

      <h3>Search: Fokus na Intent Keywords</h3>
      <p>
        Za B2B, Search je dominantan kanal. Shopping ne postoji, Display ima
        ograničen impact za demand gen.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Tip</th>
              <th className="py-2 pr-4">Primer</th>
              <th className="py-2 pr-4">Intent</th>
              <th className="py-2 pr-4">CPC</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Problem</td>
              <td className="py-2 pr-4">"kako smanjiti troškove IT-a"</td>
              <td className="py-2 pr-4">Nizak</td>
              <td className="py-2 pr-4">Niži</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Solution</td>
              <td className="py-2 pr-4">"IT outsourcing usluge"</td>
              <td className="py-2 pr-4">Srednji</td>
              <td className="py-2 pr-4">Srednji</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Product</td>
              <td className="py-2 pr-4">"cloud ERP za proizvodnju"</td>
              <td className="py-2 pr-4">Visok</td>
              <td className="py-2 pr-4">Viši</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Vendor</td>
              <td className="py-2 pr-4">"SAP vs Oracle"</td>
              <td className="py-2 pr-4">Visok</td>
              <td className="py-2 pr-4">Visok</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Brand</td>
              <td className="py-2 pr-4">"[vaš brand]"</td>
              <td className="py-2 pr-4">Najviši</td>
              <td className="py-2 pr-4">Najniži</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>Strategija:</strong> Pokrijte ceo funnel, ali najveći budžet na
        high-intent keywords.
      </p>

      <h3>Bidding za B2B</h3>
      <p className="font-semibold">
        Preporučena strategija: Target CPA ili Maximize Conversions (sa oprezom)
      </p>
      <p>
        <strong>Izazov:</strong> Volume konverzija je nizak. Smart Bidding
        algoritmi trebaju data.
      </p>
      <p className="font-semibold">Opcije:</p>
      <ol>
        <li>
          <strong>Manual CPC</strong> — ako imate &lt;20 konverzija mesečno
        </li>
        <li>
          <strong>Maximize Conversions</strong> — za skupljanje data
        </li>
        <li>
          <strong>Target CPA</strong> — kada imate 30+ konverzija mesečno
        </li>
      </ol>
      <p>
        <strong>Pro tip:</strong> Koristite micro-konverzije (pricing page,
        content download) kao sekundarne signale dok gradite volume.
      </p>

      <h3>Lead Quality: Kritična Razlika</h3>
      <p>
        U eCommerce, konverzija = prodaja. U B2B, konverzija = lead. Ali nisu
        svi lead-ovi jednaki.
      </p>
      <p>
        <strong>Problem:</strong> Optimizujete ka form submissions, dobijate
        volume ali ne kvalitet.
      </p>
      <p>
        <strong>Rešenje:</strong> Offline Conversion Import
      </p>
      <ol>
        <li>Čuvajte GCLID sa svakim lead-om</li>
        <li>Pratite lead kroz sales pipeline</li>
        <li>Importujte "SQL" ili "Won" kao offline konverzije</li>
        <li>Google uči koji tip lead-ova se zatvara</li>
      </ol>
      <p>
        <strong>Impact:</strong> Možda će volume pasti, ali kvalitet drastično
        raste.
      </p>
      <p>
        Više o ovom pristupu u{" "}
        <Link href="/blog/conversion-tracking-vodic" className="underline">
          vodiču za conversion tracking
        </Link>
        .
      </p>

      <h3>KPI-jevi za B2B</h3>
      <p className="font-semibold">Primarni:</p>
      <ul>
        <li>
          <strong>CPL</strong> (Cost per Lead) — ali oprez, nije sve o volumenu
        </li>
        <li>
          <strong>Lead Quality Score</strong> — % kvalifikovanih lead-ova
        </li>
        <li>
          <strong>Pipeline Value</strong> — ukupna vrednost potencijalnih dealova
        </li>
        <li>
          <strong>SQL Rate</strong> — % lead-ova koji postanu Sales Qualified
        </li>
      </ul>
      <p className="font-semibold">Sekundarni:</p>
      <ul>
        <li>MQL to SQL ratio</li>
        <li>Time to SQL</li>
        <li>Cost per SQL (pravi KPI)</li>
        <li>Demo booking rate</li>
      </ul>

      <h3>Remarketing za B2B</h3>
      <p>B2B remarketing je drugačiji — duži consideration period.</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Segment</th>
              <th className="py-2 pr-4">Window</th>
              <th className="py-2 pr-4">Content</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Blog Readers</td>
              <td className="py-2 pr-4">30 dana</td>
              <td className="py-2 pr-4">Lead magnet, webinar</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Resource Downloaders</td>
              <td className="py-2 pr-4">60 dana</td>
              <td className="py-2 pr-4">Case study, demo</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Pricing Page</td>
              <td className="py-2 pr-4">14 dana</td>
              <td className="py-2 pr-4">Direktna ponuda, konsultacije</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Demo No-Shows</td>
              <td className="py-2 pr-4">7 dana</td>
              <td className="py-2 pr-4">Reschedule, alternative</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>Format:</strong> Display sa korisnim content-om, YouTube za
        thought leadership, RLSA za Search pojačanje.
      </p>
      <p>---</p>

      <h2>Direktno Poređenje Strategija</h2>
      <h3>Campaign Types</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Tip Kampanje</th>
              <th className="py-2 pr-4">eCommerce</th>
              <th className="py-2 pr-4">B2B</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Shopping</td>
              <td className="py-2 pr-4">⭐⭐⭐⭐⭐ Kritično</td>
              <td className="py-2 pr-4">N/A</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Performance Max</td>
              <td className="py-2 pr-4">⭐⭐⭐⭐ Za skaliranje</td>
              <td className="py-2 pr-4">⭐⭐ Oprezno</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Search Brand</td>
              <td className="py-2 pr-4">⭐⭐⭐⭐ Zaštita</td>
              <td className="py-2 pr-4">⭐⭐⭐⭐⭐ Authority</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Search Non-Brand</td>
              <td className="py-2 pr-4">⭐⭐⭐ Dopuna</td>
              <td className="py-2 pr-4">⭐⭐⭐⭐⭐ Glavni kanal</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Display</td>
              <td className="py-2 pr-4">⭐⭐ Remarketing</td>
              <td className="py-2 pr-4">⭐⭐ Selektivno</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">YouTube</td>
              <td className="py-2 pr-4">⭐⭐⭐ Brand</td>
              <td className="py-2 pr-4">⭐⭐⭐ Thought leadership</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Demand Gen</td>
              <td className="py-2 pr-4">⭐⭐⭐ Prospecting</td>
              <td className="py-2 pr-4">⭐⭐ Eksperimentalno</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Budget Allocation</h3>
      <p className="font-semibold">eCommerce (tipično):</p>
      <ul>
        <li>Shopping/PMax: 50-60%</li>
        <li>Brand Search: 10-15%</li>
        <li>Non-Brand Search: 15-20%</li>
        <li>Remarketing: 10-15%</li>
      </ul>
      <p className="font-semibold">B2B (tipično):</p>
      <ul>
        <li>Non-Brand Search: 50-60%</li>
        <li>Brand Search: 15-20%</li>
        <li>Remarketing: 15-20%</li>
        <li>Display/YouTube: 5-10%</li>
      </ul>

      <h3>Conversion Tracking</h3>
      <p className="font-semibold">eCommerce:</p>
      <ul>
        <li>Primary: Purchase (sa vrednošću)</li>
        <li>Secondary: Add to Cart, Begin Checkout</li>
        <li>Enhanced Ecommerce u GA4</li>
      </ul>
      <p className="font-semibold">B2B:</p>
      <ul>
        <li>Primary: Lead Form Submission</li>
        <li>Secondary: Demo Request, Pricing Page View</li>
        <li>Offline Import: SQL, Won Deal</li>
      </ul>
      <p>---</p>

      <h2>Hibridni Modeli</h2>
      <h3>SaaS sa Self-Serve</h3>
      <p>
        Korisnici mogu kupiti online (eCommerce element) ali i zatražiti demo
        za enterprise (B2B element).
      </p>
      <p className="font-semibold">Strategija:</p>
      <ul>
        <li>Shopping-like kampanje za low-touch proizvode</li>
        <li>B2B strategija za high-touch (enterprise, annual)</li>
        <li>Razdvojene kampanje po segmentu</li>
      </ul>

      <h3>eCommerce sa B2B Komponentom</h3>
      <p>Prodajete i retail i wholesale.</p>
      <p className="font-semibold">Strategija:</p>
      <ul>
        <li>Zasebne kampanje za B2C vs B2B</li>
        <li>Različiti landing pages</li>
        <li>Različite konverzije (purchase vs quote request)</li>
      </ul>
      <p>---</p>

      <h2>Česte Greške po Modelu</h2>
      <h3>eCommerce Greške</h3>
      <ol>
        <li>Ignorisanje feed optimizacije — feed je temelj Shopping-a</li>
        <li>Isti bid za sve proizvode — high-margin treba više bidova</li>
        <li>Nema remarketing segmentacije — cart abandoners ≠ browsers</li>
        <li>Fokus na CTR umesto ROAS — klik nije prodaja</li>
      </ol>

      <h3>B2B Greške</h3>
      <ol>
        <li>Optimizacija ka form fills bez quality metriks — volume ≠ kvalitet</li>
        <li>Prekratki remarketing windows — B2B ciklus je dug</li>
        <li>Ignorisanje offline conversions — gubite najvažniji feedback</li>
        <li>Previše generički keywords — "softver" nije dovoljno specifično</li>
        <li>Očekivanje eCommerce-level volumena — B2B je inherently lower volume</li>
      </ol>
      <p>---</p>

      <h2>Action Plan: Kako Početi</h2>
      <h3>Za eCommerce</h3>
      <ol>
        <li>Postavite Merchant Center i optimizujte feed</li>
        <li>Pokrenite Shopping kampanju sa manual bidding</li>
        <li>Dodajte Brand Search za zaštitu</li>
        <li>Implementirajte remarketing (cart abandoners prvo)</li>
        <li>Pređite na Target ROAS kada imate 50+ konverzija</li>
        <li>Testirajte PMax za skaliranje</li>
      </ol>

      <h3>Za B2B</h3>
      <ol>
        <li>Mapirajte customer journey i keyword intent</li>
        <li>Pokrenite Search kampanje po intent segmentima</li>
        <li>Postavite conversion tracking pravilno (lead + micro)</li>
        <li>Implementirajte GCLID capture za offline tracking</li>
        <li>Dodajte remarketing sa content nurturing</li>
        <li>Pokrenite offline import kada imate dovoljno data</li>
      </ol>
      <p>---</p>

      <h2>Zaključak</h2>
      <p>
        eCommerce i B2B Google Ads strategije su fundamentalno različite — i
        trebaju biti.
      </p>
      <p className="font-semibold">eCommerce je o:</p>
      <ul>
        <li>Shopping kampanjama i feed optimizaciji</li>
        <li>ROAS kao primarnom KPI-u</li>
        <li>Visokom volumenu i brzoj konverziji</li>
        <li>Remarketing segmentaciji za recovery</li>
      </ul>
      <p className="font-semibold">B2B je o:</p>
      <ul>
        <li>Search kampanjama i intent keywords</li>
        <li>Lead quality, ne samo quantity</li>
        <li>Offline conversion tracking za pravi feedback</li>
        <li>Nurturing kroz duži sales cycle</li>
      </ul>
      <p>
        Primena pogrešne strategije na pogrešan model je recept za bacanje
        novca.
      </p>
      <p>
        Ako prepoznajete da vaša strategija ne odgovara vašem poslovnom modelu,
        vreme je za restrukturiranje.
      </p>
      <p>---</p>

      <h2>FAQ</h2>
      <h3>Može li isti tim raditi i eCommerce i B2B kampanje?</h3>
      <p>
        Da, ali zahteva drugačiji mindset. Ekspertiza u jednom ne garantuje
        ekspertizu u drugom.
      </p>
      <h3>Koji model je lakši za početak?</h3>
      <p>
        eCommerce je obično jasniji — prodaja je prodaja. B2B ima više
        varijabli (lead quality, sales cycle) koje komplikuju merenje.
      </p>
      <h3>Da li PMax radi za B2B?</h3>
      <p>
        Može, ali sa oprezom. Zahteva dovoljno konverzija i offline import za
        pravu optimizaciju. Većina B2B biznisa nema dovoljno volume.
      </p>
      <h3>Koliki budžet treba za B2B?</h3>
      <p>
        Više nego što mislite zbog višeg CPC-a i nižeg volumena. Minimum
        €1,500-2,000 mesečno za smisleno testiranje.
      </p>
      <h3>Kako meriti ROI za B2B kada je sales cycle 6 meseci?</h3>
      <p>
        Long-term tracking: pipeline value, SQL rate, eventual revenue.
        Koristite CRM integraciju i importujte podatke nazad u Google Ads.
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

function GoogleAdsVsMetaAdsPost() {
  return (
    <>
      <h2>Uvod</h2>
      <p>"Da li je bolje Google Ads ili Facebook Ads?"</p>
      <p>
        Ovo je jedno od pitanja koje čujem najčešće. I moj odgovor je uvek
        isti: <strong>zavisi</strong>.
      </p>
      <p>
        Zavisi od vašeg biznisa, proizvoda, ciljne publike, budžeta, i ciljeva.
      </p>
      <p>
        Google Ads i Meta Ads (Facebook + Instagram) nisu konkurenti u
        tradicionalnom smislu — to su komplementarni kanali koji služe
        različitim svrhama u customer journey-u.
      </p>
      <p>U ovom vodiču pokrivam:</p>
      <ul>
        <li>Fundamentalne razlike između platformi</li>
        <li>Kada koristiti Google Ads</li>
        <li>Kada koristiti Meta Ads</li>
        <li>Kako ih kombinovati za maksimalan efekat</li>
        <li>Poređenje troškova i ROI-a</li>
      </ul>
      <p>---</p>

      <h2>Fundamentalna Razlika: Intent vs Interest</h2>
      <h3>Google Ads: Demand Harvesting</h3>
      <p>
        Google Ads hvata ljude koji <strong>aktivno traže</strong> nešto.
      </p>
      <p>
        Korisnik ukuca "kupi belu majicu" — ima jasnu nameru. Vi se pojavite sa
        relevantnim oglasom. Nema potrebe za ubeđivanjem da mu treba majica;
        treba ga samo ubediti da kupi od vas.
      </p>
      <p>
        Ovo se zove <strong>demand harvesting</strong> — žanjete postojeću
        potražnju.
      </p>

      <h3>Meta Ads: Demand Generation</h3>
      <p>
        Meta Ads prikazuje oglase ljudima na osnovu{" "}
        <strong>interesovanja i ponašanja</strong>, ne pretrage.
      </p>
      <p>
        Korisnik scrolla Instagram, vidi vašu belu majicu. Nije je tražio.
        Možda mu se svidi, možda ne. Vi morate prvo stvoriti želju, pa tek onda
        konvertovati.
      </p>
      <p>
        Ovo je <strong>demand generation</strong> — stvarate potražnju koja pre
        nije postojala.
      </p>

      <h3>Zašto je Ovo Važno</h3>
      <p>Ova fundamentalna razlika utiče na sve:</p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Aspekt</th>
              <th className="py-2 pr-4">Google Ads</th>
              <th className="py-2 pr-4">Meta Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Korisnik</td>
              <td className="py-2 pr-4">Traži rešenje</td>
              <td className="py-2 pr-4">Skrola sadržaj</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Mindset</td>
              <td className="py-2 pr-4">"Hoću da kupim X"</td>
              <td className="py-2 pr-4">"Ovo izgleda zanimljivo"</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Conversion intent</td>
              <td className="py-2 pr-4">Visok</td>
              <td className="py-2 pr-4">Nizak do srednji</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Uloga oglašivača</td>
              <td className="py-2 pr-4">Pojaviti se u pravo vreme</td>
              <td className="py-2 pr-4">Privući pažnju i stvoriti želju</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Kreativa</td>
              <td className="py-2 pr-4">Tekst dominira</td>
              <td className="py-2 pr-4">Vizual dominira</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>---</p>

      <h2>Kada Koristiti Google Ads</h2>
      <h3>Idealni Scenariji</h3>
      <p>
        <strong>1. Postoji jasna potražnja</strong>
      </p>
      <p>
        Ljudi aktivno pretražuju vaš proizvod ili uslugu. Ako niko ne traži ono
        što nudite, nema šta da harvesting-ujete.
      </p>
      <p>
        <strong>Primer:</strong> "popravka klima uređaja Beograd", "CRM softver
        za mala preduzeća"
      </p>
      <p>
        <strong>2. Visok kupovni intent</strong>
      </p>
      <p>
        Proizvod ili usluga koju ljudi kupuju nakon kratkog istraživanja. Cilj
        je biti tu kada su spremni.
      </p>
      <p>
        <strong>Primer:</strong> Hitni servisi, rezervacije, kupovina online
      </p>
      <p>
        <strong>3. B2B sa specifičnim rešenjem</strong>
      </p>
      <p>
        Decision maker traži specifično rešenje za problem. Google je prvo
        mesto gde gleda.
      </p>
      <p>
        <strong>Primer:</strong> "ERP integracija", "IT outsourcing Srbija"
      </p>
      <p>
        <strong>4. Lokalni biznis</strong>
      </p>
      <p>
        Lokalne pretrage ("frizer blizu mene") imaju izuzetno visok intent i
        conversion rate.
      </p>
      <p>
        <strong>Primer:</strong> Restorani, servisi, zdravstvene usluge
      </p>

      <h3>Google Ads Prednosti</h3>
      <ul>
        <li>Visok intent — ljudi traže ono što nudite</li>
        <li>Merljiv ROI — direktna veza pretraga → klik → konverzija</li>
        <li>Skalabilno — više budžeta = više konverzija (do određene tačke)</li>
        <li>Google Shopping — vizuelni oglasi za eCommerce</li>
        <li>Search + Display + YouTube ekosistem</li>
      </ul>

      <h3>Google Ads Ograničenja</h3>
      <ul>
        <li>Zavisi od postojeće potražnje — ako nema pretrage, nema saobraćaja</li>
        <li>CPC može biti visok — konkurentne industrije imaju skupe klikove</li>
        <li>Ograničena kreativna sloboda — tekstualni formati dominiraju</li>
        <li>Manje efikasno za brand awareness</li>
      </ul>
      <p>---</p>

      <h2>Kada Koristiti Meta Ads</h2>
      <h3>Idealni Scenariji</h3>
      <p>
        <strong>1. Vizuelno privlačan proizvod</strong>
      </p>
      <p>
        Proizvod koji "prodaje sam sebe" kada ga vide. Moda, dekoracija, hrana
        — sve što izgleda dobro.
      </p>
      <p>
        <strong>Primer:</strong> Odeća, kozmetika, unikatni proizvodi
      </p>
      <p>
        <strong>2. Stvaranje potražnje za novim proizvodom</strong>
      </p>
      <p>
        Ljudi ne znaju da vaš proizvod postoji ili da im treba. Morate stvoriti
        awareness.
      </p>
      <p>
        <strong>Primer:</strong> Inovativni gadget, nova kategorija proizvoda
      </p>
      <p>
        <strong>3. Impulse purchase kategorije</strong>
      </p>
      <p>
        Proizvodi koje ljudi kupuju bez dugog razmišljanja kada ih vide.
      </p>
      <p>
        <strong>Primer:</strong> Stvari ispod €50, accessories, pokloni
      </p>
      <p>
        <strong>4. Community i lifestyle brendovi</strong>
      </p>
      <p>
        Brendovi koji prodaju identitet, ne samo proizvod. Meta je odlična za
        storytelling.
      </p>
      <p>
        <strong>Primer:</strong> Fitness brendovi, lifestyle proizvodi
      </p>
      <p>
        <strong>5. Remarketing</strong>
      </p>
      <p>
        Čak i za biznise gde Google dominira, Meta remarketing je često
        efikasniji zbog vizuelnog formata.
      </p>

      <h3>Meta Ads Prednosti</h3>
      <ul>
        <li>Ogromna publika — 3+ milijarde korisnika</li>
        <li>Sofisticirano targetiranje — interesi, ponašanja, lookalikes</li>
        <li>Kreativna sloboda — video, carousel, stories</li>
        <li>Brand building — gradi awareness</li>
        <li>Niži CPC — obično jeftinije od Google-a</li>
      </ul>

      <h3>Meta Ads Ograničenja</h3>
      <ul>
        <li>Niži intent — ljudi ne traže vaš proizvod</li>
        <li>Privacy promene — iOS 14+ je smanjio tracking mogućnosti</li>
        <li>Ad fatigue — efikasnost opada</li>
        <li>Zahteva jaku kreativu</li>
        <li>Attribution izazovi</li>
      </ul>
      <p>---</p>

      <h2>Direktno Poređenje</h2>
      <h3>Troškovi</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Metrika</th>
              <th className="py-2 pr-4">Google Ads</th>
              <th className="py-2 pr-4">Meta Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Prosečan CPC (Srbija)</td>
              <td className="py-2 pr-4">€0.20 - €1.50</td>
              <td className="py-2 pr-4">€0.05 - €0.50</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">CPM</td>
              <td className="py-2 pr-4">€5 - €30</td>
              <td className="py-2 pr-4">€2 - €15</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Minimum budžet</td>
              <td className="py-2 pr-4">€500+/mes</td>
              <td className="py-2 pr-4">€300+/mes</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>Napomena:</strong> Niži CPC na Meta ne znači bolji ROI. Zbog
        nižeg intenta, možda vam treba više klikova za jednu konverziju.
      </p>

      <h3>Conversion Rate</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Industrija</th>
              <th className="py-2 pr-4">Google Ads</th>
              <th className="py-2 pr-4">Meta Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce</td>
              <td className="py-2 pr-4">2-4%</td>
              <td className="py-2 pr-4">0.5-2%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Lead Gen</td>
              <td className="py-2 pr-4">3-8%</td>
              <td className="py-2 pr-4">1-4%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">SaaS</td>
              <td className="py-2 pr-4">2-5%</td>
              <td className="py-2 pr-4">0.5-2%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Lokalni</td>
              <td className="py-2 pr-4">5-15%</td>
              <td className="py-2 pr-4">2-5%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Tipičan ROI</h3>
      <ul>
        <li>Google Search: ROAS 3-8x za optimizovane kampanje</li>
        <li>Google Shopping: ROAS 4-10x</li>
        <li>Meta Ads: ROAS 2-5x (gradi i awareness koji se ne meri direktno)</li>
      </ul>
      <p>---</p>

      <h2>Kombinovanje: Best of Both Worlds</h2>
      <p>Umesto "ili-ili", razmislite o "i-i" pristupu.</p>
      <h3>Full-Funnel Strategija</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`AWARENESS (Top)
└── Meta Ads: Video content, brand awareness kampanje

CONSIDERATION (Middle)
├── Meta Ads: Retargeting video viewers
└── Google Display: Content remarketing

DECISION (Bottom)
├── Google Search: Branded + high-intent keywords
├── Google Shopping: Product searches
└── Meta Ads: Dynamic product retargeting

RETENTION
├── Meta Ads: Customer lookalikes
└── Email (van scope-a, ali važno)`}</code>
      </pre>

      <h3>Praktični Primeri Kombinacije</h3>
      <p className="font-semibold">Primer 1: eCommerce Fashion</p>
      <ul>
        <li>Meta: Awareness kampanje sa lifestyle content-om</li>
        <li>Meta: Retargeting cart abandoners</li>
        <li>Google Shopping: Catching product searches</li>
        <li>Google Search: Branded keywords protection</li>
      </ul>
      <p className="font-semibold">Primer 2: B2B SaaS</p>
      <ul>
        <li>Google Search: High-intent keywords ("CRM za mala preduzeća")</li>
        <li>Meta: Thought leadership content, webinar promocije</li>
        <li>Meta + Google Display: Retargeting website visitors</li>
      </ul>
      <p className="font-semibold">Primer 3: Lokalni Restoran</p>
      <ul>
        <li>Google Search + Maps: "restoran blizu mene" pretrage</li>
        <li>Meta: Eventi, specijalne ponude, community building</li>
        <li>Meta Retargeting: Podsetnici za ponovnu posetu</li>
      </ul>

      <h3>Budget Split Preporuke</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Biznis Tip</th>
              <th className="py-2 pr-4">Google Ads</th>
              <th className="py-2 pr-4">Meta Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce (poznati proizvodi)</td>
              <td className="py-2 pr-4">60-70%</td>
              <td className="py-2 pr-4">30-40%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">eCommerce (novi brend)</td>
              <td className="py-2 pr-4">30-40%</td>
              <td className="py-2 pr-4">60-70%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">B2B Lead Gen</td>
              <td className="py-2 pr-4">70-80%</td>
              <td className="py-2 pr-4">20-30%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Lokalni Biznis</td>
              <td className="py-2 pr-4">60-80%</td>
              <td className="py-2 pr-4">20-40%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">SaaS</td>
              <td className="py-2 pr-4">50-60%</td>
              <td className="py-2 pr-4">40-50%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">D2C Brend</td>
              <td className="py-2 pr-4">40-50%</td>
              <td className="py-2 pr-4">50-60%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>---</p>

      <h2>Decision Framework: Kako Izabrati</h2>
      <h3>Korak 1: Proverite Potražnju</h3>
      <p>
        Idite na Google Keyword Planner. Koliko ljudi pretražuje vaš
        proizvod/uslugu?
      </p>
      <ul>
        <li>
          <strong>Visoka potražnja</strong> → Google Ads je prioritet
        </li>
        <li>
          <strong>Niska/nema potražnja</strong> → Meta Ads za demand creation
        </li>
      </ul>

      <h3>Korak 2: Analizirajte Proizvod</h3>
      <p>
        Da li je vaš proizvod vizuelno privlačan? Da li ga ljudi kupuju
        impulzivno?
      </p>
      <ul>
        <li>
          <strong>Vizuelan + Impulse</strong> → Meta Ads je jak
        </li>
        <li>
          <strong>Kompleksan + Racionalan</strong> → Google Ads dominira
        </li>
      </ul>

      <h3>Korak 3: Razmotrite Sales Cycle</h3>
      <p>Koliko traje od prvog kontakta do kupovine?</p>
      <ul>
        <li>
          <strong>Kratak (minuti do dana)</strong> → Oba kanala mogu
          funkcionisati
        </li>
        <li>
          <strong>Dug (nedelje do meseci)</strong> → Kombinacija je neophodna
        </li>
      </ul>

      <h3>Korak 4: Evaluirajte Resurse</h3>
      <p>Koji tip kreative možete proizvesti?</p>
      <ul>
        <li>
          <strong>Jak vizuelni tim</strong> → Meta Ads može dominirati
        </li>
        <li>
          <strong>Fokus na copywriting</strong> → Google Ads je lakši početak
        </li>
      </ul>

      <h3>Korak 5: Testirajte i Merite</h3>
      <p>
        Ne verujte samo teoriji. Testirajte oba kanala sa manjim budžetom i
        merite stvarne rezultate za vaš specifičan biznis.
      </p>
      <p>---</p>

      <h2>Česte Zablude</h2>
      <h3>"Facebook Ads više ne rade posle iOS 14"</h3>
      <p>
        Nisu onakvi kakvi su bili, ali i dalje rade. Tracking je komplikovaniji,
        ali platform ostaje profitabilan za mnoge biznise.
      </p>
      <h3>"Google Ads je preskup"</h3>
      <p>
        CPC jeste viši, ali ROI može biti bolji zbog višeg intenta. €2 klik koji
        konvertuje je bolji od €0.20 klika koji ne konvertuje.
      </p>
      <h3>"Meta je samo za B2C"</h3>
      <p>
        B2B decision makeri su i dalje ljudi koji koriste Facebook i Instagram.
        Linkedin jeste fokusiraniji, ali Meta ima masovniji reach.
      </p>
      <h3>"Treba izabrati samo jedan kanal"</h3>
      <p>
        Za većinu biznisa, kombinacija je optimalna. Kanali se nadopunjuju, ne
        isključuju.
      </p>
      <p>---</p>

      <h2>Zaključak</h2>
      <p>
        Google Ads vs Meta Ads nije pitanje "koji je bolji" — već "koji je bolji
        za vašu specifičnu situaciju".
      </p>
      <p className="font-semibold">Google Ads je pravi izbor kada:</p>
      <ul>
        <li>Postoji jasna pretraga za vašim proizvodom</li>
        <li>Cilj je hvata ljude sa kupovnom namerom</li>
        <li>B2B ili lokalni biznis</li>
      </ul>
      <p className="font-semibold">Meta Ads je pravi izbor kada:</p>
      <ul>
        <li>Proizvod je vizuelno privlačan</li>
        <li>Gradite brend ili awareness</li>
        <li>Stvarate potražnju za novim proizvodom</li>
      </ul>
      <p className="font-semibold">Kombinacija je idealna za:</p>
      <ul>
        <li>Full-funnel pristup</li>
        <li>Maksimizovanje reach-a</li>
        <li>Remarketing strategije</li>
      </ul>
      <p>
        Najbolji rezultati obično dolaze kada koristite oba kanala strateški,
        igrajući na njihove snage.
      </p>
      <p>---</p>

      <h2>FAQ</h2>
      <h3>Koji kanal je bolji za početnike?</h3>
      <p>
        Google Search je obično lakši za merenje direktnog ROI-a. Meta zahteva
        bolju kreativu i razumevanje audience-a. Ali zavisi od vašeg biznisa.
      </p>
      <h3>Koliki budžet treba za testiranje oba kanala?</h3>
      <p>
        Minimum €500-1,000 po kanalu za 30 dana da biste dobili smislene podatke
        za odluku.
      </p>
      <h3>Da li mi treba agencija koja radi oba?</h3>
      <p>
        Idealno da, jer strategija treba biti koordinisana. Ali specijalizovane
        agencije/freelanceri za svaki kanal mogu biti bolji u egzekuciji.
      </p>
      <h3>Šta ako moj proizvod nije vizuelan?</h3>
      <p>
        Meta i dalje može raditi za UGC content, testimonijale, before/after,
        ili storytelling. Ali Google će verovatno biti efikasniji.
      </p>
      <h3>Kako merim cross-channel efekat?</h3>
      <p>
        Google Analytics 4 sa proper attribution, ili dedicatede attribution
        tools (Rockerbox, Triple Whale). Bez ovoga, teško je znati pravu
        vrednost svakog kanala.
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

function GoogleAdsAuditPost() {
  return (
    <>
      <h2>TL;DR</h2>
      <p>
        Google Ads audit je sistematski pregled naloga koji identifikuje
        probleme i propuštene prilike. Ovaj checklist pokriva 80+ tačaka u 10
        kategorija. Preporučujem kvartalni deep audit + mesečni mini audit.
        Prosečan nalog ima 15-25% wasted spend koji audit može identifikovati.
      </p>
      <p>---</p>

      <h2>Kada Raditi Audit</h2>
      <ul>
        <li>
          <strong>Kvartalno:</strong> Kompletna revizija (2-4 sata)
        </li>
        <li>
          <strong>Mesečno:</strong> Quick check key metrika (30-60 min)
        </li>
        <li>
          <strong>Odmah:</strong> Ako performance naglo padne ili preuzimate
          nalog
        </li>
      </ul>
      <p>---</p>

      <h2>1. Account Structure</h2>
      <ul>
        <li>Campaigns organizovane logično (proizvod/usluga/geo)</li>
        <li>Naming convention konzistentan</li>
        <li>Search i Display ODVOJENI</li>
        <li>Brand vs Non-brand kampanje odvojene</li>
        <li>Ad Groups tematski fokusirane (10-20 keywords)</li>
        <li>Nema "catch-all" Ad Groups</li>
      </ul>
      <p>
        <strong>Red Flags:</strong> Jedna kampanja sa 50+ Ad Groups, Search +
        Display zajedno
      </p>
      <p>---</p>

      <h2>2. Conversion Tracking</h2>
      <ul>
        <li>Conversion tracking postavljen i aktivan</li>
        <li>Primary conversion definisana</li>
        <li>Test konverzija uspešna</li>
        <li>Nema dupliciranih konverzija</li>
        <li>Conversion value postavljen (eCommerce)</li>
        <li>Enhanced conversions omogućen</li>
      </ul>
      <p>
        <strong>Red Flags:</strong> Google Ads konverzije ≠ Analytics (&gt;20%
        razlike)
      </p>
      <p>
        Detaljan vodič:{" "}
        <Link href="/blog/conversion-tracking-vodic" className="underline">
          conversion tracking za Google Ads
        </Link>
        .
      </p>
      <p>---</p>

      <h2>3. Campaign Settings</h2>
      <ul>
        <li>"People in your targeted locations" izabrano</li>
        <li>Display Network ISKLJUČEN u Search kampanjama</li>
        <li>Search Partners evaluiran</li>
        <li>Location bid adjustments postavljeni</li>
        <li>Ad schedule analiziran i optimizovan</li>
        <li>Device performanse analizirane</li>
      </ul>
      <p>
        <strong>Red Flags:</strong> Default location setting, Display u Search
        kampanji
      </p>
      <p>---</p>

      <h2>4. Keywords</h2>
      <ul>
        <li>Search Terms Report pregledan (30 dana)</li>
        <li>Negative keywords dodani</li>
        <li>Nema irelevantnih search terms sa spend-om</li>
        <li>Quality Score većina 6+</li>
        <li>Keywords bez konverzija (&gt;100 klikova) evaluirani</li>
        <li>Duplicate keywords uklonjeni</li>
        <li>Match type strategija definisana</li>
      </ul>
      <p>
        <strong>Red Flags:</strong> Search Terms nikad pregledan, nema
        negatives, QS &lt;5
      </p>
      <p>---</p>

      <h2>5. Ad Copy</h2>
      <ul>
        <li>Svaka Ad Group ima minimum 1 RSA</li>
        <li>RSA ima 10+ headlines</li>
        <li>Headlines uključuju ključne reči</li>
        <li>CTA prisutan</li>
        <li>Ad Strength "Good" ili "Excellent"</li>
        <li>USP jasan</li>
        <li>Više varijanti za testiranje</li>
      </ul>
      <p>
        <strong>Red Flags:</strong> Ad Strength "Poor", samo 3-5 headlines,
        generic copy
      </p>
      <p>---</p>

      <h2>6. Extensions</h2>
      <ul>
        <li>Sitelinks postoje (min 4)</li>
        <li>Callouts postoje (min 4)</li>
        <li>Structured Snippets postoje</li>
        <li>Call extensions (ako relevantno)</li>
        <li>Location extensions (ako relevantno)</li>
        <li>Extension performance analiziran</li>
      </ul>
      <p>
        <strong>Red Flags:</strong> Nema extensions, Sitelinks na iste stranice
      </p>
      <p>---</p>

      <h2>7. Audiences</h2>
      <ul>
        <li>Remarketing liste postoje</li>
        <li>Liste segmentirane (ne samo "All visitors")</li>
        <li>Converters isključeni iz prospecting-a</li>
        <li>In-market audiences testirani</li>
        <li>Audience performance analiziran</li>
      </ul>
      <p>
        <strong>Red Flags:</strong> Nema remarketing lista, nikad audience
        analysis
      </p>
      <p>---</p>

      <h2>8. Bidding</h2>
      <ul>
        <li>Strategija odgovara cilju i fazi</li>
        <li>Dovoljno konverzija za Smart Bidding (15+/mesec)</li>
        <li>Target CPA/ROAS realan</li>
        <li>Learning period završen</li>
        <li>Bid adjustments postavljeni (Manual)</li>
      </ul>
      <p>
        <strong>Red Flags:</strong> Smart Bidding sa &lt;10 conv/mesec, nerealan
        target
      </p>
      <p>---</p>

      <h2>9. Budget</h2>
      <ul>
        <li>Best campaigns NISU "Limited by budget"</li>
        <li>Impression Share Lost (Budget) &lt;20%</li>
        <li>Budget reallokovan ka boljim kampanjama</li>
        <li>Sezonalnost uzeta u obzir</li>
      </ul>
      <p>
        <strong>Red Flags:</strong> Best campaign limited, &gt;30% IS lost to
        budget
      </p>
      <p>---</p>

      <h2>10. Reporting</h2>
      <ul>
        <li>Google Analytics povezan</li>
        <li>Data se podudara (Ads vs Analytics)</li>
        <li>Postoje scheduled reports</li>
        <li>Key metrics praćene (CPA, ROAS, conv rate)</li>
        <li>Segment analysis rađen</li>
      </ul>
      <p>
        <strong>Red Flags:</strong> Analytics nije povezan, surface-level
        metrike samo
      </p>
      <p>---</p>

      <h2>Quick Audit (30 min)</h2>
      <ol>
        <li>
          <strong>Search Terms</strong> (5 min) — Top 20 by cost, irelevantno?
        </li>
        <li>
          <strong>Budget</strong> (3 min) — Limited by budget?
        </li>
        <li>
          <strong>Conversion Tracking</strong> (5 min) — Radi li?
        </li>
        <li>
          <strong>Top Keywords</strong> (5 min) — QS ok? CPA ok?
        </li>
        <li>
          <strong>Ad Performance</strong> (5 min) — Low CTR?
        </li>
        <li>
          <strong>Extensions</strong> (2 min) — Aktivno?
        </li>
        <li>
          <strong>Audiences</strong> (5 min) — Liste pune?
        </li>
      </ol>
      <p>---</p>

      <h2>Scoring</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Score</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4">Akcija</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">5</td>
              <td className="py-2 pr-4">Excellent</td>
              <td className="py-2 pr-4">Maintain</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">4</td>
              <td className="py-2 pr-4">Good</td>
              <td className="py-2 pr-4">Minor tweaks</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">3</td>
              <td className="py-2 pr-4">Average</td>
              <td className="py-2 pr-4">Improvement needed</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">2</td>
              <td className="py-2 pr-4">Poor</td>
              <td className="py-2 pr-4">Priority fix</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">1</td>
              <td className="py-2 pr-4">Critical</td>
              <td className="py-2 pr-4">Immediate action</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Januar 2026
      </div>
    </>
  );
}

function KljucneReciVodicPost() {
  return (
    <>
      <h2>TL;DR</h2>
      <p>
        Ključne reči su temelj Google Ads kampanja — određuju ko vidi vaše oglase
        i koliko plaćate. Uspeh zavisi od: (1) pravog istraživanja koje otkriva
        šta vaši kupci zapravo traže, (2) pametne selekcije koja balansira
        volume i intent, (3) pravilne organizacije u tematske grupe, i (4)
        kontinuirane optimizacije bazirane na podacima. U ovom vodiču naučićete
        kompletan proces od nule do profitabilnih kampanja.
      </p>
      <p>---</p>

      <h2>Šta Su Ključne Reči u Google Ads</h2>
      <p>
        Ključne reči (keywords) su reči i fraze na koje targetirate svoje
        oglase. Kada korisnik ukuca pretragu koja odgovara vašoj ključnoj reči,
        vaš oglas može da se prikaže.
      </p>
      <h3>Kako funkcionišu</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Vi dodajete ključnu reč: "crm softver"
                ↓
Korisnik traži: "najbolji crm softver za mala preduzeća"
                ↓
Google procenjuje relevantnost
                ↓
Vaš oglas se prikazuje (ako prođete auction)`}</code>
      </pre>

      <h3>Ključna reč vs Search Term</h3>
      <p>
        <strong>Ključna reč (Keyword):</strong> Ono što VI targetirate
      </p>
      <p>
        <strong>Search Term (Pretraga):</strong> Ono što KORISNIK zapravo ukuca
      </p>
      <p>Primer:</p>
      <ul>
        <li>Vaša ključna reč: "ženske patike"</li>
        <li>
          Search terms: "ženske patike nike", "patike za žene bele", "gde kupiti
          ženske patike beograd"
        </li>
      </ul>
      <p>Razumevanje ove razlike je ključno za optimizaciju.</p>

      <h3>Zašto su ključne reči toliko važne</h3>
      <ol>
        <li>Određuju ko vidi oglas — pogrešne keywords = pogrešna publika</li>
        <li>Utiču na troškove — popularniji keywords = veći CPC</li>
        <li>Definišu relevantnost — keywords moraju da odgovaraju oglasu i LP</li>
        <li>Formiraju Quality Score — direktan uticaj na Ad Rank</li>
      </ol>
      <p>---</p>

      <h2>Tipovi Ključnih Reči po Intentu</h2>
      <p>Nije svaka ključna reč ista. Intent utiče na vrednost.</p>

      <h3>1. Navigacione (Branded)</h3>
      <p>
        <strong>Intent:</strong> Korisnik traži specifičan brand ili sajt
      </p>
      <p className="font-semibold">Primeri:</p>
      <ul>
        <li>"facebook login"</li>
        <li>"nike srbija"</li>
        <li>"gigatron"</li>
      </ul>
      <p className="font-semibold">Karakteristike:</p>
      <ul>
        <li>Visok CTR (10-30%+)</li>
        <li>Nizak CPC (mala konkurencija osim za vaš brand)</li>
        <li>Visoka konverzija</li>
      </ul>
      <p>
        <strong>Strategija:</strong> Obavezno zaštitite svoj brand. Razmatrajte
        competitor brand bidding.
      </p>

      <h3>2. Informacione</h3>
      <p>
        <strong>Intent:</strong> Korisnik traži informacije, ne želi (još) da
        kupi
      </p>
      <p className="font-semibold">Primeri:</p>
      <ul>
        <li>"kako odabrati CRM"</li>
        <li>"šta je performance max"</li>
        <li>"razlika između phrase i exact match"</li>
      </ul>
      <p className="font-semibold">Karakteristike:</p>
      <ul>
        <li>Nizak do srednji CPC</li>
        <li>Niža konverzija (nisu spremni za kupovinu)</li>
        <li>Visok volume</li>
      </ul>
      <p>
        <strong>Strategija:</strong> Korisno za awareness i content marketing,
        oprez sa direktnim ROI očekivanjima.
      </p>

      <h3>3. Komercijalne (Istraživačke)</h3>
      <p>
        <strong>Intent:</strong> Korisnik istražuje opcije pre kupovine
      </p>
      <p className="font-semibold">Primeri:</p>
      <ul>
        <li>"najbolji CRM za mala preduzeća"</li>
        <li>"hubspot vs salesforce"</li>
        <li>"CRM recenzije"</li>
      </ul>
      <p className="font-semibold">Karakteristike:</p>
      <ul>
        <li>Srednji CPC</li>
        <li>Dobra konverzija (mid-funnel)</li>
        <li>Srednji volume</li>
      </ul>
      <p>
        <strong>Strategija:</strong> Odličan balans volume i intent. Fokus na
        diferencijaciju.
      </p>

      <h3>4. Transakcione</h3>
      <p>
        <strong>Intent:</strong> Korisnik je spreman da kupi/konvertuje
      </p>
      <p className="font-semibold">Primeri:</p>
      <ul>
        <li>"kupi CRM softver"</li>
        <li>"CRM cena"</li>
        <li>"CRM besplatan trial"</li>
        <li>"CRM demo"</li>
      </ul>
      <p className="font-semibold">Karakteristike:</p>
      <ul>
        <li>Viši CPC (velika konkurencija)</li>
        <li>Najviša konverzija</li>
        <li>Niži volume</li>
      </ul>
      <p>
        <strong>Strategija:</strong> Prioritet za ROI-fokusirane kampanje.
        Spremni da platite premium.
      </p>

      <h3>Intent Funnel</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`AWARENESS          CONSIDERATION          DECISION
(Informacione)     (Komercijalne)         (Transakcione)
     │                   │                     │
 "šta je CRM"  →  "najbolji CRM 2026"  →  "kupi hubspot"
     │                   │                     │
 Nizak CPC           Srednji CPC           Visok CPC
 Niža conv.          Srednja conv.         Visoka conv.
 Visok volume        Srednji volume        Nizak volume`}</code>
      </pre>
      <p>---</p>

      <h2>Keyword Research: Kako Istraživati</h2>
      <h3>Korak 1: Brainstorming</h3>
      <p>Pitanja za brainstorming:</p>
      <ul>
        <li>Kako bi vaši kupci opisali vaš proizvod/uslugu?</li>
        <li>Koje probleme rešavate?</li>
        <li>Koje alternative postoje?</li>
        <li>Koji su sinonimi za vaš proizvod?</li>
      </ul>
      <p className="font-semibold">Primer za CRM softver:</p>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Osnovni termini: CRM, CRM softver, CRM sistem
Problemi: upravljanje kontaktima, praćenje prodaje, organizacija klijenata
Alternative: Salesforce, HubSpot, Pipedrive
Sinonimi: softver za prodaju, pipeline management`}</code>
      </pre>

      <h3>Korak 2: Keyword Planner</h3>
      <p>Google-ov besplatan alat za istraživanje.</p>

      <h3>Korak 3: Competitor Research</h3>
      <p className="font-semibold">Alati:</p>
      <ul>
        <li>SEMrush</li>
        <li>Ahrefs</li>
        <li>SpyFu</li>
      </ul>
      <p className="font-semibold">Besplatne opcije:</p>
      <ul>
        <li>Google pretraga — pogledajte šta konkurenti koriste u oglasima</li>
        <li>"Searches related to..." na dnu SERP-a</li>
        <li>Google Autocomplete</li>
      </ul>

      <h3>Korak 4: Search Terms Mining</h3>
      <p>Ako već imate aktivne kampanje:</p>
      <ol>
        <li>Idite na Keywords → Search Terms</li>
        <li>Analizirajte šta ljudi zapravo traže</li>
        <li>Dodajte dobre pretrage kao nove ključne reči</li>
      </ol>

      <h3>Korak 5: Customer Language</h3>
      <p>Gde pronaći:</p>
      <ul>
        <li>Reviews vaših proizvoda</li>
        <li>Support tiketi i pitanja</li>
        <li>Social media komentari</li>
        <li>Sales razgovori</li>
        <li>Forumi u vašoj industriji</li>
      </ul>
      <p>Cilj: Razumeti kako KUPCI govore, ne kako VI mislite da govore.</p>
      <p>---</p>

      <h2>Google Keyword Planner Vodič</h2>
      <h3>Kako pristupiti</h3>
      <ol>
        <li>Ulogujte se u Google Ads</li>
        <li>Tools &amp; Settings → Planning → Keyword Planner</li>
      </ol>

      <h3>Opcija 1: Discover New Keywords</h3>
      <p className="font-semibold">Kada koristiti:</p>
      <p>Za pronalaženje novih keyword ideja.</p>
      <p className="font-semibold">Kako:</p>
      <ol>
        <li>Unesite seed keywords (početne reči)</li>
        <li>Ili unesite URL (vaš sajt ili konkurent)</li>
        <li>Kliknite "Get Results"</li>
      </ol>
      <p className="font-semibold">Šta dobijate:</p>
      <ul>
        <li>Lista povezanih keywords</li>
        <li>Prosečan mesečni volume</li>
        <li>Competition level (Low/Medium/High)</li>
        <li>Top of page bid (low i high range)</li>
      </ul>

      <h3>Opcija 2: Get Search Volume</h3>
      <p className="font-semibold">Kada koristiti:</p>
      <p>Kada već imate listu keywords i želite podatke.</p>
      <p className="font-semibold">Kako:</p>
      <ol>
        <li>Upload listu ili unesite ručno</li>
        <li>Kliknite "Get Started"</li>
      </ol>

      <h3>Tumačenje rezultata</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Metrika</th>
              <th className="py-2 pr-4">Šta znači</th>
              <th className="py-2 pr-4">Kako koristiti</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Avg. monthly searches</td>
              <td className="py-2 pr-4">Koliko ljudi traži mesečno</td>
              <td className="py-2 pr-4">Balans volume vs competition</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Competition</td>
              <td className="py-2 pr-4">Koliko oglašivača biduje</td>
              <td className="py-2 pr-4">High = skuplji, popularniji</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Top of page bid (low)</td>
              <td className="py-2 pr-4">CPC za dno prve stranice</td>
              <td className="py-2 pr-4">Minimum za vidljivost</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Top of page bid (high)</td>
              <td className="py-2 pr-4">CPC za vrh</td>
              <td className="py-2 pr-4">Premium pozicije</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Pro tips za Keyword Planner</h3>
      <ol>
        <li>Filtrirajte po lokaciji — Srbija ima drugačiji volume od US</li>
        <li>Koristite date range — sezonalnost je bitna</li>
        <li>Downloadujte rezultate — lakša analiza u Excel-u</li>
        <li>Kombinujte sa drugim alatima — KP underreports za manje volume</li>
      </ol>
      <p>---</p>

      <h2>Selekcija Pravih Ključnih Reči</h2>
      <h3>Framework za evaluaciju</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Faktor</th>
              <th className="py-2 pr-4">Pitanje</th>
              <th className="py-2 pr-4">Idealno</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Relevantnost</td>
              <td className="py-2 pr-4">Da li odgovara vašoj ponudi?</td>
              <td className="py-2 pr-4">Visoka</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Intent</td>
              <td className="py-2 pr-4">Da li pokazuje kupovnu nameru?</td>
              <td className="py-2 pr-4">Komercijalni/Transakcioni</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Volume</td>
              <td className="py-2 pr-4">Da li ima dovoljno pretraga?</td>
              <td className="py-2 pr-4">100+ mesečno</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Competition</td>
              <td className="py-2 pr-4">Možete li se takmičiti?</td>
              <td className="py-2 pr-4">Zavisi od budžeta</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">CPC</td>
              <td className="py-2 pr-4">Možete li priuštiti?</td>
              <td className="py-2 pr-4">Unutar target CPA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Izračunavanje maksimalnog CPC-a</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Max CPC = Target CPA × Expected Conversion Rate

Primer:
Target CPA: €30
Expected CR: 3%
Max CPC = €30 × 0.03 = €0.90`}</code>
      </pre>
      <p>
        Ako Keyword Planner pokazuje CPC €2.00, a vaš max je €0.90 — ta ključna
        reč možda nije isplativa.
      </p>

      <h3>Red flags — Keywords koje treba izbegavati</h3>
      <ul>
        <li>Previše opšte: "softver", "obuća"</li>
        <li>Informacione bez strateškog razloga: "šta je X"</li>
        <li>Preskupe za vaš model</li>
        <li>Irelevantne</li>
      </ul>

      <h3>Green flags — Keywords za prioritet</h3>
      <ul>
        <li>Transakcione: "kupi", "cena", "naruči", "poruči"</li>
        <li>Komercijalne: "najbolji", "top", "preporuka", "recenzije"</li>
        <li>Problem-focused: "[problem] rešenje"</li>
        <li>Competitor: "X alternativa", "X vs Y"</li>
        <li>Local: "[usluga] [grad]"</li>
      </ul>
      <p>---</p>

      <h2>Organizacija u Ad Groups</h2>
      <h3>Princip tematske grupacije</h3>
      <p>
        <strong>Pravilo:</strong> Sve ključne reči u jednoj Ad Group moraju biti
        dovoljno slične da dele ISTI oglas.
      </p>
      <p>
        <strong>Test:</strong> Da li možete napisati jedan oglas koji je
        relevantan za SVE keywords u grupi?
      </p>

      <h3>Primer dobre organizacije</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Kampanja: CRM Softver
│
├── Ad Group: CRM za mala preduzeća
│   ├── crm za mala preduzeća
│   ├── crm mali biznis
│   ├── crm za malu firmu
│   └── crm sistem za mala preduzeća
│
├── Ad Group: CRM cena
│   ├── crm cena
│   ├── crm softver cena
│   ├── koliko košta crm
│   └── crm mesečna pretplata
│
├── Ad Group: CRM besplatan trial
│   ├── crm besplatan trial
│   ├── crm free trial
│   ├── crm probni period
│   └── crm besplatno testiranje
│
└── Ad Group: Salesforce alternativa
    ├── salesforce alternativa
    ├── zamena za salesforce
    ├── jeftiniji od salesforce
    └── salesforce konkurencija`}</code>
      </pre>

      <h3>Koliko keywords po Ad Group?</h3>
      <p>
        <strong>Preporuka:</strong> 10-20 ključnih reči
      </p>
      <p>Previše malo (&lt;5): Nedovoljno data za optimizaciju</p>
      <p>Previše mnogo (&gt;30): Teško napisati relevantan oglas za sve</p>

      <h3>Naming convention</h3>
      <p>Koristite konzistentno imenovanje:</p>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`[Tip kampanje] - [Kategorija] - [Specifičnost]

Primeri:
Search - CRM - Mali Biznis
Search - CRM - Cene
Search - CRM - Competitor Terms`}</code>
      </pre>
      <p>---</p>

      <h2>Match Types Objašnjeni</h2>
      <h3>Tri match types u 2026</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Match Type</th>
              <th className="py-2 pr-4">Simbol</th>
              <th className="py-2 pr-4">Kontrola</th>
              <th className="py-2 pr-4">Reach</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Exact</td>
              <td className="py-2 pr-4">[keyword]</td>
              <td className="py-2 pr-4">Najviša</td>
              <td className="py-2 pr-4">Najmanji</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Phrase</td>
              <td className="py-2 pr-4">"keyword"</td>
              <td className="py-2 pr-4">Srednja</td>
              <td className="py-2 pr-4">Srednji</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Broad</td>
              <td className="py-2 pr-4">keyword</td>
              <td className="py-2 pr-4">Najniža</td>
              <td className="py-2 pr-4">Najveći</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Exact Match [keyword]</h3>
      <p>
        <strong>Prikazuje se za:</strong> Pretrage koje imaju isto značenje
      </p>
      <p className="font-semibold">Primer:</p>
      <ul>
        <li>Keyword: [crm za mala preduzeća]</li>
        <li>
          Prikazuje se: "crm za mala preduzeća", "crm mali biznis", "crm za male
          firme"
        </li>
        <li>NE prikazuje se: "besplatan crm", "enterprise crm"</li>
      </ul>
      <p className="font-semibold">Kada koristiti:</p>
      <ul>
        <li>Proven keywords sa konverzijama</li>
        <li>Ograničen budžet</li>
        <li>Maksimalna kontrola</li>
      </ul>

      <h3>Phrase Match "keyword"</h3>
      <p>
        <strong>Prikazuje se za:</strong> Pretrage koje uključuju značenje
        ključne reči
      </p>
      <p className="font-semibold">Primer:</p>
      <ul>
        <li>Keyword: "crm za mala preduzeća"</li>
        <li>
          Prikazuje se: "najbolji crm za mala preduzeća", "crm za mala preduzeća
          cena", "preporuka crm mali biznis"
        </li>
        <li>NE prikazuje se: "enterprise crm softver", "crm za korporacije"</li>
      </ul>
      <p className="font-semibold">Kada koristiti:</p>
      <ul>
        <li>Balans kontrole i reach-a</li>
        <li>Otkrivanje novih varijanti</li>
        <li>Početak kampanje</li>
      </ul>

      <h3>Broad Match keyword</h3>
      <p>
        <strong>Prikazuje se za:</strong> Pretrage povezane sa ključnom reči
      </p>
      <p className="font-semibold">Primer:</p>
      <ul>
        <li>Keyword: crm za mala preduzeća</li>
        <li>
          Prikazuje se: sve gore + "softver za praćenje prodaje", "alat za
          upravljanje klijentima", "sales pipeline tool"
        </li>
      </ul>
      <p className="font-semibold">Kada koristiti:</p>
      <ul>
        <li>Scaling sa Smart Bidding</li>
        <li>Otkrivanje novih tržišta</li>
        <li>Dosta konverzija za algoritam</li>
      </ul>
      <p>
        <strong>Oprez:</strong> Bez Smart Bidding, Broad može potrošiti budžet
        na irelevantne pretrage.
      </p>

      <h3>Strategija po fazi</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Faza 1 (Početak): Phrase Match
├── Cilj: Naučiti šta radi
├── Aktivno: Search Terms review
└── Dodavati: Negative keywords

Faza 2 (Optimizacija): Exact za proven, Phrase za discovery
├── Cilj: Fokus na winnere
├── Exact: Top performing keywords
└── Phrase: Continuous discovery

Faza 3 (Scaling): Broad + Smart Bidding
├── Uslov: 30+ konverzija mesečno
├── Cilj: Maksimalan reach
└── Oslanjanje: Na Google AI`}</code>
      </pre>
      <p>---</p>

      <h2>Negative Keywords Strategija</h2>
      <h3>Šta su Negative Keywords</h3>
      <p>
        Ključne reči za koje NE želite da se prikazujete. Sprečavaju trošenje
        budžeta na irelevantne pretrage.
      </p>

      <h3>Tipovi negatives</h3>
      <p>
        <strong>1. Negative Broad:</strong> besplatno — blokira svaku pretragu
        koja sadrži "besplatno"
      </p>
      <p>
        <strong>2. Negative Phrase:</strong> "besplatno preuzimanje" — blokira
        pretrage sa tačnom frazom
      </p>
      <p>
        <strong>3. Negative Exact:</strong> [besplatno preuzimanje] — blokira
        samo tu tačnu pretragu
      </p>

      <h3>Starter lista negativnih reči</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`-- Besplatno/Jeftino (ako ne nudite) --
besplatno
free
jeftino
najjeftinije
povoljno
dzabe

-- Posao/Karijera --
posao
zaposlenje
plata
karijera
CV
konkurs

-- Informacione --
šta je
kako
zašto
wikipedia
definicija
pojam

-- DIY/Tutorial --
tutorial
vodič za početnike
uradi sam
DIY
kurs
obuka

-- Loš kvalitet signali --
loše
problem
ne radi
bug
greška
complaint`}</code>
      </pre>

      <h3>Kako pronaći negative keywords</h3>
      <p className="font-semibold">1. Search Terms Report (NEDELJNO)</p>
      <ol>
        <li>Keywords → Search Terms</li>
        <li>Sortirajte po Cost (highest first)</li>
        <li>Identifikujte irelevantne sa troškom</li>
        <li>Dodajte kao negative</li>
      </ol>
      <p className="font-semibold">2. Pre-launch research</p>
      <ul>
        <li>Keyword Planner — pogledajte sve suggestions</li>
        <li>Brainstorming — šta bi bilo irelevantno?</li>
      </ul>
      <p className="font-semibold">3. Competitor analysis</p>
      <ul>
        <li>Za koje termine se konkurenti NE pojavljuju?</li>
      </ul>

      <h3>Gde dodati negatives</h3>
      <ul>
        <li>
          <strong>Campaign level:</strong> Primenjuje se na sve Ad Groups u
          kampanji
        </li>
        <li>
          <strong>Ad Group level:</strong> Primenjuje se samo na tu grupu
        </li>
        <li>
          <strong>Negative keyword list:</strong> Deljena lista za više kampanja
        </li>
      </ul>
      <p>
        <strong>Best practice:</strong> Kreirajte master negative list i
        primenjujte na sve kampanje.
      </p>
      <p>
        Detaljna lista:{" "}
        <Link href="/blog/negativne-kljucne-reci" className="underline">
          negative keywords vodič
        </Link>
        .
      </p>
      <p>---</p>

      <h2>Optimizacija Ključnih Reči</h2>
      <h3>Nedeljni workflow</h3>
      <p className="font-semibold">1. Search Terms Review</p>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Action: Keywords → Search Terms → Last 7 days
Look for:
- Irelevantne pretrage → Add as negative
- Dobre pretrage koje ne targetirate → Add as keyword`}</code>
      </pre>

      <p className="font-semibold">2. Performance Analysis</p>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Action: Keywords → Sort by Conversions
Look for:
- Keywords sa konverzijama → Ensure adequate bid
- Keywords sa troškom, bez konverzija → Evaluate/pause`}</code>
      </pre>

      <p className="font-semibold">3. Quality Score Check</p>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Action: Keywords → Add column "Quality Score"
Look for:
- QS < 5 → Prioritetna optimizacija
- QS 5-6 → Plan za poboljšanje
- QS 7+ → Maintain`}</code>
      </pre>
      <p>
        Više o QS:{" "}
        <Link href="/blog/quality-score-vodic" className="underline">
          Quality Score vodič
        </Link>
        .
      </p>

      <h3>Kada pauzirati keyword</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Situacija</th>
              <th className="py-2 pr-4">Minimum data</th>
              <th className="py-2 pr-4">Akcija</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Nula klikova</td>
              <td className="py-2 pr-4">1000+ impressions</td>
              <td className="py-2 pr-4">Proveri bid/QS</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Klikovi, nula conv</td>
              <td className="py-2 pr-4">100+ klikova</td>
              <td className="py-2 pr-4">Evaluiraj LP/offer</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Visok CPA</td>
              <td className="py-2 pr-4">3x target CPA spend</td>
              <td className="py-2 pr-4">Pauziraj</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Nizak QS</td>
              <td className="py-2 pr-4">QS 1-3, nema poboljšanja</td>
              <td className="py-2 pr-4">Pauziraj/restrukturiraj</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Bid optimizacija</h3>
      <p className="font-semibold">Za Manual CPC:</p>
      <ul>
        <li>Povećaj bid: keywords sa konverzijama ispod target CPA</li>
        <li>Smanji bid: keywords sa konverzijama iznad target CPA</li>
        <li>Pauziraj: keywords bez konverzija nakon dovoljno spend-a</li>
      </ul>
      <p className="font-semibold">Za Smart Bidding:</p>
      <ul>
        <li>Google automatski optimizuje</li>
        <li>Vaš posao: Dodavati/uklanjati keywords, optimizovati QS</li>
      </ul>
      <p>---</p>

      <h2>Napredne Strategije</h2>
      <h3>1. Competitor Keyword Targeting</h3>
      <p>Bidovanje na brand imena konkurenata.</p>
      <p className="font-semibold">Pros:</p>
      <ul>
        <li>Dosežete ljude koji razmatraju alternative</li>
        <li>Često jeftiniji CPC (niži QS za non-brand)</li>
      </ul>
      <p className="font-semibold">Cons:</p>
      <ul>
        <li>Niži QS (niste relevantni za taj brand)</li>
        <li>Niži CTR</li>
        <li>Potencijalno agresivna taktika</li>
      </ul>
      <p className="font-semibold">Kako:</p>
      <ul>
        <li>NE koristite competitor brand u tekstu oglasa</li>
        <li>Fokus na diferencijaciju</li>
      </ul>

      <h3>2. RLSA Keyword Expansion</h3>
      <p>
        Sa Remarketing Lists for Search Ads, možete biti agresivniji sa
        keywords.
      </p>
      <p>
        <strong>Logika:</strong> Korisnik vas već zna → šire keywords su ok
      </p>
      <p className="font-semibold">Primer:</p>
      <ul>
        <li>Za cold traffic: [crm za mala preduzeća]</li>
        <li>Za remarketing: crm softver (broad)</li>
      </ul>

      <h3>3. Keyword Sculpting</h3>
      <p>
        Kontrolisanje koji keyword triggeruje koji oglas kada imate preklapanja.
      </p>
      <p className="font-semibold">Problem:</p>
      <p>Imate "crm" i "crm cena" — koja će se prikazati za "crm cena srbija"?</p>
      <p className="font-semibold">Rešenje:</p>
      <p>Dodajte "cena" kao negative u general Ad Group.</p>

      <h3>4. Dynamic Keyword Insertion (DKI)</h3>
      <p>Automatsko ubacivanje search term-a u oglas.</p>
      <p className="font-semibold">Sintaksa:</p>
      <p>{`{KeyWord:Default Text}`}</p>
      <p className="font-semibold">Primer headline:</p>
      <p>{`{KeyWord:CRM Softver} - Besplatan Trial`}</p>
      <p className="font-semibold">
        Ako korisnik traži "crm za mala preduzeća":
      </p>
      <p>Headline: "Crm Za Mala Preduzeća - Besplatan Trial"</p>
      <p>
        <strong>Oprez:</strong> Može kreirati čudne kombinacije. Testirajte.
      </p>
      <p>---</p>

      <h2>Česte Greške</h2>
      <h3>1. Previše širokih keywords</h3>
      <p>
        <strong>Greška:</strong> Samo "softver", "patike", "usluge"
      </p>
      <p>
        <strong>Rezultat:</strong> Visok spend, nizak ROI
      </p>
      <p>
        <strong>Fix:</strong> Dodajte modifikatore (tip, lokacija, intent)
      </p>

      <h3>2. Ignorisanje Search Terms</h3>
      <p>
        <strong>Greška:</strong> Nikada ne proveravate šta ljudi zapravo traže
      </p>
      <p>
        <strong>Rezultat:</strong> Trošite na irelevantne pretrage
      </p>
      <p>
        <strong>Fix:</strong> Nedeljni Search Terms review
      </p>

      <h3>3. Ista Ad Group za sve</h3>
      <p>
        <strong>Greška:</strong> 100 keywords u jednoj grupi
      </p>
      <p>
        <strong>Rezultat:</strong> Generic oglasi, nizak QS
      </p>
      <p>
        <strong>Fix:</strong> Tematska grupacija, 10-20 keywords
      </p>

      <h3>4. Bez negativnih reči</h3>
      <p>
        <strong>Greška:</strong> Nikada ne dodajete negatives
      </p>
      <p>
        <strong>Rezultat:</strong> Constant budget waste
      </p>
      <p>
        <strong>Fix:</strong> Starter lista + kontinuirano dodavanje
      </p>

      <h3>5. Fokus samo na volume</h3>
      <p>
        <strong>Greška:</strong> Birate keywords samo po broju pretraga
      </p>
      <p>
        <strong>Rezultat:</strong> Puno klikova, malo konverzija
      </p>
      <p>
        <strong>Fix:</strong> Prioritet intent &gt; volume
      </p>

      <h3>6. Copy-paste konkurencije</h3>
      <p>
        <strong>Greška:</strong> Samo kopirate competitor keywords
      </p>
      <p>
        <strong>Rezultat:</strong> Takmičite se na njihovom terenu
      </p>
      <p>
        <strong>Fix:</strong> Pronađite svoje unique angles
      </p>
      <p>---</p>

      <h2>FAQ</h2>
      <h3>Koliko ključnih reči trebam za početak?</h3>
      <p>
        Za jednu kampanju: 30-50 keywords organizovanih u 3-5 Ad Groups. Bolje
        početi manje i proširiti nego previše odjednom.
      </p>
      <h3>Da li trebam targetirati competitor brand names?</h3>
      <p>
        Opciono. Može biti efektivno ali zahteva pažljivu strategiju. Ne
        koristite njihov brand u oglas tekstu.
      </p>
      <h3>Exact ili Phrase za početak?</h3>
      <p>
        Phrase. Daje balans kontrole i discovery-ja. Exact dodajte kasnije za
        proven performers.
      </p>
      <h3>Koliko često da proveravam Search Terms?</h3>
      <p>Minimum jednom nedeljno. U prvih mesec dana — svaka 2-3 dana.</p>
      <h3>Šta ako keyword ima 0 pretraga u Keyword Planner?</h3>
      <p>
        Može i dalje biti vredan. KP underreports za long-tail. Testirajte ako
        je relevantan.
      </p>
      <h3>Kako znam da je keyword "loš"?</h3>
      <p>
        100+ klikova bez konverzije, ili 3x target CPA spend bez rezultata. Ali
        proverite i LP i oglas pre pauziranja.
      </p>
      <p>---</p>

      <h2>Sledeći koraci</h2>
      <ul>
        <li>
          <Link href="/blog/negativne-kljucne-reci" className="underline">
            Negative Keywords: Kompletna Lista
          </Link>
        </li>
        <li>
          <Link href="/blog/quality-score-vodic" className="underline">
            Quality Score: Kako Ga Poboljšati
          </Link>
        </li>
        <li>
          <Link href="/blog/google-ads-audit-vodic" className="underline">
            Google Ads Audit: Checklist
          </Link>
        </li>
      </ul>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Januar 2026
      </div>
      <div className="text-sm text-gray-500">
        Autor: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}

function NegativeKeywordsVodicPost() {
  return (
    <>
      <h2>TL;DR</h2>
      <p>
        Negative keywords sprečavaju prikazivanje oglasa za irelevantne pretrage
        i direktno utiču na ROI. Bez njih, 20-40% budžeta odlazi na klikove koji
        nikada neće konvertovati. U ovom vodiču dobijate: starter listu
        universal negatives, liste po industrijama, strategiju za pronalaženje
        i organizaciju, i napredne tehnike. Pravilna negative strategija može
        smanjiti wasted spend za 30%+ i poboljšati ROAS za 20-50%.
      </p>
      <p>---</p>

      <h2>Šta Su Negative Keywords</h2>
      <p>
        Negative keywords su reči i fraze za koje NE želite da se vaši oglasi
        prikazuju.
      </p>
      <h3>Kako funkcionišu</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Vaša ključna reč: "CRM softver"
Negative keyword: besplatno

Pretraga: "besplatni CRM softver"
→ Vaš oglas se NE prikazuje ✓

Pretraga: "CRM softver cena"
→ Vaš oglas se prikazuje ✓`}</code>
      </pre>

      <h3>Razlika: Positive vs Negative Keywords</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Aspect</th>
              <th className="py-2 pr-4">Positive Keywords</th>
              <th className="py-2 pr-4">Negative Keywords</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Funkcija</td>
              <td className="py-2 pr-4">Triggeruju oglas</td>
              <td className="py-2 pr-4">Blokiraju oglas</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Match types</td>
              <td className="py-2 pr-4">Broad, Phrase, Exact</td>
              <td className="py-2 pr-4">Broad, Phrase, Exact (drugačije rade)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Cilj</td>
              <td className="py-2 pr-4">Dosegnuti relevantne</td>
              <td className="py-2 pr-4">Izbaciti irelevantne</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>---</p>

      <h2>Zašto Su Kritično Važne</h2>
      <h3>Statistika iz prakse</h3>
      <ul>
        <li>20-40% budžeta odlazi na irelevantne klikove bez negatives</li>
        <li>30%+ smanjenje wasted spend-a uz dobru strategiju</li>
        <li>15-25% poboljšanje CTR-a (relevantnija publika)</li>
        <li>10-20% poboljšanje Quality Score-a</li>
      </ul>

      <h3>Primer iz prakse</h3>
      <p className="font-semibold">Klijent: Online prodavnica premium nameštaja</p>
      <p className="font-semibold">Pre negative keywords:</p>
      <ul>
        <li>Budžet: €2,000/mesec</li>
        <li>Konverzije: 15</li>
        <li>CPA: €133</li>
      </ul>
      <p className="font-semibold">Search Terms analiza:</p>
      <ul>
        <li>"jeftine stolice" — €180 potrošeno, 0 konverzija</li>
        <li>"polovni nameštaj" — €120 potrošeno, 0 konverzija</li>
        <li>"nameštaj DIY" — €90 potrošeno, 0 konverzija</li>
        <li>"IKEA nameštaj" — €150 potrošeno, 0 konverzija</li>
      </ul>
      <p className="font-semibold">Posle dodavanja negatives:</p>
      <ul>
        <li>Budžet: €2,000/mesec</li>
        <li>Konverzije: 23</li>
        <li>CPA: €87</li>
      </ul>
      <p>
        <strong>Rezultat:</strong> 35% smanjenje CPA samo dodavanjem negative
        keywords.
      </p>
      <p>---</p>

      <h2>Match Types za Negative Keywords</h2>
      <p>Negative match types rade drugačije od positive match types.</p>

      <h3>Negative Broad Match</h3>
      <p>
        <strong>Sintaksa:</strong> besplatno (bez simbola)
      </p>
      <p>
        <strong>Blokira:</strong> Svaku pretragu koja sadrži tu reč, u bilo kom
        redosledu
      </p>
      <p className="font-semibold">Primeri blokiranih pretraga:</p>
      <ul>
        <li>"besplatno preuzimanje crm"</li>
        <li>"crm softver besplatno"</li>
        <li>"da li je salesforce besplatan"</li>
      </ul>
      <p className="font-semibold">NE blokira:</p>
      <ul>
        <li>"besplatni crm" (varijacija reči)</li>
        <li>"free crm" (sinonim)</li>
      </ul>
      <p>
        <strong>Napomena:</strong> Negative Broad ne uključuje sinonime i
        varijacije.
      </p>

      <h3>Negative Phrase Match</h3>
      <p>
        <strong>Sintaksa:</strong> "besplatno preuzimanje"
      </p>
      <p>
        <strong>Blokira:</strong> Pretrage koje sadrže tačnu frazu u tom
        redosledu
      </p>
      <p className="font-semibold">Primeri blokiranih pretraga:</p>
      <ul>
        <li>"besplatno preuzimanje crm"</li>
        <li>"crm besplatno preuzimanje danas"</li>
      </ul>
      <p className="font-semibold">NE blokira:</p>
      <ul>
        <li>"preuzimanje besplatno crm" (drugačiji redosled)</li>
        <li>"besplatna preuzimanja" (varijacija)</li>
      </ul>

      <h3>Negative Exact Match</h3>
      <p>
        <strong>Sintaksa:</strong> [besplatno preuzimanje]
      </p>
      <p>
        <strong>Blokira:</strong> Samo tu tačnu pretragu
      </p>
      <p className="font-semibold">Primeri blokiranih pretraga:</p>
      <ul>
        <li>"besplatno preuzimanje"</li>
      </ul>
      <p className="font-semibold">NE blokira:</p>
      <ul>
        <li>"besplatno preuzimanje crm"</li>
        <li>"besplatno preuzimanje softvera"</li>
      </ul>

      <h3>Koji match type koristiti?</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Situacija</th>
              <th className="py-2 pr-4">Preporučeni match type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Generalno irelevantna reč</td>
              <td className="py-2 pr-4">Negative Broad</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Specifična fraza za blokiranje</td>
              <td className="py-2 pr-4">Negative Phrase</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Samo tačna pretraga problem</td>
              <td className="py-2 pr-4">Negative Exact</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>Default preporuka:</strong> Negative Broad za većinu slučajeva.
      </p>
      <p>---</p>

      <h2>Universal Negative Lista</h2>
      <h3>Besplatno / Free</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`besplatno
besplatan
besplatna
besplatne
free
freeware
opensource
open source
dzabe
gratis`}</code>
      </pre>

      <h3>Posao / Zaposlenje</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`posao
zaposlenje
zapošljavanje
karijera
karijer
plata
plate
zarada
CV
resume
konkurs
oglas za posao
radna mesta
job
jobs
hiring
vacancy
internship
praksa
pripravnik`}</code>
      </pre>

      <h3>Informacione / Edukacione</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`šta je
sta je
što je
sto je
kako
zašto
zasto
why
what is
how to
definicija
pojam
značenje
znacenje
wikipedia
wiki
tutorial
vodič
vodic
uputstvo
kurs
kursevi
obuka
edukacija
učenje
ucenje
seminari
webinar`}</code>
      </pre>

      <h3>DIY / Uradi sam</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`DIY
uradi sam
napravi sam
homemade
handmade
ručno
rucno
tutorial
how to make
kako napraviti`}</code>
      </pre>

      <h3>Jeftino / Budget (ako prodajete premium)</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`jeftino
jeftin
jeftina
najjeftinije
povoljno
povoljna
budget
cheap
cheapest
low cost
discount
popust
akcija
rasprodaja
sniženje
second hand
polovno
polovni
korišćeno
korisceno
rabljeno`}</code>
      </pre>

      <h3>Negativne asocijacije</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`loše
lose
problem
problemi
bug
greška
greska
ne radi
complaint
žalba
zalba
prevara
scam
fake
lažno
lazno
opasno
rizik`}</code>
      </pre>

      <h3>Competitor blockers (opcionalno)</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`[competitor 1 name]
[competitor 2 name]
vs [competitor]
alternativa za [competitor]`}</code>
      </pre>

      <h3>Geografske (ako ne pokrivate)</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`[grad koji ne pokrivate]
[država koju ne pokrivate]
inostranstvo
abroad
international`}</code>
      </pre>

      <h3>B2C blockers (za B2B biznise)</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`za kuću
kućni
za dom
home
personal
privatno
lični
licni`}</code>
      </pre>

      <h3>B2B blockers (za B2C biznise)</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`enterprise
korporativni
corporate
business
b2b
wholesale
veleprodaja`}</code>
      </pre>
      <p>---</p>

      <h2>Negative Keywords po Industriji</h2>
      <h3>eCommerce — Moda/Odeća</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`-- Kvalitet/Cena --
jeftino
polovno
second hand
outlet
imitacija
replika
fake

-- DIY --
kako sašiti
šivenje
pattern
kroj
DIY

-- Informacione --
trendovi
moda 2026
fashion week
modna revija

-- Posao --
modni dizajner posao
rad u butiku
prodavac odeće

-- Nerelevantni stilovi (ako ne prodajete) --
vintage
retro
cosplay
kostim`}</code>
      </pre>

      <h3>eCommerce — Elektronika</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`-- Kvalitet --
polovno
refurbished
korišćeno
broken
pokvaren
popravka
servis
delovi

-- DIY/Tutorial --
kako popraviti
tutorial
teardown
review
unboxing

-- Posao --
tehničar posao
it podrška posao

-- Specifično --
drajveri
drivers
firmware
manual
uputstvo
specifikacije
specs`}</code>
      </pre>

      <h3>B2B / SaaS</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`-- Free/Basic --
besplatno
free
open source
free trial (ako ne nudite)
crack
pirate
nulled

-- Posao --
developer posao
programer plata
it karijera
remote job

-- Edukacija --
kurs
tutorial
kako naučiti
for beginners
za početnike

-- Nerelevantna publika --
student
studenti
startup (ako targetirate enterprise)
enterprise (ako targetirate SMB)
personal use`}</code>
      </pre>

      <h3>Lokalne usluge</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`-- Geografske --
[gradovi koje ne pokrivate]
online
remote
na daljinu

-- Cena --
besplatno
jeftino
cena (ako ne želite price shoppers)

-- Posao --
posao
zapošljavanje
plata
karijer

-- DIY --
uradi sam
kako sam
DIY
tutorial

-- Loša namera --
žalba
tužba
advokat
inspekcija`}</code>
      </pre>

      <h3>Turizam / Hoteli</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`-- Free --
besplatno
free
budget
hostel (ako ste hotel)
camping

-- Posao --
posao u hotelu
recepcioner
konobar posao
turistički vodič posao

-- Irelevantno --
slike
fotografije
video
vlog
blog
iskustva
forum`}</code>
      </pre>

      <h3>Nekretnine</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`-- Tip koji ne pokrivate --
iznajmljivanje (ako prodajete)
prodaja (ako iznajmljujete)
poslovni prostor (ako ste residential)
stan (ako su kuće)

-- Posao --
agent za nekretnine posao
broker
licenca

-- Informacione --
cene nekretnina
tržište nekretnina
prognoza
statistika

-- Loše namere --
foreclosure
ovrha
hipoteka problem`}</code>
      </pre>

      <h3>Fitness / Zdravlje</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`-- Free --
besplatno
free
youtube
app

-- Medicinske (ako niste medicinski) --
doktor
lekar
bolnica
dijagnoza
lek
terapija

-- Ekstremne --
steroidi
anabolici
brzo mršavljenje
ekstremna dijeta

-- Posao --
trener posao
fitness instruktor
nutricionista posao`}</code>
      </pre>
      <p>---</p>

      <h2>Kako Pronaći Negative Keywords</h2>
      <h3>Metoda 1: Search Terms Report (najvažnije)</h3>
      <ol>
        <li>Filter: Last 7 days (ili 14/30)</li>
        <li>Sortirajte po Cost (highest first)</li>
        <li>Pregledajte svaki search term</li>
        <li>Pitanje: "Da li bi ova osoba kupila od mene?"</li>
        <li>Ako NE → Dodajte kao negative</li>
      </ol>
      <p>
        <strong>Frekvencija:</strong> Minimum jednom nedeljno
      </p>

      <h3>Metoda 2: Pre-Launch Brainstorming</h3>
      <ol>
        <li>Zamislite ko NIJE vaš kupac</li>
        <li>Razmislite o ambiguous keywords</li>
        <li>Pogledajte Keyword Planner suggestions</li>
      </ol>

      <h3>Metoda 3: Competitor Research</h3>
      <ol>
        <li>Pretražite vaše ključne reči na Google</li>
        <li>Pogledajte "Searches related to..."</li>
        <li>Identifikujte irelevantne</li>
      </ol>

      <h3>Metoda 4: Google Autocomplete</h3>
      <ol>
        <li>Počnite kucati ključnu reč u Google</li>
        <li>Pogledajte suggestions</li>
        <li>Identifikujte irelevantne</li>
      </ol>
      <p className="font-semibold">Primer:</p>
      <p>
        Kucate: "crm softver" → suggestions: "crm softver besplatno", "crm
        softver posao", "crm softver open source"
      </p>

      <h3>Metoda 5: Customer Support Mining</h3>
      <p>Pitajte support tim:</p>
      <ul>
        <li>Koja pitanja dobijate od ljudi koji NISU pravi kupci?</li>
        <li>Koji su najčešći "pogrešni" kontakti?</li>
      </ul>
      <p>---</p>

      <h2>Organizacija i Struktura</h2>
      <h3>Nivoi dodavanja</h3>
      <ul>
        <li>
          <strong>Account Level (Negative Keyword Lists):</strong> Za universal
          negatives
        </li>
        <li>
          <strong>Campaign Level:</strong> Za campaign-specific negatives
        </li>
        <li>
          <strong>Ad Group Level:</strong> Za granularnu kontrolu
        </li>
      </ul>

      <h3>Preporučena struktura</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Negative Keyword Lists (Account Level):
├── Universal Negatives (svi biznisi)
│   └── besplatno, posao, wikipedia, DIY...
├── Industry Negatives (specifično za vašu industriju)
│   └── polovno, popravka, servis...
└── Brand Negatives (opcionalno)
    └── competitor names koje ne želite

Campaign Level:
└── Campaign-specific exclusions

Ad Group Level:
└── Keyword sculpting (kontrola preklapanja)`}</code>
      </pre>

      <h3>Kako kreirati Negative Keyword List</h3>
      <ol>
        <li>Tools &amp; Settings → Shared library → Negative keyword lists</li>
        <li>Kliknite + za novu listu</li>
        <li>Imenujte listu (npr. "Universal Negatives")</li>
        <li>Dodajte keywords</li>
        <li>Primenite na kampanje</li>
      </ol>

      <h3>Naming convention</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`[Tip] - [Opis]

Primeri:
Universal - Free & Job Terms
Industry - eCommerce Fashion
Campaign - Brand Protection`}</code>
      </pre>
      <p>---</p>

      <h2>Česte Greške</h2>
      <h3>1. Nikada ne proveravaju Search Terms</h3>
      <p>
        <strong>Greška:</strong> Set-and-forget pristup
      </p>
      <p>
        <strong>Posledica:</strong> Kontinuirano bacanje novca
      </p>
      <p>
        <strong>Fix:</strong> Nedeljni Search Terms review
      </p>

      <h3>2. Previše agresivno blokiranje</h3>
      <p>
        <strong>Greška:</strong> Dodavanje previše negatives bez analize
      </p>
      <p>
        <strong>Posledica:</strong> Blokirate i dobre pretrage
      </p>
      <p>
        <strong>Fix:</strong> Proverite volume pre dodavanja, koristite Search
        Terms data
      </p>

      <h3>3. Pogrešan match type</h3>
      <p>
        <strong>Greška:</strong> Exact negative za reč koja treba biti Broad
      </p>
      <p>
        <strong>Posledica:</strong> Varijacije i dalje prolaze
      </p>
      <p>
        <strong>Fix:</strong> Default Broad za opšte termine
      </p>

      <h3>4. Bez liste — sve ručno</h3>
      <p>
        <strong>Greška:</strong> Dodavanje negatives pojedinačno po kampanjama
      </p>
      <p>
        <strong>Posledica:</strong> Nekonzistentnost, propuštanje
      </p>
      <p>
        <strong>Fix:</strong> Negative Keyword Lists za universal terms
      </p>

      <h3>5. Ignorisanje sinonima</h3>
      <p>
        <strong>Greška:</strong> Blokirate "besplatno" ali ne "free"
      </p>
      <p>
        <strong>Posledica:</strong> Engleski termini prolaze
      </p>
      <p>
        <strong>Fix:</strong> Dodajte i srpske i engleske verzije
      </p>

      <h3>6. Blokiranje pre analize</h3>
      <p>
        <strong>Greška:</strong> Automatsko blokiranje bez provere performansi
      </p>
      <p>
        <strong>Posledica:</strong> Možda blokirate nešto što konvertuje
      </p>
      <p>
        <strong>Fix:</strong> Proverite — možda "jeftino" ipak konvertuje kod
        vas
      </p>
      <p>---</p>

      <h2>Negative Keywords Audit Checklist</h2>
      <h3>Mesečni audit</h3>
      <ul>
        <li>Search Terms review (top 100 by cost)</li>
        <li>Nove negative keywords dodane</li>
        <li>Provera da li negatives ne blokiraju dobre pretrage</li>
        <li>Universal lista ažurirana</li>
        <li>Industry lista ažurirana</li>
      </ul>

      <h3>Kvartalni audit</h3>
      <ul>
        <li>Kompletna Search Terms analiza (90 dana)</li>
        <li>Cross-campaign negative analiza</li>
        <li>Competitor negative review</li>
        <li>Liste reorganizacija</li>
      </ul>
      <p>---</p>

      <h2>FAQ</h2>
      <h3>Koliko negative keywords trebam?</h3>
      <p>
        Nema limita. Tipično: 50-200 za starter listu, raste vremenom. Kvalitet
        &gt; kvantitet.
      </p>
      <h3>Da li negative keywords utiču na Quality Score?</h3>
      <p>
        Indirektno — da. Bolji CTR (manje irelevantnih prikaza) → bolji Expected
        CTR → bolji QS.
      </p>
      <h3>Mogu li slučajno blokirati dobre pretrage?</h3>
      <p>
        Da. Zato: (1) koristite data pre dodavanja, (2) proveravajte Search
        Terms nakon dodavanja, (3) budite pažljivi sa Broad negatives.
      </p>
      <h3>Negative Broad vs Negative Phrase — kada koji?</h3>
      <p>
        Broad: Za opšte termine koje uvek želite blokirati (besplatno, posao).
        Phrase: Za specifične fraze gde redosled matters. Exact: Retko — samo
        za vrlo specifične slučajeve.
      </p>
      <h3>Koliko često da proveravam Search Terms?</h3>
      <p>
        Minimum: jednom nedeljno. Idealno (prva 30 dana): svaka 2-3 dana. Za
        mature kampanje: jednom nedeljno + mesečna deep dive.
      </p>
      <h3>Da li postoje "obavezne" negative keywords?</h3>
      <p>
        Da — universal lista. Ali uvek prilagodite svom biznisu. Možda
        "besplatno" nije negative ako nudite free trial.
      </p>
      <p>---</p>

      <h2>Sledeći koraci</h2>
      <ul>
        <li>
          <Link href="/blog/kljucne-reci-vodic" className="underline">
            Ključne Reči: Kompletan Vodič
          </Link>
        </li>
        <li>
          <Link href="/blog/quality-score-vodic" className="underline">
            Quality Score: Kako Ga Poboljšati
          </Link>
        </li>
        <li>
          <Link href="/blog/google-ads-audit-vodic" className="underline">
            Google Ads Audit: Checklist
          </Link>
        </li>
      </ul>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Januar 2026
      </div>
      <div className="text-sm text-gray-500">
        Autor: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}

function QualityScoreVodicPost() {
  return (
    <>
      <h2>TL;DR</h2>
      <p>
        Quality Score (QS) je Google-ova ocena relevantnosti vaših ključnih
        reči, oglasa i landing page-a na skali od 1-10. Direktno utiče na Ad
        Rank i CPC. Viši QS = bolje pozicije + niži troškovi. QS se sastoji od
        tri komponente: Expected CTR (~40%), Ad Relevance (~20%), i Landing Page
        Experience (~40%). Poboljšanje QS sa 5 na 7 može smanjiti CPC za 28%. U
        ovom vodiču naučićete tačno kako da poboljšate svaku komponentu.
      </p>
      <p>---</p>

      <h2>Šta Je Quality Score</h2>
      <p>
        Quality Score je Google-ova ocena relevantnosti i kvaliteta vaših:
      </p>
      <ul>
        <li>Ključnih reči</li>
        <li>Oglasa</li>
        <li>Landing page-a</li>
      </ul>
      <p>Ocenjuje se na skali <strong>1-10</strong> za svaku ključnu reč.</p>

      <h3>Šta QS NIJE</h3>
      <ul>
        <li>Nije faktor u auction-u u realnom vremenu (direktno)</li>
        <li>Nije jedina metrika koja određuje uspeh</li>
        <li>Nije fiksan — menja se vremenom</li>
      </ul>

      <h3>Šta QS JESTE</h3>
      <ul>
        <li>Dijagnostički alat za optimizaciju</li>
        <li>Indikator relevantnosti</li>
        <li>Prediktor troškova i performansi</li>
      </ul>
      <p>---</p>

      <h2>Zašto Je QS Važan</h2>
      <h3>1. Utiče na Ad Rank</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Ad Rank = Max CPC Bid × Quality Score × Expected Impact of Extensions`}</code>
      </pre>
      <p>Viši QS = viši Ad Rank = bolja pozicija bez povećanja bid-a.</p>

      <h3>2. Smanjuje CPC</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Quality Score</th>
              <th className="py-2 pr-4">CPC Adjustment</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">10</td>
              <td className="py-2 pr-4">-50%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">9</td>
              <td className="py-2 pr-4">-44%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">8</td>
              <td className="py-2 pr-4">-37%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">7</td>
              <td className="py-2 pr-4">-28%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">6</td>
              <td className="py-2 pr-4">-17%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">5</td>
              <td className="py-2 pr-4">Baseline (0%)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">4</td>
              <td className="py-2 pr-4">+25%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">3</td>
              <td className="py-2 pr-4">+67%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">2</td>
              <td className="py-2 pr-4">+150%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">1</td>
              <td className="py-2 pr-4">+400%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="font-semibold">Primer:</p>
      <ul>
        <li>Baseline CPC (QS 5): €1.00</li>
        <li>QS 7: €0.72 (-28%)</li>
        <li>QS 3: €1.67 (+67%)</li>
      </ul>

      <h3>3. Povećava Impression Share</h3>
      <p>Viši QS znači da ćete se prikazivati češće za isti budžet.</p>

      <h3>4. Omogućava pristup premium pozicijama</h3>
      <p>
        Neke pozicije zahtevaju minimum Ad Rank threshold. Bez dovoljno QS,
        možda ne možete doći do vrha.
      </p>

      <h3>ROI impact</h3>
      <p className="font-semibold">Scenario:</p>
      <ul>
        <li>Mesečni spend: €5,000</li>
        <li>Trenutni QS: 5</li>
        <li>Cilj QS: 7</li>
      </ul>
      <p className="font-semibold">Rezultat poboljšanja:</p>
      <ul>
        <li>CPC smanjenje: 28%</li>
        <li>Isto spend, 28% više klikova</li>
        <li>Ili: isti klikovi, €1,400 uštede mesečno</li>
      </ul>
      <p>---</p>

      <h2>Komponente Quality Score-a</h2>
      <p>Quality Score ima tri komponente, svaka ocenjena kao:</p>
      <ul>
        <li>Above average</li>
        <li>Average</li>
        <li>Below average</li>
      </ul>

      <h3>1. Expected CTR (~40% uticaja)</h3>
      <p>
        <strong>Šta meri:</strong> Verovatnoća da će neko kliknuti na vaš oglas
        kada se prikaže za tu ključnu reč.
      </p>
      <p className="font-semibold">Kako poboljšati:</p>
      <ul>
        <li>Bolje headline-ove</li>
        <li>Relevantnije oglase</li>
        <li>Korišćenje extensions</li>
      </ul>

      <h3>2. Ad Relevance (~20% uticaja)</h3>
      <p>
        <strong>Šta meri:</strong> Koliko je vaš oglas relevantan za ključnu reč.
      </p>
      <p className="font-semibold">Kako poboljšati:</p>
      <ul>
        <li>Ključna reč u headline-u</li>
        <li>Uža grupacija ključnih reči</li>
        <li>Specifični oglasi po grupi</li>
      </ul>

      <h3>3. Landing Page Experience (~40% uticaja)</h3>
      <p>
        <strong>Šta meri:</strong> Koliko je landing page koristan i relevantan
        za korisnika.
      </p>
      <p className="font-semibold">Kako poboljšati:</p>
      <ul>
        <li>Brži sajt</li>
        <li>Relevantan sadržaj</li>
        <li>Mobile optimizacija</li>
        <li>Jasna konverziona akcija</li>
      </ul>
      <p>---</p>

      <h2>Kako Proveriti Quality Score</h2>
      <h3>Korak 1: Dodajte QS kolone</h3>
      <ol>
        <li>Idite na Keywords tab</li>
        <li>Kliknite na Columns ikonu</li>
        <li>Izaberite Modify columns</li>
        <li>
          Pod Quality Score, dodajte: Quality Score, Exp. CTR, Ad relevance,
          Landing page exp.
        </li>
      </ol>

      <h3>Korak 2: Analizirajte</h3>
      <ul>
        <li>QS 1-4: Hitna pažnja potrebna</li>
        <li>QS 5-6: Prioritet za poboljšanje</li>
        <li>QS 7-8: Dobro, održavajte</li>
        <li>QS 9-10: Odlično</li>
      </ul>

      <h3>Korak 3: Identifikujte problem</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Exp. CTR</th>
              <th className="py-2 pr-4">Ad Relevance</th>
              <th className="py-2 pr-4">LP Exp.</th>
              <th className="py-2 pr-4">Primarni fokus</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Below avg</td>
              <td className="py-2 pr-4">Average</td>
              <td className="py-2 pr-4">Average</td>
              <td className="py-2 pr-4">Poboljšaj oglas (CTR)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Average</td>
              <td className="py-2 pr-4">Below avg</td>
              <td className="py-2 pr-4">Average</td>
              <td className="py-2 pr-4">Poboljšaj relevantnost</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Average</td>
              <td className="py-2 pr-4">Average</td>
              <td className="py-2 pr-4">Below avg</td>
              <td className="py-2 pr-4">Poboljšaj LP</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Below avg</td>
              <td className="py-2 pr-4">Below avg</td>
              <td className="py-2 pr-4">Average</td>
              <td className="py-2 pr-4">Restrukturiraj Ad Group</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Below avg</td>
              <td className="py-2 pr-4">Below avg</td>
              <td className="py-2 pr-4">Below avg</td>
              <td className="py-2 pr-4">Ozbiljna revizija potrebna</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>---</p>

      <h2>Poboljšanje Expected CTR</h2>
      <p>Expected CTR je najvažnija komponenta.</p>
      <h3>Taktika 1: Ključna reč u Headline</h3>
      <p>
        <strong>Loše:</strong> "Kvalitetni proizvodi | Naručite danas"
      </p>
      <p>
        <strong>Bolje:</strong> "CRM Softver Za Mala Preduzeća | Besplatan Trial"
      </p>

      <h3>Taktika 2: Koristite brojke</h3>
      <ul>
        <li>"Preko 500 Proizvoda Na Stanju"</li>
        <li>"Uštedite Do 40%"</li>
        <li>"30 Dana Garancije"</li>
        <li>"24/7 Podrška"</li>
      </ul>

      <h3>Taktika 3: Jak CTA</h3>
      <ul>
        <li>"Naručite Danas"</li>
        <li>"Besplatna Procena"</li>
        <li>"Započnite Trial"</li>
        <li>"Preuzmite Sada"</li>
      </ul>

      <h3>Taktika 4: USP u headline</h3>
      <ul>
        <li>"Jedini Sa Garancijom Povrata"</li>
        <li>"Najpovoljnije Cene U Srbiji"</li>
        <li>"Dostava Istog Dana"</li>
      </ul>

      <h3>Taktika 5: Testirajte varijante</h3>
      <p>
        Kreirajte 3-5 RSA varijanti sa različitim messaging angles, CTA-ovima i
        USP-ovima.
      </p>

      <h3>Taktika 6: Extensions</h3>
      <p>Extensions povećavaju veličinu oglasa i CTR:</p>
      <ul>
        <li>Sitelinks: +10-20% CTR</li>
        <li>Callouts: +5-10% CTR</li>
        <li>Structured Snippets: +5-10% CTR</li>
      </ul>
      <p>
        <strong>Minimum:</strong> Sitelinks + Callouts + Structured Snippets za
        svaku kampanju.
      </p>

      <h3>Taktika 7: Dynamic Keyword Insertion (oprezno)</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Headline: {KeyWord:CRM Softver} - Besplatan Trial`}</code>
      </pre>
      <p>
        Automatski ubacuje search term u headline. Povećava relevantnost, ali
        može kreirati čudne kombinacije.
      </p>
      <p>---</p>

      <h2>Poboljšanje Ad Relevance</h2>
      <h3>Taktika 1: Tematska grupacija</h3>
      <p>
        <strong>Problem:</strong> Ad Group sa 50 različitih ključnih reči
      </p>
      <p>
        <strong>Rešenje:</strong> 10-20 ključnih reči po Ad Group, tematski
        povezane
      </p>

      <h3>Taktika 2: Ključna reč u oglasu</h3>
      <p className="font-semibold">Primer:</p>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Headline 1: CRM Za Mala Preduzeća
Headline 2: Jednostavan CRM Za Mali Biznis
Headline 3: CRM Sistem Za Malu Firmu`}</code>
      </pre>

      <h3>Taktika 3: Message match</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Pretraga</th>
              <th className="py-2 pr-4">Očekivani oglas fokus</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">"crm cena"</td>
              <td className="py-2 pr-4">Cene, paketi, ROI</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">"crm demo"</td>
              <td className="py-2 pr-4">Demo, trial, test</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">"crm za prodaju"</td>
              <td className="py-2 pr-4">Sales features</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Taktika 4: Odvojene Ad Groups za različite intente</h3>
      <ul>
        <li>Ad Group: CRM cena → Oglas o cenama</li>
        <li>Ad Group: CRM demo → Oglas o demo-u</li>
        <li>Ad Group: CRM features → Oglas o funkcijama</li>
      </ul>

      <h3>Taktika 5: Izbegavajte generic oglase</h3>
      <p className="font-semibold">Loše (generic):</p>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Kvalitetni Proizvodi
Najbolja Ponuda
Posetite Nas`}</code>
      </pre>
      <p className="font-semibold">Bolje (specifično):</p>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`CRM Softver - 14 Dana Besplatno
Pipeline Management Za Prodajni Tim
Povećajte Prodaju 30%`}</code>
      </pre>
      <p>---</p>

      <h2>Poboljšanje Landing Page Experience</h2>
      <h3>Taktika 1: Relevantnost sadržaja</h3>
      <p>
        Landing page mora odgovarati ključnoj reči i oglasu.
      </p>
      <p>
        <strong>Loše:</strong> Svi oglasi vode na homepage
      </p>
      <p>
        <strong>Bolje:</strong> Dedicirane LP za svaku temu/Ad Group
      </p>

      <h3>Taktika 2: Page Speed</h3>
      <p>Cilj: &lt; 3 sekunde load time.</p>
      <p className="font-semibold">Kako poboljšati:</p>
      <ul>
        <li>Kompresija slika (WebP)</li>
        <li>Minifikacija CSS/JS</li>
        <li>CDN</li>
        <li>Caching</li>
        <li>Lazy loading</li>
      </ul>

      <h3>Taktika 3: Mobile Optimization</h3>
      <ul>
        <li>Responsive</li>
        <li>Readable bez zumiranja</li>
        <li>Klikabilne buttons</li>
        <li>Brz na mobile</li>
      </ul>

      <h3>Taktika 4: Clear Value Proposition</h3>
      <p>
        Iznad fold-a mora biti jasno: šta nudite, zašto ste bolji, šta korisnik
        treba da uradi.
      </p>

      <h3>Taktika 5: Easy Navigation</h3>
      <ul>
        <li>Jasna struktura</li>
        <li>Korisnik može naći šta traži</li>
        <li>Kontakt informacije vidljive</li>
      </ul>

      <h3>Taktika 6: Trust Signals</h3>
      <ul>
        <li>Reviews/testimonials</li>
        <li>Trust badges</li>
        <li>Security certificates (SSL)</li>
        <li>Client logos</li>
        <li>Garancije</li>
      </ul>

      <h3>Taktika 7: Transparency</h3>
      <ul>
        <li>Kontakt informacije</li>
        <li>Privacy policy</li>
        <li>Terms of service</li>
        <li>About us</li>
        <li>Fizička adresa (za lokalne biznise)</li>
      </ul>

      <h3>Landing Page Checklist</h3>
      <ul>
        <li>Relevantna za ključnu reč</li>
        <li>Message match sa oglasom</li>
        <li>Load time &lt; 3s</li>
        <li>Mobile-friendly</li>
        <li>Jasan CTA iznad fold-a</li>
        <li>Trust signals prisutni</li>
        <li>Kontakt informacije vidljive</li>
        <li>SSL certificate (https)</li>
        <li>No intrusive pop-ups</li>
      </ul>
      <p>---</p>

      <h2>Quality Score po Tipu Kampanje</h2>
      <h3>Search Campaigns</h3>
      <p>
        QS je najvažniji i najprimenljiviji. Sve gore navedeno se odnosi
        primarno na Search.
      </p>
      <h3>Display Campaigns</h3>
      <p>
        Display ima drugačiji QS sistem — manje transparentan. Fokus je na: Ad
        relevance, Landing page experience, Historical performance.
      </p>
      <h3>Shopping Campaigns</h3>
      <p>
        Shopping nema klasičan QS. Umesto toga, kvalitet se meri kroz: Product
        feed kvalitet, Price competitiveness, Seller ratings.
      </p>
      <h3>Performance Max</h3>
      <p>PMax nema vidljiv QS. Google koristi interne signale kvaliteta.</p>
      <p>---</p>

      <h2>Quality Score Improvement Plan</h2>
      <h3>Prioritizacija</h3>
      <ol>
        <li>Highest spend keywords sa niskim QS</li>
        <li>Highest conversion keywords sa niskim QS</li>
        <li>Below average komponente</li>
      </ol>

      <h3>30-dnevni plan</h3>
      <p className="font-semibold">Nedelja 1: Audit</p>
      <ul>
        <li>Dodajte QS kolone</li>
        <li>Identifikujte problematične keywords</li>
        <li>Analizirajte komponente</li>
      </ul>
      <p className="font-semibold">Nedelja 2: Ad Relevance</p>
      <ul>
        <li>Restrukturirajte široke Ad Groups</li>
        <li>Napišite specifične oglase</li>
        <li>Ubacite ključne reči u headline-ove</li>
      </ul>
      <p className="font-semibold">Nedelja 3: Landing Pages</p>
      <ul>
        <li>Proverite page speed</li>
        <li>Kreirajte dedicirane LP ako potrebno</li>
        <li>Dodajte trust signals</li>
      </ul>
      <p className="font-semibold">Nedelja 4: CTR Optimization</p>
      <ul>
        <li>Testirajte nove oglase</li>
        <li>Dodajte sve extensions</li>
        <li>A/B test headlines</li>
      </ul>
      <p className="font-semibold">Ongoing:</p>
      <ul>
        <li>Nedeljni monitoring QS</li>
        <li>Kontinuirano testiranje</li>
        <li>LP optimization</li>
      </ul>
      <p>---</p>

      <h2>Česte Greške</h2>
      <h3>1. Opsesija sa QS 10</h3>
      <p>
        <strong>Greška:</strong> Cilj da sve bude 10
      </p>
      <p>
        <strong>Realnost:</strong> QS 7-8 je odličan. 10 je teško i nije uvek
        potrebno.
      </p>
      <p>
        <strong>Fix:</strong> Fokus na business metrics, ne samo QS.
      </p>

      <h3>2. Ignorisanje QS potpuno</h3>
      <p>
        <strong>Greška:</strong> "QS nije bitan, samo konverzije"
      </p>
      <p>
        <strong>Realnost:</strong> Nizak QS = viši troškovi = lošiji ROI
      </p>
      <p>
        <strong>Fix:</strong> Balans — QS kao dijagnostički alat, ne jedina
        metrika.
      </p>

      <h3>3. Previše keywords u Ad Group</h3>
      <p>
        <strong>Greška:</strong> 50+ keywords u jednoj grupi
      </p>
      <p>
        <strong>Rezultat:</strong> Nemoguće napisati relevantan oglas
      </p>
      <p>
        <strong>Fix:</strong> Tematske grupe, 10-20 keywords max
      </p>

      <h3>4. Landing page = Homepage</h3>
      <p>
        <strong>Greška:</strong> Svi oglasi vode na homepage
      </p>
      <p>
        <strong>Rezultat:</strong> Nizak LP Experience score
      </p>
      <p>
        <strong>Fix:</strong> Dedicirane LP za svaku temu
      </p>

      <h3>5. Ignorisanje mobile</h3>
      <p>
        <strong>Greška:</strong> LP nije mobile-optimized
      </p>
      <p>
        <strong>Rezultat:</strong> Loš LP Experience za 60%+ korisnika
      </p>
      <p>
        <strong>Fix:</strong> Mobile-first design
      </p>

      <h3>6. Spor sajt</h3>
      <p>
        <strong>Greška:</strong> LP se učitava 5+ sekundi
      </p>
      <p>
        <strong>Rezultat:</strong> Nizak LP Experience + visok bounce rate
      </p>
      <p>
        <strong>Fix:</strong> Speed optimization je prioritet
      </p>
      <p>---</p>

      <h2>FAQ</h2>
      <h3>Koji je "dobar" Quality Score?</h3>
      <p>7+ je dobar. 8-9 je odličan. 10 je idealan ali nije uvek potreban.</p>
      <h3>Koliko brzo se QS menja?</h3>
      <p>
        QS se ažurira u realnom vremenu, ali promene vidite postepeno (dani do
        nedelje). Veće promene zahtevaju više data.
      </p>
      <h3>Da li QS utiče na Display/Shopping?</h3>
      <p>
        Display ima sličan ali manje transparentan sistem. Shopping koristi
        druge signale kvaliteta (feed quality, ratings).
      </p>
      <h3>Mogu li imati visok QS i loše konverzije?</h3>
      <p>
        Da. QS meri relevantnost, ne kvalitet ponude. Možete imati relevantan
        oglas za lošu ponudu.
      </p>
      <h3>Zašto imam nizak QS za branded keywords?</h3>
      <p>
        Verovatno konkurenti bidduju na vaš brand. Branded keywords bi trebalo
        da imaju QS 8-10. Ako ne, proverite da li: imate brand u oglasu, LP je
        brand-relevantna, nema tehničkih problema.
      </p>
      <h3>Da li pauziranje loših keywords poboljšava overall QS?</h3>
      <p>
        Indirektno — ne postoji "account level QS", ali bolje performanse
        generalno pomažu.
      </p>
      <p>---</p>

      <h2>Sledeći koraci</h2>
      <ul>
        <li>
          <Link href="/blog/kljucne-reci-vodic" className="underline">
            Ključne Reči za Google Ads
          </Link>
        </li>
        <li>
          <Link href="/blog/negativne-kljucne-reci" className="underline">
            Negative Keywords: Kompletna Lista
          </Link>
        </li>
        <li>
          <Link href="/blog/google-ads-audit-vodic" className="underline">
            Google Ads Audit Checklist
          </Link>
        </li>
      </ul>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Januar 2026
      </div>
      <div className="text-sm text-gray-500">
        Autor: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}

function RemarketingVodicPost() {
  return (
    <>
      <h2>TL;DR</h2>
      <p>
        Remarketing (retargeting) vam omogućava da prikazujete oglase ljudima
        koji su već posetili vaš sajt ili interagovali sa vašim biznisom. To je
        najisplativiji tip Google Ads kampanja sa CTR-om 2-3x višim od cold
        traffic-a i CPA 50-70% nižim. Ključ uspeha je segmentacija — ne
        tretirajte sve posetioce isto. U ovom vodiču naučićete kompletan setup,
        segmentaciju i strategije za maksimalan efekat.
      </p>
      <p>---</p>

      <h2>Šta Je Remarketing</h2>
      <p>
        Remarketing (ili retargeting) je strategija koja vam omogućava da
        prikazujete oglase ljudima koji su već:
      </p>
      <ul>
        <li>Posetili vaš sajt</li>
        <li>Koristili vašu aplikaciju</li>
        <li>Gledali vaše YouTube video-e</li>
        <li>Dali vam email adresu</li>
        <li>Interagovali sa vašim oglasima</li>
      </ul>

      <h3>Kako funkcioniše</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`1. Korisnik poseti vaš sajt
         ↓
2. Google tag "označi" korisnika cookie-jem
         ↓
3. Korisnik napusti sajt bez konverzije
         ↓
4. Korisnik pretražuje Google ili gleda YouTube
         ↓
5. Vaš remarketing oglas mu se prikazuje
         ↓
6. Korisnik se vraća i konvertuje`}</code>
      </pre>

      <h3>Remarketing vs Prospecting</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Aspect</th>
              <th className="py-2 pr-4">Remarketing</th>
              <th className="py-2 pr-4">Prospecting (Cold)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Publika</td>
              <td className="py-2 pr-4">Već vas znaju</td>
              <td className="py-2 pr-4">Ne znaju vas</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Intent</td>
              <td className="py-2 pr-4">Pokazali interes</td>
              <td className="py-2 pr-4">Pretpostavljen interes</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">CTR</td>
              <td className="py-2 pr-4">2-3x viši</td>
              <td className="py-2 pr-4">Baseline</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">CPA</td>
              <td className="py-2 pr-4">50-70% niži</td>
              <td className="py-2 pr-4">Baseline</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Volume</td>
              <td className="py-2 pr-4">Ograničen (vaš traffic)</td>
              <td className="py-2 pr-4">Neograničen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>---</p>

      <h2>Zašto Remarketing Radi</h2>
      <h3>1. Familiarity Effect</h3>
      <p>Ljudi preferiraju brendove koje prepoznaju.</p>
      <h3>2. Multiple Touchpoints</h3>
      <p>Remarketing obezbeđuje dodatne touchpoint-e.</p>
      <h3>3. Intent Already Shown</h3>
      <p>Ko je posetio vaš sajt već je pokazao interes.</p>
      <h3>4. Timing</h3>
      <p>Targetirate ljude u različitim fazama odlučivanja.</p>

      <h3>Statistika</h3>
      <ul>
        <li>96% posetilaca napusti sajt bez konverzije</li>
        <li>Remarketing povećava conversion rate za 50-70%</li>
        <li>Cart abandonment remarketing vraća 10-15% napuštenih korpi</li>
        <li>Average ROI za remarketing: 300-500%</li>
      </ul>
      <p>---</p>

      <h2>Tipovi Remarketing Kampanja</h2>
      <ul>
        <li><strong>Standard Remarketing (Display):</strong> baneri na GDN</li>
        <li><strong>RLSA:</strong> remarketing na Search-u</li>
        <li><strong>Dynamic Remarketing:</strong> proizvodi koje je korisnik gledao</li>
        <li><strong>Video Remarketing:</strong> YouTube audience</li>
        <li><strong>Customer Match:</strong> email lista</li>
        <li><strong>Similar Audiences:</strong> lookalike publika</li>
      </ul>
      <p>---</p>

      <h2>Setup: Kako Postaviti Remarketing</h2>
      <h3>Korak 1: Google Ads Tag Setup</h3>
      <p className="font-semibold">Opcija A: Google Ads Tag</p>
      <ol>
        <li>Google Ads → Tools &amp; Settings → Audience Manager</li>
        <li>Kliknite Audience sources</li>
        <li>Pod Google Ads tag, kliknite Set up tag</li>
        <li>Izaberite opcije (standard/dynamic)</li>
        <li>Kopirajte tag kod</li>
        <li>Instalirajte na svaku stranicu sajta (u head)</li>
      </ol>
      <p className="font-semibold">Opcija B: Google Tag Manager (preporučeno)</p>
      <ol>
        <li>Kreirajte novi Tag u GTM</li>
        <li>Tag type: Google Ads Remarketing</li>
        <li>Unesite Conversion ID</li>
        <li>Trigger: All Pages</li>
        <li>Publish</li>
      </ol>

      <h3>Korak 2: Povežite Google Analytics</h3>
      <ol>
        <li>Google Ads → Tools &amp; Settings → Linked accounts</li>
        <li>Kliknite Google Analytics (GA4)</li>
        <li>Povežite property</li>
        <li>Omogućite remarketing</li>
      </ol>

      <h3>Korak 3: Verifikujte tag</h3>
      <ol>
        <li>Audience Manager → Audience sources</li>
        <li>Status treba da bude "Active"</li>
        <li>Proverite da li se lista puni</li>
      </ol>
      <p>---</p>

      <h2>Kreiranje Remarketing Lista</h2>
      <p>
        Tools &amp; Settings → Audience Manager → Audience lists → +.
      </p>
      <h3>Tipovi lista</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`1) Website visitors
URL contains: /
Membership duration: 30 dana

2) Specific page visitors
URL contains: /products/
Membership duration: 14 dana

3) Visitors who didn't convert
All visitors MINUS Thank you page visitors
Membership duration: 30 dana

4) Cart abandoners
URL contains: /cart/ MINUS /thank-you/
Membership duration: 7 dana

5) Past converters
URL contains: /thank-you/
Membership duration: 180 dana`}</code>
      </pre>

      <h3>Minimum veličina liste</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Mreža</th>
              <th className="py-2 pr-4">Minimum korisnika</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Display</td>
              <td className="py-2 pr-4">100</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Search (RLSA)</td>
              <td className="py-2 pr-4">1,000</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">YouTube</td>
              <td className="py-2 pr-4">1,000</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Gmail</td>
              <td className="py-2 pr-4">100</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Membership Duration</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Duration</th>
              <th className="py-2 pr-4">Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">1-7 dana</td>
              <td className="py-2 pr-4">Cart abandoners</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">7-14 dana</td>
              <td className="py-2 pr-4">Product viewers</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">30 dana</td>
              <td className="py-2 pr-4">General visitors</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">60-90 dana</td>
              <td className="py-2 pr-4">Considered purchases</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">180-540 dana</td>
              <td className="py-2 pr-4">Past customers</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>---</p>

      <h2>Segmentacija Strategije</h2>
      <h3>Funnel-based segmentacija</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`TOP FUNNEL: Svi posetioci
- Generalni awareness
- Niži bid, širi reach

MID FUNNEL: Product/service page viewers
- Srednji bid, relevantna poruka

BOTTOM FUNNEL: Cart abandoners / Pricing
- Visok bid, urgency/ponuda

POST-PURCHASE: Kupci
- Cross-sell, upsell`}</code>
      </pre>

      <h3>Time-based segmentacija</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Segment</th>
              <th className="py-2 pr-4">Window</th>
              <th className="py-2 pr-4">Strategija</th>
              <th className="py-2 pr-4">Bid</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Hot</td>
              <td className="py-2 pr-4">1-3 dana</td>
              <td className="py-2 pr-4">Agresivno, urgency</td>
              <td className="py-2 pr-4">Highest</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Warm</td>
              <td className="py-2 pr-4">4-14 dana</td>
              <td className="py-2 pr-4">Reminder, benefits</td>
              <td className="py-2 pr-4">High</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Cool</td>
              <td className="py-2 pr-4">15-30 dana</td>
              <td className="py-2 pr-4">Re-engagement</td>
              <td className="py-2 pr-4">Medium</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Cold</td>
              <td className="py-2 pr-4">30-90 dana</td>
              <td className="py-2 pr-4">New offer, changes</td>
              <td className="py-2 pr-4">Low</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Behavior-based segmentacija</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900">
              <th className="py-2 pr-4">Behavior</th>
              <th className="py-2 pr-4">Lista</th>
              <th className="py-2 pr-4">Message</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Homepage only</td>
              <td className="py-2 pr-4">Low intent</td>
              <td className="py-2 pr-4">General awareness</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Category browsers</td>
              <td className="py-2 pr-4">Medium intent</td>
              <td className="py-2 pr-4">Category benefits</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Product viewers</td>
              <td className="py-2 pr-4">High intent</td>
              <td className="py-2 pr-4">Product-specific</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Cart abandoners</td>
              <td className="py-2 pr-4">Highest intent</td>
              <td className="py-2 pr-4">Urgency, discount</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-2 pr-4">Searched for you</td>
              <td className="py-2 pr-4">Brand intent</td>
              <td className="py-2 pr-4">Trust, USP</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Primer kompletne segmentacije</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`Campaign: Remarketing
│
├── Ad Group: Cart Abandoners (1-7 days)
│   ├── Lista: /cart/ visitors - /thank-you/
│   ├── Bid: Highest
│   └── Message: "Završite kupovinu - 10% popust"
│
├── Ad Group: Product Viewers (7-14 days)
│   ├── Lista: /products/ visitors
│   ├── Bid: High
│   └── Message: "Proizvod koji ste gledali"
│
├── Ad Group: All Visitors (14-30 days)
│   ├── Lista: All visitors - converters
│   ├── Bid: Medium
│   └── Message: "Zašto izabrati nas"
│
└── Ad Group: Past Customers (90-180 days)
    ├── Lista: /thank-you/ visitors
    ├── Bid: Medium
    └── Message: "Novi proizvodi za vas"`}</code>
      </pre>
      <p>---</p>

      <h2>Display Remarketing</h2>
      <h3>Kreiranje Display kampanje</h3>
      <ol>
        <li>New campaign → Goal: Sales ili Leads</li>
        <li>Campaign type: Display</li>
        <li>Standard display campaign</li>
        <li>Audience: remarketing liste</li>
        <li>Targeting (ne Observation)</li>
      </ol>

      <h3>Creative best practices</h3>
      <p className="font-semibold">Ad sizes (obavezne):</p>
      <ul>
        <li>300x250</li>
        <li>728x90</li>
        <li>160x600</li>
        <li>320x50</li>
        <li>300x600</li>
      </ul>
      <p className="font-semibold">Responsive Display Ads:</p>
      <ul>
        <li>Upload: logo, slike, headlines, descriptions</li>
        <li>Google automatski kreira kombinacije</li>
      </ul>
      <p className="font-semibold">Creative tips:</p>
      <ul>
        <li>Jasna ponuda/benefit</li>
        <li>Strong CTA</li>
        <li>Brand recognition elementi</li>
        <li>Urgency ako relevantno</li>
      </ul>

      <h3>Frequency Capping</h3>
      <p>Preporuka: 3-5 impressions po danu, 15-20 nedeljno.</p>
      <p>Campaign Settings → Additional settings → Frequency capping</p>

      <h3>Bid Strategy</h3>
      <ul>
        <li>Target CPA — ako imate dovoljno konverzija</li>
        <li>Maximize conversions — za početak</li>
        <li>Manual CPC — za punu kontrolu</li>
      </ul>
      <p>---</p>

      <h2>RLSA (Remarketing Lists for Search Ads)</h2>
      <h3>Dve strategije</h3>
      <p className="font-semibold">1. Bid Adjustments</p>
      <ol>
        <li>Otvorite postojeću Search kampanju</li>
        <li>Audiences → + → Izaberite remarketing listu</li>
        <li>Setting: Observation</li>
        <li>Bid adjustment: +20% do +100%</li>
      </ol>
      <p className="font-semibold">2. Separate Campaign</p>
      <ol>
        <li>Nova Search kampanja</li>
        <li>Audiences → + → Izaberite remarketing listu</li>
        <li>Setting: Targeting</li>
        <li>Možete koristiti šire keywords</li>
      </ol>

      <h3>RLSA Best Practices</h3>
      <ul>
        <li>Bid higher for past visitors</li>
        <li>Test broader keywords</li>
        <li>Different messaging</li>
        <li>Higher positions</li>
      </ul>
      <p>---</p>

      <h2>Dynamic Remarketing</h2>
      <p>
        Automatski prikazuje oglase sa proizvodima koje je korisnik gledao.
      </p>
      <h3>Setup Requirements</h3>
      <ol>
        <li>Product Feed u Google Merchant Center</li>
        <li>Dynamic remarketing tag sa custom parameters</li>
        <li>Feed linking sa Google Ads</li>
      </ol>
      <h3>Tag sa custom parameters</h3>
      <pre className="border-2 border-gray-900 rounded-lg p-4 bg-gray-50 text-sm">
        <code>{`gtag('event', 'view_item', {
  'send_to': 'AW-XXXXXXXXX',
  'value': 129.00,
  'items': [{
    'id': 'SKU12345',
    'google_business_vertical': 'retail'
  }]
});`}</code>
      </pre>
      <h3>Best Practices</h3>
      <ul>
        <li>High-quality product images</li>
        <li>Updated prices</li>
        <li>Sufficient inventory</li>
        <li>Segmentation po kategorijama</li>
      </ul>
      <p>---</p>

      <h2>YouTube Remarketing</h2>
      <h3>Video Remarketing Lists</h3>
      <ol>
        <li>Audience Manager → + → YouTube users</li>
        <li>Viewed any video ili specific video</li>
        <li>Subscribed / visited channel / liked / commented</li>
      </ol>
      <h3>YouTube Remarketing Ads</h3>
      <ul>
        <li>Skippable in-stream</li>
        <li>Non-skippable (15-20 sec)</li>
        <li>Bumper ads (6 sec)</li>
        <li>Discovery ads</li>
      </ul>
      <h3>Strategije</h3>
      <ul>
        <li>Retarget video viewers on Display</li>
        <li>Retarget site visitors on YouTube</li>
        <li>Sequential messaging</li>
      </ul>
      <p>---</p>

      <h2>Best Practices</h2>
      <ul>
        <li>Exclude converters (osim upsell)</li>
        <li>Frequency cap: 3-5/dan, 15-20/nedelja</li>
        <li>Burn pixel za offline konverzije</li>
        <li>Fresh creatives (svakih 2-4 nedelje)</li>
        <li>Segment aggressively</li>
        <li>Test offers (popust, besplatna dostava)</li>
        <li>Cross-device tracking</li>
        <li>Privacy compliance (GDPR)</li>
      </ul>
      <p>---</p>

      <h2>Česte Greške</h2>
      <ul>
        <li>Jedna lista za sve</li>
        <li>Bez frequency cap-a</li>
        <li>Ne exclude-uju convertere</li>
        <li>Zastareli creatives</li>
        <li>Ista poruka svima</li>
        <li>Prekratki windows</li>
      </ul>
      <p>---</p>

      <h2>FAQ</h2>
      <h3>Koliko traje remarketing cookie?</h3>
      <p>Možete postaviti 1-540 dana. Default je 30.</p>
      <h3>Kolika lista mi treba za početak?</h3>
      <p>Minimum 100 za Display, 1,000 za Search/YouTube.</p>
      <h3>Da li remarketing radi sa iOS 14+ ograničenjima?</h3>
      <p>
        Delimično. First-party data i dalje radi, third-party tracking je
        ograničen.
      </p>
      <h3>Koliko da trošim na remarketing?</h3>
      <p>Tipično 10-30% ukupnog budžeta.</p>
      <h3>Da li je remarketing "creepy"?</h3>
      <p>
        Može biti ako je preterano. Frequency cap i relevantne poruke smanjuju
        "creep factor".
      </p>
      <h3>Remarketing vs Retargeting — razlika?</h3>
      <p>Tehnički isto. Google koristi "remarketing", Facebook "retargeting".</p>
      <p>---</p>

      <h2>Sledeći koraci</h2>
      <ul>
        <li>
          <Link href="/blog/kljucne-reci-vodic" className="underline">
            Ključne Reči za Google Ads
          </Link>
        </li>
        <li>
          <Link href="/blog/negativne-kljucne-reci" className="underline">
            Negative Keywords: Kompletna Lista
          </Link>
        </li>
        <li>
          <Link href="/blog/quality-score-vodic" className="underline">
            Quality Score: Kako Ga Poboljšati
          </Link>
        </li>
      </ul>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Januar 2026
      </div>
      <div className="text-sm text-gray-500">
        Autor: Slobodan Jelisavac, Google Ads Consultant
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
    title: "Koliko Košta Google Ads? Cene, Budžeti i ROI u Srbiji [2026]",
    date: "2026-01-26",
    category: "Google Ads",
    metaDescription:
      "Koliko zaista košta Google Ads u Srbiji? Detaljni pregled cena po industrijama, minimalni budžeti, troškovi agencija i kako izračunati ROI pre nego što potrošite prvi dinar.",
    content: <KolikoKostaGoogleAdsPost />
  },
  {
    slug: "google-oglasavanje-za-firme",
    title: "Google Oglašavanje za Firme: Kompletan Vodič za B2B i eCommerce [2026]",
    date: "2026-01-26",
    category: "Google oglašavanje",
    metaDescription:
      "Kompletan vodič za Google oglašavanje prilagođen firmama. Strategije za B2B i eCommerce, tipovi kampanja, budžetiranje i merenje rezultata — sve na jednom mestu.",
    content: <GoogleOglasavanjeZaFirmePost />
  },
    {
    slug: "performance-max-vodic",
    title: "Performance Max Kampanje: Vodič za eCommerce i B2B [2026]",
    date: "2026-01-26",
    category: "Performance Max",
    metaDescription:
      "Sve o Performance Max kampanjama — kako rade, kada ih koristiti, struktura, asset grupe, i strategije optimizacije. Vodič baziran na realnim rezultatima iz regiona.",
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
  },
  {
    slug: "agencija-vs-freelancer",
    title: "Google Ads Agencija vs Freelancer vs In-House: Kako Izabrati Pravu Opciju",
    date: "2026-01-26",
    category: "Google Ads",
    metaDescription:
      "Agencija, freelancer ili in-house tim za Google Ads Detaljno poređenje troškova, prednosti i mana svake opcije. Saznajte koja je prava za vaš budžet i ciljeve.",
    content: <AgencijaVsFreelancerPost />
  },
  {
    slug: "conversion-tracking-vodic",
    title: "Conversion Tracking za Google Ads: Zašto Vaše Kampanje Ne Rade",
    date: "2026-01-26",
    category: "Google Ads",
    metaDescription:
      "Loš conversion tracking je razlog #1 zašto Google Ads kampanje ne donose rezultate. Vodič za pravilno postavljanje tracking-a, enhanced conversions i server-side implementaciju.",
    content: <ConversionTrackingVodicPost />
  },
  {
    slug: "google-ads-greske",
    title: "Google Ads Optimizacija: 20 Grešaka Koje Vas Koštaju Novca",
    date: "2026-01-27",
    category: "Google Ads optimizacija",
    metaDescription:
      "20 najčešćih Google Ads grešaka koje koštaju novac — od loše strukture, preko bidding grešaka, do propuštenih prilika. Proverite da li pravite neku od njih.",
    content: <GoogleAdsGreskePost />
  },
  {
    slug: "zasto-nema-rezultata",
    title: "Zašto Google Ads Kampanje Ne Donose Rezultate (i Kako to Popraviti)",
    date: "2026-01-27",
    category: "Google Ads",
    metaDescription:
      "Vaše Google Ads kampanje troše budžet ali ne donose rezultate? Evo 12 najčešćih razloga zašto kampanje ne rade i konkretna rešenja za svaki problem.",
    content: <GoogleAdsNeDonosiRezultatePost />
  },
  {
    slug: "ecommerce-vs-b2b",
    title: "Google Ads za eCommerce vs B2B: Ključne Razlike u Strategiji",
    date: "2026-01-27",
    category: "Google Ads",
    metaDescription:
      "Google Ads strategija za eCommerce nije ista kao za B2B. Kompletan vodič o razlikama u kampanjama, targetingu, bidding-u i merenju uspeha za oba modela poslovanja.",
    content: <EcommerceVsB2BPost />
  },
  {
    slug: "google-ads-vs-meta",
    title: "Google Ads vs Meta Ads: Šta je Bolje za Vaš Biznis?",
    date: "2026-01-27",
    category: "Google Ads",
    metaDescription:
      "Google Ads ili Meta Ads (Facebook/Instagram)? Detaljno poređenje: kada koristiti koji kanal, razlike u targetingu, troškovima i ROI-u. Saznajte šta je bolje za vaš biznis.",
    content: <GoogleAdsVsMetaAdsPost />
  },
  {
    slug: "google-ads-audit-vodic",
    title: "Google Ads Audit: Kompletan Checklist [2026]",
    date: "2026-01-27",
    category: "Google Ads audit",
    metaDescription:
      "Detaljni Google Ads audit checklist sa 80+ tačaka za proveru. Pronađite probleme, optimizujte kampanje, i poboljšajte ROI.",
    content: <GoogleAdsAuditPost />
  },
  {
    slug: "kljucne-reci-vodic",
    title: "Ključne Reči za Google Ads: Kompletan Vodič [2026]",
    date: "2026-01-27",
    category: "Google Ads keywords",
    metaDescription:
      "Sve o ključnim rečima za Google Ads — istraživanje, selekcija, organizacija i optimizacija. Naučite kako da pronađete keywords koji donose konverzije, ne samo klikove.",
    content: <KljucneReciVodicPost />
  },
  {
    slug: "negativne-kljucne-reci",
    title: "Negative Keywords: Kompletna Lista + Strategija [2026]",
    date: "2026-01-27",
    category: "Google Ads",
    metaDescription:
      "Kompletan vodič za negative keywords u Google Ads — gotove liste po industrijama, strategija dodavanja i kako sprečiti bacanje budžeta na pogrešne pretrage.",
    content: <NegativeKeywordsVodicPost />
  },
  {
    slug: "quality-score-vodic",
    title: "Quality Score: Šta Je i Kako Ga Poboljšati [2026]",
    date: "2026-01-27",
    category: "Google Ads",
    metaDescription:
      "Kompletan vodič za Google Ads Quality Score — šta je, kako se računa i konkretne taktike za poboljšanje. Smanjite CPC i poboljšajte pozicije sa boljim QS.",
    content: <QualityScoreVodicPost />
  },
  {
    slug: "remarketing-vodic",
    title: "Google Ads Remarketing: Kompletan Vodič [2026]",
    date: "2026-01-27",
    category: "Google Ads",
    metaDescription:
      "Sve o Google Ads remarketing-u — setup, segmentacija, strategije i best practices. Naučite kako da vratite posetioce i povećate konverzije za 50%+.",
    content: <RemarketingVodicPost />
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
    <div className="bg-slate-950 text-white">
      <section className="relative overflow-hidden pt-16 pb-28 md:pt-24 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.85),rgba(2,6,23,1))]" />
        <div className="container-custom px-4 relative">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-300">
            Blog
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-heading font-bold max-w-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-slate-300">
            <Link href="/blog" className="underline">
              Blog
            </Link>{" "}
            <span className="mx-2">|</span>
            {post.category}
            <span className="mx-2">|</span>
            {post.date}
          </p>
        </div>
      </section>

      <section className="bg-slate-100 text-gray-900 pb-16">
        <div className="container-custom px-4 -mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-8">
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
                  <div className="text-sm uppercase tracking-wide text-gray-500">
                    Besplatna analiza
                  </div>
                  <h2 className="mt-2 text-lg font-heading font-semibold">
                    Želite audit kampanja
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Dobijte jasnu sliku performansi i prve korake za optimizaciju.
                  </p>
                  <Link
                    href="/kontakt"
                    className="btn-secondary inline-block mt-4 w-full text-center"
                  >
                    Zakažite konsultacije
                  </Link>
                </div>
              </div>
            </aside>

            <article className="bg-white border-2 border-gray-900 rounded-xl p-6 md:p-12 shadow-card">
              <div className="text-sm text-gray-500 mb-4">
                {post.category} · {post.date}
              </div>
              <div className="prose prose-slate max-w-none text-gray-700">
                {post.content}
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}





