import { Link } from "@/i18n/navigation";

export function BlogCTA({ locale, variant = "bottom" }: { locale: string; variant?: "mid" | "bottom" }) {
  const isEn = locale === "en";

  if (variant === "mid") {
    return (
      <div className="not-prose my-10 bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-200 rounded-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-1">
              {isEn ? "Free for a limited time" : "Besplatno, ogranicen broj mesta"}
            </p>
            <h3 className="text-lg md:text-xl font-heading font-bold text-slate-900 mt-0 mb-2">
              {isEn
                ? "Get Your Free Google Ads Action Plan"
                : "Dobij besplatan Google Ads Akcioni Plan"}
            </h3>
            <p className="text-sm text-gray-600 mb-0">
              {isEn
                ? "60-min deep dive into your account. You get a written plan with specific next steps."
                : "60 minuta dubinske analize tvog naloga. Dobijas pisan plan sa konkretnim koracima."}
            </p>
          </div>
          <Link
            href="/kontakt"
            className="shrink-0 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-sm whitespace-nowrap"
          >
            {isEn ? "Book Free Audit" : "Zakazi besplatan audit"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="not-prose mt-12 mb-4 bg-slate-900 text-white rounded-xl p-8 md:p-10">
      <p className="text-xs uppercase tracking-[0.2em] text-yellow-400 font-bold mb-3">
        {isEn ? "Free Google Ads Action Plan" : "Besplatan Google Ads Akcioni Plan"}
      </p>
      <h3 className="text-xl md:text-2xl font-heading font-bold mt-0 mb-3">
        {isEn
          ? "Want me to review your campaigns?"
          : "Hoces da ti pregledam kampanje?"}
      </h3>
      <p className="text-slate-300 mb-1">
        {isEn
          ? "60-minute deep dive into your Google Ads account. You get a written action plan with specific optimizations, budget recommendations, and quick wins."
          : "60 minuta dubinske analize tvog Google Ads naloga. Dobijas pisan akcioni plan sa konkretnim optimizacijama, preporukama za budzet i quick wins."}
      </p>
      <p className="text-slate-400 text-sm mb-6">
        {isEn
          ? "Value: \u20AC300 \u2014 currently free. Limited to 3 audits per week."
          : "Vrednost: \u20AC300 \u2014 trenutno besplatno. Primam 3 audita nedeljno."}
      </p>
      <Link
        href="/kontakt"
        className="inline-block bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors"
      >
        {isEn ? "Get Your Free Action Plan \u2192" : "Dobij besplatan akcioni plan \u2192"}
      </Link>
    </div>
  );
}
