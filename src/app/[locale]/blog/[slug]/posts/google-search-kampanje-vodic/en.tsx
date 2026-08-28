import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { CheckCircle, XCircle } from "lucide-react";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function GoogleSearchCampaignsGuidePost() {
  return (
    <>
      <p>
        Search is the oldest format in Google Ads — and still the most reliable. Someone types a query, you show up right when they're looking for exactly that. No guessing intent like Display, no waiting for the algorithm to learn who your audience is like PMax.
      </p>
      <p>
        Everything I build for a client starts here. Foundation, then measurement, then scaling — Search is that foundation. If Search doesn't work, nothing built on top of it (Shopping, PMax, remarketing) will work better. This guide is my complete approach to Search campaigns in 2026 — including the September change that rewrites the rules for anyone running DSA or campaign-level broad match.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">Search campaigns capture existing demand — people already searching for what you sell. It's the foundation of every account, and the place to first verify measurement actually works. Starting September 2026, AI Max upgrades campaigns running DSA, automatically created assets, and campaign-level broad match — with no action on your part. Prepare before it happens, not after.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">more conversions with full AI Max suite*</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">minimum spend for AI Max</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Sep</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">2026 — migration deadline</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1–2</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">weeks to first results</p>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-4 mb-0">*Per Google's own data: an average 7% increase in conversions or conversion value at a similar CPA/ROAS, with the full AI Max suite vs. search term matching alone.</p>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8" id="istorija-izmena">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-700 mb-2 font-semibold">🔄 Living guide — change history</p>
        <p className="text-sm text-gray-600 mb-3">This guide is updated every month. What changed:</p>
        <ul className="text-sm text-gray-700 space-y-1 mb-0 list-disc pl-5">
          <li><strong>August 2026:</strong> First version: the AI Max suite, the September migration (DSA, ACA, broad match), intent-and-margin structure.</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Quick answer
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          What is a Google Search campaign?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          A <strong>Search campaign</strong> shows text ads to people actively searching specific terms on Google. Unlike Shopping, PMax, or Display, you're targeting <strong>explicit intent</strong> — someone has already typed what they're looking for. That's why Search is the most predictable and measurable channel in Google Ads, and why I recommend it as the first campaign for any new account.
        </p>
      </div>

      <hr />
      {/* ── Table of Contents ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#what-is-search-today" className="block py-1 text-base text-gray-700 hover:text-primary underline">What is a Search campaign today — and why it's still the foundation</a></li>
          <li><a href="#ai-max-for-search-full-suite" className="block py-1 text-base text-gray-700 hover:text-primary underline">AI Max for Search — the full suite</a></li>
          <li><a href="#september-migration-2026" className="block py-1 text-base text-gray-700 hover:text-primary underline">The September 2026 migration</a></li>
          <li><a href="#match-types-2026" className="block py-1 text-base text-gray-700 hover:text-primary underline">Match types in 2026</a></li>
          <li><a href="#campaign-structure" className="block py-1 text-base text-gray-700 hover:text-primary underline">Campaign structure — intent and margin</a></li>
          <li><a href="#negative-keywords-system" className="block py-1 text-base text-gray-700 hover:text-primary underline">Negative keywords — a system, not a list</a></li>
          <li><a href="#writing-ads-rsa" className="block py-1 text-base text-gray-700 hover:text-primary underline">Writing ads (RSA)</a></li>
          <li><a href="#bidding-strategy" className="block py-1 text-base text-gray-700 hover:text-primary underline">Bidding strategy</a></li>
          <li><a href="#measure-before-scaling" className="block py-1 text-base text-gray-700 hover:text-primary underline">Measure before you scale</a></li>
          <li><a href="#frequently-asked-questions" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
        </ol>
      </nav>

      <h2 id="what-is-search-today">What is a Search campaign today — and why it's still the foundation</h2>
      <p>
        Search has existed since the start of Google Ads and has outlived every platform shift — Quality Score, Smart Bidding, PMax. The reason is simple: as long as people type queries into Google, Search captures the moment closest to a buying decision.
      </p>
      <p>
        The order I build every account in never changes: <strong>foundation, then measurement, then scaling.</strong> Search is the foundation. Before you think about Shopping, PMax, or remarketing, Search tells you two things nothing else does as cleanly — whether people are actually searching for what you sell, and whether your measurement even works.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">1</span>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Foundation</h3>
          <p className="text-base text-gray-600 mb-0">A Search campaign with clear intent. This is where you find out whether a market even exists for what you sell.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">2</span>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Measurement</h3>
          <p className="text-base text-gray-600 mb-0">Conversion tracking gets verified on Search first, because volume is predictable and it's easy to check whether the numbers match reality.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">3</span>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Scaling</h3>
          <p className="text-base text-gray-600 mb-0">Only once Search converts reliably do I add Shopping, PMax, or remarketing on top of it. Never the other order.</p>
        </div>
      </div>
      <p>
        A mistake I see often: a business jumps straight to PMax because it's "more modern" or "more automated," without a single Search campaign to show whether demand even exists. The result is nobody knows why the account isn't working — algorithm, product, or market. Search gives you that answer first, fast and cheap.
      </p>

      <hr />

      <h2 id="ai-max-for-search-full-suite">AI Max for Search — the full suite</h2>
      <figure className="my-8">
        <Image src="/blog/search-ai-max.webp" alt="A classic campaign and the same campaign with AI Max features enabled" width={1200} height={896} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-sm text-gray-500 text-center mt-2">AI Max: the same campaign with a new layer of features</figcaption>
      </figure>
      <p>
        AI Max isn't one feature — it's a bundle of layers that turn on together at the campaign level. Here's what you actually get when you enable it.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Search themes</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">Instead of (or alongside) keywords, you give Google themes — a broader description of what you sell and to whom. The algorithm finds the specific queries that match, including variants you wouldn't have guessed manually. Search themes work alongside your existing keywords — they don't automatically replace them.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">URL expansion</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">Google picks which page on your site a click lands on — not necessarily the final URL you set. The idea is the algorithm finds the most relevant page for a given query. Same logic as URL expansion in PMax, and the recommendation is the same — check what's actually happening, don't just flip it on.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">AI-generated copy</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">AI Max can generate headlines and descriptions in real time, tailored to the specific query someone typed. Text Guidelines give you control over that — which phrases, prices, and claims the AI is allowed to use, and which it isn't. Without guidelines, AI writes copy that's technically accurate but sometimes off-brand.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">AI Brief (Gemini)</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">Instead of the AI guessing who you are, you describe your business, messaging, and audience in your own words — through a Gemini conversation in the interface. The more precise the brief (what you sell, who buys, what sets you apart from competitors), the closer AI Max copy gets to your actual brand, instead of a generic version of it.</p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">An official data point, not a promise</p>
        <p className="text-blue-800 text-base mb-0">Per Google's own data, advertisers using the full AI Max suite see an average <strong>7% increase in conversions or conversion value</strong> at a similar CPA or ROAS, compared to campaigns relying on standard search term matching alone. This is available globally to all advertisers, with no spend minimum. I'm underlining average — your result depends on the quality of the search themes, guidelines, and brief you provide, not on simply flipping the switch.</p>
      </div>

      <hr />


      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-slate-900 mb-2">What the data outside Google says</p>
        <p className="text-sm text-gray-700 mb-0">Google&#39;s showcase examples are impressive (L&#39;Oréal: double the conversion rate at a 31% lower cost per conversion). But an independent analysis by Mike Ryan of Smarter Ecommerce across 250+ retail campaigns shows a more sober picture: a median +13% revenue lift with a median +16% higher CPA. Translation: switch AI Max on, but watch your own CPA weekly — the showcase is not a guarantee.</p>
      </div>

      <h2 id="september-migration-2026">⚠️ The September 2026 migration</h2>
      <figure className="my-8">
        <Image src="/blog/search-migracija.webp" alt="Three legacy campaigns consolidating into one new AI Max system" width={1200} height={896} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-sm text-gray-500 text-center mt-2">September 2026: DSA, ACA and broad match campaigns move into AI Max</figcaption>
      </figure>
      <p>
        This is the part most people miss — and the part that will hit hardest. Starting September 2026, Google automatically upgrades certain campaigns to AI Max — without you asking for it. The upgrade doesn't ask permission, it just happens, and every migration wraps up by the end of September.
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Who gets auto-upgraded</p>
        <ul className="text-base text-yellow-900 mb-0">
          <li><strong>Dynamic Search Ads (DSA)</strong> campaigns</li>
          <li>Campaigns with <strong>automatically created assets (ACA)</strong> enabled</li>
          <li>Campaigns running <strong>campaign-level broad match</strong></li>
        </ul>
      </div>

      <p>
        If you're running any of these three configurations, the campaign moves to AI Max this September, whether you asked for it or not. Practical consequence: URL expansion, search themes, and AI-generated copy get turned on for a campaign that was possibly never set up for that kind of automation.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-base mb-3">Checklist before Google flips the switch</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Final URLs</strong> <span className="text-gray-500">— check they're correct and lead where you actually want, since URL expansion changes that logic.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Exclusions</strong> <span className="text-gray-500">— review page feed exclusions and URL exclusions before migration, not after.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Brand lists</strong> <span className="text-gray-500">— set brand exclusions/inclusions if you don't want AI Max bidding on (or avoiding) specific brand terms.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Budgets</strong> <span className="text-gray-500">— AI Max widens reach, which can change spend pacing. Watch it closely for the first weeks after migration.</span></div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">What to do now</p>
        <p className="text-blue-800 text-base mb-0">Don't wait until September. If you're running DSA, ACA, or campaign-level broad match, work through the checklist above now — while you're still the one choosing the settings, not Google. If you'd rather keep control, you can manually move from DSA to a standard Search campaign with search themes before the upgrade lands on its own.</p>
      </div>

      <hr />

      <h2 id="match-types-2026">Match types in 2026</h2>
      <p>
        <GlossaryLink slug="match-types">Match types</GlossaryLink> still exist, but the lines between them are thinner than a few years ago — especially now that AI Max is part of the picture.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Match type</th>
              <th className="py-3 px-3 font-heading font-semibold">What it does today</th>
              <th className="py-3 px-3 font-heading font-semibold">When to use it</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium"><GlossaryLink slug="exact-match">Exact match</GlossaryLink></td>
              <td className="py-3 px-3">Tightest control, but still covers close variants and same intent, not just the literal phrase.</td>
              <td className="py-3 px-3">High-value keywords where you want maximum precision.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium"><GlossaryLink slug="phrase-match">Phrase match</GlossaryLink></td>
              <td className="py-3 px-3">Middle ground — matches queries that carry the phrase's meaning, word order is more flexible.</td>
              <td className="py-3 px-3">Most campaigns — a solid balance of reach and relevance.</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium"><GlossaryLink slug="broad-match">Broad match</GlossaryLink></td>
              <td className="py-3 px-3">Widest reach, leans most heavily on signals and Smart Bidding. At campaign level — a candidate for automatic AI Max upgrade.</td>
              <td className="py-3 px-3">With strong Smart Bidding, enough conversion data, and regular search term review.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Where AI Max actually changes the game: with broad match, the line between "match type" and "search themes" blurs. Both lean on signals, not literal text. Practical consequence — if you're already running wide-open broad match without close monitoring, adding AI Max on top increases reach, but also increases the need for disciplined review of what's actually showing.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">My rule</p>
        <p className="text-yellow-800 text-base mb-0">I don't pick a match type because it's trendy — I pick it based on how much data I have and how closely I can monitor the account. Fewer conversions, less time to monitor — lean toward exact/phrase. Steady volume and a real weekly search term review — wider broad match makes sense.</p>
      </div>

      <hr />

      <h2 id="campaign-structure">Campaign structure — intent and margin</h2>
      <figure className="my-8">
        <Image src="/blog/search-struktura.webp" alt="Four campaigns with different budget levels by intent and margin" width={1200} height={896} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-sm text-gray-500 text-center mt-2">Intent and margin decide how much budget each campaign gets</figcaption>
      </figure>
      <p>
        The most common mistake I see on new accounts: every keyword in one campaign, one budget, one goal. That works while the account is small. The moment you try to scale, you lose control over where the money actually goes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><XCircle size={14} strokeWidth={1.5} className="text-red-500" /> Weak approach</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Everything in one campaign</h3>
          <p className="text-base text-gray-600 mb-0">Brand terms, generic terms, and high-margin terms all mixed together. You can't push more budget to a higher-margin product because it's all in the same campaign with the same bidding goal.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><CheckCircle size={14} strokeWidth={1.5} className="text-green-600" /> My approach</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Segment by intent and margin</h3>
          <p className="text-base text-gray-600 mb-0">Separate campaigns based on how close a query is to a purchase, and how much margin the product or service behind it carries. Budget and target CPA/ROAS are set per segment, not globally.</p>
        </div>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Segment</th>
              <th className="py-3 px-3 font-heading font-semibold">Example</th>
              <th className="py-3 px-3 font-heading font-semibold">Why separate</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Brand</td>
              <td className="py-3 px-3">"[company name]", "[company name] reviews"</td>
              <td className="py-3 px-3">Lowest CPA, highest conversion rate. Shouldn't be judged by the same yardstick as non-brand.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Non-brand, high intent</td>
              <td className="py-3 px-3">"buy [product]", "[product] price"</td>
              <td className="py-3 px-3">Close to purchase, deserves a more aggressive bid.</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Non-brand, high margin</td>
              <td className="py-3 px-3">Products or services with the biggest profit margin</td>
              <td className="py-3 px-3">Deserve a higher target CPA because you carry more profit per conversion.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Non-brand, researching</td>
              <td className="py-3 px-3">"how to choose [category]", informational queries</td>
              <td className="py-3 px-3">Longer path to conversion — a different goal and budget than "buy now" intent.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        This isn't a recommendation to run 20 campaigns for a small account. For a smaller budget, 3–4 segments are enough: brand, non-brand high intent, non-brand high margin, and maybe a research layer. As the account grows, segments split further.
      </p>

      <hr />

      <h2 id="negative-keywords-system">Negative keywords — a system, not a list</h2>
      <p>
        <GlossaryLink slug="negative-keywords">Negative keywords</GlossaryLink> often get treated as a one-time task — build a list at launch, forget it. That's a mistake, especially with broad match and AI Max search themes widening reach further than you'd manually catch.
      </p>
      <p>
        Treat it as a system: regular search term review, not a one-time list at launch.
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Weekly</strong> <span className="text-gray-500">— review the search terms report, add obvious misses (jobs, free, competitors, homework help) to the negative list.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Monthly</strong> <span className="text-gray-500">— deeper review, hunting for patterns (not just individual terms but whole categories of query that need broader exclusion).</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>After any major change</strong> <span className="text-gray-500">— turning on broad match, AI Max search themes, or URL expansion means the review happens right away, not next month.</span></div>
          </div>
        </div>
      </div>
      <p>
        For a detailed breakdown of negative list categories and account-level vs. campaign-level structure, see the <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="underline">negative keywords guide</Link>.
      </p>

      <hr />

      <h2 id="writing-ads-rsa">Writing ads (RSA)</h2>
      <p>
        Ads in Search campaigns are <GlossaryLink slug="rsa">Responsive Search Ads</GlossaryLink> — you provide multiple headlines and descriptions, Google tests the combinations. AI Max can generate additional variants based on the query, but you still write the backbone.
      </p>
      <p>
        This is its own discipline with its own rules — how many headlines is optimal, how to avoid every headline saying the same thing in different words, how to use pinning without choking off testing. I haven't repeated it here because a full guide already exists: <Link href={{ pathname: "/blog/[slug]", params: { slug: "rsa-vodic" } }} className="underline">RSA guide — how to write ads that convert</Link>.
      </p>

      <hr />

      <h2 id="bidding-strategy">Bidding strategy</h2>
      <p>
        Search campaigns today almost always run some form of <GlossaryLink slug="smart-bidding">Smart Bidding</GlossaryLink> — Maximize Conversions, Target CPA, or Target ROAS, depending on how much data you have and what you're optimizing for. Manual CPC is rarely the right call today, outside of specific low-conversion-volume situations.
      </p>
      <p>
        Which bidding strategy to pick and how to set it up depends on the account's stage — how many conversions you're getting monthly, whether you're tracking order value or just conversion count, and how fast you're changing targets. Full breakdown: <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-vodic" } }} className="underline">Smart Bidding guide</Link>.
      </p>

      <hr />

      <h2 id="measure-before-scaling">Measure before you scale</h2>
      <p>
        I repeat this in every guide I write because it's the most common cause of accounts that fail: scaling before measurement is verified. A Search campaign that "looks good" in the Google Ads interface, with broken measurement underneath, pushes you toward the wrong decisions — you raise budget on a campaign that in reality isn't converting anywhere near what the report claims.
      </p>
      <p>
        Before raising budget or switching to Target ROAS, check whether the conversions Google Ads reports actually match real sales or leads. The <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="underline">conversion tracking guide</Link> covers exactly that process — data-driven attribution, GA4/GTM setup, and how to verify the numbers match reality before you raise the stakes.
      </p>

      <hr />

      <h2 id="frequently-asked-questions">Frequently asked questions</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much does managing Google Search campaigns cost?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            As a standalone channel, Search budget starts at €500/month. As part of full account management (Search + Shopping/PMax + remarketing), management fees start at €700/month. A one-off consultation is €150/hour — useful if you want a second opinion on an existing campaign without handing over management. The exact price depends on account size and complexity — you get it after I look at the account, not before.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Do I need an agency for Search campaigns?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Depends on your budget and time. Search is the most accessible channel to run yourself — the structure is clearer than PMax, and the interface gives you plenty of visibility (search terms, Quality Score, Auction Insights). If you have time for a weekly review and a smaller budget, you can start solo. An agency or consultant makes sense once budget grows, once AI Max and broad match need closer monitoring, or when you simply don't have time to do it consistently every week.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What is AI Max, and do I have to use it?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            AI Max is a bundle of features for Search campaigns — search themes, URL expansion, AI-generated copy, and an AI Brief through Gemini. It isn't mandatory on its own, but if you're running DSA, automatically created assets, or campaign-level broad match, Google automatically upgrades you to it starting September 2026, without you asking. If that's not what you want, you need to change the campaign configuration before the upgrade lands, not after.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How long until a Search campaign starts working?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            First clicks and data arrive within a few days. First conversions depend on query volume and budget — for some accounts that's within a week, for others (low search volume, niche product) it takes longer. Smart Bidding needs a minimum of 2–4 weeks and enough conversions to start optimizing reliably. I can't tell you upfront the exact date your account will "start working" — that depends on category, competition, and whether measurement was set up correctly from day one. What I can say: if after 6–8 weeks with correct measurement and a realistic budget there are still no conversions, the problem isn't patience — it's something in the structure, the offer, or the tracking.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Broad match or phrase match in 2026?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            There's no universal answer — it depends on the account's stage. If you're just starting out with little conversion data, phrase or exact give you more control while you build history. If you have steady conversion volume, a strong Smart Bidding target, and — most importantly — the discipline to review search terms regularly, broad match can bring extra reach that phrase/exact miss. Broad match without regular review is the fastest way to burn budget on irrelevant queries, especially once AI Max is layered on top.
          </div>
        </details>
      </div>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Setting up a Search campaign, or getting ready for the September migration?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">I help businesses launch Search campaigns with clean structure, real measurement, and an account prepared before the AI Max upgrade lands automatically. Book a free consultation and we'll go through your account.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Book a free consultation</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/search-kampanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Search campaign services</p>
          <p className="text-xs text-gray-500 mb-0">Professional Search campaign management, from €500/mo</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "rsa-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">RSA guide</p>
          <p className="text-xs text-gray-500 mb-0">How to write Responsive Search Ads that convert.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Smart Bidding guide</p>
          <p className="text-xs text-gray-500 mb-0">Target CPA, Target ROAS, and Maximize Conversions — when to use what.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion tracking guide</p>
          <p className="text-xs text-gray-500 mb-0">How to set up and verify measurement before scaling budget.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negative keywords guide</p>
          <p className="text-xs text-gray-500 mb-0">A system for cutting wasted spend, not a one-time list.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max guide</p>
          <p className="text-xs text-gray-500 mb-0">The next step once Search is stable — scaling across all Google networks.</p>
        </Link>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Search is still the foundation. AI Max changes how much work the algorithm does for you — it doesn't change the fact that the foundation has to be clean before you scale. Structure, negative keywords, and measurement — those are still your calls to make, not the algorithm's.</p>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: August 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Author: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
