import { redirect } from "next/navigation";
import { getPortalSession } from "@/lib/portal-auth";
import { getClientProfile, getClientMetrics } from "@/lib/portal-queries";
import { PortalNav } from "@/components/portal/PortalNav";
import { DataTable } from "@/components/portal/DataTable";
import { History } from "lucide-react";

export default async function PortalHistory() {
  const session = await getPortalSession();
  if (!session) redirect("/sr/portal");

  const [profile, metrics] = await Promise.all([
    getClientProfile(session.clientId),
    getClientMetrics(session.clientId, 50),
  ]);

  if (!profile) redirect("/sr/portal");

  const isLocalServices = profile.industry === "local_services";

  // Merge metrics from same period (admin + client)
  const byPeriod = new Map<string, any>();
  for (const m of metrics || []) {
    const existing = byPeriod.get(m.period);
    if (existing) {
      for (const key of Object.keys(m)) {
        if (m[key] !== null && m[key] !== undefined && key !== "_id" && key !== "source") {
          existing[key] = m[key];
        }
      }
    } else {
      byPeriod.set(m.period, { ...m });
    }
  }
  const mergedMetrics = Array.from(byPeriod.values()).sort((a, b) =>
    b.period.localeCompare(a.period)
  );

  const columns = isLocalServices
    ? [
        { key: "phoneCalls", label: "Pozivi", format: "number" as const },
        { key: "jobsCompleted", label: "Poslovi", format: "number" as const },
        { key: "adSpend", label: "Ad Spend", format: "currency" as const },
        { key: "clicks", label: "Klikovi", format: "number" as const },
        { key: "conversions", label: "Konverzije", format: "number" as const },
        { key: "costPerCall", label: "Cena/poziv", format: "currency" as const },
      ]
    : [
        { key: "revenue", label: "Prihod", format: "currency" as const },
        { key: "roas", label: "ROAS", format: "decimal" as const },
        { key: "transactions", label: "Transakcije", format: "number" as const },
        { key: "adSpend", label: "Ad Spend", format: "currency" as const },
        { key: "clicks", label: "Klikovi", format: "number" as const },
        { key: "conversions", label: "Konverzije", format: "number" as const },
      ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PortalNav clientName={session.clientName} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Istorija podataka</h1>
          <p className="text-gray-500 mt-1">
            Pregled svih mesečnih podataka
          </p>
        </div>

        {mergedMetrics.length > 0 ? (
          <DataTable
            data={mergedMetrics}
            columns={columns}
            clientName={session.clientName}
          />
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <History className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">
              Još nema istorijskih podataka za prikaz.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
