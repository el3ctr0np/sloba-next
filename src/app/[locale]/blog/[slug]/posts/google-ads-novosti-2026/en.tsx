import { Link } from "@/i18n/navigation";

export default function GoogleAdsUpdates2026EN() {
  return (
    <>
      <div className="bg-slate-900 text-white border border-gray-200 rounded-xl p-6 md:p-8 my-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Note</p>
        <p className="text-lg md:text-xl font-heading font-semibold leading-snug mb-4">
          Full English version coming soon. The complete 2026 Google Ads updates log is currently available in Serbian.
        </p>
      </div>

      <p>
        This is a monthly-updated living post covering all major Google Ads changes in 2026 — Search, Shopping, Performance Max, AI Max, and Merchant Center. Topics covered so far: Google Shopping launch in Serbia (November 2026), AI Max Text Guidelines global beta, PMax Channel Performance transparency, Google Ads Editor 2.12, Campaign Total Budgets, and Universal Commerce Protocol.
      </p>
      <p>
        The full guide is available in Serbian:
      </p>
      <p>
        <Link href={{ pathname: "/blog/[slug]", params: { slug: "google-ads-novosti-2026" } }} className="underline font-medium">
          Pročitajte sve Google Ads novosti za 2026 na srpskom →
        </Link>
      </p>
      <p>
        For questions in English, feel free to{" "}
        <Link href="/kontakt" className="underline font-medium">
          reach out directly
        </Link>
        .
      </p>
    </>
  );
}
