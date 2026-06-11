import facialImg from "@/assets/hathor-facial.jpg";
import corporalImg from "@/assets/hathor-corporal.jpg";
import laserImg from "@/assets/hathor-laser.jpg";
import capilarImg from "@/assets/hathor-capilar.jpg";
import aparatologiaImg from "@/assets/hathor-aparatologia.jpg";
import asesoramientoImg from "@/assets/hathor-asesoramiento.jpg";

export const CLINIC = {
  name: "Hathor",
  fullName: "Hathor Clínica de Medicina Estética y Capilar",
  address: "Carrer Anselm Clavé 144, Olesa de Montserrat",
  phoneDisplay: "655 55 86 06",
  phoneTel: "+34655558606",
  whatsapp:
    "https://wa.me/34655558606?text=Hola%20Hathor%2C%20me%20gustar%C3%ADa%20pedir%20cita%20para%20una%20valoraci%C3%B3n.",
  email: "info@clinicahathor.es",
  instagramUrl: "https://www.instagram.com/hathor_clinica/",
  instagramHandle: "@hathor_clinica",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Carrer+Anselm+Clav%C3%A9+144%2C+Olesa+de+Montserrat",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Carrer+Anselm+Clav%C3%A9+144%2C+Olesa+de+Montserrat&output=embed",
  schedule: [
    { day: "Lunes", hours: "15:00 – 19:00" },
    { day: "Martes a Jueves", hours: "10:00 – 13:00 / 15:00 – 19:00" },
    { day: "Viernes", hours: "10:00 – 13:00 / 15:00 – 18:00" },
    { day: "Sábado y Domingo", hours: "Cerrado" },
  ],
  reels: [
    { id: "DXj23XVje6o", url: "https://www.instagram.com/reel/DXj23XVje6o/" },
    { id: "DW6siZDDWxD", url: "https://www.instagram.com/reel/DW6siZDDWxD/" },
    { id: "DWUbyAbjW1G", url: "https://www.instagram.com/reel/DWUbyAbjW1G/" },
  ],
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/tratamientos", label: "Tratamientos" },
  { to: "/productos", label: "Productos" },
  { to: "/sobre-nosotros", label: "Sobre nosotros" },
  { to: "/instagram", label: "Instagram" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function whatsappUrlFor(message: string) {
  return `https://wa.me/34655558606?text=${encodeURIComponent(message)}`;
}

export type Treatment = {
  slug: string;
  name: string;
  short: string;
  image: string;
  description: string;
  benefits: string[];
  indications: string[];
  experience: string[];
  whatsappMessage: string;
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "medicina-estetica-facial",
    name: "Medicina estética facial",
    short:
      "Tratamientos para realzar tus rasgos de forma natural y armoniosa.",
    image: facialImg,
    description:
      "Protocolos médicos para hidratar, revitalizar y armonizar el rostro respetando tus rasgos. Cada plan parte de una valoración personalizada para recomendarte solo lo que realmente necesitas.",
    benefits: [
      "Resultados naturales y armoniosos",
      "Mejora de la calidad e hidratación de la piel",
      "Prevención del envejecimiento facial",
      "Planes adaptados a tu edad y objetivos",
    ],
    indications: [
      "Personas que buscan rejuvenecimiento facial sin perder naturalidad",
      "Pieles apagadas, deshidratadas o con signos de fatiga",
      "Quien quiere prevenir o suavizar líneas de expresión",
    ],
    experience: [
      "Valoración inicial y análisis del rostro",
      "Diseño de un plan personalizado",
      "Sesión en clínica con técnicas mínimamente invasivas",
      "Seguimiento de la evolución",
    ],
    whatsappMessage:
      "Hola! Me gustaría pedir cita para medicina estética facial.",
  },
  {
    slug: "tratamientos-corporales",
    name: "Tratamientos corporales",
    short:
      "Cuida la piel y la silueta con protocolos personalizados y resultados visibles.",
    image: corporalImg,
    description:
      "Protocolos corporales para mantener la firmeza, mejorar la textura de la piel y trabajar zonas concretas según tus objetivos. Combinamos aparatología y rutinas adaptadas para resultados sostenibles.",
    benefits: [
      "Mejora de la firmeza y elasticidad",
      "Trabajo de zonas específicas",
      "Protocolos progresivos y no invasivos",
      "Resultados visibles y mantenidos en el tiempo",
    ],
    indications: [
      "Personas que quieren mejorar la calidad de su piel corporal",
      "Zonas con flacidez, retención o irregularidades",
      "Quien busca un plan de mantenimiento corporal",
    ],
    experience: [
      "Valoración corporal y análisis de objetivos",
      "Plan de sesiones a medida",
      "Tratamientos en cabina con aparatología avanzada",
      "Recomendaciones de cuidado en casa",
    ],
    whatsappMessage:
      "Hola! Me gustaría pedir cita para un tratamiento corporal.",
  },
  {
    slug: "laser",
    name: "Láser",
    short:
      "Aplicaciones láser adaptadas a cada fototipo y objetivo, con valoración previa.",
    image: laserImg,
    description:
      "Trabajamos con tecnología láser para distintos objetivos estéticos. Cada protocolo se valora antes de empezar, teniendo en cuenta tu fototipo, tu piel y el resultado que buscas.",
    benefits: [
      "Tratamientos precisos y controlados",
      "Resultados progresivos sesión a sesión",
      "Protocolos seguros, adaptados a tu fototipo",
      "Mínima alteración de la rutina diaria",
    ],
    indications: [
      "Personas que buscan tratamientos estéticos con láser",
      "Pieles con manchas, lesiones superficiales o vello no deseado",
      "Quien prefiere protocolos no invasivos",
    ],
    experience: [
      "Valoración previa del fototipo y la zona",
      "Explicación de la pauta y número de sesiones",
      "Sesiones en cabina con tecnología profesional",
      "Cuidados post-tratamiento personalizados",
    ],
    whatsappMessage:
      "Hola! Me gustaría pedir cita para un tratamiento láser.",
  },
  {
    slug: "medicina-capilar",
    name: "Medicina capilar",
    short:
      "Diagnóstico y cuidado avanzado para la salud del cuero cabelludo y el cabello.",
    image: capilarImg,
    description:
      "Valoramos el estado del cuero cabelludo y el cabello para diseñar un plan adaptado: prevención de caída, mejora de la densidad y cuidado integral con seguimiento médico.",
    benefits: [
      "Diagnóstico capilar profesional",
      "Planes para prevenir y frenar la caída",
      "Cuidado del cuero cabelludo",
      "Seguimiento de la evolución",
    ],
    indications: [
      "Personas con caída del cabello o pérdida de densidad",
      "Cuero cabelludo sensible, graso o con irritación",
      "Quien busca prevenir y cuidar la salud capilar",
    ],
    experience: [
      "Diagnóstico capilar con aparatología",
      "Diseño de un plan personalizado",
      "Tratamientos en clínica y pautas en casa",
      "Revisión y seguimiento periódico",
    ],
    whatsappMessage:
      "Hola! Me gustaría pedir cita para un tratamiento capilar.",
  },
  {
    slug: "aparatologia-avanzada",
    name: "Aparatología avanzada",
    short:
      "Tecnología Prysm iO para diagnóstico, seguimiento y personalización de cada tratamiento.",
    image: aparatologiaImg,
    description:
      "Trabajamos con aparatología avanzada como Prysm iO para diagnosticar, hacer seguimiento y personalizar tratamientos estéticos y capilares. Nos permite ajustar cada sesión a la evolución real de tu piel y tu cabello.",
    benefits: [
      "Análisis detallado de la piel",
      "Seguimiento objetivo de la evolución",
      "Protocolos personalizados según los resultados",
      "Valoración capilar avanzada",
    ],
    indications: [
      "Personas que quieren un diagnóstico estético objetivo",
      "Quien busca un plan estético o capilar a medida",
      "Tratamientos que requieren seguimiento preciso",
    ],
    experience: [
      "Análisis con aparatología avanzada",
      "Lectura de resultados y recomendaciones",
      "Plan personalizado de sesiones",
      "Revisión periódica de la evolución",
    ],
    whatsappMessage:
      "Hola! Me gustaría pedir cita para una valoración con aparatología avanzada.",
  },
  {
    slug: "asesoramiento-personalizado",
    name: "Asesoramiento personalizado",
    short:
      "Valoración inicial individualizada para diseñar el plan que mejor se adapta a ti.",
    image: asesoramientoImg,
    description:
      "Empezamos siempre por escucharte. La valoración personalizada nos permite recomendarte un plan realista, adaptado a tus objetivos, tu rutina y tu momento vital.",
    benefits: [
      "Recomendaciones honestas y sin compromiso",
      "Plan adaptado a tus objetivos reales",
      "Visión integral: estética, piel y cabello",
      "Información clara sobre cada tratamiento",
    ],
    indications: [
      "Personas que no saben por dónde empezar",
      "Quien quiere una segunda opinión profesional",
      "Quien busca un plan a medida, no estándar",
    ],
    experience: [
      "Conversación inicial sobre tus objetivos",
      "Valoración de piel y/o cabello",
      "Propuesta de plan personalizado",
      "Resolución de dudas sin compromiso",
    ],
    whatsappMessage:
      "Hola! Me gustaría pedir cita para un asesoramiento personalizado.",
  },
];

export function getTreatmentBySlug(slug: string) {
  return TREATMENTS.find((t) => t.slug === slug);
}

export const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "¿Necesito pedir cita previa?",
    answer:
      "Sí, trabajamos con cita previa para poder dedicarte el tiempo y la atención que necesitas.",
  },
  {
    question: "¿Puedo pedir información antes de reservar?",
    answer:
      "Sí, puedes escribirnos por WhatsApp y te orientaremos según tus necesidades.",
  },
  {
    question: "¿Los tratamientos son personalizados?",
    answer:
      "Sí, cada tratamiento se adapta a tu piel, tus objetivos y el estado en el que te encuentres.",
  },
  {
    question: "¿Dónde está ubicado Hathor?",
    answer: `Hathor está ubicado en ${CLINIC.address}.`,
  },
  {
    question: "¿Cómo puedo reservar cita?",
    answer:
      "Puedes reservar directamente desde los botones de la web, que te llevarán a WhatsApp con un mensaje preparado.",
  },
  {
    question: "¿Qué tratamiento me recomendáis si no sé cuál elegir?",
    answer:
      "Escríbenos por WhatsApp y te ayudaremos a escoger el tratamiento más adecuado para ti.",
  },
];