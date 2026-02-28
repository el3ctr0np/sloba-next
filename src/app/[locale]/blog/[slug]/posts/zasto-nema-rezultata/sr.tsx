import { Link } from "@/i18n/navigation";

export default function GoogleAdsNeDonosiRezultatePost() {
  return (
    <>
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
          Ukratko
        </p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Ako vaše Google Ads kampanje ne donose rezultate, razlog je skoro
          sigurno tehnički — i rešiv. Evo brzog izvoda za 90% slučajeva.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              8
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">
              najčešćih razloga
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              90%
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">
              problema je rešivo
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              2-4
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">
              nedelje dijagnoze
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              50%
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">
              dijagnoza = pola rešenja
            </p>
          </div>
        </div>
      </div>

      <h2>Razumem frustraciju — ali problem je rešiv</h2>
      <p>
        &quot;Google Ads nam ne radi.&quot; Ovu rečenicu čujem bar jednom
        nedeljno. Od vlasnika firmi koji su pokušali sami. Od marketing
        menadžera koji su angažovali agenciju. Od freelancera koji su preuzeli
        nalog od nekog drugog.
      </p>
      <p>
        I razumem frustraciju — uložili ste vreme, budžet, možda i novac za
        agenciju ili freelancera. A rezultat? Nula. Ili još gore: stalno
        prazno obećanje da će &quot;uskoro krenuti&quot;.
      </p>
      <p>
        Ali evo šta valja znati: <strong>problem nije u Google Ads-u</strong>.
        Google Ads radi za milione biznisa širom sveta. Problem je specifičan —
        i skoro uvek rešiv.
      </p>
      <p>
        Radim na Google Ads kampanjama 8+ godina. Video sam svaki scenario.
        Dobre kampanje koje su iznenada prestale da rade. Nove kampanje koje
        nikada nisu zaživele. Skupi setup-i od agencija koji su bili potpuno
        pogrešno konfigurisani.
      </p>
      <p>
        I u <strong>90% slučajeva</strong>, problem pripada jednoj od 8
        kategorija koje obrađujem u ovom vodiču. Za svaku dajem dijagnostiku i
        konkretno rešenje.
      </p>
      <p>
        Neki problemi možete popraviti sami za sat vremena. Za druge će vam
        trebati dodatno znanje. Ali svi su rešivi — i cilj ovog vodiča je da
        vam pokažem gde je problem i šta dalje.
      </p>

      <hr />

      <h2>Pre svega — proverite osnove</h2>
      <p>
        Pre nego što pređemo na dubinsku analizu, pet brzih provera koje su u
        80% slučajeva dovoljne da identifikujete problem.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              1
            </span>
            <div>
              <strong><a href="https://support.google.com/google-ads/answer/1722054" target="_blank" rel="noopener noreferrer">Conversion tracking</a> radi?</strong>{" "}
              <span className="text-gray-500">
                — Proverite Google Ads {"->"} Goals {"->"} Summary. Ako imate 0
                konverzija, ili konverzije koje ne odgovaraju stvarnosti,
                tracking nije ispravan. To je problem #1.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              2
            </span>
            <div>
              <strong>Koliko vremena ste dali kampanji?</strong>{" "}
              <span className="text-gray-500">
                — Ako je kampanja mlađa od 2 nedelje, to još nije dovoljno.
                Learning period za Google Ads je minimalno 2-4 nedelje. Sačekajte.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              3
            </span>
            <div>
              <strong>Da li je budžet dovoljan?</strong>{" "}
              <span className="text-gray-500">
                — Ako imate €10/dan budžet u industriji gde je CPC €5, dobijaćete
                2 klika dnevno. To nije dovoljno za konverzije. Realnost je da
                trebate minimum 10-15 konverzija mesečno za bilo kakvu optimizaciju.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              4
            </span>
            <div>
              <strong>Landing page je relevantan?</strong>{" "}
              <span className="text-gray-500">
                — Ako oglasi govore o &quot;servisu rashladnih uređaja&quot; a
                šaljete ljude na homepage gde je 10 različitih usluga, problem je
                tu. Landing page mora odgovarati oglasu.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              5
            </span>
            <div>
              <strong>Gde ste gledate performanse?</strong>{" "}
              <span className="text-gray-500">
                — Ako gledate samo Google Ads interface bez uvida u stvarne
                konverzije (prodaje, telefone, prijave), možda kampanja zapravo
                radi — samo ne na metrici koju gledate.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Ako vam je problem bio neki od gornjih — popravite to PRVO, pa tek onda
          nastavite sa analizom. Ne postoji smisao optimizovati kampanju ako
          osnove nisu na mestu.
        </p>
      </div>

      <hr />

      <h2>Osam razloga zašto kampanje ne rade</h2>
      <p>
        Ovo su najučestaliji razlozi zašto Google Ads kampanje ne donose
        rezultate — rangirani po učestalosti, ne po važnosti. Za svaki dajem
        opis problema i rešenje.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 1
        </p>
        <p className="font-semibold mb-2">
          Loš ili nepostojeći <a href="https://support.google.com/google-ads/answer/1722054" target="_blank" rel="noopener noreferrer">conversion tracking</a>
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Ne znate koliko konverzija imate. Smart Bidding ne donosi rezultate.
          Odluke donosite na osnovu &quot;osećaja&quot;. Google Ads pokazuje
          konverzije, ali brojke ne odgovaraju stvarnosti.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Postavite ispravan conversion tracking
            (preporuka je Google Tag Manager). Aktivirajte Enhanced Conversions.
            Proverite da svaka kampanja prati pravu conversion action. Testirajte
            tracking pre lansiranja kampanje.{" "}
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="underline">
              Detaljan vodič o conversion tracking-u
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 2
        </p>
        <p className="font-semibold mb-2">
          Slanje saobraćaja na homepage ili pogrešan landing page
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Visok bounce rate (70%+). Nizak conversion rate ({"{<"}1%). Ljudi dolaze
          ali brzo odlaze. Landing page ne govori o istoj temi kao oglas.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Kreirajte dedicirane landing pages za svaku
            kampanju ili ad grupu. Pravilo: ako oglas govori o X, landing page
            MORA da govori o X (message match). Jasna CTA, benefit-focused copy,
            social proof, i brz load time.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 3
        </p>
        <p className="font-semibold mb-2">Previše široke ključne reči</p>
        <p className="text-sm text-gray-600 mb-3">
          Visoki troškovi, malo konverzija. Search Terms report pun nebitnih
          pretraga. CPC je &quot;normalan&quot; ali ROI loš. Koristite samo Broad
          match.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Pređite na Phrase i Exact match za
            proven keywords. Broad match možete koristiti samo ako imate jak
            conversion tracking i dovoljno konverzija. Agresivna negative keyword
            strategija. Nedeljni Search Terms audit.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 4
        </p>
        <p className="font-semibold mb-2">Nedostatak negative keywords</p>
        <p className="text-sm text-gray-600 mb-3">
          Plaćate za &quot;besplatno&quot;, &quot;posao&quot;, &quot;kako&quot;
          pretrage. Search Terms report pokazuje non-buyer intent. Visoki troškovi
          bez konverzija. Imate manje od 50 negative keywords (premalo).
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Isključite informacione pretrage (kako, šta
            je, tutorial), job seekers (posao, karijera, plata), free seekers
            (besplatno, free, jeftino), i konkurenciju (ako ne želite da se
            prikazujete). Nedeljni audit i dodavanje novih. Cilj: 100+ negative
            keywords nakon prvog meseca.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 5
        </p>
        <p className="font-semibold mb-2">Loša struktura naloga</p>
        <p className="text-sm text-gray-600 mb-3">
          Sve u jednoj kampanji. 50+ keywords u jednoj ad grupi. Nemoguće razumeti
          šta funkcioniše. Brand i non-brand mešani. Research i high-intent u istoj
          kampanji.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Restrukturiranje po tematskim celinama.
            Idealno: 10-20 keywords po ad grupi, tematski povezani. Razdvojite:
            Brand vs Non-brand (obavezno), High intent vs Research, Products vs
            Services. Struktura treba da olakšava analizu i optimizaciju.{" "}
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="underline">
              Najčešće Google Ads greške
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 6
        </p>
        <p className="font-semibold mb-2">Nizak Quality Score</p>
        <p className="text-sm text-gray-600 mb-3">
          Quality Score ispod 5-6 za većinu keywords. Visok CPC za poziciju koju
          dobijate. Ad Rank problems — kampanja se retko prikazuje.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Quality Score ima 3 komponente — radite na
            svim. <strong>Za CTR:</strong> bolji ad copy, više relevantnih
            ekstenzija. <strong>Za Ad Relevance:</strong> keywords u headline,
            tighter ad groups. <strong>Za Landing Page:</strong> brži sajt,
            relevantni sadržaj, mobile-friendly. Cilj: QS 7+ za glavne keywords.{" "}
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }} className="underline">
              Quality Score vodič
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 7
        </p>
        <p className="font-semibold mb-2">Nerealna očekivanja (i premali budžet)</p>
        <p className="text-sm text-gray-600 mb-3">
          Budžet €300, očekivanja €30,000 revenue. &quot;Želimo rezultate za
          nedelju dana&quot;. Konstantno nezadovoljstvo bez jasnog razloga. Manje
          od 10-15 konverzija mesečno — nema dovoljno podataka za optimizaciju.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Postavite realistične KPI-jeve bazirane na
            matematici. Minimum 2-3 meseca za pravu evaluaciju. Budžet koji
            dozvoljava minimum 10-15 konverzija mesečno (Google preporučuje 30+,
            ali 10-15 je minimum za bilo kakve zaključke).{" "}
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="underline">
              Koliko košta Google Ads
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 8
        </p>
        <p className="font-semibold mb-2">Loši oglasi (ad copy)</p>
        <p className="text-sm text-gray-600 mb-3">
          Nizak CTR ({"{<"}2% za Search). Oglasi govore o vama, ne o korisniku.
          Nema diferencijacije od konkurencije. Isti tekst u svim oglasima, bez
          testiranja.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Benefit-focused copy (šta korisnik dobija,
            ne šta vi radite). Uključite keyword u headline. Jasna CTA (Pozovite,
            Kupite, Zakažite). Testirajte varijacije — minimum 2-3 oglasa po ad
            grupi, različiti approach-i. Pratite CTR i učite šta funkcioniše.
          </p>
        </div>
      </div>

      <hr />

      <h2>Dijagnostički vodič — kako identifikovati problem</h2>
      <p>
        Ako ne znate gde je problem, idite ovim redosledom. Ovo je framework koji
        koristim kad preuzimam novi nalog.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            1
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Proverite conversion tracking
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Da li znate koliko konverzija imate i odakle dolaze? Da li brojke
          odgovaraju stvarnosti?
        </p>
        <ul className="text-sm">
          <li>
            Ako NE — rešite tracking PRVO. Sve ostalo je gubitak vremena.
          </li>
          <li>
            Proverite: Google Ads {"->"} Goals {"->"} Summary + testirajte live
            konverziju
          </li>
          <li>
            Bonus: uporedite brojke iz Google Ads-a sa CRM-om ili eCommerce
            platformom
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            2
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Analizirajte Search Terms report
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Da li plaćate za relevantan saobraćaj? Proverite Google Ads {"->"}{" "}
          Insights &amp; Reports {"->"} Search Terms.
        </p>
        <ul className="text-sm">
          <li>
            Ako više od 30% pretraga nije relevantno — previše široke ključne
            reči + nedostatak negative keywords
          </li>
          <li>
            Sortirajte po Cost (najviši prvo) — gde odlazi najveći deo budžeta?
          </li>
          <li>
            Dodajte najbolje search terms kao eksplicitne ključne reči, najgore
            kao negative
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            3
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Proverite landing pages
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Da li šaljete ljude na relevantne stranice? Proverite Google Ads {"->"}{" "}
          Campaigns {"->"} Final URLs.
        </p>
        <ul className="text-sm">
          <li>
            Ako većina kampanja vodi na homepage — to je problem
          </li>
          <li>
            Testirajte sami: kliknite na oglas kao korisnik. Da li landing page
            govori o istoj temi? Da li je CTA jasna?
          </li>
          <li>
            Bounce rate preko 70% = pogrešan landing page ili spor sajt
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            4
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Quality Score audit
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Da li je QS iznad 6 za većinu keywords? Google Ads {"->"} Keywords{" "}
          {"->"} dodajte Quality Score kolonu.
        </p>
        <ul className="text-sm">
          <li>
            QS ispod 5 = previše skup saobraćaj — radite na CTR, relevantnosti,
            landing page-u
          </li>
          <li>
            Proverite komponente (Expected CTR, Ad Relevance, Landing Page
            Experience) — koja je najslabija?
          </li>
          <li>
            Često problem nije quality vec struktura — previše keywords u ad
            grupi
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            5
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Budžet i realnost
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Da li imate dovoljno data za optimizaciju? Proverite broj konverzija u
          poslednjih 30 dana.
        </p>
        <ul className="text-sm">
          <li>
            Manje od 10 konverzija mesečno = problem je premali budžet ili
            preskup CPC
          </li>
          <li>
            Izračunajte: CPC × Conversion Rate = koliko vas košta jedna
            konverzija? Da li je to profitabilno?
          </li>
          <li>
            Ako nije profitabilno ni sa dobrim campaign setup-om, Google Ads možda
            nije pravi kanal (još)
          </li>
        </ul>
      </div>

      <hr />

      <h2>Koliko vremena dati kampanji pre nego odustanete</h2>
      <p>
        Jedna od najčešćih greški je da se kampanja odustaje prerano. Evo
        realističkih timelinova po tipu kampanje.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">
                Tip kampanje
              </th>
              <th className="py-3 px-4 font-heading font-semibold">
                Learning period
              </th>
              <th className="py-3 px-4 font-heading font-semibold">
                Stabilne performanse
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Search (Manual CPC)</td>
              <td className="py-3 px-4">7-14 dana</td>
              <td className="py-3 px-4">2-4 nedelje</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">
                Search (Smart Bidding)
              </td>
              <td className="py-3 px-4">2-4 nedelje</td>
              <td className="py-3 px-4">6-8 nedelja</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Shopping</td>
              <td className="py-3 px-4">2-3 nedelje</td>
              <td className="py-3 px-4">4-6 nedelja</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">PMax</td>
              <td className="py-3 px-4">4-6 nedelja</td>
              <td className="py-3 px-4">8-12 nedelja</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Display/Video</td>
              <td className="py-3 px-4">3-4 nedelje</td>
              <td className="py-3 px-4">6-10 nedelja</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Learning period ne znači da ne smete ništa da dirate. Znači da
          performanse još nisu stabilne. Ali možete (i treba) da gledate Search
          Terms report, dodajete negative keywords, testira te različite landing
          pages. Samo nemojte menjati bidding strategiju ili budžet drastično.
        </p>
      </div>

      <hr />

      <h2>Kada potražiti pomoć</h2>
      <p>
        Neki problemi možete rešiti sami za sat vremena. Za druge vam treba
        dublje znanje. Evo kada ima smisla raditi sam, a kada angažovati
        eksperta.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            DIY pristup
          </p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">
            Radite sami ako...
          </h3>
          <p className="text-sm text-gray-600 mb-0">
            Imate jasnu dijagnozu (npr. nedostatak negative keywords). Problem je
            tehnički jednostavan (dodavanje keywords, promena landing page-a).
            Imate vreme da učite i eksperimentišete. Budžet je manji (ispod
            €500/mesec). Želite da razvijete interno znanje.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            Ekspertska pomoć
          </p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">
            Angažujte eksperta ako...
          </h3>
          <p className="text-sm text-gray-600 mb-0">
            Ne znate u čemu je problem (dijagnostika nejasna). Probali ste sve iz
            ovog vodiča i ne radi. Budžet je veći (preko €1,000/mesec) — greške
            vas koštaju. Nemate vremena za učenje — potrebni su vam rezultati
            brzo. Kampanje su kompleksne (multinacionalne, multilanguage, veliki
            inventar).
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Strategija</p>
        <p className="text-blue-800 text-sm mb-0">
          Ako niste sigurni — zakažite audit. Jedan dobar audit (1-2h
          freelancera ili agencije) će vam dati jasnu dijagnozu i akcioni plan.
          Onda možete odlučiti da li ćete raditi sami ili angažovati pomoć.{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="underline">
            Vodič za Google Ads audit
          </Link>
          .
        </p>
      </div>

      <hr />

      <h2>Često postavljana pitanja</h2>

      <details
        className="bg-white border-2 border-gray-200 rounded-xl group mb-3"
        open
      >
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko vremena treba da Google Ads počne da radi?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Zavisi od tipa kampanje. Za Search kampanje sa Manual CPC, prve
          konverzije možete videti za 7-14 dana. Za Smart Bidding (Target CPA,
          Target ROAS), learning period je 2-4 nedelje. Za PMax kampanje, čak 4-6
          nedelja. Ali stabilne, optimizovane rezultate možete očekivati tek
          nakon 2-3 meseca rada. Nemojte odustati pre toga — learning je deo
          procesa.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li je problem u agenciji/freelanceru?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Možda. Tražite transparentnost: pristup nalogu (Admin access),
          mesečne izveštaje sa jasnim metrikama, jasno objašnjenje akcija.
          Ako dobijate samo &quot;radimo na tome&quot; bez detalja, to je
          crvena zastava. Dobar partner će vam uvek moći objasniti šta radi i
          zašto. Ako niste zadovoljni, zatražite audit od nezavisne strane —
          često otkrije da problem nije u setup-u već u nečemu drugom (npr.
          landing page, ponuda).
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko budžeta treba da bude dovoljno?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Zavisi od industrije, CPC-a, i ciljeva. Ali pravilo palca: trebate
          minimum 10-15 konverzija mesečno da biste imali dovoljno podataka za
          bilo kakve zaključke. Ako je vaš CPA (cost per acquisition) €50, to
          znači minimum €500-750/mesec budžet. Google preporučuje 30+
          konverzija mesečno za Smart Bidding, ali i sa 10-15 možete početi
          optimizaciju. Ispod toga, kampanja nema dovoljno signala za učenje.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta ako konkurencija ima mnogo veći budžet?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Fokusirajte se na niše gde oni nisu jaki: long-tail keywords
          (specifičnije pretrage), geografski targeting (specifične
          lokacije), ad schedule (vremenski periodi kada konkurencija spava).
          Quality Score može značajno izjednačiti teren — QS 9 će vam dati
          bolju poziciju od QS 5 čak i sa manjim bid-om. Takođe, razmislite o
          manje očiglednim keywords — oni su često jeftiniji a konvertuju
          bolje jer su specifičniji.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li da odustanem od Google Ads?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Pre nego što odustanete, probajte audit od nezavisne strane. Svež
          pogled često otkrije probleme koje vi ne vidite (ili koji su vam
          zamaskirani ako radite sa agencijom koja ne radi dobro). Google Ads
          radi za milione biznisa — ali nije univerzalno rešenje. Ako
          stvarno nema potražnje za vašim proizvodom/uslugom, ili su margine
          premale za profitabilnost sa vašim CPC-om, onda je možda vreme za
          drugi kanal (SEO, social media, email marketing).
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Kampanja ne radi? Pronađimo problem zajedno
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Ako ste probali sve iz ovog vodiča i još uvek ne dobijate rezultate,
          zakažite besplatnu konsultaciju. Prolazimo kroz vaš nalog zajedno,
          identifikujemo problem, i dogovaramo dalje korake.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/konsultacije" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">1-na-1 konsultacije</p>
          <p className="text-xs text-gray-500 mb-0">Analizirajmo zajedno zašto vaše kampanje ne rade</p>
        </Link>

        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Conversion Tracking Vodič
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kako postaviti ispravan conversion tracking za Google Ads kampanje
          </p>
        </Link>
        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }}
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Najčešće Google Ads Greške
          </p>
          <p className="text-xs text-gray-500 mb-0">
            10 grešaka koje koštaju klijente hiljade eura mesečno
          </p>
        </Link>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Problem nije u Google Ads-u — problem je u dijagnozi. Većina kampanja
          koje &quot;ne rade&quot; mogu se popraviti za 2-4 nedelje sa
          pravilnom analizom i akcijama.
        </p>
      </div>

      <hr />

      <h2>Najčešća pitanja — zašto Google Ads ne radi</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto Google Ads kampanja troši budžet ali nema konverzija?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Top 3 razloga: 1) Loš conversion tracking (ne pratite prave akcije), 2) Landing page ne konvertuje (spor, nejasan CTA, loš mobile), 3) Pogrešne ključne reči (privlačite ljude bez namere kupovine). Proverite ova tri pre bilo čega drugog.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko dugo čekati pre nego što zaustavim kampanju?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum 2-3 nedelje sa dovoljnim budžetom (barem 100-200 klikova). Ako posle 500+ klikova nema ni jedne konverzije, problem je gotovo sigurno u landing page-u ili ponudi, ne u kampnji. Smart Bidding treba minimum 2-4 nedelje learning perioda.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li je moj budžet premali za rezultate?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Ako dnevni budžet ne pokriva barem 10-15 klikova, da — budžet je premali. Izračunajte: prosečan CPC × 15 = minimalni dnevni budžet. Za većinu industrija u Srbiji, €10-20/dan je minimum. Za UK/USA, $30-50/dan.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto konkurenti imaju bolje pozicije od mene?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Ad Rank = Bid × Quality Score × Expected impact of extensions. Ako konkurent ima bolji QS (bolji oglas i LP), može platiti manje po kliku i imati višu poziciju. Proverite Quality Score — ako je ispod 6, tu je problem. Takođe proverite da koristite sve relevantne ad extensions.
          </div>
        </details>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Januar 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}

