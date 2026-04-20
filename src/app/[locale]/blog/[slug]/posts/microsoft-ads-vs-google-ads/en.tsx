import { Link } from "@/i18n/navigation";

export default function MicrosoftAdsVsGoogleAdsEN() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">At a Glance — Two Platforms, One Budget</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google holds 92% of the search market. Microsoft Ads covers the remaining 5–8% —
          but that audience is older, wealthier, and pays 30–50% lower CPC. I have been running
          both platforms simultaneously for UK and US clients for years — and Microsoft Ads is not sidelined. On the contrary, it is approached carefully, but it is remarkably easy to run. Here is what I have learned.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">92%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Google search market share</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">-40%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">lower CPC on Microsoft Ads avg.</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">35+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">avg. age of MS Ads user</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">£500</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">typical MS Ads share of budget</p>
          </div>
        </div>
        <p className="text-sm text-slate-400 mt-6 mb-0 border-t border-slate-700 pt-4">
          Data: StatCounter GlobalStats, Microsoft Advertising, WordStream. Updated: April 2026.
        </p>
      </div>

      {/* Quick Answer — featured snippet target */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-5 my-6">
        <p className="font-bold text-yellow-900 text-sm mb-1 uppercase tracking-wide">Quick Answer</p>
        <p className="text-yellow-800 text-sm mb-0">
          Google Ads is non-negotiable for any business advertising online — 92% market share, unmatched reach, and the most advanced automation available. Microsoft Ads is a profitable supplementary channel: 30–50% lower CPC, an older and wealthier audience (35+, higher incomes), and unique LinkedIn targeting available exclusively through the Microsoft platform.
        </p>
      </div>

      <p>
        I have been running Google Ads and Microsoft Ads simultaneously for UK and US clients for years — mostly in the context of skincare, fashion, and furniture eCommerce. The typical split is ~85% of budget on Google and ~15% on Microsoft
        on Google and £500 on Microsoft. This is not a theoretical comparison: every insight in this post
        comes from real data, real conversions, and real money spent on both platforms.
      </p>
      <p>
        PPC consultants who manage both platforms simultaneously are rare. Most choose one or the other.
        After years of parallel management, I can say with confidence: the right strategy is knowing
        <em> when</em> to use each platform and how to combine them to extract the maximum return from every pound spent.
      </p>
      <p>
        In this guide I walk through the market share reality, audience differences, CPC benchmarks, feature
        parity (both platforms have RSA, Shopping, and a PMax equivalent), patterns I see on accounts where both platforms run in parallel, and a
        decision framework you can apply to your business right now.
      </p>

      <hr />

      {/* Table of contents */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#market-share" className="text-sm text-gray-700 hover:underline">Market share reality — what 5% actually means</a></li>
          <li><a href="#audience-differences" className="text-sm text-gray-700 hover:underline">Audience differences — who are Microsoft Ads users</a></li>
          <li><a href="#linkedin-targeting" className="text-sm text-gray-700 hover:underline">LinkedIn targeting — Microsoft's exclusive advantage</a></li>
          <li><a href="#cpc-benchmarks" className="text-sm text-gray-700 hover:underline">CPC differences by industry — real benchmarks</a></li>
          <li><a href="#feature-parity" className="text-sm text-gray-700 hover:underline">Feature parity — RSA, Shopping, PMax equivalents</a></li>
          <li><a href="#real-patterns" className="text-sm text-gray-700 hover:underline">Real patterns from UK/US accounts — dual platform management</a></li>
          <li><a href="#conversions-attribution" className="text-sm text-gray-700 hover:underline">Conversions and attribution — where platforms diverge</a></li>
          <li><a href="#when-to-use" className="text-sm text-gray-700 hover:underline">When to use Microsoft Ads — decision framework</a></li>
          <li><a href="#using-both" className="text-sm text-gray-700 hover:underline">When to run both platforms simultaneously</a></li>
          <li><a href="#conclusion" className="text-sm text-gray-700 hover:underline">Conclusion and recommendations</a></li>
        </ol>
      </nav>

      <h2 id="market-share">Market share reality — what 5% actually means in numbers</h2>

      <p>
        When you tell someone that Microsoft Ads (Bing) holds 3–5% of global search market share,
        the immediate reaction is usually &quot;that seems negligible.&quot; But that figure is misleading.
        Bing/Microsoft Search processes <strong>12+ billion searches per month</strong> globally. In the UK
        (a typical UK market), Bing holds roughly 7–9% market share — above the global average.
      </p>

      <p>
        In the United States, Bing holds approximately 12% of all desktop searches. The reason: Internet
        Explorer and Edge ship with Bing as the default search engine. Every user who has never changed
        their browser settings uses Bing. That is a demographic segment worth paying close attention to
        for certain product categories.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Market</th>
              <th className="py-3 px-4 text-center font-heading font-semibold text-gray-900">Google share</th>
              <th className="py-3 px-4 text-center font-heading font-semibold text-gray-900">Bing / MS share</th>
              <th className="py-3 px-4 text-right font-heading font-semibold text-gray-900">Note</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Global</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~92%</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~3–5%</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-gray-500">StatCounter 2026</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">USA (desktop)</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~80%</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~12%</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-gray-500">Edge default effect</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">United Kingdom</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~87%</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~7–9%</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-gray-500">Relevant for UK brands</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Germany</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~88%</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~5–7%</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-gray-500">Worth testing for DE</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Serbia / Eastern Europe</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~97%</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">~2%</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-gray-500">MS Ads not a priority locally</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The practical takeaway: if you sell exclusively to local markets in Central and Eastern Europe,
        Microsoft Ads is not your priority. For businesses selling into the UK, USA, Australia, Canada,
        or Germany, Microsoft Ads is a serious channel that merits testing.
      </p>

      <hr />

      <h2 id="audience-differences">Audience differences — who are Microsoft Ads users</h2>

      <p>
        This is perhaps the most important difference between the platforms, and the one most frequently
        overlooked. Users who search on Bing are not simply &quot;smaller Google users&quot; — they are a
        statistically distinct demographic group.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-white border-2 border-blue-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700 mb-3">Google Ads — typical user</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-0">
            <li>Broad demographics (18–65+)</li>
            <li>Mobile dominant (60%+ of searches)</li>
            <li>Younger audience (25–35 centre of gravity)</li>
            <li>Mixed income profile</li>
            <li>Chrome, Android, Gmail ecosystem</li>
            <li>Open to impulse purchases</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-orange-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-orange-700 mb-3">Microsoft Ads — typical user</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-0">
            <li>Older demographics (35+, 45+ strongly represented)</li>
            <li>Desktop dominant (70%+ of searches)</li>
            <li>Higher income than average</li>
            <li>Corporate / business users (Edge, Office ecosystem)</li>
            <li>More deliberate — researches before buying</li>
            <li>Higher average order value (AOV)</li>
          </ul>
        </div>
      </div>

      <p>
        From my experience with UK skincare accounts: the audience that converts on Microsoft Ads is
        on average 8–12 years older than the Google audience. That same audience has <strong>higher
        disposable income</strong> and purchases premium product lines more frequently. For a brand
        selling skincare in the £30–£120 price range, this is a meaningful difference.
      </p>

      <p>
        Microsoft Ads users spend <strong>more time researching</strong> before purchasing. This means
        that ad copy that performs well on Google (quick benefit, urgency, punchy CTA) may not be
        optimal for Microsoft. On Bing, what works better is: detailed product information,
        social proof (reviews, customer counts), and emphasising quality over delivery speed.
      </p>

      <hr />

      <h2 id="linkedin-targeting">LinkedIn targeting — an exclusive advantage available only on Microsoft Ads</h2>

      <p>
        Microsoft acquired LinkedIn in 2016 for $26.2 billion. This acquisition was not only a business
        move — it delivered a unique targeting data set that no other search platform possesses:
        <strong> professional demographic data from LinkedIn profiles</strong>.
      </p>

      <div className="bg-slate-50 border-l-4 border-blue-500 rounded-r-xl p-6 my-8">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-3">LinkedIn Profile Targeting in Microsoft Ads</p>
        <p className="text-gray-700 mb-3 text-sm">
          In Microsoft Ads you can target search users by the following LinkedIn dimensions:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase text-gray-600 mb-2">Industry</p>
            <ul className="text-xs text-gray-600 space-y-1 mb-0">
              <li>Financial services</li>
              <li>Healthcare</li>
              <li>Technology</li>
              <li>Legal and consulting</li>
              <li>40+ categories</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase text-gray-600 mb-2">Job Function</p>
            <ul className="text-xs text-gray-600 space-y-1 mb-0">
              <li>C-level (CEO, CFO...)</li>
              <li>Director / Manager</li>
              <li>Senior individual contributor</li>
              <li>Decision makers</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs font-bold uppercase text-gray-600 mb-2">Company</p>
            <ul className="text-xs text-gray-600 space-y-1 mb-0">
              <li>Company name targeting</li>
              <li>Company size (SMB, Enterprise)</li>
              <li>Specific employer targeting</li>
            </ul>
          </div>
        </div>
      </div>

      <p>
        Practical application: if you sell a B2B SaaS tool and want to reach IT managers in the financial
        sector at companies with 500+ employees — Google Ads does not have that precision. Microsoft Ads
        can target exactly that group through LinkedIn integration, and at the search level (not just
        display). This is an enormous advantage for B2B advertisers.
      </p>

      <p>
        For eCommerce brands: LinkedIn targeting is less directly relevant, but applications exist.
        We target users in certain high-income industries — finance, law, medicine — because they are more
        likely to purchase premium skincare.
      </p>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-yellow-900 mb-2">Note on LinkedIn targeting</p>
        <p className="text-sm text-yellow-800 mb-0">
          LinkedIn Profile Targeting works as an <strong>audience bid modifier</strong>, not as exclusion
          targeting. Use it to adjust bids (+20%, +30%) towards segments that convert better — not to
          restrict reach. Always start in observation mode before applying bid adjustments.
        </p>
      </div>

      <hr />

      <h2 id="cpc-benchmarks">CPC differences by industry — real benchmarks</h2>

      <p>
        Lower CPC on Microsoft Ads is not a myth — it is a consistent reality explained by lower competition.
        Fewer advertisers use Microsoft Ads, which means fewer bids in each auction, which means lower cost
        per click. From my experience with UK skincare and fashion accounts, Microsoft CPCs are consistently 35–45% lower than
        Google CPCs for identical search terms.
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Industry</th>
              <th className="py-3 px-4 text-center font-heading font-semibold text-gray-900">Google CPC (UK avg.)</th>
              <th className="py-3 px-4 text-center font-heading font-semibold text-gray-900">Microsoft CPC (UK avg.)</th>
              <th className="py-3 px-4 text-right font-heading font-semibold text-gray-900">Saving</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Skincare / Beauty</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£0.45–£0.90</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£0.25–£0.50</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-green-700 font-semibold">~40%</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Financial services</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£3.00–£8.00</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£1.80–£4.50</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-green-700 font-semibold">~40%</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">B2B SaaS / Software</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£2.00–£6.00</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£1.00–£3.20</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-green-700 font-semibold">~45%</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Legal services</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£4.00–£12.00</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£2.00–£6.50</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-green-700 font-semibold">~45%</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">Hobbies and leisure</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£0.30–£0.70</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£0.18–£0.40</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-green-700 font-semibold">~40%</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200 font-medium">eCommerce (general)</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£0.40–£1.20</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">£0.22–£0.65</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 text-green-700 font-semibold">~40–45%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Important caveat: lower CPC does not automatically mean better ROAS. If search volume on Bing
        is 10x smaller and CPC is 40% lower but conversion rate is similar — the maths works. But if
        conversion rate is lower due to different traffic quality, CPC savings disappear in higher CPA.
        Always look at CPA (Cost Per Acquisition), not CPC alone.
      </p>

      <p>
        From practice: I consistently see a lower conversion rate on Bing versus Google for identical products,
        but a higher average AOV — the older audience buys more premium lines. Net result: CPA is
        similar, but POAS (Profit on Ad Spend) is slightly better on Microsoft due to higher AOV.
      </p>

      <hr />

      <h2 id="feature-parity">Feature parity — RSA, Shopping, PMax equivalents in 2026</h2>

      <p>
        One of the biggest developments in Microsoft Ads over the past few years: aggressive parity
        pursuit with Google. Here is where things stand in 2026:
      </p>

      <div className="space-y-4 my-8">
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">R</span>
            <div>
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Responsive Search Ads (RSA)</h3>
              <p className="text-sm text-gray-600 mb-2">
                Both platforms have RSA format — 15 headlines, 4 descriptions, Google/Microsoft combines
                automatically. Key difference: Microsoft Ads RSA performance insights are less granular
                than Google&apos;s (Asset performance labels are Basic vs. Google&apos;s Good/Best/Low/Learning).
                Character limits are identical (30 for headline, 90 for description).
              </p>
              <p className="text-xs text-gray-500 mb-0">
                Tactic: reuse the same headlines and descriptions from Google — Microsoft&apos;s import tool
                automatically pulls campaigns from Google Ads.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">Sh</span>
            <div>
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Microsoft Shopping Campaigns</h3>
              <p className="text-sm text-gray-600 mb-2">
                Direct Google Shopping equivalent — Microsoft Merchant Center, product feed (same format
                as Google), Shopping campaigns with Product Groups. The feed can be imported directly
                from Google Merchant Center. On accounts where we run both platforms, we run parallel Shopping campaigns on both
                platforms with the same feed and adjusted bids.
              </p>
              <p className="text-xs text-gray-500 mb-0">
                Key difference: Microsoft Shopping lacks Google&apos;s Shopping Intelligence tab and provides
                less impression share data, but core functionality is identical.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">P</span>
            <div>
              <h3 className="text-base font-heading font-bold mt-0 mb-1">Performance Max equivalent — Microsoft Audience Campaigns + Smart Shopping</h3>
              <p className="text-sm text-gray-600 mb-2">
                Microsoft does not have an identical PMax, but it has the Audience Network (equivalent
                to Google Display/YouTube network) and Smart Shopping campaigns that automatically
                distribute budget across Search and Shopping. In 2025, Performance Max launched in
                beta on Microsoft Ads — gradual rollout throughout 2026.
              </p>
              <p className="text-xs text-gray-500 mb-0">
                From practice: Audience Network campaigns deliver lower CPCs than Google Display, but
                also lower intent. We use it for remarketing, not cold traffic.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">AI</span>
            <div>
              <h3 className="text-base font-heading font-bold mt-0 mb-1">AI and automation — where Google leads</h3>
              <p className="text-sm text-gray-600 mb-2">
                Google&apos;s Smart Bidding (tROAS, tCPA, Maximize Conversions) is more mature and reliable
                due to the sheer volume of conversion data it processes. Microsoft Smart Bidding works,
                but requires more time to learn and more conversions to stabilise. For accounts with
                fewer than 30 conversions per month, Microsoft Smart Bidding can be unstable.
              </p>
              <p className="text-xs text-gray-500 mb-0">
                Recommendation: start with Manual CPC or Enhanced CPC on Microsoft Ads until you have
                accumulated 30+ conversions per month, then transition to tROAS or tCPA.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 text-left font-heading font-semibold text-gray-900">Feature</th>
              <th className="py-3 px-4 text-center font-heading font-semibold text-gray-900">Google Ads</th>
              <th className="py-3 px-4 text-center font-heading font-semibold text-gray-900">Microsoft Ads</th>
              <th className="py-3 px-4 text-right font-heading font-semibold text-gray-900">Leader</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200">RSA format</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Yes</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Yes</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">Tied</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">Shopping campaigns</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Yes</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Yes</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">Google (better reporting)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200">Performance Max</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Yes (mature)</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Beta</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">Google</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">Smart Bidding</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Yes (mature)</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Yes (less data)</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">Google</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200">LinkedIn targeting</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">No</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Yes</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 font-semibold text-orange-700">Microsoft</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">Audience Network (Display)</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Yes (GDN)</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Yes (MS Audience Net.)</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">Google (larger network)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b border-gray-200">Google Import tool</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">N/A</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Yes (automatic import)</td>
              <td className="py-3 px-4 text-right border-b border-gray-200 font-semibold text-orange-700">Microsoft (convenience)</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="py-3 px-4 border-b border-gray-200">Reporting granularity</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Excellent</td>
              <td className="py-3 px-4 text-center border-b border-gray-200">Good</td>
              <td className="py-3 px-4 text-right border-b border-gray-200">Google</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="real-patterns">Real patterns from UK/US accounts — dual platform management</h2>

      <p>
        From years of running both platforms simultaneously for UK and US eCommerce brands, here are the concrete
        patterns I have observed — without precise figures that are confidential, but with clear relative trends:
      </p>

      <div className="space-y-4 my-8">
        <div className="bg-white border-l-4 border-green-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">Finding 1: AOV is consistently higher on Microsoft Ads</p>
          <p className="text-sm text-gray-600 mb-0">
            Customers arriving from Bing search have on average 15–25% higher Average Order Value
            than Google customers. The older demographic purchases premium products — premium lines
            line (~£80–£120 per item) proportionally more than the entry-level line (~£20–£35). This directly
            impacts the POAS calculation.
          </p>
        </div>

        <div className="bg-white border-l-4 border-green-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">Finding 2: Microsoft import tool saves hours of work each month</p>
          <p className="text-sm text-gray-600 mb-0">
            Microsoft&apos;s &quot;Import from Google Ads&quot; feature is genuinely useful. You can automatically pull
            an entire campaign structure from Google Ads directly into Microsoft Ads. In the dual-platform workflow, the
            initial Microsoft setup took 3–4 hours instead of the typical 15–20 hours for a manual build.
            Campaigns sync monthly — new ad copy, new extensions, new negative keywords.
          </p>
        </div>

        <div className="bg-white border-l-4 border-yellow-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">Finding 3: Conversion rate is lower, but not dramatically</p>
          <p className="text-sm text-gray-600 mb-0">
            Microsoft Ads conversion rate is consistently 20–30% lower than Google for identical
            campaigns. The explanation: lower volume means less data for Smart Bidding to optimise, and
            the more deliberate demographic profile brings more &quot;window shoppers.&quot; Importantly: lower
            CVR is compensated by lower CPC, so CPA remains competitive.
          </p>
        </div>

        <div className="bg-white border-l-4 border-yellow-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">Finding 4: Desktop dominance requires adapted ad copy</p>
          <p className="text-sm text-gray-600 mb-0">
            With 70%+ desktop searches on Bing, Microsoft campaigns have different asset
            performance patterns from Google. Longer descriptions (90 characters) that detail product
            benefits outperform the short, punch-oriented headlines that dominate on mobile Google search.
            We adapted descriptions to emphasise &quot;dermatologically tested,&quot; &quot;UK-made,&quot; and specific
            ingredient benefits — information a desktop user in research mode wants to see.
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-500 rounded-r-xl p-4 shadow-card">
          <p className="text-sm font-bold text-gray-900 mb-1">Finding 5: Impression Share is easier to win on Bing</p>
          <p className="text-sm text-gray-600 mb-0">
            On Google Ads, capturing 80%+ impression share for competitive terms requires aggressive budgets.
            On Microsoft Ads, the same impression share is achievable with a 3–5x smaller budget due to fewer
            competing advertisers. A typical UK brand maintains 85%+ IS on branded searches on Bing with a budget that
            would cover only 40% IS on Google.
          </p>
        </div>
      </div>

      <hr />

      <h2 id="conversions-attribution">Conversions and attribution — where platforms diverge</h2>

      <p>
        One of the practical challenges in managing both platforms simultaneously is conversion attribution.
        A user may see an ad on Google, not purchase, then see an ad on Bing the next day and buy.
        Both platforms will credit themselves for that conversion — a phenomenon known as double counting.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 md:p-6 my-6">
        <p className="text-xs uppercase tracking-wide text-slate-400 mb-3">How to solve the attribution problem in practice</p>
        <div className="space-y-3">
          {[
            {
              br: "1.",
              txt: "Use GA4 as your source of truth — GA4 Cross-Channel attribution (Data-Driven model) gives a neutral view of each platform's contribution."
            },
            {
              br: "2.",
              txt: "Track Assisted Conversions in GA4 — Google Ads and Bing can both be assisted channels in a multi-touch journey, not always last-click."
            },
            {
              br: "3.",
              txt: "Do not optimise each platform in a vacuum — look at total revenue growth, not just platform ROAS. If both are growing, it is working."
            },
            {
              br: "4.",
              txt: "Microsoft's budget is 15% of total. If you pause Microsoft and overall revenue drops by more than 15%, the platform is delivering incremental value."
            }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 text-yellow-400 font-bold text-sm">{item.br}</span>
              <p className="text-sm text-slate-200 mb-0">{item.txt}</p>
            </div>
          ))}
        </div>
      </div>

      <p>
        Reporting differences: Google Ads has a more advanced Search Terms report, impression share
        data by auction, and Auction Insights showing competitors. Microsoft Ads offers useful LinkedIn
        demographic reporting (who is clicking by industry and job function) — but the general reporting
        interface is less intuitive than Google&apos;s, especially for granular analysis.
      </p>

      <hr />

      <h2 id="when-to-use">When to use Microsoft Ads — a decision framework</h2>

      <p>
        From my experience, Microsoft Ads is worth testing when these conditions are cumulatively met.
        If none of these apply, start with Google and optimise it before diversifying.
      </p>

      <div className="space-y-3 my-8">
        {[
          {
            check: true,
            title: "You sell into the UK, USA, Australia, Canada, or Germany",
            desc: "Microsoft Ads makes sense only in markets where Bing holds relevant market share (5%+). For purely local markets in Eastern Europe — Google is sufficient."
          },
          {
            check: true,
            title: "Your Google Ads account is stable and profitable",
            desc: "Microsoft Ads is a supplementary channel, not a substitute. If Google is not working, Microsoft will not fix it. Optimise Google first, then diversify."
          },
          {
            check: true,
            title: "Your product or service targets the 35+ demographic",
            desc: "Premium skincare, financial products, healthcare, B2B services, luxury hobbies — all categories where older demographics spend more."
          },
          {
            check: true,
            title: "B2B or professional services — LinkedIn targeting is relevant",
            desc: "This is the killer advantage of Microsoft Ads. If you are targeting business users by industry, job function, or company — there is no equivalent elsewhere."
          },
          {
            check: true,
            title: "You have the budget to manage a second platform",
            desc: "The Microsoft import tool helps, but managing two platforms still requires time. Minimum monthly spend for meaningful Microsoft Ads testing: £300–£500 (UK)."
          },
          {
            check: false,
            title: "NOT: If your Google account is underperforming",
            desc: "Diversifying when results are poor is not strategy — it is loss of focus. Fix Google first, then consider Microsoft."
          }
        ].map((item, i) => (
          <div key={i} className={`flex items-start gap-4 bg-white border rounded-xl p-4 shadow-card ${item.check ? "border-green-200" : "border-red-200"}`}>
            <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${item.check ? "bg-green-600" : "bg-red-500"}`}>
              {item.check ? "✓" : "✗"}
            </span>
            <div>
              <p className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</p>
              <p className="text-xs text-gray-600 mb-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <hr />

      <h2 id="using-both">When to run both platforms simultaneously — and how to do it efficiently</h2>

      <p>
        If you meet the criteria for Microsoft Ads, the next question is: how do you manage both platforms
        without duplicating work or creating attribution confusion? From the dual-platform experience,
        here is the system that works:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-700 mb-3">Google Ads — primary platform</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-0">
            <li>Full budget, full focus, full optimisation</li>
            <li>Smart Bidding with mature conversion data</li>
            <li>A/B testing of ad copy and landing pages</li>
            <li>PMax campaigns for scaling</li>
            <li>Shopping campaigns</li>
            <li>Remarketing for all audience segments</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wide text-orange-700 mb-3">Microsoft Ads — supplementary platform</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-0">
            <li>Monthly import from Google Ads (synchronisation)</li>
            <li>15% of total budget (starting rule)</li>
            <li>LinkedIn targeting bid adjustments for relevant segments</li>
            <li>Manual CPC or eCPC until conversions accumulate</li>
            <li>Shopping on parallel with Google</li>
            <li>Focus on branded keywords + top non-branded</li>
          </ul>
        </div>
      </div>

      <p>
        The workflow I use: every first Monday of the month, I import changes from Google
        Ads into Microsoft Ads (new ad copy, new negative keywords, bid adjustments). The monthly
        Microsoft performance review takes 45–60 minutes, versus 3–4 hours for Google. Total additional
        time for the second platform: 90 minutes per month. That is an efficient ratio for a channel that
        delivers 12–15% incremental conversions.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-green-900 mb-2">Pro tip: Microsoft Import tool in 3 steps</p>
        <ol className="text-sm text-green-800 space-y-1 mb-0 list-decimal pl-4">
          <li>Microsoft Ads → Tools → Import Campaigns → Import from Google Ads</li>
          <li>Connect your Google Ads account, select campaigns to import, map budgets</li>
          <li>Set automatic import (monthly) — you receive a notification each time with a change summary</li>
        </ol>
      </div>

      <p>
        For context on how both platforms compare against a third channel and where each fits in the
        full paid media mix:
      </p>

      <ul>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-vs-meta-ads" } }}
            className="underline font-medium"
          >
            Google Ads vs Meta Ads: Which Is Better for Your Business?
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-guide" } }}
            className="underline font-medium"
          >
            Performance Max: Complete eCommerce Guide
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-guide" } }}
            className="underline font-medium"
          >
            Google Shopping Campaigns: Complete Guide
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "how-much-does-google-ads-cost" } }}
            className="underline font-medium"
          >
            How Much Does Google Ads Cost? Prices, Budgets and ROI
          </Link>
        </li>
      </ul>

      <hr />

      <h2 id="conclusion">Conclusion — which platform for which business</h2>

      <p>
        After years of running both platforms in parallel for UK and US clients, my position is clear:
        <strong> Google Ads is non-negotiable; Microsoft Ads is worth testing for the right businesses</strong>.
      </p>

      <p>
        This is not a question of which is &quot;better&quot; — it is a question of which is primary and which
        is supplementary. Google&apos;s market share, advanced automation, and platform maturity make it
        the foundation of any paid search programme. Microsoft Ads earns its place on top of that
        foundation when: you sell to English-speaking or major Western European markets, you are
        targeting the 35+ demographic, you have a B2B component, or you simply want to capture an
        additional 5–12% of potential customers at a lower cost per click.
      </p>

      <p>
        For businesses selling internationally into the UK, USA, or Germany: a Microsoft Ads test
        campaign at £300–£500 per month can be one of the most cost-effective experiments you run.
        The asymmetry is compelling — lower competition, lower CPC, higher AOV audience, and an
        import tool that makes setup nearly effortless if you already run Google Ads.
      </p>

      <p>
        If you have questions about setting up Microsoft Ads or how to integrate both platforms into
        a coherent strategy,{" "}
        <a href="/en/contact" className="underline font-medium">
          get in touch — free 30-minute consultation.
        </a>
      </p>

      <hr />

      <h2>Frequently asked questions — Microsoft Ads vs Google Ads</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Is Microsoft Ads worth it for small businesses?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            It depends on your market. For businesses selling <strong>only locally in Eastern Europe</strong>: not worth it — Bing holds only ~2% market share there. For businesses selling into the <strong>UK, USA, Germany, or Australia</strong>: worth testing. In those markets Bing holds 7–12% of desktop search, CPC is 35–45% lower than Google, and the audience skews older and wealthier. Minimum meaningful monthly spend: £300–500 or equivalent.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How difficult is it to move Google Ads campaigns to Microsoft Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Technically, <strong>extremely straightforward</strong>. Microsoft Ads has an &quot;Import from Google Ads&quot; tool that automatically transfers your complete campaign structure (campaigns, ad groups, keywords, ads, extensions) from Google. Initial import takes 1–2 hours (settings, budget mapping, bid adjustments). In practice, monthly synchronisation is automatic and takes just 15 minutes of manual review. Smart advertisers keep Microsoft as a &quot;shadow campaign&quot; that auto-syncs with Google changes.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What is LinkedIn targeting in Microsoft Ads and how does it work?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Microsoft has owned LinkedIn since 2016, giving it access to professional profile data. In Microsoft Ads you can target search users by <strong>LinkedIn industry</strong> (40+ categories), <strong>job function</strong> (C-level, Director, Manager, Individual Contributor), and <strong>company name</strong>. This works as a <strong>bid modifier</strong> — you increase bids for segments that convert better, but you do not exclude others. Always start in observation mode, gather data, then apply bid adjustments (+15% to +30% for high-value segments). Ideal for B2B, financial services, SaaS, and professional services.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does Microsoft Ads have Shopping campaigns equivalent to Google Shopping?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Yes — Microsoft Merchant Center and Microsoft Shopping Campaigns are a functional equivalent. <strong>Same feed format</strong> (Google Shopping feed works directly on Microsoft without modification), similar campaign structure (Product Groups, bids by category), and the same visual format (image, price, store name). Differences: Microsoft lacks Google&apos;s Shopping Intelligence tab and provides less impression share data, but core functionality is identical. In practice, parallel Shopping campaigns on both platforms deliver 10–15% additional Shopping conversions with the same feed.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much budget does Microsoft Ads require?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            The rule I use: <strong>10–15% of total paid search budget</strong>. If you are spending £3,500 on Google, a sensible Microsoft test budget is £350–500. This is enough for meaningful data without compromising Google performance. Minimum viable budget for UK eCommerce: <strong>£300/month</strong> — below that, there are not enough clicks for statistically relevant conclusions. For B2B with higher CPCs, the minimum is higher (~£500+) since more expensive keywords require more budget to generate the same data volume.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Which bidding strategy should I use on Microsoft Ads at the start?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Recommendation for new Microsoft accounts: start with <strong>Enhanced CPC (eCPC)</strong> or Manual CPC. Microsoft Smart Bidding (tROAS, tCPA) requires a minimum of <strong>30 conversions per month</strong> for stable optimisation — with lower volumes, the algorithm fluctuates due to insufficient data. After 60–90 days with 30+ monthly conversions, transition to Maximize Conversions with a target CPA cap. Only consider tROAS after 6 months of solid data if that model is relevant to your business.
          </div>
        </details>
      </div>

      <hr />

      <h2>Sources and further reading</h2>

      <ul>
        <li>
          <a
            href="https://gs.statcounter.com/search-engine-market-share"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            StatCounter GlobalStats — Search Engine Market Share (April 2026)
          </a>
        </li>
        <li>
          <a
            href="https://about.ads.microsoft.com/en-us/resources/microsoft-advertising-audience"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Microsoft Advertising — Audience Profile Report
          </a>
        </li>
        <li>
          <a
            href="https://wordstream.com/google-ads-vs-bing-ads"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            WordStream — Google Ads vs Bing Ads CPC Benchmarks
          </a>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-vs-meta-ads" } }}
            className="underline"
          >
            Google Ads vs Meta Ads: Which Is Better for Your Business?
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-guide" } }}
            className="underline"
          >
            Performance Max: Complete eCommerce Guide [2026]
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-guide" } }}
            className="underline"
          >
            Google Shopping Campaigns: Complete Guide [2026]
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: "how-much-does-google-ads-cost" } }}
            className="underline"
          >
            How Much Does Google Ads Cost? Prices, Budgets and ROI [2026]
          </Link>
        </li>
      </ul>
    </>
  );
}
