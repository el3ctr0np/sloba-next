import { Link } from "@/i18n/navigation";

export default function WhyGoogleAdsNotWorkingEN() {
  return (
    <>
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
          TL;DR
        </p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          If your Google Ads campaigns aren&apos;t delivering results, the reason is almost
          always technical — and fixable. Here&apos;s a quick breakdown for 90% of cases.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              8
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">
              most common causes
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              90%
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">
              problems are fixable
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              2-4
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">
              weeks for diagnosis
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">
              50%
            </p>
            <p className="text-xs text-slate-400 mt-1 mb-0">
              diagnosis = half the fix
            </p>
          </div>
        </div>
      </div>

      <h2>I understand the frustration — but the problem is fixable</h2>
      <p>
        &quot;Google Ads isn&apos;t working for us.&quot; I hear this at least once a
        week. From business owners who tried running it themselves. From marketing
        managers who hired an agency. From freelancers who took over an account
        from someone else.
      </p>
      <p>
        And I understand the frustration — you&apos;ve invested time, budget, maybe
        money on an agency or freelancer. The result? Nothing. Or worse: constant
        empty promises that &quot;it will start working soon.&quot;
      </p>
      <p>
        But here&apos;s what you need to know: <strong>the problem isn&apos;t Google Ads</strong>.
        Google Ads works for millions of businesses worldwide. The problem is
        specific — and almost always fixable.
      </p>
      <p>
        I&apos;ve been running Google Ads campaigns for 9+ years. I&apos;ve seen every scenario.
        Good campaigns that suddenly stopped working. New campaigns that never took
        off. Expensive agency setups that were completely misconfigured.
      </p>
      <p>
        And in <strong>90% of cases</strong>, the problem falls into one of 8
        categories I cover in this guide. For each one, I provide diagnostics and
        concrete solutions.
      </p>
      <p>
        Some problems you can fix yourself in an hour. Others will require additional
        expertise. But all are solvable — and this guide&apos;s goal is to show you where
        the problem is and what to do next.
      </p>

      <hr />

      <h2>First things first — check the basics</h2>
      <p>
        Before we dive into deep analysis, here are five quick checks that in 80%
        of cases are enough to identify the problem.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              1
            </span>
            <div>
              <strong><a href="https://support.google.com/google-ads/answer/1722054" target="_blank" rel="noopener noreferrer">Is conversion tracking working?</a></strong>{" "}
              <span className="text-gray-500">
                — Check Google Ads {"->"} Goals {"->"} Summary. If you have 0
                conversions, or conversions that don&apos;t match reality,
                tracking isn&apos;t working properly. That&apos;s problem #1.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              2
            </span>
            <div>
              <strong>How much time have you given the campaign?</strong>{" "}
              <span className="text-gray-500">
                — If the campaign is younger than 2 weeks, that&apos;s not enough yet.
                The learning period for Google Ads is minimum 2-4 weeks. Be patient.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              3
            </span>
            <div>
              <strong>Is the budget sufficient?</strong>{" "}
              <span className="text-gray-500">
                — If you have $10/day budget in an industry where CPC is $5, you&apos;ll get
                2 clicks per day. That&apos;s not enough for conversions. Reality is you
                need minimum 10-15 conversions monthly for any optimization.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              4
            </span>
            <div>
              <strong>Is the landing page relevant?</strong>{" "}
              <span className="text-gray-500">
                — If ads talk about &quot;HVAC repair&quot; but you send people to a
                homepage with 10 different services, the problem is there. Landing
                page must match the ad.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              5
            </span>
            <div>
              <strong>Where are you checking performance?</strong>{" "}
              <span className="text-gray-500">
                — If you&apos;re only looking at the Google Ads interface without insight
                into actual conversions (sales, calls, leads), the campaign might
                actually be working — just not on the metric you&apos;re watching.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-sm mb-0">
          If your problem was one of the above — fix that FIRST, then continue
          with analysis. There&apos;s no point optimizing a campaign if the basics
          aren&apos;t in place.
        </p>
      </div>

      <hr />

      <h2>Eight reasons why campaigns don&apos;t work</h2>
      <p>
        These are the most common reasons why Google Ads campaigns don&apos;t deliver
        results — ranked by frequency, not importance. For each I provide a
        problem description and solution.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 1
        </p>
        <p className="font-semibold mb-2">
          Poor or non-existent <a href="https://support.google.com/google-ads/answer/1722054" target="_blank" rel="noopener noreferrer">conversion tracking</a>
        </p>
        <p className="text-sm text-gray-600 mb-3">
          You don&apos;t know how many conversions you have. Smart Bidding doesn&apos;t deliver
          results. You make decisions based on &quot;gut feeling.&quot; Google Ads shows
          conversions, but numbers don&apos;t match reality.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Set up proper conversion tracking (Google Tag
            Manager is recommended). Enable Enhanced Conversions. Verify that each
            campaign tracks the right conversion action. Test tracking before launch.{" "}
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="underline">
              Detailed conversion tracking guide
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 2
        </p>
        <p className="font-semibold mb-2">
          Sending traffic to homepage or wrong landing page
        </p>
        <p className="text-sm text-gray-600 mb-3">
          High bounce rate (70%+). Low conversion rate ({"{<"}1%). People arrive
          but leave quickly. Landing page doesn&apos;t talk about the same topic as the ad.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Create dedicated landing pages for each
            campaign or ad group. Rule: if the ad talks about X, landing page
            MUST talk about X (message match). Clear CTA, benefit-focused copy,
            social proof, and fast load time.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 3
        </p>
        <p className="font-semibold mb-2">Keywords too broad</p>
        <p className="text-sm text-gray-600 mb-3">
          High costs, few conversions. Search Terms report full of irrelevant
          searches. CPC is &quot;normal&quot; but ROI is poor. You&apos;re only using Broad
          match.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Switch to Phrase and Exact match for
            proven keywords. You can only use Broad match if you have strong
            conversion tracking and enough conversions. Aggressive negative keyword
            strategy. Weekly Search Terms audit.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 4
        </p>
        <p className="font-semibold mb-2">Lack of negative keywords</p>
        <p className="text-sm text-gray-600 mb-3">
          You&apos;re paying for &quot;free&quot;, &quot;jobs&quot;, &quot;how to&quot;
          searches. Search Terms report shows non-buyer intent. High costs
          without conversions. You have fewer than 50 negative keywords (too few).
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Exclude informational searches (how, what
            is, tutorial), job seekers (jobs, career, salary), free seekers
            (free, cheap, discount), and competitors (if you don&apos;t want to show).
            Weekly audit and adding new ones. Goal: 100+ negative keywords after
            the first month.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 5
        </p>
        <p className="font-semibold mb-2">Poor account structure</p>
        <p className="text-sm text-gray-600 mb-3">
          Everything in one campaign. 50+ keywords in one ad group. Impossible to
          understand what&apos;s working. Brand and non-brand mixed. Research and
          high-intent in the same campaign.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Restructure by thematic groups. Ideal: 10-20
            keywords per ad group, thematically connected. Separate: Brand vs
            Non-brand (mandatory), High intent vs Research, Products vs Services.
            Structure should facilitate analysis and optimization.{" "}
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="underline">
              Most common Google Ads mistakes
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 6
        </p>
        <p className="font-semibold mb-2">Low Quality Score</p>
        <p className="text-sm text-gray-600 mb-3">
          Quality Score below 5-6 for most keywords. High CPC for the position you
          get. Ad Rank problems — campaign rarely shows.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Quality Score has 3 components — work on all.
            <strong>For CTR:</strong> better ad copy, more relevant extensions.
            <strong>For Ad Relevance:</strong> keywords in headline, tighter ad groups.
            <strong>For Landing Page:</strong> faster site, relevant content,
            mobile-friendly. Goal: QS 7+ for main keywords.{" "}
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "quality-score-vodic" } }} className="underline">
              Quality Score guide
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 7
        </p>
        <p className="font-semibold mb-2">Unrealistic expectations (and budget too small)</p>
        <p className="text-sm text-gray-600 mb-3">
          Budget $500, expecting $30,000 revenue. &quot;We want results in a
          week.&quot; Constant dissatisfaction without clear reason. Fewer than
          10-15 conversions monthly — not enough data for optimization.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Set realistic KPIs based on math. Minimum
            2-3 months for proper evaluation. Budget that allows minimum 10-15
            conversions monthly (Google recommends 30+, but 10-15 is minimum for
            any conclusions).{" "}
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="underline">
              How much does Google Ads cost
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">
          Problem 8
        </p>
        <p className="font-semibold mb-2">Poor ads (ad copy)</p>
        <p className="text-sm text-gray-600 mb-3">
          Low CTR ({"{<"}2% for Search). Ads talk about you, not the user. No
          differentiation from competitors. Same text in all ads, no testing.
        </p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Solution:</strong> Benefit-focused copy (what the user gets,
            not what you do). Include keyword in headline. Clear CTA (Call, Buy,
            Schedule). Test variations — minimum 2-3 ads per ad group, different
            approaches. Track CTR and learn what works.
          </p>
        </div>
      </div>

      <hr />

      <h2>Diagnostic guide — how to identify the problem</h2>
      <p>
        If you don&apos;t know where the problem is, follow this order. This is the
        framework I use when taking over a new account.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            1
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Check conversion tracking
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Do you know how many conversions you have and where they come from? Do
          the numbers match reality?
        </p>
        <ul className="text-sm">
          <li>
            If NO — fix tracking FIRST. Everything else is a waste of time.
          </li>
          <li>
            Check: Google Ads {"->"} Goals {"->"} Summary + test live conversion
          </li>
          <li>
            Bonus: compare numbers from Google Ads with CRM or eCommerce platform
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            2
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Analyze Search Terms report
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Are you paying for relevant traffic? Check Google Ads {"->"} Insights &amp;
          Reports {"->"} Search Terms.
        </p>
        <ul className="text-sm">
          <li>
            If more than 30% of searches aren&apos;t relevant — keywords too broad +
            lack of negative keywords
          </li>
          <li>
            Sort by Cost (highest first) — where is most of the budget going?
          </li>
          <li>
            Add best search terms as explicit keywords, worst as negatives
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            3
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Check landing pages
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Are you sending people to relevant pages? Check Google Ads {"->"} Campaigns
          {"->"} Final URLs.
        </p>
        <ul className="text-sm">
          <li>
            If most campaigns lead to homepage — that&apos;s a problem
          </li>
          <li>
            Test yourself: click the ad as a user. Does the landing page talk about
            the same topic? Is the CTA clear?
          </li>
          <li>
            Bounce rate over 70% = wrong landing page or slow site
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            4
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Quality Score audit
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Is QS above 6 for most keywords? Google Ads {"->"} Keywords {"->"} add
          Quality Score column.
        </p>
        <ul className="text-sm">
          <li>
            QS below 5 = traffic too expensive — work on CTR, relevance, landing page
          </li>
          <li>
            Check components (Expected CTR, Ad Relevance, Landing Page Experience)
            — which is weakest?
          </li>
          <li>
            Often the problem isn&apos;t quality but structure — too many keywords in
            ad group
          </li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
            5
          </span>
          <h3 className="mt-0 mb-0 font-heading font-bold">
            Budget and reality
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Do you have enough data for optimization? Check number of conversions in
          last 30 days.
        </p>
        <ul className="text-sm">
          <li>
            Fewer than 10 conversions monthly = problem is budget too small or CPC
            too expensive
          </li>
          <li>
            Calculate: CPC × Conversion Rate = how much does one conversion cost?
            Is that profitable?
          </li>
          <li>
            If it&apos;s not profitable even with good campaign setup, Google Ads might
            not be the right channel (yet)
          </li>
        </ul>
      </div>

      <hr />

      <h2>How much time to give a campaign before giving up</h2>
      <p>
        One of the most common mistakes is giving up on a campaign too early.
        Here are realistic timelines by campaign type.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">
                Campaign type
              </th>
              <th className="py-3 px-4 font-heading font-semibold">
                Learning period
              </th>
              <th className="py-3 px-4 font-heading font-semibold">
                Stable performance
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Search (Manual CPC)</td>
              <td className="py-3 px-4">7-14 days</td>
              <td className="py-3 px-4">2-4 weeks</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">
                Search (Smart Bidding)
              </td>
              <td className="py-3 px-4">2-4 weeks</td>
              <td className="py-3 px-4">6-8 weeks</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Shopping</td>
              <td className="py-3 px-4">2-3 weeks</td>
              <td className="py-3 px-4">4-6 weeks</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">PMax</td>
              <td className="py-3 px-4">4-6 weeks</td>
              <td className="py-3 px-4">8-12 weeks</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Display/Video</td>
              <td className="py-3 px-4">3-4 weeks</td>
              <td className="py-3 px-4">6-10 weeks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Important</p>
        <p className="text-yellow-800 text-sm mb-0">
          Learning period doesn&apos;t mean you can&apos;t touch anything. It means
          performance isn&apos;t stable yet. But you can (and should) check Search
          Terms report, add negative keywords, test different landing pages. Just
          don&apos;t change bidding strategy or budget drastically.
        </p>
      </div>

      <hr />

      <h2>When to seek help</h2>
      <p>
        Some problems you can fix yourself in an hour. Others require deeper
        expertise. Here&apos;s when it makes sense to work solo vs when to hire an expert.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            DIY approach
          </p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">
            Do it yourself if...
          </h3>
          <p className="text-sm text-gray-600 mb-0">
            You have a clear diagnosis (e.g., lack of negative keywords). Problem is
            technically simple (adding keywords, changing landing page). You have
            time to learn and experiment. Budget is smaller (under $1,000/month).
            You want to develop internal knowledge.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            Expert help
          </p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">
            Hire an expert if...
          </h3>
          <p className="text-sm text-gray-600 mb-0">
            You don&apos;t know what the problem is (unclear diagnostics). You&apos;ve tried
            everything in this guide and it doesn&apos;t work. Budget is larger (over
            $2,000/month) — mistakes cost you. You don&apos;t have time to learn —
            you need results fast. Campaigns are complex (multinational, multilanguage,
            large inventory).
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Strategy</p>
        <p className="text-blue-800 text-sm mb-0">
          If you&apos;re not sure — schedule an audit. One good audit (1-2h from a
          freelancer or agency) will give you a clear diagnosis and action plan.
          Then you can decide whether to work solo or hire help.{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="underline">
            Google Ads audit guide
          </Link>
          .
        </p>
      </div>

      <hr />

      <h2>Frequently asked questions</h2>

      <details
        className="bg-white border-2 border-gray-200 rounded-xl group mb-3"
        open
      >
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          How long does it take for Google Ads to start working?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Depends on campaign type. For Search campaigns with Manual CPC, you can
          see first conversions in 7-14 days. For Smart Bidding (Target CPA,
          Target ROAS), learning period is 2-4 weeks. For PMax campaigns, even 4-6
          weeks. But stable, optimized results can be expected only after 2-3
          months of work. Don&apos;t give up before that — learning is part of the process.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Is the problem with my agency/freelancer?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Maybe. Look for transparency: account access (Admin), monthly reports
          with clear metrics, clear explanation of actions. If you only get
          &quot;we&apos;re working on it&quot; without details, that&apos;s a red flag.
          A good partner will always be able to explain what they&apos;re doing and why.
          If you&apos;re not satisfied, request an audit from an independent party —
          often reveals that the problem isn&apos;t in the setup but something else
          (e.g., landing page, offer).
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          How much budget is enough?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Depends on industry, CPC, and goals. But rule of thumb: you need minimum
          10-15 conversions monthly to have enough data for any conclusions. If
          your CPA (cost per acquisition) is $80, that means minimum $800-1,200/month
          budget. Google recommends 30+ conversions monthly for Smart Bidding, but
          even with 10-15 you can start optimization. Below that, campaign doesn&apos;t
          have enough signals to learn.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          What if competitors have much bigger budgets?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Focus on niches where they&apos;re not strong: long-tail keywords (more
          specific searches), geographic targeting (specific locations), ad schedule
          (time periods when competition sleeps). Quality Score can significantly
          level the playing field — QS 9 will give you better position than QS 5
          even with lower bid. Also, think about less obvious keywords — they&apos;re
          often cheaper and convert better because they&apos;re more specific.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Should I give up on Google Ads?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">
            &#9660;
          </span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Before giving up, try an audit from an independent party. A fresh
          perspective often uncovers problems you don&apos;t see (or that are masked if
          you&apos;re working with an agency that&apos;s not doing well). Google Ads works
          for millions of businesses — but it&apos;s not a universal solution. If there
          really is no demand for your product/service, or margins are too small
          for profitability with your CPC, then it might be time for another channel
          (SEO, social media, email marketing).
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Campaign not working? Let&apos;s find the problem together
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          If you&apos;ve tried everything in this guide and still aren&apos;t getting results,
          schedule a free consultation. We&apos;ll go through your account together,
          identify the problem, and agree on next steps.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Schedule free consultation
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/konsultacije" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">1-on-1 Consultations</p>
          <p className="text-xs text-gray-500 mb-0">Let's analyze together why your campaigns aren't working</p>
        </Link>

        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }}
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Conversion Tracking Guide
          </p>
          <p className="text-xs text-gray-500 mb-0">
            How to set up proper conversion tracking for Google Ads campaigns
          </p>
        </Link>
        <Link
          href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }}
          className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline"
        >
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Most Common Google Ads Mistakes
          </p>
          <p className="text-xs text-gray-500 mb-0">
            10 mistakes that cost clients thousands in monthly spend
          </p>
        </Link>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          The problem isn&apos;t Google Ads — the problem is diagnosis. Most campaigns
          that &quot;don&apos;t work&quot; can be fixed in 2-4 weeks with proper analysis
          and actions.
        </p>
      </div>

      <hr />

      <h2>Frequently asked questions — why Google Ads isn&apos;t working</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why is my Google Ads campaign spending budget but getting no conversions?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Top 3 reasons: 1) Poor conversion tracking — you&apos;re not tracking the right actions or tracking is broken. 2) Landing page doesn&apos;t convert — slow load speed, unclear CTA, poor mobile experience. 3) Wrong keywords — attracting people without purchase intent. Check these three before anything else.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How long should I wait before stopping a campaign?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Minimum 2-3 weeks and at least 100-200 clicks before making any conclusions. Smart Bidding strategies need 4-6 weeks to exit the learning phase. Stopping too early is one of the most common mistakes — the algorithm needs time to find converting users.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Is my budget too small for results?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Calculate: average CPC × 15 = minimum recommended daily budget. If your average CPC is $2, you need at least $30/day ($900/month). Below that, the campaign doesn&apos;t have enough data for optimization. For Smart Bidding, Google recommends 30+ conversions per month — with less, results are unpredictable.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Why do competitors have better positions than me?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Ad Rank = Max CPC × Quality Score × Expected impact of extensions. If your QS is below 6, competitors with better relevance beat you even with lower bids. Check your Quality Score in the keywords report — scores below 5 signal that ads or landing pages aren&apos;t relevant enough for those keywords.
          </div>
        </details>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: January 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Author: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
