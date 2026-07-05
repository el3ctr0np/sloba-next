import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui";
import { buildMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return buildMetadata({
      title: "Privacy Policy — Slobodan Jelisavac | Google Ads Consultant",
      description: "How Slobodan Jelisavac collects, uses, and protects your personal data — contact forms, analytics, and remarketing.",
      locale,
      path: "/privacy",
      srPath: "/privatnost",
    });
  }

  return buildMetadata({
    title: "Politika Privatnosti — Slobodan Jelisavac | Google Ads Konsultant",
    description: "Kako Slobodan Jelisavac prikuplja, koristi i štiti vaše lične podatke — kontakt forme, analitika i remarketing.",
    locale,
    path: "/privacy",
    srPath: "/privatnost",
  });
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  const isEn = locale === "en";

  const sections = isEn
    ? [
        {
          title: "1. Who we are",
          body: (
            <>
              <p>
                This website is operated by Slobodan Jelisavac, an independent Google Ads
                consultant based in Batajnica, Serbia.
              </p>
              <p>
                For any question about this policy or your personal data, you can reach me
                directly at{" "}
                <a href="mailto:info@slobodan-jelisavac.com" className="text-primary hover:underline">
                  info@slobodan-jelisavac.com
                </a>
                .
              </p>
            </>
          )
        },
        {
          title: "2. What data we collect",
          body: (
            <>
              <p>Depending on how you interact with the site, I may collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Contact form data</strong> — name, email address, website (if
                  provided), and budget/business details you share when requesting a
                  consultation.
                </li>
                <li>
                  <strong>Analytics data</strong> — pages visited, time on site, device and
                  browser information, collected via Google Analytics 4 (GA4) and Google Tag
                  Manager (GTM) cookies.
                </li>
                <li>
                  <strong>Advertising data</strong> — the Meta Pixel may record your visit and
                  interactions on this site for advertising purposes.
                </li>
              </ul>
            </>
          )
        },
        {
          title: "3. Purpose of processing",
          body: (
            <ul className="list-disc pl-6 space-y-1">
              <li>Responding to your inquiry and preparing a consultation or proposal.</li>
              <li>Understanding how visitors use the site so I can improve it (analytics).</li>
              <li>
                Showing relevant ads to people who previously visited the site (remarketing).
              </li>
            </ul>
          )
        },
        {
          title: "4. Legal basis",
          body: (
            <p>
              Processing is based on your <strong>consent</strong> (e.g. submitting a contact
              form, accepting cookies) and on my <strong>legitimate interest</strong> in
              understanding site performance and reaching potential clients who have shown
              interest in my services.
            </p>
          )
        },
        {
          title: "5. Third parties",
          body: (
            <>
              <p>Data may be shared with, or processed by, the following third-party services:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Google Analytics / Google Ads</strong> — website analytics and
                  advertising performance measurement.
                </li>
                <li>
                  <strong>Meta (Facebook/Instagram)</strong> — advertising and remarketing via
                  the Meta Pixel.
                </li>
                <li>
                  <strong>FormSubmit</strong> — used to forward contact form submissions to my
                  email inbox.
                </li>
              </ul>
              <p>
                These providers process data under their own privacy policies and may transfer
                data outside the EU/EEA under standard contractual safeguards.
              </p>
            </>
          )
        },
        {
          title: "6. Data retention",
          body: (
            <p>
              Contact form submissions are kept only as long as needed to respond to your
              inquiry and, if we start working together, for the duration of our business
              relationship plus any period required by Serbian accounting/tax law. Analytics
              data is retained according to Google Analytics&apos; default retention settings.
            </p>
          )
        },
        {
          title: "7. Your rights",
          body: (
            <>
              <p>Under GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access the personal data I hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data (&quot;right to be forgotten&quot;).</li>
                <li>Object to processing based on legitimate interest, including marketing.</li>
              </ul>
              <p>
                To exercise any of these rights, email{" "}
                <a href="mailto:info@slobodan-jelisavac.com" className="text-primary hover:underline">
                  info@slobodan-jelisavac.com
                </a>
                . I&apos;ll respond within a reasonable timeframe.
              </p>
            </>
          )
        },
        {
          title: "8. Changes to this policy",
          body: (
            <p>
              This policy may be updated from time to time to reflect changes in tools,
              regulations, or how the site works. The date below shows the last revision.
            </p>
          )
        }
      ]
    : [
        {
          title: "1. Ko smo",
          body: (
            <>
              <p>
                Ovaj sajt vodi Slobodan Jelisavac, nezavisni Google Ads konsultant sa sedištem
                u Batajnici, Srbija.
              </p>
              <p>
                Za bilo kakvo pitanje u vezi sa ovom politikom ili vašim ličnim podacima, možete
                me kontaktirati direktno na{" "}
                <a href="mailto:info@slobodan-jelisavac.com" className="text-primary hover:underline">
                  info@slobodan-jelisavac.com
                </a>
                .
              </p>
            </>
          )
        },
        {
          title: "2. Koje podatke prikupljamo",
          body: (
            <>
              <p>U zavisnosti od toga kako koristite sajt, mogu prikupiti:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Podatke iz kontakt forme</strong> — ime, email adresu, sajt (ako je
                  navedete) i informacije o budžetu/biznisu koje delite prilikom zakazivanja
                  konsultacije.
                </li>
                <li>
                  <strong>Analitičke podatke</strong> — posećene stranice, vreme provedeno na
                  sajtu, informacije o uređaju i pregledaču, prikupljene putem Google
                  Analytics 4 (GA4) i Google Tag Manager (GTM) kolačića.
                </li>
                <li>
                  <strong>Podatke za oglašavanje</strong> — Meta pixel može zabeležiti vašu
                  posetu i interakcije na sajtu u svrhu oglašavanja.
                </li>
              </ul>
            </>
          )
        },
        {
          title: "3. Svrha obrade",
          body: (
            <ul className="list-disc pl-6 space-y-1">
              <li>Odgovor na vaš upit i priprema konsultacije ili ponude.</li>
              <li>Razumevanje kako posetioci koriste sajt, radi njegovog poboljšanja (analitika).</li>
              <li>
                Prikazivanje relevantnih oglasa ljudima koji su prethodno posetili sajt
                (remarketing).
              </li>
            </ul>
          )
        },
        {
          title: "4. Pravni osnov",
          body: (
            <p>
              Obrada se zasniva na vašoj <strong>saglasnosti</strong> (npr. slanje kontakt
              forme, prihvatanje kolačića) i na mom <strong>legitimnom interesu</strong> da
              razumem performanse sajta i dopren do potencijalnih klijenata koji su pokazali
              interesovanje za moje usluge.
            </p>
          )
        },
        {
          title: "5. Treće strane",
          body: (
            <>
              <p>Podaci mogu biti podeljeni sa, ili obrađeni od strane, sledećih servisa trećih strana:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Google Analytics / Google Ads</strong> — analitika sajta i merenje
                  performansi oglašavanja.
                </li>
                <li>
                  <strong>Meta (Facebook/Instagram)</strong> — oglašavanje i remarketing putem
                  Meta pixel-a.
                </li>
                <li>
                  <strong>FormSubmit</strong> — koristi se za prosleđivanje poruka iz kontakt
                  forme na moj email.
                </li>
              </ul>
              <p>
                Ovi provajderi obrađuju podatke prema sopstvenim politikama privatnosti i mogu
                prenositi podatke van EU/EEA uz standardne ugovorne zaštitne mere.
              </p>
            </>
          )
        },
        {
          title: "6. Čuvanje podataka",
          body: (
            <p>
              Podaci iz kontakt forme čuvaju se samo onoliko koliko je potrebno da se odgovori
              na vaš upit i, ako krenemo u saradnju, tokom trajanja poslovnog odnosa uz period
              propisan srpskim računovodstvenim/poreskim zakonima. Analitički podaci se čuvaju
              prema podrazumevanim podešavanjima Google Analytics-a.
            </p>
          )
        },
        {
          title: "7. Vaša prava",
          body: (
            <>
              <p>Prema GDPR-u, imate pravo na:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Pristup ličnim podacima koje čuvam o vama.</li>
                <li>Zahtev za ispravku netačnih podataka.</li>
                <li>Zahtev za brisanje vaših podataka (&quot;pravo na zaborav&quot;).</li>
                <li>Prigovor na obradu zasnovanu na legitimnom interesu, uključujući marketing.</li>
              </ul>
              <p>
                Za ostvarivanje bilo kog od ovih prava, pošaljite email na{" "}
                <a href="mailto:info@slobodan-jelisavac.com" className="text-primary hover:underline">
                  info@slobodan-jelisavac.com
                </a>
                . Odgovoriću u razumnom roku.
              </p>
            </>
          )
        },
        {
          title: "8. Izmene politike",
          body: (
            <p>
              Ova politika može povremeno biti ažurirana kako bi odražavala promene u
              alatima, regulativi ili funkcionisanju sajta. Datum ispod prikazuje poslednju
              reviziju.
            </p>
          )
        }
      ];

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <nav className="mb-6 text-sm text-slate-400">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {isEn ? "Home" : "Početna"}
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">
                {isEn ? "Privacy Policy" : "Politika Privatnosti"}
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            {isEn ? "Privacy Policy" : "Politika Privatnosti"}
          </h1>
          <p className="text-slate-300">
            {isEn
              ? "This page explains what personal data I collect through this website, why, and what rights you have."
              : "Ova stranica objašnjava koje lične podatke prikupljam putem ovog sajta, zašto, i koja prava imate."}
          </p>
        </div>
      </section>

      {/* Content */}
      <Section>
        <div className="max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                {section.title}
              </h2>
              <div className="space-y-3">{section.body}</div>
            </div>
          ))}

          <p className="text-sm text-gray-500 pt-6 border-t border-gray-200">
            {isEn ? "Last updated: July 5, 2026." : "Poslednje ažurirano: 5. jul 2026."}
          </p>
        </div>
      </Section>
    </>
  );
}
