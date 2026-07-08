"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { CheckCircle, ChevronDown, Info } from "lucide-react";

// --- GTM dataLayer helper -------------------------------------------------
// Same mechanic as ProfitLeakCheck.tsx: form_view / form_start / result_view /
// lead_submit — only the form_name differs.
const FORM_NAME = "profit_leak_calculator";

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

function pushDataLayer(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

// --- Calculator math ------------------------------------------------------
// Fully deterministic, transparent, and calibrated to the 20–42% waste band we
// consistently see on takeover audits. Each lever maps to one documented input,
// so the result is traceable — no black box. Weights are IDENTICAL across
// locales; only currency and copy change.
const WEIGHTS = {
  base: 7, // structural: search-term overlap, bid inefficiency, mismatch — present in almost every self-managed account
  trackingUnverified: 11, // optimizing to signals nobody has independently checked
  crmNotFedBack: 6, // bidding to raw leads/clicks, not to who actually bought
  pmaxNoVisibilityFactor: 0.15, // × (% of budget in PMax with no visibility where it goes)
  minWaste: 6,
  maxWaste: 42,
  recoveryRate: 0.6, // realistically reclaimable share of identified waste (conservative)
};

type Inputs = {
  spend: number; // monthly ad spend
  pmaxShare: number; // 0–100, % of budget in PMax with no visibility
  trackingVerified: boolean;
  crmFedBack: boolean;
  roas: number | null; // optional
};

function computeWaste(inputs: Inputs) {
  const pmaxContribution = inputs.pmaxShare * WEIGHTS.pmaxNoVisibilityFactor;
  const rawRate =
    WEIGHTS.base +
    (inputs.trackingVerified ? 0 : WEIGHTS.trackingUnverified) +
    (inputs.crmFedBack ? 0 : WEIGHTS.crmNotFedBack) +
    pmaxContribution;

  const wasteRate = Math.max(WEIGHTS.minWaste, Math.min(WEIGHTS.maxWaste, rawRate));

  const monthlyWaste = Math.round((inputs.spend * wasteRate) / 100);
  const annualWaste = monthlyWaste * 12;
  const recoverableMonthly = Math.round(monthlyWaste * WEIGHTS.recoveryRate);
  const recoverableAnnual = recoverableMonthly * 12;

  // Optional: reallocating the recoverable budget at the account's stated ROAS.
  // Framed strictly as a reallocation estimate — not a promise of income.
  const recoveredRevenueMonthly =
    inputs.roas && inputs.roas > 0 ? Math.round(recoverableMonthly * inputs.roas) : null;

  return {
    wasteRate: Math.round(wasteRate * 10) / 10,
    pmaxContribution: Math.round(pmaxContribution * 10) / 10,
    monthlyWaste,
    annualWaste,
    recoverableMonthly,
    recoverableAnnual,
    recoveredRevenueMonthly,
  };
}

function getContent(locale: string) {
  const isEn = locale === "en";
  const currency = isEn ? "$" : "€";
  const localeCode = isEn ? "en-US" : "sr-RS";

  return {
    isEn,
    currency,
    localeCode,

    spendLabel: isEn ? "Monthly Google Ads spend" : "Mesečni Google Ads budžet",
    spendHint: isEn ? "Media spend only, excluding fees." : "Samo medijski trošak, bez honorara.",
    spendPlaceholder: isEn ? "e.g. 10000" : "npr. 5000",

    pmaxLabel: isEn
      ? "Share of budget in Performance Max with no visibility into where it goes"
      : "Deo budžeta u Performance Max-u bez uvida gde se troši",
    pmaxHint: isEn
      ? "PMax hides channel and search-term data by default. The more budget runs blind, the more leaks unseen."
      : "PMax po defaultu krije kanale i pojmove pretrage. Što više budžeta ide „na slepo“, to više curi neprimećeno.",

    trackingLabel: isEn
      ? "Is your conversion tracking independently verified?"
      : "Da li je conversion tracking nezavisno verifikovan?",
    trackingHint: isEn
      ? "Not \"it shows conversions\" — verified by someone who didn't set it up."
      : "Ne „prikazuje konverzije“ — proverio neko ko ga nije ni podesio.",

    crmLabel: isEn
      ? "Do real sales outcomes (from your CRM) flow back into Google Ads?"
      : "Da li se stvarni prodajni ishodi (iz CRM-a) vraćaju u Google Ads?",
    crmHint: isEn
      ? "So bidding optimizes toward buyers, not just form-fills."
      : "Da bi bidding optimizovao ka kupcima, a ne samo ka poslatim formama.",

    yes: isEn ? "Yes" : "Da",
    no: isEn ? "No" : "Ne",

    advancedToggle: isEn ? "Add current ROAS (optional)" : "Dodaj trenutni ROAS (opciono)",
    roasLabel: isEn ? "Current ROAS" : "Trenutni ROAS",
    roasHint: isEn
      ? "Revenue ÷ ad spend. Lets us estimate the revenue that recovered budget could produce."
      : "Prihod ÷ ad spend. Omogućava procenu prihoda koji povraćeni budžet može da donese.",
    roasPlaceholder: isEn ? "e.g. 4" : "npr. 4",

    // Result panel
    resultEyebrow: isEn ? "Estimated leaking budget" : "Procenjeni budžet koji curi",
    perMonth: isEn ? "/mo" : "/mes",
    perYear: isEn ? "/yr" : "/god",
    annualPrefix: isEn ? "That's" : "To je",
    annualSuffix: isEn ? "a year going nowhere." : "godišnje koji ne donose ništa.",
    ofSpend: isEn ? "of your spend" : "vašeg budžeta",

    recoverableHeading: isEn ? "Realistically recoverable" : "Realno povratno",
    recoverableSub: isEn
      ? "A conservative ~60% of the identified leak — what a proper cleanup typically reclaims."
      : "Konzervativnih ~60% identifikovanog curenja — koliko se sređivanjem obično povrati.",
    revenuePrefix: isEn
      ? "Reallocated at your stated ROAS, that budget is worth roughly"
      : "Preusmereno pri vašem ROAS-u, taj budžet vredi otprilike",
    revenueSuffix: isEn ? "in revenue — with measurement fixed first." : "u prometu — uz prethodno sređeno merenje.",

    enterToSee: isEn
      ? "Enter your monthly spend above to see the estimate."
      : "Unesite mesečni budžet iznad da vidite procenu.",

    // Transparency
    howHeading: isEn ? "How this is calculated" : "Kako se ovo računa",
    howBase: isEn ? "Structural baseline" : "Strukturna osnova",
    howTracking: isEn ? "Tracking not independently verified" : "Tracking nije nezavisno verifikovan",
    howCrm: isEn ? "Sales outcomes not fed back" : "Prodajni ishodi se ne vraćaju",
    howPmax: isEn ? "PMax budget running blind" : "PMax budžet „na slepo“",
    howTotal: isEn ? "Estimated leak rate" : "Procenjena stopa curenja",
    howNote: isEn
      ? "Pattern-based estimate from takeover audits (typical waste 20–42%), not a diagnosis. The exact leak points show only after a direct look at the account."
      : "Procena na osnovu obrazaca iz takeover audita (tipično curenje 20–42%), ne dijagnoza. Tačne tačke curenja vide se tek direktnim uvidom u nalog.",

    // Lead form
    formHeading: isEn ? "Get the detailed breakdown by email" : "Dobijte detaljan pregled na email",
    formSub: isEn
      ? "I'll map these numbers to the specific leak points most likely in your account and send a short, concrete breakdown — within 24 hours."
      : "Mapiram ove brojke na konkretne tačke curenja najverovatnije u vašem nalogu i šaljem kratak, konkretan pregled — u roku od 24h.",
    nameLabel: isEn ? "Your Name *" : "Vaše ime *",
    namePlaceholder: isEn ? "John Smith" : "Petar Petrović",
    emailLabel: isEn ? "Email *" : "Email *",
    emailPlaceholder: "email@example.com",
    websiteLabel: isEn ? "Website (optional)" : "Website (opciono)",
    websitePlaceholder: "www.example.com",
    submit: isEn ? "Send me the detailed breakdown" : "Pošaljite mi detaljan pregled",
    submitting: isEn ? "Sending..." : "Šaljem...",
    privacyNote: isEn
      ? "No spam. Just an honest, specific breakdown within 24 hours."
      : "Bez spama. Samo iskren, konkretan pregled u roku od 24h.",

    successTitle: isEn ? "Thank you." : "Hvala.",
    successBody: isEn
      ? "Your detailed breakdown of where the budget most likely leaks arrives by email within 24 hours."
      : "Detaljan pregled tačaka gde budžet najverovatnije curi stiže na email u roku od 24h.",
    secondaryCta: isEn ? "Or book a 20-min call now →" : "Ili zakažite 20-min razgovor odmah →",
  };
}

function fmt(n: number, localeCode: string): string {
  // Locale-correct grouping (sr-RS uses ".", en-US uses ",").
  return n.toLocaleString(localeCode);
}

export function ProfitLeakCalculator({ locale }: { locale: string }) {
  const t = getContent(locale);

  const [spendInput, setSpendInput] = useState("");
  const [pmaxShare, setPmaxShare] = useState(30);
  const [trackingVerified, setTrackingVerified] = useState(false);
  const [crmFedBack, setCrmFedBack] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [roasInput, setRoasInput] = useState("");
  const [showHow, setShowHow] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formStartedRef = useRef(false);
  const viewedRef = useRef(false);
  const resultViewedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const spend = Math.max(0, parseFloat(spendInput.replace(/[^\d.]/g, "")) || 0);
  const roas = roasInput ? Math.max(0, parseFloat(roasInput.replace(/[^\d.]/g, "")) || 0) : null;
  const hasResult = spend > 0;

  const result = useMemo(
    () =>
      computeWaste({
        spend,
        pmaxShare,
        trackingVerified,
        crmFedBack,
        roas: showAdvanced ? roas : null,
      }),
    [spend, pmaxShare, trackingVerified, crmFedBack, roas, showAdvanced],
  );

  // form_view once when the calculator scrolls into view
  useEffect(() => {
    if (viewedRef.current) return;
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !viewedRef.current) {
          pushDataLayer("form_view", { form_name: FORM_NAME });
          viewedRef.current = true;
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // result_view once when a meaningful estimate first appears
  useEffect(() => {
    if (hasResult && !resultViewedRef.current) {
      resultViewedRef.current = true;
      pushDataLayer("result_view", {
        form_name: FORM_NAME,
        waste_pct: result.wasteRate,
        monthly_waste: result.monthlyWaste,
      });
    }
  }, [hasResult, result.wasteRate, result.monthlyWaste]);

  const markStarted = () => {
    if (!formStartedRef.current) {
      pushDataLayer("form_start", { form_name: FORM_NAME });
      formStartedRef.current = true;
    }
  };

  const canSubmit = name && email;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@slobodan-jelisavac.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Ime: name,
          Email: email,
          Sajt: website || "—",
          "Mesečni ad spend": `${t.currency}${fmt(spend, t.localeCode)}`,
          "PMax bez uvida (%)": `${pmaxShare}%`,
          "Tracking verifikovan": trackingVerified ? t.yes : t.no,
          "CRM feedback": crmFedBack ? t.yes : t.no,
          ROAS: roas ? String(roas) : "—",
          "Procenjena stopa curenja": `${result.wasteRate}%`,
          "Curenje mesečno": `${t.currency}${fmt(result.monthlyWaste, t.localeCode)}`,
          "Curenje godišnje": `${t.currency}${fmt(result.annualWaste, t.localeCode)}`,
          "Povratno mesečno": `${t.currency}${fmt(result.recoverableMonthly, t.localeCode)}`,
          _subject: `Profit-Leak Calculator — ${t.currency}${fmt(result.monthlyWaste, t.localeCode)}/mo — ${website || name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        pushDataLayer("lead_submit", {
          form_name: FORM_NAME,
          waste_pct: result.wasteRate,
          monthly_waste: result.monthlyWaste,
          ad_spend: spend,
        });
        try {
          sessionStorage.setItem("dj_lead_form", "profit_leak_calculator");
          sessionStorage.setItem("dj_lead_waste", String(result.monthlyWaste));
        } catch {
          // Ignore sessionStorage errors (private mode etc.)
        }
        setIsSubmitted(true);
      }
    } catch {
      // Handle error silently — user can retry
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors";

  const toggleBtn = (active: boolean, on: boolean) =>
    `flex-1 py-2.5 px-4 rounded-lg border-2 text-sm font-semibold transition-all ${
      active
        ? on
          ? "border-secondary bg-secondary/10 text-gray-900"
          : "border-accent bg-accent/10 text-gray-900"
        : "border-gray-200 text-gray-500 hover:border-gray-300"
    }`;

  return (
    <div
      id="profit-leak-calculator"
      ref={containerRef}
      className="bg-white text-gray-900 rounded-xl p-6 md:p-10 shadow-card border border-gray-200"
    >
      <div className="grid gap-6">
        {/* Spend */}
        <div>
          <label htmlFor="calc-spend" className="block text-base font-heading font-semibold mb-1">
            {t.spendLabel}
          </label>
          <p className="text-xs text-gray-500 mb-2">{t.spendHint}</p>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
              {t.currency}
            </span>
            <input
              id="calc-spend"
              type="text"
              inputMode="numeric"
              value={spendInput}
              onChange={(e) => {
                markStarted();
                setSpendInput(e.target.value);
              }}
              className={`${inputClass} pl-8`}
              placeholder={t.spendPlaceholder}
            />
          </div>
        </div>

        {/* PMax slider */}
        <div>
          <div className="flex items-baseline justify-between mb-1">
            <label htmlFor="calc-pmax" className="block text-base font-heading font-semibold pr-3">
              {t.pmaxLabel}
            </label>
            <span className="text-lg font-heading font-bold text-primary tabular-nums">
              {pmaxShare}%
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-3">{t.pmaxHint}</p>
          <input
            id="calc-pmax"
            type="range"
            min={0}
            max={100}
            step={5}
            value={pmaxShare}
            onChange={(e) => {
              markStarted();
              setPmaxShare(parseInt(e.target.value, 10));
            }}
            className="w-full accent-primary cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-gray-400 mt-1">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Tracking toggle */}
        <div>
          <label className="block text-base font-heading font-semibold mb-1">{t.trackingLabel}</label>
          <p className="text-xs text-gray-500 mb-2">{t.trackingHint}</p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => {
                markStarted();
                setTrackingVerified(true);
              }}
              className={toggleBtn(trackingVerified, true)}
            >
              {t.yes}
            </button>
            <button
              type="button"
              onClick={() => {
                markStarted();
                setTrackingVerified(false);
              }}
              className={toggleBtn(!trackingVerified, false)}
            >
              {t.no}
            </button>
          </div>
        </div>

        {/* CRM toggle */}
        <div>
          <label className="block text-base font-heading font-semibold mb-1">{t.crmLabel}</label>
          <p className="text-xs text-gray-500 mb-2">{t.crmHint}</p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => {
                markStarted();
                setCrmFedBack(true);
              }}
              className={toggleBtn(crmFedBack, true)}
            >
              {t.yes}
            </button>
            <button
              type="button"
              onClick={() => {
                markStarted();
                setCrmFedBack(false);
              }}
              className={toggleBtn(!crmFedBack, false)}
            >
              {t.no}
            </button>
          </div>
        </div>

        {/* Advanced: ROAS */}
        <div>
          <button
            type="button"
            onClick={() => setShowAdvanced((s) => !s)}
            className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline"
          >
            <ChevronDown
              size={16}
              strokeWidth={2}
              className={`transition-transform ${showAdvanced ? "rotate-180" : ""}`}
            />
            {t.advancedToggle}
          </button>
          {showAdvanced && (
            <div className="mt-3">
              <label htmlFor="calc-roas" className="block text-sm font-medium text-gray-700 mb-1">
                {t.roasLabel}
              </label>
              <p className="text-xs text-gray-500 mb-2">{t.roasHint}</p>
              <input
                id="calc-roas"
                type="text"
                inputMode="decimal"
                value={roasInput}
                onChange={(e) => {
                  markStarted();
                  setRoasInput(e.target.value);
                }}
                className={`${inputClass} max-w-[160px]`}
                placeholder={t.roasPlaceholder}
              />
            </div>
          )}
        </div>
      </div>

      {/* Result panel */}
      <div className="mt-8 text-center bg-slate-900 text-white rounded-xl p-6 md:p-10">
        <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
          {t.resultEyebrow}
        </p>
        {hasResult ? (
          <>
            <p className="text-5xl md:text-6xl font-heading font-bold mb-1 tabular-nums">
              &asymp; {t.currency}
              {fmt(result.monthlyWaste, t.localeCode)}
              <span className="text-2xl md:text-3xl text-slate-400 font-semibold">{t.perMonth}</span>
            </p>
            <p className="text-slate-300 mb-5">
              &asymp; {result.wasteRate}% {t.ofSpend}
            </p>
            <p className="text-lg md:text-xl font-semibold text-accent mb-6">
              {t.annualPrefix} {t.currency}
              {fmt(result.annualWaste, t.localeCode)} {t.annualSuffix}
            </p>

            <div className="border-t border-white/10 pt-6 max-w-md mx-auto">
              <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                {t.recoverableHeading}
              </p>
              <p className="text-3xl md:text-4xl font-heading font-bold mb-1 tabular-nums">
                {t.currency}
                {fmt(result.recoverableMonthly, t.localeCode)}
                <span className="text-xl text-slate-400 font-semibold">{t.perMonth}</span>
                <span className="text-slate-500 text-lg font-normal">
                  {" "}
                  &middot; {t.currency}
                  {fmt(result.recoverableAnnual, t.localeCode)}
                  {t.perYear}
                </span>
              </p>
              <p className="text-slate-400 text-xs mt-2">{t.recoverableSub}</p>
              {result.recoveredRevenueMonthly !== null && (
                <p className="text-slate-300 text-sm mt-3">
                  {t.revenuePrefix}{" "}
                  <span className="text-accent font-semibold">
                    {t.currency}
                    {fmt(result.recoveredRevenueMonthly, t.localeCode)}
                    {t.perMonth}
                  </span>{" "}
                  {t.revenueSuffix}
                </p>
              )}
            </div>
          </>
        ) : (
          <p className="text-slate-300 py-6 text-lg">{t.enterToSee}</p>
        )}
      </div>

      {/* Transparency / how it's calculated */}
      {hasResult && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowHow((s) => !s)}
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800 transition-colors"
          >
            <Info size={13} strokeWidth={1.5} />
            {t.howHeading}
            <ChevronDown size={13} className={`transition-transform ${showHow ? "rotate-180" : ""}`} />
          </button>
          {showHow && (
            <div className="mt-3 rounded-lg bg-gray-50 border border-gray-100 p-4 text-sm">
              <dl className="space-y-1.5">
                <div className="flex justify-between">
                  <dt className="text-gray-600">{t.howBase}</dt>
                  <dd className="font-semibold tabular-nums">+{WEIGHTS.base}%</dd>
                </div>
                {!trackingVerified && (
                  <div className="flex justify-between">
                    <dt className="text-gray-600">{t.howTracking}</dt>
                    <dd className="font-semibold tabular-nums">+{WEIGHTS.trackingUnverified}%</dd>
                  </div>
                )}
                {!crmFedBack && (
                  <div className="flex justify-between">
                    <dt className="text-gray-600">{t.howCrm}</dt>
                    <dd className="font-semibold tabular-nums">+{WEIGHTS.crmNotFedBack}%</dd>
                  </div>
                )}
                {result.pmaxContribution > 0 && (
                  <div className="flex justify-between">
                    <dt className="text-gray-600">
                      {t.howPmax} ({pmaxShare}%)
                    </dt>
                    <dd className="font-semibold tabular-nums">+{result.pmaxContribution}%</dd>
                  </div>
                )}
                <div className="flex justify-between border-t border-gray-200 pt-1.5 mt-1.5">
                  <dt className="font-semibold text-gray-900">{t.howTotal}</dt>
                  <dd className="font-bold text-primary tabular-nums">
                    &asymp; {result.wasteRate}%
                  </dd>
                </div>
              </dl>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">{t.howNote}</p>
            </div>
          )}
        </div>
      )}

      {/* Lead capture form OR success message */}
      {isSubmitted ? (
        <div className="text-center border-t border-gray-100 pt-8 mt-8">
          <div className="mb-4">
            <CheckCircle size={44} strokeWidth={1.5} className="text-green-600 mx-auto" />
          </div>
          <h3 className="text-xl font-heading font-bold mb-2">{t.successTitle}</h3>
          <p className="text-gray-600 mb-5 max-w-md mx-auto">{t.successBody}</p>
          <Link href="/kontakt" className="text-primary font-semibold hover:underline text-sm">
            {t.secondaryCta}
          </Link>
        </div>
      ) : (
        <div className="border-t border-gray-100 pt-8 mt-8">
          <h3 className="text-xl font-heading font-bold mb-1">{t.formHeading}</h3>
          <p className="text-gray-600 text-sm mb-6">{t.formSub}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="calc-name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.nameLabel}
                </label>
                <input
                  id="calc-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder={t.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="calc-email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.emailLabel}
                </label>
                <input
                  id="calc-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder={t.emailPlaceholder}
                />
              </div>
            </div>
            <div>
              <label htmlFor="calc-website" className="block text-sm font-medium text-gray-700 mb-1">
                {t.websiteLabel}
              </label>
              <input
                id="calc-website"
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className={inputClass}
                placeholder={t.websitePlaceholder}
              />
            </div>
            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className={`btn-secondary w-full text-center ${
                !canSubmit || isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? t.submitting : t.submit}
            </button>
            <p className="text-xs text-gray-500 text-center">{t.privacyNote}</p>
          </form>
        </div>
      )}
    </div>
  );
}
