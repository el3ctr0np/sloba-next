"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated count-up number. Same easing and reduced-motion handling as the
 * budget calculator; lives here so the audit engine has no dependency on it.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 900,
  locale = "sr-RS",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  locale?: string;
}) {
  const [display, setDisplay] = useState(0);
  const prev = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      prev.current = value;
      // Scheduled rather than set synchronously: a setState in the effect body
      // triggers a cascading render (react-hooks/set-state-in-effect).
      const id = setTimeout(() => setDisplay(value), 0);
      return () => clearTimeout(id);
    }
    const from = prev.current;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(from + (value - from) * eased);
      if (t < 1) raf.current = requestAnimationFrame(tick);
      else prev.current = value;
    };
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(tick);
    // rAF is paused while the tab is hidden, which would leave the number stuck
    // at its starting value. This lands it on the final figure regardless; when
    // the tween ran normally it is a no-op.
    const settle = setTimeout(() => {
      if (prev.current !== value) {
        prev.current = value;
        setDisplay(value);
      }
    }, duration + 400);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      clearTimeout(settle);
    };
  }, [value, duration]);

  const formatted = display.toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
