const PHASES_EN = [
  {
    n: "01",
    title: "Foundation",
    desc: "A clean account structure.",
  },
  {
    n: "02",
    title: "Measurement",
    desc: "Everything worth measuring, from micro to macro conversions.",
  },
  {
    n: "03",
    title: "Scaling",
    desc: "Squeezing the most out of the same budget.",
  },
  {
    n: "04",
    title: "Expansion",
    desc: "New markets, channels, brands and products, when the conditions are right.",
  },
];

const PHASES_SR = [
  {
    n: "01",
    title: "Temelj",
    desc: "Jasna struktura naloga.",
  },
  {
    n: "02",
    title: "Merenje",
    desc: "Sve što treba da se meri, od mikro do makro konverzija.",
  },
  {
    n: "03",
    title: "Skaliranje",
    desc: "Nalog spreman da iz istog budžeta izvuče maksimum.",
  },
  {
    n: "04",
    title: "Ekspanzija",
    desc: "Nova tržišta, kanali, brendovi i proizvodi, kad za to postoje uslovi.",
  },
];

export function ProfitFirstMethod({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const phases = isEn ? PHASES_EN : PHASES_SR;

  return (
    <section className="section-padding bg-slate-900 text-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-white">
          {isEn ? "The Back to Basics method" : "Back to Basics metod"}
        </h2>
        <p className="text-center text-slate-300 max-w-2xl mx-auto mb-12">
          {isEn
            ? "I named it that on purpose. Back to Basics is nothing more than a solid foundation on every account. The internet is full of free AI advice — but whatever AI recommends, advertising still rests on the same foundations it rested on ten years ago. Campaigns change, formats change; foundations don't."
            : "Namerno sam ga tako nazvao. Back to Basics nije ništa drugo do jasan temelj na svakom nalogu. Besplatnih AI saveta danas je pun internet - ali šta god vam AI preporučio, oglašavanje i dalje počiva na istim temeljima na kojima je počivalo i pre deset godina. Kampanje se menjaju, formati se menjaju; temelji ne."}
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
