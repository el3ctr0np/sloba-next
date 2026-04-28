import { Link } from "@/i18n/navigation";
import RoasCalculator from "@/components/tools/RoasCalculator";

export default function WhatIsRoasEN() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          ROAS (Return on Ad Spend) is the ratio of ad revenue to ad spend. Formula: ROAS = Revenue ÷ Spend. For eCommerce, a good ROAS is 3–5×, but ROAS doesn&apos;t measure profit — it measures revenue per € spent. Use the calculator below to see your ROAS against industry benchmarks.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">4×</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">eCommerce average</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2.5×</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Lead Gen benchmark</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">6×</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Luxury / premium</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1×</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Break-even (0 profit)</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">Quick answer</p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          What is ROAS and how is it calculated?
        </p>
        <p className="text-sm md:text-base text-gray-700 mb-0 leading-relaxed">
          <strong>ROAS (Return on Ad Spend)</strong> is the ratio of ad revenue to ad spend. Formula: <strong>ROAS = Revenue ÷ Spend</strong>. It&apos;s expressed as a ratio (4×) or percentage (400%). For eCommerce, a good ROAS is 3–5× depending on margin; below 2× most businesses are unprofitable.
        </p>
      </div>

      <hr />

      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#what-is-roas" className="text-sm text-gray-700 hover:text-primary underline">What is ROAS</a></li>
          <li><a href="#formula" className="text-sm text-gray-700 hover:text-primary underline">Formula and calculation</a></li>
          <li><a href="#calculator" className="text-sm text-gray-700 hover:text-primary underline">ROAS calculator</a></li>
          <li><a href="#benchmarks" className="text-sm text-gray-700 hover:text-primary underline">ROAS benchmarks by industry</a></li>
          <li><a href="#roas-vs-poas" className="text-sm text-gray-700 hover:text-primary underline">ROAS vs POAS: why ROAS doesn&apos;t measure profit</a></li>
          <li><a href="#how-to-improve" className="text-sm text-gray-700 hover:text-primary underline">How to improve ROAS</a></li>
          <li><a href="#faq" className="text-sm text-gray-700 hover:text-primary underline">FAQ</a></li>
          <li><a href="#related-guides" className="text-sm text-gray-700 hover:text-primary underline">Related guides</a></li>
        </ol>
      </nav>

      <h2 id="what-is-roas">What is ROAS</h2>
      <p>
        <strong>ROAS (Return on Ad Spend)</strong> is one of the most important metrics in digital advertising — it measures how much revenue you generate for every € (or $, £) invested in ads.
      </p>
      <p>
        Plainly: if you spend €1,000 on Google Ads and get €4,000 in revenue back, your ROAS is 4× (or 400%). For every €1 invested, €4 came back through sales.
      </p>
      <p>
        Why ROAS matters:
      </p>
      <ul>
        <li><strong>Standard metric</strong> — Google Ads, Meta Ads, Microsoft Ads all report it natively</li>
        <li><strong>Powers Smart Bidding</strong> — tROAS strategy is directly tied to a ROAS target</li>
        <li><strong>Easy to understand</strong> — stakeholders and execs grasp it without extra context</li>
        <li><strong>Compares campaigns</strong> — different campaigns with different budgets compared on the same axis</li>
      </ul>
      <p>
        But — and this is critical — <strong>ROAS is not profit</strong>. More on that in the ROAS vs POAS section below.
      </p>

      <hr />

      <h2 id="formula">Formula and calculation</h2>
      <p>
        The formula is simple:
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          ROAS = Ad Revenue ÷ Ad Spend
        </p>
      </div>

      <p>
        It can be expressed as:
      </p>
      <ul>
        <li><strong>Ratio</strong> — &quot;4×&quot; or &quot;4:1&quot; (most common form in Google Ads)</li>
        <li><strong>Percentage</strong> — &quot;400%&quot; (multiplied by 100)</li>
        <li><strong>Decimal</strong> — &quot;4.0&quot; (how it appears in some reports)</li>
      </ul>

      <p>Here are a few examples:</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Revenue</th>
              <th className="py-3 px-4 font-heading font-semibold">Spend</th>
              <th className="py-3 px-4 font-heading font-semibold">ROAS</th>
              <th className="py-3 px-4 font-heading font-semibold">Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">€500</td>
              <td className="py-3 px-4">€1,000</td>
              <td className="py-3 px-4">0.5× (50%)</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Loss</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">€1,000</td>
              <td className="py-3 px-4">€1,000</td>
              <td className="py-3 px-4">1× (100%)</td>
              <td className="py-3 px-4"><span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-0.5 rounded">Break-even</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">€3,000</td>
              <td className="py-3 px-4">€1,000</td>
              <td className="py-3 px-4">3× (300%)</td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Solid</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">€5,000</td>
              <td className="py-3 px-4">€1,000</td>
              <td className="py-3 px-4">5× (500%)</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Great</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">€10,000</td>
              <td className="py-3 px-4">€1,000</td>
              <td className="py-3 px-4">10× (1000%)</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Exceptional</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Important: ROAS only tracks &quot;attributed revenue&quot;</p>
        <p className="text-sm text-yellow-900 mb-0">
          In Google Ads, ROAS is calculated only from conversions <em>attributed</em> to the campaign. If a customer clicks your ad, leaves, and buys direct the next day — that conversion isn&apos;t counted in ROAS (unless it&apos;s inside the attribution window). That&apos;s why the number in Google Ads always differs from revenue shown in Shopify/WooCommerce.
        </p>
      </div>

      <hr />

      <h2 id="calculator">ROAS calculator</h2>
      <p>
        Enter your ad revenue and ad spend. The calculator returns your ROAS and compares it against an industry benchmark. Optionally pick your industry for a more precise benchmark.
      </p>

      <RoasCalculator locale="en" />

      <p className="text-sm text-gray-600">
        The benchmarks in the calculator are industry averages. Your <em>profitable</em> threshold depends on margin — low margin means you need a higher ROAS just to break even.
      </p>

      <hr />

      <h2 id="benchmarks">ROAS benchmarks by industry</h2>
      <p>
        ROAS varies dramatically by vertical. Luxury brands carry a high ROAS but low conversion rate; lead-gen businesses run a lower ROAS but make it back via long customer LTV.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Industry</th>
              <th className="py-3 px-4 font-heading font-semibold">Target ROAS</th>
              <th className="py-3 px-4 font-heading font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce — Fashion/Apparel</td>
              <td className="py-3 px-4 text-green-700 font-semibold">4.0×</td>
              <td className="py-3 px-4">40–60% margin, brand dependency</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">eCommerce — Beauty/Skincare</td>
              <td className="py-3 px-4 text-green-700 font-semibold">3.5×</td>
              <td className="py-3 px-4">High LTV, repeat orders</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce — Electronics</td>
              <td className="py-3 px-4 text-green-700 font-semibold">5.0×</td>
              <td className="py-3 px-4">Low margins (5–15%) — needs higher ROAS</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">eCommerce — Home &amp; Garden</td>
              <td className="py-3 px-4 text-green-700 font-semibold">3.8×</td>
              <td className="py-3 px-4">Solid margins, seasonal</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce — Food &amp; Beverage</td>
              <td className="py-3 px-4 text-green-700 font-semibold">4.5×</td>
              <td className="py-3 px-4">Subscription lifts LTV</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">SaaS / B2B</td>
              <td className="py-3 px-4 text-green-700 font-semibold">3.0×</td>
              <td className="py-3 px-4">LTV-based (calculated on 12-month revenue)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Lead Gen (local services)</td>
              <td className="py-3 px-4 text-green-700 font-semibold">2.5×</td>
              <td className="py-3 px-4">Track CPA instead of ROAS if no direct sale</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Luxury / premium</td>
              <td className="py-3 px-4 text-green-700 font-semibold">6.0×</td>
              <td className="py-3 px-4">High margin, lower volume, selective targeting</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        These numbers are averages. Your real target should be margin-based — if your margin is 30%, break-even ROAS is ~3.3×, so anything below that means losing money.
      </p>

      <hr />

      <h2 id="roas-vs-poas">ROAS vs POAS: why ROAS doesn&apos;t measure profit</h2>

      <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-red-700 text-lg mb-2">Critical point: ROAS ≠ profit</p>
        <p className="text-sm text-red-800 mb-0">
          I&apos;ve seen dozens of accounts with 8× ROAS that are losing money, and 2× ROAS accounts printing profit. The difference is <strong>margin</strong>. Raw ROAS ignores COGS, shipping, returns, and operational costs.
        </p>
      </div>

      <p>
        Example: an eCommerce retailer with 4× ROAS and 20% margin sells €4,000 of product with €1,000 in spend. Gross profit is €800 (20% of revenue), minus €1,000 spend = <strong>€200 loss</strong>. &quot;Great ROAS&quot; actually means losing money.
      </p>

      <p>
        The solution is <strong>POAS (Profit on Ad Spend)</strong> — a metric that factors in margin. POAS = (Revenue × Margin) ÷ Spend. For the same example: (4,000 × 0.20) ÷ 1,000 = 0.8× POAS → below 1× means loss. Clear, unambiguous.
      </p>

      <p>
        POAS isn&apos;t native in the Google Ads UI, but you can calculate it manually or via custom columns. For eCommerce clients where I run Tiered Shopping strategy, POAS is the primary KPI — ROAS is only a secondary view.
      </p>

      <hr />

      <h2 id="how-to-improve">How to improve ROAS</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic #1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Lift AOV (Average Order Value)</h3>
          <p className="text-sm text-gray-600 mb-0">Bundles, &quot;Add to order&quot; upsells, free shipping thresholds. Higher AOV = higher ROAS without touching bid strategy.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic #2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Cut low-ROAS ad groups</h3>
          <p className="text-sm text-gray-600 mb-0">Pause ad groups/keywords stuck below break-even ROAS. Budget reallocates to winners.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic #3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Target ROAS Smart Bidding</h3>
          <p className="text-sm text-gray-600 mb-0">Once you have 30+ conversions in 30 days, switch to tROAS. The algorithm bids higher for users with high purchase intent.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic #4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Improve Quality Score</h3>
          <p className="text-sm text-gray-600 mb-0">Higher QS = lower CPC. Same revenue with less spend = higher ROAS. QS 7+ cuts CPC by 20–30%.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic #5</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Landing page CVR optimization</h3>
          <p className="text-sm text-gray-600 mb-0">Higher conversion rate → more revenue on same clicks → higher ROAS. Test speed, CTA, social proof.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tactic #6</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Add negative keywords</h3>
          <p className="text-sm text-gray-600 mb-0">Every click from an irrelevant query is spend without revenue. Monthly Search Terms review + aggressive negatives protect ROAS.</p>
        </div>
      </div>

      <hr />

      <h2 id="faq">FAQ</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What ROAS is good?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Depends on margin. For eCommerce with 30–50% margin, ROAS of 3–5× is good. For low margins (electronics, 5–15%), you need 6–10×. Break-even formula: ROAS = 1 ÷ margin (decimal). For a 25% margin, break-even is 4×.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How to calculate ROAS as a percentage?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            ROAS % = (Revenue ÷ Spend) × 100. Example: €4,000 revenue ÷ €1,000 spend × 100 = 400%. Same thing as 4× ROAS, just expressed differently.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Difference between ROAS and ROI?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            ROAS measures revenue per spend. ROI measures profit against total investment (spend + operational costs + COGS). ROAS is surface-level; ROI is a deeper financial read. A 4× ROAS can translate to −10% ROI if margins are thin.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What&apos;s the break-even ROAS?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Break-even ROAS = 1 ÷ margin. If margin is 20%, break-even is 5× (1 ÷ 0.20). Below that you run at a loss. Key note: margin here is <em>net</em> margin after COGS and operational costs — not gross markup.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How does Target ROAS bidding work?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Target ROAS (tROAS) is a Smart Bidding strategy — you set a target ROAS (e.g. 400%), and Google bids higher for users more likely to convert at high value and lower for everyone else. Needs 30+ conversions in the last 30 days and stable conversion value history.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Is a 10× ROAS always good?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Not necessarily. An extremely high ROAS (10×+) usually means the budget is too conservative — the algorithm is only catching the &quot;easiest&quot; conversions (branded, repeat buyers). Doubling the budget often drops ROAS to 5× but raises total profit. 10× on €500/mo is worth less than 4× on €5,000/mo.
          </div>
        </details>
      </div>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Your ROAS not tracking profit?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Free account analysis with POAS mapping and margin-aware bid strategy recommendations.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Book a free consultation
        </Link>
      </div>

      <hr />

      <h2 id="related-guides">Related guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Smart Bidding guide</p>
          <p className="text-xs text-gray-500 mb-0">tROAS, Maximize Conversion Value and when to use each</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimization" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads optimization — 30 tactics</p>
          <p className="text-xs text-gray-500 mb-0">Complete framework for lifting ROAS</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max guide</p>
          <p className="text-xs text-gray-500 mb-0">PMax tROAS strategy and asset groups</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Quality Score guide</p>
          <p className="text-xs text-gray-500 mb-0">How QS lowers CPC and lifts ROAS</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-for-ecommerce-serbia-2026" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads for eCommerce in Serbia 2026</p>
          <p className="text-xs text-gray-500 mb-0">Benchmarks, strategy, real account data</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking guide</p>
          <p className="text-xs text-gray-500 mb-0">Without accurate tracking, ROAS is a lie</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: April 2026
      </div>
      <div className="text-sm text-gray-500">
        Author: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}
