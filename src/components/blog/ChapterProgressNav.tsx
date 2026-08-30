"use client";

import { useEffect, useRef, useState } from "react";

type NavChapter = {
  id: string;
  number: number;
  title: string;
  level: string;
  levelColor: string;
  count: number;
};

/**
 * Sticky bočna navigacija kroz poglavlja bloga sa scroll-spy ponašanjem.
 *
 * Aktivno poglavlje se određuje ručno iz scroll pozicije, ne preko
 * IntersectionObserver-a: poglavlja su viša od viewporta, pa bi observer
 * naizmenično palio i gasio susedne sekcije. Ovako je aktivno uvek poslednje
 * poglavlje čiji je vrh prošao liniju čitanja (~35% visine ekrana).
 *
 * Na desktopu stoji levo od sadržaja. Na mobilnom se ne renderuje (postoji
 * puni ChapterNav blok na vrhu strane).
 */
export default function ChapterProgressNav({
  chapters,
  locale,
}: {
  chapters: NavChapter[];
  locale: string;
}) {
  const [activeId, setActiveId] = useState<string>(chapters[0]?.id ?? "");
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const compute = () => {
      ticking.current = false;
      const line = window.innerHeight * 0.35;

      let current = chapters[0]?.id ?? "";
      for (const c of chapters) {
        const el = document.getElementById(c.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = c.id;
      }
      setActiveId(current);

      // Napredak kroz sekciju poglavlja (od prvog naslova do kraja poslednjeg)
      const first = document.getElementById(chapters[0]?.id ?? "");
      const last = document.getElementById(chapters[chapters.length - 1]?.id ?? "");
      if (first && last) {
        const start = first.offsetTop;
        const end = last.offsetTop + last.offsetHeight;
        const pos = window.scrollY + line;
        const pct = ((pos - start) / Math.max(1, end - start)) * 100;
        setProgress(Math.min(100, Math.max(0, pct)));
      }
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [chapters]);

  const guidesLabel = (n: number) =>
    locale === "en"
      ? n === 1
        ? "guide"
        : "guides"
      : n === 1
        ? "vodič"
        : "vodiča";

  return (
    <nav
      aria-label={locale === "en" ? "Guide chapters" : "Poglavlja vodiča"}
      className="hidden lg:block sticky top-24 w-64 xl:w-72 flex-shrink-0 self-start"
    >
      <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-semibold mb-4">
        {locale === "en" ? "Guide contents" : "Sadržaj vodiča"}
      </p>

      <div className="relative">
        {/* Linija napretka kroz poglavlja */}
        <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gray-200 rounded-full" />
        <div
          className="absolute left-[15px] top-2 w-0.5 bg-yellow-400 rounded-full transition-[height] duration-200"
          style={{ height: `calc(${progress}% - 8px)` }}
        />

        <ul className="space-y-1 list-none pl-0 m-0">
          {chapters.map((c) => {
            const active = c.id === activeId;
            return (
              <li key={c.id} className="m-0">
                <a
                  href={`#${c.id}`}
                  aria-current={active ? "true" : undefined}
                  className={`relative flex items-start gap-3 py-2 pr-2 rounded-lg no-underline transition-colors ${
                    active ? "bg-gray-50" : "hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      active
                        ? "bg-gray-900 text-white ring-4 ring-yellow-400/30"
                        : "bg-white text-gray-500 border-2 border-gray-200"
                    }`}
                  >
                    {c.number}
                  </span>
                  <span className="min-w-0 pt-0.5">
                    <span
                      className={`block font-heading text-sm leading-snug transition-colors ${
                        active ? "font-bold text-gray-900" : "font-semibold text-gray-600"
                      }`}
                    >
                      {c.title}
                    </span>
                    <span className="block text-xs text-gray-400 mt-0.5">
                      {c.count} {guidesLabel(c.count)}
                      {active && (
                        <span className={`ml-2 px-1.5 py-0.5 rounded ${c.levelColor}`}>
                          {c.level}
                        </span>
                      )}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
