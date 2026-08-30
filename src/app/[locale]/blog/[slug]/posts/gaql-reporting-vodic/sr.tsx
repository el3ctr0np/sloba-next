import { Link } from "@/i18n/navigation";

export default function GaqlReportingVodicSR() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          GAQL izgleda kao SQL - SELECT, FROM, WHERE, ORDER BY, LIMIT - ali SQL nije, i ta razlika ujede čim prvi put napišete upit koji meša nekompatibilan metric i segment. Nema JOIN-a, nema subquery-ja, i resurs u vašoj FROM klauzuli određuje koje metrics i segments uopšte smete da tražite. Ako pogrešite kombinaciju, zahtev pada na validaciji.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">12</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">gotovih upita za izveštaje, spremnih za copy-paste ispod</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">5</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">klauzula koje ćete stvarno koristiti (SELECT/FROM/WHERE/ORDER BY/LIMIT)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">operacija se naplaćuje po search() ili searchStream() pozivu, bez obzira na broj redova</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">20.000</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">maksimalan broj stavki u jednoj IN klauzuli</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Brz odgovor</p>
        <p className="text-base text-gray-700 mb-0">
          GAQL (Google Ads Query Language) je sintaksa kojom se obraćate metodi <code>GoogleAdsService.search()</code> ili <code>searchStream()</code> da izvučete reporting podatke iz API-ja. Upit ima do pet klauzula - SELECT, FROM, WHERE, ORDER BY, LIMIT - a svako polje koje selektujete spada u jednu od četiri kategorije: atribut resursa (<code>campaign.id</code>), atribut pridruženog resursa koji stiže kroz implicitni join (<code>ad_group.name</code> dok vam je FROM <code>ad_group_ad</code>), metric (<code>metrics.clicks</code>) ili segment (<code>segments.date</code>). Svaki metric ne može se spariti sa svakim segmentom ili svakim resursom - Google-ov Query Validator postoji baš zato što ta kompatibilnost nije očigledna samo iz imena polja.
        </p>
      </div>

      <p>
        Svakog jutra, pre nego što sednem za sto, skript izvuče GAQL izveštaje za devet klijentskih naloga - trošenje, search terms, konverzije, učinak asseta. Ništa od toga ne radi dok auth lanac najpre ne proradi, a to sam pokrio u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-autentifikacija" } }} className="underline text-blue-700 font-medium">
          vodiču za autentifikaciju
        </Link>
        . Ako vam <code>google-ads.yaml</code> i OAuth tok još nisu podešeni, krenite tamo - ovaj tekst nastavlja tačno tamo gde se onaj završava, sa konekcijom koja radi i bez ideje šta zapravo da je pitate.
      </p>
      <p>
        Ovo je deo koji vam niko ne da kao podsetnik: anatomija GAQL upita, kad koristiti <code>search()</code> a kad <code>searchStream()</code>, dvanaest upita za izveštaje izvučenih direktno iz mojih sopstvenih skriptova za nadzor naloga, i zamke zbog kojih upit naizgled radi kako treba, ali vrati pogrešnu stvar - ili se uopšte ne validira.
      </p>

      <hr />
      {/* ── Sadržaj ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#anatomija" className="block py-1 text-base text-gray-700 hover:text-primary underline">Anatomija GAQL upita</a></li>
          <li><a href="#search-vs-searchstream" className="block py-1 text-base text-gray-700 hover:text-primary underline">search() naspram searchStream() - koju kad koristiti</a></li>
          <li><a href="#kopiraj-nalepi-upiti" className="block py-1 text-base text-gray-700 hover:text-primary underline">12 GAQL izveštaja za copy-paste</a></li>
          <li><a href="#zamke" className="block py-1 text-base text-gray-700 hover:text-primary underline">Zamke: metrics/segments, redovi bez impresija, micros</a></li>
          <li><a href="#query-validator" className="block py-1 text-base text-gray-700 hover:text-primary underline">Query Validator - proverite pre nego što pustite u rad</a></li>
          <li><a href="#kvote" className="block py-1 text-base text-gray-700 hover:text-primary underline">Limiti i kvote</a></li>
          <li><a href="#faq-gaql-izvestavanje" className="block py-1 text-base text-gray-700 hover:text-primary underline">Često postavljena pitanja</a></li>
        </ol>
      </nav>

      <h2 id="anatomija">Anatomija GAQL upita</h2>
      <p>
        Prema Google-ovom{" "}
        <a href="https://developers.google.com/google-ads/api/docs/query/overview" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          pregledu jezika upita
        </a>
        , GAQL podržava pet klauzula: SELECT, FROM, WHERE, ORDER BY i LIMIT (plus opciona PARAMETERS klauzula za rubne slučajeve). Obavezni su samo SELECT i FROM - upit nad <code>GoogleAdsFieldService</code>-om, kojim pregledate metapodatke o poljima, izbacuje čak i FROM i zadržava samo SELECT i WHERE.
      </p>
      <p>
        Svako polje koje stavite u SELECT pripada jednoj od četiri kategorije, i ta kategorija određuje sa čim smete da ga kombinujete:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Tip polja</th>
              <th className="py-3 px-3 font-heading font-semibold">Primer</th>
              <th className="py-3 px-3 font-heading font-semibold">Šta je to</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Atribut resursa</td>
              <td className="py-3 px-3"><code>campaign.id</code>, <code>campaign.name</code></td>
              <td className="py-3 px-3">Direktno svojstvo resursa iz vaše FROM klauzule</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Pridruženi resurs</td>
              <td className="py-3 px-3"><code>ad_group.name</code> dok je FROM <code>ad_group_ad</code></td>
              <td className="py-3 px-3">Resurs implicitno pridružen glavnom - njegovi atributi su dostupni za SELECT bez pisanja JOIN-a</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Metric</td>
              <td className="py-3 px-3"><code>metrics.impressions</code>, <code>metrics.cost_micros</code></td>
              <td className="py-3 px-3">Merenje učinka</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Segment</td>
              <td className="py-3 px-3"><code>segments.date</code>, <code>segments.device</code></td>
              <td className="py-3 px-3">Dimenzija za grupisanje - dodate je uz metrics i ti metrics se dele po segmentu (više redova)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Jedna laka greška: atribut resursa na samom FROM resursu stigne &quot;besplatno&quot; čim selektujete bilo šta sa njega, ali atribut <em>pridruženog</em> resursa - recimo <code>ad_group.name</code> kad vam je FROM <code>campaign</code> - morate selektovati eksplicitno, ili ga naprosto neće biti u odgovoru.
      </p>

      <p>
        WHERE podržava duži spisak operatora nego čist SQL. Prema{" "}
        <a href="https://developers.google.com/google-ads/api/docs/query/grammar" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          referenci GAQL gramatike
        </a>
        :
      </p>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm text-gray-800 leading-relaxed overflow-x-auto">
        <code>{`= != > >= < <= IN NOT IN
LIKE NOT LIKE
CONTAINS ANY  CONTAINS ALL  CONTAINS NONE
IS NULL  IS NOT NULL
DURING  BETWEEN
REGEXP_MATCH  NOT REGEXP_MATCH`}</code>
      </pre>
      <p>
        LIKE radi samo na string poljima, ne na nizovima - za nizove koristite CONTAINS ANY/ALL/NONE. REGEXP_MATCH radi na RE2 sintaksi, a DURING ide uz fiksan skup literala za period, ne proizvoljnu računicu sa datumima:
      </p>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm text-gray-800 leading-relaxed overflow-x-auto">
        <code>{`LAST_7_DAYS   LAST_14_DAYS   LAST_30_DAYS   LAST_BUSINESS_WEEK
LAST_MONTH    LAST_WEEK_MON_SUN   LAST_WEEK_SUN_SAT
THIS_MONTH    THIS_WEEK_MON_TODAY   THIS_WEEK_SUN_TODAY
TODAY   YESTERDAY`}</code>
      </pre>
      <p>
        ORDER BY uzima ime polja sa opcionim ASC ili DESC, a LIMIT pozitivan ceo broj. Oba su opciona, ali svaki upit za izveštaj ispod koristi bar jedno - Google-ova dokumentacija preporučuje da selektujete samo polja koja vam zaista trebaju, i referencu polja vredi zapamtiti pre nego što napišete išta netrivijalno.
      </p>

      <hr />

      <h2 id="search-vs-searchstream">search() naspram searchStream() - koju kad koristiti</h2>
      <p>
        Obe metode izvršavaju isti GAQL i vraćaju iste <code>GoogleAdsRow</code> objekte, prema Google-ovom{" "}
        <a href="https://developers.google.com/google-ads/api/docs/reporting/overview" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          pregledu reportinga
        </a>
        . Razlika je isključivo u tome kako odgovor stiže.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold"></th>
              <th className="py-3 px-3 font-heading font-semibold">search()</th>
              <th className="py-3 px-3 font-heading font-semibold">searchStream()</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Oblik odgovora</td>
              <td className="py-3 px-3">Paginiran - sami iterirate kroz <code>next_page_token</code></td>
              <td className="py-3 px-3">Kontinuiran stream, paginacija ide automatski</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Za šta je dobar</td>
              <td className="py-3 px-3">Manji setovi rezultata, ili kad hoćete eksplicitnu kontrolu nad paginacijom</td>
              <td className="py-3 px-3">Veliki setovi rezultata, manje koda za paginaciju da održavate</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Cena po kvoti</td>
              <td className="py-3 px-3">1 operacija po pozivu; dalji paginirani zahtevi na validan token se ne broje ponovo</td>
              <td className="py-3 px-3">1 operacija ukupno, bez obzira koliko redova ili batch-eva stigne</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        U mom sopstvenom steku, svaki modul u <code>ppc_ops</code>, noćnom skriptu koji prolazi kroz devet klijentskih naloga, zove <code>search()</code>, ne <code>searchStream()</code>. Nalozi su u opsegu hiljada redova, ne miliona, pa eksplicitna kontrola paginacije ne košta ništa i kod ostaje jednostavniji za debug kad izveštaj stigne pogrešan. <code>searchStream()</code> se isplati tek kad skenirate ceo MCC odjednom i broj redova pređe u desetine hiljada - jedan poziv i dalje košta jednu operaciju u oba slučaja, što je detalj koji vredi zapamtiti kad planirate dnevnu kvotu.
      </p>

      <hr />

      <h2 id="kopiraj-nalepi-upiti">12 GAQL izveštaja za copy-paste</h2>
      <p>
        Ovo su anonimizovani, radni upiti - većina izvučena direktno iz skriptova koji svako jutro rade nad živim klijentskim nalozima. Nekoliko je dole označeno kao standardni obrazac, a ne linija preuzeta iz konkretnog fajla. Zamenite periode i status filtere svojima.
      </p>

      <h3>1. Trošenje kampanje, poslednjih 30 dana</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm text-gray-800 leading-relaxed overflow-x-auto">
        <code>{`SELECT campaign.name, campaign.status, campaign.id,
       segments.date, metrics.impressions, metrics.clicks,
       metrics.cost_micros, metrics.conversions, metrics.conversions_value
FROM campaign
WHERE campaign.status = 'ENABLED'
  AND segments.date DURING LAST_30_DAYS`}</code>
      </pre>

      <h3>2. Search terms izveštaj za period</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm text-gray-800 leading-relaxed overflow-x-auto">
        <code>{`SELECT search_term_view.search_term, search_term_view.status,
       campaign.name, campaign.advertising_channel_type, ad_group.name,
       metrics.impressions, metrics.clicks, metrics.cost_micros,
       metrics.conversions, metrics.conversions_value
FROM search_term_view
WHERE segments.date BETWEEN '2026-01-01' AND '2026-01-31'`}</code>
      </pre>

      <h3>3. Konverzije po danu, za praćenje pacing-a i trenda</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm text-gray-800 leading-relaxed overflow-x-auto">
        <code>{`SELECT campaign.id, segments.date,
       metrics.cost_micros, metrics.impressions, metrics.clicks,
       metrics.conversions, metrics.conversions_value
FROM campaign
WHERE segments.date BETWEEN '2026-01-01' AND '2026-03-31'`}</code>
      </pre>
      <p className="text-sm text-gray-600">
        Jedno povlačenje od 90 dana, koje posle lokalno sečem na prozore od 7/30 dana i prethodni period, umesto četiri odvojena poziva - API naplaćuje po pozivu, ne po redu.
      </p>

      <h3>4. Učinak ključnih reči sa Quality Score-om</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm text-gray-800 leading-relaxed overflow-x-auto">
        <code>{`SELECT
    campaign.name,
    ad_group.name,
    ad_group_criterion.keyword.text,
    ad_group_criterion.keyword.match_type,
    ad_group_criterion.quality_info.quality_score,
    ad_group_criterion.quality_info.creative_quality_score,
    ad_group_criterion.quality_info.post_click_quality_score,
    ad_group_criterion.quality_info.search_predicted_ctr,
    metrics.cost_micros,
    metrics.clicks,
    metrics.impressions,
    metrics.conversions,
    metrics.conversions_value,
    metrics.ctr,
    metrics.search_impression_share
FROM keyword_view
WHERE campaign.status = 'ENABLED'
  AND ad_group_criterion.status = 'ENABLED'
  AND segments.date BETWEEN '2026-01-01' AND '2026-01-31'
  AND metrics.cost_micros > 0
ORDER BY metrics.cost_micros DESC`}</code>
      </pre>
      <p className="text-sm text-gray-600">
        Filter <code>metrics.cost_micros &gt; 0</code> je namerni izbor - izbaci ključne reči bez trošenja iz Quality Score izveštaja, gde su šum, ne signal.
      </p>

      <h3>5. Učinak RSA asseta i ad strength</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm text-gray-800 leading-relaxed overflow-x-auto">
        <code>{`SELECT ad_group_ad.ad.id,
       ad_group_ad.ad.type,
       ad_group_ad.ad.responsive_search_ad.headlines,
       ad_group_ad.ad.responsive_search_ad.descriptions,
       ad_group_ad.ad_strength,
       ad_group_ad.status,
       ad_group_ad.policy_summary.approval_status,
       ad_group_ad.policy_summary.policy_topic_entries,
       ad_group.id, ad_group.name, ad_group.status,
       campaign.id, campaign.name, campaign.status,
       campaign.advertising_channel_type,
       metrics.impressions, metrics.clicks, metrics.cost_micros,
       metrics.conversions
FROM ad_group_ad
WHERE ad_group_ad.status != 'REMOVED'
  AND campaign.status = 'ENABLED'
  AND segments.date BETWEEN '2026-01-01' AND '2026-01-31'`}</code>
      </pre>

      <h3>6. Ad strength asset group-a u PMax-u</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm text-gray-800 leading-relaxed overflow-x-auto">
        <code>{`SELECT asset_group.id, asset_group.name, asset_group.status,
       asset_group.ad_strength, campaign.name, campaign.status
FROM asset_group
WHERE asset_group.status != 'REMOVED' AND campaign.status = 'ENABLED'`}</code>
      </pre>

      <h3>7. Audit podešenih conversion action-a</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm text-gray-800 leading-relaxed overflow-x-auto">
        <code>{`SELECT
    conversion_action.id,
    conversion_action.name,
    conversion_action.type,
    conversion_action.status,
    conversion_action.category,
    conversion_action.primary_for_goal,
    conversion_action.counting_type,
    conversion_action.attribution_model_settings.attribution_model,
    conversion_action.value_settings.default_value,
    conversion_action.value_settings.always_use_default_value
FROM conversion_action
WHERE conversion_action.status = 'ENABLED'
ORDER BY conversion_action.primary_for_goal DESC`}</code>
      </pre>
      <p className="text-sm text-gray-600">
        Korisna kao prva provera na svakom novom nalogu - primarni cilj, counting type i attribution model, u jednom pozivu, pre nego što dirnete Smart Bidding.
      </p>

      <h3>8. Change event log - trag ko je šta menjao</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm text-gray-800 leading-relaxed overflow-x-auto">
        <code>{`SELECT change_event.change_date_time,
       change_event.change_resource_type,
       change_event.change_resource_name,
       change_event.client_type,
       change_event.user_email,
       change_event.changed_fields,
       change_event.resource_change_operation,
       change_event.old_resource,
       change_event.new_resource,
       campaign.name,
       ad_group.name
FROM change_event
WHERE change_event.change_date_time >= '2026-08-01 00:00:00'
  AND change_event.change_date_time <= '2026-08-29 23:59:59'
ORDER BY change_event.change_date_time DESC
LIMIT 1000`}</code>
      </pre>
      <p className="text-sm text-gray-600">
        <code>change_event</code> je resurs gde ni filter po datumu ni LIMIT nisu opcioni, i oba imaju čvrst plafon - period ne sme ići više od 30 dana unazad, a LIMIT ne sme preći 10.000. Vidite zamku ispod.
      </p>

      <h3>9. Ciljna vrednost na portfolio (deljenim) bidding strategijama</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm text-gray-800 leading-relaxed overflow-x-auto">
        <code>{`SELECT bidding_strategy.id,
       bidding_strategy.name,
       bidding_strategy.type,
       bidding_strategy.status,
       bidding_strategy.campaign_count,
       bidding_strategy.maximize_conversion_value.target_roas,
       bidding_strategy.target_roas.target_roas,
       bidding_strategy.target_cpa.target_cpa_micros,
       bidding_strategy.maximize_conversions.target_cpa_micros
FROM bidding_strategy`}</code>
      </pre>
      <p className="text-sm text-gray-600">
        Portfolio strategija je mesto gde se cilj najčešće &quot;sakrije&quot; - polje na samoj kampanji dođe prazno, pa je ovo resurs koji ga zaista nosi.
      </p>

      <h3>10. Učinak Shopping-a i proizvoda</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm text-gray-800 leading-relaxed overflow-x-auto">
        <code>{`SELECT segments.product_title, metrics.impressions, metrics.clicks,
       metrics.cost_micros, metrics.conversions, metrics.conversions_value
FROM shopping_performance_view
WHERE segments.date DURING LAST_30_DAYS
ORDER BY metrics.cost_micros DESC`}</code>
      </pre>

      <h3>11. Asseti na nivou naloga (sitelinks, callouts)</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm text-gray-800 leading-relaxed overflow-x-auto">
        <code>{`SELECT customer_asset.field_type, customer_asset.status,
       asset.id, asset.type
FROM customer_asset
WHERE customer_asset.status != 'REMOVED'`}</code>
      </pre>
      <p className="text-sm text-gray-600">
        Proverite ovo pre nego što obeležite &quot;kampanja nema sitelinkove&quot; - asset na nivou naloga se pojavi na svakoj kampanji koja nema sopstveni, i preskakanje ovog upita pravi lažan nalaz.
      </p>

      <h3>12. Pacing budžeta (standardan obrazac)</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm text-gray-800 leading-relaxed overflow-x-auto">
        <code>{`SELECT campaign.id, campaign.name,
       campaign_budget.amount_micros,
       campaign_budget.delivery_method,
       metrics.cost_micros
FROM campaign
WHERE campaign.status = 'ENABLED'
  AND segments.date DURING THIS_MONTH`}</code>
      </pre>
      <p className="text-sm text-gray-600">
        Ovaj je standardan obrazac, ne linija preuzeta iz konkretnog skripta - sopstvenu pacing računicu gradite na <code>amount_micros</code> naspram <code>cost_micros</code> od početka meseca.
      </p>

      <hr />

      <h2 id="zamke">Zamke: metrics/segments, redovi bez impresija, micros</h2>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Šta stvarno saseca ljude u produkciji</p>
        <ul className="text-yellow-800 text-base mb-0 space-y-2 pl-4 list-disc">
          <li><strong>Kompatibilnost metric/segment nije univerzalna.</strong> Ne može se svaki segment spariti sa svakim metric-om, i neslaganje pada na validaciji, ne tiho. Novi oblik upita provucite kroz Query Validator pre nego što ode u produkciju.</li>
          <li><strong>Odbijen zahtev se i dalje računa u kvotu.</strong> Google-ova{" "}
            <a href="https://developers.google.com/google-ads/api/docs/best-practices/quotas" target="_blank" rel="noopener noreferrer" className="underline text-yellow-900 font-medium">dokumentacija o kvotama</a>{" "}
            ne pravi izuzetak za neuspelu validaciju - upit koji nikad ne vrati nijedan red i dalje potroši jednu operaciju iz dnevnog limita, pa nove oblike upita testirajte lokalno kroz Query Validator, ne pokušajima na živom nalogu.</li>
          <li><strong>Redovi bez impresija su normalni, ne bag.</strong> <code>keyword_view</code> i slični resursi mirno vraćaju redove sa nula klikova i nula impresija. Ako izveštaj treba da pokaže samo aktivne stavke, filtrirajte eksplicitno - <code>metrics.cost_micros &gt; 0</code> ili <code>metrics.impressions &gt; 0</code>.</li>
          <li><strong>Svako novčano polje je u micros.</strong> <code>cost_micros</code>, <code>cpc_bid_micros</code>, <code>target_cpa_micros</code> - podelite sa 1.000.000 za stvarni iznos u valuti. Moj sopstveni reporting kod to radi svuda: <code>cost = cost_micros / 1_000_000</code>.</li>
          <li><strong><code>change_event</code> traži i filter po datumu i LIMIT, i oba imaju plafon.</strong> Period ne sme preći 30 dana unazad, a LIMIT ne sme preći 10.000. Izostavite bilo koji od ta dva uslova, ili pređite bilo koji plafon, i upit pada na validaciji - nije opciono kao kod većine drugih resursa. Vidite Google-ovu{" "}
            <a href="https://developers.google.com/google-ads/api/docs/reporting/change-event" target="_blank" rel="noopener noreferrer" className="underline text-yellow-900 font-medium">dokumentaciju za change_event</a>.</li>
          <li><strong>IN klauzula staje na 20.000 stavki,</strong> prema{" "}
            <a href="https://developers.google.com/google-ads/api/docs/best-practices/quotas" target="_blank" rel="noopener noreferrer" className="underline text-yellow-900 font-medium">dokumentaciji o kvotama</a>. Duže liste ID-jeva podelite na više poziva.</li>
          <li><strong>gRPC odgovor je ograničen na 64 MB,</strong> takođe prema{" "}
            <a href="https://developers.google.com/google-ads/api/docs/best-practices/quotas" target="_blank" rel="noopener noreferrer" className="underline text-yellow-900 font-medium">dokumentaciji o kvotama</a>. Za veliko povlačenje, selektujte manje polja ili pređite na <code>searchStream()</code>, umesto da pretpostavite da će jedan ogroman upit proraditi sam od sebe.</li>
          <li><strong>Konfiguracioni resursi nemaju metrics.</strong> Account Budget, Ad, Billing Setup i slični resursi ne mogu se kombinovati sa <code>metrics.*</code> poljima - oni opisuju podešavanje, ne učinak.{" "}
            <a href="https://developers.google.com/google-ads/api/fields/latest/query_validator" target="_blank" rel="noopener noreferrer" className="underline text-yellow-900 font-medium">Query Validator</a>{" "}
            deli resurse na te dve grupe ako želite da proverite unapred.</li>
        </ul>
      </div>

      <hr />

      <h2 id="query-validator">Query Validator - proverite pre nego što pustite u rad</h2>
      <p>
        Google objavljuje{" "}
        <a href="https://developers.google.com/google-ads/api/fields/latest/query_validator" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          Query Validator / Query Builder
        </a>{" "}
        koji proverava kompatibilnost segmenta, metric-a i resursa pre nego što uopšte pošaljete zahtev. Resursi se dele u dve grupe - one sa metrics i one bez - i alat uhvati nevalidnu kombinaciju segment-metric pre nego što postane runtime greška u skriptu koji radi bez nadzora usred noći. Vredi jednom provući svaki novi oblik upita kroz njega, pogotovo pre nego što ode u zakazan posao.
      </p>

      <hr />

      <h2 id="kvote">Limiti i kvote</h2>
      <p>
        Prema Google-ovoj{" "}
        <a href="https://developers.google.com/google-ads/api/docs/best-practices/quotas" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          dokumentaciji o kvotama
        </a>
        , zahtev <code>search</code> ili <code>searchStream</code> se računa kao tačno jedna operacija u vašu dnevnu kvotu operacija - bez obzira koliko redova ili streaming batch-eva stigne. Paginirani zahtevi koji nastavljaju na validan page token se ne broje ponovo. Pređete kvotu i dobijate <code>RESOURCE_EXHAUSTED</code>.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Nivo pristupa</th>
              <th className="py-3 px-3 font-heading font-semibold">Dnevne operacije, produkcioni nalozi</th>
              <th className="py-3 px-3 font-heading font-semibold">Dnevne operacije, test nalozi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Explorer</td>
              <td className="py-3 px-3">2.880</td>
              <td className="py-3 px-3">15.000</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Basic</td>
              <td className="py-3 px-3">15.000</td>
              <td className="py-3 px-3">15.000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Ceo moj noćni reporting za svih devet klijentskih naloga radi na Explorer nivou - svaki upit iznad na njemu prolazi bez problema. Po mom iskustvu, prelazak na Basic Access uglavnom otključava alate za planiranje kao što je Keyword Planner, ne same reporting resurse; ceo proces prijave, uključujući brzu prijavu od jula 2026, opisao sam u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-vodic" } }} className="underline text-blue-700 font-medium">
          vodiču za Basic Access
        </Link>
        .
      </p>

      <hr />

      <h2 id="faq-gaql-izvestavanje">Često postavljena pitanja</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta je GAQL, i da li je to isto što i SQL?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          GAQL (Google Ads Query Language) pozajmljuje SQL-ov oblik SELECT/FROM/WHERE/ORDER BY/LIMIT, ali radi na sopstvenoj gramatici. Nema JOIN-a ni subquery-ja - umesto toga, određeni resursi su &quot;pridruženi&quot; vašem glavnom FROM resursu i uvuku se implicitno, pa možete selektovati <code>ad_group.name</code> dok upitujete <code>ad_group_ad</code>, a da pritom sami ne pišete join. Ima i duži spisak WHERE operatora nego čist SQL, uključujući CONTAINS ANY/ALL/NONE i DURING za fiksne literale perioda.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Kad da koristim search() umesto searchStream()?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Koristite <code>search()</code> kad je set rezultata mali do umeren ili hoćete eksplicitnu kontrolu nad paginacijom - svaki modul u mom sopstvenom steku za nadzor naloga to radi, jer su nalozi u pitanju u hiljadama redova, ne milionima. Koristite <code>searchStream()</code> za veća povlačenja gde ne biste ručno pisali iteraciju kroz page token. Obe se računaju kao jedna operacija u dnevnu kvotu po pozivu, bez obzira koliko redova stigne.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Zašto mi GAQL izveštaj vraća redove sa nula impresija i nula troška?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          To je očekivano ponašanje, ne bag - resursi poput <code>keyword_view</code> vraćaju svaki red koji odgovara upitu, uključujući one bez ikakve aktivnosti u periodu. Ako hoćete samo redove koji su stvarno trošili ili se prikazivali, dodajte eksplicitan filter u WHERE, na primer <code>metrics.cost_micros &gt; 0</code> ili <code>metrics.impressions &gt; 0</code>.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta znači nastavak &quot;_micros&quot; na poljima kao cost_micros?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Svako novčano polje u Google Ads API-ju - <code>cost_micros</code>, <code>cpc_bid_micros</code>, <code>target_cpa_micros</code> i slična - izraženo je u micros, fiksnoj jedinici jednakoj jednom milionitom delu valute naloga. Podelite sa 1.000.000 da dobijete stvarni iznos. Lako se propusti prvi put, i onda prijavite trošak koji je pogrešan za šest redova veličine.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li mi treba Basic Access za GAQL izveštaje, ili Explorer pristup pokriva to?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Po mom iskustvu, Explorer pristup pokriva reporting resurse iza većine GAQL upita - campaign, ad_group, keyword_view, search_term_view i ostale korišćene u ovom tekstu - uz 2.880 operacija dnevno na produkcionim nalozima. Basic Access to podigne na 15.000 operacija dnevno i uglavnom otključa alate za planiranje kao što je Keyword Planner, ne sam reporting. Ceo proces prijave je u{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-vodic" } }} className="underline text-blue-700 font-medium">
            vodiču za Basic Access
          </Link>.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Hoćete ovakve izveštaje da rade nad vašim nalozima?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          Gradim i vodim tačno ovaj GAQL reporting sloj za klijentske naloge - trošenje, search terms, Quality Score, učinak asseta, pacing budžeta - na vrhu ispravno podešene Google Ads API konekcije.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/konsultacije" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Konsultacije</p>
          <p className="text-xs text-gray-500 mb-0">Jednokratni audit ili tekuća saradnja na strategiji.</p>
        </Link>
        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Upravljanje</p>
          <p className="text-xs text-gray-500 mb-0">Kompletno vođenje naloga, uključujući nadzor preko API-ja.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-autentifikacija" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads API Vodič za Autentifikaciju</p>
          <p className="text-xs text-gray-500 mb-0">OAuth2, developer tokeni i zamka od 7 dana kod refresh tokena.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads API Basic Access Vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako da vam odobre developer token, uključujući brzu prijavu od jula 2026.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-api-pristupi-za-agencije" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google API Pristupi za Agencije</p>
          <p className="text-xs text-gray-500 mb-0">Jedan Cloud projekat, šest API-ja: Ads, GA4, Search Console, GTM i drugi.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "offline-conversion-import-b2b" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Offline Conversion Import za B2B</p>
          <p className="text-xs text-gray-500 mb-0">Kako zatvorene poslove vraćate nazad u Google Ads, na istom API-ju.</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: 29. avgust 2026.
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads konsultant
        </Link>
      </div>
    </>
  );
}
