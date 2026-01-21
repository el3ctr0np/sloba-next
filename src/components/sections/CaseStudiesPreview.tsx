import { Link } from "@/i18n/navigation";
import { Card, Button } from "@/components/ui";

const caseStudies = [
  {
    name: "Mobelaris",
    industry: "eCommerce - Luksuzni nameštaj",
    metric: "ROI: 1.8 → 3.7",
    result: "€30k → €85k/mes",
    href: "/case-studies/mobelaris"
  },
  {
    name: "DesignerGlasses",
    industry: "eCommerce - Naočare",
    metric: "ROI: 3.9x",
    result: "£5k → £62k/mes",
    href: "/case-studies/designerglasses"
  },
  {
    name: "SoundBox Store",
    industry: "eCommerce - Audio oprema",
    metric: "3X Rast prodaje",
    result: "-50% CPA",
    href: "/case-studies/soundboxstore"
  }
];

export function CaseStudiesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Rezultati Koji Govore
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Pogledajte kako sam pomogao brendovima da ostvare značajan rast.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Link key={index} href={study.href}>
              <Card className="h-full">
                <span className="text-sm text-gray-500 mb-2 block">{study.industry}</span>
                <h3 className="text-xl font-heading font-bold mb-4">{study.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-2xl font-bold text-primary">{study.metric}</p>
                  <p className="text-secondary font-semibold">{study.result}</p>
                </div>
                <span className="text-primary font-medium">Pogledaj →</span>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button href="/case-studies" variant="primary">
            Svi Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}

