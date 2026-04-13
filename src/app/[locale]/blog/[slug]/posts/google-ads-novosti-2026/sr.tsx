import { Link } from "@/i18n/navigation";

export default function GoogleAdsNovosti2026SR() {
  return (
    <>
      {/* Living post badge */}
      <div className="flex items-center gap-2 mb-6">
        <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block"></span>
          Ažurirano mesečno
        </span>
        <span className="text-xs text-gray-500">Poslednje ažuriranje: April 2026</span>
      </div>

      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Sve Google Ads promene u 2026 na jednom mestu — Search, Shopping, PMax, AI Max, Merchant Center.
          Ažuriram ovaj post svakog meseca da ne moraš da pratiš 10 različitih blogova.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">15+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">velikih promena u 2026</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Mesečno</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">ažuriranje (april 2026)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">5</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">oblasti: Search, Shopping, PMax, AI Max, MC</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Nov 2026</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Shopping dolazi u Srbiju</p>
          </div>
        </div>
        <p className="text-sm text-slate-400 mt-6 mb-0 border-t border-slate-700 pt-4">
          Bookmark ovu stranicu — ažuriram je svakog meseca sa svim relevantnim promenama.
        </p>
      </div>

      <p>
        Google Ads platforma se menja brže nego ikad. U 2026, između AI Max ekspanzije, Shopping lansiranja na novim tržištima, PMax transparentnosti i deprecation-a starih funkcija — teško je pratiti šta je bitno, a šta je samo šum. Ovaj post je moj odgovor na taj problem.
      </p>
      <p>
        Radim Google Ads konsalting 9+ godina, upravljam sa 10+ naloga mesečno na tržištima od Srbije do UK i USA. Svaki mesec čitam sve što izlazi iz Google HQ-a, filtriram šta zaista utiče na kampanje, i upisujem ovde. Najnoviji mesec je uvek na vrhu.
      </p>

      <hr />

      {/* ===== APRIL 2026 ===== */}
      <h2>April 2026 — Novosti i Promene</h2>

      {/* UPDATE 1 — Shopping 15 markets */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Mega News</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">Objavljeno: 25. mart 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          Google Shopping — Lansiranje u 15 Novih Evropskih Tržišta
        </h3>
        <p className="text-sm text-gray-700 mb-3">
          Ovo je najveća Google Shopping ekspanzija od 2014. Google je 25. marta 2026 zvanično potvrdio proširenje Shopping Ads na 15 novih EMEA tržišta u dva talasa:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-blue-700 mb-2">Phase 1 — Back-to-School (Q3 2026)</p>
            <ul className="text-sm text-blue-900 space-y-1 mb-0">
              <li>Kipar</li>
              <li>Luksemburg</li>
              <li>Moldova</li>
              <li>Severna Makedonija</li>
              <li>Malta</li>
              <li>Lihtenštajn</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-green-700 mb-2">Phase 2 — Holiday Season (Nov 2026)</p>
            <ul className="text-sm text-green-900 space-y-1 mb-0">
              <li><strong>Srbija</strong></li>
              <li>Hrvatska</li>
              <li>Bosna i Hercegovina</li>
              <li>Slovenija</li>
              <li>Crna Gora</li>
              <li>Bugarska, Estonija, Letonija, Litvanija</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-4 mb-0">
          Ako imate eCommerce biznis u Srbiji ili regionu, priprema počinje odmah — ne u oktobru. Merchant Center setup, feed optimizacija i account review traže mesece.{" "}
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }}
            className="underline font-medium text-blue-700"
          >
            Kompletan vodič za pripremu →
          </Link>
        </p>
      </div>

      {/* UPDATE 2 — PMax Channel Performance */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Performance Max</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">April 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          PMax Channel Performance Timeline — Nova Transparentnost
        </h3>
        <p className="text-sm text-gray-700 mb-3">
          Konačno. Google je uveo Channel Performance Timeline za Performance Max kampanje — sada možete videti kako svaki kanal doprinosi ukupnim rezultatima.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
          {["Search", "YouTube", "Display", "Discover", "Gmail", "Maps"].map((channel) => (
            <div key={channel} className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-center text-gray-700">
              {channel}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-4 mb-0">
          Ovo je najbitniji PMax transparency update od lansiranja kampanjskog tipa 2021. Advertajzeri su godinama tražili da vide breakdown po kanalima — sada je to moguće. Pratite Channel Timeline nedeljno da identifikujete koji kanal troši budžet bez konverzija.
        </p>
      </div>

      {/* UPDATE 3 — Enhanced Conversions */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Conversion Tracking</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">April–Jun 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          Google Unified Enhanced Conversions Settings
        </h3>
        <p className="text-sm text-gray-700 mb-0">
          Google konsoliduje Web i Leads enhanced conversions u jedinstven setup interfejs. Prethodno odvojene postavke za web konverzije i lead konverzije sada se nalaze na jednom mestu.
          Implementacija u dva koraka: April 2026 (web) i Jun 2026 (leads).
          Ako još niste podesili enhanced conversions — ovo je pravi trenutak. Enhanced conversions poboljšavaju tačnost merenja za 5-30% u zavisnosti od industrije.
        </p>
      </div>

      {/* UPDATE 4 — Product Ratings in YouTube Shorts */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">eCommerce</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">April 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          Product Ratings u YouTube Shorts Oglasima
        </h3>
        <p className="text-sm text-gray-700 mb-0">
          eCommerce prodavci sada mogu prikazati product ratings (zvezde i broj recenzija) direktno unutar YouTube Shorts oglasa. Ovo koristi podatke iz Google Merchant Center i Google Customer Reviews programa.
          Relevantno za brendove koji imaju dobro ocenjene proizvode — social proof direktno u video formatu povećava CTR i smanjuje prepreke za kupovinu.
        </p>
      </div>

      {/* UPDATE 5 — Merchant API for Scripts */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Developer</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">April 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          Merchant API Dostupan za Google Ads Scripts
        </h3>
        <p className="text-sm text-gray-700 mb-0">
          Programeri i agencije sada mogu koristiti Merchant Center API direktno kroz Google Ads Scripts — bez odvojenih OAuth tokena ili zasebnih projekata. Ovo otvara mogućnosti za automatizovano praćenje feed-a, alertove za disapproved proizvode, i upravljanje cenama direktno iz Ads skripti. Za agencije sa većim Shopping portfoliom, ovo je značajno ubrzanje radnog procesa.
        </p>
      </div>

      {/* UPDATE 6 — Performance Planner Deprecation */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Deprecation</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">Od 9. marta 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          Performance Planner — Delimičan Deprecation
        </h3>
        <p className="text-sm text-gray-700 mb-3">
          Od 9. marta 2026, Display i Video kampanje više nisu podržane u Performance Planner-u. Impression share metrika je takođe uklonjena iz Planner interfejsa.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4">
          <p className="font-semibold text-yellow-900 text-sm mb-1">Šta ostaje podržano?</p>
          <p className="text-yellow-800 text-sm mb-0">Search, Performance Max i Shopping kampanje i dalje su dostupne u Performance Planner-u. Za Display i Video planiranje, Google preporučuje Reach Planner (video) i direktno budžetiranje u kampanjama.</p>
        </div>
      </div>

      <hr />

      {/* ===== MART 2026 ===== */}
      <h2>Mart 2026 — Novosti i Promene</h2>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Google Ads Editor</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">Mart 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          Google Ads Editor 2.12 — 15 Novih Funkcija
        </h3>
        <p className="text-sm text-gray-700 mb-3">
          Biggest Editor release u 2026. Ključne promene po kampanjskom tipu:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
            <div>
              <strong className="text-sm">Performance Max — do 15 videa po asset grupi</strong>
              <p className="text-xs text-gray-600 mt-0.5 mb-0">Prethodni limit bio je 5 videa. Sa 15, algoritam ima daleko više materijala za testiranje i optimizaciju u YouTube i Discovery placements-ima.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
            <div>
              <strong className="text-sm">Demand Gen kampanje — novi bulk editing alati</strong>
              <p className="text-xs text-gray-600 mt-0.5 mb-0">Demand Gen dobija pun Editor support: bulk kreiranje i uređivanje oglasa, audience lista, i bid-ova. Ranije je to zahtevalo ručni rad u UI-ju.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
            <div>
              <strong className="text-sm">Total Budgets za Search, PMax, Shopping (Open Beta)</strong>
              <p className="text-xs text-gray-600 mt-0.5 mb-0">Total Budgets (ukupni budžet za ceo period kampanje) sada se mogu postavljati i upravljati direktno iz Editor-a — prethodno dostupno samo u online UI-ju od januara 2026.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
            <div>
              <strong className="text-sm">Cross-account campaign management poboljšanja</strong>
              <p className="text-xs text-gray-600 mt-0.5 mb-0">MCC upravljanje kampanjama dobija poboljšane bulk operacije za naloge koji dele sličnu strukturu — releantno za agencije i white label setup-ove.</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* ===== FEBRUAR 2026 ===== */}
      <h2>Februar 2026 — Novosti i Promene</h2>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">AI Max</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">26. februar 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          AI Max Text Guidelines — Global Beta za Sve Advertisere
        </h3>
        <p className="text-sm text-gray-700 mb-3">
          Google je 26. februara 2026 otvorio AI Max Text Guidelines za sve advertisere globalno (prethodno limited beta). Ovo je jedan od najvažnijih AI feature-a 2026 za Search i PMax kampanje.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-indigo-700 mb-2">Text Customization</p>
            <p className="text-sm text-indigo-900 mb-0">AI automatski generiše headline-ove i description-e u realnom vremenu, prilagođene svakom upitu. Ne koristite iste oglase za svaku pretragu — AI varira kopiju prema kontekstu.</p>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-indigo-700 mb-2">Text Guidelines (Kontrola)</p>
            <p className="text-sm text-indigo-900 mb-0">Definišete šta AI sme i ne sme da piše — term exclusions (npr. izbegavaj "jeftino" za luxury brendove) i messaging restrictions za konzistentan brand voice.</p>
          </div>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mt-4">
          <p className="font-semibold text-blue-900 text-sm mb-1">Praktična preporuka</p>
          <p className="text-blue-800 text-sm mb-0">Koristite Term Exclusions odmah. Svaki brend ima reči koje ne smeju da se pojave u oglasima (generičke cenovne poruke, termini konkurencije, itd.). Bez exclusions, AI može generisati poruke koje su tehnički tačne ali off-brand. Primenljivo za AI Max for Search i Performance Max kampanje.</p>
        </div>
      </div>

      <hr />

      {/* ===== JANUAR 2026 ===== */}
      <h2>Januar 2026 — Novosti i Promene</h2>

      {/* UPDATE 1 — Total Budgets */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Budžetiranje</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">Januar 2026 — Open Beta</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          Campaign Total Budgets — Open Beta
        </h3>
        <p className="text-sm text-gray-700 mb-3">
          Total Budgets ušao u open beta za Search, Performance Max i Shopping kampanje. Umesto dnevnog budžeta (koji se množi sa danima meseca), sada možete postaviti ukupan budžet za ceo period trajanja kampanje.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-gray-900 bg-gray-50">
                <th className="py-2 px-3 font-heading font-semibold">Tip budžeta</th>
                <th className="py-2 px-3 font-heading font-semibold">Kako radi</th>
                <th className="py-2 px-3 font-heading font-semibold">Kada koristiti</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 px-3 font-medium">Daily Budget</td>
                <td className="py-2 px-3">€X/dan (max 2x u peak danima)</td>
                <td className="py-2 px-3">Always-on kampanje</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50/50">
                <td className="py-2 px-3 font-medium">Total Budget (novo)</td>
                <td className="py-2 px-3">€X ukupno za period kampanje</td>
                <td className="py-2 px-3">Promotivne kampanje, sezonski launch-evi</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-3 mb-0">
          Korisno za: Black Friday kampanje, product launch-eve, i bilo koji scenario gde imate fiksni marketing budžet za konkretan period — i ne želite da dnevni budžeti "ostanu" neistrošeni.
        </p>
      </div>

      {/* UPDATE 2 — Universal Commerce Protocol */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">AI Budućnost</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">Januar 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          Universal Commerce Protocol — AI Agenti Kupuju Online
        </h3>
        <p className="text-sm text-gray-700 mb-3">
          Google je lansirao open-source standarde za AI agente koji autonomno izvršavaju kupovine u ime korisnika. Ovo nije science fiction — ovo je infrastruktura koja se gradi sada.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-3">
          <p className="text-xs font-bold uppercase tracking-wide text-gray-600 mb-2">Partneri koji su pristupili protokolu</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {["Shopify", "Etsy", "Wayfair", "Target", "Walmart"].map((partner) => (
              <div key={partner} className="bg-white border border-gray-200 rounded px-2 py-1.5 text-xs font-medium text-center text-gray-700">
                {partner}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 mt-4">
          <p className="font-semibold text-yellow-900 text-sm mb-1">Šta ovo znači za advertisere?</p>
          <p className="text-yellow-800 text-sm mb-0">Ovo je početna faza "agentic commerce" ere. Danas: korisnik pretražuje, klika na oglas, kupuje. Sutra: AI agent pretražuje, evaluira, i kupuje automatski — bez klika. Google Shopping feed i dobro strukturirani proizvodni podaci biće osnova za vidljivost u ovim AI sistemima. Počnite sa feed optimizacijom danas.</p>
        </div>
      </div>

      <hr />

      {/* ===== ŠTA DOLAZI SLEDEĆE ===== */}
      <h2>Šta Dolazi Sledeće — Najave za 2026</h2>
      <p>
        Na osnovu Google zvaničnih najava i obrazaca koje pratim, ovo su ključni datumi za ostatak 2026:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border-2 border-blue-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700 mb-2">Q3 2026</p>
          <h3 className="text-sm font-heading font-bold mt-0 mb-2">Shopping Phase 1 Launch</h3>
          <p className="text-xs text-gray-600 mb-0">Kipar, Luksemburg, Moldova, Severna Makedonija, Malta, Lihtenštajn dobijaju Shopping Ads u back-to-school periodu.</p>
        </div>
        <div className="bg-white border-2 border-green-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-green-700 mb-2">November 2026</p>
          <h3 className="text-sm font-heading font-bold mt-0 mb-2">Shopping u Srbiji — Live!</h3>
          <p className="text-xs text-gray-600 mb-0">Phase 2: Srbija, Hrvatska, BiH, Slovenija, Crna Gora, Bugarska, Estonija, Letonija, Litvanija. Tačno pre Black Friday sezone.</p>
        </div>
        <div className="bg-white border-2 border-purple-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-purple-700 mb-2">Cela 2026</p>
          <h3 className="text-sm font-heading font-bold mt-0 mb-2">AI Max Ekspanzija</h3>
          <p className="text-xs text-gray-600 mb-0">AI Max for Search i PMax dobijaju nove kontrole, bolje reporting, i proširenu dostupnost na više tržišta i kampanjskih tipova.</p>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-6 my-8">
        <p className="text-sm font-bold uppercase tracking-wide text-yellow-400 mb-2">Detaljan vodič za Shopping pripremu</p>
        <p className="text-base font-heading font-semibold mb-3">
          Ako imate eCommerce biznis u Srbiji, pročitajte naš kompletan vodič za Google Shopping lansiranje — 15-korak checklist, Merchant Center setup, product feed optimizacija i lekcije iz UK tržišta.
        </p>
        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }}
          className="inline-block bg-yellow-400 text-gray-900 font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-yellow-300 transition-colors"
        >
          Pročitaj: Google Shopping Srbija 2026 →
        </Link>
      </div>

      <hr />

      {/* ===== FAQ ===== */}
      <h2>FAQ — Česta Pitanja</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Koliko često se ovaj post ažurira?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Post se ažurira mesečno, obično u prvih 7 dana novog meseca. Svako ažuriranje dodaje novi mesec na vrh sa svim relevantnim promenama iz Google Ads platforme. Oznaka 'Poslednje ažuriranje' u zaglavlju pokazuje kada je post poslednji put menjan."
                }
              },
              {
                "@type": "Question",
                name: "Gde mogu pratiti Google Ads novosti?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Primarni izvori: Official Google Ads Blog (ads.google.com/intl/en_us/home/resources/), Search Engine Land, PPC Hero, i Inside Google Ads podcast. Za srpsko tržište, ovaj post je jedini srpski resurs koji agregira sve relevantne promene na jednom mestu."
                }
              },
              {
                "@type": "Question",
                name: "Šta je AI Max za Google Ads?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AI Max je skup AI-powered funkcija za Search i Performance Max kampanje koje automatski generišu reklamne tekstove, proširuju keyword targeting na relevantne upite koje niste eksplicitno dodali, i optimizuju kreative na osnovu konteksta pretrage. Sastoji se od: Text Customization (generisanje headlinea/opisa u realnom vremenu), Text Guidelines (kontrola šta AI sme da piše), i Broad Match Expansion (automatsko proširenje dosega). Dostupno globalno od februara 2026."
                }
              },
              {
                "@type": "Question",
                name: "Kada dolazi Google Shopping u Srbiju?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Google Shopping dolazi u Srbiju u novembru 2026, kao deo Phase 2 EMEA ekspanzije koja uključuje i Hrvatsku, BiH, Sloveniju i Crnu Goru. Lansiranje je strateški planirano pre Black Friday sezone. Merchant Center setup i feed optimizacija treba da budu gotovi do oktobra 2026 najkasnije."
                }
              },
              {
                "@type": "Question",
                name: "Da li ove promene utiču na moje postojeće kampanje?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Većina promena u 2026 su opt-in — morate ih aktivno uključiti da bi imale efekat. Prisilne promene su isključivo deprecation-i: Performance Planner Display/Video support je uklonjen od marta 2026. AI Max i Text Guidelines su opcioni ali preporučeni. Total Budgets su dostupni kao alternativa Daily Budgets-ima, ali ne zamenjuju postojeće kampanje automatski."
                }
              }
            ]
          })
        }}
      />

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko često se ovaj post ažurira?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Post se ažurira mesečno, obično u prvih 7 dana novog meseca. Svako ažuriranje dodaje novi mesec na vrh sa svim relevantnim promenama iz Google Ads platforme. Oznaka "Poslednje ažuriranje" u zaglavlju pokazuje kada je post poslednji put menjan.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Gde mogu pratiti Google Ads novosti?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Primarni izvori:{" "}
            <a href="https://blog.google/products/ads/" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">Official Google Ads Blog</a>,{" "}
            <a href="https://searchengineland.com/category/google/google-ads" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">Search Engine Land</a>,{" "}
            <a href="https://www.ppchero.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">PPC Hero</a>,{" "}
            i Inside Google Ads podcast. Za srpsko tržište, ovaj post je jedini srpski resurs koji agregira sve relevantne promene na jednom mestu.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta je AI Max za Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            AI Max je skup AI-powered funkcija za Search i Performance Max kampanje koje automatski generišu reklamne tekstove, proširuju keyword targeting na relevantne upite koje niste eksplicitno dodali, i optimizuju kreative na osnovu konteksta pretrage. Sastoji se od: Text Customization (generisanje headlinea i opisa u realnom vremenu), Text Guidelines (kontrola šta AI sme da piše), i Broad Match Expansion. Dostupno globalno od februara 2026.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kada dolazi Google Shopping u Srbiju?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Google Shopping dolazi u Srbiju u <strong>novembru 2026</strong>, kao deo Phase 2 EMEA ekspanzije koja uključuje i Hrvatsku, BiH, Sloveniju i Crnu Goru. Lansiranje je strateški planirano pre Black Friday sezone. Merchant Center setup i feed optimizacija treba da budu gotovi do oktobra 2026 najkasnije.{" "}
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }}
              className="underline text-blue-700 font-medium"
            >
              Kompletan vodič za pripremu →
            </Link>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li ove promene utiču na moje postojeće kampanje?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Većina promena u 2026 su <strong>opt-in</strong> — morate ih aktivno uključiti da bi imale efekat. Prisilne promene su isključivo deprecation-i: Performance Planner Display/Video support je uklonjen od marta 2026. AI Max i Text Guidelines su opcioni ali preporučeni. Total Budgets su dostupni kao alternativa Daily Budgets-ima, ali ne zamenjuju postojeće kampanje automatski.
          </div>
        </details>
      </div>
    </>
  );
}
