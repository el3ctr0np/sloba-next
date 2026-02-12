import { Link } from "@/i18n/navigation";
import { Card, Button } from "@/components/ui";
import { caseStudies } from "@/app/[locale]/case-studies/data";

export function CaseStudiesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Rezultati koji govore
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Pogledajte kako sam pomogao brendovima da ostvare značajan rast kroz
          Google Ads.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`}>
              <Card className="h-full border-t-4 border-t-primary">
                <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold px-2 py-1 rounded mb-3">
                  {study.highlight}
                </span>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    {study.category}
                  </span>
                  <span className="text-xs text-gray-400">{study.market}</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-1">
                  {study.company}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{study.niche}</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {study.results.slice(0, 2).map((result) => (
                    <div key={result.label}>
                      <p className="text-lg font-bold text-slate-900">
                        {result.value}
                      </p>
                      <p className="text-xs text-gray-500">{result.label}</p>
                    </div>
                  ))}
                </div>
                <span className="text-primary font-medium">
                  Pogledajte case study →
                </span>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button href="/case-studies" variant="primary">
            Svi case studies
          </Button>
        </div>
      </div>
    </section>
  );
}
