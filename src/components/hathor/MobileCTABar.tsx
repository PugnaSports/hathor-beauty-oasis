import { MapPin, MessageCircle, Phone } from "lucide-react";
import { ExternalLink } from "@/components/hathor/ExternalLink";
import { CLINIC } from "@/lib/hathor";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
      <div className="grid grid-cols-3">
        <a
          href={`tel:${CLINIC.phoneTel}`}
          className="flex flex-col items-center gap-1 py-3 text-[10px] uppercase tracking-[0.18em] text-ink"
        >
          <Phone className="h-4 w-4 text-gold" />
          Llamar
        </a>
        <ExternalLink
          href={CLINIC.whatsapp}
          className="flex flex-col items-center gap-1 border-x border-border/60 py-3 text-[10px] uppercase tracking-[0.18em] text-ink"
        >
          <MessageCircle className="h-4 w-4 text-gold" />
          WhatsApp
        </ExternalLink>
        <ExternalLink
          href={CLINIC.mapsUrl}
          className="flex flex-col items-center gap-1 py-3 text-[10px] uppercase tracking-[0.18em] text-ink"
        >
          <MapPin className="h-4 w-4 text-gold" />
          Cómo llegar
        </ExternalLink>
      </div>
    </div>
  );
}