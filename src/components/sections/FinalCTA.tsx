import { Button } from "@/components/ui";

export function FinalCTA() {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Spremni da Unapredite Rezultate?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Zakažite besplatnu konsultaciju i saznajte kako možemo zajedno
          maksimizovati vaš Google Ads ROI.
        </p>
        <Button
          href="/kontakt"
          className="bg-white text-primary hover:bg-gray-100 border-white"
        >
          Zakažite Besplatnu Konsultaciju
        </Button>
      </div>
    </section>
  );
}
