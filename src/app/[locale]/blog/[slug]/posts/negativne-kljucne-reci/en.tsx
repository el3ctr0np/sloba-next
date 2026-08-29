import { Link } from "@/i18n/navigation";

export default function NegativeKeywordsGuideEN() {
  return (
    <>
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Negative keywords prevent your ads from showing for irrelevant searches. Without them, 20-40% of your budget goes to clicks that will never convert. In this guide: how match types work, where to add negatives, and how to build your own list from the Search Terms report.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">organization levels</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">5</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">methods to find negatives</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">30%+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">reduction in wasted spend</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">match types for negatives</p>
          </div>
        </div>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Quick Answer
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          How do negative keywords work in Google Ads?
        </p>
        <p className="text-sm md:text-base text-gray-700 mb-0 leading-relaxed">
          Negative keywords work by removing your ad from the auction for specific searches, using the same three match types as regular keywords — <strong>negative broad</strong>, <strong>negative phrase</strong>, and <strong>negative exact</strong> — each blocking a different range of search terms. You add them at three levels: a shared <strong>Negative Keyword List</strong> (account-wide), the <strong>campaign</strong> level, or the <strong>ad group</strong> level. Combined with a weekly Search Terms Report review, this is the mechanism that keeps budget from leaking into searches that were never going to convert.
        </p>
      </div>

      <p className="text-sm text-gray-600 -mt-2">
        Looking for the actual terms to paste in, not the theory? See the{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negative-keywords-list" } }} className="underline font-semibold">
          complete negative keywords list
        </Link>
        {" "}— 400+ terms across 15 copy-paste categories.
      </p>

      <hr />

      {/* ── What are negative keywords ── */}
      <h2>What Are Negative Keywords and Why They Matter</h2>
      <p>
        <a href="https://support.google.com/google-ads/answer/2453972" target="_blank" rel="noopener noreferrer">Negative keywords</a> are words and phrases you DO NOT want your ads to show for. While regular keywords attract traffic, negatives filter it — protecting your budget from clicks that will never convert.
      </p>
      <p>
        In practice, this is one of the most important optimization activities. On every account I audit, the Search Terms Report reveals at minimum 15-20% of budget spent on completely irrelevant searches.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          From my experience: Proper negative keyword strategy is the fastest way to improve ROI — results are visible immediately, within the first week.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Regular keywords</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Trigger your ad</h3>
          <p className="text-base text-gray-600 mb-0">Define which searches show your ad. Attract traffic to your site.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Negative keywords</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Block your ad</h3>
          <p className="text-base text-gray-600 mb-0">Prevent showing for irrelevant searches. Protect budget from wasted spend.</p>
        </div>
      </div>

      <h3>Real-world case study</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">Client: Premium furniture eCommerce (UK)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-semibold text-red-600 mb-2">Before negative keywords</p>
            <ul className="text-sm mb-0">
              <li>Budget: £2,000/month</li>
              <li>Conversions: 15</li>
              <li>CPA: £133</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-green-600 mb-2">After adding negatives</p>
            <ul className="text-sm mb-0">
              <li>Budget: £2,000/month</li>
              <li>Conversions: 23</li>
              <li>CPA: £87 <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">-35%</span></li>
            </ul>
          </div>
        </div>
        <p className="text-base text-gray-600 mt-3 mb-0">
          Blocked searches: &quot;cheap chairs&quot; (£180 spend, 0 conv), &quot;used furniture&quot; (£120, 0 conv), &quot;DIY furniture&quot; (£90, 0 conv), &quot;IKEA furniture&quot; (£150, 0 conv)
        </p>
      </div>

      <hr />

      {/* ── Match Types for Negatives ── */}
      <h2>Match Types for Negative Keywords</h2>
      <p>
        <a href="https://support.google.com/google-ads/answer/2453972" target="_blank" rel="noopener noreferrer">Negative match types</a> work differently from positive ones. Understanding the differences is critical to avoid blocking good searches by mistake.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Match Type</th>
              <th className="py-3 px-3 font-heading font-semibold">Syntax</th>
              <th className="py-3 px-3 font-heading font-semibold">Blocks</th>
              <th className="py-3 px-3 font-heading font-semibold">Does NOT block</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Negative Broad</td>
              <td className="py-3 px-3">free</td>
              <td className="py-3 px-3">Any search with that word, any order</td>
              <td className="py-3 px-3">Variations and synonyms (&quot;trial&quot;, &quot;gratis&quot;)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Negative Phrase</td>
              <td className="py-3 px-3">&quot;free download&quot;</td>
              <td className="py-3 px-3">Searches with exact phrase in that order</td>
              <td className="py-3 px-3">Different order (&quot;download free&quot;)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Negative Exact</td>
              <td className="py-3 px-3">[free download]</td>
              <td className="py-3 px-3">Only that exact search</td>
              <td className="py-3 px-3">Anything additional (&quot;free download CRM&quot;)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important: Negative Broad does NOT include synonyms</p>
        <p className="text-yellow-800 text-base mb-0">
          Unlike positive Broad match, negative Broad does NOT block synonyms and variations. If you block &quot;free&quot;, the search &quot;gratis CRM&quot; still gets through. Add all common variations.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Match type recommendation</p>
        <p className="text-blue-800 text-base mb-0">
          Use Negative Broad for most cases — covers widest range. Negative Phrase for specific phrases where order matters. Negative Exact rarely — only for very specific cases.
        </p>
      </div>

      <hr />

      {/* ── Where to get the terms ── */}
      <h2>Where to Get the Actual List of Terms</h2>
      <p>
        Rather than duplicating hundreds of terms on this page, I keep the full list in one dedicated post: 400+ negative keywords across 15 copy-paste categories — 8 universal groups (free seekers, job seekers, DIY, informational searches, budget shoppers, used/refurbished, negative sentiment) plus 5 industry-specific lists (eCommerce, B2B/SaaS, local services, travel, real estate, fitness). Open the <Link href={{ pathname: "/blog/[slug]", params: { slug: "negative-keywords-list" } }} className="underline font-semibold">complete negative keywords list</Link>, pick the categories that match your business, and paste them straight into a Negative Keyword List.
      </p>

      <hr />

      {/* ── How to find negatives ── */}
      <h2>How to Find Negative Keywords</h2>
      <p>
        The Search Terms Report is the same source you build the positive side of the campaign from. If you are still setting the campaign up, the order of steps is in the <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-search-campaigns-guide" } }} className="underline">Google Search campaigns guide</Link>.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">5 methods for finding negatives</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Search Terms Report</strong> <span className="text-gray-500">— most important method. Filter: last 7 days, sort by cost, question: &quot;Would this person buy from me?&quot; Minimum once weekly.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Pre-launch brainstorming</strong> <span className="text-gray-500">— imagine who is NOT your customer, think about ambiguous keywords, check Keyword Planner suggestions</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Competitor research</strong> <span className="text-gray-500">— search your keywords on Google, check &quot;Searches related to...&quot;, identify irrelevant ones</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Google Autocomplete</strong> <span className="text-gray-500">— start typing your keyword, check suggestions, identify irrelevant ones</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Customer support mining</strong> <span className="text-gray-500">— ask support team what questions come from people who are NOT real customers</span></div>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Organization and structure ── */}
      <h2>Organizing Negative Keywords</h2>
      <p>
        Proper organization is as important as the keywords themselves. I recommend a three-tier system that maintains consistency across the entire account.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Level</th>
              <th className="py-3 px-3 font-heading font-semibold">Where to add</th>
              <th className="py-3 px-3 font-heading font-semibold">When to use</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Negative Keyword Lists</td>
              <td className="py-3 px-3">Account level (shared list)</td>
              <td className="py-3 px-3">For universal negatives that apply to all campaigns</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Campaign Level</td>
              <td className="py-3 px-3">Specific campaign</td>
              <td className="py-3 px-3">For negatives specific to that campaign</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Ad Group Level</td>
              <td className="py-3 px-3">Specific Ad Group</td>
              <td className="py-3 px-3">For keyword sculpting and granular control</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <h3 className="mt-0 mb-4 font-heading font-bold">How to create Negative Keyword List</h3>
        <ol className="mb-0 text-sm">
          <li>Tools &amp; Settings → Shared library → Negative keyword lists</li>
          <li>Click + for new list</li>
          <li>Name the list (e.g., &quot;Universal Negatives&quot;)</li>
          <li>Add keywords</li>
          <li>Apply to all relevant campaigns</li>
        </ol>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Naming convention for lists</p>
        <p className="text-blue-800 text-base mb-0">
          Use format: [Type] - [Description]. Examples: &quot;Universal - Free &amp; Job Terms&quot;, &quot;Industry - eCommerce Fashion&quot;, &quot;Campaign - Brand Protection&quot;
        </p>
      </div>

      <hr />

      {/* ── Audit checklist ── */}
      <h2>Negative Keywords — Audit Checklist</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Weekly</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Search Terms Review</h3>
          <ul className="text-sm mb-0">
            <li>Top searches by cost</li>
            <li>New negative keywords added</li>
            <li>Check negatives do not block good searches</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Monthly</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Deep Dive</h3>
          <ul className="text-sm mb-0">
            <li>Top 100 search terms by cost</li>
            <li>Universal list updated</li>
            <li>Industry list updated</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Quarterly</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Complete Review</h3>
          <ul className="text-sm mb-0">
            <li>90-day Search Terms analysis</li>
            <li>Cross-campaign negative analysis</li>
            <li>List reorganization</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Pro tip</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Complete account check</h3>
          <p className="text-base text-gray-600 mb-0">See <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-checklist" } }} className="underline font-semibold">Google Ads audit checklist</Link> for complete account review.</p>
        </div>
      </div>

      <hr />

      {/* ── Common mistakes ── */}
      <h2>Most Common Negative Keyword Mistakes</h2>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #1</p>
          <p className="font-semibold mb-2">Never checking Search Terms</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Solution:</strong> Set weekly reminder for Search Terms review. This is the most important optimization activity for negative keywords.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #2</p>
          <p className="font-semibold mb-2">Too aggressive blocking without analysis</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Solution:</strong> Check volume and conversions before adding. Some keywords may look irrelevant but actually convert.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #3</p>
          <p className="font-semibold mb-2">Wrong match type for negatives</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Solution:</strong> Use Negative Broad for general terms. Exact negative misses variations — &quot;free&quot; in Exact does not block &quot;free CRM download&quot;.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #4</p>
          <p className="font-semibold mb-2">No shared lists — everything manual per campaign</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Solution:</strong> Create Negative Keyword Lists and apply to all campaigns. Consistency and efficiency.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #5</p>
          <p className="font-semibold mb-2">Ignoring synonyms and variations</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Solution:</strong> Add all common variations. Block &quot;free&quot; AND &quot;gratis&quot;, &quot;jobs&quot; AND &quot;careers&quot;. Negative Broad does not catch synonyms automatically.</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2>Frequently Asked Questions About Negative Keywords</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How many negative keywords is enough?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            No upper limit. Typically: 50-200 for starter list, grows over time. Quality is more important than quantity — better 50 carefully selected than 500 random ones.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Do negative keywords affect Quality Score?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Indirectly — yes. Better CTR (fewer irrelevant impressions) → better Expected CTR → better QS. More on this in the <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-guide" } }} className="underline">Quality Score guide</Link>.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I accidentally block good searches?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Yes, that is a real risk. Therefore: (1) use data before adding, (2) check Search Terms after adding, (3) be careful with Broad negatives for short keywords that have multiple meanings.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How often should I review and update negative lists?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Minimum: weekly Search Terms review. Ideally in first 30 days: every 2-3 days. For mature campaigns: weekly + monthly deep dive + quarterly complete review.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Are there mandatory negative keywords for every account?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Universal list (free, jobs, DIY) is good starter for most businesses. But always customize for your business — &quot;free&quot; may not be negative if you offer free trial or free shipping.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Negative Broad vs Negative Phrase — when which?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Broad: for general terms you always want to block (free, jobs) — covers all searches with that word. Phrase: for specific phrases where order matters. Exact: rarely — only for very specific cases where only that exact search is a problem.
          </div>
        </details>
      </div>

      <hr />

      {/* ── Conclusion + CTA ── */}
      <h2>Conclusion</h2>
      <p>
        Negative keywords are one of the most powerful optimization levers in Google Ads. Proper strategy can reduce wasted spend by 30%+ and improve ROAS by 20-50%. Start with universal list, add industry list, and review Search Terms weekly. Results are visible immediately.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Are you throwing money at irrelevant clicks?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Free Search Terms analysis with identification of wasted spend and negative keyword recommendations.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Schedule free consultation
        </Link>
      </div>

      <hr />

      {/* ── Related guides ── */}
      <h2>Related Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negative-keywords-list" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negative Keywords List — 400+ Terms</p>
          <p className="text-xs text-gray-500 mb-0">Copy-paste categories across 15 groups</p>
        </Link>

        <Link href="/usluge/search-kampanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Search Campaigns</p>
          <p className="text-xs text-gray-500 mb-0">Professional Search campaign management</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-keyword-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Keywords — Complete Guide</p>
          <p className="text-xs text-gray-500 mb-0">From research to keyword optimization</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Quality Score Guide</p>
          <p className="text-xs text-gray-500 mb-0">How to improve QS and reduce CPC</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-checklist" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Audit Checklist</p>
          <p className="text-xs text-gray-500 mb-0">80+ points for complete account review</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-mistakes" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Most Common Google Ads Mistakes</p>
          <p className="text-xs text-gray-500 mb-0">12 mistakes that destroy performance</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: February 2026
      </div>
      <div className="text-sm text-gray-500">
        Author: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}
