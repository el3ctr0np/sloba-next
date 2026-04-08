"use client";

import { useEffect, useState } from "react";

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling ~600px (past hero section)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700 p-3 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="#contact-form"
        className="btn-secondary block text-center text-sm"
      >
        Zakažite besplatan razgovor
      </a>
    </div>
  );
}
