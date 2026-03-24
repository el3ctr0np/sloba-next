import { redirect } from "next/navigation";
import { getPortalSession } from "@/lib/portal-auth";
import { getClientReports } from "@/lib/portal-queries";
import { PortalNav } from "@/components/portal/PortalNav";
import { ReportCard } from "@/components/portal/ReportCard";
import { FileText } from "lucide-react";

export default async function PortalReports() {
  const session = await getPortalSession();
  if (!session) redirect("/sr/portal");

  const reports = await getClientReports(session.clientId);

  return (
    <div className="min-h-screen bg-gray-50">
      <PortalNav clientName={session.clientName} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Izveštaji</h1>
          <p className="text-gray-500 mt-1">
            Svi vaši izveštaji na jednom mestu
          </p>
        </div>

        {reports && reports.length > 0 ? (
          <div className="space-y-3">
            {reports.map((report: any) => (
              <ReportCard
                key={report._id}
                title={report.title}
                period={report.period}
                reportType={report.reportType}
                description={report.description}
                publishedAt={report.publishedAt}
                fileUrl={report.fileUrl}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">
              Još nema izveštaja. Biće dostupni nakon prvog meseca saradnje.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
