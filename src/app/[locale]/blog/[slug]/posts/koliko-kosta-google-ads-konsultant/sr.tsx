import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function KolikoKostaGoogleAdsKonsultantPost() {
  return (
    <>
      {/* ── TL;DR hero ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Junior freelancer košta €200-400/mesečno, senior konsultant €700-2.000/mesečno (ili €120-200/sat), agencija €500-2.000+/mesečno i često dodatnih 10-20% od ad spend-a. Razlika nije u satima rada — razlika je u tome čije odluke plaćate.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">€200-400</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Junior freelancer/mes.</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">€700-2.000</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Senior konsultant/mes.</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">€120-200</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Senior satnica</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">10-20%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Agencijski % od spend-a</p>
          </div>
        </div>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Brzi odgovor
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Koliko košta Google Ads konsultant u 2026?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          <strong>Junior freelancer</strong> naplaćuje €200-400 mesečno (obično dodatni prihod uz zaposlenje).{" "}
          <strong>Senior konsultant</strong> sa 5+ godina iskustva naplaćuje €700-2.000 mesečno fiksno ili €120-200 po satu za ad-hoc rad.{" "}
          <strong>Agencija</strong> naplaćuje €500-2.000+ mesečno, često plus 10-20% od ad spend-a iznad određenog praga.
          Cena prati iskustvo — ali ono što zapravo plaćate kod seniora nisu sati, nego kvalitet odluka i brzina kojom se izbegavaju skupe greške.
        </p>
      </div>

      <p>
        &quot;Koliko treba da platim za Google Ads konsultanta?&quot; je pitanje na koje nema jednog tačnog odgovora, ali ima jasnu logiku. Ovaj vodič je čist cost breakdown — bez prodajnog ugla, bez &quot;koga izabrati&quot; dileme. Ako vas zanima poređenje modela (agencija vs freelancer vs in-house) po fitu za vašu firmu, pogledajte{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "agencija-vs-freelancer" } }} className="underline">
          taj vodič
        </Link>
        . Ovde je fokus isključivo na brojkama: ko šta naplaćuje, po kom modelu, i zašto.
      </p>

      {/* ── Sadržaj ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#tri-nivoa-cena-junior-senior-agencija" className="block py-1 text-base text-gray-700 hover:text-primary underline">Tri nivoa cena: junior, senior, agencija</a></li>
          <li><a href="#sta-zapravo-placate-kod-seniora" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta zapravo plaćate kod seniora</a></li>
          <li><a href="#modeli-naplate-i-njihove-zamke" className="block py-1 text-base text-gray-700 hover:text-primary underline">Modeli naplate i njihove zamke</a></li>
          <li><a href="#sta-tacno-ulazi-u-fee" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta tačno ulazi u fee</a></li>
          <li><a href="#self-check-da-li-placate-koliko-treba" className="block py-1 text-base text-gray-700 hover:text-primary underline">Self-check: da li plaćate koliko treba</a></li>
          <li><a href="#cena-po-velicini-ad-spend-a" className="block py-1 text-base text-gray-700 hover:text-primary underline">Cena po veličini ad spend-a</a></li>
          <li><a href="#realan-trzisni-benchmark-2026" className="block py-1 text-base text-gray-700 hover:text-primary underline">Realan tržišni benchmark 2026</a></li>
          <li><a href="#ugovorni-uslovi-na-koje-treba-obratiti-paznju" className="block py-1 text-base text-gray-700 hover:text-primary underline">Ugovorni uslovi na koje treba obratiti pažnju</a></li>
          <li><a href="#crvene-zastavice-kod-jeftinih-ponuda" className="block py-1 text-base text-gray-700 hover:text-primary underline">Crvene zastavice kod jeftinih ponuda</a></li>
          <li><a href="#moje-cene-kao-primer-senior-modela" className="block py-1 text-base text-gray-700 hover:text-primary underline">Moje cene kao primer senior modela</a></li>
          <li><a href="#kako-izgleda-poredenje-tri-ponude-u-praksi" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kako izgleda poređenje tri ponude u praksi</a></li>
          <li><a href="#cesto-postavljana-pitanja" className="block py-1 text-base text-gray-700 hover:text-primary underline">Često postavljana pitanja</a></li>
          <li><a href="#povezani-vodici" className="block py-1 text-base text-gray-700 hover:text-primary underline">Povezani vodiči</a></li>
        </ol>
      </nav>

      <h2 id="tri-nivoa-cena-junior-senior-agencija">Tri nivoa cena: junior, senior, agencija</h2>
      <p>
        Tržište Google Ads usluga u regionu ima tri jasno odvojena cenovna nivoa. Nisu proizvoljni — prate stvarnu razliku u iskustvu, kapacitetu i riziku koji nosite kao klijent.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Tip</th>
              <th className="py-3 px-3 font-heading font-semibold">Cena</th>
              <th className="py-3 px-3 font-heading font-semibold">Ko radi na nalogu</th>
              <th className="py-3 px-3 font-heading font-semibold">Komunikacija</th>
              <th className="py-3 px-3 font-heading font-semibold">Kada ima smisla</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Junior freelancer</td>
              <td className="py-3 px-3">€200-400/mes.</td>
              <td className="py-3 px-3">0-2 god. iskustva, uči na vašem budžetu</td>
              <td className="py-3 px-3">Direktna, ali spor response na kompleksna pitanja</td>
              <td className="py-3 px-3">Budžet ispod €1.000/mes., mali rizik ako nešto krene loše</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Senior konsultant</td>
              <td className="py-3 px-3">€700-2.000/mes. ili €120-200/sat</td>
              <td className="py-3 px-3">5+ god., radi lično, ne prosleđuje junior timu</td>
              <td className="py-3 px-3">Direktna, brza, strateška — ne samo izveštavanje</td>
              <td className="py-3 px-3">Budžet €1.000-15.000/mes., potrebna je strategija ne samo izvršenje</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Agencija</td>
              <td className="py-3 px-3">€500-2.000+/mes. + često 10-20% od spend-a</td>
              <td className="py-3 px-3">Account manager + PPC specijalista (često junior/mid)</td>
              <td className="py-3 px-3">Formalnija, preko account managera</td>
              <td className="py-3 px-3">Budžet €5.000+/mes., multi-channel potreba, treba tim i backup</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Zašto je raspon unutar &quot;senior&quot; kategorije tako širok</p>
        <p className="text-blue-800 text-base mb-0">
          €700 i €2.000 mesečno mogu biti isti broj sati rada — razlika je u veličini naloga, broju kampanja i tome da li je uključena strategija (kampanje, tracking, kreativa) ili samo optimizacija postojećeg seta. Uvek pitajte šta tačno ulazi u fee pre poređenja cena.
        </p>
      </div>

      <hr />

      <h2 id="sta-zapravo-placate-kod-seniora">Šta zapravo plaćate kod seniora</h2>
      <p>
        Ovo je deo koji se najčešće pogrešno razume. Klijenti gledaju satnicu i misle da plaćaju vreme. U praksi, kod seniora plaćate nešto drugo — a to nešto se ne vidi na fakturi.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Odluke, ne sate</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">
          Senior zna koju bidding strategiju odabrati bez 3 nedelje testiranja, prepoznaje kada je{" "}
          <GlossaryLink slug="quality-score">Quality Score</GlossaryLink> problem a kada je problem u landing page-u,
          i zna kada je bolje pauzirati kampanju nego &quot;dati joj još malo vremena da se optimizuje&quot;. Ta odluka
          često vredi više od 10 sati junior rada.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Izbegnute greške koje se ne vide</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">
          Najskuplji deo Google Ads-a nisu loše kampanje — to su kampanje koje rade pogrešnu stvar mesecima jer niko
          nije primetio grešku u <GlossaryLink slug="conversion-rate">conversion tracking-u</GlossaryLink> ili u strukturi naloga.
          Senior to hvata u prve dve nedelje. Junior često ne zna ni šta da traži.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Prioritizaciju vremena</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">
          Sa ograničenim satima mesečno, senior zna gde da uloži pažnju — 20% promena koje nose 80% rezultata.
          Junior često troši vreme na sitne optimizacije dok veći problem stoji nedirnut.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Direktnu komunikaciju bez posrednika</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">
          Kada pitanje postavite direktno osobi koja upravlja nalogom, dobijate odgovor koji je informisan realnim stanjem naloga tog trenutka — ne prepričan kroz account managera koji nema pristup dashboard-u dok ne organizuje interni sastanak. Ova razlika u brzini i tačnosti odgovora se ne meri satima, ali se oseti svake nedelje saradnje.
        </p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Bez preterivanja</p>
        <p className="text-yellow-800 text-base mb-0">
          Ovo ne znači da junior freelanceri nemaju vrednost — za male budžete i jednostavne naloge, često su sasvim dovoljni. Ali za nalog gde greška od €500 mesečno prolazi nezapaženo tri meseca, cena seniora se sama isplati.
        </p>
      </div>

      <hr />

      <h2 id="modeli-naplate-i-njihove-zamke">Modeli naplate i njihove zamke</h2>
      <p>Postoje četiri osnovna modela naplate. Svaki ima svoju logiku i svoju zamku — evo iskreno o svakom.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Fiksni mesečni retainer</h3>
          <p className="text-base text-gray-600 mb-2">Ista cena svaki mesec, nezavisno od ad spend-a ili obima rada.</p>
          <p className="text-xs text-green-700 mb-1">+ Predvidivo, lako budžetirati, nema konflikta interesa oko rasta spend-a</p>
          <p className="text-xs text-red-600 mb-0">- Ako nalog naglo naraste, konsultant može biti preopterećen bez promene cene (proverite ima li klauzulu za review)</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Procenat od ad spend-a</h3>
          <p className="text-base text-gray-600 mb-2">Obično 10-20% (najčešće 12-15%) potrošenog budžeta.</p>
          <p className="text-xs text-green-700 mb-1">+ Skalira se prirodno sa rastom naloga, fer za veće budžete</p>
          <p className="text-xs text-red-600 mb-0">- Kod velikih budžeta plaćate za obim, ne za trud — €50.000 spend ne znači 5x posla u odnosu na €10.000. Uvek pitajte za cap.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Satnica (hourly)</h3>
          <p className="text-base text-gray-600 mb-2">Plaćate tačno utrošeno vreme — €120-200/sat za seniora.</p>
          <p className="text-xs text-green-700 mb-1">+ Transparentno, dobro za ad-hoc konsultacije i audit</p>
          <p className="text-xs text-red-600 mb-0">- Loše za ongoing upravljanje — stvara podsvesni podsticaj da se rad razvuče. Tražite mesečni cap sati.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Hibrid (baza + procenat)</h3>
          <p className="text-base text-gray-600 mb-2">Manja fiksna baza + procenat iznad definisanog praga spend-a.</p>
          <p className="text-xs text-green-700 mb-1">+ Balansira predvidivost i skalabilnost, najbolji za firme koje rastu</p>
          <p className="text-xs text-red-600 mb-0">- Kompleksniji za pregovaranje i praćenje, zahteva jasnu formulu unapred</p>
        </div>
      </div>

      <p className="font-semibold">Primer kalkulacije (€5.000 ad spend, senior konsultant):</p>
      <ul>
        <li>Fiksni retainer: €900-1.500/mesečno</li>
        <li>Procenat (13%): €650/mesečno</li>
        <li>Hibrid (€400 + 8% iznad €3.000): €560/mesečno</li>
        <li>Satnica (10h/mes. × €150): €1.500/mesečno</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Da li je % od spend-a fer?</p>
        <p className="text-blue-800 text-base mb-0">
          Za budžete od €2.000-15.000 mesečno, procenat modeli su generalno fer jer prate stvaran rast obima posla (više kampanja, više testiranja, više izveštavanja). Iznad €20.000/mesec, matematika se lomi — tražite hibrid sa capom ili fiksnu cenu.
        </p>
      </div>

      <hr />

      <h2 id="sta-tacno-ulazi-u-fee">Šta tačno ulazi u fee — i zašto isti broj znači različitu stvar</h2>
      <p>
        Najčešća greška prilikom poređenja ponuda je gledanje samo na broj na dnu ponude. Dva konsultanta mogu naplaćivati identičnih €1.000 mesečno, a raditi potpuno različit obim posla. Pre nego što uporedite cene, razjasnite tačno šta je uključeno.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Uobičajeno uključeno u fee</h3>
          <ul className="text-sm mb-0">
            <li>Optimizacija ponuda (bidding) i budžeta</li>
            <li>Dodavanje/pauziranje ključnih reči i negativnih termina</li>
            <li>Testiranje oglasa (RSA varijante)</li>
            <li>Mesečni ili dvonedeljni izveštaj sa komentarom</li>
            <li>Email/Slack komunikacija u okviru radnog vremena</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Često NIJE uključeno (proverite unapred)</h3>
          <ul className="text-sm mb-0">
            <li>Kreiranje novih kampanja od nule (Shopping, PMax, Display)</li>
            <li>Landing page copy ili dizajn</li>
            <li>Conversion tracking setup ili GTM/GA4 troubleshooting</li>
            <li>Kreativa za Display/YouTube (slike, video)</li>
            <li>Ad-hoc pozivi van dogovorenog broja mesečno</li>
          </ul>
        </div>
      </div>

      <p>
        Praktičan test: tražite od konsultanta da napiše, u jednoj rečenici po stavci, šta je uključeno u mesečni fee. Ako izbegava konkretan odgovor i vraća se na &quot;radimo sve što je potrebno&quot;, to je znak da granice scope-a nisu jasne — a nejasan scope je najčešći izvor sukoba posle par meseci saradnje.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Primer iz prakse</p>
        <p className="text-yellow-800 text-base mb-0">
          Nalog sa €3.000 ad spend-a i samo Search kampanjama zahteva mnogo manje mesečnog rada od naloga sa istim spend-om raspoređenim na Search + Shopping + PMax + remarketing. Isti fee od €800/mesečno može biti preplaćen u prvom slučaju i potplaćen u drugom — zato cenu treba vezati za kompleksnost naloga, ne samo za iznos budžeta.
        </p>
      </div>

      <hr />

      <h2 id="self-check-da-li-placate-koliko-treba">Self-check: da li plaćate koliko treba</h2>
      <p>
        Pre nego što potpišete ugovor ili produžite postojeći, prođite kroz ovih pet pitanja. Ona brzo pokažu da li je cena koju plaćate usklađena sa obimom i kvalitetom rada koji dobijate.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Koliko sati mesečno realno ide na moj nalog?</strong>
              <span className="text-gray-500"> — ako je fee €1.000, a realno se troši 3 sata mesečno, plaćate €330/sat što je iznad senior benchmarka bez jasne dodatne vrednosti</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Da li dobijam pisani izveštaj sa objašnjenjem, ne samo brojkama?</strong>
              <span className="text-gray-500"> — dashboard bez konteksta ne opravdava senior cenu</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Koliko brzo dobijam odgovor na konkretno pitanje?</strong>
              <span className="text-gray-500"> — preko 48h za jednostavno pitanje je crvena zastavica bez obzira na cenu</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Da li se ROAS/CPA trend poboljšava kvartalno, ili stagnira?</strong>
              <span className="text-gray-500"> — plaćate za rezultat, ne za aktivnost; stagnacija 2+ kvartala zaredom traži razgovor</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Da li bih dobio drugačiji (bolji) odgovor od nekog drugog za istu cenu?</strong>
              <span className="text-gray-500"> — jednom godišnje vredi platiti nezavisan audit kao proveru (vidi sekciju o mojim cenama ispod)</span>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="cena-po-velicini-ad-spend-a">Cena konsultanta u odnosu na veličinu ad spend-a</h2>
      <p>
        Cena konsultantskog fee-a treba da bude proporcionalna veličini naloga koji vodi, ne fiksna bez obzira na budžet. Evo kako to izgleda u praksi po fazama rasta.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad spend: €500-2.000/mes.</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Mali nalog, jedan kanal</h3>
          <p className="text-base text-gray-600 mb-3">Fee od 40%+ ad spend-a nije neuobičajen kod agencija na ovom nivou — zato junior freelancer ili senior na satnicu ad-hoc obično ima bolji odnos cene i vrednosti.</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Realan fee:</p>
          <p className="text-base mb-0">€200-500/mesečno (junior) ili €150-300/mesečno senior konsultacije po potrebi</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad spend: €2.000-8.000/mes.</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Sweet spot za seniora</h3>
          <p className="text-base text-gray-600 mb-3">Ovde senior konsultant daje najbolji odnos cene i pažnje — dovoljno velik nalog da opravda ekspertizu, dovoljno mali da dobijate personalizovan fokus.</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Realan fee:</p>
          <p className="text-base mb-0">€700-1.500/mesečno fiksno, ili 12-15% od spend-a</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad spend: €8.000-20.000/mes.</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Granica kapaciteta jednog seniora</h3>
          <p className="text-base text-gray-600 mb-3">Jedan senior konsultant može efikasno voditi do otprilike €15-20K spend-a pre nego što kvalitet pažnje počne da opada. Iznad toga, razmišljajte o agenciji ili dva paralelna konsultanta.</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Realan fee:</p>
          <p className="text-base mb-0">€1.500-2.500/mesečno ili hibrid model</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad spend: €20.000+/mes.</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Iznad senior solo kapaciteta</h3>
          <p className="text-base text-gray-600 mb-3">Na ovom nivou, jedan čovek — koliko god senior — nosi rizik single point of failure. Agencija sa timom ili senior + junior podrška postaje racionalniji izbor bez obzira na cenu.</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Realan fee:</p>
          <p className="text-base mb-0">Agencija €2.000-4.000+/mesečno ili senior + in-house koordinator</p>
        </div>
      </div>

      <p>
        Za detaljnije poređenje modela upravljanja po veličini budžeta (agencija/freelancer/in-house), pogledajte{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "agencija-vs-freelancer" } }} className="underline">
          vodič agencija vs. freelancer vs. in-house
        </Link>.
      </p>

      <hr />

      <h2 id="realan-trzisni-benchmark-2026">Realan tržišni benchmark 2026</h2>
      <p>
        Regionalne cifre su korisne, ali korisno je videti i globalni benchmark da razumete gde stoji &quot;senior&quot; nivo na zrelijim tržištima. Take Some Risk-ov godišnji PPC Salary Survey prati zarade freelance i in-house PPC profesionalaca u SAD i UK.
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Benchmark: senior freelance PPC specijalista (10-15 god. iskustva)</p>
        <div className="text-base text-yellow-900 space-y-1">
          <p className="mb-1">Medijalna godišnja zarada (US freelance, PPC Salary Survey 2026): <strong>$202.895</strong></p>
          <p className="mb-1">Efektivna satnica pri punom radnom vremenu: <strong>~$145-175/sat</strong></p>
          <p className="mb-0 text-sm">Izvor: Take Some Risk — PPC Salary Survey (godišnja anketa freelance i in-house PPC profesionalaca)</p>
        </div>
      </div>

      <p>
        Ovaj broj nije direktno prenosiv na srpsko/regionalno tržište zbog razlike u troškovima života i konkurenciji, ali daje realan okvir: <strong>senior PPC ekspertiza na zrelim tržištima se plaća blizu $150-200/sat</strong>. Kada neko u regionu naplaćuje €150-200/mesečno &quot;za sve&quot;, matematika jednostavno ne staje — ili je osoba junior, ili vam posvećuje sat-dva mesečno.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Zašto je regionalna cena ipak niža</p>
        <p className="text-blue-800 text-base mb-0">
          Niža cena života i manja platežna moć lokalnog tržišta znače da senior konsultant u Srbiji ili regionu razumno naplaćuje manje od US/UK ekvivalenta — ali odnos treba da ostane proporcionalan, ne da padne na nivo junior cene. Senior sa 5-10 godina iskustva koji naplaćuje €150/mesečno za ongoing upravljanje je ili subvencionisan drugim izvorom prihoda, ili ne radi ono što tvrdi da radi.
        </p>
      </div>

      <hr />

      <h2 id="ugovorni-uslovi-na-koje-treba-obratiti-paznju">Ugovorni uslovi na koje treba obratiti pažnju</h2>
      <p>
        Cena je samo jedan deo priče. Uslovi ugovora određuju koliko je ta cena zapravo rizična ili sigurna za vas kao klijenta. Evo šta proveriti pre potpisivanja, bez obzira da li birate juniora, seniora ili agenciju.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Trajanje i notice period</h3>
          <p className="text-base text-gray-600 mb-0">Standard je 3-6 meseci sa 30-dnevnim notice periodom za raskid. Ugovori duži od 12 meseci bez trial faze su crvena zastavica — dobar konsultant ne treba lock-in da zadrži klijenta.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Klauzula za review cene</h3>
          <p className="text-base text-gray-600 mb-0">Ako je fee fiksan, ugovor treba da predvidi kada i kako se cena revidira (npr. kad ad spend poraste 2x). Bez ove klauzule, jedna strana na kraju subvencioniše drugu.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Vlasništvo naloga i podataka</h3>
          <p className="text-base text-gray-600 mb-0">Google Ads, GA4 i GTM nalozi moraju biti registrovani na vaš email/domen sa admin pristupom za vas, bez obzira ko upravlja njima operativno. Ovo mora biti eksplicitno u ugovoru, ne podrazumevano.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Definisan scope i broj revizija</h3>
          <p className="text-base text-gray-600 mb-0">Koliko kampanja, koliko izveštaja mesečno, koliko poziva/sastanaka je uključeno. Sve van toga se posebno naplaćuje — jasno definisano izbegava kasnije nesuglasice.</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Zlatno pravilo</p>
        <p className="text-base text-yellow-900 mb-0">
          Ako partner ne želi da stavi osnovne uslove (scope, notice period, vlasništvo naloga) pismeno pre početka saradnje, to govori više o njima nego bilo koja cena na ponudi.
        </p>
      </div>

      <hr />

      <h2 id="crvene-zastavice-kod-jeftinih-ponuda">Crvene zastavice kod jeftinih ponuda</h2>
      <p>Niska cena sama po sebi nije problem — problem je kada niska cena krije nešto što bi trebalo da znate unapred.</p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Crvena zastavica #1</p>
        <p className="font-semibold mb-2">Junior specijalista radi na vašem nalogu bez nadzora seniora</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0"><strong>Pitajte:</strong> &quot;Koliko godina iskustva ima osoba koja će konkretno raditi na mom nalogu, i ko proverava njen rad?&quot; Agencije često prodaju senior ekspertizu na sastanku, a onda dodele nalog junioru.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Crvena zastavica #2</p>
        <p className="font-semibold mb-2">Nemate (ili nećete imati) admin pristup sopstvenom Google Ads nalogu</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">Nalog mora biti vaš, sa admin pravima za vas. Ako partner insistira da drži kontrolu &quot;zbog sigurnosti&quot;, to je deal-breaker — kod raskida ostajete bez istorije i podataka.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Crvena zastavica #3</p>
        <p className="font-semibold mb-2">Nema verifikacije conversion tracking-a pre starta kampanja</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">Ako konsultant ne postavi pitanje o tome kako merite konverzije u prvoj nedelji, radi na slepo. Loš tracking je razlog broj jedan zašto kampanje &quot;ne rade&quot; — a to se retko vidi dok ne prođe par meseci potrošenog budžeta.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Crvena zastavica #4</p>
        <p className="font-semibold mb-2">Cena je ispod €150-200/mesečno za aktivno upravljanje</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">Kvalitetan rad za manje od toga nije održiv — znači da ste jedan od 20+ klijenata sa minimalnom pažnjom, ili da je osoba tek počela i uči na vašem nalogu.</p>
        </div>
      </div>

      <hr />

      <h2 id="moje-cene-kao-primer-senior-modela">Moje cene kao primer senior modela</h2>
      <p>
        Bez prodajnog pritiska — evo transparentno kako ja strukturiram cene, kao konkretan primer kako senior model obično izgleda u praksi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad-hoc</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Konsultacije</h3>
          <p className="text-base text-gray-600 mb-3">Satnica za audit, drugo mišljenje ili konkretno pitanje bez ongoing angažmana.</p>
          <p className="text-xl font-heading font-bold mb-0">€150/sat</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Jednokratno</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Kickstart paket</h3>
          <p className="text-base text-gray-600 mb-3">Setup naloga, struktura kampanja, tracking — za firme koje kreću od nule.</p>
          <p className="text-xl font-heading font-bold mb-0">od €690</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ongoing</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Vođenje naloga</h3>
          <p className="text-base text-gray-600 mb-3">Mesečno upravljanje, optimizacija i izveštavanje za aktivne kampanje.</p>
          <p className="text-xl font-heading font-bold mb-0">od €700/mes.</p>
        </div>
      </div>

      <p className="text-base text-gray-600">
        Ovo je jedan konkretan primer senior pricinga na regionalnom tržištu — ne jedini ispravan model, samo referentna tačka. Za detalje po tipu angažmana pogledajte{" "}
        <Link href="/usluge/konsultacije" className="underline">konsultacije</Link>,{" "}
        <Link href="/usluge/starter-paket" className="underline">starter paket</Link> ili{" "}
        <Link href="/usluge/google-ads-upravljanje" className="underline">vođenje naloga</Link>.
      </p>

      <hr />

      <h2 id="kako-izgleda-poredenje-tri-ponude-u-praksi">Kako izgleda poređenje tri ponude u praksi</h2>
      <p>
        Da bi sve ovo bilo konkretnije, evo hipotetičkog primera — ne stvaran klijent, već tipičan scenario koji viđam kada firma sa €4.000 mesečnog ad spend-a traži ponude od tri različita tipa partnera.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Ponuda</th>
              <th className="py-3 px-3 font-heading font-semibold">Mesečni fee</th>
              <th className="py-3 px-3 font-heading font-semibold">Efektivna cena/sat*</th>
              <th className="py-3 px-3 font-heading font-semibold">Šta dobijate</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Junior freelancer</td>
              <td className="py-3 px-3">€350/mes.</td>
              <td className="py-3 px-3">~€35-45/sat (8-10h)</td>
              <td className="py-3 px-3">Osnovna optimizacija, mesečni izveštaj bez dubljeg konteksta</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Senior konsultant</td>
              <td className="py-3 px-3">€900/mes.</td>
              <td className="py-3 px-3">~€150/sat (6h)</td>
              <td className="py-3 px-3">Strateška optimizacija, direktan kontakt, brzo prepoznavanje problema</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Manja agencija</td>
              <td className="py-3 px-3">€1.200/mes.</td>
              <td className="py-3 px-3">~€60-80/sat (mešoviti tim)</td>
              <td className="py-3 px-3">Account manager + junior/mid PPC, formalniji izveštaji, backup pri odsustvu</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-2">*Procena na osnovu tipičnog broja sati posvećenih nalogu ove veličine — orijentaciona, ne tačna kalkulacija za svaki nalog.</p>

      <p>
        Na prvi pogled, junior ponuda deluje najisplativije. Ali €35-45/sat za Google Ads upravljanje je ispod nivoa na kom kvalitetan rad realno može da se pruži — što znači da deo posla verovatno neće biti urađen kako treba, ili će se osloniti na automatizovane preporuke Google-a bez kritičke provere.
      </p>
      <p>
        Senior ponuda po €150/sat je u skladu sa tržišnim benchmarkom (videti sekciju iznad) i uglavnom znači da dobijate punu pažnju jedne iskusne osobe. Agencijska ponuda po €60-80/sat efektivno je jeftinija po satu jer uključuje tim — ali sa dodatnim slojem komunikacije (account manager) i manjom garancijom da će konkretno vaš nalog raditi senior osoba.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Kako ja gledam na ovo poređenje</p>
        <p className="text-blue-800 text-base mb-0">
          Za nalog ove veličine (€4.000 spend, jedan kanal, jasan cilj), senior opcija obično nosi najbolji odnos rizika i vrednosti — dovoljno pažnje da se greške hvataju rano, dovoljno iskustva da se ne troši vreme na učenje na vašem budžetu. Ali to nije univerzalno tačno; ako imate više kanala i potrebu za kreativom/dizajnom, agencijski tim brže pokriva širi scope.
        </p>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2 id="cesto-postavljana-pitanja">Često postavljana pitanja</h2>
      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko košta Google Ads konsultant mesečno?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Za junior freelancera računajte €200-400 mesečno. Senior konsultant sa 5+ godina iskustva naplaćuje €700-2.000 mesečno fiksno, zavisno od obima naloga i da li je uključena strategija ili samo optimizacija. Agencije počinju od €500-2.000+ mesečno, često plus procenat od ad spend-a.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li je procenat od ad spend-a fer model naplate?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Za budžete €2.000-15.000 mesečno, da — procenat (obično 10-20%, tipično 12-15%) prati realan rast obima posla. Iznad €20.000 mesečno matematika se lomi jer posao ne raste linearno sa spend-om. U tom slučaju tražite hibrid model sa capom ili fiksnu cenu.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kada junior konsultant ima smisla umesto seniora?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Kada je budžet ispod €1.000 mesečno, nalog je jednostavan (jedna kampanja, jedan cilj), i imate internu osobu koja može da nadgleda rad makar na visokom nivou. Za kompleksnije naloge ili veće budžete, cena greške brzo prevaziđe uštedu na fee-u.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko traje tipična saradnja sa Google Ads konsultantom?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Standardni ugovori su 3-6 meseci sa 30-dnevnim notice periodom. Prvi rezultati optimizacije se vide za 2-3 meseca, a stabilna saradnja obično traje godinu i duže ako je fit dobar. Bežite od ugovora dužih od 12 meseci bez trial perioda.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta ako budžet ne dozvoljava seniora?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Razmislite o jednokratnom senior auditu ili setup-u (€500-1.000) koji postavlja strukturu i tracking kako treba, a onda junior ili DIY vodi ongoing optimizaciju uz kvartalni senior review. Ovo daje 80% vrednosti seniora za deo cene ongoing angažmana.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li je normalno pregovarati cenu sa Google Ads konsultantom?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Da, do određene mere. Fiksni retainer se često može prilagoditi obimu (npr. manje kampanja za nižu cenu na startu, sa planom rasta posle 3 meseca). Ono što ne treba pregovarati je kvalitet — ako konsultant popusti u ceni ali onda smanji pažnju posvećenu nalogu, dobili ste lošiju uslugu, ne bolju cenu. Bolji pristup je pregovarati scope (šta je uključeno) nego samo broj na fakturi.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto se cene toliko razlikuju između Srbije/regiona i zapadnih tržišta?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Trošak života i platežna moć lokalnog tržišta su glavni faktori — isti senior nivo ekspertize se u UK/US prodaje po $150-200/sat, dok se u regionu prodaje po €120-200/sat. Ovo nije razlika u kvalitetu rada, već u tržišnoj ceni rada tog nivoa u datoj ekonomiji. Zato regionalni klijenti mogu dobiti senior ekspertizu po povoljnijoj ceni nego što bi platili istu osobu da radi za zapadnog klijenta.
          </div>
        </details>
      </div>

      {/* ── Povezani vodiči ── */}
      <h2 id="povezani-vodici">Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/konsultacije" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Konsultacije</p>
          <p className="text-xs text-gray-500 mb-0">Ad-hoc audit ili strateško drugo mišljenje po satnici</p>
        </Link>
        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Vođenje Google Ads naloga</p>
          <p className="text-xs text-gray-500 mb-0">Ongoing mesečno upravljanje i optimizacija</p>
        </Link>
        <Link href="/usluge/starter-paket" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Starter paket</p>
          <p className="text-xs text-gray-500 mb-0">Jednokratni setup naloga za firme koje kreću od nule</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "agencija-vs-freelancer" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Agencija vs. Freelancer vs. In-House</p>
          <p className="text-xs text-gray-500 mb-0">Koji model upravljanja odgovara vašoj firmi</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Koliko košta Google oglašavanje</p>
          <p className="text-xs text-gray-500 mb-0">CPC po industrijama i budžeti za sam ad spend</p>
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
