import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, TREATMENTS, PRODUCTS } from "@/lib/hathor";
import {
  NavDropdownItem,
  MobileNavGroup,
  type DropdownEntry,
} from "./NavDropdownItem";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const treatmentEntries = useMemo<DropdownEntry[]>(
    () =>
      TREATMENTS.map((t) => ({
        to: "/tratamientos/$slug",
        params: { slug: t.slug },
        label: t.name,
      })),
    []
  );

  const productEntries = useMemo<DropdownEntry[]>(
    () =>
      PRODUCTS.map((c) => ({
        to: "/productos/$categoria",
        params: { categoria: c.slug },
        label: c.name,
        meta: `${c.products.length} productos`,
      })),
    []
  );

  const dropdownFor = (to: string): DropdownEntry[] | null => {
    if (to === "/tratamientos") return treatmentEntries;
    if (to === "/productos") return productEntries;
    return null;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex min-w-0 items-center"
          onClick={() => setOpen(false)}
          aria-label="Hathor — Inicio"
        >
          <span className="font-display text-2xl leading-none text-ink sm:text-[28px]">
            Hathor
          </span>
          <span className="ml-3 hidden max-w-[150px] text-[9px] font-medium uppercase leading-[1.35] tracking-[0.18em] text-ink-muted sm:block xl:max-w-[190px]">
            Clínica de medicina estética y capilar
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => {
            const entries = dropdownFor(link.to);
            if (entries) {
              return (
                <NavDropdownItem
                  key={link.to}
                  to={link.to}
                  label={link.label}
                  entries={entries}
                />
              );
            }
            return (
              <Link
                key={link.to}
                to={link.to}
                className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-muted transition-colors hover:text-ink"
                activeProps={{ className: "text-ink" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contacto"
            className="hidden h-11 items-center justify-center rounded-full bg-ink px-5 text-[10px] font-semibold uppercase leading-none tracking-[0.18em] text-background transition-colors hover:bg-gold sm:inline-flex xl:px-6"
          >
            Pedir cita
          </Link>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden border-t border-border/60 bg-background transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 overflow-y-auto max-h-[80vh]">
          {NAV_LINKS.map((link) => {
            const entries = dropdownFor(link.to);
            if (entries) {
              return (
                <MobileNavGroup
                  key={link.to}
                  to={link.to}
                  label={link.label}
                  entries={entries}
                  onNavigate={() => setOpen(false)}
                />
              );
            }
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-4 font-display text-2xl text-ink"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contacto"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-background"
          >
            Pedir cita
          </Link>
        </nav>
      </div>
    </header>
  );
}
