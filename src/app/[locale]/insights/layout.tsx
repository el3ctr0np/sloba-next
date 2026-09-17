import { Source_Serif_4 } from "next/font/google";

// Talas 6, samo EN: serifni font za telo Insights izvestaja (ne za naslove -
// h1-h6 vec imaju font-heading iz globals.css base layer, koji ima prednost
// nad nasledjenim font-family sa ove promenljive). Ucitan ovde (layout, modul
// scope) po specu; klasa/promenljiva se koristi na <article> u page.tsx.
const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
  variable: "--font-source-serif-4"
});

export default function InsightsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className={sourceSerif4.variable}>{children}</div>;
}
