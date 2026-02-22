"use client";

import { useState, useEffect } from "react";
import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

type FormData = {
  businessType: string;
  hasGoogleAds: string;
  monthlyBudget: string;
  biggestChallenge: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  message: string;
};

const initialData: FormData = {
  businessType: "",
  hasGoogleAds: "",
  monthlyBudget: "",
  biggestChallenge: "",
  name: "",
  email: "",
  phone: "",
  website: "",
  message: "",
};

// Readable label maps for email output
const labelMaps = {
  businessType: {
    ecommerce: "eCommerce / Online prodavnica",
    b2b: "B2B / Usluge",
    local: "Lokalni biznis",
    saas: "SaaS / Aplikacija",
    other: "Ostalo",
  } as Record<string, string>,
  hasGoogleAds: {
    "yes-not-happy": "Da, ali nisam zadovoljan rezultatima",
    "yes-want-scale": "Da, želim da skaliram",
    "no-new": "Ne, tek počinjem",
    paused: "Imao/la sam kampanje ali sam pauzirao/la",
  } as Record<string, string>,
  monthlyBudget: {
    "under-500": "Ispod €500/mesečno",
    "500-1000": "€500 - €1.000/mesečno",
    "1000-3000": "€1.000 - €3.000/mesečno",
    "3000-10000": "€3.000 - €10.000/mesečno",
    "10000+": "€10.000+/mesečno",
    "not-sure": "Nisam siguran/na",
  } as Record<string, string>,
  biggestChallenge: {
    "no-results": "Trošim novac ali nema rezultata",
    "high-cpa": "CPA je previsok",
    "cant-scale": "Ne mogu da skaliram bez povećanja troškova",
    "bad-agency": "Loše iskustvo sa trenutnom agencijom",
    "dont-know": "Ne znam odakle da počnem",
    other: "Ostalo",
  } as Record<string, string>,
};

// Ad tracking URL params to capture
const TRACKING_PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

