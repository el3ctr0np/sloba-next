import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function OfflineConversionImportB2BPostEN() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Offline Conversion Import (OCI) connects Google Ads to your CRM and tells the algorithm which leads actually became paying customers — not just which ones filled out a form. For B2B, this is the difference between a campaign that optimizes toward cheap, unqualified leads and one that learns to recognize real buyers. You need either GCLID tracking or Enhanced Conversions for Leads, plus a CRM that can export closed deals.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Import mechanisms</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">CRM setups (HubSpot/SF/Pipedrive)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">90</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Day attribution window</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Closed-won</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Primary conversion action</p>
          </div>
        </div>
      </div>

      <p>
        I work with a fair number of B2B clients, and I see the same mistake at the start of nearly every engagement: the account is set up to optimize toward "leads," and the only conversion Google sees is a completed form on the website. The algorithm then does exactly what it's told — bring in as many people as possible who will fill out a form, at the lowest possible cost.
      </p>
      <p>
        The problem is that "filled out a form" and "became a customer" are often not the same thing. In B2B sales, there's a sales cycle between the lead and the closed deal that can run for weeks or months, moving through MQL (marketing qualified lead), SQL (sales qualified lead), and eventually Closed-won or Closed-lost. Google Ads doesn't see any of that — unless you tell it.
      </p>
      <p>
        This guide covers both offline conversion import mechanisms, a concrete setup per CRM (HubSpot, Salesforce, Pipedrive), how to value each lead stage correctly, and the mistakes that most often quietly wreck the accuracy of the whole system.
      </p>

      <hr />
      {/* ── Table of Contents ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#the-problem-optimizing-for-lead-volume" className="block py-1 text-base text-gray-700 hover:text-primary underline">The problem: optimizing for lead volume</a></li>
          <li><a href="#two-mechanisms-gclid-vs-enhanced-conversions-for-leads" className="block py-1 text-base text-gray-700 hover:text-primary underline">Two mechanisms: GCLID vs Enhanced Conversions for Leads</a></li>
          <li><a href="#hubspot-setup" className="block py-1 text-base text-gray-700 hover:text-primary underline">HubSpot setup</a></li>
          <li><a href="#salesforce-setup" className="block py-1 text-base text-gray-700 hover:text-primary underline">Salesforce setup</a></li>
          <li><a href="#pipedrive-setup" className="block py-1 text-base text-gray-700 hover:text-primary underline">Pipedrive setup</a></li>
          <li><a href="#valuing-stages-mql-sql-closed-won" className="block py-1 text-base text-gray-700 hover:text-primary underline">Valuing stages — MQL, SQL, Closed-won</a></li>
          <li><a href="#common-mistakes-with-offline-import" className="block py-1 text-base text-gray-700 hover:text-primary underline">Common mistakes with offline import</a></li>
          <li><a href="#faq-offline-conversion-import" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
        </ol>
      </nav>

      <h2 id="the-problem-optimizing-for-lead-volume">The problem: optimizing for lead volume</h2>
      <p>
        When the only conversion in an account is "form submission," Smart Bidding does something perfectly logical — and perfectly wrong. It hunts for the cheapest possible forms. The algorithm has no way of knowing whether the form was filled out by a procurement director at a 200-person company or a student looking for a free trial for a class assignment. Both count as "1 conversion."
      </p>
      <p>
        The consequence is predictable. Cost-per-lead drifts down over time — which looks like a win in the report. But once sales starts calling those leads, the qualification rate drops. Marketing reports "record lead volume," sales complains "these leads are worthless," and both teams are staring at the exact same numbers reaching opposite conclusions.
      </p>
      <p>
        The root problem isn't the campaign, the targeting, or the budget — it's the signal you're feeding the algorithm. As long as the conversion action is "any form," you have no way to teach Google to tell good traffic from bad. Offline conversion import exists precisely to fix this signal problem.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          &quot;Optimizing for form volume with no feedback loop on quality is like paying a salesperson commission for every phone call, regardless of whether the customer bought anything.&quot;
        </p>
      </div>

      <h3>Why this shows up especially in B2B</h3>
      <p>
        In eCommerce, the purchase happens immediately — Google sees the transaction within minutes and learns directly from it. In B2B, the real value of a lead is only known once sales has qualified it, run a demo, sent a proposal, and negotiated — a process that takes days or months. Without a feedback loop, Google never gets that information and stays stuck optimizing toward the top of the funnel.
      </p>

      <hr />

      <h2 id="two-mechanisms-gclid-vs-enhanced-conversions-for-leads">Two mechanisms: GCLID vs Enhanced Conversions for Leads</h2>
      <p>
        There are two ways to connect offline business outcomes back to Google Ads clicks. They can be used separately or together — in practice I recommend both, since they cover each other's blind spots.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Mechanism 1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">GCLID-based import</h3>
          <p className="text-base text-gray-600 mb-0">
            The classic approach. The Google Click ID is captured from the URL parameter on arrival, stored in a hidden form field, and travels with the lead into the CRM. Later, that same value is sent back to Google Ads along with the deal's outcome.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Mechanism 2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Enhanced Conversions for Leads</h3>
          <p className="text-base text-gray-600 mb-0">
            A newer approach based on a hashed email or phone number from the form, without relying on GCLID. More resilient against blocked cookies and long sales cycles, where a GCLID cookie can expire before the deal ever closes.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Criteria</th>
              <th className="py-3 px-3 font-heading font-semibold">GCLID-based import</th>
              <th className="py-3 px-3 font-heading font-semibold">Enhanced Conversions for Leads</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">What's needed</td>
              <td className="py-3 px-3">Hidden GCLID field in the form + a CRM field to store it</td>
              <td className="py-3 px-3">Hashed email/phone (SHA-256) sent via the Google Ads API or GTM</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Advantages</td>
              <td className="py-3 px-3">Simple to implement, well documented, works natively with CSV upload</td>
              <td className="py-3 px-3">Not cookie-dependent, still works after GCLID expires, better match rate on longer cycles</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Limitations</td>
              <td className="py-3 px-3">GCLID cookie has a lifespan (default 90 days in Google Ads); long B2B cycles can outlive it</td>
              <td className="py-3 px-3">Requires exact data formatting and hashing; match rate depends on data quality of email/phone</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Privacy note</td>
              <td className="py-3 px-3">GCLID is a technical identifier, but tracking cookie consent is still required</td>
              <td className="py-3 px-3">Email/phone are personal data — you need a lawful basis for processing and must hash BEFORE sending, never plain text</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Recommendation</p>
        <p className="text-blue-800 text-base mb-0">
          For B2B with a sales cycle longer than 2-3 months, I recommend running both mechanisms in parallel. GCLID import as primary, Enhanced Conversions for Leads as a backup that catches deals where the GCLID cookie has already expired. This meaningfully improves match rate over the long run.
        </p>
      </div>

      <hr />

      <h2 id="hubspot-setup">HubSpot setup</h2>
      <p>
        HubSpot has a native Google Ads integration that simplifies most of this work, provided Marketing Hub is in place and deal stages are configured properly.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Connect HubSpot and Google Ads</strong> <span className="text-gray-500">— Marketing → Ads → Connect account. Select the Google Ads CID and authorize access.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Enable automatic GCLID capture</strong> <span className="text-gray-500">— HubSpot's tracking code automatically stores hubspotutk and GCLID in the contact property "Google Ad Click ID" once the integration is active. Confirm the tracking code is present on every landing page.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Define deal stages as conversions</strong> <span className="text-gray-500">— In Ads → Conversions → Deals &amp; Contacts, map which deal stage changes (e.g., "Closed Won") get sent back to Google Ads as an offline conversion event.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Pass conversion value per deal</strong> <span className="text-gray-500">— Use the Deal Amount property so the actual deal value is passed automatically, not a fixed estimate.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Create matching conversion actions in Google Ads</strong> <span className="text-gray-500">— Tools → Conversions → New conversion action → Import → HubSpot. Mark "Primary" for Closed-won, "Secondary" for MQL/SQL.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div>
              <strong>Test with one deal</strong> <span className="text-gray-500">— Run a test contact through the entire pipeline and confirm the conversion appears in Google Ads (usually a 3-24h delay).</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Note</p>
        <p className="text-yellow-800 text-base mb-0">
          The native integration only works if the HubSpot tracking code was installed BEFORE the lead arrived on the site. Contacts created before the integration went live won't have a GCLID available — offline import won't work retroactively for them.
        </p>
      </div>

      <hr />

      <h2 id="salesforce-setup">Salesforce setup</h2>
      <p>
        Salesforce also has a native Google Ads integration (Marketing Cloud Connect, or a direct Google Ads-Salesforce connector), but it requires a bit more admin work around custom fields.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Create a custom GCLID field on the Lead and Opportunity objects</strong> <span className="text-gray-500">— Setup → Object Manager → Lead → Fields → New (Text, 255 characters). Repeat for Opportunity since leads convert into it.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Capture GCLID at form submission</strong> <span className="text-gray-500">— Your Web-to-Lead form or connector (Pardot, Zapier) must pass the GCLID from the URL parameter or hidden field into the corresponding Salesforce field when the Lead is created.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Make sure GCLID survives Lead-to-Opportunity conversion</strong> <span className="text-gray-500">— Set field mapping in Lead Conversion Settings so the GCLID field copies from the Lead to the Opportunity — otherwise it's lost at the exact moment the deal gets closest to closing.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Connect Google Ads to Salesforce (native connector or API)</strong> <span className="text-gray-500">— Without Marketing Cloud, use the Google Ads API or a third party (e.g., Zapier/Workato) for a regular export of Opportunity Stage changes.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Automate a scheduled export</strong> <span className="text-gray-500">— Build a report pulling GCLID + Stage + Amount + Close Date for Opportunities changed in the last X days, exported as CSV or via API on a daily/weekly basis.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Most common trap</p>
        <p className="text-yellow-800 text-base mb-0">
          The team forgets to map the GCLID field in Lead Conversion Settings, so the value is lost the moment a lead converts into an Opportunity. This is the single most common reason Salesforce offline import "doesn't work" — the data was there, it just got dropped during the object conversion.
        </p>
      </div>

      <hr />

      <h2 id="pipedrive-setup">Pipedrive setup</h2>
      <p>
        Pipedrive has no native Google Ads integration for offline conversions, so you need one of two approaches — automation via Zapier/Make, or a manual scheduled CSV upload. For smaller teams without an automation budget, the CSV approach works perfectly well.
      </p>

      <h3>Option A — Zapier or Make automation</h3>
      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <ul className="text-sm">
          <li>Trigger: Deal stage changed to "Won" in Pipedrive</li>
          <li>Zapier/Make reads a custom field holding the GCLID value (which you've previously created in Pipedrive and populated via a web form/hidden field)</li>
          <li>Action: Google Ads — Upload Click Conversion, with GCLID, conversion action name, conversion time, and deal value from Pipedrive</li>
          <li>Advantage: near real-time, no manual work once the initial setup is done</li>
        </ul>
      </div>

      <h3>Option B — Scheduled CSV upload</h3>
      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <ul className="text-sm">
          <li>Create a "Google Click ID" custom field at the Deal level in Pipedrive, populated via a web-to-lead form</li>
          <li>Weekly or monthly, export the "Deals won in last 7/30 days" filter as CSV with columns: Google Click ID, Conversion Name, Conversion Time, Conversion Value, Conversion Currency</li>
          <li>In Google Ads: Tools → Conversions → Uploads → CSV upload, match the columns and submit the file</li>
          <li>Downside: lag versus real-time, depending on upload frequency — Google recommends uploading within 90 days of the click</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Practical tip</p>
        <p className="text-blue-800 text-base mb-0">
          If you're just starting out and don't have a Zapier/Make budget yet, start with a weekly CSV upload — it's 15 minutes of work a week, and it's enough to get the algorithm learning. Add automation later once the process has proven itself.
        </p>
      </div>

      <hr />

      <h2 id="valuing-stages-mql-sql-closed-won">Valuing stages — MQL, SQL, Closed-won</h2>
      <p>
        One of the biggest mistakes is treating every pipeline stage as an identical conversion with an identical value. In practice, MQL, SQL, and Closed-won carry completely different weight — and your Google Ads conversion actions should reflect that.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Stage 1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">MQL (Marketing Qualified Lead)</h3>
          <p className="text-base text-gray-600 mb-0">
            Set as a Secondary/observation conversion with a low fixed value. Useful as an early signal while you don't yet have enough Closed-won data, but it must not be the primary optimization target.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Stage 2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">SQL (Sales Qualified Lead)</h3>
          <p className="text-base text-gray-600 mb-0">
            Also Secondary, but with a higher fixed value than MQL. This marks the moment sales confirmed the lead is relevant — a stronger quality signal than the form alone.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Stage 3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Closed-won</h3>
          <p className="text-base text-gray-600 mb-0">
            The Primary conversion action for bidding. Value = actual contract value (Deal Amount), not an average. This is the only signal that directly tells the algorithm "this is a real customer."
          </p>
        </div>
      </div>

      <h3>How to set up conversion actions in Google Ads</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Create three separate conversion actions</strong> <span className="text-gray-500">— "MQL — Offline", "SQL — Offline", "Closed Won — Offline". Separate names make reporting and later debugging much easier.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Mark only Closed-won as "Primary"</strong> <span className="text-gray-500">— In Conversions → Settings, only Closed Won feeds the "Conversions" column that Smart Bidding uses for optimization. MQL and SQL stay "Secondary" (observation only).</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Set a realistic attribution window</strong> <span className="text-gray-500">— For a long B2B sales cycle, use the 90-day click-through window (the maximum Google Ads allows), not the 30-day default.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Only move to Target CPA/ROAS once Closed-won has enough volume</strong> <span className="text-gray-500">— While you have fewer than roughly 15-20 Closed-won conversions per month, stay on Maximize Conversions with SQL as an observation signal.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Rule for switching optimization targets</p>
        <p className="text-base text-yellow-900 mb-0">
          Don't flip optimization from "form" straight to "Closed-won" overnight. Do it in stages — first add MQL/SQL as observation while data accumulates, then introduce Closed-won as primary only once you have at least a few months of historical closed-deal data.
        </p>
      </div>

      <hr />

      <h2 id="common-mistakes-with-offline-import">Common mistakes with offline import</h2>
      <p>
        These are the mistakes I see repeated in almost every account where offline conversion import is newly introduced. Each one quietly wrecks the system's accuracy, even when it looks like everything's "working."
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #1</p>
        <p className="font-semibold mb-2">Double import — the same deal is sent twice (e.g., via both CSV and a Zapier automation)</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">
            <strong>Fix:</strong> Define one import channel per conversion action. If you introduce automation, turn off the parallel manual upload for the same deals. Google Ads deduplicates by GCLID + conversion action + conversion time, but only if all parameters match exactly — small timing differences can create duplicates.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #2</p>
        <p className="font-semibold mb-2">Attribution window too short for a long B2B sales cycle</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">
            <strong>Fix:</strong> If your average sales cycle is 60-90+ days but the conversion window is set to the 30-day default, the system systematically loses Closed-won deals that originated from older clicks. Set the window to the 90-day maximum and check your average sales cycle from the CRM to gauge how much still falls outside that range.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #3</p>
        <p className="font-semibold mb-2">Every value is $1 or a fixed number — the algorithm is "blind" to the difference between a small and large deal</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">
            <strong>Fix:</strong> Always pass the actual contract value (Deal Amount) for Closed-won, never a fixed or symbolic value. Without a value differential, Target ROAS can't do its job — the algorithm treats a $500 deal and a $50,000 deal identically.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #4</p>
        <p className="font-semibold mb-2">Forgotten consent — GCLID/email is captured and sent without a lawful basis</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">
            <strong>Fix:</strong> Before enabling any offline import mechanism, check the site's consent banner and privacy policy — users need to be informed their data is used for advertising purposes. For Enhanced Conversions for Leads, hashing must happen BEFORE sending the data, never after, and you should never send plain-text email/phone.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #5</p>
        <p className="font-semibold mb-2">GCLID doesn't survive every step of the CRM pipeline (e.g., lost during Lead-to-Opportunity conversion)</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">
            <strong>Fix:</strong> Run a single test lead end-to-end, from ad click to Closed-won in the CRM, and confirm the GCLID field stays populated at every step. This is a particularly common failure point in Salesforce during Lead-to-Opportunity conversion.
          </p>
        </div>
      </div>

      <hr />

      <h2 id="faq-offline-conversion-import">Frequently asked questions</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Do I need both GCLID and Enhanced Conversions for Leads, or is one enough?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          One mechanism is enough to get started, but for B2B with a longer sales cycle I recommend running both in parallel. The GCLID cookie has a limited lifespan (up to 90 days in Google Ads), so deals that close after that can miss attribution if you rely on GCLID alone. Enhanced Conversions for Leads, based on a hashed email/phone, catches those "missed" conversions since it doesn't depend on cookies.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          How quickly should I upload offline conversions after a deal closes?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Google recommends uploading within a few days of the status change, but technically it accepts conversions as long as the original click falls within your configured conversion window (a maximum of 90 days from the click, not from the upload). In practice, a weekly upload is a solid balance between data freshness and operational overhead — a monthly upload already noticeably slows down algorithm learning.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          What if my CRM has no native Google Ads integration?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          There are three options, from simplest to most flexible: (1) a manual scheduled CSV upload directly in the Google Ads UI, (2) automation via Zapier or Make connecting virtually any CRM to the Google Ads API, or (3) a direct integration through the Google Ads API if you have developer support. For most smaller teams, a weekly CSV upload is more than enough to get started.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Does offline conversion import violate privacy regulations like GDPR?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Not by itself, but you need a lawful basis for processing data for advertising purposes (usually consent) and you must implement the technical safeguards correctly. For Enhanced Conversions for Leads, always hash email and phone (SHA-256) BEFORE sending to Google — never send plain-text personal data. Consult someone familiar with the regulations in your jurisdiction (GDPR in the EU, or the equivalent data protection law elsewhere) before implementation, especially when handling sensitive B2B data.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          How soon will I see better results after introducing offline import?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Not immediately. The algorithm needs time to accumulate enough Closed-won signal to change its behavior — usually a few weeks to a couple of months, depending on how long your sales cycle is and your deal volume. Treat the first few weeks as a data-collection phase, not a results phase. Switching to Target CPA/ROAS too early, before there's enough Closed-won volume, often causes more harm than good.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Need help connecting Google Ads to your CRM?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          I set up offline conversion import for B2B clients — from GCLID/Enhanced Conversions configuration to integration with HubSpot, Salesforce, or Pipedrive pipelines. The result: an algorithm that learns from real business outcomes, not just completed forms.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Schedule a free consultation
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/google-ads-za-b2b" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads for B2B</p>
          <p className="text-xs text-gray-500 mb-0">Campaigns and tracking built for long sales cycles.</p>
        </Link>
        <Link href="/usluge/google-ads-za-saas" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads for SaaS</p>
          <p className="text-xs text-gray-500 mb-0">Trial-to-paid tracking and full-funnel valuation.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking Guide</p>
          <p className="text-xs text-gray-500 mb-0">Complete GTM, GA4, and Google Ads tag setup.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "ga4-google-ads-integracija" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">GA4 and Google Ads Integration</p>
          <p className="text-xs text-gray-500 mb-0">How to connect GA4 data to Google Ads optimization.</p>
        </Link>
        <Link href="/usluge/konsultacije" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Consulting</p>
          <p className="text-xs text-gray-500 mb-0">A one-off audit or ongoing strategy partnership.</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: July 6, 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Author: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
