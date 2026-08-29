import { Link } from "@/i18n/navigation";

export default function ListaNegativnihKljucnihReciSR() {
  return (
    <>
      {/* ── TL;DR Hero ── */}
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">TL;DR</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Ovo je lista, ne predavanje. 421 negativna ključna reč kroz 15 kategorija spremnih za kopi-pejst - univerzalne, brand safety i pet granskih lista - plus gotov AI prompt koji za par minuta napravi verziju prilagođenu vašem biznisu.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">421</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">termina, spremno za kopiranje</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">15</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">kategorija</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">1</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">AI prompt template</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">match tipa, označena po listi</p>
          </div>
        </div>
      </div>

      {/* ── Featured-snippet Quick Answer block ── */}
      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Brz odgovor
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Šta je kompletna lista negativnih ključnih reči?
        </p>
        <p className="text-sm md:text-base text-gray-700 mb-0 leading-relaxed">
          Kompletna lista negativnih ključnih reči je gotov set termina, organizovan po kategorijama, koji lepite direktno u Google Ads da zaustavite prikazivanje oglasa na pretragama koje nikad ne bi konvertovale. Ova stranica pokriva 15 kategorija - 8 univerzalnih (traženje besplatnog, lovci na jeftino, traženje posla, uradi-sam, istraživanje, polovna roba, recenzije, negativan sentiment), posebnu listu za brand safety i sadržaj za odrasle, i 5 granskih lista (B2B/SaaS, eCommerce, lead-gen/lokalne usluge, lokalni biznis, edukacija) - svaka formatirana kao jedan blok koji možete da selektujete i nalepite direktno u negativnu listu ili u Google Ads Editor import.
        </p>
      </div>

      <p className="text-sm text-gray-600 -mt-2">
        Treba vam prvo strategija iza ovih lista - match tipovi, organizacija liste, kako da napravite sopstvenu iz Search Terms reporta? To je pokriveno u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="underline font-semibold">
          Vodiču za negativne ključne reči
        </Link>
        . Ova stranica preskače teoriju i daje vam termine.
      </p>

      <hr />

      {/* ── How to use these lists ── */}
      <h2>Kako koristiti ove liste</h2>
      <p>
        Svaka lista ispod je jedan blok teksta, jedan termin po redu. Kliknite unutra, selektujte sve, kopirajte i nalepite u Negative Keyword List u Google Ads-u (Tools → Shared library → Negative keyword lists) ili u CSV za Google Ads Editor. Tri koraka pre nego što bilo šta ide u pogon.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Izaberite kategorije koje odgovaraju vašem biznisu</strong> <span className="text-gray-500">- ne svih 15. SaaS firmi ne treba lista lokalnih usluga, eCommerce prodavnici ne treba lista za edukaciju.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Obrišite svaki termin koji je zapravo deo vaše ponude</strong> <span className="text-gray-500">- ako prodajete obnovljenu elektroniku, uklonite &quot;obnovljeno&quot; pre lepljenja. Pročitajte svaki red jednom, ne uvozite listu naslepo.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Primenite preporučeni match tip</strong> <span className="text-gray-500">- svaka kategorija ispod je označena Negative Broad ili Negative Phrase. Ako vam treba podsetnik šta to menja, pogledajte tabelu match tipova u </span><Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="underline text-gray-700 font-semibold">Vodiču za negativne ključne reči</Link><span className="text-gray-500">.</span></div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Ovo su početne liste, ne gotov nalog</p>
        <p className="text-yellow-800 text-base mb-0">
          Nijedna generička lista - ni ova - ne poznaje vaš biznis. &quot;Besplatno&quot; je negativan termin za većinu naloga, ali ne i ako prodajete freemium SaaS alat. &quot;Polovno&quot; je negativan termin za brend nameštaja, ali je ceo set upita za sajt polovne robe. Proverite svaku kategoriju u odnosu na sopstvenu ponudu pre nego što ide u pogon, i pratite Search Terms report prve dve nedelje posle.
        </p>
      </div>

      <hr />

      {/* ── Universal Negative List ── */}
      <h2>Univerzalna negativna lista - 217 termina, 8 kategorija</h2>
      <p>
        Relevantno za skoro svaki nalog, bez obzira na granu. Počnite ovde, pa dodajte brand safety i granske liste koje se odnose na vas.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">1. Besplatno i bez troška <span className="text-gray-400 font-normal text-sm">(36 termina)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`besplatno\nbesplatan\nbesplatna\ngratis\nbesplatno preuzimanje\nbesplatna proba\nbesplatan uzorak\nbesplatna verzija\nbesplatna alternativa\nbez naknade\nbesplatna dostava\nbesplatna isporuka\nbesplatna konsultacija\nbesplatna ponuda\nbesplatan demo\nfreemium\nopen source\nbesplatan softver\ncrack\nkreknuto\nkeygen\ntorrent\ndownload besplatno\nwarez\npiraterija\nbesplatno doživotno\nfree\nfree download\nfree trial\nno cost\ngiveaway\npoklon\nna poklon\nbesplatan pristup\nbesplatan plan\nbesplatna licenca`}</pre>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">2. Jeftino, budžet i popust <span className="text-gray-400 font-normal text-sm">(28 termina)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`jeftino\nnajjeftinije\njeftina\nniska cena\nnajniža cena\nbudžet\npovoljno\npovoljna cena\npopust\nsniženje\nsniženo\nrasprodaja\nna rasprodaji\nakcija\nna akciji\nkupon\nkupon kod\npromo kod\nvaučer\ndeal\nnajbolja ponuda\nveleprodaja\nveleprodajna cena\ncena na veliko\nfabrička cena\nlikvidacija\noutlet\npolovna cena`}</pre>
        <p className="text-xs text-gray-500 mt-2 mb-0">Pazite na &quot;akcija&quot; i &quot;na akciji&quot; - u srpskom su to česte reči i van konteksta popusta (akcija filma, hitna akcija, vojna akcija). Kao Negative Broad mogu da blokiraju upite koji nemaju nikakve veze sa cenom. Proverite Search Terms report pre nego što ih ostavite na Broad, ili ih izbacite ako reč &quot;akcija&quot; u vašoj branši ima drugo značenje.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">3. Polovno, korišćeno i obnovljeno <span className="text-gray-400 font-normal text-sm">(22 termina)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`polovno\npolovni\npolovna\nkorišćeno\nkorišćen\nkorišćena\nsecond hand\nsekend hend\nobnovljeno\nrenoviran\nreparirano\npopravljeno\notvorena kutija\nizložbeni primerak\nrashodovano\nza delove\nsamo za delove\npolovna oprema\noglasi polovno\nkupujem prodajem\nlimundo\nvinted`}</pre>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">4. Uradi-sam i samostalna izrada <span className="text-gray-400 font-normal text-sm">(20 termina)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`DIY\nuradi sam\nuradi sama\nnapravi sam\ndomaća izrada\nručna izrada\nsamostalna izrada\nsamostalna gradnja\nsamostalna montaža\nod nule\nručni rad\nnapravi sopstveni\nsašij sam\nuputstvo za sklapanje\nu kit formi\nplanovi\nnacrt\nšablon besplatno\nrecept besplatno\nkalup sam`}</pre>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">5. Istraživanje, informisanje i edukacija <span className="text-gray-400 font-normal text-sm">(35 termina)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Phrase</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`šta je\nšta znači\ndefinicija\nznačenje\nvikipedija\nwiki\nkako se radi\nkako da\nkako funkcioniše\ntutorijal\nvodič\nkorak po korak\nkurs\nonline kurs\nobuka\nvebinar\nradionica\nčas\nlekcija\nnauči\nnauči online\nobjašnjenje\npregled\nuvod u\nosnove\nosnove za početnike\nza početnike\nza neupućene\npodsetnik\ninfografika\nebook\npdf vodič\nwhitepaper\nstudija slučaja\nseminarski rad`}</pre>
        <p className="text-xs text-gray-500 mt-2 mb-0">Phrase ima smisla za višerečne fraze u ovom bloku - &quot;kako se radi&quot;, &quot;korak po korak&quot;, &quot;za početnike&quot; - gde drži podudaranje na tačnu formulaciju. Za jednorečni termin poput &quot;vodič&quot; ili &quot;kurs&quot;, Phrase i Broad se ponašaju identično - nema potrebe da delite blok, samo ne očekujte da vam Phrase tu nešto suzi.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">6. Poslovi, karijera i zapošljavanje <span className="text-gray-400 font-normal text-sm">(28 termina)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`posao\nposlovi\nkarijera\nzapošljavanje\nzapošljavamo\noglas za posao\noglasi za posao\nslobodno radno mesto\nslobodna radna mesta\nplata\nplate\nzarada\nCV\nbiografija\npropratno pismo\npripravnik\npripravnički staž\npraksa\nstudentska praksa\nrad od kuće\nposao od kuće\nhonorarni posao\nfreelance posao\nposao preko agencije\nagencija za zapošljavanje\nposlovi.infostud\nposlovi.rs\nkonkurs za posao`}</pre>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">7. Recenzije, poređenje i forumi <span className="text-gray-400 font-normal text-sm">(24 termina)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`recenzija\nrecenzije\niskustva\nutisci\nnajbolji\ntop 10\ntop 5\nvs\nprotiv\npoređenje\nupoređeno sa\nalternativa za\nalternative\nkonkurencija\nocena\nocene\nocenjeno\nforum\nforum iskustva\nreddit\nkvora\nžalbe\nda li je prevara\nda li vredi`}</pre>
        <p className="text-xs text-gray-500 mt-2 mb-0">Ako namerno licitirate na imena konkurenata, izbacite &quot;konkurencija&quot; i &quot;alternativa za&quot; iz ovog bloka - to je strateška odluka, ne podrazumevana.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">8. Negativan sentiment i rizik <span className="text-gray-400 font-normal text-sm">(24 termina)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`problem\nproblemi\nkvar\nne radi\npokvareno\nneispravno\ndefekt\nžalba\nžalbe\nprevara\nprevaranti\nlažno\nfalsifikat\nopasno\nopasnost\nrizik\npovlačenje proizvoda\ntužba\nkolektivna tužba\npolitika povraćaja\nloše iskustvo\nrazočaran\nsudska prijava\nprijava inspekciji`}</pre>
      </div>

      <hr />

      {/* ── Brand Safety & Adult Content ── */}
      <h2>Brand safety i sadržaj za odrasle - 39 termina</h2>
      <p>
        Ova kategorija ne postoji u većini objavljenih negativnih template-a koje sam video, pa vredi objasniti zašto je ovde. Shopping, Performance Max i placement-ovi blizu Display mreže mogu da prikažu vaše oglase pored sadržaja kraj kog ne želite da budete, a same pretrage ponekad kombinuju sasvim nevin proizvod sa modifikatorom za odrasle - &quot;[proizvod] gola&quot;, &quot;[proizvod] naked&quot; - što je realan obrazac pretrage za odeću, donji veš, fitnes, wellness, masažu i fotografske usluge, ne samo kod očiglednih kategorija za odrasle.
      </p>
      <p>
        Dve odvojene liste ispod: termini za odrasle/NSFW, i kratka lista nasilja/ilegalnog za naloge gde je i to relevantan rizik (grane blizu oružja, zdravstvo, pravo, finansije).
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">Sadržaj za odrasle / NSFW <span className="text-gray-400 font-normal text-sm">(29 termina)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`porno\nporn\npornografija\nseks\nseksi\nseksualno\nxxx\ngola\ngole slike\ngolotinja\nstriptiz\nstriptizeta\neskort\neskort dama\nsadržaj za odrasle\nsajt za odrasle\nvideo za odrasle\nhentai\nerotika\nerotski\nfetiš\nonlyfans\nkam devojka\nvebkam seks\nhookup\naplikacija za slobodne veze\nupoznavanje za sex\nmilf\nkamgerl`}</pre>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">Nasilje / ilegalno <span className="text-gray-400 font-normal text-sm">(10 termina)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`nasilje\ngore sadržaj\noružje\npištolj na prodaju\nilegalno\ndroga\ndiler droge\ngovor mržnje\nekstremizam\nterorizam`}</pre>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Ova lista je dopuna, ne zamena</p>
        <p className="text-blue-800 text-base mb-0">
          Negativne ključne reči blokiraju samo sam upit za pretragu. Za brand safety na nivou placement-a na Display i Video mreži (izbegavanje konkretnih sajtova ili kategorija sadržaja u potpunosti), koristite Google Ads-ova sopstvena podešavanja isključenja placement-a i sadržaja na nivou naloga ili kampanje - to dvoje radi zajedno, jedno ne zamenjuje drugo.
        </p>
      </div>

      <hr />

      {/* ── AI Generation Section ── */}
      <h2>Napravite sopstvenu listu uz AI - način za 2026</h2>
      <p>
        Liste iznad su namerno generičke - primenjive na skoro svaki nalog. Najbrži način da dobijete listu koja stvarno poznaje vaš biznis je da jezičkom modelu date svoje specifičnosti. Nalepite prompt ispod u ChatGPT, Claude ili Gemini, popunite šest unosa, i vratiće vam listu organizovanu na isti način kao ova stranica, sa match tipom i razlogom uz svaki termin.
      </p>

      <div className="bg-slate-900 text-white rounded-xl p-5 md:p-6 my-6">
        <p className="text-xs uppercase tracking-[0.15em] text-slate-400 mb-3">Kopirajte ovaj prompt</p>
        <pre className="bg-black/30 rounded-lg p-4 text-sm font-mono text-slate-100 overflow-x-auto whitespace-pre-wrap">{`Ti si specijalista za negativne ključne reči u Google Ads-u. Daću ti informacije o svom biznisu - koristi ih da napraviš negativnu listu, ne generičku.

1. Tip biznisa/grana: [npr. "premium eCommerce nameštaj, srednji cenovni razred"]
2. Proizvodi/usluge koje prodajem (nabroj ih): [nalepi listu]
3. Lokacije koje pokrivam: [gradovi/države]
4. Lokacije koje izričito NE pokrivam (ako je relevantno): [lista]
5. Termini koji IZGLEDAJU negativno ali su zapravo deo moje ponude (izuzeci - ne predlaži ove): [npr. "besplatna dostava" JESTE nešto što nudim]
6. Tip kampanje: [Search / Shopping / Performance Max / Local Services]

Generiši negativnu listu ključnih reči organizovanu u ove kategorije: univerzalno (besplatno, jeftino, poslovi, uradi-sam, informativno/kako-da, polovno, recenzije/forumi, negativan sentiment), brand safety (odrasli/NSFW, nasilje, ilegalno - samo ako je relevantno za moju kategoriju proizvoda), specifično za moju granu, lokacija (pretrage za mesta koja ne pokrivam), i imena konkurenata (navedi odvojeno - naznači da je licitiranje na termine konkurencije legitimna strategija koju neki biznisi svesno biraju, tako da je ovo moja odluka, ne podrazumevana).

Za svaku ključnu reč: predloži match tip (Broad/Phrase/Exact) sa razlogom u jednoj rečenici, i nivo pouzdanosti (Visok/Srednji/Nizak) - označi sve nejasno da ja odlučim.

Ne uključuj nijednu reč koja se poklapa sa nazivima mojih proizvoda ili usluga, čak ni delimično, osim ako ti nisam rekao da je irelevantna za moju ponudu.

Izlaz kao tabela: Ključna reč | Match tip | Kategorija | Pouzdanost | Razlog`}</pre>
      </div>

      <p>
        Ono što model vrati je nacrt, ne gotov uvoz. Svaki nalog na kom sam ovo pokrenuo dao je bar par predloga koji bi blokirali stvarnog kupca da su nalepljeni naslepo. Provucite svaku listu - AI-generisanu ili ne - kroz ovih sedam provera prvo.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold mb-3">7 pravila pre nego što dodate ijedan AI predlog</p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
            <div><strong>Unakrsno proverite sa svojom stvarnom listom ključnih reči.</strong> <span className="text-gray-500">Ista reč može biti negativna za vas a prodajni argument za sledeći nalog - &quot;besplatna dostava&quot; je dobar primer.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
            <div><strong>Proverite obim u Search Terms reportu pre dodavanja na Broad.</strong> <span className="text-gray-500">Za sve nejasno, počnite na Phrase i širite tek posle potvrde nula konverzija.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
            <div><strong>Nikad ne dozvolite modelu da sam doda imena konkurenata kao negative.</strong> <span className="text-gray-500">Licitiranje na termine konkurencije je namerna strategija za neke biznise - blokiranje je vaša odluka, ne podrazumevana koju bi model trebalo da donese umesto vas.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
            <div><strong>Ponovo proverite lokacijske negative u odnosu na stvarnu teritoriju usluge.</strong> <span className="text-gray-500">Model zna samo ono što ste upisali u prompt - nema nezavisan uvid u to gde stvarno poslujete.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
            <div><strong>Ručno pregledajte svaku stavku sa &quot;niskom pouzdanošću&quot;.</strong> <span className="text-gray-500">Ne uvozite ih masovno - taj flag postoji da ih pogledate jednu po jednu.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">6</span>
            <div><strong>Dodajte u serijama od 20-30, pa pratite nedelju-dve.</strong> <span className="text-gray-500">Proverite Search Terms report posle svake serije pre nego što dodate sledeću - potvrđuje da niste blokirali upit koji konvertuje.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-xs font-bold">7</span>
            <div><strong>Tretirajte AI listu za odrasle/NSFW kao dopunu, ne kao svoj brand safety sistem.</strong> <span className="text-gray-500">Uparite je sa Google Ads-ovim sopstvenim isključenjima placement-a i sadržaja - same negativne ključne reči nisu sistem bezbednosti sadržaja.</span></div>
          </div>
        </div>
      </div>

      <hr />

      {/* ── Industry lists ── */}
      <h2>Granske negativne liste - 165 termina, 5 grana</h2>
      <p>
        Pored univerzalne liste, svaka grana ima svoj saobraćaj koji ne kupuje. Ovih pet ide dublje od kratke dodatne liste - svaka cilja na specifičan način na koji izgledaju informativne i nekomercijalne pretrage baš te grane.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">1. B2B / SaaS - blokiranje potrošačke namere <span className="text-gray-400 font-normal text-sm">(41 termin)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Phrase</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`za ličnu upotrebu\nza kućnu upotrebu\nlična upotreba\njedan korisnik\nindividualna licenca\nstudentski popust\nstudentska licenca\nbesplatno za studente\nnekomercijalno\npopust za neprofitne\ncena za neprofitne\nhobi projekat\nmali lični projekat\ndownload apk\ndownload exe\nmod apk\nkreknuta verzija\nnulled\nGPL licenca\ngenerator licence\nbesplatan ključ za aktivaciju\nzaobilaženje licence\ndžejlbrejk\nrutovanje\nopen source alternativa\nsamostalno hostovano besplatno\ndocker besplatno\ngithub besplatno\nbesplatan api paket\nprodužetak probnog perioda\ndoživotna ponuda\nappsumo\njednokratno plaćanje doživotno\nreseler licenca\nwhite label besplatno\nposao programer\nplata programera\nIT karijera\nsistem administrator posao\nposao developer\nobuka za programiranje`}</pre>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">2. eCommerce - blokiranje informativne namere <span className="text-gray-400 font-normal text-sm">(39 termina)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Phrase</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`tabela veličina\nvodič za veličine\nkako izmeriti\nkako oprati\nkako prati\nkako kombinovati\nkako nositi\nideje za kombinovanje\nšta obući uz\nuputstvo za održavanje\nlista sastojaka\nnutritivne vrednosti\nsastav materijala\nuputstvo za upotrebu\nkorisničko uputstvo\ntehnički list\nspecifikacije\ndatasheet\nraspakivanje\nunboxing video\nrastavljanje\nkako se pravi\nproces proizvodnje\ndobavljač\nkontakt proizvođača\nveleprodajni dobavljač\ndropshipping dobavljač\nproizvođač privatne robne marke\nprint on demand\nuzorak paket\nuzorak boje\nkatalog pdf\nlukbuk\npres kit\nmedijski kit\npartnerski program\npostani preprodavac\npolitika povraćaja\nreklamacija garancije`}</pre>
        <p className="text-xs text-gray-500 mt-2 mb-0">Vlasnici već kupljenih proizvoda takođe pretražuju ove termine - to je u redu, oni ne klikću na vaš oglas da kupe ponovo. Blokiranje ovoga drži budžet na ljudima koji još biraju šta da kupe.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">3. Lead-gen / lokalne usluge <span className="text-gray-400 font-normal text-sm">(36 termina)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Phrase</span>
        </div>
        <p className="text-xs text-gray-500 mb-2"><strong>Dodajte ručno (prvo prilagodite):</strong> &quot;uradi sam [vaša usluga]&quot; - npr. &quot;uradi sam popravka vodovoda&quot;, &quot;uradi sam popravka krova&quot;. Namerno izbačeno iz bloka ispod da se ne nalepi sa zagradama.</p>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`kako popraviti sam\nsamostalna popravka\nyoutube tutorijal\nbesplatan kalkulator procene\nkalkulator troškova\nprosečna cena\ncenovnik\ncena po satu\nsatnica\ndnevnica\nuslovi za licencu\nkako postati\nkurs za sertifikat\nkurs obuke\npripravnički staž\nfranšiza prilika\ncena franšize\npokreni biznis\nšablon biznis plana\nuslovi osiguranja\nzahtev za dozvolu\nuradi sam komplet\niznajmi opremu\noprema na prodaju\niznajmljivanje alata\nžalba na\npodnesi prijavu\nmali sudski spor\nombudsman\ntržišna inspekcija\nstrukovno udruženje\nsindikalne cene\npripravnička plata\ncene podizvođača\nšablon fakture\nšablon ugovora`}</pre>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">4. Lokalni biznis - pogrešna lokacija / pogrešna usluga <span className="text-gray-400 font-normal text-sm">(25 termina)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Phrase</span>
        </div>
        <p className="text-xs text-gray-500 mb-2"><strong>Dodajte ručno (prvo prilagodite):</strong> gradove odmah van vašeg radijusa usluge (tu se stvarno koncentriše potrošen lokalni budžet); imena direktnih konkurenata, ako ste odlučili da ne licitirate na njih; &quot;posao u [vaša firma]&quot;; &quot;praksa u [vaša firma]&quot;. Namerno izbačeno iz bloka ispod da se ništa sa zagradama ne nalepi naslepo.</p>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`samo online\nusluga na daljinu\nvirtuelni termin\nširom Srbije\nnacionalni lanac\nmobilna aplikacija verzija\nsamo dostava\nsamo preuzimanje\nfranšiza u blizini\nkorporativna kancelarija\nsedište firme\ncentrala\nbroj korisničke podrške\nlinija za žalbe\nsektor za ljudske resurse\nodnosi sa investitorima\nupiti za medije\nkontakt za medije\nzahtev za sponzorstvo\nzahtev za donaciju\nzahtev za humanitarnu pomoć\nvolontiranje\nupravni odbor\ngodišnji izveštaj\nakcionar`}</pre>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <h3 className="mt-0 mb-0 font-heading font-bold">5. Edukacija / karijera - za biznise van obrazovanja <span className="text-gray-400 font-normal text-sm">(24 termina)</span></h3>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap">Negative Broad</span>
        </div>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-800 overflow-x-auto whitespace-pre">{`stipendija\nstudentski kredit\nfinansijska pomoć\nkonkurs za grant\npomoć oko diplomskog\npomoć oko master rada\npisanje seminarskog za novac\npomoć sa domaćim zadatkom\nodgovori na ispit\nstari ispitni rokovi\nsilabus\nnastavni plan\nskripta sa predavanja\nprofesor\nnastavno osoblje\nupis\nrok za upis\nškolarina\nobilazak kampusa\nstudentski dom\nsmeštaj za studente\nposlovi za diplomce\nasistent u nastavi\nmesto predavača`}</pre>
        <p className="text-xs text-gray-500 mt-2 mb-0">Za svakog ko NE vodi obrazovnu instituciju - ovo blokira studente i tražioce posla koji zalutaju u nepovezane kategorije (finansije, softver, lokalne usluge) dok pretražuju teme oko škole i karijere.</p>
      </div>

      <hr />

      {/* ── What's new in 2026 ── */}
      <h2>Šta se promenilo kod negativnih ključnih reči za 2026</h2>
      <p>
        Sa 421 terminom kroz 15 kategorija, pitanje koje većina ljudi postavlja pre nego što bilo šta od ovoga nalepi jeste da li ima mesta za to. Kratak odgovor: da, i to ubedljivo - limiti nisu ni blizu. Evo gde negativi trenutno mogu da žive u nalogu, sa limitima, direktno iz Google-ove dokumentacije.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Nivo</th>
              <th className="py-3 px-3 font-heading font-semibold">Pokrivenost</th>
              <th className="py-3 px-3 font-heading font-semibold">Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Negativna lista na nivou naloga</td>
              <td className="py-3 px-3">Jedna lista, automatski primenjena na Search, Shopping, Performance Max, App, Smart i Local kampanje</td>
              <td className="py-3 px-3">1.000 termina</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3 font-medium">Deljena negativna lista</td>
              <td className="py-3 px-3">Primenjuje se na kampanje koje izaberete, uključujući - od 2025 - Performance Max</td>
              <td className="py-3 px-3">5.000 termina po listi, do 20 lista po nalogu, svaka lista primenjiva na do 1.000 kampanja</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Performance Max na nivou kampanje</td>
              <td className="py-3 px-3">Pojedinačni negativi i, od 2025, negativne liste direktno na nivou kampanje - sada self-servisno u interfejsu, ranije samo preko Google predstavnika ili API-ja</td>
              <td className="py-3 px-3">Limit se razlikuje od limita deljene liste iznad - Google-ova <a href="https://support.google.com/google-ads/answer/15726455" target="_blank" rel="noopener noreferrer" className="underline">stranica o Performance Max negativnim ključnim rečima</a> ne objavljuje broj, proverite je pre nego što se oslonite na neki</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Lista na nivou naloga je ta koju treba upamtiti</p>
        <p className="text-blue-800 text-base mb-0">
          Jedna lista podešena u Account Settings sada automatski pokriva Performance Max - nema potrebe da je ručno duplirate u svaku PMax kampanju. Izvor: <a href="https://support.google.com/google-ads/answer/11396330" target="_blank" rel="noopener noreferrer" className="underline">Google Ads Help - negativne ključne reči na nivou naloga</a>.
        </p>
      </div>

      <p>
        Još jedan detalj vredan pamćenja dok ovo lepite unutra: negativni match tipovi se ponašaju drugačije od pozitivnih. Negative Broad se ne širi na sinonime kao pozitivan Broad - blokiranje &quot;besplatno&quot; i dalje propušta &quot;gratis&quot; ako ga ne dodate posebno. Nije osetljivo na velika i mala slova, pa vam ne trebaju &quot;Besplatno&quot; i &quot;besplatno&quot; kao dva reda - ali close variant podudaranje, koje na pozitivnoj strani hvata greške u kucanju, na negative se ne odnosi. Ako vam je bitna neka uobičajena greška u kucanju termina koji blokirate, dodajte je kao poseban red. Kompletno ponašanje i primeri su u{" "}
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="underline font-semibold">
          Vodiču za negativne ključne reči
        </Link>
        . Izvori: <a href="https://support.google.com/google-ads/answer/2453972" target="_blank" rel="noopener noreferrer" className="underline">ponašanje match tipova</a>, <a href="https://support.google.com/google-ads/answer/15726455" target="_blank" rel="noopener noreferrer" className="underline">Performance Max negativne ključne reči</a>, <a href="https://support.google.com/google-ads/answer/7449003" target="_blank" rel="noopener noreferrer" className="underline">limiti negativne liste ključnih reči</a>.
      </p>

      <hr />

      {/* ── FAQ ── */}
      <h2>Najčešća pitanja</h2>

      <div className="space-y-4 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Mogu li da kopiram ovu listu direktno i nalepim je u svoj nalog?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Možete kopirati bilo koji blok iznad i nalepiti ga u Negative Keyword List ili u Google Ads Editor import - tačno za to format i služi. Ali prvo pročitajte kategoriju i obrišite sve što je zapravo deo vaše ponude (besplatna dostava, polovna roba, kurs koji prodajete). Nijedna objavljena lista, uključujući ovu, ne poznaje vaš biznis bez tog koraka.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li ova lista radi za Shopping i Performance Max?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Da. Ako ove termine dodate u negativnu listu na nivou naloga, automatski se primenjuju na Search, Shopping, Performance Max, App, Smart i Local kampanje. Performance Max sada takođe direktno prihvata negative i negativne liste na nivou kampanje - do 2025. je to bilo moguće samo preko Google predstavnika ili API-ja, sada je self-servisno u interfejsu. Izvor: <a href="https://support.google.com/google-ads/answer/15726455" target="_blank" rel="noopener noreferrer" className="underline">Performance Max negativne ključne reči</a>.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Po čemu se ovo razlikuje od Vodiča za negativne ključne reči?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="underline">Vodič za negativne ključne reči</Link> je kako i zašto - ponašanje match tipova, sistem organizacije u tri sloja, stvarna studija slučaja, kako da izvučete sopstvene negative iz Search Terms reporta. Ova stranica je šta - 421 termin spreman za lepljenje kroz 15 kategorija, plus AI prompt za pravljenje prilagođenog seta. Pročitajte vodič jednom, vraćajte se ovde kad god vam trebaju termini.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li treba samo da koristim AI da generišem celu listu umesto ove?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Oboje, tim redosledom. Krenite od lista na ovoj stranici - one su skinule nagađanje sa univerzalnih i brand safety kategorija. Onda pokrenite AI prompt sa svojim konkretnim proizvodima, lokacijama i izuzecima da popunite ono što generička lista ne može da zna. Proverite svaki AI predlog kroz sedam pravila pre dodavanja - model ne vidi vaš nalog, vaš Search Terms report ni vašu stvarnu teritoriju usluge.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Koliko često treba da ažuriram ovu listu?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Nalepite relevantne kategorije jednom kao polaznu tačku, a Search Terms report tretirajte kao stvarni, tekući izvor - nedeljno prvog meseca nove kampanje, pa minimum mesečno posle toga. Ova statična lista vas dovodi do razumne osnove prvog dana; ne zamenjuje praćenje šta ljudi stvarno pretražuju.
          </div>
        </details>
      </div>

      <hr />

      {/* ── CTA ── */}
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Koliko vašeg budžeta curi na pretrage koje nikad neće konvertovati?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Nudim besplatnu analizu Search Terms izveštaja vašeg naloga - gde se stvarno gubi budžet, koje od ovih kategorija se odnose na vas, i šta prvo popraviti. Bez prodajne priče, samo brojke.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/audit" className="btn-secondary inline-block">
            Zakažite besplatan audit
          </Link>
          <Link href="/kontakt" className="inline-block px-6 py-3 border-2 border-slate-500 text-slate-300 rounded-lg hover:border-white hover:text-white transition-colors text-sm font-semibold">
            Radije popričajte sa mnom
          </Link>
        </div>
      </div>

      <hr />

      {/* ── Related guides ── */}
      <h2>Povezani vodiči</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "negativne-kljucne-reci" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Vodič za negativne ključne reči</p>
          <p className="text-xs text-gray-500 mb-0">Match tipovi, organizacija i kako pronaći sopstvene negative</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "kljucne-reci-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Ključne reči - kompletan vodič</p>
          <p className="text-xs text-gray-500 mb-0">Od istraživanja do optimizacije ključnih reči</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Google Ads Audit Checklista</p>
          <p className="text-xs text-gray-500 mb-0">80+ tačaka za kompletan pregled naloga</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-search-kampanje-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">Vodič za Google Search kampanje</p>
          <p className="text-xs text-gray-500 mb-0">Kako se gradi Search kampanja od nule</p>
        </Link>
      </div>

      <div className="mt-10 text-sm text-gray-500">
        Poslednje ažuriranje: Avgust 2026
      </div>
      <div className="text-sm text-gray-500">
        Autor: Slobodan Jelisavac, Google Ads konsultant
      </div>
    </>
  );
}