export function MultiStepForm({ locale }: { locale: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingData, setTrackingData] = useState<Record<string, string>>({});

  // Capture ad tracking params on mount
  useEffect(() => {
    const params: Record<string, string> = {};
    TRACKING_PARAMS.forEach((key) => {
      const val = searchParams.get(key);
      if (val) params[key] = val;
    });
    if (Object.keys(params).length > 0) {
      setTrackingData(params);
    }
  }, [searchParams]);

  const totalSteps = 3;

  const updateField = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const canProceedStep1 = data.businessType && data.hasGoogleAds;
  const canProceedStep2 = data.monthlyBudget && data.biggestChallenge;
  const canSubmit = data.name && data.email;

  // Determine lead tier based on answers
  const getLeadTier = () => {
    if (
      data.monthlyBudget === "3000-10000" ||
      data.monthlyBudget === "10000+"
    ) {
      return "premium";
    }
    if (data.monthlyBudget === "1000-3000") {
      return "standard";
    }
    return "starter";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Build tracking info string
      const trackingInfo = Object.keys(trackingData).length > 0
        ? Object.entries(trackingData).map(([k, v]) => `${k}: ${v}`).join(" | ")
        : "Direktan pristup (bez oglasa)";

      const response = await fetch(
        "https://formsubmit.co/ajax/info@slobodan-jelisavac.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            "Ime": data.name,
            "Email": data.email,
            "Telefon": data.phone || "—",
            "Sajt": data.website || "—",
            "Tip biznisa": labelMaps.businessType[data.businessType] || data.businessType,
            "Google Ads status": labelMaps.hasGoogleAds[data.hasGoogleAds] || data.hasGoogleAds,
            "Mesečni budžet": labelMaps.monthlyBudget[data.monthlyBudget] || data.monthlyBudget,
            "Najveći izazov": labelMaps.biggestChallenge[data.biggestChallenge] || data.biggestChallenge,
            "Poruka": data.message || "—",
            "Lead Tier": getLeadTier().toUpperCase(),
            "Izvor": trackingInfo,
            _subject: `[LP Lead - ${getLeadTier().toUpperCase()}] ${data.name} — ${labelMaps.businessType[data.businessType] || data.businessType}`,
            _template: "table",
          }),
        },
      );

      if (response.ok) {
        setIsSubmitted(true);
        router.push("/kontakt/hvala");
        return;
      }
    } catch {
      // Handle error silently
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white text-gray-900 rounded-xl p-8 md:p-12 shadow-lg text-center">
        <div className="mb-4"><CheckCircle size={48} strokeWidth={1.5} className="text-green-600 mx-auto" /></div>
        <h3 className="text-2xl font-heading font-bold mb-3">
          {locale === "en"
            ? "Thank you! Your request has been sent."
            : "Hvala! Vaš zahtev je poslat."}
        </h3>
        <p className="text-gray-600">
          {locale === "en"
            ? "I'll review your information and get back to you within 48 hours with a personalized analysis."
            : "Pregledam vaše informacije i javim vam se u roku od 48 sati sa personalizovanom analizom."}
        </p>
      </div>
    );
  }

  // Labels
  const t =
    locale === "en"
      ? {
          step1Title: "Tell us about your business",
          step2Title: "Your Google Ads situation",
          step3Title: "Your contact details",
          businessTypeLabel: "What type of business do you have? *",
          businessOptions: [
            { value: "ecommerce", label: "eCommerce / Online Store" },
            { value: "b2b", label: "B2B / Services" },
            { value: "local", label: "Local Business" },
            { value: "saas", label: "SaaS / App" },
            { value: "other", label: "Other" },
          ],
          hasGoogleAdsLabel: "Do you currently run Google Ads? *",
          adsOptions: [
            { value: "yes-not-happy", label: "Yes, but not happy with results" },
            { value: "yes-want-scale", label: "Yes, want to scale" },
            { value: "no-new", label: "No, I'm just starting" },
            { value: "paused", label: "I had campaigns but paused them" },
          ],
          budgetLabel: "Monthly ad spend budget *",
          budgetOptions: [
            { value: "under-500", label: "Under €500/month" },
            { value: "500-1000", label: "€500 - €1,000/month" },
            { value: "1000-3000", label: "€1,000 - €3,000/month" },
            { value: "3000-10000", label: "€3,000 - €10,000/month" },
            { value: "10000+", label: "€10,000+/month" },
            { value: "not-sure", label: "Not sure yet" },
          ],
          challengeLabel: "What's your biggest challenge? *",
          challengeOptions: [
            { value: "no-results", label: "Spending money but no results" },
            { value: "high-cpa", label: "CPA is too high" },
            { value: "cant-scale", label: "Can't scale without increasing costs" },
            { value: "bad-agency", label: "Bad experience with current agency" },
            { value: "dont-know", label: "Don't know where to start" },
            { value: "other", label: "Other" },
          ],
          nameLabel: "Your Name *",
          namePlaceholder: "John Smith",
          emailLabel: "Email *",
          emailPlaceholder: "email@example.com",
          phoneLabel: "Phone (optional)",
          phonePlaceholder: "+44 7XXX XXX XXX",
          phoneHint: "If you'd like me to call you to schedule a meeting",
          websiteLabel: "Website URL",
          websitePlaceholder: "www.example.com",
          messageLabel: "Anything else you'd like me to know?",
          messagePlaceholder: "Your goals, timeline, questions...",
          next: "Next Step",
          back: "Back",
          submit: "Send — Get Free Analysis",
          submitting: "Sending...",
          stepOf: "of",
          privacyNote:
            "I'll respond within 48 hours. No spam, no sales calls. Just honest expert feedback.",
        }
      : {
          step1Title: "Recite nam o vašem biznisu",
          step2Title: "Vaša Google Ads situacija",
          step3Title: "Vaši kontakt podaci",
          businessTypeLabel: "Koji tip biznisa imate? *",
          businessOptions: [
            { value: "ecommerce", label: "eCommerce / Online prodavnica" },
            { value: "b2b", label: "B2B / Usluge" },
            { value: "local", label: "Lokalni biznis" },
            { value: "saas", label: "SaaS / Aplikacija" },
            { value: "other", label: "Ostalo" },
          ],
          hasGoogleAdsLabel: "Da li trenutno imate Google Ads kampanje? *",
          adsOptions: [
            { value: "yes-not-happy", label: "Da, ali nisam zadovoljan/na rezultatima" },
            { value: "yes-want-scale", label: "Da, želim da skaliram" },
            { value: "no-new", label: "Ne, tek počinjem" },
            { value: "paused", label: "Imao/la sam kampanje ali sam pauzirao/la" },
          ],
          budgetLabel: "Mesečni budžet za oglašavanje *",
          budgetOptions: [
            { value: "under-500", label: "Ispod €500/mesečno" },
            { value: "500-1000", label: "€500 - €1.000/mesečno" },
            { value: "1000-3000", label: "€1.000 - €3.000/mesečno" },
            { value: "3000-10000", label: "€3.000 - €10.000/mesečno" },
            { value: "10000+", label: "€10.000+/mesečno" },
            { value: "not-sure", label: "Nisam siguran/na" },
          ],
          challengeLabel: "Šta vam je najveći izazov? *",
          challengeOptions: [
            { value: "no-results", label: "Trošim novac ali nema rezultata" },
            { value: "high-cpa", label: "CPA je previsok" },
            { value: "cant-scale", label: "Ne mogu da skaliram bez povećanja troškova" },
            { value: "bad-agency", label: "Loše iskustvo sa trenutnom agencijom" },
            { value: "dont-know", label: "Ne znam odakle da počnem" },
            { value: "other", label: "Ostalo" },
          ],
          nameLabel: "Vaše ime *",
          namePlaceholder: "Petar Petrovic",
          emailLabel: "Email *",
          emailPlaceholder: "email@example.com",
          phoneLabel: "Telefon (opciono)",
          phonePlaceholder: "+381 6X XXX XXXX",
          phoneHint: "Ako želite da vas pozovem radi zakazivanja sastanka",
          websiteLabel: "URL sajta",
          websitePlaceholder: "www.example.com",
          messageLabel: "Želite li da dodate nešto?",
          messagePlaceholder: "Vaši ciljevi, vremenski okvir, pitanja...",
          next: "Sledeći korak",
          back: "Nazad",
          submit: "Pošaljite — dobijte besplatnu analizu",
          submitting: "Šaljem...",
          stepOf: "od",
          privacyNote:
            "Odgovorim u roku od 48 sati. Bez spama, bez prodajnih poziva. Samo iskren ekspertski feedback.",
        };

  const inputClass =
    "w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors";
  const radioGroupClass =
    "grid gap-2";
  const radioOptionClass = (isSelected: boolean) =>
    `flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
      isSelected
        ? "border-primary bg-blue-50 text-gray-900"
        : "border-gray-200 hover:border-gray-300 text-gray-700"
    }`;

  return (
    <div className="bg-white text-gray-900 rounded-xl p-6 md:p-8 shadow-lg">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>
            {locale === "en" ? "Step" : "Korak"} {step} {t.stepOf} {totalSteps}
          </span>
          <span>{Math.round((step / totalSteps) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Hidden fields */}
        <input type="hidden" name="_source" value="meta-ads-lp-multistep" />
        <input type="hidden" name="_leadTier" value={getLeadTier()} />

        {/* STEP 1: Business Type + Google Ads Status */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold">{t.step1Title}</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.businessTypeLabel}
              </label>
              <div className={radioGroupClass}>
                {t.businessOptions.map((option) => (
                  <label
                    key={option.value}
                    className={radioOptionClass(data.businessType === option.value)}
                  >
                    <input
                      type="radio"
                      name="businessType"
                      value={option.value}
                      checked={data.businessType === option.value}
                      onChange={(e) => updateField("businessType", e.target.value)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                        data.businessType === option.value
                          ? "border-primary bg-primary"
                          : "border-gray-300"
                      }`}
                    >
                      {data.businessType === option.value && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                      )}
                    </div>
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.hasGoogleAdsLabel}
              </label>
              <div className={radioGroupClass}>
                {t.adsOptions.map((option) => (
                  <label
                    key={option.value}
                    className={radioOptionClass(data.hasGoogleAds === option.value)}
                  >
                    <input
                      type="radio"
                      name="hasGoogleAds"
                      value={option.value}
                      checked={data.hasGoogleAds === option.value}
                      onChange={(e) => updateField("hasGoogleAds", e.target.value)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                        data.hasGoogleAds === option.value
                          ? "border-primary bg-primary"
                          : "border-gray-300"
                      }`}
                    >
                      {data.hasGoogleAds === option.value && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                      )}
                    </div>
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={nextStep}
              disabled={!canProceedStep1}
              className={`btn-secondary w-full text-center ${
                !canProceedStep1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {t.next} →
            </button>
          </div>
        )}

        {/* STEP 2: Budget + Challenge */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold">{t.step2Title}</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.budgetLabel}
              </label>
              <div className={radioGroupClass}>
                {t.budgetOptions.map((option) => (
                  <label
                    key={option.value}
                    className={radioOptionClass(data.monthlyBudget === option.value)}
                  >
                    <input
                      type="radio"
                      name="monthlyBudget"
                      value={option.value}
                      checked={data.monthlyBudget === option.value}
                      onChange={(e) => updateField("monthlyBudget", e.target.value)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                        data.monthlyBudget === option.value
                          ? "border-primary bg-primary"
                          : "border-gray-300"
                      }`}
                    >
                      {data.monthlyBudget === option.value && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                      )}
                    </div>
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.challengeLabel}
              </label>
              <div className={radioGroupClass}>
                {t.challengeOptions.map((option) => (
                  <label
                    key={option.value}
                    className={radioOptionClass(data.biggestChallenge === option.value)}
                  >
                    <input
                      type="radio"
                      name="biggestChallenge"
                      value={option.value}
                      checked={data.biggestChallenge === option.value}
                      onChange={(e) =>
                        updateField("biggestChallenge", e.target.value)
                      }
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                        data.biggestChallenge === option.value
                          ? "border-primary bg-primary"
                          : "border-gray-300"
                      }`}
                    >
                      {data.biggestChallenge === option.value && (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                      )}
                    </div>
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={prevStep}
                className="btn-primary flex-1 text-center"
              >
                ← {t.back}
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!canProceedStep2}
                className={`btn-secondary flex-1 text-center ${
                  !canProceedStep2 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {t.next} →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Contact Details */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold">{t.step3Title}</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={data.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className={inputClass}
                  placeholder={t.namePlaceholder}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={data.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className={inputClass}
                  placeholder={t.emailPlaceholder}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t.phoneLabel}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className={inputClass}
                  placeholder={t.phonePlaceholder}
                />
                <p className="text-xs text-gray-400 mt-1">{t.phoneHint}</p>
              </div>
              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t.websiteLabel}
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={data.website}
                  onChange={(e) => updateField("website", e.target.value)}
                  className={inputClass}
                  placeholder={t.websitePlaceholder}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={data.message}
                onChange={(e) => updateField("message", e.target.value)}
                className={`${inputClass} resize-none`}
                placeholder={t.messagePlaceholder}
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={prevStep}
                className="btn-primary flex-1 text-center"
              >
                ← {t.back}
              </button>
              <button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className={`btn-secondary flex-1 text-center ${
                  !canSubmit || isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {isSubmitting ? t.submitting : t.submit}
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-2">
              {t.privacyNote}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
