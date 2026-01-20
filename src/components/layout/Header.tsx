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
              <span className="text-2xl">✖</span>
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
