import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function ChatGptAdsVsGoogleAdsPostEN() {
  return (
    <>
      <p>
        I've run Google Ads accounts for over ten years, and ever since OpenAI shipped the first ChatGPT ads in February 2026, I've tracked every stage of the rollout — self-serve Ads Manager in May, oCPC in August, expansion into 31 European markets in late August. Lately clients keep asking me the same question in different words: does this change Google?
      </p>
      <p>
        The short answer is no, though not in the way the question usually arrives. ChatGPT Ads isn't a new Search — it's a fundamentally different moment inside the user's head, and that shows the second you put the numbers side by side. This piece walks through that difference, the targeting ChatGPT offers (and what it doesn't), the real numbers from independent tests, and how I'd budget a first test for a client already running Search seriously.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google captures a query the user has already formed — they know what they're looking for. The ChatGPT card sits below an answer the conversation already delivered, which is why CTR runs 0.65-1.3% against a Search average of 2-3% (5-10% on good campaigns) — that's not a broken format, it's the nature of this one. I budget it as an incremental discovery test with a research budget, never as a Search replacement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Query vs answer</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">a different buying moment</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0.65-1.3%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">ChatGPT CTR vs 2-3% Search average</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Add-on</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">not a Search replacement</p>
          </div>
        </div>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8" id="istorija-izmena">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-700 mb-2 font-semibold">🔄 Living guide — change history</p>
        <p className="text-sm text-gray-600 mb-3">This guide is updated as ChatGPT Ads evolves. What's new:</p>
        <ul className="text-sm text-gray-700 space-y-1 mb-0 list-disc pl-5">
          <li><strong>September 2026:</strong> First version — comparing the buying moment, targeting mechanism, real-world numbers, and measurement maturity between ChatGPT Ads and Google Ads.</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Quick answer
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          What's the key difference between ChatGPT Ads and Google Ads?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          <strong>Google Ads</strong> captures a query the user already has in mind — explicit intent expressed through a search. <strong>ChatGPT Ads</strong> shows up below an answer the conversation has already delivered, so it targets conversation context instead of keywords. These are two tools for two different moments, not two competitors for the same budget.
        </p>
      </div>

      <hr />
      {/* ── Table of Contents ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#moment" className="block py-1 text-base text-gray-700 hover:text-primary underline">A different buying moment</a></li>
          <li><a href="#targeting" className="block py-1 text-base text-gray-700 hover:text-primary underline">Targeting: keywords vs context</a></li>
          <li><a href="#numbers" className="block py-1 text-base text-gray-700 hover:text-primary underline">The numbers side by side</a></li>
          <li><a href="#measurement" className="block py-1 text-base text-gray-700 hover:text-primary underline">Measurement maturity</a></li>
          <li><a href="#how-to-combine" className="block py-1 text-base text-gray-700 hover:text-primary underline">How to combine them</a></li>
          <li><a href="#overview" className="block py-1 text-base text-gray-700 hover:text-primary underline">Google Ads vs ChatGPT Ads: overview</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
        </ol>
      </nav>

      <h2 id="moment">A different buying moment</h2>
      <p>
        A Search campaign catches someone the moment their question is already spelled out. Someone types "best travel camera under 500 euros" — they know what they're after, they're comparing options, and they're ready to see an ad as one of those options. The ad sits above or alongside the organic results, in the space a user is already scanning while they search for an answer.
      </p>
      <p>
        A ChatGPT conversation runs the other way. The user is thinking out loud — "what camera should I bring on this trip, nothing bulky" — and gets a finished, concrete answer before an ad even enters the picture. The card only appears <strong>below the end of that answer</strong>, clearly labeled and visually separated from the conversation. The question is already resolved in the user's head by the time the ad arrives — the card isn't filling a gap, it's tacking onto a conclusion the user has already accepted.
      </p>
      <p>
        This only applies to part of the user base: ads show exclusively to logged-in Free and Go users, not Plus/Pro/Business subscribers. ChatGPT's formats — a standard text+image card, a product carousel assembled from a feed, a dynamic CTA (Shop Now, Book Now, Learn More) the platform picks automatically — are all built to look like a continuation of the answer, not an interruption. That's a deliberate design choice, and it directly explains why click behavior differs from Search.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Why this matters for budgeting</p>
        <p className="text-blue-800 text-base mb-0">When the question is already solved before the ad appears, a click on the card is less "I need a solution" and more "show me a specific option now that I know what I want." Fewer people notice the ad at all — and that isn't a targeting problem, it's a consequence of the format.</p>
      </div>

      <hr />

      <h2 id="targeting">Targeting: keywords vs context</h2>
      <p>
        In Google Ads you build targeting on keywords and match types, layer audiences on top (RLSA, in-market, custom intent), and know exactly which query triggered which ad. That's infrastructure built over years — precise, measurable, with a history of data behind every term.
      </p>
      <p>
        ChatGPT works on a different principle. At the ad group level you write <strong>context hints</strong> — a free-text description of the topics you want the ad to appear against. These aren't exact-match keywords and don't guarantee delivery — OpenAI's system evaluates the context and intent of the <em>current</em> conversation, plus your ad's headline, text, and landing page, plus rough location and language. With personalization enabled (where available), past conversations and memory factor in too.
      </p>
      <p>What you can control beyond context hints:</p>
      <ul>
        <li><strong>Geo</strong> — country everywhere, state/DMA/ZIP in the US</li>
        <li><strong>Platform</strong> — iOS, Android, web</li>
        <li><strong>Custom audiences</strong> — upload an email/phone list (SHA-256 hashed), minimum 25,000 matched users, with inclusion/exclusion and bid multipliers</li>
      </ul>
      <p>What ChatGPT lacks that Google has:</p>
      <ul>
        <li>Demographic targeting</li>
        <li>Site-visitor retargeting (only a custom audience upload — no automatic pixel-based remarketing)</li>
        <li>Query-level reporting — you can't see which specific prompt triggered the ad</li>
      </ul>
      <p>
        Worth knowing specifically for European clients: in the EEA and Switzerland, <strong>personalized ads aren't initially available</strong>. Ad selection relies only on the current conversation, rough location, and language — no memory, no past conversations, no ad interaction history. In practice, that means context hints and creative carry almost the entire load for a European account, because there's nothing else to lean on.
      </p>

      <hr />

      <h2 id="numbers">The numbers side by side</h2>
      <p>
        This is where the market lies to itself most. I'm only using numbers that come with a denominator and a date — no anonymous "X% lift" claims that can't be checked.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Metric</th>
              <th className="py-3 px-3 font-heading font-semibold">Google Search</th>
              <th className="py-3 px-3 font-heading font-semibold">ChatGPT Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">CTR</td>
              <td className="py-3 px-3">2-3% average, 5-10% on good campaigns</td>
              <td className="py-3 px-3">0.65-1.3% (independent tests)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">CPC</td>
              <td className="py-3 px-3">Depends on niche and competition</td>
              <td className="py-3 px-3">$3-5 recommended, $1.72-$12 real-world</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Conversions</td>
              <td className="py-3 px-3">Mature ecosystem, years of optimization</td>
              <td className="py-3 px-3">Early tests, often zero before August</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The sources behind the ChatGPT column, each with a denominator: <strong>Choice OMG</strong> (CA$415, 17 days) — 0.65% CTR, CA$7.16 CPC, zero conversions. <strong>SE Ranking</strong> self-test (August 2026) — 97,000+ impressions, 1,263 clicks, 1.30% CTR, "very few signups." <strong>Opascope</strong> (~$60,000, 15 days, June) — 1.49x blended ROAS, ~$1.72 CPC, 2.35% CVR, daily ROAS swinging 0.2x-2.9x. <strong>Symphonic</strong> (~$500, August) — a $3 bid produced zero impressions; it took a ~$12 max bid to realize ~$9 CPC, still zero leads. <strong>Out of the Box</strong> ($675, July-August) — ~$3.50 CPC, zero qualified leads.
      </p>
      <p>
        OpenAI, for its part, cites anonymous numbers — "one eCommerce advertiser, 3x ROAS over 28 days" — without naming the advertiser or independent verification. I treat those as a claim, not evidence.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Why this isn't a defeat for ChatGPT Ads</p>
        <p className="text-yellow-800 text-base mb-0">Most zero-conversion reports come from campaigns launched before August 2026 — before oCPC, the OAIQ Pixel, and the Conversions API reached any real maturity. Early results probably understate the platform's current capability, but that doesn't change the fact that CTR stays structurally low because of the format, not because the tooling is young.</p>
      </div>

      <hr />

      <h2 id="measurement">Measurement maturity</h2>
      <p>
        Google Ads has measured conversions for 15-plus years, with GA4 integration, a history of oCPC and tROAS tuning, and tooling that's been through decades of iteration. When something looks off in a report, you usually know where to start looking.
      </p>
      <p>
        ChatGPT Ads has only been measuring conversions since May 2026, through OAIQ (the OpenAI Measurement Pixel) and a server-side Conversions API. There's no native GA4 integration — traffic from a ChatGPT card lands on your site as an ordinary referral, not as a distinctly tagged source. UTM parameters do pass through on click, which helps, but it doesn't substitute for a real integration.
      </p>
      <p>
        The biggest practitioner complaint is <strong>click discrepancy</strong> — Ads Manager reports meaningfully more clicks than on-site analytics can see. Named agencies (MediaPost, 8/28/2026): Cleverly 57 reported clicks against fewer than 20 verified sessions; Symphonic 53 against 35 (a 34% gap); Out of the Box verified 13% of ~140 reported clicks in July and 68% in August; one case showed 120 reported against 8 verified. The cause is <strong>undetermined</strong> — I'm not writing "fraud" or "double counting," since there's no evidence for either, only that the gap exists and appears to narrow as measurement matures.
      </p>
      <p>
        The practical takeaway: until measurement stabilizes, GA4 sessions and on-site conversions are the source of truth for a ChatGPT campaign, not the numbers inside Ads Manager.
      </p>

      <hr />

      <h2 id="how-to-combine">How to combine them</h2>
      <p>
        Search stays the foundation because it captures demand that already exists — someone articulated a need and is looking for a solution. That's where most conversions happen, and where most of the budget stays, without much debate.
      </p>
      <p>
        I treat ChatGPT Ads as a <strong>discovery test with a research budget</strong>, not a parallel channel expected to scale with Search: a small, capped budget, GA4 sessions instead of Ads Manager numbers, and a scaling decision only after a few weeks of real data.
      </p>
      <p>
        One bridge is worth calling out specifically: ChatGPT has no site-visitor retargeting, only a custom-audience upload built from your existing list. That means a visitor who clicks a ChatGPT card and leaves without converting is <strong>lost from the ChatGPT ecosystem</strong> — there's no ChatGPT remarketing pulling them back in, because that function doesn't exist. You catch them with your own <GlossaryLink slug="remarketing">remarketing</GlossaryLink> on the Google side — a GA4 audience, a Google Ads remarketing list, a standard setup you likely already have. More on how those lists get built is in the <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-guide" } }} className="underline">remarketing guide</Link>.
      </p>

      <hr />

      <h2 id="overview">Google Ads vs ChatGPT Ads: overview</h2>
      <p>Compressed into one table, here's how the two channels differ on the dimensions that actually matter for a budget decision.</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Dimension</th>
              <th className="py-3 px-3 font-heading font-semibold">Google Ads (Search)</th>
              <th className="py-3 px-3 font-heading font-semibold">ChatGPT Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">User's moment</td>
              <td className="py-3 px-3">Formed intent, active search</td>
              <td className="py-3 px-3">Thinking out loud, question already solved by the time the ad lands</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Targeting mechanism</td>
              <td className="py-3 px-3">Keywords, match types, audiences</td>
              <td className="py-3 px-3">Context hints, geo, custom audiences</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Format</td>
              <td className="py-3 px-3">Text ad above/alongside results</td>
              <td className="py-3 px-3">Card below a finished answer</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Measurement maturity</td>
              <td className="py-3 px-3">15+ years, GA4 integration</td>
              <td className="py-3 px-3">Since May 2026, no GA4 integration</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Competition for attention</td>
              <td className="py-3 px-3">Shares space with organic results</td>
              <td className="py-3 px-3">One or more ad units per answer, no SERP</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Best used for</td>
              <td className="py-3 px-3">Closing demand that already exists</td>
              <td className="py-3 px-3">Incremental discovery test alongside Search</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="faq">Frequently asked questions</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Do ChatGPT Ads replace Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            No. Google Search captures demand that already exists, and for most accounts I run, it's still the channel carrying the bulk of conversions. ChatGPT Ads targets a completely different moment — a user whose question has already been resolved by a finished answer. I treat it as an addition, not a replacement, and I don't touch the Search budget until a ChatGPT test proves itself.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much budget for a first test?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            I treat a first test as a research cost, not a campaign with a guaranteed return — small enough that losing it doesn't hurt, large enough for a few weeks of click and session data. There's no historical minimum spend anymore (removed May 2026), but a meaningful conclusion still needs room for the algorithm to get through a learning phase.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why is the CTR so much lower than Search?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Because the ad arrives after the answer, not before it. On Search, the ad is part of finding a solution — the user sees it while still deciding. On ChatGPT, the answer is already delivered, the question is closed, and a card below it asks for extra attention that isn't necessary to get what the user came for. Independent tests converge on 0.65-1.3% across multiple sources — it's not a campaign setup mistake.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I run both channels at the same time?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Yes, and it's a common setup for accounts that have already gone through a solid Search phase. The precondition is GA4 tracking sessions independently of Ads Manager reporting — given the click discrepancy described above, ChatGPT's own numbers alone aren't a sufficient signal for a budget decision. If GA4 isn't clean, fix that first, on either channel.
          </div>
        </details>
      </div>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Thinking about ChatGPT Ads alongside an existing Google account?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">I help clients set up a first test with clean measurement — GA4 as the source of truth, budget treated as research, not a promise. Book a free consultation to see if your account is ready.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Book a free consultation</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">ChatGPT Ads: The Complete Guide</p>
          <p className="text-xs text-gray-500 mb-0">A full walkthrough of formats, targeting, pricing, and ad policy.</p>
        </Link>
        <Link href="/usluge/chatgpt-ads" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">ChatGPT Ads service</p>
          <p className="text-xs text-gray-500 mb-0">How I run a first test and what's included.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-vs-meta-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads vs Meta Ads</p>
          <p className="text-xs text-gray-500 mb-0">The same comparison approach, applied to Search and Meta.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing guide</p>
          <p className="text-xs text-gray-500 mb-0">How to catch visitors who leave without converting, including ones from ChatGPT.</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: September 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Author: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
