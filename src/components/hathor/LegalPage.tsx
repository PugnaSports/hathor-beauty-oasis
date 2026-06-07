import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { CLINIC } from "@/lib/hathor";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type Props = {
  eyebrow?: string;
  title: string;
  updatedAt: string;
  intro?: ReactNode;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow = "Legal", title, updatedAt, intro, sections }: Props) {
  return (
    <article className="px-6 pt-16 pb-24">
      <div className="mx-auto max-w-3xl">
        <header className="border-b border-border/60 pb-10">
          <p className="text-[10px] uppercase tracking-[0.32em] text-gold">{eyebrow}</p>
          <h1 className="mt-5 font-display text-4xl md:text-5xl leading-[1.05] text-balance">
            {title}
          </h1>
          <p className="mt-5 text-xs uppercase tracking-[0.22em] text-ink-muted">
            Última actualización: {updatedAt}
          </p>
          {intro ? (
            <div className="mt-6 text-ink-muted leading-relaxed text-pretty space-y-4">
              {intro}
            </div>
          ) : null}
        </header>

        <nav aria-label="Índice" className="mt-10 rounded-2xl bg-nude/40 p-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Índice</p>
          <ol className="mt-4 space-y-2 text-sm">
            {sections.map((s, i) => (
              <li key={s.id} className="flex gap-3">
                <span className="text-ink-muted tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <a href={`#${s.id}`} className="text-ink hover:text-gold transition-colors">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-14 space-y-14">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-2xl md:text-3xl text-ink">
                {s.title}
              </h2>
              <div className="mt-5 text-ink-muted leading-relaxed text-pretty space-y-4 [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-gold [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_strong]:text-ink">
                {s.content}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-border/60 bg-background p-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold">¿Tienes dudas?</p>
          <p className="mt-3 font-display text-2xl text-ink">
            Estamos aquí para ayudarte
          </p>
          <p className="mt-3 text-sm text-ink-muted">
            Escríbenos a{" "}
            <a href={`mailto:${CLINIC.email}`} className="text-ink underline underline-offset-4 hover:text-gold">
              {CLINIC.email}
            </a>{" "}
            o contáctanos desde nuestra página.
          </p>
          <div className="mt-6">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-background hover:bg-gold transition-colors"
            >
              Ir a contacto
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}