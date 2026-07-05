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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center gap-4">
        <p className="text-sm text-gray-600 flex-1 text-center md:text-left">
          {t("message")}{" "}
          <Link
            href="/privatnost"
            className="underline text-gray-800 hover:text-gray-900"
          >
            {t("linkLabel")}
          </Link>
          .
        </p>
        <div className="flex items-center gap-4 shrink-0">
          <button
            type="button"
            onClick={handleEssentialOnly}
            className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
          >
            {t("essentialOnly")}
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="text-sm font-semibold bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
