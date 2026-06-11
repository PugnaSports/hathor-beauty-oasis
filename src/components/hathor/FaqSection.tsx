import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/hathor/SectionHeader";
import { FAQ_ITEMS } from "@/lib/hathor";

type Props = {
  className?: string;
};

export function FaqSection({ className = "" }: Props) {
  return (
    <section className={`px-6 py-24 ${className}`}>
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Preguntas frecuentes"
          description="Resolvemos las dudas más habituales antes de tu primera cita."
          align="center"
        />

        <Accordion
          type="single"
          collapsible
          className="mt-12 reveal divide-y divide-border border-t border-b border-border"
        >
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-0"
            >
              <AccordionTrigger className="font-display text-lg md:text-xl text-ink py-6 hover:no-underline [&[data-state=open]>svg]:text-gold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-ink-muted text-base leading-relaxed pb-6 pr-8">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}