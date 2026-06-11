import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/hathor/SectionHeader";
import { CTALink } from "@/components/hathor/CTAButton";
import productosImg from "@/assets/hathor-productos.jpg";
import { PRODUCTS } from "@/lib/hathor";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos profesionales — Hathor Clínica" },
      {
        name: "description",
        content:
          "Asesoramiento experto en productos profesionales para el cuidado facial, capilar, corporal y solar.",
      },
      { property: "og:title", content: "Productos profesionales — Hathor Clínica" },
      {
        property: "og:description",
        content:
          "Recomendamos productos de cuidado facial, corporal y capilar según cada caso, con asesoramiento experto.",
      },
    ],
  }),
  component: ProductosPage,
});

function ProductosPage() {
  return (
    <>
      <section className="px-6 pt-16 pb-16">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Productos profesionales"
              title="Asesoramiento experto, no venta agresiva"
              description="Te recomendamos productos de cuidado facial, corporal y capilar según tu valoración. El objetivo es prolongar y cuidar los resultados conseguidos en clínica, sin sobrecargar tu rutina."
            />
            <div className="mt-9">
              <CTALink to="/contacto">Solicita asesoramiento</CTALink>
            </div>
          </div>
          <div className="lg:col-span-6 reveal">
            <img
              src={productosImg}
              alt="Selección de productos profesionales de cuidado facial y capilar"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full aspect-square object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-8">
          {PRODUCTS.map((cat, i) => (
            <div
              key={cat.slug}
              className="reveal rounded-3xl border border-border/60 bg-background p-8 lg:p-10 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] tracking-widest text-gold">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl">{cat.name}</h3>
              </div>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                {cat.description}
              </p>
              <ul className="mt-8 divide-y divide-border/60 border-t border-border/60">
                {cat.products.map((p) => (
                <li key={p.name} className="py-6 flex gap-5">
                  {p.image ? (
                    <div className="shrink-0 w-24 sm:w-28 aspect-square overflow-hidden rounded-xl bg-white border border-border/60 flex items-center justify-center p-2">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : null}
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-lg text-ink leading-snug">
                      {p.name}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-gold">
                      {p.format}
                    </p>
                    {(p.ref || p.size) && (
                      <p className="mt-1 text-xs text-ink-muted">
                        {p.ref ? <>Ref. {p.ref}</> : null}
                        {p.ref && p.size ? " · " : null}
                        {p.size ?? null}
                      </p>
                    )}
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-ink-muted leading-relaxed">
          Las recomendaciones de producto siempre se realizan tras una valoración
          personalizada en clínica.
        </p>
      </section>
    </>
  );
}