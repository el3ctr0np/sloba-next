"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right";
  delay?: number; // ms
  threshold?: number;
}

export function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.15,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const baseStyles: Record<string, { initial: string; visible: string }> = {
    "fade-up": {
      initial: "opacity-0 translate-y-8",
      visible: "opacity-100 translate-y-0",
    },
    "fade-in": {
      initial: "opacity-0",
      visible: "opacity-100",
    },
    "slide-left": {
      initial: "opacity-0 -translate-x-8",
      visible: "opacity-100 translate-x-0",
    },
    "slide-right": {
      initial: "opacity-0 translate-x-8",
      visible: "opacity-100 translate-x-0",
    },
  };

  const style = baseStyles[animation] || baseStyles["fade-up"];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? style.visible : style.initial
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
