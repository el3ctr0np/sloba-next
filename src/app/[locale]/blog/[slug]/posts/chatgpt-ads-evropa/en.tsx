import { Link } from "@/i18n/navigation";
import { CheckCircle, XCircle } from "lucide-react";

export default function ChatGptAdsEuropeEN() {
  return (
    <>
      <p>
        I work with European and UK clients — Chelleon UK, Best at Printing, Pickbox HRV — and over the past few weeks I've read a stack of ChatGPT Ads guides. Almost all of them are written from a US vantage point: US minimum budgets, US-only categories, US click data. The problem is that ChatGPT Ads doesn't behave the same way in Europe, and none of the guides that just reword the American playbook say so.
      </p>
      <p>
        The European rollout landed on August 24, 2026, with self-serve accounts opening a week later on August 31. Since then, two things have changed how you should think about this channel if you work in the EU or UK: personalized ad selection isn't currently available inside the European Economic Area, and a public ad repository is arriving by the end of December under the Digital Services Act. This post is about what those two rules actually change in practice.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">ChatGPT Ads have been live across 31 European markets since August 24, 2026 — the 27 EU member states plus Iceland, Liechtenstein, Norway, and Switzerland. Inside the EEA, ads are currently selected without personalization: only the current conversation, rough location, and language. By the end of December 2026, the Digital Services Act brings a public ad repository — visibility into competitors' campaigns on a known date.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">31</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">European markets since 8/24</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">No personalization</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">across the EEA and Switzerland</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Dec 2026</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">public ad repository (DSA)</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8" id="istorija-izmena">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-700 mb-2 font-semibold">🔄 Living guide — change history</p>
        <p className="text-sm text-gray-600 mb-3">This guide gets updated as European rules evolve. What's changed:</p>
        <ul className="text-sm text-gray-700 space-y-1 mb-0 list-disc pl-5">
          <li><strong>September 2026:</strong> first version — European rollout, EEA personalization, the consent model, the DSA ad repository, allowed categories, and first steps for a European brand.</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Quick answer
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Do ChatGPT Ads work in Europe?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          Yes — since August 24, 2026, ChatGPT Ads have been live across all 27 EU member states plus Iceland, Liechtenstein, Norway, and Switzerland, with self-serve accounts open since August 31, 2026. The catch versus the US: inside the European Economic Area, ad selection currently runs <strong>without personalization</strong> — only the current conversation, rough location, and language, with no memory or history of past conversations.
        </p>
      </div>

      <hr />
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#rollout" className="block py-1 text-base text-gray-700 hover:text-primary underline">The European rollout</a></li>
          <li><a href="#personalization" className="block py-1 text-base text-gray-700 hover:text-primary underline">No personalization: what it actually means</a></li>
          <li><a href="#consent" className="block py-1 text-base text-gray-700 hover:text-primary underline">The consent model and oversight</a></li>
          <li><a href="#dsa" className="block py-1 text-base text-gray-700 hover:text-primary underline">DSA: a public ad repository by end of 2026</a></li>
          <li><a href="#categories" className="block py-1 text-base text-gray-700 hover:text-primary underline">The categories that hurt Europe</a></li>
          <li><a href="#next-steps" className="block py-1 text-base text-gray-700 hover:text-primary underline">What a European brand should do now</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
        </ol>
      </nav>

      <h2 id="rollout">The European rollout</h2>
      <p>
        OpenAI announced the expansion to 31 European markets on August 18, 2026, and ads started showing to users on August 24, 2026. That covers all 27 EU member states plus Iceland, Liechtenstein, Norway, and Switzerland — grouped together in OpenAI's own communication as the "European market." Self-serve buying through Ads Manager opened a week later, on August 31, 2026, alongside India and parts of the Middle East and North Africa.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Aug 18, 2026 — announcement</strong> <span className="text-gray-500">OpenAI announces the ChatGPT Ads expansion to 31 European markets.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Aug 24, 2026 — ads go live</strong> <span className="text-gray-500">Users across the EU, Iceland, Liechtenstein, Norway, and Switzerland start seeing ads, without personalization.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Aug 31, 2026 — self-serve opens</strong> <span className="text-gray-500">Ads Manager becomes directly available to European advertisers, no intermediary needed.</span></div>
          </div>
        </div>
      </div>

      <p>
        Ads in ChatGPT are only shown to logged-in users on the <strong>Free and Go</strong> plans. Plus, Pro, Business, Enterprise, and Edu users see no ads at all. Also ad-free: users under 18, Temporary Chats, and the Atlas browser. A Free user can opt out of ads in exchange for lower message limits, under Settings → Ads controls.
      </p>
      <p>
        Worth remembering: there are two different lists that get mixed up constantly — the list of markets where ads are shown to users (41 countries globally, including these 31 European ones) and the list of countries where a business can open a self-serve account (47 countries). For Europe the two line up — all 31 markets sit on both lists — but for some other regions they don't, so it's worth checking the specific market rather than assuming.
      </p>

      <hr />

      <h2 id="personalization">No personalization: what it actually means</h2>
      <p>
        This is the biggest difference from the US, and the part fewest European teams actually understand. Inside the European Economic Area and Switzerland, personalized ads aren't currently available. The ad isn't chosen based on who you are — only on what's happening in that specific conversation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><CheckCircle size={14} strokeWidth={1.5} className="text-green-600" /> What's used</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Current conversation, rough location, language</h3>
          <p className="text-base text-gray-600 mb-0">The ad is chosen based on the topic and intent of the conversation happening right now, plus the user's rough location and the language they're chatting in. That's the entire signal.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><XCircle size={14} strokeWidth={1.5} className="text-red-500" /> What's not used</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Memory, past conversations, ad history</h3>
          <p className="text-base text-gray-600 mb-0">No access to past conversations, no memory of the user, no history of previously shown ads — everything that's part of the signal in the US currently doesn't exist in Europe.</p>
        </div>
      </div>

      <p>
        The strategic consequence: in Europe, there's currently no audience layer for an average message and average creative to hide behind. In the US, a campaign with weaker targeting can partly compensate through narrow audiences and behavioral history. In Europe that safety net doesn't exist — <strong>context hints (the free-text description of a conversation topic set at the ad group level) and the creative itself carry the entire mechanism</strong>. If they don't match the topic and tone of the conversation, the ad simply won't show where it should.
      </p>
      <p>
        It's also worth knowing that opting out in Europe doesn't remove ads entirely — it only changes which ads a user sees. A European user who has turned off personalization (wherever it's available) still stays in the ad inventory; the selection just runs through a different path.
      </p>

      <hr />

      <h2 id="consent">The consent model and oversight</h2>
      <p>
        Oversight of ChatGPT Ads in Europe sits with <strong>OpenAI Ireland Ltd</strong>, designated as the data controller, with Ireland's Data Protection Commission (DPC) as the competent regulator — the same model several other large tech companies with European headquarters in Ireland use.
      </p>
      <p>
        When personalization is eventually introduced in Europe, it will be built on <strong>explicit user consent</strong>, not on a "legitimate interest" basis, which in other contexts has often been used as a workaround. The privacy policy was updated on August 14, 2026, ahead of the European launch.
      </p>
      <p>
        It's worth staying realistic about what an advertiser can actually get out of this: an advertiser never receives conversation content, history, memories, name, email, precise location, or IP address — only aggregated performance data. That's true globally, not just in Europe, but combined with the absence of personalization it means a European advertiser is working with less signal than a US counterpart, on both sides of that line.
      </p>

      <hr />

      <h2 id="dsa">DSA: a public ad repository by end of 2026</h2>
      <p>
        On August 31, 2026, the European Commission designated ChatGPT a <strong>Very Large Online Search Engine (VLOSE)</strong> under the Digital Services Act, based on 159.1 million monthly EU users. That designation carries concrete obligations, with a compliance deadline of <strong>end of December 2026</strong>.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-slate-900 mb-2">What the VLOSE designation actually requires</p>
        <p className="text-sm text-gray-700 mb-0">Per-ad transparency (Art. 26), a ban on profiling minors for advertising (Art. 28(2)), and a public ad repository retained for a year (Art. 39) — covering ad content, advertiser name, the period an ad ran, targeting parameters, and reach.</p>
      </div>

      <p>
        In practice, that's "Meta Ad Library for ChatGPT" — just with a known date for when it starts working. For advertisers, it means competitors' campaigns, their copy, run dates, and targeting will become publicly visible by the end of the year. Whoever prepares to use that for competitive research heads into 2027 with a level of visibility that hasn't existed on any other AI platform so far.
      </p>

      <hr />

      <h2 id="categories">The categories that hurt Europe</h2>
      <p>
        The policy in effect since August 31, 2026 (openai.com/policies/ad-policies) currently allows only a limited set of consumer categories. For three categories European consultants and agencies ask about the most — financial services, healthcare, and legal services — advertising is currently permitted only for US-based advertisers, with manual approval.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Category</th>
              <th className="py-3 px-3 font-heading font-semibold">Status in Europe</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">eCommerce, household &amp; consumer goods</td>
              <td className="py-3 px-3"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Allowed</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3">Travel &amp; entertainment</td>
              <td className="py-3 px-3"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Allowed</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Digital products</td>
              <td className="py-3 px-3"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Allowed</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3">Education &amp; local services</td>
              <td className="py-3 px-3"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Allowed</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Financial services</td>
              <td className="py-3 px-3"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">US-only</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3">Healthcare</td>
              <td className="py-3 px-3"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">US-only</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Legal services</td>
              <td className="py-3 px-3"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">US-only</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        That's a large, widely overlooked demand gap. A European clinic, law firm, or fintech currently cannot advertise on ChatGPT no matter how much budget they have — the category is locked at the policy level, not the account level. If you're working with a client in one of those three verticals, this is the first thing to check, before any pitch goes out.
      </p>

      <hr />

      <h2 id="next-steps">What a European brand should do now</h2>
      <p>
        The order I follow when a European client asks whether they should get into ChatGPT Ads.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Check the category</strong> <span className="text-gray-500">— if the client is in financial services, healthcare, or legal, the conversation ends here until the policy changes.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Open the account and set up the OAIQ pixel / Conversions API before the first ad</strong> <span className="text-gray-500">— tracking needs to be live before launch, not fixed after the first report.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Write a context hint strategy for how European buyers actually talk</strong> <span className="text-gray-500">— including local languages where relevant, since the ad is also selected by the language of the conversation, not just the topic.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Start with a small research budget</strong> <span className="text-gray-500">— this is a channel test, not a Search replacement. Without personalization in Europe, the first cycle exists to see how context hints and creative actually perform.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Treat analytics as the source of truth, not the Ads Manager dashboard</strong> <span className="text-gray-500">— practitioners have reported gaps between the clicks the platform claims and the sessions analytics actually sees. The cause hasn't been established, but it's worth flagging to the client upfront, not after the first report lands.</span></div>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="faq">Frequently asked questions</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Which European countries do ChatGPT Ads run in?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            All 27 EU member states plus Iceland, Liechtenstein, Norway, and Switzerland — 31 markets in total. Ads started showing to users on August 24, 2026, and self-serve accounts for advertisers opened on August 31, 2026. Outside that list, in the region, that leaves Serbia and the rest of the non-EU Western Balkans.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I target by audience in the EU?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Not the way you're used to on other platforms. Inside the European Economic Area and Switzerland, ads are currently selected without personalization — only the current conversation, rough location, and language factor in. There's no memory, past conversation, or ad history feeding the choice. What an advertiser still controls is context hints at the ad group level and geo targeting, but both are a much blunter tool than the audience targeting you're likely used to.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What is the DSA ad repository, and when is it coming?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            On August 31, 2026, the European Commission designated ChatGPT a Very Large Online Search Engine under the Digital Services Act, with a compliance deadline of end of December 2026. Part of that obligation is a public ad repository — a registry that stores ad content, advertiser name, the period an ad ran, targeting parameters, and reach, kept publicly available for a year. In practice it's similar to what Meta Ad Library does for Facebook and Instagram ads, just for ChatGPT.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            What if my country isn't on the supported list?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            You can still advertise if your business has a real legal entity registered in a supported market — for example, an EU or UK entity. Registering a shell entity elsewhere purely to get around a geographic block isn't allowed under the policy, which explicitly prohibits misrepresenting a business's location. There's no waitlist for unsupported countries either — an account can be created with a notification for when the market opens, but that doesn't grant earlier access.
          </div>
        </details>
      </div>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Thinking about ChatGPT Ads for a European account?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">I help European and UK brands figure out whether ChatGPT Ads is worth testing, and get context hints, tracking, and budget set up correctly before the first ad goes live. Book a free consultation.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Book a free consultation</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/chatgpt-ads" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">ChatGPT Ads service</p>
          <p className="text-xs text-gray-500 mb-0">Setup, targeting, and management of ChatGPT Ads campaigns for European accounts.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">ChatGPT Ads: The Complete Guide</p>
          <p className="text-xs text-gray-500 mb-0">A full walkthrough of formats, targeting, buying, and what real results actually look like.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-vs-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">ChatGPT Ads vs Google Ads</p>
          <p className="text-xs text-gray-500 mb-0">Where each channel wins, and how to combine them inside one budget.</p>
        </Link>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Europe plays by its own rules — without personalization, context hints and creative carry the entire mechanism, and a public ad repository arriving by year-end changes how much you can see about competitors. Whoever understands that before the pitch has an edge the American playbook doesn't cover.</p>
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
