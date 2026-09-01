import { Link } from "@/i18n/navigation";
import { CheckCircle, XCircle } from "lucide-react";

export default function ChatGptAdsEvropaPost() {
  return (
    <>
      <p>
        Radim sa evropskim i UK klijentima (Chelleon UK, Best at Printing, Pickbox HRV) i poslednjih nedelja čitam gomilu tekstova o ChatGPT Ads. Skoro svi su pisani iz američke perspektive: američki minimalni budžeti, američke kategorije, američki podaci o klikovima. Problem je što se ChatGPT Ads u Evropi ne ponaša isto kao u SAD - pravila su drugačija, i niko ko prepisuje američki vodič to ne kaže.
      </p>
      <p>
        Evropski rollout je stigao 24. avgusta 2026, self-serve nalozi 31. avgusta. Otad postoje dve stvari koje menjaju kako treba da razmišljate o ovom kanalu ako radite u EU ili UK: u Evropskom ekonomskom prostoru trenutno nema personalizacije oglasa, i do kraja decembra stiže javni registar oglasa po Digital Services Act-u. Ovaj tekst je o tome šta ta dva pravila stvarno menjaju u praksi.
      </p>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">ChatGPT Ads su od 24.8.2026 živi na 31 evropskom tržištu (27 članica EU plus Island, Lihtenštajn, Norveška, Švajcarska). U Evropskom ekonomskom prostoru oglasi se trenutno biraju bez personalizacije - samo po tekućem razgovoru, gruboj lokaciji i jeziku. Do kraja decembra 2026, po Digital Services Act-u, stiže javni registar oglasa - uvid u tuđe kampanje na poznat datum.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">31</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">evropsko tržište od 24.8</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Bez personalizacije</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">u EEA i Švajcarskoj</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Dec 2026</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">javni registar oglasa (DSA)</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8" id="istorija-izmena">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-700 mb-2 font-semibold">🔄 Živi vodič - istorija izmena</p>
        <p className="text-sm text-gray-600 mb-3">Ovaj vodič se ažurira kako se evropska pravila menjaju. Šta je novo:</p>
        <ul className="text-sm text-gray-700 space-y-1 mb-0 list-disc pl-5">
          <li><strong>Septembar 2026:</strong> prva verzija vodiča: evropski rollout, EEA personalizacija, consent model, DSA registar oglasa, dozvoljene kategorije, prvi koraci za evropski brend.</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-blue-200 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <p className="text-xs uppercase tracking-[0.15em] text-blue-600 font-bold mb-2">
          Brzi odgovor
        </p>
        <p className="text-base md:text-lg text-gray-900 font-heading font-semibold mb-3">
          Da li ChatGPT Ads rade u Evropi?
        </p>
        <p className="text-base text-gray-700 mb-0 leading-relaxed">
          Da. ChatGPT Ads su od 24.8.2026 živi u svih 27 članica EU plus Island, Lihtenštajn, Norveška i Švajcarska, a self-serve nalozi su otvoreni od 31.8.2026. Razlika prema SAD: u Evropskom ekonomskom prostoru oglas se trenutno bira <strong>bez personalizacije</strong> - samo po tekućem razgovoru, gruboj lokaciji i jeziku, bez memorije ili istorije prošlih razgovora.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-8">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-700 mb-2 font-semibold">Za srpski i regionalni kontekst</p>
        <p className="text-base text-gray-700 mb-0">
          Srbija je van liste sa obe strane - oglasi se ne prikazuju srpskim korisnicima i srpska firma ne može da otvori advertiser nalog. Isto važi za ceo ne-EU Zapadni Balkan (BiH, Crna Gora, Severna Makedonija, Albanija, Kosovo). Hrvatska i Slovenija jesu na listi - jedina dva ex-Yu tržišta. Ako firma ima stvaran pravni entitet u EU ili UK, može da krene odmah kroz taj entitet. Policy izričito zabranjuje lažno predstavljanje lokacije biznisa, pa registracija firme negde drugde samo da se zaobiđe blok nije siva zona nego kršenje pravila - jedini čist put je stvaran entitet, klijentov ili sopstveni.
        </p>
      </div>

      <hr />
      <nav className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-semibold">Sadržaj</p>
        <ol className="space-y-1.5 list-none pl-0 mb-0">
          <li><a href="#rollout" className="block py-1 text-base text-gray-700 hover:text-primary underline">Evropski rollout</a></li>
          <li><a href="#personalizacija" className="block py-1 text-base text-gray-700 hover:text-primary underline">Bez personalizacije: šta to stvarno znači</a></li>
          <li><a href="#consent" className="block py-1 text-base text-gray-700 hover:text-primary underline">Consent model i nadzor</a></li>
          <li><a href="#dsa" className="block py-1 text-base text-gray-700 hover:text-primary underline">DSA: javni registar oglasa do kraja 2026</a></li>
          <li><a href="#kategorije" className="block py-1 text-base text-gray-700 hover:text-primary underline">Kategorije koje Evropu bole</a></li>
          <li><a href="#sledeci-koraci" className="block py-1 text-base text-gray-700 hover:text-primary underline">Šta evropski brend treba da uradi sada</a></li>
          <li><a href="#faq" className="block py-1 text-base text-gray-700 hover:text-primary underline">Često postavljana pitanja</a></li>
        </ol>
      </nav>

      <h2 id="rollout">Evropski rollout</h2>
      <p>
        OpenAI je 18.8.2026 najavio ekspanziju na 31 evropsko tržište, a oglasi su krenuli da se prikazuju korisnicima 24.8.2026. Reč je o svih 27 članica Evropske unije plus Island, Lihtenštajn, Norveška i Švajcarska - zajedno se u OpenAI-jevoj komunikaciji vode kao "evropsko tržište". Self-serve kupovina preko Ads Manager-a otvorena je nedelju dana kasnije, 31.8.2026, zajedno sa Indijom i delovima Bliskog istoka i Severne Afrike.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>18.8.2026 - najava</strong> <span className="text-gray-500">OpenAI objavljuje ekspanziju ChatGPT Ads na 31 evropsko tržište.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>24.8.2026 - oglasi žive</strong> <span className="text-gray-500">Korisnici u EU, Islandu, Lihtenštajnu, Norveškoj i Švajcarskoj počinju da viđaju oglase, bez personalizacije.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>31.8.2026 - self-serve otvoren</strong> <span className="text-gray-500">Ads Manager postaje dostupan evropskim oglašivačima direktno, bez posrednika.</span></div>
          </div>
        </div>
      </div>

      <p>
        Oglase u ChatGPT-u vide samo ulogovani korisnici na <strong>Free i Go</strong> planovima. Plus, Pro, Business, Enterprise i Edu korisnici oglase ne vide uopšte. Bez oglasa su i korisnici mlađi od 18 godina, Temporary Chats i Atlas browser. Free korisnik može da se odrekne oglasa u zamenu za manje limite poruka, u Settings pod Ads controls.
      </p>
      <p>
        Vredi zapamtiti da postoje dve različite liste koje se lako pobrkaju: lista tržišta gde se oglasi prikazuju (41 zemlja globalno, uključujući te 31 evropske) i lista zemalja gde firma može da otvori self-serve nalog (47 zemalja). Za Evropu se to poklapa - svih 31 tržište je na obe liste - ali za neke druge regione se ne poklapa, pa je bolje proveravati konkretno tržište pre nego pretpostaviti.
      </p>

      <hr />

      <h2 id="personalizacija">Bez personalizacije: šta to stvarno znači</h2>
      <p>
        Ovo je najvažnija razlika u odnosu na SAD, i deo koji najmanje ljudi u evropskim timovima stvarno razume. U Evropskom ekonomskom prostoru i Švajcarskoj, personalizovani oglasi trenutno nisu dostupni. Oglas se ne bira na osnovu toga ko ste, nego isključivo na osnovu onoga što se dešava u tom razgovoru.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><CheckCircle size={14} strokeWidth={1.5} className="text-green-600" /> Šta se koristi</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Tekući razgovor, gruba lokacija, jezik</h3>
          <p className="text-base text-gray-600 mb-0">Oglas se bira na osnovu teme i namere razgovora koji je trenutno u toku, plus grube lokacije korisnika i jezika na kom razgovara. To je ceo signal.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5"><XCircle size={14} strokeWidth={1.5} className="text-red-500" /> Šta se ne koristi</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Memorija, prošli razgovori, ad istorija</h3>
          <p className="text-base text-gray-600 mb-0">Nema pristupa prošlim razgovorima, memoriji korisnika niti istoriji ranije viđenih oglasa - sve što je u SAD deo signala, u Evropi trenutno ne postoji.</p>
        </div>
      </div>

      <p>
        Strateška posledica: u Evropi trenutno ne postoji audience sloj iza kog prosečna poruka i prosečan kreativ mogu da se sakriju. U SAD kampanja koja lošije targetira može delimično da nadoknadi kroz uže publike i istoriju ponašanja. U Evropi tog sigurnosnog pojasa nema - <strong>context hints (slobodan opis teme razgovora na nivou ad grupe) i sam kreativ nose ceo mehanizam</strong>. Ako oni ne pogode temu i ton razgovora, oglas se jednostavno neće pojaviti tamo gde treba.
      </p>
      <p>
        Vredi znati i da opt-out u Evropi ne uklanja oglase u potpunosti - samo menja koje oglase korisnik vidi. To znači da evropski korisnik koji je isključio personalizaciju (gde god je dostupna) i dalje ostaje u inventaru, samo se bira drugačijim putem.
      </p>

      <hr />

      <h2 id="consent">Consent model i nadzor</h2>
      <p>
        Nadzor nad ChatGPT Ads u Evropi vodi <strong>OpenAI Ireland Ltd</strong>, koja je označena kao data controller, a nadležan regulator je irski Data Protection Commission (DPC) - isti model koji koriste i drugi veliki tech igrači sa evropskim sedištem u Irskoj.
      </p>
      <p>
        Kad personalizacija u Evropi bude uvedena, gradiće se na <strong>eksplicitnom pristanku korisnika</strong>, a ne na "legitimate interest" osnovu koja je u drugim kontekstima često korišćena kao zaobilaznica. Privacy policy je ažuriran 14.8.2026, uoči evropskog lansiranja.
      </p>
      <p>
        Za oglašivača je bitno da ostane realan po pitanju šta uopšte može da dobije: oglašivač nikad ne dobija sadržaj razgovora, istoriju, memorije, ime, email, preciznu lokaciju niti IP adresu korisnika - samo agregirane podatke o performansi kampanje. Ovo važi globalno, ne samo u Evropi, ali u kombinaciji sa odsustvom personalizacije to znači da evropski oglašivač radi sa manje signala nego američki kolega, sa obe strane linije.
      </p>

      <hr />

      <h2 id="dsa">DSA: javni registar oglasa do kraja 2026</h2>
      <p>
        Evropska komisija je 31.8.2026 designirala ChatGPT kao <strong>Very Large Online Search Engine (VLOSE)</strong> po Digital Services Act-u, na osnovu 159,1 miliona mesečnih korisnika u EU. Ta oznaka nosi konkretne obaveze, sa rokom usklađivanja do <strong>kraja decembra 2026</strong>.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
        <p className="text-sm font-bold text-slate-900 mb-2">Šta VLOSE oznaka konkretno traži</p>
        <p className="text-sm text-gray-700 mb-0">Transparentnost po svakom pojedinačnom oglasu (Art. 26), zabranu profilisanja maloletnika u oglašavanju (Art. 28(2)), i javni ad repository koji se javno čuva godinu dana (Art. 39) - sadrži sadržaj oglasa, ime oglašivača, period prikazivanja, targeting parametre i domet.</p>
      </div>

      <p>
        Praktično, to je "Meta Ad Library za ChatGPT" - samo sa unapred poznatim datumom kad počinje da radi. Za oglašivača to znači da će konkurentske kampanje, njihovi tekstovi, trajanje i targeting postati javno vidljivi krajem godine. Ko se pripremi da to iskoristi za istraživanje konkurencije, ulazi u 2027. sa uvidom koji do sada nije postojao ni na jednoj drugoj AI platformi.
      </p>

      <hr />

      <h2 id="kategorije">Kategorije koje Evropu bole</h2>
      <p>
        Policy koji važi od 31.8.2026 (openai.com/policies/ad-policies) dozvoljava trenutno samo ograničen set potrošačkih kategorija. Za tri kategorije koje evropski konsultanti i agencije najviše traže - finansije, zdravstvo i pravne usluge - oglašavanje je dozvoljeno samo oglašivačima u SAD, uz ručno odobrenje.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-3 font-heading font-semibold">Kategorija</th>
              <th className="py-3 px-3 font-heading font-semibold">Status u Evropi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">eCommerce, kućni i potrošački proizvodi</td>
              <td className="py-3 px-3"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Dozvoljeno</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3">Putovanja i zabava</td>
              <td className="py-3 px-3"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Dozvoljeno</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Digitalni proizvodi</td>
              <td className="py-3 px-3"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Dozvoljeno</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3">Edukacija i lokalne usluge</td>
              <td className="py-3 px-3"><span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">Dozvoljeno</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Finansijske usluge</td>
              <td className="py-3 px-3"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Samo SAD</span></td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-3">Zdravstvo</td>
              <td className="py-3 px-3"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Samo SAD</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-3 font-medium">Pravne usluge</td>
              <td className="py-3 px-3"><span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-0.5 rounded">Samo SAD</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        To je velika, često previđena rupa u tražnji. Evropska klinika, advokatska kancelarija ili fintech startap trenutno ne mogu da se oglašavaju na ChatGPT-u, koliko god budžeta imali - kategorija je zaključana na nivou policy-ja, ne na nivou naloga. Ako radite sa klijentom u jednoj od te tri vertikale, ovo je prvo što proveravate, pre bilo kakvog pitch-a.
      </p>

      <hr />

      <h2 id="sledeci-koraci">Šta evropski brend treba da uradi sada</h2>
      <p>
        Redosled koji ja pratim kad evropski klijent pita da li da uđe u ChatGPT Ads.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 my-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div><strong>Proverite kategoriju</strong> <span className="text-gray-500">- ako je klijent u finansijama, zdravstvu ili pravnim uslugama, priča se ovde završava dok se policy ne promeni.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div><strong>Otvorite nalog i postavite OAIQ pixel / Conversions API pre prvog oglasa</strong> <span className="text-gray-500">- tracking mora biti živ pre lansiranja, ne posle prvog reporta.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div><strong>Napišite context hint strategiju za razgovore evropskih kupaca</strong> <span className="text-gray-500">- i to na lokalnim jezicima gde je to relevantno, jer se oglas bira i po jeziku razgovora, ne samo po temi.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
            <div><strong>Krenite sa malim research budžetom</strong> <span className="text-gray-500">- ovo je test kanala, ne zamena za Search. Bez personalizacije u Evropi, prvi ciklus služi da vidite kako context hints i kreativ rade u praksi.</span></div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
            <div><strong>Neka analitika bude izvor istine, ne Ads Manager dashboard</strong> <span className="text-gray-500">- praktičari izveštavaju o razlici između klikova koje platforma prijavljuje i sesija koje analitika vidi. Uzrok te razlike još nije utvrđen, ali je pošteno pomenuti je klijentu unapred, ne posle prvog izveštaja.</span></div>
          </div>
        </div>
      </div>

      <hr />

      <h2 id="faq">Često postavljana pitanja</h2>

      <div className="space-y-3 my-6">
        <details className="bg-white border-2 border-gray-200 rounded-xl group" open>
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            U kojim evropskim zemljama ChatGPT Ads rade?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            U svih 27 članica Evropske unije plus Island, Lihtenštajn, Norveška i Švajcarska - ukupno 31 tržište. Oglasi su korisnicima počeli da se prikazuju 24.8.2026, a self-serve nalozi za oglašivače su otvoreni od 31.8.2026. Van te liste, u regionu, ostaju Srbija i ceo ne-EU Zapadni Balkan.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Da li mogu da targetiram po publikama u EU?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Ne na način na koji ste navikli iz drugih platformi. U Evropskom ekonomskom prostoru i Švajcarskoj oglasi se trenutno biraju bez personalizacije - samo po tekućem razgovoru, gruboj lokaciji i jeziku. Nema memorije, prošlih razgovora niti ad istorije koje bi ušle u izbor. Ono što oglašivač i dalje kontroliše su context hints na nivou ad grupe i geo targeting, ali oba su znatno grublji alat nego audience targeting na koji ste navikli.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Šta je DSA registar oglasa i kada stiže?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Evropska komisija je 31.8.2026 designirala ChatGPT kao Very Large Online Search Engine po Digital Services Act-u, sa rokom usklađivanja do kraja decembra 2026. Deo obaveza je javni ad repository - registar koji čuva sadržaj oglasa, ime oglašivača, period prikazivanja, targeting parametre i domet, dostupan javno godinu dana. U praksi je to slično onome što Meta Ad Library radi za Facebook i Instagram oglase, samo za ChatGPT.
          </div>
        </details>

        <details className="bg-white border-2 border-gray-200 rounded-xl group">
          <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
            Može li firma iz Srbije da se oglašava?
            <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
          </summary>
          <div className="px-5 pb-5 text-base text-gray-600 border-t border-gray-100 pt-3">
            Direktno ne. Srbija nije na listi ni za prikazivanje oglasa ni za otvaranje advertiser naloga, kao ni ostatak ne-EU Zapadnog Balkana. Hrvatska i Slovenija jesu dostupne. Ako firma ima stvaran pravni entitet u jednoj od podržanih zemalja - na primer u EU ili UK - može da se oglašava kroz taj entitet. Registracija firme negde drugde samo da bi se zaobišao blok nije dozvoljena po policy-ju, koji izričito zabranjuje lažno predstavljanje lokacije biznisa.
          </div>
        </details>
      </div>

      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">Razmišljate o ChatGPT Ads za evropski nalog?</p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">Pomažem evropskim i UK brendovima da procene da li im ChatGPT Ads ima smisla, i da postave context hints, tracking i budžet kako treba pre prvog oglasa. Zakažite besplatnu konsultaciju.</p>
        <Link href="/kontakt" className="btn-secondary inline-block">Zakažite besplatnu konsultaciju</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href="/usluge/chatgpt-ads" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">ChatGPT Ads usluga</p>
          <p className="text-xs text-gray-500 mb-0">Postavljanje, targeting i vođenje ChatGPT Ads kampanja za evropske naloge.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">ChatGPT Ads vodič: sve što treba da znate</p>
          <p className="text-xs text-gray-500 mb-0">Kompletan pregled formata, targetinga, kupovine i realnih rezultata.</p>
        </Link>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "chatgpt-ads-vs-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">ChatGPT Ads vs Google Ads</p>
          <p className="text-xs text-gray-500 mb-0">Gde koji kanal pobeđuje i kako ih kombinovati u istom budžetu.</p>
        </Link>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">Evropa igra po svojim pravilima - bez personalizacije, context hints i kreativ nose ceo mehanizam, a javni registar oglasa krajem godine menja koliko toga o konkurenciji možete da vidite. Ko to razume pre pitch-a, ima prednost koju američki vodič ne pokriva.</p>
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
