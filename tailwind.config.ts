import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a73e8",
          dark: "#1557b0",
        },
        secondary: "#34a853",
        accent: {
          DEFAULT: "#fbbc04",
          red: "#ea4335",
        },
        gray: {
          50: "#f8f9fa",
          900: "#202124",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "5px 5px 0 0 #202124",
        "card-hover": "0 0 0 0 #202124",
      },
    },
  },
  plugins: [],
};

export default config;
