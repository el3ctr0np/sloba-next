import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";

type Props = {
  /** Glossary term slug (e.g., "ctr", "roas", "poas") */
  slug: string;
  /** Optional — the visible text. Defaults to children or slug. */
  children?: ReactNode;
  /** Additional class names to merge with default styling */
  className?: string;
};

/**
 * Inline link to a PPC Glossary term.
 * Renders as `<a href="/recnik#slug">...</a>` with a dotted underline
 * styled like an inline definition. Locale-aware via next-intl Link.
 *
 * Usage in blog posts (SR or EN .tsx files):
 *   <GlossaryLink slug="ctr">CTR</GlossaryLink>
 *   <GlossaryLink slug="roas">ROAS</GlossaryLink>
 *
 * Purpose:
 * - Internal linking density (every blog post → glossary)
 * - Entity authority reinforcement for AI search
 * - User retention (hover-over definition tooltips could be added)
 */
export function GlossaryLink({ slug, children, className = "" }: Props) {
  return (
    <Link
      href={{ pathname: "/recnik", hash: slug }}
      className={`text-primary border-b border-dotted border-primary/40 hover:border-primary transition-colors ${className}`}
      title={`Vidi definiciju — ${slug.toUpperCase()}`}
    >
      {children ?? slug.toUpperCase()}
    </Link>
  );
}
