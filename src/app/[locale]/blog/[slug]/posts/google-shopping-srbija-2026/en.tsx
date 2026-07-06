import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function GoogleShoppingSerbiaLaunch2026EN() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Quick Summary</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google Shopping Ads launches in Serbia in November 2026 — right before Black Friday season. Croatia and the rest of the Ex-Yu region follow in Q4 2026. This is the biggest shift in the Serbian eCommerce market in the last 10 years. You have 7 months to prepare before your competitors even realise what is happening.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Nov 2026</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Serbia launch date</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">15+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">new EMEA markets</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7 mo.</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">to prepare (from today)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">£290k+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">revenue from UK Shopping experience</p>
          </div>
        </div>
      </div>

      <p>
        November 2026. You type &quot;men&apos;s jacket zara&quot; into Google search. Instead of just text ads, you see a row of images — jacket, price, store. You click directly. You buy. This is Google Shopping, and that experience is coming to Serbia in less than a year.
      </p>
      <p>
        I have run Google Shopping campaigns for UK clients for over 2 years. With Chelleon UK we generated £290,000+ in revenue through Shopping, at a 1.78x <GlossaryLink slug="poas">POAS</GlossaryLink> (Profit on Ad Spend) in a category with thin margins and brutal competition. I know first-hand what works, what doesn&apos;t, and — most importantly for this post — what Serbian eCommerce businesses need to do before November 2026 so they don&apos;t miss the launch window.
      </p>
      <p>
        This is a pillar post about Google Shopping in Serbia. It covers everything: the launch date, what Shopping actually is, the wider Ex-Yu markets, a 15-step checklist, Merchant Center, the product feed, my UK experience, common mistakes, costs, and CSS strategy. Links to supporting posts are placed throughout for readers who want more detail on specific topics. If you want an experienced hand to set up the whole eCommerce account for you, see our{" "}
        <Link href="/usluge/google-ads-za-ecommerce" className="underline font-medium">Google Ads for eCommerce service</Link>.
      </p>

      <hr />

      <h2>Exactly when Google Shopping arrives in Serbia</h2>
      <p>
        Based on official Google announcements and internal data I track, <strong>Google Shopping Ads officially launches in Serbia in November 2026</strong>. The exact date within November hasn&apos;t been confirmed, but based on the pattern of previous EMEA launches, I expect the first or second week of November.
      </p>
      <p>
        Why November? It&apos;s not a coincidence. Google strategically launches Shopping in new markets right before the Q4 season — Black Friday (November 28th), Cyber Monday, and Christmas campaigns. Advertisers get exactly the season where Shopping makes the most sense: high purchase intent, high AOV, and shoppers actively searching for specific products with intent to buy.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Important note on the wave rollout</p>
        <p className="text-blue-800 text-base mb-0">Google rolls out new markets in waves. Wave 1 markets get access right on the launch date, Wave 2 markets can see a delay of 2-4 weeks. I recommend creating and verifying your Merchant Center account a minimum of 60 days before the launch date — Google sometimes needs time for account review in new markets.</p>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Phase</th>
              <th className="py-3 px-3 font-heading font-semibold">What happens</th>
              <th className="py-3 px-3 font-heading font-semibold">Your action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Now – September 2026</td>
              <td className="py-3 px-3">Preparation, feed optimisation, MC setup</td>
              <td className="py-3 px-3">Complete the 15-step checklist</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">October 2026</td>
              <td className="py-3 px-3">Final checks, feed live, MC verified</td>
              <td className="py-3 px-3">Test campaigns, bug fixing</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">November 2026</td>
              <td className="py-3 px-3">Google Shopping LIVE in Serbia</td>
              <td className="py-3 px-3">Launch campaigns, Q4 budget active</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">December 2026</td>
              <td className="py-3 px-3">Christmas season, peak Shopping volume</td>
              <td className="py-3 px-3">Scale budget, bidding optimisation</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2>What Google Shopping is and why it&apos;s the biggest change for eCommerce in Serbia</h2>
      <p>
        Google Shopping (officially: Google Shopping Ads, or Product Listing Ads — PLA) is an ad format that displays product images, prices, and store names directly in Google Search. Unlike text-based Search ads where you pick keywords, Shopping uses your <strong>product feed</strong> to automatically match products with what users are searching for.
      </p>
      <p>
        Why is this a game-changer for Serbia? Right now, Serbian eCommerce businesses have access to: text-based Google Search ads, Meta Ads (Facebook/Instagram), KupujemProdajem, Limundo, and organic SEO. Shopping changes the game because:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Reason #1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Visual format converts better</h3>
          <p className="text-base text-gray-600 mb-0">The shopper sees the image, price and brand before clicking. Only interested buyers click through — CVR runs 2-3x higher than text ads based on my UK experience.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Reason #2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">High-intent purchase traffic</h3>
          <p className="text-base text-gray-600 mb-0">Nobody searches &quot;nike air max white 43&quot; unless they&apos;re planning to buy. Shopping captures the bottom of the purchase funnel — the highest-value searches.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Reason #3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Competitors aren&apos;t ready</h3>
          <p className="text-base text-gray-600 mb-0">Slovenia and Croatia get Shopping in Q4 2026 — I track the Serbian eCommerce market and 90% of businesses have no product feed or Merchant Center account yet.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Reason #4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Direct channel, no marketplace commission</h3>
          <p className="text-base text-gray-600 mb-0">Shopping puts your product directly in Google search. A shopper searching &quot;robot vacuum&quot; sees your shop with price and image — no middleman, no commission, full control over the customer experience.</p>
        </div>
      </div>

      <p>
        Working 2+ years in the UK market where Shopping is the standard, I&apos;ve seen how much a shopper&apos;s perception changes once a product is shown visually, with price and reviews, right inside the search results. In Serbia, people have relied for years on marketplaces — KupujemProdajem, various listing sites — where nothing was sorted properly or tailored to the kind of user experience Google Shopping delivers. I think this will be a big boom — both for brands that sell, and for buyers who finally get the kind of product browsing experience they deserve.
      </p>

      <hr />

      <h2>Every Ex-Yu market getting Shopping in 2026</h2>
      <p>
        Serbia isn&apos;t the only country in the region. Google is expanding Shopping across the whole Ex-Yu region in Q4 2026, which opens up a multi-market strategy from day one.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Market</th>
              <th className="py-3 px-3 font-heading font-semibold">Currency</th>
              <th className="py-3 px-3 font-heading font-semibold">Launch</th>
              <th className="py-3 px-3 font-heading font-semibold">eCommerce size</th>
              <th className="py-3 px-3 font-heading font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Serbia</td>
              <td className="py-3 px-3">RSD</td>
              <td className="py-3 px-3 font-semibold text-green-700">November 2026</td>
              <td className="py-3 px-3">~€2.1B annually</td>
              <td className="py-3 px-3">Largest market in the region</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Croatia</td>
              <td className="py-3 px-3">EUR</td>
              <td className="py-3 px-3 font-semibold text-green-700">Q4 2026</td>
              <td className="py-3 px-3">~€1.8B annually</td>
              <td className="py-3 px-3">EUR currency, EU market</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Bosnia &amp; Herzegovina</td>
              <td className="py-3 px-3">BAM</td>
              <td className="py-3 px-3 font-semibold text-yellow-700">Q4 2026</td>
              <td className="py-3 px-3">~€0.8B annually</td>
              <td className="py-3 px-3">Smaller market, less competition</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Slovenia</td>
              <td className="py-3 px-3">EUR</td>
              <td className="py-3 px-3 font-semibold text-yellow-700">Q4 2026</td>
              <td className="py-3 px-3">~€1.2B annually</td>
              <td className="py-3 px-3">EU market, higher purchasing power</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Montenegro</td>
              <td className="py-3 px-3">EUR</td>
              <td className="py-3 px-3 font-semibold text-yellow-700">Q4 2026</td>
              <td className="py-3 px-3">~€0.3B annually</td>
              <td className="py-3 px-3">Tourism-driven market</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">North Macedonia</td>
              <td className="py-3 px-3">MKD</td>
              <td className="py-3 px-3 font-semibold text-gray-500">TBD 2027</td>
              <td className="py-3 px-3">~€0.4B annually</td>
              <td className="py-3 px-3">Likely Wave 2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        For Serbian eCommerce businesses with regional ambitions: Croatia and Bosnia &amp; Herzegovina are the logical next step. If you sell in Serbia and already have an English or Serbian/Croatian feed, expanding into the HR and BiH markets is minimal extra work. I recommend planning a multi-market feed structure from the start.
      </p>

      <hr />

      <h2>Preparation checklist: 15 steps before November 2026</h2>
      <p>
        Here is exactly what to do, in the order to do it. Each step has a deadline and an explanation of why it matters. This is the checklist I use with every new Shopping client.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Create a Google Merchant Center account</strong>
              <span className="text-gray-500 ml-2">— Deadline: as soon as registration opens</span>
              <p className="text-base text-gray-600 mt-1 mb-0">MC is mandatory for Shopping ads. <strong>Important (July 2026): registering an MC account for the Serbian market isn&apos;t possible yet</strong> — Google will enable it ahead of the official launch. Readers have told me registration currently doesn&apos;t go through for Serbia. Until then: prepare your business details (a name identical to your site and invoices, address, contact info) and get your feed in order — then open the account the day the option appears. Step-by-step instructions are in the <Link href={{ pathname: "/blog/[slug]", params: { slug: "merchant-center-srbija-setup" } }} className="underline text-blue-700">Merchant Center setup guide</Link>.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Verify and claim your site</strong>
              <span className="text-gray-500 ml-2">— Deadline: now</span>
              <p className="text-base text-gray-600 mt-1 mb-0">Add an HTML tag or Google Analytics to your site to prove ownership. Without verification, you can&apos;t launch Shopping campaigns.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Fill in your business information completely</strong>
              <span className="text-gray-500 ml-2">— Deadline: May 2026</span>
              <p className="text-base text-gray-600 mt-1 mb-0">Fill in address, tax ID, phone number, and email. Google uses this data for trust signals. An incomplete profile means a higher risk of account suspension.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Set up shipping settings for Serbia</strong>
              <span className="text-gray-500 ml-2">— Deadline: June 2026</span>
              <p className="text-base text-gray-600 mt-1 mb-0">Define shipping costs and delivery times. This shows up directly in Shopping ads and affects <GlossaryLink slug="ctr">CTR</GlossaryLink>. Free shipping above a certain amount is a big CTR boost.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Link Merchant Center to your Google Ads account</strong>
              <span className="text-gray-500 ml-2">— Deadline: June 2026</span>
              <p className="text-base text-gray-600 mt-1 mb-0">Without this link you can&apos;t create Shopping campaigns. In MC: Tools → Linked accounts → Google Ads.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div>
              <strong>Create or export your product feed</strong>
              <span className="text-gray-500 ml-2">— Deadline: July 2026</span>
              <p className="text-base text-gray-600 mt-1 mb-0">An XML or TXT file with all your product information. WooCommerce has a plugin, Shopify generates a feed automatically, custom shops need a developer. Details in the <Link href={{ pathname: "/blog/[slug]", params: { slug: "product-feed-srpski-ecommerce" } }} className="underline text-blue-700">Product Feed guide</Link>.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div>
              <strong>Optimise every product title</strong>
              <span className="text-gray-500 ml-2">— Deadline: July–August 2026</span>
              <p className="text-base text-gray-600 mt-1 mb-0">Title is the #1 factor for Shopping matching. Format: [Brand] + [Product type] + [Colour/Size/Model]. &quot;Men&apos;s jacket&quot; is not the same as &quot;Zara Men&apos;s Bomber Jacket Black Size L&quot;.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
            <div>
              <strong>Add GTIN/EAN barcodes</strong>
              <span className="text-gray-500 ml-2">— Deadline: July–August 2026</span>
              <p className="text-base text-gray-600 mt-1 mb-0">Google prefers GTIN for product matching. If you sell branded products, GTIN is mandatory. Own-brand products → fill in Brand + MPN or apply for a GTIN exemption.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">9</span>
            <div>
              <strong>Optimise product images</strong>
              <span className="text-gray-500 ml-2">— Deadline: July–August 2026</span>
              <p className="text-base text-gray-600 mt-1 mb-0">White background, minimum 800x800px, no watermarks or text. The image is the first thing a shopper sees — a bad image won&apos;t get clicked even with the best bid.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">10</span>
            <div>
              <strong>Assign Google Product Categories</strong>
              <span className="text-gray-500 ml-2">— Deadline: August 2026</span>
              <p className="text-base text-gray-600 mt-1 mb-0">Use Google&apos;s official taxonomy (<a href="https://support.google.com/merchants/answer/6324436" target="_blank" rel="noopener noreferrer" className="underline">taxonomy list</a>). The more precise the category, the better the matching and the lower the CPC.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">11</span>
            <div>
              <strong>Add custom labels for segmentation</strong>
              <span className="text-gray-500 ml-2">— Deadline: August 2026</span>
              <p className="text-base text-gray-600 mt-1 mb-0">Custom labels (0–4) allow segmentation by margin, season, and performance. &quot;high_margin&quot;, &quot;best_seller&quot;, &quot;clearance&quot; — this controls where your budget goes.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">12</span>
            <div>
              <strong>Upload the feed and resolve all disapprovals</strong>
              <span className="text-gray-500 ml-2">— Deadline: September 2026</span>
              <p className="text-base text-gray-600 mt-1 mb-0">Submit the feed to MC and review the Diagnostics section. Every disapproval must be resolved before launching a campaign. Target a 95%+ approval rate.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">13</span>
            <div>
              <strong>Set up conversion tracking before launch</strong>
              <span className="text-gray-500 ml-2">— Deadline: September 2026</span>
              <p className="text-base text-gray-600 mt-1 mb-0">Purchase conversion in Google Ads (value + quantity). Without accurate tracking, Smart Bidding doesn&apos;t work and you can&apos;t measure <GlossaryLink slug="roas">ROAS</GlossaryLink>. Details in the <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="underline text-blue-700">Conversion Tracking guide</Link>.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">14</span>
            <div>
              <strong>Research CSS partners for Serbia</strong>
              <span className="text-gray-500 ml-2">— Deadline: October 2026</span>
              <p className="text-base text-gray-600 mt-1 mb-0">The CSS (Comparison Shopping Service) model can lower effective CPC by 15-20%. Setting up a CSS partner before launch is a concrete advantage from day one. More on this below.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">15</span>
            <div>
              <strong>Build your campaign structure and Q4 budget plan</strong>
              <span className="text-gray-500 ml-2">— Deadline: October 2026</span>
              <p className="text-base text-gray-600 mt-1 mb-0">Standard Shopping campaigns segmented by category or margin, with a dedicated Best Sellers campaign. Black Friday budget should be at minimum 2x your normal monthly budget — the Serbian market will come out swinging from day one.</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2>Google Merchant Center — the mandatory first step</h2>
      <p>
        <GlossaryLink slug="merchant-center">Google Merchant Center</GlossaryLink> (MC) is the central platform for managing your product feed and Shopping campaigns. Without a verified MC account, you can&apos;t run a single Shopping ad. This isn&apos;t optional — it&apos;s a prerequisite.
      </p>
      <p>
        For the Serbian market, there are specifics you need to keep in mind during setup:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">MC Setup for Serbia</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Currency: RSD</h3>
          <p className="text-base text-gray-600 mb-0">Prices in the feed must be in RSD (Serbian dinars). Format: &quot;12990 RSD&quot; or &quot;12990.00 RSD&quot;. A mismatch between the feed and the site means disapproval.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">MC Setup for Serbia</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Language: Serbian</h3>
          <p className="text-base text-gray-600 mb-0">The feed must be in Serbian for the Serbian market. Title, description and all text values — Cyrillic or Latin script, both are accepted, but stay consistent.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">MC Setup for Serbia</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Shipping: mandatory</h3>
          <p className="text-base text-gray-600 mb-0">Set up shipping settings with realistic prices and timelines. Serbian shoppers are used to &quot;express&quot; delivery and &quot;free shipping over X RSD&quot; — this is displayed in the ad.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">MC Setup for Serbia</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Return policy: link it</h3>
          <p className="text-base text-gray-600 mb-0">Google requires an up-to-date return policy page on your site. 14-day returns (the legal minimum in Serbia) — link the URL in MC settings.</p>
        </div>
      </div>

      <p>
        I cover the complete step-by-step Merchant Center setup specifically for the Serbian market in a supporting post:{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "merchant-center-srbija-setup" } }} className="underline text-blue-700 font-medium">
          Google Merchant Center Setup for Serbia — Complete Guide
        </Link>. That post covers all the details: screenshots, common mistakes, and what to do if your account gets suspended.
      </p>

      <hr />

      <h2>Product Feed — 10 mandatory attributes</h2>
      <p>
        The product feed is the heart of your Shopping setup. It&apos;s a structured file (XML or TXT) that Google reads and uses to match your products with what people search for. Feed quality directly determines ad quality.
      </p>
      <p>
        Based on my experience with 10+ Shopping accounts, these are the 10 attributes that must be optimised — no exceptions:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">#</th>
              <th className="py-3 px-3 font-heading font-semibold">Attribute</th>
              <th className="py-3 px-3 font-heading font-semibold">Example for the Serbian market</th>
              <th className="py-3 px-3 font-heading font-semibold">Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">1</td>
              <td className="py-3 px-3 font-medium">title</td>
              <td className="py-3 px-3">Nike Air Max 90 Men&apos;s Sneakers White Size 43</td>
              <td className="py-3 px-3 text-red-600 font-semibold">Critical</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">2</td>
              <td className="py-3 px-3 font-medium">description</td>
              <td className="py-3 px-3">500-1000 characters, keywords naturally integrated</td>
              <td className="py-3 px-3 text-red-600 font-semibold">Critical</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">3</td>
              <td className="py-3 px-3 font-medium">image_link</td>
              <td className="py-3 px-3">White background, min 800x800px, no watermark</td>
              <td className="py-3 px-3 text-red-600 font-semibold">Critical</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">4</td>
              <td className="py-3 px-3 font-medium">price</td>
              <td className="py-3 px-3">12990.00 RSD (must be identical to the site)</td>
              <td className="py-3 px-3 text-red-600 font-semibold">Critical</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">5</td>
              <td className="py-3 px-3 font-medium">availability</td>
              <td className="py-3 px-3">in stock / out of stock (real-time sync!)</td>
              <td className="py-3 px-3 text-red-600 font-semibold">Critical</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">6</td>
              <td className="py-3 px-3 font-medium">brand</td>
              <td className="py-3 px-3">Nike, Zara, Bosch — or your company name</td>
              <td className="py-3 px-3 text-yellow-600 font-semibold">High</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">7</td>
              <td className="py-3 px-3 font-medium">gtin</td>
              <td className="py-3 px-3">EAN barcode (13 digits) — if none, brand+MPN</td>
              <td className="py-3 px-3 text-yellow-600 font-semibold">High</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">8</td>
              <td className="py-3 px-3 font-medium">google_product_category</td>
              <td className="py-3 px-3">Apparel &amp; Accessories &gt; Shoes (ID: 187)</td>
              <td className="py-3 px-3 text-yellow-600 font-semibold">High</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">9</td>
              <td className="py-3 px-3 font-medium">product_type</td>
              <td className="py-3 px-3">Footwear &gt; Men&apos;s Footwear &gt; Sneakers &gt; Running</td>
              <td className="py-3 px-3 text-blue-600 font-semibold">Medium</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">10</td>
              <td className="py-3 px-3 font-medium">custom_label_0–4</td>
              <td className="py-3 px-3">high_margin, best_seller, seasonal, clearance</td>
              <td className="py-3 px-3 text-blue-600 font-semibold">Medium</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        A complete feed optimisation guide with examples specific to Serbian eCommerce (WooCommerce, Shopify, custom PHP) is available in a supporting post:{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "product-feed-srpski-ecommerce" } }} className="underline text-blue-700 font-medium">
          Product Feed Optimisation for Serbian eCommerce — Guide
        </Link>.
      </p>

      <hr />

      <h2>My experience: 2+ years of Shopping campaigns in the UK (Chelleon)</h2>
      <p>
        <strong>For UK skincare brand Chelleon I have run Google Shopping campaigns for over 2 years, generating £290,000+ in revenue at 1.78x POAS (Profit on Ad Spend).</strong> Five key lessons from that experience translate directly to the Serbian market from November 2026.
      </p>
      <p>
        I&apos;m not writing this from theory. Chelleon is a premium skincare eCommerce brand with monthly ad spend up to £8,000. Over that time I learned just how critical the data feed is to success — literally 80% of performance depends on feed quality, not bidding. That insight now carries over into every new campaign, and it&apos;s the first thing I check with every client.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Chelleon UK — Real Results</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">£290k+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">total Shopping revenue</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1.78x</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">POAS (profitability, not ROAS)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3-tier</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">campaign structure</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2 yrs</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">continuous Shopping management</p>
          </div>
        </div>
      </div>

      <p>
        What I learned in 2+ years of UK Shopping campaigns that applies directly to the Serbian market:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="font-heading font-bold mb-2">Lesson 1: Feed quality is everything</p>
          <p className="text-base text-gray-600 mb-0">In the UK market, upgrading titles from generic to specific (adding size, colour, variant) increased impressions by 34% without changing the bid at all. The Serbian market is less saturated — the effect will be even more dramatic because competition is lower.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="font-heading font-bold mb-2">Lesson 2: A tiered campaign structure is mandatory</p>
          <p className="text-base text-gray-600 mb-0">With Chelleon we use a 3-tier system: Best Sellers (high bid), Catalog (medium bid), Clearance (low bid). This lets us control where the budget goes instead of letting Google decide. For the Serbian market I recommend the same approach from day one.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="font-heading font-bold mb-2">Lesson 3: POAS, not ROAS</p>
          <p className="text-base text-gray-600 mb-0">ROAS without margin is misleading. Skincare has different margins by category — retinol creams at 70% margin, SPF at 30% margin. Target ROAS must be calibrated against margin. For Serbian eCommerce: know your margin per category before you set up bidding.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="font-heading font-bold mb-2">Lesson 4: Negative keywords are critical</p>
          <p className="text-base text-gray-600 mb-0">Shopping has no direct keyword targeting, but negative keywords block irrelevant searches. In the UK market we add 200+ negatives in the first 30 days — competitor brand names, generic searches, informational queries. The same approach is necessary from day 1 in Serbia.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="font-heading font-bold mb-2">Lesson 5: Seasonality in Serbia will look different from the UK</p>
          <p className="text-base text-gray-600 mb-0">The UK market has a stable annual curve. The Serbian market has extreme seasonality — Bela Nedelja (White Week sale), Đurđevdan, Easter, and the Q4 Black Friday season. Plan budget multipliers ahead of time.</p>
        </div>
      </div>

      <p>
        In my experience, Serbian eCommerce businesses with 200+ SKUs and an average order value above 3,000 RSD are ideal candidates for Shopping. Below that threshold, setup and optimisation costs can eat into the margin.
      </p>

      <hr />

      <h2>The most common mistakes I&apos;m already seeing in pre-launch audits</h2>
      <p>
        <strong>The most common mistakes in preparing for Google Shopping in Serbia are: currency mismatches between the site and the feed, unoptimised titles, watermarked images, manually updated feeds, unsegmented campaigns, missing conversion tracking, and starting Merchant Center setup too late.</strong> These are findings from pre-launch audits of 7 Serbian eCommerce businesses in the first quarter of 2026.
      </p>
      <p>
        Here is a detailed breakdown of each mistake and how to fix it before November.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #1</p>
        <p className="font-semibold mb-2">Prices on the site in euros, feed in RSD — or vice versa</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> The feed must be 100% identical to the site. If you sell in RSD, the feed is in RSD. Google crawls the site and compares it against the feed — a mismatch means disapproval of every product.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #2</p>
        <p className="font-semibold mb-2">Titles copied straight from the webshop with no optimisation</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> &quot;Jacket 123&quot; or &quot;Model XR-45&quot; are unusable Shopping titles. Google can&apos;t match them against searches. Invest 1-2 weeks into rewriting titles for your top 100 SKUs before the feed upload.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #3</p>
        <p className="font-semibold mb-2">Images with watermarks or poor backgrounds</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> Google automatically rejects images with a logo, watermark, or promotional text. Clean white or light background, high resolution. For the Serbian market context: remove.bg can automate background removal for hundreds of images.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #4</p>
        <p className="font-semibold mb-2">A feed that gets updated manually once a week</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> Prices and stock levels must be synced in real time. If you advertise &quot;in stock&quot; on a product that isn&apos;t available, Google penalises the account. Set up an automatic scheduled feed that updates at least once a day.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #5</p>
        <p className="font-semibold mb-2">One campaign for 5,000+ products with no segmentation</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> Google will spend budget on whatever it considers relevant — which usually isn&apos;t your most profitable products. Segmentation by category, margin, and performance is essential. Minimum 3 campaigns: Best Sellers, Catalog, Long Tail.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #6</p>
        <p className="font-semibold mb-2">No conversion tracking for purchases</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> Without purchase conversions, Smart Bidding operates blind. A Target ROAS strategy requires a minimum of 50 conversions a month to be effective. Set up GA4 ecommerce events + Google Ads import before launch.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake #7</p>
        <p className="font-semibold mb-2">Waiting for launch day to start the Merchant Center setup</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0"><strong>Fix:</strong> MC account review can take 1-3 weeks in new markets. Feed optimisation takes months. Those who start now (April 2026) will be live on day one. Those who wait until November will only get going in December or January.</p>
        </div>
      </div>

      <hr />

      <h2>Costs and expected ROI for the Serbian market</h2>
      <p>
        <strong>A realistic starting budget for Google Shopping in Serbia is €200–500 per month, with an expected CPC of 3 to 25 RSD depending on the industry.</strong> Fashion niches can expect a 2.5–4.0x ROAS, electronics 3.0–6.0x. These estimates are based on analogous EMEA markets (Romania 2023: €0.08–0.15 CPC) and my own UK Shopping campaigns (£0.35–0.80 CPC in 2026), as well as the experience of markets that went through the same launch process in 2022–2024 (Romania, Bulgaria).
      </p>
      <p>
        The direct question I get from everyone is &quot;how much will I spend and what can I expect?&quot; — here are more detailed projections by industry.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important: early CPC projections</p>
        <p className="text-yellow-800 text-base mb-0">In new markets, Google Shopping CPC is lower than in mature markets — less competition, lower auction pressure. This is a window for cheap acquisition that closes as competitors move in. Romania 2023: average Shopping CPC €0.08–0.15. UK 2026: £0.35–0.80 for the same segments.</p>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Industry</th>
              <th className="py-3 px-3 font-heading font-semibold">Estimated CPC (launch)</th>
              <th className="py-3 px-3 font-heading font-semibold">Expected ROAS (month 1-3)</th>
              <th className="py-3 px-3 font-heading font-semibold">Starter budget/mo.</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Fashion &amp; footwear</td>
              <td className="py-3 px-3">5–12 RSD</td>
              <td className="py-3 px-3">2.5–4.0x</td>
              <td className="py-3 px-3">€200–500</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Electronics</td>
              <td className="py-3 px-3">10–25 RSD</td>
              <td className="py-3 px-3">3.0–6.0x</td>
              <td className="py-3 px-3">€300–800</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Home &amp; garden</td>
              <td className="py-3 px-3">4–10 RSD</td>
              <td className="py-3 px-3">2.0–3.5x</td>
              <td className="py-3 px-3">€150–400</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Cosmetics</td>
              <td className="py-3 px-3">6–15 RSD</td>
              <td className="py-3 px-3">2.0–4.0x</td>
              <td className="py-3 px-3">€200–500</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Sports equipment</td>
              <td className="py-3 px-3">5–12 RSD</td>
              <td className="py-3 px-3">2.5–4.5x</td>
              <td className="py-3 px-3">€200–500</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Books &amp; education</td>
              <td className="py-3 px-3">3–8 RSD</td>
              <td className="py-3 px-3">1.5–3.0x</td>
              <td className="py-3 px-3">€100–300</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Slobodan Jelisavac&apos;s recommendation for Serbian eCommerce businesses: <strong>start with €200–300 per month in the first quarter</strong>, focus on your top 50 SKUs with the best margin, and scale budget based on real ROAS data. Don&apos;t start with €2,000 without prior Shopping data — give the algorithm time to learn.
      </p>

      <hr />

      <h2>CSS (Comparison Shopping Service) — how to save 15-20% on CPC</h2>
      <p>
        <strong>CSS (Comparison Shopping Service) is Google&apos;s programme that lets advertisers run Shopping ads through a partner price-comparison service instead of directly through Google Shopping.</strong> Switching to a CSS partner lowers effective CPC by 15–20%, because Google doesn&apos;t charge its own margin on the clicks. On a €500 monthly budget, that&apos;s a saving of €75–100 — with no change to the campaigns themselves.
      </p>
      <p>
        In the EU (and markets with a Shopping rollout), Google is required to let third parties operate as CSS providers. A CSS operator can bid in Shopping auctions and pass the benefit of a lower CPC on to advertisers — practically speaking, if you use a CSS instead of direct Google Shopping, the shopper sees an identical ad, but you pay less per click.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Google Shopping (direct)</strong> <span className="text-gray-500">— you bid through the Google interface, full auction price</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>CSS Partner</strong> <span className="text-gray-500">— you bid through the CSS platform, lower effective CPC thanks to the CSS rebate</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Result in the search results</strong> <span className="text-gray-500">— identical display, no difference for the shopper, lower cost for you</span></div>
          </div>
        </div>
      </div>

      <p>
        A detailed CSS strategy, a list of CSS partners planning Serbian market coverage, and how to evaluate CSS vs direct Shopping is covered in a supporting post:{" "}
        <strong>CSS for Serbia — How to Save 20% on Shopping CPC</strong> (coming soon).
      </p>

      <hr />

      <h2>FAQ — the 10 questions I get asked most</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "When exactly does Google Shopping start in Serbia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Google Shopping officially launches in Serbia in November 2026. The exact date within November hasn't been confirmed, but based on the pattern of previous EMEA launches, the first or second week of November 2026 is expected — right before Black Friday season."
                }
              },
              {
                "@type": "Question",
                name: "Do I need Merchant Center before November 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — and the sooner the better. In new markets, Google Merchant Center account review can take 1-3 weeks. Feed optimisation takes months of work. Businesses that start setup in April-May 2026 will be ready on the launch date. Those who wait until October-November will only get actively started in January 2027."
                }
              },
              {
                "@type": "Question",
                name: "How much does Google Shopping cost per month for Serbian eCommerce?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A starter budget for the Serbian market is €150-500 per month, depending on the industry and number of SKUs. At launch, CPC will be lower than in mature markets (comparable to Romania 2023: 5-15 RSD per click). I recommend starting with €200-300 on your top 50 SKUs and scaling based on ROAS data."
                }
              },
              {
                "@type": "Question",
                name: "Can Google Shopping replace KupujemProdajem?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Partially — and this is an important distinction. KupujemProdajem is a marketplace with its own owned traffic. Google Shopping is a paid advertising channel that drives traffic to your own site. The advantage of Shopping: no marketplace commission, you own the customer relationship and the data, and you control the customer experience directly. I recommend a combination: Shopping for acquisition, your own shop for loyalty."
                }
              },
              {
                "@type": "Question",
                name: "How many SKUs do I need for Shopping to be worth it?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A minimum of 50 active SKUs with an average order value above 2,500-3,000 RSD. With a smaller catalogue or lower AOV, setup costs (feed, Merchant Center, campaigns) can exceed the ROI. Ideally: 200+ SKUs, clear segmentation by category, and a minimum 30% margin on best-sellers."
                }
              },
              {
                "@type": "Question",
                name: "Does Shopping work for services (not just physical products)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No — Google Shopping is exclusively for physical (and digital) products sold online. For services, use Search campaigns or Local Services Ads (once available in Serbia). Shopping requires a product feed with prices, images, and availability — attributes that don't apply to services."
                }
              },
              {
                "@type": "Question",
                name: "What is the difference between Standard Shopping and Performance Max for eCommerce?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standard Shopping gives you more control: you see search terms, you can segment, and you get transparency. Performance Max automates everything — it uses machine learning but gives less visibility. My recommendation for the Serbian market: start with Standard Shopping for the first 3 months while collecting data, then test PMax with Signal audiences. More in the guide on Google Shopping campaigns."
                }
              },
              {
                "@type": "Question",
                name: "Can I set up Shopping myself or do I need an agency/freelancer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can handle Merchant Center setup and a basic feed yourself (especially with WooCommerce + the YITH Google Shopping plugin, or Shopify). Campaign optimisation, tiered structure, and bid management require experience. In my experience, a DIY setup with zero prior knowledge ends up costing more (in missed conversions and poor campaigns) than a month or two of working with an experienced specialist who teaches you the system."
                }
              },
              {
                "@type": "Question",
                name: "Do Croatia and Bosnia & Herzegovina get Shopping at the same time as Serbia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Croatia and BiH are in the Q4 2026 wave — exact dates haven't been confirmed, but the same period is expected (October-November 2026). Slovenia is also Q4 2026. North Macedonia is likely Wave 2 in 2027. For a multi-market strategy, plan a feed that can cover RS, HR and BiH from the start."
                }
              },
              {
                "@type": "Question",
                name: "What is POAS and why does it matter more than ROAS for Shopping?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "POAS (Profit on Ad Spend) = (Revenue - COGS) / Ad Spend. Unlike ROAS, which measures total revenue, POAS measures profitability. If you sell a product for 5,000 RSD with a 40% margin (2,000 RSD profit) and spend 1,000 RSD on ads — ROAS is 5x, POAS is 2x. A Target ROAS without margin data can lead to campaigns that generate revenue but eat into profit. Always know your COGS before setting a bidding target."
                }
              }
            ]
          })
        }}
      />

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            When exactly does Google Shopping start in Serbia?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Google Shopping officially launches in Serbia in November 2026. The exact date within November hasn&apos;t been confirmed, but based on the pattern of previous EMEA launches, the first or second week of November 2026 is expected — right before Black Friday season.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Do I need Merchant Center before November 2026?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Yes — and the sooner the better. In new markets, Google Merchant Center account review can take 1-3 weeks. Feed optimisation takes months of work. Businesses that start setup in April-May 2026 will be ready on the launch date. Those who wait until October-November will only get actively started in January 2027.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much does Google Shopping cost per month for Serbian eCommerce?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            A starter budget for the Serbian market is €150-500 per month, depending on the industry and number of SKUs. At launch, CPC will be lower than in mature markets (comparable to Romania 2023: 5-15 RSD per click). I recommend starting with €200-300 on your top 50 SKUs and scaling based on ROAS data.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can Google Shopping replace KupujemProdajem?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Partially — and this is an important distinction. KupujemProdajem is a marketplace with its own owned traffic. Google Shopping is a paid advertising channel that drives traffic to your own site. The advantage of Shopping: no marketplace commission, you own the customer relationship and the data, and you control the customer experience directly. I recommend a combination: Shopping for acquisition, your own shop for loyalty.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How many SKUs do I need for Shopping to be worth it?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            A minimum of 50 active SKUs with an average order value above 2,500-3,000 RSD. With a smaller catalogue or lower AOV, setup costs can exceed the ROI. Ideally: 200+ SKUs, clear segmentation by category, and a minimum 30% margin on best-sellers.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does Shopping work for services (not just physical products)?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            No — Google Shopping is exclusively for physical (and digital) products sold online. For services, use Search campaigns. Shopping requires a product feed with prices, images, and availability — attributes that don&apos;t apply to services.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What is the difference between Standard Shopping and Performance Max for eCommerce?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Standard Shopping gives you more control: you see search terms, you can segment, and you get transparency. Performance Max automates everything but gives less visibility. My recommendation for the Serbian market: start with Standard Shopping for the first 3 months while collecting data, then test PMax with Signal audiences.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I set up Shopping myself or do I need a specialist?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            You can handle Merchant Center setup and a basic feed yourself (especially with WooCommerce + a plugin, or Shopify). Campaign optimisation, tiered structure, and bid management require experience. A DIY setup with zero prior knowledge usually ends up costing more in missed conversions than working with an experienced specialist.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Do Croatia and Bosnia &amp; Herzegovina get Shopping at the same time as Serbia?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Croatia and BiH are in the Q4 2026 wave — exact dates haven&apos;t been confirmed, but the same period is expected (October-November 2026). Slovenia is also Q4 2026. North Macedonia is likely Wave 2 in 2027. For a multi-market strategy, plan a feed that can cover RS, HR and BiH from the start.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What is POAS and why does it matter more than ROAS for Shopping?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            POAS (Profit on Ad Spend) = (Revenue - COGS) / Ad Spend. Unlike ROAS, which measures total revenue, POAS measures profitability. Always know your COGS per category before setting a bidding target — a high ROAS on a poor margin can mean you&apos;re spending your profit.
          </div>
        </details>
      </div>

      <hr />

      {/* CTA block */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-yellow-400 mb-3">For serious brands</p>
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Pre-Launch Google Shopping Audit</p>
        <p className="text-slate-300 text-base mb-4 max-w-xl">
          If your brand already invests $3,000+ per month in advertising, you&apos;re ready for Shopping from day one. Before November, I&apos;ll go through your site, product feed, Merchant Center, and give you a concrete preparation plan — part of our broader{" "}
          <Link href="/usluge/google-shopping" className="underline text-yellow-400">Google Shopping management service</Link>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <p className="text-yellow-400 font-bold text-sm mb-2">Free audit ($3,000+/mo ad spend)</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>60-minute deep-dive analysis (online)</li>
              <li>Feed gap analysis + budget recommendation</li>
              <li>Personalised Shopping launch checklist</li>
            </ul>
            <Link href="/kontakt" className="btn-secondary inline-block mt-3 text-sm">
              Book a free audit →
            </Link>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <p className="text-slate-300 font-bold text-sm mb-2">All other brands</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Send an inquiry with details about your brand</li>
              <li>We&apos;ll tell you if your brand is ready for Shopping</li>
              <li>No obligation — just a readiness assessment</li>
            </ul>
            <Link href="/kontakt" className="text-sm text-yellow-400 hover:underline inline-block mt-3">
              Send an inquiry →
            </Link>
          </div>
        </div>
        <p className="text-slate-500 text-xs mb-0">Free audits: limited to 3 per week. Free audits are available to brands with active ad spend of $3,000+/mo.</p>
      </div>
    </>
  );
}
