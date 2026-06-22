import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type DropdownEntry = {
  to: string;
  params?: Record<string, string>;
  label: string;
  meta?: string;
};

type Props = {
  to: string;
  label: string;
  entries: DropdownEntry[];
};

export function NavDropdownItem({ to, label, entries }: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Esc and outside click
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const isActive = pathname === to || pathname.startsWith(`${to}/`);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <div className="flex items-center gap-1">
        <Link
          to={to as never}
          className={`whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.18em] transition-colors hover:text-ink xl:text-[11px] xl:tracking-[0.22em] ${
            isActive ? "text-ink" : "text-ink-muted"
          }`}
        >
          {label}
        </Link>
        <button
          type="button"
          aria-label={`Mostrar ${label}`}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-ink-muted hover:text-ink transition-colors"
        >
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Panel */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-200 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-1 pointer-events-none"
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <div className="min-w-[320px] max-w-[min(90vw,640px)] rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-xl p-3">
          <div className="grid sm:grid-cols-2 gap-1">
            {entries.map((e) => (
              <Link
                key={`${e.to}-${e.label}`}
                to={e.to as never}
                params={e.params as never}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 hover:bg-nude/50 transition-colors"
              >
                <p className="font-display text-base text-ink leading-snug">
                  {e.label}
                </p>
                {e.meta ? (
                  <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-ink-muted/80">
                    {e.meta}
                  </p>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type MobileProps = {
  to: string;
  label: string;
  entries: DropdownEntry[];
  onNavigate: () => void;
};

export function MobileNavGroup({ to, label, entries, onNavigate }: MobileProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/50">
      <div className="flex items-center justify-between py-4">
        <Link
          to={to as never}
          onClick={onNavigate}
          className="font-display text-2xl text-ink"
        >
          {label}
        </Link>
        <button
          type="button"
          aria-label={`Mostrar ${label}`}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[60vh] opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 pl-1">
          {entries.map((e) => (
            <Link
              key={`${e.to}-${e.label}`}
              to={e.to as never}
              params={e.params as never}
              onClick={onNavigate}
              className="py-2 text-base text-ink-muted hover:text-ink"
            >
              {e.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
