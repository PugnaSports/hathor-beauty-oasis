import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/hathor/SectionHeader";
import { CTALink } from "@/components/hathor/CTAButton";
import productosImg from "@/assets/hathor-productos.jpg";

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

const categories = [
  {
    title: "Cuidado facial",
    desc: "Limpiadores, sérums, hidratantes y rutinas adaptadas a tu tipo de piel y objetivos.",
  },
  {
    title: "Capilar",
    desc: "Productos profesionales para el cuidado del cuero cabelludo y la salud del cabello.",
  },
  {
    title: "Corporal",
    desc: "Cremas y tratamientos para complementar los protocolos de cabina en casa.",
  },
  {
    title: "Protección solar",
    desc: "Fotoprotección de uso diario, esencial para cuidar y mantener cualquier tratamiento.",
  },
];

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
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-3xl overflow-hidden">
          {categories.map((c, i) => (
            <div
              key={c.title}
              className="bg-background p-8 lg:p-10 flex flex-col reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-mono text-[11px] tracking-widest text-gold">
                0{i + 1}
              </span>
              <h3 className="mt-5 font-display text-2xl">{c.title}</h3>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">{c.desc}</p>
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