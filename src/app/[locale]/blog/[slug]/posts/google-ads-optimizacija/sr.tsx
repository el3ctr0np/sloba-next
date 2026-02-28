import { Link } from "@/i18n/navigation";

export default function GoogleAdsOptimizacijaPost() {
  return (
    <>
      {/* ── TL;DR boks ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          30 taktika za Google Ads optimizaciju proverenih na 20+ naloga. Prosečno poboljšanje performansi 40% u prvih 90 dana. Fokus na strukturu, ključne reči, oglase, bidding i Quality Score.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">30</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">taktika za optimizaciju</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">6</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">kategorija optimizacije</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">20+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">naloga testirano</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">40%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">prosečno poboljšanje</p>
          </div>
        </div>
      </div>

      <p className="lead">
        Google Ads optimizacija nije jednokratna aktivnost — to je kontinuiran proces koji
        odvaja kampanje sa ROAS 2x od onih sa ROAS 5x. U ovom vodiču delim 30 taktika koje
        koristim u praksi sa klijentima iz različitih industrija.
      </p>

      <p>
        Ove taktike nisu teorija iz Google Help Centra. Svaka je testirana na realnim nalozima
        sa realnim budžetima. Neke su donele dramatična poboljšanja, neke marginalna — ali sve
        su prošle test prakse.
      </p>

      <hr />

      <h2>Zašto je optimizacija ključna za uspeh</h2>

      <p>
        Vidim dve vrste naloga: one koje <strong>set-and-forget</strong> vlasnici ostavljaju da rade
        sami, i one koje se optimizuju redovno. Razlika u performansama? U proeku 40-60%.
      </p>

      <p>
        Pareto princip (80/20 pravilo) u Google Ads-u glasi: <strong>20% optimizacija donosi 80% rezultata</strong>.
        Problem je što većina ljudi ne zna koje tih 20% da radi. Zato sam organizovao ovih 30 taktika
        po prioritetu — počnite od strukture, pa idite dalje.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Realnost iz prakse</p>
        <p className="text-blue-800 text-sm mb-0">
          U januaru 2026 sam preuzeo nalog gde je kampanja 6 meseci radila bez optimizacije. CPA je bio
          €85. Nakon 4 nedelje primene ovih taktika: CPA €42. Isti budžet, duplo više konverzija.
        </p>
      </div>

      <p>
        Optimizacija nije raketna nauka, ali zahteva sistem. Ovaj vodič je taj sistem — korak po korak,
        taktika po taktika.
      </p>

      <hr />

      <h2>Optimizacija strukture naloga</h2>

      <p>
        Pre nego što počnete da optimizujete ključne reči, oglase ili bidding — proverite strukturu naloga.
        Loša struktura je kao graditi kuću na nestabilnom temelju. Sve ostale optimizacije neće doneti
        maksimalne rezultate.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Odvojite Brand i Non-Brand kampanje</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Brand kampanje (vaše ime brenda) imaju 10x viši CTR i 3x niži CPC od non-brand kampanja.
          Ako ih mešate u jednoj kampanji, statistika je zbunjujuća i ne možete optimalno alokirati budžet.
        </p>
        <ul className="text-sm">
          <li>Kreirajte odvojenu kampanju samo za brand keywords</li>
          <li>Stavite niži bid na brand (ionako već dolaze)</li>
          <li>Fokusirajte optimizaciju na non-brand kampanje gde je pravi potencijal</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Single Keyword Ad Groups (SKAGs) ili tematske grupe?</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Stara škola preporučuje SKAGs — svaka ključna reč u svojoj ad grupi za maksimalnu relevantnost.
          Nova realnost sa RSA oglasima: tematske grupe od 5-15 sličnih ključnih reči daju bolju AI optimizaciju.
        </p>
        <ul className="text-sm">
          <li>Za visoko-intent komercijalne ključne reči: testirajte SKAGs</li>
          <li>Za informativne i long-tail: tematske grupe</li>
          <li>Nikada nemojte mešati različite intente u istoj ad grupi</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Konzistentna naming konvencija</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ako imate 20+ kampanja, kako brzo pronalazite šta tražite? Preporučujem strukturu:
          [TIP]_[KATEGORIJA]_[GEO]_[DODATNO]. Primer: SEARCH_Sofas_UK_Exact ili PMAX_AllProducts_EU_NewCustomers.
        </p>
        <ul className="text-sm">
          <li>Koristite prefixe: SEARCH, PMAX, SHOPPING, DISPLAY, VIDEO</li>
          <li>Dodajte geo ako radite multi-market: UK, DE, RS</li>
          <li>Označite testove sa _TEST na kraju da ih lako filtrirate</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Kampanje po fazi customer journey</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Korisnik koji traži &quot;šta je CRM&quot; nije u istoj fazi kao onaj koji traži &quot;kupiti HubSpot
          alternativu&quot;. Odvojite kampanje po fazi: Awareness, Consideration, Decision.
        </p>
        <ul className="text-sm">
          <li>Awareness: broad match, edukativni content, niži bid</li>
          <li>Consideration: phrase match, product pages, srednji bid</li>
          <li>Decision: exact match, checkout/demo pages, najviši bid</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dnevni budžet vs shared budget</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Individualni dnevni budžet po kampanji vam daje kontrolu. Shared budget pools automatski
          alokira gde Google vidi priliku. U praksi: najbolje funkcioniše hybrid pristup.
        </p>
        <ul className="text-sm">
          <li>Top performeri (Brand, High-Intent Search): individualni budžet koji NIKADA ne treba da limitira</li>
          <li>Testne kampanje ili seasonalne: shared budget da fleksibilno alocirate</li>
          <li>Pratite impression share lost (budget) — ako je &gt;20%, povećajte budžet</li>
        </ul>
      </div>

      <hr />

      <h2>Optimizacija ključnih reči</h2>

      <p>
        Ključne reči su srce Search kampanja. 90% optimizacija koje radim svakog ponedeljka vezano je
        za keyword management: dodavanje novih, pauziranje nerentabilnih, refining match types, i <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }}>dodavanje negativnih ključnih reči</Link>.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Search Terms Report mining (nedeljno)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ovo je najmoćnija taktika u ovom vodiču. Search Terms Report pokazuje šta ljudi ZAPRAVO
          pretražuju kada vide vaš oglas. Tamo nalazite zlato (nove converting keywords) i otpad
          (terms koje trebaju biti negativne).
        </p>
        <ul className="text-sm">
          <li>Jednom nedeljno: Google Ads → Insights & Reports → Search Terms</li>
          <li>Sortirajte po Conversions: terms sa konverzijama dodajte kao nove keywords u Exact match</li>
          <li>Sortirajte po Spend: terms sa visokim troškom i 0 konverzija dodajte kao negativne</li>
          <li>Tražite intente koji ne odgovaraju vašem proizvodu/usluzi</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">7</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Negativne ključne reči kao fundament</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ljudi pitaju &quot;Kako da dobijem više konverzija?&quot; — bolje pitanje je &quot;Kako da
          prestanem da gubim pare na lošim klikovima?&quot;. Negativne ključne reči su odgovor.
        </p>
        <ul className="text-sm">
          <li>Kreirajte master listu negativnih reči na account level (free, besplatno, posao, tutorial, PDF)</li>
          <li>Specifične negative keywords po kampanji (ako prodajete nove proizvode: dodajte &quot;polovno&quot;, &quot;second hand&quot;)</li>
          <li>Koristite negativne liste za brzinu — kreirajte &quot;B2C_Negatives&quot; ili &quot;Informational_Negatives&quot;</li>
          <li>Kompletan vodič: <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }}>Negativne ključne reči u Google Ads</Link></li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">8</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Match types strategija: 2026 realnost</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Broad Match Modifier više ne postoji (Google ga je ukinuo 2021). Sada imate: Broad, Phrase, Exact.
          Ali Exact match više nije baš &quot;exact&quot; — close variants su enabled by default.
        </p>
        <ul className="text-sm">
          <li><strong>Exact Match:</strong> Vaš default za komercijalne high-intent keywords. Maksimalna kontrola.</li>
          <li><strong>Phrase Match:</strong> Za discovery novih intenta, ali samo ako imate dobre negativne liste.</li>
          <li><strong>Broad Match:</strong> Samo ako koristite Smart Bidding (Target CPA/ROAS) — algoritam treba podatke da uči. Inače izbegavajte.</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Broad Match sa Manual CPC bidding je recept za katastrofu. Broad Match sa Target CPA i dobrom
          conversion tracking istorijom? To može biti vaša best performing taktika. Kontekst je sve.
        </p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">9</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Keyword consolidation (merge duplicates)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Čest scenario: ista ključna reč u 3 različite ad grupe, sve sa low impression share jer budžet
          i Quality Score su rasparčani. Rešenje: konsolidacija.
        </p>
        <ul className="text-sm">
          <li>Koristite Google Ads interfejs: Tools → Keyword Conflicts da vidite duplicate keywords</li>
          <li>Zadržite keyword u ad grupi sa najboljim Quality Score</li>
          <li>Zaustavite u ostalim ad grupama — agregirana statistika će biti bolja</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">10</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Long-tail strategija za niše</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ako ste u nišnoj industriji ili imate mali budžet — long-tail keywords su vaš best friend.
          Da, imaju mali volumen, ali CPC je 3-5x niži, a konverziona stopa često viša.
        </p>
        <ul className="text-sm">
          <li>Koristite Google Keyword Planner ili Answer The Public za ideje</li>
          <li>Ciljajte 4+ word queries (&quot;best affordable ergonomic chair for home office&quot;)</li>
          <li>Kreirajte dynamic search ads (DSA) kao safety net za long-tail terms koje ste propustili</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">11</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Sezonske ključne reči i scheduled campaigns</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ako imate seasonalne proizvode (npr. &quot;ski oprema&quot; vs &quot;surfboard&quot;), nemojte
          držati sve keywords aktivne celu godinu. Trošite budžet uzalud van sezone.
        </p>
        <ul className="text-sm">
          <li>Kreirajte sezonske kampanje sa clear start/end datumima</li>
          <li>Koristite Google Trends da identifikujete peak sezonu za svaku kategoriju</li>
          <li>2 nedelje pre peak sezone: pokrenite kampanje da build-ujete Quality Score</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">12</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Competitor keywords: yes or no?</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Bidding na imena konkurencije (npr. &quot;HubSpot alternative&quot;) može biti moćno, ali i
          skupo. Moje pravilo: testirajte ako imate clear differentiation i landing page koja objašnjava
          zašto ste bolji.
        </p>
        <ul className="text-sm">
          <li>Nemojte koristiti ime konkurenta u ad copy (može dobiti ad disapproval)</li>
          <li>Fokusirajte se na comparison i alternative keywords</li>
          <li>Competitive campaigns zahtevaju viši Quality Score — jako relevantna landing page je must</li>
        </ul>
      </div>

      <hr />

      <h2>Optimizacija oglasa</h2>

      <p>
        Sa prelaskom na Responsive Search Ads (RSA) kao default formatu, optimizacija oglasa je
        promenila prirodu. Više nije copy-paste opisnih rečenica — sada kreirate building blocks
        koje Google kombinuje. Strategija je drugačija.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">13</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">RSA best practices: diversity je ključ</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Google vam dozvoljava 15 headlines i 4 descriptions u RSA oglasu. Većina ljudi piše 15
          varijacija iste poruke. Greška. Google treba diversity da optimalno testira kombinacije.
        </p>
        <ul className="text-sm">
          <li>Podelite headlines u 3 tipa: Product/Service, Benefit, Offer/CTA</li>
          <li>Koristite različite dužine (od 20 do 30 karaktera) da bi se svi mogli prikazati</li>
          <li>Minimalno 2 headlines sa dynamic keyword insertion (DKI): &quot;{`{KeyWord:Default Text}`}&quot;</li>
          <li>Ad Strength &quot;Excellent&quot; nije cilj — cilj je CTR i konverzije, ali &quot;Good&quot; je minimum</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">14</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Pin strategija: kada pinnovati headlines</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Pinning (fiksiranje headline/description na određenu poziciju) smanjuje broj kombinacija koje
          Google može testirati, ali je ponekad neophodan za brand compliance ili messaging kontrolu.
        </p>
        <ul className="text-sm">
          <li>Pin Position 1: Brand name ili ključna differentiator poruka uvek vidljiva</li>
          <li>Nemojte pinnovati sve — ostavite Google-u prostora da optimizuje</li>
          <li>Koristite pinning za legal disclaimers ili price mentions koje moraju biti vidljive</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">15</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ad Extensions: koristite SVE relevantne</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ad extensions (sitelinks, callouts, structured snippets, call, location...) povećavaju CTR
          za 10-25% jer vaš oglas zauzima više prostora na SERP-u. I potpuno su besplatni.
        </p>
        <ul className="text-sm">
          <li><strong>Sitelinks:</strong> Minimum 4, best practice 8 — link-ujte na top kategorije/pages</li>
          <li><strong>Callouts:</strong> Kratke USP bullets (&quot;Besplatna dostava&quot;, &quot;24/7 Podrška&quot;)</li>
          <li><strong>Structured Snippets:</strong> Branded kategorije (Brands: Nike, Adidas, Puma...)</li>
          <li><strong>Call Extensions:</strong> Must have ako ste local business ili visok CPA warrantuje poziv</li>
          <li>Koristite account-level extensions kao fallback, pa campaign-specific za specijalne ponude</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">16</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Landing page alignment (message match)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ako vaš oglas obećava &quot;20% popust na sofe&quot;, a landing page nema pomena o popustu —
          imali ste visok bounce rate i loš Quality Score. Message match je kritičan.
        </p>
        <ul className="text-sm">
          <li>Headline na landing page treba da odjekuje (mirror) ad headline</li>
          <li>Ako oglašavate specifičan proizvod/kategoriju, ne slajte na homepage — kreirajte dedicated page</li>
          <li>Testiranje landing pages često donosi veći ROI od testiranja ad copy</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">17</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Device-specific ad copy (mobile vs desktop)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Mobile traffic ima drugačiji intent od desktop traffic. Kraći attention span, često local
          searches, više call conversions. Optimizujte ad copy za device ako vidite performance gap.
        </p>
        <ul className="text-sm">
          <li>Ako mobile users češće zovu: mobilna kampanja sa agresivnim Call Extension</li>
          <li>Ako desktop users bolje konvertuju: izdvojite budžet i bid adjustments na desktopu</li>
          <li>Mobile headlines: kraći, direktniji (&quot;Nazovite odmah&quot; vs &quot;Zakaži konsultaciju&quot;)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">18</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Emotional triggers u ad copy</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ad copy koji samo opisuje features je dosadan. Ad copy koji rešava problem ili aktivira emociju
          dobija klik. FOMO (fear of missing out), urgencija, benefit-driven copy — to pobjeđuje.
        </p>
        <ul className="text-sm">
          <li><strong>FOMO:</strong> &quot;Samo 3 komada ostalo&quot;, &quot;Akcija ističe sutra&quot;</li>
          <li><strong>Benefit over feature:</strong> &quot;Spavajte bolje&quot; &gt; &quot;Memory foam madrac&quot;</li>
          <li><strong>Social proof:</strong> &quot;5000+ zadovoljnih klijenata&quot;, &quot;4.9★ ocena&quot;</li>
        </ul>
      </div>

      <hr />

      <h2>Optimizacija bidding strategija</h2>

      <p>
        Bid strategy je vaš autopilot. Možete imati savršenu strukturu i odlične oglase, ali ako
        bidate pogrešno — trošite više nego što treba ili gubite impression share. Evo kako biramo
        i optimizujemo bidding strategije.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">19</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Manual CPC vs Smart Bidding: kada šta?</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Google gura Smart Bidding (Target CPA, Target ROAS, Maximize Conversions) kao superiorno
          rešenje. U praksi: zavisi od conversion volume-a. Ispod 30 konverzija mesečno, Smart Bidding
          nema dovoljno podataka da uči — Manual CPC sa bid adjustments je bolji.
        </p>
        <ul className="text-sm">
          <li><strong>Manual CPC:</strong> Novo lansiranje, mali budžet, &lt;30 konverzija/mesec</li>
          <li><strong>Maximize Clicks:</strong> Ako je cilj traffic/brand awareness, ne konverzije</li>
          <li><strong>Target CPA:</strong> Lead gen kampanje sa jasnim CPA ciljem, 30+ konverzija/mesec</li>
          <li><strong>Target ROAS:</strong> eCommerce sa tracking revenue, 50+ konverzija/mesec</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Transition plan: Manual → Smart Bidding</p>
        <p className="text-blue-800 text-sm mb-0">
          Ne skačite direktno sa Manual CPC na Target CPA. Pređite prvo na &quot;Maximize Conversions&quot;
          bez target-a da algoritam nauči. Nakon 2 nedelje, pređite na Target CPA/ROAS sa realističnim
          ciljem (10% iznad current average).
        </p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">20</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Target CPA/ROAS: kako postaviti realan target</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Greška #1: postaviti previše agresivan target. Ako je vaš current CPA €50, a postavite target
          €20 — kampanja neće dobiti impressions jer Google zna da ne može postići taj target.
        </p>
        <ul className="text-sm">
          <li>Pogledajte Last 30 days average CPA/ROAS — to je vaša baseline</li>
          <li>Postavite target 10-20% bolji od current average (npr. CPA €50 → target €45)</li>
          <li>Nakon 2-3 nedelje stabilnih performansi, postepeno smanjujte target dalje</li>
          <li>Nikada nemojte menjati target više od jednom nedeljno — algoritam treba learning period</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">21</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Portfolio bidding za multi-kampanja management</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Portfolio bid strategies dozvoljavaju da delite bid strategiju preko više kampanja. Benefit:
          algoritam uči na agregiranom conversion volume-u, što znači bržu optimizaciju.
        </p>
        <ul className="text-sm">
          <li>Koristite portfolio strategy ako imate 3+ kampanja sa istim ciljem (npr. sve Search kampanje sa Target CPA €40)</li>
          <li>Ne mešajte različite tipe kampanja u istoj portfolio (Search + Display = bad idea)</li>
          <li>Pratite performance po kampanji unutar portfolio — jedna loša može &quot;zaraziti&quot; ostale</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">22</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dayparting: kad su vaši korisnici najaktivniji?</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Dayparting (Ad Schedule) podešava bidove po danu u nedelji i času u danu. Ako vaš CPA u
          ponedeljak ujutro 50% bolji od petka uveče — zašto bidate isto?
        </p>
        <ul className="text-sm">
          <li>Analizirajte performanse po Hours of Day i Days of Week (Google Ads → Dimensions)</li>
          <li>Identifikujte top performing time slots (CPA 20%+ bolji od average)</li>
          <li>Podesite bid adjustments: +20% za peak hours, -30% za poor performing slots</li>
          <li>B2B kampanje: snizite bidove za vikende (ili ih potpuno pausajte)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">23</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Device bid adjustments (mobile/tablet/desktop)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ako vaš desktop CPA je €30, a mobilni €60 — ne treba da bidate isto. Device bid adjustments
          omogućavaju da automatski smanjite/povećate bid na različitim device-ima.
        </p>
        <ul className="text-sm">
          <li>Segment by device (Google Ads → Campaigns → Devices) i uporedite CPA</li>
          <li>Desktop best performer? Podesite mobile bid adjustment na -20% do -40%</li>
          <li>Mobile best performer? Podesite mobile bid adjustment na +20% do +40%</li>
          <li>Napomena: Sa Smart Bidding strategijama, device bid adjustments imaju manji impact (algoritam već optimizuje)</li>
        </ul>
      </div>

      <hr />

      <h2>Optimizacija Quality Score</h2>

      <p>
        Quality Score je Google-ova ocena koliko su vaši oglasi i keywords relevantni korisnicima.
        Viši Quality Score = niži CPC i bolji ad rank. Ako imate prosek ispod 5/10, ovde je vaš
        najveći optimization opportunity. Kompletan vodič: <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }}>Kako poboljšati Quality Score</Link>.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">24</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">CTR optimization: najbrži način da podignete QS</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Expected CTR je najveći component Quality Score-a. Ako vaš CTR raste, QS prati. Kako povećati CTR?
          Bolje oglase (taktika #13-18), relevantnije keywords, i ad extensions.
        </p>
        <ul className="text-sm">
          <li>Benchmark: Search kampanje prosek 3-5% CTR, Brand kampanje 10-20%</li>
          <li>Ako je CTR ispod 2%, problem je u ad copy ili keyword relevantnosti</li>
          <li>Testirajte urgentne CTA-ove u headlines (&quot;Poruči danas&quot;, &quot;Besplatna dostava&quot;)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">25</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ad relevance signals: keyword → ad → landing page</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Google prati da li vaš oglas sadrži keyword (ili close variant), i da li landing page sadrži
          isti keyword. Što je chain relevantniji, viši je Ad Relevance score.
        </p>
        <ul className="text-sm">
          <li>Koristite DKI (Dynamic Keyword Insertion) u ad headlines da automatski insert keyword</li>
          <li>Landing page H1 i meta title treba da sadrže target keyword</li>
          <li>Nemojte slati sve keywords na homepage — kreirajte category/product-specific pages</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">26</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Landing page experience: brzina i mobile-friendly</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Landing Page Experience component gleda brzinu učitavanja, mobile-friendliness, i relevantnost
          content-a. Najčešći problem: spor sajt. Ako je load time &gt;3 sekunde, gubite poene.
        </p>
        <ul className="text-sm">
          <li>Testirajte brzinu: <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a></li>
          <li>Testirajte mobile experience: <a href="https://search.google.com/test/mobile-friendly" target="_blank" rel="noopener noreferrer">Mobile-Friendly Test</a></li>
          <li>Optimizujte slike (WebP format), smanjite JavaScript, koristite CDN</li>
          <li>CTA dugme mora biti above the fold na mobilnom</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Quality Score je historijski metric — promene koje napravite danas neće odmah podići QS.
          Treba 1-2 nedelje da Google akumulira dovoljno podataka. Budite strpljivi i konzistentni.
        </p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">27</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Historical QS recovery: kad da &quot;reset-ujete&quot; keyword</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ponekad keyword ima istoriju loših performansi (nizak CTR godinu dana), i uprkos vašim
          optimizacijama, QS ostaje nizak jer je historical data loš. Rešenje: &quot;reset&quot;.
        </p>
        <ul className="text-sm">
          <li>Pausajte keyword na 2 nedelje da &quot;old data&quot; izgubi težinu</li>
          <li>Ili: kreirajte nov keyword sa drugim match type-om (Exact → Phrase) — tretira se kao nov</li>
          <li>Kada re-aktivirate, osigurajte da landing page i ad copy su maksimalno relevantni</li>
        </ul>
      </div>

      <hr />

      <h2>Napredne taktike optimizacije</h2>

      <p>
        Kada ste pokrili fundamentals (struktura, keywords, oglasi, bidding, QS), sledeći nivo
        optimizacije uključuje audience layering, remarketing, i conversion tracking audite. Ovo su
        taktike koje odvajaju dobre naloge od odličnih.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika 28</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Audience layering na Search kampanjama</h3>
          <p className="text-sm text-gray-600 mb-3">
            Audience layering znači dodavanje audience segments (remarketing lists, demographics, in-market)
            na Search kampanje kao &quot;observation&quot; ili sa bid adjustments.
          </p>
          <ul className="text-sm mb-0">
            <li><strong>Remarketing audiences:</strong> +30% bid adjustment na prethodnе posetioce sajta</li>
            <li><strong>Customer Match:</strong> Upload email lista postojećih klijenata, bid agresivnije</li>
            <li><strong>In-Market:</strong> Layerite &quot;In-Market for X&quot; audiences i pratite da li konvertuju bolje</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Taktika 29</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Remarketing optimization</h3>
          <p className="text-sm text-gray-600 mb-3">
            Remarketing kampanje imaju 2-3x viši CTR i 50-70% niži CPA od cold traffic. Ali samo ako
            pravilno segmentirate audience. Ne tretirajte sve posetioce isto.
          </p>
          <ul className="text-sm mb-0">
            <li><strong>Cart Abandoners:</strong> Odvojena kampanja, agresivna ponuda (&quot;10% off if you complete purchase&quot;)</li>
            <li><strong>Page Visitors:</strong> Različite poruke za homepage vs product page posetioce</li>
            <li><strong>Past Purchasers:</strong> Cross-sell/upsell kampanje sa novim proizvodima</li>
            <li>Kompletan vodič: <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }}>Remarketing u Google Ads</Link></li>
          </ul>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">30</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Conversion Tracking audit (kvartalno)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Najveća greška koju vidim: conversion tracking nije podešen pravilno, ili prati pogrešne
          akcije. Ako algoritam uči na lošim podacima, optimizacija je uzaludna.
        </p>
        <ul className="text-sm">
          <li>Proverite da li su sve konverzije taggovane (Google Tag Manager ili gtag.js)</li>
          <li>Testirajte svaku konverziju ručno — napravite test transakciju/formu i proverite da li se evidentira</li>
          <li>Exclude internal traffic (vaša kancelarija) da ne &quot;zagađuje&quot; podatke</li>
          <li>Proverite conversion attribution model — Last Click vs Data-Driven (Data-Driven je bolji ako imate volume)</li>
          <li>Kompletan vodič: <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}>Conversion Tracking u Google Ads</Link></li>
        </ul>
      </div>

      <hr />

      <h2>Nedeljni raspored optimizacije</h2>

      <p>
        Optimizacija nije ad hoc aktivnost — najbolji rezultati dolaze sa konzistentnim nedeljnim
        ritmom. Evo kako organizujem svoj optimization schedule za klijente:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-2 border-gray-900 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left font-heading font-bold">Dan</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-heading font-bold">Optimizacija</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-heading font-bold">Trajanje</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Ponedeljak</td>
              <td className="border border-gray-300 px-4 py-2">
                <strong>Search Terms Report review</strong> — dodavanje novih keywords i negativnih,
                pauziranje nerentabilnih terms
              </td>
              <td className="border border-gray-300 px-4 py-2">30-45 min</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Utorak</td>
              <td className="border border-gray-300 px-4 py-2">
                <strong>Performance review po kampanji</strong> — CPA/ROAS check, budget reallocation,
                pausiranje underperforming kampanja
              </td>
              <td className="border border-gray-300 px-4 py-2">20-30 min</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Sreda</td>
              <td className="border border-gray-300 px-4 py-2">
                <strong>Ad copy testing</strong> — review RSA ad performance, pause low performers, test nove
                headlines/descriptions
              </td>
              <td className="border border-gray-300 px-4 py-2">20 min</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Četvrtak</td>
              <td className="border border-gray-300 px-4 py-2">
                <strong>Bid strategy review</strong> — check Target CPA/ROAS achievement, adjust targets if needed
              </td>
              <td className="border border-gray-300 px-4 py-2">15 min</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Petak</td>
              <td className="border border-gray-300 px-4 py-2">
                <strong>Quality Score audit</strong> — identifikuj keywords sa QS &lt;5, optimizuj ad relevance
                i landing pages
              </td>
              <td className="border border-gray-300 px-4 py-2">20 min</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Mesečne optimizacije (jednom mesečno)</p>
        <p className="text-blue-800 text-sm mb-0">
          <strong>1. Conversion Tracking audit</strong> (provera da li sve konverzije prate pravilno) <br />
          <strong>2. Competitor analysis</strong> (Google Auction Insights — ko se pojavio/nestao) <br />
          <strong>3. Landing page optimization</strong> (A/B testiranje različitih verzija) <br />
          <strong>4. Audience segments review</strong> (remarketing lists, customer match updates)
        </p>
      </div>

      <hr />

      <h2>Često postavljana pitanja</h2>

      <div className="space-y-4 my-8">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko često treba optimizovati Google Ads naloge?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p>
              Za mali nalog (do €1000/mesec): nedeljno 1-2 sata optimizacije je dovoljno. Za veće naloge
              (€5000+/mesec): preporučujem dnevni check (15 min) + dublja nedeljne optimizacija (2-3 sata).
              Ključ je konzistentnost — bolje 30 minuta svakog ponedeljka nego 3 sata jednom mesečno.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koja je najvažnija optimizacija ako imam samo 1 sat nedeljno?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p>
              <strong>Search Terms Report review</strong> (taktika #6). Ovo je aktivnost sa najvišim ROI —
              eliminišete nerentabilne klikove i otkrivate nove profitable keywords. 80% optimizacije koje
              radim nedeljno je upravo ovo. Sve ostalo je nice-to-have, ali Search Terms mining je must-have.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li treba pauzirati kampanje noću ili vikendom?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p>
              Zavisi od industrije. <strong>B2B kampanje:</strong> često je pametno sniziti bidove za 50-70%
              vikendom jer decision makers ne rade. <strong>eCommerce:</strong> vikendi su često best performing
              dani (ljudi kupuju od kuće). Umesto pauziranja, koristite Ad Schedule bid adjustments (taktika #22)
              da smanjite bidove u poor performing hours ali zadržite prisustvo.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako znam da li moje optimizacije rade?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p>
              Pratite 3 metrike mesec-na-mesec: <strong>1) CPA ili ROAS</strong> (efficiency), <strong>2) Conversion
              volume</strong> (scale), <strong>3) Impression Share</strong> (coverage). Ako CPA pada ali i konverzije
              padaju — možda ste isuviše restriktivni. Ako CPA raste ali i ROAS raste — možda ste na dobrom tragu.
              Kontekst je bitan. Benchmark protiv prethodnog meseca, ali i godine-na-godinu za sezonalnost.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko košta profesionalna Google Ads optimizacija?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p>
              Freelance consultants naplaćuju €200-600/mesec za redovnu optimizaciju (u zavisnosti od obima naloga).
              Agencije 10-20% ad spend-a. DIY pristup košta vreme — realno 5-10 sati mesečno ako učite, ili 2-3 sata
              ako ste iskusni. Više o cenama: <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }}>Koliko košta Google Ads</Link>.
              Ako vas zanima profesionalna pomoć, <Link href="/kontakt">zakažite konsultaciju</Link>.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Mogu li automatizovati optimizaciju pomoću pravila (Automated Rules)?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p>
              Da, ali oprezno. Automated Rules su odlični za repetitivne zadatke: pauziranje keywords sa CPA &gt;€100
              i 0 konverzija u poslednjih 30 dana, povećanje budžeta za kampanje sa &gt;90% impression share, itd.
              Ali ne možete automatizovati <strong>strategy</strong> — pravila ne razumeju kontekst. Koristite ih za
              busywork, ali zadržite strategic decision-making manual.
            </p>
          </div>
        </details>
      </div>

      <hr />

      {/* ── CTA boks ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mt-0 mb-4">
          Želite da profesionalac preuzme optimizaciju?
        </h2>
        <p className="text-lg mb-6 text-slate-300">
          Ako imate nalog koji troši €1000+/mesec i želite da izbegnete DIY stres, možemo razgovarati
          o ongoing management ili single audit-u. Specijalizujem se za eCommerce i lead gen kampanje.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/kontakt"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold px-6 py-3 rounded-lg transition-colors text-center no-underline"
          >
            Zakažite besplatan poziv
          </Link>
          <Link
            href="/usluge/google-ads-upravljanje"
            className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-heading font-semibold px-6 py-3 rounded-lg transition-colors text-center no-underline"
          >
            Pogledajte usluge
          </Link>
        </div>
      </div>

      {/* ── Povezani vodiči ── */}
      <div className="my-12">
        <h2 className="text-xl font-heading font-bold mb-6">Povezani vodiči</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
            <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads upravljanje</p>
            <p className="text-xs text-gray-500 mb-0">Kompletno upravljanje i optimizacija vaših kampanja</p>
          </Link>

          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }}
            className="block bg-white border-2 border-gray-900 rounded-xl p-5 hover:shadow-card transition-shadow no-underline"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Optimizacija</p>
            <h3 className="text-base font-heading font-bold mt-0 mb-2 text-gray-900">
              Quality Score Vodič
            </h3>
            <p className="text-sm text-gray-600 mb-0">
              Kako podići Quality Score i smanjiti CPC kroz CTR, ad relevance i landing page optimizaciju.
            </p>
          </Link>

          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }}
            className="block bg-white border-2 border-gray-900 rounded-xl p-5 hover:shadow-card transition-shadow no-underline"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Optimizacija</p>
            <h3 className="text-base font-heading font-bold mt-0 mb-2 text-gray-900">
              Negativne Ključne Reči
            </h3>
            <p className="text-sm text-gray-600 mb-0">
              Kako negativne ključne reči štede budžet i poboljšavaju CTR — sa listama za razne industrije.
            </p>
          </Link>

          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }}
            className="block bg-white border-2 border-gray-900 rounded-xl p-5 hover:shadow-card transition-shadow no-underline"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kampanje</p>
            <h3 className="text-base font-heading font-bold mt-0 mb-2 text-gray-900">
              Remarketing u Google Ads
            </h3>
            <p className="text-sm text-gray-600 mb-0">
              Kako ponovo targetirati posetioce sajta i cart abandoners kroz Search, Display i YouTube remarketing.
            </p>
          </Link>

          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }}
            className="block bg-white border-2 border-gray-900 rounded-xl p-5 hover:shadow-card transition-shadow no-underline"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Shopping</p>
            <h3 className="text-base font-heading font-bold mt-0 mb-2 text-gray-900">
              Google Shopping Kampanje
            </h3>
            <p className="text-sm text-gray-600 mb-0">
              Product feed optimizacija, bid strategije i Tiered Shopping pristup za eCommerce naloge.
            </p>
          </Link>
        </div>
      </div>

      <hr />

      <h2>Najčešća pitanja o Google Ads optimizaciji</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko često treba optimizovati Google Ads kampanje?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Dnevno: provera budžeta i alert-a. Nedeljno: bid adjustments, search terms review, negativne ključne reči. Mesečno: A/B testovi oglasa, strukturalne promene, strategija. Preterana optimizacija (svaki dan menjanje bid-ova) može biti kontraproduktivna.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta je najvažnija optimizacija za Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Conversion tracking. Bez tačnog tracking-a, sve ostale optimizacije su naslepo. Posle toga: negativne ključne reči (sprečavaju bacanje budžeta), Quality Score (smanjuje CPC), i bid strategija (kontroliše gde se troši).
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li Google Ads automatske preporuke treba prihvatiti?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Ne sve. Google optimizuje za svoj prihod, ne nužno za vaš ROI. Preporuke za broad match, budget povećanje i auto-apply promene obično nisu u vašem interesu. Prihvatajte samo one koje imaju smisla za vaše ciljeve.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako poboljšati ROAS u Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Fokusirajte se na: 1) Negativne ključne reči (eliminišite neproduktivne pretrage), 2) Bid strategiju po uređaju/lokaciji/vremenu, 3) Landing page optimizaciju, 4) Segmentaciju kampanja po profitabilnosti proizvoda, 5) Remarketing za postojeće posetioce.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto mi Quality Score opada?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Najčešći razlozi: landing page se sporije učitava, konkurenti su poboljšali svoje oglase, CTR je pao (morate osvežiti copy), ili je relevantnost opala (ključne reči ne odgovaraju oglas → LP putanji). Proverite svaku komponentu pojedinačno.
          </div>
        </details>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Januar 2026
      </div>
      <div className="text-sm text-gray-500">
        Autor: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}

