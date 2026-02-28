import { Link } from "@/i18n/navigation";

export default function QualityScoreVodicPost() {
  return (
    <>
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Quality Score je Google-ova ocena relevantnosti na skali 1-10. Direktno utiče na poziciju i cenu klika. Poboljšanje QS sa 5 na 7 smanjuje CPC za 28%. Tri komponente: Expected CTR, Ad Relevance i Landing Page Experience.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1-10</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">skala ocenjivanja</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">komponente QS-a</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">28%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">CPC ušteda (QS 5→7)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">400%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">CPC penalizacija za QS 1</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Šta je Quality Score ── */}
      <h2>Šta je Quality Score i zašto je bitan</h2>
      <p>
        <a href="https://support.google.com/google-ads/answer/6167118" target="_blank" rel="noopener noreferrer">Quality Score</a> je Google-ova dijagnostička ocena relevantnosti vaših ključnih reči, oglasa i landing page-a. Ocenjuje se na skali 1-10 za svaku ključnu reč u vašem nalogu.
      </p>
      <p>
        U praksi, ovo je jedna od najvažnijih metrika za kontrolu troškova. Na svakom auditu koji radim, vidim da nalozi sa prosečnim <a href="https://support.google.com/google-ads/answer/6167118" target="_blank" rel="noopener noreferrer">QS ispod 5</a> plaćaju 50-400% više po kliku nego što bi trebali.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Formula: Ad Rank = Max CPC Bid × Quality Score × Expected Impact of Extensions
        </p>
      </div>

      <p>Viši Quality Score znači:</p>
      <ul>
        <li><strong>Bolja pozicija</strong> — viši Ad Rank bez povećanja bid-a</li>
        <li><strong>Niži CPC</strong> — plaćate manje za isti klik</li>
        <li><strong>Više impression-a</strong> — češće prikazivanje za isti budžet</li>
        <li><strong>Pristup premium pozicijama</strong> — neke pozicije zahtevaju minimum Ad Rank</li>
      </ul>

      <hr />

      {/* ── CPC uticaj ── */}
      <h2>Koliko Quality Score utiče na cenu klika</h2>
      <p>
        Ovo je najvažnija tabela u celom vodiču. Pokazuje koliko više ili manje plaćate u zavisnosti od QS-a, sa baseline-om na QS 5.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Quality Score</th>
              <th className="py-3 px-4 font-heading font-semibold">CPC uticaj</th>
              <th className="py-3 px-4 font-heading font-semibold">Primer (baseline €1.00)</th>
              <th className="py-3 px-4 font-heading font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">10</td>
              <td className="py-3 px-4">-50%</td>
              <td className="py-3 px-4">€0.50</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Odlično</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">9</td>
              <td className="py-3 px-4">-44%</td>
              <td className="py-3 px-4">€0.56</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Odlično</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">8</td>
              <td className="py-3 px-4">-37%</td>
              <td className="py-3 px-4">€0.63</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Vrlo dobro</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">7</td>
              <td className="py-3 px-4">-28%</td>
              <td className="py-3 px-4">€0.72</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Dobro</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">6</td>
              <td className="py-3 px-4">-17%</td>
              <td className="py-3 px-4">€0.83</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">OK</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">5</td>
              <td className="py-3 px-4">Baseline (0%)</td>
              <td className="py-3 px-4">€1.00</td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Prosek</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">4</td>
              <td className="py-3 px-4">+25%</td>
              <td className="py-3 px-4">€1.25</td>
              <td className="py-3 px-4"><span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded">Ispod proseka</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">3</td>
              <td className="py-3 px-4">+67%</td>
              <td className="py-3 px-4">€1.67</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Loš</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">2</td>
              <td className="py-3 px-4">+150%</td>
              <td className="py-3 px-4">€2.50</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Kritičan</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">1</td>
              <td className="py-3 px-4">+400%</td>
              <td className="py-3 px-4">€5.00</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Hitna akcija</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">ROI primer: QS poboljšanje sa 5 na 7</p>
        <p className="text-sm text-yellow-900 mb-0">
          Mesečni spend €5,000 sa QS 5. Poboljšanjem na QS 7, CPC se smanjuje za 28%. To znači ili €1,400 uštede mesečno za isti broj klikova, ili 28% više klikova za isti budžet. Na godišnjem nivou: €16,800 uštede.
        </p>
      </div>

      <hr />

      {/* ── Tri komponente ── */}
      <h2>Tri komponente Quality Score-a</h2>
      <p>
        Svaka komponenta se ocenjuje kao: Above average, Average, ili Below average. Razumevanje koja komponenta vuče QS dole je ključ za efikasnu optimizaciju.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">~40% uticaja</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Expected CTR</h3>
          <p className="text-sm text-gray-600 mb-0">Verovatnoća da će neko kliknuti na vaš oglas. Zavisi od headline-ova, CTA-a, extensions i istorijskih performansi.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">~20% uticaja</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Ad Relevance</h3>
          <p className="text-sm text-gray-600 mb-0">Koliko je vaš oglas relevantan za ključnu reč. Zavisi od podudaranja ključne reči sa tekstom oglasa.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">~40% uticaja</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Landing Page Experience</h3>
          <p className="text-sm text-gray-600 mb-0">Koliko je LP koristan i relevantan. Zavisi od sadržaja, brzine, mobile optimizacije i trust signala.</p>
        </div>
      </div>

      <h3>Dijagnostička tabela — gde je problem?</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Exp. CTR</th>
              <th className="py-3 px-4 font-heading font-semibold">Ad Relevance</th>
              <th className="py-3 px-4 font-heading font-semibold">LP Exp.</th>
              <th className="py-3 px-4 font-heading font-semibold">Fokus optimizacije</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4 font-medium">Poboljšajte oglas (headline, CTA, extensions)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4 font-medium">Poboljšajte relevantnost (ključna reč u oglasu)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4 font-medium">Poboljšajte landing page (brzina, sadržaj, mobile)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4 font-medium">Restrukturirajte Ad Group (uža grupacija)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4 font-medium">Kompletna revizija — <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="underline">audit checklist</Link></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── Poboljšanje Expected CTR ── */}
      <h2>Kako poboljšati Expected CTR</h2>
      <p>Expected CTR čini ~40% Quality Score-a i najdirektnije se može poboljšati optimizacijom oglasa.</p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ključna reč u headline-u</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Umesto generičnog {`"Kvalitetni proizvodi | Naručite danas"`} koristite {`"CRM Softver Za Mala Preduzeća | Besplatan Trial"`}.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Koristite brojke i specifičnost</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">{`"Preko 500 Proizvoda"`}, {`"Uštedite Do 40%"`}, {`"30 Dana Garancije"`}, {`"24/7 Podrška"`} — konkretne brojke privlače pažnju i povećavaju CTR.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Jak CTA i USP u headline</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">Jasna akcija: {`"Naručite Danas"`}, {`"Besplatna Procena"`}. Jedinstven USP: {`"Jedini Sa Garancijom Povrata"`}, {`"Dostava Istog Dana"`}.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dodajte sve extensions</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Extensions povećavaju veličinu oglasa i direktno utiču na CTR.</p>
        <ul className="text-sm">
          <li>Sitelinks: +10-20% CTR</li>
          <li>Callouts: +5-10% CTR</li>
          <li>Structured Snippets: +5-10% CTR</li>
        </ul>
      </div>

      <hr />

      {/* ── Poboljšanje Ad Relevance ── */}
      <h2>Kako poboljšati Ad Relevance</h2>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">4 taktike za bolju relevantnost</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Tematska grupacija</strong> <span className="text-gray-500">— 10-20 ključnih reči po Ad Group, tematski povezane. <Link href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }} className="underline">Vodič za ključne reči</Link></span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Ključna reč u oglasu</strong> <span className="text-gray-500">— minimalno u jednom headline-u i u description-u</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Message match</strong> <span className="text-gray-500">— oglas za {`"CRM cena"`} govori o cenama, oglas za {`"CRM demo"`} govori o demo-u</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Izbegavajte generic oglase</strong> <span className="text-gray-500">— {`"Kvalitetni Proizvodi"`} ne znači ništa. Budite specifični.</span></div>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Poboljšanje LP Experience ── */}
      <h2>Kako poboljšati Landing Page Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prioritet 1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Relevantnost sadržaja</h3>
          <p className="text-sm text-gray-600 mb-0">LP mora odgovarati ključnoj reči i oglasu. Dedicirane LP za svaku temu — ne šaljite sve na homepage.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prioritet 2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Brzina stranice</h3>
          <p className="text-sm text-gray-600 mb-0">Cilj: &lt; 3 sekunde load time. Kompresija slika (WebP), minifikacija CSS/JS, CDN, caching, lazy loading.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prioritet 3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Mobile optimizacija</h3>
          <p className="text-sm text-gray-600 mb-0">60%+ saobraćaja je sa mobilnih. Responsive dizajn, čitljivo bez zumiranja, klikabilni buttoni.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prioritet 4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Trust signali</h3>
          <p className="text-sm text-gray-600 mb-0">Reviews, testimonials, trust badges, SSL, garancije, kontakt informacije. Korisnik mora imati poverenje.</p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Landing Page checklist</p>
        <p className="text-blue-800 text-sm mb-0">
          Relevantna za ključnu reč ✓ Message match sa oglasom ✓ Load time &lt; 3s ✓ Mobile-friendly ✓ Jasan CTA iznad fold-a ✓ Trust signals ✓ SSL (https) ✓ Bez intrusive pop-ups ✓
        </p>
      </div>

      <hr />

      {/* ── 30-dnevni plan ── */}
      <h2>30-dnevni plan za poboljšanje Quality Score-a</h2>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Nedelja 1: Audit</strong> <span className="text-gray-500">— dodajte QS kolone, identifikujte problematične keywords, analizirajte komponente</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Nedelja 2: Ad Relevance</strong> <span className="text-gray-500">— restrukturirajte široke Ad Groups, napišite specifične oglase, ključna reč u headline</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Nedelja 3: Landing Pages</strong> <span className="text-gray-500">— page speed provera, dedicirane LP ako potrebno, trust signals</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Nedelja 4: CTR optimizacija</strong> <span className="text-gray-500">— testirajte nove oglase, dodajte sve extensions, A/B test headline-ova</span></div>
          </div>
        </div>
      </div>

      <hr />

      {/* ── QS po tipu kampanje ── */}
      <h2>Quality Score po tipu kampanje</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Tip kampanje</th>
              <th className="py-3 px-4 font-heading font-semibold">QS vidljivost</th>
              <th className="py-3 px-4 font-heading font-semibold">Na šta se fokusirati</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Search</td>
              <td className="py-3 px-4">Potpuno vidljiv (1-10)</td>
              <td className="py-3 px-4">Sve tri komponente — najvažniji</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Display</td>
              <td className="py-3 px-4">Manje transparentan</td>
              <td className="py-3 px-4">Ad relevance, LP experience, istorijske performanse</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Shopping</td>
              <td className="py-3 px-4">Nema klasičan QS</td>
              <td className="py-3 px-4">Product feed kvalitet, cene, seller ratings</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Performance Max</td>
              <td className="py-3 px-4">Nije vidljiv</td>
              <td className="py-3 px-4">Google koristi interne signale kvaliteta</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── Najčešće greške ── */}
      <h2>Najčešće greške sa Quality Score-om</h2>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #1</p>
          <p className="font-semibold mb-2">Opsesija sa QS 10 za svaku ključnu reč</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> QS 7-8 je odličan i sasvim dovoljan. Fokusirajte se na business metrike (CPA, ROAS) — QS je dijagnostički alat, ne cilj sam po sebi.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #2</p>
          <p className="font-semibold mb-2">Potpuno ignorisanje QS-a</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Nizak QS = viši troškovi = lošiji ROI. Koristite QS kao dijagnostički alat za identifikaciju problema, posebno za ključne reči sa najvećim spend-om.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #3</p>
          <p className="font-semibold mb-2">50+ ključnih reči u jednoj Ad Group</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Tematska grupacija sa 10-20 ključnih reči max. Nemoguće je napisati relevantan oglas za 50 različitih tema.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #4</p>
          <p className="font-semibold mb-2">Svi oglasi vode na homepage</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Kreirajte dedicirane landing page-ove za svaku temu/Ad Group. Homepage nije relevantan za specifične pretrage.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #5</p>
          <p className="font-semibold mb-2">Spor sajt (5+ sekundi load time)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Speed optimization je prioritet. Kompresija slika, lazy loading, caching. Cilj: &lt; 3 sekunde. Koristite PageSpeed Insights za dijagnostiku.</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2>Najčešća pitanja o Quality Score-u</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koji je dobar Quality Score?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            7+ je dobar, 8-9 je odličan, 10 je idealan ali nije uvek potreban niti realan. Za branded ključne reči očekujte 8-10, za generičke komercijalne 6-8 je sasvim solidan rezultat.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko brzo se Quality Score menja?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            QS se ažurira na osnovu kumulativnih performansi, ali promene vidite postepeno — obično dani do nedelje. Veće promene (restrukturiranje Ad Groups, nove LP) zahtevaju više podataka da se reflektuju.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li QS utiče na Display i Shopping kampanje?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Display ima sličan ali manje transparentan sistem. Shopping nema klasičan QS — koristi feed quality, price competitiveness i seller ratings. PMax koristi interne signale koji nisu vidljivi.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Mogu li imati visok QS i loše konverzije?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Da. QS meri relevantnost, ne kvalitet ponude. Možete imati savršeno relevantan oglas i LP za ponudu koja nije konkurentna. QS je samo deo jednačine — ponuda, cena i korisničko iskustvo su jednako važni.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto imam nizak QS za branded ključne reči?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Verovatno konkurenti bidduju na vaš brand. Branded reči bi trebalo da imaju QS 8-10. Proverite: da li je brand u headline-u oglasa, da li LP ima brand prominentno, da li ima tehničkih problema sa sajtom.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li pauziranje loših ključnih reči poboljšava QS ostalih?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Ne direktno — ne postoji account-level QS. Ali indirektno, bolji fokus na kvalitetne reči poboljšava ukupne performanse naloga što vremenom pomaže svim metrikama.
          </div>
        </details>
      </div>

      <hr />

      {/* ── Zaključak + CTA ── */}
      <h2>Zaključak</h2>
      <p>
        Quality Score je najmoćniji alat za kontrolu troškova u Google Ads-u. Poboljšanje sa QS 5 na 7 smanjuje CPC za 28%, što na godišnjem nivou može značiti hiljade evra uštede. Fokusirajte se na tri komponente — Expected CTR, Ad Relevance i Landing Page Experience — koristeći dijagnostičku tabelu da identifikujete gde je problem.
      </p>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Plaćate li previše po kliku?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Besplatna QS analiza vašeg naloga sa identifikacijom ključnih reči koje vas koštaju previše i konkretnim preporukama za poboljšanje.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <hr />

      {/* ── Povezani vodiči ── */}
      <h2>Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads upravljanje</p>
          <p className="text-xs text-gray-500 mb-0">Poboljšajte Quality Score uz profesionalno upravljanje</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Ključne reči — kompletan vodič</p>
          <p className="text-xs text-gray-500 mb-0">Od istraživanja do optimizacije ključnih reči</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negativne ključne reči — kompletna lista</p>
          <p className="text-xs text-gray-500 mb-0">200+ negativnih reči po industrijama</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Najčešće Google Ads greške</p>
          <p className="text-xs text-gray-500 mb-0">12 grešaka koje uništavaju performanse</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimizacija" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads optimizacija — 30 taktika</p>
          <p className="text-xs text-gray-500 mb-0">Kompletna strategija za poboljšanje performansi</p>
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


