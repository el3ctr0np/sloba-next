import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function GoogleAdsConsultantCostEN() {
  return (
    <>
      {/* ── TL;DR hero ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          A junior freelancer costs $250-500/month. A senior consultant costs $800-2,500/month (or $150-250/hour). An agency costs $600-2,500+/month, often plus 10-20% of ad spend. The difference isn&apos;t hours worked — it&apos;s whose decisions you&apos;re paying for.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">$250-500</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Junior freelancer/mo</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">$800-2,500</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Senior consultant/mo</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">$150-250</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Senior hourly rate</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">10-20%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Agency % of spend</p>
          </div>
        </div>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Quick answer
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          How much does a Google Ads consultant cost in 2026?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          A <strong>junior freelancer</strong> typically charges $250-500/month (usually a side income alongside employment).
          A <strong>senior consultant</strong> with 5+ years of experience charges $800-2,500/month fixed, or $150-250/hour for ad-hoc work.
          An <strong>agency</strong> charges $600-2,500+/month, often plus 10-20% of ad spend above a set threshold.
          Price tracks experience — but what you&apos;re actually paying for with a senior isn&apos;t hours, it&apos;s decision quality and how fast expensive mistakes get avoided.
        </p>
      </div>

      <p>
        &quot;How much should I pay a Google Ads consultant?&quot; doesn&apos;t have one correct answer, but it does have a clear logic. This guide is a pure cost breakdown — no sales angle, no &quot;who should you hire&quot; framing. If you want a comparison of models (agency vs freelancer vs in-house) by fit for your company, see{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-agency-vs-freelancer" } }} className="underline">
          that guide
        </Link>
        . Here, the focus is purely on the numbers: who charges what, under which model, and why.
      </p>

      {/* ── Table of Contents ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#three-price-tiers-junior-senior-agency" className="block py-1 text-base text-gray-700 hover:text-primary underline">Three price tiers: junior, senior, agency</a></li>
          <li><a href="#what-youre-actually-paying-for-with-a-senior" className="block py-1 text-base text-gray-700 hover:text-primary underline">What you&apos;re actually paying for with a senior</a></li>
          <li><a href="#pricing-models-and-their-pitfalls" className="block py-1 text-base text-gray-700 hover:text-primary underline">Pricing models and their pitfalls</a></li>
          <li><a href="#whats-actually-included-in-the-fee" className="block py-1 text-base text-gray-700 hover:text-primary underline">What&apos;s actually included in the fee</a></li>
          <li><a href="#self-check-are-you-paying-the-right-amount" className="block py-1 text-base text-gray-700 hover:text-primary underline">Self-check: are you paying the right amount</a></li>
          <li><a href="#price-by-ad-spend-size" className="block py-1 text-base text-gray-700 hover:text-primary underline">Price by ad spend size</a></li>
          <li><a href="#a-real-2026-market-benchmark" className="block py-1 text-base text-gray-700 hover:text-primary underline">A real 2026 market benchmark</a></li>
          <li><a href="#contract-terms-worth-watching" className="block py-1 text-base text-gray-700 hover:text-primary underline">Contract terms worth watching</a></li>
          <li><a href="#red-flags-in-cheap-offers" className="block py-1 text-base text-gray-700 hover:text-primary underline">Red flags in cheap offers</a></li>
          <li><a href="#my-own-pricing-as-a-senior-model-example" className="block py-1 text-base text-gray-700 hover:text-primary underline">My own pricing as a senior model example</a></li>
          <li><a href="#what-comparing-three-quotes-looks-like-in-practice" className="block py-1 text-base text-gray-700 hover:text-primary underline">What comparing three quotes looks like in practice</a></li>
          <li><a href="#frequently-asked-questions" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
          <li><a href="#related-guides" className="block py-1 text-base text-gray-700 hover:text-primary underline">Related guides</a></li>
        </ol>
      </nav>

      <h2 id="three-price-tiers-junior-senior-agency">Three price tiers: junior, senior, agency</h2>
      <p>
        The Google Ads services market has three clearly separated price tiers. They&apos;re not arbitrary — they track a real difference in experience, capacity, and the risk you carry as a client.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Type</th>
              <th className="py-3 px-3 font-heading font-semibold">Price</th>
              <th className="py-3 px-3 font-heading font-semibold">Who works on your account</th>
              <th className="py-3 px-3 font-heading font-semibold">Communication</th>
              <th className="py-3 px-3 font-heading font-semibold">When it makes sense</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Junior freelancer</td>
              <td className="py-3 px-3">$250-500/mo</td>
              <td className="py-3 px-3">0-2 yrs experience, learning on your budget</td>
              <td className="py-3 px-3">Direct, but slow on complex questions</td>
              <td className="py-3 px-3">Budget under $1,500/mo, low downside if things go wrong</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Senior consultant</td>
              <td className="py-3 px-3">$800-2,500/mo or $150-250/hr</td>
              <td className="py-3 px-3">5+ yrs, works personally, doesn&apos;t hand off to a junior team</td>
              <td className="py-3 px-3">Direct, fast, strategic — not just reporting</td>
              <td className="py-3 px-3">Budget $1,500-20,000/mo, need strategy, not just execution</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Agency</td>
              <td className="py-3 px-3">$600-2,500+/mo + often 10-20% of spend</td>
              <td className="py-3 px-3">Account manager + PPC specialist (often junior/mid)</td>
              <td className="py-3 px-3">More formal, through an account manager</td>
              <td className="py-3 px-3">Budget $6,000+/mo, multi-channel needs, need a team and backup</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Why the range within the &quot;senior&quot; tier is so wide</p>
        <p className="text-blue-800 text-base mb-0">
          $800 and $2,500 a month can represent the same number of hours worked — the difference is account size, number of campaigns, and whether strategy (campaign build, tracking, creative) is included, or it&apos;s purely optimization of an existing setup. Always ask exactly what&apos;s included in the fee before comparing prices.
        </p>
      </div>

      <hr />

      <h2 id="what-youre-actually-paying-for-with-a-senior">What you&apos;re actually paying for with a senior</h2>
      <p>
        This is the part most often misunderstood. Clients look at the hourly rate and assume they&apos;re paying for time. In practice, with a senior you&apos;re paying for something else entirely — and it doesn&apos;t show up on the invoice.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Decisions, not hours</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">
          A senior knows which bidding strategy to pick without three weeks of testing, recognizes when{" "}
          <GlossaryLink slug="quality-score">Quality Score</GlossaryLink> is the problem versus when it&apos;s the landing page,
          and knows when to pause a campaign instead of &quot;giving it more time to optimize.&quot; That one decision
          is often worth more than 10 hours of junior work.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Mistakes avoided that you never see</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">
          The most expensive part of Google Ads isn&apos;t bad campaigns — it&apos;s campaigns doing the wrong thing for
          months because nobody caught an error in <GlossaryLink slug="conversion-rate">conversion tracking</GlossaryLink> or
          account structure. A senior catches that in the first two weeks. A junior often doesn&apos;t even know what to look for.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Time prioritization</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">
          With a limited number of hours per month, a senior knows where to focus — the 20% of changes that drive
          80% of results. A junior often spends time on minor optimizations while a bigger problem sits untouched.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Direct communication with no middleman</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">
          When you ask a question directly to the person managing the account, you get an answer informed by the account&apos;s actual current state — not relayed through an account manager who doesn&apos;t have the dashboard open until they&apos;ve organized an internal meeting. This difference in speed and accuracy doesn&apos;t show up as hours on an invoice, but it&apos;s felt every week of the engagement.
        </p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">No exaggeration here</p>
        <p className="text-yellow-800 text-base mb-0">
          This doesn&apos;t mean junior freelancers have no value — for small budgets and simple accounts, they&apos;re often perfectly adequate. But on an account where a $500/month mistake goes unnoticed for three months, a senior&apos;s fee pays for itself.
        </p>
      </div>

      <hr />

      <h2 id="pricing-models-and-their-pitfalls">Pricing models and their pitfalls</h2>
      <p>There are four basic pricing models. Each has its own logic and its own pitfall — here&apos;s an honest look at each.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Fixed monthly retainer</h3>
          <p className="text-base text-gray-600 mb-2">Same price every month, independent of ad spend or scope.</p>
          <p className="text-xs text-green-700 mb-1">+ Predictable, easy to budget, no conflict of interest around growing spend</p>
          <p className="text-xs text-red-600 mb-0">- If the account suddenly grows, the consultant can get overloaded without a price change (check for a review clause)</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Percentage of ad spend</h3>
          <p className="text-base text-gray-600 mb-2">Usually 10-20% (typically 12-15%) of spend managed.</p>
          <p className="text-xs text-green-700 mb-1">+ Scales naturally as the account grows, fair for larger budgets</p>
          <p className="text-xs text-red-600 mb-0">- On large budgets you pay for volume, not effort — a $50,000 spend doesn&apos;t mean 5x the work of a $10,000 one. Always ask about a cap.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Hourly rate</h3>
          <p className="text-base text-gray-600 mb-2">Pay for exact time spent — $150-250/hr for a senior.</p>
          <p className="text-xs text-green-700 mb-1">+ Transparent, good for ad-hoc consulting and audits</p>
          <p className="text-xs text-red-600 mb-0">- Poor fit for ongoing management — creates a subtle incentive to stretch work out. Ask for a monthly hour cap.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Hybrid (base + percentage)</h3>
          <p className="text-base text-gray-600 mb-2">Smaller fixed base + percentage above a defined spend threshold.</p>
          <p className="text-xs text-green-700 mb-1">+ Balances predictability and scalability, best for growing companies</p>
          <p className="text-xs text-red-600 mb-0">- More complex to negotiate and track, requires a clear formula upfront</p>
        </div>
      </div>

      <p className="font-semibold">Example calculation ($6,000 ad spend, senior consultant):</p>
      <ul>
        <li>Fixed retainer: $1,200-2,000/month</li>
        <li>Percentage (13%): $780/month</li>
        <li>Hybrid ($500 + 8% above $3,500): $700/month</li>
        <li>Hourly (10hrs/mo × $200): $2,000/month</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Is percentage of spend a fair model?</p>
        <p className="text-blue-800 text-base mb-0">
          For budgets of $2,500-20,000/month, percentage models are generally fair since they track real growth in workload (more campaigns, more testing, more reporting). Above $25,000/month, the math breaks down — ask for a hybrid model with a cap, or a fixed price instead.
        </p>
      </div>

      <hr />

      <h2 id="whats-actually-included-in-the-fee">What&apos;s actually included in the fee — and why the same number means different things</h2>
      <p>
        The most common mistake when comparing quotes is looking only at the number at the bottom. Two consultants can charge the exact same $1,200/month and do a completely different amount of work. Before comparing prices, get clear on what&apos;s actually included.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Usually included in the fee</h3>
          <ul className="text-sm mb-0">
            <li>Bid and budget optimization</li>
            <li>Adding/pausing keywords and negative terms</li>
            <li>Ad testing (RSA variants)</li>
            <li>Monthly or biweekly report with commentary</li>
            <li>Email/Slack communication during business hours</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Often NOT included (confirm upfront)</h3>
          <ul className="text-sm mb-0">
            <li>Building new campaigns from scratch (Shopping, PMax, Display)</li>
            <li>Landing page copy or design</li>
            <li>Conversion tracking setup or GTM/GA4 troubleshooting</li>
            <li>Creative assets for Display/YouTube (images, video)</li>
            <li>Ad-hoc calls beyond the agreed monthly number</li>
          </ul>
        </div>
      </div>

      <p>
        A practical test: ask the consultant to write, one sentence per item, exactly what&apos;s included in the monthly fee. If they dodge a concrete answer and fall back on &quot;we do whatever&apos;s needed,&quot; that&apos;s a sign the scope boundaries aren&apos;t clear — and an unclear scope is the most common source of friction a few months into a working relationship.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">A real-world example</p>
        <p className="text-yellow-800 text-base mb-0">
          An account with $4,000 ad spend running only Search campaigns requires far less monthly work than one with the same spend split across Search + Shopping + PMax + remarketing. The same $1,000/month fee can be overpriced in the first case and underpriced in the second — which is why price should track account complexity, not just budget size.
        </p>
      </div>

      <hr />

      <h2 id="self-check-are-you-paying-the-right-amount">Self-check: are you paying the right amount</h2>
      <p>
        Before signing a contract or renewing an existing one, run through these five questions. They quickly reveal whether the price you&apos;re paying matches the scope and quality of work you&apos;re getting.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>How many hours a month realistically go into my account?</strong>
              <span className="text-gray-500"> — if the fee is $1,200 and only 3 hours a month are actually spent, you&apos;re paying $400/hr, above the senior benchmark without clear extra value</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Am I getting a written report with explanation, not just numbers?</strong>
              <span className="text-gray-500"> — a dashboard without context doesn&apos;t justify a senior price</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>How fast do I get an answer to a specific question?</strong>
              <span className="text-gray-500"> — over 48 hours for a simple question is a red flag regardless of price</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Is the ROAS/CPA trend improving quarter over quarter, or flat?</strong>
              <span className="text-gray-500"> — you&apos;re paying for outcomes, not activity; 2+ flat quarters in a row warrants a conversation</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Would I get a meaningfully different (better) answer from someone else at the same price?</strong>
              <span className="text-gray-500"> — an independent audit once a year is worth it as a check (see the pricing example section below)</span>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="price-by-ad-spend-size">Consultant price relative to ad spend size</h2>
      <p>
        A consultant&apos;s fee should be proportional to the size of the account they&apos;re managing, not a flat number regardless of budget. Here&apos;s how that plays out in practice across growth stages.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad spend: $600-2,500/mo</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Small account, single channel</h3>
          <p className="text-base text-gray-600 mb-3">A 40%+ fee-to-spend ratio isn&apos;t unusual with agencies at this level — which is why a junior freelancer or a senior on an hourly, as-needed basis usually gives a better price-to-value ratio.</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Realistic fee:</p>
          <p className="text-base mb-0">$250-600/month (junior) or $150-300/month in senior consultations as needed</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad spend: $2,500-10,000/mo</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Senior sweet spot</h3>
          <p className="text-base text-gray-600 mb-3">This is where a senior consultant delivers the best ratio of price to attention — the account is large enough to justify the expertise, small enough that you still get personalized focus.</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Realistic fee:</p>
          <p className="text-base mb-0">$800-2,000/month fixed, or 12-15% of spend</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad spend: $10,000-25,000/mo</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Edge of one senior&apos;s capacity</h3>
          <p className="text-base text-gray-600 mb-3">One senior consultant can effectively manage roughly $18-25K of spend before attention quality starts to slip. Above that, consider an agency or two consultants working in parallel.</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Realistic fee:</p>
          <p className="text-base mb-0">$2,000-3,500/month or a hybrid model</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad spend: $25,000+/mo</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Beyond solo senior capacity</h3>
          <p className="text-base text-gray-600 mb-3">At this level, one person — however senior — carries a single-point-of-failure risk. An agency with a team, or a senior plus junior support, becomes the more rational choice regardless of price.</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Realistic fee:</p>
          <p className="text-base mb-0">Agency $3,000-6,000+/month, or senior + in-house coordinator</p>
        </div>
      </div>

      <p>
        For a more detailed comparison of management models by budget size (agency/freelancer/in-house), see the{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-agency-vs-freelancer" } }} className="underline">
          agency vs. freelancer vs. in-house guide
        </Link>.
      </p>

      <hr />

      <h2 id="a-real-2026-market-benchmark">A real 2026 market benchmark</h2>
      <p>
        Regional figures are useful, but it also helps to see a broader benchmark to understand where the &quot;senior&quot; tier sits in mature markets. Take Some Risk&apos;s annual PPC Salary Survey tracks earnings of freelance and in-house PPC professionals across the US and UK.
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Benchmark: senior freelance PPC specialist (10-15 yrs experience)</p>
        <div className="text-base text-yellow-900 space-y-1">
          <p className="mb-1">Median annual earnings (US freelance, PPC Salary Survey 2026): <strong>$202,895</strong></p>
          <p className="mb-1">Effective hourly rate at full-time capacity: <strong>~$145-175/hr</strong></p>
          <p className="mb-0 text-sm">Source: Take Some Risk — PPC Salary Survey (annual survey of freelance and in-house PPC professionals)</p>
        </div>
      </div>

      <p>
        This number doesn&apos;t translate directly into a fixed price everywhere — cost of living and competition vary — but it gives a real anchor: <strong>senior PPC expertise in mature markets sells for close to $150-200/hour</strong>. When someone offers &quot;full management&quot; for $150-200/month, the math simply doesn&apos;t add up — either the person is junior, or you&apos;re getting an hour or two of attention a month.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Why regional pricing still runs lower</p>
        <p className="text-blue-800 text-base mb-0">
          Lower cost of living and a smaller local market&apos;s purchasing power mean a senior consultant outside the US/UK reasonably charges less than the US/UK equivalent — but the ratio should stay proportional, not drop to junior-level pricing. A senior with 5-10 years of experience charging $150/month for ongoing management is either subsidized by another income source, or isn&apos;t doing what they claim to be doing.
        </p>
      </div>

      <hr />

      <h2 id="contract-terms-worth-watching">Contract terms worth watching</h2>
      <p>
        Price is only part of the story. Contract terms determine how risky or safe that price actually is for you as a client. Here&apos;s what to check before signing, whether you&apos;re hiring a junior, a senior, or an agency.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Term length and notice period</h3>
          <p className="text-base text-gray-600 mb-0">Standard is 3-6 months with a 30-day notice period to cancel. Contracts longer than 12 months without a trial phase are a red flag — a good consultant doesn&apos;t need a lock-in to keep a client.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Price review clause</h3>
          <p className="text-base text-gray-600 mb-0">If the fee is fixed, the contract should specify when and how price gets revisited (e.g., when ad spend doubles). Without this clause, one side eventually ends up subsidizing the other.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Account and data ownership</h3>
          <p className="text-base text-gray-600 mb-0">Google Ads, GA4, and GTM accounts must be registered under your email/domain with admin access for you, regardless of who operates them day-to-day. This needs to be explicit in the contract, not assumed.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Defined scope and number of revisions</h3>
          <p className="text-base text-gray-600 mb-0">How many campaigns, how many reports per month, how many calls/meetings are included. Anything beyond that gets billed separately — spelling this out upfront avoids friction later.</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Golden rule</p>
        <p className="text-base text-yellow-900 mb-0">
          If a partner won&apos;t put basic terms (scope, notice period, account ownership) in writing before you start working together, that tells you more than any number on their pricing page.
        </p>
      </div>

      <hr />

      <h2 id="red-flags-in-cheap-offers">Red flags in cheap offers</h2>
      <p>A low price isn&apos;t a problem by itself — the problem is when a low price hides something you should know upfront.</p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red flag #1</p>
        <p className="font-semibold mb-2">A junior specialist works on your account without senior oversight</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0"><strong>Ask:</strong> &quot;How many years of experience does the person who&apos;ll actually work on my account have, and who reviews their work?&quot; Agencies often sell senior expertise on the sales call, then hand the account to a junior.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red flag #2</p>
        <p className="font-semibold mb-2">You don&apos;t have (or won&apos;t get) admin access to your own Google Ads account</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">The account must be yours, with admin rights for you. If the partner insists on keeping control &quot;for security,&quot; that&apos;s a deal-breaker — you lose history and data at the point of termination.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red flag #3</p>
        <p className="font-semibold mb-2">No conversion tracking verification before campaigns launch</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">If a consultant doesn&apos;t ask how you measure conversions in week one, they&apos;re working blind. Bad tracking is the number one reason campaigns &quot;don&apos;t work&quot; — and it rarely gets noticed until months of budget are gone.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red flag #4</p>
        <p className="font-semibold mb-2">Price is below $150-200/month for active management</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">Quality work below that isn&apos;t sustainable — it means you&apos;re one of 20+ clients getting minimal attention, or the person is just starting out and learning on your account.</p>
        </div>
      </div>

      <hr />

      <h2 id="my-own-pricing-as-a-senior-model-example">My own pricing as a senior model example</h2>
      <p>
        No sales pressure here — a transparent look at how I structure pricing, as one concrete example of what a senior model typically looks like in practice.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad-hoc</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Consultations</h3>
          <p className="text-base text-gray-600 mb-3">Hourly rate for an audit, second opinion, or a specific question without an ongoing engagement.</p>
          <p className="text-xl font-heading font-bold mb-0">$200/hr</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">One-time</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Kickstart package</h3>
          <p className="text-base text-gray-600 mb-3">Account setup, campaign structure, and tracking — for companies starting from scratch.</p>
          <p className="text-xl font-heading font-bold mb-0">from $990</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ongoing</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Account management</h3>
          <p className="text-base text-gray-600 mb-3">Monthly management, optimization, and reporting for active campaigns.</p>
          <p className="text-xl font-heading font-bold mb-0">from $2,500/mo</p>
        </div>
      </div>

      <p className="text-base text-gray-600">
        This is one concrete example of senior pricing — not the only valid model, just a reference point. For details by engagement type, see{" "}
        <Link href="/usluge/konsultacije" className="underline">consultations</Link>,{" "}
        <Link href="/usluge/starter-paket" className="underline">the starter package</Link>, or{" "}
        <Link href="/usluge/google-ads-upravljanje" className="underline">account management</Link>.
      </p>

      <hr />

      <h2 id="what-comparing-three-quotes-looks-like-in-practice">What comparing three quotes looks like in practice</h2>
      <p>
        To make all of this more concrete, here&apos;s a hypothetical example — not an actual client, just a typical scenario I see when a company with $5,000/month ad spend gets quotes from three different types of partners.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Quote</th>
              <th className="py-3 px-3 font-heading font-semibold">Monthly fee</th>
              <th className="py-3 px-3 font-heading font-semibold">Effective rate/hr*</th>
              <th className="py-3 px-3 font-heading font-semibold">What you get</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Junior freelancer</td>
              <td className="py-3 px-3">$450/mo</td>
              <td className="py-3 px-3">~$45-55/hr (8-10hrs)</td>
              <td className="py-3 px-3">Basic optimization, monthly report without deeper context</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Senior consultant</td>
              <td className="py-3 px-3">$1,200/mo</td>
              <td className="py-3 px-3">~$200/hr (6hrs)</td>
              <td className="py-3 px-3">Strategic optimization, direct contact, fast problem detection</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Small agency</td>
              <td className="py-3 px-3">$1,600/mo</td>
              <td className="py-3 px-3">~$80-100/hr (mixed team)</td>
              <td className="py-3 px-3">Account manager + junior/mid PPC, more formal reporting, backup during absences</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-2">*Estimate based on typical hours devoted to an account this size — directional, not an exact calculation for every account.</p>

      <p>
        At first glance, the junior quote looks like the best deal. But $45-55/hour for Google Ads management is below the level at which quality work can realistically be delivered — which means part of the work likely won&apos;t get done properly, or will lean on Google&apos;s automated recommendations without critical review.
      </p>
      <p>
        The senior quote at $200/hour aligns with the market benchmark (see the section above) and generally means you get the full attention of one experienced person. The agency quote at $80-100/hour is effectively cheaper per hour because it includes a team — but with an extra layer of communication (account manager) and less guarantee that a senior person specifically works on your account.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">How I look at this comparison</p>
        <p className="text-blue-800 text-base mb-0">
          For an account this size ($5,000 spend, single channel, clear goal), the senior option usually carries the best risk-to-value ratio — enough attention to catch mistakes early, enough experience to avoid learning on your budget. But that&apos;s not universally true; if you need multiple channels plus creative/design work, an agency team covers a broader scope faster.
        </p>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2 id="frequently-asked-questions">Frequently asked questions</h2>
      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much does a Google Ads consultant cost per month?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Budget $250-500/month for a junior freelancer. A senior consultant with 5+ years of experience charges $800-2,500/month fixed, depending on account size and whether strategy is included or it&apos;s optimization-only. Agencies start at $600-2,500+/month, often plus a percentage of ad spend.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Is percentage of ad spend a fair pricing model?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            For budgets of $2,500-20,000/month, yes — percentage (usually 10-20%, typically 12-15%) tracks real growth in workload. Above $25,000/month, the math breaks down because work doesn&apos;t scale linearly with spend. In that case, ask for a hybrid model with a cap or a fixed price.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            When does a junior consultant make sense instead of a senior?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            When budget is under $1,500/month, the account is simple (one campaign, one goal), and you have an internal person who can oversee the work at a high level. For more complex accounts or larger budgets, the cost of a mistake quickly outweighs the fee savings.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How long does a typical engagement with a Google Ads consultant last?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Standard contracts run 3-6 months with a 30-day notice period. First optimization results show up in 2-3 months, and a good-fit engagement often continues for a year or more. Be wary of contracts longer than 12 months without a trial period.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What if my budget can&apos;t afford a senior?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Consider a one-time senior audit or setup ($600-1,200) that gets the structure and tracking right, then have a junior or DIY handle ongoing optimization with a quarterly senior review. This captures most of a senior&apos;s value for a fraction of the cost of an ongoing engagement.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Is it normal to negotiate price with a Google Ads consultant?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Yes, to a degree. A fixed retainer can often be adjusted to scope (e.g., fewer campaigns for a lower starting price, with a growth plan after 3 months). What shouldn&apos;t be negotiated is quality — if a consultant drops their price but then reduces the attention given to your account, you&apos;ve gotten worse service, not a better deal. It&apos;s better to negotiate scope (what&apos;s included) than just the number on the invoice.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why do prices vary so much between markets?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Cost of living and local market purchasing power are the main factors — the same senior level of expertise sells for $150-200/hr in the US/UK, while in lower-cost markets it sells for roughly the local equivalent of $120-180/hr. This isn&apos;t a difference in work quality, it&apos;s a difference in the market price of that skill level in a given economy. This is also why hiring a consultant based in a lower cost-of-living market can get you senior expertise at a more favorable price than hiring the same skill level locally in the US or UK.
          </div>
        </details>
      </div>

      {/* ── Related guides ── */}
      <h2 id="related-guides">Related guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/konsultacije" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Consultations</p>
          <p className="text-xs text-gray-500 mb-0">Ad-hoc audit or strategic second opinion, hourly</p>
        </Link>
        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads account management</p>
          <p className="text-xs text-gray-500 mb-0">Ongoing monthly management and optimization</p>
        </Link>
        <Link href="/usluge/starter-paket" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Starter package</p>
          <p className="text-xs text-gray-500 mb-0">One-time account setup for companies starting from scratch</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-agency-vs-freelancer" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Agency vs. Freelancer vs. In-House</p>
          <p className="text-xs text-gray-500 mb-0">Which management model fits your company</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "how-much-does-google-ads-cost" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">How Much Does Google Ads Cost</p>
          <p className="text-xs text-gray-500 mb-0">CPC by industry and budgets for the ad spend itself</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: July 2026
      </div>
      <div className="text-sm text-gray-500">
        Author: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}
