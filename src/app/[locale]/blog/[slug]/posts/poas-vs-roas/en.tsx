import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function PoasVsRoasEN() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          POAS (Profit on Ad Spend) = profit ÷ ad spend. Unlike ROAS, which only measures revenue,
          POAS measures the actual money left in your pocket. A 4× ROAS can be a loss if margin is
          thin; a 1.5× POAS is always profitable, regardless of margin. Across the accounts I run,
          average POAS is 1.78× — that&apos;s the metric I look at before ROAS.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1.78×</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Average POAS (our accounts)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1×</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">POAS break-even (always)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1÷m</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">ROAS break-even (margin-dependent)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Accounts with native POAS in the UI</p>
          </div>
        </div>
        <p className="text-sm text-slate-400 mt-6 mb-0 border-t border-slate-700 pt-4">
          This post builds on{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "what-is-roas" } }} className="underline text-slate-300 hover:text-white">
            What is ROAS and How to Calculate It
          </Link>{" "}
          — read that first if the ROAS formula itself isn&apos;t already clear.
        </p>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">Quick answer</p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          What is POAS and how is it different from ROAS?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          <strong>POAS (Profit on Ad Spend)</strong> = Profit ÷ Ad Spend. The formula bakes in margin —
          while <GlossaryLink slug="roas">ROAS</GlossaryLink> = Revenue ÷ Spend, POAS = (Revenue × Margin) ÷ Spend.
          The profitability threshold is always the same: POAS below 1× means a loss, above 1× means profit —
          regardless of industry or product margin. ROAS has no such universal threshold because it knows
          nothing about your margin.
        </p>
      </div>

      <hr />

      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#why-roas-lies" className="block py-1 text-base text-gray-700 hover:text-primary underline">Why ROAS lies — same ROAS, different profit</a></li>
          <li><a href="#break-even-math" className="block py-1 text-base text-gray-700 hover:text-primary underline">Break-even math: ROAS and POAS</a></li>
          <li><a href="#implementation" className="block py-1 text-base text-gray-700 hover:text-primary underline">How to implement POAS in practice</a></li>
          <li><a href="#when-not-needed" className="block py-1 text-base text-gray-700 hover:text-primary underline">When POAS isn&apos;t needed</a></li>
          <li><a href="#bidding-shift" className="block py-1 text-base text-gray-700 hover:text-primary underline">What changes in bid strategy</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">FAQ</a></li>
          <li><a href="#related-guides" className="block py-1 text-base text-gray-700 hover:text-primary underline">Related guides</a></li>
        </ol>
      </nav>

      <h2 id="why-roas-lies">Why ROAS lies — same ROAS, different profit</h2>

      <p>
        I&apos;ve seen this play out dozens of times: a client looks at the dashboard, sees a 4× ROAS
        across all three of their product categories, and concludes they&apos;re equally healthy. In
        reality, one category is generating solid profit, another is barely breathing, and a third —
        at an identical 4× ROAS — is quietly losing money on every sale. ROAS can&apos;t tell these
        three scenarios apart because it knows nothing about the cost of goods sold.
      </p>

      <p>
        The problem isn&apos;t that ROAS is a &quot;bad&quot; metric — it does exactly what it&apos;s
        built to do, measuring the ratio of revenue to spend. The problem is that people use ROAS as a
        proxy for profitability, when profitability depends on a third number ROAS never accounts for:
        cost of goods sold (COGS). Once that number varies by product — and in practice it almost
        always does, even in seemingly simple catalogs — ROAS stops being a reliable guide for budget
        decisions.
      </p>

      <p>
        This shows up most clearly on eCommerce accounts with a broad assortment. A multi-category
        store selling both high-margin accessories and low-margin &quot;anchor&quot; products (branded
        electronics at a 5–10% margin, stocked purely to drive traffic) will almost always turn up a
        finding like the table below — somewhere in the portfolio sits a product with a good ROAS that
        is quietly eating profit out of the rest of the account. Without a POAS view, that product
        keeps getting funded because it looks like a &quot;winner&quot; on every standard report.
      </p>

      <p>
        Here&apos;s an illustrative example with three products that share an <strong>identical
        4× ROAS</strong> but wildly different margins — the numbers are deliberately round and
        simplified for clarity, not pulled from any real client account:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Product</th>
              <th className="py-3 px-3 font-heading font-semibold">Revenue</th>
              <th className="py-3 px-3 font-heading font-semibold">Spend</th>
              <th className="py-3 px-3 font-heading font-semibold">ROAS</th>
              <th className="py-3 px-3 font-heading font-semibold">Margin</th>
              <th className="py-3 px-3 font-heading font-semibold">Profit</th>
              <th className="py-3 px-3 font-heading font-semibold">POAS</th>
              <th className="py-3 px-3 font-heading font-semibold">Reality</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">A — Premium line</td>
              <td className="py-3 px-3">€10,000</td>
              <td className="py-3 px-3">€2,500</td>
              <td className="py-3 px-3 font-semibold">4.0×</td>
              <td className="py-3 px-3">50%</td>
              <td className="py-3 px-3">€5,000</td>
              <td className="py-3 px-3 font-semibold">2.0×</td>
              <td className="py-3 px-3"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Healthy profit</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">B — Standard line</td>
              <td className="py-3 px-3">€10,000</td>
              <td className="py-3 px-3">€2,500</td>
              <td className="py-3 px-3 font-semibold">4.0×</td>
              <td className="py-3 px-3">25%</td>
              <td className="py-3 px-3">€2,500</td>
              <td className="py-3 px-3 font-semibold">1.0×</td>
              <td className="py-3 px-3"><span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-0.5 rounded">Break-even</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">C — Budget line</td>
              <td className="py-3 px-3">€10,000</td>
              <td className="py-3 px-3">€2,500</td>
              <td className="py-3 px-3 font-semibold">4.0×</td>
              <td className="py-3 px-3">15%</td>
              <td className="py-3 px-3">€1,500</td>
              <td className="py-3 px-3 font-semibold">0.6×</td>
              <td className="py-3 px-3"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Loss</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-red-700 text-lg mb-2">Critical point</p>
        <p className="text-base text-red-800 mb-0">
          All three product lines carry an identical 4× ROAS. If you only look at the ROAS dashboard,
          they look equally healthy. In reality, Product C loses money on every sale, while Product A
          generates more than three times the profit on the same spend. Without POAS, budget could be
          split evenly across all three lines — meaning you&apos;re pouring money into the losing line
          while starving the most profitable one.
        </p>
      </div>

      <p>
        This is why a &quot;great ROAS&quot; isn&apos;t always good news. Product C would look like the
        best campaign in the account on paper — same ROAS, maybe even higher sales volume because of
        its lower price point — when it&apos;s actually the only one actively draining profit from the
        rest of the account.
      </p>

      <hr />

      <h2 id="break-even-math">Break-even math: ROAS and POAS</h2>

      <p>
        This is where most people trip up, so let&apos;s go step by step. There are two formulas and
        they get mixed up easily:
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6 space-y-3">
        <p className="font-heading font-semibold text-lg mb-0">
          Break-even ROAS = 1 ÷ Margin (decimal)
        </p>
        <p className="font-heading font-semibold text-lg mb-0">
          POAS = (Revenue × Margin) ÷ Spend = Profit ÷ Spend
        </p>
      </div>

      <p>
        <strong>Break-even ROAS depends on margin</strong> — the lower the margin, the higher the ROAS
        you need just to cover spend. Here&apos;s a table that shows it directly:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Margin</th>
              <th className="py-3 px-3 font-heading font-semibold">Break-even ROAS (1 ÷ margin)</th>
              <th className="py-3 px-3 font-heading font-semibold">What it means</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3">70%</td>
              <td className="py-3 px-3 font-semibold">1.43×</td>
              <td className="py-3 px-3">High margin — even a modest ROAS is profitable</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3">50%</td>
              <td className="py-3 px-3 font-semibold">2.0×</td>
              <td className="py-3 px-3">Standard for brand-heavy eCommerce</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3">33%</td>
              <td className="py-3 px-3 font-semibold">3.0×</td>
              <td className="py-3 px-3">Typical multi-category eCommerce average</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3">25%</td>
              <td className="py-3 px-3 font-semibold">4.0×</td>
              <td className="py-3 px-3">Lower margin — 4× ROAS is just break-even, not a win</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3">15%</td>
              <td className="py-3 px-3 font-semibold">6.67×</td>
              <td className="py-3 px-3">Low margin (e.g. electronics) — needs an aggressive ROAS target</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3">10%</td>
              <td className="py-3 px-3 font-semibold">10.0×</td>
              <td className="py-3 px-3">Razor-thin margin — most accounts here never reach profit through ads alone</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <strong>POAS break-even is always 1×</strong> — which is why POAS is mentally easier to work
        with. You don&apos;t have to memorize a table for every margin; you just check whether the
        number is above or below 1. If POAS is 1.5×, for every € spent on ads you got back €1 of spend
        plus €0.50 of pure profit. If POAS is 0.8×, you&apos;re losing 20 cents on every € spent, no
        matter how &quot;good&quot; the ROAS dashboard looks.
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Sanity check (so the math always agrees)</p>
        <p className="text-base text-yellow-900 mb-2">
          Product B from the table above: 25% margin, break-even ROAS = 1 ÷ 0.25 = <strong>4.0×</strong>.
          Its actual ROAS is exactly 4.0× — meaning it sits right on the break-even line. POAS confirms
          the same thing: (10,000 × 0.25) ÷ 2,500 = 2,500 ÷ 2,500 = <strong>1.0×</strong> — break-even.
        </p>
        <p className="text-base text-yellow-900 mb-0">
          Product C: 15% margin, break-even ROAS = 1 ÷ 0.15 = <strong>6.67×</strong>. Actual ROAS is only
          4.0× — below the threshold, meaning a loss. POAS confirms it directly: 0.6× (below 1×). The
          two formulas must always agree on the same verdict — if they don&apos;t, there&apos;s an error
          in one of the inputs somewhere.
        </p>
      </div>

      <p>
        The same logic works in reverse — you can derive the ROAS you&apos;d need for a target profit
        from a target POAS. Say you want a POAS of 1.5× at a 30% margin: required ROAS = 1.5 ÷ 0.30 =
        5.0×. That&apos;s a useful trick when talking to a client who still thinks in ROAS terms —
        translate their POAS target back into a familiar ROAS target, but one anchored to their actual
        catalog margin, not some industry average from a report.
      </p>

      <hr />

      <h2 id="implementation">How to implement POAS in practice</h2>

      <p>
        POAS isn&apos;t a native metric in the Google Ads interface — Google doesn&apos;t know your
        margin and has no reason to assume one. That means implementation requires <strong>you</strong>{" "}
        to inject a profit signal where Google would otherwise only see revenue. This isn&apos;t a
        trivial technical detail — each of the approaches below carries a different level of risk,
        development effort, and precision, so the choice depends on how quickly you need visibility
        versus how deeply you want the algorithm to actually change its behavior. Here&apos;s the order
        I work through on accounts, from simplest to most sophisticated:
      </p>

      <div className="space-y-4 my-8">
        <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">1. Margin data in the feed or conversion value</p>
          <p className="text-base text-gray-600 mb-0">
            Two approaches. (a) If you have per-SKU margin in your system, add a custom label to the
            product feed carrying the margin percentage — this enables grouping products by
            profitability within campaigns. (b) The more precise approach: instead of conversion
            tracking sending <em>revenue</em> as conversion value, you send <em>profit</em> (revenue
            minus COGS minus shipping/returns costs) directly as the conversion value. Google still
            &quot;thinks&quot; it&apos;s optimizing ROAS, but it&apos;s actually optimizing POAS,
            because the value it sees is already profit, not revenue.
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">2. Custom columns in the Google Ads interface</p>
          <p className="text-base text-gray-600 mb-0">
            If you don&apos;t want to change conversion value tracking yet (riskier, needs development),
            build a custom column: Profit = (Conv. value × average margin) − Cost. This gives you a
            read-only POAS view in standard reports without touching the bidding signal — a good first
            step before full implementation.
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">3. Value rules for real-time margin correction</p>
          <p className="text-base text-gray-600 mb-0">
            Google Ads Value Rules let you adjust conversion value by location, device, or audience —
            you can repurpose them creatively to simulate margin differences (e.g. lowering the value of
            conversions from a segment that typically buys only discounted, low-margin items). A limited
            fix, but useful when you don&apos;t have the developer resources for a full feed/tracking build.
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">4. Dedicated profit tracking tools</p>
          <p className="text-base text-gray-600 mb-0">
            For accounts with complex COGS structures (variable shipping costs, seasonal discounts,
            payment processing fees), manually calculating margin per order becomes unsustainable.
            That&apos;s where dedicated profit tracking tools come in — they connect to Shopify/WooCommerce,
            pull real COGS per SKU, and send a clean profit signal back into Google Ads and Meta Ads as
            conversion value. I personally use <strong>ProfitMetrics</strong> on accounts where the
            margin structure is messy — but the principle holds regardless of which tool you use:
            somewhere, a system needs to know the real profit per order, not just revenue. The advantage
            of a tool like this over a manually maintained custom column is that it automatically
            captures margin changes in real time — when a client runs a 20% discount on an entire
            category, the tool reflects that immediately in the profit signal going to Google Ads,
            while a manually maintained custom column would stay stale until someone updates it.
          </p>
        </div>
      </div>

      <p>
        The order I recommend: start with the custom column (zero risk, fast), confirm the numbers
        match your bookkeeping for a month or two, and only then change conversion value so the
        algorithm actually starts optimizing toward profit. Skipping that verification step and pushing
        profit straight into conversion value is a common source of errors that are hard to spot later.
      </p>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-sm font-bold text-gray-900 mb-3">A concrete implementation example (illustrative)</p>
        <p className="text-base text-gray-700 mb-3">
          Picture an eCommerce account where Google Ads normally receives conversion value = order
          price (say, €120). For Smart Bidding to see profit instead of revenue, the tracking
          implementation changes so the conversion value becomes: (order price × average category
          margin) − fixed shipping cost. For that same €120 order, if the category margin is 35% and
          shipping costs €4, the value sent to Google becomes (120 × 0.35) − 4 = €38, not €120.
        </p>
        <p className="text-base text-gray-700 mb-0">
          The algorithm still &quot;thinks&quot; it&apos;s optimizing conversion value/ROAS — but since
          the value itself is now profit, it&apos;s effectively running Target POAS. This is why the
          implementation needs careful coordination with a developer and bookkeeping: a wrong margin
          formula (e.g. gross markup instead of net margin) feeds the algorithm the wrong signal, and it
          optimizes toward the wrong target with no warning anywhere in the interface.
        </p>
      </div>

      <hr />

      <h2 id="when-not-needed">When POAS isn&apos;t needed</h2>

      <p>
        POAS isn&apos;t a universal fix and shouldn&apos;t be forced everywhere. If you have{" "}
        <strong>uniform margins</strong> — every product in the account carries roughly the same margin
        (say, 30% ± 3%) — then a ROAS target already implicitly encodes profitability. In that case,
        the extra POAS infrastructure is overhead without real benefit: development time, tracking risk,
        and the ongoing maintenance of margin data cost more than they return, since the resulting
        bidding decisions would be practically identical to what you&apos;d get from a well-calibrated
        ROAS target based on that same average margin.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-green-800 mb-2">POAS makes sense when</p>
          <ul className="text-sm text-green-900 space-y-1 mb-0">
            <li>Margin varies 15+ percentage points across product categories</li>
            <li>You run premium and budget lines in the same account</li>
            <li>The portfolio spans multiple categories (e.g. apparel + electronics)</li>
            <li>Rev-share or profit-share contracts with the client (profit = your fee)</li>
            <li>Seasonal discounts swing margin dramatically month to month</li>
          </ul>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">A ROAS target is enough when</p>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>Uniform margin across the whole catalog (mono-brand, single category)</li>
            <li>Small SKU count with a similar pricing structure</li>
            <li>Lead gen accounts (no real COGS concept — see FAQ)</li>
            <li>No developer/tracking resources to implement it within a reasonable timeframe</li>
            <li>The account is too small to justify extra tracking infrastructure</li>
          </ul>
        </div>
      </div>

      <p>
        A practical rule I use: if the margin gap between the most and least profitable product
        category is under 10 percentage points, POAS rarely changes budget decisions compared to a
        well-calibrated ROAS target. Above that, POAS starts to genuinely change recommendations — and
        it&apos;s worth investing in the implementation.
      </p>

      <p>
        There&apos;s also a middle option I often recommend to small and mid-size accounts unsure
        whether they need the full build: run a one-off custom column analysis (done manually, outside
        Google Ads, in a spreadsheet) at the product-category level. If that one-time analysis shows
        margin differences shift the profitability ranking of products relative to their ROAS ranking,
        that&apos;s the signal it&apos;s worth investing in a lasting POAS setup. If the rankings match,
        ROAS is a good enough proxy and you can save the development budget for something else.
      </p>

      <hr />

      <h2 id="bidding-shift">What changes in bid strategy when the algorithm sees profit</h2>

      <p>
        This is the part that surprises clients the most: when the{" "}
        <GlossaryLink slug="troas">tROAS</GlossaryLink> algorithm optimizes toward a conversion value
        that&apos;s actually profit (not revenue), <strong>bidding behavior changes fundamentally</strong>{" "}
        — not just the numbers in the report. This isn&apos;t a cosmetic change to the metric you look
        at on a dashboard; the actual function the algorithm tries to maximize changes at the level of
        every single auction, thousands of times a day.
      </p>

      <p>
        In practice, that means two auctions that would previously have looked identically valuable
        under a Maximize Conversion Value goal (say, both worth €100 in conversion value) can now get
        entirely different bids — if one comes from a product with a 50% margin and the other from a
        product with a 10% margin, the algorithm will bid more aggressively for the first. That&apos;s
        a fundamental difference from a standard tROAS setup, where both auctions would be treated
        exactly the same since their conversion value (revenue) is identical.
      </p>

      <ul>
        <li>
          <strong>The algorithm starts favoring high-margin products</strong>, even if they generate
          lower revenue per transaction. A product bringing in €50 revenue at 60% margin (€30 profit)
          becomes &quot;worth more&quot; to the algorithm than one bringing in €80 revenue at 15% margin
          (€12 profit) — even though the second product would look better under a pure ROAS/Maximize
          Conversion Value goal.
        </li>
        <li>
          <strong>Budget naturally reallocates</strong> toward ad groups and campaigns tied to more
          profitable product lines, with no manual intervention — the algorithm does this automatically
          because it&apos;s optimizing the signal you gave it.
        </li>
        <li>
          <strong>The target needs recalibrating</strong> — if you previously had a tROAS target of 400%
          based on revenue, once you switch to profit-based conversion value, that same numeric target
          no longer means the same thing. It should be set based on the POAS break-even (1×) plus a
          margin of safety — e.g. a target POAS of 1.3–1.5× for a healthy buffer above break-even.
        </li>
        <li>
          <strong>Volatility rises in the short term</strong> — profit per order has more variance than
          revenue (margin fluctuates with discounts, promos, and product mix), so the algorithm needs a
          somewhat longer learning period to stabilize its predictions.
        </li>
        <li>
          <strong>Client reporting gets more direct</strong> — instead of &quot;ROAS is 4×, great,&quot;
          the conversation becomes &quot;POAS is 1.6×, meaning every € invested returned 60 cents of
          clean profit after all costs.&quot; That&apos;s a conversation clients with a finance
          background grasp and appreciate immediately.
        </li>
      </ul>

      <p>
        What this means in practice: when you switch to profit-based bidding, the first report after
        the change often looks &quot;worse&quot; by the old standard — total revenue can dip slightly
        because the algorithm deliberately pulls back spend from low-margin products it used to push
        aggressively. That&apos;s not a regression, it&apos;s exactly what you asked for — less revenue
        from poorly profitable sales, more budget where every € of ad spend generates real profit.
        Across the accounts I run, this transition typically means a mild dip in total revenue in the
        first month, followed by growth in total profit over the next 2–3 months as budget fully
        redistributes. That&apos;s why an average POAS of 1.78× is a more valuable data point than any
        single ROAS number — it tells you what the client actually earns, not how much turnover the
        account generates.
      </p>

      <hr />

      <h2 id="faq">FAQ</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What POAS is good?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Anything above 1× is profitable, but what counts as &quot;good&quot; depends on how much
            buffer you want above break-even, plus how much profit needs to cover non-ad costs (fixed
            overhead, salaries, your fee as an agency). As a rough guide: POAS of 1.3–1.5× is solid,
            1.8×+ is strong. Across the accounts I run, the average is 1.78× — but that&apos;s an
            average across very different margin profiles, not a universal target to copy without
            context. More important than the absolute number is the trend: a POAS that rises month over
            month means the optimization is working, even if the absolute value is modest (e.g.
            1.1–1.2×) early in implementation.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How do I start with POAS without developer resources?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Start with a custom column in the Google Ads interface: Profit = (Conv. value × average
            margin) − Cost. This is a read-only report, doesn&apos;t touch bidding, and requires no
            developer work — you just need one number (average gross margin), which the business owner
            or bookkeeper usually already has. The next step (sending profit as conversion value)
            requires development, but the custom column gives you immediate visibility with zero risk.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does Google Ads support POAS natively?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            No. Google Ads has no built-in POAS metric and no &quot;Target POAS&quot; bidding strategy.
            What exists is <GlossaryLink slug="troas">Target ROAS</GlossaryLink>, which you can
            effectively repurpose to optimize profit by making the conversion value you send Google
            profit instead of revenue. Google still labels the metric &quot;ROAS&quot; in the interface,
            but if the conversion value is profit, you&apos;re functionally running Target POAS. The
            same principle works on Meta Ads via custom conversion value parameters — the platform is
            agnostic about what you send as &quot;value,&quot; it just optimizes to maximize that number.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does POAS make sense for lead gen accounts?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Not in the same form. POAS is a concept built around COGS and margin per unit sold — lead
            gen accounts (calls, form fills) don&apos;t have &quot;sales revenue&quot; in the same
            sense, so there&apos;s nothing to multiply by margin at the conversion level. The lead gen
            equivalent is <GlossaryLink slug="tcpa">CPA</GlossaryLink> weighed against the true value of
            a lead (customer LTV minus the cost of delivering the service) — the same &quot;look at
            profit, not just volume&quot; principle, but expressed through a CPA/ROI lens rather than
            the POAS formula.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How long does the transition from ROAS to POAS take?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            The custom column approach: a few hours, as soon as you have a margin number. Full
            implementation (margin data in the feed or sending profit as conversion value): typically
            2–4 weeks accounting for development, testing, and verifying the new numbers match your
            bookkeeping. After changing conversion value, budget another 2–3 weeks of learning period
            for <GlossaryLink slug="smart-bidding">Smart Bidding</GlossaryLink> to stabilize on the new
            signal — don&apos;t adjust targets during that window. All told, from decision to stable
            profit-based bidding, plan on 6–8 weeks for a mid-complexity account. Accounts with a very
            simple margin structure (single category, uniform margin) can move faster; accounts with
            dozens of categories and seasonal discounts take longer — because margin data needs to be
            accurate per SKU, not just averaged per category.
          </div>
        </details>
      </div>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Not sure how much of your ROAS is actually profit?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Free account analysis with POAS mapping by product category and margin-based bidding
          recommendations.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Book a free consultation
        </Link>
      </div>

      <hr />

      <h2 id="related-guides">Related guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "what-is-roas" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">What is ROAS and how to calculate it</p>
          <p className="text-xs text-gray-500 mb-0">The base formula, benchmarks, and calculator</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Smart Bidding guide</p>
          <p className="text-xs text-gray-500 mb-0">tROAS, Maximize Conversion Value, and when to use each</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking guide</p>
          <p className="text-xs text-gray-500 mb-0">Without accurate conversion value tracking, POAS is fiction</p>
        </Link>
        <Link href="/usluge/google-ads-za-ecommerce" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads for eCommerce</p>
          <p className="text-xs text-gray-500 mb-0">Service: profit-first account management</p>
        </Link>
        <Link href="/usluge/google-shopping" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping service</p>
          <p className="text-xs text-gray-500 mb-0">Tiered Shopping and margin-based bidding</p>
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
