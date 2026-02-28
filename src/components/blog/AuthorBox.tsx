export function AuthorBox({ locale }: { locale: string }) {
  const isEn = locale === "en";

  return (
    <aside className="mt-12 pt-8 border-t border-gray-200">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xl shrink-0">
          SJ
        </div>
        <div>
          <p className="font-heading font-bold text-lg text-slate-900">
            Slobodan Jelisavac
          </p>
          <p className="text-sm text-gray-500 mb-2">
            {isEn ? "Google Ads Strategist" : "Google Ads Strateg"}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            {isEn
              ? "9+ years managing Google Ads for eCommerce and B2B companies across UK, EU, and the Balkans. Specialized in Search, Shopping, and Performance Max campaigns."
              : "9+ godina upravljanja Google Ads kampanjama za eCommerce i B2B kompanije u UK, EU i na Balkanu. Specijalizovan za Search, Shopping i Performance Max kampanje."}
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/slobodan-jelisavac/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <span className="text-gray-300">|</span>
            <a
              href={isEn ? "/en/contact" : "/sr/kontakt"}
              className="text-sm text-blue-600 hover:underline"
            >
              {isEn ? "Work with me" : "Saradnja"}
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
