import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { CheckCircle, XCircle } from "lucide-react";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function DemandGenVodicPost() {
  return (
    <>
      <p>
        <GlossaryLink slug="demand-gen">Demand Gen</GlossaryLink> je naslednik Discovery kampanja. Ne targetira ljude koji nešto traže - targetira ljude koji skroluju. Oglas se pojavljuje u feedu, između sadržaja koji korisnik već gleda, i mora da izgleda kao deo tog sadržaja da bi uopšte dobio pažnju.
      </p>
      <p>
        Radim sa Demand Gen kampanjama na par naloga i stav mi je jasan: ovo je dobar alat za pravu situaciju, i loš izbor kad se koristi kao zamena za nešto što fali negde drugde. U ovom vodiču prolazim kroz to gde se Demand Gen prikazuje, šta je Google promenio u 2026, kome se isplati, kako meriti rezultat bez laganja sebi, i kako da postavite prvu kampanju.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">Demand Gen prikazuje vizuelno bogate oglase na YouTube-u (uključujući Shorts), Discover feedu i Gmail-u, ljudima koji još ne traže aktivno vaš proizvod. Ima smisla za eCommerce sa vizuelnim proizvodom i budžetom od otprilike 1.000 EUR mesečno naviše za taj kanal. Nema smisla kao zamena za Search kod malih lead-gen budžeta - Demand Gen je nadogradnja na temelj koji već radi, ne temelj sam po sebi.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">glavna plasmana</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">~1.000 EUR+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">mesečno, orijentacioni prag</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Vizuelno</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">kreativ nosi kampanju</p>
          </div>
        </div>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8" id="istorija-izmena">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-700 mb-2 font-semibold">🔄 Živi vodič - istorija izmena</p>
        <p className="text-sm text-gray-600 mb-3">Ovaj vodič se ažurira svakog meseca. Šta je novo:</p>
        <ul className="text-sm text-gray-700 space-y-1 mb-0 list-disc pl-5">
          <li><strong>Avgust 2026:</strong> Prva verzija vodiča: šta je Demand Gen, novosti 2026 (view-through optimizacija, inkrementalnost), poređenje sa PMax i YouTube kampanjama.</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Brzi odgovor
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Šta je Demand Gen kampanja?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          <strong>Demand Gen</strong> je Google Ads kampanja koja prikazuje vizuelno bogate oglase na <strong>YouTube-u (i Shorts formatu), Discover feedu i Gmail-u</strong>. Cilj nije da uhvati postojeću potražnju kao Search, nego da stvori novu - korisnik ne traži proizvod u tom trenutku, ali sadržaj koji gleda odaje šta mu treba.
        </p>
      </div>

      <hr />
      {/* ── Sadržaj ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#sta-je-demand-gen" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta je Demand Gen</a></li>
          <li><a href="#sta-je-novo-2026" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta je novo u Demand Gen-u (2026)</a></li>
          <li><a href="#kome-ima-smisla" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kome Demand Gen ima smisla, kome nema</a></li>
          <li><a href="#kreativa" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kreativa - formati i zahtevi</a></li>
          <li><a href="#demand-gen-vs-pmax-vs-youtube" className="block py-1 text-base text-gray-700 hover:text-primary underline">Demand Gen vs PMax vs YouTube kampanje</a></li>
          <li><a href="#publike" className="block py-1 text-base text-gray-700 hover:text-primary underline">Publike: redosled uvođenja</a></li>
          <li><a href="#merenje" className="block py-1 text-base text-gray-700 hover:text-primary underline">Merenje: view-through i inkrementalnost</a></li>
          <li><a href="#setup" className="block py-1 text-base text-gray-700 hover:text-primary underline">Setup korak po korak</a></li>
          <li><a href="#cesto-postavljana-pitanja" className="block py-1 text-base text-gray-700 hover:text-primary underline">Često postavljana pitanja</a></li>
        </ol>
      </nav>

      <h2 id="sta-je-demand-gen">Šta je Demand Gen</h2>
      <p>
        Demand Gen je naslednik Discovery kampanja - Google ga je preveo na ovo ime 2023. i od tada dograđuje. Ako ste ranije radili Discovery Ads, princip vam je poznat. Terminologija se promenila, format i logika u osnovi nisu.
      </p>
      <p>Gde se Demand Gen prikazuje:</p>
      <ul>
        <li><strong>YouTube feed i In-Stream</strong> - uključujući YouTube Shorts, gde je danas najveći deo pažnje mlađe publike</li>
        <li><strong>Discover feed</strong> - lični feed na Android telefonima i u Google aplikaciji, sličan iskustvu kao Instagram ili TikTok feed</li>
        <li><strong>Gmail</strong> - Promotions i Social tab, native oglas među mejlovima</li>
      </ul>
      <p>
        Zajednička nit je feed format. Korisnik skroluje kroz sadržaj koji je odabrao ili mu ga je algoritam preporučio, ne kroz rezultate pretrage. Oglas mora da se uklopi u taj ritam - ako izgleda kao reklama sa berzanskog bilborda, korisnik ga preskače u pola sekunde.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Zašto ovo uopšte postoji</p>
        <p className="text-blue-800 text-base mb-0">Search kampanja hvata tražnju koja već postoji - neko je otkucao upit, već zna šta hoće. Demand Gen radi obrnuto: tražnja još ne postoji u eksplicitnom obliku, ali čovek koji gleda sadržaj o renoviranju stana je verovatnije zainteresovan za nameštaj nego neko nasumičan. Sadržaj koji korisnik konzumira odaje potrebu pre nego što je on sam artikuliše kroz pretragu.</p>
      </div>

      <hr />

      <h2 id="sta-je-novo-2026">Šta je novo u Demand Gen-u (2026)</h2>
      <p>
        Google je u junu 2026. objavio paket promena za Demand Gen (interno ga zovu &quot;Demand Gen Drop&quot;), sa dodatnim update-om u aprilu. Evo šta je stvarno objavljeno i šta to znači u praksi - bez nagađanja o onome što nije potvrđeno.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">View-through conversion optimizacija za YouTube</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">Opt-in opcija - kampanja može da biduje i na konverzije koje se dese posle gledanja videa, bez klika na oglas. Praktično: ovo menja šta algoritam smatra &quot;uspehom&quot;, pa treba da razumete šta view-through konverzija zapravo znači pre nego što je uključite. Detaljnije u sekciji o merenju ispod.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Podrška u Commerce Media Suite</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">Demand Gen je dobio podršku unutar Google-ovog Commerce Media Suite paketa. Praktično: retaileri koji već koriste taj deo Google ekosistema za svoj oglasni inventar sada mogu Demand Gen da uklope u isti tok rada, umesto da ga vode kao potpuno odvojen sistem.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">A/B testing framework za inkrementalnost</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">Novi framework meri koliko Demand Gen stvarno DODAJE postojećem miksu kampanja, ne samo koliko konverzija sam sebi pripisuje. Praktično: ovo je najvažnija stavka na listi. Prvi put imate ugrađen alat da proverite da li Demand Gen donosi nove kupce ili samo pokupi konverzije koje bi se desile i bez njega.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Realtime alokacija budžeta između plasmana</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">Google je poboljšao kako se budžet u realnom vremenu deli između YouTube-a, Discover-a i Gmail-a unutar iste kampanje. Praktično: manje ručnog podešavanja da biste sprečili da ceo budžet ode na jedan plasman, ali i dalje vredi pratiti gde novac stvarno ide.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Audience expansion kontrole i dorada lookalike publika</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">Više kontrole nad tim koliko daleko Google sme da &quot;proširi&quot; vašu publiku van onoga što ste definisali, plus doterane lookalike liste. Praktično: manje situacija gde kampanja krene da troši na potpuno nerelevantnu publiku u ime &quot;proširenja dosega&quot;.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">6</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">AI image i video enhancements</h3>
        </div>
        <p className="text-base text-gray-600 mb-0">Automatske varijante kreativa - Google iz vaših slika i videa generiše dodatne verzije za testiranje. Praktično: korisno za brzinu, ali ne rešava problem lošeg polaznog materijala. Više o tome u sekciji o kreativi ispod.</p>
      </div>

      <hr />

      <h2 id="kome-ima-smisla">Kome Demand Gen ima smisla, kome nema</h2>
      <p>
        Ovo je deo gde vidim najviše pogrešnih odluka. Ljudi puste Demand Gen jer je nov i ima AI u priči, ne zato što im rešava pravi problem. Evo mog stava, direktno.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><CheckCircle size={14} strokeWidth={1.5} className="text-green-600" /> Kada DA</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">eCommerce sa vizuelnim proizvodom</h3>
          <p className="text-base text-gray-600 mb-0">Proizvod se prodaje na pogled - odeća, nameštaj, kozmetika, dekor, hrana. Slika ili video nose poruku bez teksta. To je tačno ono što feed format traži.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><CheckCircle size={14} strokeWidth={1.5} className="text-green-600" /> Kada DA</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Budžet od otprilike 1.000 EUR mesečno naviše za taj kanal</h3>
          <p className="text-base text-gray-600 mb-0">Ovo je orijentacioni prag koji ja koristim, ne garancija. Ispod toga kampanja retko dobije dovoljno prostora da nauči šta funkcioniše na tri različita plasmana odjednom.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><XCircle size={14} strokeWidth={1.5} className="text-red-500" /> Kada NE</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Mali lead-gen budžet, Search još nije iscrpljen</h3>
          <p className="text-base text-gray-600 mb-0">Ako Search kampanja za vaše ključne reči i dalje ima prostora za rast - veći budžet, bolja pokrivenost termina, bolji Quality Score - tu je novac bolje uložen. Demand Gen je nadogradnja na temelj, ne zamena za temelj.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><XCircle size={14} strokeWidth={1.5} className="text-red-500" /> Kada NE</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Nema ko da napravi kreativ</h3>
          <p className="text-base text-gray-600 mb-0">Ako nemate ni budžet ni vreme za fotografiju ili video, i planirate da vučete sa tri stara proizvodna fota - kampanja neće raditi. Ovo nije format gde tekst nosi poruku.</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Moj stav</p>
        <p className="text-yellow-800 text-base mb-0">Demand Gen nadograđuje ono što već radi. Ne popravlja ono što ne radi. Ako Search konvertuje slabo, problem je verovatno u ponudi, landing page-u ili trackingu - ne u tome što niste probali novi kanal. Prvo popravite temelj, pa onda širite.</p>
      </div>

      <hr />


      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-slate-900 mb-2">Podatak koji hladi glavu</p>
        <p className="text-sm text-gray-700 mb-0">Nezavisna analiza više hiljada naloga pokazuje da je 61% oglašivača prijavilo neutralne ili negativne rezultate posle prelaska sa Discovery ili Meta kampanja na Demand Gen. To nije razlog da ga zaobiđete - to je razlog da uđete sa čistim merenjem, dovoljnim budžetom i realnim očekivanjima iz ovog vodiča.</p>
      </div>

      <h2 id="kreativa">Kreativa - formati i zahtevi</h2>
      <p>
        Demand Gen je kampanja gde kreativ nosi rezultat, ne bidding strategija. To je razlika u odnosu na Search, gde tekst i relevantnost ključne reči rade najveći deo posla.
      </p>
      <p><strong>Formati koje Demand Gen kombinuje:</strong></p>
      <ul>
        <li><strong>Single image ads</strong> - jedna slika, kratak tekst, prikazuje se u Discover-u i Gmail-u</li>
        <li><strong>Carousel ads</strong> - više kartica koje korisnik prevlači, dobro za više proizvoda ili korak-po-korak poruku</li>
        <li><strong>Video ads</strong> - za YouTube feed, In-Stream i Shorts; vertikalni format je obavezan za Shorts</li>
      </ul>
      <p><strong>Tehnički zahtevi koje vredi ispoštovati:</strong></p>
      <ul>
        <li>Slike u više odnosa - kvadrat (1:1), landscape (1.91:1) i portret (4:5) - da bi se prikaz uklopio u svaki plasman</li>
        <li>Video u vertikalnom formatu (9:16) minimum za Shorts, horizontalni (16:9) za standardni YouTube feed</li>
        <li>Minimum nekoliko varijanti headline-a i opisa po asset grupi, ne jedna verzija</li>
        <li>Logo u kvadratnom i landscape formatu za brand prepoznatljivost u feedu</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Iskren stav o AI enhancements</p>
        <p className="text-blue-800 text-base mb-0">AI image i video enhancements prave varijante brže nego što biste vi ručno. To je stvarna prednost za tempo testiranja. Ali AI ne pravi dobru kreativu iz loše polazne kreative - samo množi ono što mu date. Ako je originalna slika loše osvetljena ili proizvod deluje jeftino, dobijate deset AI varijanti istog problema, ne rešenje. Ulaganje u kvalitetnu polaznu fotografiju ili video se i dalje ne preskače.</p>
      </div>

      <hr />


      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-slate-900 mb-2">Google-ov podatak koji vredi primeniti</p>
        <p className="text-sm text-gray-700 mb-0">Kampanje koje kombinuju video i image assete zajedno donose oko 20% više konverzija pri istom CPA nego kampanje samo sa videom (Google-ovi podaci). Za orijentaciju kod eCommerce naloga, industrijski benchmark (Store Growers) posle learning perioda: CTR 0,5-2%, CPC 0,30-1,50 dolara, ROAS 2-5x.</p>
      </div>

      <h2 id="demand-gen-vs-pmax-vs-youtube">Demand Gen vs PMax vs YouTube kampanje</h2>
      <figure className="my-8">
        <Image src="/blog/demand-gen-vs.webp" alt="Tri različita tipa kampanja prikazana kao tri panela" width={1200} height={896} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-sm text-gray-500 text-center mt-2">Tri alata, tri različita posla: Demand Gen, PMax i YouTube</figcaption>
      </figure>
      <p>
        Ova tri se stalno mešaju jer se sve tri pojavljuju na YouTube-u. Razlika je u tome ko drži kontrolu i šta je cilj.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Aspekt</th>
              <th className="py-3 px-3 font-heading font-semibold"><GlossaryLink slug="pmax">Performance Max</GlossaryLink></th>
              <th className="py-3 px-3 font-heading font-semibold">Demand Gen</th>
              <th className="py-3 px-3 font-heading font-semibold">YouTube / Video kampanje</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Cilj</td>
              <td className="py-3 px-3">Konverzije, svi kanali odjednom</td>
              <td className="py-3 px-3">Vizuelna tražnja, prospecting</td>
              <td className="py-3 px-3">Doseg i brand awareness</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3">Kanali</td>
              <td className="py-3 px-3">Search, Shopping, Display, YouTube, Gmail, Discover, Maps</td>
              <td className="py-3 px-3">YouTube, Discover, Gmail</td>
              <td className="py-3 px-3">Samo YouTube</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Kontrola plasmana</td>
              <td className="py-3 px-3"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Niska</span></td>
              <td className="py-3 px-3"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Srednja do visoka</span></td>
              <td className="py-3 px-3"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Visoka</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3">Uključuje Search</td>
              <td className="py-3 px-3">Da</td>
              <td className="py-3 px-3">Ne</td>
              <td className="py-3 px-3">Ne</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Primarni bidding cilj</td>
              <td className="py-3 px-3">Konverzije / vrednost konverzija</td>
              <td className="py-3 px-3">Konverzije / vrednost konverzija</td>
              <td className="py-3 px-3">Views, reach, brand lift</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Kratko: PMax je sve-u-jednom mašina koja uključi i Search. Demand Gen je fokusiran samo na vizuelnu tražnju sa nešto više kontrole nad plasmanom nego PMax. Klasična YouTube/Video kampanja je za doseg i brand, ne za konverzije direktno. Detaljnija razrada PMax-a i kada ga koristiti je u <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }} className="underline">Performance Max vodiču</Link>.
      </p>

      <hr />

      <h2 id="publike">Publike: redosled uvođenja</h2>
      <p>
        Redosled kojim uvodite publike u Demand Gen menja koliko brzo kampanja počne da radi kako treba. Ne bacajte sve odjednom.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong><GlossaryLink slug="remarketing">Remarketing liste</GlossaryLink></strong> <span className="text-gray-500">- prvi sloj. Ljudi koji su već bili na sajtu su najbliži konverziji, pa kampanja tu najbrže dobije signal šta funkcioniše.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Customer Match liste</strong> <span className="text-gray-500">- email/telefon baza postojećih kupaca, upload direktno u Google Ads. Jak signal za lookalike korak koji sledi.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Lookalike (slične) publike</strong> <span className="text-gray-500">- Google traži nove ljude slične vašim najboljim kupcima. Radi tek kada iza sebe imate dovoljno kvalitetnih podataka iz koraka 1 i 2.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Audience expansion kontrole</strong> <span className="text-gray-500">- tek na kraju odlučujete koliko daleko dozvoljavate Google-u da ide van definisanih publika. Uključujete postepeno, ne od prvog dana.</span></div>
          </div>
        </div>
      </div>

      <p>
        <GlossaryLink slug="in-market-audience">In-market publike</GlossaryLink> mogu da se dodaju kao dodatni signal paralelno sa ovim slojevima, ali ne kao zamena za prva dva koraka. Prvo-lice podaci - vaš remarketing i vaša customer lista - uvek nose više težine od gotovih Google segmenata.
      </p>

      <hr />

      <h2 id="merenje">Merenje: view-through i inkrementalnost</h2>
      <figure className="my-8">
        <Image src="/blog/demand-gen-merenje.webp" alt="Providne kartice sa okom vode do zelene kartice sa potvrdom" width={1200} height={896} className="rounded-xl border border-gray-200 w-full h-auto" />
        <figcaption className="text-sm text-gray-500 text-center mt-2">View-through koraci se vide kroz put do konverzije - ali ih merite trezvno</figcaption>
      </figure>
      <p>
        Ovo je deo koji najviše volim da objasnim pošteno, jer se ovde najlakše slažete sami sebi.
      </p>
      <p>
        View-through konverzija znači: korisnik je video vaš video oglas, nije kliknuo, ali je kasnije - istog dana ili u narednih nekoliko dana - obavio konverziju na sajtu. Google to pripisuje kampanji koja mu je video prikazala. Novi opt-in u 2026. dozvoljava da kampanja biduje i na taj signal, ne samo na klik-konverzije.
      </p>
      <p><strong>Šta je tu stvarna vrednost, a šta atribuciona magla:</strong></p>
      <ul>
        <li>Video oglas može stvarno da utiče na odluku, čak i bez klika - to je realno, posebno kod proizvoda gde je odluka duža.</li>
        <li>Ali isti korisnik je možda video i vaš Search oglas, i vaš remarketing banner, i čuo za vas od prijatelja - view-through konverzija to ne razdvaja. Pripisuje ceo kredit Demand Gen-u jer je poslednji video koji je video-oglas dodirnuo tu putanju.</li>
        <li>Što je duži prozor za view-through (Google obično koristi nekoliko dana), to je veći broj konverzija koje kampanja &quot;prisvoji&quot; - a to ne znači da bi te konverzije bez kampanje izostale.</li>
      </ul>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Moj savet: gledajte inkrementalnost, ne prijavljene konverzije</p>
        <p className="text-base text-yellow-900 mb-0">Broj konverzija koje Demand Gen prijavljuje u interfejsu vam govori koliko je kampanja sebi pripisala, ne koliko je stvarno donela. Pitanje koje treba da postavite je drugačije: da li ukupan broj konverzija na nalogu raste kad uključim Demand Gen, u odnosu na period bez njega? Novi A/B testing framework za inkrementalnost iz 2026. je napravljen tačno za ovo - poredi grupu sa Demand Gen-om i kontrolnu grupu bez njega, i pokazuje realan dodatni efekat, ne samo pripisane brojke. Koristite ga pre nego što donesete odluku o skaliranju budžeta.</p>
      </div>

      <p>
        Ovo se nadovezuje na širu temu conversion trackinga - ako vam tracking na sajtu već nije čist, nijedna atribuciona metoda ovde neće dati pouzdanu sliku. Osnove su obrađene u <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="underline">vodiču za conversion tracking</Link>.
      </p>

      <hr />

      <h2 id="setup">Setup korak po korak</h2>
      <p>
        Ovo je redosled koji ja pratim kad postavljam prvu Demand Gen kampanju za klijenta.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Proverite conversion tracking</strong> <span className="text-gray-500">- pre bilo čega. Bez čistog trackinga, algoritam optimizuje ka pogrešnom cilju od prvog dana.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Pripremite kreativ pre kampanje, ne posle</strong> <span className="text-gray-500">- minimum nekoliko slika u sva tri formata i, ako imate, kratak vertikalni video. Ne pravite kreativ u hodu.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Postavite cilj kampanje</strong> <span className="text-gray-500">- konverzije ili vrednost konverzija, u zavisnosti da li imate raznolike vrednosti porudžbina.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Napravite prvi sloj publika</strong> <span className="text-gray-500">- remarketing lista i, ako je imate, customer match lista. Bez ovoga, preskočite pravo na korak 8 i računajte na duži learning period.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Napravite asset grupu po tematskoj celini</strong> <span className="text-gray-500">- isto pravilo kao kod PMax-a. Jedna asset grupa, jedan konzistentan proizvod ili poruka.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
            <div><strong>Ostavite view-through opt-in isključen prvih nekoliko nedelja</strong> <span className="text-gray-500">- prvo vidite kako kampanja radi na klik-konverzijama, pa tek onda razmatrajte da li vam view-through signal ima smisla za vaš proizvod.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
            <div><strong>Pustite learning period bez diranja</strong> <span className="text-gray-500">- ne menjajte budžet ili targeting svaki drugi dan. Algoritmu treba vreme i stabilnost da nauči.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">8</span>
            <div><strong>Postavite A/B test za inkrementalnost</strong> <span className="text-gray-500">- kad imate dovoljno podataka, iskoristite novi framework da proverite da li kampanja stvarno dodaje nešto miksu pre nego što povećate budžet.</span></div>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="cesto-postavljana-pitanja">Često postavljana pitanja</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li je Demand Gen zamena za Display?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Delimično se preklapaju, ali nisu isto. Standardni <GlossaryLink slug="display-network">Display</GlossaryLink> pokriva mnogo širu mrežu sajtova i aplikacija preko banner formata. Demand Gen je uži, fokusiran na tri feed-native plasmana - YouTube, Discover, Gmail - sa vizuelnim formatima koji su prirodnije uklopljeni u sadržaj. Za većinu naloga koje vodim, Demand Gen je danas prirodniji izbor za prospecting nego klasičan Display, ali Display ostaje relevantan za širi remarketing doseg.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliki budžet treba za Demand Gen?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Orijentacioni prag koji ja koristim je otprilike 1.000 EUR mesečno za sam taj kanal. Ovo nije univerzalna granica niti obećanje rezultata - zavisi od cene proizvoda, konkurencije i toga koliko konverzija vam treba da algoritam nauči. Ispod tog nivoa kampanja često ne dobije dovoljno prostora da pokaže šta stvarno radi na tri plasmana odjednom.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Demand Gen ili PMax?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Nije uvek pitanje ili-ili. PMax uključuje Search i Shopping pored vizuelnih kanala, pa je šire rešenje sa manje kontrole. Demand Gen je uži i daje vam više kontrole nad plasmanom i kreativom, ali ne dira Search uopšte. Ako već imate PMax koji radi dobro, Demand Gen retko donosi dovoljno dodatne vrednosti da opravda dupliranje budžeta - proverite pre svega kroz A/B test inkrementalnosti. Ako nemate PMax i tražite fokusiran prospecting kanal sa jačim kreativnim usmerenjem, Demand Gen je razumniji prvi korak.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li radi za B2B?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Može, ali je teže nego za eCommerce. B2B proizvod retko ima jak vizuelni element - teško je napraviti ubedljivu sliku ili video za, recimo, softver za upravljanje zalihama. Ako imate customer match listu postojećih klijenata za lookalike i budžet za makar osnovnu video produkciju, ima smisla probati kao dopunski kanal uz Search. Kao prvi i jedini kanal za B2B lead-gen, ne bih ga preporučio.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako se meri uspeh Demand Gen kampanje?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Ne samo brojem konverzija koje kampanja sama sebi prijavljuje u interfejsu. Pratite da li ukupan broj konverzija na celom nalogu raste kad je kampanja uključena, u odnosu na period bez nje - to je test inkrementalnosti, i za njega postoji ugrađen A/B framework od 2026. Ako uključite view-through optimizaciju, budite svesni da ona širi definiciju &quot;konverzije&quot; i da će prijavljeni broj rasti bez obzira da li stvarni rezultat raste. Gledajte poslovni ishod, ne samo dashboard.
          </div>
        </details>
      </div>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Razmišljate o Demand Gen kampanji?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">Pomažem firmama da procene da li im Demand Gen stvarno donosi novu tražnju ili samo dupliranje već postojećih rezultata. Zakažite besplatnu konsultaciju da vidimo da li je pravi trenutak za vaš nalog.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Zakažite besplatnu konsultaciju</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Upravljanje Google Ads nalogom</p>
          <p className="text-xs text-gray-500 mb-0">Profesionalno vođenje kampanja, uključujući Demand Gen i PMax</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "performance-max-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Performance Max vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kada koristiti PMax umesto ili uz Demand Gen, i kako ga strukturirati.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako postaviti ispravan tracking pre nego što merite view-through i inkrementalnost.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako graditi liste koje kasnije hrane Demand Gen lookalike publike.</p>
        </Link>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Demand Gen je dobar kanal kad Search već radi i tražite sledeći sloj rasta. Nije zakrpa za temelj koji ne funkcioniše. Kreativ nosi kampanju - bez dobre slike ili videa, nema algoritma koji to popravi.</p>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Avgust 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
