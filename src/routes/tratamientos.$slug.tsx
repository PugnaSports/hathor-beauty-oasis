import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MessageCircle, Phone } from "lucide-react";
import { CTAAnchor, CTALink } from "@/components/hathor/CTAButton";
import { TreatmentVideo } from "@/components/hathor/TreatmentVideo";
import { CLINIC, getTreatmentBySlug, whatsappUrlFor } from "@/lib/hathor";

export const Route = createFileRoute("/tratamientos/$slug")({
  loader: ({ params }) => {
    const treatment = getTreatmentBySlug(params.slug);
    if (!treatment) throw notFound();
    return { treatment };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.treatment;
    if (!t) return { meta: [{ title: "Tratamiento no encontrado | Hathor" }] };
    return {
      meta: [
        { title: `${t.name} | Hathor Clínica` },
        { name: "description", content: t.short },
        { property: "og:title", content: `${t.name} | Hathor Clínica` },
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
      <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">404</p>
      <h1 className="font-display text-4xl md:text-5xl">Tratamiento no encontrado</h1>
      <p className="mt-5 text-ink-muted">El tratamiento que buscas no está disponible.</p>
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

  if (treatment.slug === "medicina-estetica-facial") {
    return <FacialTreatmentDetail treatment={treatment} waUrl={waUrl} />;
  }

  return <EditorialTreatmentDetail treatment={treatment} waUrl={waUrl} />;
}

const treatmentEditorial: Record<
  string,
  { label: string; headline: string; processTitle: string; imagePosition?: string }
> = {
  "tratamientos-corporales": {
    label: "Cuidado corporal",
    headline: "Tu cuerpo cambia a su ritmo. El plan también.",
    processTitle: "Un protocolo que evoluciona contigo",
    imagePosition: "object-center",
  },
  laser: {
    label: "Precisión y cuidado",
    headline: "Tecnología láser con una valoración que va primero.",
    processTitle: "Cada sesión empieza entendiendo tu piel",
    imagePosition: "object-center",
  },
  "medicina-capilar": {
    label: "Salud capilar",
    headline: "Entender el origen antes de cuidar el cabello.",
    processTitle: "Diagnóstico, tratamiento y seguimiento",
    imagePosition: "object-center",
  },
  "aparatologia-avanzada": {
    label: "Diagnóstico avanzado",
    headline: "Datos reales para recomendarte solo lo necesario.",
    processTitle: "Medir, entender y ajustar cada decisión",
    imagePosition: "object-center",
  },
  "asesoramiento-personalizado": {
    label: "Tu primera visita",
    headline: "Antes de recomendarte nada, te escuchamos.",
    processTitle: "Una conversación clara, sin prisas ni compromiso",
    imagePosition: "object-center",
  },
};

function EditorialTreatmentDetail({
  treatment,
  waUrl,
}: {
  treatment: NonNullable<ReturnType<typeof getTreatmentBySlug>>;
  waUrl: string;
}) {
  const editorial = treatmentEditorial[treatment.slug];
  const media = treatment.media?.[0];

  return (
    <main className="overflow-hidden bg-[#fbfaf8] text-[#24221f]">
      <section className="px-5 pb-12 pt-7 sm:px-6 md:pb-16 md:pt-10">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/tratamientos"
            className="inline-flex min-h-11 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#77716a] transition-colors duration-200 hover:text-[#24221f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d8177]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Tratamientos
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal py-6 lg:py-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b8b7c]">
                {editorial.label}
              </p>
              <h1 className="mt-6 max-w-2xl font-display text-[clamp(2.75rem,5vw,4.75rem)] leading-[1.02] tracking-[-0.03em] text-balance">
                {treatment.name}
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-[#625d57] md:text-lg">
                {treatment.short}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CTAAnchor href={waUrl} className="bg-[#24221f] text-[#fbfaf8] hover:bg-[#504a44]">
                  <MessageCircle className="h-4 w-4" /> Reservar por WhatsApp
                </CTAAnchor>
                <CTAAnchor
                  href={`tel:${CLINIC.phoneTel}`}
                  variant="outline"
                  className="border-[#24221f]/20 text-[#24221f] hover:border-[#24221f]"
                >
                  <Phone className="h-4 w-4" /> {CLINIC.phoneDisplay}
                </CTAAnchor>
              </div>
            </div>

            <div className="reveal overflow-hidden rounded-3xl bg-[#eee9e3]">
              <img
                src={treatment.image}
                alt={treatment.name}
                width={1280}
                height={1600}
                className={`aspect-[4/5] w-full object-cover ${editorial.imagePosition ?? "object-center"}`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="reveal lg:sticky lg:top-28 lg:self-start">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8d8177]">
              {editorial.label}
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-[-0.025em] text-balance md:text-6xl">
              {editorial.headline}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#625d57]">
              {treatment.description}
            </p>
          </div>

          <div className="reveal divide-y divide-[#24221f]/12 border-y border-[#24221f]/12">
            <EssentialBlock title="Qué te aporta" items={treatment.benefits} />
            <EssentialBlock title="Para quién está indicado" items={treatment.indications} />
          </div>
        </div>
      </section>

      {media && (
        <section className="border-y border-[#dedad4] bg-[#f2efeb] px-5 py-16 sm:px-6 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="reveal order-2 lg:order-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8d8177]">
                En consulta
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.025em] text-balance md:text-6xl">
                {media.title}
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-[#625d57]">
                {media.description}
              </p>
            </div>
            <div className="reveal order-1 mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-3xl bg-[#e9e4de] lg:order-2 lg:max-w-none">
              <TreatmentVideo src={media.src} poster={treatment.image} title={media.title} />
            </div>
          </div>
        </section>
      )}

      <section
        className={`px-5 py-16 sm:px-6 md:py-24 ${media ? "" : "border-y border-[#dedad4] bg-[#f2efeb]"}`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8d8177]">
              Cómo se realiza
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.025em] text-balance md:text-6xl">
              {editorial.processTitle}
            </h2>
          </div>
          <ol className="mt-12 border-y border-[#24221f]/12">
            {treatment.experience.map((step, index) => (
              <li
                key={step}
                className="reveal grid min-h-24 items-center gap-4 border-b border-[#24221f]/12 py-6 last:border-b-0 sm:grid-cols-[3rem_1fr] md:min-h-28"
              >
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#999188]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="max-w-3xl font-display text-xl leading-snug text-[#3f3a35] md:text-2xl">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {treatment.items && treatment.items.length > 0 && (
        <section className="px-5 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="reveal max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8d8177]">
                Opciones disponibles
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.025em] md:text-5xl">
                Tu plan se define después de valorar tu caso
              </h2>
            </div>
            <ul className="mt-10 divide-y divide-[#24221f]/12 border-y border-[#24221f]/12">
              {treatment.items.map((item, index) => (
                <li
                  key={item}
                  className="reveal group flex min-h-20 items-center gap-5 py-4 md:min-h-24"
                >
                  <span className="w-8 shrink-0 font-mono text-[10px] text-[#999188]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl leading-tight text-[#3f3a35] transition-transform duration-200 group-hover:translate-x-1 md:text-2xl">
                    {item}
                  </span>
                  <ArrowRight
                    className="ml-auto h-4 w-4 shrink-0 text-[#999188]"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="px-5 pb-24 sm:px-6 md:pb-28">
        <div className="reveal mx-auto grid max-w-7xl overflow-hidden rounded-[1.25rem] border border-[#dedad4] bg-[#f2efeb] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="px-6 py-12 sm:px-10 md:p-14 lg:p-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8d8177]">
              Reserva tu valoración
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.025em] text-balance md:text-6xl">
              Hablemos de lo que necesitas
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#625d57]">
              Te escuchamos, valoramos tu caso y te explicamos las opciones con claridad, sin
              tratamientos innecesarios.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAAnchor href={waUrl} className="bg-[#24221f] text-[#fbfaf8] hover:bg-[#504a44]">
                <MessageCircle className="h-4 w-4" /> Reservar por WhatsApp
              </CTAAnchor>
              <CTAAnchor
                href={`tel:${CLINIC.phoneTel}`}
                variant="outline"
                className="border-[#24221f]/25 text-[#24221f] hover:border-[#24221f]"
              >
                <Phone className="h-4 w-4" /> {CLINIC.phoneDisplay}
              </CTAAnchor>
            </div>
          </div>
          <div className="relative min-h-80 lg:min-h-full">
            <img
              src={treatment.image}
              alt={`Valoración de ${treatment.name.toLowerCase()} en Hathor`}
              width={1280}
              height={1600}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover ${editorial.imagePosition ?? "object-center"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#24221f]/20 to-transparent" />
          </div>
        </div>
      </section>
    </main>
  );
}

function FacialTreatmentDetail({
  treatment,
  waUrl,
}: {
  treatment: NonNullable<ReturnType<typeof getTreatmentBySlug>>;
  waUrl: string;
}) {
  if (!treatment) return null;

  const secondaryMedia = treatment.media ?? [];

  return (
    <main className="facial-page overflow-hidden bg-[#fbfaf8] text-[#24221f]">
      <section className="relative px-5 pb-10 pt-7 sm:px-6 md:pb-14 md:pt-10">
        <div className="relative mx-auto max-w-7xl">
          <Link
            to="/tratamientos"
            className="inline-flex min-h-11 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#77716a] transition-colors duration-200 hover:text-[#24221f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8d8177]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Tratamientos
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal py-6 lg:py-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#9b8b7c]">
                Tratamiento
              </p>
              <h1 className="mt-6 max-w-xl font-display text-[clamp(2.8rem,5vw,4.8rem)] leading-[1.02] tracking-[-0.03em] text-balance">
                Medicina estética facial
              </h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-[#625d57] md:text-lg">
                Cuidamos tu rostro con criterio sanitario, respetando tus rasgos y buscando un
                resultado natural.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CTAAnchor href={waUrl} className="bg-[#24221f] text-[#fbfaf8] hover:bg-[#504a44]">
                  <MessageCircle className="h-4 w-4" /> Reservar por WhatsApp
                </CTAAnchor>
                <CTAAnchor
                  href={`tel:${CLINIC.phoneTel}`}
                  variant="outline"
                  className="border-[#24221f]/20 text-[#24221f] hover:border-[#24221f]"
                >
                  <Phone className="h-4 w-4" /> {CLINIC.phoneDisplay}
                </CTAAnchor>
              </div>
            </div>

            <div className="reveal overflow-hidden rounded-3xl bg-[#eee9e3]">
              <img
                src={treatment.image}
                alt={treatment.name}
                width={1280}
                height={1600}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="facial-esencial" className="scroll-mt-24 px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="reveal lg:sticky lg:top-28 lg:self-start">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8d8177]">
              Tu piel, primero
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-[-0.025em] text-balance md:text-6xl">
              Lo que necesitas, y nada que no necesites
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#625d57]">
              {treatment.description}
            </p>
          </div>

          <div className="reveal divide-y divide-[#24221f]/12 border-y border-[#24221f]/12">
            <EssentialBlock title="Qué te aporta" items={treatment.benefits} />
            <EssentialBlock title="Para quién está indicado" items={treatment.indications} />
          </div>
        </div>
      </section>

      <section
        id="facial-proceso"
        className="scroll-mt-24 border-y border-[#dedad4] bg-[#f2efeb] px-5 py-16 text-[#24221f] sm:px-6 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8d8177]">
              Cómo se realiza
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.025em] text-balance md:text-6xl">
              Un proceso pensado para que entiendas cada paso
            </h2>
          </div>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-[#d8d2cb] bg-[#d8d2cb] md:grid-cols-2 lg:grid-cols-4">
            {treatment.experience.map((step, index) => (
              <li key={step} className="reveal min-h-52 bg-[#fbfaf8] p-7 md:p-8">
                <span className="font-mono text-[11px] tracking-[0.18em] text-[#999188]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-12 max-w-[15rem] text-base leading-7 text-[#4f4943]">{step}</p>
              </li>
            ))}
          </ol>

          {secondaryMedia.length > 0 && (
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {secondaryMedia.map((item) => (
                <article
                  key={item.src}
                  className="reveal grid gap-5 sm:grid-cols-[0.85fr_1.15fr] sm:items-center"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-xl border border-[#d8d2cb] bg-[#e9e4de]">
                    <TreatmentVideo src={item.src} poster={treatment.image} title={item.title} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-[#24221f]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#625d57]">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {treatment.items && treatment.items.length > 0 && (
        <section id="facial-opciones" className="scroll-mt-24 px-5 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="reveal grid gap-6 border-b border-[#24221f]/12 pb-9 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8d8177]">
                  Tratamientos faciales
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.025em] md:text-5xl">
                  Tu plan empieza con una valoración
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#625d57] md:justify-self-end">
                Elegimos el tratamiento según el estado de tu piel, tus objetivos y el resultado que
                buscas. Estas son algunas de las opciones disponibles.
              </p>
            </div>

            <ul className="mt-2 divide-y divide-[#24221f]/12">
              {treatment.items.map((item, index) => (
                <li
                  key={item}
                  className="reveal group flex min-h-20 items-center gap-5 py-4 md:min-h-24"
                >
                  <span className="w-8 shrink-0 font-mono text-[10px] text-[#999188]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl leading-tight text-[#3f3a35] transition-transform duration-200 group-hover:translate-x-1 md:text-2xl">
                    {item}
                  </span>
                  <ArrowRight
                    className="ml-auto h-4 w-4 shrink-0 text-[#999188]"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section id="facial-reserva" className="scroll-mt-24 px-5 pb-24 sm:px-6 md:pb-28">
        <div className="reveal mx-auto grid max-w-7xl overflow-hidden rounded-[1.25rem] border border-[#dedad4] bg-[#f2efeb] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="px-6 py-12 sm:px-10 md:p-14 lg:p-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8d8177]">
              Reserva tu valoración
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.025em] text-balance md:text-6xl">
              Hablemos de lo que te preocupa
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#625d57]">
              Te escuchamos, valoramos tu piel y te explicamos las opciones con claridad. Sin
              cambios bruscos y sin tratamientos innecesarios.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAAnchor href={waUrl} className="bg-[#24221f] text-[#fbfaf8] hover:bg-[#504a44]">
                <MessageCircle className="h-4 w-4" /> Reservar por WhatsApp
              </CTAAnchor>
              <CTAAnchor
                href={`tel:${CLINIC.phoneTel}`}
                variant="outline"
                className="border-[#24221f]/25 text-[#24221f] hover:border-[#24221f]"
              >
                <Phone className="h-4 w-4" /> {CLINIC.phoneDisplay}
              </CTAAnchor>
            </div>
          </div>
          <div className="relative min-h-80 lg:min-h-full">
            <img
              src={treatment.image}
              alt="Consulta de medicina estética facial en Hathor"
              width={1280}
              height={1600}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#24221f]/20 to-transparent" />
          </div>
        </div>
      </section>
    </main>
  );
}

function EssentialBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="py-9 sm:py-11">
      <h3 className="font-display text-3xl leading-tight">{title}</h3>
      <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="text-sm leading-6 text-[#625d57]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
