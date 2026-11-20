import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { ExternalLink } from "@/components/hathor/ExternalLink";
import { SectionHeader } from "@/components/hathor/SectionHeader";
import { CTAAnchor } from "@/components/hathor/CTAButton";
import { CLINIC } from "@/lib/hathor";
import prysmVideo from "@/assets/hathor-instagram-prysm.mp4";
import manchasVideo from "@/assets/hathor-instagram-manchas.mp4";
import laserVideo from "@/assets/hathor-instagram-laser.mp4";

export const Route = createFileRoute("/instagram")({
  head: () => ({
    meta: [
      { title: "Instagram — Hathor Clínica" },
      {
        name: "description",
        content:
          "Síguenos en Instagram @hathor_clinica para ver tratamientos, tecnología y novedades de la clínica.",
      },
      { property: "og:title", content: "Instagram — Hathor Clínica" },
      {
        property: "og:description",
        content: "Reels y publicaciones de Hathor Clínica en Instagram.",
      },
    ],
  }),
  component: InstagramPage,
});

const reelVideos = [prysmVideo, manchasVideo, laserVideo];

function InstagramPage() {
  return (
    <>
      <section className="px-6 pt-16 pb-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Síguenos"
            title="@hathor_clinica"
            description="Te enseñamos cómo trabajamos, novedades de la clínica y consejos reales sobre el cuidado de la piel y el cabello."
          />
          <div className="mt-8">
            <CTAAnchor href={CLINIC.instagramUrl} target="_blank" rel="noreferrer">
              <Instagram className="h-4 w-4" /> Ver perfil
            </CTAAnchor>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC.reels.map((reel, i) => (
            <ExternalLink
              key={reel.id}
              href={reel.url}
              className="group block reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <video
                  src={reelVideos[i % reelVideos.length]}
                  aria-label="Reel de Hathor en Instagram"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="pointer-events-none aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-ink">
                  <Instagram className="h-3 w-3" /> Reel
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-background">
                  <span className="text-[10px] uppercase tracking-[0.22em]">
                    @hathor_clinica
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] opacity-80">
                    Ver en Instagram →
                  </span>
                </div>
              </div>
            </ExternalLink>
          ))}
        </div>
      </section>
    </>
  );
}
