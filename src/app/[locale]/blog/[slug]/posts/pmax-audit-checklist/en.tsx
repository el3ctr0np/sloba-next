import { Link } from "@/i18n/navigation";

export default function PerformanceMaxAuditChecklistEN() {
  return (
    <>
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Performance Max blends Search, Shopping, Display, YouTube, Discover, Gmail, and Maps into one automated campaign, which is exactly why it needs its own audit instead of a generic Google Ads checklist. Below: 38 checkpoints across 8 groups, each with where to check it in the interface and the red flag that means something is wrong.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">38</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">checkpoints</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">8</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">checklist groups</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">50</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">search themes / asset group</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">10,000</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">negative keywords / campaign (2026 cap)</p>
          </div>
        </div>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Quick Answer
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          What is a Performance Max audit and how is it different from a general Google Ads audit?
        </p>
        <p className="text-sm md:text-base text-gray-700 mb-0 leading-relaxed">
          A <strong>Performance Max audit</strong> checks the controls specific to PMax — asset group structure, feed quality, negative keywords, brand exclusions, audience signals, and channel-level reporting — rather than the keyword- and ad-level checks a standard Search audit runs. PMax used to be a black box with almost nothing to verify beyond &quot;is Ad Strength good&quot;; 2026 changes (negative keywords up to 10,000 per campaign, per-channel reporting, brand exclusions, data exclusions) turned it into a campaign type you can actually audit properly.
        </p>
      </div>

      <hr />

      {/* ── Why PMax needs its own audit ── */}
      <h2 id="why-pmax-needs-its-own-audit">Why Performance Max needs its own audit</h2>
      <p>
        If you haven&apos;t read the full mechanics yet — structure, asset groups, bidding, when PMax makes sense versus standard Shopping — start with the{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-guide" } }} className="underline font-semibold">Performance Max guide</Link>
        . That post covers a short audit summary; this one is the full version, with the where-to-check and the red flag spelled out for every point.
      </p>
      <p>
        A standard Search audit leans on keyword-level data: Quality Score, Search Terms Report, match types, bid adjustments per keyword. Performance Max reports most of that in aggregate — you don&apos;t get a per-keyword view, and a meaningful slice of the automation (how budget splits across channels, which audience signal drove which conversion) has historically been a black box. That gap is why the general{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-checklist" } }} className="underline font-semibold">Google Ads audit checklist</Link>
        {" "}covers PMax in a single line — treat each asset group like an ad group, one theme, not a dumping ground — and points here for the rest. If you haven&apos;t run a full account audit yet, do that first; this post assumes PMax already exists inside a reasonably healthy account and goes deep on just that campaign type.
      </p>
      <p>
        What changed the audit itself in 2026: negative keywords moved from a 100-per-campaign cap to{" "}
        <a href="https://support.google.com/google-ads/answer/15726455?hl=en" target="_blank" rel="noopener noreferrer">10,000 per campaign</a>
        , channel-level reporting shipped in{" "}
        <a href="https://blog.google/products/ads-commerce/channel-performance-reporting-coming-to-performance-max/" target="_blank" rel="noopener noreferrer">January 2026</a>
        {" "}so you can finally see the Search/Shopping/Display/YouTube split, and brand exclusions plus data exclusions gave PMax targeting controls it never had before. Half the checkpoints below didn&apos;t exist as checkpoints two years ago.
      </p>

      {/* ── TOC ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#why-pmax-needs-its-own-audit" className="block py-1 text-base text-gray-700 hover:text-primary underline">Why Performance Max needs its own audit</a></li>
          <li><a href="#group-1-setup-structure" className="block py-1 text-base text-gray-700 hover:text-primary underline">Group 1: Campaign setup &amp; structure</a></li>
          <li><a href="#group-2-measurement" className="block py-1 text-base text-gray-700 hover:text-primary underline">Group 2: Measurement &amp; conversion tracking</a></li>
          <li><a href="#group-3-asset-groups-creative" className="block py-1 text-base text-gray-700 hover:text-primary underline">Group 3: Asset groups &amp; creative</a></li>
          <li><a href="#group-4-feed-quality" className="block py-1 text-base text-gray-700 hover:text-primary underline">Group 4: Feed quality (retail PMax)</a></li>
          <li><a href="#group-5-brand-safety-exclusions" className="block py-1 text-base text-gray-700 hover:text-primary underline">Group 5: Brand safety &amp; exclusions</a></li>
          <li><a href="#group-6-channels-reporting" className="block py-1 text-base text-gray-700 hover:text-primary underline">Group 6: Channels &amp; reporting</a></li>
          <li><a href="#group-7-budget-bidding" className="block py-1 text-base text-gray-700 hover:text-primary underline">Group 7: Budget &amp; bidding</a></li>
          <li><a href="#group-8-search-themes-audience-signals" className="block py-1 text-base text-gray-700 hover:text-primary underline">Group 8: Search themes &amp; audience signals</a></li>
          <li><a href="#how-often-to-run-this" className="block py-1 text-base text-gray-700 hover:text-primary underline">How often to run this checklist</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
          <li><a href="#related-guides" className="block py-1 text-base text-gray-700 hover:text-primary underline">Related guides</a></li>
        </ol>
      </nav>

      {/* ── Interactive tool CTA ── */}
      <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-bold mb-2">Would rather be walked through it?</p>
        <p className="text-lg text-white font-heading font-semibold mb-3 leading-snug">
          The same 38 checkpoints also exist as an interactive check: you answer OK, Problem, Not sure or N/A, and it hands back a weighted score per group and overall, plus the order to fix things in, weighed by impact against effort.
        </p>
        <p className="text-slate-300 text-sm mb-5">
          It runs in the browser, saves your progress, and does not ask for an email to show you the result.
        </p>
        <Link href="/resursi/pmax-check" className="btn-secondary inline-block">Open PMax Check →</Link>
      </div>

      <hr />

      {/* ── Group 1 ── */}
      <h2 id="group-1-setup-structure">Group 1: Campaign setup &amp; structure</h2>
      <p>
        Structure problems compound — a badly split asset group or a stray URL expansion setting quietly wastes budget for months before anyone notices, because PMax doesn&apos;t surface it the way a keyword-level report would.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Asset groups are thematically consistent</p>
            <p className="text-sm text-gray-500 mb-1">Where: Asset groups tab</p>
            <p className="text-sm text-red-600 mb-0">Red flag: assets for unrelated product categories crammed into one group</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Asset group count matches catalog and business size</p>
            <p className="text-sm text-gray-500 mb-1">Where: Asset groups tab</p>
            <p className="text-sm text-red-600 mb-0">Red flag: one asset group covering 50+ SKUs, or 10+ groups running on a small budget</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">URL expansion reviewed as a deliberate choice</p>
            <p className="text-sm text-gray-500 mb-1">Where: Campaign settings → URL expansion</p>
            <p className="text-sm text-red-600 mb-0">Red flag: left on without anyone having decided that on purpose — traffic lands on pages you never planned for</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Final URLs per asset group are accurate and redirect-free</p>
            <p className="text-sm text-gray-500 mb-1">Where: Asset group → Final URL</p>
            <p className="text-sm text-red-600 mb-0">Red flag: a generic homepage URL instead of the actual product or category page</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Campaign goal and conversion goal set correctly</p>
            <p className="text-sm text-gray-500 mb-1">Where: Campaign settings → Goal</p>
            <p className="text-sm text-red-600 mb-0">Red flag: the campaign is optimizing toward a secondary action instead of the one that actually matters</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Group 2 ── */}
      <h2 id="group-2-measurement">Group 2: Measurement &amp; conversion tracking</h2>
      <p>
        Every audit starts here for a reason: PMax bids on whatever conversion data you feed it, so a tracking gap doesn&apos;t just hide a problem, it actively points the algorithm at the wrong target. If you haven&apos;t verified the fundamentals — tag firing, Enhanced Conversions, primary vs. secondary goals — do that first with the{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-guide" } }} className="underline">Conversion Tracking guide</Link>
        . What follows is specific to what PMax does with that data.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">6</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Primary conversion action clearly marked, secondaries excluded from optimization</p>
            <p className="text-sm text-gray-500 mb-1">Where: Goals → Conversions</p>
            <p className="text-sm text-red-600 mb-0">Red flag: a &quot;button click&quot; or &quot;page view&quot; set as primary</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">7</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Conversion value accurate for Target ROAS (real revenue, not a flat number)</p>
            <p className="text-sm text-gray-500 mb-1">Where: Goals → Conversions → Value settings</p>
            <p className="text-sm text-red-600 mb-0">Red flag: a fixed value applied to every conversion on a store with variable pricing</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">8</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Enhanced conversions turned on</p>
            <p className="text-sm text-gray-500 mb-1">Where: Goals → Conversions → Enhanced conversions status</p>
            <p className="text-sm text-red-600 mb-0">Red flag: still off, especially on an account that runs on Smart Bidding for most of its budget</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">9</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Offline conversion import connected for B2B (won deal / SQL from the CRM)</p>
            <p className="text-sm text-gray-500 mb-1">Where: Goals → Conversions → Import</p>
            <p className="text-sm text-red-600 mb-0">Red flag: PMax optimizing purely on form-fill volume with no lead-quality signal feeding back — see the{" "}
              <Link href={{ pathname: "/blog/[slug]", params: { slug: "offline-conversion-import-b2b" } }} className="underline">offline conversion import guide</Link>
              {" "}if this one applies to you</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">10</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Conversion window matches the sales cycle</p>
            <p className="text-sm text-gray-500 mb-1">Where: Conversion action settings — 30 days by default, 60-90 days for B2B</p>
            <p className="text-sm text-red-600 mb-0">Red flag: the default window on a long B2B cycle, quietly dropping late conversions from the data PMax bids on</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Group 3 ── */}
      <h2 id="group-3-asset-groups-creative">Group 3: Asset groups &amp; creative</h2>
      <p>
        Asset ratings and refresh cadence are the two things I see skipped most. Ad Strength gets checked once at launch and never again — meanwhile the top-rated asset from six months ago is stale and the algorithm is still leaning on it.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">11</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Asset performance ratings reviewed per group (Low / Good / Best)</p>
            <p className="text-sm text-gray-500 mb-1">Where: Asset group → Asset ratings</p>
            <p className="text-sm text-red-600 mb-0">Red flag: a &quot;Low&quot; rated asset still live after 30+ days</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">12</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Every asset slot filled — minimum 3-5 headlines, 2-4 descriptions, all three image ratios, video</p>
            <p className="text-sm text-gray-500 mb-1">Where: Asset group detail</p>
            <p className="text-sm text-red-600 mb-0">Red flag: an empty portrait-image or video slot</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">13</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Video assets uploaded by hand where you have the material, not left to auto-generation</p>
            <p className="text-sm text-gray-500 mb-1">Where: Asset group → Videos — up to 15 videos per group, raised from 5 in the{" "}
              <a href="https://support.google.com/google-ads/editor/answer/16924635?hl=en" target="_blank" rel="noopener noreferrer">2026 Google Ads Editor update</a>
            </p>
            <p className="text-sm text-red-600 mb-0">Red flag: zero uploaded videos, everything auto-generated from static images</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">14</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Asset set testing running wherever there&apos;s enough traffic to read a result</p>
            <p className="text-sm text-gray-500 mb-1">Where: Experiments tab</p>
            <p className="text-sm text-red-600 mb-0">Red flag: the same creative set untouched for 6+ months, never tested against an alternative</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">15</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Creative refreshed on a cycle, minimum every 2-3 months</p>
            <p className="text-sm text-gray-500 mb-1">Where: Asset group → last edit date</p>
            <p className="text-sm text-red-600 mb-0">Red flag: assets unchanged for 6+ months</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Group 4 ── */}
      <h2 id="group-4-feed-quality">Group 4: Feed quality (retail PMax)</h2>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Skip this group if you&apos;re not eCommerce</p>
        <p className="text-yellow-800 text-base mb-0">This entire section applies only to Shopping-backed Performance Max — a Merchant Center feed driving the campaign. Lead-gen or B2B PMax with no product feed can skip straight to Group 5.</p>
      </div>

      <p>
        Feed problems in PMax are worse than in standard Shopping, because a bad title or a missing GTIN doesn&apos;t just hurt one campaign — it caps eligibility for every Shopping-backed surface PMax touches. For the full feed methodology, see the{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-guide" } }} className="underline">Google Shopping guide</Link>
        .
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">16</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Titles are optimized — brand, type, and attributes, not generic</p>
            <p className="text-sm text-gray-500 mb-1">Where: Merchant Center → Diagnostics</p>
            <p className="text-sm text-red-600 mb-0">Red flag: titles under 5 words or missing the brand name entirely</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">17</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">GTIN/MPN present wherever applicable</p>
            <p className="text-sm text-gray-500 mb-1">Where: Merchant Center feed</p>
            <p className="text-sm text-red-600 mb-0">Red flag: 10%+ of branded products missing a GTIN</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">18</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Custom labels (0-4) mapped to an actual strategy — margin tier, season, performance</p>
            <p className="text-sm text-gray-500 mb-1">Where: Feed rules or source feed</p>
            <p className="text-sm text-red-600 mb-0">Red flag: custom labels sitting empty, or populated but never used in listing groups</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">19</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Listing groups segmented by custom label or product type</p>
            <p className="text-sm text-gray-500 mb-1">Where: Asset group →{" "}
              <a href="https://support.google.com/google-ads/answer/11596074?hl=en" target="_blank" rel="noopener noreferrer">Listing groups</a>
            </p>
            <p className="text-sm text-red-600 mb-0">Red flag: a single listing group for the entire catalog, or the opposite — hundreds of listing groups adding granularity nobody acts on</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">20</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Feed health checked — availability, price parity with the live site, image quality</p>
            <p className="text-sm text-gray-500 mb-1">Where: Merchant Center → Product status</p>
            <p className="text-sm text-red-600 mb-0">Red flag: disapproved or pending items above 5% of the catalog</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-bold mb-2">Get a second opinion</p>
        <p className="text-lg text-gray-900 font-heading font-semibold mb-4 leading-snug">
          Feed and negative-keyword issues are the two categories I find most often on accounts that&apos;ve never had a PMax-specific audit. I go through all 38 checkpoints personally as part of the Deep Audit + Action Plan. From $500.
        </p>
        <Link href="/usluge/google-ads-audit" className="btn-primary inline-block">See what the audit covers →</Link>
      </div>

      <hr />

      {/* ── Group 5 ── */}
      <h2 id="group-5-brand-safety-exclusions">Group 5: Brand safety &amp; exclusions</h2>
      <p>
        This is the group with the sharpest 2026 upgrade. The campaign-level negative keyword cap jumping to 10,000 and the arrival of data/audience exclusions are genuinely new — PMax didn&apos;t give you that level of control before. Account-level negatives and brand exclusions are older, more mature controls, and most accounts I audit still haven&apos;t touched a single one of the five checks below since they were first set up — or ever.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">21</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Negative keywords set at the account level</p>
            <p className="text-sm text-gray-500 mb-1">Where: Account-level negative keyword lists</p>
            <p className="text-sm text-red-600 mb-0">Red flag: no list exists, or it hasn&apos;t been touched in 60+ days</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">22</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Negative keywords set at the campaign level</p>
            <p className="text-sm text-gray-500 mb-1">Where: Campaign → Negative keywords — up to{" "}
              <a href="https://support.google.com/google-ads/answer/15726455?hl=en" target="_blank" rel="noopener noreferrer">10,000 per campaign</a>
              , applying to the Search and Shopping inventory inside PMax (not Display, YouTube, Gmail, or Discover)</p>
            <p className="text-sm text-red-600 mb-0">Red flag: zero campaign-level negatives on a PMax campaign with 30+ days of spend history</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">23</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Brand exclusions configured where relevant</p>
            <p className="text-sm text-gray-500 mb-1">Where: Campaign settings →{" "}
              <a href="https://support.google.com/google-ads/answer/14505308?hl=en" target="_blank" rel="noopener noreferrer">Brand exclusions</a>
              {" "}— your own brand if PMax shouldn&apos;t be bidding on it, or competitor brand terms</p>
            <p className="text-sm text-red-600 mb-0">Red flag: PMax bidding on brand terms a Search brand campaign already covers, with no deliberate reason for the overlap</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">24</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Data/audience exclusions applied for existing customers when the goal is acquisition</p>
            <p className="text-sm text-gray-500 mb-1">Where: Audience signals → Exclusions — see{" "}
              <a href="https://support.google.com/google-ads/answer/16451273?hl=en" target="_blank" rel="noopener noreferrer">Google&apos;s guide to PMax exclusions</a>
            </p>
            <p className="text-sm text-red-600 mb-0">Red flag: budget going toward a Customer Match list of existing buyers when the stated goal is new-customer acquisition</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">25</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Placement and brand-safety settings reviewed for where ads show outside Search/Shopping</p>
            <p className="text-sm text-gray-500 mb-1">Where: Reports → Predefined reports → Performance Max campaigns placement</p>
            <p className="text-sm text-red-600 mb-0">Red flag: impressions next to unsuitable content with no exclusion list in place</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Red flag for the whole group: if you can&apos;t remember the last time you opened Brand exclusions or Negative keywords for this campaign, that&apos;s the answer — go check now, both take under 10 minutes.</p>
      </div>

      <hr />

      {/* ── Group 6 ── */}
      <h2 id="group-6-channels-reporting">Group 6: Channels &amp; reporting</h2>
      <p>
        Before January 2026, this group didn&apos;t exist — you simply couldn&apos;t see the Search/Shopping/Display/YouTube split inside a PMax campaign. Google announced{" "}
        <a href="https://blog.google/products/ads-commerce/channel-performance-reporting-coming-to-performance-max/" target="_blank" rel="noopener noreferrer">channel-level reporting</a>
        {" "}that month, and it&apos;s the single biggest visibility upgrade PMax has had since launch.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">26</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Channel-level report reviewed (Search, Search Partners, Display, YouTube, Discover, Gmail, Maps)</p>
            <p className="text-sm text-gray-500 mb-1">Where: Insights → Channel performance</p>
            <p className="text-sm text-red-600 mb-0">Red flag: 30%+ of budget going to Display/YouTube with nobody having decided that on purpose</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">27</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Channel spend trend tracked monthly, not checked once and forgotten</p>
            <p className="text-sm text-gray-500 mb-1">Where: Channel performance → historical view</p>
            <p className="text-sm text-red-600 mb-0">Red flag: never opened since the feature launched</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">28</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Asset-group- and asset-level channel breakdowns used to diagnose weak spots</p>
            <p className="text-sm text-gray-500 mb-1">Where: Channel performance drill-down</p>
            <p className="text-sm text-red-600 mb-0">Red flag: reacting to an aggregate CPA/ROAS number without ever seeing which channel is dragging it down</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">29</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Waze inventory relevance checked for store-goal campaigns with a physical location</p>
            <p className="text-sm text-gray-500 mb-1">Where: Store goals settings — Waze inventory is US-only at the time of writing, per{" "}
              <a href="https://support.google.com/google-ads/answer/16710258?hl=en" target="_blank" rel="noopener noreferrer">Google&apos;s rollout notes</a>
              , which say expansion beyond the US is planned for 2026</p>
            <p className="text-sm text-red-600 mb-0">Red flag: a US store-goal campaign bidding to Store Visits, Store Sales, or Local Actions Directions that has never checked whether Waze inventory turned itself on and whether the assets showing there actually make sense</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Group 7 ── */}
      <h2 id="group-7-budget-bidding">Group 7: Budget &amp; bidding</h2>
      <p>
        None of this is PMax-exclusive on paper, but PMax makes bad bidding decisions harder to catch — a Target ROAS set too aggressively doesn&apos;t just underspend, it can quietly shift budget toward Display impressions that are easier to hit the target on but don&apos;t build the business.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">30</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Bid strategy matches the campaign&apos;s stage</p>
            <p className="text-sm text-gray-500 mb-1">Where: Campaign settings → Bidding — Maximize Conversions to start, Target CPA/ROAS after 4-6 weeks of data</p>
            <p className="text-sm text-red-600 mb-0">Red flag: Target CPA/ROAS switched on day one with no conversion history behind it</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">31</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Target CPA/ROAS is realistic — based on historical performance, not a wish</p>
            <p className="text-sm text-gray-500 mb-1">Where: Bidding → Target history</p>
            <p className="text-sm text-red-600 mb-0">Red flag: a target 50%+ more aggressive than the current baseline</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">32</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Target changes made gradually — 10-20% at a time, at least 7-10 days apart</p>
            <p className="text-sm text-gray-500 mb-1">Where: Bid strategy change log</p>
            <p className="text-sm text-red-600 mb-0">Red flag: frequent large target swings inside a short window</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">33</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Minimum conversion volume in place before leaning on Smart Bidding</p>
            <p className="text-sm text-gray-500 mb-1">Where: Conversions (last 30 days) — Google&apos;s own recommendation is roughly 30 conversions/30 days for Target CPA and roughly 50 for Target ROAS</p>
            <p className="text-sm text-red-600 mb-0">Red flag: Target ROAS running on under 20 conversions a month</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">34</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Budget isn&apos;t the ceiling on your best-performing campaign</p>
            <p className="text-sm text-gray-500 mb-1">Where: Campaign → Budget status</p>
            <p className="text-sm text-red-600 mb-0">Red flag: &quot;Limited by budget&quot; on the profitable campaign while a weaker one spends its full budget every day</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Group 8 ── */}
      <h2 id="group-8-search-themes-audience-signals">Group 8: Search themes &amp; audience signals</h2>
      <p>
        Signals are the input PMax uses to start smart instead of cold. Skipping this group is the most common way I see accounts leave PMax to guess.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">35</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Search themes filled in where the campaign has asset groups</p>
            <p className="text-sm text-gray-500 mb-1">Where: Asset group → Search themes — Google raised the cap to{" "}
              <a href="https://support.google.com/google-ads/answer/16451273?hl=en" target="_blank" rel="noopener noreferrer">50 per asset group in 2025</a>, up from 25. Search themes live at the asset-group level, so a feed-only PMax campaign — pure Shopping feed, no asset groups — has none to fill in. That&apos;s expected, not a gap.</p>
            <p className="text-sm text-red-600 mb-0">Red flag: empty on a lead-gen or non-retail PMax campaign that does have asset groups and would benefit from them</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">36</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Audience signals added and kept current</p>
            <p className="text-sm text-gray-500 mb-1">Where: Asset group → Audience signals — Customer Match, website visitors, in-market segments</p>
            <p className="text-sm text-red-600 mb-0">Red flag: zero signals, the algorithm starting cold every time</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">37</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">First-party data prioritized ahead of generic in-market audiences</p>
            <p className="text-sm text-gray-500 mb-1">Where: Audience signals composition — email lists and site visitors first</p>
            <p className="text-sm text-red-600 mb-0">Red flag: only generic in-market audiences in the signal, no Customer Match list at all</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">38</span>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Insights tab checked regularly for audience and search-category performance</p>
            <p className="text-sm text-gray-500 mb-1">Where: Insights → Audience insights</p>
            <p className="text-sm text-red-600 mb-0">Red flag: never opened since launch</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Cadence ── */}
      <h2 id="how-often-to-run-this">How often to run this checklist</h2>
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Quarterly deep pass + monthly quick check</p>
        <p className="text-blue-800 text-base mb-0">
          Run all 38 points once a quarter. Between deep passes, a monthly 10-minute check covers the items that drift fastest: negative keywords (21-22), channel report (26), budget status (34), asset ratings (11), and brand exclusions (23). Same cadence as the{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-checklist" } }} className="underline font-semibold">general account audit</Link>
          , for consistency across your whole review process. For the quarterly pass the easiest route is{" "}
          <Link href="/resursi/pmax-check" className="underline font-semibold">PMax Check</Link>
          , which saves your answers so next time you can see what has moved since.
        </p>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2 id="faq">Frequently Asked Questions About Performance Max Audits</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Do search themes apply to feed-only Performance Max campaigns?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            No. Search themes are set inside an asset group&apos;s Signals, and a feed-only PMax campaign — one running purely off a Merchant Center feed, with no asset groups — doesn&apos;t have that structure. If your PMax campaign is feed-only, checkpoint 35 doesn&apos;t apply; skip straight to audience signals in Group 8, which work the same way regardless.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How many listing groups is too many?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            There&apos;s no hard Google-published ceiling for what&apos;s &quot;too many,&quot; but in practice, once you&apos;re carving out hundreds of listing groups by attribute combinations nobody reviews individually, you&apos;ve added granularity without adding control. A cleaner signal: if a listing group has never had its own bid or exclusion decision made against it, it&apos;s probably too granular. Segment by what you&apos;ll actually act on — custom label tier, product type, margin band — not by every possible attribute.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What changed in Performance Max reporting in 2026?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            The biggest change is channel-level reporting, announced in January 2026: a new Channel performance view that breaks PMax spend and conversions down by Search, Search Partners, Display, YouTube, Discover, Gmail, and Maps — at the campaign, asset-group, and asset level. Before this, PMax reported almost everything in aggregate, which made it impossible to tell whether your budget was actually going where you thought it was.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How is a PMax audit different from auditing a Search campaign?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            A Search audit works keyword by keyword: Quality Score, match types, Search Terms Report, per-keyword bids. PMax doesn&apos;t expose most of that — you audit asset groups instead of ad groups, feed quality instead of ad copy alone, and channel-level reporting instead of a device or network breakdown. The underlying questions are similar (is tracking accurate, is budget going where it should, is targeting under control), but almost every &quot;where to check&quot; answer is different.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How often should I audit a Performance Max campaign?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            A full pass through all 38 checkpoints once a quarter, plus a lighter monthly check on the items that drift fastest — negative keywords, the channel report, budget status, asset ratings, and brand exclusions. Audit immediately outside that schedule if performance drops suddenly, you&apos;re taking over the account from another agency, or you just changed the conversion goal or bid strategy.
          </div>
        </details>
      </div>

      <hr />

      {/* ── Conclusion + CTA ── */}
      <h2 id="conclusion">Conclusion</h2>
      <p>
        Performance Max earned its black-box reputation honestly, but most of that reputation is two years out of date. Negative keywords, brand exclusions, data exclusions, and channel-level reporting turned it into a campaign type with real, checkable controls — the account that hasn&apos;t revisited any of the 38 points above since PMax launched is running on 2023 assumptions about a 2026 product.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Want a second set of eyes on your PMax account?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          The Deep Audit + Action Plan runs this checklist and the full 100+ point account audit together, with a prioritized action plan you can hand to whoever manages the account. From $500.
        </p>
        <Link href="/usluge/google-ads-audit" className="btn-secondary inline-block">See what the audit covers</Link>
        <p className="text-slate-400 text-xs mt-4 mb-0">
          Prefer to run it yourself first? Grab the{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-checklist" }, hash: "get-the-checklist" }} className="underline text-slate-300">free 105-point account audit checklist (.xlsx)</Link>
          {" "}and use this post alongside it for the PMax-specific detail.
        </p>
      </div>

      <hr />

      {/* ── Related guides ── */}
      <h2 id="related-guides">Related Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max Campaigns: Complete Guide</p>
          <p className="text-xs text-gray-500 mb-0">Structure, asset groups, bidding, and when PMax makes sense</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-checklist" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Audit Checklist</p>
          <p className="text-xs text-gray-500 mb-0">100+ points for a full, account-wide review</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Campaigns Guide</p>
          <p className="text-xs text-gray-500 mb-0">Feed optimization, structure, and bidding for Shopping</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking for Google Ads</p>
          <p className="text-xs text-gray-500 mb-0">GTM, GA4, and Google Ads tag setup, done right</p>
        </Link>

        <Link href="/usluge/performance-max" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max Management</p>
          <p className="text-xs text-gray-500 mb-0">Ongoing PMax setup and optimization as a service</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negative-keywords-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negative Keywords Strategy</p>
          <p className="text-xs text-gray-500 mb-0">Match types, organization, and process for Search and PMax</p>
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
