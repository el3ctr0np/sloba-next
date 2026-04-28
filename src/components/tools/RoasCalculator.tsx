"use client";

import { useMemo, useState } from "react";

type Locale = "sr" | "en";

interface RoasCalculatorProps {
  locale?: Locale;
}

const copy = {
  sr: {
    title: "ROAS Kalkulator",
    subtitle: "Unesite prihod i potrošnju na oglase da biste dobili ROAS + poređenje sa industrijskim benchmark-om.",
    revenueLabel: "Prihod od oglasa (€)",
    spendLabel: "Potrošnja na oglase (€)",
    industryLabel: "Industrija (opciono)",
    revenuePlaceholder: "npr. 10000",
    spendPlaceholder: "npr. 2500",
    resultTitle: "Vaš ROAS",
    ratioLabel: "ROAS (odnos)",
    percentLabel: "ROAS (%)",
    profitLabel: "Neto ROI (prihod – spend)",
    benchmarkTitle: "Poređenje sa benchmark-om",
    benchmarkGood: "Iznad benchmark-a — zadržite trend",
    benchmarkOk: "Blizu benchmark-a — ima prostora",
    benchmarkLow: "Ispod benchmark-a — optimizacija je prioritet",
    emptyState: "Unesite oba broja da vidite rezultat.",
    zeroSpend: "Potrošnja mora biti veća od nule.",
    disclaimer: "Benchmark-ovi su orijentacioni proseci po industriji (Srbija + EU). Vaš profitabilan prag zavisi od marže.",
    targetLabel: "Benchmark ROAS",
  },
  en: {
    title: "ROAS Calculator",
    subtitle: "Enter revenue and ad spend to get ROAS + a comparison against industry benchmarks.",
    revenueLabel: "Revenue from ads (€)",
    spendLabel: "Ad spend (€)",
    industryLabel: "Industry (optional)",
    revenuePlaceholder: "e.g. 10000",
    spendPlaceholder: "e.g. 2500",
    resultTitle: "Your ROAS",
    ratioLabel: "ROAS (ratio)",
    percentLabel: "ROAS (%)",
    profitLabel: "Net return (revenue – spend)",
    benchmarkTitle: "Benchmark comparison",
    benchmarkGood: "Above benchmark — keep the trend",
    benchmarkOk: "Near benchmark — room to grow",
    benchmarkLow: "Below benchmark — optimization is a priority",
    emptyState: "Enter both numbers to see the result.",
    zeroSpend: "Spend must be greater than zero.",
    disclaimer: "Benchmarks are industry averages (Serbia + EU). Your profitable threshold depends on margin.",
    targetLabel: "Benchmark ROAS",
  },
} as const;

const industries = [
  { key: "ecommerce_fashion", sr: "eCommerce — Moda/Odeća", en: "eCommerce — Fashion/Apparel", benchmark: 4.0 },
  { key: "ecommerce_beauty", sr: "eCommerce — Kozmetika/Lepota", en: "eCommerce — Beauty/Skincare", benchmark: 3.5 },
  { key: "ecommerce_home", sr: "eCommerce — Dom i bašta", en: "eCommerce — Home & Garden", benchmark: 3.8 },
  { key: "ecommerce_electronics", sr: "eCommerce — Elektronika", en: "eCommerce — Electronics", benchmark: 5.0 },
  { key: "ecommerce_food", sr: "eCommerce — Hrana/Pića", en: "eCommerce — Food & Beverage", benchmark: 4.5 },
  { key: "saas_b2b", sr: "SaaS / B2B", en: "SaaS / B2B", benchmark: 3.0 },
  { key: "lead_gen", sr: "Lead Gen (lokalne usluge)", en: "Lead Gen (local services)", benchmark: 2.5 },
  { key: "luxury", sr: "Luksuzni proizvodi", en: "Luxury products", benchmark: 6.0 },
  { key: "general", sr: "Opšte / drugo", en: "General / other", benchmark: 4.0 },
] as const;

