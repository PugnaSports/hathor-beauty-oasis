import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/hathor/SectionHeader";
import { TREATMENTS } from "@/lib/hathor";

export const Route = createFileRoute("/tratamientos/")({
  head: () => ({
    meta: [
      { title: "Tratamientos — Hathor Clínica de Medicina Estética y Capilar" },
      {
        name: "description",
        content:
          "Todos los tratamientos de Hathor: medicina estética facial, corporales, láser, capilar, aparatología avanzada y asesoramiento personalizado en Olesa de Montserrat.",
      },
      { property: "og:title", content: "Tratamientos — Hathor Clínica" },
      {
        property: "og:description",
        content:
          "Descubre todos los tratamientos disponibles en Hathor: faciales, corporales, capilares y aparatología avanzada.",
      },
    ],
  }),
  component: TratamientosIndex,
});

function TratamientosIndex() {
  return (
    <>
      <section className="px-6 pt-16 pb-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Tratamientos"
            title="Todos nuestros tratamientos"
            description="Cada tratamiento parte de una valoración individual. Explora todo lo que podemos hacer por ti."
          />
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {TREATMENTS.map((t, i) => (
            <Link
              key={t.slug}
              to="/tratamientos/$slug"
              params={{ slug: t.slug }}
              className={`group block reveal ${i % 2 === 1 ? "md:translate-y-10" : ""}`}
            >
              <div className="overflow-hidden rounded-2xl bg-nude">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-mono text-[11px] tracking-widest text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl">{t.name}</h2>
              </div>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">{t.short}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink group-hover:text-gold">
                Ver más <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}