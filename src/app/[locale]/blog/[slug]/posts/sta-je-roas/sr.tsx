import { Link } from "@/i18n/navigation";
import RoasCalculator from "@/components/tools/RoasCalculator";

export default function StaJeRoasSR() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          ROAS (Return on Ad Spend) je odnos prihoda i potrošnje na oglase. Formula: ROAS = Prihod ÷ Potrošnja. Za eCommerce dobar ROAS je 3–5×, ali ROAS ne meri profit — već odnos prihoda i spend-a. Koristite kalkulator ispod da proverite svoj ROAS u odnosu na benchmark.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">4×</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">eCommerce prosek</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2.5×</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Lead Gen benchmark</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">6×</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Luxury / premium</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1×</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Break-even (0 profita)</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">Brzi odgovor</p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Šta je ROAS i kako se računa?
        </p>
        <p className="text-sm md:text-base text-gray-700 mb-0 leading-relaxed">
          <strong>ROAS (Return on Ad Spend)</strong> je odnos prihoda od oglasa i potrošnje na oglase. Formula: <strong>ROAS = Prihod ÷ Potrošnja</strong>. Izražava se kao odnos (4×) ili procenat (400%). Za eCommerce, dobar ROAS je 3–5× u zavisnosti od marže; ispod 2× većina biznisa nije profitabilna.
        </p>
      </div>

      <hr />

      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#sta-je-roas" className="text-sm text-gray-700 hover:text-primary underline">Šta je ROAS</a></li>
          <li><a href="#formula" className="text-sm text-gray-700 hover:text-primary underline">Formula i kako se računa</a></li>
          <li><a href="#kalkulator" className="text-sm text-gray-700 hover:text-primary underline">ROAS kalkulator</a></li>
          <li><a href="#benchmarks" className="text-sm text-gray-700 hover:text-primary underline">ROAS benchmarks po industriji</a></li>
          <li><a href="#roas-vs-poas" className="text-sm text-gray-700 hover:text-primary underline">ROAS vs POAS: zašto ROAS ne meri profit</a></li>
          <li><a href="#kako-poboljsati" className="text-sm text-gray-700 hover:text-primary underline">Kako poboljšati ROAS</a></li>
          <li><a href="#faq" className="text-sm text-gray-700 hover:text-primary underline">Najčešća pitanja o ROAS-u</a></li>
          <li><a href="#povezani-vodici" className="text-sm text-gray-700 hover:text-primary underline">Povezani vodiči</a></li>
        </ol>
      </nav>

      <h2 id="sta-je-roas">Šta je ROAS</h2>
      <p>
        <strong>ROAS (Return on Ad Spend)</strong> je jedna od najvažnijih metrika u digitalnom oglašavanju — meri koliko prihoda dobijate na svaki evro (ili dinar, ili funtu) uložen u oglase.
      </p>
      <p>
        Jednostavno: ako potrošite 1.000€ na Google Ads i dobijete 4.000€ prihoda, vaš ROAS je 4× (ili 400%). Na svaki uloženi evro, vratilo se 4€ kroz prodaju.
      </p>
      <p>
        Zašto je ROAS bitan:
      </p>
      <ul>
        <li><strong>Standardna metrika</strong> — Google Ads, Meta Ads, Microsoft Ads — svi je prikazuju nativno</li>
        <li><strong>Omogućava Smart Bidding</strong> — tROAS strategija je direktno vezana za ROAS target</li>
        <li><strong>Laka za razumevanje</strong> — klijenti i direktori je razumeju bez dodatnog objašnjenja</li>
        <li><strong>Poredi kampanje</strong> — različite kampanje različitog budžeta možete porediti po istoj metrici</li>
      </ul>
      <p>
        Ali — i ovo je kritično — <strong>ROAS nije profit</strong>. O tome dole u sekciji &quot;ROAS vs POAS&quot;.
      </p>

      <hr />

      <h2 id="formula">Formula i kako se računa</h2>
      <p>
        Formula je jednostavna:
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          ROAS = Prihod od oglasa ÷ Potrošnja na oglase
        </p>
      </div>

      <p>
        Može se izraziti kao:
      </p>
      <ul>
        <li><strong>Odnos</strong> — &quot;4×&quot; ili &quot;4:1&quot; (najčešći oblik u Google Ads-u)</li>
        <li><strong>Procenat</strong> — &quot;400%&quot; (množenje sa 100)</li>
        <li><strong>Decimala</strong> — &quot;4.0&quot; (kako se pojavljuje u nekim reportima)</li>
      </ul>

      <p>Evo par primera:</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Prihod</th>
              <th className="py-3 px-4 font-heading font-semibold">Potrošnja</th>
              <th className="py-3 px-4 font-heading font-semibold">ROAS</th>
              <th className="py-3 px-4 font-heading font-semibold">Ocena</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">€500</td>
              <td className="py-3 px-4">€1.000</td>
              <td className="py-3 px-4">0.5× (50%)</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Gubitak</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">€1.000</td>
              <td className="py-3 px-4">€1.000</td>
              <td className="py-3 px-4">1× (100%)</td>
              <td className="py-3 px-4"><span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-0.5 rounded">Break-even</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">€3.000</td>
              <td className="py-3 px-4">€1.000</td>
              <td className="py-3 px-4">3× (300%)</td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Solidno</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">€5.000</td>
              <td className="py-3 px-4">€1.000</td>
              <td className="py-3 px-4">5× (500%)</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Odlično</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">€10.000</td>
              <td className="py-3 px-4">€1.000</td>
              <td className="py-3 px-4">10× (1000%)</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Izuzetno</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Važno: ROAS prati samo &quot;prihod od oglasa&quot;</p>
        <p className="text-sm text-yellow-900 mb-0">
          U Google Ads-u se ROAS računa samo iz konverzija koje su <em>pripisane</em> kampanji. Ako kupac klikne oglas, ode kući, i sutradan kupi preko direktnog prihoda — tu konverziju ROAS ne meri (osim ako nije unutar attribution prozora). Zato se broj u Google Ads-u uvek razlikuje od prihoda u Shopify/WooCommerce-u.
        </p>
      </div>

      <hr />

      <h2 id="kalkulator">ROAS kalkulator</h2>
      <p>
        Unesite prihod od oglasa i potrošnju. Kalkulator izračuna vaš ROAS i uporedi ga sa industrijskim benchmark-om. Opcionalno možete izabrati industriju za precizniji benchmark.
      </p>

      <RoasCalculator locale="sr" />

      <p className="text-sm text-gray-600">
        Benchmark-ovi u kalkulatoru su orijentacioni proseci. Vaš <em>profitabilan</em> prag zavisi od marže — niska marža znači da vam treba viši ROAS da ne biste radili u gubitku.
      </p>

      <hr />

      <h2 id="benchmarks">ROAS benchmarks po industriji</h2>
      <p>
        ROAS se drastično razlikuje po industriji. Luksuzni proizvodi imaju visok ROAS ali nisku konverziju; lead gen biznisi imaju nizak ROAS ali visok LTV po klijentu.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Industrija</th>
              <th className="py-3 px-4 font-heading font-semibold">Target ROAS</th>
              <th className="py-3 px-4 font-heading font-semibold">Napomena</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce — Moda/Odeća</td>
              <td className="py-3 px-4 text-green-700 font-semibold">4.0×</td>
              <td className="py-3 px-4">Marže 40–60%, brand dependency</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">eCommerce — Kozmetika</td>
              <td className="py-3 px-4 text-green-700 font-semibold">3.5×</td>
              <td className="py-3 px-4">Visok LTV, repeat orders</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce — Elektronika</td>
              <td className="py-3 px-4 text-green-700 font-semibold">5.0×</td>
              <td className="py-3 px-4">Niske marže (5–15%), traži visok ROAS</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">eCommerce — Dom i bašta</td>
              <td className="py-3 px-4 text-green-700 font-semibold">3.8×</td>
              <td className="py-3 px-4">Solidne marže, sezonski</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce — Hrana / Pića</td>
              <td className="py-3 px-4 text-green-700 font-semibold">4.5×</td>
              <td className="py-3 px-4">Subscription povećava LTV</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">SaaS / B2B</td>
              <td className="py-3 px-4 text-green-700 font-semibold">3.0×</td>
              <td className="py-3 px-4">LTV-based (računa se na 12-mesečni prihod)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Lead Gen (lokalne usluge)</td>
              <td className="py-3 px-4 text-green-700 font-semibold">2.5×</td>
              <td className="py-3 px-4">Prati CPA umesto ROAS ako nema direktne prodaje</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Luksuz / premium</td>
              <td className="py-3 px-4 text-green-700 font-semibold">6.0×</td>
              <td className="py-3 px-4">Visoke marže, manji volumen, selektivno targetiranje</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Ovi brojevi su proseci. Vaš stvarni target bi trebalo da bude baziran na marži — ako vam je marža 30%, break-even ROAS je ~3.3×, pa sve ispod toga znači gubitak.
      </p>

      <hr />

      <h2 id="roas-vs-poas">ROAS vs POAS: zašto ROAS ne meri profit</h2>

      <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-red-700 text-lg mb-2">Kritična tačka: ROAS ≠ profit</p>
        <p className="text-sm text-red-800 mb-0">
          Video sam desetine naloga sa 8× ROAS-om koji gube novac, i 2× ROAS naloge koji zgrću profit. Razlika je u <strong>marži</strong>. Sirov ROAS ne uzima u obzir cenu koštanja robe (COGS), troškove dostave, povrata, ili operativne troškove.
        </p>
      </div>

      <p>
        Primer: eCommerce prodavac sa 4× ROAS-om i 20% marže prodaje za 4.000€ uz 1.000€ spend-a. Gross profit je 800€ (20% od prihoda), minus 1.000€ spend = <strong>gubitak od 200€</strong>. &quot;Odličan ROAS&quot; u praksi znači gubitak.
      </p>

      <p>
        Rešenje je <strong>POAS (Profit on Ad Spend)</strong> — metrika koja uzima u obzir maržu. POAS = (Prihod × Marža) ÷ Spend. Za isti primer: (4.000 × 0.20) ÷ 1.000 = 0.8× POAS → ispod 1× = gubitak. Jasno, bez dvosmislenosti.
      </p>

      <p>
        POAS nije standardan u Google Ads interfejsu, ali ga možete računati ručno ili preko custom columns. Za eCommerce klijente gde radim Tiered Shopping strategiju, POAS je primarni KPI — ROAS služi samo kao sekundarna metrika.
      </p>

      <hr />

      <h2 id="kako-poboljsati">Kako poboljšati ROAS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika #1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Povećajte AOV (Average Order Value)</h3>
          <p className="text-sm text-gray-600 mb-0">Bundle-i, &quot;Add to order&quot; preporuke, free shipping threshold. Viši AOV = viši ROAS bez menjanja bid strategije.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika #2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Uklonite low-ROAS ad grupe</h3>
          <p className="text-sm text-gray-600 mb-0">Pauzirajte ad grupe/ključne reči sa stabilno niskim ROAS-om (ispod break-even). Budžet ide ka winner-ima.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika #3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">tROAS Smart Bidding</h3>
          <p className="text-sm text-gray-600 mb-0">Kada imate 30+ konverzija/30 dana, prebacite na Target ROAS. Algoritam licitira više za korisnike sa visokom verovatnoćom kupovine.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika #4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Poboljšajte Quality Score</h3>
          <p className="text-sm text-gray-600 mb-0">Viši QS = niži CPC. Isti prihod uz nižu potrošnju = viši ROAS. QS 7+ smanjuje CPC za 20–30%.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika #5</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Landing page CVR optimizacija</h3>
          <p className="text-sm text-gray-600 mb-0">Viša konverzija na landing page-u → više prihoda na isti broj klikova → viši ROAS. Testirajte brzinu, CTA, social proof.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika #6</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Dodajte negative keywords</h3>
          <p className="text-sm text-gray-600 mb-0">Svaki klik od irelevantne pretrage je spend bez prihoda. Mesečni Search Terms pregled + agresivne negative liste održava ROAS.</p>
        </div>
      </div>

      <hr />

      <h2 id="faq">Najčešća pitanja o ROAS-u</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koji ROAS je dobar?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Zavisi od marže. Za eCommerce sa 30–50% maržom, ROAS od 3–5× je dobar. Za niske marže (elektronika, 5–15%), potreban je 6–10×. Break-even formula: ROAS = 1 ÷ marža (decimala). Za 25% maržu, break-even je 4×.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako se računa ROAS u procentima?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            ROAS % = (Prihod ÷ Potrošnja) × 100. Primer: 4.000€ prihoda ÷ 1.000€ spend × 100 = 400%. To je isto kao 4× ROAS.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Razlika između ROAS i ROI?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            ROAS meri prihod na spend. ROI meri profit na ukupnu investiciju (spend + operativni troškovi + COGS). ROAS je površinska metrika, ROI je dublja finansijska ocena. ROAS od 4× može značiti ROI od -10% ako su marže tanke.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koji je minimalan (break-even) ROAS?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Break-even ROAS = 1 ÷ marža. Ako vam je marža 20%, break-even je 5× (1 ÷ 0.20). Ispod toga radite u gubitku. Bitno: marža znači <em>neto</em> marža posle COGS i operativnih troškova — ne gross markup.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako Target ROAS bidding radi?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Target ROAS (tROAS) je Smart Bidding strategija — zadajete target ROAS (npr. 400%), Google algoritam licitira više za korisnike sa visokom verovatnoćom kupovine i manje za sve ostale. Zahteva 30+ konverzija u zadnjih 30 dana i stabilnu istoriju vrednosti konverzija.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li je ROAS od 10× uvek dobar?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Ne nužno. Ekstremno visok ROAS (10×+) najčešće znači da je budžet previše konzervativan — algoritam lovi samo &quot;najlakše&quot; konverzije (branded, repeat kupce). Udvostručavanjem budžeta često ROAS padne na 5×, ali ukupan profit raste. 10× na €500/mesec je manje vredno od 4× na €5.000/mesec.
          </div>
        </details>
      </div>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Vaš ROAS ne prati profit?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Besplatna analiza naloga sa POAS mapiranjem i preporukama za optimizaciju bid strategije po margini.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <hr />

      <h2 id="povezani-vodici">Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Smart Bidding vodič</p>
          <p className="text-xs text-gray-500 mb-0">tROAS, Maximize Conversion Value i kada koju strategiju</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimizacija" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads optimizacija — 30 taktika</p>
          <p className="text-xs text-gray-500 mb-0">Kompletan framework za povećanje ROAS-a</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max vodič</p>
          <p className="text-xs text-gray-500 mb-0">PMax tROAS strategija i asset grupe</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Quality Score vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako QS smanjuje CPC i diže ROAS</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-za-ecommerce-srbija-2026" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads za eCommerce u Srbiji 2026</p>
          <p className="text-xs text-gray-500 mb-0">Benchmarks, strategija, realni podaci iz naloga</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking vodič</p>
          <p className="text-xs text-gray-500 mb-0">Bez tačnog tracking-a, ROAS je lažna metrika</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: April 2026
      </div>
      <div className="text-sm text-gray-500">
        Autor: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}
