import { Link } from "@/i18n/navigation";

export default function ConversionTrackingGuideEN() {
  return (
    <>
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Without reliable conversion tracking, Google Ads campaigns run blind. Algorithms optimize toward wrong signals, budget is spent without clear ROI, and you make decisions based on inaccurate data. This guide shows how to properly set up GTM, GA4, and Google Ads tags, avoid common mistakes, and use Enhanced Conversions for maximum accuracy.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Conversion types</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">GTM+GA4</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Complete setup</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">40%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Accounts have errors</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Value without tracking</p>
          </div>
        </div>
      </div>

      <p>
        Every week I see the same situation. A company spends $2,000-5,000/£1,600-4,000 monthly on Google Ads. Campaigns are active, clicks are coming in, but results are either missing or unreliable. When I check the account, the problem is almost always the same — conversion tracking isn't working properly.
      </p>
      <p>
        In my experience, poor tracking is the silent killer of Google Ads performance. Without reliable conversion data, you don't know what's working, algorithms optimize toward wrong signals, and you make decisions based on false data.
      </p>
      <p>
        In this guide, I cover everything you need to set up precise conversion tracking, from basic GTM setup to advanced techniques like Enhanced Conversions and server-side tracking. You'll also learn how to discover and fix the most common mistakes that cost your budget.
      </p>

      <hr />

      <h2>Why conversion tracking is the foundation of Google Ads</h2>
      <p>
        I recommend viewing conversion tracking as your campaign's nervous system. Without it, algorithms don't know what's a good signal, and you lose control over budget.
      </p>

      <h3>Algorithms depend on your data</h3>
      <p>
        Google Ads Smart Bidding (Target CPA, Target ROAS, Maximize Conversions) uses machine learning to optimize bids in real-time. But ML is only as good as the data you feed it.
      </p>
      <p>
        With bad tracking, the algorithm learns wrong signals — bids too high for bad traffic, bids too low for good traffic, and budget goes to waste. With good tracking, the algorithm understands what a real conversion is, bids more aggressively when signals are good, and saves budget when signals aren't promising.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          &quot;A campaign without reliable conversion tracking is like a car without instruments — you're driving blind and don't know how fast you're going or how much fuel you're using.&quot;
        </p>
      </div>

      <h3>Optimization without data is guesswork</h3>
      <p>
        If you don't know which keyword, ad, or audience brings conversions, how will you optimize? My experience shows that the difference between a campaign with tracking and without looks like this:
      </p>
      <p>
        <strong>Without tracking:</strong> &quot;I think this campaign is working well.&quot;
      </p>
      <p>
        <strong>With tracking:</strong> &quot;This campaign brings 47 conversions at $12.50/£10 each, while this one brings 3 conversions at $180/£145. We're reallocating budget.&quot;
      </p>

      <hr />

      <h2>Types of conversions to track</h2>
      <p>
        I recommend tracking not just the final goal (purchase or lead), but also steps leading to it. Here are the conversion types to set up for different business types.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Primary</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Primary conversions</h3>
          <p className="text-sm text-gray-600 mb-0">
            Campaign's ultimate goal — purchase, lead, call, registration. Used for bid optimization.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Secondary</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Secondary conversions</h3>
          <p className="text-sm text-gray-600 mb-0">
            Steps toward goal — add to cart, pricing page visit, catalog download. Used for observation.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Micro</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Micro conversions</h3>
          <p className="text-sm text-gray-600 mb-0">
            Engagement signals — scroll depth, video view, time on site. Help algorithm when volume is low.
          </p>
        </div>
      </div>

      <h3>Conversion examples by business type</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Business type</th>
              <th className="py-3 px-4 font-heading font-semibold">Primary</th>
              <th className="py-3 px-4 font-heading font-semibold">Secondary</th>
              <th className="py-3 px-4 font-heading font-semibold">Micro</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce</td>
              <td className="py-3 px-4">Purchase</td>
              <td className="py-3 px-4">Add to cart, Begin checkout</td>
              <td className="py-3 px-4">Product view</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">B2B Lead Gen</td>
              <td className="py-3 px-4">Form submission, Demo request</td>
              <td className="py-3 px-4">Pricing page, Case study download</td>
              <td className="py-3 px-4">Time on site 2min+</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Local business</td>
              <td className="py-3 px-4">Phone call, Directions click</td>
              <td className="py-3 px-4">Contact page visit</td>
              <td className="py-3 px-4">Store locator use</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">SaaS</td>
              <td className="py-3 px-4">Trial sign-up, Paid conversion</td>
              <td className="py-3 px-4">Features page, Video view</td>
              <td className="py-3 px-4">Pricing calculator use</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">3-level rule</p>
        <p className="text-blue-800 text-sm mb-0">
          I recommend setting up all three conversion levels. Primary for optimization, Secondary for observation and analysis, Micro for signals when volume is low. This gives the algorithm a more complete picture of user behavior.
        </p>
      </div>

      <hr />

      <h2>Tools for conversion tracking</h2>
      <p>
        There are three main ways to track conversions in Google Ads. Each has its advantages and when to use it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Recommended</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Google Tag Manager</h3>
          <p className="text-sm text-gray-600 mb-0">
            Centralized management of all tags. Flexible, easy to test and maintain. My first choice for all but simplest setups.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Analytics</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">GA4 Import</h3>
          <p className="text-sm text-gray-600 mb-0">
            Uses GA4 events as conversions. Good for unified reporting, but attribution may differ from native Google Ads tracking.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Direct</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Google Ads Tag</h3>
          <p className="text-sm text-gray-600 mb-0">
            Direct tag placement through Google Ads interface. Simple for one-page setup, but less flexible for complex scenarios.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Advanced</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Enhanced Conversions</h3>
          <p className="text-sm text-gray-600 mb-0">
            Sends hashed first-party data (email, phone) to improve attribution despite cookie restrictions. I recommend for all campaigns with $1,000+/£800+ budget.
          </p>
        </div>
      </div>

      <hr />

      <h2>Step by step — setting up tracking</h2>
      <p>
        This is the process I use for all clients. GTM + GA4 + Google Ads tag + Enhanced Conversions = complete setup that delivers maximum accuracy.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Set up Google Tag Manager container</strong> <span className="text-gray-500">— Create GTM account and container, install container snippet in &lt;head&gt; and &lt;body&gt; on all pages.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Add Conversion Linker tag</strong> <span className="text-gray-500">— In GTM create &quot;Conversion Linker&quot; tag type, trigger All Pages. This is MANDATORY for cross-domain and cross-device tracking.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Connect GA4 property</strong> <span className="text-gray-500">— Create GA4 property and install GA4 tag via GTM or directly. Mark key events (purchase, generate_lead) as conversions.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Create Google Ads conversion action</strong> <span className="text-gray-500">— In Google Ads → Tools → Conversions → + New conversion. Copy Conversion ID and Conversion Label.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Set up Google Ads Conversion tag in GTM</strong> <span className="text-gray-500">— Create tag type &quot;Google Ads Conversion Tracking&quot;, enter ID and Label, set trigger (e.g., Page URL contains &quot;thank-you&quot; or Form ID equals &quot;contact-form&quot;).</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div>
              <strong>Enable Enhanced Conversions</strong> <span className="text-gray-500">— In Google Ads → Conversions → Settings → Enhanced conversions → Turn on. Choose GTM method and map user data (email, phone, address) via data layer.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div>
              <strong>Test in GTM Preview mode</strong> <span className="text-gray-500">— Click Preview in GTM, go through conversion flow on site and verify tags fire. Also check Google Tag Assistant Chrome extension.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
            <div>
              <strong>Publish and verify</strong> <span className="text-gray-500">— Publish GTM container, make test conversion and verify it appears in Google Ads (3-6 hour delay is normal).</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-sm mb-0">
          Conversion Linker tag is often a forgotten step, but without it cross-domain and cross-device tracking doesn't work properly. Always set this tag on All Pages before any other conversion tag.
        </p>
      </div>

      <hr />

      <h2>Conversion tracking for eCommerce</h2>
      <p>
        For eCommerce, my experience shows that tracking transaction value is critical. Without it, Google doesn't know the difference between a $10/£8 purchase and a $500/£400 purchase.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Purchase (Primary conversion)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Most important conversion. Must send dynamic value (transaction_value), currency, and transaction_id. Used for bid optimization.
        </p>
        <ul className="text-sm">
          <li>Trigger: Purchase confirmation page (e.g., /order-complete, /thank-you)</li>
          <li>Conversion value: Dynamic — pull from data layer</li>
          <li>Count: Every (each order counts)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Add to Cart (Secondary conversion)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Shows intent. I recommend setting as observation, not for bidding. Helps algorithm learn which products people add to cart.
        </p>
        <ul className="text-sm">
          <li>Trigger: Add to Cart button click event</li>
          <li>Conversion value: Optional (can be fixed value or product price)</li>
          <li>Include in Conversions: NO (observation only)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Begin Checkout (Secondary conversion)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          User started checkout process. Strong signal showing purchase intent. I use it for remarketing audiences.
        </p>
        <ul className="text-sm">
          <li>Trigger: Checkout page load (e.g., /checkout, /cart)</li>
          <li>Conversion value: Cart value (optional)</li>
          <li>Include in Conversions: NO (observation only)</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Value tracking rule</p>
        <p className="text-sm text-yellow-900 mb-0">
          I recommend ALWAYS tracking transaction value for eCommerce. Without it, Target ROAS bidding doesn't work and you don't know how much revenue each campaign brings. Dynamic conversion values are mandatory for profitable optimization.
        </p>
      </div>

      <hr />

      <h2>Conversion tracking for Lead Generation</h2>
      <p>
        For lead gen campaigns, my experience shows it's not enough to track just form submissions. You must track lead quality through offline conversion import.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Form Submission (Primary conversion)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Basic lead event. Trigger is usually form submission or thank-you page load. Use this for initial optimization.
        </p>
        <ul className="text-sm">
          <li>Trigger: Form submission event or Page URL contains &quot;thank-you&quot;</li>
          <li>Conversion value: Fixed value (e.g., average lead value)</li>
          <li>Count: One (one form submit = one conversion, even if user submits multiple times)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Phone Call (Primary conversion)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          For B2B and local businesses, phone calls are often the most important conversion. Google offers call tracking extension that automatically tracks calls.
        </p>
        <ul className="text-sm">
          <li>Setup: Google forwarding number or website call button click</li>
          <li>Minimum call duration: 60+ seconds (to filter spam)</li>
          <li>Conversion value: Average phone lead value</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Offline Conversions (Qualified lead)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          This is the most important step for B2B. Import qualified leads or closed deals from CRM back into Google Ads. Without this, Google optimizes for volume, not quality.
        </p>
        <ul className="text-sm">
          <li>Setup: Capture GCLID in CRM at form submission</li>
          <li>Regular upload: Weekly or monthly (depending on sales cycle)</li>
          <li>Conversion value: Actual deal value (not average)</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Offline Conversion Import — Game Changer for B2B</p>
        <p className="text-blue-800 text-sm mb-0">
          I recommend offline import to all B2B clients. The difference is huge — Google learns which type of leads actually become customers and optimizes toward that, not just toward volume of form submissions. Expect 20-30% better CPA after a few months of learning.
        </p>
      </div>

      <hr />

      <h2>Most common conversion tracking mistakes</h2>
      <p>
        Over the years I've seen hundreds of accounts, and here are the mistakes that repeat most often. Each costs budget and performance.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #1</p>
        <p className="font-semibold mb-2">Conversion tag set on all pages instead of just confirmation page</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Check trigger in GTM. Tag should fire ONLY on thank-you page (e.g., Page URL contains &quot;/thank-you&quot; or &quot;/order-complete&quot;). Use GTM Preview mode to test.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #2</p>
        <p className="font-semibold mb-2">Double counting — Google Ads tag + GA4 import for same conversion</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Use ONE or THE OTHER, not both. If importing conversions from GA4, deactivate direct Google Ads tag for that same action. Double counting kills attribution accuracy.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #3</p>
        <p className="font-semibold mb-2">Conversion Linker tag missing or not on All Pages</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> In GTM create &quot;Conversion Linker&quot; tag type and set trigger to All Pages. This is the first tag that should fire before any other conversion tag. Without it, cross-domain tracking doesn't work.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #4</p>
        <p className="font-semibold mb-2">Not tracking conversion value (all conversions = &quot;1&quot;)</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> For eCommerce use dynamic conversion values — send actual transaction_value via data layer. For lead gen, set fixed value matching average lead value. Without values, Target ROAS doesn't work.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #5</p>
        <p className="font-semibold mb-2">Only tracking purchase/lead, no secondary conversions</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Add secondary and micro conversions (add to cart, pricing page, video view) and set them as observation (Include in Conversions = NO). This gives the algorithm more signals and helps when volume is low.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #6</p>
        <p className="font-semibold mb-2">Attribution model not adjusted to business type</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Think about customer journey. For short sales cycles (impulse eCommerce), Last Click is OK. For B2B with long cycle, Data-Driven or Position-Based gives more realistic picture. Check in Google Ads → Conversions → Attribution models.
          </p>
        </div>
      </div>

      <hr />

      <h2>How to verify tracking is working correctly</h2>
      <p>
        Setting up tracking is half the job. The other half is verification that everything works as it should. Here's the process I use for every account.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Google Tag Assistant Chrome Extension</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Install extension, go through conversion flow on site, and verify tags fire on correct pages. Check if they send conversion ID, label, and value.
        </p>
        <ul className="text-sm">
          <li>Tag Assistant: <a href="https://tagassistant.google.com/" className="underline" target="_blank" rel="noopener noreferrer">tagassistant.google.com</a></li>
          <li>Go through entire conversion flow from landing page to thank-you</li>
          <li>Verify Conversion Linker tag works on All Pages</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">GTM Preview Mode</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          In GTM interface click &quot;Preview&quot;, open site in new tab and go through conversion flow. Preview mode shows which tags fire and what data they send.
        </p>
        <ul className="text-sm">
          <li>Verify tags fire only on confirmation page</li>
          <li>Verify conversion value is correctly pulled from data layer</li>
          <li>Verify Enhanced Conversions tag sends user data</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Google Ads Conversion Status</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          In Google Ads → Tools → Conversions check Status column. Should say &quot;Recording conversions&quot; with green checkmark.
        </p>
        <ul className="text-sm">
          <li>If says &quot;Unverified&quot; — tag hasn't fired yet (make test conversion)</li>
          <li>If says &quot;No recent conversions&quot; — tag works but no traffic (OK for new campaigns)</li>
          <li>If says &quot;Inactive&quot; or &quot;Error&quot; — tag not properly set up</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Real-time check in GA4</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          In GA4 → Reports → Realtime check if events appear in real-time when you make test conversion.
        </p>
        <ul className="text-sm">
          <li>Activate realtime view</li>
          <li>Make test conversion (form submission or purchase)</li>
          <li>Verify event appears within seconds</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Cross-check with backend data</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Compare number of conversions in Google Ads with actual number of orders/leads from CRM or eCommerce platform. Difference of 10-20% is normal, but if larger — you have tracking problem.
        </p>
        <ul className="text-sm">
          <li>Export conversions from Google Ads for past week</li>
          <li>Export orders/leads from backend system for same period</li>
          <li>Compare numbers — if difference &gt;30%, investigate cause</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-sm mb-0">
          Conversions usually appear in Google Ads after 3-6 hours, but can take up to 24 hours. Don't panic if test conversion doesn't show immediately — wait a few hours and check again.
        </p>
      </div>

      <hr />

      <h2>Frequently asked questions</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          How long until conversion appears in Google Ads?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Usually 3-6 hours for online conversions. Can be up to 24 hours in some cases. Offline conversion import depends on your upload frequency (I recommend weekly). If conversion doesn't show after 24 hours, check if tag is properly set up via GTM Preview mode and Tag Assistant.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Why do conversion numbers in GA4 and Google Ads differ?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Different attribution models, different conversion windows, and different counting methods. GA4 typically uses data-driven attribution, while Google Ads may use last click. Also, GA4 counts sessions differently than Google Ads. Difference of 10-20% is completely normal and doesn't indicate a problem. If difference &gt;30%, check for double counting.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Do I need a developer to set up conversion tracking?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          For basic GTM setup — not necessarily. You can set up GTM container and basic conversion tags yourself if you follow documentation. For Enhanced Conversions (data layer push) and server-side tracking — probably yes, as it requires JavaScript and backend integration. If you don't have technical knowledge, I recommend hiring a developer or Google Ads consultant who'll set everything up properly.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          What if I don't have a thank-you page?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Use event-based tracking instead of page load tracking. Trigger can be form submission event, AJAX response success callback, or URL parameters (e.g., ?submitted=true). In GTM you can set trigger on Form Submission or custom JavaScript event. If using platforms like Webflow, WordPress, or Shopify, there are often built-in options for tracking without thank-you page.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          How many conversions needed for Smart Bidding?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Google officially recommends minimum 15 conversions in last 30 days for Target CPA and Target ROAS. However, my experience is that 30-50 conversions monthly is ideal for more stable results. Below 15, algorithm doesn't have enough data and performance can be unpredictable. If you don't have enough primary conversions, you can temporarily add secondary conversions as observation while collecting enough volume.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          What is Enhanced Conversions and do I need it?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Enhanced Conversions sends hashed first-party data (email, phone, address) to improve attribution despite cookie restrictions and iOS privacy changes. I recommend it for ALL campaigns with $1,000+/£800+ budget. Expect 5-15% more attributed conversions after implementation. Setup requires data layer push with user data (email and phone are minimum), which usually requires developer help.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Need help with conversion tracking?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          I offer complete conversion tracking setup — GTM, GA4, Google Ads tags, Enhanced Conversions, and offline import. Everything you need to track real results and optimize for profitability.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Schedule free consultation
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Management</p>
          <p className="text-xs text-gray-500 mb-0">Proper tracking setup and campaign optimization</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">12 Most Common Google Ads Mistakes</p>
          <p className="text-xs text-gray-500 mb-0">Mistakes that cost budget and how to fix them.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing Guide 2026</p>
          <p className="text-xs text-gray-500 mb-0">How to retarget visitors who didn't convert.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Guide</p>
          <p className="text-xs text-gray-500 mb-0">Step by step setup for profitable Shopping campaigns.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">How Much Does Google Ads Cost</p>
          <p className="text-xs text-gray-500 mb-0">Realistic budget and expectations for different industries.</p>
        </Link>
      </div>

      <hr />

      <h2>Frequently asked questions about conversion tracking</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What is conversion tracking and why is it important?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Conversion tracking monitors user actions after clicking an ad — purchases, calls, form submissions. Without it, Google doesn&apos;t know which keywords and ads drive results, so it can&apos;t optimize campaigns. It&apos;s the foundation of every successful campaign.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Google Tag vs GTM — which should I use?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Google Tag Manager (GTM) is always recommended because it offers flexibility without changing site code. Google Tag (gtag.js) is direct but requires developer help for every change. For most businesses, GTM is the better choice.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What are Enhanced Conversions?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Enhanced Conversions send hashed user data (email, phone) to Google for better matching. They improve tracking accuracy by 5-15%, especially on iOS devices. Implementation is straightforward through GTM or Google Tag.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How many conversions do I need for Smart Bidding?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Google recommends a minimum of 15-30 conversions per month per campaign for Target CPA, and 50+ for Target ROAS. Below that, the algorithm lacks sufficient data and results are unpredictable. In that case, use Manual CPC or Maximize Clicks.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why don&apos;t conversions match between Google Ads and GA4?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Different attribution models: Google Ads uses last-click by default with a 30-day window, GA4 uses data-driven with a 90-day window. Different counting methods (Google Ads counts every conversion, GA4 counts sessions). Always compare the same periods and understand the differences.
          </div>
        </details>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: February 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Author: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
