"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const logos = [
  { src: "/client-logos/designerglasses-uk-logo.svg.webp", alt: "DesignerGlasses UK" },
  { src: "/client-logos/mobelaris-ecomm-logo.svg.webp", alt: "Mobelaris" },
  { src: "/client-logos/soundbox-store-uk-logo.svg.webp", alt: "SoundBox Store" },
  { src: "/client-logos/merrythought.co.uk-logo9.webp", alt: "Merrythought" },
  { src: "/client-logos/johnsonsjewellers.co.uk-logo13.webp", alt: "Johnsons Jewellers" },
  { src: "/client-logos/partypieces.co.uk-logo11.webp", alt: "Party Pieces" },
  { src: "/client-logos/perun-moto-oprema-logo.svg.webp", alt: "Perun Moto Oprema" },
  { src: "/client-logos/pickbox-hrvatska-logo.svg.webp", alt: "Pickbox" },
  { src: "/client-logos/little-seeds.co.uk-logo9.webp", alt: "Little Seeds" },
  { src: "/client-logos/bestatprinting.co.uk-logo9.webp", alt: "Best at Printing" },
];

export function ClientLogos() {
  const t = useTranslations("ClientLogos");
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-16 md:py-24 bg-gray-900 overflow-hidden">
      <div className="container-custom px-4 mb-12">
        <p className="text-center text-white/50 text-sm uppercase tracking-widest mb-3">
          {t("subtitle")}
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-white">
          {t("heading")}
        </h2>
      </div>

      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10" />

        {/* Marquee track */}
        <div className="flex animate-marquee">
          {allLogos.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center h-16"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={60}
                loading="lazy"
                className="h-10 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
