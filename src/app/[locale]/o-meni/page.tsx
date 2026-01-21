import type { Metadata } from "next";
import { Section, Button } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title: "O Meni | Slobodan Jelisavac",
    description:
      "Google Ads strategist sa decenijom iskustva u radu sa premium brendovima iz EU i UK."
  };
}

export default function AboutPage() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-heading font-bold mb-6">O Meni</h1>
        <p className="text-xl text-gray-600 mb-6">Google Ads Strategist sa decenijom iskustva u radu sa premium brendovima iz EU i UK.</p>
        <div className="space-y-4 text-gray-700">
          <p>Sa preko 10 godina iskustva u digitalnom oglašavanju, specijalizovao sam se za Google Ads strategije koje donose merljive rezultate.</p>
          <p>Koristim AI-first pristup kombinujući napredne alate sa dubokim razumevanjem platforme.</p>
          <p>Partner @ Funky Enterprises za premium brendove i market lidere.</p>
        </div>
        <div className="mt-8"><Button href="/kontakt" variant="secondary">Zakažite Konsultaciju</Button></div>
      </div>
    </Section>
  );
}
