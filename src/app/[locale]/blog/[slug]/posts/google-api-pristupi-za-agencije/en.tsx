import { Link } from "@/i18n/navigation";

export default function GoogleApiAccessGuideForAgenciesPost() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">In short</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          One Google Cloud project covers Google Ads, GA4, Search Console, Tag Manager, Merchant Center, and Data Manager — you don&apos;t need a separate application per tool. The mistake I&apos;ve seen most (and made myself): leaving the OAuth consent screen in Testing mode, which kills your refresh token after exactly 7 days.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Cloud project for every API</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7 days</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Before a Testing-mode token dies</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">6</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">APIs covered in this guide</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">$0</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Cost of setting any of this up</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Quick answer</p>
        <p className="text-base text-gray-700 mb-0">
          A PPC agency running more than a handful of accounts needs access to six services: <strong>Google Ads API</strong> (reporting and campaign management), <strong>GA4 Data and Admin API</strong> (reporting and account configuration), <strong>Search Console API</strong> (search performance and indexing), <strong>Tag Manager API</strong> (tag auditing and editing), <strong>Merchant Center API</strong> (feed status and product issues), and the newer <strong>Data Manager API</strong> (server-side audience data). All six authenticate through the same Google Cloud project — create it once, enable the APIs you need, and generate OAuth credentials for each.
        </p>
      </div>

      <p>
        By the time I finished applying for Google Ads API Basic Access, it was clear the developer token was only one piece of a bigger picture. The same agency automating Google Ads reporting also needs GA4 data for attribution, Search Console data for the SEO side, Tag Manager for tracking audits, and Merchant Center for Shopping feed diagnostics. Each of those tools has its own API, its own scope, and its own rules — but they all sit under one roof: a Google Cloud project you set up once and then keep adding services to.
      </p>
      <p>
        This guide covers that whole roof, starting from zero. We go through the foundation (the Cloud project and OAuth consent screen, including a mistake that once killed one of my tokens), then through each of the six APIs individually, with the scope you need and where to enable it. Google Ads API developer tokens and the brand verification pilot get their own dedicated guide, linked in the relevant section below — here I just place it in the wider context.
      </p>

      <hr />
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#why-api-access" className="block py-1 text-base text-gray-700 hover:text-primary underline">Why an agency needs API access</a></li>
          <li><a href="#foundation-cloud-project-oauth" className="block py-1 text-base text-gray-700 hover:text-primary underline">The foundation: Cloud project and OAuth consent screen</a></li>
          <li><a href="#google-ads-api" className="block py-1 text-base text-gray-700 hover:text-primary underline">Google Ads API</a></li>
          <li><a href="#ga4-api" className="block py-1 text-base text-gray-700 hover:text-primary underline">Google Analytics 4: Data and Admin API</a></li>
          <li><a href="#search-console-api" className="block py-1 text-base text-gray-700 hover:text-primary underline">Google Search Console API</a></li>
          <li><a href="#tag-manager-api" className="block py-1 text-base text-gray-700 hover:text-primary underline">Google Tag Manager API</a></li>
          <li><a href="#merchant-center-api" className="block py-1 text-base text-gray-700 hover:text-primary underline">Merchant Center: Content API and Merchant API</a></li>
          <li><a href="#data-manager-api" className="block py-1 text-base text-gray-700 hover:text-primary underline">Data Manager API (server-side Customer Match)</a></li>
          <li><a href="#overview-table" className="block py-1 text-base text-gray-700 hover:text-primary underline">Overview: which API for what</a></li>
          <li><a href="#setup-checklist" className="block py-1 text-base text-gray-700 hover:text-primary underline">Checklist: setup from zero</a></li>
          <li><a href="#faq-google-api-access" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
        </ol>
      </nav>

      <h2 id="why-api-access">Why an agency needs API access</h2>
      <p>
        With a handful of accounts, the browser interface is plenty. Open Google Ads, check performance, open GA4, cross-check the numbers, done. The problem shows up once the account count climbs into double digits while the hours in your day stay fixed. Opening every account by hand each morning stops being sustainable, and that&apos;s the point where API access stops being a nice-to-have and becomes the only realistic way the work fits into a day.
      </p>
      <p>
        Concretely, API access enables four things the interface doesn&apos;t give you on its own: automated reporting that generates itself without you triggering it, dashboards that pull data from multiple accounts into one place, bulk operations (changing budgets across ten accounts at once, for example), and increasingly, agentic automation where an AI agent reads data through the API and proposes or executes actions against rules you&apos;ve defined in advance.
      </p>
      <p>
        All of that requires your agency to have programmatic access to data, not just browser access. Which brings up the first, and probably most important, insight: you don&apos;t need a separate &quot;application&quot; per tool.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          One Google Cloud project is your only &quot;application&quot; as far as Google is concerned. Enable Google Ads API, GA4 API, Search Console API, Tag Manager API, and the rest inside it — every additional API is just an Enable click in the same project, not a new project and not a new registration.
        </p>
      </div>

      <hr />

      <h2 id="foundation-cloud-project-oauth">The foundation: Cloud project and OAuth consent screen</h2>
      <p>
        Before you touch any individual API, two things need to be set up once, at the project level. The first is the Google Cloud project itself — free, created in a couple of minutes through Google Cloud Console, and it acts as the container you&apos;ll enable APIs inside. The second, and far more important for long-term stability, is the OAuth consent screen.
      </p>
      <p>
        The OAuth consent screen is what a user sees when your application (meaning you, as the developer) requests permission to access their Google data — an Ads account, a GA4 property, Search Console. Every OAuth flow goes through it, regardless of which of the six APIs in this guide you&apos;re calling. And that&apos;s exactly where a mistake hides that looks harmless until it isn&apos;t.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">The key lesson</p>
        <p className="text-yellow-800 text-base mb-0">
          If the OAuth consent screen stays in <strong>Testing</strong> status, the refresh token you get expires after <strong>7 days</strong> — regardless of how well everything else is configured. Any script relying on that token stops working exactly a week later, usually with no obvious error explaining why. This happened to me on a Merchant Center token: the project sat in Testing mode, everything worked flawlessly for a few days, and then the refresh simply stopped. The fix is straightforward once you know to do it deliberately: in Cloud Console, under OAuth consent screen (or Google Auth Platform → Audience), switch the publishing status from Testing to <strong>In production</strong>.
        </p>
      </div>

      <p>
        Switching to Production doesn&apos;t mean your app has to be public or reviewed by a human before it works — for internal tools using standard scopes, this is largely a self-service action with no waiting involved. Google only requires human verification for certain &quot;sensitive&quot; or &quot;restricted&quot; scopes (broad Gmail access, for instance), and for what an agency typically uses — Ads, Analytics, Search Console, Tag Manager, Merchant Center — you can set the status to In production yourself, immediately.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">From my experience</p>
        <p className="text-blue-800 text-base mb-0">
          The first time you set up a Cloud project, do this step immediately, before you even generate your first OAuth credential. Testing mode only makes sense while you&apos;re literally testing authentication in the first hour or two — the moment a script is expected to run for more than a week, the status needs to be Production. It&apos;s a cheap step to get right up front, and an expensive one to discover you skipped through a dead automation.
        </p>
      </div>

      <hr />

      <h2 id="google-ads-api">Google Ads API</h2>
      <p>
        The Google Ads API is probably the first API an agency reaches for, since it lifts reporting and campaign management to a level manual work simply can&apos;t match. Access sits at the manager (MCC) account level through a developer token, and that token moves through three tiers: <strong>Explorer access</strong> (the default, up to 2,880 operations a day against production accounts), <strong>Basic Access</strong> (up to 15,000 operations a day plus the planning services), and <strong>Standard Access</strong> (no daily cap, built for high-volume tools).
      </p>
      <p>
        Explorer level is enough to pull reports and make basic changes on your own accounts, but it comes with two constraints you feel quickly: the 2,880 daily operations cap and fully blocked planning services. Calls to the Keyword Planner portion of the API — keyword ideas, search volume estimates — return a <code>DEVELOPER_TOKEN_NOT_APPROVED</code> error until you're approved for Basic Access. That's the main practical reason to submit the application before the limits actually start to hurt.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Dedicated guide</p>
        <p className="text-blue-800 text-base mb-0">
          The full Basic Access application process, including the newer brand verification pilot that cuts review from days or weeks down to a few hours, is covered step by step in a separate guide:{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-vodic" } }} className="underline text-blue-700 font-medium">
            Google Ads API Basic Access: Step-by-Step Guide
          </Link>. Here I&apos;ll just note the OAuth scope you need is <code>https://www.googleapis.com/auth/adwords</code>, and it all runs through the same Cloud project you set up in the previous section.
        </p>
      </div>

      <hr />

      <h2 id="ga4-api">Google Analytics 4: Data and Admin API</h2>
      <p>
        GA4 exposes two separate APIs that do different jobs. The <strong>Data API</strong> is what you call for the actual reports — metrics and dimensions, essentially everything you see under Reports in the GA4 interface, just programmatically. The <strong>Admin API</strong> manages account structure: properties, streams, custom dimensions and metrics, user access. For a typical dashboard or nightly report, the Data API is what you&apos;re actually using; the Admin API comes into play when you&apos;re automating account setup itself, not pulling data out of it.
      </p>
      <p>
        Both are enabled from the same place: Cloud Console → APIs & Services → Library, search &quot;Google Analytics Data API&quot; and &quot;Google Analytics Admin API,&quot; then Enable on each. For pure data reads, which covers roughly 95% of agency use, the <code>https://www.googleapis.com/auth/analytics.readonly</code> scope is all you need. If you also plan to write — creating custom dimensions via the API, for instance — you need a broader <code>analytics.edit</code> or <code>analytics.manage.users</code> scope, depending on the operation.
      </p>
      <p>
        The OAuth flow is the same as every other API in this guide: credentials from your Cloud project, the user (the GA4 account owner, or you, if you&apos;ve been added as a user on the property) grants access, and you get a refresh token you store and reuse for future calls without prompting for login again.
      </p>

      <hr />

      <h2 id="search-console-api">Google Search Console API</h2>
      <p>
        The Search Console API covers three things that matter to an agency running the SEO side, or even one just tracking organic traffic as context for Ads performance: <strong>Search Analytics</strong> (queries, clicks, impressions, position — the base layer of any SEO report or dashboard), <strong>URL Inspection</strong> (indexing status for individual URLs), and <strong>Sitemaps</strong> (submitting and checking sitemap status).
      </p>
      <p>
        The scope you need for reading is <code>https://www.googleapis.com/auth/webmasters.readonly</code>; for actions like submitting a sitemap, you need the broader <code>webmasters</code> scope without the &quot;.readonly&quot; suffix.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">A note on granularity</p>
        <p className="text-yellow-800 text-base mb-0">
          Having the right OAuth scope isn&apos;t enough on its own. Search Console access is granted per property (a domain or URL-prefix), not globally for the account calling the API. If you haven&apos;t been added as a user (owner or full user) on a specific property inside Search Console itself, an API call for that site will come back empty or with an error, no matter how correctly your Cloud project is configured. For an agency with ten clients, that means ten separate access grants — one per domain.
        </p>
      </div>

      <hr />

      <h2 id="tag-manager-api">Google Tag Manager API</h2>
      <p>
        The Tag Manager API earns its keep when auditing or editing tags, triggers, and variables spans multiple accounts, instead of clicking through each container&apos;s interface one at a time. A practical example: a script that runs weekly across every client&apos;s GTM container and checks whether the Conversion Linker tag is present and active, or one that adds the same trigger to several containers at once.
      </p>
      <p>
        The API splits access into several scopes depending on what you&apos;re doing: <code>tagmanager.readonly</code> for reading structure, <code>tagmanager.edit.containers</code> for editing tags/triggers/variables in a workspace, <code>tagmanager.edit.containerversions</code> for creating versions, and <code>tagmanager.publish</code> for publishing. A readonly scope is enough for a pure audit; the moment you&apos;re editing and publishing, you need all four.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Watch the rate limits</p>
        <p className="text-yellow-800 text-base mb-0">
          Tag Manager API has notably more conservative rate limits (requests per minute) than, say, the Google Ads API. If you&apos;re writing a script that walks through a large number of tags or several containers at once, break it into smaller batches with pauses between calls — otherwise you&apos;ll hit 429 (too many requests) errors mid-run, usually on the exact container where you needed the change to land cleanly.
        </p>
      </div>

      <hr />

      <h2 id="merchant-center-api">Merchant Center: Content API and Merchant API</h2>
      <p>
        For anyone running Shopping campaigns, the Merchant Center API solves one specific problem: feed status and product issues normally get checked manually, product by product, through an interface that wasn&apos;t built for a quick scan across tens of thousands of items. Programmatic access gives you feed status, diagnostics data, and a list of product issues (disapproved, warning, missing attributes) in a structured form you can filter, sort, and drop straight into a dashboard.
      </p>
      <p>
        There are two versions in play: the older <strong>Content API for Shopping v2.1</strong>, still functional and used by most existing integrations, and the newer, more unified <strong>Merchant API</strong>, which Google is gradually steering new development toward. If you&apos;re starting fresh, it&apos;s worth checking the official documentation for the current status of both before committing, since the line between them keeps shifting. The scope for either is the same: <code>https://www.googleapis.com/auth/content</code>.
      </p>
      <p>
        For the full Merchant Center account setup (verification, feed attributes, feed delivery methods), I have a dedicated guide I won&apos;t repeat here:{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "merchant-center-srbija-setup" } }} className="underline text-blue-700 font-medium">
          Google Merchant Center for Serbia: Complete Setup Guide
        </Link>.
      </p>

      <hr />

      <h2 id="data-manager-api">Data Manager API (server-side Customer Match)</h2>
      <p>
        This is the newest addition covered here, live from 2025 onward. The Data Manager API solves a problem that used to require manual work: sending audience and conversion data (Customer Match lists, for example) directly from a server, without manually exporting a CSV and uploading it through the Google Ads interface. For an agency running a CRM integration into Google Ads, that means a new or updated customer list can sync automatically instead of someone uploading a file once a month.
      </p>
      <p>
        The scope you need is <code>https://www.googleapis.com/auth/datamanager</code>. If you&apos;re already running offline conversion import for B2B clients, this is a natural next step — server-side audience data follows a similar pattern to server-side conversion data, just carrying a different kind of signal.
      </p>

      <hr />

      <h2 id="overview-table">Overview: which API for what</h2>
      <p>
        The seven rows below are a reference to come back to whenever you&apos;re setting up a new Cloud project or adding an API to an existing one.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">API</th>
              <th className="py-3 px-3 font-heading font-semibold">What it&apos;s for</th>
              <th className="py-3 px-3 font-heading font-semibold">Base scope</th>
              <th className="py-3 px-3 font-heading font-semibold">Where to enable it</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Google Ads API</td>
              <td className="py-3 px-3">Reporting, campaign management, bulk changes</td>
              <td className="py-3 px-3"><code>.../auth/adwords</code></td>
              <td className="py-3 px-3">API Center (MCC) + Cloud Console</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">GA4 Data API</td>
              <td className="py-3 px-3">Reports, metrics, dimensions programmatically</td>
              <td className="py-3 px-3"><code>.../auth/analytics.readonly</code></td>
              <td className="py-3 px-3">Cloud Console → API Library</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">GA4 Admin API</td>
              <td className="py-3 px-3">Accounts, properties, custom dimensions</td>
              <td className="py-3 px-3"><code>.../auth/analytics.edit</code></td>
              <td className="py-3 px-3">Cloud Console → API Library</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Search Console API</td>
              <td className="py-3 px-3">Search Analytics, URL Inspection, sitemaps</td>
              <td className="py-3 px-3"><code>.../auth/webmasters.readonly</code></td>
              <td className="py-3 px-3">Cloud Console → API Library</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Tag Manager API</td>
              <td className="py-3 px-3">Auditing and editing tags/triggers, publishing</td>
              <td className="py-3 px-3"><code>tagmanager.readonly</code> / <code>edit.containers</code> / <code>publish</code></td>
              <td className="py-3 px-3">Cloud Console → API Library</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Merchant Center (Content/Merchant API)</td>
              <td className="py-3 px-3">Feed status, diagnostics, product issues</td>
              <td className="py-3 px-3"><code>.../auth/content</code></td>
              <td className="py-3 px-3">Cloud Console → API Library</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Data Manager API</td>
              <td className="py-3 px-3">Server-side audience/conversion data</td>
              <td className="py-3 px-3"><code>.../auth/datamanager</code></td>
              <td className="py-3 px-3">Cloud Console → API Library</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2 id="setup-checklist">Checklist: setup from zero</h2>
      <p>
        If you&apos;re starting from a completely clean slate, the order of operations looks like this. The same sequence applies no matter which of the six APIs is your priority.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Create a Google Cloud project</strong> <span className="text-gray-500">— free, through Cloud Console, a couple of minutes. This is the single container for every API in this guide.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Set up the OAuth consent screen and switch it to Production immediately</strong> <span className="text-gray-500">— don&apos;t leave the status on Testing, since the refresh token expires after 7 days. This is the step that gets skipped most often, and it&apos;s the most expensive one to skip.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Enable the APIs you need</strong> <span className="text-gray-500">— Cloud Console → APIs & Services → Library, search by name, Enable each one individually.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Generate OAuth2 credentials</strong> <span className="text-gray-500">— client ID and client secret (or a service account, depending on the flow you use), through the Credentials section of the same project.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Run the first OAuth flow and store the refresh token securely</strong> <span className="text-gray-500">— the user (you, or the account owner) grants access once, and you store the refresh token somewhere safe (an env variable, a secret manager), not in code that gets pushed to Git.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>For the Google Ads API — apply for a developer token</strong> <span className="text-gray-500">— this is the only step with a review wait; the other five APIs work immediately once enabled and authenticated.</span></div>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="faq-google-api-access">Frequently asked questions</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do I need a separate Cloud project for each API?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. One Google Cloud project covers every API described in this guide. You enable them individually through the API Library inside that same project, while the OAuth consent screen and credentials stay shared. Separate projects only make sense if you want hard access separation by client or team, not because any single API requires it."
                }
              },
              {
                "@type": "Question",
                name: "What happens if I forget to switch the OAuth consent screen to Production?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The refresh token you generate while the status is Testing stops working after 7 days, regardless of how correctly the underlying API call is set up. Any automation relying on it simply stops running exactly a week later. The fix is to switch the status to In production before a script is meant to run long-term, not after."
                }
              },
              {
                "@type": "Question",
                name: "Does API access cost anything?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, creating a Cloud project, enabling APIs, and generating OAuth credentials are all free. The Google Ads API developer token is also free to apply for and use. Cost only shows up if you exceed the free quotas on individual APIs through very high call volume, which is rare for a typical agency managing a dozen accounts."
                }
              },
              {
                "@type": "Question",
                name: "Which API should I set up first?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If you manage Google Ads accounts, start with the Google Ads API since it delivers the fastest, most measurable payoff — automated reporting and alerts. The GA4 Data API is a natural next step since it's almost always used alongside Ads data for attribution and reporting."
                }
              },
              {
                "@type": "Question",
                name: "What's the difference between Content API for Shopping and the new Merchant API?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Content API for Shopping v2.1 is the older, still-functional API that most existing Merchant Center integrations use. Merchant API is the newer, more unified successor Google is steering new development toward. For new integrations, it's worth checking the current status of both in the official documentation before committing, since the line between them keeps shifting."
                }
              },
              {
                "@type": "Question",
                name: "Do I need a developer to build any of this?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A basic understanding helps, but you don't need to be a developer in the traditional sense. Google publishes official client libraries in multiple languages for nearly every API in this guide, and AI coding assistants can now write and maintain most of the reporting and automation scripts an agency needs, given a clear description of what should happen."
                }
              },
              {
                "@type": "Question",
                name: "Does one refresh token cover multiple client accounts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on the API. For the Google Ads API, a developer token at the MCC level automatically covers every client account linked underneath it, with a single token. For GA4, Search Console, and Merchant Center, access is granted per account or property, so you need to be added as a user for each new client property or account, even if your OAuth credentials stay the same."
                }
              }
            ]
          })
        }}
      />

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Do I need a separate Cloud project for each API?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          No. One Google Cloud project covers every API described in this guide. You enable them individually through the API Library inside that same project, while the OAuth consent screen and credentials stay shared. Separate projects only make sense if you want hard access separation by client or team, not because any single API requires it.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          What happens if I forget to switch the OAuth consent screen to Production?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          The refresh token you generate while the status is Testing stops working after 7 days, regardless of how correctly the underlying API call is set up. Any automation relying on it simply stops running exactly a week later. The fix is to switch the status to In production before a script is meant to run long-term, not after.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Does API access cost anything?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          No, creating a Cloud project, enabling APIs, and generating OAuth credentials are all free. The Google Ads API developer token is also free to apply for and use. Cost only shows up if you exceed the free quotas on individual APIs through very high call volume, which is rare for a typical agency managing a dozen accounts.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Which API should I set up first?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          If you manage Google Ads accounts, start with the Google Ads API since it delivers the fastest, most measurable payoff — automated reporting and alerts. The GA4 Data API is a natural next step since it&apos;s almost always used alongside Ads data for attribution and reporting.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          What&apos;s the difference between Content API for Shopping and the new Merchant API?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Content API for Shopping v2.1 is the older, still-functional API that most existing Merchant Center integrations use. Merchant API is the newer, more unified successor Google is steering new development toward. For new integrations, it&apos;s worth checking the current status of both in the official documentation before committing, since the line between them keeps shifting.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Do I need a developer to build any of this?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          A basic understanding helps, but you don&apos;t need to be a developer in the traditional sense. Google publishes official client libraries in multiple languages for nearly every API in this guide, and AI coding assistants can now write and maintain most of the reporting and automation scripts an agency needs, given a clear description of what should happen.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Does one refresh token cover multiple client accounts?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          It depends on the API. For the Google Ads API, a developer token at the MCC level automatically covers every client account linked underneath it, with a single token. For GA4, Search Console, and Merchant Center, access is granted per account or property, so you need to be added as a user for each new client property or account, even if your OAuth credentials stay the same.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Need a complete API setup for your agency?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          I set up the Cloud project, OAuth access, and API integrations (Ads, GA4, Search Console, Tag Manager, Merchant Center) plus nightly automation for agencies and teams managing multiple accounts.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Schedule a free consultation
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads API Basic Access</p>
          <p className="text-xs text-gray-500 mb-0">Detailed guide to the developer token and brand verification.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "merchant-center-srbija-setup" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Merchant Center Setup</p>
          <p className="text-xs text-gray-500 mb-0">Complete account setup, feed attributes, and verification.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "ga4-google-ads-integracija" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">GA4 and Google Ads Integration</p>
          <p className="text-xs text-gray-500 mb-0">How to connect GA4 data to Google Ads optimization.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "offline-conversion-import-b2b" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Offline Conversion Import for B2B</p>
          <p className="text-xs text-gray-500 mb-0">Server-side conversion data delivery through the API.</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: July 11, 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Author: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
