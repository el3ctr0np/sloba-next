import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function ChecklistUpravljanjaEN() {
  return (
    <>
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          A universal Google Ads checklist doesn't exist. What exists is a rhythm - what gets done on the account daily, weekly, monthly - and that rhythm is derived from one number: how many conversions the account produces per month.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">50</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">conversions/month - the caution threshold</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">90</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">days before serious conclusions on a new account</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">things in the daily check</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">30 min</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">a week - enough only for a small account</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Quick answer
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Is there a universal Google Ads checklist?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          No. Two identical brands, selling the same products, need two different lists if one runs on Shopify and the other on its own platform. What actually exists is a <strong>rhythm</strong>: what gets done on that account every day, what every week, what once a month. That rhythm isn't copied off the internet - it's derived from one number: how many conversions the account produces per month.
        </p>
      </div>

      <hr />
      {/* ── Table of Contents ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#why-a-downloaded-checklist-fails" className="block py-1 text-base text-gray-700 hover:text-primary underline">Why the checklist you downloaded doesn't help</a></li>
          <li><a href="#rhythm-not-a-list" className="block py-1 text-base text-gray-700 hover:text-primary underline">What actually works: rhythm, not a list</a></li>
          <li><a href="#daily-check" className="block py-1 text-base text-gray-700 hover:text-primary underline">Daily: five minutes, three things</a></li>
          <li><a href="#conversion-threshold" className="block py-1 text-base text-gray-700 hover:text-primary underline">The threshold that decides everything else: conversion count</a></li>
          <li><a href="#search-terms" className="block py-1 text-base text-gray-700 hover:text-primary underline">Search terms: the one data point that actually paints the account</a></li>
          <li><a href="#what-you-dont-touch" className="block py-1 text-base text-gray-700 hover:text-primary underline">What you don't touch</a></li>
          <li><a href="#quarterly-review" className="block py-1 text-base text-gray-700 hover:text-primary underline">Quarterly: what doesn't make sense to review more often</a></li>
          <li><a href="#where-money-leaks" className="block py-1 text-base text-gray-700 hover:text-primary underline">Where the money actually leaks</a></li>
          <li><a href="#owner-30-minutes" className="block py-1 text-base text-gray-700 hover:text-primary underline">The business owner with thirty minutes a week</a></li>
          <li><a href="#frequently-asked-questions" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
        </ol>
      </nav>

      <h2 id="why-a-downloaded-checklist-fails">Why the checklist you downloaded doesn't help</h2>
      <p>
        Checklists on the internet exist to be downloaded. That's their entire job.
      </p>
      <p>
        Take eCommerce - say, two skincare brands. Same products, face and body care, same audience. One runs on Shopify, the other on its own platform. Those are two completely different jobs: the product feed works differently, the buyer's path through the site looks different, measurement works differently. A list that fits the first one will do nothing for the second.
      </p>
      <p>
        There's no three-hundred-question document that hands you a great checklist for one account and then for every other account you run. Every account needs its own list: what it has to have, and how it has to be set up technically.
      </p>
      <p>
        The worst advice I've seen in other people's checklists isn't wrong. It's generic. And whatever has nothing to do with your business isn't relevant to you, no matter how good it sounds.
      </p>
      <p>
        A checklist does make sense when it's built for one channel, one purpose - see the <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-audit-checklist" } }} className="underline">Performance Max audit checklist</Link>, or its interactive version, <Link href="/resursi/pmax-check" className="underline">PMax Check</Link>. The difference is that checklist doesn't claim to work for Search, for Shopping, or for someone else's account - it works exactly for what it was built for.
      </p>

      <hr />

      <h2 id="rhythm-not-a-list">What actually works: rhythm, not a list</h2>
      <p>
        The question "how many times a week should I touch the account" is framed wrong. There's no number that answers it.
      </p>
      <p>
        Every account needs its own baseline. You know exactly what gets done on it every day, every other day, every week, every other week, and once or twice a month. Once that's set, you stop asking yourself what to do today.
      </p>
      <p>
        I ran an account with a six-figure monthly budget, over forty Shopping campaigns and over forty Search campaigns, because we were targeting several markets at once. That account performed well. It didn't perform well because something happened overnight - it performed well because systematic, well-organized things got done every day and every week. The result was a consequence of the rhythm.
      </p>
      <p>
        For years I kept that by hand. Open a project management tool, any one, click into a task or a plan, and you know what's waiting for you on that account that week. Today, a system I built delivers most of those checks for me. What's left for me has moved up a level - a decision, not a check.
      </p>
      <p>
        How that rhythm breaks down into concrete weekly and monthly optimizations, week after week, is what I cover in the <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimization" } }} className="underline">Google Ads optimization guide</Link>.
      </p>

      <figure className="my-8">
        <Image src="/blog/checklist-ritam.webp" alt="A weekly calendar with daily, weekly, monthly, and quarterly Google Ads checks laid out across the days, instead of one universal to-do list" width={1200} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-sm text-gray-500 text-center mt-2">The rhythm is built around the account, not copied off the internet.</figcaption>
      </figure>

      <hr />

      <h2 id="daily-check">Daily: five minutes, three things</h2>
      <p>
        When I open an account in the morning, I don't open a report. I look at three things.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Whether spend is within the set range.</strong> <span className="text-gray-500">Not the absolute number, but relative to the average of the last seven days, then the last fifteen. I'm looking for a spike, not a figure.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Whether there are any clicks and impressions at all.</strong> <span className="text-gray-500">Sounds trivial until it happens. An account can stop for reasons that have nothing to do with you - a rejected ad, a policy restriction, a paused campaign someone else touched.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Whether conversions even belong in the daily check at all.</strong> <span className="text-gray-500">This is the one item of the three that differs from account to account, and it depends on a single thing: the conversion delay on that account. If a conversion on your account happens three days after the click on average, yesterday's number tells you nothing and shouldn't be in the daily check. If it happens the same day, it should.</span></div>
          </div>
        </div>
      </div>

      <p>
        Most people do damage here by changing something that's measured in weeks based on yesterday's number.
      </p>
      <p>
        The wider context - how this daily check fits into a full account audit - is covered in the <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-checklist" } }} className="underline">Google Ads audit checklist</Link>.
      </p>

      <hr />

      <h2 id="conversion-threshold">The threshold that decides everything else: conversion count</h2>
      <p>
        This is the one point where I agree with Google's official position.
      </p>
      <p>
        A new account needs to sit. Roughly ninety days before you take conclusions seriously.
      </p>
      <p>
        After that, everything depends on one number - how many conversions the account produces per month.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Under 50 conversions a month</h3>
          <p className="text-base text-gray-600 mb-0">This is a fragile phase. You watch it with four open eyes, because any single conversion is heavy enough to shift the picture. Changes get made rarely, and carefully.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">An account with thousands of conversions a month</h3>
          <p className="text-base text-gray-600 mb-0">Broken down to a weekly and daily level, a change to target ROAS or target CPA shows up very fast, with a lag of roughly three days. There you can act more specifically and more often, because the system has enough to learn from.</p>
        </div>
      </div>

      <p>
        The same move on those two accounts isn't the same move. That's why "how often should I change the bid strategy" is a question with no universal answer, and any checklist that gives you a number is lying.
      </p>
      <p>
        How the choice of bidding strategy shifts depending on that stage of the account is what I break down in the <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-guide" } }} className="underline">Smart Bidding guide</Link>.
      </p>

      <figure className="my-8">
        <Image src="/blog/checklist-prag-konverzija.webp" alt="Two Google Ads accounts side by side - one under 50 conversions a month, one with thousands of conversions - with different frequencies of bid strategy changes" width={1200} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-sm text-gray-500 text-center mt-2">Monthly conversion count decides how much you're allowed to touch the bid strategy.</figcaption>
      </figure>

      <hr />

      <h2 id="search-terms">Search terms: the one data point that actually paints the account</h2>
      <p>
        For years, most of my attention on Search and Shopping campaigns has stayed on the search terms report. The reason is simple.
      </p>
      <p>
        We don't know who the person behind the click is. We know rough location, we know demographics, we know whether they bought. But search terms is the only data point that tells us <strong>what that person actually wanted</strong>. It's the one that paints the whole account in different colors.
      </p>
      <p>The order I look in:</p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Traffic</strong> <span className="text-gray-500">- clicks, impressions, CTR. What that tells us about how we're showing up.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Outcome</strong> <span className="text-gray-500">- transactions, average order value, conversions. What of that turned into a sale, and at what value.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Sorting</strong> <span className="text-gray-500">- by intent, by buying behavior, by stage (TOFU, MOFU, BOFU).</span></div>
          </div>
        </div>
      </div>

      <p>
        The classic rule still holds: a search term that isn't in the account at all, has good-quality clicks and impressions, and hasn't converted in the last two weeks - goes in as a keyword so you can control it. And the reverse: a term that spends money and does nothing goes to negatives. How to keep that list running as a system rather than a one-time list from launch is what I wrote about in the <Link href={{ pathname: "/blog/[slug]", params: { slug: "negative-keywords-guide" } }} className="underline">negative keywords guide</Link>.
      </p>
      <p>
        One more thing most people don't do: pull search terms for the last six months, then the last year, then two years. You're not looking for what's happening now. You're looking for what you missed.
      </p>
      <p>
        And to be honest all the way through: even though a system handles this for me today, I still catch myself pulling everything by hand and checking it. I don't yet have the confidence to rely on automation here with my eyes closed.
      </p>

      <hr />

      <h2 id="what-you-dont-touch">What you don't touch</h2>
      <p>
        <strong>Recommendations from the Google Ads panel.</strong> I've ignored every single one of them for several years now. They're not technically wrong - they're written without a shred of insight into the account's context.
      </p>
      <p>
        Here's a dumb but honest example. You have a branded Search campaign that has to exist, because it protects your brand from competitors. It runs on manual CPC and the click costs you twenty cents. The panel suggests switching to target ROAS. You switch, and the click now costs you three dollars. The system didn't get the math wrong. The system simply didn't know why that campaign exists.
      </p>
      <p>
        That's the entire flaw of automated recommendations in one sentence.
      </p>
      <p>
        <strong>The bid strategy, three days after a change.</strong> See the section on <a href="#conversion-threshold" className="underline">the conversion threshold</a> above.
      </p>
      <p>
        <strong>Anything measured in weeks that you're about to change based on a single day.</strong>
      </p>

      <figure className="my-8">
        <Image src="/blog/checklist-ne-diraj.webp" alt="A Google Ads panel recommendation to switch bid strategy crossed out next to a manually configured branded Search campaign running a low CPC" width={1200} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-sm text-gray-500 text-center mt-2">The panel's recommendation doesn't know why the campaign exists.</figcaption>
      </figure>

      <hr />

      <h2 id="quarterly-review">Quarterly: what doesn't make sense to review more often</h2>
      <p>
        I review ads and extensions on a longer horizon. We moved away from the old ad-writing formats a long time ago; today Responsive Search Ads is where all of that consolidated, so the evaluation also has to run on a bigger sample.
      </p>
      <p>
        The question I ask there: is it worth keeping two genuinely different RSAs in an ad group, and what do I do with that test once it's done.
      </p>
      <p>
        A few years ago I ran experiments far more often. Today I run one, at most three, over six months. Not because they stopped being worth it, but because most of the experiments I used to run didn't have enough data for the result to mean anything.
      </p>

      <hr />

      <h2 id="where-money-leaks">Where the money actually leaks</h2>
      <p>
        When an account falls apart, what's on the checklist is rarely to blame.
      </p>
      <p>
        The pattern that repeats: conversions are measured wrong, and a bid strategy built on that measurement makes decisions every hour. Double counting, add-to-cart set as the primary conversion instead of purchase, a conversion that counts every time instead of once. The system dutifully optimizes toward a number that doesn't exist - and does it perfectly.
      </p>
      <p>
        The second family of mistakes is even more mundane. A final URL that points to the wrong product. A sitelink pointing to a product you no longer sell. None of that shows up in a performance report - you only see it when you click your own ad.
      </p>
      <p>
        Once you've been through this - and every senior has - you stop hunting for the mistake by list and start hunting for it by pattern.
      </p>

      <hr />

      <h2 id="owner-30-minutes">The business owner with thirty minutes a week</h2>
      <p>
        I'll be uncomfortably honest here, because the alternative is selling you something that doesn't work.
      </p>
      <p>
        An owner running their own account with thirty minutes a week can't do anything serious at all. That's not a discipline problem - it's a function of how much work the account actually requires.
      </p>
      <p>
        The one exception: if you spend very little and get up to about a hundred clicks a week. Then in those thirty minutes you can check four things:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><span className="text-gray-700">The quality of the clicks you're getting (search terms, nothing else).</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><span className="text-gray-700">Your CTR.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><span className="text-gray-700">Who you're up against in the auction on those queries.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><span className="text-gray-700">Whether you're paying too much or too little for your click.</span></div>
          </div>
        </div>
      </div>

      <p>
        Anything beyond that needs either more time or someone doing it for you. I believe that will change - tools that do serious analysis fast already exist and are becoming more accessible. But today, for an account spending real money, there's no solution that fits into thirty minutes a week.
      </p>

      <hr />

      <h2 id="frequently-asked-questions">Frequently asked questions</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Is there a Google Ads checklist that works for every account?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            No. What works for every account is a rhythm, and the content of that rhythm is derived from the conversion count and how the account sells.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How often should you check a Google Ads account?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Daily, you check whether the account is running at all and whether spend is off from the average. Everything else moves to a weekly, monthly, or quarterly rhythm, depending on the conversion count.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            When is it safe to change the bid strategy?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            When you have enough conversions for the change to be measurable. Under fifty conversions a month, every change is a guess. Leave a new account for roughly ninety days before drawing serious conclusions.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Should you follow the recommendations in the Google Ads panel?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            I don't. They don't know the context of your account, and they most often suggest a move that's correct on average and wrong for you.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How much time a week does an account need?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            I'm not giving a figure, because it would be made up. It depends on the size of the account, the number of campaigns, and how reliable the measurement is. Sometimes a weekly rhythm is too much, sometimes it's barely enough.
          </div>
        </details>
      </div>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Need a rhythm built for your own account, not someone else's checklist?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">I go through the account, look at how many conversions it produces a month, and build a review schedule that fits that stage - not a generic list off the internet. Book a free consultation.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Book a free consultation</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-checklist" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads audit checklist</p>
          <p className="text-xs text-gray-500 mb-0">A step-by-step, in-depth account audit.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimization" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads optimization guide</p>
          <p className="text-xs text-gray-500 mb-0">A weekly and monthly optimization schedule by account stage.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negative-keywords-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negative keywords guide</p>
          <p className="text-xs text-gray-500 mb-0">A system for cutting wasted spend, not a one-time list.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Smart Bidding guide</p>
          <p className="text-xs text-gray-500 mb-0">Target CPA, Target ROAS, and Maximize Conversions - when to use what.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-audit-checklist" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max audit checklist</p>
          <p className="text-xs text-gray-500 mb-0">38 checkpoints, or interactively through PMax Check.</p>
        </Link>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">The checklist matters less than the rhythm. Monthly conversion count decides what's allowed to change and how often, and the search terms report still tells you more about the account than any panel.</p>
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
