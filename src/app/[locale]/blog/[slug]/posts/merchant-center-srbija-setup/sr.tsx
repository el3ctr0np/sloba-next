import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function MerchantCenterSrbijaSetupSR() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Google Merchant Center je preduslov broj jedan za Shopping oglase — bez verifikovanog naloga i ispravnog product feed-a, ne postoji Shopping kampanja. Ovo je korak-po-korak vodič za setup specifično prilagođen srpskom tržištu, pre nego što Shopping zvanično starta u novembru 2026.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">10+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">MC naloga koje sam podešavao</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">8</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">obaveznih feed atributa</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1-3 ned.</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">account review na novim tržištima</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">95%+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">target approval rate pre launch-a</p>
          </div>
        </div>
      </div>

      {/* ── GMC availability warning ── */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 md:p-5 my-6">
        <p className="font-semibold text-amber-900 mb-1">⚠️ Važna napomena — status jul 2026</p>
        <p className="text-amber-800 text-base mb-0">
          <strong>Otvaranje Merchant Center naloga za srpsko tržište trenutno još nije moguće.</strong> Google će registraciju omogućiti pred zvanični start Shopping-a u Srbiji. Više čitalaca mi je javilo da registracija trenutno ne prolazi — to je očekivano, ne radite ništa pogrešno. Ovaj vodič koristite kao pripremu: kada se registracija otvori, proći ćete kroz setup za jedan dan umesto za nedelju dana. Sve ostalo iz vodiča (feed priprema, atributi, struktura sajta) možete raditi već sada.
        </p>
      </div>

      <p>
        Kad god otvorim novi Shopping nalog za klijenta, prva stvar koju radim nije bidding strategija niti kampanjska struktura — to je Merchant Center. Zvuči kao administrativni detalj, ali u praksi je obrnuto: 80% grešaka koje vidim u Shopping kampanjama potiču iz lošeg MC setup-a ili neurednog feed-a, ne iz lošeg bid managementa.
      </p>
      <p>
        Radim Google Ads već godinama sa 10 aktivnih klijenata — od Perun Moto (globalna moto oprema) do Chelleon UK (skincare eCommerce) i Sleepy Piglet UK (mattress brand). Sva tri naloga imaju Shopping kampanje koje prolaze kroz Merchant Center, i sva tri su u nekom trenutku imala feed probleme koje sam morao da rešavam. Ovaj vodič je destilacija tih iskustava, prilagođena specifično za srpsko tržište koje dobija Shopping u novembru 2026.
      </p>
      <p>
        Ovo je supporting post uz pillar vodič{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }} className="underline text-blue-700 font-medium">
          Google Shopping Dolazi u Srbiju — Kompletan Vodič za Pripremu
        </Link>. Ako tek počinjete i treba vam širi kontekst (datum launch-a, Ex-Yu tržišta, troškovi), pročitajte prvo taj post. Ovde ulazim duboko samo u Merchant Center setup.
      </p>

      <hr />

      <h2>Šta je Google Merchant Center i zašto je preduslov za Shopping</h2>
      <p>
        <GlossaryLink slug="merchant-center">Google Merchant Center</GlossaryLink> (MC) je besplatna platforma na merchants.google.com gde upload-ujete <strong>product feed</strong> — strukturirani spisak svih proizvoda sa cenama, slikama, dostupnošću i drugim atributima. <GlossaryLink slug="google-ads">Google Ads</GlossaryLink> ne zna ništa o vašim proizvodima dok mu vi to ne kažete kroz MC. Nema feed-a, nema Shopping oglasa. Tačka.
      </p>
      <p>
        Ljudi često mešaju Merchant Center sa Google Ads nalogom — to su dve odvojene platforme koje se povezuju. Google Ads je mesto gde kreirate kampanje i upravljate budžetom. Merchant Center je mesto gde živi vaš katalog proizvoda. Shopping kampanja u Google Ads-u "vuče" proizvode direktno iz vašeg MC feed-a — vi ne birate ključne reči kao kod Search kampanja, Google automatski matchuje proizvode sa pretragama na osnovu podataka iz feed-a.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Iz mog iskustva</p>
        <p className="text-blue-800 text-base mb-0">
          Klijenti me često pitaju "zašto se moj proizvod ne prikazuje" kada je kampanja aktivna i budžet se troši normalno. U 9 od 10 slučajeva odgovor je u Merchant Center-u — disapproved proizvod, loš feed atribut, ili mismatch cene između sajta i feed-a. Prvo mesto koje proverim nije Google Ads interfejs, nego MC Diagnostics.
        </p>
      </div>

      <hr />

      <h2>Korak-po-korak: kreiranje i verifikacija naloga</h2>
      <p>
        Evo tačno šta treba da uradite, redosledom kojim to radim sa svakim novim klijentom. Podsetnik: za srpsko tržište registracija još nije otvorena — ove korake ćete proći na dan kada Google omogući otvaranje naloga. Do tada pripremite sve što koraci traže (poslovni podaci, pristup sajtu za verifikaciju), da vas ništa ne uspori.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Kreirajte nalog na merchants.google.com</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Prijavite se sa Google nalogom koji planirate da koristite dugoročno za biznis (ne lični Gmail koji možete izgubiti pristup). Unesite naziv firme identičan onome na sajtu i fakturama — Google poredi ove podatke.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Unesite business information kompletno</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Adresa, PIB/matični broj, kontakt telefon, email za podršku. Nepotpun profil je jedan od glavnih okidača za account suspension na novim tržištima — Google je stroži prema nalozima bez istorije.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Verifikujte vlasništvo sajta</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Tri opcije: HTML tag u &lt;head&gt; sekciji, Google Analytics kod (ako već imate GA4), ili Google Tag Manager. Preporučujem GTM opciju ako ga već koristite — najbrža i najstabilnija metoda, ne zahteva ručno editovanje koda za svaku promenu.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Claimujte domen</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Verifikacija dokazuje da imate pristup sajtu; claiming dokazuje da je taj domen dodeljen vašem MC nalogu i da ga niko drugi ne može koristiti za feed. Bez claiming-a, feed upload je blokiran. U MC: Business information → Website → Claim website.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Podesite shipping settings</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Tools → Shipping and returns. Definišite cene dostave po regionu (cela Srbija, ili po gradovima ako imate diferenciranu cenu), rokove isporuke, i uslove za besplatnu dostavu. Ovo se prikazuje direktno u Shopping oglasu i utiče na <GlossaryLink slug="ctr">CTR</GlossaryLink>.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div>
              <strong>Povežite Merchant Center sa Google Ads nalogom</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Tools → Linked accounts → Google Ads → unesite Customer ID. Potvrda mora biti prihvaćena sa obe strane (MC i Google Ads). Bez ove veze, Shopping kampanja ne može da povuče proizvode iz feed-a — ovo je poslednji korak pre nego što možete kreirati kampanju.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno za nova tržišta</p>
        <p className="text-yellow-800 text-base mb-0">
          Kada Google uvodi Shopping na novo tržište, account review može trajati 1-3 nedelje umesto uobičajenih par dana. Preporučujem da nalog kreirate i verifikujete minimum 60 dana pre nego što planirate da lansirate prvu kampanju — ne čekajte poslednji trenutak.
        </p>
      </div>

      <hr />

      <h2>Product feed osnove — 8 obaveznih atributa</h2>
      <p>
        Product feed je XML ili TXT fajl (ili Google Sheets tabela) koji sadrži podatke o svakom proizvodu. Google čita ove atribute da bi odlučio da li i kada da prikaže vaš proizvod za određenu pretragu. Ovih 8 atributa su apsolutno obavezni — bez njih, proizvod se ne prihvata u feed:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Atribut</th>
              <th className="py-3 px-3 font-heading font-semibold">Šta predstavlja</th>
              <th className="py-3 px-3 font-heading font-semibold">Primer za srpski feed</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">id</td>
              <td className="py-3 px-3">Jedinstveni identifikator proizvoda (SKU)</td>
              <td className="py-3 px-3">SKU-10234-M-Crna</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">title</td>
              <td className="py-3 px-3">Naziv proizvoda — najvažniji faktor za matching</td>
              <td className="py-3 px-3">Nike Air Max 90 Muške Patike Bele Broj 43</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">description</td>
              <td className="py-3 px-3">Opis proizvoda, 500-1000 karaktera</td>
              <td className="py-3 px-3">Detaljan opis sa materijalom, karakteristikama, upotrebom</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">link</td>
              <td className="py-3 px-3">Direktan URL ka product stranici</td>
              <td className="py-3 px-3">https://vasshop.rs/proizvod/nike-air-max-90</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">image_link</td>
              <td className="py-3 px-3">URL glavne slike, min 800x800px</td>
              <td className="py-3 px-3">https://vasshop.rs/img/nike-air-max-90-main.jpg</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">price</td>
              <td className="py-3 px-3">Cena, mora biti identična sajtu</td>
              <td className="py-3 px-3">12990.00 RSD</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">availability</td>
              <td className="py-3 px-3">Status zaliha, real-time sync</td>
              <td className="py-3 px-3">in stock / out of stock / preorder</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">condition</td>
              <td className="py-3 px-3">Stanje proizvoda</td>
              <td className="py-3 px-3">new / refurbished / used</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Uz ovih 8 obaveznih, snažno preporučujem da odmah dodate i <strong>brand</strong>, <strong>gtin</strong> i <strong>google_product_category</strong> — tehnički nisu uvek obavezni, ali bez njih Google ima manje signala za matching i vaš CPC će biti viši. Za brandovane proizvode (Nike, Bosch, Zara), GTIN je praktično obavezan — Google sve više penalizuje feed-ove bez njega.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Pravilo koje uvek ponavljam klijentima: feed mora biti 100% identičan sajtu. Cena, dostupnost, naziv — sve mora da se poklapa. Svaki mismatch je disapproval koji čeka da se desi.
        </p>
      </div>

      <hr />

      <h2>Metode dostave feed-a — koja je prava za vas</h2>
      <p>
        Postoji nekoliko načina da vaš product feed stigne do Merchant Center-a. Izbor zavisi od platforme na kojoj vam radi sajt i koliko proizvoda imate.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Metoda #1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Manual upload</h3>
          <p className="text-base text-gray-600 mb-0">Ručno upload-ujete XML/TXT fajl kroz MC interfejs. Radi za male kataloge (ispod 20-30 proizvoda) ili jednokratne testove. Ne preporučujem za bilo šta ozbiljnije — svaka promena cene ili stanja zahteva ručno ažuriranje.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Metoda #2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Google Sheets</h3>
          <p className="text-base text-gray-600 mb-0">Kreirate feed u Google Sheets sa kolonama koje odgovaraju atributima, povežete sa MC, i podesite scheduled fetch (npr. dnevno u 3 ujutru). Dobra opcija za manje do srednje kataloge bez developera — lako se ažurira, vidljivo je svima na timu.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Metoda #3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Shopify / WooCommerce plugin</h3>
          <p className="text-base text-gray-600 mb-0">Za Shopify: Google &amp; YouTube app generiše feed automatski iz vašeg kataloga. Za WooCommerce: Google Listings &amp; Ads plugin (zvanični) ili YITH Google Shopping. Sync je automatski i real-time — ovo je preporuka za 90% srpskih eCommerce shopova.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Metoda #4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Content API for Shopping</h3>
          <p className="text-base text-gray-600 mb-0">Za custom shopove (SAP, sopstveni CMS) ili velike kataloge (1000+ SKU-ova) sa čestim promenama cena/zaliha. Zahteva developera, ali daje najveću kontrolu i najbrži real-time sync. Ovo koristimo kod klijenata sa ERP integracijom tipa SAP Business One.</p>
        </div>
      </div>

      <p>
        Za većinu srpskih eCommerce biznisa sa kojima sam radio, plugin rešenje (Shopify ili WooCommerce) je najbolji balans — postavlja se za par sati, sync je automatski, i ne zahteva developera za svaku promenu cene. Ako imate custom platformu ili preko 1000 SKU-ova, Content API se isplati zbog real-time preciznosti — real-time availability sync direktno utiče na to koliko brzo Google reaguje kad proizvod ode iz stanja zaliha.
      </p>

      <hr />

      <h2>Česte greške i razlozi za disapproval</h2>
      <p>
        Ovo su greške koje najčešće vidim kad radim MC audit za nove klijente — uključujući i one koje sam morao da rešavam kod Perun Moto i Chelleon naloga.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Nedostaje GTIN za brandovane proizvode</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Rešenje:</strong> Google zahteva GTIN (EAN barkod) za sve proizvode poznatih brendova. Ako prodajete Nike, Bosch, ili bilo koji brend sa barkodom, dodajte ga — obično je na pakovanju ili u dokumentaciji dobavljača. Za sopstvenu marku bez GTIN-a, popunite brand + MPN (manufacturer part number) ili aplicirajte za GTIN exemption kroz MC.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Mismatch cene između sajta i feed-a</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Rešenje:</strong> Google crawluje vaš sajt povremeno i poredi cenu sa onom u feed-u. Ako imate akciju na sajtu koja nije ažurirana u feed-u (ili obrnuto), proizvod dobija disapproval. Ako koristite plugin sa automatskim sync-om, ovo se retko dešava — ali ako ručno menjate cene na dva mesta, uvedite proceduru da se oba ažuriraju istovremeno.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Promotivni tekst u title-u ili description-u</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Rešenje:</strong> "NAJJEFTINIJE!!! Akcija -50% samo danas" u title-u je direktan put ka disapproval-u. Google zabranjuje promotivni jezik, caps lock, i simbole (!!!, $$$) u title-u i opisu. Cene i popusti idu u zaseban atribut (sale_price), ne u tekst.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Slike sa watermark-om ili logom preko proizvoda</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Rešenje:</strong> Google automatski detektuje i odbija slike sa watermark-om, tekstom, ili logom preko fotografije proizvoda. Čista bela ili neutralna pozadina, bez grafike. Alati poput remove.bg mogu ubrzati čišćenje velikog broja slika.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Nepotpuna business information ili nedostupan return policy link</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Rešenje:</strong> Google zahteva da vaš sajt ima jasno vidljivu return/refund policy stranicu, uslove korišćenja, i kontakt podatke. Ovo je posebno strogo za nova tržišta gde Google nema istorijske podatke o vašem biznisu — kompletirajte sve pre nego što uploadujete prvi feed.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Feed koji se ne ažurira dovoljno često</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Rešenje:</strong> Google preporučuje ažuriranje feed-a minimum jednom dnevno, a za availability idealno u realnom vremenu. Ako oglašavate proizvod kao "in stock" a on je rasprodat, dobijate account-level penalizaciju, ne samo disapproval tog proizvoda. Podesite scheduled fetch (dnevno) kao minimum.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <h2>Shipping i tax settings za Srbiju</h2>
      <p>
        Ovaj deo se često potcenjuje, a direktno utiče na CTR i na to da li vaš oglas uopšte prođe kroz feed validaciju.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Shipping za Srbiju</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Cena dostave po regionu</h3>
          <p className="text-base text-gray-600 mb-0">Definišite u Tools → Shipping settings. Ako imate jedinstvenu cenu za celu Srbiju (npr. 300 RSD), unesite je kao flat rate. Ako varira po gradu ili kurirskoj službi, podesite region-based rules.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Shipping za Srbiju</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Besplatna dostava prag</h3>
          <p className="text-base text-gray-600 mb-0">Ako nudite besplatnu dostavu nad određenim iznosom (npr. 5.000 RSD), postavite to kao pravilo — prikazuje se u oglasu kao "Free shipping" i direktno povećava CTR. Srpski kupci su na ovo osetljivi.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Tax za Srbiju</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Cene sa uključenim PDV-om</h3>
          <p className="text-base text-gray-600 mb-0">U Srbiji (kao i EU praksa) cene u feed-u treba da budu sa uključenim PDV-om, identično kao što se prikazuju na sajtu krajnjem kupcu. Ne ostavljajte tax polje prazno ako niste sigurni — proverite Google Merchant Center Help za tax setting po zemlji.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Rokovi isporuke</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Min/max transit time</h3>
          <p className="text-base text-gray-600 mb-0">Unesite realan raspon (npr. 1-3 radna dana za Beograd, 2-5 za ostatak Srbije). Netačan rok isporuke koji ne poklapa realnost dovodi do loših recenzija i potencijalnih account penalty-ja u dugom roku.</p>
        </div>
      </div>

      <hr />

      <h2>Povezivanje sa Google Ads nalogom</h2>
      <p>
        Poslednji tehnički korak pre nego što možete kreirati Shopping kampanju. Bez ove veze, Google Ads ne vidi vaš feed i Shopping opcija u interfejsu neće nuditi proizvode.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <h3 className="mt-0 mb-4 font-heading font-bold">Kako povezati MC i Google Ads</h3>
        <ol className="mb-0">
          <li>U Merchant Center: Tools → Linked accounts → Google Ads</li>
          <li>Unesite Google Ads Customer ID (format XXX-XXX-XXXX)</li>
          <li>Kliknite Link — zahtev se šalje na Google Ads nalog</li>
          <li>Prijavite se na Google Ads: Tools &amp; Settings → Linked accounts → Merchant Center → Approve</li>
          <li>Nakon potvrde, u Google Ads-u kreirajte novu kampanju tipa Shopping i izaberite povezani MC nalog kao izvor proizvoda</li>
        </ol>
      </div>

      <p>
        Napomena za agencije i konsultante: ako vodite Shopping za klijenta preko MCC naloga, veza mora ići na nivou pravog Google Ads Customer ID-a klijenta, ne na MCC ID. Ovo je čest izvor konfuzije kod prvog setup-a.
      </p>

      <hr />

      <h2>Checklist pre lansiranja Shopping kampanje</h2>
      <p>
        Pre nego što uključite prvu kampanju, prođite kroz ovu listu. Ovo je isti checklist koji koristim interno pre svakog Shopping launch-a.
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Pravilo: 95%+ approval rate pre uključivanja kampanje</p>
        <p className="text-base text-yellow-900 mb-0">Ako imate 30%+ disapproved proizvoda kad uključite kampanju, trošite budžet na mali deo kataloga i algoritam nema dovoljno podataka da nauči šta konvertuje. Rešite disapproval-e prvo, pa tek onda pokrenite kampanju.</p>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>MC nalog verifikovan i domen claimovan</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>Business information kompletna (adresa, PIB, kontakt)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>Shipping i tax settings podešeni za Srbiju</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>Return policy stranica live i linkovana</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>Feed uploadovan sa svih 8 obaveznih atributa</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>GTIN dodat za brandovane proizvode</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>Diagnostics sekcija proverena — approval rate 95%+</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>Automatski scheduled feed sync podešen (min. dnevno)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>Merchant Center povezan sa Google Ads nalogom</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded">✓</span>
          <span>Conversion tracking (purchase) aktivan i testiran</span>
        </div>
      </div>

      <p>
        Za detaljniju optimizaciju samog feed-a — title formule, google_product_category, custom labels za segmentaciju budžeta — pogledajte supporting post:{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-za-ecommerce-srbija-2026" } }} className="underline text-blue-700 font-medium">
          Google Ads za eCommerce u Srbiji — Kompletan Vodič
        </Link>. A za širi kontekst oko Shopping launch-a, Ex-Yu tržišta i budžetiranja, vratite se na{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="underline text-blue-700 font-medium">
          osnovni vodič o Google Shopping-u
        </Link>.
      </p>

      <hr />

      <h2>FAQ — najčešća pitanja o Merchant Center-u</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Da li je Merchant Center besplatan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Da, kreiranje naloga i korišćenje Merchant Center-a je potpuno besplatno. Plaćate isključivo za Shopping oglase kroz Google Ads (cost-per-click), ne za sam MC nalog ili feed hosting."
                }
              },
              {
                "@type": "Question",
                name: "Koliko dugo traje verifikacija i claiming sajta?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Verifikacija (HTML tag, GA ili GTM) je obično trenutna do nekoliko sati. Account review na potpuno novim tržištima (kao što će biti Srbija u novembru 2026) može trajati 1-3 nedelje — zato preporučujem da započnete proces minimum 60 dana pre planiranog launch-a kampanje."
                }
              },
              {
                "@type": "Question",
                name: "Šta ako nemam GTIN barkod za moje proizvode?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ako prodajete sopstvenu marku (private label) bez GTIN-a, popunite brand i MPN (manufacturer part number) atribute umesto GTIN-a, ili aplicirajte za GTIN exemption kroz Merchant Center. Za brandovane proizvode poznatih proizvođača, GTIN je praktično obavezan — bez njega rizikujete disapproval ili ograničen reach."
                }
              },
              {
                "@type": "Question",
                name: "Da li mogu koristiti Google Sheets umesto XML feed-a?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Da, Google Sheets je validna i često korišćena metoda dostave feed-a, posebno za manje i srednje kataloge bez developera. Kreirate tabelu sa kolonama koje odgovaraju obaveznim atributima, povežete je sa Merchant Center-om, i podesite scheduled fetch da se automatski osvežava."
                }
              },
              {
                "@type": "Question",
                name: "Zašto mi je proizvod disapproved iako izgleda ispravno?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Najčešći uzroci: mismatch cene između sajta i feed-a, nedostajući GTIN za brandovan proizvod, promotivni tekst u title-u, ili slika sa watermark-om. Proverite Diagnostics sekciju u Merchant Center-u — tamo Google navodi tačan razlog za svaki disapproved proizvod, sa linkom ka relevantnoj politici."
                }
              },
              {
                "@type": "Question",
                name: "Da li mi treba Merchant Center ako prodajem samo preko Instagram/Facebook prodavnice?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ne za Meta Shops — to je odvojen katalog kroz Meta Commerce Manager. Merchant Center je specifično za Google Shopping oglase. Ako želite da se pojavljujete i na Google pretrazi i na Meta platformama, trebaće vam dva odvojena feed-a (mada mnogi alati mogu generisati oba iz istog izvora podataka)."
                }
              }
            ]
          })
        }}
      />

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li je Merchant Center besplatan?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Da, kreiranje naloga i korišćenje Merchant Center-a je potpuno besplatno. Plaćate isključivo za Shopping oglase kroz Google Ads (cost-per-click), ne za sam MC nalog ili feed hosting.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko dugo traje verifikacija i claiming sajta?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Verifikacija (HTML tag, GA ili GTM) je obično trenutna do nekoliko sati. Account review na potpuno novim tržištima (kao što će biti Srbija u novembru 2026) može trajati 1-3 nedelje — zato preporučujem da započnete proces minimum 60 dana pre planiranog launch-a kampanje.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta ako nemam GTIN barkod za moje proizvode?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Ako prodajete sopstvenu marku (private label) bez GTIN-a, popunite brand i MPN (manufacturer part number) atribute umesto GTIN-a, ili aplicirajte za GTIN exemption kroz Merchant Center. Za brandovane proizvode poznatih proizvođača, GTIN je praktično obavezan.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li mogu koristiti Google Sheets umesto XML feed-a?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Da, Google Sheets je validna i često korišćena metoda dostave feed-a, posebno za manje i srednje kataloge bez developera. Kreirate tabelu sa kolonama koje odgovaraju obaveznim atributima, povežete je sa Merchant Center-om, i podesite scheduled fetch da se automatski osvežava.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto mi je proizvod disapproved iako izgleda ispravno?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Najčešći uzroci: mismatch cene između sajta i feed-a, nedostajući GTIN za brandovan proizvod, promotivni tekst u title-u, ili slika sa watermark-om. Proverite Diagnostics sekciju u Merchant Center-u — tamo Google navodi tačan razlog za svaki disapproved proizvod.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li mi treba Merchant Center ako prodajem samo preko Instagram/Facebook prodavnice?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Ne za Meta Shops — to je odvojen katalog kroz Meta Commerce Manager. Merchant Center je specifično za Google Shopping oglase. Ako želite prisustvo na obe platforme, trebaće vam dva odvojena feed-a.
          </div>
        </details>
      </div>

      <hr />

      {/* CTA block */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Treba vam pomoć oko Merchant Center setup-a?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          Prolazim kroz vaš sajt, feed i Merchant Center nalog i dajem konkretan plan pre nego što Shopping zvanično starta u Srbiji — deo naše usluge{" "}
          <Link href="/usluge/google-shopping" className="underline text-white hover:text-yellow-400">Google Shopping upravljanja</Link>.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Dolazi u Srbiju — Kompletan Vodič</p>
          <p className="text-xs text-gray-500 mb-0">Datum launch-a, Ex-Yu tržišta, 15-korak checklist, troškovi</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Vodič — Osnove</p>
          <p className="text-xs text-gray-500 mb-0">Standard Shopping vs Performance Max, feed optimizacija</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-za-ecommerce-srbija-2026" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads za eCommerce u Srbiji</p>
          <p className="text-xs text-gray-500 mb-0">Kompletan vodič za srpski eCommerce, feed optimizacija</p>
        </Link>
        <Link href="/usluge/google-ads-za-ecommerce" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Usluga: Google Ads za eCommerce</p>
          <p className="text-xs text-gray-500 mb-0">Setup, feed, kampanje i optimizacija — sve na jednom mestu</p>
        </Link>
      </div>
    </>
  );
}
