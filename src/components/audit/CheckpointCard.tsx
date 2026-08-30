"use client";

import { Link } from "@/i18n/navigation";
import type { AuditCopy } from "@/lib/audit-engine/copy";
import type { Answer, AuditItem } from "@/lib/audit-engine/types";
import {
  googleDocUrl,
  type Teaching,
} from "@/lib/audit-engine/data/pmax-check-teaching";

const ANSWER_ORDER: Answer[] = ["ok", "problem", "unsure", "na"];

const ANSWER_STYLE: Record<Answer, { on: string; off: string }> = {
  ok: {
    on: "bg-green-600 text-white border-green-600 shadow-md",
    off: "bg-white text-gray-600 border-gray-300 hover:border-green-600 hover:text-green-700",
  },
  problem: {
    on: "bg-red-600 text-white border-red-600 shadow-md",
    off: "bg-white text-gray-600 border-gray-300 hover:border-red-600 hover:text-red-700",
  },
  unsure: {
    on: "bg-accent text-gray-900 border-accent shadow-md",
    off: "bg-white text-gray-600 border-gray-300 hover:border-accent-dark hover:text-gray-900",
  },
  na: {
    on: "bg-gray-900 text-white border-gray-900 shadow-md",
    off: "bg-white text-gray-500 border-gray-300 hover:border-gray-900 hover:text-gray-900",
  },
};

const PRIORITY_STYLE: Record<string, string> = {
  P1: "bg-red-50 text-red-700 border-red-200",
  P2: "bg-amber-50 text-amber-800 border-amber-200",
  P3: "bg-gray-50 text-gray-600 border-gray-200",
};

/**
 * One checkpoint.
 *
 * With a teaching entry it leads with a plain-language question and a concrete
 * good/bad pair, and keeps the technical wording, the red flag and the two
 * links (Google's documentation and our guide) one click away. Without one it
 * falls back to the original technical layout, so the two can coexist while the
 * teaching layer is filled in checkpoint by checkpoint.
 */
export function CheckpointCard({
  item,
  copy,
  teaching,
  current,
  onAnswer,
}: {
  item: AuditItem;
  copy: AuditCopy;
  teaching?: Teaching;
  current?: Answer;
  onAnswer: (value: Answer) => void;
}) {
  const labelId = `${item.id}-label`;

  return (
    <div
      className={`rounded-xl border p-4 md:p-5 transition-colors duration-300 ${
        current ? "border-gray-300 bg-white" : "border-gray-200 bg-gray-50"
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 w-7 h-7 mt-0.5 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
          {item.n}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded border ${PRIORITY_STYLE[item.priority]}`}
              title={copy.priorityLong[item.priority]}
            >
              {copy.priority[item.priority]}
            </span>
            <span className="text-[11px] text-gray-500">
              {copy.effort[item.effort]}
            </span>
          </div>

          {teaching ? (
            <>
              <p
                id={labelId}
                className="font-heading font-semibold text-gray-900 text-base md:text-lg leading-snug mb-3"
              >
                {teaching.question}
              </p>

              {/* The visual: what good and bad actually look like, side by side. */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
                <div className="rounded-lg border border-green-200 bg-green-50 p-3">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-green-700 mb-1">
                    ✓ {copy.wizard.goodExample}
                  </p>
                  <p className="text-sm text-green-900 mb-0">
                    {teaching.exampleGood}
                  </p>
                </div>
                <div className="rounded-lg border border-red-200 bg-red-50 p-3">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-red-700 mb-1">
                    ✗ {copy.wizard.badExample}
                  </p>
                  <p className="text-sm text-red-900 mb-0">
                    {teaching.exampleBad}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-0">
                <span className="font-semibold">{copy.wizard.where}:</span>{" "}
                {item.where}
                {item.note ? `, ${item.note}` : ""}
              </p>
            </>
          ) : (
            <>
              <p id={labelId} className="font-semibold text-gray-900 mb-1.5">
                {item.title}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-semibold">{copy.wizard.where}:</span>{" "}
                {item.where}
                {item.note ? `, ${item.note}` : ""}
              </p>
              <p className="text-sm text-red-600 mb-0">
                <span className="font-semibold">{copy.wizard.redFlag}:</span>{" "}
                {item.redFlag}
              </p>
            </>
          )}
        </div>
      </div>

      <div
        role="radiogroup"
        aria-labelledby={labelId}
        className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4"
      >
        {ANSWER_ORDER.map((value) => {
          const selected = current === value;
          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={selected}
              title={copy.answerHints[value]}
              onClick={() => onAnswer(value)}
              className={`px-3 py-2.5 rounded-lg border-2 text-sm font-semibold transition-all duration-200 ${
                selected ? ANSWER_STYLE[value].on : ANSWER_STYLE[value].off
              }`}
            >
              {copy.answers[value]}
            </button>
          );
        })}
      </div>

      {/* Everything a curious answer wants, without crowding the question. */}
      {teaching && (
        <details className="mt-3 group">
          <summary className="cursor-pointer text-sm font-semibold text-primary hover:text-primary-dark list-none flex items-center gap-1.5">
            <span className="transition-transform duration-200 group-open:rotate-90">
              ▸
            </span>
            {copy.wizard.whyAsking}
          </summary>

          <div className="mt-3 pl-5 space-y-3 border-l-2 border-gray-200">
            <p className="text-sm text-gray-700 mb-0">{teaching.why}</p>

            <p className="text-sm text-red-600 mb-0">
              <span className="font-semibold">{copy.wizard.redFlag}:</span>{" "}
              {item.redFlag}
            </p>

            <p className="text-xs text-gray-500 mb-0">
              <span className="font-semibold">{copy.wizard.technicalName}:</span>{" "}
              {item.title}
            </p>

            <div className="space-y-1.5">
              <p className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-1">
                {copy.wizard.readMore}
              </p>
              {teaching.resources.map((r) =>
                r.kind === "internal" ? (
                  <Link
                    key={r.slug + r.label}
                    href={{ pathname: "/blog/[slug]", params: { slug: r.slug } }}
                    className="block text-sm text-primary hover:text-primary-dark underline"
                  >
                    {r.label} →
                  </Link>
                ) : (
                  <a
                    key={r.kind === "google" ? r.docId : r.url}
                    href={
                      r.kind === "google"
                        ? googleDocUrl(r.docId, r.product)
                        : r.url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-primary hover:text-primary-dark underline"
                  >
                    <span className="text-gray-400 not-italic">
                      {r.kind === "google"
                        ? r.product === "merchants"
                          ? "Merchant Center"
                          : "Google"
                        : r.source}
                      :
                    </span>{" "}
                    {r.label} ↗
                  </a>
                ),
              )}
            </div>
          </div>
        </details>
      )}
    </div>
  );
}
