/**
 * Audit engine — shared types.
 *
 * Built for the PMax Check (38 checkpoints) but deliberately generic: the same
 * wizard, scoring and report gate drive the 105-point general audit checklist.
 * A new audit is a new AuditDefinition plus a copy strings object, nothing else.
 */

/** Weighting bucket. P1 costs money now, P3 is hygiene. */
export type Priority = "P1" | "P2" | "P3";

/** How much work fixing this checkpoint is, for the impact/effort matrix. */
export type Effort = "low" | "medium" | "high";

/** What the user can answer for one checkpoint. */
export type Answer = "ok" | "problem" | "unsure" | "na";

export type AuditItem = {
  /** Stable id — used as the localStorage key, so it must not change between versions. */
  id: string;
  /** Checkpoint number as printed in the source guide. */
  n: number;
  priority: Priority;
  effort: Effort;
  title: string;
  /** Where in the interface to look. */
  where: string;
  /** Optional extra context appended to `where` in the source guide. */
  note?: string;
  /** What a bad answer looks like. */
  redFlag: string;
};

export type AuditGroup = {
  id: string;
  title: string;
  items: AuditItem[];
};

export type AuditDefinition = {
  id: string;
  /** Bump when checkpoint ids change — stored progress from older versions is dropped. */
  version: number;
  groups: AuditGroup[];
};

/** Answers keyed by AuditItem.id. */
export type Answers = Record<string, Answer>;

export type GroupScore = {
  groupId: string;
  title: string;
  /** 0-100, or null when every checkpoint in the group was marked N/A. */
  score: number | null;
  answered: number;
  total: number;
  /** Checkpoints marked N/A — excluded from the score entirely. */
  na: number;
  problems: number;
  unsure: number;
};

export type ScoreResult = {
  /** 0-100 weighted across every non-N/A checkpoint. */
  overall: number;
  /** False when nothing is left to score (every answered checkpoint is N/A). */
  scorable: boolean;
  groups: GroupScore[];
  answered: number;
  total: number;
  /** P1 checkpoints answered "problem" — the headline number in the lead email. */
  p1Problems: number;
  problems: number;
  unsure: number;
  na: number;
  /** Everything answered "problem" or "unsure", ranked worst-first. */
  findings: Finding[];
};

export type Finding = {
  item: AuditItem;
  /** Group id, which doubles as the anchor of that section in the source guide. */
  groupId: string;
  groupTitle: string;
  answer: Extract<Answer, "problem" | "unsure">;
};
