import type { ComponentProps } from "react";
import { EXTERNAL_LINK_REL, handleExternalLinkClick } from "@/lib/external-links";

export function ExternalLink({
  href,
  onClick,
  rel = EXTERNAL_LINK_REL,
  target = "_blank",
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      {...props}
      href={href}
      target={target}
      rel={rel}
      onClick={(event) => handleExternalLinkClick(event, href, onClick)}
    />
  );
}