export default function RoasCalculator({ locale = "sr" }: RoasCalculatorProps) {
  const t = copy[locale];
  const [revenue, setRevenue] = useState("");
  const [spend, setSpend] = useState("");
  const [industry, setIndustry] = useState<(typeof industries)[number]["key"]>("general");

  const rev = parseFloat(revenue.replace(",", "."));
  const spd = parseFloat(spend.replace(",", "."));
  const hasInputs = !Number.isNaN(rev) && !Number.isNaN(spd) && spd !== 0;
  const zeroSpend = !Number.isNaN(spd) && spd === 0;

  const { ratio, percent, profit, benchmark, status } = useMemo(() => {
    if (!hasInputs) return { ratio: 0, percent: 0, profit: 0, benchmark: 0, status: "none" as const };
    const r = rev / spd;
    const bench = industries.find((i) => i.key === industry)?.benchmark ?? 4.0;
    let s: "good" | "ok" | "low" = "low";
    if (r >= bench) s = "good";
    else if (r >= bench * 0.75) s = "ok";
    return { ratio: r, percent: r * 100, profit: rev - spd, benchmark: bench, status: s };
  }, [hasInputs, rev, spd, industry]);

  const statusColor =
    status === "good"
      ? "bg-green-50 border-green-400 text-green-900"
      : status === "ok"
      ? "bg-yellow-50 border-yellow-400 text-yellow-900"
      : "bg-red-50 border-red-400 text-red-900";

  const statusLabel =
    status === "good" ? t.benchmarkGood : status === "ok" ? t.benchmarkOk : t.benchmarkLow;

  return (
    <div className="not-prose bg-white border-2 border-gray-900 rounded-xl p-5 md:p-7 my-8 shadow-card">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-2">
          {locale === "sr" ? "Interaktivni alat" : "Interactive tool"}
        </p>
        <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mt-0 mb-2">
          {t.title}
        </h3>
        <p className="text-sm text-gray-600 mb-0">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        <label className="block">
          <span className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            {t.revenueLabel}
          </span>
          <input
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
            placeholder={t.revenuePlaceholder}
            className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-lg text-base font-medium focus:outline-none focus:border-gray-900 transition-colors"
          />
        </label>

        <label className="block">
          <span className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            {t.spendLabel}
          </span>
          <input
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            value={spend}
            onChange={(e) => setSpend(e.target.value)}
            placeholder={t.spendPlaceholder}
            className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-lg text-base font-medium focus:outline-none focus:border-gray-900 transition-colors"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            {t.industryLabel}
          </span>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value as typeof industry)}
            className="w-full px-3 py-2.5 border-2 border-gray-300 rounded-lg text-base font-medium bg-white focus:outline-none focus:border-gray-900 transition-colors"
          >
            {industries.map((i) => (
              <option key={i.key} value={i.key}>
                {locale === "sr" ? i.sr : i.en} — {t.targetLabel} {i.benchmark.toFixed(1)}×
              </option>
            ))}
          </select>
        </label>
      </div>

      {zeroSpend && (
        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-3 mb-4 text-sm text-red-800">
          {t.zeroSpend}
        </div>
      )}

      {!hasInputs && !zeroSpend && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-500 text-center">
          {t.emptyState}
        </div>
      )}

      {hasInputs && (
        <>
          <div className="bg-slate-900 text-white rounded-xl p-5 md:p-6 mb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3 font-semibold">
              {t.resultTitle}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-yellow-400 mb-1">
                  {ratio.toFixed(2)}×
                </p>
                <p className="text-xs text-slate-400 mb-0">{t.ratioLabel}</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-heading font-bold text-yellow-400 mb-1">
                  {percent.toFixed(0)}%
                </p>
                <p className="text-xs text-slate-400 mb-0">{t.percentLabel}</p>
              </div>
              <div>
                <p
                  className={`text-3xl md:text-4xl font-heading font-bold mb-1 ${
                    profit >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {profit >= 0 ? "+" : ""}
                  {profit.toLocaleString(locale === "sr" ? "sr-RS" : "en-GB", {
                    maximumFractionDigits: 0,
                  })}{" "}
                  €
                </p>
                <p className="text-xs text-slate-400 mb-0">{t.profitLabel}</p>
              </div>
            </div>
          </div>

          <div className={`border-2 rounded-xl p-4 md:p-5 ${statusColor}`}>
            <p className="text-xs uppercase tracking-wide font-bold mb-2 opacity-80">
              {t.benchmarkTitle}
            </p>
            <p className="font-heading font-semibold text-base md:text-lg mb-1">{statusLabel}</p>
            <p className="text-sm mb-0 opacity-90">
              {locale === "sr"
                ? `Vaš ROAS ${ratio.toFixed(2)}× vs. benchmark ${benchmark.toFixed(1)}×.`
                : `Your ROAS ${ratio.toFixed(2)}× vs. benchmark ${benchmark.toFixed(1)}×.`}
            </p>
          </div>
        </>
      )}

      <p className="text-xs text-gray-500 mt-4 mb-0 leading-relaxed">{t.disclaimer}</p>
    </div>
  );
}
