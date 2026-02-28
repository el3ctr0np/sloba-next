import { Link } from "@/i18n/navigation";

export default function EcommerceVsB2BPost() {
  return (
    <>
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
          Ukratko
        </p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          eCommerce i B2B Google Ads strategije su fundamentalno različite — customer journey, metrički prioriteti, bidding strategije i conversion tracking nisu isti. Preporučujem prilagođen pristup jer primena pogrešne strategije bacaju novac.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              2
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Modela</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              8
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Ključnih razlika</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              4+4
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Strategije</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              1
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Pravi pristup</p>
          </div>
        </div>
      </div>

      <p>
        &quot;Radimo Google Ads, ali ne vidimo rezultate.&quot;
      </p>
      <p>
        Kada čujem ovu rečenicu, prvo pitanje je: da li je strategija prilagođena vašem poslovnom modelu?
      </p>
      <p>
        eCommerce i B2B imaju fundamentalno različite karakteristike. Customer journey, decision making process, vrednost konverzije, metrike koje pratite — sve je različito.
      </p>
      <p>
        A opet, vidim isti pristup primenjivan na oba: iste vrste kampanja, isti KPI-jevi, ista očekivanja.
      </p>
      <p>
        U ovom vodiču pokrivam ključne razlike i specifične strategije za svaki model.
      </p>

      <hr />

      <h2>Zašto se eCommerce i B2B razlikuju u Google Ads-u</h2>
      <p>
        Pre nego što pređemo na konkretne taktike, potrebno je razumeti fundamentalne razlike između dva modela.
      </p>
      <p>
        <strong>eCommerce:</strong> Korisnik zna šta želi, traži gde da kupi. &quot;Kupi Nike Air Max 90 bele&quot; — intent je jasan, ciklus kratak, konverzija je kupovina.
      </p>
      <p>
        <strong>B2B:</strong> Korisnik ima problem, traži rešenje. &quot;Kako automatizovati fakturisanje&quot; — tek istražuje opcije, ciklus dug, konverzija je lead.
      </p>
      <p>
        Ova razlika diktira sve ostalo — od <a href="https://support.google.com/google-ads/answer/2567043" target="_blank" rel="noopener noreferrer">tipa kampanja</a> do načina merenja uspeha.
      </p>

      <hr />

      <h2>Ključne razlike — poređenje</h2>
      <p>
        Preporučujem da prvo razumete direktne razlike između modela pre nego što definišete strategiju.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Aspekt</th>
              <th className="py-3 px-4 font-heading font-semibold">eCommerce</th>
              <th className="py-3 px-4 font-heading font-semibold">B2B</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Sales Cycle</td>
              <td className="py-3 px-4">Minuti do dana</td>
              <td className="py-3 px-4">Nedelje do meseci</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Decision Makers</td>
              <td className="py-3 px-4">1 osoba</td>
              <td className="py-3 px-4">2-10 osoba</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Touchpoints</td>
              <td className="py-3 px-4">1-5 interakcija</td>
              <td className="py-3 px-4">10-50+ interakcija</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Primarna konverzija</td>
              <td className="py-3 px-4">Kupovina (sa vrednošću)</td>
              <td className="py-3 px-4">Lead (forma, demo, poziv)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Vrednost</td>
              <td className="py-3 px-4">€10 - €500 (tipično)</td>
              <td className="py-3 px-4">€1,000 - €100,000+</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Volume</td>
              <td className="py-3 px-4">Visok (stotine transakcija)</td>
              <td className="py-3 px-4">Nizak (desetine lead-ova)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Primarni KPI</td>
              <td className="py-3 px-4">ROAS, Revenue, Conversion Rate</td>
              <td className="py-3 px-4">CPL, Lead Quality, SQL Rate</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Ključne kampanje</td>
              <td className="py-3 px-4">Shopping, PMax, Brand Search</td>
              <td className="py-3 px-4">Non-Brand Search, Remarketing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Ignorisanje ovih razlika vodi ka primeni pogrešne strategije. <a href="https://support.google.com/google-ads/answer/2567043" target="_blank" rel="noopener noreferrer">Shopping kampanje</a> ne postoje za B2B. Lead-gen tracking ne daje ROAS za eCommerce. Prilagodite pristup modelu.
        </p>
      </div>

      <hr />

      <h2>Google Ads strategija za eCommerce</h2>
      <p>
        Za eCommerce, Google Ads strategija je fokusirana na brzu konverziju, visok ROAS i Shopping kampanje kao ključni kanal.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              1
            </span>
            <div>
              <strong>Brand Search</strong>{" "}
              <span className="text-gray-500">
                — zaštita brenda, visok CTR, najbolji ROAS
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              2
            </span>
            <div>
              <strong>Google Shopping</strong>{" "}
              <span className="text-gray-500">
                — Standard Shopping (kontrola) + PMax (skaliranje)
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              3
            </span>
            <div>
              <strong>Non-Brand Search</strong>{" "}
              <span className="text-gray-500">
                — generičke pretrage, viši CPC, dopunski kanal
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              4
            </span>
            <div>
              <strong>Remarketing</strong>{" "}
              <span className="text-gray-500">
                — Cart Abandoners, Product Viewers, Past Customers
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            1
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Shopping kampanje — srce eCommerce strategije
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Za većinu eCommerce biznisa, Shopping kampanje donose 60-80% prihoda iz Google Ads. Vizuelni format, pre-kvalifikacija cenom, visok intent.
        </p>
        <ul className="text-sm">
          <li>
            <strong>Feed quality</strong> je #1 prioritet — title optimizacija, atributi, custom labels za segmentaciju
          </li>
          <li>
            <strong>Bidding:</strong> Target ROAS sa dynamic conversion values (šaljite stvarnu vrednost transakcije)
          </li>
          <li>
            <strong>Segmentacija:</strong> Custom labels po marži, best-sellers, sezonalnost
          </li>
          <li>
            <strong>Kontrola:</strong> Negative keywords za irelevantne pretrage
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            2
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Search kampanje</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Brand Search za zaštitu + Non-Brand Search za dopunski volumen. Shopping &gt; Search za većinu eCommerce kategorija.
        </p>
        <ul className="text-sm">
          <li>
            <strong>Brand:</strong> Obvezno — konkurenti mogu da se prikazuju na vaš brand
          </li>
          <li>
            <strong>Non-Brand:</strong> Generičke pretrage (&quot;patike Nike&quot;, &quot;bluetooth slušalice&quot;)
          </li>
          <li>
            <strong>Kategorije:</strong> Mid-funnel (&quot;najbolje patike za trčanje&quot;)
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            3
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Remarketing — recovery strategija
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          97% posetilaca ne kupi prvi put. Remarketing je obavezan za konverziju &quot;gotovo kupljenih&quot; transakcija.
        </p>
        <ul className="text-sm">
          <li>
            <strong>Cart Abandoners (1-7 dana):</strong> Agresivan pristup, možda sa incentive (popust 10%)
          </li>
          <li>
            <strong>Product Viewers (3-14 dana):</strong> Dinamički product ads (prikazuju proizvod koji su gledali)
          </li>
          <li>
            <strong>Past Customers (30-180 dana):</strong> Cross-sell, upsell, novi proizvodi
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            4
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Performance Max — skaliranje sa oprezom
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          PMax je automated kanal koji pokriva sve Google inventory (Search, Shopping, Display, YouTube). Koristi se za skaliranje kada imate stabilan ROAS sa Shopping/Search.
        </p>
        <ul className="text-sm">
          <li>
            <strong>Kada koristiti:</strong> Nakon što imate 50+ konverzija mesečno i stabilan ROAS
          </li>
          <li>
            <strong>Asset groups:</strong> Segmentirajte po kategorijama ili best-sellers
          </li>
          <li>
            <strong>Oprez:</strong> PMax može da kanibalizuje Brand Search — pratite search term reportove
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Povezan vodič</p>
        <p className="text-blue-800 text-sm mb-0">
          Detaljnije o Shopping kampanjama: <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="underline font-semibold">Google Shopping vodič — kako pokrenuti i optimizovati</Link>
        </p>
      </div>

      <hr />

      <h2>Google Ads strategija za B2B</h2>
      <p>
        Za B2B, Google Ads strategija je fokusirana na lead quality (ne volume), duži sales cycle, i offline conversion tracking.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              1
            </span>
            <div>
              <strong>Non-Brand Search</strong>{" "}
              <span className="text-gray-500">
                — Problem, Solution, Product keywords (50-60% budžeta)
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              2
            </span>
            <div>
              <strong>Brand Search</strong>{" "}
              <span className="text-gray-500">
                — zaštita + authority, najbolji conversion rate
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              3
            </span>
            <div>
              <strong>Remarketing</strong>{" "}
              <span className="text-gray-500">
                — nurture kroz duži ciklus (30-90 dana window)
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              4
            </span>
            <div>
              <strong>Offline Conversion Import</strong>{" "}
              <span className="text-gray-500">
                — GCLID tracking, SQL &amp; Won Deal import za pravi feedback
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            1
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Search kampanje — fokus na intent keywords
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Za B2B, Search je dominantan kanal. Shopping ne postoji, Display ima ograničen impact. Pokrijte ceo funnel, ali najveći budžet na high-intent.
        </p>
        <ul className="text-sm">
          <li>
            <strong>Problem keywords:</strong> &quot;kako smanjiti troškove IT-a&quot; — nizak intent, niži CPC
          </li>
          <li>
            <strong>Solution keywords:</strong> &quot;IT outsourcing usluge&quot; — srednji intent, srednji CPC
          </li>
          <li>
            <strong>Product keywords:</strong> &quot;cloud ERP za proizvodnju&quot; — visok intent, viši CPC
          </li>
          <li>
            <strong>Competitor keywords:</strong> &quot;SAP vs Oracle&quot; — visok intent, visok CPC
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            2
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Content/Lead magnet strategija
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          B2B buyer ne želi odmah da ostavi kontakt. Ponudite besplatan content (whitepaper, checklist, webinar) kao prvi korak.
        </p>
        <ul className="text-sm">
          <li>
            <strong>Top-of-funnel:</strong> Problem-based content (&quot;Kako smanjiti troškove&quot; &rarr; &quot;Preuzmite besplatnu checklist&quot;)
          </li>
          <li>
            <strong>Mid-funnel:</strong> Solution content (case study, demo video)
          </li>
          <li>
            <strong>Bottom-funnel:</strong> Direktna ponuda (demo, konsultacije)
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            3
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Remarketing — nurture kroz duži ciklus
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          B2B remarketing je drugačiji — duži consideration period (30-90 dana), više touchpoints, fokus na value nurture.
        </p>
        <ul className="text-sm">
          <li>
            <strong>Blog Readers (30 dana):</strong> Lead magnet, webinar invite
          </li>
          <li>
            <strong>Resource Downloaders (60 dana):</strong> Case study, demo offer
          </li>
          <li>
            <strong>Pricing Page (14 dana):</strong> Direktna ponuda, konsultacije (high-intent segment)
          </li>
          <li>
            <strong>Demo No-Shows (7 dana):</strong> Reschedule, alternative content
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            4
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Offline Conversion Import — kritična razlika
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          U eCommerce, konverzija = prodaja. U B2B, konverzija = lead. Ali nisu svi lead-ovi jednaki. Offline import rešava problem kvaliteta.
        </p>
        <ul className="text-sm">
          <li>
            <strong>Problem:</strong> Optimizujete ka form submissions, dobijate volume ali ne kvalitet
          </li>
          <li>
            <strong>Rešenje:</strong> Čuvajte GCLID sa svakim lead-om &rarr; pratite kroz sales pipeline &rarr; importujte &quot;SQL&quot; ili &quot;Won&quot; nazad u Google Ads
          </li>
          <li>
            <strong>Impact:</strong> Google uči koji tip lead-ova se zatvara. Volume može pasti, ali kvalitet drastično raste.
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Povezani vodiči</p>
        <p className="text-blue-800 text-sm mb-0">
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="underline font-semibold">Conversion tracking vodič</Link> za offline import setup &amp; <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="underline font-semibold">Remarketing vodič</Link> za nurture strategiju.
        </p>
      </div>

      <hr />

      <h2>KPI-jevi i merenje uspeha</h2>
      <p>
        Preporučujem različite KPI-jeve za eCommerce i B2B jer optimizacija ka pogrešnim metrikama bacaju novac.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            eCommerce
          </p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">
            Primarni KPI-jevi
          </h3>
          <p className="text-sm text-gray-600 mb-0">
            <strong>ROAS</strong> (Return on Ad Spend) — prihod / trošak<br />
            <strong>Revenue</strong> — ukupan prihod iz kampanja<br />
            <strong>Conversion Rate</strong> — procenat posetilaca koji kupe<br />
            <strong>AOV</strong> (Average Order Value)<br />
            <strong>CPA</strong> (Cost per Acquisition)
          </p>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            B2B
          </p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">
            Primarni KPI-jevi
          </h3>
          <p className="text-sm text-gray-600 mb-0">
            <strong>CPL</strong> (Cost per Lead) — ali oprez, nije sve o volumenu<br />
            <strong>Lead Quality Score</strong> — % kvalifikovanih lead-ova<br />
            <strong>SQL Rate</strong> — % lead-ova koji postanu Sales Qualified<br />
            <strong>Pipeline Value</strong> — ukupna vrednost potencijalnih dealova<br />
            <strong>Cost per SQL</strong> (pravi KPI, ne CPL)
          </p>
        </div>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Metrika</th>
              <th className="py-3 px-4 font-heading font-semibold">eCommerce Benchmark</th>
              <th className="py-3 px-4 font-heading font-semibold">B2B Benchmark</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">CPC (prosek)</td>
              <td className="py-3 px-4">€0.30 - €1.50</td>
              <td className="py-3 px-4">€2.00 - €10.00+</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Conversion Rate</td>
              <td className="py-3 px-4">2% - 5%</td>
              <td className="py-3 px-4">5% - 15% (lead form)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Target ROAS</td>
              <td className="py-3 px-4">300% - 500%+</td>
              <td className="py-3 px-4">N/A (lead-gen model)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">CPA / CPL</td>
              <td className="py-3 px-4">€10 - €50 (per purchase)</td>
              <td className="py-3 px-4">€50 - €500+ (per lead)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Konverzije mesečno</td>
              <td className="py-3 px-4">50-500+</td>
              <td className="py-3 px-4">10-50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2>Budžet i očekivanja</h2>
      <p>
        Realistična očekivanja oko budžeta i rezultata variraju drastično između eCommerce i B2B.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Aspekt</th>
              <th className="py-3 px-4 font-heading font-semibold">eCommerce</th>
              <th className="py-3 px-4 font-heading font-semibold">B2B</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Minimalni budžet</td>
              <td className="py-3 px-4">€500 - €1,000/mesec</td>
              <td className="py-3 px-4">€1,500 - €2,500/mesec</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Preporučeni početni</td>
              <td className="py-3 px-4">€1,500 - €3,000/mesec</td>
              <td className="py-3 px-4">€3,000 - €5,000/mesec</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Vreme do rezultata</td>
              <td className="py-3 px-4">2-4 nedelje (prvi podaci)</td>
              <td className="py-3 px-4">1-3 meseca (kvalitetni lead-ovi)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Skaliranje</td>
              <td className="py-3 px-4">Linearan rast (2x budžet = ~2x revenue)</td>
              <td className="py-3 px-4">Nelinearan (viši budžet ≠ 2x lead-ova)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Pravilo budžeta</p>
        <p className="text-yellow-800 text-sm mb-0">
          eCommerce: Budžet = 10% očekivanog revenue (npr. želite €10K revenue &rarr; €1K ad spend). B2B: Budžet &gt; 3x CPC × 30 konverzija (npr. €5 CPC &rarr; min. €450/mesec, ali preporučujem 5-10x za stabilnost).
        </p>
      </div>

      <hr />

      <h2>Najčešće greške po modelu</h2>
      <p>
        Svaki model ima specifične greške koje vidim kod novih klijenata. Preporučujem da ih izbegnete.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            eCommerce
          </p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">
            Kritične greške
          </h3>
          <ul className="text-sm mb-0">
            <li>
              <strong>Ignorisanje feed optimizacije</strong> — feed je temelj Shopping-a, ne title/description
            </li>
            <li>
              <strong>Isti bid za sve proizvode</strong> — high-margin proizvodi treba više bidova, low-margin manje
            </li>
            <li>
              <strong>Nema remarketing segmentacije</strong> — cart abandoners ≠ browsers, različit pristup
            </li>
            <li>
              <strong>Fokus na CTR umesto ROAS</strong> — klik nije prodaja, platite li samo za klikove ili za revenue?
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            B2B
          </p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">
            Kritične greške
          </h3>
          <ul className="text-sm mb-0">
            <li>
              <strong>Optimizacija ka form fills bez quality metriks</strong> — volume ≠ kvalitet, pratite SQL rate
            </li>
            <li>
              <strong>Prekratki remarketing windows</strong> — B2B ciklus je 30-90 dana, ne 7
            </li>
            <li>
              <strong>Ignorisanje offline conversions</strong> — gubite najvažniji feedback za kvalitet
            </li>
            <li>
              <strong>Previše generički keywords</strong> — &quot;softver&quot; nije dovoljno specifično
            </li>
            <li>
              <strong>Očekivanje eCommerce-level volumena</strong> — B2B je inherently lower volume, fokus na kvalitet
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <h2>Često postavljana pitanja</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Može li isti tim raditi i eCommerce i B2B kampanje?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Da, ali zahteva drugačiji mindset. Ekspertiza u jednom ne garantuje ekspertizu u drugom. eCommerce konsultant koji poznaje Shopping/ROAS optimizaciju mora da nauči B2B lead quality tracking i offline conversions. Obrnuto važi takođe — B2B konsultant mora da nauči feed optimizaciju i Shopping kampanje. Preporučujem timove koji imaju iskustvo u oba modela ili specijalizovane konsultante po modelu.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koji model je lakši za početak?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          eCommerce je obično jasniji — prodaja je prodaja, ROAS je ROAS. Vidite rezultate brže (2-4 nedelje), tracking je direktan (kupovina = konverzija), metrike su jednostavnije. B2B ima više varijabli: lead quality, sales cycle dužina, multiple decision makers. Ali ako imate CRM i offline conversion import, B2B može biti stabilniji dugoročno (veće deal vrednosti, duži customer lifetime).
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li PMax radi za B2B?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Može, ali sa oprezom. PMax zahteva dovoljno konverzija (minimum 30-50/mesec) i offline import za pravu optimizaciju ka kvalitetu. Većina B2B biznisa nema dovoljno volume za PMax da radi optimalno. Preporučujem: počnite sa Search kampanjama, gradite volume, dodajte offline conversion import, tek onda testirajte PMax sa 20-30% budžeta. Nikada ne prebacujte 100% budžeta na PMax odmah.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliki budžet treba za B2B?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Više nego što mislite zbog višeg CPC-a (€2-10+) i nižeg volumena. Minimum €1,500-2,000 mesečno za smisleno testiranje. Preporučujem €3,000-5,000 za stabilne rezultate. Formula: 3x CPC × 30 konverzija = minimalni budžet (npr. €5 CPC &rarr; €450, ali to je minimum za 1 kampanju). Za 3-4 kampanje (Brand, Non-Brand, Remarketing) + testirajuće budžete, računajte €2,000-3,000.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Kako meriti ROI za B2B kada je sales cycle 6 meseci?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Long-term tracking je ključan: pipeline value, SQL rate, eventual revenue. Koristite CRM integraciju (HubSpot, Salesforce) i importujte podatke nazad u Google Ads (offline conversions). Pratite 3 metrike: (1) CPL — koliko košta lead, (2) SQL rate — koliko % lead-ova postaje kvalifikovano, (3) Won rate — koliko % SQL-ova se zatvara. Kombinirajte: CPL × (1 / SQL rate) × (1 / Won rate) = Cost per Won Deal. Uporedite sa average deal value = ROI.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta ako radim hibridni model (npr. SaaS sa self-serve + enterprise)?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Preporučujem zasebne kampanje po segmentu. Low-touch proizvodi (mesečna pretplata &lt; €100) mogu da koriste eCommerce pristup (Target ROAS, kratki remarketing). High-touch enterprise (annual &gt; €1,000+) treba B2B pristup (lead-gen, duži remarketing, offline import). Razdvojite landing pages, konverzije, i budžete. Ne mešajte u istoj kampanji jer će Smart Bidding biti konfuzovan (optimizuje ka €50 self-serve ili €10,000 enterprise deal?).
        </div>
      </details>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Trebate pomoć sa Google Ads strategijom?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Radim sa eCommerce i B2B klijentima na prilagođenim Google Ads strategijama. Besplatna konsultacija uključuje analizu vašeg trenutnog account setup-a i preporuke za optimizaciju.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/google-ads-za-ecommerce" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads za eCommerce</p>
          <p className="text-xs text-gray-500 mb-0">Specijalizovane strategije za online prodavnice</p>
        </Link>

        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }}
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Google Shopping Vodič
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kompletan setup i optimizacija Shopping kampanja za eCommerce
          </p>
        </Link>

        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }}
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Remarketing Vodič
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Strategije za cart abandonment i lead nurture
          </p>
        </Link>

        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Conversion Tracking Vodič
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Offline conversion import i quality tracking za B2B
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
            Budžet benchmarks i očekivanja za eCommerce i B2B
          </p>
        </Link>
      </div>

      <hr />

      <h2>Najčešća pitanja — eCommerce vs B2B Google Ads</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koji tip kampanje je bolji za eCommerce?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Shopping kampanje (Standard Shopping i Performance Max) su #1 za eCommerce — vizuelno prikazuju proizvode direktno u pretrazi i imaju visok purchase intent. Search kampanje su komplementarne za brand i kategorijske termine. Display i YouTube su za remarketing i awareness fazu kupovnog puta.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako meriti uspeh B2B Google Ads kampanja?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Ključne B2B metrike: CPL (cost per lead), MQL-to-SQL stopa (koliko leadova postaje kvalifikovani prodajni lead), CAC (customer acquisition cost) i LTV:CAC ratio. Ne fokusiraj se samo na klik i impression metrike — bez praćenja kvaliteta leadova nemoguće je znati da li kampanja zaista donosi vrednost biznisu.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li Google Ads radi za B2B sa dugim sales cycle-om?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Da, ali sa drugačijim pristupom. Dugačak sales cycle zahteva remarketing strategiju (da ostaneš u vidokrugu tokom 3-6 meseci odlučivanja), lead nurturing sadržaj i offline conversion import (da Google zna koji leadovi su se pretvorili u kupce). Attribution window treba proširiti na 60-90 dana da zahvati ceo ciklus.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliki budžet je potreban za eCommerce vs B2B?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            eCommerce starteri: €500-1.000/mesečno za testiranje, €2.000+ za ozbiljne rezultate (zavisi od CPC i margina). B2B: €300-800/mesečno za niche targeting, ali CPL može biti €50-500+ zavisno od industrije. Važniji od budžeta je ROI — B2B deal vredan €10.000 opravdava visok CPL.
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

