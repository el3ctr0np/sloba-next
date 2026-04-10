import { Link } from "@/i18n/navigation";

interface ReadNextProps {
  locale: string;
  nextSlug: string;
  nextTitle: string;
  nextCategory: string;
  nextReadingTime?: string;
}

export function ReadNext({ locale, nextSlug, nextTitle, nextCategory, nextReadingTime }: ReadNextProps) {
  const isEn = locale === "en";

  return (
    <div className="not-prose mt-8 border border-gray-200 rounded-xl p-5 md:p-6 bg-gray-50 hover:bg-gray-100 transition-colors group">
      <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
        {isEn ? "Read next" : "Procitaj sledece"}
      </p>
      <Link
        href={{ pathname: "/blog/[slug]", params: { slug: nextSlug } }}
        className="block"
      >
        <h4 className="text-lg font-heading font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-0 mb-1">
          {nextTitle}
        </h4>
        <p className="text-sm text-gray-500 mb-0">
          {nextCategory}
          {nextReadingTime && <> &middot; {nextReadingTime}</>}
        </p>
      </Link>
    </div>
  );
}
