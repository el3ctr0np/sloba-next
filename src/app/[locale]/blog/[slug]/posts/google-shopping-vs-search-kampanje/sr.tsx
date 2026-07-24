import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function GoogleShoppingVsSearchKampanjeSR() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Za eCommerce ovo skoro nikad nije pitanje &quot;ili Shopping ili Search&quot;. Shopping hvata kupca koji zna šta hoće i poredi proizvode; Search hvata upite koje Shopping ne vidi (istraživačke, brendirane, uslužne). Najjači nalozi u 2026. voze oba, uz jasan budžetski split. Ovaj vodič pokazuje kada koja kampanja pobeđuje i kako ih spojiti.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">~80%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">eComm ad budžeta ide na Shopping</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">~18%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">više konverzija kada se voze oba</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">30-50</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">konverzija/mes prag za PMax</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2+ god.</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">moje UK Shopping + Search iskustvo</p>
          </div>
        </div>
      </div>

      <p>
        Ovo pitanje mi klijenti postave gotovo na svakom prvom pozivu: &quot;Šta je bolje za moju prodavnicu - Google Shopping ili Search?&quot; Očekuju da izaberem jedno. Skoro nikad ne izaberem. U praksi to su dva različita alata za dva različita trenutka u glavi kupca, i najbolji rezultati u eCommerce-u dolaze kada rade zajedno, ne kada se takmiče za isti budžet.
      </p>
      <p>
        Vodim Google Shopping za UK klijente duže od dve godine. Sa jednim od njih (Chelleon UK, skincare) kroz Shopping sam generisao preko 290.000 funti prihoda, uz POAS od 1,78x u kategoriji gde su marže tanke. Za istog klijenta paralelno vozim i Search. To lično iskustvo sa hibridom je okosnica ovog teksta - ne teorija, nego ono što stvarno radi na živim nalozima.
      </p>
      <p>
        Ako tek ulazite u temu, vredi da prvo pročitate osnovni{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="underline text-blue-700 font-medium">
          vodič o Google Shopping kampanjama
        </Link>. Ovde pretpostavljam da znate šta je Shopping, pa idem direktno na odluku: kada koju kampanju biraš, i zašto obično biraš obe.
      </p>

      {/* TOC nav */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ul className="list-none pl-0 mb-0 space-y-0">
          <li><a href="#kratak-odgovor" className="block py-1 text-base text-gray-700 hover:text-primary underline">Shopping vs Search - kratak odgovor</a></li>
          <li><a href="#kako-se-razlikuju" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kako se Shopping i Search zapravo razlikuju</a></li>
          <li><a href="#kada-search-pobedjuje" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kada Search pobeđuje</a></li>
          <li><a href="#kada-shopping-pobedjuje" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kada Shopping pobeđuje</a></li>
          <li><a href="#zasto-oba" className="block py-1 text-base text-gray-700 hover:text-primary underline">Zašto nije &quot;ili-ili&quot; nego oba</a></li>
          <li><a href="#budzet-i-struktura" className="block py-1 text-base text-gray-700 hover:text-primary underline">Budžet split i struktura</a></li>
          <li><a href="#srbija-kontekst" className="block py-1 text-base text-gray-700 hover:text-primary underline">Srbija: šta radi danas, šta stiže u novembru</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Najčešća pitanja</a></li>
        </ul>
      </nav>

      <hr />

      {/* ── Featured snippet block ── */}
      <h2 id="kratak-odgovor">Shopping vs Search - kratak odgovor</h2>
      <p>
        Ako vam treba odgovor u jednom pogledu, evo ga. Nijedan tip nije univerzalno &quot;bolji&quot; - biraš prema tome šta prodaješ i koji deo namere kupca želiš da pokriješ.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Situacija</th>
              <th className="py-3 px-3 font-heading font-semibold">Šta biraš</th>
              <th className="py-3 px-3 font-heading font-semibold">Zašto</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Kada Search</td>
              <td className="py-3 px-3">Search kampanja</td>
              <td className="py-3 px-3">Brendirani upiti, usluge, istraživački i comparison upiti (&quot;najbolje X za Y&quot;), mali katalog, hitna namera. Kontrolišeš tačne ključne reči i poruku u oglasu.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Kada Shopping</td>
              <td className="py-3 px-3">Shopping kampanja</td>
              <td className="py-3 px-3">Vizuelni proizvodi, veliki katalog, cenovna konkurencija. Kupac vidi sliku, cenu i prodavnicu pre klika - viši kvalitet klika, obično niži CPC.</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Kada oba</td>
              <td className="py-3 px-3">Hibrid (Search + Shopping)</td>
              <td className="py-3 px-3">Skoro svaki ozbiljan eCommerce. Shopping pokriva &quot;znam šta hoću&quot;, Search pokriva istraživanje i brend. Google navodi u proseku oko 18% više konverzija kada se voze zajedno.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="kako-se-razlikuju">Kako se Shopping i Search zapravo razlikuju</h2>
      <p>
        Ključ cele odluke je da razumeš da ove dve kampanje ne rade istu stvar. Razlikuju se po tome ko odlučuje šta se prikazuje, po tome kako izgledaju kupcu, i po delu namere koji hvataju.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Search</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Ti biraš ključne reči</h3>
          <p className="text-base text-gray-600 mb-0">
            Kod <GlossaryLink slug="google-ads">Search</GlossaryLink> kampanja ti definišeš ključne reči i pišeš tekstualni oglas. Kontrola je kod tebe - biraš tačno na koje upite se prikazuješ, koju poruku šalješ i na koju stranicu vodiš. Prikazuje se kao tekstualni oglas na vrhu rezultata pretrage, bez slike proizvoda.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Shopping</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Feed bira umesto tebe</h3>
          <p className="text-base text-gray-600 mb-0">
            Kod <GlossaryLink slug="merchant-center">Shopping</GlossaryLink> kampanja ne biraš ključne reči. Google čita tvoj product feed - naziv, sliku, cenu, atribute - i sam matchuje proizvode sa pretragama. Prikazuje se vizuelno: slika proizvoda, cena i naziv prodavnice, još pre klika.
          </p>
        </div>
      </div>

      <p>
        Ta razlika u kontroli menja sve. Kod Search-a optimizuješ ključne reči, negativne ključne reči i tekst oglasa. Kod Shopping-a optimizuješ feed - jer feed je tvoj &quot;keyword&quot;. Ako je naziv proizvoda u feed-u loš, nikakva bid strategija to ne popravlja.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Zašto Shopping obično ima niži CPC</p>
        <p className="text-blue-800 text-base mb-0">
          Kod Search-a licitiraš na ključnu reč gde se takmičiš sa svima koji je ciljaju - i oglašivačima i posrednicima. Kod Shopping-a se licitacija vezuje za konkretan proizvod i njegovu relevantnost, pa se takmičiš uže. U praksi to često znači niži <GlossaryLink slug="cpc">CPC</GlossaryLink> za isti kvalitet saobraćaja, plus slika i cena pre klika deluju kao filter koji odbija promašene klikove.
        </p>
      </div>

      <hr />

      <h2 id="kada-search-pobedjuje">Kada Search pobeđuje</h2>
      <p>
        Postoje upiti koje Shopping jednostavno ne može da uhvati, jer se oslanja na feed proizvoda, a ne na jezik kupca. Tu Search radi posao koji Shopping ne može.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Brendirani upiti</p>
          <p className="text-base text-gray-600 mb-0">
            Kada neko traži tvoje ime firme ili proizvoda, hoćeš da budeš prvi rezultat - i da zaštitiš brend od konkurencije koja licitira na tvoje ime. Brend Search kampanja to radi jeftino i sa visokom konverzijom. Shopping ovde ne pomaže na isti način.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Istraživački i comparison upiti</p>
          <p className="text-base text-gray-600 mb-0">
            &quot;Najbolje patike za trčanje po asfaltu&quot;, &quot;vodootporni ranac ispod 8000 dinara&quot;, &quot;X ili Y - šta je bolje&quot;. Ovo su upiti sa jasnom namerom, ali ih Shopping teško hvata jer nisu vezani za jedan konkretan proizvod iz feed-a. Search kampanja sa dobro odabranim ključnim rečima i landing stranicom koja odgovara na pitanje uzima taj saobraćaj.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Usluge i sve što nije fizički proizvod</p>
          <p className="text-base text-gray-600 mb-0">
            Shopping traži product feed. Ako prodaješ uslugu, pretplatu, digitalni proizvod ili bilo šta bez klasičnog kataloga, Search je jedini put. Feed nemaš, pa Shopping otpada.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Mali katalog i hitna namera</p>
          <p className="text-base text-gray-600 mb-0">
            Sa svega nekoliko proizvoda, Shopping algoritam nema dovoljno raznovrsnosti da radi punom snagom. Uz to, za hitne upite (&quot;kupi danas&quot;, &quot;dostupno odmah&quot;) Search ti daje kontrolu nad porukom - možeš u oglasu direktno da odgovoriš na tu hitnost.
          </p>
        </div>
      </div>

      <hr />

      <h2 id="kada-shopping-pobedjuje">Kada Shopping pobeđuje</h2>
      <p>
        Za većinu eCommerce prodavnica sa fizičkim proizvodima, Shopping nosi najveći deo posla - i zato u proseku uzima oko 80% eComm ad budžeta. Evo kada je jasan favorit.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Vizuelni proizvodi</p>
          <p className="text-base text-gray-600 mb-0">
            Kada izgled prodaje - odeća, obuća, nameštaj, dekor, gadgeti - slika u rezultatima radi ono što tekst ne može. Kupac vidi proizvod pre klika, prepozna da li mu se sviđa, i klikne sa jačom namerom. To diže i <GlossaryLink slug="ctr">CTR</GlossaryLink> i kvalitet saobraćaja.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Veliki katalog</p>
          <p className="text-base text-gray-600 mb-0">
            Sa stotinama ili hiljadama SKU-ova, ručno pisanje ključnih reči i oglasa za svaki proizvod je nemoguće. Shopping to rešava iz feed-a - jednom podesiš feed, a Google pokriva ceo katalog. Što je katalog veći, to je Shopping prednost veća.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Cenovna konkurencija</p>
          <p className="text-base text-gray-600 mb-0">
            Kada je cena tvoja prednost, Shopping je istakne direktno u rezultatu, uz konkurente. Kupac koji poredi cene vidi tvoju odmah - a to je tačno trenutak kada je najbliže kupovini. Ako si konkurentan po ceni, Shopping tu prednost pretvara u klikove.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Niži CPC za pravi saobraćaj</p>
          <p className="text-base text-gray-600 mb-0">
            Kao što sam gore objasnio - licitacija vezana za proizvod, plus slika i cena kao filter, obično znače niži CPC i manje potrošenog budžeta na promašene klikove. Za tanke marže (gde sam kod Chelleon-a radio POAS 1,78x) ta efikasnost je razlika između profita i gubitka.
          </p>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Standard Shopping ili Performance Max? Standard je bolji za katalog ispod ~50 SKU-ova, nova lansiranja (jer ti daje uvid u search termove) i kategorije osetljive na maržu. PMax dolazi do izražaja kada imaš 50+ konverzija mesečno sa čistim trackingom, veliki katalog i prave kreativne assete. Ispod 30-50 konverzija mesečno, drži se Maximize Conversion Value bez target ROAS-a dok algoritam ne skupi podatke.
        </p>
      </div>

      <hr />

      <h2 id="zasto-oba">Zašto nije &quot;ili-ili&quot; nego oba</h2>
      <p>
        Ovde se vraćam na početak. Pitanje &quot;Shopping ili Search&quot; pogrešno postavlja izbor. Kupac ne živi u jednom tipu kampanje - kreće se kroz namere. Danas istražuje (&quot;koje su najbolje bežične slušalice&quot;), sutra poredi konkretne modele (Shopping), prekosutra traži tvoj brend po imenu. Ako pokriješ samo jedan deo tog puta, ostatak prepuštaš konkurenciji.
      </p>
      <p>
        Podaci to potvrđuju. Google navodi da vođenje obe kampanje zajedno donosi u proseku oko 18% više konverzija uz sličan cost-per-action - dakle više prodaje bez toga da svaka pojedinačna postane skuplja. Optmyzr studija na 24.702 PMax kampanje pokazala je da 82% oglašivača već vozi PMax uz Shopping ili Search, a grupa koja je pametno delila budžet imala je najjači povrat.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važna promena od oktobra 2024.</p>
        <p className="text-yellow-800 text-base mb-0">
          Ranije je bilo pitanje &quot;koja moja kampanja dobija aukciju kada se preklapaju&quot;. Od oktobra 2024. Google odlučuje ko dobija preklapajuću aukciju po <GlossaryLink slug="ad-rank">Ad Rank</GlossaryLink>-u, a ne po tipu kampanje - nijedan tip nema automatski prioritet. To znači da Shopping i Search više ne &quot;jedu&quot; jedan drugom prostor po nekom fiksnom pravilu, pa je hibrid izvodljiviji nego ikad: pusti oba i najbolji oglas u datom trenutku pobeđuje.
        </p>
      </div>

      <p>
        Jednostavno rečeno: Shopping je tvoj radni konj za &quot;znam šta hoću, pokaži mi proizvod i cenu&quot;. Search je tu za sve što Shopping ne vidi - istraživanje, poređenje, brend, usluge. Zajedno pokrivaju ceo put kupca. To je razlog zašto ih na živim nalozima gotovo uvek vozim paralelno.
      </p>

      <hr />

      <h2 id="budzet-i-struktura">Budžet split i struktura</h2>
      <p>
        Nema magične formule koja važi za svaku prodavnicu, i ne verujte nikome ko vam izmisli tačan procenat pre nego što je video vaše podatke. Ali postoje principi po kojima delim budžet, i njih mogu da podelim.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Krени od proizvoda, ne od procenta</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Ako prodaješ fizičke, vizuelne proizvode sa pristojnim katalogom, težina prirodno ide ka Shopping-u - jer tamo je najveća namera kupovine. Uslužni deo, istraživački upiti i brend idu u Search. Split proizlazi iz toga šta prodaješ, ne iz nekog univerzalnog odnosa.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Uvek izdvoji zaseban brend Search budžet</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Brendirani saobraćaj je najjeftiniji i najbolje konvertuje. Drži ga u odvojenoj kampanji sa svojim budžetom, da ga generički Search ne pojede i da jasno vidiš koliko prodaje dolazi od ljudi koji te već traže.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Poštuj prag konverzija za automatiku</strong>
              <p className="text-base text-gray-600 mt-1 mb-0"><GlossaryLink slug="pmax">Performance Max</GlossaryLink> i <GlossaryLink slug="smart-bidding">Smart Bidding</GlossaryLink> najbolje rade sa 30-50 konverzija mesečno. Ispod toga, algoritam nema dovoljno signala - drži se jednostavnijih strategija (Maximize Conversion Value bez target ROAS-a) dok ne skupiš dovoljno podataka, pa tek onda pooštri ciljeve.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Ne deli budžet - deli namere</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Ne razmišljaj &quot;60% ovde, 40% tamo&quot; kao fiksno pravilo. Razmišljaj koje namere kupca pokrivaš i da li ijedna ostaje nepokrivena. Pusti oba tipa, prati koji donosi profitabilne konverzije, i pomeraj budžet ka onome što radi - a Ad Rank logika (od oktobra 2024.) ionako bira najbolji oglas u svakoj aukciji.</p>
            </div>
          </div>
        </div>
      </div>

      <p>
        Za dublju priču o tome kako da postaviš celu eCommerce strukturu na srpskom tržištu - kategorizaciju kampanja, negativne ključne reči, custom labels u feed-u - pogledaj{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-za-ecommerce-srbija-2026" } }} className="underline text-blue-700 font-medium">
          kompletan vodič za Google Ads eCommerce u Srbiji
        </Link>. A za samu pripremu feed-a, tu je{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "product-feed-srpski-ecommerce" } }} className="underline text-blue-700 font-medium">
          vodič za product feed
        </Link>. Ako se dvoumiš između Standard Shopping-a i PMax-a, detaljno sam to razložio u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }} className="underline text-blue-700 font-medium">
          Performance Max vodiču
        </Link>.
      </p>

      <hr />

      <h2 id="srbija-kontekst">Srbija: šta radi danas, šta stiže u novembru</h2>
      <p>
        Za srpsko tržište postoji jedna važna caka koja menja tvoju odluku upravo sada: Search kampanje rade danas, a Shopping tek stiže.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Danas</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Search je već tu i radi punom snagom</h3>
          <p className="text-base text-gray-600 mb-0">Ako imaš srpsku prodavnicu, Search kampanje možeš da voziš već danas - brend, istraživački upiti, kategorije, sve. Nema razloga da čekaš. Search je platforma na kojoj gradiš odmah.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Novembar 2026.</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Shopping tek stiže u Srbiju</h3>
          <p className="text-base text-gray-600 mb-0">Google Shopping se zvanično lansira u Srbiji u novembru 2026. Do tada Shopping kampanje jednostavno nisu dostupne za srpsko tržište. Ali priprema (Merchant Center nalog, product feed, atributi) može da počne već sada.</p>
        </div>
      </div>

      <p>
        Praktičan zaključak za srpski eCommerce: <strong>ne biraš između Shopping-a i Search-a - biraš redosled.</strong> Search pokrećeš danas i skupljaš podatke, prihod i istoriju naloga. Shopping pripremaš u pozadini da bi na dan lansiranja bio spreman umesto da tek tada kreneš od nule. Kada Shopping starta u novembru, prelaziš na hibrid koji sam opisao gore - i tada zaista voziš oba.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 md:p-5 my-6">
        <p className="font-semibold text-amber-900 mb-1">Ceo plan pripreme na jednom mestu</p>
        <p className="text-amber-800 text-base mb-0">
          Datum lansiranja, Ex-Yu tržišta, 15-korak checklist i Merchant Center setup detaljno su razrađeni u pillar vodiču{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }} className="underline text-amber-900 font-medium">
            Google Shopping Dolazi u Srbiju - Kompletan Vodič za Pripremu
          </Link>. Ako planiraš Shopping za srpsku prodavnicu, to je sledeće štivo.
        </p>
      </div>

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
                name: "Da li mi je za eCommerce bolji Google Shopping ili Search?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Za većinu eCommerce prodavnica sa fizičkim proizvodima Shopping nosi najveći deo prodaje i uzima oko 80% eComm ad budžeta, jer kupac vidi sliku i cenu pre klika. Ali Search hvata upite koje Shopping ne vidi - istraživačke i comparison upite, brendirane pretrage i usluge. Najbolji rezultat u 2026. daje hibrid: oba tipa vožena zajedno, sa jasnim budžetskim splitom."
                }
              },
              {
                "@type": "Question",
                name: "Zašto Shopping obično ima niži CPC od Search-a?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kod Search-a licitiraš na ključnu reč gde se takmičiš sa svima koji je ciljaju. Kod Shopping-a se licitacija vezuje za konkretan proizvod i njegovu relevantnost iz feed-a, pa je konkurencija uža. Uz to, slika i cena vidljive pre klika deluju kao filter koji odbija promašene klikove, pa u proseku dobijaš niži CPC za kvalitetniji saobraćaj."
                }
              },
              {
                "@type": "Question",
                name: "Mogu li da vozim i Shopping i Search u isto vreme?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Da, i to je preporučena praksa za 2026. Google navodi da vođenje obe kampanje zajedno donosi u proseku oko 18% više konverzija uz sličan cost-per-action. Od oktobra 2024. Google odlučuje ko dobija preklapajuću aukciju po Ad Rank-u, a ne po tipu kampanje, pa se dva tipa ne takmiče po fiksnom pravilu - najbolji oglas u datom trenutku pobeđuje."
                }
              },
              {
                "@type": "Question",
                name: "Kada da izaberem Standard Shopping, a kada Performance Max?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standard Shopping je bolji za manje kataloge (ispod oko 50 SKU-ova), nova lansiranja gde ti treba uvid u search termove, i kategorije osetljive na maržu. Performance Max dolazi do izražaja kada imaš 50 i više konverzija mesečno sa čistim trackingom, veliki katalog i prave kreativne assete. Ispod 30-50 konverzija mesečno drži se jednostavnijih bid strategija dok algoritam ne skupi dovoljno podataka."
                }
              },
              {
                "@type": "Question",
                name: "Koliko budžeta da dam na Shopping, a koliko na Search?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nema univerzalnog procenta - split zavisi od toga šta prodaješ. Za vizuelne fizičke proizvode težina prirodno ide ka Shopping-u; istraživački upiti, usluge i brend idu u Search. Uvek izdvoji zaseban budžet za brend Search jer je najjeftiniji i najbolje konvertuje. Pusti oba tipa, prati koji donosi profitabilne konverzije i pomeraj budžet ka onome što radi."
                }
              },
              {
                "@type": "Question",
                name: "Radi li Google Shopping u Srbiji?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Google Shopping se zvanično lansira u Srbiji u novembru 2026. Do tada Shopping kampanje nisu dostupne za srpsko tržište, ali Search kampanje rade već danas. Praktičan plan za srpski eCommerce: pokreni Search odmah i skupljaj podatke, a paralelno pripremaj Merchant Center i product feed da bi na dan lansiranja Shopping-a prešao na hibrid bez čekanja."
                }
              }
            ]
          })
        }}
      />

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li mi je za eCommerce bolji Google Shopping ili Search?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Za većinu prodavnica sa fizičkim proizvodima Shopping nosi najveći deo prodaje i uzima oko 80% eComm ad budžeta, jer kupac vidi sliku i cenu pre klika. Ali Search hvata upite koje Shopping ne vidi - istraživačke i comparison upite, brendirane pretrage i usluge. Najbolji rezultat u 2026. daje hibrid: oba tipa vožena zajedno.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto Shopping obično ima niži CPC od Search-a?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Kod Search-a licitiraš na ključnu reč gde se takmičiš sa svima koji je ciljaju. Kod Shopping-a se licitacija vezuje za konkretan proizvod iz feed-a, pa je konkurencija uža. Slika i cena vidljive pre klika deluju kao filter koji odbija promašene klikove, pa u proseku dobijaš niži CPC za kvalitetniji saobraćaj.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Mogu li da vozim i Shopping i Search u isto vreme?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Da, i to je preporučena praksa za 2026. Google navodi u proseku oko 18% više konverzija kada se voze zajedno, uz sličan cost-per-action. Od oktobra 2024. preklapajuću aukciju dobija najbolji oglas po Ad Rank-u, a ne neki tip po fiksnom pravilu - pa se dva tipa ne takmiče na štetu jedan drugog.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kada da izaberem Standard Shopping, a kada Performance Max?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Standard Shopping je bolji za manje kataloge (ispod oko 50 SKU-ova), nova lansiranja gde ti treba uvid u search termove, i kategorije osetljive na maržu. Performance Max se isplati sa 50+ konverzija mesečno, čistim trackingom, velikim katalogom i pravim kreativnim assetima. Ispod 30-50 konverzija drži se jednostavnijih bid strategija.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko budžeta da dam na Shopping, a koliko na Search?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Nema univerzalnog procenta - split zavisi od toga šta prodaješ. Za vizuelne fizičke proizvode težina ide ka Shopping-u; istraživanje, usluge i brend idu u Search. Uvek izdvoji zaseban budžet za brend Search. Pusti oba tipa, prati koji donosi profitabilne konverzije i pomeraj budžet ka onome što radi.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Radi li Google Shopping u Srbiji?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Google Shopping se zvanično lansira u Srbiji u novembru 2026. Do tada Shopping nije dostupan za srpsko tržište, ali Search radi već danas. Plan: pokreni Search odmah, a paralelno pripremaj Merchant Center i product feed da bi na dan lansiranja prešao na hibrid bez čekanja.
          </div>
        </details>
      </div>

      <hr />

      {/* CTA block */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Niste sigurni koji miks Shopping i Search kampanja vam treba?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          Prođem kroz vaš katalog, marže i ciljeve i dam konkretan plan - šta pokrenuti danas kroz{" "}
          <Link href="/usluge/search-kampanje" className="underline text-white hover:text-yellow-400">Search kampanje</Link>, a šta pripremiti za{" "}
          <Link href="/usluge/google-shopping" className="underline text-white hover:text-yellow-400">Google Shopping</Link> pre lansiranja u Srbiji.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Vodič - Osnove</p>
          <p className="text-xs text-gray-500 mb-0">Standard Shopping vs Performance Max, feed optimizacija</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-za-ecommerce-srbija-2026" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads za eCommerce u Srbiji</p>
          <p className="text-xs text-gray-500 mb-0">Kompletna strategija, struktura kampanja, budžeti</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "product-feed-srpski-ecommerce" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Product Feed za Srpski eCommerce</p>
          <p className="text-xs text-gray-500 mb-0">8 obaveznih atributa, title optimizacija, custom labels</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max Vodič</p>
          <p className="text-xs text-gray-500 mb-0">Struktura asset grupa, kada PMax a kada Standard Shopping</p>
        </Link>
      </div>
    </>
  );
}
