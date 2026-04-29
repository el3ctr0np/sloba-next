import { Link } from "@/i18n/navigation";

export default function GA4GoogleAdsIntegrationEN() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to integrate GA4 with Google Ads (2026)",
    "description": "Complete 7-step guide to link a GA4 property to a Google Ads account, import key events as conversions, and share audiences for remarketing.",
    "totalTime": "PT30M",
    "step": [
      { "@type": "HowToStep", "name": "Link the GA4 property to your Google Ads account", "text": "In GA4: Admin → Product links → Google Ads links → Link. Choose your MCC/client account and tick both 'Enable Personalized Advertising' and 'Enable Auto-Tagging'." },
      { "@type": "HowToStep", "name": "Enable Auto-Tagging in Google Ads", "text": "Google Ads: Admin → Account settings → Auto-tagging → Tag the URL that people click through. Required for correct GCLID flow." },
      { "@type": "HowToStep", "name": "Set up Key Events in GA4", "text": "GA4: Admin → Events → Mark as key event. Flag purchase, generate_lead, form_submit or a custom event as key event." },
      { "@type": "HowToStep", "name": "Import GA4 Key Events as Google Ads conversions", "text": "Google Ads: Tools → Data Manager → Import conversions → Google Analytics 4 properties → select property → select key events → Import." },
      { "@type": "HowToStep", "name": "Set Primary vs Secondary conversions", "text": "Google Ads: Tools → Conversions → mark one conversion as Primary (used for bidding); rest as Secondary (observation only). Count: 'One' for leads, 'Every' for eCommerce." },
      { "@type": "HowToStep", "name": "Share GA4 audiences with Google Ads", "text": "GA4: Admin → Audiences → create audience → syncs to Google Ads automatically if the link is active. Minimum 1,000 users required for remarketing." },
      { "@type": "HowToStep", "name": "Verify the data flow", "text": "Wait 24–48h. Check Google Ads → Conversions → status 'Recording conversions'. Check the 'Conv. (all)' column at campaign level for numbers." }
    ]
  };

  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR — GA4 + Google Ads 2026</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          GA4 + Google Ads integration is the backbone of modern Smart Bidding. Without a correct link, key-event import, and Consent Mode v2, the algorithm bids blind. This guide walks 7 exact steps — from property linking to conversion verification 48h later.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">setup steps</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">30 min</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">full integration time</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">24-48h</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">before conversions show up</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">+30%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">typical Smart Bidding lift</p>
          </div>
        </div>
        <p className="text-sm text-slate-400 mt-6 mb-0 border-t border-slate-700 pt-4">
          Based on 10+ accounts managed (UK, Serbia, DACH) and official Google documentation (2024–2026).
        </p>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">Quick answer</p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          What is GA4 + Google Ads integration?
        </p>
        <p className="text-sm md:text-base text-gray-700 mb-0 leading-relaxed">
          <strong>GA4 + Google Ads integration</strong> is a two-way link between a Google Analytics 4 property and a Google Ads account that enables importing GA4 conversions (key events) into Google Ads, sharing audiences for remarketing, and feeding a richer signal set to the Smart Bidding algorithm. The link is activated in GA4 Admin → Product links and verified after 24–48h.
        </p>
      </div>

      <p>
        Since July 2023, when Universal Analytics was sunset, GA4 is Google&apos;s only analytics stack — and the only source of GA-based conversions for Google Ads. Yet the GA4 ↔ Google Ads link is still the most commonly misconfigured part of the tracking stack on the accounts I take over.
      </p>
      <p>
        The typical symptom: the client has GA4, sees purchase events, has Google Ads campaigns — but when you check the Google Ads Conversions page, either nothing is there, or both a &quot;Google Ads conversion&quot; and a &quot;GA4 purchase&quot; are firing simultaneously, generating duplicates. Smart Bidding tries to optimize against muddled metrics and performance stalls.
      </p>
      <p>
        This guide covers the exact 7-step setup that works in 2026 — with Consent Mode v2 mandatory since March 2024, Data Manager changes in the Google Ads UI, and the most common mistakes I see on accounts across Serbia and the UK.
      </p>

      <hr />

      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#what-is-ga4-link" className="text-sm text-gray-700 hover:text-primary underline">What is GA4 + Google Ads integration</a></li>
          <li><a href="#prerequisites" className="text-sm text-gray-700 hover:text-primary underline">Prerequisites (before you start)</a></li>
          <li><a href="#steps" className="text-sm text-gray-700 hover:text-primary underline">7 setup steps</a></li>
          <li><a href="#event-mapping" className="text-sm text-gray-700 hover:text-primary underline">GA4 event → Google Ads action mapping</a></li>
          <li><a href="#attribution" className="text-sm text-gray-700 hover:text-primary underline">Attribution model: Ads-preferred vs Data-driven</a></li>
          <li><a href="#consent-mode" className="text-sm text-gray-700 hover:text-primary underline">Consent Mode v2 (EU mandatory)</a></li>
          <li><a href="#mistakes" className="text-sm text-gray-700 hover:text-primary underline">Common mistakes</a></li>
          <li><a href="#troubleshooting" className="text-sm text-gray-700 hover:text-primary underline">Troubleshooting</a></li>
          <li><a href="#faq" className="text-sm text-gray-700 hover:text-primary underline">FAQ</a></li>
          <li><a href="#related-guides" className="text-sm text-gray-700 hover:text-primary underline">Related guides</a></li>
        </ol>
      </nav>

      <h2 id="what-is-ga4-link">What is GA4 + Google Ads integration</h2>
      <p>
        The integration is technically a &quot;Google Ads link&quot; between a GA4 property and a Google Ads account. Once active, three types of data flow between the two platforms:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">1. Conversions</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">GA4 Key Events → Google Ads</h3>
          <p className="text-sm text-gray-600 mb-0">A key event from GA4 (purchase, generate_lead) can be imported as a Google Ads conversion. Smart Bidding uses this conversion for optimization.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">2. Audiences</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">GA4 → Google Ads remarketing</h3>
          <p className="text-sm text-gray-600 mb-0">An audience created in GA4 (&quot;cart abandoners&quot;, &quot;30-day viewers&quot;) syncs automatically into Google Ads Audience Manager.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">3. Session data</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Google Ads click data → GA4</h3>
          <p className="text-sm text-gray-600 mb-0">GCLID (Google Click ID) maps into GA4, so the Acquisition report shows the campaign, ad group, and keyword that drove the visit.</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Link ≠ Conversion import</p>
        <p className="text-sm text-yellow-900 mb-0">
          Linking the property only enables the <em>ability</em> to import. Conversions aren&apos;t imported automatically — you must explicitly import them via Data Manager. The most common mistake I see: client linked GA4, assumed they were done, conversions never actually got imported.
        </p>
      </div>

      <hr />

      <h2 id="prerequisites">Prerequisites (before you start)</h2>
      <p>
        Before the 7 steps, confirm you have:
      </p>

      <ul>
        <li><strong>Admin access to the GA4 property</strong> — &quot;Edit&quot; role is not enough to link</li>
        <li><strong>Admin access to the Google Ads account</strong> — standard isn&apos;t enough for the Link step</li>
        <li><strong>Active GA4 property</strong> with at least 14 days of data and at least one defined key event</li>
        <li><strong>Enhanced Measurement enabled</strong> in GA4 (Admin → Data Streams → Web stream → Enhanced measurement)</li>
        <li><strong>Google Tag (gtag.js) or GTM</strong> correctly deployed on the site — verify via Tag Assistant</li>
        <li><strong>Consent Mode v2</strong> implemented if targeting EU traffic (mandatory since March 2024)</li>
      </ul>

      <p>
        For eCommerce: also verify that the <code>purchase</code> event fires with correct <code>value</code> and <code>currency</code> parameters. Without value, Smart Bidding can&apos;t run tROAS optimization.
      </p>

      <hr />

      <h2 id="steps">7 setup steps</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">1</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Link the GA4 property to your Google Ads account</h3>
            <p className="text-sm text-gray-600 mb-2"><strong>Where:</strong> GA4 → Admin → Property → Product links → Google Ads links → Link</p>
            <p className="text-sm text-gray-600 mb-2">Select the Google Ads Customer ID (account or MCC). Make sure to tick both boxes:</p>
            <ul className="text-sm text-gray-600 mb-2">
              <li><strong>Enable Personalized Advertising</strong> — without this, audience transfer won&apos;t work</li>
              <li><strong>Enable Auto-Tagging</strong> — appends GCLID to every Google Ads link automatically</li>
            </ul>
            <p className="text-sm text-gray-600 mb-0">Click &quot;Submit&quot;. Status &quot;Linked&quot; should appear immediately.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">2</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Enable Auto-Tagging in Google Ads</h3>
            <p className="text-sm text-gray-600 mb-2"><strong>Where:</strong> Google Ads → Admin → Account settings → Auto-tagging</p>
            <p className="text-sm text-gray-600 mb-2">Tick &quot;Tag the URL that people click through from my ad&quot;. Usually on by default, but I check every new account — I&apos;ve found 3 accounts in the last year where it was turned off.</p>
            <p className="text-sm text-gray-600 mb-0">Without auto-tagging, GCLID doesn&apos;t get appended to URLs and attribution between Google Ads and GA4 breaks.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">3</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Set up Key Events in GA4</h3>
            <p className="text-sm text-gray-600 mb-2"><strong>Where:</strong> GA4 → Admin → Events → Mark as key event (toggle)</p>
            <p className="text-sm text-gray-600 mb-2">Flag as key event:</p>
            <ul className="text-sm text-gray-600 mb-2">
              <li><strong>eCommerce:</strong> <code>purchase</code> (with value + currency)</li>
              <li><strong>Lead Gen:</strong> <code>generate_lead</code> or <code>form_submit</code></li>
              <li><strong>SaaS:</strong> a custom event like <code>trial_signup</code> or <code>demo_booked</code></li>
            </ul>
            <p className="text-sm text-gray-600 mb-0">Note: in March 2024, GA4 renamed &quot;conversions&quot; to &quot;key events&quot;. The function is identical.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">4</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Import GA4 Key Events as Google Ads conversions</h3>
            <p className="text-sm text-gray-600 mb-2"><strong>Where:</strong> Google Ads → Tools → Data Manager → Connected products → Google Analytics 4 → Import conversions</p>
            <p className="text-sm text-gray-600 mb-2">Click sequence:</p>
            <ol className="text-sm text-gray-600 mb-2 list-decimal pl-5">
              <li>Select the GA4 property from the connected list</li>
              <li>Select one or more key events to import</li>
              <li>Click &quot;Import&quot;</li>
            </ol>
            <p className="text-sm text-gray-600 mb-0">After import, the conversion appears under Google Ads → Goals → Summary with source &quot;Google Analytics (GA4)&quot;.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">5</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Set Primary vs Secondary conversions</h3>
            <p className="text-sm text-gray-600 mb-2"><strong>Where:</strong> Google Ads → Goals → Conversions → Goal settings</p>
            <p className="text-sm text-gray-600 mb-2">Rule: <strong>only one conversion should be Primary</strong> (that&apos;s what Smart Bidding optimizes for). All others go to Secondary (observation only, don&apos;t affect bidding).</p>
            <p className="text-sm text-gray-600 mb-2">Count setting:</p>
            <ul className="text-sm text-gray-600 mb-2">
              <li><strong>&quot;One&quot;</strong> for leads, form submissions, phone calls (one lead per session is enough)</li>
              <li><strong>&quot;Every&quot;</strong> for eCommerce (a buyer can purchase 2 products in the same session, both count)</li>
            </ul>
            <p className="text-sm text-gray-600 mb-0">Mistake I see all the time: eCommerce client has &quot;One&quot; count and Smart Bidding only sees half the revenue.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">6</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Share GA4 audiences with Google Ads</h3>
            <p className="text-sm text-gray-600 mb-2"><strong>Where:</strong> GA4 → Admin → Audiences → New audience</p>
            <p className="text-sm text-gray-600 mb-2">If the link is active (Step 1), audiences sync to Google Ads Audience Manager automatically within 24h. Minimum 1,000 active users required for an audience to become eligible for remarketing.</p>
            <p className="text-sm text-gray-600 mb-0">Audiences I typically share: <em>cart abandoners (7 days)</em>, <em>30-day all users</em>, <em>purchased last 90 days</em>, <em>video viewers (50%)</em>.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">7</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Verify the data flow (24–48h)</h3>
            <p className="text-sm text-gray-600 mb-2">After 24–48h (not sooner), check:</p>
            <ul className="text-sm text-gray-600 mb-2">
              <li><strong>Google Ads → Goals → Conversions</strong> — status should read &quot;Recording conversions&quot; (green dot)</li>
              <li><strong>Campaign → Conv. (all) column</strong> — numbers should be populated</li>
              <li><strong>GA4 → Acquisition → Traffic acquisition</strong> — &quot;Paid Search&quot; source should appear with campaign names</li>
              <li><strong>GA4 → Advertising → All channels</strong> — Google Ads campaigns with cost data</li>
            </ul>
            <p className="text-sm text-gray-600 mb-0">If &quot;No data&quot; after 48h — jump to the Troubleshooting section below.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="event-mapping">GA4 event → Google Ads action mapping</h2>
      <p>
        Not every GA4 event should become a Google Ads conversion. Here&apos;s what to import for the most common business models:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Business model</th>
              <th className="py-3 px-4 font-heading font-semibold">GA4 Key Event</th>
              <th className="py-3 px-4 font-heading font-semibold">Google Ads classification</th>
              <th className="py-3 px-4 font-heading font-semibold">Count</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce</td>
              <td className="py-3 px-4"><code>purchase</code></td>
              <td className="py-3 px-4 text-green-700">Primary (Purchase)</td>
              <td className="py-3 px-4">Every</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">eCommerce</td>
              <td className="py-3 px-4"><code>add_to_cart</code></td>
              <td className="py-3 px-4 text-gray-600">Secondary (Observation)</td>
              <td className="py-3 px-4">One</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Lead Gen</td>
              <td className="py-3 px-4"><code>generate_lead</code></td>
              <td className="py-3 px-4 text-green-700">Primary (Submit lead form)</td>
              <td className="py-3 px-4">One</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Local Services</td>
              <td className="py-3 px-4"><code>phone_call</code> (custom)</td>
              <td className="py-3 px-4 text-green-700">Primary (Phone call lead)</td>
              <td className="py-3 px-4">One</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">SaaS</td>
              <td className="py-3 px-4"><code>trial_signup</code> (custom)</td>
              <td className="py-3 px-4 text-green-700">Primary (Sign-up)</td>
              <td className="py-3 px-4">One</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">SaaS</td>
              <td className="py-3 px-4"><code>purchase</code> (plan subscribe)</td>
              <td className="py-3 px-4 text-green-700">Primary (Subscription)</td>
              <td className="py-3 px-4">Every</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Content / Blog</td>
              <td className="py-3 px-4"><code>newsletter_signup</code></td>
              <td className="py-3 px-4 text-gray-600">Secondary (Observation)</td>
              <td className="py-3 px-4">One</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Principle: <strong>one Primary conversion per business model</strong>. Keep the rest on Secondary so they show in reports but don&apos;t confuse Smart Bidding.
      </p>

      <hr />

      <h2 id="attribution">Attribution model: Ads-preferred vs Data-driven</h2>
      <p>
        After import, an important question is which attribution model to use. GA4 uses Data-driven by default since 2023. Google Ads has its own set of options:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Model</th>
              <th className="py-3 px-4 font-heading font-semibold">How it works</th>
              <th className="py-3 px-4 font-heading font-semibold">When to use</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Data-driven</td>
              <td className="py-3 px-4">ML model assigns per-touchpoint credit based on actual customer paths</td>
              <td className="py-3 px-4 text-green-700">Default for accounts with 300+ conv/30 days</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Ads-preferred last click</td>
              <td className="py-3 px-4">Credit goes to the last Google Ads click before conversion</td>
              <td className="py-3 px-4">Smaller accounts (&lt;300 conv/month)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Last click (GA4 default)</td>
              <td className="py-3 px-4">All channels receive credit based on the last non-direct click</td>
              <td className="py-3 px-4">Cross-channel analysis in GA4, not Google Ads bidding</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 my-6">
        <p className="font-heading font-semibold mb-2">Practical recommendation</p>
        <p className="text-sm text-blue-900 mb-0">
          For Google Ads bidding, use <strong>Data-driven attribution</strong> if you have the volume (Google will block it if you don&apos;t). For smaller accounts, <strong>Ads-preferred last click</strong>. Don&apos;t mix models between GA4 and Google Ads — expect a small gap in numbers (5–15% is normal).
        </p>
      </div>

      <hr />

      <h2 id="consent-mode">Consent Mode v2 (EU mandatory)</h2>
      <p>
        Since March 6, 2024, Google requires <strong>Consent Mode v2</strong> for all ads targeting the EEA (EU + Norway, Iceland, Liechtenstein) and the UK. Without it, Google Ads can&apos;t use personalized advertising or remarketing for those users.
      </p>

      <p>What your CMP (Consent Management Platform) must pass to gtag:</p>

      <ul>
        <li><code>ad_storage</code> — granted/denied (for cookie-based ads)</li>
        <li><code>ad_user_data</code> — granted/denied (for sending user data to Google)</li>
        <li><code>ad_personalization</code> — granted/denied (for personalized advertising)</li>
        <li><code>analytics_storage</code> — granted/denied (for GA4 tracking)</li>
      </ul>

      <p>
        Two parameters were added (<code>ad_user_data</code> and <code>ad_personalization</code>) in v2 over v1. Popular CMPs (Cookiebot, Iubenda, OneTrust, Usercentrics) ship with a Consent Mode v2 module — it must be explicitly activated in their admin panel.
      </p>

      <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-red-700 text-lg mb-2">How to verify it&apos;s working</p>
        <p className="text-sm text-red-800 mb-0">
          Open Chrome DevTools → Network tab → filter &quot;collect&quot; → check the <code>gcs</code> parameter in the GA4 request. If <code>gcs=G111</code>, Consent v2 is working correctly. If <code>gcs=G100</code> or missing — the implementation is incomplete.
        </p>
      </div>

      <hr />

      <h2 id="mistakes">Common mistakes</h2>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #1</p>
          <p className="font-semibold mb-2">Duplicate: Google Ads conversion tag + GA4 purchase import</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Fix:</strong> Either the legacy native Google Ads tag on the thank-you page, or the GA4 imported conversion — not both. Recommendation: disable the Google Ads conversion tag and keep only the GA4 import, since GA4 as single source of truth cleans up attribution.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #2</p>
          <p className="font-semibold mb-2">Multiple Primary conversions — Smart Bidding gets confused</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Fix:</strong> Only one conversion should be Primary. Adding multiple Primaries (e.g. purchase + add_to_cart + newsletter) mixes signals and tROAS breaks down.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #3</p>
          <p className="font-semibold mb-2">Missing value/currency on the purchase event</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Fix:</strong> Without <code>value</code> and <code>currency</code> parameters, tROAS can&apos;t operate. Verify via GA4 DebugView that values fire. For Shopify/WooCommerce — the standard GTM template ships with this by default.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #4</p>
          <p className="font-semibold mb-2">Wrong Count setting</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Fix:</strong> eCommerce must be &quot;Every&quot; (every purchase counts). Leads must be &quot;One&quot; (you don&apos;t want one lead to eat 3× your bid budget). Default is &quot;One&quot; — always switch for eCommerce.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #5</p>
          <p className="font-semibold mb-2">Consent Mode v1 (or missing entirely)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Fix:</strong> v2 is mandatory in the EU. Effects of v1 in 2026: remarketing lists don&apos;t populate (EU users don&apos;t enter them), Smart Bidding has fewer signals, conversion modeling breaks.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="troubleshooting">Troubleshooting</h2>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Conversion won&apos;t import from GA4</h3>
          <ul className="text-sm text-gray-600 mb-0">
            <li>Check that the event is flagged as &quot;key event&quot; in GA4 (not just a regular event)</li>
            <li>Check there&apos;s data — the event must have fired in the last 30 days</li>
            <li>Check Link status in GA4 Admin → Product links → Google Ads links</li>
            <li>Wait 24h after the first import — Google caches the list</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">&quot;No data&quot; on the imported conversion</h3>
          <ul className="text-sm text-gray-600 mb-0">
            <li>Check that Google Ads campaigns are actually driving traffic (Conv. (all) column)</li>
            <li>Check that Auto-Tagging is working — GCLID must be in the URL</li>
            <li>Check Consent Mode — if users denied, there will be no data</li>
            <li>Attribution delay: eCommerce conversions can take 3–7 days to fully populate</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Audience size = 0 in Google Ads</h3>
          <ul className="text-sm text-gray-600 mb-0">
            <li>Minimum 1,000 active users required for an audience to be eligible</li>
            <li>&quot;Enable Personalized Advertising&quot; must be ticked on the Link</li>
            <li>Audience retention period (30/60/540 days) must be set</li>
            <li>Wait 24h after creating the audience</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">GA4 conversion count ≠ Google Ads count</h3>
          <ul className="text-sm text-gray-600 mb-0">
            <li>A 5–15% gap is normal (different attribution model, conversion windows)</li>
            <li>Gap &gt; 30% — check attribution settings in both tools</li>
            <li>Google Ads is click-based, GA4 can be cross-device or cross-channel</li>
            <li>Note: Google Ads count is <em>click-attributed</em>, GA4 count is <em>last-click GA4</em> — expect a gap</li>
          </ul>
        </div>
      </div>

      <hr />

      <h2 id="faq">FAQ</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            When will GA4 conversions start showing in Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Usually 24–48h after import. For a full historical backfill (useful for Smart Bidding learning) expect 30–90 days of continuous tracking. Don&apos;t change your bid strategy in the first 14 days — the algorithm is learning.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does GA4 replace Google Ads conversion tracking?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Practically yes — the GA4 purchase event can be used as the primary Google Ads conversion. Advanced setup (what I run for larger clients): GA4 as main conversion + native Google Ads conversion as backup/secondary. For most accounts, GA4 alone is enough and avoids duplicates.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What&apos;s the difference between Primary and Secondary conversions?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Primary conversions drive Smart Bidding — the algorithm optimizes against them. Secondary are &quot;observation only&quot; — they show in reports but don&apos;t affect bidding. Rule: only one Primary (the main business outcome). All micro-conversions (add to cart, newsletter signup) go on Secondary.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What is Ads-preferred attribution?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Ads-preferred attribution uses different rules from the GA4 default. In GA4, direct visits (no referrer) can receive credit; in Ads-preferred, that credit goes to the last paid Google Ads click. Result: Google Ads in this model &quot;shows&quot; more conversions than GA4.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Do I need Consent Mode v2 for non-EU markets?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Technically no (e.g. Serbia isn&apos;t EU), but I recommend you still have it: (1) many sites target EU audiences too, (2) GDPR-ready setup is a quality signal, (3) the Google Ads algorithm runs fine with a CMP regardless of region. For pure domestic traffic, you can skip it — but keep the option open.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I import multiple GA4 properties into one Google Ads account?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Yes, you can link several GA4 properties to the same Google Ads account. Useful when you run multiple domains/brands under one Google Ads account. Be careful with conversions — map them carefully so you don&apos;t get duplicates.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much does GA4 + Google Ads integration cost?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Free — both GA4 and Google Ads are free tools, and the integration is part of the platform. The only cost is time (30 min for the basic setup + 2–3 hours for auditing an existing setup if you&apos;re taking over an account from another agency).
          </div>
        </details>
      </div>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Your GA4 + Google Ads integration incomplete?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Free comprehensive audit of your entire site&apos;s tracking system — link status, Primary/Secondary setup, Consent Mode v2, attribution model, and the full data flow. Typically reveals 3–5 mistakes costing conversions.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Submit your free audit request
        </Link>
      </div>

      <hr />

      <h2 id="related-guides">Related guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking guide</p>
          <p className="text-xs text-gray-500 mb-0">Enhanced conversions, server-side, debug procedure</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Smart Bidding guide</p>
          <p className="text-xs text-gray-500 mb-0">tROAS, tCPA and how Smart Bidding uses them</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing guide</p>
          <p className="text-xs text-gray-500 mb-0">GA4 audiences for 4× ROAS campaigns</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimization" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads optimization — 30 tactics</p>
          <p className="text-xs text-gray-500 mb-0">Post-tracking playbook to scale results</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-checklist" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Audit Checklist</p>
          <p className="text-xs text-gray-500 mb-0">80+ points for a full account audit</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-mistakes" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">20 Google Ads mistakes</p>
          <p className="text-xs text-gray-500 mb-0">Tracking mistakes that cost conversions</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: April 2026
      </div>
      <div className="text-sm text-gray-500">
        Author: Slobodan Jelisavac, Google Ads Consultant
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
    </>
  );
}
