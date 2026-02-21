"use client";

import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  locale: string;
}

export function TableOfContents({ locale }: TableOfContentsProps) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // Extract headings from DOM after mount
  useEffect(() => {
    const article = document.querySelector("article .prose");
    if (!article) return;

    const headings = Array.from(
      article.querySelectorAll("h2, h3")
    ) as HTMLElement[];

    const extracted: TocItem[] = headings
      .filter((el) => {
        // Skip h3s inside card grids (e.g., CPC/CPM model cards with grid-cols-2)
        // Only filter h3s — h2s are always section headings
        if (el.tagName === "H3") {
          const cardGrid = el.closest("[class*='grid-cols-2']");
          if (cardGrid && article.contains(cardGrid)) return false;
        }
        return true;
      })
      .map((el, index) => {
        // Auto-assign IDs if not present
        if (!el.id) {
          const slug =
            el.textContent
              ?.toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") // remove diacritics
              .replace(/[^a-z0-9\s-]/g, "")
              .replace(/\s+/g, "-")
              .replace(/-+/g, "-")
              .trim() ?? `heading-${index}`;
          el.id = slug;
        }
        return {
          id: el.id,
          text: el.textContent ?? "",
          level: el.tagName === "H2" ? 2 : 3,
        };
      });

    setItems(extracted);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (intersecting.length > 0) {
          setActiveId(intersecting[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  const label = locale === "en" ? "Table of Contents" : "Sadržaj";

  return (
    <nav aria-label={label} className="mb-4">
      <div className="bg-white border-2 border-gray-900 rounded-xl p-5 shadow-card">
        <p className="text-xs uppercase tracking-wide text-gray-500 mb-3 font-semibold">
          {label}
        </p>
        <ol className="space-y-0.5">
          {items.map((item) => (
            <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
              <a
                href={`#${item.id}`}
                className={`
                  block py-0.5 transition-colors leading-snug
                  ${item.level === 3 ? "text-xs text-gray-500" : "text-sm"}
                  ${
                    activeId === item.id
                      ? "text-primary font-semibold"
                      : "text-gray-700 hover:text-primary"
                  }
                `}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
