import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return buildMetadata({
    title: isEn
      ? "The Profit-First Method | Digital Jelisavac"
      : "Profit-First metod | Digital Jelisavac",
    description: isEn
      ? "The Profit-First method is how Digital Jelisavac runs every Google Ads account: stabilize the truth, optimize to profit (POAS), scale where efficiency holds, then expand. A named framework, run personally by senior specialist Slobodan Jelisavac."
      : "Profit-First metod je način na koji Digital Jelisavac vodi svaki Google Ads nalog: prvo istina, pa optimizacija na profit (POAS), pa skaliranje gde efikasnost ostaje, pa ekspanzija. Metod koji lično vodi senior stručnjak Slobodan Jelisavac.",
    locale,
    path: "/methodology",
    srPath: "/metodologija",
  });
}

type Phase = {
  n: string;
  title: string;
  whatIDo: string;
  why: string;
  youGet: string;
};

const PHASES_EN: Phase[] = [
  {
    n: "01",
    title: "Stabilize",
    whatIDo:
      "Fix conversion tracking so every number is real, rebuild the account structure around how your business actually makes money, and cut the spend that produces nothing: dead keywords, duplicate conversions, junk search terms, and budget stuck in campaigns that never earned.",
    why:
      "You can't optimize what you can't measure correctly. On most accounts I take over, tracking overstates results and 20–40% of the budget is quietly wasted. Every decision after this depends on the numbers being honest.",
    youGet:
      "An account where the reported numbers match what actually hits your bank, with the hidden waste removed. A clean foundation the next three phases can build on.",
  },
  {
    n: "02",
    title: "Efficiency",
    whatIDo:
      "Optimize to profit (POAS), not to revenue or a ROAS number that only looks good in a report. I factor in margins, cost of goods, and returns, then move budget toward what genuinely earns and away from what doesn't.",
    why:
      "Revenue and ROAS can rise while profit falls — scaling low-margin products, or spending to reach customers who would have bought anyway. Profit is the only metric your bank recognizes.",
    youGet:
      "Every euro working on your profit margin instead of a vanity number. The same budget returning more real money.",
  },
  {
    n: "03",
    title: "Scale",
    whatIDo:
      "Increase budget only where efficiency holds at the higher spend. I test new campaigns, keywords, and audiences in a controlled way: growth without re-introducing waste.",
    why:
      "Scaling before efficiency is proven just multiplies the loss. Proof first, then throttle up.",
    youGet:
      "Predictable growth that doesn't dilute profitability. More volume while the margin holds.",
  },
  {
    n: "04",
    title: "Expand",
    whatIDo:
      "New markets, new channels (Meta, YouTube), and brand campaigns, once the core can carry them. Omnichannel where it makes sense, with proven specialists brought in as needed.",
    why:
      "Expansion only pays off when the core is profitable and stable. Bolting channels onto a shaky foundation just spreads the problem wider.",
    youGet:
      "Growth beyond a single channel, without losing the control you built in the first three phases.",
  },
];

const PHASES_SR: Phase[] = [
  {
    n: "01",
    title: "Stabilizacija",
    whatIDo:
      "Sredim merenje konverzija da svaka brojka bude istinita, ponovo posložim strukturu naloga oko toga kako biznis stvarno zarađuje, i isključim potrošnju koja ne donosi ništa: mrtve ključne reči, duplirane konverzije, loše search termove i budžet zaglavljen u kampanjama koje nikad nisu zaradile.",
    why:
      "Ne možete optimizovati ono što ne merite tačno. Na većini naloga koje preuzmem merenje prijavljuje bolje rezultate nego što ih ima, a 20 do 40 posto budžeta tiho se rasipa. Svaka odluka posle ovoga zavisi od toga da su brojke poštene.",
    youGet:
      "Nalog u kome prijavljene brojke odgovaraju onome što stvarno stigne na račun, bez skrivenog rasipanja. Čist temelj na kome naredne tri faze mogu da grade.",
  },
  {
    n: "02",
    title: "Efikasnost",
    whatIDo:
      "Optimizujem na profit (POAS), ne na prihod ili ROAS broj koji lepo izgleda samo u izveštaju. Uračunam marže, cenu robe i povraćaje, pa premeštam budžet ka onome što zaista zarađuje, a dalje od onoga što ne.",
    why:
      "Prihod i ROAS mogu da rastu dok profit pada: skaliranje niskomaržnih proizvoda ili trošak na kupce koji bi ionako kupili. Profit je jedina metrika koju banka priznaje.",
    youGet:
      "Svaki euro radi na vašoj profitnoj marži umesto na vanity broj. Isti budžet, veći stvarni povraćaj.",
  },
  {
    n: "03",
    title: "Skaliranje",
    whatIDo:
      "Podižem budžet samo tamo gde efikasnost ostaje i na većem trošku. Testiram nove kampanje, ključne reči i publike kontrolisano: rast bez vraćanja rasipanja.",
    why:
      "Skaliranje pre nego što je efikasnost dokazana samo umnožava gubitak. Prvo dokaz, pa gas.",
    youGet:
      "Predvidiv rast koji ne razvodnjava profitabilnost. Veći obim uz zadržanu maržu.",
  },
  {
    n: "04",
    title: "Ekspanzija",
    whatIDo:
      "Nova tržišta, novi kanali (Meta, YouTube) i brand kampanje, kada jezgro može da ih iznese. Omnichannel gde ima smisla, uz proverene specijaliste koje uključim po potrebi.",
    why:
      "Ekspanzija se isplati tek kada je jezgro profitabilno i stabilno. Dodavanje kanala na klimav temelj samo širi problem.",
    youGet:
      "Rast van jednog kanala, bez gubitka kontrole koju ste izgradili u prve tri faze.",
  },
];

