import { Inter, Poppins } from "next/font/google";

// Shared font instances. They live here (not in a layout) because more than one
// layout renders <html>/<body> now: the locale layout, the global not-found and
// the Sanity Studio layout. next/font must be initialised at module scope.

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
});

export const fontVariables = `${inter.variable} ${poppins.variable}`;
