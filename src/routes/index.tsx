import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, ShieldCheck, HeartPulse, Cpu } from "lucide-react";
import heroImg from "@/assets/hathor-hero.jpg";
import sobreImg from "@/assets/hathor-sobre.jpg";
import facialImg from "@/assets/hathor-facial.jpg";
import capilarImg from "@/assets/hathor-capilar.jpg";
import corporalImg from "@/assets/hathor-corporal.jpg";
import { CTAAnchor, CTALink } from "@/components/hathor/CTAButton";
import { FaqSection } from "@/components/hathor/FaqSection";
import { CLINIC } from "@/lib/hathor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hathor — Medicina estética y capilar en Olesa de Montserrat" },
      {
        name: "description",
        content:
          "Clínica de medicina estética y capilar en Olesa de Montserrat. Tratamientos faciales, corporales y capilares con enfoque personalizado.",
      },
      {
        property: "og:title",
        content: "Hathor — Medicina estética y capilar en Olesa de Montserrat",
      },
      {
        property: "og:description",
        content:
          "Tratamientos faciales, corporales y capilares con un enfoque cercano, profesional y personalizado.",
      },
    ],
  }),
  component: Index,
});

const trustPoints = [
  { icon: HeartPulse, label: "Atención personalizada" },
  { icon: Sparkles, label: "Medicina estética" },
  { icon: ShieldCheck, label: "Tratamientos capilares" },
  { icon: Cpu, label: "Aparatología avanzada" },
];

const servicePreview = [
  {
    slug: "medicina-estetica-facial",
    title: "Medicina estética facial",
    desc: "Tratamientos para realzar tus rasgos de forma natural y armoniosa.",
    img: facialImg,
  },
  {
    slug: "medicina-capilar",
    title: "Medicina capilar",
    desc: "Diagnóstico y cuidado avanzado para la salud del cuero cabelludo y el cabello.",
    img: capilarImg,
  },
  {
    slug: "tratamientos-corporales",
    title: "Tratamientos corporales",
    desc: "Protocolos para cuidar la piel y la silueta con resultados visibles.",
    img: corporalImg,
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-10 pb-24 md:pt-16 md:pb-32">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 reveal">
            <p className="text-[10px] uppercase tracking-[0.35em] text-gold mb-6">
              Olesa de Montserrat · Estética & Capilar
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance">
              Medicina estética y capilar en{" "}
              <span className="italic">Olesa de Montserrat</span>
            </h1>
            <p className="mt-7 max-w-xl text-base md:text-lg text-ink-muted leading-relaxed">
              Tratamientos faciales, corporales y capilares con un enfoque cercano,
              profesional y personalizado para cuidar tu piel y tu cabello.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTALink to="/contacto">Pedir cita</CTALink>
              <CTALink to="/tratamientos" variant="outline">
                Ver tratamientos
              </CTALink>
            </div>

            <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 max-w-md">
              {trustPoints.map((p) => (
                <li key={p.label} className="flex items-center gap-3 text-sm text-ink">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-nude">
                    <p.icon className="h-4 w-4 text-gold" />
                  </span>
                  {p.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 reveal">
            <div className="relative">
              <img
                src={heroImg}
                alt="Interior luminoso de la clínica Hathor con detalles en beige y dorado"
                width={1280}
                height={1600}
                className="w-full aspect-[4/5] object-cover rounded-3xl"
              />
              <div className="absolute -bottom-8 -left-8 hidden md:block w-44 h-44 lg:w-52 lg:h-52 rounded-2xl border-[10px] border-background overflow-hidden">
                <img
                  src={facialImg}
                  alt="Tratamiento facial estético"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="px-6 py-24 bg-nude/40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div className="max-w-xl reveal">
              <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">
                Especialidades
              </p>
              <h2 className="font-display text-3xl md:text-5xl leading-tight">
                Cuidado integral con enfoque <span className="italic">médico</span>
              </h2>
            </div>
            <CTALink to="/tratamientos" variant="ghost" className="self-start md:self-end">
              Ver todos <ArrowUpRight className="h-4 w-4" />
            </CTALink>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {servicePreview.map((s, i) => (
              <Link
                to="/tratamientos/$slug"
                params={{ slug: s.slug }}
                key={s.title}
                className={`group block reveal ${i === 1 ? "md:translate-y-8" : ""}`}
              >
                <div className="overflow-hidden rounded-2xl bg-background">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink group-hover:text-gold">
                  Descubrir <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre nosotros teaser */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 reveal">
            <img
              src={sobreImg}
              alt="Recepción de la clínica Hathor en Olesa de Montserrat"
              loading="lazy"
              width={1280}
              height={1600}
              className="w-full aspect-[4/5] object-cover rounded-3xl"
            />
          </div>
          <div className="lg:col-span-6 reveal">
            <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">
              Sobre Hathor
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05]">
              Un espacio donde cuidar tu piel,{" "}
              <span className="italic">tu cabello y tu confianza</span>
            </h2>
            <p className="mt-6 text-ink-muted text-lg leading-relaxed">
              Hathor nace para ofrecer un espacio de confianza donde cuidar la
              estética, la piel y el cabello desde un enfoque profesional,
              personalizado y cercano.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Cada tratamiento se valora de forma individual para adaptar la
              recomendación a las necesidades reales de cada persona.
            </p>
            <div className="mt-9">
              <CTALink to="/sobre-nosotros" variant="outline">
                Conócenos
              </CTALink>
            </div>
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <FaqSection className="bg-nude/30" />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-ink text-background px-8 py-16 md:p-20 reveal">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <p className="text-[10px] uppercase tracking-[0.32em] text-gold-soft mb-5">
                Reserva tu valoración
              </p>
              <h2 className="font-display text-3xl md:text-5xl leading-tight text-background">
                Hablemos de lo que quieres mejorar.
              </h2>
              <p className="mt-5 max-w-xl text-background/70 leading-relaxed">
                Te atendemos en {CLINIC.address}. Reserva una valoración y diseñamos
                contigo un plan a medida.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end flex-wrap gap-3">
              <CTAAnchor href={`tel:${CLINIC.phoneTel}`} variant="primary" className="bg-gold hover:bg-background hover:text-ink">
                Llamar ahora
              </CTAAnchor>
              <CTALink to="/contacto" variant="outline" className="border-background/30 text-background hover:text-gold-soft hover:border-gold-soft">
                Contacto
              </CTALink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
