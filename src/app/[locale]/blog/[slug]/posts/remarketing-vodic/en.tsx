import { Link } from "@/i18n/navigation";

export default function RemarketingGuideEN() {
  return (
    <>
      {/* ── TL;DR box ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Remarketing campaigns have 2-3x higher CTR and 50-70% lower CPA than cold traffic. The key to success is segmentation — do not treat all visitors the same.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">96%</p>
            <p className="text-xs text-slate-400 mt-1">visitors leave without converting</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">2-3x</p>
            <p className="text-xs text-slate-400 mt-1">higher CTR remarketing</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">50-70%</p>
            <p className="text-xs text-slate-400 mt-1">lower CPA</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">300-500%</p>
            <p className="text-xs text-slate-400 mt-1">average ROI</p>
          </div>
        </div>
      </div>

      {/* ── Section 1: Hook intro ── */}
      <h2>Why 96% of Visitors Leave Without Buying</h2>
      <p>
        Imagine this: you have a website, you invest in Google Ads, a visitor arrives, views a product or service — and leaves. No purchase, no contact, no trace. The statistics are harsh: <strong>96 out of 100 visitors leave your site without any conversion</strong>.
      </p>
      <p>
        This does not mean your website is bad. People are simply busy — they opened five tabs, the phone rang, they decided to &quot;think about it&quot;. But what IS a problem: most advertisers let those visitors go and never contact them again.
      </p>
      <p>
        This is where remarketing changes the game. Instead of spending budget exclusively on new visitors, remarketing campaigns allow you to return in front of people who have <strong>already shown interest</strong> — at the moment when they are ready to make a decision.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">From my experience</p>
        <p className="text-blue-800 text-sm">
          After managing $2M+ in annual ad spend across 50+ accounts in 6+ countries, remarketing is the most profitable campaign type you can run. CTR is 2-3 times higher than cold traffic, and CPA is 50-70% lower.
        </p>
      </div>

      <p>
        In this guide, we cover everything you need — from setting up your first remarketing tag, through segmentation that makes the difference, to strategies that deliver results in practice. No theory for theory's sake — only what works on real accounts.
      </p>

      <hr />

      {/* ── Section 2: What is remarketing ── */}
      <h2>What Is Remarketing and How It Works</h2>
      <p>
        <strong>Google Ads remarketing</strong> (sometimes called retargeting) is a strategy that allows you to show ads to people who have already interacted with your business. These can be website visitors, app users, YouTube viewers, or people from your email list.
      </p>
      <p>
        The principle is simple, but the effect is powerful: instead of targeting a completely unknown audience, you reach people who already know you.
      </p>

      <h3>How remarketing works step by step</h3>
      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Visitor arrives at your site</strong> <span className="text-gray-500">— via Google search, ad, or direct</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Google tag anonymously identifies them</strong> <span className="text-gray-500">— using cookie or login signal</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Visitor leaves without converting</strong> <span className="text-gray-500">— happens in 96% of cases</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Visitor continues using internet</strong> <span className="text-gray-500">— searches Google, watches YouTube, reads websites</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Your remarketing ad shows to them</strong> <span className="text-gray-500">— right place at right time</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Visitor returns and converts</strong> <span className="text-gray-500">— because reminder arrived when they were ready</span></div>
          </div>
        </div>
      </div>

      <h3>Remarketing, retargeting, or prospecting — what is the difference</h3>
      <p>
        Remarketing and retargeting are in practice synonyms. Google uses the term &quot;remarketing&quot;, Meta (Facebook/Instagram) uses &quot;retargeting&quot; — but the essence is the same: you return in front of people who already know you.
      </p>
      <p>
        Prospecting (cold targeting) is the opposite — you target people who have never heard of you. Here is direct comparison:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Characteristic</th>
              <th className="py-3 px-4 font-heading font-semibold">Remarketing</th>
              <th className="py-3 px-4 font-heading font-semibold">Prospecting (cold audience)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Audience</td>
              <td className="py-3 px-4">Already know you</td>
              <td className="py-3 px-4">Do not know you</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Intent</td>
              <td className="py-3 px-4">Shown interest</td>
              <td className="py-3 px-4">Assumed intent</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">CTR</td>
              <td className="py-3 px-4 text-green-700 font-semibold">2-3x higher</td>
              <td className="py-3 px-4">Baseline</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">CPA</td>
              <td className="py-3 px-4 text-green-700 font-semibold">50-70% lower</td>
              <td className="py-3 px-4">Baseline</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Volume</td>
              <td className="py-3 px-4">Limited (your traffic)</td>
              <td className="py-3 px-4">Practically unlimited</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Role</td>
              <td className="py-3 px-4">Closes sales</td>
              <td className="py-3 px-4">Brings new people</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Both approaches are necessary. Prospecting fills the funnel, remarketing closes it. The problem arises when you have only one.
      </p>

      <hr />

      {/* ── Section 3: Types of remarketing campaigns ── */}
      <h2>Types of Remarketing Campaigns in Google Ads</h2>
      <p>
        Google Ads offers several types of remarketing campaigns, each with its purpose. Here is an overview with recommendation when to use which type:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Type #1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Display remarketing</h3>
          <p className="text-sm text-gray-600 mb-0">
            Banners on Google Display Network — over 2 million websites. Ideal as first remarketing campaign for every account. Reminds visitors you exist.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Type #2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">RLSA (remarketing on search)</h3>
          <p className="text-sm text-gray-600 mb-0">
            Adjust Search campaigns for people who already visited your site — higher bids, broader keywords. Delivers best ROAS of all types.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Type #3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Dynamic remarketing</h3>
          <p className="text-sm text-gray-600 mb-0">
            Automatically shows exact products visitor viewed. Mandatory for eCommerce. Requires product feed in Google Merchant Center.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Type #4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">YouTube remarketing</h3>
          <p className="text-sm text-gray-600 mb-0">
            Video ads for people who visited site, or targeting YouTube channel viewers. Excellent for branding and building trust.
          </p>
        </div>
      </div>
      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card my-4">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Type #5</p>
        <h3 className="text-base font-heading font-bold mt-0 mb-2">Customer Match</h3>
        <p className="text-sm text-gray-600 mb-0">
          Upload your email list to Google Ads and target those people via Search, YouTube, and Gmail. Perfect for win-back campaigns to former customers.
        </p>
      </div>

      <hr />

      {/* ── Section 4: How to set up remarketing ── */}
      <h2>How to Set Up Remarketing Step by Step</h2>
      <p>
        Setting up a remarketing campaign requires three steps: tag installation, connecting to Google Analytics, and verification. I recommend using Google Tag Manager (GTM) — gives you flexibility without needing to touch site code every time.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <h3 className="mt-0 mb-4 font-heading font-bold">Step 1: Installing Google Ads remarketing tag</h3>
        <p className="font-semibold mb-2">Via Google Tag Manager (recommended):</p>
        <ol className="mb-4">
          <li>Open GTM and create new tag</li>
          <li>Select tag type: <strong>Google Ads Remarketing</strong></li>
          <li>Enter your Conversion ID (Google Ads → Tools → Audience Manager → Audience Sources)</li>
          <li>Set trigger to <strong>All Pages</strong></li>
          <li>Click Publish</li>
        </ol>
        <p className="font-semibold mb-2">Direct installation (alternative):</p>
        <ol className="mb-0">
          <li>In Google Ads: Tools → Audience Manager → Audience Sources</li>
          <li>Under Google Ads tag click &quot;Set up tag&quot;</li>
          <li>Copy code and paste it in <code>&lt;head&gt;</code> section of every page</li>
        </ol>
      </div>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <h3 className="mt-0 mb-4 font-heading font-bold">Step 2: Connect GA4 to Google Ads</h3>
        <ol className="mb-0">
          <li>In Google Ads open Tools → Linked Accounts</li>
          <li>Find Google Analytics (GA4) and click &quot;Link&quot;</li>
          <li>Select your GA4 property</li>
          <li>Enable remarketing option</li>
        </ol>
      </div>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <h3 className="mt-0 mb-4 font-heading font-bold">Step 3: Verification and creating lists</h3>
        <ol>
          <li>Go to Audience Manager → Audience Sources</li>
          <li>Check that tag status is <strong>&quot;Active&quot;</strong></li>
          <li>Wait 24-48 hours for list to start populating</li>
        </ol>
      </div>

      <p>
        I recommend creating these basic remarketing lists immediately:
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">List</th>
              <th className="py-3 px-4 font-heading font-semibold">Condition</th>
              <th className="py-3 px-4 font-heading font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">All visitors</td>
              <td className="py-3 px-4">URL contains: /</td>
              <td className="py-3 px-4">30 days</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Product viewers</td>
              <td className="py-3 px-4">URL contains: /products/</td>
              <td className="py-3 px-4">14 days</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">No conversion</td>
              <td className="py-3 px-4">All visitors MINUS thank-you page</td>
              <td className="py-3 px-4">30 days</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Abandoned carts</td>
              <td className="py-3 px-4">URL contains: /cart/ MINUS /thank-you/</td>
              <td className="py-3 px-4">7 days</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Previous customers</td>
              <td className="py-3 px-4">URL contains: /thank-you/</td>
              <td className="py-3 px-4">180 days</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-sm mb-0">
          Minimum list size for activation: <strong>100 users</strong> for Display, <strong>1,000</strong> for Search (RLSA) and YouTube.
        </p>
      </div>

      <hr />

      {/* ── Section 5: Segmentation ── */}
      <h2>Segmentation — Key to Remarketing Success</h2>
      <p>
        This is the part where most advertisers fail: they create one remarketing list (&quot;all visitors&quot;) and show them the same ad. That is like saying the same thing in a store to someone who entered for the first time and someone who put a product in cart and left.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Proper segmentation is what separates average remarketing from one that delivers results.
        </p>
      </div>

      <h3>Segmentation by funnel</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Stage</th>
              <th className="py-3 px-4 font-heading font-semibold">Who they are</th>
              <th className="py-3 px-4 font-heading font-semibold">Strategy</th>
              <th className="py-3 px-4 font-heading font-semibold">Bid</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Top of funnel</td>
              <td className="py-3 px-4">All site visitors</td>
              <td className="py-3 px-4">General brand awareness</td>
              <td className="py-3 px-4">Low</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Middle of funnel</td>
              <td className="py-3 px-4">Viewed product/service</td>
              <td className="py-3 px-4">Relevant message + benefits</td>
              <td className="py-3 px-4">Medium</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Bottom of funnel</td>
              <td className="py-3 px-4">Abandoned cart / pricing</td>
              <td className="py-3 px-4">Urgency + offer</td>
              <td className="py-3 px-4">High</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Post-purchase</td>
              <td className="py-3 px-4">Existing customers</td>
              <td className="py-3 px-4">Cross-sell, upsell</td>
              <td className="py-3 px-4">Medium</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Segmentation by time since visit</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Segment</th>
              <th className="py-3 px-4 font-heading font-semibold">Period</th>
              <th className="py-3 px-4 font-heading font-semibold">Approach</th>
              <th className="py-3 px-4 font-heading font-semibold">Bid</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Hot</span></td>
              <td className="py-3 px-4">1-3 days</td>
              <td className="py-3 px-4">Direct call to action</td>
              <td className="py-3 px-4">Highest</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4"><span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-0.5 rounded">Warm</span></td>
              <td className="py-3 px-4">4-14 days</td>
              <td className="py-3 px-4">Reminder + benefits</td>
              <td className="py-3 px-4">High</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4"><span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-0.5 rounded">Tepid</span></td>
              <td className="py-3 px-4">15-30 days</td>
              <td className="py-3 px-4">Re-engagement</td>
              <td className="py-3 px-4">Medium</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4"><span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">Cold</span></td>
              <td className="py-3 px-4">30-90 days</td>
              <td className="py-3 px-4">New offer, changes</td>
              <td className="py-3 px-4">Low</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Segmentation by behavior</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Behavior</th>
              <th className="py-3 px-4 font-heading font-semibold">Intent level</th>
              <th className="py-3 px-4 font-heading font-semibold">Message</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">Homepage only</td>
              <td className="py-3 px-4">Low</td>
              <td className="py-3 px-4">General brand awareness</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Viewed categories</td>
              <td className="py-3 px-4">Medium</td>
              <td className="py-3 px-4">Benefits of specific category</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">Viewed product</td>
              <td className="py-3 px-4 text-green-700 font-semibold">High</td>
              <td className="py-3 px-4">Specific product + offer</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4">Abandoned cart</td>
              <td className="py-3 px-4 text-green-700 font-semibold">Highest</td>
              <td className="py-3 px-4">Urgency + discount</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4">Searched your brand</td>
              <td className="py-3 px-4">Brand intent</td>
              <td className="py-3 px-4">Trust + USP</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Example of complete remarketing campaign</h3>
      <p>
        This is what campaign structure looks like when all three approaches are combined:
      </p>
      <pre className="border-2 border-gray-900 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed">
        <code>{`Campaign: Remarketing
│
├── Ad Group: Abandoned carts (1-7 days)
│   ├── List: visitors /cart/ MINUS /thank-you/
│   ├── Bid: Highest
│   └── Message: "Complete your purchase — free shipping today"
│
├── Ad Group: Product viewers (7-14 days)
│   ├── List: visitors /products/
│   ├── Bid: High
│   └── Message: "The product you viewed is waiting"
│
├── Ad Group: All visitors (14-30 days)
│   ├── List: all visitors MINUS converted
│   ├── Bid: Medium
│   └── Message: "Discover why clients trust us"
│
└── Ad Group: Former customers (90-180 days)
    ├── List: visitors /thank-you/
    ├── Bid: Medium
    └── Message: "See what's new in our offering"`}</code>
      </pre>

      <hr />

      {/* ── Section 6: 5 remarketing strategies ── */}
      <h2>5 Remarketing Strategies That Deliver Results</h2>
      <p>
        These are strategies I use on client accounts that consistently deliver best results. Each is tested on real campaigns.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Abandoned cart recovery</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Most valuable remarketing strategy for eCommerce. About 70% of online shopping carts are abandoned, and remarketing can bring back 10-15% of those customers.
        </p>
        <ul className="text-sm">
          <li>Create list: visitors to /cart/ page MINUS /thank-you/</li>
          <li>List duration: 7 days (short period = high intent)</li>
          <li>Offer concrete reason to return — free shipping, small discount, guarantee</li>
          <li>Dynamic ads showing exact cart products deliver best results</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">RLSA bid boosting on search</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Strategy with best ROAS in my practice. On existing Search campaigns add remarketing list as &quot;Observation&quot; and increase bid by 30-100% for people who already visited site.
        </p>
        <ul className="text-sm">
          <li>Result: same budget, but more conversions from known visitors</li>
          <li>Especially effective for branded and generic searches</li>
          <li>For advanced approach — create separate RLSA campaign with broader keywords</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dynamic remarketing for online stores</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Automatically shows visitor exact products they viewed, with current price and image. Requires product feed and dynamic remarketing tag.
        </p>
        <ul className="text-sm">
          <li>Mandatory for eCommerce with 50+ products</li>
          <li>Combine with promotional messages (&quot;Now -20%&quot;, &quot;Free Shipping&quot;)</li>
          <li>Quality product images are critical — poor image kills click</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Sequential messaging</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Instead of showing same ad constantly, create series of ads that guide user through decision:
        </p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">Day 1-3</span>
            <span>Reminder of product/service</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">Day 4-7</span>
            <span>Social proof (reviews, number of clients)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">Day 8-14</span>
            <span>Concrete offer or bonus</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Customer Match for bringing back former customers</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Upload list of email addresses of customers who have not purchased in a while (6-12 months) and target them with new offers.
        </p>
        <ul className="text-sm">
          <li>They already know your brand and quality</li>
          <li>Acquisition cost is minimal compared to new customer</li>
          <li>Cross-sell and upsell offers have high conversion rate</li>
        </ul>
      </div>

      <hr />

      {/* ── Section 7: Common mistakes ── */}
      <h2>Most Common Mistakes in Remarketing Campaigns and How to Avoid Them</h2>
      <p>
        After hundreds of Google Ads account audits, these are the mistakes I see most often. Good news is they are all easily fixable.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">One list for entire audience</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Solution:</strong> Segment by behavior and time. Person who abandoned cart deserves different message than someone who only viewed homepage.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">No frequency cap</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Solution:</strong> Set frequency cap to 3-5 impressions daily and 15-20 weekly. Without it, user sees your ad 50 times daily.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Showing ads to converted users</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Solution:</strong> Always exclude people who already converted (except for cross-sell campaigns). No point spending budget on someone who bought same product yesterday.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Same ad for months</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Solution:</strong> Refresh creatives every 2-4 weeks. Even good ad becomes &quot;invisible&quot; after too many showings.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Same message for all stages</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Solution:</strong> Adapt message to segment — reminder for fresh visitors, urgency for abandoned carts, new offer for cold audience.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Too short list period</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Solution:</strong> 7-day list is ok for abandoned carts, but for general visitors use 30-90 days. For B2B up to 180 days.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Neglecting user privacy</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0">
              <strong>Solution:</strong> Ensure cookie consent banner and respect GDPR. Users who give consent are more valuable audience because they actively accept communication.
            </p>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Section 8: Budget ── */}
      <h2>How Much Budget to Allocate to Remarketing</h2>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Rule: 10-30% of total Google Ads budget</p>
        <p className="text-sm text-yellow-900 mb-0">
          Exact percentage depends on traffic volume and remarketing list size.
        </p>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Monthly traffic</th>
              <th className="py-3 px-4 font-heading font-semibold">Share for remarketing</th>
              <th className="py-3 px-4 font-heading font-semibold">Expected effect</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Up to 5,000 visits</td>
              <td className="py-3 px-4">10-15%</td>
              <td className="py-3 px-4">Basic coverage, Display focus</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">5,000 - 20,000 visits</td>
              <td className="py-3 px-4">15-20%</td>
              <td className="py-3 px-4">Segmentation + RLSA</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">20,000+ visits</td>
              <td className="py-3 px-4">20-30%</td>
              <td className="py-3 px-4">Full segmentation + dynamic remarketing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Why remarketing deserves larger budget share?</p>
        <p className="text-blue-800 text-sm mb-0">
          Math is clear: if prospecting campaign brings CPA of $80/£60, remarketing campaign for same conversions usually brings CPA of $25-40/£20-30. That means <strong>2-3 times more conversions for same money</strong>. ROI of 300-500% is realistic for well-set remarketing campaigns.
        </p>
      </div>

      <hr />

      {/* ── Section 9: FAQ ── */}
      <h2>Frequently Asked Questions About Remarketing</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How long does a remarketing list last?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            You can set duration from 1 to 540 days. Default is 30 days. For eCommerce, I recommend 7 days for abandoned carts, 30 days for general visitors, and 180 days for former customers.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How many users do I need on list to start?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum is 100 users for Display campaigns and 1,000 for Search (RLSA) and YouTube. If your site has low traffic, start with Display remarketing while list grows enough for RLSA.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does remarketing work after iOS privacy restrictions?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Yes, but with certain limitations. First-party data (your site, your tag) still works reliably. Third-party tracking is limited on Apple devices. I recommend combination of Google Ads tag, GA4 audiences, and Customer Match for best coverage.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Is remarketing intrusive to users?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Can be — if poorly set up. Three things prevent negative impression: frequency cap (3-5 impressions daily), relevant messages tailored to segment, and regular creative refresh.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What is the difference between remarketing and retargeting?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Practically none. Google uses term &quot;remarketing&quot;, Meta (Facebook/Instagram) uses &quot;retargeting&quot;. Principle is identical — you show ads to people who have already interacted with your business.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I use remarketing for B2B, not just online stores?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Absolutely. B2B remarketing is extremely effective because sales cycles are longer (30-90+ days), so more touchpoints are needed before conversion. Combination of RLSA campaigns and Display remarketing with expert content (case study, guide, webinar) works excellently for B2B.
          </div>
        </details>
      </div>

      <hr />

      {/* ── Section 10: Conclusion + CTA ── */}
      <h2>Conclusion — Leverage the Potential of Visitors Already Coming</h2>
      <p>
        Google Ads remarketing is not complicated, but requires thoughtful approach. The difference between &quot;we have remarketing&quot; and &quot;we have remarketing that delivers results&quot; lies in three things: proper segmentation, tailored messages, and regular optimization.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">Key takeaways from this guide:</p>
        <ul className="space-y-2 text-sm">
          <li>Remarketing campaigns have <strong>2-3x higher CTR</strong> and <strong>50-70% lower CPA</strong> than cold traffic</li>
          <li>Segmentation by behavior, time, and funnel stage makes huge difference</li>
          <li>Allocate <strong>10-30% of budget</strong> to remarketing — ROI of 300-500% is realistic</li>
          <li>Avoid one list for all, set frequency cap, and refresh creatives</li>
          <li>Track conversions precisely — without it you do not know what works</li>
        </ul>
      </div>

      {/* ── CTA box ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Want someone to review your remarketing campaigns?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          I will analyze your account and give you concrete recommendations — free, no obligations.
        </p>
        <Link
          href="/kontakt"
          className="btn-secondary inline-block"
        >
          Schedule free consultation
        </Link>
      </div>

      {/* ── Internal links ── */}
      <h2>Related Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/remarketing" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing Services</p>
          <p className="text-xs text-gray-500 mb-0">How I can help with remarketing campaigns</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking Guide</p>
          <p className="text-xs text-gray-500 mb-0">Why your campaigns do not work without proper tracking</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Guide</p>
          <p className="text-xs text-gray-500 mb-0">How to increase ROAS with Shopping campaigns</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Keywords Guide</p>
          <p className="text-xs text-gray-500 mb-0">Complete guide for keyword research</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: January 2026
      </div>
      <div className="text-sm text-gray-500">
        Author: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}
