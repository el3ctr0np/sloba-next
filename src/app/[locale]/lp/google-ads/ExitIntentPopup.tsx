"use client";

import { useEffect, useState, useCallback } from "react";
import { X, CheckCircle2 } from "lucide-react";

type ExitIntentPopupProps = {
  locale: string;
};

export function ExitIntentPopup({ locale }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      // Trigger when cursor moves to top of viewport (exit intent)
      if (e.clientY <= 5 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    },
    [hasShown]
  );

  useEffect(() => {
    // Check if already dismissed in this session
    if (sessionStorage.getItem("exitPopupDismissed")) {
      setHasShown(true);
      return;
    }

    // Only add listener after 15 seconds on page
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 15000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("exitPopupDismissed", "true");
  };

  if (!isVisible) return null;

  const steps = [
    "Da li imate aktivan conversion tracking?",
    "Da li znate svoj realan CPA / ROAS?",
    "Da li koristite negativne ključne reči?",
    "Da li testirate više varijanti oglasa?",
    "Da li znate koji deo budžeta ne donosi rezultate?",
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-[9998] backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-[90%] max-w-lg">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-slate-900 text-white px-6 py-5 relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              aria-label="Zatvori"
            >
              <X size={20} />
            </button>
            <p className="text-yellow-400 text-xs font-semibold uppercase tracking-wider mb-1">
              Besplatan vodič
            </p>
            <h3 className="text-xl font-heading font-bold pr-8">
              5 pitanja koja otkrivaju koliko novca gubite na Google Ads
            </h3>
          </div>

          {/* Content */}
          <div className="px-6 py-5">
            <p className="text-gray-600 text-sm mb-4">
              Pre nego što odete — proverite da li vaše kampanje prolaze ovaj
              brzi test. Većina naloga pada na barem 2 od 5 pitanja.
            </p>

            <div className="space-y-2.5 mb-5">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-gray-700"
                >
                  <CheckCircle2
                    size={18}
                    strokeWidth={1.5}
                    className="text-yellow-500 flex-shrink-0 mt-0.5"
                  />
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact-form"
              onClick={handleClose}
              className="btn-secondary block text-center w-full"
            >
              Želim besplatnu analizu
            </a>

            <p className="text-xs text-gray-400 text-center mt-3">
              Bez obaveze. Odgovor u roku od 48h.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
