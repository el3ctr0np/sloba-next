import { Link } from "@/i18n/navigation";

export default function GoogleAdsMistakesEN() {
  return (
    <>
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
          TL;DR
        </p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          I've been auditing Google Ads accounts for years. 80% of accounts have at least 3 of these mistakes — and each costs money. On average, 30% of budget is wasted on fixable problems. Here are 12 most common mistakes I see and how to fix them.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              12
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Critical mistakes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              80%
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Accounts have 3+</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              30%
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Budget wasted</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              100%
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Are fixable</p>
          </div>
        </div>
      </div>

      <h2>Why Google Ads mistakes are expensive</h2>
      <p>
        Whenever I audit a Google Ads account — whether it's a local business
        with a $500/£400 monthly budget or an eCommerce with $10,000+/£8,000+ spend —
        I find the same mistakes over and over again.
      </p>
      <p>
        Some are obvious as soon as I open the account. Campaigns without structure, 500
        keywords in one ad group, conversion tracking that doesn't work.
      </p>
      <p>
        Others are more subtle. Location targeting that allows traffic from
        cities you don't serve. Negative keywords that don't exist. Search
        Terms never reviewed.
      </p>
      <p>
        Each of these mistakes costs money. Directly through wasted budget on
        irrelevant clicks. Indirectly through missed conversions and worse ROAS.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Most common pattern</p>
        <p className="text-blue-800 text-sm mb-0">
          Client spends $1,000/£800 monthly, but $300/£240 goes to clicks that will
          never convert. After fixes, same budget delivers 40-60% more results.
        </p>
      </div>

      <p>
        Here are 12 most common Google Ads mistakes I see in almost every audit,
        grouped by category.
      </p>

      <hr />

      <h2>Account structure mistakes</h2>

      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Mistake
        </p>
        <p className="font-semibold mb-2">
          Everything in one campaign — products, services, brand and non-brand keywords,
          all mixed together
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Impossible to understand what works and what doesn't. Can't optimize
          budget when everything's in one basket. <a href="https://support.google.com/google-ads/answer/6167118" target="_blank" rel="noopener noreferrer">Quality Score</a> drops because ads can't
          be relevant to everything.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> I recommend restructuring by logical
            segments — brand campaign separate from non-brand, products by
            categories, different goals in different campaigns. This gives you
            clean data and ability to optimize each segment separately.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Mistake
        </p>
        <p className="font-semibold mb-2">
          Bad campaign and ad group naming — &quot;Campaign 1&quot;, &quot;Ad group test&quot;,
          no structure
        </p>
        <p className="text-sm text-gray-600 mb-3">
          After 3 months you don't know what's what. Optimization becomes
          guesswork. Can't quickly find campaign when you need to make
          a change.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Instead of generic names, use clear
            convention — e.g., &quot;US_Search_Brand_Product-X&quot; or
            &quot;UK_Shopping_Returning_Category-Y&quot;. Include geography, campaign
            type, and product/segment in name.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Mistake
        </p>
        <p className="font-semibold mb-2">
          Mixing Search and Display in same campaign — Google defaults to including
          Display Network
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Display has completely different characteristics from Search. Lower CTR,
          different intent, different metrics. When everything's mixed, you can't see where
          budget is going.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Immediately disable Display Network from
            Search campaigns (Campaign settings → Networks). If you want Display,
            create separate campaigns with specific targeting and different
            budget.
          </p>
        </div>
      </div>

      <hr />

      <h2>Keyword mistakes</h2>

      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Mistake
        </p>
        <p className="font-semibold mb-2">
          No or minimal negative keywords — paying for &quot;free&quot;, &quot;job&quot;,
          &quot;course&quot;, &quot;DIY&quot;
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Google shows your ads for searches without purchase intent. 20-30%
          of budget goes to clicks that will never convert because people
          are looking for free solutions or information.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Instead of waiting for mistakes to hit your bill,
            create starter lists immediately — add &quot;free&quot;, &quot;cheap&quot;,
            &quot;job&quot;, &quot;ads&quot;, &quot;course&quot;, &quot;how to&quot;, &quot;DIY&quot; as account-level
            negative lists. Detailed guide:{" "}
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }}
              className="underline text-green-900"
            >
              negative keywords
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Mistake
        </p>
        <p className="font-semibold mb-2">
          Too broad match types — everything on Broad Match without control
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Broad match gives Google too much freedom to interpret your
          keywords. Ads show for totally irrelevant searches that
          Google &quot;thinks&quot; are relevant.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> I recommend switching proven keywords (ones
            already converting) to Phrase or Exact match. Keep Broad match
            only for discovery — and with strong negative keyword list
            and sufficient conversion data.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Mistake
        </p>
        <p className="font-semibold mb-2">
          Never look at Search Terms Report — don't know what you're actually
          paying for
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Search Terms Report shows actual user searches that triggered
          your ads. Without regular review, you're paying for tons of
          irrelevant things and missing good new keywords.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Instead of ignoring, make weekly
            ritual — open Search Terms for previous week, add irrelevant
            as negative keywords, extract good terms as new positive
            keywords. 15 minutes weekly saves 15-30% budget.
          </p>
        </div>
      </div>

      <hr />

      <h2>Ad copy mistakes</h2>

      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Mistake
        </p>
        <p className="font-semibold mb-2">
          Generic ad copy — &quot;Quality&quot;, &quot;Best prices&quot;, &quot;Fast delivery&quot; like
          everyone else
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Your ads are identical to competitors. No reason to click on
          yours specifically. Lower CTR means higher CPC and worse Ad Rank.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Instead of generic phrases, add
            specific numbers (&quot;98% positive reviews&quot;), unique benefits
            (&quot;Free installation in London and Manchester&quot;), social proof
            (&quot;1,000+ products sold&quot;). Specificity sells.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Mistake
        </p>
        <p className="font-semibold mb-2">
          No ad testing — only one ad per ad group
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Without A/B testing you don't know if you can do better. Missing opportunity
          to continuously improve CTR and conversion rate through tests.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> I recommend minimum 2-3 ads per ad
            group. Test different headlines (benefit vs feature), different
            CTAs (&quot;Order today&quot; vs &quot;Learn more&quot;), different value
            propositions. Optimize for Conversions, not Clicks.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Mistake
        </p>
        <p className="font-semibold mb-2">
          Missing ad extensions — text ad without extensions takes
          minimal space
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Smaller visual footprint means lower CTR. Ad Rank drops. You pay more
          per click. Extensions are free and significantly improve performance.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Instead of empty ads, add minimum:
            4-6 sitelinks, 4+ callouts, structured snippets (brands,
            categories, services), call extension if you have phone, location
            extension if you have physical store.
          </p>
        </div>
      </div>

      <hr />

      <h2>Measurement mistakes</h2>

      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Mistake
        </p>
        <p className="font-semibold mb-2">
          No conversion tracking or it's incorrectly set up
        </p>
        <p className="text-sm text-gray-600 mb-3">
          This is fundamental mistake. Without proper conversion measurement,
          you optimize wrong metrics. Smart Bidding can't work.
          You don't know what's working.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Instead of improvising, read{" "}
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}
              className="underline text-green-900"
            >
              conversion tracking guide
            </Link>
            . Set up properly: Conversion Linker tag in GTM (All Pages),
            conversion actions defined correctly, Enhanced Conversions activated.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Mistake
        </p>
        <p className="font-semibold mb-2">
          Tracking wrong conversions — page views, form view, &quot;thank you&quot;
          duplicates
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Suspiciously high conversion rates (20%+) or conversions that don't
          match actual sales/leads. Google algorithm optimizes
          toward wrong actions.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> I recommend hierarchy: primary
            conversion = valuable action (purchase, qualified lead), secondary
            conversions = micro-actions (add to cart, pricing view) but marked
            &quot;Secondary&quot;. Verify tag fires only once per session.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mt-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Mistake
        </p>
        <p className="font-semibold mb-2">
          Ignoring attribution model — using Last Click for long sales cycle
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Last Click gives all credit to last touchpoint. If you have B2B
          with 30-60 day cycle, campaigns creating awareness don't
          get credit. Result: shutting down campaigns that actually work.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Instead of Last Click for everything, use
            Data-Driven attribution if you have enough data (400+ conversions
            monthly). For shorter cycle (eCommerce), Last Click is OK. For longer
            (B2B), Position-Based or Data-Driven gives more realistic picture.
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-sm mb-0">
          Measurement mistakes are most critical. If you're not measuring correctly, all
          decisions are guesswork. Before fixing anything else,
          fix tracking.
        </p>
      </div>

      <hr />

      <h2>How to create action plan for fixes</h2>

      <p>
        Found multiple mistakes in your account? You don't have to fix everything
        at once. Here's how to prioritize:
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            1
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Fix tracking first
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Without proper conversion measurement, all other decisions are guesswork.
        </p>
        <ul className="text-sm">
          <li>Set up conversion tracking correctly</li>
          <li>Verify conversions match actual actions</li>
          <li>Add Enhanced Conversions</li>
          <li>Test that everything works (Google Tag Assistant)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            2
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Stop budget leaks
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Immediately cut most obvious sources of wasted money.
        </p>
        <ul className="text-sm">
          <li>Add negative keywords (starter lists)</li>
          <li>Disable Display Network from Search campaigns</li>
          <li>Set location targeting to &quot;People in&quot; only</li>
          <li>Review Search Terms for past week</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            3
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Restructure account
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Create logical structure for future optimizations.
        </p>
        <ul className="text-sm">
          <li>Separate brand and non-brand campaigns</li>
          <li>Organize by products/services/categories</li>
          <li>Create clear naming conventions</li>
          <li>Check for duplicate keywords</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            4
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Improve ads
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Higher CTR means lower CPC and better Ad Rank.
        </p>
        <ul className="text-sm">
          <li>Add all relevant ad extensions</li>
          <li>Create 2-3 ads per ad group for testing</li>
          <li>Add specific numbers and unique benefits to copy</li>
          <li>Test <a href="https://support.google.com/google-ads/answer/6167118" target="_blank" rel="noopener noreferrer">Quality Score</a> improvements</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            5
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Optimize continuously
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Optimization isn't one-time activity, it's a process.
        </p>
        <ul className="text-sm">
          <li>Weekly Search Terms review</li>
          <li>Monthly ad testing review and structure check</li>
          <li>Quarterly complete audit</li>
          <li>
            Use{" "}
            <Link
              href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }}
              className="underline text-gray-900"
            >
              Google Ads audit guide
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Each mistake you fix returns 10-30% of wasted budget. After fixing
          all 12, average account gets 50-70% better performance with
          same budget.
        </p>
      </div>

      <hr />

      <h2>Frequently asked questions</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          How many of these mistakes does average Google Ads account have?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          In my audits, 80% of accounts have minimum 3-5 of these mistakes. Accounts
          managed by someone without experience often have 8+. Even accounts
          run by agencies sometimes have 2-3 fundamental mistakes (most often in
          tracking or structure). Perfect account doesn't exist, but each
          fixed mistake directly impacts performance.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Which mistake has biggest impact on results?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Measurement mistakes — absence or incorrect conversion tracking. Without
          proper measurement, all decisions are guesswork. Smart Bidding doesn't work.
          You don't know which campaign brings results. Second most expensive mistake is
          lack of negative keywords — directly spends 15-30% of budget on
          irrelevant clicks.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Can I fix these mistakes myself or do I need expert?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Most you can fix yourself — these mistakes aren't technically complex, just require
          time and attention. I recommend reading linked guides (conversion
          tracking, negative keywords, Quality Score) and working step by step.
          If you have budget $2,000+/£1,600+, expert help often pays off as
          you can focus time on business instead of account administration.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          How quickly do results show after fixes?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Depends on mistake. Negative keywords have instant effect — as soon as you
          add them, you stop paying for those searches. Structural changes
          (campaigns, ad groups) need 1-2 weeks to stabilize. Smart
          Bidding strategies need 2-4 weeks learning period. Generally,
          expect clear picture after 30-45 days. Key is tracking metrics
          BEFORE and AFTER to know if changes work.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mt-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          How do I know if my account has any of these mistakes?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Make systematic review: 1) Check if you have conversion
          tracking set up and numbers match reality, 2) Open
          Search Terms Report for past week — see irrelevant searches?
          3) Count negative keywords — if you have less than 50, you're definitely leaking
          budget, 4) Look at campaign structure — can you easily
          understand what's what? If you need professional audit,{" "}
          <Link href="/kontakt" className="underline text-gray-900">
            contact me
          </Link>{" "}
          — I review account in detail and provide action plan with priorities.
        </div>
      </details>

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Need help fixing your Google Ads account?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Professional audit of your account with detailed mistake analysis,
          prioritization, and action plan for fixes. Analysis includes all
          campaigns, keywords, tracking, structure, and performance.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Schedule free consultation
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/google-ads-audit" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Audit</p>
          <p className="text-xs text-gray-500 mb-0">Find and fix mistakes in your campaigns</p>
        </Link>
        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Conversion Tracking Guide
          </p>
          <p className="text-xs text-gray-500 mb-0">
            How to properly set up conversion measurement in Google Ads
          </p>
        </Link>
        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }}
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Negative Keywords Strategy
          </p>
          <p className="text-xs text-gray-500 mb-0">
            How to stop budget leaks through irrelevant clicks
          </p>
        </Link>
        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }}
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Quality Score Optimization
          </p>
          <p className="text-xs text-gray-500 mb-0">
            How to improve Quality Score and reduce CPC
          </p>
        </Link>
        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }}
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            How Much Does Google Ads Cost
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Real advertising costs and how to plan budget
          </p>
        </Link>
      </div>

      <hr />

      <h2>Frequently asked questions about Google Ads mistakes</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What is the most expensive Google Ads mistake?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Lack of negative keywords. Without them, your budget gets spent on irrelevant searches. An average account without negative keywords wastes 20-40% of budget on unproductive clicks. Regular search terms report analysis is mandatory.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Should I use broad match keywords?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Broad match can work with Smart Bidding and enough conversions (30+/month). But for smaller accounts, phrase match and exact match give better control. The most common mistake is using broad match without negative keywords — that&apos;s a recipe for wasting money.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How many ad groups should I have per campaign?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            5-20 ad groups for most campaigns. Too many (50+) makes management difficult and dilutes budget. Too few (1-2) means poor relevance. Each ad group should have thematically related keywords and matching ads.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why is my CTR declining even though I haven&apos;t changed anything?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Most common reasons: seasonality, new competitors, ad fatigue (same ad running too long), changes in SERP layout, or Quality Score decline. Solution: refresh ads regularly (every 4-6 weeks), monitor Auction Insights, and test new variants.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Should I follow all Google Ads recommendations?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            No. Many recommendations serve Google&apos;s goal to increase your spending. Ignore: &quot;switch to broad match&quot;, &quot;increase budget by 50%&quot;, auto-apply changes. Use: RSA recommendations for ads, negative keyword suggestions, and technical improvements.
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
