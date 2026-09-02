import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { CheckCircle, XCircle } from "lucide-react";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function GoogleSearchKampanjeVodicPost() {
  return (
    <>
      <p>
        Search kampanja je najstariji format u Google Ads-u i i dalje najpouzdaniji. Neko kuca upit u pretragu, vi mu se pojavite u trenutku kad traži baš to. Nema pogađanja namere kao kod Display-a, nema čekanja da algoritam nauči ko je publika kao kod PMax-a.
      </p>
      <p>
        Sve što radim za klijente počinje odavde. Temelj, pa merenje, pa skaliranje - Search je taj temelj. Ako Search ne radi, ništa iznad njega (Shopping, PMax, remarketing) neće raditi bolje. Ovaj vodič je moj kompletan pristup Search kampanjama u 2026 - uključujući septembarsku promenu koja menja pravila igre za svakog ko koristi DSA ili broad match.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">Search kampanja hvata postojeću potražnju - ljude koji već traže ono što prodajete. Temelj je svakog naloga i mesto gde prvo proveravate da li merenje uopšte radi. Od septembra 2026, AI Max nadograđuje kampanje sa DSA-om, automatski kreiranim asset-ima i broad match-om na nivou kampanje - bez akcije s vaše strane. Pripremite se pre nego što se to desi, ne posle.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">više konverzija sa AI Max suitom*</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">minimum potrošnje za AI Max</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Sep</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">2026 - rok migracije</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1-2</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">nedelje do prvih rezultata</p>
          </div>
        </div>
        <p className="text-xs text-slate-400 mt-4 mb-0">*Po Google-ovim podacima: prosečno 7% više konverzija ili conversion value pri sličnom CPA/ROAS, uz punu AI Max suitu vs samo search term matching.</p>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8" id="istorija-izmena">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-700 mb-2 font-semibold">🔄 Živi vodič - istorija izmena</p>
        <p className="text-sm text-gray-600 mb-3">Ovaj vodič se ažurira svakog meseca. Šta je novo:</p>
        <ul className="text-sm text-gray-700 space-y-1 mb-0 list-disc pl-5">
          <li><strong>Avgust 2026:</strong> Prva verzija vodiča: AI Max suita, septembarska migracija (DSA, ACA, broad match), struktura po nameri i marži.</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Brzi odgovor
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Šta je Google Search kampanja?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          <strong>Search kampanja</strong> prikazuje tekstualne oglase korisnicima koji aktivno pretražuju određene reči na Google-u. Za razliku od Shopping-a, PMax-a ili Display-a, gađate <strong>eksplicitnu nameru</strong> - neko je već upisao šta traži. To je razlog zašto je Search najpredvidljiviji i najmerljiviji kanal u Google Ads-u, i zašto ga preporučujem kao prvu kampanju za svaki novi nalog.
        </p>
      </div>

      <hr />
      {/* ── Sadržaj ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#sta-je-search-kampanja-danas" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta je Search kampanja danas i zašto je i dalje temelj</a></li>
          <li><a href="#ai-max-za-search-kompletna-suita" className="block py-1 text-base text-gray-700 hover:text-primary underline">AI Max za Search - cela suita</a></li>
          <li><a href="#septembarska-migracija-2026" className="block py-1 text-base text-gray-700 hover:text-primary underline">Septembarska migracija 2026</a></li>
          <li><a href="#match-tipovi-2026" className="block py-1 text-base text-gray-700 hover:text-primary underline">Match tipovi 2026</a></li>
          <li><a href="#struktura-search-kampanje" className="block py-1 text-base text-gray-700 hover:text-primary underline">Struktura kampanje - intent i marža</a></li>
          <li><a href="#negativne-kljucne-reci-sistem" className="block py-1 text-base text-gray-700 hover:text-primary underline">Negativne ključne reči - sistem, ne spisak</a></li>
          <li><a href="#pisanje-oglasa-rsa" className="block py-1 text-base text-gray-700 hover:text-primary underline">Pisanje oglasa (RSA)</a></li>
          <li><a href="#bidding-strategija-za-search" className="block py-1 text-base text-gray-700 hover:text-primary underline">Bidding strategija</a></li>
          <li><a href="#merenje-pre-skaliranja" className="block py-1 text-base text-gray-700 hover:text-primary underline">Merenje pre skaliranja</a></li>
          <li><a href="#cesto-postavljana-pitanja" className="block py-1 text-base text-gray-700 hover:text-primary underline">Često postavljana pitanja</a></li>
        </ol>
      </nav>

      <h2 id="sta-je-search-kampanja-danas">Šta je Search kampanja danas i zašto je i dalje temelj</h2>
      <p>
        Search postoji od početka Google Ads-a i preživeo je svaku promenu platforme - od uvođenja Quality Score-a, preko Smart Bidding-a, do PMax-a. Razlog je jednostavan: dok god ljudi kucaju upite u Google, Search hvata trenutak najbliži kupovnoj odluci.
      </p>
      <p>
        Redosled kojim gradim nalog je uvek isti: <strong>temelj, pa merenje, pa skaliranje.</strong> Search je temelj. Pre nego što razmišljate o Shopping-u, PMax-u ili remarketingu, Search vam govori dve stvari koje ništa drugo ne može tako čisto - da li ljudi zaista traže ono što prodajete, i da li vaše merenje uopšte radi.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">1</span>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Temelj</h3>
          <p className="text-base text-gray-600 mb-0">Search kampanja sa jasnom namerom. Ovde proveravate da li tržište uopšte postoji za ono što prodajete.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">2</span>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Merenje</h3>
          <p className="text-base text-gray-600 mb-0">Conversion tracking se prvo verifikuje na Search-u, jer je volumen predvidljiv i lako je proveriti da li se brojke poklapaju sa stvarnošću.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">3</span>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Skaliranje</h3>
          <p className="text-base text-gray-600 mb-0">Tek kad Search stabilno konvertuje, dodajem Shopping, PMax ili remarketing na tu osnovu. Nikad obrnutim redosledom.</p>
        </div>
      </div>
      <p>
        Greška koju često vidim: firma krene direktno na PMax jer je "moderniji" ili "automatizovaniji", bez ijedne Search kampanje koja bi pokazala da li postoji potražnja. Rezultat je da niko ne zna zašto nalog ne radi - algoritam, proizvod, ili tržište. Search vam daje taj odgovor prvi, brzo i jeftino.
      </p>

      <hr />

      <h2 id="ai-max-za-search-kompletna-suita">AI Max za Search - cela suita</h2>
      <figure className="my-8">
        <Image src="/blog/search-ai-max.webp" alt="Klasična kampanja i ista kampanja sa uključenim AI Max funkcijama" width={1200} height={896} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-sm text-gray-500 text-center mt-2">AI Max: ista kampanja, novi sloj funkcija</figcaption>
      </figure>
      <p>
        AI Max nije jedna funkcija, nego paket od nekoliko slojeva koji se uključuju zajedno na nivou kampanje. Evo šta zapravo dobijate kad ga uključite.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Search themes</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">Umesto (ili pored) ključnih reči, dajete Google-u teme - širi opis šta prodajete i kome. Algoritam sam pronalazi konkretne upite koji odgovaraju temi, uključujući varijante koje vi ne biste pogodili ručno. Search themes rade zajedno sa vašim postojećim ključnim rečima, ne zamenjuju ih automatski.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">URL expansion</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">Google sam bira na koju stranicu vašeg sajta vodi klik, ne nužno onu koju ste zadali kao final URL. Ideja je da algoritam pronađe najrelevantniju stranicu za dati upit. Ovo je ista logika kao kod URL expansion-a u PMax-u, i preporuka je ista - proverite šta se dešava, ne uključujte je slepo.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">AI-generisan copy</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">AI Max može generisati naslove i opise u realnom vremenu, prilagođene konkretnom upitu koji je korisnik ukucao. Text Guidelines vam daju kontrolu nad tim - koje fraze, cene i tvrdnje AI sme da koristi, a koje ne. Bez guideline-a, AI piše tehnički tačne ali ponekad off-brand poruke.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">AI Brief (Gemini)</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">Umesto da AI nagađa ko ste, vi mu svojim rečima opisujete biznis, poruke i publiku - kroz Gemini konverzaciju u interfejsu. Što precizniji brief date (šta prodajete, ko kupuje, šta vas razlikuje od konkurencije), to je AI Max copy bliži vašem stvarnom brendu, ne generičkoj verziji.</p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Zvaničan podatak, ne obećanje</p>
        <p className="text-blue-800 text-base mb-0">Po Google-ovim podacima, oglašivači koji koriste punu AI Max suitu vide prosečno <strong>7% više konverzija ili conversion value</strong> pri sličnom CPA ili ROAS-u, u poređenju sa kampanjama koje se oslanjaju samo na standardno poklapanje search termova. Ovo je globalno dostupno svim oglašivačima, bez minimuma potrošnje. Naglašavam prosečno - vaš rezultat zavisi od kvaliteta search themes-a, guideline-a i brief-a koje date, ne od samog uključivanja opcije.</p>
      </div>

      <hr />


      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-slate-900 mb-2">Šta kažu podaci van Google-a</p>
        <p className="text-sm text-gray-700 mb-0">Google-ovi izlog primeri su impresivni (L&#39;Oréal: dupla stopa konverzije uz 31% nižu cenu konverzije). Ali nezavisna analiza Mike Ryana iz Smarter Ecommerce na više od 250 retail kampanja pokazuje trezveniju sliku: medijan +13% prihoda uz medijan +16% viši CPA. Prevod: AI Max uključite, ali sopstveni CPA merite nedeljno - izlog nije garancija.</p>
      </div>

      <h2 id="septembarska-migracija-2026">⚠️ Septembarska migracija (2026)</h2>
      <figure className="my-8">
        <Image src="/blog/search-migracija.webp" alt="Tri stare kampanje se spajaju u jedan novi AI Max sistem" width={1200} height={896} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-sm text-gray-500 text-center mt-2">Septembar 2026: DSA, ACA i broad match kampanje prelaze u AI Max</figcaption>
      </figure>
      <p>
        Ovo je deo koji najviše ljudi propušta, a najviše će ih pogoditi. Od septembra 2026, Google automatski nadograđuje određene kampanje na AI Max - bez vašeg zahteva. Nadogradnja se ne pita, samo se dešava, i sve migracije se završavaju do kraja septembra.
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Ko se automatski nadograđuje</p>
        <ul className="text-base text-yellow-900 mb-0">
          <li><strong>Dynamic Search Ads (DSA)</strong> kampanje</li>
          <li>Kampanje sa uključenim <strong>automatically created assets (ACA)</strong></li>
          <li>Kampanje sa <strong>broad match-om na nivou kampanje</strong></li>
        </ul>
      </div>

      <p>
        Ako vodite bilo koju od ove tri konfiguracije, kampanja će preći na AI Max ovog septembra, bez obzira da li ste to tražili. Praktična posledica: URL expansion, search themes i AI-generisan copy se uključuju na kampanji koja možda nikad nije bila podešena za tu vrstu automatizacije.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-base mb-3">Checklist pre nego što Google prebaci kampanju</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Final URL-ovi</strong> <span className="text-gray-500">- proverite da li su tačni i da li vodite tamo gde stvarno želite, jer URL expansion menja tu logiku.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Exclusions</strong> <span className="text-gray-500">- pregledajte page feed exclusions i URL exclusions pre migracije, ne posle.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Brand liste</strong> <span className="text-gray-500">- postavite brand exclusions/inclusions ako ne želite da AI Max kupuje ili izbegava određene brend termine.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Budžeti</strong> <span className="text-gray-500">- AI Max širi doseg, što može promeniti brzinu trošenja budžeta. Proverite pacing prvih nedelja posle migracije.</span></div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Šta uraditi sada</p>
        <p className="text-blue-800 text-base mb-0">Ne čekajte septembar. Ako imate DSA, ACA ili broad match na nivou kampanje, prođite checklist gore odmah - dok još birate podešavanja, ne dok ih Google bira umesto vas. Ako radije zadržite kontrolu, možete ručno preći sa DSA-a na standardnu Search kampanju sa search themes-om, pre nego što nadogradnja stigne.</p>
      </div>

      <hr />

      <h2 id="match-tipovi-2026">Match tipovi 2026</h2>
      <p>
        <GlossaryLink slug="match-types">Match tipovi</GlossaryLink> i dalje postoje, ali granice između njih su tanje nego pre par godina - naročito otkako je AI Max deo slike.
      </p>
      <p>
        Ako tek birate koje reči uopšte ulaze u kampanju, pre match tipova ide istraživanje - metod i kriterijume selekcije pokrivam u <Link href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }} className="underline">vodiču za ključne reči</Link>.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Match tip</th>
              <th className="py-3 px-3 font-heading font-semibold">Šta radi danas</th>
              <th className="py-3 px-3 font-heading font-semibold">Kad koristiti</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium"><GlossaryLink slug="exact-match">Exact match</GlossaryLink></td>
              <td className="py-3 px-3">Najuža kontrola, ali i dalje pokriva bliske varijante i istu nameru, ne samo doslovnu frazu.</td>
              <td className="py-3 px-3">Ključne reči sa visokom vrednošću gde želite maksimalnu preciznost.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium"><GlossaryLink slug="phrase-match">Phrase match</GlossaryLink></td>
              <td className="py-3 px-3">Srednja kontrola - poklapa upite koji sadrže značenje fraze, redosled reči je fleksibilniji.</td>
              <td className="py-3 px-3">Većina kampanja - dobar balans dosega i relevantnosti.</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium"><GlossaryLink slug="broad-match">Broad match</GlossaryLink></td>
              <td className="py-3 px-3">Najširi doseg, oslanja se najviše na signale i Smart Bidding. Na nivou kampanje - kandidat za automatsku AI Max nadogradnju.</td>
              <td className="py-3 px-3">Sa jakim Smart Bidding-om, dovoljno conversion podataka, i redovnim pregledom search termova.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Gde AI Max stvarno menja igru: kod broad match-a granica između "match tip" i "search themes" postaje zamagljena. Oba se oslanjaju na signale, ne na doslovan tekst. Praktična posledica - ako već koristite širok broad match bez pažljivog praćenja, dodavanje AI Max-a na to povećava doseg, ali i povećava potrebu za disciplinovanim pregledom šta se zapravo prikazuje.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Moje pravilo</p>
        <p className="text-yellow-800 text-base mb-0">Ne biram match tip po modi, biram po tome koliko podataka imam i koliko pažljivo mogu da pratim nalog. Manje konverzija i manje vremena za praćenje - bliže exact/phrase-u. Stabilan volumen i redovan nedeljni pregled search termova - širi broad match ima smisla.</p>
      </div>

      <hr />

      <h2 id="struktura-search-kampanje">Struktura kampanje - intent i marža</h2>
      <figure className="my-8">
        <Image src="/blog/search-struktura.webp" alt="Četiri kampanje sa različitim nivoima budžeta po nameri i marži" width={1200} height={896} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-sm text-gray-500 text-center mt-2">Intent i marža određuju koliko budžeta koja kampanja dobija</figcaption>
      </figure>
      <p>
        Najčešća greška koju vidim na novim nalozima: sve ključne reči u jednu kampanju, jedan budžet, jedan cilj. To radi dok je nalog mali. Čim krenete da skalirate, gubite kontrolu nad tim gde ide novac.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><XCircle size={14} strokeWidth={1.5} className="text-red-500" /> Loš pristup</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Sve u jednu kampanju</h3>
          <p className="text-base text-gray-600 mb-0">Brend termini, generički termini i termini sa visokom maržom se mešaju. Ne možete da date više budžeta proizvodu koji nosi veću maržu, jer je sve u istoj kampanji sa istim bidding ciljem.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><CheckCircle size={14} strokeWidth={1.5} className="text-green-600" /> Moj pristup</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Segmentacija po nameri i marži</h3>
          <p className="text-base text-gray-600 mb-0">Odvojene kampanje po tome koliko je upit blizu kupovine, i koliko proizvod/usluga iza njega nosi marže. Budžet i target CPA/ROAS se podešavaju po segmentu, ne globalno.</p>
        </div>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Segment</th>
              <th className="py-3 px-3 font-heading font-semibold">Primer</th>
              <th className="py-3 px-3 font-heading font-semibold">Zašto odvojeno</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Brand</td>
              <td className="py-3 px-3">"[ime firme]", "[ime firme] iskustva"</td>
              <td className="py-3 px-3">Najniži CPA, najviša konverzija. Ne sme se meriti istim aršinom kao non-brand.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Non-brand, visoka namera</td>
              <td className="py-3 px-3">"kupiti [proizvod]", "[proizvod] cena"</td>
              <td className="py-3 px-3">Blizu kupovine, zaslužuje agresivniji bid.</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Non-brand, visoka marža</td>
              <td className="py-3 px-3">Proizvodi/usluge sa najvećom profitnom marginom</td>
              <td className="py-3 px-3">Zaslužuju viši target CPA jer nosite više profita po konverziji.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Non-brand, istražuje</td>
              <td className="py-3 px-3">"kako izabrati [kategorija]", informativni upiti</td>
              <td className="py-3 px-3">Duži put do konverzije, drugačiji cilj i budžet od "kupiti sada" segmenta.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Ovo nije preporuka da imate 20 kampanja za mali nalog. Za manji budžet, 3-4 segmenta su dovoljna: brand, non-brand visoka namera, non-brand visoka marža, i eventualno istraživački sloj. Kako nalog raste, segmenti se dele dalje.
      </p>

      <hr />

      <h2 id="negativne-kljucne-reci-sistem">Negativne ključne reči - sistem, ne spisak</h2>
      <p>
        <GlossaryLink slug="negative-keywords">Negativne ključne reči</GlossaryLink> se često tretiraju kao jednokratni zadatak - napravi listu na početku, zaboravi. To je greška, pogotovo sa broad match-om i AI Max search themes-om koji šire doseg dalje nego što biste ručno pogodili.
      </p>
      <p>
        Radi kao sistem: redovan pregled search termova, ne jednokratna lista na startu.
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Nedeljno</strong> <span className="text-gray-500">- pregled search terms izveštaja, dodavanje očiglednih promašaja (posao, besplatno, konkurencija, seminarski) u negativnu listu.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Mesečno</strong> <span className="text-gray-500">- dublji pregled, potraga za obrascima (ne samo pojedinačni termini nego kategorije upita koje trebaju šire isključivanje).</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Nakon svake veće promene</strong> <span className="text-gray-500">- uključivanje broad match-a, AI Max search themes-a ili URL expansion-a znači da pregled sledi odmah, ne za mesec dana.</span></div>
          </div>
        </div>
      </div>
      <p>
        Za detaljnu razradu liste kategorija i strukture negativnih lista na nivou naloga vs kampanje, pogledajte <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="underline">vodič za negativne ključne reči</Link>.
      </p>

      <hr />

      <h2 id="pisanje-oglasa-rsa">Pisanje oglasa (RSA)</h2>
      <p>
        Oglasi u Search kampanjama su <GlossaryLink slug="rsa">Responsive Search Ads</GlossaryLink> - dajete više naslova i opisa, Google testira kombinacije. AI Max može generisati dodatne varijante na osnovu upita, ali okosnicu i dalje pišete vi.
      </p>
      <p>
        Ovo je posebna disciplina sa svojim pravilima - koliko headline-a je optimalno, kako izbeći da svi naslovi kažu istu stvar drugim rečima, kako koristiti pinning bez gušenja testiranja. Nisam je ovde ponavljao jer već postoji kompletan vodič: <Link href={{ pathname: "/blog/[slug]", params: { slug: "rsa-vodic" } }} className="underline">RSA vodič - kako pisati oglase koji konvertuju</Link>.
      </p>

      <hr />

      <h2 id="bidding-strategija-za-search">Bidding strategija</h2>
      <p>
        Search kampanje danas gotovo uvek koriste neki oblik <GlossaryLink slug="smart-bidding">Smart Bidding-a</GlossaryLink> - Maximize Conversions, Target CPA ili Target ROAS, u zavisnosti od toga koliko podataka imate i šta optimizujete. Manual CPC je danas retko opravdan izbor, osim u specifičnim situacijama sa vrlo malo konverzija.
      </p>
      <p>
        Izbor bidding strategije i kako je podešavate zavisi od faze naloga - koliko konverzija imate mesečno, da li pratite vrednost porudžbine ili samo broj konverzija, i koliko brzo menjate targete. Kompletna razrada: <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-vodic" } }} className="underline">Smart Bidding vodič</Link>.
      </p>

      <hr />

      <h2 id="merenje-pre-skaliranja">Merenje pre skaliranja</h2>
      <p>
        Ovo ponavljam u svakom vodiču koji pišem jer je najčešći uzrok propalih naloga: skaliranje pre nego što je merenje verifikovano. Search kampanja koja "dobro izgleda" u Google Ads interfejsu, a merenje je pokvareno, vas vodi ka pogrešnim odlukama - povećavate budžet na kampanji koja u stvarnosti ne konvertuje onoliko koliko izveštaj kaže.
      </p>
      <p>
        Pre nego što povećate budžet ili prebacite na Target ROAS, proverite da li se konverzije koje Google Ads prijavljuje poklapaju sa stvarnim prodajama ili leadovima. <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="underline">Conversion tracking vodič</Link> pokriva tačno taj proces - data-driven atribuciju, GA4/GTM setup, i kako verifikovati da brojke odgovaraju stvarnosti pre nego što povećate ulog.
      </p>

      <hr />

      <h2 id="cesto-postavljana-pitanja">Često postavljana pitanja</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko košta vođenje Google Search kampanja?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Kao samostalan kanal, Search budžet kreće od €500/mesečno. U okviru punog upravljanja nalogom (Search + Shopping/PMax + remarketing), fee za vođenje kreće od €700/mesečno. Jednokratna konsultacija je €150/sat, korisna ako želite drugo mišljenje o postojećoj kampanji bez preuzimanja upravljanja. Tačna cena zavisi od obima naloga i kompleksnosti - dobijate je posle uvida u nalog, ne unapred.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li mi treba agencija za Search kampanje?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Zavisi od budžeta i vremena koje imate. Search je najpristupačniji kanal za samostalno vođenje - struktura je jasnija nego kod PMax-a, a interfejs daje dosta uvida (search termovi, Quality Score, Auction Insights). Ako imate vremena za nedeljni pregled i manji budžet, možete početi sami. Agencija ili konsultant ima smisla kad budžet raste, kad AI Max i broad match traže pažljivije praćenje, ili kad jednostavno nemate vreme da to radite konzistentno svake nedelje.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta je AI Max i da li moram da ga koristim?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            AI Max je paket funkcija za Search kampanje - search themes, URL expansion, AI-generisan copy i AI Brief kroz Gemini. Nije obavezan sam po sebi, ali ako koristite DSA, automatically created assets ili broad match na nivou kampanje, Google vas automatski nadograđuje na njega od septembra 2026, bez vašeg zahteva. Ako to nije ono što želite, morate promeniti konfiguraciju kampanje pre nego što nadogradnja stigne, ne posle.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko dugo dok Search kampanja ne proradi?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Prvi klikovi i podaci stižu u roku od par dana. Prve konverzije zavise od volumena upita i budžeta - kod nekih naloga za nedelju dana, kod drugih (niska pretraga, nišni proizvod) treba duže. Smart Bidding treba minimum 2-4 nedelje i dovoljan broj konverzija da počne stabilno da optimizuje. Ne mogu unapred reći tačan datum kad će vaš nalog "proraditi" - to zavisi od kategorije, konkurencije i toga da li je merenje ispravno postavljeno od prvog dana. Ono što mogu reći: ako posle 6-8 nedelja sa ispravnim merenjem i realnim budžetom i dalje nema konverzija, problem nije strpljenje nego nešto u strukturi, ponudi ili tracking-u.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Broad match ili phrase match 2026?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Nema univerzalnog odgovora, zavisi od faze naloga. Ako tek počinjete i imate malo conversion podataka, phrase ili exact daju više kontrole dok gradite istoriju. Ako imate stabilan volumen konverzija, jak Smart Bidding target i - najvažnije - disciplinu da redovno pregledate search termove, broad match može doneti dodatni doseg koji phrase/exact propuštaju. Broad match bez redovnog pregleda je najčešći način da se budžet potroši na irelevantne upite, pogotovo kad se doda AI Max na vrh.
          </div>
        </details>
      </div>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Spremate Search kampanju ili se pripremate za septembarsku migraciju?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">Pomažem firmama da postave Search kampanje sa čistom strukturom, pravim merenjem i pripremljenim nalogom pre nego što AI Max nadogradnja stigne automatski. Zakažite besplatnu konsultaciju da prođemo vaš nalog.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Zakažite besplatnu konsultaciju</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/search-kampanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Search kampanje usluge</p>
          <p className="text-xs text-gray-500 mb-0">Profesionalno upravljanje Search kampanjama, od €500/mes</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "rsa-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">RSA vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako pisati Responsive Search Ads oglase koji konvertuju.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Smart Bidding vodič</p>
          <p className="text-xs text-gray-500 mb-0">Target CPA, Target ROAS i Maximize Conversions - kad koristiti šta.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako postaviti i verifikovati merenje pre skaliranja budžeta.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negativne ključne reči vodič</p>
          <p className="text-xs text-gray-500 mb-0">Sistem za sečenje otpadnog saobraćaja, ne jednokratna lista.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max vodič</p>
          <p className="text-xs text-gray-500 mb-0">Sledeći korak posle stabilnog Search-a - skaliranje kroz sve Google mreže.</p>
        </Link>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Search je i dalje temelj. AI Max menja koliko posla algoritam radi umesto vas, ne menja to da temelj mora biti čist pre skaliranja. Struktura, negativne reči i merenje - to su i dalje vaše odluke, ne algoritma.</p>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Avgust 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
