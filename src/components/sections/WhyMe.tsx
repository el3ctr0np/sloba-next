import { Card } from "@/components/ui";

const features = [
  {
    icon: "📈",
    title: "10+ Godina Iskustva",
    description: "Decenija rada sa premium brendovima iz EU i UK tržišta."
  },
  {
    icon: "💰",
    title: "€2M+ Godišnji Ad Spend",
    description: "Upravljam značajnim budžetima sa dokazanim rezultatima."
  },
  {
    icon: "🌍",
    title: "UK & EU Tržišta",
    description: "Iskustvo sa međunarodnim kampanjama i lokalnim brendovima."
  },
  {
    icon: "🤖",
    title: "AI-First Pristup",
    description: "Koristim Gemini, Claude i napredne alate za optimizaciju."
  },
  {
    icon: "👤",
    title: "Direktan Pristup",
    description: "Radite direktno sa ekspertom, bez junior staff-a."
  },
  {
    icon: "📊",
    title: "Transparentno",
    description: "Jasni izveštaji, bez skrivenih troškova, fokus na rezultate."
  }
];

export function WhyMe() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Decenija Ekspertize u Digitalnom Oglašavanju
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-heading font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
