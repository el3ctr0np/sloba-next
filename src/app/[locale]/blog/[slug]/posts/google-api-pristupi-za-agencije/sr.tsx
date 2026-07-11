import { Link } from "@/i18n/navigation";

export default function GoogleApiPristupiZaAgencijePost() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Jedan Google Cloud projekat pokriva Google Ads, GA4, Search Console, Tag Manager, Merchant Center i Data Manager API - ne trebaju vam odvojene aplikacije za svaki alat. Najveća greška koju sam video (i sam napravio): OAuth consent screen ostaje u Testing modu, pa refresh token prestane da radi tačno posle 7 dana.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Cloud projekat za sve API-je</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7 dana</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Rok pre nego što Testing token umre</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">6</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">API-ja u ovom vodiču</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0 €</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Cena Cloud projekta i pristupa</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Brzi odgovor
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Koje Google API pristupe treba da ima PPC agencija?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          Agencija koja vodi više naloga treba pristup za šest servisa: <strong>Google Ads API</strong> (reporting i upravljanje kampanjama), <strong>GA4 Data i Admin API</strong> (izveštaji i podešavanja naloga), <strong>Search Console API</strong> (pretraga i indeksiranje), <strong>Tag Manager API</strong> (audit i izmena tagova), <strong>Merchant Center API</strong> (feed status i product issues) i noviji <strong>Data Manager API</strong> (server-side slanje audience podataka). Svih šest se autentifikuje preko istog Google Cloud projekta - kreirate ga jednom, uključite API-je koji vam trebaju, i generišete OAuth kredencijale za svaki.
        </p>
      </div>

      <p>
        Kad sam prošao kroz aplikaciju za Google Ads API Basic Access, ispostavilo se da je developer token samo jedan deo slagalice. Ista agencija koja automatizuje reporting za Google Ads treba i GA4 podatke za attribution, Search Console podatke za SEO stranu, Tag Manager za tracking audit, i Merchant Center za Shopping feed dijagnostiku. Svaki od tih alata ima svoj API, svoj scope i svoja pravila, ali svi žive pod jednim krovom: Google Cloud projekat koji jednom podesite i onda samo dodajete servise.
      </p>
      <p>
        Ovaj vodič pokriva ceo taj krov, od nule. Prolazimo kroz temelj (Cloud projekat i OAuth consent screen, uključujući grešku koja mi je jednom ugasila token), pa kroz svaki od šest API-ja pojedinačno, sa scope-om koji vam treba i mestom gde se uključuje. Za Google Ads API developer token i brand verification pilot postoji poseban, detaljan vodič na koji ću linkovati u odgovarajućoj sekciji - ovde ga samo smeštam u širi kontekst.
      </p>

      <hr />
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#zasto-api-pristup" className="block py-1 text-base text-gray-700 hover:text-primary underline">Zašto agenciji trebaju API pristupi</a></li>
          <li><a href="#temelj-cloud-projekat-oauth" className="block py-1 text-base text-gray-700 hover:text-primary underline">Temelj: Cloud projekat i OAuth consent screen</a></li>
          <li><a href="#google-ads-api" className="block py-1 text-base text-gray-700 hover:text-primary underline">Google Ads API</a></li>
          <li><a href="#ga4-api" className="block py-1 text-base text-gray-700 hover:text-primary underline">Google Analytics 4: Data i Admin API</a></li>
          <li><a href="#search-console-api" className="block py-1 text-base text-gray-700 hover:text-primary underline">Google Search Console API</a></li>
          <li><a href="#tag-manager-api" className="block py-1 text-base text-gray-700 hover:text-primary underline">Google Tag Manager API</a></li>
          <li><a href="#merchant-center-api" className="block py-1 text-base text-gray-700 hover:text-primary underline">Merchant Center: Content API i Merchant API</a></li>
          <li><a href="#data-manager-api" className="block py-1 text-base text-gray-700 hover:text-primary underline">Data Manager API (Customer Match, server-side)</a></li>
          <li><a href="#tabela-pregled" className="block py-1 text-base text-gray-700 hover:text-primary underline">Pregled: koji API za šta</a></li>
          <li><a href="#checklist-setup" className="block py-1 text-base text-gray-700 hover:text-primary underline">Checklist: setup od nule</a></li>
          <li><a href="#faq-google-api-pristupi" className="block py-1 text-base text-gray-700 hover:text-primary underline">Često postavljana pitanja</a></li>
        </ol>
      </nav>

      <h2 id="zasto-api-pristup">Zašto agenciji trebaju API pristupi</h2>
      <p>
        Dok se nalozi broje na prste jedne ruke, interfejs je sasvim dovoljan. Otvorite Google Ads, pogledate performanse, otvorite GA4, uporedite brojke, gotovo. Problem nastaje kad broj naloga pređe desetak, a vreme koje imate na raspolaganju ostaje isto. Ručno otvaranje svakog naloga svako jutro nije održivo, i tu API pristup prestaje da bude "nice to have" i postaje jedini realan način da posao stane u dan.
      </p>
      <p>
        Konkretno, API pristup omogućava četiri stvari koje interfejs ne radi sam od sebe: automatizovani reporting koji se generiše bez da ga vi pokrećete, dashboarde koji povlače podatke sa više naloga na jedno mesto, bulk operacije (izmena budžeta na deset naloga odjednom, na primer) i, sve više, agentsku automatizaciju gde AI agent čita podatke preko API-ja i predlaže ili sprovodi akcije po unapred definisanim pravilima.
      </p>
      <p>
        Sve to zahteva da vaša agencija ima programski pristup podacima, ne samo pristup preko browsera. I tu dolazimo do prvog, i verovatno najvažnijeg uvida: ne treba vam posebna "aplikacija" za svaki alat.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Jedan Google Cloud projekat je vaša jedina "aplikacija" prema Google-u. U njemu uključite Google Ads API, GA4 API, Search Console API, Tag Manager API i ostale - svaki dodatni API je samo klik na "Enable" u istom projektu, ne novi projekat i ne nova registracija.
        </p>
      </div>

      <hr />

      <h2 id="temelj-cloud-projekat-oauth">Temelj: Cloud projekat i OAuth consent screen</h2>
      <p>
        Pre nego što dotaknete bilo koji pojedinačni API, postoje dve stvari koje morate podesiti jednom, na nivou celog projekta. Prva je sam Google Cloud projekat - besplatan, kreira se za par minuta preko Google Cloud Console-a, i služi kao kontejner u koji ćete kasnije uključivati API-je. Druga, i mnogo važnija za dugoročnu stabilnost, jeste OAuth consent screen.
      </p>
      <p>
        OAuth consent screen je ekran koji korisnik vidi kada vaša aplikacija (odnosno vi, kao developer) traži dozvolu da pristupi njegovim Google podacima - Ads nalogu, GA4 property-ju, Search Console-u. Svaki OAuth flow prolazi kroz njega, bez obzira na to koji od šest API-ja iz ovog vodiča koristite. I upravo tu se krije greška koja izgleda bezazleno dok vas ne udari.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Ključna lekcija</p>
        <p className="text-yellow-800 text-base mb-0">
          Ako OAuth consent screen ostane u statusu <strong>Testing</strong>, refresh token koji dobijete ističe posle <strong>7 dana</strong>, bez obzira na to koliko dobro sve ostalo radi. Svaka skripta koja se oslanja na taj token prestaje da radi tačno nedelju dana kasnije, obično bez jasne poruke o tome zašto. Meni se to desilo baš na jednom Merchant Center tokenu - projekat je ostao u Testing modu, sve je radilo savršeno prvih nekoliko dana, i onda je refresh naprosto prestao. Rešenje je jednostavno, ali ga morate uraditi svesno: u Cloud Console-u, pod OAuth consent screen, odnosno Google Auth Platform → Audience, prebacite publishing status sa Testing na <strong>In production</strong>.
        </p>
      </div>

      <p>
        Prebacivanje u Production ne znači da vam aplikacija mora biti javna ili da je neko spolja pregleda pre nego što proradi - za interne alate sa ograničenim brojem scope-ova, ovo je uglavnom samoposlužni proces bez dodatnog čekanja. Google zahteva verifikaciju sa ljudske strane samo kod određenih "sensitive" ili "restricted" scope-ova (na primer širi pristup Gmail-u), a za ono što agencija tipično koristi - Ads, Analytics, Search Console, Tag Manager, Merchant Center - status In production možete postaviti sami, odmah.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Iz mog iskustva</p>
        <p className="text-blue-800 text-base mb-0">
          Prvi put kada podešavate Cloud projekat, uradite ovaj korak odmah, pre nego što uopšte generišete prvi OAuth kredencijal. Testing mod ima smisla samo dok doslovno testirate autentifikaciju u prvih par sati - čim planirate da skripta radi duže od nedelju dana, status mora biti Production. Ovo je jeftin korak da propustite jednom, a skup da otkrivate kroz mrtvu automatizaciju.
        </p>
      </div>

      <hr />

      <h2 id="google-ads-api">Google Ads API</h2>
      <p>
        Google Ads API je verovatno prvi API po koji agencija poseže, jer direktno diže reporting i upravljanje kampanjama na nivo koji ručni rad ne može da isprati. Pristup se drži na nivou manager (MCC) naloga preko developer tokena, i taj token prolazi kroz tri nivoa: <strong>Explorer access</strong> (default, do 2.880 operacija dnevno na produkcijskim nalozima), <strong>Basic Access</strong> (do 15.000 operacija dnevno plus planning servisi) i <strong>Standard Access</strong> (bez dnevnog limita, za alate velikog obima).
      </p>
      <p>
        Explorer nivo je dovoljan da povlačite izveštaje i radite osnovne izmene na svojim nalozima, ali sa dva ograničenja koja se brzo osete: dnevni limit od 2.880 operacija i potpuno blokirani planning servisi. Pozivi ka Keyword Planner delu API-ja, za generisanje ideja za ključne reči ili procenu volumena pretrage, vraćaju grešku <code>DEVELOPER_TOKEN_NOT_APPROVED</code> sve dok ne dobijete Basic Access. To je i glavni praktični razlog da aplikaciju pošaljete pre nego što vam limiti stvarno zasmetaju.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Detaljan vodič</p>
        <p className="text-blue-800 text-base mb-0">
          Ceo proces aplikacije za Basic Access, uključujući noviji brand verification pilot koji ubrzava review sa dana ili nedelja na par sati, pokriven je korak po korak u odvojenom vodiču:{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-vodic" } }} className="underline text-blue-700 font-medium">
            Google Ads API Basic Access - vodič korak po korak
          </Link>. Ovde samo napominjem da OAuth scope koji vam treba je <code>https://www.googleapis.com/auth/adwords</code>, i da se sve dešava u istom Cloud projektu koji ste podesili u prethodnoj sekciji.
        </p>
      </div>

      <hr />

      <h2 id="ga4-api">Google Analytics 4: Data i Admin API</h2>
      <p>
        GA4 nudi dva odvojena API-ja koja rade različite stvari. <strong>Data API</strong> je onaj koji zovete za same izveštaje - metrike i dimenzije, praktično sve što vidite u GA4 interfejsu pod Reports, samo programski. <strong>Admin API</strong> upravlja strukturom naloga: property-jima, streams-ovima, custom dimenzijama i merama, korisničkim pristupima. Za tipičan dashboard ili noćni izveštaj, Data API je ono što zapravo koristite; Admin API vam zatreba kad automatizujete sam setup naloga, ne izvlačenje podataka iz njega.
      </p>
      <p>
        Oba API-ja se uključuju iz istog mesta: Cloud Console → APIs & Services → Library, pretraga "Google Analytics Data API" i "Google Analytics Admin API", pa Enable na svakom. Za čisto čitanje podataka (što je 95% agencijske upotrebe), scope <code>https://www.googleapis.com/auth/analytics.readonly</code> je sve što vam treba. Ako planirate i pisanje - kreiranje custom dimenzija preko API-ja, na primer - potreban vam je širi <code>analytics.edit</code> ili <code>analytics.manage.users</code> scope, zavisno od operacije.
      </p>
      <p>
        OAuth flow je isti kao za svaki drugi API u ovom vodiču: kredencijali iz vašeg Cloud projekta, korisnik (vlasnik GA4 naloga ili vi, ako ste dodati kao korisnik na property-ju) odobri pristup, vi dobijete refresh token koji čuvate i koristite za buduće pozive bez ponovnog prijavljivanja.
      </p>

      <hr />

      <h2 id="search-console-api">Google Search Console API</h2>
      <p>
        Search Console API pokriva tri stvari koje su relevantne za agenciju koja radi i SEO stranu, ili barem prati organski saobraćaj kao kontekst za Ads performanse: <strong>Search Analytics</strong> (upiti, klikovi, impresije, pozicija - osnova za svaki SEO izveštaj ili dashboard), <strong>URL Inspection</strong> (status indeksiranja pojedinačnih URL-ova) i <strong>Sitemaps</strong> (podnošenje i status sitemap fajlova).
      </p>
      <p>
        Scope koji vam treba za čitanje je <code>https://www.googleapis.com/auth/webmasters.readonly</code>; za akcije kao što je podnošenje sitemap-a, treba vam širi <code>webmasters</code> scope bez ".readonly" sufiksa.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno o granularnosti</p>
        <p className="text-yellow-800 text-base mb-0">
          Ispravan OAuth scope sam po sebi nije dovoljan. Search Console pristup se dodaje po property-ju (domenu ili URL-prefixu), ne globalno za nalog koji zove API. Ako niste dodati kao korisnik (owner ili full user) na konkretnom property-ju unutar samog Search Console-a, API poziv za taj sajt će vraćati praznu ili grešku, bez obzira na to koliko je vaš Cloud projekat ispravno podešen. Kod agencije sa deset klijenata, to znači deset odvojenih dodavanja pristupa, po jedno za svaki domen.
        </p>
      </div>

      <hr />

      <h2 id="tag-manager-api">Google Tag Manager API</h2>
      <p>
        Tag Manager API je koristan kad audit ili izmenu tagova, triggera i varijabli radite preko više naloga, umesto da klikćete kroz interfejs svakog kontejnera pojedinačno. Praktičan primer: skripta koja jednom nedeljno prođe kroz sve klijentske GTM kontejnere i proveri da li je Conversion Linker tag prisutan i aktivan, ili koja masovno doda isti trigger na više kontejnera odjednom.
      </p>
      <p>
        API razlaže pristup na nekoliko scope-ova, zavisno od toga šta radite: <code>tagmanager.readonly</code> za čitanje strukture, <code>tagmanager.edit.containers</code> za izmenu tagova/triggera/varijabli u radnom prostoru, <code>tagmanager.edit.containerversions</code> za kreiranje verzija, i <code>tagmanager.publish</code> za objavljivanje. Za čist audit dovoljan je readonly scope; čim počnete da menjate i objavljujete, trebaju vam sva četiri.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Pazite na rate limite</p>
        <p className="text-yellow-800 text-base mb-0">
          Tag Manager API ima znatno konzervativnije rate limite (broj upita u minuti) nego, na primer, Google Ads API. Ako pišete skriptu koja prolazi kroz veliki broj tagova ili više kontejnera odjednom, razbijte je u manje batch-eve sa pauzama između poziva - inače ćete udariti u 429 greške (too many requests) usred izvršavanja, obično baš na kontejneru gde vam je najviše stalo da promena prođe čisto.
        </p>
      </div>

      <hr />

      <h2 id="merchant-center-api">Merchant Center: Content API i Merchant API</h2>
      <p>
        Za svakog ko vodi Shopping kampanje, Merchant Center API rešava jedan konkretan problem: status feed-a i product issues se inače proveravaju ručno, po proizvodu, kroz interfejs koji nije napravljen za brzu proveru desetina hiljada artikala. Programski pristup vam daje feed status, diagnostics podatke i listu product issues (disapproved, warning, missing atributi) u strukturisanom obliku koji možete filtrirati, sortirati i ubaciti u dashboard.
      </p>
      <p>
        Postoje dve verzije: starija <strong>Content API for Shopping v2.1</strong>, koja i dalje radi i koju koristi većina postojećih integracija, i noviji, unificiraniji <strong>Merchant API</strong>, ka kojem Google postepeno usmerava nove integracije. Ako tek počinjete, vredi proveriti zvaničnu dokumentaciju za trenutni status oba API-ja pre nego što se odlučite, jer se granica između njih pomera. Scope za oba je isti: <code>https://www.googleapis.com/auth/content</code>.
      </p>
      <p>
        Za detaljan setup samog Merchant Center naloga (verifikacija, feed atributi, metode dostave feed-a) imam poseban vodič koji ne ponavljam ovde:{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "merchant-center-srbija-setup" } }} className="underline text-blue-700 font-medium">
          Google Merchant Center za Srbiju - kompletan setup vodič
        </Link>.
      </p>

      <hr />

      <h2 id="data-manager-api">Data Manager API (Customer Match, server-side)</h2>
      <p>
        Ovo je najnoviji dodatak u ovom vodiču, aktivan od 2025. godine nadalje. Data Manager API rešava jedan konkretan problem koji je do sada zahtevao ručan rad: slanje audience i conversion podataka (na primer Customer Match liste) direktno sa servera, bez ručnog izvoza CSV fajla i upload-a kroz Google Ads interfejs. Za agenciju koja vodi CRM integraciju sa Google Ads-om, to znači da nova ili ažurirana lista kupaca može automatski da se sinhronizuje, umesto da neko jednom mesečno preuzme i uploaduje fajl.
      </p>
      <p>
        Scope koji vam treba je <code>https://www.googleapis.com/auth/datamanager</code>. Ako već radite offline conversion import za B2B klijente, ovo je prirodan sledeći korak - server-side slanje audience podataka radi po sličnoj logici kao i slanje conversion podataka, samo za drugu vrstu signala.
      </p>

      <hr />

      <h2 id="tabela-pregled">Pregled: koji API za šta</h2>
      <p>
        Sedam redova ispod je referenca na koju se možete vratiti kad god podešavate novi Cloud projekat ili dodajete API postojećem.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">API</th>
              <th className="py-3 px-3 font-heading font-semibold">Čemu služi</th>
              <th className="py-3 px-3 font-heading font-semibold">Scope (osnovni)</th>
              <th className="py-3 px-3 font-heading font-semibold">Gde se uključuje</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Google Ads API</td>
              <td className="py-3 px-3">Reporting, upravljanje kampanjama, bulk izmene</td>
              <td className="py-3 px-3"><code>.../auth/adwords</code></td>
              <td className="py-3 px-3">API Center (MCC) + Cloud Console</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">GA4 Data API</td>
              <td className="py-3 px-3">Izveštaji, metrike, dimenzije programski</td>
              <td className="py-3 px-3"><code>.../auth/analytics.readonly</code></td>
              <td className="py-3 px-3">Cloud Console → API Library</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">GA4 Admin API</td>
              <td className="py-3 px-3">Nalozi, property-ji, custom dimenzije</td>
              <td className="py-3 px-3"><code>.../auth/analytics.edit</code></td>
              <td className="py-3 px-3">Cloud Console → API Library</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Search Console API</td>
              <td className="py-3 px-3">Search Analytics, URL Inspection, sitemaps</td>
              <td className="py-3 px-3"><code>.../auth/webmasters.readonly</code></td>
              <td className="py-3 px-3">Cloud Console → API Library</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Tag Manager API</td>
              <td className="py-3 px-3">Audit i izmena tagova/triggera, publish</td>
              <td className="py-3 px-3"><code>tagmanager.readonly</code> / <code>edit.containers</code> / <code>publish</code></td>
              <td className="py-3 px-3">Cloud Console → API Library</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Merchant Center (Content/Merchant API)</td>
              <td className="py-3 px-3">Feed status, diagnostics, product issues</td>
              <td className="py-3 px-3"><code>.../auth/content</code></td>
              <td className="py-3 px-3">Cloud Console → API Library</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Data Manager API</td>
              <td className="py-3 px-3">Server-side slanje audience/conversion podataka</td>
              <td className="py-3 px-3"><code>.../auth/datamanager</code></td>
              <td className="py-3 px-3">Cloud Console → API Library</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="checklist-setup">Checklist: setup od nule</h2>
      <p>
        Ako počinjete od potpune nule, redosled koraka izgleda ovako. Isti redosled važi bez obzira na to koji od šest API-ja vam je prioritet.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Kreirajte Google Cloud projekat</strong> <span className="text-gray-500">- besplatno, preko Cloud Console-a, par minuta. Ovo je vaš jedini "kontejner" za sve API-je iz ovog vodiča.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Podesite OAuth consent screen i odmah prebacite u Production</strong> <span className="text-gray-500">- ne ostavljajte status na Testing, jer refresh token ističe za 7 dana. Ovo je korak koji se najčešće preskače, a najskuplje se plaća.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Uključite API-je koji su vam potrebni</strong> <span className="text-gray-500">- Cloud Console → APIs & Services → Library, pretraga po imenu, Enable na svakom pojedinačno.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Generišite OAuth2 kredencijale</strong> <span className="text-gray-500">- client ID i client secret (ili service account, zavisno od toka koji koristite), preko Credentials sekcije istog projekta.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Uradite prvi OAuth flow i sačuvajte refresh token bezbedno</strong> <span className="text-gray-500">- korisnik (vi ili vlasnik naloga) odobri pristup jednom, vi čuvate refresh token u sigurnom mestu (env varijabla, secret manager), ne u kodu koji ide na Git.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Za Google Ads API - aplicirajte za developer token</strong> <span className="text-gray-500">- ovo je jedini korak sa čekanjem na review; ostalih pet API-ja rade odmah čim su uključeni i autentifikovani.</span></div>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="faq-google-api-pristupi">Često postavljana pitanja</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Da li mi treba poseban Cloud projekat za svaki API?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ne. Jedan Google Cloud projekat pokriva sve API-je koje ovaj vodič opisuje. Uključujete ih pojedinačno preko API Library-ja u istom projektu, a OAuth consent screen i kredencijali ostaju zajednički. Odvojene projekte ima smisla praviti samo ako želite čvrsto razdvajanje pristupa po klijentu ili timu, ne zato što svaki API to zahteva."
                }
              },
              {
                "@type": "Question",
                name: "Šta se dešava ako zaboravim da prebacim OAuth consent screen u Production?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Refresh token koji generišete dok je status na Testing prestaje da radi posle 7 dana, bez obzira na to koliko je sam API poziv ispravan. Svaka automatizacija koja se na njega oslanja jednostavno prestane da radi tačno nedelju dana kasnije. Rešenje je da status prebacite na In production pre nego što skripta počne da radi na duže staze, ne posle."
                }
              },
              {
                "@type": "Question",
                name: "Da li API pristup nešto košta?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ne, kreiranje Cloud projekta, uključivanje API-ja i generisanje OAuth kredencijala su besplatni. Google Ads API developer token takođe je besplatan za aplikaciju i korišćenje. Trošak se pojavljuje jedino ako prevaziđete besplatne kvote na pojedinim API-jima uz veliki obim poziva, što je retko za tipičnu agenciju sa desetak naloga."
                }
              },
              {
                "@type": "Question",
                name: "Koji API prvi da podesim ako tek počinjem?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ako imate Google Ads naloge kojima upravljate, krenite od Google Ads API-ja jer donosi najbrži i najmerljiviji povraćaj - automatski reporting i upozorenja. GA4 Data API je prirodan sledeći korak jer se skoro uvek koristi zajedno sa Ads podacima za attribution i izveštavanje."
                }
              },
              {
                "@type": "Question",
                name: "Koja je razlika između Content API for Shopping i novog Merchant API?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Content API for Shopping v2.1 je stariji, i dalje funkcionalan API koji koristi većina postojećih integracija za Merchant Center. Merchant API je noviji, unificiraniji naslednik ka kojem Google usmerava nova razvojna rešenja. Za nove integracije vredi proveriti trenutni status oba u zvaničnoj dokumentaciji pre odluke, jer se granica između njih pomera."
                }
              },
              {
                "@type": "Question",
                name: "Da li mi treba programer za sve ovo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Osnovno razumevanje pomaže, ali ne morate biti programer u klasičnom smislu. Google nudi zvanične klijentske biblioteke za više jezika za skoro sve API-je iz ovog vodiča, a AI agenti danas mogu da napišu i održavaju veći deo skripti za reporting i automatizaciju, uz vaše jasno definisane zahteve o tome šta treba da rade."
                }
              },
              {
                "@type": "Question",
                name: "Da li jedan refresh token pokriva više klijentskih naloga?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zavisi od API-ja. Kod Google Ads API-ja, developer token na MCC nivou automatski pokriva sve klijentske naloge povezane pod njim, jednim tokenom. Kod GA4, Search Console i Merchant Center, pristup se dodaje po nalogu ili property-ju, pa vam za svaki novi klijentski property ili nalog treba da budete dodati kao korisnik, čak i ako OAuth kredencijali ostaju isti."
                }
              }
            ]
          })
        }}
      />

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li mi treba poseban Cloud projekat za svaki API?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Ne. Jedan Google Cloud projekat pokriva sve API-je koje ovaj vodič opisuje. Uključujete ih pojedinačno preko API Library-ja u istom projektu, a OAuth consent screen i kredencijali ostaju zajednički. Odvojene projekte ima smisla praviti samo ako želite čvrsto razdvajanje pristupa po klijentu ili timu, ne zato što svaki API to zahteva.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta se dešava ako zaboravim da prebacim OAuth consent screen u Production?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Refresh token koji generišete dok je status na Testing prestaje da radi posle 7 dana, bez obzira na to koliko je sam API poziv ispravan. Svaka automatizacija koja se na njega oslanja jednostavno prestane da radi tačno nedelju dana kasnije. Rešenje je da status prebacite na In production pre nego što skripta počne da radi na duže staze, ne posle.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li API pristup nešto košta?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Ne, kreiranje Cloud projekta, uključivanje API-ja i generisanje OAuth kredencijala su besplatni. Google Ads API developer token takođe je besplatan za aplikaciju i korišćenje. Trošak se pojavljuje jedino ako prevaziđete besplatne kvote na pojedinim API-jima uz veliki obim poziva, što je retko za tipičnu agenciju sa desetak naloga.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koji API prvi da podesim ako tek počinjem?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Ako imate Google Ads naloge kojima upravljate, krenite od Google Ads API-ja jer donosi najbrži i najmerljiviji povraćaj - automatski reporting i upozorenja. GA4 Data API je prirodan sledeći korak jer se skoro uvek koristi zajedno sa Ads podacima za attribution i izveštavanje.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koja je razlika između Content API for Shopping i novog Merchant API?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Content API for Shopping v2.1 je stariji, i dalje funkcionalan API koji koristi većina postojećih integracija za Merchant Center. Merchant API je noviji, unificiraniji naslednik ka kojem Google usmerava nova razvojna rešenja. Za nove integracije vredi proveriti trenutni status oba u zvaničnoj dokumentaciji pre odluke, jer se granica između njih pomera.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li mi treba programer za sve ovo?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Osnovno razumevanje pomaže, ali ne morate biti programer u klasičnom smislu. Google nudi zvanične klijentske biblioteke za više jezika za skoro sve API-je iz ovog vodiča, a AI agenti danas mogu da napišu i održavaju veći deo skripti za reporting i automatizaciju, uz vaše jasno definisane zahteve o tome šta treba da rade.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li jedan refresh token pokriva više klijentskih naloga?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Zavisi od API-ja. Kod Google Ads API-ja, developer token na MCC nivou automatski pokriva sve klijentske naloge povezane pod njim, jednim tokenom. Kod GA4, Search Console i Merchant Center, pristup se dodaje po nalogu ili property-ju, pa vam za svaki novi klijentski property ili nalog treba da budete dodati kao korisnik, čak i ako OAuth kredencijali ostaju isti.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Treba vam kompletan API setup za agenciju?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          Postavljam Cloud projekat, OAuth pristupe i API integracije (Ads, GA4, Search Console, Tag Manager, Merchant Center) i noćnu automatizaciju za agencije i timove koji vode više naloga.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads API Basic Access</p>
          <p className="text-xs text-gray-500 mb-0">Detaljan vodič za developer token i brand verification.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "merchant-center-srbija-setup" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Merchant Center Setup</p>
          <p className="text-xs text-gray-500 mb-0">Kompletan setup naloga, feed atributi i verifikacija.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "ga4-google-ads-integracija" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">GA4 i Google Ads Integracija</p>
          <p className="text-xs text-gray-500 mb-0">Kako povezati GA4 podatke sa Google Ads optimizacijom.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "offline-conversion-import-b2b" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Offline Conversion Import za B2B</p>
          <p className="text-xs text-gray-500 mb-0">Server-side slanje conversion podataka preko API-ja.</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: 11. jul 2026.
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
