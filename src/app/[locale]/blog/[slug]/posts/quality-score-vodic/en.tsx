import { Link } from "@/i18n/navigation";

export default function QualityScoreGuideEN() {
  return (
    <>
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Quality Score is Google's relevance rating on a 1-10 scale. It directly impacts your ad position and cost per click. Improving QS from 5 to 7 reduces CPC by 28%. Three components: Expected CTR, Ad Relevance, and Landing Page Experience.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1-10</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">rating scale</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">QS components</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">28%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">CPC savings (QS 5→7)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">400%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">CPC penalty for QS 1</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── What is Quality Score ── */}
      <h2>What Is Quality Score and Why It Matters</h2>
      <p>
        Quality Score is Google's diagnostic rating of your keyword, ad, and landing page relevance. It is scored on a 1-10 scale for every keyword in your account.
      </p>
      <p>
        In practice, this is one of the most important metrics for controlling costs. On every audit I conduct, I see that accounts with average QS below 5 pay 50-400% more per click than they should.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Formula: Ad Rank = Max CPC Bid × Quality Score × Expected Impact of Extensions
        </p>
      </div>

      <p>Higher Quality Score means:</p>
      <ul>
        <li><strong>Better position</strong> — higher Ad Rank without increasing bid</li>
        <li><strong>Lower CPC</strong> — you pay less for the same click</li>
        <li><strong>More impressions</strong> — more frequent showing for same budget</li>
        <li><strong>Access to premium positions</strong> — some positions require minimum Ad Rank</li>
      </ul>

      <hr />

      {/* ── CPC impact ── */}
      <h2>How Quality Score Affects Cost Per Click</h2>
      <p>
        This is the most important table in the entire guide. It shows how much more or less you pay depending on QS, with baseline at QS 5.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Quality Score</th>
              <th className="py-3 px-4 font-heading font-semibold">CPC impact</th>
              <th className="py-3 px-4 font-heading font-semibold">Example (baseline $1.00/£1.00)</th>
              <th className="py-3 px-4 font-heading font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">10</td>
              <td className="py-3 px-4">-50%</td>
              <td className="py-3 px-4">$0.50/£0.50</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Excellent</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">9</td>
              <td className="py-3 px-4">-44%</td>
              <td className="py-3 px-4">$0.56/£0.56</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Excellent</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">8</td>
              <td className="py-3 px-4">-37%</td>
              <td className="py-3 px-4">$0.63/£0.63</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Very good</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">7</td>
              <td className="py-3 px-4">-28%</td>
              <td className="py-3 px-4">$0.72/£0.72</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Good</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">6</td>
              <td className="py-3 px-4">-17%</td>
              <td className="py-3 px-4">$0.83/£0.83</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">OK</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">5</td>
              <td className="py-3 px-4">Baseline (0%)</td>
              <td className="py-3 px-4">$1.00/£1.00</td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Average</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">4</td>
              <td className="py-3 px-4">+25%</td>
              <td className="py-3 px-4">$1.25/£1.25</td>
              <td className="py-3 px-4"><span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded">Below average</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">3</td>
              <td className="py-3 px-4">+67%</td>
              <td className="py-3 px-4">$1.67/£1.67</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Poor</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">2</td>
              <td className="py-3 px-4">+150%</td>
              <td className="py-3 px-4">$2.50/£2.50</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Critical</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">1</td>
              <td className="py-3 px-4">+400%</td>
              <td className="py-3 px-4">$5.00/£5.00</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Urgent action</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">ROI example: QS improvement from 5 to 7</p>
        <p className="text-sm text-yellow-900 mb-0">
          Monthly spend $6,000/£5,000 with QS 5. By improving to QS 7, CPC decreases by 28%. That means either $1,680/£1,400 savings monthly for same number of clicks, or 28% more clicks for same budget. Annually: $20,160/£16,800 savings.
        </p>
      </div>

      <hr />

      {/* ── Three components ── */}
      <h2>Three Components of Quality Score</h2>
      <p>
        Each component is rated as: Above average, Average, or Below average. Understanding which component drags QS down is key to efficient optimization.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">~40% impact</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Expected CTR</h3>
          <p className="text-sm text-gray-600 mb-0">Likelihood someone will click your ad. Depends on headlines, CTAs, extensions, and historical performance.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">~20% impact</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Ad Relevance</h3>
          <p className="text-sm text-gray-600 mb-0">How relevant your ad is to the keyword. Depends on keyword match with ad text.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">~40% impact</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Landing Page Experience</h3>
          <p className="text-sm text-gray-600 mb-0">How useful and relevant your LP is. Depends on content, speed, mobile optimization, and trust signals.</p>
        </div>
      </div>

      <h3>Diagnostic table — where is the problem?</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Exp. CTR</th>
              <th className="py-3 px-4 font-heading font-semibold">Ad Relevance</th>
              <th className="py-3 px-4 font-heading font-semibold">LP Exp.</th>
              <th className="py-3 px-4 font-heading font-semibold">Optimization focus</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4 font-medium">Improve ad (headline, CTA, extensions)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4 font-medium">Improve relevance (keyword in ad)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4 font-medium">Improve landing page (speed, content, mobile)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4">Average</td>
              <td className="py-3 px-4 font-medium">Restructure Ad Group (tighter grouping)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Below</span></td>
              <td className="py-3 px-4 font-medium">Complete review — <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="underline">audit checklist</Link></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── Improving Expected CTR ── */}
      <h2>How to Improve Expected CTR</h2>
      <p>Expected CTR makes up ~40% of Quality Score and can be most directly improved by optimizing ads.</p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Keyword in headline</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Instead of generic &amp;quot;Quality Products | Order Today&amp;quot; use &amp;quot;CRM Software For Small Business | Free Trial&amp;quot;.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Use numbers and specificity</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">&amp;quot;Over 500 Products&amp;quot;, &amp;quot;Save Up To 40%&amp;quot;, &amp;quot;30 Day Guarantee&amp;quot;, &amp;quot;24/7 Support&amp;quot; — concrete numbers attract attention and increase CTR.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Strong CTA and USP in headline</h3>
        </div>
        <p className="text-sm text-gray-600 mb-0">Clear action: &amp;quot;Order Today&amp;quot;, &amp;quot;Free Quote&amp;quot;. Unique USP: &amp;quot;Only One With Money-Back Guarantee&amp;quot;, &amp;quot;Same Day Delivery&amp;quot;.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Add all extensions</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Extensions increase ad size and directly impact CTR.</p>
        <ul className="text-sm">
          <li>Sitelinks: +10-20% CTR</li>
          <li>Callouts: +5-10% CTR</li>
          <li>Structured Snippets: +5-10% CTR</li>
        </ul>
      </div>

      <hr />

      {/* ── Improving Ad Relevance ── */}
      <h2>How to Improve Ad Relevance</h2>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">4 tactics for better relevance</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Thematic grouping</strong> <span className="text-gray-500">— 10-20 keywords per Ad Group, thematically related. <Link href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }} className="underline">Keywords guide</Link></span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Keyword in ad</strong> <span className="text-gray-500">— minimum in one headline and in description</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Message match</strong> <span className="text-gray-500">— ad for &amp;quot;CRM pricing&amp;quot; talks about prices, ad for &amp;quot;CRM demo&amp;quot; talks about demo</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Avoid generic ads</strong> <span className="text-gray-500">— &amp;quot;Quality Products&amp;quot; means nothing. Be specific.</span></div>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Improving LP Experience ── */}
      <h2>How to Improve Landing Page Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Priority 1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Content relevance</h3>
          <p className="text-sm text-gray-600 mb-0">LP must match keyword and ad. Dedicated LP for each theme — do not send everything to homepage.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Priority 2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Page speed</h3>
          <p className="text-sm text-gray-600 mb-0">Goal: &lt; 3 seconds load time. Image compression (WebP), minify CSS/JS, CDN, caching, lazy loading.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Priority 3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Mobile optimization</h3>
          <p className="text-sm text-gray-600 mb-0">60%+ traffic is mobile. Responsive design, readable without zooming, clickable buttons.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Priority 4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Trust signals</h3>
          <p className="text-sm text-gray-600 mb-0">Reviews, testimonials, trust badges, SSL, guarantees, contact information. User must trust you.</p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Landing Page checklist</p>
        <p className="text-blue-800 text-sm mb-0">
          Relevant to keyword ✓ Message match with ad ✓ Load time &lt; 3s ✓ Mobile-friendly ✓ Clear CTA above fold ✓ Trust signals ✓ SSL (https) ✓ No intrusive pop-ups ✓
        </p>
      </div>

      <hr />

      {/* ── 30-day plan ── */}
      <h2>30-Day Plan to Improve Quality Score</h2>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Week 1: Audit</strong> <span className="text-gray-500">— add QS columns, identify problematic keywords, analyze components</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Week 2: Ad Relevance</strong> <span className="text-gray-500">— restructure broad Ad Groups, write specific ads, keyword in headline</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Week 3: Landing Pages</strong> <span className="text-gray-500">— page speed check, dedicated LPs if needed, trust signals</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Week 4: CTR optimization</strong> <span className="text-gray-500">— test new ads, add all extensions, A/B test headlines</span></div>
          </div>
        </div>
      </div>

      <hr />

      {/* ── QS by campaign type ── */}
      <h2>Quality Score by Campaign Type</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Campaign type</th>
              <th className="py-3 px-4 font-heading font-semibold">QS visibility</th>
              <th className="py-3 px-4 font-heading font-semibold">What to focus on</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Search</td>
              <td className="py-3 px-4">Fully visible (1-10)</td>
              <td className="py-3 px-4">All three components — most important</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Display</td>
              <td className="py-3 px-4">Less transparent</td>
              <td className="py-3 px-4">Ad relevance, LP experience, historical performance</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Shopping</td>
              <td className="py-3 px-4">No traditional QS</td>
              <td className="py-3 px-4">Product feed quality, prices, seller ratings</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Performance Max</td>
              <td className="py-3 px-4">Not visible</td>
              <td className="py-3 px-4">Google uses internal quality signals</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── Common mistakes ── */}
      <h2>Most Common Quality Score Mistakes</h2>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #1</p>
          <p className="font-semibold mb-2">Obsession with QS 10 for every keyword</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> QS 7-8 is excellent and sufficient. Focus on business metrics (CPA, ROAS) — QS is diagnostic tool, not goal itself.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #2</p>
          <p className="font-semibold mb-2">Completely ignoring QS</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Low QS = higher costs = worse ROI. Use QS as diagnostic tool to identify problems, especially for keywords with highest spend.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #3</p>
          <p className="font-semibold mb-2">50+ keywords in one Ad Group</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Thematic grouping with 10-20 keywords max. Impossible to write relevant ad for 50 different themes.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #4</p>
          <p className="font-semibold mb-2">All ads go to homepage</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Create dedicated landing pages for each theme/Ad Group. Homepage is not relevant for specific searches.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #5</p>
          <p className="font-semibold mb-2">Slow website (5+ seconds load time)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Speed optimization is priority. Image compression, lazy loading, caching. Goal: &lt; 3 seconds. Use PageSpeed Insights for diagnostics.</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2>Frequently Asked Questions About Quality Score</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What is a good Quality Score?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            7+ is good, 8-9 is excellent, 10 is ideal but not always necessary or realistic. For branded keywords expect 8-10, for generic commercial 6-8 is solid result.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How quickly does Quality Score change?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            QS updates based on cumulative performance, but changes show gradually — usually days to weeks. Bigger changes (restructuring Ad Groups, new LPs) require more data to reflect.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does QS affect Display and Shopping campaigns?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Display has similar but less transparent system. Shopping has no traditional QS — uses feed quality, price competitiveness, and seller ratings. PMax uses internal signals not visible.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I have high QS and poor conversions?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Yes. QS measures relevance, not offer quality. You can have perfectly relevant ad and LP for an uncompetitive offer. QS is only part of equation — offer, price, and user experience are equally important.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why do I have low QS for branded keywords?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Likely competitors are bidding on your brand. Branded keywords should have QS 8-10. Check: is brand in ad headline, does LP have brand prominently, are there technical issues with site.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does pausing poor keywords improve QS of others?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Not directly — there is no account-level QS. But indirectly, better focus on quality keywords improves overall account performance which over time helps all metrics.
          </div>
        </details>
      </div>

      <hr />

      {/* ── Conclusion + CTA ── */}
      <h2>Conclusion</h2>
      <p>
        Quality Score is the most powerful tool for controlling costs in Google Ads. Improving from QS 5 to 7 reduces CPC by 28%, which annually can mean thousands in savings. Focus on three components — Expected CTR, Ad Relevance, and Landing Page Experience — using the diagnostic table to identify where the problem is.
      </p>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Are you paying too much per click?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Free QS analysis of your account with identification of keywords costing too much and concrete recommendations for improvement.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Schedule free consultation
        </Link>
      </div>

      <hr />

      {/* ── Related guides ── */}
      <h2>Related Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Keywords — Complete Guide</p>
          <p className="text-xs text-gray-500 mb-0">From research to keyword optimization</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negative Keywords — Complete List</p>
          <p className="text-xs text-gray-500 mb-0">200+ negatives by industry</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Most Common Google Ads Mistakes</p>
          <p className="text-xs text-gray-500 mb-0">12 mistakes that destroy performance</p>
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
