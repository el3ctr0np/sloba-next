"use client";

import { useEffect, useState, useCallback } from "react";

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface MobileTOCProps {
  locale: string;
}

export function MobileTOC({ locale }: MobileTOCProps) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Extract headings from DOM
  useEffect(() => {
    const article = document.querySelector("article .prose");
    if (!article) return;

    const headings = Array.from(
      article.querySelectorAll("h2, h3")
    ) as HTMLElement[];

    const extracted: TocItem[] = headings
      .filter((el) => {
        if (el.tagName === "H3") {
          const cardGrid = el.closest("[class*='grid-cols-2']");
          if (cardGrid && article.contains(cardGrid)) return false;
        }
        return true;
      })
      .map((el, index) => {
        if (!el.id) {
          const slug =
            el.textContent
              ?.toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
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

  // Track active section
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
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  // Show/hide FAB based on scroll position (show after hero)
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollTo = useCallback((id: string) => {
    setIsOpen(false);
    // Small delay so drawer closes before scroll
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  }, []);

  if (items.length === 0) return null;

  // Only show H2s in mobile TOC to keep it compact
  const h2Items = items.filter((item) => item.level === 2);
  const activeH2 = h2Items.find((item) => item.id === activeId);
  const activeIndex = activeH2 ? h2Items.indexOf(activeH2) + 1 : 0;

  return (
    <>
      {/* Floating button — mobile only */}
      <button
        onClick={() => setIsOpen(true)}
        className={`
          lg:hidden fixed bottom-6 right-6 z-40
          w-12 h-12 rounded-full
          bg-gray-900 text-white shadow-lg
          flex items-center justify-center
          transition-all duration-300
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
          hover:bg-yellow-400 hover:text-gray-900
          active:scale-95
        `}
        aria-label={locale === "en" ? "Table of contents" : "Sadržaj"}
      >
        {/* List icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
        {/* Progress badge */}
        {activeIndex > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 text-gray-900 text-[10px] font-bold rounded-full flex items-center justify-center">
            {activeIndex}
          </span>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          lg:hidden fixed bottom-0 left-0 right-0 z-50
          bg-white rounded-t-2xl shadow-2xl
          transform transition-transform duration-300 ease-out
          max-h-[70vh] overflow-y-auto
          ${isOpen ? "translate-y-0" : "translate-y-full"}
        `}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 pb-3 border-b border-gray-100">
          <p className="text-sm font-heading font-bold text-gray-900">
            {locale === "en" ? "Table of Contents" : "Sadržaj"}
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-900 p-1"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* TOC items */}
        <nav className="px-5 py-3">
          <ol className="space-y-1">
            {h2Items.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`
                    w-full text-left py-2.5 px-3 rounded-lg text-sm
                    flex items-center gap-3 transition-colors
                    ${activeId === item.id
                      ? "bg-yellow-50 text-gray-900 font-semibold"
                      : "text-gray-600 hover:bg-gray-50"
                    }
                  `}
                >
                  <span className={`
                    flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold
                    flex items-center justify-center
                    ${activeId === item.id
                      ? "bg-yellow-400 text-gray-900"
                      : "bg-gray-100 text-gray-500"
                    }
                  `}>
                    {index + 1}
                  </span>
                  <span className="leading-snug">{item.text}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>

        {/* Safe area padding for phones with home indicator */}
        <div className="h-6" />
      </div>
    </>
  );
}
