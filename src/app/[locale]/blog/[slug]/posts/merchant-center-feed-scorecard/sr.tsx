import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function MerchantCenterFeedScorecardSR() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Kratak sud</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Ocenio sam feed jednog skincare shopa, polje po polje - katalog od skoro hiljadu proizvoda. Osam polja je uredno. Dvadeset jedno je ispod 30 posto pokrivenosti. Ceo postupak ocenjivanja, tabele po sloju i redosled popravki su ispod, besplatno.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">33/100</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">ukupna ocena feeda</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">34</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">ocenjenih polja</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">8</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">polja preko 95% pokrivenosti</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">21</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">polje ispod 30% pokrivenosti</p>
          </div>
        </div>
      </div>

      <p>
        Poslednji audit koji sam radio počeo je od feeda, pre nego što je iko i pipnuo kampanje. Katalog od skoro hiljadu proizvoda u skincare kategoriji, a ja umesto da otvorim kampanje odem u <GlossaryLink slug="merchant-center">Merchant Center</GlossaryLink> i počnem da brojim koja su polja stvarno popunjena.
      </p>
      <p>
        Vlasnici prodavnica skoro nikad ne znaju da im feed nije menjan godinama. Neko ga je namestio kad je shop krenuo, radilo je, prošao je kroz odobrenje, i niko se otad nije vraćao da proveri šta je unutra. Kampanje se menjaju, budžeti rastu i padaju, a feed ostaje isti fajl iz dana kad je prodavnica imala pedeset proizvoda umesto hiljadu.
      </p>
      <p>
        Rezultat ovog konkretnog audita: ocena 33 od 100. Ne zato što feed ne radi - radi, proizvodi se odobravaju, oglasi se prikazuju. Nego zato što od 34 polja koja sam ocenjivao, samo osam je zaista popunjeno. Ostatak je ili delimično popunjen ili potpuno prazan, i to je razlika između feeda koji samo stoji tu i feeda koji Google-u stvarno kaže šta prodajete.
      </p>
      <p>
        Ako tek pravite feed od nule, ovaj tekst nije za vas - počnite od{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "product-feed-srpski-ecommerce" } }}>kako se product feed pravi</Link>{" "}
        ili od{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "merchant-center-srbija-setup" } }}>Merchant Center setapa</Link>. Ovaj tekst je za feed koji već radi - pokazuje kako da ga ocenite i, po redu prioriteta, popravite.
      </p>

      {/* TOC nav */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ul className="list-none pl-0 mb-0 space-y-0">
          <li><a href="#ocenjivanje" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kako se ocenjuje</a></li>
          <li><a href="#slojevi" className="block py-1 text-base text-gray-700 hover:text-primary underline">Tri sloja feeda</a></li>
          <li><a href="#obavezna" className="block py-1 text-base text-gray-700 hover:text-primary underline">Sloj 1: obavezna polja</a></li>
          <li><a href="#pojacivaci" className="block py-1 text-base text-gray-700 hover:text-primary underline">Sloj 2: pojačivači</a></li>
          <li><a href="#prednost" className="block py-1 text-base text-gray-700 hover:text-primary underline">Sloj 3: polja koja niko ne dira</a></li>
          <li><a href="#skincare" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta je specifično za skincare</a></li>
          <li><a href="#ocenite-svoj" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kako da ocenite svoj feed</a></li>
          <li><a href="#pet-koraka" className="block py-1 text-base text-gray-700 hover:text-primary underline">Pet stvari od kojih se kreće</a></li>
          <li><a href="#sta-ne-treba" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta ne treba raditi</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Najčešća pitanja</a></li>
          <li><a href="#zakljucak" className="block py-1 text-base text-gray-700 hover:text-primary underline">Zaključak</a></li>
        </ul>
      </nav>

      <hr />

      <h2 id="ocenjivanje">Kako se ocenjuje</h2>
      <p>
        Ovde nema procene, samo se broji. Za svako od 34 polja proveravam koliko proizvoda ga ima popunjeno i delim sa ukupnim brojem proizvoda u katalogu. Nema &quot;dobro popunjeno&quot; ili &quot;loše popunjeno&quot; - polje je ili prisutno ili nije, a kvalitet sadržaja unutar njega je posebna priča koja dolazi tek posle. Ukupna ocena je prosek ta 34 procenta. Sva polja i njihova pravila stoje u Google-ovoj <a href="https://support.google.com/merchants/answer/7052112" target="_blank" rel="noopener noreferrer">specifikaciji podataka o proizvodu</a>, pa lista nije moja procena nego njihov spisak.
      </p>
      <p>
        Merenje je namerno tupo, i baš zato mu se veruje. Ne zavisi od mog mišljenja o tome da li je naslov dobar, nego od toga da li polje uopšte postoji u fajlu. Isti postupak možete da ponovite sami nad svojim feedom za pola sata, bez ikakvog alata osim tabele, i dobićete broj koji niko ne može da obori sa &quot;pa meni deluje da je u redu&quot;.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-01-score-sr.png" alt="Ocena feeda 33 od 100, sa tri kartice: 34 ocenjena polja, 8 preko 95 procenata pokrivenosti, 21 ispod 30 procenata" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">34 ocenjena polja, osam iznad 95%, dvadeset jedno ispod 30% pokrivenosti - otuda 33.</figcaption>
      </figure>

      <hr />

      <h2 id="slojevi">Tri sloja feeda</h2>
      <p>
        Kad poređate sva 34 polja po pokrivenosti, ona se sama razdvoje u tri jasne grupe, i ta podela je korisnija od bilo koje liste &quot;najvažnijih polja&quot; koju ćete naći u dokumentaciji.
      </p>
      <p>
        Prvi sloj su <strong>obavezna polja</strong> - Google ih traži da bi proizvod uopšte prošao odobrenje, pa ih skoro svaka platforma za e-trgovinu popuni sama, iz osnovnog izvoza kataloga. Drugi sloj su <strong>pojačivači</strong> - polja koja nisu uslov za odobrenje, ali direktno menjaju kako se proizvod prikazuje, sa kim se poredi i koliko dobro Google razume šta je u pitanju. Treći sloj su <strong>polja koja niko ne dira</strong> - retko obavezna, retko na podrazumevanom izvozu, i zato skoro uvek prazna, bez obzira na veličinu naloga.
      </p>
      <p>
        Skoro svi diraju samo prvi sloj, jer je to jedino što platforma sama popuni i jedino što odobrenje uslovljava. Drugi sloj dira poneko, obično delimično. Treći sloj ne dira gotovo niko - a upravo tu stoji prostor koji niko nije ni dotakao.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-02-layers-sr.png" alt="Tri trake jedna ispod druge: obavezna polja u zelenoj boji sa visokom pokrivenošću, pojačivači u žutoj sa delimičnom pokrivenošću, polja na nuli u crvenoj sa gotovo nikakvom pokrivenošću" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Tri sloja, sortirana po pokrivenosti. Skoro svi staju posle prvog.</figcaption>
      </figure>

      <hr />

      <h2 id="obavezna">Sloj 1: obavezna polja</h2>
      <p>
        Ovih osam polja Google traži da bi proizvod uopšte ušao u feed. Bez njih nema odobrenja, pa ih platforma popunjava automatski iz osnovnih podataka o proizvodu - naziva, cene, slike, opisa. U ovom katalogu su, kao i u većini koje sam gledao, uredno popunjena. Time se niko ne hvali i oko toga se niko ne brine. To je minimum koji svaka prodavnica dobije sama od sebe.
      </p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Polje</th>
              <th className="py-3 px-3 font-heading font-semibold">Pokrivenost</th>
              <th className="py-3 px-3 font-heading font-semibold">Šta radi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">id</td>
              <td className="py-3 px-3 whitespace-nowrap">100%</td>
              <td className="py-3 px-3">jedinstveni identifikator artikla, spaja feed sa nalogom i sa konverzijama</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">title</td>
              <td className="py-3 px-3 whitespace-nowrap">100%</td>
              <td className="py-3 px-3">glavni tekstualni signal za pretragu i za prikaz u oglasu</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">description</td>
              <td className="py-3 px-3 whitespace-nowrap">99%</td>
              <td className="py-3 px-3">dodatni tekstualni kontekst, manje težine od naslova, ali se i dalje čita</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">link</td>
              <td className="py-3 px-3 whitespace-nowrap">100%</td>
              <td className="py-3 px-3">URL stranice proizvoda, mora da vodi na tačan artikal koji feed opisuje</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">image_link</td>
              <td className="py-3 px-3 whitespace-nowrap">99%</td>
              <td className="py-3 px-3">glavna slika, prvi vizuelni signal u oglasu. Google od 14. aprila 2026. upozorava na slike ispod 500x500px, a od 31. januara 2027. počinje da ih odbija, pa je bolje to proveriti sad nego one nedelje kad pravilo stupi na snagu. Uslovi za sliku su u <a href="https://support.google.com/merchants/answer/6324350" target="_blank" rel="noopener noreferrer">Google-ovoj dokumentaciji za image_link</a>.</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">availability</td>
              <td className="py-3 px-3 whitespace-nowrap">100%</td>
              <td className="py-3 px-3">da li je na stanju - direktno utiče na to da li se oglas uopšte prikazuje</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">price</td>
              <td className="py-3 px-3 whitespace-nowrap">99%</td>
              <td className="py-3 px-3">cena mora tačno da odgovara ceni na sajtu ili se proizvod odbija</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">brand</td>
              <td className="py-3 px-3 whitespace-nowrap">99%</td>
              <td className="py-3 px-3">proizvođač ili brend linije, osnova za grupisanje i za brand upite</td>
            </tr>
          </tbody>
        </table>
      </div>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-03-required-sr.png" alt="Tabela od osam obaveznih polja sa pokrivenošću: id, title, link i availability na 100 procenata; description, image_link, price i brand na 99 procenata. Red za image_link napominje upozorenje za slike ispod 500x500px koje počinje da važi 31. januara 2027. Red za brand napominje da je šest brendova upisano u više varijanti velikih i malih slova." width={1600} height={1100} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Osam obaveznih polja, sva između 99 i 100 procenata. Ocenu od 33 ne obara ovaj sloj.</figcaption>
      </figure>

      <hr />

      <h2 id="pojacivaci">Sloj 2: pojačivači</h2>
      <p>
        Ovaj sloj niko od Google-a ne mora da popuni. Feed prolazi odobrenje i bez njega. Ali ovde se odlučuje da li se proizvod uopšte pojavljuje u pravoj pretrazi, da li se poredi sa pravom konkurencijom i da li Google o njemu zna dovoljno da ga pokaže gde treba.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-2">Naslovi</h3>
      <p>
        Prosečan naslov u ovom katalogu ima 51 karakter, od 150 koliko Google dozvoljava. Osamdeset devet procenata proizvoda ima naslov kraći od 70 karaktera. Od 974 naslova, samo 77 uopšte pominje ml ili g - a to je jedinica po kojoj kupac u skincare kategoriji najčešće bira i poredi.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-04-title-length-sr.png" alt="Traka od 150 karaktera dozvoljenih za naslov, popunjena samo prvih 51, ostatak trake označen kao neiskorišćen prostor" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Prosečan naslov koristi trećinu dozvoljenog prostora. Ostatak niko ne uzima.</figcaption>
      </figure>
      <p>
        Formula koju koristim kad prepisujem naslove je fiksna, pet elemenata uvek istim redom:
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 my-6 text-center">
        <code className="font-mono text-sm md:text-base font-semibold">Brend + Naziv proizvoda + Ključna varijanta/osobina + Veličina/zapremina + Oblik pakovanja</code>
      </div>
      <p>
        Na izmišljenom, neutralnom proizvodu to izgleda ovako. Pre: <em>&quot;Hidratantni serum&quot;</em> - 17 karaktera, bez brenda, bez veličine, bez ičega po čemu bi ga Google mogao da uporedi sa konkurencijom. Posle: <em>&quot;Brend 1 Hidratantni serum hijaluronska kiselina 50 ml pumpica&quot;</em> - 61 karakter, i sada naslov nosi brend, tip proizvoda, aktivni sastojak kao glavnu osobinu, tačnu zapreminu i oblik pakovanja. Isti proizvod, ista cena, ali sada Google zna sa čim da ga poredi.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-05-title-formula-sr.png" alt="Formula za naslov proizvoda: brend plus naziv plus ključna osobina plus veličina plus oblik pakovanja, sa primerom pre i posle na izmišljenom proizvodu" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Pet elemenata, uvek istim redom. Formula ne zavisi od kategorije proizvoda.</figcaption>
      </figure>
      <p>
        Kraći naslov ne šteti samo pretrazi. Slabi i ono što <GlossaryLink slug="smart-bidding">Smart Bidding</GlossaryLink> ima da čita - manje teksta znači manje osnove za algoritam da poveže upit sa artiklom, pa se oslanja više na cenu i istoriju, a manje na to šta je proizvod stvarno.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-2">Identifikatori: gtin, mpn, identifier_exists</h3>
      <p>
        <code className="font-mono text-sm bg-gray-100 px-1.5 py-0.5 rounded">gtin</code> ima 80% pokrivenosti - 193 proizvoda u ovom katalogu nemaju barkod uopšte. <code className="font-mono text-sm bg-gray-100 px-1.5 py-0.5 rounded">mpn</code> ima 1%. <code className="font-mono text-sm bg-gray-100 px-1.5 py-0.5 rounded">identifier_exists</code> ima 0% - a to je polje koje postoji baš za ovu situaciju: kad proizvod stvarno nema nijedan zvanični identifikator (privatna etiketa, na primer), ovo polje to eksplicitno kaže Google-u, umesto da Google sam nagađa da li nedostaje greškom ili namerno.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-06-identifiers-sr.png" alt="Tri trake pokrivenosti za identifikatore proizvoda: gtin 80 procenata u žutoj boji, mpn 1 procenat u crvenoj, identifier_exists 0 procenata u crvenoj" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Kad gtin nedostaje, identifier_exists je jedini način da se to kaže namerno, ne slučajno.</figcaption>
      </figure>

      <h3 className="text-lg font-heading font-bold mt-8 mb-2">product_type</h3>
      <p>
        1% pokrivenosti. Ovo je vaša sopstvena kategorizacija, ne Google-ova - lanac kategorija koji sami definišete, po tome kako vi razmišljate o katalogu, ne po tome kako Google razmišlja o trgovini uopšte. Bez njega nemate strukturu po kojoj možete da gradite listing grupe ili asset grupe u <GlossaryLink slug="pmax">Performance Max</GlossaryLink> kampanjama po sopstvenoj logici - svedeni ste na ono što nudi google_product_category, a to je tuđa taksonomija, ne vaša.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-2">google_product_category</h3>
      <p>
        80% pokrivenosti zvuči solidno dok ne vidite od čega se sastoji. Od 974 proizvoda, 436 ih ima numerički ID kategorije, 342 tekstualnu putanju (na primer &quot;Health &amp; Beauty &gt; Personal Care &gt; Cosmetics&quot;), a 196 nema ništa. Google prihvata i jedan i drugi format, ali mešanje unutar istog kataloga znači da unos nije dosledan iz proizvoda u proizvod, a za tih 196 bez kategorije Google-ov sopstveni klasifikator nagađa bez ikakvog vašeg unosa.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-07-category-split-sr.png" alt="Podela vrednosti u polju google_product_category: 436 proizvoda sa numeričkim ID kategorije, 342 sa tekstualnom putanjom, 196 sa praznim poljem" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Dva formata u istom polju, plus petina kataloga bez ičega.</figcaption>
      </figure>

      <h3 className="text-lg font-heading font-bold mt-8 mb-2">item_group_id</h3>
      <p>
        50% pokrivenosti - polovina varijanti (različite zapremine, različite nijanse, različiti setovi istog proizvoda) Google-u izgleda kao nepovezani artikli. Posledica: varijante se čitaju kao nepovezani proizvodi, pa se podaci o učinku razbijaju po skoro istim šiframa umesto da se skupljaju na jednom mestu. Pravilo je jednostavno i stoji u <a href="https://support.google.com/merchants/answer/6324507" target="_blank" rel="noopener noreferrer">dokumentaciji za item_group_id</a>: sve varijante istog proizvoda dele istu vrednost.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-2">additional_image_link</h3>
      <p>
        70% pokrivenosti. Google dozvoljava do deset dodatnih slika po proizvodu, a za skincare je ovo prostor koji se retko iskoristi - tekstura proizvoda, ambalaža iz drugog ugla, proizvod u upotrebi. Trideset procenata kataloga ima samo glavnu sliku, što znači da se za trideset procenata proizvoda oglas oslanja na jedan jedini vizuelni utisak.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-2">sale_price</h3>
      <p>
        9% pokrivenosti. Kad ovo polje nije popunjeno, promocije su praktično nevidljive u oglasu - cena koju kupac vidi je puna cena, bez obzira na to što je na sajtu popust aktivan. Kad se popust ne vidi u samom oglasu, <GlossaryLink slug="roas">ROAS</GlossaryLink> za tu kampanju izgleda gori nego što promocija stvarno jeste, jer se prikaz i stvarna ponuda ne poklapaju.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-2">custom_label 0-4</h3>
      <p>
        30% pokrivenosti - tačno na granici. U ovih pet polja vi sami obeležavate šta hoćete, nezavisno od Google-ove kategorizacije: bestseler, marža, sezona, nivo zaliha, bilo šta po čemu želite da segmentišete ponude bez menjanja strukture kampanje.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-08-multipliers-sr.png" alt="Trake pokrivenosti za osam polja drugog sloja, rastuće: product_type i mpn na 1 procenat, sale_price na 9 procenata, custom_label na 30 procenata, item_group_id na 50 procenata, additional_image_link na 70 procenata, gtin i google_product_category na 80 procenata" width={1600} height={1000} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Ceo drugi sloj, sortiran rastuće. Nijedno polje ovde nije obavezno, i baš zato ih niko ne popunjava.</figcaption>
      </figure>

      <hr />

      <h2 id="prednost">Sloj 3: polja koja niko ne dira</h2>
      <p>
        Ovo je sedamnaest polja na potpunoj nuli: <code className="font-mono text-sm bg-gray-100 px-1 rounded">product_highlight</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">product_detail</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">short_title</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">video_link</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">color</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">size</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">material</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">age_group</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">gender</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">unit_pricing_measure</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">multipack</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">is_bundle</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">condition</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">shipping_weight</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">cost_of_goods_sold</code>, <code className="font-mono text-sm bg-gray-100 px-1 rounded">certification</code> i <code className="font-mono text-sm bg-gray-100 px-1 rounded">excluded_destination</code>.
      </p>
      <p>
        Baš zato što ih niko ne popunjava, ona su najvrednija u celom feedu. Većina platformi ih ne stavlja u standardni fajl koji sama pravi, pa ostaju prazna dok ih neko ručno ne doda. Nijedno od njih ova kategorija ne traži, i nijedno nije pravilo upozorenje. Kad ih vi popunite, ne branite se od kazne - dobijate prostor koji je kod većine kataloga koje sam gledao ostao prazan.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-09-zero-fields-sr.png" alt="Pet polja na nula procenata pokrivenosti sa objašnjenjem šta svako radi: product_highlight, product_detail, unit_pricing_measure, is_bundle i cost_of_goods_sold" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Pet polja na nuli. Ne loše popunjena. Nikad otvorena.</figcaption>
      </figure>

      <h3 className="text-lg font-heading font-bold mt-8 mb-2">product_highlight i product_detail</h3>
      <p>
        U ova dva polja idu kratke, uredno razdvojene stavke o proizvodu - Google ih ume da izvuče direktno u oglas kao bullet stavke, van naslova i opisa. Za skincare to je prirodan prostor za sastojke, tip kože kojem proizvod odgovara, konkretnu korist. Bez njih, sve što kupac zna o proizvodu mora da stane u naslov od 51 karaktera ili u opis koji retko ko čita do kraja.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-2">unit_pricing_measure</h3>
      <p>
        Kad ovo polje postoji, Google pored cene prikazuje i cenu po jedinici mere - po 100ml, po komadu. Bez njega, jeftiniji proizvod na polici nije nužno jeftiniji po 100ml, a kupac to nema kako da vidi u oglasu. U skincare, gde se isti sastojak prodaje u pakovanjima od 15ml do 200ml po potpuno različitim cenama, ovo polje je jedino što sprečava da premium proizvod deluje skuplje nego što jeste.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-10-unit-price-sr.png" alt="Dve kartice proizvoda jedna pored druge: manje pakovanje sa nižom cenom ali višom cenom po 100ml, i veće pakovanje sa višom cenom ali nižom cenom po 100ml" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Jeftinije na polici nije jeftinije po 100ml. Bez ovog polja, kupac to ne vidi.</figcaption>
      </figure>

      <h3 className="text-lg font-heading font-bold mt-8 mb-2">is_bundle i multipack</h3>
      <p>
        Ova dva polja rešavaju konkretan problem: bez njih, benchmark cenovne konkurentnosti tretira set od tri proizvoda kao jedan artikal, pa se poredi sa pojedinačnim proizvodom iste kategorije i ispada da je preskup. <code className="font-mono text-sm bg-gray-100 px-1 rounded">is_bundle</code> kaže da je artikal skup različitih proizvoda spakovanih zajedno, <code className="font-mono text-sm bg-gray-100 px-1 rounded">multipack</code> kaže da je više komada istog proizvoda u jednom pakovanju. Bez te dve oznake, oba slučaja izgledaju identično - kao jedan proizvod sa jednom cenom - i cena se poredi sa pogrešnom referentnom tačkom.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-11-bundle-sr.png" alt="Set od tri proizvoda upoređen sa jednim pojedinačnim proizvodom iste kategorije, sa precrtanim znakom jednakosti koji pokazuje da poređenje nije korektno" width={1600} height={900} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Set od tri proizvoda nije isto što i jedan proizvod. Bez oznake, Google to ne zna.</figcaption>
      </figure>

      <h3 className="text-lg font-heading font-bold mt-8 mb-2">cost_of_goods_sold</h3>
      <p>
        <code className="font-mono text-sm bg-gray-100 px-1 rounded">cost_of_goods_sold</code> je nabavna cena proizvoda, i to je ono što otvara izveštaj o marži u Merchant Center-u - podatak koji vam treba pre nego što uopšte možete da počnete da šaljete profit umesto prihoda kao vrednost konverzije. Bez njega ostaje vam samo <GlossaryLink slug="roas">ROAS</GlossaryLink>, prihod bez uvida u <GlossaryLink slug="cogs">maržu</GlossaryLink> - dva proizvoda sa istim prihodom mogu da imaju potpuno različitu maržu, a to se iz ROAS-a ne vidi. Kad je ovo polje popunjeno, dobijate <GlossaryLink slug="poas">POAS</GlossaryLink> - način da merite i vrednujete konverzije po profitu, ne po prometu, i da vidite razliku između proizvoda sa 70% marže i proizvoda sa 15% marže, umesto da ih posmatrate isto samo zato što donose istu cifru u kolonu &quot;prihod&quot;.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-2">short_title</h3>
      <p>
        Ovo polje se koristi u prikazu proizvoda i sličnim formatima gde pun naslov ne stane. Bez njega, Google sam skraćuje naslov, često usred reči ili usred imena proizvoda. Sa njim, vi odlučujete šta se seče, ne algoritam.
      </p>

      <h3 className="text-lg font-heading font-bold mt-8 mb-2">video_link</h3>
      <p>
        Ovo je novo polje - Google je najavio isporuku i proveru politike za njega od 30. juna 2026. Za ovaj katalog nije prioritet danas, ali vredi ga imati na radaru za sledeći ciklus, pre nego što postane deo standardnog očekivanja umesto novosti.
      </p>

      <hr />

      <h2 id="skincare">Šta je specifično za skincare</h2>
      <p>
        Ne vredi svako od 34 polja isto - neka nose mnogo više težine u skincare kategoriji nego u, recimo, nameštaju ili elektronici. Evo redosleda kojim bih ja krenuo, i zašto baš tim redom.
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Veličina/zapremina u naslovu</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Kupac u skincare bira po ml i g pre nego što bira po bilo čemu drugom. Kad samo 77 od 974 naslova to pominje, feed ne govori jezikom kojim kupac razmišlja o kupovini.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>product_detail</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Sastojci i problemi kože su tačno ono što kupci filtriraju i pitaju AI asistente kad biraju negu - bez ovog polja to postoji samo u opisu koji retko ko pročita do kraja.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>is_bundle i multipack</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Setovi za negu su čest format u ovoj kategoriji - rutina od tri koraka, poklon set. Bez ove oznake, svaki set se poredi sa pogrešnom referencom i izgleda preskupo.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>product_type po koraku rutine</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Čišćenje, serum, hidratacija, zaštita od sunca - sopstvena taksonomija po koraku rutine daje strukturu za kampanje koju Google-ova opšta kategorija ne može da ponudi.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>unit_pricing_measure</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Isti sastojak dolazi u pakovanjima od 15ml do 200ml po potpuno različitim cenama. Cena po 100ml je jedini pošten način da se premium linija poredi sa masovnom.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div>
              <strong>custom_label za bestselere i marže</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Poslednje na listi, ali i dalje ispred generičkih polja poput materijala, koje u skincare skoro ništa ne govori o proizvodu - boja je izuzetak samo tamo gde katalog nosi i šminku sa nijansama.</p>
            </div>
          </div>
        </div>
      </div>
      <p>
        Redosled nije nasumičan - kreće od onoga što kupac stvarno gleda kad bira (veličina, cena, format) ka onome što je korisno, ali sekundarno (sopstveno obeležavanje za interne potrebe licitiranja). Materijal ili pol kupca, standardna polja za odeću ili obuću, ovde jednostavno nemaju šta da rade. Boja je druga priča - za čist skincare nevažna, ali čim katalog nosi i šminku sa nijansama, postaje prava varijanta i filter po kome kupci biraju, pa je tamo popunite, a drugde preskočite. To je tema sledeće sekcije.
      </p>

      <hr />

      <h2 id="ocenite-svoj">Kako da ocenite svoj feed</h2>
      <p>
        Postupak traje oko pola sata i ne treba vam ništa osim tabele.
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Skinite feed</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Merchant Center → Products → Feeds → otvorite svoj primarni feed → Download. Izaberite format koji tabela ume da otvori (CSV ili TSV).</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Otvorite u tabeli</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Google Sheets ili Excel, svejedno. Svaka kolona je jedno polje, svaki red jedan proizvod.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Prebrojte po koloni</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Za svaku kolonu izbrojte koliko ćelija ima vrednost (COUNTA), podelite sa ukupnim brojem proizvoda. To vam je procenat pokrivenosti za to polje.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Usrednjite</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Prosek svih procenata je vaša ukupna ocena.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Sortirajte rastuće</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Polja sa najnižom pokrivenošću idu na vrh liste. Odatle krećete - ne od onoga što je najlakše popuniti, nego od onoga što najviše nedostaje. Da li polje uopšte važi za vašu kategoriju odlučuje šta popravljate prvo, ne šta ulazi u prosek.</p>
            </div>
          </div>
        </div>
      </div>
      <p>
        Rezultat ovog postupka nije lep broj za izveštaj. To je lista, sortirana, koja vam kaže tačno gde da počnete sledeći ponedeljak - ne osećaj, nego brojka koju ste sami izračunali iz sopstvenog fajla.
      </p>

      <hr />

      <h2 id="pet-koraka">Pet stvari od kojih se kreće</h2>
      <p>
        Od 34 polja, pet nosi najveći deo popravke ako se radi po redu. Ne zato što su ostala nevažna, nego zato što ovih pet dodiruje najviše proizvoda odjednom i najviše menja ono što Google o katalogu zna.
      </p>
      <figure className="my-8">
        <Image src="/blog/gmc-feed-scorecard/fig-12-five-steps-sr.png" alt="Pet popravki od kojih se kreće, numerisano, sa konkretnom akcijom uz svaku: naslovi, ujednačavanje brendova, product_type, google_product_category i oznake za setove" width={1600} height={1000} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-xs text-gray-500 mt-2 text-center">Pet popravki, istim redom kojim bih ih ja radio.</figcaption>
      </figure>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Naslovi</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Akcija: primenite formulu (Brend + Naziv + Osobina + Veličina + Pakovanje) prvo na top 20% proizvoda po prometu, ne na ceo katalog odjednom. Ostatak dolazi kasnije.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Ujednačavanje naziva brendova</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Akcija: napravite mapu &quot;kako se svaki brend piše&quot; i primenite je u izvoru feeda - u PIM-u ili CMS-u odakle se feed generiše, ne ručno u samom Merchant Centeru.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>product_type</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Akcija: definišite sopstvenu taksonomiju po koraku rutine i unesite je prvo za proizvode koji nose najveći deo prometa.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>google_product_category</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Akcija: standardizujte na numeričke ID-jeve - ne lome se kad Google preimenuje kategoriju, za razliku od tekstualne putanje - i popunite prazne redove.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Oznake za setove</strong>
              <p className="text-base text-gray-600 mt-1 mb-0">Akcija: obeležite is_bundle za svaki proizvod koji je fizički skup više različitih artikala, multipack za svaki proizvod koji je više komada istog artikla.</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="sta-ne-treba">Šta ne treba raditi</h2>
      <p>
        Isto koliko je važno znati šta da popravite, važno je znati i šta da pustite. Merchant Center prikazuje upozorenja za dosta polja koja za skincare kategoriju jednostavno nisu bitna, i lako je potrošiti popodne jureći nešto što ništa ne menja.
      </p>
      <p>
        <code className="font-mono text-sm bg-gray-100 px-1 rounded">material</code> je polje za tekstil i nameštaj - krema u tegli nema materijal u smislu u kom Google to pita. <code className="font-mono text-sm bg-gray-100 px-1 rounded">certification</code> se odnosi na formalne sertifikate koje treba prijaviti kroz posebnu strukturu, ne na to da proizvod &quot;jeste organski&quot; ili &quot;nije testiran na životinjama&quot; - to ide u opis i u product_highlight, ne u ovo polje. Energetske oznake su za uređaje. U kozmetici ih prosto nema. A <code className="font-mono text-sm bg-gray-100 px-1 rounded">shipping_weight</code> ima smisla samo kad se dostava naplaćuje po težini - ako je dostava fiksna cena bez obzira na porudžbinu, ovo polje ne menja ni prikaz ni cenu klika.
      </p>
      <p>
        Kad naiđete na upozorenje za neko od ovih polja, proverite da li se uopšte odnosi na vašu kategoriju pre nego što mu posvetite vreme. Pet stvari iznad menjaju rezultat. Ova ne menjaju ništa.
      </p>

      <hr />

      <h2 id="faq">Najčešća pitanja</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako da ocenim svoj feed?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Skinite feed iz Merchant Center-a (Products → Feeds → Download), otvorite ga u tabeli, za svaku kolonu izbrojte popunjeno naspram ukupnog broja proizvoda, pretvorite u procenat i usrednjite. Ceo postupak je opisan korak po korak u sekciji &quot;Kako da ocenite svoj feed&quot; iznad.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko karaktera sme naslov?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Google dozvoljava do 150 karaktera. Praktično se najviše čita i prikazuje u prvih 60 do 70, pa je tu fokus, ali ostatak prostora nije bez svrhe - u ovom katalogu prosečan naslov koristi samo 51 karakter, trećinu dozvoljenog.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta je GTIN i da li mi treba?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            GTIN je zvanični barkod broj proizvoda (EAN, UPC i slično), obično ga dodeljuje proizvođač. Ako vaš proizvod ima barkod, taj broj ide u ovo polje. Ako ga stvarno nema - privatna etiketa, ručno rađen proizvod - onda umesto da ga izmišljate, postavite identifier_exists na false i time eksplicitno kažete Google-u da nedostatak nije greška.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto mi se set poredi sa jednim proizvodom?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Bez is_bundle i multipack oznaka, benchmark cenovne konkurentnosti tretira artikal kao jedan proizvod, pa se poredi sa pojedinačnim komponentama i cena izgleda nesrazmerno visoka.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koja polja su obavezna?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            id, title, description, link, image_link, availability, price i brand. Ovih osam Google traži da bi proizvod uopšte prošao odobrenje, i skoro svaka platforma za e-trgovinu ih popunjava automatski.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li vredi popunjavati baš sve?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Ne. Cilj ocenjivanja nije 100 od 100, nego prepoznavanje koja polja stvarno menjaju nešto za vašu kategoriju. Materijal, na primer, u skincare nosi skoro nula vrednosti. Boja je druga priča - za čist skincare nevažna, ali čim se u katalogu nađe i šminka sa nijansama, vredi je popuniti tamo. Vreme uloženo u polja koja ne važe za vaš katalog je vreme koje niste uložili u naslove ili u oznake za setove.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko često treba ponovo oceniti feed?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Feed nije nešto što se namesti pa zaboravi. Svaka veća serija novih proizvoda menja pokrivenost, pa je ocenjivanje na svaka dva do tri meseca dovoljno da uhvatite pad pre nego što postane trend.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li je 33 od 100 loša ocena?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Tretirajte je kao početno merenje, ne kao ocenu u školskom smislu - ovu metodu još nisam primenio na dovoljno naloga da bih objavio poredbeni prosek. Važan je oblik: obavezna polja skoro puna, pojačivači na pola, treći sloj na nuli. Ako vaš sopstveni audit pokaže isti oblik, redosled popravki iz ovog teksta važi bez obzira na to koji broj vama izađe.
          </div>
        </details>
      </div>

      <hr />

      <h2 id="zakljucak">Zaključak</h2>
      <p>
        Ocena 33 od 100 ne znači da je ovaj feed pokvaren. Odobren je, proizvodi se prikazuju, kampanje rade. Znači da je feed napravljen jednom, davno, i da od tada niko nije proveravao šta u njemu nedostaje - a nedostaje mu tačno onaj deo koji Google-u govori kako da proizvod razume, poredi i prikaže.
      </p>
      <p>
        Ako iz ovog teksta ponesete jednu akciju, neka bude ova: skinite svoj feed danas i prebrojite title, product_type, google_product_category, item_group_id i is_bundle. Pet brojki, pola sata, i znaćete tačno gde stojite - crno na belo, iz sopstvenog fajla.
      </p>

      {/* CTA block */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Hoćete da ocenim vaš feed?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          Isti postupak koji sam upravo opisao, primenjen na vaš katalog - dijagnoza, ne obećanje. Pokažem vam tačno gde stojite i po čemu bih krenuo prvo.
        </p>
        <Link href="/usluge/google-shopping" className="btn-secondary inline-block">
          Pošaljite feed na proveru
        </Link>
      </div>

      <h2>Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "product-feed-srpski-ecommerce" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Product feed za srpski e-commerce</p>
          <p className="text-xs text-gray-500 mb-0">Kako se feed pravi od nule - preduslov pre nego što se bilo šta ocenjuje</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "merchant-center-srbija-setup" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Merchant Center setup za Srbiju</p>
          <p className="text-xs text-gray-500 mb-0">Povezivanje naloga i prvi feed - odavde krećete ako još nemate ništa</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako feed koji ste upravo popravili hrani kampanje koje se prave iznad njega</p>
        </Link>
      </div>
    </>
  );
}
