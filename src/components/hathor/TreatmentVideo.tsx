import { useEffect, useRef } from "react";

interface TreatmentVideoProps {
  src: string;
  poster: string;
  title: string;
}

export function TreatmentVideo({ src, poster, title }: TreatmentVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

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
        if (entry.isIntersecting && !reduceMotion.matches) {
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
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={`Vídeo real de ${title.toLowerCase()} en Hathor`}
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
    />
  );
}