export default async function MethodologyPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";
  const phases = isEn ? PHASES_EN : PHASES_SR;

  const labels = isEn
    ? { whatIDo: "What I do", why: "Why it matters", youGet: "What you get" }
    : { whatIDo: "Šta radim", why: "Zašto je bitno", youGet: "Šta dobijate" };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: isEn ? "The Profit-First Method" : "Profit-First metod",
    description: isEn
      ? "The four-phase process Digital Jelisavac uses to manage a Google Ads account to profit: stabilize, efficiency, scale, expand."
      : "Četvorofazni proces kojim Digital Jelisavac vodi Google Ads nalog do profita: stabilizacija, efikasnost, skaliranje, ekspanzija.",
    step: phases.map((p, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: p.title,
      text: p.whatIDo,
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isEn ? "Profit-First Google Ads Management" : "Profit-First vođenje Google Ads naloga",
    description: isEn
      ? "Google Ads management run to profit (POAS) using the Profit-First method, by senior specialist Slobodan Jelisavac of Digital Jelisavac."
      : "Vođenje Google Ads naloga optimizovano na profit (POAS) po Profit-First metodu, senior stručnjak Slobodan Jelisavac (Digital Jelisavac).",
    provider: {
      "@type": "Person",
      "@id": "https://www.slobodan-jelisavac.com/#person",
      name: "Slobodan Jelisavac",
      url: "https://www.slobodan-jelisavac.com",
      jobTitle: isEn ? "Google Ads Consultant" : "Google Ads Konsultant",
    },
    areaServed: [
      { "@type": "Country", name: "Serbia" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Croatia" },
    ],
    serviceType: "Google Ads Management",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEn ? "Home" : "Početna",
        item: "https://www.slobodan-jelisavac.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isEn ? "Methodology" : "Metodologija",
        item: isEn
          ? "https://www.slobodan-jelisavac.com/en/methodology"
          : "https://www.slobodan-jelisavac.com/sr/metodologija",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero — dark */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {isEn ? "Home" : "Početna"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-accent font-medium">
                {isEn ? "Methodology" : "Metodologija"}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              {isEn ? "The Profit-First Method" : "Profit-First metod"}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-3 mb-6">
              {isEn
                ? "The same process on every account: truth first, then profit, then growth"
                : "Isti proces na svakom nalogu: prvo istina, pa profit, pa rast"}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {isEn
                ? "Profit-First is the named framework behind every Google Ads account I run at Digital Jelisavac. Four phases, always in the same order, so growth is built on numbers you can trust — not on a report that looks good while the business earns less."
                : "Profit-First je imenovani metod iza svakog Google Ads naloga koji vodim u Digital Jelisavac agenciji. Četiri faze, uvek istim redom, da rast bude izgrađen na brojkama u koje možete da verujete, a ne na izveštaju koji lepo izgleda dok biznis zarađuje manje."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/kontakt" variant="secondary">
                {isEn ? "Book a free 20-minute call" : "Zakažite besplatnih 20 minuta"}
              </Button>
              <Button href="/usluge" variant="primary">
                {isEn ? "View services" : "Pogledajte usluge"}
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
              <span>{isEn ? "10+ years of experience" : "10+ godina iskustva"}</span>
              <span>3x UK Search Awards</span>
              <span>{isEn ? "50+ brands across 6+ countries" : "50+ brendova iz 6+ zemalja"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Profit-First */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            {isEn ? "Why Profit-First" : "Zašto Profit-First"}
          </h2>
          <div className="space-y-5 text-lg text-slate-700 leading-relaxed">
            <p>
              {isEn
                ? "Most Google Ads accounts are optimized to the wrong number. A report can show a healthy ROAS and rising revenue while the business makes less money than before. The Profit-First method exists to prevent exactly that."
                : "Većina Google Ads naloga optimizovana je na pogrešan broj. Izveštaj može da prikaže zdrav ROAS i rast prihoda dok biznis zarađuje manje nego pre. Profit-First metod postoji upravo da to spreči."}
            </p>
            <p>
              {isEn
                ? "It's the same process I run on every account, in the same order: get to the truth, make it efficient, then scale — and only expand once the core can carry it. No guesswork, no vanity metrics."
                : "To je isti proces koji vodim na svakom nalogu, istim redom: prvo dođem do istine, pa je učinim efikasnom, pa skaliram, i tek onda širim kada jezgro može to da iznese. Bez nagađanja, bez vanity metrika."}
            </p>
          </div>

          {/* Honest, senior-led framing */}
          <div className="mt-8 border-l-4 border-primary bg-blue-50 p-5 md:p-6 rounded-r-lg">
            <p className="text-slate-800 leading-relaxed">
              {isEn
                ? "All four phases are run by me personally. When the work calls for it — Meta, creative, SEO — I bring in proven specialists, but the strategy and your account stay with one senior person. That's what senior-led boutique means: no account handoffs, no junior learning on your budget."
                : "Sve četiri faze vodim lično. Kada posao to traži (Meta, kreativa, SEO), uključim proverene specijaliste, ali strategija i vaš nalog ostaju kod jedne senior osobe. To znači senior-led boutique: bez predaje naloga i bez juniora koji uči na vašem budžetu."}
            </p>
          </div>
        </div>
      </section>

      {/* The four phases */}
      <section className="bg-slate-50 py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {isEn ? "The four phases" : "Četiri faze"}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {isEn
                ? "Each phase has to hold before the next one starts. That order is the method."
                : "Svaka faza mora da drži pre nego što počne sledeća. Taj redosled je metod."}
            </p>
          </div>

          <div className="space-y-8">
            {phases.map((p) => (
              <div
                key={p.n}
                className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-primary font-heading font-bold text-3xl md:text-4xl">
                    {p.n}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-slate-900">
                    {p.title}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                      {labels.whatIDo}
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed">{p.whatIDo}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                      {labels.why}
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed">{p.why}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                      {labels.youGet}
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed">{p.youGet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POAS positioning */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              {isEn ? "The number that matters" : "Broj koji je bitan"}
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mt-3 mb-5">
              {isEn ? "Why POAS, not ROAS" : "Zašto POAS, a ne ROAS"}
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              {isEn
                ? "POAS = Profit on Ad Spend. ROAS measures revenue ÷ ad spend; POAS measures profit ÷ ad spend. Two stores with the same 4× ROAS can have completely different profit if their margins differ."
                : "POAS = Profit on Ad Spend (profit na uloženo u oglase). ROAS meri prihod podeljen troškom oglasa; POAS meri profit podeljen troškom oglasa. Dve prodavnice sa istim ROAS-om od 4x mogu imati potpuno različit profit ako su im marže različite."}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {isEn
                ? "That's why the method optimizes to POAS — it's the number that decides whether the business is actually growing, not just the one that looks best in a dashboard."
                : "Zato metod optimizuje na POAS: to je broj koji određuje da li biznis stvarno raste, a ne onaj koji najbolje izgleda u dashboard-u."}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {isEn
              ? "Want the method run on your account?"
              : "Želite ovaj metod na svom nalogu?"}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            {isEn
              ? "20 minutes. I'll tell you where the account stands and whether Profit-First can move it — and if it can't, I'll say so."
              : "20 minuta razgovora. Kažem vam gde nalog stoji i da li Profit-First može da ga pomeri, a ako ne može, reći ću vam iskreno."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              {isEn ? "Book a free 20-minute call" : "Zakažite besplatnih 20 minuta"}
            </Button>
            <Button href="/usluge/google-ads-upravljanje" variant="primary">
              {isEn ? "Google Ads Management" : "Google Ads upravljanje"}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
