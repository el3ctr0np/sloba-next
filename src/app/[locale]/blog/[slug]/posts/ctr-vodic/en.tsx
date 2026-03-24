import { Link } from "@/i18n/navigation";

export default function CTRGuidePost() {
  return (
    <>
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">In brief</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          CTR (Click-Through Rate) is the percentage of people who click on your ad after seeing it. Formula: (Clicks ÷ Impressions) × 100. For Search campaigns, aim for 5-10%+, and niche campaigns can achieve 15-20%+. But remember: high CTR ≠ successful campaign.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">5-10%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">good CTR for Search</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">15-20%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">possible for niche campaigns</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">~40%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">CTR impact on Quality Score</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0.5-1%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">average for Display</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Table of Contents ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#what-is-ctr" className="text-sm text-gray-700 hover:text-primary underline">What is CTR and why it matters</a></li>
          <li><a href="#formula-and-examples" className="text-sm text-gray-700 hover:text-primary underline">Formula and calculation examples</a></li>
          <li><a href="#ctr-benchmarks" className="text-sm text-gray-700 hover:text-primary underline">CTR benchmarks by campaign type</a></li>
          <li><a href="#case-study-ankibuddy" className="text-sm text-gray-700 hover:text-primary underline">Case Study: AnkiBuddy — from 6-8% to 20% CTR</a></li>
          <li><a href="#mistakes-killing-ctr" className="text-sm text-gray-700 hover:text-primary underline">5 common mistakes that kill CTR</a></li>
          <li><a href="#diagnosing-low-ctr" className="text-sm text-gray-700 hover:text-primary underline">How to diagnose low CTR (3 steps)</a></li>
          <li><a href="#how-to-improve-ctr" className="text-sm text-gray-700 hover:text-primary underline">7 ways to improve CTR</a></li>
          <li><a href="#when-low-ctr-is-ok" className="text-sm text-gray-700 hover:text-primary underline">When low CTR is actually OK</a></li>
          <li><a href="#myth-high-ctr" className="text-sm text-gray-700 hover:text-primary underline">MYTH: "High CTR = successful campaign"</a></li>
          <li><a href="#faq" className="text-sm text-gray-700 hover:text-primary underline">Frequently asked questions about CTR</a></li>
          <li><a href="#related-guides" className="text-sm text-gray-700 hover:text-primary underline">Related guides</a></li>
        </ol>
      </nav>

      {/* ── What is CTR ── */}
      <h2 id="what-is-ctr">What is CTR and why it matters</h2>
      <p>
        <strong>CTR (Click-Through Rate)</strong> is the percentage of people who click on your ad after seeing it. It&apos;s one of the most important quality signals in Google Ads.
      </p>
      <p>
        Simply put: if 100 people see your ad and 5 click on it — your CTR is 5%.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Formula: CTR = (Number of clicks ÷ Number of impressions) × 100
        </p>
      </div>

      <p>Why CTR matters:</p>
      <ul>
        <li><strong>Impacts Quality Score</strong> — Expected CTR accounts for about 40% of your quality rating</li>
        <li><strong>Lowers CPC</strong> — higher CTR = higher Quality Score = lower cost per click</li>
        <li><strong>Relevance signal</strong> — Google sees that users are responding to your ad</li>
        <li><strong>More clicks for the same budget</strong> — better CTR means more efficient spending</li>
      </ul>

      <hr />

      {/* ── Formula and examples ── */}
      <h2 id="formula-and-examples">Formula and calculation examples</h2>
      <p>
        The formula is simple, but understanding it in context is key.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Impressions</th>
              <th className="py-3 px-4 font-heading font-semibold">Clicks</th>
              <th className="py-3 px-4 font-heading font-semibold">CTR</th>
              <th className="py-3 px-4 font-heading font-semibold">Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1,000</td>
              <td className="py-3 px-4">20</td>
              <td className="py-3 px-4">2%</td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Average</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">1,000</td>
              <td className="py-3 px-4">50</td>
              <td className="py-3 px-4">5%</td>
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Good</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">1,000</td>
              <td className="py-3 px-4">100</td>
              <td className="py-3 px-4">10%</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Excellent</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">1,000</td>
              <td className="py-3 px-4">200</td>
              <td className="py-3 px-4">20%</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Exceptional (niche)</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── CTR Benchmarks ── */}
      <h2 id="ctr-benchmarks">CTR benchmarks by campaign type</h2>
      <p>
        Benchmarks vary dramatically by campaign type. A 1% Display CTR is excellent, while for Search it would be poor.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Search campaigns</h3>
          <p className="text-2xl font-heading font-bold text-green-600 mb-2">5-10%+</p>
          <p className="text-sm text-gray-600 mb-0">For niche campaigns, CTR can reach 10-15%+. Exact match with specific keywords can achieve up to 20%.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Display campaigns</h3>
          <p className="text-2xl font-heading font-bold text-blue-600 mb-2">0.5-1%</p>
          <p className="text-sm text-gray-600 mb-0">Lower CTR is normal as these are awareness ads. Remarketing Display can be higher.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Shopping campaigns</h3>
          <p className="text-2xl font-heading font-bold text-purple-600 mb-2">1-3%</p>
          <p className="text-sm text-gray-600 mb-0">Depends on product and price. Premium products with good images have higher CTR.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">YouTube campaigns</h3>
          <p className="text-2xl font-heading font-bold text-red-600 mb-2">0.5-2%</p>
          <p className="text-sm text-gray-600 mb-0">Skippable ads have lower CTR. Non-skippable and bumper ads are measured differently.</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Important: Branded vs Non-branded</p>
        <p className="text-sm text-yellow-900 mb-0">
          Always separate branded from non-branded campaigns. If your non-branded campaigns have unexpectedly high CTR (e.g., 25-30%), you probably haven&apos;t removed branded search terms. That&apos;s not a sign of success — it&apos;s a structural mistake.
        </p>
      </div>

      <hr />

      {/* ── Case Study AnkiBuddy ── */}
      <h2 id="case-study-ankibuddy">Case Study: AnkiBuddy — from 6-8% to 20% CTR</h2>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 my-6">
        <p className="font-heading font-semibold mb-2">From my experience</p>
        <p className="text-sm text-blue-900 mb-0">
          Due to NDA agreements, I cannot share financial metrics, but I can explain the strategy and approach. This demonstrates that I&apos;m a serious partner who respects client confidentiality.
        </p>
      </div>

      <p>
        <strong>AnkiBuddy</strong> is an EdTech SaaS platform that uses AI to automatically generate Anki flashcards from lecture PDFs. The primary market is medical students in the DACH region (Germany, Austria, Switzerland).
      </p>

      <h3>Challenge</h3>
      <p>
        When I took over the account, Search campaigns had an average CTR of 6-8%. For a SaaS with narrow targeting, this wasn&apos;t bad — but I knew it could be better.
      </p>

      <h3>Strategy</h3>
      <ul>
        <li><strong>Highly specific keywords</strong> — focused on terms medical students actually use when searching for study tools</li>
        <li><strong>Pain points in headlines</strong> — emphasized problems students face (time, volume of material, exam preparation)</li>
        <li><strong>Benefits over features</strong> — instead of &quot;AI generates cards&quot; → &quot;Save 10 hours weekly on creating flashcards&quot;</li>
      </ul>

      <h3>Result</h3>
      <div className="bg-green-50 border-2 border-green-400 rounded-xl p-5 my-6">
        <p className="text-2xl font-heading font-bold text-green-700 mb-2">CTR: up to 20%</p>
        <p className="text-sm text-green-800 mb-0">
          From the initial 6-8% on Search campaigns, we achieved over 20% CTR for the best Ad Groups. The key was understanding the exact needs of the target audience.
        </p>
      </div>

      <p>
        <Link href={{ pathname: "/case-studies/[slug]", params: { slug: "ankibuddy" } }} className="text-primary underline">
          View the complete AnkiBuddy case study →
        </Link>
      </p>

      <hr />

      {/* ── 5 Mistakes ── */}
      <h2 id="mistakes-killing-ctr">5 common mistakes that kill CTR</h2>
      <p>
        On most accounts I take over — even those with monthly budgets of €5-10k — I see the same mistakes.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #1</p>
          <p className="font-semibold mb-2">Generic headlines without benefits and numbers</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Add specific numbers (&quot;Repairs from $50&quot;), questions (&quot;Looking for a plumber?&quot;) and urgency (&quot;Available today&quot;).</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #2</p>
          <p className="font-semibold mb-2">Too few extensions (or none at all)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Use all available extensions — sitelinks, callouts, structured snippets, call extension (mandatory for services). Extensions increase CTR by 10-20%.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #3</p>
          <p className="font-semibold mb-2">Broad match without control</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Use narrower match types (phrase, exact) or if using broad — add an extensive negative keyword list and regularly review the Search Terms Report.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #4</p>
          <p className="font-semibold mb-2">Not separating branded from non-branded</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Create a separate branded campaign. Add your brand as a negative keyword in non-branded campaigns. This gives you accurate insights into CTR for both categories.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #5</p>
          <p className="font-semibold mb-2">Not testing ads</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Have a minimum of 2 RSA ads per Ad Group. Test different descriptions, sitelinks, or completely different approaches. It depends on the client and industry.</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Diagnosis ── */}
      <h2 id="diagnosing-low-ctr">How to diagnose low CTR (3 steps)</h2>
      <p>
        When CTR drops or is low from the start, here&apos;s my diagnostic sequence:
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">1</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Search Terms Report</h3>
            <p className="text-sm text-gray-600 mb-0">First check if the queries are relevant. If you&apos;re getting clicks for irrelevant searches, CTR will be low because the ad isn&apos;t meant for those people. Add negative keywords.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">2</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Ad Copy analysis</h3>
            <p className="text-sm text-gray-600 mb-0">Review headlines and descriptions. Are they generic? Do they have numbers, questions, urgency? Do they communicate WHY to buy? Rewrite ads with clear benefits.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">3</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Auction Insights</h3>
            <p className="text-sm text-gray-600 mb-0">Look at the competition. If your Impression Share dropped and competitors added new ads, you might need a more aggressive approach or better bidding.</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── 7 ways ── */}
      <h2 id="how-to-improve-ctr">7 ways to improve CTR</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic #1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Headlines with numbers</h3>
          <p className="text-sm text-gray-600 mb-0">&quot;Repairs from $50&quot; or &quot;Delivery in 30 minutes&quot; attract more attention than generic headlines.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic #2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Headlines with questions</h3>
          <p className="text-sm text-gray-600 mb-0">&quot;Looking for a plumber?&quot; or &quot;Need an auto mechanic?&quot; directly address the user&apos;s need.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic #3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Headlines with urgency</h3>
          <p className="text-sm text-gray-600 mb-0">&quot;Available today&quot;, &quot;24/7 service&quot;, &quot;We arrive in 30 min&quot; — urgency drives action.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic #4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Sitelinks to sections</h3>
          <p className="text-sm text-gray-600 mb-0">Instead of generic links, link to specific sections of the landing page. This helps users get to the desired information faster.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic #5</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Industry-specific callouts</h3>
          <p className="text-sm text-gray-600 mb-0">For some industries, pain points work (&quot;No hidden fees&quot;), for others benefits (&quot;Free shipping&quot;). Test both approaches.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic #6</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Call extension for services</h3>
          <p className="text-sm text-gray-600 mb-0">Mandatory for all service businesses. Direct calls from ads increase overall engagement and conversions.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic #7</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Pinned headlines on Position 1</h3>
          <p className="text-sm text-gray-600 mb-0">Pin key benefits to Position 1 to ensure they always appear. Don&apos;t leave everything to Google&apos;s algorithm.</p>
        </div>
      </div>

      <hr />

      {/* ── When low CTR is OK ── */}
      <h2 id="when-low-ctr-is-ok">When low CTR is actually OK</h2>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-3">Low CTR isn&apos;t always a problem</p>
        <ul className="text-sm text-yellow-900 mb-0 space-y-2">
          <li><strong>Display remarketing</strong> — expect 0.5-1%, the goal is reminding, not immediate clicks</li>
          <li><strong>Brand awareness campaigns</strong> — the goal is brand visibility, not clicks</li>
          <li><strong>Competitive industries</strong> — some sectors have naturally lower benchmarks (e.g., insurance, finance)</li>
          <li><strong>Top-of-funnel YouTube</strong> — video ads for broader audiences have lower CTR because the goal is reach</li>
        </ul>
      </div>

      <p>
        The key is understanding the <strong>campaign goal</strong>. If the goal is brand awareness, a 0.3% CTR on the Display network may be perfectly fine. But if the goal is lead generation on Search, a 2% CTR is a signal for optimization.
      </p>

      <hr />

      {/* ── Myth ── */}
      <h2 id="myth-high-ctr">MYTH: &quot;High CTR = successful campaign&quot;</h2>

      <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-red-700 text-lg mb-2">This is FALSE</p>
        <p className="text-sm text-red-800 mb-0">
          High CTR means people are clicking on the ad. But it DOESN&apos;T mean they&apos;re buying, calling, or sending inquiries. You can have 20% CTR and 0 conversions. CTR is only one part of the equation.
        </p>
      </div>

      <p>
        This is the most common myth I hear from clients. &quot;We have great CTR, but no results&quot; — because CTR measures only the first step (click), not the final goal (conversion).
      </p>

      <p>
        <strong>Example:</strong> A campaign with 20% CTR and 0 conversions is worse than a campaign with 5% CTR and 10 conversions. Always look at the complete picture: CTR + Conversion Rate + CPA/ROAS.
      </p>

      <hr />

      {/* ── FAQ ── */}
      <h2 id="faq">Frequently asked questions about CTR</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What is a good CTR?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            For Search campaigns, aim for 5-10%. For niche campaigns with specific keywords in closed match types (exact, phrase), CTR can be 10-15%+. Account benchmark is a good reference point — track it in the Google Ads interface.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why is my CTR dropping?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Most common reasons: new competition (check Auction Insights), outdated ads (refresh copy), poor search terms (check Search Terms Report), or seasonality. Use my 3-step diagnostic process: Search Terms → Ad Copy → Auction Insights.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does CTR affect cost per click?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Yes, indirectly. CTR affects Expected CTR, which is a component of Quality Score. Higher Quality Score = lower CPC. Improving QS from 5 to 7 can reduce CPC by 28%.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How to separate branded from non-branded CTR?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Create a separate branded campaign with your brand keywords. In non-branded campaigns, add your brand as a negative keyword. This gives you clean data for both categories and accurate insight into actual performance.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How to view CTR in Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            In the Google Ads interface, CTR is a standard column in the campaigns, ad groups, ads, and keywords overview. If you don&apos;t see the column, click &quot;Columns&quot; → &quot;Modify columns&quot; → add &quot;CTR&quot;. You can also track it through Google Ads Editor or API.
          </div>
        </details>
      </div>

      <hr />

      {/* ── CTA ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Is low CTR wasting your budget?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Free account analysis identifying ads with low CTR and concrete recommendations for improvement.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Book a free consultation
        </Link>
      </div>

      <hr />

      {/* ── Related guides ── */}
      <h2 id="related-guides">Related guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Quality Score — complete guide</p>
          <p className="text-xs text-gray-500 mb-0">How CTR impacts Quality Score and cost per click</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-keyword-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Keywords — complete guide</p>
          <p className="text-xs text-gray-500 mb-0">From research to keyword optimization</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimization" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads optimization — 30 tactics</p>
          <p className="text-xs text-gray-500 mb-0">Complete strategy for improving performance</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "how-to-start-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">How to start with Google Ads</p>
          <p className="text-xs text-gray-500 mb-0">Beginner&apos;s guide — from zero to first campaign</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "responsive-search-ads-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">RSA (Responsive Search Ads) guide</p>
          <p className="text-xs text-gray-500 mb-0">How to write ads that increase CTR</p>
        </Link>
        <Link href="/usluge/google-ads-audit" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads audit</p>
          <p className="text-xs text-gray-500 mb-0">Identify ads with low CTR</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: March 2026
      </div>
      <div className="text-sm text-gray-500">
        Author: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}
