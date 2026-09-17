import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function GoogleAdsApiBasicAccessVodicPost() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google Ads API Basic Access vam otključava produkcijske naloge i planning alate, sa limitom od 15.000 operacija dnevno umesto 2.880 na Explorer nivou. Od 9. septembra 2026. developer token više ne nosi taj nivo: nosi ga Google Cloud projekat iz kog vučete OAuth kredencijale, a nadogradnja se traži u Cloud Console-u, ne više u API Center-u.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">15.000</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Operacija dnevno na Basic</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2.880</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Operacija dnevno na Explorer</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">9.9.2026.</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Dan kada su tokeni ukinuti</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0 €</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Cena pristupa</p>
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
          <strong>Google Ads API Basic Access</strong> je nivo pristupa koji vam dozvoljava rad sa pravim, produkcijskim Google Ads nalozima preko API-ja, do 15.000 operacija dnevno, uključujući i planning alate koje niži nivoi ne pokrivaju. Od 9. septembra 2026. taj nivo je vezan za vaš Google Cloud projekat, a ne za developer token. Dobija se tako što na tom projektu završite brand verification i zatim zatražite Basic nivo u Google Cloud Console-u. Google navodi da je odobrenje za Basic sada automatizovano i stiže u roku od nekoliko minuta nakon verifikacije.
        </p>
      </div>

      <p>
        Živimo u trenutku kada svaka ozbiljnija agencijska operacija prolazi kroz neki oblik API-ja i automatizacije, ne samo kroz interfejs u browseru. Kod mene to izgleda konkretno: svako jutro, pre nego što otvorim Google Ads na bilo kom klijentskom nalogu, već imam podatke iz noćne provere preko svih naloga koje vodim pod jednim manager nalogom. Budget pacing, performanse po kampanji, upozorenja kada nešto padne u disapproved, i rudarenje search termina koje bi ručno trajalo satima. Sve to radi API, ne ja.
      </p>
      <p>
        Godinu dana je taj noćni posao radio na Explorer nivou, koji Google dodeljuje bez ikakve prijave. Explorer pokriva reporting sasvim pristojno, ali čim zatražite nešto više, recimo Keyword Planner pozive, udarite u zid: <code>DEVELOPER_TOKEN_NOT_APPROVED</code>. Od septembra 2026. sam na Basic nivou, pa ovaj vodič više nije teorija nego opis puta koji sam prošao, uključujući i to da mi je prijava jednom bila vraćena na dopunu.
      </p>
      <p>
        U međuvremenu se promenilo nešto krupnije od mog naloga. Google je 9. septembra 2026. ukinuo developer tokene i premestio ceo sistem pristupa na Google Cloud projekat. Ako ste ovaj vodič čitali ranije, put kroz API Center koji je tu bio opisan više ne postoji. Ovo je verzija koja opisuje kako stvari stoje danas.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8" id="istorija-izmena">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-700 mb-2 font-semibold">🔄 Živi vodič - istorija izmena</p>
        <p className="text-sm text-gray-600 mb-3">Ovaj vodič se ažurira svakog meseca. Šta je novo:</p>
        <ul className="text-sm text-gray-700 space-y-1 mb-0 list-disc pl-5">
          <li><strong>17. septembar 2026:</strong> Dodata sekcija o automatskom prenosu nivoa pristupa na Cloud projekte, na osnovu poslednjih 90 dana poziva, za sve koji su već imali odobren token - uključujući moje sopstveno iskustvo sa mejlom koji mi je Google poslao 14.9. Dodat kratak pregled šta uraditi pre nego što Google u 2027. prestane da prima developer token u pozivima.</li>
          <li><strong>10. septembar 2026:</strong> Veliki prepis. Google je 9.9. ukinuo developer tokene i vezao nivo pristupa za Google Cloud projekat. Nadogradnja se traži u Cloud Console-u, brand verification je od opcionog ubrzivača postala preduslov, a odobrenje za Basic je automatizovano. Dodata sekcija o Standard nivou sa uslovima koje Google zaista proverava, i moje merenje šta Basic konkretno otključava.</li>
          <li><strong>Septembar 2026:</strong> Dodata napomena o dve promene koje utiču na kod izgrađen preko Google Ads API-ja: trajno gašenje Content API for Shopping (18. avgust) i uklanjanje language targetinga sa Search kampanja.</li>
          <li><strong>Jul 2026:</strong> Prva verzija vodiča, pisana oko tada aktuelnog brand verification pilota.</li>
        </ul>
      </div>

      <hr />
      {/* ── Sadržaj ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#sta-se-promenilo" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta se promenilo 9. septembra 2026.</a></li>
          <li><a href="#preduslovi" className="block py-1 text-base text-gray-700 hover:text-primary underline">Preduslovi pre nego što počnete</a></li>
          <li><a href="#korak-1-cloud-projekat" className="block py-1 text-base text-gray-700 hover:text-primary underline">Korak 1: Cloud projekat je sada nosilac pristupa</a></li>
          <li><a href="#korak-2-brand-verification" className="block py-1 text-base text-gray-700 hover:text-primary underline">Korak 2: Brand verification, ekran po ekran</a></li>
          <li><a href="#korak-3-trazenje-nivoa" className="block py-1 text-base text-gray-700 hover:text-primary underline">Korak 3: Traženje Basic nivoa</a></li>
          <li><a href="#ako-vas-vrate-na-dopunu" className="block py-1 text-base text-gray-700 hover:text-primary underline">Ako vam prijavu vrate na dopunu</a></li>
          <li><a href="#sta-dobijate-i-sta-ne-radi" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta dobijate sa Basic Access i šta i dalje ne radi</a></li>
          <li><a href="#standard-access" className="block py-1 text-base text-gray-700 hover:text-primary underline">Standard Access i kada ga zaista treba tražiti</a></li>
          <li><a href="#faq-google-ads-api-basic-access" className="block py-1 text-base text-gray-700 hover:text-primary underline">Često postavljana pitanja</a></li>
        </ol>
      </nav>

      <h2 id="sta-se-promenilo">Šta se promenilo 9. septembra 2026.</h2>
      <p>
        Developer token je do tada bio ključ izdat manager nalogu. Nosio je nivo pristupa. Svaki poziv ka API-ju morao je da ga pošalje, i Google je po tokenu znao da li smete 2.880 ili 15.000 operacija. Nivo je pripadao agenciji.
      </p>
      <p>
        Token je 9. septembra 2026. penzionisan. I dalje ga možete slati, kod nastavlja da radi, ali ga Google ignoriše. Nivo pristupa sada određuje <strong>Google Cloud projekat iz kog su izvučeni vaši OAuth kredencijali</strong>. Zvanična dokumentacija to kaže jednom rečenicom: "Your Google Cloud project is assigned an access level."
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Zamka koju ovo uvodi</p>
        <p className="text-yellow-800 text-base mb-0">
          Ranije je bilo svejedno iz kog Cloud projekta dolaze vaši OAuth kredencijali, jer je token nosio nivo. Sada nije. Svaka skripta koja dobije kredencijale iz drugog Cloud projekta pada na Test nivo i ne vidi produkcijske naloge. Ako imate više projekata, proverite iz kog se tačno autentifikujete: prefiks vašeg client ID-ja je broj projekta, pa je provera pitanje jednog pogleda u <code>google-ads.yaml</code>.
        </p>
      </div>

      <p>
        Menja se i mesto gde se traži nadogradnja. Nije više API Center u manager nalogu, nego Google Cloud Console. Sama stranica API Center-a to danas piše u baneru: nivo koji prikazuje "may no longer be accurate and cannot be upgraded from this page". Ostaje korisna još samo za developer kontakt email.
      </p>
      <p>
        Vredi znati i da Google-ova sopstvena dokumentacija u trenutku pisanja nije usaglašena. Stranica o nivoima pristupa ažurirana je 9. septembra 2026, uredno navodi da nivo nosi Cloud projekat, ali ukidanje tokena ne pominje nijednom rečju. Ta informacija stoji samo na stranici o politici developer tokena. Ako negde naiđete na uputstvo koje vas šalje u API Center, verovatno nije pogrešno napisano, nego samo nije stiglo da bude ažurirano.
      </p>

      <div className="tablewrap overflow-x-auto my-6">
        <table className="w-full text-base border border-gray-200 rounded-xl">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-3 text-left font-heading">Aspekt</th>
              <th className="py-3 px-3 text-left font-heading">Pre 9.9.2026.</th>
              <th className="py-3 px-3 text-left font-heading">Posle</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-3 font-medium">Nosilac nivoa pristupa</td>
              <td className="py-3 px-3">developer token na MCC nivou</td>
              <td className="py-3 px-3">Google Cloud projekat</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-3 font-medium">Gde se traži nadogradnja</td>
              <td className="py-3 px-3">API Center u Google Ads-u</td>
              <td className="py-3 px-3">Google Cloud Console</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-3 font-medium">Odobrenje za Basic</td>
              <td className="py-3 px-3">ručni pregled, do 5 radnih dana</td>
              <td className="py-3 px-3">automatski, minuti posle brand verifikacije</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-3 font-medium">Odobrenje za Standard</td>
              <td className="py-3 px-3">ručni audit</td>
              <td className="py-3 px-3">ručni audit, nepromenjeno</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-3 font-medium">Brand verification</td>
              <td className="py-3 px-3">opcioni ubrzivač</td>
              <td className="py-3 px-3">preduslov za nove prijave</td>
            </tr>
            <tr className="border-t border-gray-200">
              <td className="py-3 px-3 font-medium">Developer token u pozivima</td>
              <td className="py-3 px-3">obavezan</td>
              <td className="py-3 px-3">ignoriše se</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Poslednji detalj iz tranzicije: prijave započete pre 9. septembra 2026. su zatvorene i moraju se ponovo podneti kroz Cloud Console. Ako vam je nešto tada visilo na statusu pending, ne čekajte odgovor koji neće doći.
      </p>

      <h3 id="ako-ste-vec-imali-token">Ako ste već imali odobren token</h3>
      <p>
        Za sve koji su pre 9. septembra imali odobren nivo pristupa na developer tokenu, prelaz nije tražio nijedan korak sa vaše strane. Desilo se sledeće:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Nivo se automatski preneo, na osnovu poslednjih 90 dana poziva.</strong> <span className="text-gray-500">Google je pregledao logove API poziva unazad 90 dana i odobreni nivo sa tokena preneo na svaki Cloud projekat koji je u tom periodu tim tokenom pravio pozive. Projekat koji u tih 90 dana nije korišćen, nije dobio ništa.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Prevezivanje na drugi projekat više ne postoji.</strong> <span className="text-gray-500">Ranije je Google podrška po potrebi prevezivala odobren token na drugi Cloud projekat. Od 9. septembra to ne radi - za novi projekat se nivo traži iznova, sa stranice Google Ads API Overview tog projekta u Cloud Console-u.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Prijave na čekanju su zatvorene u prelazu.</strong> <span className="text-gray-500">Ko je imao prijavu za Basic na statusu pending, ta prijava je zatvorena i mora se poslati ponovo, kroz Cloud Console, uz brand verification.</span>
            </div>
          </div>
        </div>
      </div>

      <p>
        Meni lično je 14. septembra 2026. stigao mejl od Google-a da je nivo BASIC sa mog manager naloga automatski prenet na tri moja Google Cloud projekta. Nisam morao ništa da uradim - kod je nastavio da radi bez ijedne izmene.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Šta uraditi pre 2027.</p>
        <ul className="text-blue-800 text-base mb-0 list-disc pl-5 space-y-1">
          <li>Developer token je sad opcion i API ga ignoriše, ali Google u istom mejlu najavljuje da ga nova izdanja Google Ads API-ja, očekivano u prvoj polovini 2027, više neće ni primati u pozivima. Izbacite ga iz <code>google-ads.yaml</code> i koda pre tog roka i pređite na ažurirane klijentske biblioteke koje rade bez njega.</li>
          <li>API Center stranica je zastarela. Istorijski podaci su tamo još dostupni, a Google očekuje da je ugasi u prvoj polovini 2027.</li>
          <li>Dok API Center postoji, administrativna i compliance obaveštenja idu na kontakt email podešen tamo. Posle gašenja idu samo korisnicima sa ulogom Owner ili Editor na Cloud projektu - proverite na IAM stranici projekta da je prava osoba na jednoj od te dve uloge, inače ćete propustiti obaveštenje kad taj prelaz dođe.</li>
        </ul>
      </div>

      <hr />

      <h2 id="preduslovi">Preduslovi pre nego što počnete</h2>
      <p>
        Trebaju vam dve stvari. Prva je Google Ads nalog, i preporučujem da to bude manager nalog (MCC), ne pojedinačni klijentski nalog. Razlog je i dalje praktičan, samo se promenio mehanizam: MCC vam služi kao ulazna tačka preko <code>login-customer-id</code> parametra, pa jedan skup kredencijala gađa sve naloge povezane pod njim, bez posebnog podešavanja po klijentu.
      </p>
      <p>
        Druga stvar je Google Cloud projekat, i on je sada glavni akter. Na njemu se generišu OAuth2 kredencijali (client ID i client secret), na njemu se radi brand verification, i njemu se dodeljuje nivo pristupa. Projekat je besplatan za kreiranje.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Iz mog iskustva</p>
        <p className="text-blue-800 text-base mb-0">
          Ako gradite agencijsku automatizaciju, držite se jednog Cloud projekta za sve. Sav moj kod, od noćnog reportinga do keyword research skripti, autentifikuje se iz istog projekta, pa je nivo pristupa jedna stvar koju treba pratiti umesto da se raspe na više mesta. Onog trenutka kada se pojavi drugi projekat, pojavi se i mogućnost da neka skripta tiho radi na Test nivou.
        </p>
      </div>

      <hr />

      <h2 id="korak-1-cloud-projekat">Korak 1: Cloud projekat je sada nosilac pristupa</h2>
      <p>
        Prvi korak nije generisanje tokena, nego provera koji Cloud projekat zaista stoji iza vaših poziva. Ako ste do sada radili sa Google Ads API-jem, taj projekat već postoji, jer ste iz njega izvukli OAuth kredencijale. Broj projekta pročitate iz prefiksa client ID-ja, dela pre prve crtice.
      </p>
      <p>
        Novi projekat dobija <strong>Test Account Access</strong>: radi isključivo sa test nalozima koje sami kreirate i ne vidi ni jedan bajt produkcijskih podataka. Mnogi projekti zatim dobiju <strong>Explorer Access</strong>, koji radi i sa pravim nalozima, ali sa limitom od 2.880 operacija dnevno i bez pristupa planning alatima (Keyword Planner), kreiranju naloga, user management-u i billing servisima.
      </p>

      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/api-center-token-explorer.webp" alt="API Center u Google Ads manager nalogu: maskiran developer token sa View token linkom i Access level red koji prikazuje Explorer Access" width={1690} height={400} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">API Center dok je token još nosio nivo: maskiran developer token i Explorer Access. Ova stranica danas i dalje postoji, ali se sa nje više ne menja nivo pristupa.</figcaption>
      </figure>

      <p>
        Explorer je sasvim pristojna ulaznica i na njemu sam godinu dana vrteo kompletan noćni reporting preko svih klijentskih naloga. Ali je i tačno mesto gde ćete prvi put osetiti ograničenje, jer svaki poziv ka servisu koji Explorer ne pokriva vraća <code>DEVELOPER_TOKEN_NOT_APPROVED</code>. Ime greške je, uzgred, jedan od ostataka starog sistema: token više ne odlučuje ništa, ali se poruka nije promenila.
      </p>
      <p>
        Pre nego što tražite nadogradnju, iskoristite postojeći nivo da proverite da vam autentifikacija i osnovna konekcija rade. Ako poziv ne prolazi ni ovde, problem je u konfiguraciji, ne u nivou pristupa. Ceo taj lanac, uključujući izbor između desktop i web OAuth toka i zamku od 7 dana kod refresh tokena, pokrivam u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-api-autentifikacija" } }} className="underline text-blue-700 font-medium">
          vodiču za Google Ads API autentifikaciju
        </Link>
        .
      </p>

      <hr />

      <h2 id="korak-2-brand-verification">Korak 2: Brand verification, ekran po ekran</h2>
      <p>
        Ovaj korak je u julu 2026. bio opcion, kao način da ubrzate prijavu koja visi na statusu pending. Danas je preduslov za nove Basic i Standard prijave. Ko već ima odobren pristup, izuzet je i ne mora ništa da radi.
      </p>
      <p>
        Brand verification je deo šireg OAuth App verification procesa i za većinu developera je samoposlužna, bez čekanja na ljudski pregled. Ekrani ispod su iz mog projekta i proces se od jula nije menjao.
      </p>

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
        <strong>4. Prebacite User type na External i status na In production.</strong> Na Audience tabu, ako piše Internal, kliknite Make external. Google u dokumentaciji izričito kaže da za potrebe ovog pregleda User type mora biti External, a publishing status In production, čak i ako je vaš alat čisto interni. U dijalogu izaberite In production i potvrdite Push to production.
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

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Ovo je isti ekran koji ubija refresh tokene</p>
        <p className="text-yellow-800 text-base mb-0">
          Publishing status In production nije samo formalnost za verifikaciju. Ako projekat ostane u Testing modu, refresh tokeni izdati iz njega umiru posle 7 dana i skripte vam tiho prestanu da rade. Ovo je greška koja me je jednom koštala mrtvog Merchant Center tokena usred noćnog posla. Kad već prolazite kroz ovaj korak, rešavate i taj problem.
        </p>
      </div>

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
        <strong>9. Gotovo: projekat je brand verified.</strong> Status kartica sada prikazuje zelenu potvrdu da je branding verifikovan i vidljiv korisnicima.
      </p>
      <figure className="my-6">
        <Image src="/blog/google-ads-api-basic-access/verify-11-branding-verified.webp" alt="Verification status sa zelenom potvrdom da je branding verifikovan i prikazan korisnicima" width={1141} height={568} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Krajnji status: branding verifikovan</figcaption>
      </figure>

      <p>
        Ako je vaš Cloud projekat ranije već prošao brand verification za bilo koji drugi Google API, ne morate to ponavljati. I ako imate više Cloud projekata, verifikujete onaj iz kog se zaista autentifikujete, jer se nivo pristupa dodeljuje njemu.
      </p>

      <hr />

      <h2 id="korak-3-trazenje-nivoa">Korak 3: Traženje Basic nivoa</h2>
      <p>
        Sa verifikovanim projektom, nadogradnja se traži u Google Cloud Console-u, na Google Ads API stranici tog projekta. Google navodi da je odobrenje za Basic sada automatizovano i da stiže u roku od nekoliko minuta nakon brand verifikacije. To je bitna razlika u odnosu na stari proces, gde je ručni pregled zvanično trajao do 5 radnih dana bez ikakvog uvida u status.
      </p>
      <p>
        Ono što se nije promenilo je šta treba da napišete o sebi. Bez obzira na to što odluku sada donosi automatika, opis vašeg slučaja upotrebe ostaje deo zapisa i postaje bitan onog trenutka kada nešto ode na ručni pregled. Pet stvari koje vredi odraditi kako treba:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Budite konkretni oko use case-a</strong> <span className="text-gray-500">- "automatizacija" nije dovoljno. Napišite tačno šta radite: dnevni izveštaji o performansama za klijentske naloge, automatska upozorenja na disapproved oglase, upravljanje budžetom preko skripte. Konkretnost pomaže i kada je odluka automatska.</span>
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
              <strong>Koristite poslovni email na svom domenu</strong> <span className="text-gray-500">- ne besplatan Gmail/Yahoo nalog. Google to i sam preporučuje, i to u obliku role based adrese kao što je info@firma.com, da prepiska ne zavisi od jednog čoveka.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Budite iskreni da li je interni alat ili servis za treće strane</strong> <span className="text-gray-500">- ako gradite alat samo za sopstvenu agenciju i sopstvene klijente pod jednim MCC-om, recite to. Ova razlika kasnije odlučuje da li vas obavezuje RMF kad budete tražili Standard, o čemu niže.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Proverite da je URL vaše firme tačan i da sajt radi</strong> <span className="text-gray-500">- pregled uključuje otvaranje vašeg sajta. Proverite da polje sa adresom nema slovnu grešku, da sajt odgovara sa 200, i da stranica na koju se stiže može da se pročita na engleskom. Ovo zvuči trivijalno dok ne postane razlog za vraćanje prijave.</span>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="ako-vas-vrate-na-dopunu">Ako vam prijavu vrate na dopunu</h2>
      <p>
        Meni se to desilo. Prijava je otišla početkom avgusta, vraćena je na dopunu, i odobrenje je stiglo tek posle drugog kruga, u septembru. To nije katastrofa, ali jeste mesto gde se najviše vremena izgubi ako reagujete pogrešno.
      </p>
      <p>
        Tri stvari koje sam naučio iz tog kruga:
      </p>
      <p>
        <strong>Ne šaljite formu ponovo sa istim odgovorima.</strong> Poruka koju dobijete to izričito kaže, i to je bukvalno tako: dobićete isti odgovor drugi put. Odgovorite u postojećem thread-u, na isti broj slučaja.
      </p>
      <p>
        <strong>Proverite gde je prepiska stigla.</strong> Kod mene je odgovor otišao na adresu koja nije ista kao developer kontakt email podešen u nalogu, pa je nedeljama stajao u sandučetu koje ne gledam svaki dan. Uskladite te dve adrese pre nego što uopšte aplicirate.
      </p>
      <p>
        <strong>Ponudite detaljan opis biznis modela.</strong> Poruka o dopuni obično sama nudi tu alternativu. Iskoristite je: ko ste, ko su vam klijenti, odakle vam prihod, šta tačno alat radi, ko ga koristi, koliko operacija dnevno očekujete i zašto vam trenutni plafon smeta. To je nekoliko pasusa, ne roman, ali su konkretni brojevi ono što pomera stvar.
      </p>

      <hr />

      <h2 id="sta-dobijate-i-sta-ne-radi">Šta dobijate sa Basic Access i šta i dalje ne radi</h2>
      <p>
        Sa Basic nivoom dobijate punu funkcionalnost API-ja na svim klijentskim nalozima koje gađate, do 15.000 operacija dnevno. To uključuje i ono što Explorer izričito ne pokriva: planning alate, kreiranje naloga, user management i billing servise.
      </p>
      <p>
        Broj sam po sebi nije ono što najviše boli na Explorer nivou. Plafon od 2.880 je <strong>deljen preko svih naloga</strong> pod vašim manager nalogom. Jedno veće restrukturiranje jednog klijenta pojede dnevnu kvotu i blokira rad na svima ostalima do ponoći. Basic to sklanja sa puta.
      </p>
      <p>
        Keyword Planner je kod mene bio prva stvar koja je udarila u ograničenje. Evo šta se konkretno promenilo, isti poziv pre i posle:
      </p>

      <pre className="bg-slate-900 text-slate-100 rounded-xl p-4 md:p-5 my-6 overflow-x-auto text-sm leading-relaxed">
{`# Explorer
GenerateKeywordIdeas  ->  DEVELOPER_TOKEN_NOT_APPROVED
   "This method is not allowed for use with explorer access."

# Basic
GenerateKeywordIdeas  ->  599 keyword ideja
   polovni motori     12.100/mes   comp=LOW   bid  7,84-13,49
   kacige za motor     5.400/mes   comp=LOW   bid  3,49-22,82
   moto oprema         2.900/mes   comp=LOW   bid  3,03-24,04`}
      </pre>

      <p>
        Dva seed pojma, 599 ideja sa mesečnim volumenom, nivoom konkurencije i rasponom cene klika na vrhu stranice. Uz to radi i <code>GenerateKeywordHistoricalMetrics</code>, koji daje volumen mesec po mesec dvanaest meseci unazad. Za sezonske klijente to je budžetski kalendar koji se do sada nije mogao izvući programski: kod istog klijenta jedan pojam ima raspon 2,2 puta između vrha i dna godine, a drugi 4,3 puta. To su dva različita kalendara, u istom nalogu.
      </p>
      <p>
        Dok Basic nije prošao, procenu volumena sam radio preko podataka iz Search Console-a i benchmark CPC-a iz same platforme. To je sasvim upotrebljiva zaobilaznica i preporučujem je svakome ko čeka, ali je zaobilaznica.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Šta ni Basic ne otključava</p>
        <p className="text-yellow-800 text-base mb-0">
          <code>ReachPlanService</code>, odnosno reach planiranje za YouTube i Display (krive dosega, frekvencija, projekcije CPM-a), ostaje zatvoren i na Basic nivou. Poziv vraća <code>ACTION_NOT_PERMITTED</code> uz poruku "not authorized to call ReachPlanningService". To je zaseban allowlist, ne stavka koja dolazi uz nivo pristupa, pa ako vam je video planiranje kroz API bitno, računajte na odvojen zahtev.
        </p>
      </div>

      <p>
        Moj svakodnevni stack, reporting koji se sam generiše svako jutro, praćenje pacing-a, performansi i disapproved oglasa preko svih naloga, radio je i na Explorer nivou. Isti mehanizam koristim i za automatski upload offline konverzija kod pojedinih klijenata, o čemu sam pisao odvojeno u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "offline-conversion-import-b2b" } }} className="underline text-blue-700 font-medium">
          vodiču o Offline Conversion Import za B2B
        </Link>. Za jednog čoveka koji vodi desetine naloga, ovo nije pogodnost, ovo je jedini realan način da monitoring bude na nivou agencije, a ne na nivou koliko stigne da otvori u browseru.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Dve stvari da proverite u kodu, ne u ovom vodiču</p>
        <p className="text-yellow-800 text-base mb-2">
          Pristup iz ovog vodiča važi za Google Ads naloge, ne za Merchant Center feed proizvoda. Ali ako u istom automatizacionom stacku vučete i podatke o proizvodima ili upravljate Search kampanjama preko API-ja, dve stvari su se promenile u avgustu i septembru 2026, i vredi ih proveriti pre nego što nešto počne tiho da otkazuje.
        </p>
        <ul className="text-yellow-800 text-base mb-0 list-disc pl-5 space-y-1">
          <li><strong>18. avgust 2026:</strong> Content API for Shopping je trajno ugašen. Ako neki deo vaše automatizacije još zove taj stariji API za feed proizvoda, mora da pređe na Merchant API, inače podaci o proizvodima zastarevaju i idu u disapproval.</li>
          <li><strong>Septembar 2026:</strong> Google uklanja language targeting sa nivoa Search kampanje. Ako vaš kod preko Google Ads API-ja podešava ili čita kriterijum jezika (CampaignCriterion) na Search kampanjama, ta postavka više ne utiče na isporuku - Google sada uparuje po jeziku oglasa, landing stranice i jezicima koje korisnik zna. Kod PMax kampanja jezik i dalje važi, ali samo za YouTube, Display, Discover i Gmail, ne za Search Network. Strukture sa jednim jezikom po kampanji nastavljaju normalno da rade, samo kriterijum jezika na Search-u više ništa ne radi.</li>
        </ul>
      </div>

      <hr />

      <h2 id="standard-access">Standard Access i kada ga zaista treba tražiti</h2>
      <p>
        Standard ukida ukupan dnevni plafon. Pojedinačni servisi zadržavaju svoje rate limite, ali broj operacija više nije ograničen. Uslova ima pet, i vredi ih znati unapred, jer se dva najčešće previde.
      </p>
      <p>
        Prvi je da već imate Basic. Drugi je usklađenost sa <strong>RMF</strong> (Required Minimum Functionality), spiskom funkcija koje vaš alat mora da ima. Treći je ručni audit aplikacije, za koji Google navodi oko 10 radnih dana. Četvrti je demo pristup, ako alat koriste spoljni korisnici. Peti je dokazan obim.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">RMF verovatno ne važi za vas</p>
        <p className="text-blue-800 text-base mb-0">
          Google izuzima kategoriju "Internal Use Only" od svih RMF zahteva. Ako gradite alat isključivo za sopstvenu agenciju i sopstvene klijente, i ne prodajete ga niti ga izlažete trećim licima, kolone Creation, Management i Reporting u RMF tabeli za vas stoje kao N/A. Reporting-only alati imaju svoje, blaže izuzeće. Ovo znači da ne morate da gradite funkcije koje vam ne trebaju samo da biste prošli audit.
        </p>
      </div>

      <p>
        Peti uslov je onaj koji obara većinu zahteva, i formulisan je bez uvijanja:
      </p>

      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
        If your volume does not consistently near the 15,000 daily limit, your request will be denied.
      </blockquote>

      <p>
        Drugim rečima, Standard nije nagrada za ozbiljnost nego rešenje za usko grlo koje morate dokazati da imate. Za agenciju sa desetak do trideset naloga i noćnim reportingom, dnevna potrošnja je reda veličine stotina operacija, daleko ispod plafona. Zahtev bi bio odbijen, a odbijanje ostaje zabeleženo.
      </p>
      <p>
        Praktičan savet: izmerite pre nego što tražite. Potrošnju vidite u Google Cloud Console-u, na metrikama za Google Ads API. Ako se ne približavate plafonu, Basic je tačan nivo, a RMF izuzeće vam ne ističe, pa Standard možete tražiti onog dana kada obim to zaista opravda.
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
                name: "Da li mi i dalje treba developer token za Google Ads API?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ne. Google je developer tokene ukinuo 9. septembra 2026. Ako ih vaš kod i dalje šalje, pozivi nastavljaju da rade, ali Google token ignoriše. Nivo pristupa sada nosi Google Cloud projekat iz kog su izvučeni vaši OAuth kredencijali. Praktična posledica je da kredencijali iz drugog Cloud projekta padaju na Test nivo i ne vide produkcijske naloge."
                }
              },
              {
                "@type": "Question",
                name: "Koliko sada traje odobrenje za Basic Access?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Google navodi da je odobrenje za Basic sada automatizovano i da stiže u roku od nekoliko minuta nakon što na Cloud projektu završite brand verification. Standard i dalje ide na ručni audit, za koji Google navodi oko 10 radnih dana. Ako vam prijava ipak bude vraćena na dopunu, odgovarajte u postojećem thread-u umesto da ponovo šaljete formu sa istim odgovorima."
                }
              },
              {
                "@type": "Question",
                name: "Da li je brand verification obavezna?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Za nove Basic i Standard prijave jeste, i to je promena u odnosu na jul 2026, kada je bila opcioni ubrzivač. Ko već ima odobren pristup, izuzet je. Verifikuje se onaj Cloud projekat iz kog se zaista autentifikujete, a ako je taj projekat već prošao brand verification za neki drugi Google API, ne morate je ponavljati."
                }
              },
              {
                "@type": "Question",
                name: "Koja je razlika između Test, Explorer, Basic i Standard access-a?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Postoje četiri nivoa i svi se sada dodeljuju Google Cloud projektu. Test Account Access je default novog projekta i radi samo sa test nalozima. Explorer Access radi i sa produkcijskim nalozima, uz 2.880 operacija dnevno, ali bez planning alata, kreiranja naloga, user management-a i billing servisa. Basic Access donosi punu funkcionalnost sa 15.000 operacija dnevno, dovoljno za većinu agencijske automatizacije. Standard Access ukida ukupan dnevni limit, dok pojedinačni servisi zadržavaju svoje rate limite."
                }
              },
              {
                "@type": "Question",
                name: "Da li Basic Access otključava sve servise?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ne sve. Basic otključava planning alate poput Keyword Planner-a, kreiranje naloga, user management i billing servise. Ali ReachPlanService, odnosno reach planiranje za YouTube i Display, ostaje zatvoren i na Basic nivou i vraća grešku ACTION_NOT_PERMITTED. To je zaseban allowlist koji ne dolazi uz nivo pristupa."
                }
              },
              {
                "@type": "Question",
                name: "Šta ako nemam Google Cloud projekat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Kreiranje Google Cloud projekta je besplatno i traje nekoliko minuta preko Google Cloud Console-a. Projekat vam je ionako potreban za generisanje OAuth2 kredencijala (client ID i client secret), a od septembra 2026. je i nosilac vašeg nivoa pristupa, pa je to prvi korak, ne dodatni."
                }
              },
              {
                "@type": "Question",
                name: "Da li jedan Cloud projekat pokriva sve moje klijentske naloge?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Da. Nivo pristupa se dodeljuje Cloud projektu i važi za svaki nalog koji kroz njega gađate, a manager nalog navodite kroz login-customer-id parametar. Za novog klijenta je dovoljno povezati nalog pod MCC, bez nove prijave. Obrnuto važi kao upozorenje: ako neka skripta koristi kredencijale iz drugog Cloud projekta, ona radi na nivou tog projekta, ne vašeg glavnog."
                }
              },
              {
                "@type": "Question",
                name: "Da li moram da znam da programiram da bih koristio Google Ads API?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Osnovno razumevanje pomaže, ali ne morate biti programer u klasičnom smislu. Google nudi zvanične klijentske biblioteke za više jezika koje pojednostavljuju pozive, a danas AI agenti poput Claude-a mogu da napišu i održavaju veći deo skripti za reporting i automatizaciju, uz vaše jasno definisane zahteve o tome šta treba da se radi."
                }
              }
            ]
          })
        }}
      />

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li mi i dalje treba developer token za Google Ads API?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Ne. Google je developer tokene ukinuo 9. septembra 2026. Ako ih vaš kod i dalje šalje, pozivi nastavljaju da rade, ali Google token ignoriše. Nivo pristupa sada nosi Google Cloud projekat iz kog su izvučeni vaši OAuth kredencijali. Praktična posledica je da kredencijali iz drugog Cloud projekta padaju na Test nivo i ne vide produkcijske naloge.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko sada traje odobrenje za Basic Access?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Google navodi da je odobrenje za Basic sada automatizovano i da stiže u roku od nekoliko minuta nakon što na Cloud projektu završite brand verification. Standard i dalje ide na ručni audit, za koji Google navodi oko 10 radnih dana. Ako vam prijava ipak bude vraćena na dopunu, odgovarajte u postojećem thread-u umesto da ponovo šaljete formu sa istim odgovorima.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li je brand verification obavezna?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Za nove Basic i Standard prijave jeste, i to je promena u odnosu na jul 2026, kada je bila opcioni ubrzivač. Ko već ima odobren pristup, izuzet je. Verifikuje se onaj Cloud projekat iz kog se zaista autentifikujete, a ako je taj projekat već prošao brand verification za neki drugi Google API, ne morate je ponavljati.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koja je razlika između Test, Explorer, Basic i Standard access-a?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Postoje četiri nivoa i svi se sada dodeljuju Google Cloud projektu. Test Account Access je default novog projekta i radi samo sa test nalozima. Explorer Access radi i sa produkcijskim nalozima, uz 2.880 operacija dnevno, ali bez planning alata, kreiranja naloga, user management-a i billing servisa. Basic Access donosi punu funkcionalnost sa 15.000 operacija dnevno, dovoljno za većinu agencijske automatizacije. Standard Access ukida ukupan dnevni limit, dok pojedinačni servisi zadržavaju svoje rate limite.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li Basic Access otključava sve servise?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Ne sve. Basic otključava planning alate poput Keyword Planner-a, kreiranje naloga, user management i billing servise. Ali ReachPlanService, odnosno reach planiranje za YouTube i Display, ostaje zatvoren i na Basic nivou i vraća grešku ACTION_NOT_PERMITTED. To je zaseban allowlist koji ne dolazi uz nivo pristupa.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta ako nemam Google Cloud projekat?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Kreiranje Google Cloud projekta je besplatno i traje nekoliko minuta preko Google Cloud Console-a. Projekat vam je ionako potreban za generisanje OAuth2 kredencijala (client ID i client secret), a od septembra 2026. je i nosilac vašeg nivoa pristupa, pa je to prvi korak, ne dodatni.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li jedan Cloud projekat pokriva sve moje klijentske naloge?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Da. Nivo pristupa se dodeljuje Cloud projektu i važi za svaki nalog koji kroz njega gađate, a manager nalog navodite kroz login-customer-id parametar. Za novog klijenta je dovoljno povezati nalog pod MCC, bez nove prijave. Obrnuto važi kao upozorenje: ako neka skripta koristi kredencijale iz drugog Cloud projekta, ona radi na nivou tog projekta, ne vašeg glavnog.
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

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Treba vam API monitoring i automatizacija za klijentske naloge?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          Postavljam API pristup, Cloud projekat i noćnu automatizaciju (pacing, performanse, search-term rudarenje, upozorenja) za agencije i timove koji vode više Google Ads naloga pod jednim manager nalogom.
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
        Poslednje ažuriranje: 17. septembar 2026.
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
