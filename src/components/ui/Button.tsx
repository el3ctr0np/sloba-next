"use client";

import { Link } from "@/i18n/navigation";
import type { ComponentProps } from "react";
import { trackCtaClick } from "@/lib/track";

type LinkHref = ComponentProps<typeof Link>["href"];

interface ButtonProps {
  children: React.ReactNode;
  href?: LinkHref | string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  /**
   * Optional string identifier for `cta_click` dataLayer tracking. Passed as a
   * string (not a function) so this prop stays serializable when Button is
   * rendered from a Server Component. When set, fires `trackCtaClick` on click
   * using this value as `cta_location` and `href` as `cta_destination`.
   */
  ctaLocation?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  ctaLocation,
}: ButtonProps) {
  const baseStyles = variant === "primary" ? "btn-primary" : "btn-secondary";

  if (href) {
    const handleLinkClick = ctaLocation
      ? () => trackCtaClick(ctaLocation, String(href))
      : undefined;
    return (
      <Link
        href={href as LinkHref}
        onClick={handleLinkClick}
        className={`${baseStyles} inline-block ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${className}`}>
      {children}
    </button>
  );
}
