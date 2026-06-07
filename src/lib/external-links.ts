import type { MouseEvent, MouseEventHandler } from "react";

export const EXTERNAL_LINK_REL = "noopener noreferrer";

export function isExternalHttpHref(href?: string): href is string {
  return typeof href === "string" && /^https?:\/\//i.test(href);
}

export function handleExternalLinkClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string | undefined,
  onClick?: MouseEventHandler<HTMLAnchorElement>,
) {
  onClick?.(event);

  if (event.defaultPrevented || !isExternalHttpHref(href)) {
    return;
  }

  event.preventDefault();
  window.open(href, "_blank", "noopener,noreferrer");
}