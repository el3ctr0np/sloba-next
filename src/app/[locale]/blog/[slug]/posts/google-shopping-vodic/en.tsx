import { Link } from "@/i18n/navigation";

export default function GoogleShoppingGuideEN() {
  return (
    <>
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Properly configured Google Shopping campaigns deliver 3-8x ROAS. 80% of success depends on product feed optimization — 10 mandatory attributes, strategic title structure, and 5 custom labels for segmentation. I recommend a priority-based structure (High/Medium/Low) and Target ROAS bidding for stable campaigns with 50+ monthly conversions.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">10</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">mandatory attributes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">5</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">custom labels</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3-8x</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">ROAS range</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">80%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">success in feed</p>
          </div>
        </div>
      </div>

      <p>
        Google Shopping campaigns are the most important channel for most eCommerce businesses. The visual format with product image, price, and store name appears at the top of search results. Users see the product before clicking, which filters unqualified traffic and brings people ready to buy.
      </p>
      <p>
        Shopping campaigns are only as good as your product feed and campaign structure. In my experience, 80% of problems stem from an unoptimized feed — no matter how much you spend, a bad feed means bad results.
      </p>

      <hr />

      <h2>How Google Shopping works</h2>
      <p>
        Unlike Search campaigns where you choose keywords, Google Shopping uses your <strong>product feed</strong> to determine when to show ads. Google matches data from the feed with user searches and displays relevant products.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Create product feed</strong> <span className="text-gray-500">— XML or TXT file with all product data</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong><a href="https://support.google.com/merchants/answer/188493" target="_blank" rel="noopener noreferrer" className="underline">Upload to Google Merchant Center</a></strong> <span className="text-gray-500">— central platform for feed management</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Link to Google Ads</strong> <span className="text-gray-500">— enables Shopping campaign creation</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Google matches products to searches</strong> <span className="text-gray-500">— automatic targeting based on feed data</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Pay per click</strong> <span className="text-gray-500">— CPC model, same as Search campaigns</span></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Advantage</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Visual format</h3>
          <p className="text-sm text-gray-600 mb-0">Users see product, price, and brand before clicking — direct pre-qualification of buyers.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Advantage</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">High purchase intent</h3>
          <p className="text-sm text-gray-600 mb-0">People search for specific products with intent to buy, not research.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Advantage</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Price visible upfront</h3>
          <p className="text-sm text-gray-600 mb-0">Transparency eliminates clicks from users for whom the product is too expensive.</p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Advantage</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Less competition</h3>
          <p className="text-sm text-gray-600 mb-0">Many eCommerce stores don't optimize feeds — opportunity for better positions and lower CPCs.</p>
        </div>
      </div>

      <hr />

      <h2>Product feed — the foundation of Shopping campaigns</h2>
      <p>
        Your product feed is an XML or TXT file containing all product information. Google uses this data to decide which searches to show your product for, how to rank it against competitors, and whether the product is eligible for display. The full attribute specification is available in <a href="https://support.google.com/merchants/answer/7052112" target="_blank" rel="noopener noreferrer" className="underline">Google&apos;s product data specification</a>.
      </p>
      <p>
        In my experience, 80% of Shopping campaign problems come from a poorly optimized feed. If the feed isn't good, even the best bidding won't help.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Attribute</th>
              <th className="py-3 px-4 font-heading font-semibold">What it is</th>
              <th className="py-3 px-4 font-heading font-semibold">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">id</td>
              <td className="py-3 px-4">Unique product ID</td>
              <td className="py-3 px-4">SKU-12345</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">title</td>
              <td className="py-3 px-4">Product name</td>
              <td className="py-3 px-4">Nike Air Max 90 Men's White Sneakers Size 10</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">description</td>
              <td className="py-3 px-4">Product description</td>
              <td className="py-3 px-4">Detailed description with specifications</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">link</td>
              <td className="py-3 px-4">Product URL</td>
              <td className="py-3 px-4">https://shop.com/product/12345</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">image_link</td>
              <td className="py-3 px-4">Main image URL</td>
              <td className="py-3 px-4">https://shop.com/images/12345.jpg</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">price</td>
              <td className="py-3 px-4">Product price</td>
              <td className="py-3 px-4">129.99 USD</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">availability</td>
              <td className="py-3 px-4">Stock status</td>
              <td className="py-3 px-4">in stock</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">brand</td>
              <td className="py-3 px-4">Product brand</td>
              <td className="py-3 px-4">Nike</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">gtin</td>
              <td className="py-3 px-4">Barcode (GTIN/UPC/EAN)</td>
              <td className="py-3 px-4">1234567890123</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">condition</td>
              <td className="py-3 px-4">Product condition</td>
              <td className="py-3 px-4">new</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Title optimization — the most important attribute</h3>
      <p>
        Title is the most important attribute in the feed. Google uses it to match user searches. Bad title = no chance of showing for relevant searches.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">[Brand] + [Product Type] + [Key Attributes] + [Model/Variant]</p>
      </div>

      <p className="font-semibold">Bad vs good titles:</p>
      <ul>
        <li>Bad: &quot;Men's Shoes&quot; → Good: &quot;Nike Air Max 90 Men's Sneakers White Size 10&quot;</li>
        <li>Bad: &quot;HP Laptop&quot; → Good: &quot;HP Pavilion 15 Laptop i5 16GB RAM 512GB SSD 15.6 inch&quot;</li>
        <li>Bad: &quot;Dress&quot; → Good: &quot;Zara Summer Dress Red Cotton Size M&quot;</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Character limit</p>
        <p className="text-blue-800 text-sm mb-0">Google allows 150 characters, but the first 70 are most important — that's what's visible in the ad. Put the most important information at the beginning.</p>
      </div>

      <h3>Description optimization</h3>
      <p>
        Description helps Google understand the product and affects relevance. I recommend 500-1000 characters, focusing on key information at the beginning.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="font-heading font-bold text-lg mb-4">Best practices for descriptions</p>
        <ul className="text-sm space-y-2 mb-0">
          <li>Start with the most important information (product type, purpose)</li>
          <li>Include keywords naturally (no keyword stuffing)</li>
          <li>List specifications (material, dimensions, weight)</li>
          <li>Avoid promotional copy (&quot;Best deal!&quot;, &quot;Sale!&quot;)</li>
          <li>Don't repeat data from other attributes (brand, price)</li>
        </ul>
      </div>

      <h3>Product Type vs Google Product Category</h3>
      <p>
        <strong>Google Product Category</strong> is a fixed taxonomy — you have a limited set of categories that Google defines.
      </p>
      <p>
        <strong>Product Type</strong> is your own category — you have complete freedom of structure.
      </p>
      <p>
        I recommend using Product Type for deep segmentation, as it allows you to create ad groups by specific categories, set different bids, and better track performance.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Footwear &gt; Men's Footwear &gt; Sneakers &gt; Running Shoes &gt; Nike</p>
      </div>

      <h3>Custom Labels — secret weapon for segmentation</h3>
      <p>
        Custom Labels (0-4) are your tool for segmenting products by business criteria. In my experience, they're key to controlling Shopping campaigns and ROAS optimization.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Label</th>
              <th className="py-3 px-4 font-heading font-semibold">Purpose</th>
              <th className="py-3 px-4 font-heading font-semibold">Values</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">custom_label_0</td>
              <td className="py-3 px-4">Product margin</td>
              <td className="py-3 px-4">high_margin, medium_margin, low_margin</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">custom_label_1</td>
              <td className="py-3 px-4">Performance</td>
              <td className="py-3 px-4">best_seller, standard, slow_mover</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">custom_label_2</td>
              <td className="py-3 px-4">Season</td>
              <td className="py-3 px-4">spring, summer, fall, winter</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">custom_label_3</td>
              <td className="py-3 px-4">Price range</td>
              <td className="py-3 px-4">under_50, 50_100, over_100</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">custom_label_4</td>
              <td className="py-3 px-4">Promo status</td>
              <td className="py-3 px-4">on_sale, full_price</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-sm mb-0">Custom Labels allow you to create campaigns by margin (high margin = higher bid), by performance (top performers = separate campaign), or by season (exclude winter products in summer).</p>
      </div>

      <hr />

      <h2>Shopping campaign structure</h2>
      <p>
        Campaign structure determines how much control you have over bids and budget. I recommend a priority-based structure that gives you maximum control with minimal complexity.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-4">Priority-based structure</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Brand campaign</strong> <span className="text-gray-500">— Brand searches, all products, max control</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>High Priority campaign</strong> <span className="text-gray-500">— Generic searches, low bid, filters traffic</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Medium Priority campaign</strong> <span className="text-gray-500">— Categories, medium bid, core traffic</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Low Priority campaign</strong> <span className="text-gray-500">— Top performers, high bid, maximum ROAS</span></div>
          </div>
        </div>
      </div>

      <h3>Priority bidding strategy</h3>
      <p>
        Google allows 3 priority levels: High, Medium, Low. The counterintuitive approach that works:
      </p>
      <ul>
        <li><strong>High Priority + Low Bid</strong> — broad, generic searches (&quot;shoes&quot;, &quot;laptop&quot;)</li>
        <li><strong>Medium Priority + Medium Bid</strong> — more specific searches (&quot;nike shoes&quot;, &quot;hp laptop&quot;)</li>
        <li><strong>Low Priority + High Bid</strong> — high-intent searches (&quot;nike air max 90 white size 10&quot;)</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">How it works</p>
        <p className="text-blue-800 text-sm mb-0">Negative keywords in the High Priority campaign push more specific traffic down through Medium and Low campaigns. This gives you control — you pay less for generic searches, more for high-intent searches.</p>
      </div>

      <h3>Single Product Ad Groups (SPAGs)</h3>
      <p>
        For the top 20% of products by revenue or margin, I recommend creating ad groups with a single product. This gives you precise bid control and clearer data for optimization.
      </p>
      <p className="font-semibold">When to use SPAGs:</p>
      <ul>
        <li>Top 20% products by revenue</li>
        <li>High-margin products (high margin custom label)</li>
        <li>Seasonal priorities (umbrellas in summer, jackets in winter)</li>
        <li>Products with consistent traffic</li>
      </ul>

      <hr />

      <h2>Bidding strategies for Shopping</h2>
      <p>
        Bidding strategy choice depends on budget size, conversion history, and how much control you want. In my experience, most eCommerce businesses perform best with Target ROAS after an initial data collection period.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Strategy</th>
              <th className="py-3 px-4 font-heading font-semibold">When to use</th>
              <th className="py-3 px-4 font-heading font-semibold">Minimum requirements</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Manual CPC</td>
              <td className="py-3 px-4">New campaign, data collection, small budget</td>
              <td className="py-3 px-4">No requirements</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Target ROAS</td>
              <td className="py-3 px-4">Stable campaign, clear conversion values</td>
              <td className="py-3 px-4">50+ conversions/month</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Maximize Clicks</td>
              <td className="py-3 px-4">Starting out, gathering traffic</td>
              <td className="py-3 px-4">No requirements</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Maximize Conversion Value</td>
              <td className="py-3 px-4">Enough conversions, no specific ROAS target</td>
              <td className="py-3 px-4">30+ conversions/month</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Manual CPC</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Full control over bids. Every bid change is active immediately. No learning period. Ideal for starting or small budgets.</p>
        <p className="text-sm font-semibold mb-1">When to use:</p>
        <ul className="text-sm mb-0">
          <li>New campaign without conversion history</li>
          <li>Budget below $1,000/£800 monthly</li>
          <li>Need for precise control</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Target ROAS</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Automatic optimization toward target ROAS. Google uses device, location, time, and audience signals. Less manual work, but requires learning period.</p>
        <p className="text-sm font-semibold mb-1">When to use:</p>
        <ul className="text-sm mb-0">
          <li>Stable campaign with 50+ conversions monthly</li>
          <li>Budget $2,000+/£1,500+ monthly</li>
          <li>Clear conversion values (eCommerce with transaction values)</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">My recommendation</p>
        <p className="text-sm text-yellow-900 mb-0">I recommend Manual CPC for the first 2-4 weeks (while collecting minimum 50 conversions), then switch to Target ROAS. Split campaigns by custom labels (high/medium/low margin) and set different ROAS targets — high margin = lower target, low margin = higher target.</p>
      </div>

      <hr />

      <h2>Six tactics to increase ROAS</h2>
      <p>
        These are tactics that consistently deliver results in Shopping campaigns. In my experience, most eCommerce businesses can increase ROAS by 20-50% implementing these optimizations.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Feed optimization</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Biggest impact for smallest effort. 80% of problems are in the feed.</p>
        <ul className="text-sm mb-3">
          <li>Audit all titles — add brand, color, size, model</li>
          <li>Optimize descriptions for top 100 products</li>
          <li>Set custom labels by margin, performance, season</li>
          <li>Check that all required attributes are filled</li>
        </ul>
        <p className="text-sm text-gray-500 mb-0">Expected result: 10-30% improvement in CTR and Conversion Rate.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Negative keywords</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Shopping uses feed for targeting, but you can add negative keywords to filter unqualified traffic.</p>
        <ul className="text-sm mb-3">
          <li><strong>Informational:</strong> &quot;how to&quot;, &quot;what is&quot;, &quot;review&quot;, &quot;tutorial&quot;</li>
          <li><strong>Free seekers:</strong> &quot;free&quot;, &quot;cheap&quot;, &quot;discount code&quot;</li>
          <li><strong>Job related:</strong> &quot;job&quot;, &quot;employment&quot;, &quot;career&quot;</li>
          <li><strong>DIY:</strong> &quot;make your own&quot;, &quot;DIY&quot;, &quot;homemade&quot;</li>
        </ul>
        <p className="text-sm text-gray-500 mb-0">I recommend weekly Search Terms report review and aggressive addition of negatives. This is the fastest way to improve CTR and reduce CPC.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Bid adjustments</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Device, location, and time adjustments can significantly improve ROAS.</p>
        <ul className="text-sm mb-0">
          <li><strong>Device:</strong> Desktop usually converts better. Mobile for research, desktop for purchase. Test +20-50% desktop, -10-20% mobile.</li>
          <li><strong>Location:</strong> Different regions = different performance. London vs rest of UK can vary 20-50%.</li>
          <li><strong>Time:</strong> Analyze performance by hour/day. Reduce bids when conversion rate is low (nighttime, early morning).</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Remarketing Lists for Shopping Ads (RLSA)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Add audience lists and increase bids for users who already know your brand.</p>
        <ul className="text-sm mb-3">
          <li><strong>Past purchasers:</strong> +50-100% bid adjustment</li>
          <li><strong>Cart abandoners:</strong> +30-50% bid adjustment</li>
          <li><strong>Product viewers:</strong> +20-30% bid adjustment</li>
        </ul>
        <p className="text-sm text-gray-500 mb-0">These users already know your brand — worth paying more per click as conversion rate is significantly higher.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Exclude poor performers</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Not all products deserve budget. I recommend excluding:</p>
        <ul className="text-sm mb-3">
          <li>Products without conversions after 100+ clicks</li>
          <li>Low margin products that don't convert</li>
          <li>Out of stock products (automatic, but verify)</li>
        </ul>
        <p className="text-sm text-gray-500 mb-0">Use custom labels for easier segmentation and exclusion. This frees budget for top performers.</p>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Price competitiveness</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Google displays price in the ad. If you're 30% more expensive than competitors, CTR will suffer.</p>
        <ul className="text-sm mb-0">
          <li>Check Price Competitiveness report in Merchant Center</li>
          <li>Adjust prices for competitiveness or</li>
          <li>Focus budget on products where you're competitive</li>
        </ul>
      </div>

      <hr />

      <h2>Common Shopping campaign mistakes</h2>
      <p>
        These are mistakes I see most frequently in Shopping campaigns. Most are easily fixable, but can cost thousands in lost ROAS.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
        <p className="font-semibold mb-2">Unoptimized feed straight from shop platform</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Invest time in feed optimization or use a feed management tool (DataFeedWatch, GoDataFeed). Title &quot;Product 123&quot; and generic description don't work — add brand, color, size, specifics.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
        <p className="font-semibold mb-2">One campaign for all products</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Segment by category, margin, or performance. One bid for all products means you're losing money on low performers and not maximizing top performers.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
        <p className="font-semibold mb-2">Ignoring Search Terms report</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Weekly Search Terms report review and aggressive addition of negative keywords. You're paying for searches that have nothing to do with your products — &quot;job&quot;, &quot;free&quot;, &quot;review&quot;.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
        <p className="font-semibold mb-2">Poor product images</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Clean white background, consistent style, high resolution (minimum 800x800px), and multiple images via additional_image_link attribute. Poor images = low CTR = low Quality Score = higher CPC.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
        <p className="font-semibold mb-2">Not tracking price competitiveness</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Solution:</strong> Check Merchant Center Price Competitiveness report. If you're 25% more expensive than competitors, CTR will suffer. Adjust prices or focus budget on products where you're competitive.</p>
        </div>
      </div>

      <hr />

      <h2>Shopping vs Performance Max</h2>
      <p>
        Common dilemma: use Standard Shopping or Performance Max for eCommerce campaigns? In my experience, a hybrid approach works best.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Criterion</th>
              <th className="py-3 px-4 font-heading font-semibold">Standard Shopping</th>
              <th className="py-3 px-4 font-heading font-semibold">Performance Max</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Bid control</td>
              <td className="py-3 px-4">Full control</td>
              <td className="py-3 px-4">Minimal control</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Search terms</td>
              <td className="py-3 px-4">Clear insight</td>
              <td className="py-3 px-4">Limited insight</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Placements</td>
              <td className="py-3 px-4">Shopping only</td>
              <td className="py-3 px-4">All Google placements</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Learning period</td>
              <td className="py-3 px-4">Faster</td>
              <td className="py-3 px-4">Slower (2-3 weeks)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Manual work</td>
              <td className="py-3 px-4">More</td>
              <td className="py-3 px-4">Less</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Use case</td>
              <td className="py-3 px-4">Control, ROAS focus</td>
              <td className="py-3 px-4">Prospecting, reach</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Hybrid approach — my recommendation</p>
        <p className="text-sm text-yellow-900 mb-0">I recommend Standard Shopping for brand campaigns and top categories (where you need granular control and clear ROAS), and Performance Max for prospecting (wider reach, new audiences). Track account-level performance, not just individual campaigns — PMax may cannibalize Shopping, but overall result may be better.</p>
      </div>

      <hr />

      <h2>Merchant Center setup</h2>
      <p>
        Before launching Shopping campaigns, you need to properly set up Google Merchant Center. This is the checklist I use for all new clients.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-4">Setup checklist</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Verify and claim website</strong> <span className="text-gray-500">— proof you own the site</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Shipping settings</strong> <span className="text-gray-500">— configure shipping costs for your country/region</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Tax settings</strong> <span className="text-gray-500">— if applicable for your market</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Return policy</strong> <span className="text-gray-500">— link to return policy page</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Business information</strong> <span className="text-gray-500">— complete address, contact</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Upload feed</strong> <span className="text-gray-500">— XML/TXT file with products</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div><strong>Link to Google Ads</strong> <span className="text-gray-500">— enables campaign creation</span></div>
          </div>
        </div>
      </div>

      <h3>Common disapproval reasons</h3>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-sm mb-0"><strong>Price mismatch:</strong> Price in feed must be identical to price on site. If difference is more than 10%, Google disapproves the product.</p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-sm mb-0"><strong>Availability mismatch:</strong> If product is &quot;in stock&quot; in feed but &quot;out of stock&quot; on site, Google disapproves the product. Automate feed updates.</p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-sm mb-0"><strong>Missing information:</strong> Missing GTIN, brand, or image. If you don't have GTIN, you must fill brand + MPN. If you don't have MPN either, apply for exemption.</p>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-sm mb-0"><strong>Policy violation:</strong> Prohibited products (weapons, drugs, alcohol) or promotional claims in title/description (&quot;Best deal!&quot;, &quot;50% off!&quot;). Be descriptive, not promotional.</p>
      </div>

      <hr />

      <h2>Frequently asked questions</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How many products do I need for Shopping campaigns?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum 10-20 products, but ideally 50+. More products = more opportunities for impressions and conversions. I recommend starting with top performers from organic traffic or bestseller categories.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I use Shopping without GTIN?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Yes, but performance may be worse. Google prefers products with GTIN for matching. If you don't have GTIN, you must fill brand + MPN (Manufacturer Part Number). If you don't have MPN either, you can apply for GTIN exemption in Merchant Center.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What budget do I need for Shopping campaigns?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum $500-1,000/£400-800 monthly for meaningful results. For serious testing and optimization, I recommend $1,500-2,000+/£1,200-1,600+. With smaller budget, focus on best-selling categories or high-margin products.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why aren't my products showing?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Common reasons: disapproved feed (check Merchant Center Diagnostics), bid too low (increase bid or switch to Maximize Clicks), poor Quality Score (optimize feed and titles), or availability issue (price/stock mismatch).
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Shopping or Search campaigns for eCommerce?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Both. Shopping for visual, product-focused traffic (&quot;nike shoes&quot;, &quot;hp pavilion laptop&quot;). Search for branded searches (&quot;your brand name&quot;) and specific informational searches that Shopping doesn't capture well. I recommend 60-70% budget on Shopping, 30-40% on Search.
          </div>
        </details>
      </div>

      <hr />

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Need help with Google Shopping campaigns?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          I create and optimize Shopping campaigns for eCommerce businesses. Focus on feed optimization, campaign structure, and ROAS improvement.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">Schedule free consultation</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/google-shopping" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Services</p>
          <p className="text-xs text-gray-500 mb-0">Professional Shopping campaign management</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max Guide</p>
          <p className="text-xs text-gray-500 mb-0">Everything about PMax campaigns, structure, and eCommerce optimization.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing Guide</p>
          <p className="text-xs text-gray-500 mb-0">Strategies for remarketing in Google Ads and how to increase conversions.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negative Keywords</p>
          <p className="text-xs text-gray-500 mb-0">How to use negative keywords to reduce CPC and improve CTR.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-oglasavanje-za-firme" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads for Businesses</p>
          <p className="text-xs text-gray-500 mb-0">Complete guide to Google Ads for B2B and B2C businesses.</p>
        </Link>
      </div>

      <hr />

      <h2>Frequently asked questions about Google Shopping campaigns</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Do I need Merchant Center for Google Shopping?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Yes, Merchant Center is mandatory. This is where you upload your product feed with all product information (title, price, image, availability). Without MC you cannot run Shopping campaigns.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How many products do I need for Google Shopping?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            There&apos;s no minimum, but Shopping works best with 50+ products. With fewer than 20 products, budget gets spent quickly on few SKUs. For optimal results, 100+ active products in the feed is recommended.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why are my Shopping ads being disapproved?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Most common reasons: price mismatch between website and feed, missing GTIN/MPN, poor images (watermarks, text on image), missing shipping information, or violating Google Merchant Center policies.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Shopping vs Performance Max — what&apos;s better for eCommerce?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Standard Shopping gives more control and transparency. PMax gives broader reach but less control. Ideal combination: Standard Shopping for top products + PMax for the rest of the catalog. Depends on budget and product count.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How do I optimize my product feed for better results?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Key optimizations: 1) Title with main keyword at the beginning, 2) High-quality images on white background, 3) Detailed description with keywords, 4) Accurate product_type and google_product_category, 5) Regular price and availability updates.
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
