"use client";

import { useRef } from "react";
import type { AuditCopy } from "@/lib/audit-engine/copy";
import { rankFor } from "@/lib/audit-engine/scoring";
import type { AuditDefinition, ScoreResult } from "@/lib/audit-engine/types";

type DataLayerWindow = Window & { dataLayer?: Array<Record<string, unknown>> };

function pushDataLayer(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

const inputClass =
  "w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors";

/**
 * The only email gate in the tool: the score, the group breakdown and the
 * flagged checkpoints ride along as hidden fields, so the lead arrives already
 * diagnosed instead of as a bare address.
 *
 * Same native formsubmit.co POST + _next redirect as ContactForm and
 * ChecklistDownloadForm. Deliberately does NOT set dj_lead_pending — a tool run
 * is a micro-conversion and must not fire lead_confirmed.
 */
export function AuditReportForm({
  definition,
  copy,
  result,
  eventPrefix,
  report,
  notes,
}: {
  definition: AuditDefinition;
  copy: AuditCopy;
  result: ScoreResult;
  eventPrefix: string;
  report: { formName: string; subject: string; nextUrl: string };
  notes?: string;
}) {
  const startedRef = useRef(false);

  const handleFieldInteraction = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    pushDataLayer("form_start", { form_name: report.formName });
  };

  const handleSubmit = () => {
    pushDataLayer(`${eventPrefix}_report_submit`, {
      form_name: report.formName,
      audit_id: definition.id,
      score: result.scorable ? result.overall : null,
      p1_problems: result.p1Problems,
    });
    try {
      sessionStorage.setItem(`dj_${eventPrefix}_pending`, "1");
    } catch {
      // sessionStorage unavailable (private mode etc.)
    }
  };

  // Each entry is bullet-prefixed as well as newline-joined: formsubmit drops
  // these values into HTML table cells, where a bare newline collapses to a
  // space and turns the list into one unreadable run-on line.
  const groupLines = result.groups
    .map((g) => {
      const label =
        g.score === null
          ? g.answered === 0
            ? copy.results.groupNotChecked
            : "N/A"
          : `${g.score}/100`;
      return `• ${g.title}: ${label}`;
    })
    .join("\n");

  const findingLines = result.findings
    .map(
      (f) =>
        `• #${f.item.n} [${f.item.priority} / ${f.item.effort} / ${copy.answers[f.answer]}] ${f.item.title}`,
    )
    .join("\n");

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-900 shadow-card p-6 md:p-8">
      <h2 className="font-heading font-bold text-xl md:text-2xl text-gray-900 mb-2">
        {copy.gate.title}
      </h2>
      <p className="text-gray-600 text-sm md:text-base mb-6">{copy.gate.lead}</p>

      <form
        action="https://formsubmit.co/info@slobodan-jelisavac.com"
        method="POST"
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_subject" value={report.subject} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={report.nextUrl} />
        <input type="hidden" name="source" value={report.formName} />

        {/* Diagnostic payload — this is what makes the lead worth reading. */}
        <input
          type="hidden"
          name="skor"
          value={result.scorable ? `${result.overall}/100` : "N/A"}
        />
        <input
          type="hidden"
          name="rang"
          value={
            result.scorable
              ? copy.ranks[rankFor(result.overall)].title
              : copy.results.allNa.title
          }
        />
        <input type="hidden" name="p1_problema" value={String(result.p1Problems)} />
        <input type="hidden" name="problema_ukupno" value={String(result.problems)} />
        <input type="hidden" name="ne_znam" value={String(result.unsure)} />
        <input type="hidden" name="na" value={String(result.na)} />
        <input
          type="hidden"
          name="odgovoreno"
          value={`${result.answered}/${result.total}`}
        />
        <input type="hidden" name="skor_po_grupi" value={groupLines} />
        <input type="hidden" name="nalazi" value={findingLines || "-"} />
        <input
          type="hidden"
          name="beleske"
          value={notes && notes.trim() !== "" ? notes.trim() : "-"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="arf-name"
              className="text-sm font-semibold text-gray-900 block mb-1.5"
            >
              {copy.gate.name} *
            </label>
            <input
              id="arf-name"
              type="text"
              name="name"
              placeholder={copy.gate.namePlaceholder}
              required
              onFocus={handleFieldInteraction}
              className={inputClass}
            />
          </div>
          <div>
            <label
              htmlFor="arf-email"
              className="text-sm font-semibold text-gray-900 block mb-1.5"
            >
              {copy.gate.email} *
            </label>
            <input
              id="arf-email"
              type="email"
              name="email"
              placeholder={copy.gate.emailPlaceholder}
              required
              onFocus={handleFieldInteraction}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="arf-site"
            className="text-sm font-semibold text-gray-900 block mb-1.5"
          >
            {copy.gate.site}
          </label>
          <input
            id="arf-site"
            type="text"
            name="sajt"
            placeholder={copy.gate.sitePlaceholder}
            onFocus={handleFieldInteraction}
            className={inputClass}
          />
        </div>

        {/* What the recipient will see, shown to the sender too. */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-semibold mb-2">
            {copy.results.eyebrow}
          </p>
          <p className="text-sm text-gray-700 mb-0 tabular-nums">
            {result.scorable ? `${result.overall} ${copy.results.ofHundred}` : "N/A"}{" "}
            · {result.p1Problems} {copy.results.p1Label} ·{" "}
            {result.problems} {copy.results.problemsLabel} · {result.unsure}{" "}
            {copy.results.unsureLabel}
          </p>
        </div>

        <button
          type="submit"
          className="btn-secondary w-full !py-3.5 text-base font-semibold"
        >
          {copy.gate.submit} →
        </button>

        <p className="text-xs text-gray-400 text-center mb-0">
          {copy.gate.privacy}
        </p>
      </form>
    </div>
  );
}
