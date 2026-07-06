import { Link } from "@/i18n/navigation";

export default function MerchantCenterSerbiaSetupEN() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Quick answer</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google Merchant Center is prerequisite number one for Shopping ads — without a verified account and a correct product feed, there is no Shopping campaign. This is a step-by-step setup guide built specifically for the Serbian market, ahead of Shopping&apos;s official launch in November 2026.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">10+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">MC accounts I&apos;ve set up</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">8</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">required feed attributes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1-3 wks</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">account review on new markets</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">95%+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">target approval rate before launch</p>
          </div>
        </div>
      </div>

      {/* ── GMC availability warning ── */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 md:p-5 my-6">
        <p className="font-semibold text-amber-900 mb-1">⚠️ Important note — status as of July 2026</p>
        <p className="text-amber-800 text-base mb-0">
          <strong>Opening a Merchant Center account for the Serbian market is not yet possible.</strong> Google will enable registration ahead of Shopping&apos;s official launch in Serbia. Several readers have told me that registration currently doesn&apos;t go through — that&apos;s expected, you&apos;re not doing anything wrong. Use this guide as preparation: once registration opens, you&apos;ll get through setup in a single day instead of a week. Everything else in this guide (feed preparation, attributes, site structure) you can already do now.
        </p>
      </div>

      <p>
        Whenever I open a new Shopping account for a client, the first thing I work on isn&apos;t the bidding strategy or campaign structure — it&apos;s Merchant Center. It sounds like an administrative detail, but in practice it&apos;s the opposite: 80% of the mistakes I see in Shopping campaigns come from a poor MC setup or a messy feed, not from bad bid management.
      </p>
      <p>
        I&apos;ve been running Google Ads for years across 10 active clients — from Perun Moto (global moto gear) to Chelleon UK (skincare eCommerce) and Sleepy Piglet UK (mattress brand). All three accounts run Shopping campaigns that go through Merchant Center, and all three have had feed issues at some point that I had to fix. This guide is a distillation of those experiences, adapted specifically for the Serbian market, which gets Shopping in November 2026.
      </p>
      <p>
        This is a supporting post to the pillar guide{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }} className="underline text-blue-700 font-medium">
          Google Shopping Is Coming to Serbia — Complete Preparation Guide
        </Link>. If you&apos;re just getting started and need broader context (launch date, Ex-Yu markets, costs), read that post first. Here I go deep specifically into Merchant Center setup.
      </p>

      <hr />

      <h2 id="what-is-google-merchant-center-and-why-its-a-prerequisite">What is Google Merchant Center and why it&apos;s a prerequisite for Shopping</h2>
      <p>
        Google Merchant Center (MC) is a free platform at merchants.google.com where you upload your <strong>product feed</strong> — a structured list of all your products with prices, images, availability, and other attributes. Google Ads knows nothing about your products until you tell it through MC. No feed, no Shopping ads. Full stop.
      </p>
      <p>
        People often confuse Merchant Center with the Google Ads account — these are two separate platforms that connect to each other. Google Ads is where you create campaigns and manage budget. Merchant Center is where your product catalog lives. A Shopping campaign in Google Ads &quot;pulls&quot; products directly from your MC feed — you don&apos;t pick keywords like with Search campaigns, Google automatically matches products to searches based on the data in your feed.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">From my experience</p>
        <p className="text-blue-800 text-base mb-0">
          Clients often ask me &quot;why isn&apos;t my product showing&quot; when the campaign is active and the budget is spending normally. In 9 out of 10 cases, the answer is in Merchant Center — a disapproved product, a bad feed attribute, or a price mismatch between the site and the feed. The first place I check isn&apos;t the Google Ads interface, it&apos;s MC Diagnostics.
        </p>
      </div>

      <hr />

      <h2 id="step-by-step-account-creation-and-verification">Step-by-step: creating and verifying your account</h2>
      <p>
        Here&apos;s exactly what to do, in the order I follow with every new client. Reminder: for the Serbian market, registration isn&apos;t open yet — you&apos;ll go through these steps on the day Google enables account creation. Until then, prepare everything the steps require (business details, site access for verification) so nothing slows you down.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Create an account at merchants.google.com</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Sign in with a Google account you plan to use long-term for the business (not a personal Gmail you could lose access to). Enter the business name exactly as it appears on the website and on invoices — Google compares this data.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Fill in business information completely</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Address, tax/registration number, contact phone, support email. An incomplete profile is one of the main triggers for account suspension on new markets — Google is stricter with accounts that have no history.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Verify site ownership</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Three options: an HTML tag in the &lt;head&gt; section, a Google Analytics code (if you already have GA4), or Google Tag Manager. I recommend the GTM option if you&apos;re already using it — the fastest and most stable method, no manual code edits needed for every change.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Claim the domain</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Verification proves you have access to the site; claiming proves that domain is assigned to your MC account and no one else can use it for a feed. Without claiming, feed upload is blocked. In MC: Business information → Website → Claim website.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Set up shipping settings</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Tools → Shipping and returns. Define delivery prices by region (all of Serbia, or by city if you have differentiated pricing), delivery timeframes, and conditions for free shipping. This shows up directly in the Shopping ad and affects CTR.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div>
              <strong>Link Merchant Center to your Google Ads account</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Tools → Linked accounts → Google Ads → enter your Customer ID. The link must be accepted from both sides (MC and Google Ads). Without this link, a Shopping campaign can&apos;t pull products from the feed — this is the last step before you can create a campaign.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important for new markets</p>
        <p className="text-yellow-800 text-base mb-0">
          When Google introduces Shopping to a new market, account review can take 1-3 weeks instead of the usual couple of days. I recommend creating and verifying your account a minimum of 60 days before you plan to launch your first campaign — don&apos;t wait until the last minute.
        </p>
      </div>

      <hr />

      <h2 id="product-feed-basics-8-required-attributes">Product feed basics — 8 required attributes</h2>
      <p>
        The product feed is an XML or TXT file (or a Google Sheets table) that contains data about every product. Google reads these attributes to decide if and when to show your product for a given search. These 8 attributes are absolutely required — without them, a product won&apos;t be accepted into the feed:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Attribute</th>
              <th className="py-3 px-3 font-heading font-semibold">What it represents</th>
              <th className="py-3 px-3 font-heading font-semibold">Example for a Serbian feed</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">id</td>
              <td className="py-3 px-3">Unique product identifier (SKU)</td>
              <td className="py-3 px-3">SKU-10234-M-Black</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">title</td>
              <td className="py-3 px-3">Product name — the single most important factor for matching</td>
              <td className="py-3 px-3">Nike Air Max 90 Men&apos;s Sneakers White Size 10</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">description</td>
              <td className="py-3 px-3">Product description, 500-1000 characters</td>
              <td className="py-3 px-3">Detailed description with material, features, use case</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">link</td>
              <td className="py-3 px-3">Direct URL to the product page</td>
              <td className="py-3 px-3">https://yourshop.rs/product/nike-air-max-90</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">image_link</td>
              <td className="py-3 px-3">URL of the main image, min 800x800px</td>
              <td className="py-3 px-3">https://yourshop.rs/img/nike-air-max-90-main.jpg</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">price</td>
              <td className="py-3 px-3">Price, must match the website exactly</td>
              <td className="py-3 px-3">12,990.00 RSD</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">availability</td>
              <td className="py-3 px-3">Stock status, real-time sync</td>
              <td className="py-3 px-3">in stock / out of stock / preorder</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">condition</td>
              <td className="py-3 px-3">Product condition</td>
              <td className="py-3 px-3">new / refurbished / used</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        On top of these 8 required attributes, I strongly recommend adding <strong>brand</strong>, <strong>gtin</strong>, and <strong>google_product_category</strong> right away — technically not always mandatory, but without them Google has fewer signals for matching and your CPC will be higher. For branded products (Nike, Bosch, Zara), GTIN is practically required — Google increasingly penalizes feeds that don&apos;t include it.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          A rule I always repeat to clients: the feed must be 100% identical to the site. Price, availability, name — everything has to match. Every mismatch is a disapproval waiting to happen.
        </p>
      </div>

      <hr />

      <h2 id="feed-delivery-methods-which-one-is-right-for-you">Feed delivery methods — which one is right for you</h2>
      <p>
        There are several ways to get your product feed into Merchant Center. The choice depends on the platform your site runs on and how many products you have.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Method #1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Manual upload</h3>
          <p className="text-base text-gray-600 mb-0">You manually upload an XML/TXT file through the MC interface. Works for small catalogs (under 20-30 products) or one-off tests. I don&apos;t recommend it for anything more serious — every price or stock change requires a manual update.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Method #2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Google Sheets</h3>
          <p className="text-base text-gray-600 mb-0">You build a feed in Google Sheets with columns matching the attributes, connect it to MC, and set up a scheduled fetch (e.g. daily at 3am). A good option for small to mid-size catalogs without a developer — easy to update, visible to everyone on the team.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Method #3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Shopify / WooCommerce plugin</h3>
          <p className="text-base text-gray-600 mb-0">For Shopify: the Google &amp; YouTube app generates the feed automatically from your catalog. For WooCommerce: the Google Listings &amp; Ads plugin (official) or YITH Google Shopping. Sync is automatic and real-time — this is my recommendation for 90% of Serbian eCommerce shops.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Method #4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Content API for Shopping</h3>
          <p className="text-base text-gray-600 mb-0">For custom shops (SAP, in-house CMS) or large catalogs (1,000+ SKUs) with frequent price/stock changes. Requires a developer, but gives you the most control and the fastest real-time sync. We use this for clients with ERP integrations like SAP Business One.</p>
        </div>
      </div>

      <p>
        For most Serbian eCommerce businesses I&apos;ve worked with, a plugin solution (Shopify or WooCommerce) is the best balance — it&apos;s set up in a few hours, sync is automatic, and it doesn&apos;t require a developer for every price change. If you have a custom platform or over 1,000 SKUs, the Content API is worth it for the real-time precision — real-time availability sync directly affects how fast Google reacts when a product goes out of stock.
      </p>

      <hr />

      <h2 id="common-mistakes-and-disapproval-reasons">Common mistakes and disapproval reasons</h2>
      <p>
        These are the mistakes I most often see when doing an MC audit for new clients — including ones I had to fix on the Perun Moto and Chelleon accounts.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Missing GTIN for branded products</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Solution:</strong> Google requires a GTIN (EAN barcode) for all products from well-known brands. If you sell Nike, Bosch, or any branded product with a barcode, add it — it&apos;s usually on the packaging or in the supplier&apos;s documentation. For your own brand without a GTIN, fill in brand + MPN (manufacturer part number) or apply for a GTIN exemption through MC.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Price mismatch between the site and the feed</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Solution:</strong> Google periodically crawls your site and compares the price to the one in the feed. If you have a sale on the site that isn&apos;t reflected in the feed (or vice versa), the product gets disapproved. If you use a plugin with automatic sync, this rarely happens — but if you manually change prices in two places, put a process in place so both get updated at the same time.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Promotional text in the title or description</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Solution:</strong> &quot;CHEAPEST!!! 50% off today only&quot; in the title is a direct path to disapproval. Google prohibits promotional language, all caps, and symbols (!!!, $$$) in the title and description. Prices and discounts belong in a dedicated attribute (sale_price), not in the text.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Images with a watermark or logo over the product</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Solution:</strong> Google automatically detects and rejects images with a watermark, text, or logo over the product photo. Clean white or neutral background, no graphics. Tools like remove.bg can speed up cleaning a large number of images.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Incomplete business information or missing return policy link</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Solution:</strong> Google requires your site to have a clearly visible return/refund policy page, terms of use, and contact information. This is especially strict for new markets where Google has no historical data about your business — complete all of it before uploading your first feed.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Mistake</p>
          <p className="font-semibold mb-2">Feed that isn&apos;t updated often enough</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Solution:</strong> Google recommends updating the feed at least once a day, and ideally in real time for availability. If you advertise a product as &quot;in stock&quot; while it&apos;s sold out, you get an account-level penalty, not just a disapproval for that product. Set up a scheduled fetch (daily) as a minimum.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="shipping-and-tax-settings-for-serbia">Shipping and tax settings for Serbia</h2>
      <p>
        This part is often underestimated, and it directly affects CTR and whether your ad even passes feed validation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Shipping for Serbia</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Delivery price by region</h3>
          <p className="text-base text-gray-600 mb-0">Set this up in Tools → Shipping settings. If you have a single price for all of Serbia (e.g. 300 RSD), enter it as a flat rate. If it varies by city or courier, set up region-based rules.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Shipping for Serbia</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Free shipping threshold</h3>
          <p className="text-base text-gray-600 mb-0">If you offer free shipping above a certain amount (e.g. 5,000 RSD), set that up as a rule — it shows directly in the ad as &quot;Free shipping&quot; and directly increases CTR. Serbian shoppers respond strongly to this.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tax for Serbia</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Prices with VAT included</h3>
          <p className="text-base text-gray-600 mb-0">In Serbia (as in EU practice), feed prices should include VAT, identical to what&apos;s shown to the end customer on the site. Don&apos;t leave the tax field blank if you&apos;re unsure — check Google Merchant Center Help for tax settings by country.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Delivery times</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Min/max transit time</h3>
          <p className="text-base text-gray-600 mb-0">Enter a realistic range (e.g. 1-3 business days for Belgrade, 2-5 for the rest of Serbia). An inaccurate delivery estimate that doesn&apos;t match reality leads to bad reviews and potential account penalties over the long run.</p>
        </div>
      </div>

      <hr />

      <h2 id="linking-to-your-google-ads-account">Linking to your Google Ads account</h2>
      <p>
        The last technical step before you can create a Shopping campaign. Without this link, Google Ads doesn&apos;t see your feed and the Shopping option in the interface won&apos;t offer products.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <h3 className="mt-0 mb-4 font-heading font-bold">How to link MC and Google Ads</h3>
        <ol className="mb-0">
          <li>In Merchant Center: Tools → Linked accounts → Google Ads</li>
          <li>Enter the Google Ads Customer ID (format XXX-XXX-XXXX)</li>
          <li>Click Link — a request is sent to the Google Ads account</li>
          <li>Sign in to Google Ads: Tools &amp; Settings → Linked accounts → Merchant Center → Approve</li>
          <li>After approval, create a new Shopping-type campaign in Google Ads and select the linked MC account as the product source</li>
        </ol>
      </div>

      <p>
        Note for agencies and consultants: if you manage Shopping for a client through an MCC account, the link must be made at the level of the client&apos;s actual Google Ads Customer ID, not the MCC ID. This is a common source of confusion during the first setup.
      </p>

      <hr />

      <h2 id="pre-launch-checklist-for-your-shopping-campaign">Checklist before launching your Shopping campaign</h2>
      <p>
        Before you turn on your first campaign, go through this list. This is the same checklist I use internally before every Shopping launch.
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Rule: 95%+ approval rate before turning on the campaign</p>
        <p className="text-base text-yellow-900 mb-0">If 30%+ of your products are disapproved when you turn on the campaign, you&apos;re spending budget on a small slice of your catalog and the algorithm doesn&apos;t have enough data to learn what converts. Fix the disapprovals first, then launch the campaign.</p>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>MC account verified and domain claimed</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>Business information complete (address, tax ID, contact)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>Shipping and tax settings configured for Serbia</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>Return policy page live and linked</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>Feed uploaded with all 8 required attributes</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>GTIN added for branded products</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>Diagnostics section checked — approval rate 95%+</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>Automatic scheduled feed sync configured (daily minimum)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>Merchant Center linked to the Google Ads account</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>Conversion tracking (purchase) active and tested</span>
        </div>
      </div>

      <p>
        For a deeper look at optimizing the feed itself — title formulas, google_product_category, custom labels for budget segmentation — see the supporting post:{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-za-ecommerce-srbija-2026" } }} className="underline text-blue-700 font-medium">
          Google Ads for eCommerce in Serbia — Complete Guide
        </Link>. And for broader context on the Shopping launch, Ex-Yu markets, and budgeting, go back to{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="underline text-blue-700 font-medium">
          the core Google Shopping guide
        </Link>.
      </p>

      <hr />

      <h2 id="frequently-asked-questions-about-merchant-center">Frequently asked questions about Merchant Center</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is Merchant Center free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, creating an account and using Merchant Center is completely free. You only pay for Shopping ads through Google Ads (cost-per-click), not for the MC account itself or feed hosting."
                }
              },
              {
                "@type": "Question",
                name: "How long does site verification and claiming take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Verification (HTML tag, GA, or GTM) is usually instant to a few hours. Account review on brand-new markets (such as Serbia will be in November 2026) can take 1-3 weeks — that's why I recommend starting the process at least 60 days before your planned campaign launch."
                }
              },
              {
                "@type": "Question",
                name: "What if I don't have a GTIN barcode for my products?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If you sell your own private label without a GTIN, fill in the brand and MPN (manufacturer part number) attributes instead of GTIN, or apply for a GTIN exemption through Merchant Center. For branded products from well-known manufacturers, GTIN is practically required — without it you risk disapproval or limited reach."
                }
              },
              {
                "@type": "Question",
                name: "Can I use Google Sheets instead of an XML feed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Google Sheets is a valid and commonly used feed delivery method, especially for small and mid-size catalogs without a developer. You build a table with columns matching the required attributes, connect it to Merchant Center, and set up a scheduled fetch so it refreshes automatically."
                }
              },
              {
                "@type": "Question",
                name: "Why is my product disapproved even though it looks correct?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The most common causes: a price mismatch between the site and the feed, a missing GTIN for a branded product, promotional text in the title, or an image with a watermark. Check the Diagnostics section in Merchant Center — that's where Google lists the exact reason for every disapproved product, with a link to the relevant policy."
                }
              },
              {
                "@type": "Question",
                name: "Do I need Merchant Center if I only sell through an Instagram/Facebook shop?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not for Meta Shops — that's a separate catalog through Meta Commerce Manager. Merchant Center is specifically for Google Shopping ads. If you want a presence on both Google search and Meta platforms, you'll need two separate feeds (though many tools can generate both from the same data source)."
                }
              }
            ]
          })
        }}
      />

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Is Merchant Center free?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Yes, creating an account and using Merchant Center is completely free. You only pay for Shopping ads through Google Ads (cost-per-click), not for the MC account itself or feed hosting.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How long does site verification and claiming take?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Verification (HTML tag, GA, or GTM) is usually instant to a few hours. Account review on brand-new markets (such as Serbia will be in November 2026) can take 1-3 weeks — that&apos;s why I recommend starting the process at least 60 days before your planned campaign launch.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What if I don&apos;t have a GTIN barcode for my products?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            If you sell your own private label without a GTIN, fill in the brand and MPN (manufacturer part number) attributes instead of GTIN, or apply for a GTIN exemption through Merchant Center. For branded products from well-known manufacturers, GTIN is practically required.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I use Google Sheets instead of an XML feed?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Yes, Google Sheets is a valid and commonly used feed delivery method, especially for small and mid-size catalogs without a developer. You build a table with columns matching the required attributes, connect it to Merchant Center, and set up a scheduled fetch so it refreshes automatically.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why is my product disapproved even though it looks correct?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            The most common causes: a price mismatch between the site and the feed, a missing GTIN for a branded product, promotional text in the title, or an image with a watermark. Check the Diagnostics section in Merchant Center — that&apos;s where Google lists the exact reason for every disapproved product.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Do I need Merchant Center if I only sell through an Instagram/Facebook shop?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Not for Meta Shops — that&apos;s a separate catalog through Meta Commerce Manager. Merchant Center is specifically for Google Shopping ads. If you want a presence on both platforms, you&apos;ll need two separate feeds.
          </div>
        </details>
      </div>

      <hr />

      {/* CTA block */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Need help with your Merchant Center setup?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          I go through your site, feed, and Merchant Center account and give you a concrete plan before Shopping officially launches in Serbia.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Schedule a free consultation
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Is Coming to Serbia — Complete Guide</p>
          <p className="text-xs text-gray-500 mb-0">Launch date, Ex-Yu markets, 15-step checklist, costs</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Guide — The Basics</p>
          <p className="text-xs text-gray-500 mb-0">Standard Shopping vs Performance Max, feed optimization</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-za-ecommerce-srbija-2026" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads for eCommerce in Serbia</p>
          <p className="text-xs text-gray-500 mb-0">Complete guide for Serbian eCommerce, feed optimization</p>
        </Link>
      </div>
    </>
  );
}
