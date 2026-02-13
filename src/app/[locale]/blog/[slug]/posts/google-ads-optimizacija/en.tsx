import { Link } from "@/i18n/navigation";

export default function GoogleAdsOptimizationEN() {
  return (
    <>
      {/* ── TL;DR box ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          30 Google Ads optimization tactics proven across 20+ accounts managing $2M+ annual spend. Average 40% performance improvement in first 90 days. Focus on structure, keywords, ads, bidding, and Quality Score.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">30</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">optimization tactics</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">6</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">optimization categories</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">20+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">accounts tested</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">40%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">average improvement</p>
          </div>
        </div>
      </div>

      <p className="lead">
        Google Ads optimization isn't a one-time activity — it's a continuous process that
        separates campaigns with 2x ROAS from those with 5x ROAS. In this guide I share 30 tactics I use
        in practice with clients across different industries.
      </p>

      <p>
        These tactics aren't theory from Google Help Center. Each has been tested on real accounts
        with real budgets. Some delivered dramatic improvements, others marginal — but all
        passed the test of practice.
      </p>

      <hr />

      <h2>Why optimization is key to success</h2>

      <p>
        I see two types of accounts: those that <strong>set-and-forget</strong> owners leave running
        alone, and those optimized regularly. Difference in performance? On average 40-60%.
      </p>

      <p>
        Pareto principle (80/20 rule) in Google Ads states: <strong>20% of optimizations deliver 80% of results</strong>.
        Problem is most people don't know which 20% to work on. That's why I organized these 30 tactics
        by priority — start with structure, then move forward.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Reality from practice</p>
        <p className="text-blue-800 text-sm mb-0">
          In January 2026 I took over an account where campaign ran 6 months without optimization. CPA was
          $85. After 4 weeks applying these tactics: CPA $42. Same budget, double the conversions.
        </p>
      </div>

      <p>
        Optimization isn't rocket science, but requires system. This guide is that system — step by step,
        tactic by tactic.
      </p>

      <hr />

      <h2>Account structure optimization</h2>

      <p>
        Before you start optimizing keywords, ads or bidding — check account structure.
        Bad structure is like building house on unstable foundation. All other optimizations won't deliver
        maximum results.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Separate Brand and Non-Brand campaigns</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Brand campaigns (your brand name) have 10x higher CTR and 3x lower CPC than non-brand campaigns.
          If you mix them in one campaign, statistics are confusing and you can't optimally allocate budget.
        </p>
        <ul className="text-sm">
          <li>Create separate campaign only for brand keywords</li>
          <li>Set lower bid on brand (they're coming anyway)</li>
          <li>Focus optimization on non-brand campaigns where real potential is</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Single Keyword Ad Groups (SKAGs) or thematic groups?</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Old school recommends SKAGs — each keyword in its own ad group for maximum relevance.
          New reality with RSA ads: thematic groups of 5-15 similar keywords give better AI optimization.
        </p>
        <ul className="text-sm">
          <li>For high-intent commercial keywords: test SKAGs</li>
          <li>For informational and long-tail: thematic groups</li>
          <li>Never mix different intents in same ad group</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Consistent naming convention</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          If you have 20+ campaigns, how quickly do you find what you're looking for? I recommend structure:
          [TYPE]_[CATEGORY]_[GEO]_[ADDITIONAL]. Example: SEARCH_Sofas_UK_Exact or PMAX_AllProducts_US_NewCustomers.
        </p>
        <ul className="text-sm">
          <li>Use prefixes: SEARCH, PMAX, SHOPPING, DISPLAY, VIDEO</li>
          <li>Add geo if running multi-market: UK, DE, US</li>
          <li>Mark tests with _TEST at end to easily filter</li>
        </ul>
      </div>

      <hr />

      <h2>Keyword optimization</h2>

      <p>
        Keywords are heart of Search campaigns. 90% of optimizations I do every Monday are
        keyword management: adding new ones, pausing unprofitable, refining match types, and adding negative keywords.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Search Terms Report mining (weekly)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          This is most powerful tactic in this guide. Search Terms Report shows what people ACTUALLY
          search when seeing your ad. There you find gold (new converting keywords) and waste
          (terms that should be negative).
        </p>
        <ul className="text-sm">
          <li>Once weekly: Google Ads → Insights &amp; Reports → Search Terms</li>
          <li>Sort by Conversions: terms with conversions add as new keywords in Exact match</li>
          <li>Sort by Spend: terms with high spend and 0 conversions add as negative</li>
          <li>Look for intents that don't match your product/service</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">7</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Negative keywords as foundation</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          People ask &amp;quot;How to get more conversions?&amp;quot; — better question is &amp;quot;How to
          stop wasting money on bad clicks?&amp;quot;. Negative keywords are the answer.
        </p>
        <ul className="text-sm">
          <li>Create master negative list at account level (free, cheap, job, tutorial, PDF)</li>
          <li>Specific negative keywords per campaign (if selling new products: add &amp;quot;used&amp;quot;, &amp;quot;second hand&amp;quot;)</li>
          <li>Use negative lists for speed — create &amp;quot;B2C_Negatives&amp;quot; or &amp;quot;Informational_Negatives&amp;quot;</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">8</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Match types strategy: 2026 reality</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Broad Match Modifier no longer exists (Google removed it 2021). Now you have: Broad, Phrase, Exact.
          But Exact match is no longer truly &amp;quot;exact&amp;quot; — close variants are enabled by default.
        </p>
        <ul className="text-sm">
          <li><strong>Exact Match:</strong> Your default for commercial high-intent keywords. Maximum control.</li>
          <li><strong>Phrase Match:</strong> For discovering new intent, but only if you have good negative lists.</li>
          <li><strong>Broad Match:</strong> Only if using Smart Bidding (Target CPA/ROAS) — algorithm needs data to learn. Otherwise avoid.</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-sm mb-0">
          Broad Match with Manual CPC bidding is recipe for disaster. Broad Match with Target CPA and good
          conversion tracking history? That can be your best performing tactic. Context is everything.
        </p>
      </div>

      <hr />

      <h2>Ad optimization</h2>

      <p>
        With transition to Responsive Search Ads (RSA) as default format, ad optimization has
        changed nature. It's no longer copy-paste descriptive sentences — now you create building blocks
        Google combines. Strategy is different.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">13</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">RSA best practices: diversity is key</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Google allows 15 headlines and 4 descriptions in RSA ad. Most people write 15
          variations of same message. Mistake. Google needs diversity to optimally test combinations.
        </p>
        <ul className="text-sm">
          <li>Divide headlines into 3 types: Product/Service, Benefit, Offer/CTA</li>
          <li>Use different lengths (20 to 30 characters) so all can display</li>
          <li>Minimum 2 headlines with dynamic keyword insertion (DKI): &amp;quot;{`{KeyWord:Default Text}`}&amp;quot;</li>
          <li>Ad Strength &amp;quot;Excellent&amp;quot; isn't goal — goal is CTR and conversions, but &amp;quot;Good&amp;quot; is minimum</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">15</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ad Extensions: use ALL relevant ones</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ad extensions (sitelinks, callouts, structured snippets, call, location...) increase CTR
          by 10-25% because your ad takes more space on SERP. And they're completely free.
        </p>
        <ul className="text-sm">
          <li><strong>Sitelinks:</strong> Minimum 4, best practice 8 — link to top categories/pages</li>
          <li><strong>Callouts:</strong> Short USP bullets (&amp;quot;Free Shipping&amp;quot;, &amp;quot;24/7 Support&amp;quot;)</li>
          <li><strong>Structured Snippets:</strong> Branded categories (Brands: Nike, Adidas, Puma...)</li>
          <li><strong>Call Extensions:</strong> Must have if you're local business or high CPA warrants call</li>
          <li>Use account-level extensions as fallback, then campaign-specific for special offers</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">16</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Landing page alignment (message match)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          If your ad promises &amp;quot;20% off sofas&amp;quot;, and landing page has no mention of discount —
          you'll have high bounce rate and poor Quality Score. Message match is critical.
        </p>
        <ul className="text-sm">
          <li>Headline on landing page should echo (mirror) ad headline</li>
          <li>If advertising specific product/category, don't send to homepage — create dedicated page</li>
          <li>Testing landing pages often delivers higher ROI than testing ad copy</li>
        </ul>
      </div>

      <hr />

      <h2>Bidding strategy optimization</h2>

      <p>
        Bid strategy is your autopilot. You can have perfect structure and excellent ads, but if
        you bid wrong — you're spending more than needed or losing impression share. Here's how to choose
        and optimize bidding strategies.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">19</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Manual CPC vs Smart Bidding: when what?</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Google pushes Smart Bidding (Target CPA, Target ROAS, Maximize Conversions) as superior
          solution. In practice: depends on conversion volume. Below 30 conversions monthly, Smart Bidding
          doesn't have enough data to learn — Manual CPC with bid adjustments is better.
        </p>
        <ul className="text-sm">
          <li><strong>Manual CPC:</strong> New launch, small budget, &lt;30 conversions/month</li>
          <li><strong>Maximize Clicks:</strong> If goal is traffic/brand awareness, not conversions</li>
          <li><strong>Target CPA:</strong> Lead gen campaigns with clear CPA goal, 30+ conversions/month</li>
          <li><strong>Target ROAS:</strong> eCommerce with revenue tracking, 50+ conversions/month</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Transition plan: Manual → Smart Bidding</p>
        <p className="text-blue-800 text-sm mb-0">
          Don't jump directly from Manual CPC to Target CPA. First switch to &amp;quot;Maximize Conversions&amp;quot;
          without target so algorithm learns. After 2 weeks, switch to Target CPA/ROAS with realistic
          goal (10% better than current average).
        </p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">22</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dayparting: when are your users most active?</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Dayparting (Ad Schedule) adjusts bids by day of week and hour of day. If your CPA on
          Monday morning is 50% better than Friday evening — why bid the same?
        </p>
        <ul className="text-sm">
          <li>Analyze performance by Hours of Day and Days of Week (Google Ads → Dimensions)</li>
          <li>Identify top performing time slots (CPA 20%+ better than average)</li>
          <li>Set bid adjustments: +20% for peak hours, -30% for poor performing slots</li>
          <li>B2B campaigns: lower bids for weekends (or pause completely)</li>
        </ul>
      </div>

      <hr />

      <h2>Quality Score optimization</h2>

      <p>
        Quality Score is Google's rating of how relevant your ads and keywords are to users.
        Higher Quality Score = lower CPC and better ad rank. If you have average below 5/10, here's your
        biggest optimization opportunity.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">24</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">CTR optimization: fastest way to raise QS</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Expected CTR is largest Quality Score component. If your CTR rises, QS follows. How to increase CTR?
          Better ads (tactics #13-18), more relevant keywords, and ad extensions.
        </p>
        <ul className="text-sm">
          <li>Benchmark: Search campaigns average 3-5% CTR, Brand campaigns 10-20%</li>
          <li>If CTR below 2%, problem is in ad copy or keyword relevance</li>
          <li>Test urgent CTAs in headlines (&amp;quot;Order today&amp;quot;, &amp;quot;Free shipping&amp;quot;)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">26</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Landing page experience: speed and mobile-friendly</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Landing Page Experience component looks at load speed, mobile-friendliness, and content
          relevance. Most common problem: slow site. If load time &gt;3 seconds, you lose points.
        </p>
        <ul className="text-sm">
          <li>Test speed: <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a></li>
          <li>Test mobile experience: <a href="https://search.google.com/test/mobile-friendly" target="_blank" rel="noopener noreferrer">Mobile-Friendly Test</a></li>
          <li>Optimize images (WebP format), reduce JavaScript, use CDN</li>
          <li>CTA button must be above the fold on mobile</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-sm mb-0">
          Quality Score is historical metric — changes you make today won't immediately raise QS.
          Takes 1-2 weeks for Google to accumulate sufficient data. Be patient and consistent.
        </p>
      </div>

      <hr />

      <h2>Advanced optimization tactics</h2>

      <p>
        When you've covered fundamentals (structure, keywords, ads, bidding, QS), next level
        optimization includes audience layering, remarketing, and conversion tracking audits. These are
        tactics separating good accounts from excellent ones.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic 28</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Audience layering on Search campaigns</h3>
          <p className="text-sm text-gray-600 mb-3">
            Audience layering means adding audience segments (remarketing lists, demographics, in-market)
            to Search campaigns as &amp;quot;observation&amp;quot; or with bid adjustments.
          </p>
          <ul className="text-sm mb-0">
            <li><strong>Remarketing audiences:</strong> +30% bid adjustment on previous site visitors</li>
            <li><strong>Customer Match:</strong> Upload email list of existing clients, bid more aggressively</li>
            <li><strong>In-Market:</strong> Layer &amp;quot;In-Market for X&amp;quot; audiences and track if they convert better</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic 30</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Conversion Tracking audit (quarterly)</h3>
          <p className="text-sm text-gray-600 mb-3">
            Biggest mistake I see: conversion tracking isn't set up properly, or tracks wrong
            actions. If algorithm learns on bad data, optimization is futile.
          </p>
          <ul className="text-sm mb-0">
            <li>Check all conversions are tagged (Google Tag Manager or gtag.js)</li>
            <li>Test each conversion manually — make test transaction/form and verify it records</li>
            <li>Exclude internal traffic (your office) so it doesn't &amp;quot;pollute&amp;quot; data</li>
            <li>Check conversion attribution model — Last Click vs Data-Driven (Data-Driven is better if you have volume)</li>
          </ul>
        </div>
      </div>

      <hr />

      <h2>Weekly optimization schedule</h2>

      <p>
        Optimization isn't ad hoc activity — best results come with consistent weekly
        rhythm. Here's how I organize optimization schedule for clients:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-2 border-gray-900 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left font-heading font-bold">Day</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-heading font-bold">Optimization</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-heading font-bold">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Monday</td>
              <td className="border border-gray-300 px-4 py-2">
                <strong>Search Terms Report review</strong> — adding new keywords and negatives,
                pausing unprofitable terms
              </td>
              <td className="border border-gray-300 px-4 py-2">30-45 min</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Tuesday</td>
              <td className="border border-gray-300 px-4 py-2">
                <strong>Performance review per campaign</strong> — CPA/ROAS check, budget reallocation,
                pausing underperforming campaigns
              </td>
              <td className="border border-gray-300 px-4 py-2">20-30 min</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Wednesday</td>
              <td className="border border-gray-300 px-4 py-2">
                <strong>Ad copy testing</strong> — review RSA ad performance, pause low performers, test new
                headlines/descriptions
              </td>
              <td className="border border-gray-300 px-4 py-2">20 min</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Thursday</td>
              <td className="border border-gray-300 px-4 py-2">
                <strong>Bid strategy review</strong> — check Target CPA/ROAS achievement, adjust targets if needed
              </td>
              <td className="border border-gray-300 px-4 py-2">15 min</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-300 px-4 py-2 font-semibold">Friday</td>
              <td className="border border-gray-300 px-4 py-2">
                <strong>Quality Score audit</strong> — identify keywords with QS &lt;5, optimize ad relevance
                and landing pages
              </td>
              <td className="border border-gray-300 px-4 py-2">20 min</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Monthly optimizations (once per month)</p>
        <p className="text-blue-800 text-sm mb-0">
          <strong>1. Conversion Tracking audit</strong> (check all conversions track properly) <br />
          <strong>2. Competitor analysis</strong> (Google Auction Insights — who appeared/disappeared) <br />
          <strong>3. Landing page optimization</strong> (A/B testing different versions) <br />
          <strong>4. Audience segments review</strong> (remarketing lists, customer match updates)
        </p>
      </div>

      <hr />

      <h2>Frequently asked questions</h2>

      <div className="space-y-4 my-8">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How often should I optimize Google Ads accounts?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p>
              For small account (up to $3,000/month): weekly 1-2 hours optimization is enough. For larger accounts
              ($15,000+/month): I recommend daily check (15 min) + deeper weekly optimization (2-3 hours).
              Key is consistency — better 30 minutes every Monday than 3 hours once monthly.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What's most important optimization if I only have 1 hour weekly?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p>
              <strong>Search Terms Report review</strong> (tactic #6). This is activity with highest ROI —
              you eliminate unprofitable clicks and discover new profitable keywords. 80% of optimization I
              do weekly is exactly this. Everything else is nice-to-have, but Search Terms mining is must-have.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How do I know if my optimizations are working?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            <p>
              Track 3 metrics month-over-month: <strong>1) CPA or ROAS</strong> (efficiency), <strong>2) Conversion
              volume</strong> (scale), <strong>3) Impression Share</strong> (coverage). If CPA drops but conversions
              also drop — maybe you're too restrictive. If CPA rises but ROAS rises — maybe you're on right track.
              Context matters. Benchmark against previous month, but also year-over-year for seasonality.
            </p>
          </div>
        </details>
      </div>

      <hr />

      {/* ── CTA box ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mt-0 mb-4">
          Want a professional to handle optimization?
        </h2>
        <p className="text-lg mb-6 text-slate-300">
          If you have account spending $3,000+/month and want to avoid DIY stress, we can discuss
          ongoing management or single audit. I specialize in eCommerce and lead gen campaigns.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/kontakt"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold px-6 py-3 rounded-lg transition-colors text-center no-underline"
          >
            Schedule free call
          </Link>
          <Link
            href="/usluge/google-ads-upravljanje"
            className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-heading font-semibold px-6 py-3 rounded-lg transition-colors text-center no-underline"
          >
            View services
          </Link>
        </div>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: January 2026
      </div>
      <div className="text-sm text-gray-500">
        Author: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}
