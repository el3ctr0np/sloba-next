import { Link } from "@/i18n/navigation";

export default function KljucneReciVodicPost() {
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


