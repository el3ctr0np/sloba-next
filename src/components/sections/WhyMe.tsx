import { Card } from "@/components/ui";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "10+ godina na Google Ads platformi",
    description: "Sertifikovan za sve tipove kampanja — od Search-a do Performance Max-a. Svakodnevno upravljanje nalozima od prvog dana."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: "Dokazani rezultati sa brojevima",
    description: "3.7x ROAS za eCommerce, -50% CPA za lead gen, 12x rast prihoda. Konkretne brojke, ne obećanja."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Međunarodno iskustvo, lokalno razumevanje",
    description: "Kampanje za UK, US i EU tržišta. Od britanske eCommerce konkurencije do srpskog lokalnog biznisa — razumem specifičnosti svakog."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "AI alati za nadljudsku efikasnost",
    description: "Claude, Gemini i custom skripte za analizu, copy i automatizaciju rutinskih zadataka. Više vremena za strategiju, manje za admin."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
    title: "Radite direktno sa ekspertom",
    description: "Nema account menadžera koji prepričava. Nema juniora koji uči na vašem budžetu. Direktna komunikacija sa osobom u nalogu."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Potpuna transparentnost bez iznenađenja",
    description: "Svaki dinar vidljiv. Konkretni mesečni izveštaji, ne generičke PDF prezentacije. Bez dugoročnih ugovora — rezultati vas zadržavaju."
  }
];

export function WhyMe() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Zašto klijenti biraju direktnu saradnju umesto agencije
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <span className="text-primary mb-4 block">{feature.icon}</span>
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
