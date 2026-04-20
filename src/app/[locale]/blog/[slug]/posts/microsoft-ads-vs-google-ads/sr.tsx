import { Link } from "@/i18n/navigation";

export default function MicrosoftAdsVsGoogleAdsSR() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko — Dve platforme, jedan budžet</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google drži 92% tržišnog udela u pretrazi. Microsoft Ads pokrije preostalih 5–8% —
          ali ta publika je starija, bogatija i plaća 30–50% niži CPC. Za klijente iz UK i USA
          godinama vodim Google Shopping i Google Ads procese — i Microsoft Ads se tu ne zapostavlja.
          Naprotiv, prilazi se pažljivije, ali se veoma lako radi na njemu. Evo šta sam naučio.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">92%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Google tržišni udeo (pretraga)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">-40%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">niži CPC na Microsoft Ads prosečno</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">35+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">prosečne godine MS Ads korisnika</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">~15%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">tipičan MS Ads deo budžeta</p>
          </div>
        </div>
        <p className="text-sm text-slate-400 mt-6 mb-0 border-t border-slate-700 pt-4">
          Podaci: StatCounter GlobalStats, Microsoft Advertising, WordStream. Ažurirano: april 2026.
        </p>
      </div>

      {/* Brzi odgovor — featured snippet target */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-5 my-6">
        <p className="font-bold text-yellow-900 text-sm mb-1 uppercase tracking-wide">Brzi odgovor</p>
        <p className="text-yellow-800 text-sm mb-0">
          Google Ads je obavezna platforma za svaki biznis koji se oglašava online — 92% tržišta, nenadmašan reach, najnaprednija automatizacija. Microsoft Ads je profitabilan dopunski kanal: niži CPC za 30–50%, starija i bogatija publika (35+, viši prihodi), i jedinstven LinkedIn targeting dostupan samo na Microsoft platformi.
        </p>
      </div>

      <p>
        Za klijente iz UK i USA godinama vodim Google Ads i Microsoft Ads procese simultano — uglavnom u kontekstu
        skincare, fashion i furniture eCommerce-a. Tipična raspodela je ~85% budžeta na Google, ~15% na Microsoft.
        Ovo nije teorijsko poređenje: svaki uvid u ovom tekstu dolazi iz realnih podataka, realnih konverzija i realnog
        novca potrošenog na obema platformama.
      </p>
      <p>
        Srpski PPC konsultanti koji rade sa obe platforme simultano su retkost. Većina bira jednu ili drugu.
        Microsoft Ads se često <em>zaboravi</em>, ali ne zato što je loš kanal — upravo suprotno, vrlo je jednostavan
        za rad kad se setup postavi kako treba. Prava strategija je znati <em>kada</em> koristiti koju i kako ih
        kombinovati da biste izvukli maksimum iz svakog potrošenog evra.
      </p>
      <p>
        U ovom vodiču prolazim kroz market share realnost, razlike u publici, CPC benchmarks, feature paritet
        (obe platforme imaju RSA, Shopping i PMax ekvivalent), obrasce koje vidim na nalozima u kojima se platforme
        vode paralelno, i okvir za odluku koji možete odmah primeniti na vaš biznis.
      </p>

      <hr />

      {/* Table of contents */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#trzisni-udeo" className="text-sm text-gray-700 hover:underline">Market share realnost — šta 5% zapravo znači</a></li>
          <li><a href="#razlike-u-publici" className="text-sm text-gray-700 hover:underline">Razlike u publici — ko su Microsoft Ads korisnici</a></li>
          <li><a href="#linkedin-targeting" className="text-sm text-gray-700 hover:underline">LinkedIn targeting — ekskluzivna prednost Microsoft-a</a></li>
          <li><a href="#cpc-razlike" className="text-sm text-gray-700 hover:underline">CPC razlike po industrijama — realni benchmarks</a></li>
          <li><a href="#feature-paritet" className="text-sm text-gray-700 hover:underline">Feature paritet — RSA, Shopping, PMax ekvivalenti</a></li>
          <li><a href="#realni-podaci" className="text-sm text-gray-700 hover:underline">Realni obrasci iz UK/USA naloga — dualno vođenje platformi</a></li>
          <li><a href="#konverzije-i-atribucija" className="text-sm text-gray-700 hover:underline">Konverzije i atribucija — gde platforme rade drugačije</a></li>
          <li><a href="#kada-koristiti" className="text-sm text-gray-700 hover:underline">Kada koristiti Microsoft Ads — decision framework</a></li>
          <li><a href="#kada-obe" className="text-sm text-gray-700 hover:underline">Kada koristiti obe platforme simultano</a></li>
          <li><a href="#zakljucak" className="text-sm text-gray-700 hover:underline">Zaključak i preporuke</a></li>
        </ol>
      </nav>

      <h2 id="trzisni-udeo">Market share realnost — šta 5% zapravo znači u brojevima</h2>

      <p>
        Kada kažete nekome da Microsoft Ads (Bing) drži 3–5% globalnog tržišta pretrage, prva reakcija je obično
        &quot;pa to je minorno&quot;. Ali ta brojka je varljiva. Bing/Microsoft Search obradi <strong>12+ milijardi
        pretraga mesečno</strong> globalno. U Velikoj Britaniji (primer UK tržišta), Bing drži oko 7–9% tržišnog
        udela — više nego globalni prosek.
      </p>

      <p>
        U SAD-u, Bing drži ~12% svih desktop pretraga. Razlog: Internet Explorer i Edge su fabrički postavljeni sa
        Bing-om kao default pretragom. Svaki korisnik koji nikad nije promenio browser podešavanja koristi Bing.
        To je demografski segment koji je vredan posebne pažnje za određene kategorije proizvoda.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Tržište</th>
              <th className="py-3 px-4 text-center font-heading font-semibold text-gray-900">Google udeo</th>
              <th className="py-3 px-4 text-center font-heading font-semibold text-gray-900">Bing/MS udeo</th>
              <th className="py-3 px-4 text-right font-heading font-semibold text-gray-900">Komentar</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Globalno</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~92%</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~3–5%</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-gray-500">StatCounter 2026</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">SAD (desktop)</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~80%</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~12%</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-gray-500">Edge default effect</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Velika Britanija</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~87%</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~7–9%</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-gray-500">Relevantno za UK brendove</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Srbija</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~97%</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~2%</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-gray-500">MS Ads nije prioritet za SR tržište</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Nemačka</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~88%</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~5–7%</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-gray-500">Vredan kanal za DE tržište</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Za srpske biznise koji prodaju <strong>isključivo lokalno</strong>: Microsoft Ads vam nije prioritet —
        2% tržišnog udela ne opravdava vreme i resurse za zasebnu platformu. Međutim, ako prodajete na
        UK, SAD, AU, DE ili Benelux tržištu, Microsoft Ads je ozbiljan kanal koji vredi testirati.
      </p>

      <hr />

      <h2 id="razlike-u-publici">Razlike u publici — ko su Microsoft Ads korisnici</h2>

      <p>
        Ovo je možda najvažnija razlika između platformi, a i najčešće se zanemaruje. Korisnici koji
        pretražuju na Bing-u nisu samo &quot;manji Google korisnici&quot; — to je statistički drugačija demografska grupa.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-white border-2 border-blue-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700 mb-3">Google Ads — tipični korisnik</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-0">
            <li>Šira demografija (18–65+)</li>
            <li>Dominira mobilni (60%+ pretrage)</li>
            <li>Mlađa publika (25–35 centar gravitacije)</li>
            <li>Mešovit prihodni profil</li>
            <li>Koristi Chrome, Android, Gmail</li>
            <li>Otvoren za impulzivne kupovine</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-orange-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-orange-700 mb-3">Microsoft Ads — tipični korisnik</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-0">
            <li>Starija demografija (35+, 45+ jako zastupljeni)</li>
            <li>Dominira desktop (70%+ pretrage)</li>
            <li>Viši prihodi od proseka</li>
            <li>Korporativni/poslovni korisnici (Edge, Office)</li>
            <li>Konzervativniji u odlukama — više istraživanja</li>
            <li>Viši prosečan AOV (Average Order Value)</li>
          </ul>
        </div>
      </div>

      <p>
        Iz iskustva sa skincare eCommerce nalozima u UK: publika koja konvertuje na Microsoft Ads starija je
        u proseku 8–12 godina od Google publike. Ta ista publika ima <strong>viši raspoloživi prihod</strong> i
        češće kupuje premium linije. Za brend koji prodaje proizvode u cenovnom rangu £30–£120,
        ovo je relevantna razlika.
      </p>

      <p>
        Microsoft Ads publika troši <strong>više vremena istraživajući</strong> pre kupovine. Ovo znači da ad copy
        koji funkcioniše dobro na Google-u (brz benefit, urgentnost, CTA) možda nije optimalan za Microsoft.
        Na Bing-u radi bolje: detalji o proizvodu, social proof (recenzije, broj kupaca), i emphasizing
        kvaliteta nad brzine isporuke.
      </p>

      <hr />

      <h2 id="linkedin-targeting">LinkedIn targeting — ekskluzivna prednost dostupna samo na Microsoft Ads</h2>

      <p>
        Microsoft je 2016. kupio LinkedIn za $26,2 milijarde. Ova akvizicija nije samo poslovni potez —
        donela je jedinstven targeting podatak koji nijedna druga platforma za pretragu nema:
        <strong> profesionalne demografske podatke iz LinkedIn profila</strong>.
      </p>

      <div className="bg-slate-50 border-l-4 border-blue-500 rounded-r-xl p-6 my-8">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-3">LinkedIn Profile Targeting u Microsoft Ads</p>
        <p className="text-gray-700 mb-3 text-sm">
          U Microsoft Ads-u možete targetirati korisnike pretraživanja po sledećim LinkedIn dimenzijama:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase text-gray-600 mb-2">Industrija</p>
            <ul className="text-xs text-gray-600 space-y-1 mb-0">
              <li>Finansijske usluge</li>
              <li>Zdravstvo</li>
              <li>Tehnologija</li>
              <li>Pravo i consulting</li>
              <li>40+ kategorija</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase text-gray-600 mb-2">Radna pozicija</p>
            <ul className="text-xs text-gray-600 space-y-1 mb-0">
              <li>C-level (CEO, CFO...)</li>
              <li>Director / Manager</li>
              <li>Senior individual contributor</li>
              <li>Decision makers</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase text-gray-600 mb-2">Firma</p>
            <ul className="text-xs text-gray-600 space-y-1 mb-0">
              <li>Ime kompanije (targeting)</li>
              <li>Veličina firme (SMB, Enterprise)</li>
              <li>Specifični employer targeting</li>
            </ul>
          </div>
        </div>
      </div>

      <p>
        Praktična primena: ako prodajete B2B SaaS alat i hoćete da dostignete IT menadžere u finansijskom sektoru
        sa 500+ zaposlenih — Google Ads nema tu preciznost. Microsoft Ads može da targetira tu tačnu grupu kroz
        LinkedIn integraciju, i to na nivou pretrage (ne kao display). Ovo je ogromna prednost za B2B oglašivače.
      </p>

      <p>
        Za eCommerce brendove: LinkedIn targeting je manje direktno relevantan, ali i tu postoje primene.
        Targetiramo korisnike u određenim industrijama koji imaju veći raspoloživi prihod — na primer, finansije,
        pravo, medicina — jer su skloniji premium skincare kupovinama.
      </p>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-yellow-900 mb-2">Napomena o LinkedInt targeting-u</p>
        <p className="text-sm text-yellow-800 mb-0">
          LinkedIn Profile Targeting funkcioniše kao <strong>audience bid modifier</strong>, ne kao exclusion targeting.
          Koristite ga za bid adjustment (+20%, +30%) prema segmentima koji konvertuju bolje — ne za ograničavanje
          dosega. Počnite sa observation mode-om pre nego što primenite bid adjustments.
        </p>
      </div>

      <hr />

      <h2 id="cpc-razlike">CPC razlike po industrijama — realni benchmarks</h2>

      <p>
        Niži CPC na Microsoft Ads nije mit — to je konzistentna realnost koja se objašnjava nižom konkurencijom.
        Manje oglašivača koristi Microsoft Ads, što znači manje bidova u aukciji, što znači nižu cenu po kliku.
        Iz iskustva sa UK skincare i fashion nalozima, Microsoft CPC-ovi su konzistentno 35–45% niži od Google CPC-ova za iste pretrage.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Industrija</th>
              <th className="py-3 px-4 text-center font-heading font-semibold text-gray-900">Google CPC (prosek UK)</th>
              <th className="py-3 px-4 text-center font-heading font-semibold text-gray-900">Microsoft CPC (prosek UK)</th>
              <th className="py-3 px-4 text-right font-heading font-semibold text-gray-900">Ušteda</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Skincare / Beauty</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£0,45–£0,90</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£0,25–£0,50</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-green-700 font-semibold">~40%</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Finansijske usluge</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£3,00–£8,00</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£1,80–£4,50</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-green-700 font-semibold">~40%</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">B2B SaaS / Softver</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£2,00–£6,00</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£1,00–£3,20</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-green-700 font-semibold">~45%</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Pravo i advokatura</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£4,00–£12,00</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£2,00–£6,50</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-green-700 font-semibold">~45%</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Hobi i slobodno vreme</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£0,30–£0,70</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£0,18–£0,40</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-green-700 font-semibold">~40%</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">eCommerce (opšte)</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£0,40–£1,20</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£0,22–£0,65</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-green-700 font-semibold">~40–45%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Važno upozorenje: niži CPC ne znači automatski bolji ROAS. Ako je volumen pretrage na Bing-u 10x manji,
        i CPC je 40% niži, ali konverzija je slična — matematika radi. Ali ako je konverzija niža zbog drugačijeg
        kvaliteta saobraćaja, ušteđeni CPC se gubi u višem CPA. Uvek gledate CPA (Cost Per Acquisition),
        ne samo CPC.
      </p>

      <p>
        Iz prakse: vidim nižu stopu konverzije na Bing-u u poređenju sa Google-om za iste proizvode,
        ali viši prosečan AOV — starija publika kupuje skuplje linije. Net rezultat: CPA je sličan, ali POAS
        (Profit on Ad Spend) je blago bolji na Microsoft zbog višeg AOV-a.
      </p>

      <hr />

      <h2 id="feature-paritet">Feature paritet — RSA, Shopping, PMax ekvivalenti u 2026</h2>

      <p>
        Jedna od najvećih prednosti Microsoft Ads-a u poslednjih nekoliko godina: agresivno dostizanje feature
        paritetnosti sa Google-om. Evo stanja u 2026:
      </p>

      <div className="space-y-4 my-8">
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">R</span>
            <div>
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Responsive Search Ads (RSA)</h3>
              <p className="text-sm text-gray-600 mb-2">
                Obe platforme imaju RSA format — 15 naslova, 4 opisa, Google/Microsoft kombinuje automatski.
                Ključna razlika: Microsoft Ads RSA performance insights su manje detaljni od Google-ovih
                (Asset performance labels su Basic vs. Google-ovog Good/Best/Low/Learning). Character limiti
                su identični (30 za naslov, 90 za opis).
              </p>
              <p className="text-xs text-gray-500 mb-0">
                Taktika: koristite iste headline-ove i opise kao na Google-u — Microsoft import alat
                automatski povlači kampanje iz Google Ads-a.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Sh</span>
            <div>
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Microsoft Shopping Campaigns</h3>
              <p className="text-sm text-gray-600 mb-2">
                Direktni Google Shopping ekvivalent — Microsoft Merchant Center, product feed (isti format
                kao Google), Shopping kampanje sa Product Groups. Feed se može importovati direktno iz
                Google Merchant Center-a. Na nalozima gde dualno radimo, vodim paralelne Shopping kampanje na obe platforme
                sa istim feedom, prilagođenim bid-ovima.
              </p>
              <p className="text-xs text-gray-500 mb-0">
                Ključna razlika: Microsoft Shopping nema Google-ov Shopping Intelligence tab i manje
                impression share podataka, ali osnovna funkcionalnost je identična.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">P</span>
            <div>
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Performance Max ekvivalent — Microsoft Audience Campaigns + Smart Shopping</h3>
              <p className="text-sm text-gray-600 mb-2">
                Microsoft nema identični PMax, ali ima Audience Network (ekvivalent Google Display/YouTube
                mreže) i Smart Shopping kampanje koje automatski distribuiraju budget kroz Search i Shopping.
                U 2025. je lansiran &quot;Performance Max&quot; u beta na Microsoft Ads — postepeno rollout tokom 2026.
              </p>
              <p className="text-xs text-gray-500 mb-0">
                Iz iskustva: Audience Network kampanje daju niže CPC-ove od Google Display-a, ali i niži
                intent. Koristimo ga za remarketing, ne za cold saobraćaj.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">AI</span>
            <div>
              <h3 className="text-base font-heading font-bold mt-0 mb-1">AI i automatizacija — gde Google vodi</h3>
              <p className="text-sm text-gray-600 mb-2">
                Google-ov Smart Bidding (tROAS, tCPA, Maximize Conversions) je zreliji i pouzdaniji zbog
                ogromne količine konverzionih podataka. Microsoft Smart Bidding funkcioniše, ali zahteva
                više vremena za learning period i više konverzija za stabilizaciju. Za naloge sa &lt;30
                konverzija mesečno, Microsoft Smart Bidding može biti nestabilan.
              </p>
              <p className="text-xs text-gray-500 mb-0">
                Preporuka: počnite sa Manual CPC ili Enhanced CPC na Microsoft Ads dok ne sakupite 30+
                konverzija mesečno, pa tek onda predjite na tROAS ili tCPA.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Feature</th>
              <th className="py-3 px-4 text-center font-heading font-semibold text-gray-900">Google Ads</th>
              <th className="py-3 px-4 text-center font-heading font-semibold text-gray-900">Microsoft Ads</th>
              <th className="py-3 px-4 text-right font-heading font-semibold text-gray-900">Ko vodi?</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200">RSA format</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Da</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Da</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">Izjednačeno</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">Shopping kampanje</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Da</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Da</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">Google (bolja reporting)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200">Performance Max</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Da (zreo)</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Beta</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">Google</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">Smart Bidding</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Da (zreo)</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Da (manje podataka)</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">Google</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200">LinkedIn targeting</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Ne</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Da</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 font-semibold text-orange-700">Microsoft</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">Audience Network (Display)</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Da (Google Display)</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Da (MS Audience Net.)</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">Google (veća mreža)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200">Google Import alat</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">N/A</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Da (automatski import)</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 font-semibold text-orange-700">Microsoft (praktičnost)</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">Reporting granularnost</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Excelentno</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Dobro</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">Google</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="realni-podaci">Realni obrasci iz UK/USA naloga — dualno vođenje platformi</h2>

      <p>
        Iz godina vođenja obe platforme paralelno za UK i USA eCommerce brendove, ovde su konkretni obrasci
        koje sam uočio — bez preciznih brend-specific cifara, ali sa jasnim relativnim trendovima:
      </p>

      <div className="space-y-4 my-8">
        <div className="bg-white border-l-4 border-green-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">Uvid 1: AOV je konzistentno viši na Microsoft Ads</p>
          <p className="text-sm text-gray-600 mb-0">
            Kupci koji dolaze sa Bing pretrage imaju u proseku 15–25% viši Average Order Value od
            Google kupaca. Starija demografija kupuje premium proizvode — premium linije u kategorijama koje su relevantne (~£80–£120
            po stavci) proporcionalno više od entry-level linije (~£20–£35). Ovo direktno utiče na POAS računicu.
          </p>
        </div>

        <div className="bg-white border-l-4 border-green-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">Uvid 2: Microsoft import alat štedi sate rada mesečno</p>
          <p className="text-sm text-gray-600 mb-0">
            Microsoft-ov &quot;Import from Google Ads&quot; funkcija je izuzetno korisna. Možete automatski povući
            kompletnu kampanjsku strukturu iz Google Ads-a direktno u Microsoft Ads. U dualnom workflow-u, inicijalni
            setup na Microsoft-u trajao je 3–4 sata umesto tipičnih 15–20 sati za ručni setup. Kampanje
            se sinhronizuju mesečno — novi ad copy, novo proširenja, nove negativne ključne reči.
          </p>
        </div>

        <div className="bg-white border-l-4 border-yellow-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">Uvid 3: Conversion rate je niži, ali ne dramatično</p>
          <p className="text-sm text-gray-600 mb-0">
            Microsoft Ads conversion rate je konzistentno 20–30% niži od Google-a za iste kampanje.
            Objašnjenje: manji volumen znači manje podataka za Smart Bidding optimizaciju, a demografski
            profil koji više istražuje donosi više &quot;window shoppers&quot;. Važno: niži CVR se kompenzuje
            nižim CPC-om, pa CPA ostaje konkurentan.
          </p>
        </div>

        <div className="bg-white border-l-4 border-yellow-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">Uvid 4: Desktop dominacija zahteva prilagođen ad copy</p>
          <p className="text-sm text-gray-600 mb-0">
            Sa 70%+ desktop pretrage na Bing-u, Microsoft kampanje imaju drugačije asset performanse
            od Google. Duži opisi (90 karaktera) koji detaljno opisuju benefite rade bolje od kratkih,
            punch-oriented naslova koji dominiraju na mobile Google pretrazi. Prilagodili smo descriptions
            da naglašavaju &quot;dermatologically tested&quot;, &quot;UK-made&quot; i specifične ingredient benefits —
            informacije koje desktop korisnik u istraživačkoj fazi želi da vidi.
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">Uvid 5: Impression Share je lakše osvajati na Bing-u</p>
          <p className="text-sm text-gray-600 mb-0">
            Na Google Ads, osvajanje 80%+ impression share za konkurentne termine zahteva agresivne budžete.
            Na Microsoft Ads, isti impression share dostupan je sa 3–5x manjim budžetom zbog nižeg broja
            konkurentnih oglašivača. Tipičan UK brend ima 85%+ IS na branded pretragama na Bing-u sa budžetom
            koji bi na Google-u pokrivao samo 40% IS-a.
          </p>
        </div>
      </div>

      <hr />

      <h2 id="konverzije-i-atribucija">Konverzije i atribucija — gde platforme rade drugačije</h2>

      <p>
        Jedno od praktičnih izazova u radu sa obe platforme simultano je atribucija konverzija.
        Korisnik može videti oglas na Google-u, ne kupiti, videti oglas na Bing-u dan kasnije i kupiti.
        Obe platforme će taj konverziju pripisati sebi — fenomen poznat kao double counting.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 md:p-6 my-6">
        <p className="text-xs uppercase tracking-wide text-slate-400 mb-3">Kako rešiti atribucioni problem u praksi</p>
        <div className="space-y-3">
          {[
            {
              br: "1.",
              txt: "Koristite GA4 kao sistem istine — GA4 Cross-Channel atribucija (Data-Driven model) daje neutralnu sliku doprinosa svake platforme."
            },
            {
              br: "2.",
              txt: "Pratite Assisted Conversions u GA4 — Google Ads i Bing mogu biti assisted channels u multi-touch journeyu, ne uvek last-click."
            },
            {
              br: "3.",
              txt: "Ne optimizujete svaku platformu u vakuumu — pogledajte ukupan rast prihoda, ne samo platformski ROAS. Ako obe rastu, radi."
            },
            {
              br: "4.",
              txt: "Budget Microsoft-a je 15% ukupnog. Ako isključite Microsoft i ukupni prihod padne više od 15%, platforma je vredna."
            }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 text-yellow-400 font-bold text-sm">{item.br}</span>
              <p className="text-sm text-slate-200 mb-0">{item.txt}</p>
            </div>
          ))}
        </div>
      </div>

      <p>
        Reporting razlike: Google Ads ima napredniji Search Terms report, impression share podatke po
        aukciji, i Auction Insights koji pokazuje konkurente. Microsoft Ads ima koristan &quot;Publish to Bing&quot;
        i LinkedIn demographic reporting (ko klikće po industriji i poziciji) — ali generalni reporting
        interfejs je manje intuitivan od Google-a, posebno za granularne analize.
      </p>

      <hr />

      <h2 id="kada-koristiti">Kada koristiti Microsoft Ads — decision framework</h2>

      <p>
        Iz mog iskustva, Microsoft Ads vredi testirati kada se kumulativno ispune ovi uslovi.
        Ako ne ispunjavate ni jedan, počnite sa Google-om i optimizujte ga pre diversifikacije.
      </p>

      <div className="space-y-3 my-8">
        {[
          {
            check: true,
            title: "Prodajete na UK, SAD, AU, CA, DE tržištu",
            desc: "Microsoft Ads ima smisla samo na tržištima gde Bing ima relevantan tržišni udeo (5%+). Za Srbiju, BiH, Crnu Goru — Google je dovoljno."
          },
          {
            check: true,
            title: "Google Ads nalog je stabilan i profitabilan",
            desc: "Microsoft Ads je dopunski kanal, ne zamena. Ako Google ne radi, Microsoft neće to popraviti. Prvo optimizujte Google, pa diversifikujte."
          },
          {
            check: true,
            title: "Vaš proizvod ili usluga targetira 35+ demografiju",
            desc: "Premium kozmetika, finansijski proizvodi, zdravstvo, B2B usluge, luksuzni hobi — sve kategorije gde starija demografija troši više."
          },
          {
            check: true,
            title: "B2B ili professional services — LinkedIn targeting je relevantan",
            desc: "Ovo je killer prednost Microsoft Ads-a. Ako targetirate poslovne korisnike po industriji, poziciji ili firmi — nema alternativa."
          },
          {
            check: true,
            title: "Imate budžet za management druge platforme",
            desc: "Microsoft import alat pomaže, ali management dve platforme i dalje zahteva vreme. Minimalni mesečni spend za MS Ads koji ima smisla: £300–£500 (UK)."
          },
          {
            check: false,
            title: "NE: Ako vam je Google nalog ispod target-a",
            desc: "Diverzifikacija pri lošim rezultatima nije strategija — to je gubljenje fokusa. Popravite Google, pa razmišljajte o Microsoft-u."
          }
        ].map((item, i) => (
          <div key={i} className={`flex items-start gap-4 bg-white border rounded-xl p-4 shadow-card ${item.check ? "border-green-200" : "border-red-200"}`}>
            <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${item.check ? "bg-green-600" : "bg-red-500"}`}>
              {item.check ? "✓" : "✗"}
            </span>
            <div>
              <p className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</p>
              <p className="text-xs text-gray-600 mb-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <hr />

      <h2 id="kada-obe">Kada koristiti obe platforme simultano — i kako to raditi efikasno</h2>

      <p>
        Ako ispunjavate kriterijume za Microsoft Ads, sledeće pitanje je: kako voditi obe platforme
        bez dupliranja rada i bez konfuzije u atribuciji? Evo sistema koji radi iz prakse dualnog vođenja:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700 mb-3">Google Ads — primarna platforma</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-0">
            <li>Pun budžet, pun fokus, puna optimizacija</li>
            <li>Smart Bidding sa zrelim konverzionim podacima</li>
            <li>A/B testiranje ad copy-ja i landing strana</li>
            <li>PMax kampanje za scaling</li>
            <li>Shopping kampanje (UK, Srbija Q4 2026)</li>
            <li>Remarketing za sve segmente</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-orange-700 mb-3">Microsoft Ads — dopunska platforma</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-0">
            <li>Import iz Google Ads-a mesečno (sinhronizacija)</li>
            <li>15% ukupnog budžeta (pravilo za početak)</li>
            <li>LinkedIn targeting bid adjustments za relevantne segmente</li>
            <li>Manual CPC ili eCPC dok se ne sakupe konverzije</li>
            <li>Shopping na paraleli sa Google-om</li>
            <li>Fokus na branded keywords + top non-branded</li>
          </ul>
        </div>
      </div>

      <p>
        Workflow koji koristim: svaki prvi ponedeljak u mesecu, importujem izmene iz Google Ads-a
        u Microsoft Ads (novi ad copy, nove negative KW-ove, bid adjustments). Mesečni review Microsoft performansi
        traje 45–60 minuta, nasuprot 3–4 sata za Google. Ukupno dodatno vreme za drugu platformu: 90 minuta
        mesečno. To je efikasan odnos za platformen koja donosi 12–15% inkrementalnih konverzija.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-green-900 mb-2">Pro tip: Microsoft Import alat u 3 koraka</p>
        <ol className="text-sm text-green-800 space-y-1 mb-0 list-decimal pl-4">
          <li>Microsoft Ads → Tools → Import Campaigns → Import from Google Ads</li>
          <li>Povežite Google Ads nalog, izaberite kampanje za import, mapiranje budžeta</li>
          <li>Postavite automatski uvoz (mesečno) — svaki put dobijate notifikaciju o promenama</li>
        </ol>
      </div>

      <p>
        Važni linkovi za kontekst obe platforme i kakve su razlike u targeting mogućnostima,
        pogledajte i komparaciju sa Meta Ads — treća platforma koja zatvara triangle:
      </p>

      <ul>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-vs-meta" } }}
            className="underline font-medium"
          >
            Google Ads vs Meta Ads: Šta je Bolje za Vaš Biznis?
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }}
            className="underline font-medium"
          >
            Performance Max: Kompletan Vodič za eCommerce
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }}
            className="underline font-medium"
          >
            Google Shopping Kampanje: Kompletan Vodič
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }}
            className="underline font-medium"
          >
            Koliko Košta Google Ads? Cene, Budžeti i ROI
          </Link>
        </li>
      </ul>

      <hr />

      <h2 id="zakljucak">Zaključak — Koja platforma za koji biznis</h2>

      <p>
        Posle godina paralelnog vođenja obe platforme za UK i USA klijente, moj stav je jasan:
        <strong> Google Ads je obavezan, Microsoft Ads je opcija vredna testiranja za prave biznise</strong>.
      </p>

      <p>
        Nije reč o tome koja je &quot;bolja&quot; — reč je o tome koja je primarna i koja je dopunska.
        Google-ov tržišni udeo, napredna automatizacija, i zrelost platforme čine ga temeljem svakog
        paid search programa. Microsoft Ads dolazi na vrh kada: prodajete na anglofona tržišta,
        targetirate 35+ demografiju, imate B2B komponentu, ili jednostavno hoćete da pokupite
        dodatnih 5–12% potencijalnih kupaca po nižoj ceni.
      </p>

      <p>
        Za srpske biznise koji prodaju lokalno: Microsoft Ads nije prioritet za 2026. Fokusirajte se na
        Google — i pripremite se za Google Shopping koji stiže u novembru. Za biznise koji prodaju
        na UK, SAD, DE ili AU: Microsoft Ads test kampanja od £300–£500 mesečno može biti jedan od
        najisplativijih eksperimenata koje ćete uraditi.
      </p>

      <p>
        Ako imate pitanja o setup-u Microsoft Ads-a ili kako da integrirate obe platforme u koherentnu
        strategiju,{" "}
        <a href="/sr/kontakt" className="underline font-medium">
          pišite mi — besplatna konsultacija 30 minuta.
        </a>
      </p>

      <hr />

      <h2>Najčešća pitanja o Microsoft Ads vs Google Ads</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li Microsoft Ads vredi za srpska preduzeća?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Za biznise koji prodaju <strong>isključivo na srpskom tržištu</strong>: ne vredi — Bing ima samo ~2% tržišnog udela u Srbiji. Za biznise koji prodaju na <strong>UK, SAD, Nemačku, Australiju</strong>: vredi testirati. Na tim tržištima Bing drži 7–12% desktop pretrage, CPC je 35–45% niži od Google-a, a publika je starija i imovinijski snažnija. Minimalni mesečni spend za smislen test: £300–500 ili ekvivalent.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko je teško prebaciti Google Ads kampanje na Microsoft Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Tehnički, <strong>izuzetno lako</strong>. Microsoft Ads ima &quot;Import from Google Ads&quot; alat koji automatski prebacuje kompletnu strukturu kampanja (kampanje, ad groups, keywords, ads, extensions) iz Google naloga. Inicijalni import traje 1–2 sata (podešavanja, budžet mapping, prilagođavanje bid-ova). Iz prakse: mesečna sinhronizacija je automatska i traje svega 15 minuta manualnog pregleda. Pametni oglašivači imaju Microsoft kao &quot;shadow campaign&quot; koji se automatski sinhronizuje sa Google promenama.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta je LinkedIn targeting na Microsoft Ads i kako radi?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Microsoft poseduje LinkedIn od 2016, što im daje pristup profesionalnim profilnim podacima. U Microsoft Ads-u možete targetirati korisnike pretrage po <strong>LinkedIn industriji</strong> (40+ kategorija), <strong>radnoj poziciji</strong> (C-level, Director, Manager, Individual Contributor) i <strong>imenu firme</strong>. Ovo funkcioniše kao <strong>bid modifier</strong> — povećavate bid za segmente koji konvertuju bolje, ali ne isključujete ostale. Idealno za B2B, financial services, SaaS, i professional services. Počnite sa observation mode-om, sakupite podatke, pa primenite bid adjustments (+15% do +30% za vredne segmente).
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li Microsoft Ads ima Shopping kampanje ekvivalentne Google Shopping-u?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Da — Microsoft Merchant Center i Microsoft Shopping Campaigns su funkcionalni ekvivalent. <strong>Isti feed format</strong> (Google Shopping feed radi direktno na Microsoft bez izmena), slična kampanjska struktura (Product Groups, bid-ovi po kategoriji), i isti vizuelni format (slika, cena, naziv prodavnice). Razlike: Microsoft nema Google-ov Shopping Intelligence, auction insights su manje detaljni, a reporting je bazičniji. Na nalozima gde dualno radimo, vodim paralelne Shopping kampanje — Microsoft verzija donosi 10–15% dodatnih Shopping konverzija sa identičnim feed-om.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliki budžet je potreban za Microsoft Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Pravilo koje koristim: <strong>10–15% ukupnog paid search budžeta</strong>. Ako trošite £3.500 na Google, testni Microsoft budžet je £350–500. Ovo je dovoljno za merljive podatke, ali ne toliko da ugrozi Google performanse. Minimalni smisleni budžet za UK eCommerce je <strong>£300/mesec</strong> — ispod toga nema dovoljno klikova za statički relevantne podatke. Za B2B sa višim CPC-ovima, minimum je viši (~£500+) jer skuplje ključne reči zahtevaju više budžeta za isti volumen podataka.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koji bidding model koristiti na Microsoft Ads na početku?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Preporuka za nove Microsoft naloge: počnite sa <strong>Enhanced CPC (eCPC)</strong> ili Manual CPC. Microsoft Smart Bidding (tROAS, tCPA) zahteva minimum <strong>30 konverzija mesečno</strong> za stabilnu optimizaciju — sa manjim volumenima, algoritam fluktuira jer nema dovoljno podataka. Posle 60–90 dana sa 30+ konverzija mesečno, prelazite na Maximize Conversions sa target CPA cap-om. Tek posle 6 meseci solidnih podataka razmišljajte o tROAS ako je to relevantno za vaš model.
          </div>
        </details>
      </div>

      <hr />

      <h2>Izvori i dodatno čitanje</h2>

      <ul>
        <li>
          <a
            href="https://gs.statcounter.com/search-engine-market-share"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            StatCounter GlobalStats — Search Engine Market Share (april 2026)
          </a>
        </li>
        <li>
          <a
            href="https://about.ads.microsoft.com/en-us/resources/microsoft-advertising-audience"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Microsoft Advertising — Audience Profile Report
          </a>
        </li>
        <li>
          <a
            href="https://wordstream.com/google-ads-vs-bing-ads"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            WordStream — Google Ads vs Bing Ads CPC Benchmarks
          </a>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-vs-meta" } }}
            className="underline"
          >
            Google Ads vs Meta Ads: Šta je Bolje za Vaš Biznis?
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }}
            className="underline"
          >
            Performance Max: Kompletan Vodič za eCommerce [2026]
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }}
            className="underline"
          >
            Google Shopping Kampanje: Kompletan Vodič [2026]
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }}
            className="underline"
          >
            Koliko Košta Google Ads? Cene, Budžeti i ROI u Srbiji [2026]
          </Link>
        </li>
      </ul>
    </>
  );
}
