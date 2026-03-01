"use client";

import { useEffect, useRef, useState } from "react";

interface CounterAnimationProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // ms
  decimals?: number;
  className?: string;
}

export function CounterAnimation({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  decimals = 0,
  className = "",
}: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.round(count);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
