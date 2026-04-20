import { Link } from "@/i18n/navigation";

export default function SmartBiddingGuideEN() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR — Smart Bidding 2026</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google Smart Bidding analyses millions of signals in real time to optimise every ad auction.
          95% of well-run accounts use some form of automated bidding — but only 30% set it up correctly.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">70M+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">signals per auction</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">+20%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">typical conversion lift</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7–14</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">day learning period</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">6</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">bidding strategies in 2026</p>
          </div>
        </div>
        <p className="text-sm text-slate-400 mt-6 mb-0 border-t border-slate-700 pt-4">
          Sources: Google Ads Help Center, Google Marketing Live 2025, experience from 10+ accounts (2024–2026).
        </p>
      </div>

      {/* Quick Answer — featured snippet block */}
      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-5 md:p-6 my-8">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">Quick Answer</p>
        <p className="text-base md:text-lg font-heading font-semibold text-blue-900 mb-0">
          Smart Bidding is Google&apos;s suite of automated bid strategies that use machine learning to
          optimise bids in real time at every auction, aiming to maximise conversions or conversion value
          within a set budget or CPA/ROAS target.
        </p>
      </div>

      <p>
        Manual bidding is dead for 95% of accounts in 2026 — but that doesn&apos;t mean you should blindly
        enable Smart Bidding and forget about it. The difference between accounts achieving 4x ROAS with
        Smart Bidding and those burning budget without results isn&apos;t the strategy itself — it&apos;s
        how it&apos;s set up, when it&apos;s applied, and how well you understand what&apos;s happening under the hood.
      </p>
      <p>
        From testing across 10+ accounts in 2024–2026 — from UK skincare and fashion eCommerce to Serbian
        local services and global moto parts targeting the US market — every strategy has been tested in
        different contexts. What works for a large eCommerce account with 500+ conversions per month doesn&apos;t apply identically to
        a local towing service with 30 calls per month. Context is everything.
      </p>
      <p>
        This guide covers every Smart Bidding strategy, when to use each, common mistakes, and real client
        examples — with specific frameworks for eCommerce, Lead Gen, and local services.
      </p>

      <hr />

      <h2>What is Smart Bidding and How Does the AI Work</h2>

      <p>
        Smart Bidding is a subset of automated bid strategies in Google Ads that use auction-time machine
        learning — meaning the algorithm makes a bidding decision at the moment of each auction, not
        according to a schedule you set in advance. Every time a user searches and your ad enters an
        auction, Google analyses tens of millions of signals in milliseconds and calculates the optimal bid.
      </p>

      <p>
        Which signals go into this calculation? Google officially identifies these categories:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Signal Category</th>
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Examples</th>
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Device</td>
              <td className="py-3 px-4 border-b border-gray-200">Desktop, mobile, tablet, browser type</td>
              <td className="py-3 px-4 border-b border-gray-200 text-green-700 font-semibold">High</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Location</td>
              <td className="py-3 px-4 border-b border-gray-200">Physical location, IP, language, local trends</td>
              <td className="py-3 px-4 border-b border-gray-200 text-green-700 font-semibold">High</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Time</td>
              <td className="py-3 px-4 border-b border-gray-200">Day of week, time of day, season</td>
              <td className="py-3 px-4 border-b border-gray-200 text-orange-600 font-semibold">Medium</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Audience</td>
              <td className="py-3 px-4 border-b border-gray-200">Remarketing lists, custom intent, demographics</td>
              <td className="py-3 px-4 border-b border-gray-200 text-green-700 font-semibold">High</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Search query</td>
              <td className="py-3 px-4 border-b border-gray-200">Query, match type, user search history</td>
              <td className="py-3 px-4 border-b border-gray-200 text-green-700 font-semibold">High</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Browser / OS</td>
              <td className="py-3 px-4 border-b border-gray-200">Chrome, Safari, Firefox, iOS vs Android</td>
              <td className="py-3 px-4 border-b border-gray-200 text-gray-500">Low</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Site context</td>
              <td className="py-3 px-4 border-b border-gray-200">Topic of the page where the ad appears (Display)</td>
              <td className="py-3 px-4 border-b border-gray-200 text-orange-600 font-semibold">Medium</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">List activity</td>
              <td className="py-3 px-4 border-b border-gray-200">Prior visits, interactions with your site</td>
              <td className="py-3 px-4 border-b border-gray-200 text-green-700 font-semibold">High</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The key difference between Smart Bidding and manual bid adjustments: you can set a mobile bid
        adjustment of -20%, but the algorithm can recognise in real time that a specific user on mobile
        at 7pm on a Thursday who has already visited your site once has a 3x higher probability of
        converting than the average user — and automatically raise the bid just for them. The granularity
        is simply not achievable manually.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-5 my-6">
        <p className="font-semibold text-yellow-900 text-sm mb-1">Important: &quot;Smart Bidding&quot; vs &quot;Automated Bidding&quot;</p>
        <p className="text-yellow-800 text-sm mb-0">
          All Smart Bidding strategies are automated, but not all automated strategies are Smart Bidding.
          Maximize Clicks and Target Impression Share are automated, but they don&apos;t use conversion signals —
          so they&apos;re not part of the Smart Bidding family. True Smart Bidding strategies are: Maximize
          Conversions, Maximize Conversion Value, Target CPA, and Target ROAS.
        </p>
      </div>

      <hr />

      <h2>6 Bidding Strategies — Who, What, When</h2>

      <p>
        Google Ads offers six primary bid strategies in 2026. Each has its purpose, optimal context,
        and situations where you should not use it. From testing across 10+ accounts, here is an honest
        assessment of each.
      </p>

      <div className="space-y-5 my-8">

        <div className="bg-white border-2 border-blue-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div className="flex-1">
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Maximize Conversions</h3>
              <p className="text-sm text-gray-700 mb-2">
                Spends the full budget to achieve as many conversions as possible, without a cost target.
                The algorithm bids freely — it may pay a high CPA if it believes a conversion will occur.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-800 mb-1">When to use</p>
                  <ul className="text-xs text-green-900 space-y-1 mb-0">
                    <li>New accounts without data (&lt;50 conv/month)</li>
                    <li>New local service account: immediately on day 1</li>
                    <li>Campaigns entering a new audience segment</li>
                    <li>When volume matters more than efficiency</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-800 mb-1">When NOT to use</p>
                  <ul className="text-xs text-red-900 space-y-1 mb-0">
                    <li>When CPA is critical for profitability</li>
                    <li>Budgets without a hard monthly cap</li>
                    <li>eCommerce without value tracking</li>
                    <li>When conversions are poorly defined</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-9 h-9 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div className="flex-1">
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Maximize Conversion Value</h3>
              <p className="text-sm text-gray-700 mb-2">
                Spends the full budget to achieve the highest total conversion value. The difference from
                Maximize Conversions: the algorithm prefers higher-value conversions over more conversions.
                Requires conversion value tracking (mandatory for eCommerce).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-800 mb-1">When to use</p>
                  <ul className="text-xs text-green-900 space-y-1 mb-0">
                    <li>eCommerce with varying product prices</li>
                    <li>When higher average order value is a priority</li>
                    <li>Before moving to tROAS (data collection phase)</li>
                    <li>New eCommerce accounts tracking revenue</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-800 mb-1">When NOT to use</p>
                  <ul className="text-xs text-red-900 space-y-1 mb-0">
                    <li>Lead Gen (all conversions same value)</li>
                    <li>Local services (calls are calls)</li>
                    <li>When you don&apos;t track conversion value</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-9 h-9 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div className="flex-1">
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Target CPA (tCPA)</h3>
              <p className="text-sm text-gray-700 mb-2">
                The algorithm attempts to achieve conversions at a target average cost per acquisition.
                Some conversions will cost more, some less — but the average should land near your target.
                The go-to strategy for mature Lead Gen accounts.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-800 mb-1">When to use</p>
                  <ul className="text-xs text-green-900 space-y-1 mb-0">
                    <li>50+ conversions in last 30 days (minimum)</li>
                    <li>Stable CPA history (2+ weeks)</li>
                    <li>Lead Gen where lead value is known</li>
                    <li>Local service (towing): target €15–20 per call</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-800 mb-1">When NOT to use</p>
                  <ul className="text-xs text-red-900 space-y-1 mb-0">
                    <li>New accounts without data</li>
                    <li>CPA target well below actual average</li>
                    <li>eCommerce with varying AOV</li>
                    <li>Fewer than 30 conversions/month</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-yellow-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-9 h-9 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div className="flex-1">
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Target ROAS (tROAS)</h3>
              <p className="text-sm text-gray-700 mb-2">
                The algorithm optimises toward a target return on ad spend (revenue ÷ ad cost × 100%).
                The most powerful strategy for mature eCommerce — but the most demanding in terms of
                data quality. Typically introduced from month 4 onwards once data is stable.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-800 mb-1">When to use</p>
                  <ul className="text-xs text-green-900 space-y-1 mb-0">
                    <li>50+ conversions + value tracking (minimum)</li>
                    <li>eCommerce with consistent AOV</li>
                    <li>You know your margins and target ROAS</li>
                    <li>UK skincare example: tROAS 500% (for POAS profitability)</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-800 mb-1">When NOT to use</p>
                  <ul className="text-xs text-red-900 space-y-1 mb-0">
                    <li>Lead Gen (no real conversion value)</li>
                    <li>Fewer than 50 conversions/month</li>
                    <li>ROAS target unrealistically high (algorithm freezes)</li>
                    <li>New accounts in data collection phase</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-orange-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-9 h-9 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div className="flex-1">
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Maximize Clicks</h3>
              <p className="text-sm text-gray-700 mb-2">
                An automated (but not Smart Bidding) strategy — spends budget to generate as many clicks
                as possible. Does not use conversion signals. Useful for brand awareness and keyword
                research, but without optimisation toward business goals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-800 mb-1">When to use</p>
                  <ul className="text-xs text-green-900 space-y-1 mb-0">
                    <li>New account — collecting Search Terms data</li>
                    <li>Brand awareness campaigns</li>
                    <li>Testing new keyword sets</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-800 mb-1">When NOT to use</p>
                  <ul className="text-xs text-red-900 space-y-1 mb-0">
                    <li>Performance accounts targeting sales</li>
                    <li>Lead Gen campaigns</li>
                    <li>Long-term — replace with Smart Bidding</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-9 h-9 bg-gray-700 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div className="flex-1">
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Manual CPC (+ Enhanced CPC)</h3>
              <p className="text-sm text-gray-700 mb-2">
                You set the bid for each keyword. Enhanced CPC is a hybrid — you set the base bid, but
                Google can increase it up to 30% for auctions with higher conversion probability. Manual
                CPC is relevant in specific situations, but for 95% of accounts there are better options.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-800 mb-1">When to use</p>
                  <ul className="text-xs text-green-900 space-y-1 mb-0">
                    <li>Very small budgets (&lt;€100/month) with no room for the algorithm</li>
                    <li>Hyper-specific targeting where every click must be approved</li>
                    <li>Short transitional phase between strategies</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-800 mb-1">When NOT to use</p>
                  <ul className="text-xs text-red-900 space-y-1 mb-0">
                    <li>Almost always in 2026 — better options exist</li>
                    <li>Accounts with enough conversions for Smart Bidding</li>
                    <li>eCommerce and Lead Gen with data history</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <hr />

      <h2>Decision Framework — Which Strategy to Choose</h2>

      <p>
        The most common question I get: &quot;Which bidding strategy should I use?&quot; The answer depends on
        three factors: monthly conversion volume, campaign goal, and whether you track conversion value.
        Here is the decision tree I use for every new account I take over.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 my-8">
        <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-4">Decision Tree — Bidding Strategy</p>

        <div className="space-y-4">
          <div className="border border-slate-600 rounded-lg p-4">
            <p className="text-sm font-bold text-yellow-400 mb-2">Step 1: How many conversions per month?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs font-bold text-blue-300 mb-1">&lt;30 conv/month</p>
                <p className="text-xs text-slate-300 mb-0">→ Maximize Conversions (no tCPA target)</p>
              </div>
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs font-bold text-blue-300 mb-1">30–80 conv/month</p>
                <p className="text-xs text-slate-300 mb-0">→ Maximize Conversions → transition to tCPA</p>
              </div>
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs font-bold text-blue-300 mb-1">80+ conv/month</p>
                <p className="text-xs text-slate-300 mb-0">→ tCPA or tROAS (depending on step 2)</p>
              </div>
            </div>
          </div>

          <div className="border border-slate-600 rounded-lg p-4">
            <p className="text-sm font-bold text-yellow-400 mb-2">Step 2: Do you track conversion value?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs font-bold text-blue-300 mb-1">YES (eCommerce revenue tracking)</p>
                <p className="text-xs text-slate-300 mb-0">→ Maximize Conv. Value → tROAS</p>
              </div>
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs font-bold text-blue-300 mb-1">NO (Lead Gen / Local services)</p>
                <p className="text-xs text-slate-300 mb-0">→ Maximize Conversions → tCPA</p>
              </div>
            </div>
          </div>

          <div className="border border-slate-600 rounded-lg p-4">
            <p className="text-sm font-bold text-yellow-400 mb-2">Step 3: What is the primary goal?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs font-bold text-blue-300 mb-1">Conversion volume</p>
                <p className="text-xs text-slate-300 mb-0">→ Maximize Conversions / tCPA</p>
              </div>
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs font-bold text-blue-300 mb-1">Value / ROAS</p>
                <p className="text-xs text-slate-300 mb-0">→ Maximize Conv. Value / tROAS</p>
              </div>
              <div className="bg-slate-800 rounded p-3">
                <p className="text-xs font-bold text-blue-300 mb-1">Visibility / awareness</p>
                <p className="text-xs text-slate-300 mb-0">→ Target Impression Share</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2>Conversion Volume Requirements — Myth vs Reality</h2>

      <p>
        Google officially recommends a <strong>minimum of 50 conversions in 30 days</strong> before moving to tCPA
        or tROAS. This is correct as a theoretical optimum — but it&apos;s not an absolute rule. From experience
        across 10+ accounts, the reality is somewhat more flexible.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Strategy</th>
              <th className="py-3 px-4 text-center font-heading font-semibold text-gray-900">Google Recommendation</th>
              <th className="py-3 px-4 text-center font-heading font-semibold text-gray-900">Real-World Minimum</th>
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Maximize Conversions</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">No min.</td>
              <td className="py-3 px-4 text-center border-b border-gray-200 text-green-700 font-semibold">0+ (immediately)</td>
              <td className="py-3 px-4 border-b border-gray-200">Ideal for new accounts</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Target CPA</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">50/30d</td>
              <td className="py-3 px-4 text-center border-b border-gray-200 text-orange-600 font-semibold">30–40/30d</td>
              <td className="py-3 px-4 border-b border-gray-200">Below 30: Maximize Conv. is better</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Target ROAS</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">50/30d</td>
              <td className="py-3 px-4 text-center border-b border-gray-200 text-orange-600 font-semibold">30–50/30d</td>
              <td className="py-3 px-4 border-b border-gray-200">Requires conversion value tracking too</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Maximize Conv. Value</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">No min.</td>
              <td className="py-3 px-4 text-center border-b border-gray-200 text-green-700 font-semibold">15–20/30d</td>
              <td className="py-3 px-4 border-b border-gray-200">But value tracking is required</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card my-6">
        <p className="text-sm font-bold text-gray-900 mb-3">POAS vs ROAS — A Critical Distinction for eCommerce</p>
        <p className="text-sm text-gray-700 mb-3">
          ROAS (Return on Ad Spend) measures revenue ÷ ad cost. But revenue is not profit.
          <strong> POAS (Profit on Ad Spend)</strong> = profit ÷ ad cost — that is the metric that truly
          measures campaign health. For one UK skincare account, the goal was never maximum ROAS, but a POAS
          that ensures profitability at a given ad spend level.
        </p>
        <p className="text-sm text-gray-700 mb-0">
          Practical implication: if your gross margin is 40% and ROAS is 3x, you&apos;re at break-even.
          If ROAS rises to 5x with 30% less volume, you may actually earn more. Your tROAS target
          should be calibrated against your margin, not against industry averages.
        </p>
      </div>

      <hr />

      <h2>Learning Period — What to Expect and What Not to Do</h2>

      <p>
        The learning period is one of the least understood aspects of Smart Bidding. When you launch a
        new campaign or change a bid strategy, Google&apos;s algorithm goes through a learning phase that
        typically lasts <strong>7–14 days</strong>. During this period, performance can be unstable — higher CPA,
        lower ROAS, uneven spend.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-5 my-6">
        <p className="font-semibold text-red-900 text-sm mb-2">Most common mistake: intervening during the learning period</p>
        <p className="text-red-800 text-sm mb-0">
          Every change during the learning period restarts it. Changing the budget by more than 20%,
          changing the tCPA target, adding new keywords, pausing an ad group — all of these can restart
          learning. The result: the account is permanently in a learning period and never reaches stable
          performance. From experience: give the algorithm a minimum of 14 days without intervention
          before evaluating results.
        </p>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Period</th>
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">What happens</th>
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">What to do</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Days 1–3</td>
              <td className="py-3 px-4 border-b border-gray-200">Algorithm explores; CPA may be 2–3x higher</td>
              <td className="py-3 px-4 border-b border-gray-200">Do NOT intervene</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Days 4–7</td>
              <td className="py-3 px-4 border-b border-gray-200">Algorithm begins finding patterns</td>
              <td className="py-3 px-4 border-b border-gray-200">Monitor; don&apos;t change key parameters</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Days 8–14</td>
              <td className="py-3 px-4 border-b border-gray-200">Performance stabilises, CPA normalises</td>
              <td className="py-3 px-4 border-b border-gray-200">Safe to evaluate results</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Days 15–30</td>
              <td className="py-3 px-4 border-b border-gray-200">Full potential — baseline for optimisation</td>
              <td className="py-3 px-4 border-b border-gray-200">Gradual target adjustment (max 20%/change)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2>Common Smart Bidding Mistakes — From Auditing 10+ Accounts</h2>

      <p>
        Every time I take over a new account, I audit the bidding setup. Here are 8 mistakes I see
        most frequently — each of them directly impacting performance:
      </p>

      <div className="space-y-4 my-8">

        <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">1. tCPA target set too low from day one</p>
          <p className="text-sm text-gray-600 mb-0">
            The most common mistake. Someone wants a €5 CPA but the historical average was €15. The algorithm
            can&apos;t find enough auctions at that price — spend drops to near zero. Rule: set tCPA 20–30% above
            your current average, then reduce it gradually.
          </p>
        </div>

        <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">2. Changing strategy every week</p>
          <p className="text-sm text-gray-600 mb-0">
            Maximize Conversions one week, tCPA the next, Manual CPC after that. The algorithm never
            exits the learning period. Stability is a prerequisite for Smart Bidding performance.
            Minimum 3–4 weeks per strategy before evaluation.
          </p>
        </div>

        <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">3. Portfolio bidding without understanding it</p>
          <p className="text-sm text-gray-600 mb-0">
            Portfolio bid strategy allows one shared strategy across multiple campaigns. Useful for accounts
            with low conversion volume per campaign — the algorithm learns from all campaigns together.
            But if campaigns have very different goals, a portfolio loses granularity.
          </p>
        </div>

        <div className="bg-white border-l-4 border-orange-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">4. tROAS on an account with fewer than 30 conversions</p>
          <p className="text-sm text-gray-600 mb-0">
            tROAS requires not just conversions but conversion values. With 20 conversions per month
            and a tROAS target of 400%, the algorithm is so restrictive it barely spends the budget.
            Maximize Conversion Value without a tROAS target is a better choice at that stage.
          </p>
        </div>

        <div className="bg-white border-l-4 border-orange-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">5. Ignoring the Bid Strategy Report</p>
          <p className="text-sm text-gray-600 mb-0">
            Inside the campaign settings, there is a Bid Strategy Report that shows how the algorithm
            is performing against your target. Most users never open it. This is the most direct insight
            into whether your target is achievable — if it shows &quot;Limited by budget,&quot; increase the
            budget, not the target.
          </p>
        </div>

        <div className="bg-white border-l-4 border-orange-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">6. Enabling Smart Bidding without conversion tracking</p>
          <p className="text-sm text-gray-600 mb-0">
            Smart Bidding without accurate tracking is worse than Manual CPC. The algorithm optimises
            toward the wrong signals. Verify your conversions are correctly set up before activating.
            Conversions must be set as Primary (not Secondary) for Smart Bidding to use them.
          </p>
        </div>

        <div className="bg-white border-l-4 border-yellow-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">7. Ignoring Auction Insights during strategy changes</p>
          <p className="text-sm text-gray-600 mb-0">
            Auction Insights shows your Impression Share compared to competitors. If you switched to
            tROAS and IS dropped from 60% to 20%, it means the algorithm considers most auctions
            unprofitable at your target. Either the target is too aggressive or the budget is too small.
          </p>
        </div>

        <div className="bg-white border-l-4 border-yellow-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">8. Changing budget by 50%+ at once</p>
          <p className="text-sm text-gray-600 mb-0">
            Drastic budget changes (up or down) can destabilise the algorithm. Recommendation: max
            15–20% change per step, with a 5–7 day gap between changes. For seasonal increases
            (Black Friday), use Seasonality Adjustments instead of direct budget changes.
          </p>
        </div>

      </div>

      <hr />

      <h2>Smart Bidding by Business Type — Three Different Approaches</h2>

      <p>
        One size does not fit all. The strategy for an eCommerce brand is fundamentally different from
        a local plumber. Here is how I approach Smart Bidding for the three types of accounts I manage.
      </p>

      <h3>eCommerce accounts — UK skincare, global moto parts, Croatian multi-category</h3>

      <p>
        eCommerce is the ideal context for Smart Bidding because there is a clear conversion value —
        revenue from each order. The progression is almost always the same:
      </p>

      <ol>
        <li><strong>Months 1–2:</strong> Maximize Conversion Value (no tROAS) — collecting value data</li>
        <li><strong>Month 3:</strong> Gradually introduce tROAS target (20–30% above current ROAS)</li>
        <li><strong>Month 4+:</strong> Gradually lower tROAS toward the target level</li>
        <li><strong>Mature phase:</strong> tROAS + Portfolio bidding with separate strategies for branded vs non-branded</li>
      </ol>

      <p>
        For a UK skincare account, we use a tROAS strategy with a target that reflects POAS — not just ROAS.
        The reason: their gross margin varies by product category, so the target is calibrated against
        the product mix that delivers profitability at account level, not just revenue.
      </p>

      <p>
        <strong>Tiered Shopping framework</strong> (a personal innovation from practice): separate campaigns
        for New Customers, Returning Customers, and a Feeder campaign for prospecting. Each has a different
        tROAS target because different user segments convert differently. Returning customers convert at
        ~30% lower CPA — a more aggressive bid is justified.
      </p>

      <h3>Lead Gen accounts (local services, B2B)</h3>

      <p>
        Lead Gen is more complex because conversions don&apos;t have a monetary value in the tracking system —
        a call or form submission is the conversion, but the lead value is unknown to Google. Recommended approach:
      </p>

      <ol>
        <li><strong>Phase 1:</strong> Maximize Conversions — building volume</li>
        <li><strong>Phase 2:</strong> tCPA when CPA history is stable (min 30 conversions/month)</li>
        <li><strong>Advanced option:</strong> Assign conversion values (lead scoring) and move to Maximize Conv. Value</li>
      </ol>

      <h3>Local services — plumber, cleaning service (Serbia)</h3>

      <p>
        For local service businesses (plumber, cleaning, emergency response), geographic targeting is
        the critical factor that Smart Bidding must respect. Recommended approach:
      </p>

      <ul>
        <li>Maximize Conversions initially — very common for this category</li>
        <li>Maximize Conversion Value if you track service value (e.g. average invoice)</li>
        <li>Target CPA only with 40+ quality conversions per month</li>
        <li>Ad Scheduling + Smart Bidding combination: define working hours, let the algorithm bid within those hours</li>
      </ul>

      <hr />

      <h2>Bidding Strategy Migration Playbook</h2>

      <p>
        Moving from Manual CPC to Smart Bidding, or migrating between Smart Bidding strategies, requires
        a plan. An abrupt change destabilises the algorithm and can cause a performance drop. Here is the
        playbook I use when taking over new accounts:
      </p>

      <div className="space-y-3 my-8">
        {[
          {
            num: 1,
            title: "Audit conversion tracking",
            desc: "First: are conversions correctly set up? Primary vs Secondary conversions, Enhanced Conversions enabled, GA4 import active? Smart Bidding without accurate tracking is a disaster.",
            time: "Day 1"
          },
          {
            num: 2,
            title: "Analyse current performance data",
            desc: "What is the current average CPA/ROAS? What is the monthly conversion volume? What is the learning period status? Document a baseline for comparison.",
            time: "Days 1–2"
          },
          {
            num: 3,
            title: "Select starting strategy",
            desc: "For accounts without Smart Bidding: always start with Maximize Conversions (no target). For accounts that already have data: can go directly to tCPA/tROAS if conditions are met.",
            time: "Day 2"
          },
          {
            num: 4,
            title: "Change strategy + document",
            desc: "Change the strategy. Record the change date in the account and an internal document. The learning period starts immediately — do not intervene for the next 14 days.",
            time: "Day 3"
          },
          {
            num: 5,
            title: "Learning period — monitor without intervening",
            desc: "Monitor the Bid Strategy Report daily. If you see 'Limited by budget' — increase budget (not the target). If you see 'Learning' status — be patient. No changes to key parameters.",
            time: "Days 4–14"
          },
          {
            num: 6,
            title: "Evaluate after exiting the learning period",
            desc: "Compare performance before/after (same period, year-over-year or previous month). Is CPA/ROAS within the target range? If CPA is 20% above target — wait another week before adjusting.",
            time: "Days 15–21"
          },
          {
            num: 7,
            title: "Gradual target optimisation",
            desc: "If performance is good: lower tCPA by 10–15%, or raise tROAS by 10–15%. Wait 2 weeks. Repeat until you reach the target level. Never more than 20% at a time.",
            time: "Day 22+"
          }
        ].map((item) => (
          <div key={item.num} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-card">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">{item.num}</span>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <p className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</p>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full flex-shrink-0">{item.time}</span>
              </div>
              <p className="text-xs text-gray-600 mb-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <hr />

      <h2>Conclusion — Smart Bidding Is Not Set-and-Forget</h2>

      <p>
        Smart Bidding is the most powerful tool in the Google Ads arsenal — but only if you understand
        what it does and what you cannot expect from it. The algorithm is good at optimising toward the
        goal you give it. Your job is to give it the correct goal, correct conversions, and enough time
        to learn.
      </p>

      <p>
        From testing across 10+ accounts in 2024–2026, a summary that holds regardless of business type:
      </p>

      <ul>
        <li><strong>New account?</strong> Maximize Conversions, no target, minimum 4 weeks before evaluation</li>
        <li><strong>30+ conversions?</strong> Consider tCPA — but set the target 20% above current average</li>
        <li><strong>eCommerce with revenue tracking?</strong> Maximize Conv. Value → tROAS progression</li>
        <li><strong>Smart Bidding underperforming?</strong> The problem is almost always tracking or the target, not the strategy</li>
        <li><strong>Don&apos;t change anything in the first 14 days</strong> — the learning period is sacred</li>
      </ul>

      <p>For deeper Google Ads campaign optimisation, see:</p>
      <ul>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimization" } }}
            className="underline font-medium"
          >
            Google Ads Optimization: 30 Proven Tactics [2026]
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-guide" } }}
            className="underline font-medium"
          >
            Conversion Tracking for Google Ads: Why Your Campaigns Aren&apos;t Working
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-guide" } }}
            className="underline font-medium"
          >
            Performance Max: Complete eCommerce Guide [2026]
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "how-much-does-google-ads-cost" } }}
            className="underline font-medium"
          >
            How Much Does Google Ads Cost? Prices, Budgets &amp; ROI [2026]
          </Link>
        </li>
      </ul>

      <hr />

      <h2>Frequently Asked Questions About Smart Bidding</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How many conversions do you need for Smart Bidding?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            For <strong>Maximize Conversions</strong> (no target) — zero, you can start immediately. For <strong>Target CPA</strong> —
            Google recommends 50/30d; in practice it works with 30–40 if CPA is stable. For <strong>Target ROAS</strong> —
            50/30d plus mandatory conversion value tracking. Real-world minimum from experience: 30 conversions
            per month before tCPA/tROAS delivers stable performance.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Target CPA or Target ROAS — which is better?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Depends on your business type. <strong>tCPA</strong> is better for Lead Gen (calls, forms) where all
            conversions have similar value. <strong>tROAS</strong> is better for eCommerce where different products
            have different prices — the algorithm then prefers higher-value conversions. If you don&apos;t
            track conversion value, tROAS is not an option.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How long does the learning period last and what resets it?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Typically <strong>7–14 days</strong>. The learning period resets when you: change bid strategy, change
            tCPA/tROAS target by more than 20%, change budget by more than 20%, add/remove keywords or ad groups,
            or pause and reactivate a campaign. Each of these changes sends the algorithm back to the start —
            which is why stability is critical, especially in the first weeks.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What is Portfolio Bidding and when should you use it?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Portfolio Bid Strategy is a shared strategy applied across multiple campaigns simultaneously.
            The algorithm learns from the combined conversions of all campaigns in the portfolio. Useful for:
            accounts where each campaign has too few conversions for standalone Smart Bidding, but together
            they have 50+/month. For example, 3 campaigns with 15 conversions each per month = 45 combined —
            a portfolio gives them enough signal for tCPA.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why is Smart Bidding spending budget but generating no conversions?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Most common reasons: (1) <strong>poor conversion tracking</strong> — algorithm receiving wrong signals;
            (2) <strong>landing page problem</strong> — traffic arrives but doesn&apos;t convert, which the algorithm can&apos;t see;
            (3) <strong>overly aggressive target</strong> — tROAS 800% with 20 conversions/month freezes spend;
            (4) <strong>learning period</strong> — give it 14 days before evaluating. Step 1 always: verify conversions
            are firing correctly in Google Tag Assistant.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does Manual CPC make sense in 2026?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            For 95% of accounts — no. Manual CPC only makes sense in specific situations: very small budgets
            (&lt;€80/month) where the algorithm has no room to operate, hyper-specific targeting where every
            click must be controlled, or a short transitional phase between strategies. Everything else is
            better served by Smart Bidding. Enhanced CPC is a solid compromise if you&apos;re unsure.
          </div>
        </details>
      </div>

      <hr />

      <h2>Sources and Official Documentation</h2>

      <ul>
        <li>
          <a
            href="https://support.google.com/google-ads/answer/2979071"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Google Ads Help: About Smart Bidding
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/google-ads/answer/7065882"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Google Ads Help: Target CPA bidding
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/google-ads/answer/6268637"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Google Ads Help: Target ROAS bidding
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/google-ads/answer/7365136"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Google Ads Help: Seasonality adjustments for Smart Bidding
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/google-ads/answer/2994573"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Google Ads Help: About the bid strategy report
          </a>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimization" } }}
            className="underline"
          >
            Google Ads Optimization: 30 Proven Tactics [internal guide]
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-guide" } }}
            className="underline"
          >
            Conversion Tracking Guide [internal guide]
          </Link>
        </li>
      </ul>
    </>
  );
}
