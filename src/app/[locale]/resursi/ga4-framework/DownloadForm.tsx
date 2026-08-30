"use client";

import { useRef, useState } from "react";
import { CheckCircle, Download, Mail } from "lucide-react";

// --- GTM dataLayer helper -------------------------------------------------
const FORM_NAME = "ga4_audience_framework";

type DataLayerWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

function pushDataLayer(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}

// The file is served straight from /public — the download works whether or not
// the autoresponder email ever lands, so nobody is left waiting on an inbox.
const DOWNLOAD_PATH = "/downloads/ga4-audience-framework.zip";
const DOWNLOAD_URL = `https://www.slobodan-jelisavac.com${DOWNLOAD_PATH}`;

const copy = {
  en: {
    kicker: "Free download",
    heading: "Get the executable version",
    intro:
      "Markdown files you drop into Claude or ChatGPT so it builds the lists with you, plus a PDF of the same framework to read. One download, both formats.",
    label: "Your email",
    placeholder: "you@yourstore.com",
    button: "Send me the framework",
    sending: "Sending…",
    privacy:
      "Email only, because that is all I need to send you the file. No sequence you have to escape from.",
    successTitle: "It is yours — the download starts from the button below.",
    successBody:
      "A copy is on its way to your inbox as well. If it is not there in a few minutes, check spam or just use this button.",
    successButton: "Download the package",
    error: "That did not go through. Try again, or email me directly at info@slobodan-jelisavac.com.",
  },
  sr: {
    kicker: "Besplatno preuzimanje",
    heading: "Preuzmi izvršnu verziju",
    intro:
      "Markdown fajlovi koje ubaciš u Claude ili ChatGPT pa ti liste gradi sa tobom, plus PDF istog frameworka za čitanje. Jedno preuzimanje, oba formata.",
    label: "Tvoj email",
    placeholder: "ti@tvojaprodavnica.rs",
    button: "Pošalji mi framework",
    sending: "Šaljem...",
    privacy:
      "Samo email, jer mi ništa drugo i ne treba da bih ti poslao fajl. Bez niza mejlova iz kog moraš da bežiš.",
    successTitle: "Tvoje je - preuzimanje kreće sa dugmeta ispod.",
    successBody:
      "Kopija stiže i na mejl. Ako je nema za koji minut, proveri spam ili prosto iskoristi ovo dugme.",
    successButton: "Preuzmi paket",
    error: "Nije prošlo. Probaj ponovo ili mi piši direktno na info@slobodan-jelisavac.com.",
  },
};

export function DownloadForm({ locale }: { locale: string }) {
  const t = locale === "en" ? copy.en : copy.sr;
  const isEn = locale === "en";

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const formStartedRef = useRef(false);

  const markStarted = () => {
    if (!formStartedRef.current) {
      pushDataLayer("form_start", { form_name: FORM_NAME });
      formStartedRef.current = true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    setIsSubmitting(true);
    setHasError(false);

    const autoresponse = isEn
      ? `Here is the GA4 Audience Framework: ${DOWNLOAD_URL}\n\nStart with README.md, then build the lifecycle lists today rather than tomorrow — GA4 audiences only fill from the moment you create them, plus roughly 30 days of backfill, so the list you build now is usable in two to four weeks.\n\nSlobodan Jelisavac\nslobodan-jelisavac.com`
      : `Evo GA4 Audience Framework paketa: ${DOWNLOAD_URL}\n\nKreni od README.md, pa napravi lifecycle liste danas a ne sutra - GA4 publike se pune tek od trenutka kreiranja, uz oko 30 dana unazad, pa je lista koju napraviš sada upotrebljiva za dve do četiri nedelje.\n\nSlobodan Jelisavac\nslobodan-jelisavac.com`;

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@slobodan-jelisavac.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            Email: email,
            Preuzimanje: "GA4 Audience Framework",
            Jezik: isEn ? "EN" : "SR",
            _subject: `GA4 Audience Framework - preuzimanje - ${email}`,
            _template: "table",
            _autoresponse: autoresponse,
          }),
        }
      );

      if (response.ok) {
        pushDataLayer("lead_submit", { form_name: FORM_NAME });
        try {
          sessionStorage.setItem("dj_lead_form", FORM_NAME);
        } catch {
          // Ignore sessionStorage errors (private mode etc.)
        }
        setIsSubmitted(true);
      } else {
        setHasError(true);
      }
    } catch {
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white text-gray-900 rounded-xl p-6 md:p-10 shadow-card border border-gray-200">
        <CheckCircle size={32} strokeWidth={1.5} className="text-green-600 mb-4" />
        <h2 className="text-xl md:text-2xl font-heading font-bold mb-3">{t.successTitle}</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">{t.successBody}</p>
        <a
          href={DOWNLOAD_PATH}
          download
          onClick={() => pushDataLayer("file_download", { form_name: FORM_NAME })}
          className="inline-flex items-center gap-2 bg-primary text-white font-heading font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          <Download size={18} strokeWidth={2} />
          {t.successButton}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900 rounded-xl p-6 md:p-10 shadow-card border border-gray-200">
      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">{t.kicker}</p>
      <h2 className="text-xl md:text-2xl font-heading font-bold mb-3">{t.heading}</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">{t.intro}</p>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <div>
          <label htmlFor="ga4-email" className="block text-base font-heading font-semibold mb-1">
            {t.label}
          </label>
          <input
            id="ga4-email"
            type="email"
            required
            value={email}
            onFocus={markStarted}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.placeholder}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !email}
          className="inline-flex items-center justify-center gap-2 bg-primary text-white font-heading font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Mail size={18} strokeWidth={2} />
          {isSubmitting ? t.sending : t.button}
        </button>

        {hasError && <p className="text-sm text-red-600">{t.error}</p>}

        <p className="text-sm text-gray-500 leading-relaxed">{t.privacy}</p>
      </form>
    </div>
  );
}
