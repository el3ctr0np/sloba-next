"use client";

import { useState } from "react";
import { Button, Card, Section } from "@/components/ui";

type Problem = {
  title: string;
  description: string;
};

type Solution = {
  title: string;
  description: string;
};

type PricingTier = {
  name: string;
  price: string;
  description: string;
  features?: string[];
  ctaText?: string;
  ctaHref?: string;
  highlight?: boolean;
};

type FaqItem = {
  question: string;
  answer: string;
};

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  problems: Problem[];
  solutions: Solution[];
  pricing: PricingTier[];
  faqs: FaqItem[];
}

const trustBadges = [
  "10+ godina iskustva",
  "UK Search Awards",
  "Google Partner"
];

export function ServicePageTemplate({
  title,
  subtitle,
  problems,
  solutions,
  pricing,
  faqs
}: ServicePageTemplateProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <>
      <Section background="gray" className="pt-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button href="/kontakt" variant="secondary">
              Zakazite Konsultaciju
            </Button>
            <Button href="/case-studies" variant="primary">
              Pogledajte Rezultate
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-600">
            {trustBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Prepoznajete li ove izazove?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ovo su najcesci problemi koje resavam za klijente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.slice(0, 3).map((problem) => (
            <Card key={problem.title} className="h-full">
              <h3 className="text-xl font-heading font-semibold mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600">{problem.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Kako vam mogu pomoci
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fokus na strategije koje donose merljive rezultate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution) => (
            <Card key={solution.title} className="h-full">
              <h3 className="text-lg font-heading font-semibold mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-600">{solution.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Transparentne cene
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Odaberite paket koji odgovara vasim ciljevima.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.slice(0, 3).map((tier) => (
            <Card
              key={tier.name}
              className={`h-full ${tier.highlight ? "border-primary" : ""}`}
            >
              <h3 className="text-xl font-heading font-bold mb-2">
                {tier.name}
              </h3>
              <p className="text-3xl font-bold text-primary mb-2">
                {tier.price}
              </p>
              <p className="text-gray-600 mb-4">{tier.description}</p>
              {tier.features && tier.features.length > 0 && (
                <ul className="space-y-2 text-gray-600 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              )}
              <Button
                href={tier.ctaHref ?? "/kontakt"}
                variant="secondary"
                className="w-full text-center"
              >
                {tier.ctaText ?? "Posaljite Upit"}
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Cesto postavljana pitanja
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Odgovori na najcesca pitanja o usluzi.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border-2 border-gray-900 rounded-lg bg-white"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-4 text-left font-medium"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="text-xl">{isOpen ? "-" : "+"}</span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="px-4 pb-4 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-primary text-white text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Spremni da unapredite rezultate?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Zakazite konsultaciju i saznajte kako mozemo zajedno da
          maksimizujemo vas ROI.
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
