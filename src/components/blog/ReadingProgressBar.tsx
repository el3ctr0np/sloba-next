"use client";

import { useEffect, useState } from "react";

export function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const handleScroll = () => {
      const articleRect = article.getBoundingClientRect();
      const articleTop = articleRect.top + window.scrollY;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate progress based on article position
      const start = articleTop;
      const end = articleTop + articleHeight - windowHeight;
      const current = scrollY - start;
      const total = end - start;

      if (total <= 0) {
        setProgress(0);
        return;
      }

      const pct = Math.min(Math.max((current / total) * 100, 0), 100);
      setProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[3px] z-50 bg-transparent pointer-events-none"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-yellow-400 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
