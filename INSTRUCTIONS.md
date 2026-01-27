# CODEX INSTRUCTIONS - Slobodan Jelisavac Website

## PROJECT OVERVIEW
Building a Next.js website for Google Ads Strategist.
- **Stack:** Next.js 14+ (App Router), Tailwind CSS, TypeScript
- **Languages:** Serbian (SR) + English (EN)
- **Deployment:** Vercel

## IMPORTANT RULES
1. Complete ONE task at a time
2. Do NOT proceed to next task until current is verified working
3. Follow specs EXACTLY - no improvisation
4. After each task, reply "TASK XXX COMPLETE" and STOP

---

# TASK 001: Initialize Next.js Project

## DO THIS ONLY:
1. Initialize Next.js 14+ project with App Router
2. Use TypeScript
3. Use Tailwind CSS (select YES when prompted)
4. Use src/ directory (select YES)
5. Use import alias @/* (select YES)

## COMMAND:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

## DO NOT:
- Create any components yet
- Create any pages yet
- Modify any config files yet

## WHEN DONE:
Reply "TASK 001 COMPLETE" and STOP. Wait for next instruction.

---

# TASK 002: Configure Tailwind Theme

## DO THIS ONLY:
1. Replace contents of `tailwind.config.ts` with the config below
2. Replace contents of `src/app/globals.css` with the CSS below

## tailwind.config.ts - USE EXACTLY:
```typescript
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
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
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
```

## src/app/globals.css - USE EXACTLY:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply font-sans text-gray-900 bg-white;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading;
  }
}

@layer components {
  .btn-primary {
    @apply bg-primary text-white px-6 py-3 rounded-md font-semibold
           transition-all duration-300 hover:bg-primary-dark;
  }

  .btn-secondary {
    @apply bg-accent text-gray-900 px-6 py-3 rounded-md font-semibold
           border-2 border-gray-900 shadow-card transition-all duration-300
           hover:shadow-card-hover hover:translate-x-[5px] hover:translate-y-[5px];
  }

  .section-padding {
    @apply py-16 md:py-24 px-4 md:px-8;
  }

  .container-custom {
    @apply max-w-7xl mx-auto;
  }
}
```

## DO NOT:
- Create any components
- Create any pages
- Touch any other files

## WHEN DONE:
Reply "TASK 002 COMPLETE" and STOP. Wait for next instruction.

---

# TASK 003: Create Folder Structure

## DO THIS ONLY:
Create these folders (empty for now):

```
src/
  components/
    ui/
    layout/
    sections/
  lib/
  data/
  app/
    (already exists)
```

## COMMANDS:
```bash
mkdir -p src/components/ui
mkdir -p src/components/layout
mkdir -p src/components/sections
mkdir -p src/lib
mkdir -p src/data
```

## DO NOT:
- Create any files inside these folders yet
- Modify any existing files

## WHEN DONE:
Reply "TASK 003 COMPLETE" and STOP. Wait for next instruction.

---

# TASK 004: Create Base UI Components

## DO THIS ONLY:
Create these 4 files with EXACT content:

### File 1: src/components/ui/Button.tsx
```tsx
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick
}: ButtonProps) {
  const baseStyles = variant === "primary" ? "btn-primary" : "btn-secondary";

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} inline-block ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${className}`}>
      {children}
    </button>
  );
}
```

### File 2: src/components/ui/Card.tsx
```tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`
        bg-white border-2 border-gray-900 rounded-lg p-6
        ${hover ? "shadow-card transition-all duration-300 hover:shadow-card-hover hover:translate-x-[5px] hover:translate-y-[5px]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
```

### File 3: src/components/ui/Section.tsx
```tsx
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray";
  id?: string;
}

export function Section({
  children,
  className = "",
  background = "white",
  id
}: SectionProps) {
  const bgColor = background === "gray" ? "bg-gray-50" : "bg-white";

  return (
    <section id={id} className={`section-padding ${bgColor} ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
}
```

### File 4: src/components/ui/index.ts
```tsx
export { Button } from "./Button";
export { Card } from "./Card";
export { Section } from "./Section";
```

## DO NOT:
- Create any other components
- Modify any other files
- Create any pages

## WHEN DONE:
Reply "TASK 004 COMPLETE" and STOP. Wait for next instruction.

---

# TASK 005: Create Header Component

## DO THIS ONLY:
Create the Header component with navigation.

### File: src/components/layout/Header.tsx
```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui";

const navItems = [
  { label: "Početna", href: "/" },
  {
    label: "Usluge",
    href: "/usluge",
    children: [
      { label: "Google Ads Upravljanje", href: "/usluge/google-ads-upravljanje" },
      { label: "Performance Max", href: "/usluge/performance-max" },
      { label: "Google Shopping", href: "/usluge/google-shopping" },
      { label: "SEO", href: "/usluge/seo" },
      { label: "Meta Oglašavanje", href: "/usluge/meta-oglasavanje" },
    ]
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "O Meni", href: "/o-meni" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-900">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link href="/" className="font-heading font-bold text-xl">
            Slobodan Jelisavac
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                  {item.children && (
                    <span className="ml-1">▼</span>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border-2 border-gray-900 rounded-lg shadow-card py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 hover:bg-gray-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button href="/kontakt" variant="secondary">
              Zakaži Poziv
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            {mobileMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t-2 border-gray-900 py-4 px-4">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <Link
                  href={item.href}
                  className="font-medium block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-gray-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4">
              <Button href="/kontakt" variant="secondary" className="w-full text-center">
                Zakaži Poziv
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
```

### File: src/components/layout/index.ts
```tsx
export { Header } from "./Header";
```

## DO NOT:
- Create Footer yet
- Create any pages
- Modify other files

## WHEN DONE:
Reply "TASK 005 COMPLETE" and STOP. Wait for next instruction.

---

# TASK 006: Create Footer Component

## DO THIS ONLY:
Create Footer component.

### File: src/components/layout/Footer.tsx
```tsx
import Link from "next/link";

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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Partner @ <a href="https://funky.enterprises" target="_blank" rel="noopener noreferrer" className="hover:text-white">Funky Enterprises</a> - Za market lidere
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
```

### Update: src/components/layout/index.ts
```tsx
export { Header } from "./Header";
export { Footer } from "./Footer";
```

## DO NOT:
- Create any pages yet
- Modify other files

## WHEN DONE:
Reply "TASK 006 COMPLETE" and STOP. Wait for next instruction.

---

# TASK 007: Create Root Layout with Header & Footer

## DO THIS ONLY:
Update the root layout to include Header and Footer.

### File: src/app/layout.tsx
```tsx
import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slobodan Jelisavac - Google Ads Strategist",
  description: "Google Ads strategist sa decenijom iskustva. Performance Max, Shopping i Search kampanje. AI-first optimizacije.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

## DO NOT:
- Create homepage content yet
- Create any other pages

## WHEN DONE:
Reply "TASK 007 COMPLETE" and STOP. Wait for next instruction.

---

# TASK 008: Create Homepage Hero Section

## DO THIS ONLY:
Create the Hero section component and basic homepage.

### File: src/components/sections/Hero.tsx
```tsx
import { Button } from "@/components/ui";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  trustBadges?: string[];
}

export function Hero({
  title,
  subtitle,
  ctaText = "Zakažite Konsultaciju",
  ctaHref = "/kontakt",
  trustBadges = []
}: HeroProps) {
  return (
    <section className="py-20 md:py-32 px-4 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button href={ctaHref} variant="secondary">
                {ctaText}
              </Button>
              <Button href="/case-studies" variant="primary">
                Pogledajte Rezultate
              </Button>
            </div>

            {/* Trust Badges */}
            {trustBadges.length > 0 && (
              <div className="flex flex-wrap gap-4 items-center text-sm text-gray-600">
                {trustBadges.map((badge, index) => (
                  <span key={index} className="flex items-center gap-2">
                    <span className="text-secondary">✓</span> {badge}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-96 bg-gray-200 border-2 border-gray-900 rounded-lg flex items-center justify-center shadow-card">
              <span className="text-gray-500">Hero Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### File: src/components/sections/index.ts
```tsx
export { Hero } from "./Hero";
```

### File: src/app/page.tsx
```tsx
import { Hero } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero
        title="Google Ads Strategist sa Decenijom Iskustva"
        subtitle="AI-first optimizacije za eCommerce, B2B i SaaS brendove. Maksimizujte ROI sa strategijama koje donose merljive rezultate."
        ctaText="Zakažite Besplatnu Konsultaciju"
        ctaHref="/kontakt"
        trustBadges={[
          "10+ Godina Iskustva",
          "UK Search Awards",
          "Google Partner"
        ]}
      />
    </>
  );
}
```

## DO NOT:
- Create other sections yet
- Create other pages

## WHEN DONE:
Run `npm run dev` to verify it works, then reply "TASK 008 COMPLETE" and STOP.

---

# TASK 009: Create "Why Me" Section

## DO THIS ONLY:
Create the WhyMe section with 6 feature cards.

### File: src/components/sections/WhyMe.tsx
```tsx
import { Card } from "@/components/ui";

const features = [
  {
    icon: "📅",
    title: "10+ Godina Iskustva",
    description: "Decenija rada sa premium brendovima iz EU i UK tržišta."
  },
  {
    icon: "💰",
    title: "€2M+ Godišnji Ad Spend",
    description: "Upravljam značajnim budžetima sa dokazanim rezultatima."
  },
  {
    icon: "🌍",
    title: "UK & EU Tržišta",
    description: "Iskustvo sa međunarodnim kampanjama i lokalnim brendovima."
  },
  {
    icon: "🤖",
    title: "AI-First Pristup",
    description: "Koristim Gemini, Claude i napredne alate za optimizaciju."
  },
  {
    icon: "👤",
    title: "Direktan Pristup",
    description: "Radite direktno sa ekspertom, bez junior staff-a."
  },
  {
    icon: "📊",
    title: "Transparentno",
    description: "Jasni izveštaji, bez skrivenih troškova, fokus na rezultate."
  }
];

export function WhyMe() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Decenija Ekspertize u Digitalnom Oglašavanju
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-heading font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Update: src/components/sections/index.ts
```tsx
export { Hero } from "./Hero";
export { WhyMe } from "./WhyMe";
```

### Update: src/app/page.tsx - ADD WhyMe after Hero
```tsx
import { Hero, WhyMe } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero
        title="Google Ads Strategist sa Decenijom Iskustva"
        subtitle="AI-first optimizacije za eCommerce, B2B i SaaS brendove. Maksimizujte ROI sa strategijama koje donose merljive rezultate."
        ctaText="Zakažite Besplatnu Konsultaciju"
        ctaHref="/kontakt"
        trustBadges={[
          "10+ Godina Iskustva",
          "UK Search Awards",
          "Google Partner"
        ]}
      />
      <WhyMe />
    </>
  );
}
```

## WHEN DONE:
Reply "TASK 009 COMPLETE" and STOP.

---

# TASK 010: Create Services Preview Section

## DO THIS ONLY:
Create the Services section showing 8 service cards.

### File: src/components/sections/ServicesPreview.tsx
```tsx
import Link from "next/link";
import { Card } from "@/components/ui";

const services = [
  { icon: "🎯", title: "Google Ads", href: "/usluge/google-ads-upravljanje" },
  { icon: "⚡", title: "Performance Max", href: "/usluge/performance-max" },
  { icon: "🛒", title: "Google Shopping", href: "/usluge/google-shopping" },
  { icon: "🔍", title: "SEO", href: "/usluge/seo" },
  { icon: "📱", title: "Meta Oglašavanje", href: "/usluge/meta-oglasavanje" },
  { icon: "📺", title: "YouTube Oglasi", href: "/usluge/youtube-oglasi" },
  { icon: "📊", title: "Tracking Setup", href: "/usluge/conversion-tracking" },
  { icon: "🚀", title: "Performance Marketing", href: "/usluge/performance-marketing", featured: true },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Usluge koje Donose Rezultate
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Specijalizovane strategije za svaki aspekt digitalnog oglašavanja.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <Card className={`text-center h-full ${service.featured ? 'border-primary' : ''}`}>
                <span className="text-3xl mb-3 block">{service.icon}</span>
                <h3 className="font-heading font-semibold">
                  {service.title}
                </h3>
                {service.featured && (
                  <span className="text-xs text-primary mt-2 block">⭐ Premium</span>
                )}
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/usluge" className="text-primary font-semibold hover:underline">
            Sve usluge →
          </Link>
        </div>
      </div>
    </section>
  );
}
```

### Update: src/components/sections/index.ts
```tsx
export { Hero } from "./Hero";
export { WhyMe } from "./WhyMe";
export { ServicesPreview } from "./ServicesPreview";
```

### Update: src/app/page.tsx
```tsx
import { Hero, WhyMe, ServicesPreview } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero
        title="Google Ads Strategist sa Decenijom Iskustva"
        subtitle="AI-first optimizacije za eCommerce, B2B i SaaS brendove. Maksimizujte ROI sa strategijama koje donose merljive rezultate."
        ctaText="Zakažite Besplatnu Konsultaciju"
        ctaHref="/kontakt"
        trustBadges={[
          "10+ Godina Iskustva",
          "UK Search Awards",
          "Google Partner"
        ]}
      />
      <WhyMe />
      <ServicesPreview />
    </>
  );
}
```

## WHEN DONE:
Reply "TASK 010 COMPLETE" and STOP.

---

# TASK 011: Create Case Studies Preview Section

## DO THIS ONLY:
Create Case Studies preview with 3 featured case studies.

### File: src/components/sections/CaseStudiesPreview.tsx
```tsx
import Link from "next/link";
import { Card, Button } from "@/components/ui";

