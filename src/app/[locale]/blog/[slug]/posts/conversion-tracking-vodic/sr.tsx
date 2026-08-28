import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function ConversionTrackingVodicPost() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Bez pouzdanog conversion tracking-a, Google Ads kampanje rade naslepo. Algoritmi optimizuju ka pogrešnim signalima, budžet se troši bez jasnog ROI-a, a vi donosite odluke na osnovu netačnih podataka. Ovaj vodič pokazuje kako pravilno postaviti GTM, GA4 i Google Ads tagove, izbeći najčešće greške i koristiti Enhanced Conversions za maksimalnu preciznost.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Tipa konverzija</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">GTM+GA4</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Kompletna postavka</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">40%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Naloga ima greške</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Vrednost bez tracking-a</p>
          </div>
        </div>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Brzi odgovor
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Šta je conversion tracking?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          <strong><GlossaryLink slug="conversion">Conversion tracking</GlossaryLink></strong> je sistem praćenja koji beleži šta korisnik uradi nakon klika na oglas - kupovinu, poziv, popunjenu formu. Postavlja se preko <strong><GlossaryLink slug="gtm">GTM-a</GlossaryLink>, <GlossaryLink slug="ga4">GA4</GlossaryLink> i Google Ads tagova</strong> i predstavlja osnovu na kojoj Smart Bidding algoritmi optimizuju kampanje. Bez tačnog tracking-a, oko 40% naloga optimizuje ka pogrešnim signalima i troši budžet naslepo.
        </p>
      </div>

      <p>
        Svake nedelje vidim istu situaciju. Firma troši €2,000-5,000 mesečno na Google Ads. Kampanje su aktivne, klikova ima, ali rezultata nema ili su nepouzdani. Kada pogledam nalog, problem je skoro uvek isti - conversion tracking ne radi kako treba.
      </p>
      <p>
        Moje iskustvo pokazuje da je loš tracking tihi ubica Google Ads performansi. Bez pouzdanih podataka o konverzijama ne znate šta funkcioniše, algoritmi optimizuju ka pogrešnim signalima i donosite odluke na osnovu lažnih podataka.
      </p>
      <p>
        U ovom vodiču pokrivam sve što vam treba da postavite precizno praćenje konverzija: osnovni GTM setup, Consent Mode v2 za EEA i UK saobraćaj, Google Ads conversion actions i Enhanced Conversions. Takođe ćete naučiti kako da otkrijete i ispravite najčešće greške koje koštaju vaš budžet.
      </p>

      <hr />
      {/* ── Sadržaj ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#zasto-je-conversion-tracking-temelj-google-ads-a" className="block py-1 text-base text-gray-700 hover:text-primary underline">Zašto je conversion tracking temelj Google Ads-a</a></li>
          <li><a href="#tipovi-konverzija-koje-treba-pratiti" className="block py-1 text-base text-gray-700 hover:text-primary underline">Tipovi konverzija koje treba pratiti</a></li>
          <li><a href="#alati-za-conversion-tracking" className="block py-1 text-base text-gray-700 hover:text-primary underline">Alati za conversion tracking</a></li>
          <li><a href="#consent-mode-v2" className="block py-1 text-base text-gray-700 hover:text-primary underline">Consent Mode v2: obavezan pre svih tagova (EEA/UK)</a></li>
          <li><a href="#korak-po-korak-postavljanje-tracking-a" className="block py-1 text-base text-gray-700 hover:text-primary underline">Korak po korak - postavljanje tracking-a</a></li>
          <li><a href="#conversion-tracking-za-ecommerce" className="block py-1 text-base text-gray-700 hover:text-primary underline">Conversion tracking za eCommerce</a></li>
          <li><a href="#conversion-tracking-za-lead-generation" className="block py-1 text-base text-gray-700 hover:text-primary underline">Conversion tracking za Lead Generation</a></li>
          <li><a href="#najcesce-greske-u-conversion-tracking-u" className="block py-1 text-base text-gray-700 hover:text-primary underline">Najčešće greške u conversion tracking-u</a></li>
          <li><a href="#kako-proveriti-da-li-tracking-radi-ispravno" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kako proveriti da li tracking radi ispravno</a></li>
          <li><a href="#cesto-postavljana-pitanja" className="block py-1 text-base text-gray-700 hover:text-primary underline">Često postavljana pitanja</a></li>
          <li><a href="#najcesca-pitanja-o-conversion-tracking-u" className="block py-1 text-base text-gray-700 hover:text-primary underline">Najčešća pitanja o conversion tracking-u</a></li>
        </ol>
      </nav>



      <h2 id="zasto-je-conversion-tracking-temelj-google-ads-a">Zašto je conversion tracking temelj Google Ads-a</h2>
      <p>
        Preporučujem da na conversion tracking gledate kao na nervni sistem vaših kampanja. Bez njega, algoritmi ne znaju šta je dobar signal, a vi gubite kontrolu nad budžetom.
      </p>

      <h3>Algoritmi zavise od vaših podataka</h3>
      <p>
        Google Ads Smart Bidding (Target CPA, Target ROAS, Maximize Conversions) koristi machine learning da optimizuje ponude u realnom vremenu. Ali ML je dobar koliko i podaci koje mu date.
      </p>
      <p>
        Sa lošim tracking-om, algoritam uči pogrešne signale - biduje previše za loš saobraćaj, biduje premalo za dobar saobraćaj i budžet odlazi u vetar. Sa dobrim tracking-om, algoritam razume šta je prava konverzija, biduje agresivnije kada su signali dobri i štedi budžet kada signali nisu perspektivni.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          "Kampanja bez pouzdanog conversion tracking-a je kao auto bez instrumenata - vozite naslepo i ne znate koliko brzo idete ili koliko goriva trošite."
        </p>
      </div>

      <h3>Optimizacija bez podataka je nagađanje</h3>
      <p>
        Ako ne znate koja ključna reč, oglas ili audience donosi konverzije, kako ćete optimizovati? Moje iskustvo je da razlika između kampanje sa tracking-om i bez njega liči na ovo:
      </p>
      <p>
        <strong>Bez tracking-a:</strong> "Mislim da ova kampanja radi dobro."
      </p>
      <p>
        <strong>Sa tracking-om:</strong> "Ova kampanja donosi 47 konverzija po €12.50, a ova 3 konverzije po €180. Preusmeravamo budžet."
      </p>

      <hr />

      <h2 id="tipovi-konverzija-koje-treba-pratiti">Tipovi konverzija koje treba pratiti</h2>
      <p>
        Preporučujem da ne pratite samo krajnji cilj (kupovinu ili lead), već i korake koji vode ka njemu. Evo koje tipove konverzija treba postaviti za različite tipove biznisa.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Primary</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Primarne konverzije</h3>
          <p className="text-base text-gray-600 mb-0">
            Krajnji cilj kampanje - kupovina, lead, poziv, registracija. Koriste se za bid optimization.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Secondary</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Sekundarne konverzije</h3>
          <p className="text-base text-gray-600 mb-0">
            Koraci prema cilju - add to cart, pricing page visit, preuzimanje kataloga. Koriste se za observation.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Micro</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Micro konverzije</h3>
          <p className="text-base text-gray-600 mb-0">
            Engagement signali - scroll depth, video view, time on site. Pomažu algoritmu kada je volumen nizak.
          </p>
        </div>
      </div>

      <h3>Primeri konverzija po tipu biznisa</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Tip biznisa</th>
              <th className="py-3 px-3 font-heading font-semibold">Primary</th>
              <th className="py-3 px-3 font-heading font-semibold">Secondary</th>
              <th className="py-3 px-3 font-heading font-semibold">Micro</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">eCommerce</td>
              <td className="py-3 px-3">Purchase</td>
              <td className="py-3 px-3">Add to cart, Begin checkout</td>
              <td className="py-3 px-3">Product view</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">B2B Lead Gen</td>
              <td className="py-3 px-3">Form submission, Demo request</td>
              <td className="py-3 px-3">Pricing page, Case study download</td>
              <td className="py-3 px-3">Time on site 2min+</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Lokalni biznis</td>
              <td className="py-3 px-3">Phone call, Directions click</td>
              <td className="py-3 px-3">Contact page visit</td>
              <td className="py-3 px-3">Store locator use</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">SaaS</td>
              <td className="py-3 px-3">Trial sign-up, Paid conversion</td>
              <td className="py-3 px-3">Features page, Video view</td>
              <td className="py-3 px-3">Pricing calculator use</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Pravilo 3 nivoa</p>
        <p className="text-blue-800 text-base mb-0">
          Preporučujem da postavite sva tri nivoa konverzija. Primary za optimizaciju, Secondary za observation i analizu, Micro za signale kada je volumen nizak. Ovo daje algoritmu kompletniju sliku korisničkog ponašanja.
        </p>
      </div>

      <hr />

      <h2 id="alati-za-conversion-tracking">Alati za conversion tracking</h2>
      <p>
        Postoje tri glavna načina da pratite konverzije u Google Ads-u. Svaki ima svoje prednosti i kada ga koristiti.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Preporučeno</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Google Tag Manager</h3>
          <p className="text-base text-gray-600 mb-0">
            Centralizovano upravljanje svim tag-ovima. Fleksibilno, lako za testiranje i održavanje. Moj prvi izbor za sve osim najjednostavnijih setup-a.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Analytics</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">GA4 Import</h3>
          <p className="text-base text-gray-600 mb-0">
            Koristi GA4 events kao konverzije. Dobar za unified reporting, ali attribution može biti drugačija od native Google Ads tracking-a.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Direktno</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Google Ads Tag</h3>
          <p className="text-base text-gray-600 mb-0">
            Direktno postavljanje tag-a kroz Google Ads interface. Jednostavno za one-page setup, ali manje fleksibilno za kompleksnije scenario.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Napredni</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Enhanced Conversions</h3>
          <p className="text-base text-gray-600 mb-0">
            Šalje hashed first-party podatke (email, telefon) da poboljša <GlossaryLink slug="attribution-model">attribution</GlossaryLink> uprkos cookie restrictions. Preporučujem za sve kampanje sa budžetom €1,000+.
          </p>
        </div>
      </div>

      <hr />

      <h2 id="consent-mode-v2">Consent Mode v2: obavezan pre svih tagova (EEA/UK)</h2>
      <p>
        Ovo je korak koji se najčešće preskoči, a bez njega ostatak postavke ne radi kako mislite. Od marta 2024. Google traži Consent Mode v2 za sav saobraćaj iz EEA i Ujedinjenog Kraljevstva. Ako oglašavate na tim tržištima, a consent signali ne stižu, Google Ads gubi conversion modeling, remarketing liste prestaju da se pune, a Enhanced Conversions ne rade jer nemaju dozvolu da pošalju korisničke podatke.
      </p>
      <p>
        Consent Mode je sloj koji Googleovim tagovima govori šta korisnik jeste, a šta nije dozvolio. Tag se i dalje izvršava, ali se ponaša drugačije u zavisnosti od stanja pristanka. Signale postavlja vaš CMP (consent management platform), a tagovi ih čitaju.
      </p>

      <h3>Četiri signala koja morate slati</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Signal</th>
              <th className="py-3 px-3 font-heading font-semibold">Šta kontroliše</th>
              <th className="py-3 px-3 font-heading font-semibold">Šta pada ako je denied</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs">ad_storage</td>
              <td className="py-3 px-3">Kolačići za oglase (klik podaci, conversion cookie)</td>
              <td className="py-3 px-3">Klik se ne veže za konverziju, ostaje samo modelovana procena</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs">ad_user_data</td>
              <td className="py-3 px-3">Slanje korisničkih podataka Googleu za oglasne svrhe</td>
              <td className="py-3 px-3">Enhanced Conversions ne rade, nema hash-ovanog email-a ni telefona</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-mono text-xs">ad_personalization</td>
              <td className="py-3 px-3">Personalizovano oglašavanje i remarketing publike</td>
              <td className="py-3 px-3">Korisnik ne ulazi u remarketing liste</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-mono text-xs">analytics_storage</td>
              <td className="py-3 px-3">GA4 kolačići i merenje</td>
              <td className="py-3 px-3">GA4 ne postavlja identifikator, sesije se ne spajaju</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Basic vs Advanced consent mode</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Basic</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Tagovi se ne učitavaju pre pristanka</h3>
          <p className="text-base text-gray-600 mb-0">
            Google tagovi se blokiraju dok korisnik ne klikne prihvatam. Ako odbije, Google ne dobija baš ništa, pa nema ni osnove za modeliranje. Jednostavnije za pravnu odbranu, ali gubite najveći deo podataka o odbijenima.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Advanced</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Tagovi se učitavaju, ali ograničeno</h3>
          <p className="text-base text-gray-600 mb-0">
            Tagovi se učitavaju odmah i pre pristanka šalju samo cookieless ping bez identifikatora. Google na osnovu tih signala modelira konverzije korisnika koji su odbili. Praktična razlika: Advanced vraća deo izgubljenih konverzija kroz modeling, Basic ne.
          </p>
        </div>
      </div>
      <p>
        Za većinu oglašivača koje vodim Advanced ima više smisla, pod uslovom da je CMP pravilno konfigurisan i da pravni tim to odobri. Izbor je poslovna i pravna odluka, ne tehnička.
      </p>

      <h3>Redosled je ceo trik</h3>
      <p>
        CMP i consent default moraju da se izvrše pre bilo kog conversion ili analytics tag-a. U GTM-u to znači: CMP template na Consent Initialization - All Pages trigger-u, default stanje denied za EEA i UK, pa tek onda update na korisnikov izbor. Conversion Linker, GA4 tag i Google Ads Conversion tag idu posle toga. Ako se conversion tag aktivira pre nego što consent stanje postoji, tag radi u pogrešnom režimu i podatak je izgubljen.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-red-900 mb-1">Šta konkretno gubite ako preskočite</p>
        <ul className="text-red-800 text-base mb-0">
          <li>Conversion modeling se gasi, pa u izveštajima vidite samo deo stvarnih konverzija</li>
          <li>Remarketing liste se ne pune i publike padaju ispod minimuma za prikazivanje</li>
          <li>Enhanced Conversions ne rade za EEA saobraćaj jer <code>ad_user_data</code> nije granted</li>
          <li>Smart Bidding uči na krnjem skupu podataka, pa su ponude lošije nego što bi bile</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Napomena za Srbiju</p>
        <p className="text-blue-800 text-base mb-0">
          Srbija nije u EEA, pa Google-ov zahtev za Consent Mode v2 ne pogađa nalog koji cilja samo domaće tržište. Ali čim u saobraćaju imate posetioce iz EU ili UK, za taj deo saobraćaja pravilo važi u punom obimu. Ako radite bilo kakav prekogranični saobraćaj, postavite Consent Mode odmah, ne kasnije. Nezavisno od Googlea, domaći Zakon o zaštiti podataka o ličnosti i dalje traži uređen pristanak za kolačiće.
        </p>
      </div>

      <hr />

      <h2 id="korak-po-korak-postavljanje-tracking-a">Korak po korak - postavljanje tracking-a</h2>
      <p>
        Ovo je postupak koji koristim za sve klijente. GTM + GA4 + Google Ads tag + Enhanced Conversions = kompletna postavka koja daje maksimalnu preciznost.
      </p>
      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Pre koraka 2-6</p>
        <p className="text-yellow-800 text-base mb-0">
          Ako imate saobraćaj iz EEA ili UK, CMP i consent default (Consent Mode v2) idu odmah posle koraka 1, pre svakog tag-a koji beleži konverzije. Detalji su u sekciji iznad.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Postavite Google Tag Manager container</strong> <span className="text-gray-500">- Kreirajte GTM account i container, instalirajte container snippet u &lt;head&gt; i &lt;body&gt; na svim stranicama sajta.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Dodajte Conversion Linker tag</strong> <span className="text-gray-500">- U GTM kreirajte tag tipa "Conversion Linker", trigger All Pages. Ovo je OBAVEZNO za cross-domain i cross-device tracking.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Povežite GA4 property</strong> <span className="text-gray-500">- Kreirajte GA4 property i instalirajte GA4 tag kroz GTM ili direktno. U GA4 označite događaje purchase i generate_lead kao key events. Tek kada ih uvezete u Google Ads, tamo postaju conversion actions.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Kreirajte Google Ads conversion action</strong> <span className="text-gray-500">- U Google Ads → Goals → Conversions → Summary → + New conversion action. Kopirajte Conversion ID i Conversion Label.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Postavite Google Ads Conversion tag u GTM</strong> <span className="text-gray-500">- Kreirajte tag tipa "Google Ads Conversion Tracking", unesite ID i Label, postavite trigger (npr. Page URL contains "thank-you" ili Form ID equals "contact-form").</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div>
              <strong>Uključite Enhanced Conversions</strong> <span className="text-gray-500">- U Google Ads → Goals → Conversions → Settings → Enhanced conversions → Turn on. Izaberite GTM metod i mapirajte user data (email, phone, address) kroz data layer. Za EEA i UK saobraćaj Enhanced Conversions rade samo kada je ad_user_data granted.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div>
              <strong>Testirajte u GTM Preview mode</strong> <span className="text-gray-500">- Kliknite Preview u GTM, prođite conversion flow na sajtu i proverite da li tagovi rade. Proverite i Google Tag Assistant Chrome extension.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
            <div>
              <strong>Publish i verifikacija</strong> <span className="text-gray-500">- Objavite GTM container, napravite test konverziju i proverite da li se pojavljuje u Google Ads (3-6 sati delay je normalno).</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-base mb-0">
          Conversion Linker tag je često zaboravljen korak, ali bez njega cross-domain i cross-device tracking ne funkcioniše pravilno. Uvek postavite ovaj tag na All Pages, posle consent postavke a pre bilo kog drugog conversion tag-a.
        </p>
      </div>

      <hr />

      <h2 id="conversion-tracking-za-ecommerce">Conversion tracking za eCommerce</h2>
      <p>
        Za eCommerce, moje iskustvo pokazuje da je tracking vrednosti transakcije ključan. Bez toga, Google ne zna razliku između kupovine od €10 i €500.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Purchase (Primary konverzija)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Najvažnija konverzija. Mora da šalje dynamic value (transaction_value), currency i transaction_id. Koristi se za bid optimization.
        </p>
        <ul className="text-sm">
          <li>Trigger: Purchase confirmation page (npr. /order-complete, /thank-you)</li>
          <li>Conversion value: Dynamic - povući iz data layer-a</li>
          <li>Count: Every (svaka porudžbina se računa)</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Add to Cart (Secondary konverzija)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Pokazuje intent. Preporučujem da postavite kao observation, ne za bidding. Pomaže algoritmu da nauči koje proizvode ljudi dodaju u korpu.
        </p>
        <ul className="text-sm">
          <li>Trigger: Add to Cart button click event</li>
          <li>Conversion value: Opcional (može biti fiksna vrednost ili product price)</li>
          <li>Postavka: Secondary action (ne ulazi u &quot;Conversions&quot; kolonu, služi za posmatranje)</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Begin Checkout (Secondary konverzija)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Korisnik je započeo checkout proces. Jak signal koji pokazuje kupovnu nameru. Koristim ga za remarketing audiences.
        </p>
        <ul className="text-sm">
          <li>Trigger: Checkout page load (npr. /checkout, /cart)</li>
          <li>Conversion value: Cart value (opcional)</li>
          <li>Postavka: Secondary action (ne ulazi u &quot;Conversions&quot; kolonu, služi za posmatranje)</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Pravilo praćenja vrednosti</p>
        <p className="text-base text-yellow-900 mb-0">
          Preporučujem da UVEK pratite transaction value za eCommerce. Bez toga, Target ROAS bidding ne funkcioniše i ne znate koliko novca svaka kampanja donosi. Dynamic conversion values su obavezni za profitabilnu optimizaciju.
        </p>
      </div>

      <hr />

      <h2 id="conversion-tracking-za-lead-generation">Conversion tracking za Lead Generation</h2>
      <p>
        Za lead gen kampanje, moje iskustvo je da nije dovoljno pratiti samo form submissions. Morati pratiti kvalitet lead-ova kroz offline conversion import.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Form Submission (Primary konverzija)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Osnovni lead event. Trigger je obično form submission ili thank-you page load. Ovo koristite za početnu optimizaciju.
        </p>
        <ul className="text-sm">
          <li>Trigger: Form submission event ili Page URL contains "thank-you"</li>
          <li>Conversion value: Fiksna vrednost (npr. prosečna vrednost lead-a)</li>
          <li>Count: One (jedan form submit = jedna konverzija, čak i ako korisnik pošalje više puta)</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Phone Call (Primary konverzija)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Za B2B i lokalne biznise, phone calls su često najvažnija konverzija. Google nudi call asset (raniji naziv: call extension) koji prati pozive iz oglasa.
        </p>
        <ul className="text-sm">
          <li>Setup: Google forwarding broj ili klik na dugme za poziv na sajtu</li>
          <li>Minimum call duration: 60+ sekundi (da odfiltrirate spam)</li>
          <li>Conversion value: Prosečna vrednost phone lead-a</li>
        </ul>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-3 mt-3">
          <p className="text-yellow-800 text-sm mb-0">
            Google forwarding broj nije dostupan u svim zemljama i Srbija nije na listi. Ako radite domaće tržište, praćenje poziva rešavate klikom na dugme za poziv kao konverzijom ili spoljnim call tracking alatom.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Offline Conversions (Kvalifikovani lead)</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Ovo je najvažniji korak za B2B. Importujete qualified leads ili closed deals iz CRM-a nazad u Google Ads. Bez toga, Google optimizuje ka volumenu, ne ka kvalitetu.
        </p>
        <ul className="text-sm">
          <li>Setup: Capture GCLID u CRM pri form submission</li>
          <li>Regular upload: Nedeljno ili mesečno (zavisno od sales cycle-a)</li>
          <li>Conversion value: Stvarna vrednost deala (ne prosek)</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Offline Conversion Import - Game Changer za B2B</p>
        <p className="text-blue-800 text-base mb-0">
          Preporučujem offline import svim B2B klijentima. Razlika je ogromna - Google uči koji tip lead-ova zapravo postaje klijent i optimizuje ka tome, ne samo ka volumenu form submissions. Očekujte 20-30% bolje CPA nakon nekoliko meseci učenja.
        </p>
      </div>

      <hr />

      <h2 id="najcesce-greske-u-conversion-tracking-u">Najčešće greške u conversion tracking-u</h2>
      <p>
        Tokom godina sam video stotine naloga i evo grešaka koje se najčešće ponavljaju. Svaka od njih košta budžet i performance.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #1</p>
        <p className="font-semibold mb-2">Conversion tag postavljen na sve stranice umesto samo confirmation page</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">
            <strong>Rešenje:</strong> Proverite trigger u GTM-u. Tag treba da se aktivira SAMO na thank-you stranici (npr. Page URL contains "/thank-you" ili "/order-complete"). Koristite GTM Preview mode da testirate.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #2</p>
        <p className="font-semibold mb-2">Duplo brojanje - Google Ads tag + GA4 import za istu konverziju</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">
            <strong>Rešenje:</strong> Koristite JEDNO ili DRUGO, ne oba. Ako uvozite konverzije iz GA4, deaktivirajte direktni Google Ads tag za tu istu akciju. Duplo brojanje ubija attribution preciznost.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #3</p>
        <p className="font-semibold mb-2">Conversion Linker tag nedostaje ili nije na All Pages</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">
            <strong>Rešenje:</strong> U GTM kreirajte tag tipa "Conversion Linker" i postavite trigger na All Pages. Ovo je prvi tag koji treba da se aktivira pre bilo kog drugog conversion tag-a. Bez njega, cross-domain tracking ne funkcioniše.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #4</p>
        <p className="font-semibold mb-2">Ne pratite vrednost konverzija (sve konverzije = "1")</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">
            <strong>Rešenje:</strong> Za eCommerce koristite dynamic conversion values - šaljite stvarnu transaction_value kroz data layer. Za lead gen, postavite fiksnu vrednost koja odgovara prosečnoj vrednosti lead-a. Bez vrednosti, Target ROAS ne radi.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #5</p>
        <p className="font-semibold mb-2">Trackujete samo purchase/lead, nijednu sekundarnu konverziju</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">
            <strong>Rešenje:</strong> Dodajte secondary i micro konverzije (add to cart, pricing page, video view) i postavite ih kao Secondary action, da ne ulaze u &quot;Conversions&quot; kolonu i ne vuku bidding. Ovo daje algoritmu više signala i pomaže kada je volumen nizak.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #6</p>
        <p className="font-semibold mb-2">Attribution model nije prilagođen tipu biznisa</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-base text-green-800 mb-0">
            <strong>Rešenje:</strong> Google je 2023. ugasio first-click, linear, time-decay i position-based modele, pa vam je izbor sveden na Last Click i Data-Driven. Za kratke sales cycle-e (impulse eCommerce) Last Click je i dalje upotrebljiv. Za B2B sa dugim cycle-om Data-Driven je jedina alternativa koja uzima u obzir ceo put do konverzije. Proverite u Google Ads → Goals → Measurement → Attribution.
          </p>
        </div>
      </div>

      <hr />

      <h2 id="kako-proveriti-da-li-tracking-radi-ispravno">Kako proveriti da li tracking radi ispravno</h2>
      <p>
        Postavljanje tracking-a je polovina posla. Druga polovina je verifikacija da sve radi kako treba. Evo postupka koji koristim za svaki nalog.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Google Tag Assistant Chrome Extension</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Instalirajte extension, prođite conversion flow na sajtu i proverite da li se tagovi aktiviraju na pravim stranicama. Proverite da li šalju conversion ID, label i vrednost.
        </p>
        <ul className="text-sm">
          <li>Tag Assistant: <a href="https://tagassistant.google.com/" className="underline" target="_blank" rel="noopener noreferrer">tagassistant.google.com</a></li>
          <li>Prođite ceo conversion flow od početne stranice do thank-you</li>
          <li>Proverite da li Conversion Linker tag radi na All Pages</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">GTM Preview Mode</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          U GTM interfejsu kliknite "Preview", otvorite sajt u novom tabu i prođite conversion flow. Preview mode prikazuje koje tagove se aktiviraju i koje podatke šalju.
        </p>
        <ul className="text-sm">
          <li>Proverite da li se tagovi aktiviraju samo na confirmation page</li>
          <li>Proverite da li se conversion value pravilno povlači iz data layer-a</li>
          <li>Proverite da li Enhanced Conversions tag šalje user data</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Google Ads Conversion Status</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          U Google Ads → Goals → Conversions → Summary pogledajte Status kolonu. Trebalo bi da piše "Recording conversions" sa zelenim checkmark-om.
        </p>
        <ul className="text-sm">
          <li>Ako piše "Unverified" - tag još nije aktiviran (napravite test konverziju)</li>
          <li>Ako piše "No recent conversions" - tag radi ali nema saobraćaja (OK za nove kampanje)</li>
          <li>Ako piše "Inactive" ili "Error" - tag nije pravilno postavljen</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Real-Time provera u GA4</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          U GA4 → Reports → Realtime pogledajte da li se events pojavljuju u realnom vremenu kada napravite test konverziju.
        </p>
        <ul className="text-sm">
          <li>Aktivirajte realtime view</li>
          <li>Napravite test konverziju (form submission ili purchase)</li>
          <li>Proverite da li se event pojavljuje u roku od nekoliko sekundi</li>
        </ul>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Cross-check sa backend podacima</h3>
        </div>
        <p className="text-base text-gray-600 mb-3">
          Uporedite broj konverzija u Google Ads sa stvarnim brojem porudžbina/lead-ova iz CRM-a ili eCommerce platforme. Razlika 10-20% je normalna, ali ako je veća - imaš problem sa tracking-om.
        </p>
        <ul className="text-sm">
          <li>Export konverzija iz Google Ads za prošlu nedelju</li>
          <li>Export porudžbina/lead-ova iz backend sistema za isti period</li>
          <li>Uporedite brojeve - ako je razlika &gt;30%, istražite uzrok</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-base mb-0">
          Konverzije se obično pojavljuju u Google Ads nakon 3-6 sati, ali može biti i do 24 sata. Nemojte paničiti ako test konverzija ne pokaže odmah - sačekajte nekoliko sati i proverite ponovo.
        </p>
      </div>

      <hr />

      <h2 id="cesto-postavljana-pitanja">Često postavljana pitanja</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko vremena treba da se konverzija pojavi u Google Ads?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Obično 3-6 sati za online konverzije. Može biti i do 24 sata u nekim slučajevima. Offline conversion import zavisi od frekvencije vašeg uploada (ja preporučujem nedeljno). Ako konverzija ne pokaže nakon 24 sata, proverite da li je tag pravilno postavljen kroz GTM Preview mode i Tag Assistant.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Zašto se broj konverzija u GA4 i Google Ads razlikuje?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Različiti atribucioni modeli, različiti conversion windows i različit način brojanja. Oba sistema danas koriste data-driven atribuciju, ali svaki nad svojim podacima i sa svojim window-om. GA4 je event-based i beleži svaki key event na datum kada se dogodio, dok Google Ads konverziju pripisuje datumu klika. Razlika od 10-20% je potpuno normalna i ne ukazuje na problem. Ako je razlika &gt;30%, proverite da li imate duplo brojanje.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li mi treba developer za postavljanje conversion tracking-a?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Za osnovni GTM setup - ne obavezno. Možete sami postaviti GTM container i basic conversion tagove ako pratite dokumentaciju. Za Enhanced Conversions (data layer push) i server-side tracking - verovatno da, jer zahteva JavaScript i backend integraciju. Ako nemate tehničko znanje, preporučujem da angažujete developera ili Google Ads konsultanta koji će postaviti sve pravilno.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta ako nemam thank-you stranicu?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Koristite event-based tracking umesto page load tracking-a. Trigger može biti form submission event, AJAX response success callback ili URL parameters (npr. ?submitted=true). U GTM možete postaviti trigger na Form Submission ili custom JavaScript event. Ako koristite platforme kao što su Webflow, WordPress ili Shopify, često postoje built-in opcije za tracking bez thank-you page-a.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko konverzija treba za Smart Bidding?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Google-ova preporuka je oko 30 konverzija u poslednjih 30 dana za Target CPA i oko 50 konverzija u 30 dana za Target ROAS. Iz moje prakse, rezultati se smiruju negde između 30 i 50 konverzija mesečno. Ispod toga algoritam nema dovoljno podataka i performanse mogu biti nepredvidive. Ako nemate dovoljno primarnih konverzija, možete privremeno dodati sekundarne akcije za posmatranje dok ne sakupite volumen.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta je Enhanced Conversions i da li mi treba?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
          Enhanced Conversions šalje hash-ovane first-party podatke (email, telefon, adresa) da poboljša attribution uprkos cookie restrictions i iOS privacy promenama. Preporučujem ga SVIM kampanjama sa budžetom €1,000+. Očekujte 5-15% više pripisanih konverzija nakon implementacije. Setup zahteva data layer push sa user data (email i telefon su minimum), što obično zahteva pomoć developera.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Potrebna vam je pomoć sa conversion tracking-om?
        </p>
        <p className="text-slate-300 text-base mb-5 max-w-xl mx-auto">
          Nudim kompletnu postavku conversion tracking-a - GTM, GA4, Google Ads tagove, Enhanced Conversions i offline import. Sve što vam treba da pratite prave rezultate i optimizujete ka profitabilnosti.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads upravljanje</p>
          <p className="text-xs text-gray-500 mb-0">Pravilno postavljanje tracking-a i optimizacija kampanja</p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">12 Najčešćih Google Ads Grešaka</p>
          <p className="text-xs text-gray-500 mb-0">Greške koje koštaju budžet i kako ih ispraviti.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing Vodič 2026</p>
          <p className="text-xs text-gray-500 mb-0">Kako da ponovo targetirate posetioce koji nisu konvertovali.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-shopping-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Vodič</p>
          <p className="text-xs text-gray-500 mb-0">Korak po korak setup za profitabilne Shopping kampanje.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Koliko Košta Google Ads</p>
          <p className="text-xs text-gray-500 mb-0">Realističan budžet i očekivanja za različite industrije.</p>
        </Link>
      </div>

      <hr />

      <h2 id="najcesca-pitanja-o-conversion-tracking-u">Najčešća pitanja o conversion tracking-u</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta je conversion tracking i zašto je važan?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Conversion tracking prati akcije korisnika nakon klika na oglas - kupovinu, poziv, popunjavanje forme. Bez njega, Google ne zna koje ključne reči i oglasi donose rezultate, pa ne može optimizovati kampanje. To je osnova svake uspešne kampanje.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Google Tag vs GTM - šta koristiti?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Google Tag Manager (GTM) je uvek preporučen jer omogućava fleksibilnost bez menjanja koda sajta. Google Tag (gtag.js) je direktan ali zahteva developersku pomoć za svaku promenu. Za većinu biznisa, GTM je bolji izbor.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta su Enhanced Conversions?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Enhanced Conversions šalju hash-ovane korisničke podatke (email, telefon) Googleu za bolji matching. Poboljšavaju tracking tačnost za 5-15% posebno na iOS uređajima. Implementacija je jednostavna preko GTM-a ili Google Tag-a.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko konverzija treba za Smart Bidding?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Google-ova preporuka je oko 30 konverzija u poslednjih 30 dana za Target CPA i oko 50 za Target ROAS. Iz moje prakse, stabilnost počinje oko 30-50 konverzija mesečno. Ispod toga algoritam nema dovoljno podataka i rezultati su nepredvidivi. U tom slučaju koristite Manual CPC ili Maximize Clicks.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Zašto se konverzije u Google Ads i GA4 ne poklapaju?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Za nove conversion actions Google Ads po default-u koristi data-driven atribuciju sa 30-dnevnim conversion window-om, a GA4 svoj data-driven model sa 90-dnevnim window-om. Razlikuje se i brojanje: Google Ads konverziju pripisuje datumu klika, GA4 je event-based i beleži svaki key event na datum događaja. Uvek uporedite iste periode i razumite razlike.
          </div>
        </details>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Jul 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}

