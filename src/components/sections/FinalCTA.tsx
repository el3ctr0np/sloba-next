"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";

export function FinalCTA() {
  const t = useTranslations("FinalCTA");

  return (
    <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold mb-4 text-white">
          {t("heading")}
        </h2>
        <p className="text-slate-300 mb-8">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/kontakt" variant="secondary">
            {t("cta")}
          </Button>
          <Button href="/usluge" variant="primary">
            {t("secondaryCta")}
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
          <Link
            href="/case-studies"
            className="hover:text-white transition-colors underline"
          >
            {t("links.caseStudies")}
          </Link>
          <Link
            href="/o-meni"
            className="hover:text-white transition-colors underline"
          >
            {t("links.about")}
          </Link>
          <Link
            href="/blog"
            className="hover:text-white transition-colors underline"
          >
            {t("links.blog")}
          </Link>
        </div>
      </div>
    </section>
  );
}
