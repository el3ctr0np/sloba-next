import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { CheckCircle, XCircle } from "lucide-react";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function DemandGenGuideEN() {
  return (
    <>
      <p>
        <GlossaryLink slug="demand-gen">Demand Gen</GlossaryLink> is the successor to Discovery campaigns. It doesn't target people who are searching for something — it targets people who are scrolling. The ad shows up inside a feed, between content the user is already watching, and it has to look like it belongs there or it gets skipped in half a second.
      </p>
      <p>
        I've run Demand Gen campaigns on a handful of accounts and my position is clear: it's a good tool for the right situation, and a poor choice when it's used to patch something that's broken elsewhere. This guide covers where Demand Gen actually shows up, what Google changed in 2026, who it makes sense for, how to measure it honestly, and how to set up the first campaign.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">Demand Gen shows visually rich ads on YouTube (including Shorts), the Discover feed, and Gmail to people who aren't yet actively searching for your product. It makes sense for eCommerce with a visual product and a budget of roughly EUR 1,000+ a month for that channel. It doesn't make sense as a replacement for Search on small lead-gen budgets — Demand Gen is a layer on top of a foundation that already works, not a foundation on its own.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">main placements</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">~EUR 1,000+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">monthly, rough threshold</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Visual</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">creative carries the campaign</p>
          </div>
        </div>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8" id="istorija-izmena">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-700 mb-2 font-semibold">🔄 Living guide — change history</p>
        <p className="text-sm text-gray-600 mb-3">This guide is updated every month. What changed:</p>
        <ul className="text-sm text-gray-700 space-y-1 mb-0 list-disc pl-5">
          <li><strong>August 2026:</strong> First version: what Demand Gen is, the 2026 updates (view-through optimization, incrementality), comparison with PMax and YouTube campaigns.</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Quick answer
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          What is a Demand Gen campaign?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          <strong>Demand Gen</strong> is a Google Ads campaign that shows visually rich ads across <strong>YouTube (and the Shorts format), the Discover feed, and Gmail</strong>. The goal isn't to capture existing demand like Search does — it's to create new demand. The user isn't searching for the product at that moment, but the content they're watching signals what they might need.
        </p>
      </div>

      <hr />
      {/* ── Table of Contents ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#what-is-demand-gen" className="block py-1 text-base text-gray-700 hover:text-primary underline">What is Demand Gen</a></li>
          <li><a href="#whats-new-2026" className="block py-1 text-base text-gray-700 hover:text-primary underline">What's new in Demand Gen (2026)</a></li>
          <li><a href="#who-its-for" className="block py-1 text-base text-gray-700 hover:text-primary underline">Who Demand Gen makes sense for, who it doesn't</a></li>
          <li><a href="#creative" className="block py-1 text-base text-gray-700 hover:text-primary underline">Creative — formats and requirements</a></li>
          <li><a href="#demand-gen-vs-pmax-vs-youtube" className="block py-1 text-base text-gray-700 hover:text-primary underline">Demand Gen vs PMax vs YouTube campaigns</a></li>
          <li><a href="#audiences" className="block py-1 text-base text-gray-700 hover:text-primary underline">Audiences: rollout order</a></li>
          <li><a href="#measurement" className="block py-1 text-base text-gray-700 hover:text-primary underline">Measurement: view-through and incrementality</a></li>
          <li><a href="#setup" className="block py-1 text-base text-gray-700 hover:text-primary underline">Setup step by step</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
        </ol>
      </nav>

      <h2 id="what-is-demand-gen">What is Demand Gen</h2>
      <p>
        Demand Gen is the successor to Discovery campaigns — Google renamed it in 2023 and has kept building on it since. If you ran Discovery Ads before, the principle is familiar. The terminology changed; the core format and logic didn't.
      </p>
      <p>Where Demand Gen shows up:</p>
      <ul>
        <li><strong>YouTube feed and In-Stream</strong> — including YouTube Shorts, where a large share of younger audiences now spend their attention</li>
        <li><strong>Discover feed</strong> — the personal feed on Android phones and inside the Google app, similar in feel to an Instagram or TikTok feed</li>
        <li><strong>Gmail</strong> — the Promotions and Social tabs, a native ad sitting among emails</li>
      </ul>
      <p>
        The common thread is the feed format. The user is scrolling through content they chose or that an algorithm recommended, not through search results. The ad has to fit that rhythm — if it looks like a billboard, users skip it in half a second.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Why this exists at all</p>
        <p className="text-blue-800 text-base mb-0">A Search campaign captures demand that already exists — someone typed a query, they already know what they want. Demand Gen works the other way: the demand isn't explicit yet, but someone watching content about home renovation is more likely to be interested in furniture than a random person is. What a user consumes signals a need before they've put it into a search query.</p>
      </div>

      <hr />

      <h2 id="whats-new-2026">What's new in Demand Gen (2026)</h2>
      <p>
        Google shipped a package of Demand Gen changes in June 2026 (internally called the "Demand Gen Drop"), with an additional update in April. Here's what was actually announced and what it means in practice — no guessing beyond what's confirmed.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">View-through conversion optimization for YouTube</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">An opt-in option — the campaign can now bid toward conversions that happen after someone watches a video, without a click on the ad. In practice: this changes what the algorithm treats as "success," so understand what a view-through conversion actually represents before you turn it on. More in the measurement section below.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Support inside Commerce Media Suite</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">Demand Gen now has support within Google's Commerce Media Suite. In practice: retailers already using that part of the Google ecosystem for their ad inventory can now fold Demand Gen into the same workflow instead of running it as a fully separate system.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">A/B testing framework for incrementality</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">A new framework measures how much Demand Gen actually ADDS to your existing campaign mix, not just how many conversions it credits itself with. In practice: this is the most important item on the list. For the first time there's a built-in way to check whether Demand Gen is bringing in new customers or just soaking up conversions that would have happened anyway.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Real-time budget allocation across placements</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">Google improved how budget is split in real time between YouTube, Discover, and Gmail within a single campaign. In practice: less manual tuning needed to stop the whole budget from draining into one placement, though it's still worth watching where the money actually goes.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Audience expansion controls and lookalike refinements</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">More control over how far Google is allowed to "expand" your audience beyond what you defined, plus refined lookalike lists. In practice: fewer situations where a campaign starts spending on a completely irrelevant audience in the name of "reach expansion."</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">AI image and video enhancements</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">Automatic creative variants — Google generates additional versions from your images and video for testing. In practice: useful for testing speed, but it doesn't fix a weak starting asset. More on that in the creative section below.</p>
      </div>

      <hr />

      <h2 id="who-its-for">Who Demand Gen makes sense for, who it doesn't</h2>
      <p>
        This is where I see the most misguided decisions. People launch Demand Gen because it's new and has AI in the pitch, not because it solves the actual problem they have. Here's my take, directly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><CheckCircle size={14} strokeWidth={1.5} className="text-green-600" /> When YES</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">eCommerce with a visual product</h3>
          <p className="text-base text-gray-600 mb-0">The product sells on sight — clothing, furniture, cosmetics, home decor, food. A photo or video carries the message without needing text. That's exactly what a feed format rewards.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><CheckCircle size={14} strokeWidth={1.5} className="text-green-600" /> When YES</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Budget of roughly EUR 1,000/month or more for the channel</h3>
          <p className="text-base text-gray-600 mb-0">This is the rough threshold I use, not a guarantee. Below that, the campaign rarely gets enough room to learn what works across three different placements at once.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><XCircle size={14} strokeWidth={1.5} className="text-red-500" /> When NO</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Small lead-gen budget, Search isn't maxed out yet</h3>
          <p className="text-base text-gray-600 mb-0">If your Search campaign still has room to grow for your keywords — more budget, better term coverage, better Quality Score — that's where the money is better spent. Demand Gen is a layer on top of the foundation, not a replacement for it.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><XCircle size={14} strokeWidth={1.5} className="text-red-500" /> When NO</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">No one to produce creative</h3>
          <p className="text-base text-gray-600 mb-0">If you have neither the budget nor the time for photography or video, and plan to reuse three old product shots — the campaign won't work. This isn't a format where text carries the message.</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">My take</p>
        <p className="text-yellow-800 text-base mb-0">Demand Gen builds on what's already working. It doesn't fix what isn't. If Search is converting poorly, the problem is probably the offer, the landing page, or the tracking — not that you haven't tried a new channel yet. Fix the foundation first, then expand.</p>
      </div>

      <hr />


      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-slate-900 mb-2">The number that keeps you honest</p>
        <p className="text-sm text-gray-700 mb-0">An independent analysis across thousands of accounts found that 61% of advertisers reported neutral or negative results after switching from Discovery or Meta campaigns to Demand Gen. That&#39;s not a reason to skip it — it&#39;s a reason to enter with clean measurement, enough budget, and the realistic expectations from this guide.</p>
      </div>

      <h2 id="creative">Creative — formats and requirements</h2>
      <p>
        Demand Gen is a campaign where creative carries the result, not the bidding strategy. That's the difference versus Search, where text and keyword relevance do most of the heavy lifting.
      </p>
      <p><strong>Formats Demand Gen combines:</strong></p>
      <ul>
        <li><strong>Single image ads</strong> — one image, short text, shown in Discover and Gmail</li>
        <li><strong>Carousel ads</strong> — multiple cards the user swipes through, good for multiple products or a step-by-step message</li>
        <li><strong>Video ads</strong> — for YouTube feed, In-Stream, and Shorts; vertical format is required for Shorts</li>
      </ul>
      <p><strong>Technical requirements worth respecting:</strong></p>
      <ul>
        <li>Images in multiple ratios — square (1:1), landscape (1.91:1), and portrait (4:5) — so the placement gets the right fit</li>
        <li>Vertical video (9:16) at minimum for Shorts, horizontal (16:9) for the standard YouTube feed</li>
        <li>At least a few headline and description variants per asset group, not a single version</li>
        <li>A logo in both square and landscape formats for brand recognition inside the feed</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">An honest take on AI enhancements</p>
        <p className="text-blue-800 text-base mb-0">AI image and video enhancements produce variants faster than you could by hand. That's a real advantage for testing speed. But AI doesn't turn weak source creative into strong creative — it just multiplies what you feed it. If the original photo is poorly lit or the product looks cheap, you get ten AI variants of the same problem, not a fix. Investing in a decent starting photo or video still isn't optional.</p>
      </div>

      <hr />


      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-slate-900 mb-2">A Google data point worth acting on</p>
        <p className="text-sm text-gray-700 mb-0">Campaigns combining video and image assets together drive about 20% more conversions at an equivalent CPA than video-only campaigns (Google&#39;s data). For eCommerce orientation, industry benchmarks (Store Growers) after the learning period: CTR 0.5-2%, CPC $0.30-1.50, ROAS 2-5x.</p>
      </div>

      <h2 id="demand-gen-vs-pmax-vs-youtube">Demand Gen vs PMax vs YouTube campaigns</h2>
      <figure className="my-8">
        <Image src="/blog/demand-gen-vs.webp" alt="Three different campaign types shown as three panels" width={1200} height={896} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-sm text-gray-500 text-center mt-2">Three tools, three different jobs: Demand Gen, PMax and YouTube</figcaption>
      </figure>
      <p>
        These three get confused constantly because all three can appear on YouTube. The difference is who holds control and what the goal is.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Aspect</th>
              <th className="py-3 px-3 font-heading font-semibold"><GlossaryLink slug="pmax">Performance Max</GlossaryLink></th>
              <th className="py-3 px-3 font-heading font-semibold">Demand Gen</th>
              <th className="py-3 px-3 font-heading font-semibold">YouTube / Video campaigns</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Goal</td>
              <td className="py-3 px-3">Conversions, all channels at once</td>
              <td className="py-3 px-3">Visual demand, prospecting</td>
              <td className="py-3 px-3">Reach and brand awareness</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3">Channels</td>
              <td className="py-3 px-3">Search, Shopping, Display, YouTube, Gmail, Discover, Maps</td>
              <td className="py-3 px-3">YouTube, Discover, Gmail</td>
              <td className="py-3 px-3">YouTube only</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Placement control</td>
              <td className="py-3 px-3"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Low</span></td>
              <td className="py-3 px-3"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Medium to high</span></td>
              <td className="py-3 px-3"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">High</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3">Includes Search</td>
              <td className="py-3 px-3">Yes</td>
              <td className="py-3 px-3">No</td>
              <td className="py-3 px-3">No</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Primary bidding goal</td>
              <td className="py-3 px-3">Conversions / conversion value</td>
              <td className="py-3 px-3">Conversions / conversion value</td>
              <td className="py-3 px-3">Views, reach, brand lift</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Short version: PMax is the all-in-one machine that also pulls in Search. Demand Gen is focused purely on visual demand with somewhat more placement control than PMax. A classic YouTube/Video campaign is for reach and brand, not direct conversions. A deeper breakdown of PMax and when to use it is in the <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-guide" } }} className="underline">Performance Max guide</Link>.
      </p>

      <hr />

      <h2 id="audiences">Audiences: rollout order</h2>
      <p>
        The order you introduce audiences into Demand Gen changes how fast the campaign starts performing the way it should. Don't throw everything in at once.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong><GlossaryLink slug="remarketing">Remarketing lists</GlossaryLink></strong> <span className="text-gray-500">— the first layer. People who already visited the site are closest to converting, so the campaign gets a useful signal fastest here.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Customer Match lists</strong> <span className="text-gray-500">— your existing customer email/phone base, uploaded directly into Google Ads. A strong signal that feeds the lookalike step that follows.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Lookalike audiences</strong> <span className="text-gray-500">— Google looks for new people similar to your best customers. Works well only once you have enough quality data behind you from steps 1 and 2.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Audience expansion controls</strong> <span className="text-gray-500">— only at the end do you decide how far you let Google go beyond your defined audiences. Turn this on gradually, not on day one.</span></div>
          </div>
        </div>
      </div>

      <p>
        <GlossaryLink slug="in-market-audience">In-market audiences</GlossaryLink> can be added as an extra signal alongside these layers, but not as a substitute for the first two steps. First-party data — your remarketing and your customer list — always outweighs Google's ready-made segments.
      </p>

      <hr />

      <h2 id="measurement">Measurement: view-through and incrementality</h2>
      <figure className="my-8">
        <Image src="/blog/demand-gen-merenje.webp" alt="Transparent cards with an eye leading to a green card with a checkmark" width={1200} height={896} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-sm text-gray-500 text-center mt-2">View-through steps are visible along the path to conversion — measure them soberly</figcaption>
      </figure>
      <p>
        This is the part I most want to explain honestly, because it's the easiest place to fool yourself.
      </p>
      <p>
        A view-through conversion means: a user saw your video ad, didn't click, but later — the same day or within a few days — completed a conversion on your site. Google attributes that to the campaign that showed them the video. The new 2026 opt-in lets a campaign bid toward that signal too, not just click-conversions.
      </p>
      <p><strong>What's real value here, and what's attribution fog:</strong></p>
      <ul>
        <li>A video ad can genuinely influence a decision even without a click — that's real, especially for products with a longer decision cycle.</li>
        <li>But that same user may also have seen your Search ad, your remarketing banner, and heard about you from a friend — a view-through conversion doesn't separate any of that out. It credits the whole thing to Demand Gen because the video ad was the last touch on that path it can see.</li>
        <li>The longer the view-through window (Google typically uses a few days), the more conversions the campaign "claims" — and that doesn't mean those conversions would have been lost without it.</li>
      </ul>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">My advice: watch incrementality, not reported conversions</p>
        <p className="text-base text-yellow-900 mb-0">The conversion count Demand Gen reports in the interface tells you how much the campaign credited itself, not how much it actually delivered. The real question is different: does the total conversion count across the whole account go up when Demand Gen is running, compared to a period without it? The new 2026 A/B testing framework for incrementality was built exactly for this — it compares a group running Demand Gen against a control group without it, and shows the real added effect instead of just self-reported numbers. Use it before you decide to scale the budget.</p>
      </div>

      <p>
        This ties back to the broader topic of conversion tracking — if your on-site tracking isn't clean to begin with, no attribution method here will give you a reliable picture. The fundamentals are covered in the <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-guide" } }} className="underline">conversion tracking guide</Link>.
      </p>

      <hr />

      <h2 id="setup">Setup step by step</h2>
      <p>
        This is the order I follow when I set up a client's first Demand Gen campaign.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Check conversion tracking</strong> <span className="text-gray-500">— before anything else. Without clean tracking, the algorithm optimizes toward the wrong goal from day one.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Prepare creative before the campaign, not during</strong> <span className="text-gray-500">— at least a few images in all three formats and, if you have one, a short vertical video. Don't build creative on the fly.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Set the campaign goal</strong> <span className="text-gray-500">— conversions or conversion value, depending on whether your order values vary widely.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Build the first audience layer</strong> <span className="text-gray-500">— a remarketing list and, if you have one, a customer match list. Without this, skip straight to step 8 and expect a longer learning period.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Build an asset group around one theme</strong> <span className="text-gray-500">— same rule as PMax. One asset group, one consistent product or message.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Leave the view-through opt-in off for the first few weeks</strong> <span className="text-gray-500">— see how the campaign performs on click-conversions first, then decide whether the view-through signal makes sense for your product.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div><strong>Let the learning period run untouched</strong> <span className="text-gray-500">— don't change budget or targeting every other day. The algorithm needs time and stability to learn.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">8</span>
            <div><strong>Set up an incrementality A/B test</strong> <span className="text-gray-500">— once you have enough data, use the new framework to check whether the campaign is actually adding to the mix before you increase budget.</span></div>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="faq">Frequently asked questions</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Is Demand Gen a replacement for Display?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            They overlap partly, but they're not the same thing. Standard <GlossaryLink slug="display-network">Display</GlossaryLink> covers a much wider network of sites and apps through banner formats. Demand Gen is narrower, focused on three feed-native placements — YouTube, Discover, Gmail — with visual formats that fit more naturally into content. For most accounts I run, Demand Gen is now the more natural choice for prospecting than classic Display, but Display still has a role for broader remarketing reach.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much budget does Demand Gen need?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            The rough threshold I use is around EUR 1,000/month for that channel alone. This isn't a universal cutoff or a promise of results — it depends on product price, competition, and how many conversions the algorithm needs to learn from. Below that level, a campaign often doesn't get enough room to show what it can actually do across three placements at once.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Demand Gen or PMax?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            It's not always an either-or question. PMax includes Search and Shopping alongside the visual channels, so it's the broader solution with less control. Demand Gen is narrower and gives you more control over placement and creative, but it doesn't touch Search at all. If PMax is already running well for you, Demand Gen rarely adds enough extra value to justify duplicating budget — check with an incrementality A/B test before deciding. If you don't run PMax and want a focused prospecting channel with a stronger creative lean, Demand Gen is the more sensible first step.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does it work for B2B?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            It can, but it's harder than for eCommerce. A B2B product rarely has a strong visual hook — it's difficult to make a compelling image or video for, say, inventory management software. If you have a customer match list of existing clients to build lookalikes from and budget for at least basic video production, it's worth testing as a supplementary channel alongside Search. As the first and only channel for B2B lead gen, I wouldn't recommend it.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How do you measure the success of a Demand Gen campaign?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Not just by the conversion count the campaign reports in the interface. Watch whether total conversions across the whole account go up when the campaign is running, versus a period without it — that's an incrementality test, and there's a built-in A/B framework for it since 2026. If you turn on view-through optimization, be aware it widens the definition of "conversion," so the reported number will climb regardless of whether the actual result is growing. Look at the business outcome, not just the dashboard.
          </div>
        </details>
      </div>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Thinking about a Demand Gen campaign?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">I help companies figure out whether Demand Gen actually brings new demand or just duplicates results they're already getting elsewhere. Book a free consultation to see if it's the right move for your account.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Book a free consultation</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads account management</p>
          <p className="text-xs text-gray-500 mb-0">Hands-on campaign management, including Demand Gen and PMax</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max guide</p>
          <p className="text-xs text-gray-500 mb-0">When to use PMax instead of, or alongside, Demand Gen, and how to structure it.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking guide</p>
          <p className="text-xs text-gray-500 mb-0">How to set up clean tracking before you measure view-through and incrementality.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing guide</p>
          <p className="text-xs text-gray-500 mb-0">How to build the lists that later feed Demand Gen lookalike audiences.</p>
        </Link>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Demand Gen is a good channel once Search is already working and you're looking for the next layer of growth. It's not a patch for a foundation that doesn't work. Creative carries the campaign — without a strong photo or video, no algorithm fixes that.</p>
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
