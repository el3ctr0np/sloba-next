import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";

function KolikoKostaGoogleAdsPost() {
  return (
    <>
      {/* ── TL;DR hero ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Cena Google Ads-a zavisi od industrije, konkurencije i kvaliteta kampanja.
          U Srbiji, CPC se kreće od €0.08 do €8.00 — ali sa pravim pristupom, svaki uloženi euro može doneti 3-10x povraćaj.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">€0.15-€1.20</p>
            <p className="text-xs text-slate-400 mt-1">prosečan CPC u Srbiji</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">€300+</p>
            <p className="text-xs text-slate-400 mt-1">minimalni mesečni budžet</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">2-3 mes.</p>
            <p className="text-xs text-slate-400 mt-1">do stabilnih rezultata</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">3-10x</p>
            <p className="text-xs text-slate-400 mt-1">realan ROI</p>
          </div>
        </div>
      </div>

      <h2>Koliko zaista košta Google Ads u Srbiji</h2>
      <p>
        &quot;Koliko košta Google Ads?&quot; — ovo je prvo pitanje koje čujem od svakog direktora marketinga ili vlasnika firme koji razmišlja o plaćenom oglašavanju. I razumem frustraciju — Google vam neće dati jasan odgovor, a većina sadržaja na ovu temu dolazi iz SAD-a gde su cene potpuno drugačije.
      </p>
      <p>
        Problem je što ne postoji jednostavan odgovor tipa &quot;košta X dinara mesečno&quot;. Cena Google Ads-a zavisi od desetak faktora — od vaše industrije, preko konkurencije, do kvaliteta vaših kampanja.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Iz mog iskustva</p>
        <p className="text-blue-800 text-sm mb-0">
          Nakon skoro decenije rada sa Google Ads-om i stotina naloga u regionu, mogu vam dati konkretan okvir koji će vam pomoći da planirate budžet i razumete šta očekivati.
        </p>
      </div>

      <hr />

      <h2>Kako Google Ads naplaćuje</h2>
      <p>
        Google Ads koristi <strong>aukcijski sistem</strong>. Svaki put kada neko ukuca pretragu, dešava se mini-aukcija između oglašivača koji ciljaju tu ključnu reč. Vi plaćate samo kada neko klikne na vaš oglas — otuda naziv PPC (pay-per-click).
      </p>

      <h3>Od čega zavisi cena po kliku (CPC)</h3>
      <ul>
        <li><strong>Konkurencija</strong> — što više oglašivača cilja istu ključnu reč, veća je cena</li>
        <li><strong>Quality Score</strong> — Google ocenjuje relevantnost vašeg oglasa i landing page-a (1-10). Viši skor = niža cena</li>
        <li><strong>Pozicija oglasa</strong> — prva pozicija košta više od četvrte</li>
        <li><strong>Industrija</strong> — osiguranje i advokati plaćaju 10x više od prodavnica odeće</li>
        <li><strong>Geografija</strong> — Srbija je jeftinija od Nemačke, ali skuplja od Makedonije</li>
      </ul>

      <h3>Modeli naplate u Google Ads-u</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">CPC — cena po kliku</h3>
          <p className="text-sm text-gray-600 mb-0">Plaćate kada neko klikne na oglas. Najčešći model za Search i Shopping kampanje.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">CPM — cena po 1.000 prikaza</h3>
          <p className="text-sm text-gray-600 mb-0">Plaćate za vidljivost, ne klikove. Koristi se za Display i YouTube kampanje.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">CPV — cena po pregledu videa</h3>
          <p className="text-sm text-gray-600 mb-0">Plaćate kada neko pogleda vaš video oglas. Specifično za YouTube.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">CPA — cena po konverziji</h3>
          <p className="text-sm text-gray-600 mb-0">Napredni model gde plaćate po ostvarenoj akciji. Zahteva dovoljno podataka.</p>
        </div>
      </div>

      <p>Za većinu biznisa u Srbiji, CPC model na Search mreži je polazna tačka.</p>

      <hr />

      <h2>Realne CPC cene po industrijama u Srbiji</h2>
      <p>Evo prosečnih CPC cena koje vidim kod klijenata u regionu (2025-2026):</p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Industrija</th>
              <th className="py-3 px-4 font-heading font-semibold">Prosečan CPC</th>
              <th className="py-3 px-4 font-heading font-semibold">Raspon</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce — moda</td>
              <td className="py-3 px-4">€0.15 - €0.40</td>
              <td className="py-3 px-4">€0.08 - €0.80</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">eCommerce — elektronika</td>
              <td className="py-3 px-4">€0.20 - €0.50</td>
              <td className="py-3 px-4">€0.10 - €1.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Nameštaj</td>
              <td className="py-3 px-4">€0.25 - €0.60</td>
              <td className="py-3 px-4">€0.15 - €1.20</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">B2B usluge</td>
              <td className="py-3 px-4">€0.40 - €1.20</td>
              <td className="py-3 px-4">€0.20 - €3.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">SaaS (regionalni)</td>
              <td className="py-3 px-4">€0.80 - €2.50</td>
              <td className="py-3 px-4">€0.30 - €5.00</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Nekretnine</td>
              <td className="py-3 px-4">€0.30 - €0.80</td>
              <td className="py-3 px-4">€0.15 - €1.50</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Turizam</td>
              <td className="py-3 px-4">€0.20 - €0.60</td>
              <td className="py-3 px-4">€0.10 - €1.20</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Finansije/Osiguranje</td>
              <td className="py-3 px-4 text-red-600 font-semibold">€1.00 - €4.00</td>
              <td className="py-3 px-4">€0.50 - €8.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Zdravstvo/Klinike</td>
              <td className="py-3 px-4">€0.50 - €1.50</td>
              <td className="py-3 px-4">€0.25 - €3.00</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Obrazovanje</td>
              <td className="py-3 px-4">€0.30 - €0.90</td>
              <td className="py-3 px-4">€0.15 - €2.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Ove cene su za srpsko tržište. Za targeting Nemačke ili UK, pomnožite sa 3-5x.
        </p>
      </div>

      <h3>Zašto je raspon toliko širok</h3>
      <p>CPC od €0.08 do €3.00 u istoj industriji deluje apsurdno. Ali razlika je u:</p>
      <ul>
        <li><strong>Ključnim rečima</strong> — brendirani termini su jeftiniji od generičkih</li>
        <li><strong>Nameri pretrage</strong> — &quot;kupi patike online&quot; košta više od &quot;koje patike su u modi&quot;</li>
        <li><strong>Kvalitetu naloga</strong> — optimizovan nalog plaća i 50% manje</li>
        <li><strong>Vremenu</strong> — Black Friday vs. februar</li>
      </ul>

      <hr />

      <h2>Minimalni budžet koji ima smisla</h2>
      <p>
        Pitanje koje čujem stalno: &quot;Mogu li da počnem sa €100 mesečno?&quot; Tehnički — da. Praktično — zavisi.
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Formula za minimalni budžet</p>
        <p className="text-sm text-yellow-900 mb-0">
          Mesečni budžet = (Ciljani broj klikova dnevno) × (Prosečan CPC) × 30 dana.
          Za smislene rezultate vam treba <strong>minimum 10-15 klikova dnevno</strong>.
        </p>
      </div>

      <p>To u praksi znači:</p>
      <ul>
        <li><strong>eCommerce (CPC €0.30):</strong> €90-135/mesečno minimum</li>
        <li><strong>B2B usluge (CPC €0.80):</strong> €240-360/mesečno minimum</li>
        <li><strong>SaaS (CPC €1.50):</strong> €450-675/mesečno minimum</li>
      </ul>
      <p>Ali ovo je <strong>apsolutni minimum</strong> za testiranje. Za stabilne rezultate, preporučujem:</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Tip biznisa</th>
              <th className="py-3 px-4 font-heading font-semibold">Preporučeni mesečni budžet</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Lokalni biznis</td>
              <td className="py-3 px-4">€300 - €800</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">eCommerce (manji)</td>
              <td className="py-3 px-4">€500 - €1,500</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce (srednji)</td>
              <td className="py-3 px-4">€1,500 - €5,000</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">B2B usluge</td>
              <td className="py-3 px-4">€800 - €2,500</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">SaaS</td>
              <td className="py-3 px-4">€1,500 - €5,000+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Zašto ne preporučujem mikro-budžete</p>
        <p className="text-blue-800 text-sm mb-0">
          Sa €100-200 mesečno nemate dovoljno podataka za optimizaciju, algoritmi nemaju šta da nauče i ne možete testirati različite pristupe. To je kao da otvorite restoran i reklamirate se samo jednom nedeljno.
        </p>
      </div>

      <hr />

      <h2>Troškovi upravljanja: agencija vs. freelancer vs. in-house</h2>
      <p>Pored budžeta za oglase, imate troškove upravljanja kampanjama. Tri opcije:</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Opcija 1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-3">Agencija</h3>
          <p className="text-sm text-gray-600 mb-2"><strong>Cena:</strong> €500-2,500/mes. ili 10-20% ad spend-a</p>
          <p className="text-xs text-green-700 mb-1">+ Tim stručnjaka, alati, kontinuitet</p>
          <p className="text-xs text-red-600 mb-0">- Skuplje za manje budžete, manje personalizovano</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Opcija 2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-3">Freelancer</h3>
          <p className="text-sm text-gray-600 mb-2"><strong>Cena:</strong> €300-1,200/mes. ili €30-80/sat</p>
          <p className="text-xs text-green-700 mb-1">+ Personalizovan pristup, fleksibilnost</p>
          <p className="text-xs text-red-600 mb-0">- Zavisnost od jedne osobe, ograničen kapacitet</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Opcija 3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-3">In-House</h3>
          <p className="text-sm text-gray-600 mb-2"><strong>Cena:</strong> €800-2,500/mes. plata + alati</p>
          <p className="text-xs text-green-700 mb-1">+ Potpuna kontrola, duboko razumevanje biznisa</p>
          <p className="text-xs text-red-600 mb-0">- Skupo za manje firme, rizik od stagnacije</p>
        </div>
      </div>

      <h3>Moja preporuka po veličini budžeta</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Mesečni ad spend</th>
              <th className="py-3 px-4 font-heading font-semibold">Preporučena opcija</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Do €1,000</td>
              <td className="py-3 px-4">Freelancer ili DIY sa konsultacijama</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">€1,000 - €5,000</td>
              <td className="py-3 px-4">Freelancer/konsultant</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">€5,000 - €20,000</td>
              <td className="py-3 px-4">Specijalizovana agencija ili senior freelancer</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">€20,000+</td>
              <td className="py-3 px-4">Agencija + in-house koordinator</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Za detaljno poređenje svih opcija, pogledajte{" "}
        <Link href="/blog/agencija-vs-freelancer" className="underline">
          vodič: agencija vs. freelancer vs. in-house
        </Link>.
      </p>

      <hr />

      <h2>Kako izračunati ROI pre nego što potrošite prvi dinar</h2>
      <p>Ovde većina preskače, a tu se donose najvažnije odluke.</p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Poznajte prosečnu vrednost kupca</strong>
              <span className="text-gray-500"> — AOV, marža po porudžbini, LTV za povratne kupce</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Definišite maksimalni CPA</strong>
              <span className="text-gray-500"> — koliko možete platiti za konverziju i ostati profitabilni</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Procenite conversion rate</strong>
              <span className="text-gray-500"> — eCommerce: 1-3%, Lead gen: 2-8%, B2B: 2-5%</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Izračunajte break-even CPC</strong>
              <span className="text-gray-500"> — Maksimalni CPA × Conversion Rate</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Primer kalkulacije za eCommerce</p>
        <div className="text-sm text-yellow-900 space-y-1">
          <p className="mb-1">AOV: €80 | Marža: 40% = €32 | Investicija: 50% marže</p>
          <p className="mb-1"><strong>Maksimalni CPA = €16</strong></p>
          <p className="mb-1">Conversion rate: 2%</p>
          <p className="mb-0"><strong>Break-even CPC = €16 × 0.02 = €0.32</strong></p>
        </div>
      </div>

      <p>
        Ako je prosečan CPC u vašoj industriji €0.25, imate prostora za profit. Ako je €0.50, radite na conversion rate-u ili AOV-u.
      </p>

      <hr />

      <h2>Skriveni troškovi o kojima niko ne priča</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Landing page-ovi</h3>
          <ul className="text-sm mb-0">
            <li>Šablonski: €200-500 (jednokratno)</li>
            <li>Custom dizajn: €500-2,000 (jednokratno)</li>
            <li>A/B testiranje: ongoing trošak</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Kreative i content</h3>
          <ul className="text-sm mb-0">
            <li>Product feed optimizacija: €200-500</li>
            <li>Ad copy pisanje: €100-300/mes.</li>
            <li>Slike za Display/YouTube: €100-500</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Alati</h3>
          <ul className="text-sm mb-0">
            <li>Keyword research: €50-200/mes.</li>
            <li>Competitor analysis: €50-150/mes.</li>
            <li>Reporting: €30-100/mes.</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Conversion tracking setup</h3>
          <ul className="text-sm mb-0">
            <li>GA4 + GTM setup: €200-500</li>
            <li>Enhanced conversions: €100-300</li>
            <li>Server-side tracking: €300-800</li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Ne zaboravite na vreme</p>
        <p className="text-blue-800 text-sm mb-0">
          Ako radite sami, računajte na 3-6 meseci pre nego što stvarno naučite. To vreme ima cenu. Više o pravilnom postavljanju tracking-a u{" "}
          <Link href="/blog/conversion-tracking-vodic" className="underline">vodiču za conversion tracking</Link>.
        </p>
      </div>

      <hr />

      <h2>Kada Google Ads nije pravi izbor</h2>
      <p>Iskreno, Google Ads nije za svakoga. Ne preporučujem ga ako:</p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Preskočite ako...</p>
          <p className="font-semibold mb-2">Nemate jasno definisan proizvod ili uslugu</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">Google Ads ne popravlja loš product-market fit. Prvo validirajte ponudu, pa onda oglašavajte.</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Preskočite ako...</p>
          <p className="font-semibold mb-2">Marže su ispod 20% ili nema dovoljno potražnje</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">Sa niskim maržama je teško biti profitabilan. A ako niko ne pretražuje vaš proizvod, Search kampanje neće raditi — razmislite o Display ili Social oglašavanju.</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Preskočite ako...</p>
          <p className="font-semibold mb-2">Sajt nije spreman ili nemate budžet za 3-6 meseci</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">Loš UX ubija i najbolje kampanje. A rezultati ne dolaze preko noći — potrebna su bar 2-3 meseca za optimizaciju.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2>Sledeći koraci</h2>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">Preporučujem ova 4 koraka:</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Izračunajte svoj maksimalni CPA</strong> <span className="text-gray-500">koristeći formulu iznad</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Proverite CPC u vašoj industriji</strong> <span className="text-gray-500">kroz Keyword Planner (besplatan u Google Ads)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Definišite realan test budžet</strong> <span className="text-gray-500">za minimum 3 meseca</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Odlučite</strong> <span className="text-gray-500">da li ćete raditi sami, sa freelancerom ili agencijom</span></div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Želite da znate koliko bi Google Ads koštao za vaš biznis?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Analiziraćemo vašu industriju, konkurenciju i potencijalni ROI — besplatno, bez obaveza.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2>Često postavljana pitanja o cenama Google Ads-a</h2>
      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko minimalno treba uložiti u Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Tehnički minimum je €1 dnevno, ali za smislene rezultate računajte na minimum €300-500 mesečno za lokalne biznise i €1,000+ za eCommerce ili B2B.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li se Google Ads isplati za mali biznis?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Da, ako imate jasnu vrednost po kupcu i konkurentne marže. Male firme često imaju prednost jer su fleksibilnije i mogu brže optimizovati.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko vremena treba da Google Ads počne da donosi rezultate?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Prve indikacije vidite za 2-4 nedelje. Prave rezultate i optimizovan nalog za 2-3 meseca. Stabilne performanse za 4-6 meseci.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto su cene toliko različite po industrijama?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Zbog konkurencije i vrednosti konverzije. Advokat može da plati €50 za klik jer jedan klijent vredi €5,000. Prodavnica majica ne može.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li Google Ads košta više nego Meta Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Generalno da, CPC na Google-u je viši. Ali intent korisnika je jači — neko ko pretražuje &quot;kupi X&quot; je bliži kupovini od nekoga ko scrolla Instagram. Više o ovome u{" "}
            <Link href="/blog/google-ads-vs-meta" className="underline">Google Ads vs Meta Ads poređenju</Link>.
          </div>
        </details>
      </div>

      {/* ── Povezani vodiči ── */}
      <h2>Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/blog/agencija-vs-freelancer" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Agencija vs. Freelancer vs. In-House</p>
          <p className="text-xs text-gray-500 mb-0">Detaljno poređenje svih opcija za upravljanje kampanjama</p>
        </Link>
        <Link href="/blog/google-ads-greske" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">20 grešaka koje vas koštaju novca</p>
          <p className="text-xs text-gray-500 mb-0">Najčešće greške u Google Ads kampanjama</p>
        </Link>
        <Link href="/blog/conversion-tracking-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion tracking vodič</p>
          <p className="text-xs text-gray-500 mb-0">Pravilno postavljanje tracking-a za merenje rezultata</p>
        </Link>
        <Link href="/blog/google-ads-vs-meta" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads vs Meta Ads</p>
          <p className="text-xs text-gray-500 mb-0">Koji kanal je bolji za vaš biznis</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Januar 2026
      </div>
      <div className="text-sm text-gray-500">
        Autor: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}

function GoogleOglasavanjeZaFirmePost() {
  return (
    <>
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google oglašavanje je najmoćniji kanal za firme koje žele da dosegnu kupce sa aktivnom namerom kupovine. Za razliku od društvenih mreža gde &quot;upadate&quot; ljude dok skroluju, Google Ads vas dovodi do korisnika koji aktivno traže vaš proizvod ili uslugu.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">6</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">tipova kampanja</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">8.5x</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">prosečan ROAS</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">€0.15–2.00</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">CPC u Srbiji</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2–3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">meseca do rezultata</p>
          </div>
        </div>
      </div>

      <h2>Zašto je Google oglašavanje efikasno za firme</h2>
      <p>Google Ads omogućava vašoj firmi da bude vidljiva tačno u trenutku kada potencijalni kupac traži ono što nudite. To je ključna razlika u odnosu na druge kanale.</p>
      <p>Kada neko ukuca &quot;CRM softver za mala preduzeća&quot; ili &quot;muške patike za trčanje&quot;, vaš oglas se može pojaviti iznad organskih rezultata. Osoba koja pretražuje ima jasnu nameru — ne skrola bezveze, već aktivno traži rešenje.</p>
      <p>Moje iskustvo sa preko 50 klijenata u Srbiji, regiji i inostranstvu pokazuje da Google Ads donosi najbolje rezultate kada:</p>
      <ul>
        <li>Vaš proizvod ili usluga rešava jasnu potrebu</li>
        <li>Ljudi aktivno traže rešenje (postoji search volume)</li>
        <li>Imate konkurentnu ponudu</li>
        <li>Pravilno postavite tracking i optimizujete kontinuirano</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Razlika između Google Ads i društvenih mreža</p>
        <p className="text-blue-800 text-sm mb-0">Na društvenim mrežama &quot;upadate&quot; korisnike dok oni konzumiraju sadržaj. Na Google-u, korisnici vas aktivno traže. Zbog toga Google Ads obično donosi manji volume, ali kvalitetniji saobraćaj sa višim intent-om.</p>
      </div>

      <hr />

      <h2>Kako funkcioniše Google oglašavanje</h2>
      <p>Google Ads radi na principu aukcije u realnom vremenu. Svaki put kada neko ukuca pretragu, dešava se aukcija među oglašivačima koji ciljaju tu ključnu reč.</p>
      <p>Ali nije najvažniji ko plati najviše. Google koristi formulu:</p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Ad Rank = Bid × Quality Score × Očekivani uticaj ekstenzija</p>
      </div>

      <p>Ovo znači da možete platiti manje od konkurencije i ipak biti iznad njih — ako imate bolji Quality Score.</p>

      <h3>Quality Score — Vaš skriveni adut</h3>
      <p>Quality Score (1–10) meri koliko je vaš oglas relevantan za korisnika. Zavisi od:</p>
      <ul>
        <li><strong>CTR (Click-Through Rate)</strong> — koliko često ljudi kliknu na vaš oglas</li>
        <li><strong>Relevantnost oglasa</strong> — koliko tekst oglasa odgovara pretrazi</li>
        <li><strong>Landing page iskustvo</strong> — brzina, relevantnost, mobilna optimizacija</li>
      </ul>
      <p>Visok Quality Score = niža cena po kliku, bolje pozicije, više konverzija za isti budžet.</p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Dublje o Quality Score-u</p>
        <p className="text-blue-800 text-sm mb-0">Za detaljan vodič kako poboljšati Quality Score i smanjiti troškove, pročitajte <Link href="/blog/quality-score-vodic" className="underline font-semibold">Quality Score vodič</Link>.</p>
      </div>

      <h3>Google Ads mreže</h3>
      <p>Google Ads ima više mreža na kojima se oglasi prikazuju:</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Mreža</th>
              <th className="py-3 px-4 font-heading font-semibold">Gde se prikazuju oglasi</th>
              <th className="py-3 px-4 font-heading font-semibold">Tip kampanje</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Search</td>
              <td className="py-3 px-4">Google.com rezultati pretrage</td>
              <td className="py-3 px-4">Search, Shopping</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Display</td>
              <td className="py-3 px-4">2+ miliona web sajtova i aplikacija</td>
              <td className="py-3 px-4">Display, Remarketing</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">YouTube</td>
              <td className="py-3 px-4">Pre/tokom/posle video sadržaja</td>
              <td className="py-3 px-4">Video kampanje</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Discover</td>
              <td className="py-3 px-4">Google Discover feed, Gmail</td>
              <td className="py-3 px-4">Demand Gen</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Maps</td>
              <td className="py-3 px-4">Google Maps rezultati</td>
              <td className="py-3 px-4">Local kampanje</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2>Tipovi Google Ads kampanja</h2>
      <p>Google Ads nije jedan sistem — to je ekosistem različitih tipova kampanja. Ono što radi za eCommerce neće raditi za B2B SaaS. Evo pregleda svih tipova:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Najviši intent</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Search Kampanje</h3>
          <p className="text-sm text-gray-600 mb-3">Tekstualni oglasi koji se prikazuju na vrhu Google pretrage kada ljudi traže specifične ključne reči.</p>
          <p className="text-xs font-semibold text-gray-900 mb-1">Kada koristiti:</p>
          <ul className="text-sm mb-3">
            <li>Proizvod/usluga sa jasnom potražnjom</li>
            <li>Ljudi aktivno traže ono što nudite</li>
            <li>Želite visok intent saobraćaj</li>
          </ul>
          <p className="text-xs font-semibold text-gray-900 mb-1">Idealno za:</p>
          <p className="text-sm text-gray-600 mb-0">B2B usluge, lokalni biznisi, SaaS, eCommerce (uz Shopping)</p>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Vizuelno poređenje</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Shopping Kampanje</h3>
          <p className="text-sm text-gray-600 mb-3">Vizuelni oglasi sa slikom proizvoda, cenom i nazivom prodavnice. Prikazuju se na vrhu Google pretrage i u Shopping tabu.</p>
          <p className="text-xs font-semibold text-gray-900 mb-1">Kada koristiti:</p>
          <ul className="text-sm mb-3">
            <li>Imate online prodavnicu</li>
            <li>Prodajete fizičke proizvode</li>
            <li>Imate konkurentne cene</li>
          </ul>
          <p className="text-xs font-semibold text-gray-900 mb-1">Zahtevi:</p>
          <p className="text-sm text-gray-600 mb-0">Google Merchant Center nalog, product feed, povezan sa Google Ads-om</p>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Automatizacija</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Performance Max (PMax)</h3>
          <p className="text-sm text-gray-600 mb-3">Google-ova &quot;sve u jednom&quot; kampanja koja automatski prikazuje oglase na svim mrežama (Search, Shopping, Display, YouTube, Discover).</p>
          <p className="text-xs font-semibold text-gray-900 mb-1">Kada koristiti:</p>
          <ul className="text-sm mb-3">
            <li>Imate dovoljno conversion data (50+ mesečno idealno)</li>
            <li>Želite skaliranje uz manje ručnog rada</li>
            <li>Spremni ste da prepustite kontrolu algoritmu</li>
          </ul>
          <p className="text-xs font-semibold text-gray-900 mb-1">Napomena:</p>
          <p className="text-sm text-gray-600 mb-0">PMax je &quot;crna kutija&quot; — imate manje kontrole i uvida. Preporučujem da počnete sa Search/Shopping.</p>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Brand awareness</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Display Kampanje</h3>
          <p className="text-sm text-gray-600 mb-3">Banner oglasi na web sajtovima, aplikacijama, i YouTube-u. Niži intent, ali širi doseg.</p>
          <p className="text-xs font-semibold text-gray-900 mb-1">Kada koristiti:</p>
          <ul className="text-sm mb-3">
            <li>Brand awareness kampanje</li>
            <li>Remarketing (vrati posete koji nisu kupili)</li>
            <li>Dosezanje šire publike</li>
          </ul>
          <p className="text-xs font-semibold text-gray-900 mb-1">Napomena:</p>
          <p className="text-sm text-gray-600 mb-0">Slabije za direktan response, ali odlično za remarketing.</p>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Video content</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Video Kampanje (YouTube)</h3>
          <p className="text-sm text-gray-600 mb-3">Video oglasi na YouTube-u (pre-roll, mid-roll, in-feed). Zahtevaju video kreativ.</p>
          <p className="text-xs font-semibold text-gray-900 mb-1">Kada koristiti:</p>
          <ul className="text-sm mb-3">
            <li>Imate video content</li>
            <li>Želite brand awareness</li>
            <li>Kompleksniji proizvod koji zahteva objašnjenje</li>
          </ul>
          <p className="text-xs font-semibold text-gray-900 mb-1">Idealno za:</p>
          <p className="text-sm text-gray-600 mb-0">B2C brendovi, SaaS sa demo video-ima, remarketing</p>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Early funnel</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Demand Gen</h3>
          <p className="text-sm text-gray-600 mb-3">Vizuelni oglasi za Discover, Gmail, i YouTube. Zamena za Discovery kampanje.</p>
          <p className="text-xs font-semibold text-gray-900 mb-1">Kada koristiti:</p>
          <ul className="text-sm mb-3">
            <li>Želite da dosegnete ljude rano u purchase journey-u</li>
            <li>Imate jak vizuelni content</li>
            <li>Želite alternativu Meta Ads-u</li>
          </ul>
          <p className="text-xs font-semibold text-gray-900 mb-1">Idealno za:</p>
          <p className="text-sm text-gray-600 mb-0">eCommerce (prospect kampanje), B2C sa životnim stilom</p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Vodič za Performance Max kampanje</p>
        <p className="text-blue-800 text-sm mb-0">PMax kampanje mogu doneti odlične rezultate, ali samo ako se pravilno postave. Za detaljan vodič, pročitajte <Link href="/blog/performance-max-vodic" className="underline font-semibold">Performance Max vodič</Link>.</p>
      </div>

      <hr />

      <h2>Google oglašavanje za eCommerce</h2>
      <p>Ako prodajete fizičke proizvode online, Google Ads je verovatno najvažniji kanal. Shopping kampanje donose kvalitetan saobraćaj jer korisnik vidi sliku i cenu pre klika.</p>

      <h3>Osnovna struktura kampanja za eCommerce</h3>
      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Brand Search</strong> <span className="text-gray-500">— Zaštitite ime brenda, uhvatite ljude koji već znaju za vas</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Standard Shopping</strong> <span className="text-gray-500">— Kontrolisane kampanje po proizvodima/kategorijama</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Performance Max</strong> <span className="text-gray-500">— Skaliranje dokazanih proizvoda (kada imate conversion history)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Search Generic</strong> <span className="text-gray-500">— Non-brand pretrage (&quot;muške patike za trčanje&quot;)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Remarketing</strong> <span className="text-gray-500">— Povratak posetioca koji nisu kupili</span></div>
          </div>
        </div>
      </div>

      <h3>Product Feed — Temelj Shopping kampanja</h3>
      <p>Vaš product feed u Google Merchant Center-u je najvažniji element Shopping kampanja. Loš feed = loše kampanje, bez izuzetka.</p>
      <p>U praksi najbolje funkcioniše kada optimizujete ovih 5 atributa:</p>
      <ul>
        <li><strong>Title</strong> — Uključite brand, ključne reči, atribute (boja, veličina, materijal). Primer: &quot;Nike Air Zoom Pegasus 40 Muške Patike za Trčanje Crne&quot;</li>
        <li><strong>Description</strong> — Detaljan opis sa relevantnim terminima (Google koristi ovo za matching)</li>
        <li><strong>Product Type</strong> — Vaša kategorija (npr. &quot;Obuća &gt; Muške Patike &gt; Running&quot;) — ključno za strukturu kampanja</li>
        <li><strong>GTIN/MPN</strong> — Jedinstveni identifikatori proizvoda (obavezno za poznate brendove)</li>
        <li><strong>Custom Labels</strong> — Za segmentaciju po marži, sezoni, best-sellers, novim proizvodima</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Vodič za Google Shopping kampanje</p>
        <p className="text-blue-800 text-sm mb-0">Za detaljan vodič kako postaviti product feed i strukturirati Shopping kampanje, pročitajte <Link href="/blog/google-shopping-vodic" className="underline font-semibold">Google Shopping vodič</Link>.</p>
      </div>

      <h3>Shopping vs Performance Max — Šta izabrati?</h3>
      <p>Pitanje koje čujem stalno: &quot;Da li da koristim Standard Shopping ili PMax?&quot;</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Aspekt</th>
              <th className="py-3 px-4 font-heading font-semibold">Standard Shopping</th>
              <th className="py-3 px-4 font-heading font-semibold">Performance Max</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Kontrola</td>
              <td className="py-3 px-4">Visoka (bidovi, struktura, negativne KR)</td>
              <td className="py-3 px-4">Niska (algoritam odlučuje)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Uvid u search terms</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Potpun uvid</span></td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Ograničen</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Mreže</td>
              <td className="py-3 px-4">Samo Search + Shopping</td>
              <td className="py-3 px-4">Sve mreže (Search, Shopping, Display, YouTube, Discover)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Najbolje za</td>
              <td className="py-3 px-4">Testiranje, kontrola, novi proizvodi</td>
              <td className="py-3 px-4">Skaliranje dokazanih proizvoda</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Minimum conversion data</td>
              <td className="py-3 px-4">0 (može odmah)</td>
              <td className="py-3 px-4">50+ mesečno (preporuka)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Ručni rad</td>
              <td className="py-3 px-4">Više optimizacije potrebno</td>
              <td className="py-3 px-4">Manje ručnog rada</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Moja preporuka</p>
        <p className="text-yellow-800 text-sm mb-0">Hibridni pristup funkcioniše najbolje — Standard Shopping za kontrolu i testiranje novih proizvoda, PMax za skaliranje proizvoda koji već donose rezultate. Nemojte pauzirati Shopping kada pokrenete PMax.</p>
      </div>

      <h3>Remarketing za eCommerce</h3>
      <p>Retko ko kupi prvi put kada poseti sajt. Remarketing je vaš način da vratite te ljude.</p>
      <p>Preporučujem da kreirate ove segmente:</p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Cart abandoners</strong> <span className="text-gray-500">— Dodali u korpu, nisu kupili (1–7 dana) → agresivna ponuda</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Product viewers</strong> <span className="text-gray-500">— Gledali proizvod, nisu dodali (3–14 dana) → prikaz tog proizvoda + alternativa</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Past customers</strong> <span className="text-gray-500">— Kupili, potencijal za repeat (30–180 dana) → cross-sell, up-sell</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>High-value customers</strong> <span className="text-gray-500">— Kupili više puta → VIP ponude, loyalty programi</span></div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Dublje o remarketingu</p>
        <p className="text-blue-800 text-sm mb-0">Za detaljan vodič kako postaviti remarketing kampanje i liste, pročitajte <Link href="/blog/remarketing-vodic" className="underline font-semibold">Remarketing vodič</Link>.</p>
      </div>

      <hr />

      <h2>Google oglašavanje za B2B firme</h2>
      <p>B2B ima specifične izazove: duži sales cycle, više decision maker-a, manji volume pretrage. Ali Google Ads i dalje funkcioniše odlično — samo zahteva drugačiji pristup.</p>

      <h3>Osnovna struktura kampanja za B2B</h3>
      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Brand Search</strong> <span className="text-gray-500">— Zaštita brenda, uhvatite ljude koji vas već znaju</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Solution Search</strong> <span className="text-gray-500">— Pretrage za tipom rešenja (&quot;CRM softver&quot;, &quot;ERP sistem&quot;)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Problem Search</strong> <span className="text-gray-500">— Pretrage za problemom (&quot;kako automatizovati fakturisanje&quot;)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Competitor Search</strong> <span className="text-gray-500">— Imena konkurenata (oprezno, može biti skupo)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Remarketing</strong> <span className="text-gray-500">— Nurturing kroz duži decision process</span></div>
          </div>
        </div>
      </div>

      <h3>Ključne razlike B2B vs B2C</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Aspekt</th>
              <th className="py-3 px-4 font-heading font-semibold">B2C</th>
              <th className="py-3 px-4 font-heading font-semibold">B2B</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Sales cycle</td>
              <td className="py-3 px-4">Kratak (minuti–dani)</td>
              <td className="py-3 px-4">Dug (nedelje–meseci)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Konverzija</td>
              <td className="py-3 px-4">Direktna kupovina</td>
              <td className="py-3 px-4">Lead (forma, demo zahtev)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Targeting</td>
              <td className="py-3 px-4">Širok</td>
              <td className="py-3 px-4">Uži, specifičniji</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Keywords</td>
              <td className="py-3 px-4">Transakcioni</td>
              <td className="py-3 px-4">Informativni + transakcioni</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">CPC</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Obično niži</span></td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Obično viši</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Volume</td>
              <td className="py-3 px-4">Veći</td>
              <td className="py-3 px-4">Manji</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Fokus</td>
              <td className="py-3 px-4">ROAS, CPA</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Lead quality</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Kvalitet lead-ova &gt; Broj lead-ova</h3>
      <p>Najveća greška koju vidim kod B2B firmi: fokus na broj lead-ova umesto na kvalitet.</p>
      <p>100 loših lead-ova košta više nego 10 kvalitetnih:</p>
      <ul>
        <li>Vreme sales tima se troši na kvalifikaciju nevažnih upita</li>
        <li>Pipeline se zagušuje i postaje nepregledan</li>
        <li>Moral pada kada &quot;nema rezultata&quot;</li>
      </ul>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">✓</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Rešenje: Fokus na kvalitet</h3>
        </div>
        <ul className="text-sm mb-0">
          <li><strong>Offline conversion tracking</strong> — Importujte prodaje iz CRM-a nazad u Google Ads da algoritam nauči šta je kvalitetan lead</li>
          <li><strong>Lead scoring</strong> — Ne tretirajte sve konverzije isto (demo zahtev je vredniji od newsletter prijave)</li>
          <li><strong>Aggressive negative keywords</strong> — Izbacite studente, job seekers, DIY-ere, &quot;besplatno&quot;, &quot;jeftino&quot;</li>
          <li><strong>Visok cost per lead?</strong> — Nije problem ako su lead-ovi kvalitetni. Bolje platiti €50 za kvalitetan lead nego €10 za 5 beskorisnih.</li>
        </ul>
      </div>

      <h3>Remarketing strategija za B2B</h3>
      <p>B2B decision proces je duži i uključuje više stakeholder-a. Remarketing mora da edukuje i gradi poverenje.</p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Top of Funnel</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Blog čitaoci koji nisu konvertovali.</p>
        <p className="text-sm mb-0"><strong>Cilj:</strong> Ponudite lead magnet (white paper, checklist, webinar) da dobijete kontakt.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Middle of Funnel</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Lead magnet preuzimači koji nisu zakazali demo.</p>
        <p className="text-sm mb-0"><strong>Cilj:</strong> Ponudite case study, customer testimonials, webinar — dokaz da rešenje funkcioniše.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Bottom of Funnel</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Posetioci stranice sa cenama ili demo stranice.</p>
        <p className="text-sm mb-0"><strong>Cilj:</strong> Direktna ponuda — limited time discount, besplatan trial, besplatna konsultacija.</p>
      </div>

      <hr />

      <h2>Kako postaviti temelje za uspešne kampanje</h2>
      <p>Pre nego što pokrenete prvu kampanju, ove 4 stvari moraju biti na mestu. Preskakanje ovih koraka je najčešći razlog neuspeha.</p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Conversion Tracking</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Bez tracking-a letite slepo. Ne znate šta donosi rezultate, ne možete optimizovati, bacate novac.</p>
        <p className="text-sm font-semibold mb-2">Setup uključuje:</p>
        <ul className="text-sm mb-3">
          <li><strong>Google Tag Manager</strong> — centralno upravljanje svim tagovima</li>
          <li><strong>GA4</strong> — analitika i atribucija</li>
          <li><strong>Google Ads conversion tag</strong> — direktno praćenje konverzija</li>
          <li><strong>Enhanced conversions</strong> — bolje matchovanje korisnika (povećava accuracy za 20–30%)</li>
        </ul>
        <p className="text-sm font-semibold mb-2">Šta pratiti:</p>
        <ul className="text-sm mb-0">
          <li>Primarne konverzije (kupovina, lead, demo zahtev)</li>
          <li>Sekundarne konverzije (add to cart, stranica sa cenama)</li>
          <li>Micro konverzije (scroll, video view, vreme na sajtu &gt; 2min)</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Vodič za Conversion Tracking</p>
        <p className="text-blue-800 text-sm mb-0">Za step-by-step vodič kako postaviti tracking, pročitajte <Link href="/blog/conversion-tracking-vodic" className="underline font-semibold">Conversion Tracking vodič</Link>.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Landing Pages</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Pravilo: svaka kampanja treba svoj landing page. Homepage nije landing page.</p>
        <p className="text-sm font-semibold mb-2">Landing page mora imati:</p>
        <ul className="text-sm mb-3">
          <li><strong>Jasan headline</strong> — koji odgovara oglasu (message match)</li>
          <li><strong>Benefit-focused copy</strong> — šta korisnik dobija, ne šta vi nudite</li>
          <li><strong>Social proof</strong> — testimonijali, recenzije, logoi klijenata, brojke</li>
          <li><strong>Jedan CTA</strong> — ne zbunjujte sa 5 opcija (jedan cilj po stranici)</li>
          <li><strong>Brzina</strong> — pod 3 sekunde load time (svaka sekunda kašnjenja = 7% manje konverzija)</li>
          <li><strong>Mobilna optimizacija</strong> — 60%+ saobraćaja je mobilno</li>
        </ul>
        <p className="text-sm mb-0"><strong>Najčešća greška:</strong> Slanje saobraćaja na homepage koja ima 10 linkova i nije fokusirana na konverziju.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Keyword Research</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Ključne reči nisu samo &quot;koliko ljudi traži&quot; — fokus je na intent-u.</p>
        <p className="text-sm font-semibold mb-2">Alati:</p>
        <ul className="text-sm mb-3">
          <li><strong>Google Keyword Planner</strong> — besplatan, dovoljan za početak</li>
          <li><strong>Semrush/Ahrefs</strong> — premium, detaljan uvid u konkurenciju</li>
          <li><strong>Google Search Console</strong> — šta vam već donosi organic saobraćaj</li>
        </ul>
        <p className="text-sm font-semibold mb-2">Fokusirajte se na:</p>
        <ul className="text-sm mb-0">
          <li><strong>Intent</strong> — Šta korisnik želi da postigne? (informativno vs kupovina)</li>
          <li><strong>Volume</strong> — Koliko ljudi traži? (balans između volume i intent-a)</li>
          <li><strong>Competition</strong> — Koliko je skupo? (high CPC = high intent obično)</li>
          <li><strong>Relevantnost</strong> — Da li možete isporučiti ono što korisnik traži?</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Competitor Analysis</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Pre nego što krenete, proverite šta rade konkurenti.</p>
        <p className="text-sm font-semibold mb-2">Šta analizirati:</p>
        <ul className="text-sm mb-3">
          <li>Ko se oglašava na vaše ključne reči?</li>
          <li>Kakve oglase koriste? (headline, copy, CTA)</li>
          <li>Na koje landing pages vode?</li>
          <li>Koji su im USP-ovi? (unique selling points)</li>
          <li>Koje ad extensions koriste?</li>
        </ul>
        <p className="text-sm mb-0"><strong>Alati:</strong> Semrush, SpyFu, ili jednostavno — pretražite kao korisnik i analizirajte oglase.</p>
      </div>

      <hr />

      <h2>Najčešće greške u Google oglašavanju</h2>
      <p>Posle rada sa 50+ klijenata, ovih 6 grešaka vidim najčešće. Sve su lako rešive.</p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #1</p>
        <p className="font-semibold mb-2">Nedostatak pravilnog tracking-a</p>
        <p className="text-sm text-gray-600 mb-3">Neverovatno koliko firmi troši hiljade evra bez pravilnog tracking-a. Ako ne znate šta konvertuje, ne možete optimizovati. Letite slepo.</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Postavite Google Tag Manager, GA4, Google Ads conversion tag, i Enhanced Conversions. Testirajte pre nego što pustite kampanje. <Link href="/blog/conversion-tracking-vodic" className="underline font-semibold">Vodič ovde</Link>.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #2</p>
        <p className="font-semibold mb-2">Loša struktura naloga</p>
        <p className="text-sm text-gray-600 mb-3">Sve u jednoj kampanji, sve ključne reči u jednoj ad grupi, brand i non-brand pomešani. Nemoguće optimizovati, nemoguće razumeti šta funkcioniše.</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Razdvojite brand i non-brand kampanje. Grupisati ključne reči po intent-u u različite ad grupe (maksimum 10–20 KR po grupi). Svaka ad grupa treba 2–3 relevantna oglasa.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #3</p>
        <p className="font-semibold mb-2">Ignorisanje negativnih ključnih reči</p>
        <p className="text-sm text-gray-600 mb-3">Plaćate za &quot;besplatno&quot;, &quot;kako napraviti sam&quot;, &quot;posao&quot;, &quot;kurs&quot;, &quot;torrent&quot; i slično. Novac bačen jer ti ljudi neće kupiti.</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Kreirajte negative keyword listu odmah na početku (besplatno, džabe, posao, plata, kurs, škola, torrent, download, DIY, sam). Ažurirajte listu svake nedelje na osnovu search terms report-a.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #4</p>
        <p className="font-semibold mb-2">Slanje saobraćaja direktno na homepage</p>
        <p className="text-sm text-gray-600 mb-3">Homepage nije dizajniran za konverziju — ima 10 linkova, opšti je, ne odgovara oglasu. Landing page jeste.</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Kreirajte landing page za svaku kampanju. Headline mora odgovarati oglasu (message match). Jedan cilj, jedan CTA. Brzina &lt; 3 sekunde.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #5</p>
        <p className="font-semibold mb-2">Nerealna očekivanja</p>
        <p className="text-sm text-gray-600 mb-3">&quot;Želim rezultate za nedelju dana sa budžetom od €300.&quot; Google Ads zahteva vreme za learning period i optimizaciju. Minimum 2–3 meseca za stabilne rezultate.</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Planirajte minimum 2–3 meseca testiranja. Budget minimum €500–1,000/mesec za početak (zavisi od industrije). Ne očekujte ROI u prvoj nedelji — algoritam uči.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #6</p>
        <p className="font-semibold mb-2">Set-and-forget mentalitet</p>
        <p className="text-sm text-gray-600 mb-3">Pokrenuli kampanje i mesec dana ništa ne dirali. Google Ads nije &quot;postavi i zaboravi&quot;. Zahteva kontinuiranu optimizaciju.</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Nedeljno: provera search terms, dodavanje negativnih KR, bid adjustments. Mesečno: A/B testiranje oglasa, landing page optimizacije, struktura naloga.</p>
        </div>
      </div>

      <hr />

      <h2>Kako meriti uspeh kampanja</h2>
      <p>Merenje uspeha Google Ads kampanja zavisi od toga šta prodajete — eCommerce ili B2B. Evo ključnih KPI-jeva za oba.</p>

      <h3>KPI-jevi za eCommerce</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Metrika</th>
              <th className="py-3 px-4 font-heading font-semibold">Šta pokazuje</th>
              <th className="py-3 px-4 font-heading font-semibold">Dobar benchmark</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">ROAS</td>
              <td className="py-3 px-4">Prihod ÷ trošak oglasa</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">3–5x minimum</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">CPA</td>
              <td className="py-3 px-4">Trošak po kupovini</td>
              <td className="py-3 px-4">Zavisi od AOV i marže</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Conversion Rate</td>
              <td className="py-3 px-4">% posetilaca koji kupe</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">1–3%</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">AOV</td>
              <td className="py-3 px-4">Prosečna vrednost porudžbine</td>
              <td className="py-3 px-4">Varira po industriji</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">CTR</td>
              <td className="py-3 px-4">% ljudi koji kliknu na oglas</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">2–4%</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>KPI-jevi za B2B</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Metrika</th>
              <th className="py-3 px-4 font-heading font-semibold">Šta pokazuje</th>
              <th className="py-3 px-4 font-heading font-semibold">Dobar benchmark</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">CPL</td>
              <td className="py-3 px-4">Trošak po lead-u</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">€10–50</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Lead Quality Score</td>
              <td className="py-3 px-4">% kvalifikovanih lead-ova</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Najvažnije</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">SQL Rate</td>
              <td className="py-3 px-4">% lead-ova koji postanu sales qualified</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">20–40%</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Pipeline Value</td>
              <td className="py-3 px-4">Vrednost potencijalnih dealova</td>
              <td className="py-3 px-4">Prati u CRM-u</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">CTR</td>
              <td className="py-3 px-4">% ljudi koji kliknu na oglas</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">3–6%</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Conversion Rate</td>
              <td className="py-3 px-4">% posetilaca koji ostave kontakt</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">2–8%</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Benchmark-ovi za Srbiju i region</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Metrika</th>
              <th className="py-3 px-4 font-heading font-semibold">eCommerce (Srbija)</th>
              <th className="py-3 px-4 font-heading font-semibold">B2B (Srbija)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">CPC (prosek)</td>
              <td className="py-3 px-4">€0.15–0.60</td>
              <td className="py-3 px-4">€0.50–2.00</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">CTR</td>
              <td className="py-3 px-4">2–4%</td>
              <td className="py-3 px-4">3–6%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Conversion Rate</td>
              <td className="py-3 px-4">1–3%</td>
              <td className="py-3 px-4">2–8%</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">ROAS (cilj)</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">3–5x</span></td>
              <td className="py-3 px-4">N/A (fokus na lead quality)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Minimum budžet</td>
              <td className="py-3 px-4">€500–1,000/mesec</td>
              <td className="py-3 px-4">€1,000–2,000/mesec</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">Benchmark-ovi su orijentir, ne pravilo. Vaša industrija, ponuda, i tržište mogu značajno uticati na rezultate. <Link href="/blog/koliko-kosta-google-ads" className="underline font-semibold">Više o budžetima ovde</Link>.</p>
      </div>

      <hr />

      <h2>Često postavljana pitanja</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko košta Google oglašavanje?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          <p className="mb-2">Zavisi od industrije i konkurencije. U Srbiji, prosečan CPC je €0.15–1.50.</p>
          <p className="mb-0"><strong>Preporučeni minimalni mesečni budžet:</strong> €500–1,000 za manje biznise i testiranje, €2,000+ za ozbiljnije kampanje. <Link href="/blog/koliko-kosta-google-ads" className="underline font-semibold">Detaljan vodič o budžetima</Link>.</p>
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li Google oglašavanje radi za B2B?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          <p className="mb-2">Apsolutno. B2B ima specifičnosti (duži sales cycle, manji search volume, viši CPC), ali Google Ads je i dalje jedan od najefikasnijih kanala za B2B lead generation.</p>
          <p className="mb-0">Ključ je fokus na <strong>kvalitet lead-ova</strong> umesto na broj, pravilno praćenje offline konverzija (CRM integracija), i remarketing kroz ceo funnel.</p>
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko vremena treba da vidim rezultate?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          <ul className="mb-0">
            <li><strong>Prve indikacije:</strong> 2–4 nedelje (learning period)</li>
            <li><strong>Prave rezultate:</strong> 2–3 meseca (dovoljno data za optimizaciju)</li>
            <li><strong>Optimizovan, stabilan nalog:</strong> 4–6 meseci</li>
          </ul>
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li mi treba agencija za Google oglašavanje?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          <p className="mb-2">Ne obavezno. Zavisi od budžeta i kompleksnosti:</p>
          <ul className="mb-0">
            <li><strong>Do €2,000/mesec:</strong> Kvalitetan freelancer ili čak DIY sa edukacijom može biti dovoljan</li>
            <li><strong>€2,000–10,000/mesec:</strong> Freelancer ili boutique agencija</li>
            <li><strong>€10,000+/mesec:</strong> Agencija ili in-house tim</li>
          </ul>
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta je bolje: Google Ads ili Facebook Ads?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          <p className="mb-2">Zavisi od cilja:</p>
          <ul className="mb-3">
            <li><strong>Google Ads</strong> — hvata ljude sa namerom (&quot;hoću da kupim X&quot;). Bolji za direktne prodaje.</li>
            <li><strong>Facebook Ads</strong> — hvata ljude po interesovanjima i demografiji. Bolji za brand awareness i prospecting.</li>
          </ul>
          <p className="mb-0"><strong>Najbolje:</strong> Kombinacija oba kanala. Google za bottom-of-funnel, Facebook za top-of-funnel i remarketing.</p>
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li mogu sam voditi Google Ads?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          <p className="mb-2">Da, ako imate vreme i volje za učenje. Google Ads nije rocket science, ali zahteva:</p>
          <ul className="mb-2">
            <li>Razumevanje osnova (aukcijski model, Quality Score, match types)</li>
            <li>Pravilno postavljanje tracking-a (najkritičnije)</li>
            <li>Kontinuiranu optimizaciju (nedeljno minimum)</li>
            <li>Strpljenje (rezultati ne dolaze preko noći)</li>
          </ul>
          <p className="mb-0">Ako nemate vreme ili imate veći budžet (€2,000+), preporučujem stručnjaka.</p>
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Trebate pomoć sa Google Ads kampanjama?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">Specijalizujem se za Google Ads upravljanje i optimizaciju za eCommerce i B2B firme. Zakazite besplatnu konsultaciju za analizu vaših trenutnih kampanja ili planiranje novih.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Zakažite besplatnu konsultaciju</Link>
      </div>

      <h3>Povezani vodiči</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/blog/koliko-kosta-google-ads" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Koliko košta Google Ads?</p>
          <p className="text-xs text-gray-500 mb-0">Budžeti, benchmark-ovi i realističan ROI za Srbiju i region</p>
        </Link>
        <Link href="/blog/remarketing-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako vratiti posetioce koji nisu kupili prvi put</p>
        </Link>
        <Link href="/blog/quality-score-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Quality Score vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako poboljšati Quality Score i smanjiti troškove</p>
        </Link>
        <Link href="/blog/conversion-tracking-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking vodič</p>
          <p className="text-xs text-gray-500 mb-0">Step-by-step setup za GA4, GTM i Enhanced Conversions</p>
        </Link>
        <Link href="/blog/google-shopping-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako postaviti product feed i Shopping kampanje</p>
        </Link>
        <Link href="/blog/performance-max-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kompletan vodič za PMax kampanje</p>
        </Link>
        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads upravljanje</p>
          <p className="text-xs text-gray-500 mb-0">Profesionalno upravljanje Google Ads kampanjama</p>
        </Link>
      </div>

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

function PerformanceMaxVodicPost() {
  return (
    <>
      <p>
        Performance Max (PMax) kampanje su Google-ov najmoćniji — i najkontroverzniji — alat za automatizovano oglašavanje. Dajete algoritmu budžet, kreativ i cilj, on pronalazi kupce na svim Google mrežama odjednom.
      </p>
      <p>
        U praksi, PMax može biti izuzetno efikasan kanal koji skalira rezultate ili crna rupa koja guta budžet bez transparentnosti. Razlika je u pristupu i razumevanju kako sistem funkcioniše.
      </p>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">Performance Max kampanje kombinuju sve Google mreže u jednoj kampanji sa automatskim bidding-om. Preporučujem ih za skaliranje nakon što imate stabilan conversion tracking i dovoljno podataka — minimum 50+ konverzija mesečno. Hibridni pristup daje najbolje rezultate: Search za kontrolu, Shopping za proizvode, PMax za doseg.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Google mreža</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">50+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">konverzija idealno</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">4–6</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">nedelja learning</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3–6x</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">ROAS za eCommerce</p>
          </div>
        </div>
      </div>

      <hr />

      <h2>Šta je Performance Max i zašto je poseban</h2>
      <p>
        Performance Max je automatizovana kampanja koja koristi machine learning da prikaže vaše oglase na svim Google mrežama odjednom: Search, Shopping, Display, YouTube, Gmail, Discover i Maps. Umesto da kreirate odvojene kampanje po kanalu, dajete Google-u sirov materijal i on kombinuje sve u stvarnom vremenu.
      </p>
      <p><strong>Vi dajete:</strong></p>
      <ul>
        <li><strong>Conversion ciljeve</strong> — šta želite da se desi (kupovina, lead, poziv)</li>
        <li><strong>Budžet</strong> — dnevni ili kampanjski</li>
        <li><strong>Asset-e</strong> — slike, video, naslove, opise, logoe</li>
        <li><strong>Audience signals</strong> — ko je vaša ciljna publika (nije striktni targeting)</li>
        <li><strong>Product feed</strong> — za eCommerce (povezan sa Merchant Center)</li>
      </ul>
      <p><strong>Google automatski radi:</strong></p>
      <ul>
        <li>Kombinuje asset-e u različite formate oglasa (Responsive, Shopping, Video, Display)</li>
        <li>Odlučuje gde i kada prikazati svaki oglas</li>
        <li>Automatski bidduje za konverzije na osnovu real-time podataka</li>
        <li>Optimizuje ka vašem Target CPA ili Target ROAS cilju</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">&quot;Crna kutija&quot; problem</p>
        <p className="text-blue-800 text-sm mb-0">PMax vam ne daje nivo kontrole i transparentnosti koji imate sa Search ili Shopping kampanjama. Ne vidite sve search terms, ne znate tačnu alokaciju budžeta po mreži, ne možete isključiti većinu placements, ne kontrolišete bidding po keyword-u. Dobijate agregirane podatke i morate verovati algoritmu. Moje iskustvo je da PMax najbolje funkcioniše za oglašivače koji veruju podacima više nego intuiciji i imaju strpljenja za learning period.</p>
      </div>

      <hr />

      <h2>Kada koristiti Performance Max kampanje</h2>
      <p>
        PMax nije univerzalno rešenje. U nekim situacijama je idealan, u drugim je greška. Evo kada preporučujem PMax vs kada ne.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">✅ Kada DA</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Proven conversion history</h3>
          <p className="text-sm text-gray-600 mb-0">Imate minimum 30–50 konverzija mesečno. Algoritam uči iz vaših podataka — treba mu data da bi optimizovao. Bez conversion history, PMax gađa nasumično.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">✅ Kada DA</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Želite skaliranje dosega</h3>
          <p className="text-sm text-gray-600 mb-0">Dostigli ste plafon sa Search ili Shopping kampanjama i želite da dosegnete korisnike na YouTube, Display, Discover. PMax je alat za skaliranje, ne za pokretanje od nule.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">❌ Kada NE</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Mali budžet</h3>
          <p className="text-sm text-gray-600 mb-0">Ispod €1,000–1,500 mesečno. Algoritam nema dovoljno budžeta za testiranje i učenje na 7 mreža. Rezultat je često suboptimalan.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">❌ Kada NE</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Potrebna granularna kontrola</h3>
          <p className="text-sm text-gray-600 mb-0">Ako vam treba striktna kontrola troškova po proizvodu, brand vs non-brand alokacija budžeta, ili bid per keyword — PMax nije pravi alat. Koristite Search ili Standard Shopping.</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">Conversion tracking mora biti 100% ispravan pre pokretanja PMax-a. Loši podaci = loše odluke algoritma. Ako nemate pouzdan tracking, najpre popravite to. Preporučujem da pročitate <Link href="/blog/conversion-tracking-vodic" className="underline">vodič za conversion tracking</Link> pre nego što pokrenete PMax.</p>
      </div>

      <hr />

      <h2>Struktura Performance Max kampanje</h2>
      <p>
        PMax kampanja se sastoji od asset grupa. Svaka asset grupa je tematska celina sa svojim kreativima, audience signalima, i (za eCommerce) listing grupama proizvoda.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Cilj kampanje</strong> <span className="text-gray-500">— konverzije koje optimizujete</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Budžet</strong> <span className="text-gray-500">— dnevni ili kampanjski</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Bid strategija</strong> <span className="text-gray-500">— Maximize Conversions / Target CPA / Target ROAS</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Asset grupe</strong> <span className="text-gray-500">— tematske celine (slike, video, tekst, audience signals, proizvodi)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>URL Expansion setting</strong> <span className="text-gray-500">— preporučujem OFF</span></div>
          </div>
        </div>
      </div>

      <p className="font-semibold">Šta sadrži asset grupa:</p>
      <ul>
        <li><strong>Final URL</strong> — landing page gde vodite saobraćaj</li>
        <li><strong>Slike</strong> — landscape (1.91:1), square (1:1), portrait (4:5)</li>
        <li><strong>Logoi</strong> — square (1:1) i landscape (4:1)</li>
        <li><strong>Video</strong> — YouTube video (ili će Google automatski generisati iz slika)</li>
        <li><strong>Headlines</strong> — kratki (30 chars) i dugi (90 chars), minimum 3-5 varijanti</li>
        <li><strong>Descriptions</strong> — kratki (60 chars) i dugi (90 chars), minimum 2-4 varijante</li>
        <li><strong>Audience Signals</strong> — sugestije za targeting (nisu strict targeting)</li>
        <li><strong>Listing Group</strong> — segmentacija proizvoda iz feed-a (za eCommerce)</li>
      </ul>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Tip biznisa</th>
              <th className="py-3 px-4 font-heading font-semibold">Preporučen broj asset grupa</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce (mali)</td>
              <td className="py-3 px-4">2–4</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">eCommerce (srednji)</td>
              <td className="py-3 px-4">4–8</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce (veliki)</td>
              <td className="py-3 px-4">8–15+</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">B2B (jedna usluga)</td>
              <td className="py-3 px-4">1–2</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">B2B (više usluga)</td>
              <td className="py-3 px-4">3–6</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Pravilo tematske povezanosti</p>
        <p className="text-sm text-yellow-900 mb-0">Svaka asset grupa treba imati tematsku povezanost — proizvodi, poruka, landing page i audience signals treba da budu usklađeni. Jedna asset grupa = jedan konzistentan message-to-market match. Ne mešajte muške patike sa ženskim torbicama u istoj asset grupi.</p>
      </div>

      <hr />

      <h2>Performance Max za eCommerce</h2>
      <p>
        Za eCommerce, PMax je najmoćniji kada se pokreće sa optimizovanim product feed-om. PMax bez feed-a je u suštini Display kampanja u novom pakovanju — gubi Shopping i Product Listing Ads moć.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Optimizovati product feed titles</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Title je najvažnije polje u feed-u. Uključite ključne atribute: brand, tip proizvoda, boja, materijal, veličina. Algoritam koristi title za matching sa search queries.</p>
        <ul className="text-sm">
          <li><strong>Loše:</strong> &quot;Nike patike crne&quot;</li>
          <li><strong>Dobro:</strong> &quot;Nike Air Max 270 muške patike crne sportske 42&quot;</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dodati custom labels za segmentaciju</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Custom label 0–4 su vaša slobodna polja za grupisanje proizvoda. Preporučujem segmentaciju po profitabilnosti i performansama.</p>
        <ul className="text-sm">
          <li><strong>Custom Label 0:</strong> Marža (high / medium / low)</li>
          <li><strong>Custom Label 1:</strong> Performance (best_seller / slow_mover / new)</li>
          <li><strong>Custom Label 2:</strong> Sezona (summer / winter / all_season)</li>
          <li><strong>Custom Label 3:</strong> Cenovni rang (premium / mid / budget)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Segmentovati asset grupe po kategorijama</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Ne stavljajte sve proizvode u jednu asset grupu. Segmentirajte po Product Type ili Custom Label da biste imali različite kreative i poruke za različite kategorije.</p>
        <ul className="text-sm">
          <li><strong>Primer (Fashion eCommerce):</strong> AG 1 = Best Sellers, AG 2 = Muška Obuća, AG 3 = Ženska Obuća, AG 4 = Accessories, AG 5 = Sale Items</li>
        </ul>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Aspekt</th>
              <th className="py-3 px-4 font-heading font-semibold">Standard Shopping</th>
              <th className="py-3 px-4 font-heading font-semibold">Performance Max</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Kontrola</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Visoka</span></td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Niska</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Reach</td>
              <td className="py-3 px-4">Shopping only</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Sve mreže</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Bidding</td>
              <td className="py-3 px-4">Manual ili Smart</td>
              <td className="py-3 px-4">Samo automated</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Search Terms</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Potpun uvid</span></td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Delimičan</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Learning period</td>
              <td className="py-3 px-4">Brži (1–2 nedelje)</td>
              <td className="py-3 px-4">Sporiji (4–6 nedelja)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Skaliranje</td>
              <td className="py-3 px-4">Manuelno</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Automatsko</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Moja preporuka: Hibridni pristup</p>
        <p className="text-blue-800 text-sm mb-0">Počnite sa Standard Shopping kampanjama za kontrolu i učenje. Dodajte PMax kada imate stabilan conversion history (50+ konverzija/mesec). Najbolji rezultati dolaze iz kombinacije: Standard Shopping za brand i kontrolu, PMax za prospecting i skaliranje. Detaljnije o Shopping kampanjama: <Link href="/blog/google-shopping-vodic" className="underline">Google Shopping vodič</Link>.</p>
      </div>

      <hr />

      <h2>Performance Max za B2B firme</h2>
      <p>
        PMax za B2B je izazovniji nego za eCommerce. Manji volume konverzija, duži sales cycles, i potreba za kvalitetom leadova (ne samo volume) čine setup komplikovanijim.
      </p>
      <p>Moje iskustvo je da PMax funkcioniše za B2B kada:</p>
      <ul>
        <li>Imate minimum 15–20 konverzija mesečno (form fills ili pozivi)</li>
        <li>Lead-to-sale rate je konzistentan (znate koji leadovi postaju klijenti)</li>
        <li>Možete importovati offline konverzije (zatvoreni dealovi iz CRM-a)</li>
      </ul>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Offline conversion import</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">PMax optimizuje ka onome što mu kažete da je konverzija. Ako optimizujete samo ka form fills, dobićete volume form fills — ali ne nužno kvalitetne. Rešenje: importujte SQL (Sales Qualified Lead) ili Won deals nazad u Google Ads.</p>
        <ul className="text-sm">
          <li>Mapiranje GCLID-a sa CRM-om</li>
          <li>Import &quot;Won Deal&quot; konverzije iz CRM-a (Pipedrive, HubSpot, Salesforce)</li>
          <li>PMax uči šta pravi lead izgleda</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Audience signals su kritični</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Za B2B, audience signals su važniji nego za eCommerce. Prvi mesec learning period-a PMax će koristiti vaše signale pre nego što proširi reach.</p>
        <ul className="text-sm">
          <li><strong>Customer Match liste</strong> — postojeći klijenti (email liste iz CRM-a)</li>
          <li><strong>Website visitors</strong> — korisnici koji su bili na ključnim stranicama (pricing, case studies)</li>
          <li><strong>In-market audiences</strong> — business services, software, consulting</li>
          <li><strong>Custom segments</strong> — ljudi koji su pretraživali relevantne термине</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Account-level negative keywords</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">PMax dozvoljava samo account-level negative keywords. Koristite ih agresivno da filtrirate nekvalitetne upite.</p>
        <ul className="text-sm">
          <li><strong>Job-related:</strong> &quot;posao&quot;, &quot;karijera&quot;, &quot;plata&quot;, &quot;oglasi za posao&quot;</li>
          <li><strong>Student terms:</strong> &quot;seminarski&quot;, &quot;završni rad&quot;, &quot;projekat&quot;</li>
          <li><strong>Free-seekers:</strong> &quot;besplatno&quot;, &quot;free&quot;, &quot;trial&quot;, &quot;crack&quot;</li>
          <li><strong>Competitor employees:</strong> &quot;[konkurent] kontakt&quot;, &quot;[konkurent] prijava&quot;</li>
        </ul>
      </div>

      <hr />

      <h2>Optimizacija Performance Max kampanja</h2>
      <p>
        Najveća frustracija sa PMax-om je ograničena kontrola. Ali kontrola nije nula — imate poluge koje možete pomerati. Evo šta možete (i treba) optimizovati.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Asset kvalitet i raznolikost</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Google kombinuje vaše asset-e u različite formate. Što više kvalitetnih varijanti date, to bolje algoritam može optimizovati.</p>
        <ul className="text-sm">
          <li>Redovno osvežavajte kreativu (minimum svaka 2–3 meseca)</li>
          <li>A/B testirajte različite poruke u naslovima</li>
          <li>Pratite asset performance ratings (Low / Good / Best)</li>
          <li>Odmah zamenite &quot;Low&quot; rated asset-e</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Audience signals refinement</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Audience signals nisu striktni targeting, ali pomažu algoritmu da brže nauči. Što bolji signali, brže učenje.</p>
        <ul className="text-sm">
          <li>Dodavajte audience signals (Custom Audiences, Customer Match, Affinity)</li>
          <li>Iz Insights tab-a vidite koji audience segmenti performuju</li>
          <li>First-party data (vaši website visitors, email liste) je najvažniji signal</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Product feed optimizacija (eCommerce)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Za eCommerce PMax, feed je pola bitke. Algoritam koristi feed data za matching.</p>
        <ul className="text-sm">
          <li>Title optimizacija (brand + tip + atributi)</li>
          <li>Custom label strategija (marža, sezona, performance)</li>
          <li>Listing group segmentacija (All products vs specifične kategorije)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Bid strategija i ciljna vrednost</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Možete menjati Target CPA ili Target ROAS kada vidite rezultate. Preporučujem postepene izmene.</p>
        <ul className="text-sm">
          <li>Ne menjajte target više od 10–20% odjednom</li>
          <li>Čekajte minimum 7–10 dana pre sledeće izmene</li>
          <li>Postavite realan target baziran na historijskim podacima</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">URL Expansion setting</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">URL Expansion omogućava Google-u da automatski šalje saobraćaj na druge stranice vašeg sajta, ne samo Final URL iz asset grupe. Moja preporuka: OFF za većinu biznisa.</p>
        <ul className="text-sm">
          <li>Sa OFF: Kontrolišete gde ide saobraćaj</li>
          <li>Sa ON: Google može slati ljude na stranice koje ne želite (blog, about, stare promo stranice)</li>
        </ul>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Bid strategija</th>
              <th className="py-3 px-4 font-heading font-semibold">Kada koristiti</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Maximize Conversions</td>
              <td className="py-3 px-4">Za početak, dok skupljate data. Nema target, samo maksimizuje konverzije sa datim budžetom.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Target CPA</td>
              <td className="py-3 px-4">Kada znate koliko možete platiti po konverziji (lead, poziv). Postavite realan CPA baziran na historiji.</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Target ROAS</td>
              <td className="py-3 px-4">Za eCommerce sa različitim vrednostima porudžbina. Zahteva Conversion Value tracking setup.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-base mb-3">Timeline: Kako pristupiti optimizaciji</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Nedelja 1–4</strong> <span className="text-gray-500">— Koristite Maximize Conversions, ne menjajte ništa. Algoritam uči.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Nedelja 5–6</strong> <span className="text-gray-500">— Pređite na Target CPA/ROAS sa relanim target-om (baziranim na prvim rezultatima).</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Nedelja 7+</strong> <span className="text-gray-500">— Testirajte nove asset-e, refinirajte audience signals, podešavajte target.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Mesečno</strong> <span className="text-gray-500">— Osvežite kreativ, proverite placement reports, dodajte negative keywords.</span></div>
          </div>
        </div>
      </div>

      <hr />

      <h2>Najčešće greške sa Performance Max</h2>
      <p>
        Ovo su greške koje vidim kod 90% oglašivača koji pokušaju PMax prvi put — i koje koštaju novca.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #1</p>
          <p className="font-semibold mb-2">Pokretanje bez dovoljno conversion data</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Prvo izgradite conversion history sa Search ili Shopping kampanjama. Minimum 30 konverzija mesečno pre nego što pokrenete PMax. Inače, algoritam gađa nasumično.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #2</p>
          <p className="font-semibold mb-2">Jedan asset set za sve kategorije</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Segmentujte asset grupe po relevantnosti. Različite kategorije proizvoda = različite asset grupe sa custom kreativom. Generički asset-i = generički rezultati.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #3</p>
          <p className="font-semibold mb-2">Ignorisanje audience signals</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Audience signals nisu targeting, ali pomažu algoritmu da brže nauči. Dodajte Customer Match liste, website visitors, in-market audiences. Što bolji signali, brže učenje. Preporučujem minimum 3–5 različitih audience signala po asset grupi.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #4</p>
          <p className="font-semibold mb-2">&quot;Postavi i zaboravi&quot; mentalitet</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> PMax zahteva manje dnevnog rada nego Search kampanje, ali ne nula. Nedeljne provere su minimum: performance metrics, asset ratings, audience insights, placement reports. Mesečno osvežite kreativ i proverite search terms insights.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #5</p>
          <p className="font-semibold mb-2">Loš ili nepouzdan conversion tracking</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Ako trackujete pogrešne konverzije (npr. &quot;Click on button&quot; umesto stvarne kupovine) ili nemate conversion values setup, PMax optimizuje ka pogrešnom cilju. Prvo popravite tracking: <Link href="/blog/conversion-tracking-vodic" className="underline">Conversion tracking vodič</Link>.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2>Realna očekivanja i rezultati</h2>
      <p>
        Najvažnije pitanje: šta možete očekivati od PMax-a u praksi? Evo realnih brojki baziranih na mom iskustvu sa 20+ PMax kampanja.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Metrika</th>
              <th className="py-3 px-4 font-heading font-semibold">eCommerce</th>
              <th className="py-3 px-4 font-heading font-semibold">B2B Lead Gen</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">ROAS / CPL</td>
              <td className="py-3 px-4">3–6x ROAS (optimizovane kampanje)</td>
              <td className="py-3 px-4">Varijabilno — često viši CPL nego Search</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Porast volume-a</td>
              <td className="py-3 px-4">20–40% porast revenue-a vs samo Search/Shopping</td>
              <td className="py-3 px-4">Volume značajno raste, ali lead quality variše</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Learning period</td>
              <td className="py-3 px-4">4–6 nedelja</td>
              <td className="py-3 px-4">6–8 nedelja (duži sales cycle)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Minimum konverzija</td>
              <td className="py-3 px-4">50+ mesečno idealno</td>
              <td className="py-3 px-4">15–20 mesečno minimum</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Minimum budžet</td>
              <td className="py-3 px-4">€1,500+ mesečno</td>
              <td className="py-3 px-4">€1,000+ mesečno</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-base mb-3">Timeline: Šta očekivati kroz vreme</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Nedelja 1–2</strong> <span className="text-gray-500">— Algoritam testira sve mreže. Performance je nestabilan, CPA/ROAS nisu optimalni.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Nedelja 3–4</strong> <span className="text-gray-500">— Algoritam počinje da uči šta funkcioniše. Performance se stabilizuje.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Nedelja 5–6</strong> <span className="text-gray-500">— Performance optimizacija počinje. CPA/ROAS se približava cilju.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Mesec 2+</strong> <span className="text-gray-500">— Stabilne performanse. Vreme za skaliranje ili asset refresh.</span></div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Pravilo: Kada odustati od PMax-a</p>
        <p className="text-sm text-yellow-900 mb-0">Ako posle 8–10 nedelja i 100+ konverzija rezultati su konstantno ispod cilja (ROAS ispod target-a, CPA iznad prihvatljivog, lead quality neprihvatljiva) i ne vidiš trend poboljšanja — možda PMax nije za vaš biznis u ovom trenutku. Vratite se osnovama: Search ili Shopping kampanje sa više kontrole.</p>
      </div>

      <hr />

      <h2>Često postavljana pitanja</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li Performance Max zamenjuje Shopping kampanje?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Ne nužno. Mnogi oglašivači koriste oba formata — Standard Shopping za brand i kontrolu, PMax za prospecting i skaliranje. Google aktivno gura PMax, ali Shopping kampanje i dalje funkcionišu odlično. Moja preporuka: hibridni pristup. Ne zatvarajte Shopping kampanje ako dobro performuju, već dodajte PMax kao dodatni kanal.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliki budžet treba za Performance Max?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum €50–100 dnevno (€1,500–3,000 mesečno) za smislene rezultate. Ispod toga, algoritam nema dovoljno budžeta da testira 7 različitih mreža i skupi dovoljno podataka za optimizaciju. Za B2B sa manjim volume-om konverzija, može funkcionisati sa €30–50 dnevno, ali učenje će biti sporije.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto ne vidim sve search terms u PMax kampanjama?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Google ograničava search terms insights za PMax. Vidite samo agregirane kategorije i top terme, ne sve kao u Search kampanjama. Ovo je legitimna kritika PMax-a — gubi se transparentnost. Razlog je što PMax radi na više mreža istovremeno i Google ne želi da prikaže kompletan stream podataka. Rešenje: koristite Insights tab i gledate trends, ne pojedinačne termine.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li PMax kanibalizuje moje druge kampanje?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Može. PMax ima prioritet za Shopping queries — što znači da će PMax preuzeti impressions od Standard Shopping kampanja za iste proizvode. To nije nužno loše ako PMax performuje bolje. Pratite ukupne rezultate account-level, ne samo PMax. Ako ukupan ROAS ili konverzije rastu, kanibalizacija nije problem. Ako padaju, razmislite o strategiji — možda isključite neke proizvode iz PMax-a ili podesite bidding.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kada treba isključiti Performance Max?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Kada konstantno underperformuje vs vaši ciljevi posle 8+ nedelja (dovoljno vremena za learning), kada je lead quality neprihvatljiva i ne poboljšava se sa offline conversion import-om, ili kada jednostavno ne odgovara vašem poslovnom modelu (npr. potreba za striktnom kontrolom budžeta po proizvodu). PMax nije za sve — i to je OK. Neki biznisi bolje funkcionišu sa Search + Shopping + Remarketing kombinacijom. <Link href="/blog/remarketing-vodic" className="underline">Remarketing vodič</Link>.
          </div>
        </details>
      </div>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Razmišljate o Performance Max kampanji?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">Pomažem firmama da pokrenu i optimizuju PMax kampanje sa hibridnim pristupom — Search za kontrolu, Shopping za proizvode, PMax za skaliranje. Zakažite besplatnu konsultaciju da vidimo da li je PMax pravi izbor za vaš biznis.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Zakažite besplatnu konsultaciju</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/blog/google-shopping-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako optimizovati product feed i strukturu Shopping kampanja za bolji ROAS.</p>
        </Link>
        <Link href="/blog/remarketing-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing vodič</p>
          <p className="text-xs text-gray-500 mb-0">Strategije za audience segmentaciju i dinamički remarketing na Display i YouTube.</p>
        </Link>
        <Link href="/blog/conversion-tracking-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako postaviti ispravan conversion tracking pre pokretanja PMax kampanja.</p>
        </Link>
        <Link href="/blog/google-oglasavanje-za-firme" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads za firme</p>
          <p className="text-xs text-gray-500 mb-0">Kompletna strategija Google Ads oglašavanja za B2B i eCommerce.</p>
        </Link>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">PMax je moćan alat — ali nije magija. Funkcioniše najbolje kada imate solid conversion tracking, kvalitetne asset-e, i strpljenja za learning period. Moj savet: koristite PMax kao deo strategije, ne kao jedinu kampanju.</p>
      </div>

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
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google Shopping kampanje donose 3-8x ROAS kada su pravilno postavljene. 80% uspeha zavisi od optimizacije product feed-a — 10 obaveznih atributa, strategija title-ova, i 5 custom labela za segmentaciju. Preporučujem strukturu po prioritetu (High/Medium/Low) i Target ROAS bidding za stabilne kampanje sa 50+ mesečnih konverzija.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">10</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">obaveznih atributa</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">5</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">custom labela</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3-8x</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">ROAS opseg</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">80%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">uspeha u feed-u</p>
          </div>
        </div>
      </div>

      <p>
        Google Shopping kampanje su najvažniji kanal za većinu eCommerce biznisa. Vizuelni format sa slikom, cenom i imenom prodavnice stavlja proizvod na vrh pretrage. Korisnici vide proizvod pre nego što kliknu, što filtrira nekvalifikovan saobraćaj i dovodi ljude koji su spremni da kupe.
      </p>
      <p>
        Shopping kampanje su samo onoliko dobre koliko je dobar vaš product feed i struktura kampanja. Moje iskustvo je da 80% problema proizilazi iz neoptimizovanog feed-a — bez obzira koliko trošite, loš feed znači loše rezultate.
      </p>

      <hr />

      <h2>Kako Google Shopping funkcioniše</h2>
      <p>
        Za razliku od Search kampanja gde birate ključne reči, Google Shopping koristi vaš <strong>product feed</strong> da odredi kada prikazati oglase. Google matchuje podatke iz feed-a sa pretragama korisnika i prikazuje relevantne proizvode.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Kreirate product feed</strong> <span className="text-gray-500">— XML ili TXT fajl sa svim podacima o proizvodima</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Upload u Google Merchant Center</strong> <span className="text-gray-500">— centralna platforma za upravljanje feed-om</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Povezujete sa Google Ads</strong> <span className="text-gray-500">— omogućava kreiranje Shopping kampanja</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Google matchuje proizvode sa pretragama</strong> <span className="text-gray-500">— automatski targeting na osnovu feed podataka</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Plaćate po kliku</strong> <span className="text-gray-500">— CPC model, kao i Search kampanje</span></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prednost</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Vizuelni format</h3>
          <p className="text-sm text-gray-600 mb-0">Korisnik vidi proizvod, cenu i brend pre klika — direktna pre-kvalifikacija kupaca.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prednost</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Visok purchase intent</h3>
          <p className="text-sm text-gray-600 mb-0">Ljudi pretražuju specifične proizvode sa namerom kupovine, ne istraživanja.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prednost</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Cena vidljiva odmah</h3>
          <p className="text-sm text-gray-600 mb-0">Transparentnost eliminuše klikove od korisnika kojima je proizvod preskup.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prednost</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Manje konkurencije</h3>
          <p className="text-sm text-gray-600 mb-0">Mnogi eCommerce ne optimizuju feed — prilika za bolje pozicije i niži CPC.</p>
        </div>
      </div>

      <hr />

      <h2>Product feed — temelj Shopping kampanja</h2>
      <p>
        Vaš product feed je XML ili TXT fajl koji sadrži sve informacije o proizvodima. Google koristi ove podatke da odluči za koje pretrage prikazati vaš proizvod, kako ga rangirati u odnosu na konkurenciju, i da li je proizvod eligible za prikaz.
      </p>
      <p>
        Moje iskustvo je da 80% problema sa Shopping kampanjama dolazi iz loše optimizovanog feed-a. Ako feed nije dobar, ni najbolji bidding neće pomoći.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Atribut</th>
              <th className="py-3 px-4 font-heading font-semibold">Šta je</th>
              <th className="py-3 px-4 font-heading font-semibold">Primer</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">id</td>
              <td className="py-3 px-4">Jedinstveni ID proizvoda</td>
              <td className="py-3 px-4">SKU-12345</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">title</td>
              <td className="py-3 px-4">Naziv proizvoda</td>
              <td className="py-3 px-4">Nike Air Max 90 Muške Bele Patike 43</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">description</td>
              <td className="py-3 px-4">Opis proizvoda</td>
              <td className="py-3 px-4">Detaljni opis sa specifikacijama</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">link</td>
              <td className="py-3 px-4">URL proizvoda</td>
              <td className="py-3 px-4">https://shop.rs/product/12345</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">image_link</td>
              <td className="py-3 px-4">URL glavne slike</td>
              <td className="py-3 px-4">https://shop.rs/images/12345.jpg</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">price</td>
              <td className="py-3 px-4">Cena proizvoda</td>
              <td className="py-3 px-4">12990.00 RSD</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">availability</td>
              <td className="py-3 px-4">Dostupnost</td>
              <td className="py-3 px-4">in stock</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">brand</td>
              <td className="py-3 px-4">Brend proizvoda</td>
              <td className="py-3 px-4">Nike</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">gtin</td>
              <td className="py-3 px-4">Barkod (GTIN/EAN)</td>
              <td className="py-3 px-4">1234567890123</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">condition</td>
              <td className="py-3 px-4">Stanje proizvoda</td>
              <td className="py-3 px-4">new</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Title optimizacija — najvažniji atribut</h3>
      <p>
        Title je najvažniji atribut u feed-u. Google ga koristi za matching sa pretragama korisnika. Loš title = nemate šansu da se prikažete za relevantne pretrage.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">[Brand] + [Tip proizvoda] + [Ključni atributi] + [Model/Varijanta]</p>
      </div>

      <p className="font-semibold">Loši vs dobri title-ovi:</p>
      <ul>
        <li>Loše: "Patike muške" → Dobro: "Nike Air Max 90 Muške Patike Bele Broj 43"</li>
        <li>Loše: "Laptop HP" → Dobro: "HP Pavilion 15 Laptop i5 16GB RAM 512GB SSD 15.6 inch"</li>
        <li>Loše: "Haljina" → Dobro: "Zara Letnja Haljina Crvena Pamuk Veličina M"</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Limit karaktera</p>
        <p className="text-blue-800 text-sm mb-0">Google dozvoljava 150 karaktera, ali prvih 70 je najvažnije — to je vidljivo u oglasu. Stavite najvažnije informacije na početak.</p>
      </div>

      <h3>Description optimizacija</h3>
      <p>
        Description pomaže Google-u da razume proizvod i utiče na relevantnost. Preporučujem 500-1000 karaktera, sa fokusom na ključne informacije na početku.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="font-heading font-bold text-lg mb-4">Best practices za description</p>
        <ul className="text-sm space-y-2 mb-0">
          <li>Počnite sa najvažnijim informacijama (tip proizvoda, namena)</li>
          <li>Uključite ključne reči prirodno (ne keyword stuffing)</li>
          <li>Navedite specifikacije (materijal, dimenzije, težina)</li>
          <li>Izbegavajte promotional copy ("Najbolja ponuda!", "Sale!")</li>
          <li>Nemojte ponavljati podatke iz drugih atributa (brand, cena)</li>
        </ul>
      </div>

      <h3>Product Type vs Google Product Category</h3>
      <p>
        <strong>Google Product Category</strong> je fiksna taksonomija — imate ograničen set kategorija koje Google definiše.
      </p>
      <p>
        <strong>Product Type</strong> je vaša kategorija — imate potpunu slobodu strukture.
      </p>
      <p>
        Preporučujem da koristite Product Type za duboku segmentaciju, jer vam omogućava da kreirate ad grupe po specifičnim kategorijama, postavite različite bidove, i bolje pratite performanse.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Obuća &gt; Muška Obuća &gt; Patike &gt; Running Patike &gt; Nike</p>
      </div>

      <h3>Custom Labels — tajno oružje za segmentaciju</h3>
      <p>
        Custom Labels (0-4) su vaš alat za segmentaciju proizvoda po biznis kriterijumima. Moje iskustvo je da su ključni za kontrolu nad Shopping kampanjama i ROAS optimizaciju.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Label</th>
              <th className="py-3 px-4 font-heading font-semibold">Svrha</th>
              <th className="py-3 px-4 font-heading font-semibold">Vrednosti</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">custom_label_0</td>
              <td className="py-3 px-4">Marža proizvoda</td>
              <td className="py-3 px-4">high_margin, medium_margin, low_margin</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">custom_label_1</td>
              <td className="py-3 px-4">Performanse</td>
              <td className="py-3 px-4">best_seller, standard, slow_mover</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">custom_label_2</td>
              <td className="py-3 px-4">Sezona</td>
              <td className="py-3 px-4">spring, summer, fall, winter</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">custom_label_3</td>
              <td className="py-3 px-4">Cenovni rang</td>
              <td className="py-3 px-4">under_50, 50_100, over_100</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">custom_label_4</td>
              <td className="py-3 px-4">Promo status</td>
              <td className="py-3 px-4">on_sale, full_price</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">Custom Labels vam omogućavaju da kreirate kampanje po marži (visoka marža = veći bid), po performansama (top performeri = posebna kampanja), ili po sezoni (isključite zimske proizvode leti).</p>
      </div>

      <hr />

      <h2>Struktura Shopping kampanja</h2>
      <p>
        Struktura kampanja determiniše koliko kontrole imate nad bidovima i budžetom. Preporučujem strukturu po prioritetu koja vam daje maksimalnu kontrolu uz minimalnu kompleksnost.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-4">Struktura po prioritetu</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Brand kampanja</strong> <span className="text-gray-500">— Brand pretrage, svi proizvodi, max kontrola</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>High Priority kampanja</strong> <span className="text-gray-500">— Generic pretrage, nizak bid, filtrira saobraćaj</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Medium Priority kampanja</strong> <span className="text-gray-500">— Kategorije, srednji bid, core saobraćaj</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Low Priority kampanja</strong> <span className="text-gray-500">— Top performeri, visok bid, maksimalan ROAS</span></div>
          </div>
        </div>
      </div>

      <h3>Priority bidding strategija</h3>
      <p>
        Google dozvoljava 3 nivoa prioriteta: High, Medium, Low. Kontraintuitivan pristup koji funkcioniše:
      </p>
      <ul>
        <li><strong>High Priority + Low Bid</strong> — široke, generičke pretrage ("patike", "laptop")</li>
        <li><strong>Medium Priority + Medium Bid</strong> — specifičnije pretrage ("nike patike", "hp laptop")</li>
        <li><strong>Low Priority + High Bid</strong> — high-intent pretrage ("nike air max 90 bele 43")</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Kako radi</p>
        <p className="text-blue-800 text-sm mb-0">Negativne ključne reči u High Priority kampanji guraju specifičniji saobraćaj dole kroz Medium i Low kampanje. Tako imate kontrolu — generic pretrage plaćate manje, high-intent pretrage plaćate više.</p>
      </div>

      <h3>Single Product Ad Groups (SPAGs)</h3>
      <p>
        Za top 20% proizvoda po prihodu ili marži, preporučujem kreiranje ad grupa sa jednim proizvodom. Ovo vam daje preciznu kontrolu nad bidovima i jasnije podatke za optimizaciju.
      </p>
      <p className="font-semibold">Kada koristiti SPAGs:</p>
      <ul>
        <li>Top 20% proizvoda po prihodu</li>
        <li>Proizvodi sa visokom maržom (high margin custom label)</li>
        <li>Sezonski prioriteti (leti za suncobrane, zimi za jakne)</li>
        <li>Proizvodi sa konstantnim saobraćajem</li>
      </ul>

      <hr />

      <h2>Bidding strategije za Shopping</h2>
      <p>
        Izbor bidding strategije zavisi od veličine budžeta, istorije konverzija, i koliko kontrole želite. Moje iskustvo je da većina eCommerce poslova ima najbolje performanse sa Target ROAS nakon inicijalnog data collection perioda.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Strategija</th>
              <th className="py-3 px-4 font-heading font-semibold">Kada koristiti</th>
              <th className="py-3 px-4 font-heading font-semibold">Minimum zahtevi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Manual CPC</td>
              <td className="py-3 px-4">Nova kampanja, skupljanje podataka, mali budžet</td>
              <td className="py-3 px-4">Nema zahteva</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Target ROAS</td>
              <td className="py-3 px-4">Stabilna kampanja, jasne vrednosti konverzija</td>
              <td className="py-3 px-4">50+ konverzija/mesečno</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Maximize Clicks</td>
              <td className="py-3 px-4">Početak, skupljanje saobraćaja</td>
              <td className="py-3 px-4">Nema zahteva</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Maximize Conversion Value</td>
              <td className="py-3 px-4">Dovoljno konverzija, bez specificnog ROAS targeta</td>
              <td className="py-3 px-4">30+ konverzija/mesečno</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Manual CPC</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Potpuna kontrola nad bidovima. Svaka promena bida je odmah aktivna. Nema learning perioda. Idealno za početak ili male budžete.</p>
        <p className="text-sm font-semibold mb-1">Kada koristiti:</p>
        <ul className="text-sm mb-0">
          <li>Nova kampanja bez conversion history</li>
          <li>Budžet ispod €1,000 mesečno</li>
          <li>Potreba za preciznom kontrolom</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Target ROAS</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Automatska optimizacija ka target ROAS-u. Google koristi device, location, time, i audience signale. Manje ručnog rada, ali potreban learning period.</p>
        <p className="text-sm font-semibold mb-1">Kada koristiti:</p>
        <ul className="text-sm mb-0">
          <li>Stabilna kampanja sa 50+ konverzija mesečno</li>
          <li>Budžet €2,000+ mesečno</li>
          <li>Jasne vrednosti konverzija (eCommerce sa transaction values)</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Moja preporuka</p>
        <p className="text-sm text-yellow-900 mb-0">Preporučujem Manual CPC prvih 2-4 nedelje (dok skupljate minimum 50 konverzija), zatim prelaz na Target ROAS. Podelite kampanje po custom labels (high/medium/low margin) i postavite različite ROAS targetе — visoka marža = niži target, niska marža = viši target.</p>
      </div>

      <hr />

      <h2>Šest taktika za povećanje ROAS-a</h2>
      <p>
        Ovo su taktike koje konzistentno donose rezultate u Shopping kampanjama. Moje iskustvo je da većina eCommerce poslova može povećati ROAS za 20-50% implementacijom ovih optimizacija.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Feed optimizacija</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Najveći impact za najmanji effort. 80% problema je u feed-u.</p>
        <ul className="text-sm mb-3">
          <li>Audit svih title-ova — dodajte brand, boju, veličinu, model</li>
          <li>Optimizuj description za top 100 proizvoda</li>
          <li>Postavi custom labels po marži, performansama, sezoni</li>
          <li>Proveri da li su svi obavezni atributi popunjeni</li>
        </ul>
        <p className="text-sm text-gray-500 mb-0">Očekivani rezultat: 10-30% poboljšanje CTR i Conversion Rate.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Negativne ključne reči</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Shopping koristi feed za targeting, ali možete dodati negative keywords da filtrirate nekvalifikovan saobraćaj.</p>
        <ul className="text-sm mb-3">
          <li><strong>Informational:</strong> "kako", "šta je", "recenzija", "tutorial"</li>
          <li><strong>Free seekers:</strong> "besplatno", "free", "jeftino", "gratis"</li>
          <li><strong>Job related:</strong> "posao", "zaposlenje", "karijera"</li>
          <li><strong>DIY:</strong> "sam napravi", "uradi sam", "DIY"</li>
        </ul>
        <p className="text-sm text-gray-500 mb-0">Preporučujem nedeljni review Search Terms report-a i agresivno dodavanje negatives. Ovo je najbrži način da poboljšate CTR i smanjite CPC.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Bid adjustments</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Device, location, i time adjustments mogu značajno poboljšati ROAS.</p>
        <ul className="text-sm mb-0">
          <li><strong>Device:</strong> Desktop obično konvertuje bolje. Mobile za research, desktop za purchase. Testirajte +20-50% desktop, -10-20% mobile.</li>
          <li><strong>Location:</strong> Različiti regioni = različite performanse. Beograd vs ostatak Srbije može varirati 20-50%.</li>
          <li><strong>Time:</strong> Analizirajte performanse po satu/danu. Smanjite bidove kada je conversion rate nizak (noću, rano ujutru).</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Remarketing Lists for Shopping Ads (RLSA)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Dodajte audience liste i podignite bidove za korisnike koji već poznaju vaš brend.</p>
        <ul className="text-sm mb-3">
          <li><strong>Past purchasers:</strong> +50-100% bid adjustment</li>
          <li><strong>Cart abandoners:</strong> +30-50% bid adjustment</li>
          <li><strong>Product viewers:</strong> +20-30% bid adjustment</li>
        </ul>
        <p className="text-sm text-gray-500 mb-0">Ovi korisnici već znaju vaš brend — vredi platiti više za klik jer je conversion rate značajno viši.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Isključivanje loših proizvoda</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Ne svi proizvodi zaslužuju budžet. Preporučujem da isključite:</p>
        <ul className="text-sm mb-3">
          <li>Proizvode bez konverzija posle 100+ klikova</li>
          <li>Low margin proizvode koji ne konvertuju</li>
          <li>Out of stock proizvode (automatski, ali proverite)</li>
        </ul>
        <p className="text-sm text-gray-500 mb-0">Koristite custom labels da lakše segmentirate i isključujete. Ovo oslobađa budžet za top performere.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Konkurentnost cena</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Google prikazuje cenu u oglasu. Ako ste 30% skuplji od konkurencije, CTR će patiti.</p>
        <ul className="text-sm mb-0">
          <li>Proverite Price Competitiveness report u Merchant Center</li>
          <li>Prilagodite cene za konkurentnost ili</li>
          <li>Fokusirajte budžet na proizvode gde ste konkurentni</li>
        </ul>
      </div>

      <hr />

      <h2>Najčešće greške u Shopping kampanjama</h2>
      <p>
        Ovo su greške koje najčešće vidim u Shopping kampanjama. Većina njih je lako rešiva, ali može koštati hiljade eura u izgubljenom ROAS-u.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Neoptimizovan feed direktno iz shopa</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Investirajte vreme u feed optimizaciju ili koristite feed management tool (DataFeedWatch, GoDataFeed). Title "Proizvod 123" i generic description ne funkcionišu — dodajte brand, boju, veličinu, specifičnosti.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Jedna kampanja za sve proizvode</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Segmentacija po kategoriji, marži ili performansama. Jedan bid za sve proizvode znači da gubite novac na low performers i ne maksimizujete top performere.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Ignorisanje Search Terms report-a</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Nedeljni review Search Terms report-a i agresivno dodavanje negative keywords. Plaćate za pretrage koje nemaju veze sa vašim proizvodima — "posao", "besplatno", "recenzija".</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Loše slike proizvoda</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Čista bela pozadina, konzistentan stil, high resolution (minimum 800x800px), i više slika putem additional_image_link atributa. Loše slike = nizak CTR = nizak Quality Score = viši CPC.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Nepraćenje price competitiveness</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Proverite Merchant Center Price Competitiveness report. Ako ste 25% skuplji od konkurencije, CTR će patiti. Prilagodite cene ili fokusirajte budžet na proizvode gde ste konkurentni.</p>
        </div>
      </div>

      <hr />

      <h2>Shopping vs Performance Max</h2>
      <p>
        Česta dilema: da li koristiti Standard Shopping ili Performance Max za eCommerce kampanje? Moje iskustvo je da najbolje funkcioniše hibridni pristup.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Kriterijum</th>
              <th className="py-3 px-4 font-heading font-semibold">Standard Shopping</th>
              <th className="py-3 px-4 font-heading font-semibold">Performance Max</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Kontrola bidova</td>
              <td className="py-3 px-4">Potpuna kontrola</td>
              <td className="py-3 px-4">Minimalna kontrola</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Search terms</td>
              <td className="py-3 px-4">Jasan uvid</td>
              <td className="py-3 px-4">Ograničen uvid</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Placements</td>
              <td className="py-3 px-4">Samo Shopping</td>
              <td className="py-3 px-4">Svi Google placements</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Learning period</td>
              <td className="py-3 px-4">Brži</td>
              <td className="py-3 px-4">Sporiji (2-3 nedelje)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Ručni rad</td>
              <td className="py-3 px-4">Više</td>
              <td className="py-3 px-4">Manje</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Use case</td>
              <td className="py-3 px-4">Kontrola, ROAS fokus</td>
              <td className="py-3 px-4">Prospecting, reach</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Hibridni pristup — moja preporuka</p>
        <p className="text-sm text-yellow-900 mb-0">Preporučujem Standard Shopping za brand kampanje i top kategorije (gde vam je potrebna granularna kontrola i jasan ROAS), i Performance Max za prospecting (širi reach, nove audience). Pratite account-level performanse, ne samo pojedinačne kampanje — PMax može kanibalizovati Shopping, ali ukupni rezultat može biti bolji.</p>
      </div>

      <hr />

      <h2>Merchant Center postavljanje</h2>
      <p>
        Pre pokretanja Shopping kampanja, potrebno je da pravilno podesite Google Merchant Center. Ovo je checklist koji koristim za sve nove klijente.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-4">Setup checklist</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Verifikujte i claimujte website</strong> <span className="text-gray-500">— dokaz da ste vlasnik sajta</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Shipping settings</strong> <span className="text-gray-500">— konfiguriši cene dostave za Srbiju/region</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Tax settings</strong> <span className="text-gray-500">— ako je primenjivo za vaše tržište</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Return policy</strong> <span className="text-gray-500">— linkujte return policy stranicu</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Business information</strong> <span className="text-gray-500">— kompletna adresa, kontakt</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Upload feed</strong> <span className="text-gray-500">— XML/TXT fajl sa proizvodima</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div><strong>Povezivanje sa Google Ads</strong> <span className="text-gray-500">— omogućava kreiranje kampanja</span></div>
          </div>
        </div>
      </div>

      <h3>Česti razlozi za disapproval</h3>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0"><strong>Cena mismatch:</strong> Cena u feed-u mora biti identična ceni na sajtu. Ako je razlika veća od 10%, Google disapprove-uje proizvod.</p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0"><strong>Dostupnost mismatch:</strong> Ako je proizvod "in stock" u feed-u ali "out of stock" na sajtu, Google disapprove-uje proizvod. Automatizujte feed update.</p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0"><strong>Missing information:</strong> Nedostaje GTIN, brand ili slika. Ako nemate GTIN, obavezno popunite brand + MPN. Ako nemate ni MPN, prijavite se za exemption.</p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0"><strong>Policy violation:</strong> Zabranjeni proizvodi (oružje, lekovi, alkohol) ili promotional claims u title/description ("Najbolja ponuda!", "Sale 50%!"). Budite deskriptivni, ne promocionalni.</p>
      </div>

      <hr />

      <h2>Često postavljana pitanja</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko proizvoda treba za Shopping kampanje?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum 10-20 proizvoda, ali idealno 50+. Sa više proizvoda imate više prilike za impressions i konverzije. Preporučujem da započnete sa top performerima iz organskog saobraćaja ili bestseller kategorije.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li mogu koristiti Shopping bez GTIN-a?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Da, ali performanse mogu biti lošije. Google preferira proizvode sa GTIN za matching. Ako nemate GTIN, obavezno popunite brand + MPN (Manufacturer Part Number). Ako nemate ni MPN, možete se prijaviti za GTIN exemption u Merchant Center.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliki budžet treba za Shopping kampanje?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum €500-1,000 mesečno za smislene rezultate. Za ozbiljno testiranje i optimizaciju, preporučujem €1,500-2,000+. Sa manjim budžetom, fokusirajte se na best-selling kategorije ili proizvode sa visokom maržom.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto moji proizvodi nisu prikazani?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Najčešći razlozi: disapproved feed (proverite Merchant Center Diagnostics), prenizak bid (podignite bid ili prebacite na Maximize Clicks), loš Quality Score (optimizujte feed i title-ove), ili issue sa dostupnošću (cena/stock mismatch).
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Shopping ili Search kampanje za eCommerce?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Oba. Shopping za vizuelni, product-focused saobraćaj ("patike nike", "laptop hp pavilion"). Search za branded pretrage ("vaš brand naziv") i specifične informacijske pretrage koje Shopping ne hvata dobro. Preporučujem 60-70% budžeta na Shopping, 30-40% na Search.
          </div>
        </details>
      </div>

      <hr />

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Treba vam pomoć sa Google Shopping kampanjama?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Kreiram i optimizujem Shopping kampanje za eCommerce biznise. Fokus na feed optimizaciju, strukturu kampanja, i ROAS povećanje.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">Zakažite besplatnu konsultaciju</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/blog/performance-max-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max vodič</p>
          <p className="text-xs text-gray-500 mb-0">Sve o PMax kampanjama, strukturi, i optimizaciji za eCommerce.</p>
        </Link>
        <Link href="/blog/remarketing-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing vodič</p>
          <p className="text-xs text-gray-500 mb-0">Strategije za remarketing u Google Ads i kako povećati konverzije.</p>
        </Link>
        <Link href="/blog/negativne-kljucne-reci" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negativne ključne reči</p>
          <p className="text-xs text-gray-500 mb-0">Kako koristiti negative keywords za smanjenje CPC i poboljšanje CTR.</p>
        </Link>
        <Link href="/blog/google-oglasavanje-za-firme" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google oglašavanje za firme</p>
          <p className="text-xs text-gray-500 mb-0">Kompletni vodič za Google Ads za B2B i B2C biznise.</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Februar 2026
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
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Odlučili ste da koristite Google Ads. Odlično. Sada dolazi pitanje: ko će upravljati kampanjama? Postoje tri modela, raspon cena je €200-2,000+, a 67% marketing menadžera menja partnera u prvoj godini. Ključ nije u ceni — ključ je u fitu.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Modela upravljanja</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">€200-2000+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Raspon mesečnih troškova</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">67%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Menja partnera u prvoj godini</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Fit &gt; Cena</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Najvažniji faktor</p>
          </div>
        </div>
      </div>

      <p>
        Imate tri opcije: angažujete agenciju, radite sa freelancerom/konsultantom, ili gradite in-house tim. Svaka ima svoje prednosti i mane. I svaka je prava — za određenu situaciju.
      </p>
      <p>
        Nakon godina rada na obe strane (kao in-house, kao freelancer i sarađujući sa agencijama) mogu vam reći da ne postoji univerzalno „najbolje" rešenje. Ali postoji pravo rešenje za vašu specifičnu situaciju. U ovom vodiču ću vam pomoći da to otkrijete.
      </p>

      <h2>Zašto je izbor partnera ključan</h2>
      <p>
        Moje iskustvo pokazuje da loš izbor partnera košta mnogo više od same cene usluge. Prosečna firma koja krene sa pogrešnim partnerom gubi 3-6 meseci, a često i značajan deo budžeta na neoptimalne kampanje.
      </p>
      <p>Preporučujem da razmislite o tri ključna aspekta pre izbora:</p>
      <ul>
        <li><strong>Fit sa vašom industrijskom nišom</strong> — partner koji razume vašu industriju donosi rezultate brže</li>
        <li><strong>Komunikacijski stil</strong> — potrebna vam je direktna komunikacija ili formalni izveštaji?</li>
        <li><strong>Finansijska struktura</strong> — imate li budžet za fiksne troškove ili vam je bitna fleksibilnost?</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Pozitivna perspektiva</p>
        <p className="text-blue-800 text-sm mb-0">Sve tri opcije mogu biti odlične. Ključ je u tome da pronađete model koji se uklapa u vašu trenutnu fazu rasta, budžet i interne resurse. Čak i ako krenete sa jednim modelom, možete later preći na drugi kako rastete.</p>
      </div>

      <hr />

      <h2>Tri opcije za upravljanje Google Ads kampanjama</h2>
      <p>
        Preporučujem da prvo razumete osnove sva tri modela pre nego što uđete u detalje. Svaki model ima svoj sweet spot zavisno od veličine firme i budžeta.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Opcija 1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Google Ads agencija</h3>
          <p className="text-sm text-gray-600 mb-3">Tim specijalista koji vodi vaše kampanje. Kompletna usluga sa account managerom, PPC specijalistom i često dizajnerom.</p>
          <p className="text-xs text-gray-500 mb-1"><strong>Mesečni trošak:</strong></p>
          <p className="text-sm mb-3">€500-3,000+</p>
          <p className="text-xs text-gray-500 mb-1"><strong>Za koga:</strong></p>
          <p className="text-sm mb-0">Firme sa budžetom €5,000+ mesečno, multi-channel potrebe, potrebna struktura i skalabilnost.</p>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Opcija 2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Freelancer / konsultant</h3>
          <p className="text-sm text-gray-600 mb-3">Nezavisni specijalista koji radi direktno sa vama. Personalizovana pažnja, fleksibilnost i fokus na jedan kanal.</p>
          <p className="text-xs text-gray-500 mb-1"><strong>Mesečni trošak:</strong></p>
          <p className="text-sm mb-3">€300-1,500</p>
          <p className="text-xs text-gray-500 mb-1"><strong>Za koga:</strong></p>
          <p className="text-sm mb-0">Firme sa budžetom €1,000-10,000 mesečno, fokus na Google Ads, važna direktna komunikacija.</p>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Opcija 3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">In-house tim</h3>
          <p className="text-sm text-gray-600 mb-3">Zaposlen PPC specijalista u vašoj firmi. Potpuna kontrola, duboko razumevanje biznisa, instant komunikacija.</p>
          <p className="text-xs text-gray-500 mb-1"><strong>Mesečni trošak:</strong></p>
          <p className="text-sm mb-3">€1,000-2,500+ (plata + alati)</p>
          <p className="text-xs text-gray-500 mb-1"><strong>Za koga:</strong></p>
          <p className="text-sm mb-0">Firme sa budžetom €15,000+ mesečno, marketing kao core funkcija, dugoročna vizija.</p>
        </div>
      </div>

      <hr />

      <h2>Prednosti i mane Google Ads agencije</h2>
      <p>
        Moje iskustvo rada sa agencijama (i kao klijent i kao partner) pokazuje da agencije donose najveću vrednost kada imate jasno definisane ciljeve i budžet koji opravdava njihovu strukturu.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Tim umesto pojedinca</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Preporučujem agenciju ako vam treba multidisciplinarni pristup. Dobijate account managera, PPC specijalista, često i copywritera/dizajnera.</p>
        <ul className="text-sm">
          <li>Account manager koordiniše sve aktivnosti</li>
          <li>PPC specijalista vodi optimizacije</li>
          <li>Dizajner kreira vizuele za display/video kampanje</li>
          <li>Backup kada neko ode na odmor ili napusti agenciju</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Šira ekspertiza i resursi</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Agencije donose iskustvo iz više industrija i pristup premium alatima koje ne morate posebno plaćati.</p>
        <ul className="text-sm">
          <li>Iskustvo sa 20-50+ različitih klijenata</li>
          <li>Pristup SEMrush, Optmyzr, Google Analytics 360, itd.</li>
          <li>Beta programi i early access do novih Google Ads features</li>
          <li>Best practices iz različitih industrija</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Skalabilnost i accountability</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Kada planirate rast budžeta ili ekspanziju na nove kanale, agencije mogu pratiti taj tempo bez preopterećenja.</p>
        <ul className="text-sm">
          <li>Lako dodaju nove kampanje i kanale</li>
          <li>Formalni ugovori sa jasnim KPI-jevima</li>
          <li>Redovni izveštaji (weekly/monthly)</li>
          <li>Profesionalna dokumentacija procesa</li>
        </ul>
      </div>

      <h3>Glavni izazovi rada sa agencijom</h3>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Niste prioritet — junior specijalista radi na vašem nalogu</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Pre potpisivanja ugovora, pitajte ko će konkretno raditi na vašem nalogu, koliko klijenata ta osoba vodi istovremeno, i ko je backup. Insistirajte na upoznavanju sa osobom koja će raditi na naloga, ne samo account managerom.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Šablonski pristup — copy-paste strategije iz drugih klijenata</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Tražite da vam pokažu konkretne strategije koje planiraju za vašu industriju. Ako čujete generičke odgovore ("optimizujemo ključne reči", "testiramo oglase"), to je crvena zastavica. Dobra agencija će imati specifična pitanja o vašem biznis modelu.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Sporija komunikacija — account manager kao bottleneck</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Definišite komunikacijske kanale i response time u ugovoru. Idealno je imati direktan pristup PPC specijalistu preko Slack/Teams za hitne stvari, dok account manager koordiniše strateške odluke.</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">Za budžete ispod €5,000 mesečno, agencije obično nisu isplative. Matematika je jednostavna: ako plaćate €800/mesec retainer za upravljanje budžetom od €2,000, to je 40% fee. U tom slučaju freelancer je bolja opcija.</p>
      </div>

      <h3>Kada izabrati agenciju</h3>
      <p>Preporučujem agenciju ako:</p>
      <ul>
        <li>Vaš ad spend je preko €5,000 mesečno</li>
        <li>Planirate multi-channel pristup (Google Ads + Meta + LinkedIn + email)</li>
        <li>Nemate internu osobu koja može nadgledati kampanje</li>
        <li>Želite formalnu strukturu, ugovore i redovne izveštaje</li>
        <li>Planirate brzo skaliranje (doubling budžeta u narednih 6-12 meseci)</li>
      </ul>

      <h3>Kako agencije naplaćuju</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Model</th>
              <th className="py-3 px-4 font-heading font-semibold">Cena</th>
              <th className="py-3 px-4 font-heading font-semibold">Za koga</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Procenat od ad spend-a</td>
              <td className="py-3 px-4">10-20% (najčešće 12-15%)</td>
              <td className="py-3 px-4">Veći budžeti, skalabilno</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Fiksna mesečna naknada</td>
              <td className="py-3 px-4">€500-3,000</td>
              <td className="py-3 px-4">Mali do srednji budžeti, predvidivo</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Hibrid</td>
              <td className="py-3 px-4">Manja fiksna + procenat iznad praga</td>
              <td className="py-3 px-4">Mid-size firme koje rastu</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Performance-based</td>
              <td className="py-3 px-4">Obično kombinovano sa fiksnom</td>
              <td className="py-3 px-4">Retko, visok rizik za agenciju</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="font-semibold">Primer kalkulacije (€5,000 ad spend):</p>
      <ul>
        <li>Model procenta (15%): €750/mesečno</li>
        <li>Fiksni model: €800-1,200/mesečno</li>
        <li>Hibrid (€400 + 8% iznad €3,000): €560/mesečno</li>
      </ul>

      <hr />

      <h2>Prednosti i mane freelancera</h2>
      <p>
        Kao freelancer sa višegodišnjim iskustvom, mogu vam reći da je najveća prednost freelancera direktna komunikacija i personalizovana pažnja. Ali to dolazi sa trade-off-ovima koje treba razumeti.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Personalizovana pažnja i direktna komunikacija</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Radite direktno sa osobom koja upravlja kampanjama. Bez posrednika, bez account managera, bez "telefona bez žice".</p>
        <ul className="text-sm">
          <li>Manje klijenata = više fokusa na vaš nalog</li>
          <li>Brži response time (obično isti dan)</li>
          <li>Direktan Slack/WhatsApp kontakt</li>
          <li>Lakši pivoti i eksperimentisanje</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Fleksibilnost i specijalizacija</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Freelanceri često imaju dublju specijalizaciju u jednoj oblasti (npr. Google Shopping, lead gen kampanje) i fleksibilnije ugovore.</p>
        <ul className="text-sm">
          <li>Lakši dogovor oko scope-a rada</li>
          <li>Mogućnost monthly retainer ili project-based rada</li>
          <li>Duboko znanje specifičnih industrija ili campaign type-ova</li>
          <li>Nema lock-in perioda (obično 30-day notice)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Isplativost za male/srednje budžete</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Za budžete €1,000-10,000 mesečno, freelanceri nude najbolji value. Dobijate senior-level ekspertizu po ceni mid-level agencijskog retainera.</p>
        <ul className="text-sm">
          <li>€300-1,500/mesec vs €800-2,000 za agenciju</li>
          <li>Nema overhead troškova agencijske strukture</li>
          <li>Transparentno pricing (znate koliko vremena ide na vaš nalog)</li>
          <li>Mogućnost rasta retainera kako raste spend</li>
        </ul>
      </div>

      <h3>Glavni izazovi rada sa freelancerom</h3>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Zavisnost od jedne osobe — nema backup-a ako freelancer nestane</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Insistirajte na admin pristupu vašem Google Ads nalogu od dana 1. Tražite dokumentaciju svih kampanja, strategija i account strukture. Preporučujem i quarterly review sa drugim freelancerom ili agencijom kao "second opinion".</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Ograničen kapacitet — teško skaliranje kada budžet naglo poraste</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Pričajte sa freelancerom o planovima rasta. Dobar freelancer će vam reći kada je dostigao kapacitet i predložiti prehod na agenciju ili dodavanje još jednog freelancera u tim. Moje iskustvo: jedan freelancer može voditi €15-20K spend, posle toga treba backup.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Varijabilna profesionalnost — kvalitet varira drastično</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Due diligence je ključan. Tražite reference, case studies, konkretne rezultate. Pitajte za pristup njihovim client nalozima (sa maskiranim podacima). Test period od 3 meseca sa jasnim KPI-jevima pre long-term commitovanja.</p>
        </div>
      </div>

      <h3>Kada izabrati freelancera</h3>
      <p>Preporučujem freelancera ako:</p>
      <ul>
        <li>Vaš ad spend je €1,000-10,000 mesečno</li>
        <li>Fokus je na jednom kanalu (Google Ads, ne multi-channel)</li>
        <li>Želite duboku specijalizaciju (npr. samo Google Shopping ili samo Lead Gen)</li>
        <li>Važna vam je direktna, brza komunikacija</li>
        <li>Imate internu osobu koja može nadgledati rad (makar high-level)</li>
      </ul>

      <h3>Kako freelanceri naplaćuju</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Model</th>
              <th className="py-3 px-4 font-heading font-semibold">Cena</th>
              <th className="py-3 px-4 font-heading font-semibold">Za koga</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Fiksna mesečna naknada</td>
              <td className="py-3 px-4">€300-1,500</td>
              <td className="py-3 px-4">Ongoing upravljanje, predvidiv scope</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Satnica</td>
              <td className="py-3 px-4">€25-80/sat</td>
              <td className="py-3 px-4">Konsultacije, ad-hoc optimizacije</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Project-based</td>
              <td className="py-3 px-4">€500-3,000</td>
              <td className="py-3 px-4">Audit, setup, migracija naloga</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Retainer + performance bonus</td>
              <td className="py-3 px-4">Kombinacija</td>
              <td className="py-3 px-4">Uske niše, clear performance metrike</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2>Prednosti i mane in-house tima</h2>
      <p>
        In-house tim je dugoročna investicija koja ima smisla samo kada imate kritičnu masu budžeta i marketing je core funkcija vašeg biznisa.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Potpuna kontrola i instant komunikacija</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Vaša osoba, vaši prioriteti, vašu brzina. Nema čekanja na weekly call-ove ili monthly izveštaje.</p>
        <ul className="text-sm">
          <li>Setujete prioritete po svojoj logici</li>
          <li>Instant pivoti bez pregovaranja sa eksternim partnerom</li>
          <li>Direktna integracija sa sales, product i customer support timom</li>
          <li>Real-time reakcija na market promene</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Duboko razumevanje biznisa</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">In-house osoba živi i diše vaš product, poznaje customer journey, razume margin strukturu i internal metrics.</p>
        <ul className="text-sm">
          <li>Poznavanje nijansi proizvoda/usluga koje eksterni partner ne vidi</li>
          <li>Razumevanje sezonalnosti, inventory limitova, operational constraints</li>
          <li>Bliska saradnja sa CEO-om ili founders (brže donošenje odluka)</li>
          <li>Kumulativno znanje koje ostaje u firmi</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dugoročna isplativost</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Za velike budžete (€20,000+), in-house postaje isplativiji od agencije nakon 12-18 meseci.</p>
        <ul className="text-sm">
          <li>€1,800 plata vs €2,500+ agencijski retainer za isti spend</li>
          <li>Nema markup-a na alate i software (direktno plaćate)</li>
          <li>Znanje ostaje u firmi kada budžet raste</li>
          <li>Mogućnost ekspanzije tima kako raste spend</li>
        </ul>
      </div>

      <h3>Glavni izazovi in-house tima</h3>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Teško naći dobre ljude — recruitment traje 1-3 meseca</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Dok tražite full-time osobu, angažujte freelancera kao bridge solution. Ili još bolje: angažujte freelancera da vam pomogne u recruitment procesu (intervjuiše kandidate, evaluira skills). Moje iskustvo: dobar PPC specialist u Srbiji se naći za 2-3 meseca ako znate šta tražite.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Rizik od stagnacije — osoba gubi touch sa industry best practices</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Budžetirajte €1,000-2,000 godišnje za konferencije, online courses i networking. Preporučujem i quarterly audit sa eksternim konsultantom kao "quality check". Ovaj hibridni model (in-house + quarterly consultant review) je odličan za mid-size firme.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Rizik od odlaska — gubite znanje kada osoba napusti firmu</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Dokumentacija je ključna. Insistirajte na pisanju SOPs (standard operating procedures) za sve kampanje, dokumentaciji strategija, i jasnoj strukturi naloga. Koristite alate poput Notion ili Confluence za knowledge base. Kada osoba da otkaz, imate 1-2 meseca notice perioda da transferujete znanje.</p>
        </div>
      </div>

      <h3>Kada izabrati in-house tim</h3>
      <p>Preporučujem in-house ako:</p>
      <ul>
        <li>Vaš ad spend je preko €15,000-20,000 mesečno</li>
        <li>Marketing je core funkcija biznisa (ne support activity)</li>
        <li>Imate resurse za recruitment, onboarding i kontinuirani development</li>
        <li>Planirate dugoročno (3+ godine) i želite izgraditi internu ekspertizu</li>
        <li>Važna vam je potpuna kontrola nad podacima i strategijom</li>
      </ul>

      <h3>Troškovi in-house tima (Srbija, 2025-2026)</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Pozicija</th>
              <th className="py-3 px-4 font-heading font-semibold">Bruto mesečna plata</th>
              <th className="py-3 px-4 font-heading font-semibold">Alati</th>
              <th className="py-3 px-4 font-heading font-semibold">Total trošak</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Junior PPC Specialist</td>
              <td className="py-3 px-4">€800-1,200</td>
              <td className="py-3 px-4">€100-200</td>
              <td className="py-3 px-4">€900-1,400</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Mid-Level PPC Specialist</td>
              <td className="py-3 px-4">€1,200-1,800</td>
              <td className="py-3 px-4">€150-300</td>
              <td className="py-3 px-4">€1,350-2,100</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Senior PPC Specialist</td>
              <td className="py-3 px-4">€1,800-2,500</td>
              <td className="py-3 px-4">€200-400</td>
              <td className="py-3 px-4">€2,000-2,900</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Head of Performance Marketing</td>
              <td className="py-3 px-4">€2,500-4,000</td>
              <td className="py-3 px-4">€300-500</td>
              <td className="py-3 px-4">€2,800-4,500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-600">+ Obuke i sertifikacije: €500-2,000 godišnje po osobi</p>
      <p className="text-sm text-gray-600">+ Recruitment trošak: €500-1,500 (HR agencije, oglasi)</p>
      <p className="text-sm text-gray-600">+ Vreme do productive capacity: 1-3 meseca onboarding</p>

      <hr />

      <h2>Poređenje po ključnim kriterijumima</h2>
      <p>
        Preporučujem da pogledate ovu tabelu kao quick reference za poređenje svih opcija. Nema univerzalno "najbolje" — samo pravu opciju za vašu situaciju.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Kriterijum</th>
              <th className="py-3 px-4 font-heading font-semibold">Agencija</th>
              <th className="py-3 px-4 font-heading font-semibold">Freelancer</th>
              <th className="py-3 px-4 font-heading font-semibold">In-house</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Mesečni trošak</td>
              <td className="py-3 px-4">€500-3,000+</td>
              <td className="py-3 px-4">€300-1,500</td>
              <td className="py-3 px-4">€1,000-2,500+</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Brzina početka</td>
              <td className="py-3 px-4">1-2 nedelje</td>
              <td className="py-3 px-4">Odmah (1-3 dana)</td>
              <td className="py-3 px-4">1-3 meseca (recruitment + onboarding)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Ekspertiza</td>
              <td className="py-3 px-4">Široka, multi-industry</td>
              <td className="py-3 px-4">Duboka, specifična niša</td>
              <td className="py-3 px-4">Zavisi od skills osobe</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Skalabilnost</td>
              <td className="py-3 px-4">Visoka (dodaju resurse po potrebi)</td>
              <td className="py-3 px-4">Ograničena (max €15-20K spend)</td>
              <td className="py-3 px-4">Srednja (zahteva hiring više ljudi)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Komunikacija</td>
              <td className="py-3 px-4">Formalnija, preko account managera</td>
              <td className="py-3 px-4">Direktna, Slack/WhatsApp</td>
              <td className="py-3 px-4">Instant, face-to-face</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Rizik</td>
              <td className="py-3 px-4">Niži (tim, backup, struktura)</td>
              <td className="py-3 px-4">Srednji (single point of failure)</td>
              <td className="py-3 px-4">Viši (recruitment, retention, stagnacija)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Transparentnost</td>
              <td className="py-3 px-4">Formalni izveštaji, često generic</td>
              <td className="py-3 px-4">Vrlo transparentno, direktan pristup</td>
              <td className="py-3 px-4">Potpuna transparentnost</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Fleksibilnost</td>
              <td className="py-3 px-4">Ugovori 6-12 meseci, rigidni scope</td>
              <td className="py-3 px-4">30-day notice, fleksibilan scope</td>
              <td className="py-3 px-4">Potpuna kontrola</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Multi-channel capability</td>
              <td className="py-3 px-4">Visoka (Google + Meta + LinkedIn)</td>
              <td className="py-3 px-4">Niska (obično 1-2 kanala max)</td>
              <td className="py-3 px-4">Zavisi od skills osobe</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2>Koji model za vašu firmu</h2>
      <p>
        Na osnovu mog iskustva rada sa 50+ klijenata, evo konkretnih preporuka po tipu firme i budžetu.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad spend: €0-2,000/mesec</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Mala firma ili startup</h3>
          <p className="text-sm text-gray-600 mb-3">Budžet je ograničen, potrebna vam je brzina i fleksibilnost.</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Preporučujem:</p>
          <p className="text-sm mb-3">Freelancer (€300-500/mesec) ili DIY + konsultacije (€80-120/sat po potrebi)</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Zašto:</p>
          <ul className="text-sm">
            <li>Agencija nije isplativa (40%+ fee)</li>
            <li>Brz start (1-3 dana)</li>
            <li>Fleksibilan scope dok tražite product-market fit</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad spend: €2,000-10,000/mesec</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Mid-size firma (solo fokus)</h3>
          <p className="text-sm text-gray-600 mb-3">Stabilan biznis, fokus na Google Ads kao primarni kanal.</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Preporučujem:</p>
          <p className="text-sm mb-3">Freelancer (€500-1,200/mesec) ili manja specijalizovana agencija (€800-1,500/mesec)</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Zašto:</p>
          <ul className="text-sm">
            <li>Sweet spot za freelancer ekspertizu</li>
            <li>Dobra vrednost za novac</li>
            <li>Direktna komunikacija još uvek bitna</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad spend: €10,000-30,000/mesec</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Rastuća firma (multi-channel)</h3>
          <p className="text-sm text-gray-600 mb-3">Potreban vam je multi-channel pristup i veći kapacitet.</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Preporučujem:</p>
          <p className="text-sm mb-3">Agencija (€1,500-2,500/mesec) ili hibrid (in-house koordinator + freelancer/agencija)</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Zašto:</p>
          <ul className="text-sm">
            <li>Multi-channel ekspertiza (Google + Meta + email)</li>
            <li>Skalabilnost kako raste budžet</li>
            <li>Freelancer dostiže capacity limit</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad spend: €30,000+/mesec</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Enterprise firma</h3>
          <p className="text-sm text-gray-600 mb-3">Marketing je core funkcija, dugoročna strategija ključna.</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Preporučujem:</p>
          <p className="text-sm mb-3">In-house tim (€2,000-4,000/mesec) + quarterly consultant review ili full-service agencija</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Zašto:</p>
          <ul className="text-sm">
            <li>Potpuna kontrola nad strategijom i podacima</li>
            <li>Isplativije dugoročno od agencije</li>
            <li>Znanje ostaje u firmi</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Većina firmi u regionu (Srbija/Ex-Yu) sa budžetom €3,000-15,000 mesečno dobija najbolju vrednost od freelancera ili male specijalizovane agencije. Agencije ima smisla tek kada prekoračite €10,000 spend i trebate multi-channel pokrivenost.
        </p>
      </div>

      <hr />

      <h2>Na šta obratiti pažnju prilikom izbora partnera</h2>
      <p>
        Moje iskustvo pokazuje da ovih 5 faktora određuju uspeh ili neuspeh saradnje, bez obzira da li radite sa agencijom, freelancerom ili gradite tim.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Iskustvo u vašoj industriji</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Partner koji je već radio sa klijentima iz vaše industrije će brže razumeti vašu nišu i doneti rezultate.</p>
        <ul className="text-sm">
          <li><strong>Pitajte:</strong> "Imate li case study ili klijenta iz [vaša industrija]?"</li>
          <li><strong>Red flag:</strong> Partner tvrdi da zna sve industrije podjednako</li>
          <li><strong>Moja preporuka:</strong> Relevant experience &gt; generalno iskustvo</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Transparentnost oko pristupa i vlasništva naloga</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Vi MORATE imati admin pristup svom Google Ads nalogu. Bez izuzetaka.</p>
        <ul className="text-sm">
          <li><strong>Pitajte:</strong> "Da li ću imati admin pristup nalogu?"</li>
          <li><strong>Red flag:</strong> Partner insistira da on kontroliše nalog "zbog sigurnosti"</li>
          <li><strong>Moja preporuka:</strong> Ovo je deal-breaker. Ako partner ne želi dati pristup, bežite.</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Komunikacijski stil i response time</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Kvalitet pre-sales komunikacije je najbolji indikator buduće saradnje. Ako je spor i nejasan sada, biće još gori kasnije.</p>
        <ul className="text-sm">
          <li><strong>Testirajte:</strong> Pošaljite follow-up pitanje i merite response time</li>
          <li><strong>Red flag:</strong> Odgovara nakon 3-5 dana ili daje generičke odgovore</li>
          <li><strong>Moja preporuka:</strong> Dobar partner odgovara u roku 24h sa konkretnim odgovorima</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Jasno definisan proces rada</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Partner treba da vam objasni tačno kako izgleda prva 3 meseca, ko radi šta, i kako merite uspeh.</p>
        <ul className="text-sm">
          <li><strong>Pitajte:</strong> "Kako izgleda onboarding process? Šta se dešava u prvom mesecu?"</li>
          <li><strong>Red flag:</strong> Generički odgovor "optimizujemo kampanje i šaljemo izveštaje"</li>
          <li><strong>Moja preporuka:</strong> Dobar partner ima written process sa jasnim milestones</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Realistična očekivanja (ne garantuje rezultate)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Dobar partner će vam reći šta je moguće, ali neće garantovati specifične rezultate pre nego što vidi vaš nalog i industriju.</p>
        <ul className="text-sm">
          <li><strong>Pitajte:</strong> "Kakve rezultate mogu očekivati u prva 3 meseca?"</li>
          <li><strong>Red flag:</strong> "Garantujemo ROAS 5x" ili "Dovodimo 100 conversions mesečno"</li>
          <li><strong>Moja preporuka:</strong> Dobar odgovor je "Zavisi od industrije, ali obično vidimo X% poboljšanje u prva 3 meseca"</li>
        </ul>
      </div>

      <hr />

      <h2>Crvene zastavice - kada odustati od partnera</h2>
      <p>
        Preporučujem da immediately prekinete razgovor ako vidite bilo koju od ovih crvenih zastavica, bez obzira koliko dobra zvučala ponuda.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red Flag #1</p>
        <p className="font-semibold mb-2">Ne žele da vam daju admin pristup nalogu</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Zašto je problem:</strong> To znači da partner misli da je nalog "njihov", ne vaš. Kada prekinete saradnju, možete ostati bez pristupa podacima i istoriji kampanja. Ovo je neprihvatljivo.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red Flag #2</p>
        <p className="font-semibold mb-2">Garantuju specifične rezultate PRE audita naloga</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Zašto je problem:</strong> Nemoguće je garantovati ROAS 5x ili CPA €20 bez detaljne analize naloga, industrije, website-a i trenutnih performansi. Ovo je ili neserioznost ili prodajni trik.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red Flag #3</p>
        <p className="font-semibold mb-2">Insistiraju na dugim ugovorima bez trial perioda (12+ meseci)</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Zašto je problem:</strong> Dobri partneri su sigurni u svoje rezultate i ne trebaju lock-in period. Standard je 3-6 meseci sa 30-day notice klauzulom. Duži ugovori su red flag.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red Flag #4</p>
        <p className="font-semibold mb-2">Ne mogu da objasne šta konkretno rade (generic pitches)</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Zašto je problem:</strong> Ako partner ne može da objasni svoj proces jasnim rečima, ili koristi samo buzzwords ("AI optimization", "machine learning campaigns"), verovatno ne znaju šta rade.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red Flag #5</p>
        <p className="font-semibold mb-2">Spor response time od prvog kontakta (3+ dana)</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Zašto je problem:</strong> Ako ne mogu da odgovore brzo dok pokušavaju da vas dobiju kao klijenta, kako mislite da će komunikacija izgledati kasnije? Ovo je najbolji indikator buduće saradnje.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red Flag #6</p>
        <p className="font-semibold mb-2">Nemaju reference ili case studies u vašoj (ili sličnoj) industriji</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Zašto je problem:</strong> Svaka industrija ima svoje specifičnosti. Partner bez relevant experience će utrošiti vaš budžet učeći basics koje bi trebalo već da znaju. Tražite minimum 2-3 slična klijenta.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red Flag #7</p>
        <p className="font-semibold mb-2">Cena je "previše dobra da bi bila istinita" (€150-200 za upravljanje)</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Zašto je problem:</strong> Kvalitetan PPC specialist ne može raditi za €200/mesec i pružiti dobru uslugu. To znači ili da ste jedan od 20+ klijenata (nula pažnje), ili je osoba junior bez iskustva. Minimum za kvalitetan rad je €300-400.</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Zlatno pravilo izbora partnera</p>
        <p className="text-sm text-yellow-900 mb-0">Ako imate loš gut feeling tokom razgovora, to je obično tačno. Ne ignoriše instinkt. Saradnja sa pogrešnim partnerom će vas koštati 10x više od cene usluge.</p>
      </div>

      <hr />

      <h2>Često postavljana pitanja</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li mala firma treba Google Ads agenciju ili je freelancer dovoljan?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Za male firme sa budžetom do €2,000-3,000 mesečno, freelancer je obično bolja opcija. Dobijate više personalizovane pažnje za istu ili nižu cenu. Agencija ima smisla kada prekoračite €5,000 spend ili vam treba multi-channel pristup (Google + Meta + LinkedIn). Moje iskustvo: 80% malih firmi u Srbiji bolje prolazi sa freelancerom nego sa agencijom.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko košta Google Ads agencija u Srbiji - cene 2026?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Cene Google Ads agencija u Srbiji variraju od €400-500 za manje agencije do €1,500-3,000+ za veće, etablirane agencije. Model procenta od ad spend-a je obično 10-20% (najčešće 12-15%). Freelanceri naplaćuju €300-1,500 mesečno zavisno od obima posla. Preporučujem da tražite barem 2-3 ponude i uporedite ne samo cenu, već i scope rada i komunikacijski stil.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Može li freelancer da vodi veliki budžet (€20,000+)?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Da, ali samo ako ima pravo iskustvo i kapacitet. Moje iskustvo pokazuje da jedan senior freelancer može efikasno voditi do €15-20K spend, posle čega capacity postaje problem. Za budžete preko €20,000 mesečno, preporučujem ili veoma iskusnog freelancera (sa 5+ godina) koji ima backup sistem, ili agenciju. Alternativa je hibridni model: dva freelancera koja pokrivaju različite kanale.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta je bolje za eCommerce - agencija ili freelancer?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Zavisi od kompleksnosti vašeg eCommerce poslovanja. Za čist Google Shopping + Search kampanje sa jednim kanalom, specijalizovani freelancer može biti odličan i cost-effective. Za multi-channel pristup (Google + Meta + email marketing + retargeting), agencija ima više smisla jer vam treba šira ekspertiza. Preporučujem: ispod €8,000 spend → freelancer, iznad €8,000 → agencija ili hibrid.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Kako proveriti kvalitet Google Ads agencije ili freelancera?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Pet koraka za proveru kvaliteta: (1) Tražite reference iz vaše ili slične industrije (minimum 2-3), (2) Pitajte za pristup njihovim client nalozima (sa maskiranim podacima) da vidite setup, (3) Proverite kako komuniciraju PRE angažovanja (response time, jasnoća odgovora), (4) Tražite da objasne konkretno šta će raditi u prva 3 meseca, (5) Insistirajte na trial periodu od 3 meseca sa clear KPI-jevima. Kvalitet pre-sales komunikacije obično odražava kvalitet buduće saradnje.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Kada prebaciti sa freelancera na agenciju (ili obrnuto)?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Prelazak sa freelancera na agenciju ima smisla kada: (1) Ad spend prelazi €10,000-15,000 i freelancer dostiže capacity, (2) Trebaju vam dodatni kanali koje freelancer ne pokriva, (3) Potrebna vam je veća skalabilnost i backup tim. Prelazak sa agencije na freelancera ima smisla kada: (1) Smanjite budžet ispod €5,000, (2) Želite više personalizovane pažnje i direktne komunikacije, (3) Agencija daje generic service bez prave vrednosti. Moj savet: test period od 3 meseca pre full commitment-a.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Ne znate koji model je pravi za vas?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Zakažite besplatnu 30-minutnu konsultaciju i zajedno ćemo analizirati vašu situaciju, budžet i ciljeve. Dobiću vam objektivan pogled (čak i ako to znači da vam ne treba freelancer kao ja).
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/blog/koliko-kosta-google-ads" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Koliko košta Google Ads
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kompletna analiza troškova, budžeta i fee struktura za 2026.
          </p>
        </Link>

        <Link href="/blog/google-ads-audit-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Google Ads audit - kompletni vodič
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kako proveriti kvalitet postojećih kampanja pre nego što promenite partnera.
          </p>
        </Link>

        <Link href="/blog/google-oglasavanje-za-firme" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Google oglašavanje za firme
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Sve što treba da znate pre lansiranja Google Ads kampanja.
          </p>
        </Link>

        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Google Ads upravljanje
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Pogledajte kako izgleda saradnja sa freelancerom (moj pristup).
          </p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Februar 2026
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
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Bez pouzdanog conversion tracking-a, Google Ads kampanje rade naslepo. Algoritmi optimizuju ka pogrešnim signalima, budžet se troši bez jasnog ROI-a, a vi donosite odluke na osnovu netačnih podataka. Ovaj vodič pokazuje kako pravilno postaviti GTM, GA4 i Google Ads tagove, izbeći najčešće greške i koristiti Enhanced Conversions za maksimalnu preciznost.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Tipa konverzija</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">GTM+GA4</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Kompletna postavka</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">40%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Naloga ima greške</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Vrednost bez tracking-a</p>
          </div>
        </div>
      </div>

      <p>
        Svake nedelje vidim istu situaciju. Firma troši €2,000-5,000 mesečno na Google Ads. Kampanje su aktivne, klikova ima, ali rezultata nema ili su nepouzdani. Kada pogledam nalog, problem je skoro uvek isti — conversion tracking ne radi kako treba.
      </p>
      <p>
        Moje iskustvo pokazuje da je loš tracking tihi ubica Google Ads performansi. Bez pouzdanih podataka o konverzijama ne znate šta funkcioniše, algoritmi optimizuju ka pogrešnim signalima i donosite odluke na osnovu lažnih podataka.
      </p>
      <p>
        U ovom vodiču pokrivam sve što vam treba da postavite precizno praćenje konverzija, od osnovnog GTM setup-a do naprednih tehnika kao što su Enhanced Conversions i server-side tracking. Takođe ćete naučiti kako da otkrijete i ispravite najčešće greške koje koštaju vaš budžet.
      </p>

      <hr />

      <h2>Zašto je conversion tracking temelj Google Ads-a</h2>
      <p>
        Preporučujem da na conversion tracking gledate kao na nervni sistem vaših kampanja. Bez njega, algoritmi ne znaju šta je dobar signal, a vi gubite kontrolu nad budžetom.
      </p>

      <h3>Algoritmi zavise od vaših podataka</h3>
      <p>
        Google Ads Smart Bidding (Target CPA, Target ROAS, Maximize Conversions) koristi machine learning da optimizuje ponude u realnom vremenu. Ali ML je dobar koliko i podaci koje mu date.
      </p>
      <p>
        Sa lošim tracking-om, algoritam uči pogrešne signale — biduje previše za loš saobraćaj, biduje premalo za dobar saobraćaj i budžet odlazi u vetar. Sa dobrim tracking-om, algoritam razume šta je prava konverzija, biduje agresivnije kada su signali dobri i štedi budžet kada signali nisu perspektivni.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          "Kampanja bez pouzdanog conversion tracking-a je kao auto bez instrumenata — vozite naslepo i ne znate koliko brzo idete ili koliko goriva trošite."
        </p>
      </div>

      <h3>Optimizacija bez podataka je nagađanje</h3>
      <p>
        Ako ne znate koja ključna reč, oglas ili audience donosi konverzije, kako ćete optimizovati? Moje iskustvo je da razlika između kampanje sa tracking-om i bez njega liči na ovo:
      </p>
      <p>
        <strong>Bez tracking-a:</strong> "Mislim da ova kampanja radi dobro."
      </p>
      <p>
        <strong>Sa tracking-om:</strong> "Ova kampanja donosi 47 konverzija po €12.50, a ova 3 konverzije po €180. Preusmeravamo budžet."
      </p>

      <hr />

      <h2>Tipovi konverzija koje treba pratiti</h2>
      <p>
        Preporučujem da ne pratite samo krajnji cilj (kupovinu ili lead), već i korake koji vode ka njemu. Evo koje tipove konverzija treba postaviti za različite tipove biznisa.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Primary</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Primarne konverzije</h3>
          <p className="text-sm text-gray-600 mb-0">
            Krajnji cilj kampanje — kupovina, lead, poziv, registracija. Koriste se za bid optimization.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Secondary</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Sekundarne konverzije</h3>
          <p className="text-sm text-gray-600 mb-0">
            Koraci prema cilju — add to cart, pricing page visit, preuzimanje kataloga. Koriste se za observation.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Micro</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Micro konverzije</h3>
          <p className="text-sm text-gray-600 mb-0">
            Engagement signali — scroll depth, video view, time on site. Pomažu algoritmu kada je volumen nizak.
          </p>
        </div>
      </div>

      <h3>Primeri konverzija po tipu biznisa</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Tip biznisa</th>
              <th className="py-3 px-4 font-heading font-semibold">Primary</th>
              <th className="py-3 px-4 font-heading font-semibold">Secondary</th>
              <th className="py-3 px-4 font-heading font-semibold">Micro</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce</td>
              <td className="py-3 px-4">Purchase</td>
              <td className="py-3 px-4">Add to cart, Begin checkout</td>
              <td className="py-3 px-4">Product view</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">B2B Lead Gen</td>
              <td className="py-3 px-4">Form submission, Demo request</td>
              <td className="py-3 px-4">Pricing page, Case study download</td>
              <td className="py-3 px-4">Time on site 2min+</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Lokalni biznis</td>
              <td className="py-3 px-4">Phone call, Directions click</td>
              <td className="py-3 px-4">Contact page visit</td>
              <td className="py-3 px-4">Store locator use</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">SaaS</td>
              <td className="py-3 px-4">Trial sign-up, Paid conversion</td>
              <td className="py-3 px-4">Features page, Video view</td>
              <td className="py-3 px-4">Pricing calculator use</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Pravilo 3 nivoa</p>
        <p className="text-blue-800 text-sm mb-0">
          Preporučujem da postavite sva tri nivoa konverzija. Primary za optimizaciju, Secondary za observation i analizu, Micro za signale kada je volumen nizak. Ovo daje algoritmu kompletniju sliku korisničkog ponašanja.
        </p>
      </div>

      <hr />

      <h2>Alati za conversion tracking</h2>
      <p>
        Postoje tri glavna načina da pratite konverzije u Google Ads-u. Svaki ima svoje prednosti i kada ga koristiti.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Preporučeno</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Google Tag Manager</h3>
          <p className="text-sm text-gray-600 mb-0">
            Centralizovano upravljanje svim tag-ovima. Fleksibilno, lako za testiranje i održavanje. Moj prvi izbor za sve osim najjednostavnijih setup-a.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Analytics</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">GA4 Import</h3>
          <p className="text-sm text-gray-600 mb-0">
            Koristi GA4 events kao konverzije. Dobar za unified reporting, ali attribution može biti drugačija od native Google Ads tracking-a.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Direktno</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Google Ads Tag</h3>
          <p className="text-sm text-gray-600 mb-0">
            Direktno postavljanje tag-a kroz Google Ads interface. Jednostavno za one-page setup, ali manje fleksibilno za kompleksnije scenario.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Napredni</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Enhanced Conversions</h3>
          <p className="text-sm text-gray-600 mb-0">
            Šalje hashed first-party podatke (email, telefon) da poboljša attribution uprkos cookie restrictions. Preporučujem za sve kampanje sa budžetom €1,000+.
          </p>
        </div>
      </div>

      <hr />

      <h2>Korak po korak — postavljanje tracking-a</h2>
      <p>
        Ovo je postupak koji koristim za sve klijente. GTM + GA4 + Google Ads tag + Enhanced Conversions = kompletna postavka koja daje maksimalnu preciznost.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Postavite Google Tag Manager container</strong> <span className="text-gray-500">— Kreirajte GTM account i container, instalirajte container snippet u &lt;head&gt; i &lt;body&gt; na svim stranicama sajta.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Dodajte Conversion Linker tag</strong> <span className="text-gray-500">— U GTM kreirajte tag tipa "Conversion Linker", trigger All Pages. Ovo je OBAVEZNO za cross-domain i cross-device tracking.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Povežite GA4 property</strong> <span className="text-gray-500">— Kreirajte GA4 property i instalirajte GA4 tag kroz GTM ili direktno. Obeležite key events (purchase, generate_lead) kao conversions.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Kreirajte Google Ads conversion action</strong> <span className="text-gray-500">— U Google Ads → Tools → Conversions → + New conversion. Kopirajte Conversion ID i Conversion Label.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Postavite Google Ads Conversion tag u GTM</strong> <span className="text-gray-500">— Kreirajte tag tipa "Google Ads Conversion Tracking", unesite ID i Label, postavite trigger (npr. Page URL contains "thank-you" ili Form ID equals "contact-form").</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div>
              <strong>Uključite Enhanced Conversions</strong> <span className="text-gray-500">— U Google Ads → Conversions → Settings → Enhanced conversions → Turn on. Izaberite GTM metod i mapirajte user data (email, phone, address) kroz data layer.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div>
              <strong>Testirajte u GTM Preview mode</strong> <span className="text-gray-500">— Kliknite Preview u GTM, prođite conversion flow na sajtu i proverite da li tagovi rade. Proverite i Google Tag Assistant Chrome extension.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
            <div>
              <strong>Publish i verifikacija</strong> <span className="text-gray-500">— Objavite GTM container, napravite test konverziju i proverite da li se pojavljuje u Google Ads (3-6 sati delay je normalno).</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Conversion Linker tag je često zaboravljen korak, ali bez njega cross-domain i cross-device tracking ne funkcioniše pravilno. Uvek postavite ovaj tag na All Pages pre bilo kog drugog conversion tag-a.
        </p>
      </div>

      <hr />

      <h2>Conversion tracking za eCommerce</h2>
      <p>
        Za eCommerce, moje iskustvo pokazuje da je tracking vrednosti transakcije ključan. Bez toga, Google ne zna razliku između kupovine od €10 i €500.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Purchase (Primary konverzija)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Najvažnija konverzija. Mora da šalje dynamic value (transaction_value), currency i transaction_id. Koristi se za bid optimization.
        </p>
        <ul className="text-sm">
          <li>Trigger: Purchase confirmation page (npr. /order-complete, /thank-you)</li>
          <li>Conversion value: Dynamic — povući iz data layer-a</li>
          <li>Count: Every (svaka porudžbina se računa)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Add to Cart (Secondary konverzija)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Pokazuje intent. Preporučujem da postavite kao observation, ne za bidding. Pomaže algoritmu da nauči koje proizvode ljudi dodaju u korpu.
        </p>
        <ul className="text-sm">
          <li>Trigger: Add to Cart button click event</li>
          <li>Conversion value: Opcional (može biti fiksna vrednost ili product price)</li>
          <li>Include in Conversions: NO (observation only)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Begin Checkout (Secondary konverzija)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Korisnik je započeo checkout proces. Jak signal koji pokazuje kupovnu nameru. Koristim ga za remarketing audiences.
        </p>
        <ul className="text-sm">
          <li>Trigger: Checkout page load (npr. /checkout, /cart)</li>
          <li>Conversion value: Cart value (opcional)</li>
          <li>Include in Conversions: NO (observation only)</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Pravilo praćenja vrednosti</p>
        <p className="text-sm text-yellow-900 mb-0">
          Preporučujem da UVEK pratite transaction value za eCommerce. Bez toga, Target ROAS bidding ne funkcioniše i ne znate koliko novca svaka kampanja donosi. Dynamic conversion values su obavezni za profitabilnu optimizaciju.
        </p>
      </div>

      <hr />

      <h2>Conversion tracking za Lead Generation</h2>
      <p>
        Za lead gen kampanje, moje iskustvo je da nije dovoljno pratiti samo form submissions. Morati pratiti kvalitet lead-ova kroz offline conversion import.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Form Submission (Primary konverzija)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Osnovni lead event. Trigger je obično form submission ili thank-you page load. Ovo koristite za početnu optimizaciju.
        </p>
        <ul className="text-sm">
          <li>Trigger: Form submission event ili Page URL contains "thank-you"</li>
          <li>Conversion value: Fiksna vrednost (npr. prosečna vrednost lead-a)</li>
          <li>Count: One (jedan form submit = jedna konverzija, čak i ako korisnik pošalje više puta)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Phone Call (Primary konverzija)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Za B2B i lokalne biznise, phone calls su često najvažnija konverzija. Google nudi call tracking extension koji automatski prati pozive.
        </p>
        <ul className="text-sm">
          <li>Setup: Google forwarding number ili website call button click</li>
          <li>Minimum call duration: 60+ sekundi (da odfiltrirate spam)</li>
          <li>Conversion value: Prosečna vrednost phone lead-a</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Offline Conversions (Kvalifikovani lead)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ovo je najvažniji korak za B2B. Importujete qualified leads ili closed deals iz CRM-a nazad u Google Ads. Bez toga, Google optimizuje ka volumenu, ne ka kvalitetu.
        </p>
        <ul className="text-sm">
          <li>Setup: Capture GCLID u CRM pri form submission</li>
          <li>Regular upload: Nedeljno ili mesečno (zavisno od sales cycle-a)</li>
          <li>Conversion value: Stvarna vrednost deala (ne prosek)</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Offline Conversion Import — Game Changer za B2B</p>
        <p className="text-blue-800 text-sm mb-0">
          Preporučujem offline import svim B2B klijentima. Razlika je ogromna — Google uči koji tip lead-ova zapravo postaje klijent i optimizuje ka tome, ne samo ka volumenu form submissions. Očekujte 20-30% bolje CPA nakon nekoliko meseci učenja.
        </p>
      </div>

      <hr />

      <h2>Najčešće greške u conversion tracking-u</h2>
      <p>
        Tokom godina sam video stotine naloga i evo grešaka koje se najčešće ponavljaju. Svaka od njih košta budžet i performance.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #1</p>
        <p className="font-semibold mb-2">Conversion tag postavljen na sve stranice umesto samo confirmation page</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Proverite trigger u GTM-u. Tag treba da se aktivira SAMO na thank-you stranici (npr. Page URL contains "/thank-you" ili "/order-complete"). Koristite GTM Preview mode da testirate.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #2</p>
        <p className="font-semibold mb-2">Duplo brojanje — Google Ads tag + GA4 import za istu konverziju</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Koristite JEDNO ili DRUGO, ne oba. Ako uvozite konverzije iz GA4, deaktivirajte direktni Google Ads tag za tu istu akciju. Duplo brojanje ubija attribution preciznost.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #3</p>
        <p className="font-semibold mb-2">Conversion Linker tag nedostaje ili nije na All Pages</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> U GTM kreirajte tag tipa "Conversion Linker" i postavite trigger na All Pages. Ovo je prvi tag koji treba da se aktivira pre bilo kog drugog conversion tag-a. Bez njega, cross-domain tracking ne funkcioniše.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #4</p>
        <p className="font-semibold mb-2">Ne pratite vrednost konverzija (sve konverzije = "1")</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Za eCommerce koristite dynamic conversion values — šaljite stvarnu transaction_value kroz data layer. Za lead gen, postavite fiksnu vrednost koja odgovara prosečnoj vrednosti lead-a. Bez vrednosti, Target ROAS ne radi.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #5</p>
        <p className="font-semibold mb-2">Trackujete samo purchase/lead, nijednu sekundarnu konverziju</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Dodajte secondary i micro konverzije (add to cart, pricing page, video view) i postavite ih kao observation (Include in Conversions = NO). Ovo daje algoritmu više signala i pomaže kada je volumen nizak.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #6</p>
        <p className="font-semibold mb-2">Attribution model nije prilagođen tipu biznisa</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Razmislite o customer journey. Za kratke sales cycle-e (impulse eCommerce), Last Click je OK. Za B2B sa dugim cycle-om, Data-Driven ili Position-Based daje realističniju sliku. Proverite u Google Ads → Conversions → Attribution models.
          </p>
        </div>
      </div>

      <hr />

      <h2>Kako proveriti da li tracking radi ispravno</h2>
      <p>
        Postavljanje tracking-a je polovina posla. Druga polovina je verifikacija da sve radi kako treba. Evo postupka koji koristim za svaki nalog.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Google Tag Assistant Chrome Extension</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Instalirajte extension, prođite conversion flow na sajtu i proverite da li se tagovi aktiviraju na pravim stranicama. Proverite da li šalju conversion ID, label i vrednost.
        </p>
        <ul className="text-sm">
          <li>Tag Assistant: <Link href="https://tagassistant.google.com/" className="underline">tagassistant.google.com</Link></li>
          <li>Prođite ceo conversion flow od početne stranice do thank-you</li>
          <li>Proverite da li Conversion Linker tag radi na All Pages</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">GTM Preview Mode</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          U GTM interfejsu kliknite "Preview", otvorite sajt u novom tabu i prođite conversion flow. Preview mode prikazuje koje tagove se aktiviraju i koje podatke šalju.
        </p>
        <ul className="text-sm">
          <li>Proverite da li se tagovi aktiviraju samo na confirmation page</li>
          <li>Proverite da li se conversion value pravilno povlači iz data layer-a</li>
          <li>Proverite da li Enhanced Conversions tag šalje user data</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Google Ads Conversion Status</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          U Google Ads → Tools → Conversions pogledajte Status kolonu. Trebalo bi da piše "Recording conversions" sa zelenim checkmark-om.
        </p>
        <ul className="text-sm">
          <li>Ako piše "Unverified" — tag još nije aktiviran (napravite test konverziju)</li>
          <li>Ako piše "No recent conversions" — tag radi ali nema saobraćaja (OK za nove kampanje)</li>
          <li>Ako piše "Inactive" ili "Error" — tag nije pravilno postavljen</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Real-Time provera u GA4</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          U GA4 → Reports → Realtime pogledajte da li se events pojavljuju u realnom vremenu kada napravite test konverziju.
        </p>
        <ul className="text-sm">
          <li>Aktivirajte realtime view</li>
          <li>Napravite test konverziju (form submission ili purchase)</li>
          <li>Proverite da li se event pojavljuje u roku od nekoliko sekundi</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Cross-check sa backend podacima</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Uporedite broj konverzija u Google Ads sa stvarnim brojem porudžbina/lead-ova iz CRM-a ili eCommerce platforme. Razlika 10-20% je normalna, ali ako je veća — imaš problem sa tracking-om.
        </p>
        <ul className="text-sm">
          <li>Export konverzija iz Google Ads za prošlu nedelju</li>
          <li>Export porudžbina/lead-ova iz backend sistema za isti period</li>
          <li>Uporedite brojeve — ako je razlika &gt;30%, istražite uzrok</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Konverzije se obično pojavljuju u Google Ads nakon 3-6 sati, ali može biti i do 24 sata. Nemojte paničiti ako test konverzija ne pokaže odmah — sačekajte nekoliko sati i proverite ponovo.
        </p>
      </div>

      <hr />

      <h2>Često postavljana pitanja</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko vremena treba da se konverzija pojavi u Google Ads?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Obično 3-6 sati za online konverzije. Može biti i do 24 sata u nekim slučajevima. Offline conversion import zavisi od frekvencije vašeg uploada (ja preporučujem nedeljno). Ako konverzija ne pokaže nakon 24 sata, proverite da li je tag pravilno postavljen kroz GTM Preview mode i Tag Assistant.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Zašto se broj konverzija u GA4 i Google Ads razlikuje?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Različiti attribution modeli, različiti conversion windows i način brojanja. GA4 obično koristi data-driven attribution, dok Google Ads može koristiti last click. Takođe, GA4 broji sessione drugačije nego Google Ads. Razlika od 10-20% je potpuno normalna i ne ukazuje na problem. Ako je razlika &gt;30%, proverite da li imate duplo brojanje.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li mi treba developer za postavljanje conversion tracking-a?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Za osnovni GTM setup — ne obavezno. Možete sami postaviti GTM container i basic conversion tagove ako pratite dokumentaciju. Za Enhanced Conversions (data layer push) i server-side tracking — verovatno da, jer zahteva JavaScript i backend integraciju. Ako nemate tehničko znanje, preporučujem da angažujete developera ili Google Ads konsultanta koji će postaviti sve pravilno.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta ako nemam thank-you stranicu?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Koristite event-based tracking umesto page load tracking-a. Trigger može biti form submission event, AJAX response success callback ili URL parameters (npr. ?submitted=true). U GTM možete postaviti trigger na Form Submission ili custom JavaScript event. Ako koristite platforme kao što su Webflow, WordPress ili Shopify, često postoje built-in opcije za tracking bez thank-you page-a.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko konverzija treba za Smart Bidding?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Google zvanično preporučuje minimum 15 konverzija u poslednjih 30 dana za Target CPA i Target ROAS. Međutim, moje iskustvo je da su 30-50 konverzija mesečno idealne za stabilnije rezultate. Ispod 15, algoritam nema dovoljno podataka i performanse mogu biti nepredvidive. Ako nemate dovoljno primary konverzija, možete privremeno dodati secondary konverzije kao observation dok ne sakupite dovoljno volumena.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta je Enhanced Conversions i da li mi treba?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Enhanced Conversions šalje hash-ovane first-party podatke (email, telefon, adresa) da poboljša attribution uprkos cookie restrictions i iOS privacy promenama. Preporučujem ga SVIM kampanjama sa budžetom €1,000+. Očekujte 5-15% više pripisanih konverzija nakon implementacije. Setup zahteva data layer push sa user data (email i telefon su minimum), što obično zahteva pomoć developera.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Potrebna vam je pomoć sa conversion tracking-om?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Nudim kompletnu postavku conversion tracking-a — GTM, GA4, Google Ads tagove, Enhanced Conversions i offline import. Sve što vam treba da pratite prave rezultate i optimizujete ka profitabilnosti.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/blog/google-ads-greske" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">12 Najčešćih Google Ads Grešaka</p>
          <p className="text-xs text-gray-500 mb-0">Greške koje koštaju budžet i kako ih ispraviti.</p>
        </Link>
        <Link href="/blog/remarketing-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing Vodič 2026</p>
          <p className="text-xs text-gray-500 mb-0">Kako da ponovo targetirate posetioce koji nisu konvertovali.</p>
        </Link>
        <Link href="/blog/google-shopping-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Vodič</p>
          <p className="text-xs text-gray-500 mb-0">Korak po korak setup za profitabilne Shopping kampanje.</p>
        </Link>
        <Link href="/blog/koliko-kosta-google-ads" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Koliko Košta Google Ads</p>
          <p className="text-xs text-gray-500 mb-0">Realističan budžet i očekivanja za različite industrije.</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Februar 2026
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
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
          Ukratko
        </p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Auditujem Google Ads naloge već godinama. 80% naloga ima bar 3 od ovih grešaka — i svaka košta novac. Prosečno se 30% budžeta baca na ispravljive probleme. Evo 12 najčešćih grešaka koje vidim i kako da ih popravite.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              12
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Kritičnih grešaka</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              80%
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Naloga ima 3+</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              30%
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Budžeta se baca</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              100%
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Su popravljive</p>
          </div>
        </div>
      </div>

      <h2>Zašto su greške u Google Ads-u skupe</h2>
      <p>
        Kad god auditiram Google Ads nalog — bilo da je reč o lokalnoj firmi
        sa budžetom od €500 mesečno ili eCommerce-u sa €10,000+ spend-om —
        pronalazim iste greške iznova i iznova.
      </p>
      <p>
        Neke su očigledne čim otvorim nalog. Kampanje bez strukture, 500
        keywords u jednoj ad grupi, conversion tracking koji ne radi.
      </p>
      <p>
        Druge su suptilnije. Location targeting koji pušta saobraćaj iz
        gradova koje ne servirate. Negative keywords koje ne postoje. Search
        Terms koji nikad nisu pregledani.
      </p>
      <p>
        Svaka od ovih grešaka košta. Direktno kroz bačen budžet na
        nebitne klikove. Indirektno kroz propuštene konverzije i lošiji ROAS.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Najčešći pattern</p>
        <p className="text-blue-800 text-sm mb-0">
          Klijent troši €1,000 mesečno, ali €300 odlazi na klikove koji nikad
          neće konvertovati. Posle popravki, isti budžet donosi 40-60% više
          rezultata.
        </p>
      </div>

      <p>
        Evo 12 najčešćih Google Ads grešaka koje vidim u skoro svakom audit-u,
        grupisane po kategorijama.
      </p>

      <hr />

      <h2>Greške u strukturi naloga</h2>

      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Sve u jednoj kampanji — proizvodi, usluge, brand i non-brand keywords,
          sve pomešano
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Nemoguće je razumeti šta radi i šta ne radi. Ne možete optimizovati
          budžet kada je sve u jednom košu. Quality Score pada jer oglasi ne
          mogu biti relevantni za sve.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Preporučujem restrukturiranje po logičnim
            celinama — brand kampanja odvojeno od non-brand, proizvodi po
            kategorijama, različiti ciljevi u različite kampanje. Tako dobijate
            čiste podatke i možete optimizovati svaki segment zasebno.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Loše imenovanje kampanja i ad grupa — "Kampanja 1", "Ad grupa test",
          bez strukture
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Posle 3 meseca više ne znate šta je šta. Optimizacija postaje
          pogađanje. Ne možete brzo pronaći kampanju kada treba da napravite
          promenu.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Umesto generičkih naziva, koristite jasnu
            konvenciju — npr. "SRB_Search_Brand_Proizvod-X" ili
            "HR_Shopping_Returning_Kategorija-Y". Uključite geografiju, tip
            kampanje i proizvod/segment u ime.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Mešanje Search i Display u istoj kampanji — Google defaultno uključuje
          Display Network
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Display ima potpuno drugačije karakteristike od Search-a. Niži CTR,
          drugačiji intent, druge metrike. Kada je sve pomešano, ne vidite gde
          vam odlazi budžet.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Odmah isključite Display Network iz
            Search kampanja (Campaign settings → Networks). Ako želite Display,
            kreirajte zasebne kampanje sa specifičnim targetingom i drugim
            budžetom.
          </p>
        </div>
      </div>

      <hr />

      <h2>Greške u ključnim rečima</h2>

      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Nema ili minimum negative keywords — plaćate za "besplatno", "posao",
          "kurs", "DIY"
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Google prikazuje vaše oglase za pretrage bez kupovne namere. 20-30%
          budžeta odlazi na klikove koji nikad neće konvertovati jer ljudi
          traže besplatna rešenja ili informacije.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Umesto čekanja da greške stave na račun,
            kreirajte starter liste odmah — dodajte "besplatno", "dzabe",
            "posao", "oglasi", "kurs", "kako da", "DIY" kao account-level
            negative liste. Detaljan vodič:{" "}
            <Link
              href="/blog/negativne-kljucne-reci"
              className="underline text-green-900"
            >
              negativne ključne reči
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Previše široke match types — sve na Broad Match bez kontrole
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Broad match daje Google-u previše slobode da interpretira vaše
          keywords. Oglasi se prikazuju za totalno nebitne pretrage koje
          Google "misli" da su relevantne.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Preporučujem da za proven keywords (oni
            koji već konvertuju) pređete na Phrase ili Exact match. Broad match
            držite samo za discovery — i to sa jakom listom negativnih keywords
            i dovoljno konverzijskih podataka.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Nikad ne gledate Search Terms Report — ne znate za šta zapravo
          plaćate
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Search Terms Report pokazuje stvarne pretrage korisnika koje su
          pokrenule vaše oglase. Bez redovnog pregleda, plaćate za gomilu
          nebitnih stvari i propuštate nove dobre keywords.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Umesto ignorisanja, napravite nedeljni
            ritual — otvorite Search Terms za prethodnu nedelju, dodajte nebitne
            kao negative keywords, extractujte dobre termine kao nove positive
            keywords. 15 minuta nedeljno štedi 15-30% budžeta.
          </p>
        </div>
      </div>

      <hr />

      <h2>Greške u oglasima</h2>

      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Generic ad copy — "Kvalitet", "Najpovoljnije", "Brza dostava" kao i
          svi drugi
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Vaši oglasi su identični konkurentskim. Nema razloga da kliknu baš
          na vas. Niži CTR znači viši CPC i lošiji Ad Rank.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Umesto generičkih fraza, dodajte
            konkretne brojke ("98% pozitivnih recenzija"), unique benefits
            ("Besplatna montaža u Beogradu i Novom Sadu"), social proof
            ("1,000+ prodatih proizvoda"). Specifičnost prodaje.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Nema ad testiranja — samo jedan oglas po ad grupi
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Bez A/B testiranja ne znate da li možete bolje. Propuštate priliku
          da kontinuirano poboljšavate CTR i conversion rate kroz testove.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Preporučujem minimum 2-3 oglasa po ad
            grupi. Testirajte različite headlines (benefit vs feature), različite
            CTAs ("Poručite danas" vs "Saznajte više"), različite vrednosne
            ponude. Optimizujte za Conversions, ne za Clicks.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Nedostaju ad extensions — tekstualni oglas bez ekstenzija zauzima
          minimalan prostor
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Manji vizuelni footprint znači niži CTR. Ad Rank pada. Placate više
          po kliku. Extensions su besplatni i značajno poboljšavaju performanse.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Umesto praznih oglasa, dodajte minimum:
            4-6 sitelink-ova, 4+ callout-a, structured snippets (brendovi,
            kategorije, usluge), call extension ako imate telefon, location
            extension ako imate prodajno mesto.
          </p>
        </div>
      </div>

      <hr />

      <h2>Greške u merenju</h2>

      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Nema conversion tracking-a ili je pogrešno postavljen
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Ovo je fundamentalna greška. Bez pravilnog merenja konverzija,
          optimizujete na pogrešne metrike. Smart Bidding ne može da radi.
          Ne znate šta funkcioniše.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Umesto improvizovanja, pročitajte{" "}
            <Link
              href="/blog/conversion-tracking-vodic"
              className="underline text-green-900"
            >
              vodič za conversion tracking
            </Link>
            . Postavite pravilno: Conversion Linker tag u GTM (All Pages),
            konverzijske akcije definisane tačno, Enhanced Conversions aktivirane.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Trackujete pogrešne konverzije — page views, form view, "thank you"
          duplikati
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Suspiciously high conversion rates (20%+) ili konverzije koje ne
          odgovaraju stvarnim prodajama/lead-ovima. Google algoritam optimizuje
          na pogrešne akcije.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Preporučujem hijerarhiju: primarna
            konverzija = vredna akcija (purchase, qualified lead), sekundarne
            konverzije = micro-actions (add to cart, pricing view) ali sa
            "Secondary" označeno. Proverite da tag puca samo jednom po sesiji.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Ignorišete attribution model — koristite Last Click za dug sales cycle
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Last Click daje sav kredit poslednjem touchpoint-u. Ako imate B2B
          sa 30-60 dnevnim cyclom, kampanje koje stvaraju awareness ne
          dobijaju kredit. Rezultat: gašenje kampanja koje zapravo rade.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Umesto Last Click-a za sve, koristite
            Data-Driven attribution ako imate dovoljno podataka (400+ konverzija
            mesečno). Za kraći cycle (eCommerce), Last Click je OK. Za duži
            (B2B), Position-Based ili Data-Driven daju realniju sliku.
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Greške u merenju su najkritičnije. Ako ne merite pravilno, sve
          odluke su nagađanje. Pre nego što ispravite bilo šta drugo,
          popravite tracking.
        </p>
      </div>

      <hr />

      <h2>Kako napraviti akcioni plan za popravku</h2>

      <p>
        Pronašli ste više grešaka u vašem nalogu? Ne morate sve da popravite
        odjednom. Evo kako da prioritizujete:
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            1
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Popravite tracking prvo
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Bez pravilnog merenja konverzija, sve ostale odluke su nagađanje.
        </p>
        <ul className="text-sm">
          <li>Postavite conversion tracking pravilno</li>
          <li>Proverite da konverzije odgovaraju stvarnim akcijama</li>
          <li>Dodajte Enhanced Conversions</li>
          <li>Testirajte da sve radi (Google Tag Assistant)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            2
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Zaustavite curenje budžeta
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Odmah isečite najočiglednije izvore bačenog novca.
        </p>
        <ul className="text-sm">
          <li>Dodajte negative keywords (starter liste)</li>
          <li>Isključite Display Network iz Search kampanja</li>
          <li>Podesite location targeting na "People in" only</li>
          <li>Pregledajte Search Terms za prošlu nedelju</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            3
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Restrukturirajte nalog
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Kreirajte logičnu strukturu za buduće optimizacije.
        </p>
        <ul className="text-sm">
          <li>Razdvojite brand i non-brand kampanje</li>
          <li>Organizujte po proizvodima/uslugama/kategorijama</li>
          <li>Kreirajte jasne naming konvencije</li>
          <li>Proverite da nema duplicate keywords</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            4
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Poboljšajte oglase
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Viši CTR znači niži CPC i bolji Ad Rank.
        </p>
        <ul className="text-sm">
          <li>Dodajte sve relevantne ad extensions</li>
          <li>Kreirajte 2-3 oglasa po ad grupi za testiranje</li>
          <li>Unesite specifične brojke i unique benefits u copy</li>
          <li>Testirajte Quality Score poboljšanja</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            5
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Optimizujte kontinuirano
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Optimizacija nije jednokratna aktivnost, već proces.
        </p>
        <ul className="text-sm">
          <li>Nedeljni Search Terms review</li>
          <li>Mesečni ad testing review i strukture provera</li>
          <li>Kvartalni kompletni audit</li>
          <li>
            Koristite{" "}
            <Link
              href="/blog/google-ads-audit-vodic"
              className="underline text-gray-900"
            >
              Google Ads audit vodič
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Svaka greška koju popravite vraća 10-30% izgubljenog budžeta. Posle
          popravke svih 12, prosečan nalog dobija 50-70% bolje performanse sa
          istim budžetom.
        </p>
      </div>

      <hr />

      <h2>Često postavljana pitanja</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko ovih grešaka ima prosečan Google Ads nalog?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          U mojim audit-ima, 80% naloga ima minimum 3-5 od ovih grešaka. Nalozi
          kojima upravlja neko bez iskustva često imaju 8+. Čak i nalozi koje
          vode agencije ponekad imaju 2-3 fundamentalne greške (najčešće u
          tracking-u ili strukturi). Savršen nalog ne postoji, ali svaka
          popravljena greška direktno utiče na performanse.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koja greška ima najveći uticaj na rezultate?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Greške u merenju — absence ili pogrešan conversion tracking. Bez
          pravilnog merenja, sve odluke su nagađanje. Smart Bidding ne radi.
          Ne znate koja kampanja donosi rezultate. Druga najskuplja greška je
          nedostatak negative keywords — direktno troši 15-30% budžeta na
          nebitne klikove.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Mogu li sam da popravim ove greške ili mi treba ekspert?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Većinu možete sami — ove greške nisu tehnički kompleksne, samo zahtevaju
          vreme i pažnju. Preporučujem da pročitate povezane vodiče (conversion
          tracking, negative keywords, Quality Score) i radite korak po korak.
          Ako imate budžet €2,000+, ekspertska pomoć se često isplati jer
          možete da fokusirate vreme na biznis umesto na administraciju naloga.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko brzo se vide rezultati posle popravki?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Zavisi od greške. Negative keywords imaju instant efekat — čim ih
          dodate, prestajete da plaćate za te pretrage. Strukturalne promene
          (kampanje, ad grupe) trebaju 1-2 nedelje da se stabilizuju. Smart
          Bidding strategije trebaju 2-4 nedelje learning period-a. Generalno,
          očekujte jasnu sliku posle 30-45 dana. Ključ je da pratite metrike
          PRE i POSLE da znate da li promene funkcionišu.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Kako da znam da li moj nalog ima neku od ovih grešaka?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Napravite sistematski pregled: 1) Proverite da li imate conversion
          tracking postavljen i da brojevi odgovaraju stvarnosti, 2) Otvorite
          Search Terms Report za prošlu nedelju — da li vidite nebitne pretrage?
          3) Prebrojite negative keywords — ako imate manje od 50, sigurno currite
          budžet, 4) Pogledajte strukturu kampanja — da li možete lako da
          razumete šta je šta? Ako vam treba profesionalni audit,{" "}
          <Link href="/kontakt" className="underline text-gray-900">
            kontaktirajte me
          </Link>{" "}
          — detaljno pregledam nalog i dajem action plan sa prioritetima.
        </div>
      </details>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Trebate pomoć da popravite Google Ads nalog?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Profesionalni audit vašeg naloga sa detaljnom analizom grešaka,
          prioritizacijom i action planom za popravku. Analiza uključuje sve
          kampanje, keywords, tracking, strukturu i performanse.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link
          href="/blog/conversion-tracking-vodic"
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Conversion Tracking Vodič
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kako pravilno postaviti merenje konverzija u Google Ads-u
          </p>
        </Link>
        <Link
          href="/blog/negativne-kljucne-reci"
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Negative Keywords Strategija
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kako zaustaviti curenje budžeta kroz nebitne klikove
          </p>
        </Link>
        <Link
          href="/blog/quality-score-vodic"
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Quality Score Optimizacija
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kako poboljšati Quality Score i smanjiti CPC
          </p>
        </Link>
        <Link
          href="/blog/koliko-kosta-google-ads"
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Koliko Košta Google Ads
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Realni troškovi oglašavanja i kako planirati budžet
          </p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Februar 2026
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
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
          Ukratko
        </p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Ako vaše Google Ads kampanje ne donose rezultate, razlog je skoro
          sigurno tehnički — i rešiv. Evo brzog izvoda za 90% slučajeva.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              8
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">
              najčešćih razloga
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              90%
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">
              problema je rešivo
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              2-4
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">
              nedelje dijagnoze
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              50%
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">
              dijagnoza = pola rešenja
            </p>
          </div>
        </div>
      </div>

      <h2>Razumem frustraciju — ali problem je rešiv</h2>
      <p>
        &quot;Google Ads nam ne radi.&quot; Ovu rečenicu čujem bar jednom
        nedeljno. Od vlasnika firmi koji su pokušali sami. Od marketing
        menadžera koji su angažovali agenciju. Od freelancera koji su preuzeli
        nalog od nekog drugog.
      </p>
      <p>
        I razumem frustraciju — uložili ste vreme, budžet, možda i novac za
        agenciju ili freelancera. A rezultat? Nula. Ili još gore: stalno
        prazno obećanje da će &quot;uskoro krenuti&quot;.
      </p>
      <p>
        Ali evo šta valja znati: <strong>problem nije u Google Ads-u</strong>.
        Google Ads radi za milione biznisa širom sveta. Problem je specifičan —
        i skoro uvek rešiv.
      </p>
      <p>
        Radim na Google Ads kampanjama 8+ godina. Video sam svaki scenario.
        Dobre kampanje koje su iznenada prestale da rade. Nove kampanje koje
        nikada nisu zaživele. Skupi setup-i od agencija koji su bili potpuno
        pogrešno konfigurisani.
      </p>
      <p>
        I u <strong>90% slučajeva</strong>, problem pripada jednoj od 8
        kategorija koje obrađujem u ovom vodiču. Za svaku dajem dijagnostiku i
        konkretno rešenje.
      </p>
      <p>
        Neki problemi možete popraviti sami za sat vremena. Za druge će vam
        trebati dodatno znanje. Ali svi su rešivi — i cilj ovog vodiča je da
        vam pokažem gde je problem i šta dalje.
      </p>

      <hr />

      <h2>Pre svega — proverite osnove</h2>
      <p>
        Pre nego što pređemo na dubinsku analizu, pet brzih provera koje su u
        80% slučajeva dovoljne da identifikujete problem.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              1
            </span>
            <div>
              <strong>Conversion tracking radi?</strong>{" "}
              <span className="text-gray-500">
                — Proverite Google Ads {"->"} Goals {"->"} Summary. Ako imate 0
                konverzija, ili konverzije koje ne odgovaraju stvarnosti,
                tracking nije ispravan. To je problem #1.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              2
            </span>
            <div>
              <strong>Koliko vremena ste dali kampanji?</strong>{" "}
              <span className="text-gray-500">
                — Ako je kampanja mlađa od 2 nedelje, to još nije dovoljno.
                Learning period za Google Ads je minimalno 2-4 nedelje. Sačekajte.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              3
            </span>
            <div>
              <strong>Da li je budžet dovoljan?</strong>{" "}
              <span className="text-gray-500">
                — Ako imate €10/dan budžet u industriji gde je CPC €5, dobijaćete
                2 klika dnevno. To nije dovoljno za konverzije. Realnost je da
                trebate minimum 10-15 konverzija mesečno za bilo kakvu optimizaciju.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              4
            </span>
            <div>
              <strong>Landing page je relevantan?</strong>{" "}
              <span className="text-gray-500">
                — Ako oglasi govore o &quot;servisu rashladnih uređaja&quot; a
                šaljete ljude na homepage gde je 10 različitih usluga, problem je
                tu. Landing page mora odgovarati oglasu.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              5
            </span>
            <div>
              <strong>Gde ste gledate performanse?</strong>{" "}
              <span className="text-gray-500">
                — Ako gledate samo Google Ads interface bez uvida u stvarne
                konverzije (prodaje, telefone, prijave), možda kampanja zapravo
                radi — samo ne na metrici koju gledate.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Ako vam je problem bio neki od gornjih — popravite to PRVO, pa tek onda
          nastavite sa analizom. Ne postoji smisao optimizovati kampanju ako
          osnove nisu na mestu.
        </p>
      </div>

      <hr />

      <h2>Osam razloga zašto kampanje ne rade</h2>
      <p>
        Ovo su najučestaliji razlozi zašto Google Ads kampanje ne donose
        rezultate — rangirani po učestalosti, ne po važnosti. Za svaki dajem
        opis problema i rešenje.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 1
        </p>
        <p className="font-semibold mb-2">
          Loš ili nepostojeći conversion tracking
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Ne znate koliko konverzija imate. Smart Bidding ne donosi rezultate.
          Odluke donosite na osnovu &quot;osećaja&quot;. Google Ads pokazuje
          konverzije, ali brojke ne odgovaraju stvarnosti.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Postavite ispravan conversion tracking
            (preporuka je Google Tag Manager). Aktivirajte Enhanced Conversions.
            Proverite da svaka kampanja prati pravu conversion action. Testirajte
            tracking pre lansiranja kampanje.{" "}
            <Link href="/blog/conversion-tracking-vodic" className="underline">
              Detaljan vodič o conversion tracking-u
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 2
        </p>
        <p className="font-semibold mb-2">
          Slanje saobraćaja na homepage ili pogrešan landing page
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Visok bounce rate (70%+). Nizak conversion rate ({"{<"}1%). Ljudi dolaze
          ali brzo odlaze. Landing page ne govori o istoj temi kao oglas.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Kreirajte dedicirane landing pages za svaku
            kampanju ili ad grupu. Pravilo: ako oglas govori o X, landing page
            MORA da govori o X (message match). Jasna CTA, benefit-focused copy,
            social proof, i brz load time.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 3
        </p>
        <p className="font-semibold mb-2">Previše široke ključne reči</p>
        <p className="text-sm text-gray-600 mb-3">
          Visoki troškovi, malo konverzija. Search Terms report pun nebitnih
          pretraga. CPC je &quot;normalan&quot; ali ROI loš. Koristite samo Broad
          match.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Pređite na Phrase i Exact match za
            proven keywords. Broad match možete koristiti samo ako imate jak
            conversion tracking i dovoljno konverzija. Agresivna negative keyword
            strategija. Nedeljni Search Terms audit.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 4
        </p>
        <p className="font-semibold mb-2">Nedostatak negative keywords</p>
        <p className="text-sm text-gray-600 mb-3">
          Plaćate za &quot;besplatno&quot;, &quot;posao&quot;, &quot;kako&quot;
          pretrage. Search Terms report pokazuje non-buyer intent. Visoki troškovi
          bez konverzija. Imate manje od 50 negative keywords (premalo).
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Isključite informacione pretrage (kako, šta
            je, tutorial), job seekers (posao, karijera, plata), free seekers
            (besplatno, free, jeftino), i konkurenciju (ako ne želite da se
            prikazujete). Nedeljni audit i dodavanje novih. Cilj: 100+ negative
            keywords nakon prvog meseca.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 5
        </p>
        <p className="font-semibold mb-2">Loša struktura naloga</p>
        <p className="text-sm text-gray-600 mb-3">
          Sve u jednoj kampanji. 50+ keywords u jednoj ad grupi. Nemoguće razumeti
          šta funkcioniše. Brand i non-brand mešani. Research i high-intent u istoj
          kampanji.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Restrukturiranje po tematskim celinama.
            Idealno: 10-20 keywords po ad grupi, tematski povezani. Razdvojite:
            Brand vs Non-brand (obavezno), High intent vs Research, Products vs
            Services. Struktura treba da olakšava analizu i optimizaciju.{" "}
            <Link href="/blog/google-ads-greske" className="underline">
              Najčešće Google Ads greške
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 6
        </p>
        <p className="font-semibold mb-2">Nizak Quality Score</p>
        <p className="text-sm text-gray-600 mb-3">
          Quality Score ispod 5-6 za većinu keywords. Visok CPC za poziciju koju
          dobijate. Ad Rank problems — kampanja se retko prikazuje.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Quality Score ima 3 komponente — radite na
            svim. <strong>Za CTR:</strong> bolji ad copy, više relevantnih
            ekstenzija. <strong>Za Ad Relevance:</strong> keywords u headline,
            tighter ad groups. <strong>Za Landing Page:</strong> brži sajt,
            relevantni sadržaj, mobile-friendly. Cilj: QS 7+ za glavne keywords.{" "}
            <Link href="/blog/quality-score-vodic" className="underline">
              Quality Score vodič
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 7
        </p>
        <p className="font-semibold mb-2">Nerealna očekivanja (i premali budžet)</p>
        <p className="text-sm text-gray-600 mb-3">
          Budžet €300, očekivanja €30,000 revenue. &quot;Želimo rezultate za
          nedelju dana&quot;. Konstantno nezadovoljstvo bez jasnog razloga. Manje
          od 10-15 konverzija mesečno — nema dovoljno podataka za optimizaciju.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Postavite realistične KPI-jeve bazirane na
            matematici. Minimum 2-3 meseca za pravu evaluaciju. Budžet koji
            dozvoljava minimum 10-15 konverzija mesečno (Google preporučuje 30+,
            ali 10-15 je minimum za bilo kakve zaključke).{" "}
            <Link href="/blog/koliko-kosta-google-ads" className="underline">
              Koliko košta Google Ads
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 8
        </p>
        <p className="font-semibold mb-2">Loši oglasi (ad copy)</p>
        <p className="text-sm text-gray-600 mb-3">
          Nizak CTR ({"{<"}2% za Search). Oglasi govore o vama, ne o korisniku.
          Nema diferencijacije od konkurencije. Isti tekst u svim oglasima, bez
          testiranja.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Benefit-focused copy (šta korisnik dobija,
            ne šta vi radite). Uključite keyword u headline. Jasna CTA (Pozovite,
            Kupite, Zakažite). Testirajte varijacije — minimum 2-3 oglasa po ad
            grupi, različiti approach-i. Pratite CTR i učite šta funkcioniše.
          </p>
        </div>
      </div>

      <hr />

      <h2>Dijagnostički vodič — kako identifikovati problem</h2>
      <p>
        Ako ne znate gde je problem, idite ovim redosledom. Ovo je framework koji
        koristim kad preuzimam novi nalog.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            1
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Proverite conversion tracking
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Da li znate koliko konverzija imate i odakle dolaze? Da li brojke
          odgovaraju stvarnosti?
        </p>
        <ul className="text-sm">
          <li>
            Ako NE — rešite tracking PRVO. Sve ostalo je gubitak vremena.
          </li>
          <li>
            Proverite: Google Ads {"->"} Goals {"->"} Summary + testirajte live
            konverziju
          </li>
          <li>
            Bonus: uporedite brojke iz Google Ads-a sa CRM-om ili eCommerce
            platformom
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            2
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Analizirajte Search Terms report
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Da li plaćate za relevantan saobraćaj? Proverite Google Ads {"->"}{" "}
          Insights &amp; Reports {"->"} Search Terms.
        </p>
        <ul className="text-sm">
          <li>
            Ako više od 30% pretraga nije relevantno — previše široke ključne
            reči + nedostatak negative keywords
          </li>
          <li>
            Sortirajte po Cost (najviši prvo) — gde odlazi najveći deo budžeta?
          </li>
          <li>
            Dodajte najbolje search terms kao eksplicitne ključne reči, najgore
            kao negative
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            3
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Proverite landing pages
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Da li šaljete ljude na relevantne stranice? Proverite Google Ads {"->"}{" "}
          Campaigns {"->"} Final URLs.
        </p>
        <ul className="text-sm">
          <li>
            Ako većina kampanja vodi na homepage — to je problem
          </li>
          <li>
            Testirajte sami: kliknite na oglas kao korisnik. Da li landing page
            govori o istoj temi? Da li je CTA jasna?
          </li>
          <li>
            Bounce rate preko 70% = pogrešan landing page ili spor sajt
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            4
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Quality Score audit
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Da li je QS iznad 6 za većinu keywords? Google Ads {"->"} Keywords{" "}
          {"->"} dodajte Quality Score kolonu.
        </p>
        <ul className="text-sm">
          <li>
            QS ispod 5 = previše skup saobraćaj — radite na CTR, relevantnosti,
            landing page-u
          </li>
          <li>
            Proverite komponente (Expected CTR, Ad Relevance, Landing Page
            Experience) — koja je najslabija?
          </li>
          <li>
            Često problem nije quality vec struktura — previše keywords u ad
            grupi
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            5
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Budžet i realnost
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Da li imate dovoljno data za optimizaciju? Proverite broj konverzija u
          poslednjih 30 dana.
        </p>
        <ul className="text-sm">
          <li>
            Manje od 10 konverzija mesečno = problem je premali budžet ili
            preskup CPC
          </li>
          <li>
            Izračunajte: CPC × Conversion Rate = koliko vas košta jedna
            konverzija? Da li je to profitabilno?
          </li>
          <li>
            Ako nije profitabilno ni sa dobrim campaign setup-om, Google Ads možda
            nije pravi kanal (još)
          </li>
        </ul>
      </div>

      <hr />

      <h2>Koliko vremena dati kampanji pre nego odustanete</h2>
      <p>
        Jedna od najčešćih greški je da se kampanja odustaje prerano. Evo
        realističkih timelinova po tipu kampanje.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">
                Tip kampanje
              </th>
              <th className="py-3 px-4 font-heading font-semibold">
                Learning period
              </th>
              <th className="py-3 px-4 font-heading font-semibold">
                Stabilne performanse
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Search (Manual CPC)</td>
              <td className="py-3 px-4">7-14 dana</td>
              <td className="py-3 px-4">2-4 nedelje</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">
                Search (Smart Bidding)
              </td>
              <td className="py-3 px-4">2-4 nedelje</td>
              <td className="py-3 px-4">6-8 nedelja</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Shopping</td>
              <td className="py-3 px-4">2-3 nedelje</td>
              <td className="py-3 px-4">4-6 nedelja</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">PMax</td>
              <td className="py-3 px-4">4-6 nedelja</td>
              <td className="py-3 px-4">8-12 nedelja</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Display/Video</td>
              <td className="py-3 px-4">3-4 nedelje</td>
              <td className="py-3 px-4">6-10 nedelja</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Learning period ne znači da ne smete ništa da dirate. Znači da
          performanse još nisu stabilne. Ali možete (i treba) da gledate Search
          Terms report, dodajete negative keywords, testira te različite landing
          pages. Samo nemojte menjati bidding strategiju ili budžet drastično.
        </p>
      </div>

      <hr />

      <h2>Kada potražiti pomoć</h2>
      <p>
        Neki problemi možete rešiti sami za sat vremena. Za druge vam treba
        dublje znanje. Evo kada ima smisla raditi sam, a kada angažovati
        eksperta.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            DIY pristup
          </p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">
            Radite sami ako...
          </h3>
          <p className="text-sm text-gray-600 mb-0">
            Imate jasnu dijagnozu (npr. nedostatak negative keywords). Problem je
            tehnički jednostavan (dodavanje keywords, promena landing page-a).
            Imate vreme da učite i eksperimentišete. Budžet je manji (ispod
            €500/mesec). Želite da razvijete interno znanje.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            Ekspertska pomoć
          </p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">
            Angažujte eksperta ako...
          </h3>
          <p className="text-sm text-gray-600 mb-0">
            Ne znate u čemu je problem (dijagnostika nejasna). Probali ste sve iz
            ovog vodiča i ne radi. Budžet je veći (preko €1,000/mesec) — greške
            vas koštaju. Nemate vremena za učenje — potrebni su vam rezultati
            brzo. Kampanje su kompleksne (multinacionalne, multilanguage, veliki
            inventar).
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Strategija</p>
        <p className="text-blue-800 text-sm mb-0">
          Ako niste sigurni — zakažite audit. Jedan dobar audit (1-2h
          freelancera ili agencije) će vam dati jasnu dijagnozu i akcioni plan.
          Onda možete odlučiti da li ćete raditi sami ili angažovati pomoć.{" "}
          <Link href="/blog/google-ads-audit-vodic" className="underline">
            Vodič za Google Ads audit
          </Link>
          .
        </p>
      </div>

      <hr />

      <h2>Često postavljana pitanja</h2>

      <details
        className="bg-white border-2 border-gray-200 rounded-xl group mb-3"
        open
      >
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko vremena treba da Google Ads počne da radi?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Zavisi od tipa kampanje. Za Search kampanje sa Manual CPC, prve
          konverzije možete videti za 7-14 dana. Za Smart Bidding (Target CPA,
          Target ROAS), learning period je 2-4 nedelje. Za PMax kampanje, čak 4-6
          nedelja. Ali stabilne, optimizovane rezultate možete očekivati tek
          nakon 2-3 meseca rada. Nemojte odustati pre toga — learning je deo
          procesa.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li je problem u agenciji/freelanceru?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Možda. Tražite transparentnost: pristup nalogu (Admin access),
          mesečne izveštaje sa jasnim metrikama, jasno objašnjenje akcija.
          Ako dobijate samo &quot;radimo na tome&quot; bez detalja, to je
          crvena zastava. Dobar partner će vam uvek moći objasniti šta radi i
          zašto. Ako niste zadovoljni, zatražite audit od nezavisne strane —
          često otkrije da problem nije u setup-u već u nečemu drugom (npr.
          landing page, ponuda).
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko budžeta treba da bude dovoljno?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Zavisi od industrije, CPC-a, i ciljeva. Ali pravilo palca: trebate
          minimum 10-15 konverzija mesečno da biste imali dovoljno podataka za
          bilo kakve zaključke. Ako je vaš CPA (cost per acquisition) €50, to
          znači minimum €500-750/mesec budžet. Google preporučuje 30+
          konverzija mesečno za Smart Bidding, ali i sa 10-15 možete početi
          optimizaciju. Ispod toga, kampanja nema dovoljno signala za učenje.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta ako konkurencija ima mnogo veći budžet?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Fokusirajte se na niše gde oni nisu jaki: long-tail keywords
          (specifičnije pretrage), geografski targeting (specifične
          lokacije), ad schedule (vremenski periodi kada konkurencija spava).
          Quality Score može značajno izjednačiti teren — QS 9 će vam dati
          bolju poziciju od QS 5 čak i sa manjim bid-om. Takođe, razmislite o
          manje očiglednim keywords — oni su često jeftiniji a konvertuju
          bolje jer su specifičniji.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li da odustanem od Google Ads?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Pre nego što odustanete, probajte audit od nezavisne strane. Svež
          pogled često otkrije probleme koje vi ne vidite (ili koji su vam
          zamaskirani ako radite sa agencijom koja ne radi dobro). Google Ads
          radi za milione biznisa — ali nije univerzalno rešenje. Ako
          stvarno nema potražnje za vašim proizvodom/uslugom, ili su margine
          premale za profitabilnost sa vašim CPC-om, onda je možda vreme za
          drugi kanal (SEO, social media, email marketing).
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Kampanja ne radi? Pronađimo problem zajedno
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Ako ste probali sve iz ovog vodiča i još uvek ne dobijate rezultate,
          zakažite besplatnu konsultaciju. Prolazimo kroz vaš nalog zajedno,
          identifikujemo problem, i dogovaramo dalje korake.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link
          href="/blog/conversion-tracking-vodic"
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Conversion Tracking Vodič
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kako postaviti ispravan conversion tracking za Google Ads kampanje
          </p>
        </Link>
        <Link
          href="/blog/google-ads-greske"
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Najčešće Google Ads Greške
          </p>
          <p className="text-xs text-gray-500 mb-0">
            10 grešaka koje koštaju klijente hiljade eura mesečno
          </p>
        </Link>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Problem nije u Google Ads-u — problem je u dijagnozi. Većina kampanja
          koje &quot;ne rade&quot; mogu se popraviti za 2-4 nedelje sa
          pravilnom analizom i akcijama.
        </p>
      </div>

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
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
          Ukratko
        </p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          eCommerce i B2B Google Ads strategije su fundamentalno različite — customer journey, metrički prioriteti, bidding strategije i conversion tracking nisu isti. Preporučujem prilagođen pristup jer primena pogrešne strategije bacaju novac.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              2
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Modela</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              8
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Ključnih razlika</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              4+4
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Strategije</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              1
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Pravi pristup</p>
          </div>
        </div>
      </div>

      <p>
        &quot;Radimo Google Ads, ali ne vidimo rezultate.&quot;
      </p>
      <p>
        Kada čujem ovu rečenicu, prvo pitanje je: da li je strategija prilagođena vašem poslovnom modelu?
      </p>
      <p>
        eCommerce i B2B imaju fundamentalno različite karakteristike. Customer journey, decision making process, vrednost konverzije, metrike koje pratite — sve je različito.
      </p>
      <p>
        A opet, vidim isti pristup primenjivan na oba: iste vrste kampanja, isti KPI-jevi, ista očekivanja.
      </p>
      <p>
        U ovom vodiču pokrivam ključne razlike i specifične strategije za svaki model.
      </p>

      <hr />

      <h2>Zašto se eCommerce i B2B razlikuju u Google Ads-u</h2>
      <p>
        Pre nego što pređemo na konkretne taktike, potrebno je razumeti fundamentalne razlike između dva modela.
      </p>
      <p>
        <strong>eCommerce:</strong> Korisnik zna šta želi, traži gde da kupi. &quot;Kupi Nike Air Max 90 bele&quot; — intent je jasan, ciklus kratak, konverzija je kupovina.
      </p>
      <p>
        <strong>B2B:</strong> Korisnik ima problem, traži rešenje. &quot;Kako automatizovati fakturisanje&quot; — tek istražuje opcije, ciklus dug, konverzija je lead.
      </p>
      <p>
        Ova razlika diktira sve ostalo — od tipa kampanja do načina merenja uspeha.
      </p>

      <hr />

      <h2>Ključne razlike — poređenje</h2>
      <p>
        Preporučujem da prvo razumete direktne razlike između modela pre nego što definišete strategiju.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Aspekt</th>
              <th className="py-3 px-4 font-heading font-semibold">eCommerce</th>
              <th className="py-3 px-4 font-heading font-semibold">B2B</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Sales Cycle</td>
              <td className="py-3 px-4">Minuti do dana</td>
              <td className="py-3 px-4">Nedelje do meseci</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Decision Makers</td>
              <td className="py-3 px-4">1 osoba</td>
              <td className="py-3 px-4">2-10 osoba</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Touchpoints</td>
              <td className="py-3 px-4">1-5 interakcija</td>
              <td className="py-3 px-4">10-50+ interakcija</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Primarna konverzija</td>
              <td className="py-3 px-4">Kupovina (sa vrednošću)</td>
              <td className="py-3 px-4">Lead (forma, demo, poziv)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Vrednost</td>
              <td className="py-3 px-4">€10 - €500 (tipično)</td>
              <td className="py-3 px-4">€1,000 - €100,000+</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Volume</td>
              <td className="py-3 px-4">Visok (stotine transakcija)</td>
              <td className="py-3 px-4">Nizak (desetine lead-ova)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Primarni KPI</td>
              <td className="py-3 px-4">ROAS, Revenue, Conversion Rate</td>
              <td className="py-3 px-4">CPL, Lead Quality, SQL Rate</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Ključne kampanje</td>
              <td className="py-3 px-4">Shopping, PMax, Brand Search</td>
              <td className="py-3 px-4">Non-Brand Search, Remarketing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Ignorisanje ovih razlika vodi ka primeni pogrešne strategije. Shopping kampanje ne postoje za B2B. Lead-gen tracking ne daje ROAS za eCommerce. Prilagodite pristup modelu.
        </p>
      </div>

      <hr />

      <h2>Google Ads strategija za eCommerce</h2>
      <p>
        Za eCommerce, Google Ads strategija je fokusirana na brzu konverziju, visok ROAS i Shopping kampanje kao ključni kanal.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              1
            </span>
            <div>
              <strong>Brand Search</strong>{" "}
              <span className="text-gray-500">
                — zaštita brenda, visok CTR, najbolji ROAS
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              2
            </span>
            <div>
              <strong>Google Shopping</strong>{" "}
              <span className="text-gray-500">
                — Standard Shopping (kontrola) + PMax (skaliranje)
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              3
            </span>
            <div>
              <strong>Non-Brand Search</strong>{" "}
              <span className="text-gray-500">
                — generičke pretrage, viši CPC, dopunski kanal
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              4
            </span>
            <div>
              <strong>Remarketing</strong>{" "}
              <span className="text-gray-500">
                — Cart Abandoners, Product Viewers, Past Customers
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            1
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Shopping kampanje — srce eCommerce strategije
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Za većinu eCommerce biznisa, Shopping kampanje donose 60-80% prihoda iz Google Ads. Vizuelni format, pre-kvalifikacija cenom, visok intent.
        </p>
        <ul className="text-sm">
          <li>
            <strong>Feed quality</strong> je #1 prioritet — title optimizacija, atributi, custom labels za segmentaciju
          </li>
          <li>
            <strong>Bidding:</strong> Target ROAS sa dynamic conversion values (šaljite stvarnu vrednost transakcije)
          </li>
          <li>
            <strong>Segmentacija:</strong> Custom labels po marži, best-sellers, sezonalnost
          </li>
          <li>
            <strong>Kontrola:</strong> Negative keywords za irelevantne pretrage
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            2
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Search kampanje</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Brand Search za zaštitu + Non-Brand Search za dopunski volumen. Shopping &gt; Search za većinu eCommerce kategorija.
        </p>
        <ul className="text-sm">
          <li>
            <strong>Brand:</strong> Obvezno — konkurenti mogu da se prikazuju na vaš brand
          </li>
          <li>
            <strong>Non-Brand:</strong> Generičke pretrage (&quot;patike Nike&quot;, &quot;bluetooth slušalice&quot;)
          </li>
          <li>
            <strong>Kategorije:</strong> Mid-funnel (&quot;najbolje patike za trčanje&quot;)
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            3
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Remarketing — recovery strategija
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          97% posetilaca ne kupi prvi put. Remarketing je obavezan za konverziju &quot;gotovo kupljenih&quot; transakcija.
        </p>
        <ul className="text-sm">
          <li>
            <strong>Cart Abandoners (1-7 dana):</strong> Agresivan pristup, možda sa incentive (popust 10%)
          </li>
          <li>
            <strong>Product Viewers (3-14 dana):</strong> Dinamički product ads (prikazuju proizvod koji su gledali)
          </li>
          <li>
            <strong>Past Customers (30-180 dana):</strong> Cross-sell, upsell, novi proizvodi
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            4
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Performance Max — skaliranje sa oprezom
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          PMax je automated kanal koji pokriva sve Google inventory (Search, Shopping, Display, YouTube). Koristi se za skaliranje kada imate stabilan ROAS sa Shopping/Search.
        </p>
        <ul className="text-sm">
          <li>
            <strong>Kada koristiti:</strong> Nakon što imate 50+ konverzija mesečno i stabilan ROAS
          </li>
          <li>
            <strong>Asset groups:</strong> Segmentirajte po kategorijama ili best-sellers
          </li>
          <li>
            <strong>Oprez:</strong> PMax može da kanibalizuje Brand Search — pratite search term reportove
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Povezan vodič</p>
        <p className="text-blue-800 text-sm mb-0">
          Detaljnije o Shopping kampanjama: <Link href="/blog/google-shopping-vodic" className="underline font-semibold">Google Shopping vodič — kako pokrenuti i optimizovati</Link>
        </p>
      </div>

      <hr />

      <h2>Google Ads strategija za B2B</h2>
      <p>
        Za B2B, Google Ads strategija je fokusirana na lead quality (ne volume), duži sales cycle, i offline conversion tracking.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              1
            </span>
            <div>
              <strong>Non-Brand Search</strong>{" "}
              <span className="text-gray-500">
                — Problem, Solution, Product keywords (50-60% budžeta)
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              2
            </span>
            <div>
              <strong>Brand Search</strong>{" "}
              <span className="text-gray-500">
                — zaštita + authority, najbolji conversion rate
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              3
            </span>
            <div>
              <strong>Remarketing</strong>{" "}
              <span className="text-gray-500">
                — nurture kroz duži ciklus (30-90 dana window)
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              4
            </span>
            <div>
              <strong>Offline Conversion Import</strong>{" "}
              <span className="text-gray-500">
                — GCLID tracking, SQL &amp; Won Deal import za pravi feedback
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            1
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Search kampanje — fokus na intent keywords
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Za B2B, Search je dominantan kanal. Shopping ne postoji, Display ima ograničen impact. Pokrijte ceo funnel, ali najveći budžet na high-intent.
        </p>
        <ul className="text-sm">
          <li>
            <strong>Problem keywords:</strong> &quot;kako smanjiti troškove IT-a&quot; — nizak intent, niži CPC
          </li>
          <li>
            <strong>Solution keywords:</strong> &quot;IT outsourcing usluge&quot; — srednji intent, srednji CPC
          </li>
          <li>
            <strong>Product keywords:</strong> &quot;cloud ERP za proizvodnju&quot; — visok intent, viši CPC
          </li>
          <li>
            <strong>Competitor keywords:</strong> &quot;SAP vs Oracle&quot; — visok intent, visok CPC
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            2
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Content/Lead magnet strategija
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          B2B buyer ne želi odmah da ostavi kontakt. Ponudite besplatan content (whitepaper, checklist, webinar) kao prvi korak.
        </p>
        <ul className="text-sm">
          <li>
            <strong>Top-of-funnel:</strong> Problem-based content (&quot;Kako smanjiti troškove&quot; &rarr; &quot;Preuzmite besplatnu checklist&quot;)
          </li>
          <li>
            <strong>Mid-funnel:</strong> Solution content (case study, demo video)
          </li>
          <li>
            <strong>Bottom-funnel:</strong> Direktna ponuda (demo, konsultacije)
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            3
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Remarketing — nurture kroz duži ciklus
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          B2B remarketing je drugačiji — duži consideration period (30-90 dana), više touchpoints, fokus na value nurture.
        </p>
        <ul className="text-sm">
          <li>
            <strong>Blog Readers (30 dana):</strong> Lead magnet, webinar invite
          </li>
          <li>
            <strong>Resource Downloaders (60 dana):</strong> Case study, demo offer
          </li>
          <li>
            <strong>Pricing Page (14 dana):</strong> Direktna ponuda, konsultacije (high-intent segment)
          </li>
          <li>
            <strong>Demo No-Shows (7 dana):</strong> Reschedule, alternative content
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            4
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Offline Conversion Import — kritična razlika
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          U eCommerce, konverzija = prodaja. U B2B, konverzija = lead. Ali nisu svi lead-ovi jednaki. Offline import rešava problem kvaliteta.
        </p>
        <ul className="text-sm">
          <li>
            <strong>Problem:</strong> Optimizujete ka form submissions, dobijate volume ali ne kvalitet
          </li>
          <li>
            <strong>Rešenje:</strong> Čuvajte GCLID sa svakim lead-om &rarr; pratite kroz sales pipeline &rarr; importujte &quot;SQL&quot; ili &quot;Won&quot; nazad u Google Ads
          </li>
          <li>
            <strong>Impact:</strong> Google uči koji tip lead-ova se zatvara. Volume može pasti, ali kvalitet drastično raste.
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Povezani vodiči</p>
        <p className="text-blue-800 text-sm mb-0">
          <Link href="/blog/conversion-tracking-vodic" className="underline font-semibold">Conversion tracking vodič</Link> za offline import setup &amp; <Link href="/blog/remarketing-vodic" className="underline font-semibold">Remarketing vodič</Link> za nurture strategiju.
        </p>
      </div>

      <hr />

      <h2>KPI-jevi i merenje uspeha</h2>
      <p>
        Preporučujem različite KPI-jeve za eCommerce i B2B jer optimizacija ka pogrešnim metrikama bacaju novac.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            eCommerce
          </p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">
            Primarni KPI-jevi
          </h3>
          <p className="text-sm text-gray-600 mb-0">
            <strong>ROAS</strong> (Return on Ad Spend) — prihod / trošak<br />
            <strong>Revenue</strong> — ukupan prihod iz kampanja<br />
            <strong>Conversion Rate</strong> — procenat posetilaca koji kupe<br />
            <strong>AOV</strong> (Average Order Value)<br />
            <strong>CPA</strong> (Cost per Acquisition)
          </p>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            B2B
          </p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">
            Primarni KPI-jevi
          </h3>
          <p className="text-sm text-gray-600 mb-0">
            <strong>CPL</strong> (Cost per Lead) — ali oprez, nije sve o volumenu<br />
            <strong>Lead Quality Score</strong> — % kvalifikovanih lead-ova<br />
            <strong>SQL Rate</strong> — % lead-ova koji postanu Sales Qualified<br />
            <strong>Pipeline Value</strong> — ukupna vrednost potencijalnih dealova<br />
            <strong>Cost per SQL</strong> (pravi KPI, ne CPL)
          </p>
        </div>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Metrika</th>
              <th className="py-3 px-4 font-heading font-semibold">eCommerce Benchmark</th>
              <th className="py-3 px-4 font-heading font-semibold">B2B Benchmark</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">CPC (prosek)</td>
              <td className="py-3 px-4">€0.30 - €1.50</td>
              <td className="py-3 px-4">€2.00 - €10.00+</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Conversion Rate</td>
              <td className="py-3 px-4">2% - 5%</td>
              <td className="py-3 px-4">5% - 15% (lead form)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Target ROAS</td>
              <td className="py-3 px-4">300% - 500%+</td>
              <td className="py-3 px-4">N/A (lead-gen model)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">CPA / CPL</td>
              <td className="py-3 px-4">€10 - €50 (per purchase)</td>
              <td className="py-3 px-4">€50 - €500+ (per lead)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Konverzije mesečno</td>
              <td className="py-3 px-4">50-500+</td>
              <td className="py-3 px-4">10-50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2>Budžet i očekivanja</h2>
      <p>
        Realistična očekivanja oko budžeta i rezultata variraju drastično između eCommerce i B2B.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Aspekt</th>
              <th className="py-3 px-4 font-heading font-semibold">eCommerce</th>
              <th className="py-3 px-4 font-heading font-semibold">B2B</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Minimalni budžet</td>
              <td className="py-3 px-4">€500 - €1,000/mesec</td>
              <td className="py-3 px-4">€1,500 - €2,500/mesec</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Preporučeni početni</td>
              <td className="py-3 px-4">€1,500 - €3,000/mesec</td>
              <td className="py-3 px-4">€3,000 - €5,000/mesec</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Vreme do rezultata</td>
              <td className="py-3 px-4">2-4 nedelje (prvi podaci)</td>
              <td className="py-3 px-4">1-3 meseca (kvalitetni lead-ovi)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Skaliranje</td>
              <td className="py-3 px-4">Linearan rast (2x budžet = ~2x revenue)</td>
              <td className="py-3 px-4">Nelinearan (viši budžet ≠ 2x lead-ova)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Pravilo budžeta</p>
        <p className="text-yellow-800 text-sm mb-0">
          eCommerce: Budžet = 10% očekivanog revenue (npr. želite €10K revenue &rarr; €1K ad spend). B2B: Budžet &gt; 3x CPC × 30 konverzija (npr. €5 CPC &rarr; min. €450/mesec, ali preporučujem 5-10x za stabilnost).
        </p>
      </div>

      <hr />

      <h2>Najčešće greške po modelu</h2>
      <p>
        Svaki model ima specifične greške koje vidim kod novih klijenata. Preporučujem da ih izbegnete.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            eCommerce
          </p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">
            Kritične greške
          </h3>
          <ul className="text-sm mb-0">
            <li>
              <strong>Ignorisanje feed optimizacije</strong> — feed je temelj Shopping-a, ne title/description
            </li>
            <li>
              <strong>Isti bid za sve proizvode</strong> — high-margin proizvodi treba više bidova, low-margin manje
            </li>
            <li>
              <strong>Nema remarketing segmentacije</strong> — cart abandoners ≠ browsers, različit pristup
            </li>
            <li>
              <strong>Fokus na CTR umesto ROAS</strong> — klik nije prodaja, platite li samo za klikove ili za revenue?
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            B2B
          </p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">
            Kritične greške
          </h3>
          <ul className="text-sm mb-0">
            <li>
              <strong>Optimizacija ka form fills bez quality metriks</strong> — volume ≠ kvalitet, pratite SQL rate
            </li>
            <li>
              <strong>Prekratki remarketing windows</strong> — B2B ciklus je 30-90 dana, ne 7
            </li>
            <li>
              <strong>Ignorisanje offline conversions</strong> — gubite najvažniji feedback za kvalitet
            </li>
            <li>
              <strong>Previše generički keywords</strong> — &quot;softver&quot; nije dovoljno specifično
            </li>
            <li>
              <strong>Očekivanje eCommerce-level volumena</strong> — B2B je inherently lower volume, fokus na kvalitet
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <h2>Često postavljana pitanja</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Može li isti tim raditi i eCommerce i B2B kampanje?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Da, ali zahteva drugačiji mindset. Ekspertiza u jednom ne garantuje ekspertizu u drugom. eCommerce konsultant koji poznaje Shopping/ROAS optimizaciju mora da nauči B2B lead quality tracking i offline conversions. Obrnuto važi takođe — B2B konsultant mora da nauči feed optimizaciju i Shopping kampanje. Preporučujem timove koji imaju iskustvo u oba modela ili specijalizovane konsultante po modelu.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koji model je lakši za početak?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          eCommerce je obično jasniji — prodaja je prodaja, ROAS je ROAS. Vidite rezultate brže (2-4 nedelje), tracking je direktan (kupovina = konverzija), metrike su jednostavnije. B2B ima više varijabli: lead quality, sales cycle dužina, multiple decision makers. Ali ako imate CRM i offline conversion import, B2B može biti stabilniji dugoročno (veće deal vrednosti, duži customer lifetime).
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li PMax radi za B2B?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Može, ali sa oprezom. PMax zahteva dovoljno konverzija (minimum 30-50/mesec) i offline import za pravu optimizaciju ka kvalitetu. Većina B2B biznisa nema dovoljno volume za PMax da radi optimalno. Preporučujem: počnite sa Search kampanjama, gradite volume, dodajte offline conversion import, tek onda testirajte PMax sa 20-30% budžeta. Nikada ne prebacujte 100% budžeta na PMax odmah.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliki budžet treba za B2B?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Više nego što mislite zbog višeg CPC-a (€2-10+) i nižeg volumena. Minimum €1,500-2,000 mesečno za smisleno testiranje. Preporučujem €3,000-5,000 za stabilne rezultate. Formula: 3x CPC × 30 konverzija = minimalni budžet (npr. €5 CPC &rarr; €450, ali to je minimum za 1 kampanju). Za 3-4 kampanje (Brand, Non-Brand, Remarketing) + testirajuće budžete, računajte €2,000-3,000.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Kako meriti ROI za B2B kada je sales cycle 6 meseci?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Long-term tracking je ključan: pipeline value, SQL rate, eventual revenue. Koristite CRM integraciju (HubSpot, Salesforce) i importujte podatke nazad u Google Ads (offline conversions). Pratite 3 metrike: (1) CPL — koliko košta lead, (2) SQL rate — koliko % lead-ova postaje kvalifikovano, (3) Won rate — koliko % SQL-ova se zatvara. Kombinirajte: CPL × (1 / SQL rate) × (1 / Won rate) = Cost per Won Deal. Uporedite sa average deal value = ROI.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta ako radim hibridni model (npr. SaaS sa self-serve + enterprise)?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Preporučujem zasebne kampanje po segmentu. Low-touch proizvodi (mesečna pretplata &lt; €100) mogu da koriste eCommerce pristup (Target ROAS, kratki remarketing). High-touch enterprise (annual &gt; €1,000+) treba B2B pristup (lead-gen, duži remarketing, offline import). Razdvojite landing pages, konverzije, i budžete. Ne mešajte u istoj kampanji jer će Smart Bidding biti konfuzovan (optimizuje ka €50 self-serve ili €10,000 enterprise deal?).
        </div>
      </details>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Trebate pomoć sa Google Ads strategijom?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Radim sa eCommerce i B2B klijentima na prilagođenim Google Ads strategijama. Besplatna konsultacija uključuje analizu vašeg trenutnog account setup-a i preporuke za optimizaciju.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link
          href="/blog/google-shopping-vodic"
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Google Shopping Vodič
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kompletan setup i optimizacija Shopping kampanja za eCommerce
          </p>
        </Link>

        <Link
          href="/blog/remarketing-vodic"
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Remarketing Vodič
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Strategije za cart abandonment i lead nurture
          </p>
        </Link>

        <Link
          href="/blog/conversion-tracking-vodic"
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Conversion Tracking Vodič
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Offline conversion import i quality tracking za B2B
          </p>
        </Link>

        <Link
          href="/blog/koliko-kosta-google-ads"
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Koliko Košta Google Ads
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Budžet benchmarks i očekivanja za eCommerce i B2B
          </p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Februar 2026
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
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google Ads hvata kupce sa namerom, Meta Ads gradi svest i interesovanje.
          Najbolji rezultati dolaze kada koristite obe platforme strateški —
          Google za zatvaranje prodaja, Meta za punjenje levka.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">platforme, različite svrhe</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Intent</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">vs Interesovanje</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Bolje</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">zajedno nego odvojeno</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Zavisi</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">od vašeg biznisa</p>
          </div>
        </div>
      </div>

      <p>
        &quot;Da li je bolje Google Ads ili Facebook Ads?&quot; — jedno od najčešćih pitanja
        koje dobijem. I moj odgovor je uvek isti: <strong>zavisi</strong>.
      </p>
      <p>
        Zavisi od vašeg biznisa, proizvoda, ciljne publike, budžeta i ciljeva.
        Google Ads i Meta Ads (Facebook + Instagram) nisu konkurencija u tradicionalnom
        smislu — to su <strong>komplementarni kanali</strong> koji služe različitim
        svrhama u customer journey-u.
      </p>
      <p>
        U ovom vodiču razbijam fundamentalne razlike, pokazujem kada koristiti koju
        platformu, kako ih kombinovati za maksimalan efekat, i kako napraviti pravi
        izbor za vaš specifičan biznis.
      </p>

      <hr />

      {/* ── H2: Osnovna razlika ── */}
      <h2>Osnovna razlika — namera vs interesovanje</h2>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Google Ads hvata ljude koji <em>traže</em> rešenje.
          Meta Ads prikazuje rešenje ljudima koji ga možda <em>žele</em>,
          ali ga nisu potražili.
        </p>
      </div>

      <p>
        Ovo je najvažnija razlika između platformi. <strong>Google Ads je demand harvesting</strong>
        — hvatate postojeću potražnju. Korisnik pretražuje &quot;cipele za trčanje&quot;,
        ima jasnu nameru, vi se pojavite sa relevantnim oglasom. Ne morate ga ubediti
        da mu trebaju cipele — samo da kupi baš vaše.
      </p>
      <p>
        <strong>Meta Ads je demand generation</strong> — stvarate potražnju koja
        pre nije postojala. Korisnik scrolla Instagram feed, vidi vaše cipele.
        Nije ih tražio. Možda mu se dopadnu, možda ne. Vi prvo morate stvoriti
        želju, pa tek onda konvertovati.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Iz mog iskustva</p>
        <p className="text-blue-800 text-sm mb-0">
          Preko 80% mojih klijenata koji koriste obe platforme vide najbolje rezultate.
          Google donosi konverzije sa višim intent-om, Meta puni levak i smanjuje CPA
          kroz remarketing. Preporučujem kombinovani pristup kad god je to moguće.
        </p>
      </div>

      <hr />

      {/* ── H2: Poređenje po ključnim kriterijumima ── */}
      <h2>Poređenje po ključnim kriterijumima</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Kriterijum</th>
              <th className="py-3 px-4 font-heading font-semibold">Google Ads</th>
              <th className="py-3 px-4 font-heading font-semibold">Meta Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Targeting pristup</td>
              <td className="py-3 px-4">Ključne reči &amp; namera</td>
              <td className="py-3 px-4">Interesovanja &amp; ponašanja</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">User mindset</td>
              <td className="py-3 px-4">&quot;Aktivno tražim rešenje&quot;</td>
              <td className="py-3 px-4">&quot;Scrolla za zabavu&quot;</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Ad format</td>
              <td className="py-3 px-4">Tekst, Shopping, Responsive</td>
              <td className="py-3 px-4">Slike, Video, Carousel, Stories</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Prosečan CPC (Srbija)</td>
              <td className="py-3 px-4">€0.20 - €1.50</td>
              <td className="py-3 px-4">€0.05 - €0.50</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Conversion rate</td>
              <td className="py-3 px-4 text-green-700 font-semibold">Viši (2-8%)</td>
              <td className="py-3 px-4">Niži (0.5-4%)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Attribution window</td>
              <td className="py-3 px-4">Kratak (1-2 dodira)</td>
              <td className="py-3 px-4">Duži (3-7+ dodira)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Najbolje za</td>
              <td className="py-3 px-4">Zatvaranje prodaja, lead gen</td>
              <td className="py-3 px-4">Brand awareness, punjenje levka</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Learning curve</td>
              <td className="py-3 px-4">Srednji (keyword research)</td>
              <td className="py-3 px-4">Viši (kreativa &amp; targeting)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Niži CPC na Meta ne znači automatski bolji ROI. Zbog nižeg intenta,
          možda vam treba 5x više klikova za istu konverziju. Fokusirajte se na
          CPA i ROAS, ne samo na cenu klika.
        </p>
      </div>

      <hr />

      {/* ── H2: Kada je Google Ads bolji izbor ── */}
      <h2>Kada je Google Ads bolji izbor</h2>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Proizvodi sa visokim intent-om</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Kada ljudi aktivno pretražuju vaš proizvod ili uslugu, Google Ads
          hvata tu potražnju u pravom trenutku. Idealno za industrije gde je
          pretraga prvi korak ka kupovini.
        </p>
        <ul className="text-sm">
          <li><strong>Primer:</strong> &quot;popravka klima uređaja Beograd&quot;</li>
          <li><strong>Primer:</strong> &quot;CRM softver za mala preduzeća&quot;</li>
          <li><strong>Primer:</strong> &quot;advokat za razvod Novi Sad&quot;</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Lokalni biznisi</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Lokalne pretrage (&quot;blizu mene&quot;, &quot;u Beogradu&quot;) imaju
          izuzetno visok intent i conversion rate. Google Maps integracija i Local
          Service Ads daju dodatnu prednost.
        </p>
        <ul className="text-sm">
          <li>Restorani, frizeri, beauty saloni</li>
          <li>Hitni servisi (vodoinstalater, šlep služba)</li>
          <li>Medicinske i stomatološke ordinacije</li>
          <li>Lokalni retail &amp; uslužne delatnosti</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">B2B sa specifičnim rešenjem</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Decision makeri prvo pretražuju Google kada traže biznis rešenja.
          Ako neko traži &quot;ERP za proizvodnju&quot;, ima budžet i ima problem
          koji mora rešiti — to je vaša prilika.
        </p>
        <ul className="text-sm">
          <li>SaaS proizvodi &amp; softverska rešenja</li>
          <li>Poslovne usluge (IT outsourcing, accounting, legal)</li>
          <li>Enterprise rešenja &amp; B2B tehnologija</li>
          <li>Industrijsko-tehnička oprema</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">eCommerce sa jasnom potražnjom</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ako prodajete standardne proizvode koje ljudi traže po imenu,
          <Link href="/blog/google-shopping-vodic" className="underline">Google Shopping</Link> kampanje
          često donose najbolji ROAS. Pretraga pokazuje nameru, Shopping pokazuje proizvod.
        </p>
        <ul className="text-sm">
          <li>Brendirani proizvodi (konkretni modeli, SKU-ovi)</li>
          <li>Problem-solving proizvodi (npr. &quot;baterija za iPhone 12&quot;)</li>
          <li>Poređenje cena &amp; specifikacija (electronics, appliances)</li>
          <li>Sezonski proizvodi sa jasnom potražnjom</li>
        </ul>
      </div>

      <hr />

      {/* ── H2: Kada je Meta Ads bolji izbor ── */}
      <h2>Kada je Meta Ads bolji izbor</h2>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Brand awareness &amp; novi proizvodi</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Kada ljudi ne znaju da vaš proizvod postoji ili da im treba, nema
          šta da pretražuju na Google-u. Meta vam omogućava da stvorite potražnju
          prikazivanjem oglasa pravoj publici na osnovu interesovanja.
        </p>
        <ul className="text-sm">
          <li>Lansiranje novog brenda ili proizvoda</li>
          <li>Inovativni proizvodi koje ljudi još ne traže</li>
          <li>D2C brendovi koji grade awareness</li>
          <li>Lifestyle i community-driven proizvodi</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Vizuelno privlačni proizvodi</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Proizvodi koji &quot;prodaju sami sebe&quot; kada ih vide funkcionišu
          odlično na Instagramu i Facebooku. Meta format omogućava storytelling,
          lifestyle prezentaciju i emocionalnu konekciju.
        </p>
        <ul className="text-sm">
          <li>Moda, odeća, obuća, accessories</li>
          <li>Kozmetika &amp; beauty proizvodi</li>
          <li>Home decor, nameštaj, enterijerni dizajn</li>
          <li>Hrana &amp; pića (vizual je ključ)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Impulse purchase kategorije</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Proizvodi koje ljudi kupuju brzo, bez dugog razmišljanja,
          odlično funkcionišu na Meta platformama. Feed scrolla, vidi nešto,
          dopada mu se — kupi. Niža cena = manji otpor.
        </p>
        <ul className="text-sm">
          <li>Proizvodi ispod €50 (niska finansijska barijera)</li>
          <li>Gadgets, accessories, pokloni</li>
          <li>Subscription box proizvodi</li>
          <li>Trending &amp; viral proizvodi</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Izgradnja publike &amp; lookalikes</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Meta omogućava sofisticiranu audience building strategiju —
          skupljate email liste, gradite custom audiences od posetilaca,
          pravite lookalike audiences sličnih kupaca. Ovaj pristup je
          moćan za dugoročni rast.
        </p>
        <ul className="text-sm">
          <li><Link href="/blog/remarketing-vodic" className="underline">Remarketing</Link> za posetioce sajta &amp; cart abandoners</li>
          <li>Lookalike audiences na osnovu postojećih kupaca</li>
          <li>Video view audiences za funnel progresiju</li>
          <li>Email list retargeting &amp; customer exclusions</li>
        </ul>
      </div>

      <hr />

      {/* ── H2: Kombinovana strategija ── */}
      <h2>Kombinovana strategija — najbolji pristup</h2>

      <p>
        Umesto &quot;ili-ili&quot;, razmislite o &quot;i-i&quot; pristupu.
        Većina uspešnih oglašivača koristi obe platforme — svaka ima svoju ulogu
        u customer journey-u. Evo kako ih strateški kombinovati:
      </p>

      <h3>Full-funnel pristup</h3>
      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4 text-sm font-mono">
          <div>
            <strong className="text-blue-600">AWARENESS (Vrh levka)</strong>
            <div className="ml-4 mt-1 text-gray-700">
              ↳ <strong>Meta Ads:</strong> Video content, brand awareness kampanje<br />
              ↳ <strong>Meta Ads:</strong> Interesovanja &amp; ponašanja targeting<br />
              ↳ <strong>YouTube Ads:</strong> Skippable video, reach kampanje
            </div>
          </div>
          <div>
            <strong className="text-green-600">CONSIDERATION (Sredina levka)</strong>
            <div className="ml-4 mt-1 text-gray-700">
              ↳ <strong>Meta Ads:</strong> Retargeting video viewers &amp; engagers<br />
              ↳ <strong>Google Display:</strong> Content remarketing<br />
              ↳ <strong>YouTube Ads:</strong> Remarketing za YouTube gledaoce
            </div>
          </div>
          <div>
            <strong className="text-yellow-600">DECISION (Dno levka — konverzija)</strong>
            <div className="ml-4 mt-1 text-gray-700">
              ↳ <strong>Google Search:</strong> Branded + high-intent keywords<br />
              ↳ <strong>Google Shopping:</strong> Product searches<br />
              ↳ <strong>Meta Ads:</strong> Dynamic product retargeting<br />
              ↳ <strong>RLSA:</strong> Povećani bidovi za poznate posetioce
            </div>
          </div>
          <div>
            <strong className="text-purple-600">RETENTION (Zadržavanje kupaca)</strong>
            <div className="ml-4 mt-1 text-gray-700">
              ↳ <strong>Meta Ads:</strong> Customer lookalikes<br />
              ↳ <strong>Meta Ads:</strong> Upsell &amp; cross-sell kampanje<br />
              ↳ <strong>Email marketing</strong> (van scope-a, ali važno)
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Ključni princip</p>
        <p className="text-blue-800 text-sm mb-0">
          Meta puni levak, Google ga zatvara. Koristite Meta za upoznavanje ljudi
          sa vašim brendom, Google za hvatanje onih koji su spremni kupiti.
          Preporučujem ovaj pristup za većinu biznisa sa budžetom €1,000+/mesec.
        </p>
      </div>

      <h3>Raspodela budžeta po tipu biznisa</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Tip biznisa</th>
              <th className="py-3 px-4 font-heading font-semibold">Google Ads</th>
              <th className="py-3 px-4 font-heading font-semibold">Meta Ads</th>
              <th className="py-3 px-4 font-heading font-semibold">Razlog</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce (poznati proizvodi)</td>
              <td className="py-3 px-4 text-green-700 font-semibold">60-70%</td>
              <td className="py-3 px-4">30-40%</td>
              <td className="py-3 px-4">Visoka potražnja, Shopping dominira</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">eCommerce (novi brend)</td>
              <td className="py-3 px-4">30-40%</td>
              <td className="py-3 px-4 text-green-700 font-semibold">60-70%</td>
              <td className="py-3 px-4">Treba graditi awareness</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">B2B Lead Gen</td>
              <td className="py-3 px-4 text-green-700 font-semibold">70-80%</td>
              <td className="py-3 px-4">20-30%</td>
              <td className="py-3 px-4">Pretraga = aktivna namera</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Lokalni biznis</td>
              <td className="py-3 px-4 text-green-700 font-semibold">60-80%</td>
              <td className="py-3 px-4">20-40%</td>
              <td className="py-3 px-4">Lokalne pretrage imaju visok intent</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">SaaS</td>
              <td className="py-3 px-4">50-60%</td>
              <td className="py-3 px-4">40-50%</td>
              <td className="py-3 px-4">Balans: pretraga + retargeting</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">D2C Brend</td>
              <td className="py-3 px-4">40-50%</td>
              <td className="py-3 px-4 text-green-700 font-semibold">50-60%</td>
              <td className="py-3 px-4">Storytelling &amp; visual identity</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── H2: Budžet i raspodela ── */}
      <h2>Budžet i raspodela</h2>

      <p>
        Koliko treba izdvajati za svaku platformu? Preporuka zavisi od industrije,
        ciljeva i dostupnosti potražnje. Evo praktičnih okvira:
      </p>

      <h3>Minimalni budžeti za testiranje</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Google Ads</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">€500-1,000/mesečno</h3>
          <p className="text-sm text-gray-600 mb-0">
            Minimum za smisleno testiranje Search + Shopping kampanja.
            Ispod ovoga, teško je skupiti dovoljno podataka za optimizaciju.
            Za konkurentne industrije, potrebno je više.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Meta Ads</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">€300-500/mesečno</h3>
          <p className="text-sm text-gray-600 mb-0">
            Minimum za testiranje različitih kreativa i audiences.
            CPM je niži, ali treba vremena da algoritam nauči.
            Za ozbiljan scaling, planirajte €1,000+.
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Zlatno pravilo startovanja</p>
        <p className="text-sm text-yellow-900 mb-0">
          Ne startujte obe platforme istovremeno ako vam je ovo prva kampanja.
          Startujte sa onom koja ima veći potencijal za vaš biznis (obično Google
          ako postoji potražnja), prikupite podatke 60-90 dana, pa tek onda
          dodajte drugu platformu. Preporučujem ovaj pristup za budžete ispod €1,500/mesec.
        </p>
      </div>

      <hr />

      {/* ── H2: Merenje i atribucija ── */}
      <h2>Merenje i atribucija</h2>

      <p>
        Jedan od najvećih izazova multi-platform oglašavanja je <strong>atribucija</strong>
        — koja platforma zaslužuje credit za konverziju? Meta i Google koriste
        različite attribution modele, što često dovodi do konfuzije.
      </p>

      <h3>Kako Google i Meta mere konverzije</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Aspekt</th>
              <th className="py-3 px-4 font-heading font-semibold">Google Ads</th>
              <th className="py-3 px-4 font-heading font-semibold">Meta Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Default attribution window</td>
              <td className="py-3 px-4">30 dana (klik), 1 dan (view)</td>
              <td className="py-3 px-4">7 dana (klik), 1 dan (view)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Attribution model</td>
              <td className="py-3 px-4">Data-driven (default)</td>
              <td className="py-3 px-4">Last-click (default)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Cross-device tracking</td>
              <td className="py-3 px-4">Da (Google login)</td>
              <td className="py-3 px-4">Ograničeno (iOS 14+ problem)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">View-through conversions</td>
              <td className="py-3 px-4">1 dan (Display)</td>
              <td className="py-3 px-4">1 dan</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Atribucija u multi-platform svetu</p>
        <p className="text-blue-800 text-sm mb-0">
          Korisnik vidi vaš oglas na Instagramu, ne klikne. Sledeće nedelje
          pretražuje Google, klikne na oglas, kupi. Ko dobija credit? Google kaže Google,
          Meta kaže Meta (view-through). Istina je negde između. Koristite <Link href="/blog/conversion-tracking-vodic" className="underline">Google Analytics 4</Link> ili
          dedicated attribution tool (npr. Triple Whale) za nezavisno merenje.
        </p>
      </div>

      <h3>Ključne metrike za praćenje po platformi</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Google Ads</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Focus metrike</h3>
          <ul className="text-sm mb-0">
            <li><strong>Conversion rate</strong> — meri intent kvalitet</li>
            <li><strong>Search impression share</strong> — koliko potencijala ostavljate</li>
            <li><strong>Quality Score</strong> — utiče na CPC</li>
            <li><strong>ROAS</strong> — profitabilnost kampanja</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Meta Ads</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Focus metrike</h3>
          <ul className="text-sm mb-0">
            <li><strong>CTR (Link)</strong> — meri kreativa kvalitet</li>
            <li><strong>CPA</strong> — trošak po konverziji</li>
            <li><strong>Frequency</strong> — ad fatigue signal</li>
            <li><strong>ROAS</strong> — profitabilnost kampanja</li>
          </ul>
        </div>
      </div>

      <hr />

      {/* ── H2: FAQ ── */}
      <h2>Često postavljana pitanja</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koji kanal je bolji za početnike?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Google Search je obično lakši za merenje direktnog ROI-a jer korisnici
            imaju visoku nameru. Meta zahteva jaku kreativu i dublje razumevanje
            audience-a. Ali zavisi od vašeg biznisa — ako prodajete vizuelno privlačne
            proizvode, Meta može biti prirodniji početak. Preporučujem da startujete
            sa onom platformom koja ima jasniju vezu između oglasa i prodaje.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliki budžet treba za testiranje obe platforme?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum €800-1,500 ukupno (€500+ Google, €300+ Meta) za 60-90 dana
            da biste dobili smislene podatke za odlučivanje. Ispod ovoga, rezultati
            su često statistički besmisleni. Ako vam je budžet manji, startujte sa
            jednom platformom, optimizujte je, pa dodajte drugu kasnije.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li mi treba agencija koja radi obe platforme?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Idealno da, jer strategija treba biti koordinisana — Meta puni levak,
            Google zatvara prodaje, remarketing se overlap-uje. Ali specijalizovani
            freelanceri ili manje agencije za svaki kanal mogu biti bolji u egzekuciji
            od generalist agencije koja radi &quot;sve&quot;. Važnije je da neko razume
            vašu industriju nego da ima pristup svim platformama. Vidite više na
            <Link href="/blog/agencija-vs-freelancer" className="underline ml-1">agencija vs freelancer</Link>.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta ako moj proizvod nije vizuelan — da li Meta ima smisla?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Meta i dalje može raditi kroz UGC content, testimonijale, before/after
            comparison, ili storytelling videe. B2B SaaS i tehnički proizvodi uspešno
            koriste Meta za thought leadership i webinar promocije. Ali realno,
            ako nemate vizuelnu priču, Google će verovatno biti efikasniji kanal.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako merim cross-channel uticaj?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Bez nezavisnog tracking sistema, teško je. Google Analytics 4 je dobar
            početak (Advertising → Attribution → Conversion paths), ali ima ograničenja.
            Za ozbiljno multi-platform oglašavanje, razmotrite dedicated attribution
            tool poput Rockerbox, Triple Whale ili Northbeam. Alternativa: pratite
            ukupan biznis performance, ne samo individualne platforme.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li Facebook Ads još uvek rade posle iOS 14 update-a?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Da, ali nisu isti kao pre. iOS 14+ je smanjio tracking mogućnosti,
            što otežava atribuciju i targetiranje. Ali Meta i dalje radi — samo
            zahteva drugačiji pristup (Conversions API, server-side tracking, širi
            targeting). Mnogi biznisi i dalje imaju profitabilne Meta kampanje,
            posebno za remarketing i brand awareness.
          </div>
        </details>
      </div>

      <hr />

      {/* ── CTA ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Niste sigurni koja platforma je prava za vaš biznis?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Analiziram vašu industriju, budžet i ciljeve, i preporučujem optimalnu
          strategiju — Google, Meta, ili kombinaciju. Besplatna konsultacija, bez obaveze.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      {/* ── Connected guides ── */}
      <h3 className="font-heading font-bold text-lg mb-3">Povezani vodiči</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/blog/remarketing-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Remarketing — Kompletni vodič
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kako vratiti 96% posetilaca koji odu bez kupovine
          </p>
        </Link>
        <Link href="/blog/google-oglasavanje-za-firme" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Google oglašavanje za firme
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Vodič za B2B kompanije i uslužne delatnosti
          </p>
        </Link>
        <Link href="/blog/koliko-kosta-google-ads" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Koliko košta Google Ads?
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Realni troškovi oglašavanja u Srbiji i regionu
          </p>
        </Link>
        <Link href="/blog/ecommerce-vs-b2b" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            eCommerce vs B2B strategija
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kako se razlikuje pristup prema tipu biznisa
          </p>
        </Link>
      </div>

      {/* ── Footer ── */}
      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Februar 2026
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
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">Google Ads audit je sistematski pregled naloga koji otkriva wasted spend, propuštene prilike, i tehničke greške. Profesionalan audit pokriva 80+ checkpoint-a u 10 kategorija i u proseku identifikuje 15-25% budžeta koji se troši neefikasno.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">80+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">checkpoint-a</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">10</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">kategorija provere</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">15-25%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">wasted spend prosečno</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Q1</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">deep + mesečni mini</p>
          </div>
        </div>
      </div>

      <h2>Zašto je Google Ads audit neophodan</h2>
      <p>
        Kada preuzmem novi nalog na upravljanje, prva stvar je uvek detaljan Google Ads audit. U praksi vidim da preko 90% naloga ima iste fundamentalne probleme: conversion tracking ne funkcioniše kako treba, budžet cure na irelevantne search terms-ove, kampanje su loše organizovane, ili Smart Bidding pokušava da optimizuje sa nedovoljno podataka.
      </p>
      <p>
        Google Ads audit nije samo lista stvari koje &quot;ne rade&quot; — to je sistematska dijagnostika koja precizno identifikuje <strong>gde gubite novac i gde propuštate prilike za rast</strong>. Prosečan nalog koji nije optimizovan 6+ meseci troši 15-25% budžeta potpuno neefikasno. To se može eliminisati u prvoj nedelji posle audit-a.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Kada raditi Google Ads audit</p>
        <p className="text-blue-800 text-sm mb-0">
          <strong>Kvartalni deep audit</strong> (2-4 sata, svih 10 kategorija) + <strong>mesečni quick check</strong> (30 min, 7 prioritetnih tačaka). Dodatno: odmah ako performance naglo padne, preuzimate nalog od prethodne agencije, menjate biznis model, ili pokre&#x107;ete novu kampanju.
        </p>
      </div>

      <p>
        Moje iskustvo je da kompanije ili rade audit suviše retko (jednom godišnje ili nikad), ili gube vreme gledajući površinske metrike koje ne otkrivaju prave probleme. Ovaj vodič pokriva konkretno šta proveriti, kako interpretirati podatke, i koje akcije odmah preduzeti.
      </p>

      <hr />

      <h2>Šta dobar Google Ads audit pokriva</h2>
      <p>
        Profesionalan Google Ads audit nije improvizacija — to je strukturiran checklist od 80+ kontrolnih tačaka podeljenih u 10 ključnih kategorija. Svaka kategorija ima priority items (kritično za performance) i optimization items (dodatna poboljšanja za napredne naloge).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Osnova</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">1. Struktura naloga</h3>
          <p className="text-sm text-gray-600 mb-0">Logična organizacija kampanja, naming conventions, hierarchy, labels</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kritično</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">2. Conversion Tracking</h3>
          <p className="text-sm text-gray-600 mb-0">Da li pra&#x107;enje konverzija funkcioniše ta&#x10D;no i da li su podaci validni</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Setup</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">3. Pode&#x161;avanja kampanja</h3>
          <p className="text-sm text-gray-600 mb-0">Location targeting, networks, ad schedule, device bid adjustments</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Search</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">4. Klju&#x10D;ne re&#x10D;i i search terms</h3>
          <p className="text-sm text-gray-600 mb-0">Search Terms Report, negatives, Quality Score, match types, duplicates</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Creative</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">5. Oglasi i ekstenzije</h3>
          <p className="text-sm text-gray-600 mb-0">RSA quality, Ad Strength, sitelinks, callouts, structured snippets</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Targeting</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">6. Publike i remarketing</h3>
          <p className="text-sm text-gray-600 mb-0">Remarketing liste, audience layering, converter exclusions</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Automation</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">7. Bidding strategija</h3>
          <p className="text-sm text-gray-600 mb-0">Smart Bidding setup, conversion volume, target realism, learning periods</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Spend</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">8. Budžet i alokacija</h3>
          <p className="text-sm text-gray-600 mb-0">Impression Share Lost (Budget), campaign budget distribution</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Analysis</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">9. Reporting i analitika</h3>
          <p className="text-sm text-gray-600 mb-0">GA4 integration, attribution models, segment analysis, data discrepancies</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Advanced</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">10. Scripts i automatizacije</h3>
          <p className="text-sm text-gray-600 mb-0">Google Ads Scripts, automated rules, alerts, bulk operations</p>
        </div>
      </div>

      <p>
        Svaka kategorija dobija scoring od 1 do 5 i prioritizovan action plan. Na kraju Google Ads audit-a dobijate jasnu sliku gde ste, šta hitno popraviti, i koliki impact o&#x10D;ekivati od svake optimizacije.
      </p>

      <hr />

      <h2>Kategorija 1: Struktura naloga</h2>
      <p>
        Lo&#x161;a struktura je kao lo&#x161;a arhitektura zgrade — možete farbati fasadu, ali fundamentalni problemi ostaju. Preporu&#x10D;ujem da struktura bude lo

gi&#x10D;na, skalabilna, i transparentna — bilo ko treba da razume organizaciju za 5 minuta pregledanja.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Kampanje organizovane logi&#x10D;no</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Kampanje podeljene po proizvodu/usluzi, geografiji, ili funnel stage-u. Nikad sve u jednoj megakampanji.</p>
        <ul className="text-sm">
          <li><strong>Brand vs Non-brand ODVOJENI</strong> — Potpuno druga ekonomija: brand ima ni&#x17E;i CPC, vi&#x161;i CVR, druga strategija</li>
          <li><strong>Search i Display ODVOJENI</strong> — Nikad zajedno, osim kod Performance Max (drugačije metrike, drugo targetiranje)</li>
          <li><strong>Naming convention konzistentan</strong> — Npr. [Type]_[Product]_[Geo]_[Stage] za brzo filtriranje i reporting</li>
          <li><strong>Geografske kampanje odvojene</strong> — Ako poslujete u vi&#x161;e zemalja/regiona, izdvojite kampanje po geo</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ad Groups tematski fokusirane</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Jedna Ad Group = jedna tema/intent. U praksi to zna&#x10D;i 5-20 keywords po Ad Group-i, ne 50+.</p>
        <ul className="text-sm">
          <li><strong>Nema {`"catch-all"`} Ad Groups</strong> — Sve re&#x10D;i vezane za razli&#x10D;ite teme u istoj grupi = lo&#x161;iji Ad Strength i Quality Score</li>
          <li><strong>Keywords imaju sli&#x10D;an intent</strong> — {`"kupiti cipele"`} i {`"cena cipela"`} su sli&#x10D;an intent; {`"sportske cipele"`} i {`"svečane cipele"`} nisu</li>
          <li><strong>Dedicated Ad Groups za high-value terms</strong> — Brand terms, top sellers, high-margin proizvodi zaslužuju posebne grupe</li>
        </ul>
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Jedna kampanja sa 50+ Ad Groups, ili Search + Display zajedno u istoj kampanji</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Restrukturirajte nalog: izdvojite Search i Display, podelite kampanje na manje logi&#x10D;ne celine (po proizvodu/geo/stage), smanjite broj Ad Groups na 5-15 po kampanji.</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Pro tip</p>
        <p className="text-yellow-800 text-sm mb-0">Ako imate vi&#x161;e od 10 kampanja, kreirajte labels (npr. {`"Priority"`}, {`"Testing"`}, {`"Paused-Low_ROI"`}) za brže filtriranje u interfejsu. To štedi vreme pri Google Ads audit analizi.</p>
      </div>

      <hr />

      <h2>Kategorija 2: Pra&#x107;enje konverzija</h2>
      <p>
        Conversion tracking je najkriti&#x10D;niji deo svakog Google Ads audit-a. Ako pra&#x107;enje ne funkcioniše, ili bele&#x17E;i pogrešne podatke, sve ostalo je beskorisno — optimizujete na osnovu lo&#x161;ih informacija i donosite pogre&#x161;ne odluke.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Conversion tracking aktivan i funkcionalan</strong> <span className="text-gray-500">— Proverite da tag fire-uje (Google Tag Assistant, GTM Preview mode, ili browser dev tools)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Primary conversion action ozna&#x10D;ena</strong> <span className="text-gray-500">— Google mora znati koja je glavna konverzija za optimizaciju (ne sve konverzije jednako važne)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Test konverzija uspe&#x161;na</strong> <span className="text-gray-500">— Sami testirajte: kupite/submit-ujte lead i proverite da li se konverzija bele&#x17E;i u naloga (24h za pojavu)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Nema dupliciranih konverzija</strong> <span className="text-gray-500">— GA4 + Google Ads tag na istoj thank-you page mogu duplirati konverzije</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Conversion value ta&#x10D;an (eCommerce)</strong> <span className="text-gray-500">— ROAS optimizacija zahteva precizne revenue podatke, ukljucujući transaction_id za deduplication</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Enhanced conversions omogu&#x107;en</strong> <span className="text-gray-500">— Pobolj&#x161;ava attribution posle iOS 14.5+ privacy promena, mandatory za modernu optimizaciju</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div><strong>Attribution window logičan</strong> <span className="text-gray-500">— Default 30 dana je ok za većinu, ali B2B sa dugim sales cycle-om treba 60-90 dana</span></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Red flag: Google Ads konverzije se ne slažu sa GA4/CRM-om (&gt;20% razlike). To signalizira da tracking nije postavljen kako treba ili da postoji problem sa attribution modelom.</p>
      </div>

      <p>
        Detaljan vodič kako postaviti tracking i kako troubleshoot-ovati probleme: <Link href="/blog/conversion-tracking-vodic">Conversion Tracking za Google Ads</Link>.
      </p>

      <hr />

      <h2>Kategorija 3: Pode&#x161;avanja kampanja</h2>
      <p>
        Default pode&#x161;avanja u Google Ads-u su lo&#x161;a — dizajnirana da Google zaradi vi&#x161;e, ne da vi dobijete bolje rezultate. U praksi vidim da preko 70% novih naloga ima default settings koji tro&#x161;e budžet na pogre&#x161;nim mestima.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Location targeting</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Proverite da je {`"People in your targeted locations"`} izabrano, NE {`"People interested in your locations"`}. Default opcija prikazuje oglase ljudima koje Google <em>misli</em> da su zainteresovani za va&#x161;u lokaciju, &#x10D;ak i ako su na drugom kontinentu.</p>
        <ul className="text-sm">
          <li><strong>Location bid adjustments aktivni</strong> — Pove&#x107;ajte bid za best performing geo, smanjite za worst</li>
          <li><strong>Exclude nekonvertuju&#x107;e lokacije</strong> — Ako lokacija ima 0% CVR posle 50+ klikova, isklju&#x10D;ite</li>
          <li><strong>Radius targeting precizan</strong> — Lokalni biznisi: 10-20km radius, ne 50km+ (wasted spend)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Networks</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Display Network mora biti ISKLJU&#x10C;EN u Search kampanjama. Search Partners evaluirajte posle 30 dana — ako imaju lo&#x161;iji CPA od Search-a, isklju&#x10D;ite.</p>
        <ul className="text-sm">
          <li><strong>Search kampanje</strong> = samo Google Search (uncheck Display + pažljivo sa Search Partners)</li>
          <li><strong>Display kampanje</strong> = samo Display Network (nikad zajedno sa Search, druga ekonomija)</li>
          <li><strong>Search Partners provera</strong> — Segment report posle mesec dana: ako CPA 20%+ gori, isklju&#x10D;ite</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ad schedule (dani/sati)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Analizirajte performance po satima i danima (Day &amp; Hour report). Ako konverzije padaju posle 20h ili vikendom, smanjite bid ili pauzirajte te slotove.</p>
        <ul className="text-sm">
          <li><strong>Bid adjustments za vreme</strong> — Pove&#x107;ajte +20-50% za best time slots, smanjite -30-50% za worst</li>
          <li><strong>B2B kampanje</strong> — Obi&#x10D;no ne treba da rade vikendom (office hours only: 9-17h, Mon-Fri)</li>
          <li><strong>eCommerce sezonalnost</strong> — Pove&#x107;ajte bid za ve&#x10D;ernje sate i vikende (shopping time)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Devices (Desktop/Mobile/Tablet)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Analizirajte performance po device-ima. Ako mobile ima 2x gori conversion rate, smanjite bid za -30% do -50%.</p>
        <ul className="text-sm">
          <li><strong>Device bid adjustments</strong> — Pove&#x107;ajte za best performing device, smanjite za worst</li>
          <li><strong>Mobile-friendly landing page</strong> — Ako mobile LP nije optimizovan, smanjite mobile bid dok ne popravite UX</li>
        </ul>
      </div>

      <hr />

      <h2>Kategorija 4: Klju&#x10D;ne re&#x10D;i i search terms</h2>
      <p>
        Keywords nisu ono &#x161;to vi unesete u nalog — to su <strong>search terms</strong> koje ljudi zaista kucaju. Svaki Google Ads audit mora detaljno analizirati Search Terms Report i identifikovati &#x161;ta zapravo trigger-uje va&#x161;e oglase i kuda odlazi budžet.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Search Terms Report pregledan (30-90 dana)</strong> <span className="text-gray-500">— Top 50-100 search terms po tro&#x161;ku: da li su relevantni i konvertuju li?</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Negative keywords lista postoji i odr&#x17E;ava se</strong> <span className="text-gray-500">— Lista negatives mora postojati na campaign i account nivou, redovno update (mesečno minimum)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Nema irelevantnih search terms sa zna&#x10D;ajnim spend-om</strong> <span className="text-gray-500">— Ako search term potro&#x161;io €50+ i nije relevantan, to je direktan wasted spend</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Quality Score ve&#x107;ina keywords 6+</strong> <span className="text-gray-500">— QS ispod 5 zna&#x10D;i da pla&#x107;ate premium za klikove (i&#x161;&#x10D;itajte kroz top 20 keywords po impressions)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Keywords bez konverzija (&gt;100 klikova) evaluirani</strong> <span className="text-gray-500">— Pauzirajte ili drastično smanjite bid za keywords koji tro&#x161;e budžet bez rezultata</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Duplicate keywords uklonjeni</strong> <span className="text-gray-500">— Isti keyword u vi&#x161;e Ad Groups/kampanja kreira internal competition i lo&#x161;iji performance</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div><strong>Match type strategija jasna</strong> <span className="text-gray-500">— Broad za discovery (+ agresivni negatives), Phrase za kontrolu, Exact za top performers</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
            <div><strong>High-intent keywords dobijaju ve&#x107;i bid</strong> <span className="text-gray-500">— {`"kupiti"`}, {`"cena"`}, {`"odmah"`} treba da imaju vi&#x161;i bid od informational keywords</span></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Red flag: Search Terms Report nikad pregledan, nema negative keywords liste, Quality Score ispod 5 za ve&#x107;inu keywords-a, irelevantni search terms tro&#x161;e 20%+ budžeta.</p>
      </div>

      <p>
        Detaljan vodič o keywords research-u, match types, i Quality Score optimizaciji: <Link href="/blog/kljucne-reci-vodic">Klju&#x10D;ne re&#x10D;i za Google Ads</Link>. Za negative keywords strategiju: <Link href="/blog/negativne-kljucne-reci">Negativne klju&#x10D;ne re&#x10D;i</Link>.
      </p>

      <hr />

      <h2>Kategorija 5: Oglasi i ekstenzije</h2>
      <p>
        Oglasi su ono &#x161;to potencijalni kupci zapravo vide, ali u praksi vidim da preko 50% naloga ima {`"Poor"`} Ad Strength i minimalan broj ekstenzija. To je propuštena prilika — bolji oglasi = viši CTR = niži CPC + vi&#x161;e konverzija.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">RSA kvalitet</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Svaka Ad Group mora imati minimum 1 Responsive Search Ad sa 10-15 headlines i 4 descriptions.</p>
        <ul className="text-sm">
          <li><strong>Ad Strength je {`"Good"`} ili {`"Excellent"`}</strong> — Nikad {`"Poor"`} (Google bukvalno govori da je oglas lo&#x161;)</li>
          <li><strong>Headlines sadrže klju&#x10D;ne re&#x10D;i</strong> — Minimum 3-4 headline varijacije sa primary keywords iz te Ad Group-e</li>
          <li><strong>CTA prisutan u 2-3 headlines</strong> — {`"Naručite odmah"`}, {`"Besplatna dostava"`}, {`"Poručite danas"`}</li>
          <li><strong>USP jasan i konkretan</strong> — &#x160;ta vas razlikuje od konkurencije? (brojevi, garancije, unique benefits)</li>
          <li><strong>Pinning minimalan</strong> — Ostavite Google-u slobodu da testira kombinacije (pinujte samo legal/brand requirements)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ekstenzije (sitelinks, callouts...)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Extensions pove&#x107;avaju CTR za 10-15% i zauzimaju vi&#x161;e prostora na SERP-u. Svaka kampanja mora imati:</p>
        <ul className="text-sm">
          <li><strong>Sitelinks (min 4)</strong> — Linkovi ka razli&#x10D;itim stranicama (categories, about, contact), svaki relevantan za tu kampanju</li>
          <li><strong>Callouts (min 4)</strong> — Kratke bullet point prednosti: {`"Besplatna dostava"`}, {`"24/7 podrška"`}, {`"30 dana garancije"`}</li>
          <li><strong>Structured Snippets</strong> — Liste kategorija, proizvoda, ili usluga (konkretno, ne generički)</li>
          <li><strong>Call extensions</strong> (ako relevantno) — Phone broj direktno u oglasu za high-intent queries</li>
          <li><strong>Location extensions</strong> (lokalni biznisi) — Adresa + mapa pin za lokalne searches</li>
          <li><strong>Price extensions</strong> (eCommerce) — Prikazuje cene direktno u oglasu (eliminišu low-budget klikove)</li>
        </ul>
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Ad Strength {`"Poor"`}, samo 3-5 headlines, generi&#x10D;ki copy koji ne razlikuje od konkurencije</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Dopunite RSA do 10-15 headlines (dodajte varijacije sa keywords, brojevi, CTA, USP), iskoristite svih 4 descriptions, uklonite vi&#x161;ak pinning-a da Google testira kombinacije.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Nema extensions, ili svi sitelinks vode na istu homepage</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Kreirajte 4 sitelinks-a ka razli&#x10D;itim stranicama (product categories, best sellers, about, contact), 4 callouts-a sa konkretnim benefitima (ne generi&#x10D;ki {`"kvalitet"`}), structured snippets sa product/service listama.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2>Kategorija 6: Publike i remarketing</h2>
      <p>
        Remarketing je najlak&#x161;i win u Google Ads-u — ljudi koji su već posetili sajt konvertuju 3-5x bolje od cold traffic-a. Ako Google Ads audit otkrije da nalog nema remarketing liste ili converter exclusions, to je ogromna propuštena prilika.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Remarketing liste postoje i imaju dovoljno users-a</strong> <span className="text-gray-500">— Minimum: All Visitors (30-90 dana), Cart Abandoners, Converters (lista mora imati 1000+ users za Search)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Liste segmentirane logi&#x10D;no</strong> <span className="text-gray-500">— Ne samo {`"All visitors"`} — kreirajte liste po product category-u, viewing time (2+ min), high-value pages</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Converters isklju&#x10D;eni iz prospecting-a</strong> <span className="text-gray-500">— Exclude lista converters (30-90 dana) iz Search kampanja da ne pla&#x107;ate branded searches od ljudi koji su već kupili</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>In-market audiences testirani (Observation mode)</strong> <span className="text-gray-500">— Google audience segments mogu pomo&#x107;i u cold prospecting-u, ali prvo Observation mode (ne Targeting)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Audience performance analiziran</strong> <span className="text-gray-500">— Segment by audience report pokazuje koji segmenti konvertuju najbolje (bid adjustments based on data)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Dedicated remarketing kampanje</strong> <span className="text-gray-500">— Posebne kampanje za remarketing sa vi&#x161;im bid-om i tailored copy (3-5x bolji CVR = mo&#x17E;ete priuštiti vi&#x161;i CPC)</span></div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Preporuka</p>
        <p className="text-blue-800 text-sm mb-0">Kreirajte dedicated remarketing kampanje sa vi&#x161;im bid-om (+50-100% vs cold traffic) i targeted ad copy koji referen&#x10D;ira njihovu prethodnu posetu. Remarketing ima 3-5x bolji conversion rate, pa možete priuštiti vi&#x161;i CPC i dalje biti profitabilni.</p>
      </div>

      <p>
        Detaljan vodič o remarketing strategijama i audience segmentation-u: <Link href="/blog/remarketing-vodic">Remarketing vodič za Google Ads</Link>.
      </p>

      <hr />

      <h2>Kategorija 7: Bidding strategija</h2>
      <p>
        Smart Bidding je moćan alat, ali samo ako imate dovoljno konverzija da algoritam može validno učiti. U praksi vidim da preko 40% naloga koristi Smart Bidding sa &lt;10 konverzija mesečno — to ne može funkcionisati.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Strategija odgovara cilju i fazi</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Preporu&#x10D;ujem:</p>
        <ul className="text-sm">
          <li><strong>Maximize Clicks ili Manual CPC</strong> — Nova kampanja bez konverzija, fokus na traffic gathering i data collection</li>
          <li><strong>Maximize Conversions</strong> — Kada imate 15-30 konverzija mesečno, ali još nemate jasan target CPA</li>
          <li><strong>Target CPA</strong> — Kada imate 30+ konverzija mesečno i znate željeni target CPA (baseline + 10-20% improvement)</li>
          <li><strong>Target ROAS</strong> — eCommerce sa preciznim conversion value tracking-om i 50+ konverzija mesečno</li>
          <li><strong>Maximize Conversion Value</strong> — eCommerce kada nemate target ROAS ali želite da maksimizirate revenue</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dovoljno konverzija za Smart Bidding</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Google preporu&#x10D;uje 15+ konverzija u poslednjih 30 dana za Maximize Conversions, 30+ za Target CPA, 50+ za Target ROAS. Ispod toga, algoritam nema dovoljno signal-a za validnu optimizaciju.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Target CPA/ROAS realan i dostiživm</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Target ne treba da bude 50% bolji od trenutnog performance-a. Preporu&#x10D;ujem da target bude 10-20% improvement od baseline-a, pa ga postepeno tighten-ujete tokom nekoliko nedelja.</p>
        <ul className="text-sm">
          <li><strong>Primer:</strong> Ako je trenutni CPA €40, ne stavljajte target €20 odmah — krenite sa €35, pa posle 2 nedelje €32, itd.</li>
          <li><strong>Learning period</strong> — Sačekajte 7-14 dana posle svake promene pre nego &#x161;to donesite zaključke</li>
        </ul>
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Smart Bidding sa &lt;10 konverzija mesečno, ili nerealan target (npr. target CPA €10 kada je trenutni €50)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Vratite se na Manual CPC ili Maximize Conversions dok ne sakupite vi&#x161;e konverzija (30+ mesečno). Ako već koristite Smart Bidding, promenite target da bude realisti&#x10D;niji (10-20% improvement, ne 50%+).</p>
          </div>
        </div>
      </div>

      <hr />

      <h2>Kategorija 8: Budžet i alokacija</h2>
      <p>
        Budget allocation je jedna od naj&#x10D;eš&#x107;ih gre&#x161;aka u Google Ads audit-ima — najbolje kampanje su {`"Limited by budget"`}, dok lo&#x161;e kampanje tro&#x161;e punim budžetom. To je kao da najboljem prodavcu date najmanje resursa.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Best performing campaigns NISU limited by budget</strong> <span className="text-gray-500">— Ako je kampanja profitabilna (CPA &lt; target, ROAS &gt; target), pove&#x107;ajte budget +30-50%</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Impression Share Lost (Budget) &lt;20%</strong> <span className="text-gray-500">— Ako gubite 30%+ impression share zbog budgeta u profitabilnoj kampanji, realokujte vi&#x161;e budžeta</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Budget reallokovan ka winning campaigns</strong> <span className="text-gray-500">— Ako kampanja A ima CPA €20 i B ima CPA €50, prebacite 30-50% budžeta iz B u A</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Sezonalnost planirana</strong> <span className="text-gray-500">— Pove&#x107;ajte budget u high season (Q4, Black Friday, seasonal peaks), smanjite u low season</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Shared budgets evaluirani</strong> <span className="text-gray-500">— Shared budgets mogu kanibalizovati performanse: best kampanja ne dobija dovoljno, worst dobija previše</span></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Red flag: Best performing campaign limited by budget, &gt;30% impression share lost to budget, ili lo&#x161;e kampanje troše 50%+ total budgeta.</p>
      </div>

      <p>
        Ako ne znate koliko budžeta treba aloćirati po kampanji ili industriji, pro&#x10D;itajte: <Link href="/blog/koliko-kosta-google-ads">Koliko ko&#x161;ta Google Ads</Link>.
      </p>

      <hr />

      <h2>Brzi Google Ads audit za 30 minuta</h2>
      <p>
        Ako nemate 2-4 sata za full Google Ads audit, evo quick check-a koji pokriva 80% najkriti&#x10D;nijih stvari. Preporu&#x10D;ujem da radite ovaj brzi audit mesečno između kvartalnih deep audit-a.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Search Terms Report (5 min)</strong> <span className="text-gray-500">— Top 30 search terms po tro&#x161;ku (30 dana): da li su relevantni? Dodajte negatives za sve irelevantne sa €10+ spend-om</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Budget allocation (3 min)</strong> <span className="text-gray-500">— Da li je profitabilna kampanja {`"Limited by budget"`}? Realokujte budžet iz lo&#x161;ih kampanja</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Conversion tracking check (5 min)</strong> <span className="text-gray-500">— Da li tracking radi? Uporedite Google Ads konverzije sa GA4/CRM-om (max 10-15% razlike ok)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Top keywords performance (5 min)</strong> <span className="text-gray-500">— Top 15 keywords po tro&#x161;ku: QS ok (6+)? CPA prihvatljiv? Pauzirajte keywords sa CPA 2x+ target i 50+ klikova</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Ad performance (4 min)</strong> <span className="text-gray-500">— Koje Ad Groups imaju CTR &lt;2% (Search) ili &lt;0.5% (Display)? Dopunite RSA sa vi&#x161;e headlines ili create new ads</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Extensions active (2 min)</strong> <span className="text-gray-500">— Da li su svi extensions (sitelinks, callouts, structured snippets) aktivni i serving? Dodajte ako fale</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div><strong>Audience lists &amp; exclusions (3 min)</strong> <span className="text-gray-500">— Da li remarketing liste imaju 1000+ users? Da li converters exclusion funkcioniše? Check segment report</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
            <div><strong>Campaign settings quick scan (3 min)</strong> <span className="text-gray-500">— Location targeting correct? Networks ok (Display OFF u Search)? Schedule adjustments aktivni?</span></div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Pro tip</p>
        <p className="text-yellow-800 text-sm mb-0">Napravite Google Sheet sa scoring-om za svaku kategoriju (1-5 skala). Kada radite mese&#x10D;ni quick audit, samo update-ujete scoring i pratite trend — da li ide naviše (optimizacije rade) ili naniže (novi problemi).</p>
      </div>

      <hr />

      <h2>Sistem bodovanja za Google Ads audit</h2>
      <p>
        Preporu&#x10D;ujem da svaku kategoriju bodujete od 1 do 5, i da pratite overall account health score tokom vremena. To pomaže da prioriziujete akcije, merite napredak, i opravdate investiciju u optimizaciju.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Score</th>
              <th className="py-3 px-4 font-heading font-semibold">Status</th>
              <th className="py-3 px-4 font-heading font-semibold">Opis</th>
              <th className="py-3 px-4 font-heading font-semibold">Akcija</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">5</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Excellent</span></td>
              <td className="py-3 px-4">Svi checkpoint-i pokriveni, best practices implementirani</td>
              <td className="py-3 px-4">Održavajte, monitorirajte mesečno</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">4</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Good</span></td>
              <td className="py-3 px-4">Većina pokrivena, sitna pobolj&#x161;anja mogu&#x107;a</td>
              <td className="py-3 px-4">Minor tweaks, low priority (schedule za sledećih mesec-dva)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">3</td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Average</span></td>
              <td className="py-3 px-4">Osnovno pokriveno, ali fale važne optimizacije</td>
              <td className="py-3 px-4">Improvement needed, planirajte 1-2 nedelje za fixes</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">2</td>
              <td className="py-3 px-4"><span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded">Poor</span></td>
              <td className="py-3 px-4">Veliki propusti, wasted spend visok (15-25%+)</td>
              <td className="py-3 px-4">Priority fix, zakažite odmah (ove nedelje)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">1</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Critical</span></td>
              <td className="py-3 px-4">Fundamentalno ne funkcioniše, ozbiljni problemi</td>
              <td className="py-3 px-4">Hitna akcija danas, možda pauzirajte kampanje dok ne popravite</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <strong>Overall Account Health Score</strong> se ra&#x10D;una kao prosek svih 10 kategorija. Ako je overall score 3.5 ili vi&#x161;e, nalog je u solidnom stanju. Ispod 3.0 zna&#x10D;i da postoje prioritetni problemi koji tro&#x161;e budžet neefikasno.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Moje iskustvo sa scoring-om</p>
        <p className="text-blue-800 text-sm mb-0">Kada preuzmem novi nalog na upravljanje, prose&#x10D;an score je 2.5-3.0 (basic setup ok, ali mnogo propusta). Posle prvog meseca optimizacija, score ide na 3.5-4.0. Score 4.5+ je te&#x161;ko održiv dugoro&#x10D;no jer zahteva konstantan proactive rad i testuvarje.</p>
      </div>

      <hr />

      <h2>Naj&#x10D;e&#x161;&#x107;e gre&#x161;ke pri Google Ads audit-u</h2>
      <p>
        Evo naj&#x10D;eš&#x107;ih gre&#x161;aka koje vidim kada ljudi rade Google Ads audit sami, ili kada outsource-uju neiskusnoj agenciji ili freelancer-u.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #1</p>
          <p className="font-semibold mb-2">Fokusiranje samo na surface-level metrike (CTR, CPC) bez gledanja konverzija i profitabilnosti</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Uvek audit-ujte CPA i ROAS (ili conversion rate ako nemate revenue tracking). CTR i CPC su sredstvo, ne cilj — možete imati visok CTR i lo&#x161; ROI.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #2</p>
          <p className="font-semibold mb-2">Preskakanje Search Terms Report-a — najvažniji deo audit-a koji otkriva wasted spend</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Search Terms Report MORA biti deo svakog Google Ads audit-a. Filterirajte top 50 po tro&#x161;ku (30 dana) i proverite da li su relevantni. Dodajte negatives za sve irelevantne sa €10+ spend-om.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #3</p>
          <p className="font-semibold mb-2">Promena 10 stvari odjednom pa ne znate &#x161;ta je uticalo na rezultat</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Posle audit-a, prioritizujte top 3-5 akcija i radite ih postepeno (1-2 nedelje između change-ova, sa&#x10D;ekajte learning period). Tako možete meriti impact svake optimizacije pojedina&#x10D;no.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #4</p>
          <p className="font-semibold mb-2">Gledanje samo poslednjih 7 dana podataka (suvše kratko za validne zaklju&#x10D;ke)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Audit-ujte poslednjih 30-90 dana podataka. 7 dana je previše kratko (vikend vs radni dani distorzija, sezonalnost, nedovoljno konverzija za statisti&#x10D;ku zna&#x10D;ajnost).</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #5</p>
          <p className="font-semibold mb-2">Pauziranje kampanja/keywords-a sa {`"lošim"`} performance-om bez dijagnostike ZA&#x160;TO su lo&#x161;i</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Pre nego &#x161;to pauzirate, dijagnostikujte: Da li je problem keyword (lo&#x161; intent), ad copy (nizak CTR), landing page (lo&#x161; CVR), ili targeting (pogre&#x161;na publika)? Možda je fix jednostavan — nova LP ili bolji ad copy.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #6</p>
          <p className="font-semibold mb-2">Ignorisanje benchmark-ova — ne znate da li je va&#x161; CPA €50 dobar ili lo&#x161;</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Uporedite metrike sa industry benchmarks (Google objavljuje prose&#x10D;ne CPC/CVR po industrijama). Takođe uporedite performance sa va&#x161;im baseline-om (pre 3-6 meseci) da vidite trend.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2>Naj&#x10D;e&#x161;&#x107;e postavljena pitanja o Google Ads audit-u</h2>
      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko često treba raditi Google Ads audit?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Preporu&#x10D;ujem <strong>kvartalni deep audit</strong> (2-4 sata, svih 10 kategorija + 80+ checkpoint-a) + <strong>mese&#x10D;ni quick audit</strong> (30 min, 8 priority checkpoint-a). Takođe radite audit odmah ako: (1) performance naglo padne, (2) preuzimate nalog od druge agencije, (3) pokrećete nove proizvode/usluge, ili (4) menjate biznis model.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko ko&#x161;ta profesionalan Google Ads audit?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-3">U praksi vidim opseg od €200 do €1500+ u zavisnosti od veli&#x10D;ine naloga, broja kampanja, i dubine audit-a.</p>
            <ul className="text-sm mb-0">
              <li><strong>Basic audit</strong> (mali nalog, 2-3 kampanje, 1 tržište): €200-350</li>
              <li><strong>Standard audit</strong> (srednji nalog, 5-10 kampanja, 1-2 tržišta): €400-700</li>
              <li><strong>Deep audit</strong> (veliki nalog, 10+ kampanja, multi-market, kompletna dijagnostika): €800-1500+</li>
            </ul>
            <p className="mt-3 mb-0">Ako vam je mese&#x10D;ni ad spend €5K+, profesionalan Google Ads audit se isplati jer u proseku otkriva 15-25% wasted spend-a koji se može eliminisati u prvom mesecu.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Mogu li sam da radim Google Ads audit ili mi treba specialist?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Možete sami ako pratite checklist iz ovog vodi&#x10D;a i imate tehni&#x10D;ko razumevanje Google Ads-a. Međutim, specialist ili agencija &#x107;e brže identifikovati probleme jer vide 10-20+ naloga mese&#x10D;no i znaju &#x161;ta je {`"normal"`} vs {`"red flag"`}. Takođe, spoljni pogled elimini&#x161;e confirmation bias. Ako je ad spend €3K+ mese&#x10D;no, preporu&#x10D;ujem da bar jednom godi&#x161;nje platite profesionalan Google Ads audit za second opinion.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            &#x160;ta je naj&#x10D;e&#x161;&#x107;i problem koji Google Ads audit otkriva?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Top 3 problema su: (1) <strong>Irelevantni search terms</strong> — tro&#x161;e 15-30% budžeta jer nema negative keywords liste ili se ne odr&#x17E;ava, (2) <strong>Conversion tracking ne funkcioniše ta&#x10D;no</strong> — ne radi ili bele&#x17E;i duplirane konverzije, pa algoritam donosi lo&#x161;e odluke, (3) <strong>Lo&#x161;a budget alokacija</strong> — lo&#x161;e kampanje tro&#x161;e previ&#x161;e, dobre kampanje limited by budget.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko vremena treba da prođe između audit-a i vidljivih rezultata?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0"><strong>Quick wins</strong> (dodavanje negative keywords, isklju&#x10D;ivanje Display Network-a iz Search kampanja, budget reallocation) daju rezultate za 7-14 dana. <strong>Srednje optimizacije</strong> (ad copy improvement, bidding adjustments) za 2-4 nedelje. <strong>Dublje promene</strong> (restructuring kampanja, nova bidding strategija) mogu zahtevati 4-8 nedelja. Smart Bidding uvek ima 7-14 dana learning period posle svake promene.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            &#x160;ta posle Google Ads audit-a — ko implementira optimizacije?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Zavisi od dogovora i va&#x161;ih resursa. Neki specialist-i daju samo audit report sa priori zovanim preporukama (DIY implementation). Drugi nude audit + implementation kao package. Tre&#x107;i nude audit + ongoing management (mese&#x10D;no upravljanje). Preporu&#x10D;ujem da implementation radi ista osoba koja je radila audit jer poznaje kontekst, prioritete, i razloge iza svake preporuke.</p>
          </div>
        </details>
      </div>

      <hr />

      <h2>Zaklju&#x10D;ak</h2>
      <p>
        Google Ads audit nije one-time checklist — to je sistematski proces koji treba da postane deo va&#x161;eg redovnog workflow-a. Moje iskustvo je da nalozi koji se redovno audit-uju (kvartalni deep audit + mese&#x10D;ni quick check) imaju 20-30% bolje rezultate od naloga koji se {`"set and forget"`}.
      </p>

      <p>
        Ovaj vodič pokriva 80+ checkpoint-a u 10 kategorija koje li&#x10D;no koristim na 50+ naloga u poslednjih nekoliko godina. Nije sve relevantno za svaki biznis — npr. ako nemate eCommerce, preskočite conversion value tracking. Ali osnove (conversion tracking, search terms, budget allocation, ad quality) su univerzalne za sve industrije.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Kada preuzmem novi nalog na upravljanje, prva stvar je uvek detaljan Google Ads audit. To mi daje jasnu sliku gde su problemi, gde su quick wins, i gde su dugoro&#x10D;ne prilike za rast. Bez audit-a, optimizacija je improvizacija i bacanje para.</p>
      </div>

      <p>
        Ako nemate vremena ili iskustva da radite detaljan Google Ads audit sami, preporu&#x10D;ujem da kontaktirate specialist-a. Investicija od €300-700 u profesionalan audit se višestruko isplati ako otkrijete 15-25% wasted spend-a ili propuštenih prilika za skaliranje.
      </p>

      <p>
        Za nastavak optimizacije posle audit-a, pro&#x10D;itajte: <Link href="/blog/google-ads-optimizacija">Google Ads optimizacija vodi&#x10D;</Link> i <Link href="/blog/google-ads-greske">Naj&#x10D;eš&#x107;e Google Ads gre&#x161;ke</Link>.
      </p>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Potreban vam je profesionalan Google Ads audit?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">Radim audit-e za naloge svih veli&#x10D;ina — od startupa do enterprise klijenata. Dobijate 80+ checkpoint audit report + prioritizovan action plan + implementation preporuke + follow-up консультацију.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Zaka&#x17E;ite besplatnu konsultaciju</Link>
      </div>

      <hr />

      <h2>Povezani vodi&#x10D;i</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/blog/conversion-tracking-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking vodi&#x10D;</p>
          <p className="text-xs text-gray-500 mb-0">Kako postaviti pra&#x107;enje konverzija i troubleshoot-ovati probleme</p>
        </Link>

        <Link href="/blog/quality-score-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Quality Score vodi&#x10D;</p>
          <p className="text-xs text-gray-500 mb-0">&#x160;ta je Quality Score i kako ga pobolj&#x161;ati za niži CPC</p>
        </Link>

        <Link href="/blog/kljucne-reci-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Klju&#x10D;ne re&#x10D;i vodi&#x10D;</p>
          <p className="text-xs text-gray-500 mb-0">Keyword research, match types, i optimizacija klju&#x10D;nih re&#x10D;i</p>
        </Link>

        <Link href="/blog/negativne-kljucne-reci" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negativne klju&#x10D;ne re&#x10D;i</p>
          <p className="text-xs text-gray-500 mb-0">Kako identifikovati i dodati negative keywords za eliminiše wasted spend</p>
        </Link>

        <Link href="/blog/google-ads-optimizacija" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads optimizacija</p>
          <p className="text-xs text-gray-500 mb-0">Ongoing optimizacija posle audit-a — &#x161;ta raditi mese&#x10D;no i weekly</p>
        </Link>

        <Link href="/blog/koliko-kosta-google-ads" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Koliko ko&#x161;ta Google Ads</p>
          <p className="text-xs text-gray-500 mb-0">Budget planning i CPC benchmark-ovi po industrijama</p>
        </Link>

        <Link href="/blog/remarketing-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing vodi&#x10D;</p>
          <p className="text-xs text-gray-500 mb-0">Kako postaviti remarketing liste i strategije za bolje konverzije</p>
        </Link>

        <Link href="/blog/google-ads-greske" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Naj&#x10D;eš&#x107;e Google Ads gre&#x161;ke</p>
          <p className="text-xs text-gray-500 mb-0">20+ naj&#x10D;e&#x161;&#x107;ih gre&#x161;aka i kako ih izbeći</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        <p className="mb-1"><strong>Autor:</strong> Slobodan Jelisavac, Google Ads Specialist</p>
        <p className="mb-0">Poslednje ažuriranje: Februar 2026</p>
      </div>
    </>
  );
}

function KljucneReciVodicPost() {
  return (
    <>
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Ključne reči određuju ko vidi vaše oglase, koliko plaćate i da li ćete ostvariti profit. Pogrešan izbor ključnih reči je razlog #1 zašto Google Ads kampanje ne donose rezultate.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">4</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">tipa po intent-u</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">match type-a</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">40%+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">budžeta na pogrešne reči</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">5</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">koraka istraživanja</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Zašto su ključne reči temelj ── */}
      <h2>Zašto su ključne reči temelj Google Ads kampanja</h2>
      <p>
        Kroz upravljanje 20+ Google Ads naloga, jedno se konstantno potvrđuje — kvalitet ključnih reči direktno određuje uspeh kampanje. Možete imati savršen oglas, odličan landing page i neograničen budžet, ali ako targetirate pogrešne ključne reči, rezultata neće biti.
      </p>
      <p>
        Ključne reči u Google Ads-u su reči i fraze na koje targetirate svoje oglase. Kada korisnik ukuca pretragu koja odgovara vašoj ključnoj reči, vaš oglas može da se prikaže. Zvuči jednostavno, ali tu počinje kompleksnost — izbor pravih reči zahteva razumevanje vaših kupaca, njihovih namera i ponašanja.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Moje iskustvo: 80% neuspešnih kampanja ima isti koren problema — pogrešne ključne reči ili loša organizacija.
        </p>
      </div>

      <p>Četiri stvari koje ključne reči direktno određuju:</p>
      <ul>
        <li><strong>Ko vidi vaš oglas</strong> — pogrešne reči = pogrešna publika</li>
        <li><strong>Koliko plaćate po kliku</strong> — popularniji termini koštaju više</li>
        <li><strong>Relevantnost oglasa</strong> — ključne reči moraju odgovarati oglasu i landing page-u</li>
        <li><strong>Quality Score</strong> — direktan uticaj na Ad Rank i troškove</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Detaljan vodič</p>
        <p className="text-blue-800 text-sm mb-0">
          Ako vas zanima kako Quality Score utiče na cenu klikova, pogledajte <Link href="/blog/quality-score-vodic" className="underline font-semibold">vodič za Quality Score</Link>.
        </p>
      </div>

      <hr />

      {/* ── Ključna reč vs Search Term ── */}
      <h2>Ključna reč vs Search Term — razlika koja menja sve</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Vi kontrolišete</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Ključna reč (Keyword)</h3>
          <p className="text-sm text-gray-600 mb-0">Reč ili fraza koju VI dodajete u kampanju i na koju targetirate oglase.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Korisnik unosi</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Search Term (Pretraga)</h3>
          <p className="text-sm text-gray-600 mb-0">Ono što korisnik zapravo ukuca u Google pretragu. Može se razlikovati od vaše ključne reči.</p>
        </div>
      </div>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">Primer iz prakse</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Vaša ključna reč:</strong> <span className="text-gray-500">— {`"ženske patike"`}</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Search terms koji triggeruju oglas:</strong> <span className="text-gray-500">— {`"ženske patike nike"`}, {`"patike za žene bele"`}, {`"gde kupiti ženske patike beograd"`}</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">!</span>
            <div><strong>Ključni zaključak:</strong> <span className="text-gray-500">— redovno pregledajte Search Terms Report da vidite šta korisnici zapravo traže</span></div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Razumevanje razlike između ključne reči i search term-a je osnova za optimizaciju. Ako ne pregledate Search Terms Report nedeljno, trosite budžet na pretrage koje nisu relevantne.
        </p>
      </div>

      <hr />

      {/* ── Tipovi ključnih reči po intent-u ── */}
      <h2>Tipovi ključnih reči po nameri korisnika</h2>
      <p>
        Nije svaka ključna reč jednaka. Namera (intent) korisnika određuje koliko je vredna za vaš biznis. Preporučujem da svaku ključnu reč ocenite prema ova 4 tipa pre nego što je dodate u kampanju.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tip 1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Navigacione (Branded)</h3>
          <p className="text-sm text-gray-600 mb-2">Korisnik traži specifičan brand ili sajt.</p>
          <p className="text-sm text-gray-600 mb-1"><strong>Primeri:</strong> {`"nike srbija"`}, {`"gigatron"`}</p>
          <p className="text-sm text-gray-600 mb-0"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Visok CTR</span> <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Nizak CPC</span></p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tip 2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Informacione</h3>
          <p className="text-sm text-gray-600 mb-2">Korisnik traži informacije, ne želi (još) da kupi.</p>
          <p className="text-sm text-gray-600 mb-1"><strong>Primeri:</strong> {`"kako odabrati CRM"`}, {`"šta je performance max"`}</p>
          <p className="text-sm text-gray-600 mb-0"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Nizak CPC</span> <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded">Niža konverzija</span></p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tip 3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Komercijalne (Istraživačke)</h3>
          <p className="text-sm text-gray-600 mb-2">Korisnik istražuje opcije pre kupovine.</p>
          <p className="text-sm text-gray-600 mb-1"><strong>Primeri:</strong> {`"najbolji CRM za mala preduzeća"`}, {`"hubspot vs salesforce"`}</p>
          <p className="text-sm text-gray-600 mb-0"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Srednji CPC</span> <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Dobra konverzija</span></p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tip 4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Transakcione</h3>
          <p className="text-sm text-gray-600 mb-2">Korisnik je spreman da kupi ili konvertuje.</p>
          <p className="text-sm text-gray-600 mb-1"><strong>Primeri:</strong> {`"kupi CRM softver"`}, {`"CRM cena"`}, {`"CRM besplatan trial"`}</p>
          <p className="text-sm text-gray-600 mb-0"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Viši CPC</span> <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Najviša konverzija</span></p>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-3">Intent funnel</p>
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <p className="text-yellow-400 font-bold mb-1">Awareness</p>
            <p className="text-slate-400 mb-1">Informacione</p>
            <p className="text-slate-500 text-xs mb-0">Nizak CPC · Niža konv.</p>
          </div>
          <div>
            <p className="text-yellow-400 font-bold mb-1">Consideration</p>
            <p className="text-slate-400 mb-1">Komercijalne</p>
            <p className="text-slate-500 text-xs mb-0">Srednji CPC · Srednja konv.</p>
          </div>
          <div>
            <p className="text-yellow-400 font-bold mb-1">Decision</p>
            <p className="text-slate-400 mb-1">Transakcione</p>
            <p className="text-slate-500 text-xs mb-0">Viši CPC · Najviša konv.</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Istraživanje ključnih reči ── */}
      <h2>Istraživanje ključnih reči korak po korak</h2>
      <p>
        Dobar keyword research je investicija koja se višestruko vraća. Preporučujem ovaj petostepeni proces koji koristim za sve nove kampanje.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Brainstorming</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Počnite sa pitanjima koja otkrivaju kako vaši kupci razmišljaju.</p>
        <ul className="text-sm">
          <li>Kako bi kupci opisali vaš proizvod/uslugu?</li>
          <li>Koje probleme rešavate?</li>
          <li>Koje alternative postoje na tržištu?</li>
          <li>Koji su sinonimi i varijacije naziva?</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Google Keyword Planner</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Besplatan Google-ov alat za pronalaženje novih ideja i proveru volume-a.</p>
        <ul className="text-sm">
          <li><strong>Discover New Keywords</strong> — unesite seed keywords ili URL konkurenta</li>
          <li><strong>Get Search Volume</strong> — proverite podatke za postojeću listu</li>
          <li>Filtrirajte po lokaciji (Srbija ima drugačiji volume od US)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Analiza konkurencije</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Pogledajte na koje reči se konkurenti prikazuju.</p>
        <ul className="text-sm">
          <li><strong>Plaćeni alati:</strong> SEMrush, Ahrefs, SpyFu</li>
          <li><strong>Besplatno:</strong> Google pretraga (pogledajte oglase konkurenata), autocomplete, {`"Searches related to..."`}</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Search Terms Mining</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Ako već imate aktivne kampanje, koristite podatke koje već imate.</p>
        <ul className="text-sm">
          <li>Keywords → Search Terms → analizirajte šta ljudi zapravo traže</li>
          <li>Dobre pretrage dodajte kao nove ključne reči</li>
          <li>Irelevantne dodajte kao <Link href="/blog/negativne-kljucne-reci" className="underline">negativne ključne reči</Link></li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Jezik vaših kupaca</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Cilj je razumeti kako KUPCI govore, ne kako vi mislite da govore.</p>
        <ul className="text-sm">
          <li>Reviews proizvoda i usluga</li>
          <li>Support tiketi i najčešća pitanja</li>
          <li>Social media komentari</li>
          <li>Razgovori sa sales timom</li>
          <li>Forumi u vašoj industriji</li>
        </ul>
      </div>

      <hr />

      {/* ── Keyword Planner interpretacija ── */}
      <h2>Tumačenje rezultata iz Keyword Planner-a</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Metrika</th>
              <th className="py-3 px-4 font-heading font-semibold">Šta znači</th>
              <th className="py-3 px-4 font-heading font-semibold">Kako koristiti</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Avg. monthly searches</td>
              <td className="py-3 px-4">Koliko ljudi traži mesečno</td>
              <td className="py-3 px-4">Balans volume vs competition</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Competition</td>
              <td className="py-3 px-4">Koliko oglašivača se takmiči</td>
              <td className="py-3 px-4">High = skuplji ali vredniji</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Top of page bid (low)</td>
              <td className="py-3 px-4">CPC za donji deo prve stranice</td>
              <td className="py-3 px-4">Minimum za vidljivost</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Top of page bid (high)</td>
              <td className="py-3 px-4">CPC za sam vrh rezultata</td>
              <td className="py-3 px-4">Premium pozicije</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Pro tip za Keyword Planner</p>
        <p className="text-blue-800 text-sm mb-0">
          Keyword Planner često potcenjuje volume za long-tail ključne reči. Kombinujte sa autocomplete i Search Terms podacima za kompletnu sliku. Takođe, uvek downloadujte rezultate u Excel za lakšu analizu.
        </p>
      </div>

      <hr />

      {/* ── Selekcija pravih ključnih reči ── */}
      <h2>Selekcija pravih ključnih reči</h2>
      <p>
        Imati listu od 500 ključnih reči ne znači ništa ako nisu prave. Koristim ovaj framework za evaluaciju svake ključne reči pre dodavanja u kampanju.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Faktor</th>
              <th className="py-3 px-4 font-heading font-semibold">Pitanje za evaluaciju</th>
              <th className="py-3 px-4 font-heading font-semibold">Idealno</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Relevantnost</td>
              <td className="py-3 px-4">Da li odgovara vašoj ponudi?</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Visoka</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Intent</td>
              <td className="py-3 px-4">Da li pokazuje kupovnu nameru?</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Komercijalni/Transakcioni</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Volume</td>
              <td className="py-3 px-4">Da li ima dovoljno pretraga?</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">100+ mesečno</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Competition</td>
              <td className="py-3 px-4">Možete li se takmičiti?</td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Zavisi od budžeta</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">CPC</td>
              <td className="py-3 px-4">Možete li priuštiti klik?</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Unutar target CPA</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Pravilo: Izračunajte maksimalan CPC pre dodavanja</p>
        <p className="text-sm text-yellow-900 mb-2">Max CPC = Target CPA × Expected Conversion Rate</p>
        <p className="text-sm text-yellow-900 mb-0">
          <strong>Primer:</strong> Target CPA €30, očekivana konverzija 3% → Max CPC = €30 × 0.03 = €0.90. Ako Keyword Planner pokazuje CPC €2.00, a vaš max je €0.90 — ta ključna reč možda nije isplativa za vaš biznis model.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-green-500 rounded-xl p-5">
          <p className="font-heading font-bold text-green-700 mb-2">Prioritetne ključne reči</p>
          <ul className="text-sm mb-0">
            <li>Transakcione: {`"kupi"`}, {`"cena"`}, {`"naruči"`}</li>
            <li>Komercijalne: {`"najbolji"`}, {`"preporuka"`}, {`"recenzije"`}</li>
            <li>Problem-focused: {`"[problem] rešenje"`}</li>
            <li>Lokalne: {`"[usluga] [grad]"`}</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-red-500 rounded-xl p-5">
          <p className="font-heading font-bold text-red-700 mb-2">Izbegavajte</p>
          <ul className="text-sm mb-0">
            <li>Previše opšte: {`"softver"`}, {`"obuća"`}</li>
            <li>Čisto informacione bez strateškog razloga</li>
            <li>Preskupe za vaš model</li>
            <li>Irelevantne za vašu ponudu</li>
          </ul>
        </div>
      </div>

      <hr />

      {/* ── Organizacija u Ad Groups ── */}
      <h2>Organizacija ključnih reči u Ad Groups</h2>
      <p>
        Pravilo koje nikada ne prekršim: sve ključne reči u jednoj Ad Group moraju biti dovoljno slične da dele ISTI oglas. Ako ne možete napisati jedan oglas koji je relevantan za sve ključne reči u grupi — podelite ih.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">Primer dobre organizacije</p>
        <div className="space-y-3 text-sm">
          <p className="font-semibold mb-1">Kampanja: CRM Softver</p>
          <div className="ml-4 space-y-2">
            <div><strong>Ad Group: CRM za mala preduzeća</strong><br /><span className="text-gray-500">→ crm za mala preduzeća, crm mali biznis, crm za malu firmu</span></div>
            <div><strong>Ad Group: CRM cena</strong><br /><span className="text-gray-500">→ crm cena, crm softver cena, koliko košta crm</span></div>
            <div><strong>Ad Group: CRM besplatan trial</strong><br /><span className="text-gray-500">→ crm besplatan trial, crm free trial, crm probni period</span></div>
            <div><strong>Ad Group: Salesforce alternativa</strong><br /><span className="text-gray-500">→ salesforce alternativa, zamena za salesforce, jeftiniji od salesforce</span></div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Koliko ključnih reči po Ad Group?</p>
        <p className="text-yellow-800 text-sm mb-0">
          Preporuka: 10-20 ključnih reči. Manje od 5 — nedovoljno podataka za optimizaciju. Više od 30 — teško napisati relevantan oglas za sve.
        </p>
      </div>

      <hr />

      {/* ── Match Types ── */}
      <h2>Match Types objašnjeni</h2>
      <p>
        Google Ads u 2026. godini ima tri match type-a. Svaki daje različit nivo kontrole nad time koje pretrage triggeruju vaš oglas.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Match Type</th>
              <th className="py-3 px-4 font-heading font-semibold">Simbol</th>
              <th className="py-3 px-4 font-heading font-semibold">Kontrola</th>
              <th className="py-3 px-4 font-heading font-semibold">Reach</th>
              <th className="py-3 px-4 font-heading font-semibold">Kada koristiti</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Exact</td>
              <td className="py-3 px-4">[keyword]</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Najviša</span></td>
              <td className="py-3 px-4">Najmanji</td>
              <td className="py-3 px-4">Proven winners, ograničen budžet</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Phrase</td>
              <td className="py-3 px-4">{`"keyword"`}</td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Srednja</span></td>
              <td className="py-3 px-4">Srednji</td>
              <td className="py-3 px-4">Početak kampanje, discovery</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Broad</td>
              <td className="py-3 px-4">keyword</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Najniža</span></td>
              <td className="py-3 px-4">Najveći</td>
              <td className="py-3 px-4">Scaling sa Smart Bidding (30+ konverzija)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">Strategija po fazi kampanje</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Početak (mesec 1-2):</strong> <span className="text-gray-500">— Phrase Match, aktivan Search Terms review, dodavanje negatives</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Optimizacija (mesec 3-4):</strong> <span className="text-gray-500">— Exact za top performere, Phrase za discovery novih reči</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Scaling (mesec 5+):</strong> <span className="text-gray-500">— Broad + Smart Bidding (uslov: 30+ konverzija mesečno)</span></div>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Negativne ključne reči ── */}
      <h2>Negativne ključne reči — zaštita budžeta</h2>
      <p>
        Negativne ključne reči sprečavaju prikazivanje oglasa za irelevantne pretrage. Bez njih, 20-40% budžeta odlazi na klikove koji nikada neće konvertovati.
      </p>
      <p>
        Preporučujem da pre lansiranja svake kampanje pripremite starter listu negatives i da Search Terms Report pregledajte nedeljno.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Kompletna lista i strategija</p>
        <p className="text-blue-800 text-sm mb-0">
          Pripremio sam detaljan vodič sa starter listama po industrijama: <Link href="/blog/negativne-kljucne-reci" className="underline font-semibold">Negativne ključne reči — vodič sa listama</Link>.
        </p>
      </div>

      <hr />

      {/* ── Optimizacija ključnih reči ── */}
      <h2>Optimizacija ključnih reči — nedeljni workflow</h2>
      <p>
        Jednom kad kampanja radi, ključne reči zahtevaju kontinuiranu pažnju. U praksi koristim ovaj nedeljni workflow.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">Nedeljni workflow (20-30 minuta)</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Search Terms Review</strong> <span className="text-gray-500">— poslednjih 7 dana, sortiraj po cost-u, dodaj negatives za irelevantne</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Performance analiza</strong> <span className="text-gray-500">— sortiraj po konverzijama, obezbedi adekvatan bid za winnere</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Quality Score check</strong> <span className="text-gray-500">— dodaj QS kolonu, fokus na QS &lt; 5 za prioritetnu optimizaciju</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Evaluacija za pauziranje</strong> <span className="text-gray-500">— pogledaj tabelu ispod za kriterijume</span></div>
          </div>
        </div>
      </div>

      <h3>Kada pauzirati ključnu reč</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Situacija</th>
              <th className="py-3 px-4 font-heading font-semibold">Minimum podataka</th>
              <th className="py-3 px-4 font-heading font-semibold">Akcija</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Nula klikova</td>
              <td className="py-3 px-4">1000+ impressions</td>
              <td className="py-3 px-4">Proverite bid i QS</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Klikovi bez konverzija</td>
              <td className="py-3 px-4">100+ klikova</td>
              <td className="py-3 px-4">Evaluirajte LP i ponudu</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Previsok CPA</td>
              <td className="py-3 px-4">3x target CPA spend</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Pauzirajte</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Nizak QS bez poboljšanja</td>
              <td className="py-3 px-4">QS 1-3, 30+ dana</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Restrukturirajte</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── Napredne strategije ── */}
      <h2>Napredne strategije za ključne reči</h2>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Competitor keyword targeting</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Bidovanje na brand imena konkurenata može biti efektivno — dosežete ljude koji aktivno razmatraju alternative.</p>
        <ul className="text-sm">
          <li>Nikada ne koristite competitor brand u tekstu oglasa</li>
          <li>Fokusirajte se na diferencijaciju — zašto ste bolji?</li>
          <li>Očekujte niži QS i CTR za ove reči</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">RLSA proširenje ključnih reči</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Sa remarketing listama, možete biti agresivniji sa ključnim rečima jer korisnik vas već poznaje.</p>
        <ul className="text-sm">
          <li>Za cold traffic: [crm za mala preduzeća] (exact)</li>
          <li>Za remarketing publiku: crm softver (broad) — širi reach je ok jer vas već znaju</li>
          <li>Više o remarketing-u: <Link href="/blog/remarketing-vodic" className="underline">remarketing vodič</Link></li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Keyword Sculpting</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Kontrola koja ključna reč triggeruje koji oglas kada imate preklapanja između Ad Groups.</p>
        <ul className="text-sm">
          <li><strong>Problem:</strong> Imate {`"crm"`} i {`"crm cena"`} — koja se prikazuje za {`"crm cena srbija"`}?</li>
          <li><strong>Rešenje:</strong> Dodajte {`"cena"`} kao negative u general Ad Group</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dynamic Keyword Insertion (DKI)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Automatsko ubacivanje search term-a u oglas za veću relevantnost. Koristan alat, ali testirajte pre široke primene.</p>
        <ul className="text-sm">
          <li>Sintaksa: {`{KeyWord:Default Text}`}</li>
          <li>Povećava relevantnost i CTR</li>
          <li>Oprez: može kreirati čudne kombinacije — uvek testirajte</li>
        </ul>
      </div>

      <hr />

      {/* ── Najčešće greške ── */}
      <h2>Najčešće greške sa ključnim rečima</h2>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #1</p>
          <p className="font-semibold mb-2">Previše široke ključne reči bez modifikatora</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Dodajte modifikatore (tip, lokacija, intent). Umesto {`"softver"`} koristite {`"crm softver za mala preduzeća"`}.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #2</p>
          <p className="font-semibold mb-2">Ignorisanje Search Terms Report-a</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Nedeljni pregled Search Terms-a. Prva 2 meseca — svaka 2-3 dana. Ovo je najvažnija optimizaciona aktivnost.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #3</p>
          <p className="font-semibold mb-2">100 ključnih reči u jednoj Ad Group</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Tematska grupacija sa 10-20 ključnih reči. Test: možete li napisati jedan relevantan oglas za sve reči u grupi?</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #4</p>
          <p className="font-semibold mb-2">Bez negativnih ključnih reči od starta</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Pripremite <Link href="/blog/negativne-kljucne-reci" className="underline font-semibold">starter listu negatives</Link> pre pokretanja kampanje + dodajte nedeljno na osnovu Search Terms-a.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #5</p>
          <p className="font-semibold mb-2">Fokus samo na volume, a ne na intent</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Prioritet uvek dajte intent-u. 50 pretraga mesečno sa transakcijskim intent-om vredi više od 5,000 informacionih pretraga.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #6</p>
          <p className="font-semibold mb-2">Copy-paste ključnih reči konkurencije</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Koristite competitor research kao inspiraciju, ali pronađite sopstvene unique angles. Vaši kupci možda koriste drugačije termine.</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2>Najčešća pitanja o ključnim rečima</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko ključnih reči je potrebno za početak?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Za jednu kampanju: 30-50 ključnih reči organizovanih u 3-5 Ad Groups. Bolje je početi sa manje i proširiti na osnovu podataka nego pokrenuti previše odjednom bez fokusa.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Exact ili Phrase match za početak kampanje?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Preporučujem Phrase match za početak. Daje dobar balans kontrole i discovery-ja — vidite šta ljudi zapravo traže. Exact match dodajte kasnije za dokazane performere.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko često pregledati Search Terms?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum jednom nedeljno. U prva 30 dana nove kampanje — svaka 2-3 dana. Za zrele kampanje sa niskim wasted spend-om, nedeljno je sasvim dovoljno.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta ako ključna reč ima 0 pretraga u Keyword Planner?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Može i dalje biti vredna. Keyword Planner potcenjuje volume za long-tail reči. Ako je relevantna i ima transakcijsku nameru, testirajte je — možda konvertuje odlično.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li targetirati brand imena konkurenata?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Opciono i zavisi od industrije. Može biti efektivno za dosezanje ljudi koji razmatraju alternative. Nikada ne koristite competitor brand u tekstu oglasa — fokusirajte se na diferencijaciju.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako prepoznati da je ključna reč loša?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            100+ klikova bez konverzije ili 3x target CPA spend bez rezultata su jasni signali. Ali pre pauziranja, proverite i landing page i oglas — možda je problem tamo, ne u ključnoj reči.
          </div>
        </details>
      </div>

      <hr />

      {/* ── Zaključak + CTA ── */}
      <h2>Zaključak</h2>
      <p>
        Ključne reči su temelj svake uspešne Google Ads kampanje. Pravi izbor i organizacija ključnih reči direktno određuju da li ćete dobiti kvalitetne klikove ili trošiti budžet na irelevantne pretrage. Počnite sa temeljnim istraživanjem, organizujte u tematske grupe, koristite Phrase match za početak i kontinuirano optimizujte na osnovu podataka.
      </p>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Potrebna vam je pomoć sa keyword strategijom?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Besplatna analiza vaših ključnih reči sa preporukama za poboljšanje. Identifikujem wasted spend i propuštene prilike.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <hr />

      {/* ── Povezani vodiči ── */}
      <h2>Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/blog/negativne-kljucne-reci" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negativne ključne reči — kompletna lista</p>
          <p className="text-xs text-gray-500 mb-0">Starter liste po industrijama, strategija i organizacija</p>
        </Link>
        <Link href="/blog/quality-score-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Quality Score vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako poboljšati QS i smanjiti CPC za 28%+</p>
        </Link>
        <Link href="/blog/google-ads-audit-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Audit checklist</p>
          <p className="text-xs text-gray-500 mb-0">80+ tačaka za kompletnu reviziju naloga</p>
        </Link>
        <Link href="/blog/google-ads-optimizacija" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads optimizacija — 30 taktika</p>
          <p className="text-xs text-gray-500 mb-0">Kompletna strategija za poboljšanje performansi</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Februar 2026
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
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Negativne ključne reči sprečavaju prikazivanje oglasa za irelevantne pretrage. Bez njih, 20-40% budžeta odlazi na klikove koji nikada neće konvertovati. U ovom vodiču: kompletne starter liste, strategija po industrijama i sistem organizacije.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">200+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">negativnih reči u listama</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">industrijskh lista</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">30%+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">smanjenje wasted spend-a</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">match type-a za negatives</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Šta su negativne ključne reči ── */}
      <h2>Šta su negativne ključne reči i zašto su kritične</h2>
      <p>
        Negativne ključne reči (negative keywords) su reči i fraze za koje NE želite da se vaši oglasi prikazuju. Dok regularne ključne reči privlače saobraćaj, negativne ga filtriraju — štite vaš budžet od klikova koji nikada neće doneti konverziju.
      </p>
      <p>
        U praksi, ovo je jedna od najvažnijih optimizacionih aktivnosti. Na svakom nalogu koji preuzmem, Search Terms Report otkriva minimum 15-20% budžeta potrošenog na potpuno irelevantne pretrage.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Moje iskustvo: Pravilna negative keywords strategija je najbrži način da poboljšate ROI — rezultati su vidljivi odmah, već u prvoj nedelji.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Regularne ključne reči</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Triggeruju oglas</h3>
          <p className="text-sm text-gray-600 mb-0">Definišu za koje pretrage se vaš oglas prikazuje. Privlače saobraćaj ka vašem sajtu.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Negativne ključne reči</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Blokiraju oglas</h3>
          <p className="text-sm text-gray-600 mb-0">Sprečavaju prikazivanje za irelevantne pretrage. Štite budžet od wasted spend-a.</p>
        </div>
      </div>

      <h3>Primer iz prakse</h3>
      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">Klijent: Online prodavnica premium nameštaja</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-semibold text-red-600 mb-2">Pre negativnih reči</p>
            <ul className="text-sm mb-0">
              <li>Budžet: €2,000/mesec</li>
              <li>Konverzije: 15</li>
              <li>CPA: €133</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-green-600 mb-2">Posle dodavanja negatives</p>
            <ul className="text-sm mb-0">
              <li>Budžet: €2,000/mesec</li>
              <li>Konverzije: 23</li>
              <li>CPA: €87 <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">-35%</span></li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-3 mb-0">
          Blokirane pretrage: {`"jeftine stolice"`} (€180 spend, 0 konv.), {`"polovni nameštaj"`} (€120, 0 konv.), {`"nameštaj DIY"`} (€90, 0 konv.), {`"IKEA nameštaj"`} (€150, 0 konv.)
        </p>
      </div>

      <hr />

      {/* ── Match Types za Negatives ── */}
      <h2>Match Types za negativne ključne reči</h2>
      <p>
        Negativni match types rade drugačije od pozitivnih. Razumevanje razlika je ključno da ne blokirate i dobre pretrage greškom.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Match Type</th>
              <th className="py-3 px-4 font-heading font-semibold">Sintaksa</th>
              <th className="py-3 px-4 font-heading font-semibold">Blokira</th>
              <th className="py-3 px-4 font-heading font-semibold">Ne blokira</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Negative Broad</td>
              <td className="py-3 px-4">besplatno</td>
              <td className="py-3 px-4">Svaku pretragu sa tom reči, bilo koji redosled</td>
              <td className="py-3 px-4">Varijacije i sinonime ({`"besplatni"`}, {`"free"`})</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Negative Phrase</td>
              <td className="py-3 px-4">{`"besplatno preuzimanje"`}</td>
              <td className="py-3 px-4">Pretrage sa tačnom frazom u tom redosledu</td>
              <td className="py-3 px-4">Drugačiji redosled ({`"preuzimanje besplatno"`})</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Negative Exact</td>
              <td className="py-3 px-4">[besplatno preuzimanje]</td>
              <td className="py-3 px-4">Samo tu tačnu pretragu</td>
              <td className="py-3 px-4">Bilo šta dodatno ({`"besplatno preuzimanje CRM"`})</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno: Negativni Broad ne uključuje sinonime</p>
        <p className="text-yellow-800 text-sm mb-0">
          Za razliku od pozitivnog Broad match-a, negativni Broad NE blokira sinonime i varijacije. Ako blokirate {`"besplatno"`}, pretraga {`"free CRM"`} i dalje prolazi. Dodajte i srpske i engleske verzije.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Preporuka za match type</p>
        <p className="text-blue-800 text-sm mb-0">
          Koristite Negative Broad za većinu slučajeva — pokriva najširi opseg. Negative Phrase za specifične fraze gde redosled igra ulogu. Negative Exact retko — samo za vrlo specifične slučajeve.
        </p>
      </div>

      <hr />

      {/* ── Universal Negative Lista ── */}
      <h2>Univerzalna negativna lista — starter za svaki biznis</h2>
      <p>
        Ovu listu preporučujem za svaki nalog kao polaznu tačku. Prilagodite prema vašem biznisu — neke od ovih reči mogu biti relevantne za vas (npr. {`"besplatno"`} ako nudite free trial).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kategorija</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Besplatno / Free</h3>
          <p className="text-sm text-gray-600 mb-0">besplatno, besplatan, besplatna, free, freeware, opensource, open source, dzabe, gratis</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kategorija</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Posao / Zaposlenje</h3>
          <p className="text-sm text-gray-600 mb-0">posao, zaposlenje, karijera, plata, zarada, CV, resume, konkurs, oglas za posao, job, hiring, vacancy, praksa, pripravnik</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kategorija</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Informacione / Edukacione</h3>
          <p className="text-sm text-gray-600 mb-0">šta je, kako, zašto, what is, how to, definicija, pojam, wikipedia, wiki, tutorial, kurs, obuka, edukacija, webinar</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kategorija</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">DIY / Uradi sam</h3>
          <p className="text-sm text-gray-600 mb-0">DIY, uradi sam, napravi sam, homemade, handmade, tutorial, how to make, kako napraviti</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kategorija</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Jeftino / Budget</h3>
          <p className="text-sm text-gray-600 mb-0">jeftino, najjeftinije, povoljno, budget, cheap, discount, popust, akcija, rasprodaja, sniženje, second hand, polovno, rabljeno</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kategorija</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Negativne asocijacije</h3>
          <p className="text-sm text-gray-600 mb-0">problem, ne radi, complaint, žalba, prevara, scam, fake, lažno, opasno, rizik, bug, greška</p>
        </div>
      </div>

      <hr />

      {/* ── Liste po industrijama ── */}
      <h2>Negativne ključne reči po industrijama</h2>
      <p>
        Pored univerzalne liste, svaka industrija ima specifične termine koje bi trebalo blokirati. Evo lista za najčešće industrije sa kojima radim.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">eCommerce — Moda i odeća</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">jeftino, polovno, second hand, outlet, imitacija, replika, fake, kako sašiti, šivenje, pattern, kroj, DIY, trendovi, fashion week, modni dizajner posao, vintage, cosplay, kostim</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">eCommerce — Elektronika</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">polovno, refurbished, korišćeno, broken, pokvaren, popravka, servis, delovi, kako popraviti, teardown, review, unboxing, drajveri, firmware, manual, uputstvo, specifikacije</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">B2B / SaaS</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">besplatno, free, open source, crack, pirate, nulled, developer posao, programer plata, it karijera, kurs, tutorial, za početnike, student, personal use</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Lokalne usluge</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">[gradovi van zone], online, remote, na daljinu, besplatno, jeftino, posao, zapošljavanje, plata, uradi sam, kako sam, DIY, žalba, tužba, advokat, inspekcija</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Turizam / Hoteli</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">besplatno, free, budget, hostel (za hotele), camping, posao u hotelu, recepcioner, konobar posao, turistički vodič posao, slike, fotografije, vlog, blog, iskustva, forum</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Nekretnine</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">iznajmljivanje (ako prodajete), prodaja (ako iznajmljujete), poslovni prostor (za residential), agent za nekretnine posao, broker, licenca, cene nekretnina, prognoza, statistika, foreclosure, ovrha</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">7</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Fitness / Zdravlje</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">besplatno, free, youtube, app, doktor, lekar, bolnica, dijagnoza, lek, terapija, steroidi, anabolici, brzo mršavljenje, ekstremna dijeta, trener posao, fitness instruktor</p>
      </div>

      <hr />

      {/* ── Kako pronaći negativne reči ── */}
      <h2>Kako pronaći negativne ključne reči</h2>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">5 metoda za pronalaženje negatives</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Search Terms Report</strong> <span className="text-gray-500">— najvažnija metoda. Filter: last 7 dana, sort po cost-u, pitanje: {`"Da li bi ova osoba kupila od mene?"`} Minimum jednom nedeljno.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Pre-launch brainstorming</strong> <span className="text-gray-500">— zamislite ko NIJE vaš kupac, razmislite o ambiguous keywords, pogledajte Keyword Planner suggestions</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Competitor research</strong> <span className="text-gray-500">— pretražite vaše ključne reči na Google, pogledajte {`"Searches related to..."`}, identifikujte irelevantne</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Google Autocomplete</strong> <span className="text-gray-500">— počnite kucati ključnu reč, pogledajte suggestions, identifikujte irelevantne</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Customer support mining</strong> <span className="text-gray-500">— pitajte support tim koja pitanja dolaze od ljudi koji NISU pravi kupci</span></div>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Organizacija i struktura ── */}
      <h2>Organizacija negativnih ključnih reči</h2>
      <p>
        Pravilna organizacija je jednako važna kao i same reči. Preporučujem trostepeni sistem koji održava konzistentnost kroz ceo nalog.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Nivo</th>
              <th className="py-3 px-4 font-heading font-semibold">Gde se dodaje</th>
              <th className="py-3 px-4 font-heading font-semibold">Kada koristiti</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Negative Keyword Lists</td>
              <td className="py-3 px-4">Account level (deljena lista)</td>
              <td className="py-3 px-4">Za universal negatives koje važe za sve kampanje</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Campaign Level</td>
              <td className="py-3 px-4">Specifična kampanja</td>
              <td className="py-3 px-4">Za negatives specifične za tu kampanju</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Ad Group Level</td>
              <td className="py-3 px-4">Specifična Ad Group</td>
              <td className="py-3 px-4">Za keyword sculpting i granularnu kontrolu</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <h3 className="mt-0 mb-4 font-heading font-bold">Kako kreirati Negative Keyword List</h3>
        <ol className="mb-0 text-sm">
          <li>Tools &amp; Settings → Shared library → Negative keyword lists</li>
          <li>Kliknite + za novu listu</li>
          <li>Imenujte listu (npr. {`"Universal Negatives"`})</li>
          <li>Dodajte ključne reči</li>
          <li>Primenite na sve relevantne kampanje</li>
        </ol>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Naming convention za liste</p>
        <p className="text-blue-800 text-sm mb-0">
          Koristite format: [Tip] - [Opis]. Primeri: {`"Universal - Free & Job Terms"`}, {`"Industry - eCommerce Fashion"`}, {`"Campaign - Brand Protection"`}
        </p>
      </div>

      <hr />

      {/* ── Audit checklist ── */}
      <h2>Negativne ključne reči — audit checklist</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Nedeljno</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Search Terms Review</h3>
          <ul className="text-sm mb-0">
            <li>Top pretrage po cost-u</li>
            <li>Nove negative reči dodane</li>
            <li>Provera da negatives ne blokiraju dobre pretrage</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Mesečno</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Deep Dive</h3>
          <ul className="text-sm mb-0">
            <li>Top 100 search terms po cost-u</li>
            <li>Universal lista ažurirana</li>
            <li>Industry lista ažurirana</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kvartalno</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Kompletna revizija</h3>
          <ul className="text-sm mb-0">
            <li>90-dnevna Search Terms analiza</li>
            <li>Cross-campaign negative analiza</li>
            <li>Liste reorganizacija</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Pro tip</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Kompletna provera naloga</h3>
          <p className="text-sm text-gray-600 mb-0">Pogledajte <Link href="/blog/google-ads-audit-vodic" className="underline font-semibold">Google Ads audit checklist</Link> za kompletnu reviziju naloga.</p>
        </div>
      </div>

      <hr />

      {/* ── Najčešće greške ── */}
      <h2>Najčešće greške sa negativnim ključnim rečima</h2>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #1</p>
          <p className="font-semibold mb-2">Nikada ne proveravaju Search Terms</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Postavite nedeljni reminder za Search Terms review. Ovo je najvažnija optimizaciona aktivnost za negativne reči.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #2</p>
          <p className="font-semibold mb-2">Previše agresivno blokiranje bez analize</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Proverite volume i konverzije pre dodavanja. Možda neka reč izgleda irelevantno ali zapravo konvertuje.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #3</p>
          <p className="font-semibold mb-2">Pogrešan match type za negativne reči</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Koristite Negative Broad za opšte termine. Exact negative propušta varijacije — {`"besplatno"`} u Exact ne blokira {`"besplatno preuzimanje CRM"`}.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #4</p>
          <p className="font-semibold mb-2">Bez deljenih lista — sve ručno po kampanjama</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Kreirajte Negative Keyword Lists i primenite na sve kampanje. Konzistentnost i efikasnost.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #5</p>
          <p className="font-semibold mb-2">Ignorisanje sinonima i engleskih verzija</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Dodajte i srpske i engleske verzije. Blokirajte {`"besplatno"`} I {`"free"`}, {`"posao"`} I {`"job"`}. Negative Broad ne hvata sinonime automatski.</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2>Najčešća pitanja o negativnim ključnim rečima</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko negativnih ključnih reči je dovoljno?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Nema gornjeg limita. Tipično: 50-200 za starter listu, raste vremenom. Kvalitet je važniji od kvantiteta — bolje 50 pažljivo odabranih nego 500 nasumičnih.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li negativne ključne reči utiču na Quality Score?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Indirektno — da. Bolji CTR (manje irelevantnih prikaza) → bolji Expected CTR → bolji QS. Više o tome u <Link href="/blog/quality-score-vodic" className="underline">Quality Score vodiču</Link>.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Mogu li slučajno blokirati dobre pretrage?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Da, to je realan rizik. Zato: (1) koristite podatke pre dodavanja, (2) proveravajte Search Terms nakon dodavanja, (3) budite pažljivi sa Broad negatives za kratke reči koje imaju više značenja.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko često pregledati i ažurirati negative liste?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum: jednom nedeljno Search Terms review. Idealno u prva 30 dana: svaka 2-3 dana. Za zrele kampanje: nedeljno + mesečna deep dive + kvartalna kompletna revizija.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li postoje obavezne negativne ključne reči za svaki nalog?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Universal lista (besplatno, posao, DIY) je dobar starter za većinu biznisa. Ali uvek prilagodite svom biznisu — {`"besplatno"`} možda nije negative ako nudite free trial ili besplatnu dostavu.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Negative Broad vs Negative Phrase — kada koji?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Broad: za opšte termine koje uvek želite blokirati (besplatno, posao) — pokriva sve pretrage sa tom reči. Phrase: za specifične fraze gde redosled ima značaj. Exact: retko — samo za vrlo specifične slučajeve gde je samo ta tačna pretraga problem.
          </div>
        </details>
      </div>

      <hr />

      {/* ── Zaključak + CTA ── */}
      <h2>Zaključak</h2>
      <p>
        Negativne ključne reči su jedna od najmoćnijih optimizacionih poluga u Google Ads-u. Pravilna strategija može smanjiti wasted spend za 30%+ i poboljšati ROAS za 20-50%. Počnite sa univerzalnom listom, dodajte industrijsku listu, i pregledajte Search Terms nedeljno. Rezultati su vidljivi odmah.
      </p>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Bacate li novac na irelevantne klikove?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Besplatna analiza Search Terms-a sa identifikacijom wasted spend-a i preporukama za negativne ključne reči.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <hr />

      {/* ── Povezani vodiči ── */}
      <h2>Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/blog/kljucne-reci-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Ključne reči — kompletan vodič</p>
          <p className="text-xs text-gray-500 mb-0">Od istraživanja do optimizacije ključnih reči</p>
        </Link>
        <Link href="/blog/quality-score-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Quality Score vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako poboljšati QS i smanjiti CPC</p>
        </Link>
        <Link href="/blog/google-ads-audit-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Audit checklist</p>
          <p className="text-xs text-gray-500 mb-0">80+ tačaka za kompletnu reviziju naloga</p>
        </Link>
        <Link href="/blog/google-ads-greske" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Najčešće Google Ads greške</p>
          <p className="text-xs text-gray-500 mb-0">12 grešaka koje uništavaju performanse</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Februar 2026
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
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Quality Score je Google-ova ocena relevantnosti na skali 1-10. Direktno utiče na poziciju i cenu klika. Poboljšanje QS sa 5 na 7 smanjuje CPC za 28%. Tri komponente: Expected CTR, Ad Relevance i Landing Page Experience.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1-10</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">skala ocenjivanja</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">komponente QS-a</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">28%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">CPC ušteda (QS 5→7)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">400%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">CPC penalizacija za QS 1</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Šta je Quality Score ── */}
      <h2>Šta je Quality Score i zašto je bitan</h2>
      <p>
        Quality Score je Google-ova dijagnostička ocena relevantnosti vaših ključnih reči, oglasa i landing page-a. Ocenjuje se na skali 1-10 za svaku ključnu reč u vašem nalogu.
      </p>
      <p>
        U praksi, ovo je jedna od najvažnijih metrika za kontrolu troškova. Na svakom auditu koji radim, vidim da nalozi sa prosečnim QS ispod 5 plaćaju 50-400% više po kliku nego što bi trebali.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Formula: Ad Rank = Max CPC Bid × Quality Score × Expected Impact of Extensions
        </p>
      </div>

      <p>Viši Quality Score znači:</p>
      <ul>
        <li><strong>Bolja pozicija</strong> — viši Ad Rank bez povećanja bid-a</li>
        <li><strong>Niži CPC</strong> — plaćate manje za isti klik</li>
        <li><strong>Više impression-a</strong> — češće prikazivanje za isti budžet</li>
        <li><strong>Pristup premium pozicijama</strong> — neke pozicije zahtevaju minimum Ad Rank</li>
      </ul>

      <hr />

      {/* ── CPC uticaj ── */}
      <h2>Koliko Quality Score utiče na cenu klika</h2>
      <p>
        Ovo je najvažnija tabela u celom vodiču. Pokazuje koliko više ili manje plaćate u zavisnosti od QS-a, sa baseline-om na QS 5.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Quality Score</th>
              <th className="py-3 px-4 font-heading font-semibold">CPC uticaj</th>
              <th className="py-3 px-4 font-heading font-semibold">Primer (baseline €1.00)</th>
              <th className="py-3 px-4 font-heading font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">10</td>
              <td className="py-3 px-4">-50%</td>
              <td className="py-3 px-4">€0.50</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Odlično</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">9</td>
              <td className="py-3 px-4">-44%</td>
              <td className="py-3 px-4">€0.56</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Odlično</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">8</td>
              <td className="py-3 px-4">-37%</td>
              <td className="py-3 px-4">€0.63</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Vrlo dobro</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">7</td>
              <td className="py-3 px-4">-28%</td>
              <td className="py-3 px-4">€0.72</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Dobro</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">6</td>
              <td className="py-3 px-4">-17%</td>
              <td className="py-3 px-4">€0.83</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">OK</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">5</td>
              <td className="py-3 px-4">Baseline (0%)</td>
              <td className="py-3 px-4">€1.00</td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Prosek</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">4</td>
              <td className="py-3 px-4">+25%</td>
              <td className="py-3 px-4">€1.25</td>
              <td className="py-3 px-4"><span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded">Ispod proseka</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">3</td>
              <td className="py-3 px-4">+67%</td>
              <td className="py-3 px-4">€1.67</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Loš</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">2</td>
              <td className="py-3 px-4">+150%</td>
              <td className="py-3 px-4">€2.50</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Kritičan</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">1</td>
              <td className="py-3 px-4">+400%</td>
              <td className="py-3 px-4">€5.00</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Hitna akcija</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">ROI primer: QS poboljšanje sa 5 na 7</p>
        <p className="text-sm text-yellow-900 mb-0">
          Mesečni spend €5,000 sa QS 5. Poboljšanjem na QS 7, CPC se smanjuje za 28%. To znači ili €1,400 uštede mesečno za isti broj klikova, ili 28% više klikova za isti budžet. Na godišnjem nivou: €16,800 uštede.
        </p>
      </div>

      <hr />

      {/* ── Tri komponente ── */}
      <h2>Tri komponente Quality Score-a</h2>
      <p>
        Svaka komponenta se ocenjuje kao: Above average, Average, ili Below average. Razumevanje koja komponenta vuče QS dole je ključ za efikasnu optimizaciju.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">~40% uticaja</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Expected CTR</h3>
          <p className="text-sm text-gray-600 mb-0">Verovatnoća da će neko kliknuti na vaš oglas. Zavisi od headline-ova, CTA-a, extensions i istorijskih performansi.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">~20% uticaja</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Ad Relevance</h3>
          <p className="text-sm text-gray-600 mb-0">Koliko je vaš oglas relevantan za ključnu reč. Zavisi od podudaranja ključne reči sa tekstom oglasa.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">~40% uticaja</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Landing Page Experience</h3>
          <p className="text-sm text-gray-600 mb-0">Koliko je LP koristan i relevantan. Zavisi od sadržaja, brzine, mobile optimizacije i trust signala.</p>
        </div>
      </div>

      <h3>Dijagnostička tabela — gde je problem?</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Exp. CTR</th>
              <th className="py-3 px-4 font-heading font-semibold">Ad Relevance</th>
              <th className="py-3 px-4 font-heading font-semibold">LP Exp.</th>
              <th className="py-3 px-4 font-heading font-semibold">Fokus optimizacije</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4 font-medium">Poboljšajte oglas (headline, CTA, extensions)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4 font-medium">Poboljšajte relevantnost (ključna reč u oglasu)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4 font-medium">Poboljšajte landing page (brzina, sadržaj, mobile)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4 font-medium">Restrukturirajte Ad Group (uža grupacija)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4 font-medium">Kompletna revizija — <Link href="/blog/google-ads-audit-vodic" className="underline">audit checklist</Link></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── Poboljšanje Expected CTR ── */}
      <h2>Kako poboljšati Expected CTR</h2>
      <p>Expected CTR čini ~40% Quality Score-a i najdirektnije se može poboljšati optimizacijom oglasa.</p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ključna reč u headline-u</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Umesto generičnog {`"Kvalitetni proizvodi | Naručite danas"`} koristite {`"CRM Softver Za Mala Preduzeća | Besplatan Trial"`}.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Koristite brojke i specifičnost</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">{`"Preko 500 Proizvoda"`}, {`"Uštedite Do 40%"`}, {`"30 Dana Garancije"`}, {`"24/7 Podrška"`} — konkretne brojke privlače pažnju i povećavaju CTR.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Jak CTA i USP u headline</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">Jasna akcija: {`"Naručite Danas"`}, {`"Besplatna Procena"`}. Jedinstven USP: {`"Jedini Sa Garancijom Povrata"`}, {`"Dostava Istog Dana"`}.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dodajte sve extensions</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Extensions povećavaju veličinu oglasa i direktno utiču na CTR.</p>
        <ul className="text-sm">
          <li>Sitelinks: +10-20% CTR</li>
          <li>Callouts: +5-10% CTR</li>
          <li>Structured Snippets: +5-10% CTR</li>
        </ul>
      </div>

      <hr />

      {/* ── Poboljšanje Ad Relevance ── */}
      <h2>Kako poboljšati Ad Relevance</h2>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">4 taktike za bolju relevantnost</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Tematska grupacija</strong> <span className="text-gray-500">— 10-20 ključnih reči po Ad Group, tematski povezane. <Link href="/blog/kljucne-reci-vodic" className="underline">Vodič za ključne reči</Link></span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Ključna reč u oglasu</strong> <span className="text-gray-500">— minimalno u jednom headline-u i u description-u</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Message match</strong> <span className="text-gray-500">— oglas za {`"CRM cena"`} govori o cenama, oglas za {`"CRM demo"`} govori o demo-u</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Izbegavajte generic oglase</strong> <span className="text-gray-500">— {`"Kvalitetni Proizvodi"`} ne znači ništa. Budite specifični.</span></div>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Poboljšanje LP Experience ── */}
      <h2>Kako poboljšati Landing Page Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prioritet 1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Relevantnost sadržaja</h3>
          <p className="text-sm text-gray-600 mb-0">LP mora odgovarati ključnoj reči i oglasu. Dedicirane LP za svaku temu — ne šaljite sve na homepage.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prioritet 2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Brzina stranice</h3>
          <p className="text-sm text-gray-600 mb-0">Cilj: &lt; 3 sekunde load time. Kompresija slika (WebP), minifikacija CSS/JS, CDN, caching, lazy loading.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prioritet 3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Mobile optimizacija</h3>
          <p className="text-sm text-gray-600 mb-0">60%+ saobraćaja je sa mobilnih. Responsive dizajn, čitljivo bez zumiranja, klikabilni buttoni.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prioritet 4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Trust signali</h3>
          <p className="text-sm text-gray-600 mb-0">Reviews, testimonials, trust badges, SSL, garancije, kontakt informacije. Korisnik mora imati poverenje.</p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Landing Page checklist</p>
        <p className="text-blue-800 text-sm mb-0">
          Relevantna za ključnu reč ✓ Message match sa oglasom ✓ Load time &lt; 3s ✓ Mobile-friendly ✓ Jasan CTA iznad fold-a ✓ Trust signals ✓ SSL (https) ✓ Bez intrusive pop-ups ✓
        </p>
      </div>

      <hr />

      {/* ── 30-dnevni plan ── */}
      <h2>30-dnevni plan za poboljšanje Quality Score-a</h2>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Nedelja 1: Audit</strong> <span className="text-gray-500">— dodajte QS kolone, identifikujte problematične keywords, analizirajte komponente</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Nedelja 2: Ad Relevance</strong> <span className="text-gray-500">— restrukturirajte široke Ad Groups, napišite specifične oglase, ključna reč u headline</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Nedelja 3: Landing Pages</strong> <span className="text-gray-500">— page speed provera, dedicirane LP ako potrebno, trust signals</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Nedelja 4: CTR optimizacija</strong> <span className="text-gray-500">— testirajte nove oglase, dodajte sve extensions, A/B test headline-ova</span></div>
          </div>
        </div>
      </div>

      <hr />

      {/* ── QS po tipu kampanje ── */}
      <h2>Quality Score po tipu kampanje</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Tip kampanje</th>
              <th className="py-3 px-4 font-heading font-semibold">QS vidljivost</th>
              <th className="py-3 px-4 font-heading font-semibold">Na šta se fokusirati</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Search</td>
              <td className="py-3 px-4">Potpuno vidljiv (1-10)</td>
              <td className="py-3 px-4">Sve tri komponente — najvažniji</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Display</td>
              <td className="py-3 px-4">Manje transparentan</td>
              <td className="py-3 px-4">Ad relevance, LP experience, istorijske performanse</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Shopping</td>
              <td className="py-3 px-4">Nema klasičan QS</td>
              <td className="py-3 px-4">Product feed kvalitet, cene, seller ratings</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Performance Max</td>
              <td className="py-3 px-4">Nije vidljiv</td>
              <td className="py-3 px-4">Google koristi interne signale kvaliteta</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── Najčešće greške ── */}
      <h2>Najčešće greške sa Quality Score-om</h2>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #1</p>
          <p className="font-semibold mb-2">Opsesija sa QS 10 za svaku ključnu reč</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> QS 7-8 je odličan i sasvim dovoljan. Fokusirajte se na business metrike (CPA, ROAS) — QS je dijagnostički alat, ne cilj sam po sebi.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #2</p>
          <p className="font-semibold mb-2">Potpuno ignorisanje QS-a</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Nizak QS = viši troškovi = lošiji ROI. Koristite QS kao dijagnostički alat za identifikaciju problema, posebno za ključne reči sa najvećim spend-om.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #3</p>
          <p className="font-semibold mb-2">50+ ključnih reči u jednoj Ad Group</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Tematska grupacija sa 10-20 ključnih reči max. Nemoguće je napisati relevantan oglas za 50 različitih tema.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #4</p>
          <p className="font-semibold mb-2">Svi oglasi vode na homepage</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Kreirajte dedicirane landing page-ove za svaku temu/Ad Group. Homepage nije relevantan za specifične pretrage.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #5</p>
          <p className="font-semibold mb-2">Spor sajt (5+ sekundi load time)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Speed optimization je prioritet. Kompresija slika, lazy loading, caching. Cilj: &lt; 3 sekunde. Koristite PageSpeed Insights za dijagnostiku.</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2>Najčešća pitanja o Quality Score-u</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koji je dobar Quality Score?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            7+ je dobar, 8-9 je odličan, 10 je idealan ali nije uvek potreban niti realan. Za branded ključne reči očekujte 8-10, za generičke komercijalne 6-8 je sasvim solidan rezultat.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko brzo se Quality Score menja?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            QS se ažurira na osnovu kumulativnih performansi, ali promene vidite postepeno — obično dani do nedelje. Veće promene (restrukturiranje Ad Groups, nove LP) zahtevaju više podataka da se reflektuju.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li QS utiče na Display i Shopping kampanje?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Display ima sličan ali manje transparentan sistem. Shopping nema klasičan QS — koristi feed quality, price competitiveness i seller ratings. PMax koristi interne signale koji nisu vidljivi.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Mogu li imati visok QS i loše konverzije?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Da. QS meri relevantnost, ne kvalitet ponude. Možete imati savršeno relevantan oglas i LP za ponudu koja nije konkurentna. QS je samo deo jednačine — ponuda, cena i korisničko iskustvo su jednako važni.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto imam nizak QS za branded ključne reči?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Verovatno konkurenti bidduju na vaš brand. Branded reči bi trebalo da imaju QS 8-10. Proverite: da li je brand u headline-u oglasa, da li LP ima brand prominentno, da li ima tehničkih problema sa sajtom.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li pauziranje loših ključnih reči poboljšava QS ostalih?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Ne direktno — ne postoji account-level QS. Ali indirektno, bolji fokus na kvalitetne reči poboljšava ukupne performanse naloga što vremenom pomaže svim metrikama.
          </div>
        </details>
      </div>

      <hr />

      {/* ── Zaključak + CTA ── */}
      <h2>Zaključak</h2>
      <p>
        Quality Score je najmoćniji alat za kontrolu troškova u Google Ads-u. Poboljšanje sa QS 5 na 7 smanjuje CPC za 28%, što na godišnjem nivou može značiti hiljade evra uštede. Fokusirajte se na tri komponente — Expected CTR, Ad Relevance i Landing Page Experience — koristeći dijagnostičku tabelu da identifikujete gde je problem.
      </p>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Plaćate li previše po kliku?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Besplatna QS analiza vašeg naloga sa identifikacijom ključnih reči koje vas koštaju previše i konkretnim preporukama za poboljšanje.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <hr />

      {/* ── Povezani vodiči ── */}
      <h2>Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/blog/kljucne-reci-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Ključne reči — kompletan vodič</p>
          <p className="text-xs text-gray-500 mb-0">Od istraživanja do optimizacije ključnih reči</p>
        </Link>
        <Link href="/blog/negativne-kljucne-reci" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negativne ključne reči — kompletna lista</p>
          <p className="text-xs text-gray-500 mb-0">200+ negativnih reči po industrijama</p>
        </Link>
        <Link href="/blog/google-ads-greske" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Najčešće Google Ads greške</p>
          <p className="text-xs text-gray-500 mb-0">12 grešaka koje uništavaju performanse</p>
        </Link>
        <Link href="/blog/google-ads-optimizacija" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads optimizacija — 30 taktika</p>
          <p className="text-xs text-gray-500 mb-0">Kompletna strategija za poboljšanje performansi</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Februar 2026
      </div>
      <div className="text-sm text-gray-500">
        Autor: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}


function GoogleAdsOptimizacijaPost() {
  return (
    <>
      {/* ── TL;DR boks ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          30 taktika za Google Ads optimizaciju proverenih na 20+ naloga. Prosečno poboljšanje performansi 40% u prvih 90 dana. Fokus na strukturu, ključne reči, oglase, bidding i Quality Score.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">30</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">taktika za optimizaciju</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">6</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">kategorija optimizacije</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">20+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">naloga testirano</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">40%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">prosečno poboljšanje</p>
          </div>
        </div>
      </div>

      <p className="lead">
        Google Ads optimizacija nije jednokratna aktivnost — to je kontinuiran proces koji
        odvaja kampanje sa ROAS 2x od onih sa ROAS 5x. U ovom vodiču delim 30 taktika koje
        koristim u praksi sa klijentima iz različitih industrija.
      </p>

      <p>
        Ove taktike nisu teorija iz Google Help Centra. Svaka je testirana na realnim nalozima
        sa realnim budžetima. Neke su donele dramatična poboljšanja, neke marginalna — ali sve
        su prošle test prakse.
      </p>

      <hr />

      <h2>Zašto je optimizacija ključna za uspeh</h2>

      <p>
        Vidim dve vrste naloga: one koje <strong>set-and-forget</strong> vlasnici ostavljaju da rade
        sami, i one koje se optimizuju redovno. Razlika u performansama? U proeku 40-60%.
      </p>

      <p>
        Pareto princip (80/20 pravilo) u Google Ads-u glasi: <strong>20% optimizacija donosi 80% rezultata</strong>.
        Problem je što većina ljudi ne zna koje tih 20% da radi. Zato sam organizovao ovih 30 taktika
        po prioritetu — počnite od strukture, pa idite dalje.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Realnost iz prakse</p>
        <p className="text-blue-800 text-sm mb-0">
          U januaru 2026 sam preuzeo nalog gde je kampanja 6 meseci radila bez optimizacije. CPA je bio
          €85. Nakon 4 nedelje primene ovih taktika: CPA €42. Isti budžet, duplo više konverzija.
        </p>
      </div>

      <p>
        Optimizacija nije raketna nauka, ali zahteva sistem. Ovaj vodič je taj sistem — korak po korak,
        taktika po taktika.
      </p>

      <hr />

      <h2>Optimizacija strukture naloga</h2>

      <p>
        Pre nego što počnete da optimizujete ključne reči, oglase ili bidding — proverite strukturu naloga.
        Loša struktura je kao graditi kuću na nestabilnom temelju. Sve ostale optimizacije neće doneti
        maksimalne rezultate.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Odvojite Brand i Non-Brand kampanje</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Brand kampanje (vaše ime brenda) imaju 10x viši CTR i 3x niži CPC od non-brand kampanja.
          Ako ih mešate u jednoj kampanji, statistika je zbunjujuća i ne možete optimalno alokirati budžet.
        </p>
        <ul className="text-sm">
          <li>Kreirajte odvojenu kampanju samo za brand keywords</li>
          <li>Stavite niži bid na brand (ionako već dolaze)</li>
          <li>Fokusirajte optimizaciju na non-brand kampanje gde je pravi potencijal</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Single Keyword Ad Groups (SKAGs) ili tematske grupe?</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Stara škola preporučuje SKAGs — svaka ključna reč u svojoj ad grupi za maksimalnu relevantnost.
          Nova realnost sa RSA oglasima: tematske grupe od 5-15 sličnih ključnih reči daju bolju AI optimizaciju.
        </p>
        <ul className="text-sm">
          <li>Za visoko-intent komercijalne ključne reči: testirajte SKAGs</li>
          <li>Za informativne i long-tail: tematske grupe</li>
          <li>Nikada nemojte mešati različite intente u istoj ad grupi</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Konzistentna naming konvencija</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ako imate 20+ kampanja, kako brzo pronalazite šta tražite? Preporučujem strukturu:
          [TIP]_[KATEGORIJA]_[GEO]_[DODATNO]. Primer: SEARCH_Sofas_UK_Exact ili PMAX_AllProducts_EU_NewCustomers.
        </p>
        <ul className="text-sm">
          <li>Koristite prefixe: SEARCH, PMAX, SHOPPING, DISPLAY, VIDEO</li>
          <li>Dodajte geo ako radite multi-market: UK, DE, RS</li>
          <li>Označite testove sa _TEST na kraju da ih lako filtrirate</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Kampanje po fazi customer journey</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Korisnik koji traži &quot;šta je CRM&quot; nije u istoj fazi kao onaj koji traži &quot;kupiti HubSpot
          alternativu&quot;. Odvojite kampanje po fazi: Awareness, Consideration, Decision.
        </p>
        <ul className="text-sm">
          <li>Awareness: broad match, edukativni content, niži bid</li>
          <li>Consideration: phrase match, product pages, srednji bid</li>
          <li>Decision: exact match, checkout/demo pages, najviši bid</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dnevni budžet vs shared budget</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Individualni dnevni budžet po kampanji vam daje kontrolu. Shared budget pools automatski
          alokira gde Google vidi priliku. U praksi: najbolje funkcioniše hybrid pristup.
        </p>
        <ul className="text-sm">
          <li>Top performeri (Brand, High-Intent Search): individualni budžet koji NIKADA ne treba da limitira</li>
          <li>Testne kampanje ili seasonalne: shared budget da fleksibilno alocirate</li>
          <li>Pratite impression share lost (budget) — ako je &gt;20%, povećajte budžet</li>
        </ul>
      </div>

      <hr />

      <h2>Optimizacija ključnih reči</h2>

      <p>
        Ključne reči su srce Search kampanja. 90% optimizacija koje radim svakog ponedeljka vezano je
        za keyword management: dodavanje novih, pauziranje nerentabilnih, refining match types, i <Link href="/blog/negativne-kljucne-reci">dodavanje negativnih ključnih reči</Link>.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Search Terms Report mining (nedeljno)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ovo je najmoćnija taktika u ovom vodiču. Search Terms Report pokazuje šta ljudi ZAPRAVO
          pretražuju kada vide vaš oglas. Tamo nalazite zlato (nove converting keywords) i otpad
          (terms koje trebaju biti negativne).
        </p>
        <ul className="text-sm">
          <li>Jednom nedeljno: Google Ads → Insights & Reports → Search Terms</li>
          <li>Sortirajte po Conversions: terms sa konverzijama dodajte kao nove keywords u Exact match</li>
          <li>Sortirajte po Spend: terms sa visokim troškom i 0 konverzija dodajte kao negativne</li>
          <li>Tražite intente koji ne odgovaraju vašem proizvodu/usluzi</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">7</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Negativne ključne reči kao fundament</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ljudi pitaju &quot;Kako da dobijem više konverzija?&quot; — bolje pitanje je &quot;Kako da
          prestanem da gubim pare na lošim klikovima?&quot;. Negativne ključne reči su odgovor.
        </p>
        <ul className="text-sm">
          <li>Kreirajte master listu negativnih reči na account level (free, besplatno, posao, tutorial, PDF)</li>
          <li>Specifične negative keywords po kampanji (ako prodajete nove proizvode: dodajte &quot;polovno&quot;, &quot;second hand&quot;)</li>
          <li>Koristite negativne liste za brzinu — kreirajte &quot;B2C_Negatives&quot; ili &quot;Informational_Negatives&quot;</li>
          <li>Kompletan vodič: <Link href="/blog/negativne-kljucne-reci">Negativne ključne reči u Google Ads</Link></li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">8</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Match types strategija: 2026 realnost</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Broad Match Modifier više ne postoji (Google ga je ukinuo 2021). Sada imate: Broad, Phrase, Exact.
          Ali Exact match više nije baš &quot;exact&quot; — close variants su enabled by default.
        </p>
        <ul className="text-sm">
          <li><strong>Exact Match:</strong> Vaš default za komercijalne high-intent keywords. Maksimalna kontrola.</li>
          <li><strong>Phrase Match:</strong> Za discovery novih intenta, ali samo ako imate dobre negativne liste.</li>
          <li><strong>Broad Match:</strong> Samo ako koristite Smart Bidding (Target CPA/ROAS) — algoritam treba podatke da uči. Inače izbegavajte.</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Broad Match sa Manual CPC bidding je recept za katastrofu. Broad Match sa Target CPA i dobrom
          conversion tracking istorijom? To može biti vaša best performing taktika. Kontekst je sve.
        </p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">9</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Keyword consolidation (merge duplicates)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Čest scenario: ista ključna reč u 3 različite ad grupe, sve sa low impression share jer budžet
          i Quality Score su rasparčani. Rešenje: konsolidacija.
        </p>
        <ul className="text-sm">
          <li>Koristite Google Ads interfejs: Tools → Keyword Conflicts da vidite duplicate keywords</li>
          <li>Zadržite keyword u ad grupi sa najboljim Quality Score</li>
          <li>Zaustavite u ostalim ad grupama — agregirana statistika će biti bolja</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">10</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Long-tail strategija za niše</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ako ste u nišnoj industriji ili imate mali budžet — long-tail keywords su vaš best friend.
          Da, imaju mali volumen, ali CPC je 3-5x niži, a konverziona stopa često viša.
        </p>
        <ul className="text-sm">
          <li>Koristite Google Keyword Planner ili Answer The Public za ideje</li>
          <li>Ciljajte 4+ word queries (&quot;best affordable ergonomic chair for home office&quot;)</li>
          <li>Kreirajte dynamic search ads (DSA) kao safety net za long-tail terms koje ste propustili</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">11</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Sezonske ključne reči i scheduled campaigns</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ako imate seasonalne proizvode (npr. &quot;ski oprema&quot; vs &quot;surfboard&quot;), nemojte
          držati sve keywords aktivne celu godinu. Trošite budžet uzalud van sezone.
        </p>
        <ul className="text-sm">
          <li>Kreirajte sezonske kampanje sa clear start/end datumima</li>
          <li>Koristite Google Trends da identifikujete peak sezonu za svaku kategoriju</li>
          <li>2 nedelje pre peak sezone: pokrenite kampanje da build-ujete Quality Score</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">12</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Competitor keywords: yes or no?</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Bidding na imena konkurencije (npr. &quot;HubSpot alternative&quot;) može biti moćno, ali i
          skupo. Moje pravilo: testirajte ako imate clear differentiation i landing page koja objašnjava
          zašto ste bolji.
        </p>
        <ul className="text-sm">
          <li>Nemojte koristiti ime konkurenta u ad copy (može dobiti ad disapproval)</li>
          <li>Fokusirajte se na comparison i alternative keywords</li>
          <li>Competitive campaigns zahtevaju viši Quality Score — jako relevantna landing page je must</li>
        </ul>
      </div>

      <hr />

      <h2>Optimizacija oglasa</h2>

      <p>
        Sa prelaskom na Responsive Search Ads (RSA) kao default formatu, optimizacija oglasa je
        promenila prirodu. Više nije copy-paste opisnih rečenica — sada kreirate building blocks
        koje Google kombinuje. Strategija je drugačija.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">13</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">RSA best practices: diversity je ključ</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Google vam dozvoljava 15 headlines i 4 descriptions u RSA oglasu. Većina ljudi piše 15
          varijacija iste poruke. Greška. Google treba diversity da optimalno testira kombinacije.
        </p>
        <ul className="text-sm">
          <li>Podelite headlines u 3 tipa: Product/Service, Benefit, Offer/CTA</li>
          <li>Koristite različite dužine (od 20 do 30 karaktera) da bi se svi mogli prikazati</li>
          <li>Minimalno 2 headlines sa dynamic keyword insertion (DKI): &quot;{`{KeyWord:Default Text}`}&quot;</li>
          <li>Ad Strength &quot;Excellent&quot; nije cilj — cilj je CTR i konverzije, ali &quot;Good&quot; je minimum</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">14</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Pin strategija: kada pinnovati headlines</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Pinning (fiksiranje headline/description na određenu poziciju) smanjuje broj kombinacija koje
          Google može testirati, ali je ponekad neophodan za brand compliance ili messaging kontrolu.
        </p>
        <ul className="text-sm">
          <li>Pin Position 1: Brand name ili ključna differentiator poruka uvek vidljiva</li>
          <li>Nemojte pinnovati sve — ostavite Google-u prostora da optimizuje</li>
          <li>Koristite pinning za legal disclaimers ili price mentions koje moraju biti vidljive</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">15</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ad Extensions: koristite SVE relevantne</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ad extensions (sitelinks, callouts, structured snippets, call, location...) povećavaju CTR
          za 10-25% jer vaš oglas zauzima više prostora na SERP-u. I potpuno su besplatni.
        </p>
        <ul className="text-sm">
          <li><strong>Sitelinks:</strong> Minimum 4, best practice 8 — link-ujte na top kategorije/pages</li>
          <li><strong>Callouts:</strong> Kratke USP bullets (&quot;Besplatna dostava&quot;, &quot;24/7 Podrška&quot;)</li>
          <li><strong>Structured Snippets:</strong> Branded kategorije (Brands: Nike, Adidas, Puma...)</li>
          <li><strong>Call Extensions:</strong> Must have ako ste local business ili visok CPA warrantuje poziv</li>
          <li>Koristite account-level extensions kao fallback, pa campaign-specific za specijalne ponude</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">16</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Landing page alignment (message match)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ako vaš oglas obećava &quot;20% popust na sofe&quot;, a landing page nema pomena o popustu —
          imali ste visok bounce rate i loš Quality Score. Message match je kritičan.
        </p>
        <ul className="text-sm">
          <li>Headline na landing page treba da odjekuje (mirror) ad headline</li>
          <li>Ako oglašavate specifičan proizvod/kategoriju, ne slajte na homepage — kreirajte dedicated page</li>
          <li>Testiranje landing pages često donosi veći ROI od testiranja ad copy</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">17</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Device-specific ad copy (mobile vs desktop)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Mobile traffic ima drugačiji intent od desktop traffic. Kraći attention span, često local
          searches, više call conversions. Optimizujte ad copy za device ako vidite performance gap.
        </p>
        <ul className="text-sm">
          <li>Ako mobile users češće zovu: mobilna kampanja sa agresivnim Call Extension</li>
          <li>Ako desktop users bolje konvertuju: izdvojite budžet i bid adjustments na desktopu</li>
          <li>Mobile headlines: kraći, direktniji (&quot;Nazovite odmah&quot; vs &quot;Zakaži konsultaciju&quot;)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">18</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Emotional triggers u ad copy</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ad copy koji samo opisuje features je dosadan. Ad copy koji rešava problem ili aktivira emociju
          dobija klik. FOMO (fear of missing out), urgencija, benefit-driven copy — to pobjeđuje.
        </p>
        <ul className="text-sm">
          <li><strong>FOMO:</strong> &quot;Samo 3 komada ostalo&quot;, &quot;Akcija ističe sutra&quot;</li>
          <li><strong>Benefit over feature:</strong> &quot;Spavajte bolje&quot; &gt; &quot;Memory foam madrac&quot;</li>
          <li><strong>Social proof:</strong> &quot;5000+ zadovoljnih klijenata&quot;, &quot;4.9★ ocena&quot;</li>
        </ul>
      </div>

      <hr />

      <h2>Optimizacija bidding strategija</h2>

      <p>
        Bid strategy je vaš autopilot. Možete imati savršenu strukturu i odlične oglase, ali ako
        bidate pogrešno — trošite više nego što treba ili gubite impression share. Evo kako biramo
        i optimizujemo bidding strategije.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">19</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Manual CPC vs Smart Bidding: kada šta?</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Google gura Smart Bidding (Target CPA, Target ROAS, Maximize Conversions) kao superiorno
          rešenje. U praksi: zavisi od conversion volume-a. Ispod 30 konverzija mesečno, Smart Bidding
          nema dovoljno podataka da uči — Manual CPC sa bid adjustments je bolji.
        </p>
        <ul className="text-sm">
          <li><strong>Manual CPC:</strong> Novo lansiranje, mali budžet, &lt;30 konverzija/mesec</li>
          <li><strong>Maximize Clicks:</strong> Ako je cilj traffic/brand awareness, ne konverzije</li>
          <li><strong>Target CPA:</strong> Lead gen kampanje sa jasnim CPA ciljem, 30+ konverzija/mesec</li>
          <li><strong>Target ROAS:</strong> eCommerce sa tracking revenue, 50+ konverzija/mesec</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Transition plan: Manual → Smart Bidding</p>
        <p className="text-blue-800 text-sm mb-0">
          Ne skačite direktno sa Manual CPC na Target CPA. Pređite prvo na &quot;Maximize Conversions&quot;
          bez target-a da algoritam nauči. Nakon 2 nedelje, pređite na Target CPA/ROAS sa realističnim
          ciljem (10% iznad current average).
        </p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">20</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Target CPA/ROAS: kako postaviti realan target</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Greška #1: postaviti previše agresivan target. Ako je vaš current CPA €50, a postavite target
          €20 — kampanja neće dobiti impressions jer Google zna da ne može postići taj target.
        </p>
        <ul className="text-sm">
          <li>Pogledajte Last 30 days average CPA/ROAS — to je vaša baseline</li>
          <li>Postavite target 10-20% bolji od current average (npr. CPA €50 → target €45)</li>
          <li>Nakon 2-3 nedelje stabilnih performansi, postepeno smanjujte target dalje</li>
          <li>Nikada nemojte menjati target više od jednom nedeljno — algoritam treba learning period</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">21</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Portfolio bidding za multi-kampanja management</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Portfolio bid strategies dozvoljavaju da delite bid strategiju preko više kampanja. Benefit:
          algoritam uči na agregiranom conversion volume-u, što znači bržu optimizaciju.
        </p>
        <ul className="text-sm">
          <li>Koristite portfolio strategy ako imate 3+ kampanja sa istim ciljem (npr. sve Search kampanje sa Target CPA €40)</li>
          <li>Ne mešajte različite tipe kampanja u istoj portfolio (Search + Display = bad idea)</li>
          <li>Pratite performance po kampanji unutar portfolio — jedna loša može &quot;zaraziti&quot; ostale</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">22</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dayparting: kad su vaši korisnici najaktivniji?</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Dayparting (Ad Schedule) podešava bidove po danu u nedelji i času u danu. Ako vaš CPA u
          ponedeljak ujutro 50% bolji od petka uveče — zašto bidate isto?
        </p>
        <ul className="text-sm">
          <li>Analizirajte performanse po Hours of Day i Days of Week (Google Ads → Dimensions)</li>
          <li>Identifikujte top performing time slots (CPA 20%+ bolji od average)</li>
          <li>Podesite bid adjustments: +20% za peak hours, -30% za poor performing slots</li>
          <li>B2B kampanje: snizite bidove za vikende (ili ih potpuno pausajte)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">23</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Device bid adjustments (mobile/tablet/desktop)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ako vaš desktop CPA je €30, a mobilni €60 — ne treba da bidate isto. Device bid adjustments
          omogućavaju da automatski smanjite/povećate bid na različitim device-ima.
        </p>
        <ul className="text-sm">
          <li>Segment by device (Google Ads → Campaigns → Devices) i uporedite CPA</li>
          <li>Desktop best performer? Podesite mobile bid adjustment na -20% do -40%</li>
          <li>Mobile best performer? Podesite mobile bid adjustment na +20% do +40%</li>
          <li>Napomena: Sa Smart Bidding strategijama, device bid adjustments imaju manji impact (algoritam već optimizuje)</li>
        </ul>
      </div>

      <hr />

      <h2>Optimizacija Quality Score</h2>

      <p>
        Quality Score je Google-ova ocena koliko su vaši oglasi i keywords relevantni korisnicima.
        Viši Quality Score = niži CPC i bolji ad rank. Ako imate prosek ispod 5/10, ovde je vaš
        najveći optimization opportunity. Kompletan vodič: <Link href="/blog/quality-score-vodic">Kako poboljšati Quality Score</Link>.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">24</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">CTR optimization: najbrži način da podignete QS</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Expected CTR je najveći component Quality Score-a. Ako vaš CTR raste, QS prati. Kako povećati CTR?
          Bolje oglase (taktika #13-18), relevantnije keywords, i ad extensions.
        </p>
        <ul className="text-sm">
          <li>Benchmark: Search kampanje prosek 3-5% CTR, Brand kampanje 10-20%</li>
          <li>Ako je CTR ispod 2%, problem je u ad copy ili keyword relevantnosti</li>
          <li>Testirajte urgentne CTA-ove u headlines (&quot;Poruči danas&quot;, &quot;Besplatna dostava&quot;)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">25</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ad relevance signals: keyword → ad → landing page</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Google prati da li vaš oglas sadrži keyword (ili close variant), i da li landing page sadrži
          isti keyword. Što je chain relevantniji, viši je Ad Relevance score.
        </p>
        <ul className="text-sm">
          <li>Koristite DKI (Dynamic Keyword Insertion) u ad headlines da automatski insert keyword</li>
          <li>Landing page H1 i meta title treba da sadrže target keyword</li>
          <li>Nemojte slati sve keywords na homepage — kreirajte category/product-specific pages</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">26</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Landing page experience: brzina i mobile-friendly</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Landing Page Experience component gleda brzinu učitavanja, mobile-friendliness, i relevantnost
          content-a. Najčešći problem: spor sajt. Ako je load time &gt;3 sekunde, gubite poene.
        </p>
        <ul className="text-sm">
          <li>Testirajte brzinu: <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a></li>
          <li>Testirajte mobile experience: <a href="https://search.google.com/test/mobile-friendly" target="_blank" rel="noopener noreferrer">Mobile-Friendly Test</a></li>
          <li>Optimizujte slike (WebP format), smanjite JavaScript, koristite CDN</li>
          <li>CTA dugme mora biti above the fold na mobilnom</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Quality Score je historijski metric — promene koje napravite danas neće odmah podići QS.
          Treba 1-2 nedelje da Google akumulira dovoljno podataka. Budite strpljivi i konzistentni.
        </p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">27</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Historical QS recovery: kad da &quot;reset-ujete&quot; keyword</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ponekad keyword ima istoriju loših performansi (nizak CTR godinu dana), i uprkos vašim
          optimizacijama, QS ostaje nizak jer je historical data loš. Rešenje: &quot;reset&quot;.
        </p>
        <ul className="text-sm">
          <li>Pausajte keyword na 2 nedelje da &quot;old data&quot; izgubi težinu</li>
          <li>Ili: kreirajte nov keyword sa drugim match type-om (Exact → Phrase) — tretira se kao nov</li>
          <li>Kada re-aktivirate, osigurajte da landing page i ad copy su maksimalno relevantni</li>
        </ul>
      </div>

      <hr />

      <h2>Napredne taktike optimizacije</h2>

      <p>
        Kada ste pokrili fundamentals (struktura, keywords, oglasi, bidding, QS), sledeći nivo
        optimizacije uključuje audience layering, remarketing, i conversion tracking audite. Ovo su
        taktike koje odvajaju dobre naloge od odličnih.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika 28</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Audience layering na Search kampanjama</h3>
          <p className="text-sm text-gray-600 mb-3">
            Audience layering znači dodavanje audience segments (remarketing lists, demographics, in-market)
            na Search kampanje kao &quot;observation&quot; ili sa bid adjustments.
          </p>
          <ul className="text-sm mb-0">
            <li><strong>Remarketing audiences:</strong> +30% bid adjustment na prethodnе posetioce sajta</li>
            <li><strong>Customer Match:</strong> Upload email lista postojećih klijenata, bid agresivnije</li>
            <li><strong>In-Market:</strong> Layerite &quot;In-Market for X&quot; audiences i pratite da li konvertuju bolje</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika 29</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Remarketing optimization</h3>
          <p className="text-sm text-gray-600 mb-3">
            Remarketing kampanje imaju 2-3x viši CTR i 50-70% niži CPA od cold traffic. Ali samo ako
            pravilno segmentirate audience. Ne tretirajte sve posetioce isto.
          </p>
          <ul className="text-sm mb-0">
            <li><strong>Cart Abandoners:</strong> Odvojena kampanja, agresivna ponuda (&quot;10% off if you complete purchase&quot;)</li>
            <li><strong>Page Visitors:</strong> Različite poruke za homepage vs product page posetioce</li>
            <li><strong>Past Purchasers:</strong> Cross-sell/upsell kampanje sa novim proizvodima</li>
            <li>Kompletan vodič: <Link href="/blog/remarketing-vodic">Remarketing u Google Ads</Link></li>
          </ul>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">30</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Conversion Tracking audit (kvartalno)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Najveća greška koju vidim: conversion tracking nije podešen pravilno, ili prati pogrešne
          akcije. Ako algoritam uči na lošim podacima, optimizacija je uzaludna.
        </p>
        <ul className="text-sm">
          <li>Proverite da li su sve konverzije taggovane (Google Tag Manager ili gtag.js)</li>
          <li>Testirajte svaku konverziju ručno — napravite test transakciju/formu i proverite da li se evidentira</li>
          <li>Exclude internal traffic (vaša kancelarija) da ne &quot;zagađuje&quot; podatke</li>
          <li>Proverite conversion attribution model — Last Click vs Data-Driven (Data-Driven je bolji ako imate volume)</li>
          <li>Kompletan vodič: <Link href="/blog/conversion-tracking-vodic">Conversion Tracking u Google Ads</Link></li>
        </ul>
      </div>

      <hr />

      <h2>Nedeljni raspored optimizacije</h2>

      <p>
        Optimizacija nije ad hoc aktivnost — najbolji rezultati dolaze sa konzistentnim nedeljnim
        ritmom. Evo kako organizujem svoj optimization schedule za klijente:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-2 border-gray-900 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left font-heading font-bold">Dan</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-heading font-bold">Optimizacija</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-heading font-bold">Trajanje</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Ponedeljak</td>
              <td className="border border-gray-300 px-4 py-2">
                <strong>Search Terms Report review</strong> — dodavanje novih keywords i negativnih,
                pauziranje nerentabilnih terms
              </td>
              <td className="border border-gray-300 px-4 py-2">30-45 min</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Utorak</td>
              <td className="border border-gray-300 px-4 py-2">
                <strong>Performance review po kampanji</strong> — CPA/ROAS check, budget reallocation,
                pausiranje underperforming kampanja
              </td>
              <td className="border border-gray-300 px-4 py-2">20-30 min</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Sreda</td>
              <td className="border border-gray-300 px-4 py-2">
                <strong>Ad copy testing</strong> — review RSA ad performance, pause low performers, test nove
                headlines/descriptions
              </td>
              <td className="border border-gray-300 px-4 py-2">20 min</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Četvrtak</td>
              <td className="border border-gray-300 px-4 py-2">
                <strong>Bid strategy review</strong> — check Target CPA/ROAS achievement, adjust targets if needed
              </td>
              <td className="border border-gray-300 px-4 py-2">15 min</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Petak</td>
              <td className="border border-gray-300 px-4 py-2">
                <strong>Quality Score audit</strong> — identifikuj keywords sa QS &lt;5, optimizuj ad relevance
                i landing pages
              </td>
              <td className="border border-gray-300 px-4 py-2">20 min</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Mesečne optimizacije (jednom mesečno)</p>
        <p className="text-blue-800 text-sm mb-0">
          <strong>1. Conversion Tracking audit</strong> (provera da li sve konverzije prate pravilno) <br />
          <strong>2. Competitor analysis</strong> (Google Auction Insights — ko se pojavio/nestao) <br />
          <strong>3. Landing page optimization</strong> (A/B testiranje različitih verzija) <br />
          <strong>4. Audience segments review</strong> (remarketing lists, customer match updates)
        </p>
      </div>

      <hr />

      <h2>Često postavljana pitanja</h2>

      <div className="space-y-4 my-8">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko često treba optimizovati Google Ads naloge?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p>
              Za mali nalog (do €1000/mesec): nedeljno 1-2 sata optimizacije je dovoljno. Za veće naloge
              (€5000+/mesec): preporučujem dnevni check (15 min) + dublja nedeljne optimizacija (2-3 sata).
              Ključ je konzistentnost — bolje 30 minuta svakog ponedeljka nego 3 sata jednom mesečno.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koja je najvažnija optimizacija ako imam samo 1 sat nedeljno?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p>
              <strong>Search Terms Report review</strong> (taktika #6). Ovo je aktivnost sa najvišim ROI —
              eliminišete nerentabilne klikove i otkrivate nove profitable keywords. 80% optimizacije koje
              radim nedeljno je upravo ovo. Sve ostalo je nice-to-have, ali Search Terms mining je must-have.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li treba pauzirati kampanje noću ili vikendom?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p>
              Zavisi od industrije. <strong>B2B kampanje:</strong> često je pametno sniziti bidove za 50-70%
              vikendom jer decision makers ne rade. <strong>eCommerce:</strong> vikendi su često best performing
              dani (ljudi kupuju od kuće). Umesto pauziranja, koristite Ad Schedule bid adjustments (taktika #22)
              da smanjite bidove u poor performing hours ali zadržite prisustvo.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako znam da li moje optimizacije rade?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p>
              Pratite 3 metrike mesec-na-mesec: <strong>1) CPA ili ROAS</strong> (efficiency), <strong>2) Conversion
              volume</strong> (scale), <strong>3) Impression Share</strong> (coverage). Ako CPA pada ali i konverzije
              padaju — možda ste isuviše restriktivni. Ako CPA raste ali i ROAS raste — možda ste na dobrom tragu.
              Kontekst je bitan. Benchmark protiv prethodnog meseca, ali i godine-na-godinu za sezonalnost.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko košta profesionalna Google Ads optimizacija?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p>
              Freelance consultants naplaćuju €200-600/mesec za redovnu optimizaciju (u zavisnosti od obima naloga).
              Agencije 10-20% ad spend-a. DIY pristup košta vreme — realno 5-10 sati mesečno ako učite, ili 2-3 sata
              ako ste iskusni. Više o cenama: <Link href="/blog/koliko-kosta-google-ads">Koliko košta Google Ads</Link>.
              Ako vas zanima profesionalna pomoć, <Link href="/kontakt">zakažite konsultaciju</Link>.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Mogu li automatizovati optimizaciju pomoću pravila (Automated Rules)?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p>
              Da, ali oprezno. Automated Rules su odlični za repetitivne zadatke: pauziranje keywords sa CPA &gt;€100
              i 0 konverzija u poslednjih 30 dana, povećanje budžeta za kampanje sa &gt;90% impression share, itd.
              Ali ne možete automatizovati <strong>strategy</strong> — pravila ne razumeju kontekst. Koristite ih za
              busywork, ali zadržite strategic decision-making manual.
            </p>
          </div>
        </details>
      </div>

      <hr />

      {/* ── CTA boks ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mt-0 mb-4">
          Želite da profesionalac preuzme optimizaciju?
        </h2>
        <p className="text-lg mb-6 text-slate-300">
          Ako imate nalog koji troši €1000+/mesec i želite da izbegnete DIY stres, možemo razgovarati
          o ongoing management ili single audit-u. Specijalizujem se za eCommerce i lead gen kampanje.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/kontakt"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold px-6 py-3 rounded-lg transition-colors text-center no-underline"
          >
            Zakažite besplatan poziv
          </Link>
          <Link
            href="/usluge/google-ads-upravljanje"
            className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-heading font-semibold px-6 py-3 rounded-lg transition-colors text-center no-underline"
          >
            Pogledajte usluge
          </Link>
        </div>
      </div>

      {/* ── Povezani vodiči ── */}
      <div className="my-12">
        <h2 className="text-xl font-heading font-bold mb-6">Povezani vodiči</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/blog/quality-score-vodic"
            className="block bg-white border-2 border-gray-900 rounded-xl p-5 hover:shadow-card transition-shadow no-underline"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Optimizacija</p>
            <h3 className="text-base font-heading font-bold mt-0 mb-2 text-gray-900">
              Quality Score Vodič
            </h3>
            <p className="text-sm text-gray-600 mb-0">
              Kako podići Quality Score i smanjiti CPC kroz CTR, ad relevance i landing page optimizaciju.
            </p>
          </Link>

          <Link
            href="/blog/negativne-kljucne-reci"
            className="block bg-white border-2 border-gray-900 rounded-xl p-5 hover:shadow-card transition-shadow no-underline"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Optimizacija</p>
            <h3 className="text-base font-heading font-bold mt-0 mb-2 text-gray-900">
              Negativne Ključne Reči
            </h3>
            <p className="text-sm text-gray-600 mb-0">
              Kako negativne ključne reči štede budžet i poboljšavaju CTR — sa listama za razne industrije.
            </p>
          </Link>

          <Link
            href="/blog/remarketing-vodic"
            className="block bg-white border-2 border-gray-900 rounded-xl p-5 hover:shadow-card transition-shadow no-underline"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kampanje</p>
            <h3 className="text-base font-heading font-bold mt-0 mb-2 text-gray-900">
              Remarketing u Google Ads
            </h3>
            <p className="text-sm text-gray-600 mb-0">
              Kako ponovo targetirati posetioce sajta i cart abandoners kroz Search, Display i YouTube remarketing.
            </p>
          </Link>

          <Link
            href="/blog/google-shopping-vodic"
            className="block bg-white border-2 border-gray-900 rounded-xl p-5 hover:shadow-card transition-shadow no-underline"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Shopping</p>
            <h3 className="text-base font-heading font-bold mt-0 mb-2 text-gray-900">
              Google Shopping Kampanje
            </h3>
            <p className="text-sm text-gray-600 mb-0">
              Product feed optimizacija, bid strategije i Tiered Shopping pristup za eCommerce naloge.
            </p>
          </Link>
        </div>
      </div>

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
      {/* ── TL;DR boks ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Remarketing kampanje imaju 2-3x viši CTR i 50-70% niži CPA od hladnog
          saobraćaja. Ključ uspeha je segmentacija — ne tretirajte sve posetioce isto.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">96%</p>
            <p className="text-xs text-slate-400 mt-1">posetilaca ode bez konverzije</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">2-3x</p>
            <p className="text-xs text-slate-400 mt-1">viši CTR remarketing-a</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">50-70%</p>
            <p className="text-xs text-slate-400 mt-1">niži CPA</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">300-500%</p>
            <p className="text-xs text-slate-400 mt-1">prosečan ROI</p>
          </div>
        </div>
      </div>

      {/* ── Sekcija 1: Hook intro ── */}
      <h2>Zašto 96% posetilaca odlazi bez kupovine</h2>
      <p>
        Zamislite scenu: imate sajt, ulažete u Google Ads remarketing kampanje,
        posetilac dođe, pogleda proizvod ili uslugu — i ode. Bez kupovine, bez
        kontakta, bez traga. Statistika je neumoljiva: <strong>96 od 100
        posetilaca napusti sajt bez ikakve konverzije</strong>.
      </p>
      <p>
        To ne znači da vaš sajt ne valja. Ljudi su jednostavno zauzeti — otvorili
        su pet tabova, telefon im je zazvonio, odlučili su da &quot;razmisle još
        malo&quot;. Ali ono što <em>jeste</em> problem: većina oglašivača pusti te
        posetioce da odu i nikada ih više ne kontaktira.
      </p>
      <p>
        Tu remarketing menja igru. Umesto da trošite budžet isključivo na nove
        posetioce, remarketing kampanje vam omogućavaju da se vratite pred ljude
        koji su <strong>već pokazali interes</strong> — i to u trenutku kada su
        spremni da donesu odluku.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Iz mog iskustva</p>
        <p className="text-blue-800 text-sm">
          Nakon skoro decenije upravljanja Google Ads nalozima u regionu i
          inostranstvu, remarketing je najisplativiji tip kampanja koji možete
          pokrenuti. CTR je 2-3 puta viši od hladnog saobraćaja, a CPA je 50-70% niži.
        </p>
      </div>

      <p>
        U ovom vodiču prolazimo kroz sve što vam treba — od postavljanja prvog
        remarketing taga, preko segmentacije koja pravi razliku, do strategija
        koje u praksi donose rezultate. Bez teorije zarad teorije — samo ono što
        funkcioniše na realnim nalozima.
      </p>

      <hr />

      {/* ── Sekcija 2: Šta je remarketing ── */}
      <h2>Šta je remarketing i kako funkcioniše</h2>
      <p>
        <strong>Google Ads remarketing</strong> (ponekad nazvan i retargeting) je
        strategija koja vam omogućava da prikazujete oglase ljudima koji su već
        bili u kontaktu sa vašim biznisom. To mogu biti posetioci sajta, korisnici
        aplikacije, gledaoci YouTube videa ili ljudi sa vaše email liste.
      </p>
      <p>
        Princip je jednostavan, a efekat je snažan: umesto da gađate potpuno
        nepoznatu publiku, obraćate se ljudima koji vas već poznaju.
      </p>

      <h3>Kako remarketing funkcioniše korak po korak</h3>
      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Posetilac dođe na vaš sajt</strong> <span className="text-gray-500">— preko Google pretrage, oglasa ili direktno</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Google tag ga anonimno identifikuje</strong> <span className="text-gray-500">— pomoću cookie-ja ili login signala</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Posetilac odlazi bez konverzije</strong> <span className="text-gray-500">— što se dešava u 96% slučajeva</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Posetilac nastavlja da koristi internet</strong> <span className="text-gray-500">— pretražuje Google, gleda YouTube, čita portale</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Vaš remarketing oglas mu se prikazuje</strong> <span className="text-gray-500">— na pravom mestu u pravom trenutku</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Posetilac se vraća i konvertuje</strong> <span className="text-gray-500">— jer je podsetnik stigao kad je bio spreman</span></div>
          </div>
        </div>
      </div>

      <h3>Remarketing, retargeting ili prospecting — u čemu je razlika</h3>
      <p>
        Remarketing i retargeting su u praksi sinonimi. Google koristi termin
        &quot;remarketing&quot;, Meta (Facebook/Instagram) koristi &quot;retargeting&quot;
        — ali suština je ista: vraćate se pred ljude koji vas već znaju.
      </p>
      <p>
        Prospecting (cold targeting) je suprotnost — ciljate ljude koji nikada
        nisu čuli za vas. Evo direktnog poređenja:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Karakteristika</th>
              <th className="py-3 px-4 font-heading font-semibold">Remarketing</th>
              <th className="py-3 px-4 font-heading font-semibold">Prospecting (hladna publika)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Publika</td>
              <td className="py-3 px-4">Već vas poznaju</td>
              <td className="py-3 px-4">Ne znaju za vas</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Namera</td>
              <td className="py-3 px-4">Pokazali su interes</td>
              <td className="py-3 px-4">Pretpostavljena namera</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">CTR</td>
              <td className="py-3 px-4 text-green-700 font-semibold">2-3x viši</td>
              <td className="py-3 px-4">Osnovni nivo</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">CPA</td>
              <td className="py-3 px-4 text-green-700 font-semibold">50-70% niži</td>
              <td className="py-3 px-4">Osnovni nivo</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Obim</td>
              <td className="py-3 px-4">Ograničen (vaš saobraćaj)</td>
              <td className="py-3 px-4">Praktično neograničen</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Uloga</td>
              <td className="py-3 px-4">Zatvara prodaje</td>
              <td className="py-3 px-4">Donosi nove ljude</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Oba pristupa su neophodna. Prospecting puni levak, remarketing ga
        zatvara. Problem nastaje kada imate samo jedno od toga.
      </p>

      <hr />

      {/* ── Sekcija 3: Tipovi remarketing kampanja ── */}
      <h2>Tipovi remarketing kampanja u Google Ads</h2>
      <p>
        Google Ads nudi nekoliko vrsta remarketing kampanja, a svaka ima svoju
        namenu. Evo pregleda sa preporukom kada koristiti koji tip:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tip #1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Display remarketing</h3>
          <p className="text-sm text-gray-600 mb-0">
            Baneri na Google Display mreži — preko 2 miliona sajtova. Idealan kao
            prva remarketing kampanja za svaki nalog. Podseća posetioce da postojite.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tip #2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">RLSA (remarketing na pretrazi)</h3>
          <p className="text-sm text-gray-600 mb-0">
            Prilagođavate Search kampanje za ljude koji su već bili na sajtu —
            viši bidovi, šire ključne reči. Daje najbolji ROAS od svih tipova.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tip #3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Dinamički remarketing</h3>
          <p className="text-sm text-gray-600 mb-0">
            Automatski prikazuje tačne proizvode koje je posetilac gledao. Obavezan
            za eCommerce. Zahteva product feed u{" "}
            <Link href="/blog/google-shopping-vodic" className="underline">
              Google Merchant Center-u
            </Link>.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tip #4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">YouTube remarketing</h3>
          <p className="text-sm text-gray-600 mb-0">
            Video oglasi za ljude koji su posetili sajt, ili targetiranje gledaoca
            YouTube kanala. Odličan za branding i izgradnju poverenja.
          </p>
        </div>
      </div>
      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card my-4">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tip #5</p>
        <h3 className="text-base font-heading font-bold mt-0 mb-2">Customer Match</h3>
        <p className="text-sm text-gray-600 mb-0">
          Upload-ujete svoju email listu u Google Ads i targetirate te ljude preko
          Search-a, YouTube-a i Gmail-a. Savršen za win-back kampanje prema bivšim kupcima.
        </p>
      </div>

      <hr />

      {/* ── Sekcija 4: Kako postaviti remarketing ── */}
      <h2>Kako postaviti remarketing korak po korak</h2>
      <p>
        Postavljanje remarketing kampanje zahteva tri koraka: instalacija taga,
        povezivanje sa Google Analytics-om i verifikacija. Preporučujem da koristite
        Google Tag Manager (GTM) — daje vam fleksibilnost bez potrebe da dirate
        kod sajta svaki put.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <h3 className="mt-0 mb-4 font-heading font-bold">Korak 1: Instalacija Google Ads remarketing taga</h3>
        <p className="font-semibold mb-2">Preko Google Tag Manager-a (preporuka):</p>
        <ol className="mb-4">
          <li>Otvorite GTM i kreirajte novi tag</li>
          <li>Izaberite tip taga: <strong>Google Ads Remarketing</strong></li>
          <li>Unesite vaš Conversion ID (Google Ads → Tools → Audience Manager → Audience Sources)</li>
          <li>Postavite trigger na <strong>All Pages</strong></li>
          <li>Kliknite Publish</li>
        </ol>
        <p className="font-semibold mb-2">Direktna instalacija (alternativa):</p>
        <ol className="mb-0">
          <li>U Google Ads: Tools → Audience Manager → Audience Sources</li>
          <li>Pod Google Ads tag kliknite &quot;Set up tag&quot;</li>
          <li>Kopirajte kod i zalepite ga u <code>&lt;head&gt;</code> sekciju svake stranice</li>
        </ol>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Detaljan vodič</p>
        <p className="text-blue-800 text-sm mb-0">
          Za kompletno uputstvo o postavljanju tagova, pogledajte{" "}
          <Link href="/blog/conversion-tracking-vodic" className="underline">
            vodič za conversion tracking
          </Link>{" "}
          gde sve objašnjavam korak po korak.
        </p>
      </div>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <h3 className="mt-0 mb-4 font-heading font-bold">Korak 2: Povežite GA4 sa Google Ads-om</h3>
        <ol className="mb-0">
          <li>U Google Ads otvorite Tools → Linked Accounts</li>
          <li>Pronađite Google Analytics (GA4) i kliknite &quot;Link&quot;</li>
          <li>Izaberite vaš GA4 property</li>
          <li>Omogućite remarketing opciju</li>
        </ol>
      </div>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <h3 className="mt-0 mb-4 font-heading font-bold">Korak 3: Verifikacija i kreiranje lista</h3>
        <ol>
          <li>Idite na Audience Manager → Audience Sources</li>
          <li>Proverite da status taga bude <strong>&quot;Active&quot;</strong></li>
          <li>Sačekajte 24-48 sati da se lista počne puniti</li>
        </ol>
      </div>

      <p>
        Preporučujem da odmah kreirate ove osnovne remarketing liste:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Lista</th>
              <th className="py-3 px-4 font-heading font-semibold">Uslov</th>
              <th className="py-3 px-4 font-heading font-semibold">Trajanje</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Svi posetioci</td>
              <td className="py-3 px-4">URL sadrži: /</td>
              <td className="py-3 px-4">30 dana</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Gledaoci proizvoda</td>
              <td className="py-3 px-4">URL sadrži: /products/</td>
              <td className="py-3 px-4">14 dana</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Bez konverzije</td>
              <td className="py-3 px-4">Svi posetioci MINUS thank-you stranica</td>
              <td className="py-3 px-4">30 dana</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Napuštene korpe</td>
              <td className="py-3 px-4">URL sadrži: /cart/ MINUS /thank-you/</td>
              <td className="py-3 px-4">7 dana</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Prethodni kupci</td>
              <td className="py-3 px-4">URL sadrži: /thank-you/</td>
              <td className="py-3 px-4">180 dana</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Minimum veličina liste za aktiviranje: <strong>100 korisnika</strong> za Display,{" "}
          <strong>1.000</strong> za Search (RLSA) i YouTube.
        </p>
      </div>

      <hr />

      {/* ── Sekcija 5: Segmentacija ── */}
      <h2>Segmentacija — ključ uspeha remarketing kampanja</h2>
      <p>
        Ovo je deo gde većina oglašivača greši: kreiraju jednu remarketing listu
        (&quot;svi posetioci&quot;) i prikazuju im isti oglas. To je kao da u prodavnici
        kažete isto i onome ko je ušao prvi put i onome ko je stavio proizvod u
        korpu pa otišao.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Pravilna segmentacija je ono što razdvaja prosečan remarketing od
          onog koji donosi rezultate.
        </p>
      </div>

      <h3>Segmentacija po levku (funnel)</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Faza</th>
              <th className="py-3 px-4 font-heading font-semibold">Ko su</th>
              <th className="py-3 px-4 font-heading font-semibold">Strategija</th>
              <th className="py-3 px-4 font-heading font-semibold">Bid</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Vrh levka</td>
              <td className="py-3 px-4">Svi posetioci sajta</td>
              <td className="py-3 px-4">Generalna svest o brendu</td>
              <td className="py-3 px-4">Nizak</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Sredina levka</td>
              <td className="py-3 px-4">Gledali proizvod/uslugu</td>
              <td className="py-3 px-4">Relevantna poruka + benefiti</td>
              <td className="py-3 px-4">Srednji</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Dno levka</td>
              <td className="py-3 px-4">Napustili korpu / pricing</td>
              <td className="py-3 px-4">Urgentnost + ponuda</td>
              <td className="py-3 px-4">Visok</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Posle kupovine</td>
              <td className="py-3 px-4">Postojeći kupci</td>
              <td className="py-3 px-4">Cross-sell, upsell</td>
              <td className="py-3 px-4">Srednji</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Segmentacija po vremenu od posete</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Segment</th>
              <th className="py-3 px-4 font-heading font-semibold">Period</th>
              <th className="py-3 px-4 font-heading font-semibold">Pristup</th>
              <th className="py-3 px-4 font-heading font-semibold">Bid</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Vrući</span></td>
              <td className="py-3 px-4">1-3 dana</td>
              <td className="py-3 px-4">Direktan poziv na akciju</td>
              <td className="py-3 px-4">Najviši</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4"><span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded">Topli</span></td>
              <td className="py-3 px-4">4-14 dana</td>
              <td className="py-3 px-4">Podsetnik + prednosti</td>
              <td className="py-3 px-4">Visok</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Mlaki</span></td>
              <td className="py-3 px-4">15-30 dana</td>
              <td className="py-3 px-4">Ponovna angažovanost</td>
              <td className="py-3 px-4">Srednji</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Hladni</span></td>
              <td className="py-3 px-4">30-90 dana</td>
              <td className="py-3 px-4">Nova ponuda, promene</td>
              <td className="py-3 px-4">Nizak</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Segmentacija po ponašanju</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Ponašanje</th>
              <th className="py-3 px-4 font-heading font-semibold">Nivo namere</th>
              <th className="py-3 px-4 font-heading font-semibold">Poruka</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">Samo početna stranica</td>
              <td className="py-3 px-4">Nizak</td>
              <td className="py-3 px-4">Generalna svest o brendu</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Pregledao kategorije</td>
              <td className="py-3 px-4">Srednji</td>
              <td className="py-3 px-4">Prednosti konkretne kategorije</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">Gledao proizvod</td>
              <td className="py-3 px-4 text-green-700 font-semibold">Visok</td>
              <td className="py-3 px-4">Konkretni proizvod + ponuda</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Napustio korpu</td>
              <td className="py-3 px-4 text-green-700 font-semibold">Najviši</td>
              <td className="py-3 px-4">Urgentnost + popust</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">Tražio vaš brend</td>
              <td className="py-3 px-4">Brendovska namera</td>
              <td className="py-3 px-4">Poverenje + USP</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Primer kompletne remarketing kampanje</h3>
      <p>
        Ovako izgleda struktura kampanje kada se sva tri pristupa kombinuju:
      </p>
      <pre className="border-2 border-gray-900 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed">
        <code>{`Kampanja: Remarketing
│
├── Grupa oglasa: Napuštene korpe (1-7 dana)
│   ├── Lista: posetioci /cart/ MINUS /thank-you/
│   ├── Bid: Najviši
│   └── Poruka: "Završite kupovinu — besplatna dostava danas"
│
├── Grupa oglasa: Gledaoci proizvoda (7-14 dana)
│   ├── Lista: posetioci /products/
│   ├── Bid: Visok
│   └── Poruka: "Proizvod koji ste gledali vas čeka"
│
├── Grupa oglasa: Svi posetioci (14-30 dana)
│   ├── Lista: svi posetioci MINUS konvertovani
│   ├── Bid: Srednji
│   └── Poruka: "Otkrijte zašto nam klijenti veruju"
│
└── Grupa oglasa: Bivši kupci (90-180 dana)
    ├── Lista: posetioci /thank-you/
    ├── Bid: Srednji
    └── Poruka: "Pogledajte šta je novo u ponudi"`}</code>
      </pre>

      <hr />

      {/* ── Sekcija 6: 5 remarketing strategija ── */}
      <h2>5 remarketing strategija koje donose rezultate</h2>
      <p>
        Ovo su strategije koje koristim na klijentskim nalozima i koje
        konzistentno daju najbolje rezultate. Svaka je testirana na realnim
        kampanjama.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Vraćanje napuštenih korpi</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Najvrednija remarketing strategija za eCommerce. Oko 70% online kupovnih
          korpi biva napušteno, a remarketing može vratiti 10-15% tih kupaca.
        </p>
        <ul className="text-sm">
          <li>Kreirajte listu: posetioci /cart/ stranice MINUS /thank-you/</li>
          <li>Trajanje liste: 7 dana (kratak period = visoka namera)</li>
          <li>Ponudite konkretan razlog za povratak — besplatna dostava, mali popust, garancija</li>
          <li>Dinamički oglasi koji prikazuju tačne proizvode iz korpe daju najbolje rezultate</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">RLSA pojačanje bidova na pretrazi</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Strategija sa najboljim ROAS-om u mojoj praksi. Na postojeće
          Search kampanje dodate remarketing listu kao &quot;Observation&quot; i
          povećate bid za 30-100% za ljude koji su već posetili sajt.
        </p>
        <ul className="text-sm">
          <li>Rezultat: isti budžet, ali više konverzija od poznatih posetilaca</li>
          <li>Posebno efektno za brendovske i generičke pretrage</li>
          <li>Za napredni pristup — kreirajte posebnu RLSA kampanju sa širim ključnim rečima</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dinamički remarketing za online prodavnice</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Automatski prikazuje posetiocu tačne proizvode koje je gledao, sa
          aktuelnom cenom i slikom. Zahteva product feed i dynamic remarketing tag.
        </p>
        <ul className="text-sm">
          <li>Obavezan za eCommerce sa 50+ proizvoda</li>
          <li>Kombinujte sa promotivnim porukama (&quot;Sada -20%&quot;, &quot;Besplatna dostava&quot;)</li>
          <li>Kvalitetne slike proizvoda su ključne — loša slika ubija klik</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Sekvencijalne poruke</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Umesto da prikazujete isti oglas stalno, kreirajte seriju oglasa koja
          vodi korisnika kroz odluku:
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">Dan 1-3</span>
            <span>Podsetnik na proizvod/uslugu</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">Dan 4-7</span>
            <span>Socijalni dokaz (recenzije, broj klijenata)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">Dan 8-14</span>
            <span>Konkretna ponuda ili bonus</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Customer Match za vraćanje bivših kupaca</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Upload-ujte listu email adresa kupaca koji dugo nisu kupovali (6-12
          meseci) i targetirajte ih sa novim ponudama.
        </p>
        <ul className="text-sm">
          <li>Već znaju vaš brend i kvalitet</li>
          <li>Trošak akvizicije je minimalan u poređenju sa novim kupcem</li>
          <li>Cross-sell i upsell ponude imaju visoku stopu konverzije</li>
        </ul>
      </div>

      <hr />

      {/* ── Sekcija 7: Najčešće greške ── */}
      <h2>Najčešće greške u remarketing kampanjama i kako ih izbeći</h2>
      <p>
        Posle stotina audita Google Ads naloga, ovo su greške koje viđam
        najčešće. Dobra vest je da su sve lako popravljive.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Jedna lista za celu publiku</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Rešenje:</strong> Segmentirajte po ponašanju i vremenu.
              Čovek koji je napustio korpu zaslužuje drugačiju poruku od
              nekoga ko je samo pogledao početnu stranicu.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Bez ograničenja učestalosti prikazivanja</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Rešenje:</strong> Postavite frequency cap na 3-5 prikazivanja dnevno
              i 15-20 nedeljno. Bez toga, korisnik vidi vaš oglas 50 puta dnevno.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Prikazivanje oglasa konvertovanim korisnicima</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Rešenje:</strong> Uvek isključite ljude koji su već konvertovali
              (osim za cross-sell kampanje). Nema smisla trošiti budžet na nekoga
              ko je juče kupio isti proizvod.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Isti oglas mesecima</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Rešenje:</strong> Osvežite kreative svakih 2-4 nedelje.
              Čak i dobar oglas postane &quot;nevidljiv&quot; nakon previše prikazivanja.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Ista poruka za sve faze</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Rešenje:</strong> Prilagodite poruku segmentu — podsetnik za sveže
              posetioce, urgentnost za napuštene korpe, nova ponuda za hladnu publiku.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Previše kratak period liste</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Rešenje:</strong> Lista od 7 dana je ok za napuštene korpe, ali za
              generalne posetioce koristite 30-90 dana. Za B2B i do 180 dana.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Zanemarivanje privatnosti korisnika</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Rešenje:</strong> Obezbedite cookie consent banner i poštujte GDPR.
              Korisnici koji daju saglasnost su vrednija publika jer aktivno prihvataju komunikaciju.
            </p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Sekcija 8: Budžet ── */}
      <h2>Koliko budžeta izdvojiti za remarketing</h2>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Pravilo: 10-30% ukupnog Google Ads budžeta</p>
        <p className="text-sm text-yellow-900 mb-0">
          Tačan procenat zavisi od količine saobraćaja i veličine remarketing lista.
        </p>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Mesečni saobraćaj</th>
              <th className="py-3 px-4 font-heading font-semibold">Udeo za remarketing</th>
              <th className="py-3 px-4 font-heading font-semibold">Očekivani efekat</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Do 5.000 poseta</td>
              <td className="py-3 px-4">10-15%</td>
              <td className="py-3 px-4">Osnovno pokrivanje, Display fokus</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">5.000 - 20.000 poseta</td>
              <td className="py-3 px-4">15-20%</td>
              <td className="py-3 px-4">Segmentacija + RLSA</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">20.000+ poseta</td>
              <td className="py-3 px-4">20-30%</td>
              <td className="py-3 px-4">Puna segmentacija + dinamički remarketing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Zašto remarketing zaslužuje veći deo budžeta?</p>
        <p className="text-blue-800 text-sm mb-0">
          Proračun je jasan: ako vam prospecting kampanja donese CPA od 2.000 RSD,
          remarketing kampanja za iste konverzije obično donese CPA od 600-1.000 RSD.
          To znači <strong>2-3 puta više konverzija za isti novac</strong>.
          ROI od 300-500% je realan za dobro postavljene remarketing kampanje.
        </p>
      </div>

      <hr />

      {/* ── Sekcija 9: FAQ ── */}
      <h2>Često postavljana pitanja o remarketing-u</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko traje remarketing lista?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Možete postaviti trajanje od 1 do 540 dana. Podrazumevano je 30 dana.
            Za eCommerce, preporučujem 7 dana za napuštene korpe, 30 dana za opšte
            posetioce i 180 dana za bivše kupce.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko korisnika treba da imam na listi za početak?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum je 100 korisnika za Display kampanje i 1.000 za Search (RLSA) i
            YouTube. Ako vaš sajt ima mali saobraćaj, počnite sa Display
            remarketing-om dok lista naraste dovoljno za RLSA.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li remarketing funkcioniše nakon iOS ograničenja privatnosti?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Da, ali sa određenim ograničenjima. First-party podaci (vaš sajt, vaš
            tag) i dalje funkcionišu pouzdano. Third-party tracking je ograničen na
            Apple uređajima. Preporučujem kombinaciju Google Ads taga, GA4
            audience-a i Customer Match-a za najbolju pokrivenost.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li je remarketing napadan za korisnike?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Može biti — ako je loše postavljen. Tri stvari sprečavaju negativan
            utisak: frequency cap (3-5 prikazivanja dnevno), relevantne poruke
            prilagođene segmentu i redovno osvežavanje kreativa.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koja je razlika između remarketing-a i retargeting-a?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Praktično nikakva. Google koristi termin &quot;remarketing&quot;, Meta
            (Facebook/Instagram) koristi &quot;retargeting&quot;. Princip je
            identičan — prikazujete oglase ljudima koji su već bili u kontaktu sa
            vašim biznisom.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Mogu li koristiti remarketing za B2B, ne samo za online prodavnice?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Apsolutno. B2B remarketing je izuzetno efikasan jer su prodajni ciklusi
            duži (30-90+ dana), pa je potrebno više kontaktnih tačaka pre konverzije.
            Kombinacija RLSA kampanja i Display remarketing-a sa stručnim sadržajem
            (case study, vodič, webinar) odlično funkcioniše za B2B.
          </div>
        </details>
      </div>

      <hr />

      {/* ── Sekcija 10: Zaključak + CTA ── */}
      <h2>Zaključak — iskoristite potencijal posetilaca koji već dolaze</h2>
      <p>
        Google Ads remarketing nije komplikovan, ali zahteva promišljen pristup.
        Razlika između &quot;imamo remarketing&quot; i &quot;imamo remarketing
        koji donosi rezultate&quot; leži u tri stvari: pravilna segmentacija,
        prilagođene poruke i redovna optimizacija.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">Ključne stvari iz ovog vodiča:</p>
        <ul className="space-y-2 text-sm">
          <li>Remarketing kampanje imaju <strong>2-3x viši CTR</strong> i <strong>50-70% niži CPA</strong> od hladnog saobraćaja</li>
          <li>Segmentacija po ponašanju, vremenu i fazi levka pravi ogromnu razliku</li>
          <li>Izdvojite <strong>10-30% budžeta</strong> za remarketing — ROI od 300-500% je realan</li>
          <li>Izbegavajte jednu listu za sve, postavite frequency cap i osvežavajte kreative</li>
          <li>Pratite konverzije precizno — bez toga ne znate šta funkcioniše</li>
        </ul>
      </div>

      {/* ── CTA boks ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Želite da neko pregleda vaše remarketing kampanje?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Analiziraćemo vaš nalog i dati vam konkretne preporuke — besplatno, bez obaveza.
        </p>
        <Link
          href="/kontakt"
          className="btn-secondary inline-block"
        >
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      {/* ── Interni linkovi ── */}
      <h2>Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/remarketing" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing usluge</p>
          <p className="text-xs text-gray-500 mb-0">Kako vam mogu pomoći sa remarketing kampanjama</p>
        </Link>
        <Link href="/blog/conversion-tracking-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion tracking vodič</p>
          <p className="text-xs text-gray-500 mb-0">Zašto vaše kampanje ne rade bez pravilnog tracking-a</p>
        </Link>
        <Link href="/blog/google-shopping-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako povećati ROAS sa Shopping kampanjama</p>
        </Link>
        <Link href="/blog/kljucne-reci-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Ključne reči vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kompletan vodič za keyword istraživanje</p>
        </Link>
      </div>

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
    metaDescription: "30 proverenih taktika za optimizaciju Google Ads kampanja. Bid strategije, negativne ključne reči, Quality Score, landing page, A/B testiranje — sve iz prakse sa realnim klijentima.",
    content: <GoogleAdsOptimizacijaPost />
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
    date: "2026-02-11",
    category: "Google Ads",
    metaDescription:
      "Google Ads hvata kupce sa namerom, Meta Ads gradi svest. Poređenje po intent-u, CPC, conversion rate-u i ROI-u. Kada koristiti šta + kako ih kombinovati za maksimalan efekat.",
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
      "Naučite kako da pokrenete Google Ads remarketing kampanje koje vraćaju posetioce i smanjuju CPA za 50-70%. Vodič sa segmentacijom, strategijama i realnim primerima.",
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

  const faqSchema = slug === "google-ads-vs-meta" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Koji kanal je bolji za početnike?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Search je obično lakši za merenje direktnog ROI-a jer korisnici imaju visoku nameru. Meta zahteva jaku kreativu i dublje razumevanje audience-a. Ali zavisi od vašeg biznisa — ako prodajete vizuelno privlačne proizvode, Meta može biti prirodniji početak."
        }
      },
      {
        "@type": "Question",
        "name": "Koliki budžet treba za testiranje obe platforme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimum €800-1,500 ukupno (€500+ Google, €300+ Meta) za 60-90 dana da biste dobili smislene podatke za odlučivanje. Ispod ovoga, rezultati su često statistički besmisleni. Ako vam je budžet manji, startujte sa jednom platformom, optimizujte je, pa dodajte drugu kasnije."
        }
      },
      {
        "@type": "Question",
        "name": "Da li mi treba agencija koja radi obe platforme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Idealno da, jer strategija treba biti koordinisana — Meta puni levak, Google zatvara prodaje, remarketing se overlap-uje. Ali specijalizovani freelanceri ili manje agencije za svaki kanal mogu biti bolji u egzekuciji od generalist agencije koja radi sve."
        }
      },
      {
        "@type": "Question",
        "name": "Šta ako moj proizvod nije vizuelan — da li Meta ima smisla?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Meta i dalje može raditi kroz UGC content, testimonijale, before/after comparison, ili storytelling videe. B2B SaaS i tehnički proizvodi uspešno koriste Meta za thought leadership i webinar promocije. Ali realno, ako nemate vizuelnu priču, Google će verovatno biti efikasniji kanal."
        }
      },
      {
        "@type": "Question",
        "name": "Kako merim cross-channel uticaj?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bez nezavisnog tracking sistema, teško je. Google Analytics 4 je dobar početak (Advertising → Attribution → Conversion paths), ali ima ograničenja. Za ozbiljno multi-platform oglašavanje, razmotrite dedicated attribution tool poput Rockerbox, Triple Whale ili Northbeam."
        }
      },
      {
        "@type": "Question",
        "name": "Da li Facebook Ads još uvek rade posle iOS 14 update-a?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, ali nisu isti kao pre. iOS 14+ je smanjio tracking mogućnosti, što otežava atribuciju i targetiranje. Ali Meta i dalje radi — samo zahteva drugačiji pristup (Conversions API, server-side tracking, širi targeting). Mnogi biznisi i dalje imaju profitabilne Meta kampanje, posebno za remarketing i brand awareness."
        }
      }
    ]
  } : slug === "remarketing-vodic" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Koliko traje remarketing lista?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Možete postaviti trajanje od 1 do 540 dana. Podrazumevano je 30 dana. Za eCommerce, preporučuje se 7 dana za napuštene korpe, 30 dana za opšte posetioce i 180 dana za bivše kupce."
        }
      },
      {
        "@type": "Question",
        "name": "Koliko korisnika treba da imam na listi za početak remarketing-a?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimum je 100 korisnika za Display kampanje i 1.000 za Search (RLSA) i YouTube. Ako vaš sajt ima mali saobraćaj, počnite sa Display remarketing-om dok lista naraste dovoljno za RLSA."
        }
      },
      {
        "@type": "Question",
        "name": "Da li remarketing funkcioniše nakon iOS ograničenja privatnosti?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, ali sa određenim ograničenjima. First-party podaci (vaš sajt, vaš tag) i dalje funkcionišu pouzdano. Third-party tracking je ograničen na Apple uređajima. Preporučuje se kombinacija Google Ads taga, GA4 audience-a i Customer Match-a za najbolju pokrivenost."
        }
      },
      {
        "@type": "Question",
        "name": "Da li je remarketing napadan za korisnike?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Može biti ako je loše postavljen. Tri stvari sprečavaju negativan utisak: frequency cap (3-5 prikazivanja dnevno), relevantne poruke prilagođene segmentu i redovno osvežavanje kreativa."
        }
      },
      {
        "@type": "Question",
        "name": "Koja je razlika između remarketing-a i retargeting-a?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Praktično nikakva. Google koristi termin 'remarketing', Meta (Facebook/Instagram) koristi 'retargeting'. Princip je identičan — prikazujete oglase ljudima koji su već bili u kontaktu sa vašim biznisom."
        }
      },
      {
        "@type": "Question",
        "name": "Mogu li koristiti remarketing za B2B, ne samo za online prodavnice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apsolutno. B2B remarketing je izuzetno efikasan jer su prodajni ciklusi duži (30-90+ dana), pa je potrebno više kontaktnih tačaka pre konverzije. Kombinacija RLSA kampanja i Display remarketing-a sa stručnim sadržajem odlično funkcioniše za B2B."
        }
      }
    ]
  } : null;

  return (
    <div className="bg-slate-950 text-white">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
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





