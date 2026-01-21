import Link from "next/link";
import { Section, Card } from "@/components/ui";

const caseStudies = [
  {
    name: "Mobelaris",
    industry: "eCommerce - Luksuzni namestaj",
    metric: "ROI: 1.8 -> 3.7",
    result: "€30k -> €85k/mes",
    href: "/case-studies/mobelaris"
  },
  {
    name: "DesignerGlasses",
    industry: "eCommerce - Naocare",
    metric: "ROI: 3.9x",
    result: "£5k -> £62k/mes",
    href: "/case-studies/designerglasses"
  },
  {
    name: "SoundBox Store",
    industry: "eCommerce - Audio oprema",
    metric: "3X rast prodaje",
    result: "-50% CPA",
    href: "/case-studies/soundboxstore"
  }
];

export default function CaseStudiesPage() {
  return (
    <Section>
      <h1 className="text-4xl font-heading font-bold mb-4 text-center">
        Case Studies
      </h1>
      <p className="text-gray-600 text-center mb-12">
        Pregled rezultata postignutih za klijente iz razlicitih industrija.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <Link key={study.href} href={study.href}>
            <Card className="h-full">
              <span className="text-sm text-gray-500 mb-2 block">
                {study.industry}
              </span>
              <h3 className="text-xl font-heading font-bold mb-4">
                {study.name}
              </h3>
              <div className="space-y-2 mb-4">
                <p className="text-2xl font-bold text-primary">{study.metric}</p>
                <p className="text-secondary font-semibold">{study.result}</p>
              </div>
              <span className="text-primary font-medium">Pogledaj -></span>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
