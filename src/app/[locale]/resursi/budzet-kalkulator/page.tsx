import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { buildMetadata } from "@/lib/metadata";
import { BudgetCalculator } from "@/components/sections/BudgetCalculator";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return buildMetadata({
      title: "Google Ads Budget Calculator | Slobodan Jelisavac",
      description:
        "Enter your max CPA, goal and conversion rate — get the max CPC you can afford and a realistic monthly budget. Transparent formula, no email required.",
      locale,
      path: "/resources/budget-calculator",
      srPath: "/resursi/budzet-kalkulator",
    });
  }

  return buildMetadata({
    title: "Google Ads Budžet Kalkulator | Slobodan Jelisavac",
    description:
      "Unesite max CPA, cilj i conversion rate - dobijate max CPC koji smete da platite i realan mesečni budžet. Transparentna formula, bez ostavljanja emaila.",
    locale,
    path: "/resursi/budzet-kalkulator",
  });
}

export default async function BudgetCalculatorPage({ params }: Props) {
  const { locale } = await params;
  const sr = locale !== "en";

  return (
    <main className="min-h-[80vh] bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-14 md:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3">
          {sr ? "Besplatan alat" : "Free tool"}
        </p>
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 mb-4">
          {sr ? "Google Ads budžet kalkulator" : "Google Ads budget calculator"}
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl">
          {sr
            ? "Tri broja koja već znate, dva broja koja vam trebaju: koliki klik smete da platite i koliki vam budžet realno treba za cilj. Računa se odmah, na strani, bez ostavljanja emaila."
            : "Three numbers you already know, two numbers you need: the click price you can afford and the budget your goal actually requires. Calculated instantly, on the page, no email required."}
        </p>

        <BudgetCalculator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Link
            href={{ pathname: "/blog/[slug]", params: { slug: sr ? "google-ads-budzet" : "google-ads-budget-planning" } }}
            className="block bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-gray-900 transition-colors no-underline"
          >
            <p className="font-heading font-semibold text-gray-900 mb-1">
              {sr ? "Vodič: Google Ads budžet" : "Guide: Google Ads budget"}
            </p>
            <p className="text-sm text-gray-500 mb-0">
              {sr
                ? "Cela logika iza ovog kalkulatora: faze, raspodela, kada povećati."
                : "The full logic behind this calculator: phases, allocation, when to increase."}
            </p>
          </Link>
          <Link
            href="/kontakt"
            className="block bg-slate-900 text-white rounded-xl p-5 hover:bg-slate-800 transition-colors no-underline"
          >
            <p className="font-heading font-semibold mb-1">
              {sr ? "Niste sigurni u svoje brojke?" : "Not sure about your numbers?"}
            </p>
            <p className="text-sm text-slate-300 mb-0">
              {sr
                ? "Prođem kroz vaš račun i ciljeve na besplatnoj konsultaciji."
                : "I go through your account and goals on a free consultation."}
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
