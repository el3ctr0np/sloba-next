import { Link } from "@/i18n/navigation";

const footerLinks = {
  usluge: [
    { label: "Google Ads Upravljanje", href: "/usluge/google-ads-upravljanje" },
    { label: "Performance Max", href: "/usluge/performance-max" },
    { label: "SEO", href: "/usluge/seo" },
    { label: "Meta Oglašavanje", href: "/usluge/meta-oglasavanje" },
    { label: "Performance Marketing", href: "/usluge/performance-marketing" },
  ],
  resursi: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading font-bold text-xl mb-4">
              Slobodan Jelisavac
            </h3>
            <p className="text-gray-400 mb-4">
              Google Ads Strategist sa decenijom iskustva. AI-first optimizacije za merljive rezultate.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Usluge */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Usluge</h4>
            <ul className="space-y-2">
              {footerLinks.usluge.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resursi */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Resursi</h4>
            <ul className="space-y-2">
              {footerLinks.resursi.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Nova Pazova / Batajnica</li>
              <li>info@slobodan-jelisavac.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-gray-400 text-sm">
              Partner @ <a href="https://funky.enterprises" target="_blank" rel="noopener noreferrer" className="hover:text-white">Funky Enterprises</a> - Za market lidere
            </p>
            <p className="text-gray-400 text-sm md:flex-1 md:text-center">
              Dizajn &amp; razvoj:{" "}
              <a
                href="https://www.asarum-tech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Asarum Tech{" "}
                <img
                  src="/asarum-logo.png"
                  alt="Asarum Tech"
                  className="inline h-4 w-auto align-middle ml-1"
                />
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              © 2026 Slobodan Jelisavac. Sva prava zadržana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

