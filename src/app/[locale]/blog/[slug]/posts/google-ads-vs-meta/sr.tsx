import { Link } from "@/i18n/navigation";

export default function GoogleAdsVsMetaAdsPost() {
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
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="underline">Google Shopping</Link> kampanje
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
          <li><Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="underline">Remarketing</Link> za posetioce sajta &amp; cart abandoners</li>
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
          Meta kaže Meta (view-through). Istina je negde između. Koristite <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="underline">Google Analytics 4</Link> ili
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
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "agencija-vs-freelancer" } }} className="underline ml-1">agencija vs freelancer</Link>.
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
        <Link href="/usluge/performance-marketing" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance marketing</p>
          <p className="text-xs text-gray-500 mb-0">Upravljanje kampanjama na svim platformama</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Remarketing — Kompletni vodič
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kako vratiti 96% posetilaca koji odu bez kupovine
          </p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-oglasavanje-za-firme" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Google oglašavanje za firme
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Vodič za B2B kompanije i uslužne delatnosti
          </p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Koliko košta Google Ads?
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Realni troškovi oglašavanja u Srbiji i regionu
          </p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "ecommerce-vs-b2b" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
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

