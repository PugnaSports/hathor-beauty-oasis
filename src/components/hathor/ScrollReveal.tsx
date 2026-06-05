import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Adds `.is-visible` to any element with `.reveal` once it enters the viewport.
 * Re-scans on every route change.
 */
export function ScrollReveal() {
  const location = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location]);

  return null;
}