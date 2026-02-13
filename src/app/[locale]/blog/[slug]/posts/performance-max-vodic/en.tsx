import { Link } from "@/i18n/navigation";

export default function PerformanceMaxGuideEN() {
  return (
    <>
      <p>
        Performance Max (PMax) campaigns are Google's most powerful — and most controversial — tool for automated advertising. You give the algorithm budget, creative, and goal, and it finds customers across all Google networks simultaneously.
      </p>
      <p>
        In practice, PMax can be an exceptionally effective channel that scales results or a black hole consuming budget without transparency. The difference is in approach and understanding how the system works.
      </p>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">Performance Max campaigns combine all Google networks in one campaign with automated bidding. I recommend them for scaling after you have stable conversion tracking and sufficient data — minimum 50+ conversions monthly. Hybrid approach delivers best results: Search for control, Shopping for products, PMax for reach.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Google networks</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">50+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">conversions ideal</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">4–6</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">weeks learning</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3–6x</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">ROAS for eCommerce</p>
          </div>
        </div>
      </div>

      <hr />

      <h2>What is Performance Max and why it's special</h2>
      <p>
        Performance Max is an automated campaign using machine learning to show your ads across all Google networks simultaneously: Search, Shopping, Display, YouTube, Gmail, Discover, and Maps. Instead of creating separate campaigns per channel, you give Google raw material and it combines everything in real time.
      </p>
      <p><strong>You provide:</strong></p>
      <ul>
        <li><strong>Conversion goals</strong> — what you want to happen (purchase, lead, call)</li>
        <li><strong>Budget</strong> — daily or campaign-level</li>
        <li><strong>Assets</strong> — images, videos, headlines, descriptions, logos</li>
        <li><strong>Audience signals</strong> — who your target audience is (not strict targeting)</li>
        <li><strong>Product feed</strong> — for eCommerce (linked to Merchant Center)</li>
      </ul>
      <p><strong>Google automatically:</strong></p>
      <ul>
        <li>Combines assets into different ad formats (Responsive, Shopping, Video, Display)</li>
        <li>Decides where and when to show each ad</li>
        <li>Automatically bids for conversions based on real-time data</li>
        <li>Optimizes toward your Target CPA or Target ROAS goal</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">&amp;quot;Black box&amp;quot; problem</p>
        <p className="text-blue-800 text-sm mb-0">PMax doesn't give you the level of control and transparency you have with Search or Shopping campaigns. You don't see all search terms, don't know exact budget allocation per network, can't exclude most placements, don't control bidding per keyword. You get aggregated data and must trust the algorithm. My experience is PMax works best for advertisers who trust data over intuition and have patience for learning period.</p>
      </div>

      <hr />

      <h2>When to use Performance Max campaigns</h2>
      <p>
        PMax isn't a universal solution. In some situations it's ideal, in others it's a mistake. Here's when I recommend PMax vs when not to.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">✅ When YES</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Proven conversion history</h3>
          <p className="text-sm text-gray-600 mb-0">You have minimum 30–50 conversions monthly. Algorithm learns from your data — it needs data to optimize. Without conversion history, PMax shoots randomly.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">✅ When YES</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Want to scale reach</h3>
          <p className="text-sm text-gray-600 mb-0">You've hit ceiling with Search or Shopping campaigns and want to reach users on YouTube, Display, Discover. PMax is a scaling tool, not a launch-from-zero tool.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">❌ When NO</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Small budget</h3>
          <p className="text-sm text-gray-600 mb-0">Below $1,500–2,000 monthly. Algorithm doesn't have enough budget to test and learn across 7 networks. Result is often suboptimal.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">❌ When NO</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Need granular control</h3>
          <p className="text-sm text-gray-600 mb-0">If you need strict cost control per product, brand vs non-brand budget allocation, or bid per keyword — PMax isn't right tool. Use Search or Standard Shopping.</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-sm mb-0">Conversion tracking must be 100% accurate before launching PMax. Bad data = bad algorithm decisions. If you don't have reliable tracking, fix that first. I recommend reading <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="underline">conversion tracking guide</Link> before launching PMax.</p>
      </div>

      <hr />

      <h2>Performance Max campaign structure</h2>
      <p>
        PMax campaign consists of asset groups. Each asset group is a thematic unit with its own creatives, audience signals, and (for eCommerce) product listing groups.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Campaign goal</strong> <span className="text-gray-500">— conversions you're optimizing for</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Budget</strong> <span className="text-gray-500">— daily or campaign-level</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Bid strategy</strong> <span className="text-gray-500">— Maximize Conversions / Target CPA / Target ROAS</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Asset groups</strong> <span className="text-gray-500">— thematic units (images, video, text, audience signals, products)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>URL Expansion setting</strong> <span className="text-gray-500">— I recommend OFF</span></div>
          </div>
        </div>
      </div>

      <p className="font-semibold">What asset group contains:</p>
      <ul>
        <li><strong>Final URL</strong> — landing page where you drive traffic</li>
        <li><strong>Images</strong> — landscape (1.91:1), square (1:1), portrait (4:5)</li>
        <li><strong>Logos</strong> — square (1:1) and landscape (4:1)</li>
        <li><strong>Video</strong> — YouTube video (or Google auto-generates from images)</li>
        <li><strong>Headlines</strong> — short (30 chars) and long (90 chars), minimum 3-5 variants</li>
        <li><strong>Descriptions</strong> — short (60 chars) and long (90 chars), minimum 2-4 variants</li>
        <li><strong>Audience Signals</strong> — targeting suggestions (not strict targeting)</li>
        <li><strong>Listing Group</strong> — product segmentation from feed (for eCommerce)</li>
      </ul>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Thematic consistency rule</p>
        <p className="text-sm text-yellow-900 mb-0">Each asset group should be thematically consistent — products, message, landing page, and audience signals should align. One asset group = one consistent message-to-market match. Don't mix men's shoes with women's bags in same asset group.</p>
      </div>

      <hr />

      <h2>Performance Max for eCommerce</h2>
      <p>
        For eCommerce, PMax is most powerful when launched with optimized product feed. PMax without feed is essentially Display campaign in new packaging — loses Shopping and Product Listing Ads power.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Optimize product feed titles</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Title is most important field in feed. Include key attributes: brand, product type, color, material, size. Algorithm uses title for matching with search queries.</p>
        <ul className="text-sm">
          <li><strong>Bad:</strong> &amp;quot;Nike shoes black&amp;quot;</li>
          <li><strong>Good:</strong> &amp;quot;Nike Air Max 270 Men's Running Shoes Black Size 10&amp;quot;</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Add custom labels for segmentation</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Custom label 0–4 are your free fields for product grouping. I recommend segmentation by profitability and performance.</p>
        <ul className="text-sm">
          <li><strong>Custom Label 0:</strong> Margin (high / medium / low)</li>
          <li><strong>Custom Label 1:</strong> Performance (best_seller / slow_mover / new)</li>
          <li><strong>Custom Label 2:</strong> Season (summer / winter / all_season)</li>
          <li><strong>Custom Label 3:</strong> Price range (premium / mid / budget)</li>
        </ul>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Aspect</th>
              <th className="py-3 px-4 font-heading font-semibold">Standard Shopping</th>
              <th className="py-3 px-4 font-heading font-semibold">Performance Max</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Control</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">High</span></td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Low</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Reach</td>
              <td className="py-3 px-4">Shopping only</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">All networks</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Search Terms</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Full visibility</span></td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Partial</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Learning period</td>
              <td className="py-3 px-4">Faster (1–2 weeks)</td>
              <td className="py-3 px-4">Slower (4–6 weeks)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">My recommendation: Hybrid approach</p>
        <p className="text-blue-800 text-sm mb-0">Start with Standard Shopping campaigns for control and learning. Add PMax when you have stable conversion history (50+ conversions/month). Best results come from combination: Standard Shopping for brand and control, PMax for prospecting and scaling.</p>
      </div>

      <hr />

      <h2>Performance Max for B2B companies</h2>
      <p>
        PMax for B2B is more challenging than for eCommerce. Lower conversion volume, longer sales cycles, and need for lead quality (not just volume) make setup more complex.
      </p>
      <p>My experience is PMax works for B2B when:</p>
      <ul>
        <li>You have minimum 15–20 conversions monthly (form fills or calls)</li>
        <li>Lead-to-sale rate is consistent (you know which leads become clients)</li>
        <li>You can import offline conversions (closed deals from CRM)</li>
      </ul>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Offline conversion import</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">PMax optimizes toward what you tell it is conversion. If you optimize only toward form fills, you'll get volume of form fills — but not necessarily quality ones. Solution: import SQL (Sales Qualified Lead) or Won deals back to Google Ads.</p>
        <ul className="text-sm">
          <li>GCLID mapping with CRM</li>
          <li>Import &amp;quot;Won Deal&amp;quot; conversion from CRM (Pipedrive, HubSpot, Salesforce)</li>
          <li>PMax learns what quality lead looks like</li>
        </ul>
      </div>

      <hr />

      <h2>Performance Max optimization</h2>
      <p>
        Biggest frustration with PMax is limited control. But control isn't zero — you have levers you can move. Here's what you can (and should) optimize.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Asset quality and diversity</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Google combines your assets into different formats. More quality variants you provide, better algorithm can optimize.</p>
        <ul className="text-sm">
          <li>Regularly refresh creative (minimum every 2–3 months)</li>
          <li>A/B test different messages in headlines</li>
          <li>Track asset performance ratings (Low / Good / Best)</li>
          <li>Immediately replace &amp;quot;Low&amp;quot; rated assets</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Audience signals refinement</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Audience signals aren't strict targeting, but help algorithm learn faster. Better signals, faster learning.</p>
        <ul className="text-sm">
          <li>Add audience signals (Custom Audiences, Customer Match, Affinity)</li>
          <li>From Insights tab see which audience segments perform</li>
          <li>First-party data (your website visitors, email lists) is most important signal</li>
        </ul>
      </div>

      <hr />

      <h2>Most common Performance Max mistakes</h2>
      <p>
        These are mistakes I see with 90% of advertisers trying PMax first time — and they cost money.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #1</p>
          <p className="font-semibold mb-2">Launching without sufficient conversion data</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> First build conversion history with Search or Shopping campaigns. Minimum 30 conversions monthly before launching PMax. Otherwise, algorithm shoots randomly.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #2</p>
          <p className="font-semibold mb-2">One asset set for all categories</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Segment asset groups by relevance. Different product categories = different asset groups with custom creative. Generic assets = generic results.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #3</p>
          <p className="font-semibold mb-2">Ignoring audience signals</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Audience signals aren't targeting, but help algorithm learn faster. Add Customer Match lists, website visitors, in-market audiences. Better signals, faster learning. I recommend minimum 3–5 different audience signals per asset group.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2>Realistic expectations and results</h2>
      <p>
        Most important question: what can you expect from PMax in practice? Here are realistic numbers based on my experience with 20+ PMax campaigns.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Metric</th>
              <th className="py-3 px-4 font-heading font-semibold">eCommerce</th>
              <th className="py-3 px-4 font-heading font-semibold">B2B Lead Gen</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">ROAS / CPL</td>
              <td className="py-3 px-4">3–6x ROAS (optimized campaigns)</td>
              <td className="py-3 px-4">Variable — often higher CPL than Search</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Volume increase</td>
              <td className="py-3 px-4">20–40% revenue increase vs Search/Shopping only</td>
              <td className="py-3 px-4">Volume significantly grows, but lead quality varies</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Learning period</td>
              <td className="py-3 px-4">4–6 weeks</td>
              <td className="py-3 px-4">6–8 weeks (longer sales cycle)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Minimum conversions</td>
              <td className="py-3 px-4">50+ monthly ideal</td>
              <td className="py-3 px-4">15–20 monthly minimum</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Minimum budget</td>
              <td className="py-3 px-4">$2,000+ monthly</td>
              <td className="py-3 px-4">$1,500+ monthly</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Rule: When to quit PMax</p>
        <p className="text-sm text-yellow-900 mb-0">If after 8–10 weeks and 100+ conversions results are consistently below target (ROAS below target, CPA above acceptable, lead quality unacceptable) and you see no improvement trend — maybe PMax isn't for your business right now. Return to basics: Search or Shopping campaigns with more control.</p>
      </div>

      <hr />

      <h2>Frequently asked questions</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does Performance Max replace Shopping campaigns?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Not necessarily. Many advertisers use both formats — Standard Shopping for brand and control, PMax for prospecting and scaling. Google actively pushes PMax, but Shopping campaigns still work excellently. My recommendation: hybrid approach. Don't close Shopping campaigns if performing well, add PMax as additional channel.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What budget is needed for Performance Max?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum $60–120 daily ($2,000–3,500 monthly) for meaningful results. Below that, algorithm doesn't have enough budget to test 7 different networks and collect sufficient data for optimization. For B2B with lower conversion volume, can work with $40–60 daily, but learning will be slower.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why don't I see all search terms in PMax campaigns?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Google limits search terms insights for PMax. You only see aggregated categories and top terms, not everything like in Search campaigns. This is legitimate PMax criticism — transparency is lost. Reason is PMax works across multiple networks simultaneously and Google doesn't want to show complete data stream. Solution: use Insights tab and look at trends, not individual terms.
          </div>
        </details>
      </div>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Considering Performance Max campaign?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">I help companies launch and optimize PMax campaigns with hybrid approach — Search for control, Shopping for products, PMax for scaling. Schedule free consultation to see if PMax is right choice for your business.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Schedule free consultation</Link>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">PMax is powerful tool — but not magic. Works best when you have solid conversion tracking, quality assets, and patience for learning period. My advice: use PMax as part of strategy, not as only campaign.</p>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: January 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Author: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
