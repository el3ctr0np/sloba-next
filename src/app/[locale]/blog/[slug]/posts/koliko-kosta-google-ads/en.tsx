import { Link } from "@/i18n/navigation";

export default function HowMuchDoesGoogleAdsCostEN() {
  return (
    <>
      {/* ── TL;DR hero ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google Ads costs vary by industry, competition, and campaign quality. In the UK and US markets, CPC ranges from $0.50 to $50+ — but with the right approach, every dollar invested can deliver 3-10x returns.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">$1-$7</p>
            <p className="text-xs text-slate-400 mt-1">average CPC (US/UK)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">$1,000+</p>
            <p className="text-xs text-slate-400 mt-1">minimum monthly budget</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">2-3 mo.</p>
            <p className="text-xs text-slate-400 mt-1">to stable results</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">3-10x</p>
            <p className="text-xs text-slate-400 mt-1">realistic ROI</p>
          </div>
        </div>
      </div>

      <h2>The real cost of Google Ads in 2026</h2>
      <p>
        &quot;How much does Google Ads cost?&quot; — this is the first question every marketing director or business owner asks when considering paid advertising. I understand the frustration — Google won't give you a straight answer, and most content on this topic comes from generic US data that doesn't match your reality.
      </p>
      <p>
        The problem is there's no simple answer like &quot;it costs X per month&quot;. Google Ads pricing depends on a dozen factors — from your industry to competition to campaign quality.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">From my experience</p>
        <p className="text-blue-800 text-sm mb-0">
          After nearly a decade managing Google Ads across 50+ brands in 6+ countries with $2M+ annual spend, I can give you a concrete framework to plan your budget and understand what to expect.
        </p>
      </div>

      <hr />

      <h2>How Google Ads pricing works</h2>
      <p>
        Google Ads uses an <strong>auction system</strong>. Every time someone searches, a mini-auction happens between advertisers targeting that keyword. You only pay when someone clicks your ad — hence PPC (pay-per-click).
      </p>

      <h3>What determines cost per click (CPC)</h3>
      <ul>
        <li><strong>Competition</strong> — more advertisers bidding on a keyword = higher cost</li>
        <li><strong>Quality Score</strong> — Google rates your ad and landing page relevance (1-10). Higher score = lower cost</li>
        <li><strong>Ad position</strong> — first position costs more than fourth</li>
        <li><strong>Industry</strong> — insurance and legal pay 10x more than fashion retailers</li>
        <li><strong>Geography</strong> — US cities are more expensive than UK regions; UK more than Eastern Europe</li>
      </ul>
      <p className="text-sm text-gray-500 mt-3">
        Read more about the auction system in the{" "}
        <a href="https://support.google.com/google-ads/answer/1704342" target="_blank" rel="noopener noreferrer" className="underline">
          Google Ads Help Center
        </a>.
      </p>

      <h3>Pricing models in Google Ads</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">CPC — cost per click</h3>
          <p className="text-sm text-gray-600 mb-0">Pay when someone clicks your ad. Most common for Search and Shopping campaigns.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">CPM — cost per 1,000 impressions</h3>
          <p className="text-sm text-gray-600 mb-0">Pay for visibility, not clicks. Used for Display and YouTube campaigns.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">CPV — cost per video view</h3>
          <p className="text-sm text-gray-600 mb-0">Pay when someone watches your video ad. YouTube-specific.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">CPA — cost per conversion</h3>
          <p className="text-sm text-gray-600 mb-0">Advanced model where you pay per action. Requires sufficient conversion data.</p>
        </div>
      </div>

      <p>For most businesses, CPC on Search is the starting point.</p>

      <hr />

      <h2>Real CPC costs by industry (US/UK markets)</h2>
      <p>Here are average CPCs I see across clients in US and UK markets (2025-2026):</p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Industry</th>
              <th className="py-3 px-4 font-heading font-semibold">Average CPC</th>
              <th className="py-3 px-4 font-heading font-semibold">Range</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce — Fashion</td>
              <td className="py-3 px-4">$0.50 - $1.50</td>
              <td className="py-3 px-4">$0.30 - $3.00</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">eCommerce — Electronics</td>
              <td className="py-3 px-4">$0.80 - $2.00</td>
              <td className="py-3 px-4">$0.40 - $4.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Furniture</td>
              <td className="py-3 px-4">$1.00 - $2.50</td>
              <td className="py-3 px-4">$0.50 - $5.00</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">B2B Services</td>
              <td className="py-3 px-4">$2.00 - $6.00</td>
              <td className="py-3 px-4">$1.00 - $15.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">SaaS</td>
              <td className="py-3 px-4">$3.00 - $10.00</td>
              <td className="py-3 px-4">$1.50 - $25.00</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Real Estate</td>
              <td className="py-3 px-4">$1.50 - $4.00</td>
              <td className="py-3 px-4">$0.80 - $8.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Travel</td>
              <td className="py-3 px-4">$1.00 - $3.00</td>
              <td className="py-3 px-4">$0.50 - $6.00</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Finance/Insurance</td>
              <td className="py-3 px-4 text-red-600 font-semibold">$5.00 - $20.00</td>
              <td className="py-3 px-4">$2.00 - $50.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Healthcare/Medical</td>
              <td className="py-3 px-4">$2.50 - $8.00</td>
              <td className="py-3 px-4">$1.00 - $20.00</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Legal Services</td>
              <td className="py-3 px-4 text-red-600 font-semibold">$8.00 - $30.00</td>
              <td className="py-3 px-4">$4.00 - $100.00+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-sm mb-0">
          These are US/UK market averages. Costs in other English-speaking markets (Canada, Australia) are typically 10-30% lower.
        </p>
      </div>

      <h3>Why the range is so wide</h3>
      <p>A CPC range from $0.30 to $15 in the same industry seems absurd. But the difference comes from:</p>
      <ul>
        <li><strong>Keywords</strong> — branded terms are cheaper than generic ones</li>
        <li><strong>Search intent</strong> — &quot;buy sneakers online&quot; costs more than &quot;what sneakers are trending&quot;</li>
        <li><strong>Account quality</strong> — optimized accounts pay 30-50% less</li>
        <li><strong>Timing</strong> — Black Friday vs February</li>
      </ul>

      <hr />

      <h2>Minimum budget that makes sense</h2>
      <p>
        The question I hear constantly: &quot;Can I start with $500 per month?&quot; Technically — yes. Practically — it depends.
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Minimum budget formula</p>
        <p className="text-sm text-yellow-900 mb-0">
          Monthly budget = (Target clicks per day) × (Average CPC) × 30 days.
          For meaningful results you need <strong>minimum 10-15 clicks daily</strong>.
        </p>
      </div>

      <p>In practice this means:</p>
      <ul>
        <li><strong>eCommerce (CPC $1.00):</strong> $300-450/month minimum</li>
        <li><strong>B2B services (CPC $3.00):</strong> $900-1,350/month minimum</li>
        <li><strong>SaaS (CPC $6.00):</strong> $1,800-2,700/month minimum</li>
      </ul>
      <p>But this is <strong>absolute minimum</strong> for testing. For stable results, I recommend:</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Business type</th>
              <th className="py-3 px-4 font-heading font-semibold">Recommended monthly budget</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Local business</td>
              <td className="py-3 px-4">$1,000 - $2,500</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">eCommerce (small)</td>
              <td className="py-3 px-4">$1,500 - $5,000</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce (medium)</td>
              <td className="py-3 px-4">$5,000 - $15,000</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">B2B services</td>
              <td className="py-3 px-4">$2,500 - $8,000</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">SaaS</td>
              <td className="py-3 px-4">$5,000 - $20,000+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Why I don't recommend micro-budgets</p>
        <p className="text-blue-800 text-sm mb-0">
          With $300-500 monthly you don't have enough data for optimization, algorithms can't learn, and you can't test different approaches. It's like opening a restaurant and advertising once a week.
        </p>
      </div>

      <hr />

      <h2>Management costs: agency vs. freelancer vs. in-house</h2>
      <p>Besides ad spend, you have campaign management costs. Three options:</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Option 1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-3">Agency</h3>
          <p className="text-sm text-gray-600 mb-2"><strong>Cost:</strong> $1,500-5,000/mo or 10-20% of ad spend</p>
          <p className="text-xs text-green-700 mb-1">+ Expert team, tools, continuity</p>
          <p className="text-xs text-red-600 mb-0">- More expensive for smaller budgets, less personalized</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Option 2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-3">Freelancer</h3>
          <p className="text-sm text-gray-600 mb-2"><strong>Cost:</strong> $800-3,000/mo or $80-200/hr</p>
          <p className="text-xs text-green-700 mb-1">+ Personalized approach, flexibility</p>
          <p className="text-xs text-red-600 mb-0">- Single point of failure, limited capacity</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Option 3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-3">In-House</h3>
          <p className="text-sm text-gray-600 mb-2"><strong>Cost:</strong> $3,000-8,000/mo salary + tools</p>
          <p className="text-xs text-green-700 mb-1">+ Full control, deep business knowledge</p>
          <p className="text-xs text-red-600 mb-0">- Expensive for smaller companies, risk of stagnation</p>
        </div>
      </div>

      <h3>My recommendation by budget size</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Monthly ad spend</th>
              <th className="py-3 px-4 font-heading font-semibold">Recommended option</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Up to $3,000</td>
              <td className="py-3 px-4">Freelancer or DIY with consultations</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">$3,000 - $15,000</td>
              <td className="py-3 px-4">Freelancer/consultant</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">$15,000 - $60,000</td>
              <td className="py-3 px-4">Specialized agency or senior freelancer</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">$60,000+</td>
              <td className="py-3 px-4">Agency + in-house coordinator</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2>How to calculate ROI before spending your first dollar</h2>
      <p>This is where most people skip, but it's where the most important decisions are made.</p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Know your average customer value</strong>
              <span className="text-gray-500"> — AOV, margin per order, LTV for repeat customers</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Define maximum CPA</strong>
              <span className="text-gray-500"> — how much can you pay per conversion and stay profitable</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Estimate conversion rate</strong>
              <span className="text-gray-500"> — eCommerce: 1-3%, Lead gen: 2-8%, B2B: 2-5%</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Calculate break-even CPC</strong>
              <span className="text-gray-500"> — Maximum CPA × Conversion Rate</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Example calculation for eCommerce</p>
        <div className="text-sm text-yellow-900 space-y-1">
          <p className="mb-1">AOV: $100 | Margin: 40% = $40 | Investment: 50% of margin</p>
          <p className="mb-1"><strong>Maximum CPA = $20</strong></p>
          <p className="mb-1">Conversion rate: 2%</p>
          <p className="mb-0"><strong>Break-even CPC = $20 × 0.02 = $0.40</strong></p>
        </div>
      </div>

      <p>
        If average CPC in your industry is $0.30, you have room for profit. If it's $0.60, work on conversion rate or AOV.
      </p>

      <hr />

      <h2>Hidden costs nobody talks about</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Landing pages</h3>
          <ul className="text-sm mb-0">
            <li>Template: $500-1,500 (one-time)</li>
            <li>Custom design: $1,500-5,000 (one-time)</li>
            <li>A/B testing: ongoing cost</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Creative and content</h3>
          <ul className="text-sm mb-0">
            <li>Product feed optimization: $500-1,500</li>
            <li>Ad copywriting: $300-800/mo</li>
            <li>Display/YouTube assets: $300-1,500</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Tools</h3>
          <ul className="text-sm mb-0">
            <li>Keyword research: $100-400/mo</li>
            <li>Competitor analysis: $150-400/mo</li>
            <li>Reporting: $80-250/mo</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Conversion tracking setup</h3>
          <ul className="text-sm mb-0">
            <li>GA4 + GTM setup: $500-1,500</li>
            <li>Enhanced conversions: $300-800</li>
            <li>Server-side tracking: $800-2,000</li>
          </ul>
        </div>
      </div>

      <hr />

      <h2>When Google Ads isn't the right choice</h2>
      <p>Honestly, Google Ads isn't for everyone. I don't recommend it if:</p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Skip if...</p>
          <p className="font-semibold mb-2">You don't have a clearly defined product or service</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">Google Ads won't fix poor product-market fit. First validate your offer, then advertise.</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Skip if...</p>
          <p className="font-semibold mb-2">Margins are below 20% or there's insufficient search demand</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">Low margins make profitability difficult. And if nobody's searching for your product, Search campaigns won't work — consider Display or Social advertising.</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Skip if...</p>
          <p className="font-semibold mb-2">Your website isn't ready or you don't have budget for 3-6 months</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">Poor UX kills even the best campaigns. And results don't come overnight — you need at least 2-3 months for optimization.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2>Next steps</h2>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">I recommend these 4 steps:</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Calculate your maximum CPA</strong> <span className="text-gray-500">using the formula above</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Check CPC in your industry</strong> <span className="text-gray-500">via{" "}<a href="https://ads.google.com/home/tools/keyword-planner/" target="_blank" rel="noopener noreferrer" className="underline">Google Keyword Planner</a> (free in Google Ads)</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Define realistic test budget</strong> <span className="text-gray-500">for minimum 3 months</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Decide</strong> <span className="text-gray-500">whether to do it yourself, with a freelancer, or agency</span></div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Want to know what Google Ads would cost for your business?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          I'll analyze your industry, competition, and potential ROI — free, no obligation.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Schedule free consultation
        </Link>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2>Frequently asked questions about Google Ads pricing</h2>
      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What's the minimum investment for Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Technical minimum is $1 per day, but for meaningful results expect $1,000-1,500 monthly for local businesses and $3,000+ for eCommerce or B2B.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Is Google Ads worth it for small businesses?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Yes, if you have clear customer value and competitive margins. Small businesses often have an advantage because they're more agile and can optimize faster.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How long before Google Ads starts delivering results?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            First indicators in 2-4 weeks. Real results and optimized account in 2-3 months. Stable performance in 4-6 months.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why do prices vary so much by industry?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Because of competition and conversion value. A lawyer can pay $50 per click because one client is worth $5,000. A t-shirt store can't.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does Google Ads cost more than Meta Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Generally yes, CPC on Google is higher. But user intent is stronger — someone searching &quot;buy X&quot; is closer to purchase than someone scrolling Instagram.
          </div>
        </details>
      </div>

      <h2>Related Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/konsultacije" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Consultations</p>
          <p className="text-xs text-gray-500 mb-0">Personalized cost analysis and strategy for your business</p>
        </Link>
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
