import { Link } from "@/i18n/navigation";
import { GlossaryLink } from "@/components/GlossaryLink";

export default function GoogleAdsBudzetSR() {
  return (
    <>
      {/* ── TL;DR hero ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Budžet za Google Ads nije fiksan broj nego proces u tri faze - test, optimizacija, skaliranje.
          Koliko trošite u prvom mesecu treba da bude drugačije od onoga što trošite u trećem, i to po planu, ne po osećaju.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">3 faze</p>
            <p className="text-xs text-slate-400 mt-1">test → optimizacija → skaliranje</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">~30 dana</p>
            <p className="text-xs text-slate-400 mt-1">trajanje test faze</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">30-50</p>
            <p className="text-xs text-slate-400 mt-1">konverzija/30 dana za smart bidding</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400">Max CPA × cilj</p>
            <p className="text-xs text-slate-400 mt-1">formula za mesečni budžet</p>
          </div>
        </div>
      </div>

      {/* ── Featured-snippet definition block ── */}
      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Brzi odgovor
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Koliki budžet mi treba za Google Ads?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          Budžet računate unazad od cilja: <strong>maksimalna cena po konverziji × broj konverzija koje želite mesečno</strong>, ne od toga koliko para imate na raspolaganju. Prvi mesec ide na prikupljanje podataka, ne na dostizanje punog cilja. Ovo je pitanje o budžetu za OGLASE - za cenu vođenja kampanja (naša usluga ili tuđa) pogledajte{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="underline">koliko košta Google Ads</Link>.
        </p>
      </div>

      {/* ── Sadržaj ── */}
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#budzet-za-oglase-vs-cena-vodjenja-kampanja" className="block py-1 text-base text-gray-700 hover:text-primary underline">Budžet za oglase vs. cena vođenja kampanja</a></li>
          <li><a href="#koliki-budzet-za-start-po-tipu-biznisa" className="block py-1 text-base text-gray-700 hover:text-primary underline">Koliki budžet za start - po tipu biznisa</a></li>
          <li><a href="#kako-podeliti-budzet-po-fazama" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kako podeliti budžet po fazama</a></li>
          <li><a href="#podela-budzeta-po-kampanjama-i-kanalima" className="block py-1 text-base text-gray-700 hover:text-primary underline">Podela budžeta po kampanjama i kanalima</a></li>
          <li><a href="#kada-povecati-budzet" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kada povećati budžet</a></li>
          <li><a href="#dnevni-vs-mesecni-budzet" className="block py-1 text-base text-gray-700 hover:text-primary underline">Dnevni vs. mesečni budžet u praksi</a></li>
          <li><a href="#proverite-da-li-vam-se-budzet-isplati" className="block py-1 text-base text-gray-700 hover:text-primary underline">Proverite da li vam se budžet isplati</a></li>
          <li><a href="#racunski-primeri" className="block py-1 text-base text-gray-700 hover:text-primary underline">Računski primeri: 3 scenarija</a></li>
          <li><a href="#greske-u-planiranju-budzeta" className="block py-1 text-base text-gray-700 hover:text-primary underline">Greške u planiranju budžeta</a></li>
          <li><a href="#sledeci-koraci" className="block py-1 text-base text-gray-700 hover:text-primary underline">Sledeći koraci</a></li>
          <li><a href="#cesto-postavljana-pitanja" className="block py-1 text-base text-gray-700 hover:text-primary underline">Često postavljana pitanja o budžetu</a></li>
          <li><a href="#povezani-vodici" className="block py-1 text-base text-gray-700 hover:text-primary underline">Povezani vodiči</a></li>
        </ol>
      </nav>

      <h2 id="budzet-za-oglase-vs-cena-vodjenja-kampanja">Budžet za oglase vs. cena vođenja kampanja</h2>
      <p>
        Ova dva pitanja se stalno mešaju, pa hajde odmah da ih razdvojimo. <strong>Budžet za oglase</strong> je novac koji ide direktno Google-u za klikove - to je tema ovog teksta. <strong>Cena vođenja kampanja</strong> je ono što plaćate agenciji, freelanceru ili sopstvenom vremenu da taj budžet troši pametno - o tome sam pisao odvojeno u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="underline">
          vodiču o ceni Google Ads-a
        </Link>.
      </p>
      <p>
        Ako tek pravite prvi nalog i ne znate odakle da krenete, prvo pogledajte{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "kako-poceti-google-ads" } }} className="underline">
          kako da počnete sa Google Ads-om
        </Link>{" "}
        - taj vodič pokriva otvaranje naloga, tracking i prvu kampanju. Ovaj tekst pretpostavlja da ste to već prošli i pita jedno konkretno pitanje: <strong>koliko trošiti, i kako taj iznos rasporediti kroz vreme i kroz kampanje</strong>.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Iz mog iskustva</p>
        <p className="text-blue-800 text-base mb-0">
          Najčešća greška koju vidim nije premali budžet - nego dobar budžet razvučen na previše kampanja odjednom. €300 podeljeno na pet kampanja znači da nijedna nikad ne skupi dovoljno podataka da bude optimizovana. Bolje je manje kampanja sa dovoljno prostora da rade.
        </p>
      </div>

      <hr />

      <h2 id="koliki-budzet-za-start-po-tipu-biznisa">Koliki budžet za start - po tipu biznisa</h2>
      <p>
        Umesto da gledate koliko para imate, krenite od cilja. Formula je ista bez obzira na tip biznisa:
      </p>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Formula za mesečni budžet</p>
        <p className="text-base text-yellow-900 mb-0">
          Mesečni budžet = <strong>maksimalna cena po konverziji (max CPA)</strong> × <strong>ciljani broj konverzija mesečno</strong>.
          Ne mesečni budžet = koliko klikova × CPC - to vam kaže samo koliko saobraćaja kupujete, ne da li vam se to isplati.
        </p>
      </div>

      <p>
        Razlika u odnosu na osnovno pravilo iz vodiča za početnike (minimum €300-500 mesečno, odnosno €10-20 dnevno - detaljno objašnjeno u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "kako-poceti-google-ads" } }} className="underline">kako početi sa Google Ads-om</Link>) je u tome što taj minimum važi za TEST fazu. Formula gore važi kad već znate svoj max CPA i planirate budžet za ciljani obim, ne za prvi probni mesec.
      </p>
      <ul>
        <li><strong>Lokalni servis (lead gen):</strong> max CPA po upitu × koliko upita mesečno možete da opslužite</li>
        <li><strong>eCommerce:</strong> max CPA izvedena iz marže × ciljani broj porudžbina - detaljna CPC tabela po industriji je u{" "}
          <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="underline">vodiču o ceni Google Ads-a</Link>
        </li>
        <li><strong>B2B usluga:</strong> max CPA po kvalifikovanom lead-u × ciljani broj lead-ova, uz svest da se prodaja zatvara meseci kasnije</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Zašto formula od cilja, ne od klikova</p>
        <p className="text-blue-800 text-base mb-0">
          Klik-bazirana formula (koliko klikova dnevno × CPC) vam kaže koliko saobraćaja kupujete. Ne kaže vam da li vam se taj saobraćaj isplati. Video sam naloge sa dobrim brojem klikova i nulom profita - jer je budžet planiran unazad od CPC-a, ne unapred od marže.
        </p>
      </div>

      <hr />

      <h2 id="kako-podeliti-budzet-po-fazama">Kako podeliti budžet po fazama</h2>
      <p>
        Ovo je deo koji većina preskoči, a najviše određuje da li nalog uspe. Budžet se ne troši isto u prvom i u trećem mesecu - prolazi kroz tri faze.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Faza</th>
              <th className="py-3 px-3 font-heading font-semibold">Trajanje</th>
              <th className="py-3 px-3 font-heading font-semibold">Fokus</th>
              <th className="py-3 px-3 font-heading font-semibold">Kada prelazite dalje</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">1. Test</td>
              <td className="py-3 px-3">~30 dana</td>
              <td className="py-3 px-3">1-2 uske kampanje, cilj su podaci - ne konverzije po svaku cenu</td>
              <td className="py-3 px-3">dovoljno klikova da vidite search terms i prvi signal CTR-a</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">2. Optimizacija</td>
              <td className="py-3 px-3">30-60 dana (mesec 2-3)</td>
              <td className="py-3 px-3">realokacija unutar istog budžeta ka onome što radi, gašenje onoga što ne radi</td>
              <td className="py-3 px-3">kampanja dosledno ispod max CPA, search terms očišćeni</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">3. Skaliranje</td>
              <td className="py-3 px-3">od meseca 3+</td>
              <td className="py-3 px-3">povećanje budžeta samo kampanjama ispod tavanice profitabilnosti</td>
              <td className="py-3 px-3">30+ konverzija/30 dana za <GlossaryLink slug="tcpa">tCPA</GlossaryLink>, 50+ za <GlossaryLink slug="troas">tROAS</GlossaryLink></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-base text-gray-500 mt-3">
        Pragovi za automatsko bidovanje su{" "}
        <a href="https://support.google.com/google-ads/answer/7065882" target="_blank" rel="noopener noreferrer" className="underline">Google-ova preporuka</a>. Više o samom mehanizmu u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-vodic" } }} className="underline">vodiču za smart bidding</Link>.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Zašto faza 1 nije o konverzijama</p>
        <p className="text-blue-800 text-base mb-0">
          U prvih 30 dana ne merim uspeh po tome koliko je konverzija stiglo - merim po tome koliko sam naučio o tome koje pretrage dovode koga. Ako u prvom mesecu gasite kampanju jer &quot;nema dovoljno konverzija&quot;, verovatno ste je ugasili baš kad je počela da uči.
        </p>
      </div>

      <hr />

      <h2 id="podela-budzeta-po-kampanjama-i-kanalima">Podela budžeta po kampanjama i kanalima</h2>
      <p>
        Kad prođete test fazu, sledeće pitanje je kako podeliti isti mesečni iznos između kampanja unutar naloga.
      </p>
      <ul>
        <li><strong>eCommerce (Search + Shopping):</strong> u nalozima koje vodim i industrijskim izveštajima, Shopping obično nosi oko 80% budžeta eCommerce naloga - ovo je opažanje iz prakse, ne pravilo za svaki nalog. Vaš split zavisi od kataloga i marže.</li>
        <li><strong>Search - brand vs. non-brand:</strong> brend termini su jeftiniji i konvertuju bolje, ali ne donose nove kupce. Rezervišite većinu budžeta za non-brand, a brend držite na minimumu koji čuva poziciju.</li>
        <li><strong>Remarketing:</strong> mala rezerva (obično najjeftiniji kanal po konverziji) - ne troši se na nove posetioce, pa ne treba da se meša u budžet za akviziciju.</li>
      </ul>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Ograda oko 80% pravila</p>
        <p className="text-yellow-800 text-base mb-0">
          80% na Shopping je ono što industrijski izveštaji beleže kao prosek, ne preporuka koju treba kopirati. Ako imate katalog ispod ~50 SKU ili proizvode osetljive na maržu, standardni Shopping ili drugačiji split može raditi bolje - to je razgovor za audit, ne opšte pravilo.
        </p>
      </div>

      <hr />

      <h2 id="kada-povecati-budzet">Kada povećati budžet</h2>
      <p>
        Ne povećavajte budžet zato što &quot;ide dobro&quot; ili zato što je kraj kvartala. Povećavajte kad vidite konkretne signale:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <strong>Gubite <GlossaryLink slug="impression-share">impression share</GlossaryLink> zbog budžeta</strong>
              <span className="text-gray-500"> - Google-ov izveštaj &quot;Lost IS (budget)&quot; pokazuje koliko prikaza propuštate jer se budžet potroši pre kraja dana</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <strong>Kampanja je dosledno iznad praga konverzija</strong>
              <span className="text-gray-500"> - ~30 konverzija/30 dana za tCPA i ~50 za tROAS je{" "}
                <a href="https://support.google.com/google-ads/answer/7065882" target="_blank" rel="noopener noreferrer" className="underline">Google-ova preporuka</a>. Za Performance Max mi u praksi koristimo finiji prag - ispod 30 konverzija ne uvodimo automatsko bidovanje, 30-50 je sivo polje, 50+ znači dovoljno podataka; to je naše pravilo iz prakse, Google ga zvanično ne objavljuje.</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <strong>Break-even CPA/CPC ima prostora</strong>
              <span className="text-gray-500"> - povećanje budžeta ne sme da gurne stvarni CPA iznad tavanice koju marža dozvoljava. Proverite pre nego što povećate, ne posle.</span>
            </div>
          </div>
        </div>
      </div>

      <p>
        Sva tri signala moraju da se poklope. Impression share loss bez dovoljno konverzija za pouzdano bidovanje znači da prvo rešavate podatke, ne budžet.
      </p>

      <hr />

      <h2 id="dnevni-vs-mesecni-budzet">Dnevni vs. mesečni budžet u praksi</h2>
      <p>
        Broj koji unosite u Google Ads je <strong>dnevni budžet</strong>, ne mesečni. Google ga tretira kao prosek, ne kao tavanicu za svaki pojedinačni dan - u danima sa jačom potražnjom može potrošiti i do dvostruko više od dnevnog budžeta, a u slabijim danima manje. Na kraju meseca naplata ne prelazi dnevni budžet pomnožen prosečnim brojem dana u mesecu (30.4). Detalje ove mehanike Google objašnjava u{" "}
        <a href="https://support.google.com/google-ads/answer/2375454" target="_blank" rel="noopener noreferrer" className="underline">
          Ads Help Centru
        </a>.
      </p>
      <p>
        U praksi to znači dve stvari za planiranje:
      </p>
      <ul>
        <li>Ne paničite ako jedan dan potroši više od &quot;dnevnog limita&quot; - to je normalno, sve dok se mesečni prosek poklapa sa planom.</li>
        <li>Sezonske oscilacije (Black Friday, praznici, letnja sezona) planirajte unapred kroz podešen dnevni budžet za taj period, ne reagujte usred kampanje kad vidite da vam ponestaje.</li>
      </ul>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <p className="font-semibold text-gray-900 mb-1">Kad tražiti dodatni budžet od menadžmenta ili klijenta</p>
        <p className="text-base text-gray-600 mb-0">
          Ne argumentom &quot;trend je dobar&quot; - argumentom break-even računice. Ako je max CPA €25 i trenutni CPA €18, ima prostora da povećate budžet a da i dalje ostanete profitabilni. Ako je trenutni CPA već na €24, povećanje budžeta pre nego rešite efikasnost samo skalira problem, ne rezultat.
        </p>
      </div>

      <hr />

      <h2 id="proverite-da-li-vam-se-budzet-isplati">Proverite da li vam se budžet isplati</h2>
      <p>
        Ako vodite eCommerce, napravio sam besplatan alat koji ovo računa umesto vas: unesete prosečnu vrednost porudžbine, maržu, conversion rate i budžet, a on vam vrati break-even ROAS i realnu profitabilnost - sa transparentnom formulom, ne crnom kutijom.
      </p>
      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card text-center">
        <p className="font-heading font-bold text-lg mb-2">Profit-provera kalkulator</p>
        <p className="text-base text-gray-600 mb-4">Unesite svoje brojke, dobijete break-even ROAS i pregled na email u roku od 24h.</p>
        <Link href="/profit-provera" className="btn-secondary inline-block">
          Proverite svoj budžet
        </Link>
      </div>
      <p>
        Za lead gen i B2B nemam još poseban alat - logika je ipak jednostavna za ručni izračun: <strong>max CPA × conversion rate na landing page-u = max CPC</strong> koji smete da platite, a taj max CPC upoređujete sa realnim CPC-om u vašoj industriji.
      </p>

      <hr />

      <h2 id="racunski-primeri">Računski primeri: 3 scenarija</h2>

      <h3>1. Mali lokalni biznis (servis klima uređaja)</h3>
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <div className="text-base text-yellow-900 space-y-1">
          <p className="mb-1">Cilj: 10 upita mesečno | Max CPA po upitu: €25</p>
          <p className="mb-1">Pretpostavimo CVR na landing page-u od 4% (unutar kanonskog raspona 2-6% za lead forme)</p>
          <p className="mb-1"><strong>Max CPC = €25 × 0.04 = €1.00</strong></p>
          <p className="mb-0"><strong>Ciljani mesečni budžet = €25 × 10 = €250</strong></p>
        </div>
      </div>
      <p>
        Prvi mesec ovaj iznos ne ide na dostizanje 10 upita - ide na test fazu iz tabele gore. Realno je da prvih 30 dana dobijete manje od cilja dok se kampanja uči, a broj upita stabilizuje tek u fazi optimizacije. Ciljanih €250 je ujedno i ispod naše preporučene test-baseline od €300-500 mesečno - u prvih 30 dana realnije je držati €350-400 dok se ne skupi dovoljno podataka, pa tek onda spustiti na ciljani iznos kad kampanja stabilizuje performanse.
      </p>

      <h3>2. eCommerce prodavnica</h3>
      <p>
        Logika je ista - marža određuje max CPA, max CPA i CVR određuju max CPC, a max CPA × ciljani broj porudžbina daje mesečni budžet. Umesto da ovde ponavljam ceo ručni izračun (pun primer sa AOV i maržom je u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="underline">vodiču o ceni Google Ads-a</Link>), unesite svoje brojke u{" "}
        <Link href="/profit-provera" className="underline">profit-provera kalkulator</Link> i dobijate tačan broj za svoj biznis, ne generički primer.
      </p>

      <h3>3. B2B usluga (dug prodajni ciklus)</h3>
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <div className="text-base text-yellow-900 space-y-1">
          <p className="mb-1">Cilj: 5 kvalifikovanih lead-ova mesečno | Max CPA po lead-u: recimo €150</p>
          <p className="mb-1">Pretpostavimo <GlossaryLink slug="conversion-rate">conversion rate</GlossaryLink> forme od 4% non-brand (unutar kanonskog raspona 2-6%, do 15% za brand/gated)</p>
          <p className="mb-1"><strong>Max CPC = €150 × 0.04 = €6.00</strong></p>
          <p className="mb-0"><strong>Ciljani mesečni budžet = €150 × 5 = €750</strong></p>
        </div>
      </div>
      <p>
        Ključna razlika kod B2B: <strong>conversion window</strong> je obično 60-90 dana od klika do zatvorene prodaje. Budžet planirajte znajući da rezultate od ovog meseca vidite tek za 2-3 meseca - ne sudite kampanju posle tri nedelje jer &quot;nema prodaje&quot;, kad prodaja tog leada tek dolazi.
      </p>

      <hr />

      <h2 id="greske-u-planiranju-budzeta">Greške u planiranju budžeta</h2>
      <div className="space-y-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-semibold mb-2">1. Premali budžet razvučen na previše kampanja</p>
          <p className="text-base text-gray-600 mb-0">€300 podeljeno na pet kampanja znači da nijedna ne skupi dovoljno podataka za optimizaciju. Bolje manje kampanja sa realnim prostorom da rade.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-semibold mb-2">2. Budžet definisan bez max CPA unapred</p>
          <p className="text-base text-gray-600 mb-0">Kreće se od &quot;koliko para imamo&quot; umesto od &quot;koliko para možemo profitabilno potrošiti po konverziji&quot;. Prvo, pa drugo.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-semibold mb-2">3. Skaliranje pre praga od 30 konverzija/30 dana</p>
          <p className="text-base text-gray-600 mb-0">Bidding algoritam nema dovoljno podataka - kampanja &quot;puca&quot; kad se budžet naglo poveća bez osnove.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-semibold mb-2">4. Mesečni budžet tretiran kao fiksan broj bez rezerve</p>
          <p className="text-base text-gray-600 mb-0">Bez malog viška za testiranje nove ad grupe ili kampanje, svaki eksperiment znači gašenje nečega što već radi.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <p className="font-semibold mb-2">5. Ignorisanje sezonalnosti pri godišnjem planiranju</p>
          <p className="text-base text-gray-600 mb-0">Isti mesečni budžet za novembar i za februar znači da propuštate potražnju u sezoni i preplaćujete van nje.</p>
        </div>
      </div>

      <hr />

      <h2 id="sledeci-koraci">Sledeći koraci</h2>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">Preporučujem ova 4 koraka:</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Odredite max CPA</strong> <span className="text-gray-500">iz marže ili vrednosti lead-a, pre nego što upišete bilo koji budžet u Google Ads</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Izračunajte ciljani mesečni budžet</strong> <span className="text-gray-500">po formuli max CPA × ciljani broj konverzija</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Planirajte 30 dana test faze</strong> <span className="text-gray-500">pre nego što ocenite da li kampanja &quot;radi&quot;</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Odlučite o profesionalnom vođenju</strong> <span className="text-gray-500">ako trošite €1.500 mesečno ili više, vredi da razgovaramo o{" "}
              <Link href="/usluge/google-ads-upravljanje" className="underline">vođenju kampanja</Link></span></div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Niste sigurni da li je vaš budžet realan za vaš cilj?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Prođemo zajedno vašu industriju, maržu i ciljani broj konverzija - besplatno, bez obaveza.
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <hr />

      {/* ── FAQ ── */}
      <h2 id="cesto-postavljana-pitanja">Često postavljana pitanja o budžetu</h2>
      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliki mesečni budžet mi treba za Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Zavisi od max CPA i ciljanog broja konverzija - mesečni budžet = max CPA × ciljani broj konverzija. Za test fazu, minimum je €300-500 mesečno (€10-20 dnevno) da dobijete dovoljno podataka - detaljnije u{" "}
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "kako-poceti-google-ads" } }} className="underline">vodiču kako početi sa Google Ads-om</Link>; konkretan broj za vaš biznis izračunate po formuli iz ovog teksta.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kako da podelim budžet između više kampanja?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            U test fazi, na 1-2 uske kampanje - ne razvlačite mali budžet na više njih. Kasnije, split zavisi od kanala: eCommerce nalozi u praksi drže veći deo na Shopping-u, Search se deli na brand i non-brand, a mala rezerva ide na remarketing.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Kada da povećam budžet za Google Ads?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Kad kampanja dosledno ostvaruje 30+ konverzija za tCPA ili 50+ za tROAS na 30 dana, gubite impression share zbog budžeta, i break-even CPA i dalje ima prostora posle povećanja. Sva tri signala treba da se poklope, ne samo jedan.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li treba da imam isti budžet svaki mesec?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Ne, ako imate sezonalnost. Planirajte veći budžet unapred za period jače potražnje (Black Friday, praznici) i manji van sezone - to je planiranje, ne reagovanje kad kampanja usred meseca potroši sve.
          </div>
        </details>
        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koja je razlika između dnevnog i mesečnog budžeta u Google Ads-u?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Unosite dnevni budžet, ali Google ga tretira kao prosek - pojedinačnog dana može potrošiti i do dvostruko više, dok mesečna naplata ne prelazi dnevni budžet pomnožen prosečnim brojem dana u mesecu (30.4).
          </div>
        </details>
      </div>

      {/* ── Povezani vodiči ── */}
      <h2 id="povezani-vodici">Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Koliko košta Google Ads</p>
          <p className="text-xs text-gray-500 mb-0">CPC po industriji i cena vođenja kampanja - agencija, freelancer, in-house</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "kako-poceti-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Kako početi sa Google Ads-om</p>
          <p className="text-xs text-gray-500 mb-0">Od otvaranja naloga do prve kampanje, korak po korak</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "smart-bidding-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Smart Bidding vodič</p>
          <p className="text-xs text-gray-500 mb-0">Kako automatsko bidovanje koristi vaš budžet i podatke o konverzijama</p>
        </Link>
        <Link href="/usluge/konsultacije" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Konsultacije</p>
          <p className="text-xs text-gray-500 mb-0">Provera vašeg plana budžeta pre nego što potrošite prvi euro</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-search-kampanje-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Search kampanje: kompletan vodič</p>
          <p className="text-xs text-gray-500 mb-0">Struktura kampanja po nameri i marži, negativne ključne reči, merenje pre skaliranja</p>
        </Link>
        <Link href="/usluge/starter-paket" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Starter paket (Kickstart)</p>
          <p className="text-xs text-gray-500 mb-0">Senior setup jednom, od €690 - ako još nemate budžet za mesečno vođenje</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: 29. avgust 2026.
      </div>
      <div className="text-sm text-gray-500">
        Autor: Slobodan Jelisavac, Google Ads Consultant
      </div>
    </>
  );
}
