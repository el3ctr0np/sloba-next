import { FileText, Download, Calendar } from "lucide-react";

interface ReportCardProps {
  title: string;
  period?: string;
  reportType: string;
  description?: string;
  publishedAt?: string;
  fileUrl?: string;
}

const typeLabels: Record<string, string> = {
  monthly: "Mesečni izveštaj",
  audit: "Audit",
  strategy: "Strategija",
  other: "Ostalo",
};

export function ReportCard({
  title,
  period,
  reportType,
  description,
  publishedAt,
  fileUrl,
}: ReportCardProps) {
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("sr-RS", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-3">
          <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{title}</h3>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                {typeLabels[reportType] || reportType}
              </span>
              {period && (
                <span className="text-xs text-gray-500">{period}</span>
              )}
            </div>
            {description && (
              <p className="text-sm text-gray-500 mt-2">{description}</p>
            )}
            {formattedDate && (
              <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                <Calendar className="w-3 h-3" />
                <span>{formattedDate}</span>
              </div>
            )}
          </div>
        </div>

        {fileUrl && (
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Preuzmi</span>
          </a>
        )}
      </div>
    </div>
  );
}
