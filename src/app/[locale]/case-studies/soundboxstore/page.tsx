import type { Metadata } from "next";
import { Section, Card, Button } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title: "SoundBox Store Case Study | Slobodan Jelisavac",
    description: "Rezultati za SoundBox Store: 3X rast prodaje i -50% CPA."
  };
}

export default function SoundBoxStoreCaseStudyPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-3">
            eCommerce - Audio oprema
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            SoundBox Store
          </h1>
          <p className="text-gray-600 mb-8">
            Placeholder hero summary. Add final case study overview here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Zakazite Konsultaciju
            </Button>
            <Button href="/case-studies" variant="primary">
              Svi Case Studies
            </Button>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">Challenge</h2>
          <p className="text-gray-600">
            Placeholder challenge description. Add details about the initial
            problems, constraints, and goals.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">Solution</h2>
          <p className="text-gray-600 mb-6">
            Placeholder solution summary. Add the strategy and key actions taken.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="h-full">
              <h3 className="font-heading font-semibold mb-2">Action 1</h3>
              <p className="text-gray-600">
                Placeholder for a key tactic or optimization.
              </p>
            </Card>
            <Card className="h-full">
              <h3 className="font-heading font-semibold mb-2">Action 2</h3>
              <p className="text-gray-600">
                Placeholder for a key tactic or optimization.
              </p>
            </Card>
            <Card className="h-full">
              <h3 className="font-heading font-semibold mb-2">Action 3</h3>
              <p className="text-gray-600">
                Placeholder for a key tactic or optimization.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="h-full">
              <p className="text-sm text-gray-500 mb-2">Primary Metric</p>
              <p className="text-3xl font-bold text-primary">3X rast prodaje</p>
            </Card>
            <Card className="h-full">
              <p className="text-sm text-gray-500 mb-2">CPA</p>
              <p className="text-3xl font-bold text-primary">-50% CPA</p>
            </Card>
            <Card className="h-full">
              <p className="text-sm text-gray-500 mb-2">Additional Result</p>
              <p className="text-3xl font-bold text-primary">TBD</p>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6">Testimonial</h2>
          <Card>
            <p className="text-gray-600 mb-4">
              Placeholder testimonial quote. Add client feedback here.
            </p>
            <p className="font-semibold">Client Name</p>
            <p className="text-gray-500">Position, Company</p>
          </Card>
        </div>
      </Section>

      <Section className="bg-primary text-white text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Spremni za sledeci case study?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Zakazite konsultaciju i saznajte kako da postignete slicne rezultate.
        </p>
        <Button
          href="/kontakt"
          className="bg-white text-primary hover:bg-gray-100 border-white"
        >
          Zakazite Konsultaciju
        </Button>
      </Section>
    </>
  );
}
