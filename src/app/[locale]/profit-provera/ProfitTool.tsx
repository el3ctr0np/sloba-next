"use client";

import { useState } from "react";
import { Calculator, ListChecks } from "lucide-react";
import { ProfitLeakCalculator } from "./ProfitLeakCalculator";
import { ProfitLeakCheck } from "./ProfitLeakCheck";

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

function pushDataLayer(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

type Mode = "calculator" | "quiz";

// Two front doors on one page (NN/G: accommodate variable input-readiness):
// - "Kalkulator" for operators who know their numbers → concrete € figure.
// - "Brza procena" for those who don't → 6-question qualitative estimate.
// Calculator is the default: it's the sharper lead magnet for paid campaigns.
export function ProfitTool({ locale }: { locale: string }) {
  const isEn = locale === "en";
  const [mode, setMode] = useState<Mode>("calculator");

  const copy = {
    calcTab: isEn ? "Calculator" : "Kalkulator",
    calcSub: isEn ? "I know my numbers" : "Znam svoje brojke",
    quizTab: isEn ? "Quick check" : "Brza procena",
    quizSub: isEn ? "6 questions instead" : "6 pitanja umesto toga",
  };

  const switchMode = (next: Mode) => {
    if (next === mode) return;
    setMode(next);
    pushDataLayer("tool_mode_switch", { tool: "profit_leak", mode: next });
  };

  const tabClass = (active: boolean) =>
    `flex-1 flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all ${
      active
        ? "border-accent bg-accent/10"
        : "border-gray-200 bg-white hover:border-gray-300"
    }`;

  return (
    <div>
      {/* Mode toggle */}
      <div className="grid grid-cols-2 gap-3 mb-6" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={mode === "calculator"}
          onClick={() => switchMode("calculator")}
          className={tabClass(mode === "calculator")}
        >
          <Calculator
            size={22}
            strokeWidth={1.5}
            className={mode === "calculator" ? "text-gray-900 mt-0.5" : "text-gray-400 mt-0.5"}
          />
          <span>
            <span className="block font-heading font-semibold text-gray-900">{copy.calcTab}</span>
            <span className="block text-xs text-gray-500">{copy.calcSub}</span>
          </span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "quiz"}
          onClick={() => switchMode("quiz")}
          className={tabClass(mode === "quiz")}
        >
          <ListChecks
            size={22}
            strokeWidth={1.5}
            className={mode === "quiz" ? "text-gray-900 mt-0.5" : "text-gray-400 mt-0.5"}
          />
          <span>
            <span className="block font-heading font-semibold text-gray-900">{copy.quizTab}</span>
            <span className="block text-xs text-gray-500">{copy.quizSub}</span>
          </span>
        </button>
      </div>

      {mode === "calculator" ? (
        <ProfitLeakCalculator locale={locale} />
      ) : (
        <ProfitLeakCheck locale={locale} />
      )}
    </div>
  );
}
