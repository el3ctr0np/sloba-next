import { Link } from "@/i18n/navigation";

export default function PerformanceMaxVodicPost() {
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

