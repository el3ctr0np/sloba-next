/**
 * Audit engine — progress persistence.
 *
 * localStorage only, keyed per audit id. Nothing leaves the browser until the
 * user asks for the report, which is the whole point of the no-gate model.
 */

import type { Answer, Answers, AuditDefinition } from "./types";

type Stored = {
  v: number;
  answers: Answers;
  /** Index of the group the user was last on. */
  group: number;
  savedAt: string;
};

const VALID: Answer[] = ["ok", "problem", "unsure", "na"];

function key(def: AuditDefinition): string {
  return `dj_audit_${def.id}`;
}

export function loadProgress(
  def: AuditDefinition,
): { answers: Answers; group: number } | null {
  if (typeof window === "undefined") return null;
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(key(def));
  } catch {
    return null; // private mode, storage disabled
  }
  if (!raw) return null;

  let parsed: Stored;
  try {
    parsed = JSON.parse(raw) as Stored;
  } catch {
    return null;
  }
  // A version bump means checkpoint ids may have moved; old answers are dropped
  // rather than silently mapped onto the wrong checkpoints.
  if (!parsed || parsed.v !== def.version || typeof parsed.answers !== "object") {
    return null;
  }

  const known = new Set(def.groups.flatMap((g) => g.items.map((i) => i.id)));
  const answers: Answers = {};
  for (const [id, value] of Object.entries(parsed.answers)) {
    if (known.has(id) && VALID.includes(value as Answer)) {
      answers[id] = value as Answer;
    }
  }
  if (Object.keys(answers).length === 0) return null;

  const group =
    Number.isInteger(parsed.group) &&
    parsed.group >= 0 &&
    parsed.group < def.groups.length
      ? parsed.group
      : 0;

  return { answers, group };
}

export function saveProgress(
  def: AuditDefinition,
  answers: Answers,
  group: number,
): void {
  if (typeof window === "undefined") return;
  try {
    const payload: Stored = {
      v: def.version,
      answers,
      group,
      savedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(key(def), JSON.stringify(payload));
  } catch {
    // Storage full or unavailable — the tool still works, it just forgets.
  }
}

export function clearProgress(def: AuditDefinition): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(key(def));
  } catch {
    // ignore
  }
}
