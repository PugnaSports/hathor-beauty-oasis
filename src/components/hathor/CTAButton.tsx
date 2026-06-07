import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import {
  EXTERNAL_LINK_REL,
  handleExternalLinkClick,
  isExternalHttpHref,
} from "@/lib/external-links";

type Variant = "primary" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-ink text-background hover:bg-gold",
  outline:
    "border border-ink/15 text-ink hover:border-gold hover:text-gold",
  ghost:
    "text-ink hover:text-gold",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] transition-all duration-300";

export function CTALink({
  variant = "primary",
  className = "",
  ...props
}: { variant?: Variant } & ComponentProps<typeof Link>) {
  return <Link {...props} className={`${base} ${styles[variant]} ${className}`} />;
}

export function CTAAnchor({
  variant = "primary",
  className = "",
  href,
  onClick,
  rel,
  target,
  ...props
}: { variant?: Variant } & ComponentProps<"a">) {
  const isExternal = isExternalHttpHref(href);

  return (
    <a
      {...props}
      href={href}
      rel={rel ?? (isExternal ? EXTERNAL_LINK_REL : undefined)}
      target={target ?? (isExternal ? "_blank" : undefined)}
      onClick={(event) => handleExternalLinkClick(event, href, onClick)}
      className={`${base} ${styles[variant]} ${className}`}
    />
  );
}