import { months, chatgptAdsSeries } from "./chatgpt-ads-search-demand-2026-data";

// Small multiples: same time axis (Sep 2022 - Aug 2026), one panel per market,
// each with its own y-axis. US peaks two orders of magnitude above DE, so one
// shared linear axis would flatten UK and DE to near-zero for most of the
// period (per Opus chart spec: small multiples or an indexed chart, never two
// y-axes crammed onto one chart).
const MARKETS: { key: "US" | "UK" | "DE"; label: string; color: string }[] = [
  { key: "US", label: "US", color: "#2a78d6" },
  { key: "UK", label: "UK", color: "#eb6834" },
  { key: "DE", label: "DE", color: "#1baf7a" }
];

const PANEL_W = 860;
const PANEL_H = 110;
const PAD_L = 44;
const PAD_R = 16;
const PAD_T = 16;
const PAD_B = 8;
const GAP = 28;

function buildPath(values: number[]): { path: string; max: number } {
  const max = Math.max(...values);
  const plotW = PANEL_W - PAD_L - PAD_R;
  const plotH = PANEL_H - PAD_T - PAD_B;
  const stepX = plotW / (values.length - 1);
  const points = values.map((v, i) => {
    const x = PAD_L + i * stepX;
    const y = PAD_T + plotH - (max === 0 ? 0 : (v / max) * plotH);
    return [x, y];
  });
  const path = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  return { path, max };
}

export function ChatgptAdsChart() {
  const totalHeight = MARKETS.length * PANEL_H + (MARKETS.length - 1) * GAP + 24;

  return (
    <figure className="my-8">
      <svg
        viewBox={`0 0 ${PANEL_W} ${totalHeight}`}
        role="img"
        aria-labelledby="chatgpt-ads-chart-title chatgpt-ads-chart-desc"
        className="w-full"
      >
        <title id="chatgpt-ads-chart-title">
          Monthly Google searches for &quot;chatgpt ads&quot; in the US, UK and Germany, September 2022 to August
          2026
        </title>
        <desc id="chatgpt-ads-chart-desc">
          Three line charts, one per market, each on its own scale. All three stay in the low hundreds or less
          until late 2024, then climb steadily through 2025, then rise sharply from September 2025 onward. The US
          series peaks at 27,100 searches a month in January 2026.
        </desc>

        {MARKETS.map((market, i) => {
          const values = chatgptAdsSeries[market.key];
          const { path, max } = buildPath(values);
          const offsetY = i * (PANEL_H + GAP);
          const last = values[values.length - 1];
          const lastX = PAD_L + (PANEL_W - PAD_L - PAD_R);
          const lastY = PAD_T + (PANEL_H - PAD_T - PAD_B) - (max === 0 ? 0 : (last / max) * (PANEL_H - PAD_T - PAD_B));

          return (
            <g key={market.key} transform={`translate(0, ${offsetY})`}>
              {/* baseline */}
              <line
                x1={PAD_L}
                y1={PAD_T + (PANEL_H - PAD_T - PAD_B)}
                x2={PANEL_W - PAD_R}
                y2={PAD_T + (PANEL_H - PAD_T - PAD_B)}
                stroke="#e5e7eb"
                strokeWidth={1}
              />
              {/* y-axis max label */}
              <text x={0} y={PAD_T + 4} fontSize="10" fill="#6b7280">
                {max.toLocaleString("en-US")}
              </text>
              <text x={0} y={PAD_T + (PANEL_H - PAD_T - PAD_B) + 4} fontSize="10" fill="#6b7280">
                0
              </text>
              <path d={path} fill="none" stroke={market.color} strokeWidth={2} />
              {/* direct label at line end */}
              <text x={lastX + 6} y={lastY + 4} fontSize="12" fontWeight="600" fill={market.color}>
                {market.label}
              </text>
              <text x={lastX + 6} y={lastY + 16} fontSize="10" fill="#6b7280">
                {last.toLocaleString("en-US")}/mo
              </text>
            </g>
          );
        })}

        {/* shared x-axis labels (start / mid / end) */}
        <text x={PAD_L} y={totalHeight - 4} fontSize="10" fill="#6b7280">
          Sep 2022
        </text>
        <text x={PANEL_W / 2 - 20} y={totalHeight - 4} fontSize="10" fill="#6b7280">
          {months[24]}
        </text>
        <text x={PANEL_W - PAD_R - 44} y={totalHeight - 4} fontSize="10" fill="#6b7280">
          Aug 2026
        </text>
      </svg>

      <figcaption className="text-sm text-gray-500 mt-2">
        Monthly Google searches for &quot;chatgpt ads&quot;, US/UK/DE, September 2022 to August 2026. Each market on
        its own scale (US peak 27,100/mo, UK peak 2,400/mo, DE peak 940/mo). Source: Google Keyword Planner.
      </figcaption>

      <details className="mt-4 bg-white border border-gray-200 rounded-xl">
        <summary className="cursor-pointer px-4 py-3 font-heading font-semibold text-sm text-gray-900">
          Show data
        </summary>
        <div className="overflow-x-auto px-4 pb-4">
          <table className="w-full border-collapse text-left text-xs whitespace-nowrap">
            <thead>
              <tr className="border-b-2 border-gray-900 bg-gray-50">
                <th className="py-2 px-2 font-heading font-semibold sticky left-0 bg-gray-50">Month</th>
                {months.map((m) => (
                  <th key={m} className="py-2 px-2 font-heading font-semibold">
                    {m}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MARKETS.map((market) => (
                <tr key={market.key} className="border-b border-gray-200">
                  <td className="py-2 px-2 font-medium sticky left-0 bg-white">{market.label}</td>
                  {chatgptAdsSeries[market.key].map((v, i) => (
                    <td key={i} className="py-2 px-2">
                      {v.toLocaleString("en-US")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </figure>
  );
}
