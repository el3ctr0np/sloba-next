import { Link } from "@/i18n/navigation";

export default function GoogleAdsZaEcommerceSrbija2026SR() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko — Srbija eCommerce 2025/2026</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Srbija je 2025. obavila 110,6 miliona internet kupovina — to su 303.000 transakcija svakog dana.
          Tržište vredi €3,61 milijardu i raste 34% godišnje. Google Ads strategija mora to da prati.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">110,6M</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">internet kupovina (2025)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">€3,61B</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">tržišna veličina (2026)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">+34%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">rast YoY</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">5.632</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">online prodavnica aktivno</p>
          </div>
        </div>
        <p className="text-sm text-slate-400 mt-6 mb-0 border-t border-slate-700 pt-4">
          Podaci: Narodna banka Srbije, Mordor Intelligence, ECDB/Statista. Ažurirano: april 2026.
        </p>
      </div>

      <p>
        Srbija je 2025. godine prošla kroz tihu revoluciju eCommerce-a. Dok su mnogi vlasnici online prodavnica i dalje
        razmišljali u kategorijama 2019. godine, kupci su tiho promenili navike — 110,6 miliona internet kupovina,
        rast od 34,3% u odnosu na 2024, i 906 novih online prodavnica otvorenih u jednoj godini. Ovo više nisu
        marginalne brojke. Ovo je zrelo tržište koje traži zrelu strategiju.
      </p>
      <p>
        Problem je što većina srpskih eCommerce biznisa i dalje koristi Google Ads taktike iz 2020:
        jedna Search kampanja, široki match, bez remarketing lista, bez razdvajanja branded i non-branded saobraćaja.
        Rezultat su kampanje koje troše budžet bez predvidivog ROAS-a.
      </p>
      <p>
        Ovaj post je data-driven vodič za 2026 — zasnovan na zvaničnim podacima Narodne banke Srbije,
        tržišnim istraživanjima i mom iskustvu sa 10+ eCommerce naloga na tržištima od Srbije do UK.
        Sve što pišem ovde testirano je u praksi.
      </p>

      <hr />

      <h2>Stanje eCommerce tržišta u Srbiji — Šta podaci kažu</h2>

      <p>
        Narodna banka Srbije objavljuje kvartalne podatke o platnom sistemu koji uključuju i statistiku
        internet kupovina. Ovi podaci su najrelevantniji izvor za razumevanje realnog stanja tržišta —
        ne procene i prognoze, već stvarne transakcije u sistemu.
      </p>

      <p>
        U Q3 2025, zabeleženo je 28,3 miliona internet kupovina — od toga 20,2 miliona u domaćoj valuti
        i 8,1 milion u stranoj. 71% svih transakcija odvija se u dinarima, što znači da je domaći eCommerce
        segment daleko dominantniji nego što se obično misli.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Indikator</th>
              <th className="py-3 px-4 text-right font-heading font-semibold text-gray-900">Vrednost</th>
              <th className="py-3 px-4 text-right font-heading font-semibold text-gray-900">YoY promena</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200">Ukupno internet kupovina (2025)</td>
              <td className="py-3 px-4 text-right font-medium border-b border-gray-200">110,6 miliona</td>
              <td className="py-3 px-4 text-right text-green-700 font-semibold border-b border-gray-200">+34,3%</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">Prosečno dnevno (2025)</td>
              <td className="py-3 px-4 text-right font-medium border-b border-gray-200">~303.000</td>
              <td className="py-3 px-4 text-right text-gray-500 border-b border-gray-200">—</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200">Aktivnih online prodavnica</td>
              <td className="py-3 px-4 text-right font-medium border-b border-gray-200">5.632</td>
              <td className="py-3 px-4 text-right text-green-700 font-semibold border-b border-gray-200">+906 novih</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">Domaće vs strane transakcije (Q3 2025)</td>
              <td className="py-3 px-4 text-right font-medium border-b border-gray-200">71% / 29%</td>
              <td className="py-3 px-4 text-right text-gray-500 border-b border-gray-200">—</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200">Tržišna veličina (2025/2026)</td>
              <td className="py-3 px-4 text-right font-medium border-b border-gray-200">€3,61 milijarda</td>
              <td className="py-3 px-4 text-right text-green-700 font-semibold border-b border-gray-200">CAGR 6,89%</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">Projekcija do 2030.</td>
              <td className="py-3 px-4 text-right font-medium border-b border-gray-200">€5,04 milijarde</td>
              <td className="py-3 px-4 text-right text-blue-700 font-semibold border-b border-gray-200">+39% vs danas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Izvor:{" "}
        <a
          href="https://www.nbs.rs/sr/ciljevi-i-funkcije/platni-sistem/statistika/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Narodna banka Srbije — Statistika platnog sistema
        </a>
        {" "}i Mordor Intelligence Serbia eCommerce Market Report. Za širu sliku tržišta, pogledajte i godišnja
        istraživanja{" "}
        <a
          href="https://ecommserbia.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          eCommerce Asocijacije Srbije
        </a>
        .
      </p>

      <p>
        Šta ovi podaci znače za Google Ads? Konkretno: svaki dan 303.000 Srba nešto kupuje online.
        Deo tih kupovina počinje Google pretragom. Vaš zadatak je da budete tu kada se ta pretraga desi —
        sa pravim oglasom, na pravoj ključnoj reči, za pravu cenu.
      </p>

      <hr />

      <h2>Top 5 kategorija po prihodu — i koja Google Ads strategija radi za svaku</h2>

      <p>
        Prema podacima ECDB-a i Statista Serbia eCommerce Outlook istraživanja, pet kategorija dominira
        srpskim eCommerce tržištem. Važno je znati ne samo koje kategorije vode, već i zašto svaka
        zahteva drugačiji pristup u Google Ads-u.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Kategorija</th>
              <th className="py-3 px-4 text-center font-semibold font-heading text-gray-900">% tržišta</th>
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Preporučena kampanja</th>
              <th className="py-3 px-4 text-right font-heading font-semibold text-gray-900">Prosečan AOV</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium border-b border-gray-200">Hobi i slobodno vreme</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">27,9%</td>
              <td className="py-3 px-4 border-b border-gray-200">Shopping + remarketing</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">4.000–8.000 RSD</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 font-medium border-b border-gray-200">Elektronika</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">20,4%</td>
              <td className="py-3 px-4 border-b border-gray-200">Shopping + Search</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">15.000–80.000 RSD</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium border-b border-gray-200">Moda</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">16,4%</td>
              <td className="py-3 px-4 border-b border-gray-200">Shopping + PMax</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">3.000–10.000 RSD</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 font-medium border-b border-gray-200">Nameštaj / opremanje</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">12%</td>
              <td className="py-3 px-4 border-b border-gray-200">Search + dugačak funnel</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">20.000–150.000 RSD</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium border-b border-gray-200">DIY i majstorski alati</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">9%</td>
              <td className="py-3 px-4 border-b border-gray-200">Search — specifični projekti</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">5.000–20.000 RSD</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700 mb-2">Hobi i slobodno vreme (27,9%)</p>
          <p className="text-sm text-gray-700 mb-0">
            Impulzivna kategorija — kupci ne planiraju mesecima. Shopping kampanje sa jakim vizuelima i
            remarketing za korisnike koji su pogledali proizvod ali nisu kupili. Kratki purchase cycle
            znači da remarketing prozor od 7–14 dana daje odlične rezultate.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-green-700 mb-2">Elektronika (20,4%)</p>
          <p className="text-sm text-gray-700 mb-0">
            Visoka vrednost transakcije znači da kupci pretražuju duže. Kombinacija Shopping-a
            (za vizuelno poređenje modela) i Search-a (za tehničke specifikacije) daje najbolje
            rezultate. CPC je viši, ali ROAS može biti odličan ako imate konkurentne cene.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-purple-700 mb-2">Moda (16,4%)</p>
          <p className="text-sm text-gray-700 mb-0">
            Vizuelni proizvod par excellence. Performance Max sa jakim slikama i video assetima
            radi odlično. Sezonalnost je ekstremna — priprema kampanja za jesen/zimu mora početi
            u avgustu. Remarketing za napuštene korpe je obavezan.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-orange-700 mb-2">Nameštaj (12%)</p>
          <p className="text-sm text-gray-700 mb-0">
            Dug purchase cycle (2–8 nedelja). Search kampanje za high-intent termine,
            Display remarketing za upper funnel. Ovde je bitno pratiti assisted conversions,
            ne samo last-click atribuciju — Google Ads igra veliku ulogu u ranim fazama.
          </p>
        </div>
      </div>

      <hr />

      <h2>Zašto je 2026. prelomna godina — Google Shopping dolazi novembra</h2>

      <p>
        Ovo je informacija koja menja sve za srpski eCommerce. Google je 25. marta 2026. zvanično potvrdio
        lansiranje Google Shopping Ads-a u Srbiji — u novembru 2026, u okviru Holiday Season talasa koji
        obuhvata 9 tržišta (Srbija, Hrvatska, BiH, Slovenija, Crna Gora, Bugarska, Estonija, Letonija, Litvanija).
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-5 my-6">
        <p className="font-semibold text-yellow-900 text-sm mb-1">Zašto je ovo bitno sada, u aprilu?</p>
        <p className="text-yellow-800 text-sm mb-0">
          Merchant Center setup, product feed optimizacija i account review ne mogu da se urade za vikend.
          Brendovi koji počnu pripremu sada imaju 6–7 meseci prednosti pred konkurencijom koja će početi
          u oktobru. U eCommerce-u, 6 meseci je ogromna prednost.
        </p>
      </div>

      <p>
        Do novembra, relevantna strategija je kombinacija Search kampanja i Performance Max-a.
        PMax je trenutno najjači alat za multi-SKU eCommerce prodavnice u Srbiji jer koristi sve
        Google kanale (Search, YouTube, Display, Gmail, Maps) iz jedne kampanje.
      </p>

      <p>
        Nakon lansiranja Shopping-a, dinamika se menja — Shopping kampanje preuzimaju dominaciju za
        product-first biznise, baš kao što je to slučaj u UK, Nemačkoj i celoj zapadnoj Evropi.
        Detaljnu strategiju pripreme možete pronaći u posebnom vodiču:
      </p>

      <ul>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }}
            className="underline font-medium"
          >
            Google Shopping dolazi u Srbiju novembar 2026 — kompletan vodič za pripremu
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }}
            className="underline font-medium"
          >
            Google Shopping vodič — product feed, Merchant Center, kampanjska struktura
          </Link>
        </li>
      </ul>

      {/* ── Sekcija: Jelena Savić AdMixer insight ── */}
      <div className="bg-slate-50 border-l-4 border-blue-500 rounded-r-xl p-6 md:p-8 my-8">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-3">
          Stav zvaničnog predstavnika
        </p>
        <h3 className="text-lg md:text-xl font-heading font-bold text-slate-900 mb-4">
          Šta Jelena Savić ispred Ad Mixer-a kaže o dolasku Shopping Ads-a u Srbiju
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Jelena Savić ispred Ad Mixer Media Serbia — zvaničnog predstavnika Google Ads-a za Srbiju,
          Hrvatsku i Sloveniju — objavila je aprila 2026. detaljnu analizu o tome šta dolazak Shopping
          formata zapravo znači za regionalno eCommerce tržište. Poruka je jasna: ovo nije samo tehnički
          update, već promena paradigme načina na koji proizvodi postaju vidljivi kupcima u trenutku
          najviše namere.
        </p>

        <div className="bg-white border border-gray-200 rounded-lg p-4 my-4 shadow-sm">
          <p className="text-gray-700 italic mb-2 text-sm leading-relaxed">
            „Najveći potencijal postoji u vertikalama u kojima korisnici prirodno upoređuju proizvode
            vizuelno i po ceni — kao što su moda, elektronika, beauty ili nameštaj i opremanje doma."
          </p>
          <p className="text-gray-700 italic mb-0 text-sm leading-relaxed">
            „Product feed nije samo formalnost — to je srce celog sistema. Optimizacija više nije samo
            pitanje kampanje, već i kvaliteta samih informacija o proizvodima."
          </p>
          <p className="text-xs text-gray-500 mt-3 mb-0">
            — Jelena Savić, Ad Mixer Media Serbia
          </p>
        </div>

        <p className="font-semibold text-slate-900 text-sm mb-2">
          Ključne poruke iz intervjua:
        </p>
        <ul className="text-sm text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Rana faza = najveća prilika.</strong> Kompanije koje uđu u sistem pre nego što
            konkurencija intenzivira imaju šansu da testiraju, sakupe podatke i uspostave jake
            temelje pre nego što troškovi porastu.
          </li>
          <li>
            <strong>Kvalifikovaniji saobraćaj.</strong> Shopping format dovodi korisnike bliže odluci o
            kupovini, što znači efikasniju raspodelu budžeta od standardnih Search kampanja.
          </li>
          <li>
            <strong>Prvo data infrastruktura, pa budžet.</strong> Umesto da se počne od konfiguracije
            budžeta, prioritet treba biti kvalitet product data infrastrukture — feed, inventar,
            tehnička spremnost naloga.
          </li>
          <li>
            <strong>Promena mentaliteta.</strong> Fokus oglašavanja se pomera sa „poruke" na ono što
            se zapravo prodaje — Shopping zahteva drugačije strateško razmišljanje od tradicionalnog
            Search oglašavanja.
          </li>
        </ul>

        <p className="text-xs text-gray-500 mb-0">
          Izvor:{" "}
          <a
            href="https://ecommserbia.org/2026/04/12/jelena-savic-admixer-sta-dolazak-shopping-ads-formata-znaci-za-e-commerce-trziste/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            eCommerce Asocijacija Srbije — intervju sa Jelenom Savić (12. april 2026)
          </a>
        </p>
      </div>

      <p>
        Ovo podudaranje je značajno: preporuke iz Ad Mixer-a o feed kvalitetu, ranoj pripremi i promeni
        mentaliteta u potpunosti odgovaraju tome što sam lično video radeći Shopping kampanje za UK
        klijente poslednje dve godine. Brendovi koji budu spremni pre novembra — sa čistim feedom,
        verifikovanim Merchant Center nalogom i razumevanjem Shopping dinamike — biće osam meseci
        ispred konkurencije.
      </p>

      <hr />

      <h2>Budžet i CPC benchmarks — Koliko košta Google Ads za eCommerce u Srbiji</h2>

      <p>
        Ovo je pitanje koje dobijam najčešće. Odgovor nije jednostavan jer CPC varira po industriji,
        sezoni i kvalitetu naloga. Ali iz iskustva sa 10+ eCommerce naloga u regionu, mogu dati
        konkretne okvire koji su korisni za planiranje.
      </p>

      <p>
        Opšti princip: srpsko tržište je 2–3 puta jeftinije od UK tržišta po CPC-u.
        Iz mog iskustva sa Chelleon UK (£290.000+ prihoda od Google Ads), prosečan CPC u UK
        za skincare eCommerce iznosi £0,40–£0,80. Ekvivalentne pretrage u Srbiji koštaju 15–40 RSD
        (0,13–0,34 EUR). Ovo je ogromna prednost za srpske oglašivače.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Industrija</th>
              <th className="py-3 px-4 text-center font-semibold font-heading text-gray-900">Prosečan CPC (RSD)</th>
              <th className="py-3 px-4 text-center font-semibold font-heading text-gray-900">ROAS benchmark</th>
              <th className="py-3 px-4 text-right font-heading font-semibold text-gray-900">Min. mesečni budžet</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200">Moda i obuća</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">15–25 RSD</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">4–7x</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">300–400 EUR</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">Elektronika</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">25–50 RSD</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">3–5x</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">400–600 EUR</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200">Hobi i sport</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">12–30 RSD</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">4–8x</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">250–400 EUR</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">Nameštaj i dom</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">20–40 RSD</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">3–6x</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">400–700 EUR</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200">Kozmetika i zdravlje</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">18–35 RSD</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">4–9x</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">300–500 EUR</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Važna napomena: ROAS benchmark je polazna tačka, ne cilj. Pravi cilj treba da bude zasnovan
        na vašoj marži. Formula je prosta — ako je vaša bruto marža 40%, minimalni ROAS za profitabilnost
        je 2,5x. Sve iznad toga je profit. Detaljno o budžetiranju i računanju ROI:
      </p>

      <ul>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }}
            className="underline font-medium"
          >
            Koliko košta Google Ads? Cene, budžeti i ROI u Srbiji [2026]
          </Link>
        </li>
      </ul>

      <hr />

      <h2>Koji tip kampanje za koji biznis — Praktični vodič</h2>

      <p>
        Ne postoji jedna kampanja koja radi za sve. Izbor tipa kampanje zavisi od broja SKU-ova,
        budžeta, faze biznisa i cilja koji pokušavate da dostignete. Ovde je moj praktični okvir:
      </p>

      <div className="space-y-4 my-8">
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">S</span>
            <div>
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Search kampanje</h3>
              <p className="text-sm text-gray-600 mb-2">
                Za high-intent pretrage — korisnici koji aktivno traže vaše proizvode.
                Obavezne za svaki eCommerce nalog. Razdvojite branded i non-branded kampanje od prvog dana.
              </p>
              <p className="text-xs text-gray-500 mb-0">
                Idealno za: sve biznise sa jasnim ključnim rečima | Budžet: od 200 EUR/mes
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">P</span>
            <div>
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Performance Max</h3>
              <p className="text-sm text-gray-600 mb-2">
                Trenutno najmoćniji alat za multi-SKU eCommerce prodavnice u Srbiji.
                Koristi sve Google kanale iz jedne kampanje. Zahteva dobru asset grupu
                (slike, naslovi, opisi, video) i minimum 50 konverzija pre nego što algoritam krene da radi.
              </p>
              <p className="text-xs text-gray-500 mb-0">
                Idealno za: 50+ proizvoda, mesečni budžet 400+ EUR | Sačekajte 6–8 nedelja learning perioda
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">R</span>
            <div>
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Display Remarketing</h3>
              <p className="text-sm text-gray-600 mb-2">
                Za cart abandonment i posetioce koji nisu konvertovali. Jedno od najprofitabilnijih
                ulaganja u Google Ads-u — korisnici koji su već pokazali interes konvertuju 2–5x
                češće od hladnog saobraćaja. Obavezno za svaki eCommerce nalog.
              </p>
              <p className="text-xs text-gray-500 mb-0">
                Idealno za: sve eCommerce naloge | Budžet: 50–150 EUR/mes dovoljan
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Y</span>
            <div>
              <h3 className="text-base font-heading font-bold mt-0 mb-1">YouTube Ads</h3>
              <p className="text-sm text-gray-600 mb-2">
                Za brand awareness i upper funnel. Odlično za sezonalne kampanje (Black Friday,
                Nova Godina) i lansiranje novih proizvoda. CPV u Srbiji je izuzetno povoljnih 0,5–1,5 RSD.
              </p>
              <p className="text-xs text-gray-500 mb-0">
                Idealno za: brendove sa video sadržajem i budžetom 300+ EUR/mes za awareness
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Sh</span>
            <div>
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Shopping (novembar 2026+)</h3>
              <p className="text-sm text-gray-600 mb-2">
                Od novembra 2026. postaje primarna strategija za product-first biznise.
                Vizuelni format — korisnik vidi sliku, cenu i ime prodavnice pre klika.
                Daleko viši CTR i konverzija od tekstualnih oglasa za eCommerce.
              </p>
              <p className="text-xs text-gray-500 mb-0">
                Idealno za: sve eCommerce prodavnice sa product feed-om | Priprema počinje odmah
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Situacija</th>
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Preporučeni mix</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200">Novi nalog, &lt;50 SKU, budžet 200–400 EUR</td>
              <td className="py-3 px-4 border-b border-gray-200">Search (80%) + Remarketing (20%)</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">50–500 SKU, budžet 400–800 EUR</td>
              <td className="py-3 px-4 border-b border-gray-200">Search (40%) + PMax (50%) + Remarketing (10%)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200">500+ SKU, budžet 800+ EUR</td>
              <td className="py-3 px-4 border-b border-gray-200">PMax (50%) + Search brand (20%) + Shopping/Remarketing (30%)</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">Sezonalna kampanja (Black Friday, praznici)</td>
              <td className="py-3 px-4 border-b border-gray-200">Search (30%) + PMax (40%) + YouTube (20%) + Remarketing (10%)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Za dublji pregled PMax-a i YouTube kampanja, pogledajte dedicirane vodiče:
      </p>
      <ul>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }}
            className="underline font-medium"
          >
            Performance Max: Kompletan vodič za eCommerce
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "youtube-oglasavanje-vodic" } }}
            className="underline font-medium"
          >
            YouTube oglašavanje: Kompletni vodič za video kampanje
          </Link>
        </li>
      </ul>

      <hr />

      <h2>Mobile-first realnost — 62% Srba kupuje online</h2>

      <p>
        Jedan od najvećih pomaka u srpskom eCommerce-u nije u broju kupovine, već u tome odakle
        te kupovine dolaze. Penetracija internet kupovina rasla je sa 34% (2019) na 62% (2024) —
        a taj rast vežen je direktno za mobilne uređaje.
      </p>

      <p>
        Prema podacima Statista Serbia eCommerce Outlook, user penetration je 41,5% u 2025. godini
        sa projekcijom od 48% do 2030. Mobile wallet plaćanje raste po CAGR-u od 11,98%, a NBS
        instant payment rail funkcioniše u real-time modu — što znači da je frkcija na checkout-u
        niža nego ikad.
      </p>

      <p>
        Praktična implikacija za Google Ads: ako vaša landing stranica nije optimizovana za mobilne
        uređaje, gubite novac. Svaki klik koji plaćate na mobilnom telefonu koji dovede korisnika
        na sporu ili nefunkcionalnu stranicu je bacanje budžeta.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 md:p-6 my-6">
        <p className="text-xs uppercase tracking-wide text-slate-400 mb-3">Mobile checklist — minimum za eCommerce</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            "LCP (Largest Contentful Paint) < 2,5 sekunde",
            "CLS (Cumulative Layout Shift) < 0,1",
            "Checkout dostupan na mobilnom bez problema",
            "Slike optimizovane za brzo učitavanje",
            "Dugmad dovoljno velika za prst (44x44px minimum)",
            "Ne koristiti pop-up koji blokiraju sadržaj"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="flex-shrink-0 w-5 h-5 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">{i + 1}</span>
              <p className="text-sm text-slate-200 mb-0">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <p>
        Core Web Vitals su direktno vezani za Quality Score u Google Ads-u. Bolji QS = niži CPC =
        više klikova za isti budžet. Mobile optimizacija nije samo UX pitanje — to je ekonomsko pitanje.
      </p>

      <hr />

      <h2>Cash on Delivery paradoks — Kako Google Ads strategija mora računati na ovo</h2>

      <p>
        Evo podatka koji mnooge iznenadi: prema istraživanjima eCommerce Asocijacije Srbije, oko 62%
        transakcija u ruralnim oblastima Srbije još uvek se obavlja putem pouzećem (cash on delivery).
        Ovo ima direktne implikacije za Google Ads strategiju.
      </p>

      <p>
        Problem je što Google Ads algoritam optimizuje ka "konverzijama" — ali šta je konverzija za
        COD biznis? Narudžbina koja je potencijalno odbačena na isporuci nije ista kao onlajn plaćanje.
        Ako tretirate sve narudžbine jednako, šaljete algoritmu pogrešan signal.
      </p>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card my-6">
        <p className="text-sm font-bold text-gray-900 mb-3">Urbano vs ruralno — preporučena strategija</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-blue-700 mb-2">Urbano (Beograd, Novi Sad, Niš)</p>
            <ul className="text-sm text-blue-900 space-y-1 mb-0">
              <li>Viša stopa online plaćanja</li>
              <li>Niži CAC, brži purchase cycle</li>
              <li>Target CPA / tROAS bidding strategija</li>
              <li>Remarketing 7–14 dana</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-700 mb-2">Ruralno (ostala Srbija)</p>
            <ul className="text-sm text-amber-900 space-y-1 mb-0">
              <li>Viši udeo COD plaćanja</li>
              <li>Viši CAC, ali stabilniji kupac</li>
              <li>Maximize Conversions (bez tCPA u startu)</li>
              <li>Remarketing 21–30 dana</li>
            </ul>
          </div>
        </div>
      </div>

      <p>
        Praktični savet: kreirajte 2 odvojene kampanje — jednu za Beograd/Novi Sad/Niš sa agresivnijim
        bidding-om, i jednu za ostatak Srbije sa konzervativnijim pristupom. Ovo vam daje granularnu
        kontrolu nad budžetom i bidding strategijom po segmentu koji se ponaša drugačije.
      </p>

      <hr />

      <h2>7 kritičnih grešaka koje vidim u srpskim eCommerce Google Ads nalozima</h2>

      <p>
        Rade u srpskim eCommerce Google Ads nalozima su uglavnom iste greške. Evo sedam koje
        vidim najčešće — i koje koštaju najviše novca.
      </p>

      <div className="space-y-4 my-8">
        <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">1. Bez Conversion Tracking-a (ili loše postavljen)</p>
          <p className="text-sm text-gray-600 mb-0">
            Najčešća i najozbiljnija greška. Bez tačnog tracking-a, algoritam ne može da uči,
            a vi ne možete da znate šta radi. Enhanced Conversions su obavezni od 2025.
            Vodič:{" "}
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}
              className="underline font-medium"
            >
              Conversion Tracking za Google Ads
            </Link>
          </p>
        </div>

        <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">2. Nema razdvajanja branded vs non-branded</p>
          <p className="text-sm text-gray-600 mb-0">
            Branded pretrage (ime vaše firme) konvertuju sa 5–10x višim ROAS-om od non-branded.
            Ako ih mešate u istu kampanju, prividno visok ROAS skriva to da non-branded deo
            ne radi. Razdvojite odmah.
          </p>
        </div>

        <div className="bg-white border-l-4 border-orange-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">3. Mobile bid negativan po defaultu</p>
          <p className="text-sm text-gray-600 mb-0">
            Mnogi nalozi imaju mobile bid adjustment -20% ili niži — postavljeno davno i zaboravljeno.
            Sa 62% penetracijom mobilnih kupovina, ovo znači da aktivno smanjujete prisustvo tamo
            gde je polovina vaših kupaca.
          </p>
        </div>

        <div className="bg-white border-l-4 border-orange-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">4. COD narudžbine tretirane kao regularni online event</p>
          <p className="text-sm text-gray-600 mb-0">
            Ako je COD vaš primarni model plaćanja, razmislite o korišćenju offline conversion import-a
            umesto standardnih konverzija. Ovo vam daje tačniji signal algoritmu — šaljete
            konverziju tek kada je narudžbina isporučena i plaćena.
          </p>
        </div>

        <div className="bg-white border-l-4 border-yellow-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">5. Nema remarketing lista za cart abandoners</p>
          <p className="text-sm text-gray-600 mb-0">
            Korisnici koji su dodali proizvod u korpu, ali nisu kupili, su najtoplija publika
            u vašem nalogu. Bez remarketing kampanje za ovu grupu, vi ih doslovno poklanjate
            konkurenciji. Vodič:{" "}
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }}
              className="underline font-medium"
            >
              Google Ads Remarketing: 7 audience lista
            </Link>
          </p>
        </div>

        <div className="bg-white border-l-4 border-yellow-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">6. Previše širok targeting</p>
          <p className="text-sm text-gray-600 mb-0">
            Broad match bez negativnih ključnih reči + kampanja bez liste isključenih publik
            = trošenje budžeta na irelevano saobraćaj. Besplatan saobraćaj nije isti kao
            konvertujući saobraćaj. Negativne ključne reči su prioritet #1 pri postavljanju kampanje.
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">7. Ignorisanje srpske sezonalnosti</p>
          <p className="text-sm text-gray-600 mb-0">
            Badnji dan, Božić, Đurđevdan, Uskrs, Nova Godina, 8. mart, Back-to-School u septembru.
            Srpski kupac ima specifičan sezonalni kalendar koji se razlikuje od zapadnog.
            Kampanje koje ne prate ove datume propuštaju najveće peak sezone u godini.
          </p>
        </div>
      </div>

      <hr />

      <h2>Šta očekivati u novembru 2026 — Google Shopping i šta to menja</h2>

      <p>
        Lansiranje Google Shopping-a u Srbiji novembra 2026. nije inkrementalna promena —
        to je strukturalna promena tržišta. Pogledajte šta se desilo na tržištima gde je Shopping
        već duže prisutan: u UK-u, Shopping kampanje generišu 76% svih klikova za eCommerce oglašivače.
        U Nemačkoj je taj broj sličan.
      </p>

      <p>
        Zašto je Shopping toliko dominantan? Zato što prikazuje tačno ono što kupac traži —
        sliku proizvoda, cenu i ime prodavnice — pre nego što uopšte klikne. Kupac zna šta će
        dobiti. Ovo rezultuje višim CTR-om i višom stopom konverzije u poređenju sa tekstualnim oglasima.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-green-900 mb-3">Prozor prilike: april — oktobar 2026</p>
        <p className="text-sm text-green-800 mb-2">
          Brendovi koji sada počnu pripremu imaju ekskluzivnu prednost:
        </p>
        <ul className="text-sm text-green-900 space-y-1 mb-0">
          <li>Merchant Center nalog koji je verifikovan i odobren</li>
          <li>Product feed koji je optimizovan i bez grešaka</li>
          <li>Istorijat podataka koji algoritam može da koristi od prvog dana</li>
          <li>Tim koji razume Shopping kampanje pre nego što konkurencija počne</li>
        </ul>
      </div>

      <p>
        Brendovi koji počnu u oktobru ili novembru kreću sa nultim iskustvom u najkompetitivnijem
        periodu godine — Holiday season. To je recept za visoke troškove i loše rezultate.
      </p>

      <p>
        Detaljna priprema opisana je u vodiču:{" "}
        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }}
          className="underline font-medium"
        >
          Google Shopping dolazi u Srbiju — kompletan vodič za pripremu
        </Link>
      </p>

      <hr />

      <h2>15-korak priprema checklist za eCommerce u 2026</h2>

      <p>
        Evo konkretnog akcijskog plana za 2026. godinu. Ovaj checklist je zasnovan na iskustvu sa
        10+ eCommerce naloga i pokriva sve kritične oblasti od tracking-a do Shopping pripreme.
      </p>

      <div className="space-y-3 my-8">
        {[
          {
            num: 1,
            title: "Audit trenutnog conversion tracking-a",
            desc: "Proverite da li sve konverzije pucaju tačno. Koristite Google Tag Assistant i Conversion Debug report."
          },
          {
            num: 2,
            title: "Setup GA4 + Google Ads integracija",
            desc: "GA4 linked za Google Ads nalog. Importujte GA4 konverzije kao Primary u Google Ads-u."
          },
          {
            num: 3,
            title: "Razdvajanje branded vs non-branded kampanja",
            desc: "Napravite odvojene kampanje sa ekskluzivnim match type-ovima. Pratite ROAS posebno za svaku."
          },
          {
            num: 4,
            title: "Kreiranje remarketing lista (30d, 60d, 90d, cart abandoners)",
            desc: "Minimum 4 liste: svi posetioci, posmatrači proizvoda, cart abandoners, kupci."
          },
          {
            num: 5,
            title: "Istraživanje top 5 kategorija u vašoj niši",
            desc: "Google Keyword Planner + Search Terms report. Identifikujte top 20 non-branded ključnih reči."
          },
          {
            num: 6,
            title: "Benchmarking CPC + ROAS sa industrijskim prosekom",
            desc: "Koristite tabele iz ovog posta kao polaznu tačku. Dokumentujte vaš baseline za poređenje."
          },
          {
            num: 7,
            title: "Mobile-first landing page audit",
            desc: "Prođite kroz checkout proces na mobilnom telefonu. Koliko koraka treba? Gde se gubi korisnik?"
          },
          {
            num: 8,
            title: "Core Web Vitals check (LCP < 2,5s, CLS < 0,1)",
            desc: "Google Search Console > Core Web Vitals. Svaki sekund kašnjenja smanjuje konverziju za ~7%."
          },
          {
            num: 9,
            title: "Urban vs rural targeting strategija",
            desc: "Kreirajte odvojene kampanje ili audience segmente za Beograd/NS/Niš i ostatak Srbije."
          },
          {
            num: 10,
            title: "Feed audit (za Shopping launch pripremu)",
            desc: "Proverite da li vaš katalog proizvoda ima titlove, opise, slike i cene koji zadovoljavaju GMC zahteve."
          },
          {
            num: 11,
            title: "Merchant Center nalog (kreiranje i verifikacija sajta)",
            desc: "GMC verifikacija traži 1–4 nedelje. Počnite odmah. Potreban je Google tag na sajtu."
          },
          {
            num: 12,
            title: "Cross-channel sinergija (Google + Meta)",
            desc: "Google Ads hvata intent, Meta gradi svest. Remarketing publike sa Google-a u Meta kampanjama."
          },
          {
            num: 13,
            title: "Sezonalni kalendar (Badnji dan, Đurđevdan, praznici, Black Friday)",
            desc: "Unesite sve ključne datume u Google Ads kao ad schedules. Planirajte budžet unapred."
          },
          {
            num: 14,
            title: "Testiranje Performance Max kampanja",
            desc: "Ako još niste pokrenuli PMax, počnite sa jednom kampanjom i 10–15% budžeta za testiranje."
          },
          {
            num: 15,
            title: "Post-launch strategija za novembar 2026",
            desc: "Definirajte cilj: ROAS target, budžet za Shopping launch, KPI-ji za prvu nedelju, prvu nedelju, prvi mesec."
          }
        ].map((item) => (
          <div key={item.num} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-card">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">{item.num}</span>
            <div>
              <p className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</p>
              <p className="text-xs text-gray-600 mb-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <hr />

      <h2>Zaključak — Gde si sada, gde treba da budeš do novembra</h2>

      <p>
        Srbija 2026. nije isto što i Srbija 2020. Tržište je poraslo, kupci su sofisticiraniji,
        a od novembra stiže Google Shopping — format koji u razvijenim tržištima dominira
        eCommerce oglašavanjem sa 70–80% klikova.
      </p>

      <p>
        Ono što odvaja uspešne eCommerce naloge od onih koji samo troše budžet su tri stvari:
        tačan conversion tracking, ispravna kampanjska struktura, i pravovremena priprema za promene.
        Sve tri su dostupne vama već danas.
      </p>

      <p>
        Ako želite da vidite kako izgleda Google Ads eCommerce strategija koja radi u praksi,
        pogledajte case study sa Chelleon UK — skincare eCommerce koji je generisao £290.000+
        prihoda kroz Google Ads:
      </p>

      <ul>
        <li>
          <a href="/sr/case-studies/chelleon" className="underline font-medium">
            Chelleon UK Case Study — Google Ads eCommerce (Skincare, UK tržište)
          </a>
        </li>
      </ul>

      <p>
        Imate pitanja o strategiji ili trebate pomoć sa konkretnim nalogom?{" "}
        <a href="/sr/kontakt" className="underline font-medium">
          Pišite mi — besplatna konsultacija 30 minuta za sve eCommerce biznise.
        </a>
      </p>

      <hr />

      <h2>Izvori i dodatno čitanje</h2>

      <ul>
        <li>
          <a
            href="https://www.nbs.rs/sr/ciljevi-i-funkcije/platni-sistem/statistika/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Narodna banka Srbije — Statistika platnog sistema (internet kupovine)
          </a>
        </li>
        <li>
          <a
            href="https://ecommserbia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            eCommerce Asocijacija Srbije — godišnja istraživanja tržišta
          </a>
        </li>
        <li>
          <a
            href="https://www.stat.gov.rs/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Republički zavod za statistiku — ICT i digitalna ekonomija
          </a>
        </li>
        <li>
          Mordor Intelligence Serbia eCommerce Market Report (€3,61B projekcija, CAGR 6,89%)
        </li>
        <li>
          Statista Serbia eCommerce Outlook (user penetration, mobile wallet CAGR 11,98%)
        </li>
        <li>
          ECDB (ecdb.com) — Kategorizacija po prihodima (hobi 27,9%, elektronika 20,4%, moda 16,4%)
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }}
            className="underline"
          >
            Google Shopping lansiranje u Srbiji novembar 2026 — interni vodič
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }}
            className="underline"
          >
            Performance Max: Kompletan vodič za eCommerce [2026]
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }}
            className="underline"
          >
            Google Ads Remarketing: 7 audience lista za 4x ROAS
          </Link>
        </li>
      </ul>
    </>
  );
}
