import { Link } from "@/i18n/navigation";

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

