import { Link } from "@/i18n/navigation";

export default function GoogleAdsApiAuthenticationGuideEN() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">In short</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google Ads API authentication has three layers that get mixed up constantly — the OAuth2 credentials that say who you are, the developer token that says which application you are, and the login-customer-id that says which account you&apos;re targeting. A fourth, optional layer (service accounts) exists for a narrower use case than the quick-start docs let on. Get any one of the three wrong and you don&apos;t get a warning — you get a specific error code and a dead script.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">4</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">values in google-ads.yaml</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">days before a Testing-mode refresh token dies</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">4</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">recurring auth errors mapped to fixes below</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">$0</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">cost of setting any of this up correctly</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Quick answer</p>
        <p className="text-base text-gray-700 mb-0">
          A Google Ads API developer token identifies your application and never changes; an OAuth2 client (client ID and secret) identifies your app to Google&apos;s auth servers; a refresh token identifies the person who granted access and can expire. For a solo operator or agency running your own scripts, use the OAuth2 desktop (installed app) flow — it&apos;s the simplest path and offline access is on by default. Use the web application flow only if you&apos;re building something users log into through a browser. Service accounts make sense only for server-to-server automation inside a Google Workspace domain with domain-wide delegation configured for the adwords scope — Google&apos;s own service account guide doesn&apos;t spell this requirement out, but skip it and the call fails with <code>AuthenticationError.NOT_ADS_USER</code>.
        </p>
      </div>

      <p>
        My Basic Access application for the Google Ads API got reviewed in a few hours instead of the usual days — I wrote about the exact steps in{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-guide" } }} className="underline text-blue-700 font-medium">
          the Basic Access guide
        </Link>
        . But an approved token doesn&apos;t mean anything until you get through the auth handshake, and that&apos;s a separate problem entirely — the first time I hit it hard, a Google Merchant Center token died mid-script with no warning at all.
      </p>
      <p>
        This guide is the part nobody explains cleanly: OAuth2 desktop vs. web flow, the 7-day trap, what a developer token header actually is versus an OAuth token, when a service account is genuinely the right tool (and when it silently isn&apos;t), and a two-minute Python test to confirm the whole chain works before you build anything on top of it.
      </p>

      <hr />
      {/* ── Table of Contents ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Table of Contents</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#three-layers" className="block py-1 text-base text-gray-700 hover:text-primary underline">The three (plus one) layers of Google Ads API auth</a></li>
          <li><a href="#oauth2-desktop-vs-web" className="block py-1 text-base text-gray-700 hover:text-primary underline">OAuth2: desktop flow vs. web flow</a></li>
          <li><a href="#testing-mode-trap" className="block py-1 text-base text-gray-700 hover:text-primary underline">The trap: Testing mode kills your refresh token in 7 days</a></li>
          <li><a href="#developer-token-login-customer-id" className="block py-1 text-base text-gray-700 hover:text-primary underline">Developer token header + login-customer-id</a></li>
          <li><a href="#service-accounts" className="block py-1 text-base text-gray-700 hover:text-primary underline">Service accounts — the catch the quick reference skips</a></li>
          <li><a href="#google-ads-yaml" className="block py-1 text-base text-gray-700 hover:text-primary underline">google-ads.yaml: what the file actually needs</a></li>
          <li><a href="#verify-it-works" className="block py-1 text-base text-gray-700 hover:text-primary underline">Verify it works: a minimal Python test</a></li>
          <li><a href="#common-errors" className="block py-1 text-base text-gray-700 hover:text-primary underline">Common errors and what actually causes them</a></li>
          <li><a href="#faq-google-ads-api-authentication" className="block py-1 text-base text-gray-700 hover:text-primary underline">Frequently asked questions</a></li>
        </ol>
      </nav>

      <h2 id="three-layers">The three (plus one) layers of Google Ads API auth</h2>
      <p>
        The single most common beginner mix-up: a developer token is not an OAuth token, and getting one approved doesn&apos;t authenticate anything by itself. They&apos;re two unrelated credentials that both have to be present on every call, plus a third that only matters once you&apos;re working through a manager account.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Layer</th>
              <th className="py-3 px-3 font-heading font-semibold">What it is</th>
              <th className="py-3 px-3 font-heading font-semibold">Where it lives</th>
              <th className="py-3 px-3 font-heading font-semibold">If it&apos;s wrong or missing</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">OAuth2 client (client ID + secret)</td>
              <td className="py-3 px-3">Identifies your application to Google&apos;s auth servers</td>
              <td className="py-3 px-3">Cloud Console → Credentials → Create OAuth client ID</td>
              <td className="py-3 px-3">The auth flow can&apos;t start</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Refresh token</td>
              <td className="py-3 px-3">A long-lived pass that&apos;s exchanged for short-lived access tokens</td>
              <td className="py-3 px-3">Output of the OAuth consent flow (desktop or web)</td>
              <td className="py-3 px-3"><code>invalid_grant</code> — the script stops</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Developer token</td>
              <td className="py-3 px-3">Identifies your <em>application</em> to the Google Ads API — not the user</td>
              <td className="py-3 px-3">API Center, in your manager account</td>
              <td className="py-3 px-3"><code>DEVELOPER_TOKEN_NOT_APPROVED</code></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">login-customer-id</td>
              <td className="py-3 px-3">Says which account (MCC or client) you&apos;re targeting</td>
              <td className="py-3 px-3">A header you set, required when going through an MCC</td>
              <td className="py-3 px-3"><code>USER_PERMISSION_DENIED</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The developer token itself — how it&apos;s generated, and the Test / Explorer / Basic / Standard access levels that gate what it can call — is covered in full in{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-guide" } }} className="underline text-blue-700 font-medium">
          the Basic Access guide
        </Link>
        . This post assumes you have a token (any level works for testing) and focuses on getting the other layers right.
      </p>

      <hr />

      <h2 id="oauth2-desktop-vs-web">OAuth2: desktop flow vs. web flow</h2>
      <p>
        The Google Ads API supports two OAuth2 flows, and picking the right one saves you a class of bugs later. Per Google&apos;s own{" "}
        <a href="https://developers.google.com/google-ads/api/docs/oauth/internals" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          OAuth internals documentation
        </a>
        , the desktop (installed app) flow has offline access — the ability to refresh a token without the user sitting there — turned on by default, so you don&apos;t have to explicitly request it. The web application flow doesn&apos;t; it needs an explicit <code>access_type=offline</code> parameter on the auth request, or your refresh token never shows up.
      </p>
      <p>
        For a solo operator or an agency running internal scripts — reporting pulls, budget-pacing checks, bid changes — the desktop flow is the right default. It&apos;s what I run for every client account under my own manager account. The web flow is for the other case: an app with a login screen that a third party uses.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Open the OAuth consent screen</strong> <span className="text-gray-500">— same Cloud Console project you&apos;d use for the developer token. Configure it once (app name, support email, scopes) if you haven&apos;t already.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Credentials → Create OAuth client ID</strong> <span className="text-gray-500">— pick application type <strong>Desktop app</strong>, not Web application, unless you specifically need the browser-login flow.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Download the client secret JSON</strong> <span className="text-gray-500">— this holds the client ID and client secret your code will read. Never commit it to a repository.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Run the local auth flow once</strong> <span className="text-gray-500">— <code>InstalledAppFlow.run_local_server()</code> in Python opens a browser, you approve access with your Google account, and the flow hands you a refresh token in the terminal.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Save the refresh token into google-ads.yaml</strong> <span className="text-gray-500">— alongside the client ID, client secret, and developer token. You only run steps 1-4 once; after that, the library refreshes access tokens on its own.</span>
            </div>
          </div>
        </div>
      </div>

      <p>
        If you&apos;ve already been through the OAuth consent screen for brand verification — Step 4 in the Basic Access guide — you&apos;ll recognize this screen. It&apos;s the same one; you&apos;re just here for a different reason this time.
      </p>

      <hr />

      <h2 id="testing-mode-trap">The trap: Testing mode kills your refresh token in 7 days</h2>
      <p>
        This one is documented, but easy to miss. Per Google&apos;s own{" "}
        <a href="https://developers.google.com/identity/protocols/oauth2#expiration" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          OAuth 2.0 documentation
        </a>
        , a Cloud project with an External user type and a Testing publishing status issues refresh tokens that expire after 7 days — no email, no warning banner, nothing. The next call just fails with <code>invalid_grant</code> (&quot;Token has been expired or revoked&quot;), and if the script runs unattended overnight, you find out when the report doesn&apos;t show up. I&apos;ve walked through exactly how this cost me a dead Google Merchant Center token, and the fix, in{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-api-access-guide-for-agencies" } }} className="underline text-blue-700 font-medium">
          the Google API access guide for agencies
        </Link>
        . If your project is the same one you already pushed to <strong>In production</strong> for brand verification (Step 4 of the Basic Access guide), you&apos;ve already fixed this — nothing more to do. If not, check now: Cloud Console → APIs and services → OAuth consent screen → Audience tab.
      </p>

      <hr />

      <h2 id="developer-token-login-customer-id">Developer token header + login-customer-id</h2>
      <p>
        Two more pieces get confused for each other constantly, and neither is an OAuth concept.
      </p>
      <p>
        The <strong>developer token</strong> is not a header you get from an OAuth flow — it&apos;s a fixed string from your manager account&apos;s API Center (22 characters in my accounts), and it goes on every request as a <code>developer-token</code> HTTP/gRPC header. It identifies the application, not the person calling it, and it&apos;s the same value regardless of which Google account authenticated the call.
      </p>
      <p>
        <strong>login-customer-id</strong> only matters once your authenticated account has access to a manager (MCC) account. If you&apos;re calling the API to act on a client account underneath that MCC, you have to tell Google which account context you&apos;re operating in — set the <code>login-customer-id</code> header to the MCC&apos;s ID. Skip it and you get <code>USER_PERMISSION_DENIED</code>: &quot;the authorized customer does not have access to the operating customer,&quot; even though, from the Google Ads UI, you clearly do.
      </p>

      <hr />

      <h2 id="service-accounts">Service accounts — the catch the quick reference skips</h2>
      <p>
        Google&apos;s own{" "}
        <a href="https://developers.google.com/google-ads/api/docs/oauth/service-accounts" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          service account guide
        </a>{" "}
        makes it look simple: create a service account, download the JSON key, sign into Google Ads as an admin, go to Admin → Access and security, add the service account&apos;s email as a user, set <code>json_key_file_path</code> in your config. Four steps, done.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Why this trips people up</p>
        <p className="text-yellow-800 text-base mb-0">
          In practice, that guide leaves out a step. Without a Google Workspace domain and domain-wide delegation configured for the <code>adwords</code> scope, the call still fails — typically with <code>AuthenticationError.NOT_ADS_USER</code>, the same error you&apos;d see from an OAuth account with no Google Ads access at all. Developers hitting this have documented the fix on{" "}
          <a href="https://groups.google.com/g/adwords-api/c/-KNzaE-6pus" target="_blank" rel="noopener noreferrer" className="underline text-yellow-900 font-medium">
            Google&apos;s own Ads API developer forum
          </a>
          : the service account has to impersonate a real Workspace user via a <code>subject</code> parameter, and that impersonation step is what actually authenticates the request, not the service account credential on its own.
        </p>
      </div>

      <p>
        When it&apos;s worth it: server-to-server automation with no human in the loop for every token refresh, and — usefully — access that doesn&apos;t break the day an employee leaves, since it isn&apos;t tied to any one person&apos;s Google account. Per Google&apos;s guide, one service account email can be added to up to 20 Google Ads accounts; beyond that, Google&apos;s guidance is to add it under a manager account instead.
      </p>
      <p>
        When it isn&apos;t: a solo operator or a small team without a Workspace domain. That&apos;s my actual setup — every script I run against the Google Ads API uses the desktop OAuth flow above, not a service account, because it&apos;s simpler to configure and doesn&apos;t require standing up domain-wide delegation for one person&apos;s automation.
      </p>

      <hr />

      <h2 id="google-ads-yaml">google-ads.yaml: what the file actually needs</h2>
      <p>
        Whichever flow you use, the Python client library reads everything from one YAML file. Here&apos;s the shape of it — replace every value, obviously, this isn&apos;t a real config:
      </p>

      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
        <code>{`developer_token: "INSERT_DEVELOPER_TOKEN_HERE"
client_id: "INSERT_OAUTH2_CLIENT_ID_HERE"
client_secret: "INSERT_OAUTH2_CLIENT_SECRET_HERE"
refresh_token: "INSERT_REFRESH_TOKEN_HERE"
login_customer_id: "1234567890"   # MCC ID, digits only, no dashes — omit this line entirely for a standalone account
use_proto_plus: True`}</code>
      </pre>

      <p>
        Two things worth flagging: <code>login_customer_id</code> is the MCC ID without dashes, and it only needs to be set if you&apos;re calling through a manager account — leave it out for a standalone account. And <code>use_proto_plus: True</code> isn&apos;t optional cosmetics; the client library requires this field in its configuration, and its absence produces confusing type errors that have nothing to do with authentication at all.
      </p>

      <hr />

      <h2 id="verify-it-works">Verify it works: a minimal Python test</h2>
      <p>
        Before building anything on top of this, confirm the whole chain — OAuth2, developer token, login-customer-id — actually connects. The same principle as testing at Explorer access before applying for Basic: prove the plumbing works on the smallest possible call first.
      </p>

      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
        <code>{`# 1) One-time: generate a refresh token (desktop OAuth flow)
from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = ["https://www.googleapis.com/auth/adwords"]
flow = InstalledAppFlow.from_client_secrets_file("client_secret.json", scopes=SCOPES)
credentials = flow.run_local_server(port=8080, prompt="consent")
print(credentials.refresh_token)  # paste this into google-ads.yaml

# 2) First call: does the connection actually work?
from google.ads.googleads.client import GoogleAdsClient

client = GoogleAdsClient.load_from_storage("google-ads.yaml")
ga_service = client.get_service("GoogleAdsService")

query = "SELECT customer.id, customer.descriptive_name FROM customer LIMIT 1"
response = ga_service.search(customer_id="9876543210", query=query)

for row in response:
    print(row.customer.descriptive_name)`}</code>
      </pre>

      <p>
        If that returns an account name, every layer — OAuth2, developer token, login-customer-id — is correctly wired. If it fails, the error you get back tells you exactly which layer to fix; see the table below.
      </p>

      <hr />

      <h2 id="common-errors">Common errors and what actually causes them</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Error</th>
              <th className="py-3 px-3 font-heading font-semibold">What it means</th>
              <th className="py-3 px-3 font-heading font-semibold">Typical cause</th>
              <th className="py-3 px-3 font-heading font-semibold">Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium"><code>invalid_grant</code> / RefreshError</td>
              <td className="py-3 px-3">Your refresh token is dead</td>
              <td className="py-3 px-3">OAuth consent screen in Testing status — refresh tokens expire after 7 days</td>
              <td className="py-3 px-3">Switch publishing status to In production; regenerate the refresh token once</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium"><code>USER_PERMISSION_DENIED</code></td>
              <td className="py-3 px-3">You don&apos;t have rights to this account, in this call</td>
              <td className="py-3 px-3"><code>login-customer-id</code> missing when calling a client account under an MCC</td>
              <td className="py-3 px-3">Set the <code>login-customer-id</code> header to your MCC&apos;s ID</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">AuthenticationError.<code>NOT_ADS_USER</code></td>
              <td className="py-3 px-3">The account behind the token isn&apos;t a Google Ads user</td>
              <td className="py-3 px-3">(a) OAuth account has no Google Ads access, or (b) service account missing the <code>subject</code> impersonation parameter</td>
              <td className="py-3 px-3">(a) Authenticate with an account that has Ads access; (b) add <code>subject</code>/impersonated email and confirm domain-wide delegation</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium"><code>DEVELOPER_TOKEN_NOT_APPROVED</code></td>
              <td className="py-3 px-3">Your token can&apos;t use this account or this service</td>
              <td className="py-3 px-3">Test-level token against a production account, or an Explorer-level token calling a service Explorer doesn&apos;t cover</td>
              <td className="py-3 px-3">See the Test → Explorer → Basic progression in{" "}
                <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-guide" } }} className="underline text-blue-700 font-medium">
                  the Basic Access guide
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        All four descriptions above are quoted from Google&apos;s{" "}
        <a href="https://developers.google.com/google-ads/api/docs/get-started/common-errors" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          official common-errors documentation
        </a>
        . The causes and fixes are what I&apos;ve actually run into wiring this up for client accounts.
      </p>

      <hr />

      <h2 id="faq-google-ads-api-authentication">Frequently asked questions</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          What&apos;s the difference between a developer token and an OAuth2 token in the Google Ads API?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          A developer token identifies your application — it&apos;s a fixed string issued once in your manager account&apos;s API Center (22 characters in my accounts), and it never expires on its own. An OAuth2 access token (and the refresh token behind it) identifies the person who authorized your app, and it can expire or be revoked. Every Google Ads API call needs both: the developer token as a header, and a valid OAuth2 access token for authentication.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Why does my refresh token stop working every 7 days?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Your Google Cloud project&apos;s OAuth consent screen is set to an External user type with a Testing publishing status. Google documents this: refresh tokens issued under those conditions expire after 7 days, which surfaces as <code>invalid_grant</code> or a RefreshError. Switching the publishing status to In production removes that 7-day expiry — you only need to do it once per project.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Do I need Google Workspace to use a service account with the Google Ads API?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          In practice, yes. Google&apos;s quick-start steps for service accounts don&apos;t spell this out, but developers who&apos;ve implemented it report that without a Google Workspace domain and domain-wide delegation configured for the <code>adwords</code> scope, the call fails with <code>AuthenticationError.NOT_ADS_USER</code> — the service account has to impersonate a real Workspace user via a <code>subject</code> parameter to authenticate successfully. For a solo operator or small team without a Workspace domain, the OAuth2 desktop flow is simpler and doesn&apos;t require any of this.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          What is login-customer-id and when do I need it?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          <code>login-customer-id</code> is a header that tells the Google Ads API which account context you&apos;re operating in. It&apos;s required whenever the authenticated account accesses a client account through a manager (MCC) account — set it to the MCC&apos;s ID. Leaving it out when it&apos;s needed produces <code>USER_PERMISSION_DENIED</code>, even if you can see the account fine in the Google Ads UI.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          What does AuthenticationError.NOT_ADS_USER mean?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Per Google&apos;s official documentation, it means the Google account used to generate the access token isn&apos;t associated with any Google Ads account. It shows up in two situations: an OAuth login with no Google Ads access at all, or a service account call missing the <code>subject</code>/impersonated-user parameter it needs to authenticate as a real Workspace user.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Want the API doing the monitoring instead of you?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          I build and run this exact auth stack for client accounts — nightly reporting, budget-pacing checks, disapproval alerts — on top of a properly configured Google Ads API connection, no 3am invalid_grant surprises.
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
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-guide" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads API Basic Access Guide</p>
          <p className="text-xs text-gray-500 mb-0">Getting your developer token approved, including the July 2026 fast-track.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-api-access-guide-for-agencies" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google API Access Guide for Agencies</p>
          <p className="text-xs text-gray-500 mb-0">One Cloud project, six APIs: Ads, GA4, Search Console, GTM, and more.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "offline-conversion-import-b2b" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Offline Conversion Import for B2B</p>
          <p className="text-xs text-gray-500 mb-0">Feeding closed deals back into Google Ads, running on the same API.</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Last updated: August 29, 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Author: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
