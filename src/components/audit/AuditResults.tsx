"use client";

import { useEffect, useMemo, useState } from "react";
import { Link } from "@/i18n/navigation";
import type { AuditCopy } from "@/lib/audit-engine/copy";
import {
  PAID_AUDIT_THRESHOLD,
  groupByQuadrant,
  rankFor,
  type Quadrant,
} from "@/lib/audit-engine/scoring";
import type { AuditDefinition, ScoreResult } from "@/lib/audit-engine/types";
import { CountUp } from "./CountUp";
import { AuditReportForm } from "./AuditReportForm";

/** Score band colours, shared by the ring, the group bars and the rank badge. */
function bandClasses(score: number): { text: string; bar: string; ring: string } {
  if (score >= 85)
    return { text: "text-green-400", bar: "bg-green-500", ring: "#22c55e" };
  if (score >= 70)
    return { text: "text-accent", bar: "bg-accent", ring: "#fbbc04" };
  if (score >= 50)
    return { text: "text-orange-400", bar: "bg-orange-500", ring: "#f97316" };
  return { text: "text-red-400", bar: "bg-red-500", ring: "#ef4444" };
}

const QUADRANT_ORDER: Quadrant[] = ["quickWin", "project", "later", "backlog"];

const QUADRANT_STYLE: Record<Quadrant, string> = {
  quickWin: "border-green-300 bg-green-50",
  project: "border-red-200 bg-red-50",
  later: "border-blue-200 bg-blue-50",
  backlog: "border-gray-200 bg-gray-50",
};

/**
 * Staggered fade-in wrapper. Defined at module scope so React keeps the same
 * component type across renders — inline definitions remount their children and
 * would restart the count-up on every keystroke in the report form.
 *
 * Tailwind cannot generate a class from a runtime value, so the delay is an
 * inline style rather than an arbitrary-value class.
 */
