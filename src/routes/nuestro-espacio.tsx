import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { CTALink } from "@/components/hathor/CTAButton";
import techWide from "@/assets/espacio-tecnologia-horizontal.jpg";
import techPortraitOne from "@/assets/espacio-tecnologia-vertical-1.jpg";
import techPortraitTwo from "@/assets/espacio-tecnologia-vertical-2.jpg";
import techDetail from "@/assets/espacio-tecnologia-detalle.jpg";
import careWide from "@/assets/espacio-bienestar-horizontal.jpg";
import carePortraitOne from "@/assets/espacio-bienestar-vertical-1.jpg";
import carePortraitTwo from "@/assets/espacio-bienestar-vertical-2.jpg";
import careDetail from "@/assets/espacio-bienestar-detalle.jpg";

export const Route = createFileRoute("/nuestro-espacio")({
  head: () => ({
    meta: [
      { title: "Nuestro espacio | Hathor Clínica" },
      {
        name: "description",
        content:
          "Descubre las cabinas de Hathor en Olesa de Montserrat: espacios privados, luminosos y preparados para cuidar de ti con comodidad y tecnología avanzada.",
      },
      { property: "og:title", content: "Nuestro espacio | Hathor Clínica" },
      {
        property: "og:description",
        content:
          "Un entorno íntimo, profesional y equipado para que cada visita a Hathor se sienta tranquila y cuidada.",
      },
    ],
  }),
  component: NuestroEspacioPage,
});

const principles = [
  {
    icon: HeartHandshake,
    title: "Atención privada",
    copy: "Cada cita sucede en un entorno reservado, pensado para escucharte y atenderte sin prisas.",
  },
  {
    icon: ShieldCheck,
    title: "Cuidado profesional",
    copy: "Cabinas preparadas para trabajar con orden, higiene y criterio sanitario en cada tratamiento.",
  },
  {
    icon: Sparkles,
    title: "Tecnología y calma",
    copy: "Aparatología avanzada en un espacio sereno donde puedes sentirte cómoda desde que entras.",
  },
];

function NuestroEspacioPage() {
  return (
    <>
      <section className="px-6 pb-20 pt-12 md:pb-28 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl reveal">
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.32em] text-gold">
              Clínica Hathor
            </p>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.02] text-balance sm:text-6xl lg:text-[5.25rem]">
              Un espacio creado para que te sientas <span className="italic">bien cuidada</span>.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              Dos cabinas privadas, luminosas y equipadas para acompañarte con calma, cercanía y
              atención profesional en cada visita.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-12 md:gap-5">
            <figure className="reveal overflow-hidden rounded-3xl md:col-span-8">
              <img
                src={techWide}
                alt="Cabina de Hathor equipada con camilla y aparatología avanzada"
                width={1280}
                height={960}
                className="h-full min-h-[360px] w-full object-cover md:min-h-[590px]"
              />
            </figure>
            <div className="grid gap-4 md:col-span-4 md:gap-5">
              <figure className="reveal overflow-hidden rounded-3xl">
                <img
                  src={carePortraitOne}
                  alt="Detalle de una cabina luminosa de Hathor"
                  width={720}
                  height={1280}
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </figure>
              <p className="reveal flex items-end rounded-3xl bg-nude px-7 py-8 font-display text-2xl leading-snug text-ink md:min-h-48 md:text-3xl">
                Intimidad, comodidad y todos los detalles preparados para ti.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-nude/35 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="reveal lg:col-span-5">
              <h2 className="font-display text-4xl leading-tight text-balance md:text-5xl">
                Preparado para cuidar cada detalle del tratamiento.
              </h2>
            </div>
            <p className="reveal max-w-2xl text-base leading-relaxed text-ink-muted lg:col-span-6 lg:col-start-7">
              La aparatología convive con un entorno limpio y sereno. Así podemos trabajar con
              precisión sin perder la sensación de cercanía que define cada visita a Hathor.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-12">
            <figure className="reveal overflow-hidden rounded-3xl lg:col-span-4 lg:mt-20">
              <img
                src={techPortraitOne}
                alt="Camilla de tratamiento en una cabina de Hathor"
                loading="lazy"
                width={960}
                height={1280}
                className="aspect-[3/4] w-full object-cover"
              />
            </figure>
            <figure className="reveal overflow-hidden rounded-3xl lg:col-span-5">
              <img
                src={techPortraitTwo}
                alt="Vista vertical de la cabina equipada de Hathor"
                loading="lazy"
                width={960}
                height={1280}
                className="aspect-[3/4] w-full object-cover"
              />
            </figure>
            <figure className="reveal overflow-hidden rounded-3xl md:col-span-2 lg:col-span-3 lg:mt-40">
              <img
                src={techDetail}
                alt="Detalle de la aparatología disponible en Hathor"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-[4/3] h-full w-full object-cover lg:aspect-[3/4]"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
            <div className="reveal lg:col-span-5">
              <h2 className="font-display text-4xl leading-tight text-balance md:text-5xl">
                Un entorno tranquilo para dedicarte tu tiempo.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-ink-muted">
                Queremos que te sientas cómoda antes, durante y después de cada tratamiento. Por eso
                el espacio acompaña nuestra forma de trabajar: atención personalizada, escucha y
                confianza.
              </p>
              <Link
                to="/sobre-nosotros"
                className="mt-8 inline-flex min-h-11 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold active:scale-[0.98]"
              >
                Conoce a Laura <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <figure className="reveal overflow-hidden rounded-3xl lg:col-span-7">
              <img
                src={careWide}
                alt="Cabina de bienestar de Hathor con camilla preparada"
                loading="lazy"
                width={1280}
                height={720}
                className="aspect-[4/3] w-full object-cover md:aspect-[16/10]"
              />
            </figure>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-12">
            <figure className="reveal overflow-hidden rounded-3xl md:col-span-4">
              <img
                src={carePortraitTwo}
                alt="Detalle vertical del espacio de tratamiento de Hathor"
                loading="lazy"
                width={720}
                height={1280}
                className="aspect-[3/4] w-full object-cover"
              />
            </figure>
            <figure className="reveal overflow-hidden rounded-3xl md:col-span-8 md:mt-20">
              <img
                src={careDetail}
                alt="Vista amplia de una cabina privada de Hathor"
                loading="lazy"
                width={1280}
                height={720}
                className="aspect-[4/3] h-full w-full object-cover md:aspect-[16/9]"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl border-y border-border/70 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {principles.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="reveal">
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="reveal mx-auto max-w-6xl rounded-3xl bg-ink px-8 py-14 text-background md:px-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <h2 className="font-display text-4xl leading-tight text-background text-balance md:text-5xl">
                Ven a conocer Hathor.
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-background/75">
                Te esperamos en Olesa de Montserrat para escucharte y valorar contigo el tratamiento
                más adecuado.
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <CTALink to="/contacto" className="bg-gold text-ink hover:bg-background">
                Pedir cita
              </CTALink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
