import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function GoogleAdsApiBasicAccessGuidePost() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">In short</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google Ads API Basic Access unlocks production accounts and the planning services, at 15,000 operations a day instead of Explorer&apos;s 2,880. As of September 9, 2026, the developer token no longer carries that level: your Google Cloud project does, and upgrades are requested in Cloud Console rather than the API Center.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">15,000</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">operations/day on Basic</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2,880</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">operations/day on Explorer</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Sep 9, 2026</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">the day tokens were retired</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">$0</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">cost of access</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">Quick answer</p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          What is Google Ads API Basic Access, and how do you get it?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          <strong>Google Ads API Basic Access</strong> is the level that lets you pull and push data against live, production Google Ads accounts — up to 15,000 operations a day, including the planning services the lower tiers block. Since September 9, 2026, that level is attached to your Google Cloud project rather than to a developer token. You get it by completing brand verification on that project and then requesting Basic access in Google Cloud Console. Google says Basic approval is now automated and lands within minutes of verification.
        </p>
      </div>

      <p>
        Every morning, before I look at a single campaign by hand, a script has already checked every client account under my manager account overnight — budget pacing, performance swings, disapproved ads, search terms worth turning into keywords or negatives. That script is the difference between logging into dozens of accounts daily just to see what changed, and one person running monitoring that used to take a small team.
      </p>
      <p>
        For a year, all of that ran on Explorer access, the level Google grants without any application. Explorer covers reporting perfectly well, but the moment you ask for more — Keyword Planner calls, say — you hit a wall: <code>DEVELOPER_TOKEN_NOT_APPROVED</code>. Since September 2026 I&apos;ve been on Basic, so this guide is no longer theory. It&apos;s the path I actually walked, including the part where my application came back for more information before it was approved.
      </p>
      <p>
        Meanwhile, something bigger than my account changed. On September 9, 2026, Google retired developer tokens and moved the whole access system onto the Google Cloud project. If you read this guide earlier, the API Center path it described no longer exists. This is the version that matches how things work today.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8" id="istorija-izmena">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-700 mb-2 font-semibold">🔄 Living guide — change history</p>
        <p className="text-sm text-gray-600 mb-3">This guide is updated monthly. What&apos;s new:</p>
        <ul className="text-sm text-gray-700 space-y-1 mb-0 list-disc pl-5">
          <li><strong>September 17, 2026:</strong> Added a section on the automatic transfer of access levels onto Cloud projects, based on the last 90 days of calls, for anyone who already had an approved token — including my own experience with the email Google sent me on September 14. Added a short rundown of what to do before Google stops accepting the developer token in calls in 2027.</li>
          <li><strong>September 10, 2026:</strong> Major rewrite. Google retired developer tokens on Sep 9 and tied access levels to the Google Cloud project. Upgrades now go through Cloud Console, brand verification moved from optional accelerator to prerequisite, and Basic approval is automated. Added a section on Standard access with the conditions Google actually checks, plus my own measurements of what Basic unlocks.</li>
          <li><strong>September 2026:</strong> Added a note on two changes that affect code built on the Google Ads API: the permanent shutdown of the Content API for Shopping (August 18) and the removal of language targeting from Search campaigns.</li>
          <li><strong>July 2026:</strong> First version, written around the brand verification pilot that was current at the time.</li>
        </ul>
      </div>

      <hr />
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#what-changed" className="block py-1 text-base text-gray-700 hover:text-primary underline">What changed on September 9, 2026</a></li>
          <li><a href="#prerequisites" className="block py-1 text-base text-gray-700 hover:text-primary underline">Prerequisites</a></li>
          <li><a href="#step-1-cloud-project" className="block py-1 text-base text-gray-700 hover:text-primary underline">Step 1 — Your Cloud project now carries the access level</a></li>
          <li><a href="#step-2-brand-verification" className="block py-1 text-base text-gray-700 hover:text-primary underline">Step 2 — Brand verification, screen by screen</a></li>
          <li><a href="#step-3-request-basic" className="block py-1 text-base text-gray-700 hover:text-primary underline">Step 3 — Requesting Basic access</a></li>
          <li><a href="#if-it-comes-back" className="block py-1 text-base text-gray-700 hover:text-primary underline">If your application comes back for more information</a></li>
          <li><a href="#what-basic-access-gives-you-and-what-it-still-doesnt" className="block py-1 text-base text-gray-700 hover:text-primary underline">What Basic Access gives you, and what it still doesn&apos;t</a></li>
          <li><a href="#standard-access" className="block py-1 text-base text-gray-700 hover:text-primary underline">Standard Access, and when it&apos;s actually worth asking</a></li>
          <li><a href="#faq-google-ads-api-basic-access" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
        </ol>
      </nav>

      <h2 id="what-changed">What changed on September 9, 2026</h2>
      <p>
        Until then, the developer token was a key issued to your manager account, and it carried your access level. Every API call had to send it, and Google used it to decide whether you were allowed 2,880 operations or 15,000. The level belonged to the agency.
      </p>
      <p>
        On September 9, 2026, the token was retired. You can still send it, your code keeps working, but Google ignores it. Access level is now determined by the <strong>Google Cloud project your OAuth credentials come from</strong>. The official documentation puts it in one line: &quot;Your Google Cloud project is assigned an access level.&quot;
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">The trap this introduces</p>
        <p className="text-yellow-800 text-base mb-0">
          It used to make no difference which Cloud project your OAuth credentials came from, because the token carried the level. Now it does. Any script authenticating with credentials from a different Cloud project drops to Test level and can&apos;t see production accounts. If you run more than one project, check which one you&apos;re actually authenticating from: the prefix of your client ID is the project number, so it&apos;s one glance at <code>google-ads.yaml</code>.
        </p>
      </div>

      <p>
        Where you request an upgrade changed too. It&apos;s no longer the API Center in your manager account, it&apos;s Google Cloud Console. The API Center page says so itself in a banner today: the level it displays &quot;may no longer be accurate and cannot be upgraded from this page.&quot; It stays useful only for your developer contact email.
      </p>
      <p>
        Worth knowing: at the time of writing, Google&apos;s own documentation isn&apos;t in sync with itself. The access levels page was updated on September 9, 2026, correctly states that the Cloud project carries the level, and yet never mentions the token retirement. That detail lives only on the developer token policy page. So if you run into a guide that sends you to the API Center, it probably wasn&apos;t written wrong — it just hasn&apos;t caught up.
      </p>

      <div className="tablewrap overflow-x-auto my-6">
        <table className="w-full text-base border border-gray-200 rounded-xl">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-3 text-left font-heading">Aspect</th>
              <th className="py-3 px-3 text-left font-heading">Before Sep 9, 2026</th>
              <th className="py-3 px-3 text-left font-heading">After</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-3 font-medium">What carries the access level</td>
              <td className="py-3 px-3">developer token at MCC level</td>
              <td className="py-3 px-3">Google Cloud project</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-3 font-medium">Where you request an upgrade</td>
              <td className="py-3 px-3">API Center in Google Ads</td>
              <td className="py-3 px-3">Google Cloud Console</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-3 font-medium">Basic approval</td>
              <td className="py-3 px-3">manual review, up to 5 business days</td>
              <td className="py-3 px-3">automated, minutes after brand verification</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-3 font-medium">Standard approval</td>
              <td className="py-3 px-3">manual audit</td>
              <td className="py-3 px-3">manual audit, unchanged</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-3 font-medium">Brand verification</td>
              <td className="py-3 px-3">optional accelerator</td>
              <td className="py-3 px-3">prerequisite for new applications</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-3 font-medium">Developer token in calls</td>
              <td className="py-3 px-3">required</td>
              <td className="py-3 px-3">ignored</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        One last detail from the transition: applications started before September 9, 2026 were closed and have to be resubmitted through Cloud Console. If something of yours was sitting in Pending status back then, don&apos;t wait for an answer that isn&apos;t coming.
      </p>

      <h3 id="if-you-already-had-an-approved-token">If you already had an approved token</h3>
      <p>
        For anyone who already held an approved access level on a developer token before September 9, the transition didn&apos;t require a single step from you. Here&apos;s what happened:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>The level transferred automatically, based on the last 90 days of calls.</strong> <span className="text-gray-500">Google reviewed 90 days of API call logs and moved the token&apos;s approved level onto every Cloud project that had made calls with that token during that window. A project that hadn&apos;t been used in those 90 days got nothing.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Re-linking to a different project no longer exists.</strong> <span className="text-gray-500">Google support used to be able to re-link an approved token onto a different Cloud project on request. As of September 9, that&apos;s gone — a new project has to request its level from scratch, on that project&apos;s own Google Ads API Overview page in Cloud Console.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Pending applications were closed in the transition.</strong> <span className="text-gray-500">Anyone with a Basic application sitting in Pending had that application closed, and it has to be resubmitted through Cloud Console, including brand verification.</span>
            </div>
          </div>
        </div>
      </div>

      <p>
        I got an email from Google myself on September 14, 2026 saying my Basic level had been automatically transferred from my manager account onto three of my Google Cloud projects. I didn&apos;t have to do anything — the code kept working without a single change.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">What to do before 2027</p>
        <ul className="text-blue-800 text-base mb-0 list-disc pl-5 space-y-1">
          <li>The developer token is optional now and the API ignores it, but Google&apos;s email flags that upcoming Google Ads API releases, expected in the first half of 2027, won&apos;t accept it in calls at all any more. Pull it out of <code>google-ads.yaml</code> and your code before then and move to the updated client libraries that work without it.</li>
          <li>The API Center page is deprecated. Historical data is still there for now, and Google expects to retire the page in the first half of 2027.</li>
          <li>While the API Center exists, administrative and compliance notices go to the contact email set there. After it&apos;s retired, they go only to users holding the Owner or Editor role on the Cloud project — check the project&apos;s IAM page now to confirm the right person holds one of those two roles, or you&apos;ll miss the notice when that transition lands.</li>
        </ul>
      </div>

      <hr />

      <h2 id="prerequisites">Prerequisites</h2>
      <p>
        You need two things. The first is a Google Ads account, and I&apos;d make it a manager account (MCC) rather than a single client account. The reasoning is still practical, only the mechanism moved: the MCC is your entry point through the <code>login-customer-id</code> parameter, so one set of credentials reaches every account linked under it, with no per-client setup.
      </p>
      <p>
        The second is a Google Cloud project, and it&apos;s now the main character. It&apos;s where you generate OAuth2 credentials (client ID and secret), where brand verification happens, and what gets assigned an access level. Creating one is free.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">From my own setup</p>
        <p className="text-blue-800 text-base mb-0">
          If you&apos;re building agency automation, keep everything on one Cloud project. All of my code, from nightly reporting to keyword research scripts, authenticates from the same project, so access level is one thing to track rather than something scattered across several. The moment a second project appears, so does the possibility of a script quietly running at Test level.
        </p>
      </div>

      <hr />

      <h2 id="step-1-cloud-project">Step 1 — Your Cloud project now carries the access level</h2>
      <p>
        The first step isn&apos;t generating a token, it&apos;s working out which Cloud project actually sits behind your calls. If you&apos;ve used the Google Ads API before, that project already exists, because your OAuth credentials came out of it. You can read the project number from the client ID prefix, the part before the first dash.
      </p>
      <p>
        A new project gets <strong>Test Account Access</strong>: it works only with test accounts you create yourself and sees no production data at all. Many projects then get <strong>Explorer Access</strong>, which does work against live accounts, but caps you at 2,880 operations a day and blocks the planning services (Keyword Planner), account creation, user management, and billing.
      </p>

      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/api-center-token-explorer.webp" alt="API Center in the Google Ads manager account: masked developer token with a View token link and an Access level row showing Explorer Access" width={1690} height={400} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">The API Center back when the token still carried the level: masked developer token and Explorer Access. The page still exists today, but access levels are no longer changed from it.</figcaption>
      </figure>

      <p>
        Explorer is a perfectly decent entry ticket, and I ran a full nightly reporting stack across every client account on it for a year. It&apos;s also exactly where you first feel the ceiling, because any call to a service Explorer doesn&apos;t cover returns <code>DEVELOPER_TOKEN_NOT_APPROVED</code>. That error name is, incidentally, a leftover from the old system: the token decides nothing any more, but the message hasn&apos;t changed.
      </p>
      <p>
        Before requesting an upgrade, use whatever level you have to confirm that authentication and basic connectivity work. If a call doesn&apos;t go through even here, the problem is your configuration, not your access level. That whole chain, including the choice between the desktop and web OAuth flows and the 7-day refresh token trap, is covered in{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-authentication-guide" } }} className="underline text-blue-700 font-medium">
          the Google Ads API authentication guide
        </Link>
        .
      </p>

      <hr />

      <h2 id="step-2-brand-verification">Step 2 — Brand verification, screen by screen</h2>
      <p>
        In July 2026 this step was optional, a way to speed up an application stuck in Pending. Today it&apos;s a prerequisite for new Basic and Standard applications. If you already have approved access, you&apos;re exempt and there&apos;s nothing to do.
      </p>
      <p>
        Brand verification is part of the wider OAuth App verification process and, for most developers, it&apos;s self-service with no human review on that side. The screens below are from my own project, and the flow hasn&apos;t changed since July.
      </p>

      <p>
        <strong>1. Open the OAuth consent screen.</strong> In Google Cloud Console, select your project, then APIs and services in the left menu, then OAuth consent screen. That drops you into the Google Auth Platform part of the console.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-01-oauth-consent-menu.webp" alt="Google Cloud Console menu: APIs and services with the OAuth consent screen option" width={869} height={716} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">The path: APIs and services → OAuth consent screen</figcaption>
      </figure>

      <p>
        <strong>2. Click Get started if the platform isn&apos;t configured.</strong> If you&apos;ve never set up OAuth consent for this project, you&apos;ll land on an empty Overview screen with a Get started button.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-02-get-started.webp" alt="Google Auth Platform Overview screen showing the platform is not configured, with a Get started button" width={927} height={714} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Overview tab: Get started for the first configuration</figcaption>
      </figure>

      <p>
        <strong>3. Fill in the project configuration.</strong> Four short sections: App Information (app name and support email), Audience, Contact Information, and Finish, then Create.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-03-project-configuration.webp" alt="Project configuration wizard with App Information, Audience, Contact Information and Finish sections" width={927} height={922} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Project configuration: four sections, then Create</figcaption>
      </figure>

      <p>
        <strong>4. Switch User type to External and status to In production.</strong> On the Audience tab, if it says Internal, click Make external. Google&apos;s documentation is explicit that for this review the User type has to be External and the publishing status In production, even if your tool is purely internal. In the dialog, pick In production and confirm Push to production.
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

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">This is the same screen that kills refresh tokens</p>
        <p className="text-yellow-800 text-base mb-0">
          Setting the publishing status to In production isn&apos;t just a formality for verification. If the project stays in Testing mode, refresh tokens issued from it die after 7 days and your scripts quietly stop working. That mistake once cost me a dead Merchant Center token in the middle of a nightly job. Since you&apos;re here anyway, this step fixes that too.
        </p>
      </div>

      <p>
        <strong>5. Fill in the Branding tab.</strong> This is what users see on the consent screen: your app&apos;s home page, links to your privacy policy and terms, authorized domains, and a contact email. Click Save.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-07-branding-form.webp" alt="Branding tab with App domain, Authorised domains and Developer contact information fields" width={875} height={1033} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Branding form: domain, privacy policy, terms, contact</figcaption>
      </figure>

      <p>
        <strong>6. Click Verify branding.</strong> The button sits in the top right of the Branding tab, in the Verification status card.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-08-verify-branding-button.webp" alt="Verification status card with the Verify branding button" width={1070} height={522} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Verification status: Verify branding</figcaption>
      </figure>

      <p>
        <strong>7. Wait a few minutes.</strong> Verification is automatic and the interface says it can take up to 5 minutes. If it errors out, fix whatever it asks for (usually the domains or the links) and run it again.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-09-verification-in-progress.webp" alt="Verification in progress status noting it could take up to 5 minutes" width={1114} height={495} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Verification in progress: up to 5 minutes</figcaption>
      </figure>

      <p>
        <strong>8. Publish the verified branding.</strong> Once verification passes, click Publish branding. Don&apos;t sit on this: a verified result expires after 7 days if you don&apos;t publish it.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-10-publish-branding.webp" alt="Verification status showing branding has been verified, with a Publish branding button and a note about 7-day expiry" width={1165} height={526} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Publish branding within 7 days of verification</figcaption>
      </figure>

      <p>
        <strong>9. Done: the project is brand verified.</strong> The status card now shows a green confirmation that branding is verified and visible to users.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-11-branding-verified.webp" alt="Verification status with a green confirmation that branding has been verified and shown to users" width={1141} height={568} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Final status: branding verified</figcaption>
      </figure>

      <p>
        If your Cloud project already went through brand verification for any other Google API, you don&apos;t need to repeat it. And if you have several Cloud projects, verify the one you actually authenticate from, since that&apos;s the project the access level gets assigned to.
      </p>

      <hr />

      <h2 id="step-3-request-basic">Step 3 — Requesting Basic access</h2>
      <p>
        With the project verified, the upgrade is requested in Google Cloud Console, on that project&apos;s Google Ads API page. Google says Basic approval is now automated and arrives within minutes of brand verification. That&apos;s a real difference from the old process, where a manual review officially took up to 5 business days with no visibility into where you stood.
      </p>
      <p>
        What hasn&apos;t changed is what you should write about yourself. Even with an automated decision, your use case description stays on the record and starts to matter the moment anything gets escalated to a human. Five things worth doing properly:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Be specific about the use case</strong> <span className="text-gray-500">— &quot;automation&quot; isn&apos;t enough. Write down exactly what you do: daily performance reports for client accounts, automated alerts on disapproved ads, budget management via script. Specificity helps even when the decision is automated.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Name the services you call</strong> <span className="text-gray-500">— reporting, campaign management, budget management. Google wants to see that you understand what you&apos;re asking for, not a generic &quot;access to data.&quot;</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Use a business email on your own domain</strong> <span className="text-gray-500">— not a free Gmail or Yahoo account. Google recommends this itself, and specifically a role-based address like info@company.com, so correspondence doesn&apos;t depend on one person.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Be honest about whether it&apos;s an internal tool or a third-party service</strong> <span className="text-gray-500">— if you&apos;re building only for your own agency and your own clients under one MCC, say so. This distinction later decides whether RMF applies to you when you go for Standard, covered below.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Check that your company URL is correct and the site loads</strong> <span className="text-gray-500">— the review includes opening your website. Make sure the URL field has no typo, that the site returns a 200, and that whatever page a reviewer lands on can be read in English. This sounds trivial right up until it becomes the reason an application comes back.</span>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="if-it-comes-back">If your application comes back for more information</h2>
      <p>
        Mine did. It went in at the start of August, came back for more information, and approval only landed after a second round, in September. That&apos;s not a disaster, but it is where most of the time gets lost if you react the wrong way.
      </p>
      <p>
        Three things I took away from that round:
      </p>
      <p>
        <strong>Don&apos;t resubmit the form with the same answers.</strong> The message you get says so explicitly, and it means it literally: you&apos;ll receive the same reply a second time. Answer in the existing thread, on the same case number.
      </p>
      <p>
        <strong>Check where the correspondence actually landed.</strong> In my case the reply went to an address that wasn&apos;t the developer contact email configured on the account, so it sat for weeks in a mailbox I don&apos;t check daily. Line those two addresses up before you even apply.
      </p>
      <p>
        <strong>Offer a detailed description of your business model.</strong> The follow-up message usually offers this as an alternative. Take it: who you are, who your clients are, where revenue comes from, what the tool does, who uses it, how many operations a day you expect, and why the current ceiling gets in the way. That&apos;s a few paragraphs, not an essay, but concrete numbers are what move it.
      </p>

      <hr />

      <h2 id="what-basic-access-gives-you-and-what-it-still-doesnt">What Basic Access gives you, and what it still doesn&apos;t</h2>
      <p>
        Basic gives you full API functionality across every client account you reach, up to 15,000 operations a day. That includes what Explorer explicitly leaves out: the planning services, account creation, user management, and billing.
      </p>
      <p>
        The number itself isn&apos;t what hurts most on Explorer. The 2,880 ceiling is <strong>shared across every account</strong> under your manager account. One larger restructure for one client eats the daily quota and blocks work on everyone else until midnight. Basic takes that off the table.
      </p>
      <p>
        Keyword Planner was the first thing to hit the ceiling for me. Here&apos;s what actually changed, the same call before and after:
      </p>

      <pre className="bg-slate-900 text-slate-100 rounded-xl p-4 md:p-5 my-6 overflow-x-auto text-sm leading-relaxed">
{`# Explorer
GenerateKeywordIdeas  ->  DEVELOPER_TOKEN_NOT_APPROVED
   "This method is not allowed for use with explorer access."

# Basic
GenerateKeywordIdeas  ->  599 keyword ideas
   used motorcycles     12,100/mo   comp=LOW   bid  7.84-13.49
   motorcycle helmets    5,400/mo   comp=LOW   bid  3.49-22.82
   riding gear           2,900/mo   comp=LOW   bid  3.03-24.04`}
      </pre>

      <p>
        Two seed terms, 599 ideas with monthly volume, competition level, and top-of-page bid ranges. Alongside it, <code>GenerateKeywordHistoricalMetrics</code> works too, returning volume month by month for twelve months back. For seasonal clients that&apos;s a budget calendar you simply couldn&apos;t pull programmatically before: in one account, one term swings 2.2x between the year&apos;s peak and trough, another 4.3x. Two different calendars, same advertiser.
      </p>
      <p>
        While Basic was pending, I estimated volume from Search Console data and the platform&apos;s own benchmark CPC. That&apos;s a perfectly usable workaround and I&apos;d recommend it to anyone waiting, but it is a workaround.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">What Basic still doesn&apos;t unlock</p>
        <p className="text-yellow-800 text-base mb-0">
          <code>ReachPlanService</code> — reach planning for YouTube and Display (reach curves, frequency, CPM projections) — stays closed even on Basic. The call returns <code>ACTION_NOT_PERMITTED</code> with &quot;not authorized to call ReachPlanningService.&quot; That&apos;s a separate allowlist, not something that ships with an access level, so if API-driven video planning matters to you, budget for a separate request.
        </p>
      </div>

      <p>
        My day-to-day stack — reporting that generates itself every morning, pacing, performance, and disapproval monitoring across every account — ran fine on Explorer too. The same mechanism handles automated offline conversion uploads for some clients, which I wrote about separately in{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "offline-conversion-import-b2b" } }} className="underline text-blue-700 font-medium">
          the offline conversion import guide
        </Link>. For one person running dozens of accounts, this isn&apos;t a convenience. It&apos;s the only realistic way to keep monitoring at agency level rather than at whatever-you-manage-to-open-in-a-browser level.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Two things to check in your code, not in this guide</p>
        <p className="text-yellow-800 text-base mb-2">
          The access described here applies to Google Ads accounts, not the Merchant Center product feed. But if the same automation stack also pulls product data or manages Search campaigns through the API, two things changed in August and September 2026 and are worth checking before something starts failing quietly.
        </p>
        <ul className="text-yellow-800 text-base mb-0 list-disc pl-5 space-y-1">
          <li><strong>August 18, 2026:</strong> the Content API for Shopping was permanently shut down. If any part of your automation still calls that older API for product feeds, it has to move to the Merchant API, or product data goes stale and into disapproval.</li>
          <li><strong>September 2026:</strong> Google removed language targeting at the Search campaign level. If your code sets or reads the language criterion (CampaignCriterion) on Search campaigns through the Google Ads API, that setting no longer affects delivery — Google now matches on ad language, landing page language, and the languages a user understands. For PMax, language still applies, but only to YouTube, Display, Discover and Gmail, not the Search Network. One-language-per-campaign structures keep working normally; the language criterion on Search just no longer does anything.</li>
        </ul>
      </div>

      <hr />

      <h2 id="standard-access">Standard Access, and when it&apos;s actually worth asking</h2>
      <p>
        Standard removes the total daily ceiling. Individual services keep their own rate limits, but the operation count is no longer capped. There are five conditions, and they&apos;re worth knowing up front, because two of them are routinely missed.
      </p>
      <p>
        The first is already holding Basic. The second is compliance with <strong>RMF</strong> (Required Minimum Functionality), a list of features your tool has to implement. The third is a manual audit of your application, for which Google quotes around 10 business days. The fourth is demo access, if external users operate your tool. The fifth is demonstrated volume.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">RMF probably doesn&apos;t apply to you</p>
        <p className="text-blue-800 text-base mb-0">
          Google exempts the &quot;Internal Use Only&quot; category from every RMF requirement. If you&apos;re building strictly for your own agency and your own clients, and you don&apos;t sell it or expose it to third parties, the Creation, Management and Reporting columns of the RMF table read N/A for you. Reporting-only tools get their own, lighter exemption. Which means you don&apos;t have to build features you don&apos;t need just to pass an audit.
        </p>
      </div>

      <p>
        The fifth condition is the one that sinks most requests, and it&apos;s phrased without any hedging:
      </p>

      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
        If your volume does not consistently near the 15,000 daily limit, your request will be denied.
      </blockquote>

      <p>
        In other words, Standard isn&apos;t a reward for seriousness. It&apos;s a fix for a bottleneck you have to prove you have. For an agency running ten to thirty accounts with nightly reporting, daily consumption sits in the hundreds of operations, nowhere near the ceiling. The request would be denied, and a denial stays on the record.
      </p>
      <p>
        Practical advice: measure before you ask. Consumption is visible in Google Cloud Console, under the metrics for the Google Ads API. If you&apos;re not approaching the ceiling, Basic is the right level, and the RMF exemption doesn&apos;t expire, so you can ask for Standard the day your volume genuinely justifies it.
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
                name: "Do I still need a developer token for the Google Ads API?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Google retired developer tokens on September 9, 2026. If your code still sends one, calls keep working, but Google ignores the token. Access level is now carried by the Google Cloud project your OAuth credentials come from. The practical consequence is that credentials from a different Cloud project drop to Test level and can't see production accounts."
                }
              },
              {
                "@type": "Question",
                name: "How long does Basic Access approval take now?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Google says Basic approval is now automated and arrives within minutes of completing brand verification on your Cloud project. Standard still goes through a manual audit, for which Google quotes around 10 business days. If your application does come back for more information, reply in the existing thread rather than resubmitting the form with the same answers."
                }
              },
              {
                "@type": "Question",
                name: "Is brand verification mandatory to get Basic Access?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "For new Basic and Standard applications it is, which is a change from July 2026 when it was an optional accelerator. Anyone who already holds approved access is exempt. Verify the Cloud project you actually authenticate from, and if that project was already verified for another Google API, you don't need to repeat it."
                }
              },
              {
                "@type": "Question",
                name: "What's the difference between Test, Explorer, Basic, and Standard access?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There are four levels, and all of them are now assigned to a Google Cloud project. Test Account Access is the default for a new project and works only with test accounts. Explorer Access works against production accounts at 2,880 operations a day, but without the planning services, account creation, user management, or billing. Basic Access brings full functionality at 15,000 operations a day, enough for most agency automation. Standard Access removes the total daily cap, while individual services keep their own rate limits."
                }
              },
              {
                "@type": "Question",
                name: "Does Basic Access unlock every service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not every one. Basic unlocks the planning services such as Keyword Planner, plus account creation, user management and billing. But ReachPlanService, the reach planning for YouTube and Display, stays closed even on Basic and returns ACTION_NOT_PERMITTED. That's a separate allowlist that doesn't ship with an access level."
                }
              },
              {
                "@type": "Question",
                name: "What if I don't have a Google Cloud project yet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Creating a Google Cloud project is free and takes a few minutes in Google Cloud Console. You need one anyway to generate OAuth2 credentials (client ID and secret), and since September 2026 it also carries your access level, so it's the first step rather than an extra one."
                }
              },
              {
                "@type": "Question",
                name: "Does one Cloud project cover all my client accounts?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The access level is assigned to the Cloud project and applies to every account you reach through it, with the manager account specified via the login-customer-id parameter. Adding a new client just means linking the account under your MCC, with no new application. The reverse is the warning: if a script uses credentials from a different Cloud project, it runs at that project's level, not your main one."
                }
              },
              {
                "@type": "Question",
                name: "Do I need to know how to code to use the Google Ads API?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A basic understanding helps, but you don't need to be a programmer in the classic sense. Google publishes official client libraries for several languages that simplify the calls, and today AI agents like Claude can write and maintain most reporting and automation scripts, given clear requirements from you about what they should do."
                }
              }
            ]
          })
        }}
      />

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Do I still need a developer token for the Google Ads API?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          No. Google retired developer tokens on September 9, 2026. If your code still sends one, calls keep working, but Google ignores the token. Access level is now carried by the Google Cloud project your OAuth credentials come from. The practical consequence is that credentials from a different Cloud project drop to Test level and can&apos;t see production accounts.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          How long does Basic Access approval take now?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Google says Basic approval is now automated and arrives within minutes of completing brand verification on your Cloud project. Standard still goes through a manual audit, for which Google quotes around 10 business days. If your application does come back for more information, reply in the existing thread rather than resubmitting the form with the same answers.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Is brand verification mandatory to get Basic Access?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          For new Basic and Standard applications it is, which is a change from July 2026 when it was an optional accelerator. Anyone who already holds approved access is exempt. Verify the Cloud project you actually authenticate from, and if that project was already verified for another Google API, you don&apos;t need to repeat it.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          What&apos;s the difference between Test, Explorer, Basic, and Standard access?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          There are four levels, and all of them are now assigned to a Google Cloud project. Test Account Access is the default for a new project and works only with test accounts. Explorer Access works against production accounts at 2,880 operations a day, but without the planning services, account creation, user management, or billing. Basic Access brings full functionality at 15,000 operations a day, enough for most agency automation. Standard Access removes the total daily cap, while individual services keep their own rate limits.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Does Basic Access unlock every service?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Not every one. Basic unlocks the planning services such as Keyword Planner, plus account creation, user management and billing. But ReachPlanService, the reach planning for YouTube and Display, stays closed even on Basic and returns ACTION_NOT_PERMITTED. That&apos;s a separate allowlist that doesn&apos;t ship with an access level.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          What if I don&apos;t have a Google Cloud project yet?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Creating a Google Cloud project is free and takes a few minutes in Google Cloud Console. You need one anyway to generate OAuth2 credentials (client ID and secret), and since September 2026 it also carries your access level, so it&apos;s the first step rather than an extra one.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Does one Cloud project cover all my client accounts?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Yes. The access level is assigned to the Cloud project and applies to every account you reach through it, with the manager account specified via the login-customer-id parameter. Adding a new client just means linking the account under your MCC, with no new application. The reverse is the warning: if a script uses credentials from a different Cloud project, it runs at that project&apos;s level, not your main one.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Do I need to know how to code to use the Google Ads API?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          A basic understanding helps, but you don&apos;t need to be a programmer in the classic sense. Google publishes official client libraries for several languages that simplify the calls, and today AI agents like Claude can write and maintain most reporting and automation scripts, given clear requirements from you about what they should do.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Want API-driven monitoring for your accounts?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          I set up API access, the Cloud project, and the nightly automation described in this guide — budget pacing checks, performance pulls, disapproval alerts, search-term mining — for agencies and teams running multiple Google Ads accounts under one manager account.
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
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "ga4-google-ads-integration" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">GA4 and Google Ads Integration</p>
          <p className="text-xs text-gray-500 mb-0">How to connect GA4 data to Google Ads optimization.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking Guide</p>
          <p className="text-xs text-gray-500 mb-0">Complete GTM, GA4, and Google Ads tag setup.</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: September 17, 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Author: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
