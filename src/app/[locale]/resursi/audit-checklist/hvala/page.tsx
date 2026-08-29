import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/metadata";
import ChecklistDownloadTracker from "@/components/ChecklistDownloadTracker";

type Props = {
  params: Promise<{ locale: string }>;
};

const FILE_PATH = "/downloads/google-ads-audit-checklist.xlsx";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const base =
    locale === "en"
      ? buildMetadata({
          title: "Your Audit Checklist | Slobodan Jelisavac",
          description:
            "Download the Google Ads audit checklist template and start reviewing your account.",
          locale,
          path: "/resources/audit-checklist/thank-you",
          srPath: "/resursi/audit-checklist/hvala",
        })
      : buildMetadata({
          title: "Vaša Audit Checklista | Slobodan Jelisavac",
          description:
            "Preuzmite Google Ads audit checklist template i krenite sa proverom naloga.",
          locale,
          path: "/resursi/audit-checklist/hvala",
        });

  // Gated deliverable: keep the download page out of the index so the
  // form stays the only public way in.
  return { ...base, robots: { index: false, follow: true } };
}

export default async function ChecklistThankYouPage({ params }: Props) {
  const { locale } = await params;
  const sr = locale !== "en";

  return (
    <main className="min-h-[70vh] bg-gray-50">
      <ChecklistDownloadTracker />
      <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-card p-8 md:p-10 text-center">
          <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto mb-6 text-2xl">
            ✓
          </div>
          <h1 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-3">
            {sr ? "Checklista je spremna" : "Your checklist is ready"}
          </h1>
          <p className="text-gray-600 mb-8">
            {sr
              ? "Preuzmite fajl i otvorite ga u Google Sheets (File > Import) ili Excelu. Svaka stavka ima kolonu kako se proverava, šta je red flag i prioritet."
              : "Download the file and open it in Google Sheets (File > Import) or Excel. Every item has a how-to-check column, a red-flag column, and a priority."}
          </p>

          <a
            href={FILE_PATH}
            download
            className="btn-secondary inline-block !py-3.5 px-8 text-base font-semibold"
          >
            {sr ? "Preuzmite checklistu (.xlsx)" : "Download the checklist (.xlsx)"}
          </a>

          <p className="text-xs text-gray-400 mt-4">
            {sr
              ? "Radi u Google Sheets, Excelu i LibreOffice-u."
              : "Works in Google Sheets, Excel and LibreOffice."}
          </p>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 mt-8 text-center">
          <p className="font-heading font-bold text-xl mb-3">
            {sr
              ? "Zapeli ste na nekoj stavci?"
              : "Stuck on one of the checkpoints?"}
          </p>
          <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
            {sr
              ? "Checklista pokazuje šta da proverite. Ako želite da neko prođe kroz nalog umesto vas i vrati konkretan plan, to je plaćeni audit."
              : "The checklist shows you what to look at. If you want someone to go through the account for you and come back with a concrete plan, that is the paid audit."}
          </p>
          <Link
            href="/usluge/google-ads-audit"
            className="inline-block bg-white text-gray-900 font-semibold rounded-lg px-6 py-3 hover:bg-gray-100 transition-colors no-underline"
          >
            {sr ? "Pogledajte plaćeni audit" : "See the paid audit"} →
          </Link>
        </div>
      </div>
    </main>
  );
}
