import { redirect, notFound } from "next/navigation";
import { cookies } from "next/headers";
import { getClientMetrics, getClientReports, portalClient } from "@/lib/portal-queries";
import { verifySessionToken } from "@/lib/portal-auth";
import { MetricChart } from "@/components/portal/MetricChart";
import {
  Phone, Briefcase, DollarSign, Target, TrendingUp, TrendingDown,
  Minus, FileText, Download, ArrowUpRight, BarChart3, ShoppingCart,
  Calendar, MessageSquare, Activity,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

// --- Helpers ---

function mergeMetrics(metrics: any[]) {
  const byPeriod = new Map<string, any>();
  for (const m of metrics) {
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
  return Array.from(byPeriod.values()).sort((a, b) => b.period.localeCompare(a.period));
}

function formatPeriodLabel(period: string) {
  const [year, month] = period.split("-");
  const months = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"];
  return `${months[parseInt(month) - 1]} ${year}`;
}

function pctChange(current: number | null, previous: number | null) {
  if (!current || !previous || previous === 0) return null;
  return ((current - previous) / previous) * 100;
}

// --- Data fetching ---

async function getClientBySlug(slug: string) {
  return portalClient.fetch(
    `*[_type == "portalClient" && slug.current == $slug && isActive == true][0] {
      _id, name, industry, primaryKPI, "logoUrl": logo.asset->url
    }`,
    { slug }
  );
}

// --- Page ---

export default async function ClientReportPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;

  // Auth check
  const cookieStore = await cookies();
  const token = cookieStore.get("portal_session")?.value;
  if (!token) redirect(`/sr/klijenti-login?next=${slug}`);

  const session = await verifySessionToken(token);
  if (!session) redirect(`/sr/klijenti-login?next=${slug}`);

  // Fetch data
  const profile = await getClientBySlug(slug);
  if (!profile) notFound();

  // Verify this client matches the session
  if (profile._id !== session.clientId) notFound();

  const [rawMetrics, reports] = await Promise.all([
    getClientMetrics(profile._id, 12),
    getClientReports(profile._id),
  ]);

  const metrics = mergeMetrics(rawMetrics || []);
  const current = metrics[0];
  const previous = metrics[1];
  const isLocal = profile.industry === "local_services";

  const now = new Date();
  const reportDate = now.toLocaleDateString("sr-RS", {
    day: "numeric", month: "long", year: "numeric",
  });

  // Choose chart metric
  const hasCallData = metrics.some((m: any) => m.phoneCalls && m.phoneCalls > 0);
  const chartConfigs = isLocal
    ? [
        { key: hasCallData ? "phoneCalls" : "clicks", label: hasCallData ? "Pozivi" : "Klikovi", color: "#1a73e8" },
        { key: "adSpend", label: "Ad Spend (EUR)", color: "#34a853" },
      ]
    : [
        { key: "revenue", label: "Prihod (EUR)", color: "#1a73e8" },
        { key: "adSpend", label: "Ad Spend (EUR)", color: "#34a853" },
      ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">

      {/* ====== HEADER ====== */}
      <header className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">{profile.name}</h1>
              <p className="text-sm text-slate-400">Performance Report</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500">Ažurirano</p>
            <p className="text-sm text-slate-300">{reportDate}</p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-10">

        {/* ====== PERIOD BANNER ====== */}
        {current && (
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-medium text-sm tracking-wide uppercase">
              {formatPeriodLabel(current.period)}
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
        )}

        {/* ====== KPI GRID ====== */}
        {current && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {isLocal ? (
              <>
                <KPI label="Pozivi" value={current.phoneCalls} prev={previous?.phoneCalls} icon={<Phone className="w-5 h-5" />} />
                <KPI label="Završeni poslovi" value={current.jobsCompleted} prev={previous?.jobsCompleted} icon={<Briefcase className="w-5 h-5" />} />
                <KPI label="Ad Spend" value={current.adSpend} prev={previous?.adSpend} format="currency" icon={<DollarSign className="w-5 h-5" />} />
                <KPI label="Cena po pozivu" value={current.adSpend && current.phoneCalls ? Math.round(current.adSpend / current.phoneCalls) : null} prev={previous?.costPerCall} format="currency" icon={<Target className="w-5 h-5" />} />
              </>
            ) : (
              <>
                <KPI label="Prihod" value={current.revenue} prev={previous?.revenue} format="currency" icon={<DollarSign className="w-5 h-5" />} />
                <KPI label="ROAS" value={current.roas} prev={previous?.roas} format="decimal" icon={<TrendingUp className="w-5 h-5" />} />
                <KPI label="Konverzije" value={current.conversions} prev={previous?.conversions} icon={<ShoppingCart className="w-5 h-5" />} />
                <KPI label="Ad Spend" value={current.adSpend} prev={previous?.adSpend} format="currency" icon={<DollarSign className="w-5 h-5" />} />
              </>
            )}
          </div>
        )}

        {/* ====== CHARTS ====== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {chartConfigs.map((cfg) => (
            <div key={cfg.key} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-sm font-medium text-slate-400 mb-4">{cfg.label}</h3>
              <MetricChart data={metrics} dataKey={cfg.key} label={cfg.label} color={cfg.color} />
            </div>
          ))}
        </div>

        {/* ====== CAMPAIGN STATS TABLE ====== */}
        {current && (current.impressions || current.clicks) && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-4 h-4 text-blue-400" />
              <h2 className="text-sm font-medium text-slate-400 uppercase tracking-wide">Detaljni pregled</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 text-slate-500 font-medium">Period</th>
                    <th className="text-right py-3 text-slate-500 font-medium">Impressions</th>
                    <th className="text-right py-3 text-slate-500 font-medium">Klikovi</th>
                    <th className="text-right py-3 text-slate-500 font-medium">CTR</th>
                    <th className="text-right py-3 text-slate-500 font-medium">Ad Spend</th>
                    {isLocal && <th className="text-right py-3 text-slate-500 font-medium">Pozivi</th>}
                    {isLocal && <th className="text-right py-3 text-slate-500 font-medium">Poslovi</th>}
                  </tr>
                </thead>
                <tbody>
                  {metrics.slice(0, 6).map((m: any, i: number) => (
                    <tr key={m.period} className={`border-b border-white/5 ${i === 0 ? "text-white" : "text-slate-400"}`}>
                      <td className="py-3 font-medium">{formatPeriodLabel(m.period)}</td>
                      <td className="text-right py-3">{m.impressions?.toLocaleString("sr-RS") ?? "—"}</td>
                      <td className="text-right py-3">{m.clicks?.toLocaleString("sr-RS") ?? "—"}</td>
                      <td className="text-right py-3">
                        {m.impressions && m.clicks ? ((m.clicks / m.impressions) * 100).toFixed(1) + "%" : "—"}
                      </td>
                      <td className="text-right py-3">{m.adSpend ? `€${m.adSpend.toLocaleString("sr-RS")}` : "—"}</td>
                      {isLocal && <td className="text-right py-3">{m.phoneCalls ?? "—"}</td>}
                      {isLocal && <td className="text-right py-3">{m.jobsCompleted ?? "—"}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ====== MANAGER NOTE ====== */}
        {current?.clientNote && (
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-blue-300 mb-1">Komentar za {formatPeriodLabel(current.period)}</h3>
                <p className="text-slate-300 leading-relaxed">{current.clientNote}</p>
              </div>
            </div>
          </div>
        )}

        {/* ====== REPORTS / DOWNLOADS ====== */}
        {reports && reports.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-4 h-4 text-blue-400" />
              <h2 className="text-sm font-medium text-slate-400 uppercase tracking-wide">Izveštaji</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reports.map((r: any) => (
                <a
                  key={r._id}
                  href={r.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{r.title}</p>
                    <p className="text-xs text-slate-500">{r.period}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ====== FOOTER ====== */}
        <footer className="border-t border-white/10 pt-8 pb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">DJ</span>
            </div>
            <div>
              <p className="text-sm text-slate-400">Digital Jelisavac</p>
              <p className="text-xs text-slate-600">Google Ads Consulting</p>
            </div>
          </div>
          <a href="/sr/kontakt" className="text-xs text-slate-600 hover:text-blue-400 transition-colors">
            Kontakt
          </a>
        </footer>
      </main>
    </div>
  );
}

// ====== KPI CARD COMPONENT (inline, dark themed) ======

function KPI({
  label, value, prev, format, icon,
}: {
  label: string;
  value: number | null | undefined;
  prev?: number | null;
  format?: "currency" | "decimal" | "number";
  icon: React.ReactNode;
}) {
  const displayValue = value === null || value === undefined ? "—" :
    format === "currency" ? `€${value.toLocaleString("sr-RS")}` :
    format === "decimal" ? value.toFixed(2) :
    value.toLocaleString("sr-RS");

  const delta = pctChange(value ?? null, prev ?? null);

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{label}</span>
        <span className="text-slate-600">{icon}</span>
      </div>
      <p className="text-2xl font-bold">{displayValue}</p>
      {delta !== null && (
        <div className={`flex items-center gap-1 mt-2 text-xs font-medium ${delta > 0 ? "text-emerald-400" : delta < 0 ? "text-red-400" : "text-slate-500"}`}>
          {delta > 0 ? <TrendingUp className="w-3 h-3" /> : delta < 0 ? <TrendingDown className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
          <span>{Math.abs(delta).toFixed(1)}% vs prethodni mesec</span>
        </div>
      )}
    </div>
  );
}
