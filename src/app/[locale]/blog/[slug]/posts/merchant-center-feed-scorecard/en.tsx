import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function MerchantCenterFeedScorecardEN() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">What&apos;s in this post</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          I scored a real product feed against 34 <GlossaryLink slug="merchant-center">Merchant Center</GlossaryLink> attributes before touching a single campaign. It came back at 33 out of 100 - and the gap wasn&apos;t in the fields Google calls required. This is the scoring method, the exact numbers, and the five fixes I&apos;d run first on any account.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">33/100</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">feed score, simple average across all attributes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">34</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">attributes assessed, required through advantage</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">8</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">attributes at 95%+ coverage</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">21</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">attributes below 30% coverage</p>
          </div>
        </div>
      </div>

      <p>
        The last feed audit I ran started before anyone opened the Google Ads interface. A skincare catalogue of just under 1,000 products, running for years, campaigns rebuilt more than once on top of it - and nobody had gone back to look at the feed itself since the day it was first connected. That&apos;s the normal case, not the exception. Someone sets the feed up when the shop launches, Merchant Center stops throwing errors, and from that point on it&apos;s treated as done.
      </p>
      <p>
        It isn&apos;t done. A feed that clears Google&apos;s validation checks and a feed that&apos;s actually working for <GlossaryLink slug="pmax">Performance Max</GlossaryLink> and Shopping are two different things, and the gap between them doesn&apos;t show up as an error anywhere. It shows up as impressions you never got a shot at, because an attribute Google uses for matching or eligibility was sitting empty.
      </p>
      <p>
        So I built a scorecard: 34 attributes, checked one by one across every product in the catalogue, scored as a coverage percentage and averaged. The number that came back was 33 out of 100. What follows is the method, the field-by-field breakdown, and what I&apos;d fix first if this were your feed.
      </p>

      {/* TOC nav */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Contents</p>
        <ul className="list-none pl-0 mb-0 space-y-0">
          <li><a href="#scoring" className="block py-1 text-base text-gray-700 hover:text-primary underline">How the score works</a></li>
          <li><a href="#layers" className="block py-1 text-base text-gray-700 hover:text-primary underline">The three layers</a></li>
          <li><a href="#required" className="block py-1 text-base text-gray-700 hover:text-primary underline">Layer 1 - required fields</a></li>
          <li><a href="#multipliers" className="block py-1 text-base text-gray-700 hover:text-primary underline">Layer 2 - multipliers, field by field</a></li>
          <li><a href="#advantage" className="block py-1 text-base text-gray-700 hover:text-primary underline">Layer 3 - the zeros nobody fills in</a></li>
          <li><a href="#skincare" className="block py-1 text-base text-gray-700 hover:text-primary underline">What matters specifically in skincare</a></li>
          <li><a href="#score-your-own" className="block py-1 text-base text-gray-700 hover:text-primary underline">How to score your own feed</a></li>
          <li><a href="#five" className="block py-1 text-base text-gray-700 hover:text-primary underline">The five that move first</a></li>
          <li><a href="#skip" className="block py-1 text-base text-gray-700 hover:text-primary underline">What not to bother with</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
          <li><a href="#conclusion" className="block py-1 text-base text-gray-700 hover:text-primary underline">Conclusion</a></li>
        </ul>
      </nav>

      <hr />

      <h2 id="scoring">How the score works</h2>
      <p>
        The method is deliberately plain: for each of the 34 attributes, count how many products in the catalogue have that field filled, divide by the total product count, and you get a coverage percentage. Average the 34 percentages and you get the feed score. No weighting, no opinion about which field matters more - just presence or absence, measured the same way for every attribute.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-01-score-en.png" alt="Feed score of 33 out of 100 shown with three stat cards: 34 attributes assessed, 8 attributes at 95 percent or higher coverage, 21 attributes below 30 percent coverage" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">33/100 across 34 attributes. Eight clear the bar; twenty-one barely register.</figcaption>
      </figure>
      <p>
        That flatness is the point. It would be easy to weight <code>title</code> higher than <code>certification</code> and produce a friendlier number, but a weighted score hides exactly what I want a client to see: how many separate signals Google is missing, not how bad the one or two most visible ones look. Coverage, not opinion, is what makes the score reproducible - anyone can run the same count on the same export and get the same 33.
      </p>
      <p>
        A score in isolation doesn&apos;t mean much either way. What matters is the shape underneath it - which is the next section.
      </p>

      <hr />

      <h2 id="layers">The three layers</h2>
      <p>
        The 34 attributes split cleanly into three layers, and almost every feed I&apos;ve looked at follows the same pattern across them.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-02-layers-en.png" alt="Three stacked bands representing feed attribute layers: required fields in green near full coverage, multiplier fields in amber with partial or inconsistent coverage, advantage fields in red at zero coverage" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Required is close to full. Multipliers are patchy. Advantage is empty.</figcaption>
      </figure>
      <p>
        <strong>Required</strong> is the layer Google won&apos;t let you skip - id, title, price, availability, and the handful of fields that get a product rejected outright if they&apos;re missing. This is the layer most shop platforms populate automatically from the product database, which is why it&apos;s usually clean without anyone doing a thing.
      </p>
      <p>
        <strong>Multipliers</strong> is the layer that changes how well an already-approved product performs - identifiers, category, image count, variant grouping, sale price, custom labels. Everything here changes matching, eligibility for certain formats, and how a product gets grouped for campaign structure.
      </p>
      <p>
        <strong>Advantage</strong> is the layer almost nobody fills in, because none of it is required and most of it doesn&apos;t even surface as a validation warning. Bundle flags, unit pricing, structured highlights, cost data for margin-aware bidding. In the catalogue I audited, every attribute in this layer sat at 0%.
      </p>
      <p>
        The pattern across the three layers explains the 33 far better than any single field does: a feed can look completely fine in the Merchant Center diagnostics tab - no disapprovals, no red banners - and still be operating on a fraction of the signal Google is able to use.
      </p>

      <hr />

      <h2 id="required">Layer 1 - required fields</h2>
      <p>
        These eight fields cleared 95%+ coverage in the catalogue I audited, and that&apos;s typical - platforms populate them from core product data, and Google rejects the product outright if most of them are missing, so there&apos;s a hard forcing function behind the number.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-03-required-en.png" alt="Table of eight required Merchant Center attributes with their coverage: id, title, link and availability at 100 percent; description, image_link, price and brand at 99 percent. The image_link row notes images are warned below 500x500px with enforcement from 31 January 2027. The brand row notes six brands existed in more than one casing." width={1600} height={1100} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Eight rows, all green or near it, and the feed still scored 33 out of 100.</figcaption>
      </figure>
      <div className="overflow-x-auto my-6">
        <table className="min-w-[700px] w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Field</th>
              <th className="py-3 px-3 font-heading font-semibold">Coverage</th>
              <th className="py-3 px-3 font-heading font-semibold">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200"><td className="py-3 px-3 font-mono text-xs">id</td><td className="py-3 px-3">100%</td><td className="py-3 px-3">The stable SKU key everything else joins against</td></tr>
            <tr className="border-b border-gray-200 bg-gray-50/50"><td className="py-3 px-3 font-mono text-xs">title</td><td className="py-3 px-3">100%</td><td className="py-3 px-3">Present everywhere - the problem here is length, not presence, see below</td></tr>
            <tr className="border-b border-gray-200"><td className="py-3 px-3 font-mono text-xs">description</td><td className="py-3 px-3">99%</td><td className="py-3 px-3">Filled almost everywhere; quality wasn&apos;t part of this scorecard</td></tr>
            <tr className="border-b border-gray-200 bg-gray-50/50"><td className="py-3 px-3 font-mono text-xs">link</td><td className="py-3 px-3">100%</td><td className="py-3 px-3">Every product resolves to a live product page</td></tr>
            <tr className="border-b border-gray-200"><td className="py-3 px-3 font-mono text-xs">image_link</td><td className="py-3 px-3">99%</td><td className="py-3 px-3">The dozen or so products without one are worth finding by hand, not just noting. Google began warning on images below 500x500px on 14 April 2026 and starts enforcing the rule on 31 January 2027, which is worth checking now rather than the week it lands.</td></tr>
            <tr className="border-b border-gray-200 bg-gray-50/50"><td className="py-3 px-3 font-mono text-xs">availability</td><td className="py-3 px-3">100%</td><td className="py-3 px-3">In stock / out of stock is syncing correctly across the catalogue</td></tr>
            <tr className="border-b border-gray-200"><td className="py-3 px-3 font-mono text-xs">price</td><td className="py-3 px-3">99%</td><td className="py-3 px-3">Matches the on-site price for nearly the whole catalogue</td></tr>
            <tr className="border-b border-gray-200 bg-gray-50/50"><td className="py-3 px-3 font-mono text-xs">brand</td><td className="py-3 px-3">99%</td><td className="py-3 px-3">Present, though see the casing issue in the fix list below</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        If your feed looks anything like this layer, don&apos;t spend time here. This is not where the 33 comes from, and there is very little upside left to extract from a field that&apos;s already at 99-100%. The rest of the post is where the actual work is.
      </p>

      <hr />

      <h2 id="multipliers">Layer 2 - multipliers, field by field</h2>
      <p>
        This is the layer that separates a feed that technically works from one that&apos;s actually competing. Every field below changes how well an approved product runs, not whether it runs at all.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">Title</h3>
      <p>
        Titles were filled on 100% of products, but filled and useful aren&apos;t the same measurement. Average title length in the catalogue was <strong>51 characters</strong> against the 150 Google allows, and 89% of products sat under 70 characters. Only 77 of 974 titles mentioned a size at all - no <code>ml</code>, no <code>g</code>, nothing a shopper searching &quot;serum 30ml&quot; could match against.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-04-title-length-en.png" alt="A 150 character title bar with only the first 51 characters filled and the remaining space marked as unused" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">51 of 150 characters used on average. Two-thirds of the title space goes unclaimed.</figcaption>
      </figure>
      <p>
        Every character left blank is a match opportunity Google can&apos;t use. The formula I default to for ecommerce titles, skincare or otherwise:
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6 text-center">
        <code className="text-base md:text-lg font-heading font-semibold">{"Brand + Product name + Key variant/attribute + Size/volume + Format"}</code>
      </div>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-05-title-formula-en.png" alt="Title formula diagram showing brand, product name, key attribute, size and format mapped against a short title example and a full title example" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">The same product, before and after the formula is applied.</figcaption>
      </figure>
      <p>
        Take a made-up but representative example. <strong>Before:</strong> &quot;Hydrating Serum&quot; - 15 characters, no brand, no active, no size, no format. <strong>After:</strong> &quot;Brand 1 Hydrating Serum Hyaluronic Acid 50 ml Pump Bottle&quot; - 57 characters, every slot in the formula filled, and still a long way short of the 150-character ceiling. The second version can match a search for the brand, the ingredient, or the size. The first one only matches the product type.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">gtin, mpn, identifier_exists</h3>
      <p>
        <code>gtin</code> covered 80% of the catalogue - 193 products had none. <code>mpn</code> covered 1%. <code>identifier_exists</code> covered 0%, meaning nobody had explicitly told Google &quot;yes, I checked, this product genuinely has no manufacturer identifiers.&quot; Leaving that flag unset is not the same as setting it to false - unset, Google is left to infer the product&apos;s identifier status on its own, which is a weaker signal for the unique-product matching that identifiers exist to support.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-06-identifiers-en.png" alt="Coverage bars for three identifier fields: gtin at 80 percent in amber, mpn at 1 percent in red, identifier_exists at 0 percent in red" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">193 products with no GTIN, and no explicit identifier_exists flag anywhere in the catalogue.</figcaption>
      </figure>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">product_type</h3>
      <p>
        <code>product_type</code> covered 1% of the catalogue. This is your own taxonomy - free text, no Google-defined values - and it&apos;s what campaign structure and listing groups in Performance Max are usually built on. Without it, there is no category-based way to split the feed into campaigns, priorities, or bidding tiers beyond whatever you can pull from <code>google_product_category</code> alone, which is a shared, generic taxonomy rather than one built around how you actually sell.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">google_product_category</h3>
      <p>
        This one covered 80%, which looks fine as a single number and hides the real problem. Across all 974 products: 436 used numeric taxonomy IDs, 342 used text paths (&quot;Health &amp; Beauty &gt; Personal Care &gt; Cosmetics&quot;), and 196 had nothing set at all.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-07-category-split-en.png" alt="Split of google_product_category values: 436 products using numeric taxonomy IDs, 342 using text category paths, 196 left empty" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Two formats, mixed within the same feed, plus a fifth of the catalogue with nothing set.</figcaption>
      </figure>
      <p>
        Mixing formats inside one feed doesn&apos;t break validation - Google accepts both - but it does mean the categorisation signal isn&apos;t consistent from one product to the next, and for the empty fifth, Google&apos;s own classifier is guessing with no input from you at all. Pick one format, numeric IDs are the more stable option, and apply it across the whole catalogue.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">item_group_id</h3>
      <p>
        Coverage sat at 50%. This field is what tells Google &quot;these are the same product in different sizes/shades/scents,&quot; and without it on the other half of the catalogue, variants get treated as unrelated products, so performance data and learnings fragment across near-identical SKUs instead of accumulating on one listing.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">additional_image_link</h3>
      <p>
        70% coverage. Google allows up to ten additional images per product through this field, and every one beyond the primary <code>image_link</code> is a chance to show texture, packaging, or an in-use shot before the click - all things that matter more in skincare than in categories where the product is visually self-explanatory.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">sale_price</h3>
      <p>
        9% coverage - and this is the field that makes promotions functionally invisible to Google Ads. If a product is discounted on-site but <code>sale_price</code> isn&apos;t set in the feed, Shopping and Performance Max keep showing the regular price with no strikethrough, no promotion eligibility, and no signal that anything changed. The discount exists on the landing page and nowhere else.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">custom_label_0 through custom_label_4</h3>
      <p>
        30% average coverage across the five label slots. These are free-text fields with no fixed meaning - you decide what goes in them - and they&apos;re the standard way to segment a Shopping or Performance Max campaign by margin tier, bestseller status, or season without touching the product taxonomy at all. Left mostly empty, campaign structure has to fall back on category and price alone.
      </p>

      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-08-multipliers-en.png" alt="Coverage bars for the eight-field multiplier layer sorted from lowest to highest: product_type and mpn at 1 percent, sale_price at 9 percent, custom_label at 30 percent, item_group_id at 50 percent, additional_image_link at 70 percent, gtin and google_product_category at 80 percent" width={1600} height={1000} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">The whole multiplier layer, sorted ascending. Nothing here blocks approval - everything here changes performance.</figcaption>
      </figure>

      <hr />

      <h2 id="advantage">Layer 3 - the zeros nobody fills in</h2>
      <p>
        Seventeen attributes in this catalogue sat at exactly 0%: <code>product_highlight</code>, <code>product_detail</code>, <code>short_title</code>, <code>video_link</code>, <code>color</code>, <code>size</code>, <code>material</code>, <code>age_group</code>, <code>gender</code>, <code>unit_pricing_measure</code>, <code>multipack</code>, <code>is_bundle</code>, <code>condition</code>, <code>shipping_weight</code>, <code>cost_of_goods_sold</code>, <code>certification</code>, <code>excluded_destination</code>. None of them is required for this catalogue&apos;s category, and none of them was producing a warning. That&apos;s exactly why this layer is worth the most attention - it&apos;s the one competitors are also skipping, which makes it the cheapest place to open a gap.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-09-zero-fields-en.png" alt="Five zero-coverage attributes listed with what each one does: product_highlight, product_detail, unit_pricing_measure, is_bundle, cost_of_goods_sold" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Five of the seventeen zero-coverage fields, and what each one is for.</figcaption>
      </figure>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">product_highlight and product_detail</h3>
      <p>
        These put structured selling points directly into the ad unit - bullet-style callouts like &quot;fragrance-free,&quot; &quot;non-comedogenic,&quot; &quot;dermatologist tested&quot; - without competing for space inside the title or description. In a catalogue where the average title only has 51 of 150 characters used, this is free space that isn&apos;t even competing with the title problem above.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">unit_pricing_measure</h3>
      <p>
        Skincare is a category where shoppers routinely compare price per millilitre or per gram across brands and sizes, and without this field Google can only show the sticker price - which makes the smaller, cheaper-looking jar appear like the better deal even when it costs more per unit of product.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-10-unit-price-en.png" alt="Two product cards side by side showing that the item with the lower shelf price is not actually cheaper once compared per 100ml" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Cheaper on the shelf isn&apos;t cheaper per 100ml - without unit_pricing_measure, Google can only show the first number.</figcaption>
      </figure>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">is_bundle and multipack</h3>
      <p>
        This is the finding I&apos;d flag first to any skincare or beauty account. Without <code>is_bundle</code> and <code>multipack</code> set, price-competitiveness benchmarks treat the set as a single item, so a three-product set benchmarks badly against its own single-product components - it&apos;s three products, not one, and Google just wasn&apos;t told that.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-11-bundle-en.png" alt="A three-product set compared against a single product listing with the price comparison crossed out to show it is invalid without a bundle flag" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Without is_bundle, a three-product set and a single product get compared as if they were the same thing.</figcaption>
      </figure>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">cost_of_goods_sold</h3>
      <p>
        <code>cost_of_goods_sold</code> is what makes gross-profit reporting possible inside Merchant Center, and it is the input you need before you can start sending profit rather than revenue as your conversion value - the difference between measuring <GlossaryLink slug="roas">ROAS</GlossaryLink> and being able to see <GlossaryLink slug="poas">POAS</GlossaryLink> against <GlossaryLink slug="cogs">margin</GlossaryLink> at all. At 0% coverage, every bidding decision in this account is optimising for revenue with no visibility into which of those products actually make money.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-3">short_title and video_link</h3>
      <p>
        <code>short_title</code> is a condensed version of the title used on smaller ad surfaces where the full 150 characters won&apos;t display - leaving it empty means Google truncates the full title itself, often mid-word. <code>video_link</code> is newer: Google opened up serving and policy validation for it from 30 June 2026, and at zero coverage this catalogue isn&apos;t eligible for whatever video-enabled Shopping placements roll out around that attribute.
      </p>

      <hr />

      <h2 id="skincare">What matters specifically in skincare</h2>
      <p>
        Not every field in the advantage layer carries equal weight for every category. Ranked for skincare and adjacent beauty catalogues, in the order I&apos;d actually work through them:
      </p>
      <ol>
        <li className="mb-3"><strong>Titles with size and concern.</strong> Skincare search queries are attribute-heavy - &quot;hyaluronic serum oily skin 30ml&quot; is a completely normal query, and title is the single biggest surface Google matches it against. Nothing else on this list compensates for a title that doesn&apos;t carry these words.</li>
        <li className="mb-3"><strong>is_bundle and multipack.</strong> Skincare sells heavily in sets and routines - cleanser plus serum plus moisturiser bundles are common. The pricing-comparison distortion described above hits this category harder than most, because bundling is core to how the catalogue is merchandised, not an edge case.</li>
        <li className="mb-3"><strong>unit_pricing_measure.</strong> Per-ml and per-g comparison shopping is routine behaviour in this category specifically - skincare buyers are used to checking cost-per-unit across brands before they buy.</li>
        <li className="mb-3"><strong>Clean product_type and google_product_category.</strong> Campaign structure by skin concern (acne, anti-aging, sensitive, hydration) depends on a taxonomy that&apos;s actually usable, and that only happens once these two fields are consistent.</li>
        <li className="mb-3"><strong>color.</strong> Irrelevant for skincare proper, but wherever the catalogue carries makeup with shades, colour is a real variant attribute and a shopper filter, so fill it there and skip it everywhere else.</li>
        <li className="mb-3"><strong>certification and material.</strong> Lowest on this list - only worth the effort if the catalogue is actually making organic, cruelty-free, or similar claims on-site. Filling it in without a claim to back it up doesn&apos;t move anything.</li>
      </ol>

      <hr />

      <h2 id="score-your-own">How to score your own feed</h2>
      <p>
        You don&apos;t need anything beyond a spreadsheet to run this yourself. The procedure I used:
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Pull the feed.</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">In <GlossaryLink slug="merchant-center">Merchant Center</GlossaryLink>: Products → Feeds → open your primary feed → download the current file. If you manage the feed through a third-party tool, export directly from there instead - it&apos;s the same underlying attributes either way.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Open it as a spreadsheet.</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">One row per product, one column per attribute. If the export is XML rather than a flat file, most spreadsheet tools can still import it as a table - or convert it first.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Count filled cells per column.</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">For each attribute column, count non-blank cells with <code>COUNTA</code>, divide by total product rows. That&apos;s your coverage percentage for that field.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Average the percentages.</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Sum every column&apos;s coverage and divide by the number of attributes you checked. That single number is your feed score - use the same 34 attributes listed in this post if you want a directly comparable figure.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Sort ascending.</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Sort the attribute list by coverage, lowest first. The fields at the bottom of that sort are your worklist - and if a required field shows up anywhere near the bottom, that jumps to the top regardless of its position.</p>
            </div>
          </div>
        </div>
      </div>
      <p>
        About half an hour of spreadsheet work produces the same diagnostic this whole post is built around. You don&apos;t need a tool for this - you need the willingness to actually open the export and count.
      </p>

      <hr />

      <h2 id="five">The five that move first</h2>
      <p>
        Not every gap is worth closing in the same week. These five carry the most weight relative to the effort, in the order I&apos;d run them:
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-12-five-steps-en.png" alt="Five numbered fixes that move first: rewrite titles to the formula, normalise brand casing, populate product_type, clean google_product_category, add bundle signals" width={1600} height={1000} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Five fixes, in order, each with a concrete action attached.</figcaption>
      </figure>
      <ol>
        <li className="mb-3"><strong>Titles.</strong> Rewrite against the formula above - brand, product name, key attribute, size, format - and confirm every title that has a size actually states it in <code>ml</code> or <code>g</code>. This alone touches 100% of the catalogue and costs nothing beyond writing time.</li>
        <li className="mb-3"><strong>Brand casing.</strong> Six brands in this catalogue appeared in more than one casing variant, which splits reporting by brand - the same brand shows up as several rows in your own reports. Pick one casing per brand and apply it everywhere - a find-and-replace pass in the source product database, not just the feed.</li>
        <li className="mb-3"><strong>product_type.</strong> Build your own taxonomy - by skin concern, by routine step, whatever matches how you actually sell - and populate it across the catalogue. This is the field that lets you structure campaigns and listing groups around your own logic instead of Google&apos;s generic category tree.</li>
        <li className="mb-3"><strong>google_product_category.</strong> Pick one format - numeric IDs are the more stable choice - and apply it consistently, including to the fifth of the catalogue that currently has nothing.</li>
        <li className="mb-3"><strong>Bundle signals.</strong> Set <code>is_bundle</code> to true on every multi-product listing and populate <code>multipack</code> wherever a set is genuinely identical units. This is the fix that stops a set&apos;s price-competitiveness benchmark from being computed against its own single-product components as though they were the same listing.</li>
      </ol>

      <hr />

      <h2 id="skip">What not to bother with</h2>
      <p>
        Merchant Center diagnostics surface warnings for fields that don&apos;t apply to every category, and skincare has a specific set of them worth ignoring rather than chasing:
      </p>
      <ul>
        <li className="mb-2"><strong>material</strong> - meaningful for furniture or apparel, rarely meaningful for a jar of cream. Skip unless the material itself is a genuine selling point (glass packaging, refillable containers).</li>
        <li className="mb-2"><strong>certification</strong> - only worth filling where there&apos;s an actual certification being claimed on-site. Don&apos;t fill it speculatively.</li>
        <li className="mb-2"><strong>energy labels and related appliance attributes</strong> - not applicable to skincare at all; if Merchant Center is flagging these, it&apos;s a category-mapping issue, not a content gap.</li>
        <li className="mb-2"><strong>shipping_weight</strong> - only matters where shipping cost is calculated by weight. If your rates are flat regardless of order weight, this field isn&apos;t doing anything for you.</li>
      </ul>
      <p>
        Chasing warnings on fields that don&apos;t change anything for your category is how a feed audit turns into busywork. Match the fix to the category before you match it to the warning.
      </p>

      <hr />

      <h2 id="faq">Frequently asked questions</h2>
      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How do I score my own feed?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Download your feed from Merchant Center → Products → Feeds, open it in a spreadsheet, count filled cells per column with <code>COUNTA</code> divided by total rows, then average the resulting percentages across every attribute you check. The full step-by-step is in the &quot;How to score your own feed&quot; section above.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How many characters can a Google Shopping title be?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            150 characters. In the catalogue I audited the average title used only 51 of those, and 89% of titles sat under 70 characters - meaning most of the available match space simply wasn&apos;t claimed.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What is a GTIN, and do I need one?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            A GTIN (Global Trade Item Number) is the barcode-level identifier - UPC, EAN, or ISBN depending on the market - that uniquely identifies a manufactured product. If your product genuinely has one, submit it; it strengthens Google&apos;s matching and is required for many branded products to be fully eligible. If it genuinely doesn&apos;t have one, set <code>identifier_exists</code> to false rather than leaving both fields blank.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why is my bundle being compared to a single product?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Because <code>is_bundle</code> isn&apos;t set to true on the listing. Without it, the price-competitiveness benchmark treats the item as a single product, so it gets compared against single-item listings and can come out looking overpriced. Set <code>is_bundle</code> and, where relevant, <code>multipack</code>, on every set.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Which feed fields are actually required?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            The core set is <code>id</code>, <code>title</code>, <code>description</code>, <code>link</code>, <code>image_link</code>, <code>availability</code>, <code>price</code>, and <code>brand</code> - most platforms populate these automatically, which is why they&apos;re rarely the actual problem. Some categories add further required fields (certain apparel or media attributes), but for most retail catalogues these eight are the baseline.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Is it actually worth filling in every attribute?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            No, and that&apos;s the point of the &quot;what not to bother with&quot; section above. Fill in what applies to your category and skip what doesn&apos;t - a material field on a face cream isn&apos;t doing anything, but the same field on a jacket is load-bearing.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Is 33/100 a bad score?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Treat it as a starting measurement, not a grade - I haven&apos;t run this method across enough accounts to publish a benchmark. What matters is the shape covered above; if your own audit produces the same one, the fix order in this post applies directly regardless of what your overall number comes out to.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How often should a feed be re-scored?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Every sizeable batch of new products changes attribute coverage, because new items arrive with whatever the platform fills in by default rather than with whatever you fixed by hand. Re-scoring every two to three months is enough to catch a decline while it is still a handful of products rather than a trend.
          </div>
        </details>
      </div>

      <hr />

      <h2 id="conclusion">Conclusion</h2>
      <p>
        A feed that passes Merchant Center validation and a feed that&apos;s actually competing for impressions are different things, and the difference doesn&apos;t announce itself anywhere in the interface. The catalogue I audited had eight fields near-perfect, five more sitting in the middle, and twenty-one below 30% coverage, seventeen of them at a flat zero. None of that showed up as a warning. It showed up as a 33 once someone counted.
      </p>
      <p>
        If you take one action from this post, run the count on your own feed before you touch another campaign. Half an hour with a spreadsheet tells you exactly which of the 34 attributes are costing you matches - and whether the five fixes that moved first here are the same five that&apos;ll move first for you.
      </p>

      <p>
        If your account is running Shopping or <GlossaryLink slug="pmax">Performance Max</GlossaryLink> on top of a feed nobody has scored, that&apos;s the same starting point as this audit. And if the feed doesn&apos;t exist yet or needs rebuilding from the ground up rather than graded field by field, start with{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "merchant-center-serbia-setup" } }} className="underline">
          how to set up Merchant Center
        </Link>{" "}
        and{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "product-feed-serbian-ecommerce" } }} className="underline">
          how to build a product feed
        </Link>{" "}
        - this post grades and fixes a feed that already exists, those two build one from nothing.
      </p>

      {/* CTA block */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Want your feed scored the same way?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          I run this same 34-attribute scorecard on <Link href="/usluge/google-shopping" className="underline text-white hover:text-yellow-400">Google Shopping accounts</Link> before touching campaign structure or bids. No promised score, no promised uplift - just a clear read on which fields are actually costing you matches, and which ones aren&apos;t worth your time.
        </p>
        <Link href="/usluge/google-shopping" className="btn-secondary inline-block">
          Get your feed scored
        </Link>
      </div>

      <h2>Related guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping guide</p>
          <p className="text-xs text-gray-500 mb-0">How the feed you just scored turns into a working Shopping account</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vs-standard-shopping" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max vs standard Shopping</p>
          <p className="text-xs text-gray-500 mb-0">Why feed quality matters even more once PMax is making the bidding decisions</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "poas-vs-roas" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">POAS vs ROAS</p>
          <p className="text-xs text-gray-500 mb-0">What cost_of_goods_sold is actually for</p>
        </Link>
      </div>
    </>
  );
}
