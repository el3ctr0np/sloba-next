import { Link } from "@/i18n/navigation";

export default function GoogleAdsAuditPost() {
  return (
    <>
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">Google Ads audit je sistematski pregled naloga koji otkriva wasted spend, propuštene prilike, i tehničke greške. Profesionalan audit pokriva 80+ checkpoint-a u 10 kategorija i u proseku identifikuje 15-25% budžeta koji se troši neefikasno.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">80+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">checkpoint-a</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">10</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">kategorija provere</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">15-25%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">wasted spend prosečno</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Q1</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">deep + mesečni mini</p>
          </div>
        </div>
      </div>

      <h2>Zašto je Google Ads audit neophodan</h2>
      <p>
        Kada preuzmem novi nalog na upravljanje, prva stvar je uvek detaljan Google Ads audit. U praksi vidim da preko 90% naloga ima iste fundamentalne probleme: conversion tracking ne funkcioniše kako treba, budžet cure na irelevantne search terms-ove, kampanje su loše organizovane, ili Smart Bidding pokušava da optimizuje sa nedovoljno podataka.
      </p>
      <p>
        Google Ads audit nije samo lista stvari koje &quot;ne rade&quot; — to je sistematska dijagnostika koja precizno identifikuje <strong>gde gubite novac i gde propuštate prilike za rast</strong>. Prosečan nalog koji nije optimizovan 6+ meseci troši 15-25% budžeta potpuno neefikasno. To se može eliminisati u prvoj nedelji posle audit-a.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Kada raditi Google Ads audit</p>
        <p className="text-blue-800 text-sm mb-0">
          <strong>Kvartalni deep audit</strong> (2-4 sata, svih 10 kategorija) + <strong>mesečni quick check</strong> (30 min, 7 prioritetnih tačaka). Dodatno: odmah ako performance naglo padne, preuzimate nalog od prethodne agencije, menjate biznis model, ili pokre&#x107;ete novu kampanju.
        </p>
      </div>

      <p>
        Moje iskustvo je da kompanije ili rade audit suviše retko (jednom godišnje ili nikad), ili gube vreme gledajući površinske metrike koje ne otkrivaju prave probleme. Ovaj vodič pokriva konkretno šta proveriti, kako interpretirati podatke, i koje akcije odmah preduzeti.
      </p>

      <hr />

      <h2>Šta dobar Google Ads audit pokriva</h2>
      <p>
        Profesionalan Google Ads audit nije improvizacija — to je strukturiran checklist od 80+ kontrolnih tačaka podeljenih u 10 ključnih kategorija. Svaka kategorija ima priority items (kritično za performance) i optimization items (dodatna poboljšanja za napredne naloge).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Osnova</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">1. Struktura naloga</h3>
          <p className="text-sm text-gray-600 mb-0">Logična organizacija kampanja, naming conventions, hierarchy, labels</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kritično</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">2. Conversion Tracking</h3>
          <p className="text-sm text-gray-600 mb-0">Da li pra&#x107;enje konverzija funkcioniše ta&#x10D;no i da li su podaci validni</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Setup</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">3. Pode&#x161;avanja kampanja</h3>
          <p className="text-sm text-gray-600 mb-0">Location targeting, networks, ad schedule, device bid adjustments</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Search</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">4. Klju&#x10D;ne re&#x10D;i i search terms</h3>
          <p className="text-sm text-gray-600 mb-0">Search Terms Report, negatives, Quality Score, match types, duplicates</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Creative</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">5. Oglasi i ekstenzije</h3>
          <p className="text-sm text-gray-600 mb-0">RSA quality, Ad Strength, sitelinks, callouts, structured snippets</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Targeting</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">6. Publike i remarketing</h3>
          <p className="text-sm text-gray-600 mb-0">Remarketing liste, audience layering, converter exclusions</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Automation</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">7. Bidding strategija</h3>
          <p className="text-sm text-gray-600 mb-0">Smart Bidding setup, conversion volume, target realism, learning periods</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Spend</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">8. Budžet i alokacija</h3>
          <p className="text-sm text-gray-600 mb-0">Impression Share Lost (Budget), campaign budget distribution</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Analysis</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">9. Reporting i analitika</h3>
          <p className="text-sm text-gray-600 mb-0">GA4 integration, attribution models, segment analysis, data discrepancies</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Advanced</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">10. Scripts i automatizacije</h3>
          <p className="text-sm text-gray-600 mb-0">Google Ads Scripts, automated rules, alerts, bulk operations</p>
        </div>
      </div>

      <p>
        Svaka kategorija dobija scoring od 1 do 5 i prioritizovan action plan. Na kraju Google Ads audit-a dobijate jasnu sliku gde ste, šta hitno popraviti, i koliki impact o&#x10D;ekivati od svake optimizacije.
      </p>

      <hr />

      <h2>Kategorija 1: Struktura naloga</h2>
      <p>
        Lo&#x161;a struktura je kao lo&#x161;a arhitektura zgrade — možete farbati fasadu, ali fundamentalni problemi ostaju. Preporu&#x10D;ujem da struktura bude lo

gi&#x10D;na, skalabilna, i transparentna — bilo ko treba da razume organizaciju za 5 minuta pregledanja.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Kampanje organizovane logi&#x10D;no</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Kampanje podeljene po proizvodu/usluzi, geografiji, ili funnel stage-u. Nikad sve u jednoj megakampanji.</p>
        <ul className="text-sm">
          <li><strong>Brand vs Non-brand ODVOJENI</strong> — Potpuno druga ekonomija: brand ima ni&#x17E;i CPC, vi&#x161;i CVR, druga strategija</li>
          <li><strong>Search i Display ODVOJENI</strong> — Nikad zajedno, osim kod Performance Max (drugačije metrike, drugo targetiranje)</li>
          <li><strong>Naming convention konzistentan</strong> — Npr. [Type]_[Product]_[Geo]_[Stage] za brzo filtriranje i reporting</li>
          <li><strong>Geografske kampanje odvojene</strong> — Ako poslujete u vi&#x161;e zemalja/regiona, izdvojite kampanje po geo</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ad Groups tematski fokusirane</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Jedna Ad Group = jedna tema/intent. U praksi to zna&#x10D;i 5-20 keywords po Ad Group-i, ne 50+.</p>
        <ul className="text-sm">
          <li><strong>Nema {`"catch-all"`} Ad Groups</strong> — Sve re&#x10D;i vezane za razli&#x10D;ite teme u istoj grupi = lo&#x161;iji Ad Strength i Quality Score</li>
          <li><strong>Keywords imaju sli&#x10D;an intent</strong> — {`"kupiti cipele"`} i {`"cena cipela"`} su sli&#x10D;an intent; {`"sportske cipele"`} i {`"svečane cipele"`} nisu</li>
          <li><strong>Dedicated Ad Groups za high-value terms</strong> — Brand terms, top sellers, high-margin proizvodi zaslužuju posebne grupe</li>
        </ul>
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Jedna kampanja sa 50+ Ad Groups, ili Search + Display zajedno u istoj kampanji</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Restrukturirajte nalog: izdvojite Search i Display, podelite kampanje na manje logi&#x10D;ne celine (po proizvodu/geo/stage), smanjite broj Ad Groups na 5-15 po kampanji.</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Pro tip</p>
        <p className="text-yellow-800 text-sm mb-0">Ako imate vi&#x161;e od 10 kampanja, kreirajte labels (npr. {`"Priority"`}, {`"Testing"`}, {`"Paused-Low_ROI"`}) za brže filtriranje u interfejsu. To štedi vreme pri Google Ads audit analizi.</p>
      </div>

      <hr />

      <h2>Kategorija 2: Pra&#x107;enje konverzija</h2>
      <p>
        Conversion tracking je najkriti&#x10D;niji deo svakog Google Ads audit-a. Ako pra&#x107;enje ne funkcioniše, ili bele&#x17E;i pogrešne podatke, sve ostalo je beskorisno — optimizujete na osnovu lo&#x161;ih informacija i donosite pogre&#x161;ne odluke.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Conversion tracking aktivan i funkcionalan</strong> <span className="text-gray-500">— Proverite da tag fire-uje (Google Tag Assistant, GTM Preview mode, ili browser dev tools)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Primary conversion action ozna&#x10D;ena</strong> <span className="text-gray-500">— Google mora znati koja je glavna konverzija za optimizaciju (ne sve konverzije jednako važne)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Test konverzija uspe&#x161;na</strong> <span className="text-gray-500">— Sami testirajte: kupite/submit-ujte lead i proverite da li se konverzija bele&#x17E;i u naloga (24h za pojavu)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Nema dupliciranih konverzija</strong> <span className="text-gray-500">— GA4 + Google Ads tag na istoj thank-you page mogu duplirati konverzije</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Conversion value ta&#x10D;an (eCommerce)</strong> <span className="text-gray-500">— ROAS optimizacija zahteva precizne revenue podatke, ukljucujući transaction_id za deduplication</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Enhanced conversions omogu&#x107;en</strong> <span className="text-gray-500">— Pobolj&#x161;ava attribution posle iOS 14.5+ privacy promena, mandatory za modernu optimizaciju</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div><strong>Attribution window logičan</strong> <span className="text-gray-500">— Default 30 dana je ok za većinu, ali B2B sa dugim sales cycle-om treba 60-90 dana</span></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Red flag: Google Ads konverzije se ne slažu sa GA4/CRM-om (&gt;20% razlike). To signalizira da tracking nije postavljen kako treba ili da postoji problem sa attribution modelom.</p>
      </div>

      <p>
        Detaljan vodič kako postaviti tracking i kako troubleshoot-ovati probleme: <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}>Conversion Tracking za Google Ads</Link>.
      </p>

      <hr />

      <h2>Kategorija 3: Pode&#x161;avanja kampanja</h2>
      <p>
        Default pode&#x161;avanja u Google Ads-u su lo&#x161;a — dizajnirana da Google zaradi vi&#x161;e, ne da vi dobijete bolje rezultate. U praksi vidim da preko 70% novih naloga ima default settings koji tro&#x161;e budžet na pogre&#x161;nim mestima.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Location targeting</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Proverite da je {`"People in your targeted locations"`} izabrano, NE {`"People interested in your locations"`}. Default opcija prikazuje oglase ljudima koje Google <em>misli</em> da su zainteresovani za va&#x161;u lokaciju, &#x10D;ak i ako su na drugom kontinentu.</p>
        <ul className="text-sm">
          <li><strong>Location bid adjustments aktivni</strong> — Pove&#x107;ajte bid za best performing geo, smanjite za worst</li>
          <li><strong>Exclude nekonvertuju&#x107;e lokacije</strong> — Ako lokacija ima 0% CVR posle 50+ klikova, isklju&#x10D;ite</li>
          <li><strong>Radius targeting precizan</strong> — Lokalni biznisi: 10-20km radius, ne 50km+ (wasted spend)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Networks</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Display Network mora biti ISKLJU&#x10C;EN u Search kampanjama. Search Partners evaluirajte posle 30 dana — ako imaju lo&#x161;iji CPA od Search-a, isklju&#x10D;ite.</p>
        <ul className="text-sm">
          <li><strong>Search kampanje</strong> = samo Google Search (uncheck Display + pažljivo sa Search Partners)</li>
          <li><strong>Display kampanje</strong> = samo Display Network (nikad zajedno sa Search, druga ekonomija)</li>
          <li><strong>Search Partners provera</strong> — Segment report posle mesec dana: ako CPA 20%+ gori, isklju&#x10D;ite</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ad schedule (dani/sati)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Analizirajte performance po satima i danima (Day &amp; Hour report). Ako konverzije padaju posle 20h ili vikendom, smanjite bid ili pauzirajte te slotove.</p>
        <ul className="text-sm">
          <li><strong>Bid adjustments za vreme</strong> — Pove&#x107;ajte +20-50% za best time slots, smanjite -30-50% za worst</li>
          <li><strong>B2B kampanje</strong> — Obi&#x10D;no ne treba da rade vikendom (office hours only: 9-17h, Mon-Fri)</li>
          <li><strong>eCommerce sezonalnost</strong> — Pove&#x107;ajte bid za ve&#x10D;ernje sate i vikende (shopping time)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Devices (Desktop/Mobile/Tablet)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Analizirajte performance po device-ima. Ako mobile ima 2x gori conversion rate, smanjite bid za -30% do -50%.</p>
        <ul className="text-sm">
          <li><strong>Device bid adjustments</strong> — Pove&#x107;ajte za best performing device, smanjite za worst</li>
          <li><strong>Mobile-friendly landing page</strong> — Ako mobile LP nije optimizovan, smanjite mobile bid dok ne popravite UX</li>
        </ul>
      </div>

      <hr />

      <h2>Kategorija 4: Klju&#x10D;ne re&#x10D;i i search terms</h2>
      <p>
        Keywords nisu ono &#x161;to vi unesete u nalog — to su <strong>search terms</strong> koje ljudi zaista kucaju. Svaki Google Ads audit mora detaljno analizirati Search Terms Report i identifikovati &#x161;ta zapravo trigger-uje va&#x161;e oglase i kuda odlazi budžet.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Search Terms Report pregledan (30-90 dana)</strong> <span className="text-gray-500">— Top 50-100 search terms po tro&#x161;ku: da li su relevantni i konvertuju li?</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Negative keywords lista postoji i odr&#x17E;ava se</strong> <span className="text-gray-500">— Lista negatives mora postojati na campaign i account nivou, redovno update (mesečno minimum)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Nema irelevantnih search terms sa zna&#x10D;ajnim spend-om</strong> <span className="text-gray-500">— Ako search term potro&#x161;io €50+ i nije relevantan, to je direktan wasted spend</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Quality Score ve&#x107;ina keywords 6+</strong> <span className="text-gray-500">— QS ispod 5 zna&#x10D;i da pla&#x107;ate premium za klikove (i&#x161;&#x10D;itajte kroz top 20 keywords po impressions)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Keywords bez konverzija (&gt;100 klikova) evaluirani</strong> <span className="text-gray-500">— Pauzirajte ili drastično smanjite bid za keywords koji tro&#x161;e budžet bez rezultata</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Duplicate keywords uklonjeni</strong> <span className="text-gray-500">— Isti keyword u vi&#x161;e Ad Groups/kampanja kreira internal competition i lo&#x161;iji performance</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div><strong>Match type strategija jasna</strong> <span className="text-gray-500">— Broad za discovery (+ agresivni negatives), Phrase za kontrolu, Exact za top performers</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
            <div><strong>High-intent keywords dobijaju ve&#x107;i bid</strong> <span className="text-gray-500">— {`"kupiti"`}, {`"cena"`}, {`"odmah"`} treba da imaju vi&#x161;i bid od informational keywords</span></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Red flag: Search Terms Report nikad pregledan, nema negative keywords liste, Quality Score ispod 5 za ve&#x107;inu keywords-a, irelevantni search terms tro&#x161;e 20%+ budžeta.</p>
      </div>

      <p>
        Detaljan vodič o keywords research-u, match types, i Quality Score optimizaciji: <Link href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }}>Klju&#x10D;ne re&#x10D;i za Google Ads</Link>. Za negative keywords strategiju: <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }}>Negativne klju&#x10D;ne re&#x10D;i</Link>.
      </p>

      <hr />

      <h2>Kategorija 5: Oglasi i ekstenzije</h2>
      <p>
        Oglasi su ono &#x161;to potencijalni kupci zapravo vide, ali u praksi vidim da preko 50% naloga ima {`"Poor"`} Ad Strength i minimalan broj ekstenzija. To je propuštena prilika — bolji oglasi = viši CTR = niži CPC + vi&#x161;e konverzija.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">RSA kvalitet</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Svaka Ad Group mora imati minimum 1 Responsive Search Ad sa 10-15 headlines i 4 descriptions.</p>
        <ul className="text-sm">
          <li><strong>Ad Strength je {`"Good"`} ili {`"Excellent"`}</strong> — Nikad {`"Poor"`} (Google bukvalno govori da je oglas lo&#x161;)</li>
          <li><strong>Headlines sadrže klju&#x10D;ne re&#x10D;i</strong> — Minimum 3-4 headline varijacije sa primary keywords iz te Ad Group-e</li>
          <li><strong>CTA prisutan u 2-3 headlines</strong> — {`"Naručite odmah"`}, {`"Besplatna dostava"`}, {`"Poručite danas"`}</li>
          <li><strong>USP jasan i konkretan</strong> — &#x160;ta vas razlikuje od konkurencije? (brojevi, garancije, unique benefits)</li>
          <li><strong>Pinning minimalan</strong> — Ostavite Google-u slobodu da testira kombinacije (pinujte samo legal/brand requirements)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ekstenzije (sitelinks, callouts...)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Extensions pove&#x107;avaju CTR za 10-15% i zauzimaju vi&#x161;e prostora na SERP-u. Svaka kampanja mora imati:</p>
        <ul className="text-sm">
          <li><strong>Sitelinks (min 4)</strong> — Linkovi ka razli&#x10D;itim stranicama (categories, about, contact), svaki relevantan za tu kampanju</li>
          <li><strong>Callouts (min 4)</strong> — Kratke bullet point prednosti: {`"Besplatna dostava"`}, {`"24/7 podrška"`}, {`"30 dana garancije"`}</li>
          <li><strong>Structured Snippets</strong> — Liste kategorija, proizvoda, ili usluga (konkretno, ne generički)</li>
          <li><strong>Call extensions</strong> (ako relevantno) — Phone broj direktno u oglasu za high-intent queries</li>
          <li><strong>Location extensions</strong> (lokalni biznisi) — Adresa + mapa pin za lokalne searches</li>
          <li><strong>Price extensions</strong> (eCommerce) — Prikazuje cene direktno u oglasu (eliminišu low-budget klikove)</li>
        </ul>
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Ad Strength {`"Poor"`}, samo 3-5 headlines, generi&#x10D;ki copy koji ne razlikuje od konkurencije</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Dopunite RSA do 10-15 headlines (dodajte varijacije sa keywords, brojevi, CTA, USP), iskoristite svih 4 descriptions, uklonite vi&#x161;ak pinning-a da Google testira kombinacije.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Nema extensions, ili svi sitelinks vode na istu homepage</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Kreirajte 4 sitelinks-a ka razli&#x10D;itim stranicama (product categories, best sellers, about, contact), 4 callouts-a sa konkretnim benefitima (ne generi&#x10D;ki {`"kvalitet"`}), structured snippets sa product/service listama.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2>Kategorija 6: Publike i remarketing</h2>
      <p>
        Remarketing je najlak&#x161;i win u Google Ads-u — ljudi koji su već posetili sajt konvertuju 3-5x bolje od cold traffic-a. Ako Google Ads audit otkrije da nalog nema remarketing liste ili converter exclusions, to je ogromna propuštena prilika.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Remarketing liste postoje i imaju dovoljno users-a</strong> <span className="text-gray-500">— Minimum: All Visitors (30-90 dana), Cart Abandoners, Converters (lista mora imati 1000+ users za Search)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Liste segmentirane logi&#x10D;no</strong> <span className="text-gray-500">— Ne samo {`"All visitors"`} — kreirajte liste po product category-u, viewing time (2+ min), high-value pages</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Converters isklju&#x10D;eni iz prospecting-a</strong> <span className="text-gray-500">— Exclude lista converters (30-90 dana) iz Search kampanja da ne pla&#x107;ate branded searches od ljudi koji su već kupili</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>In-market audiences testirani (Observation mode)</strong> <span className="text-gray-500">— Google audience segments mogu pomo&#x107;i u cold prospecting-u, ali prvo Observation mode (ne Targeting)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Audience performance analiziran</strong> <span className="text-gray-500">— Segment by audience report pokazuje koji segmenti konvertuju najbolje (bid adjustments based on data)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Dedicated remarketing kampanje</strong> <span className="text-gray-500">— Posebne kampanje za remarketing sa vi&#x161;im bid-om i tailored copy (3-5x bolji CVR = mo&#x17E;ete priuštiti vi&#x161;i CPC)</span></div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Preporuka</p>
        <p className="text-blue-800 text-sm mb-0">Kreirajte dedicated remarketing kampanje sa vi&#x161;im bid-om (+50-100% vs cold traffic) i targeted ad copy koji referen&#x10D;ira njihovu prethodnu posetu. Remarketing ima 3-5x bolji conversion rate, pa možete priuštiti vi&#x161;i CPC i dalje biti profitabilni.</p>
      </div>

      <p>
        Detaljan vodič o remarketing strategijama i audience segmentation-u: <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }}>Remarketing vodič za Google Ads</Link>.
      </p>

      <hr />

      <h2>Kategorija 7: Bidding strategija</h2>
      <p>
        Smart Bidding je moćan alat, ali samo ako imate dovoljno konverzija da algoritam može validno učiti. U praksi vidim da preko 40% naloga koristi Smart Bidding sa &lt;10 konverzija mesečno — to ne može funkcionisati.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Strategija odgovara cilju i fazi</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Preporu&#x10D;ujem:</p>
        <ul className="text-sm">
          <li><strong>Maximize Clicks ili Manual CPC</strong> — Nova kampanja bez konverzija, fokus na traffic gathering i data collection</li>
          <li><strong>Maximize Conversions</strong> — Kada imate 15-30 konverzija mesečno, ali još nemate jasan target CPA</li>
          <li><strong>Target CPA</strong> — Kada imate 30+ konverzija mesečno i znate željeni target CPA (baseline + 10-20% improvement)</li>
          <li><strong>Target ROAS</strong> — eCommerce sa preciznim conversion value tracking-om i 50+ konverzija mesečno</li>
          <li><strong>Maximize Conversion Value</strong> — eCommerce kada nemate target ROAS ali želite da maksimizirate revenue</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dovoljno konverzija za Smart Bidding</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Google preporu&#x10D;uje 15+ konverzija u poslednjih 30 dana za Maximize Conversions, 30+ za Target CPA, 50+ za Target ROAS. Ispod toga, algoritam nema dovoljno signal-a za validnu optimizaciju.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Target CPA/ROAS realan i dostiživm</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Target ne treba da bude 50% bolji od trenutnog performance-a. Preporu&#x10D;ujem da target bude 10-20% improvement od baseline-a, pa ga postepeno tighten-ujete tokom nekoliko nedelja.</p>
        <ul className="text-sm">
          <li><strong>Primer:</strong> Ako je trenutni CPA €40, ne stavljajte target €20 odmah — krenite sa €35, pa posle 2 nedelje €32, itd.</li>
          <li><strong>Learning period</strong> — Sačekajte 7-14 dana posle svake promene pre nego &#x161;to donesite zaključke</li>
        </ul>
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Smart Bidding sa &lt;10 konverzija mesečno, ili nerealan target (npr. target CPA €10 kada je trenutni €50)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Vratite se na Manual CPC ili Maximize Conversions dok ne sakupite vi&#x161;e konverzija (30+ mesečno). Ako već koristite Smart Bidding, promenite target da bude realisti&#x10D;niji (10-20% improvement, ne 50%+).</p>
          </div>
        </div>
      </div>

      <hr />

      <h2>Kategorija 8: Budžet i alokacija</h2>
      <p>
        Budget allocation je jedna od naj&#x10D;eš&#x107;ih gre&#x161;aka u Google Ads audit-ima — najbolje kampanje su {`"Limited by budget"`}, dok lo&#x161;e kampanje tro&#x161;e punim budžetom. To je kao da najboljem prodavcu date najmanje resursa.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Best performing campaigns NISU limited by budget</strong> <span className="text-gray-500">— Ako je kampanja profitabilna (CPA &lt; target, ROAS &gt; target), pove&#x107;ajte budget +30-50%</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Impression Share Lost (Budget) &lt;20%</strong> <span className="text-gray-500">— Ako gubite 30%+ impression share zbog budgeta u profitabilnoj kampanji, realokujte vi&#x161;e budžeta</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Budget reallokovan ka winning campaigns</strong> <span className="text-gray-500">— Ako kampanja A ima CPA €20 i B ima CPA €50, prebacite 30-50% budžeta iz B u A</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Sezonalnost planirana</strong> <span className="text-gray-500">— Pove&#x107;ajte budget u high season (Q4, Black Friday, seasonal peaks), smanjite u low season</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Shared budgets evaluirani</strong> <span className="text-gray-500">— Shared budgets mogu kanibalizovati performanse: best kampanja ne dobija dovoljno, worst dobija previše</span></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Red flag: Best performing campaign limited by budget, &gt;30% impression share lost to budget, ili lo&#x161;e kampanje troše 50%+ total budgeta.</p>
      </div>

      <p>
        Ako ne znate koliko budžeta treba aloćirati po kampanji ili industriji, pro&#x10D;itajte: <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }}>Koliko ko&#x161;ta Google Ads</Link>.
      </p>

      <hr />

      <h2>Brzi Google Ads audit za 30 minuta</h2>
      <p>
        Ako nemate 2-4 sata za full Google Ads audit, evo quick check-a koji pokriva 80% najkriti&#x10D;nijih stvari. Preporu&#x10D;ujem da radite ovaj brzi audit mesečno između kvartalnih deep audit-a.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Search Terms Report (5 min)</strong> <span className="text-gray-500">— Top 30 search terms po tro&#x161;ku (30 dana): da li su relevantni? Dodajte negatives za sve irelevantne sa €10+ spend-om</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Budget allocation (3 min)</strong> <span className="text-gray-500">— Da li je profitabilna kampanja {`"Limited by budget"`}? Realokujte budžet iz lo&#x161;ih kampanja</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Conversion tracking check (5 min)</strong> <span className="text-gray-500">— Da li tracking radi? Uporedite Google Ads konverzije sa GA4/CRM-om (max 10-15% razlike ok)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Top keywords performance (5 min)</strong> <span className="text-gray-500">— Top 15 keywords po tro&#x161;ku: QS ok (6+)? CPA prihvatljiv? Pauzirajte keywords sa CPA 2x+ target i 50+ klikova</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Ad performance (4 min)</strong> <span className="text-gray-500">— Koje Ad Groups imaju CTR &lt;2% (Search) ili &lt;0.5% (Display)? Dopunite RSA sa vi&#x161;e headlines ili create new ads</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Extensions active (2 min)</strong> <span className="text-gray-500">— Da li su svi extensions (sitelinks, callouts, structured snippets) aktivni i serving? Dodajte ako fale</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div><strong>Audience lists &amp; exclusions (3 min)</strong> <span className="text-gray-500">— Da li remarketing liste imaju 1000+ users? Da li converters exclusion funkcioniše? Check segment report</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
            <div><strong>Campaign settings quick scan (3 min)</strong> <span className="text-gray-500">— Location targeting correct? Networks ok (Display OFF u Search)? Schedule adjustments aktivni?</span></div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Pro tip</p>
        <p className="text-yellow-800 text-sm mb-0">Napravite Google Sheet sa scoring-om za svaku kategoriju (1-5 skala). Kada radite mese&#x10D;ni quick audit, samo update-ujete scoring i pratite trend — da li ide naviše (optimizacije rade) ili naniže (novi problemi).</p>
      </div>

      <hr />

      <h2>Sistem bodovanja za Google Ads audit</h2>
      <p>
        Preporu&#x10D;ujem da svaku kategoriju bodujete od 1 do 5, i da pratite overall account health score tokom vremena. To pomaže da prioriziujete akcije, merite napredak, i opravdate investiciju u optimizaciju.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Score</th>
              <th className="py-3 px-4 font-heading font-semibold">Status</th>
              <th className="py-3 px-4 font-heading font-semibold">Opis</th>
              <th className="py-3 px-4 font-heading font-semibold">Akcija</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">5</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Excellent</span></td>
              <td className="py-3 px-4">Svi checkpoint-i pokriveni, best practices implementirani</td>
              <td className="py-3 px-4">Održavajte, monitorirajte mesečno</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">4</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Good</span></td>
              <td className="py-3 px-4">Većina pokrivena, sitna pobolj&#x161;anja mogu&#x107;a</td>
              <td className="py-3 px-4">Minor tweaks, low priority (schedule za sledećih mesec-dva)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">3</td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Average</span></td>
              <td className="py-3 px-4">Osnovno pokriveno, ali fale važne optimizacije</td>
              <td className="py-3 px-4">Improvement needed, planirajte 1-2 nedelje za fixes</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">2</td>
              <td className="py-3 px-4"><span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded">Poor</span></td>
              <td className="py-3 px-4">Veliki propusti, wasted spend visok (15-25%+)</td>
              <td className="py-3 px-4">Priority fix, zakažite odmah (ove nedelje)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">1</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Critical</span></td>
              <td className="py-3 px-4">Fundamentalno ne funkcioniše, ozbiljni problemi</td>
              <td className="py-3 px-4">Hitna akcija danas, možda pauzirajte kampanje dok ne popravite</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <strong>Overall Account Health Score</strong> se ra&#x10D;una kao prosek svih 10 kategorija. Ako je overall score 3.5 ili vi&#x161;e, nalog je u solidnom stanju. Ispod 3.0 zna&#x10D;i da postoje prioritetni problemi koji tro&#x161;e budžet neefikasno.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Moje iskustvo sa scoring-om</p>
        <p className="text-blue-800 text-sm mb-0">Kada preuzmem novi nalog na upravljanje, prose&#x10D;an score je 2.5-3.0 (basic setup ok, ali mnogo propusta). Posle prvog meseca optimizacija, score ide na 3.5-4.0. Score 4.5+ je te&#x161;ko održiv dugoro&#x10D;no jer zahteva konstantan proactive rad i testuvarje.</p>
      </div>

      <hr />

      <h2>Naj&#x10D;e&#x161;&#x107;e gre&#x161;ke pri Google Ads audit-u</h2>
      <p>
        Evo naj&#x10D;eš&#x107;ih gre&#x161;aka koje vidim kada ljudi rade Google Ads audit sami, ili kada outsource-uju neiskusnoj agenciji ili freelancer-u.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #1</p>
          <p className="font-semibold mb-2">Fokusiranje samo na surface-level metrike (CTR, CPC) bez gledanja konverzija i profitabilnosti</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Uvek audit-ujte CPA i ROAS (ili conversion rate ako nemate revenue tracking). CTR i CPC su sredstvo, ne cilj — možete imati visok CTR i lo&#x161; ROI.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #2</p>
          <p className="font-semibold mb-2">Preskakanje Search Terms Report-a — najvažniji deo audit-a koji otkriva wasted spend</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Search Terms Report MORA biti deo svakog Google Ads audit-a. Filterirajte top 50 po tro&#x161;ku (30 dana) i proverite da li su relevantni. Dodajte negatives za sve irelevantne sa €10+ spend-om.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #3</p>
          <p className="font-semibold mb-2">Promena 10 stvari odjednom pa ne znate &#x161;ta je uticalo na rezultat</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Posle audit-a, prioritizujte top 3-5 akcija i radite ih postepeno (1-2 nedelje između change-ova, sa&#x10D;ekajte learning period). Tako možete meriti impact svake optimizacije pojedina&#x10D;no.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #4</p>
          <p className="font-semibold mb-2">Gledanje samo poslednjih 7 dana podataka (suvše kratko za validne zaklju&#x10D;ke)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Audit-ujte poslednjih 30-90 dana podataka. 7 dana je previše kratko (vikend vs radni dani distorzija, sezonalnost, nedovoljno konverzija za statisti&#x10D;ku zna&#x10D;ajnost).</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #5</p>
          <p className="font-semibold mb-2">Pauziranje kampanja/keywords-a sa {`"lošim"`} performance-om bez dijagnostike ZA&#x160;TO su lo&#x161;i</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Pre nego &#x161;to pauzirate, dijagnostikujte: Da li je problem keyword (lo&#x161; intent), ad copy (nizak CTR), landing page (lo&#x161; CVR), ili targeting (pogre&#x161;na publika)? Možda je fix jednostavan — nova LP ili bolji ad copy.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #6</p>
          <p className="font-semibold mb-2">Ignorisanje benchmark-ova — ne znate da li je va&#x161; CPA €50 dobar ili lo&#x161;</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Re&#x161;enje:</strong> Uporedite metrike sa industry benchmarks (Google objavljuje prose&#x10D;ne CPC/CVR po industrijama). Takođe uporedite performance sa va&#x161;im baseline-om (pre 3-6 meseci) da vidite trend.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2>Naj&#x10D;e&#x161;&#x107;e postavljena pitanja o Google Ads audit-u</h2>
      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko često treba raditi Google Ads audit?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Preporu&#x10D;ujem <strong>kvartalni deep audit</strong> (2-4 sata, svih 10 kategorija + 80+ checkpoint-a) + <strong>mese&#x10D;ni quick audit</strong> (30 min, 8 priority checkpoint-a). Takođe radite audit odmah ako: (1) performance naglo padne, (2) preuzimate nalog od druge agencije, (3) pokrećete nove proizvode/usluge, ili (4) menjate biznis model.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko ko&#x161;ta profesionalan Google Ads audit?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-3">U praksi vidim opseg od €200 do €1500+ u zavisnosti od veli&#x10D;ine naloga, broja kampanja, i dubine audit-a.</p>
            <ul className="text-sm mb-0">
              <li><strong>Basic audit</strong> (mali nalog, 2-3 kampanje, 1 tržište): €200-350</li>
              <li><strong>Standard audit</strong> (srednji nalog, 5-10 kampanja, 1-2 tržišta): €400-700</li>
              <li><strong>Deep audit</strong> (veliki nalog, 10+ kampanja, multi-market, kompletna dijagnostika): €800-1500+</li>
            </ul>
            <p className="mt-3 mb-0">Ako vam je mese&#x10D;ni ad spend €5K+, profesionalan Google Ads audit se isplati jer u proseku otkriva 15-25% wasted spend-a koji se može eliminisati u prvom mesecu.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Mogu li sam da radim Google Ads audit ili mi treba specialist?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Možete sami ako pratite checklist iz ovog vodi&#x10D;a i imate tehni&#x10D;ko razumevanje Google Ads-a. Međutim, specialist ili agencija &#x107;e brže identifikovati probleme jer vide 10-20+ naloga mese&#x10D;no i znaju &#x161;ta je {`"normal"`} vs {`"red flag"`}. Takođe, spoljni pogled elimini&#x161;e confirmation bias. Ako je ad spend €3K+ mese&#x10D;no, preporu&#x10D;ujem da bar jednom godi&#x161;nje platite profesionalan Google Ads audit za second opinion.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            &#x160;ta je naj&#x10D;e&#x161;&#x107;i problem koji Google Ads audit otkriva?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Top 3 problema su: (1) <strong>Irelevantni search terms</strong> — tro&#x161;e 15-30% budžeta jer nema negative keywords liste ili se ne odr&#x17E;ava, (2) <strong>Conversion tracking ne funkcioniše ta&#x10D;no</strong> — ne radi ili bele&#x17E;i duplirane konverzije, pa algoritam donosi lo&#x161;e odluke, (3) <strong>Lo&#x161;a budget alokacija</strong> — lo&#x161;e kampanje tro&#x161;e previ&#x161;e, dobre kampanje limited by budget.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko vremena treba da prođe između audit-a i vidljivih rezultata?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0"><strong>Quick wins</strong> (dodavanje negative keywords, isklju&#x10D;ivanje Display Network-a iz Search kampanja, budget reallocation) daju rezultate za 7-14 dana. <strong>Srednje optimizacije</strong> (ad copy improvement, bidding adjustments) za 2-4 nedelje. <strong>Dublje promene</strong> (restructuring kampanja, nova bidding strategija) mogu zahtevati 4-8 nedelja. Smart Bidding uvek ima 7-14 dana learning period posle svake promene.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            &#x160;ta posle Google Ads audit-a — ko implementira optimizacije?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Zavisi od dogovora i va&#x161;ih resursa. Neki specialist-i daju samo audit report sa priori zovanim preporukama (DIY implementation). Drugi nude audit + implementation kao package. Tre&#x107;i nude audit + ongoing management (mese&#x10D;no upravljanje). Preporu&#x10D;ujem da implementation radi ista osoba koja je radila audit jer poznaje kontekst, prioritete, i razloge iza svake preporuke.</p>
          </div>
        </details>
      </div>

      <hr />

      <h2>Zaklju&#x10D;ak</h2>
      <p>
        Google Ads audit nije one-time checklist — to je sistematski proces koji treba da postane deo va&#x161;eg redovnog workflow-a. Moje iskustvo je da nalozi koji se redovno audit-uju (kvartalni deep audit + mese&#x10D;ni quick check) imaju 20-30% bolje rezultate od naloga koji se {`"set and forget"`}.
      </p>

      <p>
        Ovaj vodič pokriva 80+ checkpoint-a u 10 kategorija koje li&#x10D;no koristim na 50+ naloga u poslednjih nekoliko godina. Nije sve relevantno za svaki biznis — npr. ako nemate eCommerce, preskočite conversion value tracking. Ali osnove (conversion tracking, search terms, budget allocation, ad quality) su univerzalne za sve industrije.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Kada preuzmem novi nalog na upravljanje, prva stvar je uvek detaljan Google Ads audit. To mi daje jasnu sliku gde su problemi, gde su quick wins, i gde su dugoro&#x10D;ne prilike za rast. Bez audit-a, optimizacija je improvizacija i bacanje para.</p>
      </div>

      <p>
        Ako nemate vremena ili iskustva da radite detaljan Google Ads audit sami, preporu&#x10D;ujem da kontaktirate specialist-a. Investicija od €300-700 u profesionalan audit se višestruko isplati ako otkrijete 15-25% wasted spend-a ili propuštenih prilika za skaliranje.
      </p>

      <p>
        Za nastavak optimizacije posle audit-a, pro&#x10D;itajte: <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimizacija" } }}>Google Ads optimizacija vodi&#x10D;</Link> i <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }}>Naj&#x10D;eš&#x107;e Google Ads gre&#x161;ke</Link>.
      </p>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Potreban vam je profesionalan Google Ads audit?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">Radim audit-e za naloge svih veli&#x10D;ina — od startupa do enterprise klijenata. Dobijate 80+ checkpoint audit report + prioritizovan action plan + implementation preporuke + follow-up консультацију.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Zaka&#x17E;ite besplatnu konsultaciju</Link>
      </div>

      <hr />

      <h2>Povezani vodi&#x10D;i</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/google-ads-audit" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Profesionalni Google Ads audit</p>
          <p className="text-xs text-gray-500 mb-0">Detaljna analiza va&#x161;eg naloga sa akcionim planom</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking vodi&#x10D;</p>
          <p className="text-xs text-gray-500 mb-0">Kako postaviti pra&#x107;enje konverzija i troubleshoot-ovati probleme</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Quality Score vodi&#x10D;</p>
          <p className="text-xs text-gray-500 mb-0">&#x160;ta je Quality Score i kako ga pobolj&#x161;ati za niži CPC</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Klju&#x10D;ne re&#x10D;i vodi&#x10D;</p>
          <p className="text-xs text-gray-500 mb-0">Keyword research, match types, i optimizacija klju&#x10D;nih re&#x10D;i</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negativne klju&#x10D;ne re&#x10D;i</p>
          <p className="text-xs text-gray-500 mb-0">Kako identifikovati i dodati negative keywords za eliminiše wasted spend</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimizacija" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads optimizacija</p>
          <p className="text-xs text-gray-500 mb-0">Ongoing optimizacija posle audit-a — &#x161;ta raditi mese&#x10D;no i weekly</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Koliko ko&#x161;ta Google Ads</p>
          <p className="text-xs text-gray-500 mb-0">Budget planning i CPC benchmark-ovi po industrijama</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing vodi&#x10D;</p>
          <p className="text-xs text-gray-500 mb-0">Kako postaviti remarketing liste i strategije za bolje konverzije</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Naj&#x10D;eš&#x107;e Google Ads gre&#x161;ke</p>
          <p className="text-xs text-gray-500 mb-0">20+ naj&#x10D;e&#x161;&#x107;ih gre&#x161;aka i kako ih izbeći</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        <p className="mb-1"><strong>Autor:</strong> Slobodan Jelisavac, Google Ads Specialist</p>
        <p className="mb-0">Poslednje ažuriranje: Februar 2026</p>
      </div>
    </>
  );
}

