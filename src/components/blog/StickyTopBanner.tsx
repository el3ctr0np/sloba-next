"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";

export function StickyTopBanner({ locale }: { locale: string }) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const isEn = locale === "en";

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-slate-900 text-white border-b border-slate-700">
      <div className="container-custom px-4 py-2.5 flex items-center justify-between gap-4 text-sm">
        <p className="hidden sm:block text-slate-300">
          {isEn ? (
            <>
              My clients reduced CPA by <strong className="text-white">30%</strong> on average in 3 months.{" "}
              <span className="text-yellow-400">You should be next.</span>
            </>
          ) : (
            <>
              Moji klijenti su smanjili CPA za <strong className="text-white">30%</strong> u proseku za 3 meseca.{" "}
              <span className="text-yellow-400">Ti si sledeci.</span>
            </>
          )}
        </p>
        <p className="sm:hidden text-slate-300 text-xs">
          {isEn
            ? "Clients reduced CPA by 30%. You're next."
            : "Klijenti smanjili CPA za 30%. Ti si sledeci."}
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/kontakt"
            className="bg-yellow-400 text-slate-900 font-bold text-xs uppercase tracking-wide px-4 py-1.5 rounded-full hover:bg-yellow-300 transition-colors whitespace-nowrap"
          >
            {isEn ? "FREE AUDIT" : "BESPLATAN AUDIT"}
          </Link>
          <button
            onClick={() => setDismissed(true)}
            className="text-slate-400 hover:text-white transition-colors p-1"
            aria-label="Close banner"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
