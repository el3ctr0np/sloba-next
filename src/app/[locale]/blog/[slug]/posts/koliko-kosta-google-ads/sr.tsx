import { Link } from "@/i18n/navigation";

export default function KolikoKostaGoogleAdsPost() {
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
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "agencija-vs-freelancer" } }} className="underline">
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
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="underline">vodiču za conversion tracking</Link>.
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
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-vs-meta" } }} className="underline">Google Ads vs Meta Ads poređenju</Link>.
          </div>
        </details>
      </div>

      {/* ── Povezani vodiči ── */}
      <h2>Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "agencija-vs-freelancer" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Agencija vs. Freelancer vs. In-House</p>
          <p className="text-xs text-gray-500 mb-0">Detaljno poređenje svih opcija za upravljanje kampanjama</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">20 grešaka koje vas koštaju novca</p>
          <p className="text-xs text-gray-500 mb-0">Najčešće greške u Google Ads kampanjama</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion tracking vodič</p>
          <p className="text-xs text-gray-500 mb-0">Pravilno postavljanje tracking-a za merenje rezultata</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-vs-meta" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
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

