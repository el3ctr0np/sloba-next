import { Link } from "@/i18n/navigation";

export default function RsaVodicPost() {
  return (
    <>
      {/* ── TL;DR boks ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Responsive Search Ads su jedini format tekstualnih oglasa u Google Ads-u.
          Ključ uspeha nije 15 naslova — nego 7-8 precizno raspoređenih po ulogama.
          Ovaj vodič vam daje tačan framework koji koristim na klijentskim nalozima.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7-8</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">naslova, ne 15</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">336</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">kombinacija (dovoljno)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">59%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">koristi AI za ad copy</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">tipova naslova</p>
          </div>
        </div>
      </div>

      {/* ── Sadržaj ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#zasto-rsa-format-dominira-u-2026" className="text-sm text-gray-700 hover:text-primary underline">Zašto RSA format dominira u 2026</a></li>
          <li><a href="#sta-su-responsive-search-ads-i-kako-funkcionisu" className="text-sm text-gray-700 hover:text-primary underline">Šta su Responsive Search Ads i kako funkcionišu</a></li>
          <li><a href="#zasto-7-8-naslova-a-ne-15" className="text-sm text-gray-700 hover:text-primary underline">Zašto 7-8 naslova, a ne 15</a></li>
          <li><a href="#7-tipova-naslova-koji-pokrivaju-sve" className="text-sm text-gray-700 hover:text-primary underline">7 tipova naslova koji pokrivaju sve</a></li>
          <li><a href="#traffic-temperature-pristup" className="text-sm text-gray-700 hover:text-primary underline">Traffic Temperature pristup — prilagodite ton publici</a></li>
          <li><a href="#kako-napisati-rsa-korak-po-korak" className="text-sm text-gray-700 hover:text-primary underline">Kako napisati RSA korak po korak</a></li>
          <li><a href="#strategija-za-opise" className="text-sm text-gray-700 hover:text-primary underline">Strategija za opise (descriptions)</a></li>
          <li><a href="#pinning-da-ili-ne" className="text-sm text-gray-700 hover:text-primary underline">Pinning — da ili ne?</a></li>
          <li><a href="#najcesce-rsa-greske" className="text-sm text-gray-700 hover:text-primary underline">Najčešće RSA greške i kako ih izbeći</a></li>
          <li><a href="#rsa-testiranje-iteration-loop" className="text-sm text-gray-700 hover:text-primary underline">RSA testiranje — The Iteration Loop</a></li>
          <li><a href="#cesta-pitanja-o-rsa" className="text-sm text-gray-700 hover:text-primary underline">Česta pitanja o RSA</a></li>
          <li><a href="#zakljucak" className="text-sm text-gray-700 hover:text-primary underline">Zaključak</a></li>
          <li><a href="#povezani-vodici" className="text-sm text-gray-700 hover:text-primary underline">Povezani vodiči</a></li>
        </ol>
      </nav>


      {/* ── Sekcija 1: Hook intro ── */}
      <h2 id="zasto-rsa-format-dominira-u-2026">Zašto RSA format dominira u 2026</h2>
      <p>
        Od juna 2022, Responsive Search Ads su <strong>jedini tip tekstualnih oglasa</strong> koji
        možete kreirati u Google Ads-u. Expanded Text Ads (ETA) više ne postoje. Svaki
        Search oglas koji danas napišete — je RSA.
      </p>
      <p>
        Problem? Većina oglašivača koristi RSA-ove pogrešno. Popune 15 naslova jer
        Google to sugeriše, ne razmišljaju o rasporedu, i onda se pitaju zašto im
        Ad Strength kaže &quot;Excellent&quot; a CTR je ispod prosjeka.
      </p>
      <p>
        Prema <a href="https://ppcsurvey.com" target="_blank" rel="noopener noreferrer">State of PPC 2026 reportu</a> (1,306
        ispitanika), <strong>59% PPC profesionalaca sada koristi AI za pisanje ad copy-ja</strong> — skok sa 42%
        pre dve godine. Ali AI bez framework-a proizvodi generičan copy. A generičan copy u
        RSA-ovima znači da se vaš oglas stapа sa svim ostalima.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Iz mog iskustva</p>
        <p className="text-blue-800 text-sm mb-0">
          Nakon upravljanja Google Ads nalozima za eCommerce, Lead Gen i lokalne biznise —
          RSA sa 7-8 dobro raspoređenih naslova redovno nadmašuje RSA sa 15 naslova
          po CTR-u i konverzijama. Razlog je matematika, ne mišljenje.
        </p>
      </div>

      <p>
        U ovom vodiču dobijate tačan framework koji koristim na klijentskim nalozima:
        koliko naslova pisati, koji tip ide na koju poziciju, kako prilagoditi ton
        publici, i kako testirati i iterirati.
      </p>

      <hr />


      {/* ── Sekcija 2: Šta su RSA ── */}
      <h2 id="sta-su-responsive-search-ads-i-kako-funkcionisu">Šta su Responsive Search Ads i kako funkcionišu</h2>
      <p>
        <a href="https://support.google.com/google-ads/answer/7684791" target="_blank" rel="noopener noreferrer">Responsive Search Ads</a> su
        format oglasa u Google Search kampanjama gde vi unosite više naslova (do 15) i opisa (do 4),
        a Google-ov machine learning automatski kombinuje i prikazuje one kombinacije koje su
        najrelevantnije za svaki pojedinačni pretraživač.
      </p>

      <h3>Šta vi dajete Google-u</h3>
      <ul>
        <li><strong>Do 15 naslova</strong> — svaki do 30 karaktera</li>
        <li><strong>Do 4 opisa</strong> — svaki do 90 karaktera</li>
        <li><strong>Final URL</strong> — landing page</li>
        <li><strong>Display path</strong> — prikazani URL (2 polja x 15 karaktera)</li>
      </ul>

      <h3>Šta Google radi sa tim</h3>
      <p>
        Google prikazuje <strong>3 naslova + 2 opisa</strong> u svakom prikazu oglasa. Kombinuje
        ih na osnovu signala: ključna reč, uređaj, lokacija, vreme dana, istorija korisnika.
        Cilj: pronaći kombinaciju sa najvećom verovatnoćom klika i konverzije.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno pravilo</p>
        <p className="text-yellow-800 text-sm mb-0">
          Svaki naslov mora imati smisla i sa bilo kojim drugim naslovom. Google kombinuje
          naslov 1 sa naslovom 8 i naslovom 12 — ako dva naslova govore istu stvar ili se
          sukobljavaju, oglas gubi na kvalitetu.
        </p>
      </div>

      <hr />


      {/* ── Sekcija 3: Zašto 7-8 naslova ── */}
      <h2 id="zasto-7-8-naslova-a-ne-15">Zašto 7-8 naslova, a ne 15</h2>
      <p>
        Ovo je najvažniji koncept u celom vodiču. Google vam <em>dozvoljava</em> 15 naslova,
        ali to ne znači da treba da koristite svih 15.
      </p>
      <p>
        Razlog je matematički. Google bira 3 od vaših naslova za svaki prikaz. Broj mogućih
        kombinacija zavisi od toga koliko naslova imate:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Broj naslova</th>
              <th className="py-3 px-4 font-heading font-semibold">3-headline kombinacije</th>
              <th className="py-3 px-4 font-heading font-semibold">Min. impressions za učenje</th>
              <th className="py-3 px-4 font-heading font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">7</td>
              <td className="py-3 px-4">210</td>
              <td className="py-3 px-4">~21,000</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Optimalno</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">8</td>
              <td className="py-3 px-4">336</td>
              <td className="py-3 px-4">~33,600</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Optimalno</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">10</td>
              <td className="py-3 px-4">720</td>
              <td className="py-3 px-4">~72,000</td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Mnogo</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">15</td>
              <td className="py-3 px-4">2,730</td>
              <td className="py-3 px-4">~273,000</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Data poverty</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Kalkulacija: svaka kombinacija treba minimum ~100 impressions da Google oceni njen
        potencijal. Sa 15 naslova, trebate <strong>273,000 impressions</strong> pre nego što
        algoritam ima dovoljno podataka. Sa 8 naslova — samo 33,600.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Pravilo: Što više naslova = više kombinacija = manje podataka po kombinaciji = sporije učenje = lošiji rezultati.
        </p>
      </div>

      <p>
        Ovo ne znači da <em>nikada</em> ne koristite 15 naslova. Ako vaš nalog ima
        100,000+ impressions mesečno po ad grupi, možete si priuštiti više. Ali za
        većinu naloga — 7-8 naslova je sweet spot.
      </p>

      <hr />


      {/* ── Sekcija 4: 7 tipova naslova ── */}
      <h2 id="7-tipova-naslova-koji-pokrivaju-sve">7 tipova naslova koji pokrivaju sve</h2>
      <p>
        Umesto da pišete nasumične naslove i nadate se da će Google pronaći dobru kombinaciju,
        koristite <strong>angle-based slot distribution</strong>. Svaki naslov ima
        jasnu ulogu — i zajedno pokrivaju kompletnu persuazijsku putanju.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {/* Tip 1 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">H1</span>
            <h3 className="font-heading font-semibold text-base mb-0">Relevance Anchor</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">Pokaži da je oglas relevantan za pretragu.</p>
          <p className="text-xs text-gray-500 mb-1 font-semibold">Primeri:</p>
          <ul className="text-sm text-gray-700 mb-0 pl-4">
            <li>&quot;CRM Software za Timove&quot;</li>
            <li>&quot;Vodoinstalater Beograd 0-24&quot;</li>
            <li>DKI: {"{"}KeyWord:Vaš Default{"}"}</li>
          </ul>
        </div>

        {/* Tip 2 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">H2</span>
            <h3 className="font-heading font-semibold text-base mb-0">Value Proposition</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">Osnovna ponuda + glavna korist.</p>
          <p className="text-xs text-gray-500 mb-1 font-semibold">Primeri:</p>
          <ul className="text-sm text-gray-700 mb-0 pl-4">
            <li>&quot;Više Leads-ova, Manje Troškova&quot;</li>
            <li>&quot;Premium Kvalitet, Fer Cene&quot;</li>
            <li>&quot;Sve na Jednom Mestu&quot;</li>
          </ul>
        </div>

        {/* Tip 3 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">H3</span>
            <h3 className="font-heading font-semibold text-base mb-0">USP / Benefit</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">Zašto ste različiti od konkurencije.</p>
          <p className="text-xs text-gray-500 mb-1 font-semibold">Primeri:</p>
          <ul className="text-sm text-gray-700 mb-0 pl-4">
            <li>&quot;Rezultati za 30 Dana&quot;</li>
            <li>&quot;Bez Ugovora, Otkažite Bilo Kad&quot;</li>
            <li>&quot;Dolazak za 30 Minuta&quot;</li>
          </ul>
        </div>

        {/* Tip 4 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">H4</span>
            <h3 className="font-heading font-semibold text-base mb-0">Social Proof</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">Poverenje i kredibilitet.</p>
          <p className="text-xs text-gray-500 mb-1 font-semibold">Primeri:</p>
          <ul className="text-sm text-gray-700 mb-0 pl-4">
            <li>&quot;500+ Zadovoljnih Klijenata&quot;</li>
            <li>&quot;4.9/5 Prosečna Ocena&quot;</li>
            <li>&quot;Google Premier Partner&quot;</li>
          </ul>
        </div>

        {/* Tip 5 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">H5</span>
            <h3 className="font-heading font-semibold text-base mb-0">Risk Removal</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">Uklonite barijeru za akciju.</p>
          <p className="text-xs text-gray-500 mb-1 font-semibold">Primeri:</p>
          <ul className="text-sm text-gray-700 mb-0 pl-4">
            <li>&quot;Besplatan Probni Period&quot;</li>
            <li>&quot;Garancija Zadovoljstva&quot;</li>
            <li>&quot;Bez Kreditne Kartice&quot;</li>
          </ul>
        </div>

        {/* Tip 6 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">H6</span>
            <h3 className="font-heading font-semibold text-base mb-0">Call-to-Action</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">Jasna akcija koju želite.</p>
          <p className="text-xs text-gray-500 mb-1 font-semibold">Primeri:</p>
          <ul className="text-sm text-gray-700 mb-0 pl-4">
            <li>&quot;Zatražite Besplatan Audit&quot;</li>
            <li>&quot;Započnite Probni Period&quot;</li>
            <li>&quot;Pozovite Odmah&quot;</li>
          </ul>
        </div>

        {/* Tip 7 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card md:col-span-2">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">H7</span>
            <h3 className="font-heading font-semibold text-base mb-0">Lead Angle x2 (varijabilno)</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Duplirajte najjači signal — koji to zavisi od temperature saobraćaja (više o tome u sledećoj sekciji).
            Za hladan saobraćaj: drugi Problem/Pain naslov. Za topao: drugi USP. Za vrući: drugi Social Proof.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Zašto ovo radi</p>
        <p className="text-blue-800 text-sm mb-0">
          Kad svaki naslov ima drugačiju ulogu, svaka kombinacija koju Google prikaže pokriva
          različite persuazijske uglove. Rezultat: oglas je relevantan za širi spektar korisnika
          i motivacija. Umesto 7 varijacija iste poruke — dobijate 7 komplementarnih poruka.
        </p>
      </div>

      <hr />


      {/* ── Sekcija 5: Traffic Temperature ── */}
      <h2 id="traffic-temperature-pristup">Traffic Temperature pristup — prilagodite ton publici</h2>
      <p>
        Ne tretiraju se svi pretraživači isto. Neko ko traži &quot;šta je CRM&quot; je u
        potpuno drugačijem stanju uma od nekoga ko traži &quot;HubSpot cena mesečno&quot;.
        Vaš RSA treba da se prilagodi toj temperaturi.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Temperatura</th>
              <th className="py-3 px-4 font-heading font-semibold">Tip pretrage</th>
              <th className="py-3 px-4 font-heading font-semibold">H7 treba biti</th>
              <th className="py-3 px-4 font-heading font-semibold">CTA ton</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Hladan</td>
              <td className="py-3 px-4">Istraživanje, edukacija</td>
              <td className="py-3 px-4">Problem/Pain (druga varijanta)</td>
              <td className="py-3 px-4">&quot;Saznajte Više&quot;, &quot;Pogledajte Kako&quot;</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Topao</td>
              <td className="py-3 px-4">Poređenje, evaluacija</td>
              <td className="py-3 px-4">USP ili Value Prop (druga varijanta)</td>
              <td className="py-3 px-4">&quot;Uporedite Planove&quot;, &quot;Besplatan Demo&quot;</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Vrući</td>
              <td className="py-3 px-4">Kupovina, naručivanje</td>
              <td className="py-3 px-4">Social Proof ili Risk Removal (druga varijanta)</td>
              <td className="py-3 px-4">&quot;Počnite Odmah&quot;, &quot;Naručite Danas&quot;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        U praksi, ovo znači da za istu uslugu pravite 2-3 RSA-a — po jedan za svaku
        temperaturu saobraćaja. Svaki deli istu osnovu (H1-H6), ali se H7 i ton CTA
        razlikuju.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Praktičan primer</p>
        <p className="text-yellow-800 text-sm mb-0">
          Vodoinstalater ima ad grupu za &quot;odgušenje kanalizacije cena&quot; (vrući saobraćaj).
          H7 postaje drugi Social Proof: &quot;200+ Uspešnih Intervencija&quot;.
          CTA: &quot;Pozovite Odmah — Dolazimo za 30 Min&quot;. Za hladnu pretragu &quot;kako odgušiti
          kanalizaciju&quot;, H7 je Problem/Pain: &quot;Zapušen Odvod? Rešavamo Danas&quot;, CTA: &quot;Saznajte Više&quot;.
        </p>
      </div>

      <hr />


      {/* ── Sekcija 6: Korak po korak ── */}
      <h2 id="kako-napisati-rsa-korak-po-korak">Kako napisati RSA korak po korak</h2>
      <p>
        Evo tačnog procesa koji koristim na svakom klijentskom nalogu. Četiri faze,
        jasnim redom.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">1</span>
            <div>
              <strong>Definišite temperaturu saobraćaja</strong>
              <span className="text-gray-500"> — Pogledajte ključne reči u ad grupi. Da li su informacione,
              komparativne ili transakcione? To određuje ton H7 i CTA.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">2</span>
            <div>
              <strong>Napišite H1 — Relevance Anchor</strong>
              <span className="text-gray-500"> — Unesite ključnu reč ili koristite DKI (Dynamic Keyword Insertion).
              Default mora biti dovoljno jak da stoji sam. Lošе: {"{"}KeyWord:Naši Proizvodi{"}"}.
              Dobro: {"{"}KeyWord:CRM Software{"}"}.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">3</span>
            <div>
              <strong>Popunite H2-H6 po framework-u</strong>
              <span className="text-gray-500"> — Value Proposition, USP, Social Proof, Risk Removal, CTA.
              Svaki naslov do 30 karaktera. Svaki mora imati smisla sa bilo kojim drugim.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">4</span>
            <div>
              <strong>Dodajte H7 prema temperaturi</strong>
              <span className="text-gray-500"> — Ovo je vaš varijabilni slot. Hladan saobraćaj dobija drugi
              Problem/Pain naslov, topao drugi USP, vrući drugi Social Proof.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">5</span>
            <div>
              <strong>Napišite 2-3 opisa</strong>
              <span className="text-gray-500"> — D1: Problem + Solution (sa ključnom reči). D2: Proof + CTA.
              D3 (opciono): Offer + Urgency — samo ako postoji realan deadline.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">6</span>
            <div>
              <strong>Dodajte extensions</strong>
              <span className="text-gray-500"> — Minimum: Sitelinks (4+), Callouts (4+), Structured Snippets (2+ headera),
              Business Name, Logo. Opciono: Image, Call, Location, Promotion.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">7</span>
            <div>
              <strong>Proverite i pokrenite</strong>
              <span className="text-gray-500"> — Pročitajte svaki naslov sa svakim drugim — da li imaju smisla zajedno?
              Da li se nešto ponavlja? Uploadujte, NE pinirajte (osim compliance), sačekajte approval.</span>
            </div>
          </div>
        </div>
      </div>

      <hr />


      {/* ── Sekcija 7: Opisi ── */}
      <h2 id="strategija-za-opise">Strategija za opise (descriptions)</h2>
      <p>
        Naslovi privlače pažnju — opisi zatvaraju posao. Google prikazuje 2 opisa od vaša
        2-4. Svaki opis ima do 90 karaktera i treba da <strong>proširi</strong> poruku iz naslova, ne da je
        ponovi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-xs">D1</span>
            <p className="font-heading font-semibold text-sm mb-0">Problem + Solution</p>
          </div>
          <p className="text-sm text-gray-600 mb-2">Validirajte bol korisnika i ponudite rešenje. Uključite ključnu reč — Google je bolduje.</p>
          <p className="text-xs bg-gray-100 rounded p-2 text-gray-700 mb-0">
            &quot;Zapušena kanalizacija ugrožava vaš dom. Naš tim rešava problem istog dana sa garancijom.&quot;
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-xs">D2</span>
            <p className="font-heading font-semibold text-sm mb-0">Proof + CTA</p>
          </div>
          <p className="text-sm text-gray-600 mb-2">Izgradite poverenje konkretnim dokazom i završite sa jasnim pozivom na akciju.</p>
          <p className="text-xs bg-gray-100 rounded p-2 text-gray-700 mb-0">
            &quot;200+ uspešnih intervencija u Beogradu. Pozovite sada — dolazimo za 30 minuta, 0-24.&quot;
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-xs">D3</span>
            <p className="font-heading font-semibold text-sm mb-0">Offer + Urgency (opciono)</p>
          </div>
          <p className="text-sm text-gray-600 mb-2">Koristite SAMO ako postoji realan deadline. Lažna urgentnost ubija poverenje.</p>
          <p className="text-xs bg-gray-100 rounded p-2 text-gray-700 mb-0">
            &quot;Popust 20% za sve intervencije do kraja meseca. Ograničen broj termina — zakažite danas.&quot;
          </p>
        </div>
      </div>

      <hr />


      {/* ── Sekcija 8: Pinning ── */}
      <h2 id="pinning-da-ili-ne">Pinning — da ili ne?</h2>
      <p>
        Pinning je mogućnost da &quot;zaključate&quot; određeni naslov na poziciju 1, 2 ili 3.
        Zvuči korisno, ali u 90% slučajeva <strong>šteti performance-u</strong>.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Pravilo: Default = NE PINIRAJTE. Pinning ograničava Google-ovu optimizaciju i smanjuje broj kombinacija koje algoritam može da testira.
        </p>
      </div>

      <h3>Kada je pinning opravdan</h3>
      <ul>
        <li><strong>Regulatorni zahtevi</strong> — finansijske usluge, zdravstvo (disclaimer mora biti vidljiv)</li>
        <li><strong>Brend smernice</strong> — ime brenda mora biti u prvom naslovu</li>
        <li><strong>Kritična relevantnost</strong> — ključna reč MORA biti u headline 1 za specifičnu kampanju</li>
      </ul>

      <h3>Kada NIJE opravdan</h3>
      <ul>
        <li>&quot;Želim da se ovaj naslov prikazuje češće&quot; — pustite Google da optimizuje</li>
        <li>&quot;Ovo je moj najbolji naslov&quot; — ako jeste, Google će ga sam favorizovati</li>
        <li>&quot;Svaki naslov na tačnu poziciju&quot; — ovo je ETA pristup, ne RSA</li>
      </ul>

      <hr />


      {/* ── Sekcija 9: Najčešće greške ── */}
      <h2 id="najcesce-rsa-greske">Najčešće RSA greške i kako ih izbeći</h2>

      <div className="space-y-4 my-6">
        {/* Greška 1 */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-red-50 border-b border-red-200 px-5 py-3">
            <p className="font-heading font-semibold text-red-800 text-sm mb-0">Greška: Svih 15 naslova popunjeno</p>
          </div>
          <div className="bg-green-50 px-5 py-3">
            <p className="font-heading font-semibold text-green-800 text-sm mb-1">Rešenje:</p>
            <p className="text-green-700 text-sm mb-0">
              Koristite 7-8 naslova. Više = data poverty. Svaki dodatni naslov smanjuje
              količinu podataka po kombinaciji, što usporava učenje algoritma.
            </p>
          </div>
        </div>

        {/* Greška 2 */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-red-50 border-b border-red-200 px-5 py-3">
            <p className="font-heading font-semibold text-red-800 text-sm mb-0">Greška: Svi naslovi govore istu stvar</p>
          </div>
          <div className="bg-green-50 px-5 py-3">
            <p className="font-heading font-semibold text-green-800 text-sm mb-1">Rešenje:</p>
            <p className="text-green-700 text-sm mb-0">
              Koristite angle-based distribution. Svaki naslov ima drugačiju ulogu:
              relevantnost, korist, dokaz, uklanjanje rizika, poziv na akciju. 7 uglova = 7 razloga da kliknu.
            </p>
          </div>
        </div>

        {/* Greška 3 */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-red-50 border-b border-red-200 px-5 py-3">
            <p className="font-heading font-semibold text-red-800 text-sm mb-0">Greška: Opisi ponavljaju naslove</p>
          </div>
          <div className="bg-green-50 px-5 py-3">
            <p className="font-heading font-semibold text-green-800 text-sm mb-1">Rešenje:</p>
            <p className="text-green-700 text-sm mb-0">
              Opisi treba da PROŠIRE poruku. Naslov kaže &quot;500+ Zadovoljnih Klijenata&quot;, opis
              objašnjava: &quot;Pridružite se kompanijama koje su smanjile CPA za 40% u prvih 90 dana.&quot;
            </p>
          </div>
        </div>

        {/* Greška 4 */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-red-50 border-b border-red-200 px-5 py-3">
            <p className="font-heading font-semibold text-red-800 text-sm mb-0">Greška: Sve pinirano na pozicije</p>
          </div>
          <div className="bg-green-50 px-5 py-3">
            <p className="font-heading font-semibold text-green-800 text-sm mb-1">Rešenje:</p>
            <p className="text-green-700 text-sm mb-0">
              Pinirajte SAMO ako regulativa to zahteva. Inače, pustite Google da optimizuje.
              Pinovanje pretvara RSA u ETA — gubitе se prednosti automatske kombinacije.
            </p>
          </div>
        </div>

        {/* Greška 5 */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-red-50 border-b border-red-200 px-5 py-3">
            <p className="font-heading font-semibold text-red-800 text-sm mb-0">Greška: Ad Strength kao jedina metrika</p>
          </div>
          <div className="bg-green-50 px-5 py-3">
            <p className="font-heading font-semibold text-green-800 text-sm mb-1">Rešenje:</p>
            <p className="text-green-700 text-sm mb-0">
              Ad Strength je Googleov input signal, ne performance metrika. Ciljajte &quot;Good&quot;
              ili bolje, ali merite uspeh po CTR-u, konverzijama i CPA — ne po oceni u interfejsu.
            </p>
          </div>
        </div>

        {/* Greška 6 */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-red-50 border-b border-red-200 px-5 py-3">
            <p className="font-heading font-semibold text-red-800 text-sm mb-0">Greška: Lažna urgentnost u opisima</p>
          </div>
          <div className="bg-green-50 px-5 py-3">
            <p className="font-heading font-semibold text-green-800 text-sm mb-1">Rešenje:</p>
            <p className="text-green-700 text-sm mb-0">
              &quot;Samo danas!&quot; koji traje celu godinu — ruši poverenje. Koristite D3 (urgency)
              SAMO kada imate realan deadline. Inače — preskočite i ostanite na 2 opisa.
            </p>
          </div>
        </div>
      </div>

      <hr />


      {/* ── Sekcija 10: Testiranje ── */}
      <h2 id="rsa-testiranje-iteration-loop">RSA testiranje — The Iteration Loop</h2>
      <p>
        Pisanje RSA-a je samo početak. Pravi rezultati dolaze kroz sistematsko testiranje
        i iteraciju. Koristim četiri-koračni ciklus koji se ponavlja svake 2-8 nedelja.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">1</span>
            <div>
              <strong>Templatize</strong>
              <span className="text-gray-500"> — Dokumentujte koji angle stoji na kom slotu. Čuvajte zapis
              svakog RSA-a u tabeli sa slot + angle + headline tekst. Ovo je vaš &quot;playbook&quot;.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">2</span>
            <div>
              <strong>Aggregate</strong>
              <span className="text-gray-500"> — Prikupite podatke. Gledajte: impressions po headline-u,
              CTR po kombinaciji (Asset report u Google Ads), konverzije po ad varijanti.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">3</span>
            <div>
              <strong>Diagnose</strong>
              <span className="text-gray-500"> — Klasifikujte svaki headline u jedan od 4 kvadranta:</span>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Kvadrant</th>
              <th className="py-3 px-4 font-heading font-semibold">Impressions</th>
              <th className="py-3 px-4 font-heading font-semibold">Performance</th>
              <th className="py-3 px-4 font-heading font-semibold">Akcija</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Champions</span></td>
              <td className="py-3 px-4">Visoke</td>
              <td className="py-3 px-4">Visok CTR/Conv</td>
              <td className="py-3 px-4">Zadržite i učite iz njih</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Hidden Gems</span></td>
              <td className="py-3 px-4">Niske</td>
              <td className="py-3 px-4">Visok CTR/Conv</td>
              <td className="py-3 px-4">Duplirajte angle u novom RSA-u</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Silent Killers</span></td>
              <td className="py-3 px-4">Visoke</td>
              <td className="py-3 px-4">Nizak CTR/Conv</td>
              <td className="py-3 px-4">Zamenite — troše impressions bez rezultata</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Trash</span></td>
              <td className="py-3 px-4">Niske</td>
              <td className="py-3 px-4">Nizak CTR/Conv</td>
              <td className="py-3 px-4">Uklonite i napišite nov headline</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">4</span>
            <div>
              <strong>Iterate</strong>
              <span className="text-gray-500"> — Na osnovu dijagnoze: zamenite Trash i Silent Killers,
              skalirajte Champions i Hidden Gems. Napravite novu verziju RSA-a i pustite je.
              Ponovite ciklus za 2-4 nedelje.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Koliko dugo čekati pre analize</p>
        <p className="text-blue-800 text-sm mb-0">
          Minimum 2 nedelje i 1,000+ impressions po RSA varijanti. Bez toga, podaci su nepouzdani.
          Za naloge sa manjim volumenom, čekajte 4 nedelje. Nikada ne menjajte RSA u prvih 7 dana —
          dajte Google-u vremena za learning period.
        </p>
      </div>

      <hr />


      {/* ── Sekcija 11: FAQ ── */}
      <h2 id="cesta-pitanja-o-rsa">Česta pitanja o RSA</h2>

      <div className="space-y-3 my-6">
        <details className="group border border-gray-200 rounded-lg">
          <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-heading font-semibold text-sm hover:bg-gray-50">
            Koliko RSA-ova treba imati po ad grupi?
            <span className="ml-2 text-gray-400 group-open:rotate-45 transition-transform text-lg">+</span>
          </summary>
          <div className="px-5 pb-4 text-sm text-gray-600">
            Google preporučuje minimum 1 RSA po ad grupi, a optimalno 2-3. Dva RSA-a vam
            omogućavaju A/B testiranje različitih pristupa (npr. jedan fokusiran na cenu,
            drugi na kvalitet). Ne idite preko 3 — fragmentišete podatke.
          </div>
        </details>

        <details className="group border border-gray-200 rounded-lg">
          <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-heading font-semibold text-sm hover:bg-gray-50">
            Da li Ad Strength &quot;Excellent&quot; garantuje bolje rezultate?
            <span className="ml-2 text-gray-400 group-open:rotate-45 transition-transform text-lg">+</span>
          </summary>
          <div className="px-5 pb-4 text-sm text-gray-600">
            Ne. Ad Strength je Googleov input signal koji meri raznolikost i relevantnost
            vaših naslova — nije performance metrika. RSA sa &quot;Good&quot; Ad Strength i preciznim
            angle-based naslovima često nadmašuje &quot;Excellent&quot; RSA sa 15 generičkih naslova.
            Ciljajte &quot;Good&quot; kao minimum, ali merite uspeh po CTR-u i konverzijama.
          </div>
        </details>

        <details className="group border border-gray-200 rounded-lg">
          <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-heading font-semibold text-sm hover:bg-gray-50">
            Da li da koristim AI za pisanje RSA naslova?
            <span className="ml-2 text-gray-400 group-open:rotate-45 transition-transform text-lg">+</span>
          </summary>
          <div className="px-5 pb-4 text-sm text-gray-600">
            Da, ali sa framework-om. 59% PPC profesionalaca već koristi LLM-ove za ad copy
            (State of PPC 2026). Problem nastaje kad AI piše bez strukture — dobijate 15
            varijacija iste poruke. Koristite angle-based slot distribution kao briф za AI:
            &quot;Napiši H1 (Relevance Anchor, 30 karaktera), H2 (Value Proposition)...&quot; itd.
          </div>
        </details>

        <details className="group border border-gray-200 rounded-lg">
          <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-heading font-semibold text-sm hover:bg-gray-50">
            Koliko često treba menjati RSA?
            <span className="ml-2 text-gray-400 group-open:rotate-45 transition-transform text-lg">+</span>
          </summary>
          <div className="px-5 pb-4 text-sm text-gray-600">
            Koristite Iteration Loop: svake 2-8 nedelja analizirajte podatke, identifikujte
            Champions i Silent Killers, i napravite novu iteraciju. Ne menjajte RSA pre nego
            što imate minimum 1,000 impressions. Česte promene resetuju learning period.
          </div>
        </details>

        <details className="group border border-gray-200 rounded-lg">
          <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-heading font-semibold text-sm hover:bg-gray-50">
            Šta ako nemam dovoljno impressions za 7-8 naslova?
            <span className="ml-2 text-gray-400 group-open:rotate-45 transition-transform text-lg">+</span>
          </summary>
          <div className="px-5 pb-4 text-sm text-gray-600">
            Za ad grupe sa manje od 5,000 impressions mesečno, koristite 5-6 naslova. Manje
            naslova = manje kombinacija = brže učenje. Bolje je imati 5 preciznih naslova nego
            8 od kojih su 3 slaba.
          </div>
        </details>

        <details className="group border border-gray-200 rounded-lg">
          <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-heading font-semibold text-sm hover:bg-gray-50">
            Kako RSA funkcioniše sa Smart Bidding-om?
            <span className="ml-2 text-gray-400 group-open:rotate-45 transition-transform text-lg">+</span>
          </summary>
          <div className="px-5 pb-4 text-sm text-gray-600">
            RSA i Smart Bidding su komplementarni. Smart Bidding (tCPA, tROAS) optimizuje
            <em>koliko</em> platite za klik, dok RSA optimizuje <em>koji</em> oglas se prikazuje.
            Prema State of PPC 2026, tROAS i tCPA su najkorišćenije i najzadovoljnije bid
            strategije. Kombinacija: Smart Bidding + angle-based RSA = automatizacija sa strukturom.
          </div>
        </details>

        <details className="group border border-gray-200 rounded-lg">
          <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-heading font-semibold text-sm hover:bg-gray-50">
            Da li RSA zamenjuje potrebu za A/B testiranjem?
            <span className="ml-2 text-gray-400 group-open:rotate-45 transition-transform text-lg">+</span>
          </summary>
          <div className="px-5 pb-4 text-sm text-gray-600">
            Ne. RSA optimizuje kombinacije <em>unutar</em> jednog oglasa. A/B testiranje
            (Google Ads Experiments) testira <em>različite pristupe</em> — npr. RSA fokusiran
            na cenu vs RSA fokusiran na kvalitet. Oba su potrebna za kompletnu optimizaciju.
          </div>
        </details>
      </div>

      {/* ── FAQ Schema JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Koliko RSA-ova treba imati po ad grupi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Google preporučuje minimum 1 RSA po ad grupi, a optimalno 2-3. Dva RSA-a vam omogućavaju A/B testiranje različitih pristupa. Ne idite preko 3 jer fragmentišete podatke.",
                },
              },
              {
                "@type": "Question",
                name: "Da li Ad Strength \"Excellent\" garantuje bolje rezultate?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ne. Ad Strength je Googleov input signal koji meri raznolikost i relevantnost vaših naslova — nije performance metrika. Ciljajte \"Good\" kao minimum, ali merite uspeh po CTR-u i konverzijama.",
                },
              },
              {
                "@type": "Question",
                name: "Da li da koristim AI za pisanje RSA naslova?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Da, ali sa framework-om. 59% PPC profesionalaca koristi LLM-ove za ad copy. Koristite angle-based slot distribution kao brief za AI umesto slobodnog generisanja.",
                },
              },
              {
                "@type": "Question",
                name: "Koliko često treba menjati RSA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Koristite Iteration Loop: svake 2-8 nedelja analizirajte podatke, identifikujte Champions i Silent Killers, i napravite novu iteraciju. Ne menjajte RSA pre nego što imate minimum 1,000 impressions.",
                },
              },
              {
                "@type": "Question",
                name: "Kako RSA funkcioniše sa Smart Bidding-om?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RSA i Smart Bidding su komplementarni. Smart Bidding optimizuje koliko platite za klik, dok RSA optimizuje koji oglas se prikazuje. Kombinacija tROAS/tCPA + angle-based RSA daje automatizaciju sa strukturom.",
                },
              },
              {
                "@type": "Question",
                name: "Da li RSA zamenjuje potrebu za A/B testiranjem?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ne. RSA optimizuje kombinacije unutar jednog oglasa. A/B testiranje testira različite pristupe — npr. RSA fokusiran na cenu vs RSA fokusiran na kvalitet. Oba su potrebna.",
                },
              },
            ],
          }),
        }}
      />

      <hr />


      {/* ── Zaključak ── */}
      <h2 id="zakljucak">Zaključak</h2>
      <p>
        RSA nije &quot;popuni 15 naslova i čekaj&quot;. To je sistematski framework gde svaki
        naslov ima jasnu ulogu, gde ton prati temperaturu saobraćaja, i gde se rezultati
        poboljšavaju kroz iteraciju — ne kroz nagađanje.
      </p>
      <p>
        Ključne stvari za pamćenje:
      </p>
      <ul>
        <li><strong>7-8 naslova</strong> — matematika je jasna, data poverty je realan</li>
        <li><strong>Angle-based distribution</strong> — svaki naslov pokriva drugačiji persuazijski ugao</li>
        <li><strong>Traffic Temperature</strong> — prilagodite H7 i CTA temperaturi pretrage</li>
        <li><strong>Ne pinirajte</strong> — osim ako regulativa to zahteva</li>
        <li><strong>Iteration Loop</strong> — testirajte, dijagnostikujte, iterajte svake 2-8 nedelja</li>
      </ul>

      {/* CTA boks */}
      <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 my-8 text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Želite da vam neko napiše RSA-ove koji konvertuju?
        </p>
        <p className="text-slate-300 mb-4 text-sm">
          Upravljam Google Ads nalozima za eCommerce, Lead Gen i lokalne biznise.
          Besplatan audit vašeg naloga — uključujući analizu postojećih RSA-ova.
        </p>
        <Link
          href="/kontakt"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-heading font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Zatražite besplatan audit
        </Link>
      </div>

      <hr />


      {/* ── Povezani vodiči ── */}
      <h2 id="povezani-vodici">Povezani vodiči</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }} className="block border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-md transition-all no-underline">
          <p className="font-heading font-semibold text-sm text-gray-900 mb-1">Quality Score vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako poboljšati QS i smanjiti CPC za 28%+</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }} className="block border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-md transition-all no-underline">
          <p className="font-heading font-semibold text-sm text-gray-900 mb-1">Ključne reči vodič</p>
          <p className="text-xs text-gray-500 mb-0">Istraživanje, match tipovi i organizacija</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="block border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-md transition-all no-underline">
          <p className="font-heading font-semibold text-sm text-gray-900 mb-1">Google Ads greške</p>
          <p className="text-xs text-gray-500 mb-0">Najčešće greške i kako ih izbeći</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="block border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-md transition-all no-underline">
          <p className="font-heading font-semibold text-sm text-gray-900 mb-1">Koliko košta Google Ads</p>
          <p className="text-xs text-gray-500 mb-0">Realni troškovi, budžeti i ROI kalkulacija</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="block border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-md transition-all no-underline">
          <p className="font-heading font-semibold text-sm text-gray-900 mb-1">Negativne ključne reči</p>
          <p className="text-xs text-gray-500 mb-0">Zaštitite budžet od irelevantnih pretraga</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-md transition-all no-underline">
          <p className="font-heading font-semibold text-sm text-gray-900 mb-1">Conversion Tracking vodič</p>
          <p className="text-xs text-gray-500 mb-0">Pravilno merenje rezultata u Google Ads</p>
        </Link>
      </div>


      {/* ── Footer: datum + autor ── */}
      <hr />
      <p className="text-xs text-gray-400 mt-4">
        Poslednje ažuriranje: Mart 2026 &middot; Autor: Slobodan Jelisavac, Google Ads consultant &middot; Vreme čitanja: ~14 min
      </p>
    </>
  );
}
