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

  const [mainMedia, ...secondaryMedia] = treatment.media ?? [];

  return (
    <main className="facial-page overflow-hidden bg-[#f7f9f7] text-[#18302c]">
      <section className="relative px-5 pb-10 pt-7 sm:px-6 md:pb-16 md:pt-10">
        <div className="pointer-events-none absolute -right-28 top-0 h-80 w-80 rounded-full bg-[#dfece7]/70 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <Link
            to="/tratamientos"
            className="inline-flex min-h-11 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#58716c] transition-colors duration-200 hover:text-[#18302c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#577f75]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Tratamientos
          </Link>

          <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(460px,1.12fr)] lg:items-stretch lg:gap-8">
            <div className="reveal flex flex-col justify-center rounded-[1.75rem] bg-[#e7f0ec] px-6 py-10 sm:px-9 md:py-14 lg:px-12">
              <div className="mb-8 flex items-center gap-3 text-[#577f75]">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[#577f75]/25 bg-white/55">
                  <ScanFace className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
                  Cuidado facial personalizado
                </span>
              </div>
              <h1 className="max-w-2xl font-display text-[clamp(2.7rem,6vw,5.4rem)] leading-[0.98] tracking-[-0.035em] text-balance">
                Medicina estética <span className="italic">facial</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#435e58] md:text-lg">
                Cuidamos tu rostro con criterio sanitario, respetando tus rasgos y buscando un
                resultado natural.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAAnchor href={waUrl} className="bg-[#18302c] text-[#f7f9f7] hover:bg-[#31534c]">
                  <MessageCircle className="h-4 w-4" /> Reservar valoración
                </CTAAnchor>
                <a
                  href="#facial-esencial"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#18302c]/20 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 hover:border-[#18302c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#577f75] active:scale-[0.98]"
                >
                  Ver el tratamiento <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="reveal relative min-h-[30rem] overflow-hidden rounded-[1.75rem] bg-[#d9e7e1] sm:min-h-[38rem] lg:min-h-[42rem]">
              {mainMedia ? (
                <TreatmentVideo
                  src={mainMedia.src}
                  poster={treatment.image}
                  title={mainMedia.title}
                />
              ) : (
                <img
                  src={treatment.image}
                  alt={treatment.name}
                  width={1280}
                  height={1600}
                  className="h-full w-full object-cover"
                />
              )}
              <div className="pointer-events-none absolute bottom-5 left-5 max-w-[15rem] rounded-2xl bg-[#f7f9f7]/92 p-4 shadow-sm backdrop-blur-md sm:bottom-7 sm:left-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#577f75]">
                  En consulta
                </p>
                <p className="mt-1.5 font-display text-xl leading-tight text-[#18302c]">
                  {mainMedia?.title ?? "Una experiencia pensada para tu piel"}
                </p>
              </div>
            </div>
          </div>

          <nav
            aria-label="Contenido de medicina estética facial"
            className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#18302c]/10 bg-[#18302c]/10 md:grid-cols-4"
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
                className="group flex min-h-16 items-center gap-3 bg-[#f7f9f7] px-4 py-3 transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#577f75] sm:px-5"
              >
                <span className="font-mono text-[10px] text-[#799089]">{number}</span>
                <span className="text-xs font-semibold text-[#29453f]">{label}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section id="facial-esencial" className="scroll-mt-24 px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="reveal lg:sticky lg:top-28 lg:self-start">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#577f75]">
              Tu piel, primero
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-[-0.025em] text-balance md:text-6xl">
              Lo que necesitas, y nada que no necesites
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#526963]">
              {treatment.description}
            </p>
          </div>

          <div className="reveal divide-y divide-[#18302c]/12 border-y border-[#18302c]/12">
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
        className="scroll-mt-24 bg-[#18302c] px-5 py-16 text-[#f7f9f7] sm:px-6 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="reveal max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a8c9c0]">
              Cómo se realiza
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.025em] text-balance md:text-6xl">
              Un proceso pensado para que entiendas cada paso
            </h2>
          </div>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] bg-white/15 md:grid-cols-2 lg:grid-cols-4">
            {treatment.experience.map((step, index) => (
              <li key={step} className="reveal min-h-56 bg-[#203b35] p-7 md:p-8">
                <span className="font-mono text-[11px] tracking-[0.18em] text-[#a8c9c0]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-14 max-w-[15rem] text-base leading-7 text-[#edf4f1]">{step}</p>
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
                  <div className="aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-white/5">
                    <TreatmentVideo src={item.src} poster={treatment.image} title={item.title} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-[#f7f9f7]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#bed0cb]">{item.description}</p>
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
            <div className="reveal grid gap-6 border-b border-[#18302c]/12 pb-9 md:grid-cols-[0.8fr_1.2fr] md:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#577f75]">
                  Tratamientos faciales
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.025em] md:text-5xl">
                  Tu plan empieza con una valoración
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[#526963] md:justify-self-end">
                Elegimos el tratamiento según el estado de tu piel, tus objetivos y el resultado que
                buscas. Estas son algunas de las opciones disponibles.
              </p>
            </div>

            <ul className="mt-2 divide-y divide-[#18302c]/12">
              {treatment.items.map((item, index) => (
                <li
                  key={item}
                  className="reveal group flex min-h-20 items-center gap-5 py-4 md:min-h-24"
                >
                  <span className="w-8 shrink-0 font-mono text-[10px] text-[#799089]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl leading-tight text-[#29453f] transition-transform duration-200 group-hover:translate-x-1 md:text-2xl">
                    {item}
                  </span>
                  <ArrowRight
                    className="ml-auto h-4 w-4 shrink-0 text-[#799089]"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section id="facial-reserva" className="scroll-mt-24 px-5 pb-24 sm:px-6 md:pb-28">
        <div className="reveal mx-auto grid max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#dcebe5] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="px-6 py-12 sm:px-10 md:p-14 lg:p-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#577f75]">
              Reserva tu valoración
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.025em] text-balance md:text-6xl">
              Hablemos de lo que te preocupa
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#435e58]">
              Te escuchamos, valoramos tu piel y te explicamos las opciones con claridad. Sin
              cambios bruscos y sin tratamientos innecesarios.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAAnchor href={waUrl} className="bg-[#18302c] text-[#f7f9f7] hover:bg-[#31534c]">
                <MessageCircle className="h-4 w-4" /> Reservar por WhatsApp
              </CTAAnchor>
              <CTAAnchor
                href={`tel:${CLINIC.phoneTel}`}
                variant="outline"
                className="border-[#18302c]/25 text-[#18302c] hover:border-[#18302c]"
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#18302c]/25 to-transparent" />
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
        <span className="grid h-11 w-11 place-items-center rounded-full bg-[#e3ede9] text-[#31534c]">
          {icon}
        </span>
        <span className="font-mono text-[10px] text-[#799089]">{number}</span>
      </div>
      <div>
        <h3 className="font-display text-3xl leading-tight">{title}</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[#435e58]">
              <Check className="mt-1 h-4 w-4 shrink-0 text-[#577f75]" aria-hidden="true" />
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
