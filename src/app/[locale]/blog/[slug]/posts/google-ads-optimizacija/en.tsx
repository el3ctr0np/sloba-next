import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function GoogleAdsOptimizationEN() {
  return (
    <>
      {/* ── TL;DR box ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          30 Google Ads optimization tactics tested across 20+ accounts with $2M+ in combined annual spend, delivering an average 40% performance improvement within the first 90 days. The focus: structure, keywords, ads, bidding, and Quality Score.
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
        Google Ads optimization isn&apos;t a one-time task — it&apos;s the continuous process that
        separates campaigns earning 2x <GlossaryLink slug="roas">ROAS</GlossaryLink> from those earning 5x. In this guide I share the 30 tactics I use
        with my clients across a range of industries. Every tactic is aimed at improving <GlossaryLink slug="conversion">conversion</GlossaryLink> volume or efficiency.
      </p>

      <p>
        These tactics aren&apos;t theory from the Google Help Center. Each one has been tested on real accounts
        with real budgets. Some delivered dramatic improvements, others marginal gains — but every one
        has survived contact with practice.
      </p>

      <hr />

      <h2>Why optimization is key to success</h2>

      <p>
        Across 20+ accounts with $2M+ in combined annual ad spend, applying these tactics has lifted
        performance by an average of 40% within the first 90 days. The gap between <strong>set-and-forget</strong> accounts
        and regularly optimized ones is consistently 40-60% — same budget, same market, different discipline.
      </p>

      <p>
        The Pareto principle (the 80/20 rule) applies to Google Ads: <strong>20% of optimizations deliver 80% of the results</strong>.
        The problem is that most people don&apos;t know which 20% to work on. That&apos;s why these 30 tactics
        are organized by priority — start with structure, then work your way forward.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">A real-world example</p>
        <p className="text-blue-800 text-base mb-0">
          In January 2026 I took over an account whose campaigns had run for 6 months without any optimization.
          CPA was $85. After 4 weeks of applying these tactics: CPA $42. Same budget, double the conversions.
        </p>
      </div>

      <p>
        Optimization isn&apos;t rocket science, but it does require a system. This guide is that system — step by step,
        tactic by tactic.
      </p>

      <hr />

      <h2>Account structure optimization</h2>

      <p>
        Account structure is the first thing to optimize, because every other tactic depends on it.
        A poorly structured account caps the results of everything else you do — so check the structure
        before you touch keywords, ads, or bidding.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Separate Brand and Non-Brand campaigns</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Brand campaigns (your own brand name) have 10x higher CTR and 3x lower CPC than non-brand campaigns.
          If you mix the two in one campaign, the statistics blur together and you can&apos;t allocate budget properly.
        </p>
        <ul className="text-sm">
          <li>Create a separate campaign for brand keywords only</li>
          <li>Set lower bids on brand terms (those visitors are coming anyway)</li>
          <li>Focus your optimization on non-brand campaigns, where the real potential is</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Single Keyword Ad Groups (SKAGs) or thematic groups?</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          The old school recommends SKAGs — each keyword in its own ad group for maximum relevance.
          The new reality with RSAs: thematic groups of 5-15 similar keywords give the AI more to optimize with.
        </p>
        <ul className="text-sm">
          <li>For high-intent commercial keywords: test SKAGs</li>
          <li>For informational and long-tail terms: thematic groups</li>
          <li>Never mix different intents in the same ad group</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Consistent naming convention</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          If you have 20+ campaigns, how quickly can you find what you&apos;re looking for? I recommend the structure
          [TYPE]_[CATEGORY]_[GEO]_[ADDITIONAL] — for example, SEARCH_Sofas_UK_Exact or PMAX_AllProducts_US_NewCustomers.
        </p>
        <ul className="text-sm">
          <li>Use prefixes: SEARCH, PMAX, SHOPPING, DISPLAY, VIDEO</li>
          <li>Add geo if you run multi-market: UK, DE, US</li>
          <li>Mark tests with _TEST at the end so they&apos;re easy to filter</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Campaigns by customer journey stage</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          A user searching &quot;what is a CRM&quot; is not at the same stage as someone searching &quot;buy HubSpot
          alternative&quot;. Separate campaigns by stage: Awareness, Consideration, Decision.
        </p>
        <ul className="text-sm">
          <li>Awareness: broad match, educational content, lower bids</li>
          <li>Consideration: phrase match, product pages, medium bids</li>
          <li>Decision: exact match, checkout/demo pages, highest bids</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Daily budget vs shared budget</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Individual daily budgets give you control over each campaign. Shared budgets let Google allocate
          automatically wherever it sees opportunity. In practice, a hybrid approach works best.
        </p>
        <ul className="text-sm">
          <li>Top performers (Brand, High-Intent Search): individual budgets that should NEVER be the limiting factor</li>
          <li>Test campaigns or seasonal campaigns: shared budget for flexible allocation</li>
          <li>Monitor impression share lost (budget) — if it&apos;s above 20%, increase the budget</li>
        </ul>
      </div>

      <hr />

      <h2>Keyword optimization</h2>

      <p>
        Keywords are the heart of Search campaigns. 90% of the optimization work I do every Monday is
        keyword management: adding new terms, pausing unprofitable ones, refining match types, and expanding negative keyword lists.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Search Terms Report mining (weekly)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          This is the most powerful tactic in this guide. The Search Terms Report shows what people ACTUALLY
          search for when your ad appears. It&apos;s where you find both gold (new converting keywords) and waste
          (terms that should be negatives).
        </p>
        <ul className="text-sm">
          <li>Once a week: Google Ads → Insights &amp; Reports → Search Terms</li>
          <li>Sort by Conversions: add converting terms as new Exact match keywords</li>
          <li>Sort by Spend: add terms with high spend and 0 conversions as negatives</li>
          <li>Look for intent that doesn&apos;t match your product or service</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">7</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Negative keywords as the foundation</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          People ask &quot;How do I get more conversions?&quot; — the better question is &quot;How do I
          stop wasting money on bad clicks?&quot;. <GlossaryLink slug="negative-keywords">Negative keywords</GlossaryLink> are the answer.
        </p>
        <ul className="text-sm">
          <li>Create a master negative list at the account level (free, cheap, job, tutorial, PDF)</li>
          <li>Add campaign-specific negatives (if you sell new products, add &quot;used&quot; and &quot;second hand&quot;)</li>
          <li>Use negative lists for speed — create a &quot;B2C_Negatives&quot; or &quot;Informational_Negatives&quot; list</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">8</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Match type strategy: the 2026 reality</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Broad Match Modifier no longer exists (Google removed it in 2021). You now have three options: Broad, Phrase,
          and Exact — and Exact match is no longer truly &quot;exact&quot;, because close variants are enabled by default.
        </p>
        <ul className="text-sm">
          <li><strong>Exact Match:</strong> Your default for commercial high-intent keywords. Maximum control.</li>
          <li><strong>Phrase Match:</strong> For discovering new intent, but only if you have good negative lists.</li>
          <li><strong>Broad Match:</strong> Only if you&apos;re using Smart Bidding (Target CPA/ROAS) — the algorithm needs data to learn. Otherwise, avoid it.</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-base mb-0">
          Broad Match with Manual CPC bidding is a recipe for disaster. Broad Match with Target CPA and a solid
          conversion tracking history? That can be your best-performing tactic. Context is everything.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">9</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Keyword consolidation (merge duplicates)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          A common scenario: the same keyword spread across 3 different ad groups, each with low impression
          share because budget and Quality Score are fragmented. The solution is consolidation.
        </p>
        <ul className="text-sm">
          <li>Use the Google Ads interface: Tools → Keyword Conflicts to identify duplicate keywords</li>
          <li>Keep the keyword in the ad group with the best Quality Score</li>
          <li>Pause it in all other ad groups — the aggregated statistics will improve</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">10</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Long-tail strategy for niche industries</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          If you&apos;re in a niche industry or working with a small budget — long-tail keywords are your best
          friend. Yes, they have low search volume, but CPC is 3-5x lower and conversion rate is often higher.
        </p>
        <ul className="text-sm">
          <li>Use Google Keyword Planner or Answer The Public for ideas</li>
          <li>Target 4+ word queries (&quot;best affordable ergonomic chair for home office&quot;)</li>
          <li>Create Dynamic Search Ads (DSA) as a safety net for long-tail terms you&apos;ve missed</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">11</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Seasonal keywords and scheduled campaigns</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          If you have seasonal products (e.g. &quot;ski gear&quot; vs &quot;surfboards&quot;), don&apos;t keep
          all keywords active year-round. You&apos;re wasting budget during the off-season.
        </p>
        <ul className="text-sm">
          <li>Create seasonal campaigns with clear start/end dates</li>
          <li>Use Google Trends to identify peak season for each product category</li>
          <li>Launch campaigns 2 weeks before peak season to build Quality Score in advance</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">12</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Competitor keywords: yes or no?</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Bidding on competitor brand names (e.g. &quot;HubSpot alternative&quot;) can be powerful, but
          also expensive. My rule: test it only if you have clear differentiation and a landing page that
          explains why you&apos;re the better choice.
        </p>
        <ul className="text-sm">
          <li>Never use a competitor&apos;s name in your ad copy (this can get your ad disapproved)</li>
          <li>Focus on comparison and alternative keywords instead</li>
          <li>Competitor campaigns require a higher Quality Score — a highly relevant landing page is essential</li>
        </ul>
      </div>

      <hr />

      <h2>Ad optimization</h2>

      <p>
        Responsive Search Ads (RSAs) changed the nature of ad optimization: instead of writing fixed
        descriptive sentences, you now create building blocks that Google assembles and tests.
        That demands a different strategy.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">13</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">RSA best practices: diversity is key</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Google allows 15 headlines and 4 descriptions per RSA. Most people write 15
          variations of the same message — a mistake. Google needs diversity to test combinations properly.
        </p>
        <ul className="text-sm">
          <li>Divide headlines into 3 types: Product/Service, Benefit, Offer/CTA</li>
          <li>Use different lengths (20 to 30 characters) so every combination can display</li>
          <li>Include a minimum of 2 headlines with dynamic keyword insertion (DKI): &quot;{`{KeyWord:Default Text}`}&quot;</li>
          <li>Ad Strength &quot;Excellent&quot; isn&apos;t the goal — CTR and conversions are — but &quot;Good&quot; is the minimum</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">14</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Pin strategy: when to pin headlines in RSAs</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Pinning a headline or description to a specific position reduces the number of combinations
          Google can test — but it&apos;s sometimes necessary for brand compliance or message control.
        </p>
        <ul className="text-sm">
          <li>Pin Position 1: your brand name or core differentiator, so it&apos;s always visible</li>
          <li>Don&apos;t pin everything — leave Google room to optimize the remaining assets</li>
          <li>Use pinning for legal disclaimers or price mentions that must appear in the ad</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">15</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ad Extensions: use ALL the relevant ones</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Ad extensions (sitelinks, callouts, structured snippets, call, location...) increase CTR
          by 10-25% because your ad takes up more space on the SERP. And they&apos;re completely free.
        </p>
        <ul className="text-sm">
          <li><strong>Sitelinks:</strong> Minimum 4, best practice 8 — link to your top categories/pages</li>
          <li><strong>Callouts:</strong> Short USP bullets (&quot;Free Shipping&quot;, &quot;24/7 Support&quot;)</li>
          <li><strong>Structured Snippets:</strong> Branded categories (Brands: Nike, Adidas, Puma...)</li>
          <li><strong>Call Extensions:</strong> A must-have if you&apos;re a local business or a call justifies a high CPA</li>
          <li>Use account-level extensions as the fallback, then campaign-specific ones for special offers</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">16</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Landing page alignment (message match)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          If your ad promises &quot;20% off sofas&quot; and the landing page never mentions the discount,
          you&apos;ll get a high bounce rate and a poor Quality Score. Message match is critical.
        </p>
        <ul className="text-sm">
          <li>The landing page headline should echo (mirror) the ad headline</li>
          <li>If you&apos;re advertising a specific product or category, don&apos;t send traffic to the homepage — create a dedicated page</li>
          <li>Testing landing pages often delivers a higher ROI than testing ad copy</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">17</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Device-specific ad copy (mobile vs desktop)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Mobile traffic has different intent than desktop: shorter attention spans, more local searches,
          more call conversions. Optimize your ad copy by device if you see a performance gap.
        </p>
        <ul className="text-sm">
          <li>If mobile users call more often: push an aggressive Call Extension in mobile campaigns</li>
          <li>If desktop users convert better: allocate more budget and bid adjustments to desktop</li>
          <li>Mobile headlines: shorter, more direct (&quot;Call now&quot; vs &quot;Book a consultation&quot;)</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">18</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Emotional triggers in ad copy</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Ad copy that only describes features is forgettable. Ad copy that solves a problem or activates
          an emotion earns the click. FOMO, urgency, and benefit-driven copy consistently outperform
          feature-heavy descriptions.
        </p>
        <ul className="text-sm">
          <li><strong>FOMO:</strong> &quot;Only 3 left in stock&quot;, &quot;Offer ends tomorrow&quot;</li>
          <li><strong>Benefit over feature:</strong> &quot;Sleep better tonight&quot; &gt; &quot;Memory foam mattress&quot;</li>
          <li><strong>Social proof:</strong> &quot;5,000+ happy customers&quot;, &quot;Rated 4.9★&quot;</li>
        </ul>
      </div>

      <hr />

      <h2>Bidding strategy optimization</h2>

      <p>
        Your bid strategy is the autopilot. You can have a perfect structure and excellent ads, but if
        the bidding is wrong, you&apos;re either spending more than you need to or losing impression share.
        Here&apos;s how to choose and tune a bidding strategy.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">19</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Manual CPC vs Smart Bidding: which one, and when?</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Google pushes Smart Bidding (<GlossaryLink slug="tcpa">Target CPA</GlossaryLink>, <GlossaryLink slug="troas">Target ROAS</GlossaryLink>, Maximize Conversions) as the superior
          solution. In practice, it depends on conversion volume: below 30 conversions a month, Smart Bidding
          doesn&apos;t have enough data to learn — Manual CPC with <GlossaryLink slug="bid-adjustments">bid adjustments</GlossaryLink> works better.
        </p>
        <ul className="text-sm">
          <li><strong>Manual CPC:</strong> New launches, small budgets, &lt;30 conversions/month</li>
          <li><strong>Maximize Clicks:</strong> When the goal is traffic or brand awareness, not conversions</li>
          <li><strong>Target CPA:</strong> Lead gen campaigns with a clear CPA goal and 30+ conversions/month</li>
          <li><strong>Target ROAS:</strong> eCommerce with revenue tracking and 50+ conversions/month</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Transition plan: Manual → Smart Bidding</p>
        <p className="text-blue-800 text-base mb-0">
          Don&apos;t jump straight from Manual CPC to Target CPA. First switch to &quot;Maximize Conversions&quot;
          without a target so the algorithm can learn. After 2 weeks, switch to Target CPA/ROAS with a realistic
          goal (10% better than your current average). For a complete walkthrough, see the{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-vodic" } }} className="underline font-semibold">Smart Bidding guide</Link>.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">20</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Target CPA/ROAS: how to set a realistic target</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Mistake #1: setting an overly aggressive target. If your current CPA is £50 and you set a
          target of £20, the campaign will barely get impressions because Google knows it can&apos;t
          achieve that target.
        </p>
        <ul className="text-sm">
          <li>Look at your last 30 days&apos; average CPA/ROAS — that&apos;s your baseline</li>
          <li>Set a target 10-20% better than your current average (e.g. CPA £50 → target £45)</li>
          <li>After 2-3 weeks of stable performance, gradually tighten the target further</li>
          <li>Never change the target more than once per week — the algorithm needs a learning period</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">21</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Portfolio bidding for multi-campaign management</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Portfolio bid strategies let you share a bid strategy across multiple campaigns. The benefit:
          the algorithm learns from aggregated conversion volume, which means faster optimization.
        </p>
        <ul className="text-sm">
          <li>Use a portfolio strategy if you have 3+ campaigns with the same goal (e.g. all Search campaigns targeting CPA £40)</li>
          <li>Don&apos;t mix different campaign types in the same portfolio (Search + Display is a bad idea)</li>
          <li>Monitor performance per campaign within the portfolio — one poor performer can drag down the rest</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">22</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dayparting: when are your users most active?</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Dayparting (Ad Schedule) adjusts bids by day of the week and hour of the day. If your CPA on
          Monday morning is 50% better than on Friday evening — why bid the same?
        </p>
        <ul className="text-sm">
          <li>Analyze performance by Hours of Day and Days of Week (Google Ads → Dimensions)</li>
          <li>Identify your top-performing time slots (CPA 20%+ better than average)</li>
          <li>Set bid adjustments: +20% for peak hours, -30% for poor-performing slots</li>
          <li>B2B campaigns: lower bids on weekends (or pause completely)</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">23</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Device bid adjustments (mobile/tablet/desktop)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          If your desktop CPA is £30 and mobile CPA is £60, there&apos;s no reason to bid the same on both.
          Device bid adjustments automatically increase or decrease your bid by device.
        </p>
        <ul className="text-sm">
          <li>Segment by device (Google Ads → Campaigns → Devices) and compare CPA side by side</li>
          <li>Desktop the best performer? Set a mobile bid adjustment of -20% to -40%</li>
          <li>Mobile the best performer? Set a mobile bid adjustment of +20% to +40%</li>
          <li>Note: with Smart Bidding strategies, device adjustments have less impact (the algorithm already optimizes by device)</li>
        </ul>
      </div>

      <hr />

      <h2>Quality Score optimization</h2>

      <p>
        <GlossaryLink slug="quality-score">Quality Score</GlossaryLink> is Google&apos;s rating of how relevant your ads and keywords are to users.
        A higher Quality Score means a lower CPC and a better <GlossaryLink slug="ad-rank">Ad Rank</GlossaryLink>. If your average is below 5/10, this is your
        biggest optimization opportunity.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">24</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">CTR optimization: the fastest way to raise QS</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Expected CTR is the largest Quality Score component — when your CTR rises, QS follows. How do you
          raise CTR? Better ads (tactics #13-18), more relevant keywords, and ad extensions.
        </p>
        <ul className="text-sm">
          <li>Benchmark: Search campaigns average a 3-5% CTR, Brand campaigns 10-20%</li>
          <li>If CTR is below 2%, the problem is your ad copy or keyword relevance</li>
          <li>Test urgency-driven CTAs in headlines (&quot;Order today&quot;, &quot;Free shipping&quot;)</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">25</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Ad relevance signals: keyword → ad → landing page</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Google checks whether your ad contains the keyword (or a close variant), and whether the landing
          page also contains that keyword. The tighter this relevance chain, the higher your Ad Relevance score.
        </p>
        <ul className="text-sm">
          <li>Use DKI (Dynamic Keyword Insertion) in ad headlines to automatically include the search term</li>
          <li>Your landing page H1 and meta title should contain the target keyword</li>
          <li>Don&apos;t send all keywords to the homepage — create category or product-specific pages</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">26</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Landing page experience: speed and mobile-friendliness</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          The Landing Page Experience component looks at load speed, mobile-friendliness, and content
          relevance. The most common problem is a slow site — if load time exceeds 3 seconds, you&apos;re losing points.
        </p>
        <ul className="text-sm">
          <li>Test speed: <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a></li>
          <li>Test mobile experience: <a href="https://search.google.com/test/mobile-friendly" target="_blank" rel="noopener noreferrer">Mobile-Friendly Test</a></li>
          <li>Optimize images (WebP format), reduce JavaScript, use a CDN</li>
          <li>The CTA button must be above the fold on mobile</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-base mb-0">
          Quality Score is a historical metric — the changes you make today won&apos;t raise QS immediately.
          It takes 1-2 weeks for Google to accumulate enough data. Be patient and consistent.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">27</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Historical QS recovery: when to &quot;reset&quot; a keyword</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Sometimes a keyword has a history of poor performance (low CTR for a year), and despite your
          optimizations the QS stays low because the historical data is dragging it down. The solution is
          a reset.
        </p>
        <ul className="text-sm">
          <li>Pause the keyword for 2 weeks so the &quot;old data&quot; loses weight in the calculation</li>
          <li>Alternatively: create a new keyword with a different match type (Exact → Phrase) — Google treats it as new</li>
          <li>When you reactivate, make sure the landing page and ad copy are as relevant as possible</li>
        </ul>
      </div>

      <hr />

      <h2>Advanced optimization tactics</h2>

      <p>
        Once you&apos;ve covered the fundamentals (structure, keywords, ads, bidding, QS), the next level of
        optimization includes audience layering, remarketing, and conversion tracking audits. These are the
        tactics that separate good accounts from excellent ones.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic 28</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Audience layering on Search campaigns</h3>
          <p className="text-base text-gray-600 mb-3">
            Audience layering means adding audience segments (remarketing lists, demographics, in-market)
            to Search campaigns in &quot;observation&quot; mode or with bid adjustments.
          </p>
          <ul className="text-sm mb-0">
            <li><strong>Remarketing audiences:</strong> A +30% bid adjustment for previous site visitors</li>
            <li><strong>Customer Match:</strong> Upload an email list of existing clients and bid more aggressively</li>
            <li><strong>In-Market:</strong> Layer &quot;In-Market for X&quot; audiences and track whether they convert better</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic 29</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Remarketing optimization</h3>
          <p className="text-base text-gray-600 mb-3">
            Remarketing campaigns have 2-3x higher CTR and 50-70% lower CPA than cold traffic — but only
            if you properly segment your audiences. Don&apos;t treat all site visitors the same.
          </p>
          <ul className="text-sm mb-0">
            <li><strong>Cart Abandoners:</strong> A separate campaign with an aggressive offer (&quot;10% off if you complete your purchase&quot;)</li>
            <li><strong>Page Visitors:</strong> Different messaging for homepage visitors vs product page visitors</li>
            <li><strong>Past Purchasers:</strong> Cross-sell/upsell campaigns with new or complementary products</li>
            <li>Full guide: <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }}>Remarketing in Google Ads</Link></li>
          </ul>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">30</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Conversion Tracking audit (quarterly)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          The biggest mistake I see: conversion tracking that isn&apos;t set up properly, or that tracks the
          wrong actions. If the algorithm learns on bad data, all optimization is futile.
        </p>
        <ul className="text-sm">
          <li>Check that all conversions are tagged (Google Tag Manager or gtag.js)</li>
          <li>Test each conversion manually — run a test transaction or form submission and verify that it records</li>
          <li>Exclude internal traffic (your office IP) so it doesn&apos;t &quot;pollute&quot; your data</li>
          <li>Check the conversion attribution model — Last Click vs Data-Driven (Data-Driven is better if you have sufficient volume)</li>
          <li>Full guide: <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}>Conversion Tracking in Google Ads</Link></li>
        </ul>
      </div>

      <hr />

      <h2>Weekly optimization schedule</h2>

      <p>
        Optimization isn&apos;t an ad hoc activity — the best results come from a consistent weekly
        rhythm. Here&apos;s how I organize the optimization schedule for my clients:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border border-gray-200 text-sm">
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
        <p className="text-blue-800 text-base mb-0">
          <strong>1. Conversion Tracking audit</strong> (check that all conversions track properly) <br />
          <strong>2. Competitor analysis</strong> (Google Auction Insights — who appeared or disappeared) <br />
          <strong>3. Landing page optimization</strong> (A/B test different versions) <br />
          <strong>4. Audience segments review</strong> (remarketing lists, Customer Match updates)
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
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p>
              For a small account (up to $3,000/month), 1-2 hours of weekly optimization is enough. For larger
              accounts ($15,000+/month), I recommend a daily check (15 minutes) plus a deeper weekly session
              (2-3 hours). The key is consistency — 30 minutes every Monday beats 3 hours once a month.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What&apos;s the most important optimization if I only have 1 hour a week?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p>
              <strong>The Search Terms Report review</strong> (tactic #6). It&apos;s the activity with the highest ROI —
              you eliminate unprofitable clicks and discover new profitable keywords. 80% of the optimization I
              do weekly is exactly this. Everything else is nice-to-have; Search Terms mining is a must.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How do I know if my optimizations are working?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p>
              Track 3 metrics month-over-month: <strong>1) CPA or ROAS</strong> (efficiency), <strong>2) Conversion
              volume</strong> (scale), <strong>3) Impression Share</strong> (coverage). If CPA drops but conversions
              drop too, you may be too restrictive. If CPA rises but ROAS rises with it, you may be on the right track.
              Context matters. Benchmark against the previous month, but also year-over-year for seasonality.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Should I pause campaigns at night or on weekends?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p>
              It depends on your industry. <strong>B2B campaigns:</strong> it&apos;s often smart to reduce bids
              by 50-70% on weekends because decision-makers aren&apos;t working. <strong>eCommerce:</strong>
              weekends are often your best-performing days (people shop from home). Rather than pausing, use
              Ad Schedule bid adjustments (tactic #22) to lower bids during poor-performing hours while
              maintaining some presence.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much does professional Google Ads optimization cost?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p>
              Freelance consultants typically charge £200-600/month for ongoing optimization (depending on account
              size and complexity). Agencies charge 10-20% of ad spend. The DIY approach costs time — realistically
              5-10 hours per month while learning, or 2-3 hours once you&apos;re experienced. If you&apos;re
              interested in professional help, <Link href="/kontakt">book a free consultation</Link>.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I automate optimization using Automated Rules?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p>
              Yes, but carefully. Automated Rules are excellent for repetitive tasks: pausing keywords with
              CPA &gt;£100 and 0 conversions in the last 30 days, increasing budget for campaigns with &gt;90%
              impression share, and so on. But you can&apos;t automate <strong>strategy</strong> — rules don&apos;t
              understand context. Use them for busywork, but keep strategic decision-making manual.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Should I accept Google Ads automatic recommendations?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p>
              Not all of them. Google optimizes for its own revenue, not necessarily your ROI. Recommendations
              for broad match, budget increases, and auto-apply changes are usually not in your best interest.
              Only accept those that align with your goals.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How do I improve ROAS in Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p>
              Focus on: 1) Negative keywords (eliminate unproductive searches), 2) Bid strategy by
              device/location/time, 3) Landing page optimization, 4) Campaign segmentation by product
              profitability, 5) Remarketing to existing visitors.
            </p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why is my Quality Score dropping?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p>
              The most common reasons: the landing page loads slower than it used to, competitors improved their
              ads, CTR dropped (refresh your copy), or relevance decreased (keywords don&apos;t match the ad → LP
              path). Check each component individually.
            </p>
          </div>
        </details>
      </div>

      <hr />

      {/* ── CTA box ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mt-0 mb-4">
          Want a professional to handle optimization?
        </h2>
        <p className="text-lg mb-6 text-slate-300">
          If your account spends $3,000+/month and you want to skip the DIY stress, we can discuss
          ongoing management or a one-off audit. I specialize in eCommerce and lead gen campaigns.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/kontakt"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-heading font-bold px-6 py-3 rounded-lg transition-colors text-center no-underline"
          >
            Schedule a free call
          </Link>
          <Link
            href="/usluge/google-ads-upravljanje"
            className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-heading font-semibold px-6 py-3 rounded-lg transition-colors text-center no-underline"
          >
            View services
          </Link>
        </div>
      </div>

      {/* ── Related Guides ── */}
      <div className="my-12">
        <h2 className="text-xl font-heading font-bold mb-6">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
            <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Management</p>
            <p className="text-xs text-gray-500 mb-0">Complete management and optimization of your campaigns</p>
          </Link>

          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }}
            className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-card transition-shadow no-underline"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Optimization</p>
            <h3 className="text-base font-heading font-bold mt-0 mb-2 text-gray-900">
              Quality Score Guide
            </h3>
            <p className="text-sm text-gray-600 mb-0">
              How to raise Quality Score and lower CPC through CTR, ad relevance, and landing page optimization.
            </p>
          </Link>

          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }}
            className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-card transition-shadow no-underline"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Optimization</p>
            <h3 className="text-base font-heading font-bold mt-0 mb-2 text-gray-900">
              Negative Keywords
            </h3>
            <p className="text-sm text-gray-600 mb-0">
              How negative keywords save budget and improve CTR — with industry-specific lists.
            </p>
          </Link>

          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }}
            className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-card transition-shadow no-underline"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Campaigns</p>
            <h3 className="text-base font-heading font-bold mt-0 mb-2 text-gray-900">
              Remarketing in Google Ads
            </h3>
            <p className="text-sm text-gray-600 mb-0">
              How to retarget site visitors and cart abandoners through Search, Display, and YouTube remarketing.
            </p>
          </Link>

          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }}
            className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-card transition-shadow no-underline"
          >
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Shopping</p>
            <h3 className="text-base font-heading font-bold mt-0 mb-2 text-gray-900">
              Google Shopping Campaigns
            </h3>
            <p className="text-sm text-gray-600 mb-0">
              Product feed optimization, bid strategies, and the Tiered Shopping approach for eCommerce accounts.
            </p>
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
