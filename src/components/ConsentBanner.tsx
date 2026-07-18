"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const CONSENT_KEY = "dj_consent";

type ConsentValue = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | IArguments>;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args as unknown as Record<string, unknown>);
}

function setConsent(value: ConsentValue) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // localStorage unavailable (private mode, etc.) — banner still works for this session
  }

  // analytics_storage je granted po default-u (vidi layout.tsx) — banner
  // upravlja samo marketing (ads) kolačićima.
  if (value === "granted") {
    gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "consent_granted" });
    }
  }
}

export function ConsentBanner() {
  const t = useTranslations("ConsentBanner");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const existing = localStorage.getItem(CONSENT_KEY);
      if (!existing) {
        setVisible(true);
      }
    } catch {
      // If localStorage isn't accessible, err on the side of not nagging the user
      setVisible(false);
    }
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    setConsent("granted");
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    setConsent("denied");
    setVisible(false);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-50">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-5">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl leading-none select-none" aria-hidden="true">
            🍪
          </span>
          <p className="text-sm text-gray-600 mb-0 leading-relaxed">
            {t("message")}{" "}
            <Link
              href="/privatnost"
              className="underline text-gray-800 hover:text-gray-900"
            >
              {t("linkLabel")}
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleAccept}
            className="flex-1 text-sm font-semibold bg-slate-900 text-white px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            {t("accept")}
          </button>
          <button
            type="button"
            onClick={handleEssentialOnly}
            className="flex-1 text-sm font-medium text-gray-600 border border-gray-300 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {t("essentialOnly")}
          </button>
        </div>
      </div>
    </div>
  );
}
