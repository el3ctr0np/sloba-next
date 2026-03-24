import { redirect } from "next/navigation";
import { getPortalSession } from "@/lib/portal-auth";
import { getClientProfile, getClientMetrics } from "@/lib/portal-queries";
import { PortalNav } from "@/components/portal/PortalNav";
import { KPICard } from "@/components/portal/KPICard";
import { MetricChart } from "@/components/portal/MetricChart";
import { Phone, Briefcase, DollarSign, Target, ShoppingCart, TrendingUp } from "lucide-react";

// Merge admin + client metrics for same period
function mergeMetrics(metrics: any[]) {
  const byPeriod = new Map<string, any>();

  for (const m of metrics) {
    const existing = byPeriod.get(m.period);
    if (existing) {
      // Merge: keep non-null values from both
      for (const key of Object.keys(m)) {
        if (m[key] !== null && m[key] !== undefined && key !== "_id" && key !== "source") {
          existing[key] = m[key];
        }
      }
    } else {
      byPeriod.set(m.period, { ...m });
    }
  }

  return Array.from(byPeriod.values()).sort((a, b) =>
    b.period.localeCompare(a.period)
  );
}

export default async function PortalDashboard() {
  const session = await getPortalSession();
  if (!session) redirect("/sr/portal");

  const [profile, rawMetrics] = await Promise.all([
    getClientProfile(session.clientId),
    getClientMetrics(session.clientId),
  ]);

  if (!profile) redirect("/sr/portal");

  const metrics = mergeMetrics(rawMetrics || []);
  const current = metrics[0];
  const previous = metrics[1];

  // Determine chart data key based on client type and available data
  const isLocalServices = profile.industry === "local_services";
  const hasCallData = metrics.some((m: any) => m.phoneCalls && m.phoneCalls > 0);
  const chartKey = isLocalServices
    ? (hasCallData ? "phoneCalls" : "adSpend")
    : "revenue";
  const chartLabel = isLocalServices
    ? (hasCallData ? "Telefonski pozivi po mesecu" : "Ad Spend po mesecu (EUR)")
    : "Prihod po mesecu (EUR)";

  return (
    <div className="min-h-screen bg-gray-50">
      <PortalNav clientName={session.clientName} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Dobrodošli, {session.clientName}
          </h1>
          <p className="text-gray-500 mt-1">
            Pregled performansi vaših kampanja
          </p>
        </div>

        {/* KPI Cards */}
        {current ? (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {isLocalServices ? (
                <>
                  <KPICard
                    label="Telefonski pozivi"
                    value={current.phoneCalls ?? 0}
                    previousValue={previous?.phoneCalls}
                    icon={<Phone className="w-5 h-5" />}
                  />
                  <KPICard
                    label="Završeni poslovi"
                    value={current.jobsCompleted ?? 0}
                    previousValue={previous?.jobsCompleted}
                    icon={<Briefcase className="w-5 h-5" />}
                  />
                  <KPICard
                    label="Ad Spend"
                    value={current.adSpend ?? 0}
                    previousValue={previous?.adSpend}
                    format="currency"
                    icon={<DollarSign className="w-5 h-5" />}
                  />
                  <KPICard
                    label="Cena po pozivu"
                    value={current.costPerCall ?? 0}
                    previousValue={previous?.costPerCall}
                    format="currency"
                    icon={<Target className="w-5 h-5" />}
                  />
                </>
              ) : (
                <>
                  <KPICard
                    label="Prihod"
                    value={current.revenue ?? 0}
                    previousValue={previous?.revenue}
                    format="currency"
                    icon={<DollarSign className="w-5 h-5" />}
                  />
                  <KPICard
                    label="ROAS"
                    value={current.roas ?? 0}
                    previousValue={previous?.roas}
                    format="decimal"
                    icon={<TrendingUp className="w-5 h-5" />}
                  />
                  <KPICard
                    label="Konverzije"
                    value={current.conversions ?? 0}
                    previousValue={previous?.conversions}
                    icon={<ShoppingCart className="w-5 h-5" />}
                  />
                  <KPICard
                    label="Ad Spend"
                    value={current.adSpend ?? 0}
                    previousValue={previous?.adSpend}
                    format="currency"
                    icon={<DollarSign className="w-5 h-5" />}
                  />
                </>
              )}
            </div>

            {/* Chart */}
            <div className="mb-8">
              <MetricChart
                data={metrics}
                dataKey={chartKey}
                label={chartLabel}
              />
            </div>

            {/* Client note */}
            {current.clientNote && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
                <h3 className="text-sm font-medium text-blue-800 mb-1">
                  Poruka od vašeg menadžera
                </h3>
                <p className="text-sm text-blue-700">{current.clientNote}</p>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <p className="text-gray-500">
              Još nema podataka za prikaz. Podaci će biti dostupni nakon prvog
              meseca saradnje.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
