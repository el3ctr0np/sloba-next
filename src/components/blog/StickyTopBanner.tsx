"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";

export function StickyTopBanner({ locale }: { locale: string }) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const isEn = locale === "en";

  return (
    <>
      {/* Glow animation */}
      <style jsx global>{`
        @keyframes banner-glow {
          0%, 100% { box-shadow: 0 2px 12px rgba(250, 204, 21, 0.15); }
          50% { box-shadow: 0 2px 20px rgba(250, 204, 21, 0.3); }
        }
        .banner-glow { animation: banner-glow 3s ease-in-out infinite; }
        @keyframes banner-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        .banner-accent { animation: banner-pulse 3s ease-in-out infinite; }
      `}</style>

      <div className="banner-glow fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Subtle accent line */}
        <div className="banner-accent absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between gap-3 text-[13px]">
          {/* Text — single line on all screens */}
          <p className="text-slate-300 truncate min-w-0">
            {isEn ? (
              <>
                CPA reduced by <strong className="text-white">30%</strong> on average.{" "}
                <span className="text-yellow-400 font-medium">You should be next.</span>
              </>
            ) : (
              <>
                CPA smanjen za <strong className="text-white">30%</strong> u proseku.{" "}
                <span className="text-yellow-400 font-medium">Ti si sledeci.</span>
              </>
            )}
          </p>

          {/* CTA + close */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/kontakt"
              className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold text-[11px] uppercase tracking-wider px-4 py-1 rounded-full transition-all hover:scale-105 whitespace-nowrap"
            >
              {isEn ? "FREE AUDIT" : "BESPLATAN AUDIT"}
            </Link>
            <button
              onClick={() => setDismissed(true)}
              className="text-slate-500 hover:text-white transition-colors p-0.5 rounded-full hover:bg-slate-700"
              aria-label="Close"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
