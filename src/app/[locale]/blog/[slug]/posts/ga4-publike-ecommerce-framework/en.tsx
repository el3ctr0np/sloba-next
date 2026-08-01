import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function GA4AudienceFrameworkEN() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">What&apos;s in this post</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Twenty-five <GlossaryLink slug="ga4">GA4</GlossaryLink> audiences, six pillars, and three things the Admin API flatly refuses to do. This is the complete framework — every list, every configuration, every workaround — not a teaser for something you have to unlock later.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">25</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">lists: 24 targeting audiences + 1 exclusion helper</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">6</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">pillars, one naming convention</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">API limits that shape the whole build</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2-4 wks</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">before a new list is actually usable</p>
          </div>
        </div>
      </div>

      <p>
        I built this out through the GA4 Admin API for a UK skincare retailer I work with — a multi-brand account, twenty-five lists, and the part that turned out to matter most wasn&apos;t any single audience definition. It was what the API refuses to do. Three limits kept showing up, in different disguises, on almost every list I tried to build the &quot;obvious&quot; way, and once I understood them the whole structure got simpler, not more complicated.
      </p>
      <p>
        Everything is below: the full list of twenty-five audiences with their exact GA4 configuration, the naming convention that keeps them sane once you have that many, the three API limits and how I work around each one, and the build order I actually follow on a live account. Nothing here is gated. If you want the executable version — markdown files you can drop straight into Claude or ChatGPT, plus a PDF — that&apos;s linked at the end, but the framework itself is the whole post.
      </p>

      {/* TOC nav */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Contents</p>
        <ul className="list-none pl-0 mb-0 space-y-0">
          <li><a href="#the-count" className="block py-1 text-base text-gray-700 hover:text-primary underline">The count: 25 lists, 6 pillars, 1 helper</a></li>
          <li><a href="#naming" className="block py-1 text-base text-gray-700 hover:text-primary underline">Naming convention</a></li>
          <li><a href="#timeline" className="block py-1 text-base text-gray-700 hover:text-primary underline">How audiences fill, and the delivery thresholds</a></li>
          <li><a href="#lifecycle" className="block py-1 text-base text-gray-700 hover:text-primary underline">Pillar 1 — Lifecycle (LCY)</a></li>
          <li><a href="#value" className="block py-1 text-base text-gray-700 hover:text-primary underline">Pillar 2 — Value / RFM (VAL)</a></li>
          <li><a href="#intent" className="block py-1 text-base text-gray-700 hover:text-primary underline">Pillar 3 — Intent / funnel (INT)</a></li>
          <li><a href="#brand" className="block py-1 text-base text-gray-700 hover:text-primary underline">Pillar 4 — Brand affinity (BRD)</a></li>
          <li><a href="#replenishment" className="block py-1 text-base text-gray-700 hover:text-primary underline">Pillar 5 — Replenishment (RPL) — the one nobody builds</a></li>
          <li><a href="#predictive" className="block py-1 text-base text-gray-700 hover:text-primary underline">Pillar 6 — Predictive (PRD)</a></li>
          <li><a href="#api-limits" className="block py-1 text-base text-gray-700 hover:text-primary underline">The three Admin API limits</a></li>
          <li><a href="#build-order" className="block py-1 text-base text-gray-700 hover:text-primary underline">Build order, with checks</a></li>
          <li><a href="#activation" className="block py-1 text-base text-gray-700 hover:text-primary underline">Activation: Observation, exclusions, GA4 vs CRM</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
        </ul>
      </nav>

      <hr />

      <h2 id="the-count">The count: 25 lists, 6 pillars, 1 helper</h2>
      <p>
        Say &quot;25 audiences&quot; to most people and they picture 25 things you can point ads at. That&apos;s not what this is. The count that matters: <strong>25 lists in the property = 24 targeting audiences across 6 pillars, plus 1 exclusion helper.</strong>
      </p>
      <p>
        The helper — <code>LCY_ALL_ActiveCustomers_45d</code> — is not a targeting audience. It exists purely so you can subtract it from replenishment lists inside Google Ads. Counted as a definition it is one list, but you clone it onto whichever windows your combinations need: a full build of this framework ends up with two more copies of it (25 days for the supplement cycle, 120 days for the at-risk value tier), so the property holds 27 audience objects for 25 list definitions. Worth knowing before you count rows in the GA4 interface and think something went wrong.
      </p>

      <hr />

      <h2 id="naming">Naming convention</h2>
      <p>
        Every list follows the same pattern:
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 text-center">
        <code className="text-lg md:text-xl font-heading font-semibold">{"{PILLAR}_{SCOPE}_{Segment}_{Window}"}</code>
      </div>
      <p>
        <strong>Pillar</strong> is one of six three-letter codes. <strong>Scope</strong> is either <code>ALL</code> (whole account) or a brand/category tag (<code>BR1</code>, <code>BR2</code>, <code>MOI</code>, <code>SUP</code>, <code>SPF</code>). <strong>Window</strong> is the membership duration or the target range the list is built to catch (<code>90d</code>, <code>540d</code>, <code>45-120d</code>).
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Pillar</th>
              <th className="py-3 px-3 font-heading font-semibold">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200"><td className="py-3 px-3 font-mono">LCY</td><td className="py-3 px-3">Lifecycle — customer lifecycle stage</td></tr>
            <tr className="border-b border-gray-200 bg-gray-50/50"><td className="py-3 px-3 font-mono">VAL</td><td className="py-3 px-3">Value / RFM — value tiers</td></tr>
            <tr className="border-b border-gray-200"><td className="py-3 px-3 font-mono">INT</td><td className="py-3 px-3">Intent — funnel abandoners</td></tr>
            <tr className="border-b border-gray-200 bg-gray-50/50"><td className="py-3 px-3 font-mono">BRD</td><td className="py-3 px-3">Brand affinity — by brand or product line</td></tr>
            <tr className="border-b border-gray-200"><td className="py-3 px-3 font-mono">RPL</td><td className="py-3 px-3">Replenishment — repurchase cycle</td></tr>
            <tr className="border-b border-gray-200 bg-gray-50/50"><td className="py-3 px-3 font-mono">PRD</td><td className="py-3 px-3">Predictive — Google ML</td></tr>
          </tbody>
        </table>
      </div>

      <p>
        The reason the convention exists at all: once a property has 25 lists, prefix search is the only way to know what&apos;s what three months from now. Sort by name and every pillar groups itself. Skip the convention and you&apos;ll be opening list definitions one by one to remember which <code>Browsers_60d</code> is which.
      </p>

      <hr />

      <h2 id="timeline">How audiences fill, and the delivery thresholds</h2>
      <p>
        Two mechanics decide whether any of this actually reaches anyone, and both catch people off guard.
      </p>
      <p>
        <strong>Filling:</strong> a GA4 audience starts filling from the moment you create it, plus roughly 30 days of backfill for users who already qualify at creation time. There is no retroactive fill beyond that window. The practical consequence: a list you build today is usable in 2-4 weeks, not tomorrow. The worst possible moment to build an audience is the moment you need it.
      </p>
      <p>
        <strong>Delivery thresholds</strong> are Google&apos;s hard minimums, not a suggestion:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Channel</th>
              <th className="py-3 px-3 font-heading font-semibold">Minimum active users (last 30 days)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200"><td className="py-3 px-3 font-medium">Search remarketing (RLSA) and Shopping</td><td className="py-3 px-3">1,000</td></tr>
            <tr className="border-b border-gray-200 bg-gray-50/50"><td className="py-3 px-3 font-medium">Display, YouTube, <GlossaryLink slug="demand-gen">Demand Gen</GlossaryLink></td><td className="py-3 px-3">100</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Below threshold, a list simply doesn&apos;t serve — it sits there as Observation with zero delivery. This is the single most common reason a client tells me &quot;we tried audiences, they didn&apos;t work.&quot; Most stores build five lists, none of them cross the threshold, and the conclusion drawn is that audiences don&apos;t work — when the actual finding is that the lists were too narrow, too new, or both.
      </p>

      <hr />

      <h2 id="lifecycle">Pillar 1 — Lifecycle (LCY)</h2>
      <p>
        Six lists that track where a customer sits in the relationship, from first visit to repeat buyer. This is the foundation pillar — everything else references one of these lists as an exclusion at some point.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="min-w-[900px] w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Name</th>
              <th className="py-3 px-3 font-heading font-semibold">Definition</th>
              <th className="py-3 px-3 font-heading font-semibold">GA4 configuration</th>
              <th className="py-3 px-3 font-heading font-semibold">Membership</th>
              <th className="py-3 px-3 font-heading font-semibold">What it&apos;s for</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs">LCY_ALL_FirstTimeBuyers_180d</td>
              <td className="py-3 px-3">Exactly 1 purchase ever, most recent within 180 days</td>
              <td className="py-3 px-3">Include: <code>purchase</code> event count = 1, at any point in time, AND <code>purchase</code> within a 180-day period</td>
              <td className="py-3 px-3">180 days</td>
              <td className="py-3 px-3">The second order is the KPI that decides whether the brand is growing — this is the only list aimed at it directly</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs">LCY_ALL_RepeatBuyers_540d</td>
              <td className="py-3 px-3">2+ purchases</td>
              <td className="py-3 px-3">Include: <code>purchase</code> event count &gt; 1, at any point in time</td>
              <td className="py-3 px-3">540 days</td>
              <td className="py-3 px-3">Core value segment — bid boost, Similar/lookalike seed</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs">LCY_ALL_ActiveCustomers_90d</td>
              <td className="py-3 px-3">Purchased in the last 90 days</td>
              <td className="py-3 px-3">Include: <code>purchase</code> (at least once)</td>
              <td className="py-3 px-3">90 days</td>
              <td className="py-3 px-3">Exclusion from acquisition campaigns, plus the base for cross-sell</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs">LCY_ALL_Purchasers_365d</td>
              <td className="py-3 px-3">Purchased at any point in 365 days</td>
              <td className="py-3 px-3">Include: <code>purchase</code> (at least once)</td>
              <td className="py-3 px-3">365 days</td>
              <td className="py-3 px-3">Raw material for win-back: in Ads, this list MINUS ActiveCustomers_90d = lapsed</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs">LCY_ALL_EngagedNonBuyers_30d</td>
              <td className="py-3 px-3">2+ sessions in 30 days, never purchased</td>
              <td className="py-3 px-3">Include: <code>session_start</code> event count &gt; 1 (UI: within a 30-day period; API: at any point in time, the window carried by membership) · Exclude: <code>purchase</code>, at any point in time</td>
              <td className="py-3 px-3">30 days</td>
              <td className="py-3 px-3">Prospecting seed for Demand Gen and lookalike logic</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs">LCY_ALL_NewVisitors_7d</td>
              <td className="py-3 px-3">First visit within 7 days, no purchase</td>
              <td className="py-3 px-3">Include: <code>first_visit</code> · Exclude: <code>purchase</code>, at any point in time</td>
              <td className="py-3 px-3">7 days</td>
              <td className="py-3 px-3">Soft remarketing while memory is fresh — the short membership is deliberate</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="value">Pillar 2 — Value / RFM (VAL)</h2>
      <p>
        Four lists that layer customers by value rather than recency. This is where the first Admin API limit shows up directly — <GlossaryLink slug="ltv">LTV</GlossaryLink> percentile is a UI-only concept, so two of these four lists have both a UI route and an API workaround. I cover why in the API limits section; here&apos;s the configuration either way.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="min-w-[900px] w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Name</th>
              <th className="py-3 px-3 font-heading font-semibold">Definition</th>
              <th className="py-3 px-3 font-heading font-semibold">GA4 configuration</th>
              <th className="py-3 px-3 font-heading font-semibold">Membership</th>
              <th className="py-3 px-3 font-heading font-semibold">What it&apos;s for</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs">VAL_ALL_Champions_Top10_540d</td>
              <td className="py-3 px-3">Top 10% by value</td>
              <td className="py-3 px-3"><strong>UI route:</strong> suggested audience template with LTV percentile (top 10%) · <strong>API route:</strong> frequency proxy — <code>purchase</code> event count &gt; 2, at any point in time</td>
              <td className="py-3 px-3">540 days</td>
              <td className="py-3 px-3">Protection, Similar seed, and the rule that these people never see a discount message</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs">VAL_ALL_HighValue_Top25_540d</td>
              <td className="py-3 px-3">Top 25% by value</td>
              <td className="py-3 px-3"><strong>UI:</strong> LTV percentile top 25% · <strong>API:</strong> <code>purchase</code> event count &gt; 1, at any point in time</td>
              <td className="py-3 px-3">540 days</td>
              <td className="py-3 px-3"><GlossaryLink slug="troas">tROAS</GlossaryLink> boost, remarketing priority</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs">VAL_ALL_AtRisk_HighValue_120d</td>
              <td className="py-3 px-3">High value, hasn&apos;t purchased in 120 days</td>
              <td className="py-3 px-3">Same definition as HighValue_Top25 above, membership 120 days — &quot;hasn&apos;t purchased&quot; is resolved in Ads (MINUS ActiveCustomers_120d)</td>
              <td className="py-3 px-3">120 days</td>
              <td className="py-3 px-3">&quot;Can&apos;t lose them&quot; — the most expensive loss in the account</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs">VAL_ALL_OneTimeLowValue_365d</td>
              <td className="py-3 px-3">1 purchase, bottom half by value</td>
              <td className="py-3 px-3">Include: <code>purchase</code> event count = 1, at any point in time (UI: intersect with LTV bottom 50%)</td>
              <td className="py-3 px-3">365 days</td>
              <td className="py-3 px-3">Excluded from expensive remarketing — not every buyer deserves the same bid</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="intent">Pillar 3 — Intent / funnel (INT)</h2>
      <p>
        Four lists that catch drop-off at each funnel stage. These are also the fastest way to test whether your event tracking is actually complete — see the build-order check below.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="min-w-[900px] w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Name</th>
              <th className="py-3 px-3 font-heading font-semibold">Definition</th>
              <th className="py-3 px-3 font-heading font-semibold">GA4 configuration</th>
              <th className="py-3 px-3 font-heading font-semibold">Membership</th>
              <th className="py-3 px-3 font-heading font-semibold">What it&apos;s for</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs">INT_ALL_CartAbandoners_14d</td>
              <td className="py-3 px-3"><code>add_to_cart</code> in 14 days, no purchase</td>
              <td className="py-3 px-3">Include: <code>add_to_cart</code> within a 14-day period · Exclude (temporarily): <code>purchase</code> within a 14-day period</td>
              <td className="py-3 px-3">14 days</td>
              <td className="py-3 px-3">The hottest layer in the account, highest bid</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs">INT_ALL_CheckoutAbandoners_7d</td>
              <td className="py-3 px-3"><code>begin_checkout</code> in 7 days, no purchase</td>
              <td className="py-3 px-3">Include: <code>begin_checkout</code> within a 7-day period · Exclude (temporarily): <code>purchase</code> within a 7-day period</td>
              <td className="py-3 px-3">7 days</td>
              <td className="py-3 px-3">Urgent layer — runs parallel to the email flow, not instead of it</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs">INT_ALL_ProductViewers_NoATC_30d</td>
              <td className="py-3 px-3"><code>view_item</code> in 30 days, no add-to-cart</td>
              <td className="py-3 px-3">Include: <code>view_item</code> within a 30-day period · Exclude (temporarily): <code>add_to_cart</code> within a 30-day period</td>
              <td className="py-3 px-3">30 days</td>
              <td className="py-3 px-3">Mid layer — cheaper bid, higher volume</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs">INT_ALL_SearchUsers_30d</td>
              <td className="py-3 px-3">Used on-site search in 30 days</td>
              <td className="py-3 px-3">Include: <code>view_search_results</code> (or <code>search</code>) within a 30-day period</td>
              <td className="py-3 px-3">30 days</td>
              <td className="py-3 px-3">The most overlooked signal — someone typing into your search bar already knows what they want</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Note the &quot;temporarily&quot; on three of the four exclude conditions. That word is doing real work — I explain exactly what it means and where it stops working in the API limits section below.
      </p>

      <hr />

      <h2 id="brand">Pillar 4 — Brand affinity (BRD)</h2>
      <p>
        Five lists, and only relevant if you run a multi-brand store. The <code>BR1</code> / <code>BR2</code> scope tags are your two brands by revenue. Single-brand store? Skip this pillar and replace it with product categories instead — <code>SER</code> for serum, <code>CLE</code> for cleanser, whatever your catalog splits into. The logic doesn&apos;t change, only the scope tag does.
      </p>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Check this before you build any of it</p>
        <p className="text-yellow-800 text-base mb-0">
          Before building any BRD list, confirm that <code>item_brand</code> is actually populated in GA4. On plenty of stores it&apos;s empty or inconsistent. If it is, fall back to a <code>page_location</code> pattern (URL contains the brand slug) or <code>item_category</code>.
        </p>
      </div>
      <div className="overflow-x-auto my-6">
        <table className="min-w-[900px] w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Name</th>
              <th className="py-3 px-3 font-heading font-semibold">Definition</th>
              <th className="py-3 px-3 font-heading font-semibold">GA4 configuration</th>
              <th className="py-3 px-3 font-heading font-semibold">Membership</th>
              <th className="py-3 px-3 font-heading font-semibold">What it&apos;s for</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs">BRD_BR1_Purchasers_365d</td>
              <td className="py-3 px-3">Purchased the primary brand</td>
              <td className="py-3 px-3">Include: <code>purchase</code> where item-scoped dimension <code>item_brand</code> = BR1</td>
              <td className="py-3 px-3">365 days</td>
              <td className="py-3 px-3">Core of the biggest brand</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs">BRD_BR1_StepUp_Purchasers_365d</td>
              <td className="py-3 px-3">Purchased a more advanced line of that brand</td>
              <td className="py-3 px-3">Include: <code>purchase</code> where <code>item_name</code> contains the line token</td>
              <td className="py-3 px-3">365 days</td>
              <td className="py-3 px-3">Buyer entering a subscription pattern — the best candidate for value growth</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs">BRD_BR1_Browsers_NoBuy_60d</td>
              <td className="py-3 px-3">Viewed BR1, didn&apos;t purchase</td>
              <td className="py-3 px-3">Include: <code>view_item</code> with <code>item_brand</code> = BR1 within 60 days · Exclude: <code>purchase</code> with <code>item_brand</code> = BR1, at any point in time</td>
              <td className="py-3 px-3">60 days</td>
              <td className="py-3 px-3">Brand-specific remarketing — a message that knows what it&apos;s talking about</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs">BRD_BR2_Purchasers_365d</td>
              <td className="py-3 px-3">Purchased the second brand by revenue</td>
              <td className="py-3 px-3">Same as BR1_Purchasers above, with BR2</td>
              <td className="py-3 px-3">365 days</td>
              <td className="py-3 px-3">Second core</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs">BRD_BR2_Browsers_NoBuy_60d</td>
              <td className="py-3 px-3">Viewed BR2, didn&apos;t purchase</td>
              <td className="py-3 px-3">Same as BR1_Browsers above, with BR2</td>
              <td className="py-3 px-3">60 days</td>
              <td className="py-3 px-3">Remarketing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="replenishment">Pillar 5 — Replenishment (RPL) — the one nobody builds</h2>
      <p>
        Three lists, and this is the pillar that gets the most weight in this post, because it&apos;s the one I almost never see built anywhere else. Most accounts have lifecycle and intent audiences. Almost none have replenishment, and for a repeat-purchase consumable business it carries the most weight of the six — it&apos;s the difference between remarketing that reacts to browsing and remarketing that predicts when someone is about to run out.
      </p>
      <p>
        The name carries the target window (<code>45-120d</code>), but GA4 can only build the upper bound — &quot;purchased within the last 120 days&quot; — as a membership window. The lower bound, &quot;and nothing in the last 45 days&quot;, has to be built as an exclusion in Google Ads, not inside the GA4 list itself. That&apos;s API limit #3 below, and it&apos;s the reason the helper list exists on more than one window.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="min-w-[1000px] w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Name</th>
              <th className="py-3 px-3 font-heading font-semibold">Definition (effective)</th>
              <th className="py-3 px-3 font-heading font-semibold">GA4 configuration</th>
              <th className="py-3 px-3 font-heading font-semibold">Membership</th>
              <th className="py-3 px-3 font-heading font-semibold">Ads exclusion</th>
              <th className="py-3 px-3 font-heading font-semibold">What it&apos;s for</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs">RPL_MOI_Due_45-120d</td>
              <td className="py-3 px-3">Purchased moisturiser 45-120 days ago, nothing since</td>
              <td className="py-3 px-3">Include: <code>purchase</code> where <code>item_category</code> (or <code>item_name</code>) contains the moisturiser token</td>
              <td className="py-3 px-3">120 days</td>
              <td className="py-3 px-3">MINUS <code>LCY_ALL_ActiveCustomers_45d</code></td>
              <td className="py-3 px-3">Moisturiser lasts 60-90 days; the ad arrives as the jar is running dry</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs">RPL_SUP_Due_25-75d</td>
              <td className="py-3 px-3">Purchased a supplement 25-75 days ago</td>
              <td className="py-3 px-3">Include: <code>purchase</code> where category = supplements</td>
              <td className="py-3 px-3">75 days</td>
              <td className="py-3 px-3">MINUS <code>LCY_ALL_ActiveCustomers_25d</code> (clone of the helper list)</td>
              <td className="py-3 px-3">A 60-capsule pack runs about two months</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs">RPL_SPF_Due_45-120d</td>
              <td className="py-3 px-3">Purchased SPF 45-120 days ago</td>
              <td className="py-3 px-3">Include: <code>purchase</code> where category = SPF</td>
              <td className="py-3 px-3">120 days</td>
              <td className="py-3 px-3">MINUS <code>LCY_ALL_ActiveCustomers_45d</code></td>
              <td className="py-3 px-3">Consumption cycle plus a seasonal factor</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">How to set the window</h3>
      <p>
        The logic is the same for any consumable: work out how long a pack lasts, then start advertising at roughly 70-80% of that cycle — while there&apos;s still time for the ad to land before the shelf is empty, not after. A moisturiser that lasts 60-90 days starts at 45. A 60-capsule supplement that runs about two months starts at 25-30.
      </p>
      <p>
        If you don&apos;t know your cycle length, don&apos;t guess it — pull it from your own purchase data. Take the average gap between a customer&apos;s first and second purchase in the same category. That gap is your cycle, and it&apos;s specific to your product and your customers in a way a generic &quot;skincare replenishes every 60 days&quot; assumption never will be.
      </p>

      <hr />

      <h2 id="predictive">Pillar 6 — Predictive (PRD)</h2>
      <p>
        Two lists, and the only pillar that&apos;s conditional on your property qualifying at all.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="min-w-[900px] w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Name</th>
              <th className="py-3 px-3 font-heading font-semibold">Definition</th>
              <th className="py-3 px-3 font-heading font-semibold">Configuration</th>
              <th className="py-3 px-3 font-heading font-semibold">Membership</th>
              <th className="py-3 px-3 font-heading font-semibold">What it&apos;s for</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs">PRD_ALL_LikelyPurchasers_7d</td>
              <td className="py-3 px-3">Google ML prediction of purchase within 7 days</td>
              <td className="py-3 px-3">GA4 UI → Audiences → suggested → Predictive → &quot;Likely 7-day purchasers.&quot; Does not exist through the API.</td>
              <td className="py-3 px-3">30 days</td>
              <td className="py-3 px-3">Fuel for tROAS</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs">PRD_ALL_ChurnRisk_7d</td>
              <td className="py-3 px-3">ML prediction of churn</td>
              <td className="py-3 px-3">Same route, &quot;Likely 7-day churning purchasers&quot;</td>
              <td className="py-3 px-3">30 days</td>
              <td className="py-3 px-3">Email list, not an ad list — churn is treated with a message, not a bid</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The condition for predictive metrics: the property needs enough positive and negative examples — Google requires on the order of 1,000 users who did and 1,000 who didn&apos;t complete <code>purchase</code> within a 28-day window — and the model has to stay &quot;eligible.&quot; Small stores simply don&apos;t qualify here. That&apos;s not a setup mistake, it&apos;s a volume floor, and there&apos;s no configuration workaround for it.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-2">The helper list (not a pillar, not a targeting audience)</h3>
      <div className="overflow-x-auto my-6">
        <table className="min-w-[900px] w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">List</th>
              <th className="py-3 px-3 font-heading font-semibold">Definition</th>
              <th className="py-3 px-3 font-heading font-semibold">GA4 configuration</th>
              <th className="py-3 px-3 font-heading font-semibold">Membership</th>
              <th className="py-3 px-3 font-heading font-semibold">What it is for</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs">LCY_ALL_ActiveCustomers_45d</td>
              <td className="py-3 px-3">purchased at least once in the last 45 days</td>
              <td className="py-3 px-3">Include: <code>purchase</code>, at least once</td>
              <td className="py-3 px-3">45 days</td>
              <td className="py-3 px-3">Exclusion only, never a target. Clone it onto 25 days for the supplement cycle and 120 days for the at-risk value tier.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="api-limits">The three Admin API limits</h2>
      <p>
        This is the part that came from actually building the thing through the API, not from reading documentation. Every one of these limits will bite you if you try to build the &quot;obvious&quot; version of a list, and every one of them has a workaround that changes how you should think about the list, not just how you configure it.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">1. <code>lifetimeValue</code> doesn&apos;t pass through in audience filters via the API</p>
          <p className="text-base text-gray-600 mb-2">
            <GlossaryLink slug="ltv">LTV</GlossaryLink> percentile only exists as a UI suggested-audience template. Try to filter on it through the API and you get an error — there is no equivalent field to fall back on.
          </p>
          <p className="text-base text-gray-600 mb-0">
            <strong>Workaround:</strong> a frequency proxy. Champions become &quot;3+ purchases&quot; (<code>eventCount &gt; 2</code>), High Value becomes &quot;2+ purchases.&quot; It isn&apos;t the same as actual spend, but it correlates well enough to make the bidding decision better than having no value signal at all. If you need real value-based segmentation, build it in your CRM and import it as Customer Match instead of forcing GA4 to do a job it can&apos;t do through the API.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">2. Count filters have no rolling windows</p>
          <p className="text-base text-gray-600 mb-2">
            <code>eventCount</code> conditions only work with <code>atAnyPointInTime: true</code> — meaning &quot;ever,&quot; never &quot;in the last N days.&quot; You cannot ask GA4 for &quot;2+ purchases in the trailing 90 days&quot; as a count condition.
          </p>
          <p className="text-base text-gray-600 mb-0">
            <strong>Workaround:</strong> move the window onto membership duration instead of the count condition. &quot;2+ purchases in 540 days&quot; becomes &quot;2+ purchases ever&quot; plus a 540-day membership window. The result is close but not identical — a customer who made two purchases three years ago will re-enter the list the moment they revisit the site, since the count condition itself has no time boundary.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">3. &quot;Hasn&apos;t purchased in the last N days&quot; can&apos;t be built inside GA4</p>
          <p className="text-base text-gray-600 mb-2">
            This is the limit that undermines half of every win-back and replenishment idea you&apos;ll sketch out on a whiteboard. A GA4 exclude condition is tied to the membership window of the list itself, so &quot;temporarily exclude purchasers&quot; only works when the include and exclude windows match — which is exactly why it works for the INT lists above and nowhere else.
          </p>
          <p className="text-base text-gray-600 mb-0">
            <strong>Workaround:</strong> build it in Google Ads, not GA4 — as a combination of a target list <strong>MINUS</strong> an active-customers list. That single move is why the helper <code>ActiveCustomers</code> definition gets cloned onto several windows (45d, 25d, 120d — alongside the 90d list that already exists in the lifecycle pillar): each replenishment or win-back combination needs its own exclusion window.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 md:p-5 my-6">
        <p className="font-semibold text-blue-900 mb-1">Bonus, if you&apos;re going through the API yourself</p>
        <p className="text-blue-800 text-base mb-0">
          The filter schema is always <code>andGroup → orGroup → leaf</code>. Only <code>GREATER_THAN</code> exists as a comparison operator — there is no <code>GREATER_THAN_OR_EQUAL</code>, so &quot;3+&quot; has to be written as <code>&gt; 2</code>. And list descriptions are capped at roughly 150 characters, which is tighter than it sounds once you&apos;re documenting a 25-list system.
        </p>
      </div>

      <hr />

      <h2 id="build-order">Build order, with checks</h2>
      <p>
        I don&apos;t build all 25 lists in one sitting, and you shouldn&apos;t either. Each wave has a check attached, and the check exists because building on top of broken tracking just produces 25 broken lists instead of one obvious problem.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">0</span>
            <div>
              <strong>Prerequisite — ecommerce events actually fire</strong>
              <p className="text-base text-gray-600 mt-1 mb-0"><code>view_item</code>, <code>add_to_cart</code>, <code>begin_checkout</code>, <code>purchase</code> all need to be reaching GA4, the property needs to be linked to the Google Ads account, and Google signals should be on if you need Display reach. Check: GA4 → Realtime, run a test purchase, confirm <code>purchase</code> shows up with a value.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Wave 1 — helper and lifecycle lists</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Build the helper and the core lifecycle lists first (ActiveCustomers_90d, Purchasers_365d, the exclusion helper, then FirstTimeBuyers, RepeatBuyers, EngagedNonBuyers, NewVisitors). Check: each list exists, the membership window is correct, the description is filled in.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Wave 2 — intent lists</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Build the four INT lists. Check: after 48 hours, CartAbandoners has members. If it doesn&apos;t, <code>add_to_cart</code> isn&apos;t reaching GA4 — and that&apos;s where you stop.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Wave 3 — value lists</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Build the four VAL lists — UI route if you have the LTV template available, API route with the frequency proxy if you don&apos;t.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Wave 4 — brand lists</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Build the five BRD lists, but only after checking <code>item_brand</code>. Check: run an Explore report by <code>item_brand</code> over 30 days — do values exist, and are they consistent across products?</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Wave 5 — replenishment</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Build the three RPL lists. Check: do the category tokens in your Merchant Center feed match the category tokens in GA4? A mismatch here silently produces an empty or wrong list.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div>
              <strong>Wave 6 — predictive</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Build these two manually in the UI, and only if the model shows as eligible.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div>
              <strong>After two weeks</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Check list sizes, switch qualifying lists on as Observation, and note which ones have crossed the delivery threshold.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border border-red-100 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-900 mb-1">Stop rule</p>
        <p className="text-base text-red-800/90 mb-0">
          If wave 2 doesn&apos;t work — if CartAbandoners stays empty after 48 hours — further list-building is wasted time. Audiences don&apos;t fix tracking. Fix the event first, then come back to wave 3.
        </p>
      </div>

      <hr />

      <h2 id="activation">Activation: Observation, exclusions, GA4 vs CRM</h2>
      <p>
        Building the lists is half the job. How you turn them on determines whether they help or quietly waste budget.
      </p>
      <ol>
        <li className="mb-2"><strong>Everything starts as Observation.</strong> Every list goes onto Shopping and Search campaigns as Observation first — zero impact on delivery, but after two weeks you have your own numbers instead of borrowing someone else&apos;s benchmark.</li>
        <li className="mb-2"><strong>Exclusions turn on as soon as a list crosses threshold.</strong> <code>ActiveCustomers_90d</code> comes out of acquisition flows, <code>OneTimeLowValue</code> comes out of expensive remarketing.</li>
        <li className="mb-2"><strong>Bid adjustments come last</strong> — only after a list has filled and only on lists that have real volume behind them.</li>
        <li className="mb-2"><strong>GA4 is breadth, CRM is precision.</strong> The same segments in your email tool give you real RFM figures — actual order counts, actual spend — so that&apos;s where they belong for Customer Match. A GA4 list is an approximation built from event counts and membership windows; a CRM list is a fact.</li>
      </ol>

      <p>Put together, the target-minus-exclusion combinations in Google Ads look like this:</p>

      <div className="overflow-x-auto my-6">
        <table className="min-w-[700px] w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Goal</th>
              <th className="py-3 px-3 font-heading font-semibold">Target list</th>
              <th className="py-3 px-3 font-heading font-semibold">MINUS (exclusion)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200"><td className="py-3 px-3 font-medium">Win back lapsed customers</td><td className="py-3 px-3 font-mono text-xs">LCY_ALL_Purchasers_365d</td><td className="py-3 px-3 font-mono text-xs">LCY_ALL_ActiveCustomers_90d</td></tr>
            <tr className="border-b border-gray-200 bg-gray-50/50"><td className="py-3 px-3 font-medium">At-risk high value</td><td className="py-3 px-3 font-mono text-xs">VAL_ALL_AtRisk_HighValue_120d</td><td className="py-3 px-3 font-mono text-xs">LCY_ALL_ActiveCustomers_120d</td></tr>
            <tr className="border-b border-gray-200"><td className="py-3 px-3 font-medium">Moisturiser replenishment</td><td className="py-3 px-3 font-mono text-xs">RPL_MOI_Due_45-120d</td><td className="py-3 px-3 font-mono text-xs">LCY_ALL_ActiveCustomers_45d</td></tr>
            <tr className="border-b border-gray-200 bg-gray-50/50"><td className="py-3 px-3 font-medium">Supplement replenishment</td><td className="py-3 px-3 font-mono text-xs">RPL_SUP_Due_25-75d</td><td className="py-3 px-3 font-mono text-xs">LCY_ALL_ActiveCustomers_25d</td></tr>
            <tr className="border-b border-gray-200"><td className="py-3 px-3 font-medium">SPF replenishment</td><td className="py-3 px-3 font-mono text-xs">RPL_SPF_Due_45-120d</td><td className="py-3 px-3 font-mono text-xs">LCY_ALL_ActiveCustomers_45d</td></tr>
            <tr className="border-b border-gray-200 bg-gray-50/50"><td className="py-3 px-3 font-medium">Pure acquisition</td><td className="py-3 px-3">(no target list)</td><td className="py-3 px-3 font-mono text-xs">LCY_ALL_ActiveCustomers_90d</td></tr>
            <tr className="border-b border-gray-200"><td className="py-3 px-3 font-medium">Demand Gen prospecting</td><td className="py-3 px-3 font-mono text-xs">LCY_ALL_EngagedNonBuyers_30d</td><td className="py-3 px-3 font-mono text-xs">LCY_ALL_Purchasers_365d</td></tr>
          </tbody>
        </table>
      </div>

      <p>
        One caveat that applies everywhere in this table: audiences are a signal, not a fence. In <GlossaryLink slug="pmax">Performance Max</GlossaryLink> and <GlossaryLink slug="demand-gen">Demand Gen</GlossaryLink> especially, treat these lists as an input the algorithm weighs, not a guarantee of who actually sees the ad.
      </p>

      <hr />

      <h2 id="faq">Frequently asked questions</h2>


      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why are my audiences stuck at zero?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Either the list hasn&apos;t crossed the delivery threshold yet, the event it depends on isn&apos;t reaching GA4, or the membership window is shorter than actual customer behaviour. Check in that order — threshold, then event, then window.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How long should I wait before using a new audience?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Two to four weeks. Before that, the data sitting in Observation doesn&apos;t have enough members to mean anything.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Do I need the Admin API, or does the UI work fine?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            The UI works for everything except scale. At 25 lists, the API saves hours and gives you repeatability, but the UI can do two things the API can&apos;t: LTV percentile targeting and predictive audience templates.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What&apos;s the maximum membership window?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            540 days. There is no longer option in GA4, no matter how long your actual purchase cycle runs.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What if I only sell one brand?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Replace the brand affinity pillar with product categories instead. The logic stays identical — only the scope tag changes.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does this work for lead gen, not just ecommerce?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            The lifecycle, intent, and value layers carry over. Replenishment doesn&apos;t, because there&apos;s no consumption cycle to anchor it to — and that pillar is arguably half of this framework&apos;s value for a repeat-purchase business.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can these audiences go into Performance Max?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            As a signal, yes. As a targeting guarantee, no. PMax uses an audience as an input the algorithm weighs, not as a fence around who sees the ad.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What if my item_brand field is empty?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Fall back to a page_location pattern or item_category. Check this before you build the brand affinity lists, not after.
          </div>
        </details>
      </div>

      <hr />

      {/* CTA block */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Want the executable version?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          The <Link href="/ga4-audiences" className="underline text-white hover:text-yellow-400">free GA4 Audience Framework download</Link> packages all 25 list definitions as markdown files you can drop straight into Claude or ChatGPT, plus a PDF reference. Email only, nothing else to fill in.
        </p>
        <Link href="/ga4-audiences" className="btn-secondary inline-block">
          Get the framework
        </Link>
      </div>
    </>
  );
}
