import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function ChecklistUpravljanjaSR() {
  return (
    <>
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Univerzalna Google Ads checklista ne postoji. Ono što postoji je ritam - šta se na nalogu radi svaki dan, svake nedelje, svakog meseca - a taj ritam se izvodi iz jednog broja: koliko konverzija nalog pravi mesečno.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">50</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">konverzija mesečno - prag opreza</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">90</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">dana pre ozbiljnih zaključaka na novom nalogu</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">stvari u dnevnoj proveri</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">30 min</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">nedeljno - dovoljno samo za mali nalog</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Brzi odgovor
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Postoji li univerzalna Google Ads checklista?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          Ne. Dva ista brenda, sa istim proizvodima, traže dva različita spiska ako jedan prodaje preko Shopify-a a drugi preko svoje platforme. Ono što postoji je <strong>ritam</strong>: šta se na tom nalogu radi svaki dan, šta svake nedelje, šta jednom mesečno. Taj ritam se ne prepisuje sa interneta nego se izvodi iz jednog broja - koliko konverzija nalog pravi mesečno.
        </p>
      </div>

      <hr />
      {/* ── Sadržaj ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#zasto-checklista-ne-radi" className="block py-1 text-base text-gray-700 hover:text-primary underline">Zašto vam skinuta checklista ne pomaže</a></li>
          <li><a href="#ritam-ne-lista" className="block py-1 text-base text-gray-700 hover:text-primary underline">Ono što zaista radi: ritam, ne lista</a></li>
          <li><a href="#dnevna-provera" className="block py-1 text-base text-gray-700 hover:text-primary underline">Dnevno: pet minuta, tri stvari</a></li>
          <li><a href="#prag-konverzija" className="block py-1 text-base text-gray-700 hover:text-primary underline">Prag koji određuje sve ostalo: broj konverzija</a></li>
          <li><a href="#search-terms" className="block py-1 text-base text-gray-700 hover:text-primary underline">Search terms: jedini podatak koji zaista boji nalog</a></li>
          <li><a href="#sta-se-ne-dira" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta se ne dira</a></li>
          <li><a href="#kvartalni-pregled" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kvartalno: ono što nema smisla gledati češće</a></li>
          <li><a href="#gde-novac-curi" className="block py-1 text-base text-gray-700 hover:text-primary underline">Gde novac stvarno curi</a></li>
          <li><a href="#vlasnik-30-minuta" className="block py-1 text-base text-gray-700 hover:text-primary underline">Vlasnik firme sa trideset minuta nedeljno</a></li>
          <li><a href="#cesto-postavljana-pitanja" className="block py-1 text-base text-gray-700 hover:text-primary underline">Često postavljana pitanja</a></li>
        </ol>
      </nav>

      <h2 id="zasto-checklista-ne-radi">Zašto vam skinuta checklista ne pomaže</h2>
      <p>
        Checkliste na internetu postoje da bi se skidale. To im je posao.
      </p>
      <p>
        Uzmite eCommerce, recimo dva skin care brenda. Isti proizvodi, nega lica i tela, ista publika. Jedan je na Shopify-u, drugi na svojoj platformi. To su dva potpuno različita posla: drugačije se radi sa product feed-om, drugačije izgleda put kupca kroz sajt, drugačije se mere stvari. Spisak koji važi za prvog na drugom vam neće uraditi ništa.
      </p>
      <p>
        Ne postoji dokument sa tristo pitanja koji će vam dati odličnu checklistu za jedan nalog, a onda i za sve ostale naloge koje vodite. Svakom nalogu treba sopstvena lista: šta mora da ima i kako mora tehnički da bude postavljeno.
      </p>
      <p>
        Najgori saveti koje sam video u tuđim checklistama nisu netačni. Oni su generični. A ono što nema veze sa vašim biznisom nije relevantno za vas, ma koliko dobro zvučalo.
      </p>
      <p>
        Checklista ipak ima smisla kad je napravljena za jedan kanal, sa jednom svrhom - primer je <Link href={{ pathname: "/blog/[slug]", params: { slug: "pmax-audit-checklist" } }} className="underline">checklista za Performance Max audit</Link>, ili njena interaktivna verzija, <Link href="/resursi/pmax-check" className="underline">PMax Check</Link>. Razlika je u tome što ta checklista ne tvrdi da važi za Search, za Shopping ili za tuđi nalog - važi tačno za ono za šta je napravljena.
      </p>

      <hr />

      <h2 id="ritam-ne-lista">Ono što zaista radi: ritam, ne lista</h2>
      <p>
        Pitanje "koliko puta nedeljno da diram nalog" je pogrešno postavljeno. Nema odgovora u broju.
      </p>
      <p>
        Svaki nalog mora da ima svoj baseline. Vi tačno znate šta se na njemu radi svaki dan, šta svaki drugi dan, šta svake nedelje, šta svake druge nedelje, a šta jednom ili dvaput mesečno. Kad je to jednom postavljeno, ne pitate se više šta danas da radite.
      </p>
      <p>
        Radio sam nalog sa šestocifrenim mesečnim budžetom, preko četrdeset Shopping i preko četrdeset Search kampanja, jer smo gađali više tržišta odjednom. Taj nalog je radio dobro. Nije radio dobro zato što se nešto desilo preko noći, nego zato što su se sistemske, dobro organizovane stvari radile svaki dan i svake nedelje. Rezultat je bio posledica ritma.
      </p>
      <p>
        Godinama sam to držao ručno. Otvorite alat za vođenje projekata, svejedno koji, kliknete na zadatak ili na plan, i znate šta vas te nedelje čeka na tom nalogu. Danas mi veći deo tih provera isporučuje sistem koji sam sagradio. Ono što je ostalo meni je pomereno na drugi nivo - odluka, ne provera.
      </p>
      <p>
        Kako taj ritam izgleda razložen po konkretnim optimizacijama iz nedelje u nedelju, pišem u <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimizacija" } }} className="underline">vodiču za optimizaciju Google Ads naloga</Link>.
      </p>

      <figure className="my-8">
        <Image src="/blog/checklist-ritam.webp" alt="Ilustracija četiri trake sa satovima i sve većim brojem tačaka, tema dnevnog, nedeljnog, mesečnog i kvartalnog ritma provere Google Ads naloga" width={1200} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-sm text-gray-500 text-center mt-2">Ritam se gradi oko naloga, ne prepisuje sa interneta.</figcaption>
      </figure>

      <hr />

      <h2 id="dnevna-provera">Dnevno: pet minuta, tri stvari</h2>
      <p>
        Kad ujutru otvorim nalog, ne otvaram izveštaj. Gledam tri stvari.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Da li je budžet potrošen u okviru zadatog.</strong> <span className="text-gray-500">Ne u apsolutnom iznosu nego u odnosu na prosek poslednjih sedam dana, pa poslednjih petnaest. Tražim skok, ne cifru.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Da li uopšte ima klikova i impresija.</strong> <span className="text-gray-500">Zvuči trivijalno dok se ne desi. Nalog ume da stane iz razloga koji nemaju veze sa vama - odbijen oglas, ograničenje po politikama, pauzirana kampanja koju je neko drugi dirao.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Da li konverzije uopšte ulaze u dnevnu proveru.</strong> <span className="text-gray-500">Ovo je jedina od tri stavke koja se razlikuje od naloga do naloga, i zavisi od jedne stvari: koliki je conversion delay na tom nalogu. Ako se konverzija na vašem nalogu prosečno dešava tri dana posle klika, jučerašnji podatak vam ništa ne govori i ne treba da bude u dnevnoj proveri. Ako se dešava istog dana, treba.</span></div>
          </div>
        </div>
      </div>

      <p>
        Većina ljudi ovde pravi štetu tako što na osnovu jučerašnjeg dana menja nešto što se meri u nedeljama.
      </p>
      <p>
        Širi kontekst - kako ova dnevna provera stoji u odnosu na dubinski audit naloga - pokriva <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="underline">Google Ads audit checklista</Link>.
      </p>

      <hr />

      <h2 id="prag-konverzija">Prag koji određuje sve ostalo: broj konverzija</h2>
      <p>
        Ovo je jedina tačka gde se slažem sa zvaničnim Google stavom.
      </p>
      <p>
        Nov nalog treba da odstoji. Red veličine devedeset dana pre nego što zaključke uzimate ozbiljno.
      </p>
      <p>
        Posle toga sve zavisi od jednog broja - koliko konverzija nalog pravi mesečno.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Ispod 50 konverzija mesečno</h3>
          <p className="text-base text-gray-600 mb-0">Ovo je slaba faza. Ovde se gleda sa četvoro otvorenih očiju, jer je svaka pojedinačna konverzija dovoljno teška da pomeri sliku. Promene se prave retko i pažljivo.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Nalog sa hiljadama konverzija mesečno</h3>
          <p className="text-base text-gray-600 mb-0">Kad to razložite na nedeljni i dnevni nivo, promena ciljanog ROAS-a ili ciljanog CPA se vidi veoma brzo, uz vremenski pomak od oko tri dana. Tu možete da radite konkretnije i češće, jer sistem ima od čega da uči.</p>
        </div>
      </div>

      <p>
        Isti potez na ta dva naloga nije isti potez. Zato je "koliko često menjati bid strategiju" pitanje bez univerzalnog odgovora, a svaka checklista koja vam da broj laže.
      </p>
      <p>
        Kako izgleda izbor bidding strategije u zavisnosti od te faze naloga, razložio sam u <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-vodic" } }} className="underline">Smart Bidding vodiču</Link>.
      </p>

      <figure className="my-8">
        <Image src="/blog/checklist-prag-konverzija.webp" alt="Ilustracija dve tegle, jedne sa nekoliko tačaka pod lupom i druge pune tačaka pored brzinomera, tema praga od 50 konverzija mesečno u Google Ads nalogu" width={1200} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-sm text-gray-500 text-center mt-2">Broj konverzija mesečno određuje koliko sme da se dira bid strategija.</figcaption>
      </figure>

      <hr />

      <h2 id="search-terms">Search terms: jedini podatak koji zaista boji nalog</h2>
      <p>
        Godinama sam najveći deo pažnje u Search i Shopping kampanjama držao na search terms izveštaju. Razlog je prost.
      </p>
      <p>
        Ne znamo ko je čovek iza klika. Znamo grubu lokaciju, znamo demografiju, znamo da li je kupio. Ali search terms je jedini podatak koji nam kaže <strong>šta je taj čovek zapravo hteo</strong>. On je taj koji ceo nalog boji u različite boje.
      </p>
      <p>Redosled kojim gledam:</p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Saobraćaj</strong> <span className="text-gray-500">- klikovi, impresije, CTR. Šta nam to govori o tome kako se pojavljujemo.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Ishod</strong> <span className="text-gray-500">- transakcije, prosečna vrednost porudžbine, konverzije. Šta je od toga došlo kao prodaja i koje vrednosti.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Sortiranje</strong> <span className="text-gray-500">- po nameri, po ponašanju pri kupovini, po fazi (TOFU, MOFU, BOFU).</span></div>
          </div>
        </div>
      </div>

      <p>
        Klasično pravilo koje i dalje važi: search term koji uopšte nije u nalogu, ima kvalitetne klikove i impresije, a nije konvertovao u poslednje dve nedelje - ide unutra kao ključna reč da biste ga kontrolisali. I obrnuto, term koji troši a ne radi ništa ide u negativne. Kako tu listu da držite kao sistem, a ne kao jednokratni spisak sa starta, pisao sam u <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="underline">vodiču za negativne ključne reči</Link>.
      </p>
      <p>
        Još jedna stvar koju većina ne radi: povucite search terms za poslednjih šest meseci, pa za godinu, pa za dve. Ne tražite tu šta se dešava sada. Tražite šta vam je promaklo.
      </p>
      <p>
        I da budem iskren do kraja: iako mi ovo danas radi sistem, uhvatim se da sve skinem ručno i proverim. Još nemam osećaj da se na automatiku ovde oslanjam zatvorenih očiju.
      </p>

      <hr />

      <h2 id="sta-se-ne-dira">Šta se ne dira</h2>
      <p>
        <strong>Preporuke iz Google Ads panela.</strong> Sve do jedne ih ignorišem već nekoliko godina. Nisu tehnički netačne, ali su napisane bez ijednog uvida u kontekst naloga.
      </p>
      <p>
        Evo glupog ali iskrenog primera. Imate brendiranu Search kampanju koja mora da postoji, jer vam štiti brend od konkurencije. Na njoj je ručni CPC i klik vas košta dvadeset centi. Panel vam predlaže da pređete na ciljani ROAS. Pređete, i klik vas sada košta tri dolara. Sistem nije pogrešio račun. Sistem samo nije znao zašto ta kampanja postoji.
      </p>
      <p>
        To je cela mana automatizovanih preporuka u jednoj rečenici.
      </p>
      <p>
        <strong>Bid strategija posle tri dana.</strong> Vidi odeljak o <a href="#prag-konverzija" className="underline">pragu konverzija</a> iznad.
      </p>
      <p>
        <strong>Sve što se meri u nedeljama, a menja se na osnovu jednog dana.</strong>
      </p>

      <figure className="my-8">
        <Image src="/blog/checklist-ne-diraj.webp" alt="Ilustracija panela sa prekidačima i klizačima, katancem i znakom zabrane, pored zelene strelice rasta, tema Google Ads podešavanja koja se ne diraju" width={1200} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-sm text-gray-500 text-center mt-2">Preporuka iz panela ne zna zašto kampanja postoji.</figcaption>
      </figure>

      <hr />

      <h2 id="kvartalni-pregled">Kvartalno: ono što nema smisla gledati češće</h2>
      <p>
        Oglase i ekstenzije gledam na dužem periodu. Pomerili smo se odavno od starih formata pisanja oglasa; danas je responsive search ad mesto gde se sve to konsolidovalo, pa se i procena mora raditi na većem uzorku.
      </p>
      <p>
        Pitanje koje tu postavljam: da li u ad grupi vredi držati dva baš različita RSA oglasa, i šta radim sa tim testom kad ga završim.
      </p>
      <p>
        Eksperimente sam pre nekoliko godina pokretao mnogo češće. Danas ih pokrenem jednom, najviše tri puta u šest meseci. Ne zato što su prestali da vrede, nego zato što većina eksperimenata koje sam pokretao nije imala dovoljno podataka da bi rezultat nešto značio.
      </p>

      <hr />

      <h2 id="gde-novac-curi">Gde novac stvarno curi</h2>
      <p>
        Kad se nalog raspadne, retko je krivo ono što je na checklisti.
      </p>
      <p>
        Obrazac koji se ponavlja: konverzija se meri pogrešno, a bid strategija na osnovu tog merenja donosi odluke svakog sata. Duplo brojanje, dodavanje u korpu postavljeno kao primarna konverzija umesto kupovine, konverzija koja se broji svaki put umesto jednom. Sistem uredno optimizuje ka broju koji ne postoji, i to radi savršeno.
      </p>
      <p>
        Druga porodica grešaka je još prizemnija. Final URL koji vodi na pogrešan proizvod. Sitelink koji vodi na proizvod koji više ne prodajete. Ništa od toga se ne vidi u izveštaju o performansama - vidi se tek kad kliknete na sopstveni oglas.
      </p>
      <p>
        Kad jednom prođete kroz ovo, a svaki senior jeste, prestanete da tražite grešku po spisku i počnete da je tražite po obrascu.
      </p>

      <hr />

      <h2 id="vlasnik-30-minuta">Vlasnik firme sa trideset minuta nedeljno</h2>
      <p>
        Ovde ću biti neprijatno iskren, jer je alternativa da vam prodam nešto što ne radi.
      </p>
      <p>
        Vlasnik koji sam vodi nalog i ima trideset minuta nedeljno ne može da uradi baš ništa ozbiljno. To nije pitanje discipline nego količine posla koji nalog traži.
      </p>
      <p>
        Jedini izuzetak: ako trošite veoma malo i imate do stotinak klikova nedeljno. Tada u tih trideset minuta možete da proverite četiri stvari:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><span className="text-gray-700">Kakav je kvalitet klikova koje dobijate (search terms, ništa drugo).</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><span className="text-gray-700">Kakav vam je CTR.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><span className="text-gray-700">Ko vam je u konkurenciji na tim upitima.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><span className="text-gray-700">Da li za svoj klik plaćate previše ili premalo.</span></div>
          </div>
        </div>
      </div>

      <p>
        Sve preko toga traži ili više vremena ili nekoga ko to radi umesto vas. Verujem da će se to promeniti - alati koji ozbiljnu analizu rade brzo već postoje i postaju dostupniji. Ali danas, za nalog koji troši ozbiljne pare, rešenja u trideset minuta nedeljno nema.
      </p>

      <hr />

      <h2 id="cesto-postavljana-pitanja">Često postavljana pitanja</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Postoji li Google Ads checklista koja važi za svaki nalog?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Ne. Postoji ritam koji važi za svaki nalog, a sadržaj tog ritma se izvodi iz broja konverzija i načina na koji nalog prodaje.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko često treba proveravati Google Ads nalog?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Dnevno se proverava da li nalog uopšte radi i da li potrošnja odstupa od proseka. Sve ostalo ide na nedeljni, mesečni ili kvartalni ritam, u zavisnosti od broja konverzija.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kada je bezbedno menjati bid strategiju?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Kad imate dovoljno konverzija da promena može da se izmeri. Ispod pedeset konverzija mesečno svaka promena je nagađanje. Nov nalog ostavite oko devedeset dana pre ozbiljnih zaključaka.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Treba li primenjivati preporuke iz Google Ads panela?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Ja ih ne primenjujem. One ne poznaju kontekst vašeg naloga i najčešće predlažu potez koji je tačan u proseku a pogrešan kod vas.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko vremena nedeljno traži jedan nalog?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Ne dajem cifru jer bi bila izmišljena. Zavisi od veličine naloga, broja kampanja i toga koliko je merenje pouzdano. Nekad je nedeljni ritam previše, nekad jedva dovoljno.
          </div>
        </details>
      </div>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Treba vam ritam za sopstveni nalog, ne tuđa checklista?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">Prolazim kroz nalog, gledam koliko konverzija pravi mesečno i gradim raspored provera koji odgovara toj fazi - ne generičku listu sa interneta. Zakažite besplatnu konsultaciju.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Zakažite besplatnu konsultaciju</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads audit checklista</p>
          <p className="text-xs text-gray-500 mb-0">Dubinska provera naloga, korak po korak.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimizacija" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Optimizacija Google Ads naloga</p>
          <p className="text-xs text-gray-500 mb-0">Nedeljni i mesečni raspored optimizacija po fazama naloga.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negativne ključne reči vodič</p>
          <p className="text-xs text-gray-500 mb-0">Sistem za sečenje otpadnog saobraćaja, ne jednokratna lista.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Smart Bidding vodič</p>
          <p className="text-xs text-gray-500 mb-0">Target CPA, Target ROAS i Maximize Conversions - kad koristiti šta.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "pmax-audit-checklist" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max audit checklista</p>
          <p className="text-xs text-gray-500 mb-0">38 tačaka provere, ili interaktivno kroz PMax Check.</p>
        </Link>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Checklista je manje bitna od ritma. Broj konverzija mesečno određuje šta sme da se menja i koliko često, a search terms izveštaj i dalje govori više o nalogu od bilo kog panela.</p>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Septembar 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
