import { Link } from "@/i18n/navigation";

export default function KeywordGuideEN() {
  return (
    <>
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Keywords determine who sees your ads, how much you pay, and whether you turn a profit. Poor keyword selection is the #1 reason Google Ads campaigns fail.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">4</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">intent types</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">match types</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">40%+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">budget wasted on wrong keywords</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">5</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">research steps</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Why keywords matter ── */}
      <h2>Why Keywords Are the Foundation of Google Ads Success</h2>
      <p>
        After managing $2M+ in annual ad spend across 50+ campaigns, one truth holds constant — keyword quality directly determines campaign success. You can have perfect ad copy, an optimized landing page, and unlimited budget, but if you target the wrong keywords, you will fail.
      </p>
      <p>
        Keywords in Google Ads are the words and phrases you target with your ads. When a user searches for something matching your keyword, your ad can appear. Sounds simple, but this is where complexity begins — choosing the right keywords requires understanding your customers, their intent, and behavior.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          From my experience: 80% of failing campaigns share the same root cause — wrong keywords or poor organization.
        </p>
      </div>

      <p>Four things keywords directly control:</p>
      <ul>
        <li><strong>Who sees your ad</strong> — wrong keywords = wrong audience</li>
        <li><strong>How much you pay per click</strong> — competitive terms cost more</li>
        <li><strong>Ad relevance</strong> — keywords must match your ad and landing page</li>
        <li><strong>Quality Score</strong> — direct impact on Ad Rank and costs</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Deep dive</p>
        <p className="text-blue-800 text-sm mb-0">
          To understand how Quality Score affects your CPC, see the <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }} className="underline font-semibold">Quality Score guide</Link>.
        </p>
      </div>

      <hr />

      {/* ── Keyword vs Search Term ── */}
      <h2>Keyword vs Search Term — The Critical Difference</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">You control</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Keyword</h3>
          <p className="text-sm text-gray-600 mb-0">The word or phrase YOU add to your campaign and target your ads to.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">User enters</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Search Term</h3>
          <p className="text-sm text-gray-600 mb-0">What the user actually types into Google. Can differ from your keyword.</p>
        </div>
      </div>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">Real-world example</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Your keyword:</strong> <span className="text-gray-500">— &quot;womens running shoes&quot;</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Search terms that trigger your ad:</strong> <span className="text-gray-500">— &quot;womens nike running shoes&quot;, &quot;best running shoes for women&quot;, &quot;buy womens running shoes online&quot;</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">!</span>
            <div><strong>Key takeaway:</strong> <span className="text-gray-500">— review your Search Terms Report weekly to see what users actually search for</span></div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Critical</p>
        <p className="text-yellow-800 text-sm mb-0">
          Understanding the difference between keywords and search terms is fundamental to optimization. If you do not review your Search Terms Report weekly, you are wasting budget on irrelevant searches.
        </p>
      </div>

      <hr />

      {/* ── Intent types ── */}
      <h2>Keyword Types by User Intent</h2>
      <p>
        Not all keywords are equal. User intent determines how valuable a keyword is to your business. I recommend evaluating every keyword against these 4 intent types before adding it to your campaign.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Type 1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Navigational (Branded)</h3>
          <p className="text-sm text-gray-600 mb-2">User searches for a specific brand or website.</p>
          <p className="text-sm text-gray-600 mb-1"><strong>Examples:</strong> &quot;nike uk&quot;, &quot;amazon&quot;</p>
          <p className="text-sm text-gray-600 mb-0"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">High CTR</span> <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Low CPC</span></p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Type 2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Informational</h3>
          <p className="text-sm text-gray-600 mb-2">User seeks information, not ready to buy yet.</p>
          <p className="text-sm text-gray-600 mb-1"><strong>Examples:</strong> &quot;how to choose a CRM&quot;, &quot;what is performance max&quot;</p>
          <p className="text-sm text-gray-600 mb-0"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Low CPC</span> <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded">Lower conversion</span></p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Type 3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Commercial (Research)</h3>
          <p className="text-sm text-gray-600 mb-2">User researches options before buying.</p>
          <p className="text-sm text-gray-600 mb-1"><strong>Examples:</strong> &quot;best CRM for small business&quot;, &quot;hubspot vs salesforce&quot;</p>
          <p className="text-sm text-gray-600 mb-0"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Medium CPC</span> <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Good conversion</span></p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Type 4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Transactional</h3>
          <p className="text-sm text-gray-600 mb-2">User ready to buy or convert.</p>
          <p className="text-sm text-gray-600 mb-1"><strong>Examples:</strong> &quot;buy CRM software&quot;, &quot;CRM pricing&quot;, &quot;CRM free trial&quot;</p>
          <p className="text-sm text-gray-600 mb-0"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Higher CPC</span> <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Highest conversion</span></p>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-3">Intent funnel</p>
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <p className="text-yellow-400 font-bold mb-1">Awareness</p>
            <p className="text-slate-400 mb-1">Informational</p>
            <p className="text-slate-500 text-xs mb-0">Low CPC · Lower conv.</p>
          </div>
          <div>
            <p className="text-yellow-400 font-bold mb-1">Consideration</p>
            <p className="text-slate-400 mb-1">Commercial</p>
            <p className="text-slate-500 text-xs mb-0">Medium CPC · Medium conv.</p>
          </div>
          <div>
            <p className="text-yellow-400 font-bold mb-1">Decision</p>
            <p className="text-slate-400 mb-1">Transactional</p>
            <p className="text-slate-500 text-xs mb-0">Higher CPC · Highest conv.</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Keyword research ── */}
      <h2>Keyword Research: Step-by-Step Process</h2>
      <p>
        Quality keyword research is an investment that pays back multifold. I recommend this five-step process I use for all new campaigns.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Brainstorming</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Start with questions that reveal how your customers think.</p>
        <ul className="text-sm">
          <li>How would customers describe your product or service?</li>
          <li>What problems do you solve?</li>
          <li>What alternatives exist in the market?</li>
          <li>What are synonyms and naming variations?</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Google Keyword Planner</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Free Google tool for finding new ideas and checking volume.</p>
        <ul className="text-sm">
          <li><strong>Discover New Keywords</strong> — enter seed keywords or competitor URL</li>
          <li><strong>Get Search Volume</strong> — check data for your existing list</li>
          <li>Filter by location (US has different volume than UK)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Competitor Analysis</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">See what keywords competitors rank for.</p>
        <ul className="text-sm">
          <li><strong>Paid tools:</strong> SEMrush, Ahrefs, SpyFu</li>
          <li><strong>Free:</strong> Google search (check competitor ads), autocomplete, &quot;Searches related to...&quot;</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Search Terms Mining</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">If you have active campaigns, use the data you already have.</p>
        <ul className="text-sm">
          <li>Keywords → Search Terms → analyze what people actually search for</li>
          <li>Add good searches as new keywords</li>
          <li>Add irrelevant searches as <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="underline">negative keywords</Link></li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Customer Language</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">The goal is to understand how CUSTOMERS speak, not how you think they speak.</p>
        <ul className="text-sm">
          <li>Product and service reviews</li>
          <li>Support tickets and FAQs</li>
          <li>Social media comments</li>
          <li>Conversations with sales team</li>
          <li>Industry forums</li>
        </ul>
      </div>

      <hr />

      {/* ── Keyword Planner interpretation ── */}
      <h2>Interpreting Keyword Planner Results</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Metric</th>
              <th className="py-3 px-4 font-heading font-semibold">What it means</th>
              <th className="py-3 px-4 font-heading font-semibold">How to use it</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Avg. monthly searches</td>
              <td className="py-3 px-4">How many people search monthly</td>
              <td className="py-3 px-4">Balance volume vs competition</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Competition</td>
              <td className="py-3 px-4">How many advertisers compete</td>
              <td className="py-3 px-4">High = more expensive but more valuable</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Top of page bid (low)</td>
              <td className="py-3 px-4">CPC for lower first page</td>
              <td className="py-3 px-4">Minimum for visibility</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Top of page bid (high)</td>
              <td className="py-3 px-4">CPC for top of results</td>
              <td className="py-3 px-4">Premium positions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Pro tip for Keyword Planner</p>
        <p className="text-blue-800 text-sm mb-0">
          Keyword Planner often underestimates volume for long-tail keywords. Combine with autocomplete and Search Terms data for complete picture. Also, always download results to Excel for easier analysis.
        </p>
      </div>

      <hr />

      {/* ── Selecting keywords ── */}
      <h2>Selecting the Right Keywords</h2>
      <p>
        Having a list of 500 keywords means nothing if they are not the right ones. I use this framework to evaluate every keyword before adding it to a campaign.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Factor</th>
              <th className="py-3 px-4 font-heading font-semibold">Evaluation question</th>
              <th className="py-3 px-4 font-heading font-semibold">Ideal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Relevance</td>
              <td className="py-3 px-4">Does it match your offering?</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">High</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Intent</td>
              <td className="py-3 px-4">Does it show buying intent?</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Commercial/Transactional</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Volume</td>
              <td className="py-3 px-4">Does it have enough searches?</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">100+ monthly</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Competition</td>
              <td className="py-3 px-4">Can you compete?</td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Depends on budget</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">CPC</td>
              <td className="py-3 px-4">Can you afford the click?</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Within target CPA</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Rule: Calculate max CPC before adding</p>
        <p className="text-sm text-yellow-900 mb-2">Max CPC = Target CPA × Expected Conversion Rate</p>
        <p className="text-sm text-yellow-900 mb-0">
          <strong>Example:</strong> Target CPA $40/£30, expected conversion 3% → Max CPC = $40 × 0.03 = $1.20. If Keyword Planner shows CPC $3.00 and your max is $1.20 — that keyword may not be profitable for your business model.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-green-500 rounded-xl p-5">
          <p className="font-heading font-bold text-green-700 mb-2">Priority keywords</p>
          <ul className="text-sm mb-0">
            <li>Transactional: &quot;buy&quot;, &quot;price&quot;, &quot;order&quot;</li>
            <li>Commercial: &quot;best&quot;, &quot;reviews&quot;, &quot;vs&quot;</li>
            <li>Problem-focused: &quot;[problem] solution&quot;</li>
            <li>Local: &quot;[service] [city]&quot;</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-red-500 rounded-xl p-5">
          <p className="font-heading font-bold text-red-700 mb-2">Avoid</p>
          <ul className="text-sm mb-0">
            <li>Too broad: &quot;software&quot;, &quot;shoes&quot;</li>
            <li>Purely informational without strategic reason</li>
            <li>Too expensive for your model</li>
            <li>Irrelevant to your offering</li>
          </ul>
        </div>
      </div>

      <hr />

      {/* ── Ad Group organization ── */}
      <h2>Organizing Keywords into Ad Groups</h2>
      <p>
        A rule I never break: all keywords in one Ad Group must be similar enough to share the SAME ad. If you cannot write one ad that is relevant to all keywords in the group — split them.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">Example of good organization</p>
        <div className="space-y-3 text-sm">
          <p className="font-semibold mb-1">Campaign: CRM Software</p>
          <div className="ml-4 space-y-2">
            <div><strong>Ad Group: CRM for small business</strong><br /><span className="text-gray-500">→ crm for small business, small business crm, crm small company</span></div>
            <div><strong>Ad Group: CRM pricing</strong><br /><span className="text-gray-500">→ crm pricing, crm software cost, how much is crm</span></div>
            <div><strong>Ad Group: CRM free trial</strong><br /><span className="text-gray-500">→ crm free trial, crm trial, crm demo</span></div>
            <div><strong>Ad Group: Salesforce alternative</strong><br /><span className="text-gray-500">→ salesforce alternative, replace salesforce, cheaper than salesforce</span></div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">How many keywords per Ad Group?</p>
        <p className="text-yellow-800 text-sm mb-0">
          Recommendation: 10-20 keywords. Less than 5 — insufficient data for optimization. More than 30 — difficult to write relevant ad for all.
        </p>
      </div>

      <hr />

      {/* ── Match Types ── */}
      <h2>Match Types Explained</h2>
      <p>
        Google Ads in 2026 has three match types. Each gives different level of control over which searches trigger your ad.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Match Type</th>
              <th className="py-3 px-4 font-heading font-semibold">Symbol</th>
              <th className="py-3 px-4 font-heading font-semibold">Control</th>
              <th className="py-3 px-4 font-heading font-semibold">Reach</th>
              <th className="py-3 px-4 font-heading font-semibold">When to use</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Exact</td>
              <td className="py-3 px-4">[keyword]</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Highest</span></td>
              <td className="py-3 px-4">Smallest</td>
              <td className="py-3 px-4">Proven winners, limited budget</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Phrase</td>
              <td className="py-3 px-4">&quot;keyword&quot;</td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Medium</span></td>
              <td className="py-3 px-4">Medium</td>
              <td className="py-3 px-4">Campaign launch, discovery</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Broad</td>
              <td className="py-3 px-4">keyword</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Lowest</span></td>
              <td className="py-3 px-4">Largest</td>
              <td className="py-3 px-4">Scaling with Smart Bidding (30+ conversions)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">Strategy by campaign stage</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Launch (month 1-2):</strong> <span className="text-gray-500">— Phrase Match, active Search Terms review, adding negatives</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Optimization (month 3-4):</strong> <span className="text-gray-500">— Exact for top performers, Phrase for discovering new keywords</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Scaling (month 5+):</strong> <span className="text-gray-500">— Broad + Smart Bidding (requirement: 30+ conversions monthly)</span></div>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Negative keywords ── */}
      <h2>Negative Keywords — Protecting Your Budget</h2>
      <p>
        Negative keywords prevent your ads from showing for irrelevant searches. Without them, 20-40% of budget goes to clicks that will never convert.
      </p>
      <p>
        I recommend preparing a starter list of negatives before launching any campaign and reviewing your Search Terms Report weekly.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Complete list and strategy</p>
        <p className="text-blue-800 text-sm mb-0">
          I have prepared a detailed guide with starter lists by industry: <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="underline font-semibold">Negative Keywords — Guide with Lists</Link>.
        </p>
      </div>

      <hr />

      {/* ── Keyword optimization ── */}
      <h2>Keyword Optimization — Weekly Workflow</h2>
      <p>
        Once a campaign is running, keywords require continuous attention. In practice, I use this weekly workflow.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">Weekly workflow (20-30 minutes)</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Search Terms Review</strong> <span className="text-gray-500">— last 7 days, sort by cost, add negatives for irrelevant searches</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Performance analysis</strong> <span className="text-gray-500">— sort by conversions, ensure adequate bid for winners</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Quality Score check</strong> <span className="text-gray-500">— add QS column, focus on QS &lt; 5 for priority optimization</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Pause evaluation</strong> <span className="text-gray-500">— see table below for criteria</span></div>
          </div>
        </div>
      </div>

      <h3>When to pause a keyword</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Situation</th>
              <th className="py-3 px-4 font-heading font-semibold">Minimum data</th>
              <th className="py-3 px-4 font-heading font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Zero clicks</td>
              <td className="py-3 px-4">1000+ impressions</td>
              <td className="py-3 px-4">Check bid and QS</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Clicks without conversions</td>
              <td className="py-3 px-4">100+ clicks</td>
              <td className="py-3 px-4">Evaluate LP and offer</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">CPA too high</td>
              <td className="py-3 px-4">3x target CPA spend</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Pause</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Low QS without improvement</td>
              <td className="py-3 px-4">QS 1-3, 30+ days</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Restructure</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── Advanced strategies ── */}
      <h2>Advanced Keyword Strategies</h2>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Competitor keyword targeting</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Bidding on competitor brand names can be effective — you reach people actively considering alternatives.</p>
        <ul className="text-sm">
          <li>Never use competitor brand in ad text</li>
          <li>Focus on differentiation — why are you better?</li>
          <li>Expect lower QS and CTR for these keywords</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">RLSA keyword expansion</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">With remarketing lists, you can be more aggressive with keywords because users already know you.</p>
        <ul className="text-sm">
          <li>For cold traffic: [crm for small business] (exact)</li>
          <li>For remarketing audience: crm software (broad) — wider reach is ok because they already know you</li>
          <li>More on remarketing: <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="underline">remarketing guide</Link></li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Keyword Sculpting</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Controlling which keyword triggers which ad when you have overlaps between Ad Groups.</p>
        <ul className="text-sm">
          <li><strong>Problem:</strong> You have &quot;crm&quot; and &quot;crm pricing&quot; — which shows for &quot;crm pricing uk&quot;?</li>
          <li><strong>Solution:</strong> Add &quot;pricing&quot; as negative to general Ad Group</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dynamic Keyword Insertion (DKI)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Automatically inserts search term into ad for greater relevance. Useful tool, but test before wide application.</p>
        <ul className="text-sm">
          <li>Syntax: &#123;KeyWord:Default Text&#125;</li>
          <li>Increases relevance and CTR</li>
          <li>Caution: can create strange combinations — always test</li>
        </ul>
      </div>

      <hr />

      {/* ── Common mistakes ── */}
      <h2>Most Common Keyword Mistakes</h2>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #1</p>
          <p className="font-semibold mb-2">Too broad keywords without modifiers</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Add modifiers (type, location, intent). Instead of &quot;software&quot; use &quot;crm software for small business&quot;.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #2</p>
          <p className="font-semibold mb-2">Ignoring Search Terms Report</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Weekly Search Terms review. First 2 months — every 2-3 days. This is the most important optimization activity.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #3</p>
          <p className="font-semibold mb-2">100 keywords in one Ad Group</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Thematic grouping with 10-20 keywords. Test: can you write one relevant ad for all keywords in the group?</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #4</p>
          <p className="font-semibold mb-2">No negative keywords from start</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Prepare a <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="underline font-semibold">starter negative list</Link> before launching campaign + add weekly based on Search Terms.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #5</p>
          <p className="font-semibold mb-2">Focus only on volume, not intent</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Always prioritize intent. 50 searches monthly with transactional intent is worth more than 5,000 informational searches.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #6</p>
          <p className="font-semibold mb-2">Copy-pasting competitor keywords</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Use competitor research as inspiration, but find your own unique angles. Your customers may use different terms.</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2>Frequently Asked Questions About Keywords</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How many keywords do I need to start?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            For one campaign: 30-50 keywords organized into 3-5 Ad Groups. Better to start with fewer and expand based on data than launch too many at once without focus.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Exact or Phrase match for campaign launch?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            I recommend Phrase match for launch. Gives good balance of control and discovery — you see what people actually search for. Add Exact match later for proven performers.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How often should I review Search Terms?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum once weekly. In first 30 days of new campaign — every 2-3 days. For mature campaigns with low wasted spend, weekly is sufficient.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What if a keyword shows 0 searches in Keyword Planner?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            It may still be valuable. Keyword Planner underestimates volume for long-tail keywords. If it is relevant and has transactional intent, test it — it may convert excellently.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Should I target competitor brand names?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Optional and depends on industry. Can be effective for reaching people considering alternatives. Never use competitor brand in ad text — focus on differentiation.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How do I know a keyword is performing poorly?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            100+ clicks without conversions or 3x target CPA spend without results are clear signals. But before pausing, check landing page and ad — the problem may be there, not the keyword.
          </div>
        </details>
      </div>

      <hr />

      {/* ── Conclusion + CTA ── */}
      <h2>Conclusion</h2>
      <p>
        Keywords are the foundation of every successful Google Ads campaign. Proper keyword selection and organization directly determine whether you get quality clicks or waste budget on irrelevant searches. Start with thorough research, organize into thematic groups, use Phrase match for launch, and continuously optimize based on data.
      </p>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Need help with keyword strategy?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Free keyword analysis with recommendations for improvement. I identify wasted spend and missed opportunities.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Schedule free consultation
        </Link>
      </div>

      <hr />

      {/* ── Related guides ── */}
      <h2>Related Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/search-kampanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Search Campaigns</p>
          <p className="text-xs text-gray-500 mb-0">Professional Search campaign management</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negative Keywords — Complete List</p>
          <p className="text-xs text-gray-500 mb-0">Starter lists by industry, strategy and organization</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Quality Score Guide</p>
          <p className="text-xs text-gray-500 mb-0">How to improve QS and reduce CPC by 28%+</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Audit Checklist</p>
          <p className="text-xs text-gray-500 mb-0">80+ points for complete account review</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimizacija" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Optimization — 30 Tactics</p>
          <p className="text-xs text-gray-500 mb-0">Complete strategy for performance improvement</p>
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
