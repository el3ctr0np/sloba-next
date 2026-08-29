import { Link } from "@/i18n/navigation";

export default function NegativeKeywordsListEN() {
  return (
    <>
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          This is the list, not the lecture. 422 negative keywords across 15 copy-paste categories — universal, brand safety, and five industry verticals — plus a ready-made AI prompt that builds a version customized to your business in a couple of minutes.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">422</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">terms, ready to copy</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">15</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">categories</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">AI prompt template</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">match types, flagged per list</p>
          </div>
        </div>
      </div>

      {/* ── Featured-snippet Quick Answer block ── */}
      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Quick Answer
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          What is a comprehensive negative keywords list?
        </p>
        <p className="text-sm md:text-base text-gray-700 mb-0 leading-relaxed">
          A comprehensive negative keyword list is a ready-to-use set of terms, organized by category, that you paste directly into Google Ads to stop your ads showing on searches that were never going to convert. This page covers 15 categories — 8 universal (free seekers, bargain hunters, job seekers, DIY, research, used goods, reviews, negative sentiment), a dedicated brand safety and adult-content list, and 5 industry-specific lists (B2B/SaaS, eCommerce, lead-gen/local services, local business, education) — each formatted as a single block you can select and paste straight into a negative keyword list or a Google Ads Editor import.
        </p>
      </div>

      <p className="text-sm text-gray-600 -mt-2">
        Need the strategy behind these lists first — match types, list organization, how to build your own from the Search Terms report? That is covered in the{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negative-keywords-guide" } }} className="underline font-semibold">
          Negative Keywords Guide
        </Link>
        . This page skips the theory and gives you the terms.
      </p>

      <hr />

      {/* ── How to use these lists ── */}
      <h2>How to Use These Lists</h2>
      <p>
        Every list below is one block of text, one term per line. Click into it, select all, copy, and paste into a Negative Keyword List in Google Ads (Tools → Shared library → Negative keyword lists) or into a CSV for Google Ads Editor. Three steps before anything goes live.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Pick the categories that match your business</strong> <span className="text-gray-500">— not all 15. A SaaS company does not need the local-services list, an eCommerce store does not need the education list.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Delete any term that is actually part of your offer</strong> <span className="text-gray-500">— if you sell refurbished electronics, remove &quot;refurbished&quot; before pasting. Read every line once, do not bulk-import blind.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Apply the recommended match type</strong> <span className="text-gray-500">— each category below is labeled Negative Broad or Negative Phrase. If you need a refresher on what that changes, see the match type table in the </span><Link href={{ pathname: "/blog/[slug]", params: { slug: "negative-keywords-guide" } }} className="underline text-gray-700 font-semibold">Negative Keywords Guide</Link><span className="text-gray-500">.</span></div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">These are starter lists, not a finished account</p>
        <p className="text-yellow-800 text-base mb-0">
          No generic list — mine included — knows your business. &quot;Free&quot; is a negative for most accounts, but not if you sell a freemium SaaS tool. &quot;Used&quot; is a negative for a furniture brand, but it is the entire query set for a resale marketplace. Check every category against your own offer before it goes live, and watch the Search Terms report for the first two weeks after.
        </p>
      </div>

      <hr />

      {/* ── Universal Negative List ── */}
      <h2>Universal Negative List — 217 Terms, 8 Categories</h2>
      <p>
        Relevant to almost every account, regardless of industry. Start here, then add the brand safety and industry lists that apply to you.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">1. Free &amp; No-Cost <span className="text-gray-400 font-normal text-sm">(36 terms)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`free\nfreeware\ngratis\nfree download\nfree trial\nfree sample\nfree version\nfree alternative\nno cost\nat no cost\ncomplimentary\ngiveaway\nfree shipping\nfree delivery\nfree consultation\nfree quote\nfree demo\nfreemium\nopen source\nopensource\ncrack\ncracked\nkeygen\nlicense key free\ntorrent\npirated\npirate bay\nwarez\nno charge\nzero cost\ncost free\nget for free\nobtain for free\nfree forever\nlifetime free\nfree plan`}</pre>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">2. Cheap, Budget &amp; Discount <span className="text-gray-400 font-normal text-sm">(28 terms)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`cheap\ncheapest\nlow cost\nlowest price\nbudget\non a budget\naffordable\ndiscount\ndiscounted\nclearance\ncloseout\nbargain\nsale\non sale\ncoupon\ncoupon code\npromo code\nvoucher\ndeal\ndeals\nbest deal\nwholesale\nbulk price\nfactory price\ndropship price\nliquidation\noverstock\noff-brand`}</pre>
        <p className="text-xs text-gray-500 mt-2 mb-0">Watch four of these on Negative Broad: &quot;sale&quot; and &quot;on sale&quot; block any query containing that word at all, including &quot;for sale&quot; and &quot;yard sale&quot; — a problem if your own pages use that phrasing. &quot;deal&quot; and &quot;deals&quot; catch &quot;no deal&quot; and &quot;big deal&quot; the same way. Drop any of the four, or move them to Phrase, if that traffic matters for your account.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">3. Used, Secondhand &amp; Refurbished <span className="text-gray-400 font-normal text-sm">(22 terms)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`used\nsecond hand\nsecondhand\npre-owned\npreowned\nrefurbished\nreconditioned\nrenewed\nopen box\nex-display\nex demo\nsalvage\nscrap\nparts only\nfor parts\nebay used\nfacebook marketplace\ngumtree\nvinted\nthrift\nthrift store\nconsignment`}</pre>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">4. DIY, Homemade &amp; Self-Build <span className="text-gray-400 font-normal text-sm">(20 terms)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`DIY\ndo it yourself\nmake your own\nhomemade\nhome made\nbuild your own\nbuild it yourself\nself install\nself build\nfrom scratch\nhandmade\ncraft your own\nsew your own\nassembly instructions\nkit form\nplans\nblueprint\npattern free\ntemplate free\nmold your own`}</pre>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">5. Research, Informational &amp; Educational <span className="text-gray-400 font-normal text-sm">(35 terms)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Phrase</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`what is\nwhat does mean\ndefinition\nmeaning of\nwikipedia\nwiki\nhow to\nhow do\nhow does\ntutorial\nguide\nstep by step\ncourse\nonline course\ntraining\nwebinar\nworkshop\nclass\nlesson\nlearn\nlearn online\nexplained\nexplainer\noverview\nintroduction to\nbasics of\nfundamentals\nfor beginners\nfor dummies\ncheat sheet\ninfographic\nebook\npdf guide\nwhitepaper\ncase study`}</pre>
        <p className="text-xs text-gray-500 mt-2 mb-0">Phrase earns its keep on the multi-word entries here — &quot;how to&quot;, &quot;step by step&quot;, &quot;for beginners&quot; — where it keeps the match to that exact wording. For a single-word term like &quot;guide&quot; or &quot;course&quot;, Phrase and Broad behave identically, so do not expect Phrase to narrow anything for those lines.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">6. Jobs, Careers &amp; Employment <span className="text-gray-400 font-normal text-sm">(28 terms)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`jobs\njob\ncareer\ncareers\nhiring\nnow hiring\nemployment\nemployer\nvacancy\nvacancies\nsalary\nsalaries\nwage\nwages\npay scale\nCV\nresume\ncover letter\napprentice\napprenticeship\ninternship\nintern\nwork from home\nremote job\nfreelance job\ncontractor position\nstaffing agency\nrecruitment agency`}</pre>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">7. Reviews, Comparison &amp; Forums <span className="text-gray-400 font-normal text-sm">(24 terms)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`review\nreviews\nbest\ntop 10\ntop 5\nvs\nversus\ncompared to\ncomparison\nalternative to\nalternatives\ncompetitor\nrating\nratings\nrated\nreddit\nforum\ncommunity forum\nquora\ntrustpilot\ncomplaints board\nscam report\nis it legit\nis it a scam`}</pre>
        <p className="text-xs text-gray-500 mt-2 mb-0">If you deliberately bid on competitor names, keep &quot;competitor&quot; and &quot;alternative to&quot; out of this block — that is a strategy choice, not a default. Also watch &quot;best&quot;, &quot;top 10&quot;, and &quot;top 5&quot; on Negative Broad: they block compound searches like &quot;[your product] best price&quot; or listicle-style branded queries — drop them or move to Phrase if that traffic converts for you.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">8. Negative Sentiment &amp; Risk <span className="text-gray-400 font-normal text-sm">(24 terms)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`problem\nproblems\nissue\nissues\nbroken\nnot working\ndoesn't work\nfault\nfaulty\ndefect\ncomplaint\ncomplaints\nscam\nfraud\nfraudulent\nfake\ncounterfeit\ndangerous\nhazard\nrisk\nrecall\nlawsuit\nclass action\nrefund policy`}</pre>
      </div>

      <hr />

      {/* ── Brand Safety & Adult Content ── */}
      <h2>Brand Safety &amp; Adult Content Negatives — 40 Terms</h2>
      <p>
        This category does not exist in most negative keyword templates I have seen published, so it is worth explaining why it is here. Shopping, Performance Max, and Display-adjacent placements can serve your ads next to inventory you would rather not be near, and search queries themselves sometimes combine an entirely innocent product with an adult modifier — &quot;[product] nude&quot;, &quot;[product] naked&quot; — which is a real query pattern for clothing, underwear, fitness, wellness, massage, and photography services, not just for obviously adult categories.
      </p>
      <p>
        Two separate lists below: adult/NSFW terms, and a short violence/illegal list for accounts where that is also a relevant risk (weapons-adjacent, health, legal, financial verticals).
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">Adult / NSFW Content <span className="text-gray-400 font-normal text-sm">(30 terms)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`porn\nporno\npornography\nsex\nsexy\nsexual\nxxx\nnude\nnudes\nnaked\nnudity\nstrip\nstripper\nescort\nescorts\nadult content\nadult site\nadult video\nhentai\nerotic\nerotica\nfetish\nonlyfans\ncam girl\nwebcam sex\nhookup\nhookup app\ndating hookup\nmilf\ncamgirl`}</pre>
        <p className="text-xs text-gray-500 mt-2 mb-0">One entry here is riskier than the rest: &quot;strip&quot; blocks any query containing that word, including &quot;strip mall&quot;, &quot;strip steak&quot;, &quot;comic strip&quot;, or &quot;strip lighting&quot; — drop it if any of those are relevant to your business.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">Violence / Illegal <span className="text-gray-400 font-normal text-sm">(10 terms)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`violence\ngore\nweapon\ngun for sale\nillegal\ndrugs\ndrug dealer\nhate speech\nextremist\nterrorism`}</pre>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">This list is a supplement, not a substitute</p>
        <p className="text-blue-800 text-base mb-0">
          Negative keywords only block the search query itself. For placement-level brand safety on Display and Video (avoiding specific sites or content categories entirely), use Google Ads&apos; own placement exclusions and content exclusion settings at the account or campaign level — the two work together, one does not replace the other.
        </p>
      </div>

      <hr />

      {/* ── AI Generation Section ── */}
      <h2>Generate Your Own List with AI — the 2026 Way</h2>
      <p>
        The lists above are generic by design — they apply to almost any account. The fastest way to get a list that actually knows your business is to hand a language model your specifics. Paste the prompt below into ChatGPT, Claude, or Gemini, fill in the six inputs, and it will return a list organized the same way this page is, with a match type and a reason attached to every term.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 md:p-6 my-6">
        <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-3">Copy this prompt</p>
        <pre className="bg-black/30 rounded-lg p-4 text-sm font-mono text-slate-100 overflow-x-auto whitespace-pre-wrap">{`You are a Google Ads negative keyword specialist. I will give you information about my business — use it to generate a negative keyword list, not a generic one.

1. Business type/vertical: [e.g. "premium furniture eCommerce, mid-range price point"]
2. Products/services I sell (list them): [paste list]
3. Locations I serve: [cities/countries]
4. Locations I explicitly do NOT serve (if relevant): [list]
5. Terms that LOOK negative but are actually relevant to my offer (exceptions — do not suggest these): [e.g. "free shipping" IS something I offer]
6. Campaign type: [Search / Shopping / Performance Max / Local Services]

Generate a negative keyword list organized into these categories: universal (free, cheap, jobs, DIY, informational/how-to, used/secondhand, reviews/forums, negative sentiment), brand safety (adult/NSFW, violence, illegal — only if relevant to my product category), industry-specific for my vertical, location (searches for places I do not serve), and competitor brands (list separately — flag that bidding on competitor terms is a legitimate strategy some businesses choose deliberately, so this is my decision, not a default).

For every keyword: suggest match type (Broad/Phrase/Exact) with a one-line reason, and a confidence level (High/Medium/Low) — flag anything ambiguous for me to decide.

Do not include any word that matches my own product or service names, even partially, unless I've told you it's irrelevant to my offer.

Output as a table: Keyword | Match Type | Category | Confidence | Reason`}</pre>
      </div>

      <p>
        What the model gives back is a draft, not a finished import. Every account I have run this on has produced at least a few suggestions that would have blocked a real buyer if pasted in blind. Run every list — AI-generated or otherwise — through these seven checks first.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">7 rules before you add a single AI-suggested term</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
            <div><strong>Cross-check against your real keyword list.</strong> <span className="text-gray-500">The same word can be a negative for you and a selling point for the next account — &quot;free shipping&quot; is a good example.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
            <div><strong>Check volume in the Search Terms report before adding at Broad.</strong> <span className="text-gray-500">For anything ambiguous, start at Phrase and widen only after you confirm zero conversions.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
            <div><strong>Never let the model add competitor names as negatives on its own.</strong> <span className="text-gray-500">Bidding on competitor terms is a deliberate strategy for some businesses — blocking them is your call, not a default it should make for you.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
            <div><strong>Re-verify location negatives against your actual service area.</strong> <span className="text-gray-500">The model only knows what you typed in the prompt — it has no independent view of where you actually operate.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
            <div><strong>Manually review every &quot;Low confidence&quot; item.</strong> <span className="text-gray-500">Do not bulk-import those — that flag exists so you look at them one at a time.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">6</span>
            <div><strong>Add in batches of 20-30, then watch for a week or two.</strong> <span className="text-gray-500">Check the Search Terms report after each batch before adding the next — confirms you have not blocked a converting query.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-xs font-bold">7</span>
            <div><strong>Treat the AI adult/NSFW list as a supplement, not your brand safety setup.</strong> <span className="text-gray-500">Pair it with Google Ads&apos; own placement and content exclusions — negative keywords alone are not a content safety system.</span></div>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Industry lists ── */}
      <h2>Industry-Specific Negative Lists — 165 Terms, 5 Verticals</h2>
      <p>
        Beyond the universal list, every vertical has its own non-buying traffic. These five go deeper than a short bolt-on list — each one targets the specific way that industry&apos;s informational and non-commercial searches actually look.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">1. B2B / SaaS — Blocking Consumer Intent <span className="text-gray-400 font-normal text-sm">(41 terms)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Phrase</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`personal use\nhome use\nfor personal\nsingle user\nindividual license\nstudent discount\nstudent license\nfree for students\nnon-commercial\nnon profit discount\nnonprofit pricing\nhobbyist\nhobby project\nsmall personal project\ndownload apk\ndownload exe\nmod apk\ncracked version\nnulled\nGPL license\nlicense generator\nkeygen\nactivation key free\nbypass license\njailbreak\nroot\nopen source alternative\nself hosted free\ndocker free\ngithub free\napi free tier\ntrial extension hack\nlifetime deal\nappsumo\none time payment lifetime\nreseller license\nwhite label free\ndeveloper jobs\nprogrammer salary\nIT career\nsysadmin jobs`}</pre>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">2. eCommerce — Blocking Informational Intent <span className="text-gray-400 font-normal text-sm">(39 terms)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Phrase</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`size guide\nsize chart\nhow to measure\nhow to clean\nhow to wash\nhow to style\nhow to wear\noutfit ideas\nwhat to wear with\ncare instructions\ningredients list\nnutritional information\nmaterial composition\nproduct manual\ninstruction manual\nspec sheet\nspecifications\ndatasheet\nunboxing\nunboxing video\nteardown\nhow it's made\nmanufacturing process\nsupplier\nmanufacturer contact\nwholesale supplier\ndropshipping supplier\nprivate label manufacturer\nprint on demand\nsample pack\ncolor swatch\ncatalogue pdf\nlookbook\npress kit\nmedia kit\naffiliate program\nbecome a reseller\nreturn policy\nwarranty claim`}</pre>
        <p className="text-xs text-gray-500 mt-2 mb-0">Owners of already-purchased products search these terms too — that is fine, they are not clicking your ad to buy again. Blocking these keeps the budget on people still choosing what to buy.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">3. Lead-Gen / Local Services <span className="text-gray-400 font-normal text-sm">(36 terms)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Phrase</span>
        </div>
        <p className="text-xs text-gray-500 mb-2"><strong>Add manually (customize first):</strong> &quot;DIY [your service]&quot; — e.g. &quot;DIY plumbing repair&quot;, &quot;DIY roof repair&quot;. Left out of the block below so it never gets pasted with the brackets still in it.</p>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`how to fix myself\nself repair\nYouTube tutorial\nfree estimate calculator\ncost calculator\naverage cost of\nprice list\nprice per hour\nhourly rate\nday rate\nlicense requirements\nhow to become a\ncertification course\ntraining course\napprenticeship\nfranchise opportunity\nfranchise cost\nstart a business\nbusiness plan template\ninsurance requirements\npermit application\nDIY kit\nrent equipment\nequipment for sale\ntool rental\ncomplaint against\nfile a complaint\nsmall claims\nombudsman\nregulator\ntrade association\nunion rates\napprentice wage\nsubcontractor rates\ninvoice template\ncontract template`}</pre>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">4. Local Business — Wrong Location / Wrong Service <span className="text-gray-400 font-normal text-sm">(25 terms)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Phrase</span>
        </div>
        <p className="text-xs text-gray-500 mb-2"><strong>Add manually (customize first):</strong> towns just past your service radius (that is where wasted local spend actually concentrates); names of direct competitors, if you have chosen not to bid on them; &quot;careers at [your company]&quot;; &quot;internship at [your company]&quot;. Left out of the block below so nothing with brackets gets pasted blind.</p>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`online only\nremote service\nvirtual appointment\nnationwide\nnational chain\nmobile app version\ndelivery only\npickup only\nfranchise near me\ncorporate office\nhead office\nheadquarters\ncustomer service number\ncomplaints line\nHR department\ninvestor relations\npress inquiries\nmedia contact\nsponsorship request\ndonation request\ncharity request\nvolunteer opportunities\nboard of directors\nannual report\nshareholder`}</pre>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">5. Education / Career — For Non-Edu Businesses <span className="text-gray-400 font-normal text-sm">(24 terms)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`scholarship\nstudent loan\nfinancial aid\ngrant application\nthesis help\ndissertation help\nessay writing service\nhomework help\nexam answers\npast papers\nsyllabus\ncurriculum\nlecture notes\nprofessor\nfaculty\nadmissions\nenrollment deadline\ntuition fees\ncampus tour\ndormitory\nstudent accommodation\ngraduate jobs\nteaching assistant\nlecturer position`}</pre>
        <p className="text-xs text-gray-500 mt-2 mb-0">For anyone NOT running an educational institution — this blocks students and job seekers who wander into unrelated categories (finance, software, local services) while searching around school and career topics.</p>
      </div>

      <hr />

      {/* ── What's new in 2026 ── */}
      <h2>What Changed in Negative Keywords for 2026</h2>
      <p>
        With 422 terms across 15 categories, the question most people ask before pasting any of this in is whether there is room for it. Short answer: yes, by a wide margin. Here is where negatives can live in an account right now, with limits, straight from Google&apos;s own documentation.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Level</th>
              <th className="py-3 px-3 font-heading font-semibold">Coverage</th>
              <th className="py-3 px-3 font-heading font-semibold">Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Account-level negative list</td>
              <td className="py-3 px-3">One list, applied automatically across Search, Shopping, Performance Max, App, Smart, and Local campaigns</td>
              <td className="py-3 px-3">1,000 terms</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Shared negative keyword list</td>
              <td className="py-3 px-3">Applied to campaigns you choose, including — since 2025 — Performance Max</td>
              <td className="py-3 px-3">5,000 terms per list, up to 20 lists per account, each list appliable to up to 1,000 campaigns</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Performance Max campaign-level</td>
              <td className="py-3 px-3">Individual negatives and, since 2025, negative keyword lists directly at the campaign level — self-serve in the interface now; before that it required going through a Google rep or the API</td>
              <td className="py-3 px-3">Limit differs from the shared-list limit above — Google&apos;s <a href="https://support.google.com/google-ads/answer/15726455" target="_blank" rel="noopener noreferrer" className="underline">Performance Max negative keywords</a> page does not publish a number, so check it directly before relying on one</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">The account-level list is the one to know about</p>
        <p className="text-blue-800 text-base mb-0">
          One list set in Account Settings now covers Performance Max automatically — no need to duplicate it into every PMax campaign by hand. Source: <a href="https://support.google.com/google-ads/answer/11396330" target="_blank" rel="noopener noreferrer" className="underline">Google Ads Help — account-level negative keywords</a>.
        </p>
      </div>

      <p>
        The other detail worth remembering while you paste these in: negative match types behave differently from positive ones. Negative Broad does not expand to synonyms the way positive Broad does — block &quot;free&quot; and &quot;gratis&quot; still gets through unless you add it separately. It is not case-sensitive, so you do not need &quot;Free&quot; and &quot;free&quot; as two lines — but close variant matching, the thing that catches typos and misspellings on the positive side, does not apply to negatives at all. If a common misspelling of a term you are blocking matters for your account, add it as its own line. Full behavior and examples are in the{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negative-keywords-guide" } }} className="underline font-semibold">
          Negative Keywords Guide
        </Link>
        . Sources: <a href="https://support.google.com/google-ads/answer/2453972" target="_blank" rel="noopener noreferrer" className="underline">match type behavior</a>, <a href="https://support.google.com/google-ads/answer/15726455" target="_blank" rel="noopener noreferrer" className="underline">Performance Max negative keywords</a>, <a href="https://support.google.com/google-ads/answer/7449003" target="_blank" rel="noopener noreferrer" className="underline">negative keyword list limits</a>.
      </p>

      <hr />

      {/* ── FAQ ── */}
      <h2>Frequently Asked Questions</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Can I copy this list directly and paste it into my account?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            You can copy any block above and paste it into a Negative Keyword List or a Google Ads Editor import — that is exactly what the format is for. But read through the category first and delete anything that is actually part of your offer (free shipping, used goods, a course you sell). No published list, including this one, knows your business without that pass.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Does this list work for Shopping and Performance Max?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Yes. If you add these terms to your account-level negative list, they apply automatically to Search, Shopping, Performance Max, App, Smart, and Local campaigns. Performance Max also now accepts campaign-level negatives and negative keyword lists directly — until 2025 that required going through a Google rep or the API, and it is now self-serve in the interface. Source: <a href="https://support.google.com/google-ads/answer/15726455" target="_blank" rel="noopener noreferrer" className="underline">Performance Max negative keywords</a>.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How is this different from the Negative Keywords Guide?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            The <Link href={{ pathname: "/blog/[slug]", params: { slug: "negative-keywords-guide" } }} className="underline">Negative Keywords Guide</Link> is the how and why — match type behavior, the three-tier organization system, a real case study, how to mine your own negatives from the Search Terms report. This page is the what — 422 ready-to-paste terms across 15 categories, plus the AI prompt for building a custom set. Read the guide once, come back to this page whenever you need terms.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Should I just use AI to generate the whole list instead of this one?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Both, in that order. Start with the lists on this page — they took the guesswork out of the universal and brand safety categories. Then run the AI prompt with your specific products, locations, and exceptions to fill in what a generic list cannot know. Verify every AI suggestion against the seven rules before adding it — the model does not see your account, your Search Terms report, or your actual service area.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            How often should I update this list?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Paste the relevant categories once as a starting point, then treat the Search Terms report as the real, ongoing source — weekly for the first month of a new campaign, then at minimum monthly after that. This static list gets you to a reasonable baseline on day one; it does not replace watching what people actually search for.
          </div>
        </details>
      </div>

      <hr />

      {/* ── CTA ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          How much of your budget is leaking to searches that were never going to convert?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Free Search Terms analysis of your account — where the waste actually is, which of these categories apply to you, and what to fix first. No sales pitch, just the numbers.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/audit" className="btn-secondary inline-block">
            Book a free audit
          </Link>
          <Link href="/kontakt" className="inline-block px-6 py-3 border-2 border-slate-500 text-slate-300 rounded-lg hover:border-white hover:text-white transition-colors text-sm font-semibold">
            Talk to me instead
          </Link>
        </div>
      </div>

      <hr />

      {/* ── Related guides ── */}
      <h2>Related Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negative-keywords-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Negative Keywords Guide</p>
          <p className="text-xs text-gray-500 mb-0">Match types, organization, and how to find your own negatives</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-keyword-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Keywords — Complete Guide</p>
          <p className="text-xs text-gray-500 mb-0">From research to keyword optimization</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-checklist" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Audit Checklist</p>
          <p className="text-xs text-gray-500 mb-0">80+ points for a complete account review</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-search-campaigns-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Search Campaigns Guide</p>
          <p className="text-xs text-gray-500 mb-0">Building a Search campaign from the ground up</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: August 2026
      </div>
      <div className="text-sm text-gray-500">
        Author: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}
