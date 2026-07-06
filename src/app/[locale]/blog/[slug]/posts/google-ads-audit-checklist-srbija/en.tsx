import { Link } from "@/i18n/navigation";

export default function GoogleAdsAuditChecklistSrbijaEN() {
  return (
    <>
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Quick answer</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          A 50-item Google Ads audit checklist across 10 categories. The average account that hasn&apos;t been audited in 6+ months wastes 15-25% of its budget inefficiently — this checklist pinpoints exactly where.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">50</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">checkpoints</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">10</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">categories</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">30 min</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">quick audit</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">15-25%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">average wasted spend</p>
          </div>
        </div>
      </div>

      {/* ── TOC ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#why" className="block py-1 text-base text-gray-700 hover:text-primary underline">Why an audit is critical right now (2026)</a></li>
          <li><a href="#what-it-covers" className="block py-1 text-base text-gray-700 hover:text-primary underline">What a good audit covers — 10 categories</a></li>
          <li><a href="#category-1" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 1: Account Structure (5 items)</a></li>
          <li><a href="#category-2" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 2: Conversion Tracking (5 items)</a></li>
          <li><a href="#category-3" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 3: Campaign Settings (5 items)</a></li>
          <li><a href="#category-4" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 4: Keywords &amp; Search Terms (5 items)</a></li>
          <li><a href="#category-5" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 5: Ads &amp; Extensions (5 items)</a></li>
          <li><a href="#category-6" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 6: Audiences &amp; Remarketing (5 items)</a></li>
          <li><a href="#category-7" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 7: Bidding Strategy (5 items)</a></li>
          <li><a href="#category-8" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 8: Budget &amp; Allocation (5 items)</a></li>
          <li><a href="#category-9" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 9: Tracking &amp; Attribution (5 items)</a></li>
          <li><a href="#category-10" className="block py-1 text-base text-gray-700 hover:text-primary underline">Category 10: Reporting &amp; Communication (5 items)</a></li>
          <li><a href="#quick-audit" className="block py-1 text-base text-gray-700 hover:text-primary underline">30-minute quick audit — what to check first</a></li>
          <li><a href="#scoring" className="block py-1 text-base text-gray-700 hover:text-primary underline">Scoring system — how to grade your result</a></li>
          <li><a href="#mistakes" className="block py-1 text-base text-gray-700 hover:text-primary underline">The most common mistakes I see in Serbia</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">FAQ</a></li>
        </ol>
      </nav>

      {/* ── Intro ── */}
      <h2 id="why">Why an audit is critical right now (2026 perspective)</h2>
      <p>
        When I take over a new account, <strong>a detailed audit is always the first thing I run</strong>. In practice, over 90% of accounts I review share the same fundamental problems: conversion tracking that doesn&apos;t work properly, budget leaking into irrelevant search terms, poorly organized campaigns, or Smart Bidding trying to optimize on too little data.
      </p>
      <p>
        What&apos;s different in 2026: Google has deprecated Standard Shopping for eCommerce — Performance Max is now the default. Smart Bidding requires real conversion value data (not just a conversion count). Consent Mode v2 is mandatory under GDPR and Serbia&apos;s local data-protection law (ZZPL). If your account hasn&apos;t been optimized in the last <strong>6 months</strong>, odds are high that <strong>15-25% of your budget is burning with zero conversions</strong>.
      </p>
      <p>
        Concrete example: an eCommerce account I took over in Q1 2026 was spending 22% of its budget on &quot;discovery&quot; placements inside mobile apps — with zero conversions. Identified in 20 minutes of auditing, fixed in 5.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Recommended audit cadence</p>
        <p className="text-blue-800 text-base mb-0">
          <strong>A quarterly deep audit</strong> (3-4 hours, all 50 items, full report) + <strong>a monthly quick check</strong> (30 minutes, the top 10 priority items). Additional triggers: taking over an account, a business model change, or a performance drop &gt;20% week-over-week.
        </p>
      </div>

      <p>
        If you&apos;re looking for a <Link href="/kontakt" className="underline">Google Ads audit service</Link> that covers all of these categories, I&apos;m happy to walk you through exactly what you get and how the process works.
      </p>

      <hr />

      {/* ── What it covers ── */}
      <h2 id="what-it-covers">What a good audit covers — 10 categories</h2>
      <p>
        A professional Google Ads audit isn&apos;t improvised — it&apos;s a <strong>structured checklist of 50 control points</strong> across 10 categories. Every category has Critical items (P1) you must check for the account to function at all, and Optimization items (P2) for more advanced accounts.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">#</th>
              <th className="py-3 px-3 font-heading font-semibold">Category</th>
              <th className="py-3 px-3 font-heading font-semibold">Focus</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">1</td>
              <td className="py-3 px-3 font-medium">Account Structure</td>
              <td className="py-3 px-3 text-gray-600">Campaign organization, ad groups, MCC</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">2</td>
              <td className="py-3 px-3 font-medium">Conversion Tracking</td>
              <td className="py-3 px-3 text-gray-600">Tag setup, dedupe, value tracking</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">3</td>
              <td className="py-3 px-3 font-medium">Campaign Settings</td>
              <td className="py-3 px-3 text-gray-600">Geo, device, language, network</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">4</td>
              <td className="py-3 px-3 font-medium">Keywords &amp; Search Terms</td>
              <td className="py-3 px-3 text-gray-600">Match types, negatives, search term mining</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">5</td>
              <td className="py-3 px-3 font-medium">Ads &amp; Extensions</td>
              <td className="py-3 px-3 text-gray-600">RSA quality, sitelinks, callouts</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">6</td>
              <td className="py-3 px-3 font-medium">Audiences &amp; Remarketing</td>
              <td className="py-3 px-3 text-gray-600">List health, observation vs targeting</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">7</td>
              <td className="py-3 px-3 font-medium">Bidding Strategy</td>
              <td className="py-3 px-3 text-gray-600">Smart Bidding readiness, tCPA/tROAS calibration</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">8</td>
              <td className="py-3 px-3 font-medium">Budget &amp; Allocation</td>
              <td className="py-3 px-3 text-gray-600">Pacing, daily limits, lost IS (budget)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">9</td>
              <td className="py-3 px-3 font-medium">Tracking &amp; Attribution</td>
              <td className="py-3 px-3 text-gray-600">GA4 link, attribution model, data quality</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">10</td>
              <td className="py-3 px-3 font-medium">Reporting &amp; Communication</td>
              <td className="py-3 px-3 text-gray-600">KPI definitions, frequency, actionability</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── Category 1 ── */}
      <h2 id="category-1">Category 1: Account Structure (5 items)</h2>
      <p>
        Poor structure kills performance before anything else even gets a chance. Good structure means weak spots get identified quickly and optimized easily. Nearly 70% of the Serbia-focused accounts I&apos;ve audited had brand and non-brand terms in the same campaign — which destroys ROAS attribution.
      </p>

      <h3>1.1 — MCC access and naming consistency</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Do you have access to the account through an MCC, not just &quot;user access&quot;?</li>
        <li>MCC + sub-account naming consistency — is there a clear pattern?</li>
        <li>&quot;Manager linked accounts&quot; — are they all active? (the old agency link is often forgotten)</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Red flag</p>
        <p className="text-yellow-800 text-base mb-0">
          If you&apos;re taking over an account and the previous agency is still linked on the MCC — escalate immediately. Smart Bidding signals get mixed between accounts.
        </p>
      </div>

      <h3>1.2 — Campaigns grouped by objective</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Is every campaign clearly defined by a single <strong>objective</strong> (Sales / Leads / Awareness)?</li>
        <li>Are different campaign types (Search, Shopping, PMax, Display) kept in <strong>separate</strong> campaigns?</li>
        <li>Are <strong>brand vs non-brand search</strong> split into two campaigns?</li>
      </ul>

      <h3>1.3 — Ad groups: SKAG vs STAG vs hybrid</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Single Keyword Ad Groups (SKAG) — used where you have high-intent keywords (&gt;3 conversions/month)?</li>
        <li>Single Theme Ad Groups (STAG) — used where you have closely related variations?</li>
        <li>&quot;Catch-all&quot; ad groups with 50+ keywords of mixed intent — red flag</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Rule of thumb</p>
        <p className="text-blue-800 text-base mb-0">
          If one ad group contains keywords with a CPC range that differs by &gt;3x (e.g. $0.50 vs $2.00), that&apos;s a signal to split. Grouping expensive and cheap keywords together means bidding can&apos;t work efficiently for either.
        </p>
      </div>

      <h3>1.4 — Naming convention</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Do campaigns follow the format <code>[Geo]_[Type]_[Objective]_[Notes]</code>? Example: <code>RS_Search_Brand_2026Q2</code></li>
        <li>Do ad groups follow <code>[Match Type]_[Theme]</code>? Example: <code>Exact_Audit_Belgrade</code></li>
        <li>Is the convention consistent between old and new campaigns?</li>
      </ul>

      <h3>1.5 — Active vs paused campaign cleanup</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>How many paused campaigns does the account have? Are they older than 6 months?</li>
        <li>Can they be archived (Google doesn&apos;t permanently delete without a &quot;removed&quot; flag)?</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">From experience</p>
        <p className="text-blue-800 text-base mb-0">
          An account with 30+ paused campaigns is a sign nobody is cleaning up. That&apos;s technical debt that slows down reporting and dashboard reviews. An account that feels chaotic internally — that shows up in the quality of the optimizations too.
        </p>
      </div>

      <hr />

      {/* ── Category 2 ── */}
      <h2 id="category-2">Category 2: Conversion Tracking (5 items)</h2>
      <p>
        Bad conversion tracking means everything downstream is meaningless. Auto-bidding can&apos;t learn, ROAS is an illusion, and optimization misses the real target. This is the most critical category of any audit — without valid conversions, the rest of the checklist doesn&apos;t matter.
      </p>
      <p>
        For a detailed implementation walkthrough, see: <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="underline">Conversion Tracking for Google Ads</Link>, where I cover GTM setup, deduplication, and Enhanced Conversions step by step.
      </p>

      <h3>2.1 — Conversion actions setup</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>How many conversion actions are defined? (ideally 5-10, not 50)</li>
        <li>Which ones are marked as <strong>Primary</strong> (counted in the &quot;Conversions&quot; column)?</li>
        <li>Is every conversion a real business outcome (purchase / lead / call), not a micro-conversion (page view)?</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Red flag</p>
        <p className="text-yellow-800 text-base mb-0">
          If &quot;Page View&quot; is marked as the Primary conversion, Smart Bidding is optimizing for the wrong thing and burning budget on visits, not actual customers.
        </p>
      </div>

      <h3>2.2 — Tag setup verification</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Is the Google Ads conversion tag active on every thank-you/success page?</li>
        <li>Is there deduplication? (e.g. if you run GTM + a hardcoded gtag, the same event can fire twice)</li>
        <li>Tag Assistant: test a real conversion — do you see 1 hit, or 2?</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">The most common mistake I see in Serbia</p>
        <p className="text-blue-800 text-base mb-0">
          Clients run WordPress + a plugin that already fires a conversion tag, then add GTM on top, then also hardcode Google Ads code manually — triple counting. I see this constantly. Result: Smart Bidding believes it has 3x more conversions than it actually does.
        </p>
      </div>

      <h3>2.3 — Conversion values (not just a count)</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Does every transaction send a <strong>value</strong> (real currency amount), not just &quot;conversion happened&quot;?</li>
        <li>Are you using a <strong>dynamic value</strong> (actual order amount), not a fixed one (e.g. &quot;$10&quot; for every order)?</li>
        <li>For leads, has a <strong>proxy value</strong> been assigned (e.g. average deal size × close rate)?</li>
      </ul>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          From experience: an eCommerce client sending only &quot;1&quot; as the conversion value meant tROAS bidding couldn&apos;t tell a $50 order from a $500 order apart. Once we added dynamic value, ROAS jumped from 2.1x to 3.4x in 30 days.
        </p>
      </div>

      <h3>2.4 — Conversion windows</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li><strong>Click-through window</strong>: 30 days (default) — is that adequate for your sales cycle?</li>
        <li><strong>View-through window</strong>: 1 day by default — often too short</li>
        <li>B2B with a 60+ day sales cycle needs a <strong>90-day click-through window</strong> — otherwise you lose attribution</li>
      </ul>

      <h3>2.5 — Enhanced Conversions + Consent Mode v2</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Is Enhanced Conversions for Web set up? (mandatory in 2026 for privacy-safe measurement)</li>
        <li>Is Consent Mode v2 implemented? (cookie banner integration)</li>
        <li>Has server-side tracking been considered for high-value conversions?</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-base mb-0">
          Enhanced Conversions turned off = you lose 10-30% of conversions in attribution. Consent Mode v2 turned off = potential fines under GDPR / Serbia&apos;s ZZPL. Both are mandatory for 2026.
        </p>
      </div>

      <hr />

      {/* ── Category 3 ── */}
      <h2 id="category-3">Category 3: Campaign Settings (5 items)</h2>
      <p>
        Google Ads&apos; default settings are bad — designed for Google to earn more, not for you to get better results. Over 70% of the new accounts I review still run on defaults that waste budget in the wrong places.
      </p>

      <h3>3.1 — Geo targeting</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Are you targeting all of Serbia, or specific municipalities/cities?</li>
        <li><strong>&quot;Presence&quot; vs &quot;Presence or interest&quot;</strong> — which one is selected?</li>
        <li>Excluded locations — do any exist (e.g. excluding areas you don&apos;t deliver to)?</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Default trap</p>
        <p className="text-yellow-800 text-base mb-0">
          Google&apos;s default is &quot;Presence or interest&quot; — meaning someone abroad searching &quot;Serbia&quot; can see your ad. You almost always want <strong>Presence</strong> (geo-targeting based on the user&apos;s actual location, not their search intent).
        </p>
      </div>

      <h3>3.2 — Language targeting</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Both &quot;Serbian&quot; and &quot;English&quot; selected? (many Serbian users have their Chrome set to English)</li>
        <li>&quot;All languages&quot; trap — if you target Serbia with all languages selected, you show up on Russian/Arabic queries that happen to match your keywords</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">From experience</p>
        <p className="text-blue-800 text-base mb-0">
          A client running &quot;Plumber Belgrade&quot; targeting had Language set to &quot;All&quot; — 8% of impressions were going to Arabic/Russian search terms. Switching to Serbian+English cut that waste by 8%.
        </p>
      </div>

      <h3>3.3 — Network settings (Search Partners + Display)</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Search Partners — enabled? (I don&apos;t recommend it for most accounts — quality is lower)</li>
        <li>Display Network expansion on Search campaigns — enabled? (turn it off)</li>
        <li>&quot;Apps&quot; placements — segregated?</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Rule</p>
        <p className="text-yellow-800 text-base mb-0">
          A Search campaign should never have Display Network expansion turned on. Display impressions are, 99% of the time, bot/junk traffic that burns budget without converting.
        </p>
      </div>

      <h3>3.4 — Device bid adjustments</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>How differently do Mobile vs Desktop vs Tablet convert?</li>
        <li>Is there a bid adjustment based on <strong>actual data</strong> (the last 90 days)?</li>
        <li>Tablet is often 40-60% weaker than mobile/desktop — apply a -50% adjustment, or turn it off entirely</li>
      </ul>

      <h3>3.5 — Ad rotation</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Is &quot;Optimize&quot; selected (Google&apos;s default)? Or &quot;Rotate indefinitely&quot;?</li>
        <li>&quot;Rotate indefinitely&quot; is a trap — it doesn&apos;t test fairly, showing weak and strong ads equally</li>
        <li>Default &quot;Optimize&quot; is fine as long as you have enough traffic volume</li>
      </ul>

      <hr />

      {/* ── Category 4 ── */}
      <h2 id="category-4">Category 4: Keywords &amp; Search Terms (5 items)</h2>
      <p>
        Keywords aren&apos;t what you enter — they&apos;re the <strong>search terms</strong> people actually type. Every audit needs to dig into the Search Terms Report and identify where the budget is going. For serious keyword research, see: <Link href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }} className="underline">Google Ads Keyword Guide</Link>.
      </p>

      <h3>4.1 — Match type audit</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li><strong>Broad match keywords</strong> — how many are there? What % of spend?</li>
        <li>Phrase match — is it the primary match type?</li>
        <li>Exact match — used as a defense for high-intent terms?</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">2026 update</p>
        <p className="text-blue-800 text-base mb-0">
          Broad match is much better than it was 2-3 years ago, but only if you have Smart Bidding (tCPA/tROAS), 30+ conversions in the last 30 days, and a robust negative keyword list. Without all three, broad match just burns money.
        </p>
      </div>

      <h3>4.2 — Search Terms Report — junk audit</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Go to Search Terms (last 30 days), sort by clicks descending</li>
        <li>Identify search terms that are off-topic, competitor brand names, &quot;free&quot;-seeking, or slang that doesn&apos;t belong</li>
        <li>Add the top 20 junk terms as <strong>negative keywords</strong> immediately</li>
      </ul>

      <h3>4.3 — Negative keyword lists</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Is there a <strong>shared negative keyword list</strong> at the MCC level?</li>
        <li>Is it organized by category (irrelevant, competitor, low-intent, geo)?</li>
        <li>When was it last updated?</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">From experience</p>
        <p className="text-blue-800 text-base mb-0">
          A client with zero negative keywords was burning 25% of spend on irrelevant queries. After 30 minutes of work on the negative list, CTR rose 40% and CPA dropped 18%. For a starting point, see the <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="text-blue-700 underline">complete negative keywords list</Link> organized by category.
        </p>
      </div>

      <h3>4.4 — Single keyword duplicates</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Is the same keyword present in <strong>multiple ad groups</strong>?</li>
        <li>Google picks where to show it — but this cannibalizes CTR and quality</li>
        <li>Use <strong>Auction Insights</strong> to spot self-cannibalization</li>
      </ul>

      <h3>4.5 — Keyword expansion ideas</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Search Terms Report — search terms that convert but aren&apos;t in your keyword list</li>
        <li>Promote them to <strong>exact match</strong> as a new variant</li>
        <li>Repeat this process monthly</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Pro tip</p>
        <p className="text-blue-800 text-base mb-0">
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }} className="text-blue-700 underline">Quality Score</Link> depends directly on keyword relevance — the better you organize ad groups and match types, the better QS you get, and the lower CPC you pay.
        </p>
      </div>

      <hr />

      {/* ── Category 5 ── */}
      <h2 id="category-5">Category 5: Ads &amp; Extensions (5 items)</h2>
      <p>
        Ads are what potential customers actually see — but in practice, over 50% of the accounts I audit have &quot;Poor&quot; Ad Strength and barely any extensions. That&apos;s a missed opportunity: better ads mean a higher CTR, which means a lower CPC and more conversions.
      </p>

      <h3>5.1 — RSA quality</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>A minimum of <strong>3 RSAs per ad group</strong> (Google&apos;s preference)</li>
        <li>Every RSA using the max: <strong>15 headlines + 4 descriptions</strong></li>
        <li>&quot;Ad Strength&quot; rating — minimum <strong>Good</strong>, aim for <strong>Excellent</strong></li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">2026 reality + RSA guide</p>
        <p className="text-blue-800 text-base mb-0">
          Google now factors AI-generated assets directly into RSA composition. You can opt out, but most clients see a boost when they leave them on. For a full setup walkthrough, see: <Link href={{ pathname: "/blog/[slug]", params: { slug: "rsa-vodic" } }} className="text-blue-700 underline">RSA Guide</Link>.
        </p>
      </div>

      <h3>5.2 — Headline variety</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Do your headlines cover <strong>different angles</strong>: benefit, urgency, social proof, USP, CTA?</li>
        <li>Dynamic Keyword Insertion (DKI) — used where relevant?</li>
        <li>Not too many pinned headlines (leave Google room to test)?</li>
      </ul>

      <h3>5.3 — Sitelinks</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>A minimum of <strong>6 sitelinks per campaign</strong> (Google can display all of them if they&apos;re relevant)</li>
        <li>Is the <strong>description text</strong> filled in on every one? You&apos;re losing SERP real estate if it&apos;s blank</li>
        <li>Are sitelinks <strong>specific</strong> to the campaign, not a generic &quot;About us&quot; on a conversion-focused campaign?</li>
      </ul>

      <h3>5.4 — Callouts + Structured Snippets</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>A minimum of <strong>8 callouts</strong> (Google shows 4-6 at a time, and tests the rest)</li>
        <li>Structured Snippets — which category is selected? (&quot;Brands&quot;, &quot;Services&quot;, &quot;Types&quot;)</li>
        <li>Promotion extension — active if you have a seasonal offer?</li>
      </ul>

      <h3>5.5 — Image extensions + Logo extensions</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Are image extensions set up?</li>
        <li>Logo extension (if your brand is verified)?</li>
        <li>Images: high quality, square ratio 1:1 + landscape 1.91:1</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">From experience</p>
        <p className="text-blue-800 text-base mb-0">
          A client who added image extensions saw a +12% CTR boost on a Search campaign within 14 days. Minimal setup effort, concrete result.
        </p>
      </div>

      <hr />

      {/* ── Category 6 ── */}
      <h2 id="category-6">Category 6: Audiences &amp; Remarketing (5 items)</h2>
      <p>
        Remarketing is the easiest win in Google Ads — people who&apos;ve already visited your site convert 3-5x better than cold traffic. For a full overview of strategies, see: <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="underline">Remarketing strategies</Link>.
      </p>

      <h3>6.1 — Remarketing list health</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Is the &quot;All Visitors&quot; list active with a minimum of <strong>1,000 users</strong>?</li>
        <li>Is a &quot;Cart Abandoners&quot; list (eCommerce) defined with a 3-7 day window?</li>
        <li>Is any list older than <strong>540 days</strong> (max retention) in need of a refresh?</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Red flag</p>
        <p className="text-yellow-800 text-base mb-0">
          A list showing &quot;Currently empty&quot; or &quot;Below threshold&quot; takes up a slot in the account but does nothing useful.
        </p>
      </div>

      <h3>6.2 — Customer Match</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Has an email list been uploaded? (CRM data, last 12 months)</li>
        <li>&quot;First-party data&quot; is an increasing advantage in 2026&apos;s privacy-first era</li>
        <li>Have lookalike audiences been created?</li>
      </ul>

      <h3>6.3 — Audience Targeting vs Observation</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Are audiences set to <strong>Observation mode</strong> (just monitor performance) or <strong>Targeting</strong> (only show to them)?</li>
        <li>Most campaigns: Observation (wider reach, tracks who converts better)</li>
        <li>Specific cases: Targeting (e.g. a dedicated-budget retargeting campaign)</li>
      </ul>

      <h3>6.4 — Excluded audiences</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Are &quot;Existing customers&quot; excluded from &quot;new customer&quot; campaigns?</li>
        <li>Are &quot;bounced visitors &lt;10s on site&quot; (low intent) excluded?</li>
        <li>Have saved audiences older than 12 months been cleaned up?</li>
      </ul>

      <h3>6.5 — Demographic exclusions</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Age groups — is there a segment that <strong>never</strong> converts?</li>
        <li>B2B SaaS: exclude under-18 or 65+ segments</li>
        <li>Gender and parental status — relevant for certain product categories</li>
      </ul>

      <hr />

      {/* ── Category 7 ── */}
      <h2 id="category-7">Category 7: Bidding Strategy (5 items)</h2>
      <p>
        Smart Bidding is powerful, but only if you have enough conversions for the algorithm to learn from reliably. Over 40% of the accounts I audit run Smart Bidding with fewer than 10 conversions a month — that simply can&apos;t work. For a full strategy overview, see: <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-vodic" } }} className="underline">Smart Bidding Guide</Link>.
      </p>

      <h3>7.1 — Smart Bidding readiness</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>A minimum of <strong>30 conversions in the last 30 days</strong> for tCPA/tROAS?</li>
        <li><strong>15+ conversions</strong> = tCPA can work at the ad group level (as an experiment)</li>
        <li><strong>Fewer than 10 conversions</strong> = manual strategies (Manual CPC, Maximize Clicks) work better</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Rule</p>
        <p className="text-yellow-800 text-base mb-0">
          Smart Bidding without enough data is just burning budget. You need data first. Better to stay on Maximize Conversions with no target and gather signal than to force tCPA without sufficient conversions.
        </p>
      </div>

      <h3>7.2 — Target CPA / Target ROAS calibration</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>What is tCPA currently set to? Does it reflect a <strong>realistic business target</strong>, or wishful thinking?</li>
        <li>Reality check: a $10 tCPA target with an actual CPA of $30 isn&apos;t working — it needs to be relaxed</li>
        <li>Learning period: allow 7-14 days after any bid change before evaluating results</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">From experience</p>
        <p className="text-blue-800 text-base mb-0">
          A client with a tCPA of $8 that was never being hit — once we reset it to a more realistic $15, conversion volume grew 3.2x in 30 days. The algorithm got room to work and found conversions it hadn&apos;t even been bidding on before.
        </p>
      </div>

      <h3>7.3 — Bid adjustments</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Is a <strong>day-of-week + hour-of-day</strong> schedule in place?</li>
        <li>Are there location bid adjustments for high-converting regions?</li>
        <li>Device bid adjustments (see 3.4)?</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Common miss</p>
        <p className="text-blue-800 text-base mb-0">
          A B2B account running 24/7, but conversions happen only on weekdays 9am-6pm. A -100% bid outside that window = a 30% cost reduction with 0% fewer conversions.
        </p>
      </div>

      <h3>7.4 — Portfolio bidding strategies</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Are there portfolio strategies (e.g. tCPA across multiple campaigns)?</li>
        <li>&quot;Group bidding&quot; for similar campaigns?</li>
        <li>Portfolio strategies can aggregate conversions for a better learning period</li>
      </ul>

      <h3>7.5 — Seasonality adjustments</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Black Friday, Christmas, Valentine&apos;s Day, Mother&apos;s Day — are these set up?</li>
        <li>Category-specific seasonality (e.g. school holidays for parent-targeted services)?</li>
        <li>Manual seasonality adjustments applied &gt;7 days before the event?</li>
      </ul>

      <hr />

      {/* ── Category 8 ── */}
      <h2 id="category-8">Category 8: Budget &amp; Allocation (5 items)</h2>
      <p>
        Budget allocation is one of the most common mistakes — the best campaigns are &quot;Limited by budget&quot; while the worst campaigns spend their full budget. That&apos;s like giving your best salesperson the fewest resources.
      </p>

      <h3>8.1 — Budget pacing</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>&quot;Lost IS (budget)&quot; — how high is it over the last 30 days?</li>
        <li>If &gt;10%, budget is capping that campaign&apos;s real potential</li>
        <li>How often is the &quot;daily limit&quot; hit?</li>
      </ul>

      <h3>8.2 — Shared budgets</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Are there shared budgets (multiple campaigns sharing one budget)?</li>
        <li>Is the split fair, or does one campaign dominate?</li>
      </ul>

      <h3>8.3 — Lost IS (rank)</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>How high is &quot;Lost IS (rank)&quot;?</li>
        <li>If &gt;20%, ad rank is low (Quality Score, bid, ad relevance)</li>
        <li>Action: improve ad relevance, raise the bid, or both</li>
      </ul>

      <h3>8.4 — Top vs Other position</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>What&apos;s the &quot;Top of Page&quot; vs &quot;Other&quot; rate?</li>
        <li>For high-intent commercial queries you want <strong>&gt;80% Top of Page</strong></li>
        <li>If it&apos;s below 50%, you&apos;re missing out on top placements</li>
      </ul>

      <h3>8.5 — Budget reallocation between campaigns</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Which campaign has the best <strong>CPA/ROAS per dollar of spend</strong>?</li>
        <li>Is that where most of the budget is going?</li>
        <li>Bad pattern: budget split &quot;fairly&quot; across campaigns — but conversions aren&apos;t distributed fairly</li>
      </ul>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">The 80/20 rule for budget</p>
        <p className="text-base text-yellow-900 mb-0">The top 20% of your campaigns by efficiency should get 60-70% of the budget. The rest gets a minimal testing budget or gets paused until it proves itself.</p>
      </div>

      <hr />

      {/* ── Category 9 ── */}
      <h2 id="category-9">Category 9: Tracking &amp; Attribution (5 items)</h2>
      <p>
        Tracking and attribution are the foundation of every decision you make. Without accurate data, every optimization is essentially a guess.
      </p>

      <h3>9.1 — GA4 link</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Is Google Ads linked to GA4?</li>
        <li>Is &quot;auto-tagging&quot; enabled (the GCLID parameter)?</li>
        <li>Is a GA4 → Google Ads conversion import set up?</li>
      </ul>

      <h3>9.2 — Attribution model</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>What&apos;s the current model? Last Click? Data-Driven? Position-Based?</li>
        <li>In 2026, <strong>Data-Driven</strong> is the default and is usually the best choice</li>
        <li>Have you tested different models and compared the outcomes?</li>
      </ul>

      <h3>9.3 — UTM parameters</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Do manual UTMs on links override Google Ads auto-tagging?</li>
        <li>Is the format consistent (utm_source=google, utm_medium=cpc)?</li>
      </ul>

      <h3>9.4 — Cross-device tracking</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>&quot;Signed-in users&quot; — Google has cross-device data for them</li>
        <li>Is a conversion on desktop after a mobile click getting attributed correctly?</li>
      </ul>

      <h3>9.5 — Server-side conversion tracking</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Has server-side tracking been considered for high-value conversions (&gt;$50)?</li>
        <li>It helps in the privacy era (cookie deprecation)</li>
        <li>Setup: GTM Server Container, or a direct API call</li>
      </ul>

      <hr />

      {/* ── Category 10 ── */}
      <h2 id="category-10">Category 10: Reporting &amp; Communication (5 items)</h2>
      <p>
        Reporting and communication are the last category, but not the least important — without actionable reporting, even a perfect account can&apos;t keep improving long-term.
      </p>

      <h3>10.1 — KPI definition</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>What is the primary KPI? (ROAS, CPA, phone calls...)</li>
        <li>Do all stakeholders share the <strong>same definition</strong>?</li>
        <li>Bad pattern: marketing tracks ROAS, but finance knows returns eat 15% of revenue — the real ROAS is different</li>
      </ul>

      <h3>10.2 — Reporting frequency</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Does a monthly report exist?</li>
        <li>Is there a weekly check-in?</li>
        <li>Is there a real-time dashboard (Looker Studio, Data Studio)?</li>
      </ul>

      <h3>10.3 — Anomaly detection</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Is there a system that flags a <strong>performance drop &gt;30% week-over-week</strong>?</li>
        <li>Are email alerts set up?</li>
        <li>Who receives them?</li>
      </ul>

      <h3>10.4 — Documented learnings</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Is there a <strong>decision log</strong> (what was tested, what worked)?</li>
        <li>Bad pattern: &quot;We tested something three months ago, don&apos;t remember the result&quot;</li>
        <li>Good pattern: a Notion page or Google Doc with hypotheses, experiments, and outcomes</li>
      </ul>

      <h3>10.5 — Client / stakeholder communication</h3>
      <p><strong>What to check:</strong></p>
      <ul>
        <li>Does the client/stakeholder get <strong>actionable</strong> insights, not just numbers?</li>
        <li>&quot;Conversion volume +12%&quot; = not actionable</li>
        <li>&quot;Conversion volume +12% because we added 15 negative keywords and cut waste — next month we&apos;re planning X&quot; = actionable</li>
      </ul>

      <hr />

      {/* ── Quick audit ── */}
      <h2 id="quick-audit">30-minute quick audit — what to check first</h2>
      <p>
        If you don&apos;t have 3-4 hours, focus on these <strong>10 priority items</strong> (one from each category). They identify 60-70% of the biggest problems.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">#</th>
              <th className="py-3 px-3 font-heading font-semibold">Item</th>
              <th className="py-3 px-3 font-heading font-semibold">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">1</td>
              <td className="py-3 px-3">1.2 — Campaigns grouped by objective</td>
              <td className="py-3 px-3 text-gray-600">3 min</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">2</td>
              <td className="py-3 px-3">2.2 — Tag setup verification (Tag Assistant)</td>
              <td className="py-3 px-3 text-gray-600">5 min</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">3</td>
              <td className="py-3 px-3">2.5 — Enhanced Conversions on/off</td>
              <td className="py-3 px-3 text-gray-600">2 min</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">4</td>
              <td className="py-3 px-3">3.1 — Geo + &quot;Presence&quot; vs &quot;Presence or interest&quot;</td>
              <td className="py-3 px-3 text-gray-600">2 min</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">5</td>
              <td className="py-3 px-3">4.2 — Top 20 Search Terms → negative keywords</td>
              <td className="py-3 px-3 text-gray-600">8 min</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">6</td>
              <td className="py-3 px-3">5.1 — RSA Ad Strength check</td>
              <td className="py-3 px-3 text-gray-600">3 min</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">7</td>
              <td className="py-3 px-3">7.1 — Smart Bidding readiness (enough data?)</td>
              <td className="py-3 px-3 text-gray-600">2 min</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">8</td>
              <td className="py-3 px-3">8.1 — Lost IS (budget) %</td>
              <td className="py-3 px-3 text-gray-600">1 min</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">9</td>
              <td className="py-3 px-3">9.1 — GA4 link + auto-tagging</td>
              <td className="py-3 px-3 text-gray-600">2 min</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">10</td>
              <td className="py-3 px-3">10.1 — KPI alignment (if a second stakeholder exists)</td>
              <td className="py-3 px-3 text-gray-600">2 min</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Total: ~30 minutes — identifies 60-70% of the biggest problems in any account.
        </p>
      </div>

      <hr />

      {/* ── Scoring ── */}
      <h2 id="scoring">Scoring system — how to grade your result</h2>
      <p>
        After running the 50-item audit, assign a score per category. Each category has 5 items, so scoring works like this:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Items OK</th>
              <th className="py-3 px-3 font-heading font-semibold">Grade</th>
              <th className="py-3 px-3 font-heading font-semibold">What it means</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">0-2</td>
              <td className="py-3 px-3"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Critical</span></td>
              <td className="py-3 px-3 text-gray-600">Urgent work needed</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">3</td>
              <td className="py-3 px-3"><span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded">Below Average</span></td>
              <td className="py-3 px-3 text-gray-600">Room for improvement</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">4</td>
              <td className="py-3 px-3"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Good</span></td>
              <td className="py-3 px-3 text-gray-600">Solid, minor fine-tuning left</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">5</td>
              <td className="py-3 px-3"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Excellent</span></td>
              <td className="py-3 px-3 text-gray-600">Top shape, maintenance only</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Total score</th>
              <th className="py-3 px-3 font-heading font-semibold">Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">40-50 OK</td>
              <td className="py-3 px-3 text-gray-600">Account in excellent shape (top 10%)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">30-40 OK</td>
              <td className="py-3 px-3 text-gray-600">Above average, minor gaps</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">20-30 OK</td>
              <td className="py-3 px-3 text-gray-600">Average (where most accounts land)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">10-20 OK</td>
              <td className="py-3 px-3 text-gray-600">Significant disorganization — 15-25% wasted spend</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">&lt;10 OK</td>
              <td className="py-3 px-3 text-gray-600">Serious problem, needs a rebuild</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── Mistakes ── */}
      <h2 id="mistakes">The most common mistakes I see in Serbia</h2>
      <p>
        From working with 30+ Serbia-focused accounts over the last two years — these are the mistakes that keep repeating. For a broader list, see: <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="underline">Google Ads Mistakes</Link>.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake 1</p>
          <p className="font-semibold mb-2">Only &quot;Presence or interest&quot; geo targeting</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> Switch to &quot;Presence&quot; immediately. It eliminates irrelevant impressions from the diaspora and users abroad.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake 2</p>
          <p className="font-semibold mb-2">Search Partners turned ON for Search campaigns without evaluation</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> Turn off Search Partners, gather 30 days of data without them, then turn it back on and segment the report to see if CPA is better or worse.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake 3</p>
          <p className="font-semibold mb-2">A single conversion tag with no deduplication — double counting</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> Run a Tag Assistant test on the thank-you page. If you see 2+ hits for the same event, remove one of the sources (usually the hardcoded gtag).</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake 4</p>
          <p className="font-semibold mb-2">Smart Bidding without 30 conversions — Google is learning from noise</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> Go back to Maximize Conversions without a target CPA/ROAS until you gather 30+ conversions a month. Then introduce a target gradually.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake 5</p>
          <p className="font-semibold mb-2">Brand and non-brand in the same campaign — misleading ROAS</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> Split brand into its own campaign. Brand has a lower CPC and higher CVR — mixing it in distorts the real non-brand performance, which is the actual test of your account&apos;s efficiency.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake 6</p>
          <p className="font-semibold mb-2">Display Network expansion turned ON on Search campaigns</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> Turn it off immediately. This is the biggest budget leak I&apos;ve seen — impressions on random websites with zero conversions.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake 7</p>
          <p className="font-semibold mb-2">Zero negative keywords in the account</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> The easiest optimization, but often forgotten. 30 minutes on the negative list typically cuts 15-25% of wasted spend. Start with the <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="text-green-700 underline">complete negative keywords list</Link>.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake 8</p>
          <p className="font-semibold mb-2">tCPA target based on wishful thinking, not reality</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> Set a target that&apos;s 10-20% better than your current CPA, not 50%+. The algorithm can&apos;t hit a magic number — but it can improve gradually.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake 9</p>
          <p className="font-semibold mb-2">Mobile bid adjustment at 0% even though mobile converts 2x better</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> Analyze the device report over 90 days and set a bid adjustment based on actual data. +20-40% for mobile if it&apos;s converting better.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake 10</p>
          <p className="font-semibold mb-2">A campaign called &quot;1&quot; with 50 ad groups named &quot;1, 2, 3...&quot; — impossible to maintain</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> Define a naming convention and apply it retroactively. For more on account organization, see: <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimizacija" } }} className="text-green-700 underline">Google Ads Optimization</Link>.</p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2 id="faq">FAQ — Questions about Google Ads audits</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Should I hire an agency for an audit, or can I do it myself?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Do it yourself for the 30-minute quick audit if you have technical skills and know the interface. The detailed 3-4 hour audit is better handled by someone who has audited 50+ accounts — pattern recognition makes the difference. I spot mistakes at a glance that an inexperienced advertiser wouldn't catch in an hour."
                }
              },
              {
                "@type": "Question",
                name: "How much does a Google Ads audit cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Range: $100-500 for a one-time audit, depending on account size and depth. Many agencies offer a free quick audit as a lead magnet — that's legitimate, but it covers 10-15 items, not 50. If an account spends more than $1,000/month, the investment in a detailed audit pays for itself in the first month of optimizations."
                }
              },
              {
                "@type": "Question",
                name: "How often should I run an audit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Quarterly deep audit + monthly quick check. If you run an audit and find nothing for two quarters in a row, that's a signal the account is in great shape, not that the audit is pointless. A proactive audit always beats a reactive one."
                }
              },
              {
                "@type": "Question",
                name: "Does an audit guarantee better performance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An audit identifies problems. What you do with them is the action phase. I see the biggest improvement in accounts that haven't been audited in 6+ months — that's where you typically get a 15-25% efficiency gain right after implementing the recommendations."
                }
              },
              {
                "@type": "Question",
                name: "Is it enough to just follow Google's 'Recommendations' tab?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Google's Recommendations mostly favor Google's interests: more spend, broader match, automated targeting expansion. A third-party audit looks out for your business's interests. Those aren't the same goal."
                }
              }
            ]
          })
        }}
      />

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Should I hire an agency for an audit, or can I do it myself?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Do it yourself for the 30-minute quick audit if you have technical skills and know the interface. The detailed 3-4 hour audit is better handled by someone who has audited 50+ accounts — pattern recognition makes the difference. I spot mistakes at a glance that an inexperienced advertiser wouldn&apos;t catch in an hour.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much does a Google Ads audit cost?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Range: $100-500 for a one-time audit, depending on account size and depth. Many agencies offer a free quick audit as a lead magnet — that&apos;s legitimate, but it covers 10-15 items, not 50. If an account spends more than $1,000/month, the investment in a detailed audit pays for itself in the first month of optimizations.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How often should I run an audit?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Quarterly deep audit + monthly quick check. If you run an audit and find nothing for two quarters in a row, that&apos;s a signal the account is in great shape, not that the audit is pointless. A proactive audit always beats a reactive one.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does an audit guarantee better performance?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            An audit identifies problems. What you do with them is the action phase. I see the biggest improvement in accounts that haven&apos;t been audited in 6+ months — that&apos;s where you typically get a 15-25% efficiency gain right after implementing the recommendations.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Is it enough to just follow Google&apos;s &quot;Recommendations&quot; tab?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            No. Google&apos;s Recommendations mostly favor Google&apos;s interests: more spend, broader match, automated targeting expansion. A third-party audit looks out for your business&apos;s interests. Those aren&apos;t the same goal.
          </div>
        </details>
      </div>

      <hr />

      {/* ── CTA ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Ran through the checklist and found 5+ red flags?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          I offer a free 30-minute consultation where we review your specific setup, identify the top 3 biggest leaks, and map out concrete next steps. No sales pitch — just useful information.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/audit" className="btn-secondary inline-block">
            Book a free audit
          </Link>
          <Link href="/" className="inline-block px-6 py-3 border-2 border-slate-500 text-slate-300 rounded-lg hover:border-white hover:text-white transition-colors text-sm font-semibold">
            Google Ads services
          </Link>
        </div>
      </div>

      {/* ── Related guides ── */}
      <h2 id="related-guides">Related guides</h2>
      <p>
        Keep reading — these guides cover specific topics from the checklist in more depth:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking Guide</p>
          <p className="text-xs text-gray-500 mb-0">Why your campaigns might not be working</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Smart Bidding Strategies</p>
          <p className="text-xs text-gray-500 mb-0">Complete guide for 2026</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negative Keywords</p>
          <p className="text-xs text-gray-500 mb-0">Complete list + strategy</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimizacija" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Optimization</p>
          <p className="text-xs text-gray-500 mb-0">30 tactics for better ROAS</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Quality Score Guide</p>
          <p className="text-xs text-gray-500 mb-0">What it is and how to improve it</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Mistakes</p>
          <p className="text-xs text-gray-500 mb-0">20 costly errors in your campaigns</p>
        </Link>
      </div>
    </>
  );
}
