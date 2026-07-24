import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function PerformanceMaxVsStandardShoppingSR() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Kratak sud</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Performance Max nije naslednik Standard Shopping-a - to je drugi alat sa drugim poslom. PMax voziš tamo gde imaš volumen i čist tracking, Standard Shopping držiš tamo gde ti treba kontrola i providnost, a od oktobra 2024. možeš da voziš oba a da jedan ne davi drugog. Vreme kada je važilo &quot;PMax uvek pobeđuje, ne gubi vreme na Standard&quot; je prošlo.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">okt 2024.</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">promena koja je srušila stari savet</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">režima koja rade različit posao</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">50+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">konverzija/mes pre nego PMax postane primarni</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">6-cifren</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Shopping prihod (u funtama) kroz 2+ godine na jednom UK nalogu</p>
          </div>
        </div>
      </div>

      <p>
        Skoro svaki savet koji ćeš pročitati o ovoj temi pisan je za svet koji je prestao da postoji u oktobru 2024. Staro pravilo je bilo grubo: Performance Max nadjačava Standard Shopping, ne mogu da koegzistiraju, pa migriraj sve na PMax i predaj ključeve algoritmu. Pratio sam tu raspravu izbliza dok sam vodio Shopping za UK klijente, i dosta tog &quot;PMax uvek pobeđuje&quot; saveta koji još kruži je jednostavno zastarelo.
      </p>
      <p>
        Ja vozim oba tipa kampanje za istog klijenta. Na jednom UK nalogu (skincare brend) Shopping je doneo šestocifren prihod (u funtama) uz <GlossaryLink slug="poas">POAS</GlossaryLink> od 1,78x u kategoriji sa tankim maržama, kroz više od dve godine vođenja Shopping kampanja na tom nalogu - pri čemu PMax nosi skalirani katalog, a Standard Shopping drži delove gde mi treba ruka na volanu. Ovo nije tekst tipa &quot;evo šta piše u Google dokumentaciji&quot;. Ovo je ono što stvarno radim na živim nalozima, uključujući i mesta gde mi je PMax spržio budžet koji sam morao da vratim.
      </p>
      <p>
        Ako se tek dvoumiš između Shopping-a i Search-a uopšte, prvo pogledaj{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vs-search-kampanje" } }} className="underline text-blue-700 font-medium">
          vodič Shopping vs Search kampanje
        </Link>. Ovde pretpostavljam da si se opredelio za Shopping i da je jedino otvoreno pitanje: Standard Shopping, Performance Max ili oba.
      </p>

      {/* TOC nav */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ul className="list-none pl-0 mb-0 space-y-0">
          <li><a href="#kratak-sud" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kratak sud</a></li>
          <li><a href="#sta-je-sta" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta je zapravo šta (30 sekundi)</a></li>
          <li><a href="#oktobar-2024" className="block py-1 text-base text-gray-700 hover:text-primary underline">Realnost 2026: promena iz oktobra 2024.</a></li>
          <li><a href="#pmax-pobedjuje" className="block py-1 text-base text-gray-700 hover:text-primary underline">Gde PMax pobeđuje - i gde te sprži</a></li>
          <li><a href="#standard-pobedjuje" className="block py-1 text-base text-gray-700 hover:text-primary underline">Gde Standard Shopping i dalje pobeđuje</a></li>
          <li><a href="#hibrid" className="block py-1 text-base text-gray-700 hover:text-primary underline">Hibrid koji stvarno radi</a></li>
          <li><a href="#kako-testirati" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kako to testirati kako treba</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Najčešća pitanja</a></li>
        </ul>
      </nav>

      <hr />

      {/* ── Featured snippet block ── */}
      <h2 id="kratak-sud">Kratak sud</h2>
      <p>
        Ako hoćeš odgovor bez obrazloženja, evo ga. Nijedan tip nije univerzalno &quot;bolji&quot; u 2026 - biraš prema volumenu, katalogu, kvalitetu trackinga i koliko ti kontrole treba.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Tvoja situacija</th>
              <th className="py-3 px-3 font-heading font-semibold">Šta voziš</th>
              <th className="py-3 px-3 font-heading font-semibold">Zašto</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Mali katalog, tanke marže ili novo lansiranje</td>
              <td className="py-3 px-3">Standard Shopping</td>
              <td className="py-3 px-3">Dobijaš uvid u search termove, tvrd CPC plafon i reporting koji ništa ne krije. Ispod ~50 SKU-ova ili ispod 30 konverzija/mes, PMax nema sa čim da radi.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">50+ konverzija/mes, čist tracking, prava kreativa</td>
              <td className="py-3 px-3">Performance Max</td>
              <td className="py-3 px-3">Domet preko celog Google ekosistema, automatika koja otkriva upite na koje sam ne bi licitirao, i placementi vođeni assetima koje Standard ne dohvata.</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Etabliran nalog koji skalira i ima prostora za segmentaciju</td>
              <td className="py-3 px-3">Oba, namerno podeljena</td>
              <td className="py-3 px-3">PMax kao radni konj, Standard Shopping ograđuje nove proizvode i high-intent termove. U Optmyzr studiji na 24.702 PMax kampanje, 82% oglašivača je već vozilo PMax uz Shopping ili Search umesto samo PMax.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="sta-je-sta">Šta je zapravo šta (30 sekundi)</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Standard Shopping</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Jedan kanal, puna providnost</h3>
          <p className="text-base text-gray-600 mb-0">
            Standard Shopping prikazuje product listinge na stranici rezultata pretrage i na Shopping tabu, vođen tvojim <GlossaryLink slug="merchant-center">Merchant Center</GlossaryLink> feed-om. Vidiš tačne search termove, možeš da dodaješ negative i možeš da ograničiš <GlossaryLink slug="cpc">CPC</GlossaryLink>. Radi jednu stvar, i tačno ti kaže šta je uradio.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Performance Max</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Svi kanali, jedna automatizovana kampanja</h3>
          <p className="text-base text-gray-600 mb-0">
            <GlossaryLink slug="pmax">Performance Max</GlossaryLink> uzima tvoj feed plus kreativne assete (slike, video, tekst) i servira preko Search-a, Shopping-a, YouTube-a, Display-a, Gmail-a i Discover-a iz jedne kampanje. Google <GlossaryLink slug="smart-bidding">Smart Bidding</GlossaryLink> odlučuje gde, kada i koliko da licitira. Odričeš se granularne kontrole u zamenu za domet i automatiku.
          </p>
        </div>
      </div>

      <p>
        Ta razmena - kontrola naspram dometa - je cela odluka. Standard Shopping ti daje poluge u ruke. PMax ih uzima i, zauzvrat, igra na tabli koju ručno ne možeš da dohvatiš. Sve dole je o tome kada se koja razmena isplati.
      </p>

      <hr />

      <h2 id="oktobar-2024">Realnost 2026: promena iz oktobra 2024. koja je srušila stari savet</h2>
      <p>
        Evo dela koji većina tekstova promaši, jer su pisani pre nego što se desio. Ranije je bilo tvrdo pravilo: kada Performance Max kampanja i Standard Shopping kampanja u istom nalogu mogu obe da se prikažu za isti upit, PMax je pobeđivao automatski. To jedno pravilo je razlog zašto je stari savet glasio &quot;samo migriraj sve na PMax - Standard ionako ne može da konkuriše&quot;.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Šta se promenilo</p>
        <p className="text-yellow-800 text-base mb-0">
          Od oktobra 2024. Google odlučuje preklapajuću aukciju po <GlossaryLink slug="ad-rank">Ad Rank</GlossaryLink>-u - a ne po tipu kampanje. Ni PMax ni Standard Shopping nemaju automatski prioritet. Prikazuje se ona kampanja koja u toj konkretnoj aukciji ima viši Ad Rank. Zvuči kao sitna tehnička fusnota. Nije. Tiho je ubila glavni argument za prelazak isključivo na PMax.
        </p>
      </div>

      <p>
        Praktična posledica: dobro izgrađena Standard Shopping kampanja više ne gubi od PMax-a po difoltu. Ako tvoja Standard Shopping licitacija i relevantnost pobede aukciju, ona se prikazuje. Upravo to čini hibrid izvodljivim u 2026 - možeš da držiš Standard Shopping na proizvodima i termovima gde želiš kontrolu, i on će stvarno konkurisati umesto da bude tiho nadjačan. Svaki savet koji ti kaže da PMax strukturno kanibalizuje Standard Shopping opisuje svet pre oktobra 2024.
      </p>

      <hr />

      <h2 id="pmax-pobedjuje">Gde PMax pobeđuje - i gde te sprži</h2>
      <p>
        Biću pošten oko obe strane, jer je većina tekstova o PMax-u ili navijanje ili hajka. To je istinski moćan tip kampanje sa nekoliko realnih, dobro dokumentovanih načina da zakaže.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">Gde pobeđuje</h3>
      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Domet preko celog Google ekosistema</p>
          <p className="text-base text-gray-600 mb-0">
            Jedna kampanja stavlja tvoje proizvode pred kupce na Search-u, Shopping tabu, YouTube-u, Display-u, Gmail-u i Discover-u. Standard Shopping ne dohvata YouTube ni Discover. Za prodavnicu sa jakom vizuelnom ili video kreativom, ta dodatna površina je stvaran inkrementalni prihod, a ne samo impresije.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Automatika koja nalazi tražnju na koju sam ne bi licitirao</p>
          <p className="text-base text-gray-600 mb-0">
            Sa dovoljno konverzijskih podataka, PMax otkriva upite, publike i kombinacije proizvoda na koje čovek ne bi pomislio da ih cilja. Na nalozima sa volumenom, ovo dosledno izvuče džepove profitabilne tražnje koje ručno ne bih izgradio. To je nagrada za odricanje od kontrole.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Skalira veliki katalog bez ručnog vođenja</p>
          <p className="text-base text-gray-600 mb-0">
            Sa stotinama ili hiljadama SKU-ova, ne možeš ručno da pratiš svaki proizvod. PMax čita feed i raspoređuje potrošnju ka onome što se prodaje. Što je katalog veći i zdraviji, to ti ovo više ide u korist.
          </p>
        </div>
      </div>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">Gde te sprži</h3>
      <div className="space-y-4 my-6">
        <div className="bg-red-50 border border-red-100 rounded-xl p-5">
          <p className="font-heading font-bold text-red-900 mb-1">Kanibalizacija brenda - porez na sopstveno ime</p>
          <p className="text-base text-red-800/90 mb-0">
            Ovo je ono što ljude iznenadi. Bez brand exclusions, PMax rado troši na ljude koji traže tvoj brend - konverzije koje bi se ionako desile, skoro besplatno, kroz jeftin brend Search. PMax ih pokupi i prijavi kao svoje pobede, pa ti headline ROAS izgleda sjajno dok ti inkrementalni ROAS tiho trune. Ako iz ove sekcije poneseš jednu stvar: primeni brand exclusions (preko Google predstavnika ili podešavanja na nivou naloga) pre nego što skaliraš PMax.
          </p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5">
          <p className="font-heading font-bold text-red-900 mb-1">CPC ume da skoči jako pri migraciji</p>
          <p className="text-base text-red-800/90 mb-0">
            Kada su nalozi prelazili sa Smart Shopping-a na PMax, dosta oglašivača je videlo da CPC raste - u pojedinim slučajevima skoro udvostručen - za isti saobraćaj. PMax licitira preko više površina i manje providno, pa ne vidiš uvek gde odlazi taj dodatni trošak. Prati CPC trend prvih nekoliko nedelja posle lansiranja, ne samo ROAS.
          </p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5">
          <p className="font-heading font-bold text-red-900 mb-1">Nasumični skokovi troška bez očiglednog razloga</p>
          <p className="text-base text-red-800/90 mb-0">
            PMax će povremeno da odlepi - dan sa udvostručenom potrošnjom i tankim povratom, pa nazad na normalu, bez ijedne izmene sa tvoje strane. Pošto je reporting plitak, dijagnostika je teška. Na manjim budžetima ta volatilnost boli, što je još jedan razlog zašto nalozi sa malim volumenom ne treba da se oslanjaju samo na PMax.
          </p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5">
          <p className="font-heading font-bold text-red-900 mb-1">Reporting koji krije šta radi</p>
          <p className="text-base text-red-800/90 mb-0">
            Ne vidiš pune search termove, ne možeš čisto da razdvojiš Shopping od Display-a od YouTube učinka, a podaci na nivou asseta su ograničeni. Google je kroz 2026. dodao malo više PMax providnosti, ali je i dalje dosta ispod onoga što ti Standard Shopping pokazuje. Ako moraš tačno da znaš šta je nosilo rezultat, PMax će te iznervirati.
          </p>
        </div>
      </div>

      <hr />

      <h2 id="standard-pobedjuje">Gde Standard Shopping i dalje pobeđuje</h2>
      <p>
        Ništa od gornjih PMax bolova ne znači da napuštaš Standard Shopping. U 2026. to nije zastareli format koji trpiš - to je pravi alat za konkretne, česte situacije.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Kontrola i tvrd CPC plafon</p>
          <p className="text-base text-gray-600 mb-0">
            Ručno ili ograničeno licitiranje ti daje plafon koji ti PMax ne daje. Za kategorije osetljive na maržu, gde par para viška na CPC-u pretvara pobednika u gubitak, taj plafon je razlika između profita i iskrvarenja. Upravo tu sam vozio Standard da zaštitim POAS od 1,78x. Jedna važna ograda: taj plafon postoji samo dok je Standard na ručnom ili ograničenom CPC-u. Čim mu staviš target ROAS, licitiranje si predao Smart Bidding-u i plafon si zamenio za nešto drugo - o tome detaljno u koraku 4 hibrida ispod, gde razdvajam ta dva režima.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Providnost nezavisna od asseta</p>
          <p className="text-base text-gray-600 mb-0">
            Vidiš pune search termove, dodaješ negative i čitaš učinak čisto po proizvodu - bez kreativne crne kutije između. Kada stvarno treba da razumeš šta se dešava u nalogu, Standard Shopping ti daje podatke koje PMax neće.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Mali katalog (ispod ~50 SKU-ova)</p>
          <p className="text-base text-gray-600 mb-0">
            Sa malo proizvoda, PMax automatika nema šta da optimizuje - nema dovoljno raznovrsnosti ni signala. Standard Shopping radi sasvim dobro na mršavom katalogu gde bi PMax samo praznio hod.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Nova lansiranja i mali volumen (ispod 50 konverzija/mes)</p>
          <p className="text-base text-gray-600 mb-0">
            Skala koje se držim, i koje se držim do kraja ovog teksta: <strong>ispod 30 konverzija/mes ne uvodi PMax uopšte</strong> - bidding mu gladuje za podacima i ponaša se nepredvidivo. <strong>30-50 je sivo polje</strong>: možeš da testiraš PMax, ali sa opreznim očekivanjima i sa okom na potrošnji. <strong>Preko 50</strong>, PMax zaslužuje primarno mesto. To je praktičarsko pravilo iz vođenja ovakvih naloga, a ne Google-ov objavljen minimum - Google ne objavljuje prag konverzija za PMax. Za pravi hladan start, lansiraj Standard Shopping na ručnom CPC-u (ili Maximize Clicks sa max CPC limitom) da zadržiš tvrd poklopac na ceni klika dok se skupljaju konverzije, pa tek onda pređi na value-based bidding kada ima dovoljno signala da ga hrani.
          </p>
        </div>
      </div>

      <hr />

      <h2 id="hibrid">Hibrid koji stvarno radi</h2>
      <p>
        Ovako zapravo strukturiram UK eCommerce nalog koji skalira - ne jedan tip kampanje krunisan za pobednika, nego namerna podela rada koju je promena Ad Rank-a iz oktobra 2024. konačno učinila čistom za vožnju.
      </p>
      <p>
        Da budem precizan oko dokaza, jer se tu većina tekstova zaleti. Optmyzr studija na 24.702 PMax kampanje pokazala je da 82% oglašivača već vozi PMax uz Shopping ili Search umesto samo PMax. To je opservacija o tome šta oglašivači rade, a ne dokaz da sama podela proizvodi bolji rezultat, i neću je predstavljati kao dokaz. Ono iza čega stojim je logika podele posla i činjenica da tako vozim živ UK nalog: PMax skalira katalog i nalazi tražnju na koju ručno ne bi licitirao, a Standard Shopping drži teren gde je kontrola ono što ti čuva maržu. Hibrid nije kompromis između dva tipa kampanje; to su dva alata koja rade dva različita posla.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>PMax kao primarni - gde imaš volumen i čist tracking</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Usmeri PMax na skalirani katalog čim pređeš 50 konverzija/mes i tracking ti je pouzdan. To je radni konj koji radi domet preko celog ekosistema i otkrivanje tražnje.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Standard Shopping tamo gde ti treba kontrola</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Lansiranja novih proizvoda, linije sa visokom maržom kojima hoćeš CPC plafon, i sve gde ti treba uvid u search termove. Od oktobra 2024. konkuriše na Ad Rank umesto da bude nadjačan, pa drži svoj teren.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Dodaj brend termove kao negative / brand exclusions u PMax-u</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Zaustavi PMax da oporezuje tvoj brend. Gurni brendiranu tražnju u jeftinu zasebnu brend Search kampanju, a PMax drži fokusiran na inkrementalne, ne-brend konverzije. Taj jedan potez rešava najčešći način na koji PMax ulepšava sopstvene brojke.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Namerno izaberi režim licitiranja na Standard Shopping-u, pa onda upravljaj preklapanjem</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">
                Standard Shopping možeš da voziš u dva režima i ne možeš imati oba istovremeno, pa odluči koji ti cilj traži. <strong>(a) Ručni ili ograničeni CPC</strong> kada ti je prioritet tvrd plafon na ceni klika - proizvodi osetljivi na maržu, gde par para viška pretvara pobednika u gubitak. To je režim zbog kog uopšte i držiš Standard Shopping. <strong>(b) Target ROAS</strong> kada ti je prioritet da Standard jače hvata high-intent saobraćaj i spreman si da kontrolu nad CPC-om prepustiš Smart Bidding-u. Čim postaviš target ROAS, CPC plafona više nema. Biraj prema tome šta štitiš: cenu klika ili volumen. Ako ideš na target ROAS, postavi Standard-u niži target nego PMax-u da ne guraju iste aukcije. U oba slučaja prati impression share Standard Shopping-a nedeljno - ako ga PMax izgladnjuje, to ti je rani signal za rebalans.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p>
        Ako hoćeš dublji detalj o samoj izgradnji PMax strane - struktura asset grupa, search themes, exclusions - sve sam razložio u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }} className="underline text-blue-700 font-medium">
          Performance Max vodiču
        </Link>. A cela Shopping-vs-Search odluka koja stoji iznad ove je u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vs-search-kampanje" } }} className="underline text-blue-700 font-medium">
          poređenju Shopping vs Search
        </Link>.
      </p>
      <p>
        Jedna stvar pre nego što biraš stranu: oba tipa kampanje čitaju isti Merchant Center feed, pa slab feed ograničava i jedan i drugi. Ako titlovi, atributi i custom labels nisu sređeni, nijedna bidding strategija to ne spasava - taj temelj je u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "product-feed-srpski-ecommerce" } }} className="underline text-blue-700 font-medium">
          vodiču za product feed
        </Link>, a osnove strukture kampanja su u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="underline text-blue-700 font-medium">
          Google Shopping vodiču
        </Link>.
      </p>

      <hr />

      <h2 id="kako-testirati">Kako to testirati kako treba</h2>
      <p>
        Nemoj da uzmeš moj split - ili bilo čiji - zdravo za gotovo i sav budžet sručiš u njega. Pravi potez pre nego što se posvetiš je kontrolisani test, a Google ti daje alat za to: eksperiment kampanje koji deli saobraćaj 50/50.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 md:p-5 my-6">
        <p className="font-semibold text-blue-900 mb-1">50/50 eksperiment</p>
        <p className="text-blue-800 text-base mb-0">
          Pokreni Google eksperiment koji ravnomerno deli podobni saobraćaj između Standard Shopping kraka i PMax kraka u istom prozoru, isti proizvodi, isti budžetski uslovi. Daj mu dovoljno vremena da izađe iz learning perioda i dostigne statističku značajnost - obično par nedelja na nalogu sa pristojnim volumenom - pa uporedi ne samo ROAS nego inkrementalni ROAS, CPC trend i broj konverzija. Pusti da podaci izaberu pobednika za tvoj katalog umesto da se raspravljaš iz tuđe studije slučaja.
        </p>
      </div>

      <p>
        Jedna napomena: sudi PMax po inkrementalnom rezultatu, ne po headline ROAS-u. Ako tiho žanje brend konverzije, prijavljeni ROAS će mu izgledati bolje od stvarnog uticaja na biznis. Isključi brend, vozi eksperiment čisto, i veruj razlici.
      </p>

      <hr />

      <h2 id="faq">Najčešća pitanja</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Da li će Performance Max kanibalizovati moj brendirani saobraćaj?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hoće, ako ga ne zaustaviš. Bez brand exclusions, PMax troši na ljude koji već traže tvoj brend i prijavljuje te konverzije kao svoje - porez na sopstveno ime za prodaje koje bi se ionako desile kroz jeftin brend Search. Primeni brand exclusions (preko Google predstavnika ili podešavanja na nivou naloga) i preusmeri brendiranu tražnju u zasebnu brend Search kampanju, da PMax ostane fokusiran na inkrementalne, ne-brend konverzije."
                }
              },
              {
                "@type": "Question",
                name: "Zašto mi je CPC skočio nakon prelaska na PMax?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Uobičajeno je. Kada su nalozi migrirali sa Smart Shopping-a na PMax, mnogi su videli da CPC raste - u pojedinim slučajevima skoro udvostručen - za sličan saobraćaj. PMax licitira preko više površina (Search, Shopping, YouTube, Display, Discover) i prijavljuje manje providno, pa dodatni trošak nije uvek vidljiv. Prati CPC trend prvih nekoliko nedelja posle lansiranja, i razmisli da proizvode sa visokom maržom ili osetljive na CPC držiš u Standard Shopping-u gde možeš da ograničiš licitaciju."
                }
              },
              {
                "@type": "Question",
                name: "Mogu li da vozim Standard Shopping i Performance Max u isto vreme?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Da, i u 2026. je to često jači setup. Od oktobra 2024. Google odlučuje preklapajuću aukciju po Ad Rank-u umesto da daje PMax-u automatski prioritet, pa dobro izgrađena Standard Shopping kampanja stvarno konkuriše umesto da bude nadjačana. Optmyzr studija na 24.702 kampanje pokazala je da 82% oglašivača već vozi PMax uz Shopping ili Search umesto samo PMax - to je snimak uobičajene prakse, a ne dokaz da sama podela proizvodi bolji rezultat. Pravi razlog da voziš oba je podela posla: PMax skalira katalog i nalazi tražnju na koju ručno ne bi licitirao, a Standard Shopping čuva kontrolu i uvid u search termove tamo gde ti trebaju."
                }
              },
              {
                "@type": "Question",
                name: "Koliko konverzija mi treba za Performance Max?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Drži se jedne skale: ispod 30 konverzija mesečno ne uvodi PMax uopšte, jer mu bidding gladuje za signalom i ponaša se nepredvidivo. Između 30 i 50 je sivo polje gde možeš da testiraš, ali sa opreznim očekivanjima i sa okom na potrošnji. Preko 50 konverzija mesečno, PMax zaslužuje primarno mesto. To je praktičarsko pravilo iz vođenja ovakvih naloga, a ne Google-ov objavljen minimum - Google ne objavljuje prag konverzija za PMax. Ispod praga, lansiraj Standard Shopping na ručnom CPC-u (ili Maximize Clicks sa max CPC limitom) da zadržiš tvrd poklopac na ceni klika dok se skupljaju konverzije, pa tek onda pređi na value-based bidding kada ima dovoljno signala."
                }
              },
              {
                "@type": "Question",
                name: "Zašto je Performance Max reporting toliko ograničen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Po dizajnu. PMax krije pune search termove, ne razdvaja čisto Shopping od Display-a ili YouTube-a, i daje ograničene podatke na nivou asseta. Google je kroz 2026. dodao malo više providnosti, ali je i dalje dosta ispod Standard Shopping-a. Ako moraš tačno da znaš šta je nosilo rezultat, drži te proizvode u Standard Shopping-u, gde imaš pun uvid u search termove i možeš da dodaješ negative."
                }
              },
              {
                "@type": "Question",
                name: "Standard Shopping ili Performance Max za mali katalog?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standard Shopping. Ispod oko 50 SKU-ova, PMax automatika nema dovoljno raznovrsnosti proizvoda ni signala da optimizuje, pa najčešće prazni hod bez poboljšanja. Standard Shopping radi dobro na mršavom katalogu, daje ti CPC plafon i uvid u search termove, i bolja je polazna tačka dok ti katalog i volumen konverzija ne narastu dovoljno da opravdaju PMax."
                }
              }
            ]
          })
        }}
      />

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li će Performance Max kanibalizovati moj brendirani saobraćaj?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Hoće, ako ga ne zaustaviš. Bez brand exclusions, PMax troši na ljude koji već traže tvoj brend i prijavljuje te konverzije kao svoje - porez na sopstveno ime za prodaje koje bi se ionako desile. Primeni brand exclusions i preusmeri brendiranu tražnju u zasebnu brend Search kampanju, da PMax ostane fokusiran na inkrementalne, ne-brend konverzije.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto mi je CPC skočio nakon prelaska na PMax?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Uobičajeno je. Pri migraciji sa Smart Shopping-a na PMax, mnogi oglašivači su videli da CPC raste - u pojedinim slučajevima skoro udvostručen - za sličan saobraćaj. PMax licitira preko više površina i prijavljuje manje providno, pa dodatni trošak nije uvek vidljiv. Prati CPC trend prvih nekoliko nedelja, i drži proizvode osetljive na CPC u Standard Shopping-u gde možeš da ograničiš licitaciju.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Mogu li da vozim Standard Shopping i Performance Max u isto vreme?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Da, i u 2026. je to često jači setup. Od oktobra 2024. preklapajuća aukcija se odlučuje po Ad Rank-u umesto da daje PMax-u automatski prioritet, pa dobro izgrađena Standard Shopping kampanja stvarno konkuriše. Optmyzr studija na 24.702 kampanje pokazala je da 82% oglašivača već vozi PMax uz Shopping ili Search umesto samo PMax - to je snimak uobičajene prakse, a ne dokaz da sama podela proizvodi bolji rezultat. Pravi razlog da voziš oba je podela posla: PMax skalira katalog i nalazi tražnju na koju ručno ne bi licitirao, a Standard Shopping čuva kontrolu i uvid u search termove tamo gde ti trebaju.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko konverzija mi treba za Performance Max?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Drži se jedne skale: ispod 30 konverzija mesečno ne uvodi PMax uopšte, jer mu bidding gladuje za signalom i ponaša se nepredvidivo. Između 30 i 50 je sivo polje gde možeš da testiraš, ali sa opreznim očekivanjima i sa okom na potrošnji. Preko 50 konverzija mesečno, PMax zaslužuje primarno mesto. To je praktičarsko pravilo iz vođenja ovakvih naloga, a ne Google-ov objavljen minimum - Google ne objavljuje prag konverzija za PMax. Ispod praga, lansiraj Standard Shopping na ručnom CPC-u (ili Maximize Clicks sa max CPC limitom) da zadržiš tvrd poklopac na ceni klika dok se skupljaju konverzije, pa tek onda pređi na value-based bidding kada ima dovoljno signala.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto je Performance Max reporting toliko ograničen?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Po dizajnu. PMax krije pune search termove, ne razdvaja čisto Shopping od Display-a ili YouTube-a, i daje ograničene podatke na nivou asseta. Google je kroz 2026. dodao malo više providnosti, ali je i dalje dosta ispod Standard Shopping-a. Ako moraš tačno da znaš šta je nosilo rezultat, drži te proizvode u Standard Shopping-u.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Standard Shopping ili Performance Max za mali katalog?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Standard Shopping. Ispod oko 50 SKU-ova, PMax automatika nema dovoljno raznovrsnosti proizvoda ni signala da optimizuje. Standard Shopping radi dobro na mršavom katalogu, daje ti CPC plafon i uvid u search termove, i bolja je polazna tačka dok ti katalog i volumen konverzija ne narastu dovoljno da opravdaju PMax.
          </div>
        </details>
      </div>

      <hr />

      {/* CTA block */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Niste sigurni da li vam za nalog odgovara PMax ili Standard Shopping?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          Pogledam vaš katalog, marže, volumen konverzija i tracking, pa vam kažem tačno šta da vozite - i gde bi hibrid{" "}
          <Link href="/usluge/google-shopping" className="underline text-white hover:text-yellow-400">Google Shopping</Link> i{" "}
          <Link href="/usluge/google-ads-za-ecommerce" className="underline text-white hover:text-yellow-400">eCommerce Google Ads</Link> pobedio bilo koji od njih sam.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vs-search-kampanje" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping vs Search</p>
          <p className="text-xs text-gray-500 mb-0">Odluka koja stoji iznad ove - kada koju biraš</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max Vodič</p>
          <p className="text-xs text-gray-500 mb-0">Struktura asset grupa, search themes, exclusions</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Vodič - Osnove</p>
          <p className="text-xs text-gray-500 mb-0">Feed optimizacija, struktura kampanja, ROAS</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "product-feed-srpski-ecommerce" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Product Feed Vodič</p>
          <p className="text-xs text-gray-500 mb-0">Obavezni atributi, title optimizacija, custom labels</p>
        </Link>
      </div>
    </>
  );
}
