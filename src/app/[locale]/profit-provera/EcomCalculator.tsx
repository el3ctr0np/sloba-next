"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { CheckCircle, ChevronDown, Info, TrendingUp, TrendingDown, HelpCircle } from "lucide-react";

// --- GTM dataLayer helper -------------------------------------------------
const FORM_NAME = "ecom_profit_calculator";

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

function pushDataLayer(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

// --- Unit-economics math --------------------------------------------------
// Everything here is deterministic and traceable to one input — no black box.
//   breakEvenROAS  = 1 / margin            (pure math)
//   maxCPA         = AOV × margin          (gross profit per order)
//   maxCPC         = maxCPA × CR           (break-even bid per click)
//   projectedROAS  = AOV × CR / CPC        (independent of spend)
//   netAfterAds    = spend × (projectedROAS × margin − 1)
// Profit iff projectedROAS ≥ breakEvenROAS iff CPC ≤ maxCPC — all consistent.
type Inputs = {
  aov: number; // average order value
  marginPct: number; // gross margin %, 0–100
  crPct: number; // site conversion rate %
  spend: number; // monthly marketing spend
  cpc: number | null; // optional average CPC
};

function computeEconomics(i: Inputs) {
  const margin = i.marginPct / 100;
  const cr = i.crPct / 100;

  const breakEvenROAS = margin > 0 ? 1 / margin : 0;
  const maxCPA = i.aov * margin;
  const maxCPC = maxCPA * cr;

  let projection: null | {
    clicks: number;
    orders: number;
    revenue: number;
    projectedROAS: number;
    grossProfit: number;
    netAfterAds: number;
    cpa: number;
    profitable: boolean;
    cpcHeadroomPct: number; // how far current CPC sits below max (neg = above)
  } = null;

  if (i.cpc && i.cpc > 0 && i.spend > 0 && cr > 0 && i.aov > 0) {
    const clicks = i.spend / i.cpc;
    const orders = clicks * cr;
    const revenue = orders * i.aov;
    const projectedROAS = (i.aov * cr) / i.cpc;
    const grossProfit = revenue * margin;
    const netAfterAds = grossProfit - i.spend;
    const cpa = orders > 0 ? i.spend / orders : 0;
    const cpcHeadroomPct = maxCPC > 0 ? ((maxCPC - i.cpc) / maxCPC) * 100 : 0;
    projection = {
      clicks,
      orders,
      revenue,
      projectedROAS,
      grossProfit,
      netAfterAds,
      cpa,
      profitable: netAfterAds >= 0,
      cpcHeadroomPct,
    };
  }

  return { margin, cr, breakEvenROAS, maxCPA, maxCPC, projection };
}

function getContent(locale: string) {
  const isEn = locale === "en";
  const currency = isEn ? "$" : "€";
  const localeCode = isEn ? "en-US" : "sr-RS";

  return {
    isEn,
    currency,
    localeCode,

    // Inputs
    aovLabel: isEn ? "Average order value (AOV)" : "Prosečna vrednost porudžbine (AOV)",
    aovHint: isEn
      ? "Total revenue ÷ number of orders. GA4 or Shopify show it directly."
      : "Ukupan prihod ÷ broj porudžbina. GA4 ili Shopify to pokazuju direktno.",
    aovPlaceholder: isEn ? "e.g. 60" : "npr. 6000",

    marginLabel: isEn ? "Gross margin" : "Bruto marža",
    marginHint: isEn
      ? "(Revenue − cost of goods) ÷ revenue. A rough estimate is fine."
      : "(Prihod − cena robe) ÷ prihod. Gruba procena je sasvim ok.",

    crLabel: isEn ? "Site conversion rate" : "Stopa konverzije sajta",
    crHint: isEn
      ? "GA4: Reports → Monetize → Overview (purchase rate). Or Shopify Analytics → Conversion rate. Typical store: 1–3%."
      : "GA4: Izveštaji → Monetizacija → Pregled (stopa kupovine). Ili Shopify Analytics → Conversion rate. Tipična prodavnica: 1-3%.",
    crPlaceholder: isEn ? "e.g. 1.8" : "npr. 1.8",

    spendLabel: isEn ? "Monthly marketing spend" : "Mesečni marketing budžet",
    spendHint: isEn
      ? "Media spend across paid channels (Google, Meta…), excluding fees."
      : "Medijski trošak po plaćenim kanalima (Google, Meta…), bez honorara.",
    spendPlaceholder: isEn ? "e.g. 3000" : "npr. 3000",

    productsLabel: isEn ? "Number of products" : "Broj proizvoda",
    productsHint: isEn
      ? "Rough size of your catalog. Used to flag your strongest channel."
      : "Okvirna veličina kataloga. Koristi se da označimo vaš najjači kanal.",
    productsPlaceholder: isEn ? "e.g. 120" : "npr. 120",

    advancedToggle: isEn ? "Add average CPC to project profit (optional)" : "Dodaj prosečan CPC za projekciju profita (opciono)",
    cpcLabel: isEn ? "Average CPC" : "Prosečan CPC",
    cpcHint: isEn
      ? "Average cost per click. Google Ads → Campaigns → Avg. CPC column."
      : "Prosečna cena po kliku. Google Ads → Kampanje → kolona Pros. CPC.",
    cpcPlaceholder: isEn ? "e.g. 0.8" : "npr. 40",

    // Result — core
    coreEyebrow: isEn ? "Your break-even ROAS" : "Vaš break-even ROAS",
    breakEvenSuffix: isEn ? "below this, you pay to lose money" : "ispod ovoga plaćate da biste gubili novac",
    maxCpaLabel: isEn ? "Max you can pay per order" : "Max po porudžbini",
    maxCpaSub: isEn ? "and still break even" : "da biste bili na nuli",
    maxCpcLabel: isEn ? "Max you can bid per click" : "Max po kliku",
    maxCpcSub: isEn ? "at your conversion rate" : "pri vašoj stopi konverzije",

    enterToSee: isEn
      ? "Enter AOV, margin and conversion rate to see your numbers."
      : "Unesite AOV, maržu i stopu konverzije da vidite svoje brojke.",

    // Result — projection
    projEyebrow: isEn ? "At this spend, CPC and conversion rate" : "Na ovaj budžet, CPC i stopu konverzije",
    projOrders: isEn ? "Orders / mo" : "Porudžbina / mes",
    projRevenue: isEn ? "Revenue / mo" : "Prihod / mes",
    projRoas: isEn ? "Projected ROAS" : "Projektovani ROAS",
    netProfitLabel: isEn ? "Net profit after ad spend" : "Neto profit posle oglasa",
    netLossLabel: isEn ? "Net loss after ad spend" : "Neto gubitak posle oglasa",
    perMonth: isEn ? "/mo" : "/mes",
    verdictProfit: isEn
      ? "You're above break-even — the math works."
      : "Iznad ste break-even-a, matematika radi.",
    verdictLoss: isEn
      ? "You're below break-even — every euro of spend loses money at these numbers."
      : "Ispod ste break-even-a: na ove brojke svaki dinar budžeta pravi gubitak.",
    cpcAbove: isEn
      ? "Your CPC is above the ceiling. It needs to drop below"
      : "Vaš CPC je iznad plafona. Mora da padne ispod",
    cpcBelow: isEn ? "You have room: your CPC sits" : "Imate prostora: vaš CPC je",
    cpcBelowSuffix: isEn ? "below the ceiling." : "ispod plafona.",

    // Transparency
    howHeading: isEn ? "How this is calculated" : "Kako se ovo računa",
    howNote: isEn
      ? "Pure unit economics — every line traces to one of your inputs. It's a directional check, not a diagnosis of your account."
      : "Čista unit-ekonomija: svaka linija se izvodi iz jednog vašeg unosa. Ovo je orijentaciona provera, ne dijagnoza naloga.",

    // Channel recommendation
    recHeading: isEn ? "Where your biggest lever probably is" : "Gde vam je najveća poluga",

    // Lead form
    formHeading: isEn ? "Get the full read on your numbers by email" : "Dobijte pun pregled vaših brojki na email",
    formSub: isEn
      ? "I'll take these numbers, sanity-check them against what I see in real accounts, and send back where the biggest profit lever is for you — within 24 hours."
      : "Uzmem ove brojke, uporedim ih sa onim što viđam u stvarnim nalozima i vratim vam gde vam je najveća poluga za profit, u roku od 24h.",
    nameLabel: isEn ? "Your Name *" : "Vaše ime *",
    namePlaceholder: isEn ? "John Smith" : "Petar Petrović",
    emailLabel: isEn ? "Email *" : "Email *",
    emailPlaceholder: "email@example.com",
    websiteLabel: isEn ? "Store URL (optional)" : "Adresa prodavnice (opciono)",
    websitePlaceholder: "www.example.com",
    submit: isEn ? "Send me the full read" : "Pošaljite mi pun pregled",
    submitting: isEn ? "Sending..." : "Šaljem...",
    privacyNote: isEn
      ? "No spam. Just an honest read on your numbers within 24 hours."
      : "Bez spama. Samo iskren pregled vaših brojki u roku od 24h.",

    successTitle: isEn ? "Thank you." : "Hvala.",
    successBody: isEn
      ? "Your read — where the biggest profit lever is in your setup — arrives by email within 24 hours."
      : "Vaš pregled (gde vam je najveća poluga za profit) stiže na email u roku od 24h.",
    secondaryCta: isEn ? "Or book a 20-min call now →" : "Ili zakažite 20-min razgovor odmah →",
  };
}

function fmtMoney(n: number, localeCode: string): string {
  return Math.round(n).toLocaleString(localeCode);
}

function fmtNum(n: number, localeCode: string, digits = 1): string {
  return n.toLocaleString(localeCode, { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

export function EcomCalculator({ locale }: { locale: string }) {
  const t = getContent(locale);

  const [aovInput, setAovInput] = useState("");
  const [marginPct, setMarginPct] = useState(40);
  const [crInput, setCrInput] = useState("");
  const [spendInput, setSpendInput] = useState("");
  const [productsInput, setProductsInput] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [cpcInput, setCpcInput] = useState("");
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

  const num = (s: string) => Math.max(0, parseFloat(s.replace(/[^\d.]/g, "")) || 0);
  const aov = num(aovInput);
  const cr = num(crInput);
  const spend = num(spendInput);
  const products = Math.round(num(productsInput));
  const cpc = showAdvanced && cpcInput ? num(cpcInput) : null;

  const hasCore = aov > 0 && cr > 0 && marginPct > 0;

  const result = useMemo(
    () => computeEconomics({ aov, marginPct, crPct: cr, spend, cpc }),
    [aov, marginPct, cr, spend, cpc],
  );

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

  useEffect(() => {
    if (hasCore && !resultViewedRef.current) {
      resultViewedRef.current = true;
      pushDataLayer("result_view", {
        form_name: FORM_NAME,
        break_even_roas: Math.round(result.breakEvenROAS * 100) / 100,
      });
    }
  }, [hasCore, result.breakEvenROAS]);

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

    const p = result.projection;
    try {
      const response = await fetch("https://formsubmit.co/ajax/info@slobodan-jelisavac.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Ime: name,
          Email: email,
          Prodavnica: website || "—",
          AOV: `${t.currency}${fmtMoney(aov, t.localeCode)}`,
          "Bruto marža": `${marginPct}%`,
          "Stopa konverzije": `${cr}%`,
          "Mesečni budžet": `${t.currency}${fmtMoney(spend, t.localeCode)}`,
          "Broj proizvoda": products ? String(products) : "—",
          CPC: cpc ? `${t.currency}${fmtNum(cpc, t.localeCode, 2)}` : "—",
          "Break-even ROAS": `${fmtNum(result.breakEvenROAS, t.localeCode)}x`,
          "Max CPA": `${t.currency}${fmtMoney(result.maxCPA, t.localeCode)}`,
          "Max CPC": `${t.currency}${fmtNum(result.maxCPC, t.localeCode, 2)}`,
          "Projektovani ROAS": p ? `${fmtNum(p.projectedROAS, t.localeCode)}x` : "—",
          "Neto profit/gubitak": p ? `${t.currency}${fmtMoney(p.netAfterAds, t.localeCode)}/mes` : "—",
          _subject: `eCommerce kalkulator - break-even ${fmtNum(result.breakEvenROAS, t.localeCode)}x - ${website || name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        pushDataLayer("lead_submit", {
          form_name: FORM_NAME,
          break_even_roas: Math.round(result.breakEvenROAS * 100) / 100,
          net_after_ads: p ? Math.round(p.netAfterAds) : null,
        });
        try {
          sessionStorage.setItem("dj_lead_form", "ecom_profit_calculator");
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

  // Channel recommendation from catalog size.
  const rec = useMemo(() => {
    if (!products) return null;
    if (products >= 50) {
      return t.isEn
        ? `With ${products} products, a clean Shopping / Performance Max feed is almost certainly your biggest lever — that's where a catalog this size wins or leaks.`
        : `Sa ${products} proizvoda, sređen Shopping / Performance Max feed je gotovo sigurno vaša najveća poluga: tu katalog ove veličine dobija ili curi.`;
    }
    if (products >= 8) {
      return t.isEn
        ? `With ${products} products, Shopping and tightly structured Search work together — the feed quality decides how far the budget goes.`
        : `Sa ${products} proizvoda, Shopping i čvrsto struktuiran Search rade zajedno: kvalitet feed-a odlučuje dokle budžet stiže.`;
    }
    return t.isEn
      ? `With a small catalog (${products}), well-structured Search around buying intent is usually the primary channel, not broad Shopping.`
      : `Sa malim katalogom (${products}), dobro struktuiran Search oko kupovne namere je obično primaran kanal, ne široki Shopping.`;
  }, [products, t.isEn]);

  const proj = result.projection;

  return (
    <div
      id="ecom-calculator"
      ref={containerRef}
      className="bg-white text-gray-900 rounded-xl p-6 md:p-10 shadow-card border border-gray-200"
    >
      <div className="grid gap-6">
        {/* AOV */}
        <div>
          <label htmlFor="calc-aov" className="block text-base font-heading font-semibold mb-1">
            {t.aovLabel}
          </label>
          <p className="text-xs text-gray-500 mb-2">{t.aovHint}</p>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
              {t.currency}
            </span>
            <input
              id="calc-aov"
              type="text"
              inputMode="numeric"
              value={aovInput}
              onChange={(e) => {
                markStarted();
                setAovInput(e.target.value);
              }}
              className={`${inputClass} pl-8`}
              placeholder={t.aovPlaceholder}
            />
          </div>
        </div>

        {/* Margin slider */}
        <div>
          <div className="flex items-baseline justify-between mb-1">
            <label htmlFor="calc-margin" className="block text-base font-heading font-semibold pr-3">
              {t.marginLabel}
            </label>
            <span className="text-lg font-heading font-bold text-primary tabular-nums">
              {marginPct}%
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-3">{t.marginHint}</p>
          <input
            id="calc-margin"
            type="range"
            min={5}
            max={90}
            step={1}
            value={marginPct}
            onChange={(e) => {
              markStarted();
              setMarginPct(parseInt(e.target.value, 10));
            }}
            className="w-full accent-primary cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-gray-400 mt-1">
            <span>5%</span>
            <span>90%</span>
          </div>
        </div>

        {/* CR + Spend row */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="calc-cr" className="block text-base font-heading font-semibold mb-1">
              {t.crLabel}
            </label>
            <p className="text-xs text-gray-500 mb-2">{t.crHint}</p>
            <div className="relative">
              <input
                id="calc-cr"
                type="text"
                inputMode="decimal"
                value={crInput}
                onChange={(e) => {
                  markStarted();
                  setCrInput(e.target.value);
                }}
                className={`${inputClass} pr-8`}
                placeholder={t.crPlaceholder}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                %
              </span>
            </div>
          </div>
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
        </div>

        {/* Products */}
        <div>
          <label htmlFor="calc-products" className="block text-base font-heading font-semibold mb-1">
            {t.productsLabel}
          </label>
          <p className="text-xs text-gray-500 mb-2">{t.productsHint}</p>
          <input
            id="calc-products"
            type="text"
            inputMode="numeric"
            value={productsInput}
            onChange={(e) => {
              markStarted();
              setProductsInput(e.target.value);
            }}
            className={`${inputClass} max-w-[200px]`}
            placeholder={t.productsPlaceholder}
          />
        </div>

        {/* Advanced: CPC */}
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
              <label htmlFor="calc-cpc" className="block text-sm font-medium text-gray-700 mb-1">
                {t.cpcLabel}
              </label>
              <p className="text-xs text-gray-500 mb-2">{t.cpcHint}</p>
              <div className="relative max-w-[200px]">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                  {t.currency}
                </span>
                <input
                  id="calc-cpc"
                  type="text"
                  inputMode="decimal"
                  value={cpcInput}
                  onChange={(e) => {
                    markStarted();
                    setCpcInput(e.target.value);
                  }}
                  className={`${inputClass} pl-8`}
                  placeholder={t.cpcPlaceholder}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Result panel */}
      <div className="mt-8 bg-slate-900 text-white rounded-xl p-6 md:p-10">
        {hasCore ? (
          <>
            {/* Core: break-even ROAS */}
            <div className="text-center">
              <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
                {t.coreEyebrow}
              </p>
              <p className="text-5xl md:text-6xl font-heading font-bold mb-2 tabular-nums">
                {fmtNum(result.breakEvenROAS, t.localeCode)}x
              </p>
              <p className="text-slate-400 text-sm">{t.breakEvenSuffix}</p>
            </div>

            {/* Max CPA / CPC */}
            <div className="grid grid-cols-2 gap-4 mt-8 max-w-lg mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl md:text-3xl font-heading font-bold tabular-nums">
                  {t.currency}
                  {fmtMoney(result.maxCPA, t.localeCode)}
                </p>
                <p className="text-slate-300 text-xs font-semibold mt-1">{t.maxCpaLabel}</p>
                <p className="text-slate-500 text-[11px]">{t.maxCpaSub}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                <p className="text-2xl md:text-3xl font-heading font-bold tabular-nums">
                  {t.currency}
                  {fmtNum(result.maxCPC, t.localeCode, 2)}
                </p>
                <p className="text-slate-300 text-xs font-semibold mt-1">{t.maxCpcLabel}</p>
                <p className="text-slate-500 text-[11px]">{t.maxCpcSub}</p>
              </div>
            </div>

            {/* Projection */}
            {proj && (
              <div className="border-t border-white/10 mt-8 pt-8">
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-4 text-center">
                  {t.projEyebrow}
                </p>
                <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-6 text-center">
                  <div>
                    <p className="text-xl md:text-2xl font-heading font-bold tabular-nums">
                      {fmtMoney(proj.orders, t.localeCode)}
                    </p>
                    <p className="text-slate-400 text-[11px] mt-1">{t.projOrders}</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-heading font-bold tabular-nums">
                      {t.currency}
                      {fmtMoney(proj.revenue, t.localeCode)}
                    </p>
                    <p className="text-slate-400 text-[11px] mt-1">{t.projRevenue}</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-heading font-bold tabular-nums">
                      {fmtNum(proj.projectedROAS, t.localeCode)}x
                    </p>
                    <p className="text-slate-400 text-[11px] mt-1">{t.projRoas}</p>
                  </div>
                </div>

                {/* Net profit / loss */}
                <div
                  className={`rounded-xl p-6 text-center max-w-lg mx-auto ${
                    proj.profitable ? "bg-secondary/15 border border-secondary/40" : "bg-red-500/10 border border-red-500/40"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {proj.profitable ? (
                      <TrendingUp size={20} className="text-secondary" />
                    ) : (
                      <TrendingDown size={20} className="text-red-400" />
                    )}
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      {proj.profitable ? t.netProfitLabel : t.netLossLabel}
                    </p>
                  </div>
                  <p
                    className={`text-4xl md:text-5xl font-heading font-bold tabular-nums ${
                      proj.profitable ? "text-secondary" : "text-red-400"
                    }`}
                  >
                    {proj.profitable ? "+" : "−"}
                    {t.currency}
                    {fmtMoney(Math.abs(proj.netAfterAds), t.localeCode)}
                    <span className="text-xl text-slate-400 font-semibold">{t.perMonth}</span>
                  </p>
                  <p className="text-slate-300 text-sm mt-3">
                    {proj.profitable ? t.verdictProfit : t.verdictLoss}
                  </p>
                  <p className="text-slate-400 text-xs mt-2">
                    {proj.cpcHeadroomPct >= 0
                      ? `${t.cpcBelow} ${fmtNum(proj.cpcHeadroomPct, t.localeCode, 0)}% ${t.cpcBelowSuffix}`
                      : `${t.cpcAbove} ${t.currency}${fmtNum(result.maxCPC, t.localeCode, 2)}.`}
                  </p>
                </div>
              </div>
            )}
          </>
        ) : (
          <p className="text-slate-300 py-6 text-lg text-center">{t.enterToSee}</p>
        )}
      </div>

      {/* Channel recommendation */}
      {hasCore && rec && (
        <div className="mt-4 rounded-lg bg-blue-50 border border-blue-100 p-4 flex gap-3">
          <HelpCircle size={18} strokeWidth={1.5} className="text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">{t.recHeading}</p>
            <p className="text-sm text-gray-700 leading-relaxed">{rec}</p>
          </div>
        </div>
      )}

      {/* Transparency */}
      {hasCore && (
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
              <dl className="space-y-1.5 font-mono text-[13px]">
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-600">Break-even ROAS = 1 ÷ {marginPct}%</dt>
                  <dd className="font-semibold tabular-nums">{fmtNum(result.breakEvenROAS, t.localeCode)}x</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-600">
                    Max CPA = {t.currency}{fmtMoney(aov, t.localeCode)} × {marginPct}%
                  </dt>
                  <dd className="font-semibold tabular-nums">{t.currency}{fmtMoney(result.maxCPA, t.localeCode)}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-600">Max CPC = Max CPA × {cr}%</dt>
                  <dd className="font-semibold tabular-nums">{t.currency}{fmtNum(result.maxCPC, t.localeCode, 2)}</dd>
                </div>
                {proj && (
                  <>
                    <div className="flex justify-between gap-4">
                      <dt className="text-gray-600">
                        ROAS = {t.currency}{fmtMoney(aov, t.localeCode)} × {cr}% ÷ {t.currency}{fmtNum(cpc!, t.localeCode, 2)}
                      </dt>
                      <dd className="font-semibold tabular-nums">{fmtNum(proj.projectedROAS, t.localeCode)}x</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-t border-gray-200 pt-1.5 mt-1.5">
                      <dt className="font-semibold text-gray-900">
                        {t.isEn ? "Net = spend × (ROAS × margin − 1)" : "Neto = budžet × (ROAS × marža − 1)"}
                      </dt>
                      <dd className={`font-bold tabular-nums ${proj.profitable ? "text-secondary" : "text-red-500"}`}>
                        {proj.profitable ? "+" : "−"}{t.currency}{fmtMoney(Math.abs(proj.netAfterAds), t.localeCode)}
                      </dd>
                    </div>
                  </>
                )}
              </dl>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed font-sans">{t.howNote}</p>
            </div>
          )}
        </div>
      )}

      {/* Lead form OR success */}
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
