"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface MetricChartProps {
  data: Array<{
    period: string;
    [key: string]: string | number | undefined;
  }>;
  dataKey: string;
  label: string;
  color?: string;
}

function formatPeriod(period: string): string {
  const [year, month] = period.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "Maj", "Jun",
    "Jul", "Avg", "Sep", "Okt", "Nov", "Dec",
  ];
  return `${months[parseInt(month) - 1]} ${year.slice(2)}`;
}

export function MetricChart({
  data,
  dataKey,
  label,
  color = "#1a73e8",
}: MetricChartProps) {
  const chartData = [...data]
    .filter((d) => d[dataKey] !== undefined && d[dataKey] !== null)
    .reverse()
    .map((d) => ({
      ...d,
      periodLabel: formatPeriod(d.period),
    }));

  if (chartData.length < 2) {
    return (
      <div>
        <p className="text-slate-500 text-sm text-center py-8">
          Potrebna su bar 2 meseca podataka za prikaz grafikona.
        </p>
      </div>
    );
  }

  return (
    <div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
          <XAxis
            dataKey="periodLabel"
            tick={{ fontSize: 12, fill: "#64748b" }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#64748b" }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.1)",
              backgroundColor: "#1e293b",
              color: "#e2e8f0",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.3)",
            }}
          />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
            dot={{ r: 4, fill: color }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
