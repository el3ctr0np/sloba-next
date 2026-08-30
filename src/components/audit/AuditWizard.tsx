"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { AuditCopy } from "@/lib/audit-engine/copy";
import { fill, plural } from "@/lib/audit-engine/format";
import {
  countAnswered,
  isGroupComplete,
  scoreAudit,
} from "@/lib/audit-engine/scoring";
import {
  clearProgress,
  loadProgress,
  saveProgress,
} from "@/lib/audit-engine/storage";
import type {
  Answer,
  Answers,
  AuditDefinition,
  AuditItem,
} from "@/lib/audit-engine/types";
import { AuditResults } from "./AuditResults";
import { CheckpointCard } from "./CheckpointCard";
import type { Teaching } from "@/lib/audit-engine/data/pmax-check-teaching";

type DataLayerWindow = Window & { dataLayer?: Array<Record<string, unknown>> };

function pushDataLayer(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

type Phase = "intro" | "wizard" | "results";

export type AuditWizardProps = {
  definition: AuditDefinition;
  copy: AuditCopy;
  /** dataLayer event namespace, e.g. "pmax_check". */
  eventPrefix: string;
  locale: string;
  /** formsubmit endpoint + redirect for the "send me the report" gate. */
  report: {
    formName: string;
    subject: string;
    nextUrl: string;
  };
  /** Rendered at the very bottom of the results. */
  guideHref: React.ReactNode;
  /** Blog slug of the source guide; each finding deep-links to its group anchor. */
  guideSlug?: string;
  /** Plain-language layer, keyed by checkpoint id. Checkpoints without an entry
   *  render in their original technical form. */
  teaching?: Record<string, Teaching>;
};

export function AuditWizard({
  definition,
  copy,
  eventPrefix,
  locale,
  report,
  guideHref,
  guideSlug,
  teaching,
}: AuditWizardProps) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [answers, setAnswers] = useState<Answers>({});
  // Writes go through this ref, not through the `answers` closure: several clicks
  // inside one tick would otherwise each read the same pre-render snapshot and
  // overwrite one another. Keep the two in lockstep on every assignment.
  const answersRef = useRef<Answers>({});
  const [groupIndex, setGroupIndex] = useState(0);
  const [restored, setRestored] = useState<{ answers: number } | null>(null);
  const [hydrated, setHydrated] = useState(false);

  const topRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const groupFiredRef = useRef<Set<string>>(new Set());
  const finishedScoreRef = useRef<number | null>(null);

  const total = useMemo(
    () => definition.groups.reduce((n, g) => n + g.items.length, 0),
    [definition],
  );

  // Restore saved progress once, on the client only. localStorage cannot be read
  // during render without a hydration mismatch, so the intro renders blank first
  // and the restored state lands on the next tick (scheduled rather than set
  // synchronously, per react-hooks/set-state-in-effect; a timer rather than a
  // frame so a backgrounded tab still restores).
  useEffect(() => {
    const saved = loadProgress(definition);
    if (saved) {
      // A resumed run has already counted its completed groups; do not re-fire.
      for (const group of definition.groups) {
        if (isGroupComplete(group, saved.answers)) {
          groupFiredRef.current.add(group.id);
        }
      }
    }
    const id = setTimeout(() => {
      if (saved) {
        answersRef.current = saved.answers;
        setAnswers(saved.answers);
        setGroupIndex(saved.group);
        setRestored({ answers: Object.keys(saved.answers).length });
      }
      setHydrated(true);
    }, 0);
    return () => clearTimeout(id);
  }, [definition]);

  const answered = countAnswered(definition, answers);
  const remaining = total - answered;
  const allAnswered = remaining === 0;
  const progressLabel = fill(copy.wizard.progress, { answered, total });

  // Scroll and move focus together: a phase swap replaces the whole panel, so a
  // keyboard or screen-reader user would otherwise be dropped back to <body>
  // with no announcement of what changed.
  const scrollToTop = useCallback(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    topRef.current?.focus({ preventScroll: true });
  }, []);

  const start = (fresh: boolean) => {
    if (fresh) {
      answersRef.current = {};
      setAnswers({});
      setGroupIndex(0);
      setRestored(null);
      groupFiredRef.current.clear();
      clearProgress(definition);
    }
    if (!startedRef.current) {
      startedRef.current = true;
      pushDataLayer(`${eventPrefix}_started`, {
        audit_id: definition.id,
        resumed: !fresh && Boolean(restored),
      });
    }
    setPhase("wizard");
    requestAnimationFrame(scrollToTop);
  };

  const answer = (item: AuditItem, value: Answer) => {
    // Computed outside the state updater on purpose: writing to localStorage,
    // mutating groupFiredRef and pushing to the dataLayer are side effects, and
    // React may replay or discard an updater under concurrent rendering. A
    // discarded replay would leave groupFiredRef poisoned and drop the event.
    const next = { ...answersRef.current, [item.id]: value };
    answersRef.current = next;
    setAnswers(next);
    saveProgress(definition, next, groupIndex);

    const group = definition.groups[groupIndex];
    if (
      group &&
      isGroupComplete(group, next) &&
      !groupFiredRef.current.has(group.id)
    ) {
      groupFiredRef.current.add(group.id);
      const groupResult = scoreAudit({ ...definition, groups: [group] }, next);
      pushDataLayer(`${eventPrefix}_group_completed`, {
        audit_id: definition.id,
        group_id: group.id,
        group_index: groupIndex + 1,
        // null, not 0, when every checkpoint in the group is N/A: an unscorable
        // group must not be averaged in as a zero.
        group_score: groupResult.scorable ? groupResult.overall : null,
      });
    }
  };

  const goToGroup = (index: number) => {
    setGroupIndex(index);
    saveProgress(definition, answers, index);
    requestAnimationFrame(scrollToTop);
  };

  const result = useMemo(
    () => scoreAudit(definition, answers),
    [definition, answers],
  );

  const finish = () => {
    // Re-firing is keyed on the score, not on a boolean: someone who goes back,
    // changes answers and finishes again would otherwise leave a stale score in
    // analytics that disagrees with the one the report form submits.
    if (finishedScoreRef.current !== result.overall) {
      finishedScoreRef.current = result.overall;
      pushDataLayer(`${eventPrefix}_finished`, {
        audit_id: definition.id,
        // null, not 0, when every checkpoint was marked N/A — same reason as
        // group_score above: an unscorable run must not average in as a zero.
        score: result.scorable ? result.overall : null,
        p1_problems: result.p1Problems,
        problems: result.problems,
        unsure: result.unsure,
        na: result.na,
      });
    }
    setPhase("results");
    requestAnimationFrame(scrollToTop);
  };

  const reset = () => {
    if (typeof window !== "undefined" && !window.confirm(copy.results.resetConfirm)) {
      return;
    }
    answersRef.current = {};
    setAnswers({});
    setGroupIndex(0);
    setRestored(null);
    groupFiredRef.current.clear();
    finishedScoreRef.current = null;
    startedRef.current = false;
    clearProgress(definition);
    setPhase("intro");
    requestAnimationFrame(scrollToTop);
  };

  const group = definition.groups[groupIndex];
  const groupRemaining = group
    ? group.items.filter((i) => !answers[i.id]).length
    : 0;
  const isLastGroup = groupIndex === definition.groups.length - 1;

  return (
    <div ref={topRef} tabIndex={-1} className="scroll-mt-24 focus:outline-none">
      {phase === "intro" && (
        <div className="bg-white rounded-2xl border-2 border-gray-900 shadow-card overflow-hidden">
          <div className="p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-3">
              {copy.intro.howTitle}
            </p>
            <ol className="space-y-3 list-none pl-0 mb-0">
              {copy.intro.how.map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm md:text-base text-gray-700">{line}</span>
                </li>
              ))}
            </ol>

            <p className="text-sm text-gray-500 mt-5 mb-0">{copy.intro.timeEstimate}</p>

            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mt-6">
              <p className="font-semibold text-blue-900 text-sm mb-1">
                {copy.intro.forWhomTitle}
              </p>
              <p className="text-blue-800 text-sm mb-0">{copy.intro.forWhom}</p>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 md:p-8">
            {hydrated && restored && (
              <p className="text-sm text-accent mb-4">
                {fill(copy.intro.resumeNote, { answered: restored.answers, total })}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => start(!restored)}
                className="btn-secondary !py-3.5 text-base font-semibold"
              >
                {hydrated && restored ? copy.intro.resume : copy.intro.start} →
              </button>
              {hydrated && restored && (
                <button
                  type="button"
                  onClick={() => start(true)}
                  className="px-6 py-3 rounded-xl font-semibold border border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 transition-colors"
                >
                  {copy.intro.restart}
                </button>
              )}
            </div>
            <p className="text-xs text-slate-400 mt-4 mb-0">{copy.intro.noEmail}</p>
          </div>
        </div>
      )}

      {phase === "wizard" && group && (
        <div className="bg-white rounded-2xl border-2 border-gray-900 shadow-card overflow-hidden">
          {/* Progress header */}
          <div className="bg-slate-900 text-white p-5 md:p-6">
            <div className="flex items-center justify-between gap-4 mb-3">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-0">
                {fill(copy.wizard.groupOf, {
                  i: groupIndex + 1,
                  n: definition.groups.length,
                })}
              </p>
              <p className="text-xs font-semibold text-accent tabular-nums mb-0">
                {progressLabel}
              </p>
            </div>
            <div
              className="h-2 w-full bg-slate-700 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={answered}
              aria-valuemin={0}
              aria-valuemax={total}
              aria-label={progressLabel}
            >
              <div
                className="h-full bg-accent rounded-full transition-[width] duration-500 ease-out"
                style={{ width: `${(answered / total) * 100}%` }}
              />
            </div>

            {/* Group chips */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {definition.groups.map((g, i) => {
                const done = isGroupComplete(g, answers);
                const active = i === groupIndex;
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => goToGroup(i)}
                    aria-current={active ? "step" : undefined}
                    aria-label={g.title}
                    title={g.title}
                    className={`w-9 h-9 rounded-lg text-xs font-bold transition-all duration-300 ${
                      active
                        ? "bg-white text-gray-900 scale-105"
                        : done
                          ? "bg-green-600 text-white hover:bg-green-500"
                          : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                    }`}
                  >
                    {done && !active ? "✓" : i + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Checkpoints */}
          <div className="p-5 md:p-8">
            <h2 className="font-heading font-bold text-xl md:text-2xl text-gray-900 mb-6">
              {group.title}
            </h2>

            <div className="space-y-4">
              {group.items.map((item) => (
                <CheckpointCard
                  key={item.id}
                  item={item}
                  copy={copy}
                  teaching={teaching?.[item.id]}
                  current={answers[item.id]}
                  onAnswer={(value) => answer(item, value)}
                />
              ))}
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() =>
                  groupIndex === 0 ? setPhase("intro") : goToGroup(groupIndex - 1)
                }
                className="px-5 py-3 rounded-xl font-semibold border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-colors"
              >
                ← {groupIndex === 0 ? copy.wizard.backToStart : copy.wizard.prev}
              </button>

              {!isLastGroup && (
                <button
                  type="button"
                  onClick={() => goToGroup(groupIndex + 1)}
                  className="btn-primary flex-1 sm:flex-none"
                >
                  {copy.wizard.next} →
                </button>
              )}

              {isLastGroup && (
                <button
                  type="button"
                  onClick={finish}
                  disabled={answered === 0}
                  className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    answered > 0
                      ? "bg-accent text-gray-900 hover:brightness-105 hover:shadow-md hover:-translate-y-0.5"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {allAnswered ? copy.wizard.finish : copy.wizard.finishPartial} →
                </button>
              )}

              <p className="text-sm text-gray-500 mb-0 sm:ml-auto">
                {groupRemaining > 0
                  ? plural(locale, groupRemaining, copy.wizard.answerAllInGroup)
                  : remaining > 0
                    ? plural(locale, remaining, copy.wizard.remaining)
                    : `✓ ${copy.wizard.groupDone}`}
              </p>
            </div>

            {/* Finish from any group. A partial run still scores honestly: unanswered
                checkpoints leave the denominator alone, and the result says so. */}
            {answered > 0 && !isLastGroup && (
              <button
                type="button"
                onClick={finish}
                className="btn-secondary w-full mt-4 !py-3.5 text-base font-semibold"
              >
                {allAnswered ? copy.wizard.finish : copy.wizard.finishPartial} →
              </button>
            )}
          </div>
        </div>
      )}

      {phase === "results" && (
        <AuditResults
          definition={definition}
          copy={copy}
          result={result}
          locale={locale}
          eventPrefix={eventPrefix}
          report={report}
          guideHref={guideHref}
          guideSlug={guideSlug}
          onReview={() => {
            setPhase("wizard");
            requestAnimationFrame(scrollToTop);
          }}
          onReset={reset}
        />
      )}
    </div>
  );
}
