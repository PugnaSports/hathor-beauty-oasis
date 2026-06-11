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
              title="Donde la enfermería se une a la medicina estética y capilar"
              description="Hathor nace de la mano de Laura, enfermera y fundadora, como un espacio donde unir la atención sanitaria con la medicina estética y capilar desde un enfoque profesional, cercano y de confianza."
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

      {/* Laura */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5 reveal order-2 lg:order-1">
            <img
              src={sobreImg}
              alt="Laura, enfermera y fundadora de Hathor Clínica"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover rounded-3xl"
            />
          </div>
          <div className="lg:col-span-7 reveal order-1 lg:order-2">
            <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">
              Laura · Fundadora
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-[1.1]">
              Te doy la bienvenida a Hathor
            </h2>
            <p className="mt-6 text-ink-muted leading-relaxed">
              Soy Laura, enfermera y fundadora de esta clínica de medicina
              estética y capilar en Olesa de Montserrat.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Este proyecto nace de mi vocación por el cuidado de las personas
              y de mi deseo de crear un espacio donde la atención profesional,
              la cercanía y la confianza sean tan importantes como los propios
              tratamientos. A lo largo de mi experiencia sanitaria he aprendido
              que sentirse bien con uno mismo influye directamente en la
              autoestima, el bienestar y la calidad de vida.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Con esa filosofía decidí crear una clínica en la que cada paciente
              reciba una valoración personalizada y un acompañamiento cercano
              durante todo el proceso. Para ofrecer la máxima calidad
              asistencial, contamos además con un médico especialista en
              medicina capilar, lo que nos permite abordar cada caso desde una
              perspectiva médica y profesional.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Nuestro objetivo es ayudarte a conseguir resultados naturales,
              seguros y adaptados a tus necesidades, siempre desde la
              honestidad, la formación continua y el compromiso con tu
              bienestar.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Te damos la bienvenida a un espacio creado para cuidar de ti.
            </p>
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