import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Maximize2, X } from "lucide-react";

interface TreatmentVideoProps {
  src: string;
  poster: string;
  title: string;
  autoPlayPreview?: boolean;
}

export function TreatmentVideo({
  src,
  poster,
  title,
  autoPlayPreview = true,
}: TreatmentVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!video) return;

    const updateMotionPreference = () => {
      if (reduceMotion.matches) {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (autoPlayPreview && entry.isIntersecting && !reduceMotion.matches && !isOpen) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    updateMotionPreference();
    reduceMotion.addEventListener("change", updateMotionPreference);
    observer.observe(video);

    return () => {
      reduceMotion.removeEventListener("change", updateMotionPreference);
      observer.disconnect();
      video.pause();
    };
  }, [autoPlayPreview, isOpen]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);

    if (open) {
      videoRef.current?.pause();
    } else {
      expandedVideoRef.current?.pause();
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="group/video relative h-full w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          aria-label={`Ampliar vídeo de ${title.toLowerCase()}`}
        >
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover/video:scale-[1.025] motion-reduce:transition-none"
          />
          <span className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white shadow-lg backdrop-blur-sm transition-transform duration-200 ease-out group-hover/video:scale-105 motion-reduce:transition-none">
            <Maximize2 className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-5 pb-5 pt-12 text-[10px] font-medium uppercase tracking-[0.2em] text-white">
            Ver vídeo completo
          </span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/95 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <Dialog.Content
          className="fixed inset-0 z-50 flex items-center justify-center p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white sm:p-6"
          onClick={(event) => {
            if (event.target === event.currentTarget) handleOpenChange(false);
          }}
        >
          <Dialog.Title className="sr-only">Vídeo de {title}</Dialog.Title>
          <Dialog.Description className="sr-only">
            Vídeo real del tratamiento en Hathor. Usa los controles para reproducirlo o silenciarlo.
          </Dialog.Description>
          <video
            ref={expandedVideoRef}
            src={src}
            poster={poster}
            autoPlay
            controls
            playsInline
            preload="auto"
            className="max-h-[100dvh] max-w-full bg-black object-contain sm:max-h-[calc(100dvh-3rem)] sm:rounded-xl"
          />
          <Dialog.Close className="absolute right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white shadow-lg backdrop-blur-sm transition-colors duration-200 ease-out hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-[0.97]">
            <X className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Cerrar vídeo</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
