import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/hathor/SectionHeader";
import { CTALink } from "@/components/hathor/CTAButton";
import productosImg from "@/assets/hathor-productos.jpg";
import { PRODUCTS } from "@/lib/hathor";

export const Route = createFileRoute("/productos/")({
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
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PRODUCTS.map((cat, i) => {
            const cover = cat.products.find((p) => p.image)?.image;
            return (
              <Link
                key={cat.slug}
                to="/productos/$categoria"
                params={{ categoria: cat.slug }}
                className={`group block reveal ${i % 2 === 1 ? "md:translate-y-10" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="overflow-hidden rounded-2xl bg-white border border-border/60 aspect-[4/5] flex items-center justify-center p-8">
                  {cover ? (
                    <img
                      src={cover}
                      alt={cat.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <span className="font-display text-3xl text-ink-muted">
                      {cat.name}
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-mono text-[11px] tracking-widest text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl">{cat.name}</h2>
                </div>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {cat.description}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-ink-muted/80">
                  {cat.products.length} productos
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink group-hover:text-gold">
                  Ver productos <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-ink-muted leading-relaxed">
          Las recomendaciones de producto siempre se realizan tras una valoración
          personalizada en clínica.
        </p>
      </section>
    </>
  );
}