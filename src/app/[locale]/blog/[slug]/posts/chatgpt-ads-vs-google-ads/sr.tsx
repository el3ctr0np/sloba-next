import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function ChatGptAdsVsGoogleAdsPostSR() {
  return (
    <>
      <p>
        Vodim Google Ads naloge više od deset godina, a otkad je OpenAI u februaru 2026. pustio prve ChatGPT oglase, pratim svaku fazu širenja - self-serve Ads Manager u maju, oCPC u avgustu, ulazak u 31 evropsko tržište krajem avgusta. Poslednjih nedelja klijenti mi postavljaju isto pitanje na različite načine: da li ovo menja Google?
      </p>
      <p>
        Kratak odgovor je ne, ali ne na način na koji pitanje obično stigne. ChatGPT Ads nije novi Search - to je potpuno drugačiji trenutak u glavi korisnika, i to se vidi čim brojke stavite jednu pored druge. U ovom tekstu prolazim kroz tu razliku, kroz targeting koji ChatGPT nudi (i ono što ne nudi), kroz realne brojke iz nezavisnih testova sa stvarnim spendom, i kroz to kako bih budžetirao prvi test za klijenta koji već ozbiljno vodi Search.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google hvata upit koji je korisnik već formulisao - zna šta traži. ChatGPT kartica sedi ispod odgovora koji je razgovor već isporučio, pa je CTR 0,65-1,3% naspram Search proseka od 2-3% (dobre kampanje 5-10%) - to nije kvar formata, nego njegova priroda. Budžetiram ga kao inkrementalni discovery test sa istraživačkim budžetom, nikad kao zamenu za Search.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Upit vs odgovor</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">drugačiji trenutak kupovine</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0,65-1,3%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">ChatGPT CTR vs 2-3% Search prosek</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Dopuna</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">ne zamena za Search</p>
          </div>
        </div>
      </div>

      {/* -- Featured-snippet definition block -- */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8" id="istorija-izmena">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-700 mb-2 font-semibold">🔄 Živi vodič - istorija izmena</p>
        <p className="text-sm text-gray-600 mb-3">Ovaj vodič se ažurira kako se ChatGPT Ads menja. Šta je novo:</p>
        <ul className="text-sm text-gray-700 space-y-1 mb-0 list-disc pl-5">
          <li><strong>Septembar 2026:</strong> Prva verzija - poređenje trenutka kupovine, targeting mehanizma, realnih brojki i zrelosti merenja između ChatGPT Ads i Google Ads.</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Brzi odgovor
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Šta je ključna razlika između ChatGPT Ads i Google Ads?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          <strong>Google Ads</strong> hvata upit koji korisnik već ima u glavi - eksplicitnu nameru izraženu kroz pretragu. <strong>ChatGPT Ads</strong> se pojavljuje ispod odgovora koji je razgovor već isporučio, pa targetira kontekst razgovora umesto ključnih reči. To su dva alata za dva različita trenutka, ne dva konkurenta za isti budžet.
        </p>
      </div>

      <hr />
      {/* -- Sadržaj -- */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#trenutak" className="block py-1 text-base text-gray-700 hover:text-primary underline">Drugačiji trenutak kupovine</a></li>
          <li><a href="#targeting" className="block py-1 text-base text-gray-700 hover:text-primary underline">Targeting: ključne reči vs kontekst</a></li>
          <li><a href="#brojke" className="block py-1 text-base text-gray-700 hover:text-primary underline">Brojke jedna pored druge</a></li>
          <li><a href="#merenje" className="block py-1 text-base text-gray-700 hover:text-primary underline">Zrelost merenja</a></li>
          <li><a href="#kombinacija" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kako ih kombinovati</a></li>
          <li><a href="#pregled" className="block py-1 text-base text-gray-700 hover:text-primary underline">Google Ads vs ChatGPT Ads: pregled</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Često postavljana pitanja</a></li>
        </ol>
      </nav>

      <h2 id="trenutak">Drugačiji trenutak kupovine</h2>
      <p>
        Search kampanja hvata čoveka u trenutku kad je pitanje već artikulisano. Neko otkuca &quot;najbolji fotoaparat za putovanja do 500 evra&quot; - zna šta traži, poredi opcije, spreman je da vidi oglas kao jednu od tih opcija. Oglas stoji iznad ili pored organskih rezultata, u prostoru koji je korisnik navikao da skenira dok traži odgovor.
      </p>
      <p>
        ChatGPT razgovor ide drugim putem. Korisnik razmišlja naglas - &quot;koji fotoaparat da povedem na put, ne želim nešto glomazno&quot; - i dobija gotov, konkretan odgovor pre nego što je oglas uopšte u pitanju. Kartica se pojavljuje tek <strong>ispod kraja tog odgovora</strong>, jasno označena i vizuelno odvojena od razgovora. Pitanje je već rešeno u glavi korisnika u trenutku kad oglas stigne - kartica ne popunjava prazninu, nego se nadovezuje na zaključak koji je korisnik već prihvatio.
      </p>
      <p>
        Ovo važi samo za deo korisnika: oglase vide isključivo ulogovani Free i Go korisnici, ne i Plus/Pro/Business pretplatnici. Formati koje ChatGPT koristi - standardna tekst+slika kartica, product carousel sastavljen iz feed-a, dinamički CTA (Shop Now, Book Now, Learn More) koji platforma sama bira - svi su napravljeni da izgledaju kao nastavak odgovora, ne kao prekid. To je namerno dizajnersko rešenje, ne slučajnost, i direktno objašnjava zašto se ponašanje klika razlikuje od Search-a.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Zašto je ovo bitno pri budžetiranju</p>
        <p className="text-blue-800 text-base mb-0">Kad je pitanje već rešeno pre nego što se oglas pojavi, klik na karticu je manje &quot;treba mi rešenje&quot;, a više &quot;pokaži mi konkretnu opciju sada kad znam šta hoću&quot;. Niži procenat ljudi to uopšte primeti - i to nije problem targetinga, nego posledica formata.</p>
      </div>

      <hr />

      <h2 id="targeting">Targeting: ključne reči vs kontekst</h2>
      <p>
        U Google Ads-u gradite targeting na ključnim rečima i match tipovima, dodajete sloj publika (RLSA, in-market, custom intent) preko toga, i tačno znate koji upit je okinuo koji oglas. To je infrastruktura izgrađena godinama - precizna, merljiva, sa istorijom podataka po pojmu.
      </p>
      <p>
        ChatGPT radi na drugačijem principu. Na nivou ad grupe pišete <strong>context hints</strong> - slobodan opis tema i razgovora za koje želite da se oglas pojavi. To nisu ključne reči u exact-match smislu i ne garantuju isporuku - OpenAI-jev sistem procenjuje kontekst i nameru <em>tekućeg</em> razgovora, plus naslov, tekst i landing oglasa, plus grubu lokaciju i jezik. Uz uključenu personalizaciju (gde je dostupna) ulaze i prošli razgovori i memorija.
      </p>
      <p>Šta možete da kontrolišete van context hints-a:</p>
      <ul>
        <li><strong>Geo</strong> - zemlja svuda, u SAD i na nivou states/DMA/ZIP</li>
        <li><strong>Platforma</strong> - iOS, Android, web</li>
        <li><strong>Custom audiences</strong> - upload email/telefon liste (SHA-256 heš), minimum 25.000 upoređenih korisnika, sa inclusion/exclusion i bid multiplierom</li>
      </ul>
      <p>Šta ChatGPT nema, a Google ima:</p>
      <ul>
        <li>Demografski targeting</li>
        <li>Site-visitor retargeting (samo custom audience upload, ne automatski pixel-based remarketing)</li>
        <li>Query-level izveštavanje - ne vidite koji konkretan prompt je okinuo oglas</li>
      </ul>
      <p>
        Za evropske klijente vredi znati posebno: u EEA i Švajcarskoj <strong>personalizovani oglasi nisu inicijalno dostupni</strong>. Izbor oglasa se oslanja samo na tekući razgovor, grubu lokaciju i jezik - bez memorije, prošlih razgovora i istorije interakcija sa oglasima. Praktično to znači da za evropski nalog context hints i kreativa nose skoro ceo teret, jer se nemate na šta drugo osloniti.
      </p>

      <hr />

      <h2 id="brojke">Brojke jedna pored druge</h2>
      <p>
        Ovde je deo gde tržište najviše laže samo sebe. Iznosim samo brojke koje imaju imenilac i datum - bez anonimnih &quot;X% rasta&quot; tvrdnji koje ne mogu da se provere.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Metrika</th>
              <th className="py-3 px-3 font-heading font-semibold">Google Search</th>
              <th className="py-3 px-3 font-heading font-semibold">ChatGPT Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">CTR</td>
              <td className="py-3 px-3">Prosek 2-3%, dobre kampanje 5-10%</td>
              <td className="py-3 px-3">0,65-1,3% (nezavisni testovi)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">CPC</td>
              <td className="py-3 px-3">Zavisi od niše i konkurencije</td>
              <td className="py-3 px-3">Preporučeno $3-5, realno $1,72-12</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Konverzije</td>
              <td className="py-3 px-3">Zreo ekosistem, godine optimizacije</td>
              <td className="py-3 px-3">Rani testovi, često nula pre avgusta</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Konkretni izvori iza ChatGPT kolone, svaki sa imeniocem: <strong>Choice OMG</strong> (CA$415, 17 dana) - CTR 0,65%, CPC CA$7,16, nula konverzija. <strong>SE Ranking</strong> self-test (avgust 2026) - preko 97.000 impresija, 1.263 klika, CTR 1,30%, &quot;vrlo malo signup-ova&quot;. <strong>Opascope</strong> (~$60.000, 15 dana, jun) - 1,49x blended ROAS, CPC ~$1,72, CVR 2,35%, dnevni ROAS je oscilovao 0,2x-2,9x. <strong>Symphonic</strong> (~$500, avgust) - $3 bid nije doneo nijednu impresiju, trebalo je ~$12 max bid da bi se realizovao CPC od ~$9, i dalje nula leadova. <strong>Out of the Box</strong> ($675, jul-avgust) - ~$3,50 CPC, nula kvalifikovanih leadova.
      </p>
      <p>
        OpenAI sa svoje strane navodi anonimne brojke - &quot;jedan eCommerce oglašivač, 3x ROAS za 28 dana&quot; - bez imena oglašivača i bez nezavisne provere. Tretiram ih kao izjavu, ne kao dokaz.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Zašto ovo nije poraz za ChatGPT Ads</p>
        <p className="text-yellow-800 text-base mb-0">Većina nula-konverzija izveštaja je iz kampanja pokrenutih pre avgusta 2026 - pre nego što su oCPC, OAIQ Pixel i Conversions API stigli do zrelosti. Rani rezultati verovatno potcenjuju sadašnju sposobnost platforme, ali to ne menja činjenicu da CTR ostaje strukturno nizak zbog formata, ne zbog nezrelosti alata.</p>
      </div>

      <hr />

      <h2 id="merenje">Zrelost merenja</h2>
      <p>
        Google Ads meri konverzije 15 i više godina, sa GA4 integracijom, istorijom oCPC i tROAS podešavanja, i alatima koji su prošli kroz decenije iteracija. Kad nešto ne štima u izveštaju, obično znate gde da tražite uzrok.
      </p>
      <p>
        ChatGPT Ads meri konverzije tek od maja 2026, kroz OAIQ (OpenAI Measurement Pixel) i Conversions API server-side. Nema native GA4 integracije - saobraćaj sa ChatGPT kartice stiže na sajt kao običan referral, ne kao posebno obeležen izvor. UTM parametri prolaze na kliku, što pomaže, ali ne zamenjuje pravu integraciju.
      </p>
      <p>
        Najveća praktičarska pritužba je <strong>klik-diskrepanca</strong> - Ads Manager prijavljuje značajno više klikova nego što analitika na sajtu vidi. Imenovane agencije (MediaPost, 28.8.2026): Cleverly 57 prijavljenih klikova naspram manje od 20 verifikovanih sesija; Symphonic 53 naspram 35 (34% jaz); Out of the Box je od ~140 prijavljenih klikova verifikovao 13% u julu i 68% u avgustu; jedan slučaj 120 naspram 8. Uzrok <strong>nije utvrđen</strong> - ne pišem &quot;prevara&quot; ili &quot;duplo brojanje&quot; jer za to nema dokaza, samo konstatujem da jaz postoji i da se smanjuje kako se merenje popravlja.
      </p>
      <p>
        Praktična posledica: dok se merenje ne stabilizuje, GA4 sesije i konverzije na sajtu su izvor istine za ChatGPT kampanju, ne brojevi u Ads Manageru.
      </p>

      <hr />

      <h2 id="kombinacija">Kako ih kombinovati</h2>
      <p>
        Search ostaje temelj jer hvata tražnju koja već postoji - neko je artikulisao potrebu i traži rešenje. Tu se dešava najveći deo konverzija i tu ostaje najveći deo budžeta, bez rasprave.
      </p>
      <p>
        ChatGPT Ads tretiram kao <strong>discovery test sa istraživačkim budžetom</strong>, ne kao paralelan kanal koji raste linearno sa Search-om: mali, jasno omeđen budžet, praćenje GA4 sesija umesto Ads Manager brojeva, odluka o skaliranju tek posle nekoliko nedelja realnih podataka.
      </p>
      <p>
        Jedan most vredi posebno naglasiti: ChatGPT nema site-visitor retargeting, samo custom audience upload zasnovan na vašoj postojećoj listi. To znači da posetioca koji klikne sa ChatGPT kartice i ode bez konverzije - <strong>gubite iz ChatGPT ekosistema</strong>. Taj posetilac se ne vraća kroz ChatGPT remarketing, jer ta funkcija ne postoji. Hvatate ga svojim <GlossaryLink slug="remarketing">remarketingom</GlossaryLink> na Google strani - GA4 audience, Google Ads remarketing lista, standardna postavka koju verovatno već imate. Detaljnije o tome kako se te liste grade je u <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="underline">remarketing vodiču</Link>.
      </p>

      <hr />

      <h2 id="pregled">Google Ads vs ChatGPT Ads: pregled</h2>
      <p>Sabijeno na jednu tabelu, ovako se dva kanala razlikuju po dimenzijama koje su bitne pri odluci gde ide budžet.</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Dimenzija</th>
              <th className="py-3 px-3 font-heading font-semibold">Google Ads (Search)</th>
              <th className="py-3 px-3 font-heading font-semibold">ChatGPT Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Trenutak korisnika</td>
              <td className="py-3 px-3">Formirana namera, aktivna pretraga</td>
              <td className="py-3 px-3">Razmišljanje naglas, pitanje već rešeno kad oglas stigne</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Mehanizam targetiranja</td>
              <td className="py-3 px-3">Ključne reči, match tipovi, publike</td>
              <td className="py-3 px-3">Context hints, geo, custom audiences</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Format</td>
              <td className="py-3 px-3">Tekstualni oglas iznad/pored rezultata</td>
              <td className="py-3 px-3">Kartica ispod gotovog odgovora</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Zrelost merenja</td>
              <td className="py-3 px-3">15+ godina, GA4 integracija</td>
              <td className="py-3 px-3">Od maja 2026, bez GA4 integracije</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Konkurencija za pažnju</td>
              <td className="py-3 px-3">Deli prostor sa organskim rezultatima</td>
              <td className="py-3 px-3">Jedan ili više ad unit-a po odgovoru, bez SERP-a</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Za šta je najbolji</td>
              <td className="py-3 px-3">Zatvaranje tražnje koja već postoji</td>
              <td className="py-3 px-3">Inkrementalni discovery test uz Search</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="faq">Često postavljana pitanja</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li ChatGPT Ads zamenjuju Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Ne. Google Search hvata tražnju koja već postoji, i za većinu naloga koje vodim to je i dalje kanal koji nosi najveći deo konverzija. ChatGPT Ads targetira potpuno drugačiji trenutak - korisnika čije je pitanje već rešeno gotovim odgovorom. Tretiram ga kao dodatak, ne zamenu, i budžet za Search ne diram dok se ChatGPT test ne pokaže.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliki budžet za prvi test?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Tretiram ga kao istraživački trošak, ne kao kampanju sa garantovanim povratom - budžet dovoljno mali da gubitak ne boli, dovoljno velik da se prikupi nekoliko nedelja podataka o klikovima i sesijama. Minimum spend istorijski ne postoji (ukinut u maju 2026), ali za smislen zaključak i dalje treba prostora da algoritam prođe kroz learning fazu.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto je CTR toliko niži nego na Search-u?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Zato što oglas stiže posle odgovora, ne pre njega. Na Search-u je oglas deo procesa traženja rešenja - korisnik ga vidi dok još odlučuje. Na ChatGPT-ju je odgovor već isporučen, pitanje je zatvoreno u glavi korisnika, i kartica ispod odgovora traži dodatni korak pažnje koji nije nužan da bi korisnik dobio ono zbog čega je došao. Nezavisni testovi konvergiraju na 0,65-1,3%, i to se ponavlja kroz više izvora - nije greška u podešavanju kampanje.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Mogu li da vodim oba kanala istovremeno?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Da, i to je uobičajen setup za naloge koji su već prošli osnovnu Search fazu. Preduslov je da imate GA4 postavljen i da pratite sesije nezavisno od Ads Manager izveštaja - zbog klik-diskrepance opisane gore, brojevi unutar ChatGPT platforme sami po sebi nisu dovoljan signal za odluku o budžetu. Ako GA4 nije čist, prvo to sredite, na bilo kom kanalu.
          </div>
        </details>
      </div>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Razmišljate o ChatGPT Ads pored postojećeg Google naloga?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">Pomažem klijentima da postave prvi test sa čistim merenjem - GA4 kao izvor istine, budžet kao istraživanje, ne kao obećanje. Zakažite besplatnu konsultaciju da vidimo da li je vaš nalog spreman.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Zakažite besplatnu konsultaciju</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">ChatGPT Ads vodič - sve što treba da znate</p>
          <p className="text-xs text-gray-500 mb-0">Kompletan pregled formata, targetinga, cena i pravila oglašavanja.</p>
        </Link>
        <Link href="/usluge/chatgpt-ads" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">ChatGPT Ads usluga</p>
          <p className="text-xs text-gray-500 mb-0">Kako vodim prvi test i šta dobijate u ponudi.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-vs-meta" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads vs Meta Ads</p>
          <p className="text-xs text-gray-500 mb-0">Isti princip poređenja kanala, primenjen na Search i Meta.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako hvatate posetioce koji odu bez konverzije, uključujući one sa ChatGPT-ja.</p>
        </Link>
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
