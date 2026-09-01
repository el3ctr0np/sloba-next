import { Link } from "@/i18n/navigation";
import { CheckCircle, XCircle } from "lucide-react";

export default function ChatGptAdsVodicPost() {
  return (
    <>
      <p>
        Prošao sam kroz svaki zvanični OpenAI izvor o oglasima u ChatGPT-u: policy stranice, help centar, objave o širenju na nova tržišta, dokumentaciju za advertiser API. Zatim kroz svaki nezavisni test sa stvarnim spendom koji sam mogao da nađem, gde je agencija javno objavila koliko je potrošila i šta je dobila. Razlog je prost. Za pola godine se internet napunio ciframa koje nemaju izvor: &quot;51% odgovora nosi oglase&quot;, &quot;Newegg 7x ROAS&quot;. Kad krenete da tražite odakle to dolazi, nema ničega.
      </p>
      <p>
        Ovo je vodič koji razdvaja verifikovano od izmišljenog. Sve što je ovde napisano kao činjenica dolazi ili iz zvaničnog OpenAI izvora ili od imenovane agencije koja je objavila svoj budžet i rezultat. Gde postoji samo tvrdnja bez revizije, to piše. Gde nešto ne postoji iako se po tekstovima čini da postoji, i to piše. Stanje je zaključno sa 1. septembrom 2026, a vodič ažuriram kako se proizvod menja, jer se menja brzo.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">ChatGPT Ads su sponzorisane kartice koje se pojavljuju ispod završenog odgovora i vide ih samo ulogovani Free i Go korisnici. Oglašivač ne kupuje ključne reči nego opisuje kontekst razgovora. Self-serve nalog se otvara u 47 zemalja, Srbija nije među njima. Realan CTR iz nezavisnih testova je 0,65-1,3%, a realan CPC 1,72 do 12 dolara, dok OpenAI preporučuje početni bid od 3 do 5 dolara.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">47</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">zemalja sa self-serve nalogom</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">$1B</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">run rate za manje od 200 dana</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">0,65-1,3%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">CTR u nezavisnim testovima</p>
          </div>
        </div>
      </div>

      {/* ── Živi vodič ── */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8" id="istorija-izmena">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-700 mb-2 font-semibold">🔄 Živi vodič - istorija izmena</p>
        <p className="text-sm text-gray-600 mb-3">Ovaj vodič se ažurira kako OpenAI menja proizvod. Šta je novo:</p>
        <ul className="text-sm text-gray-700 space-y-1 mb-0 list-disc pl-5">
          <li><strong>Septembar 2026:</strong> Prva verzija vodiča: formati i plasman, dve različite rollout liste (gde se oglasi prikazuju naspram gde se kupuju), modeli kupovine i aukcija, targeting bez ključnih reči, EEA bez personalizacije, merenje i klik-diskrepanca, kategorije kojima je oglašavanje van SAD zabranjeno, nezavisni benchmarci sa imeniocima.</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Brzi odgovor
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Šta su ChatGPT Ads?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          <strong>ChatGPT Ads</strong> su sponzorisane kartice koje OpenAI prikazuje <strong>ispod kraja odgovora</strong> u ChatGPT-u, jasno označene i vizuelno odvojene od samog odgovora. Vide ih samo ulogovani korisnici na <strong>Free i Go</strong> planovima. Oglašivač ne bira ključne reči nego opisuje kontekst razgovora u kom želi da se pojavi, a sistem odlučuje da li je oglas relevantan za tekuću temu. Oglas nikada ne menja sam odgovor.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Pre nego što nastavite: da li se ovo vas tiče</p>
        <p className="text-blue-800 text-base mb-2"><strong>Srbija još nije podržana, sa obe strane.</strong> Oglasi se ne prikazuju korisnicima u Srbiji i srpska firma ne može da otvori advertiser nalog. Isto važi za ostatak ne-EU Zapadnog Balkana.</p>
        <p className="text-blue-800 text-base mb-2"><strong>EU jeste, uključujući Hrvatsku i Sloveniju.</strong> Oglasi su u 31 evropsko tržište pušteni 24. avgusta 2026, a self-serve otvaranje naloga 31. avgusta.</p>
        <p className="text-blue-800 text-base mb-0"><strong>Ako vaša firma ima entitet u EU, UK ili SAD, ili poslujete preko takvog entiteta, ovo je primenljivo odmah.</strong> Ako ne, ostatak vodiča je i dalje koristan da znate šta dolazi i šta da tražite kad stigne.</p>
      </div>

      <hr />
      {/* ── Sadržaj ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#sta-su" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta su ChatGPT Ads i gde se pojavljuju</a></li>
          <li><a href="#dostupnost" className="block py-1 text-base text-gray-700 hover:text-primary underline">Gde su dostupni: dve različite liste</a></li>
          <li><a href="#kupovina" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kako se kupuju: nalog, modeli, aukcija</a></li>
          <li><a href="#targeting" className="block py-1 text-base text-gray-700 hover:text-primary underline">Targeting bez ključnih reči</a></li>
          <li><a href="#merenje" className="block py-1 text-base text-gray-700 hover:text-primary underline">Merenje i merni jaz</a></li>
          <li><a href="#ko-sme" className="block py-1 text-base text-gray-700 hover:text-primary underline">Ko sme da se oglašava</a></li>
          <li><a href="#brojke" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta kažu stvarne brojke</a></li>
          <li><a href="#da-li-testirati" className="block py-1 text-base text-gray-700 hover:text-primary underline">Da li da testirate</a></li>
          <li><a href="#pilot" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kako vodim pilot</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Često postavljana pitanja</a></li>
        </ol>
      </nav>

      <h2 id="sta-su">Šta su ChatGPT Ads i gde se pojavljuju</h2>
      <p>
        Oglas se pojavljuje na jednom mestu: ispod kraja odgovora. Ne u sredini teksta, ne u sidebaru, ne kao banner negde po interfejsu. Korisnik postavi pitanje, dobije pun odgovor, i tek ispod tog odgovora vidi jedan ili više jasno označenih ad unit-a. To je ceo plasman.
      </p>
      <p>
        Ta jedna rečenica objašnjava skoro sve što će vas kasnije iznenaditi u brojkama. Kod pretrage korisnik vidi oglas <em>pre</em> nego što je dobio odgovor, dok je pitanje još otvoreno. U ChatGPT-u ga vidi <em>posle</em> odgovora, kad je pitanje već zatvoreno. Psihološki, to je potpuno drugačiji trenutak. Nizak CTR koji ćete videti niže u tekstu nije kvar formata, nego posledica mesta na kom oglas stoji.
      </p>

      <p><strong>Formati koji stvarno postoje:</strong></p>
      <ul>
        <li><strong>Standardna kartica</strong> sa imenom oglašivača, logotipom, naslovom, tekstom, slikom i linkom ka sajtu</li>
        <li><strong>Product carousel</strong> koji se automatski sastavlja iz product feeda prodavca, prema signalima razgovora; u beta fazi od početka avgusta 2026</li>
        <li><strong>Dinamički CTA</strong>: Shop Now, Book Now, Sign Up ili Learn More, koji OpenAI bira automatski umesto vas</li>
        <li><strong>&quot;Ask ChatGPT&quot; dugme na samom oglasu</strong>, koje korisniku omogućava da oglas ubaci nazad u razgovor i pita nešto o njemu; oglašivač ne utiče na to šta će ChatGPT odgovoriti</li>
      </ul>

      <p><strong>Ko oglase uopšte vidi:</strong></p>
      <ul>
        <li>Samo ulogovani korisnici na <strong>Free</strong> i <strong>Go</strong> planovima. Plus, Pro, Business, Enterprise i Edu planovi su bez oglasa.</li>
        <li>Ne prikazuju se korisnicima ispod 18 godina, ni u Temporary Chats, ni u Atlas browseru.</li>
        <li>Free korisnik može da se odrekne oglasa u podešavanjima, uz manji limit poruka.</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Šta NE postoji, iako ćete pročitati da postoji</p>
        <p className="text-yellow-800 text-base mb-0">Nema sidebar plasmana. Nema posebne &quot;search mode&quot; površine sa oglasima. Nema display mreže na partnerskim sajtovima. Konverzacioni i interaktivni formati, gde bi oglas bio deo dijaloga, jesu najavljeni kao namera, ali nisu isporučeni. Ako neki tekst opisuje kako da postavite konverzacioni ChatGPT oglas, taj tekst opisuje nešto što ne možete da kupite.</p>
      </div>

      <hr />

      <h2 id="dostupnost">Gde su dostupni: dve različite liste</h2>
      <p>
        Ovo je najčešća greška u izveštavanju o ChatGPT oglasima, i vredi je razumeti pre svega ostalog. Postoje <strong>dve različite liste zemalja</strong> i skoro svi ih pomešaju u jednu.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Lista A</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Gde se oglasi PRIKAZUJU korisnicima</h3>
          <p className="text-base text-gray-600 mb-0">41 tržište, po OpenAI objavi od 31. avgusta 2026. To je pitanje dosega: da li će vaš oglas uopšte imati kome da se prikaže u toj zemlji.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Lista B</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Gde firma može da OTVORI nalog</h3>
          <p className="text-base text-gray-600 mb-0">47 zemalja, po zvaničnom help centru OpenAI-ja. To je pitanje pristupa: da li vaša firma sme da postane oglašivač.</p>
        </div>
      </div>

      <p>
        Zemlja može da bude na jednoj listi a da nije na drugoj. Kad pročitate &quot;ChatGPT Ads su sada dostupni u X zemalja&quot;, prvo pitanje je koja od ove dve stvari se tvrdi. Za praktičnu odluku vam trebaju obe: entitet u zemlji sa liste B da biste kupili, i publika u zemljama sa liste A da biste imali kome da prodate.
      </p>

      <p><strong>Kako je rollout išao:</strong></p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Talas</th>
              <th className="py-3 px-3 font-heading font-semibold">Tržišta</th>
              <th className="py-3 px-3 font-heading font-semibold">Datum</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Pilot</td>
              <td className="py-3 px-3">SAD</td>
              <td className="py-3 px-3">9. februar 2026</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">2</td>
              <td className="py-3 px-3">Kanada, Australija, Novi Zeland</td>
              <td className="py-3 px-3">najava 26. mart 2026</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">3</td>
              <td className="py-3 px-3">UK, Meksiko, Brazil, Japan, Južna Koreja</td>
              <td className="py-3 px-3">najava 7. maj, potvrda 11. avgust 2026</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">4</td>
              <td className="py-3 px-3">31 evropsko tržište (EU 27 + Island, Lihtenštajn, Norveška, Švajcarska)</td>
              <td className="py-3 px-3">najava 18. avgust, live 24. avgust 2026</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">5</td>
              <td className="py-3 px-3">Indija</td>
              <td className="py-3 px-3">29. avgust 2026</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">6</td>
              <td className="py-3 px-3">Self-serve nalozi: Indija, Evropa, Bliski istok, Južna Afrika</td>
              <td className="py-3 px-3">31. avgust 2026</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Nema jedinstvenog globalnog lansiranja i OpenAI sam kaže da je &quot;još rano&quot;. Prikazivanje oglasa korisnicima i mogućnost samostalne kupovine stižu odvojeno, često sa razmakom od nekoliko nedelja, pa ne verujte tekstu koji za neko tržište navodi jedan datum za oboje.
      </p>

      <p>
        <strong>Za ex-Yu region:</strong> Hrvatska i Slovenija su na self-serve listi, kao članice EU. Srbija, Bosna i Hercegovina, Crna Gora, Severna Makedonija, Albanija i Kosovo nisu ni na jednoj od dve liste. U nepodržanoj zemlji možete da započnete kreiranje naloga i ostavite podatke za obaveštenje, ali to ne daje raniji pristup. Waitlist-a u smislu prednosti ne postoji.
      </p>

      <hr />

      <h2 id="kupovina">Kako se kupuju: nalog, modeli, aukcija</h2>
      <p>
        Postoji pet puteva do inventara, i za većinu firmi je relevantan samo prvi.
      </p>
      <ul>
        <li><strong>Self-serve Ads Manager</strong> na ads.openai.com, u beta fazi. Otvoren u SAD od 5. maja 2026, a za Indiju, Evropu, Bliski istok i Južnu Afriku od 31. avgusta 2026.</li>
        <li><strong>OpenAI Ads Solutions</strong>, managed usluga za veće oglašivače.</li>
        <li><strong>Agencijski partneri</strong>: Dentsu, Omnicom, Publicis, WPP.</li>
        <li><strong>Preko 50 tehnoloških i mernih partnera</strong>, među njima Adobe, Criteo, Kargo, Pacvue, StackAdapt.</li>
        <li><strong>Advertiser API</strong> za one koji grade sopstvenu automatizaciju.</li>
      </ul>

      <p><strong>Modeli naplate:</strong></p>
      <ul>
        <li><strong>CPM</strong> za doseg, dostupan od februara 2026.</li>
        <li><strong>CPC</strong> za klikove, od 5. maja 2026.</li>
        <li><strong>oCPC</strong>, gde plaćate po kliku ali sistem optimizuje ka konverziji. Bid cap je obavezan, cilj kampanje i konverzioni događaj se zaključavaju pri kreiranju, i tracking mora da radi <em>pre</em> nego što kampanja krene. OpenAI navodi da CPC uz optimizaciju ka ishodu danas nosi većinu kampanja.</li>
      </ul>

      <p>
        Aukcija je <strong>relevance-weighted second-price</strong>. Prevedeno: ne pobeđuje najveći bid nego najbolja kombinacija bida i relevantnosti za tekući razgovor, a plaćate na osnovu drugog najboljeg. Maksimalan bid se postavlja na nivou ad grupe. Ako vam ovo zvuči poznato iz Google Ads-a, jeste, princip je isti, samo što ovde nemate Quality Score dijagnostiku koja bi vam rekla gde gubite.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-slate-900 mb-2">Istorija minimalnog spenda</p>
        <p className="text-sm text-gray-700 mb-0">U februaru 2026. ulaz je tražio commitment od 200.000 do 250.000 dolara. U aprilu je spušten na 50.000, a 5. maja je ukinut. Danas ulaznog praga nema, ali postoje minimalni budžeti kampanje po tržištu: 25 dolara u SAD, 15 funti u UK, 25 kanadskih i australijskih dolara, 2.500 jena u Japanu, 725 rupija u Indiji. <strong>Iznosi u evrima ne postoje ni u jednom zvaničnom izvoru</strong>, pa ako negde pročitate konkretnu evro cifru, ta cifra je izmišljena.</p>
      </div>

      <p>
        Onboarding ide redom: podaci o firmi, verifikacija identiteta, pregled naloga, pa tek onda kampanja, ad grupa, kreativa i policy provera. Računajte na to da provera nije trenutna i ne planirajte lansiranje za isti dan.
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Preporučeni bid naspram onoga što se stvarno plaća</p>
        <p className="text-base text-yellow-900 mb-0">OpenAI preporučuje početni CPC od 3 do 5 dolara. U nezavisnim testovima sa objavljenim spendom realizovani CPC ide od 1,72 do 12 dolara, zavisno od vertikale. Symphonic je u avgustu prijavio da sa bidom od 3 dolara nije dobio <strong>nijednu impresiju</strong> i da je morao na oko 12 dolara maksimalnog bida da bi kampanja uopšte krenula. Preporučeni raspon uzmite kao donju granicu za neutakmičene teme, ne kao planski broj.</p>
      </div>

      <hr />

      <h2 id="targeting">Targeting bez ključnih reči</h2>
      <p>
        Ovde većina ljudi koji dolaze iz Google Ads-a napravi prvu konceptualnu grešku. U ChatGPT-u ne postoje ključne reči. Postoje <strong>context hints</strong>: slobodan opis tema i situacija u razgovoru u kojima želite da se pojavite, postavljen na nivou ad grupe. To nije exact match, nije phrase match, i ne garantuje isporuku. To je signal sistemu, ne pravilo.
      </p>

      <p><strong>Šta možete da kontrolišete:</strong></p>
      <ul>
        <li><strong>Context hints</strong> na nivou ad grupe</li>
        <li><strong>Geo</strong>: zemlja svuda, a u SAD i država, DMA ili poštanski broj</li>
        <li><strong>Platforma</strong>: iOS, Android, web</li>
        <li><strong>Custom audiences</strong>: upload email adresa ili telefona kao SHA-256 heševa, do 512 MB i 5 miliona identifikatora, uz <strong>minimum 25.000 uparenih korisnika</strong> da bi lista bila upotrebljiva; može kao uključivanje, isključivanje ili bid multiplier</li>
      </ul>

      <p><strong>Šta ne postoji:</strong></p>
      <ul>
        <li>Liste ključnih reči i match tipovi</li>
        <li>Demografija i interesovanja</li>
        <li>Retargeting posetilaca sajta</li>
        <li><strong>Izveštaj na nivou upita</strong>. Ne vidite koji je prompt okinuo koji oglas. Ovo je za mene najveći praktični nedostatak: nemate ekvivalent search terms izveštaja, pa nemate ni petlju za čišćenje koju u Search kampanjama radim svake nedelje.</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Evropska specifičnost koju skoro niko ne objašnjava</p>
        <p className="text-blue-800 text-base mb-0">U EEA i Švajcarskoj <strong>personalizovani oglasi nisu inicijalno dostupni</strong>. Izbor oglasa se pravi samo na osnovu tekućeg razgovora, grube lokacije i jezika. Bez memorije, bez prethodnih razgovora, bez istorije interakcija sa oglasima. Praktična posledica: u Evropi nemate sloj publike iza kog se može sakriti slaba poruka. Context hints i kreativa nose ceo rezultat. Ako je ponuda mutna, u EEA to nema šta da je spase.</p>
      </div>

      <p>
        Što se privatnosti tiče, oglašivač nikada ne dobija razgovore, istoriju, memorije, ime, email, preciznu lokaciju ni IP adresu korisnika. Dobija agregirane podatke o učinku. Podaci vezani za oglase se čuvaju 30 dana posle brisanja. ChatGPT je 31. avgusta 2026. u EU označen kao veoma velika onlajn pretraživačka platforma, pa do kraja decembra 2026. mora da ispuni DSA obaveze, uključujući javni registar oglasa sa sadržajem, oglašivačem, periodom prikazivanja i parametrima targetinga.
      </p>

      <hr />

      <h2 id="merenje">Merenje i merni jaz</h2>
      <p>
        Ads Manager daje impresije, klikove, potrošnju, CTR, prosečan CPC i CPM, konverzije, CSV export, API i change log. Za konverzije postoje tri mehanizma:
      </p>
      <ul>
        <li><strong>OAIQ merni piksel</strong>: JavaScript SDK sa first-party kolačićem koji traje oko 30 dana, standardni i custom eventi.</li>
        <li><strong>Conversions API</strong>: server-side slanje sa deduplikacijom po event ID-u, da isti događaj ne bi bio brojan dvaput.</li>
        <li><strong>Automatic Advanced Matching</strong>: hvata podatke iz formi na sajtu i hešira ih u browseru pre slanja. Podrazumevano je uključen na novim pikselima, a na postojećima je automatski uključen 17. avgusta 2026.</li>
      </ul>
      <p>
        UTM parametri prolaze na klik, postoje i dinamički parametri za ID kampanje, ad grupe i oglasa. Atribucija pokriva klik i, gde je uključen, view-through prozor od jednog dana.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Nema native GA4 integracije</p>
        <p className="text-yellow-800 text-base mb-0">Saobraćaj iz ChatGPT oglasa u GA4 stiže kao običan referral. Nema gotovog povezivanja naloga kao između Google Ads-a i GA4, nema auto-taggovanja. Ako ne postavite UTM parametre pre lansiranja, izgubili ste mogućnost da posle razdvojite plaćeni od organskog ChatGPT saobraćaja. Ovo je prvi korak, ne naknadna misao.</p>
      </div>

      <p>
        Sada deo koji retko nađete u vodičima. <strong>Najčešća pritužba praktičara je klik-diskrepanca</strong>: platforma prijavljuje osetno više klikova nego što analitika vidi sesija. Konkretni javno objavljeni slučajevi, po izveštaju MediaPost-a od 28. avgusta 2026: Cleverly je prijavio 57 klikova naspram manje od 20 sesija; Symphonic 53 naspram 35, dakle jaz od oko 34 procenta; Out of the Box je od oko 140 klikova u julu verifikovao 13 procenata, a u avgustu 68 procenata; u jednom slučaju odnos je bio 120 naspram 8.
      </p>
      <p>
        <strong>Uzrok nije utvrđen.</strong> Ne pišem da je u pitanju prevara ni dvostruko brojanje, jer za to nema dokaza, a razlike u načinu brojanja klika i sesije postoje na svakoj platformi. Ono što jeste dokazano je da se jaz smanjivao kroz leto, što govori u prilog tome da je deo problema bio u zrelosti merenja, ne u samom inventaru.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Moj standard je jednostavan: analitika klijenta je izvor istine, a brojke iz Ads Manager-a su indikacija. Ako budžet opravdavam brojevima koje mogu da vidim samo u panelu koji mi ih prodaje, nisam ništa izmerio.</p>
      </div>

      <p>
        Ovo podrazumeva da tracking na sajtu već radi kako treba pre nego što uopšte otvorite ChatGPT nalog. Osnove i redosled postavljanja sam razradio u <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="underline">vodiču za conversion tracking</Link>.
      </p>

      <hr />

      <h2 id="ko-sme">Ko sme da se oglašava</h2>
      <p>
        Policy je uzak i ovo je verovatno tačka na kojoj će najviše firmi otpasti pre nego što uopšte stigne do budžeta.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><CheckCircle size={14} strokeWidth={1.5} className="text-green-600" /> Dozvoljeno sada</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Ograničen set potrošačkih kategorija</h3>
          <p className="text-base text-gray-600 mb-0">Roba za domaćinstvo i široku potrošnju, lokalne usluge, putovanja i zabava, digitalni proizvodi, edukacija.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><XCircle size={14} strokeWidth={1.5} className="text-red-500" /> Samo SAD, uz ručno odobrenje</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Finansije, zdravstvo, pravne usluge</h3>
          <p className="text-base text-gray-600 mb-0">Van SAD su ove kategorije zabranjene. Klinika u Nemačkoj, advokatska kancelarija u Hrvatskoj ili fintech u UK ne mogu da se oglašavaju, bez obzira što su im tržišta inače podržana.</p>
        </div>
      </div>

      <p>
        Ovu rupu vidim široko previđenu. Tekstovi o ChatGPT oglasima nabrajaju podržane zemlje i onda se sve pogrešno pročita kao &quot;pa možemo&quot;. Kategorija se proverava pre tržišta, ne posle. Potpuno zabranjene su i sledeće grupe: sadržaj za odrasle i dejting, alkohol, duvan i vejp, kockanje i klađenje, droge i kanabis, politika, pojedinačni oglasi za nekretnine i poslove, prevare, senzitivni događaji i wellness tvrdnje bez dokaza.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Geo-compliance klauzula: registrovanje firme drugde nije siva zona</p>
        <p className="text-blue-800 text-base mb-0">Policy izričito zabranjuje lažno predstavljanje lokacije biznisa ili podobnosti za tržište. Savet tipa &quot;otvorite firmu u Estoniji da zaobiđete blok&quot; nije domišljatost nego kršenje pravila, sa nalogom kao ulogom. Postoje dva čista puta: stvaran pravni entitet koji zaista posluje u podržanom tržištu, ili rad kroz entitet samog klijenta koji tamo već posluje.</p>
      </div>

      <p>
        Postoji i sloj brand safety-ja koji se tiče plasmana, ne oglašivača: oglasi se ne prikazuju u razgovorima o mentalnom zdravlju, emocionalno osetljivim temama i u još 19 definisanih kategorija sadržaja. Sama provera ide na tri nivoa, oglašivač, kreativa sa landing stranicom, i plasman, pretežno automatski uz ljudsku eskalaciju.
      </p>

      <hr />

      <h2 id="brojke">Šta kažu stvarne brojke</h2>
      <p>
        Ovde odvajam tri stvari koje se u tekstovima po pravilu mešaju: nezavisne testove sa objavljenim spendom, tvrdnje samog OpenAI-ja, i studije gustine oglasa.
      </p>

      <p><strong>Nezavisni testovi sa stvarnim novcem</strong> (nijedan nije auditiran, ali svi imaju ime i objavljen budžet):</p>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Izvor</th>
              <th className="py-3 px-3 font-heading font-semibold">Spend</th>
              <th className="py-3 px-3 font-heading font-semibold">Nalaz</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Opascope, jun</td>
              <td className="py-3 px-3">oko 60.000 USD / 15 dana</td>
              <td className="py-3 px-3">1,49x blended ROAS, CPC oko 1,72 USD, CVR 2,35%, dnevni ROAS 0,2x do 2,9x</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Q1Media, jul</td>
              <td className="py-3 px-3">više naloga</td>
              <td className="py-3 px-3">CTR 0,5-2,5%, prosečan CPC oko 5 USD, CVR oko 2%</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Choice OMG, jun</td>
              <td className="py-3 px-3">415 CAD / 17 dana</td>
              <td className="py-3 px-3">CTR 0,65%, CPC 7,16 CAD, nula konverzija</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Symphonic, avgust</td>
              <td className="py-3 px-3">oko 500 USD</td>
              <td className="py-3 px-3">bid od 3 USD dao nula impresija; realizovan CPC oko 9 USD; nula leadova</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Out of the Box, jul i avgust</td>
              <td className="py-3 px-3">675 USD</td>
              <td className="py-3 px-3">CPC oko 3,50 USD; verifikacija klik u sesiju porasla sa 13% na 68%; nula kvalifikovanih leadova</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">SE Ranking, avgust</td>
              <td className="py-3 px-3">sopstveni test</td>
              <td className="py-3 px-3">preko 97.000 impresija, 1.263 klika, CTR 1,30%, vrlo malo registracija</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Tri nalaza se ponavljaju kroz sve izvore. Prvo, preporučeni CPC potcenjuje stvarni trošak u konkurentnim vertikalama dva do četiri puta. Drugo, <strong>CTR konvergira na 0,65 do 1,3 procenta</strong>. Za orijentaciju, u Google Search kampanjama prosečan CTR se kreće oko 2 do 3 procenta, a dobro postavljene kampanje na brendiranim i visoko relevantnim terminima idu 5 do 10 procenata. Razlika nije kvar, nego posledica toga što ChatGPT oglas stoji ispod već gotovog odgovora. Treće, većina izveštaja sa nula konverzija dolazi iz kampanja vođenih <em>pre</em> avgusta, dakle pre nego što su oCPC, piksel i Conversions API sazreli, pa rani rezultati verovatno potcenjuju današnju sposobnost platforme.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-slate-900 mb-2">Šta tvrdi OpenAI, odvojeno označeno</p>
        <p className="text-sm text-gray-700 mb-0">OpenAI je objavio da je jedan eCommerce oglašivač imao 3x ROAS za 28 dana i da preko 80 procenata saobraćaja iz oglasa čine novi kupci. <strong>Obe tvrdnje su anonimne i neauditirane</strong>, bez imena oglašivača i bez nezavisne provere. Imenovani oglašivači koji se javno pojavljuju na platformi su Newegg, Best Buy, Lowe&apos;s i VistaPrint, ali njihovi rezultati nisu objavljeni. Ako negde pročitate konkretnu ROAS cifru pripisanu nekom od tih brendova, ta cifra nema primarni izvor.</p>
      </div>

      <p><strong>Koliko odgovora uopšte nosi oglase</strong> je pitanje na kom se najviše laže, jer imenilac menja sve:</p>
      <ul>
        <li><strong>SE Ranking, avgust, preko 50.000 komercijalnih promptova:</strong> oglasi na 25,94% <em>komercijalnih</em> promptova; 14,35% oglasa semantički nevezano za temu.</li>
        <li><strong>Adthena, mart do maja, 850.000 svih upita u SAD i UK:</strong> oglasi na 4,47% <em>svih</em> upita, prosečno 1,06 sponzorisanih stavki po odgovoru; maloprodaja i moda čine 39% plasmana.</li>
        <li><strong>Similarweb:</strong> 26% odgovora nosi oglase, CTR 0,50%.</li>
      </ul>
      <p>
        Obe glavne studije mogu biti tačne istovremeno, jer mere različite stvari u različitim periodima. Zato svaku cifru o gustini oglasa gledajte zajedno sa imeniocem i datumom. Bez toga je to samo broj.
      </p>

      <h3>Hype naspram realnosti</h3>
      <p>
        OpenAI je 31. avgusta 2026. objavio <strong>godišnji run rate od milijardu dolara za manje od 200 dana</strong>. Cifra je zvanična, ali run rate je ekstrapolacija tekućeg tempa, ne realizovan godišnji prihod. Interni cilj za 2026. se po ugledim izvorima kreće u rasponu od 2,3 do 2,5 milijardi dolara.
      </p>
      <p>
        Nasuprot tome, eMarketer prognozira da će <em>sav</em> advertising u AI chatbotovima ostati ispod milijarde dolara u 2026. i dosegnuti oko 5,4 milijarde do 2030. Ako je ta prognoza tačna, OpenAI promašuje sopstvenu projekciju za oko 90 procenata. Digiday je u maju i junu izvestio da su oglašivači sa velikim commitmentima potrošili manje od 10 procenata budžeta zbog nedostatka inventara, i da je oko polovine inventara u junu ostalo nepopunjeno.
      </p>
      <p>
        Najinstruktivniji presedan nije brojka nego događaj: <strong>Perplexity je krajem 2025. pauzirao prijem novih oglašivača</strong>, uz slabe rezultate i teško merenje kao razlog. To ne znači da će se isto desiti OpenAI-ju, koji ima nesrazmerno veći doseg. Znači da model &quot;oglas ispod AI odgovora&quot; već jednom nije održao obećanje, i da to vredi imati u vidu kad neko planira budžet za sledeću godinu.
      </p>

      <hr />

      <h2 id="da-li-testirati">Da li da testirate</h2>
      <p>
        Moj filter je kratak i primenjujem ga pre nego što uopšte otvorimo temu budžeta.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><CheckCircle size={14} strokeWidth={1.5} className="text-green-600" /> Ima smisla</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Entitet u podržanom tržištu i dozvoljena kategorija</h3>
          <p className="text-base text-gray-600 mb-0">Firma stvarno posluje u EU, UK ili SAD, a proizvod spada u potrošačku robu, putovanja, digitalne proizvode, edukaciju ili lokalne usluge.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><CheckCircle size={14} strokeWidth={1.5} className="text-green-600" /> Ima smisla</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Promišljena kupovina i verifikovan tracking</h3>
          <p className="text-base text-gray-600 mb-0">Proizvod o kom se razgovara pre kupovine, jer razgovor je ceo kontekst formata. I merenje koje ste sami proverili, ne merenje za koje pretpostavljate da radi.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><XCircle size={14} strokeWidth={1.5} className="text-red-500" /> Nema smisla</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Search još nije iscrpljen</h3>
          <p className="text-base text-gray-600 mb-0">Ako u Search kampanjama još postoji nepokriven prostor, tu je isti novac merljiviji i predvidljiviji. ChatGPT test je sloj iznad temelja koji radi, ne zamena za temelj.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><XCircle size={14} strokeWidth={1.5} className="text-red-500" /> Nema smisla</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Budžet koji mora da se vrati ovog meseca</h3>
          <p className="text-base text-gray-600 mb-0">Ako je svaki evro već obećan nekom rezultatu, ovo nije kanal za taj novac. Ovo je budžet za učenje o kanalu, i tako ga treba i knjižiti.</p>
        </div>
      </div>

      <p>
        Ako uđete, uđite sa jasno postavljenim pitanjem umesto sa ciljanim ROAS-om. Pitanje glasi: da li nas ljudi uopšte nalaze kroz ovaj kanal i kako izgleda njihovo ponašanje na sajtu u odnosu na saobraćaj iz drugih izvora. To je merljivo za četiri do šest nedelja. Ciljani ROAS na kanalu koji nema izveštaj na nivou upita i ima poznat merni jaz nije nešto što bih obećao. Ista logika važi i kod raspodele budžeta između postojećih kanala, o čemu sam pisao u poređenju <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-vs-meta" } }} className="underline">Google Ads i Meta oglasa</Link>.
      </p>

      <hr />

      <h2 id="pilot">Kako vodim pilot</h2>
      <p>
        Redosled je uvek isti, i prva dva koraka se dešavaju pre nego što je bilo koji oglas napisan.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Provera podobnosti</strong> <span className="text-gray-500">- entitet, tržište i kategorija, tim redom. Ako kategorija ne prolazi, tu se razgovor završava i to kažem odmah, ne posle otvorenog naloga.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Nalog i merenje pre oglasa</strong> <span className="text-gray-500">- piksel, Conversions API gde ima smisla, UTM šema dogovorena unapred, i provera da analitika beleži isto što i platforma pre nego što se potroši prvi evro.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Strategija context hint-ova</strong> <span className="text-gray-500">- opisujem situacije u kojima kupac razgovara o problemu, ne nazive proizvoda. To je drugačiji način razmišljanja od liste ključnih reči i tu se najviše dobija ili gubi.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Kreativa koja podnosi kontekst</strong> <span className="text-gray-500">- oglas stoji ispod odgovora koji je već rešio pitanje, pa mora da ponudi sledeći korak, a ne da ponovi ono što je korisnik upravo pročitao.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Četiri do šest nedelja učenja</strong> <span className="text-gray-500">- sa analitikom klijenta kao izvorom istine i sa unapred dogovorenim kriterijumom po kom se odlučuje da li se nastavlja ili gasi.</span></div>
          </div>
        </div>
      </div>

      <p>
        Ceo proces, kao i to kako izgleda saradnja, opisao sam na stranici o <Link href="/usluge/chatgpt-ads" className="underline">ChatGPT Ads uslugama</Link>.
      </p>

      <hr />

      <h2 id="faq">Često postavljana pitanja</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li ChatGPT Ads stvarno postoje i gde se prikazuju?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Da, postoje od februara 2026. Prikazuju se kao sponzorisane kartice ispod kraja odgovora u ChatGPT-u, jasno označene i vizuelno odvojene, i to samo ulogovanim korisnicima na Free i Go planovima. Plus, Pro, Business, Enterprise i Edu planovi su bez oglasa, kao i korisnici ispod 18 godina, Temporary Chats i Atlas browser. Ne postoji sidebar plasman, ne postoji display mreža, i ne postoje konverzacioni formati u kojima bi oglas bio deo dijaloga, iako su najavljeni kao namera. Do 31. avgusta 2026. oglasi se prikazuju u 41 tržištu.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Mogu li da se oglašavam iz Srbije?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Ne, zaključno sa 1. septembrom 2026. Srbija nije na listi od 47 zemalja u kojima firma može da otvori advertiser nalog, niti na listi tržišta u kojima se oglasi prikazuju korisnicima. Isto važi za Bosnu i Hercegovinu, Crnu Goru, Severnu Makedoniju, Albaniju i Kosovo. Od ex-Yu tržišta dostupne su Hrvatska i Slovenija, kao članice EU. Firma sa stvarnim pravnim entitetom koji posluje u EU, UK ili SAD može da se oglašava kroz taj entitet. Lažno predstavljanje lokacije biznisa radi zaobilaženja bloka OpenAI izričito zabranjuje kroz policy.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko koštaju ChatGPT Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Minimalni ulazni budžet više ne postoji; ukinut je 5. maja 2026. Naplata ide po CPM, CPC ili oCPC modelu, kroz relevance-weighted second-price aukciju. OpenAI preporučuje početni CPC od 3 do 5 dolara, ali nezavisni testovi sa objavljenim spendom pokazuju realizovan CPC od 1,72 do 12 dolara, zavisno od vertikale. U jednom testu bid od 3 dolara nije doneo nijednu impresiju. Minimalni budžeti kampanje postoje po tržištu, na primer 25 dolara u SAD i 15 funti u UK. Zvanični iznosi u evrima nisu objavljeni ni u jednom izvoru.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako se meri učinak ChatGPT oglasa?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Kroz OpenAI merni piksel sa first-party kolačićem koji traje oko 30 dana, kroz Conversions API sa server-side slanjem i deduplikacijom po event ID-u, i kroz UTM parametre koji prolaze na klik. Native integracije sa GA4 nema, pa saobraćaj u analitici stiže kao običan referral i mora se obeležiti UTM parametrima pre lansiranja. Izveštaj na nivou upita ne postoji, dakle ne vidi se koji je prompt okinuo oglas. Više imenovanih agencija je tokom leta 2026. prijavilo da platforma broji osetno više klikova nego što analitika vidi sesija; uzrok te razlike nije javno utvrđen, a jaz se kroz avgust smanjivao.</p>
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li oglasi utiču na odgovore ChatGPT-a?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <p className="mb-0">Ne. Oglas se pojavljuje kao zasebna, jasno označena kartica ispod završenog odgovora i ne menja sadržaj tog odgovora. Oglašivač ne može da plati da ChatGPT preporuči njegov proizvod unutar teksta odgovora. Ako korisnik iskoristi opciju da oglas ubaci nazad u razgovor i pita nešto o njemu, oglašivač ni tada ne kontroliše šta će model odgovoriti. Oglašivač takođe nikada ne dobija sadržaj razgovora, istoriju, memorije, ime, email, preciznu lokaciju ni IP adresu korisnika, nego samo agregirane podatke o učinku kampanje.</p>
          </div>
        </details>
      </div>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Razmišljate o ChatGPT Ads testu?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">Prvo proveravam da li vaša firma i vaša kategorija uopšte prolaze, pa tek onda pričamo o budžetu. Zakažite besplatnu konsultaciju i za 30 minuta ćete znati da li ovo ima smisla za vas ili nema.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Zakažite besplatnu konsultaciju</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/chatgpt-ads" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">ChatGPT Ads usluge</p>
          <p className="text-xs text-gray-500 mb-0">Provera podobnosti, postavljanje merenja i vođenje pilota kroz prve nedelje.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-vs-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">ChatGPT Ads vs Google Ads</p>
          <p className="text-xs text-gray-500 mb-0">Gde koji kanal pobeđuje i zašto poređenje CTR-a nije poređenje kvaliteta.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-evropa" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">ChatGPT Ads u Evropi</p>
          <p className="text-xs text-gray-500 mb-0">Zašto su pravila u EEA drugačija i šta to menja u strategiji.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako postaviti merenje pre nego što uopšte otvorite nalog na novom kanalu.</p>
        </Link>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">ChatGPT Ads su danas realan, ali uzak kanal: uska lista zemalja, uska lista kategorija, nizak CTR po prirodi formata i merenje koje još sazreva. To ga ne diskvalifikuje, ali ga stavlja tamo gde pripada, u budžet za učenje, a ne u budžet koji mora da se vrati ovog kvartala.</p>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Septembar 2026
      </div>
      <div className="text-sm text-gray-500">
        <Link href="/o-meni" className="underline">
          Autor: Slobodan Jelisavac, Google Ads Consultant
        </Link>
      </div>
    </>
  );
}
