import { Link } from "@/i18n/navigation";

export function BlogCTA({ locale, variant = "bottom" }: { locale: string; variant?: "mid" | "bottom" }) {
  const isEn = locale === "en";

  if (variant === "mid") {
    return (
      <div className="not-prose my-10 bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-200 rounded-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-1">
              {isEn ? "Free video audit" : "Besplatni video audit"}
            </p>
            <h3 className="text-lg md:text-xl font-heading font-bold text-slate-900 mt-0 mb-2">
              {isEn
                ? "Get a Personalised Video Audit of Your Google Ads Account"
                : "Dobij personalizovani video audit tvog Google Ads naloga"}
            </h3>
            <p className="text-sm text-gray-600 mb-0">
              {isEn
                ? "I'll record a 5-minute walkthrough of your campaigns showing exactly where you're losing money and what to fix first."
                : "Snimicu 5-minutni pregled tvojih kampanja gde pokazujem tacno gde gubis novac i sta bi prvi popravio."}
            </p>
          </div>
          <Link
            href="/kontakt"
            className="shrink-0 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-sm whitespace-nowrap"
          >
            {isEn ? "Apply for Free Audit" : "Apliciraj za video audit"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="not-prose mt-12 mb-4 bg-slate-900 text-white rounded-xl p-8 md:p-10">
      <p className="text-xs uppercase tracking-[0.2em] text-yellow-400 font-bold mb-3">
        {isEn ? "Free personalised video audit" : "Besplatni personalizovani video audit"}
      </p>
      <h3 className="text-xl md:text-2xl font-heading font-bold mt-0 mb-3">
        {isEn
          ? "Want a video walkthrough of your Google Ads account?"
          : "Hoces video pregled tvog Google Ads naloga?"}
      </h3>
      <p className="text-slate-300 mb-4">
        {isEn
          ? "I'll personally record a 5-minute video walking through your campaigns, showing you where you're losing money and giving you 3 specific things to fix immediately. No sales pitch — just value."
          : "Licno cu snimiti 5-minutni video u kome prolazim kroz tvoje kampanje, pokazujem gde gubis novac i dajem 3 konkretne stvari za popravku odmah. Bez prodaje — samo vrednost."}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <p className="text-yellow-400 font-bold text-sm mb-2">
            {isEn ? "What you get:" : "Sta dobijas:"}
          </p>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>{isEn ? "5-min personalised video analysis" : "5-min personalizovana video analiza"}</li>
            <li>{isEn ? "3 specific quick wins to implement" : "3 konkretna quick wins za implementaciju"}</li>
            <li>{isEn ? "Budget & bidding recommendations" : "Preporuke za budzet i bidding"}</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <p className="text-slate-400 font-bold text-sm mb-2">
            {isEn ? "Requirements:" : "Uslovi:"}
          </p>
          <ul className="text-slate-400 text-sm space-y-1">
            <li>{isEn ? "Ad spend: €3,000+/month (or £3,000+)" : "Ad spend: €1,000+/mesecno"}</li>
            <li>{isEn ? "Active account for 3+ months" : "Aktivan nalog minimum 3 meseca"}</li>
            <li>{isEn ? "eCommerce or Lead Gen business" : "eCommerce ili Lead Gen biznis"}</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/kontakt"
          className="inline-block bg-yellow-400 text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors text-center"
        >
          {isEn ? "Apply for your free video audit \u2192" : "Apliciraj za besplatni video audit naloga \u2192"}
        </Link>
        <Link
          href="/kontakt"
          className="inline-block border border-slate-500 text-slate-300 font-medium py-3 px-6 rounded-lg hover:border-slate-300 hover:text-white transition-colors text-sm text-center"
        >
          {isEn ? "Not eligible? Send an enquiry instead" : "Ne ispunjavas uslove? Posalji upit"}
        </Link>
      </div>

      <p className="text-slate-500 text-xs mt-4 mb-0">
        {isEn
          ? "Limited to 3 video audits per week. Response within 48 hours."
          : "Ograniceno na 3 video audita nedeljno. Odgovor u roku od 48h."}
      </p>
    </div>
  );
}
