import { Link } from "@/i18n/navigation";

export default function GoogleAdsApiReportingGaqlEN() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">In short</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          GAQL looks like SQL — SELECT, FROM, WHERE, ORDER BY, LIMIT — but it isn&apos;t SQL, and the difference bites the first time you write a query that mixes an incompatible metric and segment. There&apos;s no JOIN, no subquery, and the resource in your FROM clause decides which metrics and segments are even legal to ask for. Get the combination wrong and the request fails validation.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">12</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">copy-paste report queries below</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">5</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">clauses you&apos;ll actually use (SELECT/FROM/WHERE/ORDER BY/LIMIT)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">operation charged per search() or searchStream() call, regardless of row count</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">20,000</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">max items allowed in a single IN clause</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Quick answer</p>
        <p className="text-base text-gray-700 mb-0">
          GAQL (Google Ads Query Language) is the query syntax you send to <code>GoogleAdsService.search()</code> or <code>searchStream()</code> to pull reporting data out of the API. A query has up to five clauses — SELECT, FROM, WHERE, ORDER BY, LIMIT — and every field you select is one of four types: a resource attribute (<code>campaign.id</code>), an attributed resource field pulled in through an implicit join (<code>ad_group.name</code> while your FROM is <code>ad_group_ad</code>), a metric (<code>metrics.clicks</code>), or a segment (<code>segments.date</code>). Not every metric can be paired with every segment or every resource — Google&apos;s own Query Validator exists specifically because that compatibility isn&apos;t obvious from the field names alone.
        </p>
      </div>

      <p>
        Every morning, a script pulls GAQL reports against nine client accounts before I&apos;m at my desk — spend, search terms, conversions, asset performance. None of that runs without the auth chain working first, which I covered in{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-authentication-guide" } }} className="underline text-blue-700 font-medium">
          the authentication guide
        </Link>
        . If your <code>google-ads.yaml</code> and OAuth flow aren&apos;t wired up yet, start there — this post picks up exactly where that one ends, with a working connection and no idea yet what to actually ask it.
      </p>
      <p>
        This is the part nobody hands you as a cheat sheet: the anatomy of a GAQL query, when to use <code>search()</code> versus <code>searchStream()</code>, twelve report queries pulled straight from my own account-monitoring scripts, and the traps that produce a query that runs fine but returns the wrong thing — or doesn&apos;t validate at all.
      </p>

      <hr />
      {/* ── Table of Contents ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#anatomy" className="block py-1 text-base text-gray-700 hover:text-primary underline">Anatomy of a GAQL query</a></li>
          <li><a href="#search-vs-searchstream" className="block py-1 text-base text-gray-700 hover:text-primary underline">search() vs. searchStream() — which one to call</a></li>
          <li><a href="#copy-paste-queries" className="block py-1 text-base text-gray-700 hover:text-primary underline">12 copy-paste GAQL reports</a></li>
          <li><a href="#traps" className="block py-1 text-base text-gray-700 hover:text-primary underline">Traps: metrics/segments, zero-impression rows, micros</a></li>
          <li><a href="#query-validator" className="block py-1 text-base text-gray-700 hover:text-primary underline">The Query Validator — check before you deploy</a></li>
          <li><a href="#quotas" className="block py-1 text-base text-gray-700 hover:text-primary underline">Limits and quotas</a></li>
          <li><a href="#faq-gaql-reporting" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
        </ol>
      </nav>

      <h2 id="anatomy">Anatomy of a GAQL query</h2>
      <p>
        Per Google&apos;s own{" "}
        <a href="https://developers.google.com/google-ads/api/docs/query/overview" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          query language overview
        </a>
        , GAQL supports five clauses: SELECT, FROM, WHERE, ORDER BY, and LIMIT (plus an optional PARAMETERS clause for edge cases). Only SELECT and FROM are required — a query against <code>GoogleAdsFieldService</code>, used to inspect field metadata, even drops FROM entirely and keeps just SELECT and WHERE.
      </p>
      <p>
        Every field you put in SELECT falls into one of four categories, and the category determines what you&apos;re allowed to combine it with:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Field type</th>
              <th className="py-3 px-3 font-heading font-semibold">Example</th>
              <th className="py-3 px-3 font-heading font-semibold">What it is</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Resource attribute</td>
              <td className="py-3 px-3"><code>campaign.id</code>, <code>campaign.name</code></td>
              <td className="py-3 px-3">A direct property of the resource in your FROM clause</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Attributed resource</td>
              <td className="py-3 px-3"><code>ad_group.name</code> while FROM is <code>ad_group_ad</code></td>
              <td className="py-3 px-3">A resource implicitly joined to the main one — its attributes are selectable without writing a JOIN</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Metric</td>
              <td className="py-3 px-3"><code>metrics.impressions</code>, <code>metrics.cost_micros</code></td>
              <td className="py-3 px-3">A measurement of performance</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Segment</td>
              <td className="py-3 px-3"><code>segments.date</code>, <code>segments.device</code></td>
              <td className="py-3 px-3">A dimension to group by — add it alongside metrics and those metrics split by segment (more rows)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        One easy mistake: a resource attribute on the FROM resource itself comes back &quot;for free&quot; once you select anything from it, but an attribute of an <em>attributed</em> resource — <code>ad_group.name</code> when your FROM is <code>campaign</code>, for instance — has to be selected explicitly, or it simply isn&apos;t in the response.
      </p>

      <p>
        WHERE supports a longer operator list than plain SQL gives you. Per the{" "}
        <a href="https://developers.google.com/google-ads/api/docs/query/grammar" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          GAQL grammar reference
        </a>
        :
      </p>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
        <code>{`= != > >= < <= IN NOT IN
LIKE NOT LIKE
CONTAINS ANY  CONTAINS ALL  CONTAINS NONE
IS NULL  IS NOT NULL
DURING  BETWEEN
REGEXP_MATCH  NOT REGEXP_MATCH`}</code>
      </pre>
      <p>
        LIKE only works on string fields, not arrays — use CONTAINS ANY/ALL/NONE for array fields instead. REGEXP_MATCH runs on RE2 syntax, and DURING pairs with a fixed set of date-range literals rather than arbitrary date math:
      </p>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
        <code>{`LAST_7_DAYS   LAST_14_DAYS   LAST_30_DAYS   LAST_BUSINESS_WEEK
LAST_MONTH    LAST_WEEK_MON_SUN   LAST_WEEK_SUN_SAT
THIS_MONTH    THIS_WEEK_MON_TODAY   THIS_WEEK_SUN_TODAY
TODAY   YESTERDAY`}</code>
      </pre>
      <p>
        ORDER BY takes a field name with an optional ASC or DESC, and LIMIT takes a positive integer. Both are optional, but every report query below uses at least one — Google&apos;s docs recommend selecting only the fields you actually need, and the field reference is worth a bookmark before you write anything nontrivial.
      </p>

      <hr />

      <h2 id="search-vs-searchstream">search() vs. searchStream() — which one to call</h2>
      <p>
        Both methods run the same GAQL and return the same <code>GoogleAdsRow</code> objects, per Google&apos;s{" "}
        <a href="https://developers.google.com/google-ads/api/docs/reporting/overview" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          reporting overview
        </a>
        . The difference is entirely in how the response arrives.
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
              <td className="py-3 px-3 font-medium">Response shape</td>
              <td className="py-3 px-3">Paginated — you iterate <code>next_page_token</code> yourself</td>
              <td className="py-3 px-3">A continuous stream, paginated automatically for you</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Best for</td>
              <td className="py-3 px-3">Smaller result sets, or when you want explicit control over paging</td>
              <td className="py-3 px-3">Large result sets, less pagination code to maintain</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Quota cost</td>
              <td className="py-3 px-3">1 operation per call; further paginated requests on a valid token don&apos;t count again</td>
              <td className="py-3 px-3">1 operation total, no matter how many rows or batches come back</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        In my own stack, every module in <code>ppc_ops</code> — the nightly script that walks nine client accounts — calls <code>search()</code>, not <code>searchStream()</code>. The accounts are in the thousands-of-rows range, not millions, so explicit pagination control costs nothing and keeps the code simpler to debug when a report comes back wrong. <code>searchStream()</code> earns its keep once you&apos;re scanning an entire MCC at once and the row count climbs into the tens of thousands — a single call still costs one operation either way, which is the detail worth remembering when you&apos;re budgeting against a daily quota.
      </p>

      <hr />

      <h2 id="copy-paste-queries">12 copy-paste GAQL reports</h2>
      <p>
        These are anonymized, working queries — most pulled directly out of scripts that run against live client accounts every morning. A few are flagged below as standard patterns rather than lifted from a specific file. Swap the date ranges and status filters for your own.
      </p>

      <h3>1. Campaign spend, last 30 days</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
        <code>{`SELECT campaign.name, campaign.status, campaign.id,
       segments.date, metrics.impressions, metrics.clicks,
       metrics.cost_micros, metrics.conversions, metrics.conversions_value
FROM campaign
WHERE campaign.status = 'ENABLED'
  AND segments.date DURING LAST_30_DAYS`}</code>
      </pre>

      <h3>2. Search terms report for a period</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
        <code>{`SELECT search_term_view.search_term, search_term_view.status,
       campaign.name, campaign.advertising_channel_type, ad_group.name,
       metrics.impressions, metrics.clicks, metrics.cost_micros,
       metrics.conversions, metrics.conversions_value
FROM search_term_view
WHERE segments.date BETWEEN '2026-01-01' AND '2026-01-31'`}</code>
      </pre>

      <h3>3. Conversions by day, for pacing and trend checks</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
        <code>{`SELECT campaign.id, segments.date,
       metrics.cost_micros, metrics.impressions, metrics.clicks,
       metrics.conversions, metrics.conversions_value
FROM campaign
WHERE segments.date BETWEEN '2026-01-01' AND '2026-03-31'`}</code>
      </pre>
      <p className="text-sm text-gray-600">
        One 90-day pull, sliced into 7-day/30-day/prior-period windows locally afterward, instead of four separate calls — the API charges per call, not per row.
      </p>

      <h3>4. Keyword performance with Quality Score</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
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
        The <code>metrics.cost_micros &gt; 0</code> filter is deliberate — it drops zero-spend keywords out of a Quality Score report, where they&apos;re noise rather than signal.
      </p>

      <h3>5. RSA asset performance and ad strength</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
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

      <h3>6. PMax asset group ad strength</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
        <code>{`SELECT asset_group.id, asset_group.name, asset_group.status,
       asset_group.ad_strength, campaign.name, campaign.status
FROM asset_group
WHERE asset_group.status != 'REMOVED' AND campaign.status = 'ENABLED'`}</code>
      </pre>

      <h3>7. Conversion action setup audit</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
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
        Useful as a first check on any new account — primary goal, counting type, and attribution model, in one call, before touching Smart Bidding.
      </p>

      <h3>8. Change event log — an audit trail of who changed what</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
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
        <code>change_event</code> is a resource where both the date filter and LIMIT are non-negotiable, and both come with hard caps — the date range can&apos;t reach back more than 30 days, and LIMIT can&apos;t exceed 10,000. See the trap below.
      </p>

      <h3>9. Effective target on portfolio (shared) bidding strategies</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
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
        A portfolio strategy is where the target most often &quot;hides&quot; — the field on the campaign itself comes back empty, so this is the resource that actually has it.
      </p>

      <h3>10. Shopping and product performance</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
        <code>{`SELECT segments.product_title, metrics.impressions, metrics.clicks,
       metrics.cost_micros, metrics.conversions, metrics.conversions_value
FROM shopping_performance_view
WHERE segments.date DURING LAST_30_DAYS
ORDER BY metrics.cost_micros DESC`}</code>
      </pre>

      <h3>11. Account-level assets (sitelinks, callouts)</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
        <code>{`SELECT customer_asset.field_type, customer_asset.status,
       asset.id, asset.type
FROM customer_asset
WHERE customer_asset.status != 'REMOVED'`}</code>
      </pre>
      <p className="text-sm text-gray-600">
        Check this before flagging &quot;campaign has no sitelinks&quot; — an account-level asset shows up on any campaign without its own, and skipping this query produces a false positive.
      </p>

      <h3>12. Budget pacing (standard pattern)</h3>
      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
        <code>{`SELECT campaign.id, campaign.name,
       campaign_budget.amount_micros,
       campaign_budget.delivery_method,
       metrics.cost_micros
FROM campaign
WHERE campaign.status = 'ENABLED'
  AND segments.date DURING THIS_MONTH`}</code>
      </pre>
      <p className="text-sm text-gray-600">
        This one is a standard pattern rather than a line lifted from a script — build your own pacing math on top of <code>amount_micros</code> versus month-to-date <code>cost_micros</code>.
      </p>

      <hr />

      <h2 id="traps">Traps: metrics/segments, zero-impression rows, micros</h2>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">What actually trips people up in production</p>
        <ul className="text-yellow-800 text-base mb-0 space-y-2 pl-4 list-disc">
          <li><strong>Metric/segment compatibility isn&apos;t universal.</strong> Not every segment can be paired with every metric, and the mismatch fails at validation, not silently. Run new query shapes through the Query Validator before they hit production.</li>
          <li><strong>A rejected request still counts against your quota.</strong> Google&apos;s{" "}
            <a href="https://developers.google.com/google-ads/api/docs/best-practices/quotas" target="_blank" rel="noopener noreferrer" className="underline text-yellow-900 font-medium">quota documentation</a>{" "}
            doesn&apos;t carve out an exception for validation failures — a malformed query that never returns a row still spends one operation against your daily limit, so check new query shapes against the Query Validator locally instead of trial-and-error against a live account.</li>
          <li><strong>Zero-impression rows are normal, not a bug.</strong> <code>keyword_view</code> and similar resources happily return rows with zero clicks and zero impressions. If a report should only show active items, filter explicitly — <code>metrics.cost_micros &gt; 0</code> or <code>metrics.impressions &gt; 0</code>.</li>
          <li><strong>Every money field is in micros.</strong> <code>cost_micros</code>, <code>cpc_bid_micros</code>, <code>target_cpa_micros</code> — divide by 1,000,000 for the actual currency amount. My own reporting code does this everywhere: <code>cost = cost_micros / 1_000_000</code>.</li>
          <li><strong><code>change_event</code> requires both a date filter and a LIMIT — and both are capped.</strong> The date range can&apos;t reach back more than 30 days, and LIMIT can&apos;t exceed 10,000. Leave out either clause, or push past either cap, and the query fails validation outright — it&apos;s not optional the way it is for most other resources. See Google&apos;s{" "}
            <a href="https://developers.google.com/google-ads/api/docs/reporting/change-event" target="_blank" rel="noopener noreferrer" className="underline text-yellow-900 font-medium">change_event documentation</a>.</li>
          <li><strong>An IN clause tops out at 20,000 items,</strong> per the{" "}
            <a href="https://developers.google.com/google-ads/api/docs/best-practices/quotas" target="_blank" rel="noopener noreferrer" className="underline text-yellow-900 font-medium">quota documentation</a>. Batch larger ID lists into multiple calls.</li>
          <li><strong>The gRPC response is capped at 64 MB,</strong> also per the{" "}
            <a href="https://developers.google.com/google-ads/api/docs/best-practices/quotas" target="_blank" rel="noopener noreferrer" className="underline text-yellow-900 font-medium">quota documentation</a>. For a large pull, select fewer fields or switch to <code>searchStream()</code> rather than assuming one giant query will just work.</li>
          <li><strong>Configuration resources have no metrics.</strong> Account Budget, Ad, Billing Setup, and similar resources can&apos;t be combined with <code>metrics.*</code> fields — they describe setup, not performance. The{" "}
            <a href="https://developers.google.com/google-ads/api/fields/latest/query_validator" target="_blank" rel="noopener noreferrer" className="underline text-yellow-900 font-medium">Query Validator</a>{" "}
            splits resources into the two groups if you want to check before writing the query.</li>
        </ul>
      </div>

      <hr />

      <h2 id="query-validator">The Query Validator — check before you deploy</h2>
      <p>
        Google publishes a{" "}
        <a href="https://developers.google.com/google-ads/api/fields/latest/query_validator" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          Query Validator / Query Builder
        </a>{" "}
        that checks segment, metric, and resource compatibility before you ever send a request. Resources split into two groups — those with metrics and those without — and the tool catches an invalid segment-metric combination before it becomes a runtime error in a script running unattended overnight. Worth running any new query shape through it once, especially before it goes into a scheduled job.
      </p>

      <hr />

      <h2 id="quotas">Limits and quotas</h2>
      <p>
        Per Google&apos;s{" "}
        <a href="https://developers.google.com/google-ads/api/docs/best-practices/quotas" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          quota documentation
        </a>
        , a <code>search</code> or <code>searchStream</code> request counts as exactly one operation against your daily operation quota — regardless of how many rows or streaming batches come back. Paginated follow-up requests on a valid page token don&apos;t count again. Exceed the quota and you get <code>RESOURCE_EXHAUSTED</code>.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Access level</th>
              <th className="py-3 px-3 font-heading font-semibold">Daily operations, production accounts</th>
              <th className="py-3 px-3 font-heading font-semibold">Daily operations, test accounts</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Explorer</td>
              <td className="py-3 px-3">2,880</td>
              <td className="py-3 px-3">15,000</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Basic</td>
              <td className="py-3 px-3">15,000</td>
              <td className="py-3 px-3">15,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        My own nightly reporting across all nine client accounts runs entirely on Explorer access — every query above works fine at that level. In my experience, stepping up to Basic Access mainly unlocks planning tools like Keyword Planner fields, not the reporting resources themselves; I wrote up the full application process, including the July 2026 fast-track, in{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-guide" } }} className="underline text-blue-700 font-medium">
          the Basic Access guide
        </Link>
        .
      </p>

      <hr />

      <h2 id="faq-gaql-reporting">Frequently asked questions</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          What is GAQL, and is it the same as SQL?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          GAQL (Google Ads Query Language) borrows SQL&apos;s SELECT/FROM/WHERE/ORDER BY/LIMIT shape but runs on its own grammar. There&apos;s no JOIN and no subquery — instead, certain resources are &quot;attributed&quot; to your main FROM resource and get pulled in implicitly, so you can select <code>ad_group.name</code> while querying <code>ad_group_ad</code> without writing a join yourself. It also has a longer WHERE operator set than plain SQL, including CONTAINS ANY/ALL/NONE and DURING for fixed date-range literals.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          When should I use search() instead of searchStream()?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Use <code>search()</code> when the result set is small to moderate or you want explicit control over pagination — every module in my own account-monitoring stack uses it, since the accounts involved run in the thousands of rows, not millions. Use <code>searchStream()</code> for larger pulls where you&apos;d rather not hand-roll page-token iteration. Both count as a single operation against your daily quota per call, no matter how many rows come back.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Why does my GAQL report return rows with zero impressions and zero cost?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          That&apos;s expected behavior, not a bug — resources like <code>keyword_view</code> return every matching row, including ones with no activity in the period. If you only want rows that actually spent or served, add an explicit filter such as <code>metrics.cost_micros &gt; 0</code> or <code>metrics.impressions &gt; 0</code> to your WHERE clause.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          What does the &quot;_micros&quot; suffix on fields like cost_micros mean?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Every monetary field in the Google Ads API — <code>cost_micros</code>, <code>cpc_bid_micros</code>, <code>target_cpa_micros</code>, and similar — is expressed in micros, a fixed-point unit equal to one-millionth of the account&apos;s currency. Divide by 1,000,000 to get the actual amount. It&apos;s easy to miss the first time and report a spend number that&apos;s off by six orders of magnitude.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Do I need Basic Access to run GAQL reports, or does Explorer access cover it?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          In my experience, Explorer access covers the reporting resources behind most GAQL queries — campaign, ad_group, keyword_view, search_term_view, and the rest used in this post — at 2,880 operations per day on production accounts. Basic Access raises that to 15,000 operations per day and mainly unlocks planning tools like Keyword Planner fields, not reporting itself. See{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-guide" } }} className="underline text-blue-700 font-medium">
            the Basic Access guide
          </Link>{" "}
          for the full application process.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Want reports like these running against your own accounts?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          I build and run this exact GAQL reporting layer for client accounts — spend, search terms, Quality Score, asset performance, budget pacing — on top of a properly configured Google Ads API connection.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Schedule a free consultation
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/konsultacije" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Consulting</p>
          <p className="text-xs text-gray-500 mb-0">A one-off audit or ongoing strategy partnership.</p>
        </Link>
        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Management</p>
          <p className="text-xs text-gray-500 mb-0">Full account management, including API-driven monitoring.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-authentication-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads API Authentication Guide</p>
          <p className="text-xs text-gray-500 mb-0">OAuth2, developer tokens, and the 7-day refresh token trap.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads API Basic Access Guide</p>
          <p className="text-xs text-gray-500 mb-0">Getting your developer token approved, including the July 2026 fast-track.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-api-access-guide-for-agencies" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google API Access Guide for Agencies</p>
          <p className="text-xs text-gray-500 mb-0">One Cloud project, six APIs: Ads, GA4, Search Console, GTM, and more.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "offline-conversion-import-b2b" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Offline Conversion Import for B2B</p>
          <p className="text-xs text-gray-500 mb-0">Feeding closed deals back into Google Ads, running on the same API.</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: August 29, 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Author: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
