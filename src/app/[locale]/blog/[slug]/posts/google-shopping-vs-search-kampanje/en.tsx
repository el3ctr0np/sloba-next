import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function GoogleShoppingVsSearchCampaignsEN() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Quick answer</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          For eCommerce this is almost never an &quot;either Shopping or Search&quot; question. Shopping catches the shopper who knows what they want and is comparing products; Search catches the queries Shopping can&apos;t see (research, branded, service). The strongest accounts in 2026 run both, with a clear budget split. This guide shows when each campaign wins and how to combine them.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">~80%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">of eComm ad budget goes to Shopping</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">~18%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">more conversions when running both</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">30-50</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">conversions/mo threshold for PMax</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2+ yrs</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">my UK Shopping + Search experience</p>
          </div>
        </div>
      </div>

      <p>
        Clients ask me this on almost every first call: &quot;What&apos;s better for my store — Google Shopping or Search?&quot; They expect me to pick one. I almost never do. In practice these are two different tools for two different moments in the shopper&apos;s head, and the best eCommerce results come when they work together, not when they fight over the same budget.
      </p>
      <p>
        I&apos;ve been running Google Shopping for UK clients for over two years. With one of them (Chelleon UK, skincare), Shopping generated over £290k in revenue at a POAS of 1.78x in a thin-margin category. For the same client I run Search in parallel. That first-hand experience with the hybrid is the backbone of this article — not theory, but what actually works on live accounts.
      </p>
      <p>
        If you&apos;re new to the topic, it&apos;s worth reading the core{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="underline text-blue-700 font-medium">
          Google Shopping campaigns guide
        </Link>{" "}
        first. Here I assume you know what Shopping is, so I go straight to the decision: when to pick each campaign, and why you usually pick both.
      </p>

      {/* TOC nav */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Contents</p>
        <ul className="list-none pl-0 mb-0 space-y-0">
          <li><a href="#quick-answer" className="block py-1 text-base text-gray-700 hover:text-primary underline">Shopping vs Search - the quick answer</a></li>
          <li><a href="#how-they-differ" className="block py-1 text-base text-gray-700 hover:text-primary underline">How Shopping and Search actually differ</a></li>
          <li><a href="#when-search-wins" className="block py-1 text-base text-gray-700 hover:text-primary underline">When Search wins</a></li>
          <li><a href="#when-shopping-wins" className="block py-1 text-base text-gray-700 hover:text-primary underline">When Shopping wins</a></li>
          <li><a href="#why-both" className="block py-1 text-base text-gray-700 hover:text-primary underline">Why it&apos;s not either/or</a></li>
          <li><a href="#budget-and-structure" className="block py-1 text-base text-gray-700 hover:text-primary underline">Budget split and structure</a></li>
          <li><a href="#serbia-context" className="block py-1 text-base text-gray-700 hover:text-primary underline">Serbia: what works today, what arrives in November</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
        </ul>
      </nav>

      <hr />

      {/* ── Featured snippet block ── */}
      <h2 id="quick-answer">Shopping vs Search - the quick answer</h2>
      <p>
        If you need the answer at a glance, here it is. Neither type is universally &quot;better&quot; — you pick based on what you sell and which part of the shopper&apos;s intent you want to cover.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Situation</th>
              <th className="py-3 px-3 font-heading font-semibold">What you pick</th>
              <th className="py-3 px-3 font-heading font-semibold">Why</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">When Search</td>
              <td className="py-3 px-3">Search campaign</td>
              <td className="py-3 px-3">Branded queries, services, research and comparison queries (&quot;best X for Y&quot;), small catalog, urgent intent. You control the exact keywords and the ad message.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">When Shopping</td>
              <td className="py-3 px-3">Shopping campaign</td>
              <td className="py-3 px-3">Visual products, large catalog, price competition. The shopper sees the image, price, and store before the click — higher click quality, usually lower CPC.</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">When both</td>
              <td className="py-3 px-3">Hybrid (Search + Shopping)</td>
              <td className="py-3 px-3">Almost every serious eCommerce store. Shopping covers &quot;I know what I want&quot;, Search covers research and brand. Google reports an average of ~18% more conversions when running both.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="how-they-differ">How Shopping and Search actually differ</h2>
      <p>
        The key to the whole decision is understanding that these two campaigns don&apos;t do the same thing. They differ in who decides what shows, in how they look to the shopper, and in the slice of intent they capture.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Search</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">You choose the keywords</h3>
          <p className="text-base text-gray-600 mb-0">
            With <GlossaryLink slug="google-ads">Search</GlossaryLink> campaigns you define the keywords and write a text ad. Control sits with you — you pick exactly which queries you show on, what message you send, and which page you send people to. It appears as a text ad at the top of the results, with no product image.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Shopping</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">The feed chooses for you</h3>
          <p className="text-base text-gray-600 mb-0">
            With <GlossaryLink slug="merchant-center">Shopping</GlossaryLink> campaigns you don&apos;t choose keywords. Google reads your product feed — name, image, price, attributes — and matches products to searches itself. It appears visually: product image, price, and store name, right there before the click.
          </p>
        </div>
      </div>

      <p>
        That difference in control changes everything. With Search you optimize keywords, negative keywords, and ad copy. With Shopping you optimize the feed — because the feed is your &quot;keyword&quot;. If the product title in the feed is weak, no bid strategy fixes that.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Why Shopping usually has a lower CPC</p>
        <p className="text-blue-800 text-base mb-0">
          With Search you bid on a keyword where you compete with everyone targeting it — advertisers and resellers alike. With Shopping the auction is tied to a specific product and its relevance, so the competition is narrower. In practice that often means a lower <GlossaryLink slug="cpc">CPC</GlossaryLink> for the same traffic quality, plus the image and price shown before the click act as a filter that repels wasted clicks.
        </p>
      </div>

      <hr />

      <h2 id="when-search-wins">When Search wins</h2>
      <p>
        There are queries Shopping simply can&apos;t catch, because it relies on the product feed rather than the shopper&apos;s language. That&apos;s where Search does work Shopping can&apos;t.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Branded queries</p>
          <p className="text-base text-gray-600 mb-0">
            When someone searches for your company or product name, you want to be the first result — and to protect the brand from competitors bidding on your name. A brand Search campaign does that cheaply and with high conversion. Shopping doesn&apos;t help the same way here.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Research and comparison queries</p>
          <p className="text-base text-gray-600 mb-0">
            &quot;Best running shoes for asphalt&quot;, &quot;waterproof backpack under $80&quot;, &quot;X or Y — which is better&quot;. These are queries with clear intent, but Shopping struggles to catch them because they aren&apos;t tied to one specific product in the feed. A Search campaign with well-chosen keywords and a landing page that answers the question takes that traffic.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Services and anything that isn&apos;t a physical product</p>
          <p className="text-base text-gray-600 mb-0">
            Shopping requires a product feed. If you sell a service, a subscription, a digital product, or anything without a classic catalog, Search is the only path. No feed means no Shopping.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Small catalog and urgent intent</p>
          <p className="text-base text-gray-600 mb-0">
            With just a handful of products, the Shopping algorithm doesn&apos;t have enough variety to work at full strength. And for urgent queries (&quot;buy today&quot;, &quot;in stock now&quot;), Search gives you control over the message — you can answer that urgency directly in the ad.
          </p>
        </div>
      </div>

      <hr />

      <h2 id="when-shopping-wins">When Shopping wins</h2>
      <p>
        For most eCommerce stores with physical products, Shopping carries the bulk of the work — which is why it takes around 80% of eComm ad budgets on average. Here&apos;s when it&apos;s the clear favorite.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Visual products</p>
          <p className="text-base text-gray-600 mb-0">
            When looks sell — clothing, footwear, furniture, decor, gadgets — an image in the results does what text can&apos;t. The shopper sees the product before the click, recognizes whether they like it, and clicks with stronger intent. That lifts both <GlossaryLink slug="ctr">CTR</GlossaryLink> and traffic quality.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Large catalog</p>
          <p className="text-base text-gray-600 mb-0">
            With hundreds or thousands of SKUs, hand-writing keywords and ads for each product is impossible. Shopping solves that from the feed — you set the feed up once and Google covers the whole catalog. The bigger the catalog, the bigger the Shopping advantage.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Price competition</p>
          <p className="text-base text-gray-600 mb-0">
            When price is your edge, Shopping surfaces it right in the result, next to competitors. A shopper comparing prices sees yours immediately — and that&apos;s exactly the moment they&apos;re closest to buying. If you&apos;re competitive on price, Shopping turns that edge into clicks.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-gray-900 mb-1">Lower CPC for the right traffic</p>
          <p className="text-base text-gray-600 mb-0">
            As I explained above — a product-tied auction, plus the image and price acting as a filter, usually means a lower CPC and less budget wasted on missed clicks. For thin margins (where I ran a 1.78x POAS at Chelleon), that efficiency is the difference between profit and loss.
          </p>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Standard Shopping or Performance Max? Standard is better for catalogs under ~50 SKUs, new launches (it gives you search-term visibility), and margin-sensitive categories. PMax shines once you have 50+ conversions a month with clean tracking, a large catalog, and real creative assets. Below 30-50 conversions a month, stick with Maximize Conversion Value without a target ROAS until the algorithm gathers data.
        </p>
      </div>

      <hr />

      <h2 id="why-both">Why it&apos;s not either/or — it&apos;s both</h2>
      <p>
        Here I come back to the start. The &quot;Shopping or Search&quot; question frames the choice wrong. The shopper doesn&apos;t live in one campaign type — they move through intents. Today they research (&quot;which are the best wireless earbuds&quot;), tomorrow they compare specific models (Shopping), the day after they search for your brand by name. If you cover only one part of that journey, you hand the rest to your competitors.
      </p>
      <p>
        The data backs it up. Google reports that running both campaigns together delivers an average of around 18% more conversions at a similar cost-per-action — so more sales without each individual one getting more expensive. An Optmyzr study of 24,702 PMax campaigns found that 82% of advertisers already run PMax alongside Shopping or Search, and the group that split budget sensibly saw the strongest return.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">An important change since October 2024</p>
        <p className="text-yellow-800 text-base mb-0">
          It used to be a question of &quot;which of my campaigns wins the auction when they overlap&quot;. Since October 2024, Google decides who wins the overlapping auction by <GlossaryLink slug="ad-rank">Ad Rank</GlossaryLink>, not by campaign type — no type gets automatic priority. That means Shopping and Search no longer eat each other&apos;s space by some fixed rule, which makes the hybrid more viable than ever: run both, and the best ad in a given moment wins.
        </p>
      </div>

      <p>
        Put simply: Shopping is your workhorse for &quot;I know what I want, show me the product and price&quot;. Search is there for everything Shopping can&apos;t see — research, comparison, brand, services. Together they cover the whole shopper journey. That&apos;s why on live accounts I almost always run them in parallel.
      </p>

      <hr />

      <h2 id="budget-and-structure">Budget split and structure</h2>
      <p>
        There&apos;s no magic formula that holds for every store, and don&apos;t trust anyone who invents an exact percentage before they&apos;ve seen your data. But there are principles I split budget by, and those I can share.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Start from the product, not the percentage</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">If you sell physical, visual products with a decent catalog, weight naturally leans toward Shopping — that&apos;s where purchase intent is highest. The service side, research queries, and brand go to Search. The split follows what you sell, not some universal ratio.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Always carve out a separate brand Search budget</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Branded traffic is the cheapest and converts best. Keep it in a separate campaign with its own budget, so generic Search doesn&apos;t eat it and you clearly see how much revenue comes from people already searching for you.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Respect the conversion threshold for automation</strong>
              <p className="text-base text-gray-600 mt-1 mb-0"><GlossaryLink slug="pmax">Performance Max</GlossaryLink> and <GlossaryLink slug="smart-bidding">Smart Bidding</GlossaryLink> work best with 30-50 conversions a month. Below that, the algorithm doesn&apos;t have enough signal — stick with simpler strategies (Maximize Conversion Value without a target ROAS) until you gather enough data, then tighten your targets.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Don&apos;t split budget — split intents</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Don&apos;t think &quot;60% here, 40% there&quot; as a fixed rule. Think about which shopper intents you cover and whether any is left uncovered. Run both types, track which brings profitable conversions, and move budget toward what works — the Ad Rank logic (since October 2024) picks the best ad in each auction anyway.</p>
            </div>
          </div>
        </div>
      </div>

      <p>
        For a deeper look at building the whole eCommerce structure on the Serbian market — campaign categorization, negative keywords, custom labels in the feed — see the{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-za-ecommerce-srbija-2026" } }} className="underline text-blue-700 font-medium">
          complete Google Ads eCommerce guide for Serbia
        </Link>. And for feed preparation itself, there&apos;s the{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "product-feed-srpski-ecommerce" } }} className="underline text-blue-700 font-medium">
          product feed guide
        </Link>. If you&apos;re torn between Standard Shopping and PMax, I break it down in detail in the{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }} className="underline text-blue-700 font-medium">
          Performance Max guide
        </Link>.
      </p>

      <hr />

      <h2 id="serbia-context">Serbia: what works today, what arrives in November</h2>
      <p>
        For the Serbian market there&apos;s one important catch that changes your decision right now: Search campaigns work today, while Shopping is still coming.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Today</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Search is already here and running at full strength</h3>
          <p className="text-base text-gray-600 mb-0">If you have a Serbian store, you can run Search campaigns today — brand, research queries, categories, all of it. There&apos;s no reason to wait. Search is the platform you build on right now.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">November 2026</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Shopping is still coming to Serbia</h3>
          <p className="text-base text-gray-600 mb-0">Google Shopping officially launches in Serbia in November 2026. Until then, Shopping campaigns simply aren&apos;t available for the Serbian market. But the prep (Merchant Center account, product feed, attributes) can start now.</p>
        </div>
      </div>

      <p>
        The practical takeaway for Serbian eCommerce: <strong>you&apos;re not choosing between Shopping and Search — you&apos;re choosing the order.</strong> You launch Search today and gather data, revenue, and account history. You prepare Shopping in the background so it&apos;s ready on launch day instead of starting from scratch then. When Shopping goes live in November, you switch to the hybrid I described above — and that&apos;s when you truly run both.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 md:p-5 my-6">
        <p className="font-semibold text-amber-900 mb-1">The full prep plan in one place</p>
        <p className="text-amber-800 text-base mb-0">
          The launch date, Ex-Yu markets, a 15-step checklist, and Merchant Center setup are all worked out in detail in the pillar guide{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }} className="underline text-amber-900 font-medium">
            Google Shopping Is Coming to Serbia - Complete Preparation Guide
          </Link>. If you&apos;re planning Shopping for a Serbian store, that&apos;s the next read.
        </p>
      </div>

      <hr />

      <h2 id="faq">Frequently asked questions</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is Google Shopping or Search better for eCommerce?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For most eCommerce stores with physical products, Shopping carries the bulk of sales and takes around 80% of eComm ad budgets, because the shopper sees the image and price before the click. But Search catches queries Shopping can't see — research and comparison queries, branded searches, and services. The best result in 2026 comes from a hybrid: both types run together, with a clear budget split."
                }
              },
              {
                "@type": "Question",
                name: "Why does Shopping usually have a lower CPC than Search?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "With Search you bid on a keyword where you compete with everyone targeting it. With Shopping the auction is tied to a specific product and its relevance from the feed, so the competition is narrower. On top of that, the image and price visible before the click act as a filter that repels wasted clicks, so on average you get a lower CPC for higher-quality traffic."
                }
              },
              {
                "@type": "Question",
                name: "Can I run both Shopping and Search at the same time?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, and it's the recommended practice for 2026. Google reports that running both campaigns together delivers an average of around 18% more conversions at a similar cost-per-action. Since October 2024, Google decides who wins an overlapping auction by Ad Rank rather than by campaign type, so the two types don't compete by a fixed rule — the best ad in a given moment wins."
                }
              },
              {
                "@type": "Question",
                name: "When should I choose Standard Shopping and when Performance Max?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Standard Shopping is better for smaller catalogs (under about 50 SKUs), new launches where you need search-term visibility, and margin-sensitive categories. Performance Max shines once you have 50+ conversions a month with clean tracking, a large catalog, and real creative assets. Below 30-50 conversions a month, stick with simpler bid strategies until the algorithm gathers enough data."
                }
              },
              {
                "@type": "Question",
                name: "How much budget should go to Shopping versus Search?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There's no universal percentage — the split depends on what you sell. For visual physical products, weight leans toward Shopping; research queries, services, and brand go to Search. Always carve out a separate budget for brand Search since it's the cheapest and converts best. Run both types, track which brings profitable conversions, and move budget toward what works."
                }
              },
              {
                "@type": "Question",
                name: "Does Google Shopping work in Serbia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Google Shopping officially launches in Serbia in November 2026. Until then Shopping campaigns aren't available for the Serbian market, but Search campaigns already work today. The practical plan for Serbian eCommerce: launch Search now and gather data, and in parallel prepare Merchant Center and the product feed so you can switch to the hybrid on Shopping's launch day without waiting."
                }
              }
            ]
          })
        }}
      />

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Is Google Shopping or Search better for eCommerce?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            For most stores with physical products, Shopping carries the bulk of sales and takes around 80% of eComm ad budgets, because the shopper sees the image and price before the click. But Search catches queries Shopping can&apos;t see — research and comparison queries, branded searches, and services. The best result in 2026 is a hybrid: both types run together.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why does Shopping usually have a lower CPC than Search?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            With Search you bid on a keyword where you compete with everyone targeting it. With Shopping the auction is tied to a specific product from the feed, so competition is narrower. The image and price visible before the click act as a filter that repels wasted clicks, so on average you get a lower CPC for higher-quality traffic.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I run both Shopping and Search at the same time?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Yes, and it&apos;s the recommended practice for 2026. Google reports an average of around 18% more conversions when running both, at a similar cost-per-action. Since October 2024, an overlapping auction goes to the best ad by Ad Rank rather than to a type by a fixed rule — so the two don&apos;t compete at each other&apos;s expense.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            When should I choose Standard Shopping and when Performance Max?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Standard Shopping is better for smaller catalogs (under about 50 SKUs), new launches where you need search-term visibility, and margin-sensitive categories. Performance Max shines with 50+ conversions a month, clean tracking, a large catalog, and real creative assets. Below 30-50 conversions, stick with simpler bid strategies.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much budget should go to Shopping versus Search?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            There&apos;s no universal percentage — the split depends on what you sell. For visual physical products, weight leans toward Shopping; research, services, and brand go to Search. Always carve out a separate brand Search budget. Run both types, track which brings profitable conversions, and move budget toward what works.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does Google Shopping work in Serbia?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Google Shopping officially launches in Serbia in November 2026. Until then Shopping isn&apos;t available for the Serbian market, but Search works today. The plan: launch Search now, and in parallel prepare Merchant Center and the product feed so you can switch to the hybrid on launch day without waiting.
          </div>
        </details>
      </div>

      <hr />

      {/* CTA block */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Not sure which mix of Shopping and Search you need?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          I go through your catalog, margins, and goals and give you a concrete plan — what to launch today through{" "}
          <Link href="/usluge/search-kampanje" className="underline text-white hover:text-yellow-400">Search campaigns</Link>, and what to prepare for{" "}
          <Link href="/usluge/google-shopping" className="underline text-white hover:text-yellow-400">Google Shopping</Link> ahead of the Serbian launch.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Schedule a free consultation
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Guide — The Basics</p>
          <p className="text-xs text-gray-500 mb-0">Standard Shopping vs Performance Max, feed optimization</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-za-ecommerce-srbija-2026" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads for eCommerce in Serbia</p>
          <p className="text-xs text-gray-500 mb-0">Complete strategy, campaign structure, budgets</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "product-feed-srpski-ecommerce" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Product Feed for Serbian eCommerce</p>
          <p className="text-xs text-gray-500 mb-0">8 required attributes, title optimization, custom labels</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max Guide</p>
          <p className="text-xs text-gray-500 mb-0">Asset group structure, when PMax vs Standard Shopping</p>
        </Link>
      </div>
    </>
  );
}
