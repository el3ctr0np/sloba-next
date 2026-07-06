import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function ProductFeedSerbianEcommerceEN() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Quick Summary</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          The product feed is 80% of the work behind Google Shopping — bidding and campaign structure only matter once the feed is clean. This is a complete guide to preparing a feed for the Serbian market, attribute by attribute, while you wait for Merchant Center registration to officially open.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">8</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">mandatory attributes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">80%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">of success depends on the feed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">4</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">feed generation methods</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">150</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">characters, ideal title length</p>
          </div>
        </div>
      </div>

      {/* GMC availability note */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 md:p-5 my-6">
        <p className="font-semibold text-amber-900 mb-1">Note — status as of July 2026</p>
        <p className="text-amber-800 text-base mb-0">
          Google Merchant Center registration for the Serbian market isn&apos;t officially open yet. That doesn&apos;t mean there&apos;s nothing to do — quite the opposite. The feed is a piece of preparation you can and should be doing now, independent of when registration opens. When that day comes, you&apos;ll have a finished, tested feed ready to upload instead of only just starting to think about title formulas and attributes. This guide focuses exclusively on the feed itself — for the MC account, verification, and linking, see the supporting Merchant Center setup post linked below.
        </p>
      </div>

      {/* Featured-snippet definition block */}
      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Quick Answer
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          What is a product feed?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          A <strong>product feed</strong> is a structured file (XML, TXT, or Google Sheets) that contains all the data about your products — name, price, image, availability, and other attributes — in a format Google Merchant Center understands. Google uses the feed to decide when, to whom, and for which search to show your product in <GlossaryLink slug="pmax">Shopping ads</GlossaryLink>. Without a feed, a Shopping campaign has nothing to show — the feed is literally the source of every product you advertise.
        </p>
      </div>

      <p>
        When I run a Shopping audit for a new client, I almost always look at the feed first, not the campaign. The reason is simple — bad bidding can be fixed in a week, but a bad feed is the reason half the catalogue gets no impressions at all, no matter how well you structure the campaign around it. The feed is the foundation; everything else is what you build on top of it.
      </p>
      <p>
        I&apos;ve built Shopping feeds for global accounts — moto parts sold in nearly 40 countries, a UK skincare brand, and a UK mattress manufacturer. Each of those three catalogues had its own quirks (size/colour variants, seasonal products, GTIN complications), but the principle is always the same: a clean, complete, up-to-date feed carries the campaign, not the other way around. This guide brings that experience into the Serbian context — language, RSD pricing, VAT, and the local platforms eCommerce businesses here actually use.
      </p>
      <p>
        This is the third post in the Google Shopping series. If you&apos;re just getting started, read the pillar guide first —{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }} className="underline text-blue-700 font-medium">
          Google Shopping Is Coming to Serbia — Complete Preparation Guide
        </Link>{" "}
        for the broader context (launch date, Ex-Yu markets, costs). For the Merchant Center account and verification, see{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "merchant-center-srbija-setup" } }} className="underline text-blue-700 font-medium">
          Google Merchant Center for Serbia — Complete Setup Guide
        </Link>. Here, I go deep exclusively on the feed itself.
      </p>

      <hr />

      <h2>Why the product feed is 80% of Shopping campaign success</h2>
      <p>
        With Search campaigns, you pick keywords and write ads manually. With Shopping, Google automatically decides when to show which product based on the data you give it through the feed — you don&apos;t control &quot;keywords&quot;, you control the quality and precision of your product data. This is a fundamental difference many eCommerce owners don&apos;t grasp at the start.
      </p>
      <p>
        In practice, that means the feed is simultaneously your catalogue and your targeting mechanism. The title, description, category, and attributes determine which searches a product surfaces for. A bad title means the product shows up for the wrong searches (or doesn&apos;t show up at all), no matter how much budget and bidding attention you put into the campaign.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">From experience</p>
        <p className="text-blue-800 text-base mb-0">
          When a client asks why a particular product is underperforming, the answer is in the feed in most cases — an incomplete title, the wrong category, or a missing attribute Google uses as a matching signal. It&apos;s rarely the bidding. The first thing I check is feed quality, only then the campaign structure.
        </p>
      </div>

      <hr />

      <h2>Feed anatomy — required and recommended attributes</h2>
      <p>
        These 8 attributes are absolutely mandatory. Without any one of them, a product isn&apos;t accepted into the feed and doesn&apos;t enter Shopping ads:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Attribute</th>
              <th className="py-3 px-3 font-heading font-semibold">What it represents</th>
              <th className="py-3 px-3 font-heading font-semibold">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">id</td>
              <td className="py-3 px-3">Unique product identifier (SKU)</td>
              <td className="py-3 px-3">SKU-88213-M-Black</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">title</td>
              <td className="py-3 px-3">Product name — the most important attribute for matching</td>
              <td className="py-3 px-3">Adidas Ultraboost Men&apos;s Sneakers Black Size 43</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">description</td>
              <td className="py-3 px-3">Product description, 500-1000 characters recommended</td>
              <td className="py-3 px-3">Material, features, usage, no promotional copy</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">link</td>
              <td className="py-3 px-3">Direct URL to the product page</td>
              <td className="py-3 px-3">https://yourshop.rs/product/adidas-ultraboost</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">image_link</td>
              <td className="py-3 px-3">URL of the main image, minimum 800x800px</td>
              <td className="py-3 px-3">https://yourshop.rs/img/adidas-ultraboost-main.jpg</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">price</td>
              <td className="py-3 px-3">Price, must match the site exactly, VAT included</td>
              <td className="py-3 px-3">15990.00 RSD</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">availability</td>
              <td className="py-3 px-3">Stock status, real-time sync recommended</td>
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
        Alongside these 8, there&apos;s a group of recommended attributes I&apos;d call &quot;mandatory in practice&quot; — technically Google doesn&apos;t require them for every product, but without them you lose reach and pay a higher CPC:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Recommended #1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">brand</h3>
          <p className="text-base text-gray-600 mb-0">The manufacturer name or your own brand. Google uses brand as a strong matching signal, especially for well-known manufacturers. For your own label, always fill in your brand name instead of leaving it blank.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Recommended #2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">gtin</h3>
          <p className="text-base text-gray-600 mb-0">Global product barcode (EAN/UPC). For branded products from well-known manufacturers, GTIN is practically mandatory — Google increasingly limits the reach of feeds without it. For private label products with no GTIN, use the brand + mpn combination instead.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Recommended #3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">google_product_category</h3>
          <p className="text-base text-gray-600 mb-0">Google&apos;s standardised category taxonomy (e.g. &quot;Apparel &amp; Accessories &gt; Shoes&quot;). A precise category improves matching and enables performance benchmarking by category inside Merchant Center.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Recommended #4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">custom_label_0-4</h3>
          <p className="text-base text-gray-600 mb-0">Five free-form fields you define yourself — margin level, season, bestseller status. They don&apos;t affect matching, but they are key for campaign segmentation and bidding strategy (more detail in the custom labels section below).</p>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          The rule I always repeat: the feed must be 100% identical to the site, at every moment. Price, availability, name — every mismatch is either a disapproval or a bad customer experience waiting to happen.
        </p>
      </div>

      <hr />

      <h2>Title optimisation — the biggest lever you have</h2>
      <p>
        If I had to pick one attribute that most affects feed performance, it&apos;s the <strong>title</strong>. Google uses it as the primary signal for matching against searches, and shoppers see it directly in the ad — the title does double duty: targeting and conversion at the same time.
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">A structure that works: Brand + Product + Attribute + Size/Colour</p>
        <p className="text-base text-yellow-900 mb-0">
          Example: &quot;Nike Air Max 90 Men&apos;s Sneakers White Size 43&quot;. This order follows how people actually search — brand or product type first, then the specific attribute they care about. Avoid opening the title with generic words (&quot;Quality&quot;, &quot;New&quot;) — that space should carry concrete information instead.
        </p>
      </div>

      <p>
        A few principles I apply to every feed I build:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>The most important information goes first</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Google only shows about the first ~70 characters on mobile, the rest gets truncated. Brand and product type must be visible without scrolling or expanding.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Aim for around 150 characters total</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Google allows up to 150 characters for the title. You don&apos;t have to use all of it, but a generic short title (e.g. just &quot;Sneakers&quot;) misses the opportunity to capture more specific, longer-tail searches.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Include size, colour, and model where relevant</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">These are exactly the things shoppers search for specifically (&quot;sneakers size 43 white&quot;). If you have product variants, each variant should have its own title with its specific attribute, not a generic title shared across all variants.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Never use promotional language in the title</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">&quot;CHEAPEST!!!&quot;, all caps, or &quot;-50% today&quot; in the title leads to disapproval. Price and discounts belong in the price/sale_price attributes — the title stays purely descriptive.</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2>Descriptions and images — rules that are often overlooked</h2>
      <p>
        The description doesn&apos;t affect matching as much as the title, but it still plays a role, and it&apos;s easy to neglect when the feed is generated automatically from raw site data.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Descriptions</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Factual, not a sales pitch</h3>
          <p className="text-base text-gray-600 mb-0">Material, dimensions, features, usage — no marketing language like &quot;best on the market&quot;. Google penalises descriptions that read like an ad instead of product data.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Descriptions</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">The first 160-500 characters carry the weight</h3>
          <p className="text-base text-gray-600 mb-0">Although descriptions can run up to 5000 characters, the most important information should sit in the first few sentences — assume the rest won&apos;t be read, by either the algorithm or the shopper.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Images</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">A studio shot is mandatory as the primary image</h3>
          <p className="text-base text-gray-600 mb-0">image_link must be a clean product photo on a neutral/white background, with no watermark, text, or logo overlaid on the photo. Google automatically detects and rejects images that break this rule.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Images</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Lifestyle shots go in additional_image_link</h3>
          <p className="text-base text-gray-600 mb-0">Photos of the product &quot;in use&quot; (on a model, in a setting) are great for conversion, but not as the primary image — use the additional_image_link field for those, while the primary stays a clean studio shot.</p>
        </div>
      </div>

      <hr />

      <h2>Feed for the Serbian language — characters, prices, VAT</h2>
      <p>
        This is where most mistakes happen among local shops, since the tools and documentation for Merchant Center are written primarily for English/Western markets.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Characters</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Cyrillic or Latin — stay consistent</h3>
          <p className="text-base text-gray-600 mb-0">If the site uses Latin script, the feed should be in Latin script too (with diacritics: š, đ, č, ć, ž — not &quot;sh&quot;, &quot;dj&quot;). The file encoding must be UTF-8, otherwise characters break in the ad display.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prices</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">RSD format and decimals</h3>
          <p className="text-base text-gray-600 mb-0">The price format in the feed is number + currency (e.g. &quot;15990.00 RSD&quot;), not &quot;15.990,00 din&quot;. Check that your feed generator isn&apos;t outputting the Serbian decimal format (comma instead of period) — that causes a parsing error.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">VAT</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Price always with VAT included</h3>
          <p className="text-base text-gray-600 mb-0">Just like on the site, the price attribute in the feed should show the final price the customer pays, VAT included. Don&apos;t leave the tax field blank &quot;just in case&quot; — inconsistent handling here is a common cause of mismatch errors.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Categories</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">google_product_category in English</h3>
          <p className="text-base text-gray-600 mb-0">Regardless of the rest of the feed being in Serbian, google_product_category is filled in from Google&apos;s official taxonomy, which is in English (or the numeric category ID) — don&apos;t translate it.</p>
        </div>
      </div>

      <hr />

      <h2>Custom labels — a strategy for bidding segmentation</h2>
      <p>
        The five custom_label fields (custom_label_0 through custom_label_4) are perhaps the most underused part of the feed among smaller shops. They don&apos;t affect whether a product gets shown, but they directly enable more precise bidding across the campaign.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Margin segmentation</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">Tag products by profit margin (e.g. &quot;high-margin&quot;, &quot;low-margin&quot;). This lets you build separate campaigns or ad groups and set a more aggressive bid on products that generate more profit per sale.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Seasonal segmentation</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">For seasonal catalogues (apparel, garden equipment, heaters), tag products by season (&quot;summer-2026&quot;, &quot;winter-2026&quot;). This lets budget automatically follow seasonally relevant products without manually reshuffling campaigns.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Bestseller / performance tier</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">Tag top products by historical sales (&quot;bestseller&quot;, &quot;new-product&quot;, &quot;slow-mover&quot;). This is the foundation of a tiered Shopping structure — bestsellers get their own campaign with more aggressive bidding, new products get their own with a lower bid until enough data accumulates.</p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">From experience</p>
        <p className="text-blue-800 text-base mb-0">
          Custom labels are a tool I rarely see filled in with new clients, and they&apos;re one of the cheapest ways to improve ROAS without any extra campaign work. Margin-level segmentation is the first thing I introduce as soon as I take over a new eCommerce account — even before I touch the bidding strategy.
        </p>
      </div>

      <hr />

      <h2>Feed generation methods by platform</h2>
      <p>
        How you generate and maintain the feed depends mostly on which platform your site runs on and how many products are in your catalogue.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Method #1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Shopify apps</h3>
          <p className="text-base text-gray-600 mb-0">The Google &amp; YouTube app (official, free) automatically generates a feed from the Shopify catalogue and syncs it in real time. For more complex catalogues with variants, third-party apps (e.g. Simprosys) offer additional control over title formulas.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Method #2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">WooCommerce plugins</h3>
          <p className="text-base text-gray-600 mb-0">Google Listings &amp; Ads (the official WooCommerce/WordPress plugin) or YITH Google Shopping generate the feed directly from the products on the site. The most common choice for Serbian eCommerce shops on WordPress — sync is automatic, maintenance is minimal.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Method #3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Custom XML for local platforms</h3>
          <p className="text-base text-gray-600 mb-0">Many Serbian shops run on a custom CMS or a local platform (e.g. an in-house system, or a local provider) without a ready-made Google feed plugin. The solution is to have a developer generate an XML file directly from the product database according to Google&apos;s specification, with a scheduled cron job for regular refreshes.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Method #4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Google Sheets for small catalogues</h3>
          <p className="text-base text-gray-600 mb-0">For catalogues under 50-100 products, Google Sheets is a perfectly legitimate option — a manually or semi-automatically filled sheet with columns matching the attributes, linked to Merchant Center via a scheduled fetch (e.g. daily).</p>
        </div>
      </div>

      <p>
        For larger catalogues (1000+ SKUs) with frequent price and stock changes, the Content API for Shopping gives the highest precision and fastest real-time sync, but it requires a developer. For most Serbian eCommerce businesses, a plugin solution (Shopify or WooCommerce) is still the best balance of implementation speed and reliability.
      </p>

      <hr />

      <h2>Common feed errors and how to diagnose them</h2>
      <p>
        These are the errors that show up in almost every feed audit I&apos;ve run, including accounts with global catalogues where variants number in the thousands.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Error</p>
          <p className="font-semibold mb-2">Generic or duplicated title across variants</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Fix:</strong> If you have 10 variants of the same product (different colours/sizes) with an identical title, Google can&apos;t tell which variant matches which search. Every variant needs a title that includes its specific colour/size — automate this through your feed template, not manually.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Error</p>
          <p className="font-semibold mb-2">Feed not updated frequently enough</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Fix:</strong> Google recommends updating the full feed at least daily, and availability ideally in real time. A product advertised as &quot;in stock&quot; that&apos;s actually sold out leads to a poor customer experience and an account-level penalty, not just an issue with one product. Check Diagnostics for the last successful fetch.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Error</p>
          <p className="font-semibold mb-2">Price mismatch between the site and the feed</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Fix:</strong> Google periodically crawls your site and compares the price against the feed. A sale on the site that isn&apos;t reflected in the feed (or vice versa) leads to disapproval. If you update prices manually in two places, introduce a synchronised update process or switch to automatic sync.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Error</p>
          <p className="font-semibold mb-2">Missing or incorrect google_product_category</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Fix:</strong> An empty or incorrectly assigned category reduces matching quality and prevents benchmark reports in Merchant Center. Go through Google&apos;s category taxonomy once during feed setup and map it carefully, not automatically to the nearest option.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Error</p>
          <p className="font-semibold mb-2">Low share of products with a GTIN</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Fix:</strong> For branded products, a missing GTIN directly limits reach. Check the Diagnostics section for &quot;missing GTIN&quot; warnings and fill them in from supplier documentation or the barcode on the packaging — this is one of the fastest-paying fixes in a feed audit.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Error</p>
          <p className="font-semibold mb-2">Broken characters (encoding)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Fix:</strong> If š, č, ć, ž show up as odd symbols in the feed, the file wasn&apos;t saved in UTF-8 encoding. Check the export settings in your platform or feed generator plugin — this is a common but easily fixed error specific to the Serbian language.
            </p>
          </div>
        </div>
      </div>

      <p>
        For diagnostics, the first stop is always the Diagnostics section in Merchant Center (Products → Diagnostics) — Google lists the exact reason for every disapproved or flagged product there, with a link to the relevant policy. Don&apos;t guess the cause, read the message.
      </p>

      <hr />

      <h2>Feed optimisation as an ongoing process</h2>
      <p>
        The feed isn&apos;t a &quot;set it and forget it&quot; project. The best results come from treating it as a living part of the campaign that gets tested and improved continuously, similar to how you test ads in Search campaigns.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <h3 className="mt-0 mb-4 font-heading font-bold">What continuous optimisation looks like in practice</h3>
        <ol className="mb-0">
          <li><strong>Supplemental feeds</strong> — an additional feed that layers new data on top of the primary feed (e.g. custom labels or updated categories) without altering the original source file. Useful when you can&apos;t directly edit a primary feed generated by the platform.</li>
          <li><strong>A/B testing title formulas</strong> — test whether a title with &quot;Brand + Product + Colour&quot; or &quot;Product + Brand + Size&quot; delivers better CTR for your product category. Small changes in attribute order can meaningfully shift impressions.</li>
          <li><strong>Monthly Diagnostics review</strong> — even when the feed is stable, new products or site changes can introduce new errors. A regular monthly review stops the problem from piling up unnoticed.</li>
          <li><strong>Tracking performance by custom label segment</strong> — once you introduce margin/season/bestseller labels, track performance by segment and adjust bidding based on that data, not on the catalogue averaged as a whole.</li>
        </ol>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-base mb-0">
          Feed optimisation delivers the most value once you have enough per-product performance data. In the first few weeks after launch, focus on getting the feed technically clean (95%+ approval rate) — title A/B tests and custom label segmentation come once conversion data has accumulated.
        </p>
      </div>

      <hr />

      <h2>Conclusion</h2>
      <p>
        The product feed isn&apos;t an administrative hurdle on the way to a Shopping campaign — it&apos;s the biggest lever you have for performance. Title structure, complete attributes, GTIN, and custom label segmentation together determine whether your catalogue gets maximum reach at a reasonable CPC, or fights against its own data gaps.
      </p>
      <p>
        For the Serbian market, the advantage is that you can start feed preparation right now — independent of when Merchant Center registration officially opens. When that moment comes, instead of only starting to think about title formulas, you&apos;ll have a finished feed ready to upload.
      </p>

      {/* CTA block */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Need help with your product feed?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          I&apos;ll go through your catalogue, feed structure, and attributes and give you a concrete plan before Google Shopping officially launches in Serbia.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Book a free consultation
        </Link>
      </div>

      <hr />

      <h2>FAQ — common questions about the product feed</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Which feed format is best — XML, TXT, or Google Sheets?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There's no universally 'best' format — it depends on catalogue size and platform. XML is the standard for plugins and Content API integrations. Google Sheets is great for small catalogues (under 50-100 products) without a developer. TXT/CSV is used less often manually, but some custom systems generate it automatically. More important than the format is that it's updated regularly and accurately."
                }
              },
              {
                "@type": "Question",
                name: "How often should I update the product feed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Google recommends updating the entire feed at least once a day, and for availability (stock status) ideally in real time or several times a day. If your feed generator supports automatic scheduled fetching, set it to a daily cycle as an absolute minimum."
                }
              },
              {
                "@type": "Question",
                name: "Does the product title affect cost per click (CPC)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Indirectly, yes. A precise, well-structured title improves matching relevance with searches, which affects how much quality traffic you get and how efficiently Google spends the budget. A bad title doesn't directly raise CPC, but it reduces the chance the product shows up for the right searches at all, which effectively raises the cost per conversion."
                }
              },
              {
                "@type": "Question",
                name: "What are custom labels and are they mandatory?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Custom labels (custom_label_0 through custom_label_4) are five free-form fields you define yourself for product segmentation — by margin, season, bestseller status, and similar. They aren't mandatory and don't affect matching, but they're a key tool for more precise bidding across the campaign when you want a different bid strategy for different catalogue segments."
                }
              },
              {
                "@type": "Question",
                name: "How do I fix disapproved products in the feed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The first step is Merchant Center Diagnostics (Products → Diagnostics) — Google lists the exact reason for the disapproval for every product there, with a link to the relevant policy. The most common causes are price mismatches, a missing GTIN, promotional text in the title, or watermarked images. Fix the cause, wait for the next feed fetch, and the product gets automatically re-checked."
                }
              },
              {
                "@type": "Question",
                name: "Can I use the same feed for Google Shopping and Meta Shops?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not directly — Google Merchant Center and Meta Commerce Manager are separate platforms with their own attribute specifications, although they overlap quite a bit. Many feed tools and platforms (Shopify apps, WooCommerce plugins) can generate both feeds from the same source data on the site, but each feed is uploaded to its own platform separately."
                }
              }
            ]
          })
        }}
      />

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Which feed format is best — XML, TXT, or Google Sheets?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            There&apos;s no universally &quot;best&quot; format — it depends on catalogue size and platform. XML is the standard for plugins and Content API integrations. Google Sheets is great for small catalogues (under 50-100 products) without a developer. More important than the format is that it&apos;s updated regularly and accurately.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How often should I update the product feed?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Google recommends updating the entire feed at least once a day, and for availability ideally in real time or several times a day. Set an automatic scheduled fetch to a daily cycle as an absolute minimum.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does the product title affect cost per click (CPC)?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Indirectly, yes. A precise title improves matching relevance, which affects traffic quality. A bad title reduces the chance the product shows up for the right searches at all, which effectively raises the cost per conversion.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What are custom labels and are they mandatory?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Custom labels (custom_label_0 through custom_label_4) are five free-form fields for product segmentation — by margin, season, bestseller status. They aren&apos;t mandatory, but they&apos;re a key tool for more precise bidding by catalogue segment.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How do I fix disapproved products in the feed?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            The first step is Merchant Center Diagnostics (Products → Diagnostics) — Google lists the exact reason for the disapproval for every product there. The most common causes: price mismatches, a missing GTIN, promotional text in the title, or watermarked images.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I use the same feed for Google Shopping and Meta Shops?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Not directly — these are separate platforms with their own specifications, although they overlap quite a bit. Many feed tools can generate both feeds from the same source data on the site, but each is uploaded separately.
          </div>
        </details>
      </div>

      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Is Coming to Serbia — Complete Guide</p>
          <p className="text-xs text-gray-500 mb-0">Launch date, Ex-Yu markets, 15-step checklist, costs</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "merchant-center-srbija-setup" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Merchant Center for Serbia — Setup Guide</p>
          <p className="text-xs text-gray-500 mb-0">Account creation, verification, linking to Google Ads</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-za-ecommerce-srbija-2026" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads for eCommerce in Serbia</p>
          <p className="text-xs text-gray-500 mb-0">Complete guide for Serbian eCommerce, benchmarks and tactics</p>
        </Link>
      </div>
    </>
  );
}
