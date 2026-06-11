import {
  createFileRoute,
  Link,
  notFound,
  useRouter,
} from "@tanstack/react-router";
import { ArrowLeft, Check, MessageCircle, Phone } from "lucide-react";
import { CTAAnchor, CTALink } from "@/components/hathor/CTAButton";
import { CLINIC, getTreatmentBySlug, whatsappUrlFor } from "@/lib/hathor";

export const Route = createFileRoute("/tratamientos/$slug")({
  loader: ({ params }) => {
    const treatment = getTreatmentBySlug(params.slug);
    if (!treatment) throw notFound();
    return { treatment };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.treatment;
    if (!t) return { meta: [{ title: "Tratamiento no encontrado — Hathor" }] };
    return {
      meta: [
        { title: `${t.name} — Hathor Clínica` },
        { name: "description", content: t.short },
        { property: "og:title", content: `${t.name} — Hathor Clínica` },
        { property: "og:description", content: t.short },
        { property: "og:image", content: t.image },
        { name: "twitter:image", content: t.image },
      ],
    };
  },
  notFoundComponent: TreatmentNotFound,
  errorComponent: TreatmentError,
  component: TreatmentDetail,
});

function TreatmentNotFound() {
  return (
    <section className="px-6 py-32 text-center">
      <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">
        404
      </p>
      <h1 className="font-display text-4xl md:text-5xl">
        Tratamiento no encontrado
      </h1>
      <p className="mt-5 text-ink-muted">
        El tratamiento que buscas no está disponible.
      </p>
      <div className="mt-9 flex justify-center">
        <CTALink to="/tratamientos">Ver todos los tratamientos</CTALink>
      </div>
    </section>
  );
}

function TreatmentError({ reset }: { reset: () => void }) {
  const router = useRouter();
  return (
    <section className="px-6 py-32 text-center">
      <h1 className="font-display text-3xl">Algo ha ido mal</h1>
      <p className="mt-4 text-ink-muted">No hemos podido cargar el tratamiento.</p>
      <button
        type="button"
        onClick={() => {
          reset();
          router.invalidate();
        }}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-background hover:bg-gold"
      >
        Reintentar
      </button>
    </section>
  );
}

function TreatmentDetail() {
  const { treatment } = Route.useLoaderData();
  const waUrl = whatsappUrlFor(treatment.whatsappMessage);

  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-12 pb-16 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/tratamientos"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink-muted hover:text-gold"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Tratamientos
          </Link>

          <div className="mt-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 reveal">
              <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">
                Tratamiento
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                {treatment.name}
              </h1>
              <p className="mt-6 text-ink-muted text-base md:text-lg leading-relaxed max-w-xl">
                {treatment.short}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <CTAAnchor href={waUrl}>
                  <MessageCircle className="h-4 w-4" /> Reservar por WhatsApp
                </CTAAnchor>
                <CTAAnchor href={`tel:${CLINIC.phoneTel}`} variant="outline">
                  <Phone className="h-4 w-4" /> {CLINIC.phoneDisplay}
                </CTAAnchor>
              </div>
            </div>
            <div className="lg:col-span-6 reveal">
              <img
                src={treatment.image}
                alt={treatment.name}
                width={1280}
                height={1600}
                className="w-full aspect-[4/5] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Descripción */}
      <section className="px-6 py-16 bg-nude/40">
        <div className="mx-auto max-w-4xl reveal">
          <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">
            Descripción
          </p>
          <p className="text-ink text-lg leading-relaxed">
            {treatment.description}
          </p>
        </div>
      </section>

      {/* Beneficios + Indicaciones */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12">
          <DetailList
            eyebrow="Beneficios"
            title="Qué te aporta"
            items={treatment.benefits}
          />
          <DetailList
            eyebrow="Indicaciones"
            title="Para quién está indicado"
            items={treatment.indications}
          />
        </div>
      </section>

      {treatment.items && treatment.items.length > 0 && (
        <section className="px-6 pb-8">
          <div className="mx-auto max-w-7xl reveal">
            <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">
              Qué incluye
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-10 max-w-2xl">
              Tratamientos disponibles
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-3xl overflow-hidden">
              {treatment.items.map((item: string) => (
                <li
                  key={item}
                  className="bg-background p-6 lg:p-8 flex items-start gap-4"
                >
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-nude">
                    <Check className="h-3.5 w-3.5 text-gold" />
                  </span>
                  <span className="text-ink leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Qué esperar */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl reveal">
          <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">
            Cómo se realiza
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-10 max-w-2xl">
            Qué puedes esperar
          </h2>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-3xl overflow-hidden">
            {treatment.experience.map((step: string, i: number) => (
              <li
                key={step}
                className="bg-background p-8 lg:p-10 flex flex-col"
              >
                <span className="font-mono text-[11px] tracking-widest text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-ink leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-ink text-background px-8 py-16 md:p-20 reveal">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <p className="text-[10px] uppercase tracking-[0.32em] text-gold-soft mb-5">
                Reserva tu cita
              </p>
              <h2 className="font-display text-3xl md:text-5xl leading-tight text-background">
                ¿Te interesa {treatment.name.toLowerCase()}?
              </h2>
              <p className="mt-5 max-w-xl text-background/70 leading-relaxed">
                Escríbenos por WhatsApp y reservamos una valoración personalizada
                para ti.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end flex-wrap gap-3">
              <CTAAnchor
                href={waUrl}
                variant="primary"
                className="bg-gold hover:bg-background hover:text-ink"
              >
                <MessageCircle className="h-4 w-4" /> Reservar por WhatsApp
              </CTAAnchor>
              <CTALink
                to="/tratamientos"
                variant="outline"
                className="border-background/30 text-background hover:text-gold-soft hover:border-gold-soft"
              >
                Ver todos
              </CTALink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DetailList({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="reveal">
      <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl md:text-4xl leading-tight mb-8">
        {title}
      </h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-4 items-start">
            <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-nude">
              <Check className="h-3.5 w-3.5 text-gold" />
            </span>
            <span className="text-ink leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}