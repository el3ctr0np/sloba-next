import { Link } from "@/i18n/navigation";

export default function AgencijaVsFreelancerPost() {
  return (
    <>
      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Ukratko</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Odlučili ste da koristite Google Ads. Odlično. Sada dolazi pitanje: ko će upravljati kampanjama? Postoje tri modela, raspon cena je €200-2,000+, a 67% marketing menadžera menja partnera u prvoj godini. Ključ nije u ceni — ključ je u fitu.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">3</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Modela upravljanja</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">€200-2000+</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Raspon mesečnih troškova</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">67%</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Menja partnera u prvoj godini</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-0">Fit &gt; Cena</p>
            <p className="text-xs text-slate-400 mt-1 mb-0">Najvažniji faktor</p>
          </div>
        </div>
      </div>

      <p>
        Imate tri opcije: angažujete agenciju, radite sa freelancerom/konsultantom, ili gradite in-house tim. Svaka ima svoje prednosti i mane. I svaka je prava — za određenu situaciju.
      </p>
      <p>
        Nakon godina rada na obe strane (kao in-house, kao freelancer i sarađujući sa agencijama) mogu vam reći da ne postoji univerzalno „najbolje" rešenje. Ali postoji pravo rešenje za vašu specifičnu situaciju. U ovom vodiču ću vam pomoći da to otkrijete.
      </p>

      <h2>Zašto je izbor partnera ključan</h2>
      <p>
        Moje iskustvo pokazuje da loš izbor partnera košta mnogo više od same cene usluge. Prosečna firma koja krene sa pogrešnim partnerom gubi 3-6 meseci, a često i značajan deo budžeta na neoptimalne kampanje.
      </p>
      <p>Preporučujem da razmislite o tri ključna aspekta pre izbora:</p>
      <ul>
        <li><strong>Fit sa vašom industrijskom nišom</strong> — partner koji razume vašu industriju donosi rezultate brže</li>
        <li><strong>Komunikacijski stil</strong> — potrebna vam je direktna komunikacija ili formalni izveštaji?</li>
        <li><strong>Finansijska struktura</strong> — imate li budžet za fiksne troškove ili vam je bitna fleksibilnost?</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-blue-900 mb-1">Pozitivna perspektiva</p>
        <p className="text-blue-800 text-sm mb-0">Sve tri opcije mogu biti odlične. Ključ je u tome da pronađete model koji se uklapa u vašu trenutnu fazu rasta, budžet i interne resurse. Čak i ako krenete sa jednim modelom, možete later preći na drugi kako rastete.</p>
      </div>

      <hr />

      <h2>Tri opcije za upravljanje Google Ads kampanjama</h2>
      <p>
        Preporučujem da prvo razumete osnove sva tri modela pre nego što uđete u detalje. Svaki model ima svoj sweet spot zavisno od veličine firme i budžeta.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Opcija 1</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Google Ads agencija</h3>
          <p className="text-sm text-gray-600 mb-3">Tim specijalista koji vodi vaše kampanje. Kompletna usluga sa account managerom, PPC specijalistom i često dizajnerom.</p>
          <p className="text-xs text-gray-500 mb-1"><strong>Mesečni trošak:</strong></p>
          <p className="text-sm mb-3">€500-3,000+</p>
          <p className="text-xs text-gray-500 mb-1"><strong>Za koga:</strong></p>
          <p className="text-sm mb-0">Firme sa budžetom €5,000+ mesečno, multi-channel potrebe, potrebna struktura i skalabilnost.</p>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Opcija 2</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Freelancer / konsultant</h3>
          <p className="text-sm text-gray-600 mb-3">Nezavisni specijalista koji radi direktno sa vama. Personalizovana pažnja, fleksibilnost i fokus na jedan kanal.</p>
          <p className="text-xs text-gray-500 mb-1"><strong>Mesečni trošak:</strong></p>
          <p className="text-sm mb-3">€300-1,500</p>
          <p className="text-xs text-gray-500 mb-1"><strong>Za koga:</strong></p>
          <p className="text-sm mb-0">Firme sa budžetom €1,000-10,000 mesečno, fokus na Google Ads, važna direktna komunikacija.</p>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Opcija 3</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">In-house tim</h3>
          <p className="text-sm text-gray-600 mb-3">Zaposlen PPC specijalista u vašoj firmi. Potpuna kontrola, duboko razumevanje biznisa, instant komunikacija.</p>
          <p className="text-xs text-gray-500 mb-1"><strong>Mesečni trošak:</strong></p>
          <p className="text-sm mb-3">€1,000-2,500+ (plata + alati)</p>
          <p className="text-xs text-gray-500 mb-1"><strong>Za koga:</strong></p>
          <p className="text-sm mb-0">Firme sa budžetom €15,000+ mesečno, marketing kao core funkcija, dugoročna vizija.</p>
        </div>
      </div>

      <hr />

      <h2>Prednosti i mane Google Ads agencije</h2>
      <p>
        Moje iskustvo rada sa agencijama (i kao klijent i kao partner) pokazuje da agencije donose najveću vrednost kada imate jasno definisane ciljeve i budžet koji opravdava njihovu strukturu.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Tim umesto pojedinca</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Preporučujem agenciju ako vam treba multidisciplinarni pristup. Dobijate account managera, PPC specijalista, često i copywritera/dizajnera.</p>
        <ul className="text-sm">
          <li>Account manager koordiniše sve aktivnosti</li>
          <li>PPC specijalista vodi optimizacije</li>
          <li>Dizajner kreira vizuele za display/video kampanje</li>
          <li>Backup kada neko ode na odmor ili napusti agenciju</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Šira ekspertiza i resursi</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Agencije donose iskustvo iz više industrija i pristup premium alatima koje ne morate posebno plaćati.</p>
        <ul className="text-sm">
          <li>Iskustvo sa 20-50+ različitih klijenata</li>
          <li>Pristup SEMrush, Optmyzr, Google Analytics 360, itd.</li>
          <li>Beta programi i early access do novih Google Ads features</li>
          <li>Best practices iz različitih industrija</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Skalabilnost i accountability</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Kada planirate rast budžeta ili ekspanziju na nove kanale, agencije mogu pratiti taj tempo bez preopterećenja.</p>
        <ul className="text-sm">
          <li>Lako dodaju nove kampanje i kanale</li>
          <li>Formalni ugovori sa jasnim KPI-jevima</li>
          <li>Redovni izveštaji (weekly/monthly)</li>
          <li>Profesionalna dokumentacija procesa</li>
        </ul>
      </div>

      <h3>Glavni izazovi rada sa agencijom</h3>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Niste prioritet — junior specijalista radi na vašem nalogu</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Pre potpisivanja ugovora, pitajte ko će konkretno raditi na vašem nalogu, koliko klijenata ta osoba vodi istovremeno, i ko je backup. Insistirajte na upoznavanju sa osobom koja će raditi na naloga, ne samo account managerom.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Šablonski pristup — copy-paste strategije iz drugih klijenata</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Tražite da vam pokažu konkretne strategije koje planiraju za vašu industriju. Ako čujete generičke odgovore ("optimizujemo ključne reči", "testiramo oglase"), to je crvena zastavica. Dobra agencija će imati specifična pitanja o vašem biznis modelu.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Sporija komunikacija — account manager kao bottleneck</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Definišite komunikacijske kanale i response time u ugovoru. Idealno je imati direktan pristup PPC specijalistu preko Slack/Teams za hitne stvari, dok account manager koordiniše strateške odluke.</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg p-4 my-6">
        <p className="font-semibold text-yellow-900 mb-1">Važno</p>
        <p className="text-yellow-800 text-sm mb-0">Za budžete ispod €5,000 mesečno, agencije obično nisu isplative. Matematika je jednostavna: ako plaćate €800/mesec retainer za upravljanje budžetom od €2,000, to je 40% fee. U tom slučaju freelancer je bolja opcija.</p>
      </div>

      <h3>Kada izabrati agenciju</h3>
      <p>Preporučujem agenciju ako:</p>
      <ul>
        <li>Vaš ad spend je preko €5,000 mesečno</li>
        <li>Planirate multi-channel pristup (Google Ads + Meta + LinkedIn + email)</li>
        <li>Nemate internu osobu koja može nadgledati kampanje</li>
        <li>Želite formalnu strukturu, ugovore i redovne izveštaje</li>
        <li>Planirate brzo skaliranje (doubling budžeta u narednih 6-12 meseci)</li>
      </ul>

      <h3>Kako agencije naplaćuju</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Model</th>
              <th className="py-3 px-4 font-heading font-semibold">Cena</th>
              <th className="py-3 px-4 font-heading font-semibold">Za koga</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Procenat od ad spend-a</td>
              <td className="py-3 px-4">10-20% (najčešće 12-15%)</td>
              <td className="py-3 px-4">Veći budžeti, skalabilno</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Fiksna mesečna naknada</td>
              <td className="py-3 px-4">€500-3,000</td>
              <td className="py-3 px-4">Mali do srednji budžeti, predvidivo</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Hibrid</td>
              <td className="py-3 px-4">Manja fiksna + procenat iznad praga</td>
              <td className="py-3 px-4">Mid-size firme koje rastu</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Performance-based</td>
              <td className="py-3 px-4">Obično kombinovano sa fiksnom</td>
              <td className="py-3 px-4">Retko, visok rizik za agenciju</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="font-semibold">Primer kalkulacije (€5,000 ad spend):</p>
      <ul>
        <li>Model procenta (15%): €750/mesečno</li>
        <li>Fiksni model: €800-1,200/mesečno</li>
        <li>Hibrid (€400 + 8% iznad €3,000): €560/mesečno</li>
      </ul>

      <hr />

      <h2>Prednosti i mane freelancera</h2>
      <p>
        Kao freelancer sa višegodišnjim iskustvom, mogu vam reći da je najveća prednost freelancera direktna komunikacija i personalizovana pažnja. Ali to dolazi sa trade-off-ovima koje treba razumeti.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Personalizovana pažnja i direktna komunikacija</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Radite direktno sa osobom koja upravlja kampanjama. Bez posrednika, bez account managera, bez "telefona bez žice".</p>
        <ul className="text-sm">
          <li>Manje klijenata = više fokusa na vaš nalog</li>
          <li>Brži response time (obično isti dan)</li>
          <li>Direktan Slack/WhatsApp kontakt</li>
          <li>Lakši pivoti i eksperimentisanje</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Fleksibilnost i specijalizacija</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Freelanceri često imaju dublju specijalizaciju u jednoj oblasti (npr. Google Shopping, lead gen kampanje) i fleksibilnije ugovore.</p>
        <ul className="text-sm">
          <li>Lakši dogovor oko scope-a rada</li>
          <li>Mogućnost monthly retainer ili project-based rada</li>
          <li>Duboko znanje specifičnih industrija ili campaign type-ova</li>
          <li>Nema lock-in perioda (obično 30-day notice)</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Isplativost za male/srednje budžete</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Za budžete €1,000-10,000 mesečno, freelanceri nude najbolji value. Dobijate senior-level ekspertizu po ceni mid-level agencijskog retainera.</p>
        <ul className="text-sm">
          <li>€300-1,500/mesec vs €800-2,000 za agenciju</li>
          <li>Nema overhead troškova agencijske strukture</li>
          <li>Transparentno pricing (znate koliko vremena ide na vaš nalog)</li>
          <li>Mogućnost rasta retainera kako raste spend</li>
        </ul>
      </div>

      <h3>Glavni izazovi rada sa freelancerom</h3>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Zavisnost od jedne osobe — nema backup-a ako freelancer nestane</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Insistirajte na admin pristupu vašem Google Ads nalogu od dana 1. Tražite dokumentaciju svih kampanja, strategija i account strukture. Preporučujem i quarterly review sa drugim freelancerom ili agencijom kao "second opinion".</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Ograničen kapacitet — teško skaliranje kada budžet naglo poraste</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Pričajte sa freelancerom o planovima rasta. Dobar freelancer će vam reći kada je dostigao kapacitet i predložiti prehod na agenciju ili dodavanje još jednog freelancera u tim. Moje iskustvo: jedan freelancer može voditi €15-20K spend, posle toga treba backup.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Varijabilna profesionalnost — kvalitet varira drastično</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Due diligence je ključan. Tražite reference, case studies, konkretne rezultate. Pitajte za pristup njihovim client nalozima (sa maskiranim podacima). Test period od 3 meseca sa jasnim KPI-jevima pre long-term commitovanja.</p>
        </div>
      </div>

      <h3>Kada izabrati freelancera</h3>
      <p>Preporučujem freelancera ako:</p>
      <ul>
        <li>Vaš ad spend je €1,000-10,000 mesečno</li>
        <li>Fokus je na jednom kanalu (Google Ads, ne multi-channel)</li>
        <li>Želite duboku specijalizaciju (npr. samo Google Shopping ili samo Lead Gen)</li>
        <li>Važna vam je direktna, brza komunikacija</li>
        <li>Imate internu osobu koja može nadgledati rad (makar high-level)</li>
      </ul>

      <h3>Kako freelanceri naplaćuju</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Model</th>
              <th className="py-3 px-4 font-heading font-semibold">Cena</th>
              <th className="py-3 px-4 font-heading font-semibold">Za koga</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Fiksna mesečna naknada</td>
              <td className="py-3 px-4">€300-1,500</td>
              <td className="py-3 px-4">Ongoing upravljanje, predvidiv scope</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Satnica</td>
              <td className="py-3 px-4">€25-80/sat</td>
              <td className="py-3 px-4">Konsultacije, ad-hoc optimizacije</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Project-based</td>
              <td className="py-3 px-4">€500-3,000</td>
              <td className="py-3 px-4">Audit, setup, migracija naloga</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Retainer + performance bonus</td>
              <td className="py-3 px-4">Kombinacija</td>
              <td className="py-3 px-4">Uske niše, clear performance metrike</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2>Prednosti i mane in-house tima</h2>
      <p>
        In-house tim je dugoročna investicija koja ima smisla samo kada imate kritičnu masu budžeta i marketing je core funkcija vašeg biznisa.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Potpuna kontrola i instant komunikacija</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Vaša osoba, vaši prioriteti, vašu brzina. Nema čekanja na weekly call-ove ili monthly izveštaje.</p>
        <ul className="text-sm">
          <li>Setujete prioritete po svojoj logici</li>
          <li>Instant pivoti bez pregovaranja sa eksternim partnerom</li>
          <li>Direktna integracija sa sales, product i customer support timom</li>
          <li>Real-time reakcija na market promene</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Duboko razumevanje biznisa</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">In-house osoba živi i diše vaš product, poznaje customer journey, razume margin strukturu i internal metrics.</p>
        <ul className="text-sm">
          <li>Poznavanje nijansi proizvoda/usluga koje eksterni partner ne vidi</li>
          <li>Razumevanje sezonalnosti, inventory limitova, operational constraints</li>
          <li>Bliska saradnja sa CEO-om ili founders (brže donošenje odluka)</li>
          <li>Kumulativno znanje koje ostaje u firmi</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Dugoročna isplativost</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Za velike budžete (€20,000+), in-house postaje isplativiji od agencije nakon 12-18 meseci.</p>
        <ul className="text-sm">
          <li>€1,800 plata vs €2,500+ agencijski retainer za isti spend</li>
          <li>Nema markup-a na alate i software (direktno plaćate)</li>
          <li>Znanje ostaje u firmi kada budžet raste</li>
          <li>Mogućnost ekspanzije tima kako raste spend</li>
        </ul>
      </div>

      <h3>Glavni izazovi in-house tima</h3>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Teško naći dobre ljude — recruitment traje 1-3 meseca</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Dok tražite full-time osobu, angažujte freelancera kao bridge solution. Ili još bolje: angažujte freelancera da vam pomogne u recruitment procesu (intervjuiše kandidate, evaluira skills). Moje iskustvo: dobar PPC specialist u Srbiji se naći za 2-3 meseca ako znate šta tražite.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Rizik od stagnacije — osoba gubi touch sa industry best practices</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Budžetirajte €1,000-2,000 godišnje za konferencije, online courses i networking. Preporučujem i quarterly audit sa eksternim konsultantom kao "quality check". Ovaj hibridni model (in-house + quarterly consultant review) je odličan za mid-size firme.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Greška</p>
        <p className="font-semibold mb-2">Rizik od odlaska — gubite znanje kada osoba napusti firmu</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Rešenje:</strong> Dokumentacija je ključna. Insistirajte na pisanju SOPs (standard operating procedures) za sve kampanje, dokumentaciji strategija, i jasnoj strukturi naloga. Koristite alate poput Notion ili Confluence za knowledge base. Kada osoba da otkaz, imate 1-2 meseca notice perioda da transferujete znanje.</p>
        </div>
      </div>

      <h3>Kada izabrati in-house tim</h3>
      <p>Preporučujem in-house ako:</p>
      <ul>
        <li>Vaš ad spend je preko €15,000-20,000 mesečno</li>
        <li>Marketing je core funkcija biznisa (ne support activity)</li>
        <li>Imate resurse za recruitment, onboarding i kontinuirani development</li>
        <li>Planirate dugoročno (3+ godine) i želite izgraditi internu ekspertizu</li>
        <li>Važna vam je potpuna kontrola nad podacima i strategijom</li>
      </ul>

      <h3>Troškovi in-house tima (Srbija, 2025-2026)</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Pozicija</th>
              <th className="py-3 px-4 font-heading font-semibold">Bruto mesečna plata</th>
              <th className="py-3 px-4 font-heading font-semibold">Alati</th>
              <th className="py-3 px-4 font-heading font-semibold">Total trošak</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Junior PPC Specialist</td>
              <td className="py-3 px-4">€800-1,200</td>
              <td className="py-3 px-4">€100-200</td>
              <td className="py-3 px-4">€900-1,400</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Mid-Level PPC Specialist</td>
              <td className="py-3 px-4">€1,200-1,800</td>
              <td className="py-3 px-4">€150-300</td>
              <td className="py-3 px-4">€1,350-2,100</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Senior PPC Specialist</td>
              <td className="py-3 px-4">€1,800-2,500</td>
              <td className="py-3 px-4">€200-400</td>
              <td className="py-3 px-4">€2,000-2,900</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Head of Performance Marketing</td>
              <td className="py-3 px-4">€2,500-4,000</td>
              <td className="py-3 px-4">€300-500</td>
              <td className="py-3 px-4">€2,800-4,500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-600">+ Obuke i sertifikacije: €500-2,000 godišnje po osobi</p>
      <p className="text-sm text-gray-600">+ Recruitment trošak: €500-1,500 (HR agencije, oglasi)</p>
      <p className="text-sm text-gray-600">+ Vreme do productive capacity: 1-3 meseca onboarding</p>

      <hr />

      <h2>Poređenje po ključnim kriterijumima</h2>
      <p>
        Preporučujem da pogledate ovu tabelu kao quick reference za poređenje svih opcija. Nema univerzalno "najbolje" — samo pravu opciju za vašu situaciju.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-50">
              <th className="py-3 px-4 font-heading font-semibold">Kriterijum</th>
              <th className="py-3 px-4 font-heading font-semibold">Agencija</th>
              <th className="py-3 px-4 font-heading font-semibold">Freelancer</th>
              <th className="py-3 px-4 font-heading font-semibold">In-house</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Mesečni trošak</td>
              <td className="py-3 px-4">€500-3,000+</td>
              <td className="py-3 px-4">€300-1,500</td>
              <td className="py-3 px-4">€1,000-2,500+</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Brzina početka</td>
              <td className="py-3 px-4">1-2 nedelje</td>
              <td className="py-3 px-4">Odmah (1-3 dana)</td>
              <td className="py-3 px-4">1-3 meseca (recruitment + onboarding)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Ekspertiza</td>
              <td className="py-3 px-4">Široka, multi-industry</td>
              <td className="py-3 px-4">Duboka, specifična niša</td>
              <td className="py-3 px-4">Zavisi od skills osobe</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Skalabilnost</td>
              <td className="py-3 px-4">Visoka (dodaju resurse po potrebi)</td>
              <td className="py-3 px-4">Ograničena (max €15-20K spend)</td>
              <td className="py-3 px-4">Srednja (zahteva hiring više ljudi)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Komunikacija</td>
              <td className="py-3 px-4">Formalnija, preko account managera</td>
              <td className="py-3 px-4">Direktna, Slack/WhatsApp</td>
              <td className="py-3 px-4">Instant, face-to-face</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Rizik</td>
              <td className="py-3 px-4">Niži (tim, backup, struktura)</td>
              <td className="py-3 px-4">Srednji (single point of failure)</td>
              <td className="py-3 px-4">Viši (recruitment, retention, stagnacija)</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Transparentnost</td>
              <td className="py-3 px-4">Formalni izveštaji, često generic</td>
              <td className="py-3 px-4">Vrlo transparentno, direktan pristup</td>
              <td className="py-3 px-4">Potpuna transparentnost</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-50/50">
              <td className="py-3 px-4 font-medium">Fleksibilnost</td>
              <td className="py-3 px-4">Ugovori 6-12 meseci, rigidni scope</td>
              <td className="py-3 px-4">30-day notice, fleksibilan scope</td>
              <td className="py-3 px-4">Potpuna kontrola</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Multi-channel capability</td>
              <td className="py-3 px-4">Visoka (Google + Meta + LinkedIn)</td>
              <td className="py-3 px-4">Niska (obično 1-2 kanala max)</td>
              <td className="py-3 px-4">Zavisi od skills osobe</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2>Koji model za vašu firmu</h2>
      <p>
        Na osnovu mog iskustva rada sa 50+ klijenata, evo konkretnih preporuka po tipu firme i budžetu.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad spend: €0-2,000/mesec</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Mala firma ili startup</h3>
          <p className="text-sm text-gray-600 mb-3">Budžet je ograničen, potrebna vam je brzina i fleksibilnost.</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Preporučujem:</p>
          <p className="text-sm mb-3">Freelancer (€300-500/mesec) ili DIY + konsultacije (€80-120/sat po potrebi)</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Zašto:</p>
          <ul className="text-sm">
            <li>Agencija nije isplativa (40%+ fee)</li>
            <li>Brz start (1-3 dana)</li>
            <li>Fleksibilan scope dok tražite product-market fit</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad spend: €2,000-10,000/mesec</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Mid-size firma (solo fokus)</h3>
          <p className="text-sm text-gray-600 mb-3">Stabilan biznis, fokus na Google Ads kao primarni kanal.</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Preporučujem:</p>
          <p className="text-sm mb-3">Freelancer (€500-1,200/mesec) ili manja specijalizovana agencija (€800-1,500/mesec)</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Zašto:</p>
          <ul className="text-sm">
            <li>Sweet spot za freelancer ekspertizu</li>
            <li>Dobra vrednost za novac</li>
            <li>Direktna komunikacija još uvek bitna</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad spend: €10,000-30,000/mesec</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Rastuća firma (multi-channel)</h3>
          <p className="text-sm text-gray-600 mb-3">Potreban vam je multi-channel pristup i veći kapacitet.</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Preporučujem:</p>
          <p className="text-sm mb-3">Agencija (€1,500-2,500/mesec) ili hibrid (in-house koordinator + freelancer/agencija)</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Zašto:</p>
          <ul className="text-sm">
            <li>Multi-channel ekspertiza (Google + Meta + email)</li>
            <li>Skalabilnost kako raste budžet</li>
            <li>Freelancer dostiže capacity limit</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Ad spend: €30,000+/mesec</p>
          <h3 className="text-base font-heading font-bold mt-0 mb-2">Enterprise firma</h3>
          <p className="text-sm text-gray-600 mb-3">Marketing je core funkcija, dugoročna strategija ključna.</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Preporučujem:</p>
          <p className="text-sm mb-3">In-house tim (€2,000-4,000/mesec) + quarterly consultant review ili full-service agencija</p>
          <p className="text-xs font-semibold text-gray-700 mb-1">Zašto:</p>
          <ul className="text-sm">
            <li>Potpuna kontrola nad strategijom i podacima</li>
            <li>Isplativije dugoročno od agencije</li>
            <li>Znanje ostaje u firmi</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-xl p-5 my-6">
        <p className="font-heading font-semibold text-lg mb-0">
          Većina firmi u regionu (Srbija/Ex-Yu) sa budžetom €3,000-15,000 mesečno dobija najbolju vrednost od freelancera ili male specijalizovane agencije. Agencije ima smisla tek kada prekoračite €10,000 spend i trebate multi-channel pokrivenost.
        </p>
      </div>

      <hr />

      <h2>Na šta obratiti pažnju prilikom izbora partnera</h2>
      <p>
        Moje iskustvo pokazuje da ovih 5 faktora određuju uspeh ili neuspeh saradnje, bez obzira da li radite sa agencijom, freelancerom ili gradite tim.
      </p>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Iskustvo u vašoj industriji</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Partner koji je već radio sa klijentima iz vaše industrije će brže razumeti vašu nišu i doneti rezultate.</p>
        <ul className="text-sm">
          <li><strong>Pitajte:</strong> "Imate li case study ili klijenta iz [vaša industrija]?"</li>
          <li><strong>Red flag:</strong> Partner tvrdi da zna sve industrije podjednako</li>
          <li><strong>Moja preporuka:</strong> Relevant experience &gt; generalno iskustvo</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Transparentnost oko pristupa i vlasništva naloga</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Vi MORATE imati admin pristup svom Google Ads nalogu. Bez izuzetaka.</p>
        <ul className="text-sm">
          <li><strong>Pitajte:</strong> "Da li ću imati admin pristup nalogu?"</li>
          <li><strong>Red flag:</strong> Partner insistira da on kontroliše nalog "zbog sigurnosti"</li>
          <li><strong>Moja preporuka:</strong> Ovo je deal-breaker. Ako partner ne želi dati pristup, bežite.</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Komunikacijski stil i response time</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Kvalitet pre-sales komunikacije je najbolji indikator buduće saradnje. Ako je spor i nejasan sada, biće još gori kasnije.</p>
        <ul className="text-sm">
          <li><strong>Testirajte:</strong> Pošaljite follow-up pitanje i merite response time</li>
          <li><strong>Red flag:</strong> Odgovara nakon 3-5 dana ili daje generičke odgovore</li>
          <li><strong>Moja preporuka:</strong> Dobar partner odgovara u roku 24h sa konkretnim odgovorima</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Jasno definisan proces rada</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Partner treba da vam objasni tačno kako izgleda prva 3 meseca, ko radi šta, i kako merite uspeh.</p>
        <ul className="text-sm">
          <li><strong>Pitajte:</strong> "Kako izgleda onboarding process? Šta se dešava u prvom mesecu?"</li>
          <li><strong>Red flag:</strong> Generički odgovor "optimizujemo kampanje i šaljemo izveštaje"</li>
          <li><strong>Moja preporuka:</strong> Dobar partner ima written process sa jasnim milestones</li>
        </ul>
      </div>

      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 md:p-6 my-6 shadow-card">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          <h3 className="mt-0 mb-0 font-heading font-bold">Realistična očekivanja (ne garantuje rezultate)</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">Dobar partner će vam reći šta je moguće, ali neće garantovati specifične rezultate pre nego što vidi vaš nalog i industriju.</p>
        <ul className="text-sm">
          <li><strong>Pitajte:</strong> "Kakve rezultate mogu očekivati u prva 3 meseca?"</li>
          <li><strong>Red flag:</strong> "Garantujemo ROAS 5x" ili "Dovodimo 100 conversions mesečno"</li>
          <li><strong>Moja preporuka:</strong> Dobar odgovor je "Zavisi od industrije, ali obično vidimo X% poboljšanje u prva 3 meseca"</li>
        </ul>
      </div>

      <hr />

      <h2>Crvene zastavice - kada odustati od partnera</h2>
      <p>
        Preporučujem da immediately prekinete razgovor ako vidite bilo koju od ovih crvenih zastavica, bez obzira koliko dobra zvučala ponuda.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red Flag #1</p>
        <p className="font-semibold mb-2">Ne žele da vam daju admin pristup nalogu</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Zašto je problem:</strong> To znači da partner misli da je nalog "njihov", ne vaš. Kada prekinete saradnju, možete ostati bez pristupa podacima i istoriji kampanja. Ovo je neprihvatljivo.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red Flag #2</p>
        <p className="font-semibold mb-2">Garantuju specifične rezultate PRE audita naloga</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Zašto je problem:</strong> Nemoguće je garantovati ROAS 5x ili CPA €20 bez detaljne analize naloga, industrije, website-a i trenutnih performansi. Ovo je ili neserioznost ili prodajni trik.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red Flag #3</p>
        <p className="font-semibold mb-2">Insistiraju na dugim ugovorima bez trial perioda (12+ meseci)</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Zašto je problem:</strong> Dobri partneri su sigurni u svoje rezultate i ne trebaju lock-in period. Standard je 3-6 meseci sa 30-day notice klauzulom. Duži ugovori su red flag.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red Flag #4</p>
        <p className="font-semibold mb-2">Ne mogu da objasne šta konkretno rade (generic pitches)</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Zašto je problem:</strong> Ako partner ne može da objasni svoj proces jasnim rečima, ili koristi samo buzzwords ("AI optimization", "machine learning campaigns"), verovatno ne znaju šta rade.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red Flag #5</p>
        <p className="font-semibold mb-2">Spor response time od prvog kontakta (3+ dana)</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Zašto je problem:</strong> Ako ne mogu da odgovore brzo dok pokušavaju da vas dobiju kao klijenta, kako mislite da će komunikacija izgledati kasnije? Ovo je najbolji indikator buduće saradnje.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red Flag #6</p>
        <p className="font-semibold mb-2">Nemaju reference ili case studies u vašoj (ili sličnoj) industriji</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Zašto je problem:</strong> Svaka industrija ima svoje specifičnosti. Partner bez relevant experience će utrošiti vaš budžet učeći basics koje bi trebalo već da znaju. Tražite minimum 2-3 slična klijenta.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5 my-4">
        <p className="font-heading font-bold text-red-600 mb-1 text-sm">Red Flag #7</p>
        <p className="font-semibold mb-2">Cena je "previše dobra da bi bila istinita" (€150-200 za upravljanje)</p>
        <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-3">
          <p className="text-sm text-green-800 mb-0"><strong>Zašto je problem:</strong> Kvalitetan PPC specialist ne može raditi za €200/mesec i pružiti dobru uslugu. To znači ili da ste jedan od 20+ klijenata (nula pažnje), ili je osoba junior bez iskustva. Minimum za kvalitetan rad je €300-400.</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5 md:p-6 my-6">
        <p className="font-heading font-bold text-lg mb-2">Zlatno pravilo izbora partnera</p>
        <p className="text-sm text-yellow-900 mb-0">Ako imate loš gut feeling tokom razgovora, to je obično tačno. Ne ignoriše instinkt. Saradnja sa pogrešnim partnerom će vas koštati 10x više od cene usluge.</p>
      </div>

      <hr />

      <h2>Često postavljana pitanja</h2>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3" open>
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Da li mala firma treba Google Ads agenciju ili je freelancer dovoljan?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Za male firme sa budžetom do €2,000-3,000 mesečno, freelancer je obično bolja opcija. Dobijate više personalizovane pažnje za istu ili nižu cenu. Agencija ima smisla kada prekoračite €5,000 spend ili vam treba multi-channel pristup (Google + Meta + LinkedIn). Moje iskustvo: 80% malih firmi u Srbiji bolje prolazi sa freelancerom nego sa agencijom.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Koliko košta Google Ads agencija u Srbiji - cene 2026?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Cene Google Ads agencija u Srbiji variraju od €400-500 za manje agencije do €1,500-3,000+ za veće, etablirane agencije. Model procenta od ad spend-a je obično 10-20% (najčešće 12-15%). Freelanceri naplaćuju €300-1,500 mesečno zavisno od obima posla. Preporučujem da tražite barem 2-3 ponude i uporedite ne samo cenu, već i scope rada i komunikacijski stil.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Može li freelancer da vodi veliki budžet (€20,000+)?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Da, ali samo ako ima pravo iskustvo i kapacitet. Moje iskustvo pokazuje da jedan senior freelancer može efikasno voditi do €15-20K spend, posle čega capacity postaje problem. Za budžete preko €20,000 mesečno, preporučujem ili veoma iskusnog freelancera (sa 5+ godina) koji ima backup sistem, ili agenciju. Alternativa je hibridni model: dva freelancera koja pokrivaju različite kanale.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Šta je bolje za eCommerce - agencija ili freelancer?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Zavisi od kompleksnosti vašeg eCommerce poslovanja. Za čist Google Shopping + Search kampanje sa jednim kanalom, specijalizovani freelancer može biti odličan i cost-effective. Za multi-channel pristup (Google + Meta + email marketing + retargeting), agencija ima više smisla jer vam treba šira ekspertiza. Preporučujem: ispod €8,000 spend → freelancer, iznad €8,000 → agencija ili hibrid.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Kako proveriti kvalitet Google Ads agencije ili freelancera?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Pet koraka za proveru kvaliteta: (1) Tražite reference iz vaše ili slične industrije (minimum 2-3), (2) Pitajte za pristup njihovim client nalozima (sa maskiranim podacima) da vidite setup, (3) Proverite kako komuniciraju PRE angažovanja (response time, jasnoća odgovora), (4) Tražite da objasne konkretno šta će raditi u prva 3 meseca, (5) Insistirajte na trial periodu od 3 meseca sa clear KPI-jevima. Kvalitet pre-sales komunikacije obično odražava kvalitet buduće saradnje.
        </div>
      </details>

      <details className="bg-white border-2 border-gray-200 rounded-xl group mb-3">
        <summary className="cursor-pointer p-5 font-heading font-semibold list-none flex items-center justify-between hover:bg-gray-50 rounded-xl">
          Kada prebaciti sa freelancera na agenciju (ili obrnuto)?
          <span className="text-gray-400 group-open:rotate-180 transition-transform ml-2">&#9660;</span>
        </summary>
        <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
          Prelazak sa freelancera na agenciju ima smisla kada: (1) Ad spend prelazi €10,000-15,000 i freelancer dostiže capacity, (2) Trebaju vam dodatni kanali koje freelancer ne pokriva, (3) Potrebna vam je veća skalabilnost i backup tim. Prelazak sa agencije na freelancera ima smisla kada: (1) Smanjite budžet ispod €5,000, (2) Želite više personalizovane pažnje i direktne komunikacije, (3) Agencija daje generic service bez prave vrednosti. Moj savet: test period od 3 meseca pre full commitment-a.
        </div>
      </details>

      <hr />

      <div className="bg-slate-900 text-white border-2 border-gray-900 rounded-xl p-6 md:p-8 my-8 shadow-card text-center">
        <p className="font-heading font-bold text-xl md:text-2xl mb-3">
          Ne znate koji model je pravi za vas?
        </p>
        <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto">
          Zakažite besplatnu 30-minutnu konsultaciju i zajedno ćemo analizirati vašu situaciju, budžet i ciljeve. Dobiću vam objektivan pogled (čak i ako to znači da vam ne treba freelancer kao ja).
        </p>
        <Link href="/kontakt" className="btn-secondary inline-block">
          Zakažite besplatnu konsultaciju
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "koliko-kosta-google-ads" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Koliko košta Google Ads
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kompletna analiza troškova, budžeta i fee struktura za 2026.
          </p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-audit-vodic" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Google Ads audit - kompletni vodič
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Kako proveriti kvalitet postojećih kampanja pre nego što promenite partnera.
          </p>
        </Link>

        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-oglasavanje-za-firme" } }} className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Google oglašavanje za firme
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Sve što treba da znate pre lansiranja Google Ads kampanja.
          </p>
        </Link>

        <Link href="/usluge/google-ads-upravljanje" className="block bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-gray-900 transition-colors no-underline">
          <p className="font-heading font-semibold text-gray-900 mb-1 text-sm">
            Google Ads upravljanje
          </p>
          <p className="text-xs text-gray-500 mb-0">
            Pogledajte kako izgleda saradnja sa freelancerom (moj pristup).
          </p>
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