const caseStudies = [
  {
    name: "Mobelaris",
    industry: "eCommerce - Luksuzni nameštaj",
    metric: "ROI: 1.8 → 3.7",
    result: "€30k → €85k/mes",
    href: "/case-studies/mobelaris"
  },
  {
    name: "DesignerGlasses",
    industry: "eCommerce - Naočare",
    metric: "ROI: 3.9x",
    result: "£5k → £62k/mes",
    href: "/case-studies/designerglasses"
  },
  {
    name: "SoundBox Store",
    industry: "eCommerce - Audio oprema",
    metric: "3X Rast prodaje",
    result: "-50% CPA",
    href: "/case-studies/soundboxstore"
  }
];

export function CaseStudiesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Rezultati Koji Govore
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Pogledajte kako sam pomogao brendovima da ostvare značajan rast.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Link key={index} href={study.href}>
              <Card className="h-full">
                <span className="text-sm text-gray-500 mb-2 block">{study.industry}</span>
                <h3 className="text-xl font-heading font-bold mb-4">{study.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-2xl font-bold text-primary">{study.metric}</p>
                  <p className="text-secondary font-semibold">{study.result}</p>
                </div>
                <span className="text-primary font-medium">Pogledaj →</span>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button href="/case-studies" variant="primary">
            Svi Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
```

### Update: src/components/sections/index.ts
```tsx
export { Hero } from "./Hero";
export { WhyMe } from "./WhyMe";
export { ServicesPreview } from "./ServicesPreview";
export { CaseStudiesPreview } from "./CaseStudiesPreview";
```

### Update: src/app/page.tsx - ADD after ServicesPreview
```tsx
import { Hero, WhyMe, ServicesPreview, CaseStudiesPreview } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero
        title="Google Ads Strategist sa Decenijom Iskustva"
        subtitle="AI-first optimizacije za eCommerce, B2B i SaaS brendove. Maksimizujte ROI sa strategijama koje donose merljive rezultate."
        ctaText="Zakažite Besplatnu Konsultaciju"
        ctaHref="/kontakt"
        trustBadges={[
          "10+ Godina Iskustva",
          "UK Search Awards",
          "Google Partner"
        ]}
      />
      <WhyMe />
      <ServicesPreview />
      <CaseStudiesPreview />
    </>
  );
}
```

## WHEN DONE:
Reply "TASK 011 COMPLETE" and STOP.

---

# TASK 012: Create Testimonial Section

## DO THIS ONLY:
Create a Testimonial section.

### File: src/components/sections/Testimonial.tsx
```tsx
export function Testimonial() {
  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom max-w-4xl text-center">
        <blockquote className="text-2xl md:text-3xl font-heading font-medium mb-8 leading-relaxed">
          "With Slobodan's expertise, we successfully scaled our Google Ads campaigns
          while improving ROI from 1.8 to 3.7. His AI-first approach and deep understanding
          of eCommerce made all the difference."
        </blockquote>
        <div>
          <p className="font-semibold text-lg">Jason</p>
          <p className="text-gray-400">CEO @ Mobelaris</p>
        </div>
      </div>
    </section>
  );
}
```

### Update: src/components/sections/index.ts
```tsx
export { Hero } from "./Hero";
export { WhyMe } from "./WhyMe";
export { ServicesPreview } from "./ServicesPreview";
export { CaseStudiesPreview } from "./CaseStudiesPreview";
export { Testimonial } from "./Testimonial";
```

### Update: src/app/page.tsx - ADD after CaseStudiesPreview
```tsx
import { Hero, WhyMe, ServicesPreview, CaseStudiesPreview, Testimonial } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero
        title="Google Ads Strategist sa Decenijom Iskustva"
        subtitle="AI-first optimizacije za eCommerce, B2B i SaaS brendove. Maksimizujte ROI sa strategijama koje donose merljive rezultate."
        ctaText="Zakažite Besplatnu Konsultaciju"
        ctaHref="/kontakt"
        trustBadges={[
          "10+ Godina Iskustva",
          "UK Search Awards",
          "Google Partner"
        ]}
      />
      <WhyMe />
      <ServicesPreview />
      <CaseStudiesPreview />
      <Testimonial />
    </>
  );
}
```

## WHEN DONE:
Reply "TASK 012 COMPLETE" and STOP.

---

# TASK 013: Create Newsletter Section

## DO THIS ONLY:
Create Newsletter signup section.

### File: src/components/sections/Newsletter.tsx
```tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with newsletter service
    console.log("Newsletter signup:", email);
    setEmail("");
    alert("Hvala na prijavi!");
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-2xl text-center">
        <span className="text-4xl mb-4 block">📧</span>
        <h2 className="text-3xl font-heading font-bold mb-4">
          Budite u Toku sa Google Ads Novostima
        </h2>
        <p className="text-gray-600 mb-8">
          Prijavite se za newsletter i dobijajte najnovije informacije o Google Ads
          ažuriranjima, AI optimizacijama i strategijama koje donose rezultate.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Vaš email"
            required
            className="px-4 py-3 border-2 border-gray-900 rounded-md flex-1 max-w-md focus:outline-none focus:border-primary"
          />
          <Button variant="secondary">
            Prijavi se
          </Button>
        </form>
      </div>
    </section>
  );
}
```

### Update: src/components/sections/index.ts
```tsx
export { Hero } from "./Hero";
export { WhyMe } from "./WhyMe";
export { ServicesPreview } from "./ServicesPreview";
export { CaseStudiesPreview } from "./CaseStudiesPreview";
export { Testimonial } from "./Testimonial";
export { Newsletter } from "./Newsletter";
```

### Update: src/app/page.tsx - ADD after Testimonial
```tsx
import { Hero, WhyMe, ServicesPreview, CaseStudiesPreview, Testimonial, Newsletter } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero
        title="Google Ads Strategist sa Decenijom Iskustva"
        subtitle="AI-first optimizacije za eCommerce, B2B i SaaS brendove. Maksimizujte ROI sa strategijama koje donose merljive rezultate."
        ctaText="Zakažite Besplatnu Konsultaciju"
        ctaHref="/kontakt"
        trustBadges={[
          "10+ Godina Iskustva",
          "UK Search Awards",
          "Google Partner"
        ]}
      />
      <WhyMe />
      <ServicesPreview />
      <CaseStudiesPreview />
      <Testimonial />
      <Newsletter />
    </>
  );
}
```

## WHEN DONE:
Reply "TASK 013 COMPLETE" and STOP.

---

# TASK 014: Create Final CTA Section

## DO THIS ONLY:
Create the final CTA section for homepage.

### File: src/components/sections/FinalCTA.tsx
```tsx
import { Button } from "@/components/ui";

