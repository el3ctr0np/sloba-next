import { Link } from "@/i18n/navigation";

export default function CTRVodicPost() {
  return (
    <>
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          CTR (Click-Through Rate) je procenat ljudi koji kliknu na vaš oglas nakon što ga vide. Formula: (Klikovi ÷ Impressions) × 100. Za Search kampanje u Srbiji cilj je 5-10%+, a za nišne kampanje i preko 15-20%. Ali zapamtite: visok CTR ≠ uspešna kampanja.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">5-10%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">dobar CTR za Search</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">15-20%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">moguć za nišne kampanje</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">~40%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">uticaj CTR na Quality Score</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0.5-1%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">prosek za Display</p>
          </div>
        </div>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Brzi odgovor
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Šta je CTR (Click-Through Rate)?
        </p>
        <p className="text-sm md:text-base text-gray-700 mb-0 leading-relaxed">
          <strong>CTR (Click-Through Rate)</strong> je procenat ljudi koji kliknu na vaš oglas nakon što ga vide. Formula: <strong>CTR = (Klikovi ÷ Prikazi) × 100</strong>. U Google Ads-u, CTR je jedan od glavnih signala kvaliteta — čini oko 40% Quality Score-a. Dobar CTR za Search kampanje u Srbiji je <strong>5-10%</strong>, dok je za Display oko <strong>0.5-1%</strong>.
        </p>
      </div>

      <hr />

      {/* ── Sadržaj ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#sta-je-ctr" className="text-sm text-gray-700 hover:text-primary underline">Šta je CTR i zašto je važan</a></li>
          <li><a href="#formula-i-primeri" className="text-sm text-gray-700 hover:text-primary underline">Formula i primeri izračunavanja</a></li>
          <li><a href="#ctr-benchmarks" className="text-sm text-gray-700 hover:text-primary underline">CTR benchmarks po tipu kampanje</a></li>
          <li><a href="#case-study-ankibuddy" className="text-sm text-gray-700 hover:text-primary underline">Case Study: AnkiBuddy — sa 6-8% na 20% CTR</a></li>
          <li><a href="#greske-koje-ubijaju-ctr" className="text-sm text-gray-700 hover:text-primary underline">5 najčešćih grešaka koje ubijaju CTR</a></li>
          <li><a href="#dijagnostika-niskog-ctr" className="text-sm text-gray-700 hover:text-primary underline">Kako dijagnostikovati nizak CTR (3 koraka)</a></li>
          <li><a href="#kako-poboljsati-ctr" className="text-sm text-gray-700 hover:text-primary underline">7 načina da poboljšate CTR</a></li>
          <li><a href="#kada-je-nizak-ctr-ok" className="text-sm text-gray-700 hover:text-primary underline">Kada je nizak CTR zapravo OK</a></li>
          <li><a href="#mit-visok-ctr" className="text-sm text-gray-700 hover:text-primary underline">MIT: "Visok CTR = uspešna kampanja"</a></li>
          <li><a href="#faq" className="text-sm text-gray-700 hover:text-primary underline">Najčešća pitanja o CTR-u</a></li>
          <li><a href="#povezani-vodici" className="text-sm text-gray-700 hover:text-primary underline">Povezani vodiči</a></li>
        </ol>
      </nav>

      {/* ── Šta je CTR ── */}
      <h2 id="sta-je-ctr">Šta je CTR i zašto je važan</h2>
      <p>
        <strong>CTR (Click-Through Rate)</strong> je procenat ljudi koji kliknu na vaš oglas nakon što ga vide. To je jedan od najvažnijih signala kvaliteta u Google Ads-u.
      </p>
      <p>
        Jednostavno rečeno: ako 100 ljudi vidi vaš oglas i 5 klikne na njega — vaš CTR je 5%.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Formula: CTR = (Broj klikova ÷ Broj prikaza) × 100
        </p>
      </div>

      <p>Zašto je CTR važan:</p>
      <ul>
        <li><strong>Utiče na Quality Score</strong> — Expected CTR čini oko 40% vaše ocene kvaliteta</li>
        <li><strong>Smanjuje CPC</strong> — viši CTR = viši Quality Score = niža cena po kliku</li>
        <li><strong>Signal relevantnosti</strong> — Google vidi da korisnici reaguju na vaš oglas</li>
        <li><strong>Više klikova za isti budžet</strong> — bolji CTR znači efikasnije trošenje</li>
      </ul>

      <hr />

      {/* ── Formula i primeri ── */}
      <h2 id="formula-i-primeri">Formula i primeri izračunavanja</h2>
      <p>
        Formula je jednostavna, ali razumevanje u kontekstu je ključno.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Impressions</th>
              <th className="py-3 px-4 font-heading font-semibold">Klikovi</th>
              <th className="py-3 px-4 font-heading font-semibold">CTR</th>
              <th className="py-3 px-4 font-heading font-semibold">Ocena</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1,000</td>
              <td className="py-3 px-4">20</td>
              <td className="py-3 px-4">2%</td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Prosek</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">1,000</td>
              <td className="py-3 px-4">50</td>
              <td className="py-3 px-4">5%</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Dobar</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1,000</td>
              <td className="py-3 px-4">100</td>
              <td className="py-3 px-4">10%</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Odličan</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">1,000</td>
              <td className="py-3 px-4">200</td>
              <td className="py-3 px-4">20%</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Izuzetan (nišne)</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── CTR Benchmarks ── */}
      <h2 id="ctr-benchmarks">CTR benchmarks po tipu kampanje</h2>
      <p>
        Benchmarks se drastično razlikuju po tipu kampanje. Display CTR od 1% je odličan, dok bi za Search to bio loš rezultat.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Search kampanje</h3>
          <p className="text-2xl font-heading font-bold text-green-600 mb-2">5-10%+</p>
          <p className="text-sm text-gray-600 mb-0">Za nišne kampanje u Srbiji i preko 10-15%. Exact match sa specifičnim ključnim rečima može dostići i 20%.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Display kampanje</h3>
          <p className="text-2xl font-heading font-bold text-blue-600 mb-2">0.5-1%</p>
          <p className="text-sm text-gray-600 mb-0">Niži CTR je normalan jer su ovo awareness oglasi. Remarketing Display može biti viši.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Shopping kampanje</h3>
          <p className="text-2xl font-heading font-bold text-purple-600 mb-2">1-3%</p>
          <p className="text-sm text-gray-600 mb-0">Zavisi od proizvoda i cene. Premium proizvodi sa dobrim slikama imaju viši CTR.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">YouTube kampanje</h3>
          <p className="text-2xl font-heading font-bold text-red-600 mb-2">0.5-2%</p>
          <p className="text-sm text-gray-600 mb-0">Skippable ads imaju niži CTR. Non-skippable i bumper ads se mere drugačije.</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Važno: Branded vs Non-branded</p>
        <p className="text-sm text-yellow-900 mb-0">
          Uvek razdvajajte branded od non-branded kampanja. Ako vaše non-branded kampanje imaju neočekivano visok CTR (npr. 25-30%), verovatno niste uklonili branded search termine. To nije znak uspeha — to je greška u strukturi.
        </p>
      </div>

      <hr />

      {/* ── Case Study AnkiBuddy ── */}
      <h2 id="case-study-ankibuddy">Case Study: AnkiBuddy — sa 6-8% na 20% CTR</h2>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 my-6">
        <p className="font-heading font-semibold mb-2">Iz mog iskustva</p>
        <p className="text-sm text-blue-900 mb-0">
          Zbog NDA ugovora ne mogu deliti finansijske metrike, ali mogu objasniti strategiju i pristup. Ovo pokazuje da sam ozbiljan partner koji poštuje poverljivost klijenata.
        </p>
      </div>

      <p>
        <strong>AnkiBuddy</strong> je EdTech SaaS platforma koja koristi AI za automatsko generisanje Anki kartica za učenje iz PDF predavanja. Primarno tržište su medicinski studenti u DACH regionu (Nemačka, Austrija, Švajcarska).
      </p>

      <h3>Izazov</h3>
      <p>
        Kada sam preuzeo nalog, Search kampanje su imale prosečan CTR od 6-8%. Za SaaS sa uskim targetiranjem, ovo nije bilo loše — ali znao sam da može bolje.
      </p>

      <h3>Strategija</h3>
      <ul>
        <li><strong>Usko specifične ključne reči</strong> — fokus na termine koje medicinski studenti stvarno koriste kada traže alate za učenje</li>
        <li><strong>Pain points u headline-ovima</strong> — naglašeni problemi koje studenti imaju (vreme, količina materijala, priprema za ispite)</li>
        <li><strong>Benefiti umesto feature-a</strong> — umesto "AI generiše kartice" → "Uštedite 10 sati nedeljno na pravljenju kartica"</li>
      </ul>

      <h3>Rezultat</h3>
      <div className="bg-green-50 border-2 border-green-400 rounded-xl p-5 my-6">
        <p className="text-2xl font-heading font-bold text-green-700 mb-2">CTR: do 20%</p>
        <p className="text-sm text-green-800 mb-0">
          Sa početnih 6-8% na Search kampanjama, dostigli smo i preko 20% CTR za najbolje Ad Grupe. Ključ je bio u razumevanju tačnih potreba ciljne publike.
        </p>
      </div>

      <p>
        <Link href={{ pathname: "/case-studies/[slug]", params: { slug: "ankibuddy" } }} className="text-primary underline">
          Pogledajte kompletan AnkiBuddy case study →
        </Link>
      </p>

      <hr />

      {/* ── 5 Grešaka ── */}
      <h2 id="greske-koje-ubijaju-ctr">5 najčešćih grešaka koje ubijaju CTR</h2>
      <p>
        Na većini naloga koje preuzimam — čak i onih sa mesečnim budžetom od €5-10k — vidim iste greške.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #1</p>
          <p className="font-semibold mb-2">Generički headlines bez benefita i brojeva</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Dodajte konkretne brojeve ("Popravke od 2.000 RSD"), pitanja ("Tražite vodoinstalatera?") i urgentnost ("Danas slobodni termini").</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #2</p>
          <p className="font-semibold mb-2">Premalo extensions (ili ih uopšte nema)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Koristite sve dostupne extensions — sitelinks, callouts, structured snippets, call extension (obavezno za usluge). Extensions povećavaju CTR za 10-20%.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #3</p>
          <p className="font-semibold mb-2">Broad match bez kontrole</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Koristite uže match tipove (phrase, exact) ili ako koristite broad — dodajte obimnu listu negativnih ključnih reči i redovno pregledajte Search Terms Report.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #4</p>
          <p className="font-semibold mb-2">Ne razdvajaju branded od non-branded</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Kreirajte zasebnu branded kampanju. Dodajte vaš brand kao negativnu ključnu reč u non-branded kampanjama. Tako ćete imati tačan uvid u CTR za obe kategorije.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #5</p>
          <p className="font-semibold mb-2">Ne testiraju oglase</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Imajte minimum 2 RSA oglasa po Ad Grupi. Testirajte različite opise, sitelinks, ili potpuno drugačije pristupe. Zavisi od klijenta i industrije.</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Dijagnostika ── */}
      <h2 id="dijagnostika-niskog-ctr">Kako dijagnostikovati nizak CTR (3 koraka)</h2>
      <p>
        Kada CTR padne ili je nizak od početka, evo mog redosleda dijagnostike:
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">1</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Search Terms Report</h3>
            <p className="text-sm text-gray-600 mb-0">Prvo proverite da li su upiti relevantni. Ako dobijate klikove za irelevantne pretrage, CTR će biti nizak jer oglas nije za te ljude. Dodajte negativne ključne reči.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">2</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Ad Copy analiza</h3>
            <p className="text-sm text-gray-600 mb-0">Pregledajte headlines i descriptions. Da li su generički? Da li imaju brojeve, pitanja, urgentnost? Da li komuniciraju ZAŠTO da kupe? Prepišite oglase sa jasnim benefitima.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">3</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Auction Insights</h3>
            <p className="text-sm text-gray-600 mb-0">Pogledajte konkurenciju. Ako je vaš Impression Share pao a konkurenti su dodali nove oglase, možda trebate agresivniji pristup ili bolji bid.</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── 7 načina ── */}
      <h2 id="kako-poboljsati-ctr">7 načina da poboljšate CTR</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika #1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Headlines sa brojevima</h3>
          <p className="text-sm text-gray-600 mb-0">"Popravke od 2.000 RSD" ili "Dostava za 30 minuta" privlače više pažnje od generičkih headline-ova.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika #2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Headlines sa pitanjem</h3>
          <p className="text-sm text-gray-600 mb-0">"Tražite vodoinstalatera?" ili "Potreban auto serviser?" direktno adresiraju korisnikovu potrebu.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika #3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Headlines sa urgencijom</h3>
          <p className="text-sm text-gray-600 mb-0">"Danas slobodni termini", "24/7 dostupni", "Dolazimo za 30 min" — urgentnost pokreće akciju.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika #4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Sitelinks ka sekcijama</h3>
          <p className="text-sm text-gray-600 mb-0">Umesto generičkih linkova, linkovajte ka specifičnim sekcijama landing page-a. Ovo pomaže korisnicima da brže dođu do željene informacije.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika #5</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Callouts po industriji</h3>
          <p className="text-sm text-gray-600 mb-0">Za neke industrije funkcionišu pain points ("Bez skrivenih troškova"), za druge benefiti ("Besplatna dostava"). Testirajte oba pristupa.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika #6</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Call extension za usluge</h3>
          <p className="text-sm text-gray-600 mb-0">Obavezno za sve uslužne delatnosti. Direktan poziv iz oglasa povećava ukupni engagement i konverzije.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika #7</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Pinned headlines na Position 1</h3>
          <p className="text-sm text-gray-600 mb-0">Pin-ujte ključne benefite na Position 1 da osigurate da se uvek prikazuju. Ne prepuštajte sve Google algoritmu.</p>
        </div>
      </div>

      <hr />

      {/* ── Kada je nizak CTR OK ── */}
      <h2 id="kada-je-nizak-ctr-ok">Kada je nizak CTR zapravo OK</h2>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-3">Nizak CTR nije uvek problem</p>
        <ul className="text-sm text-yellow-900 mb-0 space-y-2">
          <li><strong>Display remarketing</strong> — očekujte 0.5-1%, cilj je podsećanje, ne odmah klik</li>
          <li><strong>Brand awareness kampanje</strong> — cilj je vidljivost brenda, ne klikovi</li>
          <li><strong>Konkurentne industrije</strong> — neki sektori imaju prirodno niži benchmark (npr. osiguranje, finansije)</li>
          <li><strong>Top-of-funnel YouTube</strong> — video ads za širu publiku imaju niži CTR jer cilj je reach</li>
        </ul>
      </div>

      <p>
        Ključno je razumeti <strong>cilj kampanje</strong>. Ako je cilj brand awareness, CTR od 0.3% na Display mreži može biti sasvim u redu. Ali ako je cilj lead generation na Search-u, CTR od 2% je signal za optimizaciju.
      </p>

      <hr />

      {/* ── MIT ── */}
      <h2 id="mit-visok-ctr">MIT: "Visok CTR = uspešna kampanja"</h2>

      <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-red-700 text-lg mb-2">Ovo je NETAČNO</p>
        <p className="text-sm text-red-800 mb-0">
          Visok CTR znači da ljudi klikću na oglas. Ali to NE znači da kupuju, zovu, ili šalju upite. Možete imati 20% CTR i 0 konverzija. CTR je samo jedan deo jednačine.
        </p>
      </div>

      <p>
        Ovo je najčešći MIT koji čujem od klijenata. "Imamo odličan CTR, ali nema rezultata" — jer CTR meri samo prvi korak (klik), ne i krajnji cilj (konverziju).
      </p>

      <p>
        <strong>Primer:</strong> Kampanja sa CTR-om od 20% i 0 konverzija je lošija od kampanje sa CTR-om od 5% i 10 konverzija. Uvek gledate celokupnu sliku: CTR + Conversion Rate + CPA/ROAS.
      </p>

      <hr />

      {/* ── FAQ ── */}
      <h2 id="faq">Najčešća pitanja o CTR-u</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliki CTR je dobar u Srbiji?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Za Search kampanje cilj je 5-10%. Za nišne kampanje sa specifičnim ključnim rečima u zatvorenim match tipovima (exact, phrase), CTR može biti i 10-15%+. Account benchmark je dobar referentni okvir — pratite ga u Google Ads interfejsu.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto mi pada CTR?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Najčešći razlozi: nova konkurencija (proverite Auction Insights), zastareli oglasi (osvežite copy), loši search terms (proverite Search Terms Report), ili sezonalnost. Koristite moj 3-step dijagnostički proces: Search Terms → Ad Copy → Auction Insights.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li CTR utiče na cenu klika?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Da, indirektno. CTR utiče na Expected CTR, koji je komponenta Quality Score-a. Viši Quality Score = niži CPC. Poboljšanje QS sa 5 na 7 može smanjiti CPC za 28%.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako razdvojiti branded od non-branded CTR?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Kreirajte zasebnu branded kampanju sa vašim brand ključnim rečima. U non-branded kampanjama dodajte vaš brand kao negativnu ključnu reč. Tako ćete imati čiste podatke za obe kategorije i tačan uvid u stvarne performanse.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako videti CTR u Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            U Google Ads interfejsu, CTR je standardna kolona u pregledu kampanja, ad grupa, oglasa i ključnih reči. Ako ne vidite kolonu, kliknite na "Columns" → "Modify columns" → dodajte "CTR". Možete ga pratiti i kroz Google Ads Editor ili API.
          </div>
        </details>
      </div>

      <hr />

      {/* ── CTA ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Nizak CTR troši vaš budžet?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Besplatna analiza vašeg naloga sa identifikacijom oglasa koji imaju nizak CTR i konkretnim preporukama za poboljšanje.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <hr />

      {/* ── Povezani vodiči ── */}
      <h2 id="povezani-vodici">Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Quality Score — kompletan vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako CTR utiče na Quality Score i cenu klika</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Ključne reči — kompletan vodič</p>
          <p className="text-xs text-gray-500 mb-0">Od istraživanja do optimizacije ključnih reči</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimizacija" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads optimizacija — 30 taktika</p>
          <p className="text-xs text-gray-500 mb-0">Kompletna strategija za poboljšanje performansi</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "kako-poceti-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Kako početi sa Google Ads</p>
          <p className="text-xs text-gray-500 mb-0">Vodič za početnike — od nule do prve kampanje</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "rsa-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">RSA (Responsive Search Ads) vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako napisati oglase koji povećavaju CTR</p>
        </Link>
        <Link href="/usluge/google-ads-audit" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads audit</p>
          <p className="text-xs text-gray-500 mb-0">Identifikujte oglase sa niskim CTR</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Mart 2026
      </div>
      <div className="text-sm text-gray-500">
        Autor: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}
