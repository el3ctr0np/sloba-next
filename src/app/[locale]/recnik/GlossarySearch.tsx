"use client";

import { useState, useMemo, useEffect } from "react";
import { glossaryTerms, type GlossaryTerm } from "./glossary-data";

type Props = {
  locale: "sr" | "en";
};

/**
 * Client-side search for the glossary page.
 * - Filters terms by term name, aliases, or short definition
 * - Locale-aware (searches SR or EN definitions based on locale)
 * - Shows filtered list with direct anchor links
 */
export function GlossarySearch({ locale }: Props) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filtered = useMemo<GlossaryTerm[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return glossaryTerms.filter((t) => {
      const haystack = [
        t.term.toLowerCase(),
        t.termSr?.toLowerCase() ?? "",
        ...(t.aliases ?? []).map((a) => a.toLowerCase()),
        locale === "sr"
          ? t.shortDefinitionSr.toLowerCase()
          : t.shortDefinitionEn.toLowerCase(),
      ].join(" ");
      return haystack.includes(q);
    });
  }, [query, locale]);

  // Close results on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setQuery("");
        (document.activeElement as HTMLElement | null)?.blur();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const placeholder =
    locale === "sr"
      ? `Pretraži ${glossaryTerms.length} termina (CTR, ROAS, POAS...)`
      : `Search ${glossaryTerms.length} terms (CTR, ROAS, POAS...)`;

  const noResultsText =
    locale === "sr"
      ? "Nema rezultata. Pokušajte drugi termin."
      : "No results. Try a different term.";

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder={placeholder}
          className="w-full px-5 py-4 pl-12 text-base border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-card bg-white"
          aria-label={locale === "sr" ? "Pretraži rečnik" : "Search glossary"}
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900"
            aria-label={locale === "sr" ? "Obriši" : "Clear"}
          >
            ✖
          </button>
        )}
      </div>

      {/* Results dropdown */}
      {query && isFocused && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-20 max-h-[400px] overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="p-4 text-sm text-gray-500 text-center">
              {noResultsText}
            </div>
          ) : (
            <ul className="py-2">
              {filtered.slice(0, 10).map((t) => (
                <li key={t.slug}>
                  <a
                    href={`#${t.slug}`}
                    onClick={() => setQuery("")}
                    className="block px-5 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-heading font-bold text-slate-900">
                        {t.term}
                      </span>
                      {t.aliases && t.aliases[0] && (
                        <span className="text-xs text-gray-500">
                          {t.aliases[0]}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                      {locale === "sr"
                        ? t.shortDefinitionSr
                        : t.shortDefinitionEn}
                    </p>
                  </a>
                </li>
              ))}
              {filtered.length > 10 && (
                <li className="px-5 py-2 text-xs text-gray-500 text-center">
                  {locale === "sr"
                    ? `+${filtered.length - 10} više rezultata`
                    : `+${filtered.length - 10} more results`}
                </li>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
