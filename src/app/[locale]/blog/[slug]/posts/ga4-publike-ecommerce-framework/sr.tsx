import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function GA4PublikeFrameworkSR() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Kratak sud</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Ovo je ceo framework, u tekstu, besplatno - ništa nije sakriveno iza forme. 25 lista u property-ju, podeljenih u 6 stubova, i najkorisniji deo nije nijedna od njih. Najkorisniji deo je ono što GA4 Admin API odbija da uradi, i tri zaobilaznice koje sam morao da izgradim kad je odbio.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">25</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">lista u property-ju (24 ciljne + 1 pomoćna)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">6</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">stubova: Lifecycle, Value, Intent, Brand, Replenishment, Predictive</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">ograničenja Admin API-ja koja menjaju kako gradiš</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2-4 ned</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">pre nego što lista napravljena danas išta znači</p>
          </div>
        </div>
      </div>

      <p>
        Ovaj framework sam izgradio kroz <GlossaryLink slug="ga4">GA4</GlossaryLink> Admin API za jednu multi-brand skincare prodavnicu u UK-u koju vodim - 25 lista publika, komad po komad, sa svim greškama koje ide uz to. Ime naloga i imena brendova ne pominjem nigde u ovom tekstu; gde treba primer, brendovi su BR1 i BR2, kategorije su krema, SPF, suplementi. To nije oprez radi opreza - to je uslov pod kojim uopšte smem da pišem o živom nalogu.
      </p>
      <p>
        Ono što je ispalo najkorisnije nije nijedna od 25 lista. Najkorisnije je ono što API odbija da uradi. Tri stvari se jednostavno ne mogu postaviti kroz GA4 Admin API onako kako bi logično očekivao, i za svaku od te tri postoji zaobilaznica koja menja kako gradiš celu listu - ne samo tu jednu, nego čitav stub. Ta sekcija je razlog zbog kog ovaj tekst uopšte postoji, i ona je dole, sa najviše prostora od svega.
      </p>
      <p>
        Ceo framework je ispod: naming konvencija, svih 25 lista sa tačnom GA4 konfiguracijom, redosled u kom ih gradiš i redosled u kom ih uključuješ u Google Ads. Nema forme, nema &quot;preuzmi da vidiš ostatak&quot;. Ako hoćeš izvršnu verziju - markdown fajlove koje ubaciš direktno u Claude ili ChatGPT i PDF za arhivu - link je na kraju.
      </p>

      {/* TOC nav */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ul className="list-none pl-0 mb-0 space-y-0">
          <li><a href="#pregled" className="block py-1 text-base text-gray-700 hover:text-primary underline">25 lista, 6 stubova: pravilo brojanja</a></li>
          <li><a href="#punjenje-pragovi" className="block py-1 text-base text-gray-700 hover:text-primary underline">Punjenje lista i pragovi aktivacije</a></li>
          <li><a href="#lifecycle" className="block py-1 text-base text-gray-700 hover:text-primary underline">Lifecycle (LCY) - 6 lista</a></li>
          <li><a href="#value" className="block py-1 text-base text-gray-700 hover:text-primary underline">Value / RFM (VAL) - 4 liste</a></li>
          <li><a href="#intent" className="block py-1 text-base text-gray-700 hover:text-primary underline">Intent / funnel (INT) - 4 liste</a></li>
          <li><a href="#brand" className="block py-1 text-base text-gray-700 hover:text-primary underline">Brand affinity (BRD) - 5 lista</a></li>
          <li><a href="#replenishment" className="block py-1 text-base text-gray-700 hover:text-primary underline">Replenishment (RPL) - stub koji niko ne gradi</a></li>
          <li><a href="#predictive" className="block py-1 text-base text-gray-700 hover:text-primary underline">Predictive (PRD) i pomoćna lista</a></li>
          <li><a href="#ogranicenja" className="block py-1 text-base text-gray-700 hover:text-primary underline">Tri ograničenja GA4 Admin API-ja</a></li>
          <li><a href="#redosled" className="block py-1 text-base text-gray-700 hover:text-primary underline">Redosled gradnje, sa proverama</a></li>
          <li><a href="#aktivacija" className="block py-1 text-base text-gray-700 hover:text-primary underline">Aktivacija: Observation, isključenja, GA4 protiv CRM</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Najčešća pitanja</a></li>
        </ul>
      </nav>

      <hr />

      <h2 id="pregled">25 lista, 6 stubova: pravilo brojanja</h2>
      <p>
        Prvo brojanje, jer se tu najviše ljudi zabuni kad prvi put pogleda listu publika u nalogu. Framework ima 25 definicija lista. Od toga je 24 ciljna publika raspoređena u 6 stubova, plus jedna pomoćna lista koja nije ciljna publika nikada, nigde.
      </p>
      <p>
        Ta pomoćna lista se zove <code className="font-mono text-sm bg-gray-100 px-1.5 py-0.5 rounded">LCY_ALL_ActiveCustomers_45d</code> i njena jedina svrha je da se u Google Ads-u oduzima od replenishment lista - o tome detaljno u sekciji o ograničenjima API-ja, jer je razlog zašto ova lista postoji direktna posledica jedne stvari koju GA4 ne ume da uradi sam. Nju kloniraš na prozor koji ti kombinacija traži, pa u punoj postavci imaš dve kopije više (25 dana za ciklus suplemenata, 120 dana za at-risk sloj): 25 definicija se u nalogu na kraju vidi kao 27 publika. Zato u tabelama ispod stoje i <code className="font-mono text-sm bg-gray-100 px-1.5 py-0.5 rounded">ActiveCustomers_25d</code> i <code className="font-mono text-sm bg-gray-100 px-1.5 py-0.5 rounded">ActiveCustomers_120d</code> - nisu greška u imenovanju, nego isti obrazac kloniran na window koji odgovara drugom stubu.
      </p>
      <p>
        Naming konvencija koju sam koristio na sve 25 je fiksna:
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 my-6 text-center">
        <code className="font-mono text-base md:text-lg font-semibold">{"{PILLAR}_{SCOPE}_{Segment}_{Window}"}</code>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Pillar</th>
              <th className="py-3 px-3 font-heading font-semibold">Značenje</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono font-medium">LCY</td>
              <td className="py-3 px-3">Lifecycle - faza životnog ciklusa kupca</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono font-medium">VAL</td>
              <td className="py-3 px-3">Value / RFM - vrednosni slojevi</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono font-medium">INT</td>
              <td className="py-3 px-3">Intent - funnel abandoneri</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono font-medium">BRD</td>
              <td className="py-3 px-3">Brand affinity - po brendu ili liniji</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono font-medium">RPL</td>
              <td className="py-3 px-3">Replenishment - ciklus ponovne kupovine</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono font-medium">PRD</td>
              <td className="py-3 px-3">Predictive - Google ML</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Scope je ili <code className="font-mono text-sm bg-gray-100 px-1 rounded">ALL</code> (ceo nalog) ili oznaka brenda i kategorije - <code className="font-mono text-sm bg-gray-100 px-1 rounded">BR1</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">BR2</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">MOI</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">SUP</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">SPF</code>. Window je membership prozor ili ciljni raspon - <code className="font-mono text-sm bg-gray-100 px-1 rounded">90d</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">540d</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">45-120d</code>.
      </p>
      <p>
        Konvencija nije estetika. Kad imaš 25 stavki u jednoj listi u Google Ads-u, pretraga po prefiksu je jedini realan način da za tri meseca još uvek znaš šta je šta bez da otvaraš svaku i čitaš opis. Sortiranje po imenu ionako grupiše stub uz stub, pa se cela lista publika čita kao šest odeljaka umesto kao 25 nasumičnih redova.
      </p>

      <hr />

      <h2 id="punjenje-pragovi">Punjenje lista i pragovi aktivacije</h2>
      <p>
        Dva broja ovde odlučuju da li publika uopšte može da se koristi za targeting ili ostaje zarobljena u Observation-u.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Kanal</th>
              <th className="py-3 px-3 font-heading font-semibold">Minimum aktivnih korisnika u 30 dana</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Search remarketing (RLSA) i Shopping</td>
              <td className="py-3 px-3">1.000</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Display, YouTube, <GlossaryLink slug="demand-gen">Demand Gen</GlossaryLink></td>
              <td className="py-3 px-3">100</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Ovo su Google-ovi minimumi za isporuku, ne moji, i ne postoji način da ih zaobiđeš osim da lista naraste. Dok je lista ispod praga, živi kao <strong>Observation</strong> - vidiš joj podatke, ne utiče na targeting. Većina prodavnica koju sam video napravi pet publika, nijedna ne pređe prag, i onda neko zaključi da &quot;publike ne rade za nas&quot;. Publike rade. Nalog je premali ili je prozor prekratak da ih napuni.
      </p>
      <p>
        Punjenje ide ovako: GA4 publika počinje da se puni <strong>od trenutka kreiranja</strong>, uz otprilike 30 dana unazad za korisnike koji već u tom trenutku ispunjavaju uslov. Nema retroaktivnog punjenja preko tih 30 dana - ne postoji dugme koje kaže &quot;popuni mi ovu listu istorijskim podacima od pre godinu dana&quot;. Praktična posledica je jednostavna i neprijatna: lista koju napraviš danas postaje upotrebljiva tek za 2 do 4 nedelje. Što znači da je najgori trenutak da počneš da praviš publike upravo onaj u kom ti već trebaju za kampanju koja kreće sutra.
      </p>

      <hr />

      <h2 id="lifecycle">Lifecycle (LCY) - 6 lista</h2>
      <p>
        Lifecycle stub prati gde je kupac u odnosu sa nalogom - da li je tek stigao, da li se vratio, da li je nestao. Ovo je osnova na kojoj stoje skoro svi ostali stubovi, jer se pola RPL i VAL logike oslanja na LCY liste kao isključenja u Google Ads-u.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Lista</th>
              <th className="py-3 px-3 font-heading font-semibold">Definicija</th>
              <th className="py-3 px-3 font-heading font-semibold">GA4 konfiguracija</th>
              <th className="py-3 px-3 font-heading font-semibold">Membership</th>
              <th className="py-3 px-3 font-heading font-semibold">Čemu služi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">LCY_ALL_FirstTimeBuyers_180d</td>
              <td className="py-3 px-3">tačno 1 kupovina ikad, poslednja u 180 dana</td>
              <td className="py-3 px-3">Include: purchase event count = 1, at any point in time · AND purchase u bilo kom periodu od 180 dana</td>
              <td className="py-3 px-3 whitespace-nowrap">180 dana</td>
              <td className="py-3 px-3">drugi order je KPI koji odlučuje da li brend raste; ova lista je jedina koja ga direktno gađa</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">LCY_ALL_RepeatBuyers_540d</td>
              <td className="py-3 px-3">2+ kupovine</td>
              <td className="py-3 px-3">Include: purchase event count &gt; 1, at any point in time</td>
              <td className="py-3 px-3 whitespace-nowrap">540 dana</td>
              <td className="py-3 px-3">jezgro vrednosti naloga, bid boost, Similar seed</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">LCY_ALL_ActiveCustomers_90d</td>
              <td className="py-3 px-3">kupio u poslednjih 90 dana</td>
              <td className="py-3 px-3">Include: purchase (bar jednom)</td>
              <td className="py-3 px-3 whitespace-nowrap">90 dana</td>
              <td className="py-3 px-3">isključenje iz akvizicije + osnova za cross-sell</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">LCY_ALL_Purchasers_365d</td>
              <td className="py-3 px-3">kupio bilo kad u 365 dana</td>
              <td className="py-3 px-3">Include: purchase (bar jednom)</td>
              <td className="py-3 px-3 whitespace-nowrap">365 dana</td>
              <td className="py-3 px-3">sirovina za win-back: u Ads-u MINUS ActiveCustomers_90d = lapsed kupci</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">LCY_ALL_EngagedNonBuyers_30d</td>
              <td className="py-3 px-3">2+ sesije u 30 dana, nikad kupovina</td>
              <td className="py-3 px-3">Include: session_start event count &gt; 1 (UI: u periodu od 30 dana; API: at any point in time, prozor nosi membership) · Exclude: purchase, at any point in time</td>
              <td className="py-3 px-3 whitespace-nowrap">30 dana</td>
              <td className="py-3 px-3">prospecting seed za Demand Gen i lookalike logiku</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">LCY_ALL_NewVisitors_7d</td>
              <td className="py-3 px-3">prva poseta u 7 dana, bez kupovine</td>
              <td className="py-3 px-3">Include: first_visit · Exclude: purchase, at any point in time</td>
              <td className="py-3 px-3 whitespace-nowrap">7 dana</td>
              <td className="py-3 px-3">soft <GlossaryLink slug="remarketing">remarketing</GlossaryLink> dok je pamćenje sveže, kratko članstvo je namerno</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="value">Value / RFM (VAL) - 4 liste</h2>
      <p>
        Value stub sortira kupce po vrednosti, a ovde prvi put udaraš u ograničenje API-ja koje menja celu logiku gradnje - <GlossaryLink slug="ltv">LTV</GlossaryLink> percentile ne prolazi kroz API, pa se dve liste ovde grade preko frequency proxy-ja umesto preko prave vrednosti. Detaljno objašnjenje zašto je u sekciji o ograničenjima; ovde su konfiguracije koje iz toga proizlaze.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Lista</th>
              <th className="py-3 px-3 font-heading font-semibold">Definicija</th>
              <th className="py-3 px-3 font-heading font-semibold">GA4 konfiguracija</th>
              <th className="py-3 px-3 font-heading font-semibold">Membership</th>
              <th className="py-3 px-3 font-heading font-semibold">Čemu služi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">VAL_ALL_Champions_Top10_540d</td>
              <td className="py-3 px-3">top 10% po vrednosti</td>
              <td className="py-3 px-3">UI ruta: suggested audience template sa LTV percentilom (top 10%) · API ruta: frequency proxy - purchase event count &gt; 2, at any point in time</td>
              <td className="py-3 px-3 whitespace-nowrap">540 dana</td>
              <td className="py-3 px-3">zaštita, Similar seed, i pravilo da ovi ljudi nikad ne vide poruku sa popustom</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">VAL_ALL_HighValue_Top25_540d</td>
              <td className="py-3 px-3">top 25% po vrednosti</td>
              <td className="py-3 px-3">UI: LTV percentile top 25% · API: purchase event count &gt; 1, at any point in time</td>
              <td className="py-3 px-3 whitespace-nowrap">540 dana</td>
              <td className="py-3 px-3">tROAS pojačanje, prioritet u remarketingu</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">VAL_ALL_AtRisk_HighValue_120d</td>
              <td className="py-3 px-3">high value + nije kupio 120 dana</td>
              <td className="py-3 px-3">ista definicija kao HighValue_Top25, membership 120 dana · &quot;nije kupio&quot; se rešava u Ads-u (MINUS ActiveCustomers_120d)</td>
              <td className="py-3 px-3 whitespace-nowrap">120 dana</td>
              <td className="py-3 px-3">&quot;can&apos;t lose them&quot; - najskuplji gubitak u nalogu</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">VAL_ALL_OneTimeLowValue_365d</td>
              <td className="py-3 px-3">1 kupovina, donja polovina po vrednosti</td>
              <td className="py-3 px-3">Include: purchase event count = 1, at any point in time · (UI: presek sa LTV donjih 50%)</td>
              <td className="py-3 px-3 whitespace-nowrap">365 dana</td>
              <td className="py-3 px-3">isključivanje iz skupog remarketinga - ne svaki kupac zaslužuje isti bid</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="intent">Intent / funnel (INT) - 4 liste</h2>
      <p>
        Intent stub je najtopliji sloj u nalogu - ljudi koji su nešto uradili u funnel-u i stali. Ovo je i jedino mesto gde &quot;temporarily exclude&quot; stvarno radi kako izgleda da bi trebalo, jer se prozor uključenja i isključenja poklapaju. Zašto to nije slučaj svuda, objašnjeno je u trećem ograničenju API-ja ispod.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Lista</th>
              <th className="py-3 px-3 font-heading font-semibold">Definicija</th>
              <th className="py-3 px-3 font-heading font-semibold">GA4 konfiguracija</th>
              <th className="py-3 px-3 font-heading font-semibold">Membership</th>
              <th className="py-3 px-3 font-heading font-semibold">Čemu služi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">INT_ALL_CartAbandoners_14d</td>
              <td className="py-3 px-3">add_to_cart u 14 dana, bez kupovine</td>
              <td className="py-3 px-3">Include: add_to_cart u periodu od 14 dana · Exclude (temporarily): purchase u periodu od 14 dana</td>
              <td className="py-3 px-3 whitespace-nowrap">14 dana</td>
              <td className="py-3 px-3">najtopliji sloj u nalogu, najveći bid</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">INT_ALL_CheckoutAbandoners_7d</td>
              <td className="py-3 px-3">begin_checkout u 7 dana, bez kupovine</td>
              <td className="py-3 px-3">Include: begin_checkout u periodu od 7 dana · Exclude (temporarily): purchase u periodu od 7 dana</td>
              <td className="py-3 px-3 whitespace-nowrap">7 dana</td>
              <td className="py-3 px-3">hitni sloj; radi paralelno sa email flow-om, ne umesto njega</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">INT_ALL_ProductViewers_NoATC_30d</td>
              <td className="py-3 px-3">view_item u 30 dana, bez dodavanja u korpu</td>
              <td className="py-3 px-3">Include: view_item u periodu od 30 dana · Exclude (temporarily): add_to_cart u periodu od 30 dana</td>
              <td className="py-3 px-3 whitespace-nowrap">30 dana</td>
              <td className="py-3 px-3">srednji sloj, jeftiniji bid, veći volumen</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">INT_ALL_SearchUsers_30d</td>
              <td className="py-3 px-3">koristio pretragu na sajtu u 30 dana</td>
              <td className="py-3 px-3">Include: view_search_results (ili search) u periodu od 30 dana</td>
              <td className="py-3 px-3 whitespace-nowrap">30 dana</td>
              <td className="py-3 px-3">najjači zaboravljeni signal - čovek koji kuca u tvoju pretragu zna šta hoće</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="brand">Brand affinity (BRD) - 5 lista</h2>
      <p>
        Ovaj stub postoji zbog multi-brand naloga - kad prodaješ više brendova iz istog GA4 property-ja i moraš da im praviš odvojene poruke. Scope oznake BR1 i BR2 su tvoja dva brenda po prometu. Ako prodaješ jedan brend, ceo stub preskačeš i zamenjuješ ga kategorijama (na primer SER za serum, CLE za cleanser) - logika ostaje ista, menja se samo šta ide u scope.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Lista</th>
              <th className="py-3 px-3 font-heading font-semibold">Definicija</th>
              <th className="py-3 px-3 font-heading font-semibold">GA4 konfiguracija</th>
              <th className="py-3 px-3 font-heading font-semibold">Membership</th>
              <th className="py-3 px-3 font-heading font-semibold">Čemu služi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">BRD_BR1_Purchasers_365d</td>
              <td className="py-3 px-3">kupio glavni brend</td>
              <td className="py-3 px-3">Include: purchase gde item-scoped dimenzija item_brand = BR1</td>
              <td className="py-3 px-3 whitespace-nowrap">365 dana</td>
              <td className="py-3 px-3">jezgro najvećeg brenda</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">BRD_BR1_StepUp_Purchasers_365d</td>
              <td className="py-3 px-3">kupio napredniju liniju tog brenda</td>
              <td className="py-3 px-3">Include: purchase gde item_name sadrži token linije</td>
              <td className="py-3 px-3 whitespace-nowrap">365 dana</td>
              <td className="py-3 px-3">kupac koji ulazi u obrazac pretplate - najbolji kandidat za rast vrednosti</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">BRD_BR1_Browsers_NoBuy_60d</td>
              <td className="py-3 px-3">gledao BR1, nije kupio</td>
              <td className="py-3 px-3">Include: view_item sa item_brand = BR1 u 60 dana · Exclude: purchase sa item_brand = BR1, at any point in time</td>
              <td className="py-3 px-3 whitespace-nowrap">60 dana</td>
              <td className="py-3 px-3">brand-specifičan remarketing, poruka koja zna o čemu priča</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">BRD_BR2_Purchasers_365d</td>
              <td className="py-3 px-3">kupio drugi brend po prometu</td>
              <td className="py-3 px-3">isto kao BR1_Purchasers, sa BR2</td>
              <td className="py-3 px-3 whitespace-nowrap">365 dana</td>
              <td className="py-3 px-3">drugo jezgro</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">BRD_BR2_Browsers_NoBuy_60d</td>
              <td className="py-3 px-3">gledao BR2, nije kupio</td>
              <td className="py-3 px-3">isto kao BR1_Browsers_NoBuy, sa BR2</td>
              <td className="py-3 px-3 whitespace-nowrap">60 dana</td>
              <td className="py-3 px-3">remarketing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Pre nego što gradiš BRD liste</p>
        <p className="text-yellow-800 text-base mb-0">
          Proveri da li item_brand uopšte stiže u GA4. U dosta prodavnica je to polje prazno ili nekonzistentno - feed ga ne šalje čisto, ili ga šalje pod drugim imenom za polovinu kataloga. Ako nema, fallback je page_location pattern (URL sadrži brand slug) ili item_category. Ova provera ide pre gradnje, ne posle - inače gradiš pet lista i otkriješ da su sve prazne.
        </p>
      </div>

      <hr />

      <h2 id="replenishment">Replenishment (RPL) - stub koji niko ne gradi</h2>
      <p>
        Od svih šest stubova, ovaj nosi najveću težinu, i to ne slučajno - u praksi je gotovo uvek prazan. Lifecycle i Intent liste pravi skoro svako ko otvori GA4 Audiences. Replenishment liste ne pravi skoro niko, jer traže nešto što nijedna druga lista ne traži: da znaš koliko dugo tvoj proizvod traje u upotrebi.
      </p>
      <p>
        Ime nosi ciljni prozor - <code className="font-mono text-sm bg-gray-100 px-1 rounded">45-120d</code> - ali se u GA4 ne gradi kao raspon. Gradi se kao obična lista kupaca sa jednim membership prozorom (gornja granica), a donja granica nastaje tek kad tu listu u Google Ads-u umanjiš za listu nedavno aktivnih kupaca. To je direktna posledica trećeg ograničenja API-ja ispod - GA4 fizički ne ume da izgradi &quot;kupio pre 45 do 120 dana&quot; kao jedan uslov u jednoj listi.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Lista</th>
              <th className="py-3 px-3 font-heading font-semibold">Definicija (efektivna)</th>
              <th className="py-3 px-3 font-heading font-semibold">GA4 konfiguracija</th>
              <th className="py-3 px-3 font-heading font-semibold">Membership</th>
              <th className="py-3 px-3 font-heading font-semibold">Ads exclusion</th>
              <th className="py-3 px-3 font-heading font-semibold">Čemu služi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">RPL_MOI_Due_45-120d</td>
              <td className="py-3 px-3">kupio kremu pre 45-120 dana, ništa od tada</td>
              <td className="py-3 px-3">Include: purchase gde item_category (ili item_name) sadrži moisturiser token</td>
              <td className="py-3 px-3 whitespace-nowrap">120 dana</td>
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">MINUS ActiveCustomers_45d</td>
              <td className="py-3 px-3">krema traje 60-90 dana; oglas stiže kad kutija presušuje</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">RPL_SUP_Due_25-75d</td>
              <td className="py-3 px-3">kupio suplement pre 25-75 dana</td>
              <td className="py-3 px-3">Include: purchase gde kategorija = supplements</td>
              <td className="py-3 px-3 whitespace-nowrap">75 dana</td>
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">MINUS ActiveCustomers_25d (klon)</td>
              <td className="py-3 px-3">pakovanje od 60 kapsula = oko 2 meseca</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">RPL_SPF_Due_45-120d</td>
              <td className="py-3 px-3">kupio SPF pre 45-120 dana</td>
              <td className="py-3 px-3">Include: purchase gde kategorija = SPF</td>
              <td className="py-3 px-3 whitespace-nowrap">120 dana</td>
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">MINUS ActiveCustomers_45d</td>
              <td className="py-3 px-3">ciklus potrošnje + sezonski faktor</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Logika prozora je ista za sve tri: uzmi koliko pakovanje realno traje u upotrebi, i počni da oglašavaš na otprilike 70-80% tog ciklusa - ne na 100%, jer ako čekaš da kutija stvarno bude prazna, gubiš dane u kojima je odluka o sledećoj kupovini već doneta. Krema traje 60 do 90 dana, pa donja granica kreće na 45. Pakovanje od 60 kapsula traje oko dva meseca, pa donja granica kreće na 25 do 30.
      </p>
      <p>
        Ako ne znaš ciklus svog proizvoda - a većina prodavnica ga ne zna dok ne pogleda - ne izmišljaš ga. Izvučeš ga iz sopstvenih podataka: prosečan razmak između prve i druge kupovine iste kategorije, po kupcu, usrednjeno preko dovoljno porudžbina da broj ima smisla. Ta cifra ti je realan ciklus, ne ono što piše na deklaraciji proizvoda ili ono što pretpostavljaš da &quot;valjda traje mesec dana&quot;.
      </p>

      <hr />

      <h2 id="predictive">Predictive (PRD) i pomoćna lista</h2>
      <p>
        Predictive stub postoji samo ako property kvalifikuje, i to je bitna razlika u odnosu na svih pet stubova iznad - ovde ne biraš da li ćeš da ga gradiš, GA4 ti kaže da li si eligible.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Lista</th>
              <th className="py-3 px-3 font-heading font-semibold">Definicija</th>
              <th className="py-3 px-3 font-heading font-semibold">Konfiguracija</th>
              <th className="py-3 px-3 font-heading font-semibold">Membership</th>
              <th className="py-3 px-3 font-heading font-semibold">Čemu služi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">PRD_ALL_LikelyPurchasers_7d</td>
              <td className="py-3 px-3">Google ML predikcija kupovine u 7 dana</td>
              <td className="py-3 px-3">GA4 UI → Audiences → suggested → Predictive → &quot;Likely 7-day purchasers&quot;. Ne postoji kroz API.</td>
              <td className="py-3 px-3 whitespace-nowrap">30 dana</td>
              <td className="py-3 px-3">gorivo za <GlossaryLink slug="troas">tROAS</GlossaryLink></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">PRD_ALL_ChurnRisk_7d</td>
              <td className="py-3 px-3">ML predikcija odlaska</td>
              <td className="py-3 px-3">isto, &quot;Likely 7-day churning purchasers&quot;</td>
              <td className="py-3 px-3 whitespace-nowrap">30 dana</td>
              <td className="py-3 px-3">email lista, ne oglasna - churn se leči porukom, ne bid-om</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Uslov za obe: property mora imati dovoljno pozitivnih i negativnih primera - Google traži red veličine 1.000 korisnika koji jesu i 1.000 koji nisu izvršili purchase u prozoru od 28 dana - i model mora ostati &quot;eligible&quot; u kontinuitetu. Male prodavnice ovde jednostavno ne kvalifikuju. To nije greška u setupu koju treba da tražiš i popravljaš; to je pitanje veličine naloga, i vremenom se rešava samo ako nalog naraste.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Lista</th>
              <th className="py-3 px-3 font-heading font-semibold">Definicija</th>
              <th className="py-3 px-3 font-heading font-semibold">GA4 konfiguracija</th>
              <th className="py-3 px-3 font-heading font-semibold">Membership</th>
              <th className="py-3 px-3 font-heading font-semibold">Čemu služi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">LCY_ALL_ActiveCustomers_45d</td>
              <td className="py-3 px-3">kupio u poslednjih 45 dana</td>
              <td className="py-3 px-3">Include: purchase (bar jednom)</td>
              <td className="py-3 px-3 whitespace-nowrap">45 dana</td>
              <td className="py-3 px-3">samo za isključenja u Ads-u (replenishment). Kloniraj na 25 dana za suplemente, na 120 za AtRisk.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="ogranicenja">Tri ograničenja GA4 Admin API-ja</h2>
      <p>
        Ovo je deo koji vredi celog teksta, jer nije nešto što pišeš iz dokumentacije - dokumentacija ne kaže da ova tri ograničenja postoje, ili ih kaže usput, u fusnoti koju preskočiš. Ovo je ono na šta udariš tek kad pokušaš da izgradiš 25 lista programski i API ti vrati grešku, ili gore - ne vrati grešku, nego tiho izgradi nešto drugo od onoga što si tražio.
      </p>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-900 mb-1">1. lifetimeValue ne prolazi u audience filterima kroz API</p>
        <p className="text-base text-red-800/90 mb-0">
          LTV percentile postoji samo kao UI template. Pokušaš isto kroz API i dobiješ grešku - i nema zaobilaznice na istom polju, ono jednostavno nije izloženo API-ju za ovu svrhu. Zaobilaznica je frequency proxy: Champions postaje &quot;3+ kupovine&quot; (eventCount &gt; 2), HighValue postaje &quot;2+ kupovine&quot;. Nije isto što i prava vrednost - kupac sa tri jeftine kupovine upada u Champions dok kupac sa jednom skupom ne upada - ali korelira dovoljno da bid odluka bude bolja nego bez ičega. Ako ti stvarno treba prava vrednost, ne gradiš je u GA4. Gradiš je u CRM-u, gde imaš pravu potrošnju po kupcu, i uvoziš je kao Customer Match.
        </p>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-900 mb-1">2. Count filteri nemaju klizne prozore</p>
        <p className="text-base text-red-800/90 mb-0">
          eventCount radi samo uz atAnyPointInTime: true, što znači &quot;ikad&quot;, ne &quot;u poslednjih N dana&quot;. Ne postoji verzija ovog filtera koja broji događaje unutar pokretnog prozora. Zaobilaznica: prozor koji si hteo da postaviš na broj događaja prebacuješ na membership duration same liste. &quot;2+ kupovine u poslednjih 540 dana&quot; postaje &quot;2+ kupovine ikad&quot; plus membership 540 dana. Rezultat je blizak, ali nije identičan originalnoj nameri - kupac koji je svoje dve kupovine napravio pre tri godine, pa se sad vratio na sajt, ući će u tu listu iako tehnički ne pripada &quot;poslednjih 540 dana&quot; po kupovini. Za većinu remarketing odluka ta razlika ne menja ništa bitno; vredi je znati kad tumačiš zašto je neko u listi.
        </p>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-900 mb-1">3. &quot;Nije kupio u poslednjih N dana&quot; se ne gradi u GA4</p>
        <p className="text-base text-red-800/90 mb-0">
          Ovo je ograničenje koje ruši pola svake win-back i replenishment ideje čim je zapišeš na papir. GA4 exclusion je uvek vezan za membership prozor same liste iz koje isključuješ, pa &quot;temporarily exclude&quot; radi kako očekuješ samo kad se prozori uključenja i isključenja poklapaju - što je slučaj kod INT lista, gde &quot;u poslednjih 14 dana dodao u korpu&quot; i &quot;u poslednjih 14 dana kupio&quot; dele isti window. Kod replenishment i win-back logike prozori se ne poklapaju po definiciji, pa se to jednostavno ne gradi u samom GA4. Zaobilaznica se seli u Google Ads: gradi se kao kombinacija dve liste - ciljna lista MINUS lista aktivnih kupaca. Zato se pomoćna ActiveCustomers definicija klonira na više prozora (45d, 25d, 120d, uz 90d listu koja ionako postoji u lifecycle stubu) - svaki window postoji zato što ga neka ciljna lista negde koristi kao isključenje.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-semibold text-gray-900 mb-1">Bonus, ako gradiš kroz API</p>
        <p className="text-base text-gray-600 mb-0">
          Shema filtera je uvek andGroup → orGroup → leaf, i to se ne može preskočiti ni za najjednostavniji uslov. Postoji samo GREATER_THAN operator - nema GREATER_THAN_OR_EQUAL, pa &quot;3+&quot; pišeš kao &quot;&gt; 2&quot;, ne kao &quot;&gt;= 3&quot;. I opis liste je ograničen na otprilike 150 karaktera, što je manje nego što misliš dok ne pokušaš da u opis staviš i definiciju i Ads exclusion napomenu odjednom.
        </p>
      </div>

      <hr />

      <h2 id="redosled">Redosled gradnje, sa proverama</h2>
      <p>
        Ne gradiš 25 lista odjednom. Gradiš u talasima, i posle svakog talasa proveravaš da li je prethodni sloj stvaran pre nego što nastaviš dalje - jer ako sloj ispod nije stvaran, sve iznad njega je lista koja pokazuje nulu i nikad neće pokazati ništa drugo.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">0</span>
            <div>
              <strong>Preduslov - ecommerce tracking radi</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">view_item, add_to_cart, begin_checkout i purchase moraju stizati, GA4 property mora biti povezan sa Google Ads nalogom, Google signals uključen ako ti treba Display doseg. Provera: GA4 → Realtime, uradi test kupovinu, vidi purchase sa vrednošću.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Talas 1 - pomoćne i lifecycle liste</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">ActiveCustomers_90d, Purchasers_365d i pomoćna ActiveCustomers_45d prve, pa FirstTimeBuyers, RepeatBuyers, EngagedNonBuyers, NewVisitors. Provera: svaka lista postoji, membership prozor je tačan, opis popunjen.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Talas 2 - intent liste</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Sve četiri INT liste. Provera: posle 48h CartAbandoners ima članove. Ako nema, add_to_cart ne stiže u GA4 - i tu staješ, jer dalja gradnja bez ovog signala ne rešava ništa.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Talas 3 - value liste</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Kroz UI ako imaš LTV template dostupan, kroz API sa frequency proxy ako nemaš.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Talas 4 - brand liste</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Tek posle provere item_brand u GA4. Provera: Explore izveštaj po item_brand za 30 dana - da li vrednosti postoje i da li su konzistentne kroz ceo katalog.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Talas 5 - replenishment</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Provera: da li kategorije u feed-u i kategorije u GA4 nose iste tokene. Ako feed kaže &quot;Moisturisers&quot; a GA4 event nosi &quot;moisturizer&quot; ili nešto treće, filter ne pogađa ništa.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div>
              <strong>Talas 6 - predictive</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Ručno kroz UI, i samo ako je model eligible.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div>
              <strong>Posle 2 nedelje</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Proveri veličine svih lista, uključi Observation na Shopping i Search kampanjama, zapiši ko je prešao prag isporuke i ko još nije.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 md:p-5 my-6">
        <p className="font-semibold text-blue-900 mb-1">Stop pravilo</p>
        <p className="text-blue-800 text-base mb-0">
          Ako talas 2 ne proradi - ako CartAbandoners posle 48h nema nijednog člana - dalja gradnja je gubljenje vremena. Publike ne popravljaju tracking. Ako add_to_cart ne stiže čisto u GA4, nijedna od preostalih lista neće raditi bolje, jer sve one zavise od istog sloja eventova koji upravo ne stiže.
        </p>
      </div>

      <hr />

      <h2 id="aktivacija">Aktivacija: Observation, isključenja, GA4 protiv CRM</h2>
      <p>
        Gradnja lista je pola posla. Druga polovina je redosled u kom ih puštaš da utiču na kampanje, i tu većina naloga koje sam video žuri - stave listu direktno na bid adjustment prvog dana, pre nego što ima dovoljno članova da bilo šta znači.
      </p>
      <p>
        Prvi korak je uvek isti: sve liste idu prvo kao <strong>Observation</strong> na Shopping i Search kampanje. Observation nema nikakav uticaj na isporuku - ne suzuje targeting, ne menja bid - ali posle dve nedelje imaš svoje brojke po publici umesto tuđih benchmark-ova iz nečije studije slučaja. Tek posle toga ide sledeći korak.
      </p>
      <p>
        Isključenja se uključuju čim liste pređu prag isporuke: ActiveCustomers_90d izlazi iz akvizicionih tokova (nema smisla plaćati za nekoga ko je već kupio prošle nedelje), OneTimeLowValue izlazi iz skupog remarketinga. Bid podešavanja dolaze tek posle punjenja i tek na listama koje već imaju volumen - ne na listi koja tek treba da naraste.
      </p>
      <p>
        Pravilo koje drži ceo sistem u perspektivi: GA4 je širina, CRM je preciznost. Isti segmenti koje gradiš u GA4 postoje i u tvom email alatu, gde imaš prave RFM cifre - tačan broj porudžbina, tačnu potrošnju po kupcu, ne proxy. Ti segmenti idu u Google Ads kao <GlossaryLink slug="first-party-data">Customer Match</GlossaryLink>. GA4 lista je aproksimacija izgrađena iz onoga što API dozvoljava. CRM lista je činjenica izgrađena iz onoga što se stvarno desilo. Koristiš obe - GA4 tamo gde ti treba domet i brzina gradnje, CRM tamo gde ti treba tačnost i gde greška u proxy-ju stvarno nešto košta.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Cilj</th>
              <th className="py-3 px-3 font-heading font-semibold">Target lista</th>
              <th className="py-3 px-3 font-heading font-semibold">MINUS (exclusion)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Win-back lapsed kupaca</td>
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">LCY_ALL_Purchasers_365d</td>
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">LCY_ALL_ActiveCustomers_90d</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">At-risk high value</td>
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">VAL_ALL_AtRisk_HighValue_120d</td>
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">LCY_ALL_ActiveCustomers_120d</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Moisturiser replenishment</td>
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">RPL_MOI_Due_45-120d</td>
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">LCY_ALL_ActiveCustomers_45d</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Supplement replenishment</td>
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">RPL_SUP_Due_25-75d</td>
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">LCY_ALL_ActiveCustomers_25d</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">SPF replenishment</td>
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">RPL_SPF_Due_45-120d</td>
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">LCY_ALL_ActiveCustomers_45d</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Čista akvizicija</td>
              <td className="py-3 px-3 text-gray-400">(bez publike)</td>
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">LCY_ALL_ActiveCustomers_90d</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Prospecting Demand Gen</td>
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">LCY_ALL_EngagedNonBuyers_30d</td>
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">LCY_ALL_Purchasers_365d</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="faq">Najčešća pitanja</h2>


      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto moje publike stoje na nuli?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Tri moguća razloga, u redosledu kojim ih proveravam. Ili nisu prešle prag isporuke (1.000 za Search/Shopping, 100 za Display/YouTube/Demand Gen). Ili event na kome počivaju ne stiže u GA4 - proveri Realtime. Ili je membership prozor kraći od stvarnog ponašanja kupaca. Proveravam ovim redosledom, ne nasumično.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko dugo da čekam pre nego što ih koristim?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Dve do četiri nedelje. GA4 puni listu od trenutka kreiranja plus otprilike 30 dana unazad - nema retroaktivnog punjenja preko toga. Pre te dve do četiri nedelje, podaci u Observation-u nemaju dovoljno članova da bilo šta znače.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li mi treba Admin API ili može kroz UI?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            UI radi za sve osim za obim. Na 25 lista, API štedi sate i daje ponovljivost. Ali UI ume dve stvari koje API ne ume: prave LTV percentile template-e i predictive audience template-e. Za te dve, ideš u UI bez obzira koliko lista imaš.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koji je maksimalni membership prozor?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            540 dana. To je tvrd plafon u GA4 - duže od toga ne postoji, koliko god ti realan ciklus kupovine bio dug. Za kategorije sa dužim ciklusom, ta razlika se rešava van GA4, obično u CRM-u.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta ako prodajem jedan brend?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            BRD stub zameni kategorijama proizvoda umesto brendovima - scope oznaka postaje kategorija (na primer SER za serum) umesto BR1/BR2. Logika ostaje potpuno ista.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li ovo radi za lead-gen, ne samo ecommerce?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Lifecycle, Intent i Value slojevi rade, sa event imenima prilagođenim lead-gen funnel-u. Replenishment ne radi, jer nema ciklusa potrošnje da se meri - i to je pola vrednosti ovog frameworka koje lead-gen nalog ne dobija.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li publike smeju u PMax?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Kao signal, da. Kao garancija targetinga, ne. Performance Max koristi publiku kao ulazni signal za algoritam, ne kao ogradu koja fizički ograničava kome se oglas prikazuje.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta ako je moj item_brand prazan?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Fallback je page_location pattern (URL sadrži brand slug) ili item_category. Ovo proveravaš pre gradnje BRD stuba, ne posle.
          </div>
        </details>
      </div>

      <hr />

      {/* CTA block */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Ceo framework, spreman za izvršavanje
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          Isti framework kao gore, ali u izvršnoj formi - markdown fajlovi koje ubaciš direktno u Claude ili ChatGPT da ti izgrade konfiguraciju po listi, plus PDF za arhivu. Traži se samo email.
        </p>
        <Link href="/ga4-audiences" className="btn-secondary inline-block">
          Preuzmi izvršnu verziju
        </Link>
      </div>
    </>
  );
}
