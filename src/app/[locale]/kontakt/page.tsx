import type { Metadata } from "next";
import { Section } from "@/components/ui";
import { ContactForm } from "@/components/sections/ContactForm";

export function generateMetadata(): Metadata {
  return {
    title: "Kontakt | Slobodan Jelisavac",
    description: "Zakazite besplatnu konsultaciju i posaljite poruku."
  };
}

export default function ContactPage() {
  return (
    <Section>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-heading font-bold mb-4 text-center">
          Kontakt
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Zakazite besplatnu konsultaciju
        </p>
        <ContactForm />
      </div>
    </Section>
  );
}
