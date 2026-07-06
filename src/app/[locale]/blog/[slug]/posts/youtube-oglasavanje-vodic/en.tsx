import { Link } from "@/i18n/navigation";

export default function YouTubeAdvertisingGuideEN() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          YouTube is the second-largest search engine on the planet, with 2.5 billion monthly users. Video ads
          convert better than text because they combine visuals, sound, and emotion. Average CPV in Serbia runs
          2-3x lower than in the US/UK — which means right now is an ideal window to test video campaigns.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">6</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">video ad formats</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">€0.02</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">average CPV</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2.5B+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">monthly users</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Shorts</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">new format for 2026</p>
          </div>
        </div>
      </div>

      <p>
        If you are wondering whether YouTube advertising makes sense for your business — the short answer is
        yes, almost always. YouTube is the platform where people spend more time than on any TV channel, search
        for solutions to problems, watch product reviews, and make purchase decisions. Video lets you communicate
        in a way plain text simply cannot — through demonstration, emotion, and story.
      </p>
      <p>
        In this guide we cover everything you need to know: from ad formats and costs, through targeting options
        and campaign creation, to measuring results and avoiding the most common mistakes. Based on real experience
        managing video campaigns for 10+ clients in markets ranging from Serbia to the UK.
      </p>

      <hr />

      {/* ── Section 1: Why YouTube ── */}
      <h2>What YouTube Advertising Is and Why It Matters in 2026</h2>
      <p>
        YouTube advertising means showing video ads to users on the YouTube platform and partner sites through{" "}
        <a href="https://support.google.com/google-ads/answer/6340491?hl=en" target="_blank" rel="noopener noreferrer" className="underline">
          Google Ads Video campaigns
        </a>. Unlike Search ads, which rely on text, video combines moving image, sound, and text into a single
        format that grabs attention and builds an emotional connection.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Fact #1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">The second-largest search engine</h3>
          <p className="text-base text-gray-600 mb-0">YouTube has 2.5 billion monthly active users, and people watch more than a billion hours of video every day. More people search for information on YouTube than on Bing, Yahoo, and every other search engine combined.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Fact #2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">The Shorts explosion</h3>
          <p className="text-base text-gray-600 mb-0">YouTube Shorts generates 70+ billion daily views. Vertical short-form is the fastest-growing content type on the platform, and Shorts Ads are a new format brands are just starting to adopt — while competition is still low.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Fact #3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Cheap in Serbia</h3>
          <p className="text-base text-gray-600 mb-0">CPV (cost per view) in Serbia runs 2-3 times lower than in the US or UK. That means the same budget buys significantly more views — an ideal window to test before prices rise.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Fact #4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">A full-funnel platform</h3>
          <p className="text-base text-gray-600 mb-0">YouTube covers the entire marketing funnel: from brand awareness (bumper ads), through consideration (in-stream), to conversions (action campaigns with a CTA overlay).</p>
        </div>
      </div>

      <p>
        For more on how YouTube fits into a broader digital advertising strategy, see our{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-vs-meta" } }} className="underline font-medium">
          Google Ads vs Meta Ads guide
        </Link>.
      </p>

      <hr />

      {/* ── Section 2: 6 formats ── */}
      <h2>6 YouTube Ad Formats — Which One for What</h2>
      <p>
        YouTube offers six main ad formats, each designed for a different goal. Your format choice directly
        affects cost, reach, and the type of interaction you get with your audience. Here is an overview, alongside{" "}
        <a href="https://support.google.com/youtube/answer/2375464?hl=en" target="_blank" rel="noopener noreferrer" className="underline">
          the official Google documentation
        </a>.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Format</th>
              <th className="py-3 px-3 font-heading font-semibold">Duration</th>
              <th className="py-3 px-3 font-heading font-semibold">Billing</th>
              <th className="py-3 px-3 font-heading font-semibold">Best for</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-3 font-medium">Skippable In-Stream</td>
              <td className="py-3 px-3">No limit (skip after 5s)</td>
              <td className="py-3 px-3">CPV (pay for 30s+ view)</td>
              <td className="py-3 px-3">Consideration, engagement</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-3 font-medium">Non-Skippable In-Stream</td>
              <td className="py-3 px-3">Up to 15 seconds</td>
              <td className="py-3 px-3">CPM (per 1,000 impressions)</td>
              <td className="py-3 px-3">Brand awareness, full message delivery</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-3 font-medium">Bumper Ads</td>
              <td className="py-3 px-3">Up to 6 seconds</td>
              <td className="py-3 px-3">CPM</td>
              <td className="py-3 px-3">Reach, brand recall</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-3 font-medium">In-Feed Video Ads</td>
              <td className="py-3 px-3">No limit</td>
              <td className="py-3 px-3">CPC (per thumbnail click)</td>
              <td className="py-3 px-3">Discovery, YouTube search</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-3 font-medium">YouTube Shorts Ads</td>
              <td className="py-3 px-3">Up to 60 seconds (vertical)</td>
              <td className="py-3 px-3">CPV/CPM</td>
              <td className="py-3 px-3">Mobile-first, younger demographics</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-3 font-medium">Masthead</td>
              <td className="py-3 px-3">Variable</td>
              <td className="py-3 px-3">CPD (per day)</td>
              <td className="py-3 px-3">Massive reach, large brands</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">My recommendation for beginners</p>
        <p className="text-blue-800 text-base mb-0">
          Start with the <strong>Skippable In-Stream</strong> format. You only pay when someone watches
          30+ seconds of your video — which means your budget goes exclusively toward genuinely interested viewers.
          Ideal for testing with a €300-500 monthly budget.
        </p>
      </div>

      <hr />

      {/* ── Section 3: Costs ── */}
      <h2>How Much Does YouTube Advertising Cost</h2>
      <p>
        YouTube advertising costs depend on format, targeting, industry, and geography. Here are real numbers
        from practice alongside the industry average:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Metric</th>
              <th className="py-3 px-3 font-heading font-semibold">Global average</th>
              <th className="py-3 px-3 font-heading font-semibold">Serbia (estimate)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-3 font-medium">CPV (cost per view)</td>
              <td className="py-3 px-3">€0.02 – €0.03</td>
              <td className="py-3 px-3">€0.01 – €0.02</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-3 font-medium">CPM (cost per 1,000 impressions)</td>
              <td className="py-3 px-3">€5 – €10</td>
              <td className="py-3 px-3">€2 – €5</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-3 font-medium">Shorts CPV</td>
              <td className="py-3 px-3">€0.10 – €0.30</td>
              <td className="py-3 px-3">€0.05 – €0.15</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-3 font-medium">CPC (In-Feed format)</td>
              <td className="py-3 px-3">~€0.49</td>
              <td className="py-3 px-3">€0.15 – €0.35</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Starter budget</p>
          <p className="text-2xl font-heading font-bold text-slate-900 mb-1">€300-500</p>
          <p className="text-base text-gray-600 mb-0">For a first month of testing. Enough for 10,000-25,000 views and initial audience data.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Optimal budget</p>
          <p className="text-2xl font-heading font-bold text-slate-900 mb-1">€800-1,500</p>
          <p className="text-base text-gray-600 mb-0">For serious campaigns with remarketing, creative A/B testing, and audience optimization.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Daily minimum</p>
          <p className="text-2xl font-heading font-bold text-slate-900 mb-1">€5-10</p>
          <p className="text-base text-gray-600 mb-0">Google Ads allows daily budgets from €1, but under €5 you will not gather enough data to optimize.</p>
        </div>
      </div>

      <p>
        <strong>Important for the Serbian market:</strong> Serbia is significantly cheaper than developed markets
        because competition for YouTube Ads inventory is lower. This window will not last forever — as more
        advertisers pick up video, prices will climb.
      </p>

      <hr />

      {/* ── Section 4: Targeting ── */}
      <h2>Targeting Options — How to Reach the Right Audience</h2>
      <p>
        The power of YouTube advertising lies in precise targeting. Google Ads offers{" "}
        <a href="https://support.google.com/youtube/answer/2454017?hl=en" target="_blank" rel="noopener noreferrer" className="underline">
          7 main targeting types
        </a>{" "}
        for video campaigns:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">1. Demographic targeting</h3>
          <p className="text-base text-gray-600 mb-0">Age, gender, parental status, household income, location, language. The foundation of every campaign.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">2. Affinity Segments</h3>
          <p className="text-base text-gray-600 mb-0">People with long-term interests: &quot;sports fans&quot;, &quot;tech enthusiasts&quot;, &quot;travel buffs&quot;. Ideal for awareness campaigns.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">3. In-Market Segments</h3>
          <p className="text-base text-gray-600 mb-0">People actively researching a purchase: &quot;car buyers&quot;, &quot;insurance shoppers&quot;. Closer to conversion than Affinity segments.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">4. Custom Segments</h3>
          <p className="text-base text-gray-600 mb-0">Build your own audience based on keywords people have recently searched for on Google. The most powerful targeting type for intent-based campaigns.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">5. Placements</h3>
          <p className="text-base text-gray-600 mb-0">Pick specific YouTube channels, videos, or even categories of sites where you want your ad to appear. Control over context.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">6. Topics</h3>
          <p className="text-base text-gray-600 mb-0">Thematic categories: &quot;cooking&quot;, &quot;fitness&quot;, &quot;technology&quot;. Broader than Placements, but still contextually relevant.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card md:col-span-2">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">7. Remarketing (your audience)</h3>
          <p className="text-base text-gray-600 mb-0">
            Show ads to people who already visited your site, watched your videos, or engaged with your YouTube
            channel. The most cost-effective targeting type — more on this in our{" "}
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="underline font-medium">
              remarketing campaigns guide
            </Link>.
          </p>
        </div>
      </div>

      <hr />

      {/* ── Section 5: Step by step ── */}
      <h2>How to Create Your First YouTube Campaign — Step by Step</h2>
      <p>
        Here is a simplified process for creating your first video campaign in Google Ads. For detailed
        instructions, see{" "}
        <a href="https://support.google.com/google-ads/answer/2375497?hl=en" target="_blank" rel="noopener noreferrer" className="underline">
          Google&apos;s official guide to creating Video campaigns
        </a>.
      </p>

      <div className="space-y-3 my-6">
        {[
          { step: "1", title: "Open Google Ads → New campaign → Video", desc: "Select the Video campaign type from the menu. If you do not have a Google Ads account, creating one is free." },
          { step: "2", title: "Choose your campaign goal", desc: "Sales, Leads, Website Traffic, or Awareness and Consideration. The goal determines which formats and bidding options you get." },
          { step: "3", title: "Choose your ad format", desc: "Skippable In-Stream for engagement, Bumper for awareness, Shorts for mobile audiences. Start with one format." },
          { step: "4", title: "Set your budget and bidding", desc: "Daily or total budget. To start: Target CPV or Maximize Conversions. Minimum €5-10 daily for meaningful data." },
          { step: "5", title: "Define your targeting", desc: "Location (Serbia), language, demographics, plus at least one audience signal (In-Market, Custom Segment, or a Remarketing list)." },
          { step: "6", title: "Upload your video", desc: "The video must live on your YouTube channel (Unlisted is fine). Minimum quality: 720p, horizontal (16:9) or vertical (9:16) for Shorts." },
          { step: "7", title: "Add a CTA and companion banner", desc: "A call-to-action overlay with text (e.g. Learn more) and a URL. A companion banner (300x60px) reinforces branding." },
          { step: "8", title: "Launch and monitor", desc: "First 7 days: change nothing — let the algorithm learn. After 7 days: analyze View Rate, CPV, and conversions." },
        ].map((item) => (
          <div key={item.step} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-card">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {item.step}
            </span>
            <div>
              <p className="font-heading font-bold text-sm mb-1">{item.title}</p>
              <p className="text-base text-gray-600 mb-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <hr />

      {/* ── Section 6: Shorts ── */}
      <h2>YouTube Shorts Ads — The Fastest-Growing Format in 2026</h2>
      <p>
        YouTube Shorts Ads are vertical, fullscreen video ads that show up between organic Shorts videos.
        With 70+ billion daily views, Shorts is the fastest-growing format on the platform.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 my-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Shorts Ads — key facts</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-heading font-bold mb-2">Specs:</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Format: vertical (9:16)</li>
              <li>Duration: up to 60 seconds</li>
              <li>The first 3 seconds are critical for the hook</li>
              <li>Sound-on by default (unlike Feed)</li>
            </ul>
          </div>
          <div>
            <p className="font-heading font-bold mb-2">What&apos;s new for 2026:</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Product Ratings now available in Shorts (April 2026)</li>
              <li>Shorts Ads for eCommerce — showing ratings and prices</li>
              <li>Ideal for: brand awareness, younger demographics, impulse purchases</li>
              <li>
                More on this update in our{" "}
                <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-novosti-2026" } }} className="underline text-yellow-400">
                  Google Ads updates for 2026
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Section 7: eCommerce vs B2B ── */}
      <h2>YouTube Advertising for eCommerce vs B2B</h2>
      <p>
        Your YouTube Ads strategy looks very different depending on whether you sell products to consumers
        or services to businesses.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-green-200 rounded-xl p-5">
          <p className="text-xs uppercase tracking-wider text-green-600 font-bold mb-3">eCommerce</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-0">
            <li><strong>Formats:</strong> Shorts Ads + Skippable In-Stream</li>
            <li><strong>Creative:</strong> Product demo videos, unboxings, before/after</li>
            <li><strong>Targeting:</strong> In-Market + Custom Segments (product searches)</li>
            <li><strong>Remarketing:</strong> Cart abandoners, product page viewers</li>
            <li><strong>KPIs:</strong> ROAS, purchase conversions, view-through conversions</li>
            <li><strong>Budget:</strong> €500-1,500/month</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-blue-200 rounded-xl p-5">
          <p className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-3">B2B</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-0">
            <li><strong>Formats:</strong> Skippable In-Stream + In-Feed</li>
            <li><strong>Creative:</strong> Thought leadership, case study videos, webinar promos</li>
            <li><strong>Targeting:</strong> Custom Segments (industry-specific searches) + Placements</li>
            <li><strong>Remarketing:</strong> Website visitors, YouTube viewers</li>
            <li><strong>KPIs:</strong> Leads, webinar registrations, content engagement</li>
            <li><strong>Budget:</strong> €800-2,000/month</li>
          </ul>
        </div>
      </div>

      <hr />

      {/* ── Section 8: 7 mistakes ── */}
      <h2>7 Mistakes I See in YouTube Campaigns</h2>
      <p>
        Managing video campaigns for clients across several markets, these problems keep coming up more than
        any others. For more on general Google Ads mistakes, see our{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="underline font-medium">
          guide to the 20 costliest mistakes
        </Link>.
      </p>

      <div className="space-y-4 my-6">
        {[
          { num: "1", title: "Videos that run too long for awareness campaigns", desc: "Bumper and awareness formats need short, punchy messages. A 3-minute video for an awareness campaign is money down the drain. Stick to 15-30 seconds for top-of-funnel." },
          { num: "2", title: "No hook in the first 5 seconds", desc: "With the Skippable In-Stream format, viewers can skip after 5 seconds. If you open with a logo and a slow intro, you have already lost them. Open with a problem or a question instead." },
          { num: "3", title: "Targeting that is too broad", desc: "Serbia, all ages, all interests — that is not a strategy. The narrower and more relevant your targeting, the lower your CPV and the higher your engagement. Combine audience targeting with content targeting." },
          { num: "4", title: "No remarketing strategy", desc: "YouTube remarketing (people who have watched your videos) is the cheapest and most effective channel available. Without remarketing lists, you are leaving 80% of your video campaign's value on the table." },
          { num: "5", title: "The same video for every funnel stage", desc: "An awareness video is not the same as a conversion video. Top of funnel calls for emotion and story. Bottom of funnel calls for an offer, a price, and a CTA. Build at least 2 versions." },
          { num: "6", title: "Ignoring YouTube Analytics data", desc: "The Audience Retention graph shows you exactly where people stop watching. If 70% drop off at second 8, your intro is the problem. Use this data to optimize your creative." },
          { num: "7", title: "No CTA inside the video itself", desc: "A CTA overlay in Google Ads is not enough on its own. Build a clear call-to-action into the video content: Visit our website, Use code YOUTUBE20, Link in the description." },
        ].map((item) => (
          <div key={item.num} className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
            <p className="font-heading font-bold mb-2">Mistake #{item.num}: {item.title}</p>
            <p className="text-base text-gray-600 mb-0">{item.desc}</p>
          </div>
        ))}
      </div>

      <hr />

      {/* ── Section 9: Measuring success ── */}
      <h2>How to Measure YouTube Campaign Success</h2>
      <p>
        YouTube campaigns call for different metrics than Search campaigns. Here are the key KPIs and benchmarks.
        For proper conversion tracking, see our{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="underline font-medium">
          Conversion Tracking guide
        </Link>.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Metric</th>
              <th className="py-3 px-3 font-heading font-semibold">What it measures</th>
              <th className="py-3 px-3 font-heading font-semibold">Benchmark</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-3 font-medium">View Rate</td>
              <td className="py-3 px-3">% of people who watch 30s+ or the full video</td>
              <td className="py-3 px-3">15-30% (good), 30%+ (excellent)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-3 font-medium">CPV</td>
              <td className="py-3 px-3">Cost per qualified view</td>
              <td className="py-3 px-3">€0.02-0.05 (global average)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-3 font-medium">Watch Time</td>
              <td className="py-3 px-3">Total time people spend watching your ad</td>
              <td className="py-3 px-3">Rising = good, signals relevance</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-3 font-medium">Earned Actions</td>
              <td className="py-3 px-3">Free interactions (likes, shares, subscribes)</td>
              <td className="py-3 px-3">Bonus metric, not a primary KPI</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-3 font-medium">Conversions</td>
              <td className="py-3 px-3">Purchases, leads, sign-ups</td>
              <td className="py-3 px-3">Depends on industry and funnel</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-3 font-medium">Brand Lift</td>
              <td className="py-3 px-3">Increase in brand awareness (surveys)</td>
              <td className="py-3 px-3">Available for larger budgets (€5,000+)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── Section 10: FAQ ── */}
      <h2>FAQ — Frequently Asked Questions About YouTube Advertising</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does YouTube advertising cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Average CPV (cost per view) is €0.02-0.03 globally, and even lower in Serbia — around €0.01-0.02. The minimum daily budget is €5, but for meaningful data we recommend at least €10 daily. A starter monthly testing budget is €300-500."
                }
              },
              {
                "@type": "Question",
                name: "Is YouTube advertising effective for small businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, especially with a focus on remarketing (showing ads to people who already visited your site) and local targeting. Small businesses can start with €300 a month and get thousands of quality views. The key is precise targeting, not budget size."
                }
              },
              {
                "@type": "Question",
                name: "Which YouTube ad format is best for beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Skippable In-Stream format is ideal for beginners because you only pay for views longer than 30 seconds. If a viewer skips after 5 seconds, you pay nothing. That means your budget goes exclusively toward genuinely interested viewers."
                }
              },
              {
                "@type": "Question",
                name: "Do I need a professional video for YouTube ads?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not necessarily. Quality affects results, but the Shorts format allows casual, phone-shot content that can be very effective. For In-Stream formats we recommend at least semi-professional quality — good audio matters more than a perfect picture."
                }
              },
              {
                "@type": "Question",
                name: "How long does it take to see results from YouTube campaigns?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Awareness campaigns: 2-4 weeks for visible results in brand lift. Conversion campaigns: 4-8 weeks for stable conversion data. The algorithm needs 7-14 days of learning before it starts optimizing effectively."
                }
              },
              {
                "@type": "Question",
                name: "Does YouTube Ads work for the Serbian market?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. CPV in Serbia runs 2-3 times lower than in US/UK markets, meaning more views for the same budget. Competition for ad inventory is lower, and YouTube penetration in Serbia is high — most internet users regularly use the platform."
                }
              },
              {
                "@type": "Question",
                name: "What are YouTube Shorts Ads?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "YouTube Shorts Ads are vertical, fullscreen video ads that show up between organic Shorts videos in the mobile app. The format is growing fast — Shorts get 70+ billion daily views. They are ideal for brand awareness and reaching younger demographics."
                }
              },
              {
                "@type": "Question",
                name: "Can I use YouTube Ads without a YouTube channel?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Technically yes — you can use an Unlisted video. But we recommend creating a channel because it enables a YouTube viewer remarketing list, analytics, and builds brand credibility. A channel is free and takes 10 minutes to set up."
                }
              }
            ]
          })
        }}
      />

      <div className="space-y-3 my-6">
        {[
          { q: "How much does YouTube advertising cost?", a: "Average CPV (cost per view) is €0.02-0.03 globally, and even lower in Serbia — around €0.01-0.02. The minimum daily budget is €5, but for meaningful data we recommend at least €10 daily. A starter monthly testing budget is €300-500." },
          { q: "Is YouTube advertising effective for small businesses?", a: "Yes, especially with a focus on remarketing (showing ads to people who already visited your site) and local targeting. Small businesses can start with €300 a month and get thousands of quality views. The key is precise targeting, not budget size." },
          { q: "Which YouTube ad format is best for beginners?", a: "The Skippable In-Stream format is ideal for beginners because you only pay for views longer than 30 seconds. If a viewer skips after 5 seconds, you pay nothing. That means your budget goes exclusively toward genuinely interested viewers." },
          { q: "Do I need a professional video for YouTube ads?", a: "Not necessarily. Quality affects results, but the Shorts format allows casual, phone-shot content that can be very effective. For In-Stream formats we recommend at least semi-professional quality — good audio matters more than a perfect picture." },
          { q: "How long does it take to see results from YouTube campaigns?", a: "Awareness campaigns: 2-4 weeks for visible results in brand lift. Conversion campaigns: 4-8 weeks for stable conversion data. The algorithm needs 7-14 days of learning before it starts optimizing effectively." },
          { q: "Does YouTube Ads work for the Serbian market?", a: "Yes. CPV in Serbia runs 2-3 times lower than in US/UK markets, meaning more views for the same budget. Competition for ad inventory is lower, and YouTube penetration in Serbia is high — most internet users regularly use the platform." },
          { q: "What are YouTube Shorts Ads?", a: "YouTube Shorts Ads are vertical, fullscreen video ads that show up between organic Shorts videos in the mobile app. The format is growing fast — Shorts get 70+ billion daily views. They are ideal for brand awareness and reaching younger demographics." },
          { q: "Can I use YouTube Ads without a YouTube channel?", a: "Technically yes — you can use an Unlisted video. But we recommend creating a channel because it enables a YouTube viewer remarketing list, analytics, and builds brand credibility. A channel is free and takes 10 minutes to set up." },
        ].map((item, i) => (
          <details key={i} className="bg-white border-2 border-gray-200 rounded-xl group" {...(i === 0 ? { open: true } : {})}>
            <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
              {item.q}
              <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
            </summary>
            <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
              {item.a}
            </div>
          </details>
        ))}
      </div>

      <hr />

      <p>
        Detailed instructions for{" "}
        <a href="https://support.google.com/youtube/answer/2375498?hl=en" target="_blank" rel="noopener noreferrer" className="underline">
          creating effective video ads
        </a>{" "}
        can be found in the official Google documentation. And for the full picture of every Google Ads change
        in 2026, see our{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-novosti-2026" } }} className="underline font-medium">
          monthly-updated Google Ads updates guide
        </Link>.
      </p>
      <p>
        For more on our YouTube advertising services, visit the{" "}
        <Link href="/usluge/youtube-oglasi" className="underline font-medium">
          YouTube Ads management page
        </Link>.
      </p>
    </>
  );
}
