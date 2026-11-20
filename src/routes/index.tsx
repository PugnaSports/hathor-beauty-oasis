import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, ShieldCheck, HeartPulse, Cpu, Star } from "lucide-react";
import heroImg from "@/assets/hathor-hero-retouched.png";
import sobreImg from "@/assets/hathor-sobre.jpg";
import facialImg from "@/assets/hathor-facial.jpg";
import { CTAAnchor, CTALink } from "@/components/hathor/CTAButton";
import { FaqSection } from "@/components/hathor/FaqSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CLINIC, TREATMENTS } from "@/lib/hathor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hathor - Medicina estética y capilar en Olesa de Montserrat" },
      {
        name: "description",
        content:
          "Clínica de medicina estética y capilar en Olesa de Montserrat. Cuidamos tu piel y tu cabello con criterio sanitario, escucha y un plan a tu medida.",
      },
      {
        property: "og:title",
        content: "Hathor - Medicina estética y capilar en Olesa de Montserrat",
      },
      {
        property: "og:description",
        content:
          "Estética natural y cuidado capilar con criterio sanitario, valoración personalizada y acompañamiento cercano.",
      },
    ],
  }),
  component: Index,
});

const trustPoints = [
  { icon: HeartPulse, label: "Valoración personalizada" },
  { icon: ShieldCheck, label: "Criterio sanitario" },
  { icon: Sparkles, label: "Resultados naturales" },
  { icon: Cpu, label: "Tecnología avanzada" },
];

const GOOGLE_REVIEWS_URL = "https://share.google/Y7CfQAcYIzimOohoK";

