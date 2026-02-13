import { Link } from "@/i18n/navigation";

export default function ConversionTrackingVodicPost() {
  return (
    <>
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
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

      <p>
        Svake nedelje vidim istu situaciju. Firma troši €2,000-5,000 mesečno na Google Ads. Kampanje su aktivne, klikova ima, ali rezultata nema ili su nepouzdani. Kada pogledam nalog, problem je skoro uvek isti — conversion tracking ne radi kako treba.
      </p>
      <p>
        Moje iskustvo pokazuje da je loš tracking tihi ubica Google Ads performansi. Bez pouzdanih podataka o konverzijama ne znate šta funkcioniše, algoritmi optimizuju ka pogrešnim signalima i donosite odluke na osnovu lažnih podataka.
      </p>
      <p>
        U ovom vodiču pokrivam sve što vam treba da postavite precizno praćenje konverzija, od osnovnog GTM setup-a do naprednih tehnika kao što su Enhanced Conversions i server-side tracking. Takođe ćete naučiti kako da otkrijete i ispravite najčešće greške koje koštaju vaš budžet.
      </p>

      <hr />

      <h2>Zašto je conversion tracking temelj Google Ads-a</h2>
      <p>
        Preporučujem da na conversion tracking gledate kao na nervni sistem vaših kampanja. Bez njega, algoritmi ne znaju šta je dobar signal, a vi gubite kontrolu nad budžetom.
      </p>

      <h3>Algoritmi zavise od vaših podataka</h3>
      <p>
        Google Ads Smart Bidding (Target CPA, Target ROAS, Maximize Conversions) koristi machine learning da optimizuje ponude u realnom vremenu. Ali ML je dobar koliko i podaci koje mu date.
      </p>
      <p>
        Sa lošim tracking-om, algoritam uči pogrešne signale — biduje previše za loš saobraćaj, biduje premalo za dobar saobraćaj i budžet odlazi u vetar. Sa dobrim tracking-om, algoritam razume šta je prava konverzija, biduje agresivnije kada su signali dobri i štedi budžet kada signali nisu perspektivni.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          "Kampanja bez pouzdanog conversion tracking-a je kao auto bez instrumenata — vozite naslepo i ne znate koliko brzo idete ili koliko goriva trošite."
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

      <h2>Tipovi konverzija koje treba pratiti</h2>
      <p>
        Preporučujem da ne pratite samo krajnji cilj (kupovinu ili lead), već i korake koji vode ka njemu. Evo koje tipove konverzija treba postaviti za različite tipove biznisa.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Primary</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Primarne konverzije</h3>
          <p className="text-sm text-gray-600 mb-0">
            Krajnji cilj kampanje — kupovina, lead, poziv, registracija. Koriste se za bid optimization.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Secondary</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Sekundarne konverzije</h3>
          <p className="text-sm text-gray-600 mb-0">
            Koraci prema cilju — add to cart, pricing page visit, preuzimanje kataloga. Koriste se za observation.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Micro</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Micro konverzije</h3>
          <p className="text-sm text-gray-600 mb-0">
            Engagement signali — scroll depth, video view, time on site. Pomažu algoritmu kada je volumen nizak.
          </p>
        </div>
      </div>

      <h3>Primeri konverzija po tipu biznisa</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Tip biznisa</th>
              <th className="py-3 px-4 font-heading font-semibold">Primary</th>
              <th className="py-3 px-4 font-heading font-semibold">Secondary</th>
              <th className="py-3 px-4 font-heading font-semibold">Micro</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce</td>
              <td className="py-3 px-4">Purchase</td>
              <td className="py-3 px-4">Add to cart, Begin checkout</td>
              <td className="py-3 px-4">Product view</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">B2B Lead Gen</td>
              <td className="py-3 px-4">Form submission, Demo request</td>
              <td className="py-3 px-4">Pricing page, Case study download</td>
              <td className="py-3 px-4">Time on site 2min+</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Lokalni biznis</td>
              <td className="py-3 px-4">Phone call, Directions click</td>
              <td className="py-3 px-4">Contact page visit</td>
              <td className="py-3 px-4">Store locator use</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">SaaS</td>
              <td className="py-3 px-4">Trial sign-up, Paid conversion</td>
              <td className="py-3 px-4">Features page, Video view</td>
              <td className="py-3 px-4">Pricing calculator use</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Pravilo 3 nivoa</p>
        <p className="text-blue-800 text-sm mb-0">
          Preporučujem da postavite sva tri nivoa konverzija. Primary za optimizaciju, Secondary za observation i analizu, Micro za signale kada je volumen nizak. Ovo daje algoritmu kompletniju sliku korisničkog ponašanja.
        </p>
      </div>

      <hr />

      <h2>Alati za conversion tracking</h2>
      <p>
        Postoje tri glavna načina da pratite konverzije u Google Ads-u. Svaki ima svoje prednosti i kada ga koristiti.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Preporučeno</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Google Tag Manager</h3>
          <p className="text-sm text-gray-600 mb-0">
            Centralizovano upravljanje svim tag-ovima. Fleksibilno, lako za testiranje i održavanje. Moj prvi izbor za sve osim najjednostavnijih setup-a.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Analytics</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">GA4 Import</h3>
          <p className="text-sm text-gray-600 mb-0">
            Koristi GA4 events kao konverzije. Dobar za unified reporting, ali attribution može biti drugačija od native Google Ads tracking-a.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Direktno</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Google Ads Tag</h3>
          <p className="text-sm text-gray-600 mb-0">
            Direktno postavljanje tag-a kroz Google Ads interface. Jednostavno za one-page setup, ali manje fleksibilno za kompleksnije scenario.
          </p>
        </div>
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Napredni</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Enhanced Conversions</h3>
          <p className="text-sm text-gray-600 mb-0">
            Šalje hashed first-party podatke (email, telefon) da poboljša attribution uprkos cookie restrictions. Preporučujem za sve kampanje sa budžetom €1,000+.
          </p>
        </div>
      </div>

      <hr />

      <h2>Korak po korak — postavljanje tracking-a</h2>
      <p>
        Ovo je postupak koji koristim za sve klijente. GTM + GA4 + Google Ads tag + Enhanced Conversions = kompletna postavka koja daje maksimalnu preciznost.
      </p>

      <div className="bg-gray-50 border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Postavite Google Tag Manager container</strong> <span className="text-gray-500">— Kreirajte GTM account i container, instalirajte container snippet u &lt;head&gt; i &lt;body&gt; na svim stranicama sajta.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Dodajte Conversion Linker tag</strong> <span className="text-gray-500">— U GTM kreirajte tag tipa "Conversion Linker", trigger All Pages. Ovo je OBAVEZNO za cross-domain i cross-device tracking.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Povežite GA4 property</strong> <span className="text-gray-500">— Kreirajte GA4 property i instalirajte GA4 tag kroz GTM ili direktno. Obeležite key events (purchase, generate_lead) kao conversions.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div>
              <strong>Kreirajte Google Ads conversion action</strong> <span className="text-gray-500">— U Google Ads → Tools → Conversions → + New conversion. Kopirajte Conversion ID i Conversion Label.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div>
              <strong>Postavite Google Ads Conversion tag u GTM</strong> <span className="text-gray-500">— Kreirajte tag tipa "Google Ads Conversion Tracking", unesite ID i Label, postavite trigger (npr. Page URL contains "thank-you" ili Form ID equals "contact-form").</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div>
              <strong>Uključite Enhanced Conversions</strong> <span className="text-gray-500">— U Google Ads → Conversions → Settings → Enhanced conversions → Turn on. Izaberite GTM metod i mapirajte user data (email, phone, address) kroz data layer.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div>
              <strong>Testirajte u GTM Preview mode</strong> <span className="text-gray-500">— Kliknite Preview u GTM, prođite conversion flow na sajtu i proverite da li tagovi rade. Proverite i Google Tag Assistant Chrome extension.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
            <div>
              <strong>Publish i verifikacija</strong> <span className="text-gray-500">— Objavite GTM container, napravite test konverziju i proverite da li se pojavljuje u Google Ads (3-6 sati delay je normalno).</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Conversion Linker tag je često zaboravljen korak, ali bez njega cross-domain i cross-device tracking ne funkcioniše pravilno. Uvek postavite ovaj tag na All Pages pre bilo kog drugog conversion tag-a.
        </p>
      </div>

      <hr />

      <h2>Conversion tracking za eCommerce</h2>
      <p>
        Za eCommerce, moje iskustvo pokazuje da je tracking vrednosti transakcije ključan. Bez toga, Google ne zna razliku između kupovine od €10 i €500.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Purchase (Primary konverzija)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Najvažnija konverzija. Mora da šalje dynamic value (transaction_value), currency i transaction_id. Koristi se za bid optimization.
        </p>
        <ul className="text-sm">
          <li>Trigger: Purchase confirmation page (npr. /order-complete, /thank-you)</li>
          <li>Conversion value: Dynamic — povući iz data layer-a</li>
          <li>Count: Every (svaka porudžbina se računa)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Add to Cart (Secondary konverzija)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Pokazuje intent. Preporučujem da postavite kao observation, ne za bidding. Pomaže algoritmu da nauči koje proizvode ljudi dodaju u korpu.
        </p>
        <ul className="text-sm">
          <li>Trigger: Add to Cart button click event</li>
          <li>Conversion value: Opcional (može biti fiksna vrednost ili product price)</li>
          <li>Include in Conversions: NO (observation only)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Begin Checkout (Secondary konverzija)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Korisnik je započeo checkout proces. Jak signal koji pokazuje kupovnu nameru. Koristim ga za remarketing audiences.
        </p>
        <ul className="text-sm">
          <li>Trigger: Checkout page load (npr. /checkout, /cart)</li>
          <li>Conversion value: Cart value (opcional)</li>
          <li>Include in Conversions: NO (observation only)</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Pravilo praćenja vrednosti</p>
        <p className="text-sm text-yellow-900 mb-0">
          Preporučujem da UVEK pratite transaction value za eCommerce. Bez toga, Target ROAS bidding ne funkcioniše i ne znate koliko novca svaka kampanja donosi. Dynamic conversion values su obavezni za profitabilnu optimizaciju.
        </p>
      </div>

      <hr />

      <h2>Conversion tracking za Lead Generation</h2>
      <p>
        Za lead gen kampanje, moje iskustvo je da nije dovoljno pratiti samo form submissions. Morati pratiti kvalitet lead-ova kroz offline conversion import.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Form Submission (Primary konverzija)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Osnovni lead event. Trigger je obično form submission ili thank-you page load. Ovo koristite za početnu optimizaciju.
        </p>
        <ul className="text-sm">
          <li>Trigger: Form submission event ili Page URL contains "thank-you"</li>
          <li>Conversion value: Fiksna vrednost (npr. prosečna vrednost lead-a)</li>
          <li>Count: One (jedan form submit = jedna konverzija, čak i ako korisnik pošalje više puta)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Phone Call (Primary konverzija)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Za B2B i lokalne biznise, phone calls su često najvažnija konverzija. Google nudi call tracking extension koji automatski prati pozive.
        </p>
        <ul className="text-sm">
          <li>Setup: Google forwarding number ili website call button click</li>
          <li>Minimum call duration: 60+ sekundi (da odfiltrirate spam)</li>
          <li>Conversion value: Prosečna vrednost phone lead-a</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Offline Conversions (Kvalifikovani lead)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Ovo je najvažniji korak za B2B. Importujete qualified leads ili closed deals iz CRM-a nazad u Google Ads. Bez toga, Google optimizuje ka volumenu, ne ka kvalitetu.
        </p>
        <ul className="text-sm">
          <li>Setup: Capture GCLID u CRM pri form submission</li>
          <li>Regular upload: Nedeljno ili mesečno (zavisno od sales cycle-a)</li>
          <li>Conversion value: Stvarna vrednost deala (ne prosek)</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Offline Conversion Import — Game Changer za B2B</p>
        <p className="text-blue-800 text-sm mb-0">
          Preporučujem offline import svim B2B klijentima. Razlika je ogromna — Google uči koji tip lead-ova zapravo postaje klijent i optimizuje ka tome, ne samo ka volumenu form submissions. Očekujte 20-30% bolje CPA nakon nekoliko meseci učenja.
        </p>
      </div>

      <hr />

      <h2>Najčešće greške u conversion tracking-u</h2>
      <p>
        Tokom godina sam video stotine naloga i evo grešaka koje se najčešće ponavljaju. Svaka od njih košta budžet i performance.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #1</p>
        <p className="font-semibold mb-2">Conversion tag postavljen na sve stranice umesto samo confirmation page</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Proverite trigger u GTM-u. Tag treba da se aktivira SAMO na thank-you stranici (npr. Page URL contains "/thank-you" ili "/order-complete"). Koristite GTM Preview mode da testirate.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #2</p>
        <p className="font-semibold mb-2">Duplo brojanje — Google Ads tag + GA4 import za istu konverziju</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Koristite JEDNO ili DRUGO, ne oba. Ako uvozite konverzije iz GA4, deaktivirajte direktni Google Ads tag za tu istu akciju. Duplo brojanje ubija attribution preciznost.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #3</p>
        <p className="font-semibold mb-2">Conversion Linker tag nedostaje ili nije na All Pages</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> U GTM kreirajte tag tipa "Conversion Linker" i postavite trigger na All Pages. Ovo je prvi tag koji treba da se aktivira pre bilo kog drugog conversion tag-a. Bez njega, cross-domain tracking ne funkcioniše.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #4</p>
        <p className="font-semibold mb-2">Ne pratite vrednost konverzija (sve konverzije = "1")</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Za eCommerce koristite dynamic conversion values — šaljite stvarnu transaction_value kroz data layer. Za lead gen, postavite fiksnu vrednost koja odgovara prosečnoj vrednosti lead-a. Bez vrednosti, Target ROAS ne radi.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #5</p>
        <p className="font-semibold mb-2">Trackujete samo purchase/lead, nijednu sekundarnu konverziju</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Dodajte secondary i micro konverzije (add to cart, pricing page, video view) i postavite ih kao observation (Include in Conversions = NO). Ovo daje algoritmu više signala i pomaže kada je volumen nizak.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #6</p>
        <p className="font-semibold mb-2">Attribution model nije prilagođen tipu biznisa</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0">
            <strong>Rešenje:</strong> Razmislite o customer journey. Za kratke sales cycle-e (impulse eCommerce), Last Click je OK. Za B2B sa dugim cycle-om, Data-Driven ili Position-Based daje realističniju sliku. Proverite u Google Ads → Conversions → Attribution models.
          </p>
        </div>
      </div>

      <hr />

      <h2>Kako proveriti da li tracking radi ispravno</h2>
      <p>
        Postavljanje tracking-a je polovina posla. Druga polovina je verifikacija da sve radi kako treba. Evo postupka koji koristim za svaki nalog.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Google Tag Assistant Chrome Extension</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Instalirajte extension, prođite conversion flow na sajtu i proverite da li se tagovi aktiviraju na pravim stranicama. Proverite da li šalju conversion ID, label i vrednost.
        </p>
        <ul className="text-sm">
          <li>Tag Assistant: <Link href="https://tagassistant.google.com/" className="underline">tagassistant.google.com</Link></li>
          <li>Prođite ceo conversion flow od početne stranice do thank-you</li>
          <li>Proverite da li Conversion Linker tag radi na All Pages</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">GTM Preview Mode</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          U GTM interfejsu kliknite "Preview", otvorite sajt u novom tabu i prođite conversion flow. Preview mode prikazuje koje tagove se aktiviraju i koje podatke šalju.
        </p>
        <ul className="text-sm">
          <li>Proverite da li se tagovi aktiviraju samo na confirmation page</li>
          <li>Proverite da li se conversion value pravilno povlači iz data layer-a</li>
          <li>Proverite da li Enhanced Conversions tag šalje user data</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Google Ads Conversion Status</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          U Google Ads → Tools → Conversions pogledajte Status kolonu. Trebalo bi da piše "Recording conversions" sa zelenim checkmark-om.
        </p>
        <ul className="text-sm">
          <li>Ako piše "Unverified" — tag još nije aktiviran (napravite test konverziju)</li>
          <li>Ako piše "No recent conversions" — tag radi ali nema saobraćaja (OK za nove kampanje)</li>
          <li>Ako piše "Inactive" ili "Error" — tag nije pravilno postavljen</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Real-Time provera u GA4</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          U GA4 → Reports → Realtime pogledajte da li se events pojavljuju u realnom vremenu kada napravite test konverziju.
        </p>
        <ul className="text-sm">
          <li>Aktivirajte realtime view</li>
          <li>Napravite test konverziju (form submission ili purchase)</li>
          <li>Proverite da li se event pojavljuje u roku od nekoliko sekundi</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Cross-check sa backend podacima</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Uporedite broj konverzija u Google Ads sa stvarnim brojem porudžbina/lead-ova iz CRM-a ili eCommerce platforme. Razlika 10-20% je normalna, ali ako je veća — imaš problem sa tracking-om.
        </p>
        <ul className="text-sm">
          <li>Export konverzija iz Google Ads za prošlu nedelju</li>
          <li>Export porudžbina/lead-ova iz backend sistema za isti period</li>
          <li>Uporedite brojeve — ako je razlika &gt;30%, istražite uzrok</li>
        </ul>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">
          Konverzije se obično pojavljuju u Google Ads nakon 3-6 sati, ali može biti i do 24 sata. Nemojte paničiti ako test konverzija ne pokaže odmah — sačekajte nekoliko sati i proverite ponovo.
        </p>
      </div>

      <hr />

      <h2>Često postavljana pitanja</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko vremena treba da se konverzija pojavi u Google Ads?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Obično 3-6 sati za online konverzije. Može biti i do 24 sata u nekim slučajevima. Offline conversion import zavisi od frekvencije vašeg uploada (ja preporučujem nedeljno). Ako konverzija ne pokaže nakon 24 sata, proverite da li je tag pravilno postavljen kroz GTM Preview mode i Tag Assistant.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Zašto se broj konverzija u GA4 i Google Ads razlikuje?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Različiti attribution modeli, različiti conversion windows i način brojanja. GA4 obično koristi data-driven attribution, dok Google Ads može koristiti last click. Takođe, GA4 broji sessione drugačije nego Google Ads. Razlika od 10-20% je potpuno normalna i ne ukazuje na problem. Ako je razlika &gt;30%, proverite da li imate duplo brojanje.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li mi treba developer za postavljanje conversion tracking-a?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Za osnovni GTM setup — ne obavezno. Možete sami postaviti GTM container i basic conversion tagove ako pratite dokumentaciju. Za Enhanced Conversions (data layer push) i server-side tracking — verovatno da, jer zahteva JavaScript i backend integraciju. Ako nemate tehničko znanje, preporučujem da angažujete developera ili Google Ads konsultanta koji će postaviti sve pravilno.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta ako nemam thank-you stranicu?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Koristite event-based tracking umesto page load tracking-a. Trigger može biti form submission event, AJAX response success callback ili URL parameters (npr. ?submitted=true). U GTM možete postaviti trigger na Form Submission ili custom JavaScript event. Ako koristite platforme kao što su Webflow, WordPress ili Shopify, često postoje built-in opcije za tracking bez thank-you page-a.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko konverzija treba za Smart Bidding?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Google zvanično preporučuje minimum 15 konverzija u poslednjih 30 dana za Target CPA i Target ROAS. Međutim, moje iskustvo je da su 30-50 konverzija mesečno idealne za stabilnije rezultate. Ispod 15, algoritam nema dovoljno podataka i performanse mogu biti nepredvidive. Ako nemate dovoljno primary konverzija, možete privremeno dodati secondary konverzije kao observation dok ne sakupite dovoljno volumena.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group my-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta je Enhanced Conversions i da li mi treba?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Enhanced Conversions šalje hash-ovane first-party podatke (email, telefon, adresa) da poboljša attribution uprkos cookie restrictions i iOS privacy promenama. Preporučujem ga SVIM kampanjama sa budžetom €1,000+. Očekujte 5-15% više pripisanih konverzija nakon implementacije. Setup zahteva data layer push sa user data (email i telefon su minimum), što obično zahteva pomoć developera.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Potrebna vam je pomoć sa conversion tracking-om?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Nudim kompletnu postavku conversion tracking-a — GTM, GA4, Google Ads tagove, Enhanced Conversions i offline import. Sve što vam treba da pratite prave rezultate i optimizujete ka profitabilnosti.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/blog/google-ads-greske" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">12 Najčešćih Google Ads Grešaka</p>
          <p className="text-xs text-gray-500 mb-0">Greške koje koštaju budžet i kako ih ispraviti.</p>
        </Link>
        <Link href="/blog/remarketing-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing Vodič 2026</p>
          <p className="text-xs text-gray-500 mb-0">Kako da ponovo targetirate posetioce koji nisu konvertovali.</p>
        </Link>
        <Link href="/blog/google-shopping-vodic" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Shopping Vodič</p>
          <p className="text-xs text-gray-500 mb-0">Korak po korak setup za profitabilne Shopping kampanje.</p>
        </Link>
        <Link href="/blog/koliko-kosta-google-ads" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Koliko Košta Google Ads</p>
          <p className="text-xs text-gray-500 mb-0">Realističan budžet i očekivanja za različite industrije.</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Februar 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}

