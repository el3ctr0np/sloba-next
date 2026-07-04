import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function ProductFeedSrpskiEcommerceSR() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Product feed je 80% posla oko Google Shopping-a — bidding i struktura kampanje dolaze tek kad je feed čist. Ovo je kompletan vodič kako da pripremite feed za srpsko tržište, atribut po atribut, dok čekate da se Merchant Center registracija zvanično otvori.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">8</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">obaveznih atributa</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">80%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">uspeha zavisi od feed-a</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">4</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">metode generisanja feed-a</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">150</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">karaktera idealan title</p>
          </div>
        </div>
      </div>

      {/* ── GMC availability note ── */}
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 md:p-5 my-6">
        <p className="font-semibold text-amber-900 mb-1">Napomena — status jul 2026</p>
        <p className="text-amber-800 text-base mb-0">
          Registracija Google Merchant Center naloga za srpsko tržište još uvek nije zvanično otvorena. To ne znači da nema šta da se radi — upravo suprotno. Feed je deo priprema koji možete i treba da radite sada, nezavisno od toga kada se registracija otvori. Kad taj dan dođe, imaćete gotov, testiran feed spreman za upload umesto da tek tada počinjete da razmišljate o title formulama i atributima. Ovaj vodič je fokusiran isključivo na sam feed — za MC nalog, verifikaciju i povezivanje pogledajte supporting post o Merchant Center setup-u linkovan ispod.
        </p>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Brzi odgovor
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Šta je product feed?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          <strong>Product feed</strong> je strukturirani fajl (XML, TXT ili Google Sheets) koji sadrži sve podatke o vašim proizvodima — naziv, cenu, sliku, dostupnost i druge atribute — u formatu koji Google Merchant Center razume. Google koristi feed da odluči kada, kome i za koju pretragu da prikaže vaš proizvod u <GlossaryLink slug="pmax">Shopping oglasima</GlossaryLink>. Bez feed-a, Shopping kampanja nema šta da prikaže — feed je bukvalno izvor svih proizvoda koje oglašavate.
        </p>
      </div>

      <p>
        Kad radim Shopping audit za novog klijenta, gotovo uvek prvo pogledam feed, ne kampanju. Razlog je jednostavan — loš bidding se da popraviti za nedelju dana, ali loš feed je razlog zašto pola kataloga uopšte ne dobija impresije, bez obzira koliko dobro strukturirate kampanju oko njega. Feed je fundament; sve ostalo je nadgradnja.
      </p>
      <p>
        Radio sam Shopping feed-ove za globalne naloge — moto delove koji se prodaju u skoro 40 zemalja, UK skincare brend i UK proizvođača dušeka. Svaki od ta tri kataloga imao je svoje specifičnosti (varijante po veličini/boji, sezonski proizvodi, GTIN komplikacije), ali princip je uvek isti: čist, kompletan i ažuran feed nosi kampanju, ne obrnuto. Ovaj vodič prenosi to iskustvo na srpski kontekst — jezik, RSD cene, PDV i lokalne platforme koje ovdašnji eCommerce koristi.
      </p>
      <p>
        Ovo je treći post u Google Shopping seriji. Ako tek počinjete, prvo pročitajte pillar vodič{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }} className="underline text-blue-700 font-medium">
          Google Shopping Dolazi u Srbiju — Kompletan Vodič za Pripremu
        </Link>{" "}
        za širi kontekst (datum launch-a, Ex-Yu tržišta, troškovi). Za Merchant Center nalog i verifikaciju pogledajte{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "merchant-center-srbija-setup" } }} className="underline text-blue-700 font-medium">
          Google Merchant Center za Srbiju — Kompletan Setup Vodič
        </Link>. Ovde ulazim duboko isključivo u sam feed.
      </p>

      <hr />

      <h2>Zašto je product feed 80% uspeha Shopping kampanja</h2>
      <p>
        Kod Search kampanja vi birate ključne reči i pišete oglase ručno. Kod Shopping-a, Google automatski odlučuje kada da prikaže koji proizvod na osnovu podataka koje mu date kroz feed — vi ne kontrolišete "ključne reči", vi kontrolišete kvalitet i preciznost podataka o proizvodu. To je fundamentalna razlika koju mnogi vlasnici eCommerce sajtova ne shvate na početku.
      </p>
      <p>
        U praksi to znači da je feed istovremeno i vaš katalog i vaš targeting mehanizam. Title, opis, kategorija i atributi određuju za koje pretrage se proizvod pojavljuje. Loš title znači da se proizvod pojavljuje za pogrešne pretrage (ili uopšte ne pojavljuje), koliko god budžeta i bidding pažnje uložili u kampanju.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Iz mog iskustva</p>
        <p className="text-blue-800 text-base mb-0">
          Kad klijent pita zašto se određeni proizvod slabo prikazuje, u većini slučajeva odgovor je u feed-u — nepotpun title, pogrešna kategorija, ili nedostajući atribut koji Google koristi kao signal za matching. Retko je u pitanju bidding. Prvo mesto koje proverim je feed kvalitet, tek onda kampanjska struktura.
        </p>
      </div>

      <hr />

      <h2>Anatomija feed-a — obavezni i preporučeni atributi</h2>
      <p>
        Ovih 8 atributa su apsolutno obavezni. Bez ijednog od njih, proizvod se ne prihvata u feed i ne ulazi u Shopping oglase:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Atribut</th>
              <th className="py-3 px-3 font-heading font-semibold">Šta predstavlja</th>
              <th className="py-3 px-3 font-heading font-semibold">Primer</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">id</td>
              <td className="py-3 px-3">Jedinstveni identifikator proizvoda (SKU)</td>
              <td className="py-3 px-3">SKU-88213-M-Crna</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">title</td>
              <td className="py-3 px-3">Naziv proizvoda — najvažniji atribut za matching</td>
              <td className="py-3 px-3">Adidas Ultraboost Muške Patike Crne Broj 43</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">description</td>
              <td className="py-3 px-3">Opis proizvoda, preporučeno 500-1000 karaktera</td>
              <td className="py-3 px-3">Materijal, karakteristike, upotreba, bez promo teksta</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">link</td>
              <td className="py-3 px-3">Direktan URL ka product stranici</td>
              <td className="py-3 px-3">https://vasshop.rs/proizvod/adidas-ultraboost</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">image_link</td>
              <td className="py-3 px-3">URL glavne slike, minimum 800x800px</td>
              <td className="py-3 px-3">https://vasshop.rs/img/adidas-ultraboost-main.jpg</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">price</td>
              <td className="py-3 px-3">Cena, mora biti identična sajtu, sa PDV-om</td>
              <td className="py-3 px-3">15990.00 RSD</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">availability</td>
              <td className="py-3 px-3">Status zaliha, real-time sync preporučen</td>
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
        Uz ovih 8, postoji grupa preporučenih atributa koje bih nazvao "obavezni u praksi" — tehnički Google ih ne zahteva za svaki proizvod, ali bez njih gubite reach i plaćate veći CPC:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Preporučeno #1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">brand</h3>
          <p className="text-base text-gray-600 mb-0">Naziv proizvođača ili vašeg brenda. Google koristi brand kao jak signal za matching, posebno kod poznatih proizvođača. Za sopstvenu marku, uvek popunite svojim brand imenom umesto da ostavite prazno.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Preporučeno #2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">gtin</h3>
          <p className="text-base text-gray-600 mb-0">Globalni barkod proizvoda (EAN/UPC). Za brandovane proizvode poznatih proizvođača, GTIN je praktično obavezan — Google sve više ograničava reach feed-ovima bez njega. Za private label bez GTIN-a, koristite brand + mpn kombinaciju.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Preporučeno #3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">google_product_category</h3>
          <p className="text-base text-gray-600 mb-0">Google-ova standardizovana taksonomija kategorija (npr. "Apparel &amp; Accessories &gt; Shoes"). Precizna kategorija poboljšava matching i omogućava benchmarking performansi po kategoriji unutar Merchant Center-a.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Preporučeno #4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">custom_label_0-4</h3>
          <p className="text-base text-gray-600 mb-0">Pet slobodnih polja koja vi definišete — margin nivo, sezona, bestseller status. Ne utiču na matching, ali su ključna za segmentaciju kampanja i bidding strategiju (detaljnije u sekciji custom labels ispod).</p>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Pravilo koje uvek ponavljam: feed mora biti 100% identičan sajtu, u svakom trenutku. Cena, dostupnost, naziv — svaki mismatch je disapproval ili loše korisničko iskustvo koje čeka da se desi.
        </p>
      </div>

      <hr />

      <h2>Title optimizacija — najvažnija poluga koju imate</h2>
      <p>
        Ako bih morao da izdvojim jedan atribut koji najviše utiče na performanse feed-a, to je <strong>title</strong>. Google ga koristi kao primarni signal za matching sa pretragama, a kupci ga vide direktno u oglasu — title radi dvostruki posao: targeting i konverzija u isto vreme.
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Struktura koja funkcioniše: Brend + Proizvod + Atribut + Veličina/Boja</p>
        <p className="text-base text-yellow-900 mb-0">
          Primer: "Nike Air Max 90 Muške Patike Bele Broj 43". Ovaj redosled prati kako ljudi zapravo pretražuju — prvo brend ili tip proizvoda, zatim specifičan atribut koji ih zanima. Izbegavajte da počinjete title generičkim rečima ("Kvalitetne", "Nove") — to je prostor koji bi trebalo da nosi konkretan podatak.
        </p>
      </div>

      <p>
        Nekoliko principa koje primenjujem na svakom feed-u koji radim:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Najvažniji podaci idu na početak</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Google prikazuje samo prvih ~70 karaktera na mobilnom, ostatak se seče. Brend i tip proizvoda moraju biti vidljivi bez skrolovanja ili proširivanja.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Ciljajte oko 150 karaktera ukupno</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Google dozvoljava do 150 karaktera za title. Ne morate ih iskoristiti sve, ali generički kratki title (npr. samo "Patike") gubi priliku da uhvati specifične pretrage sa dužim intent-om.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Uključite veličinu, boju i model tamo gde su relevantni</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Ovo su podaci koje kupci konkretno pretražuju ("patike broj 43 bele"). Ako imate varijante proizvoda, svaka varijanta treba svoj title sa specifičnim atributom, ne generički title za sve varijante.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Nikad promotivni jezik u title-u</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">"NAJJEFTINIJE!!!", caps lock, ili "-50% danas" u title-u vodi ka disapproval-u. Cena i popust idu kroz price/sale_price atribute, title ostaje čisto opisni.</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2>Opisi i slike — pravila koja se često zanemaruju</h2>
      <p>
        Description ne utiče na matching koliko title, ali i dalje igra ulogu i lako se zanemari kad se feed generiše automatski iz sirovih podataka na sajtu.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Opisi</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Faktičan, ne prodajni ton</h3>
          <p className="text-base text-gray-600 mb-0">Materijal, dimenzije, karakteristike, način upotrebe — bez marketinškog jezika tipa "najbolji na tržištu". Google penalizuje description koji liči na reklamu umesto na proizvodni podatak.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Opisi</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Prvih 160-500 karaktera nose težinu</h3>
          <p className="text-base text-gray-600 mb-0">Iako description može ići do 5000 karaktera, najvažniji podaci treba da budu u prvih par rečenica — pretpostavite da se ostatak neće ni pročitati od strane algoritma ili kupca.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Slike</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Studio slika je obavezna kao primarna</h3>
          <p className="text-base text-gray-600 mb-0">image_link mora biti čista slika proizvoda na neutralnoj/beloj pozadini, bez watermark-a, teksta ili logotipa preko fotografije. Google automatski detektuje i odbija slike koje krše ovo pravilo.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Slike</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Lifestyle slike idu u additional_image_link</h3>
          <p className="text-base text-gray-600 mb-0">Fotografije proizvoda "u upotrebi" (na modelu, u ambijentu) su odlične za konverziju, ali ne kao primarna slika — koristite additional_image_link polje za njih, dok primarna ostaje čist studio snimak.</p>
        </div>
      </div>

      <hr />

      <h2>Feed za srpski jezik — karakteri, cene, PDV</h2>
      <p>
        Ovde se dešava najviše grešaka kod domaćih shopova, jer su alati i dokumentacija za Merchant Center pretežno pisani za engleski/zapadna tržišta.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Karakteri</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Ćirilica ili latinica — budite konzistentni</h3>
          <p className="text-base text-gray-600 mb-0">Ako sajt koristi latinicu, feed treba da bude na latinici (sa dijakritičkim znacima: š, đ, č, ć, ž — ne "sh", "dj"). Enkodiranje fajla mora biti UTF-8, inače se karakteri lome u prikazu oglasa.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Cene</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">RSD format i decimale</h3>
          <p className="text-base text-gray-600 mb-0">Format cene u feed-u je broj + valuta (npr. "15990.00 RSD"), ne "15.990,00 din". Proverite da vaš feed generator ne izbacuje srpski decimalni format (zarez umesto tačke) — to izaziva grešku pri parsiranju.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">PDV</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Cena uvek sa uključenim PDV-om</h3>
          <p className="text-base text-gray-600 mb-0">Kao i na sajtu, price atribut u feed-u treba da prikazuje krajnju cenu za kupca, sa PDV-om uključenim. Ne ostavljajte tax polje prazno "za svaki slučaj" — nedosledna praksa ovde je čest uzrok mismatch grešaka.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Kategorije</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">google_product_category na engleskom</h3>
          <p className="text-base text-gray-600 mb-0">Bez obzira što je ostatak feed-a na srpskom, google_product_category se popunjava iz Google-ove zvanične taksonomije koja je na engleskom (ili numeričkim ID-jem kategorije) — ne prevodite je.</p>
        </div>
      </div>

      <hr />

      <h2>Custom labels — strategija za segmentaciju bidding-a</h2>
      <p>
        Pet custom_label polja (custom_label_0 do custom_label_4) su možda najnedovoljno iskorišćen deo feed-a kod manjih shopova. Ne utiču na to da li se proizvod prikazuje, ali direktno omogućavaju precizniji bidding kroz kampanju.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Margin segmentacija</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">Označite proizvode po profitnoj marži (npr. "high-margin", "low-margin"). Ovo vam omogućava da napravite odvojene kampanje ili ad grupe i date agresivniji bid na proizvode koji donose više profita po prodaji.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Sezonska segmentacija</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">Za sezonske kataloge (odeća, baštenska oprema, grejna tela) označite proizvode po sezoni ("leto-2026", "zima-2026"). Omogućava da budžet automatski prati sezonski relevantne proizvode bez ručnog premeštanja kampanja.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Bestseller / performance tier</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">Označite top proizvode po istorijskim prodajama ("bestseller", "novi-proizvod", "spor-obrt"). Ovo je osnova za tiered Shopping strukturu — bestselleri dobijaju sopstvenu kampanju sa agresivnijim bidding-om, novi proizvodi svoju sa nižim bid-om dok se ne skupe podaci.</p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Iz mog iskustva</p>
        <p className="text-blue-800 text-base mb-0">
          Custom labels su alat koji retko vidim popunjen kod novih klijenata, a jedan je od najjeftinijih načina da poboljšate ROAS bez dodatnog rada na kampanji. Segmentacija po margin nivou je prva stvar koju uvodim čim preuzmem novi eCommerce nalog — čak i pre nego što diram bidding strategiju.
        </p>
      </div>

      <hr />

      <h2>Metode generisanja feed-a po platformi</h2>
      <p>
        Kako ćete feed generisati i održavati zavisi najviše od toga na kojoj platformi vam radi sajt i koliko proizvoda imate u katalogu.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Metoda #1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Shopify apps</h3>
          <p className="text-base text-gray-600 mb-0">Google &amp; YouTube app (zvanični, besplatan) automatski generiše feed iz Shopify kataloga i sinhronizuje ga real-time. Za komplikovanije kataloge sa varijantama postoje i third-party app-ovi (npr. Simprosys) sa dodatnim kontrolama nad title formulama.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Metoda #2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">WooCommerce pluginovi</h3>
          <p className="text-base text-gray-600 mb-0">Google Listings &amp; Ads (zvanični WooCommerce/WordPress plugin) ili YITH Google Shopping generišu feed direktno iz proizvoda na sajtu. Najčešći izbor za srpske eCommerce shopove na WordPress-u — sync je automatski, minimalno održavanje.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Metoda #3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Custom XML za domaće platforme</h3>
          <p className="text-base text-gray-600 mb-0">Mnogi srpski shopovi rade na custom CMS-u ili domaćim platformama (npr. sopstveni sistem, ili lokalni provider) bez gotovog Google feed plugina. Rešenje je da developer generiše XML fajl direktno iz baze proizvoda po Google-ovoj specifikaciji, sa scheduled cron job-om za redovno osvežavanje.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Metoda #4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Google Sheets za male kataloge</h3>
          <p className="text-base text-gray-600 mb-0">Za kataloge ispod 50-100 proizvoda, Google Sheets je sasvim legitimna opcija — ručno ili polu-automatski popunjena tabela sa kolonama koje odgovaraju atributima, povezana sa Merchant Center-om preko scheduled fetch-a (npr. dnevno).</p>
        </div>
      </div>

      <p>
        Za veće kataloge (1000+ SKU-ova) sa čestim promenama cena i zaliha, Content API for Shopping daje najveću preciznost i najbrži real-time sync, ali zahteva developera. Za većinu srpskih eCommerce biznisa, plugin rešenje (Shopify ili WooCommerce) je i dalje najbolji balans brzine implementacije i pouzdanosti.
      </p>

      <hr />

      <h2>Najčešće feed greške i kako ih dijagnostikovati</h2>
      <p>
        Ovo su greške koje se ponavljaju kod skoro svakog feed audit-a koji sam radio, uključujući naloge sa globalnim katalozima gde je varijanti i po nekoliko hiljada.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Generički ili duplirani title kroz varijante</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Rešenje:</strong> Ako imate 10 varijanti istog proizvoda (različite boje/veličine) sa identičnim title-om, Google ne može da razlikuje koja varijanta odgovara kojoj pretrazi. Svaka varijanta treba title koji uključuje njenu specifičnu boju/veličinu — automatizujte ovo kroz feed template, ne ručno.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Feed se ne ažurira dovoljno često</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Rešenje:</strong> Google preporučuje minimum dnevno ažuriranje, a availability idealno u realnom vremenu. Proizvod oglašen kao "in stock" koji je zapravo rasprodat dovodi do lošeg korisničkog iskustva i account-level penalizacije, ne samo do problema sa jednim proizvodom. Proverite u Diagnostics kada je poslednji uspešan fetch.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Mismatch cene između sajta i feed-a</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Rešenje:</strong> Google periodično crawluje vaš sajt i poredi cenu sa feed-om. Akcija na sajtu koja nije ažurirana u feed-u (ili obrnuto) vodi ka disapproval-u. Ako menjate cene ručno na dva mesta, uvedite proceduru sinhronog ažuriranja ili pređite na automatski sync.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Nedostajući ili pogrešan google_product_category</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Rešenje:</strong> Prazna ili pogrešno dodeljena kategorija smanjuje kvalitet matching-a i onemogućava benchmark izveštaje u Merchant Center-u. Prođite kroz Google-ovu taksonomiju kategorija jednom kod setup-a feed-a i mapirajte je pažljivo, ne automatski na najbližu opciju.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Nizak broj proizvoda sa GTIN-om</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Rešenje:</strong> Za brandovane proizvode, GTIN nedostatak direktno ograničava reach. Proverite Diagnostics sekciju za "missing GTIN" upozorenja i popunite ih iz dokumentacije dobavljača ili barkoda na pakovanju — ovo je jedan od najbrže isplativih fix-ova u feed audit-u.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
          <p className="font-semibold mb-2">Karakteri koji se lome (enkodiranje)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-base text-green-800 mb-0">
              <strong>Rešenje:</strong> Ako se š, č, ć, ž prikazuju kao čudni simboli u feed-u, fajl nije snimljen u UTF-8 enkodiranju. Proverite podešavanja export-a na vašoj platformi ili u feed generator plugin-u — ovo je česta, ali lako rešiva greška specifična za srpski jezik.
            </p>
          </div>
        </div>
      </div>

      <p>
        Za dijagnostiku, prva stanica je uvek Diagnostics sekcija u Merchant Center-u (Products → Diagnostics) — tamo Google navodi tačan razlog za svaki disapproved ili upozoren proizvod, sa linkom ka relevantnoj politici. Ne pogađajte uzrok, pročitajte poruku.
      </p>

      <hr />

      <h2>Feed optimizacija kao kontinuiran proces</h2>
      <p>
        Feed nije "podesi jednom i zaboravi" projekat. Najbolji rezultati dolaze kad ga tretirate kao živi deo kampanje koji se stalno testira i unapređuje, slično kao što testirate oglase kod Search kampanja.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <h3 className="mt-0 mb-4 font-heading font-bold">Kako izgleda kontinuirana optimizacija u praksi</h3>
        <ol className="mb-0">
          <li><strong>Supplemental feeds</strong> — dodatni feed koji nadograđuje primarni feed novim podacima (npr. custom labels ili ažurirane kategorije) bez menjanja glavne izvorne datoteke. Koristan kad ne možete direktno editovati primarni feed generisan iz platforme.</li>
          <li><strong>A/B testovi title formula</strong> — testirajte da li title sa "Brend + Proizvod + Boja" ili "Proizvod + Brend + Veličina" donosi bolji CTR za vašu kategoriju proizvoda. Male promene u redosledu atributa mogu značajno promeniti impresije.</li>
          <li><strong>Mesečni pregled Diagnostics-a</strong> — čak i kad je feed stabilan, novi proizvodi ili promene na sajtu mogu uvesti nove greške. Redovan mesečni pregled sprečava da se problem gomila neopaženo.</li>
          <li><strong>Praćenje performansi po custom label segmentu</strong> — kad jednom uvedete margin/sezona/bestseller labele, pratite performanse po segmentu i prilagođavajte bidding na osnovu tih podataka, ne na osnovu celog kataloga uprosečeno.</li>
        </ol>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-base mb-0">
          Feed optimizacija najviše vrednosti donosi tek kad imate dovoljno podataka o performansama po proizvodu. Prvih par nedelja nakon launch-a fokusirajte se na to da feed bude tehnički čist (95%+ approval rate) — title A/B testovi i custom label segmentacija dolaze kad se skupe konverzioni podaci.
        </p>
      </div>

      <hr />

      <h2>Zaključak</h2>
      <p>
        Product feed nije administrativna prepreka na putu do Shopping kampanje — to je najveća poluga koju imate na raspolaganju za performanse. Title struktura, kompletni atributi, GTIN, i custom label segmentacija zajedno određuju da li će vaš katalog dobiti maksimalan reach uz razuman CPC, ili će se boriti protiv sopstvenih nedostataka podataka.
      </p>
      <p>
        Za srpsko tržište, prednost je što feed pripremu možete raditi već sada — nezavisno od toga kad se Merchant Center registracija zvanično otvori. Kad taj trenutak dođe, umesto da tek počinjete da razmišljate o title formulama, imaćete gotov feed spreman za upload.
      </p>

      {/* CTA block */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Treba vam pomoć oko product feed-a?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          Prolazim kroz vaš katalog, feed strukturu i atribute i dajem konkretan plan pre nego što Shopping zvanično starta u Srbiji.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <hr />

      <h2>FAQ — najčešća pitanja o product feed-u</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Koji format feed-a je najbolji — XML, TXT ili Google Sheets?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nema univerzalno 'najboljeg' formata — zavisi od veličine kataloga i platforme. XML je standard za plugin-ovi i Content API integracije. Google Sheets je odličan za male kataloge (ispod 50-100 proizvoda) bez developera. TXT/CSV se ređe koristi ručno, ali ga neki custom sistemi generišu automatski. Bitnije od formata je da se redovno i tačno ažurira."
                }
              },
              {
                "@type": "Question",
                name: "Koliko često treba da ažuriram product feed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Google preporučuje minimum jednom dnevno ažuriranje celog feed-a, a za availability (stanje zaliha) idealno u realnom vremenu ili nekoliko puta dnevno. Ako vaš feed generator podržava automatski scheduled fetch, podesite ga na dnevni ciklus kao apsolutni minimum."
                }
              },
              {
                "@type": "Question",
                name: "Da li title proizvoda utiče na cenu klika (CPC)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Indirektno da. Precizan, dobro strukturiran title poboljšava relevantnost matching-a sa pretragama, što utiče na to koliko kvalitetan saobraćaj dobijate i koliko efikasno Google troši budžet. Loš title ne povećava CPC direktno, ali smanjava šansu da se proizvod uopšte prikaže za prave pretrage, što efektivno povećava trošak po konverziji."
                }
              },
              {
                "@type": "Question",
                name: "Šta su custom labels i da li su obavezni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Custom labels (custom_label_0 do custom_label_4) su pet slobodnih polja koja sami definišete za segmentaciju proizvoda — po marži, sezoni, bestseller statusu i slično. Nisu obavezni i ne utiču na matching, ali su ključni alat za precizniji bidding kroz kampanju kad želite različitu bid strategiju za različite segmente kataloga."
                }
              },
              {
                "@type": "Question",
                name: "Kako da popravim disapproved proizvode u feed-u?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Prvi korak je Merchant Center Diagnostics (Products → Diagnostics) — tamo Google navodi tačan razlog disapproval-a za svaki proizvod, sa linkom ka relevantnoj politici. Najčešći uzroci su mismatch cene, nedostajući GTIN, promotivni tekst u title-u, ili slike sa watermark-om. Rešite uzrok, sačekajte sledeći fetch feed-a, i proizvod se automatski ponovo proverava."
                }
              },
              {
                "@type": "Question",
                name: "Da li mogu koristiti isti feed za Google Shopping i Meta Shops?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ne direktno — Google Merchant Center i Meta Commerce Manager su odvojene platforme sa sopstvenim specifikacijama atributa, iako se dosta preklapaju. Mnogi feed alati i platforme (Shopify apps, WooCommerce pluginovi) mogu generisati oba feed-a iz istog izvora podataka na sajtu, ali svaki feed se posebno upload-uje na svoju platformu."
                }
              }
            ]
          })
        }}
      />

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koji format feed-a je najbolji — XML, TXT ili Google Sheets?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Nema univerzalno "najboljeg" formata — zavisi od veličine kataloga i platforme. XML je standard za plugin-ove i Content API integracije. Google Sheets je odličan za male kataloge (ispod 50-100 proizvoda) bez developera. Bitnije od formata je da se redovno i tačno ažurira.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko često treba da ažuriram product feed?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Google preporučuje minimum jednom dnevno ažuriranje celog feed-a, a za availability idealno u realnom vremenu ili nekoliko puta dnevno. Podesite automatski scheduled fetch na dnevni ciklus kao apsolutni minimum.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li title proizvoda utiče na cenu klika (CPC)?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Indirektno da. Precizan title poboljšava relevantnost matching-a, što utiče na kvalitet saobraćaja. Loš title smanjuje šansu da se proizvod uopšte prikaže za prave pretrage, što efektivno povećava trošak po konverziji.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta su custom labels i da li su obavezni?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Custom labels (custom_label_0 do custom_label_4) su pet slobodnih polja za segmentaciju proizvoda — po marži, sezoni, bestseller statusu. Nisu obavezni, ali su ključan alat za precizniji bidding po segmentu kataloga.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako da popravim disapproved proizvode u feed-u?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Prvi korak je Merchant Center Diagnostics (Products → Diagnostics) — tamo Google navodi tačan razlog disapproval-a za svaki proizvod. Najčešći uzroci: mismatch cene, nedostajući GTIN, promotivni tekst u title-u, ili slike sa watermark-om.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li mogu koristiti isti feed za Google Shopping i Meta Shops?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Ne direktno — to su odvojene platforme sa sopstvenim specifikacijama, iako se dosta preklapaju. Mnogi feed alati mogu generisati oba feed-a iz istog izvora podataka na sajtu, ali se svaki posebno upload-uje.
          </div>
        </details>
      </div>

      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-srbija-2026" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Dolazi u Srbiju — Kompletan Vodič</p>
          <p className="text-xs text-gray-500 mb-0">Datum launch-a, Ex-Yu tržišta, 15-korak checklist, troškovi</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "merchant-center-srbija-setup" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Merchant Center za Srbiju — Setup Vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kreiranje naloga, verifikacija, povezivanje sa Google Ads</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-za-ecommerce-srbija-2026" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads za eCommerce u Srbiji</p>
          <p className="text-xs text-gray-500 mb-0">Kompletan vodič za srpski eCommerce, benchmarks i taktike</p>
        </Link>
      </div>
    </>
  );
}
