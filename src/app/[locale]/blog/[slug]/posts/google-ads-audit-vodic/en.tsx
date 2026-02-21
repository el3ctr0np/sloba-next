import { Link } from "@/i18n/navigation";

export default function GoogleAdsAuditGuideEN() {
  return (
    <>
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">A Google Ads audit is a systematic account review that uncovers wasted spend, missed opportunities, and technical errors. A professional audit covers 80+ checkpoints in 10 categories and on average identifies 15-25% of budget being spent inefficiently.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">80+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">checkpoints</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">10</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">audit categories</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">15-25%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">wasted spend average</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Q1</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">deep + monthly mini</p>
          </div>
        </div>
      </div>

      <h2>Why Google Ads audit is essential</h2>
      <p>
        When I take over a new account for management, the first thing is always a detailed Google Ads audit. In practice I see that over 90% of accounts have the same fundamental problems: conversion tracking doesn&apos;t work properly, budget is bleeding on irrelevant search terms, campaigns are poorly organized, or Smart Bidding is trying to optimize with insufficient data.
      </p>
      <p>
        A Google Ads audit isn&apos;t just a list of things that &quot;don&apos;t work&quot; — it&apos;s systematic diagnostics that precisely identifies <strong>where you&apos;re losing money and where you&apos;re missing growth opportunities</strong>. The average account that hasn&apos;t been optimized for 6+ months wastes 15-25% of budget completely inefficiently. That can be eliminated in the first week after audit.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">When to run Google Ads audit</p>
        <p className="text-blue-800 text-sm mb-0">
          <strong>Quarterly deep audit</strong> (2-4 hours, all 10 categories) + <strong>monthly quick check</strong> (30 min, 7 priority points). Additionally: immediately if performance suddenly drops, you&apos;re taking over account from previous agency, changing business model, or launching new campaign.
        </p>
      </div>

      <p>
        My experience is that companies either audit too rarely (once a year or never), or waste time looking at surface metrics that don&apos;t reveal real problems. This guide covers specifically what to check, how to interpret data, and which actions to take immediately.
      </p>

      <hr />

      <h2>What a good Google Ads audit covers</h2>
      <p>
        A professional Google Ads audit isn&apos;t improvisation — it&apos;s a structured checklist of 80+ control points divided into 10 key categories. Each category has priority items (critical for performance) and optimization items (additional improvements for advanced accounts).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Foundation</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">1. Account structure</h3>
          <p className="text-sm text-gray-600 mb-0">Logical campaign organization, naming conventions, hierarchy, labels</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Critical</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">2. Conversion Tracking</h3>
          <p className="text-sm text-gray-600 mb-0">Whether conversion tracking works accurately and data is valid</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Setup</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">3. Campaign settings</h3>
          <p className="text-sm text-gray-600 mb-0">Location targeting, networks, ad schedule, device bid adjustments</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Search</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">4. Keywords and search terms</h3>
          <p className="text-sm text-gray-600 mb-0">Search Terms Report, negatives, Quality Score, match types, duplicates</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Creative</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">5. Ads and extensions</h3>
          <p className="text-sm text-gray-600 mb-0">RSA quality, Ad Strength, sitelinks, callouts, structured snippets</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Targeting</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">6. Audiences and remarketing</h3>
          <p className="text-sm text-gray-600 mb-0">Remarketing lists, audience layering, converter exclusions</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Automation</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">7. Bidding strategy</h3>
          <p className="text-sm text-gray-600 mb-0">Smart Bidding setup, conversion volume, target realism, learning periods</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Spend</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">8. Budget and allocation</h3>
          <p className="text-sm text-gray-600 mb-0">Impression Share Lost (Budget), campaign budget distribution</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Analysis</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">9. Reporting and analytics</h3>
          <p className="text-sm text-gray-600 mb-0">GA4 integration, attribution models, segment analysis, data discrepancies</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Advanced</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">10. Scripts and automation</h3>
          <p className="text-sm text-gray-600 mb-0">Google Ads Scripts, automated rules, alerts, bulk operations</p>
        </div>
      </div>

      <p>
        Each category gets scoring from 1 to 5 and prioritized action plan. At the end of Google Ads audit you get clear picture where you are, what to fix urgently, and what impact to expect from each optimization.
      </p>

      <hr />

      <h2>Category 1: Account structure</h2>
      <p>
        Poor structure is like poor building architecture — you can paint the facade, but fundamental problems remain. I recommend structure be logical, scalable, and transparent — anyone should understand the organization in 5 minutes of review.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Campaigns organized logically</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Campaigns divided by product/service, geography, or funnel stage. Never everything in one mega campaign.</p>
        <ul className="text-sm">
          <li><strong>Brand vs Non-brand SEPARATE</strong> — Completely different economics: brand has lower CPC, higher CVR, different strategy</li>
          <li><strong>Search and Display SEPARATE</strong> — Never together, except Performance Max (different metrics, different targeting)</li>
          <li><strong>Naming convention consistent</strong> — E.g., [Type]_[Product]_[Geo]_[Stage] for quick filtering and reporting</li>
          <li><strong>Geographic campaigns separate</strong> — If operating in multiple countries/regions, separate campaigns by geo</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ad Groups thematically focused</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">One Ad Group = one theme/intent. In practice that means 5-20 keywords per Ad Group, not 50+.</p>
        <ul className="text-sm">
          <li><strong>No &quot;catch-all&quot; Ad Groups</strong> — All words for different themes in same group = worse Ad Strength and Quality Score</li>
          <li><strong>Keywords have similar intent</strong> — &quot;buy shoes&quot; and &quot;shoe price&quot; are similar intent; &quot;running shoes&quot; and &quot;dress shoes&quot; aren&apos;t</li>
          <li><strong>Dedicated Ad Groups for high-value terms</strong> — Brand terms, top sellers, high-margin products deserve separate groups</li>
        </ul>
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">One campaign with 50+ Ad Groups, or Search + Display together in same campaign</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Restructure account: separate Search and Display, divide campaigns into smaller logical units (by product/geo/stage), reduce Ad Groups to 5-15 per campaign.</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Pro tip</p>
        <p className="text-yellow-800 text-sm mb-0">If you have more than 10 campaigns, create labels (e.g., &quot;Priority&quot;, &quot;Testing&quot;, &quot;Paused-Low_ROI&quot;) for faster filtering in interface. This saves time during Google Ads audit analysis.</p>
      </div>

      <hr />

      <h2>Category 2: Conversion tracking</h2>
      <p>
        Conversion tracking is the most critical part of any Google Ads audit. If tracking doesn&apos;t work, or records wrong data, everything else is useless — you&apos;re optimizing based on bad information and making wrong decisions.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Conversion tracking active and functional</strong> <span className="text-gray-500">— Check that tag fires (Google Tag Assistant, GTM Preview mode, or browser dev tools)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Primary conversion action marked</strong> <span className="text-gray-500">— Google must know which is main conversion for optimization (not all conversions equally important)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Test conversion successful</strong> <span className="text-gray-500">— Test yourself: buy/submit lead and check if conversion records in account (24h for appearance)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>No duplicated conversions</strong> <span className="text-gray-500">— GA4 + Google Ads tag on same thank-you page can duplicate conversions</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Conversion value accurate (eCommerce)</strong> <span className="text-gray-500">— ROAS optimization requires precise revenue data, including transaction_id for deduplication</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Enhanced conversions enabled</strong> <span className="text-gray-500">— Improves attribution after iOS 14.5+ privacy changes, mandatory for modern optimization</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div><strong>Attribution window logical</strong> <span className="text-gray-500">— Default 30 days is ok for most, but B2B with long sales cycle needs 60-90 days</span></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Red flag: Google Ads conversions don&apos;t match GA4/CRM (&gt;20% difference). This signals tracking isn&apos;t set up properly or there&apos;s an attribution model problem.</p>
      </div>

      <p>
        Detailed guide on how to set up tracking and troubleshoot problems: <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}>Conversion Tracking for Google Ads</Link>.
      </p>

      <hr />

      <h2>Category 3: Campaign settings</h2>
      <p>
        Default settings in Google Ads are bad — designed for Google to earn more, not for you to get better results. In practice I see that over 70% of new accounts have default settings that waste budget in wrong places.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Location targeting</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Check that &quot;People in your targeted locations&quot; is selected, NOT &quot;People interested in your locations&quot;. Default option shows ads to people Google <em>thinks</em> are interested in your location, even if they&apos;re on another continent.</p>
        <ul className="text-sm">
          <li><strong>Location bid adjustments active</strong> — Increase bid for best performing geo, decrease for worst</li>
          <li><strong>Exclude non-converting locations</strong> — If location has 0% CVR after 50+ clicks, exclude</li>
          <li><strong>Radius targeting precise</strong> — Local businesses: 10-20km radius, not 50km+ (wasted spend)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Networks</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Display Network must be DISABLED in Search campaigns. Search Partners evaluate after 30 days — if they have worse CPA than Search, disable.</p>
        <ul className="text-sm">
          <li><strong>Search campaigns</strong> = only Google Search (uncheck Display + careful with Search Partners)</li>
          <li><strong>Display campaigns</strong> = only Display Network (never together with Search, different economics)</li>
          <li><strong>Search Partners check</strong> — Segment report after month: if CPA 20%+ worse, disable</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ad schedule (days/hours)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Analyze performance by hours and days (Day &amp; Hour report). If conversions drop after 8pm or weekends, decrease bid or pause those slots.</p>
        <ul className="text-sm">
          <li><strong>Bid adjustments for time</strong> — Increase +20-50% for best time slots, decrease -30-50% for worst</li>
          <li><strong>B2B campaigns</strong> — Usually shouldn&apos;t run weekends (office hours only: 9am-5pm, Mon-Fri)</li>
          <li><strong>eCommerce seasonality</strong> — Increase bid for evening hours and weekends (shopping time)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Devices (Desktop/Mobile/Tablet)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Analyze performance by devices. If mobile has 2x worse conversion rate, decrease bid by -30% to -50%.</p>
        <ul className="text-sm">
          <li><strong>Device bid adjustments</strong> — Increase for best performing device, decrease for worst</li>
          <li><strong>Mobile-friendly landing page</strong> — If mobile LP isn&apos;t optimized, decrease mobile bid until you fix UX</li>
        </ul>
      </div>

      <hr />

      <h2>Category 4: Keywords and search terms</h2>
      <p>
        Keywords aren&apos;t what you enter in account — they&apos;re <strong>search terms</strong> people actually type. Every Google Ads audit must analyze Search Terms Report in detail and identify what actually triggers your ads and where budget goes.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Search Terms Report reviewed (30-90 days)</strong> <span className="text-gray-500">— Top 50-100 search terms by cost: are they relevant and converting?</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Negative keywords list exists and maintained</strong> <span className="text-gray-500">— Negatives list must exist at campaign and account level, regularly updated (monthly minimum)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>No irrelevant search terms with significant spend</strong> <span className="text-gray-500">— If search term spent $80+ and isn&apos;t relevant, that&apos;s direct wasted spend</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Quality Score majority of keywords 6+</strong> <span className="text-gray-500">— QS below 5 means you&apos;re paying premium for clicks (scan through top 20 keywords by impressions)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Keywords without conversions (&gt;100 clicks) evaluated</strong> <span className="text-gray-500">— Pause or drastically decrease bid for keywords wasting budget without results</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Duplicate keywords removed</strong> <span className="text-gray-500">— Same keyword in multiple Ad Groups/campaigns creates internal competition and worse performance</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div><strong>Match type strategy clear</strong> <span className="text-gray-500">— Broad for discovery (+ aggressive negatives), Phrase for control, Exact for top performers</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
            <div><strong>High-intent keywords get higher bid</strong> <span className="text-gray-500">— &quot;buy&quot;, &quot;price&quot;, &quot;now&quot; should have higher bid than informational keywords</span></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Red flag: Search Terms Report never reviewed, no negative keywords list, Quality Score below 5 for majority of keywords, irrelevant search terms waste 20%+ of budget.</p>
      </div>

      <p>
        Detailed guide on keywords research, match types, and Quality Score optimization: <Link href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }}>Keywords for Google Ads</Link>. For negative keywords strategy: <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }}>Negative Keywords</Link>.
      </p>

      <hr />

      <h2>Category 5: Ads and extensions</h2>
      <p>
        Ads are what potential customers actually see, but in practice I see that over 50% of accounts have &quot;Poor&quot; Ad Strength and minimal number of extensions. That&apos;s a missed opportunity — better ads = higher CTR = lower CPC + more conversions.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">RSA quality</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Each Ad Group must have minimum 1 Responsive Search Ad with 10-15 headlines and 4 descriptions.</p>
        <ul className="text-sm">
          <li><strong>Ad Strength is &quot;Good&quot; or &quot;Excellent&quot;</strong> — Never &quot;Poor&quot; (Google literally tells you ad is bad)</li>
          <li><strong>Headlines contain keywords</strong> — Minimum 3-4 headline variations with primary keywords from that Ad Group</li>
          <li><strong>CTA present in 2-3 headlines</strong> — &quot;Order now&quot;, &quot;Free shipping&quot;, &quot;Buy today&quot;</li>
          <li><strong>USP clear and specific</strong> — What differentiates you from competition? (numbers, guarantees, unique benefits)</li>
          <li><strong>Pinning minimal</strong> — Let Google freedom to test combinations (only pin legal/brand requirements)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Extensions (sitelinks, callouts...)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Extensions increase CTR by 10-15% and take more space on SERP. Each campaign must have:</p>
        <ul className="text-sm">
          <li><strong>Sitelinks (min 4)</strong> — Links to different pages (categories, about, contact), each relevant for that campaign</li>
          <li><strong>Callouts (min 4)</strong> — Short bullet point benefits: &quot;Free shipping&quot;, &quot;24/7 support&quot;, &quot;30-day guarantee&quot;</li>
          <li><strong>Structured Snippets</strong> — Lists of categories, products, or services (specific, not generic)</li>
          <li><strong>Call extensions</strong> (if relevant) — Phone number directly in ad for high-intent queries</li>
          <li><strong>Location extensions</strong> (local businesses) — Address + map pin for local searches</li>
          <li><strong>Price extensions</strong> (eCommerce) — Shows prices directly in ad (eliminates low-budget clicks)</li>
        </ul>
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Ad Strength &quot;Poor&quot;, only 3-5 headlines, generic copy that doesn&apos;t differentiate from competition</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Complete RSA to 10-15 headlines (add variations with keywords, numbers, CTA, USP), use all 4 descriptions, remove excess pinning so Google tests combinations.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">No extensions, or all sitelinks lead to same homepage</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Create 4 sitelinks to different pages (product categories, best sellers, about, contact), 4 callouts with specific benefits (not generic &quot;quality&quot;), structured snippets with product/service lists.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2>Category 6: Audiences and remarketing</h2>
      <p>
        Remarketing is the easiest win in Google Ads — people who already visited site convert 3-5x better than cold traffic. If Google Ads audit reveals account has no remarketing lists or converter exclusions, that&apos;s huge missed opportunity.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Remarketing lists exist and have enough users</strong> <span className="text-gray-500">— Minimum: All Visitors (30-90 days), Cart Abandoners, Converters (list must have 1000+ users for Search)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Lists segmented logically</strong> <span className="text-gray-500">— Not just &quot;All visitors&quot; — create lists by product category, viewing time (2+ min), high-value pages</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Converters excluded from prospecting</strong> <span className="text-gray-500">— Exclude list converters (30-90 days) from Search campaigns so you don&apos;t pay for branded searches from people who already bought</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>In-market audiences tested (Observation mode)</strong> <span className="text-gray-500">— Google audience segments can help in cold prospecting, but first Observation mode (not Targeting)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Audience performance analyzed</strong> <span className="text-gray-500">— Segment by audience report shows which segments convert best (bid adjustments based on data)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Dedicated remarketing campaigns</strong> <span className="text-gray-500">— Separate campaigns for remarketing with higher bid and tailored copy (3-5x better CVR = can afford higher CPC)</span></div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Recommendation</p>
        <p className="text-blue-800 text-sm mb-0">Create dedicated remarketing campaigns with higher bid (+50-100% vs cold traffic) and targeted ad copy referencing their previous visit. Remarketing has 3-5x better conversion rate, so you can afford higher CPC and still be profitable.</p>
      </div>

      <p>
        Detailed guide on remarketing strategies and audience segmentation: <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }}>Remarketing guide for Google Ads</Link>.
      </p>

      <hr />

      <h2>Category 7: Bidding strategy</h2>
      <p>
        Smart Bidding is powerful tool, but only if you have enough conversions for algorithm to validly learn. In practice I see that over 40% of accounts use Smart Bidding with &lt;10 conversions monthly — that can&apos;t work.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Strategy matches goal and phase</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">I recommend:</p>
        <ul className="text-sm">
          <li><strong>Maximize Clicks or Manual CPC</strong> — New campaign without conversions, focus on traffic gathering and data collection</li>
          <li><strong>Maximize Conversions</strong> — When you have 15-30 conversions monthly, but don&apos;t have clear target CPA yet</li>
          <li><strong>Target CPA</strong> — When you have 30+ conversions monthly and know desired target CPA (baseline + 10-20% improvement)</li>
          <li><strong>Target ROAS</strong> — eCommerce with precise conversion value tracking and 50+ conversions monthly</li>
          <li><strong>Maximize Conversion Value</strong> — eCommerce when you don&apos;t have target ROAS but want to maximize revenue</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Enough conversions for Smart Bidding</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Google recommends 15+ conversions in last 30 days for Maximize Conversions, 30+ for Target CPA, 50+ for Target ROAS. Below that, algorithm doesn&apos;t have enough signals for valid optimization.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Target CPA/ROAS realistic and achievable</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Target shouldn&apos;t be 50% better than current performance. I recommend target be 10-20% improvement from baseline, then gradually tighten it over several weeks.</p>
        <ul className="text-sm">
          <li><strong>Example:</strong> If current CPA is $65, don&apos;t set target $30 immediately — start with $55, then after 2 weeks $50, etc.</li>
          <li><strong>Learning period</strong> — Wait 7-14 days after each change before drawing conclusions</li>
        </ul>
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Smart Bidding with &lt;10 conversions monthly, or unrealistic target (e.g., target CPA $15 when current is $80)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Return to Manual CPC or Maximize Conversions until you collect more conversions (30+ monthly). If already using Smart Bidding, change target to be more realistic (10-20% improvement, not 50%+).</p>
          </div>
        </div>
      </div>

      <hr />

      <h2>Category 8: Budget and allocation</h2>
      <p>
        Budget allocation is one of most common mistakes in Google Ads audits — best campaigns are &quot;Limited by budget&quot;, while bad campaigns spend full budget. That&apos;s like giving best salesperson least resources.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Best performing campaigns NOT limited by budget</strong> <span className="text-gray-500">— If campaign is profitable (CPA &lt; target, ROAS &gt; target), increase budget +30-50%</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Impression Share Lost (Budget) &lt;20%</strong> <span className="text-gray-500">— If losing 30%+ impression share due to budget in profitable campaign, reallocate more budget</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Budget reallocated to winning campaigns</strong> <span className="text-gray-500">— If campaign A has CPA $30 and B has CPA $80, move 30-50% budget from B to A</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Seasonality planned</strong> <span className="text-gray-500">— Increase budget in high season (Q4, Black Friday, seasonal peaks), decrease in low season</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Shared budgets evaluated</strong> <span className="text-gray-500">— Shared budgets can cannibalize performance: best campaign doesn&apos;t get enough, worst gets too much</span></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Red flag: Best performing campaign limited by budget, &gt;30% impression share lost to budget, or bad campaigns spend 50%+ total budget.</p>
      </div>

      <p>
        If you don&apos;t know how much budget to allocate per campaign or industry, read: <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }}>How much does Google Ads cost</Link>.
      </p>

      <hr />

      <h2>Quick Google Ads audit in 30 minutes</h2>
      <p>
        If you don&apos;t have 2-4 hours for full Google Ads audit, here&apos;s quick check covering 80% of most critical things. I recommend doing this quick audit monthly between quarterly deep audits.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Search Terms Report (5 min)</strong> <span className="text-gray-500">— Top 30 search terms by cost (30 days): are they relevant? Add negatives for all irrelevant with $15+ spend</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Budget allocation (3 min)</strong> <span className="text-gray-500">— Is profitable campaign &quot;Limited by budget&quot;? Reallocate budget from bad campaigns</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Conversion tracking check (5 min)</strong> <span className="text-gray-500">— Is tracking working? Compare Google Ads conversions with GA4/CRM (max 10-15% difference ok)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Top keywords performance (5 min)</strong> <span className="text-gray-500">— Top 15 keywords by cost: QS ok (6+)? CPA acceptable? Pause keywords with CPA 2x+ target and 50+ clicks</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Ad performance (4 min)</strong> <span className="text-gray-500">— Which Ad Groups have CTR &lt;2% (Search) or &lt;0.5% (Display)? Complete RSA with more headlines or create new ads</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Extensions active (2 min)</strong> <span className="text-gray-500">— Are all extensions (sitelinks, callouts, structured snippets) active and serving? Add if missing</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div><strong>Audience lists &amp; exclusions (3 min)</strong> <span className="text-gray-500">— Do remarketing lists have 1000+ users? Is converters exclusion working? Check segment report</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
            <div><strong>Campaign settings quick scan (3 min)</strong> <span className="text-gray-500">— Location targeting correct? Networks ok (Display OFF in Search)? Schedule adjustments active?</span></div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Pro tip</p>
        <p className="text-yellow-800 text-sm mb-0">Create Google Sheet with scoring for each category (1-5 scale). When doing monthly quick audit, just update scoring and track trend — is it going up (optimizations working) or down (new problems).</p>
      </div>

      <hr />

      <h2>Scoring system for Google Ads audit</h2>
      <p>
        I recommend scoring each category from 1 to 5, and tracking overall account health score over time. This helps prioritize actions, measure progress, and justify investment in optimization.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Score</th>
              <th className="py-3 px-4 font-heading font-semibold">Status</th>
              <th className="py-3 px-4 font-heading font-semibold">Description</th>
              <th className="py-3 px-4 font-heading font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">5</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Excellent</span></td>
              <td className="py-3 px-4">All checkpoints covered, best practices implemented</td>
              <td className="py-3 px-4">Maintain, monitor monthly</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">4</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Good</span></td>
              <td className="py-3 px-4">Most covered, minor improvements possible</td>
              <td className="py-3 px-4">Minor tweaks, low priority (schedule for next month or two)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">3</td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Average</span></td>
              <td className="py-3 px-4">Basics covered, but missing important optimizations</td>
              <td className="py-3 px-4">Improvement needed, plan 1-2 weeks for fixes</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">2</td>
              <td className="py-3 px-4"><span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded">Poor</span></td>
              <td className="py-3 px-4">Major gaps, wasted spend high (15-25%+)</td>
              <td className="py-3 px-4">Priority fix, schedule immediately (this week)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">1</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Critical</span></td>
              <td className="py-3 px-4">Fundamentally not working, serious problems</td>
              <td className="py-3 px-4">Urgent action today, maybe pause campaigns until fixed</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <strong>Overall Account Health Score</strong> is calculated as average of all 10 categories. If overall score is 3.5 or higher, account is in solid condition. Below 3.0 means priority problems exist that waste budget inefficiently.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">My experience with scoring</p>
        <p className="text-blue-800 text-sm mb-0">When I take over new account for management, average score is 2.5-3.0 (basic setup ok, but many gaps). After first month of optimizations, score goes to 3.5-4.0. Score 4.5+ is hard to maintain long-term because requires constant proactive work and testing.</p>
      </div>

      <hr />

      <h2>Most common Google Ads audit mistakes</h2>
      <p>
        Here are most common mistakes I see when people audit Google Ads themselves, or outsource to inexperienced agency or freelancer.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #1</p>
          <p className="font-semibold mb-2">Focusing only on surface-level metrics (CTR, CPC) without looking at conversions and profitability</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Always audit CPA and ROAS (or conversion rate if you don&apos;t have revenue tracking). CTR and CPC are means, not goal — you can have high CTR and bad ROI.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #2</p>
          <p className="font-semibold mb-2">Skipping Search Terms Report — most important part of audit that uncovers wasted spend</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Search Terms Report MUST be part of every Google Ads audit. Filter top 50 by cost (30 days) and check if relevant. Add negatives for all irrelevant with $15+ spend.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #3</p>
          <p className="font-semibold mb-2">Changing 10 things at once so you don&apos;t know what impacted results</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> After audit, prioritize top 3-5 actions and do them gradually (1-2 weeks between changes, wait learning period). This way you can measure impact of each optimization individually.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #4</p>
          <p className="font-semibold mb-2">Looking only at last 7 days of data (too short for valid conclusions)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Audit last 30-90 days of data. 7 days is too short (weekend vs weekday distortion, seasonality, not enough conversions for statistical significance).</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #5</p>
          <p className="font-semibold mb-2">Pausing campaigns/keywords with &quot;bad&quot; performance without diagnosing WHY they&apos;re bad</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Before pausing, diagnose: Is problem keyword (bad intent), ad copy (low CTR), landing page (bad CVR), or targeting (wrong audience)? Maybe fix is simple — new LP or better ad copy.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #6</p>
          <p className="font-semibold mb-2">Ignoring benchmarks — you don&apos;t know if your CPA $80 is good or bad</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Compare metrics with industry benchmarks (Google publishes average CPC/CVR by industries). Also compare performance with your baseline (3-6 months ago) to see trend.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2>Frequently asked questions about Google Ads audit</h2>
      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How often to run Google Ads audit?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">I recommend <strong>quarterly deep audit</strong> (2-4 hours, all 10 categories + 80+ checkpoints) + <strong>monthly quick audit</strong> (30 min, 8 priority checkpoints). Also run audit immediately if: (1) performance suddenly drops, (2) taking over account from other agency, (3) launching new products/services, or (4) changing business model.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much does professional Google Ads audit cost?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-3">In practice I see range from $300 to $2,500+ depending on account size, campaign number, and audit depth.</p>
            <ul className="text-sm mb-0">
              <li><strong>Basic audit</strong> (small account, 2-3 campaigns, 1 market): $300-500</li>
              <li><strong>Standard audit</strong> (medium account, 5-10 campaigns, 1-2 markets): $600-1,200</li>
              <li><strong>Deep audit</strong> (large account, 10+ campaigns, multi-market, complete diagnostics): $1,200-2,500+</li>
            </ul>
            <p className="mt-3 mb-0">If your monthly ad spend is $8K+, professional Google Ads audit pays off because on average it uncovers 15-25% wasted spend that can be eliminated in first month.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I run Google Ads audit myself or do I need specialist?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">You can yourself if you follow checklist from this guide and have technical understanding of Google Ads. However, specialist or agency will identify problems faster because they see 10-20+ accounts monthly and know what&apos;s &quot;normal&quot; vs &quot;red flag&quot;. Also, external view eliminates confirmation bias. If ad spend is $5K+ monthly, I recommend at least yearly professional Google Ads audit for second opinion.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What&apos;s most common problem Google Ads audit uncovers?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Top 3 problems are: (1) <strong>Irrelevant search terms</strong> — waste 15-30% of budget because no negative keywords list or not maintained, (2) <strong>Conversion tracking doesn&apos;t work accurately</strong> — not working or recording duplicate conversions, so algorithm makes bad decisions, (3) <strong>Bad budget allocation</strong> — bad campaigns spend too much, good campaigns limited by budget.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much time between audit and visible results?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0"><strong>Quick wins</strong> (adding negative keywords, disabling Display Network from Search campaigns, budget reallocation) deliver results in 7-14 days. <strong>Medium optimizations</strong> (ad copy improvement, bidding adjustments) in 2-4 weeks. <strong>Deep changes</strong> (restructuring campaigns, new bidding strategy) may require 4-8 weeks. Smart Bidding always has 7-14 day learning period after each change.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What after Google Ads audit — who implements optimizations?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Depends on agreement and your resources. Some specialists give only audit report with prioritized recommendations (DIY implementation). Others offer audit + implementation as package. Third offer audit + ongoing management (monthly management). I recommend implementation by same person who did audit because they know context, priorities, and reasons behind each recommendation.</p>
          </div>
        </details>
      </div>

      <hr />

      <h2>Conclusion</h2>
      <p>
        Google Ads audit isn&apos;t one-time checklist — it&apos;s systematic process that should become part of your regular workflow. My experience is that accounts regularly audited (quarterly deep audit + monthly quick check) have 20-30% better results than accounts that are &quot;set and forget&quot;.
      </p>

      <p>
        This guide covers 80+ checkpoints in 10 categories I personally use on 50+ accounts over last several years. Not everything is relevant for every business — e.g., if you don&apos;t have eCommerce, skip conversion value tracking. But basics (conversion tracking, search terms, budget allocation, ad quality) are universal for all industries.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">When I take over new account for management, first thing is always detailed Google Ads audit. It gives me clear picture where problems are, where quick wins are, and where long-term growth opportunities are. Without audit, optimization is improvisation and wasting money.</p>
      </div>

      <p>
        If you don&apos;t have time or experience to run detailed Google Ads audit yourself, I recommend contacting specialist. Investment of $400-1,200 in professional audit pays off multiple times if you uncover 15-25% wasted spend or missed scaling opportunities.
      </p>

      <p>
        For continuing optimization after audit, read: <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimizacija" } }}>Google Ads optimization guide</Link> and <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }}>Most common Google Ads mistakes</Link>.
      </p>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Need professional Google Ads audit?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">I run audits for accounts of all sizes — from startups to enterprise clients. You get 80+ checkpoint audit report + prioritized action plan + implementation recommendations + follow-up consultation.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Schedule free consultation</Link>
      </div>

      <hr />

      <h2>Related guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/google-ads-audit" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Professional Google Ads Audit</p>
          <p className="text-xs text-gray-500 mb-0">Detailed account analysis with action plan</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking guide</p>
          <p className="text-xs text-gray-500 mb-0">How to set up conversion tracking and troubleshoot problems</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Quality Score guide</p>
          <p className="text-xs text-gray-500 mb-0">What Quality Score is and how to improve it for lower CPC</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Keywords guide</p>
          <p className="text-xs text-gray-500 mb-0">Keyword research, match types, and keyword optimization</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negative keywords</p>
          <p className="text-xs text-gray-500 mb-0">How to identify and add negative keywords to eliminate wasted spend</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimizacija" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads optimization</p>
          <p className="text-xs text-gray-500 mb-0">Ongoing optimization after audit — what to do monthly and weekly</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">How much does Google Ads cost</p>
          <p className="text-xs text-gray-500 mb-0">Budget planning and CPC benchmarks by industries</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing guide</p>
          <p className="text-xs text-gray-500 mb-0">How to set up remarketing lists and strategies for better conversions</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Most common Google Ads mistakes</p>
          <p className="text-xs text-gray-500 mb-0">20+ most common mistakes and how to avoid them</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        <p className="mb-1"><strong>Author:</strong> Slobodan Jelisavac, Google Ads Specialist</p>
        <p className="mb-0">Last updated: February 2026</p>
      </div>
    </>
  );
}
