import Image from "next/image";

const logos = [
  { src: "/client-logos/aromantic.co.uk-logo10.webp", alt: "Aromantic" },
  { src: "/client-logos/balkanmedic.rs-logo13.webp", alt: "Balkan Medic" },
  { src: "/client-logos/beedvine.com-logo11.webp", alt: "Beedvine" },
  { src: "/client-logos/bestatprinting.co.uk-logo9.webp", alt: "Bestat Printing" },
  { src: "/client-logos/blindburiedcircuits.com-logo9.webp", alt: "Blind Buried Circuits" },
  { src: "/client-logos/chatislav.ai-logo11.webp", alt: "Chatislav AI" },
  { src: "/client-logos/designereditions-logo.svg.webp", alt: "Designer Editions" },
  { src: "/client-logos/designerglasses-uk-logo.svg.webp", alt: "DesignerGlasses UK" },
  { src: "/client-logos/ecobeauty.rs-logo11.webp", alt: "Eco Beauty" },
  { src: "/client-logos/eczemacompany.com-logo11.webp", alt: "Eczema Company" },
  { src: "/client-logos/eliteshuttersandblinds.com-logo19.webp", alt: "Elite Shutters & Blinds" },
  { src: "/client-logos/eurodijagnostikanis.com-logo22.webp", alt: "Eurodijagnostika Niš" },
  { src: "/client-logos/everfun.hr-logo74.webp", alt: "Everfun" },
  { src: "/client-logos/expertdieselparts.com-logo46.webp", alt: "Expert Diesel Parts" },
  { src: "/client-logos/fireblockplans.com-logo10.webp", alt: "Fire Block Plans" },
  { src: "/client-logos/hitdoktor.com-logo9.webp", alt: "Hit Doktor" },
  { src: "/client-logos/igrandia.hr-logo10.webp", alt: "iGrandia" },
  { src: "/client-logos/johnsonsjewellers.co.uk-logo13.webp", alt: "Johnsons Jewellers" },
  { src: "/client-logos/kozmo.rs-logo11.webp", alt: "Kozmo" },
  { src: "/client-logos/laudividni.com-logo11.webp", alt: "Laudividni" },
  { src: "/client-logos/little-seeds.co.uk-logo9.webp", alt: "Little Seeds" },
  { src: "/client-logos/mbfinance.rs-logo25.webp", alt: "MB Finance" },
  { src: "/client-logos/merrythought.co.uk-logo9.webp", alt: "Merrythought" },
  { src: "/client-logos/metalflex.rs-logo278.webp", alt: "Metalflex" },
  { src: "/client-logos/mobelaris-ecomm-logo.svg.webp", alt: "Mobelaris" },
  { src: "/client-logos/modmobili.com-logo36.webp", alt: "ModMobili" },
  { src: "/client-logos/motoplast.rs-logo9.webp", alt: "Motoplast" },
  { src: "/client-logos/partypieces.co.uk-logo11.webp", alt: "Party Pieces" },
  { src: "/client-logos/perun-moto-oprema-logo.svg.webp", alt: "Perun Moto Oprema" },
  { src: "/client-logos/pickbox-hrvatska-logo.svg.webp", alt: "Pickbox" },
  { src: "/client-logos/pickboxnow-hrvatska-logo.webp", alt: "Pickbox NOW" },
  { src: "/client-logos/six-eyed-scorpion-aus-logo.svg.webp", alt: "Six Eyed Scorpion" },
  { src: "/client-logos/soundbox-store-uk-logo.svg.webp", alt: "SoundBox Store" },
  { src: "/client-logos/thecravory.com-logo21.webp", alt: "The Cravory" },
  { src: "/client-logos/yoronaturals.com-logo11.webp", alt: "Yoro Naturals" },
  { src: "/client-logos/zavodgaj.rs-logo16.webp", alt: "Zavod GAJ" }
];

export function ClientLogos() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Brendovi Koji Mi Veruju
          </h2>
          <p className="text-gray-600">
            Od lokalnih lidera do međunarodnih eCommerce brendova — fokus je uvek na
            rastu, profitu i dugoročnim rezultatima.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="flex items-center justify-center bg-white border-2 border-gray-900 rounded-lg px-4 py-3 h-20"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={240}
                height={120}
                className="h-10 md:h-12 w-auto object-contain"
                sizes="(min-width: 1024px) 160px, (min-width: 640px) 120px, 100px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
