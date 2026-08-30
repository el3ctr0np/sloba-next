"use client";

import { useEffect, useRef, useState } from "react";
import type { AuditCopy } from "@/lib/audit-engine/copy";

/**
 * Free-text notes kept beside the checklist.
 *
 * Somebody working through 38 checkpoints notices things the four answers
 * cannot hold ("group 3 is the broken one, not all of them"). Those notes are
 * the most valuable thing they produce, so they persist with the answers and
 * ride along into the final report.
 *
 * Sticky on desktop, a collapsible drawer on mobile.
 */
export function NotesPanel({
  copy,
  value,
  onChange,
}: {
  copy: AuditCopy;
  value: string;
  onChange: (next: string) => void;
}) {
  const [savedFlash, setSavedFlash] = useState(false);
  const [openOnMobile, setOpenOnMobile] = useState(false);
  const areaRef = useRef<HTMLTextAreaElement>(null);
  const firstRender = useRef(true);

  // "Saved" confirmation, debounced so it does not blink on every keystroke.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (!value) return;
    const id = setTimeout(() => {
      setSavedFlash(true);
      setTimeout(() => setSavedFlash(false), 1400);
    }, 600);
    return () => clearTimeout(id);
  }, [value]);

  const body = (
    <>
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <p className="font-heading font-bold text-gray-900 mb-0">
          {copy.wizard.notesTitle}
        </p>
        <span
          className={`text-xs text-green-600 transition-opacity duration-300 ${
            savedFlash ? "opacity-100" : "opacity-0"
          }`}
        >
          ✓ {copy.wizard.notesSaved}
        </span>
      </div>
      <p className="text-xs text-gray-500 mb-3">{copy.wizard.notesHint}</p>
      <textarea
        ref={areaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={copy.wizard.notesPlaceholder}
        aria-label={copy.wizard.notesTitle}
        className="w-full h-48 lg:h-[26rem] px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm leading-relaxed placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-y"
      />
    </>
  );

  return (
    <>
      {/* Desktop: sticky beside the checkpoints. */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 bg-white rounded-2xl border-2 border-gray-900 shadow-card p-5">
          {body}
        </div>
      </aside>

      {/* Mobile: a drawer, so it never competes with the questions for space. */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setOpenOnMobile((v) => !v)}
          aria-expanded={openOnMobile}
          className="w-full px-5 py-3 rounded-xl font-semibold text-sm border-2 border-gray-900 text-gray-900 bg-white flex items-center justify-between"
        >
          <span>
            {openOnMobile ? copy.wizard.notesClose : copy.wizard.notesOpen}
            {!openOnMobile && value.trim() !== "" && (
              <span className="ml-2 inline-block w-2 h-2 rounded-full bg-accent align-middle" />
            )}
          </span>
          <span
            className={`transition-transform duration-200 ${openOnMobile ? "rotate-180" : ""}`}
          >
            ▾
          </span>
        </button>
        {openOnMobile && (
          <div className="mt-3 bg-white rounded-2xl border-2 border-gray-900 shadow-card p-5">
            {body}
          </div>
        )}
      </div>
    </>
  );
}
