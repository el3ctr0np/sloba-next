"use client";

import { Link } from "@/i18n/navigation";
import { trackCtaClick } from "@/lib/track";
import type { CaseStudy } from "../data";

type Props = {
  category: CaseStudy["category"];
  isEn: boolean;
};

// Segment the secondary CTA by case study category — send visitors to the
// most relevant service page instead of the generic /usluge catch-all.
const CATEGORY_SERVICE_HREF: Partial<Record<CaseStudy["category"], "/usluge/google-ads-za-ecommerce" | "/usluge/google-ads-za-b2b" | "/usluge/google-ads-za-saas">> = {
  eCommerce: "/usluge/google-ads-za-ecommerce",
  B2B: "/usluge/google-ads-za-b2b",
  SaaS: "/usluge/google-ads-za-saas",
};

export function CaseStudyFinalCta({ category, isEn }: Props) {
  const secondaryHref = CATEGORY_SERVICE_HREF[category] ?? "/usluge";

  return (
    <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold mb-4 text-white">
          {isEn ? "Want similar results for your business?" : "Želite slične rezultate za vaš biznis?"}
        </h2>
        <p className="text-slate-300 mb-8">
          {isEn
            ? "Book a free consultation and let's discuss how Google Ads can work for you."
            : "Zakažite besplatnu konsultaciju i razgovarajmo o tome kako Google Ads može raditi za vas."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/kontakt"
            onClick={() => trackCtaClick("case_study_final_cta", "/kontakt")}
            className="btn-secondary inline-block"
          >
            {isEn ? "Book a consultation" : "Zakažite konsultaciju"}
          </Link>
          <Link
            href={secondaryHref}
            onClick={() => trackCtaClick("case_study_final_cta", secondaryHref)}
            className="btn-primary inline-block"
          >
            {isEn ? "View services" : "Pogledajte usluge"}
          </Link>
        </div>
      </div>
    </section>
  );
}
