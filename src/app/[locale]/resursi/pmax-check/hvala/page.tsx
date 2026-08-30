import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/metadata";
import AuditReportTracker from "@/components/audit/AuditReportTracker";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const base =
    locale === "en"
      ? buildMetadata({
          title: "Your PMax Check Report Is On Its Way | Slobodan Jelisavac",
          description:
            "Your Performance Max score and flagged checkpoints are with me. I read every one and reply personally.",
          locale,
          path: "/resources/pmax-check/thank-you",
          srPath: "/resursi/pmax-check/hvala",
        })
      : buildMetadata({
          title: "Vaš PMax Check izveštaj je poslat | Slobodan Jelisavac",
          description:
            "Vaš Performance Max skor i označene tačke su stigli do mene. Svaki pročitam i odgovorim lično.",
          locale,
          path: "/resources/pmax-check/thank-you",
          srPath: "/resursi/pmax-check/hvala",
        });

  // Post-submit page: keep it out of the index so the tool stays the way in.
  return { ...base, robots: { index: false, follow: true } };
}

export default async function PmaxCheckThankYouPage({ params }: Props) {
  const { locale } = await params;
  const sr = locale !== "en";

  return (
    <main className="min-h-[70vh] bg-gray-50">
      <AuditReportTracker eventPrefix="pmax_check" formName="pmax_check_report" />

      <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-card p-8 md:p-10 text-center">
          <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto mb-6 text-2xl">
            ✓
          </div>
          <h1 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-3">
            {sr ? "Izveštaj je stigao do mene" : "Your report reached me"}
          </h1>
          <p className="text-gray-600 mb-8">
            {sr
              ? "Uz vaš email stigli su i skor, raspored po grupama i sve tačke koje ste označili kao problem ili kao Ne znam. Pročitam svaki izveštaj i odgovorim lično, obično u roku od jednog radnog dana."
              : "Your score, the group breakdown and every checkpoint you flagged came through with your email. I read each one and reply personally, usually within one working day."}
          </p>

          <Link
            href="/resursi/pmax-check"
            className="btn-secondary inline-block !py-3.5 px-8 text-base font-semibold no-underline"
          >
            {sr ? "Nazad na PMax Check" : "Back to PMax Check"}
          </Link>

          <p className="text-xs text-gray-400 mt-4 mb-0">
            {sr
              ? "Vaši odgovori ostaju sačuvani u pregledaču, pa možete da ih doradite i pošaljete ponovo."
              : "Your answers stay saved in this browser, so you can revise them and send again."}
          </p>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 mt-8 text-center">
          <p className="font-heading font-bold text-xl mb-3">
            {sr
              ? "Ne želite da čekate email?"
              : "Would rather not wait for an email?"}
          </p>
          <p className="text-slate-300 text-sm mb-6 max-w-md mx-auto">
            {sr
              ? "Provera pokazuje šta da gledate. Plaćeni audit je taj posao urađen umesto vas: prolazim kroz nalog i vraćam nalaz sa planom po prioritetu. Cena je od €450."
              : "The check shows you what to look at. The paid audit is that work done for you: I go through the account and come back with the findings and a plan in priority order. It starts from $500."}
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
