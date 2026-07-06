import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function PoasVsRoasSR() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          POAS (Profit on Ad Spend) = profit ÷ potrošnja na oglase. Za razliku od ROAS-a, koji meri
          samo prihod, POAS meri stvaran novac koji vam ostaje u džepu. ROAS od 4× može biti gubitak
          ako je marža niska; POAS od 1.5× je uvek profitabilan, bez obzira na maržu. Na nalozima
          koje vodim, prosečan POAS je 1.78× — to je metrika koju gledam pre ROAS-a.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1.78×</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Prosečan POAS (naši nalozi)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1×</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">POAS break-even (uvek)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1÷m</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">ROAS break-even (zavisi od marže)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Naloga sa POAS u UI-ju nativno</p>
          </div>
        </div>
        <p className="text-sm text-slate-400 mt-6 mb-0 border-t border-slate-700 pt-4">
          Ovaj post je nadogradnja na{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "sta-je-roas" } }} className="underline text-slate-300 hover:text-white">
            Šta je ROAS i kako se računa
          </Link>{" "}
          — ako vam ROAS formula nije jasna, pročitajte prvo taj post.
        </p>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">Brzi odgovor</p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Šta je POAS i po čemu se razlikuje od ROAS-a?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          <strong>POAS (Profit on Ad Spend)</strong> = Profit ÷ Potrošnja na oglase. Formula uzima u obzir
          maržu — dok <GlossaryLink slug="roas">ROAS</GlossaryLink> = Prihod ÷ Potrošnja, POAS = (Prihod × Marža) ÷ Potrošnja.
          Prag za profitabilnost je uvek isti: POAS ispod 1× znači gubitak, iznad 1× znači profit —
          bez obzira na industriju ili maržu proizvoda. ROAS nema taj univerzalni prag jer ne zna ništa o vašoj margini.
        </p>
      </div>

      <hr />

      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#zasto-roas-laze" className="block py-1 text-base text-gray-700 hover:text-primary underline">Zašto ROAS laže — isti ROAS, različit profit</a></li>
          <li><a href="#break-even-matematika" className="block py-1 text-base text-gray-700 hover:text-primary underline">Break-even matematika: ROAS i POAS</a></li>
          <li><a href="#implementacija" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kako se POAS implementira praktično</a></li>
          <li><a href="#kada-nije-potreban" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kada POAS nije potreban</a></li>
          <li><a href="#bidding-promena" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta se menja u bidding strategiji</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Najčešća pitanja o POAS-u</a></li>
          <li><a href="#povezani-vodici" className="block py-1 text-base text-gray-700 hover:text-primary underline">Povezani vodiči</a></li>
        </ol>
      </nav>

      <h2 id="zasto-roas-laze">Zašto ROAS laže — isti ROAS, različit profit</h2>

      <p>
        Video sam ovo na desetine puta: klijent gleda dashboard, vidi ROAS od 4× na sve tri kategorije
        proizvoda, i zaključuje da su podjednako zdrave. U stvarnosti, jedna kategorija donosi solidan
        profit, druga jedva diše na nuli, a treća — uz identičan 4× ROAS — tiho gubi novac na svakoj
        prodaji. ROAS ne razlikuje ova tri scenarija jer ne zna ništa o ceni koštanja robe.
      </p>

      <p>
        Problem nije u tome što je ROAS &quot;loša&quot; metrika — ROAS radi tačno ono za šta je
        napravljen, meri odnos prihoda i potrošnje. Problem je u tome što ljudi ROAS koriste kao proxy
        za profitabilnost, iako profitabilnost zavisi od trećeg broja koji ROAS nikad ne uzima u obzir:
        cene koštanja robe (COGS). Kad taj broj varira po proizvodu — a u praksi skoro uvek varira, čak
        i u naizgled jednostavnim katalozima — ROAS prestaje da bude pouzdan vodič za budžetske odluke.
      </p>

      <p>
        Ovo se posebno vidi na eCommerce nalozima sa širokim asortimanom. Multi-kategorijski shop koji
        prodaje i visokomarginske aksesoare i niskomarginske &quot;anchor&quot; proizvode (npr. brendirana
        elektronika sa maržom 5–10%, kupljenih samo da privuku promet) će skoro uvek imati nalaz sličan
        gornjoj tabeli — negde u portfoliju postoji proizvod sa dobrim ROAS-om koji tiho jede profit iz
        ostatka naloga. Bez POAS pogleda, taj proizvod nastavlja da dobija budžet jer izgleda kao
        &quot;winner&quot; na svakom standardnom izveštaju.
      </p>

      <p>
        Evo ilustrativnog primera sa tri proizvoda koja imaju <strong>identičan ROAS od 4×</strong>, ali
        potpuno različitu maržu — brojevi su okrugli i namerno
        pojednostavljeni radi jasnoće, ne predstavljaju stvaran klijentski nalog:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Proizvod</th>
              <th className="py-3 px-3 font-heading font-semibold">Prihod</th>
              <th className="py-3 px-3 font-heading font-semibold">Spend</th>
              <th className="py-3 px-3 font-heading font-semibold">ROAS</th>
              <th className="py-3 px-3 font-heading font-semibold">Marža</th>
              <th className="py-3 px-3 font-heading font-semibold">Profit</th>
              <th className="py-3 px-3 font-heading font-semibold">POAS</th>
              <th className="py-3 px-3 font-heading font-semibold">Stvarnost</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">A — Premium linija</td>
              <td className="py-3 px-3">€10.000</td>
              <td className="py-3 px-3">€2.500</td>
              <td className="py-3 px-3 font-semibold">4.0×</td>
              <td className="py-3 px-3">50%</td>
              <td className="py-3 px-3">€5.000</td>
              <td className="py-3 px-3 font-semibold">2.0×</td>
              <td className="py-3 px-3"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Zdrav profit</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">B — Standardna linija</td>
              <td className="py-3 px-3">€10.000</td>
              <td className="py-3 px-3">€2.500</td>
              <td className="py-3 px-3 font-semibold">4.0×</td>
              <td className="py-3 px-3">25%</td>
              <td className="py-3 px-3">€2.500</td>
              <td className="py-3 px-3 font-semibold">1.0×</td>
              <td className="py-3 px-3"><span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-0.5 rounded">Break-even</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">C — Budget linija</td>
              <td className="py-3 px-3">€10.000</td>
              <td className="py-3 px-3">€2.500</td>
              <td className="py-3 px-3 font-semibold">4.0×</td>
              <td className="py-3 px-3">15%</td>
              <td className="py-3 px-3">€1.500</td>
              <td className="py-3 px-3 font-semibold">0.6×</td>
              <td className="py-3 px-3"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Gubitak</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-red-700 text-lg mb-2">Kritična tačka</p>
        <p className="text-base text-red-800 mb-0">
          Sve tri linije proizvoda imaju identičan ROAS od 4×. Ako gledate samo ROAS dashboard, izgledaju
          podjednako zdravo. U stvarnosti, Proizvod C gubi novac na svakoj prodaji, a Proizvod A generiše
          više od tri puta veći profit po istom spend-u. Bez POAS-a, budžet bi se mogao raspodeliti ravnomerno
          po sve tri linije — što znači da gurate novac u gubitaš dok podfinansirate najprofitabilniju liniju.
        </p>
      </div>

      <p>
        Ovo je razlog zašto &quot;odličan ROAS&quot; nije uvek dobra vest. Proizvod C bi na papiru izgledao
        kao najbolja kampanja u nalogu — isti ROAS, možda čak i veći volumen prodaje zbog niže cene — a
        zapravo je jedina koja aktivno topi profit iz ostatka naloga.
      </p>

      <hr />

      <h2 id="break-even-matematika">Break-even matematika: ROAS i POAS</h2>

      <p>
        Ovo je deo gde većina ljudi pravi grešku, pa idemo korak po korak. Postoje dve formule i one
        se lako pomešaju:
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6 space-y-3">
        <p className="font-heading font-semibold text-lg mb-0">
          Break-even ROAS = 1 ÷ Marža (decimalno)
        </p>
        <p className="font-heading font-semibold text-lg mb-0">
          POAS = (Prihod × Marža) ÷ Spend = Profit ÷ Spend
        </p>
      </div>

      <p>
        <strong>Break-even ROAS zavisi od marže</strong> — što je marža niža, to vam treba viši ROAS
        da biste samo pokrili spend. Evo tabele koja to pokazuje direktno:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Marža</th>
              <th className="py-3 px-3 font-heading font-semibold">Break-even ROAS (1 ÷ marža)</th>
              <th className="py-3 px-3 font-heading font-semibold">Šta znači</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3">70%</td>
              <td className="py-3 px-3 font-semibold">1.43×</td>
              <td className="py-3 px-3">Visoka marža — čak i skroman ROAS je profitabilan</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3">50%</td>
              <td className="py-3 px-3 font-semibold">2.0×</td>
              <td className="py-3 px-3">Standard za brand-heavy eCommerce</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3">33%</td>
              <td className="py-3 px-3 font-semibold">3.0×</td>
              <td className="py-3 px-3">Tipičan multi-kategorijski eCommerce prosek</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3">25%</td>
              <td className="py-3 px-3 font-semibold">4.0×</td>
              <td className="py-3 px-3">Niža marža — 4× ROAS je tek break-even, ne uspeh</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3">15%</td>
              <td className="py-3 px-3 font-semibold">6.67×</td>
              <td className="py-3 px-3">Niska marža (npr. elektronika) — treba agresivan ROAS target</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3">10%</td>
              <td className="py-3 px-3 font-semibold">10.0×</td>
              <td className="py-3 px-3">Veoma tanka marža — većina naloga ovde nikad ne dostigne profit preko Ads-a samog</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <strong>POAS break-even je uvek 1×</strong> — to je razlog zašto je POAS mentalno lakši za rad.
        Ne morate pamtiti tabelu za svaku maržu; samo gledate da li je broj iznad ili ispod 1. Ako je
        POAS 1.5×, na svaki € potrošen na oglase, vratili ste €1 spend plus €0.50 čistog profita.
        Ako je POAS 0.8×, gubite 20 centi na svaki potrošeni €, bez obzira koliko &quot;dobro&quot; ROAS
        dashboard izgleda.
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Provera računa (da se matematika uvek slaže)</p>
        <p className="text-base text-yellow-900 mb-2">
          Proizvod B iz tabele gore: marža 25%, break-even ROAS = 1 ÷ 0.25 = <strong>4.0×</strong>.
          Njegov stvaran ROAS je tačno 4.0× — što znači da je tačno na break-even liniji.
          POAS potvrđuje isto: (10.000 × 0.25) ÷ 2.500 = 2.500 ÷ 2.500 = <strong>1.0×</strong> — break-even.
        </p>
        <p className="text-base text-yellow-900 mb-0">
          Proizvod C: marža 15%, break-even ROAS = 1 ÷ 0.15 = <strong>6.67×</strong>. Stvaran ROAS je
          samo 4.0× — ispod praga, znači gubitak. POAS to potvrđuje direktno: 0.6× (ispod 1×).
          Dve formule uvek moraju dati istu presudu — ako se ne slažu, negde je greška u unosu.
        </p>
      </div>

      <p>
        Ista logika radi i obrnuto — možete iz POAS-a izračunati koliki bi vam ROAS trebao za dati
        target profit. Recimo da želite POAS od 1.5× uz maržu od 30%: potreban ROAS = 1.5 ÷ 0.30 = 5.0×.
        Ovo je koristan obrazac kad razgovarate sa klijentom koji i dalje razmišlja u ROAS terminima —
        prevodite mu POAS cilj nazad u ROAS cilj koji mu je poznat, ali baziran na stvarnoj margini
        njegovog kataloga, ne na industrijskom proseku iz nekog izveštaja.
      </p>

      <hr />

      <h2 id="implementacija">Kako se POAS implementira praktično</h2>

      <p>
        POAS nije nativna metrika u Google Ads interfejsu — Google ne zna vašu maržu i nema razloga
        da je pretpostavlja. To znači da implementacija zahteva da <strong>vi</strong> ubacite podatak
        o profitu tamo gde Google inače vidi samo prihod. Ovo nije trivijalan tehnički detalj — svaki
        od pristupa ispod ima različit nivo rizika, potreban development rad i preciznost, pa izbor
        zavisi od toga koliko brzo vam treba vidljivost naspram toga koliko duboko želite da algoritam
        stvarno menja ponašanje. Evo redosleda kojim to radim na nalozima, od najjednostavnijeg ka
        najsofisticiranijem:
      </p>

      <div className="space-y-4 my-8">
        <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">1. Margin podaci u feed-u ili conversion value</p>
          <p className="text-base text-gray-600 mb-0">
            Dva pristupa. (a) Ako imate marginu po SKU u sistemu, dodajte custom label u product feed
            sa procentom marže — to omogućava grupisanje proizvoda po profitabilnosti u kampanjama.
            (b) Precizniji pristup: umesto da conversion tracking šalje <em>revenue</em> kao conversion
            value, šaljete <em>profit</em> (revenue minus COGS minus troškovi dostave/povrata) direktno
            kao vrednost konverzije. Google tada &quot;misli&quot; da optimizuje ROAS, ali zapravo optimizuje POAS,
            jer je vrednost koju vidi već profit, ne prihod.
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">2. Custom columns u Google Ads interfejsu</p>
          <p className="text-base text-gray-600 mb-0">
            Ako ne želite da menjate conversion value slanje (rizičnije, zahteva development), napravite
            custom column: Profit = (Conv. value × prosečna marža) − Cost. Ovo daje read-only POAS pregled
            u standardnim izveštajima bez diranja bidding signala — dobar prvi korak pre pune implementacije.
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">3. Value rules za margin korekciju u realnom vremenu</p>
          <p className="text-base text-gray-600 mb-0">
            Google Ads Value Rules omogućavaju da prilagodite conversion value po lokaciji, uređaju ili
            publici — možete ih iskoristiti kreativno da simulirate margin razlike (npr. sniziti vrednost
            konverzija iz segmenta kupaca koji tipično kupuju samo diskontovane, niskomarginske artikle).
            Ograničeno rešenje, ali korisno kad nemate developer resurse za pun feed/tracking rad.
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">4. Dedikovani profit tracking alati</p>
          <p className="text-base text-gray-600 mb-0">
            Za naloge sa kompleksnim COGS strukturama (varijabilni troškovi dostave, sezonski popusti,
            payment processing fees), ručno računanje marže po porudžbini postaje neodrživo. Tu ulaze
            specijalizovani profit tracking alati koji se kače na Shopify/WooCommerce, povlače stvarni
            COGS po SKU i šalju čist profit signal nazad u Google Ads i Meta Ads kao conversion value.
            Ja lično koristim <strong>ProfitMetrics</strong> na nalozima gde je margin struktura šarolika —
            ali princip je isti bez obzira koji alat koristite: negde mora postojati sistem koji zna
            pravi profit po porudžbini, ne samo prihod. Prednost ovakvog alata nad ručnim custom column
            pristupom je što automatski hvata promene marže u realnom vremenu — kad klijent pokrene
            popust od 20% na celu kategoriju, alat to odmah reflektuje u profit signalu koji ide ka
            Google Ads-u, dok bi ručno održavan custom column ostao zastareo dok ga neko ne ažurira.
          </p>
        </div>
      </div>

      <p>
        Redosled koji preporučujem: krenite od custom column-a (nula rizika, brzo), potvrdite da se brojevi
        slažu sa knjigovodstvom mesec-dva, pa tek onda menjajte conversion value da algoritam počne
        stvarno da optimizuje ka profitu. Preskakanje ovog koraka i direktno guranje profita u conversion
        value bez provere je čest uzrok grešaka koje se teško uočavaju kasnije.
      </p>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-sm font-bold text-gray-900 mb-3">Konkretan primer implementacije (ilustrativan)</p>
        <p className="text-base text-gray-700 mb-3">
          Zamislite eCommerce nalog gde Google Ads standardno prima conversion value = cena narudžbine
          (npr. €120). Da bi Smart Bidding video profit umesto prihoda, tracking implementacija se menja
          tako da vrednost konverzije postane: (cena narudžbine × prosečna marža kategorije) − fiksni
          trošak dostave. Za istu porudžbinu od €120, ako je marža kategorije 35% a trošak dostave €4,
          vrednost koja se šalje Google-u postaje (120 × 0.35) − 4 = €38, ne €120.
        </p>
        <p className="text-base text-gray-700 mb-0">
          Algoritam i dalje &quot;misli&quot; da optimizuje conversion value/ROAS cilj — ali pošto je
          sama vrednost sada profit, efektivno radi Target POAS. Ovo je razlog zašto implementacija
          zahteva pažljivu koordinaciju sa developerom i knjigovodstvom: pogrešna formula marže
          (npr. gross markup umesto neto marže) daje algoritmu pogrešan signal i on optimizuje ka
          pogrešnom cilju bez ikakvog upozorenja u interfejsu.
        </p>
      </div>

      <hr />

      <h2 id="kada-nije-potreban">Kada POAS nije potreban</h2>

      <p>
        POAS nije univerzalno rešenje i ne treba ga forsirati svuda. Ako imate <strong>uniformne marže</strong> —
        svi proizvodi u nalogu imaju približno istu maržu (recimo 30% ± 3%) — onda ROAS target već
        implicitno kodira profitabilnost. U tom slučaju, dodatna POAS infrastruktura je overhead bez
        realne koristi: development vreme, tracking rizik i mesečno održavanje margin podataka koštaju
        više nego što donose, jer bi rezultujuće bidding odluke bile praktično identične onima koje
        biste dobili sa dobro kalibrisanim ROAS target-om zasnovanim na toj istoj proseku margine.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-green-800 mb-2">POAS ima smisla kada</p>
          <ul className="text-sm text-green-900 space-y-1 mb-0">
            <li>Marža varira 15+ procentnih poena između kategorija proizvoda</li>
            <li>Imate premium i budget linije u istom nalogu</li>
            <li>Portfolio je multi-kategorijski (npr. odeća + elektronika)</li>
            <li>Rev-share ili profit-share ugovori sa klijentom (profit = vaš fee)</li>
            <li>Sezonski popusti drastično menjaju maržu iz meseca u mesec</li>
          </ul>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">ROAS target je dovoljan kada</p>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>Uniformna marža po celom katalogu (mono-brand, jedna kategorija)</li>
            <li>Mali broj SKU-ova sa sličnom cenovnom strukturom</li>
            <li>Lead Gen nalozi (nema COGS koncepta u istom smislu — vidi FAQ)</li>
            <li>Nemate developer/tracking resurse za implementaciju u razumnom roku</li>
            <li>Nalog je premali da opravda dodatnu tracking infrastrukturu</li>
          </ul>
        </div>
      </div>

      <p>
        Praktično pravilo koje koristim: ako je razlika u marži između najprofitabilnije i najmanje
        profitabilne kategorije proizvoda manja od 10 procentnih poena, POAS retko menja odluke o budžetu
        u odnosu na dobro kalibrisan ROAS target. Iznad toga, POAS počinje da menja stvarne preporuke —
        i tada vredi uložiti u implementaciju.
      </p>

      <p>
        Ima i srednja opcija koju često preporučujem malim i srednjim nalozima koji nisu sigurni da li
        im treba puna implementacija: uradite custom column analizu jednom (ručno, van Google Ads-a,
        recimo u spreadsheet-u) na nivou kategorije proizvoda. Ako ta jednokratna analiza pokaže da
        margin razlike menjaju rang proizvoda po profitabilnosti u odnosu na rang po ROAS-u, to je
        signal da vredi uložiti u trajniju POAS infrastrukturu. Ako se rangovi poklapaju, ROAS je
        dovoljno dobar proxy i možete uštedeti development budžet za nešto drugo.
      </p>

      <hr />

      <h2 id="bidding-promena">Šta se menja u bidding strategiji kad algoritam vidi profit</h2>

      <p>
        Ovo je deo koji najviše iznenadi klijente: kad <GlossaryLink slug="troas">tROAS</GlossaryLink> algoritam
        optimizuje ka conversion value koji je zapravo profit (ne prihod), <strong>ponašanje bidding-a se
        menja suštinski</strong> — ne samo brojevi u izveštaju. Ovo nije kozmetička promena metrike koju
        gledate u dashboard-u; menja se sama funkcija koju algoritam pokušava da maksimizuje na nivou
        svake pojedinačne aukcije, hiljadama puta dnevno.
      </p>

      <p>
        Praktično, to znači da dve aukcije koje bi ranije izgledale identično vredne za Maximize
        Conversion Value cilj (recimo, obe donose €100 conversion value) sada mogu dobiti potpuno
        različitu licitaciju — ako jedna dolazi od proizvoda sa 50% maržom a druga od proizvoda sa 10%
        maržom, algoritam će agresivnije licitirati za prvu. Ovo je suštinska razlika u odnosu na
        standardni tROAS setup, gde bi obe aukcije tretirane potpuno jednako jer im je conversion value
        (prihod) identičan.
      </p>

      <ul>
        <li>
          <strong>Algoritam počinje da favorizuje visokomarginske proizvode</strong>, čak i ako imaju
          niži prihod po transakciji. Proizvod koji donosi €50 prihoda uz 60% marže (€30 profita) postaje
          &quot;vredniji&quot; za algoritam od proizvoda koji donosi €80 prihoda uz 15% marže (€12 profita) —
          iako bi po čistom ROAS/Maximize Conversion Value cilju drugi proizvod izgledao bolje.
        </li>
        <li>
          <strong>Budžet se prirodno preusmerava</strong> ka ad grupama i kampanjama vezanim za profitabilnije
          linije proizvoda, bez ručne intervencije — algoritam to radi automatski jer optimizuje signal
          koji mu date.
        </li>
        <li>
          <strong>Cilj (target) treba rekalibrisati</strong> — ako ste ranije imali tROAS cilj od 400%
          baziran na prihodu, kad pređete na profit-based conversion value, taj isti brojčani cilj više
          ne znači isto. Treba ga postaviti na osnovu POAS break-even (1×) plus margin sigurnosti — npr.
          target POAS 1.3–1.5× za zdrav bafer iznad break-even linije.
        </li>
        <li>
          <strong>Volatilnost raste kratkoročno</strong> — profit po porudžbini ima veću varijansu od
          prihoda (marža fluktuira sa popustima, promo akcijama, mix-om proizvoda), pa algoritmu treba
          nešto duži learning period da stabilizuje predviđanja.
        </li>
        <li>
          <strong>Izveštaji klijentu postaju direktniji</strong> — umesto &quot;ROAS je 4×, odlično&quot;,
          razgovor postaje &quot;POAS je 1.6×, znači da je svaki uloženi € doneo 60 centi čistog profita
          nakon svih troškova.&quot; Ovo je razgovor koji klijenti sa finansijskim pozadinom odmah razumeju
          i cene.
        </li>
      </ul>

      <p>
        Ono što ovo znači u praksi: kad pređete na profit-based bidding, prvi izveštaj posle promene
        često izgleda &quot;lošije&quot; po starim standardima — ukupan prihod može blago pasti jer
        algoritam svesno smanjuje potrošnju na niskomarginske proizvode koje je ranije agresivno gurao.
        Ovo nije regresija, to je tačno ono što ste tražili — manje prihoda od loše profitabilnih
        prodaja, više budžeta tamo gde svaki € oglašavanja generiše realan profit. Na nalozima koje
        vodim, ovaj prelaz obično znači blagi pad ukupnog prihoda u prvih mesec dana, praćen rastom
        ukupnog profita u sledeća 2–3 meseca kad se budžet potpuno redistribuira. Zato je prosečan POAS
        od 1.78× vredniji podatak od bilo kog pojedinačnog ROAS broja — on govori šta klijent stvarno
        zarađuje, ne koliko prometa nalog generiše.
      </p>

      <hr />

      <h2 id="faq">Najčešća pitanja o POAS-u</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koji POAS je dobar?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Bilo šta iznad 1× je profitabilno, ali &quot;dobar&quot; POAS zavisi od toga koliki bafer
            želite iznad break-even linije, plus koliko profita treba da pokrije neoglašivačke troškove
            (fiksni troškovi, plate, vaš fee kao agencije). Kao orijentacija: POAS 1.3–1.5× je solidan,
            1.8×+ je snažan. Na nalozima koje vodim, prosek je 1.78× — ali to je prosek preko različitih
            margin profila, ne univerzalni target koji treba kopirati bez konteksta. Bitnije od
            apsolutnog broja je trend: POAS koji raste iz meseca u mesec znači da optimizacija radi,
            čak i ako je apsolutna vrednost skromna (npr. 1.1–1.2×) u ranoj fazi implementacije.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako da počnem sa POAS-om bez developer resursa?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Počnite od custom column-a u Google Ads interfejsu: Profit = (Conv. value × prosečna marža) − Cost.
            Ovo je read-only izveštaj, ne menja bidding, i ne zahteva developer rad — samo vam treba
            jedan broj (prosečna bruto marža) koji obično ima vlasnik biznisa ili knjigovođa. Sledeći
            korak (slanje profita kao conversion value) zahteva development, ali custom column vam
            odmah daje vidljivost bez rizika.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li Google Ads podržava POAS nativno?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Ne. Google Ads nema ugrađenu POAS metriku niti &quot;Target POAS&quot; bidding strategiju.
            Ono što postoji je <GlossaryLink slug="troas">Target ROAS</GlossaryLink>, koju možete
            &quot;prevariti&quot; da zapravo optimizuje profit tako što conversion value koji šaljete
            Google-u nije prihod nego profit. Google i dalje zove tu metriku &quot;ROAS&quot; u interfejsu,
            ali ako je vrednost konverzije profit, faktički radite Target POAS. Isti princip radi i na
            Meta Ads-u preko custom conversion value parametara — platforma je agnostična prema tome
            šta joj šaljete kao &quot;value&quot;, ona samo optimizuje ka maksimizaciji tog broja.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li POAS ima smisla za lead gen naloge?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Ne u istom obliku. POAS je koncept izgrađen oko COGS-a i marže po prodatom proizvodu —
            lead gen nalozi (pozivi, forme) nemaju &quot;prihod od prodaje&quot; u istom smislu, pa nema
            šta da se pomnoži sa maržom na nivou konverzije. Ekvivalent kod lead gen naloga je{" "}
            <GlossaryLink slug="tcpa">CPA</GlossaryLink> naspram stvarne vrednosti leada (LTV kupca
            minus trošak isporuke usluge) — isti princip &quot;gledaj profit, ne samo volumen&quot;,
            ali kroz CPA/ROI okvir, ne kroz POAS formulu.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko traje tranzicija sa ROAS na POAS?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Custom column pristup: par sati, čim imate broj marže. Puna implementacija (margin podaci
            u feedu ili conversion value slanje profita): tipično 2–4 nedelje računajući development,
            testiranje i verifikaciju da se novi brojevi slažu sa knjigovodstvom. Posle promene
            conversion value, računajte dodatnih 2–3 nedelje learning perioda dok se{" "}
            <GlossaryLink slug="smart-bidding">Smart Bidding</GlossaryLink> algoritam ne stabilizuje na novom signalu —
            ne menjajte ciljeve tokom tog perioda. Ukupno, od odluke do stabilnog profit-based bidding-a,
            realno je računati 6–8 nedelja za nalog srednje kompleksnosti. Za naloge sa vrlo prostom
            margin strukturom (jedna kategorija, uniformna marža) proces može biti brži; za naloge sa
            desetinama kategorija i sezonskim popustima, duže — jer margin podaci moraju biti tačni
            po SKU-u, ne samo prosečni po kategoriji.
          </div>
        </details>
      </div>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Ne znate koliko od ROAS-a je zapravo profit?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Besplatna analiza naloga sa POAS mapiranjem po kategoriji proizvoda i preporukama za
          margin-based bidding.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <hr />

      <h2 id="povezani-vodici">Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "sta-je-roas" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Šta je ROAS i kako se računa</p>
          <p className="text-xs text-gray-500 mb-0">Osnovna formula, benchmarks i kalkulator</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Smart Bidding vodič</p>
          <p className="text-xs text-gray-500 mb-0">tROAS, Maximize Conversion Value i kada koju strategiju</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking vodič</p>
          <p className="text-xs text-gray-500 mb-0">Bez tačnog conversion value slanja, POAS je fikcija</p>
        </Link>
        <Link href="/usluge/google-ads-za-ecommerce" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads za eCommerce</p>
          <p className="text-xs text-gray-500 mb-0">Usluga: profit-first upravljanje nalogom</p>
        </Link>
        <Link href="/usluge/google-shopping" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping usluga</p>
          <p className="text-xs text-gray-500 mb-0">Tiered Shopping i margin-based bidding</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Jul 2026
      </div>
      <div className="text-sm text-gray-500">
        Autor: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}