function Reveal({
  shown,
  delay,
  className = "",
  children,
}: {
  shown: boolean;
  delay: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export type AuditResultsProps = {
  definition: AuditDefinition;
  copy: AuditCopy;
  result: ScoreResult;
  locale: string;
  eventPrefix: string;
  report: { formName: string; subject: string; nextUrl: string };
  guideHref: React.ReactNode;
  onReview: () => void;
  onReset: () => void;
};

export function AuditResults({
  definition,
  copy,
  result,
  locale,
  eventPrefix,
  report,
  guideHref,
  onReview,
  onReset,
}: AuditResultsProps) {
  const [revealed, setRevealed] = useState(false);

  // A timer rather than requestAnimationFrame: rAF is paused while the tab is
  // hidden, and the reveal gates visibility (opacity-0), so a backgrounded tab
  // would render the whole result blank.
  useEffect(() => {
    const id = setTimeout(() => setRevealed(true), 30);
    return () => clearTimeout(id);
  }, []);

  const band = bandClasses(result.overall);
  // Every checkpoint marked N/A leaves nothing to score: show that plainly
  // rather than a 0 that reads like a failing account.
  const rank = result.scorable
    ? copy.ranks[rankFor(result.overall)]
    : copy.results.allNa;
  const quadrants = useMemo(
    () => groupByQuadrant(result.findings),
    [result.findings],
  );
  const belowThreshold =
    result.scorable && result.overall < PAID_AUDIT_THRESHOLD;

  // Ring geometry: r=52 gives a 327px circumference at a 120px box.
  const circumference = 2 * Math.PI * 52;
  const dash =
    revealed && result.scorable
      ? circumference * (1 - result.overall / 100)
      : circumference;

  return (
    <div className="space-y-6">
      {/* ── Score ── */}
      <div className="bg-slate-900 text-white rounded-2xl border-2 border-gray-900 shadow-card overflow-hidden">
        <div className="p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-6">
            {copy.results.eyebrow}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
            <div className="relative flex-shrink-0 w-[120px] h-[120px]">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="10"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="none"
                  stroke={band.ring}
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={dash}
                  style={{
                    transition: "stroke-dashoffset 1s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {result.scorable ? (
                  <>
                    <span
                      className={`font-heading font-bold text-3xl md:text-4xl ${band.text}`}
                    >
                      <CountUp
                        value={result.overall}
                        locale={locale === "en" ? "en-US" : "sr-RS"}
                      />
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {copy.results.ofHundred}
                    </span>
                  </>
                ) : (
                  <span className="font-heading font-bold text-2xl text-slate-400">
                    N/A
                  </span>
                )}
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-2">
                {rank.title}
              </h2>
              <p className="text-slate-300 text-sm md:text-base mb-0 max-w-xl">
                {rank.blurb}
              </p>
            </div>
          </div>

          {/* Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-700">
            {[
              { value: result.p1Problems, label: copy.results.p1Label, tone: "text-red-400" },
              { value: result.problems, label: copy.results.problemsLabel, tone: "text-white" },
              { value: result.unsure, label: copy.results.unsureLabel, tone: "text-accent" },
              { value: result.na, label: copy.results.naLabel, tone: "text-slate-300" },
            ].map((stat, i) => (
              <Reveal key={stat.label} shown={revealed} delay={200 + i * 90}>
                <p className={`text-2xl md:text-3xl font-heading font-bold mb-1 ${stat.tone}`}>
                  <CountUp
                    value={stat.value}
                    locale={locale === "en" ? "en-US" : "sr-RS"}
                  />
                </p>
                <p className="text-xs text-slate-400 mb-0">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Group bars */}
        <div className="bg-slate-800 p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-5">
            {copy.results.byGroup}
          </p>
          <div className="space-y-3.5">
            {result.groups.map((g, i) => {
              const gb = g.score === null ? null : bandClasses(g.score);
              return (
                <Reveal key={g.groupId} shown={revealed} delay={400 + i * 70}>
                  <div className="flex items-baseline justify-between gap-4 mb-1.5">
                    <p className="text-sm text-slate-200 mb-0 truncate">{g.title}</p>
                    <p
                      className={`text-sm font-bold tabular-nums mb-0 flex-shrink-0 ${
                        gb ? gb.text : "text-slate-500"
                      }`}
                    >
                      {g.score === null ? "N/A" : g.score}
                    </p>
                  </div>
                  <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-[width] duration-1000 ease-out motion-reduce:transition-none ${
                        gb ? gb.bar : "bg-slate-600"
                      }`}
                      style={{
                        width: revealed ? `${g.score ?? 0}%` : "0%",
                        transitionDelay: `${450 + i * 70}ms`,
                      }}
                    />
                  </div>
                  {g.score === null && (
                    <p className="text-[11px] text-slate-400 mt-1 mb-0">
                      {copy.results.naGroup}
                    </p>
                  )}
                </Reveal>
              );
            })}
          </div>
          <p className="text-xs text-slate-400 mt-6 mb-0">
            <span className="font-semibold text-slate-300">
              {copy.results.methodTitle}:
            </span>{" "}
            {copy.results.method}
          </p>
        </div>
      </div>

      {/* ── Impact / effort matrix ── */}
      <Reveal shown={revealed} delay={700} className="bg-white rounded-2xl border-2 border-gray-900 shadow-card p-6 md:p-8">
        <h2 className="font-heading font-bold text-xl md:text-2xl text-gray-900 mb-2">
          {copy.results.matrixTitle}
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          {copy.results.matrixLead}
        </p>

        {result.findings.length === 0 ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <p className="text-green-900 mb-0">{copy.results.nothingToFix}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {QUADRANT_ORDER.map((q) => {
                const items = quadrants[q];
                if (items.length === 0) return null;
                return (
                  <div
                    key={q}
                    className={`rounded-xl border-2 p-4 md:p-5 ${QUADRANT_STYLE[q]}`}
                  >
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <p className="font-heading font-bold text-gray-900 mb-0">
                        {copy.quadrants[q].title}
                      </p>
                      <span className="text-xs font-bold text-gray-500 tabular-nums">
                        {items.length}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">
                      {copy.quadrants[q].hint}
                    </p>
                    <ul className="space-y-3 list-none pl-0 mb-0">
                      {items.map((f) => (
                        <li key={f.item.id} className="flex items-start gap-2.5">
                          <span
                            className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${
                              f.answer === "problem"
                                ? "bg-red-600 text-white"
                                : "bg-accent text-gray-900"
                            }`}
                          >
                            {f.item.n}
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-900 mb-0.5">
                              {f.item.title}
                            </p>
                            <p className="text-xs text-gray-500 mb-0">
                              {copy.priority[f.item.priority]} ·{" "}
                              {copy.effort[f.item.effort]} · {copy.answers[f.answer]}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            {result.unsure > 0 && (
              <p className="text-sm text-gray-500 mt-5 mb-0">
                {copy.results.unsureNote}
              </p>
            )}
          </>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onReview}
            className="px-5 py-3 rounded-xl font-semibold border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-colors"
          >
            ← {copy.results.reviewAgain}
          </button>
          <button
            type="button"
            onClick={onReset}
            className="px-5 py-3 rounded-xl font-semibold text-gray-500 hover:text-gray-900 transition-colors"
          >
            {copy.results.resetAll}
          </button>
        </div>
      </Reveal>

      {/* ── Report gate (the only place an email is asked for) ── */}
      <Reveal shown={revealed} delay={800}>
        <AuditReportForm
          definition={definition}
          copy={copy}
          result={result}
          eventPrefix={eventPrefix}
          report={report}
        />
      </Reveal>

      {/* ── Paid audit CTA, loud below the threshold ── */}
      <Reveal shown={revealed} delay={900}>
        {belowThreshold ? (
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 text-center">
            <p className="font-heading font-bold text-xl md:text-2xl mb-3">
              {copy.cta.lowTitle}
            </p>
            <p className="text-slate-300 text-sm md:text-base mb-6 max-w-xl mx-auto">
              {copy.cta.lowBody}
            </p>
            <Link
              href="/usluge/google-ads-audit"
              className="inline-block bg-white text-gray-900 font-semibold rounded-lg px-6 py-3 hover:bg-gray-100 transition-colors no-underline"
            >
              {copy.cta.lowButton} →
            </Link>
          </div>
        ) : (
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8">
            <p className="font-heading font-bold text-lg text-gray-900 mb-2">
              {copy.cta.highTitle}
            </p>
            <p className="text-gray-600 text-sm mb-5">{copy.cta.highBody}</p>
            <Link
              href="/usluge/google-ads-audit"
              className="btn-secondary inline-block no-underline"
            >
              {copy.cta.highButton} →
            </Link>
          </div>
        )}
      </Reveal>

      <Reveal shown={revealed} delay={950}>{guideHref}</Reveal>
    </div>
  );
}
