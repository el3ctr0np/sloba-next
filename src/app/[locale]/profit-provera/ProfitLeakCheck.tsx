"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { CheckCircle, ArrowLeft } from "lucide-react";

// --- GTM dataLayer helper -------------------------------------------------
// Mirrors the mechanic used in lp/google-ads/MultiStepForm.tsx:
// form_view / form_start / form_step_complete / lead_submit.
const FORM_NAME = "profit_leak_check";

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

function pushDataLayer(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

type Option = { value: string; label: string; leak: number };
type SpendOption = { value: string; label: string; mid: number };

type Answers = {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
};

const initialAnswers: Answers = { q1: "", q2: "", q3: "", q4: "", q5: "", q6: "" };

// Fixed leak-scoring weights — identical across locales, only copy differs.
const Q2_OPTIONS: Array<{ value: string; leak: number }> = [
  { value: "exact", leak: 0 },
  { value: "approx", leak: 4 },
  { value: "unknown", leak: 8 },
];
const Q3_OPTIONS: Array<{ value: string; leak: number }> = [
  { value: "recent", leak: 2 },
  { value: "6-12mo", leak: 6 },
  { value: "over1y", leak: 12 },
  { value: "never", leak: 18 },
];
const Q4_OPTIONS: Array<{ value: string; leak: number }> = [
  { value: "full", leak: 0 },
  { value: "partial", leak: 5 },
  { value: "no", leak: 9 },
  { value: "dontknow", leak: 11 },
];
const Q5_OPTIONS: Array<{ value: string; leak: number }> = [
  { value: "us", leak: 0 },
  { value: "agency-and-us", leak: 3 },
  { value: "agency-only", leak: 7 },
  { value: "notsure", leak: 6 },
];
const Q6_OPTIONS: Array<{ value: string; leak: number }> = [
  { value: "know", leak: 2 },
  { value: "partial", leak: 5 },
  { value: "allpmax", leak: 9 },
];

const BASE_LEAK = 6;

function getLeakForValue(options: Array<{ value: string; leak: number }>, value: string): number {
  return options.find((o) => o.value === value)?.leak ?? 0;
}

function computeLeak(answers: Answers, spendMid: number) {
  const raw =
    BASE_LEAK +
    getLeakForValue(Q2_OPTIONS, answers.q2) +
    getLeakForValue(Q3_OPTIONS, answers.q3) +
    getLeakForValue(Q4_OPTIONS, answers.q4) +
    getLeakForValue(Q5_OPTIONS, answers.q5) +
    getLeakForValue(Q6_OPTIONS, answers.q6);

  const leak = Math.max(8, Math.min(45, raw));
  const rangeLow = Math.max(6, leak - 5);
  const rangeHigh = Math.min(48, leak + 3);
  const euroLow = Math.round((spendMid * rangeLow) / 100);
  const euroHigh = Math.round((spendMid * rangeHigh) / 100);

  return { leak, rangeLow, rangeHigh, euroLow, euroHigh };
}

function getContent(locale: string) {
  const isEn = locale === "en";
  const currency = isEn ? "$" : "€";

  const spendOptionsSr: SpendOption[] = [
    { value: "u1500", label: "Do €1.500", mid: 1000 },
    { value: "1500-5000", label: "€1.500–5.000", mid: 3000 },
    { value: "5000-15000", label: "€5.000–15.000", mid: 9000 },
    { value: "15000plus", label: "€15.000+", mid: 25000 },
  ];
  const spendOptionsEn: SpendOption[] = [
    { value: "u5k", label: "Under $5k", mid: 3000 },
    { value: "5k-20k", label: "$5k–20k", mid: 12000 },
    { value: "20k-50k", label: "$20k–50k", mid: 35000 },
    { value: "50k-100k", label: "$50k–100k", mid: 70000 },
    { value: "100kplus", label: "$100k+", mid: 130000 },
  ];

  return {
    isEn,
    currency,
    eyebrow: isEn ? "FREE CHECK" : "BESPLATNA PROCENA",
    heroTitle: isEn
      ? "How much of your Google Ads budget actually works — and how much just leaks?"
      : "Koliko vaš Google Ads budžet stvarno radi — a koliko curi?",
    heroSub: isEn
      ? "6 questions, 90 seconds. I build this leak estimate from patterns in real audits — not a generic widget."
      : "6 pitanja, 90 sekundi. Procenu curenja pravim na osnovu obrazaca iz stvarnih audita — ne generički widget.",
    heroMicroTrust: isEn
      ? "On accounts I take over, I typically find 20-40% of the budget doing nothing at all."
      : "Na nalozima koje preuzmem u proseku nađem 20-40% budžeta koji ne radi ništa.",
    stepLabel: isEn ? "Question" : "Pitanje",
    ofLabel: isEn ? "of" : "od",
    back: isEn ? "Back" : "Nazad",
    totalSteps: 6,

    spendOptions: isEn ? spendOptionsEn : spendOptionsSr,

    questions: [
      {
        key: "q1" as const,
        label: isEn ? "Monthly ad spend budget" : "Mesečni ad spend",
        options: isEn ? spendOptionsEn : spendOptionsSr,
      },
      {
        key: "q2" as const,
        label: isEn
          ? "Do you know your exact break-even ROAS (the ROAS that covers all costs)?"
          : "Znate li tačan break-even ROAS (koji ROAS pokriva sve troškove)?",
        options: [
          { value: "exact", label: isEn ? "I know exactly" : "Znam tačno" },
          { value: "approx", label: isEn ? "Roughly" : "Otprilike" },
          { value: "unknown", label: isEn ? "I don't know" : "Ne znam" },
        ],
      },
      {
        key: "q3" as const,
        label: isEn
          ? "When was your conversion tracking last INDEPENDENTLY verified?"
          : "Kada je poslednji put NEZAVISNO proveren conversion tracking?",
        options: [
          { value: "recent", label: isEn ? "In the last 3 months" : "U poslednja 3 meseca" },
          { value: "6-12mo", label: isEn ? "6–12 months ago" : "Pre 6–12 meseci" },
          {
            value: "over1y",
            label: isEn ? "Over a year ago / can't remember" : "Pre više od godinu / ne sećam se",
          },
          {
            value: "never",
            label: isEn ? "Never / not sure if ever" : "Nikad / ne znam da li je ikad",
          },
        ],
      },
      {
        key: "q4" as const,
        label: isEn
          ? "Do outcomes from your CRM/sales (who actually bought) flow back into Google Ads?"
          : "Da li se ishodi iz CRM-a/prodaje (ko je stvarno kupio) vraćaju u Google Ads?",
        options: [
          { value: "full", label: isEn ? "Yes, fully" : "Da, potpuno" },
          { value: "partial", label: isEn ? "Partially" : "Delimično" },
          { value: "no", label: isEn ? "No" : "Ne" },
          { value: "dontknow", label: isEn ? "Not sure what that means" : "Ne znam šta to znači" },
        ],
      },
      {
        key: "q5" as const,
        label: isEn
          ? "Who has admin access to your Google Ads account?"
          : "Ko ima admin pristup vašem Google Ads nalogu?",
        options: [
          { value: "us", label: isEn ? "Me / my company" : "Ja / moja firma" },
          {
            value: "agency-and-us",
            label: isEn ? "Agency, but I have access too" : "Agencija, ali i ja imam pristup",
          },
          { value: "agency-only", label: isEn ? "Agency only" : "Samo agencija" },
          { value: "notsure", label: isEn ? "Not sure" : "Nisam siguran" },
        ],
      },
      {
        key: "q6" as const,
        label: isEn
          ? "How much of your budget goes to Performance Max, and do you know where it's spent?"
          : "Koliki deo budžeta ide u Performance Max i znate li gde se troši?",
        options: [
          { value: "know", label: isEn ? "I know exactly where it's spent" : "Znam tačno gde troši" },
          { value: "partial", label: isEn ? "Roughly / partially" : "Otprilike / delimično" },
          {
            value: "allpmax",
            label: isEn
              ? "It's all PMax, no visibility into where it goes"
              : "Sve je PMax, nemam uvid gde ide",
          },
        ],
      },
    ],

    resultHeading: isEn ? "Your estimated leak" : "Vaša procena curenja",
    resultLeakSuffix: isEn
      ? "of your budget is likely leaking"
      : "vašeg budžeta verovatno curi",
    tierLow: isEn
      ? "Solid account — but even small percentages compound over a year."
      : "Solidan nalog — ali i mali procenti se množe kroz godinu.",
    tierMid: isEn ? "Typical leakage. Worth a review." : "Tipično curenje. Vredi pregled.",
    tierHigh: isEn
      ? "Significant leakage — this is worth looking at urgently."
      : "Značajno curenje — ovo hitno vredi pogledati.",
    disclaimer: isEn
      ? "This is a pattern-based estimate, not a diagnosis. I identify the exact leak points only after reviewing the account directly."
      : "Procena na osnovu obrazaca iz audita, ne dijagnoza. Tačne tačke curenja utvrđujem tek uvidom u nalog.",

    formHeading: isEn ? "Get your personal breakdown" : "Dobijte lični pregled",
    formSub: isEn
      ? "I'll personally review where your account is most likely to be leaking and send you a short, specific breakdown."
      : "Lično ću pregledati gde vaš nalog najverovatnije curi i poslati vam kratak, konkretan pregled.",
    nameLabel: isEn ? "Your Name *" : "Vaše ime *",
    namePlaceholder: isEn ? "John Smith" : "Petar Petrović",
    emailLabel: isEn ? "Email *" : "Email *",
    emailPlaceholder: "email@example.com",
    websiteLabel: isEn ? "Website (optional)" : "Website (opciono)",
    websitePlaceholder: "www.example.com",
    submit: isEn ? "Send me the full breakdown" : "Pošaljite mi detaljan pregled",
    submitting: isEn ? "Sending..." : "Šaljem...",
    privacyNote: isEn
      ? "No spam. Just an honest, specific breakdown within 24 hours."
      : "Bez spama. Samo iskren, konkretan pregled u roku od 24h.",

    successTitle: isEn ? "Thank you." : "Hvala.",
    successBody: isEn
      ? "Your personal breakdown of exactly where the budget leaks arrives by email within 24 hours."
      : "Lični pregled tačnih tačaka curenja stiže na email u roku od 24h.",
    secondaryCta: isEn ? "Or book a 20-min call now →" : "Ili zakažite 20-min razgovor odmah →",
  };
}

export function ProfitLeakCheck({ locale }: { locale: string }) {
  const t = getContent(locale);

  const [step, setStep] = useState(1); // 1-6 = questions, 7 = result + form
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formStartedRef = useRef(false);
  const viewedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // form_view: fire once when the diagnostic scrolls into view
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

  const selectAnswer = (key: keyof Answers, value: string) => {
    if (!formStartedRef.current) {
      pushDataLayer("form_start", { form_name: FORM_NAME });
      formStartedRef.current = true;
    }
    setAnswers((prev) => ({ ...prev, [key]: value }));
    pushDataLayer("form_step_complete", { form_name: FORM_NAME, form_step: step });
    // Auto-advance to next question (or to results after Q6)
    setStep((s) => Math.min(s + 1, 7));
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  const spendOption = t.spendOptions.find((o) => o.value === answers.q1);
  const spendMid = spendOption?.mid ?? t.spendOptions[0].mid;
  const result = computeLeak(answers, spendMid);

  const tierMessage = result.leak < 15 ? t.tierLow : result.leak <= 28 ? t.tierMid : t.tierHigh;

  const canSubmit = name && email;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || isSubmitting) return;
    setIsSubmitting(true);

    const currentQuestions = t.questions;
    const answerLabel = (key: keyof Answers) => {
      const q = currentQuestions.find((qq) => qq.key === key);
      return q?.options.find((o) => o.value === answers[key])?.label || answers[key] || "—";
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@slobodan-jelisavac.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Ime: name,
          Email: email,
          Sajt: website || "—",
          "Mesečni ad spend": answerLabel("q1"),
          "Break-even ROAS": answerLabel("q2"),
          "Tracking verifikacija": answerLabel("q3"),
          "CRM/sales povratne informacije": answerLabel("q4"),
          "Admin pristup": answerLabel("q5"),
          "Performance Max uvid": answerLabel("q6"),
          "Procenjeno curenje": `${result.leak}%`,
          Raspon: `${result.rangeLow}-${result.rangeHigh}% · ${t.currency}${result.euroLow}-${t.currency}${result.euroHigh}/mes`,
          _subject: `Profit-Leak Check — ${result.leak}% — ${website || name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        pushDataLayer("lead_submit", {
          form_name: FORM_NAME,
          leak_pct: result.leak,
          ad_spend_bucket: answers.q1,
        });
        try {
          sessionStorage.setItem("dj_lead_form", "profit_leak_check");
          sessionStorage.setItem("dj_lead_leak", String(result.leak));
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

  const radioOptionClass = (isSelected: boolean) =>
    `flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all text-left w-full ${
      isSelected
        ? "border-accent bg-accent/10 text-gray-900"
        : "border-gray-200 hover:border-gray-300 text-gray-700"
    }`;

  const inputClass =
    "w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors";

  return (
    <div
      id="profit-leak-check"
      ref={containerRef}
      className="bg-white text-gray-900 rounded-xl p-6 md:p-10 shadow-card border border-gray-200"
    >
      {/* Progress bar — only during questions */}
      {step <= t.totalSteps && (
        <div className="mb-8">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>
              {t.stepLabel} {step} {t.ofLabel} {t.totalSteps}
            </span>
            <span>{Math.round((step / t.totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${(step / t.totalSteps) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Questions 1-6 */}
      {t.questions.map((q, idx) => {
        const questionStep = idx + 1;
        if (step !== questionStep) return null;
        return (
          <div key={q.key} className="space-y-6">
            <h3 className="text-xl md:text-2xl font-heading font-bold">{q.label}</h3>
            <div className="grid gap-3">
              {q.options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => selectAnswer(q.key, option.value)}
                  className={radioOptionClass(answers[q.key] === option.value)}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                      answers[q.key] === option.value ? "border-accent bg-accent" : "border-gray-300"
                    }`}
                  >
                    {answers[q.key] === option.value && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                    )}
                  </div>
                  <span className="text-sm md:text-base">{option.label}</span>
                </button>
              ))}
            </div>
            {questionStep > 1 && (
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft size={14} strokeWidth={1.5} />
                {t.back}
              </button>
            )}
          </div>
        );
      })}

      {/* Step 7: Result + Lead form */}
      {step === 7 && (
        <div className="space-y-8">
          {/* Result panel */}
          <div className="text-center bg-slate-900 text-white rounded-xl p-6 md:p-10">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
              {t.resultHeading}
            </p>
            <p className="text-5xl md:text-6xl font-heading font-bold mb-2">
              &asymp; {result.leak}%
            </p>
            <p className="text-slate-300 mb-4">{t.resultLeakSuffix}</p>
            <p className="text-lg md:text-xl font-semibold text-accent mb-4">
              {result.rangeLow}&ndash;{result.rangeHigh}% &middot; {t.currency}
              {result.euroLow.toLocaleString(locale === "en" ? "en-US" : "sr-RS")}&ndash;{t.currency}
              {result.euroHigh.toLocaleString(locale === "en" ? "en-US" : "sr-RS")}/
              {locale === "en" ? "mo" : "mes"}
            </p>
            <p className="text-slate-300 text-sm md:text-base max-w-lg mx-auto">{tierMessage}</p>
          </div>
          <p className="text-xs text-gray-500 text-center max-w-xl mx-auto">{t.disclaimer}</p>

          {/* Lead capture form OR success message */}
          {isSubmitted ? (
            <div className="text-center border-t border-gray-100 pt-8">
              <div className="mb-4">
                <CheckCircle size={44} strokeWidth={1.5} className="text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">{t.successTitle}</h3>
              <p className="text-gray-600 mb-5 max-w-md mx-auto">{t.successBody}</p>
              <Link
                href="/kontakt"
                className="text-primary font-semibold hover:underline text-sm"
              >
                {t.secondaryCta}
              </Link>
            </div>
          ) : (
            <div className="border-t border-gray-100 pt-8">
              <h3 className="text-xl font-heading font-bold mb-1">{t.formHeading}</h3>
              <p className="text-gray-600 text-sm mb-6">{t.formSub}</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="pl-name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.nameLabel}
                    </label>
                    <input
                      id="pl-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClass}
                      placeholder={t.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="pl-email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.emailLabel}
                    </label>
                    <input
                      id="pl-email"
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
                  <label htmlFor="pl-website" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.websiteLabel}
                  </label>
                  <input
                    id="pl-website"
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
      )}
    </div>
  );
}
