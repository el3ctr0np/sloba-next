import { Link } from "@/i18n/navigation";

export default function GoogleShoppingVodicPost() {
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

