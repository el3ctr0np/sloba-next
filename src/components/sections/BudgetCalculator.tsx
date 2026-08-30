"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";

type Mode = "leadgen" | "ecommerce";

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

function pushDataLayer(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

const inputClass =
  "w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-semibold";

/** Animated count-up number. Respects prefers-reduced-motion. */
function CountUp({ value, prefix = "", suffix = "", decimals = 0 }: {
  value: number; prefix?: string; suffix?: string; decimals?: number;
}) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      prev.current = value;
      return;
    }
    const from = prev.current;
    const start = performance.now();
    const dur = 550;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(from + (value - from) * eased);
      if (t < 1) raf.current = requestAnimationFrame(tick);
      else prev.current = value;
    };
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [value]);

  const formatted = display.toLocaleString("sr-RS", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return (
    <span className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export function BudgetCalculator() {
  const locale = useLocale();
  const sr = locale === "sr";
  const cur = sr ? "€" : "$";

  const [mode, setMode] = useState<Mode>("leadgen");
  // Lead gen inputs
  const [maxCpa, setMaxCpa] = useState(sr ? 25 : 150);
  const [goal, setGoal] = useState(10);
  const [cvr, setCvr] = useState(4);
  // eCommerce inputs
  const [aov, setAov] = useState(sr ? 60 : 80);
  const [margin, setMargin] = useState(30);

  const firedRef = useRef(false);
  const markUsed = () => {
    if (firedRef.current) return;
    firedRef.current = true;
    pushDataLayer("budget_calculator_used", { mode });
  };

  // eCommerce: max CPA = koliko profita nosi jedna porudžbina (AOV x marža)
  const effMaxCpa = mode === "leadgen" ? maxCpa : (aov * margin) / 100;
  const safeCvr = Math.max(0.1, cvr);
  const maxCpc = effMaxCpa * (safeCvr / 100);
  const monthly = effMaxCpa * goal;
  const daily = monthly / 30.4;
  const clicksNeeded = safeCvr > 0 ? Math.round(goal / (safeCvr / 100)) : 0;

  const modeBtn = (m: Mode, label: string) => (
    <button
      type="button"
      onClick={() => {
        setMode(m);
        markUsed();
      }}
      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
        mode === m
          ? "bg-gray-900 text-white shadow-md"
          : "bg-white text-gray-600 border border-gray-300 hover:border-gray-900"
      }`}
    >
      {label}
    </button>
  );

  const field = (
    label: string,
    value: number,
    set: (n: number) => void,
    suffix: string,
    step = 1,
  ) => (
    <div>
      <label className="text-sm font-semibold text-gray-900 block mb-1.5">{label}</label>
      <div className="relative">
        <input
          type="number"
          min={0}
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => {
            set(Number(e.target.value));
            markUsed();
          }}
          className={inputClass}
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
          {suffix}
        </span>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-900 shadow-card overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex gap-2 mb-6">
          {modeBtn("leadgen", sr ? "Lead gen / B2B" : "Lead gen / B2B")}
          {modeBtn("ecommerce", "eCommerce")}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mode === "leadgen" ? (
            <>
              {field(
                sr ? "Koliko vredi jedan upit (max CPA)" : "What one lead is worth (max CPA)",
                maxCpa, setMaxCpa, cur, 5,
              )}
              {field(
                sr ? "Cilj: upita mesečno" : "Goal: leads per month",
                goal, setGoal, sr ? "kom" : "leads",
              )}
              {field(
                sr ? "Conversion rate stranice" : "Landing page conversion rate",
                cvr, setCvr, "%", 0.5,
              )}
            </>
          ) : (
            <>
              {field(
                sr ? "Prosečna vrednost porudžbine" : "Average order value",
                aov, setAov, cur, 5,
              )}
              {field(sr ? "Marža" : "Margin", margin, setMargin, "%", 5)}
              {field(
                sr ? "Cilj: porudžbina mesečno" : "Goal: orders per month",
                goal, setGoal, sr ? "kom" : "orders",
              )}
            </>
          )}
        </div>
        {mode === "ecommerce" && (
          <p className="text-xs text-gray-500 mt-3 mb-0">
            {sr
              ? `Max CPA izvodimo iz vaših brojki: ${cur}${aov} × ${margin}% marže = ${cur}${effMaxCpa.toFixed(2)} profita po porudžbini. Toliko najviše sme da košta jedna porudžbina iz oglasa da ne radite u minusu.`
              : `Max CPA is derived from your numbers: ${cur}${aov} × ${margin}% margin = ${cur}${effMaxCpa.toFixed(2)} profit per order. That is the most one order from ads can cost before you lose money.`}
          </p>
        )}
        {mode === "ecommerce" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {field(
              sr ? "Conversion rate sajta" : "Site conversion rate",
              cvr, setCvr, "%", 0.5,
            )}
          </div>
        )}
      </div>

      <div className="bg-slate-900 text-white p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-5">
          {sr ? "Rezultat - transparentna formula, ne crna kutija" : "Result - transparent formula, no black box"}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="transition-transform duration-300 hover:-translate-y-1">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-1">
              <CountUp value={maxCpc} prefix={cur} decimals={2} />
            </p>
            <p className="text-xs text-slate-400 mb-0">
              {sr ? "max CPC koji smete da platite" : "max CPC you can afford"}
            </p>
          </div>
          <div className="transition-transform duration-300 hover:-translate-y-1">
            <p className="text-2xl md:text-3xl font-heading font-bold text-yellow-400 mb-1">
              <CountUp value={monthly} prefix={cur} />
            </p>
            <p className="text-xs text-slate-400 mb-0">
              {sr ? "mesečni budžet za cilj" : "monthly budget for your goal"}
            </p>
          </div>
          <div className="transition-transform duration-300 hover:-translate-y-1">
            <p className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
              <CountUp value={daily} prefix={cur} decimals={1} />
            </p>
            <p className="text-xs text-slate-400 mb-0">
              {sr ? "dnevno (mesec = 30,4 dana)" : "per day (month = 30.4 days)"}
            </p>
          </div>
          <div className="transition-transform duration-300 hover:-translate-y-1">
            <p className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
              <CountUp value={clicksNeeded} />
            </p>
            <p className="text-xs text-slate-400 mb-0">
              {sr ? "klikova potrebno mesečno" : "clicks needed per month"}
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-5 mb-0">
          {sr
            ? "Formula: max CPA × conversion rate = max CPC · budžet = max CPA × cilj. Poredite max CPC sa realnim CPC-om u vašoj industriji: ako je realni CPC veći, popravlja se stranica ili cilj, ne budžet."
            : "Formula: max CPA × conversion rate = max CPC · budget = max CPA × goal. Compare the max CPC with the real CPC in your industry: if the real CPC is higher, fix the page or the goal, not the budget."}
        </p>
      </div>
    </div>
  );
}