export function FinalCTA() {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Spremni da Unapredite Rezultate?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Zakažite besplatnu konsultaciju i saznajte kako možemo zajedno
          maksimizovati vaš Google Ads ROI.
        </p>
        <Button
          href="/kontakt"
          className="bg-white text-primary hover:bg-gray-100 border-white"
        >
          Zakažite Besplatnu Konsultaciju
        </Button>
      </div>
    </section>
  );
}
```

### Update: src/components/sections/index.ts
```tsx
export { Hero } from "./Hero";
export { WhyMe } from "./WhyMe";
export { ServicesPreview } from "./ServicesPreview";
export { CaseStudiesPreview } from "./CaseStudiesPreview";
export { Testimonial } from "./Testimonial";
export { Newsletter } from "./Newsletter";
export { FinalCTA } from "./FinalCTA";
```

### Update: src/app/page.tsx - FINAL VERSION
```tsx
import {
  Hero,
  WhyMe,
  ServicesPreview,
  CaseStudiesPreview,
  Testimonial,
  Newsletter,
  FinalCTA
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero
        title="Google Ads Strategist sa Decenijom Iskustva"
        subtitle="AI-first optimizacije za eCommerce, B2B i SaaS brendove. Maksimizujte ROI sa strategijama koje donose merljive rezultate."
        ctaText="Zakažite Besplatnu Konsultaciju"
        ctaHref="/kontakt"
        trustBadges={[
          "10+ Godina Iskustva",
          "UK Search Awards",
          "Google Partner"
        ]}
      />
      <WhyMe />
      <ServicesPreview />
      <CaseStudiesPreview />
      <Testimonial />
      <Newsletter />
      <FinalCTA />
    </>
  );
}
```

## WHEN DONE:
Run `npm run dev` and verify the complete homepage. Reply "TASK 014 COMPLETE" and STOP.

---

# HOMEPAGE COMPLETE CHECKPOINT

After TASK 014, the homepage should have:
- ✅ Header with navigation
- ✅ Hero section
- ✅ Why Me section (6 cards)
- ✅ Services preview (8 cards)
- ✅ Case Studies preview (3 cards)
- ✅ Testimonial
- ✅ Newsletter signup
- ✅ Final CTA
- ✅ Footer

Take a screenshot and verify before proceeding to next tasks.

---

# TASK 015: Create Contact Page

## DO THIS ONLY:
Create contact page with form.

### File: src/app/kontakt/page.tsx
```tsx
"use client";
import { useState } from "react";
import { Section, Button } from "@/components/ui";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Poruka poslata!");
  };

  return (
    <Section>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-heading font-bold mb-4 text-center">Kontakt</h1>
        <p className="text-gray-600 text-center mb-8">Zakažite besplatnu konsultaciju</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Ime" required className="w-full p-3 border-2 border-gray-900 rounded-md" onChange={(e) => setFormData({...formData, name: e.target.value})} />
          <input type="email" placeholder="Email" required className="w-full p-3 border-2 border-gray-900 rounded-md" onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <textarea placeholder="Poruka" rows={5} required className="w-full p-3 border-2 border-gray-900 rounded-md" onChange={(e) => setFormData({...formData, message: e.target.value})} />
          <Button variant="secondary" className="w-full">Pošalji</Button>
        </form>
      </div>
    </Section>
  );
}
```

## WHEN DONE:
Reply "TASK 015 COMPLETE" and STOP.

---

# TASK 016: Create About Page

### File: src/app/o-meni/page.tsx
```tsx
import { Section, Button } from "@/components/ui";

