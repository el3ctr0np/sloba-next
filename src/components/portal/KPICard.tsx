import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface KPICardProps {
  label: string;
  value: string | number | null | undefined;
  previousValue?: number | null;
  format?: "number" | "currency" | "percentage" | "decimal";
  icon?: React.ReactNode;
}

function formatValue(
  value: string | number | null | undefined,
  format: KPICardProps["format"] = "number"
): string {
  if (value === null || value === undefined) return "—";
  if (typeof value === "string") return value;
  switch (format) {
    case "currency":
      return `€${value.toLocaleString("sr-RS", { minimumFractionDigits: 0 })}`;
    case "percentage":
      return `${value.toFixed(1)}%`;
    case "decimal":
      return value.toFixed(2);
    default:
      return value.toLocaleString("sr-RS");
  }
}

function getDelta(
  current: string | number | null | undefined,
  previous?: number | null
): { value: number; direction: "up" | "down" | "neutral" } | null {
  if (current === null || current === undefined || typeof current === "string" || !previous) return null;
  const pct = ((current - previous) / previous) * 100;
  return {
    value: Math.abs(pct),
    direction: pct > 1 ? "up" : pct < -1 ? "down" : "neutral",
  };
}

export function KPICard({ label, value, previousValue, format, icon }: KPICardProps) {
  const delta = getDelta(value, previousValue);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-500">{label}</span>
        {icon && <span className="text-gray-400">{icon}</span>}
      </div>

      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold text-gray-900">
          {formatValue(value, format)}
        </span>

        {delta && (
          <div
            className={`flex items-center gap-1 text-sm font-medium ${
              delta.direction === "up"
                ? "text-green-600"
                : delta.direction === "down"
                  ? "text-red-600"
                  : "text-gray-400"
            }`}
          >
            {delta.direction === "up" && <TrendingUp className="w-4 h-4" />}
            {delta.direction === "down" && <TrendingDown className="w-4 h-4" />}
            {delta.direction === "neutral" && <Minus className="w-4 h-4" />}
            <span>{delta.value.toFixed(1)}%</span>
          </div>
        )}
      </div>

      {previousValue !== undefined && (
        <p className="text-xs text-gray-400 mt-2">
          Prethodni mesec: {formatValue(previousValue, format)}
        </p>
      )}
    </div>
  );
}
