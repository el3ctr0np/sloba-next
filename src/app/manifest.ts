import type { MetadataRoute } from "next";

// Served automatically at /manifest.webmanifest. icon-192.png and
// icon-512.png already existed in public/ unused (H3, 23.9.2026 audit) — this
// just wires them up. Name/description in English: manifest text has no
// locale variant in Next's metadata API, and the site's own hreflang default
// is EN (x-default since 15.9.2026).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Slobodan Jelisavac - Google Ads Strategist",
    short_name: "Slobodan Jelisavac",
    description:
      "Google Ads strategist with a decade of experience. Performance Max, Shopping and Search campaigns.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdfdfc",
    theme_color: "#1a73e8",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