export default function AboutPage() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-heading font-bold mb-6">O Meni</h1>
        <p className="text-xl text-gray-600 mb-6">Google Ads Strategist sa decenijom iskustva u radu sa premium brendovima iz EU i UK.</p>
        <div className="space-y-4 text-gray-700">
          <p>Sa preko 10 godina iskustva u digitalnom oglašavanju, specijalizovao sam se za Google Ads strategije koje donose merljive rezultate.</p>
          <p>Koristim AI-first pristup kombinujući napredne alate sa dubokim razumevanjem platforme.</p>
          <p>Partner @ Funky Enterprises za premium brendove i market lidere.</p>
        </div>
        <div className="mt-8"><Button href="/kontakt" variant="secondary">Zakažite Konsultaciju</Button></div>
      </div>
    </Section>
  );
}
```

## WHEN DONE:
Reply "TASK 016 COMPLETE" and STOP.

---

# TASK 017: Create Services Listing Page

### File: src/app/usluge/page.tsx
```tsx
import Link from "next/link";
import { Section, Card } from "@/components/ui";

const services = [
  { title: "Google Ads Upravljanje", href: "/usluge/google-ads-upravljanje", desc: "Kompletno upravljanje kampanjama" },
  { title: "Performance Max", href: "/usluge/performance-max", desc: "AI-powered kampanje" },
  { title: "Google Shopping", href: "/usluge/google-shopping", desc: "eCommerce optimizacija" },
  { title: "SEO", href: "/usluge/seo", desc: "Organski rast" },
  { title: "Meta Oglašavanje", href: "/usluge/meta-oglasavanje", desc: "Facebook & Instagram" },
  { title: "YouTube Oglasi", href: "/usluge/youtube-oglasi", desc: "Video marketing" },
];

