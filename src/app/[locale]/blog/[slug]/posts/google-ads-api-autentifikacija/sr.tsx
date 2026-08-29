import { Link } from "@/i18n/navigation";

export default function GoogleAdsApiAutentifikacijaSR() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Autentifikacija na Google Ads API-ju ima tri sloja koja se stalno mešaju - OAuth2 kredencijali koji kažu ko ste, developer token koji kaže koja je aplikacija u pitanju, i login-customer-id koji kaže koji nalog gađate. Postoji i četvrti, opcioni sloj (service account) za uži slučaj upotrebe nego što quick-start dokumentacija sugeriše. Pogrešite li bilo koji od ta tri, ne dobijate upozorenje - dobijate konkretan kod greške i mrtav skript.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">4</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">vrednosti u google-ads.yaml</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">dana pre nego refresh token u Testing modu umre</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">4</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">česte auth greške mapirane na rešenja ispod</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">€0</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">koliko košta da se ovo podesi kako treba</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 font-semibold">Brz odgovor</p>
        <p className="text-base text-gray-700 mb-0">
          Developer token na Google Ads API-ju identifikuje vašu aplikaciju i nikad se ne menja; OAuth2 client (client ID i secret) identifikuje aplikaciju Google-ovim auth serverima; refresh token identifikuje osobu koja je odobrila pristup i može isteći. Za solo operatera ili agenciju koja vodi sopstvene skriptove, koristite OAuth2 desktop (installed app) tok - najjednostavniji je put i offline pristup je uključen po default-u. Web application tok koristite samo ako gradite nešto u šta se korisnici uloguju kroz browser. Service account ima smisla isključivo kad radite server-to-server automatizaciju unutar Google Workspace domena sa podešenom domain-wide delegacijom za adwords scope - Google-ov sopstveni vodič za service account to ne objašnjava, ali bez toga, poziv preko service account-a na Google Ads API-ju ne prolazi sa <code>AuthenticationError.NOT_ADS_USER</code>.
        </p>
      </div>

      <p>
        Moja Basic Access prijava za Google Ads API prošla je pregled za par sati umesto uobičajenih dana - tačne korake opisao sam u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-vodic" } }} className="underline text-blue-700 font-medium">
          vodiču za Basic Access
        </Link>
        . Ali odobren token ne znači ništa dok ne prođete kroz auth handshake, a to je sasvim odvojen problem - prvi put me je to sasekao na tokenu za Google Merchant Center koji je umro usred skripta, bez ijednog upozorenja.
      </p>
      <p>
        Ovaj vodič pokriva deo koji niko čisto ne objasni: OAuth2 desktop naspram web toka, zamku od 7 dana, šta je developer token header stvarno u odnosu na OAuth token, kad je service account zaista pravi alat (a kad to samo izgleda tako), i test od dva minuta u Python-u kojim proverite da ceo lanac radi pre nego što na njemu gradite bilo šta.
      </p>

      <hr />
      {/* ── Sadržaj ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#tri-sloja" className="block py-1 text-base text-gray-700 hover:text-primary underline">Tri (plus jedan) sloja Google Ads API autentifikacije</a></li>
          <li><a href="#oauth2-desktop-vs-web" className="block py-1 text-base text-gray-700 hover:text-primary underline">OAuth2: desktop tok naspram web toka</a></li>
          <li><a href="#testing-mode-zamka" className="block py-1 text-base text-gray-700 hover:text-primary underline">Zamka: Testing mode ubija refresh token za 7 dana</a></li>
          <li><a href="#developer-token-login-customer-id" className="block py-1 text-base text-gray-700 hover:text-primary underline">Developer token header + login-customer-id</a></li>
          <li><a href="#service-account" className="block py-1 text-base text-gray-700 hover:text-primary underline">Service account - deo koji quick reference preskače</a></li>
          <li><a href="#google-ads-yaml" className="block py-1 text-base text-gray-700 hover:text-primary underline">google-ads.yaml: šta fajlu stvarno treba</a></li>
          <li><a href="#proveri-da-radi" className="block py-1 text-base text-gray-700 hover:text-primary underline">Proveri da radi: minimalan Python test</a></li>
          <li><a href="#cesce-greske" className="block py-1 text-base text-gray-700 hover:text-primary underline">Česte greške i šta ih stvarno izaziva</a></li>
          <li><a href="#faq-google-ads-api-autentifikacija" className="block py-1 text-base text-gray-700 hover:text-primary underline">Najčešća pitanja</a></li>
        </ol>
      </nav>

      <h2 id="tri-sloja">Tri (plus jedan) sloja Google Ads API autentifikacije</h2>
      <p>
        Najčešća zabuna kod početnika: developer token nije OAuth token, i njegovo odobrenje samo po sebi ne autentifikuje ništa. To su dva potpuno nezavisna kredencijala koja moraju biti prisutna na svakom pozivu, plus treći koji je bitan tek kad radite kroz manager nalog.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Sloj</th>
              <th className="py-3 px-3 font-heading font-semibold">Šta je</th>
              <th className="py-3 px-3 font-heading font-semibold">Gde se nalazi</th>
              <th className="py-3 px-3 font-heading font-semibold">Ako fali ili je pogrešan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">OAuth2 client (client ID + secret)</td>
              <td className="py-3 px-3">Identifikuje vašu aplikaciju Google-ovim auth serverima</td>
              <td className="py-3 px-3">Cloud Console → Credentials → Create OAuth client ID</td>
              <td className="py-3 px-3">Auth tok ne može ni da počne</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Refresh token</td>
              <td className="py-3 px-3">Dugotrajna propusnica koja se razmenjuje za kratkotrajne access tokene</td>
              <td className="py-3 px-3">Izlaz iz OAuth consent toka (desktop ili web)</td>
              <td className="py-3 px-3"><code>invalid_grant</code> - skript staje</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Developer token</td>
              <td className="py-3 px-3">Identifikuje vašu <em>aplikaciju</em> Google Ads API-ju - ne korisnika</td>
              <td className="py-3 px-3">API Center, u tvom manager nalogu</td>
              <td className="py-3 px-3"><code>DEVELOPER_TOKEN_NOT_APPROVED</code></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">login-customer-id</td>
              <td className="py-3 px-3">Kaže koji nalog (MCC ili klijentski) gađate</td>
              <td className="py-3 px-3">Header koji sami podešavate, obavezan kad idete kroz MCC</td>
              <td className="py-3 px-3"><code>USER_PERMISSION_DENIED</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Sam developer token - kako se generiše, i nivoi pristupa Test / Explorer / Basic / Standard koji određuju šta može da poziva - pokriven je u celini u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-vodic" } }} className="underline text-blue-700 font-medium">
          vodiču za Basic Access
        </Link>
        . Ovaj post pretpostavlja da već imate token (bilo koji nivo radi za testiranje) i fokusira se na to da ostali slojevi rade kako treba.
      </p>

      <hr />

      <h2 id="oauth2-desktop-vs-web">OAuth2: desktop tok naspram web toka</h2>
      <p>
        Google Ads API podržava dva OAuth2 toka, i izbor pravog štedi celu klasu bagova kasnije. Prema Google-ovoj{" "}
        <a href="https://developers.google.com/google-ads/api/docs/oauth/internals" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          dokumentaciji o OAuth internom radu
        </a>
        , desktop (installed app) tok ima offline pristup - mogućnost da se token osveži bez korisnika koji sedi ispred ekrana - uključen po default-u: eksplicitno ga ne morate tražiti. Web application tok to nema; treba mu eksplicitan <code>access_type=offline</code> parametar na auth zahtevu, ili refresh token uopšte ne stiže.
      </p>
      <p>
        Za solo operatera ili agenciju koja vodi interne skriptove - izvlačenje reportova, provere trošenja budžeta, promene bidova - desktop tok je pravi default. Njega pokrećem za svaki klijentski nalog pod sopstvenim manager nalogom. Web tok je za drugi slučaj: aplikaciju sa ekranom za login koju koristi treća strana.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Otvorite OAuth consent screen</strong> <span className="text-gray-500">- isti Cloud Console projekat koji biste koristili za developer token. Podesite ga jednom (ime aplikacije, support email, scope-ovi) ako to već niste uradili.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Credentials → Create OAuth client ID</strong> <span className="text-gray-500">- izaberite tip aplikacije <strong>Desktop app</strong>, ne Web application, osim ako vam konkretno treba browser-login tok.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Preuzmite client secret JSON</strong> <span className="text-gray-500">- u njemu su client ID i client secret koje čita vaš kod. Nikad ga ne komitujte u repozitorijum.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Pokrenite lokalni auth tok jednom</strong> <span className="text-gray-500">- <code>InstalledAppFlow.run_local_server()</code> u Python-u otvara browser, odobrite pristup svojim Google nalogom, i tok vam u terminalu vraća refresh token.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Sačuvajte refresh token u google-ads.yaml</strong> <span className="text-gray-500">- zajedno sa client ID-jem, client secret-om i developer token-om. Korake 1-4 radite samo jednom; posle toga biblioteka sama osvežava access tokene.</span>
            </div>
          </div>
        </div>
      </div>

      <p>
        Ako ste već prošli kroz OAuth consent screen radi verifikacije brenda - korak 4 u vodiču za Basic Access - prepoznaćete ovaj ekran. Isti je; sad ste tu iz drugog razloga.
      </p>

      <hr />

      <h2 id="testing-mode-zamka">Zamka: Testing mode ubija refresh token za 7 dana</h2>
      <p>
        Ovo je dokumentovano, ali se lako previdi. Prema Google-ovoj{" "}
        <a href="https://developers.google.com/identity/protocols/oauth2#expiration" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          OAuth 2.0 dokumentaciji
        </a>
        , Cloud projekat sa External tipom korisnika i Testing statusom objave izdaje refresh tokene koji ističu za 7 dana - bez mejla, bez upozorenja, ničega. Sledeći poziv jednostavno padne sa <code>invalid_grant</code> (&quot;Token has been expired or revoked&quot;), i ako skript radi bez nadzora preko noći, saznajete tek kad report ne stigne. Tačno ovako mi je umro jedan token za Google Merchant Center, a ceo taj incident i rešenje opisao sam u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-api-pristupi-za-agencije" } }} className="underline text-blue-700 font-medium">
          vodiču za Google API pristupe za agencije
        </Link>
        . Ako je vaš projekat isti onaj koji ste već gurnuli u <strong>In production</strong> radi verifikacije brenda (korak 4 iz vodiča za Basic Access), ovo je već rešeno. Ako niste, proverite sad: Cloud Console → APIs and services → OAuth consent screen → tab Audience.
      </p>

      <hr />

      <h2 id="developer-token-login-customer-id">Developer token header + login-customer-id</h2>
      <p>
        Još dve stvari se stalno mešaju jedna sa drugom, i nijedna nije OAuth koncept.
      </p>
      <p>
        <strong>Developer token</strong> nije header koji dobijate iz OAuth toka - to je fiksan string iz API Center-a vašeg manager naloga (22 karaktera u mojim nalozima), i ide na svaki zahtev kao <code>developer-token</code> HTTP/gRPC header. Identifikuje aplikaciju, ne osobu koja poziva, i ista je vrednost bez obzira koji je Google nalog autentifikovao poziv.
      </p>
      <p>
        <strong>login-customer-id</strong> je bitan tek kad vaš autentifikovan nalog ima pristup manager (MCC) nalogu. Ako pozivate API da uradite nešto na klijentskom nalogu ispod tog MCC-a, morate Google-u reći u kontekstu kog naloga radite - postavite <code>login-customer-id</code> header na ID MCC-a. Preskočite to i dobijate <code>USER_PERMISSION_DENIED</code>: &quot;the authorized customer does not have access to the operating customer&quot;, iako u Google Ads interfejsu jasno imate pristup.
      </p>

      <hr />

      <h2 id="service-account">Service account - deo koji quick reference preskače</h2>
      <p>
        Google-ov sopstveni{" "}
        <a href="https://developers.google.com/google-ads/api/docs/oauth/service-accounts" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          vodič za service account
        </a>{" "}
        deluje jednostavno: napravite service account, preuzmite JSON ključ, ulogujte se u Google Ads kao admin, idite na Admin → Access and security, dodajte email service account-a kao korisnika, postavite <code>json_key_file_path</code> u konfiguraciji. Četiri koraka, gotovo.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Zašto ovde ljudi zapinju</p>
        <p className="text-yellow-800 text-base mb-0">
          U praksi, taj vodič preskače jedan korak. Bez Google Workspace domena i podešene domain-wide delegacije za <code>adwords</code> scope, poziv i dalje ne prolazi - obično sa <code>AuthenticationError.NOT_ADS_USER</code>, istom greškom koju biste dobili od OAuth naloga bez ikakvog pristupa Google Ads-u. Programeri koji su na ovo naleteli rešenje su dokumentovali na{" "}
          <a href="https://groups.google.com/g/adwords-api/c/-KNzaE-6pus" target="_blank" rel="noopener noreferrer" className="underline text-yellow-900 font-medium">
            Google-ovom sopstvenom forumu za Ads API developere
          </a>
          : service account mora da impersonira stvarnog Workspace korisnika preko <code>subject</code> parametra, i taj korak impersonacije je ono što stvarno autentifikuje zahtev, ne sam kredencijal service account-a.
        </p>
      </div>

      <p>
        Kad se isplati: server-to-server automatizacija bez čoveka u petlji za svako osvežavanje tokena, i - korisno - pristup koji ne pukne onog dana kad zaposleni ode, jer nije vezan ni za čiji lični Google nalog. Prema Google-ovom vodiču, jedan email service account-a može se dodati na do 20 Google Ads naloga; iznad toga, preporuka je da se doda kroz manager nalog.
      </p>
      <p>
        Kad se ne isplati: solo operater ili mali tim bez Workspace domena. To je i moja stvarna postavka - svaki skript koji pokrećem prema Google Ads API-ju koristi desktop OAuth tok opisan gore, ne service account, jer se jednostavnije podešava i ne zahteva podizanje domain-wide delegacije za automatizaciju jedne osobe.
      </p>

      <hr />

      <h2 id="google-ads-yaml">google-ads.yaml: šta fajlu stvarno treba</h2>
      <p>
        Koji god tok da koristite, Python client biblioteka čita sve iz jednog YAML fajla. Evo kako izgleda - zamenite svaku vrednost, naravno, ovo nije stvarna konfiguracija:
      </p>

      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
        <code>{`developer_token: "UPIŠI_DEVELOPER_TOKEN_OVDE"
client_id: "UPIŠI_OAUTH2_CLIENT_ID_OVDE"
client_secret: "UPIŠI_OAUTH2_CLIENT_SECRET_OVDE"
refresh_token: "UPIŠI_REFRESH_TOKEN_OVDE"
login_customer_id: "1234567890"   # MCC ID, samo cifre, bez crtica; izostavite ovaj red za samostalan nalog
use_proto_plus: True`}</code>
      </pre>

      <p>
        Dve stvari vredne isticanja: <code>login_customer_id</code> je MCC ID bez crtica, i mora se postaviti samo ako pozivate kroz manager nalog - izostavite ga za samostalan nalog. A <code>use_proto_plus: True</code> nije opciona kozmetika; client biblioteka zahteva ovo polje u konfiguraciji, i njegovo odsustvo pravi konfuzne greške tipova koje s autentifikacijom nemaju veze.
      </p>

      <hr />

      <h2 id="proveri-da-radi">Proveri da radi: minimalan Python test</h2>
      <p>
        Pre nego što na ovome bilo šta gradite, proverite da ceo lanac - OAuth2, developer token, login-customer-id - stvarno radi. Isti princip kao testiranje na Explorer pristupu pre prijave za Basic: prvo dokažite da lanac radi na najmanjem mogućem pozivu.
      </p>

      <pre className="border border-gray-200 rounded-xl p-5 bg-gray-50 text-sm leading-relaxed overflow-x-auto">
        <code>{`# 1) Jednokratno: generiši refresh token (desktop OAuth tok)
from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = ["https://www.googleapis.com/auth/adwords"]
flow = InstalledAppFlow.from_client_secrets_file("client_secret.json", scopes=SCOPES)
credentials = flow.run_local_server(port=8080, prompt="consent")
print(credentials.refresh_token)  # nalepi ovo u google-ads.yaml

# 2) Prvi poziv: da li konekcija stvarno radi?
from google.ads.googleads.client import GoogleAdsClient

client = GoogleAdsClient.load_from_storage("google-ads.yaml")
ga_service = client.get_service("GoogleAdsService")

query = "SELECT customer.id, customer.descriptive_name FROM customer LIMIT 1"
response = ga_service.search(customer_id="9876543210", query=query)

for row in response:
    print(row.customer.descriptive_name)`}</code>
      </pre>

      <p>
        Ako to vrati ime naloga, svaki sloj - OAuth2, developer token, login-customer-id - pravilno je povezan. Ako padne, greška koju dobijete nazad kaže tačno koji sloj popraviti; vidi tabelu ispod.
      </p>

      <hr />

      <h2 id="cesce-greske">Česte greške i šta ih stvarno izaziva</h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Greška</th>
              <th className="py-3 px-3 font-heading font-semibold">Šta znači</th>
              <th className="py-3 px-3 font-heading font-semibold">Tipičan uzrok</th>
              <th className="py-3 px-3 font-heading font-semibold">Rešenje</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium"><code>invalid_grant</code> / RefreshError</td>
              <td className="py-3 px-3">Refresh token je mrtav</td>
              <td className="py-3 px-3">OAuth consent screen u Testing statusu - refresh tokeni ističu za 7 dana</td>
              <td className="py-3 px-3">Prebaci status objave na In production; regeneriši refresh token jednom</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium"><code>USER_PERMISSION_DENIED</code></td>
              <td className="py-3 px-3">Nemaš prava na ovaj nalog, u ovom pozivu</td>
              <td className="py-3 px-3">Fali <code>login-customer-id</code> pri pozivu klijentskog naloga ispod MCC-a</td>
              <td className="py-3 px-3">Postavi <code>login-customer-id</code> header na ID svog MCC-a</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">AuthenticationError.<code>NOT_ADS_USER</code></td>
              <td className="py-3 px-3">Nalog iza tokena nije Google Ads korisnik</td>
              <td className="py-3 px-3">(a) OAuth nalog nema pristup Google Ads-u, ili (b) service account-u fali <code>subject</code> parametar impersonacije</td>
              <td className="py-3 px-3">(a) Autentifikuj se nalogom koji ima pristup Ads-u; (b) dodaj <code>subject</code>/impersonirani email i potvrdi domain-wide delegaciju</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium"><code>DEVELOPER_TOKEN_NOT_APPROVED</code></td>
              <td className="py-3 px-3">Tvoj token ne može da koristi ovaj nalog ili ovaj servis</td>
              <td className="py-3 px-3">Token na Test nivou protiv produkcijskog naloga, ili token na Explorer nivou koji poziva servis koji Explorer ne pokriva</td>
              <td className="py-3 px-3">Vidi progresiju Test → Explorer → Basic u{" "}
                <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-vodic" } }} className="underline text-blue-700 font-medium">
                  vodiču za Basic Access
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Sva četiri opisa gore citirana su iz Google-ove{" "}
        <a href="https://developers.google.com/google-ads/api/docs/get-started/common-errors" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 font-medium">
          zvanične dokumentacije o čestim greškama
        </a>
        . Uzroci i rešenja su ono na šta sam stvarno naleteo povezujući ovo za klijentske naloge.
      </p>

      <hr />

      <h2 id="faq-google-ads-api-autentifikacija">Najčešća pitanja</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koja je razlika između developer token-a i OAuth2 token-a na Google Ads API-ju?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Developer token identifikuje vašu aplikaciju - fiksan je string izdat jednom u API Center-u vašeg manager naloga (22 karaktera u mojim nalozima), i sam po sebi ne ističe. OAuth2 access token (i refresh token iza njega) identifikuje osobu koja je odobrila pristup vašoj aplikaciji, i može isteći ili biti opozvan. Svaki poziv na Google Ads API zahteva oba: developer token kao header, i validan OAuth2 access token za autentifikaciju.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Zašto mi refresh token prestane da radi na svakih 7 dana?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          OAuth consent screen vašeg Google Cloud projekta postavljen je na External tip korisnika sa statusom objave Testing. Google to dokumentuje: refresh tokeni izdati pod tim uslovima ističu posle 7 dana, što se pojavljuje kao <code>invalid_grant</code> ili RefreshError. Prebacivanje statusa objave na In production uklanja taj rok od 7 dana - to radite samo jednom po projektu.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li mi treba Google Workspace za service account na Google Ads API-ju?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          U praksi da. Google-ov sopstveni vodič za service account to ne objašnjava, ali programeri koji su ovo implementirali prijavljuju na Google-ovom Ads API developer forumu da bez Google Workspace domena i podešene domain-wide delegacije za <code>adwords</code> scope, poziv ne prolazi sa <code>AuthenticationError.NOT_ADS_USER</code> - service account mora da impersonira stvarnog Workspace korisnika preko <code>subject</code> parametra da bi se uspešno autentifikovao. Za solo operatera ili mali tim bez Workspace domena, OAuth2 desktop tok je jednostavniji i ništa od ovoga mu ne treba.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta je login-customer-id i kad mi treba?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          <code>login-customer-id</code> je header koji Google Ads API-ju kaže u kontekstu kog naloga radite. Obavezan je kad autentifikovan nalog pristupa klijentskom nalogu kroz manager (MCC) nalog - postavite ga na ID MCC-a. Izostavljanje kad je potreban proizvodi <code>USER_PERMISSION_DENIED</code>, čak i ako nalog jasno vidite u Google Ads interfejsu.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta znači AuthenticationError.NOT_ADS_USER?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Prema zvaničnoj Google dokumentaciji, znači da Google nalog korišćen za generisanje access tokena nije povezan ni sa jednim Google Ads nalogom. Pojavljuje se u dve situacije: OAuth login bez ikakvog pristupa Google Ads-u, ili poziv service account-a kojem fali <code>subject</code>/impersonirani parametar potreban da se autentifikuje kao stvaran Workspace korisnik.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Hoćete da API radi nadzor umesto vas?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          Gradim i vodim tačno ovaj auth stack za klijentske naloge - noćni reporti, provere trošenja budžeta, upozorenja za odbijene oglase - na vrhu ispravno podešene Google Ads API konekcije, bez iznenađenja tipa invalid_grant u 3 ujutru.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/konsultacije" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Konsultacije</p>
          <p className="text-xs text-gray-500 mb-0">Jednokratni audit ili tekuća saradnja na strategiji.</p>
        </Link>
        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Upravljanje</p>
          <p className="text-xs text-gray-500 mb-0">Kompletno vođenje naloga, uključujući nadzor preko API-ja.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-basic-access-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads API Basic Access Vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako da vam odobre developer token, uključujući brzu prijavu od jula 2026.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-api-pristupi-za-agencije" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google API Pristupi za Agencije</p>
          <p className="text-xs text-gray-500 mb-0">Jedan Cloud projekat, šest API-ja: Ads, GA4, Search Console, GTM i drugi.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "offline-conversion-import-b2b" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Offline Conversion Import za B2B</p>
          <p className="text-xs text-gray-500 mb-0">Kako zatvorene poslove vraćate nazad u Google Ads, na istom API-ju.</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: 29. avgust 2026.
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads konsultant
        </Link>
      </div>
    </>
  );
}
