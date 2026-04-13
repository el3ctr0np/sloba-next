import { Link } from "@/i18n/navigation";

export default function YouTubeOglasavanjeVodicSR() {
  return (
    <>
      {/* Hero summary box */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          YouTube je drugi najveći search engine na svetu sa 2.5 milijardi mesečnih korisnika. Video oglasi konvertuju
          bolje od teksta jer kombinuju vizual, zvuk i emociju. Prosečni CPV u Srbiji je 2-3x niži nego u US/UK —
          što znači da je sada idealno vreme za testiranje video kampanja.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">6</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">formata video oglasa</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">€0.02</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">prosečni CPV</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">2.5B+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">mesečnih korisnika</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Shorts</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">novi format 2026</p>
          </div>
        </div>
      </div>

      <p>
        Ako se pitate da li YouTube oglašavanje ima smisla za vaš biznis — kratki odgovor je da, gotovo uvek.
        YouTube je platforma na kojoj ljudi provode više vremena nego na bilo kojoj TV stanici, traže rešenja za
        probleme, gledaju recenzije proizvoda, i donose odluke o kupovini. Video format vam omogućava da
        komunicirate na način koji tekst jednostavno ne može — kroz demonstraciju, emociju i priču.
      </p>
      <p>
        U ovom vodiču pokrićemo sve što trebate znati: od formata oglasa i troškova, kroz targeting opcije i
        kreiranje kampanja, do merenja rezultata i izbegavanja najčešćih grešaka. Bazirano na iskustvu
        sa upravljanjem video kampanjama za 10+ klijenata na tržištima od Srbije do UK.
      </p>

      <hr />

      {/* ── Sekcija 1: Zašto YouTube ── */}
      <h2>Šta je YouTube oglašavanje i zašto je bitno u 2026</h2>
      <p>
        YouTube oglašavanje podrazumeva prikazivanje video oglasa korisnicima na YouTube platformi i
        partnerskim sajtovima putem <a href="https://support.google.com/google-ads/answer/6340491?hl=en" target="_blank" rel="noopener noreferrer" className="underline">Google Ads Video kampanja</a>.
        Za razliku od Search oglasa koji se oslanjaju na tekst, video format kombinuje pokretnu sliku,
        zvuk i tekst u jedinstven format koji privlači pažnju i gradi emocionalnu vezu.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Činjenica #1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Drugi najveći search engine</h3>
          <p className="text-sm text-gray-600 mb-0">YouTube ima 2.5 milijardi mesečnih aktivnih korisnika i svaki dan se gleda preko milijardu sati videa. Više ljudi traži informacije na YouTube-u nego na Bing-u, Yahoo-u i svim ostalim pretraživačima zajedno.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Činjenica #2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Shorts eksplozija</h3>
          <p className="text-sm text-gray-600 mb-0">YouTube Shorts generiše 70+ milijardi dnevnih pregleda. Vertikalni kratki format je najbrže rastući tip sadržaja, a Shorts Ads su novi format koji brendovi tek počinju da koriste — dok je konkurencija još niska.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Činjenica #3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Jeftino u Srbiji</h3>
          <p className="text-sm text-gray-600 mb-0">CPV (cena po pregledu) u Srbiji je 2-3 puta niži nego u SAD ili UK. To znači da za isti budžet dobijate značajno više pregleda — idealna prilika za testiranje pre nego što se cene povećaju.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Činjenica #4</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Full-funnel platforma</h3>
          <p className="text-sm text-gray-600 mb-0">YouTube pokriva ceo marketing levak: od brand awareness (bumper oglasi), kroz consideration (in-stream), do konverzija (action kampanje sa CTA overlay-em).</p>
        </div>
      </div>

      <p>
        Za više o tome kako se YouTube uklapa u širu strategiju digitalnog oglašavanja, pogledajte naš{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-vs-meta" } }} className="underline font-medium">
          vodič za Google Ads vs Meta Ads
        </Link>.
      </p>

      <hr />

      {/* ── Sekcija 2: 6 formata ── */}
      <h2>6 formata YouTube oglasa — koji za šta</h2>
      <p>
        YouTube nudi šest glavnih formata oglasa, svaki dizajniran za različite ciljeve. Izbor formata
        direktno utiče na troškove, doseg i tip interakcije sa publikom. Evo pregleda svakog sa{" "}
        <a href="https://support.google.com/youtube/answer/2375464?hl=en" target="_blank" rel="noopener noreferrer" className="underline">
          zvaničnom Google dokumentacijom
        </a>.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Format</th>
              <th className="py-3 px-4 font-heading font-semibold">Trajanje</th>
              <th className="py-3 px-4 font-heading font-semibold">Naplata</th>
              <th className="py-3 px-4 font-heading font-semibold">Najbolje za</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">Skippable In-Stream</td>
              <td className="py-3 px-4">Bez limita (skip posle 5s)</td>
              <td className="py-3 px-4">CPV (plaćate za 30s+ view)</td>
              <td className="py-3 px-4">Consideration, engagement</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">Non-Skippable In-Stream</td>
              <td className="py-3 px-4">Do 15 sekundi</td>
              <td className="py-3 px-4">CPM (po 1,000 impresija)</td>
              <td className="py-3 px-4">Brand awareness, kompletna poruka</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">Bumper Ads</td>
              <td className="py-3 px-4">Do 6 sekundi</td>
              <td className="py-3 px-4">CPM</td>
              <td className="py-3 px-4">Reach, brand recall</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">In-Feed Video Ads</td>
              <td className="py-3 px-4">Bez limita</td>
              <td className="py-3 px-4">CPC (po kliku na thumbnail)</td>
              <td className="py-3 px-4">Discovery, YouTube pretraga</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">YouTube Shorts Ads</td>
              <td className="py-3 px-4">Do 60 sekundi (vertikalni)</td>
              <td className="py-3 px-4">CPV/CPM</td>
              <td className="py-3 px-4">Mobile-first, mlađa demografija</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">Masthead</td>
              <td className="py-3 px-4">Varijabilno</td>
              <td className="py-3 px-4">CPD (po danu)</td>
              <td className="py-3 px-4">Masivni reach, veliki brendovi</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Moja preporuka za početnike</p>
        <p className="text-blue-800 text-sm mb-0">
          Počnite sa <strong>Skippable In-Stream</strong> formatom. Plaćate samo kada neko odgleda
          30+ sekundi vašeg videa — što znači da plaćate isključivo za zainteresovane gledaoce.
          Idealno za testiranje sa budžetom od €300-500 mesečno.
        </p>
      </div>

      <hr />

      {/* ── Sekcija 3: Troškovi ── */}
      <h2>Koliko košta YouTube oglašavanje</h2>
      <p>
        Troškovi YouTube oglašavanja zavise od formata, targetinga, industrije i geografije.
        Evo realnih brojki iz prakse i industrijskog proseka:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Metrika</th>
              <th className="py-3 px-4 font-heading font-semibold">Globalni prosek</th>
              <th className="py-3 px-4 font-heading font-semibold">Srbija (procena)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">CPV (cena po pregledu)</td>
              <td className="py-3 px-4">€0.02 – €0.03</td>
              <td className="py-3 px-4">€0.01 – €0.02</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">CPM (cena po 1,000 impresija)</td>
              <td className="py-3 px-4">€5 – €10</td>
              <td className="py-3 px-4">€2 – €5</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">Shorts CPV</td>
              <td className="py-3 px-4">€0.10 – €0.30</td>
              <td className="py-3 px-4">€0.05 – €0.15</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">CPC (In-Feed format)</td>
              <td className="py-3 px-4">~€0.49</td>
              <td className="py-3 px-4">€0.15 – €0.35</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Starter budžet</p>
          <p className="text-2xl font-heading font-bold text-slate-900 mb-1">€300-500</p>
          <p className="text-sm text-gray-600 mb-0">Za prvi mesec testiranja. Dovoljno za 10,000-25,000 pregleda i početne podatke o publici.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Optimalni budžet</p>
          <p className="text-2xl font-heading font-bold text-slate-900 mb-1">€800-1,500</p>
          <p className="text-sm text-gray-600 mb-0">Za ozbiljne kampanje sa retargetingom, A/B testiranjem kreativa i optimizacijom publike.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Minimum dnevno</p>
          <p className="text-2xl font-heading font-bold text-slate-900 mb-1">€5-10</p>
          <p className="text-sm text-gray-600 mb-0">Google Ads dozvoljava dnevne budžete od €1, ali ispod €5 nemate dovoljno podataka za optimizaciju.</p>
        </div>
      </div>

      <p>
        <strong>Važno za srpsko tržište:</strong> Srbija je značajno jeftinija od razvijenih tržišta
        jer je konkurencija za YouTube Ads oglasni prostor niža. Ovo je prozor koji neće trajati zauvek —
        kako više oglašivača počne da koristi video format, cene će rasti.
      </p>

      <hr />

      {/* ── Sekcija 4: Targeting ── */}
      <h2>Targeting opcije — kako doći do prave publike</h2>
      <p>
        Snaga YouTube oglašavanja leži u preciznom targetiranju. Google Ads nudi{" "}
        <a href="https://support.google.com/youtube/answer/2454017?hl=en" target="_blank" rel="noopener noreferrer" className="underline">
          7 glavnih tipova targetiranja
        </a>{" "}
        za video kampanje:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">1. Demografski targeting</h3>
          <p className="text-sm text-gray-600 mb-0">Starost, pol, roditeljski status, prihod domaćinstva, lokacija, jezik. Osnova svake kampanje.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">2. Affinity Segments</h3>
          <p className="text-sm text-gray-600 mb-0">Ljudi sa dugoročnim interesovanjima: "ljubitelji sporta", "tech entuzijasti", "ljubitelji putovanja". Idealno za awareness kampanje.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">3. In-Market Segments</h3>
          <p className="text-sm text-gray-600 mb-0">Ljudi koji aktivno istražuju kupovinu: "kupci automobila", "tražioci osiguranja". Bliže konverziji od Affinity segmenata.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">4. Custom Segments</h3>
          <p className="text-sm text-gray-600 mb-0">Kreirajte vlastite publike na osnovu ključnih reči koje su korisnici nedavno tražili na Google-u. Najmoćniji targeting tip za Intent-based kampanje.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">5. Placements</h3>
          <p className="text-sm text-gray-600 mb-0">Izaberite specifične YouTube kanale, videa ili čak kategorije sajtova gde želite da se vaš oglas prikaže. Kontrola nad kontekstom.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">6. Topics</h3>
          <p className="text-sm text-gray-600 mb-0">Tematske kategorije: "kuvanje", "fitness", "tehnologija". Šire od Placements-a, ali i dalje kontekstualno relevantno.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card md:col-span-2">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">7. Remarketing (vaša publika)</h3>
          <p className="text-sm text-gray-600 mb-0">
            Prikažite oglase ljudima koji su već posetili vaš sajt, gledali vaše videe, ili interagovali sa vašim YouTube kanalom.
            Najisplativiji targeting — više o ovome u našem{" "}
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="underline font-medium">
              vodiču za remarketing kampanje
            </Link>.
          </p>
        </div>
      </div>

      <hr />

      {/* ── Sekcija 5: Korak po korak ── */}
      <h2>Kako kreirati prvu YouTube kampanju — korak po korak</h2>
      <p>
        Evo pojednostavljenog procesa za kreiranje prve video kampanje u Google Ads-u. Za detaljne
        instrukcije, pogledajte{" "}
        <a href="https://support.google.com/google-ads/answer/2375497?hl=en" target="_blank" rel="noopener noreferrer" className="underline">
          Googleov zvanični vodič za kreiranje Video kampanja
        </a>.
      </p>

      <div className="space-y-3 my-6">
        {[
          { step: "1", title: "Otvorite Google Ads → Nova kampanja → Video", desc: "Izaberite tip kampanje Video iz menija. Ako nemate Google Ads nalog, kreiranje je besplatno." },
          { step: "2", title: "Izaberite cilj kampanje", desc: "Sales, Leads, Website Traffic, ili Awareness and Consideration. Cilj određuje koje formate i bidding opcije dobijate." },
          { step: "3", title: "Izaberite format oglasa", desc: "Skippable In-Stream za engagement, Bumper za awareness, Shorts za mobile publiku. Počnite sa jednim formatom." },
          { step: "4", title: "Postavite budžet i bidding", desc: "Dnevni ili ukupni budžet. Za početak: Target CPV ili Maximize Conversions. Minimum €5-10 dnevno za relevantne podatke." },
          { step: "5", title: "Definišite targeting", desc: "Lokacija (Srbija), jezik, demografija + minimum jedan audience signal (In-Market, Custom Segment, ili Remarketing lista)." },
          { step: "6", title: "Upload-ujte video", desc: "Video mora biti na vašem YouTube kanalu (može biti Unlisted). Minimalni kvalitet: 720p, horizontalni (16:9) ili vertikalni (9:16) za Shorts." },
          { step: "7", title: "Dodajte CTA i companion banner", desc: "Call-to-Action overlay sa tekstom (npr. Saznajte više) i URL-om. Companion banner (300x60px) pojačava brending." },
          { step: "8", title: "Pokrenite i pratite", desc: "Prvih 7 dana: ne menjajte ništa — pustite algoritam da nauči. Posle 7 dana: analizirajte View Rate, CPV i konverzije." },
        ].map((item) => (
          <div key={item.step} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4 shadow-card">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {item.step}
            </span>
            <div>
              <p className="font-heading font-bold text-sm mb-1">{item.title}</p>
              <p className="text-sm text-gray-600 mb-0">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <hr />

      {/* ── Sekcija 6: Shorts ── */}
      <h2>YouTube Shorts Ads — najbrže rastući format u 2026</h2>
      <p>
        YouTube Shorts Ads su vertikalni, fullscreen video oglasi koji se prikazuju između organskih
        Shorts videa. Sa 70+ milijardi dnevnih pregleda, Shorts je najbrže rastući format na platformi.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-6 md:p-8 my-6">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Shorts Ads — ključne činjenice</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-heading font-bold mb-2">Specifikacije:</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Format: vertikalni (9:16)</li>
              <li>Trajanje: do 60 sekundi</li>
              <li>Prvih 3 sekunde su ključne za hook</li>
              <li>Sound-on po default-u (za razliku od Feed-a)</li>
            </ul>
          </div>
          <div>
            <p className="font-heading font-bold mb-2">Novosti za 2026:</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Product Ratings sada dostupni u Shorts (April 2026)</li>
              <li>Shorts Ads za eCommerce — prikaz ocena i cena</li>
              <li>Idealno za: brand awareness, mlađa demografija, impulzivne kupovine</li>
              <li>
                Više o ovom update-u u našim{" "}
                <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-novosti-2026" } }} className="underline text-yellow-400">
                  Google Ads novostima za 2026
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Sekcija 7: eCommerce vs B2B ── */}
      <h2>YouTube oglašavanje za eCommerce vs B2B</h2>
      <p>
        Strategija za YouTube Ads se značajno razlikuje u zavisnosti od toga da li prodajete proizvode
        potrošačima ili usluge firmama.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-green-200 rounded-xl p-5">
          <p className="text-xs uppercase tracking-wider text-green-600 font-bold mb-3">eCommerce</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-0">
            <li><strong>Formati:</strong> Shorts Ads + Skippable In-Stream</li>
            <li><strong>Kreativa:</strong> Product demo videi, unboxing, before/after</li>
            <li><strong>Targeting:</strong> In-Market + Custom Segments (pretrage proizvoda)</li>
            <li><strong>Remarketing:</strong> Cart abandoners, product page viewers</li>
            <li><strong>KPI:</strong> ROAS, Purchase conversions, View-through conversions</li>
            <li><strong>Budžet:</strong> €500-1,500/mesečno</li>
          </ul>
        </div>
        <div className="bg-white border-2 border-blue-200 rounded-xl p-5">
          <p className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-3">B2B</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-0">
            <li><strong>Formati:</strong> Skippable In-Stream + In-Feed</li>
            <li><strong>Kreativa:</strong> Thought leadership, case study videi, webinar promo</li>
            <li><strong>Targeting:</strong> Custom Segments (industrija-specifične pretrage) + Placements</li>
            <li><strong>Remarketing:</strong> Website visitors, YouTube viewers</li>
            <li><strong>KPI:</strong> Leads, webinar registracije, content engagement</li>
            <li><strong>Budžet:</strong> €800-2,000/mesečno</li>
          </ul>
        </div>
      </div>

      <hr />

      {/* ── Sekcija 8: 7 grešaka ── */}
      <h2>7 grešaka koje vidim u YouTube kampanjama</h2>
      <p>
        Upravljajući video kampanjama za klijente na više tržišta, ovi problemi se ponavljaju najčešće.
        Za više o opštim Google Ads greškama, pogledajte naš{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="underline font-medium">
          vodič sa 20 najskupljih propusta
        </Link>.
      </p>

      <div className="space-y-4 my-6">
        {[
          { num: "1", title: "Predugački videi za awareness kampanje", desc: "Bumper i awareness formati zahtevaju kratke, upečatljive poruke. Video od 3 minuta za awareness kampanju = bacanje budžeta. Držite se 15-30 sekundi za top-of-funnel." },
          { num: "2", title: "Nema hook-a u prvih 5 sekundi", desc: "Kod Skippable In-Stream formata, imate 5 sekundi pre nego što korisnik može da preskoči. Ako počnete sa logom i sporim introm — izgubili ste ga. Počnite sa problemom ili pitanjem." },
          { num: "3", title: "Preširoko targetiranje", desc: "Srbija, svi uzrasti, svi interesi — to nije strategija. Što je targeting uži i relevantniji, to je CPV niži i engagement viši. Koristite kombinaciju Audience + Content targeting-a." },
          { num: "4", title: "Nema remarketing strategije", desc: "YouTube remarketing (ljudi koji su gledali vaše videe) je najjeftiniji i najefikasniji kanal. Ako nemate remarketing liste — gubite 80% vrednosti video kampanja." },
          { num: "5", title: "Isti video za sve faze funnela", desc: "Awareness video nije isti kao conversion video. Gornji deo levka traži emociju i priču. Donji deo traži ponudu, cenu i CTA. Napravite minimum 2 verzije." },
          { num: "6", title: "Ignorisanje YouTube Analytics podataka", desc: "Audience Retention graf vam pokazuje tačno gde ljudi prestaju da gledaju. Ako 70% otpadne na sekundi 8, znate da vam je intro problem. Koristite ove podatke za optimizaciju kreative." },
          { num: "7", title: "Nema CTA u samom videu", desc: "CTA overlay u Google Ads-u nije dovoljan. Uključite jasni call-to-action u sam video sadržaj: Posetite naš sajt, Koristite kod YOUTUBE20, Link je u opisu." },
        ].map((item) => (
          <div key={item.num} className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
            <p className="font-heading font-bold mb-2">Greška #{item.num}: {item.title}</p>
            <p className="text-sm text-gray-600 mb-0">{item.desc}</p>
          </div>
        ))}
      </div>

      <hr />

      {/* ── Sekcija 9: Merenje uspeha ── */}
      <h2>Kako meriti uspeh YouTube kampanja</h2>
      <p>
        YouTube kampanje zahtevaju drugačije metrike od Search kampanja. Evo ključnih KPI-jeva i benchmark-ova.
        Za pravilno praćenje konverzija, pogledajte naš{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="underline font-medium">
          vodič za Conversion Tracking
        </Link>.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Metrika</th>
              <th className="py-3 px-4 font-heading font-semibold">Šta meri</th>
              <th className="py-3 px-4 font-heading font-semibold">Benchmark</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">View Rate</td>
              <td className="py-3 px-4">% ljudi koji odgledaju 30s+ ili ceo video</td>
              <td className="py-3 px-4">15-30% (dobar), 30%+ (odličan)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">CPV</td>
              <td className="py-3 px-4">Cena po kvalifikovanom pregledu</td>
              <td className="py-3 px-4">€0.02-0.05 (globalni prosek)</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">Watch Time</td>
              <td className="py-3 px-4">Ukupno vreme gledanja vašeg oglasa</td>
              <td className="py-3 px-4">Raste = dobro, signalizira relevantnost</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">Earned Actions</td>
              <td className="py-3 px-4">Besplatne interakcije (lajkovi, share, subscribe)</td>
              <td className="py-3 px-4">Bonus metrički, nije primarni KPI</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">Conversions</td>
              <td className="py-3 px-4">Kupovine, lead-ovi, registracije</td>
              <td className="py-3 px-4">Zavisi od industrije i funnela</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">Brand Lift</td>
              <td className="py-3 px-4">Porast brand awareness-a (ankete)</td>
              <td className="py-3 px-4">Dostupno za veće budžete (€5,000+)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      {/* ── Sekcija 10: FAQ ── */}
      <h2>FAQ — Često postavljana pitanja o YouTube oglašavanju</h2>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Koliko košta YouTube reklama?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Prosečni CPV (cena po pregledu) je €0.02-0.03 globalno, a u Srbiji još niže — oko €0.01-0.02. Minimalni dnevni budžet je €5, ali za relevantne podatke preporučujemo minimum €10 dnevno. Starter mesečni budžet za testiranje je €300-500."
                }
              },
              {
                "@type": "Question",
                name: "Da li je YouTube oglašavanje efikasno za male firme?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Da, posebno uz fokus na remarketing (prikaz oglasa ljudima koji su već posetili vaš sajt) i lokalni targeting. Male firme mogu početi sa €300 mesečno i dobiti hiljade kvalitetnih pregleda. Ključ je u preciznom targetiranju, ne u veličini budžeta."
                }
              },
              {
                "@type": "Question",
                name: "Koji format YouTube oglasa je najbolji za početnike?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Skippable In-Stream format je idealan za početnike jer plaćate samo za preglede duže od 30 sekundi. Ako korisnik preskoči posle 5 sekundi, ne plaćate ništa. To znači da vaš budžet ide isključivo na zainteresovane gledaoce."
                }
              },
              {
                "@type": "Question",
                name: "Da li mi treba profesionalni video za YouTube oglase?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ne obavezno. Kvalitet utiče na rezultate, ali Shorts format dozvoljava casual, mobilnim telefonom snimljeni sadržaj koji može biti veoma efikasan. Za In-Stream formate preporučujemo minimum poluprofesinalan kvalitet — dobar zvuk je važniji od savršene slike."
                }
              },
              {
                "@type": "Question",
                name: "Koliko traje da se vide rezultati od YouTube kampanja?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Awareness kampanje: 2-4 nedelje za vidljive rezultate u brand lift-u. Conversion kampanje: 4-8 nedelja za stabilne podatke o konverzijama. Algoritmu treba 7-14 dana učenja pre nego što počne efikasno da optimizuje."
                }
              },
              {
                "@type": "Question",
                name: "Da li YouTube Ads rade za srpsko tržište?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Da. CPV u Srbiji je 2-3 puta niži od US/UK tržišta, što znači više pregleda za isti budžet. Konkurencija za oglasni prostor je niža, a penetracija YouTube-a u Srbiji je visoka — većina internet korisnika redovno koristi platformu."
                }
              },
              {
                "@type": "Question",
                name: "Šta su YouTube Shorts Ads?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "YouTube Shorts Ads su vertikalni, fullscreen video oglasi koji se prikazuju između organskih Shorts videa u mobilnoj aplikaciji. Format raste brzo — Shorts imaju 70+ milijardi dnevnih pregleda. Idealni su za brand awareness i dosezanje mlađe demografije."
                }
              },
              {
                "@type": "Question",
                name: "Mogu li da koristim YouTube Ads bez YouTube kanala?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tehnički da — možete koristiti Unlisted video. Ali preporučujemo kreiranje kanala jer vam omogućava remarketing listu YouTube gledalaca, analitiku, i gradi kredibilitet brenda. Kanal je besplatan i postavlja se za 10 minuta."
                }
              }
            ]
          })
        }}
      />

      <div className="space-y-3 my-6">
        {[
          { q: "Koliko košta YouTube reklama?", a: "Prosečni CPV (cena po pregledu) je €0.02-0.03 globalno, a u Srbiji još niže — oko €0.01-0.02. Minimalni dnevni budžet je €5, ali za relevantne podatke preporučujemo minimum €10 dnevno. Starter mesečni budžet za testiranje je €300-500." },
          { q: "Da li je YouTube oglašavanje efikasno za male firme?", a: "Da, posebno uz fokus na remarketing (prikaz oglasa ljudima koji su već posetili vaš sajt) i lokalni targeting. Male firme mogu početi sa €300 mesečno i dobiti hiljade kvalitetnih pregleda. Ključ je u preciznom targetiranju, ne u veličini budžeta." },
          { q: "Koji format YouTube oglasa je najbolji za početnike?", a: "Skippable In-Stream format je idealan za početnike jer plaćate samo za preglede duže od 30 sekundi. Ako korisnik preskoči posle 5 sekundi, ne plaćate ništa. To znači da vaš budžet ide isključivo na zainteresovane gledaoce." },
          { q: "Da li mi treba profesionalni video za YouTube oglase?", a: "Ne obavezno. Kvalitet utiče na rezultate, ali Shorts format dozvoljava casual, mobilnim telefonom snimljeni sadržaj koji može biti veoma efikasan. Za In-Stream formate preporučujemo minimum poluprofesionalan kvalitet — dobar zvuk je važniji od savršene slike." },
          { q: "Koliko traje da se vide rezultati od YouTube kampanja?", a: "Awareness kampanje: 2-4 nedelje za vidljive rezultate u brand lift-u. Conversion kampanje: 4-8 nedelja za stabilne podatke o konverzijama. Algoritmu treba 7-14 dana učenja pre nego što počne efikasno da optimizuje." },
          { q: "Da li YouTube Ads rade za srpsko tržište?", a: "Da. CPV u Srbiji je 2-3 puta niži od US/UK tržišta, što znači više pregleda za isti budžet. Konkurencija za oglasni prostor je niža, a penetracija YouTube-a u Srbiji je visoka — većina internet korisnika redovno koristi platformu." },
          { q: "Šta su YouTube Shorts Ads?", a: "YouTube Shorts Ads su vertikalni, fullscreen video oglasi koji se prikazuju između organskih Shorts videa u mobilnoj aplikaciji. Format raste brzo — Shorts imaju 70+ milijardi dnevnih pregleda. Idealni su za brand awareness i dosezanje mlađe demografije." },
          { q: "Mogu li da koristim YouTube Ads bez YouTube kanala?", a: "Tehnički da — možete koristiti Unlisted video. Ali preporučujemo kreiranje kanala jer vam omogućava remarketing listu YouTube gledalaca, analitiku, i gradi kredibilitet brenda. Kanal je besplatan i postavlja se za 10 minuta." },
        ].map((item, i) => (
          <details key={i} className="bg-white border-2 border-gray-200 rounded-xl group" {...(i === 0 ? { open: true } : {})}>
            <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
              {item.q}
              <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
            </summary>
            <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
              {item.a}
            </div>
          </details>
        ))}
      </div>

      <hr />

      <p>
        Detaljnija uputstva za{" "}
        <a href="https://support.google.com/youtube/answer/2375498?hl=en" target="_blank" rel="noopener noreferrer" className="underline">
          kreiranje efektivnih video oglasa
        </a>{" "}
        možete naći u zvaničnoj Google dokumentaciji. A za kompletnu sliku o svim Google Ads promenama u 2026, pogledajte naš{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-novosti-2026" } }} className="underline font-medium">
          mesečno ažuriran vodič za Google Ads novosti
        </Link>.
      </p>
      <p>
        Za više o našim YouTube oglašavačkim uslugama, posetite{" "}
        <Link href="/usluge/youtube-oglasi" className="underline font-medium">
          stranicu za YouTube Ads upravljanje
        </Link>.
      </p>
    </>
  );
}
