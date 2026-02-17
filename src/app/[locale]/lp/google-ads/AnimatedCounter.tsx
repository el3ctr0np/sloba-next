"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: string; // e.g. "180%+", "-35%", "50+"
  className?: string;
};

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);

  // Parse the numeric part and prefix/suffix
  const match = value.match(/^([+-]?)(\d+)(.*)/);
  const prefix = match?.[1] || "";
  const target = parseInt(match?.[2] || "0", 10);
  const suffix = match?.[3] || "";

  useEffect(() => {
    if (hasAnimated || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          animateValue(0, target, 1500);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasAnimated, target]);

  const animateValue = (start: number, end: number, duration: number) => {
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * eased);

      setDisplayValue(String(current));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
