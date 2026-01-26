import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

export function generateMetadata(): Metadata {
  return {
    title: "Performance Marketing Srbija | Omnichannel tim - Funky Enterprises",
    description:
      "Premium performance marketing sa dedicated timom eksperata. Google Ads + Meta + SEO + CRO. Za market lidere."
  };
}

const benefits = [
  "Želite dedicated tim umesto jednog freelancer-a",
  "Trebaju vam kompletan omnichannel pristup",
  "Želite creative production uključenu",
  "Jedan kontakt za sve digital marketing potrebe"
];

const teamRoles = [
  "Meta Ads specijalista - Facebook i Instagram oglašavanje",
  "Creative tim - dizajner i copywriter za ad creative",
  "SEO tim - technical SEO i link building",
  "CRO specijalista - landing page i conversion optimization",
  "Project manager - dedicated account manager"
];

const idealFor = [
  "Su market lideri ili teže da to postanu",
  "Žele sveobuhvatnu senior ekipu sa bogatim iskustvom",
  "Mesečni ad spend je €5,000+ (idealno €10,000+)",
  "Trebaju creative production",
  "Očekuju ozbiljan rast u narednih 12+ meseci"
];

const notFor = [
  "Budžet je ispod €3,000/mesečno za ads",
  "Želite samo jedan kanal (onda je moja standardna usluga bolja opcija)",
  "Tražite najjeftiniju opciju"
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Performance Marketing",
  description:
    "Premium performance marketing paket sa omnichannel timom u saradnji sa Funky Enterprises.",
  provider: {
    "@type": "Organization",
    name: "Slobodan Jelisavac",
    url: "https://slobodan-jelisavac.com"
  }
};

export default function PerformanceMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Section background="gray">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Performance Marketing - kompletan omnichannel tim za ozbiljan rast
          </h1>
          <p className="text-lg text-gray-700">
            Za kompanije koje žele više od jednog kanala, nudim Performance
            Marketing paket kroz partnerstvo sa Funky Enterprises timom. Ovo
            nije standardno freelance upravljanje - dobijate kompletan tim
            specijalista koji pokriva Google Ads, Meta oglašavanje, SEO, CRO i
            kreativu. Rezultat: integrisani omnichannel pristup sa jednom
            kontaktnom tačkom.
          </p>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Performance Marketing - šta dobijate
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <ul className="space-y-2 text-gray-600">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Tim eksperata koji vode računa o vašem rastu
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="h-full">
            <p className="text-gray-600 mb-6">
              Funky Enterprises je digital marketing agencija sa kojom imam
              strateško partnerstvo. Tim uključuje:
            </p>
            <ul className="space-y-2 text-gray-600">
              {teamRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
            <p className="text-gray-600 mt-6">
              Zajedno sa mojom Google Ads ekspertizom, dobijate kompletan
              performance marketing stack.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Za koga je Performance Marketing
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="h-full">
            <h3 className="text-lg font-heading font-semibold mb-4">
              Ova usluga je za kompanije koje
            </h3>
            <ul className="space-y-2 text-gray-600">
              {idealFor.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </Card>
          <Card className="h-full">
            <h3 className="text-lg font-heading font-semibold mb-4">
              Nije za vas ako
            </h3>
            <ul className="space-y-2 text-gray-600">
              {notFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Zainteresovani za Performance Marketing?
          </h2>
          <p className="text-gray-600 mb-8">
            Za više informacija o ovoj premium usluzi, kontaktirajte me ili
            posetite Funky Enterprises sajt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" variant="secondary">
              Kontaktirajte me za više informacija
            </Button>
            <a
              href="https://funkyenterprises.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-center"
            >
              Posetite Funky Enterprises
            </a>
          </div>
          <div className="text-sm text-gray-500 mt-6">
            <Link href="/usluge/google-ads-upravljanje" className="underline">
              Google Ads upravljanje
            </Link>{" "}
            -{" "}
            <Link href="/usluge/meta-oglasavanje" className="underline">
              Meta oglašavanje
            </Link>{" "}
            -{" "}
            <Link href="/usluge/google-ads-za-ecommerce" className="underline">
              Google Ads za eCommerce
            </Link>{" "}
            -{" "}
            <Link href="/case-studies" className="underline">
              Rezultati
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
