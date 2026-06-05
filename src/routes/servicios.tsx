import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/hathor/SectionHeader";
import { CTAAnchor, CTALink } from "@/components/hathor/CTAButton";
import { CLINIC } from "@/lib/hathor";
import facialImg from "@/assets/hathor-facial.jpg";
import corporalImg from "@/assets/hathor-corporal.jpg";
import laserImg from "@/assets/hathor-laser.jpg";
import capilarImg from "@/assets/hathor-capilar.jpg";
import aparatologiaImg from "@/assets/hathor-aparatologia.jpg";
import asesoramientoImg from "@/assets/hathor-asesoramiento.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Hathor Clínica de Medicina Estética y Capilar" },
      {
        name: "description",
        content:
          "Medicina estética facial, tratamientos corporales, láser, medicina capilar, aparatología avanzada y asesoramiento personalizado en Olesa de Montserrat.",
      },
      { property: "og:title", content: "Servicios — Hathor Clínica" },
      {
        property: "og:description",
        content:
          "Especialidades en medicina estética y capilar, con aparatología avanzada y valoración personalizada.",
      },
    ],
  }),
  component: ServiciosPage,
});

const services = [
  {
    n: "01",
    title: "Medicina estética facial",
    desc: "Tratamientos enfocados a hidratar, revitalizar y armonizar los rasgos del rostro de forma natural, siempre tras una valoración personalizada.",
    img: facialImg,
  },
  {
    n: "02",
    title: "Tratamientos corporales",
    desc: "Cuidado y mantenimiento de la piel corporal mediante protocolos adaptados a cada objetivo y tipo de piel.",
    img: corporalImg,
  },
  {
    n: "03",
    title: "Láser",
    desc: "Aplicaciones láser para distintos objetivos estéticos. Cada protocolo se valora previamente según el fototipo y las necesidades reales.",
    img: laserImg,
  },
  {
    n: "04",
    title: "Medicina capilar",
    desc: "Valoración, seguimiento y tratamientos para el cuidado del cuero cabelludo y la salud del cabello.",
    img: capilarImg,
  },
  {
    n: "05",
    title: "Aparatología avanzada",
    desc: "Equipamiento de última generación como apoyo para personalizar tratamientos estéticos y capilares.",
    img: aparatologiaImg,
  },
  {
    n: "06",
    title: "Asesoramiento personalizado",
    desc: "Valoración inicial individualizada para diseñar el plan de cuidado más adecuado a tus necesidades.",
    img: asesoramientoImg,
  },
];

function ServiciosPage() {
  return (
    <>
      <section className="px-6 pt-16 pb-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Servicios"
            title="Especialidades pensadas para ti"
            description="Cada tratamiento se valora de forma individual. Estos son los grandes ámbitos en los que te podemos acompañar."
          />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`reveal group ${i % 2 === 1 ? "md:translate-y-10" : ""}`}
            >
              <div className="overflow-hidden rounded-2xl bg-nude">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-mono text-[11px] tracking-widest text-gold">
                  {s.n}
                </span>
                <h2 className="font-display text-2xl">{s.title}</h2>
              </div>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Aparatología / Prysm iO */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl rounded-3xl bg-ink text-background px-8 py-16 md:p-20 reveal">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.32em] text-gold-soft mb-5">
                Tecnología
              </p>
              <h2 className="font-display text-3xl md:text-5xl leading-[1.05]">
                Precisión y seguimiento con <span className="italic">Prysm iO</span>
              </h2>
              <p className="mt-6 text-background/70 leading-relaxed max-w-xl">
                Tecnología de apoyo para diagnóstico, seguimiento y personalización de
                tratamientos estéticos y capilares. Nos permite ajustar cada sesión a la
                evolución real de tu piel y tu cabello.
              </p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm text-background/80">
                <li className="flex gap-2"><span className="text-gold-soft">·</span> Análisis detallado de la piel</li>
                <li className="flex gap-2"><span className="text-gold-soft">·</span> Seguimiento de la evolución</li>
                <li className="flex gap-2"><span className="text-gold-soft">·</span> Protocolos personalizados</li>
                <li className="flex gap-2"><span className="text-gold-soft">·</span> Valoración capilar avanzada</li>
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <CTALink to="/contacto" className="bg-gold hover:bg-background hover:text-ink">
                  Pedir valoración
                </CTALink>
                <CTAAnchor
                  href={`tel:${CLINIC.phoneTel}`}
                  variant="outline"
                  className="border-background/30 text-background hover:text-gold-soft hover:border-gold-soft"
                >
                  {CLINIC.phoneDisplay}
                </CTAAnchor>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img
                src={aparatologiaImg}
                alt="Aparatología avanzada para diagnóstico y tratamiento"
                loading="lazy"
                width={1280}
                height={1280}
                className="w-full aspect-square object-cover rounded-2xl border border-background/10"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}