import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function GoogleAdsBudgetPlanningEN() {
  return (
    <>
      {/* ── TL;DR hero ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Your Google Ads budget isn&apos;t a fixed number — it&apos;s a three-phase process: test, optimize, scale.
          What you spend in month one should look different from what you spend in month three, and that shift needs to be planned, not improvised.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">3 phases</p>
            <p className="text-xs text-slate-400 mt-1">test → optimize → scale</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">~30 days</p>
            <p className="text-xs text-slate-400 mt-1">length of the test phase</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">30-50</p>
            <p className="text-xs text-slate-400 mt-1">conversions/30 days for smart bidding</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">Max CPA × Goal</p>
            <p className="text-xs text-slate-400 mt-1">monthly budget formula</p>
          </div>
        </div>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Quick Answer
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          How much budget do I need for Google Ads?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          Work backward from your goal: <strong>maximum cost per conversion × the number of conversions you want per month</strong> — not from how much cash you happen to have sitting around. Month one goes toward collecting data, not hitting your full target. This is a question about AD spend — for what it costs to have someone run the campaigns (agency, freelancer, or your own time), see{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "how-much-does-google-ads-cost" } }} className="underline">how much Google Ads costs</Link>.
        </p>
      </div>

      {/* ── Table of Contents ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#ad-budget-vs-management-cost" className="block py-1 text-base text-gray-700 hover:text-primary underline">Ad budget vs. management cost</a></li>
          <li><a href="#how-much-to-start-with-by-business-type" className="block py-1 text-base text-gray-700 hover:text-primary underline">How much to start with, by business type</a></li>
          <li><a href="#how-to-split-your-budget-across-phases" className="block py-1 text-base text-gray-700 hover:text-primary underline">How to split your budget across phases</a></li>
          <li><a href="#splitting-budget-across-campaigns-and-channels" className="block py-1 text-base text-gray-700 hover:text-primary underline">Splitting budget across campaigns and channels</a></li>
          <li><a href="#when-to-increase-budget" className="block py-1 text-base text-gray-700 hover:text-primary underline">When to increase budget</a></li>
          <li><a href="#daily-vs-monthly-budget-in-practice" className="block py-1 text-base text-gray-700 hover:text-primary underline">Daily vs. monthly budget in practice</a></li>
          <li><a href="#check-whether-your-budget-actually-pays-off" className="block py-1 text-base text-gray-700 hover:text-primary underline">Check whether your budget actually pays off</a></li>
          <li><a href="#worked-examples-3-scenarios" className="block py-1 text-base text-gray-700 hover:text-primary underline">Worked examples: 3 scenarios</a></li>
          <li><a href="#budget-planning-mistakes" className="block py-1 text-base text-gray-700 hover:text-primary underline">Budget planning mistakes</a></li>
          <li><a href="#next-steps" className="block py-1 text-base text-gray-700 hover:text-primary underline">Next steps</a></li>
          <li><a href="#frequently-asked-questions-about-budget" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions about budget</a></li>
          <li><a href="#related-guides" className="block py-1 text-base text-gray-700 hover:text-primary underline">Related Guides</a></li>
        </ol>
      </nav>

      <h2 id="ad-budget-vs-management-cost">Ad budget vs. management cost</h2>
      <p>
        These two get mixed up constantly, so let&apos;s separate them upfront. <strong>Ad budget</strong> is the money that goes straight to Google for clicks — that&apos;s what this guide is about. <strong>Management cost</strong> is what you pay an agency, a freelancer, or your own time to spend that budget well — I&apos;ve covered that separately in{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "how-much-does-google-ads-cost" } }} className="underline">
          the guide to Google Ads pricing
        </Link>.
      </p>
      <p>
        If you&apos;re setting up your first account and don&apos;t know where to start, read{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "how-to-start-google-ads" } }} className="underline">
          how to start with Google Ads
        </Link>{" "}
        first — that guide covers account setup, tracking, and your first campaign. This post assumes you&apos;ve done that and answers one specific question: <strong>how much to spend, and how to spread that amount across time and across campaigns</strong>.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">From my experience</p>
        <p className="text-blue-800 text-base mb-0">
          The most common mistake I see isn&apos;t too small a budget — it&apos;s a decent budget stretched across too many campaigns at once. $1,000 split five ways means none of them ever collects enough data to get optimized. Fewer campaigns with real room to run beats more campaigns starved of spend.
        </p>
      </div>

      <hr />

      <h2 id="how-much-to-start-with-by-business-type">How much to start with, by business type</h2>
      <p>
        Instead of looking at how much cash you have on hand, start from the goal. The formula is the same regardless of business type:
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Monthly budget formula</p>
        <p className="text-base text-yellow-900 mb-0">
          Monthly budget = <strong>maximum cost per conversion (max CPA)</strong> × <strong>target number of conversions per month</strong>.
          Not monthly budget = clicks × CPC — that only tells you how much traffic you&apos;re buying, not whether it&apos;s worth buying.
        </p>
      </div>

      <p>
        This differs from the beginner baseline in the starter guide (my rule of thumb of <strong>10-15 clicks a day minimum</strong> — see{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "how-to-start-google-ads" } }} className="underline">how to start with Google Ads</Link>) because that baseline is for the TEST phase. The formula above applies once you already know your max CPA and are planning budget for a target volume, not for a first trial month.
      </p>
      <ul>
        <li><strong>Local service (lead gen):</strong> max CPA per inquiry × how many inquiries you can actually handle per month</li>
        <li><strong>eCommerce:</strong> max CPA derived from margin × target number of orders — a detailed CPC table by industry is in{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "how-much-does-google-ads-cost" } }} className="underline">the Google Ads pricing guide</Link>
        </li>
        <li><strong>B2B service:</strong> max CPA per qualified lead × target number of leads, with the awareness that the sale closes months later</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Why start from the goal, not from clicks</p>
        <p className="text-blue-800 text-base mb-0">
          A click-based formula (target clicks per day × CPC) tells you how much traffic you&apos;re buying. It doesn&apos;t tell you whether that traffic is worth it. I&apos;ve seen accounts with a healthy click count and zero profit — because the budget was planned backward from CPC, not forward from margin.
        </p>
      </div>

      <hr />

      <h2 id="how-to-split-your-budget-across-phases">How to split your budget across phases</h2>
      <p>
        This is the part most people skip, and it does more than anything else to determine whether an account succeeds. Budget doesn&apos;t get spent the same way in month one and month three — it moves through three phases.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Phase</th>
              <th className="py-3 px-3 font-heading font-semibold">Duration</th>
              <th className="py-3 px-3 font-heading font-semibold">Focus</th>
              <th className="py-3 px-3 font-heading font-semibold">When you move on</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">1. Test</td>
              <td className="py-3 px-3">~30 days</td>
              <td className="py-3 px-3">1-2 narrow campaigns, the goal is data — not conversions at any cost</td>
              <td className="py-3 px-3">enough clicks to see search terms and an early CTR signal</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">2. Optimize</td>
              <td className="py-3 px-3">30-60 days (month 2-3)</td>
              <td className="py-3 px-3">reallocate within the same budget toward what works, cut what doesn&apos;t</td>
              <td className="py-3 px-3">campaign consistently under max CPA, search terms cleaned up</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">3. Scale</td>
              <td className="py-3 px-3">month 3+</td>
              <td className="py-3 px-3">increase budget only on campaigns still under the profitability ceiling</td>
              <td className="py-3 px-3">30+ conversions/30 days for <GlossaryLink slug="tcpa">tCPA</GlossaryLink>, 50+ for <GlossaryLink slug="troas">tROAS</GlossaryLink></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-base text-gray-500 mt-3">
        Those smart-bidding thresholds are Google&apos;s own guidance. For how the mechanism itself works, see{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-guide" } }} className="underline">the Smart Bidding guide</Link>.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Why phase 1 isn&apos;t about conversions</p>
        <p className="text-blue-800 text-base mb-0">
          In the first 30 days I don&apos;t measure success by how many conversions came in — I measure it by how much I learned about which searches bring in which people. If you kill a campaign in month one because it &quot;doesn&apos;t have enough conversions,&quot; you probably killed it right as it started learning.
        </p>
      </div>

      <hr />

      <h2 id="splitting-budget-across-campaigns-and-channels">Splitting budget across campaigns and channels</h2>
      <p>
        Once you&apos;re past the test phase, the next question is how to split that same monthly amount between campaigns within the account.
      </p>
      <ul>
        <li><strong>eCommerce (Search + Shopping):</strong> across the accounts I run and in industry reports, Shopping typically carries around 80% of an eCommerce account&apos;s budget — that&apos;s a pattern from practice, not a rule for every account. Your split depends on catalog size and margin.</li>
        <li><strong>Search — brand vs. non-brand:</strong> brand terms are cheaper and convert better, but they don&apos;t bring in new customers. Reserve most of the budget for non-brand, and keep brand at the minimum that protects your position.</li>
        <li><strong>Remarketing:</strong> a small reserve (usually the cheapest channel per conversion) — it isn&apos;t spent on new visitors, so it shouldn&apos;t compete with acquisition budget.</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">The caveat around the 80% rule</p>
        <p className="text-yellow-800 text-base mb-0">
          80% to Shopping is what industry reports record as an average, not a recommendation to copy. If your catalog is under ~50 SKUs or your products are margin-sensitive, Standard Shopping or a different split can perform better — that&apos;s a conversation for an audit, not a general rule.
        </p>
      </div>

      <hr />

      <h2 id="when-to-increase-budget">When to increase budget</h2>
      <p>
        Don&apos;t raise budget because &quot;it&apos;s going well&quot; or because the quarter is ending. Raise it when you see concrete signals:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>You&apos;re losing <GlossaryLink slug="impression-share">impression share</GlossaryLink> to budget</strong>
              <span className="text-gray-500"> — Google&apos;s &quot;Lost IS (budget)&quot; report shows how many impressions you&apos;re missing because the budget runs out before the day ends</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>The campaign is consistently above the conversion threshold</strong>
              <span className="text-gray-500"> — ~30 conversions/30 days for tCPA and ~50 for tROAS is{" "}
                <a href="https://support.google.com/google-ads/answer/7065882" target="_blank" rel="noopener noreferrer" className="underline">Google&apos;s own guidance</a>. For Performance Max specifically, we use a finer threshold in practice — under 30 conversions we don&apos;t switch to automated bidding, 30-50 is a gray zone, 50+ means enough data; that&apos;s our own rule from practice, not something Google publishes officially.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Your break-even CPA/CPC still has room</strong>
              <span className="text-gray-500"> — a budget increase must not push actual CPA above the ceiling your margin allows. Check this before you increase, not after.</span>
            </div>
          </div>
        </div>
      </div>

      <p>
        All three signals need to line up. An impression-share loss without enough conversions for reliable bidding means you fix the data problem first, not the budget.
      </p>

      <hr />

      <h2 id="daily-vs-monthly-budget-in-practice">Daily vs. monthly budget in practice</h2>
      <p>
        The number you enter into Google Ads is a <strong>daily budget</strong>, not a monthly one. Google treats it as an average, not a hard ceiling for any single day — on higher-demand days it can spend up to double your daily budget, and less on quieter days. Over the course of a month, billing won&apos;t exceed your daily budget multiplied by the average number of days in a month (30.4). Google explains the mechanics in detail in the{" "}
        <a href="https://support.google.com/google-ads/answer/2375454" target="_blank" rel="noopener noreferrer" className="underline">
          Ads Help Center
        </a>.
      </p>
      <p>
        In practice, that means two things for planning:
      </p>
      <ul>
        <li>Don&apos;t panic if one day spends more than your &quot;daily limit&quot; — that&apos;s normal, as long as the monthly average matches the plan.</li>
        <li>Plan seasonal swings (Black Friday, holidays, summer season) in advance through an adjusted daily budget for that period — don&apos;t react mid-campaign once you notice you&apos;re running low.</li>
      </ul>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <p className="font-semibold text-gray-900 mb-1">When to ask leadership or a client for more budget</p>
        <p className="text-base text-gray-600 mb-0">
          Not with &quot;the trend looks good&quot; — with the break-even math. If max CPA is $25 and current CPA is $18, there&apos;s room to increase budget and stay profitable. If current CPA is already at $24, raising budget before fixing efficiency just scales the problem, not the result.
        </p>
      </div>

      <hr />

      <h2 id="check-whether-your-budget-actually-pays-off">Check whether your budget actually pays off</h2>
      <p>
        If you run eCommerce, I built a free tool that runs this math for you: enter average order value, margin, conversion rate, and budget, and it returns your break-even ROAS and real profitability — with a transparent formula, not a black box.
      </p>
      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card text-center">
        <p className="font-heading font-bold text-lg mb-2">Profit-Leak Calculator</p>
        <p className="text-base text-gray-600 mb-4">Enter your numbers, get your break-even ROAS and a full breakdown by email within 24h.</p>
        <Link href="/profit-provera" className="btn-secondary inline-block">
          Check your budget
        </Link>
      </div>
      <p>
        For lead gen and B2B I don&apos;t have a dedicated tool yet — the logic is simple enough to work out by hand: <strong>max CPA × landing page conversion rate = max CPC</strong> you can afford, and you compare that max CPC against the real CPC in your industry.
      </p>

      <hr />

      <h2 id="worked-examples-3-scenarios">Worked examples: 3 scenarios</h2>

      <h3>1. Small local business (HVAC repair)</h3>
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <div className="text-base text-yellow-900 space-y-1">
          <p className="mb-1">Goal: 10 inquiries/month | Max CPA per inquiry: $200 (the $150-250 range is what I typically see for trades like HVAC — a pattern from practice, not a published benchmark)</p>
          <p className="mb-1">Assume a landing page CVR of 4% (within the canonical 2-6% range for lead forms)</p>
          <p className="mb-1"><strong>Max CPC = $200 × 0.04 = $8.00</strong></p>
          <p className="mb-0"><strong>Target monthly budget = $200 × 10 = $2,000</strong></p>
        </div>
      </div>
      <p>
        In month one, that amount doesn&apos;t go toward hitting 10 inquiries — it goes toward the test phase from the table above. It&apos;s realistic to land below target in the first 30 days while the campaign is still learning, with inquiry volume stabilizing only once you reach the optimization phase. Validate that $150-250 max CPA against your own numbers before you commit to it — trades pricing swings a lot by metro.
      </p>

      <h3>2. eCommerce store</h3>
      <p>
        Same logic — margin sets max CPA, max CPA and CVR set max CPC, and max CPA × target order count gives you the monthly budget. Rather than repeat the full manual calculation here (the complete walkthrough with AOV and margin is in{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "how-much-does-google-ads-cost" } }} className="underline">the Google Ads pricing guide</Link>), plug your own numbers into the{" "}
        <Link href="/profit-provera" className="underline">Profit-Leak Calculator</Link> and get an exact figure for your business, not a generic example.
      </p>

      <h3>3. B2B service (long sales cycle)</h3>
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <div className="text-base text-yellow-900 space-y-1">
          <p className="mb-1">Goal: 5 qualified leads/month | Max CPA per lead: say $150</p>
          <p className="mb-1">Assume a form <GlossaryLink slug="conversion-rate">conversion rate</GlossaryLink> of 4% non-brand (within the canonical 2-6% range, up to 15% for brand/gated)</p>
          <p className="mb-1"><strong>Max CPC = $150 × 0.04 = $6.00</strong></p>
          <p className="mb-0"><strong>Target monthly budget = $150 × 5 = $750</strong></p>
        </div>
      </div>
      <p>
        The key difference in B2B: the <strong>conversion window</strong> is usually 60-90 days from click to closed deal. Plan budget knowing you won&apos;t see this month&apos;s results for another 2-3 months — don&apos;t judge a campaign after three weeks because &quot;there&apos;s no sale,&quot; when that lead&apos;s sale is still on its way.
      </p>

      <hr />

      <h2 id="budget-planning-mistakes">Budget planning mistakes</h2>
      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-semibold mb-2">1. A decent budget stretched across too many campaigns</p>
          <p className="text-base text-gray-600 mb-0">$1,000 split five ways means none of them collects enough data to get optimized. Fewer campaigns with real room to run beats this every time.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-semibold mb-2">2. Budget set without a max CPA first</p>
          <p className="text-base text-gray-600 mb-0">It starts from &quot;how much cash do we have&quot; instead of &quot;how much can we profitably spend per conversion.&quot; The second question comes first.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-semibold mb-2">3. Scaling before the 30-conversions/30-days threshold</p>
          <p className="text-base text-gray-600 mb-0">The bidding algorithm doesn&apos;t have enough data yet — the campaign &quot;breaks&quot; when budget jumps without a foundation behind it.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-semibold mb-2">4. Monthly budget treated as a fixed number with no slack</p>
          <p className="text-base text-gray-600 mb-0">Without a small buffer for testing a new ad group or campaign, every experiment means turning off something that already works.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-semibold mb-2">5. Ignoring seasonality in annual planning</p>
          <p className="text-base text-gray-600 mb-0">The same monthly budget for November and for February means you&apos;re missing demand in-season and overpaying out of it.</p>
        </div>
      </div>

      <hr />

      <h2 id="next-steps">Next steps</h2>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">I recommend these 4 steps:</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Set your max CPA</strong> <span className="text-gray-500">from margin or lead value, before you type any budget into Google Ads</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Calculate your target monthly budget</strong> <span className="text-gray-500">using max CPA × target number of conversions</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Plan for a 30-day test phase</strong> <span className="text-gray-500">before you decide whether a campaign &quot;works&quot;</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Decide on professional management</strong> <span className="text-gray-500">if you&apos;re spending $10,000+ a month, it&apos;s worth a conversation about{" "}
              <Link href="/usluge/google-ads-upravljanje" className="underline">managing your campaigns</Link></span></div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Not sure your budget is realistic for your goal?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          We&apos;ll walk through your industry, margin, and target conversion volume together — free, no obligation.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Schedule a free consultation
        </Link>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2 id="frequently-asked-questions-about-budget">Frequently asked questions about budget</h2>
      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much monthly budget do I need for Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            It depends on your max CPA and target conversion count — monthly budget = max CPA × target number of conversions. For the test phase, aim for enough spend to hit the 10-15 clicks/day floor I use as a starting minimum — see{" "}
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "how-to-start-google-ads" } }} className="underline">how to start with Google Ads</Link> for the full breakdown by market; the exact number for your business comes from the formula in this guide.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How do I split budget across multiple campaigns?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            In the test phase, put it behind 1-2 narrow campaigns — don&apos;t stretch a small budget across more than that. Later, the split depends on channel: eCommerce accounts typically hold more of the budget in Shopping, Search splits between brand and non-brand, and a small reserve goes to remarketing.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            When should I increase my Google Ads budget?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            When a campaign consistently hits 30+ conversions for tCPA or 50+ for tROAS over 30 days, you&apos;re losing impression share to budget, and break-even CPA still has room after the increase. All three signals need to line up, not just one.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Should my budget stay the same every month?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            No, not if you have seasonality. Plan a higher budget in advance for high-demand periods (Black Friday, holidays) and lower it out of season — that&apos;s planning, not reacting once a campaign burns through everything mid-month.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What&apos;s the difference between daily and monthly budget in Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            You enter a daily budget, but Google treats it as an average — a single day can spend up to double that, while monthly billing won&apos;t exceed the daily budget multiplied by the average number of days in a month (30.4).
          </div>
        </details>
      </div>

      {/* ── Related Guides ── */}
      <h2 id="related-guides">Related Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "how-much-does-google-ads-cost" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">How much does Google Ads cost</p>
          <p className="text-xs text-gray-500 mb-0">CPC by industry and management cost — agency, freelancer, in-house</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "how-to-start-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">How to start with Google Ads</p>
          <p className="text-xs text-gray-500 mb-0">From account setup to your first campaign, step by step</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Smart Bidding guide</p>
          <p className="text-xs text-gray-500 mb-0">How automated bidding uses your budget and conversion data</p>
        </Link>
        <Link href="/usluge/konsultacije" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Consultations</p>
          <p className="text-xs text-gray-500 mb-0">A check on your budget plan before you spend your first dollar</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-search-campaigns-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Search Campaigns: The Complete Guide</p>
          <p className="text-xs text-gray-500 mb-0">Campaign structure by intent and margin, negative keywords, measurement before scaling</p>
        </Link>
        <Link href="/usluge/starter-paket" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Starter Package (Kickstart)</p>
          <p className="text-xs text-gray-500 mb-0">A senior setup once, from $990 — if you&apos;re not ready for monthly management yet</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: August 29, 2026
      </div>
      <div className="text-sm text-gray-500">
        Author: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}
