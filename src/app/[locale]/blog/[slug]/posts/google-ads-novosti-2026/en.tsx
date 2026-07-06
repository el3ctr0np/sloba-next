import { Link } from "@/i18n/navigation";

export default function GoogleAdsUpdates2026EN() {
  return (
    <>
      {/* Living post badge */}
      <div className="flex items-center gap-2 mb-6">
        <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block"></span>
          Updated monthly
        </span>
        <span className="text-xs text-gray-500">Last updated: April 2026</span>
      </div>

      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Every Google Ads change in 2026, in one place — Search, Shopping, PMax, AI Max, Merchant Center.
          I update this post every month so you do not have to follow 10 different blogs.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">15+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">major changes in 2026</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Monthly</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">update (April 2026)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">5</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">areas: Search, Shopping, PMax, AI Max, MC</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Nov 2026</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Shopping launches in Serbia</p>
          </div>
        </div>
        <p className="text-sm text-slate-400 mt-6 mb-0 border-t border-slate-700 pt-4">
          Bookmark this page — I update it every month with all the relevant changes.
        </p>
      </div>

      <p>
        The Google Ads platform is changing faster than ever. In 2026, between the AI Max rollout, Shopping launches in new markets, PMax transparency additions, and old-feature deprecations — it is hard to keep track of what actually matters versus what is just noise. This post is my answer to that problem.
      </p>
      <p>
        I have been doing Google Ads consulting for 10+ years, managing 10+ accounts monthly across markets from Serbia to the UK and the US. Every month I read everything coming out of Google HQ, filter out what genuinely affects campaigns, and log it here. The newest month is always at the top.
      </p>

      <hr />

      {/* ===== APRIL 2026 ===== */}
      <h2>April 2026 — Updates and Changes</h2>

      {/* UPDATE 1 — Shopping 15 markets */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Mega News</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">Announced: March 25, 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          Google Shopping — Launching in 15 New European Markets
        </h3>
        <p className="text-base text-gray-700 mb-3">
          This is the biggest Google Shopping expansion since 2014. On March 25, 2026, Google officially confirmed the expansion of Shopping Ads to 15 new EMEA markets in two waves:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-blue-700 mb-2">Phase 1 — Back-to-School (Q3 2026)</p>
            <ul className="text-base text-blue-900 space-y-1 mb-0">
              <li>Cyprus</li>
              <li>Luxembourg</li>
              <li>Moldova</li>
              <li>North Macedonia</li>
              <li>Malta</li>
              <li>Liechtenstein</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-green-700 mb-2">Phase 2 — Holiday Season (Nov 2026)</p>
            <ul className="text-base text-green-900 space-y-1 mb-0">
              <li><strong>Serbia</strong></li>
              <li>Croatia</li>
              <li>Bosnia and Herzegovina</li>
              <li>Slovenia</li>
              <li>Montenegro</li>
              <li>Bulgaria, Estonia, Latvia, Lithuania</li>
            </ul>
          </div>
        </div>
        <p className="text-base text-gray-600 mt-4 mb-0">
          If you run an eCommerce business in Serbia or the region, preparation starts now — not in October. Merchant Center setup, feed optimization, and account review all take months.{" "}
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }}
            className="underline font-medium text-blue-700"
          >
            Complete preparation guide →
          </Link>
        </p>
      </div>

      {/* UPDATE 2 — PMax Channel Performance */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Performance Max</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">April 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          PMax Channel Performance Timeline — New Transparency
        </h3>
        <p className="text-base text-gray-700 mb-3">
          Finally. Google has introduced a Channel Performance Timeline for Performance Max campaigns — you can now see how each channel contributes to overall results.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
          {["Search", "YouTube", "Display", "Discover", "Gmail", "Maps"].map((channel) => (
            <div key={channel} className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-center text-gray-700">
              {channel}
            </div>
          ))}
        </div>
        <p className="text-base text-gray-600 mt-4 mb-0">
          This is the most significant PMax transparency update since the campaign type launched in 2021. Advertisers have wanted a per-channel breakdown for years — now it is possible. Check the Channel Timeline weekly to spot which channel is burning budget without conversions.
        </p>
      </div>

      {/* UPDATE 3 — Enhanced Conversions */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Conversion Tracking</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">April–June 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          Google Unified Enhanced Conversions Settings
        </h3>
        <p className="text-base text-gray-700 mb-0">
          Google is consolidating Web and Leads enhanced conversions into a single setup interface. The previously separate settings for web conversions and lead conversions now live in one place.
          Rollout happens in two steps: April 2026 (web) and June 2026 (leads).
          If you have not set up enhanced conversions yet — now is the time. Enhanced conversions improve measurement accuracy by 5-30% depending on the industry.
        </p>
      </div>

      {/* UPDATE 4 — Product Ratings in YouTube Shorts */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">eCommerce</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">April 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          Product Ratings in YouTube Shorts Ads
        </h3>
        <p className="text-base text-gray-700 mb-0">
          eCommerce sellers can now display product ratings (stars and review count) directly inside YouTube Shorts ads. This pulls data from Google Merchant Center and the Google Customer Reviews program.
          Relevant for brands with well-rated products — social proof directly in a video format increases CTR and lowers friction to purchase.
        </p>
      </div>

      {/* UPDATE 5 — Merchant API for Scripts */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Developer</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">April 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          Merchant API Now Available in Google Ads Scripts
        </h3>
        <p className="text-base text-gray-700 mb-0">
          Developers and agencies can now use the Merchant Center API directly through Google Ads Scripts — no separate OAuth tokens or standalone projects required. This opens up automated feed monitoring, alerts for disapproved products, and price management straight from Ads scripts. For agencies running a larger Shopping portfolio, this is a meaningful workflow speed-up.
        </p>
      </div>

      {/* UPDATE 6 — Performance Planner Deprecation */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Deprecation</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">Since March 9, 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          Performance Planner — Partial Deprecation
        </h3>
        <p className="text-base text-gray-700 mb-3">
          Since March 9, 2026, Display and Video campaigns are no longer supported in Performance Planner. The impression share metric has also been removed from the Planner interface.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4">
          <p className="font-semibold text-yellow-900 text-sm mb-1">What is still supported?</p>
          <p className="text-yellow-800 text-base mb-0">Search, Performance Max, and Shopping campaigns remain available in Performance Planner. For Display and Video planning, Google recommends Reach Planner (video) and direct budgeting inside campaigns.</p>
        </div>
      </div>

      <hr />

      {/* ===== MARCH 2026 ===== */}
      <h2>March 2026 — Updates and Changes</h2>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Google Ads Editor</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">March 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          Google Ads Editor 2.12 — 15 New Features
        </h3>
        <p className="text-base text-gray-700 mb-3">
          The biggest Editor release of 2026. Key changes by campaign type:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
            <div>
              <strong className="text-sm">Performance Max — up to 15 videos per asset group</strong>
              <p className="text-xs text-gray-600 mt-0.5 mb-0">The previous limit was 5 videos. With 15, the algorithm has far more material to test and optimize across YouTube and Discovery placements.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
            <div>
              <strong className="text-sm">Demand Gen campaigns — new bulk editing tools</strong>
              <p className="text-xs text-gray-600 mt-0.5 mb-0">Demand Gen gets full Editor support: bulk creation and editing of ads, audience lists, and bids. Previously this required manual work in the UI.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
            <div>
              <strong className="text-sm">Total Budgets for Search, PMax, Shopping (Open Beta)</strong>
              <p className="text-xs text-gray-600 mt-0.5 mb-0">Total Budgets (a single total budget for the entire campaign period) can now be set and managed directly from the Editor — previously available only in the online UI since January 2026.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
            <div>
              <strong className="text-sm">Cross-account campaign management improvements</strong>
              <p className="text-xs text-gray-600 mt-0.5 mb-0">MCC campaign management gets improved bulk operations for accounts that share a similar structure — relevant for agencies and white-label setups.</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* ===== FEBRUARY 2026 ===== */}
      <h2>February 2026 — Updates and Changes</h2>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">AI Max</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">February 26, 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          AI Max Text Guidelines — Global Beta for All Advertisers
        </h3>
        <p className="text-base text-gray-700 mb-3">
          On February 26, 2026, Google opened AI Max Text Guidelines to all advertisers globally (previously a limited beta). This is one of the most important AI features of 2026 for Search and PMax campaigns.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-indigo-700 mb-2">Text Customization</p>
            <p className="text-base text-indigo-900 mb-0">AI automatically generates headlines and descriptions in real time, tailored to each query. Do not use the same ads for every search — AI varies the copy based on context.</p>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-indigo-700 mb-2">Text Guidelines (Control)</p>
            <p className="text-base text-indigo-900 mb-0">You define what AI can and cannot write — term exclusions (e.g., avoid "cheap" for luxury brands) and messaging restrictions to keep brand voice consistent.</p>
          </div>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mt-4">
          <p className="font-semibold text-blue-900 text-sm mb-1">Practical recommendation</p>
          <p className="text-blue-800 text-base mb-0">Set up Term Exclusions right away. Every brand has words that must never appear in its ads (generic pricing messages, competitor terms, etc.). Without exclusions, AI can generate messaging that is technically accurate but off-brand. This applies to both AI Max for Search and Performance Max campaigns.</p>
        </div>
      </div>

      <hr />

      {/* ===== JANUARY 2026 ===== */}
      <h2>January 2026 — Updates and Changes</h2>

      {/* UPDATE 1 — Total Budgets */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">Budgeting</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">January 2026 — Open Beta</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          Campaign Total Budgets — Open Beta
        </h3>
        <p className="text-base text-gray-700 mb-3">
          Total Budgets entered open beta for Search, Performance Max, and Shopping campaigns. Instead of a daily budget (multiplied by the days in the month), you can now set a total budget for the entire campaign period.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-gray-900 bg-gray-50">
                <th className="py-2 px-3 font-heading font-semibold">Budget type</th>
                <th className="py-2 px-3 font-heading font-semibold">How it works</th>
                <th className="py-2 px-3 font-heading font-semibold">When to use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 px-3 font-medium">Daily Budget</td>
                <td className="py-2 px-3">€X/day (up to 2x on peak days)</td>
                <td className="py-2 px-3">Always-on campaigns</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50/50">
                <td className="py-2 px-3 font-medium">Total Budget (new)</td>
                <td className="py-2 px-3">€X total for the campaign period</td>
                <td className="py-2 px-3">Promotional campaigns, seasonal launches</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-base text-gray-600 mt-3 mb-0">
          Useful for: Black Friday campaigns, product launches, and any scenario where you have a fixed marketing budget for a specific period — and you do not want daily budgets to go unspent.
        </p>
      </div>

      {/* UPDATE 2 — Universal Commerce Protocol */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex-shrink-0 inline-block bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">AI Future</span>
          <p className="text-xs text-gray-500 mt-1 mb-0">January 2026</p>
        </div>
        <h3 className="text-base md:text-lg font-heading font-bold mt-0 mb-2">
          Universal Commerce Protocol — AI Agents Shopping Online
        </h3>
        <p className="text-base text-gray-700 mb-3">
          Google launched open-source standards for AI agents that autonomously complete purchases on behalf of users. This is not science fiction — this is infrastructure being built right now.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-3">
          <p className="text-xs font-bold uppercase tracking-wide text-gray-600 mb-2">Partners that have adopted the protocol</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {["Shopify", "Etsy", "Wayfair", "Target", "Walmart"].map((partner) => (
              <div key={partner} className="bg-white border border-gray-200 rounded px-2 py-1.5 text-xs font-medium text-center text-gray-700">
                {partner}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 mt-4">
          <p className="font-semibold text-yellow-900 text-sm mb-1">What does this mean for advertisers?</p>
          <p className="text-yellow-800 text-base mb-0">This is the early stage of the "agentic commerce" era. Today: a user searches, clicks an ad, buys. Tomorrow: an AI agent searches, evaluates, and buys automatically — no click involved. Google Shopping feeds and well-structured product data will be the foundation for visibility in these AI systems. Start on feed optimization today.</p>
        </div>
      </div>

      <hr />

      {/* ===== WHAT'S COMING NEXT ===== */}
      <h2>What's Coming Next — 2026 Announcements</h2>
      <p>
        Based on Google's official announcements and the patterns I am tracking, here are the key dates for the rest of 2026:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border-2 border-blue-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700 mb-2">Q3 2026</p>
          <h3 className="text-sm font-heading font-bold mt-0 mb-2">Shopping Phase 1 Launch</h3>
          <p className="text-xs text-gray-600 mb-0">Cyprus, Luxembourg, Moldova, North Macedonia, Malta, and Liechtenstein get Shopping Ads during the back-to-school period.</p>
        </div>
        <div className="bg-white border-2 border-green-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-green-700 mb-2">November 2026</p>
          <h3 className="text-sm font-heading font-bold mt-0 mb-2">Shopping in Serbia — Live!</h3>
          <p className="text-xs text-gray-600 mb-0">Phase 2: Serbia, Croatia, Bosnia and Herzegovina, Slovenia, Montenegro, Bulgaria, Estonia, Latvia, Lithuania. Timed right before Black Friday season.</p>
        </div>
        <div className="bg-white border-2 border-purple-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-purple-700 mb-2">All of 2026</p>
          <h3 className="text-sm font-heading font-bold mt-0 mb-2">AI Max Expansion</h3>
          <p className="text-xs text-gray-600 mb-0">AI Max for Search and PMax are getting new controls, better reporting, and expanded availability across more markets and campaign types.</p>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-6 my-8">
        <p className="text-sm font-bold uppercase tracking-wide text-yellow-400 mb-2">Detailed Shopping preparation guide</p>
        <p className="text-base font-heading font-semibold mb-3">
          If you run an eCommerce business in Serbia, read our complete guide to the Google Shopping launch — a 15-step checklist, Merchant Center setup, product feed optimization, and lessons from the UK market.
        </p>
        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }}
          className="inline-block bg-yellow-400 text-gray-900 font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-yellow-300 transition-colors"
        >
          Read: Google Shopping Serbia 2026 →
        </Link>
      </div>

      <hr />

      {/* ===== FAQ ===== */}
      <h2>FAQ — Frequently Asked Questions</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How often is this post updated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The post is updated monthly, usually within the first 7 days of the new month. Each update adds the new month to the top with all the relevant changes from the Google Ads platform. The 'Last updated' label in the header shows when the post was last edited."
                }
              },
              {
                "@type": "Question",
                name: "Where can I follow Google Ads news?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Primary sources: the official Google Ads Blog (ads.google.com/intl/en_us/home/resources/), Search Engine Land, PPC Hero, and the Inside Google Ads podcast. For the Serbian market, this post is the only Serbian resource that aggregates all the relevant changes in one place."
                }
              },
              {
                "@type": "Question",
                name: "What is AI Max for Google Ads?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AI Max is a set of AI-powered features for Search and Performance Max campaigns that automatically generate ad copy, expand keyword targeting to relevant queries you have not explicitly added, and optimize creative based on search context. It consists of: Text Customization (real-time headline and description generation), Text Guidelines (control over what AI can write), and Broad Match Expansion (automatic reach expansion). Available globally since February 2026."
                }
              },
              {
                "@type": "Question",
                name: "When is Google Shopping coming to Serbia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Google Shopping is coming to Serbia in November 2026, as part of the Phase 2 EMEA expansion that also includes Croatia, Bosnia and Herzegovina, Slovenia, and Montenegro. The launch is strategically timed ahead of the Black Friday season. Merchant Center setup and feed optimization should be finished by October 2026 at the latest."
                }
              },
              {
                "@type": "Question",
                name: "Do these changes affect my existing campaigns?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most 2026 changes are opt-in — you have to actively turn them on for them to take effect. The only mandatory changes are deprecations: Performance Planner Display/Video support was removed as of March 2026. AI Max and Text Guidelines are optional but recommended. Total Budgets are available as an alternative to Daily Budgets, but they do not automatically replace existing campaigns."
                }
              }
            ]
          })
        }}
      />

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How often is this post updated?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            The post is updated monthly, usually within the first 7 days of the new month. Each update adds the new month to the top with all the relevant changes from the Google Ads platform. The &quot;Last updated&quot; label in the header shows when the post was last edited.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Where can I follow Google Ads news?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Primary sources:{" "}
            <a href="https://blog.google/products/ads/" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">Official Google Ads Blog</a>,{" "}
            <a href="https://searchengineland.com/category/google/google-ads" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">Search Engine Land</a>,{" "}
            <a href="https://www.ppchero.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">PPC Hero</a>,{" "}
            and the Inside Google Ads podcast. For the Serbian market, this post is the only Serbian resource that aggregates all the relevant changes in one place.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What is AI Max for Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            AI Max is a set of AI-powered features for Search and Performance Max campaigns that automatically generate ad copy, expand keyword targeting to relevant queries you have not explicitly added, and optimize creative based on search context. It consists of: Text Customization (real-time headline and description generation), Text Guidelines (control over what AI can write), and Broad Match Expansion. Available globally since February 2026.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            When is Google Shopping coming to Serbia?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Google Shopping is coming to Serbia in <strong>November 2026</strong>, as part of the Phase 2 EMEA expansion that also includes Croatia, Bosnia and Herzegovina, Slovenia, and Montenegro. The launch is strategically timed ahead of the Black Friday season. Merchant Center setup and feed optimization should be finished by October 2026 at the latest.{" "}
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }}
              className="underline text-blue-700 font-medium"
            >
              Complete preparation guide →
            </Link>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Do these changes affect my existing campaigns?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Most 2026 changes are <strong>opt-in</strong> — you have to actively turn them on for them to take effect. The only mandatory changes are deprecations: Performance Planner Display/Video support was removed as of March 2026. AI Max and Text Guidelines are optional but recommended. Total Budgets are available as an alternative to Daily Budgets, but they do not automatically replace existing campaigns.
          </div>
        </details>
      </div>
    </>
  );
}
