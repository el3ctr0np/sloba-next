import { Link } from "@/i18n/navigation";

export default function PmaxAuditChecklistSR() {
  return (
    <>
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Performance Max spaja Search, Shopping, Display, YouTube, Discover, Gmail i Maps u jednu automatizovanu kampanju, i baš zato mu treba sopstveni audit, ne generička Google Ads lista provere. Ispod: 38 tačaka provere kroz 8 grupa, za svaku gde da proverite u interfejsu i koji je crveni signal da nešto ne valja.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">38</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">tačaka provere</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">8</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">grupa liste</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">50</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">search tema po asset grupi</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">10.000</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">negativnih reči po kampanji (limit od 2026)</p>
          </div>
        </div>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Kratak odgovor
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Šta je Performance Max audit i po čemu se razlikuje od opšteg Google Ads audita?
        </p>
        <p className="text-sm md:text-base text-gray-700 mb-0 leading-relaxed">
          <strong>Performance Max audit</strong> proverava kontrole specifične za PMax - strukturu asset grupa, kvalitet feed-a, negativne ključne reči, brand isključenja, audience signale i izveštavanje po kanalu - umesto provera na nivou ključne reči i oglasa koje radi standardni Search audit. PMax je nekada bio crna kutija u kojoj se skoro ništa nije moglo proveriti sem toga da li je Ad Strength dobar. Promene iz 2026. (negativne reči do 10.000 po kampanji, izveštaj po kanalu, brand isključenja, data isključenja) pretvorile su ga u tip kampanje koji se stvarno može ozbiljno auditovati.
        </p>
      </div>

      <hr />

      {/* ── Why PMax needs its own audit ── */}
      <h2 id="zasto-pmax-trazi-poseban-audit">Zašto Performance Max traži poseban audit</h2>
      <p>
        Ako još niste pročitali punu mehaniku - strukturu, asset grupe, bidding, kad PMax ima smisla naspram standardnog Shopping-a - krenite od{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }} className="underline font-semibold">Performance Max vodiča</Link>
        . Taj post pokriva kratak sažetak audita, ovaj je puna verzija, sa tačnim mestom provere i crvenim signalom za svaku tačku.
      </p>
      <p>
        Standardni Search audit se oslanja na podatke na nivou ključne reči: Quality Score, izveštaj o pretragama, tipovi podudaranja, prilagođavanje ponuda po ključnoj reči. Performance Max većinu toga prikazuje agregatno, nemate pogled po ključnoj reči, i dobar deo automatizacije (kako se budžet deli po kanalima, koji audience signal je doveo do koje konverzije) je dugo bio crna kutija. Zato opšta{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="underline font-semibold">Google Ads audit lista provere</Link>
        {" "}pokriva PMax u jednoj rečenici (svaku asset grupu tretirajte kao grupu oglasa, jedna tema, ne kanta za sve), a ostatak upućuje ovde. Ako još niste odradili audit celog naloga, prvo to uradite, ovaj post pretpostavlja da PMax već postoji unutar relativno zdravog naloga i ide duboko samo u taj tip kampanje.
      </p>
      <p>
        Šta je 2026. promenilo sam audit: negativne ključne reči su prešle sa limita od 100 po kampanji na{" "}
        <a href="https://support.google.com/google-ads/answer/15726455?hl=en" target="_blank" rel="noopener noreferrer">10.000 po kampanji</a>
        , izveštavanje po kanalu je stiglo{" "}
        <a href="https://blog.google/products/ads-commerce/channel-performance-reporting-coming-to-performance-max/" target="_blank" rel="noopener noreferrer">januara 2026</a>
        {" "}pa konačno vidite podelu Search/Shopping/Display/YouTube, a brand isključenja i data isključenja su PMax-u dali kontrolu targetiranja koju nikad nije imao. Polovina tačaka ispod pre dve godine nije ni postojala kao tačka provere.
      </p>

      {/* ── TOC ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#zasto-pmax-trazi-poseban-audit" className="block py-1 text-base text-gray-700 hover:text-primary underline">Zašto Performance Max traži poseban audit</a></li>
          <li><a href="#grupa-1-podesavanje-struktura" className="block py-1 text-base text-gray-700 hover:text-primary underline">Grupa 1: Podešavanje kampanje i struktura</a></li>
          <li><a href="#grupa-2-merenje" className="block py-1 text-base text-gray-700 hover:text-primary underline">Grupa 2: Merenje i praćenje konverzija</a></li>
          <li><a href="#grupa-3-asset-grupe-kreativa" className="block py-1 text-base text-gray-700 hover:text-primary underline">Grupa 3: Asset grupe i kreativa</a></li>
          <li><a href="#grupa-4-kvalitet-feeda" className="block py-1 text-base text-gray-700 hover:text-primary underline">Grupa 4: Kvalitet feed-a (retail PMax)</a></li>
          <li><a href="#grupa-5-brand-safety-iskljucenja" className="block py-1 text-base text-gray-700 hover:text-primary underline">Grupa 5: Brand safety i isključenja</a></li>
          <li><a href="#grupa-6-kanali-izvestavanje" className="block py-1 text-base text-gray-700 hover:text-primary underline">Grupa 6: Kanali i izveštavanje</a></li>
          <li><a href="#grupa-7-budzet-bidding" className="block py-1 text-base text-gray-700 hover:text-primary underline">Grupa 7: Budžet i bidding</a></li>
          <li><a href="#grupa-8-search-teme-audience-signali" className="block py-1 text-base text-gray-700 hover:text-primary underline">Grupa 8: Search teme i audience signali</a></li>
          <li><a href="#koliko-cesto" className="block py-1 text-base text-gray-700 hover:text-primary underline">Koliko često raditi ovu listu provere</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Najčešća pitanja</a></li>
          <li><a href="#povezani-vodici" className="block py-1 text-base text-gray-700 hover:text-primary underline">Povezani vodiči</a></li>
        </ol>
      </nav>

      {/* ── Interactive tool CTA ── */}
      <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-bold mb-2">Radije da vas alat vodi kroz listu?</p>
        <p className="text-lg text-white font-heading font-semibold mb-3 leading-snug">
          Istih 38 tačaka postoji i kao interaktivna provera: odgovarate OK, Problem, Ne znam ili N/A, a alat vam vrati ponderisan skor po grupi i ukupno, plus redosled popravki po odnosu uticaja i napora.
        </p>
        <p className="text-slate-300 text-sm mb-5">
          Radi u pretraživaču, čuva progres i ne traži email da biste videli rezultat.
        </p>
        <Link href="/resursi/pmax-check" className="btn-secondary inline-block">Otvorite PMax Check &rarr;</Link>
      </div>

      <hr />

      {/* ── Group 1 ── */}
      <h2 id="grupa-1-podesavanje-struktura">Grupa 1: Podešavanje kampanje i struktura</h2>
      <p>
        Problemi u strukturi se gomilaju. Loše podeljena asset grupa ili zaboravljeno podešavanje URL expansion-a tiho troše budžet mesecima pre nego što iko primeti, jer PMax to ne prikazuje onako kako bi izveštaj na nivou ključne reči.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Asset grupe su tematski dosledne</p>
            <p className="text-sm text-gray-500 mb-1">Gde: kartica Asset groups</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: sredstva za nepovezane kategorije proizvoda nagurana u jednu grupu</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Broj asset grupa odgovara veličini kataloga i biznisa</p>
            <p className="text-sm text-gray-500 mb-1">Gde: kartica Asset groups</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: jedna asset grupa pokriva 50+ artikala, ili 10+ grupa radi na malom budžetu</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">URL expansion je svesna odluka, ne podrazumevano stanje</p>
            <p className="text-sm text-gray-500 mb-1">Gde: podešavanja kampanje &rarr; URL expansion</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: ostavljeno uključeno, a da niko nije svesno tako odlučio, saobraćaj sleće na stranice koje niste planirali</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Final URL po asset grupi je tačan i bez redirekcija</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Asset group &rarr; Final URL</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: generička početna stranica umesto stvarne stranice proizvoda ili kategorije</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Cilj kampanje i konverzioni cilj su pravilno podešeni</p>
            <p className="text-sm text-gray-500 mb-1">Gde: podešavanja kampanje &rarr; Goal</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: kampanja se optimizuje ka sporednoj akciji umesto ka onoj koja stvarno nosi rezultat</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Group 2 ── */}
      <h2 id="grupa-2-merenje">Grupa 2: Merenje i praćenje konverzija</h2>
      <p>
        Svaki audit počinje ovde iz razloga: PMax licitira na osnovu podataka o konverzijama koje mu dajete, pa rupa u praćenju ne samo da sakriva problem, nego aktivno usmerava algoritam na pogrešan cilj. Ako još niste proverili osnove - da li se tag pali, Enhanced Conversions, primarni naspram sekundarnih ciljeva - prvo to uradite uz{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="underline">vodič za praćenje konverzija</Link>
        . Ovo ispod je specifično za ono što PMax radi sa tim podacima.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">6</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Primarna konverziona akcija je jasno označena, sekundarne su isključene iz optimizacije</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Goals &rarr; Conversions</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: klik na dugme ili pregled stranice postavljen kao primaran</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">7</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Vrednost konverzije je tačna za Target ROAS (stvaran prihod, ne fiksna cifra)</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Goals &rarr; Conversions &rarr; Value settings</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: fiksna vrednost na svakoj konverziji kod prodavnice sa promenljivim cenama</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">8</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Enhanced conversions je uključen</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Goals &rarr; Conversions &rarr; Enhanced conversions status</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: i dalje isključen, pogotovo na nalogu koji najveći deo budžeta troši kroz Smart Bidding</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">9</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Import offline konverzija povezan za B2B (dobijen posao ili kvalifikovan lid iz CRM-a)</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Goals &rarr; Conversions &rarr; Import</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: PMax se optimizuje čisto po broju popunjenih formi, bez ikakvog signala o kvalitetu lida koji se vraća nazad, pogledajte{" "}
              <Link href={{ pathname: "/blog/[slug]", params: { slug: "offline-conversion-import-b2b" } }} className="underline">vodič za import offline konverzija</Link>
              {" "}ako se ovo odnosi na vas</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">10</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Conversion window odgovara dužini prodajnog ciklusa</p>
            <p className="text-sm text-gray-500 mb-1">Gde: podešavanja konverzione akcije, podrazumevano 30 dana, za B2B 60-90 dana</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: podrazumevani prozor na dugom B2B ciklusu, tiho ispada deo kasnih konverzija iz podataka na kojima PMax licitira</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Group 3 ── */}
      <h2 id="grupa-3-asset-grupe-kreativa">Grupa 3: Asset grupe i kreativa</h2>
      <p>
        Ocene sredstava (asset ratings) i ritam osvežavanja su dve stvari koje najčešće vidim preskočene. Ad Strength se proveri jednom na lansiranju i nikad više, a najbolje ocenjeno sredstvo od pre šest meseci je zastarelo dok se algoritam i dalje oslanja na njega.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">11</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Ocene sredstava (Low / Good / Best) pregledane po grupi</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Asset group &rarr; Asset ratings</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: sredstvo ocenjeno kao Low i dalje aktivno posle 30+ dana</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">12</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Svaki slot je popunjen - minimum 3-5 naslova, 2-4 opisa, sva tri formata slike (kvadrat, portret, pejzaž), video</p>
            <p className="text-sm text-gray-500 mb-1">Gde: detalj asset grupe</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: prazan slot za portret sliku ili video</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">13</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Video sredstva ubačena ručno tamo gde postoji materijal, ne prepuštena automatskom generisanju</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Asset group &rarr; Videos, do 15 videa po grupi, podignuto sa 5 u{" "}
              <a href="https://support.google.com/google-ads/editor/answer/16924635?hl=en" target="_blank" rel="noopener noreferrer">Google Ads Editor izmeni iz 2026</a>
            </p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: nijedan uploadovan video, sve automatski generisano od statičnih slika</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">14</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Testiranje asset seta uključeno svuda gde ima dovoljno saobraćaja da se rezultat pročita</p>
            <p className="text-sm text-gray-500 mb-1">Gde: kartica Experiments</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: ista kreativa nedirnuta 6+ meseci, nikad testirana naspram alternative</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">15</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Kreativa se osvežava po ritmu, minimum na 2-3 meseca</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Asset group &rarr; datum poslednje izmene</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: sredstva nepromenjena 6+ meseci</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Group 4 ── */}
      <h2 id="grupa-4-kvalitet-feeda">Grupa 4: Kvalitet feed-a (retail PMax)</h2>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Preskočite ovu grupu ako niste eCommerce</p>
        <p className="text-yellow-800 text-base mb-0">Cela sekcija važi samo za Performance Max koji radi na Shopping feedu, dakle feed iz Merchant Center-a pokreće kampanju. Lead-gen ili B2B PMax bez feed-a proizvoda ide pravo na Grupu 5.</p>
      </div>

      <p>
        Problemi u feed-u su u PMax-u gori nego u standardnom Shopping-u, jer loš naslov ili nedostajući GTIN ne šteti samo jednoj kampanji, nego smanjuje podobnost za prikazivanje na svakoj Shopping površini koju PMax dodiruje. Za punu metodologiju feed-a pogledajte{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="underline">Google Shopping vodič</Link>
        .
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">16</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Naslovi su optimizovani - brend, tip i atributi, ne generički</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Merchant Center &rarr; Diagnostics</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: naslovi kraći od 5 reči ili bez naziva brenda</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">17</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">GTIN/MPN prisutan svuda gde je primenljivo</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Merchant Center feed</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: 10%+ brendiranih proizvoda bez GTIN-a</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">18</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Custom labels (0-4) mapirani na stvarnu strategiju - margin tier, sezona, performance</p>
            <p className="text-sm text-gray-500 mb-1">Gde: feed rules ili izvorni feed</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: custom labels prazni, ili popunjeni ali nikad korišćeni u listing grupama</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">19</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Listing groups segmentisani po custom label-u ili tipu proizvoda</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Asset group &rarr;{" "}
              <a href="https://support.google.com/google-ads/answer/11596074?hl=en" target="_blank" rel="noopener noreferrer">Listing groups</a>
            </p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: jedna listing grupa za ceo katalog, ili suprotno, stotine listing grupa koje dodaju granularnost koju niko ne koristi</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">20</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Zdravlje feed-a provereno - dostupnost, poklapanje cene sa sajtom uživo, kvalitet slike</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Merchant Center &rarr; Product status</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: odbijeni ili na čekanju artikli iznad 5% kataloga</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-bold mb-2">Drugo mišljenje</p>
        <p className="text-lg text-gray-900 font-heading font-semibold mb-4 leading-snug">
          Feed i negativne ključne reči su dve kategorije koje najčešće nalazim na nalozima koji nikad nisu prošli PMax-specifičan audit. Sve 38 tačaka prolazim lično kroz Deep Audit + Action Plan. Cena od €450.
        </p>
        <Link href="/usluge/google-ads-audit" className="btn-primary inline-block">Vidite šta pokriva audit &rarr;</Link>
      </div>

      <hr />

      {/* ── Group 5 ── */}
      <h2 id="grupa-5-brand-safety-iskljucenja">Grupa 5: Brand safety i isključenja</h2>
      <p>
        Ova grupa je dobila najoštriju nadogradnju u 2026. Skok limita negativnih ključnih reči na nivou kampanje na 10.000 i pojava data/audience isključenja su stvarno nove stvari, PMax ranije nije davao tu vrstu kontrole. Negativne reči na nivou naloga i brand isključenja su starije, zrelije kontrole, a većina naloga koje auditujem nije dirala nijednu od pet provera ispod od kada su prvi put podešene, ili ih nikad nije ni dirala.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">21</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Negativne ključne reči podešene na nivou naloga</p>
            <p className="text-sm text-gray-500 mb-1">Gde: liste negativnih ključnih reči na nivou naloga</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: lista ne postoji, ili je nedirnuta 60+ dana</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">22</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Negativne ključne reči podešene na nivou kampanje</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Campaign &rarr; Negative keywords, do{" "}
              <a href="https://support.google.com/google-ads/answer/15726455?hl=en" target="_blank" rel="noopener noreferrer">10.000 po kampanji</a>
              , primenjuju se na Search i Shopping inventar unutar PMax-a (ne na Display, YouTube, Gmail ni Discover)</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: nula negativnih na nivou kampanje kod PMax kampanje sa 30+ dana istorije potrošnje</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">23</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Brand isključenja podešena tamo gde su relevantna</p>
            <p className="text-sm text-gray-500 mb-1">Gde: podešavanja kampanje &rarr;{" "}
              <a href="https://support.google.com/google-ads/answer/14505308?hl=en" target="_blank" rel="noopener noreferrer">Brand exclusions</a>
              , sopstveni brend ako PMax ne treba da licitira na njega, ili termini konkurentskih brendova</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: PMax licitira na brend termine koje već pokriva Search brand kampanja, bez namernog razloga za to preklapanje</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">24</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Data/audience isključenja primenjena za postojeće kupce kad je cilj akvizicija</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Audience signals &rarr; Exclusions, vidite{" "}
              <a href="https://support.google.com/google-ads/answer/16451273?hl=en" target="_blank" rel="noopener noreferrer">Google-ov vodič za PMax isključenja</a>
            </p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: budžet ide na Customer Match listu postojećih kupaca dok je izjavljeni cilj akvizicija novih</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">25</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Placement i brand-safety podešavanja pregledana za mesta gde se oglasi prikazuju van Search/Shopping</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Reports &rarr; Predefined reports &rarr; Performance Max campaigns placement</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: prikazi pored neprimerenog sadržaja bez ijedne liste isključenja</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Crveni signal za celu grupu: ako se ne sećate kad ste poslednji put otvorili Brand exclusions ili Negative keywords za ovu kampanju, to je odgovor, idite proverite sada, oboje traje manje od 10 minuta.</p>
      </div>

      <hr />

      {/* ── Group 6 ── */}
      <h2 id="grupa-6-kanali-izvestavanje">Grupa 6: Kanali i izveštavanje</h2>
      <p>
        Pre januara 2026. ova grupa nije ni postojala, jednostavno niste mogli da vidite podelu Search/Shopping/Display/YouTube unutar PMax kampanje. Google je tog meseca najavio{" "}
        <a href="https://blog.google/products/ads-commerce/channel-performance-reporting-coming-to-performance-max/" target="_blank" rel="noopener noreferrer">izveštavanje po kanalu</a>
        , i to je najveće poboljšanje vidljivosti koje je PMax dobio od lansiranja.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">26</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Izveštaj po kanalu pregledan (Search, Search Partners, Display, YouTube, Discover, Gmail, Maps)</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Insights &rarr; Channel performance</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: 30%+ budžeta ide na Display/YouTube, a da niko nije svesno tako odlučio</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">27</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Trend potrošnje po kanalu se prati mesečno, ne proveri jednom pa zaboravi</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Channel performance &rarr; istorijski pregled</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: nikad otvoreno od kad je funkcija lansirana</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">28</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Podela po kanalu na nivou asset grupe i sredstva koristi se za dijagnostiku slabih mesta</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Channel performance, razlaganje po nivoima</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: reagovanje na agregatan CPA/ROAS broj, a da se nikad ne vidi koji kanal ga vuče dole</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">29</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Relevantnost Waze inventara proverena za store-goal kampanje sa fizičkom lokacijom</p>
            <p className="text-sm text-gray-500 mb-1">Gde: podešavanja store goals, Waze inventar je u trenutku pisanja dostupan samo u SAD, prema{" "}
              <a href="https://support.google.com/google-ads/answer/16710258?hl=en" target="_blank" rel="noopener noreferrer">Google-ovim beleškama o uvođenju</a>
              , koje najavljuju širenje van SAD u 2026</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: store-goal kampanja u SAD sa ciljem Store Visits, Store Sales ili Local Actions Directions koja nikad nije proverila da li se Waze inventar sam uključio i da li sredstva koja se tamo prikazuju uopšte imaju smisla</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Group 7 ── */}
      <h2 id="grupa-7-budzet-bidding">Grupa 7: Budžet i bidding</h2>
      <p>
        Ništa od ovoga na papiru nije ekskluzivno za PMax, ali PMax otežava da se uhvate loše bidding odluke. Prestrogo postavljen Target ROAS ne dovodi samo do manje potrošenog budžeta, može tiho da prebaci budžet ka Display prikazima na kojima je lakše pogoditi cilj, ali koji ne grade biznis.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">30</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Bidding strategija odgovara fazi kampanje</p>
            <p className="text-sm text-gray-500 mb-1">Gde: podešavanja kampanje &rarr; Bidding, Maximize Conversions za start, Target CPA/ROAS posle 4-6 nedelja podataka</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: Target CPA/ROAS uključen prvog dana bez ikakve istorije konverzija iza njega</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">31</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Target CPA/ROAS je realan, zasnovan na istorijskom učinku, ne na želji</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Bidding &rarr; Target history</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: cilj 50%+ agresivniji od trenutnog baznog nivoa</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">32</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Izmene ciljne vrednosti idu postepeno - 10-20% odjednom, razmak najmanje 7-10 dana</p>
            <p className="text-sm text-gray-500 mb-1">Gde: log izmena bidding strategije</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: česti veliki skokovi cilja u kratkom periodu</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">33</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Minimalan broj konverzija postoji pre nego što se osloni na Smart Bidding</p>
            <p className="text-sm text-gray-500 mb-1">Gde: konverzije (poslednjih 30 dana), Google-ova sopstvena preporuka je oko 30 konverzija/30 dana za Target CPA i oko 50 za Target ROAS</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: Target ROAS radi na manje od 20 konverzija mesečno</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">34</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Budžet nije plafon vašoj najprofitabilnijoj kampanji</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Campaign &rarr; Budget status</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: {`"Limited by budget"`} na profitabilnoj kampanji dok slabija svaki dan potroši ceo budžet</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Group 8 ── */}
      <h2 id="grupa-8-search-teme-audience-signali">Grupa 8: Search teme i audience signali</h2>
      <p>
        Signali su ulaz koji PMax koristi da krene pametno, umesto da krene od nule. Preskakanje ove grupe je najčešći način na koji vidim da se nalozi prepuštaju da PMax pogađa.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">35</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Search teme popunjene tamo gde kampanja ima asset grupe</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Asset group &rarr; Search themes, Google je 2025. podigao limit na{" "}
              <a href="https://support.google.com/google-ads/answer/16451273?hl=en" target="_blank" rel="noopener noreferrer">50 po asset grupi</a>, sa 25. Search teme žive na nivou asset grupe, pa PMax koji radi čisto na feedu (samo Shopping feed, bez asset grupa) nema šta tu da popuni. To je očekivano, ne rupa.</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: prazno kod lead-gen ili van retaila PMax kampanje koja ima asset grupe i imala bi koristi od njih</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">36</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Audience signali dodati i ažurni</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Asset group &rarr; Audience signals, Customer Match, posetioci sajta, in-market segmenti</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: nula signala, algoritam svaki put kreće od nule</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">37</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Sopstveni (first-party) podaci imaju prioritet nad generičkim in-market publikama</p>
            <p className="text-sm text-gray-500 mb-1">Gde: kompozicija audience signala, prvo email liste i posetioci sajta</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: u signalu su samo generičke in-market publike, nijedna Customer Match lista</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">38</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Insights kartica se redovno proverava za učinak publike i pretraživačkih kategorija</p>
            <p className="text-sm text-gray-500 mb-1">Gde: Insights &rarr; Audience insights</p>
            <p className="text-sm text-red-600 mb-0">Crveni signal: nikad otvoreno od lansiranja</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Cadence ── */}
      <h2 id="koliko-cesto">Koliko često raditi ovu listu provere</h2>
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Kvartalni pun prolaz plus mesečna brza provera</p>
        <p className="text-blue-800 text-base mb-0">
          Svih 38 tačaka jednom u kvartalu. Između dva puna prolaza, mesečna provera od 10 minuta pokriva ono što najbrže odstupa: negativne ključne reči (21-22), izveštaj po kanalu (26), status budžeta (34), ocene sredstava (11) i brand isključenja (23). Isti ritam kao{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="underline font-semibold">opšti audit naloga</Link>
          , radi doslednosti kroz ceo proces provere. Za kvartalni prolaz je najlakše otvoriti{" "}
          <Link href="/resursi/pmax-check" className="underline font-semibold">PMax Check</Link>
          , jer čuva odgovore pa sledeći put vidite šta se u međuvremenu promenilo.
        </p>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2 id="faq">Najčešća pitanja o Performance Max auditu</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li se search teme primenjuju na PMax kampanje koje vode samo na feed-u?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Ne. Search teme se podešavaju unutar Signals u asset grupi, a PMax kampanja koja vodi čisto na feed-u, dakle samo iz Merchant Center feed-a, bez asset grupa, tu strukturu nema. Ako vaša PMax kampanja radi isključivo na feedu, tačka 35 se na nju ne odnosi, preskočite pravo na audience signale iz Grupe 8, koji rade isto bez obzira na strukturu.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko listing grupa je previše?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Google nema objavljen tvrd plafon za to šta je previše, ali u praksi, kad počnete da sečete stotine listing grupa po kombinacijama atributa koje niko pojedinačno ne pregleda, dodali ste granularnost bez kontrole. Čistiji signal: ako listing grupa nikad nije dobila sopstvenu odluku o ponudi ili isključenju, verovatno je previše sitna. Segmentišite po onome na šta ćete stvarno reagovati, margin tier, tip proizvoda, custom label, ne po svakom mogućem atributu.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta se promenilo u izveštavanju Performance Max-a u 2026?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Najveća promena je izveštavanje po kanalu, najavljeno januara 2026, novi Channel performance pregled koji razbija PMax potrošnju i konverzije po Search, Search Partners, Display, YouTube, Discover, Gmail i Maps, na nivou kampanje, asset grupe i sredstva. Pre ovoga je PMax skoro sve prikazivao agregatno, pa nije bilo moguće utvrditi da li budžet zaista ide tamo gde mislite.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Po čemu se PMax audit razlikuje od audita Search kampanje?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Search audit radi ključnu reč po ključnu reč, Quality Score, tipovi podudaranja, izveštaj o pretragama, ponude po ključnoj reči. PMax većinu toga ne otkriva, auditujete asset grupe umesto grupa oglasa, kvalitet feed-a umesto samo teksta oglasa, izveštavanje po kanalu umesto podele po uređaju ili mreži. Suštinska pitanja su slična (da li je praćenje tačno, da li budžet ide tamo gde treba, da li je targetiranje pod kontrolom), ali skoro svaki odgovor na {`"gde proveriti"`} je drugačiji.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko često treba auditovati Performance Max kampanju?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Pun prolaz kroz svih 38 tačaka jednom u kvartalu, plus lakša mesečna provera onoga što najbrže odstupa, negativne ključne reči, izveštaj po kanalu, status budžeta, ocene sredstava i brand isključenja. Audit odmah van rasporeda ako učinak naglo padne, ako preuzimate nalog od druge agencije, ili ako ste upravo promenili konverzioni cilj ili bidding strategiju.
          </div>
        </details>
      </div>

      <hr />

      {/* ── Conclusion + CTA ── */}
      <h2 id="zakljucak">Zaključak</h2>
      <p>
        Performance Max je reputaciju crne kutije zaslužio pošteno, ali ta reputacija je dobrim delom zastarela dve godine. Negativne ključne reči, brand isključenja, data isključenja i izveštavanje po kanalu su ga pretvorili u tip kampanje sa stvarnim, proverljivim kontrolama. Nalog koji nijednu od 38 tačaka iznad nije proverio od kad je PMax pokrenut, radi na pretpostavkama iz 2023. o proizvodu iz 2026.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Treba vam drugi par očiju na PMax nalogu?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Deep Audit + Action Plan pokriva ovu listu provere zajedno sa punim auditom naloga od 100+ tačaka, sa prioritizovanim akcionim planom koji možete predati bilo kome ko vodi nalog. Cena od €450.
        </p>
        <Link href="/usluge/google-ads-audit" className="btn-secondary inline-block">Vidite šta pokriva audit</Link>
        <p className="text-slate-400 text-xs mt-4 mb-0">
          Radije prvo sami? Preuzmite{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" }, hash: "preuzmite-checklist" }} className="underline text-slate-300">besplatnu listu provere naloga od 105 tačaka (.xlsx)</Link>
          {" "}i koristite ovaj post uz nju za PMax detalje.
        </p>
      </div>

      <hr />

      {/* ── Related guides ── */}
      <h2 id="povezani-vodici">Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max kampanje: potpun vodič</p>
          <p className="text-xs text-gray-500 mb-0">Struktura, asset grupe, bidding i kad PMax ima smisla</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Audit Checklist</p>
          <p className="text-xs text-gray-500 mb-0">100+ tačaka za pun pregled celog naloga</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping kampanje: vodič</p>
          <p className="text-xs text-gray-500 mb-0">Optimizacija feed-a, struktura i bidding za Shopping</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Praćenje konverzija za Google Ads</p>
          <p className="text-xs text-gray-500 mb-0">GTM, GA4 i Google Ads tag, podešeno kako treba</p>
        </Link>

        <Link href="/usluge/performance-max" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Vođenje Performance Max kampanja</p>
          <p className="text-xs text-gray-500 mb-0">Kontinuirano podešavanje i optimizacija PMax-a kao usluga</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Strategija negativnih ključnih reči</p>
          <p className="text-xs text-gray-500 mb-0">Tipovi podudaranja, organizacija i proces za Search i PMax</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednja izmena: 29. avgust 2026.
      </div>
      <div className="text-sm text-gray-500">
        Autor: Slobodan Jelisavac, Google Ads konsultant
      </div>
    </>
  );
}
