import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button, Card, Section } from "@/components/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title:
        "Performance Marketing Services | Omnichannel Growth Strategy — Slobodan Jelisavac",
      description:
        "Premium performance marketing with a dedicated team of experts. Google Ads + Meta + SEO + CRO for omnichannel growth. For companies with €5,000+ monthly budgets."
    };
  }

  return {
    title:
      "Performance Marketing Srbija | Omnichannel tim - Funky Enterprises",
    description:
      "Premium performance marketing sa dedicated timom eksperata. Google Ads + Meta + SEO + CRO. Za kompanije sa €5,000+ mesečnim budžetom."
  };
}

export default async function PerformanceMarketingPage({ params }: Props) {
  const { locale } = await params;

  const trustBadges =
    locale === "en"
      ? [
          "Omnichannel approach",
          "Funky Enterprises team",
          "€5,000+ monthly budgets"
        ]
      : [
          "Omnichannel pristup",
          "Funky Enterprises tim",
          "€5,000+ mesečni budžeti"
        ];

  const benefits =
    locale === "en"
      ? [
          {
            title: "Dedicated team, not freelancers",
            description:
              "A complete team of specialists working like your in-house marketing department."
          },
          {
            title: "Omnichannel coordination",
            description:
              "Google Ads, Meta, SEO, and CRO working together toward one unified strategy."
          },
          {
            title: "Creative production included",
            description:
              "Designer and copywriter on the team — no need to source external resources."
          },
          {
            title: "Single point of contact",
            description:
              "I coordinate the entire team. You don't need to communicate with each specialist individually."
          }
        ]
      : [
          {
            title: "Dedicated tim umesto freelancera",
            description:
              "Kompletan tim specijalista koji radi kao vaša interna marketing ekipa."
          },
          {
            title: "Omnichannel koordinacija",
            description:
              "Google Ads, Meta, SEO i CRO rade zajedno prema jednoj strategiji."
          },
          {
            title: "Creative production uključena",
            description:
              "Designer i copywriter u timu - ne morate tražiti spoljne resurse."
          },
          {
            title: "Jedna kontaktna tačka",
            description:
              "Ja koordinišem ceo tim. Vi ne morate da komunicirate sa svakim specijalistom."
          }
        ];

  const teamRoles =
    locale === "en"
      ? [
          {
            role: "Meta Ads specialist",
            description:
              "Facebook and Instagram advertising, audience strategy"
          },
          {
            role: "Creative team",
            description:
              "Designer and copywriter for ad creative and landing page content"
          },
          {
            role: "SEO team",
            description:
              "Technical SEO, content strategy, and link building"
          },
          {
            role: "CRO specialist",
            description:
              "Landing page optimization and conversion rate improvement"
          },
          {
            role: "Project manager",
            description:
              "Dedicated account manager coordinating all activities"
          },
          {
            role: "Google Ads strategist (me)",
            description: "Google Ads management, strategy, and optimization"
          }
        ]
      : [
          {
            role: "Meta Ads specijalista",
            description:
              "Facebook i Instagram oglašavanje, audience strategija"
          },
          {
            role: "Creative tim",
            description:
              "Dizajner i copywriter za ad creative i landing page sadržaj"
          },
          {
            role: "SEO tim",
            description: "Technical SEO, content strategy i link building"
          },
          {
            role: "CRO specijalista",
            description:
              "Landing page optimizacija i conversion rate poboljšanje"
          },
          {
            role: "Project manager",
            description:
              "Dedicated account manager koji koordinira sve aktivnosti"
          },
          {
            role: "Google Ads strategist (ja)",
            description: "Google Ads upravljanje, strategija i optimizacija"
          }
        ];

  const idealFor =
    locale === "en"
      ? [
          "Market leaders or companies aspiring to become one",
          "Monthly ad spend of €5,000+ (ideally €10,000+)",
          "Need a complete omnichannel approach",
          "Want a senior team with extensive experience",
          "Plan serious growth over the next 12+ months"
        ]
      : [
          "Market lideri ili kompanije koje teže da to postanu",
          "Mesečni ad spend od €5,000+ (idealno €10,000+)",
          "Potreban im je kompletan omnichannel pristup",
          "Žele senior tim sa bogatim iskustvom",
          "Planiraju ozbiljan rast u narednih 12+ meseci"
        ];

  const notFor =
    locale === "en"
      ? [
          "Budget below €3,000 monthly for advertising",
          "Need only one channel (Google Ads or Meta)",
          "Looking for the cheapest option on the market"
        ]
      : [
          "Budžet ispod €3,000 mesečno za oglašavanje",
          "Potreban samo jedan kanal (Google Ads ili Meta)",
          "Tražite najjeftiniju opciju na tržištu"
        ];

  const processSteps =
    locale === "en"
      ? [
          {
            step: "01. Discovery",
            title: "Deep business mapping",
            description:
              "We analyze your business model, competition, current marketing activities, and goals."
          },
          {
            step: "02. Strategy",
            title: "Omnichannel marketing strategy",
            description:
              "We create an integrated strategy covering all channels — from Google Ads to Meta advertising and SEO."
          },
          {
            step: "03. Setup & Execution",
            title: "Implementation and launch",
            description:
              "The team sets up campaigns, creates creative, optimizes landing pages, and launches activities."
          },
          {
            step: "04. Optimization",
            title: "Continuous improvement",
            description:
              "Weekly optimization, A/B testing, reporting, and cross-channel coordination."
          }
        ]
      : [
          {
            step: "01. Discovery",
            title: "Dubinsko mapiranje biznisa",
            description:
              "Analiziramo vaš biznis model, konkurenciju, trenutne marketing aktivnosti i ciljeve."
          },
          {
            step: "02. Strategija",
            title: "Omnichannel marketing strategija",
            description:
              "Kreiramo integrisanu strategiju koja pokriva sve kanale - od Google Ads-a do Meta oglašavanja i SEO-a."
          },
          {
            step: "03. Setup & Egzekucija",
            title: "Implementacija i lansiranje",
            description:
              "Tim postavlja kampanje, kreira creative, optimizuje landing page-ove i lansira aktivnosti."
          },
          {
            step: "04. Optimizacija",
            title: "Kontinuirano poboljšanje",
            description:
              "Sedmična optimizacija, A/B testiranje, reporting i koordinacija između kanala."
          }
        ];

  const faqs =
    locale === "en"
      ? [
          {
            question:
              "What's the difference between Performance Marketing and standard Google Ads management?",
            answer:
              "Performance Marketing includes a complete omnichannel team — Google Ads, Meta, SEO, CRO, and creative. Standard management covers only Google Ads."
          },
          {
            question:
              "What's the minimum budget for Performance Marketing?",
            answer:
              "The recommended minimum is €5,000 monthly for advertising, ideally €10,000+. For smaller budgets, my standard Google Ads service is a better option."
          },
          {
            question: "Who is Funky Enterprises?",
            answer:
              "Funky Enterprises is a digital marketing agency I have a strategic partnership with. Together we cover all channels — from Google Ads and Meta advertising to SEO and creative."
          },
          {
            question:
              "Can I start with just Google Ads and expand later?",
            answer:
              "Absolutely. Many clients start with my standard Google Ads service and transition to Performance Marketing when they're ready for an omnichannel approach."
          },
          {
            question: "How does team communication work?",
            answer:
              "You have a single point of contact — me. I coordinate the entire team, so you don't need to communicate with each specialist individually."
          }
        ]
      : [
          {
            question:
              "Koja je razlika između Performance Marketing-a i standardnog Google Ads upravljanja?",
            answer:
              "Performance Marketing uključuje kompletan omnichannel tim — Google Ads, Meta, SEO, CRO i kreativu. Standardno upravljanje pokriva samo Google Ads."
          },
          {
            question: "Koliki je minimalni budžet za Performance Marketing?",
            answer:
              "Preporučeni minimum je €5,000 mesečno za oglašavanje, idealno €10,000+. Za manje budžete, bolja opcija je moja standardna Google Ads usluga."
          },
          {
            question: "Ko je Funky Enterprises?",
            answer:
              "Funky Enterprises je digital marketing agencija sa kojom imam strateško partnerstvo. Zajedno pokrivamo sve kanale — od Google Ads-a i Meta oglašavanja do SEO-a i kreative."
          },
          {
            question:
              "Da li mogu da počnem samo sa Google Ads pa da proširim?",
            answer:
              "Apsolutno. Mnogi klijenti počnu sa mojom standardnom Google Ads uslugom i pređu na Performance Marketing kada su spremni za omnichannel pristup."
          },
          {
            question: "Kako izgleda komunikacija sa timom?",
            answer:
              "Imate jednu kontaktnu tačku — mene. Ja koordinišem ceo tim i vi ne morate da komunicirate sa svakim specijalistom pojedinačno."
          }
        ];

  const personSchema =
    locale === "en"
      ? {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Slobodan Jelisavac",
          url: "https://www.slobodan-jelisavac.com",
          jobTitle: "Performance Marketing Strategist",
          knowsAbout: [
            "Performance Marketing",
            "Google Ads",
            "Omnichannel Marketing",
            "PPC Strategy",
            "Digital Marketing"
          ],
          areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Australia" },
            { "@type": "Country", name: "Germany" },
            { "@type": "Country", name: "Serbia" },
            { "@type": "Country", name: "Croatia" }
          ]
        }
      : {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Slobodan Jelisavac",
          url: "https://www.slobodan-jelisavac.com",
          jobTitle: "Google Ads Strategist",
          knowsAbout: [
            "Performance Marketing",
            "Google Ads",
            "Omnichannel Marketing",
            "PPC Strategy"
          ],
          areaServed: [
            { "@type": "Country", name: "Serbia" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Germany" },
            { "@type": "Country", name: "Croatia" }
          ]
        };

  const breadcrumbSchema =
    locale === "en"
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.slobodan-jelisavac.com"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: "https://www.slobodan-jelisavac.com/services"
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Performance Marketing",
              item: "https://www.slobodan-jelisavac.com/services/performance-marketing"
            }
          ]
        }
      : {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Početna",
              item: "https://www.slobodan-jelisavac.com"
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Usluge",
              item: "https://www.slobodan-jelisavac.com/usluge"
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Performance Marketing",
              item: "https://www.slobodan-jelisavac.com/usluge/performance-marketing"
            }
          ]
        };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Dark Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">
                {locale === "en" ? "Home" : "Početna"}
              </Link>
              <span className="mx-2">/</span>
              <Link
                href={locale === "en" ? "/services" : "/usluge"}
                className="hover:text-white transition-colors"
              >
                {locale === "en" ? "Services" : "Usluge"}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Performance Marketing</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              {locale === "en"
                ? "Performance Marketing — Complete omnichannel team for serious growth"
                : "Performance Marketing - kompletan omnichannel tim za ozbiljan rast"}
            </h1>

            <p className="text-lg text-gray-300 mb-8">
              {locale === "en"
                ? "For companies that want more than one channel. You get a dedicated team of experts covering Google Ads, Meta advertising, SEO, CRO, and creative. The result: integrated omnichannel approach with a single point of contact."
                : "Za kompanije koje žele više od jednog kanala. Dobijate dedicated tim eksperata koji pokriva Google Ads, Meta oglašavanje, SEO, CRO i kreativu. Rezultat: integrisani omnichannel pristup sa jednom kontaktnom tačkom."}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-blue-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-300">{badge}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={locale === "en" ? "/contact" : "/kontakt"}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                {locale === "en" ? "Contact me" : "Kontaktirajte me"}
              </Link>
              <a
                href="https://www.funky.enterprises/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Funky Enterprises →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Intro Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
            {locale === "en"
              ? "Performance Marketing through partnership with Funky Enterprises"
              : "Performance Marketing kroz partnerstvo sa Funky Enterprises"}
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            {locale === "en" ? (
              <>
                I offer the Performance Marketing package through a strategic
                partnership with{" "}
                <a
                  href="https://www.funky.enterprises/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Funky Enterprises
                </a>{" "}
                — a digital marketing agency specialized in omnichannel
                approach.
              </>
            ) : (
              <>
                Performance Marketing paket nudim kroz strateško partnerstvo
                sa{" "}
                <a
                  href="https://www.funky.enterprises/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Funky Enterprises
                </a>{" "}
                — digital marketing agencijom specijalizovanom za omnichannel
                pristup.
              </>
            )}
          </p>
          <p className="text-gray-600">
            {locale === "en"
              ? "This isn't classic freelance management where you have one person on one channel. Here you get a complete team of specialists: Meta expert, creative team (designer + copywriter), SEO team, CRO specialist, project manager, and me on Google Ads. The result is an integrated strategy that functions as if you have an in-house marketing team — but without the overhead of hiring."
              : "Ovo nije klasično freelance upravljanje gde imate jednog čoveka na jednom kanalu. Ovde dobijate kompletan tim specijalista: Meta ekspertu, creative tim (designer + copywriter), SEO tim, CRO specijalista, project managera i mene na Google Ads-u. Rezultat je integrisana strategija koja funkcioniše kao da imate interni marketing tim — ali bez overhead-a zapošljavanja."}
          </p>
        </div>
      </section>

      {/* Šta dobijate */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              {locale === "en"
                ? "What you get with the Performance Marketing package"
                : "Šta dobijate sa Performance Marketing paketom"}
            </h2>
            <p className="text-lg text-gray-600">
              {locale === "en"
                ? "Complete omnichannel team working like your in-house marketing department"
                : "Kompletan omnichannel tim koji radi kao vaša interna marketing ekipa"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="h-full">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Tim eksperata */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              {locale === "en"
                ? "Team of experts driving your growth"
                : "Tim eksperata koji vode računa o vašem rastu"}
            </h2>
            <p className="text-lg text-gray-600">
              {locale === "en"
                ? "Each team member is a specialist in their field"
                : "Svaki član tima je specijalista u svojoj oblasti"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {teamRoles.map((member) => (
              <Card key={member.role} className="h-full">
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                  {member.role}
                </h3>
                <p className="text-gray-600">{member.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {locale === "en"
                ? "Together we form a complete performance marketing stack covering all digital channels."
                : "Zajedno činimo kompletan performance marketing stack koji pokriva sve digitalne kanale."}
            </p>
          </div>
        </div>
      </Section>

      {/* Za koga je / Nije za vas */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              {locale === "en"
                ? "Who Performance Marketing is for"
                : "Za koga je Performance Marketing"}
            </h2>
            <p className="text-lg text-gray-600">
              {locale === "en"
                ? "Is this service the right fit for your business?"
                : "Da li je ova usluga pravi fit za vaš biznis?"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ideal For */}
            <Card className="h-full border-2 border-green-200 bg-green-50">
              <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
                {locale === "en"
                  ? "This service is for companies that"
                  : "Ova usluga je za kompanije koje"}
              </h3>
              <ul className="space-y-4">
                {idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Not For */}
            <Card className="h-full border-2 border-red-200 bg-red-50">
              <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-6">
                {locale === "en" ? "Not for you if" : "Nije za vas ako"}
              </h3>
              <ul className="space-y-4">
                {notFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-gray-700 text-center">
              {locale === "en" ? (
                <>
                  <strong>Note:</strong> If you only need Google Ads, check
                  out my{" "}
                  <Link
                    href="/services/google-ads-management"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    standard Google Ads service
                  </Link>
                  . Performance Marketing is the right choice when you're
                  ready for an omnichannel approach.
                </>
              ) : (
                <>
                  <strong>Napomena:</strong> Ako vam je potreban samo Google
                  Ads, pregledajte moju{" "}
                  <Link
                    href="/usluge/google-ads-upravljanje"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    standardnu Google Ads uslugu
                  </Link>
                  . Performance Marketing je pravi izbor kada ste spremni za
                  omnichannel pristup.
                </>
              )}
            </p>
          </div>
        </div>
      </Section>

      {/* Proces saradnje */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              {locale === "en"
                ? "How the collaboration works"
                : "Kako funkcioniše saradnja"}
            </h2>
            <p className="text-lg text-gray-600">
              {locale === "en"
                ? "From initial discovery process to continuous optimization"
                : "Od inicijalnog discovery procesa do kontinuirane optimizacije"}
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((process, index) => (
              <Card
                key={process.step}
                className="relative pl-20 md:pl-24 border-l-4 border-blue-500"
              >
                <div className="absolute left-6 md:left-8 top-6 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div className="text-sm text-blue-600 font-semibold mb-1">
                  {process.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              {locale === "en"
                ? "Frequently asked questions"
                : "Često postavljana pitanja"}
            </h2>
            <p className="text-lg text-gray-600">
              {locale === "en"
                ? "Everything you want to know about the Performance Marketing package"
                : "Sve što vas zanima o Performance Marketing paketu"}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-white rounded-lg shadow-sm overflow-hidden group border border-gray-200"
              >
                <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-heading font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* Dark CTA Section */}
      <section className="bg-slate-900 text-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            {locale === "en"
              ? "Ready for an omnichannel approach?"
              : "Spremni za omnichannel pristup?"}
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {locale === "en"
              ? "Performance Marketing is the right choice for companies with €5,000+ monthly budgets that want a complete team of experts and an integrated strategy."
              : "Performance Marketing je pravi izbor za kompanije sa €5,000+ mesečnim budžetom koje žele kompletan tim eksperata i integrisanu strategiju."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://www.funky.enterprises/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors text-lg"
            >
              {locale === "en"
                ? "Visit Funky Enterprises →"
                : "Posetite Funky Enterprises →"}
            </a>
            <Link
              href={locale === "en" ? "/contact" : "/kontakt"}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              {locale === "en" ? "Contact me" : "Kontaktirajte me"}
            </Link>
          </div>

          <div className="pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400 mb-4">
              {locale === "en"
                ? "You might also be interested in other services:"
                : "Možda vas interesuju i druge usluge:"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href={
                  locale === "en"
                    ? "/services/google-ads-management"
                    : "/usluge/google-ads-upravljanje"
                }
                className="text-gray-300 hover:text-white underline"
              >
                {locale === "en"
                  ? "Google Ads management"
                  : "Google Ads upravljanje"}
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href={
                  locale === "en"
                    ? "/services/youtube-ads"
                    : "/usluge/youtube-oglasi"
                }
                className="text-gray-300 hover:text-white underline"
              >
                {locale === "en" ? "YouTube ads" : "YouTube oglasi"}
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href={
                  locale === "en"
                    ? "/services/google-ads-ecommerce"
                    : "/usluge/google-ads-za-ecommerce"
                }
                className="text-gray-300 hover:text-white underline"
              >
                {locale === "en"
                  ? "Google Ads for eCommerce"
                  : "Google Ads za eCommerce"}
              </Link>
              <span className="text-gray-600">•</span>
              <Link
                href="/case-studies"
                className="text-gray-300 hover:text-white underline"
              >
                {locale === "en" ? "Results" : "Rezultati"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
