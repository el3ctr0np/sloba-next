import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function GoogleAdsAccountTakeoverChecklistPost() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Before you cut ties with your agency, secure three things: the account must be owned by you, you need admin access, and you need a full export of the history. The first week after taking over is diagnosis — don&apos;t touch anything until you know what&apos;s actually working.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">things before you cut ties</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">days of diagnosis</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">sudden changes in week 1</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">100%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">account ownership = non-negotiable</p>
          </div>
        </div>
      </div>

      {/* ── Table of Contents ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#why-account-takeover-is-a-sensitive-moment" className="block py-1 text-base text-gray-700 hover:text-primary underline">Why account takeover is a sensitive moment</a></li>
          <li><a href="#before-you-cut-ties-the-ownership-checklist" className="block py-1 text-base text-gray-700 hover:text-primary underline">Before you cut ties: the ownership checklist</a></li>
          <li><a href="#day-1-2-access-and-a-snapshot-of-current-state" className="block py-1 text-base text-gray-700 hover:text-primary underline">Day 1-2: Access and a snapshot of current state</a></li>
          <li><a href="#day-3-4-tracking-forensics" className="block py-1 text-base text-gray-700 hover:text-primary underline">Day 3-4: Tracking forensics</a></li>
          <li><a href="#day-5-7-structure-and-waste-scan" className="block py-1 text-base text-gray-700 hover:text-primary underline">Day 5-7: Structure and waste scan</a></li>
          <li><a href="#what-not-to-do-in-the-first-week" className="block py-1 text-base text-gray-700 hover:text-primary underline">What NOT to do in the first week</a></li>
          <li><a href="#when-to-start-fresh-vs-inherit-the-structure" className="block py-1 text-base text-gray-700 hover:text-primary underline">When to start fresh vs. inherit the structure</a></li>
          <li><a href="#frequently-asked-questions" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
        </ol>
      </nav>

      <h2 id="why-account-takeover-is-a-sensitive-moment">Why account takeover is a sensitive moment</h2>
      <p>
        If you landed on this article, you&apos;re probably unhappy with your current agency or freelancer and thinking about a change. I&apos;m not here to bash your previous partner — in practice, the reason for parting ways is usually a mix of poor communication, lack of transparency, and results that don&apos;t justify the fee. That&apos;s a legitimate reason to switch.
      </p>
      <p>
        But taking over a Google Ads account is a technically and legally sensitive moment, and this is where expensive mistakes happen. I&apos;ve seen business owners lose years of accumulated conversion history because the agency built the account under their own Google login &quot;for easier management.&quot; I&apos;ve seen clients wait months for someone to hand over GTM container access. I&apos;ve also seen companies who, in a rush to change something, paused a campaign that was quietly driving 80% of their leads.
      </p>
      <p>
        First rule of takeover: <strong>ownership above all</strong>. Second rule: <strong>the first week is diagnosis, not action</strong>. This guide is the logical follow-up to the <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }}>Google Ads audit guide</Link> — that one covers WHAT to check inside the account; this one focuses on the SEQUENCE and the RIGHTS you need to secure before you touch anything.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Who this is for</p>
        <p className="text-blue-800 text-base mb-0">
          Business owners and marketing managers switching agencies or freelancers and taking over Google Ads management — either running it themselves or handing it to a new partner. The focus is the first 7 days after you get access.
        </p>
      </div>

      <hr />

      <h2 id="before-you-cut-ties-the-ownership-checklist">Before you cut ties: the ownership checklist</h2>
      <p>
        The biggest mistake I see: owners terminate the agency contract BEFORE checking who actually owns the account and every connected system. Once the relationship has already soured, getting access afterward becomes much harder — and slower. Do this check while the collaboration is still cordial, even if you&apos;ve already decided to leave.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">What to check</th>
              <th className="py-3 px-3 font-heading font-semibold">Where</th>
              <th className="py-3 px-3 font-heading font-semibold">Red flag</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Google Ads account ownership</td>
              <td className="py-3 px-3">Admin (Tools &amp; Settings → Access and security) — confirm your email is Admin, not just a &quot;Standard&quot; user</td>
              <td className="py-3 px-3">The account was created under the agency&apos;s MCC and you&apos;re just a &quot;guest&quot; — in that case the account isn&apos;t technically yours</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">MCC link (Manager Account)</td>
              <td className="py-3 px-3">Account access → check which MCCs are linked to your account</td>
              <td className="py-3 px-3">The agency MCC stays linked after termination — they can still see data or even manage the account</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Google Tag Manager</td>
              <td className="py-3 px-3">tagmanager.google.com → User Management at the container level</td>
              <td className="py-3 px-3">The container was created under the agency&apos;s Google login — you only have &quot;Edit&quot; or &quot;Publish&quot; rights, not ownership</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Google Analytics 4 (GA4)</td>
              <td className="py-3 px-3">Admin → Property Access Management</td>
              <td className="py-3 px-3">You&apos;re not Administrator at the property level — without that, you can&apos;t edit conversions or grant access to a new partner</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Google Merchant Center (eCommerce)</td>
              <td className="py-3 px-3">Settings → Account access</td>
              <td className="py-3 px-3">The feed is connected through the agency&apos;s account; you lose feed configuration and rejected-product history if the link is cut abruptly</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Creative assets (RSAs, images, video)</td>
              <td className="py-3 px-3">Request an export of every ad text, image, and video file in its original format (not a screenshot)</td>
              <td className="py-3 px-3">The agency claims the creative is &quot;their intellectual work&quot; and refuses export — check the contract; in practice this rarely holds up legally</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Historical data export</td>
              <td className="py-3 px-3">Change History (Google Ads) + GA4 data before access is revoked</td>
              <td className="py-3 px-3">You wait for the termination to go through before requesting an export — at that point the agency has no incentive to help you quickly</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Red flag: If your agency ever tells you &quot;the account is set up under us, we can&apos;t give you Admin access&quot; — that&apos;s a clear signal the account isn&apos;t technically yours. Google&apos;s policy and industry best practice both dictate that the end client should always own the account (as Admin), with the agency managing it through an MCC link that gets removed on termination.
        </p>
      </div>

      <p>
        If you discover that any of the above isn&apos;t in your ownership, that&apos;s the first conversation to have with the agency — before signing any termination. In most cases this gets resolved within a few days while the relationship is still professional.
      </p>

      <hr />

      <h2 id="day-1-2-access-and-a-snapshot-of-current-state">Day 1-2: Access and a snapshot of current state</h2>
      <p>
        The moment you get access to the account (or take over as Admin), the first step isn&apos;t optimization — it&apos;s taking a <strong>snapshot of the current state</strong>. Without this you have no baseline for comparison and can&apos;t prove whether your subsequent changes improved or hurt performance.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Read the Change History</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Google Ads keeps a full record of every account edit (Tools &amp; Settings → Change History). This is the fastest way to see what the agency <em>actually</em> did over the last 6-12 months — not what a monthly report claims, but the real actions taken.
        </p>
        <ul className="text-sm">
          <li><strong>Filter by date</strong> — review the last 3 months in detail, then sample 6-12 months back</li>
          <li><strong>Look at the frequency of edits</strong> — long stretches (30+ days) with zero changes mean the account was neglected</li>
          <li><strong>Check the type of edits</strong> — are these bid adjustments and negative keywords (active optimization) or just budget changes (passive maintenance)?</li>
          <li><strong>Compare against invoices</strong> — if you paid for &quot;weekly optimization&quot; but Change History shows edits every 2-3 months, that&apos;s concrete proof of a mismatch with what was agreed</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Save baseline metrics (screenshot + export)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Before you change anything, export the last 90 days of data at the account, campaign, and ad group level: spend, conversions, CPA, <GlossaryLink slug="roas">ROAS</GlossaryLink>, <GlossaryLink slug="ctr">CTR</GlossaryLink>. This is your &quot;day 0&quot; — without it you can&apos;t measure the impact of your own changes a month from now.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Map out who still has access</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Check Access and security on every platform (Google Ads, GA4, GTM, Merchant Center). Remove the previous agency&apos;s access only ONCE you&apos;re certain you have everything you still need from them (history exports, an explanation of a specific decision) — not before. Cutting access too early, before you&apos;re sure you have everything you need, is a common source of avoidable headaches.
        </p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Pro tip</p>
        <p className="text-yellow-800 text-base mb-0">
          Build one Google Sheet with three tabs: &quot;Access&quot; (who has what), &quot;Baseline metrics&quot; (day-0 numbers), &quot;Change History findings&quot; (what you discovered in the edit log). This doubles as documentation if you later need to justify decisions to a business owner or a new team.
        </p>
      </div>

      <hr />

      <h2 id="day-3-4-tracking-forensics">Day 3-4: Tracking forensics</h2>
      <p>
        This is the most critical part of week one. If conversion tracking isn&apos;t working correctly, every decision you make in the following weeks is based on bad data — no matter how good or bad the account structure is.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Check for duplicate conversions</strong> <span className="text-gray-500">— Compare Google Ads conversions against GA4 and your CRM for the same period. A gap larger than 15-20% means something is double-counting or something isn&apos;t counting at all</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Test tags live</strong> <span className="text-gray-500">— Walk through the conversion path yourself (a purchase, a form submit) with Google Tag Assistant or GTM Preview mode. Confirm the tag actually fires and when</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Check the date of the last tag update</strong> <span className="text-gray-500">— GTM Version history shows when a version was last published. If that was 6+ months ago and the site has since been redesigned, tags are likely tracking elements that no longer exist</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Look for dead tags</strong> <span className="text-gray-500">— Run GTM Preview mode on every key page (thank-you page, cart, form). A tag that never shows up in the dataLayer is dead — it&apos;s probably tracking an element that was removed or renamed</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Check Primary conversion actions</strong> <span className="text-gray-500">— Google Ads → Goals → Conversions: which actions are marked &quot;Primary&quot; and used for bidding optimization? I often find micro-conversions (e.g. &quot;Add to cart&quot;) mistakenly set as primary alongside the real conversion, which means the algorithm is optimizing on the wrong signal</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Check Enhanced Conversions status</strong> <span className="text-gray-500">— If it&apos;s not active, that&apos;s a missed opportunity for better attribution post-iOS/privacy changes, but it&apos;s not a reason to panic — add it after week one</span></div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Red flag: If you discover Google Ads is showing 3x more conversions than actual sales in your CRM, don&apos;t rip anything out immediately. First identify the exact cause (double tagging, a wrong attribution window, test submissions being counted), fix it, then wait 30 days of clean data before drawing any conclusions about campaign performance.
        </p>
      </div>

      <p>
        For a detailed guide on setting up and troubleshooting conversion tracking: <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}>Conversion Tracking for Google Ads</Link>.
      </p>

      <hr />

      <h2 id="day-5-7-structure-and-waste-scan">Day 5-7: Structure and waste scan</h2>
      <p>
        Now that you know whether tracking works, you can reliably analyze account structure and hunt for where budget is leaking. This is the last step of diagnosis before you propose any action plan.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Search Terms Report (90 days)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Sort by cost and review the top 50-100 search terms. This is the fastest way to see whether budget is being spent on relevant queries, or whether <GlossaryLink slug="broad-match">broad match</GlossaryLink> without disciplined negative keywords has been leaking money on unrelated searches for months.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Zombie campaigns</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Look for campaigns that are active but have negligible spend and zero conversions over the last 60-90 days — usually leftovers from old tests that were never shut down. Also check for campaigns spending their full budget with zero conversions: that&apos;s active wasted spend, not a passive leftover.
        </p>
        <ul className="text-sm">
          <li><strong>Paused vs. forgotten</strong> — Distinguish campaigns the agency deliberately paused from ones left &quot;Enabled&quot; that nobody is monitoring</li>
          <li><strong>Last edit per campaign</strong> — Filter Change History by campaign; a campaign with no edits in 6+ months but active spend is a red flag</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Brand vs. non-brand blending</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          This is a common &quot;trick&quot; that inflates results: brand and non-brand keywords sitting in the same campaign or ad group. Brand traffic (people who already know your brand) converts far better and cheaper, so when it&apos;s blended with non-brand terms, the average CPA looks better than the real non-brand performance actually is.
        </p>
        <ul className="text-sm">
          <li><strong>Split the report</strong> — Filter the Search Terms Report by your brand name to see what share of traffic and conversions comes purely from brand searches</li>
          <li><strong>Real non-brand CPA</strong> — Only once you isolate brand can you tell if non-brand campaigns are actually profitable</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Recommendation</p>
        <p className="text-blue-800 text-base mb-0">
          For a complete, structured list of 80+ checkpoints (Quality Score, bidding strategy, budget allocation, extensions, audiences), move on to the full <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }}>Google Ads audit guide</Link> once you finish this first week of diagnosis. These 7 days give you context; the audit guide gives you systematic coverage.
        </p>
      </div>

      <hr />

      <h2 id="what-not-to-do-in-the-first-week">What NOT to do in the first week</h2>
      <p>
        The instinct of a new owner or a new partner is to immediately &quot;fix&quot; anything that looks suspicious. That instinct is dangerous in week one — here&apos;s why, and what to do instead.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Pausing campaigns that &quot;look bad&quot; at first glance, without diagnosing the context</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Why it&apos;s risky:</strong> A campaign with a seemingly high CPA might still be in its learning phase, or might be driving conversions that get logged slowly in the CRM (B2B sales cycles). Diagnose the cause first, decide on pausing second.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Resetting the Smart Bidding strategy or changing the target CPA/ROAS right away</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Why it&apos;s risky:</strong> Any significant change to bidding strategy or targets triggers a new learning period (7-14 days minimum) during which performance is unstable. Do this in week one and you have no clean baseline to compare against — and you&apos;ve made your own diagnosis harder.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Panicked budget changes (drastic increases or cuts) before you understand why the budget was set that way</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Why it&apos;s risky:</strong> A sudden budget jump can disrupt a Smart Bidding algorithm that&apos;s calibrated to a certain daily volume. Wait until you&apos;ve finished tracking forensics and the waste scan — only then does budget reallocation make sense and produce a measurable effect.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Deleting &quot;weird&quot; settings without understanding why they were put there</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0"><strong>Why it&apos;s risky:</strong> Some things that look strange (an unusual ad schedule, an odd device bid adjustment) can be the result of prior testing with a reason that was never documented but is still valid. If you&apos;re not sure why something exists, check Change History before you delete it.</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">The week-one rule</p>
        <p className="text-yellow-800 text-base mb-0">
          Diagnose before you act. Log everything you find in the first 7 days into a document with priorities (urgent / this month / long-term) — then implement afterward, step by step, with 1-2 weeks between changes so you can measure the effect of each one individually.
        </p>
      </div>

      <hr />

      <h2 id="when-to-start-fresh-vs-inherit-the-structure">When it&apos;s better to start fresh vs. inherit the structure</h2>
      <p>
        After the first week of diagnosis, you have enough information to answer the key question: can the account structure be fixed, or is it cheaper and faster to start over?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Keep it</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Inherit the structure if...</h3>
          <p className="text-base text-gray-600 mb-0">
            Conversion tracking is fundamentally sound (maybe with minor fixes). The account has 6+ months of conversion history that matches the CRM. Campaigns have enough data for Smart Bidding to learn effectively (30+ conversions monthly). Brand campaigns have a strong Quality Score history that a restart would forfeit. The problems are localized (a few campaigns, not the entire structure).
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Restart</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Start fresh if...</h3>
          <p className="text-base text-gray-600 mb-0">
            Conversion tracking is so distorted that you can&apos;t trust a single historical number. The structure is so chaotic (brand/non-brand mixed everywhere, hundreds of illogical ad groups) that restructuring would take longer than a clean rebuild. The account has a history of suspensions/warnings where it&apos;s better to &quot;start clean&quot; with a fresh policy footing. The business model has fundamentally changed (new products, new market) and the old structure no longer makes sense.
          </p>
        </div>
      </div>

      <p>
        In practice, it&apos;s rarely necessary to delete the whole account — even when the structure is bad, restructuring existing campaigns is usually faster than building a new account and losing Quality Score history and remarketing list data. But if conversion tracking is unfixably wrong (e.g., a fundamentally broken implementation that&apos;s been feeding false data for years), sometimes it&apos;s cleaner to start a new &quot;Conversions&quot; setup and treat the old data as background context only, not as a basis for decisions.
      </p>

      <hr />

      <h2 id="frequently-asked-questions">Frequently asked questions</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Do I lose the account history if I switch agencies?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">No, as long as the account is owned by you (you&apos;re the Admin, not the agency). Conversion history, Quality Score, remarketing lists, and Change History all stay intact when you simply remove the MCC link to the agency. You only lose history if the account was technically created and owned by the agency — which is exactly why ownership is the first thing you check, before any termination.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How long does an account handover take?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Technically, changing access (granting Admin, removing an MCC link) takes minutes to hours once the account is properly yours. A real handover — with a history export, documentation of what was done, and a handoff call with the previous partner — usually takes 3-7 days if the relationship is cordial. If the agency makes the process difficult, it can drag on for 2-4 weeks while you insist and invoke owner rights (see the next question).</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What if the agency won&apos;t hand over the account?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Unfortunately this is a common scenario, and owner rights clearly stand on your side if the account is technically registered to your name/business. Step one: a written request (email, not just a call) with a deadline. Step two: cite the contract — most professional contracts explicitly state the client retains ownership of the account and data. Step three: if the account was created under the agency&apos;s MCC without you ever having admin access, Google Ads support does handle business-owner access requests with proof of business/domain ownership. As a last resort, if the agency refuses to cooperate, it&apos;s possible to start a new account and accept the loss of history — inconvenient, but not fatal to future growth.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Will performance drop during the transition?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">If campaigns aren&apos;t touched during the first week (diagnosis without action, as described in this guide), performance stays stable — Smart Bidding keeps running normally regardless of who&apos;s the account Admin. A performance drop usually comes from a new partner&apos;s premature mistake: pausing campaigns too early, resetting the bidding strategy, or drastically changing budget before understanding the context. That&apos;s exactly why this guide insists on &quot;week 1 = diagnosis, not action.&quot;</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Who should own the Google Ads account?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Always the client (the business owner), never the agency. This is standard industry practice and how I personally work with every client: the account is created under the client&apos;s Google login (or the client is set as Admin if the account already exists), and the agency gets access through an MCC link that&apos;s simply removed if the engagement ends. The same applies to GA4, GTM, and Merchant Center. This protects you as the business owner — no matter who you work with today, tomorrow you can switch partners without any drama over ownership.</p>
          </div>
        </details>
      </div>

      <hr />

      <h2>Conclusion</h2>
      <p>
        Taking over a Google Ads account from another agency isn&apos;t just a technical process — it&apos;s a chance to set the foundations right for the future, regardless of who ends up managing the account. Ownership first, diagnosis before action, and patience in the first week protect you from costly mistakes that are far easier to avoid than to fix.
      </p>
      <p>
        If you&apos;ve just taken over an account and aren&apos;t sure where to start, or if the agency is making the handover difficult, feel free to book a consultation — we&apos;ll go through access, tracking, and structure together, and build a plan for the first 30 days.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Taking over an account and need an objective diagnosis?</p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          I run audits and handovers for businesses switching agencies or freelancers. You get a snapshot of current state, tracking forensics, and a prioritized 30-day plan — without the sudden changes that put existing results at risk.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">Book a free consultation</Link>
      </div>

      <hr />

      <h2>Related guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/google-ads-audit" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Professional Google Ads audit</p>
          <p className="text-xs text-gray-500 mb-0">A detailed account analysis with an action plan</p>
        </Link>
        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads management</p>
          <p className="text-xs text-gray-500 mb-0">Professional account management after handover</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Audit guide</p>
          <p className="text-xs text-gray-500 mb-0">80+ checkpoints for a complete account review</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Common Google Ads mistakes</p>
          <p className="text-xs text-gray-500 mb-0">20+ frequent errors and how to avoid them</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking guide</p>
          <p className="text-xs text-gray-500 mb-0">How to set up and troubleshoot conversion tracking</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "zasto-nema-rezultata" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Why Google Ads isn&apos;t working</p>
          <p className="text-xs text-gray-500 mb-0">8 common reasons and concrete fixes</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        <p className="mb-1"><strong>Author:</strong> Slobodan Jelisavac, Google Ads Specialist</p>
        <p className="mb-0">Last updated: July 2026</p>
      </div>
    </>
  );
}
