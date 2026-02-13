import { Link } from "@/i18n/navigation";

export default function GoogleAdsVsMetaAdsEN() {
  return (
    <>
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google Ads captures buyers with intent, Meta Ads builds awareness and interest.
          Best results come from using both platforms strategically —
          Google for closing sales, Meta for filling the funnel.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">platforms, different purposes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Intent</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">vs Interest</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Better</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">together than separate</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Depends</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">on your business</p>
          </div>
        </div>
      </div>

      <p>
        &quot;Which is better, Google Ads or Facebook Ads?&quot; — one of the most common questions
        I get. And my answer is always the same: <strong>it depends</strong>.
      </p>
      <p>
        It depends on your business, product, target audience, budget, and goals.
        Google Ads and Meta Ads (Facebook + Instagram) aren&apos;t competitors in the traditional
        sense — they&apos;re <strong>complementary channels</strong> serving different
        purposes in the customer journey.
      </p>
      <p>
        In this guide I break down fundamental differences, show when to use which
        platform, how to combine them for maximum effect, and how to make the right
        choice for your specific business.
      </p>

      <hr />

      {/* ── H2: Core difference ── */}
      <h2>Core difference — intent vs interest</h2>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Google Ads captures people who are <em>searching</em> for a solution.
          Meta Ads shows a solution to people who might <em>want</em> it,
          but haven&apos;t searched for it.
        </p>
      </div>

      <p>
        This is the most important difference between platforms. <strong>Google Ads is demand harvesting</strong>
        — you capture existing demand. User searches &quot;running shoes&quot;,
        has clear intent, you appear with relevant ad. You don&apos;t need to convince
        them they need shoes — just that they should buy yours.
      </p>
      <p>
        <strong>Meta Ads is demand generation</strong> — you create demand that
        didn&apos;t exist before. User scrolls Instagram feed, sees your shoes.
        They weren&apos;t looking for them. Maybe they like them, maybe not. You first need to create
        desire, then convert.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">From my experience</p>
        <p className="text-blue-800 text-sm mb-0">
          Over 80% of my clients who use both platforms see best results.
          Google brings conversions with higher intent, Meta fills the funnel and reduces CPA
          through remarketing. I recommend combined approach whenever possible.
        </p>
      </div>

      <hr />

      {/* ── H2: Comparison by key criteria ── */}
      <h2>Comparison by key criteria</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Criteria</th>
              <th className="py-3 px-4 font-heading font-semibold">Google Ads</th>
              <th className="py-3 px-4 font-heading font-semibold">Meta Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Targeting approach</td>
              <td className="py-3 px-4">Keywords &amp; intent</td>
              <td className="py-3 px-4">Interests &amp; behaviors</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">User mindset</td>
              <td className="py-3 px-4">&quot;Actively searching solution&quot;</td>
              <td className="py-3 px-4">&quot;Scrolling for entertainment&quot;</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Ad format</td>
              <td className="py-3 px-4">Text, Shopping, Responsive</td>
              <td className="py-3 px-4">Images, Video, Carousel, Stories</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Average CPC (US/UK)</td>
              <td className="py-3 px-4">$0.50 - $3.00</td>
              <td className="py-3 px-4">$0.10 - $1.00</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Conversion rate</td>
              <td className="py-3 px-4 text-green-700 font-semibold">Higher (2-8%)</td>
              <td className="py-3 px-4">Lower (0.5-4%)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Attribution window</td>
              <td className="py-3 px-4">Short (1-2 touches)</td>
              <td className="py-3 px-4">Longer (3-7+ touches)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Best for</td>
              <td className="py-3 px-4">Closing sales, lead gen</td>
              <td className="py-3 px-4">Brand awareness, filling funnel</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Learning curve</td>
              <td className="py-3 px-4">Medium (keyword research)</td>
              <td className="py-3 px-4">Higher (creative &amp; targeting)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-sm mb-0">
          Lower CPC on Meta doesn&apos;t automatically mean better ROI. Because of lower intent,
          you might need 5x more clicks for the same conversion. Focus on
          CPA and ROAS, not just cost per click.
        </p>
      </div>

      <hr />

      {/* ── H2: When Google Ads is better ── */}
      <h2>When Google Ads is the better choice</h2>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">High-intent products</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          When people actively search for your product or service, Google Ads
          captures that demand at the right moment. Ideal for industries where
          search is the first step towards purchase.
        </p>
        <ul className="text-sm">
          <li><strong>Example:</strong> &quot;HVAC repair Boston&quot;</li>
          <li><strong>Example:</strong> &quot;CRM software for small business&quot;</li>
          <li><strong>Example:</strong> &quot;divorce lawyer NYC&quot;</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Local businesses</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Local searches (&quot;near me&quot;, &quot;in Boston&quot;) have
          extremely high intent and conversion rate. Google Maps integration and Local
          Service Ads give additional advantage.
        </p>
        <ul className="text-sm">
          <li>Restaurants, hair salons, beauty salons</li>
          <li>Emergency services (plumber, towing)</li>
          <li>Medical and dental practices</li>
          <li>Local retail &amp; service businesses</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">B2B with specific solution</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Decision makers first search Google when looking for business solutions.
          If someone searches &quot;ERP for manufacturing&quot;, they have budget and a problem
          to solve — that&apos;s your opportunity.
        </p>
        <ul className="text-sm">
          <li>SaaS products &amp; software solutions</li>
          <li>Business services (IT outsourcing, accounting, legal)</li>
          <li>Enterprise solutions &amp; B2B technology</li>
          <li>Industrial-technical equipment</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">eCommerce with clear demand</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          If you sell standard products people search by name,
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="underline">Google Shopping</Link> campaigns
          often deliver best ROAS. Search shows intent, Shopping shows product.
        </p>
        <ul className="text-sm">
          <li>Branded products (specific models, SKUs)</li>
          <li>Problem-solving products (e.g., &quot;iPhone 12 battery&quot;)</li>
          <li>Price &amp; spec comparison (electronics, appliances)</li>
          <li>Seasonal products with clear demand</li>
        </ul>
      </div>

      <hr />

      {/* ── H2: When Meta Ads is better ── */}
      <h2>When Meta Ads is the better choice</h2>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Brand awareness &amp; new products</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          When people don&apos;t know your product exists or need it, there&apos;s nothing
          to search on Google. Meta lets you create demand
          by showing ads to the right audience based on interests.
        </p>
        <ul className="text-sm">
          <li>Launching new brand or product</li>
          <li>Innovative products people don&apos;t search for yet</li>
          <li>D2C brands building awareness</li>
          <li>Lifestyle and community-driven products</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Visually attractive products</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Products that &quot;sell themselves&quot; when seen work
          excellently on Instagram and Facebook. Meta format enables storytelling,
          lifestyle presentation, and emotional connection.
        </p>
        <ul className="text-sm">
          <li>Fashion, clothing, shoes, accessories</li>
          <li>Cosmetics &amp; beauty products</li>
          <li>Home decor, furniture, interior design</li>
          <li>Food &amp; beverages (visual is key)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Impulse purchase categories</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Products people buy quickly, without long consideration,
          work excellently on Meta platforms. Scrolling feed, sees something,
          likes it — buys. Lower price = less resistance.
        </p>
        <ul className="text-sm">
          <li>Products under $80 (low financial barrier)</li>
          <li>Gadgets, accessories, gifts</li>
          <li>Subscription box products</li>
          <li>Trending &amp; viral products</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Building audiences &amp; lookalikes</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Meta enables sophisticated audience building strategy —
          you collect email lists, build custom audiences from visitors,
          create lookalike audiences of similar buyers. This approach is
          powerful for long-term growth.
        </p>
        <ul className="text-sm">
          <li><Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="underline">Remarketing</Link> for site visitors &amp; cart abandoners</li>
          <li>Lookalike audiences based on existing customers</li>
          <li>Video view audiences for funnel progression</li>
          <li>Email list retargeting &amp; customer exclusions</li>
        </ul>
      </div>

      <hr />

      {/* ── H2: Combined strategy ── */}
      <h2>Combined strategy — best approach</h2>

      <p>
        Instead of &quot;either-or&quot;, think about &quot;both-and&quot; approach.
        Most successful advertisers use both platforms — each has its role
        in the customer journey. Here&apos;s how to combine them strategically:
      </p>

      <h3>Full-funnel approach</h3>
      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4 text-sm font-mono">
          <div>
            <strong className="text-blue-600">AWARENESS (Top of funnel)</strong>
            <div className="ml-4 mt-1 text-gray-700">
              ↳ <strong>Meta Ads:</strong> Video content, brand awareness campaigns<br />
              ↳ <strong>Meta Ads:</strong> Interests &amp; behaviors targeting<br />
              ↳ <strong>YouTube Ads:</strong> Skippable video, reach campaigns
            </div>
          </div>
          <div>
            <strong className="text-green-600">CONSIDERATION (Middle of funnel)</strong>
            <div className="ml-4 mt-1 text-gray-700">
              ↳ <strong>Meta Ads:</strong> Retargeting video viewers &amp; engagers<br />
              ↳ <strong>Google Display:</strong> Content remarketing<br />
              ↳ <strong>YouTube Ads:</strong> Remarketing for YouTube viewers
            </div>
          </div>
          <div>
            <strong className="text-yellow-600">DECISION (Bottom of funnel — conversion)</strong>
            <div className="ml-4 mt-1 text-gray-700">
              ↳ <strong>Google Search:</strong> Branded + high-intent keywords<br />
              ↳ <strong>Google Shopping:</strong> Product searches<br />
              ↳ <strong>Meta Ads:</strong> Dynamic product retargeting<br />
              ↳ <strong>RLSA:</strong> Increased bids for known visitors
            </div>
          </div>
          <div>
            <strong className="text-purple-600">RETENTION (Customer retention)</strong>
            <div className="ml-4 mt-1 text-gray-700">
              ↳ <strong>Meta Ads:</strong> Customer lookalikes<br />
              ↳ <strong>Meta Ads:</strong> Upsell &amp; cross-sell campaigns<br />
              ↳ <strong>Email marketing</strong> (out of scope, but important)
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Key principle</p>
        <p className="text-blue-800 text-sm mb-0">
          Meta fills the funnel, Google closes it. Use Meta to introduce people
          to your brand, Google to capture those ready to buy.
          I recommend this approach for most businesses with $1,500+/month budget.
        </p>
      </div>

      <h3>Budget allocation by business type</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Business type</th>
              <th className="py-3 px-4 font-heading font-semibold">Google Ads</th>
              <th className="py-3 px-4 font-heading font-semibold">Meta Ads</th>
              <th className="py-3 px-4 font-heading font-semibold">Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce (known products)</td>
              <td className="py-3 px-4 text-green-700 font-semibold">60-70%</td>
              <td className="py-3 px-4">30-40%</td>
              <td className="py-3 px-4">High demand, Shopping dominates</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">eCommerce (new brand)</td>
              <td className="py-3 px-4">30-40%</td>
              <td className="py-3 px-4 text-green-700 font-semibold">60-70%</td>
              <td className="py-3 px-4">Need to build awareness</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">B2B Lead Gen</td>
              <td className="py-3 px-4 text-green-700 font-semibold">70-80%</td>
              <td className="py-3 px-4">20-30%</td>
              <td className="py-3 px-4">Search = active intent</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Local business</td>
              <td className="py-3 px-4 text-green-700 font-semibold">60-80%</td>
              <td className="py-3 px-4">20-40%</td>
              <td className="py-3 px-4">Local searches have high intent</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">SaaS</td>
              <td className="py-3 px-4">50-60%</td>
              <td className="py-3 px-4">40-50%</td>
              <td className="py-3 px-4">Balance: search + retargeting</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">D2C Brand</td>
              <td className="py-3 px-4">40-50%</td>
              <td className="py-3 px-4 text-green-700 font-semibold">50-60%</td>
              <td className="py-3 px-4">Storytelling &amp; visual identity</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── H2: Budget and allocation ── */}
      <h2>Budget and allocation</h2>

      <p>
        How much to allocate for each platform? Recommendation depends on industry,
        goals, and demand availability. Here are practical frameworks:
      </p>

      <h3>Minimum budgets for testing</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Google Ads</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">$1,000-1,500/month</h3>
          <p className="text-sm text-gray-600 mb-0">
            Minimum for meaningful testing of Search + Shopping campaigns.
            Below this, it&apos;s hard to gather enough data for optimization.
            For competitive industries, you need more.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Meta Ads</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">$500-800/month</h3>
          <p className="text-sm text-gray-600 mb-0">
            Minimum for testing different creatives and audiences.
            CPM is lower, but takes time for algorithm to learn.
            For serious scaling, plan $1,500+.
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Golden rule for starting</p>
        <p className="text-sm text-yellow-900 mb-0">
          Don&apos;t start both platforms simultaneously if this is your first campaign.
          Start with the one that has bigger potential for your business (usually Google
          if demand exists), collect data for 60-90 days, then
          add the second platform. I recommend this approach for budgets under $2,500/month.
        </p>
      </div>

      <hr />

      {/* ── H2: Measurement and attribution ── */}
      <h2>Measurement and attribution</h2>

      <p>
        One of the biggest challenges of multi-platform advertising is <strong>attribution</strong>
        — which platform deserves credit for conversion? Meta and Google use
        different attribution models, often leading to confusion.
      </p>

      <h3>How Google and Meta measure conversions</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Aspect</th>
              <th className="py-3 px-4 font-heading font-semibold">Google Ads</th>
              <th className="py-3 px-4 font-heading font-semibold">Meta Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Default attribution window</td>
              <td className="py-3 px-4">30 days (click), 1 day (view)</td>
              <td className="py-3 px-4">7 days (click), 1 day (view)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Attribution model</td>
              <td className="py-3 px-4">Data-driven (default)</td>
              <td className="py-3 px-4">Last-click (default)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Cross-device tracking</td>
              <td className="py-3 px-4">Yes (Google login)</td>
              <td className="py-3 px-4">Limited (iOS 14+ issue)</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">View-through conversions</td>
              <td className="py-3 px-4">1 day (Display)</td>
              <td className="py-3 px-4">1 day</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Attribution in multi-platform world</p>
        <p className="text-blue-800 text-sm mb-0">
          User sees your ad on Instagram, doesn&apos;t click. Next week
          searches Google, clicks ad, buys. Who gets credit? Google says Google,
          Meta says Meta (view-through). Truth is somewhere in between. Use <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="underline">Google Analytics 4</Link> or
          dedicated attribution tool (e.g., Triple Whale) for independent measurement.
        </p>
      </div>

      <h3>Key metrics to track per platform</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Google Ads</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Focus metrics</h3>
          <ul className="text-sm mb-0">
            <li><strong>Conversion rate</strong> — measures intent quality</li>
            <li><strong>Search impression share</strong> — how much potential you&apos;re leaving</li>
            <li><strong>Quality Score</strong> — impacts CPC</li>
            <li><strong>ROAS</strong> — campaign profitability</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Meta Ads</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Focus metrics</h3>
          <ul className="text-sm mb-0">
            <li><strong>CTR (Link)</strong> — measures creative quality</li>
            <li><strong>CPA</strong> — cost per conversion</li>
            <li><strong>Frequency</strong> — ad fatigue signal</li>
            <li><strong>ROAS</strong> — campaign profitability</li>
          </ul>
        </div>
      </div>

      <hr />

      {/* ── H2: FAQ ── */}
      <h2>Frequently asked questions</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Which channel is better for beginners?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Google Search is usually easier to measure direct ROI because users
            have high intent. Meta requires strong creative and deeper understanding
            of audience. But depends on your business — if you sell visually attractive
            products, Meta might be more natural start. I recommend starting
            with platform that has clearer connection between ad and sale.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much budget for testing both platforms?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum $1,500-2,500 total ($1,000+ Google, $500+ Meta) for 60-90 days
            to get meaningful data for decision-making. Below this, results
            are often statistically meaningless. If your budget is smaller, start with
            one platform, optimize it, then add second later.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Do I need agency that runs both platforms?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Ideally yes, because strategy should be coordinated — Meta fills funnel,
            Google closes sales, remarketing overlaps. But specialized
            freelancers or smaller agencies for each channel can be better at execution
            than generalist agency that does &quot;everything&quot;. More important that someone understands
            your industry than has access to all platforms. See more at
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "agencija-vs-freelancer" } }} className="underline ml-1">agency vs freelancer</Link>.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What if my product isn&apos;t visual — does Meta make sense?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Meta can still work through UGC content, testimonials, before/after
            comparison, or storytelling videos. B2B SaaS and technical products successfully
            use Meta for thought leadership and webinar promotion. But realistically,
            if you don&apos;t have visual story, Google will likely be more efficient channel.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How to measure cross-channel impact?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Without independent tracking system, it&apos;s difficult. Google Analytics 4 is good
            start (Advertising → Attribution → Conversion paths), but has limitations.
            For serious multi-platform advertising, consider dedicated attribution
            tool like Rockerbox, Triple Whale, or Northbeam. Alternative: track
            overall business performance, not just individual platforms.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Do Facebook Ads still work after iOS 14 update?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Yes, but not the same as before. iOS 14+ reduced tracking capabilities,
            making attribution and targeting harder. But Meta still works — just
            requires different approach (Conversions API, server-side tracking, broader
            targeting). Many businesses still have profitable Meta campaigns,
            especially for remarketing and brand awareness.
          </div>
        </details>
      </div>

      <hr />

      {/* ── CTA ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Not sure which platform is right for your business?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          I analyze your industry, budget, and goals, and recommend optimal
          strategy — Google, Meta, or combination. Free consultation, no obligation.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Schedule free consultation
        </Link>
      </div>

      {/* ── Connected guides ── */}
      <h3 className="font-heading font-bold text-lg mb-3">Related guides</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Remarketing — Complete guide
          </p>
          <p className="text-xs text-gray-500 mb-0">
            How to bring back 96% of visitors who leave without buying
          </p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-oglasavanje-za-firme" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Google advertising for businesses
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Guide for B2B companies and service businesses
          </p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            How much does Google Ads cost?
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Real advertising costs in US/UK markets
          </p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "ecommerce-vs-b2b" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            eCommerce vs B2B strategy
          </p>
          <p className="text-xs text-gray-500 mb-0">
            How approach differs by business type
          </p>
        </Link>
      </div>

      {/* ── Footer ── */}
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
