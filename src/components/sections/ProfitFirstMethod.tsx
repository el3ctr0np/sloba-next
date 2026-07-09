const PHASES_EN = [
  {
    n: "01",
    title: "Stabilize",
    desc: "Fix tracking so the numbers are true, clean up account structure, and cut the budget that does nothing.",
  },
  {
    n: "02",
    title: "Efficiency",
    desc: "Optimize to profit (POAS), not to revenue that only looks good in a report.",
  },
  {
    n: "03",
    title: "Scale",
    desc: "Grow budget only where the efficiency holds. Growth without waste.",
  },
  {
    n: "04",
    title: "Expand",
    desc: "New markets, new channels and brand, once the foundation can carry them.",
  },
];

const PHASES_SR = [
  {
    n: "01",
    title: "Stabilizacija",
    desc: "Sredim merenje da brojke budu istinite, počistim strukturu naloga i budžet koji ne radi ništa.",
  },
  {
    n: "02",
    title: "Efikasnost",
    desc: "Optimizujem na profit (POAS), ne na prihod koji samo lepo izgleda u izveštaju.",
  },
  {
    n: "03",
    title: "Skaliranje",
    desc: "Podižem budžet samo tamo gde efikasnost ostaje. Rast bez rasipanja.",
  },
  {
    n: "04",
    title: "Ekspanzija",
    desc: "Nova tržišta, novi kanali i brand, kad temelji mogu da ih iznesu.",
  },
];

export function ProfitFirstMethod({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const phases = isEn ? PHASES_EN : PHASES_SR;

  return (
    <section className="section-padding bg-slate-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-3">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            {isEn ? "The Profit-First Method" : "Profit-First metod"}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-white">
          {isEn
            ? "The same process on every account"
            : "Isti proces na svakom nalogu"}
        </h2>
        <p className="text-center text-slate-300 max-w-2xl mx-auto mb-12">
          {isEn
            ? "Truth first, then profit, then growth. No guesswork, no vanity metrics."
            : "Prvo istina, pa profit, pa rast. Bez nagađanja, bez vanity metrika."}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((p) => (
            <div
              key={p.n}
              className="bg-slate-800/60 border border-slate-700 rounded-xl p-6"
            >
              <div className="text-primary font-heading font-bold text-2xl mb-3">
                {p.n}
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2 text-white">
                {p.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
