import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function GoogleAdsApiBasicAccessGuidePost() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">In short</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Getting a Google Ads API developer token approved for Basic Access used to mean submitting a form and waiting — days to weeks, with almost no visibility into where you stood. On July 7, 2026, Google launched a brand verification pilot that can cut a pending review down to a few hours. Here&apos;s the exact path: token, application, Cloud project link, verification.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Hours</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">review time with brand verification</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">15,000</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">operations/day on Basic Access</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">4</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">steps from token to approval</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">$0</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">cost of the application itself</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Quick answer</p>
        <p className="text-base text-gray-700 mb-0">
          Google Ads API Basic Access is the approval level that lets a developer token pull and push data against live, production Google Ads accounts — reporting, campaign management, automation — up to 15,000 operations a day. You get it by generating a developer token in your manager account&apos;s API Center, submitting the Basic Access application with a clear description of your use case, and waiting for Google&apos;s review. Since July 7, 2026, if your application is sitting in Pending status, completing brand verification on your linked Google Cloud project can get it reviewed within hours instead of days.
        </p>
      </div>

      <p>
        Every morning, before I look at a single campaign by hand, a script has already checked all ten of my client accounts overnight — budget pacing, performance swings, disapproved ads, search terms worth turning into keywords or negatives. That script only exists because of one thing sitting quietly in my manager account: an approved Google Ads API developer token. Without it, I&apos;d be logging into ten separate accounts every day just to see what changed. With it, one person can run monitoring that used to take a small team.
      </p>
      <p>
        The developer token is the entry ticket to all of that — the API is what makes agency-grade automation possible for a single operator, whether you&apos;re pulling performance data, pushing bid changes, or feeding closed deals back into Google Ads (I wrote about that last part in{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "offline-conversion-import-b2b" } }} className="underline text-blue-700 font-medium">
          the offline conversion import guide
        </Link>
        , which also runs through the API under the hood). But getting that token past Test access and into production has historically been the slowest, most opaque part of the whole setup. I went through the old process myself — submitted the application, then waited, with no real sense of whether it would be a matter of days or weeks.
      </p>
      <p>
        That changed on July 7, 2026. Google launched a pilot that lets you complete brand verification on your Cloud project while your Basic Access application is pending, and get a review within hours. This guide walks through the whole path — token, application, Cloud project link, and the new verification shortcut — based on how I actually set mine up.
      </p>

      <hr />
      {/* ── Table of Contents ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#prerequisites" className="block py-1 text-base text-gray-700 hover:text-primary underline">Prerequisites</a></li>
          <li><a href="#step-1-get-your-developer-token" className="block py-1 text-base text-gray-700 hover:text-primary underline">Step 1 — Get your developer token</a></li>
          <li><a href="#step-2-the-basic-access-application" className="block py-1 text-base text-gray-700 hover:text-primary underline">Step 2 — The Basic Access application</a></li>
          <li><a href="#step-3-link-the-token-to-a-cloud-project" className="block py-1 text-base text-gray-700 hover:text-primary underline">Step 3 — Link the token to a Cloud project</a></li>
          <li><a href="#step-4-brand-verification-the-july-2026-pilot" className="block py-1 text-base text-gray-700 hover:text-primary underline">Step 4 — Brand verification (the July 2026 pilot)</a></li>
          <li><a href="#what-basic-access-gives-you-and-what-it-still-doesnt" className="block py-1 text-base text-gray-700 hover:text-primary underline">What Basic Access gives you — and what it still doesn&apos;t</a></li>
          <li><a href="#faq-google-ads-api-basic-access" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
        </ol>
      </nav>

      <h2 id="prerequisites">Prerequisites</h2>
      <p>
        Two things need to exist before you touch the application form. Neither costs money, and if you&apos;re already running Google Ads, you probably have the first one.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prerequisite 1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">A Google Ads account — ideally a manager account</h3>
          <p className="text-base text-gray-600 mb-0">
            The developer token lives at the manager (MCC) level, not on an individual client account. If you manage more than one account, set up an MCC first — one token issued there gives you API access to every client account linked underneath it. That&apos;s the whole reason the API scales for an agency: one approval, all accounts.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prerequisite 2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">A Google Cloud project</h3>
          <p className="text-base text-gray-600 mb-0">
            You need one anyway to generate the OAuth2 client ID and secret the API uses to authenticate — so this isn&apos;t extra work created by the new pilot, it&apos;s a step you&apos;d take regardless. Free tier is enough; the Ads API itself doesn&apos;t require billing to be enabled on the project.
          </p>
        </div>
      </div>

      <hr />

      <h2 id="step-1-get-your-developer-token">Step 1 — Get your developer token</h2>
      <p>
        In your manager account, open the API Center — under Admin in the current interface (older accounts may still show it under Tools &amp; Settings). This is where the developer token lives, and where its current access level is shown. If you&apos;ve never applied before, generating the token itself is instant — you don&apos;t need approval to get a token, only to use it against real accounts.
      </p>

      {/* IMG-01: replace with <Image src="/blog/google-ads-api-basic-access/01-api-center.webp" alt="Google Ads API Center in the manager account showing the developer token card" width={1200} height={675} /> */}
      <figure className="my-6">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center bg-gray-50">
          <p className="text-sm font-semibold text-gray-500 mb-1">[Screenshot: API Center]</p>
          <p className="text-xs text-gray-400 mb-0">API Center in the Google Ads manager account showing the developer token card and current access level</p>
        </div>
      </figure>

      <p>
        A brand new token starts at <strong>Test access</strong>. It works, but only against test accounts you create specifically for development — it cannot touch a real, live account with real campaigns and real spend. This is by design: Google doesn&apos;t hand out production access to an untested integration on day one. It&apos;s a good place to build and debug your first scripts before you have anything to lose.
      </p>

      {/* IMG-02: replace with <Image src="/blog/google-ads-api-basic-access/02-test-access-token.webp" alt="Developer token showing Test access level before applying for Basic Access" width={1200} height={675} /> */}
      <figure className="my-6">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center bg-gray-50">
          <p className="text-sm font-semibold text-gray-500 mb-1">[Screenshot: Test access]</p>
          <p className="text-xs text-gray-400 mb-0">Token showing Test access level in API Center, before the Basic Access application is submitted</p>
        </div>
      </figure>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">From my experience</p>
        <p className="text-blue-800 text-base mb-0">
          Don&apos;t wait for Basic Access to start building. Write and test your first scripts against a test account while the application is under review — reporting pulls, a basic budget check, whatever your actual use case is. By the time Basic Access comes through, you&apos;ve already worked out the authentication flow and the obvious bugs, and you can point the same code at production accounts immediately.
        </p>
      </div>

      <hr />

      <h2 id="step-2-the-basic-access-application">Step 2 — The Basic Access application</h2>
      <p>
        In API Center, next to the developer token, there&apos;s a link to apply for Basic Access. The form asks what you plan to do with the API — and this is the part that actually determines how smoothly the review goes.
      </p>

      {/* IMG-03: replace with <Image src="/blog/google-ads-api-basic-access/03-basic-access-application-form.webp" alt="Basic Access application form in the Google Ads API Center" width={1200} height={675} /> */}
      <figure className="my-6">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center bg-gray-50">
          <p className="text-sm font-semibold text-gray-500 mb-1">[Screenshot: Application form]</p>
          <p className="text-xs text-gray-400 mb-0">The Basic Access application form, showing use case and access-level fields</p>
        </div>
      </figure>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Be specific about the use case</strong> <span className="text-gray-500">— &quot;automated reporting&quot; is vague. &quot;Nightly budget pacing and performance checks across managed client accounts&quot; tells the reviewer exactly what you&apos;re building and why it needs production data.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Name the services you&apos;ll actually call</strong> <span className="text-gray-500">— reporting/GoogleAdsService for performance data, campaign and ad group management if you&apos;re pushing changes. If you don&apos;t know yet, say so honestly rather than listing everything to sound thorough.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Use a business email on your own domain</strong> <span className="text-gray-500">— not a personal Gmail address. It&apos;s a small signal, but it matters when a reviewer is trying to establish that a real business is behind the application.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Be honest about internal tool vs. external users</strong> <span className="text-gray-500">— an internal automation script for your own agency&apos;s accounts is a different, simpler review than a tool you plan to sell to other advertisers. Say which one you&apos;re building.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Describe the data flow in plain language</strong> <span className="text-gray-500">— where the data comes from (Google Ads), where it goes (your database, a dashboard, a spreadsheet), and who sees it. One or two sentences is enough; don&apos;t over-engineer the description.</span>
            </div>
          </div>
        </div>
      </div>

      {/* IMG-04: replace with <Image src="/blog/google-ads-api-basic-access/04-application-pending.webp" alt="Application status showing Pending in API Center after submission" width={1200} height={675} /> */}
      <figure className="my-6">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center bg-gray-50">
          <p className="text-sm font-semibold text-gray-500 mb-1">[Screenshot: Pending status]</p>
          <p className="text-xs text-gray-400 mb-0">Application status showing Pending in API Center right after submission</p>
        </div>
      </figure>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">What the old process actually felt like</p>
        <p className="text-yellow-800 text-base mb-0">
          When I applied, the form itself took ten minutes. The wait was the hard part — days stretching into weeks, with the status stuck on Pending and no way to know if it was moving. That uncertainty, more than the wait itself, was what made the process feel worse than it needed to be. The brand verification pilot in Step 4 exists specifically to fix that.
        </p>
      </div>

      <hr />

      <h2 id="step-3-link-the-token-to-a-cloud-project">Step 3 — Link the token to a Cloud project</h2>
      <p>
        For brand verification to count toward your token, Google needs to know which Cloud project belongs to which developer token. You&apos;d expect a form or a field for this — but per the{" "}
        <a href="https://developers.google.com/google-ads/api/docs/api-policy/brand-verification#prerequisite" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          official documentation
        </a>
        , the association happens by simply making any API call that uses your developer token together with OAuth credentials from that Cloud project. That single call ties the two together.
      </p>
      <p>
        The details that make this painless: the call can go through either the user authentication or the service account workflow, it can target a test or a production account, and it does not matter whether the call succeeds or fails. Your token&apos;s current access level doesn&apos;t matter either. The only thing that counts is that the token and the project&apos;s credentials show up in the same request.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">You&apos;ve probably already done this</p>
        <p className="text-blue-800 text-base mb-0">
          If you tested your connection against a test account in Step 1 using your OAuth credentials, the association already happened without you noticing. If not, the simplest possible test call — listing the accounts under your MCC, say — does the job. If you run several Cloud projects, use the one your code actually calls from; that&apos;s the one worth verifying in the next step.
        </p>
      </div>

      <hr />

      <h2 id="step-4-brand-verification-the-july-2026-pilot">Step 4 — Brand verification (the July 2026 pilot)</h2>
      <p>
        This is the new part. On July 7, 2026, Anash P. Oommen of the Google Ads API Team announced on the{" "}
        <a href="https://ads-developers.googleblog.com/2026/07/accelerate-google-ads-api-basic-access.html" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          Google Ads Developer Blog
        </a>{" "}
        that developers with a pending Basic Access application can complete brand verification on their Cloud project and get reviewed &quot;in the next few hours.&quot; Google cited &quot;significant interest from our developer community for Google Ads API access&quot; as the reason for building the shortcut.
      </p>
      <p>
        Brand verification is part of the standard OAuth App verification process in Google Cloud Console and is self-service for most developers — you don&apos;t need to submit anything to a human or wait on a separate approval queue for it. It lives under the OAuth consent screen / Google Auth Platform → Branding section of your linked Cloud project.
      </p>

      <h3>The whole process, screen by screen</h3>

      <p>
        <strong>1. Open the OAuth consent screen.</strong> In Google Cloud Console, select your project, then go to APIs and services → OAuth consent screen in the left menu. That drops you into the Google Auth Platform section of the console.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-01-oauth-consent-menu.webp" alt="Google Cloud Console menu: APIs and services with the OAuth consent screen option highlighted" width={869} height={716} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">The path: APIs and services → OAuth consent screen</figcaption>
      </figure>

      <p>
        <strong>2. Click Get started if the platform isn&apos;t configured yet.</strong> If you&apos;ve never set up OAuth consent for this project, you&apos;ll land on an empty Overview screen with a Get started button.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-02-get-started.webp" alt="Google Auth Platform Overview screen showing the platform is not configured yet, with a Get started button" width={927} height={714} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Overview tab: Get started for first-time configuration</figcaption>
      </figure>

      <p>
        <strong>3. Fill in the project configuration.</strong> Four short sections — App Information (app name and support email), Audience, Contact Information, and Finish — then click Create.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-03-project-configuration.webp" alt="Project configuration wizard with App Information, Audience, Contact Information and Finish sections" width={927} height={922} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Project configuration: four sections, then Create</figcaption>
      </figure>

      <p>
        <strong>4. Switch User type to External and publishing status to In production.</strong> On the Audience tab, if User type says Internal, click Make external. Google&apos;s documentation is explicit that for this review your User type must be External and publishing status In production — even if your tool is strictly internal. Pick In production in the dialog and confirm the Push to production prompt.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-04-user-type-internal.webp" alt="User type section showing Internal with a Make external button" width={608} height={326} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Audience tab: Make external if User type is Internal</figcaption>
      </figure>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-05-make-external-dialog.webp" alt="Make external dialog with publishing status options Testing and In production" width={664} height={458} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Choose In production, not Testing</figcaption>
      </figure>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-06-push-to-production.webp" alt="Push to production confirmation dialog" width={709} height={512} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Confirm: Push to production → Confirm</figcaption>
      </figure>

      <p>
        <strong>5. Complete the Branding tab.</strong> This is the information users see on the consent screen: your application home page, privacy policy and terms of service links, authorized domains, and a developer contact email. Click Save.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-07-branding-form.webp" alt="Branding tab with App domain, Authorised domains and Developer contact information fields" width={875} height={1033} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Branding form: domain, privacy policy, terms of service, contact</figcaption>
      </figure>

      <p>
        <strong>6. Click Verify branding.</strong> The button sits in the top-right corner of the Branding tab, inside the Verification status card.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-08-verify-branding-button.webp" alt="Verification status card with the Verify branding button" width={1070} height={522} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Verification status: Verify branding</figcaption>
      </figure>

      <p>
        <strong>7. Wait a few minutes.</strong> Verification is automated, and the interface itself says it can take up to 5 minutes. If an error comes back, fix what it points at — usually a domain or link issue — and run it again.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-09-verification-in-progress.webp" alt="Verification in progress status noting it could take up to 5 minutes" width={1114} height={495} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Verification in progress: up to 5 minutes</figcaption>
      </figure>

      <p>
        <strong>8. Publish the verified branding.</strong> Once verification succeeds, click Publish branding. Don&apos;t sit on this one — the verified result expires in 7 days if you don&apos;t publish it.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-10-publish-branding.webp" alt="Verification status showing branding has been verified, with a Publish branding button and a note about the 7-day expiry" width={1165} height={526} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Publish branding within 7 days of verification</figcaption>
      </figure>

      <p>
        <strong>9. Done: the project is brand verified.</strong> The status card now shows a green confirmation that your branding is verified and being shown to users. This is the signal Google&apos;s team sees when it picks up your pending Basic Access application.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-11-branding-verified.webp" alt="Verification status with a green confirmation that branding has been verified and is shown to users" width={1141} height={568} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Final status: branding verified</figcaption>
      </figure>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-6 shadow-card">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Who can skip this step</p>
        <ul className="text-base text-gray-600 mb-0">
          <li>If your token already has Basic or Standard access approved — you don&apos;t need it, this only helps pending applications.</li>
          <li>If your Cloud project was already verified for a different Google API (Search Console, Analytics, whatever) — that verification carries over, you don&apos;t repeat it.</li>
          <li>If you run several Cloud projects — verifying just one of them is enough.</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">It&apos;s optional</p>
        <p className="text-blue-800 text-base mb-0">
          Brand verification isn&apos;t a requirement to get Basic Access — it&apos;s a trust signal that helps Google&apos;s review move faster. If your application is sitting in Pending status right now, it&apos;s a few minutes of setup for a review that could otherwise take days. If you already have an approved token, there&apos;s nothing to do here.
        </p>
      </div>

      {/* IMG-07: replace with <Image src="/blog/google-ads-api-basic-access/07-basic-access-approved.webp" alt="Approved Basic Access status shown in API Center" width={1200} height={675} /> */}
      <figure className="my-6">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center bg-gray-50">
          <p className="text-sm font-semibold text-gray-500 mb-1">[Screenshot: Approved]</p>
          <p className="text-xs text-gray-400 mb-0">Approved Basic Access status in API Center — the token now works against production accounts</p>
        </div>
      </figure>

      <hr />

      <h2 id="what-basic-access-gives-you-and-what-it-still-doesnt">What Basic Access gives you — and what it still doesn&apos;t</h2>
      <p>
        Once approved, the token works against every production account under your manager account — not just one. That&apos;s what makes it worth setting up even for a small agency: reporting, campaign and ad group management, budget changes, disapproval alerts, all scriptable, all running against real accounts, up to 15,000 operations a day. For a solo operator watching ten client accounts, that cap is not something you&apos;ll bump into.
      </p>
      <p>
        What it doesn&apos;t automatically give you is everything the API surface exposes. When I first got approved, I tried to pull keyword ideas and search volume through the Keyword Planner endpoints and hit <code>DEVELOPER_TOKEN_NOT_APPROVED</code> — that part of the API needed a higher access level than the reporting and management work I&apos;d been approved for. I never chased that approval down further, since it wasn&apos;t essential to what I do day to day; instead I estimate volume from Search Console impression data plus benchmark CPCs, which is close enough for planning purposes. Your mileage may vary here — treat this as one practitioner&apos;s experience with a specific endpoint, not an official access matrix.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Access level</th>
              <th className="py-3 px-3 font-heading font-semibold">What it&apos;s for</th>
              <th className="py-3 px-3 font-heading font-semibold">Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Test</td>
              <td className="py-3 px-3">Building and debugging against test accounts only</td>
              <td className="py-3 px-3">No production account access</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Basic</td>
              <td className="py-3 px-3">Reporting, campaign management, automation on real accounts</td>
              <td className="py-3 px-3">15,000 operations/day</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Standard</td>
              <td className="py-3 px-3">High-volume tools, large-scale management platforms</td>
              <td className="py-3 px-3">Daily cap removed — separate application</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        If you&apos;re running automation for your own agency&apos;s accounts, Basic Access is almost certainly all you&apos;ll ever need — Standard exists for tools built to serve large numbers of external advertisers at high volume, which is a different problem than one MCC and a handful of client accounts.
      </p>

      <hr />

      <h2 id="faq-google-ads-api-basic-access">Frequently asked questions</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does the Basic Access review take now?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If your application is Pending and you complete brand verification on your linked Google Cloud project, Google says review happens within a few hours, per the July 7, 2026 pilot announcement. Without brand verification, the review still follows the standard process, which has historically taken anywhere from a few days to a few weeks with limited status visibility."
                }
              },
              {
                "@type": "Question",
                name: "Is brand verification mandatory to get Basic Access?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Brand verification is optional — it's a trust signal that can speed up review for a pending application. Developers who already have an approved developer token don't need to do anything."
                }
              },
              {
                "@type": "Question",
                name: "What's the difference between Test, Basic, and Standard access?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Test access only works against test accounts you create yourself, with no access to real production data. Basic Access opens up production accounts with a cap of 15,000 API operations per day, which covers most agency and internal automation use cases. Standard Access is a separate, later application for high-volume tools that removes the daily operations cap."
                }
              },
              {
                "@type": "Question",
                name: "What if I don't have a Google Cloud project yet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You need one anyway to generate the OAuth2 client ID and secret the Google Ads API uses for authentication, so creating a project isn't extra work created by the verification pilot — it's a normal part of setting up API access. Google Cloud's free tier is sufficient; the Ads API doesn't require billing to be enabled."
                }
              },
              {
                "@type": "Question",
                name: "Do I need to know how to code to use the Google Ads API?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You need someone (or something) writing the scripts that call it — but that no longer has to mean a developer on staff. Google publishes official client libraries in several languages, and AI coding assistants can write and debug most of the reporting and automation scripts an agency typically needs, once you know what the API can do and can describe the use case clearly."
                }
              },
              {
                "@type": "Question",
                name: "Can one developer token cover all my client accounts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, as long as the token is generated at the manager (MCC) account level and the client accounts are linked underneath it. One approved token gives API access to every account under that manager account — you don't need a separate token per client."
                }
              },
              {
                "@type": "Question",
                name: "If I have multiple Google Cloud projects, do I need to verify all of them?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Verifying one project is enough, and if any of your projects were already verified for a different Google API, that verification carries over — you don't need to repeat the process for the Ads API specifically."
                }
              }
            ]
          })
        }}
      />

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          How long does the Basic Access review take now?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          If your application is Pending and you complete brand verification on your linked Google Cloud project, Google says review happens within a few hours, per the July 7, 2026 pilot announcement. Without brand verification, the review still follows the standard process, which has historically taken anywhere from a few days to a few weeks with limited status visibility.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Is brand verification mandatory to get Basic Access?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          No. Brand verification is optional — it&apos;s a trust signal that can speed up review for a pending application. Developers who already have an approved developer token don&apos;t need to do anything.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          What&apos;s the difference between Test, Basic, and Standard access?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Test access only works against test accounts you create yourself, with no access to real production data. Basic Access opens up production accounts with a cap of 15,000 API operations per day, which covers most agency and internal automation use cases. Standard Access is a separate, later application for high-volume tools that removes the daily operations cap.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          What if I don&apos;t have a Google Cloud project yet?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          You need one anyway to generate the OAuth2 client ID and secret the Google Ads API uses for authentication, so creating a project isn&apos;t extra work created by the verification pilot — it&apos;s a normal part of setting up API access. Google Cloud&apos;s free tier is sufficient; the Ads API doesn&apos;t require billing to be enabled.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Do I need to know how to code to use the Google Ads API?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          You need someone (or something) writing the scripts that call it — but that no longer has to mean a developer on staff. Google publishes official client libraries in several languages, and AI coding assistants can write and debug most of the reporting and automation scripts an agency typically needs, once you know what the API can do and can describe the use case clearly.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Can one developer token cover all my client accounts?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Yes, as long as the token is generated at the manager (MCC) account level and the client accounts are linked underneath it. One approved token gives API access to every account under that manager account — you don&apos;t need a separate token per client.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          If I have multiple Google Cloud projects, do I need to verify all of them?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          No. Verifying one project is enough, and if any of your projects were already verified for a different Google API, that verification carries over — you don&apos;t need to repeat the process for the Ads API specifically.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Want API-driven monitoring for your accounts?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          I set up the exact kind of automation described in this guide for client accounts — nightly budget pacing checks, performance pulls, disapproval alerts, search-term mining — all running on top of an approved Google Ads API developer token.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Schedule a free consultation
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/konsultacije" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Consulting</p>
          <p className="text-xs text-gray-500 mb-0">A one-off audit or ongoing strategy partnership.</p>
        </Link>
        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Management</p>
          <p className="text-xs text-gray-500 mb-0">Full account management, including API-driven monitoring.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "offline-conversion-import-b2b" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Offline Conversion Import for B2B</p>
          <p className="text-xs text-gray-500 mb-0">Feeding closed deals back into Google Ads via the API.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "ga4-google-ads-integracija" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">GA4 and Google Ads Integration</p>
          <p className="text-xs text-gray-500 mb-0">How to connect GA4 data to Google Ads optimization.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking Guide</p>
          <p className="text-xs text-gray-500 mb-0">Complete GTM, GA4, and Google Ads tag setup.</p>
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
