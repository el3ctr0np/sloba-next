import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";

const footerLinks = {
  usluge: [
    { label: "Google Ads Upravljanje", href: "/usluge/google-ads-upravljanje" },
    { label: "Google Ads Audit", href: "/usluge/google-ads-audit" },
    { label: "Google Shopping", href: "/usluge/google-shopping" },
    { label: "Performance Max", href: "/usluge/performance-max" },
    { label: "Search Kampanje", href: "/usluge/search-kampanje" },
    { label: "Remarketing", href: "/usluge/remarketing" },
    { label: "YouTube Oglasi", href: "/usluge/youtube-oglasi" },
    { label: "Performance Marketing", href: "/usluge/performance-marketing" }
  ],
  industrije: [
    { label: "Google Ads za eCommerce", href: "/usluge/google-ads-za-ecommerce" },
    { label: "Google Ads za B2B", href: "/usluge/google-ads-za-b2b" },
    { label: "Google Ads za SaaS", href: "/usluge/google-ads-za-saas" },
    { label: "Starter Paket", href: "/usluge/starter-paket" },
    { label: "Konsultacije", href: "/usluge/konsultacije" }
  ],
  resursi: [
    { label: "Blog / Google Ads Vodič", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "O Meni", href: "/o-meni" },
    { label: "Kontakt", href: "/kontakt" }
  ]
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Footer CTA */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">
                Spremni da poboljšate Google Ads rezultate?
              </h3>
              <p className="text-gray-400">
                Besplatna konsultacija. Bez obaveze. Odgovor u roku od 24h.
              </p>
            </div>
            <Button href="/kontakt" variant="secondary">
              Zakažite konsultaciju
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-heading font-bold text-xl mb-4">
              Slobodan Jelisavac
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Google Ads Strategist sa 9+ godina iskustva. 50+ brendova u 6+
              zemalja.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <a
                  href="mailto:info@slobodan-jelisavac.com"
                  className="hover:text-white transition-colors"
                >
                  info@slobodan-jelisavac.com
                </a>
              </p>
              <p>Batajnica, Srbija</p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/slobodan-jelisavac/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Usluge */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wide text-gray-300">
              Usluge
            </h4>
            <ul className="space-y-2">
              {footerLinks.usluge.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industrije + Paketi */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wide text-gray-300">
              Po Industriji
            </h4>
            <ul className="space-y-2">
              {footerLinks.industrije.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resursi */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wide text-gray-300">
              Resursi
            </h4>
            <ul className="space-y-2">
              {footerLinks.resursi.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
            <p>
              © 2026 Slobodan Jelisavac. Sva prava zadržana.
            </p>
            <p className="md:flex-1 md:text-center">
              Partner @{" "}
              <a
                href="https://funky.enterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Funky Enterprises
              </a>
            </p>
            <p>
              Dizajn &amp; razvoj:{" "}
              <a
                href="https://www.asarum-tech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Asarum Tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
