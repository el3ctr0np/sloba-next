import { Link } from "@/i18n/navigation";

export default function RemarketingVodicPost() {
  return (
    <>
      {/* ── TL;DR boks ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Remarketing kampanje imaju 2-3x viši CTR i 50-70% niži CPA od hladnog
          saobraćaja. Ključ uspeha je segmentacija — ne tretirajte sve posetioce isto.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">96%</p>
            <p className="text-xs text-slate-400 mt-1">posetilaca ode bez konverzije</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">2-3x</p>
            <p className="text-xs text-slate-400 mt-1">viši CTR remarketing-a</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">50-70%</p>
            <p className="text-xs text-slate-400 mt-1">niži CPA</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">300-500%</p>
            <p className="text-xs text-slate-400 mt-1">prosečan ROI</p>
          </div>
        </div>
      </div>

      {/* ── Sekcija 1: Hook intro ── */}
      <h2>Zašto 96% posetilaca odlazi bez kupovine</h2>
      <p>
        Zamislite scenu: imate sajt, ulažete u Google Ads remarketing kampanje,
        posetilac dođe, pogleda proizvod ili uslugu — i ode. Bez kupovine, bez
        kontakta, bez traga. Statistika je neumoljiva: <strong>96 od 100
        posetilaca napusti sajt bez ikakve konverzije</strong>.
      </p>
      <p>
        To ne znači da vaš sajt ne valja. Ljudi su jednostavno zauzeti — otvorili
        su pet tabova, telefon im je zazvonio, odlučili su da &quot;razmisle još
        malo&quot;. Ali ono što <em>jeste</em> problem: većina oglašivača pusti te
        posetioce da odu i nikada ih više ne kontaktira.
      </p>
      <p>
        Tu remarketing menja igru. Umesto da trošite budžet isključivo na nove
        posetioce, remarketing kampanje vam omogućavaju da se vratite pred ljude
        koji su <strong>već pokazali interes</strong> — i to u trenutku kada su
        spremni da donesu odluku.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Iz mog iskustva</p>
        <p className="text-blue-800 text-sm">
          Nakon skoro decenije upravljanja Google Ads nalozima u regionu i
          inostranstvu, remarketing je najisplativiji tip kampanja koji možete
          pokrenuti. CTR je 2-3 puta viši od hladnog saobraćaja, a CPA je 50-70% niži.
        </p>
      </div>

      <p>
        U ovom vodiču prolazimo kroz sve što vam treba — od postavljanja prvog
        remarketing taga, preko segmentacije koja pravi razliku, do strategija
        koje u praksi donose rezultate. Bez teorije zarad teorije — samo ono što
        funkcioniše na realnim nalozima.
      </p>

      <hr />

      {/* ── Sekcija 2: Šta je remarketing ── */}
      <h2>Šta je remarketing i kako funkcioniše</h2>
      <p>
        <strong>Google Ads remarketing</strong> (ponekad nazvan i retargeting) je
        strategija koja vam omogućava da prikazujete oglase ljudima koji su već
        bili u kontaktu sa vašim biznisom. To mogu biti posetioci sajta, korisnici
        aplikacije, gledaoci YouTube videa ili ljudi sa vaše email liste.
      </p>
      <p>
        Princip je jednostavan, a efekat je snažan: umesto da gađate potpuno
        nepoznatu publiku, obraćate se ljudima koji vas već poznaju.
      </p>

      <h3>Kako remarketing funkcioniše korak po korak</h3>
      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Posetilac dođe na vaš sajt</strong> <span className="text-gray-500">— preko Google pretrage, oglasa ili direktno</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Google tag ga anonimno identifikuje</strong> <span className="text-gray-500">— pomoću cookie-ja ili login signala</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Posetilac odlazi bez konverzije</strong> <span className="text-gray-500">— što se dešava u 96% slučajeva</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Posetilac nastavlja da koristi internet</strong> <span className="text-gray-500">— pretražuje Google, gleda YouTube, čita portale</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Vaš remarketing oglas mu se prikazuje</strong> <span className="text-gray-500">— na pravom mestu u pravom trenutku</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Posetilac se vraća i konvertuje</strong> <span className="text-gray-500">— jer je podsetnik stigao kad je bio spreman</span></div>
          </div>
        </div>
      </div>

      <h3>Remarketing, retargeting ili prospecting — u čemu je razlika</h3>
      <p>
        Remarketing i retargeting su u praksi sinonimi. Google koristi termin
        &quot;remarketing&quot;, Meta (Facebook/Instagram) koristi &quot;retargeting&quot;
        — ali suština je ista: vraćate se pred ljude koji vas već znaju.
      </p>
      <p>
        Prospecting (cold targeting) je suprotnost — ciljate ljude koji nikada
        nisu čuli za vas. Evo direktnog poređenja:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Karakteristika</th>
              <th className="py-3 px-4 font-heading font-semibold">Remarketing</th>
              <th className="py-3 px-4 font-heading font-semibold">Prospecting (hladna publika)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Publika</td>
              <td className="py-3 px-4">Već vas poznaju</td>
              <td className="py-3 px-4">Ne znaju za vas</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Namera</td>
              <td className="py-3 px-4">Pokazali su interes</td>
              <td className="py-3 px-4">Pretpostavljena namera</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">CTR</td>
              <td className="py-3 px-4 text-green-700 font-semibold">2-3x viši</td>
              <td className="py-3 px-4">Osnovni nivo</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">CPA</td>
              <td className="py-3 px-4 text-green-700 font-semibold">50-70% niži</td>
              <td className="py-3 px-4">Osnovni nivo</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Obim</td>
              <td className="py-3 px-4">Ograničen (vaš saobraćaj)</td>
              <td className="py-3 px-4">Praktično neograničen</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Uloga</td>
              <td className="py-3 px-4">Zatvara prodaje</td>
              <td className="py-3 px-4">Donosi nove ljude</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Oba pristupa su neophodna. Prospecting puni levak, remarketing ga
        zatvara. Problem nastaje kada imate samo jedno od toga.
      </p>

      <hr />

      {/* ── Sekcija 3: Tipovi remarketing kampanja ── */}
      <h2>Tipovi remarketing kampanja u Google Ads</h2>
      <p>
        Google Ads nudi nekoliko vrsta remarketing kampanja, a svaka ima svoju
        namenu. Evo pregleda sa preporukom kada koristiti koji tip:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tip #1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Display remarketing</h3>
          <p className="text-sm text-gray-600 mb-0">
            Baneri na Google Display mreži — preko 2 miliona sajtova. Idealan kao
            prva remarketing kampanja za svaki nalog. Podseća posetioce da postojite.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tip #2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">RLSA (remarketing na pretrazi)</h3>
          <p className="text-sm text-gray-600 mb-0">
            Prilagođavate Search kampanje za ljude koji su već bili na sajtu —
            viši bidovi, šire ključne reči. Daje najbolji ROAS od svih tipova.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tip #3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Dinamički remarketing</h3>
          <p className="text-sm text-gray-600 mb-0">
            Automatski prikazuje tačne proizvode koje je posetilac gledao. Obavezan
            za eCommerce. Zahteva product feed u{" "}
            <Link href="/blog/google-shopping-vodic" className="underline">
              Google Merchant Center-u
            </Link>.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tip #4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">YouTube remarketing</h3>
          <p className="text-sm text-gray-600 mb-0">
            Video oglasi za ljude koji su posetili sajt, ili targetiranje gledaoca
            YouTube kanala. Odličan za branding i izgradnju poverenja.
          </p>
        </div>
      </div>
      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card my-4">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tip #5</p>
        <h3 className="text-base font-heading font-bold mt-0 mb-2">Customer Match</h3>
        <p className="text-sm text-gray-600 mb-0">
          Upload-ujete svoju email listu u Google Ads i targetirate te ljude preko
          Search-a, YouTube-a i Gmail-a. Savršen za win-back kampanje prema bivšim kupcima.
        </p>
      </div>

      <hr />

      {/* ── Sekcija 4: Kako postaviti remarketing ── */}
      <h2>Kako postaviti remarketing korak po korak</h2>
      <p>
        Postavljanje remarketing kampanje zahteva tri koraka: instalacija taga,
        povezivanje sa Google Analytics-om i verifikacija. Preporučujem da koristite
        Google Tag Manager (GTM) — daje vam fleksibilnost bez potrebe da dirate
        kod sajta svaki put.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <h3 className="mt-0 mb-4 font-heading font-bold">Korak 1: Instalacija Google Ads remarketing taga</h3>
        <p className="font-semibold mb-2">Preko Google Tag Manager-a (preporuka):</p>
        <ol className="mb-4">
          <li>Otvorite GTM i kreirajte novi tag</li>
          <li>Izaberite tip taga: <strong>Google Ads Remarketing</strong></li>
          <li>Unesite vaš Conversion ID (Google Ads → Tools → Audience Manager → Audience Sources)</li>
          <li>Postavite trigger na <strong>All Pages</strong></li>
          <li>Kliknite Publish</li>
        </ol>
        <p className="font-semibold mb-2">Direktna instalacija (alternativa):</p>
        <ol className="mb-0">
          <li>U Google Ads: Tools → Audience Manager → Audience Sources</li>
          <li>Pod Google Ads tag kliknite &quot;Set up tag&quot;</li>
          <li>Kopirajte kod i zalepite ga u <code>&lt;head&gt;</code> sekciju svake stranice</li>
        </ol>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Detaljan vodič</p>
        <p className="text-blue-800 text-sm mb-0">
          Za kompletno uputstvo o postavljanju tagova, pogledajte{" "}
          <Link href="/blog/conversion-tracking-vodic" className="underline">
            vodič za conversion tracking
          </Link>{" "}
          gde sve objašnjavam korak po korak.
        </p>
      </div>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <h3 className="mt-0 mb-4 font-heading font-bold">Korak 2: Povežite GA4 sa Google Ads-om</h3>
        <ol className="mb-0">
          <li>U Google Ads otvorite Tools → Linked Accounts</li>
          <li>Pronađite Google Analytics (GA4) i kliknite &quot;Link&quot;</li>
          <li>Izaberite vaš GA4 property</li>
          <li>Omogućite remarketing opciju</li>
        </ol>
      </div>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <h3 className="mt-0 mb-4 font-heading font-bold">Korak 3: Verifikacija i kreiranje lista</h3>
        <ol>
          <li>Idite na Audience Manager → Audience Sources</li>
          <li>Proverite da status taga bude <strong>&quot;Active&quot;</strong></li>
          <li>Sačekajte 24-48 sati da se lista počne puniti</li>
        </ol>
      </div>

      <p>
        Preporučujem da odmah kreirate ove osnovne remarketing liste:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Lista</th>
              <th className="py-3 px-4 font-heading font-semibold">Uslov</th>
              <th className="py-3 px-4 font-heading font-semibold">Trajanje</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Svi posetioci</td>
              <td className="py-3 px-4">URL sadrži: /</td>
              <td className="py-3 px-4">30 dana</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Gledaoci proizvoda</td>
              <td className="py-3 px-4">URL sadrži: /products/</td>
              <td className="py-3 px-4">14 dana</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Bez konverzije</td>
              <td className="py-3 px-4">Svi posetioci MINUS thank-you stranica</td>
              <td className="py-3 px-4">30 dana</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Napuštene korpe</td>
              <td className="py-3 px-4">URL sadrži: /cart/ MINUS /thank-you/</td>
              <td className="py-3 px-4">7 dana</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Prethodni kupci</td>
              <td className="py-3 px-4">URL sadrži: /thank-you/</td>
              <td className="py-3 px-4">180 dana</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Minimum veličina liste za aktiviranje: <strong>100 korisnika</strong> za Display,{" "}
          <strong>1.000</strong> za Search (RLSA) i YouTube.
        </p>
      </div>

      <hr />

      {/* ── Sekcija 5: Segmentacija ── */}
      <h2>Segmentacija — ključ uspeha remarketing kampanja</h2>
      <p>
        Ovo je deo gde većina oglašivača greši: kreiraju jednu remarketing listu
        (&quot;svi posetioci&quot;) i prikazuju im isti oglas. To je kao da u prodavnici
        kažete isto i onome ko je ušao prvi put i onome ko je stavio proizvod u
        korpu pa otišao.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Pravilna segmentacija je ono što razdvaja prosečan remarketing od
          onog koji donosi rezultate.
        </p>
      </div>

      <h3>Segmentacija po levku (funnel)</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Faza</th>
              <th className="py-3 px-4 font-heading font-semibold">Ko su</th>
              <th className="py-3 px-4 font-heading font-semibold">Strategija</th>
              <th className="py-3 px-4 font-heading font-semibold">Bid</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Vrh levka</td>
              <td className="py-3 px-4">Svi posetioci sajta</td>
              <td className="py-3 px-4">Generalna svest o brendu</td>
              <td className="py-3 px-4">Nizak</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Sredina levka</td>
              <td className="py-3 px-4">Gledali proizvod/uslugu</td>
              <td className="py-3 px-4">Relevantna poruka + benefiti</td>
              <td className="py-3 px-4">Srednji</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Dno levka</td>
              <td className="py-3 px-4">Napustili korpu / pricing</td>
              <td className="py-3 px-4">Urgentnost + ponuda</td>
              <td className="py-3 px-4">Visok</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Posle kupovine</td>
              <td className="py-3 px-4">Postojeći kupci</td>
              <td className="py-3 px-4">Cross-sell, upsell</td>
              <td className="py-3 px-4">Srednji</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Segmentacija po vremenu od posete</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Segment</th>
              <th className="py-3 px-4 font-heading font-semibold">Period</th>
              <th className="py-3 px-4 font-heading font-semibold">Pristup</th>
              <th className="py-3 px-4 font-heading font-semibold">Bid</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Vrući</span></td>
              <td className="py-3 px-4">1-3 dana</td>
              <td className="py-3 px-4">Direktan poziv na akciju</td>
              <td className="py-3 px-4">Najviši</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4"><span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded">Topli</span></td>
              <td className="py-3 px-4">4-14 dana</td>
              <td className="py-3 px-4">Podsetnik + prednosti</td>
              <td className="py-3 px-4">Visok</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Mlaki</span></td>
              <td className="py-3 px-4">15-30 dana</td>
              <td className="py-3 px-4">Ponovna angažovanost</td>
              <td className="py-3 px-4">Srednji</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Hladni</span></td>
              <td className="py-3 px-4">30-90 dana</td>
              <td className="py-3 px-4">Nova ponuda, promene</td>
              <td className="py-3 px-4">Nizak</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Segmentacija po ponašanju</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Ponašanje</th>
              <th className="py-3 px-4 font-heading font-semibold">Nivo namere</th>
              <th className="py-3 px-4 font-heading font-semibold">Poruka</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">Samo početna stranica</td>
              <td className="py-3 px-4">Nizak</td>
              <td className="py-3 px-4">Generalna svest o brendu</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Pregledao kategorije</td>
              <td className="py-3 px-4">Srednji</td>
              <td className="py-3 px-4">Prednosti konkretne kategorije</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">Gledao proizvod</td>
              <td className="py-3 px-4 text-green-700 font-semibold">Visok</td>
              <td className="py-3 px-4">Konkretni proizvod + ponuda</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Napustio korpu</td>
              <td className="py-3 px-4 text-green-700 font-semibold">Najviši</td>
              <td className="py-3 px-4">Urgentnost + popust</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">Tražio vaš brend</td>
              <td className="py-3 px-4">Brendovska namera</td>
              <td className="py-3 px-4">Poverenje + USP</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Primer kompletne remarketing kampanje</h3>
      <p>
        Ovako izgleda struktura kampanje kada se sva tri pristupa kombinuju:
      </p>
      <pre className="border-2 border-gray-900 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed">
        <code>{`Kampanja: Remarketing
│
├── Grupa oglasa: Napuštene korpe (1-7 dana)
│   ├── Lista: posetioci /cart/ MINUS /thank-you/
│   ├── Bid: Najviši
│   └── Poruka: "Završite kupovinu — besplatna dostava danas"
│
├── Grupa oglasa: Gledaoci proizvoda (7-14 dana)
│   ├── Lista: posetioci /products/
│   ├── Bid: Visok
│   └── Poruka: "Proizvod koji ste gledali vas čeka"
│
├── Grupa oglasa: Svi posetioci (14-30 dana)
│   ├── Lista: svi posetioci MINUS konvertovani
│   ├── Bid: Srednji
│   └── Poruka: "Otkrijte zašto nam klijenti veruju"
│
└── Grupa oglasa: Bivši kupci (90-180 dana)
    ├── Lista: posetioci /thank-you/
    ├── Bid: Srednji
    └── Poruka: "Pogledajte šta je novo u ponudi"`}</code>
      </pre>

      <hr />

      {/* ── Sekcija 6: 5 remarketing strategija ── */}
      <h2>5 remarketing strategija koje donose rezultate</h2>
      <p>
        Ovo su strategije koje koristim na klijentskim nalozima i koje
        konzistentno daju najbolje rezultate. Svaka je testirana na realnim
        kampanjama.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Vraćanje napuštenih korpi</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Najvrednija remarketing strategija za eCommerce. Oko 70% online kupovnih
          korpi biva napušteno, a remarketing može vratiti 10-15% tih kupaca.
        </p>
        <ul className="text-sm">
          <li>Kreirajte listu: posetioci /cart/ stranice MINUS /thank-you/</li>
          <li>Trajanje liste: 7 dana (kratak period = visoka namera)</li>
          <li>Ponudite konkretan razlog za povratak — besplatna dostava, mali popust, garancija</li>
          <li>Dinamički oglasi koji prikazuju tačne proizvode iz korpe daju najbolje rezultate</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">RLSA pojačanje bidova na pretrazi</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Strategija sa najboljim ROAS-om u mojoj praksi. Na postojeće
          Search kampanje dodate remarketing listu kao &quot;Observation&quot; i
          povećate bid za 30-100% za ljude koji su već posetili sajt.
        </p>
        <ul className="text-sm">
          <li>Rezultat: isti budžet, ali više konverzija od poznatih posetilaca</li>
          <li>Posebno efektno za brendovske i generičke pretrage</li>
          <li>Za napredni pristup — kreirajte posebnu RLSA kampanju sa širim ključnim rečima</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dinamički remarketing za online prodavnice</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Automatski prikazuje posetiocu tačne proizvode koje je gledao, sa
          aktuelnom cenom i slikom. Zahteva product feed i dynamic remarketing tag.
        </p>
        <ul className="text-sm">
          <li>Obavezan za eCommerce sa 50+ proizvoda</li>
          <li>Kombinujte sa promotivnim porukama (&quot;Sada -20%&quot;, &quot;Besplatna dostava&quot;)</li>
          <li>Kvalitetne slike proizvoda su ključne — loša slika ubija klik</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Sekvencijalne poruke</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Umesto da prikazujete isti oglas stalno, kreirajte seriju oglasa koja
          vodi korisnika kroz odluku:
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">Dan 1-3</span>
            <span>Podsetnik na proizvod/uslugu</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">Dan 4-7</span>
            <span>Socijalni dokaz (recenzije, broj klijenata)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">Dan 8-14</span>
            <span>Konkretna ponuda ili bonus</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Customer Match za vraćanje bivših kupaca</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Upload-ujte listu email adresa kupaca koji dugo nisu kupovali (6-12
          meseci) i targetirajte ih sa novim ponudama.
        </p>
        <ul className="text-sm">
          <li>Već znaju vaš brend i kvalitet</li>
          <li>Trošak akvizicije je minimalan u poređenju sa novim kupcem</li>
          <li>Cross-sell i upsell ponude imaju visoku stopu konverzije</li>
        </ul>
      </div>

      <hr />

      {/* ── Sekcija 7: Najčešće greške ── */}
      <h2>Najčešće greške u remarketing kampanjama i kako ih izbeći</h2>
      <p>
        Posle stotina audita Google Ads naloga, ovo su greške koje viđam
        najčešće. Dobra vest je da su sve lako popravljive.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Jedna lista za celu publiku</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Rešenje:</strong> Segmentirajte po ponašanju i vremenu.
              Čovek koji je napustio korpu zaslužuje drugačiju poruku od
              nekoga ko je samo pogledao početnu stranicu.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Bez ograničenja učestalosti prikazivanja</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Rešenje:</strong> Postavite frequency cap na 3-5 prikazivanja dnevno
              i 15-20 nedeljno. Bez toga, korisnik vidi vaš oglas 50 puta dnevno.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Prikazivanje oglasa konvertovanim korisnicima</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Rešenje:</strong> Uvek isključite ljude koji su već konvertovali
              (osim za cross-sell kampanje). Nema smisla trošiti budžet na nekoga
              ko je juče kupio isti proizvod.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Isti oglas mesecima</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Rešenje:</strong> Osvežite kreative svakih 2-4 nedelje.
              Čak i dobar oglas postane &quot;nevidljiv&quot; nakon previše prikazivanja.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Ista poruka za sve faze</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Rešenje:</strong> Prilagodite poruku segmentu — podsetnik za sveže
              posetioce, urgentnost za napuštene korpe, nova ponuda za hladnu publiku.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Previše kratak period liste</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Rešenje:</strong> Lista od 7 dana je ok za napuštene korpe, ali za
              generalne posetioce koristite 30-90 dana. Za B2B i do 180 dana.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Zanemarivanje privatnosti korisnika</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Rešenje:</strong> Obezbedite cookie consent banner i poštujte GDPR.
              Korisnici koji daju saglasnost su vrednija publika jer aktivno prihvataju komunikaciju.
            </p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Sekcija 8: Budžet ── */}
      <h2>Koliko budžeta izdvojiti za remarketing</h2>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Pravilo: 10-30% ukupnog Google Ads budžeta</p>
        <p className="text-sm text-yellow-900 mb-0">
          Tačan procenat zavisi od količine saobraćaja i veličine remarketing lista.
        </p>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Mesečni saobraćaj</th>
              <th className="py-3 px-4 font-heading font-semibold">Udeo za remarketing</th>
              <th className="py-3 px-4 font-heading font-semibold">Očekivani efekat</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Do 5.000 poseta</td>
              <td className="py-3 px-4">10-15%</td>
              <td className="py-3 px-4">Osnovno pokrivanje, Display fokus</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">5.000 - 20.000 poseta</td>
              <td className="py-3 px-4">15-20%</td>
              <td className="py-3 px-4">Segmentacija + RLSA</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">20.000+ poseta</td>
              <td className="py-3 px-4">20-30%</td>
              <td className="py-3 px-4">Puna segmentacija + dinamički remarketing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Zašto remarketing zaslužuje veći deo budžeta?</p>
        <p className="text-blue-800 text-sm mb-0">
          Proračun je jasan: ako vam prospecting kampanja donese CPA od 2.000 RSD,
          remarketing kampanja za iste konverzije obično donese CPA od 600-1.000 RSD.
          To znači <strong>2-3 puta više konverzija za isti novac</strong>.
          ROI od 300-500% je realan za dobro postavljene remarketing kampanje.
        </p>
      </div>

      <hr />

      {/* ── Sekcija 9: FAQ ── */}
      <h2>Često postavljana pitanja o remarketing-u</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko traje remarketing lista?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Možete postaviti trajanje od 1 do 540 dana. Podrazumevano je 30 dana.
            Za eCommerce, preporučujem 7 dana za napuštene korpe, 30 dana za opšte
            posetioce i 180 dana za bivše kupce.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko korisnika treba da imam na listi za početak?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum je 100 korisnika za Display kampanje i 1.000 za Search (RLSA) i
            YouTube. Ako vaš sajt ima mali saobraćaj, počnite sa Display
            remarketing-om dok lista naraste dovoljno za RLSA.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li remarketing funkcioniše nakon iOS ograničenja privatnosti?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Da, ali sa određenim ograničenjima. First-party podaci (vaš sajt, vaš
            tag) i dalje funkcionišu pouzdano. Third-party tracking je ograničen na
            Apple uređajima. Preporučujem kombinaciju Google Ads taga, GA4
            audience-a i Customer Match-a za najbolju pokrivenost.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li je remarketing napadan za korisnike?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Može biti — ako je loše postavljen. Tri stvari sprečavaju negativan
            utisak: frequency cap (3-5 prikazivanja dnevno), relevantne poruke
            prilagođene segmentu i redovno osvežavanje kreativa.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koja je razlika između remarketing-a i retargeting-a?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Praktično nikakva. Google koristi termin &quot;remarketing&quot;, Meta
            (Facebook/Instagram) koristi &quot;retargeting&quot;. Princip je
            identičan — prikazujete oglase ljudima koji su već bili u kontaktu sa
            vašim biznisom.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Mogu li koristiti remarketing za B2B, ne samo za online prodavnice?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Apsolutno. B2B remarketing je izuzetno efikasan jer su prodajni ciklusi
            duži (30-90+ dana), pa je potrebno više kontaktnih tačaka pre konverzije.
            Kombinacija RLSA kampanja i Display remarketing-a sa stručnim sadržajem
            (case study, vodič, webinar) odlično funkcioniše za B2B.
          </div>
        </details>
      </div>

      <hr />

      {/* ── Sekcija 10: Zaključak + CTA ── */}
      <h2>Zaključak — iskoristite potencijal posetilaca koji već dolaze</h2>
      <p>
        Google Ads remarketing nije komplikovan, ali zahteva promišljen pristup.
        Razlika između &quot;imamo remarketing&quot; i &quot;imamo remarketing
        koji donosi rezultate&quot; leži u tri stvari: pravilna segmentacija,
        prilagođene poruke i redovna optimizacija.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">Ključne stvari iz ovog vodiča:</p>
        <ul className="space-y-2 text-sm">
          <li>Remarketing kampanje imaju <strong>2-3x viši CTR</strong> i <strong>50-70% niži CPA</strong> od hladnog saobraćaja</li>
          <li>Segmentacija po ponašanju, vremenu i fazi levka pravi ogromnu razliku</li>
          <li>Izdvojite <strong>10-30% budžeta</strong> za remarketing — ROI od 300-500% je realan</li>
          <li>Izbegavajte jednu listu za sve, postavite frequency cap i osvežavajte kreative</li>
          <li>Pratite konverzije precizno — bez toga ne znate šta funkcioniše</li>
        </ul>
      </div>

      {/* ── CTA boks ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Želite da neko pregleda vaše remarketing kampanje?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Analiziraćemo vaš nalog i dati vam konkretne preporuke — besplatno, bez obaveza.
        </p>
        <Link
          href="/kontakt"
          className="btn-secondary inline-block"
        >
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      {/* ── Interni linkovi ── */}
      <h2>Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/remarketing" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing usluge</p>
          <p className="text-xs text-gray-500 mb-0">Kako vam mogu pomoći sa remarketing kampanjama</p>
        </Link>
        <Link href="/blog/conversion-tracking-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion tracking vodič</p>
          <p className="text-xs text-gray-500 mb-0">Zašto vaše kampanje ne rade bez pravilnog tracking-a</p>
        </Link>
        <Link href="/blog/google-shopping-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako povećati ROAS sa Shopping kampanjama</p>
        </Link>
        <Link href="/blog/kljucne-reci-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Ključne reči vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kompletan vodič za keyword istraživanje</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Januar 2026
      </div>
      <div className="text-sm text-gray-500">
        Autor: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}
