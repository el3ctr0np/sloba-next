/**
 * Audit engine — pure scoring. No React, no DOM, so it can be unit-tested or
 * reused server-side if the report ever moves to an API route.
 */

import type {
  Answer,
  Answers,
  AuditDefinition,
  AuditItem,
  Effort,
  Finding,
  GroupScore,
  Priority,
  ScoreResult,
} from "./types";

/** P1 costs three times what P3 costs. Matches the 105-point checklist vocabulary. */
export const PRIORITY_WEIGHT: Record<Priority, number> = {
  P1: 3,
  P2: 2,
  P3: 1,
};

/**
 * Credit earned per answer, as a share of the checkpoint's weight.
 * "Unsure" is a problem-light: not knowing whether a control is set is itself a
 * finding, but it is not the same as knowing it is broken.
 */
const CREDIT: Record<Exclude<Answer, "na">, number> = {
  ok: 1,
  unsure: 0.5,
  problem: 0,
};

export function allItems(def: AuditDefinition): AuditItem[] {
  return def.groups.flatMap((g) => g.items);
}

export function totalItems(def: AuditDefinition): number {
  return def.groups.reduce((sum, g) => sum + g.items.length, 0);
}

export function countAnswered(def: AuditDefinition, answers: Answers): number {
  return allItems(def).filter((i) => answers[i.id]).length;
}

export function isGroupComplete(
  group: { items: AuditItem[] },
  answers: Answers,
): boolean {
  return group.items.every((i) => Boolean(answers[i.id]));
}

/**
 * Weighted 0-100 over every checkpoint that has an answer other than N/A.
 * Unanswered and N/A checkpoints leave the denominator alone, so a partial run
 * still produces an honest score for what was actually looked at.
 */
function scoreItems(items: AuditItem[], answers: Answers): number | null {
  let earned = 0;
  let max = 0;
  for (const item of items) {
    const answer = answers[item.id];
    if (!answer || answer === "na") continue;
    const weight = PRIORITY_WEIGHT[item.priority];
    max += weight;
    earned += weight * CREDIT[answer];
  }
  if (max === 0) return null;
  return Math.round((earned / max) * 100);
}

export function scoreAudit(def: AuditDefinition, answers: Answers): ScoreResult {
  const groups: GroupScore[] = def.groups.map((group) => {
    const counts = { na: 0, problems: 0, unsure: 0, answered: 0 };
    for (const item of group.items) {
      const answer = answers[item.id];
      if (!answer) continue;
      counts.answered += 1;
      if (answer === "na") counts.na += 1;
      if (answer === "problem") counts.problems += 1;
      if (answer === "unsure") counts.unsure += 1;
    }
    return {
      groupId: group.id,
      title: group.title,
      score: scoreItems(group.items, answers),
      total: group.items.length,
      ...counts,
    };
  });

  const items = allItems(def);
  const findings: Finding[] = [];
  let p1Problems = 0;
  let problems = 0;
  let unsure = 0;
  let na = 0;

  for (const group of def.groups) {
    for (const item of group.items) {
      const answer = answers[item.id];
      if (answer === "na") na += 1;
      if (answer === "problem" || answer === "unsure") {
        findings.push({ item, groupTitle: group.title, answer });
        if (answer === "problem") {
          problems += 1;
          if (item.priority === "P1") p1Problems += 1;
        } else {
          unsure += 1;
        }
      }
    }
  }

  const overall = scoreItems(items, answers);

  return {
    overall: overall ?? 0,
    scorable: overall !== null,
    groups,
    answered: countAnswered(def, answers),
    total: items.length,
    p1Problems,
    problems,
    unsure,
    na,
    findings: findings.sort(compareFindings),
  };
}

/** Worst first: hard problems before unsures, then P1 before P3, then cheapest fix. */
const EFFORT_ORDER: Record<Effort, number> = { low: 0, medium: 1, high: 2 };

function compareFindings(a: Finding, b: Finding): number {
  if (a.answer !== b.answer) return a.answer === "problem" ? -1 : 1;
  const weight =
    PRIORITY_WEIGHT[b.item.priority] - PRIORITY_WEIGHT[a.item.priority];
  if (weight !== 0) return weight;
  const effort = EFFORT_ORDER[a.item.effort] - EFFORT_ORDER[b.item.effort];
  if (effort !== 0) return effort;
  return a.item.n - b.item.n;
}

/**
 * Impact/effort quadrants over the findings only.
 * Impact comes straight from priority: P1 = high, P2/P3 = lower.
 */
export type Quadrant = "quickWin" | "project" | "later" | "backlog";

export function quadrantOf(finding: Finding): Quadrant {
  const highImpact = finding.item.priority === "P1";
  const lowEffort = finding.item.effort === "low";
  if (highImpact && lowEffort) return "quickWin";
  if (highImpact) return "project";
  if (lowEffort) return "later";
  return "backlog";
}

export function groupByQuadrant(findings: Finding[]): Record<Quadrant, Finding[]> {
  const out: Record<Quadrant, Finding[]> = {
    quickWin: [],
    project: [],
    later: [],
    backlog: [],
  };
  for (const f of findings) out[quadrantOf(f)].push(f);
  return out;
}

/** Rank bands. Four tiers; the copy for each lives with the locale strings. */
export type RankKey = "solid" | "leaking" | "half" | "adrift";

export function rankFor(score: number): RankKey {
  if (score >= 85) return "solid";
  if (score >= 70) return "leaking";
  if (score >= 50) return "half";
  return "adrift";
}

/** Below this, the paid audit CTA gets the loud treatment. */
export const PAID_AUDIT_THRESHOLD = 70;
