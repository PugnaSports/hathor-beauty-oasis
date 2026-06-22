import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { ExternalLink } from "@/components/hathor/ExternalLink";
import { CLINIC, NAV_LINKS } from "@/lib/hathor";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-nude/40 pb-28 lg:pb-12 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div>
              <span className="font-display text-3xl leading-none text-ink">
                Hathor
              </span>
              <p className="mt-2 text-[10px] font-medium uppercase leading-relaxed tracking-[0.22em] text-ink-muted">
                Clínica de medicina estética y capilar
              </p>
            </div>
            <p className="mt-4 max-w-sm text-sm text-ink-muted leading-relaxed">
              Medicina estética y capilar en Olesa de Montserrat. Acompañamos cada caso desde la escucha, el criterio sanitario y la cercanía.
            </p>
            <ExternalLink
              href={CLINIC.instagramUrl}
              className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-ink hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
              {CLINIC.instagramHandle}
            </ExternalLink>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Navegación</p>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-ink-muted hover:text-ink"
                    activeProps={{ className: "text-ink" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Contacto</p>
            <ul className="mt-5 space-y-4 text-sm text-ink-muted">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                <span>{CLINIC.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-gold" />
                <a href={`tel:${CLINIC.phoneTel}`} className="hover:text-ink">
                  {CLINIC.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-gold" />
                <a href={`mailto:${CLINIC.email}`} className="hover:text-ink">
                  {CLINIC.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border/60 pt-8 text-xs text-ink-muted">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <p>
              © {new Date().getFullYear()} Hathor Clínica. Todos los derechos
              reservados.
            </p>
            <p className="max-w-xl leading-relaxed">
              La información de esta web es orientativa y no sustituye una
              valoración profesional personalizada.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-ink-muted">
            <Link to="/aviso-legal" className="hover:text-ink">
              Aviso legal
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/politica-privacidad" className="hover:text-ink">
              Política de privacidad
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/politica-cookies" className="hover:text-ink">
              Política de cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
