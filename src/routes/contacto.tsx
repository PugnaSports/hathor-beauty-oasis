import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SectionHeader } from "@/components/hathor/SectionHeader";
import { CTAAnchor } from "@/components/hathor/CTAButton";
import { CLINIC } from "@/lib/hathor";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Hathor Clínica en Olesa de Montserrat" },
      {
        name: "description",
        content:
          "Pide cita en Hathor Clínica. Teléfono 655 55 86 06, info@clinicahathor.es, Carrer Anselm Clavé 144, Olesa de Montserrat.",
      },
      { property: "og:title", content: "Contacto — Hathor Clínica" },
      {
        property: "og:description",
        content:
          "Teléfono, email, ubicación y horario de Hathor Clínica de Medicina Estética y Capilar.",
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <>
      <section className="px-6 pt-16 pb-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Contacto"
            title="Pide cita o visítanos en clínica"
            description="Estamos en el centro de Olesa de Montserrat. Llámanos, escríbenos por WhatsApp o ven a conocernos."
          />
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12">
          {/* Info column */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6 reveal">
              <InfoRow icon={MapPin} label="Dirección" value={CLINIC.address} />
              <InfoRow
                icon={Phone}
                label="Teléfono"
                value={
                  <a href={`tel:${CLINIC.phoneTel}`} className="hover:text-ink">
                    {CLINIC.phoneDisplay}
                  </a>
                }
              />
              <InfoRow
                icon={Mail}
                label="Email"
                value={
                  <a href={`mailto:${CLINIC.email}`} className="hover:text-ink">
                    {CLINIC.email}
                  </a>
                }
              />
              <InfoRow
                icon={Instagram}
                label="Instagram"
                value={
                  <a
                    href={CLINIC.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ink"
                  >
                    {CLINIC.instagramHandle}
                  </a>
                }
              />
            </div>

            <div className="reveal">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="h-4 w-4 text-gold" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
                  Horario
                </p>
              </div>
              <ul className="divide-y divide-border/60 border-y border-border/60">
                {CLINIC.schedule.map((s) => (
                  <li
                    key={s.day}
                    className="flex flex-wrap items-center justify-between gap-2 py-4 text-sm"
                  >
                    <span className="text-ink-muted">{s.day}</span>
                    <span className="text-ink">{s.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 reveal">
              <CTAAnchor href={`tel:${CLINIC.phoneTel}`}>
                <Phone className="h-4 w-4" /> Llamar ahora
              </CTAAnchor>
              <CTAAnchor
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noreferrer"
                variant="outline"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </CTAAnchor>
              <CTAAnchor
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
              >
                <MapPin className="h-4 w-4" /> Cómo llegar
              </CTAAnchor>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7 reveal">
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-nude/40 h-[420px] md:h-[560px] lg:h-full min-h-[460px]">
              <iframe
                title="Ubicación de Hathor Clínica en Olesa de Montserrat"
                src={CLINIC.mapsEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex gap-5 items-start">
      <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-nude">
        <Icon className="h-4 w-4 text-gold" />
      </span>
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{label}</p>
        <p className="mt-1 text-base text-ink-muted">{value}</p>
      </div>
    </div>
  );
}