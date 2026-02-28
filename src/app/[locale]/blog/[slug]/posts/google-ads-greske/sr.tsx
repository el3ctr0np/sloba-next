import { Link } from "@/i18n/navigation";

export default function GoogleAdsGreskePost() {
  return (
    <>
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
          Ukratko
        </p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Auditujem Google Ads naloge već godinama. 80% naloga ima bar 3 od ovih grešaka — i svaka košta novac. Prosečno se 30% budžeta baca na ispravljive probleme. Evo 12 najčešćih grešaka koje vidim i kako da ih popravite.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              12
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Kritičnih grešaka</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              80%
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Naloga ima 3+</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              30%
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Budžeta se baca</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              100%
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Su popravljive</p>
          </div>
        </div>
      </div>

      <h2>Zašto su greške u Google Ads-u skupe</h2>
      <p>
        Kad god auditiram Google Ads nalog — bilo da je reč o lokalnoj firmi
        sa budžetom od €500 mesečno ili eCommerce-u sa €10,000+ spend-om —
        pronalazim iste greške iznova i iznova.
      </p>
      <p>
        Neke su očigledne čim otvorim nalog. Kampanje bez strukture, 500
        keywords u jednoj ad grupi, conversion tracking koji ne radi.
      </p>
      <p>
        Druge su suptilnije. Location targeting koji pušta saobraćaj iz
        gradova koje ne servirate. Negative keywords koje ne postoje. Search
        Terms koji nikad nisu pregledani.
      </p>
      <p>
        Svaka od ovih grešaka košta. Direktno kroz bačen budžet na
        nebitne klikove. Indirektno kroz propuštene konverzije i lošiji ROAS.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Najčešći pattern</p>
        <p className="text-blue-800 text-sm mb-0">
          Klijent troši €1,000 mesečno, ali €300 odlazi na klikove koji nikad
          neće konvertovati. Posle popravki, isti budžet donosi 40-60% više
          rezultata.
        </p>
      </div>

      <p>
        Evo 12 najčešćih Google Ads grešaka koje vidim u skoro svakom audit-u,
        grupisane po kategorijama.
      </p>

      <hr />

      <h2>Greške u strukturi naloga</h2>

      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Sve u jednoj kampanji — proizvodi, usluge, brand i non-brand keywords,
          sve pomešano
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Nemoguće je razumeti šta radi i šta ne radi. Ne možete optimizovati
          budžet kada je sve u jednom košu. <a href="https://support.google.com/google-ads/answer/6167118" target="_blank" rel="noopener noreferrer">Quality Score</a> pada jer oglasi ne
          mogu biti relevantni za sve.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Preporučujem restrukturiranje po logičnim
            celinama — brand kampanja odvojeno od non-brand, proizvodi po
            kategorijama, različiti ciljevi u različite kampanje. Tako dobijate
            čiste podatke i možete optimizovati svaki segment zasebno.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Loše imenovanje kampanja i ad grupa — "Kampanja 1", "Ad grupa test",
          bez strukture
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Posle 3 meseca više ne znate šta je šta. Optimizacija postaje
          pogađanje. Ne možete brzo pronaći kampanju kada treba da napravite
          promenu.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Umesto generičkih naziva, koristite jasnu
            konvenciju — npr. "SRB_Search_Brand_Proizvod-X" ili
            "HR_Shopping_Returning_Kategorija-Y". Uključite geografiju, tip
            kampanje i proizvod/segment u ime.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Mešanje Search i Display u istoj kampanji — Google defaultno uključuje
          Display Network
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Display ima potpuno drugačije karakteristike od Search-a. Niži CTR,
          drugačiji intent, druge metrike. Kada je sve pomešano, ne vidite gde
          vam odlazi budžet.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Odmah isključite Display Network iz
            Search kampanja (Campaign settings → Networks). Ako želite Display,
            kreirajte zasebne kampanje sa specifičnim targetingom i drugim
            budžetom.
          </p>
        </div>
      </div>

      <hr />

      <h2>Greške u ključnim rečima</h2>

      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Nema ili minimum negative keywords — plaćate za "besplatno", "posao",
          "kurs", "DIY"
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Google prikazuje vaše oglase za pretrage bez kupovne namere. 20-30%
          budžeta odlazi na klikove koji nikad neće konvertovati jer ljudi
          traže besplatna rešenja ili informacije.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Umesto čekanja da greške stave na račun,
            kreirajte starter liste odmah — dodajte "besplatno", "dzabe",
            "posao", "oglasi", "kurs", "kako da", "DIY" kao account-level
            negative liste. Detaljan vodič:{" "}
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }}
              className="underline text-green-900"
            >
              negativne ključne reči
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Previše široke match types — sve na Broad Match bez kontrole
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Broad match daje Google-u previše slobode da interpretira vaše
          keywords. Oglasi se prikazuju za totalno nebitne pretrage koje
          Google "misli" da su relevantne.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Preporučujem da za proven keywords (oni
            koji već konvertuju) pređete na Phrase ili Exact match. Broad match
            držite samo za discovery — i to sa jakom listom negativnih keywords
            i dovoljno konverzijskih podataka.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Nikad ne gledate Search Terms Report — ne znate za šta zapravo
          plaćate
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Search Terms Report pokazuje stvarne pretrage korisnika koje su
          pokrenule vaše oglase. Bez redovnog pregleda, plaćate za gomilu
          nebitnih stvari i propuštate nove dobre keywords.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Umesto ignorisanja, napravite nedeljni
            ritual — otvorite Search Terms za prethodnu nedelju, dodajte nebitne
            kao negative keywords, extractujte dobre termine kao nove positive
            keywords. 15 minuta nedeljno štedi 15-30% budžeta.
          </p>
        </div>
      </div>

      <hr />

      <h2>Greške u oglasima</h2>

      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Generic ad copy — "Kvalitet", "Najpovoljnije", "Brza dostava" kao i
          svi drugi
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Vaši oglasi su identični konkurentskim. Nema razloga da kliknu baš
          na vas. Niži CTR znači viši CPC i lošiji Ad Rank.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Umesto generičkih fraza, dodajte
            konkretne brojke ("98% pozitivnih recenzija"), unique benefits
            ("Besplatna montaža u Beogradu i Novom Sadu"), social proof
            ("1,000+ prodatih proizvoda"). Specifičnost prodaje.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Nema ad testiranja — samo jedan oglas po ad grupi
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Bez A/B testiranja ne znate da li možete bolje. Propuštate priliku
          da kontinuirano poboljšavate CTR i conversion rate kroz testove.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Preporučujem minimum 2-3 oglasa po ad
            grupi. Testirajte različite headlines (benefit vs feature), različite
            CTAs ("Poručite danas" vs "Saznajte više"), različite vrednosne
            ponude. Optimizujte za Conversions, ne za Clicks.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Nedostaju ad extensions — tekstualni oglas bez ekstenzija zauzima
          minimalan prostor
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Manji vizuelni footprint znači niži CTR. Ad Rank pada. Placate više
          po kliku. Extensions su besplatni i značajno poboljšavaju performanse.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Umesto praznih oglasa, dodajte minimum:
            4-6 sitelink-ova, 4+ callout-a, structured snippets (brendovi,
            kategorije, usluge), call extension ako imate telefon, location
            extension ako imate prodajno mesto.
          </p>
        </div>
      </div>

      <hr />

      <h2>Greške u merenju</h2>

      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Nema conversion tracking-a ili je pogrešno postavljen
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Ovo je fundamentalna greška. Bez pravilnog merenja konverzija,
          optimizujete na pogrešne metrike. Smart Bidding ne može da radi.
          Ne znate šta funkcioniše.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Umesto improvizovanja, pročitajte{" "}
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}
              className="underline text-green-900"
            >
              vodič za conversion tracking
            </Link>
            . Postavite pravilno: Conversion Linker tag u GTM (All Pages),
            konverzijske akcije definisane tačno, Enhanced Conversions aktivirane.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Trackujete pogrešne konverzije — page views, form view, "thank you"
          duplikati
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Suspiciously high conversion rates (20%+) ili konverzije koje ne
          odgovaraju stvarnim prodajama/lead-ovima. Google algoritam optimizuje
          na pogrešne akcije.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Preporučujem hijerarhiju: primarna
            konverzija = vredna akcija (purchase, qualified lead), sekundarne
            konverzije = micro-actions (add to cart, pricing view) ali sa
            "Secondary" označeno. Proverite da tag puca samo jednom po sesiji.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Greška
        </p>
        <p className="font-semibold mb-2">
          Ignorišete attribution model — koristite Last Click za dug sales cycle
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Last Click daje sav kredit poslednjem touchpoint-u. Ako imate B2B
          sa 30-60 dnevnim cyclom, kampanje koje stvaraju awareness ne
          dobijaju kredit. Rezultat: gašenje kampanja koje zapravo rade.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Umesto Last Click-a za sve, koristite
            Data-Driven attribution ako imate dovoljno podataka (400+ konverzija
            mesečno). Za kraći cycle (eCommerce), Last Click je OK. Za duži
            (B2B), Position-Based ili Data-Driven daju realniju sliku.
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Greške u merenju su najkritičnije. Ako ne merite pravilno, sve
          odluke su nagađanje. Pre nego što ispravite bilo šta drugo,
          popravite tracking.
        </p>
      </div>

      <hr />

      <h2>Kako napraviti akcioni plan za popravku</h2>

      <p>
        Pronašli ste više grešaka u vašem nalogu? Ne morate sve da popravite
        odjednom. Evo kako da prioritizujete:
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            1
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Popravite tracking prvo
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Bez pravilnog merenja konverzija, sve ostale odluke su nagađanje.
        </p>
        <ul className="text-sm">
          <li>Postavite conversion tracking pravilno</li>
          <li>Proverite da konverzije odgovaraju stvarnim akcijama</li>
          <li>Dodajte Enhanced Conversions</li>
          <li>Testirajte da sve radi (Google Tag Assistant)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            2
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Zaustavite curenje budžeta
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Odmah isečite najočiglednije izvore bačenog novca.
        </p>
        <ul className="text-sm">
          <li>Dodajte negative keywords (starter liste)</li>
          <li>Isključite Display Network iz Search kampanja</li>
          <li>Podesite location targeting na "People in" only</li>
          <li>Pregledajte Search Terms za prošlu nedelju</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            3
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Restrukturirajte nalog
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Kreirajte logičnu strukturu za buduće optimizacije.
        </p>
        <ul className="text-sm">
          <li>Razdvojite brand i non-brand kampanje</li>
          <li>Organizujte po proizvodima/uslugama/kategorijama</li>
          <li>Kreirajte jasne naming konvencije</li>
          <li>Proverite da nema duplicate keywords</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            4
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Poboljšajte oglase
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Viši CTR znači niži CPC i bolji Ad Rank.
        </p>
        <ul className="text-sm">
          <li>Dodajte sve relevantne ad extensions</li>
          <li>Kreirajte 2-3 oglasa po ad grupi za testiranje</li>
          <li>Unesite specifične brojke i unique benefits u copy</li>
          <li>Testirajte <a href="https://support.google.com/google-ads/answer/6167118" target="_blank" rel="noopener noreferrer">Quality Score</a> poboljšanja</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            5
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Optimizujte kontinuirano
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Optimizacija nije jednokratna aktivnost, već proces.
        </p>
        <ul className="text-sm">
          <li>Nedeljni Search Terms review</li>
          <li>Mesečni ad testing review i strukture provera</li>
          <li>Kvartalni kompletni audit</li>
          <li>
            Koristite{" "}
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }}
              className="underline text-gray-900"
            >
              Google Ads audit vodič
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Svaka greška koju popravite vraća 10-30% izgubljenog budžeta. Posle
          popravke svih 12, prosečan nalog dobija 50-70% bolje performanse sa
          istim budžetom.
        </p>
      </div>

      <hr />

      <h2>Često postavljana pitanja</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko ovih grešaka ima prosečan Google Ads nalog?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          U mojim audit-ima, 80% naloga ima minimum 3-5 od ovih grešaka. Nalozi
          kojima upravlja neko bez iskustva često imaju 8+. Čak i nalozi koje
          vode agencije ponekad imaju 2-3 fundamentalne greške (najčešće u
          tracking-u ili strukturi). Savršen nalog ne postoji, ali svaka
          popravljena greška direktno utiče na performanse.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koja greška ima najveći uticaj na rezultate?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Greške u merenju — absence ili pogrešan conversion tracking. Bez
          pravilnog merenja, sve odluke su nagađanje. Smart Bidding ne radi.
          Ne znate koja kampanja donosi rezultate. Druga najskuplja greška je
          nedostatak negative keywords — direktno troši 15-30% budžeta na
          nebitne klikove.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Mogu li sam da popravim ove greške ili mi treba ekspert?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Većinu možete sami — ove greške nisu tehnički kompleksne, samo zahtevaju
          vreme i pažnju. Preporučujem da pročitate povezane vodiče (conversion
          tracking, negative keywords, Quality Score) i radite korak po korak.
          Ako imate budžet €2,000+, ekspertska pomoć se često isplati jer
          možete da fokusirate vreme na biznis umesto na administraciju naloga.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko brzo se vide rezultati posle popravki?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Zavisi od greške. Negative keywords imaju instant efekat — čim ih
          dodate, prestajete da plaćate za te pretrage. Strukturalne promene
          (kampanje, ad grupe) trebaju 1-2 nedelje da se stabilizuju. Smart
          Bidding strategije trebaju 2-4 nedelje learning period-a. Generalno,
          očekujte jasnu sliku posle 30-45 dana. Ključ je da pratite metrike
          PRE i POSLE da znate da li promene funkcionišu.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Kako da znam da li moj nalog ima neku od ovih grešaka?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Napravite sistematski pregled: 1) Proverite da li imate conversion
          tracking postavljen i da brojevi odgovaraju stvarnosti, 2) Otvorite
          Search Terms Report za prošlu nedelju — da li vidite nebitne pretrage?
          3) Prebrojite negative keywords — ako imate manje od 50, sigurno currite
          budžet, 4) Pogledajte strukturu kampanja — da li možete lako da
          razumete šta je šta? Ako vam treba profesionalni audit,{" "}
          <Link href="/kontakt" className="underline text-gray-900">
            kontaktirajte me
          </Link>{" "}
          — detaljno pregledam nalog i dajem action plan sa prioritetima.
        </div>
      </details>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Trebate pomoć da popravite Google Ads nalog?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Profesionalni audit vašeg naloga sa detaljnom analizom grešaka,
          prioritizacijom i action planom za popravku. Analiza uključuje sve
          kampanje, keywords, tracking, strukturu i performanse.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/google-ads-audit" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads audit</p>
          <p className="text-xs text-gray-500 mb-0">Pronađite i ispravite greške u vašim kampanjama</p>
        </Link>
        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Conversion Tracking Vodič
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kako pravilno postaviti merenje konverzija u Google Ads-u
          </p>
        </Link>
        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }}
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Negative Keywords Strategija
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kako zaustaviti curenje budžeta kroz nebitne klikove
          </p>
        </Link>
        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }}
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Quality Score Optimizacija
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kako poboljšati Quality Score i smanjiti CPC
          </p>
        </Link>
        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }}
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Koliko Košta Google Ads
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Realni troškovi oglašavanja i kako planirati budžet
          </p>
        </Link>
      </div>

      <hr />

      <h2>Najčešća pitanja o Google Ads greškama</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koja je najskuplja greška u Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Nedostatak negativnih ključnih reči. Bez njih, vaš budžet se troši na irelevantne pretrage. Prosečan nalog bez negativnih ključnih reči baca 20-40% budžeta na neproduktivne klikove. Redovna analiza search terms report-a je obavezna.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li broad match ključne reči treba koristiti?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Broad match može raditi uz Smart Bidding i dovoljno konverzija (30+/mesečno). Ali za manje naloge, phrase match i exact match daju bolju kontrolu. Najčešća greška je korišćenje broad match-a bez negativnih ključnih reči — to je recept za bacanje novca.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko ad grupa treba imati po kampnji?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            5-20 ad grupa za većinu kampanja. Previše ad grupa (50+) otežava upravljanje i razređuje budžet. Premalo (1-2) znači lošu relevantnost. Svaka ad grupa treba imati tematski povezane ključne reči i odgovarajuće oglase.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto mi CTR opada iako ništa nisam menjao?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Najčešći razlozi: sezonalnost, novi konkurenti, ad fatigue (isti oglas predugo), promene u SERP layout-u, ili Quality Score pad. Rešenje: redovno osvežavajte oglase (svakih 4-6 nedelja), pratite Auction Insights i testirajte nove varijante.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li treba koristiti sve Google Ads preporuke?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Ne. Mnoge preporuke služe Googleu da poveća vašu potrošnju. Ignorirajte: &quot;prebacite na broad match&quot;, &quot;povećajte budžet za 50%&quot;, auto-apply promene. Koristite: RSA preporuke za oglase, preporuke za negativne ključne reči, i tehnička poboljšanja.
          </div>
        </details>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Februar 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}

