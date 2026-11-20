import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/hathor/SectionHeader";
import { FaqSection } from "@/components/hathor/FaqSection";
import { TreatmentVideo } from "@/components/hathor/TreatmentVideo";
import { TREATMENTS } from "@/lib/hathor";
import facialVideo from "@/assets/hathor-facial-hollywood-peel.mp4";
import capilarVideo from "@/assets/hathor-capilar-valoracion.mp4";
import corporalVideo from "@/assets/hathor-corporal-resultado-3cm.mp4";

export const Route = createFileRoute("/tratamientos/")({
  head: () => ({
    meta: [
      { title: "Tratamientos | Hathor Clínica de Medicina Estética y Capilar" },
      {
        name: "description",
        content:
          "Tratamientos de Hathor en Olesa de Montserrat: cada plan parte de una valoración personalizada con criterio sanitario.",
      },
      { property: "og:title", content: "Tratamientos | Hathor Clínica" },
      {
        property: "og:description",
        content:
          "Medicina estética facial, capilar, corporal, láser y aparatología avanzada con valoración previa.",
      },
    ],
  }),
  component: TratamientosIndex,
});

function TratamientosIndex() {
  const previewVideos: Partial<Record<(typeof TREATMENTS)[number]["slug"], string>> = {
    "medicina-estetica-facial": facialVideo,
    "tratamientos-corporales": corporalVideo,
    "medicina-capilar": capilarVideo,
  };

  return (
    <>
      <section className="px-6 pt-16 pb-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Tratamientos"
            title="Cuidamos tu piel y tu cabello con criterio sanitario"
            description="Antes de proponerte cualquier tratamiento, hacemos una valoración para entender qué te gustaría mejorar. Aquí puedes ver con calma lo que ofrecemos en clínica."
          />
        </div>
      </section>

      <section className="px-6 pb-28 md:pb-36">
        <div className="mx-auto max-w-7xl space-y-24 md:space-y-32">
          {TREATMENTS.map((t, i) => (
            <article
              key={t.slug}
              className="group grid items-center gap-9 reveal md:grid-cols-12 md:gap-12 lg:gap-20"
            >
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div
                  className={`overflow-hidden rounded-2xl bg-nude ${i % 3 === 1 ? "aspect-[5/4]" : "aspect-[4/5] md:aspect-[5/4]"}`}
                >
                  {previewVideos[t.slug] ? (
                    <TreatmentVideo
                      src={previewVideos[t.slug]}
                      title={t.name}
                      autoPlayPreview={false}
                    />
                  ) : (
                    <Link
                      to="/tratamientos/$slug"
                      params={{ slug: t.slug }}
                      className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
                    >
                      <img
                        src={t.image}
                        alt={t.name}
                        loading="lazy"
                        width={1280}
                        height={1024}
                        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
                      />
                    </Link>
                  )}
                </div>
              </div>

              <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <h2 className="font-display text-3xl leading-tight md:text-5xl">{t.name}</h2>
                <p className="mt-5 text-base leading-relaxed text-ink-muted">{t.short}</p>
                {t.items && t.items.length > 0 && (
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-muted/90">
                    {t.items.slice(0, 3).join(" · ")}
                  </p>
                )}
                <Link
                  to="/tratamientos/$slug"
                  params={{ slug: t.slug }}
                  className="mt-7 inline-flex min-h-11 items-center gap-2 border-b border-ink/25 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-200 ease-out hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 active:scale-[0.98]"
                >
                  Descubrir tratamiento <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FaqSection className="bg-nude/30" />
    </>
  );
}
