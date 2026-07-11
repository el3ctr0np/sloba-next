import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function GoogleAdsApiBasicAccessVodicPost() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google Ads API Basic Access je nivo pristupa koji vam otključava produkcijske naloge za reporting i automatizaciju, sa limitom od 15.000 API operacija dnevno. Od 7. jula 2026. Google testira brand verification pilot koji, ako je vaša aplikacija na statusu pending, skraćuje čekanje na review sa dana ili nedelja na svega par sati.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">par sati</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Review uz brand verification</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">15.000</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Operacija dnevno na Basic</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">4</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Koraka do odobrenog tokena</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0 €</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Cena aplikacije i tokena</p>
          </div>
        </div>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Brzi odgovor
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Šta je Google Ads API Basic Access i kako se dobija?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          <strong>Google Ads API Basic Access</strong> je nivo pristupa developer tokenu koji vam dozvoljava rad sa pravim, produkcijskim Google Ads nalozima preko API-ja, do 15.000 operacija dnevno. Da biste ga dobili, aplicirate iz API Center-a u manager nalogu i čekate da Google pregleda vašu aplikaciju. Od jula 2026. postoji prečica: ako je vaša aplikacija zaglavljena na statusu pending, možete završiti brand verification na svom Google Cloud projektu, i Google obećava pregled u narednih nekoliko sati umesto uobičajenog čekanja.
        </p>
      </div>

      <p>
        Živimo u trenutku kada svaka ozbiljnija agencijska operacija prolazi kroz neki oblik API-ja i automatizacije, ne samo kroz interfejs u browseru. Kod mene to izgleda konkretno: svako jutro, pre nego što otvorim Google Ads na bilo kom klijentskom nalogu, već imam podatke iz noćne provere preko svih ~10 naloga koje vodim pod jednim manager nalogom. Budget pacing, performanse po kampanji, upozorenja kada nešto padne u disapproved, i rudarenje search termina koje bi ručno trajalo satima. Sve to radi API, ne ja.
      </p>
      <p>
        Ulaznica za sve to je developer token. Bez odobrenog tokena na nivou Basic Access, API vam vraća test podatke i ništa se ne dešava na pravim nalozima. Ja imam odobren token, ali sam prošao kroz stari proces koji je bio spor i neproziran. Aplikacija bi otišla na review i onda bi nastupila tišina. Nema statusne trake, nema procene koliko još treba čekati. Dani su prelazili u nedelje, i jedino što ste mogli da radite je da čekate mejl.
      </p>
      <p>
        To se menja. Google je 7. jula 2026. objavio pilot koji tu čekaonicu drastično skraćuje za developere koji su spremni da urade jedan dodatni, opcioni korak. Ovaj vodič vas vodi kroz ceo proces, od nule do odobrenog Basic Access tokena, uključujući i taj novi korak.
      </p>

      <hr />
      {/* ── Sadržaj ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#preduslovi" className="block py-1 text-base text-gray-700 hover:text-primary underline">Preduslovi pre nego što počnete</a></li>
          <li><a href="#korak-1-developer-token" className="block py-1 text-base text-gray-700 hover:text-primary underline">Korak 1: Developer token u API Center-u</a></li>
          <li><a href="#korak-2-basic-access-aplikacija" className="block py-1 text-base text-gray-700 hover:text-primary underline">Korak 2: Basic Access aplikacija</a></li>
          <li><a href="#korak-3-cloud-projekat" className="block py-1 text-base text-gray-700 hover:text-primary underline">Korak 3: Povezivanje sa Google Cloud projektom</a></li>
          <li><a href="#korak-4-brand-verification" className="block py-1 text-base text-gray-700 hover:text-primary underline">Korak 4: Brand verification (novi pilot)</a></li>
          <li><a href="#sta-dobijate-i-sta-ne-radi" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta dobijate sa Basic Access i šta i dalje ne radi</a></li>
          <li><a href="#faq-google-ads-api-basic-access" className="block py-1 text-base text-gray-700 hover:text-primary underline">Često postavljana pitanja</a></li>
        </ol>
      </nav>

      <h2 id="preduslovi">Preduslovi pre nego što počnete</h2>
      <p>
        Pre nego što uopšte otvorite API Center, treba vam dve stvari. Prva je Google Ads nalog, i preporučujem da to bude manager nalog (MCC), ne pojedinačni klijentski nalog. Razlog je praktičan: developer token živi na nivou manager naloga, i taj isti token pokriva sve klijentske naloge koje pod njim vodite. Ako aplicirate iz pojedinačnog naloga, kasnije ćete morati da radite ceo proces ponovo čim dobijete drugog klijenta.
      </p>
      <p>
        Druga stvar je Google Cloud projekat. Ovo nije dodatni posao, jer vam ionako treba da biste generisali OAuth2 kredencijale (client ID i client secret) preko kojih se API autentifikuje. Projekat je besplatan za kreiranje, i isti projekat ćete kasnije koristiti i za brand verification iz Koraka 4.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Iz mog iskustva</p>
        <p className="text-blue-800 text-base mb-0">
          Ako tek postavljate strukturu, krenite odmah od manager naloga. Token koji živi na MCC nivou pokriva svaki nalog koji kasnije povežete, pa novi klijent znači samo linkovanje naloga, bez nove aplikacije i novog čekanja. Ceo moj noćni monitoring preko desetak naloga radi na jednom jedinom tokenu upravo zato što je izdat na nivou MCC-a.
        </p>
      </div>

      <hr />

      <h2 id="korak-1-developer-token">Korak 1: Developer token u API Center-u</h2>
      <p>
        Developer token se nalazi na jednom, uvek istom mestu: u manager nalogu otvorite API Center, u novijem interfejsu pod Admin sekcijom (stariji nalozi ga i dalje prikazuju pod Tools and Settings). Ako do sada niste imali potrebu za API-jem, ova stranica vam verovatno nikad nije zapala za oko, ali tu se dešava sve što je vezano za pristup Google Ads API-ju.
      </p>

      {/* IMG-01: zameniti sa <Image src="/blog/google-ads-api-basic-access/01-api-center.webp" alt="..." width={1200} height={675} /> */}
      <figure className="my-6">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center bg-gray-50">
          <p className="text-sm font-semibold text-gray-500 mb-1">[Screenshot: API Center]</p>
          <p className="text-xs text-gray-400 mb-0">API Center u Google Ads manager nalogu sa karticom developer tokena i nivoom pristupa</p>
        </div>
      </figure>

      <p>
        Kada prvi put otvorite API Center, Google vam automatski generiše token, ali on dolazi sa statusom <strong>Test access</strong>. To je default, i to je namerno ograničen nivo: token radi isključivo sa test nalozima koje sami kreirate u Google Ads-u, i ne vidi ni jedan bajt produkcijskih podataka. Možete pisati i testirati kod, možete proveriti da li vam autentifikacija radi, ali ne možete povući izveštaj o pravom klijentu niti napraviti pravu izmenu na pravoj kampanji.
      </p>
      <p>
        Test access je koristan za jednu stvar: da proverite da vam osnovna konekcija radi pre nego što uopšte pošaljete aplikaciju za Basic Access. Ako API poziv na test nalogu ne prolazi, problem je u autentifikaciji ili konfiguraciji, ne u nivou pristupa, i bolje je to rešiti pre aplikacije nego posle.
      </p>

      {/* IMG-02: zameniti sa <Image src="/blog/google-ads-api-basic-access/02-test-access-token.webp" alt="..." width={1200} height={675} /> */}
      <figure className="my-6">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center bg-gray-50">
          <p className="text-sm font-semibold text-gray-500 mb-1">[Screenshot: Test access token]</p>
          <p className="text-xs text-gray-400 mb-0">Developer token sa nivoom pristupa Test access, pre podnošenja aplikacije za Basic Access</p>
        </div>
      </figure>

      <hr />

      <h2 id="korak-2-basic-access-aplikacija">Korak 2: Basic Access aplikacija</h2>
      <p>
        Iz API Center-a, uz karticu developer tokena, nalazi se dugme za aplikaciju za viši nivo pristupa. Otvara se forma sa nekoliko pitanja o tome ko ste i šta planirate da radite sa API-jem. Ovde se najviše grešaka pravi, i ovde vredi uložiti deset minuta pažnje umesto da formu popunite uzgred.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Budite konkretni oko use case-a</strong> <span className="text-gray-500">- "automatizacija" nije dovoljno. Napišite tačno šta radite: dnevni izveštaji o performansama za klijentske naloge, automatska upozorenja na disapproved oglase, upravljanje budžetom preko skripte. Konkretnost ubrzava review.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Navedite servise koje zovete</strong> <span className="text-gray-500">- reporting, campaign management, upravljanje budžetima. Google želi da vidi da razumete šta zapravo tražite, ne generičku frazu "pristup podacima".</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Koristite poslovni email na svom domenu</strong> <span className="text-gray-500">- ne besplatan Gmail/Yahoo nalog. Email na sopstvenom domenu je jedan od signala koji Google koristi da proceni legitimnost aplikacije.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Budite iskreni da li je interni alat ili servis za treće strane</strong> <span className="text-gray-500">- ako gradite alat samo za sopstvenu agenciju i sopstvene klijente pod jednim MCC-om, recite to. Ako planirate da API pristup prodajete ili delite kao proizvod trećim licima, to je drugačija kategorija i drugačiji nivo provere.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Opišite tok podataka jednostavno</strong> <span className="text-gray-500">- odakle podaci dolaze, gde se skladište, ko ih vidi. Nekoliko rečenica je dovoljno, ali one moraju da postoje.</span>
            </div>
          </div>
        </div>
      </div>

      {/* IMG-03: zameniti sa <Image src="/blog/google-ads-api-basic-access/03-basic-access-application-form.webp" alt="..." width={1200} height={675} /> */}
      <figure className="my-6">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center bg-gray-50">
          <p className="text-sm font-semibold text-gray-500 mb-1">[Screenshot: Aplikaciona forma]</p>
          <p className="text-xs text-gray-400 mb-0">Aplikaciona forma za Basic Access iz API Center-a, sa pitanjima o use case-u i servisima koje pozivate</p>
        </div>
      </figure>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Iz mog starog iskustva</p>
        <p className="text-yellow-800 text-base mb-0">
          Kad sam ja prvi put aplicirao, čekanje je bilo najgori deo celog procesa. Aplikacija bi otišla, status bi ostao "pending", i onda ništa. Nema procene datuma, nema poruke da je neko preuzeo review. Prošlo je od par dana do preko nedelju dana dok mejl konačno nije stigao. U tom periodu jedino što možete da radite je da nastavite da razvijate na Test access-u i čekate, jer nema dugmeta "ubrzaj mi review".
        </p>
      </div>

      {/* IMG-04: zameniti sa <Image src="/blog/google-ads-api-basic-access/04-application-pending.webp" alt="..." width={1200} height={675} /> */}
      <figure className="my-6">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center bg-gray-50">
          <p className="text-sm font-semibold text-gray-500 mb-1">[Screenshot: Status Pending]</p>
          <p className="text-xs text-gray-400 mb-0">Status aplikacije Pending u API Center-u, nakon podnošenja zahteva za Basic Access</p>
        </div>
      </figure>

      <hr />

      <h2 id="korak-3-cloud-projekat">Korak 3: Povezivanje sa Google Cloud projektom</h2>
      <p>
        Da bi brand verification iz sledećeg koraka uopšte mogla da se veže za vaš token, Google mora da zna koji Cloud projekat ide uz koji developer token. Očekivali biste formu ili polje za to, ali povezivanje radi drugačije: po{" "}
        <a
          href="https://developers.google.com/google-ads/api/docs/api-policy/brand-verification#prerequisite"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-700 font-medium"
        >
          zvaničnoj dokumentaciji
        </a>
        , dovoljno je da napravite bilo koji API poziv koji istovremeno koristi vaš developer token i OAuth kredencijale iz tog Cloud projekta. Time su token i projekat povezani.
      </p>
      <p>
        Detalji koji olakšavaju: poziv može ići kroz user authentication ili service account tok, može ciljati test ili produkcijski nalog, i potpuno je nebitno da li će uspeti ili pasti. Nebitan je i trenutni nivo pristupa tokena. Bitno je samo da se token i kredencijali iz projekta pojave zajedno u jednom pozivu.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Verovatno ste ovo već uradili</p>
        <p className="text-blue-800 text-base mb-0">
          Ako ste u Koraku 1 testirali konekciju na test nalogu sa svojim OAuth kredencijalima, povezivanje se već desilo, a da niste ni primetili. Ako niste, najjednostavniji test poziv (recimo listanje naloga pod MCC-om) obavlja posao. Ako imate više Cloud projekata, koristite onaj koji zaista zovete iz koda - kasnije je dovoljno da baš taj jedan bude verifikovan.
        </p>
      </div>

      <hr />

      <h2 id="korak-4-brand-verification">Korak 4: Brand verification (novi pilot od jula 2026)</h2>
      <p>
        Ovo je deo koji do 7. jula 2026. jednostavno nije postojao u ovom obliku. Google Ads API Team, preko Anash P. Oommena, objavio je na zvaničnom Google Ads Developer Blog-u da developeri sada mogu da ubrzaju review svoje Basic Access aplikacije jednim opcionim korakom: brand verification na povezanom Google Cloud projektu.
      </p>
      <p>
        Kako to izgleda u praksi: ako je vaša aplikacija za developer token na statusu pending, odete u Google Cloud Console, pod OAuth consent screen, odnosno Google Auth Platform, pa Branding, i tamo završite brand verification. To je deo šireg OAuth App verification procesa i za većinu developera je samoposlužni proces, bez čekanja na ljudski review sa te strane. Google navodi da će nakon toga vašu Basic Access aplikaciju pregledati "in the next few hours", odnosno u narednih nekoliko sati.
      </p>

      <h3>Kako izgleda ceo proces, ekran po ekran</h3>

      <p>
        <strong>1. Otvorite OAuth consent screen.</strong> U Google Cloud Console-u izaberite svoj projekat, pa u levom meniju APIs and services, pa OAuth consent screen. Time ulazite u Google Auth Platform deo konzole.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-01-oauth-consent-menu.webp" alt="Google Cloud Console meni: APIs and services, opcija OAuth consent screen" width={869} height={716} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Put do ekrana: APIs and services → OAuth consent screen</figcaption>
      </figure>

      <p>
        <strong>2. Kliknite Get started ako platforma nije konfigurisana.</strong> Ako do sada niste podešavali OAuth consent za ovaj projekat, dočekaće vas prazan Overview ekran sa dugmetom Get started.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-02-get-started.webp" alt="Google Auth Platform Overview ekran sa porukom da platforma nije konfigurisana i dugmetom Get started" width={927} height={714} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Overview tab: Get started za prvu konfiguraciju</figcaption>
      </figure>

      <p>
        <strong>3. Popunite konfiguraciju projekta.</strong> Prolazite kroz četiri kratke sekcije: App Information (ime aplikacije i support email), Audience, Contact Information i Finish, pa kliknete Create.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-03-project-configuration.webp" alt="Project configuration čarobnjak sa sekcijama App Information, Audience, Contact Information i Finish" width={927} height={922} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Project configuration: četiri sekcije pa Create</figcaption>
      </figure>

      <p>
        <strong>4. Prebacite User type na External i status na In production.</strong> Na Audience tabu, ako piše Internal, kliknite Make external. Google u dokumentaciji izričito kaže da za potrebe ovog review-a User type mora biti External, a publishing status In production, čak i ako je vaš alat čisto interni. U dijalogu izaberite In production i potvrdite Push to production.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-04-user-type-internal.webp" alt="User type sekcija koja prikazuje Internal i dugme Make external" width={608} height={326} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Audience tab: Make external ako je User type Internal</figcaption>
      </figure>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-05-make-external-dialog.webp" alt="Make external dijalog sa izborom publishing statusa Testing ili In production" width={664} height={458} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Izaberite In production, ne Testing</figcaption>
      </figure>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-06-push-to-production.webp" alt="Push to production dijalog za potvrdu objavljivanja aplikacije" width={709} height={512} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Potvrda: Push to production → Confirm</figcaption>
      </figure>

      <p>
        <strong>5. Popunite Branding tab.</strong> Ovde unosite podatke koji se korisnicima prikazuju na consent ekranu: home page aplikacije, linkove ka privacy policy i uslovima korišćenja, authorized domene i kontakt email. Kliknite Save.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-07-branding-form.webp" alt="Branding tab sa poljima App domain, Authorised domains i Developer contact information" width={875} height={1033} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Branding forma: domen, privacy policy, uslovi korišćenja, kontakt</figcaption>
      </figure>

      <p>
        <strong>6. Kliknite Verify branding.</strong> Dugme se nalazi u gornjem desnom uglu Branding taba, u Verification status kartici.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-08-verify-branding-button.webp" alt="Verification status kartica sa dugmetom Verify branding" width={1070} height={522} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Verification status: Verify branding</figcaption>
      </figure>

      <p>
        <strong>7. Sačekajte par minuta.</strong> Verifikacija je automatska i sam interfejs kaže da može trajati do 5 minuta. Ako iskoči greška, ispravite šta traži (najčešće je problem u domenima ili linkovima) i pokrenite ponovo.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-09-verification-in-progress.webp" alt="Verification in progress status sa napomenom da proces može trajati do 5 minuta" width={1114} height={495} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Verifikacija u toku: do 5 minuta</figcaption>
      </figure>

      <p>
        <strong>8. Objavite verifikovan branding.</strong> Kada verifikacija prođe, kliknite Publish branding. Ne odlažite ovo: verifikovan rezultat ističe za 7 dana ako ga ne objavite.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-10-publish-branding.webp" alt="Verification status sa porukom da je branding verifikovan i dugmetom Publish branding, uz napomenu o isteku za 7 dana" width={1165} height={526} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Publish branding u roku od 7 dana od verifikacije</figcaption>
      </figure>

      <p>
        <strong>9. Gotovo: projekat je brand verified.</strong> Status kartica sada prikazuje zelenu potvrdu da je branding verifikovan i vidljiv korisnicima. Ovo je signal koji Google-ov tim vidi kada pregleda vašu pending Basic Access aplikaciju.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-11-branding-verified.webp" alt="Verification status sa zelenom potvrdom da je branding verifikovan i prikazan korisnicima" width={1141} height={568} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Krajnji status: branding verifikovan</figcaption>
      </figure>

      <p>
        Nekoliko stvari je bitno da razumete pre nego što krenete u ovaj korak. Ako je vaš Cloud projekat ranije već prošao brand verification za bilo koji drugi Google API, ne morate to ponavljati. I ako imate više Cloud projekata, dovoljno je da samo jedan bude verifikovan. Sam korak je potpuno opcion: ako već imate odobren developer token, ne treba vam brand verification, jer je ceo smisao ovog pilota da ubrza aplikacije koje čekaju na status pending, ne da menja nešto za već odobrene naloge.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Google kao razlog za ovaj pilot navodi "significant interest from our developer community for Google Ads API access", odnosno veliko interesovanje developer zajednice za pristup Google Ads API-ju. Pročitajte originalnu objavu na{" "}
          <a
            href="https://ads-developers.googleblog.com/2026/07/accelerate-google-ads-api-basic-access.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-yellow-400"
          >
            Google Ads Developer Blog-u
          </a>.
        </p>
      </div>

      <p>
        Ako trenutno imate aplikaciju koja čeka na review, ovo je jednostavno najbrži put da je ubrzate: par minuta u Cloud Console-u, umesto neizvesnog čekanja kroz koje sam ja prošao.
      </p>

      {/* IMG-07: zameniti sa <Image src="/blog/google-ads-api-basic-access/07-basic-access-approved.webp" alt="..." width={1200} height={675} /> */}
      <figure className="my-6">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center bg-gray-50">
          <p className="text-sm font-semibold text-gray-500 mb-1">[Screenshot: Basic Access odobren]</p>
          <p className="text-xs text-gray-400 mb-0">Odobren status Basic Access u API Center-u, nakon uspešnog review-a</p>
        </div>
      </figure>

      <hr />

      <h2 id="sta-dobijate-i-sta-ne-radi">Šta dobijate sa Basic Access i šta i dalje ne radi</h2>
      <p>
        Sa odobrenim Basic Access tokenom, dobijate pristup produkcijskim podacima na svim klijentskim nalozima povezanim pod vašim manager nalogom, do 15.000 API operacija dnevno. Za mene to znači reporting koji se sam generiše svako jutro, upravljanje kampanjama preko skripti kada treba masovna izmena (na primer promena budžeta na više naloga odjednom), i automatizaciju koja prati pacing, performanse i disapproved oglase bez da ja ručno otvaram svaki od deset naloga. Isti mehanizam koristim i za automatski upload offline konverzija kod pojedinih klijenata, o čemu sam pisao odvojeno u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "offline-conversion-import-b2b" } }} className="underline text-blue-700 font-medium">
          vodiču o Offline Conversion Import za B2B
        </Link>. Za jednog čoveka koji vodi deset naloga, ovo nije pogodnost, ovo je jedini realan način da monitoring bude na nivou agencije, a ne na nivou koliko stigne da otvori u browseru.
      </p>
      <p>
        Ono što i dalje ne radi, makar u mom iskustvu, jeste Keyword Planner deo API-ja. I sa odobrenim Basic Access tokenom, pozivi za generisanje keyword ideja i procenu volumena pretrage meni su vraćali grešku DEVELOPER_TOKEN_NOT_APPROVED. Taj deo API-ja očigledno traži viši nivo pristupa nego što je pokrivao moj svakodnevni reporting i management posao, a meni nije bio presudan, pa ga nisam dalje terao. Umesto toga, procenu volumena radim preko podataka iz Search Console-a i benchmark CPC-a iz same platforme, što je sasvim dovoljno za odluke koje donosim.
      </p>
      <p>
        Standard Access je posebna, kasnija aplikacija za koju idete tek kada Basic postane usko grlo, obično kada gradite alat velikog obima za više klijenata istovremeno i kada dnevni limit od 15.000 operacija počne realno da vas koči. Za agenciju sa desetak naloga, Basic Access je sasvim dovoljan nivo, i tu sam ja ostao.
      </p>

      <hr />

      <h2 id="faq-google-ads-api-basic-access">Često postavljana pitanja</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Koliko sada traje review Basic Access aplikacije?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ako je vaša aplikacija na statusu pending i završite opcioni brand verification korak na povezanom Google Cloud projektu, Google navodi da će vašu aplikaciju pregledati u narednih nekoliko sati. Bez tog koraka, review i dalje može trajati onako kako je trajao ranije, od nekoliko dana do preko nedelju dana, bez uvida u status u međuvremenu."
                }
              },
              {
                "@type": "Question",
                name: "Da li je brand verification obavezna?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ne. Brand verification je potpuno opcioni signal koji Google koristi da brže donese odluku o vašoj aplikaciji. Ko već ima odobren developer token, ne treba mu ovaj korak. Vredi ga uraditi jedino ako vam je aplikacija trenutno na statusu pending i želite brži pregled."
                }
              },
              {
                "@type": "Question",
                name: "Koja je razlika između Test, Basic i Standard access-a?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Test access je default nivo novog tokena i radi isključivo sa test Google Ads nalozima, bez produkcijskih podataka. Basic Access otključava produkcijske naloge sa limitom od 15.000 API operacija dnevno, dovoljno za većinu agencijske automatizacije. Standard Access je posebna, kasnija aplikacija namenjena alatima velikog obima, i uklanja dnevni limit."
                }
              },
              {
                "@type": "Question",
                name: "Šta ako nemam Google Cloud projekat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kreiranje Google Cloud projekta je besplatno i traje nekoliko minuta preko Google Cloud Console-a. Projekat vam je ionako potreban za generisanje OAuth2 kredencijala (client ID i client secret) koji omogućavaju autentifikaciju prema Google Ads API-ju, tako da ovo nije dodatan korak, nego preduslov koji ćete uraditi u svakom slučaju."
                }
              },
              {
                "@type": "Question",
                name: "Da li moram da znam da programiram da bih koristio Google Ads API?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Osnovno razumevanje pomaže, ali ne morate biti programer u klasičnom smislu. Google nudi zvanične klijentske biblioteke za više jezika koje pojednostavljuju pozive, a danas AI agenti poput Claude-a mogu da napišu i održavaju veći deo skripti za reporting i automatizaciju, uz vaše jasno definisane zahteve o tome šta treba da se radi."
                }
              },
              {
                "@type": "Question",
                name: "Da li jedan developer token pokriva sve moje klijentske naloge?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Da, pod uslovom da aplicirate iz manager naloga (MCC), a ne iz pojedinačnog klijentskog naloga. Developer token živi na nivou manager naloga i automatski pokriva sve klijentske naloge koji su pod njim povezani, tako da vam za novog klijenta nije potreban novi token niti nova aplikacija."
                }
              }
            ]
          })
        }}
      />

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko sada traje review Basic Access aplikacije?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Ako je vaša aplikacija na statusu pending i završite opcioni brand verification korak na povezanom Google Cloud projektu, Google navodi da će vašu aplikaciju pregledati u narednih nekoliko sati. Bez tog koraka, review i dalje može trajati onako kako je trajao ranije, od nekoliko dana do preko nedelju dana, bez uvida u status u međuvremenu.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li je brand verification obavezna?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Ne. Brand verification je potpuno opcioni signal koji Google koristi da brže donese odluku o vašoj aplikaciji. Ko već ima odobren developer token, ne treba mu ovaj korak. Vredi ga uraditi jedino ako vam je aplikacija trenutno na statusu pending i želite brži pregled.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koja je razlika između Test, Basic i Standard access-a?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Test access je default nivo novog tokena i radi isključivo sa test Google Ads nalozima, bez produkcijskih podataka. Basic Access otključava produkcijske naloge sa limitom od 15.000 API operacija dnevno, dovoljno za većinu agencijske automatizacije. Standard Access je posebna, kasnija aplikacija namenjena alatima velikog obima, i uklanja dnevni limit.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta ako nemam Google Cloud projekat?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Kreiranje Google Cloud projekta je besplatno i traje nekoliko minuta preko Google Cloud Console-a. Projekat vam je ionako potreban za generisanje OAuth2 kredencijala (client ID i client secret) koji omogućavaju autentifikaciju prema Google Ads API-ju, tako da ovo nije dodatan korak, nego preduslov koji ćete uraditi u svakom slučaju.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li moram da znam da programiram da bih koristio Google Ads API?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Osnovno razumevanje pomaže, ali ne morate biti programer u klasičnom smislu. Google nudi zvanične klijentske biblioteke za više jezika koje pojednostavljuju pozive, a danas AI agenti poput Claude-a mogu da napišu i održavaju veći deo skripti za reporting i automatizaciju, uz vaše jasno definisane zahteve o tome šta treba da se radi.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li jedan developer token pokriva sve moje klijentske naloge?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Da, pod uslovom da aplicirate iz manager naloga (MCC), a ne iz pojedinačnog klijentskog naloga. Developer token živi na nivou manager naloga i automatski pokriva sve klijentske naloge koji su pod njim povezani, tako da vam za novog klijenta nije potreban novi token niti nova aplikacija.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Treba vam API monitoring i automatizacija za klijentske naloge?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          Postavljam developer token, API pristup i noćnu automatizaciju (pacing, performanse, search-term rudarenje, upozorenja) za agencije i timove koji vode više Google Ads naloga pod jednim manager nalogom.
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
          <p className="text-xs text-gray-500 mb-0">Kompletno vođenje naloga, od strategije do automatizacije.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "offline-conversion-import-b2b" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Offline Conversion Import za B2B</p>
          <p className="text-xs text-gray-500 mb-0">Kako povezati CRM sa Google Ads preko API-ja.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "ga4-google-ads-integracija" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">GA4 i Google Ads Integracija</p>
          <p className="text-xs text-gray-500 mb-0">Kako povezati GA4 podatke sa Google Ads optimizacijom.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking Vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kompletna postavka GTM, GA4 i Google Ads tagova.</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: 11. jul 2026.
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
