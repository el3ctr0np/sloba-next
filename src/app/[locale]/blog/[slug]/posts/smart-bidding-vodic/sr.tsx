import { Link } from "@/i18n/navigation";

export default function SmartBiddingVodicSR() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko — Smart Bidding 2026</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google Smart Bidding analizira milione signala u realnom vremenu da bi optimizovao svaki oglas.
          95% uspešnih naloga koristi neku formu automatizovanog biddinga — ali samo 30% ga pravilno podesi.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">70M+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">signala po aukciji</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">+20%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">tipičan lift konverzija</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7–14</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">dana learning period</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">6</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">bidding strategija u 2026</p>
          </div>
        </div>
        <p className="text-sm text-slate-400 mt-6 mb-0 border-t border-slate-700 pt-4">
          Podaci: Google Ads Help Center, Google Marketing Live 2025, iskustvo iz 10+ naloga (2024–2026).
        </p>
      </div>

      {/* Brzi odgovor — featured snippet block */}
      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-5 md:p-6 my-8">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">Brzi odgovor</p>
        <p className="text-base md:text-lg font-heading font-semibold text-blue-900 mb-0">
          Smart Bidding je skup Google Ads automatizovanih bid strategija koje koriste mašinsko učenje
          da optimizuju licitacije u realnom vremenu za svaku aukciju, sa ciljem maksimiziranja konverzija
          ili vrednosti konverzija unutar zadatog budžeta ili CPA/ROAS cilja.
        </p>
      </div>

      <p>
        Manual bidding je mrtav za 95% naloga u 2026, ali to ne znači da treba slepo uključiti Smart Bidding
        i zaboraviti na njega. Razlika između naloga koji sa Smart Biddingom ostvaruju 4x ROAS i onih koji
        troše budžet bez rezultata nije u samoj strategiji — već u tome kako je postavljena, kada je primenjena
        i koliko se razume šta se dešava ispod haube.
      </p>
      <p>
        Iz iskustva sa 10+ Google Ads naloga — od UK skincare i fashion eCommerce-a do srpskih lokalnih
        servisa i globalnih moto-delova namenjenih USA tržištu — svaka strategija je testirana u različitim
        kontekstima. Ono što radi za veliki eCommerce nalog sa 500+ konverzija mesečno ne radi identično
        za lokalnu uslugu sa 30 poziva mesečno. Kontekst je sve.
      </p>
      <p>
        Ovaj vodič pokriva svaku Smart Bidding strategiju, kada je koristiti, česte greške i konkretne
        primere iz realnih naloga — sa posebnim osvrtom na eCommerce, Lead Gen i lokalne usluge.
      </p>

      <hr />

      <h2>Šta je Smart Bidding i kako AI radi</h2>

      <p>
        Smart Bidding je podskup automatizovanih bid strategija u Google Ads-u koje koriste aukcijsko mašinsko
        učenje — to znači da algoritam donosi odluku o licitaciji u trenutku svake aukcije, a ne unapred
        po rasporedu koji vi zadajete. Svaki put kada korisnik pretražuje i vaš oglas ulazi u aukciju,
        Google analizira desetine miliona signala u milisekundama i izračunava optimalnu licitaciju.
      </p>

      <p>
        Koji signali ulaze u ovu kalkulaciju? Google zvanično navodi sledeće kategorije:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Kategorija signala</th>
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Primeri</th>
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Uticaj</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Uređaj</td>
              <td className="py-3 px-4 border-b border-gray-200">Desktop, mobile, tablet, tip browsera</td>
              <td className="py-3 px-4 border-b border-gray-200 text-green-700 font-semibold">Visok</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Lokacija</td>
              <td className="py-3 px-4 border-b border-gray-200">Fizička lokacija, IP, jezik, lokalni trendovi</td>
              <td className="py-3 px-4 border-b border-gray-200 text-green-700 font-semibold">Visok</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Vreme</td>
              <td className="py-3 px-4 border-b border-gray-200">Dan u nedelji, doba dana, sezona</td>
              <td className="py-3 px-4 border-b border-gray-200 text-orange-600 font-semibold">Srednji</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Publika</td>
              <td className="py-3 px-4 border-b border-gray-200">Remarketing liste, custom intent, demografija</td>
              <td className="py-3 px-4 border-b border-gray-200 text-green-700 font-semibold">Visok</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Pretraga</td>
              <td className="py-3 px-4 border-b border-gray-200">Upit, match type, istorija pretrage korisnika</td>
              <td className="py-3 px-4 border-b border-gray-200 text-green-700 font-semibold">Visok</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Browser / OS</td>
              <td className="py-3 px-4 border-b border-gray-200">Chrome, Safari, Firefox, iOS vs Android</td>
              <td className="py-3 px-4 border-b border-gray-200 text-gray-500">Nizak</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Kontekst sajta</td>
              <td className="py-3 px-4 border-b border-gray-200">Tema stranice na kojoj se oglas prikazuje (Display)</td>
              <td className="py-3 px-4 border-b border-gray-200 text-orange-600 font-semibold">Srednji</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Aktivnost u listi</td>
              <td className="py-3 px-4 border-b border-gray-200">Prethodni poseti, interakcije sa vašim sajtom</td>
              <td className="py-3 px-4 border-b border-gray-200 text-green-700 font-semibold">Visok</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Ključna razlika između Smart Biddinga i manual bid adjustments: vi možete podesiti bid adjustment
        za mobilne uređaje od -20%, ali algoritam može u realnom vremenu da prepozna da određeni korisnik
        na mobilnom telefonu u 19:00 u četvrtak, koji je već jednom posetio vaš sajt, ima 3x veću
        verovatnoću konverzije od prosečnog korisnika — i da automatski poveća licitaciju samo za njega.
        Granularnost je na nivou koji manuelno nije moguće postići.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-5 my-6">
        <p className="font-semibold text-yellow-900 text-sm mb-1">Važno razumeti: "Smart Bidding" vs "Automated Bidding"</p>
        <p className="text-yellow-800 text-sm mb-0">
          Sve Smart Bidding strategije su automatizovane, ali nisu sve automatizovane strategije Smart Bidding.
          Maximize Clicks i Target Impression Share su automatizovane, ali ne koriste conversion signals —
          pa nisu deo Smart Bidding grupe. Pravi Smart Bidding su: Maximize Conversions, Maximize Conversion Value,
          Target CPA i Target ROAS.
        </p>
      </div>

      <hr />

      <h2>6 Bidding strategija — Ko, Šta, Kada</h2>

      <p>
        Google Ads nudi šest primarnih bid strategija u 2026. Svaka ima svoju svrhu, optimalan kontekst
        i situacije u kojima ne treba da je koristite. Iz iskustva sa 10+ naloga, evo iskrena ocena svake.
      </p>

      <div className="space-y-5 my-8">

        <div className="bg-white border-2 border-blue-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div className="flex-1">
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Maximize Conversions</h3>
              <p className="text-sm text-gray-700 mb-2">
                Troši ceo budžet da bi ostvario što više konverzija, bez cenovnog cilja. Algoritam
                slobodno licitira — može platiti visok CPA ako smatra da će doći do konverzije.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-800 mb-1">Kada koristiti</p>
                  <ul className="text-xs text-green-900 space-y-1 mb-0">
                    <li>Novi nalozi bez podataka (&lt;50 konverzija/mes)</li>
                    <li>Novi lokalni uslužni nalog: odmah po launch-u</li>
                    <li>Kampanje koje ulaze u novi segment publike</li>
                    <li>Kada je cilj volumen, ne efikasnost</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-800 mb-1">Kada NE koristiti</p>
                  <ul className="text-xs text-red-900 space-y-1 mb-0">
                    <li>Kad je CPA kritičan za profitabilnost</li>
                    <li>Budžet koji nema fiksni mesečni cap</li>
                    <li>eCommerce bez praćenja vrednosti</li>
                    <li>Kad su konverzije loše definisane</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-9 h-9 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div className="flex-1">
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Maximize Conversion Value</h3>
              <p className="text-sm text-gray-700 mb-2">
                Troši ceo budžet da bi ostvario što veću ukupnu vrednost konverzija. Razlika od Maximize
                Conversions: ovde algoritam preferira skuplje konverzije, a ne više konverzija. Zahteva
                praćenje vrednosti konverzija (obavezno za eCommerce).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-800 mb-1">Kada koristiti</p>
                  <ul className="text-xs text-green-900 space-y-1 mb-0">
                    <li>eCommerce sa različitim cenama proizvoda</li>
                    <li>Kad je prosečna vrednost narudžbine viša priority</li>
                    <li>Pre prelaska na tROAS (data prikupljanje)</li>
                    <li>Novi eCommerce nalog koji prati revenue</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-800 mb-1">Kada NE koristiti</p>
                  <ul className="text-xs text-red-900 space-y-1 mb-0">
                    <li>Lead Gen (sve konverzije iste vrednosti)</li>
                    <li>Lokalne usluge (pozivi su pozivi)</li>
                    <li>Kad ne pratite vrednost konverzija</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-9 h-9 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div className="flex-1">
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Target CPA (tCPA)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Algoritam pokušava da ostvari konverzije po zadatom prosečnom CPA cilju. Neke konverzije
                će koštati više, neke manje — ali prosek treba da bude oko zadatog cilja. Realna strategija
                za zrele Lead Gen naloge.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-800 mb-1">Kada koristiti</p>
                  <ul className="text-xs text-green-900 space-y-1 mb-0">
                    <li>50+ konverzija u poslednjih 30 dana (min)</li>
                    <li>Stabilan CPA istorijat (2+ nedelje)</li>
                    <li>Lead Gen gde je vrednost leada poznata</li>
                    <li>Lokalni servis (towing): ciljati €15–20/poziv</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-800 mb-1">Kada NE koristiti</p>
                  <ul className="text-xs text-red-900 space-y-1 mb-0">
                    <li>Novi nalozi bez podataka</li>
                    <li>CPA cilj znatno ispod realnog proseka</li>
                    <li>eCommerce sa različitim AOV-om</li>
                    <li>Manje od 30 konverzija/mesec</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-yellow-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-9 h-9 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div className="flex-1">
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Target ROAS (tROAS)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Algoritam optimizuje ka zadatom prinosu od ad spenda (prihod ÷ trošak oglasa × 100%).
                Najmoćnija strategija za zrele eCommerce naloge — ali i najzahtevnija po pitanju data
                kvaliteta. Tipično se uvodi od meseca 4 napred kada su podaci stabilni.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-800 mb-1">Kada koristiti</p>
                  <ul className="text-xs text-green-900 space-y-1 mb-0">
                    <li>50+ konverzija + praćenje vrednosti (min)</li>
                    <li>eCommerce sa konzistentnim AOV</li>
                    <li>Znate marže i ciljni ROAS</li>
                    <li>UK skincare primer: tROAS 500% (za profitabilnost)</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-800 mb-1">Kada NE koristiti</p>
                  <ul className="text-xs text-red-900 space-y-1 mb-0">
                    <li>Lead Gen (nema konverzijsku vrednost u realu)</li>
                    <li>Manje od 50 konverzija/mesec</li>
                    <li>ROAS cilj nerealno visok (algoritam se "zamrzava")</li>
                    <li>Novi nalozi u fazi prikupljanja podataka</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-orange-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-9 h-9 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div className="flex-1">
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Maximize Clicks</h3>
              <p className="text-sm text-gray-700 mb-2">
                Automatizovana (ali ne Smart Bidding) strategija — troši budžet za što više klikova.
                Ne koristi conversion signals. Korisna za brand awareness i keyword istraživanje,
                ali bez optimizacije ka ciljevima biznisa.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-800 mb-1">Kada koristiti</p>
                  <ul className="text-xs text-green-900 space-y-1 mb-0">
                    <li>Novi nalog — prikupljanje Search Terms podataka</li>
                    <li>Brand awareness kampanje</li>
                    <li>Testiranje novih keyword setova</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-800 mb-1">Kada NE koristiti</p>
                  <ul className="text-xs text-red-900 space-y-1 mb-0">
                    <li>Performance nalozi gde je cilj prodaja</li>
                    <li>Lead Gen kampanje</li>
                    <li>Dugoročno — zameni sa Smart Bidding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-9 h-9 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div className="flex-1">
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Manual CPC (+ Enhanced CPC)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Vi zadajete licitaciju za svaku ključnu reč. Enhanced CPC je hibrid — vi zadajete base bid,
                ali Google može povećati do 30% za aukcije sa višom verovatnoćom konverzije. Manual CPC
                je relevantan za specifične situacije, ali za 95% naloga postoje bolje opcije.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-800 mb-1">Kada koristiti</p>
                  <ul className="text-xs text-green-900 space-y-1 mb-0">
                    <li>Veoma mali budžeti (&lt;€100/mes) gde algoritam nema dovoljno prostora</li>
                    <li>Hiperspecifičan targeting gde svaki klik mora biti odobren</li>
                    <li>Tranzicija između strategija (kratkoročno)</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-800 mb-1">Kada NE koristiti</p>
                  <ul className="text-xs text-red-900 space-y-1 mb-0">
                    <li>Gotovo uvek u 2026 — bolje opcije postoje</li>
                    <li>Nalozi sa dovoljno konverzija za Smart Bidding</li>
                    <li>eCommerce i Lead Gen sa istorijatom podataka</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <hr />

      <h2>Decision Framework — Koju Strategiju Izabrati</h2>

      <p>
        Najčešće pitanje koje dobijam: "Koju bidding strategiju da koristim?" Odgovor zavisi od tri faktora:
        broj konverzija mesečno, cilj kampanje i da li pratite vrednost konverzija. Evo decision tree-a koji
        koristim za svaki novi nalog koji preuzmem.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 my-8">
        <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-4">Decision Tree — Bidding Strategija</p>

        <div className="space-y-4">
          <div className="border border-slate-600 rounded-lg p-4">
            <p className="text-sm font-bold text-yellow-400 mb-2">Korak 1: Koliko konverzija imaš mesečno?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs font-bold text-blue-300 mb-1">&lt;30 konverzija/mes</p>
                <p className="text-xs text-slate-300 mb-0">→ Maximize Conversions (bez tCPA cilja)</p>
              </div>
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs font-bold text-blue-300 mb-1">30–80 konverzija/mes</p>
                <p className="text-xs text-slate-300 mb-0">→ Maximize Conversions → prelaz na tCPA</p>
              </div>
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs font-bold text-blue-300 mb-1">80+ konverzija/mes</p>
                <p className="text-xs text-slate-300 mb-0">→ tCPA ili tROAS (zavisno od step 2)</p>
              </div>
            </div>
          </div>

          <div className="border border-slate-600 rounded-lg p-4">
            <p className="text-sm font-bold text-yellow-400 mb-2">Korak 2: Pratiš li vrednost konverzija?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs font-bold text-blue-300 mb-1">DA (eCommerce revenue tracking)</p>
                <p className="text-xs text-slate-300 mb-0">→ Maximize Conv. Value → tROAS</p>
              </div>
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs font-bold text-blue-300 mb-1">NE (Lead Gen / Lokalne usluge)</p>
                <p className="text-xs text-slate-300 mb-0">→ Maximize Conversions → tCPA</p>
              </div>
            </div>
          </div>

          <div className="border border-slate-600 rounded-lg p-4">
            <p className="text-sm font-bold text-yellow-400 mb-2">Korak 3: Koji je primarni cilj?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs font-bold text-blue-300 mb-1">Volumen konverzija</p>
                <p className="text-xs text-slate-300 mb-0">→ Maximize Conversions / tCPA</p>
              </div>
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs font-bold text-blue-300 mb-1">Vrednost / ROAS</p>
                <p className="text-xs text-slate-300 mb-0">→ Maximize Conv. Value / tROAS</p>
              </div>
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs font-bold text-blue-300 mb-1">Vidljivost / awareness</p>
                <p className="text-xs text-slate-300 mb-0">→ Target Impression Share</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2>Conversion Volume Requirements — Mit vs Realnost</h2>

      <p>
        Zvanično Google preporučuje <strong>minimum 50 konverzija u 30 dana</strong> pre prelaska na tCPA ili tROAS.
        Ovo je tačno kao teorijski optimum, ali nije apsolutno pravilo. Iz prakse sa 10+ naloga, realnost je nešto šira.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Strategija</th>
              <th className="py-3 px-4 text-center font-heading font-semibold text-gray-900">Google preporuka</th>
              <th className="py-3 px-4 text-center font-heading font-semibold text-gray-900">Realni minimum</th>
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Napomena</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Maximize Conversions</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Bez min.</td>
              <td className="py-3 px-4 text-center border-b border-gray-200 text-green-700 font-semibold">0+ (odmah)</td>
              <td className="py-3 px-4 border-b border-gray-200">Idealno za nove naloge</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Target CPA</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">50/30d</td>
              <td className="py-3 px-4 text-center border-b border-gray-200 text-orange-600 font-semibold">30–40/30d</td>
              <td className="py-3 px-4 border-b border-gray-200">Ispod 30: Maximize Conv. je bolji</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Target ROAS</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">50/30d</td>
              <td className="py-3 px-4 text-center border-b border-gray-200 text-orange-600 font-semibold">30–50/30d</td>
              <td className="py-3 px-4 border-b border-gray-200">Treba i vrednost konverzija</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Maximize Conv. Value</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Bez min.</td>
              <td className="py-3 px-4 text-center border-b border-gray-200 text-green-700 font-semibold">15–20/30d</td>
              <td className="py-3 px-4 border-b border-gray-200">Ali treba vrednost konverzija</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Iz iskustva sa lokalnim vodoinstalaterskim nalogom u Beogradu — lansiran sa Maximize Conversions strategijom.
        U prvom mesecu: 22 poziva. Pre 30 poziva nema smisla ići na tCPA jer algoritam nema dovoljno podataka
        da postavi pouzdan cilj. Maximize Conversions funkcioniše dobro i sa 20 konverzija mesečno.
      </p>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card my-6">
        <p className="text-sm font-bold text-gray-900 mb-3">POAS vs ROAS — Važna distinkcija za eCommerce</p>
        <p className="text-sm text-gray-700 mb-3">
          ROAS (Return on Ad Spend) meri prihod ÷ trošak oglasa. Ali prihod nije profit.
          <strong> POAS (Profit on Ad Spend)</strong> = profit ÷ trošak oglasa — to je cifra koja zaista meri
          zdravlje kampanje. Za jedan UK skincare nalog, cilj nije bio maksimalni ROAS, već POAS koji osigurava profitabilnost
          uz određen nivo ad spenda.
        </p>
        <p className="text-sm text-gray-700 mb-0">
          Praktično: ako je vaša bruto marža 40%, a ROAS je 3x — vi ste na granici profitabilnosti.
          Ako ROAS poraste na 5x sa 30% manjim volumenom, možda zarađujete više. tROAS strategija
          treba da bude kalibrisana na osnovu marže, a ne na osnovu industrijskog proseka.
        </p>
      </div>

      <hr />

      <h2>Learning Period — Šta Očekivati i Šta Ne Raditi</h2>

      <p>
        Learning period je jedan od najslabije shvaćenih aspekata Smart Biddinga. Kada pokrenete novu kampanju
        ili promenite bid strategiju, Google algoritam prolazi kroz fazu učenja koja tipično traje
        <strong> 7–14 dana</strong>. Tokom ovog perioda, performance može biti nestabilan — viši CPA, niži ROAS,
        neravnomerna potrošnja.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-5 my-6">
        <p className="font-semibold text-red-900 text-sm mb-2">Najčešća greška: intervenisanje tokom learning perioda</p>
        <p className="text-red-800 text-sm mb-0">
          Svaka promena tokom learning perioda restartuje taj period. Promena budžeta za više od 20%,
          promena tCPA cilja, dodavanje novih ključnih reči, pauziranje ad grupe — sve ovo može restartovati
          learning. Rezultat: nalog je permanentno u learning periodu i nikada ne dostigne stabilni performance.
          Iz iskustva: dajte algortimu minimum 14 dana bez intervencija pre procene.
        </p>
      </div>

      <p>
        Šta očekivati po danima:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Period</th>
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Šta se dešava</th>
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Šta raditi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Dan 1–3</td>
              <td className="py-3 px-4 border-b border-gray-200">Algoritam eksploriše, CPA može biti 2–3x viši</td>
              <td className="py-3 px-4 border-b border-gray-200">NE intervenisati</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Dan 4–7</td>
              <td className="py-3 px-4 border-b border-gray-200">Algoritam počinje da nalazi obrasce</td>
              <td className="py-3 px-4 border-b border-gray-200">Pratiti, ne menjati ključne parametre</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Dan 8–14</td>
              <td className="py-3 px-4 border-b border-gray-200">Performance se stabilizuje, CPA normalizuje</td>
              <td className="py-3 px-4 border-b border-gray-200">Bezbedno je oceniti rezultate</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Dan 15–30</td>
              <td className="py-3 px-4 border-b border-gray-200">Pun potencijal — bazni period za optimizaciju</td>
              <td className="py-3 px-4 border-b border-gray-200">Postepena korekcija ciljeva (max 20%/promena)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Sezonske korekcije: Google Ads nudi <strong>Seasonality Adjustments</strong> u Bid Strategies delu
        interfejsa — možete najaviti period povećanog ili smanjenog konverzijskog rata (Black Friday,
        raspust) i algoritam to uzima u obzir. Korisno za eCommerce sa jasnim sezonskim pikovima.
      </p>

      <hr />

      <h2>Česte Greške u Smart Biddingu — Iz Audita 10+ Naloga</h2>

      <p>
        Svaki put kada preuzmem novi nalog, prolazim kroz bidding setup. Evo 8 grešaka koje vidim
        najčešće — i svaka od njih direktno utiče na performance:
      </p>

      <div className="space-y-4 my-8">

        <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">1. tCPA cilj postavljen prenisko od prvog dana</p>
          <p className="text-sm text-gray-600 mb-0">
            Najčešća greška. Neko želi CPA od €5 ali je istorijski prosek bio €15. Algoritam ne može
            naći dovoljno aukcija po toj ceni, potrošnja pada na nulu ili na minimum. Pravilo: postavi
            tCPA 20–30% iznad aktuelnog proseka, pa ga postepeno spuštaj.
          </p>
        </div>

        <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">2. Promena strategije svake nedelje</p>
          <p className="text-sm text-gray-600 mb-0">
            Maximize Conversions nedelju, tCPA sledeću, Manual CPC posle toga. Algoritam nikada
            ne izlazi iz learning perioda. Stabilnost je preduslov za Smart Bidding performance.
            Minimalno 3–4 nedelje po strategiji pre evaluacije.
          </p>
        </div>

        <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">3. Portfolio bidding bez razumevanja</p>
          <p className="text-sm text-gray-600 mb-0">
            Portfolio bid strategija omogućava jednu zajedničku strategiju za više kampanja. Korisno
            za naloge sa malim brojem konverzija po kampanji — algoritam uči iz svih kampanja zajedno.
            Ali ako su kampanje sa veoma različitim ciljevima, portfoliom se gubi granularnost.
          </p>
        </div>

        <div className="bg-white border-l-4 border-orange-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">4. tROAS na nalog sa manje od 30 konverzija</p>
          <p className="text-sm text-gray-600 mb-0">
            tROAS zahteva ne samo konverzije već i vrednost konverzija. Sa 20 konverzija mesečno
            i tROAS ciljem od 400%, algoritam je toliko restriktivan da gotovo ne troši budžet.
            Maximize Conversion Value bez tROAS cilja je bolji izbor u toj fazi.
          </p>
        </div>

        <div className="bg-white border-l-4 border-orange-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">5. Zanemarivanje Bid Strategy Report-a</p>
          <p className="text-sm text-gray-600 mb-0">
            U okviru kampanje, postoji Bid Strategy Report koji pokazuje kako algoritam performira
            u odnosu na vaš cilj. Mnogi ga nikad ne otvore. Ovo je najdirektniji uvid u to da li
            je cilj ostvariv ili ne — ako je "ograničen budžetom", povećajte budžet ili prilagodite cilj.
          </p>
        </div>

        <div className="bg-white border-l-4 border-orange-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">6. Uključivanje Smart Bidding bez konverzijskog tracking-a</p>
          <p className="text-sm text-gray-600 mb-0">
            Smart Bidding bez tačnog tracking-a je gore nego Manual CPC. Algoritam optimizuje
            ka pogrešnim signalima. Proverite da li su konverzije ispravno postavljene pre aktivacije.
            Konverzije moraju biti Primary (ne Secondary) za Smart Bidding da ih koristi.
          </p>
        </div>

        <div className="bg-white border-l-4 border-yellow-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">7. Ignorisanje Auction Insights tokom promene strategije</p>
          <p className="text-sm text-gray-600 mb-0">
            Auction Insights pokazuje vaš Impression Share u odnosu na konkurenciju. Ako ste prešli
            na tROAS i IS pao sa 60% na 20%, to znači da algoritam smatra da mnoge aukcije nisu
            profitabilne po vašem cilju. Možda je cilj previše agresivan ili budžet premali.
          </p>
        </div>

        <div className="bg-white border-l-4 border-yellow-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">8. Promena budžeta za 50%+ odjednom</p>
          <p className="text-sm text-gray-600 mb-0">
            Drastična promena budžeta (gore ili dole) može destabilizovati algoritam. Preporuka:
            max 15–20% promene po koraku, sa razmakom od 5–7 dana između promena. Za sezonske
            povećanje (Black Friday) koristite Seasonality Adjustments umesto direktne promene budžeta.
          </p>
        </div>

      </div>

      <hr />

      <h2>Smart Bidding po Tipu Biznisa — Tri Različita Pristupa</h2>

      <p>
        Ne postoji jedna veličina koja odgovara svima. Strategija za eCommerce brod razlikuje se od
        strategije za lokalnog vodoinstalatera. Evo kako pristupam Smart Biddingu za tri tipa naloga
        koje vodim.
      </p>

      <h3>eCommerce nalozi — primer UK skincare + globalnih moto delova + srpskog multi-category-ja</h3>

      <p>
        eCommerce je idealan kontekst za Smart Bidding jer postoji jasna konverzijska vrednost —
        revenue od svake narudžbine. Progresija je gotovo uvek ista:
      </p>

      <ol>
        <li><strong>Mesec 1–2:</strong> Maximize Conversion Value (bez tROAS) — prikupljanje podataka o vrednosti</li>
        <li><strong>Mesec 3:</strong> Postepeno uvođenje tROAS cilja (20–30% iznad aktuelnog ROAS-a)</li>
        <li><strong>Mesec 4+:</strong> Postepeno spuštanje tROAS ka ciljanom nivou</li>
        <li><strong>Zrela faza:</strong> tROAS + Portfolio bidding za branded vs non-branded kampanje odvojeno</li>
      </ol>

      <p>
        Za UK skincare nalog, koristimo tROAS strategiju sa ciljom koji reflektuje POAS — ne samo ROAS.
        Razlog: njihova bruto marža varira po kategoriji proizvoda, pa je cilj kalibriran na produkt miks
        koji donosi profitabilnost na nivou naloga, ne samo prihod.
      </p>

      <p>
        <strong>Tiered Shopping framework</strong> (ličana inovacija iz prakse): odvojene kampanje za
        New Customers, Returning Customers i Feeder kampanju za prospecting. Svaka ima drugačiji tROAS cilj
        jer se različiti korisnici drugačije konvertuju. Returning customers konvertuju za ~30% niži CPA —
        agresivniji bid je opravdan.
      </p>

      <h3>Lead Gen nalozi — lokalni servisi (towing, cleaning)</h3>

      <p>
        Lead Gen je komplikovaniji jer konverzije nemaju monetarnu vrednost u tracking sistemu —
        poziv ili forma su konverzija, ali vrednost leada je unknown za Google. Preporučeni pristup:
      </p>

      <ol>
        <li><strong>Faza 1:</strong> Maximize Conversions — prikupljanje volumena</li>
        <li><strong>Faza 2:</strong> tCPA kada je CPA istorijat stabilan (min 30 konverzija/mes)</li>
        <li><strong>Napredna opcija:</strong> Dodeliti konverzijama vrednost (lead scoring) i preći na Maximize Conv. Value</li>
      </ol>

      <p>
        Za jedan lokalni towing service u Vojvodini, kampanja je na Maximize Conversions.
        Sa 20–35 poziva mesečno, tCPA bi bio preuredan. Umesto toga, fokus je na pravilnoj selekciji
        konverzija: isključiti slučajne klikove, pratiti samo kvalitetne pozive (min 30 sekundi).
      </p>

      <h3>Lokalne usluge — vodoinstalater, cleaning service (Srbija)</h3>

      <p>
        Za lokalne servisne biznise (vodoinstalater, čišćenje, hitne intervencije), geografski targeting
        je ključan faktor koji Smart Bidding mora da respektuje. Preporuka:
      </p>

      <ul>
        <li>Maximize Conversions u početku — veoma čest za ovu kategoriju</li>
        <li>Maximize Conversion Value ako pratite vrednost usluge (npr. prosečna faktura)</li>
        <li>Target CPA tek sa 40+ kvalitetnih konverzija mesečno</li>
        <li>Ad Scheduling + Smart Bidding kombinacija: definišite radno vreme, pustite algoritam da licitira unutar tih sati</li>
      </ul>

      <p>
        Za jedan novi vodoinstalaterski nalog u Beogradu, koristimo Maximize Conversions sa call conversion tracking
        (min 30 sekundi). Cilj za mesec 3: prelaz na tCPA kada budemo imali 40+ validiranih poziva.
      </p>

      <hr />

      <h2>Microsoft Ads Ekvivalenti — Kratki Cross-Reference</h2>

      <p>
        Ako vodite kampanje i na Microsoft Ads (Bing), Smart Bidding koncepti su direktno prenosivi —
        ali sa određenim razlikama u terminologiji i dostupnosti:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Google Ads Strategija</th>
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Microsoft Ads Ekvivalent</th>
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Razlike</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Maximize Conversions</td>
              <td className="py-3 px-4 border-b border-gray-200">Maximize Conversions</td>
              <td className="py-3 px-4 border-b border-gray-200">Identično, manji volumen podataka</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Target CPA</td>
              <td className="py-3 px-4 border-b border-gray-200">Target CPA</td>
              <td className="py-3 px-4 border-b border-gray-200">Min konverzija je viši (~30/30d)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Target ROAS</td>
              <td className="py-3 px-4 border-b border-gray-200">Target ROAS</td>
              <td className="py-3 px-4 border-b border-gray-200">Dostupno, ali konzervativniji algoritam</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Maximize Conv. Value</td>
              <td className="py-3 px-4 border-b border-gray-200">Maximize Conv. Value</td>
              <td className="py-3 px-4 border-b border-gray-200">Dostupno od 2024</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Target Impression Share</td>
              <td className="py-3 px-4 border-b border-gray-200">Target Impression Share</td>
              <td className="py-3 px-4 border-b border-gray-200">Identično</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Za detaljan pregled Microsoft Ads vs Google Ads razlika, pogledajte poseban post koji pokriva
        platforme u celini, uključujući Smart Bidding i audience targeting razlike.
      </p>

      <hr />

      <h2>Bidding Strategy Migration Playbook</h2>

      <p>
        Prelazak sa Manual CPC na Smart Bidding, ili migracija između Smart Bidding strategija,
        zahteva plan. Nagla promena destabilizuje algoritam i može da izazove performance pad.
        Evo konkretnog playbook-a koji koristim pri preuzimanju novih naloga:
      </p>

      <div className="space-y-3 my-8">
        {[
          {
            num: 1,
            title: "Audit konverzijskog tracking-a",
            desc: "Pre svega: da li su konverzije ispravno postavljene? Primary vs Secondary konverzije, Enhanced Conversions uključeno, GA4 import aktivan? Smart Bidding bez tačnog trackinga je katastrofa.",
            time: "Dan 1"
          },
          {
            num: 2,
            title: "Analiza aktuelnih performance podataka",
            desc: "Koji je aktuelni prosečni CPA/ROAS? Koji je volumen konverzija mesečno? Kakav je learning period status? Zabeležite baseline koji ćete koristiti za poređenje.",
            time: "Dan 1–2"
          },
          {
            num: 3,
            title: "Odabir polazne strategije",
            desc: "Za naloge bez Smart Biddinga: uvek počnite sa Maximize Conversions (bez cilja). Za naloge koji već imaju podatke: može direktno na tCPA/tROAS ako su uslovi ispunjeni.",
            time: "Dan 2"
          },
          {
            num: 4,
            title: "Promena strategije + dokumentacija",
            desc: "Promenite strategiju. Zabeležite datum promene u nalog i u interni dokument. Learning period počinje odmah — ne intervenisati narednih 14 dana.",
            time: "Dan 3"
          },
          {
            num: 5,
            title: "Learning period — praćenje bez intervencija",
            desc: "Dnevno pratite Bid Strategy Report. Ako vidite 'Limited by budget' — povećajte budžet (ne cilj). Ako vidite 'Learning' status — strpljenje. Nema intervencija u ključnim parametrima.",
            time: "Dan 4–14"
          },
          {
            num: 6,
            title: "Evaluacija po izlasku iz learning perioda",
            desc: "Poredite performance pre/posle (isti period, godinu unazad ili prethodni mesec). Da li je CPA/ROAS u okvirima cilja? Ako je CPA 20% iznad cilja — sačekajte još nedelju pre korekcije.",
            time: "Dan 15–21"
          },
          {
            num: 7,
            title: "Postepena optimizacija ciljeva",
            desc: "Ako je performance dobar: spustite tCPA za 10–15%, ili povećajte tROAS za 10–15%. Sačekajte 2 nedelje. Ponavljajte dok ne dostignete ciljni nivo. Nikad više od 20% odjednom.",
            time: "Dan 22+"
          }
        ].map((item) => (
          <div key={item.num} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-card">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">{item.num}</span>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <p className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</p>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full flex-shrink-0">{item.time}</span>
              </div>
              <p className="text-xs text-gray-600 mb-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <hr />

      <h2>Bid Simulator i Bidding Tools</h2>

      <p>
        Google Ads nudi nekoliko alata koji pomažu pri postavljanju i optimizaciji bid strategija —
        a mnogi korisnici ih nikad ne koriste:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700 mb-2">Bid Simulator</p>
          <p className="text-sm text-gray-700 mb-0">
            Dostupan u Keywords i Ad Groups koloni. Pokazuje šta bi se desilo sa Impressions,
            Clicks i Conversions kada biste promenili bid za određeni procenat. Koristite pre
            svake veće promene tCPA/tROAS cilja da procenite uticaj.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-purple-700 mb-2">Bid Strategy Report</p>
          <p className="text-sm text-gray-700 mb-0">
            Unutar kampanje: Settings → Bid Strategy. Prikazuje status (Learning/Eligible/Limited),
            aktuelni performance vs cilj, i razlog ograničenja (budžet, cilj, volumen konverzija).
            Ovo je dijagnostički alat #1 za Smart Bidding probleme.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-green-700 mb-2">Performance Planner</p>
          <p className="text-sm text-gray-700 mb-0">
            Tools → Planning → Performance Planner. Projektuje performance za sledeći period
            uz promene budžeta i ciljeva. Koristite za kvartalno planiranje i predviđanje
            efekata sezonskih kampanja.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-orange-700 mb-2">Auction Insights</p>
          <p className="text-sm text-gray-700 mb-0">
            Pokazuje vašu konkurentnost u aukcijama — Impression Share, Overlap Rate, Position
            Above Rate. Ako IS padne posle promene bidding strategije, to je signal da je cilj
            previše restriktivan ili budžet premali.
          </p>
        </div>
      </div>

      <hr />

      <h2>Zaključak — Smart Bidding nije Set-and-Forget</h2>

      <p>
        Smart Bidding je najmoćniji alat u Google Ads arsenalu — ali samo ako razumete šta radi
        i šta od njega ne možete očekivati. Algoritam je dobar u optimizaciji ka cilju koji mu date.
        Vaš zadatak je da date ispravan cilj, ispravne konverzije i dovoljno vremena da nauči.
      </p>

      <p>
        Iz iskustva sa 10+ naloga u 2024–2026, rezime koji važi bez obzira na tip biznisa:
      </p>

      <ul>
        <li><strong>Novi nalog?</strong> Maximize Conversions, bez cilja, minimum 4 nedelje pre evaluacije</li>
        <li><strong>30+ konverzija?</strong> Razmotrite tCPA — ali postavite cilj 20% iznad aktuelnog proseka</li>
        <li><strong>eCommerce sa revenue tracking-om?</strong> Maximize Conv. Value → tROAS progresija</li>
        <li><strong>Smart Bidding ne performuje?</strong> Problem je gotovo uvek u tracking-u ili cijedu, ne u strategiji</li>
        <li><strong>Ne menjajte ništa prvih 14 dana</strong> — learning period je sveto vreme</li>
      </ul>

      <p>
        Za detaljniju optimizaciju Google Ads kampanja, pogledajte:
      </p>
      <ul>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimizacija" } }}
            className="underline font-medium"
          >
            Google Ads Optimizacija: 30 Taktika za Bolji ROAS [2026]
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}
            className="underline font-medium"
          >
            Conversion Tracking za Google Ads: Zašto Vaše Kampanje Ne Rade
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }}
            className="underline font-medium"
          >
            Performance Max: Kompletan Vodič za eCommerce [2026]
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }}
            className="underline font-medium"
          >
            Koliko Košta Google Ads? Cene, Budžeti i ROI u Srbiji [2026]
          </Link>
        </li>
      </ul>

      <hr />

      <h2>Najčešća Pitanja o Smart Biddingu</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko konverzija treba za Smart Bidding?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Za <strong>Maximize Conversions</strong> (bez cilja) — nula, možete odmah. Za <strong>Target CPA</strong> —
            Google preporučuje 50/30d, u praksi funkcioniše sa 30–40 ako je CPA stabilan. Za <strong>Target ROAS</strong> —
            50/30d plus obavezno praćenje vrednosti konverzija. Realni minimum iz prakse: 30 konverzija mesečno
            pre nego što tCPA/tROAS da stabilan performance.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Target CPA ili Target ROAS — šta je bolje?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Zavisi od tipa biznisa. <strong>tCPA</strong> je bolji za Lead Gen (pozivi, forme) gde sve konverzije imaju
            sličnu vrednost. <strong>tROAS</strong> je bolji za eCommerce gde različiti proizvodi imaju različite cene —
            algoritam tada preferira skuplje konverzije. Ako ne pratite vrednost konverzija, tROAS nije opcija.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko traje learning period i šta ga restartuje?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Tipično <strong>7–14 dana</strong>. Learning period restartuje: promena bid strategije, promena tCPA/tROAS cilja
            za više od 20%, promena budžeta za više od 20%, dodavanje/brisanje ključnih reči ili ad grupa,
            pauziranje i reaktiviranje kampanje. Svaka od ovih promena vraća algoritam na početak —
            zato je stabilnost kritična, naročito u prvim nedeljama.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta je Portfolio Bidding i kada ga koristiti?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Portfolio Bid Strategy je zajednička strategija koja se primenjuje na više kampanja simultano.
            Algoritam uči iz kombinovanih konverzija svih kampanja u portfoliju. Korisno za:
            naloge gde svaka kampanja ima premalo konverzija za samostalni Smart Bidding, ali zajedno
            imaju 50+/mesec. Npr. 3 kampanje po 15 konverzija mesečno = 45 zajedno — portfolio im daje
            dovoljno signala za tCPA.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako Smart Bidding radi sa sezonskim pikovima?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Smart Bidding automatski prepoznaje sezonske trendove na osnovu istorijata — ali za kratke,
            intenzivne pike (Black Friday, Đurđevdan, Nova Godina), preporučuje se korišćenje
            <strong>Seasonality Adjustments</strong> u Tools sekciji. Ovim najavite algoritmu da očekujete
            povećanu/smanjenu stopu konverzija u određenom periodu. Ne menjajte budžet drastično —
            koristite ovaj alat umesto toga.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto Smart Bidding troši budžet ali nema konverzija?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Najčešći razlozi: (1) <strong>loš conversion tracking</strong> — algoritam dobija pogrešne signale;
            (2) <strong>landing page problem</strong> — saobraćaj dolazi ali ne konvertuje, što algoritam ne zna;
            (3) <strong>previše agresivan cilj</strong> — tROAS 800% sa 20 konverzija mesečno zamrzava potrošnju;
            (4) <strong>learning period</strong> — dajte 14 dana pre procene. Korak 1 uvek: proverite da li
            konverzije tačno pucaju u Google Tag Assistant-u.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li Manual CPC ima smisla u 2026?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Za 95% naloga — ne. Manual CPC ima smisla samo u specifičnim situacijama: izuzetno mali budžeti
            (&lt;€80/mesec) gde algoritam nema dovoljno prostora, hiperspefičičan targeting za jedan
            ključni termin, ili kratka tranziciona faza između strategija. Sve ostalo je bolje servisirano
            sa Smart Biddingom. Enhanced CPC je solidan kompromis ako ste nesigurni.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako podesiti Smart Bidding za lokalne usluge (plumber, towing, čišćenje)?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Za lokalne usluge: počnite sa <strong>Maximize Conversions</strong> uz call tracking (min 30 sekundi poziv).
            Definišite jasno radno vreme u Ad Scheduling — algoritam ne treba da licitira za pozive u 02:00
            ako niste dostupni. Tek sa 40+ kvalitetnih poziva mesečno, razmotrite tCPA. Geografski targeting
            mora biti precizan (opštinski ili gradski nivo, ne cela Srbija) da algoritam ima relevantne
            lokacijske signale.
          </div>
        </details>
      </div>

      <hr />

      <h2>Izvori i Zvanična Dokumentacija</h2>

      <ul>
        <li>
          <a
            href="https://support.google.com/google-ads/answer/2979071"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Google Ads Help: About Smart Bidding
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/google-ads/answer/7065882"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Google Ads Help: Target CPA bidding
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/google-ads/answer/6268637"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Google Ads Help: Target ROAS bidding
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/google-ads/answer/7365136"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Google Ads Help: Seasonality adjustments for Smart Bidding
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/google-ads/answer/2994573"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Google Ads Help: About the bid strategy report
          </a>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimizacija" } }}
            className="underline"
          >
            Google Ads Optimizacija: 30 Taktika za Bolji ROAS [interni vodič]
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}
            className="underline"
          >
            Conversion Tracking Vodič [interni vodič]
          </Link>
        </li>
      </ul>
    </>
  );
}
