"use client";

import { Download } from "lucide-react";

interface DataTableProps {
  data: Array<Record<string, any>>;
  columns: Array<{
    key: string;
    label: string;
    format?: "number" | "currency" | "decimal";
  }>;
  clientName: string;
}

function formatCell(value: any, format?: string): string {
  if (value === null || value === undefined) return "—";
  switch (format) {
    case "currency":
      return `€${Number(value).toLocaleString("sr-RS", { minimumFractionDigits: 0 })}`;
    case "decimal":
      return Number(value).toFixed(2);
    case "number":
      return Number(value).toLocaleString("sr-RS");
    default:
      return String(value);
  }
}

export function DataTable({ data, columns, clientName }: DataTableProps) {
  function exportCSV() {
    const headers = ["Period", ...columns.map((c) => c.label)];
    const rows = data.map((row) => [
      row.period,
      ...columns.map((c) => row[c.key] ?? ""),
    ]);

    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${clientName}-podaci.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={exportCSV}
          className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
        >
          <Download className="w-4 h-4" />
          Izvezi CSV
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-500">
                Period
              </th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="text-right py-3 px-4 font-medium text-gray-500"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={row.period + i}
                className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
              >
                <td className="py-3 px-4 font-medium text-gray-900">
                  {row.period}
                </td>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="text-right py-3 px-4 text-gray-600"
                  >
                    {formatCell(row[col.key], col.format)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
