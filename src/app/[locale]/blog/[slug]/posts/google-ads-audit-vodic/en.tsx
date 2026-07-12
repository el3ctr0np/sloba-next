import { Link } from "@/i18n/navigation";

export default function GoogleAdsAuditGuideEN() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">A Google Ads audit is a systematic account review that uncovers wasted spend, missed opportunities, and technical errors. A professional audit covers 80+ checkpoints across 10 categories and, on average, finds 15-25% of the budget being spent inefficiently.</p>
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

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Quick answer
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          What is a Google Ads audit and what does it find?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          A <strong>Google Ads audit</strong> is a systematic account review across <strong>10 categories</strong> — account structure, conversion tracking, campaign settings, keywords, ads, audiences, bidding strategy, and budget. A professional audit covers <strong>80+ checkpoints</strong> and, on average, finds that <strong>15-25% of budget</strong> is being spent inefficiently on accounts that haven&apos;t been optimized in 6+ months.
        </p>
      </div>

      {/* ── Featured-snippet: 10 categories list ── */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-bold mb-3">
          Google Ads audit checklist — the 10 categories
        </p>
        <ol className="space-y-2 text-base text-gray-700 pl-5 mb-0">
          <li><strong>Account structure</strong> — campaign organization, naming conventions, hierarchy</li>
          <li><strong>Conversion tracking</strong> — accuracy, duplicates, attribution window</li>
          <li><strong>Campaign settings</strong> — location targeting, networks, ad schedule, devices</li>
          <li><strong>Keywords and search terms</strong> — Search Terms Report, negatives, Quality Score</li>
          <li><strong>Ads and extensions</strong> — RSA quality, Ad Strength, sitelinks, callouts</li>
          <li><strong>Audiences and remarketing</strong> — remarketing lists, converter exclusions</li>
          <li><strong>Bidding strategy</strong> — Smart Bidding setup, conversion volume, target realism</li>
          <li><strong>Budget and allocation</strong> — Impression Share Lost (Budget), budget distribution</li>
          <li><strong>Reporting and analytics</strong> — GA4 integration, attribution models, data discrepancies</li>
          <li><strong>Scripts and automation</strong> — Google Ads Scripts, automated rules, alerts</li>
        </ol>
      </div>

      {/* ── Table of Contents ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#why-google-ads-audit-is-essential" className="block py-1 text-base text-gray-700 hover:text-primary underline">Why a Google Ads audit is essential</a></li>
          <li><a href="#what-a-good-google-ads-audit-covers" className="block py-1 text-base text-gray-700 hover:text-primary underline">What a good Google Ads audit covers</a></li>
          <li><a href="#category-1-account-structure" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 1: Account structure</a></li>
          <li><a href="#category-2-conversion-tracking" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 2: Conversion tracking</a></li>
          <li><a href="#category-3-campaign-settings" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 3: Campaign settings</a></li>
          <li><a href="#category-4-keywords-and-search-terms" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 4: Keywords and search terms</a></li>
          <li><a href="#category-5-ads-and-extensions" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 5: Ads and extensions</a></li>
          <li><a href="#category-6-audiences-and-remarketing" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 6: Audiences and remarketing</a></li>
          <li><a href="#category-7-bidding-strategy" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 7: Bidding strategy</a></li>
          <li><a href="#category-8-budget-and-allocation" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 8: Budget and allocation</a></li>
          <li><a href="#quick-google-ads-audit-in-30-minutes" className="block py-1 text-base text-gray-700 hover:text-primary underline">A quick Google Ads audit in 30 minutes</a></li>
          <li><a href="#scoring-system-for-google-ads-audit" className="block py-1 text-base text-gray-700 hover:text-primary underline">A scoring system for your Google Ads audit</a></li>
          <li><a href="#most-common-google-ads-audit-mistakes" className="block py-1 text-base text-gray-700 hover:text-primary underline">The most common Google Ads audit mistakes</a></li>
          <li><a href="#frequently-asked-questions-about-google-ads-audit" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions about Google Ads audits</a></li>
          <li><a href="#conclusion" className="block py-1 text-base text-gray-700 hover:text-primary underline">Conclusion</a></li>
          <li><a href="#related-guides" className="block py-1 text-base text-gray-700 hover:text-primary underline">Related guides</a></li>
        </ol>
      </nav>



      <h2 id="why-google-ads-audit-is-essential">Why a Google Ads audit is essential</h2>
      <p>
        Over 90% of the Google Ads accounts I take over have the same fundamental problems: conversion tracking that doesn&apos;t work properly, budget leaking into irrelevant search terms, poorly organized campaigns, or Smart Bidding trying to optimize on insufficient data. That&apos;s why a detailed audit is always the first thing I run on a new account.
      </p>
      <p>
        A Google Ads audit isn&apos;t just a list of things that &quot;don&apos;t work&quot; — it&apos;s a systematic diagnostic that pinpoints <strong>where you&apos;re losing money and where you&apos;re missing growth opportunities</strong>. The average account that hasn&apos;t been optimized for 6+ months wastes 15-25% of its budget outright. That waste can be eliminated in the first week after the audit. If you&apos;d rather have it done for you, see my{" "}
        <Link href="/usluge/google-ads-audit" className="underline font-semibold">Google Ads audit service</Link>, which covers the same 80+ checkpoints below.
      </p>
      <p>
        This checklist still holds up in the Performance Max and AI Max era: those campaign types blend Search, Shopping, and Display signals into one automated unit, so audit them separately from standard Search campaigns and treat each asset group the way you&apos;d treat an ad group — one theme, not a dumping ground.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">When to run a Google Ads audit</p>
        <p className="text-blue-800 text-base mb-0">
          <strong>A quarterly deep audit</strong> (2-4 hours, all 10 categories) + <strong>a monthly quick check</strong> (30 min, 7 priority points). On top of that, audit immediately if performance suddenly drops, you&apos;re taking over an account from a previous agency, you&apos;re changing your business model, or you&apos;re launching a new campaign.
        </p>
      </div>

      <p>
        In my experience, companies either audit too rarely (once a year, or never) or waste time on surface metrics that don&apos;t reveal the real problems. This guide covers exactly what to check, how to interpret the data, and which actions to take right away.
      </p>

      <hr />

      <h2 id="what-a-good-google-ads-audit-covers">What a good Google Ads audit covers</h2>
      <p>
        A professional Google Ads audit isn&apos;t improvised — it&apos;s a structured checklist of 80+ checkpoints divided into 10 key categories. Each category has priority items (critical for performance) and optimization items (additional improvements for advanced accounts).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Foundation</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">1. Account structure</h3>
          <p className="text-base text-gray-600 mb-0">Logical campaign organization, naming conventions, hierarchy, labels</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Critical</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">2. Conversion Tracking</h3>
          <p className="text-base text-gray-600 mb-0">Whether conversion tracking works accurately and the data is valid</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Setup</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">3. Campaign settings</h3>
          <p className="text-base text-gray-600 mb-0">Location targeting, networks, ad schedule, device bid adjustments</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Search</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">4. Keywords and search terms</h3>
          <p className="text-base text-gray-600 mb-0">Search Terms Report, negatives, Quality Score, match types, duplicates</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Creative</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">5. Ads and extensions</h3>
          <p className="text-base text-gray-600 mb-0">RSA quality, Ad Strength, sitelinks, callouts, structured snippets</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Targeting</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">6. Audiences and remarketing</h3>
          <p className="text-base text-gray-600 mb-0">Remarketing lists, audience layering, converter exclusions</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Automation</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">7. Bidding strategy</h3>
          <p className="text-base text-gray-600 mb-0">Smart Bidding setup, conversion volume, target realism, learning periods</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Spend</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">8. Budget and allocation</h3>
          <p className="text-base text-gray-600 mb-0">Impression Share Lost (Budget), campaign budget distribution</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Analysis</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">9. Reporting and analytics</h3>
          <p className="text-base text-gray-600 mb-0">GA4 integration, attribution models, segment analysis, data discrepancies</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Advanced</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">10. Scripts and automation</h3>
          <p className="text-base text-gray-600 mb-0">Google Ads Scripts, automated rules, alerts, bulk operations — including <a href="https://ads.google.com/home/tools/ads-editor/" target="_blank" rel="noopener noreferrer">Google Ads Editor</a> for offline changes</p>
        </div>
      </div>

      <p>
        Each category is scored from 1 to 5 and gets a prioritized action plan. At the end of the audit you have a clear picture of where the account stands, what to fix urgently, and what impact to expect from each optimization.
      </p>

      <hr />

      <h2 id="category-1-account-structure">Category 1: Account structure</h2>
      <p>
        A well-structured Google Ads account follows three rules: one theme per campaign, 5-20 tightly related keywords per ad group, and no more than 5-15 ad groups per campaign. Structure is the first checkpoint in an audit because every other optimization depends on it — the account should be logical, scalable, and transparent enough that anyone can understand how it&apos;s organized within 5 minutes.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Campaigns organized logically</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">Campaigns should be divided by product/service, geography, or funnel stage — never lumped into one mega campaign.</p>
        <ul className="text-sm">
          <li><strong>Brand vs Non-brand SEPARATE</strong> — Completely different economics: brand terms have lower CPCs, higher conversion rates, and a different strategy</li>
          <li><strong>Search and Display SEPARATE</strong> — Never together, except in Performance Max (different metrics, different targeting)</li>
          <li><strong>Consistent naming convention</strong> — E.g., [Type]_[Product]_[Geo]_[Stage] for quick filtering and reporting</li>
          <li><strong>Separate geographic campaigns</strong> — If you operate in multiple countries or regions, split campaigns by geo</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ad Groups thematically focused</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">One Ad Group = one theme/intent. In practice, that means 5-20 keywords per Ad Group, not 50+.</p>
        <ul className="text-sm">
          <li><strong>No &quot;catch-all&quot; Ad Groups</strong> — Keywords for different themes in the same group = worse Ad Strength and Quality Score</li>
          <li><strong>Keywords share similar intent</strong> — &quot;buy shoes&quot; and &quot;shoe price&quot; are similar intent; &quot;running shoes&quot; and &quot;dress shoes&quot; aren&apos;t</li>
          <li><strong>Dedicated Ad Groups for high-value terms</strong> — Brand terms, top sellers, and high-margin products deserve their own groups</li>
        </ul>
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">One campaign with 50+ Ad Groups, or Search + Display together in the same campaign</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Solution:</strong> Restructure the account: separate Search and Display, divide campaigns into smaller logical units (by product/geo/stage), and reduce Ad Groups to 5-15 per campaign.</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Pro tip</p>
        <p className="text-yellow-800 text-base mb-0">If you have more than 10 campaigns, create labels (e.g., &quot;Priority&quot;, &quot;Testing&quot;, &quot;Paused-Low_ROI&quot;) for faster filtering in the interface. For bulk changes, use <a href="https://ads.google.com/home/tools/ads-editor/" target="_blank" rel="noopener noreferrer">Google Ads Editor</a> — it saves significant time during the audit analysis.</p>
      </div>

      <hr />

      <h2 id="category-2-conversion-tracking">Category 2: Conversion tracking</h2>
      <p>
        Conversion tracking is the most critical part of any Google Ads audit. If tracking is broken or records the wrong data, everything else is pointless — you&apos;re optimizing on bad information and making the wrong decisions.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Conversion tracking active and functional</strong> <span className="text-gray-500">— Check that the tag fires (Google Tag Assistant, GTM Preview mode, or browser dev tools)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Primary conversion action marked</strong> <span className="text-gray-500">— Google needs to know which conversion is the main one to optimize for (not all conversions are equally important)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Test conversion successful</strong> <span className="text-gray-500">— Test it yourself: make a purchase or submit a lead and check that the conversion is recorded in the account (allow up to 24h)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>No duplicated conversions</strong> <span className="text-gray-500">— A GA4 + Google Ads tag on the same thank-you page can double-count conversions</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Conversion value accurate (eCommerce)</strong> <span className="text-gray-500">— ROAS optimization requires precise revenue data, including a transaction_id for deduplication</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Enhanced conversions enabled</strong> <span className="text-gray-500">— Improves attribution after the iOS 14.5+ privacy changes; mandatory for modern optimization</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div><strong>Attribution window logical</strong> <span className="text-gray-500">— The default 30 days is fine for most businesses, but B2B with a long sales cycle needs 60-90 days</span></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Red flag: Google Ads conversions don&apos;t match GA4/CRM (&gt;20% difference). That signals tracking isn&apos;t set up properly or there&apos;s an attribution model problem.</p>
      </div>

      <p>
        For a detailed guide on setting up tracking and troubleshooting problems, see: <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}>Conversion Tracking for Google Ads</Link>.
      </p>

      <hr />

      <h2 id="category-3-campaign-settings">Category 3: Campaign settings</h2>
      <p>
        Google Ads default settings are bad — they&apos;re designed for Google to earn more, not for you to get better results. Over 70% of the new accounts I review still run on defaults that waste budget in the wrong places.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Location targeting</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">Check that &quot;People in your targeted locations&quot; is selected, NOT &quot;People interested in your locations&quot;. The default option shows ads to people Google <em>thinks</em> are interested in your location — even if they&apos;re on another continent.</p>
        <ul className="text-sm">
          <li><strong>Location bid adjustments active</strong> — Raise bids for your best-performing geos, lower them for the worst</li>
          <li><strong>Exclude non-converting locations</strong> — If a location has a 0% conversion rate after 50+ clicks, exclude it</li>
          <li><strong>Radius targeting precise</strong> — Local businesses: a 10-20km radius, not 50km+ (wasted spend)</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Networks</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">The Display Network must be DISABLED in Search campaigns. Evaluate Search Partners after 30 days — if their CPA is worse than core Search, turn them off.</p>
        <ul className="text-sm">
          <li><strong>Search campaigns</strong> = Google Search only (uncheck Display and watch Search Partners closely)</li>
          <li><strong>Display campaigns</strong> = Display Network only (never together with Search — different economics)</li>
          <li><strong>Search Partners check</strong> — Check the segment report after a month: if CPA is 20%+ worse, disable them</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ad schedule (days/hours)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">Analyze performance by hour and day (Day &amp; Hour report). If conversions drop after 8pm or on weekends, lower bids or pause those slots.</p>
        <ul className="text-sm">
          <li><strong>Time-based bid adjustments</strong> — Raise bids +20-50% for the best time slots, cut them -30-50% for the worst</li>
          <li><strong>B2B campaigns</strong> — Usually shouldn&apos;t run on weekends (office hours only: 9am-5pm, Mon-Fri)</li>
          <li><strong>eCommerce seasonality</strong> — Raise bids for evening hours and weekends (prime shopping time)</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Devices (Desktop/Mobile/Tablet)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">Analyze performance by device. If mobile converts 2x worse, cut its bid by -30% to -50%.</p>
        <ul className="text-sm">
          <li><strong>Device bid adjustments</strong> — Raise bids for the best-performing device, lower them for the worst</li>
          <li><strong>Mobile-friendly landing page</strong> — If the mobile landing page isn&apos;t optimized, lower the mobile bid until you fix the UX</li>
        </ul>
      </div>

      <hr />

      <h2 id="category-4-keywords-and-search-terms">Category 4: Keywords and search terms</h2>
      <p>
        The keywords you enter in the account are not what you&apos;re actually buying — the <strong>search terms</strong> people type are. Every Google Ads audit must analyze the Search Terms Report in detail to see what actually triggers your ads and where the budget goes.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Search Terms Report reviewed (30-90 days)</strong> <span className="text-gray-500">— The top 50-100 search terms by cost: are they relevant, and are they converting?</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Negative keyword list exists and is maintained</strong> <span className="text-gray-500">— A negatives list must exist at both campaign and account level, updated regularly (monthly at minimum)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>No irrelevant search terms with significant spend</strong> <span className="text-gray-500">— If a search term has spent $80+ and isn&apos;t relevant, that&apos;s money wasted outright</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Quality Score of 6+ for most keywords</strong> <span className="text-gray-500">— A QS below 5 means you&apos;re paying a premium for clicks (scan the top 20 keywords by impressions)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Keywords without conversions (&gt;100 clicks) evaluated</strong> <span className="text-gray-500">— Pause keywords that burn budget without results, or cut their bids drastically</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Duplicate keywords removed</strong> <span className="text-gray-500">— The same keyword in multiple Ad Groups/campaigns creates internal competition and worse performance</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div><strong>Clear match type strategy</strong> <span className="text-gray-500">— Broad for discovery (with aggressive negatives), Phrase for control, Exact for top performers</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
            <div><strong>High-intent keywords get higher bids</strong> <span className="text-gray-500">— &quot;buy&quot;, &quot;price&quot;, and &quot;now&quot; terms should carry higher bids than informational keywords</span></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Red flag: the Search Terms Report has never been reviewed, there&apos;s no negative keyword list, Quality Score is below 5 for most keywords, or irrelevant search terms are eating 20%+ of the budget.</p>
      </div>

      <p>
        For a detailed guide on keyword research, match types, and Quality Score optimization, see: <Link href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }}>Keywords for Google Ads</Link>. For negative keyword strategy: <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }}>Negative Keywords</Link>.
      </p>

      <hr />

      <h2 id="category-5-ads-and-extensions">Category 5: Ads and extensions</h2>
      <p>
        Over 50% of the accounts I audit run ads with &quot;Poor&quot; Ad Strength and barely any extensions. That&apos;s a missed opportunity — better ads mean a higher CTR, which means a lower CPC and more conversions. Ads are the only part of your account that potential customers actually see.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">RSA quality</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">Every Ad Group needs a minimum of one Responsive Search Ad with 10-15 headlines and 4 descriptions.</p>
        <ul className="text-sm">
          <li><strong>Ad Strength is &quot;Good&quot; or &quot;Excellent&quot;</strong> — Never &quot;Poor&quot; (Google is literally telling you the ad is bad)</li>
          <li><strong>Headlines contain keywords</strong> — A minimum of 3-4 headline variations with the primary keywords from that Ad Group</li>
          <li><strong>A CTA in 2-3 headlines</strong> — &quot;Order now&quot;, &quot;Free shipping&quot;, &quot;Buy today&quot;</li>
          <li><strong>A clear, specific USP</strong> — What sets you apart from the competition? (numbers, guarantees, unique benefits)</li>
          <li><strong>Minimal pinning</strong> — Give Google the freedom to test combinations (pin only for legal or brand requirements)</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Extensions (sitelinks, callouts...)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">Extensions increase CTR by 10-15% and claim more space on the SERP. Every campaign should have:</p>
        <ul className="text-sm">
          <li><strong>Sitelinks (min 4)</strong> — Links to different pages (categories, about, contact), each relevant to that campaign</li>
          <li><strong>Callouts (min 4)</strong> — Short bullet-point benefits: &quot;Free shipping&quot;, &quot;24/7 support&quot;, &quot;30-day guarantee&quot;</li>
          <li><strong>Structured Snippets</strong> — Lists of categories, products, or services (specific, not generic)</li>
          <li><strong>Call extensions</strong> (if relevant) — A phone number directly in the ad for high-intent queries</li>
          <li><strong>Location extensions</strong> (local businesses) — Address + map pin for local searches</li>
          <li><strong>Price extensions</strong> (eCommerce) — Show prices directly in the ad (weeds out low-budget clicks)</li>
        </ul>
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Ad Strength &quot;Poor&quot;, only 3-5 headlines, generic copy that doesn&apos;t stand out from the competition</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Solution:</strong> Fill the RSA out to 10-15 headlines (add variations with keywords, numbers, CTAs, and USPs), use all 4 descriptions, and remove excess pinning so Google can test combinations.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">No extensions, or all sitelinks lead to the same homepage</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Solution:</strong> Create 4 sitelinks to different pages (product categories, best sellers, about, contact), 4 callouts with specific benefits (not generic &quot;quality&quot;), and structured snippets with product/service lists.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="category-6-audiences-and-remarketing">Category 6: Audiences and remarketing</h2>
      <p>
        Remarketing is the easiest win in Google Ads — people who have already visited your site convert 3-5x better than cold traffic. If the audit reveals an account with no remarketing lists or converter exclusions, that&apos;s a huge missed opportunity.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Remarketing lists exist and have enough users</strong> <span className="text-gray-500">— Minimum: All Visitors (30-90 days), Cart Abandoners, Converters (a list needs 1000+ users for Search)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Lists segmented logically</strong> <span className="text-gray-500">— Not just &quot;All visitors&quot; — create lists by product category, time on site (2+ min), and high-value pages</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Converters excluded from prospecting</strong> <span className="text-gray-500">— Exclude converters (30-90 days) from Search campaigns so you don&apos;t pay for branded searches from people who already bought</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>In-market audiences tested (Observation mode)</strong> <span className="text-gray-500">— Google&apos;s audience segments can help with cold prospecting, but start in Observation mode (not Targeting)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Audience performance analyzed</strong> <span className="text-gray-500">— The &quot;Segment by audience&quot; report shows which segments convert best (set bid adjustments based on that data)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Dedicated remarketing campaigns</strong> <span className="text-gray-500">— Separate remarketing campaigns with higher bids and tailored copy (a 3-5x better CVR means you can afford a higher CPC)</span></div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Recommendation</p>
        <p className="text-blue-800 text-base mb-0">Create dedicated remarketing campaigns with higher bids (+50-100% vs cold traffic) and targeted ad copy that references the previous visit. Remarketing converts 3-5x better, so you can afford a higher CPC and still stay profitable.</p>
      </div>

      <p>
        For a detailed guide on remarketing strategies and audience segmentation, see: <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }}>Remarketing guide for Google Ads</Link>.
      </p>

      <hr />

      <h2 id="category-7-bidding-strategy">Category 7: Bidding strategy</h2>
      <p>
        Smart Bidding is a powerful tool, but only when the algorithm has enough conversions to learn from. Over 40% of the accounts I audit run Smart Bidding with &lt;10 conversions a month — that simply can&apos;t work.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Strategy matches goal and phase</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">I recommend:</p>
        <ul className="text-sm">
          <li><strong>Maximize Clicks or Manual CPC</strong> — A new campaign without conversion history; focus on gathering traffic and data</li>
          <li><strong>Maximize Conversions</strong> — When you have 15-30 conversions a month but no clear target CPA yet</li>
          <li><strong>Target CPA</strong> — When you have 30+ conversions a month and know your desired CPA (baseline plus a 10-20% improvement)</li>
          <li><strong>Target ROAS</strong> — eCommerce with precise conversion value tracking and 50+ conversions a month</li>
          <li><strong>Maximize Conversion Value</strong> — eCommerce when you don&apos;t have a ROAS target but want to maximize revenue</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Enough conversions for Smart Bidding</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">Google recommends 15+ conversions in the last 30 days for Maximize Conversions, 30+ for Target CPA, and 50+ for Target ROAS. Below that, the algorithm doesn&apos;t have enough signal to optimize reliably.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Target CPA/ROAS realistic and achievable</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">Your target shouldn&apos;t be 50% better than current performance. I recommend setting it 10-20% better than baseline, then tightening it gradually over several weeks.</p>
        <ul className="text-sm">
          <li><strong>Example:</strong> If your current CPA is $65, don&apos;t set a $30 target immediately — start at $55, move to $50 after two weeks, and so on</li>
          <li><strong>Learning period</strong> — Wait 7-14 days after each change before drawing conclusions</li>
        </ul>
      </div>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Smart Bidding with &lt;10 conversions a month, or an unrealistic target (e.g., a $15 target CPA when the current CPA is $80)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Solution:</strong> Go back to Manual CPC or Maximize Conversions until you collect more conversions (30+ a month). If you&apos;re staying on Smart Bidding, reset the target to something realistic (a 10-20% improvement, not 50%+).</p>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="category-8-budget-and-allocation">Category 8: Budget and allocation</h2>
      <p>
        Budget misallocation is one of the most common problems an audit uncovers: the best campaigns sit at &quot;Limited by budget&quot; while the worst spend their full budget. That&apos;s like giving your best salesperson the fewest resources.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Best-performing campaigns NOT limited by budget</strong> <span className="text-gray-500">— If a campaign is profitable (CPA &lt; target, ROAS &gt; target), increase its budget by +30-50%</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Impression Share Lost (Budget) &lt;20%</strong> <span className="text-gray-500">— If a profitable campaign is losing 30%+ of its impression share to budget, reallocate more budget to it</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Budget reallocated to winning campaigns</strong> <span className="text-gray-500">— If campaign A has a $30 CPA and campaign B an $80 CPA, move 30-50% of B&apos;s budget to A</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Seasonality planned</strong> <span className="text-gray-500">— Increase budget in high season (Q4, Black Friday, seasonal peaks), decrease it in low season</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Shared budgets evaluated</strong> <span className="text-gray-500">— Shared budgets can cannibalize performance: the best campaign doesn&apos;t get enough, the worst gets too much</span></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Red flag: your best-performing campaign is limited by budget, &gt;30% of impression share is lost to budget, or underperforming campaigns spend 50%+ of the total budget.</p>
      </div>

      <p>
        If you don&apos;t know how much budget to allocate per campaign or industry, read: <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }}>How much does Google Ads cost</Link>.
      </p>

      <hr />

      <h2 id="quick-google-ads-audit-in-30-minutes">A quick Google Ads audit in 30 minutes</h2>
      <p>
        If you don&apos;t have 2-4 hours for a full audit, this 30-minute check covers 80% of the most critical issues. I recommend running it monthly, between quarterly deep audits.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Search Terms Report (5 min)</strong> <span className="text-gray-500">— Review the top 30 search terms by cost (30 days): are they relevant? Add negatives for every irrelevant term with $15+ spend</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Budget allocation (3 min)</strong> <span className="text-gray-500">— Is a profitable campaign showing &quot;Limited by budget&quot;? Reallocate budget from the underperformers</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Conversion tracking check (5 min)</strong> <span className="text-gray-500">— Is tracking working? Compare Google Ads conversions with GA4/CRM (a 10-15% difference is acceptable)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Top keyword performance (5 min)</strong> <span className="text-gray-500">— Check the top 15 keywords by cost: is QS at 6+? Is CPA acceptable? Pause keywords with a CPA 2x+ over target and 50+ clicks</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Ad performance (4 min)</strong> <span className="text-gray-500">— Which Ad Groups have a CTR &lt;2% (Search) or &lt;0.5% (Display)? Fill out the RSA with more headlines or create new ads</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Extensions active (2 min)</strong> <span className="text-gray-500">— Are all extensions (sitelinks, callouts, structured snippets) active and serving? Add any that are missing</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div><strong>Audience lists &amp; exclusions (3 min)</strong> <span className="text-gray-500">— Do remarketing lists have 1000+ users? Is the converter exclusion working? Check the segment report</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
            <div><strong>Campaign settings quick scan (3 min)</strong> <span className="text-gray-500">— Location targeting correct? Networks OK (Display OFF in Search)? Schedule adjustments active?</span></div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Pro tip</p>
        <p className="text-yellow-800 text-base mb-0">Create a Google Sheet with a score for each category (1-5 scale). During the monthly quick audit, just update the scores and watch the trend — up means the optimizations are working, down means new problems are creeping in.</p>
      </div>

      <hr />

      <h2 id="scoring-system-for-google-ads-audit">A scoring system for your Google Ads audit</h2>
      <p>
        Score each category from 1 to 5 and track the overall account health score over time. This helps you prioritize actions, measure progress, and justify the investment in optimization.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Score</th>
              <th className="py-3 px-3 font-heading font-semibold">Status</th>
              <th className="py-3 px-3 font-heading font-semibold">Description</th>
              <th className="py-3 px-3 font-heading font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">5</td>
              <td className="py-3 px-3"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Excellent</span></td>
              <td className="py-3 px-3">All checkpoints covered, best practices implemented</td>
              <td className="py-3 px-3">Maintain, monitor monthly</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">4</td>
              <td className="py-3 px-3"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Good</span></td>
              <td className="py-3 px-3">Mostly covered, minor improvements possible</td>
              <td className="py-3 px-3">Minor tweaks, low priority (schedule for the next month or two)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">3</td>
              <td className="py-3 px-3"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Average</span></td>
              <td className="py-3 px-3">Basics covered, but important optimizations missing</td>
              <td className="py-3 px-3">Improvement needed; plan 1-2 weeks for fixes</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">2</td>
              <td className="py-3 px-3"><span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded">Poor</span></td>
              <td className="py-3 px-3">Major gaps, high wasted spend (15-25%+)</td>
              <td className="py-3 px-3">Priority fix; schedule immediately (this week)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">1</td>
              <td className="py-3 px-3"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Critical</span></td>
              <td className="py-3 px-3">Fundamentally broken, serious problems</td>
              <td className="py-3 px-3">Urgent action today — consider pausing campaigns until fixed</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The <strong>Overall Account Health Score</strong> is the average of all 10 categories. A score of 3.5 or higher means the account is in solid shape. Below 3.0 means there are priority problems actively wasting budget.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">My experience with scoring</p>
        <p className="text-blue-800 text-base mb-0">When I take over a new account, the average score is 2.5-3.0 (the basic setup is fine, but there are many gaps). After the first month of optimization, the score climbs to 3.5-4.0. A score of 4.5+ is hard to sustain long-term because it requires constant proactive work and testing.</p>
      </div>

      <hr />

      <h2 id="most-common-google-ads-audit-mistakes">The most common Google Ads audit mistakes</h2>
      <p>
        These are the most common mistakes I see when people audit Google Ads themselves or outsource the job to an inexperienced agency or freelancer.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #1</p>
          <p className="font-semibold mb-2">Focusing only on surface-level metrics (CTR, CPC) without looking at conversions and profitability</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Solution:</strong> Always audit CPA and ROAS (or conversion rate if you don&apos;t have revenue tracking). CTR and CPC are means, not the goal — you can have a high CTR and a terrible ROI.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #2</p>
          <p className="font-semibold mb-2">Skipping the Search Terms Report — the single most important part of the audit for uncovering wasted spend</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Solution:</strong> The Search Terms Report MUST be part of every Google Ads audit. Filter the top 50 terms by cost (30 days) and check their relevance. Add negatives for every irrelevant term with $15+ spend.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #3</p>
          <p className="font-semibold mb-2">Changing 10 things at once, so you can&apos;t tell what moved the results</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Solution:</strong> After the audit, prioritize the top 3-5 actions and roll them out gradually (1-2 weeks between changes, respecting learning periods). That way you can measure the impact of each optimization individually.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #4</p>
          <p className="font-semibold mb-2">Looking at only the last 7 days of data (too short for valid conclusions)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Solution:</strong> Audit the last 30-90 days of data. Seven days is too short — weekend vs weekday distortion, seasonality, and too few conversions for statistical significance.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #5</p>
          <p className="font-semibold mb-2">Pausing campaigns/keywords with &quot;bad&quot; performance without diagnosing WHY they&apos;re bad</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Solution:</strong> Before pausing, diagnose: is the problem the keyword (bad intent), the ad copy (low CTR), the landing page (poor CVR), or the targeting (wrong audience)? The fix may be simple — a new landing page or better ad copy.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #6</p>
          <p className="font-semibold mb-2">Ignoring benchmarks — you don&apos;t know whether your $80 CPA is good or bad</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Solution:</strong> Compare your metrics with industry benchmarks (Google publishes average CPC/CVR by industry). Also compare performance against your own baseline (3-6 months ago) to see the trend.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="frequently-asked-questions-about-google-ads-audit">Frequently asked questions about Google Ads audits</h2>
      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How often should I run a Google Ads audit?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">I recommend a <strong>quarterly deep audit</strong> (2-4 hours, all 10 categories and 80+ checkpoints) plus a <strong>monthly quick audit</strong> (30 minutes, 8 priority checkpoints). Also run an audit immediately if: (1) performance suddenly drops, (2) you&apos;re taking over an account from another agency, (3) you&apos;re launching new products or services, or (4) you&apos;re changing your business model.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What should I check first in a Google Ads audit?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Five points that cover 80% of problems: 1) Conversion tracking — are you tracking the right actions? 2) The Search Terms report — which queries are triggering your ads? 3) Quality Score — are your keywords relevant? 4) Wasted spend — where is money going without results? 5) The landing page — does the page you&apos;re sending traffic to actually convert?</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much does a professional Google Ads audit cost?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-3">Prices range from $300 to $2,500+ depending on account size, number of campaigns, and audit depth.</p>
            <ul className="text-sm mb-0">
              <li><strong>Basic audit</strong> (small account, 2-3 campaigns, 1 market): $300-500</li>
              <li><strong>Standard audit</strong> (medium account, 5-10 campaigns, 1-2 markets): $600-1,200</li>
              <li><strong>Deep audit</strong> (large account, 10+ campaigns, multi-market, complete diagnostics): $1,200-2,500+</li>
            </ul>
            <p className="mt-3 mb-0">If your monthly ad spend is $8K+, a professional audit pays for itself: on average it uncovers 15-25% wasted spend that can be eliminated in the first month.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I run a Google Ads audit myself, or do I need a specialist?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">You can do it yourself if you follow the checklist in this guide and have a technical understanding of Google Ads. A specialist or agency will identify problems faster, though, because they see 10-20+ accounts a month and know what&apos;s normal versus a red flag. An external review also eliminates confirmation bias. If your ad spend is $5K+ a month, I recommend a professional audit at least once a year for a second opinion.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What&apos;s the most common problem a Google Ads audit uncovers?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">The top three problems are: (1) <strong>irrelevant search terms</strong> — they waste 15-30% of the budget when there&apos;s no negative keyword list or it isn&apos;t maintained, (2) <strong>inaccurate conversion tracking</strong> — it&apos;s either broken or recording duplicate conversions, so the algorithm makes bad decisions, and (3) <strong>poor budget allocation</strong> — weak campaigns overspend while good campaigns sit limited by budget.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How long until an audit produces visible results?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0"><strong>Quick wins</strong> (adding negative keywords, removing the Display Network from Search campaigns, budget reallocation) deliver results in 7-14 days. <strong>Medium optimizations</strong> (ad copy improvements, bidding adjustments) take 2-4 weeks. <strong>Deep changes</strong> (campaign restructuring, a new bidding strategy) can take 4-8 weeks. Smart Bidding always has a 7-14 day learning period after each change.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What should I do after a Google Ads audit?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Build a prioritized action list. Urgent (this week): conversion tracking errors and active issues burning budget. High priority (this month): negative keywords, ad improvements, Quality Score. Optimization (next 3 months): bidding strategy testing, landing page optimization, campaign expansion. Without prioritization, the audit remains just a list of problems.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Who implements the optimizations after a Google Ads audit?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">That depends on the agreement and your resources. Some specialists deliver only the audit report with prioritized recommendations (you implement it yourself). Others offer audit plus implementation as a package, and some offer audit plus ongoing monthly management. I recommend having the same person who ran the audit implement the changes — they know the context, the priorities, and the reasoning behind each recommendation.</p>
          </div>
        </details>
      </div>

      <hr />

      <h2 id="conclusion">Conclusion</h2>
      <p>
        A Google Ads audit isn&apos;t a one-time checklist — it&apos;s a systematic process that should become part of your regular workflow. In my experience, accounts that are audited regularly (a quarterly deep audit plus a monthly quick check) perform 20-30% better than accounts left on &quot;set and forget&quot;.
      </p>

      <p>
        This guide covers the 80+ checkpoints across 10 categories that I&apos;ve personally used on 50+ accounts over the past several years. Not everything applies to every business — if you don&apos;t run eCommerce, skip conversion value tracking — but the basics (conversion tracking, search terms, budget allocation, ad quality) are universal across industries.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">When I take over a new account, the first thing I run is always a detailed Google Ads audit. It gives me a clear picture of where the problems are, where the quick wins are, and where the long-term growth opportunities lie. Without an audit, optimization is improvisation — and improvisation wastes money.</p>
      </div>

      <p>
        If you don&apos;t have the time or experience to run a detailed audit yourself, I recommend bringing in a specialist. An investment of $400-1,200 in a professional audit pays for itself many times over once it uncovers 15-25% wasted spend or missed scaling opportunities.
      </p>

      <p>
        To continue optimizing after the audit, read: <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimizacija" } }}>Google Ads optimization guide</Link> and <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }}>Most common Google Ads mistakes</Link>.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Need a professional Google Ads audit?</p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">I audit accounts of all sizes — from startups to enterprise clients. You get an 80+ checkpoint audit report, a prioritized action plan, implementation recommendations, and a follow-up consultation.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Schedule a free consultation</Link>
      </div>

      <hr />

      <h2 id="related-guides">Related guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/google-ads-audit" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Professional Google Ads Audit</p>
          <p className="text-xs text-gray-500 mb-0">A detailed account analysis with an action plan</p>
        </Link>
        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Management</p>
          <p className="text-xs text-gray-500 mb-0">Professional account management after the audit — optimization and reporting</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking guide</p>
          <p className="text-xs text-gray-500 mb-0">How to set up conversion tracking and troubleshoot problems</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Quality Score guide</p>
          <p className="text-xs text-gray-500 mb-0">What Quality Score is and how to improve it for a lower CPC</p>
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
          <p className="text-xs text-gray-500 mb-0">Ongoing optimization after the audit — what to do monthly and weekly</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">How much does Google Ads cost</p>
          <p className="text-xs text-gray-500 mb-0">Budget planning and CPC benchmarks by industry</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing guide</p>
          <p className="text-xs text-gray-500 mb-0">How to set up remarketing lists and strategies for better conversions</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Most common Google Ads mistakes</p>
          <p className="text-xs text-gray-500 mb-0">20+ of the most common mistakes and how to avoid them</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        <p className="mb-1"><strong>Author:</strong> Slobodan Jelisavac, Google Ads Specialist</p>
        <p className="mb-0">Last updated: July 2026</p>
      </div>
    </>
  );
}
