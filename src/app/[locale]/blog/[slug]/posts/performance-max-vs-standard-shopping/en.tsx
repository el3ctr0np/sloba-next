import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function PerformanceMaxVsStandardShoppingEN() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Quick verdict</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Performance Max isn&apos;t the successor to Standard Shopping — it&apos;s a different tool with a different job. Run PMax where you have volume and clean tracking, keep Standard Shopping where you need control and visibility, and since October 2024 you can run both without one strangling the other. The days of &quot;PMax always wins, don&apos;t bother with Standard&quot; are over.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Oct 2024</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">the change that rewrote the old advice</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">modes, two different jobs</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">50+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">conversions/mo before PMax is your primary</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">6-figure</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Shopping revenue (GBP) across 2+ years on one UK account</p>
          </div>
        </div>
      </div>

      <p>
        Almost every advice thread you&apos;ll read on this was written for a world that stopped existing in October 2024. The old rule was blunt: Performance Max overrides Standard Shopping, they can&apos;t coexist, so migrate everything to PMax and hand the keys to the algorithm. I followed that debate closely while running Shopping for UK clients, and a lot of the &quot;PMax always wins&quot; advice still floating around is simply out of date.
      </p>
      <p>
        I run both campaign types for the same client. On one UK account (a skincare brand) Shopping has driven six-figure revenue at a <GlossaryLink slug="poas">POAS</GlossaryLink> of 1.78x in a thin-margin category, across more than two years of running Shopping on that account — with PMax carrying the scaled catalog and Standard Shopping holding the parts where I need a hand on the wheel. This isn&apos;t a &quot;here&apos;s what Google&apos;s docs say&quot; article. It&apos;s what I actually do on live accounts, including where PMax has burned budget I had to claw back.
      </p>
      <p>
        If you&apos;re still deciding between Shopping and Search altogether, start with the{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vs-search-campaigns" } }} className="underline text-blue-700 font-medium">
          Shopping vs Search campaigns guide
        </Link>{" "}
        first. Here I assume you&apos;ve committed to Shopping and the only open question is: Standard Shopping, Performance Max, or both.
      </p>

      {/* TOC nav */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Contents</p>
        <ul className="list-none pl-0 mb-0 space-y-0">
          <li><a href="#quick-verdict" className="block py-1 text-base text-gray-700 hover:text-primary underline">The quick verdict</a></li>
          <li><a href="#what-each-is" className="block py-1 text-base text-gray-700 hover:text-primary underline">What each one actually is (30 seconds)</a></li>
          <li><a href="#october-2024" className="block py-1 text-base text-gray-700 hover:text-primary underline">The 2026 reality: the October 2024 change</a></li>
          <li><a href="#pmax-wins" className="block py-1 text-base text-gray-700 hover:text-primary underline">Where PMax wins — and where it burns you</a></li>
          <li><a href="#standard-wins" className="block py-1 text-base text-gray-700 hover:text-primary underline">Where Standard Shopping still wins</a></li>
          <li><a href="#hybrid" className="block py-1 text-base text-gray-700 hover:text-primary underline">The hybrid that actually works</a></li>
          <li><a href="#how-to-test" className="block py-1 text-base text-gray-700 hover:text-primary underline">How to test it properly</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
        </ul>
      </nav>

      <hr />

      {/* ── Featured snippet block ── */}
      <h2 id="quick-verdict">The quick verdict</h2>
      <p>
        If you want the answer without the reasoning, here it is. Neither type is universally &quot;better&quot; in 2026 — you pick based on volume, catalog, tracking quality, and how much control you need.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Your situation</th>
              <th className="py-3 px-3 font-heading font-semibold">What to run</th>
              <th className="py-3 px-3 font-heading font-semibold">Why</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Small catalog, tight margins, or a new launch</td>
              <td className="py-3 px-3">Standard Shopping</td>
              <td className="py-3 px-3">You get search-term visibility, a hard CPC ceiling, and reporting that doesn&apos;t hide anything. Under ~50 SKUs or under 30 conversions/mo, PMax has nothing to work with.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">50+ conversions/mo, clean tracking, real creative</td>
              <td className="py-3 px-3">Performance Max</td>
              <td className="py-3 px-3">Reach across the whole Google ecosystem, automation that finds queries you&apos;d never bid on, and asset-driven placements Standard can&apos;t touch.</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Established store scaling with room to segment</td>
              <td className="py-3 px-3">Both, deliberately split</td>
              <td className="py-3 px-3">PMax as the workhorse, Standard Shopping ring-fencing new products and high-intent terms. In Optmyzr&apos;s study of 24,702 PMax campaigns, 82% of advertisers were already running PMax alongside Shopping or Search rather than PMax-only.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="what-each-is">What each one actually is (30 seconds)</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Standard Shopping</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">One channel, full transparency</h3>
          <p className="text-base text-gray-600 mb-0">
            Standard Shopping shows product listings on the Search results page and the Shopping tab, driven by your <GlossaryLink slug="merchant-center">Merchant Center</GlossaryLink> feed. You see the exact search terms, you can add negatives, and you can cap your <GlossaryLink slug="cpc">CPC</GlossaryLink>. It does one thing, and it tells you exactly what it did.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Performance Max</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Every channel, one automated campaign</h3>
          <p className="text-base text-gray-600 mb-0">
            <GlossaryLink slug="pmax">Performance Max</GlossaryLink> takes your feed plus creative assets (images, video, text) and serves across Search, Shopping, YouTube, Display, Gmail, and Discover from a single campaign. Google&apos;s <GlossaryLink slug="smart-bidding">Smart Bidding</GlossaryLink> decides where, when, and how much to bid. You give up granular control in exchange for reach and automation.
          </p>
        </div>
      </div>

      <p>
        That trade — control versus reach — is the whole decision. Standard Shopping hands you the levers. PMax takes them and, in return, plays a board you can&apos;t reach manually. Everything below is about when each trade is worth making.
      </p>

      <hr />

      <h2 id="october-2024">The 2026 reality: the October 2024 change that rewrote the old advice</h2>
      <p>
        Here&apos;s the piece most articles miss, because they were written before it happened. It used to be a hard rule: when a Performance Max campaign and a Standard Shopping campaign in the same account could both serve for the same query, PMax won automatically. That single rule is why the old advice was &quot;just migrate everything to PMax — Standard can&apos;t compete anyway.&quot;
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">What changed</p>
        <p className="text-yellow-800 text-base mb-0">
          Since October 2024, Google decides the overlapping auction by <GlossaryLink slug="ad-rank">Ad Rank</GlossaryLink> — not by campaign type. Neither PMax nor Standard Shopping gets automatic priority. Whichever campaign has the higher Ad Rank in that specific auction serves. That sounds like a small technical footnote. It isn&apos;t. It quietly killed the main argument for going PMax-only.
        </p>
      </div>

      <p>
        The practical consequence: a well-built Standard Shopping campaign no longer just loses to PMax by default. If your Standard Shopping bid and relevance win the auction, it serves. This is exactly what makes the hybrid viable in 2026 — you can keep Standard Shopping on the products and terms where you want control, and it&apos;ll actually compete instead of being silently overridden. Any advice telling you PMax structurally cannibalizes Standard Shopping is describing the pre-October-2024 world.
      </p>

      <hr />

      <h2 id="pmax-wins">Where PMax wins — and where it burns you</h2>
      <p>
        I&apos;ll be honest about both sides, because most PMax write-ups are either cheerleading or a witch hunt. It&apos;s a genuinely powerful campaign type with a few real, well-documented failure modes.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">Where it wins</h3>
      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Reach across the whole Google ecosystem</p>
          <p className="text-base text-gray-600 mb-0">
            One campaign puts your products in front of shoppers on Search, the Shopping tab, YouTube, Display, Gmail, and Discover. Standard Shopping can&apos;t touch YouTube or Discover. For a store with strong visual or video creative, that extra surface area is real incremental revenue, not just impressions.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Automation that finds demand you&apos;d never bid on</p>
          <p className="text-base text-gray-600 mb-0">
            With enough conversion data, PMax discovers queries, audiences, and product combinations a human wouldn&apos;t think to target. On accounts with volume, this consistently surfaces pockets of profitable demand I wouldn&apos;t have built manually. That&apos;s the payoff for giving up control.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Scales a large catalog without hand-management</p>
          <p className="text-base text-gray-600 mb-0">
            With hundreds or thousands of SKUs, you can&apos;t manually shepherd every product. PMax reads the feed and allocates spend toward what sells. The bigger and healthier your catalog, the more this works in your favor.
          </p>
        </div>
      </div>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">Where it burns you</h3>
      <div className="space-y-4 my-6">
        <div className="bg-red-50 border border-red-100 rounded-xl p-5">
          <p className="font-heading font-bold text-red-900 mb-1">Brand cannibalization — a tax on your own name</p>
          <p className="text-base text-red-800/90 mb-0">
            This is the one that catches people out. Without brand exclusions, PMax happily spends on people searching for your brand — conversions that would have happened anyway, at almost no cost, through cheap brand Search. PMax scoops them up and reports them as its own wins, and your headline ROAS looks great while your incremental ROAS quietly rots. If you take one thing from this section: apply brand exclusions (via a Google rep or the account-level setting) before you scale PMax.
          </p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5">
          <p className="font-heading font-bold text-red-900 mb-1">CPCs can jump hard on migration</p>
          <p className="text-base text-red-800/90 mb-0">
            When accounts moved from Smart Shopping to PMax, plenty of advertisers saw CPCs climb — in some cases close to double — for the same traffic. PMax bids across more surfaces and less transparently, so you don&apos;t always see where the extra cost is going. Watch your CPC trend for the first few weeks after launch, not just ROAS.
          </p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5">
          <p className="font-heading font-bold text-red-900 mb-1">Random spend spikes with no obvious cause</p>
          <p className="text-base text-red-800/90 mb-0">
            PMax will occasionally lurch — a day of doubled spend and thin returns, then back to normal, with no change on your end. Because the reporting is shallow, diagnosing it is hard. On smaller budgets that volatility hurts, which is another reason low-volume accounts shouldn&apos;t lean on PMax alone.
          </p>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-5">
          <p className="font-heading font-bold text-red-900 mb-1">Reporting that hides what it&apos;s doing</p>
          <p className="text-base text-red-800/90 mb-0">
            You can&apos;t see full search terms, you can&apos;t cleanly split Shopping from Display from YouTube performance, and asset-level data is limited. Google added a bit more PMax transparency through 2026, but it&apos;s still well short of what Standard Shopping shows you. If you need to know precisely what drove a result, PMax will frustrate you.
          </p>
        </div>
      </div>

      <hr />

      <h2 id="standard-wins">Where Standard Shopping still wins</h2>
      <p>
        None of the PMax pain above means abandon Standard Shopping. In 2026 it&apos;s not a legacy format you tolerate — it&apos;s the right tool for specific, common situations.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Control and a hard CPC ceiling</p>
          <p className="text-base text-gray-600 mb-0">
            Manual or capped bidding lets you set a ceiling PMax won&apos;t give you. For margin-sensitive categories, where a couple of extra pence of CPC turns a winner into a loss, that ceiling is the difference between profit and bleeding out. This is exactly where I ran Standard to protect a 1.78x POAS. One caveat worth stating plainly: that ceiling only exists while Standard stays on manual or capped CPC. Put a target ROAS on it and you&apos;ve handed bidding to Smart Bidding and traded the ceiling away — see step 4 of the hybrid below, where I split the two modes out.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Transparency independent of assets</p>
          <p className="text-base text-gray-600 mb-0">
            You see full search terms, add negatives, and read performance cleanly by product — no creative black box in between. When you need to actually understand what&apos;s happening in the account, Standard Shopping gives you the data PMax won&apos;t.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Small catalog (under ~50 SKUs)</p>
          <p className="text-base text-gray-600 mb-0">
            With few products, PMax&apos;s automation has nothing to optimize across — not enough variety, not enough signal. Standard Shopping runs perfectly well on a lean catalog where PMax would just spin.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">New launches and low volume (under 50 conversions/mo)</p>
          <p className="text-base text-gray-600 mb-0">
            The scale I work to, and hold to for the rest of this article: <strong>under 30 conversions/mo, don&apos;t introduce PMax at all</strong> — its bidding starves for data and behaves erratically. <strong>30-50 is a grey zone</strong>: you can test PMax, but with modest expectations and a close eye on spend. <strong>Past 50</strong>, PMax earns the primary slot. That&apos;s a practitioner&apos;s rule of thumb from running these accounts, not a published Google minimum — Google doesn&apos;t state a conversion threshold for PMax. For a genuine cold start, launch Standard Shopping on manual CPC (or Maximize Clicks with a max CPC limit) so you keep a hard lid on click cost while the conversion data accumulates, then move to value-based bidding once there&apos;s enough signal to feed it.
          </p>
        </div>
      </div>

      <hr />

      <h2 id="hybrid">The hybrid that actually works</h2>
      <p>
        This is how I actually structure a scaling UK eCommerce account — not one campaign type crowned winner, but a deliberate division of labor that the October 2024 Ad Rank change finally made clean to run.
      </p>
      <p>
        Let me be careful about the evidence here, because this is where most articles overreach. An Optmyzr study of 24,702 PMax campaigns found 82% of advertisers already run PMax alongside Shopping or Search rather than PMax-only. That&apos;s an observation about what advertisers actually do — it is not proof that the split itself causes better results, and I&apos;m not going to dress it up as one. What I can stand behind is the logic of the division of labour, and the fact that it&apos;s how I run a live UK account: PMax scales the catalog and finds demand you&apos;d never bid on manually, Standard Shopping holds the ground where control is the thing protecting your margin. The hybrid isn&apos;t a compromise between two campaign types; it&apos;s two tools doing two different jobs.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>PMax as the primary — where you have volume and clean tracking</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Point PMax at the scaled catalog once you&apos;re past 50 conversions/mo and your tracking is trustworthy. This is the workhorse doing the ecosystem-wide reach and demand discovery.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Standard Shopping where you need control</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">New product launches, high-margin lines you want a CPC ceiling on, and anything where you need search-term visibility. Since October 2024 it competes on Ad Rank instead of being overridden, so it holds its ground.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Add brand terms as negatives / brand exclusions in PMax</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Stop PMax taxing your own brand. Push branded demand to a cheap dedicated brand Search campaign, and keep PMax focused on incremental, non-brand conversions. This single move fixes the most common way PMax flatters its own numbers.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Pick Standard Shopping&apos;s bidding mode deliberately, then manage the overlap</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">
                Standard Shopping can run in two modes and you can&apos;t have both at once, so decide which one your goal calls for. <strong>(a) Manual or capped CPC</strong> when the priority is a hard ceiling on click cost — margin-sensitive products where a few extra pence flips a winner into a loss. This is the mode that makes Standard Shopping worth keeping in the first place. <strong>(b) Target ROAS</strong> when the priority is having Standard chase high-intent traffic harder and you&apos;re willing to hand CPC control to Smart Bidding to get it. The moment you set a target ROAS, the CPC ceiling is gone. Choose based on what you&apos;re protecting: the click price, or the volume. If you go the target ROAS route, set Standard&apos;s target lower than PMax&apos;s so the two don&apos;t crowd the same auctions. Either way, watch Standard Shopping&apos;s impression share weekly — if PMax is starving it, that&apos;s your early-warning signal to rebalance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p>
        If you want the deeper build detail on the PMax side — asset group structure, search themes, exclusions — I break it all down in the{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-guide" } }} className="underline text-blue-700 font-medium">
          Performance Max guide
        </Link>. And the whole Shopping-vs-Search decision that sits above this one is in the{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vs-search-campaigns" } }} className="underline text-blue-700 font-medium">
          Shopping vs Search comparison
        </Link>.
      </p>
      <p>
        One thing worth saying before you pick a side: both campaign types read the same Merchant Center feed, so a weak feed caps what either of them can do. If titles, attributes and custom labels aren&apos;t sorted, no bidding strategy rescues it — that groundwork is in the{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "product-feed-serbian-ecommerce" } }} className="underline text-blue-700 font-medium">
          product feed guide
        </Link>, and the campaign-structure fundamentals sit in the{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-guide" } }} className="underline text-blue-700 font-medium">
          Google Shopping guide
        </Link>.
      </p>

      <hr />

      <h2 id="how-to-test">How to test it properly</h2>
      <p>
        Don&apos;t take my split — or anyone&apos;s — on faith and pour your whole budget into it. The correct move before you commit is a controlled test, and Google gives you the tool for it: a campaign experiment that splits traffic 50/50.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 md:p-5 my-6">
        <p className="font-semibold text-blue-900 mb-1">The 50/50 experiment</p>
        <p className="text-blue-800 text-base mb-0">
          Run a Google experiment that splits eligible traffic evenly between a Standard Shopping arm and a PMax arm over the same window, same products, same budget conditions. Give it enough time to clear the learning period and reach statistical significance — usually a few weeks on a decent-volume account — then compare not just ROAS but incremental ROAS, CPC trend, and conversion volume. Let the data pick the winner for your catalog instead of arguing from someone else&apos;s case study.
        </p>
      </div>

      <p>
        One caution: judge PMax on incremental results, not headline ROAS. If it&apos;s quietly harvesting brand conversions, its reported ROAS will look better than the real business impact. Exclude brand, run the experiment clean, and trust the delta.
      </p>

      <hr />

      <h2 id="faq">Frequently asked questions</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Will Performance Max cannibalize my brand traffic?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, if you don't stop it. Without brand exclusions, PMax spends on people already searching for your brand and reports those conversions as its own — a tax on your own name for sales that would have happened anyway through cheap brand Search. Apply brand exclusions (via a Google rep or the account-level setting) and route branded demand to a dedicated brand Search campaign, so PMax stays focused on incremental, non-brand conversions."
                }
              },
              {
                "@type": "Question",
                name: "Why did my CPC jump after switching to PMax?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It's common. When accounts migrated from Smart Shopping to PMax, many saw CPCs climb — in some cases close to double — for similar traffic. PMax bids across more surfaces (Search, Shopping, YouTube, Display, Discover) and reports less transparently, so the extra cost isn't always visible. Watch your CPC trend for the first few weeks after launch, and consider keeping high-margin or CPC-sensitive products in Standard Shopping where you can cap the bid."
                }
              },
              {
                "@type": "Question",
                name: "Can I run Standard Shopping and Performance Max at the same time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, and in 2026 it's often the stronger setup. Since October 2024, Google decides the overlapping auction by Ad Rank rather than giving PMax automatic priority, so a well-built Standard Shopping campaign actually competes instead of being overridden. An Optmyzr study of 24,702 campaigns found 82% of advertisers already run PMax alongside Shopping or Search rather than PMax-only — that is a snapshot of common practice, not proof that the split itself causes better results. The real case for running both is the division of labour: PMax scales the catalog and finds demand you would never bid on, while Standard Shopping keeps control and search-term visibility where you need them."
                }
              },
              {
                "@type": "Question",
                name: "How many conversions do I need for Performance Max?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use one scale: under 30 conversions a month, don't introduce PMax at all, because its bidding starves for signal and behaves erratically. Between 30 and 50 is a grey zone where you can test it, but with modest expectations and a close eye on spend. Past 50 conversions a month, PMax earns the primary slot. That is a practitioner's rule of thumb from running these accounts, not a published Google minimum — Google does not state a conversion threshold for PMax. Under the threshold, launch Standard Shopping on manual CPC (or Maximize Clicks with a max CPC limit) so you keep a hard lid on click cost while conversion data accumulates, then move to value-based bidding once there is enough signal to feed it."
                }
              },
              {
                "@type": "Question",
                name: "Why is Performance Max reporting so limited?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "By design. PMax hides full search terms, doesn't cleanly separate Shopping from Display or YouTube performance, and gives limited asset-level data. Google added some more transparency through 2026, but it's still well short of Standard Shopping. If you need to know exactly what drove a result, keep those products in Standard Shopping, where you get full search-term visibility and can add negatives."
                }
              },
              {
                "@type": "Question",
                name: "Standard Shopping or Performance Max for a small catalog?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standard Shopping. Under about 50 SKUs, PMax's automation doesn't have enough product variety or signal to optimize across, so it tends to spin without improving. Standard Shopping runs well on a lean catalog, gives you a CPC ceiling and search-term visibility, and is the better starting point until your catalog and conversion volume grow enough to justify PMax."
                }
              }
            ]
          })
        }}
      />

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Will Performance Max cannibalize my brand traffic?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Yes, if you don&apos;t stop it. Without brand exclusions, PMax spends on people already searching for your brand and reports those conversions as its own — a tax on your own name for sales that would have happened anyway. Apply brand exclusions and route branded demand to a dedicated brand Search campaign, so PMax stays focused on incremental, non-brand conversions.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why did my CPC jump after switching to PMax?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            It&apos;s common. Migrating from Smart Shopping to PMax, many advertisers saw CPCs climb — in some cases close to double — for similar traffic. PMax bids across more surfaces and reports less transparently, so the extra cost isn&apos;t always visible. Watch the CPC trend for the first few weeks, and keep CPC-sensitive products in Standard Shopping where you can cap the bid.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I run Standard Shopping and Performance Max at the same time?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Yes, and in 2026 it&apos;s often the stronger setup. Since October 2024, the overlapping auction is decided by Ad Rank rather than giving PMax automatic priority, so a well-built Standard Shopping campaign actually competes. An Optmyzr study of 24,702 campaigns found 82% of advertisers already run PMax alongside Shopping or Search rather than PMax-only — that&apos;s a snapshot of common practice, not proof that the split itself causes better results. The real case for running both is the division of labour: PMax scales the catalog and finds demand you&apos;d never bid on, while Standard Shopping keeps control and search-term visibility where you need them.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How many conversions do I need for Performance Max?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Use one scale: under 30 conversions a month, don&apos;t introduce PMax at all — its bidding starves for signal and behaves erratically. Between 30 and 50 is a grey zone where you can test it, but with modest expectations and a close eye on spend. Past 50, PMax earns the primary slot. That&apos;s a practitioner&apos;s rule of thumb from running these accounts, not a published Google minimum — Google doesn&apos;t state a conversion threshold for PMax. Under the threshold, launch Standard Shopping on manual CPC (or Maximize Clicks with a max CPC limit) so you keep a hard lid on click cost while conversion data accumulates, then move to value-based bidding once there&apos;s enough signal to feed it.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why is Performance Max reporting so limited?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            By design. PMax hides full search terms, doesn&apos;t cleanly separate Shopping from Display or YouTube, and gives limited asset-level data. Google added some more transparency through 2026, but it&apos;s still well short of Standard Shopping. If you need to know exactly what drove a result, keep those products in Standard Shopping.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Standard Shopping or Performance Max for a small catalog?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Standard Shopping. Under about 50 SKUs, PMax&apos;s automation doesn&apos;t have enough product variety or signal to optimize across. Standard Shopping runs well on a lean catalog, gives you a CPC ceiling and search-term visibility, and is the better starting point until your catalog and conversion volume grow enough to justify PMax.
          </div>
        </details>
      </div>

      <hr />

      {/* CTA block */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Not sure whether PMax or Standard Shopping fits your account?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          I look at your catalog, margins, conversion volume, and tracking, then tell you exactly what to run — and where a{" "}
          <Link href="/usluge/google-shopping" className="underline text-white hover:text-yellow-400">Google Shopping</Link> and{" "}
          <Link href="/usluge/google-ads-za-ecommerce" className="underline text-white hover:text-yellow-400">eCommerce Google Ads</Link> hybrid would beat either one alone.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Schedule a free consultation
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vs-search-campaigns" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping vs Search</p>
          <p className="text-xs text-gray-500 mb-0">The decision that sits above this one — when to pick each</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max Guide</p>
          <p className="text-xs text-gray-500 mb-0">Asset group structure, search themes, exclusions</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Guide — The Basics</p>
          <p className="text-xs text-gray-500 mb-0">Feed optimization, campaign structure, ROAS</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "product-feed-serbian-ecommerce" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Product Feed Guide</p>
          <p className="text-xs text-gray-500 mb-0">Required attributes, title optimization, custom labels</p>
        </Link>
      </div>
    </>
  );
}
