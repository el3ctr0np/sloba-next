import { Link } from "@/i18n/navigation";

export default function GoogleOglasavanjeZaFirmePost() {
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

