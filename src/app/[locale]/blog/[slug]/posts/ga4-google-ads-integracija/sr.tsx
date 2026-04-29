import { Link } from "@/i18n/navigation";

export default function GA4GoogleAdsIntegracijaSR() {
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Kako integrisati GA4 sa Google Ads (2026)",
    "description": "Kompletan 7-koračni vodič za povezivanje GA4 property-ja sa Google Ads nalogom, import key events kao konverzije i prenos audience-a za remarketing.",
    "totalTime": "PT30M",
    "step": [
      { "@type": "HowToStep", "name": "Poveži GA4 property sa Google Ads nalogom", "text": "U GA4: Admin → Product links → Google Ads links → Link. Odaberi MCC/Client nalog i čekiraj 'Enable Personalized Advertising' i 'Enable Auto-Tagging'." },
      { "@type": "HowToStep", "name": "Uključi Auto-Tagging", "text": "U Google Ads: Admin → Account settings → Auto-tagging → Tag the URL that people click through. Obavezno za ispravan GCLID flow." },
      { "@type": "HowToStep", "name": "Podesi Key Events u GA4", "text": "U GA4: Admin → Events → Mark as key event. Označi purchase, generate_lead, form_submit ili custom event kao key event." },
      { "@type": "HowToStep", "name": "Importuj GA4 Key Events kao Google Ads konverzije", "text": "Google Ads: Tools → Data Manager → Import conversions → Google Analytics 4 properties → odaberi property → odaberi key events → Import." },
      { "@type": "HowToStep", "name": "Odredi Primary vs Secondary konverzije", "text": "Google Ads: Tools → Conversions → označi jednu konverziju kao Primary (za bidding), ostale kao Secondary (observation only). Count: 'One' za leads, 'Every' za eCommerce." },
      { "@type": "HowToStep", "name": "Prenesi GA4 audiences u Google Ads", "text": "GA4: Admin → Audiences → kreiraj audience → automatski se prenosi u Google Ads ako je link aktivan. Minimum 1,000 korisnika za remarketing." },
      { "@type": "HowToStep", "name": "Verifikuj data flow", "text": "Čekaj 24-48h. Proveri Google Ads → Conversions → status 'Recording conversions'. Proveri kolonu 'Conv. (all)' na kampanji — treba da vidiš brojeve." }
    ]
  };

  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko — GA4 + Google Ads 2026</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          GA4 + Google Ads integracija je kičma modernog Smart Bidding-a. Bez ispravnog linka, import-a key events i Consent Mode v2, algoritam licitira naslepo. Ovaj vodič prolazi kroz 7 tačnih koraka — od linkovanja property-ja do verifikacije konverzija 48h kasnije.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">7</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">koraka setup-a</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">30 min</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">vreme za kompletnu integraciju</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">24-48h</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">da konverzije počnu da se prikazuju</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">+30%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">tipičan lift Smart Bidding-a</p>
          </div>
        </div>
        <p className="text-sm text-slate-400 mt-6 mb-0 border-t border-slate-700 pt-4">
          Bazirano na iskustvu sa 10+ naloga (UK, Srbija, DACH) i zvaničnoj Google dokumentaciji (2024–2026).
        </p>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">Brzi odgovor</p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Šta je GA4 + Google Ads integracija?
        </p>
        <p className="text-sm md:text-base text-gray-700 mb-0 leading-relaxed">
          <strong>GA4 + Google Ads integracija</strong> je dvosmerno povezivanje Google Analytics 4 property-ja i Google Ads naloga koje omogućava import konverzija (key events) iz GA4 u Google Ads, prenos audience-a za remarketing, i bogatiji set signala za Smart Bidding algoritam. Link se aktivira u GA4 Admin → Product links, a verifikuje kroz 24–48h.
        </p>
      </div>

      <p>
        Od jula 2023, kada je Universal Analytics ugašen, GA4 je jedini Google-ov analytics stack — i jedini izvor GA konverzija za Google Ads. Ali link između GA4 i Google Ads-a je i dalje najčešće loše postavljen deo tracking infrastructure-a na nalozima koje preuzimam.
      </p>
      <p>
        Tipičan simptom: klijent ima GA4, vidi purchase events, ima Google Ads kampanje — ali kada pogledate Google Ads Conversions stranicu, ili ih nema uopšte, ili ima &quot;Google Ads conversion&quot; + &quot;GA4 purchase&quot; u isto vreme što generiše duplikate. Smart Bidding pokušava da optimizuje protiv zbunjene metrike i rezultati stoje.
      </p>
      <p>
        Ovaj vodič pokriva tačan 7-koračni setup koji radi u 2026 — sa Consent Mode v2 obaveznim od marta 2024, Data Manager izmenama u Google Ads UI-ju, i najčešćim greškama koje vidim na nalozima iz Srbije i UK-a.
      </p>

      <hr />

      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#sta-je-ga4-link" className="text-sm text-gray-700 hover:text-primary underline">Šta je GA4 + Google Ads integracija</a></li>
          <li><a href="#preduslovi" className="text-sm text-gray-700 hover:text-primary underline">Preduslovi (pre nego krenete)</a></li>
          <li><a href="#koraci" className="text-sm text-gray-700 hover:text-primary underline">7 koraka setup-a</a></li>
          <li><a href="#event-mapping" className="text-sm text-gray-700 hover:text-primary underline">GA4 event → Google Ads action mapping</a></li>
          <li><a href="#attribution" className="text-sm text-gray-700 hover:text-primary underline">Attribution model: Ads-preferred vs Data-driven</a></li>
          <li><a href="#consent-mode" className="text-sm text-gray-700 hover:text-primary underline">Consent Mode v2 (EU obavezno)</a></li>
          <li><a href="#greske" className="text-sm text-gray-700 hover:text-primary underline">Najčešće greške</a></li>
          <li><a href="#troubleshooting" className="text-sm text-gray-700 hover:text-primary underline">Troubleshooting</a></li>
          <li><a href="#faq" className="text-sm text-gray-700 hover:text-primary underline">Najčešća pitanja</a></li>
          <li><a href="#povezani-vodici" className="text-sm text-gray-700 hover:text-primary underline">Povezani vodiči</a></li>
        </ol>
      </nav>

      <h2 id="sta-je-ga4-link">Šta je GA4 + Google Ads integracija</h2>
      <p>
        Integracija je tehnički &quot;Google Ads link&quot; između GA4 property-ja i Google Ads naloga. Kada je aktivan, između dve platforme teku tri vrste podataka:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">1. Konverzije</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">GA4 Key Events → Google Ads</h3>
          <p className="text-sm text-gray-600 mb-0">Key event iz GA4 (purchase, generate_lead) možete importovati kao Google Ads konverziju. Smart Bidding koristi ovu konverziju za optimizaciju.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">2. Audiences</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">GA4 → Google Ads remarketing</h3>
          <p className="text-sm text-gray-600 mb-0">Audience kreiran u GA4 (&quot;cart abandoners&quot;, &quot;30-day viewers&quot;) se automatski prenosi u Google Ads Audience Manager.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">3. Session data</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Google Ads click data → GA4</h3>
          <p className="text-sm text-gray-600 mb-0">GCLID (Google Click ID) se mapira u GA4 pa u Acquisition reportu vidite kampanju, ad grupu i keyword koji je doveo korisnika.</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Link ≠ Import konverzija</p>
        <p className="text-sm text-yellow-900 mb-0">
          Linkovanje property-ja samo omogućava <em>mogućnost</em> import-a. Konverzije se ne importuju automatski — treba ih eksplicitno importovati kroz Data Manager. Većina grešaka koje vidim je: klijent linkovao GA4, pretpostavio da je gotovo, a konverzije nikad nisu importovane.
        </p>
      </div>

      <hr />

      <h2 id="preduslovi">Preduslovi (pre nego krenete)</h2>
      <p>
        Pre 7 koraka, proverite da imate:
      </p>

      <ul>
        <li><strong>Admin pristup GA4 property-ju</strong> — &quot;Edit&quot; role nije dovoljan za linkovanje</li>
        <li><strong>Admin pristup Google Ads nalogu</strong> — standard nije dovoljan, treba admin za Link step</li>
        <li><strong>Aktivan GA4 property</strong> sa minimum 14 dana podataka i barem jednim definisanim key event-om</li>
        <li><strong>Enhanced Measurement uključen</strong> u GA4 (Admin → Data Streams → Web stream → Enhanced measurement)</li>
        <li><strong>Google Tag (gtag.js) ili GTM</strong> ispravno postavljen na sajtu — proverite kroz Tag Assistant</li>
        <li><strong>Consent Mode v2</strong> implementiran ako ciljate EU tržište (obavezno od marta 2024)</li>
      </ul>

      <p>
        Za eCommerce: takođe verifikujte da se <code>purchase</code> event šalje sa ispravnom <code>value</code> i <code>currency</code> parametrima. Bez vrednosti, Smart Bidding ne može da radi tROAS optimizaciju.
      </p>

      <hr />

      <h2 id="koraci">7 koraka setup-a</h2>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">1</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Poveži GA4 property sa Google Ads nalogom</h3>
            <p className="text-sm text-gray-600 mb-2"><strong>Gde:</strong> GA4 → Admin → Property → Product links → Google Ads links → Link</p>
            <p className="text-sm text-gray-600 mb-2">Odaberite Google Ads Customer ID (nalog ili MCC). Obavezno čekirajte obe opcije:</p>
            <ul className="text-sm text-gray-600 mb-2">
              <li><strong>Enable Personalized Advertising</strong> — bez ovoga audience transfer neće raditi</li>
              <li><strong>Enable Auto-Tagging</strong> — dodaje GCLID na sve Google Ads linkove automatski</li>
            </ul>
            <p className="text-sm text-gray-600 mb-0">Klik &quot;Submit&quot;. Status: &quot;Linked&quot; treba da se pojavi odmah.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">2</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Uključi Auto-Tagging u Google Ads</h3>
            <p className="text-sm text-gray-600 mb-2"><strong>Gde:</strong> Google Ads → Admin → Account settings → Auto-tagging</p>
            <p className="text-sm text-gray-600 mb-2">Čekiraj &quot;Tag the URL that people click through from my ad&quot;. Ovo je obično uključeno, ali proveravam kod svakog novog naloga — našao sam 3 naloga u zadnjih godinu dana gde je bilo isključeno.</p>
            <p className="text-sm text-gray-600 mb-0">Bez auto-tagging-a, GCLID se ne prikači na URL i attribution između Google Ads-a i GA4 ne funkcioniše.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">3</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Podesi Key Events u GA4</h3>
            <p className="text-sm text-gray-600 mb-2"><strong>Gde:</strong> GA4 → Admin → Events → Mark as key event (toggle)</p>
            <p className="text-sm text-gray-600 mb-2">Označite kao key event:</p>
            <ul className="text-sm text-gray-600 mb-2">
              <li><strong>eCommerce:</strong> <code>purchase</code> (sa value + currency)</li>
              <li><strong>Lead Gen:</strong> <code>generate_lead</code> ili <code>form_submit</code></li>
              <li><strong>SaaS:</strong> custom event tipa <code>trial_signup</code> ili <code>demo_booked</code></li>
            </ul>
            <p className="text-sm text-gray-600 mb-0">Napomena: od marta 2024, GA4 je preimenovao &quot;conversions&quot; u &quot;key events&quot;. Funkcija je ista.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">4</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Importuj GA4 Key Events kao Google Ads konverzije</h3>
            <p className="text-sm text-gray-600 mb-2"><strong>Gde:</strong> Google Ads → Tools → Data Manager → Connected products → Google Analytics 4 → Import conversions</p>
            <p className="text-sm text-gray-600 mb-2">Redosled klikova:</p>
            <ol className="text-sm text-gray-600 mb-2 list-decimal pl-5">
              <li>Odaberi GA4 property iz liste povezanih</li>
              <li>Odaberi jedan ili više key events za import</li>
              <li>Klik &quot;Import&quot;</li>
            </ol>
            <p className="text-sm text-gray-600 mb-0">Nakon importa, konverzija se pojavljuje na Google Ads → Goals → Summary sa izvorom &quot;Google Analytics (GA4)&quot;.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">5</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Odredi Primary vs Secondary konverzije</h3>
            <p className="text-sm text-gray-600 mb-2"><strong>Gde:</strong> Google Ads → Goals → Conversions → Goal settings</p>
            <p className="text-sm text-gray-600 mb-2">Pravilo: <strong>samo jedna konverzija treba da bude Primary</strong> (ta se koristi za Smart Bidding). Sve ostale idu na Secondary (observation only, ne utiču na bidding).</p>
            <p className="text-sm text-gray-600 mb-2">Count setting:</p>
            <ul className="text-sm text-gray-600 mb-2">
              <li><strong>&quot;One&quot;</strong> za leads, form submissions, telefone (jedan lead po sesiji je dovoljan)</li>
              <li><strong>&quot;Every&quot;</strong> za eCommerce (kupac može kupiti 2 proizvoda u istoj sesiji, oba se broje)</li>
            </ul>
            <p className="text-sm text-gray-600 mb-0">Greška koju vidim stalno: eCommerce klijent ima &quot;One&quot; count i Smart Bidding zna samo za pola vrednosti.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">6</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Prenesi GA4 audiences u Google Ads</h3>
            <p className="text-sm text-gray-600 mb-2"><strong>Gde:</strong> GA4 → Admin → Audiences → New audience</p>
            <p className="text-sm text-gray-600 mb-2">Ako je link aktivan (Korak 1), audience se automatski sinhronizuje u Google Ads Audience Manager u roku od 24h. Minimum 1,000 aktivnih korisnika potrebno da audience postane eligible za remarketing.</p>
            <p className="text-sm text-gray-600 mb-0">Tipične audiences koje prenosim: <em>cart abandoners (7 days)</em>, <em>30-day all users</em>, <em>purchased last 90 days</em>, <em>video viewers (50%)</em>.</p>
          </div>
        </div>

        <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-heading font-bold">7</div>
          <div>
            <h3 className="text-base font-heading font-bold mt-0 mb-2">Verifikuj data flow (24–48h)</h3>
            <p className="text-sm text-gray-600 mb-2">Posle 24–48h (ne ranije), proveri:</p>
            <ul className="text-sm text-gray-600 mb-2">
              <li><strong>Google Ads → Goals → Conversions</strong> — status treba da bude &quot;Recording conversions&quot; (zelena tačka)</li>
              <li><strong>Kampanja → Conv. (all) kolona</strong> — brojevi treba da postoje</li>
              <li><strong>GA4 → Acquisition → Traffic acquisition</strong> — treba da se pojavi &quot;Paid Search&quot; izvor sa kampanjama</li>
              <li><strong>GA4 → Advertising → All channels</strong> — Google Ads kampanje sa troškom</li>
            </ul>
            <p className="text-sm text-gray-600 mb-0">Ako &quot;No data&quot; i posle 48h — idi na Troubleshooting sekciju ispod.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="event-mapping">GA4 event → Google Ads action mapping</h2>
      <p>
        Ne moraju svi GA4 eventi da postanu Google Ads konverzije. Evo šta da importujete za najčešće biznis modele:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Biznis model</th>
              <th className="py-3 px-4 font-heading font-semibold">GA4 Key Event</th>
              <th className="py-3 px-4 font-heading font-semibold">Google Ads klasifikacija</th>
              <th className="py-3 px-4 font-heading font-semibold">Count</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">eCommerce</td>
              <td className="py-3 px-4"><code>purchase</code></td>
              <td className="py-3 px-4 text-green-700">Primary (Purchase)</td>
              <td className="py-3 px-4">Every</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">eCommerce</td>
              <td className="py-3 px-4"><code>add_to_cart</code></td>
              <td className="py-3 px-4 text-gray-600">Secondary (Observation)</td>
              <td className="py-3 px-4">One</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Lead Gen</td>
              <td className="py-3 px-4"><code>generate_lead</code></td>
              <td className="py-3 px-4 text-green-700">Primary (Submit lead form)</td>
              <td className="py-3 px-4">One</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Local Services</td>
              <td className="py-3 px-4"><code>phone_call</code> (custom)</td>
              <td className="py-3 px-4 text-green-700">Primary (Phone call lead)</td>
              <td className="py-3 px-4">One</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">SaaS</td>
              <td className="py-3 px-4"><code>trial_signup</code> (custom)</td>
              <td className="py-3 px-4 text-green-700">Primary (Sign-up)</td>
              <td className="py-3 px-4">One</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">SaaS</td>
              <td className="py-3 px-4"><code>purchase</code> (plan subscribe)</td>
              <td className="py-3 px-4 text-green-700">Primary (Subscription)</td>
              <td className="py-3 px-4">Every</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Content / Blog</td>
              <td className="py-3 px-4"><code>newsletter_signup</code></td>
              <td className="py-3 px-4 text-gray-600">Secondary (Observation)</td>
              <td className="py-3 px-4">One</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Princip: <strong>jedna Primary konverzija po biznis modelu</strong>. Ostale drži na Secondary da vidiš u reportima, ali ne zbunjuje Smart Bidding.
      </p>

      <hr />

      <h2 id="attribution">Attribution model: Ads-preferred vs Data-driven</h2>
      <p>
        Posle importa, važno pitanje je koji attribution model koristiti. GA4 koristi Data-driven by default od 2023. Google Ads ima svoj set opcija:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Model</th>
              <th className="py-3 px-4 font-heading font-semibold">Kako radi</th>
              <th className="py-3 px-4 font-heading font-semibold">Kada koristiti</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Data-driven</td>
              <td className="py-3 px-4">ML model razvija per-kampanja kredit baziran na stvarnom customer path-u</td>
              <td className="py-3 px-4 text-green-700">Default za naloge sa 300+ konverzija/30 dana</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Ads-preferred last click</td>
              <td className="py-3 px-4">Kredit ide zadnjem Google Ads kliku pre konverzije</td>
              <td className="py-3 px-4">Manji nalozi (&lt;300 conv/mesec)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Last click (GA4 default)</td>
              <td className="py-3 px-4">Svi kanali dobijaju kredit bazirano na zadnjem non-direct kliku</td>
              <td className="py-3 px-4">Cross-channel analiza u GA4, ne u Google Ads bidding-u</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 my-6">
        <p className="font-heading font-semibold mb-2">Praktična preporuka</p>
        <p className="text-sm text-blue-900 mb-0">
          Za Google Ads bidding, koristite <strong>Data-driven attribution</strong> ako imate dovoljno volumena (Google će vas blokirati ako nemate). Za manje naloge, <strong>Ads-preferred last click</strong>. Ne mešajte modele između GA4 i Google Ads — očekujte malu razliku u brojevima (5–15% je normalno).
        </p>
      </div>

      <hr />

      <h2 id="consent-mode">Consent Mode v2 (EU obavezno)</h2>
      <p>
        Od 6. marta 2024, Google zahteva <strong>Consent Mode v2</strong> za sve oglase ciljane na EEA (EU + Norveška, Island, Lihtenštajn) i UK. Bez njega, Google Ads ne sme da koristi personalizovane oglase ni remarketing za te korisnike.
      </p>

      <p>Šta CMP (Consent Management Platform) treba da šalje u gtag-u:</p>

      <ul>
        <li><code>ad_storage</code> — granted/denied (za cookie-based ads)</li>
        <li><code>ad_user_data</code> — granted/denied (za slanje korisničkih podataka Google-u)</li>
        <li><code>ad_personalization</code> — granted/denied (za personalized advertising)</li>
        <li><code>analytics_storage</code> — granted/denied (za GA4 tracking)</li>
      </ul>

      <p>
        Dodata su 2 parametra (<code>ad_user_data</code> i <code>ad_personalization</code>) u v2 u odnosu na v1. Populariji CMP-ovi (Cookiebot, Iubenda, OneTrust, Usercentrics) imaju Consent Mode v2 modul — treba ga eksplicitno aktivirati u njihovom admin-u.
      </p>

      <div className="bg-red-50 border-2 border-red-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-red-700 text-lg mb-2">Kako proveriti da li radi</p>
        <p className="text-sm text-red-800 mb-0">
          Otvorite Chrome DevTools → Network tab → filter &quot;collect&quot; → pogledajte <code>gcs</code> parametar u GA4 request-u. Ako je <code>gcs=G111</code>, Consent v2 radi ispravno. Ako je <code>gcs=G100</code> ili nema — implementacija je nepotpuna.
        </p>
      </div>

      <hr />

      <h2 id="greske">Najčešće greške</h2>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #1</p>
          <p className="font-semibold mb-2">Duplikat: Google Ads conversion tag + GA4 purchase import</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Ili stari native Google Ads tag na thank-you stranici, ili GA4 importovana konverzija — ne oba. Preporuka: isključite Google Ads conversion tag i držite samo GA4 import, zato što GA4 kao single source of truth čisti atribuciju.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #2</p>
          <p className="font-semibold mb-2">Više Primary konverzija — Smart Bidding se zbuni</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Samo jedna konverzija treba da bude Primary. Dodavanjem više Primary konverzija (npr. purchase + add_to_cart + newsletter), algoritam meša signale i tROAS ne radi pravilno.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #3</p>
          <p className="font-semibold mb-2">Missing value/currency na purchase event-u</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Bez <code>value</code> i <code>currency</code> parametara, tROAS ne može da radi. Proverite kroz GA4 DebugView da se vrednosti šalju. Za Shopify/WooCommerce — standardna GTM template-a ima ovo by default.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #4</p>
          <p className="font-semibold mb-2">Pogrešan Count setting</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> eCommerce mora biti &quot;Every&quot; (svaka kupovina se broji). Leads mora biti &quot;One&quot; (ne želite da isti lead troši 3x bidding budget-a). Podrazumevano je &quot;One&quot; — uvek menjajte za eCommerce.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška #5</p>
          <p className="font-semibold mb-2">Consent Mode v1 (ili ga uopšte nema)</p>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
            <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Obavezno v2 za EU. Efekti v1 u 2026: remarketing liste se ne pune (EU korisnici ne ulaze), Smart Bidding ima manje signala, conversion modeling ne radi.</p>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="troubleshooting">Troubleshooting</h2>

      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Konverzija ne importuje iz GA4</h3>
          <ul className="text-sm text-gray-600 mb-0">
            <li>Proveri da li je event označen kao &quot;key event&quot; u GA4 (ne samo običan event)</li>
            <li>Proveri da ima podataka — event mora biti zabeležen u zadnjih 30 dana</li>
            <li>Proveri Link status u GA4 Admin → Product links → Google Ads links</li>
            <li>Sačekaj 24h posle prvog importa — Google kešira listu</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">&quot;No data&quot; u importovanoj konverziji</h3>
          <ul className="text-sm text-gray-600 mb-0">
            <li>Proveri da li Google Ads kampanje stvarno dovode traffic (Conv. (all) kolona)</li>
            <li>Proveri da li Auto-Tagging radi — GCLID mora biti u URL-u</li>
            <li>Proveri Consent Mode — ako su korisnici odbili, neće biti podataka</li>
            <li>Attribution delay: eCommerce konverzije čekaju 3–7 dana pre nego se potpuno prikažu</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Audience size = 0 u Google Ads-u</h3>
          <ul className="text-sm text-gray-600 mb-0">
            <li>Minimum 1,000 aktivnih korisnika potrebno da bi audience postao &quot;eligible&quot;</li>
            <li>&quot;Enable Personalized Advertising&quot; mora biti čekirano na Link-u</li>
            <li>Audience retention period (30/60/540 dana) mora biti postavljen</li>
            <li>Sačekaj 24h posle kreiranja audience-a</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="text-base font-heading font-bold mt-0 mb-2">GA4 broj konverzija ≠ Google Ads broj</h3>
          <ul className="text-sm text-gray-600 mb-0">
            <li>Razlika od 5–15% je normalna (različit attribution model, conversion windows)</li>
            <li>Razlika &gt; 30% — proveri attribution settings u oba alata</li>
            <li>Google Ads koristi click-based, GA4 može biti cross-device ili cross-channel</li>
            <li>Napomena: broj u Google Ads-u je <em>click-attributed</em>, GA4 broj je <em>last-click GA4</em> — očekuj razliku</li>
          </ul>
        </div>
      </div>

      <hr />

      <h2 id="faq">Najčešća pitanja</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kada će konverzije iz GA4 početi da se prikazuju u Google Ads-u?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Obično 24–48h posle importa. Za potpuno backfill istorijskih podataka (za Smart Bidding learning) treba 30–90 dana kontinuiranog trackinga. Ne menjajte bid strategiju u prvih 14 dana — algoritam uči.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li GA4 zamenjuje Google Ads conversion tracking?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Praktično da — GA4 purchase event se može koristiti kao primary Google Ads konverzija. Napredni setup (gdje radim za veće klijente): GA4 za main conversion + native Google Ads conversion kao backup/secondary. Ali za većinu naloga, samo GA4 je dovoljno i izbegava duplikate.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta je razlika između Primary i Secondary konverzije?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Primary konverzije utiču na Smart Bidding — algoritam optimizuje protiv njih. Secondary su &quot;observation only&quot; — prikazuju se u reportima ali ne utiču na bidding. Pravilo: samo jedna Primary (glavni business outcome). Sve micro-konverzije (add to cart, newsletter signup) na Secondary.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta je Ads-preferred attribution?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Ads-preferred attribution koristi drugačija pravila od GA4 default-a. U GA4, direktne posete (no referrer) mogu dobiti kredit; u Ads-preferred, taj kredit ide zadnjem plaćenom Google Ads kliku. Rezultat: Google Ads u ovom modelu &quot;pokaže&quot; više konverzija nego GA4.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li treba Consent Mode v2 za srpsko tržište?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Tehnički ne (Srbija nije EU), ali preporučujem da ga imate zato što: (1) mnogi srpski sajtovi targetiraju i EU tržište, (2) GDPR-ready setup je indikator kvaliteta, (3) Google Ads algoritam fino radi sa CMP-om bez obzira na region. Za čisti domaći saobraćaj, možete preskočiti — ali zadržite opciju da uključite.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Mogu li importovati više GA4 property-ja u jedan Google Ads nalog?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Da, može se linkovati više GA4 property-ja na isti Google Ads nalog. Korisno kada imate više domena/brand-ova pod istim Google Ads nalogom. Pažnja sa konverzijama — treba pažljivo mapirati koja dolazi odakle da ne bude duplikata.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko košta GA4 + Google Ads integracija?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
            Besplatno — GA4 i Google Ads su besplatni alati, a integracija je deo platforme. Jedini trošak je vreme (30 min za osnovu + 2–3 sata za audit postojećeg setup-a ako preuzimate nalog od drugog agencija).
          </div>
        </details>
      </div>

      <hr />

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Vaša GA4 + Google Ads integracija nije potpuna?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Besplatan audit kompletnog tracking sistema na vašem sajtu — provera link statusa, Primary/Secondary setup-a, Consent Mode v2, attribution modela i celokupnog data flow-a. Obično se otkrije 3–5 grešaka koje koštaju konverzija.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Pošaljite zahtev za besplatan audit
        </Link>
      </div>

      <hr />

      <h2 id="povezani-vodici">Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "conversion-tracking-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Conversion Tracking vodič</p>
          <p className="text-xs text-gray-500 mb-0">Enhanced conversions, server-side, debug procedura</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Smart Bidding vodič</p>
          <p className="text-xs text-gray-500 mb-0">tROAS, tCPA i kako ih Smart Bidding koristi</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "remarketing-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Remarketing vodič</p>
          <p className="text-xs text-gray-500 mb-0">GA4 audiences za 4× ROAS kampanje</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-optimizacija" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads optimizacija — 30 taktika</p>
          <p className="text-xs text-gray-500 mb-0">Post-tracking playbook za skalirate rezultate</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Audit Checklist</p>
          <p className="text-xs text-gray-500 mb-0">80+ tačaka za kompletan account audit</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-greske" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">20 Google Ads grešaka</p>
          <p className="text-xs text-gray-500 mb-0">Tracking greške koje koštaju konverzija</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: April 2026
      </div>
      <div className="text-sm text-gray-500">
        Autor: Slobodan Jelisavac, Google Ads Consultant
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
    </>
  );
}
