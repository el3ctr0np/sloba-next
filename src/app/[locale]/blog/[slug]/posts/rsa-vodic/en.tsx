import { Link } from "@/i18n/navigation";

export default function RsaGuideEN() {
  return (
    <>
      {/* ── TL;DR box ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Responsive Search Ads are the only text ad format in Google Ads.
          The key to success is not 15 headlines — it is 7-8 precisely distributed by role.
          This guide gives you the exact framework I use on client accounts.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7-8</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">headlines, not 15</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">336</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">combinations (enough)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">59%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">use AI for ad copy</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">headline types</p>
          </div>
        </div>
      </div>

      {/* ── Table of Contents ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#why-rsa-dominates-in-2026" className="text-sm text-gray-700 hover:text-primary underline">Why the RSA Format Dominates in 2026</a></li>
          <li><a href="#what-are-responsive-search-ads-and-how-they-work" className="text-sm text-gray-700 hover:text-primary underline">What Are Responsive Search Ads and How They Work</a></li>
          <li><a href="#why-7-8-headlines-not-15" className="text-sm text-gray-700 hover:text-primary underline">Why 7-8 Headlines, Not 15</a></li>
          <li><a href="#7-headline-types-that-cover-everything" className="text-sm text-gray-700 hover:text-primary underline">7 Headline Types That Cover Everything</a></li>
          <li><a href="#traffic-temperature-approach" className="text-sm text-gray-700 hover:text-primary underline">Traffic Temperature Approach — Match Your Tone to the Audience</a></li>
          <li><a href="#how-to-write-an-rsa-step-by-step" className="text-sm text-gray-700 hover:text-primary underline">How to Write an RSA Step by Step</a></li>
          <li><a href="#description-strategy" className="text-sm text-gray-700 hover:text-primary underline">Description Strategy</a></li>
          <li><a href="#pinning-yes-or-no" className="text-sm text-gray-700 hover:text-primary underline">Pinning — Yes or No?</a></li>
          <li><a href="#most-common-rsa-mistakes" className="text-sm text-gray-700 hover:text-primary underline">Most Common RSA Mistakes and How to Avoid Them</a></li>
          <li><a href="#rsa-testing-the-iteration-loop" className="text-sm text-gray-700 hover:text-primary underline">RSA Testing — The Iteration Loop</a></li>
          <li><a href="#frequently-asked-questions-about-rsa" className="text-sm text-gray-700 hover:text-primary underline">Frequently Asked Questions About RSA</a></li>
          <li><a href="#conclusion" className="text-sm text-gray-700 hover:text-primary underline">Conclusion</a></li>
          <li><a href="#related-guides" className="text-sm text-gray-700 hover:text-primary underline">Related Guides</a></li>
        </ol>
      </nav>


      {/* ── Section 1: Hook intro ── */}
      <h2 id="why-rsa-dominates-in-2026">Why the RSA Format Dominates in 2026</h2>
      <p>
        Since June 2022, Responsive Search Ads have been the <strong>only text ad type</strong> you
        can create in Google Ads. Expanded Text Ads (ETAs) no longer exist. Every
        Search ad you write today is an RSA.
      </p>
      <p>
        The problem? Most advertisers use RSAs incorrectly. They fill all 15 headlines because
        Google suggests it, give no thought to angle distribution, then wonder why their
        Ad Strength reads &quot;Excellent&quot; whilst CTR is below average.
      </p>
      <p>
        According to the <a href="https://ppcsurvey.com" target="_blank" rel="noopener noreferrer">State of PPC 2026 report</a> (1,306
        respondents), <strong>59% of PPC professionals now use AI to write ad copy</strong> — up from 42%
        two years ago. But AI without a framework produces generic copy. And generic copy in
        RSAs means your ad blends into every other result on the page.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">From my experience</p>
        <p className="text-blue-800 text-sm mb-0">
          After managing Google Ads accounts across eCommerce, Lead Gen, and local services —
          RSAs with 7-8 well-distributed headlines consistently outperform RSAs with 15 headlines
          on both CTR and conversions. The reason is mathematics, not opinion.
        </p>
      </div>

      <p>
        In this guide you will get the exact framework I use on client accounts:
        how many headlines to write, which type goes in which slot, how to adapt tone
        to audience temperature, and how to test and iterate.
      </p>

      <hr />


      {/* ── Section 2: What are RSAs ── */}
      <h2 id="what-are-responsive-search-ads-and-how-they-work">What Are Responsive Search Ads and How They Work</h2>
      <p>
        <a href="https://support.google.com/google-ads/answer/7684791" target="_blank" rel="noopener noreferrer">Responsive Search Ads</a> are
        the ad format in Google Search campaigns where you input multiple headlines (up to 15) and descriptions (up to 4),
        and Google&apos;s machine learning automatically combines and serves the combinations that are
        most relevant for each individual searcher.
      </p>

      <h3>What you give Google</h3>
      <ul>
        <li><strong>Up to 15 headlines</strong> — each up to 30 characters</li>
        <li><strong>Up to 4 descriptions</strong> — each up to 90 characters</li>
        <li><strong>Final URL</strong> — your landing page</li>
        <li><strong>Display path</strong> — shown URL (2 fields x 15 characters)</li>
      </ul>

      <h3>What Google does with it</h3>
      <p>
        Google shows <strong>3 headlines + 2 descriptions</strong> in each ad impression. It combines
        them based on signals: keyword, device, location, time of day, user history.
        The goal: find the combination with the highest probability of a click and conversion.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">The key rule</p>
        <p className="text-yellow-800 text-sm mb-0">
          Every headline must make sense alongside any other headline. Google will combine
          headline 1 with headline 8 and headline 12 — if two headlines say the same thing or
          contradict each other, the ad loses quality.
        </p>
      </div>

      <hr />


      {/* ── Section 3: Why 7-8 headlines ── */}
      <h2 id="why-7-8-headlines-not-15">Why 7-8 Headlines, Not 15</h2>
      <p>
        This is the most important concept in the entire guide. Google <em>allows</em> 15 headlines,
        but that does not mean you should use all 15.
      </p>
      <p>
        The reason is mathematical. Google picks 3 of your headlines for each impression. The number of possible
        combinations depends on how many headlines you have:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">No. of headlines</th>
              <th className="py-3 px-4 font-heading font-semibold">3-headline combinations</th>
              <th className="py-3 px-4 font-heading font-semibold">Min. impressions to learn</th>
              <th className="py-3 px-4 font-heading font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">7</td>
              <td className="py-3 px-4">210</td>
              <td className="py-3 px-4">~21,000</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Optimal</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">8</td>
              <td className="py-3 px-4">336</td>
              <td className="py-3 px-4">~33,600</td>
              <td className="py-3 px-4"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Optimal</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">10</td>
              <td className="py-3 px-4">720</td>
              <td className="py-3 px-4">~72,000</td>
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Too many</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">15</td>
              <td className="py-3 px-4">2,730</td>
              <td className="py-3 px-4">~273,000</td>
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Data poverty</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The calculation: each combination needs a minimum of ~100 impressions for Google to evaluate its
        potential. With 15 headlines, you need <strong>273,000 impressions</strong> before the
        algorithm has sufficient data. With 8 headlines — only 33,600.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          The rule: More headlines = more combinations = less data per combination = slower learning = worse results.
        </p>
      </div>

      <p>
        This does not mean you should <em>never</em> use 15 headlines. If your account generates
        100,000+ impressions per month per ad group, you can afford more. But for
        most accounts — 7-8 headlines is the sweet spot.
      </p>

      <hr />


      {/* ── Section 4: 7 headline types ── */}
      <h2 id="7-headline-types-that-cover-everything">7 Headline Types That Cover Everything</h2>
      <p>
        Instead of writing random headlines and hoping Google finds a good combination,
        use <strong>angle-based slot distribution</strong>. Each headline has a
        clear role — and together they cover the complete persuasion journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {/* Type 1 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">H1</span>
            <h3 className="font-heading font-semibold text-base mb-0">Relevance Anchor</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">Signal that the ad is relevant to the search query.</p>
          <p className="text-xs text-gray-500 mb-1 font-semibold">Examples:</p>
          <ul className="text-sm text-gray-700 mb-0 pl-4">
            <li>&quot;HR Software for SMEs&quot;</li>
            <li>&quot;Emergency Boiler Repair London&quot;</li>
            <li>DKI: {"{"}KeyWord:Anti-Ageing Skincare{"}"}</li>
          </ul>
        </div>

        {/* Type 2 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">H2</span>
            <h3 className="font-heading font-semibold text-base mb-0">Value Proposition</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">Your core offer plus the primary benefit.</p>
          <p className="text-xs text-gray-500 mb-1 font-semibold">Examples:</p>
          <ul className="text-sm text-gray-700 mb-0 pl-4">
            <li>&quot;Dermatologist-Tested Formulas&quot;</li>
            <li>&quot;More Leads, Lower Cost Per Click&quot;</li>
            <li>&quot;All-in-One Platform for Teams&quot;</li>
          </ul>
        </div>

        {/* Type 3 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">H3</span>
            <h3 className="font-heading font-semibold text-base mb-0">USP / Benefit</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">Why you are different from the competition.</p>
          <p className="text-xs text-gray-500 mb-1 font-semibold">Examples:</p>
          <ul className="text-sm text-gray-700 mb-0 pl-4">
            <li>&quot;Results in 30 Days or Your Money Back&quot;</li>
            <li>&quot;No Contract — Cancel Anytime&quot;</li>
            <li>&quot;Engineer On-Site Within 2 Hours&quot;</li>
          </ul>
        </div>

        {/* Type 4 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">H4</span>
            <h3 className="font-heading font-semibold text-base mb-0">Social Proof</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">Trust and credibility signals.</p>
          <p className="text-xs text-gray-500 mb-1 font-semibold">Examples:</p>
          <ul className="text-sm text-gray-700 mb-0 pl-4">
            <li>&quot;Trusted by 15,000+ UK Customers&quot;</li>
            <li>&quot;4.9/5 Stars on Trustpilot&quot;</li>
            <li>&quot;Which? Recommended Provider&quot;</li>
          </ul>
        </div>

        {/* Type 5 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">H5</span>
            <h3 className="font-heading font-semibold text-base mb-0">Risk Removal</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">Remove the barrier to taking action.</p>
          <p className="text-xs text-gray-500 mb-1 font-semibold">Examples:</p>
          <ul className="text-sm text-gray-700 mb-0 pl-4">
            <li>&quot;Free 14-Day Trial&quot;</li>
            <li>&quot;30-Day Money-Back Guarantee&quot;</li>
            <li>&quot;No Win No Fee — Zero Upfront Cost&quot;</li>
          </ul>
        </div>

        {/* Type 6 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">H6</span>
            <h3 className="font-heading font-semibold text-base mb-0">Call-to-Action</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">The clear action you want them to take.</p>
          <p className="text-xs text-gray-500 mb-1 font-semibold">Examples:</p>
          <ul className="text-sm text-gray-700 mb-0 pl-4">
            <li>&quot;Request a Free Audit Today&quot;</li>
            <li>&quot;Start Your Free Trial Now&quot;</li>
            <li>&quot;Call Us — We&apos;re Available 24/7&quot;</li>
          </ul>
        </div>

        {/* Type 7 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card md:col-span-2">
          <div className="flex items-center gap-3 mb-2">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">H7</span>
            <h3 className="font-heading font-semibold text-base mb-0">Lead Angle x2 (variable)</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Double down on your strongest signal — which one depends on traffic temperature (more on this in the next section).
            For cold traffic: a second Problem/Pain headline. For warm: a second USP. For hot: a second Social Proof.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Why this works</p>
        <p className="text-blue-800 text-sm mb-0">
          When each headline has a different role, every combination Google serves covers
          a different persuasive angle. The result: your ad is relevant to a wider range of users
          and motivations. Instead of 7 variations of the same message — you get 7 complementary messages.
        </p>
      </div>

      <hr />


      {/* ── Section 5: Traffic Temperature ── */}
      <h2 id="traffic-temperature-approach">Traffic Temperature Approach — Match Your Tone to the Audience</h2>
      <p>
        Not all searchers are the same. Someone searching &quot;what is CRM software&quot; is in a
        completely different mindset from someone searching &quot;HubSpot pricing UK&quot;.
        Your RSA needs to match that temperature.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Temperature</th>
              <th className="py-3 px-4 font-heading font-semibold">Search intent</th>
              <th className="py-3 px-4 font-heading font-semibold">H7 should be</th>
              <th className="py-3 px-4 font-heading font-semibold">CTA tone</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Cold</td>
              <td className="py-3 px-4">Research, education</td>
              <td className="py-3 px-4">Problem/Pain (second variant)</td>
              <td className="py-3 px-4">&quot;Learn More&quot;, &quot;See How It Works&quot;</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Warm</td>
              <td className="py-3 px-4">Comparison, evaluation</td>
              <td className="py-3 px-4">USP or Value Prop (second variant)</td>
              <td className="py-3 px-4">&quot;Compare Plans&quot;, &quot;Book a Free Demo&quot;</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Hot</td>
              <td className="py-3 px-4">Purchase, booking</td>
              <td className="py-3 px-4">Social Proof or Risk Removal (second variant)</td>
              <td className="py-3 px-4">&quot;Get Started Today&quot;, &quot;Order Now&quot;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        In practice, this means creating 2-3 RSAs for the same service — one per traffic temperature.
        All share the same foundation (H1-H6), but H7 and the CTA tone differ.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Practical example — skincare eCommerce</p>
        <p className="text-yellow-800 text-sm mb-0">
          A skincare brand has an ad group for &quot;best anti-ageing serum UK&quot; (hot traffic).
          H7 becomes a second Social Proof: &quot;Trusted by 15,000+ UK Customers&quot;.
          CTA: &quot;Shop Now — Free Next-Day Delivery Over £50&quot;. For the cold query &quot;how does retinol work&quot;,
          H7 becomes Problem/Pain: &quot;Tired of Products That Don&apos;t Deliver?&quot;, CTA: &quot;See the Science&quot;.
        </p>
      </div>

      <hr />


      {/* ── Section 6: Step by step ── */}
      <h2 id="how-to-write-an-rsa-step-by-step">How to Write an RSA Step by Step</h2>
      <p>
        Here is the exact process I follow on every client account. Four phases,
        in a clear order.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">1</span>
            <div>
              <strong>Identify traffic temperature</strong>
              <span className="text-gray-500"> — Review the keywords in the ad group. Are they informational,
              comparative, or transactional? This determines the tone for H7 and your CTA.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">2</span>
            <div>
              <strong>Write H1 — Relevance Anchor</strong>
              <span className="text-gray-500"> — Use the keyword or DKI (Dynamic Keyword Insertion).
              Your default must be strong enough to stand alone. Poor: {"{"}KeyWord:Our Products{"}"}.
              Good: {"{"}KeyWord:Anti-Ageing Skincare{"}"}.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">3</span>
            <div>
              <strong>Fill H2-H6 following the framework</strong>
              <span className="text-gray-500"> — Value Proposition, USP, Social Proof, Risk Removal, CTA.
              Each headline up to 30 characters. Each must make sense alongside any other.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">4</span>
            <div>
              <strong>Add H7 based on temperature</strong>
              <span className="text-gray-500"> — This is your variable slot. Cold traffic gets a second
              Problem/Pain headline, warm gets a second USP, hot gets a second Social Proof.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">5</span>
            <div>
              <strong>Write 2-3 descriptions</strong>
              <span className="text-gray-500"> — D1: Problem + Solution (include the keyword). D2: Proof + CTA.
              D3 (optional): Offer + Urgency — only if a genuine deadline exists.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">6</span>
            <div>
              <strong>Add extensions (assets)</strong>
              <span className="text-gray-500"> — Minimum: Sitelinks (4+), Callouts (4+), Structured Snippets (2+ headers),
              Business Name, Logo. Optional: Image, Call, Location, Promotion.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">7</span>
            <div>
              <strong>Review and launch</strong>
              <span className="text-gray-500"> — Read every headline against every other — do they make sense together?
              Is anything repeated? Upload, do NOT pin (except for compliance), and wait for approval.</span>
            </div>
          </div>
        </div>
      </div>

      <p>
        Here is what a completed RSA looks like for a UK skincare eCommerce brand using this framework:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Slot</th>
              <th className="py-3 px-4 font-heading font-semibold">Type</th>
              <th className="py-3 px-4 font-heading font-semibold">Example Headline</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">H1</td>
              <td className="py-3 px-4">Relevance Anchor</td>
              <td className="py-3 px-4">Premium Anti-Ageing Skincare UK</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">H2</td>
              <td className="py-3 px-4">Value Proposition</td>
              <td className="py-3 px-4">Dermatologist-Tested Formulas</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">H3</td>
              <td className="py-3 px-4">USP / Benefit</td>
              <td className="py-3 px-4">Visible Results in 28 Days</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">H4</td>
              <td className="py-3 px-4">Social Proof</td>
              <td className="py-3 px-4">Trusted by 15,000+ UK Customers</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">H5</td>
              <td className="py-3 px-4">Risk Removal</td>
              <td className="py-3 px-4">Free Next-Day Delivery Over £50</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">H6</td>
              <td className="py-3 px-4">Call-to-Action</td>
              <td className="py-3 px-4">Shop the Full Range Today</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">H7 (Cold)</td>
              <td className="py-3 px-4">Problem/Pain</td>
              <td className="py-3 px-4">Tired of Products That Don&apos;t Work?</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">H7 (Hot)</td>
              <td className="py-3 px-4">Urgency / Scarcity</td>
              <td className="py-3 px-4">Spring Sale — 20% Off This Week</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />


      {/* ── Section 7: Descriptions ── */}
      <h2 id="description-strategy">Description Strategy</h2>
      <p>
        Headlines attract attention — descriptions close the deal. Google shows 2 descriptions from your
        2-4. Each description has up to 90 characters and should <strong>expand</strong> on the message in the headlines, not repeat it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-xs">D1</span>
            <p className="font-heading font-semibold text-sm mb-0">Problem + Solution</p>
          </div>
          <p className="text-sm text-gray-600 mb-2">Validate the user&apos;s pain and offer the solution. Include the keyword — Google bolds it.</p>
          <p className="text-xs bg-gray-100 rounded p-2 text-gray-700 mb-0">
            &quot;Struggling with blocked drains? Our engineers resolve the problem same day with a 12-month guarantee.&quot;
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-xs">D2</span>
            <p className="font-heading font-semibold text-sm mb-0">Proof + CTA</p>
          </div>
          <p className="text-sm text-gray-600 mb-2">Build trust with a concrete proof point and close with a clear call to action.</p>
          <p className="text-xs bg-gray-100 rounded p-2 text-gray-700 mb-0">
            &quot;500+ five-star reviews across London. Call now — engineer on-site within 2 hours, 24/7.&quot;
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-xs">D3</span>
            <p className="font-heading font-semibold text-sm mb-0">Offer + Urgency (optional)</p>
          </div>
          <p className="text-sm text-gray-600 mb-2">Use ONLY when there is a genuine deadline. False urgency destroys trust.</p>
          <p className="text-xs bg-gray-100 rounded p-2 text-gray-700 mb-0">
            &quot;20% off all orders this bank holiday weekend. Limited stock — order by Sunday midnight.&quot;
          </p>
        </div>
      </div>

      <hr />


      {/* ── Section 8: Pinning ── */}
      <h2 id="pinning-yes-or-no">Pinning — Yes or No?</h2>
      <p>
        Pinning lets you &quot;lock&quot; a specific headline to position 1, 2, or 3.
        It sounds useful, but in 90% of cases it <strong>hurts performance</strong>.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          The rule: Default = DO NOT PIN. Pinning restricts Google&apos;s optimisation and reduces the number of combinations the algorithm can test.
        </p>
      </div>

      <h3>When pinning is justified</h3>
      <ul>
        <li><strong>Regulatory requirements</strong> — financial services, healthcare (disclaimer must be visible)</li>
        <li><strong>Brand guidelines</strong> — brand name must appear in headline 1</li>
        <li><strong>Critical relevance</strong> — keyword MUST appear in headline 1 for a specific campaign</li>
      </ul>

      <h3>When it is NOT justified</h3>
      <ul>
        <li>&quot;I want this headline to show more often&quot; — let Google optimise</li>
        <li>&quot;This is my best headline&quot; — if it is, Google will favour it automatically</li>
        <li>&quot;Every headline fixed to an exact position&quot; — this is the ETA approach, not RSA</li>
      </ul>

      <hr />


      {/* ── Section 9: Most common mistakes ── */}
      <h2 id="most-common-rsa-mistakes">Most Common RSA Mistakes and How to Avoid Them</h2>

      <div className="space-y-4 my-6">
        {/* Mistake 1 */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-red-50 border-b border-red-200 px-5 py-3">
            <p className="font-heading font-semibold text-red-800 text-sm mb-0">Mistake: All 15 headline slots filled</p>
          </div>
          <div className="bg-green-50 px-5 py-3">
            <p className="font-heading font-semibold text-green-800 text-sm mb-1">Fix:</p>
            <p className="text-green-700 text-sm mb-0">
              Use 7-8 headlines. More means data poverty. Each additional headline reduces
              the volume of data per combination, slowing the algorithm&apos;s learning.
            </p>
          </div>
        </div>

        {/* Mistake 2 */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-red-50 border-b border-red-200 px-5 py-3">
            <p className="font-heading font-semibold text-red-800 text-sm mb-0">Mistake: All headlines say the same thing</p>
          </div>
          <div className="bg-green-50 px-5 py-3">
            <p className="font-heading font-semibold text-green-800 text-sm mb-1">Fix:</p>
            <p className="text-green-700 text-sm mb-0">
              Use angle-based distribution. Each headline has a different role:
              relevance, benefit, proof, risk removal, call to action. 7 angles = 7 reasons to click.
            </p>
          </div>
        </div>

        {/* Mistake 3 */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-red-50 border-b border-red-200 px-5 py-3">
            <p className="font-heading font-semibold text-red-800 text-sm mb-0">Mistake: Descriptions repeat the headlines</p>
          </div>
          <div className="bg-green-50 px-5 py-3">
            <p className="font-heading font-semibold text-green-800 text-sm mb-1">Fix:</p>
            <p className="text-green-700 text-sm mb-0">
              Descriptions should EXPAND the message. The headline says &quot;Trusted by 15,000+ UK Customers&quot;,
              the description explains: &quot;Join brands that reduced CPA by 40% within their first 90 days.&quot;
            </p>
          </div>
        </div>

        {/* Mistake 4 */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-red-50 border-b border-red-200 px-5 py-3">
            <p className="font-heading font-semibold text-red-800 text-sm mb-0">Mistake: Everything pinned to positions</p>
          </div>
          <div className="bg-green-50 px-5 py-3">
            <p className="font-heading font-semibold text-green-800 text-sm mb-1">Fix:</p>
            <p className="text-green-700 text-sm mb-0">
              Only pin when regulation requires it. Otherwise, let Google optimise.
              Over-pinning converts your RSA into an ETA — you lose all the benefits of automatic combination.
            </p>
          </div>
        </div>

        {/* Mistake 5 */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-red-50 border-b border-red-200 px-5 py-3">
            <p className="font-heading font-semibold text-red-800 text-sm mb-0">Mistake: Using Ad Strength as your only metric</p>
          </div>
          <div className="bg-green-50 px-5 py-3">
            <p className="font-heading font-semibold text-green-800 text-sm mb-1">Fix:</p>
            <p className="text-green-700 text-sm mb-0">
              Ad Strength is Google&apos;s input signal, not a performance metric. Aim for &quot;Good&quot;
              or better, but measure success by CTR, conversions, and CPA — not the score shown in the interface.
            </p>
          </div>
        </div>

        {/* Mistake 6 */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-red-50 border-b border-red-200 px-5 py-3">
            <p className="font-heading font-semibold text-red-800 text-sm mb-0">Mistake: Fake urgency in descriptions</p>
          </div>
          <div className="bg-green-50 px-5 py-3">
            <p className="font-heading font-semibold text-green-800 text-sm mb-1">Fix:</p>
            <p className="text-green-700 text-sm mb-0">
              &quot;Today only!&quot; that runs all year destroys trust. Use D3 (urgency)
              ONLY when you have a genuine deadline. Otherwise — skip it and stick to 2 descriptions.
            </p>
          </div>
        </div>
      </div>

      <hr />


      {/* ── Section 10: Testing ── */}
      <h2 id="rsa-testing-the-iteration-loop">RSA Testing — The Iteration Loop</h2>
      <p>
        Writing the RSA is only the beginning. Real results come through systematic testing
        and iteration. I use a four-step cycle repeated every 2-8 weeks.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">1</span>
            <div>
              <strong>Templatise</strong>
              <span className="text-gray-500"> — Document which angle sits in which slot. Keep a record
              of every RSA in a spreadsheet with slot + angle + headline text. This is your playbook.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">2</span>
            <div>
              <strong>Aggregate</strong>
              <span className="text-gray-500"> — Collect the data. Look at: impressions per headline,
              CTR per combination (Asset report in Google Ads), conversions per ad variant.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold text-sm">3</span>
            <div>
              <strong>Diagnose</strong>
              <span className="text-gray-500"> — Classify each headline into one of 4 quadrants:</span>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Quadrant</th>
              <th className="py-3 px-4 font-heading font-semibold">Impressions</th>
              <th className="py-3 px-4 font-heading font-semibold">Performance</th>
              <th className="py-3 px-4 font-heading font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Champions</span></td>
              <td className="py-3 px-4">High</td>
              <td className="py-3 px-4">High CTR/Conv</td>
              <td className="py-3 px-4">Keep and learn from them</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Hidden Gems</span></td>
              <td className="py-3 px-4">Low</td>
              <td className="py-3 px-4">High CTR/Conv</td>
              <td className="py-3 px-4">Duplicate the angle in a new RSA</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Silent Killers</span></td>
              <td className="py-3 px-4">High</td>
              <td className="py-3 px-4">Low CTR/Conv</td>
              <td className="py-3 px-4">Replace — consuming impressions without results</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Trash</span></td>
              <td className="py-3 px-4">Low</td>
              <td className="py-3 px-4">Low CTR/Conv</td>
              <td className="py-3 px-4">Remove and write a new headline</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center font-heading font-bold text-sm">4</span>
            <div>
              <strong>Iterate</strong>
              <span className="text-gray-500"> — Based on your diagnosis: replace Trash and Silent Killers,
              scale Champions and Hidden Gems. Create a new RSA variant and launch it.
              Repeat the cycle in 2-4 weeks.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">How long to wait before analysing</p>
        <p className="text-blue-800 text-sm mb-0">
          Minimum 2 weeks and 1,000+ impressions per RSA variant. Without that, the data is unreliable.
          For lower-volume accounts, wait 4 weeks. Never change an RSA within the first 7 days —
          give Google time for its learning period.
        </p>
      </div>

      <hr />


      {/* ── Section 11: FAQ ── */}
      <h2 id="frequently-asked-questions-about-rsa">Frequently Asked Questions About RSA</h2>

      <div className="space-y-3 my-6">
        <details className="group border border-gray-200 rounded-lg">
          <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-heading font-semibold text-sm hover:bg-gray-50">
            How many RSAs should I have per ad group?
            <span className="ml-2 text-gray-400 group-open:rotate-45 transition-transform text-lg">+</span>
          </summary>
          <div className="px-5 pb-4 text-sm text-gray-600">
            Google recommends a minimum of 1 RSA per ad group, with 2-3 being optimal. Two RSAs
            allow you to A/B test different approaches (for example, one focused on price,
            another on quality). Do not go above 3 — you fragment your data.
          </div>
        </details>

        <details className="group border border-gray-200 rounded-lg">
          <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-heading font-semibold text-sm hover:bg-gray-50">
            Does an &quot;Excellent&quot; Ad Strength guarantee better results?
            <span className="ml-2 text-gray-400 group-open:rotate-45 transition-transform text-lg">+</span>
          </summary>
          <div className="px-5 pb-4 text-sm text-gray-600">
            No. Ad Strength is Google&apos;s input signal that measures the variety and relevance
            of your headlines — it is not a performance metric. An RSA with &quot;Good&quot; Ad Strength and precise
            angle-based headlines will often outperform an &quot;Excellent&quot; RSA built from 15 generic headlines.
            Aim for &quot;Good&quot; as your minimum, but measure success by CTR and conversions.
          </div>
        </details>

        <details className="group border border-gray-200 rounded-lg">
          <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-heading font-semibold text-sm hover:bg-gray-50">
            Should I use AI to write RSA headlines?
            <span className="ml-2 text-gray-400 group-open:rotate-45 transition-transform text-lg">+</span>
          </summary>
          <div className="px-5 pb-4 text-sm text-gray-600">
            Yes, but with a framework. 59% of PPC professionals already use LLMs for ad copy
            (State of PPC 2026). The problem arises when AI writes without structure — you end up with 15
            variations of the same message. Use angle-based slot distribution as your brief for AI:
            &quot;Write H1 (Relevance Anchor, 30 characters), H2 (Value Proposition)...&quot; and so on.
          </div>
        </details>

        <details className="group border border-gray-200 rounded-lg">
          <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-heading font-semibold text-sm hover:bg-gray-50">
            How frequently should I update my RSAs?
            <span className="ml-2 text-gray-400 group-open:rotate-45 transition-transform text-lg">+</span>
          </summary>
          <div className="px-5 pb-4 text-sm text-gray-600">
            Use the Iteration Loop: every 2-8 weeks analyse your data, identify
            Champions and Silent Killers, and create a new iteration. Do not update an RSA before
            you have at least 1,000 impressions. Frequent changes reset the learning period.
          </div>
        </details>

        <details className="group border border-gray-200 rounded-lg">
          <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-heading font-semibold text-sm hover:bg-gray-50">
            What if I do not have enough impressions for 7-8 headlines?
            <span className="ml-2 text-gray-400 group-open:rotate-45 transition-transform text-lg">+</span>
          </summary>
          <div className="px-5 pb-4 text-sm text-gray-600">
            For ad groups receiving fewer than 5,000 impressions per month, use 5-6 headlines. Fewer
            headlines mean fewer combinations mean faster learning. Five precise headlines are better
            than 8 of which 3 are weak.
          </div>
        </details>

        <details className="group border border-gray-200 rounded-lg">
          <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-heading font-semibold text-sm hover:bg-gray-50">
            How does RSA work alongside Smart Bidding?
            <span className="ml-2 text-gray-400 group-open:rotate-45 transition-transform text-lg">+</span>
          </summary>
          <div className="px-5 pb-4 text-sm text-gray-600">
            RSA and Smart Bidding are complementary. Smart Bidding (tCPA, tROAS) optimises
            <em> how much</em> you pay per click, whilst RSA optimises <em>which</em> ad is served.
            According to State of PPC 2026, tROAS and tCPA are the most widely used and highest-rated bid
            strategies. The combination: Smart Bidding + angle-based RSA = automation with structure.
          </div>
        </details>

        <details className="group border border-gray-200 rounded-lg">
          <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-heading font-semibold text-sm hover:bg-gray-50">
            Does RSA replace the need for A/B testing?
            <span className="ml-2 text-gray-400 group-open:rotate-45 transition-transform text-lg">+</span>
          </summary>
          <div className="px-5 pb-4 text-sm text-gray-600">
            No. RSA optimises combinations <em>within</em> a single ad. A/B testing
            (Google Ads Experiments) tests <em>different approaches</em> — for example, an RSA focused
            on price versus an RSA focused on quality. Both are needed for complete optimisation.
          </div>
        </details>
      </div>

      {/* ── FAQ Schema JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How many RSAs should I have per ad group?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Google recommends a minimum of 1 RSA per ad group, with 2-3 being optimal. Two RSAs allow you to A/B test different approaches. Do not go above 3 as you fragment your data.",
                },
              },
              {
                "@type": "Question",
                name: "Does an 'Excellent' Ad Strength guarantee better results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Ad Strength is Google's input signal that measures the variety and relevance of your headlines — it is not a performance metric. Aim for 'Good' as your minimum, but measure success by CTR and conversions.",
                },
              },
              {
                "@type": "Question",
                name: "Should I use AI to write RSA headlines?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, but with a framework. 59% of PPC professionals already use LLMs for ad copy (State of PPC 2026). Use angle-based slot distribution as your brief for AI instead of free-form generation.",
                },
              },
              {
                "@type": "Question",
                name: "How frequently should I update my RSAs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Use the Iteration Loop: every 2-8 weeks analyse your data, identify Champions and Silent Killers, and create a new iteration. Do not update an RSA before you have at least 1,000 impressions.",
                },
              },
              {
                "@type": "Question",
                name: "How does RSA work alongside Smart Bidding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "RSA and Smart Bidding are complementary. Smart Bidding optimises how much you pay per click, whilst RSA optimises which ad is served. The combination of tROAS/tCPA and angle-based RSA delivers automation with structure.",
                },
              },
              {
                "@type": "Question",
                name: "Does RSA replace the need for A/B testing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. RSA optimises combinations within a single ad. A/B testing tests different approaches — for example, an RSA focused on price versus one focused on quality. Both are needed for complete optimisation.",
                },
              },
            ],
          }),
        }}
      />

      <hr />


      {/* ── Conclusion ── */}
      <h2 id="conclusion">Conclusion</h2>
      <p>
        RSA is not &quot;fill 15 headlines and wait&quot;. It is a systematic framework where each
        headline has a clear role, where tone follows traffic temperature, and where results
        improve through iteration — not guesswork.
      </p>
      <p>
        Key takeaways:
      </p>
      <ul>
        <li><strong>7-8 headlines</strong> — the mathematics is clear, data poverty is real</li>
        <li><strong>Angle-based distribution</strong> — each headline covers a different persuasive angle</li>
        <li><strong>Traffic Temperature</strong> — adapt H7 and your CTA to match search intent</li>
        <li><strong>Do not pin</strong> — unless regulation requires it</li>
        <li><strong>Iteration Loop</strong> — test, diagnose, iterate every 2-8 weeks</li>
      </ul>

      {/* CTA box */}
      <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 my-8 text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Want someone to write RSAs that actually convert?
        </p>
        <p className="text-slate-300 mb-4 text-sm">
          I manage Google Ads accounts for eCommerce, Lead Gen, and local businesses across the UK.
          Free audit of your account — including a full analysis of your existing RSAs.
        </p>
        <Link
          href="/kontakt"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-heading font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Request a free audit
        </Link>
      </div>

      <hr />


      {/* ── Related guides ── */}
      <h2 id="related-guides">Related Guides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-guide" } }} className="block border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-md transition-all no-underline">
          <p className="font-heading font-semibold text-sm text-gray-900 mb-1">Quality Score Guide</p>
          <p className="text-xs text-gray-500 mb-0">How to improve QS and reduce CPC by 28%+</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-keyword-guide" } }} className="block border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-md transition-all no-underline">
          <p className="font-heading font-semibold text-sm text-gray-900 mb-1">Google Ads Keyword Guide</p>
          <p className="text-xs text-gray-500 mb-0">Research, match types and campaign structure</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-mistakes" } }} className="block border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-md transition-all no-underline">
          <p className="font-heading font-semibold text-sm text-gray-900 mb-1">Google Ads Mistakes</p>
          <p className="text-xs text-gray-500 mb-0">The most common mistakes and how to avoid them</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "how-much-does-google-ads-cost" } }} className="block border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-md transition-all no-underline">
          <p className="font-heading font-semibold text-sm text-gray-900 mb-1">How Much Does Google Ads Cost?</p>
          <p className="text-xs text-gray-500 mb-0">Real costs, budgets, and ROI calculation</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negative-keywords-guide" } }} className="block border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-md transition-all no-underline">
          <p className="font-heading font-semibold text-sm text-gray-900 mb-1">Negative Keywords Guide</p>
          <p className="text-xs text-gray-500 mb-0">Protect your budget from irrelevant searches</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-guide" } }} className="block border border-gray-200 rounded-xl p-4 hover:border-primary hover:shadow-md transition-all no-underline">
          <p className="font-heading font-semibold text-sm text-gray-900 mb-1">Conversion Tracking Guide</p>
          <p className="text-xs text-gray-500 mb-0">Measuring results correctly in Google Ads</p>
        </Link>
      </div>


      {/* ── Footer: date + author ── */}
      <hr />
      <p className="text-xs text-gray-400 mt-4">
        Last updated: March 2026 &middot; Author: Slobodan Jelisavac, Google Ads Consultant &middot; Reading time: ~14 min
      </p>
    </>
  );
}
