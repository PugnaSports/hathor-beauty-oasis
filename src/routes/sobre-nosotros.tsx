import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/hathor/SectionHeader";
import { CTALink } from "@/components/hathor/CTAButton";
import sobreImg from "@/assets/hathor-sobre.jpg";
import heroImg from "@/assets/hathor-hero.jpg";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre nosotros — Hathor Clínica" },
      {
        name: "description",
        content:
          "Conoce Hathor: un espacio de confianza para cuidar la estética, la piel y el cabello desde un enfoque profesional y personalizado.",
      },
      { property: "og:title", content: "Sobre nosotros — Hathor Clínica" },
      {
        property: "og:description",
        content:
          "Un espacio de confianza para cuidar tu estética, piel y cabello en Olesa de Montserrat.",
      },
    ],
  }),
  component: SobrePage,
});

const values = [
  {
    title: "Cercanía",
    desc: "Te escuchamos primero. Cada plan parte de una conversación honesta sobre lo que buscas mejorar.",
  },
  {
    title: "Profesionalidad",
    desc: "Trabajamos con criterio médico y aparatología contrastada, sin promesas exageradas.",
  },
  {
    title: "Personalización",
    desc: "Ningún tratamiento es estándar. Adaptamos cada protocolo a tu piel, tu cabello y tus tiempos.",
  },
];

function SobrePage() {
  return (
    <>
      <section className="px-6 pt-16 pb-20">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Sobre Hathor"
              title="Un espacio donde la estética se une al cuidado"
              description="Hathor nace para ofrecer un espacio de confianza donde cuidar la estética, la piel y el cabello desde un enfoque profesional, personalizado y cercano."
            />
            <p className="mt-6 text-ink-muted leading-relaxed reveal">
              Cada tratamiento se valora de forma individual para adaptar la
              recomendación a las necesidades reales de cada persona. Creemos en los
              resultados naturales, sostenibles y siempre alineados con lo que tú
              quieres mejorar.
            </p>
            <div className="mt-9 reveal">
              <CTALink to="/contacto">Reserva tu valoración</CTALink>
            </div>
          </div>
          <div className="lg:col-span-6 reveal">
            <img
              src={sobreImg}
              alt="Recepción luminosa de la clínica Hathor"
              loading="lazy"
              width={1280}
              height={1600}
              className="w-full aspect-[4/5] object-cover rounded-3xl"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-3xl overflow-hidden">
            {values.map((v, i) => (
              <div key={v.title} className="bg-background p-10 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="font-mono text-[11px] tracking-widest text-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl relative overflow-hidden rounded-3xl">
          <img
            src={heroImg}
            alt="Cabina de tratamiento en la clínica Hathor"
            loading="lazy"
            width={1280}
            height={1600}
            className="w-full h-[420px] md:h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-14 max-w-xl text-background reveal">
            <p className="text-[10px] uppercase tracking-[0.32em] text-gold-soft mb-4">
              Olesa de Montserrat
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-background">
              Te esperamos en Carrer Anselm Clavé 144.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}