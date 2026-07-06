import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function OfflineConversionImportB2BPost() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Offline Conversion Import (OCI) povezuje Google Ads sa vašim CRM-om i šalje algoritmu informaciju o tome koji leadovi su zaista postali plaćeni klijenti — ne samo koji su popunili formu. Za B2B ovo je razlika između kampanje koja optimizuje ka jeftinim, nekvalifikovanim leadovima i kampanje koja uči da prepoznaje prave kupce. Potreban vam je GCLID ili Enhanced Conversions for Leads plus CRM koji ume da izveze zatvorene poslove.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Mehanizma importa</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">CRM setapa (HubSpot/SF/Pipedrive)</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">90</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Dana attribution window</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Closed-won</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Primary conversion action</p>
          </div>
        </div>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Brzi odgovor
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Šta je Offline Conversion Import i zašto je bitan za B2B?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          <strong><GlossaryLink slug="offline-conversion-import">Offline Conversion Import</GlossaryLink></strong> je proces kojim se podaci o poslovnim ishodima iz CRM sistema (HubSpot, Salesforce, Pipedrive) šalju nazad u Google Ads, danima ili nedeljama nakon što je korisnik kliknuo na oglas. Za B2B je ovo game-changer jer Smart Bidding algoritam prestaje da optimizuje ka broju popunjenih formi, a počinje da optimizuje ka tome koji leadovi zaista postaju kupci. Potreban vam je jedan od dva mehanizma — GCLID tracking ili <strong><GlossaryLink slug="enhanced-conversions">Enhanced Conversions for Leads</GlossaryLink></strong> — plus disciplinovan proces izvoza podataka iz CRM-a.
        </p>
      </div>

      <p>
        Radim sa dosta B2B klijenata i skoro uvek vidim istu grešku na početku saradnje: nalog je podešen da optimizuje ka "leadovima", a jedina konverzija koju Google vidi je popunjena forma na sajtu. Algoritam onda radi tačno ono što mu je rečeno — dovodi što više ljudi koji će popuniti formu, po što nižoj ceni.
      </p>
      <p>
        Problem je što "popunio formu" i "postao klijent" često nisu ista stvar. U B2B prodaji, između lead-a i zatvorenog posla stoji sales ciklus koji može trajati nedeljama ili mesecima, kroz koji prolazi MQL (marketing qualified lead), SQL (sales qualified lead) i na kraju Closed-won ili Closed-lost. Google Ads to ne vidi — osim ako mu vi ne kažete.
      </p>
      <p>
        Ovaj vodič pokriva oba mehanizma za offline conversion import, konkretan setup po CRM-u (HubSpot, Salesforce, Pipedrive), kako da postavite vrednovanje po fazama lead-a i koje greške najčešće koštaju tačnost celog sistema.
      </p>

      <hr />
      {/* ── Sadržaj ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#problem-optimizacija-ka-broju-leadova" className="block py-1 text-base text-gray-700 hover:text-primary underline">Problem: optimizacija ka broju leadova</a></li>
          <li><a href="#dva-mehanizma-gclid-vs-enhanced-conversions-for-leads" className="block py-1 text-base text-gray-700 hover:text-primary underline">Dva mehanizma: GCLID vs Enhanced Conversions for Leads</a></li>
          <li><a href="#setup-za-hubspot" className="block py-1 text-base text-gray-700 hover:text-primary underline">Setup za HubSpot</a></li>
          <li><a href="#setup-za-salesforce" className="block py-1 text-base text-gray-700 hover:text-primary underline">Setup za Salesforce</a></li>
          <li><a href="#setup-za-pipedrive" className="block py-1 text-base text-gray-700 hover:text-primary underline">Setup za Pipedrive</a></li>
          <li><a href="#vrednovanje-faza-mql-sql-closed-won" className="block py-1 text-base text-gray-700 hover:text-primary underline">Vrednovanje faza — MQL, SQL, Closed-won</a></li>
          <li><a href="#najcesce-greske-kod-offline-importa" className="block py-1 text-base text-gray-700 hover:text-primary underline">Najčešće greške kod offline importa</a></li>
          <li><a href="#faq-offline-conversion-import" className="block py-1 text-base text-gray-700 hover:text-primary underline">Često postavljana pitanja</a></li>
        </ol>
      </nav>

      <h2 id="problem-optimizacija-ka-broju-leadova">Problem: optimizacija ka broju leadova</h2>
      <p>
        Kada je jedina konverzija u nalogu "form submission", Smart Bidding radi savršeno logičnu, ali pogrešnu stvar — traži što jeftinije forme. Algoritmu je svejedno da li je forma popunio direktor nabavke u firmi od 200 zaposlenih ili student koji traži besplatan trial za seminarski rad. Oboje su "1 konverzija".
      </p>
      <p>
        Posledica je predvidljiva. Cost-per-lead vremenom pada — to izgleda kao uspeh u izveštaju. Ali kada sales tim počne da zove te leadove, procenat kvalifikovanih opada. Marketing izveštava "rekordan broj leadova", prodaja se žali da "leadovi ne vrede ništa", i oba tima gledaju u iste brojke sa potpuno različitim zaključcima.
      </p>
      <p>
        Koren problema nije u kampanji, targetiranju ili budžetu — koren je u signalu koji šaljete algoritmu. Dokle god je conversion action "bilo koja forma", nemate način da naučite Google da razlikuje dobar saobraćaj od lošeg. Offline conversion import postoji tačno da reši ovaj signal problem.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          "Optimizacija ka broju formi bez povratne informacije o kvalitetu je kao da platite prodavcu proviziju za svaki telefonski poziv, bez obzira da li je klijent kupio nešto."
        </p>
      </div>

      <h3>Zašto se ovo posebno vidi u B2B</h3>
      <p>
        Kod eCommerce, kupovina se dešava odmah — Google vidi transakciju u roku od minuta i uči direktno iz nje. U B2B, prava vrednost lead-a se saznaje tek kada sales tim odradi kvalifikaciju, demo, ponudu, pregovore — proces koji traje dane ili mesece. Bez povratne petlje, Google nikada ne dobija tu informaciju i ostaje zaglavljen na optimizaciji ka vrhu levka.
      </p>

      <hr />

      <h2 id="dva-mehanizma-gclid-vs-enhanced-conversions-for-leads">Dva mehanizma: GCLID vs Enhanced Conversions for Leads</h2>
      <p>
        Postoje dva načina da povežete offline poslovne ishode sa Google Ads klikovima. Mogu se koristiti pojedinačno ili zajedno — u praksi preporučujem oba, jer se međusobno nadopunjuju kada nešto zakaže.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Mehanizam 1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">GCLID-based import</h3>
          <p className="text-base text-gray-600 mb-0">
            Klasičan pristup. Google Click ID se hvata iz URL parametra pri dolasku na sajt, čuva se u skrivenom polju forme i putuje sa lead-om u CRM. Kasnije se ta ista vrednost šalje nazad u Google Ads uz status posla.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Mehanizam 2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Enhanced Conversions for Leads</h3>
          <p className="text-base text-gray-600 mb-0">
            Noviji pristup baziran na hash-ovanom email-u ili telefonu iz forme, bez oslanjanja na GCLID. Otporniji je na blokirane kolačiće i duge sales cikluse gde GCLID kolačić može isteći pre nego što se posao zatvori.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Kriterijum</th>
              <th className="py-3 px-3 font-heading font-semibold">GCLID-based import</th>
              <th className="py-3 px-3 font-heading font-semibold">Enhanced Conversions for Leads</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Šta je potrebno</td>
              <td className="py-3 px-3">Skriveno GCLID polje u formi + CRM polje za čuvanje</td>
              <td className="py-3 px-3">Hash-ovan email/telefon (SHA-256) poslat preko Google Ads API-ja ili GTM-a</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Prednosti</td>
              <td className="py-3 px-3">Jednostavan za implementaciju, dobro dokumentovan, radi nativno sa CSV uploadom</td>
              <td className="py-3 px-3">Ne zavisi od kolačića, radi i kad GCLID istekne, bolji match rate na dužim ciklusima</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Ograničenja</td>
              <td className="py-3 px-3">GCLID kolačić ima rok trajanja (default 90 dana u Google Ads); dugi B2B ciklusi ga mogu nadživeti</td>
              <td className="py-3 px-3">Zahteva tačno formatiranje i hashovanje podataka; match rate zavisi od kvaliteta email/telefon podataka</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">GDPR napomena</td>
              <td className="py-3 px-3">GCLID se smatra tehničkim identifikatorom, ali i dalje treba consent za tracking kolačiće</td>
              <td className="py-3 px-3">Email/telefon su lični podaci — obavezan je pravni osnov za obradu i hashovanje PRE slanja, nikad plain text</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Preporuka</p>
        <p className="text-blue-800 text-base mb-0">
          Za B2B sa sales ciklusom dužim od 2-3 meseca preporučujem da postavite oba mehanizma paralelno. GCLID import kao primarni, Enhanced Conversions for Leads kao backup koji hvata poslove gde je GCLID kolačić već istekao. Ovo znatno podiže match rate na duže staze.
        </p>
      </div>

      <hr />

      <h2 id="setup-za-hubspot">Setup za HubSpot</h2>
      <p>
        HubSpot ima nativnu integraciju sa Google Ads koja pojednostavljuje veći deo posla, pod uslovom da su Marketing Hub i pravilno podešeni deal stage-ovi na mestu.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Povežite HubSpot i Google Ads nalog</strong> <span className="text-gray-500">— Marketing → Ads → Connect account. Odaberite Google Ads CID i autorizujte pristup.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Uključite automatsko hvatanje GCLID-a</strong> <span className="text-gray-500">— HubSpot tracking kod automatski čuva hubspotutk i GCLID u contact property "Google Ad Click ID" kada je integracija aktivna. Proverite da tracking kod postoji na svim landing stranicama.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Definišite deal stage-ove kao konverzije</strong> <span className="text-gray-500">— U Ads → Conversions → Deals & Contacts, mapirajte koje deal stage promene (npr. "Closed Won") šaljete nazad u Google Ads kao offline conversion event.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Postavite conversion value po dealu</strong> <span className="text-gray-500">— Koristite Deal Amount property da automatski prosledite stvarnu vrednost posla, ne fiksnu procenu.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Kreirajte odgovarajuće conversion actions u Google Ads</strong> <span className="text-gray-500">— Tools → Conversions → New conversion action → Import → HubSpot. Odaberite "Primary" za Closed-won, "Secondary" za MQL/SQL.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div>
              <strong>Testirajte sa jednim test deal-om</strong> <span className="text-gray-500">— Provucite test kontakt kroz ceo pipeline i proverite da se conversion pojavi u Google Ads (obično 3-24h delay).</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Napomena</p>
        <p className="text-yellow-800 text-base mb-0">
          Nativna integracija radi samo ako je HubSpot tracking kod instaliran PRE nego što je lead stigao na sajt. Za kontakte kreirane pre integracije GCLID neće biti dostupan — offline import za njih neće raditi.
        </p>
      </div>

      <hr />

      <h2 id="setup-za-salesforce">Setup za Salesforce</h2>
      <p>
        Salesforce takođe ima nativnu Google Ads integraciju (Salesforce Marketing Cloud Connect ili direktan Google Ads-Salesforce connector), ali zahteva malo više administratorskog posla oko custom polja.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Kreirajte custom polje za GCLID na Lead i Opportunity objektima</strong> <span className="text-gray-500">— Setup → Object Manager → Lead → Fields → New (Text, 255 karaktera). Ponovite za Opportunity ako se lead konvertuje.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Hvatajte GCLID pri submitu forme</strong> <span className="text-gray-500">— Web-to-Lead forma ili konektor (Pardot, Zapier) mora da prosledi GCLID iz URL parametra ili skrivenog polja u odgovarajući Salesforce field pri kreiranju Lead-a.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Osigurajte da se GCLID prenosi pri Lead-to-Opportunity konverziji</strong> <span className="text-gray-500">— Podesite field mapping u Lead Conversion Settings tako da se GCLID polje kopira sa Lead-a na Opportunity, inače se gubi u trenutku kad je posao najbliži zatvaranju.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Povežite Google Ads sa Salesforce (native connector ili API)</strong> <span className="text-gray-500">— Ako nemate Marketing Cloud, koristite Google Ads API ili treću stranu (npr. Zapier/Workato) za redovan izvoz Opportunity Stage promena.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Automatizujte scheduled export</strong> <span className="text-gray-500">— Report koji izvlači GCLID + Stage + Amount + Close Date za Opportunities promenjene u poslednjih X dana, export kao CSV ili preko API-ja na dnevnoj/nedeljnoj bazi.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Najčešća zamka</p>
        <p className="text-yellow-800 text-base mb-0">
          Tim zaboravi da mapira GCLID field u Lead Conversion Settings, pa se vrednost gubi čim se lead pretvori u Opportunity. Ovo je najčešći razlog zašto Salesforce offline import "ne radi" — podatak je bio tu, ali se izgubio pri konverziji objekta.
        </p>
      </div>

      <hr />

      <h2 id="setup-za-pipedrive">Setup za Pipedrive</h2>
      <p>
        Pipedrive nema nativnu Google Ads integraciju za offline conversions, pa je potreban jedan od dva pristupa — automatizacija preko Zapier/Make, ili ručni scheduled CSV upload. Za manje timove bez budžeta za automatizaciju, CSV pristup je sasvim solidan.
      </p>

      <h3>Opcija A — Zapier ili Make automatizacija</h3>
      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <ul className="text-sm">
          <li>Trigger: Deal stage changed to "Won" u Pipedrive</li>
          <li>Zapier/Make čita custom polje sa GCLID vrednošću (koje ste prethodno kreirali u Pipedrive i popunili preko web forme/skrivenog polja)</li>
          <li>Akcija: Google Ads — Upload Click Conversion, sa GCLID, conversion action name, conversion time i deal value iz Pipedrive-a</li>
          <li>Prednost: gotovo real-time, bez ručnog rada nakon inicijalnog podešavanja</li>
        </ul>
      </div>

      <h3>Opcija B — Scheduled CSV upload</h3>
      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <ul className="text-sm">
          <li>Kreirajte custom polje "Google Click ID" na Deal nivou u Pipedrive, popunjavano preko web-to-lead forme</li>
          <li>Nedeljno ili mesečno, exportujte filter "Deals won in last 7/30 days" kao CSV sa kolonama: Google Click ID, Conversion Name, Conversion Time, Conversion Value, Conversion Currency</li>
          <li>U Google Ads: Tools → Conversions → Uploads → CSV upload, poklopite kolone i pošaljite fajl</li>
          <li>Nedostatak: kašnjenje u odnosu na realno vreme, zavisno od učestalosti uploada — Google preporučuje upload u roku od 90 dana od klika</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Praktičan savet</p>
        <p className="text-blue-800 text-base mb-0">
          Ako tek počinjete i nemate Zapier/Make budžet, krenite sa CSV uploadom na nedeljnoj bazi — to je 15 minuta posla nedeljno i dovoljno je da algoritam počne da uči. Automatizaciju uvedite kasnije kada proces dokažete.
        </p>
      </div>

      <hr />

      <h2 id="vrednovanje-faza-mql-sql-closed-won">Vrednovanje faza — MQL, SQL, Closed-won</h2>
      <p>
        Jedna od najvećih grešaka je da se sve faze pipeline-a tretiraju kao ista konverzija sa istom vrednošću. U praksi, MQL, SQL i Closed-won nose potpuno različitu težinu — i conversion actions u Google Ads treba to da odražavaju.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Faza 1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">MQL (Marketing Qualified Lead)</h3>
          <p className="text-base text-gray-600 mb-0">
            Postavite kao Secondary/observation konverziju sa niskom fiksnom vrednošću. Koristan je rani signal dok nema dovoljno Closed-won podataka, ali ne sme biti primarni cilj optimizacije.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Faza 2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">SQL (Sales Qualified Lead)</h3>
          <p className="text-base text-gray-600 mb-0">
            Takođe Secondary, ali sa većom fiksnom vrednošću od MQL-a. Ovo je trenutak kada je sales tim potvrdio da je lead relevantan — jači signal kvaliteta od same forme.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Faza 3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Closed-won</h3>
          <p className="text-base text-gray-600 mb-0">
            Primary conversion action za bidding. Vrednost = stvarna vrednost ugovora (Deal Amount), ne prosek. Ovo je jedini signal koji direktno govori algoritmu "ovo je pravi klijent".
          </p>
        </div>
      </div>

      <h3>Kako podesiti conversion actions u Google Ads-u</h3>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Kreirajte tri odvojene conversion actions</strong> <span className="text-gray-500">— "MQL — Offline", "SQL — Offline", "Closed Won — Offline". Odvojena imena olakšavaju izveštavanje i debug kasnije.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Označite samo Closed-won kao "Primary"</strong> <span className="text-gray-500">— U Conversions → Settings, samo Closed Won ulazi u "Conversions" kolonu koju Smart Bidding koristi za optimizaciju. MQL i SQL ostaju "Secondary" (samo za posmatranje).</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Podesite realan attribution window</strong> <span className="text-gray-500">— Za dugi B2B sales ciklus koristite 90-dana click-through window (maksimum koji Google Ads dozvoljava), ne default 30 dana.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Pređite na Target CPA/ROAS tek kada Closed-won ima dovoljno volumena</strong> <span className="text-gray-500">— Dok imate manje od ~15-20 Closed-won konverzija mesečno, ostanite na Maximize Conversions sa SQL kao observation signalom.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Pravilo prelaska optimizacije</p>
        <p className="text-base text-yellow-900 mb-0">
          Ne prebacujte optimizaciju sa "forma" direktno na "Closed-won" preko noći. Radite postepeno — prvo dodajte MQL/SQL kao observation dok se gomilaju podaci, zatim uvedite Closed-won kao primary tek kada imate makar par meseci istorijskih podataka o zatvorenim poslovima.
        </p>
      </div>

      <hr />

      <h2 id="najcesce-greske-kod-offline-importa">Najčešće greške kod offline importa</h2>
      <p>
        Ovo su greške koje se ponavljaju u skoro svakom nalogu gde tek uvodim offline conversion import. Svaka od njih tiho uništava tačnost sistema, čak i kada izgleda da "radi".
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #1</p>
        <p className="font-semibold mb-2">Dupli import — isti deal se šalje dva puta (npr. i preko CSV-a i preko Zapier automatizacije)</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">
            <strong>Rešenje:</strong> Definišite jedan kanal importa po conversion action-u. Ako uvodite automatizaciju, isključite paralelni ručni upload za iste deal-ove. Google Ads deduplicira po GCLID + conversion action + conversion time, ali samo ako su svi parametri identični — mala odstupanja u vremenu prave duplikate.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #2</p>
        <p className="font-semibold mb-2">Prekratak attribution window za dugi B2B sales ciklus</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">
            <strong>Rešenje:</strong> Ako je prosečan sales ciklus 60-90+ dana, a conversion window je podešen na default 30 dana, sistem sistematski gubi Closed-won poslove koji su nastali od starijih klikova. Postavite window na maksimalnih 90 dana i pratite prosečan sales cycle iz CRM-a da procenite koliko toga ipak ostaje van dometa.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #3</p>
        <p className="font-semibold mb-2">Sve vrednosti su $1 ili fiksna vrednost — algoritam je "slep" za razliku između malog i velikog posla</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">
            <strong>Rešenje:</strong> Uvek prosleđujte stvarnu vrednost ugovora (Deal Amount) za Closed-won, ne fiksnu ili simboličnu vrednost. Bez razlike u vrednosti, Target ROAS ne može da radi svoj posao — algoritam tretira posao od 500€ i posao od 50.000€ identično.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #4</p>
        <p className="font-semibold mb-2">Zaboravljen consent — GCLID/email se hvata i šalje bez pravnog osnova</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">
            <strong>Rešenje:</strong> Pre nego što uključite bilo koji mehanizam offline importa, proverite consent banner i privacy policy sajta — korisnik mora biti obavešten da se podaci koriste za advertising svrhe. Za Enhanced Conversions for Leads, hashovanje mora da se desi PRE slanja podataka, nikad posle, i nikad ne šaljite plain-text email/telefon.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #5</p>
        <p className="font-semibold mb-2">GCLID se ne prenosi kroz sve korake CRM pipeline-a (npr. gubi se pri Lead-to-Opportunity konverziji)</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">
            <strong>Rešenje:</strong> Testirajte ceo put jednog test lead-a od klika na oglas do Closed-won u CRM-u i proverite da GCLID polje ostaje popunjeno na svakom koraku. Ovo je posebno čest problem u Salesforce-u pri konverziji Lead objekta u Opportunity.
          </p>
        </div>
      </div>

      <hr />

      <h2 id="faq-offline-conversion-import">Često postavljana pitanja</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li mi treba i GCLID i Enhanced Conversions for Leads, ili je dovoljan jedan?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Jedan mehanizam je dovoljan da počnete, ali za B2B sa duljim sales ciklusom preporučujem oba paralelno. GCLID kolačić ima ograničen rok trajanja (do 90 dana u Google Ads), pa poslovi koji se zatvore nakon toga mogu promašiti attribution ako se oslanjate samo na GCLID. Enhanced Conversions for Leads, baziran na email/telefon hash-u, hvata te "propuštene" konverzije jer ne zavisi od kolačića.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko brzo treba da uploadujem offline konverzije nakon zatvaranja posla?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Google preporučuje upload u roku od nekoliko dana od promene statusa, ali tehnički prihvata konverzije sve dok je originalni klik unutar konfigurisanog conversion window-a (maksimum 90 dana od klika, ne od uploada). U praksi, nedeljni upload je solidan kompromis između svežine podataka i operativnog opterećenja — mesečni upload već znatno usporava učenje algoritma.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta ako moj CRM nema nativnu Google Ads integraciju?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Postoje tri opcije, od najjednostavnije do najfleksibilnije: (1) ručni scheduled CSV upload direktno u Google Ads UI, (2) automatizacija preko Zapier ili Make koja povezuje bilo koji CRM sa Google Ads API-jem, ili (3) direktna integracija preko Google Ads API-ja ako imate developersku podršku. Za većinu manjih timova, CSV upload na nedeljnoj bazi je sasvim dovoljan za start.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li offline conversion import krši GDPR?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Sam po sebi ne, ali morate imati pravni osnov za obradu podataka u advertising svrhe (obično consent) i ispravno implementirati tehničke zaštite. Za Enhanced Conversions for Leads obavezno hashujte email i telefon (SHA-256) PRE slanja Google-u — nikad ne šaljite plain-text lične podatke. Konsultujte se sa nekim ko poznaje lokalnu regulativu (GDPR za EU, ili odgovarajući zakon o zaštiti podataka u vašoj jurisdikciji) pre implementacije, posebno ako radite sa osetljivim B2B podacima.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko brzo ću videti bolje rezultate nakon uvođenja offline importa?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Ne odmah. Algoritmu treba vreme da nakupi dovoljno Closed-won signala da promeni ponašanje — obično nekoliko nedelja do par meseci, u zavisnosti od dužine vašeg sales ciklusa i volumena poslova. Prvih par nedelja tretirajte kao fazu prikupljanja podataka, ne fazu očekivanja rezultata. Prerano prebacivanje na Target CPA/ROAS pre nego što ima dovoljno Closed-won volumena često pravi više štete nego koristi.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Treba vam pomoć da povežete Google Ads sa CRM-om?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          Postavljam offline conversion import za B2B klijente — od GCLID/Enhanced Conversions setapa do integracije sa HubSpot, Salesforce ili Pipedrive pipeline-om. Rezultat: algoritam koji uči od pravih poslovnih ishoda, ne samo od popunjenih formi.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/google-ads-za-b2b" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads za B2B</p>
          <p className="text-xs text-gray-500 mb-0">Kampanje i tracking prilagođeni dugim sales ciklusima.</p>
        </Link>
        <Link href="/usluge/google-ads-za-saas" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads za SaaS</p>
          <p className="text-xs text-gray-500 mb-0">Trial-to-paid tracking i vrednovanje kroz ceo funnel.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking Vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kompletna postavka GTM, GA4 i Google Ads tagova.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "ga4-google-ads-integracija" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">GA4 i Google Ads Integracija</p>
          <p className="text-xs text-gray-500 mb-0">Kako povezati GA4 podatke sa Google Ads optimizacijom.</p>
        </Link>
        <Link href="/usluge/konsultacije" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Konsultacije</p>
          <p className="text-xs text-gray-500 mb-0">Jednokratni audit ili tekuća saradnja na strategiji.</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: 6. jul 2026.
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
