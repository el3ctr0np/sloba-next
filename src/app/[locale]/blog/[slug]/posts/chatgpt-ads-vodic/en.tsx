import { Link } from "@/i18n/navigation";
import { CheckCircle, XCircle } from "lucide-react";

export default function ChatGptAdsGuideEN() {
  return (
    <>
      <p>
        I went through every official OpenAI source on ChatGPT advertising — the policy pages, the help centre, the market expansion announcements, the advertiser API docs. Then through every independent test with real spend I could find, where a named agency published what it paid and what it got back. The reason is simple. In six months the internet filled up with numbers that have no source: &quot;51% of answers carry ads&quot;, &quot;Newegg 7x ROAS&quot;. Go looking for where those came from and there is nothing there.
      </p>
      <p>
        This guide separates the verified from the invented. Everything stated here as fact comes either from an official OpenAI source or from a named agency that published its budget and its result. Where something is only a vendor claim with no audit, it says so. Where something does not exist despite being widely described as if it does, it says that too. Everything is current as of 1 September 2026, and I update the guide as the product changes — which it does, fast.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">ChatGPT Ads are sponsored cards that appear below a finished answer, seen only by logged-in Free and Go users. You don&apos;t buy keywords — you describe the conversational context you want to show up in. Self-serve accounts are available in 47 countries. Real-world CTR from independent tests lands at 0.65-1.3%, and real CPC runs $1.72 to $12 against OpenAI&apos;s recommended $3-5 opening bid.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">47</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">countries with self-serve accounts</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">$1B</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">run rate in under 200 days</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0.65-1.3%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">CTR in independent tests</p>
          </div>
        </div>
      </div>

      {/* ── Living guide ── */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8" id="istorija-izmena">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-700 mb-2 font-semibold">🔄 Living guide — change history</p>
        <p className="text-sm text-gray-600 mb-3">This guide is updated as OpenAI changes the product. What&apos;s new:</p>
        <ul className="text-sm text-gray-700 space-y-1 mb-0 list-disc pl-5">
          <li><strong>September 2026:</strong> First version: formats and placement, the two separate rollout lists (where ads serve vs where you can buy), buying models and the auction, targeting without keywords, no personalisation in the EEA, measurement and the click gap, categories banned outside the US, independent benchmarks with denominators.</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Quick answer
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          What are ChatGPT Ads?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          <strong>ChatGPT Ads</strong> are sponsored cards that OpenAI shows <strong>below the end of an answer</strong> in ChatGPT, clearly labelled and visually separated from the answer itself. Only logged-in users on the <strong>Free and Go</strong> plans see them. Advertisers don&apos;t pick keywords — they describe the conversational context they want to appear in, and the system decides whether the ad is relevant to the current topic. The ad never changes the answer.
        </p>
      </div>

      <hr />
      {/* ── Table of Contents ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#what-they-are" className="block py-1 text-base text-gray-700 hover:text-primary underline">What ChatGPT Ads are and where they appear</a></li>
          <li><a href="#availability" className="block py-1 text-base text-gray-700 hover:text-primary underline">Where they are available: two different lists</a></li>
          <li><a href="#buying" className="block py-1 text-base text-gray-700 hover:text-primary underline">How to buy them: account, models, auction</a></li>
          <li><a href="#targeting" className="block py-1 text-base text-gray-700 hover:text-primary underline">Targeting without keywords</a></li>
          <li><a href="#measurement" className="block py-1 text-base text-gray-700 hover:text-primary underline">Measurement and the click gap</a></li>
          <li><a href="#eligibility" className="block py-1 text-base text-gray-700 hover:text-primary underline">Who is allowed to advertise</a></li>
          <li><a href="#real-numbers" className="block py-1 text-base text-gray-700 hover:text-primary underline">What the real numbers say</a></li>
          <li><a href="#should-you-test" className="block py-1 text-base text-gray-700 hover:text-primary underline">Should you test it</a></li>
          <li><a href="#pilot" className="block py-1 text-base text-gray-700 hover:text-primary underline">How I run a pilot</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
        </ol>
      </nav>

      <h2 id="what-they-are">What ChatGPT Ads are and where they appear</h2>
      <p>
        The ad appears in exactly one place: below the end of the answer. Not mid-answer, not in a sidebar, not as a banner somewhere in the interface. The user asks a question, gets a full answer, and only underneath it sees one or more clearly labelled ad units. That is the entire placement surface.
      </p>
      <p>
        That single sentence explains almost everything that will surprise you in the numbers further down. In search, the user sees the ad <em>before</em> getting an answer, while the question is still open. In ChatGPT they see it <em>after</em> the answer, when the question is already closed. Psychologically that is a completely different moment. The low CTR you will see below isn&apos;t a defect in the format — it is a consequence of where the ad sits.
      </p>

      <p><strong>The formats that actually exist:</strong></p>
      <ul>
        <li><strong>Standard card</strong> with advertiser name, logo, headline, body copy, image, and a link to the site</li>
        <li><strong>Product carousel</strong> assembled automatically from a merchant product feed based on conversation signals; in beta since early August 2026</li>
        <li><strong>Dynamic CTA</strong> — Shop Now, Book Now, Sign Up, Learn More — chosen automatically by OpenAI rather than by you</li>
        <li><strong>&quot;Ask ChatGPT&quot; on the ad itself</strong>, letting the user pull the ad back into the conversation and ask about it; the advertiser has no influence over what ChatGPT then says</li>
      </ul>

      <p><strong>Who actually sees the ads:</strong></p>
      <ul>
        <li>Only logged-in users on the <strong>Free</strong> and <strong>Go</strong> plans. Plus, Pro, Business, Enterprise and Edu are ad-free.</li>
        <li>No ads for users under 18, none in Temporary Chats, none in the Atlas browser.</li>
        <li>A Free user can opt out of ads in settings, in exchange for a lower message limit.</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">What does NOT exist, despite what you&apos;ll read</p>
        <p className="text-yellow-800 text-base mb-0">There is no sidebar placement. There is no separate &quot;search mode&quot; ad surface. There is no display network across partner sites. Conversational and interactive formats, where the ad would be part of the dialogue, have been announced as intent but have not shipped. If an article explains how to set up a conversational ChatGPT ad, it is describing something you cannot buy.</p>
      </div>

      <hr />

      <h2 id="availability">Where they are available: two different lists</h2>
      <p>
        This is the single most common reporting error about ChatGPT Ads, and it is worth understanding before anything else. There are <strong>two separate country lists</strong>, and almost everyone collapses them into one.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">List A</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Where ads are SERVED to users</h3>
          <p className="text-base text-gray-600 mb-0">41 markets, per OpenAI&apos;s 31 August 2026 announcement. This is a reach question: will your ad have anyone to show to in that country.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">List B</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Where a business can OPEN an account</h3>
          <p className="text-base text-gray-600 mb-0">47 countries, per OpenAI&apos;s official help centre. This is an access question: is your business allowed to become an advertiser at all.</p>
        </div>
      </div>

      <p>
        A country can sit on one list and not the other. When you read &quot;ChatGPT Ads are now available in X countries&quot;, the first question is which of these two things is being claimed. For a real decision you need both: an entity in a List B country so you can buy, and an audience in List A countries so you have someone to sell to.
      </p>

      <p><strong>How the rollout went:</strong></p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Wave</th>
              <th className="py-3 px-3 font-heading font-semibold">Markets</th>
              <th className="py-3 px-3 font-heading font-semibold">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Pilot</td>
              <td className="py-3 px-3">United States</td>
              <td className="py-3 px-3">9 February 2026</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">2</td>
              <td className="py-3 px-3">Canada, Australia, New Zealand</td>
              <td className="py-3 px-3">announced 26 March 2026</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">3</td>
              <td className="py-3 px-3">UK, Mexico, Brazil, Japan, South Korea</td>
              <td className="py-3 px-3">announced 7 May, confirmed live 11 August 2026</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">4</td>
              <td className="py-3 px-3">31 European markets (EU 27 plus Iceland, Liechtenstein, Norway, Switzerland)</td>
              <td className="py-3 px-3">announced 18 August, live 24 August 2026</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">5</td>
              <td className="py-3 px-3">India</td>
              <td className="py-3 px-3">29 August 2026</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">6</td>
              <td className="py-3 px-3">Self-serve accounts: India, Europe, Middle East, South Africa</td>
              <td className="py-3 px-3">31 August 2026</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        There has been no single global launch, and OpenAI itself says it is &quot;still early&quot;. Serving ads to users and opening self-serve buying arrive separately, often weeks apart, so do not trust an article that gives one date per market for both.
      </p>

      <p>
        <strong>If your market is not on either list</strong>, you can start creating an account and leave your details to be notified, but that gives you no earlier access. There is no waitlist in the sense of queue priority. The clean paths are a genuine legal entity that actually operates in a supported market, or running through a client&apos;s entity that already does.
      </p>

      <hr />

      <h2 id="buying">How to buy them: account, models, auction</h2>
      <p>
        There are five routes to the inventory, and for most businesses only the first one matters.
      </p>
      <ul>
        <li><strong>Self-serve Ads Manager</strong> at ads.openai.com, in beta. Open in the US since 5 May 2026, and for India, Europe, the Middle East and South Africa since 31 August 2026.</li>
        <li><strong>OpenAI Ads Solutions</strong>, the managed service for larger advertisers.</li>
        <li><strong>Agency partners</strong>: Dentsu, Omnicom, Publicis, WPP.</li>
        <li><strong>Over 50 tech and measurement partners</strong>, including Adobe, Criteo, Kargo, Pacvue and StackAdapt.</li>
        <li><strong>Advertiser API</strong> for teams building their own automation.</li>
      </ul>

      <p><strong>Billing models:</strong></p>
      <ul>
        <li><strong>CPM</strong> for reach, available since February 2026.</li>
        <li><strong>CPC</strong> for clicks, since 5 May 2026.</li>
        <li><strong>oCPC</strong>, where you pay per click but the system optimises toward a conversion. A bid cap is mandatory, the objective and conversion event are locked at creation, and tracking has to be live <em>before</em> the campaign starts. OpenAI says CPC with outcome bidding now carries the majority of campaigns.</li>
      </ul>

      <p>
        The auction is <strong>relevance-weighted second-price</strong>. In plain terms: the highest bid doesn&apos;t win, the best combination of bid and relevance to the current conversation does, and you pay based on the runner-up. Max bid sits at ad group level. If that sounds familiar from Google Ads, it is the same principle — except here you get no Quality Score diagnostics telling you where you are losing.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-slate-900 mb-2">The minimum spend history</p>
        <p className="text-sm text-gray-700 mb-0">In February 2026 entry required a commitment of $200,000-250,000. In April it dropped to $50,000, and on 5 May it was removed entirely. There is no entry threshold today, but there are per-market campaign minimums: $25 in the US, £15 in the UK, CA$25 and A$25, ¥2,500 in Japan, ₹725 in India. <strong>Euro amounts do not appear in any official source</strong> — if you read a specific euro figure somewhere, someone made it up.</p>
      </div>

      <p>
        Onboarding runs in order: business details, identity verification, account review, then campaign, ad group, creative and policy review. Assume review is not instant and do not plan a same-day launch.
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Recommended bid vs what people actually pay</p>
        <p className="text-base text-yellow-900 mb-0">OpenAI recommends an opening CPC of $3-5. In independent tests with published spend, realised CPC ranged from $1.72 to $12 depending on vertical. Symphonic reported in August that a $3 bid produced <strong>zero impressions</strong>, and that it took roughly a $12 max bid before the campaign served at all. Treat the recommended range as a floor for uncontested topics, not as a planning number.</p>
      </div>

      <hr />

      <h2 id="targeting">Targeting without keywords</h2>
      <p>
        This is where most people coming from Google Ads make their first conceptual mistake. There are no keywords in ChatGPT. There are <strong>context hints</strong>: a free-text description of the topics and situations you want to appear in, set at ad group level. Not exact match, not phrase match, and no guarantee of delivery. It is a signal to the system, not a rule.
      </p>

      <p><strong>What you can control:</strong></p>
      <ul>
        <li><strong>Context hints</strong> at ad group level</li>
        <li><strong>Geo</strong>: country everywhere, plus state, DMA or ZIP in the US</li>
        <li><strong>Platform</strong>: iOS, Android, web</li>
        <li><strong>Custom audiences</strong>: uploaded emails or phone numbers as SHA-256 hashes, up to 512 MB and 5 million identifiers, with a <strong>minimum of 25,000 matched users</strong> before a list is usable; available as inclusion, exclusion or bid multiplier</li>
      </ul>

      <p><strong>What does not exist:</strong></p>
      <ul>
        <li>Keyword lists and match types</li>
        <li>Demographics and interests</li>
        <li>Site-visitor retargeting</li>
        <li><strong>Query-level reporting.</strong> You cannot see which prompt triggered which ad. For me this is the biggest practical gap: there is no equivalent of a search terms report, which means there is no weekly cleanup loop of the kind I run on every Search account.</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">The European specificity almost nobody explains</p>
        <p className="text-blue-800 text-base mb-0">In the EEA and Switzerland, <strong>personalised ads are not initially available</strong>. Ad selection uses only the current conversation, coarse location and language. No memory, no past conversations, no ad interaction history. The practical consequence: in Europe there is no audience layer to hide a weak message behind. Context hints and creative carry the entire result. If the offer is vague, nothing in the EEA setup will rescue it.</p>
      </div>

      <p>
        On privacy, the advertiser never receives conversations, history, memories, name, email, precise location or IP address. You get aggregated performance data. Ads-related data is retained for 30 days after deletion. ChatGPT was designated a Very Large Online Search Engine in the EU on 31 August 2026, so by the end of December 2026 it must meet DSA obligations, including a public ad repository listing ad content, advertiser, serving period and targeting parameters — effectively an ad library for ChatGPT, with a known deadline.
      </p>

      <hr />

      <h2 id="measurement">Measurement and the click gap</h2>
      <p>
        Ads Manager gives you impressions, clicks, spend, CTR, average CPC and CPM, conversions, CSV export, an API and a change log. For conversions there are three mechanisms:
      </p>
      <ul>
        <li><strong>The OAIQ measurement pixel</strong>: a JavaScript SDK with a first-party cookie lasting around 30 days, standard and custom events.</li>
        <li><strong>Conversions API</strong>: server-side events with event-ID deduplication, so the same action isn&apos;t counted twice.</li>
        <li><strong>Automatic Advanced Matching</strong>: captures form data on your site and hashes it in the browser before sending. On by default for new pixels, and switched on automatically for existing ones on 17 August 2026.</li>
      </ul>
      <p>
        UTM parameters pass through on click, and there are dynamic parameters for campaign, ad group and ad ID. Attribution covers clicks plus, where enabled, a one-day view-through window.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">There is no native GA4 integration</p>
        <p className="text-yellow-800 text-base mb-0">Traffic from ChatGPT ads lands in GA4 as plain referral traffic. No account linking of the kind Google Ads and GA4 have, no auto-tagging. If you don&apos;t set UTM parameters before launch, you have lost the ability to separate paid from organic ChatGPT traffic afterwards. This is step one, not an afterthought.</p>
      </div>

      <p>
        Now the part guides rarely include. <strong>The most common practitioner complaint is a click gap</strong>: the platform reports materially more clicks than analytics records sessions. The publicly documented cases, per MediaPost&apos;s 28 August 2026 report: Cleverly reported 57 clicks against fewer than 20 sessions; Symphonic 53 against 35, a gap of roughly 34 percent; Out of the Box verified 13 percent of roughly 140 clicks in July, rising to 68 percent in August; one case ran 120 against 8.
      </p>
      <p>
        <strong>The cause has not been established.</strong> I am not going to write fraud or double counting, because there is no evidence for either, and click-versus-session counting differences exist on every platform. What is established is that the gap narrowed over the summer, which points toward measurement maturity rather than the inventory itself.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">My standard is simple: the client&apos;s analytics is the source of truth, and Ads Manager figures are an indication. If I justify a budget with numbers I can only see inside the panel that is selling me the inventory, I have measured nothing.</p>
      </div>

      <p>
        All of this assumes site tracking already works before you ever open a ChatGPT account. The fundamentals and the order I set them up in are in my <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-guide" } }} className="underline">conversion tracking guide</Link>.
      </p>

      <hr />

      <h2 id="eligibility">Who is allowed to advertise</h2>
      <p>
        The policy is narrow, and this is probably where most businesses drop out before the budget conversation even starts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><CheckCircle size={14} strokeWidth={1.5} className="text-green-600" /> Allowed today</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">A limited set of consumer categories</h3>
          <p className="text-base text-gray-600 mb-0">Household and consumer goods, local services, travel and entertainment, digital products, education.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><XCircle size={14} strokeWidth={1.5} className="text-red-500" /> US only, manual approval</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Finance, healthcare, legal services</h3>
          <p className="text-base text-gray-600 mb-0">Outside the US these categories are prohibited. A German clinic, a UK law firm or an Irish fintech cannot advertise, regardless of the fact that their markets are otherwise supported.</p>
        </div>
      </div>

      <p>
        I see this gap missed constantly. Articles list the supported countries, and the whole thing gets read as &quot;so we can run it&quot;. Category is checked before market, not after. Fully prohibited categories include adult content and dating, alcohol, tobacco and vaping, gambling and betting, drugs and cannabis, politics, individual real estate and job listings, scams, sensitive events, and wellness claims without evidence.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">The geo-compliance clause: incorporating elsewhere is not a grey area</p>
        <p className="text-blue-800 text-base mb-0">The policy explicitly prohibits misrepresenting a business&apos;s location or its eligibility for a market. Advice along the lines of &quot;register the company in Estonia to get around the block&quot; isn&apos;t clever, it is a policy violation with your account as the stake. There are two clean paths: a genuine legal entity that actually operates in a supported market, or running through the client&apos;s own entity that already operates there.</p>
      </div>

      <p>
        There is also a placement-level brand safety layer, separate from advertiser eligibility: ads do not serve in conversations about mental health, in emotionally sensitive contexts, or across 19 further defined content categories. Review itself runs at three levels — advertiser, creative plus landing page, and placement — mostly automated with human escalation.
      </p>

      <hr />

      <h2 id="real-numbers">What the real numbers say</h2>
      <p>
        Here I separate three things that most coverage blends together: independent tests with published spend, OpenAI&apos;s own claims, and ad density studies.
      </p>

      <p><strong>Independent tests with real money</strong> (none audited, but all named with published budgets):</p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Source</th>
              <th className="py-3 px-3 font-heading font-semibold">Spend</th>
              <th className="py-3 px-3 font-heading font-semibold">Finding</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Opascope, June</td>
              <td className="py-3 px-3">~$60K / 15 days</td>
              <td className="py-3 px-3">1.49x blended ROAS, CPC ~$1.72, CVR 2.35%, daily ROAS swinging 0.2x-2.9x</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Q1Media, July</td>
              <td className="py-3 px-3">multi-account</td>
              <td className="py-3 px-3">CTR 0.5-2.5%, average CPC ~$5, CVR ~2%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Choice OMG, June</td>
              <td className="py-3 px-3">CA$415 / 17 days</td>
              <td className="py-3 px-3">CTR 0.65%, CPC CA$7.16, zero conversions</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Symphonic, August</td>
              <td className="py-3 px-3">~$500</td>
              <td className="py-3 px-3">$3 bid produced zero impressions; realised CPC ~$9; zero leads</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Out of the Box, July and August</td>
              <td className="py-3 px-3">$675</td>
              <td className="py-3 px-3">CPC ~$3.50; click-to-session verification rose from 13% to 68%; zero qualified leads</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">SE Ranking, August</td>
              <td className="py-3 px-3">self-test</td>
              <td className="py-3 px-3">97K+ impressions, 1,263 clicks, CTR 1.30%, very few signups</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Three findings repeat across every source. First, the recommended CPC understates real cost in competitive verticals by two to four times. Second, <strong>CTR converges at 0.65-1.3 percent</strong>. For orientation: Google Search campaigns average roughly 2-3 percent CTR, and well-built campaigns on branded and highly relevant terms run 5-10 percent. The difference is not a defect — it follows from the ChatGPT ad sitting below an answer that has already resolved the question. Third, most zero-conversion reports come from campaigns run <em>before</em> August, meaning before oCPC, the pixel and the Conversions API matured, so early results probably understate what the platform can do today.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-slate-900 mb-2">What OpenAI claims, labelled separately</p>
        <p className="text-sm text-gray-700 mb-0">OpenAI has published that one ecommerce advertiser saw 3x ROAS over 28 days, and that over 80 percent of ad-driven traffic consists of new customers. <strong>Both claims are anonymous and unaudited</strong> — no advertiser named, no independent verification. Named advertisers visible on the platform include Newegg, Best Buy, Lowe&apos;s and VistaPrint, but their results have not been published. If you see a specific ROAS figure attributed to one of those brands, that figure has no primary source.</p>
      </div>

      <p><strong>How many answers actually carry ads</strong> is the question most often misreported, because the denominator changes everything:</p>
      <ul>
        <li><strong>SE Ranking, August, 50,000+ commercial prompts:</strong> ads on 25.94% of <em>commercial</em> prompts; 14.35% of ads semantically unrelated to the topic.</li>
        <li><strong>Adthena, March to May, 850,000 queries of all kinds across US and UK:</strong> ads on 4.47% of <em>all</em> queries, averaging 1.06 sponsored items per answer; retail and fashion account for 39% of placements.</li>
        <li><strong>Similarweb:</strong> 26% of answers carry ads, CTR 0.50%.</li>
      </ul>
      <p>
        Both headline studies can be true at once, because they measure different things over different windows. So treat every ad density figure as inseparable from its denominator and its date. Without those, it is just a number.
      </p>

      <h3>Hype vs reality</h3>
      <p>
        On 31 August 2026 OpenAI announced a <strong>$1 billion annualised run rate in under 200 days</strong>. The figure is official, but a run rate is an extrapolation of current pace, not realised annual revenue. Reputable reporting puts the internal 2026 target somewhere in the $2.3-2.5 billion range.
      </p>
      <p>
        Against that, eMarketer forecasts that <em>all</em> AI chatbot advertising will stay under $1 billion in 2026 and reach around $5.4 billion by 2030. If that forecast holds, OpenAI misses its own projection by roughly 90 percent. Digiday reported in May and June that advertisers on large commitments had spent less than 10 percent of their budgets due to inventory constraints, and that around half of inventory went unfilled in June.
      </p>
      <p>
        The most instructive precedent isn&apos;t a number, it is an event: <strong>Perplexity paused onboarding new advertisers in late 2025</strong>, citing weak results and difficult measurement. That does not mean the same happens to OpenAI, which has disproportionately more reach. It means the &quot;ad below the AI answer&quot; model has already failed to deliver once, and that is worth holding in mind when someone plans next year&apos;s budget around it.
      </p>

      <hr />

      <h2 id="should-you-test">Should you test it</h2>
      <p>
        My filter is short, and I apply it before we ever open the budget conversation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><CheckCircle size={14} strokeWidth={1.5} className="text-green-600" /> Worth testing</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Entity in a supported market, permitted category</h3>
          <p className="text-base text-gray-600 mb-0">The business genuinely operates in the EU, UK or US, and the product falls under consumer goods, travel, digital products, education or local services.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><CheckCircle size={14} strokeWidth={1.5} className="text-green-600" /> Worth testing</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Considered purchase and verified tracking</h3>
          <p className="text-base text-gray-600 mb-0">A product people talk through before buying, because the conversation is the entire context of this format. Plus measurement you have personally verified, not measurement you assume works.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><XCircle size={14} strokeWidth={1.5} className="text-red-500" /> Not yet</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Search headroom still unused</h3>
          <p className="text-base text-gray-600 mb-0">If there is still uncovered ground in your Search campaigns, the same money is more measurable and more predictable there. A ChatGPT test is a layer on a working foundation, not a replacement for one.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><XCircle size={14} strokeWidth={1.5} className="text-red-500" /> Not yet</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Budget that has to return this month</h3>
          <p className="text-base text-gray-600 mb-0">If the budget is already promised to a result, this is not the channel for that money. This is a budget for learning about a channel, and it should be booked that way.</p>
        </div>
      </div>

      <p>
        If you do go in, go in with a question rather than a target ROAS. The question is whether people find you through this channel at all, and how their on-site behaviour compares with traffic from your other sources. That is answerable in four to six weeks. A target ROAS on a channel with no query-level reporting and a documented measurement gap is not something I would promise. The same logic applies to splitting budget between channels you already run, which I covered in my comparison of <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-vs-meta-ads" } }} className="underline">Google Ads and Meta Ads</Link>.
      </p>

      <hr />

      <h2 id="pilot">How I run a pilot</h2>
      <p>
        The order is always the same, and the first two steps happen before a single ad is written.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Eligibility check</strong> <span className="text-gray-500">- entity, market and category, in that order. If the category doesn&apos;t pass, that is where the conversation ends, and I say so immediately rather than after an account is open.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Account and measurement before ads</strong> <span className="text-gray-500">- pixel, Conversions API where it earns its place, a UTM scheme agreed up front, and a check that analytics records what the platform records before the first click is paid for.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Context hint strategy</strong> <span className="text-gray-500">- I describe the situations in which a buyer talks about the problem, not product names. It is a different way of thinking from a keyword list, and it is where most of the result is won or lost.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Creative that survives the context</strong> <span className="text-gray-500">- the ad sits below an answer that already resolved the question, so it has to offer the next step rather than repeat what the user just read.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Four to six weeks of learning</strong> <span className="text-gray-500">- with the client&apos;s analytics as the source of truth and a decision criterion agreed in advance for whether it continues or gets switched off.</span></div>
          </div>
        </div>
      </div>

      <p>
        The full process, and what working together looks like, is on my <Link href="/usluge/chatgpt-ads" className="underline">ChatGPT Ads service page</Link>.
      </p>

      <hr />

      <h2 id="faq">Frequently asked questions</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Do ChatGPT Ads actually exist, and where do they appear?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Yes, they have existed since February 2026. They appear as sponsored cards below the end of an answer in ChatGPT, clearly labelled and visually separated, and only to logged-in users on the Free and Go plans. Plus, Pro, Business, Enterprise and Edu plans are ad-free, as are users under 18, Temporary Chats and the Atlas browser. There is no sidebar placement, no display network, and no conversational ad format in which the ad becomes part of the dialogue, although such formats have been announced as intent. As of 31 August 2026 ads serve across 41 markets.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I advertise if my country is not supported?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Only through a genuine legal entity that actually operates in a supported market, or through a client entity that already does. As of 1 September 2026 businesses can open self-serve advertiser accounts in 47 countries, including the US, the UK and all EU member states. In an unsupported country you can begin creating an account and leave your details to be notified when it opens, but that gives you no earlier access and no queue priority. OpenAI policy explicitly prohibits misrepresenting a business location or its eligibility for a market, so incorporating somewhere purely to bypass the restriction is a policy violation rather than a workaround.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much do ChatGPT Ads cost?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">There is no minimum entry spend any more; it was removed on 5 May 2026. Billing runs on CPM, CPC or oCPC through a relevance-weighted second-price auction. OpenAI recommends an opening CPC of $3 to $5, but independent tests with published spend show realised CPC between $1.72 and $12 depending on the vertical, and in one test a $3 bid produced no impressions at all. Per-market campaign minimums do exist, for example $25 in the US and £15 in the UK. No official euro amounts have been published in any source.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How is ChatGPT Ads performance measured?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Through the OpenAI measurement pixel with a first-party cookie lasting around 30 days, through a server-side Conversions API with event-ID deduplication, and through UTM parameters that pass on click. There is no native GA4 integration, so the traffic arrives in analytics as plain referral traffic and has to be tagged with UTM parameters before launch. Query-level reporting does not exist, meaning you cannot see which prompt triggered an ad. Several named agencies reported during summer 2026 that the platform counted materially more clicks than analytics recorded sessions; the cause of that gap has not been publicly established, and the gap narrowed through August.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Do ads influence ChatGPT&apos;s answers?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">No. The ad appears as a separate, clearly labelled card below a completed answer and does not change the content of that answer. An advertiser cannot pay to have ChatGPT recommend its product inside the answer text. If a user pulls an ad back into the conversation to ask about it, the advertiser still has no control over what the model says. Advertisers also never receive conversation content, history, memories, name, email, precise location or IP address, only aggregated campaign performance data.</p>
          </div>
        </details>
      </div>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Thinking about a ChatGPT Ads test?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">I check whether your entity and your category qualify before we talk about budget at all. Book a free consultation and in 30 minutes you will know whether this makes sense for your business or not.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Book a free consultation</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/chatgpt-ads" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">ChatGPT Ads services</p>
          <p className="text-xs text-gray-500 mb-0">Eligibility check, measurement setup, and running the pilot through its first weeks.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-vs-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">ChatGPT Ads vs Google Ads</p>
          <p className="text-xs text-gray-500 mb-0">Where each channel wins, and why comparing CTR is not comparing quality.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-europe" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">ChatGPT Ads in Europe</p>
          <p className="text-xs text-gray-500 mb-0">Why the EEA rules are different and what that changes in strategy.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking guide</p>
          <p className="text-xs text-gray-500 mb-0">How to set up measurement before you open an account on a new channel.</p>
        </Link>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">ChatGPT Ads today are a real but narrow channel: a narrow country list, a narrow category list, a structurally low CTR, and measurement that is still maturing. None of that disqualifies it — it just places it where it belongs, in a learning budget rather than a budget that has to pay for itself this quarter.</p>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: September 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Author: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
