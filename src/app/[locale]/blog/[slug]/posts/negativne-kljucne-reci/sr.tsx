import { Link } from "@/i18n/navigation";

export default function NegativeKeywordsVodicPost() {
  return (
    <>
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Negativne ključne reči sprečavaju prikazivanje oglasa za irelevantne pretrage. Bez njih, 20-40% budžeta odlazi na klikove koji nikada neće konvertovati. U ovom vodiču: kompletne starter liste, strategija po industrijama i sistem organizacije.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">200+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">negativnih reči u listama</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">industrijskh lista</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">30%+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">smanjenje wasted spend-a</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">match type-a za negatives</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Šta su negativne ključne reči ── */}
      <h2>Šta su negativne ključne reči i zašto su kritične</h2>
      <p>
        Negativne ključne reči (negative keywords) su reči i fraze za koje NE želite da se vaši oglasi prikazuju. Dok regularne ključne reči privlače saobraćaj, negativne ga filtriraju — štite vaš budžet od klikova koji nikada neće doneti konverziju.
      </p>
      <p>
        U praksi, ovo je jedna od najvažnijih optimizacionih aktivnosti. Na svakom nalogu koji preuzmem, Search Terms Report otkriva minimum 15-20% budžeta potrošenog na potpuno irelevantne pretrage.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Moje iskustvo: Pravilna negative keywords strategija je najbrži način da poboljšate ROI — rezultati su vidljivi odmah, već u prvoj nedelji.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Regularne ključne reči</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Triggeruju oglas</h3>
          <p className="text-sm text-gray-600 mb-0">Definišu za koje pretrage se vaš oglas prikazuje. Privlače saobraćaj ka vašem sajtu.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Negativne ključne reči</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Blokiraju oglas</h3>
          <p className="text-sm text-gray-600 mb-0">Sprečavaju prikazivanje za irelevantne pretrage. Štite budžet od wasted spend-a.</p>
        </div>
      </div>

      <h3>Primer iz prakse</h3>
      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">Klijent: Online prodavnica premium nameštaja</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-semibold text-red-600 mb-2">Pre negativnih reči</p>
            <ul className="text-sm mb-0">
              <li>Budžet: €2,000/mesec</li>
              <li>Konverzije: 15</li>
              <li>CPA: €133</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-green-600 mb-2">Posle dodavanja negatives</p>
            <ul className="text-sm mb-0">
              <li>Budžet: €2,000/mesec</li>
              <li>Konverzije: 23</li>
              <li>CPA: €87 <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">-35%</span></li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-3 mb-0">
          Blokirane pretrage: {`"jeftine stolice"`} (€180 spend, 0 konv.), {`"polovni nameštaj"`} (€120, 0 konv.), {`"nameštaj DIY"`} (€90, 0 konv.), {`"IKEA nameštaj"`} (€150, 0 konv.)
        </p>
      </div>

      <hr />

      {/* ── Match Types za Negatives ── */}
      <h2>Match Types za negativne ključne reči</h2>
      <p>
        Negativni match types rade drugačije od pozitivnih. Razumevanje razlika je ključno da ne blokirate i dobre pretrage greškom.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Match Type</th>
              <th className="py-3 px-4 font-heading font-semibold">Sintaksa</th>
              <th className="py-3 px-4 font-heading font-semibold">Blokira</th>
              <th className="py-3 px-4 font-heading font-semibold">Ne blokira</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Negative Broad</td>
              <td className="py-3 px-4">besplatno</td>
              <td className="py-3 px-4">Svaku pretragu sa tom reči, bilo koji redosled</td>
              <td className="py-3 px-4">Varijacije i sinonime ({`"besplatni"`}, {`"free"`})</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Negative Phrase</td>
              <td className="py-3 px-4">{`"besplatno preuzimanje"`}</td>
              <td className="py-3 px-4">Pretrage sa tačnom frazom u tom redosledu</td>
              <td className="py-3 px-4">Drugačiji redosled ({`"preuzimanje besplatno"`})</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Negative Exact</td>
              <td className="py-3 px-4">[besplatno preuzimanje]</td>
              <td className="py-3 px-4">Samo tu tačnu pretragu</td>
              <td className="py-3 px-4">Bilo šta dodatno ({`"besplatno preuzimanje CRM"`})</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno: Negativni Broad ne uključuje sinonime</p>
        <p className="text-yellow-800 text-sm mb-0">
          Za razliku od pozitivnog Broad match-a, negativni Broad NE blokira sinonime i varijacije. Ako blokirate {`"besplatno"`}, pretraga {`"free CRM"`} i dalje prolazi. Dodajte i srpske i engleske verzije.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Preporuka za match type</p>
        <p className="text-blue-800 text-sm mb-0">
          Koristite Negative Broad za većinu slučajeva — pokriva najširi opseg. Negative Phrase za specifične fraze gde redosled igra ulogu. Negative Exact retko — samo za vrlo specifične slučajeve.
        </p>
      </div>

      <hr />

      {/* ── Universal Negative Lista ── */}
      <h2>Univerzalna negativna lista — starter za svaki biznis</h2>
      <p>
        Ovu listu preporučujem za svaki nalog kao polaznu tačku. Prilagodite prema vašem biznisu — neke od ovih reči mogu biti relevantne za vas (npr. {`"besplatno"`} ako nudite free trial).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kategorija</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Besplatno / Free</h3>
          <p className="text-sm text-gray-600 mb-0">besplatno, besplatan, besplatna, free, freeware, opensource, open source, dzabe, gratis</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kategorija</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Posao / Zaposlenje</h3>
          <p className="text-sm text-gray-600 mb-0">posao, zaposlenje, karijera, plata, zarada, CV, resume, konkurs, oglas za posao, job, hiring, vacancy, praksa, pripravnik</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kategorija</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Informacione / Edukacione</h3>
          <p className="text-sm text-gray-600 mb-0">šta je, kako, zašto, what is, how to, definicija, pojam, wikipedia, wiki, tutorial, kurs, obuka, edukacija, webinar</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kategorija</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">DIY / Uradi sam</h3>
          <p className="text-sm text-gray-600 mb-0">DIY, uradi sam, napravi sam, homemade, handmade, tutorial, how to make, kako napraviti</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kategorija</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Jeftino / Budget</h3>
          <p className="text-sm text-gray-600 mb-0">jeftino, najjeftinije, povoljno, budget, cheap, discount, popust, akcija, rasprodaja, sniženje, second hand, polovno, rabljeno</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kategorija</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Negativne asocijacije</h3>
          <p className="text-sm text-gray-600 mb-0">problem, ne radi, complaint, žalba, prevara, scam, fake, lažno, opasno, rizik, bug, greška</p>
        </div>
      </div>

      <hr />

      {/* ── Liste po industrijama ── */}
      <h2>Negativne ključne reči po industrijama</h2>
      <p>
        Pored univerzalne liste, svaka industrija ima specifične termine koje bi trebalo blokirati. Evo lista za najčešće industrije sa kojima radim.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">eCommerce — Moda i odeća</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">jeftino, polovno, second hand, outlet, imitacija, replika, fake, kako sašiti, šivenje, pattern, kroj, DIY, trendovi, fashion week, modni dizajner posao, vintage, cosplay, kostim</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">eCommerce — Elektronika</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">polovno, refurbished, korišćeno, broken, pokvaren, popravka, servis, delovi, kako popraviti, teardown, review, unboxing, drajveri, firmware, manual, uputstvo, specifikacije</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">B2B / SaaS</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">besplatno, free, open source, crack, pirate, nulled, developer posao, programer plata, it karijera, kurs, tutorial, za početnike, student, personal use</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Lokalne usluge</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">[gradovi van zone], online, remote, na daljinu, besplatno, jeftino, posao, zapošljavanje, plata, uradi sam, kako sam, DIY, žalba, tužba, advokat, inspekcija</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Turizam / Hoteli</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">besplatno, free, budget, hostel (za hotele), camping, posao u hotelu, recepcioner, konobar posao, turistički vodič posao, slike, fotografije, vlog, blog, iskustva, forum</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Nekretnine</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">iznajmljivanje (ako prodajete), prodaja (ako iznajmljujete), poslovni prostor (za residential), agent za nekretnine posao, broker, licenca, cene nekretnina, prognoza, statistika, foreclosure, ovrha</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">7</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Fitness / Zdravlje</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">besplatno, free, youtube, app, doktor, lekar, bolnica, dijagnoza, lek, terapija, steroidi, anabolici, brzo mršavljenje, ekstremna dijeta, trener posao, fitness instruktor</p>
      </div>

      <hr />

      {/* ── Kako pronaći negativne reči ── */}
      <h2>Kako pronaći negativne ključne reči</h2>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">5 metoda za pronalaženje negatives</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Search Terms Report</strong> <span className="text-gray-500">— najvažnija metoda. Filter: last 7 dana, sort po cost-u, pitanje: {`"Da li bi ova osoba kupila od mene?"`} Minimum jednom nedeljno.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Pre-launch brainstorming</strong> <span className="text-gray-500">— zamislite ko NIJE vaš kupac, razmislite o ambiguous keywords, pogledajte Keyword Planner suggestions</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Competitor research</strong> <span className="text-gray-500">— pretražite vaše ključne reči na Google, pogledajte {`"Searches related to..."`}, identifikujte irelevantne</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Google Autocomplete</strong> <span className="text-gray-500">— počnite kucati ključnu reč, pogledajte suggestions, identifikujte irelevantne</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Customer support mining</strong> <span className="text-gray-500">— pitajte support tim koja pitanja dolaze od ljudi koji NISU pravi kupci</span></div>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Organizacija i struktura ── */}
      <h2>Organizacija negativnih ključnih reči</h2>
      <p>
        Pravilna organizacija je jednako važna kao i same reči. Preporučujem trostepeni sistem koji održava konzistentnost kroz ceo nalog.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Nivo</th>
              <th className="py-3 px-4 font-heading font-semibold">Gde se dodaje</th>
              <th className="py-3 px-4 font-heading font-semibold">Kada koristiti</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Negative Keyword Lists</td>
              <td className="py-3 px-4">Account level (deljena lista)</td>
              <td className="py-3 px-4">Za universal negatives koje važe za sve kampanje</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Campaign Level</td>
              <td className="py-3 px-4">Specifična kampanja</td>
              <td className="py-3 px-4">Za negatives specifične za tu kampanju</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Ad Group Level</td>
              <td className="py-3 px-4">Specifična Ad Group</td>
              <td className="py-3 px-4">Za keyword sculpting i granularnu kontrolu</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <h3 className="mt-0 mb-4 font-heading font-bold">Kako kreirati Negative Keyword List</h3>
        <ol className="mb-0 text-sm">
          <li>Tools &amp; Settings → Shared library → Negative keyword lists</li>
          <li>Kliknite + za novu listu</li>
          <li>Imenujte listu (npr. {`"Universal Negatives"`})</li>
          <li>Dodajte ključne reči</li>
          <li>Primenite na sve relevantne kampanje</li>
        </ol>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Naming convention za liste</p>
        <p className="text-blue-800 text-sm mb-0">
          Koristite format: [Tip] - [Opis]. Primeri: {`"Universal - Free & Job Terms"`}, {`"Industry - eCommerce Fashion"`}, {`"Campaign - Brand Protection"`}
        </p>
      </div>

      <hr />

      {/* ── Audit checklist ── */}
      <h2>Negativne ključne reči — audit checklist</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Nedeljno</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Search Terms Review</h3>
          <ul className="text-sm mb-0">
            <li>Top pretrage po cost-u</li>
            <li>Nove negative reči dodane</li>
            <li>Provera da negatives ne blokiraju dobre pretrage</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Mesečno</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Deep Dive</h3>
          <ul className="text-sm mb-0">
            <li>Top 100 search terms po cost-u</li>
            <li>Universal lista ažurirana</li>
            <li>Industry lista ažurirana</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kvartalno</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Kompletna revizija</h3>
          <ul className="text-sm mb-0">
            <li>90-dnevna Search Terms analiza</li>
            <li>Cross-campaign negative analiza</li>
            <li>Liste reorganizacija</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Pro tip</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Kompletna provera naloga</h3>
          <p className="text-sm text-gray-600 mb-0">Pogledajte <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="underline font-semibold">Google Ads audit checklist</Link> za kompletnu reviziju naloga.</p>
        </div>
      </div>

      <hr />

      {/* ── Najčešće greške ── */}
      <h2>Najčešće greške sa negativnim ključnim rečima</h2>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #1</p>
          <p className="font-semibold mb-2">Nikada ne proveravaju Search Terms</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Postavite nedeljni reminder za Search Terms review. Ovo je najvažnija optimizaciona aktivnost za negativne reči.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #2</p>
          <p className="font-semibold mb-2">Previše agresivno blokiranje bez analize</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Proverite volume i konverzije pre dodavanja. Možda neka reč izgleda irelevantno ali zapravo konvertuje.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #3</p>
          <p className="font-semibold mb-2">Pogrešan match type za negativne reči</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Koristite Negative Broad za opšte termine. Exact negative propušta varijacije — {`"besplatno"`} u Exact ne blokira {`"besplatno preuzimanje CRM"`}.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #4</p>
          <p className="font-semibold mb-2">Bez deljenih lista — sve ručno po kampanjama</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Kreirajte Negative Keyword Lists i primenite na sve kampanje. Konzistentnost i efikasnost.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #5</p>
          <p className="font-semibold mb-2">Ignorisanje sinonima i engleskih verzija</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Dodajte i srpske i engleske verzije. Blokirajte {`"besplatno"`} I {`"free"`}, {`"posao"`} I {`"job"`}. Negative Broad ne hvata sinonime automatski.</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2>Najčešća pitanja o negativnim ključnim rečima</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko negativnih ključnih reči je dovoljno?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Nema gornjeg limita. Tipično: 50-200 za starter listu, raste vremenom. Kvalitet je važniji od kvantiteta — bolje 50 pažljivo odabranih nego 500 nasumičnih.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li negativne ključne reči utiču na Quality Score?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Indirektno — da. Bolji CTR (manje irelevantnih prikaza) → bolji Expected CTR → bolji QS. Više o tome u <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }} className="underline">Quality Score vodiču</Link>.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Mogu li slučajno blokirati dobre pretrage?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Da, to je realan rizik. Zato: (1) koristite podatke pre dodavanja, (2) proveravajte Search Terms nakon dodavanja, (3) budite pažljivi sa Broad negatives za kratke reči koje imaju više značenja.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko često pregledati i ažurirati negative liste?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum: jednom nedeljno Search Terms review. Idealno u prva 30 dana: svaka 2-3 dana. Za zrele kampanje: nedeljno + mesečna deep dive + kvartalna kompletna revizija.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li postoje obavezne negativne ključne reči za svaki nalog?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Universal lista (besplatno, posao, DIY) je dobar starter za većinu biznisa. Ali uvek prilagodite svom biznisu — {`"besplatno"`} možda nije negative ako nudite free trial ili besplatnu dostavu.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Negative Broad vs Negative Phrase — kada koji?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Broad: za opšte termine koje uvek želite blokirati (besplatno, posao) — pokriva sve pretrage sa tom reči. Phrase: za specifične fraze gde redosled ima značaj. Exact: retko — samo za vrlo specifične slučajeve gde je samo ta tačna pretraga problem.
          </div>
        </details>
      </div>

      <hr />

      {/* ── Zaključak + CTA ── */}
      <h2>Zaključak</h2>
      <p>
        Negativne ključne reči su jedna od najmoćnijih optimizacionih poluga u Google Ads-u. Pravilna strategija može smanjiti wasted spend za 30%+ i poboljšati ROAS za 20-50%. Počnite sa univerzalnom listom, dodajte industrijsku listu, i pregledajte Search Terms nedeljno. Rezultati su vidljivi odmah.
      </p>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Bacate li novac na irelevantne klikove?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Besplatna analiza Search Terms-a sa identifikacijom wasted spend-a i preporukama za negativne ključne reči.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <hr />

      {/* ── Povezani vodiči ── */}
      <h2>Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Ključne reči — kompletan vodič</p>
          <p className="text-xs text-gray-500 mb-0">Od istraživanja do optimizacije ključnih reči</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Quality Score vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako poboljšati QS i smanjiti CPC</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Audit checklist</p>
          <p className="text-xs text-gray-500 mb-0">80+ tačaka za kompletnu reviziju naloga</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Najčešće Google Ads greške</p>
          <p className="text-xs text-gray-500 mb-0">12 grešaka koje uništavaju performanse</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Februar 2026
      </div>
      <div className="text-sm text-gray-500">
        Autor: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}