const googleReviews = [
  {
    author: "Mitxel Ballet",
    quote: "Trato inmejorable e instalaciones impecables.",
  },
  {
    author: "Marc Martínez Luque",
    quote: "Excelente servicio. Lo recomiendo al 100%.",
  },
  {
    author: "Abel González García",
    quote: "Laura me ayudó de manera muy profesional.",
  },
  {
    author: "Rosina Mendez Mendez",
    quote: "Trato espectacular y excelente profesional.",
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
              Medicina estética y capilar en <span className="italic">Olesa de Montserrat</span>
            </h1>
            <p className="mt-7 max-w-xl text-base md:text-lg text-ink-muted leading-relaxed">
              Una clínica donde escuchamos primero, valoramos con criterio sanitario y diseñamos
              contigo un plan adaptado a tu piel, tu cabello y tu momento.
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
                alt="Fachada y entrada de la clínica Hathor en Olesa de Montserrat"
                width={1086}
                height={1448}
                className="w-full aspect-[5/6] sm:aspect-[4/5] rounded-3xl object-cover object-[50%_44%] sm:object-[50%_42%] lg:object-[50%_40%]"
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
      <section className="overflow-hidden bg-nude/40 px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div className="max-w-xl reveal">
              <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">
                Especialidades
              </p>
              <h2 className="font-display text-3xl md:text-5xl leading-tight">
                Primero escuchamos. Después <span className="italic">cuidamos</span>.
              </h2>
              <p className="mt-5 text-ink-muted leading-relaxed">
                Reunimos medicina estética facial, medicina capilar, tratamientos corporales y
                aparatología avanzada bajo el mismo enfoque: valoración previa, criterio sanitario y
                un plan honesto a tu medida.
              </p>
            </div>
          </div>

          <Carousel opts={{ align: "start", dragFree: true }} className="reveal">
            <CarouselContent className="-ml-4 md:-ml-6">
              {TREATMENTS.map((t) => (
                <CarouselItem
                  key={t.slug}
                  className="basis-[88%] pl-4 sm:basis-[62%] md:basis-[48%] md:pl-6 lg:basis-[38%]"
                >
                  <Link
                    to="/tratamientos/$slug"
                    params={{ slug: t.slug }}
                    className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4"
                  >
                    <article>
                      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-background">
                        <img
                          src={t.image}
                          alt={t.name}
                          loading="lazy"
                          width={1024}
                          height={1280}
                          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent px-6 pb-6 pt-24 text-white">
                          <h3 className="font-display text-2xl md:text-3xl">{t.name}</h3>
                          <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/90">
                            Descubrir <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                      <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
                        {t.short}
                      </p>
                    </article>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                <CarouselPrevious className="static h-11 w-11 translate-y-0 border-ink/15 bg-background hover:border-gold hover:bg-background" />
                <CarouselNext className="static h-11 w-11 translate-y-0 border-ink/15 bg-background hover:border-gold hover:bg-background" />
              </div>
              <CTALink to="/tratamientos" variant="ghost">
                Ver todos <ArrowUpRight className="h-4 w-4" />
              </CTALink>
            </div>
          </Carousel>
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
              className="w-full aspect-[4/5] rounded-3xl object-cover object-[50%_36%]"
            />
          </div>
          <div className="lg:col-span-6 reveal">
            <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">Sobre Hathor</p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05]">
              Un espacio creado para <span className="italic">cuidar de ti</span>
            </h2>
            <p className="mt-6 text-ink-muted text-lg leading-relaxed">
              Hathor nace de la mano de Laura, enfermera y fundadora, para unir el cuidado sanitario
              con la medicina estética y capilar en un entorno cercano y de confianza.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Cada valoración es individual y cada plan se ajusta a tus necesidades reales:
              trabajamos con honestidad, criterio sanitario y un seguimiento cercano durante todo el
              proceso.
            </p>
            <div className="mt-9">
              <CTALink to="/sobre-nosotros" variant="outline">
                Conócenos
              </CTALink>
            </div>
          </div>
        </div>
      </section>

      {/* Google reviews */}
      <section className="overflow-hidden border-y border-ink/10 bg-background px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="reveal lg:pt-2">
            <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-gold">
              Opiniones en Google
            </p>
            <div className="flex items-end gap-4">
              <strong className="font-display text-6xl font-normal leading-none text-ink md:text-7xl">
                5,0
              </strong>
              <div className="pb-1.5">
                <div className="flex gap-1 text-gold" aria-label="5 de 5 estrellas">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-2 text-sm text-ink-muted">Más de 23 reseñas</p>
              </div>
            </div>
            <h2 className="mt-8 max-w-md font-display text-3xl leading-[1.08] md:text-5xl">
              La confianza también se <span className="italic">comparte</span>.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-ink-muted">
              Experiencias reales de personas que han confiado en Hathor para cuidar su piel y su
              cabello.
            </p>
            <div className="mt-8">
              <CTAAnchor href={GOOGLE_REVIEWS_URL} variant="outline">
                Ver todas en Google <ArrowUpRight className="h-4 w-4" />
              </CTAAnchor>
            </div>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="reveal min-w-0">
            <CarouselContent className="-ml-6">
              {googleReviews.map((review) => (
                <CarouselItem key={review.author} className="basis-[88%] pl-6 sm:basis-[68%]">
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-h-72 flex-col justify-between border-l border-ink/15 py-2 pl-7 pr-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 md:min-h-80 md:pl-9"
                    aria-label={`Ver las reseñas de Google, incluida la de ${review.author}`}
                  >
                    <span className="font-display text-7xl leading-none text-nude-deep transition-colors duration-200 group-hover:text-gold motion-reduce:transition-none">
                      “
                    </span>
                    <blockquote className="font-display text-3xl leading-tight text-ink md:text-4xl">
                      {review.quote}
                    </blockquote>
                    <footer className="mt-10 flex items-center justify-between gap-4 border-t border-ink/10 pt-5">
                      <div>
                        <p className="text-sm font-semibold text-ink">{review.author}</p>
                        <p className="mt-1 text-xs text-ink-muted">Opinión publicada en Google</p>
                      </div>
                      <div className="flex gap-0.5 text-gold" aria-hidden="true">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                    </footer>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex gap-2">
              <CarouselPrevious className="static h-11 w-11 translate-y-0 border-ink/15 bg-background hover:border-gold hover:bg-background" />
              <CarouselNext className="static h-11 w-11 translate-y-0 border-ink/15 bg-background hover:border-gold hover:bg-background" />
            </div>
          </Carousel>
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
                Cuéntanos qué te gustaría mejorar.
              </h2>
              <p className="mt-5 max-w-xl text-background/70 leading-relaxed">
                Te atendemos en {CLINIC.address}. Reserva una valoración y diseñamos contigo un plan
                adaptado a tu piel, tu cabello y tus tiempos.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end flex-wrap gap-3">
              <CTAAnchor
                href={`tel:${CLINIC.phoneTel}`}
                variant="primary"
                className="bg-gold hover:bg-background hover:text-ink"
              >
                Llamar ahora
              </CTAAnchor>
              <CTALink
                to="/contacto"
                variant="outline"
                className="border-background/30 text-background hover:text-gold-soft hover:border-gold-soft"
              >
                Contacto
              </CTALink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
