import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  MessageCircle,
  Phone,
  ScanFace,
  Sparkles,
} from "lucide-react";
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
              <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">Tratamiento</p>
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
          <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">Descripción</p>
          <p className="text-ink text-lg leading-relaxed">{treatment.description}</p>
        </div>
      </section>

      {treatment.media && treatment.media.length > 0 && (
        <section className="overflow-hidden bg-ink px-6 py-20 text-background md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="reveal grid gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-7">
                <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-gold-soft">
                  En consulta
                </p>
                <h2 className="font-display text-3xl leading-tight text-background md:text-5xl">
                  Así cuidamos tu piel, <span className="italic">paso a paso</span>
                </h2>
              </div>
              <p className="max-w-lg text-sm leading-relaxed text-background/65 md:col-span-5 md:justify-self-end md:text-base">
                Conoce de cerca algunos de nuestros tratamientos y resultados reales. Cada sesión
                comienza siempre con una valoración personalizada.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-12 md:gap-6">
              {treatment.media.map((item, index) => (
                <article
                  key={item.src}
                  className={`reveal ${index === 0 ? "md:col-span-7" : "md:col-span-5"} ${index === 2 ? "md:col-start-8" : ""}`}
                >
                  <div
                    className={`overflow-hidden rounded-2xl bg-background/5 ${index === 0 ? "aspect-[4/5] md:aspect-[4/3]" : "aspect-[4/5] md:aspect-[16/10]"}`}
                  >
                    <TreatmentVideo src={item.src} poster={treatment.image} title={item.title} />
                  </div>
                  <div className="mt-5 border-t border-background/15 pt-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-gold-soft">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-background">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-background/60">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Beneficios + Indicaciones */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12">
          <DetailList eyebrow="Beneficios" title="Qué te aporta" items={treatment.benefits} />
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
            <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">Qué incluye</p>
            <h2 className="font-display text-3xl md:text-4xl mb-10 max-w-2xl">
              Lo que puede incluir tu plan
            </h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-3xl overflow-hidden">
              {treatment.items.map((item: string) => (
                <li key={item} className="bg-background p-6 lg:p-8 flex items-start gap-4">
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
          <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">Cómo se realiza</p>
          <h2 className="font-display text-3xl md:text-4xl mb-10 max-w-2xl">Qué puedes esperar</h2>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-3xl overflow-hidden">
            {treatment.experience.map((step: string, i: number) => (
              <li key={step} className="bg-background p-8 lg:p-10 flex flex-col">
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
                Cuéntanos qué te gustaría mejorar
              </h2>
              <p className="mt-5 max-w-xl text-background/70 leading-relaxed">
                Tras una valoración inicial te propondremos un plan adaptado a ti, sin compromiso.
                Escríbenos por WhatsApp y te orientamos.
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

          <nav
            aria-label="Contenido de medicina estética facial"
            className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#dedad4] bg-[#dedad4] md:grid-cols-4"
          >
            {[
              ["01", "Qué te aporta", "#facial-esencial"],
              ["02", "Cómo se realiza", "#facial-proceso"],
              ["03", "Tratamientos", "#facial-opciones"],
              ["04", "Reservar", "#facial-reserva"],
            ].map(([number, label, href]) => (
              <a
                key={number}
                href={href}
                className="group flex min-h-16 items-center gap-3 bg-[#fbfaf8] px-4 py-3 transition-colors duration-200 hover:bg-[#f4f1ed] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8d8177] sm:px-5"
              >
                <span className="font-mono text-[10px] text-[#999188]">{number}</span>
                <span className="text-xs font-semibold text-[#3f3a35]">{label}</span>
              </a>
            ))}
          </nav>
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
            <EssentialBlock
              icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
              number="01"
              title="Qué te aporta"
              items={treatment.benefits}
            />
            <EssentialBlock
              icon={<ScanFace className="h-5 w-5" aria-hidden="true" />}
              number="02"
              title="Para quién está indicado"
              items={treatment.indications}
            />
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

function EssentialBlock({
  icon,
  number,
  title,
  items,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="grid gap-6 py-8 sm:grid-cols-[auto_1fr] sm:py-10">
      <div className="flex items-center gap-3 sm:flex-col sm:items-start">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-[#eee9e3] text-[#625d57]">
          {icon}
        </span>
        <span className="font-mono text-[10px] text-[#999188]">{number}</span>
      </div>
      <div>
        <h3 className="font-display text-3xl leading-tight">{title}</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#625d57]">
              <Check className="mt-1 h-4 w-4 shrink-0 text-[#8d8177]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
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
      <p className="text-[10px] uppercase tracking-[0.32em] text-gold mb-5">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-4xl leading-tight mb-8">{title}</h2>
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
