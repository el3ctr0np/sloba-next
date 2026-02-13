import { Link } from "@/i18n/navigation";
import type { ComponentProps } from "react";

type LinkHref = ComponentProps<typeof Link>["href"];

interface ButtonProps {
  children: React.ReactNode;
  href?: LinkHref | string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button"
}: ButtonProps) {
  const baseStyles = variant === "primary" ? "btn-primary" : "btn-secondary";

  if (href) {
    return (
      <Link href={href as LinkHref} className={`${baseStyles} inline-block ${className}`}>
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
