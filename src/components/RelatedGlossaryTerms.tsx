import { Link } from "@/i18n/navigation";

type Props = {
  /** Glossary term slugs to link to (e.g., ["roas", "poas", "pmax"]) */
  slugs: string[];
  /** Current locale ("sr" or "en") */
  locale: string;
};

/**
 * "Related glossary terms" block for service pages.
 * Renders a row of pill/chip links pointing to /recnik#slug so service
 * pages link back into the glossary (glossary already links out to services).
 * Server component — no client-side interactivity needed.
 */
export function RelatedGlossaryTerms({ slugs, locale }: Props) {
  if (!slugs || slugs.length === 0) return null;

  const isEn = locale === "en";

  return (
    <section className="bg-white border-t border-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg font-heading font-semibold text-gray-900 mb-4">
          {isEn ? "Related glossary terms" : "Povezani pojmovi iz rečnika"}
        </h2>
        <div className="flex flex-wrap gap-2">
          {slugs.map((slug) => (
            <Link
              key={slug}
              href={{ pathname: "/recnik", hash: slug }}
              className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm hover:bg-gray-200 hover:text-primary transition-colors"
            >
              {slug.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
