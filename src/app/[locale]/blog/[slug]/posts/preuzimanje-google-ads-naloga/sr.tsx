import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function PreuzimanjeGoogleAdsNalogaPost() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Pre nego što raskinete sa agencijom, obezbedite tri stvari: nalog mora biti u vašem vlasništvu, morate imati admin pristup, i morate izvesti kompletnu istoriju. Prva nedelja posle preuzimanja je dijagnostika — ne dirajte ništa dok ne znate šta zapravo radi.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">stvari pre raskida</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">dana dijagnostike</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">naglih promena u nedelji 1</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">100%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">vlasništvo naloga = obavezno</p>
          </div>
        </div>
      </div>

      {/* ── Sadržaj ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#zasto-je-preuzimanje-naloga-osetljiv-trenutak" className="block py-1 text-base text-gray-700 hover:text-primary underline">Zašto je preuzimanje naloga osetljiv trenutak</a></li>
          <li><a href="#pre-prekida-checklist-vlasnistva" className="block py-1 text-base text-gray-700 hover:text-primary underline">Pre prekida: checklist vlasništva</a></li>
          <li><a href="#dan-1-2-pristupi-i-snimak-stanja" className="block py-1 text-base text-gray-700 hover:text-primary underline">Dan 1-2: Pristupi i snimak stanja</a></li>
          <li><a href="#dan-3-4-tracking-forenzika" className="block py-1 text-base text-gray-700 hover:text-primary underline">Dan 3-4: Tracking forenzika</a></li>
          <li><a href="#dan-5-7-struktura-i-waste-sken" className="block py-1 text-base text-gray-700 hover:text-primary underline">Dan 5-7: Struktura i waste sken</a></li>
          <li><a href="#sta-ne-raditi-prve-nedelje" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta NE raditi prve nedelje</a></li>
          <li><a href="#kada-krenuti-od-nule-vs-naslediti-strukturu" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kada krenuti od nule vs naslediti strukturu</a></li>
          <li><a href="#najcesca-pitanja" className="block py-1 text-base text-gray-700 hover:text-primary underline">Najčešća pitanja</a></li>
        </ol>
      </nav>

      <h2 id="zasto-je-preuzimanje-naloga-osetljiv-trenutak">Zašto je preuzimanje naloga osetljiv trenutak</h2>
      <p>
        Ako ste stigli na ovaj tekst, verovatno ste nezadovoljni trenutnom agencijom ili freelancerom i razmišljate o promeni. Nemam nameru da vam pljujem po prethodnom partneru — u praksi je razlog raskida često kombinacija loše komunikacije, nedostatka transparentnosti i realnih rezultata koji ne opravdavaju cenu. To je legitiman razlog za promenu.
      </p>
      <p>
        Ali preuzimanje naloga je tehnički i pravno osetljiv trenutak, i tu se prave skupe greške. Video sam vlasnike firmi koji su izgubili godinama akumuliranu istoriju konverzija jer je agencija napravila nalog na svom Google nalogu &quot;radi lakšeg upravljanja&quot;. Video sam klijente koji su čekali mesecima da im neko preda pristup GTM kontejneru. Video sam i firme koje su, u žurbi da nešto promene, ugasile kampanju koja je tiho generisala 80% njihovih leadova.
      </p>
      <p>
        Prvo pravilo preuzimanja: <strong>vlasništvo pre svega</strong>. Drugo pravilo: <strong>prva nedelja je dijagnostika, ne akcija</strong>. Ovaj vodič je logičan nastavak na <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }}>Google Ads audit vodič</Link> — tamo je opisano ŠTA proveriti u nalogu; ovde je fokus na REDOSLED i PRAVA koja morate obezbediti pre nego što uopšte počnete da menjate bilo šta.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Ko je ovo za</p>
        <p className="text-blue-800 text-base mb-0">
          Vlasnici firmi i marketing menadžeri koji menjaju agenciju ili freelancera i preuzimaju upravljanje Google Ads nalogom — bilo sami, bilo predajom novom partneru. Fokus je na prvih 7 dana posle preuzimanja pristupa.
        </p>
      </div>

      <hr />

      <h2 id="pre-prekida-checklist-vlasnistva">Pre prekida: checklist vlasništva</h2>
      <p>
        Najveća greška koju vidim: vlasnici raskinu ugovor sa agencijom PRE nego što provere ko je stvarni vlasnik naloga i svih povezanih sistema. Kada je odnos već narušen, dobijanje pristupa naknadno postaje mnogo teže — i sporije. Uradite ovu proveru dok je saradnja još korektna, čak i ako ste već odlučili da prekidate.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Šta proveriti</th>
              <th className="py-3 px-3 font-heading font-semibold">Gde</th>
              <th className="py-3 px-3 font-heading font-semibold">Crvena zastavica</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Vlasništvo Google Ads naloga</td>
              <td className="py-3 px-3">Admin (Tools & Settings → Access and security) — proverite da je vaš email Admin, ne samo &quot;Standard&quot; user</td>
              <td className="py-3 px-3">Nalog je kreiran pod agencijskim MCC-om i vi ste samo &quot;gost&quot; — u tom slučaju nalog tehnički nije vaš</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">MCC veza (Manager Account)</td>
              <td className="py-3 px-3">Account access → proverite koji MCC-ovi imaju link na vaš nalog</td>
              <td className="py-3 px-3">Agencijski MCC ostaje linkovan i posle raskida — mogu i dalje da vide podatke ili čak upravljaju nalogom</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Google Tag Manager</td>
              <td className="py-3 px-3">tagmanager.google.com → User Management na nivou kontejnera</td>
              <td className="py-3 px-3">Kontejner je kreiran na agencijskom Google nalogu — vi imate samo &quot;Edit&quot; ili &quot;Publish&quot;, ne i vlasništvo</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Google Analytics 4 (GA4)</td>
              <td className="py-3 px-3">Admin → Property Access Management</td>
              <td className="py-3 px-3">Vi niste Administrator na property nivou — bez toga ne možete menjati konverzije ni davati pristup novom partneru</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Google Merchant Center (eCommerce)</td>
              <td className="py-3 px-3">Settings → Account access</td>
              <td className="py-3 px-3">Feed je povezan preko agencijskog naloga; gubite feed konfiguraciju i istoriju odbijenih proizvoda ako se veza prekine naglo</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Kreative (RSA, slike, video)</td>
              <td className="py-3 px-3">Tražite export svih tekstova oglasa, slika i video fajlova u originalnom formatu (ne screenshot)</td>
              <td className="py-3 px-3">Agencija tvrdi da su kreative &quot;njihov intelektualni rad&quot; i odbija export — proverite ugovor, u praksi je ovo retko pravno održivo</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Izvoz istorije podataka</td>
              <td className="py-3 px-3">Change History (Google Ads) + GA4 podaci pre nego što se pristup ukine</td>
              <td className="py-3 px-3">Čekate raskid pa tek onda tražite izvoz — u tom trenutku agencija nema motiv da vam brzo pomogne</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Red flag: Ako vam agencija u bilo kom trenutku kaže &quot;nalog je otvoren kod nas, ne možemo vam dati Admin pristup&quot; — to je jasan signal da nalog tehnički nije vaš. Google-ova politika i najbolja praksa industrije nalažu da je krajnji klijent uvek vlasnik naloga (Admin), a agencija upravlja preko MCC linka koji se briše po raskidu.
        </p>
      </div>

      <p>
        Ako otkrijete da nešto od gore navedenog nije u vašem vlasništvu, to je prvi razgovor koji treba da obavite sa agencijom — pre potpisivanja bilo kakvog raskida. U većini slučajeva se ovo rešava u roku od nekoliko dana kada je odnos još profesionalan.
      </p>

      <hr />

      <h2 id="dan-1-2-pristupi-i-snimak-stanja">Dan 1-2: Pristupi i snimak stanja</h2>
      <p>
        Čim dobijete pristup nalogu (ili ga preuzmete kao Admin), prvi korak nije optimizacija — prvi korak je <strong>snimak trenutnog stanja</strong>. Bez ovoga nemate osnovu za poređenje i ne možete dokazati da li su vaše naknadne promene poboljšale ili pogoršale performanse.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Pročitajte Change History (istoriju izmena)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Google Ads čuva kompletnu istoriju izmena u nalogu (Tools & Settings → Change History). Ovo je najbrži način da vidite šta je agencija <em>zaista</em> radila u poslednjih 6-12 meseci — ne šta piše u mesečnom izveštaju, nego stvarne akcije.
        </p>
        <ul className="text-sm">
          <li><strong>Filtrirajte po datumu</strong> — pogledajte poslednja 3 meseca detaljno, pa uzorak od 6-12 meseci unazad</li>
          <li><strong>Gledajte frekvenciju izmena</strong> — ako vidite duge periode (30+ dana) bez ijedne izmene, nalog je bio zapušten</li>
          <li><strong>Proverite tip izmena</strong> — da li su to bid adjustments i negative keywords (aktivna optimizacija) ili samo budget changes (pasivno održavanje)?</li>
          <li><strong>Uporedite sa fakturama</strong> — ako ste plaćali za &quot;weekly optimization&quot; a Change History pokazuje izmene svaka 2-3 meseca, to je konkretan dokaz neusklađenosti sa dogovorom</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Snimite baseline metrike (screenshot + export)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Pre nego što promenite bilo šta, eksportujte poslednjih 90 dana podataka na nivou naloga, kampanje i ad grupe: trošak, konverzije, CPA, <GlossaryLink slug="roas">ROAS</GlossaryLink>, <GlossaryLink slug="ctr">CTR</GlossaryLink>. Ovo je vaš &quot;dan 0&quot; — bez njega ne možete meriti impact svojih promena za mesec dana.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Mapirajte ko sve ima pristup</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Proverite Access and security na svim nalozima (Google Ads, GA4, GTM, Merchant Center). Uklonite pristup bivšoj agenciji tek KADA ste sigurni da vam ništa više ne treba od njih (izvoz istorije, objašnjenje neke odluke) — ne pre. Naglo uklanjanje pristupa pre nego što ste sigurni da imate sve što vam treba je čest izvor dodatnih problema.
        </p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Pro tip</p>
        <p className="text-yellow-800 text-base mb-0">
          Napravite jedan Google Sheet sa tri taba: &quot;Pristupi&quot; (ko šta ima), &quot;Baseline metrike&quot; (dan 0 brojevi), &quot;Change History nalazi&quot; (šta ste otkrili u istoriji izmena). Ovo vam služi i kao dokumentacija ako kasnije treba da opravdate odluke pred vlasnikom firme ili novim timom.
        </p>
      </div>

      <hr />

      <h2 id="dan-3-4-tracking-forenzika">Dan 3-4: Tracking forenzika</h2>
      <p>
        Ovo je najkritičniji deo prve nedelje. Ako conversion tracking ne radi kako treba, sve odluke koje donesete u narednim nedeljama su bazirane na pogrešnim podacima — bez obzira koliko je struktura naloga dobra ili loša.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Proverite duplirane konverzije</strong> <span className="text-gray-500">— Uporedite Google Ads konverzije sa GA4 i CRM-om za isti period. Razlika veća od 15-20% znači da nešto duplo broji ili nešto uopšte ne broji</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Testirajte tag-ove uživo</strong> <span className="text-gray-500">— Prođite kroz konverzioni put sami (kupovina, submit forme) uz Google Tag Assistant ili GTM Preview mode. Vidite da li tag zaista fire-uje i kada</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Proverite datum poslednjeg importa/izmene taga</strong> <span className="text-gray-500">— GTM Version history pokazuje kad je poslednji put objavljena verzija. Ako je to bilo pre 6+ meseci, a sajt je u međuvremenu redizajniran, tagovi verovatno prate stare elemente koji više ne postoje</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Tražite mrtve tagove</strong> <span className="text-gray-500">— GTM Preview mode na svakoj ključnoj stranici (thank-you page, cart, forma). Tag koji se ne pojavljuje u dataLayer-u je mrtav — verovatno prati element koji je uklonjen ili preimenovan</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Proverite Primary conversion actions</strong> <span className="text-gray-500">— Google Ads → Goals → Conversions: koje akcije su označene kao &quot;Primary&quot; i da li se koriste za optimizaciju bidding strategije? Često nalazim da su i micro-konverzije (npr. &quot;Add to cart&quot;) greškom postavljene kao primary uz pravu konverziju, pa algoritam optimizuje na pogrešnom signalu</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Proverite Enhanced Conversions status</strong> <span className="text-gray-500">— Ako nije aktivan, to je propuštena prilika za bolji attribution posle iOS/privacy promena, ali nije razlog za paniku — dodajte ga posle prve nedelje</span></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Red flag: Ako otkrijete da Google Ads pokazuje 3x više konverzija od stvarnih prodaja u CRM-u, ne brišite ništa odmah. Prvo identifikujte tačan uzrok (duplo tag-ovanje, pogrešan attribution window, testni submit-ovi koji se broje), zatim ispravite, pa onda sačekajte 30 dana čistih podataka pre nego što donosite zaključke o performansama kampanja.
        </p>
      </div>

      <p>
        Za detaljan vodič kako postaviti i troubleshoot-ovati conversion tracking: <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}>Conversion Tracking za Google Ads</Link>.
      </p>

      <hr />

      <h2 id="dan-5-7-struktura-i-waste-sken">Dan 5-7: Struktura i waste sken</h2>
      <p>
        Sada kada znate da li tracking radi, možete pouzdano analizirati strukturu naloga i tražiti gde curi budžet. Ovo je poslednji korak dijagnostike pre nego što predložite bilo kakav akcioni plan.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Search Terms Report (90 dana)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Sortirajte po trošku i pregledajte top 50-100 search terms. Ovo je najbrži način da vidite da li se budžet troši na relevantne upite ili je <GlossaryLink slug="broad-match">broad match</GlossaryLink> bez discipline negativnih ključnih reči puštao novac na nepovezane pretrage mesecima.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Zombi kampanje</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Tražite kampanje koje su aktivne ali imaju zanemarljiv trošak i nula konverzija u poslednjih 60-90 dana — obično zaostatak iz starijih testova koji nikad nisu zaustavljeni. Takođe proverite kampanje koje troše punim budžetom bez ijedne konverzije: to je aktivan wasted spend, ne pasivni zaostatak.
        </p>
        <ul className="text-sm">
          <li><strong>Pauzirane vs zaboravljene</strong> — Razlikujte kampanje koje je agencija svesno pauzirala od onih koje su ostale &quot;Enabled&quot; a niko ih ne prati</li>
          <li><strong>Poslednja izmena po kampanji</strong> — Dodajte kolonu u Change History filter po kampanji; kampanja bez izmene 6+ meseci a sa aktivnim trošenjem je crvena zastavica</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Brand vs non-brand mešanje</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Ovo je čest &quot;trik&quot; koji naduvava rezultate: brand i non-brand keywords u istoj kampanji ili ad grupi. Brand traffic (ljudi koji već znaju vaš brend) konvertuje mnogo bolje i jeftinije, pa kada su pomešani sa non-brand terms, prosečan CPA izgleda bolje nego što je realni non-brand performance.
        </p>
        <ul className="text-sm">
          <li><strong>Razdvojite izveštaj</strong> — Filtrirajte Search Terms Report po brend nazivu da vidite koliki procenat trafika i konverzija dolazi isključivo od brand pretraga</li>
          <li><strong>Realan non-brand CPA</strong> — Tek kada izdvojite brand, vidite da li non-brand kampanje zaista donose profitabilne rezultate</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Preporuka</p>
        <p className="text-blue-800 text-base mb-0">
          Za kompletnu i strukturiranu listu od 80+ tačaka za proveru (Quality Score, bidding strategija, budžet alokacija, ekstenzije, publike), pređite na pun <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }}>Google Ads audit vodič</Link> nakon što završite ovu prvu nedelju dijagnostike. Ovih 7 dana vam daju kontekst; audit vodič vam daje sistematičnost.
        </p>
      </div>

      <hr />

      <h2 id="sta-ne-raditi-prve-nedelje">Šta NE raditi prve nedelje</h2>
      <p>
        Instinkt novog vlasnika ili novog partnera je da odmah &quot;popravi&quot; sve što izgleda sumnjivo. Taj instinkt je opasan u prvoj nedelji — evo zašto i šta raditi umesto toga.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Gašenje kampanja koje &quot;izgledaju loše&quot; na prvi pogled, bez dijagnoze konteksta</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Zašto je opasno:</strong> Kampanja sa naizgled visokim CPA može biti u fazi učenja, ili može voditi konverzije koje se sporo evidentiraju u CRM-u (B2B sales cycle). Prvo dijagnostikujte razlog lošeg izgleda, tek onda odlučujte o gašenju.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Resetovanje Smart Bidding strategije ili menjanje target CPA/ROAS odmah</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Zašto je opasno:</strong> Svaka značajnija promena bidding strategije ili targeta pokreće novi learning period (7-14 dana minimum) tokom kojeg su performanse nestabilne. Ako to uradite prve nedelje, nemate čist baseline za poređenje i dodatno otežavate sopstvenu dijagnostiku.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Panične izmene budžeta (drastično povećanje ili smanjenje) pre nego što razumete zašto je budžet bio takav</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Zašto je opasno:</strong> Nagli skok budžeta može poremetiti Smart Bidding algoritam koji je navikao na određeni dnevni obim. Sačekajte da završite tracking forenziku i waste sken — tek onda realokacija budžeta ima smisla i merljiv efekat.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Brisanje &quot;čudnih&quot; postavki bez razumevanja zašto su tu postavljene</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Zašto je opasno:</strong> Neka rešenja koja izgledaju čudno (npr. specifičan ad schedule, neobičan device bid adjustment) mogu biti rezultat prethodnog testiranja sa razlogom koji nije dokumentovan, ali jeste stvaran. Ako niste sigurni zašto nešto postoji, prvo proverite Change History pre brisanja.</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Pravilo prve nedelje</p>
        <p className="text-yellow-800 text-base mb-0">
          Dijagnoza pre akcije. Sve što otkrijete u prvih 7 dana beležite u dokument sa prioritetima (hitno / ovaj mesec / dugoročno) — implementaciju radite tek posle, korak po korak, sa 1-2 nedelje razmaka između promena da biste merili efekat svake pojedinačno.
        </p>
      </div>

      <hr />

      <h2 id="kada-krenuti-od-nule-vs-naslediti-strukturu">Kada je bolje krenuti od nule vs naslediti strukturu</h2>
      <p>
        Posle prve nedelje dijagnostike, imate dovoljno informacija da odgovorite na ključno pitanje: da li se struktura naloga može popraviti, ili je jeftinije i brže krenuti ispočetka?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Zadržite</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Nasledite strukturu ako...</h3>
          <p className="text-base text-gray-600 mb-0">
            Conversion tracking je fundamentalno ispravan (možda uz manje ispravke). Nalog ima 6+ meseci istorije konverzija koja se slaže sa CRM-om. Kampanje imaju dovoljno podataka da Smart Bidding uči efikasno (30+ konverzija mesečno). Brand kampanje imaju dobru istoriju Quality Score-a koja bi se izgubila restartom. Problemi su lokalizovani (par kampanja, ne cela struktura).
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Restartujte</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Krenite od nule ako...</h3>
          <p className="text-base text-gray-600 mb-0">
            Conversion tracking je toliko iskrivljen da ne možete verovati ni jednom istorijskom broju. Struktura je toliko haotična (brand/non-brand pomešano svuda, stotine ad grupa bez logike) da je restrukturiranje sporije od novog starta. Nalog ima account-level suspend/warning istoriju koja je bolje da &quot;počne ispočetka&quot; sa čistom politikom. Biznis model se suštinski promenio (novi proizvodi, novo tržište) pa stara struktura više nema smisla.
          </p>
        </div>
      </div>

      <p>
        U praksi, retko je potrebno brisati ceo nalog — čak i kad je struktura loša, obično je brže restrukturirati postojeće kampanje nego graditi novi nalog i gubiti Quality Score istoriju i podatke za remarketing liste. Ali ako je conversion tracking neopravljivo pogrešan (npr. potpuno pogrešna implementacija koja je slala lažne podatke godinama), ponekad je čistije početi novu &quot;Conversions&quot; konfiguraciju i tretirati stare podatke samo kao orijentacioni kontekst, ne kao osnovu za odluke.
      </p>

      <hr />

      <h2 id="najcesca-pitanja">Najčešća pitanja</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li gubim istoriju naloga ako menjam agenciju?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Ne, ako je nalog u vašem vlasništvu (vi ste Admin, a ne agencija). Istorija konverzija, Quality Score, remarketing liste i Change History ostaju netaknuti kada se samo ukine MCC link ka agenciji. Istoriju gubite jedino ako je nalog tehnički kreiran i vlasnički pripada agenciji — što je tačno razlog zašto je vlasništvo prva stvar koju proveravate, pre raskida.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko traje primopredaja naloga?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Tehnički, promena pristupa (Admin dodela, uklanjanje MCC linka) traje minute do sati kada je nalog uredno vaš. Realna primopredaja — sa izvozom istorije, dokumentacijom šta je rađeno, i handoff pozivom sa prethodnim partnerom — obično traje 3-7 dana ako je odnos korektan. Ako agencija otežava proces, može potrajati 2-4 nedelje uz insistiranje i pozivanje na prava vlasnika (videti sledeće pitanje).</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta ako agencija neće da preda nalog?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Ovo je nažalost čest slučaj, i tu prava vlasnika jasno stoje na vašoj strani ako je nalog tehnički registrovan na vaše ime/firmu. Prvi korak: pismeni zahtev (email, ne samo poziv) sa rokom. Drugi korak: pozovite se na ugovor — većina profesionalnih ugovora eksplicitno navodi da klijent zadržava vlasništvo nad nalogom i podacima. Treći korak: ako je nalog kreiran pod agencijskim MCC-om bez vašeg admin pristupa od početka, Google podržava zahteve vlasnika biznisa za pristup preko Google Ads podrške uz dokaz vlasništva firme/domena. U krajnjem slučaju, ako agencija odbija saradnju, moguće je krenuti od novog naloga uz gubitak istorije — neprijatno, ali ne fatalno za budući rast.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li će performanse pasti tokom tranzicije?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Ako se tokom prve nedelje ne diraju kampanje (dijagnostika bez akcije, kako je opisano u ovom vodiču), performanse ostaju stabilne — Smart Bidding nastavlja da radi normalno bez obzira ko je Admin naloga. Pad performansi obično dolazi od nagle greške novog partnera: prerano gašenje kampanja, resetovanje bidding strategije, ili drastična promena budžeta pre nego što se razume kontekst. To je tačno razlog zašto ovaj vodič insistira na &quot;nedelja 1 = dijagnostika, ne akcija&quot;.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Ko treba da bude vlasnik Google Ads naloga?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Uvek klijent (vlasnik biznisa), nikad agencija. Ovo je standardna industrijska praksa i način na koji ja lično radim sa svakim klijentom: nalog se kreira na klijentovom Google nalogu (ili se klijent postavlja kao Admin ako nalog već postoji), a agencija dobija pristup preko MCC linka koji se jednostavno uklanja ako se saradnja završi. Isto važi za GA4, GTM i Merchant Center. Ovo štiti vas kao vlasnika biznisa — bez obzira sa kim radite danas, sutra menjate partnera bez drame oko vlasništva.</p>
          </div>
        </details>
      </div>

      <hr />

      <h2>Zaključak</h2>
      <p>
        Preuzimanje Google Ads naloga od druge agencije nije samo tehnički proces — to je prilika da postavite temelje ispravno za budućnost, bez obzira ko upravlja nalogom. Vlasništvo pre svega, dijagnostika pre akcije, i strpljenje u prvoj nedelji vas štite od skupih grešaka koje su lakše izbeći nego popraviti.
      </p>
      <p>
        Ako ste upravo preuzeli nalog i niste sigurni odakle da krenete, ili ako agencija otežava primopredaju, slobodno zakažite konsultaciju — prolazimo zajedno kroz pristupe, tracking i strukturu, i pravimo plan za prve 30 dana.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Preuzimate nalog i treba vam objektivna dijagnoza?</p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          Radim audit i primopredaju naloga za firme koje menjaju agenciju ili freelancera. Dobijate snimak stanja, tracking forenziku, i prioritizovan plan za prvih 30 dana — bez naglih promena koje ugrožavaju postojeće rezultate.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">Zakažite besplatnu konsultaciju</Link>
      </div>

      <hr />

      <h2>Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/google-ads-audit" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Profesionalni Google Ads audit</p>
          <p className="text-xs text-gray-500 mb-0">Detaljna analiza naloga sa akcionim planom</p>
        </Link>
        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads upravljanje</p>
          <p className="text-xs text-gray-500 mb-0">Profesionalno vođenje naloga posle primopredaje</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Audit vodič</p>
          <p className="text-xs text-gray-500 mb-0">80+ tačaka za kompletnu proveru naloga</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Najčešće Google Ads greške</p>
          <p className="text-xs text-gray-500 mb-0">20+ najčešćih grešaka i kako ih izbeći</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako postaviti i troubleshoot-ovati praćenje konverzija</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "zasto-nema-rezultata" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Zašto Google Ads ne donosi rezultate</p>
          <p className="text-xs text-gray-500 mb-0">8 najčešćih razloga i konkretna rešenja</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        <p className="mb-1"><strong>Autor:</strong> Slobodan Jelisavac, Google Ads Specialist</p>
        <p className="mb-0">Poslednje ažuriranje: Jul 2026</p>
      </div>
    </>
  );
}
