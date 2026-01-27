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