export default function ServicesPage() {
  return (
    <Section>
      <h1 className="text-4xl font-heading font-bold mb-4 text-center">Usluge</h1>
      <p className="text-gray-600 text-center mb-12">Specijalizovane strategije za digitalno oglašavanje</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Link key={s.href} href={s.href}>
            <Card className="h-full"><h3 className="font-heading font-bold text-xl mb-2">{s.title}</h3><p className="text-gray-600">{s.desc}</p></Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
```

## WHEN DONE:
Reply "TASK 017 COMPLETE" and STOP.

---

# TASK 018: Create Service Page Template

Create reusable template at `src/components/templates/ServicePageTemplate.tsx`
Props: title, subtitle, problems (array), solutions (array), pricing (array), faqs (array)
Sections: Hero, Problem (3 cards), Solution, Pricing (3-tier cards), FAQ accordion, CTA
Use existing UI components. Reference content-brief-service-pages.md for structure.

WHEN DONE: Reply "TASK 018 COMPLETE"

---

# TASK 019-030: Individual Service Pages

Create these pages using ServicePageTemplate. Get content from `/c/Users/el3ct/dev/Website/jelisavac/Novi sajt - Slobodan Jelisavac x Asarum/content-brief-service-pages.md`

| Task | File Path | Content Section |
|------|-----------|-----------------|
| 019 | src/app/usluge/google-ads-upravljanje/page.tsx | Section 2 |
| 020 | src/app/usluge/google-ads-audit/page.tsx | Section 3 |
| 021 | src/app/usluge/google-shopping/page.tsx | Section 4 |
| 022 | src/app/usluge/performance-max/page.tsx | Section 5 |
| 023 | src/app/usluge/search-kampanje/page.tsx | Section 6 |
| 024 | src/app/usluge/remarketing/page.tsx | Section 7 |
| 025 | src/app/usluge/youtube-oglasi/page.tsx | Section 8 |
| 026 | src/app/usluge/google-ads-za-b2b/page.tsx | Section 9 |
| 027 | src/app/usluge/google-ads-za-ecommerce/page.tsx | Section 10 |
| 028 | src/app/usluge/seo/page.tsx | Section 12 |
| 029 | src/app/usluge/meta-oglasavanje/page.tsx | Section 13 |
| 030 | src/app/usluge/performance-marketing/page.tsx | Section 16 |

Do ONE page at a time. Reply "TASK XXX COMPLETE" after each.

---

# TASK 031: Create FAQ Accordion Component

File: `src/components/ui/Accordion.tsx`
- Expandable/collapsible items
- Plus/minus icon toggle
- Smooth animation
- Export from ui/index.ts

---

# TASK 032: Create Case Studies Listing Page

File: `src/app/case-studies/page.tsx`
- Grid of 3 case study cards (Mobelaris, DesignerGlasses, SoundBox)
- Use Card component
- Link to individual pages

---

# TASK 033-035: Individual Case Study Pages

| Task | File | Client |
|------|------|--------|
| 033 | src/app/case-studies/mobelaris/page.tsx | Mobelaris |
| 034 | src/app/case-studies/designerglasses/page.tsx | DesignerGlasses |
| 035 | src/app/case-studies/soundboxstore/page.tsx | SoundBox Store |

Each page: Hero, Challenge, Solution, Results (metrics), Testimonial, CTA
Use data from website-structure doc.

---

# TASK 036: Create Blog Listing Page

File: `src/app/blog/page.tsx`
- Grid of blog post cards
- Static data array with 3 placeholder posts
- Each card: title, excerpt, date, category, link

---

# TASK 037: Create Blog Post Template

File: `src/app/blog/[slug]/page.tsx`
- Dynamic route
- Static params for 3 placeholder posts
- Layout: Title, meta, content area, sidebar placeholder

---

# TASK 038: Create Pricing Page

File: `src/app/cenovnik/page.tsx`
Content from website-structure doc Section "CENOVNIK STRUKTURA"
- 3 tier cards (Starter €300, Standard Na upit, Premium Na upit)
- Additional services section
- CTA

---

# TASK 039: Vercel Deployment

Run: `npx vercel` or push to GitHub and connect to Vercel
Verify all pages work on production URL

---

# TASK 040-045: SEO & i18n

| Task | Description |
|------|-------------|
| 040 | Add metadata to all pages (use generateMetadata in each page.tsx) |
| 041 | Create src/app/sitemap.ts for auto sitemap generation |
| 042 | Create src/app/robots.ts |
| 043 | Add Schema markup (JSON-LD) to homepage and service pages |
| 044 | Set up next-intl or similar for SR/EN - restructure to /[locale]/ routes |
| 045 | Add language switcher to Header |

# TASK 046-048: Final Polish

| Task | Description |
|------|-------------|
| 046 | Add Open Graph images (create /public/og-image.png) |
| 047 | Test all pages mobile/desktop |
| 048 | Deploy final version to Vercel |

# TASK 049-061: CONTENT UPDATE - Service Pages

Content source: `/c/Users/el3ct/dev/Website/jelisavac/Novi sajt - Slobodan Jelisavac x Asarum-20260126T084153Z-3-001/Novi sajt - Slobodan Jelisavac x Asarum`

**IMPORTANT RULES:**
- **PRESERVE SERBIAN DIACRITICS** (č, ć, š, ž, đ, Č, Ć, Š, Ž, Đ) - DO NOT remove or replace them!
- Remove ALL AI signals (checkboxes [ ], TODO markers, etc)
- Convert markdown to proper JSX/TSX
- Style with Tailwind classes
- Keep SEO meta tags updated
- Use existing components (Section, Card, Button)

| Task | Content File | Target Page |
|------|--------------|-------------|
| 049 | _sr_usluge_.md | src/app/usluge/page.tsx |
| 050 | _sr_usluge_google-ads-upravljanje_.md | src/app/usluge/google-ads-upravljanje/page.tsx |
| 051 | _sr_usluge_google-ads-audit_.md | src/app/usluge/google-ads-audit/page.tsx |
| 052 | _sr_usluge_google-shopping-kampanje_.md | src/app/usluge/google-shopping/page.tsx |
| 053 | _sr_usluge_performance-max_.md | src/app/usluge/performance-max/page.tsx |
| 054 | _sr_usluge_search-kampanje_.md | src/app/usluge/search-kampanje/page.tsx |
| 055 | _sr_usluge_remarketing_.md | src/app/usluge/remarketing/page.tsx |
| 056 | _sr_usluge_youtube-oglasi_.md | src/app/usluge/youtube-oglasi/page.tsx |
| 057 | _sr_usluge_google-ads-b2b_.md | src/app/usluge/google-ads-za-b2b/page.tsx |
| 058 | _sr_usluge_google-ads-ecommerce_.md | src/app/usluge/google-ads-za-ecommerce/page.tsx |
| 059 | _sr_usluge_google-ads-saas_.md | src/app/usluge/google-ads-za-saas/page.tsx |
| 060 | _sr_usluge_konsultacije_.md | src/app/usluge/konsultacije/page.tsx |
| 061 | _sr_usluge_starter-paket_.md | src/app/usluge/starter-paket/page.tsx |
| 062 | _sr_usluge_performance-marketing_.md | src/app/usluge/performance-marketing/page.tsx |

Reply "TASK XXX COMPLETE" after each.

---

# TASK 063-077: CONTENT UPDATE - Blog/Guide Posts

Create blog posts from these files. Place in `src/app/blog/[slug]/` or create static pages.

| Task | Content File | Slug |
|------|--------------|------|
| 063 | _google-ads-vodic_koliko-kosta-google-ads_.md | koliko-kosta-google-ads |
| 064 | _google-ads-vodic_google-oglasavanje-za-firme_.md | google-oglasavanje-za-firme |
| 065 | _google-ads-vodic_performance-max_.md | performance-max-vodic |
| 066 | _google-ads-vodic_google-shopping-kampanje_.md | google-shopping-vodic |
| 067 | _google-ads-vodic_agencija-vs-freelancer-vs-inhouse_.md | agencija-vs-freelancer |
| 068 | _google-ads-vodic_conversion-tracking_.md | conversion-tracking-vodic |
| 069 | _google-ads-vodic_google-ads-greske_.md | google-ads-greske |
| 070 | _google-ads-vodic_zasto-google-ads-ne-donosi-rezultate_.md | zasto-nema-rezultata |
| 071 | _google-ads-vodic_google-ads-ecommerce-vs-b2b_.md | ecommerce-vs-b2b |
| 072 | _google-ads-vodic_google-ads-vs-meta-ads_.md | google-ads-vs-meta |
| 073 | _google-ads-vodic_google-ads-audit_.md | google-ads-audit-vodic |
| 074 | _google-ads-vodic_kljucne-reci_.md | kljucne-reci-vodic |
| 075 | _google-ads-vodic_negative-keywords_.md | negativne-kljucne-reci |
| 076 | _google-ads-vodic_quality-score_.md | quality-score-vodic |
| 077 | _google-ads-vodic_remarketing_.md | remarketing-vodic |

For each blog post:
1. Read content file
2. Create page at src/app/blog/[slug]/page.tsx
3. Remove AI artifacts (checkboxes, TODOs)
4. Add proper SEO metadata (generateMetadata)
5. Style with Tailwind
6. Add internal links where relevant

Reply "TASK XXX COMPLETE" after each.

---

# TASK 078: Update Blog Listing

Update `src/app/blog/page.tsx` to include all 15 new blog posts with:
- Title, excerpt, category, date
- Link to each post
- Grid layout with BlogPostCard

---

# DONE

All tasks complete. Site ready for launch.
